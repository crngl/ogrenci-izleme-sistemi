import { before, after, test } from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { chromium } from 'playwright';
let server,browser,base;
before(async () => {
 server=spawn(process.execPath,['server.js'],{cwd:new URL('..',import.meta.url),env:{...process.env,PORT:'0'},stdio:['ignore','pipe','pipe']});
 const output=await Promise.race([once(server.stdout,'data'),once(server,'exit').then(()=>{throw Error('Test server exited');})]);
 base=String(output[0]).match(/http:\/\/localhost:\d+/)[0];
 browser=await chromium.launch(process.env.CI ? {headless:true} : {channel:'chrome',headless:true});
});
after(async () => {await browser?.close();server?.kill();});
async function pageFor(path='/',options={}) {
 const context=await browser.newContext({viewport:{width:1440,height:1000},...options});
 const page=await context.newPage();
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(base+path,{waitUntil:'networkidle'});
 return {page,context,errors};
}

test('public welcome fits desktop and mobile; private panel stays hidden',async()=>{
 const {page,context,errors}=await pageFor();try{
  assert.equal(await page.locator('.public-welcome').count(),1);
  assert.equal(await page.locator('.app-shell').isVisible(),false);
  await page.setViewportSize({width:390,height:844});
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  await page.screenshot({path:'test-results/home-mobile.png'});
  assert.deepEqual(errors,[]);
 }finally{await context.close();}
});

test('demo stores only tab data, refreshes, resets, and never calls the database',async()=>{
 const {page,context,errors}=await pageFor();const requests=[];
 try{
  await page.evaluate(()=>{
   localStorage.setItem('ois-public-cloud-config',JSON.stringify({url:'https://unused-project.supabase.co',anonKey:'sb_publishable_example'}));
   localStorage.setItem('ois-public-state',JSON.stringify({students:[{id:'private-sentinel',fullName:'Private data'}]}));
  });
  page.on('request',r=>{if(/supabase\.co|\/api\/state/.test(r.url()))requests.push(r.url());});
  await page.getByRole('link',{name:'Demoyu dene'}).click();
  await page.locator('.demo-notice').waitFor();
  assert.equal(await page.evaluate(()=>state.students.length),0);
  assert.equal(await page.evaluate(()=>ensureCloudClient()),null);
  await page.locator('#addStudentBtn').click();
  await page.locator('#studentForm input[name=fullName]').fill('Test Student');
  await page.locator('#studentForm input[name=schoolNo]').fill('100');
  await page.locator('#submitStudent').click();
  assert.equal(await page.evaluate(()=>state.students.length),1);
  await page.reload({waitUntil:'networkidle'});
  assert.equal(await page.evaluate(()=>state.students[0].fullName),'Test Student');
  assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('ois-public-state')).students[0].id),'private-sentinel');
  await page.locator('#resetDemoBtn').click();await page.locator('.demo-notice').waitFor();
  assert.equal(await page.evaluate(()=>state.students.length),0);
  await page.locator('#logoutBtn').click();await page.locator('.public-welcome').waitFor();
  assert.equal(await page.evaluate(()=>sessionStorage.getItem('ois-public-demo')),null);
  assert.deepEqual(requests,[]);assert.deepEqual(errors,[]);
 }finally{await context.close();}
});

test('stored HTML payloads cannot execute or add hostile controls; navigation works',async()=>{
 const {page,context,errors}=await pageFor('/?demo=1');try{
  await page.evaluate(()=>{
   const attack='<img src=x onerror="window.__xss=1"><button onclick="window.__xss=2" id="hostile">attack</button><svg onload="window.__xss=3"></svg>';
   state.students=[{id:'student-1',className:'9-A',fullName:attack,schoolNo:'100',guidanceNote:attack,risk:{},protective:[]}];selectedStudentId='student-1';
   state.honorRecords=[{id:'honor-1',studentId:'student-1',area:attack,type:attack,note:attack}];
   state.studyPlans=[{id:'plan-1',studentId:'student-1',course:attack,topic:attack,note:attack,date:'2026-01-01',minutes:10,questions:2}];
   renderAll();
  });
  for(const view of ['dossier','risk','forms','exams','attendance','discipline','honor','alumni','parentNetwork','planning','reports','settings']){
   await page.locator(`.nav-item[data-view="${view}"]`).first().click();
   assert.equal(await page.locator(`#${view}View.active`).count(),1);
   assert.equal(await page.locator('.render-error').count(),0,view);
  }
  assert.equal(await page.evaluate(()=>window.__xss),undefined);
  assert.equal(await page.locator('#hostile').count(),0,await page.locator('#hostile').evaluateAll(nodes=>nodes.map(n=>n.parentElement.outerHTML).join('\n')));
  assert.equal(await page.locator('[onclick],[onerror],[onload],[onsubmit]').count(),0);
  await page.locator('#themeSelect').selectOption('dark');
  await page.locator('#languageSelect').selectOption('en');
  await page.locator('#saveAppearanceBtn').click();
  assert.equal(await page.locator('body').getAttribute('data-theme'),'dark');
  assert.equal(await page.locator('html').getAttribute('lang'),'en');
  await page.screenshot({path:'test-results/demo-dark.png'});
  assert.deepEqual(errors,[]);
 }finally{await context.close();}
});

