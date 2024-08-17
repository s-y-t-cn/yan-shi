import{b as E,aY as w,a4 as N,aJ as z,b8 as h,r as V,j as W,y as f,bB as P,B as F,d as B,a as _,c as I,e as k,k as y,F as D,bC as U,g as e,ai as A,n as v,H as S,f as C,ac as L,t as T,_ as G,U as x,z as Y,o as Q,p as X,a2 as Z,bD as ee,N as ae,s as oe,v as K}from"./index-B_ZJlzGL.js";import{U as $,C as le,u as se}from"./index-BBE6lv8d.js";import{a as te,d as ne,u as re,c as ie,e as de}from"./index-BU1K9O-H.js";import{d as ue}from"./error-BJ0obFE8.js";const M=E({modelValue:{type:[String,Number,Boolean],default:void 0},size:w,disabled:Boolean,label:{type:[String,Number,Boolean],default:void 0},value:{type:[String,Number,Boolean],default:void 0},name:{type:String,default:void 0}}),pe=E({...M,border:Boolean}),j={[$]:o=>N(o)||z(o)||h(o),[le]:o=>N(o)||z(o)||h(o)},H=Symbol("radioGroupKey"),q=(o,m)=>{const s=V(),a=W(H,void 0),u=f(()=>!!a),c=f(()=>P(o.value)?o.label:o.value),i=f({get(){return u.value?a.modelValue:o.modelValue},set(t){u.value?a.changeEvent(t):m&&m($,t),s.value.checked=o.modelValue===c.value}}),p=te(f(()=>a==null?void 0:a.size)),l=ne(f(()=>a==null?void 0:a.disabled)),d=V(!1),b=f(()=>l.value||u.value&&i.value!==c.value?-1:0);return F({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-radio",ref:"https://element-plus.org/en-US/component/radio.html"},f(()=>u.value&&P(o.value))),{radioRef:s,isGroup:u,radioGroup:a,focus:d,size:p,disabled:l,tabIndex:b,modelValue:i,actualValue:c}},me=["value","name","disabled"],ce=B({name:"ElRadio"}),fe=B({...ce,props:pe,emits:j,setup(o,{emit:m}){const s=o,a=_("radio"),{radioRef:u,radioGroup:c,focus:i,size:p,disabled:l,modelValue:d,actualValue:b}=q(s,m);function t(){x(()=>m("change",d.value))}return(n,r)=>{var g;return I(),k("label",{class:v([e(a).b(),e(a).is("disabled",e(l)),e(a).is("focus",e(i)),e(a).is("bordered",n.border),e(a).is("checked",e(d)===e(b)),e(a).m(e(p))])},[y("span",{class:v([e(a).e("input"),e(a).is("disabled",e(l)),e(a).is("checked",e(d)===e(b))])},[D(y("input",{ref_key:"radioRef",ref:u,"onUpdate:modelValue":r[0]||(r[0]=R=>A(d)?d.value=R:null),class:v(e(a).e("original")),value:e(b),name:n.name||((g=e(c))==null?void 0:g.name),disabled:e(l),type:"radio",onFocus:r[1]||(r[1]=R=>i.value=!0),onBlur:r[2]||(r[2]=R=>i.value=!1),onChange:t,onClick:r[3]||(r[3]=S(()=>{},["stop"]))},null,42,me),[[U,e(d)]]),y("span",{class:v(e(a).e("inner"))},null,2)],2),y("span",{class:v(e(a).e("label")),onKeydown:r[4]||(r[4]=S(()=>{},["stop"]))},[C(n.$slots,"default",{},()=>[L(T(n.label),1)])],34)],2)}}});var be=G(fe,[["__file","radio.vue"]]);const ve=E({...M}),ge=["value","name","disabled"],ye=B({name:"ElRadioButton"}),Be=B({...ye,props:ve,setup(o){const m=o,s=_("radio"),{radioRef:a,focus:u,size:c,disabled:i,modelValue:p,radioGroup:l,actualValue:d}=q(m),b=f(()=>({backgroundColor:(l==null?void 0:l.fill)||"",borderColor:(l==null?void 0:l.fill)||"",boxShadow:l!=null&&l.fill?`-1px 0 0 0 ${l.fill}`:"",color:(l==null?void 0:l.textColor)||""}));return(t,n)=>{var r;return I(),k("label",{class:v([e(s).b("button"),e(s).is("active",e(p)===e(d)),e(s).is("disabled",e(i)),e(s).is("focus",e(u)),e(s).bm("button",e(c))])},[D(y("input",{ref_key:"radioRef",ref:a,"onUpdate:modelValue":n[0]||(n[0]=g=>A(p)?p.value=g:null),class:v(e(s).be("button","original-radio")),value:e(d),type:"radio",name:t.name||((r=e(l))==null?void 0:r.name),disabled:e(i),onFocus:n[1]||(n[1]=g=>u.value=!0),onBlur:n[2]||(n[2]=g=>u.value=!1),onClick:n[3]||(n[3]=S(()=>{},["stop"]))},null,42,ge),[[U,e(p)]]),y("span",{class:v(e(s).be("button","inner")),style:Y(e(p)===e(d)?e(b):{}),onKeydown:n[4]||(n[4]=S(()=>{},["stop"]))},[C(t.$slots,"default",{},()=>[L(T(t.label),1)])],38)],2)}}});var J=G(Be,[["__file","radio-button.vue"]]);const Se=E({id:{type:String,default:void 0},size:w,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:void 0},fill:{type:String,default:""},label:{type:String,default:void 0},textColor:{type:String,default:""},name:{type:String,default:void 0},validateEvent:{type:Boolean,default:!0},...se(["ariaLabel"])}),Ee=j,Re=["id","aria-label","aria-labelledby"],Ve=B({name:"ElRadioGroup"}),_e=B({...Ve,props:Se,emits:Ee,setup(o,{emit:m}){const s=o,a=_("radio"),u=re(),c=V(),{formItem:i}=ie(),{inputId:p,isLabeledByFormItem:l}=de(s,{formItemContext:i}),d=t=>{m($,t),x(()=>m("change",t))};Q(()=>{const t=c.value.querySelectorAll("[type=radio]"),n=t[0];!Array.from(t).some(r=>r.checked)&&n&&(n.tabIndex=0)});const b=f(()=>s.name||u.value);return X(H,Z({...ee(s),changeEvent:d,name:b})),ae(()=>s.modelValue,()=>{s.validateEvent&&(i==null||i.validate("change").catch(t=>ue()))}),F({from:"label",replacement:"aria-label",version:"2.8.0",scope:"el-radio-group",ref:"https://element-plus.org/en-US/component/radio.html"},f(()=>!!s.label)),(t,n)=>(I(),k("div",{id:e(p),ref_key:"radioGroupRef",ref:c,class:v(e(a).b("group")),role:"radiogroup","aria-label":e(l)?void 0:t.label||t.ariaLabel||"radio-group","aria-labelledby":e(l)?e(i).labelId:void 0},[C(t.$slots,"default")],10,Re))}});var O=G(_e,[["__file","radio-group.vue"]]);const $e=oe(be,{RadioButton:J,RadioGroup:O}),Ne=K(O),ze=K(J);export{Ne as E,$e as a,ze as b};
