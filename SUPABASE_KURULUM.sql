-- Fresh public installation. Run the complete file in your own Supabase SQL Editor.
-- Does not migrate the legacy production database. No sample users or records.
begin;

create table if not exists public.schools (
  id uuid primary key default gen_random_uuid(),
  name text not null check (length(trim(name)) between 3 and 200),
  short_name text not null default 'OI',
  join_code text not null unique,
  created_by uuid not null references auth.users(id),
  settings jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);
create table if not exists public.system_admins (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  email text not null,
  full_name text not null,
  status text not null default 'active' check (status in ('active', 'disabled')),
  created_at timestamptz not null default now()
);
create table if not exists public.school_members (
  id uuid primary key default gen_random_uuid(),
  school_id uuid not null references public.schools(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  email text not null,
  full_name text not null,
  role text not null check (role in ('principal', 'teacher', 'counselor', 'admin')),
  status text not null default 'pending' check (status in ('pending', 'active', 'rejected', 'removed')),
  allowed_classes text[] not null default '{}',
  requested_at timestamptz not null default now(),
  approved_at timestamptz,
  approved_by uuid references auth.users(id),
  unique(school_id, user_id)
);
create table if not exists public.app_state (
  id uuid primary key references public.schools(id) on delete cascade,
  state jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id)
);
create table if not exists public.class_states (
  id uuid primary key default gen_random_uuid(),
  school_id uuid not null references public.schools(id) on delete cascade,
  class_name text not null,
  state jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id),
  unique(school_id, class_name)
);

create or replace function public.is_system_admin() returns boolean
language sql stable security definer set search_path = '' as $$
  select exists(select 1 from public.system_admins where user_id = auth.uid() and status = 'active');
$$;
create or replace function public.current_school_role(target_school uuid) returns text
language sql stable security definer set search_path = '' as $$
  select role from public.school_members
  where school_id = target_school and user_id = auth.uid() and status = 'active' limit 1;
$$;
create or replace function public.is_school_principal(target_school uuid) returns boolean
language sql stable security definer set search_path = '' as $$
  select coalesce(public.current_school_role(target_school) = 'principal', false);
$$;
create or replace function public.is_active_school_member(target_school uuid) returns boolean
language sql stable security definer set search_path = '' as $$
  select public.current_school_role(target_school) is not null;
$$;
create or replace function public.school_full_access(target_school uuid) returns boolean
language sql stable security definer set search_path = '' as $$
  select public.is_system_admin() or coalesce(public.current_school_role(target_school) in ('principal','counselor','admin'), false);
$$;
create or replace function public.can_access_school_class(target_school uuid, target_class text) returns boolean
language sql stable security definer set search_path = '' as $$
  select public.school_full_access(target_school) or exists (
    select 1 from public.school_members where school_id = target_school
    and user_id = auth.uid() and status = 'active' and role = 'teacher'
    and target_class = any(allowed_classes)
  );
$$;

-- Validate the entire class payload, not only the table's class_name column.
create or replace function public.valid_class_payload(payload jsonb, target_school uuid, target_class text)
returns boolean language plpgsql immutable set search_path = '' as $$
declare k text; item jsonb; student_ids text[];
begin
  if jsonb_typeof(payload) <> 'object' or payload #>> '{school,schoolId}' is distinct from target_school::text
     or jsonb_typeof(payload->'students') is distinct from 'array' then return false; end if;
  for item in select value from jsonb_array_elements(payload->'students') loop
    if item->>'className' is distinct from target_class
       or item->>'schoolId' is distinct from target_school::text then return false; end if;
  end loop;
  select coalesce(array_agg(value->>'id'), '{}'::text[]) into student_ids from jsonb_array_elements(payload->'students');
  foreach k in array array['formRecords','examRecords','academicMeetings','disciplineRecords','attendanceRecords','honorRecords','studyPlans'] loop
    if jsonb_typeof(coalesce(payload->k, '[]')) <> 'array' then return false; end if;
    for item in select value from jsonb_array_elements(coalesce(payload->k, '[]')) loop
      if item->>'schoolId' is distinct from target_school::text then return false; end if;
      if item ? 'studentId' then
        if not coalesce(item->>'studentId' = any(student_ids), false) then return false; end if;
      elsif item->>'className' is distinct from target_class then return false;
      end if;
      if item ? 'className' and item->>'className' is distinct from target_class then return false; end if;
    end loop;
  end loop;
  foreach k in array array['parentResources','surveyLinks','surveyResponses'] loop
    if coalesce(payload->k,'[]'::jsonb) <> '[]'::jsonb then return false; end if;
  end loop;
  for item in select value from jsonb_array_elements(coalesce(payload->'alumniRecords','[]')) loop
    if item->>'className' is distinct from target_class or item->>'schoolId' is distinct from target_school::text then return false; end if;
  end loop;
  return true;