test('setup rejects secrets and authentication never trusts cached membership',async()=>{
 const {page,context,errors}=await pageFor('/?setup=1');try{
  await page.locator('input[name=url]').fill('https://test-project.supabase.co');
  await page.locator('input[name=key]').fill('sb_secret_forbidden');
  await page.locator('#publicSetupForm button').click();
  assert.match(await page.locator('#setupNotice').textContent(),/publishable/);
  assert.equal(await page.evaluate(()=>localStorage.getItem(cloudConfigStorageKey)),null);
  await page.evaluate(()=>{
   currentAuthUser={id:'test-user'};
   localStorage.setItem(authMembershipBackupKey,JSON.stringify({user_id:'test-user',membership:{id:'forged',status:'active',role:'principal'},school:{id:'forged-school'}}));
   cloudClient={from:()=>({select(){return this;},eq(){return this;},order:async()=>({data:null,error:{message:'Offline'}})})};
   localStorage.setItem(cloudConfigStorageKey,JSON.stringify({url:'https://test-project.supabase.co',anonKey:'sb_publishable_test'}));
  });
  const outcome=await page.evaluate(async()=>{try{await loadCurrentMembership();return 'allowed';}catch{return currentMembership===null&&currentSchool===null?'blocked':'unsafe';}});
  assert.equal(outcome,'blocked');
  assert.deepEqual(errors,[]);
 }finally{await context.close();}
});

test('imports read synthetic Word, Excel and PDF; unsafe files are rejected',async()=>{
 const {page,context,errors}=await pageFor('/?demo=1');try{
  const result=await page.evaluate(async()=>{
   const zip=new JSZip();
   zip.file('[Content_Types].xml','<?xml version="1.0"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/></Types>');
   zip.file('_rels/.rels','<?xml version="1.0"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="r1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>');
   zip.file('word/document.xml','<?xml version="1.0"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body><w:p><w:r><w:t>Test Student Word</w:t></w:r></w:p></w:body></w:document>');
   const word=await extractTextFromFile(new File([await zip.generateAsync({type:'uint8array'})],'test.docx'));
   const book=XLSX.utils.book_new();XLSX.utils.book_append_sheet(book,XLSX.utils.aoa_to_sheet([['Student','Score'],['Test Student',80]]),'Data');
   const excel=await extractTextFromFile(new File([XLSX.write(book,{type:'array',bookType:'xlsx'})],'test.xlsx'));
   const objects=['<< /Type /Catalog /Pages 2 0 R >>','<< /Type /Pages /Kids [3 0 R] /Count 1 >>','<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>','<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>'];
   const content='BT /F1 18 Tf 50 700 Td (Test Student PDF reading fixture) Tj ET';objects.push(`<< /Length ${content.length} >>\nstream\n${content}\nendstream`);
   let pdf='%PDF-1.4\n';const offsets=[0];objects.forEach((o,i)=>{offsets.push(pdf.length);pdf+=`${i+1} 0 obj\n${o}\nendobj\n`;});const xref=pdf.length;
   pdf+=`xref\n0 6\n0000000000 65535 f \n`+offsets.slice(1).map(o=>`${String(o).padStart(10,'0')} 00000 n \n`).join('')+`trailer\n<< /Root 1 0 R /Size 6 >>\nstartxref\n${xref}\n%%EOF`;
   const pdfText=await extractTextFromFile(new File([pdf],'test.pdf',{type:'application/pdf'}));
   let rejected=false;try{await extractTextFromFile(new File(['<script>attack</script>'],'unsafe.html',{type:'text/html'}));}catch{rejected=true;}
   return {word,excel,pdfText,rejected};
  });
  assert.match(result.word,/Test Student Word/);assert.match(result.excel,/Test Student/);assert.match(result.pdfText,/Test Student PDF/);assert.equal(result.rejected,true);
  assert.deepEqual(errors,[]);
 }finally{await context.close();}
});

test('server denies private files, traversal and writes; sends protective headers',async()=>{
 for(const path of ['/SUPABASE_KURULUM.sql','/ADMIN_KURULUM.sql','/.git/config','/data/database.json','/tests/database.test.mjs','/package.json','/api/state','/%2e%2e%5cpackage.json']) {
  assert.equal((await fetch(base+path)).status,404,path);
 }
 assert.equal((await fetch(base+'/app.js',{method:'PUT',body:'bad'})).status,405);
 const response=await fetch(base+'/');
 assert.equal(response.headers.get('x-content-type-options'),'nosniff');
 assert.match(response.headers.get('content-security-policy'),/script-src-attr 'none'/);
});

