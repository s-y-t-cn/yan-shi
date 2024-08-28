import{b9 as de,o as te,a4 as fe,U as me,B as W,ag as ve,a as Z,y as k,b0 as se,Z as J,L as _,bF as ye,X as pe,cp as ge,Y as be,ba as H,b as G,h as V,d as X,C as R,f as h,a1 as he,i as Ce,u as we,j as Q,c as z,e as j,k as U,n as w,g as o,t as Ee,w as E,l as K,m as ke,E as Me,A as x,z as ne,_ as le,cq as Te,bd as Be,bl as Ie,r as F,cr as Se,R as De,q as Le,cs as Pe,a3 as ee,x as Fe,p as Ae,T as Oe,D as $e,F as ze,V as Ne,I as Ye,s as Re}from"./index-g37XHkO7.js";import{P as q}from"./vnode-DwFJRcHj.js";import{F as Xe,i as Ue,E as Ve,a as He}from"./index-ClVUFy22.js";import{U as ae}from"./index-CWjOxhQe.js";import{a as oe,u as je}from"./index-7XQ89VVv.js";import{t as qe}from"./error-C6KkHRRa.js";import{a as We}from"./index-Ct0d8tij.js";const _e=(...e)=>s=>{e.forEach(t=>{de(t)?t(s):t.value=s})},Ke=(e,s,t,d)=>{let l={offsetX:0,offsetY:0};const r=c=>{const y=c.clientX,b=c.clientY,{offsetX:g,offsetY:m}=l,v=e.value.getBoundingClientRect(),C=v.left,u=v.top,A=v.width,M=v.height,N=document.documentElement.clientWidth,Y=document.documentElement.clientHeight,O=-C+g,T=-u+m,B=N-C-A+g,I=Y-u-M+m,S=n=>{let L=g+n.clientX-y,$=m+n.clientY-b;d!=null&&d.value||(L=Math.min(Math.max(L,O),B),$=Math.min(Math.max($,T),I)),l={offsetX:L,offsetY:$},e.value&&(e.value.style.transform=`translate(${W(L)}, ${W($)})`)},D=()=>{document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",D)};document.addEventListener("mousemove",S),document.addEventListener("mouseup",D)},i=()=>{s.value&&e.value&&s.value.addEventListener("mousedown",r)},f=()=>{s.value&&e.value&&s.value.removeEventListener("mousedown",r)},a=()=>{l={offsetX:0,offsetY:0},e.value&&(e.value.style.transform="none")};return te(()=>{fe(()=>{t.value?i():f()})}),me(()=>{f()}),{resetPostion:a}},xe=(e,s={})=>{ve(e)||qe("[useLockscreen]","You need to pass a ref param to this function");const t=s.ns||Z("popup"),d=k(()=>t.bm("parent","hidden"));if(!se||J(document.body,d.value))return;let l=0,r=!1,i="0";const f=()=>{setTimeout(()=>{be(document==null?void 0:document.body,d.value),r&&document&&(document.body.style.width=i)},200)};_(e,a=>{if(!a){f();return}r=!J(document.body,d.value),r&&(i=document.body.style.width),l=We(t.namespace.value);const c=document.documentElement.clientHeight<document.body.scrollHeight,y=ye(document.body,"overflowY");l>0&&(c||y==="scroll")&&r&&(document.body.style.width=`calc(100% - ${l}px)`),pe(document.body,d.value)}),ge(()=>f())},ie=e=>{if(!e)return{onClick:H,onMousedown:H,onMouseup:H};let s=!1,t=!1;return{onClick:i=>{s&&t&&e(i),s=t=!1},onMousedown:i=>{s=i.target===i.currentTarget},onMouseup:i=>{t=i.target===i.currentTarget}}},Ze=G({mask:{type:Boolean,default:!0},customMaskEvent:Boolean,overlayClass:{type:V([String,Array,Object])},zIndex:{type:V([String,Number])}}),Ge={click:e=>e instanceof MouseEvent},Je="overlay";var Qe=X({name:"ElOverlay",props:Ze,emits:Ge,setup(e,{slots:s,emit:t}){const d=Z(Je),l=a=>{t("click",a)},{onClick:r,onMousedown:i,onMouseup:f}=ie(e.customMaskEvent?void 0:l);return()=>e.mask?R("div",{class:[d.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:r,onMousedown:i,onMouseup:f},[h(s,"default")],q.STYLE|q.CLASS|q.PROPS,["onClick","onMouseup","onMousedown"]):he("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[h(s,"default")])}});const eo=Qe,re=Symbol("dialogInjectionKey"),ce=G({center:Boolean,alignCenter:Boolean,closeIcon:{type:Ce},draggable:Boolean,overflow:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),oo={close:()=>!0},to=X({name:"ElDialogContent"}),so=X({...to,props:ce,emits:oo,setup(e,{expose:s}){const t=e,{t:d}=we(),{Close:l}=Te,{dialogRef:r,headerRef:i,bodyId:f,ns:a,style:c}=Q(re),{focusTrapRef:y}=Q(Xe),b=k(()=>[a.b(),a.is("fullscreen",t.fullscreen),a.is("draggable",t.draggable),a.is("align-center",t.alignCenter),{[a.m("center")]:t.center}]),g=_e(y,r),m=k(()=>t.draggable),v=k(()=>t.overflow),{resetPostion:C}=Ke(r,i,m,v);return s({resetPostion:C}),(u,A)=>(z(),j("div",{ref:o(g),class:w(o(b)),style:ne(o(c)),tabindex:"-1"},[U("header",{ref_key:"headerRef",ref:i,class:w([o(a).e("header"),{"show-close":u.showClose}])},[h(u.$slots,"header",{},()=>[U("span",{role:"heading","aria-level":u.ariaLevel,class:w(o(a).e("title"))},Ee(u.title),11,["aria-level"])]),u.showClose?(z(),j("button",{key:0,"aria-label":o(d)("el.dialog.close"),class:w(o(a).e("headerbtn")),type:"button",onClick:M=>u.$emit("close")},[R(o(Me),{class:w(o(a).e("close"))},{default:E(()=>[(z(),K(ke(u.closeIcon||o(l))))]),_:1},8,["class"])],10,["aria-label","onClick"])):x("v-if",!0)],2),U("div",{id:o(f),class:w(o(a).e("body"))},[h(u.$slots,"default")],10,["id"]),u.$slots.footer?(z(),j("footer",{key:0,class:w(o(a).e("footer"))},[h(u.$slots,"footer")],2)):x("v-if",!0)],6))}});var no=le(so,[["__file","dialog-content.vue"]]);const lo=G({...ce,appendToBody:Boolean,appendTo:{type:V([String,Object]),default:"body"},beforeClose:{type:V(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:Boolean,headerAriaLevel:{type:String,default:"2"}}),ao={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[ae]:e=>Be(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},io=(e,s)=>{var t;const l=Le().emit,{nextZIndex:r}=Ie();let i="";const f=oe(),a=oe(),c=F(!1),y=F(!1),b=F(!1),g=F((t=e.zIndex)!=null?t:r());let m,v;const C=Se("namespace",Pe),u=k(()=>{const p={},P=`--${C.value}-dialog`;return e.fullscreen||(e.top&&(p[`${P}-margin-top`]=e.top),e.width&&(p[`${P}-width`]=W(e.width))),p}),A=k(()=>e.alignCenter?{display:"flex"}:{});function M(){l("opened")}function N(){l("closed"),l(ae,!1),e.destroyOnClose&&(b.value=!1)}function Y(){l("close")}function O(){v==null||v(),m==null||m(),e.openDelay&&e.openDelay>0?{stop:m}=ee(()=>S(),e.openDelay):S()}function T(){m==null||m(),v==null||v(),e.closeDelay&&e.closeDelay>0?{stop:v}=ee(()=>D(),e.closeDelay):D()}function B(){function p(P){P||(y.value=!0,c.value=!1)}e.beforeClose?e.beforeClose(p):T()}function I(){e.closeOnClickModal&&B()}function S(){se&&(c.value=!0)}function D(){c.value=!1}function n(){l("openAutoFocus")}function L(){l("closeAutoFocus")}function $(p){var P;((P=p.detail)==null?void 0:P.focusReason)==="pointer"&&p.preventDefault()}e.lockScroll&&xe(c);function ue(){e.closeOnPressEscape&&B()}return _(()=>e.modelValue,p=>{p?(y.value=!1,O(),b.value=!0,g.value=Ue(e.zIndex)?r():g.value++,De(()=>{l("open"),s.value&&(s.value.scrollTop=0)})):c.value&&T()}),_(()=>e.fullscreen,p=>{s.value&&(p?(i=s.value.style.transform,s.value.style.transform=""):s.value.style.transform=i)}),te(()=>{e.modelValue&&(c.value=!0,b.value=!0,O())}),{afterEnter:M,afterLeave:N,beforeLeave:Y,handleClose:B,onModalClick:I,close:T,doClose:D,onOpenAutoFocus:n,onCloseAutoFocus:L,onCloseRequested:ue,onFocusoutPrevented:$,titleId:f,bodyId:a,closed:y,style:u,overlayDialogStyle:A,rendered:b,visible:c,zIndex:g}},ro=X({name:"ElDialog",inheritAttrs:!1}),co=X({...ro,props:lo,emits:ao,setup(e,{expose:s}){const t=e,d=Fe();je({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},k(()=>!!d.title));const l=Z("dialog"),r=F(),i=F(),f=F(),{visible:a,titleId:c,bodyId:y,style:b,overlayDialogStyle:g,rendered:m,zIndex:v,afterEnter:C,afterLeave:u,beforeLeave:A,handleClose:M,onModalClick:N,onOpenAutoFocus:Y,onCloseAutoFocus:O,onCloseRequested:T,onFocusoutPrevented:B}=io(t,r);Ae(re,{dialogRef:r,headerRef:i,bodyId:y,ns:l,rendered:m,style:b});const I=ie(N),S=k(()=>t.draggable&&!t.fullscreen);return s({visible:a,dialogContentRef:f,resetPostion:()=>{f.value.resetPostion()}}),(n,L)=>(z(),K(o(He),{to:n.appendTo,disabled:n.appendTo!=="body"?!1:!n.appendToBody},{default:E(()=>[R(Oe,{name:"dialog-fade",onAfterEnter:o(C),onAfterLeave:o(u),onBeforeLeave:o(A),persisted:""},{default:E(()=>[$e(R(o(eo),{"custom-mask-event":"",mask:n.modal,"overlay-class":n.modalClass,"z-index":o(v)},{default:E(()=>[U("div",{role:"dialog","aria-modal":"true","aria-label":n.title||void 0,"aria-labelledby":n.title?void 0:o(c),"aria-describedby":o(y),class:w(`${o(l).namespace.value}-overlay-dialog`),style:ne(o(g)),onClick:o(I).onClick,onMousedown:o(I).onMousedown,onMouseup:o(I).onMouseup},[R(o(Ve),{loop:"",trapped:o(a),"focus-start-el":"container",onFocusAfterTrapped:o(Y),onFocusAfterReleased:o(O),onFocusoutPrevented:o(B),onReleaseRequested:o(T)},{default:E(()=>[o(m)?(z(),K(no,ze({key:0,ref_key:"dialogContentRef",ref:f},n.$attrs,{center:n.center,"align-center":n.alignCenter,"close-icon":n.closeIcon,draggable:o(S),overflow:n.overflow,fullscreen:n.fullscreen,"show-close":n.showClose,title:n.title,"aria-level":n.headerAriaLevel,onClose:o(M)}),Ne({header:E(()=>[n.$slots.title?h(n.$slots,"title",{key:1}):h(n.$slots,"header",{key:0,close:o(M),titleId:o(c),titleClass:o(l).e("title")})]),default:E(()=>[h(n.$slots,"default")]),_:2},[n.$slots.footer?{name:"footer",fn:E(()=>[h(n.$slots,"footer")])}:void 0]),1040,["center","align-center","close-icon","draggable","overflow","fullscreen","show-close","title","aria-level","onClose"])):x("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,["aria-label","aria-labelledby","aria-describedby","onClick","onMousedown","onMouseup"])]),_:3},8,["mask","overlay-class","z-index"]),[[Ye,o(a)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])]),_:3},8,["to","disabled"]))}});var uo=le(co,[["__file","dialog.vue"]]);const ho=Re(uo);export{eo as E,ao as a,ho as b,_e as c,lo as d,io as u};