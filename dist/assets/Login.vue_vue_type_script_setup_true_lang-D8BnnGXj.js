import{d as y,r as f,I as c,k as E,w as n,L as v,a5 as V,c as b,M as a,g as _,O as k}from"./index-B2ff-rFN.js";/* empty css                     *//* empty css                  */import{u as x}from"./index-CDp5nt-z.js";import{l as F}from"./auth-CtID0RP3.js";import{f as M}from"./permission-CAa-2GWk.js";import{u as h}from"./menus-B2ciZQin.js";import{h as S}from"./index-DIjjrsno.js";import{a as U,E as B}from"./index-BIK7ipUj.js";import{E as C}from"./index-Bfj94Vt0.js";import{E as I}from"./index-CQNAlFu8.js";import{f as N}from"./index-CvnddM-F.js";const J=y({__name:"Login",setup(q){const g=V(),m=f();let t=f(!1);const o=c({username:"admin",password:"admin123"}),w=c({username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}),p=i=>{i&&(t.value=!0,i.validate(async e=>{if(e){let s=Object.assign({},o);s.password=await S(s.password),F(s).then(async r=>{if(r.code===200){const d=r.data;x().login(d),await M().then(u=>{u.code===200&&h().SAVE_MENUS(u.data)}),C({type:"success",message:"登录成功"}),g.push("/")}else t.value=!1})}else t.value=!1,console.log("失败!")}))};return(i,e)=>{const s=I,r=B,d=N,u=U;return b(),E(u,{ref_key:"ruleFormRef",ref:m,model:o,rules:w,size:"large",class:"w-full",onKeydown:e[3]||(e[3]=v(l=>p(m.value),["enter"]))},{default:n(()=>[a(r,{prop:"username"},{default:n(()=>[a(s,{modelValue:o.username,"onUpdate:modelValue":e[0]||(e[0]=l=>o.username=l),placeholder:"用户名","prefix-icon":"user"},null,8,["modelValue"])]),_:1}),a(r,{prop:"password"},{default:n(()=>[a(s,{modelValue:o.password,"onUpdate:modelValue":e[1]||(e[1]=l=>o.password=l),type:"password",placeholder:"密码","prefix-icon":"lock","show-password":""},null,8,["modelValue"])]),_:1}),a(r,null,{default:n(()=>[a(d,{class:"w-full",type:"primary",loading:_(t),disabled:_(t),onClick:e[2]||(e[2]=l=>p(m.value))},{default:n(()=>[k(" 登录 ")]),_:1},8,["loading","disabled"])]),_:1})]),_:1},8,["model","rules"])}}});export{J as _};