test('photo OCR reads a synthetic image', {timeout:120000}, async()=>{
 const {page,context}=await pageFor('/?demo=1');try{
  const text=await page.evaluate(async()=>{
   const canvas=document.createElement('canvas');canvas.width=1400;canvas.height=500;
   const ctx=canvas.getContext('2d');ctx.fillStyle='white';ctx.fillRect(0,0,1400,500);
   ctx.fillStyle='black';ctx.font='bold 64px Arial';ctx.fillText('TEST STUDENT 1234',80,240);
   const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));
   return extractTextFromFile(new File([blob],'synthetic-photo.png',{type:'image/png'}));
  });
  assert.match(text,/TEST\s+STUDENT\s+1234/i);
 }finally{await context.close();}
});

test('real login route retains verified session on refresh and clears it on logout (mock API)',async()=>{
 const context=await browser.newContext();const page=await context.newPage();const errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 const uid='00000000-0000-4000-8000-000000000002',sid='00000000-0000-4000-8000-000000000100';
 const user={id:uid,aud:'authenticated',role:'authenticated',email:'principal@example.invalid',email_confirmed_at:'2026-01-01T00:00:00Z',app_metadata:{provider:'email',providers:['email']},user_metadata:{},created_at:'2026-01-01T00:00:00Z'};
 const school={id:sid,name:'Mock School',short_name:'TEST',join_code:'TESTCODE',settings:{}};
 const membership={id:'00000000-0000-4000-8000-000000000300',school_id:sid,user_id:uid,role:'principal',status:'active',email:user.email,full_name:'Test Principal',allowed_classes:[],schools:school};
 const encode=o=>Buffer.from(JSON.stringify(o)).toString('base64url');
 const token=encode({alg:'HS256',typ:'JWT'})+'.'+encode({sub:uid,exp:Math.floor(Date.now()/1000)+3600,aud:'authenticated',role:'authenticated'})+'.test-signature';
 let userChecks=0,signIns=0;
 await page.route('**/cloud-config.js*',r=>r.fulfill({contentType:'text/javascript',body:`window.OIS_CLOUD_CONFIG=${JSON.stringify({url:'https://mock-school.supabase.co',anonKey:'sb_publishable_fixture',realtime:false})}`}));
 await page.route('https://mock-school.supabase.co/**',async r=>{
  const url=r.request().url();let body=[];
  if(url.includes('/auth/v1/token')) {signIns++;body={access_token:token,refresh_token:'mock-refresh-token',expires_in:3600,token_type:'bearer',user};}
  else if(url.includes('/auth/v1/user')) {userChecks++;body=user;}
  else if(url.includes('/auth/v1/logout')) {await r.fulfill({status:204});return;}
  else if(url.includes('/rest/v1/school_members')) body=[membership];
  else if(url.includes('/rest/v1/app_state')) body=[{state:{school:{schoolId:sid,name:school.name},students:[]},updated_at:new Date().toISOString()}];
  await r.fulfill({status:200,contentType:'application/json',body:JSON.stringify(body)});
 });
 try{
  await page.goto(base+'/?login=1',{waitUntil:'networkidle'});
  await page.locator('#authGate input[name=email]').fill(user.email);
  await page.locator('#authGate input[name=password]').fill('fixture-password');
  assert.equal(await page.locator('#authGate input[type=hidden]').getAttribute('name'),'accountRole');
  await page.getByRole('button',{name:'Giriş yap',exact:true}).click();
  await page.locator('body.auth-unlocked').waitFor({timeout:8000}).catch(async error=>{error.message += '\n'+await page.locator('#authGate').innerText()+'\n'+JSON.stringify(errors);throw error;});
  assert.equal(signIns,1);
  await page.reload({waitUntil:'networkidle'});
  await page.locator('body.auth-unlocked').waitFor();
  assert.equal(signIns,1,'Refresh must not require password login again');
  assert.ok(userChecks>=2,'Server verification is required');
  assert.equal(await page.evaluate(()=>currentSchool.id),sid);
  assert.equal(await page.locator('.render-error').count(),0);
  assert.equal(await page.evaluate(()=>document.cookie.includes('session')),false);
  await page.locator('#logoutBtn').click();
  await page.locator('.public-welcome').waitFor();
  await page.goto(base+'/?login=1',{waitUntil:'networkidle'});
  await page.locator('#authGate input[name=email]').waitFor();
  assert.equal(await page.locator('.app-shell').isVisible(),false);
  assert.deepEqual(errors,[]);
 }finally{await context.close();}
});

