import{a as b,t as h}from"../chunks/disclose-version.B2QCtcjf.js";import"../chunks/legacy.DDWvRdFC.js";import{a1 as y,a2 as T,h as g,s as c,f as x,c as s,V as m,C as i,a3 as D,r as d,a4 as S}from"../chunks/runtime.B_xPSnov.js";import{l as k,e as A}from"../chunks/events.C2DGU7Gf.js";import{r as C}from"../chunks/attributes.BGas5k6x.js";function O(e,r,t=r){var o=y();k(e,"input",()=>{var a=p(e)?_(e.value):e.value;t(a),o&&a!==(a=r())&&(e.value=a??"")}),T(()=>{var a=r();if(g&&e.defaultValue!==e.value){t(e.value);return}p(e)&&a===_(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function p(e){var r=e.type;return r==="number"||r==="range"}function _(e){return e===""?null:+e}function V(e){return function(...r){var t=r[0];return t.preventDefault(),e==null?void 0:e.apply(this,r)}}var j=h('<h2>Server Actions Demo</h2> <div><form><div><label for="todo">Todo</label> <div><input id="todo" type="text" placeholder="What needs to be done?" required></div></div> <div><button type="submit">Add Todo</button></div></form></div>',1);function J(e){let r=D("");async function t(){if(i(r))try{(await fetch("/call",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:i(r),userId:1,completed:!1})})).ok?(m(r,""),console.log("Todo added successfully")):console.error("Failed to add todo")}catch(n){console.error("Error:",n)}}var o=j(),a=c(x(o),2),l=s(a),v=s(l),u=c(s(v),2),f=s(u);C(f),d(u),d(v),S(2),d(l),d(a),O(f,()=>i(r),n=>m(r,n)),A("submit",l,V(t)),b(e,o)}export{J as component};