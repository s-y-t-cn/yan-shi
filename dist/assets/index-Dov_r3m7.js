import{d as g,r as n,e as y,k as C,D as e,w as p,g as i,ai as d,c as T,ac as B}from"./index-B_ZJlzGL.js";import{E as I}from"./el-popover-DFSGd_dy.js";/* empty css                  *//* empty css                  *//* empty css                   *//* empty css                 */import N from"./EditTemplate-BASGwSAB.js";import{S}from"./SytTable-CtyyqNa7.js";import{a as U,b as h}from"./examples-M3TPShd4.js";import{E as z}from"./index-BU1K9O-H.js";import{E as R}from"./index-BBE6lv8d.js";import{b as W}from"./index-DMy1G94c.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-TXtwhKK1.js";import"./error-BJ0obFE8.js";import"./SytPreviewItem-CmQ2eCzg.js";import"./vnode-BLYMqKVk.js";/* empty css                     *//* empty css               *//* empty css                    */import"./el-radio-Bnf4y1jI.js";/* empty css                  */import"./index-NPrhiEQX.js";import"./index-DkGcPRir.js";import"./index-Bhb0wNCv.js";import"./index-CT3RxB0d.js";import"./isEqual-BBTZ5Qrx.js";import"./index-ZFLvW_Yn.js";import"./index-DIP1PYhk.js";import"./castArray-istU0CW9.js";import"./index-4rceZkO6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D7HMuvna.js";import"./_baseClone-DJp4dWdX.js";import"./position-D1Aw7UUH.js";import"./index-hpsKijdF.js";import"./el-card-8P3sCtdk.js";/* empty css                  */import"./index-DaUUvwgy.js";import"./index-C8tJppOc.js";const P={class:"flex"},j=g({__name:"index",setup(q){let _=n([{title:"模板名",dataIndex:"name"}]),u=n([]),m=n(""),t=n(!1),f=()=>({name:"",formData:[],flowData:{nodesData:[],linesData:[]}}),l=n(f());const w=()=>{t.value=!0,l.value=f()},b=a=>{t.value=!0,l.value=a},V=async a=>{await h(a),s()},v=()=>{s(),t.value=!1},s=()=>{U().then(a=>{a.data&&(u.value=a.data)})};return s(),(a,r)=>{const c=z,D=R,k=W,x=I;return T(),y("div",null,[C("div",P,[e(c,{type:"primary",onClick:w},{default:p(()=>[B("添加模板")]),_:1}),e(D,{class:"search",modelValue:i(m),"onUpdate:modelValue":r[0]||(r[0]=o=>d(m)?m.value=o:m=o),clearable:"",placeholder:"输入模板名查询"},null,8,["modelValue"])]),e(k,{modelValue:i(t),"onUpdate:modelValue":r[2]||(r[2]=o=>d(t)?t.value=o:t=o),width:"80%","close-on-click-modal":!1,"close-on-press-escape":!1},{default:p(()=>[e(N,{modelValue:i(l),"onUpdate:modelValue":r[1]||(r[1]=o=>d(l)?l.value=o:l=o),onSubmit:v},null,8,["modelValue"])]),_:1},8,["modelValue"]),e(S,{columns:i(_),data:i(u).filter(o=>o.name.includes(i(m)))},{operations:p(o=>[e(c,{size:"small",type:"primary",onClick:E=>b(o.row),icon:"Edit",circle:""},null,8,["onClick"]),e(x,{title:`确定删除 ${o.row.name}`,"confirm-button-text":"确定","cancel-button-text":"取消",icon:"InfoFilled","icon-color":"var(--el-color-warning)",onConfirm:E=>V(o.row)},{reference:p(()=>[e(c,{size:"small",type:"danger",icon:"Delete",circle:""})]),_:2},1032,["title","onConfirm"])]),_:1},8,["columns","data"])])}}}),Bo=F(j,[["__scopeId","data-v-391bbd77"]]);export{Bo as default};
