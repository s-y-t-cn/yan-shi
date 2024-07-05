import{d as $,r as n,o as K,K as L,g as o,c as X,e as A,M as l,a6 as x,w as s,O as E,ab as G,aX as H}from"./index-3lwVo2y0.js";import{v as J}from"./el-loading-C9j-BNIn.js";/* empty css                   *//* empty css                     */import"./index-F5rh05N7.js";import"./el-tag-Dx9-JzTw.js";import"./el-checkbox-s_GngyB_.js";import{E as Q}from"./el-tree-select-4oQ8etI8.js";import{E as W}from"./el-popover-D0oM8tgv.js";/* empty css                  */import{E as Y}from"./el-divider-Cjgw3Pyv.js";import{h as k}from"./index-DIjjrsno.js";import{h as Z,c as ee,j as te,k as ae,u as le}from"./permission-Db3r6hMz.js";import{S as oe}from"./SytTable-C7D3Q104.js";import{E as _}from"./index-qESz8UqH.js";import{E as re}from"./index-sCpGYuuU.js";import{f as se}from"./index-DlwHQsx5.js";import{E as ne,a as ie}from"./index-kL61-N24.js";import{b as de}from"./index-CmodV8F6.js";import{_ as me}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-BWwQj9eg.js";import"./plugin-vue_export-helper-CqGSI99y.js";import"./_Uint8Array-DyXCWp4w.js";import"./typescript-gghwE45V.js";import"./isEqual-DSxYV8To.js";import"./index-Wki9wfLK.js";import"./focus-trap-BjQrKON9.js";import"./scroll-BTBHWhC0.js";import"./castArray-Br8Ioqbo.js";import"./index-yAYQ0nfy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./el-tooltip-l0sNRNKZ.js";import"./_baseClone-BmgoMR3V.js";import"./vnode-mNfM4dg-.js";const pe={"element-loading-text":"加载中..."},ue=$({__name:"Users",setup(ce){let D=n([{title:"用户名",dataIndex:"username"},{title:"角色",dataIndex:"rolesNames"},{title:"昵称",dataIndex:"nickname"},{title:"部门",dataIndex:"department"},{title:"职位",dataIndex:"position"}]),u=n(""),f=n([]),w=n(!0),d=n(!1),b=n(null),c=n("");const I=n({username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],roles:[{required:!0,message:"请输入角色",trigger:"blur"}],nickname:[{required:!0,message:"请输入昵称",trigger:"blur"}],department:[{required:!0,message:"请输入部门",trigger:"blur"}],position:[{required:!0,message:"请输入职位",trigger:"blur"}]}),y=n([]),V=n([]),C=async()=>{await ee().then(t=>{t.code==200&&(y.value=t.data,V.value=H(t.data))})};let U=()=>({username:"",password:"",nickname:"",roles:[],department:"软件部",position:"职员"}),r=n(U());const F=async()=>{await te().then(t=>{t.code===200&&(f.value=t.data.map(e=>(e.encrypedPassword=e.password,e.rolesNames=e.roles.map(i=>{var m;return(m=y.value.find(v=>v.id==i))==null?void 0:m.name}),e)))})},g=async()=>{await C(),await F(),w.value=!1},R=()=>{c.value="添加账号",d.value=!0,r.value=U()},T=t=>{c.value="编辑账号",d.value=!0,r.value=G(t)},h=async()=>{let t=Object.assign({},r.value);t.password=await k(t.password),ae(t).then(e=>{e.code==200&&(_({type:"success",message:"添加成功"}),g())})},q=async()=>{let t=Object.assign({},r.value);t.password!=t.encrypedPassword&&(t.password=await k(t.password)),Reflect.deleteProperty(t,"encrypedPassword"),le(t).then(e=>{e.code==200&&(g(),_({type:"success",message:"编辑成功"}))})},B=t=>{t._id?Z({_id:t._id}).then(e=>{e.code==200&&(f.value.splice(f.value.findIndex(i=>i._id===t._id),1),_({type:"success",message:"删除成功"}))}):_({type:"error",message:"不存在的_id"})},P=t=>{t&&t.validate(e=>{e?(c.value==="添加账号"?h():q(),d.value=!1):console.log("验证失败!")})};return K(()=>{g()}),(t,e)=>{const i=re,m=se,v=Y,N=W,p=ne,O=Q,j=ie,z=de,M=J;return L((X(),A("div",pe,[l(i,{modelValue:o(u),"onUpdate:modelValue":e[0]||(e[0]=a=>x(u)?u.value=a:u=a),placeholder:"输入账号查询",class:"search",clearable:""},null,8,["modelValue"]),l(m,{onClick:R},{default:s(()=>[E("添加账号")]),_:1}),l(v),l(oe,{columns:o(D),data:o(f).filter(a=>a.username.includes(o(u)))},{operations:s(a=>[l(m,{size:"small",type:"primary",onClick:S=>T(a.row),icon:"Edit",circle:""},null,8,["onClick"]),l(N,{title:`确定删除 ${a.row.username} 账号?`,"confirm-button-text":"确定","cancel-button-text":"取消",icon:"InfoFilled","icon-color":"var(--el-color-warning)",onConfirm:S=>B(a.row)},{reference:s(()=>[l(m,{size:"small",type:"danger",icon:"Delete",circle:""})]),_:2},1032,["title","onConfirm"])]),_:1},8,["columns","data"]),l(z,{modelValue:o(d),"onUpdate:modelValue":e[8]||(e[8]=a=>x(d)?d.value=a:d=a),title:o(c)},{default:s(()=>[l(j,{ref_key:"ruleFormRef",ref:b,model:o(r),rules:I.value,size:"large",class:"w-full"},{default:s(()=>[l(p,{label:"账号",prop:"username"},{default:s(()=>[l(i,{modelValue:o(r).username,"onUpdate:modelValue":e[1]||(e[1]=a=>o(r).username=a),placeholder:"用户名","prefix-icon":"user",disabled:o(c)=="编辑账号"},null,8,["modelValue","disabled"])]),_:1}),l(p,{label:"密码",prop:"password"},{default:s(()=>[l(i,{modelValue:o(r).password,"onUpdate:modelValue":e[2]||(e[2]=a=>o(r).password=a),placeholder:"密码","prefix-icon":"lock",type:"password"},null,8,["modelValue"])]),_:1}),l(p,{label:"角色",prop:"roles"},{default:s(()=>[l(O,{modelValue:o(r).roles,"onUpdate:modelValue":e[3]||(e[3]=a=>o(r).roles=a),data:V.value,props:{label:"name",value:"id"},"check-strictly":"",multiple:"","render-after-expand":!1,style:{width:"240px"}},null,8,["modelValue","data"])]),_:1}),l(p,{label:"昵称",prop:"nickname"},{default:s(()=>[l(i,{modelValue:o(r).nickname,"onUpdate:modelValue":e[4]||(e[4]=a=>o(r).nickname=a),placeholder:"昵称"},null,8,["modelValue"])]),_:1}),l(p,{label:"部门",prop:"department"},{default:s(()=>[l(i,{modelValue:o(r).department,"onUpdate:modelValue":e[5]||(e[5]=a=>o(r).department=a),placeholder:"部门"},null,8,["modelValue"])]),_:1}),l(p,{label:"职位",prop:"position"},{default:s(()=>[l(i,{modelValue:o(r).position,"onUpdate:modelValue":e[6]||(e[6]=a=>o(r).position=a),placeholder:"职位"},null,8,["modelValue"])]),_:1}),l(p,null,{default:s(()=>[l(m,{class:"w-full",type:"primary",onClick:e[7]||(e[7]=a=>P(o(b)))},{default:s(()=>[E(" 保存 ")]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])),[[M,o(w)]])}}}),Je=me(ue,[["__scopeId","data-v-72202445"]]);export{Je as default};
