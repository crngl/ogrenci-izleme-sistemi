import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';
import {parse} from 'acorn';
test('public source contains no personal seed, credentials or unsafe HTML assignments',async()=>{
 const root=new URL('..',import.meta.url), app=await readFile(new URL('app.js',root),'utf8');
 assert.match(app,/const defaultStudents = \[\];/);
 assert.doesNotMatch(app,/[\w.+-]+@(gmail|hotmail|outlook)\.com\b|sb_secret_|postgres(?:ql)?:\/\//i);
 assert.doesNotMatch(app,/\bon(?:click|error|load|submit|change|input)=/);
 const config=await readFile(new URL('cloud-config.js',root),'utf8');
 assert.match(config,/url: ""/);assert.match(config,/anonKey: ""/);
 const ast=parse(app,{ecmaVersion:'latest'});
 function scan(n){if(!n||typeof n!=='object')return;if(n.type==='AssignmentExpression'&&n.left.type==='MemberExpression')assert.notEqual(n.left.property.name,'innerHTML');for(const v of Object.values(n)){if(Array.isArray(v))v.forEach(scan);else if(v&&typeof v==='object')scan(v);}}
 scan(ast);
 const files=await readdir(root);
 for(const name of files) assert.ok(!/ADMIN_HESAP|database\.json|\.zip$|auth-preview/.test(name),name);
});