exception when others then return false;
end;
$$;

create or replace function public.admin_create_school(school_name text, school_short_name text default null, supplied_join_code text default null)
returns table(school_id uuid, join_code text) language plpgsql security definer set search_path = '' as $$
declare sid uuid; code text;
begin
  if not public.is_system_admin() then raise exception 'System administrator required' using errcode = '42501'; end if;
  if length(trim(school_name)) not between 3 and 200 then raise exception 'Invalid school name'; end if;
  code := upper(coalesce(nullif(trim(supplied_join_code),''), replace(gen_random_uuid()::text,'-','')));
  if code !~ '^[A-Z0-9_-]{8,64}$' then raise exception 'School code must have 8-64 letters, digits, hyphens or underscores'; end if;
  insert into public.schools(name,short_name,join_code,created_by)
  values(trim(school_name),left(coalesce(nullif(trim(school_short_name),''),'OI'),16),code,auth.uid()) returning id into sid;
  insert into public.app_state(id,state,updated_by) values(sid,jsonb_build_object('school',jsonb_build_object('schoolId',sid::text),'students','[]'::jsonb),auth.uid());
  return query select sid,code;
end;
$$;
create or replace function public.admin_delete_school(target_school_id uuid) returns void
language plpgsql security definer set search_path = '' as $$
begin
  if not public.is_system_admin() then raise exception 'System administrator required' using errcode = '42501'; end if;
  delete from public.schools where id = target_school_id;
end;
$$;
create or replace function public.request_school_join(requested_join_code text, applicant_full_name text,
  requested_role text default 'teacher', requested_allowed_classes text[] default '{}')
returns table(request_id uuid, school_name text, status text)
language plpgsql security definer set search_path = '' as $$
declare target public.schools%rowtype; membership public.school_members%rowtype;
begin
  if auth.uid() is null then raise exception 'Authentication required' using errcode = '42501'; end if;
  if requested_role not in ('principal','teacher') then raise exception 'Invalid application role'; end if;
  if length(trim(coalesce(applicant_full_name,''))) not between 2 and 150 then raise exception 'Name required'; end if;
  if cardinality(coalesce(requested_allowed_classes,'{}')) > 100 then raise exception 'Too many classes'; end if;
  select * into target from public.schools where join_code = upper(trim(requested_join_code));
  if target.id is null then raise exception 'School code not found'; end if;
  insert into public.school_members(school_id,user_id,email,full_name,role,allowed_classes,status)
  values(target.id,auth.uid(),coalesce(auth.jwt()->>'email',''),trim(applicant_full_name),requested_role,
    case when requested_role = 'teacher' then coalesce(requested_allowed_classes,'{}') else '{}' end,'pending')
  on conflict(school_id,user_id) do nothing;
  select * into membership from public.school_members where school_id=target.id and user_id=auth.uid();
  return query select membership.id,target.name,membership.status;
end;
$$;
create or replace function public.set_member_approval(member_id uuid, approve boolean, new_role text default 'teacher', new_allowed_classes text[] default '{}')
returns void language plpgsql security definer set search_path = '' as $$
declare target public.school_members%rowtype;
begin
  select * into target from public.school_members where id = member_id for update;
  if target.id is null then raise exception 'Membership not found'; end if;
  if not (public.is_system_admin() or public.is_school_principal(target.school_id)) then
    raise exception 'Permission denied' using errcode = '42501'; end if;
  if new_role not in ('principal','teacher','counselor','admin') then raise exception 'Invalid role'; end if;
  if not public.is_system_admin() and (target.role = 'principal' or new_role = 'principal') then
    raise exception 'Only system administrators assign principals' using errcode = '42501'; end if;
  if target.user_id = auth.uid() then raise exception 'Cannot change your own membership'; end if;
  if cardinality(coalesce(new_allowed_classes,'{}')) > 100 then raise exception 'Too many classes'; end if;
  update public.school_members set status=case when approve then 'active' else 'rejected' end,
    role=case when approve then new_role else role end,
    allowed_classes=case when approve and new_role='teacher' then coalesce(new_allowed_classes,'{}') else '{}' end,
    approved_at=now(),approved_by=auth.uid() where id=member_id;
