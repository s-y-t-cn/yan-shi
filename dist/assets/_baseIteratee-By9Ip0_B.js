import{S as h,k as l}from"./_Uint8Array-DJuCLRja.js";import{b as c}from"./isEqual-DgoZLpwi.js";import{aP as O,cE as A,cF as m,ck as y,cG as M,cw as _}from"./index-BJnXyKVp.js";import{h as g,i as C}from"./index-XTd2ODOz.js";var G=1,I=2;function L(n,r,e,t){var i=e.length,u=i;if(n==null)return!u;for(n=Object(n);i--;){var f=e[i];if(f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++i<u;){f=e[i];var s=f[0],o=n[s],P=f[1];if(f[2]){if(o===void 0&&!(s in n))return!1}else{var R=new h,a;if(!(a===void 0?c(P,o,G|I,t,R):a))return!1}}return!0}function p(n){return n===n&&!O(n)}function d(n){for(var r=l(n),e=r.length;e--;){var t=r[e],i=n[t];r[e]=[t,i,p(i)]}return r}function E(n,r){return function(e){return e==null?!1:e[n]===r&&(r!==void 0||n in Object(e))}}function w(n){var r=d(n);return r.length==1&&r[0][2]?E(r[0][0],r[0][1]):function(e){return e===n||L(e,n,r)}}var D=1,F=2;function b(n,r){return A(n)&&p(r)?E(m(n),r):function(e){var t=y(e,n);return t===void 0&&t===r?g(e,n):c(r,t,D|F)}}function S(n){return function(r){return r==null?void 0:r[n]}}function x(n){return function(r){return M(r,n)}}function K(n){return A(n)?S(m(n)):x(n)}function k(n){return typeof n=="function"?n:n==null?C:typeof n=="object"?_(n)?b(n[0],n[1]):w(n):K(n)}export{k as b};
