import{d as g,an as n,L as l,c as v,l as h,m as x,R as y,af as B,r as c,e as E,B as p,w as u,k as P,g as w,aa as f}from"./index-C_YbkAKH.js";/* empty css                  *//* empty css               */import{f as R,p as C,s as _,c as d}from"./animation-CC0oKNmc.js";import"./el-checkbox-DwSOVDsD.js";import"./el-tooltip-BGUaIBXT.js";/* empty css                  */import{E as N}from"./index-OCjV84rr.js";import{E as S}from"./index-CYVqnvBV.js";import"./index-Dli7m8L2.js";import"./error-CFjebLo2.js";import"./index-QOiVHojV.js";import"./index-C80su9L9.js";import"./castArray-BwAyCKJR.js";import"./index-D-HAntrQ.js";import"./index-CQmBfNNm.js";import"./index-D45OfRCt.js";import"./_commonjsHelpers-BosuxZz1.js";import"./isEqual-DES_174l.js";import"./_Uint8Array-C9MzUpgi.js";import"./index-DpyZ8oX3.js";import"./dropdown-BksKEGBk.js";import"./index-BV-9CdJ5.js";import"./_baseClone-Db7f7j1K.js";import"./_initCloneObject-M_4hFXiS.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-C-tkWcZx.js";import"./index-CGbxOCo2.js";import"./scroll-Dus-sPqQ.js";import"./index-B5pbrM4j.js";import"./vnode-BZ06fKRf.js";import"./index-DS4oIYo5.js";import"./_baseIteratee-BtXxQYdh.js";import"./index-BfPsAHeW.js";import"./index-BIUzkfTY.js";import"./index-DxTPNjXx.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const T=g({__name:"PageRouterView",props:["routes"],setup(i){const s=i,o=n([]),a=n(),m=r=>{var t;const e=(t=o.value)==null?void 0:t.find(k=>k.props.name==r);e&&(a.value=e)};return l(()=>s.routes,r=>{typeof r=="string"?o.value=R(r):o.value=r,y(()=>{var e,t;return C((t=(e=o.value)==null?void 0:e.at(0))==null?void 0:t.props.name)})},{immediate:!0}),l(_,()=>{m(_.value.at(-1))},{deep:!0}),(r,e)=>{var t;return v(),h(x((t=a.value)==null?void 0:t.component))}}}),_t=g({__name:"index",setup(i){d.baseUrl="http://localhost:8080",d.token=B().token;const s=c(localStorage.getItem("SytPageEditorAllPages")),o=c(),a=()=>{o.value.requestFullscreen()};return(m,r)=>{const e=N,t=S;return v(),E("div",null,[p(e,{type:"info",effect:"dark"},{default:u(()=>[f("由低代码页面编辑器生成")]),_:1}),p(t,{type:"primary",size:"small",onClick:a},{default:u(()=>[f("全屏")]),_:1}),P("div",{ref_key:"viewRef",ref:o},[p(w(T),{routes:s.value},null,8,["routes"])],512)])}}});export{_t as default};