import{d as ne,r as u,y as ke,L as le,c as s,e as i,g as n,W as L,ac as S,n as be,ag as De,k as a,F as V,C as T,aC as ae,aD as J,G as U,ak as se,al as ie,t as M,R as Pe,aE as Ce,o as Me,B as E,w as N,aa as $e,aj as Ie,ap as Le}from"./index-BJnXyKVp.js";import{E as Se}from"./el-space-Camgjez1.js";/* empty css                *//* empty css                 */import{p as Ve,u as Ee}from"./examples-BWXM7eEQ.js";import{S as Oe}from"./PageEditor-BUwXCDVD.js";import"./animation-CXCGPh_Q.js";import{_ as re}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{E as Xe}from"./index-BiJnfdqe.js";import{E as Ye}from"./index-XTd2ODOz.js";import{E as Te}from"./index-By5K5Vmm.js";import"./vnode-zmnWa8q4.js";import"./index-4Fm7eXAf.js";import"./error-DShZK1re.js";import"./index-CSU0GQeE.js";import"./index-BfOb3weB.js";import"./el-checkbox-Bk2i9P2Q.js";import"./index-BixkNvtl.js";import"./index-C7ZdmN6q.js";import"./castArray-BQHs20Uc.js";import"./scroll-Sz8zLlxi.js";import"./isEqual-DgoZLpwi.js";import"./_Uint8Array-DJuCLRja.js";import"./_baseIteratee-By9Ip0_B.js";import"./index-DuCQwYUO.js";import"./index-CwgBQ-kl.js";import"./_initCloneObject-Ctsa7_iQ.js";import"./el-tooltip-DOnXmCDG.js";/* empty css                  */import"./index-BbAIFuu_.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-ChrRDZV8.js";import"./index-Do-lg-hv.js";import"./index-BnSmluwF.js";import"./dropdown-B_ZkHS7Z.js";import"./index-ICkUlJyf.js";import"./_baseClone-Brygbwuc.js";import"./index-D3usf8bu.js";import"./index-C3lv4u6o.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const y=m=>(se("data-v-2d582b57"),m=m(),ie(),m),Ue=y(()=>a("svg",{class:"background",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},[a("defs",null,[a("pattern",{id:"svg-bg-grid",patternUnits:"userSpaceOnUse",x:"0",y:"0",width:"10",height:"10"},[a("path",{d:"M 10 0 H0 M0 0 V0 10",stroke:"#DCDCDC","stroke-width":"1",opacity:"1"})])]),a("g",null,[a("rect",{width:"100%",height:"100%",fill:"url(#svg-bg-grid)"})])],-1)),Re=["height"],Be=["transform","onPointerdown"],Ne=["d","stroke","fill"],Fe=["x","y"],ze=y(()=>a("defs",null,[a("marker",{id:"svg-line-triangle",viewBox:"0 0 10 10",refX:"1",refY:"5",markerUnits:"userSpaceOnUse",markerWidth:"10",markerHeight:"10",orient:"auto"},[a("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#000"})])],-1)),He=["transform"],je=["data-id"],Ae=["points"],We=["points"],Je=["x","y"],Ge=["data-id","transform"],qe=["d","stroke","fill"],Ke=["x","y"],Qe=["x","y"],Ze=["x","y"],et=["cx","cy","onPointerdown","onPointerup"],tt=["x1","y1","x2","y2"],ot={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",style:{width:"100%",height:"100%"}},at=y(()=>a("path",{d:"M 0 0 L 1000 1000 M 1000 0 L 0 1000","stroke-width":"100",stroke:"#123456"},null,-1)),nt=[at],lt=y(()=>a("strong",null,"编辑",-1)),st=[lt],it=y(()=>a("span",{class:"popover-span"},"节点文本",-1)),rt=y(()=>a("span",null,"：",-1)),dt={key:0},pt=y(()=>a("span",{class:"popover-span"},"执行人",-1)),ut=y(()=>a("span",null,"：",-1)),ft=["label"],vt={key:1},ht=y(()=>a("span",{class:"popover-span"},"条件",-1)),mt=y(()=>a("span",null,"：",-1)),ct=y(()=>a("option",{disabled:"",value:""},"表单项",-1)),yt=["value"],xt=y(()=>a("option",{disabled:"",value:""},"比较",-1)),gt=["value"],wt=y(()=>a("option",{disabled:"",value:""},"选项",-1)),_t=ne({__name:"SytFlow",props:{modelValue:{type:Object,default(){return{nodesData:[],linesData:[]}}},flowHandleOptions:Array,flowConditionOptions:Array},emits:["update:modelValue"],setup(m,{emit:G}){const F=m,q=G;let f=u([{id:"",type:"start",x:0,y:0,width:120,height:60,text:"开始",path:"M 30 0 h 60 a 30 30 0 0 1 30 30 a 30 30 0 0 1 -30 30 h -60 a 30 30 0 0 1 -30 -30 a 30 30 0 0 1 30 -30",fill:"#fff",stroke:"#123456"},{id:"",type:"handle",x:0,y:0,width:120,height:60,text:"处理",path:"M 5 0 h 110 a 5 5 0 0 1 5 5 v 50 a 5 5 0 0 1 -5 5 h -110 a 5 5 0 0 1 -5 -5 v -50 a 5 5 0 0 1 5 -5",fill:"#fff",stroke:"#123456",properties:{label:"",value:""}},{id:"",type:"condition",x:0,y:0,width:120,height:80,text:"条件",path:"M 60 0 L 120 40 L 60 80 L 0 40 z",fill:"#fff",stroke:"#123456",properties:{field:"",label:"",type:"",comparison:"",value:""}},{id:"",type:"end",x:0,y:0,width:120,height:60,text:"结束",path:"M 30 0 h 60 a 30 30 0 0 1 30 30 a 30 30 0 0 1 -30 30 h -60 a 30 30 0 0 1 -30 -30 a 30 30 0 0 1 30 -30",fill:"#fff",stroke:"#123456"}]),r=ke(()=>F.modelValue);le(r,t=>q("update:modelValue",t),{deep:!0});let D=u({x:0,y:0}),z=()=>{D.value={x:0,y:0}},_=u({x:0,y:0}),P=u(!1);const x=(t,o)=>{k.value.x=t.screenX,k.value.y=t.screenY;let e=JSON.parse(JSON.stringify(f.value.find(l=>l.type==o)));e.id=Date.now().toString(16)+Math.random().toString(16),e.x=Math.round(t.offsetX/10)*10-_.value.x,e.y=Math.round(t.offsetY/10)*10-_.value.y,r.value.nodesData.push(e),D.value=e};let k=u({x:0,y:0});const X=t=>{P.value=!0,k.value.x=t.screenX,k.value.y=t.screenY,t.target.dataset.id==="body"?D.value=_.value:D.value=r.value.nodesData.find(o=>o.id===t.currentTarget.dataset.id)??D.value},K=t=>{let o=t.screenX-k.value.x,e=t.screenY-k.value.y;Math.abs(o)>=10&&(D.value.x+=parseInt(o/10)*10,k.value.x=t.screenX-o%10),Math.abs(e)>=10&&(D.value.y+=parseInt(e/10)*10,k.value.y=t.screenY-e%10),r.value.linesData.forEach(l=>ee(l)),ve(t)},Y=()=>{z(),te(),Z.value=!1},ee=t=>{let o=r.value.nodesData.find(l=>l.id===t.fromId),e=r.value.nodesData.find(l=>l.id===t.toId);if(o===e)return!1;if(o&&e){let l=o.x+o.width/2,w=o.y+o.height/2,A=e.x+e.width/2,I=e.y+e.height/2,d=A,v=I,W=l,R=w,c=l,b=I,B=!1;for(let h of r.value.nodesData){if(l>=h.x&&l<=h.x+h.width&&w<=h.y&&v>=h.y+h.height){B="vertical";break}if(w>=h.y&&w<=h.y+h.height&&l<=h.x&&d>=h.x+h.width){B="horizontal";break}}B?(B=="vertical"&&(c=W=W+Math.abs(w)/4+100,c<d&&c-d<-(e.width/2+10)?d-=e.width/2+10:c>d&&c-d>e.width/2+10?d+=e.width/2+10:(w<I?v=I-e.height/2-10:v=I+e.height/2+10,b=R,d=c)),B=="horizontal"&&(c=d,b=R=R+Math.abs(l)/4+100,b<v&&b-v<-(e.height/2+10)?v-=e.height/2+10:b>v&&b-v>e.height/2+10?v+=e.height/2+10:(l<A?d=A-e.width/2-10:d=A+e.width/2+10,c=W,v=b))):c<d&&c-d<-(e.width/2+10)?d=d-e.width/2-10:c>d&&c-d>e.width/2+10?d=d+e.width/2+10:(w<I?v=I-e.height/2-10:v=I+e.height/2+10,b=R=(w+v)/2,d=l);let _e=`${l} ${w},
    ${W} ${R},
    ${c} ${b},
    ${d} ${v}`;t.points=_e,t.textCoord={x:(c+d)/2,y:(b+v)/2},r.value.linesData.find(h=>h.fromId==t.fromId&&h.toId==t.toId)||(t.id=Date.now().toString(16)+Math.random().toString(16),r.value.linesData.push(t))}};let H=u({id:"",type:"line",fromId:"",toId:"",points:"",textCoord:{x:0,y:0},text:""});const de=()=>{H.value={id:"",type:"line",fromId:"",toId:"",points:"",textCoord:{x:0,y:0},text:""}},pe=t=>{let o=r.value.nodesData.find(e=>e.id==t);fe(o),H.value.fromId=t},ue=t=>{H.value.toId=t,ee(H.value),te(),z()};let Q=u(null),g=u({fromPoint:{x:0,y:0},toPoint:{x:0,y:0}});const fe=t=>{g.value.fromPoint.x=g.value.toPoint.x=t.x+t.width/2,g.value.fromPoint.y=g.value.toPoint.y=t.y+t.height/2,Q.value.style.display="block"},ve=t=>{g.value.toPoint.x=t.offsetX-_.value.x,g.value.toPoint.y=t.offsetY-_.value.y},te=()=>{Q.value.style.display="none",g.value={fromPoint:{x:0,y:0},toPoint:{x:0,y:0}},de()};let O=u(null),C=u(null),p=u({}),$=u(),Z=u(!1),j=u({x:0,y:0});const oe=(t,o)=>{o==="node"&&(O.value.show(),C.value=r.value.nodesData.find(e=>e.id===t.currentTarget.dataset.id),p.value=C.value),o==="line"&&(O.value.show(),C.value=r.value.linesData.find(e=>e.id===t.currentTarget.dataset.id),p.value=C.value)},he=t=>{O.value.style.left=`${t.offsetX}px`,O.value.style.top=`${t.offsetY}px`},me=()=>{C.value={},O.value.close()},ce=()=>{r.value.nodesData=r.value.nodesData.filter(t=>t.id!==C.value.id),r.value.linesData=r.value.linesData.filter(t=>t.id!==C.value.id&&t.fromId!==C.value.id&&t.toId!==C.value.id)},ye=()=>{p.value={},$.value.hidePopover()},xe=()=>{Pe(()=>{const t=O.value.getBoundingClientRect();$.value.style.left=t.left+"px",$.value.style.top=t.top+"px"})},ge=t=>{Z.value=!0,j.value.x=t.pageX-$.value.offsetLeft,j.value.y=t.pageY-$.value.offsetTop},we=t=>{Z.value&&($.value.style.left=t.pageX-j.value.x+"px",$.value.style.top=t.pageY-j.value.y+"px")};return(t,o)=>(s(),i("div",{class:"flow-container",onPointerup:o[15]||(o[15]=e=>Y()),onPointerleave:o[16]||(o[16]=e=>Y()),onContextmenu:V(he,["prevent"]),onPointerdown:me,onPointermove:o[17]||(o[17]=e=>we(e))},[Ue,(s(),i("svg",{class:"panel",width:"90",height:n(f).length*55,xmlns:"http://www.w3.org/2000/svg"},[(s(!0),i(L,null,S(n(f),(e,l)=>(s(),i("g",{key:e.type,class:"cursor-pointer",transform:`translate(9, ${55*l+10}) scale(.6)`,onPointerdown:w=>x(w,e.type)},[a("path",{d:e.path,stroke:e.stroke,fill:e.fill,"stroke-width":"2"},null,8,Ne),a("text",{x:e.width/2,y:e.height/2,"font-size":"25","text-anchor":"middle","dominant-baseline":"central","user-select":"none"},M(e.text),9,Fe)],40,Be))),128))],8,Re)),(s(),i("svg",{class:be(["draw",{"cursor-grabbing":n(P)}]),xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%","data-id":"body",onPointerdown:o[3]||(o[3]=e=>X(e)),onPointermove:o[4]||(o[4]=e=>K(e)),onPointerup:o[5]||(o[5]=e=>De(P)?P.value=!1:P=!1)},[ze,a("g",{transform:`translate(${n(_).x}, ${n(_).y})`},[(s(!0),i(L,null,S(n(r).linesData,e=>(s(),i("g",{key:e.path,class:"cursor-auto","data-id":e.id,onContextmenu:o[0]||(o[0]=l=>oe(l,"line"))},[a("polyline",{fill:"none",stroke:"transparent",points:e.points,"stroke-width":"20"},null,8,Ae),a("polyline",{fill:"none",stroke:"black",points:e.points,"stroke-width":"1","marker-end":"url(#svg-line-triangle)"},null,8,We),a("text",{x:e.textCoord.x,y:e.textCoord.y,"text-anchor":"middle"},M(e.text),9,Je)],40,je))),128)),(s(!0),i(L,null,S(n(r).linesData,e=>(s(),i("g",{key:e.id}))),128)),(s(!0),i(L,null,S(n(r).nodesData,e=>(s(),i("g",{key:e.id,class:"node cursor-move",style:{filter:"drop-shadow(0 0 12px rgba(0, 0, 100, 0.12))"},"data-id":e.id,transform:`translate(${e.x}, ${e.y})`,onPointerdown:o[1]||(o[1]=V(l=>X(l),["stop"])),onContextmenu:o[2]||(o[2]=l=>oe(l,"node"))},[a("path",{d:e.path,stroke:e.stroke,fill:e.fill,"stroke-opacity":"0.2","stroke-width":"2"},null,8,qe),a("text",{x:e.width/2,y:e.height/2,"text-anchor":"middle","dominant-baseline":"central"},M(e.text),9,Ke),e.type=="handle"?(s(),i("text",{key:0,x:e.width/2,y:e.height/2+25,"text-anchor":"middle"},M(e.properties.label),9,Qe)):U("",!0),e.type=="condition"?(s(),i("text",{key:1,x:e.width/2,y:e.height/2+25,"text-anchor":"middle",fill:"#000","stroke-width":"0.1",stroke:"#fff"},M(e.properties.label+e.properties.comparison+e.properties.value),9,Ze)):U("",!0),a("circle",{class:"anchor cursor-pointer",cx:e.width/2,cy:e.height/2,r:"6",fill:"#fff",stroke:"#000","stroke-width":"3",opacity:"0.5",display:"none",onPointerdown:V(l=>pe(e.id),["stop"]),onPointerup:V(l=>ue(e.id),["stop"])},null,40,et)],40,Ge))),128)),a("line",{ref_key:"dragLineRef",ref:Q,x1:n(g).fromPoint.x,y1:n(g).fromPoint.y,x2:n(g).toPoint.x,y2:n(g).toPoint.y,"stroke-dasharray":"3 2",stroke:"#000",display:"none","pointer-events":"none"},null,8,tt)],8,He)],34)),a("dialog",{ref_key:"contextmenuRef",ref:O,class:"menu"},[a("button",{class:"menu-item",popovertarget:"flow-edit-popover",popovertargetaction:"show",onPointerdown:V(xe,["stop"])}," 编辑 ",32),a("button",{class:"menu-item",onPointerdown:ce},"删除",32)],512),a("div",{id:"flow-edit-popover",ref_key:"popoverRef",ref:$,popover:"auto",onContextmenu:o[14]||(o[14]=V(()=>{},["stop","prevent"]))},[a("div",{class:"close-popover cursor-pointer",onPointerdown:V(ye,["stop"])},[(s(),i("svg",ot,nt))],32),a("div",{class:"popover-drag cursor-move",onPointerdown:o[6]||(o[6]=V(e=>ge(e),["stop"]))},st,32),a("div",null,[it,rt,T(a("input",{"onUpdate:modelValue":o[7]||(o[7]=e=>n(p).text=e)},null,512),[[ae,n(p).text]])]),a("div",null,[n(p).type=="handle"?(s(),i("div",dt,[pt,ut,T(a("select",{"onUpdate:modelValue":o[8]||(o[8]=e=>n(p).properties=e)},[(s(!0),i(L,null,S(m.flowHandleOptions,e=>(s(),i("option",{key:e.value,label:e.label},M(e.label),9,ft))),128))],512),[[J,n(p).properties]])])):U("",!0),n(p).type=="condition"?(s(),i("div",vt,[ht,mt,T(a("select",{"onUpdate:modelValue":o[9]||(o[9]=e=>n(p).properties.field=e),onChange:o[10]||(o[10]=e=>Object.assign(n(p).properties,m.flowConditionOptions.find(l=>l.field==e.target.value)))},[ct,(s(!0),i(L,null,S(m.flowConditionOptions,e=>(s(),i("option",{key:e.filed,value:e.field},M(e.label),9,yt))),128))],544),[[J,n(p).properties.field]]),T(a("select",{"onUpdate:modelValue":o[11]||(o[11]=e=>n(p).properties.comparison=e),style:{width:"58px"}},[xt,(s(),i(L,null,S(["小于","等于","大于"],e=>a("option",{key:e,value:e},M(e),9,gt)),64))],512),[[J,n(p).properties.comparison]]),n(p).properties.type=="number"?T((s(),i("input",{key:0,"onUpdate:modelValue":o[12]||(o[12]=e=>n(p).properties.value=e),type:"number"},null,512)),[[ae,n(p).properties.value]]):U("",!0),n(p).properties.type=="radio"?T((s(),i("select",{key:1,"onUpdate:modelValue":o[13]||(o[13]=e=>n(p).properties.value=e)},[wt,(s(!0),i(L,null,S(n(p).properties.options,e=>(s(),i("option",{key:e.value},M(e.label),1))),128))],512)),[[J,n(p).properties.value]]):U("",!0)])):U("",!0)])],544)],32))}}),kt=re(_t,[["__scopeId","data-v-2d582b57"]]),bt=m=>(se("data-v-2dec1e61"),m=m(),ie(),m),Dt={class:"h-full"},Pt={class:"flex"},Ct=bt(()=>a("span",null,"模板名称：",-1)),Mt=ne({__name:"EditTemplate",props:{data:{type:Object,default(){return{name:"",formData:"",flowData:{nodesData:[],linesData:[]}}}}},emits:["submit"],setup(m,{emit:G}){const F=m,q=G,f=u();le(()=>F.data,()=>{f.value=structuredClone(Le(F.data))},{immediate:!0});const r=u(),D=(P,x)=>{f.value.formData=x},z=async()=>{if(!f.value.name)return Ie.error("模板名不能为空"),!1;f.value._id?await Ee(f.value):await Ve(f.value),q("submit")};let _=u([]);return Ce().then(P=>{_.value=P.data.data.map(x=>({label:x.nickname,value:x.username}))}),Me(()=>{r.value.setData(f.value.formData)}),(P,x)=>{const k=Ye,X=Te,K=Se;return s(),i("div",Dt,[E(K,{class:"w-full",direction:"vertical",fill:""},{default:N(()=>[E(X,null,{default:N(()=>[a("div",Pt,[Ct,E(k,{modelValue:f.value.name,"onUpdate:modelValue":x[0]||(x[0]=Y=>f.value.name=Y)},null,8,["modelValue"]),E(n(Xe),{type:"primary",onClick:z},{default:N(()=>[$e("保存模板")]),_:1})])]),_:1}),E(X,{header:"表单"},{default:N(()=>[E(n(Oe),{ref_key:"formEditorRef",ref:r,onChange:D},null,512)]),_:1}),E(X,{header:"流程"},{default:N(()=>[E(kt,{modelValue:f.value.flowData,"onUpdate:modelValue":x[1]||(x[1]=Y=>f.value.flowData=Y),"flow-handle-options":n(_)},null,8,["modelValue","flow-handle-options"])]),_:1})]),_:1})])}}}),mo=re(Mt,[["__scopeId","data-v-2dec1e61"]]);export{mo as default};
