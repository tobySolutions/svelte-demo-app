import{W as f,X as l,Y as w,S as y,T,Z as W,_ as q,a0 as x}from"./runtime.B_xPSnov.js";import{a as B}from"./misc.B9QI8j-U.js";function b(r){var a=w,i=y;f(null),l(null);try{return r()}finally{f(a),l(i)}}function Y(r,a,i,n=i){r.addEventListener(a,()=>b(i));const e=r.__on_r;e?r.__on_r=()=>{e(),n()}:r.__on_r=n,B()}const O=new Set,D=new Set;function M(r,a,i,n){function e(t){if(n.capture||N.call(a,t),!t.cancelBubble)return b(()=>i.call(this,t))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?W(()=>{a.addEventListener(r,e,n)}):a.addEventListener(r,e,n),e}function Z(r,a,i,n,e){var t={capture:n,passive:e},o=M(r,a,i,t);(a===document.body||a===window||a===document)&&T(()=>{a.removeEventListener(r,o,t)})}function j(r){for(var a=0;a<r.length;a++)O.add(r[a]);for(var i of D)i(r)}function N(r){var g;var a=this,i=a.ownerDocument,n=r.type,e=((g=r.composedPath)==null?void 0:g.call(r))||[],t=e[0]||r.target,o=0,v=r.__root;if(v){var _=e.indexOf(v);if(_!==-1&&(a===document||a===window)){r.__root=a;return}var p=e.indexOf(a);if(p===-1)return;_<=p&&(o=_)}if(t=e[o]||r.target,t!==a){q(r,"currentTarget",{configurable:!0,get(){return t||i}});var E=w,L=y;f(null),l(null);try{for(var s,h=[];t!==null;){var d=t.assignedSlot||t.parentNode||t.host||null;try{var c=t["__"+n];if(c!==void 0&&!t.disabled)if(x(c)){var[S,...k]=c;S.apply(t,[r,...k])}else c.call(t,r)}catch(u){s?h.push(u):s=u}if(r.cancelBubble||d===a||d===null)break;t=d}if(s){for(let u of h)queueMicrotask(()=>{throw u});throw s}}finally{r.__root=a,delete r.currentTarget,f(E),l(L)}}}export{O as a,j as d,Z as e,N as h,Y as l,D as r};
