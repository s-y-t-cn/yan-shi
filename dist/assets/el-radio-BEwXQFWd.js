import{v as c}from"./index-3lwVo2y0.js";const u=function(t,e,...i){let n;e.includes("mouse")||e.includes("click")?n="MouseEvents":e.includes("key")?n="KeyboardEvent":n="HTMLEvents";const o=document.createEvent(n);return o.initEvent(e,...i),t.dispatchEvent(o),t},l=t=>!t.getAttribute("aria-owns"),a=(t,e,i)=>{const{parentNode:n}=t;if(!n)return null;const o=n.querySelectorAll(i),s=Array.prototype.indexOf.call(o,t);return o[s+e]||null},f=t=>{t&&(t.focus(),!l(t)&&t.click())},d=(t,e)=>{if(!c||!t||!e)return!1;const i=t.getBoundingClientRect();let n;return e instanceof Element?n=e.getBoundingClientRect():n={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},i.top<n.bottom&&i.bottom>n.top&&i.right>n.left&&i.left<n.right},g=t=>{let e,i;return t.type==="touchend"?(i=t.changedTouches[0].clientY,e=t.changedTouches[0].clientX):t.type.startsWith("touch")?(i=t.touches[0].clientY,e=t.touches[0].clientX):(i=t.clientY,e=t.clientX),{clientX:e,clientY:i}};export{a,d as b,f,g,l as i,u as t};