import{d as y,r as f,a2 as c,l as E,w as n,aJ as b,ag as v,c as V,D as r,g as _,ac as x,ah as F,ao as h,bJ as k,al as S}from"./index-Bsn8uhFR.js";/* empty css                     *//* empty css                  *//* empty css                 */import{l as M}from"./auth-Dveg0dFo.js";import{u as R}from"./menus-BQUNy1JH.js";import{h as U}from"./index-DIjjrsno.js";import{a as B,E as C}from"./index-WB42fc2K.js";import{E as N}from"./index-f9LhncNo.js";import{E as q}from"./index-NV_0FHae.js";const G=y({__name:"Login",setup(I){const g=v(),m=f();let t=f(!1);const s=c({username:"admin",password:"admin123"}),w=c({username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}),p=i=>{i&&(t.value=!0,i.validate(async e=>{if(e){let o=Object.assign({},s);o.password=await U(o.password),M(o).then(async a=>{if(a.code===200){const d=a.data;F().login(d),await h().initRoles(),await k().then(u=>{u.code===200&&R().SAVE_MENUS(u.data)}),S({type:"success",message:"登录成功"}),g.push("/")}else t.value=!1})}else t.value=!1,console.log("失败!")}))};return(i,e)=>{const o=N,a=C,d=q,u=B;return V(),E(u,{ref_key:"ruleFormRef",ref:m,model:s,rules:w,size:"large",class:"w-full",onKeydown:e[3]||(e[3]=b(l=>p(m.value),["enter"]))},{default:n(()=>[r(a,{prop:"username"},{default:n(()=>[r(o,{modelValue:s.username,"onUpdate:modelValue":e[0]||(e[0]=l=>s.username=l),placeholder:"用户名","prefix-icon":"user"},null,8,["modelValue"])]),_:1}),r(a,{prop:"password"},{default:n(()=>[r(o,{modelValue:s.password,"onUpdate:modelValue":e[1]||(e[1]=l=>s.password=l),type:"password",placeholder:"密码","prefix-icon":"lock","show-password":""},null,8,["modelValue"])]),_:1}),r(a,null,{default:n(()=>[r(d,{class:"w-full",type:"primary",loading:_(t),disabled:_(t),onClick:e[2]||(e[2]=l=>p(m.value))},{default:n(()=>[x(" 登录 ")]),_:1},8,["loading","disabled"])]),_:1})]),_:1},8,["model","rules"])}}});export{G as _};