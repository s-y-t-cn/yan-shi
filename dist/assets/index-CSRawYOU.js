import{d as g,r as n,e as y,k as C,D as o,w as p,g as i,ai as d,c as T,ac as B}from"./index-Bsn8uhFR.js";import{E as I}from"./el-popover-Ceu9nK0v.js";/* empty css                  *//* empty css                  *//* empty css                   *//* empty css                 */import N from"./EditTemplate-DjDCL5LC.js";import{S}from"./SytTable-CpLTqMDC.js";import{a as U,b as h}from"./examples-k_dzLM7F.js";import{E as z}from"./index-NV_0FHae.js";import{E as R}from"./index-f9LhncNo.js";import{b as W}from"./index-CEJYwNXW.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-li2vGeyt.js";import"./error-DyDUhvQa.js";import"./SytPreviewItem-S8t7P-EL.js";import"./vnode-Ce9ES3ru.js";/* empty css                     *//* empty css               *//* empty css                    */import"./el-radio-Bnf4y1jI.js";/* empty css                  */import"./el-card-P9uYmptO.js";import"./index-B9r6-Uhw.js";import"./index-DFENW1vO.js";import"./index-qZKloEJB.js";import"./isEqual-DLLu8dhP.js";import"./index-C-Yt4Yjn.js";import"./castArray-dThNn2ng.js";import"./index-tMJgX954.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BqWwdBzB.js";import"./_baseClone-BqSBTuLD.js";import"./index-WB42fc2K.js";/* empty css                  */import"./index-C73im1hn.js";import"./index-C2ioxsOw.js";const P={class:"flex"},j=g({__name:"index",setup(q){let _=n([{title:"模板名",dataIndex:"name"}]),u=n([]),m=n(""),t=n(!1),f=()=>({name:"",formData:[],flowData:{nodesData:[],linesData:[]}}),l=n(f());const w=()=>{t.value=!0,l.value=f()},b=a=>{t.value=!0,l.value=a},V=async a=>{await h(a),s()},v=()=>{s(),t.value=!1},s=()=>{U().then(a=>{a.data&&(u.value=a.data)})};return s(),(a,r)=>{const c=z,D=R,k=W,x=I;return T(),y("div",null,[C("div",P,[o(c,{type:"primary",onClick:w},{default:p(()=>[B("添加模板")]),_:1}),o(D,{class:"search",modelValue:i(m),"onUpdate:modelValue":r[0]||(r[0]=e=>d(m)?m.value=e:m=e),clearable:"",placeholder:"输入模板名查询"},null,8,["modelValue"])]),o(k,{modelValue:i(t),"onUpdate:modelValue":r[2]||(r[2]=e=>d(t)?t.value=e:t=e),width:"80%","close-on-click-modal":!1,"close-on-press-escape":!1},{default:p(()=>[o(N,{modelValue:i(l),"onUpdate:modelValue":r[1]||(r[1]=e=>d(l)?l.value=e:l=e),onSubmit:v},null,8,["modelValue"])]),_:1},8,["modelValue"]),o(S,{columns:i(_),data:i(u).filter(e=>e.name.includes(i(m)))},{operations:p(e=>[o(c,{size:"small",type:"primary",onClick:E=>b(e.row),icon:"Edit",circle:""},null,8,["onClick"]),o(x,{title:`确定删除 ${e.row.name}`,"confirm-button-text":"确定","cancel-button-text":"取消",icon:"InfoFilled","icon-color":"var(--el-color-warning)",onConfirm:E=>V(e.row)},{reference:p(()=>[o(c,{size:"small",type:"danger",icon:"Delete",circle:""})]),_:2},1032,["title","onConfirm"])]),_:1},8,["columns","data"])])}}}),ge=F(j,[["__scopeId","data-v-391bbd77"]]);export{ge as default};
