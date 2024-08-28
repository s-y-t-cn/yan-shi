import{d as s,a as d,c as i,l as n,w as l,f as r,F as g,ca as p,g as f,T as m,_ as y,s as c}from"./index-g37XHkO7.js";const h=s({name:"ElCollapseTransition"}),v=s({...h,setup(H){const e=d("collapse-transition"),a=t=>{t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom},o={beforeEnter(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.height&&(t.dataset.elExistsHeight=t.style.height),t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0},enter(t){requestAnimationFrame(()=>{t.dataset.oldOverflow=t.style.overflow,t.dataset.elExistsHeight?t.style.maxHeight=t.dataset.elExistsHeight:t.scrollHeight!==0?t.style.maxHeight=`${t.scrollHeight}px`:t.style.maxHeight=0,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom,t.style.overflow="hidden"})},afterEnter(t){t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow},enterCancelled(t){a(t)},beforeLeave(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.maxHeight=`${t.scrollHeight}px`,t.style.overflow="hidden"},leave(t){t.scrollHeight!==0&&(t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0)},afterLeave(t){a(t)},leaveCancelled(t){a(t)}};return(t,T)=>(i(),n(m,g({name:f(e).b()},p(o)),{default:l(()=>[r(t.$slots,"default")]),_:3},16,["name"]))}});var x=y(v,[["__file","collapse-transition.vue"]]);const w=c(x);export{w as E};