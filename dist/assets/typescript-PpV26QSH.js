import{bG as B,bH as M,y as b,bI as g,bs as I,r as w,bJ as G,bK as z,z as Q,v as J,bL as H,m as U,bM as k,bN as K,b2 as W,b3 as q}from"./index-B2ff-rFN.js";function v(e){var n;const r=g(e);return(n=r==null?void 0:r.$el)!=null?n:r}const y=J?window:void 0;function E(...e){let n,r,t,a;if(B(e[0])||Array.isArray(e[0])?([r,t,a]=e,n=y):[n,r,t,a]=e,!n)return M;Array.isArray(r)||(r=[r]),Array.isArray(t)||(t=[t]);const c=[],o=()=>{c.forEach(l=>l()),c.length=0},i=(l,p,s,u)=>(l.addEventListener(p,s,u),()=>l.removeEventListener(p,s,u)),f=b(()=>[v(n),g(a)],([l,p])=>{o(),l&&c.push(...r.flatMap(s=>t.map(u=>i(l,s,u,p))))},{immediate:!0,flush:"post"}),m=()=>{f(),o()};return I(m),m}let A=!1;function me(e,n,r={}){const{window:t=y,ignore:a=[],capture:c=!0,detectIframe:o=!1}=r;if(!t)return;H&&!A&&(A=!0,Array.from(t.document.body.children).forEach(s=>s.addEventListener("click",M)));let i=!0;const f=s=>a.some(u=>{if(typeof u=="string")return Array.from(t.document.querySelectorAll(u)).some(d=>d===s.target||s.composedPath().includes(d));{const d=v(u);return d&&(s.target===d||s.composedPath().includes(d))}}),l=[E(t,"click",s=>{const u=v(e);if(!(!u||u===s.target||s.composedPath().includes(u))){if(s.detail===0&&(i=!f(s)),!i){i=!0;return}n(s)}},{passive:!0,capture:c}),E(t,"pointerdown",s=>{const u=v(e);u&&(i=!s.composedPath().includes(u)&&!f(s))},{passive:!0}),o&&E(t,"blur",s=>{var u;const d=v(e);((u=t.document.activeElement)==null?void 0:u.tagName)==="IFRAME"&&!(d!=null&&d.contains(t.document.activeElement))&&n(s)})].filter(Boolean);return()=>l.forEach(s=>s())}function F(e,n=!1){const r=w(),t=()=>r.value=!!e();return t(),G(t,n),r}function D(e){return JSON.parse(JSON.stringify(e))}const j=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N="__vueuse_ssr_handlers__";j[N]=j[N]||{};function ve(e,n,{window:r=y,initialValue:t=""}={}){const a=w(t),c=Q(()=>{var o;return v(n)||((o=r==null?void 0:r.document)==null?void 0:o.documentElement)});return b([c,()=>g(e)],([o,i])=>{var f;if(o&&r){const m=(f=r.getComputedStyle(o).getPropertyValue(i))==null?void 0:f.trim();a.value=m||t}},{immediate:!0}),b(a,o=>{var i;(i=c.value)!=null&&i.style&&c.value.style.setProperty(g(e),o)}),a}var $=Object.getOwnPropertySymbols,X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable,Z=(e,n)=>{var r={};for(var t in e)X.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&$)for(var t of $(e))n.indexOf(t)<0&&Y.call(e,t)&&(r[t]=e[t]);return r};function Oe(e,n,r={}){const t=r,{window:a=y}=t,c=Z(t,["window"]);let o;const i=F(()=>a&&"ResizeObserver"in a),f=()=>{o&&(o.disconnect(),o=void 0)},m=b(()=>v(e),p=>{f(),i.value&&a&&p&&(o=new ResizeObserver(n),o.observe(p,c))},{immediate:!0,flush:"post"}),l=()=>{f(),m()};return I(l),{isSupported:i,stop:l}}var x=Object.getOwnPropertySymbols,ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable,ne=(e,n)=>{var r={};for(var t in e)ee.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&x)for(var t of x(e))n.indexOf(t)<0&&te.call(e,t)&&(r[t]=e[t]);return r};function be(e,n,r={}){const t=r,{window:a=y}=t,c=ne(t,["window"]);let o;const i=F(()=>a&&"MutationObserver"in a),f=()=>{o&&(o.disconnect(),o=void 0)},m=b(()=>v(e),p=>{f(),i.value&&a&&p&&(o=new MutationObserver(n),o.observe(p,c))},{immediate:!0}),l=()=>{f(),m()};return I(l),{isSupported:i,stop:l}}var C;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(C||(C={}));var re=Object.defineProperty,L=Object.getOwnPropertySymbols,se=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable,R=(e,n,r)=>n in e?re(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,ae=(e,n)=>{for(var r in n||(n={}))se.call(n,r)&&R(e,r,n[r]);if(L)for(var r of L(n))oe.call(n,r)&&R(e,r,n[r]);return e};const ie={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};ae({linear:z},ie);function ye(e,n,r,t={}){var a,c,o;const{clone:i=!1,passive:f=!1,eventName:m,deep:l=!1,defaultValue:p}=t,s=U(),u=(s==null?void 0:s.emit)||((a=s==null?void 0:s.$emit)==null?void 0:a.bind(s))||((o=(c=s==null?void 0:s.proxy)==null?void 0:c.$emit)==null?void 0:o.bind(s==null?void 0:s.proxy));let d=m;d=m||d||`update:${n.toString()}`;const P=O=>i?k(i)?i(O):D(O):O,S=()=>K(e[n])?P(e[n]):p;if(f){const O=S(),h=w(O);return b(()=>e[n],_=>h.value=P(_)),b(h,_=>{(_!==e[n]||l)&&u(d,_)},{deep:l}),h}else return Q({get(){return S()},set(O){u(d,O)}})}var ue=9007199254740991;function _e(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=ue}var le="[object Arguments]";function T(e){return W(e)&&q(e)==le}var V=Object.prototype,ce=V.hasOwnProperty,fe=V.propertyIsEnumerable,ge=T(function(){return arguments}())?T:function(e){return W(e)&&ce.call(e,"callee")&&!fe.call(e,"callee")};function he(e,n){for(var r=-1,t=n.length,a=e.length;++r<t;)e[a+r]=n[r];return e}class de extends Error{constructor(n){super(n),this.name="ElementPlusError"}}function Ee(e,n){throw new de(`[${e}] ${n}`)}function Ie(e,n){}const we=e=>e;export{Oe as a,ve as b,ye as c,Ie as d,be as e,v as f,he as g,_e as h,ge as i,we as m,me as o,Ee as t,E as u};