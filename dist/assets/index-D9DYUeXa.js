import{b6 as Le,b as Be,h as Te,u as Ve,an as ge,y as M,a as j,r as C,o as ee,L as A,A as ke,Q as V,q as te,d as I,c as S,e as L,k as y,n as g,g as s,z as H,_ as G,b9 as je,a2 as oe,a9 as ne,bx as _e,j as Ge,a4 as Qe,W as Ze,ac as Je,a0 as xe,R as Z,p as et,l as le,w as K,C as re,aV as Ce,B as N,G as se,aa as $e,t as we,D as tt,E as ye,S as at,I as Me,H as ot,s as nt}from"./index-DS8UErgR.js";import{d as lt,b as rt,e as st,f as it,E as Ee}from"./index-B0AkaYQm.js";import{u as ct,d as ut,C as ht,a as dt}from"./index-BoImKDmx.js";import{a as ft,U as J,C as pt,b as vt,E as mt}from"./index-DfvYIogZ.js";import{d as Se}from"./error-BVE1zgTY.js";const Ut=(t,a)=>{if(!Le||!t||!a)return!1;const o=t.getBoundingClientRect();let e;return a instanceof Element?e=a.getBoundingClientRect():e={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},o.top<e.bottom&&o.bottom>e.top&&o.right>e.left&&o.left<e.right},ue=t=>{let a,o;return t.type==="touchend"?(o=t.changedTouches[0].clientY,a=t.changedTouches[0].clientX):t.type.startsWith("touch")?(o=t.touches[0].clientY,a=t.touches[0].clientX):(o=t.clientY,a=t.clientX),{clientX:a,clientY:o}},bt=Be({color:{type:Te(Object),required:!0},vertical:{type:Boolean,default:!1}});let ie=!1;function Y(t,a){if(!Le)return;const o=function(n){var r;(r=a.drag)==null||r.call(a,n)},e=function(n){var r;document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",e),document.removeEventListener("touchmove",o),document.removeEventListener("touchend",e),document.onselectstart=null,document.ondragstart=null,ie=!1,(r=a.end)==null||r.call(a,n)},l=function(n){var r;ie||(n.preventDefault(),document.onselectstart=()=>!1,document.ondragstart=()=>!1,document.addEventListener("mousemove",o),document.addEventListener("mouseup",e),document.addEventListener("touchmove",o),document.addEventListener("touchend",e),ie=!0,(r=a.start)==null||r.call(a,n))};t.addEventListener("mousedown",l),t.addEventListener("touchstart",l,{passive:!1})}const gt=t=>{const a=te(),{t:o}=Ve(),e=ge(),l=ge(),n=M(()=>t.color.get("alpha")),r=M(()=>o("el.colorpicker.alphaLabel"));function u(f){var p;f.target!==e.value&&c(f),(p=e.value)==null||p.focus()}function c(f){if(!l.value||!e.value)return;const h=a.vnode.el.getBoundingClientRect(),{clientX:v,clientY:m}=ue(f);if(t.vertical){let k=m-h.top;k=Math.max(e.value.offsetHeight/2,k),k=Math.min(k,h.height-e.value.offsetHeight/2),t.color.set("alpha",Math.round((k-e.value.offsetHeight/2)/(h.height-e.value.offsetHeight)*100))}else{let k=v-h.left;k=Math.max(e.value.offsetWidth/2,k),k=Math.min(k,h.width-e.value.offsetWidth/2),t.color.set("alpha",Math.round((k-e.value.offsetWidth/2)/(h.width-e.value.offsetWidth)*100))}}function d(f){const{code:p,shiftKey:h}=f,v=h?10:1;switch(p){case V.left:case V.down:f.preventDefault(),f.stopPropagation(),$(-v);break;case V.right:case V.up:f.preventDefault(),f.stopPropagation(),$(v);break}}function $(f){let p=n.value+f;p=p<0?0:p>100?100:p,t.color.set("alpha",p)}return{thumb:e,bar:l,alpha:n,alphaLabel:r,handleDrag:c,handleClick:u,handleKeydown:d}},kt=(t,{bar:a,thumb:o,handleDrag:e})=>{const l=te(),n=j("color-alpha-slider"),r=C(0),u=C(0),c=C();function d(){if(!o.value||t.vertical)return 0;const w=l.vnode.el,b=t.color.get("alpha");return w?Math.round(b*(w.offsetWidth-o.value.offsetWidth/2)/100):0}function $(){if(!o.value)return 0;const w=l.vnode.el;if(!t.vertical)return 0;const b=t.color.get("alpha");return w?Math.round(b*(w.offsetHeight-o.value.offsetHeight/2)/100):0}function f(){if(t.color&&t.color.value){const{r:w,g:b,b:D}=t.color.toRgb();return`linear-gradient(to right, rgba(${w}, ${b}, ${D}, 0) 0%, rgba(${w}, ${b}, ${D}, 1) 100%)`}return""}function p(){r.value=d(),u.value=$(),c.value=f()}ee(()=>{if(!a.value||!o.value)return;const w={drag:b=>{e(b)},end:b=>{e(b)}};Y(a.value,w),Y(o.value,w),p()}),A(()=>t.color.get("alpha"),()=>p()),A(()=>t.color.value,()=>p());const h=M(()=>[n.b(),n.is("vertical",t.vertical)]),v=M(()=>n.e("bar")),m=M(()=>n.e("thumb")),k=M(()=>({background:c.value})),B=M(()=>({left:ke(r.value),top:ke(u.value)}));return{rootKls:h,barKls:v,barStyle:k,thumbKls:m,thumbStyle:B,update:p}},_t="ElColorAlphaSlider",Ct=I({name:_t}),$t=I({...Ct,props:bt,setup(t,{expose:a}){const o=t,{alpha:e,alphaLabel:l,bar:n,thumb:r,handleDrag:u,handleClick:c,handleKeydown:d}=gt(o),{rootKls:$,barKls:f,barStyle:p,thumbKls:h,thumbStyle:v,update:m}=kt(o,{bar:n,thumb:r,handleDrag:u});return a({update:m,bar:n,thumb:r}),(k,B)=>(S(),L("div",{class:g(s($))},[y("div",{ref_key:"bar",ref:n,class:g(s(f)),style:H(s(p)),onClick:s(c)},null,14,["onClick"]),y("div",{ref_key:"thumb",ref:r,class:g(s(h)),style:H(s(v)),"aria-label":s(l),"aria-valuenow":s(e),"aria-orientation":k.vertical?"vertical":"horizontal","aria-valuemin":"0","aria-valuemax":"100",role:"slider",tabindex:"0",onKeydown:s(d)},null,46,["aria-label","aria-valuenow","aria-orientation","onKeydown"])],2))}});var wt=G($t,[["__file","alpha-slider.vue"]]);const yt=I({name:"ElColorHueSlider",props:{color:{type:Object,required:!0},vertical:Boolean},setup(t){const a=j("color-hue-slider"),o=te(),e=C(),l=C(),n=C(0),r=C(0),u=M(()=>t.color.get("hue"));A(()=>u.value,()=>{p()});function c(h){h.target!==e.value&&d(h)}function d(h){if(!l.value||!e.value)return;const m=o.vnode.el.getBoundingClientRect(),{clientX:k,clientY:B}=ue(h);let w;if(t.vertical){let b=B-m.top;b=Math.min(b,m.height-e.value.offsetHeight/2),b=Math.max(e.value.offsetHeight/2,b),w=Math.round((b-e.value.offsetHeight/2)/(m.height-e.value.offsetHeight)*360)}else{let b=k-m.left;b=Math.min(b,m.width-e.value.offsetWidth/2),b=Math.max(e.value.offsetWidth/2,b),w=Math.round((b-e.value.offsetWidth/2)/(m.width-e.value.offsetWidth)*360)}t.color.set("hue",w)}function $(){if(!e.value)return 0;const h=o.vnode.el;if(t.vertical)return 0;const v=t.color.get("hue");return h?Math.round(v*(h.offsetWidth-e.value.offsetWidth/2)/360):0}function f(){if(!e.value)return 0;const h=o.vnode.el;if(!t.vertical)return 0;const v=t.color.get("hue");return h?Math.round(v*(h.offsetHeight-e.value.offsetHeight/2)/360):0}function p(){n.value=$(),r.value=f()}return ee(()=>{if(!l.value||!e.value)return;const h={drag:v=>{d(v)},end:v=>{d(v)}};Y(l.value,h),Y(e.value,h),p()}),{bar:l,thumb:e,thumbLeft:n,thumbTop:r,hueValue:u,handleClick:c,update:p,ns:a}}});function Mt(t,a,o,e,l,n){return S(),L("div",{class:g([t.ns.b(),t.ns.is("vertical",t.vertical)])},[y("div",{ref:"bar",class:g(t.ns.e("bar")),onClick:t.handleClick},null,10,["onClick"]),y("div",{ref:"thumb",class:g(t.ns.e("thumb")),style:H({left:t.thumbLeft+"px",top:t.thumbTop+"px"})},null,6)],2)}var Et=G(yt,[["render",Mt],["__file","hue-slider.vue"]]);const St=Be({modelValue:String,id:String,showAlpha:Boolean,colorFormat:String,disabled:Boolean,size:je,popperClass:{type:String,default:""},tabindex:{type:[String,Number],default:0},teleported:ct.teleported,predefine:{type:Te(Array)},validateEvent:{type:Boolean,default:!0},...ft(["ariaLabel"])}),At={[J]:t=>oe(t)||ne(t),[pt]:t=>oe(t)||ne(t),activeChange:t=>oe(t)||ne(t),focus:t=>t instanceof FocusEvent,blur:t=>t instanceof FocusEvent},He=Symbol("colorPickerContextKey"),Ae=function(t,a,o){return[t,a*o/((t=(2-a)*o)<1?t:2-t)||0,t/2]},Nt=function(t){return typeof t=="string"&&t.includes(".")&&Number.parseFloat(t)===1},Ft=function(t){return typeof t=="string"&&t.includes("%")},O=function(t,a){Nt(t)&&(t="100%");const o=Ft(t);return t=Math.min(a,Math.max(0,Number.parseFloat(`${t}`))),o&&(t=Number.parseInt(`${t*a}`,10)/100),Math.abs(t-a)<1e-6?1:t%a/Number.parseFloat(a)},Ne={10:"A",11:"B",12:"C",13:"D",14:"E",15:"F"},x=t=>{t=Math.min(Math.round(t),255);const a=Math.floor(t/16),o=t%16;return`${Ne[a]||a}${Ne[o]||o}`},Fe=function({r:t,g:a,b:o}){return Number.isNaN(+t)||Number.isNaN(+a)||Number.isNaN(+o)?"":`#${x(t)}${x(a)}${x(o)}`},ce={A:10,B:11,C:12,D:13,E:14,F:15},T=function(t){return t.length===2?(ce[t[0].toUpperCase()]||+t[0])*16+(ce[t[1].toUpperCase()]||+t[1]):ce[t[1].toUpperCase()]||+t[1]},Pt=function(t,a,o){a=a/100,o=o/100;let e=a;const l=Math.max(o,.01);o*=2,a*=o<=1?o:2-o,e*=l<=1?l:2-l;const n=(o+a)/2,r=o===0?2*e/(l+e):2*a/(o+a);return{h:t,s:r*100,v:n*100}},Pe=(t,a,o)=>{t=O(t,255),a=O(a,255),o=O(o,255);const e=Math.max(t,a,o),l=Math.min(t,a,o);let n;const r=e,u=e-l,c=e===0?0:u/e;if(e===l)n=0;else{switch(e){case t:{n=(a-o)/u+(a<o?6:0);break}case a:{n=(o-t)/u+2;break}case o:{n=(t-a)/u+4;break}}n/=6}return{h:n*360,s:c*100,v:r*100}},q=function(t,a,o){t=O(t,360)*6,a=O(a,100),o=O(o,100);const e=Math.floor(t),l=t-e,n=o*(1-a),r=o*(1-l*a),u=o*(1-(1-l)*a),c=e%6,d=[o,r,n,n,u,o][c],$=[u,o,o,r,n,n][c],f=[n,n,u,o,o,r][c];return{r:Math.round(d*255),g:Math.round($*255),b:Math.round(f*255)}};class U{constructor(a={}){this._hue=0,this._saturation=100,this._value=100,this._alpha=100,this.enableAlpha=!1,this.format="hex",this.value="";for(const o in a)_e(a,o)&&(this[o]=a[o]);a.value?this.fromString(a.value):this.doOnChange()}set(a,o){if(arguments.length===1&&typeof a=="object"){for(const e in a)_e(a,e)&&this.set(e,a[e]);return}this[`_${a}`]=o,this.doOnChange()}get(a){return a==="alpha"?Math.floor(this[`_${a}`]):this[`_${a}`]}toRgb(){return q(this._hue,this._saturation,this._value)}fromString(a){if(!a){this._hue=0,this._saturation=100,this._value=100,this.doOnChange();return}const o=(e,l,n)=>{this._hue=Math.max(0,Math.min(360,e)),this._saturation=Math.max(0,Math.min(100,l)),this._value=Math.max(0,Math.min(100,n)),this.doOnChange()};if(a.includes("hsl")){const e=a.replace(/hsla|hsl|\(|\)/gm,"").split(/\s|,/g).filter(l=>l!=="").map((l,n)=>n>2?Number.parseFloat(l):Number.parseInt(l,10));if(e.length===4?this._alpha=Number.parseFloat(e[3])*100:e.length===3&&(this._alpha=100),e.length>=3){const{h:l,s:n,v:r}=Pt(e[0],e[1],e[2]);o(l,n,r)}}else if(a.includes("hsv")){const e=a.replace(/hsva|hsv|\(|\)/gm,"").split(/\s|,/g).filter(l=>l!=="").map((l,n)=>n>2?Number.parseFloat(l):Number.parseInt(l,10));e.length===4?this._alpha=Number.parseFloat(e[3])*100:e.length===3&&(this._alpha=100),e.length>=3&&o(e[0],e[1],e[2])}else if(a.includes("rgb")){const e=a.replace(/rgba|rgb|\(|\)/gm,"").split(/\s|,/g).filter(l=>l!=="").map((l,n)=>n>2?Number.parseFloat(l):Number.parseInt(l,10));if(e.length===4?this._alpha=Number.parseFloat(e[3])*100:e.length===3&&(this._alpha=100),e.length>=3){const{h:l,s:n,v:r}=Pe(e[0],e[1],e[2]);o(l,n,r)}}else if(a.includes("#")){const e=a.replace("#","").trim();if(!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(e))return;let l,n,r;e.length===3?(l=T(e[0]+e[0]),n=T(e[1]+e[1]),r=T(e[2]+e[2])):(e.length===6||e.length===8)&&(l=T(e.slice(0,2)),n=T(e.slice(2,4)),r=T(e.slice(4,6))),e.length===8?this._alpha=T(e.slice(6))/255*100:(e.length===3||e.length===6)&&(this._alpha=100);const{h:u,s:c,v:d}=Pe(l,n,r);o(u,c,d)}}compare(a){return Math.abs(a._hue-this._hue)<2&&Math.abs(a._saturation-this._saturation)<1&&Math.abs(a._value-this._value)<1&&Math.abs(a._alpha-this._alpha)<1}doOnChange(){const{_hue:a,_saturation:o,_value:e,_alpha:l,format:n}=this;if(this.enableAlpha)switch(n){case"hsl":{const r=Ae(a,o/100,e/100);this.value=`hsla(${a}, ${Math.round(r[1]*100)}%, ${Math.round(r[2]*100)}%, ${this.get("alpha")/100})`;break}case"hsv":{this.value=`hsva(${a}, ${Math.round(o)}%, ${Math.round(e)}%, ${this.get("alpha")/100})`;break}case"hex":{this.value=`${Fe(q(a,o,e))}${x(l*255/100)}`;break}default:{const{r,g:u,b:c}=q(a,o,e);this.value=`rgba(${r}, ${u}, ${c}, ${this.get("alpha")/100})`}}else switch(n){case"hsl":{const r=Ae(a,o/100,e/100);this.value=`hsl(${a}, ${Math.round(r[1]*100)}%, ${Math.round(r[2]*100)}%)`;break}case"hsv":{this.value=`hsv(${a}, ${Math.round(o)}%, ${Math.round(e)}%)`;break}case"rgb":{const{r,g:u,b:c}=q(a,o,e);this.value=`rgb(${r}, ${u}, ${c})`;break}default:this.value=Fe(q(a,o,e))}}}const Lt=I({props:{colors:{type:Array,required:!0},color:{type:Object,required:!0},enableAlpha:{type:Boolean,required:!0}},setup(t){const a=j("color-predefine"),{currentColor:o}=Ge(He),e=C(n(t.colors,t.color));A(()=>o.value,r=>{const u=new U;u.fromString(r),e.value.forEach(c=>{c.selected=u.compare(c)})}),Qe(()=>{e.value=n(t.colors,t.color)});function l(r){t.color.fromString(t.colors[r])}function n(r,u){return r.map(c=>{const d=new U;return d.enableAlpha=t.enableAlpha,d.format="rgba",d.fromString(c),d.selected=d.value===u.value,d})}return{rgbaColors:e,handleSelect:l,ns:a}}});function Bt(t,a,o,e,l,n){return S(),L("div",{class:g(t.ns.b())},[y("div",{class:g(t.ns.e("colors"))},[(S(!0),L(Ze,null,Je(t.rgbaColors,(r,u)=>(S(),L("div",{key:t.colors[u],class:g([t.ns.e("color-selector"),t.ns.is("alpha",r._alpha<100),{selected:r.selected}]),onClick:c=>t.handleSelect(u)},[y("div",{style:H({backgroundColor:r.value})},null,4)],10,["onClick"]))),128))],2)],2)}var Tt=G(Lt,[["render",Bt],["__file","predefine.vue"]]);const Vt=I({name:"ElSlPanel",props:{color:{type:Object,required:!0}},setup(t){const a=j("color-svpanel"),o=te(),e=C(0),l=C(0),n=C("hsl(0, 100%, 50%)"),r=M(()=>{const d=t.color.get("hue"),$=t.color.get("value");return{hue:d,value:$}});function u(){const d=t.color.get("saturation"),$=t.color.get("value"),f=o.vnode.el,{clientWidth:p,clientHeight:h}=f;l.value=d*p/100,e.value=(100-$)*h/100,n.value=`hsl(${t.color.get("hue")}, 100%, 50%)`}function c(d){const f=o.vnode.el.getBoundingClientRect(),{clientX:p,clientY:h}=ue(d);let v=p-f.left,m=h-f.top;v=Math.max(0,v),v=Math.min(v,f.width),m=Math.max(0,m),m=Math.min(m,f.height),l.value=v,e.value=m,t.color.set({saturation:v/f.width*100,value:100-m/f.height*100})}return A(()=>r.value,()=>{u()}),ee(()=>{Y(o.vnode.el,{drag:d=>{c(d)},end:d=>{c(d)}}),u()}),{cursorTop:e,cursorLeft:l,background:n,colorValue:r,handleDrag:c,update:u,ns:a}}});function Ht(t,a,o,e,l,n){return S(),L("div",{class:g(t.ns.b()),style:H({backgroundColor:t.background})},[y("div",{class:g(t.ns.e("white"))},null,2),y("div",{class:g(t.ns.e("black"))},null,2),y("div",{class:g(t.ns.e("cursor")),style:H({top:t.cursorTop+"px",left:t.cursorLeft+"px"})},[y("div")],6)],6)}var It=G(Vt,[["render",Ht],["__file","sv-panel.vue"]]);const Dt=I({name:"ElColorPicker"}),Kt=I({...Dt,props:St,emits:At,setup(t,{expose:a,emit:o}){const e=t,{t:l}=Ve(),n=j("color"),{formItem:r}=lt(),u=rt(),c=st(),{inputId:d,isLabeledByFormItem:$}=it(e,{formItemContext:r}),f=C(),p=C(),h=C(),v=C(),m=C(),k=C(),{isFocused:B,handleFocus:w,handleBlur:b}=vt(m,{beforeFocus(){return c.value},beforeBlur(i){var E;return(E=v.value)==null?void 0:E.isFocusInsideContent(i)},afterBlur(){z(!1),X()}});let D=!0;const _=xe(new U({enableAlpha:e.showAlpha,format:e.colorFormat||"",value:e.modelValue})),R=C(!1),F=C(!1),W=C(""),Ie=M(()=>!e.modelValue&&!F.value?"transparent":Re(_,e.showAlpha)),ae=M(()=>!e.modelValue&&!F.value?"":_.value),De=M(()=>$.value?void 0:e.ariaLabel||l("el.colorpicker.defaultLabel")),Ke=M(()=>$.value?r==null?void 0:r.labelId:void 0),Oe=M(()=>[n.b("picker"),n.is("disabled",c.value),n.bm("picker",u.value),n.is("focused",B.value)]);function Re(i,E){if(!(i instanceof U))throw new TypeError("color should be instance of _color Class");const{r:P,g:me,b:be}=i.toRgb();return E?`rgba(${P}, ${me}, ${be}, ${i.get("alpha")/100})`:`rgb(${P}, ${me}, ${be})`}function z(i){R.value=i}const Q=ut(z,100,{leading:!0});function he(){c.value||z(!0)}function de(){Q(!1),X()}function X(){Z(()=>{e.modelValue?_.fromString(e.modelValue):(_.value="",Z(()=>{F.value=!1}))})}function We(){c.value||Q(!R.value)}function fe(){_.fromString(W.value)}function ze(){const i=_.value;o(J,i),o("change",i),e.validateEvent&&(r==null||r.validate("change").catch(E=>Se())),Q(!1),Z(()=>{const E=new U({enableAlpha:e.showAlpha,format:e.colorFormat||"",value:e.modelValue});_.compare(E)||X()})}function Xe(){Q(!1),o(J,null),o("change",null),e.modelValue!==null&&e.validateEvent&&(r==null||r.validate("change").catch(i=>Se())),X()}function qe(){R.value&&(de(),B.value&&ve())}function pe(i){i.preventDefault(),i.stopPropagation(),z(!1),X()}function Ue(i){switch(i.code){case V.enter:case V.space:i.preventDefault(),i.stopPropagation(),he(),k.value.focus();break;case V.esc:pe(i);break}}function ve(){m.value.focus()}function Ye(){m.value.blur()}return ee(()=>{e.modelValue&&(W.value=ae.value)}),A(()=>e.modelValue,i=>{i?i&&i!==_.value&&(D=!1,_.fromString(i)):F.value=!1}),A(()=>[e.colorFormat,e.showAlpha],()=>{_.enableAlpha=e.showAlpha,_.format=e.colorFormat||_.format,_.doOnChange(),o(J,_.value)}),A(()=>ae.value,i=>{W.value=i,D&&o("activeChange",i),D=!0}),A(()=>_.value,()=>{!e.modelValue&&!F.value&&(F.value=!0)}),A(()=>R.value,()=>{Z(()=>{var i,E,P;(i=f.value)==null||i.update(),(E=p.value)==null||E.update(),(P=h.value)==null||P.update()})}),et(He,{currentColor:ae}),a({color:_,show:he,hide:de,focus:ve,blur:Ye}),(i,E)=>(S(),le(s(dt),{ref_key:"popper",ref:v,visible:R.value,"show-arrow":!1,"fallback-placements":["bottom","top","right","left"],offset:0,"gpu-acceleration":!1,"popper-class":[s(n).be("picker","panel"),s(n).b("dropdown"),i.popperClass],"stop-popper-mouse-event":!1,effect:"light",trigger:"click",teleported:i.teleported,transition:`${s(n).namespace.value}-zoom-in-top`,persistent:"",onHide:P=>z(!1)},{content:K(()=>[re((S(),L("div",{onKeydown:Ce(pe,["esc"])},[y("div",{class:g(s(n).be("dropdown","main-wrapper"))},[N(Et,{ref_key:"hue",ref:f,class:"hue-slider",color:s(_),vertical:""},null,8,["color"]),N(It,{ref_key:"sv",ref:p,color:s(_)},null,8,["color"])],2),i.showAlpha?(S(),le(wt,{key:0,ref_key:"alpha",ref:h,color:s(_)},null,8,["color"])):se("v-if",!0),i.predefine?(S(),le(Tt,{key:1,ref:"predefine","enable-alpha":i.showAlpha,color:s(_),colors:i.predefine},null,8,["enable-alpha","color","colors"])):se("v-if",!0),y("div",{class:g(s(n).be("dropdown","btns"))},[y("span",{class:g(s(n).be("dropdown","value"))},[N(s(mt),{ref_key:"inputRef",ref:k,modelValue:W.value,"onUpdate:modelValue":P=>W.value=P,"validate-event":!1,size:"small",onKeyup:Ce(fe,["enter"]),onBlur:fe},null,8,["modelValue","onUpdate:modelValue","onKeyup"])],2),N(s(Ee),{class:g(s(n).be("dropdown","link-btn")),text:"",size:"small",onClick:Xe},{default:K(()=>[$e(we(s(l)("el.colorpicker.clear")),1)]),_:1},8,["class"]),N(s(Ee),{plain:"",size:"small",class:g(s(n).be("dropdown","btn")),onClick:ze},{default:K(()=>[$e(we(s(l)("el.colorpicker.confirm")),1)]),_:1},8,["class"])],2)],40,["onKeydown"])),[[s(ht),qe]])]),default:K(()=>[y("div",tt({id:s(d),ref_key:"triggerRef",ref:m},i.$attrs,{class:s(Oe),role:"button","aria-label":s(De),"aria-labelledby":s(Ke),"aria-description":s(l)("el.colorpicker.description",{color:i.modelValue||""}),"aria-disabled":s(c),tabindex:s(c)?-1:i.tabindex,onKeydown:Ue,onFocus:s(w),onBlur:s(b)}),[s(c)?(S(),L("div",{key:0,class:g(s(n).be("picker","mask"))},null,2)):se("v-if",!0),y("div",{class:g(s(n).be("picker","trigger")),onClick:We},[y("span",{class:g([s(n).be("picker","color"),s(n).is("alpha",i.showAlpha)])},[y("span",{class:g(s(n).be("picker","color-inner")),style:H({backgroundColor:s(Ie)})},[re(N(s(ye),{class:g([s(n).be("picker","icon"),s(n).is("icon-arrow-down")])},{default:K(()=>[N(s(at))]),_:1},8,["class"]),[[Me,i.modelValue||F.value]]),re(N(s(ye),{class:g([s(n).be("picker","empty"),s(n).is("icon-close")])},{default:K(()=>[N(s(ot))]),_:1},8,["class"]),[[Me,!i.modelValue&&!F.value]])],6)],2)],2)],16,["id","aria-label","aria-labelledby","aria-description","aria-disabled","tabindex","onFocus","onBlur"])]),_:1},8,["visible","popper-class","teleported","transition","onHide"]))}});var Ot=G(Kt,[["__file","color-picker.vue"]]);const Yt=nt(Ot);export{Yt as E,Ut as i};
