import{d as P,r,o as W,N as x,c as A,e as G,k as H,B as a,w as l,aa as R,g as s,ag as J,bW as K,c2 as L,aj as _,E as Q,bT as X,bV as w,c3 as Y,c4 as Z,c5 as ee}from"./index-DS8UErgR.js";/* empty css                   *//* empty css                     *//* empty css               *//* empty css                  *//* empty css                     *//* empty css                  */import{a as te}from"./el-checkbox-DGg1j17u.js";/* empty css                       *//* empty css                 */import{E as ae}from"./el-popover-B95JUFLT.js";/* empty css                  */import{S as oe}from"./SytTable-C57DKOnv.js";import{E as le}from"./index-B0AkaYQm.js";import{E as se}from"./index-DfvYIogZ.js";import{E as ne,a as re}from"./index-CWSxMXru.js";import{b as ie}from"./index-BW2oSHgl.js";import{_ as me}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-C4DnY8Sm.js";import"./index-BoImKDmx.js";import"./error-BVE1zgTY.js";import"./index-Cqdvrgji.js";import"./index-ClVatqzt.js";import"./castArray-BNmOH-O1.js";import"./scroll-BWptVlnv.js";import"./isEqual-C2wmjFZs.js";import"./_Uint8Array-BJkjB4dv.js";import"./_baseIteratee-B6nIyuUL.js";import"./index-B6GQWuVu.js";import"./index-CQ3JoZQm.js";import"./_initCloneObject-ByGU0cCB.js";import"./_baseClone-CF3fkfK3.js";import"./vnode--R6ESk3G.js";const de={class:"container"},pe={class:"tools"},ue=P({__name:"Roles",setup(ce){const T=r([{title:"角色名",dataIndex:"name"},{title:"菜单",dataIndex:"menusNames"}]);let y=r([]),g=r([]),h=r(!0),i=r(!1),b=r(null),d=r("");const k=r({name:[{required:!0,message:"请输入角色名",trigger:"blur"}],menus:[{required:!0,message:"请选择菜单",trigger:"change"}]});let E=()=>({name:"",pid:"",menus:[]}),n=r(E());const V=r([]),C=async()=>{await X().then(t=>{t.code===200&&(y.value=t.data,V.value=w(t.data))})},B=async()=>{await Y().then(t=>{t.code===200&&(t.data.forEach(e=>{e.menusNames=e.menus.map(u=>{var c,m;return(m=(c=y.value.find(v=>u==v.id))==null?void 0:c.meta)==null?void 0:m.title})}),g.value=w(t.data))})},p=async()=>{await C(),await B(),h.value=!1},I=()=>{d.value="添加",i.value=!0,n.value=E()},F=t=>{d.value="编辑",i.value=!0,n.value=K(t)},N=async()=>{let t=Object.assign({},n.value);Z(t).then(e=>{e.code==200&&(_({type:"success",message:"添加成功"}),p())})},M=async()=>{let t=Object.assign({},n.value);ee(t).then(e=>{e.code==200&&(_({type:"success",message:"编辑成功"}),p())})},U=t=>{t.id?L({id:t.id}).then(e=>{e.code==200&&(_({type:"success",message:"删除成功"}),p())}):_({type:"error",message:"不存在的id"})},j=t=>{t&&t.validate(e=>{e?(d.value==="添加"?N():M(),i.value=!1):console.log("验证失败!")})};return W(()=>{p()}),(t,e)=>{const u=le,c=x("Edit"),m=Q,v=x("Delete"),O=ae,S=se,f=ne,D=te,q=re,$=ie;return A(),G("div",de,[H("div",pe,[a(u,{onClick:I},{default:l(()=>[R("添加角色")]),_:1})]),a(oe,{columns:T.value,data:s(g)},{operations:l(({row:o})=>[a(m,{class:"icon",color:"#0af",onClick:z=>F(o)},{default:l(()=>[a(c)]),_:2},1032,["onClick"]),a(O,{title:"确定删除?",onConfirm:z=>U(o)},{reference:l(()=>[a(m,{class:"icon",color:"#f00"},{default:l(()=>[a(v)]),_:1})]),_:2},1032,["onConfirm"])]),_:1},8,["columns","data"]),a($,{modelValue:s(i),"onUpdate:modelValue":e[4]||(e[4]=o=>J(i)?i.value=o:i=o),title:s(d),width:"350px"},{default:l(()=>[a(q,{ref_key:"ruleFormRef",ref:b,model:s(n),rules:k.value,size:"large",class:"w-full","label-width":"auto"},{default:l(()=>[a(f,{label:"角色名",prop:"name"},{default:l(()=>[a(S,{modelValue:s(n).name,"onUpdate:modelValue":e[0]||(e[0]=o=>s(n).name=o),placeholder:"角色名",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),a(f,{label:"权限菜单",prop:"menus"},{default:l(()=>[a(D,{modelValue:s(n).menus,"onUpdate:modelValue":e[1]||(e[1]=o=>s(n).menus=o),data:V.value,props:{label:o=>o.meta.title,value:"id"},"check-strictly":"",multiple:"","render-after-expand":!1,style:{width:"240px"}},null,8,["modelValue","data","props"])]),_:1}),a(f,{label:"上级角色"},{default:l(()=>[a(D,{modelValue:s(n).pid,"onUpdate:modelValue":e[2]||(e[2]=o=>s(n).pid=o),data:s(g),props:{label:"name",value:"id"},"check-strictly":"","render-after-expand":!1,clearable:"",style:{width:"240px"}},null,8,["modelValue","data"])]),_:1}),a(f,null,{default:l(()=>[a(u,{class:"w-full",type:"primary",onClick:e[3]||(e[3]=o=>j(s(b)))},{default:l(()=>[R(" 保存 ")]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])}}}),Je=me(ue,[["__scopeId","data-v-c8352330"]]);export{Je as default};