import{d as D,r as u,L as E,y as S,c as i,l as d,w as l,B as f,k as c,t as p,g as _,e as g,ac as y,W as B,ak as I,al as x}from"./index-DIMNw_Zj.js";import{E as N}from"./el-space-DVduNicK.js";import{E as O,a as T}from"./el-timeline-item-CwnwbPC-.js";/* empty css                */import{f as V}from"./examples-IxegvKJD.js";import{E as C}from"./index-C3FhFfMe.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./vnode-BwmuWjnw.js";const L=r=>(I("data-v-100ba41b"),r=r(),x(),r),v=L(()=>c("span",null,"流程",-1)),J=D({__name:"View",props:{data:Object},setup(r){const b=r;let s=u({name:"",status:"",submitter:{},formData:[],flowData:[]});E(()=>JSON.parse(JSON.stringify(b.data)),async a=>{let e=a.formData,t=(await V({name:a.name})).data.formData;for(let o in e)w(o,t).value=e[o];s.value=a,s.value.formData=t},{deep:!0,immediate:!0});const w=(a,e)=>{for(let t of e)if(t.type==="layout"){for(let o of t.cols)for(let m of o.children)if(a===m.field)return m}else if(a===t.field)return t};let h=S(()=>{let a=s.value.flowData.map(e=>{switch(e.status){case"未处理":e.color="";break;case"处理中":e.color="";break;case"通过":e.color="#00aabb";break;case"否决":e.color="#ff0000"}return e});return a.unshift({type:"发起人",label:s.value.submitter.nickname,color:"#00aabb"}),a});return u(),(a,e)=>{const t=C,o=T,m=O,k=N;return i(),d(k,{direction:"vertical",fill:"",class:"submit-container"},{default:l(()=>[f(t,null,{header:l(()=>[c("h1",null,p(_(s).name),1)]),_:1}),f(t,null,{header:l(()=>[v]),default:l(()=>[f(m,null,{default:l(()=>[(i(!0),g(B,null,y(_(h),n=>(i(),d(o,{key:n.id,color:n.color,timestamp:n.timestamp},{default:l(()=>[c("div",null,p(n.type),1),c("div",null,p(n.label),1)]),_:2},1032,["color","timestamp"]))),128))]),_:1})]),_:1})]),_:1})}}}),M=F(J,[["__scopeId","data-v-100ba41b"]]);export{M as default};
