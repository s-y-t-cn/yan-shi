import{b6 as Le,b as Be,h as Te,u as Ve,an as ge,y as M,a as j,r as _,o as x,L as A,A as ke,Q as V,q as ee,d as I,c as S,e as L,k as w,n as g,g as r,z as H,_ as G,b9 as je,a2 as ae,a9 as oe,bx as _e,j as Ge,a4 as Qe,W as Ze,ac as Je,a0 as xe,R as Z,p as et,l as ne,w as K,C as le,aV as Ce,B as N,G as se,aa as $e,t as we,D as tt,E as ye,S as at,I as Me,H as ot,s as nt}from"./index-C_YbkAKH.js";import{d as lt,b as st,e as rt,f as it,E as Ee}from"./index-CYVqnvBV.js";import{u as ct,d as ut,C as ht,a as dt}from"./index-Dli7m8L2.js";import{a as ft,U as ce,C as vt,b as pt,E as mt}from"./index-QOiVHojV.js";import{d as Se}from"./error-CFjebLo2.js";const Ut=(e,a)=>{if(!Le||!e||!a)return!1;const o=e.getBoundingClientRect();let t;return a instanceof Element?t=a.getBoundingClientRect():t={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},o.top<t.bottom&&o.bottom>t.top&&o.right>t.left&&o.left<t.right},ue=e=>{let a,o;return e.type==="touchend"?(o=e.changedTouches[0].clientY,a=e.changedTouches[0].clientX):e.type.startsWith("touch")?(o=e.touches[0].clientY,a=e.touches[0].clientX):(o=e.clientY,a=e.clientX),{clientX:a,clientY:o}},bt=Be({color:{type:Te(Object),required:!0},vertical:{type:Boolean,default:!1}});let re=!1;function Y(e,a){if(!Le)return;const o=function(n){var s;(s=a.drag)==null||s.call(a,n)},t=function(n){var s;document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",t),document.removeEventListener("touchmove",o),document.removeEventListener("touchend",t),document.onselectstart=null,document.ondragstart=null,re=!1,(s=a.end)==null||s.call(a,n)},l=function(n){var s;re||(n.preventDefault(),document.onselectstart=()=>!1,document.ondragstart=()=>!1,document.addEventListener("mousemove",o),document.addEventListener("mouseup",t),document.addEventListener("touchmove",o),document.addEventListener("touchend",t),re=!0,(s=a.start)==null||s.call(a,n))};e.addEventListener("mousedown",l),e.addEventListener("touchstart",l,{passive:!1})}const gt=e=>{const a=ee(),{t:o}=Ve(),t=ge(),l=ge(),n=M(()=>e.color.get("alpha")),s=M(()=>o("el.colorpicker.alphaLabel"));function u(f){var v;f.target!==t.value&&c(f),(v=t.value)==null||v.focus()}function c(f){if(!l.value||!t.value)return;const h=a.vnode.el.getBoundingClientRect(),{clientX:p,clientY:m}=ue(f);if(e.vertical){let k=m-h.top;k=Math.max(t.value.offsetHeight/2,k),k=Math.min(k,h.height-t.value.offsetHeight/2),e.color.set("alpha",Math.round((k-t.value.offsetHeight/2)/(h.height-t.value.offsetHeight)*100))}else{let k=p-h.left;k=Math.max(t.value.offsetWidth/2,k),k=Math.min(k,h.width-t.value.offsetWidth/2),e.color.set("alpha",Math.round((k-t.value.offsetWidth/2)/(h.width-t.value.offsetWidth)*100))}}function d(f){const{code:v,shiftKey:h}=f,p=h?10:1;switch(v){case V.left:case V.down:f.preventDefault(),f.stopPropagation(),C(-p);break;case V.right:case V.up:f.preventDefault(),f.stopPropagation(),C(p);break}}function C(f){let v=n.value+f;v=v<0?0:v>100?100:v,e.color.set("alpha",v)}return{thumb:t,bar:l,alpha:n,alphaLabel:s,handleDrag:c,handleClick:u,handleKeydown:d}},kt=(e,{bar:a,thumb:o,handleDrag:t})=>{const l=ee(),n=j("color-alpha-slider"),s=_(0),u=_(0),c=_();function d(){if(!o.value||e.vertical)return 0;const $=l.vnode.el,b=e.color.get("alpha");return $?Math.round(b*($.offsetWidth-o.value.offsetWidth/2)/100):0}function C(){if(!o.value)return 0;const $=l.vnode.el;if(!e.vertical)return 0;const b=e.color.get("alpha");return $?Math.round(b*($.offsetHeight-o.value.offsetHeight/2)/100):0}function f(){if(e.color&&e.color.value){const{r:$,g:b,b:D}=e.color.toRgb();return`linear-gradient(to right, rgba(${$}, ${b}, ${D}, 0) 0%, rgba(${$}, ${b}, ${D}, 1) 100%)`}return""}function v(){s.value=d(),u.value=C(),c.value=f()}x(()=>{if(!a.value||!o.value)return;const $={drag:b=>{t(b)},end:b=>{t(b)}};Y(a.value,$),Y(o.value,$),v()}),A(()=>e.color.get("alpha"),()=>v()),A(()=>e.color.value,()=>v());const h=M(()=>[n.b(),n.is("vertical",e.vertical)]),p=M(()=>n.e("bar")),m=M(()=>n.e("thumb")),k=M(()=>({background:c.value})),B=M(()=>({left:ke(s.value),top:ke(u.value)}));return{rootKls:h,barKls:p,barStyle:k,thumbKls:m,thumbStyle:B,update:v}},_t="ElColorAlphaSlider",Ct=I({name:_t}),$t=I({...Ct,props:bt,setup(e,{expose:a}){const o=e,{alpha:t,alphaLabel:l,bar:n,thumb:s,handleDrag:u,handleClick:c,handleKeydown:d}=gt(o),{rootKls:C,barKls:f,barStyle:v,thumbKls:h,thumbStyle:p,update:m}=kt(o,{bar:n,thumb:s,handleDrag:u});return a({update:m,bar:n,thumb:s}),(k,B)=>(S(),L("div",{class:g(r(C))},[w("div",{ref_key:"bar",ref:n,class:g(r(f)),style:H(r(v)),onClick:r(c)},null,14,["onClick"]),w("div",{ref_key:"thumb",ref:s,class:g(r(h)),style:H(r(p)),"aria-label":r(l),"aria-valuenow":r(t),"aria-orientation":k.vertical?"vertical":"horizontal","aria-valuemin":"0","aria-valuemax":"100",role:"slider",tabindex:"0",onKeydown:r(d)},null,46,["aria-label","aria-valuenow","aria-orientation","onKeydown"])],2))}});var wt=G($t,[["__file","alpha-slider.vue"]]);const yt=I({name:"ElColorHueSlider",props:{color:{type:Object,required:!0},vertical:Boolean},setup(e){const a=j("color-hue-slider"),o=ee(),t=_(),l=_(),n=_(0),s=_(0),u=M(()=>e.color.get("hue"));A(()=>u.value,()=>{v()});function c(h){h.target!==t.value&&d(h)}function d(h){if(!l.value||!t.value)return;const m=o.vnode.el.getBoundingClientRect(),{clientX:k,clientY:B}=ue(h);let $;if(e.vertical){let b=B-m.top;b=Math.min(b,m.height-t.value.offsetHeight/2),b=Math.max(t.value.offsetHeight/2,b),$=Math.round((b-t.value.offsetHeight/2)/(m.height-t.value.offsetHeight)*360)}else{let b=k-m.left;b=Math.min(b,m.width-t.value.offsetWidth/2),b=Math.max(t.value.offsetWidth/2,b),$=Math.round((b-t.value.offsetWidth/2)/(m.width-t.value.offsetWidth)*360)}e.color.set("hue",$)}function C(){if(!t.value)return 0;const h=o.vnode.el;if(e.vertical)return 0;const p=e.color.get("hue");return h?Math.round(p*(h.offsetWidth-t.value.offsetWidth/2)/360):0}function f(){if(!t.value)return 0;const h=o.vnode.el;if(!e.vertical)return 0;const p=e.color.get("hue");return h?Math.round(p*(h.offsetHeight-t.value.offsetHeight/2)/360):0}function v(){n.value=C(),s.value=f()}return x(()=>{if(!l.value||!t.value)return;const h={drag:p=>{d(p)},end:p=>{d(p)}};Y(l.value,h),Y(t.value,h),v()}),{bar:l,thumb:t,thumbLeft:n,thumbTop:s,hueValue:u,handleClick:c,update:v,ns:a}}});function Mt(e,a,o,t,l,n){return S(),L("div",{class:g([e.ns.b(),e.ns.is("vertical",e.vertical)])},[w("div",{ref:"bar",class:g(e.ns.e("bar")),onClick:e.handleClick},null,10,["onClick"]),w("div",{ref:"thumb",class:g(e.ns.e("thumb")),style:H({left:e.thumbLeft+"px",top:e.thumbTop+"px"})},null,6)],2)}var Et=G(yt,[["render",Mt],["__file","hue-slider.vue"]]);const St=Be({modelValue:String,id:String,showAlpha:Boolean,colorFormat:String,disabled:Boolean,size:je,popperClass:{type:String,default:""},tabindex:{type:[String,Number],default:0},teleported:ct.teleported,predefine:{type:Te(Array)},validateEvent:{type:Boolean,default:!0},...ft(["ariaLabel"])}),Nt={[ce]:e=>ae(e)||oe(e),[vt]:e=>ae(e)||oe(e),activeChange:e=>ae(e)||oe(e),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent},He=Symbol("colorPickerContextKey"),Ne=function(e,a,o){return[e,a*o/((e=(2-a)*o)<1?e:2-e)||0,e/2]},At=function(e){return typeof e=="string"&&e.includes(".")&&Number.parseFloat(e)===1},Ft=function(e){return typeof e=="string"&&e.includes("%")},O=function(e,a){At(e)&&(e="100%");const o=Ft(e);return e=Math.min(a,Math.max(0,Number.parseFloat(`${e}`))),o&&(e=Number.parseInt(`${e*a}`,10)/100),Math.abs(e-a)<1e-6?1:e%a/Number.parseFloat(a)},Ae={10:"A",11:"B",12:"C",13:"D",14:"E",15:"F"},J=e=>{e=Math.min(Math.round(e),255);const a=Math.floor(e/16),o=e%16;return`${Ae[a]||a}${Ae[o]||o}`},Fe=function({r:e,g:a,b:o}){return Number.isNaN(+e)||Number.isNaN(+a)||Number.isNaN(+o)?"":`#${J(e)}${J(a)}${J(o)}`},ie={A:10,B:11,C:12,D:13,E:14,F:15},T=function(e){return e.length===2?(ie[e[0].toUpperCase()]||+e[0])*16+(ie[e[1].toUpperCase()]||+e[1]):ie[e[1].toUpperCase()]||+e[1]},Pt=function(e,a,o){a=a/100,o=o/100;let t=a;const l=Math.max(o,.01);o*=2,a*=o<=1?o:2-o,t*=l<=1?l:2-l;const n=(o+a)/2,s=o===0?2*t/(l+t):2*a/(o+a);return{h:e,s:s*100,v:n*100}},Pe=(e,a,o)=>{e=O(e,255),a=O(a,255),o=O(o,255);const t=Math.max(e,a,o),l=Math.min(e,a,o);let n;const s=t,u=t-l,c=t===0?0:u/t;if(t===l)n=0;else{switch(t){case e:{n=(a-o)/u+(a<o?6:0);break}case a:{n=(o-e)/u+2;break}case o:{n=(e-a)/u+4;break}}n/=6}return{h:n*360,s:c*100,v:s*100}},q=function(e,a,o){e=O(e,360)*6,a=O(a,100),o=O(o,100);const t=Math.floor(e),l=e-t,n=o*(1-a),s=o*(1-l*a),u=o*(1-(1-l)*a),c=t%6,d=[o,s,n,n,u,o][c],C=[u,o,o,s,n,n][c],f=[n,n,u,o,o,s][c];return{r:Math.round(d*255),g:Math.round(C*255),b:Math.round(f*255)}};class U{constructor(a={}){this._hue=0,this._saturation=100,this._value=100,this._alpha=100,this.enableAlpha=!1,this.format="hex",this.value="";for(const o in a)_e(a,o)&&(this[o]=a[o]);a.value?this.fromString(a.value):this.doOnChange()}set(a,o){if(arguments.length===1&&typeof a=="object"){for(const t in a)_e(a,t)&&this.set(t,a[t]);return}this[`_${a}`]=o,this.doOnChange()}get(a){return a==="alpha"?Math.floor(this[`_${a}`]):this[`_${a}`]}toRgb(){return q(this._hue,this._saturation,this._value)}fromString(a){if(!a){this._hue=0,this._saturation=100,this._value=100,this.doOnChange();return}const o=(t,l,n)=>{this._hue=Math.max(0,Math.min(360,t)),this._saturation=Math.max(0,Math.min(100,l)),this._value=Math.max(0,Math.min(100,n)),this.doOnChange()};if(a.includes("hsl")){const t=a.replace(/hsla|hsl|\(|\)/gm,"").split(/\s|,/g).filter(l=>l!=="").map((l,n)=>n>2?Number.parseFloat(l):Number.parseInt(l,10));if(t.length===4?this._alpha=Number.parseFloat(t[3])*100:t.length===3&&(this._alpha=100),t.length>=3){const{h:l,s:n,v:s}=Pt(t[0],t[1],t[2]);o(l,n,s)}}else if(a.includes("hsv")){const t=a.replace(/hsva|hsv|\(|\)/gm,"").split(/\s|,/g).filter(l=>l!=="").map((l,n)=>n>2?Number.parseFloat(l):Number.parseInt(l,10));t.length===4?this._alpha=Number.parseFloat(t[3])*100:t.length===3&&(this._alpha=100),t.length>=3&&o(t[0],t[1],t[2])}else if(a.includes("rgb")){const t=a.replace(/rgba|rgb|\(|\)/gm,"").split(/\s|,/g).filter(l=>l!=="").map((l,n)=>n>2?Number.parseFloat(l):Number.parseInt(l,10));if(t.length===4?this._alpha=Number.parseFloat(t[3])*100:t.length===3&&(this._alpha=100),t.length>=3){const{h:l,s:n,v:s}=Pe(t[0],t[1],t[2]);o(l,n,s)}}else if(a.includes("#")){const t=a.replace("#","").trim();if(!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(t))return;let l,n,s;t.length===3?(l=T(t[0]+t[0]),n=T(t[1]+t[1]),s=T(t[2]+t[2])):(t.length===6||t.length===8)&&(l=T(t.slice(0,2)),n=T(t.slice(2,4)),s=T(t.slice(4,6))),t.length===8?this._alpha=T(t.slice(6))/255*100:(t.length===3||t.length===6)&&(this._alpha=100);const{h:u,s:c,v:d}=Pe(l,n,s);o(u,c,d)}}compare(a){return Math.abs(a._hue-this._hue)<2&&Math.abs(a._saturation-this._saturation)<1&&Math.abs(a._value-this._value)<1&&Math.abs(a._alpha-this._alpha)<1}doOnChange(){const{_hue:a,_saturation:o,_value:t,_alpha:l,format:n}=this;if(this.enableAlpha)switch(n){case"hsl":{const s=Ne(a,o/100,t/100);this.value=`hsla(${a}, ${Math.round(s[1]*100)}%, ${Math.round(s[2]*100)}%, ${this.get("alpha")/100})`;break}case"hsv":{this.value=`hsva(${a}, ${Math.round(o)}%, ${Math.round(t)}%, ${this.get("alpha")/100})`;break}case"hex":{this.value=`${Fe(q(a,o,t))}${J(l*255/100)}`;break}default:{const{r:s,g:u,b:c}=q(a,o,t);this.value=`rgba(${s}, ${u}, ${c}, ${this.get("alpha")/100})`}}else switch(n){case"hsl":{const s=Ne(a,o/100,t/100);this.value=`hsl(${a}, ${Math.round(s[1]*100)}%, ${Math.round(s[2]*100)}%)`;break}case"hsv":{this.value=`hsv(${a}, ${Math.round(o)}%, ${Math.round(t)}%)`;break}case"rgb":{const{r:s,g:u,b:c}=q(a,o,t);this.value=`rgb(${s}, ${u}, ${c})`;break}default:this.value=Fe(q(a,o,t))}}}const Lt=I({props:{colors:{type:Array,required:!0},color:{type:Object,required:!0},enableAlpha:{type:Boolean,required:!0}},setup(e){const a=j("color-predefine"),{currentColor:o}=Ge(He),t=_(n(e.colors,e.color));A(()=>o.value,s=>{const u=new U;u.fromString(s),t.value.forEach(c=>{c.selected=u.compare(c)})}),Qe(()=>{t.value=n(e.colors,e.color)});function l(s){e.color.fromString(e.colors[s])}function n(s,u){return s.map(c=>{const d=new U;return d.enableAlpha=e.enableAlpha,d.format="rgba",d.fromString(c),d.selected=d.value===u.value,d})}return{rgbaColors:t,handleSelect:l,ns:a}}});function Bt(e,a,o,t,l,n){return S(),L("div",{class:g(e.ns.b())},[w("div",{class:g(e.ns.e("colors"))},[(S(!0),L(Ze,null,Je(e.rgbaColors,(s,u)=>(S(),L("div",{key:e.colors[u],class:g([e.ns.e("color-selector"),e.ns.is("alpha",s._alpha<100),{selected:s.selected}]),onClick:c=>e.handleSelect(u)},[w("div",{style:H({backgroundColor:s.value})},null,4)],10,["onClick"]))),128))],2)],2)}var Tt=G(Lt,[["render",Bt],["__file","predefine.vue"]]);const Vt=I({name:"ElSlPanel",props:{color:{type:Object,required:!0}},setup(e){const a=j("color-svpanel"),o=ee(),t=_(0),l=_(0),n=_("hsl(0, 100%, 50%)"),s=M(()=>{const d=e.color.get("hue"),C=e.color.get("value");return{hue:d,value:C}});function u(){const d=e.color.get("saturation"),C=e.color.get("value"),f=o.vnode.el,{clientWidth:v,clientHeight:h}=f;l.value=d*v/100,t.value=(100-C)*h/100,n.value=`hsl(${e.color.get("hue")}, 100%, 50%)`}function c(d){const f=o.vnode.el.getBoundingClientRect(),{clientX:v,clientY:h}=ue(d);let p=v-f.left,m=h-f.top;p=Math.max(0,p),p=Math.min(p,f.width),m=Math.max(0,m),m=Math.min(m,f.height),l.value=p,t.value=m,e.color.set({saturation:p/f.width*100,value:100-m/f.height*100})}return A(()=>s.value,()=>{u()}),x(()=>{Y(o.vnode.el,{drag:d=>{c(d)},end:d=>{c(d)}}),u()}),{cursorTop:t,cursorLeft:l,background:n,colorValue:s,handleDrag:c,update:u,ns:a}}});function Ht(e,a,o,t,l,n){return S(),L("div",{class:g(e.ns.b()),style:H({backgroundColor:e.background})},[w("div",{class:g(e.ns.e("white"))},null,2),w("div",{class:g(e.ns.e("black"))},null,2),w("div",{class:g(e.ns.e("cursor")),style:H({top:e.cursorTop+"px",left:e.cursorLeft+"px"})},[w("div")],6)],6)}var It=G(Vt,[["render",Ht],["__file","sv-panel.vue"]]);const Dt=I({name:"ElColorPicker"}),Kt=I({...Dt,props:St,emits:Nt,setup(e,{expose:a,emit:o}){const t=e,{t:l}=Ve(),n=j("color"),{formItem:s}=lt(),u=st(),c=rt(),{inputId:d,isLabeledByFormItem:C}=it(t,{formItemContext:s}),f=_(),v=_(),h=_(),p=_(),m=_(),k=_(),{isFocused:B,handleFocus:$,handleBlur:b}=pt(m,{beforeFocus(){return c.value},beforeBlur(i){var E;return(E=p.value)==null?void 0:E.isFocusInsideContent(i)},afterBlur(){z(!1),X()}});let D=!0;const y=xe(new U({enableAlpha:t.showAlpha,format:t.colorFormat||"",value:t.modelValue})),R=_(!1),F=_(!1),W=_(""),Ie=M(()=>!t.modelValue&&!F.value?"transparent":Re(y,t.showAlpha)),te=M(()=>!t.modelValue&&!F.value?"":y.value),De=M(()=>C.value?void 0:t.ariaLabel||l("el.colorpicker.defaultLabel")),Ke=M(()=>C.value?s==null?void 0:s.labelId:void 0),Oe=M(()=>[n.b("picker"),n.is("disabled",c.value),n.bm("picker",u.value),n.is("focused",B.value)]);function Re(i,E){if(!(i instanceof U))throw new TypeError("color should be instance of _color Class");const{r:P,g:me,b:be}=i.toRgb();return E?`rgba(${P}, ${me}, ${be}, ${i.get("alpha")/100})`:`rgb(${P}, ${me}, ${be})`}function z(i){R.value=i}const Q=ut(z,100,{leading:!0});function he(){c.value||z(!0)}function de(){Q(!1),X()}function X(){Z(()=>{t.modelValue?y.fromString(t.modelValue):(y.value="",Z(()=>{F.value=!1}))})}function We(){c.value||Q(!R.value)}function fe(){y.fromString(W.value)}function ze(){const i=y.value;o(ce,i),o("change",i),t.validateEvent&&(s==null||s.validate("change").catch(E=>Se())),Q(!1),Z(()=>{const E=new U({enableAlpha:t.showAlpha,format:t.colorFormat||"",value:t.modelValue});y.compare(E)||X()})}function Xe(){Q(!1),o(ce,null),o("change",null),t.modelValue!==null&&t.validateEvent&&(s==null||s.validate("change").catch(i=>Se())),X()}function qe(){R.value&&(de(),B.value&&pe())}function ve(i){i.preventDefault(),i.stopPropagation(),z(!1),X()}function Ue(i){switch(i.code){case V.enter:case V.space:i.preventDefault(),i.stopPropagation(),he(),k.value.focus();break;case V.esc:ve(i);break}}function pe(){m.value.focus()}function Ye(){m.value.blur()}return x(()=>{t.modelValue&&(W.value=te.value)}),A(()=>t.modelValue,i=>{i?i&&i!==y.value&&(D=!1,y.fromString(i)):F.value=!1}),A(()=>te.value,i=>{W.value=i,D&&o("activeChange",i),D=!0}),A(()=>y.value,()=>{!t.modelValue&&!F.value&&(F.value=!0)}),A(()=>R.value,()=>{Z(()=>{var i,E,P;(i=f.value)==null||i.update(),(E=v.value)==null||E.update(),(P=h.value)==null||P.update()})}),et(He,{currentColor:te}),a({color:y,show:he,hide:de,focus:pe,blur:Ye}),(i,E)=>(S(),ne(r(dt),{ref_key:"popper",ref:p,visible:R.value,"show-arrow":!1,"fallback-placements":["bottom","top","right","left"],offset:0,"gpu-acceleration":!1,"popper-class":[r(n).be("picker","panel"),r(n).b("dropdown"),i.popperClass],"stop-popper-mouse-event":!1,effect:"light",trigger:"click",teleported:i.teleported,transition:`${r(n).namespace.value}-zoom-in-top`,persistent:"",onHide:P=>z(!1)},{content:K(()=>[le((S(),L("div",{onKeydown:Ce(ve,["esc"])},[w("div",{class:g(r(n).be("dropdown","main-wrapper"))},[N(Et,{ref_key:"hue",ref:f,class:"hue-slider",color:r(y),vertical:""},null,8,["color"]),N(It,{ref_key:"sv",ref:v,color:r(y)},null,8,["color"])],2),i.showAlpha?(S(),ne(wt,{key:0,ref_key:"alpha",ref:h,color:r(y)},null,8,["color"])):se("v-if",!0),i.predefine?(S(),ne(Tt,{key:1,ref:"predefine","enable-alpha":i.showAlpha,color:r(y),colors:i.predefine},null,8,["enable-alpha","color","colors"])):se("v-if",!0),w("div",{class:g(r(n).be("dropdown","btns"))},[w("span",{class:g(r(n).be("dropdown","value"))},[N(r(mt),{ref_key:"inputRef",ref:k,modelValue:W.value,"onUpdate:modelValue":P=>W.value=P,"validate-event":!1,size:"small",onKeyup:Ce(fe,["enter"]),onBlur:fe},null,8,["modelValue","onUpdate:modelValue","onKeyup"])],2),N(r(Ee),{class:g(r(n).be("dropdown","link-btn")),text:"",size:"small",onClick:Xe},{default:K(()=>[$e(we(r(l)("el.colorpicker.clear")),1)]),_:1},8,["class"]),N(r(Ee),{plain:"",size:"small",class:g(r(n).be("dropdown","btn")),onClick:ze},{default:K(()=>[$e(we(r(l)("el.colorpicker.confirm")),1)]),_:1},8,["class"])],2)],40,["onKeydown"])),[[r(ht),qe]])]),default:K(()=>[w("div",tt({id:r(d),ref_key:"triggerRef",ref:m},i.$attrs,{class:r(Oe),role:"button","aria-label":r(De),"aria-labelledby":r(Ke),"aria-description":r(l)("el.colorpicker.description",{color:i.modelValue||""}),"aria-disabled":r(c),tabindex:r(c)?-1:i.tabindex,onKeydown:Ue,onFocus:r($),onBlur:r(b)}),[r(c)?(S(),L("div",{key:0,class:g(r(n).be("picker","mask"))},null,2)):se("v-if",!0),w("div",{class:g(r(n).be("picker","trigger")),onClick:We},[w("span",{class:g([r(n).be("picker","color"),r(n).is("alpha",i.showAlpha)])},[w("span",{class:g(r(n).be("picker","color-inner")),style:H({backgroundColor:r(Ie)})},[le(N(r(ye),{class:g([r(n).be("picker","icon"),r(n).is("icon-arrow-down")])},{default:K(()=>[N(r(at))]),_:1},8,["class"]),[[Me,i.modelValue||F.value]]),le(N(r(ye),{class:g([r(n).be("picker","empty"),r(n).is("icon-close")])},{default:K(()=>[N(r(ot))]),_:1},8,["class"]),[[Me,!i.modelValue&&!F.value]])],6)],2)],2)],16,["id","aria-label","aria-labelledby","aria-description","aria-disabled","tabindex","onFocus","onBlur"])]),_:1},8,["visible","popper-class","teleported","transition","onHide"]))}});var Ot=G(Kt,[["__file","color-picker.vue"]]);const Yt=nt(Ot);export{Yt as E,Ut as i};