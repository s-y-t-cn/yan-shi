import{I as g,m as l,J as u,K as d}from"./index-2793a848.js";const f=`-----BEGIN PRIVATE KEY-----
MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBANwbf+S+I1i54rTY
e67X/Lu4Z/kMbgKGuGqRt8CrM/l9pCApwFl5FGSBeuDpBP26zEKkGka+TF+pVHfh
DtTmpgVjznI5sANKSXa23vuD14yJWUvmgpgAg+XNDOKR78wPouucQc7KnQiurxCh
nmB2elDfInZZ0iPBtAvM+sW08UDVAgMBAAECgYAUxAdp5kJhcZAg7belhD0U3M36
YiDS3jDx5POIGt7Zb/AXFLlP96tj3A9ivrk40vHIa8EK4ZNFBy2v7ay/i08oUDTO
r0Lo1YSmc9G+nmIiPvFLQAWIzKpjn8zpBsBYKsBSyAjq8vrAa4r9KTalF5ruNgEx
WXXC8bqegYyWW0UnwQJBAPU27hTLHB8CGi7zyayS6jTjdakenUXsbrYoBiK0bvB5
6QnFg0A2cXCu6HUTKcDx/7DENgWbjw4SKcPGi1mICgUCQQDlyd4nOsVIcsuZF9nv
arMYZwGeM6CLAsWf6ylgeg107b00t+A54fUs4kaOWQUDnoRmfr0X14A6Vk+ql6R7
JYSRAkBBmCcJwudL2Cke5DHPiyFBcpMX4Uua18spyP0TLYb7pvDSn1YjyCyCQxeF
sdGafmGybFozF9Clp/AqIaNHGN/tAkEAxZu3DtdspuQJkItBYLHKeHbEnm7ZZhIp
L2BFAfGUNvTn3Dkwe7aEaGfiszF8rWMZiyb8qE8rt39YHWUxDrHx8QJAPhkcNM37
7QqykmeDh+t6jH9tzFfpZw2qRdjUEld26bx+BUwHxqukq6edLfZ6uf5U9dmOfCvP
EEQY/tHQcYcitg==
-----END PRIVATE KEY-----`,p=s=>{const o=new g.KJUR.crypto.Signature({alg:"MD5withRSA"});return o.init(f),o.updateString(s),g.hextob64(o.sign())};async function b({url:s,method:o,header:r,data:i}){const e={method:o??"GET",mode:"cors",credentials:"same-origin"},A=/^http/;r?e.headers=r:i instanceof FormData?e.body=i:(e.headers={"Content-Type":"application/json"},e.body=JSON.stringify(i));const c={"body-string":e.method=="POST"&&i?encodeURIComponent(JSON.stringify(i)):"","query-string":e.method=="GET"&&s.includes("?")?s.slice(s.indexOf("?")+1):"","x-nonce":`${Math.floor(Math.random()*1e7)}`,"x-timestamp":`${new Date().getTime()}`};Object.assign(e.headers,c),e.headers.authorization=`${l().token}`,e.headers.sign=p(JSON.stringify(c));const n=await fetch(A.test(s)?s:u.baseUrl+s,e);if(!n.ok){switch(n.status){case 500:console.log("服务器系统内部错误");break;case 401:console.log("请登录"),d.push("/login");break;case 403:console.log("无权限执行此操作");break;case 408:console.log("请求超时");break;case 404:console.log("地址错误");break;default:console.log("未知错误")}return n.json()}if(n.status==204)return{code:204,message:"无内容"};const t=n.headers.get("Content-Type");let a;return t!=null&&t.includes("application/json")?a=await n.json():t!=null&&t.includes("text/html")?a=await n.text():a=await n.blob(),a}export{b as r};
