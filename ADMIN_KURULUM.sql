-- Run only from your own Supabase SQL Editor after creating an Auth user.
-- Replace the example email with the email of the account you control.
do $$
declare
  target_email text := 'admin@example.invalid';
  target_user uuid;
begin
  if target_email = 'admin@example.invalid' then
    raise exception 'Replace target_email with your own admin email before running.';
  end if;
  select id into target_user from auth.users where lower(email) = lower(target_email);
  if target_user is null then
    raise exception 'Create the account in Authentication > Users first.';
  end if;
  insert into public.system_admins(user_id, email, full_name, status)
  values (target_user, target_email, 'System administrator', 'active')
  on conflict (user_id) do update set status = 'active', email = excluded.email;
end;
$$;
