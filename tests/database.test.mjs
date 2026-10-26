import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { PGlite } from '@electric-sql/pglite';

test('fresh schema, repeat installation, roles and tenant isolation', async () => {
 const db = new PGlite();
 const id = n => `00000000-0000-4000-8000-${String(n).padStart(12,'0')}`;
 const schoolA=id(100), schoolB=id(200);
 try {
  await db.exec(`create role anon; create role authenticated;
   create schema auth;
   create table auth.users(id uuid primary key, email text unique, raw_user_meta_data jsonb default '{}');
   create function auth.uid() returns uuid language sql stable as $$ select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid $$;
   create function auth.jwt() returns jsonb language sql stable as $$ select jsonb_build_object('sub',auth.uid(),'email',current_setting('request.jwt.claim.email',true)) $$;
   grant usage on schema public,auth to anon,authenticated;`);
  const schema = await readFile(new URL('../SUPABASE_KURULUM.sql',import.meta.url),'utf8');
  await db.exec(schema);
  await db.exec(schema);
  for(let n=1;n<=7;n++) await db.query('insert into auth.users(id,email) values($1,$2)',[id(n),`user${n}@example.invalid`]);
  await db.query(`insert into public.system_admins(user_id,email,full_name) values($1,'user1@example.invalid','Test owner')`,[id(1)]);
  for(const [school,name,code] of [[schoolA,'School A','CODEAAAA'],[schoolB,'School B','CODEBBBB']]) {
   await db.query('insert into public.schools(id,name,join_code,created_by) values($1,$2,$3,$4)',[school,name,code,id(1)]);
   await db.query('insert into public.app_state(id,state,updated_by) values($1,$2,$3)',[school,JSON.stringify({school:{schoolId:school},students:[]}),id(1)]);
  }
  for(const [user,school,role,status,classes] of [[2,schoolA,'principal','active',[]],[3,schoolB,'principal','active',[]],[4,schoolA,'teacher','active',['9-A']],[5,schoolB,'teacher','active',['9-A']],[6,schoolA,'teacher','pending',['9-A']],[7,schoolA,'teacher','removed',['9-A']]]) {
   await db.query('insert into public.school_members(user_id,school_id,email,full_name,role,status,allowed_classes) values($1,$2,$3,$4,$5,$6,$7)',[id(user),school,`user${user}@example.invalid`,'Test member',role,status,classes]);
  }
  const payload = (school,cls,student) => ({school:{schoolId:school},students:[{id:student,schoolId:school,className:cls,fullName:'Test student'}],formRecords:[],parentResources:[],surveyLinks:[],surveyResponses:[],alumniRecords:[]});
  for(const [school,cls,sid] of [[schoolA,'9-A','student-a'],[schoolA,'9-B','student-b'],[schoolB,'9-A','student-c']])
   await db.query('insert into public.class_states(school_id,class_name,state,updated_by) values($1,$2,$3,$4)',[school,cls,JSON.stringify(payload(school,cls,sid)),id(1)]);
  async function asUser(n) {
   await db.exec('reset role');
   await db.query("select set_config('request.jwt.claim.sub',$1,false),set_config('request.jwt.claim.email',$2,false)",[id(n),`user${n}@example.invalid`]);
   await db.exec('set role authenticated');
  }
  const rows = async (sql,args=[]) => (await db.query(sql,args)).rows;
  await db.exec('set role anon');
  await assert.rejects(()=>db.query('select * from public.app_state'),/permission denied/);
  await assert.rejects(()=>db.query("select * from public.request_school_join('CODEAAAA','Intruder','teacher','{}')"),/permission denied/);
  await asUser(2);
  assert.deepEqual((await rows('select id from public.app_state')).map(r=>r.id),[schoolA]);
  assert.equal((await rows('select * from public.class_states')).length,2);
  assert.equal((await rows('update public.app_state set updated_at=now() where id=$1 returning id',[schoolB])).length,0);
  await assert.rejects(()=>db.query("select * from public.admin_create_school('Unauthorized school')"),/administrator required/);
  const teacher=(await rows('select id from public.school_members where user_id=$1',[id(4)]))[0].id;
  await assert.rejects(()=>db.query("select public.set_member_approval($1,true,'principal','{}')",[teacher]),/Only system administrators/);
  await assert.rejects(()=>db.query("update public.school_members set role='principal' where id=$1",[teacher]),/permission denied/);
  await asUser(3);
  assert.deepEqual((await rows('select id from public.app_state')).map(r=>r.id),[schoolB]);
  await assert.rejects(()=>db.query('select public.remove_school_member($1)',[teacher]),/Permission denied/);
  await asUser(4);
  assert.equal((await rows('select * from public.app_state')).length,0);
  assert.deepEqual((await rows('select school_id,class_name from public.class_states')),[{school_id:schoolA,class_name:'9-A'}]);
  await assert.rejects(()=>db.query('insert into public.system_admins(user_id,email,full_name) values($1,$2,$3)',[id(4),'user4@example.invalid','Attack']),/permission denied/);
  await db.query('update public.class_states set state=$1,updated_by=$2 where school_id=$3 and class_name=$4',[JSON.stringify(payload(schoolA,'9-A','student-a')),id(4),schoolA,'9-A']);
  await assert.rejects(()=>db.query('update public.class_states set state=$1,updated_by=$2 where school_id=$3',[JSON.stringify(payload(schoolB,'9-A','student-c')),id(4),schoolA]),/row-level security/);
  await assert.rejects(()=>db.query('update public.class_states set state=$1,updated_by=$2 where school_id=$3',[JSON.stringify(payload(schoolA,'9-B','student-b')),id(4),schoolA]),/row-level security/);
  const malformed=payload(schoolA,'9-A','student-a'); malformed.formRecords=[{studentId:'student-c',schoolId:schoolA}];
  await assert.rejects(()=>db.query('update public.class_states set state=$1,updated_by=$2 where school_id=$3',[JSON.stringify(malformed),id(4),schoolA]),/row-level security/);
  malformed.formRecords=[]; malformed.parentResources=[{phone:'private'}];
  await assert.rejects(()=>db.query('update public.class_states set state=$1,updated_by=$2 where school_id=$3',[JSON.stringify(malformed),id(4),schoolA]),/row-level security/);
  await asUser(5);
  assert.deepEqual((await rows('select school_id,class_name from public.class_states')),[{school_id:schoolB,class_name:'9-A'}]);
  for(const user of [6,7]) {
   await asUser(user);
   assert.equal((await rows('select * from public.app_state')).length,0);
   assert.equal((await rows('select * from public.class_states')).length,0);
  }
  await asUser(1);
  assert.equal((await rows('select * from public.app_state')).length,2);
  assert.equal((await rows('select * from public.class_states')).length,3);
  const [created]=await rows("select * from public.admin_create_school('New School','NEW')");
  assert.ok(created.school_id && created.join_code.length>=8);
  await asUser(6);
  const [joined]=await rows("select * from public.request_school_join($1,'Test applicant','teacher',array['9-A'])",[created.join_code]);
  assert.equal(joined.status,'pending');
  await asUser(1);
  await db.query("select public.set_member_approval($1,true,'principal','{}')",[joined.request_id]);
  await asUser(6);
  assert.equal((await rows('select * from public.app_state')).length,1);
  await asUser(2);
  await db.query('select public.remove_school_member($1)',[teacher]);
  await asUser(4);
  assert.equal((await rows('select * from public.class_states')).length,0);
 } finally { await db.close(); }
});