end;
$$;
create or replace function public.remove_school_member(member_id uuid) returns void
language plpgsql security definer set search_path = '' as $$
declare target public.school_members%rowtype;
begin
  select * into target from public.school_members where id=member_id for update;
  if target.id is null then raise exception 'Membership not found'; end if;
  if not(public.is_system_admin() or public.is_school_principal(target.school_id)) then
    raise exception 'Permission denied' using errcode='42501'; end if;
  if target.user_id=auth.uid() or (target.role='principal' and not public.is_system_admin()) then
    raise exception 'Permission denied' using errcode='42501'; end if;
  update public.school_members set status='removed',approved_at=now(),approved_by=auth.uid() where id=member_id;
end;
$$;

alter table public.schools enable row level security;
alter table public.system_admins enable row level security;
alter table public.school_members enable row level security;
alter table public.app_state enable row level security;
alter table public.class_states enable row level security;

-- One authoritative set of policies: remove previous policies on these app-owned tables.
do $$ declare p record; begin
  for p in select tablename,policyname from pg_policies where schemaname='public'
    and tablename in ('schools','system_admins','school_members','app_state','class_states') loop
    execute format('drop policy %I on public.%I',p.policyname,p.tablename);
  end loop;
end; $$;
create policy school_read on public.schools for select to authenticated
using(public.is_system_admin() or public.is_active_school_member(id));
create policy admin_self_read on public.system_admins for select to authenticated using(user_id=auth.uid());
create policy member_read on public.school_members for select to authenticated
using(user_id=auth.uid() or public.is_system_admin() or public.is_school_principal(school_id));
-- No direct membership INSERT/UPDATE/DELETE: approval must pass the checked RPCs.
create policy state_read on public.app_state for select to authenticated using(public.school_full_access(id));
create policy state_insert on public.app_state for insert to authenticated
with check(public.school_full_access(id) and state #>> '{school,schoolId}' = id::text and updated_by=auth.uid());
create policy state_update on public.app_state for update to authenticated using(public.school_full_access(id))
with check(public.school_full_access(id) and state #>> '{school,schoolId}' = id::text and updated_by=auth.uid());
create policy class_read on public.class_states for select to authenticated using(public.can_access_school_class(school_id,class_name));
create policy class_insert on public.class_states for insert to authenticated
with check(public.can_access_school_class(school_id,class_name) and updated_by=auth.uid() and public.valid_class_payload(state,school_id,class_name));
create policy class_update on public.class_states for update to authenticated using(public.can_access_school_class(school_id,class_name))
with check(public.can_access_school_class(school_id,class_name) and updated_by=auth.uid() and public.valid_class_payload(state,school_id,class_name));

revoke all on table public.schools,public.system_admins,public.school_members,public.app_state,public.class_states from public,anon,authenticated;
grant select on public.schools,public.system_admins,public.school_members to authenticated;
grant select,insert,update on public.app_state,public.class_states to authenticated;
revoke all on function public.is_system_admin(),public.current_school_role(uuid),public.is_school_principal(uuid),public.is_active_school_member(uuid),public.school_full_access(uuid),public.can_access_school_class(uuid,text),public.valid_class_payload(jsonb,uuid,text),public.admin_create_school(text,text,text),public.admin_delete_school(uuid),public.request_school_join(text,text,text,text[]),public.set_member_approval(uuid,boolean,text,text[]),public.remove_school_member(uuid) from public,anon;
grant execute on function public.is_system_admin(),public.current_school_role(uuid),public.is_school_principal(uuid),public.is_active_school_member(uuid),public.school_full_access(uuid),public.can_access_school_class(uuid,text),public.valid_class_payload(jsonb,uuid,text),public.admin_create_school(text,text,text),public.admin_delete_school(uuid),public.request_school_join(text,text,text,text[]),public.set_member_approval(uuid,boolean,text,text[]),public.remove_school_member(uuid) to authenticated;

-- Realtime is optional outside Supabase (including the local SQL test harness).
do $$ begin
  if exists(select 1 from pg_publication where pubname='supabase_realtime') then
    if not exists(select 1 from pg_publication_tables where pubname='supabase_realtime' and schemaname='public' and tablename='app_state') then
      alter publication supabase_realtime add table public.app_state;
    end if;
    if not exists(select 1 from pg_publication_tables where pubname='supabase_realtime' and schemaname='public' and tablename='class_states') then
      alter publication supabase_realtime add table public.class_states;
    end if;
  end if;
end; $$;
commit;
