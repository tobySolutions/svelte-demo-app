import{G as g,v as I,k as O,l as b,I as p,m as h,o as T,J as D,u as _,K as L,M as V,N as H,O as M,P as Y,Q as k,i as C,R as P,p as $,h as E,S as j,a as G,y as J}from"./runtime.B_xPSnov.js";import{a as K,r as N,h as v}from"./events.C2DGU7Gf.js";import{r as Q}from"./svelte-head.DDdxuC56.js";import{b as W}from"./disclose-version.B2QCtcjf.js";const q=["touchstart","touchmove"];function z(t){return q.includes(t)}function x(t,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=n,t.nodeValue=n==null?"":n+"")}function B(t,e){return S(t,e)}function ee(t,e){g(),e.intro=e.intro??!1;const n=e.target,u=E,l=_;try{for(var r=I(n);r&&(r.nodeType!==8||r.data!==O);)r=b(r);if(!r)throw p;h(!0),T(r),D();const d=S(t,{...e,anchor:r});if(_===null||_.nodeType!==8||_.data!==L)throw V(),p;return h(!1),d}catch(d){if(d===p)return e.recover===!1&&H(),g(),M(n),h(!1),B(t,e);throw d}finally{h(u),T(l),Q()}}const i=new Map;function S(t,{target:e,anchor:n,props:u={},events:l,context:r,intro:d=!0}){g();var y=new Set,m=o=>{for(var a=0;a<o.length;a++){var s=o[a];if(!y.has(s)){y.add(s);var f=z(s);e.addEventListener(s,v,{passive:f});var R=i.get(s);R===void 0?(document.addEventListener(s,v,{passive:f}),i.set(s,1)):i.set(s,R+1)}}};m(Y(K)),N.add(m);var c=void 0,A=k(()=>{var o=n??e.appendChild(C());return P(()=>{if(r){$({});var a=J;a.c=r}l&&(u.$$events=l),E&&W(o,null),c=t(o,u)||{},E&&(j.nodes_end=_),r&&G()}),()=>{var f;for(var a of y){e.removeEventListener(a,v);var s=i.get(a);--s===0?(document.removeEventListener(a,v),i.delete(a)):i.set(a,s)}N.delete(m),w.delete(c),o!==n&&((f=o.parentNode)==null||f.removeChild(o))}});return w.set(c,A),c}let w=new WeakMap;function te(t){const e=w.get(t);e&&e()}export{ee as h,B as m,x as s,te as u};