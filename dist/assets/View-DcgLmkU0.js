import{d as U,ah as z,r as c,N as J,y as L,c as i,l as b,w as o,D as s,k as d,t as k,g as n,e as D,ae as I,Y as x,ac as v,A as R,am as $,an as j}from"./index-Bsn8uhFR.js";import{E as A,S as P}from"./SytPreviewItem-S8t7P-EL.js";/* empty css                  */import{E as W,a as Y}from"./el-timeline-item-9cNf6uU6.js";import{E as q}from"./el-card-P9uYmptO.js";/* empty css                     */import{w as G,f as H}from"./examples-k_dzLM7F.js";import{a as K}from"./index-WB42fc2K.js";import{E as M}from"./index-NV_0FHae.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./vnode-Ce9ES3ru.js";/* empty css                 *//* empty css                  *//* empty css               *//* empty css                    */import"./el-radio-Bnf4y1jI.js";/* empty css                  */import"./index-f9LhncNo.js";import"./error-DyDUhvQa.js";import"./index-DFENW1vO.js";import"./index-qZKloEJB.js";import"./isEqual-DLLu8dhP.js";import"./index-li2vGeyt.js";import"./index-C-Yt4Yjn.js";import"./castArray-dThNn2ng.js";import"./index-tMJgX954.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B9r6-Uhw.js";import"./index-BqWwdBzB.js";import"./_baseClone-BqSBTuLD.js";const X=f=>($("data-v-ffb59fe0"),f=f(),j(),f),Z=X(()=>d("span",null,"流程",-1)),ee=U({__name:"View",props:{data:Object},emits:["examine"],setup(f,{emit:h}){const V=z(),g=f,F=h;let a=c({name:"",status:"",submitter:{},formData:[],flowData:[]}),_=c(!1);J(()=>JSON.parse(JSON.stringify(g.data)),async t=>{let e=t.formData,r=(await H({name:t.name})).data.formData;for(let m in e)N(m,r).value=e[m];a.value=t,a.value.formData=r,_.value=!1},{deep:!0,immediate:!0});const N=(t,e)=>{for(let r of e)if(r.type==="layout"){for(let m of r.cols)for(let p of m.children)if(t===p.field)return p}else if(t===r.field)return r};let u=c({flowId:"",examineId:"",status:""}),B=L(()=>{let t=a.value.flowData.map(e=>{switch(u.value.flowId=a.value._id,e.status){case"未处理":e.color="";break;case"处理中":e.color="",e.username===V.username&&(_.value=!0,u.value.examineId=e.id);break;case"通过":e.color="#00aabb";break;case"否决":e.color="#ff0000"}return e});return t.unshift({type:"发起人",label:a.value.submitter.nickname,color:"#00aabb"}),t});const E=c(),S=t=>{u.value.status=t,G(u.value).then(()=>F("examine"))};return(t,e)=>{const r=K,m=q,p=Y,C=W,y=M,T=A;return i(),b(T,{direction:"vertical",fill:"",class:"submit-container"},{default:o(()=>[s(m,null,{header:o(()=>[d("h1",null,k(n(a).name),1)]),default:o(()=>[s(r,{ref_key:"ruleFormRef",ref:E,model:n(a).formData,disabled:""},{default:o(()=>[(i(!0),D(x,null,I(n(a).formData,(l,w)=>(i(),b(P,{key:l.field,modelValue:n(a).formData[w],"onUpdate:modelValue":O=>n(a).formData[w]=O,index:w.toString(),"rule-form-ref":E.value},null,8,["modelValue","onUpdate:modelValue","index","rule-form-ref"]))),128))]),_:1},8,["model"])]),_:1}),s(m,null,{header:o(()=>[Z]),default:o(()=>[s(C,null,{default:o(()=>[(i(!0),D(x,null,I(n(B),l=>(i(),b(p,{key:l.id,color:l.color,timestamp:l.timestamp},{default:o(()=>[d("div",null,k(l.type),1),d("div",null,k(l.label),1)]),_:2},1032,["color","timestamp"]))),128))]),_:1}),n(_)?(i(),D(x,{key:0},[s(y,{size:"small",type:"warning",onClick:e[0]||(e[0]=l=>S("通过")),icon:"SuccessFilled"},{default:o(()=>[v(" 通过 ")]),_:1}),s(y,{size:"small",type:"danger",onClick:e[1]||(e[1]=l=>S("否决")),icon:"Failed"},{default:o(()=>[v(" 否决 ")]),_:1})],64)):R("",!0)]),_:1})]),_:1})}}}),Be=Q(ee,[["__scopeId","data-v-ffb59fe0"]]);export{Be as default};
