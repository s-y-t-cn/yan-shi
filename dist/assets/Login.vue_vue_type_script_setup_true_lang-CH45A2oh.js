import{d as y,r as f,a0 as c,l as E,w as n,aV as V,ae as b,c as v,B as r,g as _,aa as x,af as F,am as k,bT as S,aj as h}from"./index-BJnXyKVp.js";/* empty css                     *//* empty css                  *//* empty css                 */import{l as B}from"./auth-Ch5KONFg.js";import{u as M}from"./menus-Dy1wEj9W.js";import{h as R}from"./index-DIjjrsno.js";import{a as U,E as C}from"./index-ICkUlJyf.js";import{E as N}from"./index-XTd2ODOz.js";import{E as j}from"./index-BiJnfdqe.js";const H=y({__name:"Login",setup(q){const w=b(),m=f();let t=f(!1);const s=c({username:"admin",password:"admin123"}),g=c({username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}),p=i=>{i&&(t.value=!0,i.validate(async e=>{if(e){let a=Object.assign({},s);a.password=await R(a.password),B(a).then(async o=>{if(o.code===200){const d=o.data;F().login(d),await k().initRoles(),await S().then(u=>{u.code===200&&M().SAVE_MENUS(u.data)}),h({type:"success",message:"登录成功"}),w.push("/")}else t.value=!1})}else t.value=!1,console.log("失败!")}))};return(i,e)=>{const a=N,o=C,d=j,u=U;return v(),E(u,{ref_key:"ruleFormRef",ref:m,model:s,rules:g,size:"large",class:"w-full",onKeydown:e[3]||(e[3]=V(l=>p(m.value),["enter"]))},{default:n(()=>[r(o,{prop:"username"},{default:n(()=>[r(a,{modelValue:s.username,"onUpdate:modelValue":e[0]||(e[0]=l=>s.username=l),placeholder:"用户名","prefix-icon":"user"},null,8,["modelValue"])]),_:1}),r(o,{prop:"password"},{default:n(()=>[r(a,{modelValue:s.password,"onUpdate:modelValue":e[1]||(e[1]=l=>s.password=l),type:"password",placeholder:"密码","prefix-icon":"lock","show-password":""},null,8,["modelValue"])]),_:1}),r(o,null,{default:n(()=>[r(d,{class:"w-full",type:"primary",loading:_(t),disabled:_(t),onClick:e[2]||(e[2]=l=>p(m.value))},{default:n(()=>[x(" 登录 ")]),_:1},8,["loading","disabled"])]),_:1})]),_:1},8,["model","rules"])}}});export{H as _};
