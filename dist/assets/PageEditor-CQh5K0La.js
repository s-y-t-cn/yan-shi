import{d as re,aF as Fe,ao as Re,x as Ve,y as he,aG as He,o as ge,ar as xe,c as S,e as j,B as t,w as _,l as Z,g as C,aH as We,E as O,aI as qe,G as se,f as $e,k as H,n as q,z as pe,r as L,aa as te,ac as ue,W as G,m as ce,t as je,ax as Me,az as ke,aJ as De,aK as Se,aL as Te,aM as Ae,aN as Be,ap as Ce,an as de,aO as Ge,R as Ye,L as Je,a1 as ye}from"./index-DS8UErgR.js";import{a as Q,E as Ie}from"./index-BoImKDmx.js";import{E as Oe,a as Ue,t as Ne,s as le,b as ee,f as ae,g as we,d as Qe,m as Ze,e as et,h as be,u as tt,i as ot,j as Le,N as ze,U as lt,k as st}from"./animation-CQVeqWYZ.js";import{_ as Ke}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{E as Xe}from"./index-BtYfLMMU.js";import{E as nt}from"./el-checkbox-DGg1j17u.js";import"./el-tooltip-DI6J6ICD.js";/* empty css                  */import{E as at}from"./index-ClVatqzt.js";import{E as it}from"./index-B0AkaYQm.js";const oe={drawerToggle:{code:"Tab",key:"Tab",shiftKey:!1,ctrlKey:!1,altKey:!1},copyNode:{code:"KeyC",key:"c",shiftKey:!1,ctrlKey:!0,altKey:!1},pasteNode:{code:"KeyV",key:"v",shiftKey:!1,ctrlKey:!0,altKey:!1},removeNode:{code:"Delete",key:"Delete",shiftKey:!1,ctrlKey:!1,altKey:!1},undo:{code:"KeyZ",key:"z",shiftKey:!1,ctrlKey:!0,altKey:!1},redo:{code:"KeyY",key:"y",shiftKey:!1,ctrlKey:!0,altKey:!1},save:{code:"KeyS",key:"s",shiftKey:!1,ctrlKey:!0,altKey:!1}},ie=n=>`快捷键：${n.shiftKey?"Shift + ":""}${n.ctrlKey?"Ctrl + ":""}${n.altKey?"Alt + ":""}${n.key}`,rt={key:0,class:"header"},ut={class:"content"},ct=re({__name:"Drawer",props:Fe({width:{type:String,default:"30%"},direction:{type:String,default:"rtl"}},{modelValue:{type:Boolean,default:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(n){Re(l=>({"67bb54b2":p.value}));const w=n,y=Ve(),p=he(()=>y.header?"35px":"0px"),c=he(()=>({width:w.direction=="rtl"||w.direction=="ltr"?w.width:"100%",height:w.direction=="ttb"||w.direction=="btt"?w.width:"100%"})),f=He(n,"modelValue"),s=oe.drawerToggle,P=l=>{l.code==s.code&&l.shiftKey==s.shiftKey&&l.ctrlKey==s.ctrlKey&&l.altKey==s.altKey&&(l.preventDefault(),f.value=!f.value)};return ge(()=>{document.addEventListener("keydown",P)}),xe(()=>{document.removeEventListener("keydown",P)}),(l,K)=>(S(),j("div",{class:q(["drawer",[{hide:!f.value},w.direction]]),style:pe({width:c.value.width,height:c.value.height})},[t(C(Q),{content:`${C(ie)(C(s))}`,effect:"light",teleported:!1},{default:_(()=>[n.direction=="rtl"||n.direction=="ltr"?(S(),Z(C(O),{key:0,class:"switch",size:"12",onClick:K[0]||(K[0]=k=>f.value=!f.value)},{default:_(()=>[t(C(We))]),_:1})):n.direction=="ttb"||n.direction=="btt"?(S(),Z(C(O),{key:1,class:"switch",size:"12",onClick:K[1]||(K[1]=k=>f.value=!f.value)},{default:_(()=>[t(C(qe))]),_:1})):se("",!0)]),_:1},8,["content"]),l.$slots.header?(S(),j("div",rt,[$e(l.$slots,"header",{},void 0,!0)])):se("",!0),H("div",ut,[t(C(Ie),null,{default:_(()=>[$e(l.$slots,"default",{},void 0,!0)]),_:3})])],6))}}),_e=Ke(ct,[["__scopeId","data-v-4f3edd37"]]),dt={__name:"PieMenu",props:{data:{type:Array,default(){return[{title:"菜单1",handleClick:()=>{},children:[{title:"菜单1-1",handleClick:()=>{}},{title:"菜单1-2",handleClick:()=>{}}]},{title:"菜单2",handleClick:()=>{},children:[{title:"菜单2-1",handleClick:()=>{}},{title:"菜单2-2",handleClick:()=>{}}]}]}}},emits:["click"],setup(n,{emit:w}){Re(d=>({"4a24d064":m.value,"5145de5e":C(l)}));const y=n,p=w,c=2*Math.PI;let f=L(),s=L(),P=L(80),l=he(()=>`${P.value}px`),K=he(()=>P.value/2),k=L(70),b=L(c);const E=new WeakMap,m=L("15px"),h=d=>{const z=!E.get(d),{level:R,index:N,pIndex:M}=d.dataset,I=M.split("-");E.set(d,z),f.value.querySelectorAll("div[data-level]").forEach(x=>{I.includes(x.dataset.index)||d===x||(x.dataset.level>Number(R)&&x.classList.remove("show"),x.classList.remove("active"),E.set(x,!1))}),z?(d.classList.add("active"),f.value.querySelectorAll(`div[data-level='${+R+1}'][data-p-index*='${N}']`).forEach(r=>r.classList.add("show"))):d.classList.remove("active")},i=()=>Math.random().toString(16).replace(".","");let Y=(d,z,R)=>{const N=b.value/d.length,M=N>=c?c-.001:N,I=d.length==1?1:0;for(let $=0,x=d;$<x.length;$++){let r=K.value+k.value*z,A=$*M,V=($+1)*M,F=r+Math.sin(A)*r,o=r-Math.cos(A)*r,a=r+Math.sin(V)*r,u=r-Math.cos(V)*r,v=document.createElement("div");v.classList.add("menu-item"),v.dataset.level=+z,v.dataset.index=i(),v.dataset.pIndex=R.dataset.pIndex?`${R.dataset.pIndex}-${R.dataset.index}`:`${R.dataset.index}`,v.style.setProperty("width",`${r*2}px`),v.style.setProperty("height",`${r*2}px`),v.style.setProperty("z-index",-z),v.style.setProperty("clip-path",`path("M ${r} ${r} L ${F} ${o} A ${r} ${r} 0 ${I} 1 ${a} ${u} z")`);const e=document.createElement("div");e.className="item-bg",z%2==0?e.classList.add("bg-even"):e.classList.add("bg-odd"),V=($+1)*M-.01,F=r+Math.sin(A)*r,o=r-Math.cos(A)*r,a=r+Math.sin(V)*r,u=r-Math.cos(V)*r,e.style.setProperty("width",`${r*2}px`),e.style.setProperty("height",`${r*2}px`),e.style.setProperty("clip-path",`path("M ${r} ${r} L ${F} ${o} A ${r} ${r} 0 ${I} 1 ${a} ${u} z")`),v.appendChild(e);let g=($+1/2)*M,T=r-k.value/2,X=document.createElement("div");X.style.left=r+Math.sin(g)*T+"px",X.style.top=r-Math.cos(g)*T+"px",X.style.setProperty("position","absolute"),X.style.textAlign="center",X.style.transform=`translate(-50%, -50%) rotate(${-Math.PI/2+g}rad)`;let U=document.createElement("div"),ve=g>Math.PI?Math.PI:0;U.style.display="inline-block",U.innerText=x[$].title,U.style.width=`${k.value-10}px`,U.style.transform=`rotateY(${ve}rad) rotateX(${ve}rad)`,X.appendChild(U),v.appendChild(X),v.addEventListener("pointerdown",()=>{var fe,ne;(ne=(fe=x[$]).handleClick)==null||ne.call(fe),p("click",x[$].title)}),v.addEventListener("pointerdown",()=>h(v)),f.value.insertAdjacentElement("afterbegin",v),x[$].children&&Y(x[$].children,z+1,v)}};const J=(d,z)=>{let R={offsetX:0,offsetY:0};const N=M=>{const I=M.clientX,$=M.clientY,{offsetX:x,offsetY:r}=R,A=d.getBoundingClientRect(),V=A.left,F=A.top,o=A.width,a=A.height,u=document.documentElement.clientWidth,v=document.documentElement.clientHeight,e=-V+x,g=-F+r,T=u-V-o+x,X=v-F-a+r,U=fe=>{let ne=x+fe.clientX-I,me=r+fe.clientY-$;ne=Math.min(Math.max(ne,e),T),me=Math.min(Math.max(me,g),X),R={offsetX:ne,offsetY:me},d&&(d.style.transform=`translate(${ne}px, ${me}px)`)},ve=()=>{document.removeEventListener("mousemove",U),document.removeEventListener("mouseup",ve)};document.addEventListener("mousemove",U),document.addEventListener("mouseup",ve)};z.addEventListener("mousedown",N)},D=()=>{J(f.value,s.value);const d="0",z=i();s.value.dataset.level=d,s.value.dataset.index=z,s.value.dataset.pIndex="",Y(y.data,+d+1,s.value),s.value.addEventListener("pointerdown",R=>h(s.value))};return ge(()=>{D()}),(d,z)=>(S(),j("div",{ref_key:"rongQi",ref:f,class:"rong-qi"},[H("div",{ref_key:"center",ref:s,class:"center",draggable:"false",onDblclick:z[0]||(z[0]=R=>p("click","center"))},[$e(d.$slots,"center",{draggable:"false"},()=>[te("菜单")],!0)],544)],512))}},vt=Ke(dt,[["__scopeId","data-v-9e36371f"]]),ft="_editor_o961q_1",pt="_container_o961q_93",mt="_views_o961q_115",W={editor:ft,container:pt,views:mt,"views-title":"_views-title_o961q_123","views-container":"_views-container_o961q_131","views-tabs":"_views-tabs_o961q_147"},yt=re({__name:"ComponentViews",props:["viewNodes"],setup(n){return(w,y)=>{const p=Xe,c=Oe,f=Ue;return S(),Z(f,{"model-value":["1","2","3","4","5","6"],class:q(C(W).views)},{default:_(()=>[t(c,{name:"1"},{title:_(()=>[t(p,{class:q(C(W)["views-title"]),tag:"b"},{default:_(()=>[te(" 布局 ")]),_:1},8,["class"])]),default:_(()=>[H("div",{class:q(C(W)["views-container"])},[(S(!0),j(G,null,ue(n.viewNodes,s=>(S(),j(G,{key:s.uuid},[s.isLayoutNode?(S(),Z(ce(s.view),{key:0})):se("",!0)],64))),128))],2)]),_:1}),t(c,{name:"2"},{title:_(()=>[t(p,{class:q(C(W)["views-title"]),tag:"b"},{default:_(()=>[te(" 表单 ")]),_:1},8,["class"])]),default:_(()=>[H("div",{class:q(C(W)["views-container"])},[(S(!0),j(G,null,ue(n.viewNodes,s=>(S(),j(G,{key:s.uuid},[s.isFormNode?(S(),Z(ce(s.view),{key:0})):se("",!0)],64))),128))],2)]),_:1}),t(c,{name:"3"},{title:_(()=>[t(p,{class:q(C(W)["views-title"]),tag:"b"},{default:_(()=>[te(" 图表 ")]),_:1},8,["class"])]),default:_(()=>[H("div",{class:q(C(W)["views-container"])},[(S(!0),j(G,null,ue(n.viewNodes,s=>(S(),j(G,{key:s.uuid},[s.isChartNode?(S(),Z(ce(s.view),{key:0})):se("",!0)],64))),128))],2)]),_:1}),t(c,{name:"4"},{title:_(()=>[t(p,{class:q(C(W)["views-title"]),tag:"b"},{default:_(()=>[te(" 数据展示 ")]),_:1},8,["class"])]),default:_(()=>[H("div",{class:q(C(W)["views-container"])},[(S(!0),j(G,null,ue(n.viewNodes,s=>(S(),j(G,{key:s.uuid},[s.isDataNode?(S(),Z(ce(s.view),{key:0})):se("",!0)],64))),128))],2)]),_:1}),t(c,{name:"5"},{title:_(()=>[t(p,{class:q(C(W)["views-title"]),tag:"b"},{default:_(()=>[te(" 导航 ")]),_:1},8,["class"])]),default:_(()=>[H("div",{class:q(C(W)["views-container"])},[(S(!0),j(G,null,ue(n.viewNodes,s=>(S(),j(G,{key:s.uuid},[s.isNavigationNode?(S(),Z(ce(s.view),{key:0})):se("",!0)],64))),128))],2)]),_:1}),t(c,{name:"6"},{title:_(()=>[t(p,{class:q(C(W)["views-title"]),tag:"b"},{default:_(()=>[te(" 3D ")]),_:1},8,["class"])]),default:_(()=>[H("div",{class:q(C(W)["views-container"])},[(S(!0),j(G,null,ue(n.viewNodes,s=>(S(),j(G,{key:s.uuid},[s.is3DNode?(S(),Z(ce(s.view),{key:0})):se("",!0)],64))),128))],2)]),_:1})]),_:1},8,["class"])}}}),ht=["onMouseover","onClick"],gt=["onPointerdown"],wt=["onPointerdown"],bt=["onPointerdown"],_t=["onPointerdown"],Pt=["onPointerdown"],$t=["onPointerdown"],xt=["onPointerdown"],Nt=re({__name:"ViewsTree",props:["page","hoveredNode","selectedNode","controls"],emits:["hoverNode","selectNode"],setup(n,{emit:w}){const y=n,p=w,c=(m,h,i)=>i=="inner"?h.data.isContainerNode:!h.data.isNPage,f=(m,h,i)=>{i=="inner"?m.data.parent=h.data:m.data.parent=h.data.parent},s=(m,h)=>{var i;return(i=y.controls)==null?void 0:i.moveBefore(m,h)},P=(m,h)=>{var i;return(i=y.controls)==null?void 0:i.moveAfter(m,h)},l=(m,h)=>{var i;return(i=y.controls)==null?void 0:i.copyNode(m,h)},K=(m,h)=>{var i;return(i=y.controls)==null?void 0:i.cloneNode(m,h)},k=(m,h)=>{var i;return(i=y.controls)==null?void 0:i.pasteNode(m,h)},b=(m,h)=>{var i;return(i=y.controls)==null?void 0:i.pasteNodeParams(m,h)},E=(m,h)=>{var i;return(i=y.controls)==null?void 0:i.removeNode(m,h)};return(m,h)=>{const i=O,Y=Q,J=nt;return S(),Z(J,{style:{width:"500px"},data:[n.page],props:{label:"name"},"node-key":"uuid","expand-on-click-node":!1,"default-expand-all":"",draggable:"","allow-drop":c,onNodeDrop:f},{default:_(({node:D,data:d})=>{var z,R;return[H("div",{class:q(["n-tree-node",{hovered:((z=n.hoveredNode)==null?void 0:z.uuid)==d.uuid,selected:((R=n.selectedNode)==null?void 0:R.uuid)==d.uuid}]),style:{flex:"1"},onMouseover:N=>p("hoverNode",{targetNode:Ce(d)}),onClick:N=>p("selectNode",{targetNode:Ce(d)})},[H("span",null,je(D.label),1),H("div",null,[H("div",{class:"button",style:pe({display:d.isNPage?"none":"initial"}),onPointerdown:N=>s(N,d)},[t(Y,{content:"上移",effect:"light",teleported:!1},{default:_(()=>[t(i,{size:13,color:"#08f"},{default:_(()=>[t(C(Me))]),_:1})]),_:1})],44,gt),H("div",{class:"button",style:pe({display:d.isNPage?"none":"initial"}),onPointerdown:N=>P(N,d)},[t(Y,{content:"下移",effect:"light",teleported:!1},{default:_(()=>[t(i,{size:13,color:"#08f"},{default:_(()=>[t(C(ke))]),_:1})]),_:1})],44,wt),H("div",{class:"button",style:pe({display:d.isNPage?"none":"initial"}),onPointerdown:N=>K(N,d)},[t(Y,{content:"克隆",effect:"light",teleported:!1},{default:_(()=>[t(i,{size:13,color:"#a50"},{default:_(()=>[t(C(De))]),_:1})]),_:1})],44,bt),H("div",{class:"button",onPointerdown:N=>b(N,d)},[t(Y,{content:"粘贴参数",effect:"light",teleported:!1},{default:_(()=>[t(i,{size:13,color:"#a50"},{default:_(()=>[t(C(Se))]),_:1})]),_:1})],40,_t),H("div",{class:"button",onPointerdown:N=>l(N,d)},[t(Y,{content:"复制",effect:"light",teleported:!1},{default:_(()=>[t(i,{size:13,color:"#a50"},{default:_(()=>[t(C(Te))]),_:1})]),_:1})],40,Pt),H("div",{class:"button",onPointerdown:N=>k(N,d)},[t(Y,{content:"粘贴",effect:"light",teleported:!1},{default:_(()=>[t(i,{size:13,color:"#a50"},{default:_(()=>[t(C(Ae))]),_:1})]),_:1})],40,$t),H("div",{class:"button",style:pe({display:d.isNPage?"none":"initial"}),onPointerdown:N=>E(N,d)},[t(Y,{content:"删除",effect:"light",teleported:!1},{default:_(()=>[t(i,{size:13,color:"#a00"},{default:_(()=>[t(C(Be))]),_:1})]),_:1})],44,xt)])],42,ht)]}),_:1},8,["data"])}}}),Kt=Ke(Nt,[["__scopeId","data-v-f48b45fa"]]),Et="_controls_78emz_1",Ct="_button_78emz_95",Lt="_guide_78emz_135",B={controls:Et,"right-resize":"_right-resize_78emz_41","bottom-resize":"_bottom-resize_78emz_59","corner-resize":"_corner-resize_78emz_77","button-list":"_button-list_78emz_95",button:Ct,guide:Lt,"guide-horizontal":"_guide-horizontal_78emz_149","guide-vertical":"_guide-vertical_78emz_163"},Ee=100;function zt(n,w,y=!0,p){let c={offsetX:0,offsetY:0};const f=s=>{const P=window.getComputedStyle(n),l=Number.parseFloat(P.getPropertyValue("left")),K=Number.parseFloat(P.getPropertyValue("top"));if(P.position!="absolute")return;c={offsetX:l,offsetY:K};const k=s.clientX,b=s.clientY,{offsetX:E,offsetY:m}=c,h=n.getBoundingClientRect(),i=h.left,Y=h.top,J=h.width,D=h.height,d=document.documentElement.clientWidth,z=document.documentElement.clientHeight,R=-i+E,N=-Y+m,M=d-i-J+E,I=z-Y-D+m,$=Ne(r=>{let A=E+r.clientX-k,V=m+r.clientY-b;y||(A=Math.min(Math.max(A,R),M),V=Math.min(Math.max(V,N),I)),c={offsetX:A,offsetY:V},n&&(n.style.left=`${A}px`,n.style.top=`${V}px`),p==null||p(r)},Ee),x=()=>{document.removeEventListener("mousemove",$),document.removeEventListener("mouseup",x)};document.addEventListener("mousemove",$),document.addEventListener("mouseup",x)};return w.addEventListener("mousedown",f),()=>{w.removeEventListener("mousedown",f)}}function Rt(n,w){const y=p=>{if(window.getComputedStyle(n).position=="absolute")return;n.setAttribute("draggable","true");const c=f=>{n.setAttribute("draggable","false"),document.removeEventListener("mouseup",c)};document.addEventListener("mouseup",c)};return w.addEventListener("mousedown",y),()=>{w.removeEventListener("mousedown",y)}}function Pe(n,w,y,p){const c=f=>{const s=window.getComputedStyle(n),P=Number.parseFloat(s.getPropertyValue("width")),l=Number.parseFloat(s.getPropertyValue("height")),K=f.clientX,k=f.clientY,b=Ne(m=>{let h=m.clientX-K+P,i=m.clientY-k+l;n&&(y===0?n.style.width=`${h}px`:y===1?n.style.height=`${i}px`:(n.style.width=`${h}px`,n.style.height=`${i}px`)),p==null||p(m)},Ee),E=()=>{document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",b),document.addEventListener("mouseup",E)};return w.addEventListener("mousedown",c),()=>{w.removeEventListener("mousedown",c)}}function Mt(n,w){const y=Ne(p=>{p.preventDefault(),p.stopPropagation();const{deltaY:c}=p,f=5e-4,l=window.getComputedStyle(n).getPropertyValue("transform").match(/matrix\(([-\d\.]+), ([-\d\.]+), ([-\d\.]+), ([-\d\.]+), ([-\d\.]+), ([-\d\.]+)\)/);let K=+(l==null?void 0:l[1])||1;const k=+(l==null?void 0:l[2])||0,b=+(l==null?void 0:l[3])||0;let E=+(l==null?void 0:l[4])||1;const m=+(l==null?void 0:l[5])||0,h=+(l==null?void 0:l[6])||0;K+=-c*f,E+=-c*f,n.style.transform=`matrix(${K}, ${k}, ${b}, ${E}, ${m}, ${h})`,w==null||w(p)},Ee);return n.addEventListener("wheel",y),()=>{n.removeEventListener("wheel",y)}}const kt=re((n,{expose:w})=>{const y=L(),p=L(),c=L(),f=L(),s=5,P=()=>{y.value.style.visibility=p.value.style.visibility=c.value.style.visibility=f.value.style.visibility="hidden",y.value.style.left=p.value.style.left=c.value.style.top=f.value.style.top="0"};return w({hideGuides:P,showGuides:K=>{if(!(K&&y.value&&p.value&&c.value&&f.value))return;P();const k=K.elRef.value,b=n.page.getAllNodes().filter(D=>!D.isNPage&&D!==K).map(D=>D.elRef.value),{left:E,right:m,top:h,bottom:i,width:Y,height:J}=k.getBoundingClientRect();for(let D=0,d=b.length;D<d;D++){const z=b[D];if(!z)continue;const{left:R,right:N,top:M,bottom:I}=z.getBoundingClientRect();let $,x=n.page.elRef.value;($=Math.abs(R-E)<=s&&R||Math.abs(N-E)<=s&&N)&&(y.value.style.visibility="visible",le(y.value,$,"left",x),le(K.elRef.value,$,"left",x)),($=Math.abs(R-m)<=s&&R||Math.abs(N-m)<=s&&N)&&(p.value.style.visibility="visible",le(p.value,$,"left",x),le(K.elRef.value,$-Y,"left",x)),($=Math.abs(M-h)<=s&&M||Math.abs(I-h)<=s&&I)&&(c.value.style.visibility="visible",le(c.value,$,"top",x),le(K.elRef.value,$,"top",x)),($=Math.abs(M-i)<=s&&M||Math.abs(I-i)<=s&&I)&&(f.value.style.visibility="visible",le(f.value,$,"top",x),le(K.elRef.value,$-J,"top",x))}K.updateStyle()}}),()=>t(G,null,[t("div",{ref:y,class:`${B.guide} ${B["guide-vertical"]}`},null),t("div",{ref:p,class:`${B.guide} ${B["guide-vertical"]}`},null),t("div",{ref:c,class:`${B.guide} ${B["guide-horizontal"]}`},null),t("div",{ref:f,class:`${B.guide} ${B["guide-horizontal"]}`},null)])},{props:{page:{type:Object}}}),Dt=re((n,{attrs:w,emit:y,expose:p})=>{const c=L(),f=L(),s=L(),P=L(),l=L(),K=L(),k=L(),b=de(),E=30,m=()=>{const o=f.value.style;o.setProperty("top",`-${E}px`),o.setProperty("bottom","auto"),o.setProperty("left","auto"),o.setProperty("right","0");const{top:a,bottom:u,left:v,right:e}=Qe(f.value),{bottom:g}=c.value.getBoundingClientRect(),{top:T,left:X,right:U}=f.value.getBoundingClientRect();T<a&&(g+E>u?(o.setProperty("top","0"),o.setProperty("bottom","auto")):(o.setProperty("top","auto"),o.setProperty("bottom",`-${E}px`))),X<v&&(o.setProperty("left","0"),o.setProperty("right","auto")),U>e&&(o.setProperty("left","auto"),o.setProperty("right","0"))},h=L({...w.style}),i=[],Y=()=>{b.value=null,c.value.remove(),i.forEach(o=>o())},J=o=>{o&&(o.append(c.value),Ye(m))},D=()=>{b.value&&b.value.updateStyle()},d=o=>{var a;(a=k.value)==null||a.showGuides(b.value),D()},z=o=>{Y(),k.value.hideGuides(),b.value=o,J(o.elRef.value);const a=Pe(o.elRef.value,P.value,0,D),u=Pe(o.elRef.value,l.value,1,D),v=Pe(o.elRef.value,K.value,2,D),e=zt(o.elRef.value,s.value,!0,d);i.push(e,a,u,v),o.isNPage?i.push(Mt(o.elRef.value,D)):i.push(Rt(o.elRef.value,s.value))},R=(o,a)=>{if(o.preventDefault(),o.stopPropagation(),!a)return;const u=a.parent,v=u.children.indexOf(a),e=u.children[v-1];e&&u.insert(a,e)},N=(o,a)=>{if(o.preventDefault(),o.stopPropagation(),!a)return;const u=a.parent,v=u.children.indexOf(a),e=u.children[v+1];e&&u.insert(a,e,"after")},M=L(""),I=(o,a)=>{if(o.preventDefault(),o.stopPropagation(),!a)return;const u=ee(a);M.value=u},$=(o,a)=>{if(o.preventDefault(),o.stopPropagation(),!a)return;const u=ee(a),v=ae(u);M.value=u,v.traverse(g=>g.uuid=we()),a.parent.insert(v,a,"after")},x=(o,a)=>{if(o.preventDefault(),o.stopPropagation(),!a||!M.value)return;const u=ae(M.value);u.traverse(v=>v.uuid=we()),a!=null&&a.isContainerNode?a.isNPage&&u.isNPage?(a.copy(u),[...u.children].forEach(v=>a.add(v))):u.isNPage||a.add(u):a.parent.add(u)},r=(o,a)=>{if(o.preventDefault(),o.stopPropagation(),!a||!M.value)return;const u=ae(M.value);u.traverse(v=>v.uuid=we()),a.copy(u)},A=(o,a)=>{if(o.preventDefault(),o.stopPropagation(),!a)return;Y();const u=a.parent;u==null||u.remove(a),y("removeNode")},V=o=>{const{copyNode:a,pasteNode:u,removeNode:v}=oe;o.code==a.code&&o.shiftKey==a.shiftKey&&o.ctrlKey==a.ctrlKey&&o.altKey==a.altKey&&I(o,b.value),o.code==u.code&&o.shiftKey==u.shiftKey&&o.ctrlKey==u.ctrlKey&&o.altKey==u.altKey&&x(o,b.value),o.code==v.code&&o.shiftKey==v.shiftKey&&o.ctrlKey==v.ctrlKey&&o.altKey==v.altKey&&A(o,b.value)};ge(()=>{document.addEventListener("keydown",V)}),xe(()=>{document.removeEventListener("keydown",V)}),p({control:z,clearControl:Y,moveBefore:R,moveAfter:N,copyNode:I,cloneNode:$,pasteNode:x,pasteNodeParams:r,removeNode:A});const F=L("#fff");return()=>{var o,a,u,v;return t("div",{ref:c,class:B.controls,style:h.value},[t("div",{ref:P,class:B["right-resize"]},null),t("div",{ref:l,class:B["bottom-resize"]},null),t("div",{ref:K,class:B["corner-resize"]},null),t("div",{ref:f,class:B["button-list"]},[t("div",{class:B.button},[t(Xe,{style:`--el-text-color: ${F.value};`},{default:()=>{var e;return[(e=b.value)==null?void 0:e.name]}})]),t("div",{ref:s,class:B.button},[t(Q,{content:"拖拽",effect:"light",teleported:!1},{default:()=>[t(O,{size:15,color:`${F.value}`},{default:()=>[t(Ge,null,null)]})]})]),t("div",{class:B.button,style:{display:(o=b.value)!=null&&o.isNPage?"none":"initial"},onPointerdown:e=>R(e,b.value)},[t(Q,{content:"上移",effect:"light",teleported:!1},{default:()=>[t(O,{size:15,color:`${F.value}`},{default:()=>[t(Me,null,null)]})]})]),t("div",{class:B.button,style:{display:(a=b.value)!=null&&a.isNPage?"none":"initial"},onPointerdown:e=>N(e,b.value)},[t(Q,{content:"下移",effect:"light",teleported:!1},{default:()=>[t(O,{size:15,color:`${F.value}`},{default:()=>[t(ke,null,null)]})]})]),t("div",{class:B.button,style:{display:(u=b.value)!=null&&u.isNPage?"none":"initial"},onPointerdown:e=>$(e,b.value)},[t(Q,{content:"克隆",effect:"light",teleported:!1},{default:()=>[t(O,{size:15,color:`${F.value}`},{default:()=>[t(De,null,null)]})]})]),t("div",{class:B.button,onPointerdown:e=>r(e,b.value)},[t(Q,{content:"粘贴参数",effect:"light",teleported:!1},{default:()=>[t(O,{size:15,color:`${F.value}`},{default:()=>[t(Se,null,null)]})]})]),t("div",{class:B.button,onPointerdown:e=>I(e,b.value)},[t(Q,{content:`复制 ${ie(oe.copyNode)}`,effect:"light",teleported:!1},{default:()=>[t(O,{size:15,color:`${F.value}`},{default:()=>[t(Te,null,null)]})]})]),t("div",{class:B.button,onPointerdown:e=>x(e,b.value)},[t(Q,{content:`粘贴 ${ie(oe.pasteNode)}`,effect:"light",teleported:!1},{default:()=>[t(O,{size:15,color:`${F.value}`},{default:()=>[t(Ae,null,null)]})]})]),t("div",{class:B.button,style:{display:(v=b.value)!=null&&v.isNPage?"none":"initial"},onPointerdown:e=>A(e,b.value)},[t(Q,{content:`删除 ${ie(oe.removeNode)}`,effect:"light",teleported:!1},{default:()=>[t(O,{size:15,color:`${F.value}`},{default:()=>[t(Be,null,null)]})]})])]),t(kt,{page:n.page,ref:k},null)])}},{props:{page:{type:Object}},emits:["removeNode"]}),St=re((n,{expose:w})=>{const y=L(),p=L(),c=L({pointerEvents:"none",position:"absolute",zIndex:"100",inset:"0",boxSizing:"border-box",border:"2px dashed var(--color-8)"}),f=()=>{p.value=null,y.value.remove()},s=l=>{l&&l.append(y.value)};return w({hover:l=>{f(),p.value=l,s(l.elRef.value)},clearHover:f}),()=>t("div",{ref:y,style:c.value},null)});function Tt(n,w){var y;w.isContainerNode?w.add(n):(y=w.parent)==null||y.insert(n,w,"after")}const jt=re((n,{emit:w,expose:y})=>{const p=L(),c=de([]);c.value=Object.values(Ze).filter(e=>e.preview).map(e=>new e);const f=L([{title:"退出",handleClick:()=>{w("exit")}},{title:"全屏",handleClick:()=>{const e=p.value;e&&(document.fullscreenElement==e?document.exitFullscreen():e.requestFullscreen())}},{title:"编辑",children:[{title:`撤销 ${ie(oe.undo)}`,handleClick:()=>{d()}},{title:`恢复 ${ie(oe.redo)}`,handleClick:()=>{z()}}]},{title:"文件",children:[{title:"导出",children:[{title:"导出当前编辑页面vue",handleClick:()=>{l.value&&(l.value.resetStyle(),et(l.value).then(e=>{be(e,"Page.zip")}))}},{title:"导出当前编辑页面json",handleClick:()=>{if(!l.value)return;l.value.resetStyle();const e=ee(l.value);be(e,"page.json")}},{title:`导出所有页面json ${ie(oe.save)}`,handleClick:()=>{J()}}]},{title:"导入json",handleClick:()=>{tt(e=>{e.text().then(g=>{const T=ae(g);Array.isArray(T)?T.forEach(X=>m(X)):m(T)})})}}]}]),s=L(),P=L([]),l=L();let K=null;const k=de(),b=new WeakMap,E=e=>{if(l.value=e,k.value=null,!e)return;K=e.component;const g=P.value.findIndex(T=>T.uuid==e.uuid);g!==-1&&P.value.splice(g,1,l.value)},m=e=>{b[e.uuid]=new lt,P.value.push(e),E(e)},h=e=>{const g=P.value.findIndex(T=>T.uuid==e.uuid);if(g!==-1&&P.value.splice(g,1),e.uuid==l.value.uuid){const T=P.value[g-1],X=P.value[g];E(X||T)}},i=e=>{if(P.value=[],!e)return m(new ze);const g=ae(e);Array.isArray(g)?g.forEach(T=>m(T)):m(g)},Y=e=>e?ee(P.value):ee(l.value);Je([l,P],()=>{if(w("change",ee(l.value),ee(P.value)),!D&&l.value){const e=b[l.value.uuid];e==null||e.push(ee(l.value))}else D=!1},{deep:!0,flush:"post"});const J=()=>{P.value.forEach(g=>g.resetStyle());const e=ee(P.value);be(e,"allPages.json")};let D=!1;const d=()=>{if(!l.value)return;const e=b[l.value.uuid];e==null||e.undo(g=>{E(ae(g)),D=!0})},z=()=>{if(!l.value)return;const e=b[l.value.uuid];e==null||e.redo(g=>{E(ae(g)),D=!0})},R=e=>{k.value=e,e.active=!0,Ye(()=>{s.value.control(e)})},N=e=>{l.value.traverse(g=>g.active=!1),R(e.targetNode)},M=de(),I=L(),$=e=>{M.value=e.targetNode,I.value.hover(e.targetNode)},x=e=>{M.value=null,I.value.clearHover()},r=de(),A=de(),V=e=>{r.value=e.targetNode},F=200,o=st(e=>{r.value&&(A.value=e.targetNode,Tt(r.value,A.value),R(r.value))},F),a=e=>{setTimeout(()=>r.value=A.value=null,F)},u=()=>{k.value=null},v=e=>{const{undo:g,redo:T,save:X}=oe;e.preventDefault(),e.stopPropagation(),e.code==g.code&&e.shiftKey==g.shiftKey&&e.ctrlKey==g.ctrlKey&&e.altKey==g.altKey&&d(),e.code==T.code&&e.shiftKey==T.shiftKey&&e.ctrlKey==T.ctrlKey&&e.altKey==T.altKey&&z(),e.code==X.code&&e.shiftKey==X.shiftKey&&e.ctrlKey==X.ctrlKey&&e.altKey==X.altKey&&J()};return ge(()=>{document.addEventListener("keydown",v)}),xe(()=>{document.removeEventListener("keydown",v)}),y({setData:i,getData:Y}),()=>ye("div",{ref:p,class:W.editor,onDragend:a,onDragNode:V},[t(vt,{data:f.value},null),t(_e,{width:"330px",direction:"ltr"},{header:()=>t("span",null,[te("组件视图")]),default:()=>t(ot,{class:W["views-tabs"],type:"border-card"},{default:()=>[t(Le,{label:"组件"},{default:()=>[t(yt,{viewNodes:c.value},null)]}),t(Le,{label:"视图结构"},{default:()=>[t(Ie,null,{default:()=>[l.value?t(Kt,{page:l.value,hoveredNode:M.value,selectedNode:k.value,controls:s.value,onHoverNode:$,onSelectNode:N},null):null]})]})]})}),l.value?ye("div",{class:W.container,onMouseleave:x,onHoverNode:$,onSelectNode:N,onDragenterNode:o},t(K,null,null)):"",ye(_e,{width:"330px",onKeydown:e=>e.stopPropagation()},{header:()=>t("span",null,[te("参数")]),default:()=>k.value?ye(k.value.params):""}),t(_e,{width:"30px",direction:"ttb"},{default:()=>[...P.value.map(e=>{var g;return t(at,{color:e.uuid==((g=l.value)==null?void 0:g.uuid)?"var(--color-5)":"var(--color-1)",effect:"dark",style:"cursor: pointer",size:"small",closable:!0,onClick:()=>E(e),onClose:()=>h(e)},{default:()=>[e.props.name]})}),t(it,{size:"small",circle:!0,icon:"Plus",onClick:()=>m(new ze)},null)]}),t(Dt,{ref:s,page:l.value,style:{display:k.value?"block":"none"},onRemoveNode:u},null),t(St,{ref:I,style:{display:M.value?"block":"none"}},null)])},{emits:["change","exit"]});export{jt as S};