import{d as L,af as U,r as c,L as z,y as J,c as i,l as b,w as o,C as s,k as d,t as k,g as n,e as D,ac as I,W as x,aa as v,A as R,ak as W,al as $}from"./index-g37XHkO7.js";import{E as j,S as A}from"./SytPreviewItem-zesOK_pE.js";/* empty css                  */import{E as P,a as q}from"./el-timeline-item-xpV2Go0K.js";import{E as G}from"./el-card-DuID4xM1.js";/* empty css                     */import{w as H,f as K}from"./examples-DKVMKnJo.js";import{a as M}from"./index-ekn85pdJ.js";import{E as Q}from"./index-7XQ89VVv.js";import{_ as X}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./vnode-DwFJRcHj.js";/* empty css                 *//* empty css                  *//* empty css               *//* empty css                    */import"./el-radio-KCor6jJh.js";/* empty css                  */import"./index-CWjOxhQe.js";import"./error-C6KkHRRa.js";import"./index-BP-IRLDI.js";import"./index-16XDJShn.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-ClVUFy22.js";import"./isEqual-sIzh-_wJ.js";import"./index-CdXg1XjN.js";import"./index-B--V0hz4.js";import"./index-Cq1NGWuE.js";import"./index-Ct0d8tij.js";import"./castArray-D6nup7xA.js";import"./index-rcptLjZg.js";import"./_baseClone-YGkPyP1V.js";import"./position-8TaTLdEo.js";const Y=f=>(W("data-v-ffb59fe0"),f=f(),$(),f),Z=Y(()=>d("span",null,"流程",-1)),ee=L({__name:"View",props:{data:Object},emits:["examine"],setup(f,{emit:V}){const g=U(),h=f,F=V;let a=c({name:"",status:"",submitter:{},formData:[],flowData:[]}),_=c(!1);z(()=>JSON.parse(JSON.stringify(h.data)),async t=>{let e=t.formData,r=(await K({name:t.name})).data.formData;for(let m in e)C(m,r).value=e[m];a.value=t,a.value.formData=r,_.value=!1},{deep:!0,immediate:!0});const C=(t,e)=>{for(let r of e)if(r.type==="layout"){for(let m of r.cols)for(let u of m.children)if(t===u.field)return u}else if(t===r.field)return r};let p=c({flowId:"",examineId:"",status:""}),B=J(()=>{let t=a.value.flowData.map(e=>{switch(p.value.flowId=a.value._id,e.status){case"未处理":e.color="";break;case"处理中":e.color="",e.username===g.username&&(_.value=!0,p.value.examineId=e.id);break;case"通过":e.color="#00aabb";break;case"否决":e.color="#ff0000"}return e});return t.unshift({type:"发起人",label:a.value.submitter.nickname,color:"#00aabb"}),t});const E=c(),S=t=>{p.value.status=t,H(p.value).then(()=>F("examine"))};return(t,e)=>{const r=M,m=G,u=q,N=P,y=Q,T=j;return i(),b(T,{direction:"vertical",fill:"",class:"submit-container"},{default:o(()=>[s(m,null,{header:o(()=>[d("h1",null,k(n(a).name),1)]),default:o(()=>[s(r,{ref_key:"ruleFormRef",ref:E,model:n(a).formData,disabled:""},{default:o(()=>[(i(!0),D(x,null,I(n(a).formData,(l,w)=>(i(),b(A,{key:l.field,modelValue:n(a).formData[w],"onUpdate:modelValue":O=>n(a).formData[w]=O,index:w.toString(),"rule-form-ref":E.value},null,8,["modelValue","onUpdate:modelValue","index","rule-form-ref"]))),128))]),_:1},8,["model"])]),_:1}),s(m,null,{header:o(()=>[Z]),default:o(()=>[s(N,null,{default:o(()=>[(i(!0),D(x,null,I(n(B),l=>(i(),b(u,{key:l.id,color:l.color,timestamp:l.timestamp},{default:o(()=>[d("div",null,k(l.type),1),d("div",null,k(l.label),1)]),_:2},1032,["color","timestamp"]))),128))]),_:1}),n(_)?(i(),D(x,{key:0},[s(y,{size:"small",type:"warning",onClick:e[0]||(e[0]=l=>S("通过")),icon:"SuccessFilled"},{default:o(()=>[v(" 通过 ")]),_:1}),s(y,{size:"small",type:"danger",onClick:e[1]||(e[1]=l=>S("否决")),icon:"Failed"},{default:o(()=>[v(" 否决 ")]),_:1})],64)):R("",!0)]),_:1})]),_:1})}}}),Te=X(ee,[["__scopeId","data-v-ffb59fe0"]]);export{Te as default};
