/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ba="152",ii={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ri={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ru=0,uo=1,su=2,rc=1,au=2,mn=3,_n=0,Tt=1,kt=2,Rn=0,Ui=1,ho=2,fo=3,po=4,ou=5,wi=100,lu=101,cu=102,mo=103,go=104,uu=200,hu=201,fu=202,du=203,sc=204,ac=205,pu=206,mu=207,gu=208,vu=209,_u=210,xu=0,yu=1,Mu=2,Ma=3,Su=4,Eu=5,bu=6,Tu=7,ka=0,wu=1,Au=2,gn=0,Ru=1,Cu=2,Lu=3,Pu=4,Uu=5,oc=300,Ni=301,Oi=302,Sa=303,Ea=304,ds=306,ba=1e3,Zt=1001,Ta=1002,bt=1003,vo=1004,Ds=1005,Lt=1006,Du=1007,dr=1008,Wn=1009,Iu=1010,Fu=1011,lc=1012,Nu=1013,Bn=1014,kn=1015,pr=1016,Ou=1017,Bu=1018,Di=1020,ku=1021,Kt=1023,zu=1024,Gu=1025,zn=1026,Bi=1027,Hu=1028,Vu=1029,Wu=1030,Xu=1031,ju=1033,Is=33776,Fs=33777,Ns=33778,Os=33779,_o=35840,xo=35841,yo=35842,Mo=35843,Yu=36196,So=37492,Eo=37496,bo=37808,To=37809,wo=37810,Ao=37811,Ro=37812,Co=37813,Lo=37814,Po=37815,Uo=37816,Do=37817,Io=37818,Fo=37819,No=37820,Oo=37821,Bs=36492,qu=36283,Bo=36284,ko=36285,zo=36286,cc=3e3,Gn=3001,Zu=3200,uc=3201,za=0,Ku=1,Hn="",Xe="srgb",an="srgb-linear",hc="display-p3",ks=7680,Ju=519,wa=35044,Go="300 es",Aa=1035;class Cn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zs=Math.PI/180,Ra=180/Math.PI;function vn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xt[s&255]+xt[s>>8&255]+xt[s>>16&255]+xt[s>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]).toLowerCase()}function _t(s,e,t){return Math.max(e,Math.min(t,s))}function Qu(s,e){return(s%e+e)%e}function Gs(s,e,t){return(1-t)*s+t*e}function Ho(s){return(s&s-1)===0&&s!==0}function $u(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function An(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function nt(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*n+e.x,this.y=r*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,n,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=n,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],v=n[0],m=n[3],p=n[6],S=n[1],_=n[4],M=n[7],y=n[2],A=n[5],R=n[8];return r[0]=a*v+o*S+c*y,r[3]=a*m+o*_+c*A,r[6]=a*p+o*M+c*R,r[1]=l*v+u*S+h*y,r[4]=l*m+u*_+h*A,r[7]=l*p+u*M+h*R,r[2]=f*v+d*S+g*y,r[5]=f*m+d*_+g*A,r[8]=f*p+d*M+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*r*u+i*o*c+n*r*l-n*a*c}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*r,d=l*r-a*c,g=t*h+i*f+n*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(n*l-u*i)*v,e[2]=(o*i-n*a)*v,e[3]=f*v,e[4]=(u*t-n*c)*v,e[5]=(n*r-o*t)*v,e[6]=d*v,e[7]=(i*c-l*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-n*l,n*c,-n*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Hs.makeScale(e,t)),this}rotate(e){return this.premultiply(Hs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hs.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hs=new Je;function fc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function mr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const Vo={};function lr(s){s in Vo||(Vo[s]=!0,console.warn(s))}function Ii(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Vs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const eh=new Je().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),th=new Je().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function nh(s){return s.convertSRGBToLinear().applyMatrix3(th)}function ih(s){return s.applyMatrix3(eh).convertLinearToSRGB()}const rh={[an]:s=>s,[Xe]:s=>s.convertSRGBToLinear(),[hc]:nh},sh={[an]:s=>s,[Xe]:s=>s.convertLinearToSRGB(),[hc]:ih},Xt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return an},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const i=rh[e],n=sh[t];if(i===void 0||n===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return n(i(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let si;class dc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{si===void 0&&(si=mr("canvas")),si.width=e.width,si.height=e.height;const i=si.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=si}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=mr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=Ii(r[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ii(t[i]/255)*255):t[i]=Ii(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class pc{constructor(e=null){this.isSource=!0,this.uuid=vn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(Ws(n[a].image)):r.push(Ws(n[a]))}else r=Ws(n);i.url=r}return t||(e.images[this.uuid]=i),i}}function Ws(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?dc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ah=0;class wt extends Cn{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,i=Zt,n=Zt,r=Lt,a=dr,o=Kt,c=Wn,l=wt.DEFAULT_ANISOTROPY,u=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=vn(),this.name="",this.source=new pc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(lr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Gn?Xe:Hn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ba:e.x=e.x-Math.floor(e.x);break;case Zt:e.x=e.x<0?0:1;break;case Ta:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ba:e.y=e.y-Math.floor(e.y);break;case Zt:e.y=e.y<0?0:1;break;case Ta:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return lr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Xe?Gn:cc}set encoding(e){lr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Gn?Xe:Hn}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=oc;wt.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,i=0,n=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,M=(d+1)/2,y=(p+1)/2,A=(u+f)/4,R=(h+v)/4,I=(g+m)/4;return _>M&&_>y?_<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(_),n=A/i,r=R/i):M>y?M<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(M),i=A/n,r=I/n):y<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(y),i=R/r,n=I/r),this.set(i,n,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-v)/S,this.z=(f-u)/S,this.w=Math.acos((l+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xn extends Cn{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const n={width:e,height:t,depth:1};i.encoding!==void 0&&(lr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Gn?Xe:Hn),this.texture=new wt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Lt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new pc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mc extends wt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=bt,this.minFilter=bt,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oh extends wt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=bt,this.minFilter=bt,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jn{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,a,o){let c=i[n+0],l=i[n+1],u=i[n+2],h=i[n+3];const f=r[a+0],d=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(h!==v||c!==f||l!==d||u!==g){let m=1-o;const p=c*f+l*d+u*g+h*v,S=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const y=Math.sqrt(_),A=Math.atan2(y,p*S);m=Math.sin(m*A)/y,o=Math.sin(o*A)/y}const M=o*S;if(c=c*m+f*M,l=l*m+d*M,u=u*m+g*M,h=h*m+v*M,m===1-o){const y=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=y,l*=y,u*=y,h*=y}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,n,r,a){const o=i[n],c=i[n+1],l=i[n+2],u=i[n+3],h=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+u*h+c*d-l*f,e[t+1]=c*g+u*f+l*h-o*d,e[t+2]=l*g+u*d+o*f-c*h,e[t+3]=u*g-o*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,n=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(n/2),h=o(r/2),f=c(i/2),d=c(n/2),g=c(r/2);switch(a){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=i+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(a-n)*d}else if(i>o&&i>h){const d=2*Math.sqrt(1+i-o-h);this._w=(u-c)/d,this._x=.25*d,this._y=(n+a)/d,this._z=(r+l)/d}else if(o>h){const d=2*Math.sqrt(1+o-i-h);this._w=(r-l)/d,this._x=(n+a)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-i-o);this._w=(a-n)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+n*l-r*c,this._y=n*u+a*c+r*o-i*l,this._z=r*u+a*l+i*c-n*o,this._w=a*u-i*o-n*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+n*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*n+t*this._y,this._z=d*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=n*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(r),i*Math.cos(r),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=c*t+a*n-o*i,u=c*i+o*t-r*n,h=c*n+r*i-a*t,f=-r*t-a*i-o*n;return this.x=l*c+f*-r+u*-o-h*-a,this.y=u*c+f*-a+h*-r-l*-o,this.z=h*c+f*-o+l*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=n*c-r*o,this.y=r*a-i*c,this.z=i*o-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xs.copy(this).projectOnVector(e),this.sub(Xs)}reflect(e){return this.sub(Xs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xs=new V,Wo=new jn;class Zn{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ai.copy(e.boundingBox),ai.applyMatrix4(e.matrixWorld),this.union(ai);else{const n=e.geometry;if(n!==void 0)if(t&&n.attributes!==void 0&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,o=r.count;a<o;a++)cn.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(cn)}else n.boundingBox===null&&n.computeBoundingBox(),ai.copy(n.boundingBox),ai.applyMatrix4(e.matrixWorld),this.union(ai)}const i=e.children;for(let n=0,r=i.length;n<r;n++)this.expandByObject(i[n],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qi),Rr.subVectors(this.max,Qi),oi.subVectors(e.a,Qi),li.subVectors(e.b,Qi),ci.subVectors(e.c,Qi),En.subVectors(li,oi),bn.subVectors(ci,li),Pn.subVectors(oi,ci);let t=[0,-En.z,En.y,0,-bn.z,bn.y,0,-Pn.z,Pn.y,En.z,0,-En.x,bn.z,0,-bn.x,Pn.z,0,-Pn.x,-En.y,En.x,0,-bn.y,bn.x,0,-Pn.y,Pn.x,0];return!js(t,oi,li,ci,Rr)||(t=[1,0,0,0,1,0,0,0,1],!js(t,oi,li,ci,Rr))?!1:(Cr.crossVectors(En,bn),t=[Cr.x,Cr.y,Cr.z],js(t,oi,li,ci,Rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ln=[new V,new V,new V,new V,new V,new V,new V,new V],cn=new V,ai=new Zn,oi=new V,li=new V,ci=new V,En=new V,bn=new V,Pn=new V,Qi=new V,Rr=new V,Cr=new V,Un=new V;function js(s,e,t,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){Un.fromArray(s,r);const o=n.x*Math.abs(Un.x)+n.y*Math.abs(Un.y)+n.z*Math.abs(Un.z),c=e.dot(Un),l=t.dot(Un),u=i.dot(Un);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const lh=new Zn,$i=new V,Ys=new V;class zi{constructor(e=new V,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):lh.setFromPoints(e).getCenter(i);let n=0;for(let r=0,a=e.length;r<a;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$i.subVectors(e,this.center);const t=$i.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector($i,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ys.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($i.copy(e.center).add(Ys)),this.expandByPoint($i.copy(e.center).sub(Ys))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const un=new V,qs=new V,Lr=new V,Tn=new V,Zs=new V,Pr=new V,Ks=new V;class Ga{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.origin).addScaledVector(this.direction,t),un.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){qs.copy(e).add(t).multiplyScalar(.5),Lr.copy(t).sub(e).normalize(),Tn.copy(this.origin).sub(qs);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Lr),o=Tn.dot(this.direction),c=-Tn.dot(Lr),l=Tn.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*c-o,f=a*o-c,g=r*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,d=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(qs).addScaledVector(Lr,f),d}intersectSphere(e,t){un.subVectors(e.center,this.origin);const i=un.dot(this.direction),n=un.dot(un)-i*i,r=e.radius*e.radius;if(n>r)return null;const a=Math.sqrt(r-n),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,n=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,n=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),i>c||o>n)||((o>i||i!==i)&&(i=o),(c<n||n!==n)&&(n=c),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,i,n,r){Zs.subVectors(t,e),Pr.subVectors(i,e),Ks.crossVectors(Zs,Pr);let a=this.direction.dot(Ks),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Tn.subVectors(this.origin,e);const c=o*this.direction.dot(Pr.crossVectors(Tn,Pr));if(c<0)return null;const l=o*this.direction.dot(Zs.cross(Tn));if(l<0||c+l>a)return null;const u=-o*Tn.dot(Ks);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,n,r,a,o,c,l,u,h,f,d,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/ui.setFromMatrixColumn(e,0).length(),r=1/ui.setFromMatrixColumn(e,1).length(),a=1/ui.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(n),l=Math.sin(n),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,d=a*h,g=o*u,v=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+g*l,t[5]=f-v*l,t[9]=-o*c,t[2]=v-f*l,t[6]=g+d*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,g=l*u,v=l*h;t[0]=f+v*o,t[4]=g*o-d,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=v+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,g=l*u,v=l*h;t[0]=f-v*o,t[4]=-a*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,d=a*h,g=o*u,v=o*h;t[0]=c*u,t[4]=g*l-d,t[8]=f*l+v,t[1]=c*h,t[5]=v*l+f,t[9]=d*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,d=a*l,g=o*c,v=o*l;t[0]=c*u,t[4]=v-f*h,t[8]=g*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=d*h+g,t[10]=f-v*h}else if(e.order==="XZY"){const f=a*c,d=a*l,g=o*c,v=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+v,t[5]=a*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ch,e,uh)}lookAt(e,t,i){const n=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),wn.crossVectors(i,Ut),wn.lengthSq()===0&&(Math.abs(i.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),wn.crossVectors(i,Ut)),wn.normalize(),Ur.crossVectors(Ut,wn),n[0]=wn.x,n[4]=Ur.x,n[8]=Ut.x,n[1]=wn.y,n[5]=Ur.y,n[9]=Ut.y,n[2]=wn.z,n[6]=Ur.z,n[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],v=i[6],m=i[10],p=i[14],S=i[3],_=i[7],M=i[11],y=i[15],A=n[0],R=n[4],I=n[8],x=n[12],w=n[1],Z=n[5],k=n[9],D=n[13],F=n[2],L=n[6],W=n[10],J=n[14],$=n[3],q=n[7],Y=n[11],O=n[15];return r[0]=a*A+o*w+c*F+l*$,r[4]=a*R+o*Z+c*L+l*q,r[8]=a*I+o*k+c*W+l*Y,r[12]=a*x+o*D+c*J+l*O,r[1]=u*A+h*w+f*F+d*$,r[5]=u*R+h*Z+f*L+d*q,r[9]=u*I+h*k+f*W+d*Y,r[13]=u*x+h*D+f*J+d*O,r[2]=g*A+v*w+m*F+p*$,r[6]=g*R+v*Z+m*L+p*q,r[10]=g*I+v*k+m*W+p*Y,r[14]=g*x+v*D+m*J+p*O,r[3]=S*A+_*w+M*F+y*$,r[7]=S*R+_*Z+M*L+y*q,r[11]=S*I+_*k+M*W+y*Y,r[15]=S*x+_*D+M*J+y*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*c*h-n*l*h-r*o*f+i*l*f+n*o*d-i*c*d)+v*(+t*c*d-t*l*f+r*a*f-n*a*d+n*l*u-r*c*u)+m*(+t*l*h-t*o*d-r*a*h+i*a*d+r*o*u-i*l*u)+p*(-n*o*u-t*c*h+t*o*f+n*a*h-i*a*f+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],S=h*m*l-v*f*l+v*c*d-o*m*d-h*c*p+o*f*p,_=g*f*l-u*m*l-g*c*d+a*m*d+u*c*p-a*f*p,M=u*v*l-g*h*l+g*o*d-a*v*d-u*o*p+a*h*p,y=g*h*c-u*v*c-g*o*f+a*v*f+u*o*m-a*h*m,A=t*S+i*_+n*M+r*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=S*R,e[1]=(v*f*r-h*m*r-v*n*d+i*m*d+h*n*p-i*f*p)*R,e[2]=(o*m*r-v*c*r+v*n*l-i*m*l-o*n*p+i*c*p)*R,e[3]=(h*c*r-o*f*r-h*n*l+i*f*l+o*n*d-i*c*d)*R,e[4]=_*R,e[5]=(u*m*r-g*f*r+g*n*d-t*m*d-u*n*p+t*f*p)*R,e[6]=(g*c*r-a*m*r-g*n*l+t*m*l+a*n*p-t*c*p)*R,e[7]=(a*f*r-u*c*r+u*n*l-t*f*l-a*n*d+t*c*d)*R,e[8]=M*R,e[9]=(g*h*r-u*v*r-g*i*d+t*v*d+u*i*p-t*h*p)*R,e[10]=(a*v*r-g*o*r+g*i*l-t*v*l-a*i*p+t*o*p)*R,e[11]=(u*o*r-a*h*r-u*i*l+t*h*l+a*i*d-t*o*d)*R,e[12]=y*R,e[13]=(u*v*n-g*h*n+g*i*f-t*v*f-u*i*m+t*h*m)*R,e[14]=(g*o*n-a*v*n-g*i*c+t*v*c+a*i*m-t*o*m)*R,e[15]=(a*h*n-u*o*n+u*i*c-t*h*c-a*i*f+t*o*f)*R,this}scale(e){const t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+i,l*o-n*c,l*c+n*o,0,l*o+n*c,u*o+i,u*c-n*a,0,l*c-n*o,u*c+n*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,a){return this.set(1,i,r,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,f=r*l,d=r*u,g=r*h,v=a*u,m=a*h,p=o*h,S=c*l,_=c*u,M=c*h,y=i.x,A=i.y,R=i.z;return n[0]=(1-(v+p))*y,n[1]=(d+M)*y,n[2]=(g-_)*y,n[3]=0,n[4]=(d-M)*A,n[5]=(1-(f+p))*A,n[6]=(m+S)*A,n[7]=0,n[8]=(g+_)*R,n[9]=(m-S)*R,n[10]=(1-(f+v))*R,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let r=ui.set(n[0],n[1],n[2]).length();const a=ui.set(n[4],n[5],n[6]).length(),o=ui.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),e.x=n[12],e.y=n[13],e.z=n[14],jt.copy(this);const l=1/r,u=1/a,h=1/o;return jt.elements[0]*=l,jt.elements[1]*=l,jt.elements[2]*=l,jt.elements[4]*=u,jt.elements[5]*=u,jt.elements[6]*=u,jt.elements[8]*=h,jt.elements[9]*=h,jt.elements[10]*=h,t.setFromRotationMatrix(jt),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,n,r,a){const o=this.elements,c=2*r/(t-e),l=2*r/(i-n),u=(t+e)/(t-e),h=(i+n)/(i-n),f=-(a+r)/(a-r),d=-2*a*r/(a-r);return o[0]=c,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=l,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=d,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,n,r,a){const o=this.elements,c=1/(t-e),l=1/(i-n),u=1/(a-r),h=(t+e)*c,f=(i+n)*l,d=(a+r)*u;return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-d,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ui=new V,jt=new rt,ch=new V(0,0,0),uh=new V(1,1,1),wn=new V,Ur=new V,Ut=new V,Xo=new rt,jo=new jn;class ps{constructor(e=0,t=0,i=0,n=ps.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,r=n[0],a=n[4],o=n[8],c=n[1],l=n[5],u=n[9],h=n[2],f=n[6],d=n[10];switch(t){case"XYZ":this._y=Math.asin(_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(_t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Xo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xo,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jo.setFromEuler(this),this.setFromQuaternion(jo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ps.DEFAULT_ORDER="XYZ";class gc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hh=0;const Yo=new V,hi=new jn,hn=new rt,Dr=new V,er=new V,fh=new V,dh=new jn,qo=new V(1,0,0),Zo=new V(0,1,0),Ko=new V(0,0,1),ph={type:"added"},Jo={type:"removed"};class ct extends Cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();const e=new V,t=new ps,i=new jn,n=new V(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new rt},normalMatrix:{value:new Je}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new gc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.multiply(hi),this}rotateOnWorldAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.premultiply(hi),this}rotateX(e){return this.rotateOnAxis(qo,e)}rotateY(e){return this.rotateOnAxis(Zo,e)}rotateZ(e){return this.rotateOnAxis(Ko,e)}translateOnAxis(e,t){return Yo.copy(e).applyQuaternion(this.quaternion),this.position.add(Yo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qo,e)}translateY(e){return this.translateOnAxis(Zo,e)}translateZ(e){return this.translateOnAxis(Ko,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Dr.copy(e):Dr.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(er,Dr,this.up):hn.lookAt(Dr,er,this.up),this.quaternion.setFromRotationMatrix(hn),n&&(hn.extractRotation(n.matrixWorld),hi.setFromRotationMatrix(hn),this.quaternion.premultiply(hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ph)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jo)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Jo)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(hn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,e,fh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,dh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let r=0,a=n.length;r<a;r++){const o=n[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];n.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}ct.DEFAULT_UP=new V(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yt=new V,fn=new V,Js=new V,dn=new V,fi=new V,di=new V,Qo=new V,Qs=new V,$s=new V,ea=new V;let Ir=!1;class Ot{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Yt.subVectors(e,t),n.cross(Yt);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){Yt.subVectors(n,t),fn.subVectors(i,t),Js.subVectors(e,t);const a=Yt.dot(Yt),o=Yt.dot(fn),c=Yt.dot(Js),l=fn.dot(fn),u=fn.dot(Js),h=a*l-o*o;if(h===0)return r.set(-2,-1,-1);const f=1/h,d=(l*c-o*u)*f,g=(a*u-o*c)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,dn),dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getUV(e,t,i,n,r,a,o,c){return Ir===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ir=!0),this.getInterpolation(e,t,i,n,r,a,o,c)}static getInterpolation(e,t,i,n,r,a,o,c){return this.getBarycoord(e,t,i,n,dn),c.setScalar(0),c.addScaledVector(r,dn.x),c.addScaledVector(a,dn.y),c.addScaledVector(o,dn.z),c}static isFrontFacing(e,t,i,n){return Yt.subVectors(i,t),fn.subVectors(e,t),Yt.cross(fn).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),Yt.cross(fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ot.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ot.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,r){return Ir===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ir=!0),Ot.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}getInterpolation(e,t,i,n,r){return Ot.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return Ot.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ot.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,r=this.c;let a,o;fi.subVectors(n,i),di.subVectors(r,i),Qs.subVectors(e,i);const c=fi.dot(Qs),l=di.dot(Qs);if(c<=0&&l<=0)return t.copy(i);$s.subVectors(e,n);const u=fi.dot($s),h=di.dot($s);if(u>=0&&h<=u)return t.copy(n);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(fi,a);ea.subVectors(e,r);const d=fi.dot(ea),g=di.dot(ea);if(g>=0&&d<=g)return t.copy(r);const v=d*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(di,o);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Qo.subVectors(r,n),o=(h-u)/(h-u+(d-g)),t.copy(n).addScaledVector(Qo,o);const p=1/(m+v+f);return a=v*p,o=f*p,t.copy(i).addScaledVector(fi,a).addScaledVector(di,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let mh=0;class xn extends Cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=vn(),this.name="",this.type="Material",this.blending=Ui,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=sc,this.blendDst=ac,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ma,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ju,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(i.blending=this.blending),this.side!==_n&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=n(e.textures),a=n(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const vc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qt={h:0,s:0,l:0},Fr={h:0,s:0,l:0};function ta(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=Xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Xt.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=Xt.workingColorSpace){if(e=Qu(e,1),t=_t(t,0,1),i=_t(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=ta(a,r,e+1/3),this.g=ta(a,r,e),this.b=ta(a,r,e-1/3)}return Xt.toWorkingColorSpace(this,n),this}setStyle(e,t=Xe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xe){const i=vc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xe){return Xt.fromWorkingColorSpace(yt.copy(this),e),Math.round(_t(yt.r*255,0,255))*65536+Math.round(_t(yt.g*255,0,255))*256+Math.round(_t(yt.b*255,0,255))}getHexString(e=Xe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xt.workingColorSpace){Xt.fromWorkingColorSpace(yt.copy(this),t);const i=yt.r,n=yt.g,r=yt.b,a=Math.max(i,n,r),o=Math.min(i,n,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case i:c=(n-r)/h+(n<r?6:0);break;case n:c=(r-i)/h+2;break;case r:c=(i-n)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=Xe){Xt.fromWorkingColorSpace(yt.copy(this),e);const t=yt.r,i=yt.g,n=yt.b;return e!==Xe?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(qt),qt.h+=e,qt.s+=t,qt.l+=i,this.setHSL(qt.h,qt.s,qt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qt),e.getHSL(Fr);const i=Gs(qt.h,Fr.h,t),n=Gs(qt.s,Fr.s,t),r=Gs(qt.l,Fr.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new qe;qe.NAMES=vc;class gr extends xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new V,Nr=new Me;class zt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=wa,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Nr.fromBufferAttribute(this,t),Nr.applyMatrix3(e),this.setXY(t,Nr.x,Nr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=An(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=An(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=An(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=An(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),n=nt(n,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wa&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class _c extends zt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class xc extends zt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Gt extends zt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let gh=0;const Nt=new rt,na=new ct,pi=new V,Dt=new Zn,tr=new Zn,mt=new V;class ht extends Cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=vn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fc(e)?xc:_c)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nt.makeRotationFromQuaternion(e),this.applyMatrix4(Nt),this}rotateX(e){return Nt.makeRotationX(e),this.applyMatrix4(Nt),this}rotateY(e){return Nt.makeRotationY(e),this.applyMatrix4(Nt),this}rotateZ(e){return Nt.makeRotationZ(e),this.applyMatrix4(Nt),this}translate(e,t,i){return Nt.makeTranslation(e,t,i),this.applyMatrix4(Nt),this}scale(e,t,i){return Nt.makeScale(e,t,i),this.applyMatrix4(Nt),this}lookAt(e){return na.lookAt(e),na.updateMatrix(),this.applyMatrix4(na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Gt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const r=t[i];Dt.setFromBufferAttribute(r),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];tr.setFromBufferAttribute(o),this.morphTargetsRelative?(mt.addVectors(Dt.min,tr.min),Dt.expandByPoint(mt),mt.addVectors(Dt.max,tr.max),Dt.expandByPoint(mt)):(Dt.expandByPoint(tr.min),Dt.expandByPoint(tr.max))}Dt.getCenter(i);let n=0;for(let r=0,a=e.count;r<a;r++)mt.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(mt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)mt.fromBufferAttribute(o,l),c&&(pi.fromBufferAttribute(e,l),mt.add(pi)),n=Math.max(n,i.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,n=t.position.array,r=t.normal.array,a=t.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let w=0;w<o;w++)l[w]=new V,u[w]=new V;const h=new V,f=new V,d=new V,g=new Me,v=new Me,m=new Me,p=new V,S=new V;function _(w,Z,k){h.fromArray(n,w*3),f.fromArray(n,Z*3),d.fromArray(n,k*3),g.fromArray(a,w*2),v.fromArray(a,Z*2),m.fromArray(a,k*2),f.sub(h),d.sub(h),v.sub(g),m.sub(g);const D=1/(v.x*m.y-m.x*v.y);isFinite(D)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-v.y).multiplyScalar(D),S.copy(d).multiplyScalar(v.x).addScaledVector(f,-m.x).multiplyScalar(D),l[w].add(p),l[Z].add(p),l[k].add(p),u[w].add(S),u[Z].add(S),u[k].add(S))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let w=0,Z=M.length;w<Z;++w){const k=M[w],D=k.start,F=k.count;for(let L=D,W=D+F;L<W;L+=3)_(i[L+0],i[L+1],i[L+2])}const y=new V,A=new V,R=new V,I=new V;function x(w){R.fromArray(r,w*3),I.copy(R);const Z=l[w];y.copy(Z),y.sub(R.multiplyScalar(R.dot(Z))).normalize(),A.crossVectors(I,Z);const D=A.dot(u[w])<0?-1:1;c[w*4]=y.x,c[w*4+1]=y.y,c[w*4+2]=y.z,c[w*4+3]=D}for(let w=0,Z=M.length;w<Z;++w){const k=M[w],D=k.start,F=k.count;for(let L=D,W=D+F;L<W;L+=3)x(i[L+0]),x(i[L+1]),x(i[L+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const n=new V,r=new V,a=new V,o=new V,c=new V,l=new V,u=new V,h=new V;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);n.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(n,r),u.cross(h),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)n.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(n,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let d=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?d=c[v]*o.data.stride+o.offset:d=c[v]*u;for(let p=0;p<u;p++)f[g++]=l[d++]}return new zt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ht,i=this.index.array,n=this.attributes;for(const o in n){const c=n[o],l=e(c,i);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,i);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const n={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(n[c]=u,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const l in n){const u=n[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $o=new rt,rn=new Ga,Or=new zi,el=new V,mi=new V,gi=new V,vi=new V,ia=new V,Br=new V,kr=new Me,zr=new Me,Gr=new Me,tl=new V,nl=new V,il=new V,Hr=new V,Vr=new V;class It extends ct{constructor(e=new ht,t=new gr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(r&&o){Br.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(ia.fromBufferAttribute(h,e),a?Br.addScaledVector(ia,u):Br.addScaledVector(ia.sub(t),u))}t.add(Br)}return t}raycast(e,t){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Or.copy(i.boundingSphere),Or.applyMatrix4(r),rn.copy(e.ray).recast(e.near),!(Or.containsPoint(rn.origin)===!1&&(rn.intersectSphere(Or,el)===null||rn.origin.distanceToSquared(el)>(e.far-e.near)**2))&&($o.copy(r).invert(),rn.copy(e.ray).applyMatrix4($o),!(i.boundingBox!==null&&rn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let i;const n=this.geometry,r=this.material,a=n.index,o=n.attributes.position,c=n.attributes.uv,l=n.attributes.uv1,u=n.attributes.normal,h=n.groups,f=n.drawRange;if(a!==null)if(Array.isArray(r))for(let d=0,g=h.length;d<g;d++){const v=h[d],m=r[v.materialIndex],p=Math.max(v.start,f.start),S=Math.min(a.count,Math.min(v.start+v.count,f.start+f.count));for(let _=p,M=S;_<M;_+=3){const y=a.getX(_),A=a.getX(_+1),R=a.getX(_+2);i=Wr(this,m,e,rn,c,l,u,y,A,R),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=v.materialIndex,t.push(i))}}else{const d=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let v=d,m=g;v<m;v+=3){const p=a.getX(v),S=a.getX(v+1),_=a.getX(v+2);i=Wr(this,r,e,rn,c,l,u,p,S,_),i&&(i.faceIndex=Math.floor(v/3),t.push(i))}}else if(o!==void 0)if(Array.isArray(r))for(let d=0,g=h.length;d<g;d++){const v=h[d],m=r[v.materialIndex],p=Math.max(v.start,f.start),S=Math.min(o.count,Math.min(v.start+v.count,f.start+f.count));for(let _=p,M=S;_<M;_+=3){const y=_,A=_+1,R=_+2;i=Wr(this,m,e,rn,c,l,u,y,A,R),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=v.materialIndex,t.push(i))}}else{const d=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let v=d,m=g;v<m;v+=3){const p=v,S=v+1,_=v+2;i=Wr(this,r,e,rn,c,l,u,p,S,_),i&&(i.faceIndex=Math.floor(v/3),t.push(i))}}}}function vh(s,e,t,i,n,r,a,o){let c;if(e.side===Tt?c=i.intersectTriangle(a,r,n,!0,o):c=i.intersectTriangle(n,r,a,e.side===_n,o),c===null)return null;Vr.copy(o),Vr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Vr);return l<t.near||l>t.far?null:{distance:l,point:Vr.clone(),object:s}}function Wr(s,e,t,i,n,r,a,o,c,l){s.getVertexPosition(o,mi),s.getVertexPosition(c,gi),s.getVertexPosition(l,vi);const u=vh(s,e,t,i,mi,gi,vi,Hr);if(u){n&&(kr.fromBufferAttribute(n,o),zr.fromBufferAttribute(n,c),Gr.fromBufferAttribute(n,l),u.uv=Ot.getInterpolation(Hr,mi,gi,vi,kr,zr,Gr,new Me)),r&&(kr.fromBufferAttribute(r,o),zr.fromBufferAttribute(r,c),Gr.fromBufferAttribute(r,l),u.uv1=Ot.getInterpolation(Hr,mi,gi,vi,kr,zr,Gr,new Me),u.uv2=u.uv1),a&&(tl.fromBufferAttribute(a,o),nl.fromBufferAttribute(a,c),il.fromBufferAttribute(a,l),u.normal=Ot.getInterpolation(Hr,mi,gi,vi,tl,nl,il,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new V,materialIndex:0};Ot.getNormal(mi,gi,vi,h.normal),u.face=h}return u}class yr extends ht{constructor(e=1,t=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};const o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,n,a,2),g("x","z","y",1,-1,e,i,-t,n,a,3),g("x","y","z",1,-1,e,t,i,n,r,4),g("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(c),this.setAttribute("position",new Gt(l,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(h,2));function g(v,m,p,S,_,M,y,A,R,I,x){const w=M/R,Z=y/I,k=M/2,D=y/2,F=A/2,L=R+1,W=I+1;let J=0,$=0;const q=new V;for(let Y=0;Y<W;Y++){const O=Y*Z-D;for(let H=0;H<L;H++){const z=H*w-k;q[v]=z*S,q[m]=O*_,q[p]=F,l.push(q.x,q.y,q.z),q[v]=0,q[m]=0,q[p]=A>0?1:-1,u.push(q.x,q.y,q.z),h.push(H/R),h.push(1-Y/I),J+=1}}for(let Y=0;Y<I;Y++)for(let O=0;O<R;O++){const H=f+O+L*Y,z=f+O+L*(Y+1),T=f+(O+1)+L*(Y+1),P=f+(O+1)+L*Y;c.push(H,z,P),c.push(z,T,P),$+=6}o.addGroup(d,$,x),d+=$,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ki(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const n=s[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Et(s){const e={};for(let t=0;t<s.length;t++){const i=ki(s[t]);for(const n in i)e[n]=i[n]}return e}function _h(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function yc(s){return s.getRenderTarget()===null?s.outputColorSpace:an}const Ha={clone:ki,merge:Et};var xh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xh,this.fragmentShader=yh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ki(e.uniforms),this.uniformsGroups=_h(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Mc extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Bt extends Mc{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ra*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ra*2*Math.atan(Math.tan(zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zs*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*n/c,t-=a.offsetY*i/l,n*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _i=-90,xi=1;class Mh extends ct{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const n=new Bt(_i,xi,e,t);n.layers=this.layers,n.up.set(0,1,0),n.lookAt(1,0,0),this.add(n);const r=new Bt(_i,xi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new Bt(_i,xi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new Bt(_i,xi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const c=new Bt(_i,xi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new Bt(_i,xi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[n,r,a,o,c,l]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=gn,e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,n),e.setRenderTarget(i,1),e.render(t,r),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,c),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Sc extends wt{constructor(e,t,i,n,r,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Ni,super(e,t,i,n,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sh extends Xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];t.encoding!==void 0&&(lr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Gn?Xe:Hn),this.texture=new Sc(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Lt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new yr(5,5,5),r=new Yn({name:"CubemapFromEquirect",uniforms:ki(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tt,blending:Rn});r.uniforms.tEquirect.value=t;const a=new It(n,r),o=t.minFilter;return t.minFilter===dr&&(t.minFilter=Lt),new Mh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(r)}}const ra=new V,Eh=new V,bh=new Je;class Fn{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=ra.subVectors(i,t).cross(Eh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ra),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||bh.getNormalMatrix(e),n=this.coplanarPoint(ra).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dn=new zi,Xr=new V;class Va{constructor(e=new Fn,t=new Fn,i=new Fn,n=new Fn,r=new Fn,a=new Fn){this.planes=[e,t,i,n,r,a]}set(e,t,i,n,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,n=i[0],r=i[1],a=i[2],o=i[3],c=i[4],l=i[5],u=i[6],h=i[7],f=i[8],d=i[9],g=i[10],v=i[11],m=i[12],p=i[13],S=i[14],_=i[15];return t[0].setComponents(o-n,h-c,v-f,_-m).normalize(),t[1].setComponents(o+n,h+c,v+f,_+m).normalize(),t[2].setComponents(o+r,h+l,v+d,_+p).normalize(),t[3].setComponents(o-r,h-l,v-d,_-p).normalize(),t[4].setComponents(o-a,h-u,v-g,_-S).normalize(),t[5].setComponents(o+a,h+u,v+g,_+S).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Dn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dn)}intersectsSprite(e){return Dn.center.set(0,0,0),Dn.radius=.7071067811865476,Dn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dn)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Xr.x=n.normal.x>0?e.max.x:e.min.x,Xr.y=n.normal.y>0?e.max.y:e.min.y,Xr.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ec(){let s=null,e=!1,t=null,i=null;function n(r,a){t(r,a),i=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Th(s,e){const t=e.isWebGL2,i=new WeakMap;function n(l,u){const h=l.array,f=l.usage,d=s.createBuffer();s.bindBuffer(u,d),s.bufferData(u,h,f),l.onUploadCallback();let g;if(h instanceof Float32Array)g=s.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=s.SHORT;else if(h instanceof Uint32Array)g=s.UNSIGNED_INT;else if(h instanceof Int32Array)g=s.INT;else if(h instanceof Int8Array)g=s.BYTE;else if(h instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,h){const f=u.array,d=u.updateRange;s.bindBuffer(h,l),d.count===-1?s.bufferSubData(h,0,f):(t?s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(s.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=i.get(l);(!f||f.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);h===void 0?i.set(l,n(l,u)):h.version<l.version&&(r(h.buffer,l,u),h.version=l.version)}return{get:a,remove:o,update:c}}class Gi extends ht{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(n),l=o+1,u=c+1,h=e/o,f=t/c,d=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const S=p*f-a;for(let _=0;_<l;_++){const M=_*h-r;g.push(M,-S,0),v.push(0,0,1),m.push(_/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<o;S++){const _=S+l*p,M=S+l*(p+1),y=S+1+l*(p+1),A=S+1+l*p;d.push(_,M,A),d.push(M,y,A)}this.setIndex(d),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(v,3)),this.setAttribute("uv",new Gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gi(e.width,e.height,e.widthSegments,e.heightSegments)}}var wh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ah=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ch=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ph=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uh="vec3 transformed = vec3( position );",Dh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ih=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Fh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Nh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Oh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Bh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Xh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qh="gl_FragColor = linearToOutputTexel( gl_FragColor );",$h=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ef=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,af=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,of=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ff=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,df=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gf=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,vf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_f=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,Sf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ef=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,wf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Af=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Cf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Lf=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Pf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Df=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,If=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ff=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Of=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Bf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,kf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,zf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Gf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Yf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Qf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$f=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ed=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,td=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,id=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,sd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ad=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,od=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ld=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,ud=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,md=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,vd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,_d=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xd=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yd=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Md=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ed=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Td=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ad=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Rd=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ld=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ud=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Id=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nd=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Od=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Jd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qd=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$d=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ep=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ge={alphamap_fragment:wh,alphamap_pars_fragment:Ah,alphatest_fragment:Rh,alphatest_pars_fragment:Ch,aomap_fragment:Lh,aomap_pars_fragment:Ph,begin_vertex:Uh,beginnormal_vertex:Dh,bsdfs:Ih,iridescence_fragment:Fh,bumpmap_pars_fragment:Nh,clipping_planes_fragment:Oh,clipping_planes_pars_fragment:Bh,clipping_planes_pars_vertex:kh,clipping_planes_vertex:zh,color_fragment:Gh,color_pars_fragment:Hh,color_pars_vertex:Vh,color_vertex:Wh,common:Xh,cube_uv_reflection_fragment:jh,defaultnormal_vertex:Yh,displacementmap_pars_vertex:qh,displacementmap_vertex:Zh,emissivemap_fragment:Kh,emissivemap_pars_fragment:Jh,encodings_fragment:Qh,encodings_pars_fragment:$h,envmap_fragment:ef,envmap_common_pars_fragment:tf,envmap_pars_fragment:nf,envmap_pars_vertex:rf,envmap_physical_pars_fragment:gf,envmap_vertex:sf,fog_vertex:af,fog_pars_vertex:of,fog_fragment:lf,fog_pars_fragment:cf,gradientmap_pars_fragment:uf,lightmap_fragment:hf,lightmap_pars_fragment:ff,lights_lambert_fragment:df,lights_lambert_pars_fragment:pf,lights_pars_begin:mf,lights_toon_fragment:vf,lights_toon_pars_fragment:_f,lights_phong_fragment:xf,lights_phong_pars_fragment:yf,lights_physical_fragment:Mf,lights_physical_pars_fragment:Sf,lights_fragment_begin:Ef,lights_fragment_maps:bf,lights_fragment_end:Tf,logdepthbuf_fragment:wf,logdepthbuf_pars_fragment:Af,logdepthbuf_pars_vertex:Rf,logdepthbuf_vertex:Cf,map_fragment:Lf,map_pars_fragment:Pf,map_particle_fragment:Uf,map_particle_pars_fragment:Df,metalnessmap_fragment:If,metalnessmap_pars_fragment:Ff,morphcolor_vertex:Nf,morphnormal_vertex:Of,morphtarget_pars_vertex:Bf,morphtarget_vertex:kf,normal_fragment_begin:zf,normal_fragment_maps:Gf,normal_pars_fragment:Hf,normal_pars_vertex:Vf,normal_vertex:Wf,normalmap_pars_fragment:Xf,clearcoat_normal_fragment_begin:jf,clearcoat_normal_fragment_maps:Yf,clearcoat_pars_fragment:qf,iridescence_pars_fragment:Zf,output_fragment:Kf,packing:Jf,premultiplied_alpha_fragment:Qf,project_vertex:$f,dithering_fragment:ed,dithering_pars_fragment:td,roughnessmap_fragment:nd,roughnessmap_pars_fragment:id,shadowmap_pars_fragment:rd,shadowmap_pars_vertex:sd,shadowmap_vertex:ad,shadowmask_pars_fragment:od,skinbase_vertex:ld,skinning_pars_vertex:cd,skinning_vertex:ud,skinnormal_vertex:hd,specularmap_fragment:fd,specularmap_pars_fragment:dd,tonemapping_fragment:pd,tonemapping_pars_fragment:md,transmission_fragment:gd,transmission_pars_fragment:vd,uv_pars_fragment:_d,uv_pars_vertex:xd,uv_vertex:yd,worldpos_vertex:Md,background_vert:Sd,background_frag:Ed,backgroundCube_vert:bd,backgroundCube_frag:Td,cube_vert:wd,cube_frag:Ad,depth_vert:Rd,depth_frag:Cd,distanceRGBA_vert:Ld,distanceRGBA_frag:Pd,equirect_vert:Ud,equirect_frag:Dd,linedashed_vert:Id,linedashed_frag:Fd,meshbasic_vert:Nd,meshbasic_frag:Od,meshlambert_vert:Bd,meshlambert_frag:kd,meshmatcap_vert:zd,meshmatcap_frag:Gd,meshnormal_vert:Hd,meshnormal_frag:Vd,meshphong_vert:Wd,meshphong_frag:Xd,meshphysical_vert:jd,meshphysical_frag:Yd,meshtoon_vert:qd,meshtoon_frag:Zd,points_vert:Kd,points_frag:Jd,shadow_vert:Qd,shadow_frag:$d,sprite_vert:ep,sprite_frag:tp},Ce={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaTest:{value:0}}},sn={basic:{uniforms:Et([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Et([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Et([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Et([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Et([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Et([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Et([Ce.points,Ce.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Et([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Et([Ce.common,Ce.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Et([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Et([Ce.sprite,Ce.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Et([Ce.common,Ce.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Et([Ce.lights,Ce.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};sn.physical={uniforms:Et([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const jr={r:0,b:0,g:0};function np(s,e,t,i,n,r,a){const o=new qe(0);let c=r===!0?0:1,l,u,h=null,f=0,d=null;function g(m,p){let S=!1,_=p.isScene===!0?p.background:null;switch(_&&_.isTexture&&(_=(p.backgroundBlurriness>0?t:e).get(_)),_===null?v(o,c):_&&_.isColor&&(v(_,1),S=!0),s.xr.getEnvironmentBlendMode()){case"opaque":S=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,a),S=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,a),S=!0;break}(s.autoClear||S)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===ds)?(u===void 0&&(u=new It(new yr(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:ki(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=_.colorSpace!==Xe,(h!==_||f!==_.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,d=s.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new It(new Gi(2,2),new Yn({name:"BackgroundMaterial",uniforms:ki(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=_.colorSpace!==Xe,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=_,f=_.version,d=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function v(m,p){m.getRGB(jr,yc(s)),i.buffers.color.setClear(jr.r,jr.g,jr.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,v(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,v(o,c)},render:g}}function ip(s,e,t,i){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},c=m(null);let l=c,u=!1;function h(F,L,W,J,$){let q=!1;if(a){const Y=v(J,W,L);l!==Y&&(l=Y,d(l.object)),q=p(F,J,W,$),q&&S(F,J,W,$)}else{const Y=L.wireframe===!0;(l.geometry!==J.id||l.program!==W.id||l.wireframe!==Y)&&(l.geometry=J.id,l.program=W.id,l.wireframe=Y,q=!0)}$!==null&&t.update($,s.ELEMENT_ARRAY_BUFFER),(q||u)&&(u=!1,I(F,L,W,J),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function f(){return i.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(F){return i.isWebGL2?s.bindVertexArray(F):r.bindVertexArrayOES(F)}function g(F){return i.isWebGL2?s.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function v(F,L,W){const J=W.wireframe===!0;let $=o[F.id];$===void 0&&($={},o[F.id]=$);let q=$[L.id];q===void 0&&(q={},$[L.id]=q);let Y=q[J];return Y===void 0&&(Y=m(f()),q[J]=Y),Y}function m(F){const L=[],W=[],J=[];for(let $=0;$<n;$++)L[$]=0,W[$]=0,J[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:W,attributeDivisors:J,object:F,attributes:{},index:null}}function p(F,L,W,J){const $=l.attributes,q=L.attributes;let Y=0;const O=W.getAttributes();for(const H in O)if(O[H].location>=0){const T=$[H];let P=q[H];if(P===void 0&&(H==="instanceMatrix"&&F.instanceMatrix&&(P=F.instanceMatrix),H==="instanceColor"&&F.instanceColor&&(P=F.instanceColor)),T===void 0||T.attribute!==P||P&&T.data!==P.data)return!0;Y++}return l.attributesNum!==Y||l.index!==J}function S(F,L,W,J){const $={},q=L.attributes;let Y=0;const O=W.getAttributes();for(const H in O)if(O[H].location>=0){let T=q[H];T===void 0&&(H==="instanceMatrix"&&F.instanceMatrix&&(T=F.instanceMatrix),H==="instanceColor"&&F.instanceColor&&(T=F.instanceColor));const P={};P.attribute=T,T&&T.data&&(P.data=T.data),$[H]=P,Y++}l.attributes=$,l.attributesNum=Y,l.index=J}function _(){const F=l.newAttributes;for(let L=0,W=F.length;L<W;L++)F[L]=0}function M(F){y(F,0)}function y(F,L){const W=l.newAttributes,J=l.enabledAttributes,$=l.attributeDivisors;W[F]=1,J[F]===0&&(s.enableVertexAttribArray(F),J[F]=1),$[F]!==L&&((i.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,L),$[F]=L)}function A(){const F=l.newAttributes,L=l.enabledAttributes;for(let W=0,J=L.length;W<J;W++)L[W]!==F[W]&&(s.disableVertexAttribArray(W),L[W]=0)}function R(F,L,W,J,$,q){i.isWebGL2===!0&&(W===s.INT||W===s.UNSIGNED_INT)?s.vertexAttribIPointer(F,L,W,$,q):s.vertexAttribPointer(F,L,W,J,$,q)}function I(F,L,W,J){if(i.isWebGL2===!1&&(F.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const $=J.attributes,q=W.getAttributes(),Y=L.defaultAttributeValues;for(const O in q){const H=q[O];if(H.location>=0){let z=$[O];if(z===void 0&&(O==="instanceMatrix"&&F.instanceMatrix&&(z=F.instanceMatrix),O==="instanceColor"&&F.instanceColor&&(z=F.instanceColor)),z!==void 0){const T=z.normalized,P=z.itemSize,N=t.get(z);if(N===void 0)continue;const E=N.buffer,G=N.type,oe=N.bytesPerElement;if(z.isInterleavedBufferAttribute){const Q=z.data,le=Q.stride,X=z.offset;if(Q.isInstancedInterleavedBuffer){for(let te=0;te<H.locationSize;te++)y(H.location+te,Q.meshPerAttribute);F.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let te=0;te<H.locationSize;te++)M(H.location+te);s.bindBuffer(s.ARRAY_BUFFER,E);for(let te=0;te<H.locationSize;te++)R(H.location+te,P/H.locationSize,G,T,le*oe,(X+P/H.locationSize*te)*oe)}else{if(z.isInstancedBufferAttribute){for(let Q=0;Q<H.locationSize;Q++)y(H.location+Q,z.meshPerAttribute);F.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let Q=0;Q<H.locationSize;Q++)M(H.location+Q);s.bindBuffer(s.ARRAY_BUFFER,E);for(let Q=0;Q<H.locationSize;Q++)R(H.location+Q,P/H.locationSize,G,T,P*oe,P/H.locationSize*Q*oe)}}else if(Y!==void 0){const T=Y[O];if(T!==void 0)switch(T.length){case 2:s.vertexAttrib2fv(H.location,T);break;case 3:s.vertexAttrib3fv(H.location,T);break;case 4:s.vertexAttrib4fv(H.location,T);break;default:s.vertexAttrib1fv(H.location,T)}}}}A()}function x(){k();for(const F in o){const L=o[F];for(const W in L){const J=L[W];for(const $ in J)g(J[$].object),delete J[$];delete L[W]}delete o[F]}}function w(F){if(o[F.id]===void 0)return;const L=o[F.id];for(const W in L){const J=L[W];for(const $ in J)g(J[$].object),delete J[$];delete L[W]}delete o[F.id]}function Z(F){for(const L in o){const W=o[L];if(W[F.id]===void 0)continue;const J=W[F.id];for(const $ in J)g(J[$].object),delete J[$];delete W[F.id]}}function k(){D(),u=!0,l!==c&&(l=c,d(l.object))}function D(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:k,resetDefaultState:D,dispose:x,releaseStatesOfGeometry:w,releaseStatesOfProgram:Z,initAttributes:_,enableAttribute:M,disableUnusedAttributes:A}}function rp(s,e,t,i){const n=i.isWebGL2;let r;function a(l){r=l}function o(l,u){s.drawArrays(r,l,u),t.update(u,r,1)}function c(l,u,h){if(h===0)return;let f,d;if(n)f=s,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](r,l,u,h),t.update(u,r,h)}this.setMode=a,this.render=o,this.renderInstances=c}function sp(s,e,t){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,M=a||e.has("OES_texture_float"),y=_&&M,A=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:n,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:S,vertexTextures:_,floatFragmentTextures:M,floatVertexTextures:y,maxSamples:A}}function ap(s){const e=this;let t=null,i=0,n=!1,r=!1;const a=new Fn,o=new Je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||n;return n=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!n||g===null||g.length===0||r&&!m)r?u(null):l();else{const S=r?0:i,_=S*4;let M=p.clippingState||null;c.value=M,M=u(g,f,_,d);for(let y=0;y!==_;++y)M[y]=t[y];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=d+v*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,M=d;_!==v;++_,M+=4)a.copy(h[_]).applyMatrix4(S,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function op(s){let e=new WeakMap;function t(a,o){return o===Sa?a.mapping=Ni:o===Ea&&(a.mapping=Oi),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Sa||o===Ea)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Sh(c.height/2);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",n),t(l.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class bc extends Mc{constructor(e=-1,t=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=n+t,c=n-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ri=4,rl=[.125,.215,.35,.446,.526,.582],On=20,sa=new bc,sl=new qe;let aa=null;const Nn=(1+Math.sqrt(5))/2,yi=1/Nn,al=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,Nn,yi),new V(0,Nn,-yi),new V(yi,0,Nn),new V(-yi,0,Nn),new V(Nn,yi,0),new V(-Nn,yi,0)];class ol{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){aa=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,n,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ul(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(aa),e.scissorTest=!1,Yr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ni||e.mapping===Oi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),aa=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:pr,format:Kt,colorSpace:an,depthBuffer:!1},n=ll(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ll(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lp(r)),this._blurMaterial=cp(r,e,t)}return n}_compileMaterial(e){const t=new It(this._lodPlanes[0],e);this._renderer.compile(t,sa)}_sceneToCubeUV(e,t,i,n){const o=new Bt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(sl),u.toneMapping=gn,u.autoClear=!1;const d=new gr({name:"PMREM.Background",side:Tt,depthWrite:!1,depthTest:!1}),g=new It(new yr,d);let v=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,v=!0):(d.color.copy(sl),v=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):S===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const _=this._cubeSize;Yr(n,S*_,p>2?_:0,_,_),u.setRenderTarget(n),v&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===Ni||e.mapping===Oi;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=ul()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cl());const r=n?this._cubemapMaterial:this._equirectMaterial,a=new It(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Yr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,sa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const r=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=al[(n-1)%al.length];this._blur(e,n-1,n,r,a)}t.autoClear=i}_blur(e,t,i,n,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",r),this._halfBlur(a,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new It(this._lodPlanes[n],l),f=l.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*On-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):On;m>On&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${On}`);const p=[];let S=0;for(let R=0;R<On;++R){const I=R/v,x=Math.exp(-I*I/2);p.push(x),R===0?S+=x:R<m&&(S+=2*x)}for(let R=0;R<p.length;R++)p[R]=p[R]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-i;const M=this._sizeLods[n],y=3*M*(n>_-Ri?n-_+Ri:0),A=4*(this._cubeSize-M);Yr(t,y,A,3*M,2*M),c.setRenderTarget(t),c.render(h,sa)}}function lp(s){const e=[],t=[],i=[];let n=s;const r=s-Ri+1+rl.length;for(let a=0;a<r;a++){const o=Math.pow(2,n);t.push(o);let c=1/o;a>s-Ri?c=rl[a-s+Ri-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,v=3,m=2,p=1,S=new Float32Array(v*g*d),_=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let A=0;A<d;A++){const R=A%3*2/3-1,I=A>2?0:-1,x=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];S.set(x,v*g*A),_.set(f,m*g*A);const w=[A,A,A,A,A,A];M.set(w,p*g*A)}const y=new ht;y.setAttribute("position",new zt(S,v)),y.setAttribute("uv",new zt(_,m)),y.setAttribute("faceIndex",new zt(M,p)),e.push(y),n>Ri&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ll(s,e,t){const i=new Xn(s,e,t);return i.texture.mapping=ds,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Yr(s,e,t,i,n){s.viewport.set(e,t,i,n),s.scissor.set(e,t,i,n)}function cp(s,e,t){const i=new Float32Array(On),n=new V(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:On,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function cl(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function ul(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Wa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function up(s){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Sa||c===Ea,u=c===Ni||c===Oi;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new ol(s)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(l&&h&&h.height>0||u&&h&&n(h)){t===null&&(t=new ol(s));const f=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function n(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function hp(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function fp(s,e,t,i){const n={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete n[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return n[f.id]===!0||(f.addEventListener("dispose",a),n[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)e.update(f[g],s.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const v=d[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],s.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,g=h.attributes.position;let v=0;if(d!==null){const S=d.array;v=d.version;for(let _=0,M=S.length;_<M;_+=3){const y=S[_+0],A=S[_+1],R=S[_+2];f.push(y,A,A,R,R,y)}}else{const S=g.array;v=g.version;for(let _=0,M=S.length/3-1;_<M;_+=3){const y=_+0,A=_+1,R=_+2;f.push(y,A,A,R,R,y)}}const m=new(fc(f)?xc:_c)(f,1);m.version=v;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function dp(s,e,t,i){const n=i.isWebGL2;let r;function a(f){r=f}let o,c;function l(f){o=f.type,c=f.bytesPerElement}function u(f,d){s.drawElements(r,d,o,f*c),t.update(d,r,1)}function h(f,d,g){if(g===0)return;let v,m;if(n)v=s,m="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](r,d,o,f*c,g),t.update(d,r,g)}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=h}function pp(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function mp(s,e){return s[0]-e[0]}function gp(s,e){return Math.abs(e[1])-Math.abs(s[1])}function vp(s,e,t){const i={},n=new Float32Array(8),r=new WeakMap,a=new it,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,h){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=d!==void 0?d.length:0;let v=r.get(u);if(v===void 0||v.count!==g){let F=function(){k.dispose(),r.delete(u),u.removeEventListener("dispose",F)};v!==void 0&&v.texture.dispose();const S=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],R=u.morphAttributes.color||[];let I=0;S===!0&&(I=1),_===!0&&(I=2),M===!0&&(I=3);let x=u.attributes.position.count*I,w=1;x>e.maxTextureSize&&(w=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const Z=new Float32Array(x*w*4*g),k=new mc(Z,x,w,g);k.type=kn,k.needsUpdate=!0;const D=I*4;for(let L=0;L<g;L++){const W=y[L],J=A[L],$=R[L],q=x*w*4*L;for(let Y=0;Y<W.count;Y++){const O=Y*D;S===!0&&(a.fromBufferAttribute(W,Y),Z[q+O+0]=a.x,Z[q+O+1]=a.y,Z[q+O+2]=a.z,Z[q+O+3]=0),_===!0&&(a.fromBufferAttribute(J,Y),Z[q+O+4]=a.x,Z[q+O+5]=a.y,Z[q+O+6]=a.z,Z[q+O+7]=0),M===!0&&(a.fromBufferAttribute($,Y),Z[q+O+8]=a.x,Z[q+O+9]=a.y,Z[q+O+10]=a.z,Z[q+O+11]=$.itemSize===4?a.w:1)}}v={count:g,texture:k,size:new Me(x,w)},r.set(u,v),u.addEventListener("dispose",F)}let m=0;for(let S=0;S<f.length;S++)m+=f[S];const p=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(s,"morphTargetBaseInfluence",p),h.getUniforms().setValue(s,"morphTargetInfluences",f),h.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}else{const d=f===void 0?0:f.length;let g=i[u.id];if(g===void 0||g.length!==d){g=[];for(let _=0;_<d;_++)g[_]=[_,0];i[u.id]=g}for(let _=0;_<d;_++){const M=g[_];M[0]=_,M[1]=f[_]}g.sort(gp);for(let _=0;_<8;_++)_<d&&g[_][1]?(o[_][0]=g[_][0],o[_][1]=g[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(mp);const v=u.morphAttributes.position,m=u.morphAttributes.normal;let p=0;for(let _=0;_<8;_++){const M=o[_],y=M[0],A=M[1];y!==Number.MAX_SAFE_INTEGER&&A?(v&&u.getAttribute("morphTarget"+_)!==v[y]&&u.setAttribute("morphTarget"+_,v[y]),m&&u.getAttribute("morphNormal"+_)!==m[y]&&u.setAttribute("morphNormal"+_,m[y]),n[_]=A,p+=A):(v&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),m&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),n[_]=0)}const S=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(s,"morphTargetBaseInfluence",S),h.getUniforms().setValue(s,"morphTargetInfluences",n)}}return{update:c}}function _p(s,e,t,i){let n=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);return n.get(h)!==l&&(e.update(h),n.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER)),h}function a(){n=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const Tc=new wt,wc=new mc,Ac=new oh,Rc=new Sc,hl=[],fl=[],dl=new Float32Array(16),pl=new Float32Array(9),ml=new Float32Array(4);function Hi(s,e,t){const i=s[0];if(i<=0||i>0)return s;const n=e*t;let r=hl[n];if(r===void 0&&(r=new Float32Array(n),hl[n]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function ft(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function dt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function ms(s,e){let t=fl[e];t===void 0&&(t=new Int32Array(e),fl[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function xp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function yp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;s.uniform2fv(this.addr,e),dt(t,e)}}function Mp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;s.uniform3fv(this.addr,e),dt(t,e)}}function Sp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;s.uniform4fv(this.addr,e),dt(t,e)}}function Ep(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ft(t,i))return;ml.set(i),s.uniformMatrix2fv(this.addr,!1,ml),dt(t,i)}}function bp(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ft(t,i))return;pl.set(i),s.uniformMatrix3fv(this.addr,!1,pl),dt(t,i)}}function Tp(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ft(t,i))return;dl.set(i),s.uniformMatrix4fv(this.addr,!1,dl),dt(t,i)}}function wp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Ap(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;s.uniform2iv(this.addr,e),dt(t,e)}}function Rp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;s.uniform3iv(this.addr,e),dt(t,e)}}function Cp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;s.uniform4iv(this.addr,e),dt(t,e)}}function Lp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Pp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;s.uniform2uiv(this.addr,e),dt(t,e)}}function Up(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;s.uniform3uiv(this.addr,e),dt(t,e)}}function Dp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;s.uniform4uiv(this.addr,e),dt(t,e)}}function Ip(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2D(e||Tc,n)}function Fp(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Ac,n)}function Np(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Rc,n)}function Op(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||wc,n)}function Bp(s){switch(s){case 5126:return xp;case 35664:return yp;case 35665:return Mp;case 35666:return Sp;case 35674:return Ep;case 35675:return bp;case 35676:return Tp;case 5124:case 35670:return wp;case 35667:case 35671:return Ap;case 35668:case 35672:return Rp;case 35669:case 35673:return Cp;case 5125:return Lp;case 36294:return Pp;case 36295:return Up;case 36296:return Dp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ip;case 35679:case 36299:case 36307:return Fp;case 35680:case 36300:case 36308:case 36293:return Np;case 36289:case 36303:case 36311:case 36292:return Op}}function kp(s,e){s.uniform1fv(this.addr,e)}function zp(s,e){const t=Hi(e,this.size,2);s.uniform2fv(this.addr,t)}function Gp(s,e){const t=Hi(e,this.size,3);s.uniform3fv(this.addr,t)}function Hp(s,e){const t=Hi(e,this.size,4);s.uniform4fv(this.addr,t)}function Vp(s,e){const t=Hi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Wp(s,e){const t=Hi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Xp(s,e){const t=Hi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function jp(s,e){s.uniform1iv(this.addr,e)}function Yp(s,e){s.uniform2iv(this.addr,e)}function qp(s,e){s.uniform3iv(this.addr,e)}function Zp(s,e){s.uniform4iv(this.addr,e)}function Kp(s,e){s.uniform1uiv(this.addr,e)}function Jp(s,e){s.uniform2uiv(this.addr,e)}function Qp(s,e){s.uniform3uiv(this.addr,e)}function $p(s,e){s.uniform4uiv(this.addr,e)}function em(s,e,t){const i=this.cache,n=e.length,r=ms(t,n);ft(i,r)||(s.uniform1iv(this.addr,r),dt(i,r));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||Tc,r[a])}function tm(s,e,t){const i=this.cache,n=e.length,r=ms(t,n);ft(i,r)||(s.uniform1iv(this.addr,r),dt(i,r));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||Ac,r[a])}function nm(s,e,t){const i=this.cache,n=e.length,r=ms(t,n);ft(i,r)||(s.uniform1iv(this.addr,r),dt(i,r));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||Rc,r[a])}function im(s,e,t){const i=this.cache,n=e.length,r=ms(t,n);ft(i,r)||(s.uniform1iv(this.addr,r),dt(i,r));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||wc,r[a])}function rm(s){switch(s){case 5126:return kp;case 35664:return zp;case 35665:return Gp;case 35666:return Hp;case 35674:return Vp;case 35675:return Wp;case 35676:return Xp;case 5124:case 35670:return jp;case 35667:case 35671:return Yp;case 35668:case 35672:return qp;case 35669:case 35673:return Zp;case 5125:return Kp;case 36294:return Jp;case 36295:return Qp;case 36296:return $p;case 35678:case 36198:case 36298:case 36306:case 35682:return em;case 35679:case 36299:case 36307:return tm;case 35680:case 36300:case 36308:case 36293:return nm;case 36289:case 36303:case 36311:case 36292:return im}}class sm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Bp(t.type)}}class am{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=rm(t.type)}}class om{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.setValue(e,t[o.id],i)}}}const oa=/(\w+)(\])?(\[|\.)?/g;function gl(s,e){s.seq.push(e),s.map[e.id]=e}function lm(s,e,t){const i=s.name,n=i.length;for(oa.lastIndex=0;;){const r=oa.exec(i),a=oa.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===n){gl(t,l===void 0?new sm(o,s,e):new am(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new om(o),gl(t,h)),t=h}}}class os{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=e.getActiveUniform(t,n),a=e.getUniformLocation(t,r.name);lm(r,a,this)}}setValue(e,t,i,n){const r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,r=e.length;n!==r;++n){const a=e[n];a.id in t&&i.push(a)}return i}}function vl(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}let cm=0;function um(s,e){const t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=n;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function hm(s){switch(s){case an:return["Linear","( value )"];case Xe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function _l(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),n=s.getShaderInfoLog(e).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+n+`

`+um(s.getShaderSource(e),a)}else return n}function fm(s,e){const t=hm(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function dm(s,e){let t;switch(e){case Ru:t="Linear";break;case Cu:t="Reinhard";break;case Lu:t="OptimizedCineon";break;case Pu:t="ACESFilmic";break;case Uu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function pm(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(or).join(`
`)}function mm(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function gm(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(e,n),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function or(s){return s!==""}function xl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ca(s){return s.replace(vm,_m)}function _m(s,e){const t=Ge[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ca(t)}const xm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ml(s){return s.replace(xm,ym)}function ym(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Sl(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Mm(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===rc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===au?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===mn&&(e="SHADOWMAP_TYPE_VSM"),e}function Sm(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ni:case Oi:e="ENVMAP_TYPE_CUBE";break;case ds:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Em(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Oi:e="ENVMAP_MODE_REFRACTION";break}return e}function bm(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ka:e="ENVMAP_BLENDING_MULTIPLY";break;case wu:e="ENVMAP_BLENDING_MIX";break;case Au:e="ENVMAP_BLENDING_ADD";break}return e}function Tm(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function wm(s,e,t,i){const n=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Mm(t),l=Sm(t),u=Em(t),h=bm(t),f=Tm(t),d=t.isWebGL2?"":pm(t),g=mm(r),v=n.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(or).join(`
`),m.length>0&&(m+=`
`),p=[d,g].filter(or).join(`
`),p.length>0&&(p+=`
`)):(m=[Sl(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),p=[d,Sl(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gn?"#define TONE_MAPPING":"",t.toneMapping!==gn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==gn?dm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.encodings_pars_fragment,fm("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(or).join(`
`)),a=Ca(a),a=xl(a,t),a=yl(a,t),o=Ca(o),o=xl(o,t),o=yl(o,t),a=Ml(a),o=Ml(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Go?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Go?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=S+m+a,M=S+p+o,y=vl(n,n.VERTEX_SHADER,_),A=vl(n,n.FRAGMENT_SHADER,M);if(n.attachShader(v,y),n.attachShader(v,A),t.index0AttributeName!==void 0?n.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v),s.debug.checkShaderErrors){const x=n.getProgramInfoLog(v).trim(),w=n.getShaderInfoLog(y).trim(),Z=n.getShaderInfoLog(A).trim();let k=!0,D=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(k=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,v,y,A);else{const F=_l(n,y,"vertex"),L=_l(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+F+`
`+L)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(w===""||Z==="")&&(D=!1);D&&(this.diagnostics={runnable:k,programLog:x,vertexShader:{log:w,prefix:m},fragmentShader:{log:Z,prefix:p}})}n.deleteShader(y),n.deleteShader(A);let R;this.getUniforms=function(){return R===void 0&&(R=new os(n,v)),R};let I;return this.getAttributes=function(){return I===void 0&&(I=gm(n,v)),I},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=cm++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=y,this.fragmentShader=A,this}let Am=0;class Rm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Cm(e),t.set(e,i)),i}}class Cm{constructor(e){this.id=Am++,this.code=e,this.usedTimes=0}}function Lm(s,e,t,i,n,r,a){const o=new gc,c=new Rm,l=[],u=n.isWebGL2,h=n.logarithmicDepthBuffer,f=n.vertexTextures;let d=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return x===1?"uv1":x===2?"uv2":x===3?"uv3":"uv"}function m(x,w,Z,k,D){const F=k.fog,L=D.geometry,W=x.isMeshStandardMaterial?k.environment:null,J=(x.isMeshStandardMaterial?t:e).get(x.envMap||W),$=J&&J.mapping===ds?J.image.height:null,q=g[x.type];x.precision!==null&&(d=n.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const Y=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,O=Y!==void 0?Y.length:0;let H=0;L.morphAttributes.position!==void 0&&(H=1),L.morphAttributes.normal!==void 0&&(H=2),L.morphAttributes.color!==void 0&&(H=3);let z,T,P,N;if(q){const Ue=sn[q];z=Ue.vertexShader,T=Ue.fragmentShader}else z=x.vertexShader,T=x.fragmentShader,c.update(x),P=c.getVertexShaderID(x),N=c.getFragmentShaderID(x);const E=s.getRenderTarget(),G=D.isInstancedMesh===!0,oe=!!x.map,Q=!!x.matcap,le=!!J,X=!!x.aoMap,te=!!x.lightMap,ie=!!x.bumpMap,pe=!!x.normalMap,ue=!!x.displacementMap,Se=!!x.emissiveMap,he=!!x.metalnessMap,xe=!!x.roughnessMap,Te=x.clearcoat>0,de=x.iridescence>0,C=x.sheen>0,b=x.transmission>0,K=Te&&!!x.clearcoatMap,re=Te&&!!x.clearcoatNormalMap,ge=Te&&!!x.clearcoatRoughnessMap,me=de&&!!x.iridescenceMap,B=de&&!!x.iridescenceThicknessMap,ae=C&&!!x.sheenColorMap,ee=C&&!!x.sheenRoughnessMap,be=!!x.specularMap,Ae=!!x.specularColorMap,we=!!x.specularIntensityMap,Ee=b&&!!x.transmissionMap,ye=b&&!!x.thicknessMap,Pe=!!x.gradientMap,De=!!x.alphaMap,Ze=x.alphaTest>0,j=!!x.extensions,ne=!!L.attributes.uv1,ve=!!L.attributes.uv2,Le=!!L.attributes.uv3;return{isWebGL2:u,shaderID:q,shaderName:x.type,vertexShader:z,fragmentShader:T,defines:x.defines,customVertexShaderID:P,customFragmentShaderID:N,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,instancing:G,instancingColor:G&&D.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:E===null?s.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:an,map:oe,matcap:Q,envMap:le,envMapMode:le&&J.mapping,envMapCubeUVHeight:$,aoMap:X,lightMap:te,bumpMap:ie,normalMap:pe,displacementMap:f&&ue,emissiveMap:Se,normalMapObjectSpace:pe&&x.normalMapType===Ku,normalMapTangentSpace:pe&&x.normalMapType===za,metalnessMap:he,roughnessMap:xe,clearcoat:Te,clearcoatMap:K,clearcoatNormalMap:re,clearcoatRoughnessMap:ge,iridescence:de,iridescenceMap:me,iridescenceThicknessMap:B,sheen:C,sheenColorMap:ae,sheenRoughnessMap:ee,specularMap:be,specularColorMap:Ae,specularIntensityMap:we,transmission:b,transmissionMap:Ee,thicknessMap:ye,gradientMap:Pe,opaque:x.transparent===!1&&x.blending===Ui,alphaMap:De,alphaTest:Ze,combine:x.combine,mapUv:oe&&v(x.map.channel),aoMapUv:X&&v(x.aoMap.channel),lightMapUv:te&&v(x.lightMap.channel),bumpMapUv:ie&&v(x.bumpMap.channel),normalMapUv:pe&&v(x.normalMap.channel),displacementMapUv:ue&&v(x.displacementMap.channel),emissiveMapUv:Se&&v(x.emissiveMap.channel),metalnessMapUv:he&&v(x.metalnessMap.channel),roughnessMapUv:xe&&v(x.roughnessMap.channel),clearcoatMapUv:K&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:B&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:ee&&v(x.sheenRoughnessMap.channel),specularMapUv:be&&v(x.specularMap.channel),specularColorMapUv:Ae&&v(x.specularColorMap.channel),specularIntensityMapUv:we&&v(x.specularIntensityMap.channel),transmissionMapUv:Ee&&v(x.transmissionMap.channel),thicknessMapUv:ye&&v(x.thicknessMap.channel),alphaMapUv:De&&v(x.alphaMap.channel),vertexTangents:pe&&!!L.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUv1s:ne,vertexUv2s:ve,vertexUv3s:Le,pointsUvs:D.isPoints===!0&&!!L.attributes.uv&&(oe||De),fog:!!F,useFog:x.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:H,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&Z.length>0,shadowMapType:s.shadowMap.type,toneMapping:x.toneMapped?s.toneMapping:gn,useLegacyLights:s.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===kt,flipSided:x.side===Tt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:j&&x.extensions.derivatives===!0,extensionFragDepth:j&&x.extensions.fragDepth===!0,extensionDrawBuffers:j&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:j&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const Z in x.defines)w.push(Z),w.push(x.defines[Z]);return x.isRawShaderMaterial===!1&&(S(w,x),_(w,x),w.push(s.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function S(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function _(x,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),x.push(o.mask)}function M(x){const w=g[x.type];let Z;if(w){const k=sn[w];Z=Ha.clone(k.uniforms)}else Z=x.uniforms;return Z}function y(x,w){let Z;for(let k=0,D=l.length;k<D;k++){const F=l[k];if(F.cacheKey===w){Z=F,++Z.usedTimes;break}}return Z===void 0&&(Z=new wm(s,w,x,r),l.push(Z)),Z}function A(x){if(--x.usedTimes===0){const w=l.indexOf(x);l[w]=l[l.length-1],l.pop(),x.destroy()}}function R(x){c.remove(x)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:y,releaseProgram:A,releaseShaderCache:R,programs:l,dispose:I}}function Pm(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function i(r,a,o){s.get(r)[a]=o}function n(){s=new WeakMap}return{get:e,remove:t,update:i,dispose:n}}function Um(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function El(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function bl(){const s=[];let e=0;const t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function a(h,f,d,g,v,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),e++,p}function o(h,f,d,g,v,m){const p=a(h,f,d,g,v,m);d.transmission>0?i.push(p):d.transparent===!0?n.push(p):t.push(p)}function c(h,f,d,g,v,m){const p=a(h,f,d,g,v,m);d.transmission>0?i.unshift(p):d.transparent===!0?n.unshift(p):t.unshift(p)}function l(h,f){t.length>1&&t.sort(h||Um),i.length>1&&i.sort(f||El),n.length>1&&n.sort(f||El)}function u(){for(let h=e,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:o,unshift:c,finish:u,sort:l}}function Dm(){let s=new WeakMap;function e(i,n){const r=s.get(i);let a;return r===void 0?(a=new bl,s.set(i,[a])):n>=r.length?(a=new bl,r.push(a)):a=r[n],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Im(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new qe};break;case"SpotLight":t={position:new V,direction:new V,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new V,halfWidth:new V,halfHeight:new V};break}return s[e.id]=t,t}}}function Fm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Nm=0;function Om(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Bm(s,e){const t=new Im,i=Fm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)n.probe.push(new V);const r=new V,a=new rt,o=new rt;function c(u,h){let f=0,d=0,g=0;for(let Z=0;Z<9;Z++)n.probe[Z].set(0,0,0);let v=0,m=0,p=0,S=0,_=0,M=0,y=0,A=0,R=0,I=0;u.sort(Om);const x=h===!0?Math.PI:1;for(let Z=0,k=u.length;Z<k;Z++){const D=u[Z],F=D.color,L=D.intensity,W=D.distance,J=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=F.r*L*x,d+=F.g*L*x,g+=F.b*L*x;else if(D.isLightProbe)for(let $=0;$<9;$++)n.probe[$].addScaledVector(D.sh.coefficients[$],L);else if(D.isDirectionalLight){const $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity*x),D.castShadow){const q=D.shadow,Y=i.get(D);Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,n.directionalShadow[v]=Y,n.directionalShadowMap[v]=J,n.directionalShadowMatrix[v]=D.shadow.matrix,M++}n.directional[v]=$,v++}else if(D.isSpotLight){const $=t.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(F).multiplyScalar(L*x),$.distance=W,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,n.spot[p]=$;const q=D.shadow;if(D.map&&(n.spotLightMap[R]=D.map,R++,q.updateMatrices(D),D.castShadow&&I++),n.spotLightMatrix[p]=q.matrix,D.castShadow){const Y=i.get(D);Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,n.spotShadow[p]=Y,n.spotShadowMap[p]=J,A++}p++}else if(D.isRectAreaLight){const $=t.get(D);$.color.copy(F).multiplyScalar(L),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),n.rectArea[S]=$,S++}else if(D.isPointLight){const $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity*x),$.distance=D.distance,$.decay=D.decay,D.castShadow){const q=D.shadow,Y=i.get(D);Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,Y.shadowCameraNear=q.camera.near,Y.shadowCameraFar=q.camera.far,n.pointShadow[m]=Y,n.pointShadowMap[m]=J,n.pointShadowMatrix[m]=D.shadow.matrix,y++}n.point[m]=$,m++}else if(D.isHemisphereLight){const $=t.get(D);$.skyColor.copy(D.color).multiplyScalar(L*x),$.groundColor.copy(D.groundColor).multiplyScalar(L*x),n.hemi[_]=$,_++}}S>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=f,n.ambient[1]=d,n.ambient[2]=g;const w=n.hash;(w.directionalLength!==v||w.pointLength!==m||w.spotLength!==p||w.rectAreaLength!==S||w.hemiLength!==_||w.numDirectionalShadows!==M||w.numPointShadows!==y||w.numSpotShadows!==A||w.numSpotMaps!==R)&&(n.directional.length=v,n.spot.length=p,n.rectArea.length=S,n.point.length=m,n.hemi.length=_,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=A+R-I,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=I,w.directionalLength=v,w.pointLength=m,w.spotLength=p,w.rectAreaLength=S,w.hemiLength=_,w.numDirectionalShadows=M,w.numPointShadows=y,w.numSpotShadows=A,w.numSpotMaps=R,n.version=Nm++)}function l(u,h){let f=0,d=0,g=0,v=0,m=0;const p=h.matrixWorldInverse;for(let S=0,_=u.length;S<_;S++){const M=u[S];if(M.isDirectionalLight){const y=n.directional[f];y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),f++}else if(M.isSpotLight){const y=n.spot[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),g++}else if(M.isRectAreaLight){const y=n.rectArea[v];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),o.identity(),a.copy(M.matrixWorld),a.premultiply(p),o.extractRotation(a),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),v++}else if(M.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const y=n.hemi[m];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:n}}function Tl(s,e){const t=new Bm(s,e),i=[],n=[];function r(){i.length=0,n.length=0}function a(h){i.push(h)}function o(h){n.push(h)}function c(h){t.setup(i,h)}function l(h){t.setupView(i,h)}return{init:r,state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function km(s,e){let t=new WeakMap;function i(r,a=0){const o=t.get(r);let c;return o===void 0?(c=new Tl(s,e),t.set(r,[c])):a>=o.length?(c=new Tl(s,e),o.push(c)):c=o[a],c}function n(){t=new WeakMap}return{get:i,dispose:n}}class Cc extends xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lc extends xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Hm(s,e,t){let i=new Va;const n=new Me,r=new Me,a=new it,o=new Cc({depthPacking:uc}),c=new Lc,l={},u=t.maxTextureSize,h={[_n]:Tt,[Tt]:_n,[kt]:kt},f=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:zm,fragmentShader:Gm}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new ht;g.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new It(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rc;let p=this.type;this.render=function(y,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const I=s.getRenderTarget(),x=s.getActiveCubeFace(),w=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(Rn),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const k=p!==mn&&this.type===mn,D=p===mn&&this.type!==mn;for(let F=0,L=y.length;F<L;F++){const W=y[F],J=W.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;n.copy(J.mapSize);const $=J.getFrameExtents();if(n.multiply($),r.copy(J.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(r.x=Math.floor(u/$.x),n.x=r.x*$.x,J.mapSize.x=r.x),n.y>u&&(r.y=Math.floor(u/$.y),n.y=r.y*$.y,J.mapSize.y=r.y)),J.map===null||k===!0||D===!0){const Y=this.type!==mn?{minFilter:bt,magFilter:bt}:{};J.map!==null&&J.map.dispose(),J.map=new Xn(n.x,n.y,Y),J.map.texture.name=W.name+".shadowMap",J.camera.updateProjectionMatrix()}s.setRenderTarget(J.map),s.clear();const q=J.getViewportCount();for(let Y=0;Y<q;Y++){const O=J.getViewport(Y);a.set(r.x*O.x,r.y*O.y,r.x*O.z,r.y*O.w),Z.viewport(a),J.updateMatrices(W,Y),i=J.getFrustum(),M(A,R,J.camera,W,this.type)}J.isPointLightShadow!==!0&&this.type===mn&&S(J,R),J.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(I,x,w)};function S(y,A){const R=e.update(v);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Xn(n.x,n.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,s.setRenderTarget(y.mapPass),s.clear(),s.renderBufferDirect(A,null,R,f,v,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,s.setRenderTarget(y.map),s.clear(),s.renderBufferDirect(A,null,R,d,v,null)}function _(y,A,R,I){let x=null;const w=R.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(w!==void 0)x=w;else if(x=R.isPointLight===!0?c:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const Z=x.uuid,k=A.uuid;let D=l[Z];D===void 0&&(D={},l[Z]=D);let F=D[k];F===void 0&&(F=x.clone(),D[k]=F),x=F}if(x.visible=A.visible,x.wireframe=A.wireframe,I===mn?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:h[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const Z=s.properties.get(x);Z.light=R}return x}function M(y,A,R,I,x){if(y.visible===!1)return;if(y.layers.test(A.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&x===mn)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,y.matrixWorld);const k=e.update(y),D=y.material;if(Array.isArray(D)){const F=k.groups;for(let L=0,W=F.length;L<W;L++){const J=F[L],$=D[J.materialIndex];if($&&$.visible){const q=_(y,$,I,x);s.renderBufferDirect(R,null,k,q,y,J)}}}else if(D.visible){const F=_(y,D,I,x);s.renderBufferDirect(R,null,k,F,y,null)}}const Z=y.children;for(let k=0,D=Z.length;k<D;k++)M(Z[k],A,R,I,x)}}function Vm(s,e,t){const i=t.isWebGL2;function n(){let j=!1;const ne=new it;let ve=null;const Le=new it(0,0,0,0);return{setMask:function(Re){ve!==Re&&!j&&(s.colorMask(Re,Re,Re,Re),ve=Re)},setLocked:function(Re){j=Re},setClear:function(Re,Ue,Be,Ve,Oe){Oe===!0&&(Re*=Ve,Ue*=Ve,Be*=Ve),ne.set(Re,Ue,Be,Ve),Le.equals(ne)===!1&&(s.clearColor(Re,Ue,Be,Ve),Le.copy(ne))},reset:function(){j=!1,ve=null,Le.set(-1,0,0,0)}}}function r(){let j=!1,ne=null,ve=null,Le=null;return{setTest:function(Re){Re?E(s.DEPTH_TEST):G(s.DEPTH_TEST)},setMask:function(Re){ne!==Re&&!j&&(s.depthMask(Re),ne=Re)},setFunc:function(Re){if(ve!==Re){switch(Re){case xu:s.depthFunc(s.NEVER);break;case yu:s.depthFunc(s.ALWAYS);break;case Mu:s.depthFunc(s.LESS);break;case Ma:s.depthFunc(s.LEQUAL);break;case Su:s.depthFunc(s.EQUAL);break;case Eu:s.depthFunc(s.GEQUAL);break;case bu:s.depthFunc(s.GREATER);break;case Tu:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ve=Re}},setLocked:function(Re){j=Re},setClear:function(Re){Le!==Re&&(s.clearDepth(Re),Le=Re)},reset:function(){j=!1,ne=null,ve=null,Le=null}}}function a(){let j=!1,ne=null,ve=null,Le=null,Re=null,Ue=null,Be=null,Ve=null,Oe=null;return{setTest:function(ze){j||(ze?E(s.STENCIL_TEST):G(s.STENCIL_TEST))},setMask:function(ze){ne!==ze&&!j&&(s.stencilMask(ze),ne=ze)},setFunc:function(ze,$e,et){(ve!==ze||Le!==$e||Re!==et)&&(s.stencilFunc(ze,$e,et),ve=ze,Le=$e,Re=et)},setOp:function(ze,$e,et){(Ue!==ze||Be!==$e||Ve!==et)&&(s.stencilOp(ze,$e,et),Ue=ze,Be=$e,Ve=et)},setLocked:function(ze){j=ze},setClear:function(ze){Oe!==ze&&(s.clearStencil(ze),Oe=ze)},reset:function(){j=!1,ne=null,ve=null,Le=null,Re=null,Ue=null,Be=null,Ve=null,Oe=null}}}const o=new n,c=new r,l=new a,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,v=[],m=null,p=!1,S=null,_=null,M=null,y=null,A=null,R=null,I=null,x=!1,w=null,Z=null,k=null,D=null,F=null;const L=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,J=0;const $=s.getParameter(s.VERSION);$.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec($)[1]),W=J>=1):$.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),W=J>=2);let q=null,Y={};const O=s.getParameter(s.SCISSOR_BOX),H=s.getParameter(s.VIEWPORT),z=new it().fromArray(O),T=new it().fromArray(H);function P(j,ne,ve,Le){const Re=new Uint8Array(4),Ue=s.createTexture();s.bindTexture(j,Ue),s.texParameteri(j,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(j,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Be=0;Be<ve;Be++)i&&(j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY)?s.texImage3D(ne,0,s.RGBA,1,1,Le,0,s.RGBA,s.UNSIGNED_BYTE,Re):s.texImage2D(ne+Be,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Re);return Ue}const N={};N[s.TEXTURE_2D]=P(s.TEXTURE_2D,s.TEXTURE_2D,1),N[s.TEXTURE_CUBE_MAP]=P(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(N[s.TEXTURE_2D_ARRAY]=P(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),N[s.TEXTURE_3D]=P(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),E(s.DEPTH_TEST),c.setFunc(Ma),ue(!1),Se(uo),E(s.CULL_FACE),ie(Rn);function E(j){f[j]!==!0&&(s.enable(j),f[j]=!0)}function G(j){f[j]!==!1&&(s.disable(j),f[j]=!1)}function oe(j,ne){return d[j]!==ne?(s.bindFramebuffer(j,ne),d[j]=ne,i&&(j===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ne),j===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ne)),!0):!1}function Q(j,ne){let ve=v,Le=!1;if(j)if(ve=g.get(ne),ve===void 0&&(ve=[],g.set(ne,ve)),j.isWebGLMultipleRenderTargets){const Re=j.texture;if(ve.length!==Re.length||ve[0]!==s.COLOR_ATTACHMENT0){for(let Ue=0,Be=Re.length;Ue<Be;Ue++)ve[Ue]=s.COLOR_ATTACHMENT0+Ue;ve.length=Re.length,Le=!0}}else ve[0]!==s.COLOR_ATTACHMENT0&&(ve[0]=s.COLOR_ATTACHMENT0,Le=!0);else ve[0]!==s.BACK&&(ve[0]=s.BACK,Le=!0);Le&&(t.isWebGL2?s.drawBuffers(ve):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ve))}function le(j){return m!==j?(s.useProgram(j),m=j,!0):!1}const X={[wi]:s.FUNC_ADD,[lu]:s.FUNC_SUBTRACT,[cu]:s.FUNC_REVERSE_SUBTRACT};if(i)X[mo]=s.MIN,X[go]=s.MAX;else{const j=e.get("EXT_blend_minmax");j!==null&&(X[mo]=j.MIN_EXT,X[go]=j.MAX_EXT)}const te={[uu]:s.ZERO,[hu]:s.ONE,[fu]:s.SRC_COLOR,[sc]:s.SRC_ALPHA,[_u]:s.SRC_ALPHA_SATURATE,[gu]:s.DST_COLOR,[pu]:s.DST_ALPHA,[du]:s.ONE_MINUS_SRC_COLOR,[ac]:s.ONE_MINUS_SRC_ALPHA,[vu]:s.ONE_MINUS_DST_COLOR,[mu]:s.ONE_MINUS_DST_ALPHA};function ie(j,ne,ve,Le,Re,Ue,Be,Ve){if(j===Rn){p===!0&&(G(s.BLEND),p=!1);return}if(p===!1&&(E(s.BLEND),p=!0),j!==ou){if(j!==S||Ve!==x){if((_!==wi||A!==wi)&&(s.blendEquation(s.FUNC_ADD),_=wi,A=wi),Ve)switch(j){case Ui:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ho:s.blendFunc(s.ONE,s.ONE);break;case fo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case po:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case Ui:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ho:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case fo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case po:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}M=null,y=null,R=null,I=null,S=j,x=Ve}return}Re=Re||ne,Ue=Ue||ve,Be=Be||Le,(ne!==_||Re!==A)&&(s.blendEquationSeparate(X[ne],X[Re]),_=ne,A=Re),(ve!==M||Le!==y||Ue!==R||Be!==I)&&(s.blendFuncSeparate(te[ve],te[Le],te[Ue],te[Be]),M=ve,y=Le,R=Ue,I=Be),S=j,x=!1}function pe(j,ne){j.side===kt?G(s.CULL_FACE):E(s.CULL_FACE);let ve=j.side===Tt;ne&&(ve=!ve),ue(ve),j.blending===Ui&&j.transparent===!1?ie(Rn):ie(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.premultipliedAlpha),c.setFunc(j.depthFunc),c.setTest(j.depthTest),c.setMask(j.depthWrite),o.setMask(j.colorWrite);const Le=j.stencilWrite;l.setTest(Le),Le&&(l.setMask(j.stencilWriteMask),l.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),l.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),xe(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?E(s.SAMPLE_ALPHA_TO_COVERAGE):G(s.SAMPLE_ALPHA_TO_COVERAGE)}function ue(j){w!==j&&(j?s.frontFace(s.CW):s.frontFace(s.CCW),w=j)}function Se(j){j!==ru?(E(s.CULL_FACE),j!==Z&&(j===uo?s.cullFace(s.BACK):j===su?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):G(s.CULL_FACE),Z=j}function he(j){j!==k&&(W&&s.lineWidth(j),k=j)}function xe(j,ne,ve){j?(E(s.POLYGON_OFFSET_FILL),(D!==ne||F!==ve)&&(s.polygonOffset(ne,ve),D=ne,F=ve)):G(s.POLYGON_OFFSET_FILL)}function Te(j){j?E(s.SCISSOR_TEST):G(s.SCISSOR_TEST)}function de(j){j===void 0&&(j=s.TEXTURE0+L-1),q!==j&&(s.activeTexture(j),q=j)}function C(j,ne,ve){ve===void 0&&(q===null?ve=s.TEXTURE0+L-1:ve=q);let Le=Y[ve];Le===void 0&&(Le={type:void 0,texture:void 0},Y[ve]=Le),(Le.type!==j||Le.texture!==ne)&&(q!==ve&&(s.activeTexture(ve),q=ve),s.bindTexture(j,ne||N[j]),Le.type=j,Le.texture=ne)}function b(){const j=Y[q];j!==void 0&&j.type!==void 0&&(s.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function re(){try{s.compressedTexImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ge(){try{s.texSubImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function me(){try{s.texSubImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function B(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ae(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ee(){try{s.texStorage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function be(){try{s.texStorage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ae(){try{s.texImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function we(){try{s.texImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ee(j){z.equals(j)===!1&&(s.scissor(j.x,j.y,j.z,j.w),z.copy(j))}function ye(j){T.equals(j)===!1&&(s.viewport(j.x,j.y,j.z,j.w),T.copy(j))}function Pe(j,ne){let ve=h.get(ne);ve===void 0&&(ve=new WeakMap,h.set(ne,ve));let Le=ve.get(j);Le===void 0&&(Le=s.getUniformBlockIndex(ne,j.name),ve.set(j,Le))}function De(j,ne){const Le=h.get(ne).get(j);u.get(ne)!==Le&&(s.uniformBlockBinding(ne,Le,j.__bindingPointIndex),u.set(ne,Le))}function Ze(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},q=null,Y={},d={},g=new WeakMap,v=[],m=null,p=!1,S=null,_=null,M=null,y=null,A=null,R=null,I=null,x=!1,w=null,Z=null,k=null,D=null,F=null,z.set(0,0,s.canvas.width,s.canvas.height),T.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:E,disable:G,bindFramebuffer:oe,drawBuffers:Q,useProgram:le,setBlending:ie,setMaterial:pe,setFlipSided:ue,setCullFace:Se,setLineWidth:he,setPolygonOffset:xe,setScissorTest:Te,activeTexture:de,bindTexture:C,unbindTexture:b,compressedTexImage2D:K,compressedTexImage3D:re,texImage2D:Ae,texImage3D:we,updateUBOMapping:Pe,uniformBlockBinding:De,texStorage2D:ee,texStorage3D:be,texSubImage2D:ge,texSubImage3D:me,compressedTexSubImage2D:B,compressedTexSubImage3D:ae,scissor:Ee,viewport:ye,reset:Ze}}function Wm(s,e,t,i,n,r,a){const o=n.isWebGL2,c=n.maxTextures,l=n.maxCubemapSize,u=n.maxTextureSize,h=n.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let v;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(C,b){return p?new OffscreenCanvas(C,b):mr("canvas")}function _(C,b,K,re){let ge=1;if((C.width>re||C.height>re)&&(ge=re/Math.max(C.width,C.height)),ge<1||b===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const me=b?$u:Math.floor,B=me(ge*C.width),ae=me(ge*C.height);v===void 0&&(v=S(B,ae));const ee=K?S(B,ae):v;return ee.width=B,ee.height=ae,ee.getContext("2d").drawImage(C,0,0,B,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+B+"x"+ae+")."),ee}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function M(C){return Ho(C.width)&&Ho(C.height)}function y(C){return o?!1:C.wrapS!==Zt||C.wrapT!==Zt||C.minFilter!==bt&&C.minFilter!==Lt}function A(C,b){return C.generateMipmaps&&b&&C.minFilter!==bt&&C.minFilter!==Lt}function R(C){s.generateMipmap(C)}function I(C,b,K,re,ge=!1){if(o===!1)return b;if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let me=b;return b===s.RED&&(K===s.FLOAT&&(me=s.R32F),K===s.HALF_FLOAT&&(me=s.R16F),K===s.UNSIGNED_BYTE&&(me=s.R8)),b===s.RG&&(K===s.FLOAT&&(me=s.RG32F),K===s.HALF_FLOAT&&(me=s.RG16F),K===s.UNSIGNED_BYTE&&(me=s.RG8)),b===s.RGBA&&(K===s.FLOAT&&(me=s.RGBA32F),K===s.HALF_FLOAT&&(me=s.RGBA16F),K===s.UNSIGNED_BYTE&&(me=re===Xe&&ge===!1?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT_4_4_4_4&&(me=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(me=s.RGB5_A1)),(me===s.R16F||me===s.R32F||me===s.RG16F||me===s.RG32F||me===s.RGBA16F||me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function x(C,b,K){return A(C,K)===!0||C.isFramebufferTexture&&C.minFilter!==bt&&C.minFilter!==Lt?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function w(C){return C===bt||C===vo||C===Ds?s.NEAREST:s.LINEAR}function Z(C){const b=C.target;b.removeEventListener("dispose",Z),D(b),b.isVideoTexture&&g.delete(b)}function k(C){const b=C.target;b.removeEventListener("dispose",k),L(b)}function D(C){const b=i.get(C);if(b.__webglInit===void 0)return;const K=C.source,re=m.get(K);if(re){const ge=re[b.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&F(C),Object.keys(re).length===0&&m.delete(K)}i.remove(C)}function F(C){const b=i.get(C);s.deleteTexture(b.__webglTexture);const K=C.source,re=m.get(K);delete re[b.__cacheKey],a.memory.textures--}function L(C){const b=C.texture,K=i.get(C),re=i.get(b);if(re.__webglTexture!==void 0&&(s.deleteTexture(re.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++)s.deleteFramebuffer(K.__webglFramebuffer[ge]),K.__webglDepthbuffer&&s.deleteRenderbuffer(K.__webglDepthbuffer[ge]);else{if(s.deleteFramebuffer(K.__webglFramebuffer),K.__webglDepthbuffer&&s.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&s.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let ge=0;ge<K.__webglColorRenderbuffer.length;ge++)K.__webglColorRenderbuffer[ge]&&s.deleteRenderbuffer(K.__webglColorRenderbuffer[ge]);K.__webglDepthRenderbuffer&&s.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ge=0,me=b.length;ge<me;ge++){const B=i.get(b[ge]);B.__webglTexture&&(s.deleteTexture(B.__webglTexture),a.memory.textures--),i.remove(b[ge])}i.remove(b),i.remove(C)}let W=0;function J(){W=0}function $(){const C=W;return C>=c&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+c),W+=1,C}function q(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function Y(C,b){const K=i.get(C);if(C.isVideoTexture&&Te(C),C.isRenderTargetTexture===!1&&C.version>0&&K.__version!==C.version){const re=C.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(K,C,b);return}}t.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+b)}function O(C,b){const K=i.get(C);if(C.version>0&&K.__version!==C.version){G(K,C,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+b)}function H(C,b){const K=i.get(C);if(C.version>0&&K.__version!==C.version){G(K,C,b);return}t.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+b)}function z(C,b){const K=i.get(C);if(C.version>0&&K.__version!==C.version){oe(K,C,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+b)}const T={[ba]:s.REPEAT,[Zt]:s.CLAMP_TO_EDGE,[Ta]:s.MIRRORED_REPEAT},P={[bt]:s.NEAREST,[vo]:s.NEAREST_MIPMAP_NEAREST,[Ds]:s.NEAREST_MIPMAP_LINEAR,[Lt]:s.LINEAR,[Du]:s.LINEAR_MIPMAP_NEAREST,[dr]:s.LINEAR_MIPMAP_LINEAR};function N(C,b,K){if(K?(s.texParameteri(C,s.TEXTURE_WRAP_S,T[b.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,T[b.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,T[b.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,P[b.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,P[b.minFilter])):(s.texParameteri(C,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(C,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(b.wrapS!==Zt||b.wrapT!==Zt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(C,s.TEXTURE_MAG_FILTER,w(b.magFilter)),s.texParameteri(C,s.TEXTURE_MIN_FILTER,w(b.minFilter)),b.minFilter!==bt&&b.minFilter!==Lt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===bt||b.minFilter!==Ds&&b.minFilter!==dr||b.type===kn&&e.has("OES_texture_float_linear")===!1||o===!1&&b.type===pr&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(s.texParameterf(C,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,n.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function E(C,b){let K=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",Z));const re=b.source;let ge=m.get(re);ge===void 0&&(ge={},m.set(re,ge));const me=q(b);if(me!==C.__cacheKey){ge[me]===void 0&&(ge[me]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,K=!0),ge[me].usedTimes++;const B=ge[C.__cacheKey];B!==void 0&&(ge[C.__cacheKey].usedTimes--,B.usedTimes===0&&F(b)),C.__cacheKey=me,C.__webglTexture=ge[me].texture}return K}function G(C,b,K){let re=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(re=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(re=s.TEXTURE_3D);const ge=E(C,b),me=b.source;t.bindTexture(re,C.__webglTexture,s.TEXTURE0+K);const B=i.get(me);if(me.version!==B.__version||ge===!0){t.activeTexture(s.TEXTURE0+K),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const ae=y(b)&&M(b.image)===!1;let ee=_(b.image,ae,!1,u);ee=de(b,ee);const be=M(ee)||o,Ae=r.convert(b.format,b.colorSpace);let we=r.convert(b.type),Ee=I(b.internalFormat,Ae,we,b.colorSpace);N(re,b,be);let ye;const Pe=b.mipmaps,De=o&&b.isVideoTexture!==!0,Ze=B.__version===void 0||ge===!0,j=x(b,ee,be);if(b.isDepthTexture)Ee=s.DEPTH_COMPONENT,o?b.type===kn?Ee=s.DEPTH_COMPONENT32F:b.type===Bn?Ee=s.DEPTH_COMPONENT24:b.type===Di?Ee=s.DEPTH24_STENCIL8:Ee=s.DEPTH_COMPONENT16:b.type===kn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===zn&&Ee===s.DEPTH_COMPONENT&&b.type!==lc&&b.type!==Bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Bn,we=r.convert(b.type)),b.format===Bi&&Ee===s.DEPTH_COMPONENT&&(Ee=s.DEPTH_STENCIL,b.type!==Di&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Di,we=r.convert(b.type))),Ze&&(De?t.texStorage2D(s.TEXTURE_2D,1,Ee,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,Ee,ee.width,ee.height,0,Ae,we,null));else if(b.isDataTexture)if(Pe.length>0&&be){De&&Ze&&t.texStorage2D(s.TEXTURE_2D,j,Ee,Pe[0].width,Pe[0].height);for(let ne=0,ve=Pe.length;ne<ve;ne++)ye=Pe[ne],De?t.texSubImage2D(s.TEXTURE_2D,ne,0,0,ye.width,ye.height,Ae,we,ye.data):t.texImage2D(s.TEXTURE_2D,ne,Ee,ye.width,ye.height,0,Ae,we,ye.data);b.generateMipmaps=!1}else De?(Ze&&t.texStorage2D(s.TEXTURE_2D,j,Ee,ee.width,ee.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ee.width,ee.height,Ae,we,ee.data)):t.texImage2D(s.TEXTURE_2D,0,Ee,ee.width,ee.height,0,Ae,we,ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){De&&Ze&&t.texStorage3D(s.TEXTURE_2D_ARRAY,j,Ee,Pe[0].width,Pe[0].height,ee.depth);for(let ne=0,ve=Pe.length;ne<ve;ne++)ye=Pe[ne],b.format!==Kt?Ae!==null?De?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,ye.width,ye.height,ee.depth,Ae,ye.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ne,Ee,ye.width,ye.height,ee.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,ye.width,ye.height,ee.depth,Ae,we,ye.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ne,Ee,ye.width,ye.height,ee.depth,0,Ae,we,ye.data)}else{De&&Ze&&t.texStorage2D(s.TEXTURE_2D,j,Ee,Pe[0].width,Pe[0].height);for(let ne=0,ve=Pe.length;ne<ve;ne++)ye=Pe[ne],b.format!==Kt?Ae!==null?De?t.compressedTexSubImage2D(s.TEXTURE_2D,ne,0,0,ye.width,ye.height,Ae,ye.data):t.compressedTexImage2D(s.TEXTURE_2D,ne,Ee,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage2D(s.TEXTURE_2D,ne,0,0,ye.width,ye.height,Ae,we,ye.data):t.texImage2D(s.TEXTURE_2D,ne,Ee,ye.width,ye.height,0,Ae,we,ye.data)}else if(b.isDataArrayTexture)De?(Ze&&t.texStorage3D(s.TEXTURE_2D_ARRAY,j,Ee,ee.width,ee.height,ee.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Ae,we,ee.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ee,ee.width,ee.height,ee.depth,0,Ae,we,ee.data);else if(b.isData3DTexture)De?(Ze&&t.texStorage3D(s.TEXTURE_3D,j,Ee,ee.width,ee.height,ee.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Ae,we,ee.data)):t.texImage3D(s.TEXTURE_3D,0,Ee,ee.width,ee.height,ee.depth,0,Ae,we,ee.data);else if(b.isFramebufferTexture){if(Ze)if(De)t.texStorage2D(s.TEXTURE_2D,j,Ee,ee.width,ee.height);else{let ne=ee.width,ve=ee.height;for(let Le=0;Le<j;Le++)t.texImage2D(s.TEXTURE_2D,Le,Ee,ne,ve,0,Ae,we,null),ne>>=1,ve>>=1}}else if(Pe.length>0&&be){De&&Ze&&t.texStorage2D(s.TEXTURE_2D,j,Ee,Pe[0].width,Pe[0].height);for(let ne=0,ve=Pe.length;ne<ve;ne++)ye=Pe[ne],De?t.texSubImage2D(s.TEXTURE_2D,ne,0,0,Ae,we,ye):t.texImage2D(s.TEXTURE_2D,ne,Ee,Ae,we,ye);b.generateMipmaps=!1}else De?(Ze&&t.texStorage2D(s.TEXTURE_2D,j,Ee,ee.width,ee.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae,we,ee)):t.texImage2D(s.TEXTURE_2D,0,Ee,Ae,we,ee);A(b,be)&&R(re),B.__version=me.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function oe(C,b,K){if(b.image.length!==6)return;const re=E(C,b),ge=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+K);const me=i.get(ge);if(ge.version!==me.__version||re===!0){t.activeTexture(s.TEXTURE0+K),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const B=b.isCompressedTexture||b.image[0].isCompressedTexture,ae=b.image[0]&&b.image[0].isDataTexture,ee=[];for(let ne=0;ne<6;ne++)!B&&!ae?ee[ne]=_(b.image[ne],!1,!0,l):ee[ne]=ae?b.image[ne].image:b.image[ne],ee[ne]=de(b,ee[ne]);const be=ee[0],Ae=M(be)||o,we=r.convert(b.format,b.colorSpace),Ee=r.convert(b.type),ye=I(b.internalFormat,we,Ee,b.colorSpace),Pe=o&&b.isVideoTexture!==!0,De=me.__version===void 0||re===!0;let Ze=x(b,be,Ae);N(s.TEXTURE_CUBE_MAP,b,Ae);let j;if(B){Pe&&De&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ze,ye,be.width,be.height);for(let ne=0;ne<6;ne++){j=ee[ne].mipmaps;for(let ve=0;ve<j.length;ve++){const Le=j[ve];b.format!==Kt?we!==null?Pe?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,0,0,Le.width,Le.height,we,Le.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,ye,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,0,0,Le.width,Le.height,we,Ee,Le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,ye,Le.width,Le.height,0,we,Ee,Le.data)}}}else{j=b.mipmaps,Pe&&De&&(j.length>0&&Ze++,t.texStorage2D(s.TEXTURE_CUBE_MAP,Ze,ye,ee[0].width,ee[0].height));for(let ne=0;ne<6;ne++)if(ae){Pe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ee[ne].width,ee[ne].height,we,Ee,ee[ne].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ye,ee[ne].width,ee[ne].height,0,we,Ee,ee[ne].data);for(let ve=0;ve<j.length;ve++){const Re=j[ve].image[ne].image;Pe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,0,0,Re.width,Re.height,we,Ee,Re.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,ye,Re.width,Re.height,0,we,Ee,Re.data)}}else{Pe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,we,Ee,ee[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ye,we,Ee,ee[ne]);for(let ve=0;ve<j.length;ve++){const Le=j[ve];Pe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,0,0,we,Ee,Le.image[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,ye,we,Ee,Le.image[ne])}}}A(b,Ae)&&R(s.TEXTURE_CUBE_MAP),me.__version=ge.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Q(C,b,K,re,ge){const me=r.convert(K.format,K.colorSpace),B=r.convert(K.type),ae=I(K.internalFormat,me,B,K.colorSpace);i.get(b).__hasExternalTextures||(ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?t.texImage3D(ge,0,ae,b.width,b.height,b.depth,0,me,B,null):t.texImage2D(ge,0,ae,b.width,b.height,0,me,B,null)),t.bindFramebuffer(s.FRAMEBUFFER,C),xe(b)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,ge,i.get(K).__webglTexture,0,he(b)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,re,ge,i.get(K).__webglTexture,0),t.bindFramebuffer(s.FRAMEBUFFER,null)}function le(C,b,K){if(s.bindRenderbuffer(s.RENDERBUFFER,C),b.depthBuffer&&!b.stencilBuffer){let re=s.DEPTH_COMPONENT16;if(K||xe(b)){const ge=b.depthTexture;ge&&ge.isDepthTexture&&(ge.type===kn?re=s.DEPTH_COMPONENT32F:ge.type===Bn&&(re=s.DEPTH_COMPONENT24));const me=he(b);xe(b)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,me,re,b.width,b.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,me,re,b.width,b.height)}else s.renderbufferStorage(s.RENDERBUFFER,re,b.width,b.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,C)}else if(b.depthBuffer&&b.stencilBuffer){const re=he(b);K&&xe(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,re,s.DEPTH24_STENCIL8,b.width,b.height):xe(b)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,re,s.DEPTH24_STENCIL8,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,C)}else{const re=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ge=0;ge<re.length;ge++){const me=re[ge],B=r.convert(me.format,me.colorSpace),ae=r.convert(me.type),ee=I(me.internalFormat,B,ae,me.colorSpace),be=he(b);K&&xe(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,be,ee,b.width,b.height):xe(b)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,ee,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ee,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function X(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Y(b.depthTexture,0);const re=i.get(b.depthTexture).__webglTexture,ge=he(b);if(b.depthTexture.format===zn)xe(b)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,re,0,ge):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,re,0);else if(b.depthTexture.format===Bi)xe(b)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,re,0,ge):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function te(C){const b=i.get(C),K=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");X(b.__webglFramebuffer,C)}else if(K){b.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[re]),b.__webglDepthbuffer[re]=s.createRenderbuffer(),le(b.__webglDepthbuffer[re],C,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=s.createRenderbuffer(),le(b.__webglDepthbuffer,C,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function ie(C,b,K){const re=i.get(C);b!==void 0&&Q(re.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D),K!==void 0&&te(C)}function pe(C){const b=C.texture,K=i.get(C),re=i.get(b);C.addEventListener("dispose",k),C.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=b.version,a.memory.textures++);const ge=C.isWebGLCubeRenderTarget===!0,me=C.isWebGLMultipleRenderTargets===!0,B=M(C)||o;if(ge){K.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)K.__webglFramebuffer[ae]=s.createFramebuffer()}else{if(K.__webglFramebuffer=s.createFramebuffer(),me)if(n.drawBuffers){const ae=C.texture;for(let ee=0,be=ae.length;ee<be;ee++){const Ae=i.get(ae[ee]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&xe(C)===!1){const ae=me?b:[b];K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ee=0;ee<ae.length;ee++){const be=ae[ee];K.__webglColorRenderbuffer[ee]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[ee]);const Ae=r.convert(be.format,be.colorSpace),we=r.convert(be.type),Ee=I(be.internalFormat,Ae,we,be.colorSpace,C.isXRRenderTarget===!0),ye=he(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,ye,Ee,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ee,s.RENDERBUFFER,K.__webglColorRenderbuffer[ee])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),le(K.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ge){t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture),N(s.TEXTURE_CUBE_MAP,b,B);for(let ae=0;ae<6;ae++)Q(K.__webglFramebuffer[ae],C,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae);A(b,B)&&R(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){const ae=C.texture;for(let ee=0,be=ae.length;ee<be;ee++){const Ae=ae[ee],we=i.get(Ae);t.bindTexture(s.TEXTURE_2D,we.__webglTexture),N(s.TEXTURE_2D,Ae,B),Q(K.__webglFramebuffer,C,Ae,s.COLOR_ATTACHMENT0+ee,s.TEXTURE_2D),A(Ae,B)&&R(s.TEXTURE_2D)}t.unbindTexture()}else{let ae=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?ae=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,re.__webglTexture),N(ae,b,B),Q(K.__webglFramebuffer,C,b,s.COLOR_ATTACHMENT0,ae),A(b,B)&&R(ae),t.unbindTexture()}C.depthBuffer&&te(C)}function ue(C){const b=M(C)||o,K=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let re=0,ge=K.length;re<ge;re++){const me=K[re];if(A(me,b)){const B=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ae=i.get(me).__webglTexture;t.bindTexture(B,ae),R(B),t.unbindTexture()}}}function Se(C){if(o&&C.samples>0&&xe(C)===!1){const b=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],K=C.width,re=C.height;let ge=s.COLOR_BUFFER_BIT;const me=[],B=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=i.get(C),ee=C.isWebGLMultipleRenderTargets===!0;if(ee)for(let be=0;be<b.length;be++)t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let be=0;be<b.length;be++){me.push(s.COLOR_ATTACHMENT0+be),C.depthBuffer&&me.push(B);const Ae=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(Ae===!1&&(C.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),ee&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ae.__webglColorRenderbuffer[be]),Ae===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[B]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[B])),ee){const we=i.get(b[be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,we,0)}s.blitFramebuffer(0,0,K,re,0,0,K,re,ge,s.NEAREST),d&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,me)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ee)for(let be=0;be<b.length;be++){t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,ae.__webglColorRenderbuffer[be]);const Ae=i.get(b[be]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,Ae,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function he(C){return Math.min(h,C.samples)}function xe(C){const b=i.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Te(C){const b=a.render.frame;g.get(C)!==b&&(g.set(C,b),C.update())}function de(C,b){const K=C.colorSpace,re=C.format,ge=C.type;return C.isCompressedTexture===!0||C.format===Aa||K!==an&&K!==Hn&&(K===Xe?o===!1?e.has("EXT_sRGB")===!0&&re===Kt?(C.format=Aa,C.minFilter=Lt,C.generateMipmaps=!1):b=dc.sRGBToLinear(b):(re!==Kt||ge!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),b}this.allocateTextureUnit=$,this.resetTextureUnits=J,this.setTexture2D=Y,this.setTexture2DArray=O,this.setTexture3D=H,this.setTextureCube=z,this.rebindTextures=ie,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=xe}function Xm(s,e,t){const i=t.isWebGL2;function n(r,a=Hn){let o;if(r===Wn)return s.UNSIGNED_BYTE;if(r===Ou)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Bu)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Iu)return s.BYTE;if(r===Fu)return s.SHORT;if(r===lc)return s.UNSIGNED_SHORT;if(r===Nu)return s.INT;if(r===Bn)return s.UNSIGNED_INT;if(r===kn)return s.FLOAT;if(r===pr)return i?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===ku)return s.ALPHA;if(r===Kt)return s.RGBA;if(r===zu)return s.LUMINANCE;if(r===Gu)return s.LUMINANCE_ALPHA;if(r===zn)return s.DEPTH_COMPONENT;if(r===Bi)return s.DEPTH_STENCIL;if(r===Aa)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Hu)return s.RED;if(r===Vu)return s.RED_INTEGER;if(r===Wu)return s.RG;if(r===Xu)return s.RG_INTEGER;if(r===ju)return s.RGBA_INTEGER;if(r===Is||r===Fs||r===Ns||r===Os)if(a===Xe)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Is)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Fs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ns)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Os)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Is)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Fs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ns)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Os)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===_o||r===xo||r===yo||r===Mo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===_o)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===xo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===yo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Mo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Yu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===So||r===Eo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===So)return a===Xe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Eo)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===bo||r===To||r===wo||r===Ao||r===Ro||r===Co||r===Lo||r===Po||r===Uo||r===Do||r===Io||r===Fo||r===No||r===Oo)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===bo)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===To)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===wo)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ao)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ro)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Co)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Lo)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Po)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Uo)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Do)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Io)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Fo)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===No)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Oo)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Bs)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Bs)return a===Xe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===qu||r===Bo||r===ko||r===zo)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Bs)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Bo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ko)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===zo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Di?i?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:n}}class jm extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class qr extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ym={type:"move"};class la{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ym)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new qr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class qm extends wt{constructor(e,t,i,n,r,a,o,c,l,u){if(u=u!==void 0?u:zn,u!==zn&&u!==Bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===zn&&(i=Bn),i===void 0&&u===Bi&&(i=Di),super(null,n,r,a,o,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:bt,this.minFilter=c!==void 0?c:bt,this.flipY=!1,this.generateMipmaps=!1}}class Zm extends Cn{constructor(e,t){super();const i=this;let n=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null;const v=t.getContextAttributes();let m=null,p=null;const S=[],_=[],M=new Set,y=new Map,A=new Bt;A.layers.enable(1),A.viewport=new it;const R=new Bt;R.layers.enable(2),R.viewport=new it;const I=[A,R],x=new jm;x.layers.enable(1),x.layers.enable(2);let w=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let T=S[z];return T===void 0&&(T=new la,S[z]=T),T.getTargetRaySpace()},this.getControllerGrip=function(z){let T=S[z];return T===void 0&&(T=new la,S[z]=T),T.getGripSpace()},this.getHand=function(z){let T=S[z];return T===void 0&&(T=new la,S[z]=T),T.getHandSpace()};function k(z){const T=_.indexOf(z.inputSource);if(T===-1)return;const P=S[T];P!==void 0&&(P.update(z.inputSource,z.frame,l||a),P.dispatchEvent({type:z.type,data:z.inputSource}))}function D(){n.removeEventListener("select",k),n.removeEventListener("selectstart",k),n.removeEventListener("selectend",k),n.removeEventListener("squeeze",k),n.removeEventListener("squeezestart",k),n.removeEventListener("squeezeend",k),n.removeEventListener("end",D),n.removeEventListener("inputsourceschange",F);for(let z=0;z<S.length;z++){const T=_[z];T!==null&&(_[z]=null,S[z].disconnect(T))}w=null,Z=null,e.setRenderTarget(m),d=null,f=null,h=null,n=null,p=null,H.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(z){if(n=z,n!==null){if(m=e.getRenderTarget(),n.addEventListener("select",k),n.addEventListener("selectstart",k),n.addEventListener("selectend",k),n.addEventListener("squeeze",k),n.addEventListener("squeezestart",k),n.addEventListener("squeezeend",k),n.addEventListener("end",D),n.addEventListener("inputsourceschange",F),v.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const T={antialias:n.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(n,t,T),n.updateRenderState({baseLayer:d}),p=new Xn(d.framebufferWidth,d.framebufferHeight,{format:Kt,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let T=null,P=null,N=null;v.depth&&(N=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,T=v.stencil?Bi:zn,P=v.stencil?Di:Bn);const E={colorFormat:t.RGBA8,depthFormat:N,scaleFactor:r};h=new XRWebGLBinding(n,t),f=h.createProjectionLayer(E),n.updateRenderState({layers:[f]}),p=new Xn(f.textureWidth,f.textureHeight,{format:Kt,type:Wn,depthTexture:new qm(f.textureWidth,f.textureHeight,P,void 0,void 0,void 0,void 0,void 0,void 0,T),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const G=e.properties.get(p);G.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await n.requestReferenceSpace(o),H.setContext(n),H.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function F(z){for(let T=0;T<z.removed.length;T++){const P=z.removed[T],N=_.indexOf(P);N>=0&&(_[N]=null,S[N].disconnect(P))}for(let T=0;T<z.added.length;T++){const P=z.added[T];let N=_.indexOf(P);if(N===-1){for(let G=0;G<S.length;G++)if(G>=_.length){_.push(P),N=G;break}else if(_[G]===null){_[G]=P,N=G;break}if(N===-1)break}const E=S[N];E&&E.connect(P)}}const L=new V,W=new V;function J(z,T,P){L.setFromMatrixPosition(T.matrixWorld),W.setFromMatrixPosition(P.matrixWorld);const N=L.distanceTo(W),E=T.projectionMatrix.elements,G=P.projectionMatrix.elements,oe=E[14]/(E[10]-1),Q=E[14]/(E[10]+1),le=(E[9]+1)/E[5],X=(E[9]-1)/E[5],te=(E[8]-1)/E[0],ie=(G[8]+1)/G[0],pe=oe*te,ue=oe*ie,Se=N/(-te+ie),he=Se*-te;T.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(he),z.translateZ(Se),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const xe=oe+Se,Te=Q+Se,de=pe-he,C=ue+(N-he),b=le*Q/Te*xe,K=X*Q/Te*xe;z.projectionMatrix.makePerspective(de,C,b,K,xe,Te),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function $(z,T){T===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(T.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(n===null)return;x.near=R.near=A.near=z.near,x.far=R.far=A.far=z.far,(w!==x.near||Z!==x.far)&&(n.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,Z=x.far);const T=z.parent,P=x.cameras;$(x,T);for(let N=0;N<P.length;N++)$(P[N],T);P.length===2?J(x,A,R):x.projectionMatrix.copy(A.projectionMatrix),q(z,x,T)};function q(z,T,P){P===null?z.matrix.copy(T.matrixWorld):(z.matrix.copy(P.matrixWorld),z.matrix.invert(),z.matrix.multiply(T.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0);const N=z.children;for(let E=0,G=N.length;E<G;E++)N[E].updateMatrixWorld(!0);z.projectionMatrix.copy(T.projectionMatrix),z.projectionMatrixInverse.copy(T.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Ra*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(z){c=z,f!==null&&(f.fixedFoveation=z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=z)},this.getPlanes=function(){return M};let Y=null;function O(z,T){if(u=T.getViewerPose(l||a),g=T,u!==null){const P=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let N=!1;P.length!==x.cameras.length&&(x.cameras.length=0,N=!0);for(let E=0;E<P.length;E++){const G=P[E];let oe=null;if(d!==null)oe=d.getViewport(G);else{const le=h.getViewSubImage(f,G);oe=le.viewport,E===0&&(e.setRenderTargetTextures(p,le.colorTexture,f.ignoreDepthValues?void 0:le.depthStencilTexture),e.setRenderTarget(p))}let Q=I[E];Q===void 0&&(Q=new Bt,Q.layers.enable(E),Q.viewport=new it,I[E]=Q),Q.matrix.fromArray(G.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(G.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(oe.x,oe.y,oe.width,oe.height),E===0&&(x.matrix.copy(Q.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),N===!0&&x.cameras.push(Q)}}for(let P=0;P<S.length;P++){const N=_[P],E=S[P];N!==null&&E!==void 0&&E.update(N,T,l||a)}if(Y&&Y(z,T),T.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:T.detectedPlanes});let P=null;for(const N of M)T.detectedPlanes.has(N)||(P===null&&(P=[]),P.push(N));if(P!==null)for(const N of P)M.delete(N),y.delete(N),i.dispatchEvent({type:"planeremoved",data:N});for(const N of T.detectedPlanes)if(!M.has(N))M.add(N),y.set(N,T.lastChangedTime),i.dispatchEvent({type:"planeadded",data:N});else{const E=y.get(N);N.lastChangedTime>E&&(y.set(N,N.lastChangedTime),i.dispatchEvent({type:"planechanged",data:N}))}}g=null}const H=new Ec;H.setAnimationLoop(O),this.setAnimationLoop=function(z){Y=z},this.dispose=function(){}}}function Km(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,yc(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,S,_,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,S,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Tt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Tt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const _=s.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Tt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Jm(s,e,t,i){let n={},r={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(S,_){const M=_.program;i.uniformBlockBinding(S,M)}function l(S,_){let M=n[S.id];M===void 0&&(g(S),M=u(S),n[S.id]=M,S.addEventListener("dispose",m));const y=_.program;i.updateUBOMapping(S,y);const A=e.render.frame;r[S.id]!==A&&(f(S),r[S.id]=A)}function u(S){const _=h();S.__bindingPointIndex=_;const M=s.createBuffer(),y=S.__size,A=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,y,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,M),M}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const _=n[S.id],M=S.uniforms,y=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let A=0,R=M.length;A<R;A++){const I=M[A];if(d(I,A,y)===!0){const x=I.__offset,w=Array.isArray(I.value)?I.value:[I.value];let Z=0;for(let k=0;k<w.length;k++){const D=w[k],F=v(D);typeof D=="number"?(I.__data[0]=D,s.bufferSubData(s.UNIFORM_BUFFER,x+Z,I.__data)):D.isMatrix3?(I.__data[0]=D.elements[0],I.__data[1]=D.elements[1],I.__data[2]=D.elements[2],I.__data[3]=D.elements[0],I.__data[4]=D.elements[3],I.__data[5]=D.elements[4],I.__data[6]=D.elements[5],I.__data[7]=D.elements[0],I.__data[8]=D.elements[6],I.__data[9]=D.elements[7],I.__data[10]=D.elements[8],I.__data[11]=D.elements[0]):(D.toArray(I.__data,Z),Z+=F.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,x,I.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(S,_,M){const y=S.value;if(M[_]===void 0){if(typeof y=="number")M[_]=y;else{const A=Array.isArray(y)?y:[y],R=[];for(let I=0;I<A.length;I++)R.push(A[I].clone());M[_]=R}return!0}else if(typeof y=="number"){if(M[_]!==y)return M[_]=y,!0}else{const A=Array.isArray(M[_])?M[_]:[M[_]],R=Array.isArray(y)?y:[y];for(let I=0;I<A.length;I++){const x=A[I];if(x.equals(R[I])===!1)return x.copy(R[I]),!0}}return!1}function g(S){const _=S.uniforms;let M=0;const y=16;let A=0;for(let R=0,I=_.length;R<I;R++){const x=_[R],w={boundary:0,storage:0},Z=Array.isArray(x.value)?x.value:[x.value];for(let k=0,D=Z.length;k<D;k++){const F=Z[k],L=v(F);w.boundary+=L.boundary,w.storage+=L.storage}if(x.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=M,R>0){A=M%y;const k=y-A;A!==0&&k-w.boundary<0&&(M+=y-A,x.__offset=M)}M+=w.storage}return A=M%y,A>0&&(M+=y-A),S.__size=M,S.__cache={},this}function v(S){const _={boundary:0,storage:0};return typeof S=="number"?(_.boundary=4,_.storage=4):S.isVector2?(_.boundary=8,_.storage=8):S.isVector3||S.isColor?(_.boundary=16,_.storage=12):S.isVector4?(_.boundary=16,_.storage=16):S.isMatrix3?(_.boundary=48,_.storage=48):S.isMatrix4?(_.boundary=64,_.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),_}function m(S){const _=S.target;_.removeEventListener("dispose",m);const M=a.indexOf(_.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(n[_.id]),delete n[_.id],delete r[_.id]}function p(){for(const S in n)s.deleteBuffer(n[S]);a=[],n={},r={}}return{bind:c,update:l,dispose:p}}function Qm(){const s=mr("canvas");return s.style.display="block",s}class Pc{constructor(e={}){const{canvas:t=Qm(),context:i=null,depth:n=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;let d=null,g=null;const v=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Xe,this.useLegacyLights=!0,this.toneMapping=gn,this.toneMappingExposure=1;const p=this;let S=!1,_=0,M=0,y=null,A=-1,R=null;const I=new it,x=new it;let w=null,Z=t.width,k=t.height,D=1,F=null,L=null;const W=new it(0,0,Z,k),J=new it(0,0,Z,k);let $=!1;const q=new Va;let Y=!1,O=!1,H=null;const z=new rt,T=new V,P={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function N(){return y===null?D:1}let E=i;function G(U,ce){for(let fe=0;fe<U.length;fe++){const se=U[fe],_e=t.getContext(se,ce);if(_e!==null)return _e}return null}try{const U={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ba}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",De,!1),E===null){const ce=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&ce.shift(),E=G(ce,U),E===null)throw G(ce)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}E.getShaderPrecisionFormat===void 0&&(E.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let oe,Q,le,X,te,ie,pe,ue,Se,he,xe,Te,de,C,b,K,re,ge,me,B,ae,ee,be,Ae;function we(){oe=new hp(E),Q=new sp(E,oe,e),oe.init(Q),ee=new Xm(E,oe,Q),le=new Vm(E,oe,Q),X=new pp(E),te=new Pm,ie=new Wm(E,oe,le,te,Q,ee,X),pe=new op(p),ue=new up(p),Se=new Th(E,Q),be=new ip(E,oe,Se,Q),he=new fp(E,Se,X,be),xe=new _p(E,he,Se,X),me=new vp(E,Q,ie),K=new ap(te),Te=new Lm(p,pe,ue,oe,Q,be,K),de=new Km(p,te),C=new Dm,b=new km(oe,Q),ge=new np(p,pe,ue,le,xe,f,c),re=new Hm(p,xe,Q),Ae=new Jm(E,X,Q,le),B=new rp(E,oe,X,Q),ae=new dp(E,oe,X,Q),X.programs=Te.programs,p.capabilities=Q,p.extensions=oe,p.properties=te,p.renderLists=C,p.shadowMap=re,p.state=le,p.info=X}we();const Ee=new Zm(p,E);this.xr=Ee,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const U=oe.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=oe.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(U){U!==void 0&&(D=U,this.setSize(Z,k,!1))},this.getSize=function(U){return U.set(Z,k)},this.setSize=function(U,ce,fe=!0){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=U,k=ce,t.width=Math.floor(U*D),t.height=Math.floor(ce*D),fe===!0&&(t.style.width=U+"px",t.style.height=ce+"px"),this.setViewport(0,0,U,ce)},this.getDrawingBufferSize=function(U){return U.set(Z*D,k*D).floor()},this.setDrawingBufferSize=function(U,ce,fe){Z=U,k=ce,D=fe,t.width=Math.floor(U*fe),t.height=Math.floor(ce*fe),this.setViewport(0,0,U,ce)},this.getCurrentViewport=function(U){return U.copy(I)},this.getViewport=function(U){return U.copy(W)},this.setViewport=function(U,ce,fe,se){U.isVector4?W.set(U.x,U.y,U.z,U.w):W.set(U,ce,fe,se),le.viewport(I.copy(W).multiplyScalar(D).floor())},this.getScissor=function(U){return U.copy(J)},this.setScissor=function(U,ce,fe,se){U.isVector4?J.set(U.x,U.y,U.z,U.w):J.set(U,ce,fe,se),le.scissor(x.copy(J).multiplyScalar(D).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(U){le.setScissorTest($=U)},this.setOpaqueSort=function(U){F=U},this.setTransparentSort=function(U){L=U},this.getClearColor=function(U){return U.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(U=!0,ce=!0,fe=!0){let se=0;U&&(se|=E.COLOR_BUFFER_BIT),ce&&(se|=E.DEPTH_BUFFER_BIT),fe&&(se|=E.STENCIL_BUFFER_BIT),E.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",De,!1),C.dispose(),b.dispose(),te.dispose(),pe.dispose(),ue.dispose(),xe.dispose(),be.dispose(),Ae.dispose(),Te.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Re),Ee.removeEventListener("sessionend",Ue),H&&(H.dispose(),H=null),Be.stop()};function ye(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const U=X.autoReset,ce=re.enabled,fe=re.autoUpdate,se=re.needsUpdate,_e=re.type;we(),X.autoReset=U,re.enabled=ce,re.autoUpdate=fe,re.needsUpdate=se,re.type=_e}function De(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function Ze(U){const ce=U.target;ce.removeEventListener("dispose",Ze),j(ce)}function j(U){ne(U),te.remove(U)}function ne(U){const ce=te.get(U).programs;ce!==void 0&&(ce.forEach(function(fe){Te.releaseProgram(fe)}),U.isShaderMaterial&&Te.releaseShaderCache(U))}this.renderBufferDirect=function(U,ce,fe,se,_e,Fe){ce===null&&(ce=P);const Ne=_e.isMesh&&_e.matrixWorld.determinant()<0,ke=Jt(U,ce,fe,se,_e);le.setMaterial(se,Ne);let He=fe.index,We=1;se.wireframe===!0&&(He=he.getWireframeAttribute(fe),We=2);const je=fe.drawRange,Ye=fe.attributes.position;let Qe=je.start*We,ut=(je.start+je.count)*We;Fe!==null&&(Qe=Math.max(Qe,Fe.start*We),ut=Math.min(ut,(Fe.start+Fe.count)*We)),He!==null?(Qe=Math.max(Qe,0),ut=Math.min(ut,He.count)):Ye!=null&&(Qe=Math.max(Qe,0),ut=Math.min(ut,Ye.count));const Mt=ut-Qe;if(Mt<0||Mt===1/0)return;be.setup(_e,se,ke,fe,He);let Ie,tt=B;if(He!==null&&(Ie=Se.get(He),tt=ae,tt.setIndex(Ie)),_e.isMesh)se.wireframe===!0?(le.setLineWidth(se.wireframeLinewidth*N()),tt.setMode(E.LINES)):tt.setMode(E.TRIANGLES);else if(_e.isLine){let Ke=se.linewidth;Ke===void 0&&(Ke=1),le.setLineWidth(Ke*N()),_e.isLineSegments?tt.setMode(E.LINES):_e.isLineLoop?tt.setMode(E.LINE_LOOP):tt.setMode(E.LINE_STRIP)}else _e.isPoints?tt.setMode(E.POINTS):_e.isSprite&&tt.setMode(E.TRIANGLES);if(_e.isInstancedMesh)tt.renderInstances(Qe,Mt,_e.count);else if(fe.isInstancedBufferGeometry){const Ke=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,$t=Math.min(fe.instanceCount,Ke);tt.renderInstances(Qe,Mt,$t)}else tt.render(Qe,Mt)},this.compile=function(U,ce){function fe(se,_e,Fe){se.transparent===!0&&se.side===kt&&se.forceSinglePass===!1?(se.side=Tt,se.needsUpdate=!0,st(se,_e,Fe),se.side=_n,se.needsUpdate=!0,st(se,_e,Fe),se.side=kt):st(se,_e,Fe)}g=b.get(U),g.init(),m.push(g),U.traverseVisible(function(se){se.isLight&&se.layers.test(ce.layers)&&(g.pushLight(se),se.castShadow&&g.pushShadow(se))}),g.setupLights(p.useLegacyLights),U.traverse(function(se){const _e=se.material;if(_e)if(Array.isArray(_e))for(let Fe=0;Fe<_e.length;Fe++){const Ne=_e[Fe];fe(Ne,U,se)}else fe(_e,U,se)}),m.pop(),g=null};let ve=null;function Le(U){ve&&ve(U)}function Re(){Be.stop()}function Ue(){Be.start()}const Be=new Ec;Be.setAnimationLoop(Le),typeof self<"u"&&Be.setContext(self),this.setAnimationLoop=function(U){ve=U,Ee.setAnimationLoop(U),U===null?Be.stop():Be.start()},Ee.addEventListener("sessionstart",Re),Ee.addEventListener("sessionend",Ue),this.render=function(U,ce){if(ce!==void 0&&ce.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ce.parent===null&&ce.matrixWorldAutoUpdate===!0&&ce.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(ce),ce=Ee.getCamera()),U.isScene===!0&&U.onBeforeRender(p,U,ce,y),g=b.get(U,m.length),g.init(),m.push(g),z.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),q.setFromProjectionMatrix(z),O=this.localClippingEnabled,Y=K.init(this.clippingPlanes,O),d=C.get(U,v.length),d.init(),v.push(d),Ve(U,ce,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(F,L),Y===!0&&K.beginShadows();const fe=g.state.shadowsArray;if(re.render(fe,U,ce),Y===!0&&K.endShadows(),this.info.autoReset===!0&&this.info.reset(),ge.render(d,U),g.setupLights(p.useLegacyLights),ce.isArrayCamera){const se=ce.cameras;for(let _e=0,Fe=se.length;_e<Fe;_e++){const Ne=se[_e];Oe(d,U,Ne,Ne.viewport)}}else Oe(d,U,ce);y!==null&&(ie.updateMultisampleRenderTarget(y),ie.updateRenderTargetMipmap(y)),U.isScene===!0&&U.onAfterRender(p,U,ce),be.resetDefaultState(),A=-1,R=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,v.pop(),v.length>0?d=v[v.length-1]:d=null};function Ve(U,ce,fe,se){if(U.visible===!1)return;if(U.layers.test(ce.layers)){if(U.isGroup)fe=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(ce);else if(U.isLight)g.pushLight(U),U.castShadow&&g.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||q.intersectsSprite(U)){se&&T.setFromMatrixPosition(U.matrixWorld).applyMatrix4(z);const Ne=xe.update(U),ke=U.material;ke.visible&&d.push(U,Ne,ke,fe,T.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||q.intersectsObject(U))){U.isSkinnedMesh&&U.skeleton.frame!==X.render.frame&&(U.skeleton.update(),U.skeleton.frame=X.render.frame);const Ne=xe.update(U),ke=U.material;if(se&&(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),T.copy(Ne.boundingSphere.center).applyMatrix4(U.matrixWorld).applyMatrix4(z)),Array.isArray(ke)){const He=Ne.groups;for(let We=0,je=He.length;We<je;We++){const Ye=He[We],Qe=ke[Ye.materialIndex];Qe&&Qe.visible&&d.push(U,Ne,Qe,fe,T.z,Ye)}}else ke.visible&&d.push(U,Ne,ke,fe,T.z,null)}}const Fe=U.children;for(let Ne=0,ke=Fe.length;Ne<ke;Ne++)Ve(Fe[Ne],ce,fe,se)}function Oe(U,ce,fe,se){const _e=U.opaque,Fe=U.transmissive,Ne=U.transparent;g.setupLightsView(fe),Y===!0&&K.setGlobalState(p.clippingPlanes,fe),Fe.length>0&&ze(_e,Fe,ce,fe),se&&le.viewport(I.copy(se)),_e.length>0&&$e(_e,ce,fe),Fe.length>0&&$e(Fe,ce,fe),Ne.length>0&&$e(Ne,ce,fe),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function ze(U,ce,fe,se){if(H===null){const ke=Q.isWebGL2;H=new Xn(1024,1024,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")?pr:Wn,minFilter:dr,samples:ke&&o===!0?4:0})}const _e=p.getRenderTarget();p.setRenderTarget(H),p.clear();const Fe=p.toneMapping;p.toneMapping=gn,$e(U,fe,se),ie.updateMultisampleRenderTarget(H),ie.updateRenderTargetMipmap(H);let Ne=!1;for(let ke=0,He=ce.length;ke<He;ke++){const We=ce[ke],je=We.object,Ye=We.geometry,Qe=We.material,ut=We.group;if(Qe.side===kt&&je.layers.test(se.layers)){const Mt=Qe.side;Qe.side=Tt,Qe.needsUpdate=!0,et(je,fe,se,Ye,Qe,ut),Qe.side=Mt,Qe.needsUpdate=!0,Ne=!0}}Ne===!0&&(ie.updateMultisampleRenderTarget(H),ie.updateRenderTargetMipmap(H)),p.setRenderTarget(_e),p.toneMapping=Fe}function $e(U,ce,fe){const se=ce.isScene===!0?ce.overrideMaterial:null;for(let _e=0,Fe=U.length;_e<Fe;_e++){const Ne=U[_e],ke=Ne.object,He=Ne.geometry,We=se===null?Ne.material:se,je=Ne.group;ke.layers.test(fe.layers)&&et(ke,ce,fe,He,We,je)}}function et(U,ce,fe,se,_e,Fe){U.onBeforeRender(p,ce,fe,se,_e,Fe),U.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),_e.onBeforeRender(p,ce,fe,se,U,Fe),_e.transparent===!0&&_e.side===kt&&_e.forceSinglePass===!1?(_e.side=Tt,_e.needsUpdate=!0,p.renderBufferDirect(fe,ce,se,_e,U,Fe),_e.side=_n,_e.needsUpdate=!0,p.renderBufferDirect(fe,ce,se,_e,U,Fe),_e.side=kt):p.renderBufferDirect(fe,ce,se,_e,U,Fe),U.onAfterRender(p,ce,fe,se,_e,Fe)}function st(U,ce,fe){ce.isScene!==!0&&(ce=P);const se=te.get(U),_e=g.state.lights,Fe=g.state.shadowsArray,Ne=_e.state.version,ke=Te.getParameters(U,_e.state,Fe,ce,fe),He=Te.getProgramCacheKey(ke);let We=se.programs;se.environment=U.isMeshStandardMaterial?ce.environment:null,se.fog=ce.fog,se.envMap=(U.isMeshStandardMaterial?ue:pe).get(U.envMap||se.environment),We===void 0&&(U.addEventListener("dispose",Ze),We=new Map,se.programs=We);let je=We.get(He);if(je!==void 0){if(se.currentProgram===je&&se.lightsStateVersion===Ne)return At(U,ke),je}else ke.uniforms=Te.getUniforms(U),U.onBuild(fe,ke,p),U.onBeforeCompile(ke,p),je=Te.acquireProgram(ke,He),We.set(He,je),se.uniforms=ke.uniforms;const Ye=se.uniforms;(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Ye.clippingPlanes=K.uniform),At(U,ke),se.needsLights=Qt(U),se.lightsStateVersion=Ne,se.needsLights&&(Ye.ambientLightColor.value=_e.state.ambient,Ye.lightProbe.value=_e.state.probe,Ye.directionalLights.value=_e.state.directional,Ye.directionalLightShadows.value=_e.state.directionalShadow,Ye.spotLights.value=_e.state.spot,Ye.spotLightShadows.value=_e.state.spotShadow,Ye.rectAreaLights.value=_e.state.rectArea,Ye.ltc_1.value=_e.state.rectAreaLTC1,Ye.ltc_2.value=_e.state.rectAreaLTC2,Ye.pointLights.value=_e.state.point,Ye.pointLightShadows.value=_e.state.pointShadow,Ye.hemisphereLights.value=_e.state.hemi,Ye.directionalShadowMap.value=_e.state.directionalShadowMap,Ye.directionalShadowMatrix.value=_e.state.directionalShadowMatrix,Ye.spotShadowMap.value=_e.state.spotShadowMap,Ye.spotLightMatrix.value=_e.state.spotLightMatrix,Ye.spotLightMap.value=_e.state.spotLightMap,Ye.pointShadowMap.value=_e.state.pointShadowMap,Ye.pointShadowMatrix.value=_e.state.pointShadowMatrix);const Qe=je.getUniforms(),ut=os.seqWithValue(Qe.seq,Ye);return se.currentProgram=je,se.uniformsList=ut,je}function At(U,ce){const fe=te.get(U);fe.outputColorSpace=ce.outputColorSpace,fe.instancing=ce.instancing,fe.skinning=ce.skinning,fe.morphTargets=ce.morphTargets,fe.morphNormals=ce.morphNormals,fe.morphColors=ce.morphColors,fe.morphTargetsCount=ce.morphTargetsCount,fe.numClippingPlanes=ce.numClippingPlanes,fe.numIntersection=ce.numClipIntersection,fe.vertexAlphas=ce.vertexAlphas,fe.vertexTangents=ce.vertexTangents,fe.toneMapping=ce.toneMapping}function Jt(U,ce,fe,se,_e){ce.isScene!==!0&&(ce=P),ie.resetTextureUnits();const Fe=ce.fog,Ne=se.isMeshStandardMaterial?ce.environment:null,ke=y===null?p.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:an,He=(se.isMeshStandardMaterial?ue:pe).get(se.envMap||Ne),We=se.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,je=!!se.normalMap&&!!fe.attributes.tangent,Ye=!!fe.morphAttributes.position,Qe=!!fe.morphAttributes.normal,ut=!!fe.morphAttributes.color,Mt=se.toneMapped?p.toneMapping:gn,Ie=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,tt=Ie!==void 0?Ie.length:0,Ke=te.get(se),$t=g.state.lights;if(Y===!0&&(O===!0||U!==R)){const gt=U===R&&se.id===A;K.setState(se,U,gt)}let at=!1;se.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==$t.state.version||Ke.outputColorSpace!==ke||_e.isInstancedMesh&&Ke.instancing===!1||!_e.isInstancedMesh&&Ke.instancing===!0||_e.isSkinnedMesh&&Ke.skinning===!1||!_e.isSkinnedMesh&&Ke.skinning===!0||Ke.envMap!==He||se.fog===!0&&Ke.fog!==Fe||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==K.numPlanes||Ke.numIntersection!==K.numIntersection)||Ke.vertexAlphas!==We||Ke.vertexTangents!==je||Ke.morphTargets!==Ye||Ke.morphNormals!==Qe||Ke.morphColors!==ut||Ke.toneMapping!==Mt||Q.isWebGL2===!0&&Ke.morphTargetsCount!==tt)&&(at=!0):(at=!0,Ke.__version=se.version);let en=Ke.currentProgram;at===!0&&(en=st(se,ce,_e));let Kn=!1,tn=!1,yn=!1;const pt=en.getUniforms(),Ft=Ke.uniforms;if(le.useProgram(en.program)&&(Kn=!0,tn=!0,yn=!0),se.id!==A&&(A=se.id,tn=!0),Kn||R!==U){if(pt.setValue(E,"projectionMatrix",U.projectionMatrix),Q.logarithmicDepthBuffer&&pt.setValue(E,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),R!==U&&(R=U,tn=!0,yn=!0),se.isShaderMaterial||se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshStandardMaterial||se.envMap){const gt=pt.map.cameraPosition;gt!==void 0&&gt.setValue(E,T.setFromMatrixPosition(U.matrixWorld))}(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&pt.setValue(E,"isOrthographic",U.isOrthographicCamera===!0),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial||se.isShadowMaterial||_e.isSkinnedMesh)&&pt.setValue(E,"viewMatrix",U.matrixWorldInverse)}if(_e.isSkinnedMesh){pt.setOptional(E,_e,"bindMatrix"),pt.setOptional(E,_e,"bindMatrixInverse");const gt=_e.skeleton;gt&&(Q.floatVertexTextures?(gt.boneTexture===null&&gt.computeBoneTexture(),pt.setValue(E,"boneTexture",gt.boneTexture,ie),pt.setValue(E,"boneTextureSize",gt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Jn=fe.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0&&Q.isWebGL2===!0)&&me.update(_e,fe,en),(tn||Ke.receiveShadow!==_e.receiveShadow)&&(Ke.receiveShadow=_e.receiveShadow,pt.setValue(E,"receiveShadow",_e.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Ft.envMap.value=He,Ft.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),tn&&(pt.setValue(E,"toneMappingExposure",p.toneMappingExposure),Ke.needsLights&&Ht(Ft,yn),Fe&&se.fog===!0&&de.refreshFogUniforms(Ft,Fe),de.refreshMaterialUniforms(Ft,se,D,k,H),os.upload(E,Ke.uniformsList,Ft,ie)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(os.upload(E,Ke.uniformsList,Ft,ie),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&pt.setValue(E,"center",_e.center),pt.setValue(E,"modelViewMatrix",_e.modelViewMatrix),pt.setValue(E,"normalMatrix",_e.normalMatrix),pt.setValue(E,"modelMatrix",_e.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const gt=se.uniformsGroups;for(let Qn=0,Ln=gt.length;Qn<Ln;Qn++)if(Q.isWebGL2){const $n=gt[Qn];Ae.update($n,en),Ae.bind($n,en)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return en}function Ht(U,ce){U.ambientLightColor.needsUpdate=ce,U.lightProbe.needsUpdate=ce,U.directionalLights.needsUpdate=ce,U.directionalLightShadows.needsUpdate=ce,U.pointLights.needsUpdate=ce,U.pointLightShadows.needsUpdate=ce,U.spotLights.needsUpdate=ce,U.spotLightShadows.needsUpdate=ce,U.rectAreaLights.needsUpdate=ce,U.hemisphereLights.needsUpdate=ce}function Qt(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(U,ce,fe){te.get(U.texture).__webglTexture=ce,te.get(U.depthTexture).__webglTexture=fe;const se=te.get(U);se.__hasExternalTextures=!0,se.__hasExternalTextures&&(se.__autoAllocateDepthBuffer=fe===void 0,se.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(U,ce){const fe=te.get(U);fe.__webglFramebuffer=ce,fe.__useDefaultFramebuffer=ce===void 0},this.setRenderTarget=function(U,ce=0,fe=0){y=U,_=ce,M=fe;let se=!0,_e=null,Fe=!1,Ne=!1;if(U){const He=te.get(U);He.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(E.FRAMEBUFFER,null),se=!1):He.__webglFramebuffer===void 0?ie.setupRenderTarget(U):He.__hasExternalTextures&&ie.rebindTextures(U,te.get(U.texture).__webglTexture,te.get(U.depthTexture).__webglTexture);const We=U.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ne=!0);const je=te.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(_e=je[ce],Fe=!0):Q.isWebGL2&&U.samples>0&&ie.useMultisampledRTT(U)===!1?_e=te.get(U).__webglMultisampledFramebuffer:_e=je,I.copy(U.viewport),x.copy(U.scissor),w=U.scissorTest}else I.copy(W).multiplyScalar(D).floor(),x.copy(J).multiplyScalar(D).floor(),w=$;if(le.bindFramebuffer(E.FRAMEBUFFER,_e)&&Q.drawBuffers&&se&&le.drawBuffers(U,_e),le.viewport(I),le.scissor(x),le.setScissorTest(w),Fe){const He=te.get(U.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+ce,He.__webglTexture,fe)}else if(Ne){const He=te.get(U.texture),We=ce||0;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,He.__webglTexture,fe||0,We)}A=-1},this.readRenderTargetPixels=function(U,ce,fe,se,_e,Fe,Ne){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=te.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ne!==void 0&&(ke=ke[Ne]),ke){le.bindFramebuffer(E.FRAMEBUFFER,ke);try{const He=U.texture,We=He.format,je=He.type;if(We!==Kt&&ee.convert(We)!==E.getParameter(E.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ye=je===pr&&(oe.has("EXT_color_buffer_half_float")||Q.isWebGL2&&oe.has("EXT_color_buffer_float"));if(je!==Wn&&ee.convert(je)!==E.getParameter(E.IMPLEMENTATION_COLOR_READ_TYPE)&&!(je===kn&&(Q.isWebGL2||oe.has("OES_texture_float")||oe.has("WEBGL_color_buffer_float")))&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ce>=0&&ce<=U.width-se&&fe>=0&&fe<=U.height-_e&&E.readPixels(ce,fe,se,_e,ee.convert(We),ee.convert(je),Fe)}finally{const He=y!==null?te.get(y).__webglFramebuffer:null;le.bindFramebuffer(E.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(U,ce,fe=0){const se=Math.pow(2,-fe),_e=Math.floor(ce.image.width*se),Fe=Math.floor(ce.image.height*se);ie.setTexture2D(ce,0),E.copyTexSubImage2D(E.TEXTURE_2D,fe,0,0,U.x,U.y,_e,Fe),le.unbindTexture()},this.copyTextureToTexture=function(U,ce,fe,se=0){const _e=ce.image.width,Fe=ce.image.height,Ne=ee.convert(fe.format),ke=ee.convert(fe.type);ie.setTexture2D(fe,0),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,fe.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,fe.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,fe.unpackAlignment),ce.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,se,U.x,U.y,_e,Fe,Ne,ke,ce.image.data):ce.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,se,U.x,U.y,ce.mipmaps[0].width,ce.mipmaps[0].height,Ne,ce.mipmaps[0].data):E.texSubImage2D(E.TEXTURE_2D,se,U.x,U.y,Ne,ke,ce.image),se===0&&fe.generateMipmaps&&E.generateMipmap(E.TEXTURE_2D),le.unbindTexture()},this.copyTextureToTexture3D=function(U,ce,fe,se,_e=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Fe=U.max.x-U.min.x+1,Ne=U.max.y-U.min.y+1,ke=U.max.z-U.min.z+1,He=ee.convert(se.format),We=ee.convert(se.type);let je;if(se.isData3DTexture)ie.setTexture3D(se,0),je=E.TEXTURE_3D;else if(se.isDataArrayTexture)ie.setTexture2DArray(se,0),je=E.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,se.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,se.unpackAlignment);const Ye=E.getParameter(E.UNPACK_ROW_LENGTH),Qe=E.getParameter(E.UNPACK_IMAGE_HEIGHT),ut=E.getParameter(E.UNPACK_SKIP_PIXELS),Mt=E.getParameter(E.UNPACK_SKIP_ROWS),Ie=E.getParameter(E.UNPACK_SKIP_IMAGES),tt=fe.isCompressedTexture?fe.mipmaps[0]:fe.image;E.pixelStorei(E.UNPACK_ROW_LENGTH,tt.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,tt.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,U.min.x),E.pixelStorei(E.UNPACK_SKIP_ROWS,U.min.y),E.pixelStorei(E.UNPACK_SKIP_IMAGES,U.min.z),fe.isDataTexture||fe.isData3DTexture?E.texSubImage3D(je,_e,ce.x,ce.y,ce.z,Fe,Ne,ke,He,We,tt.data):fe.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),E.compressedTexSubImage3D(je,_e,ce.x,ce.y,ce.z,Fe,Ne,ke,He,tt.data)):E.texSubImage3D(je,_e,ce.x,ce.y,ce.z,Fe,Ne,ke,He,We,tt),E.pixelStorei(E.UNPACK_ROW_LENGTH,Ye),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Qe),E.pixelStorei(E.UNPACK_SKIP_PIXELS,ut),E.pixelStorei(E.UNPACK_SKIP_ROWS,Mt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Ie),_e===0&&se.generateMipmaps&&E.generateMipmap(je),le.unbindTexture()},this.initTexture=function(U){U.isCubeTexture?ie.setTextureCube(U,0):U.isData3DTexture?ie.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?ie.setTexture2DArray(U,0):ie.setTexture2D(U,0),le.unbindTexture()},this.resetState=function(){_=0,M=0,y=null,le.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Xe?Gn:cc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Gn?Xe:an}}class $m extends Pc{}$m.prototype.isWebGL1Renderer=!0;class eg extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class tg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=wa,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=vn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const St=new V;class hs{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=An(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=An(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=An(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=An(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),n=nt(n,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new hs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ng extends xn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Mi;const nr=new V,Si=new V,Ei=new V,bi=new Me,ir=new Me,Uc=new rt,Zr=new V,rr=new V,Kr=new V,wl=new Me,ca=new Me,Al=new Me;class Zv extends ct{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",Mi===void 0){Mi=new ht;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new tg(t,5);Mi.setIndex([0,1,2,0,2,3]),Mi.setAttribute("position",new hs(i,3,0,!1)),Mi.setAttribute("uv",new hs(i,2,3,!1))}this.geometry=Mi,this.material=e!==void 0?e:new ng,this.center=new Me(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Si.setFromMatrixScale(this.matrixWorld),Uc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ei.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Si.multiplyScalar(-Ei.z);const i=this.material.rotation;let n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));const a=this.center;Jr(Zr.set(-.5,-.5,0),Ei,a,Si,n,r),Jr(rr.set(.5,-.5,0),Ei,a,Si,n,r),Jr(Kr.set(.5,.5,0),Ei,a,Si,n,r),wl.set(0,0),ca.set(1,0),Al.set(1,1);let o=e.ray.intersectTriangle(Zr,rr,Kr,!1,nr);if(o===null&&(Jr(rr.set(-.5,.5,0),Ei,a,Si,n,r),ca.set(0,1),o=e.ray.intersectTriangle(Zr,Kr,rr,!1,nr),o===null))return;const c=e.ray.origin.distanceTo(nr);c<e.near||c>e.far||t.push({distance:c,point:nr.clone(),uv:Ot.getInterpolation(nr,Zr,rr,Kr,wl,ca,Al,new Me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Jr(s,e,t,i,n,r){bi.subVectors(s,t).addScalar(.5).multiply(i),n!==void 0?(ir.x=r*bi.x-n*bi.y,ir.y=n*bi.x+r*bi.y):ir.copy(bi),s.copy(e),s.x+=ir.x,s.y+=ir.y,s.applyMatrix4(Uc)}class ig extends zt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class Ci extends xn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rl=new V,Cl=new V,Ll=new rt,ua=new Ga,Qr=new zi;class $r extends ct{constructor(e=new ht,t=new Ci){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)Rl.fromBufferAttribute(t,n-1),Cl.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Rl.distanceTo(Cl);e.setAttribute("lineDistance",new Gt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qr.copy(i.boundingSphere),Qr.applyMatrix4(n),Qr.radius+=r,e.ray.intersectsSphere(Qr)===!1)return;Ll.copy(n).invert(),ua.copy(e.ray).applyMatrix4(Ll);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new V,u=new V,h=new V,f=new V,d=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const p=Math.max(0,a.start),S=Math.min(g.count,a.start+a.count);for(let _=p,M=S-1;_<M;_+=d){const y=g.getX(_),A=g.getX(_+1);if(l.fromBufferAttribute(m,y),u.fromBufferAttribute(m,A),ua.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(f);I<e.near||I>e.far||t.push({distance:I,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),S=Math.min(m.count,a.start+a.count);for(let _=p,M=S-1;_<M;_+=d){if(l.fromBufferAttribute(m,_),u.fromBufferAttribute(m,_+1),ua.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}class Dc extends xn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Pl=new rt,La=new Ga,es=new zi,ts=new V;class rg extends ct{constructor(e=new ht,t=new Dc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),es.copy(i.boundingSphere),es.applyMatrix4(n),es.radius+=r,e.ray.intersectsSphere(es)===!1)return;Pl.copy(n).invert(),La.copy(e.ray).applyMatrix4(Pl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,h=i.attributes.position;if(l!==null){const f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let g=f,v=d;g<v;g++){const m=l.getX(g);ts.fromBufferAttribute(h,m),Ul(ts,m,c,n,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=f,v=d;g<v;g++)ts.fromBufferAttribute(h,g),Ul(ts,g,c,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ul(s,e,t,i,n,r,a){const o=La.distanceSqToPoint(s);if(o<t){const c=new V;La.closestPointToPoint(s,c),c.applyMatrix4(i);const l=n.ray.origin.distanceTo(c);if(l<n.near||l>n.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}class on{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,n=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let n=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(n=Math.floor(o+(c-o)/2),l=i[n]-a,l<0)o=n+1;else if(l>0)c=n-1;else{c=n;break}if(n=c,i[n]===a)return n/(r-1);const u=i[n],f=i[n+1]-u,d=(a-u)/f;return(n+d)/(r-1)}getTangent(e,t){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);const a=this.getPoint(n),o=this.getPoint(r),c=t||(a.isVector2?new Me:new V);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new V,n=[],r=[],a=[],o=new V,c=new rt;for(let d=0;d<=e;d++){const g=d/e;n[d]=this.getTangentAt(g,new V)}r[0]=new V,a[0]=new V;let l=Number.MAX_VALUE;const u=Math.abs(n[0].x),h=Math.abs(n[0].y),f=Math.abs(n[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),f<=l&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(n[d-1],n[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(_t(n[d-1].dot(n[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(n[d],r[d])}if(t===!0){let d=Math.acos(_t(r[0].dot(r[e]),-1,1));d/=e,n[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(n[g],d*g)),a[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class gs extends on{constructor(e=0,t=0,i=1,n=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t){const i=t||new Me,n=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(a?r=0:r=n),this.aClockwise===!0&&!a&&(r===n?r=-n:r=r-n);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Ic extends gs{constructor(e,t,i,n,r,a){super(e,t,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Xa(){let s=0,e=0,t=0,i=0;function n(r,a,o,c){s=r,e=o,t=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){n(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,h){let f=(a-r)/l-(o-r)/(l+u)+(o-a)/u,d=(o-a)/u-(c-a)/(u+h)+(c-o)/h;f*=u,d*=u,n(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+i*o}}}const ns=new V,ha=new Xa,fa=new Xa,da=new Xa;class sg extends on{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new V){const i=t,n=this.points,r=n.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=n[(o-1)%r]:(ns.subVectors(n[0],n[1]).add(n[0]),l=ns);const h=n[o%r],f=n[(o+1)%r];if(this.closed||o+2<r?u=n[(o+2)%r]:(ns.subVectors(n[r-1],n[r-2]).add(n[r-1]),u=ns),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),d),v=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),ha.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,v,m),fa.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,v,m),da.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(ha.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),fa.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),da.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return i.set(ha.calc(c),fa.calc(c),da.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new V().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Dl(s,e,t,i,n){const r=(i-e)*.5,a=(n-t)*.5,o=s*s,c=s*o;return(2*t-2*i+r+a)*c+(-3*t+3*i-2*r-a)*o+r*s+t}function ag(s,e){const t=1-s;return t*t*e}function og(s,e){return 2*(1-s)*s*e}function lg(s,e){return s*s*e}function cr(s,e,t,i){return ag(s,e)+og(s,t)+lg(s,i)}function cg(s,e){const t=1-s;return t*t*t*e}function ug(s,e){const t=1-s;return 3*t*t*s*e}function hg(s,e){return 3*(1-s)*s*s*e}function fg(s,e){return s*s*s*e}function ur(s,e,t,i,n){return cg(s,e)+ug(s,t)+hg(s,i)+fg(s,n)}class Fc extends on{constructor(e=new Me,t=new Me,i=new Me,n=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new Me){const i=t,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ur(e,n.x,r.x,a.x,o.x),ur(e,n.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class dg extends on{constructor(e=new V,t=new V,i=new V,n=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new V){const i=t,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ur(e,n.x,r.x,a.x,o.x),ur(e,n.y,r.y,a.y,o.y),ur(e,n.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ja extends on{constructor(e=new Me,t=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Me){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pg extends on{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new V){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Nc extends on{constructor(e=new Me,t=new Me,i=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Me){const i=t,n=this.v0,r=this.v1,a=this.v2;return i.set(cr(e,n.x,r.x,a.x),cr(e,n.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mg extends on{constructor(e=new V,t=new V,i=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new V){const i=t,n=this.v0,r=this.v1,a=this.v2;return i.set(cr(e,n.x,r.x,a.x),cr(e,n.y,r.y,a.y),cr(e,n.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Oc extends on{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Me){const i=t,n=this.points,r=(n.length-1)*e,a=Math.floor(r),o=r-a,c=n[a===0?a:a-1],l=n[a],u=n[a>n.length-2?n.length-1:a+1],h=n[a>n.length-3?n.length-1:a+2];return i.set(Dl(o,c.x,l.x,u.x,h.x),Dl(o,c.y,l.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new Me().fromArray(n))}return this}}var Bc=Object.freeze({__proto__:null,ArcCurve:Ic,CatmullRomCurve3:sg,CubicBezierCurve:Fc,CubicBezierCurve3:dg,EllipseCurve:gs,LineCurve:ja,LineCurve3:pg,QuadraticBezierCurve:Nc,QuadraticBezierCurve3:mg,SplineCurve:Oc});class gg extends on{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new ja(t,e))}getPoint(e,t){const i=e*this.getLength(),n=this.getCurveLengths();let r=0;for(;r<n.length;){if(n[r]>=i){const a=n[r]-i,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let n=0,r=this.curves;n<r.length;n++){const a=r[n],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(new Bc[n.type]().fromJSON(n))}return this}}class Pa extends gg{constructor(e){super(),this.type="Path",this.currentPoint=new Me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new ja(this.currentPoint.clone(),new Me(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){const r=new Nc(this.currentPoint.clone(),new Me(e,t),new Me(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,r,a){const o=new Fc(this.currentPoint.clone(),new Me(e,t),new Me(i,n),new Me(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Oc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,n,r,a),this}absarc(e,t,i,n,r,a){return this.absellipse(e,t,i,i,n,r,a),this}ellipse(e,t,i,n,r,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,n,r,a,o,c),this}absellipse(e,t,i,n,r,a,o,c){const l=new gs(e,t,i,n,r,a,o,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ls extends Pa{constructor(e){super(e),this.uuid=vn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(new Pa().fromJSON(n))}return this}}const vg={triangulate:function(s,e,t=2){const i=e&&e.length,n=i?e[0]*t:s.length;let r=kc(s,0,n,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,u,h,f,d;if(i&&(r=Sg(s,e,r,t)),s.length>80*t){o=l=s[0],c=u=s[1];for(let g=t;g<n;g+=t)h=s[g],f=s[g+1],h<o&&(o=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-o,u-c),d=d!==0?32767/d:0}return vr(r,a,t,o,c,d,0),a}};function kc(s,e,t,i,n){let r,a;if(n===Dg(s,e,t,i)>0)for(r=e;r<t;r+=i)a=Il(r,s[r],s[r+1],a);else for(r=t-i;r>=e;r-=i)a=Il(r,s[r],s[r+1],a);return a&&vs(a,a.next)&&(xr(a),a=a.next),a}function qn(s,e){if(!s)return s;e||(e=s);let t=s,i;do if(i=!1,!t.steiner&&(vs(t,t.next)||ot(t.prev,t,t.next)===0)){if(xr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function vr(s,e,t,i,n,r,a){if(!s)return;!a&&r&&Ag(s,i,n,r);let o=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?xg(s,i,n,r):_g(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),xr(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=yg(qn(s),e,t),vr(s,e,t,i,n,r,2)):a===2&&Mg(s,e,t,i,n,r):vr(qn(s),e,t,i,n,r,1);break}}}function _g(s){const e=s.prev,t=s,i=s.next;if(ot(e,t,i)>=0)return!1;const n=e.x,r=t.x,a=i.x,o=e.y,c=t.y,l=i.y,u=n<r?n<a?n:a:r<a?r:a,h=o<c?o<l?o:l:c<l?c:l,f=n>r?n>a?n:a:r>a?r:a,d=o>c?o>l?o:l:c>l?c:l;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&Li(n,o,r,c,a,l,g.x,g.y)&&ot(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function xg(s,e,t,i){const n=s.prev,r=s,a=s.next;if(ot(n,r,a)>=0)return!1;const o=n.x,c=r.x,l=a.x,u=n.y,h=r.y,f=a.y,d=o<c?o<l?o:l:c<l?c:l,g=u<h?u<f?u:f:h<f?h:f,v=o>c?o>l?o:l:c>l?c:l,m=u>h?u>f?u:f:h>f?h:f,p=Ua(d,g,e,t,i),S=Ua(v,m,e,t,i);let _=s.prevZ,M=s.nextZ;for(;_&&_.z>=p&&M&&M.z<=S;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==n&&_!==a&&Li(o,u,c,h,l,f,_.x,_.y)&&ot(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=d&&M.x<=v&&M.y>=g&&M.y<=m&&M!==n&&M!==a&&Li(o,u,c,h,l,f,M.x,M.y)&&ot(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==n&&_!==a&&Li(o,u,c,h,l,f,_.x,_.y)&&ot(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=S;){if(M.x>=d&&M.x<=v&&M.y>=g&&M.y<=m&&M!==n&&M!==a&&Li(o,u,c,h,l,f,M.x,M.y)&&ot(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function yg(s,e,t){let i=s;do{const n=i.prev,r=i.next.next;!vs(n,r)&&zc(n,i,i.next,r)&&_r(n,r)&&_r(r,n)&&(e.push(n.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),xr(i),xr(i.next),i=s=r),i=i.next}while(i!==s);return qn(i)}function Mg(s,e,t,i,n,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Lg(a,o)){let c=Gc(a,o);a=qn(a,a.next),c=qn(c,c.next),vr(a,e,t,i,n,r,0),vr(c,e,t,i,n,r,0);return}o=o.next}a=a.next}while(a!==s)}function Sg(s,e,t,i){const n=[];let r,a,o,c,l;for(r=0,a=e.length;r<a;r++)o=e[r]*i,c=r<a-1?e[r+1]*i:s.length,l=kc(s,o,c,i,!1),l===l.next&&(l.steiner=!0),n.push(Cg(l));for(n.sort(Eg),r=0;r<n.length;r++)t=bg(n[r],t);return t}function Eg(s,e){return s.x-e.x}function bg(s,e){const t=Tg(s,e);if(!t)return e;const i=Gc(t,s);return qn(i,i.next),qn(t,t.next)}function Tg(s,e){let t=e,i=-1/0,n;const r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>i&&(i=f,n=t.x<t.next.x?t:t.next,f===r))return n}t=t.next}while(t!==e);if(!n)return null;const o=n,c=n.x,l=n.y;let u=1/0,h;t=n;do r>=t.x&&t.x>=c&&r!==t.x&&Li(a<l?r:i,a,c,l,a<l?i:r,a,t.x,t.y)&&(h=Math.abs(a-t.y)/(r-t.x),_r(t,s)&&(h<u||h===u&&(t.x>n.x||t.x===n.x&&wg(n,t)))&&(n=t,u=h)),t=t.next;while(t!==o);return n}function wg(s,e){return ot(s.prev,s,e.prev)<0&&ot(e.next,s,s.next)<0}function Ag(s,e,t,i){let n=s;do n.z===0&&(n.z=Ua(n.x,n.y,e,t,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,Rg(n)}function Rg(s){let e,t,i,n,r,a,o,c,l=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,i=t,o=0,e=0;e<l&&(o++,i=i.nextZ,!!i);e++);for(c=l;o>0||c>0&&i;)o!==0&&(c===0||!i||t.z<=i.z)?(n=t,t=t.nextZ,o--):(n=i,i=i.nextZ,c--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;t=i}r.nextZ=null,l*=2}while(a>1);return s}function Ua(s,e,t,i,n){return s=(s-t)*n|0,e=(e-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Cg(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Li(s,e,t,i,n,r,a,o){return(n-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(n-a)*(i-o)}function Lg(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Pg(s,e)&&(_r(s,e)&&_r(e,s)&&Ug(s,e)&&(ot(s.prev,s,e.prev)||ot(s,e.prev,e))||vs(s,e)&&ot(s.prev,s,s.next)>0&&ot(e.prev,e,e.next)>0)}function ot(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function vs(s,e){return s.x===e.x&&s.y===e.y}function zc(s,e,t,i){const n=rs(ot(s,e,t)),r=rs(ot(s,e,i)),a=rs(ot(t,i,s)),o=rs(ot(t,i,e));return!!(n!==r&&a!==o||n===0&&is(s,t,e)||r===0&&is(s,i,e)||a===0&&is(t,s,i)||o===0&&is(t,e,i))}function is(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function rs(s){return s>0?1:s<0?-1:0}function Pg(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&zc(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function _r(s,e){return ot(s.prev,s,s.next)<0?ot(s,e,s.next)>=0&&ot(s,s.prev,e)>=0:ot(s,e,s.prev)<0||ot(s,s.next,e)<0}function Ug(s,e){let t=s,i=!1;const n=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&n<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==s);return i}function Gc(s,e){const t=new Da(s.i,s.x,s.y),i=new Da(e.i,e.x,e.y),n=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=n,n.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Il(s,e,t,i){const n=new Da(s,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function xr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Da(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Dg(s,e,t,i){let n=0;for(let r=e,a=t-i;r<t;r+=i)n+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return n}class Fi{static area(e){const t=e.length;let i=0;for(let n=t-1,r=0;r<t;n=r++)i+=e[n].x*e[r].y-e[r].x*e[n].y;return i*.5}static isClockWise(e){return Fi.area(e)<0}static triangulateShape(e,t){const i=[],n=[],r=[];Fl(e),Nl(i,e);let a=e.length;t.forEach(Fl);for(let c=0;c<t.length;c++)n.push(a),a+=t[c].length,Nl(i,t[c]);const o=vg.triangulate(i,n);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function Fl(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Nl(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Ya extends ht{constructor(e=new ls([new Me(.5,.5),new Me(-.5,.5),new Me(-.5,-.5),new Me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,n=[],r=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new Gt(n,3)),this.setAttribute("uv",new Gt(r,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:Ig;let _,M=!1,y,A,R,I;p&&(_=p.getSpacedPoints(u),M=!0,f=!1,y=p.computeFrenetFrames(u,!1),A=new V,R=new V,I=new V),f||(m=0,d=0,g=0,v=0);const x=o.extractPoints(l);let w=x.shape;const Z=x.holes;if(!Fi.isClockWise(w)){w=w.reverse();for(let X=0,te=Z.length;X<te;X++){const ie=Z[X];Fi.isClockWise(ie)&&(Z[X]=ie.reverse())}}const D=Fi.triangulateShape(w,Z),F=w;for(let X=0,te=Z.length;X<te;X++){const ie=Z[X];w=w.concat(ie)}function L(X,te,ie){return te||console.error("THREE.ExtrudeGeometry: vec does not exist"),X.clone().addScaledVector(te,ie)}const W=w.length,J=D.length;function $(X,te,ie){let pe,ue,Se;const he=X.x-te.x,xe=X.y-te.y,Te=ie.x-X.x,de=ie.y-X.y,C=he*he+xe*xe,b=he*de-xe*Te;if(Math.abs(b)>Number.EPSILON){const K=Math.sqrt(C),re=Math.sqrt(Te*Te+de*de),ge=te.x-xe/K,me=te.y+he/K,B=ie.x-de/re,ae=ie.y+Te/re,ee=((B-ge)*de-(ae-me)*Te)/(he*de-xe*Te);pe=ge+he*ee-X.x,ue=me+xe*ee-X.y;const be=pe*pe+ue*ue;if(be<=2)return new Me(pe,ue);Se=Math.sqrt(be/2)}else{let K=!1;he>Number.EPSILON?Te>Number.EPSILON&&(K=!0):he<-Number.EPSILON?Te<-Number.EPSILON&&(K=!0):Math.sign(xe)===Math.sign(de)&&(K=!0),K?(pe=-xe,ue=he,Se=Math.sqrt(C)):(pe=he,ue=xe,Se=Math.sqrt(C/2))}return new Me(pe/Se,ue/Se)}const q=[];for(let X=0,te=F.length,ie=te-1,pe=X+1;X<te;X++,ie++,pe++)ie===te&&(ie=0),pe===te&&(pe=0),q[X]=$(F[X],F[ie],F[pe]);const Y=[];let O,H=q.concat();for(let X=0,te=Z.length;X<te;X++){const ie=Z[X];O=[];for(let pe=0,ue=ie.length,Se=ue-1,he=pe+1;pe<ue;pe++,Se++,he++)Se===ue&&(Se=0),he===ue&&(he=0),O[pe]=$(ie[pe],ie[Se],ie[he]);Y.push(O),H=H.concat(O)}for(let X=0;X<m;X++){const te=X/m,ie=d*Math.cos(te*Math.PI/2),pe=g*Math.sin(te*Math.PI/2)+v;for(let ue=0,Se=F.length;ue<Se;ue++){const he=L(F[ue],q[ue],pe);E(he.x,he.y,-ie)}for(let ue=0,Se=Z.length;ue<Se;ue++){const he=Z[ue];O=Y[ue];for(let xe=0,Te=he.length;xe<Te;xe++){const de=L(he[xe],O[xe],pe);E(de.x,de.y,-ie)}}}const z=g+v;for(let X=0;X<W;X++){const te=f?L(w[X],H[X],z):w[X];M?(R.copy(y.normals[0]).multiplyScalar(te.x),A.copy(y.binormals[0]).multiplyScalar(te.y),I.copy(_[0]).add(R).add(A),E(I.x,I.y,I.z)):E(te.x,te.y,0)}for(let X=1;X<=u;X++)for(let te=0;te<W;te++){const ie=f?L(w[te],H[te],z):w[te];M?(R.copy(y.normals[X]).multiplyScalar(ie.x),A.copy(y.binormals[X]).multiplyScalar(ie.y),I.copy(_[X]).add(R).add(A),E(I.x,I.y,I.z)):E(ie.x,ie.y,h/u*X)}for(let X=m-1;X>=0;X--){const te=X/m,ie=d*Math.cos(te*Math.PI/2),pe=g*Math.sin(te*Math.PI/2)+v;for(let ue=0,Se=F.length;ue<Se;ue++){const he=L(F[ue],q[ue],pe);E(he.x,he.y,h+ie)}for(let ue=0,Se=Z.length;ue<Se;ue++){const he=Z[ue];O=Y[ue];for(let xe=0,Te=he.length;xe<Te;xe++){const de=L(he[xe],O[xe],pe);M?E(de.x,de.y+_[u-1].y,_[u-1].x+ie):E(de.x,de.y,h+ie)}}}T(),P();function T(){const X=n.length/3;if(f){let te=0,ie=W*te;for(let pe=0;pe<J;pe++){const ue=D[pe];G(ue[2]+ie,ue[1]+ie,ue[0]+ie)}te=u+m*2,ie=W*te;for(let pe=0;pe<J;pe++){const ue=D[pe];G(ue[0]+ie,ue[1]+ie,ue[2]+ie)}}else{for(let te=0;te<J;te++){const ie=D[te];G(ie[2],ie[1],ie[0])}for(let te=0;te<J;te++){const ie=D[te];G(ie[0]+W*u,ie[1]+W*u,ie[2]+W*u)}}i.addGroup(X,n.length/3-X,0)}function P(){const X=n.length/3;let te=0;N(F,te),te+=F.length;for(let ie=0,pe=Z.length;ie<pe;ie++){const ue=Z[ie];N(ue,te),te+=ue.length}i.addGroup(X,n.length/3-X,1)}function N(X,te){let ie=X.length;for(;--ie>=0;){const pe=ie;let ue=ie-1;ue<0&&(ue=X.length-1);for(let Se=0,he=u+m*2;Se<he;Se++){const xe=W*Se,Te=W*(Se+1),de=te+pe+xe,C=te+ue+xe,b=te+ue+Te,K=te+pe+Te;oe(de,C,b,K)}}}function E(X,te,ie){c.push(X),c.push(te),c.push(ie)}function G(X,te,ie){Q(X),Q(te),Q(ie);const pe=n.length/3,ue=S.generateTopUV(i,n,pe-3,pe-2,pe-1);le(ue[0]),le(ue[1]),le(ue[2])}function oe(X,te,ie,pe){Q(X),Q(te),Q(pe),Q(te),Q(ie),Q(pe);const ue=n.length/3,Se=S.generateSideWallUV(i,n,ue-6,ue-3,ue-2,ue-1);le(Se[0]),le(Se[1]),le(Se[3]),le(Se[1]),le(Se[2]),le(Se[3])}function Q(X){n.push(c[X*3+0]),n.push(c[X*3+1]),n.push(c[X*3+2])}function le(X){r.push(X.x),r.push(X.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Fg(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];i.push(o)}const n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new Bc[n.type]().fromJSON(n)),new Ya(i,e.options)}}const Ig={generateTopUV:function(s,e,t,i,n){const r=e[t*3],a=e[t*3+1],o=e[i*3],c=e[i*3+1],l=e[n*3],u=e[n*3+1];return[new Me(r,a),new Me(o,c),new Me(l,u)]},generateSideWallUV:function(s,e,t,i,n,r){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[n*3],d=e[n*3+1],g=e[n*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new Me(a,1-c),new Me(l,1-h),new Me(f,1-g),new Me(v,1-p)]:[new Me(o,1-c),new Me(u,1-h),new Me(d,1-g),new Me(m,1-p)]}};function Fg(s,e,t){if(t.shapes=[],Array.isArray(s))for(let i=0,n=s.length;i<n;i++){const r=s[i];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Kv extends xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=za,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jv extends xn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new qe(16777215),this.specular=new qe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=za,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ng extends Ci{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const fs={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Og{constructor(e,t,i){const n=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,r===!1&&n.onStart!==void 0&&n.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,n.onProgress!==void 0&&n.onProgress(u,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],g=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const Bg=new Og;class _s{constructor(e){this.manager=e!==void 0?e:Bg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const pn={};class kg extends Error{constructor(e,t){super(e),this.response=t}}class zg extends _s{constructor(e){super(e)}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=fs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(pn[e]!==void 0){pn[e].push({onLoad:t,onProgress:i,onError:n});return}pn[e]=[],pn[e].push({onLoad:t,onProgress:i,onError:n});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=pn[e],h=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0;let v=0;const m=new ReadableStream({start(p){S();function S(){h.read().then(({done:_,value:M})=>{if(_)p.close();else{v+=M.byteLength;const y=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:d});for(let A=0,R=u.length;A<R;A++){const I=u[A];I.onProgress&&I.onProgress(y)}p.enqueue(M),S()}})}}});return new Response(m)}else throw new kg(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{fs.add(e,l);const u=pn[e];delete pn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=pn[e];if(u===void 0)throw this.manager.itemError(e),l;delete pn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Gg extends _s{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=fs.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=mr("img");function c(){u(),fs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),n&&n(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Qv extends _s{constructor(e){super(e)}load(e,t,i,n){const r=new wt,a=new Gg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}}class Hc extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const pa=new rt,Ol=new V,Bl=new V;class Hg{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Va,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ol.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ol),Bl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bl),t.updateMatrixWorld(),pa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(pa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const kl=new rt,sr=new V,ma=new V;class Vg extends Hg{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),sr.setFromMatrixPosition(e.matrixWorld),i.position.copy(sr),ma.copy(i.position),ma.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ma),i.updateMatrixWorld(),n.makeTranslation(-sr.x,-sr.y,-sr.z),kl.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kl)}}class $v extends Hc{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Vg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class e_ extends Hc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Wg extends ht{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class zl{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Xg{constructor(){this.type="ShapePath",this.color=new qe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Pa,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,n){return this.currentPath.quadraticCurveTo(e,t,i,n),this}bezierCurveTo(e,t,i,n,r,a){return this.currentPath.bezierCurveTo(e,t,i,n,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const S=[];for(let _=0,M=p.length;_<M;_++){const y=p[_],A=new ls;A.curves=y.curves,S.push(A)}return S}function i(p,S){const _=S.length;let M=!1;for(let y=_-1,A=0;A<_;y=A++){let R=S[y],I=S[A],x=I.x-R.x,w=I.y-R.y;if(Math.abs(w)>Number.EPSILON){if(w<0&&(R=S[A],x=-x,I=S[y],w=-w),p.y<R.y||p.y>I.y)continue;if(p.y===R.y){if(p.x===R.x)return!0}else{const Z=w*(p.x-R.x)-x*(p.y-R.y);if(Z===0)return!0;if(Z<0)continue;M=!M}}else{if(p.y!==R.y)continue;if(I.x<=p.x&&p.x<=R.x||R.x<=p.x&&p.x<=I.x)return!0}}return M}const n=Fi.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,c;const l=[];if(r.length===1)return o=r[0],c=new ls,c.curves=o.curves,l.push(c),l;let u=!n(r[0].getPoints());u=e?!u:u;const h=[],f=[];let d=[],g=0,v;f[g]=void 0,d[g]=[];for(let p=0,S=r.length;p<S;p++)o=r[p],v=o.getPoints(),a=n(v),a=e?!a:a,a?(!u&&f[g]&&g++,f[g]={s:new ls,p:v},f[g].s.curves=o.curves,u&&g++,d[g]=[]):d[g].push({h:o,p:v[0]});if(!f[0])return t(r);if(f.length>1){let p=!1,S=0;for(let _=0,M=f.length;_<M;_++)h[_]=[];for(let _=0,M=f.length;_<M;_++){const y=d[_];for(let A=0;A<y.length;A++){const R=y[A];let I=!0;for(let x=0;x<f.length;x++)i(R.p,f[x].p)&&(_!==x&&S++,I?(I=!1,h[x].push(R)):p=!0);I&&h[_].push(R)}}S>0&&p===!1&&(d=h)}let m;for(let p=0,S=f.length;p<S;p++){c=f[p].s,l.push(c),m=d[p];for(let _=0,M=m.length;_<M;_++)c.holes.push(m[_].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ba}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ba);const Gl={type:"change"},ga={type:"start"},Hl={type:"end"};let t_=class extends Cn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ii.ROTATE,MIDDLE:ii.DOLLY,RIGHT:ii.PAN},this.touches={ONE:ri.ROTATE,TWO:ri.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(B){B.addEventListener("keydown",Te),this._domElementKeyEvents=B},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Te),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Gl),i.update(),r=n.NONE},this.update=function(){const B=new V,ae=new jn().setFromUnitVectors(e.up,new V(0,1,0)),ee=ae.clone().invert(),be=new V,Ae=new jn,we=2*Math.PI;return function(){const ye=i.object.position;B.copy(ye).sub(i.target),B.applyQuaternion(ae),o.setFromVector3(B),i.autoRotate&&r===n.NONE&&x(R()),i.enableDamping?(o.theta+=c.theta*i.dampingFactor,o.phi+=c.phi*i.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let Pe=i.minAzimuthAngle,De=i.maxAzimuthAngle;return isFinite(Pe)&&isFinite(De)&&(Pe<-Math.PI?Pe+=we:Pe>Math.PI&&(Pe-=we),De<-Math.PI?De+=we:De>Math.PI&&(De-=we),Pe<=De?o.theta=Math.max(Pe,Math.min(De,o.theta)):o.theta=o.theta>(Pe+De)/2?Math.max(Pe,o.theta):Math.min(De,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=l,o.radius=Math.max(i.minDistance,Math.min(i.maxDistance,o.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),B.setFromSpherical(o),B.applyQuaternion(ee),ye.copy(i.target).add(B),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),l=1,h||be.distanceToSquared(i.object.position)>a||8*(1-Ae.dot(i.object.quaternion))>a?(i.dispatchEvent(Gl),be.copy(i.object.position),Ae.copy(i.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",b),i.domElement.removeEventListener("pointerdown",ie),i.domElement.removeEventListener("pointercancel",ue),i.domElement.removeEventListener("wheel",xe),i.domElement.removeEventListener("pointermove",pe),i.domElement.removeEventListener("pointerup",ue),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Te),i._domElementKeyEvents=null)};const i=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=n.NONE;const a=1e-6,o=new zl,c=new zl;let l=1;const u=new V;let h=!1;const f=new Me,d=new Me,g=new Me,v=new Me,m=new Me,p=new Me,S=new Me,_=new Me,M=new Me,y=[],A={};function R(){return 2*Math.PI/60/60*i.autoRotateSpeed}function I(){return Math.pow(.95,i.zoomSpeed)}function x(B){c.theta-=B}function w(B){c.phi-=B}const Z=function(){const B=new V;return function(ee,be){B.setFromMatrixColumn(be,0),B.multiplyScalar(-ee),u.add(B)}}(),k=function(){const B=new V;return function(ee,be){i.screenSpacePanning===!0?B.setFromMatrixColumn(be,1):(B.setFromMatrixColumn(be,0),B.crossVectors(i.object.up,B)),B.multiplyScalar(ee),u.add(B)}}(),D=function(){const B=new V;return function(ee,be){const Ae=i.domElement;if(i.object.isPerspectiveCamera){const we=i.object.position;B.copy(we).sub(i.target);let Ee=B.length();Ee*=Math.tan(i.object.fov/2*Math.PI/180),Z(2*ee*Ee/Ae.clientHeight,i.object.matrix),k(2*be*Ee/Ae.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Z(ee*(i.object.right-i.object.left)/i.object.zoom/Ae.clientWidth,i.object.matrix),k(be*(i.object.top-i.object.bottom)/i.object.zoom/Ae.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function F(B){i.object.isPerspectiveCamera?l/=B:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*B)),i.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function L(B){i.object.isPerspectiveCamera?l*=B:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/B)),i.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(B){f.set(B.clientX,B.clientY)}function J(B){S.set(B.clientX,B.clientY)}function $(B){v.set(B.clientX,B.clientY)}function q(B){d.set(B.clientX,B.clientY),g.subVectors(d,f).multiplyScalar(i.rotateSpeed);const ae=i.domElement;x(2*Math.PI*g.x/ae.clientHeight),w(2*Math.PI*g.y/ae.clientHeight),f.copy(d),i.update()}function Y(B){_.set(B.clientX,B.clientY),M.subVectors(_,S),M.y>0?F(I()):M.y<0&&L(I()),S.copy(_),i.update()}function O(B){m.set(B.clientX,B.clientY),p.subVectors(m,v).multiplyScalar(i.panSpeed),D(p.x,p.y),v.copy(m),i.update()}function H(B){B.deltaY<0?L(I()):B.deltaY>0&&F(I()),i.update()}function z(B){let ae=!1;switch(B.code){case i.keys.UP:B.ctrlKey||B.metaKey||B.shiftKey?w(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):D(0,i.keyPanSpeed),ae=!0;break;case i.keys.BOTTOM:B.ctrlKey||B.metaKey||B.shiftKey?w(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):D(0,-i.keyPanSpeed),ae=!0;break;case i.keys.LEFT:B.ctrlKey||B.metaKey||B.shiftKey?x(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):D(i.keyPanSpeed,0),ae=!0;break;case i.keys.RIGHT:B.ctrlKey||B.metaKey||B.shiftKey?x(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):D(-i.keyPanSpeed,0),ae=!0;break}ae&&(B.preventDefault(),i.update())}function T(){if(y.length===1)f.set(y[0].pageX,y[0].pageY);else{const B=.5*(y[0].pageX+y[1].pageX),ae=.5*(y[0].pageY+y[1].pageY);f.set(B,ae)}}function P(){if(y.length===1)v.set(y[0].pageX,y[0].pageY);else{const B=.5*(y[0].pageX+y[1].pageX),ae=.5*(y[0].pageY+y[1].pageY);v.set(B,ae)}}function N(){const B=y[0].pageX-y[1].pageX,ae=y[0].pageY-y[1].pageY,ee=Math.sqrt(B*B+ae*ae);S.set(0,ee)}function E(){i.enableZoom&&N(),i.enablePan&&P()}function G(){i.enableZoom&&N(),i.enableRotate&&T()}function oe(B){if(y.length==1)d.set(B.pageX,B.pageY);else{const ee=me(B),be=.5*(B.pageX+ee.x),Ae=.5*(B.pageY+ee.y);d.set(be,Ae)}g.subVectors(d,f).multiplyScalar(i.rotateSpeed);const ae=i.domElement;x(2*Math.PI*g.x/ae.clientHeight),w(2*Math.PI*g.y/ae.clientHeight),f.copy(d)}function Q(B){if(y.length===1)m.set(B.pageX,B.pageY);else{const ae=me(B),ee=.5*(B.pageX+ae.x),be=.5*(B.pageY+ae.y);m.set(ee,be)}p.subVectors(m,v).multiplyScalar(i.panSpeed),D(p.x,p.y),v.copy(m)}function le(B){const ae=me(B),ee=B.pageX-ae.x,be=B.pageY-ae.y,Ae=Math.sqrt(ee*ee+be*be);_.set(0,Ae),M.set(0,Math.pow(_.y/S.y,i.zoomSpeed)),F(M.y),S.copy(_)}function X(B){i.enableZoom&&le(B),i.enablePan&&Q(B)}function te(B){i.enableZoom&&le(B),i.enableRotate&&oe(B)}function ie(B){i.enabled!==!1&&(y.length===0&&(i.domElement.setPointerCapture(B.pointerId),i.domElement.addEventListener("pointermove",pe),i.domElement.addEventListener("pointerup",ue)),K(B),B.pointerType==="touch"?de(B):Se(B))}function pe(B){i.enabled!==!1&&(B.pointerType==="touch"?C(B):he(B))}function ue(B){re(B),y.length===0&&(i.domElement.releasePointerCapture(B.pointerId),i.domElement.removeEventListener("pointermove",pe),i.domElement.removeEventListener("pointerup",ue)),i.dispatchEvent(Hl),r=n.NONE}function Se(B){let ae;switch(B.button){case 0:ae=i.mouseButtons.LEFT;break;case 1:ae=i.mouseButtons.MIDDLE;break;case 2:ae=i.mouseButtons.RIGHT;break;default:ae=-1}switch(ae){case ii.DOLLY:if(i.enableZoom===!1)return;J(B),r=n.DOLLY;break;case ii.ROTATE:if(B.ctrlKey||B.metaKey||B.shiftKey){if(i.enablePan===!1)return;$(B),r=n.PAN}else{if(i.enableRotate===!1)return;W(B),r=n.ROTATE}break;case ii.PAN:if(B.ctrlKey||B.metaKey||B.shiftKey){if(i.enableRotate===!1)return;W(B),r=n.ROTATE}else{if(i.enablePan===!1)return;$(B),r=n.PAN}break;default:r=n.NONE}r!==n.NONE&&i.dispatchEvent(ga)}function he(B){switch(r){case n.ROTATE:if(i.enableRotate===!1)return;q(B);break;case n.DOLLY:if(i.enableZoom===!1)return;Y(B);break;case n.PAN:if(i.enablePan===!1)return;O(B);break}}function xe(B){i.enabled===!1||i.enableZoom===!1||r!==n.NONE||(B.preventDefault(),i.dispatchEvent(ga),H(B),i.dispatchEvent(Hl))}function Te(B){i.enabled===!1||i.enablePan===!1||z(B)}function de(B){switch(ge(B),y.length){case 1:switch(i.touches.ONE){case ri.ROTATE:if(i.enableRotate===!1)return;T(),r=n.TOUCH_ROTATE;break;case ri.PAN:if(i.enablePan===!1)return;P(),r=n.TOUCH_PAN;break;default:r=n.NONE}break;case 2:switch(i.touches.TWO){case ri.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;E(),r=n.TOUCH_DOLLY_PAN;break;case ri.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;G(),r=n.TOUCH_DOLLY_ROTATE;break;default:r=n.NONE}break;default:r=n.NONE}r!==n.NONE&&i.dispatchEvent(ga)}function C(B){switch(ge(B),r){case n.TOUCH_ROTATE:if(i.enableRotate===!1)return;oe(B),i.update();break;case n.TOUCH_PAN:if(i.enablePan===!1)return;Q(B),i.update();break;case n.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;X(B),i.update();break;case n.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;te(B),i.update();break;default:r=n.NONE}}function b(B){i.enabled!==!1&&B.preventDefault()}function K(B){y.push(B)}function re(B){delete A[B.pointerId];for(let ae=0;ae<y.length;ae++)if(y[ae].pointerId==B.pointerId){y.splice(ae,1);return}}function ge(B){let ae=A[B.pointerId];ae===void 0&&(ae=new Me,A[B.pointerId]=ae),ae.set(B.pageX,B.pageY)}function me(B){const ae=B.pointerId===y[0].pointerId?y[1]:y[0];return A[ae.pointerId]}i.domElement.addEventListener("contextmenu",b),i.domElement.addEventListener("pointerdown",ie),i.domElement.addEventListener("pointercancel",ue),i.domElement.addEventListener("wheel",xe,{passive:!1}),this.update()}};class i_ extends _s{constructor(e){super(e)}load(e,t,i,n){const r=this,a=new zg(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){const c=r.parse(JSON.parse(o));t&&t(c)},i,n)}parse(e){return new jg(e)}}class jg{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],n=Yg(e,t,this.data);for(let r=0,a=n.length;r<a;r++)i.push(...n[r].toShapes());return i}}function Yg(s,e,t){const i=Array.from(s),n=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*n,a=[];let o=0,c=0;for(let l=0;l<i.length;l++){const u=i[l];if(u===`
`)o=0,c-=r;else{const h=qg(u,n,o,c,t);o+=h.offsetX,a.push(h.path)}}return a}function qg(s,e,t,i,n){const r=n.glyphs[s]||n.glyphs["?"];if(!r){console.error('THREE.Font: character "'+s+'" does not exists in font family '+n.familyName+".");return}const a=new Xg;let o,c,l,u,h,f,d,g;if(r.o){const v=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let m=0,p=v.length;m<p;)switch(v[m++]){case"m":o=v[m++]*e+t,c=v[m++]*e+i,a.moveTo(o,c);break;case"l":o=v[m++]*e+t,c=v[m++]*e+i,a.lineTo(o,c);break;case"q":l=v[m++]*e+t,u=v[m++]*e+i,h=v[m++]*e+t,f=v[m++]*e+i,a.quadraticCurveTo(h,f,l,u);break;case"b":l=v[m++]*e+t,u=v[m++]*e+i,h=v[m++]*e+t,f=v[m++]*e+i,d=v[m++]*e+t,g=v[m++]*e+i,a.bezierCurveTo(h,f,d,g,l,u);break}}return{offsetX:r.ha*e,path:a}}class Zg extends Ya{constructor(e,t={}){const i=t.font;if(i===void 0)super();else{const n=i.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(n,t)}this.type="TextGeometry"}}function Vc(s,e){this.object=s,this.domElement=e!==void 0?e:document,this.enabled=!0,this.target=new V,this.center=this.target,this.noZoom=!1,this.zoomSpeed=1,this.minDistance=0,this.maxDistance=1/0,this.noRotate=!1,this.rotateSpeed=1,this.noPan=!1,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.noKeys=!1,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40};var t=this,i=new Me,n=new Me,r=new Me,a=new Me,o=new Me,c=new Me,l=new V,u=new V,h=new Me,f=new Me,d=new Me,g=1,v=new V;new V;var m={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_DOLLY:4,TOUCH_PAN:5},p=m.NONE;this.target0=this.target.clone(),this.position0=this.object.position.clone();var S={type:"change"},_={type:"start"},M={type:"end"};this.rotateLeft=function(L){L===void 0&&(L=y())},this.rotateUp=function(L){L===void 0&&(L=y())},this.panLeft=function(L){var W=this.object.matrix.elements;l.set(W[0],W[1],W[2]),l.multiplyScalar(-L),v.add(l)},this.panUp=function(L){var W=this.object.matrix.elements;l.set(W[4],W[5],W[6]),l.multiplyScalar(L),v.add(l)},this.pan=function(L,W){var J=t.domElement===document?t.domElement.body:t.domElement;if(t.object.fov!==void 0){var $=t.object.position,q=$.clone().sub(t.target),Y=q.length();Y*=Math.tan(t.object.fov/2*Math.PI/180),t.panLeft(2*L*Y/J.clientHeight),t.panUp(2*W*Y/J.clientHeight)}else t.object.top!==void 0?(t.panLeft(L*(t.object.right-t.object.left)/J.clientWidth),t.panUp(W*(t.object.top-t.object.bottom)/J.clientHeight)):console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.")},this.dollyIn=function(L){L===void 0&&(L=A()),g/=L},this.dollyOut=function(L){L===void 0&&(L=A()),g*=L},this.update=function(){t.object.top!==void 0&&(this.object.top=g*this.object.top,this.object.bottom=g*this.object.bottom,this.object.left=g*this.object.left,this.object.right=g*this.object.right,this.object.updateProjectionMatrix());var L=this.object.position;u.copy(L).sub(this.target),this.target.add(v),L.copy(this.target).add(u),this.object.lookAt(this.target),this.dispatchEvent(S),g=1,v.set(0,0,0)},this.reset=function(){p=m.NONE,this.target.copy(this.target0),this.object.position.copy(this.position0),this.update()};function y(){return 2*Math.PI/60/60*t.autoRotateSpeed}function A(){return Math.pow(.95,t.zoomSpeed)}function R(L){if(t.enabled!==!1){if(L.preventDefault(),L.button===2){if(t.noRotate===!0)return;p=m.ROTATE,i.set(L.clientX,L.clientY)}else if(L.button===1){if(t.noZoom===!0)return;p=m.DOLLY,h.set(L.clientX,L.clientY)}else if(L.button===0){if(t.noPan===!0)return;p=m.PAN,a.set(L.clientX,L.clientY)}t.domElement.addEventListener("mousemove",I,!1),t.domElement.addEventListener("mouseup",x,!1),t.dispatchEvent(_)}}function I(L){if(t.enabled!==!1){L.preventDefault();var W=t.domElement===document?t.domElement.body:t.domElement;if(p===m.ROTATE){if(t.noRotate===!0)return;n.set(L.clientX,L.clientY),r.subVectors(n,i),t.rotateLeft(2*Math.PI*r.x/W.clientWidth*t.rotateSpeed),t.rotateUp(2*Math.PI*r.y/W.clientHeight*t.rotateSpeed),i.copy(n)}else if(p===m.DOLLY){if(t.noZoom===!0)return;f.set(L.clientX,L.clientY),d.subVectors(f,h),d.y>0?t.dollyIn():t.dollyOut(),h.copy(f)}else if(p===m.PAN){if(t.noPan===!0)return;o.set(L.clientX,L.clientY),c.subVectors(o,a),t.pan(c.x,c.y),a.copy(o)}t.update()}}function x(){t.enabled!==!1&&(t.domElement.removeEventListener("mousemove",I,!1),t.domElement.removeEventListener("mouseup",x,!1),t.dispatchEvent(M),p=m.NONE)}function w(L){if(!(t.enabled===!1||t.noZoom===!0)){L.preventDefault();var W=0;L.wheelDelta!==void 0?W=L.wheelDelta:L.detail!==void 0&&(W=-L.detail),W>0?t.dollyOut():t.dollyIn(),t.update(),t.dispatchEvent(_),t.dispatchEvent(M)}}function Z(L){if(!(t.enabled===!1||t.noKeys===!0||t.noPan===!0))switch(L.keyCode){case t.keys.UP:t.pan(0,t.keyPanSpeed),t.update();break;case t.keys.BOTTOM:t.pan(0,-t.keyPanSpeed),t.update();break;case t.keys.LEFT:t.pan(t.keyPanSpeed,0),t.update();break;case t.keys.RIGHT:t.pan(-t.keyPanSpeed,0),t.update();break}}function k(L){if(t.enabled!==!1){switch(L.touches.length){case 1:if(t.noRotate===!0)return;p=m.TOUCH_ROTATE,i.set(L.touches[0].pageX,L.touches[0].pageY);break;case 2:if(t.noZoom===!0)return;p=m.TOUCH_DOLLY;var W=L.touches[0].pageX-L.touches[1].pageX,J=L.touches[0].pageY-L.touches[1].pageY,$=Math.sqrt(W*W+J*J);h.set(0,$);break;case 3:if(t.noPan===!0)return;p=m.TOUCH_PAN,a.set(L.touches[0].pageX,L.touches[0].pageY);break;default:p=m.NONE}t.dispatchEvent(_)}}function D(L){if(t.enabled!==!1){L.preventDefault(),L.stopPropagation();var W=t.domElement===document?t.domElement.body:t.domElement;switch(L.touches.length){case 1:if(t.noRotate===!0||p!==m.TOUCH_ROTATE)return;n.set(L.touches[0].pageX,L.touches[0].pageY),r.subVectors(n,i),t.rotateLeft(2*Math.PI*r.x/W.clientWidth*t.rotateSpeed),t.rotateUp(2*Math.PI*r.y/W.clientHeight*t.rotateSpeed),i.copy(n),t.update();break;case 2:if(t.noZoom===!0||p!==m.TOUCH_DOLLY)return;var J=L.touches[0].pageX-L.touches[1].pageX,$=L.touches[0].pageY-L.touches[1].pageY,q=Math.sqrt(J*J+$*$);f.set(0,q),d.subVectors(f,h),d.y>0?t.dollyOut():t.dollyIn(),h.copy(f),t.update();break;case 3:if(t.noPan===!0||p!==m.TOUCH_PAN)return;o.set(L.touches[0].pageX,L.touches[0].pageY),c.subVectors(o,a),t.pan(c.x,c.y),a.copy(o),t.update();break;default:p=m.NONE}}}function F(){t.enabled!==!1&&(t.dispatchEvent(M),p=m.NONE)}this.domElement.addEventListener("contextmenu",function(L){L.preventDefault()},!1),this.domElement.addEventListener("mousedown",R,!1),this.domElement.addEventListener("mousewheel",w,!1),this.domElement.addEventListener("DOMMouseScroll",w,!1),this.domElement.addEventListener("touchstart",k,!1),this.domElement.addEventListener("touchend",F,!1),this.domElement.addEventListener("touchmove",D,!1),window.addEventListener("keydown",Z,!1)}Vc.prototype=Object.create(Cn.prototype);const Kg=(s,e)=>typeof e>"u"||+e==0?Math.round(s):(s=+s,e=+e,isNaN(s)||!(typeof e=="number"&&e%1===0)?NaN:(s=s.toString().split("e"),s=Math.round(+(s[0]+"e"+(s[1]?+s[1]-e:-e))),s=s.toString().split("e"),+(s[0]+"e"+(s[1]?+s[1]+e:e)))),Jg=(s,e,t,i,n)=>{const r=t.length,a=t[0].length;if(s<0||s>1)throw new Error("t out of bounds [0,1]: "+s);if(e<1)throw new Error("degree must be at least 1 (linear)");if(e>r-1)throw new Error("degree must be less than or equal to point count - 1");if(!n){n=[];for(let g=0;g<r;g++)n[g]=1}if(i){if(i.length!==r+e+1)throw new Error("bad knot vector length")}else{i=[];for(let g=0;g<r+e+1;g++)i[g]=g}const o=[e,i.length-1-e],c=i[o[0]],l=i[o[1]];s=s*(l-c)+c,s=Math.max(s,c),s=Math.min(s,l);let u;for(u=o[0];u<o[1]&&!(s>=i[u]&&s<=i[u+1]);u++);const h=[];for(let g=0;g<r;g++){h[g]=[];for(let v=0;v<a;v++)h[g][v]=t[g][v]*n[g];h[g][a]=n[g]}let f;for(let g=1;g<=e+1;g++)for(let v=u;v>u-e-1+g;v--){f=(s-i[v])/(i[v+e+1-g]-i[v]);for(let m=0;m<a+1;m++)h[v][m]=(1-f)*h[v-1][m]+f*h[v][m]}const d=[];for(let g=0;g<a;g++)d[g]=Kg(h[u][g]/h[u][a],-9);return d};function Qg(){var s=Object.create(null);function e(n,r){var a=n.id,o=n.name,c=n.dependencies;c===void 0&&(c=[]);var l=n.init;l===void 0&&(l=function(){});var u=n.getTransferables;if(u===void 0&&(u=null),!s[a])try{c=c.map(function(f){return f&&f.isWorkerModule&&(e(f,function(d){if(d instanceof Error)throw d}),f=s[f.id].value),f}),l=i("<"+o+">.init",l),u&&(u=i("<"+o+">.getTransferables",u));var h=null;typeof l=="function"?h=l.apply(void 0,c):console.error("worker module init function failed to rehydrate"),s[a]={id:a,value:h,getTransferables:u},r(h)}catch(f){f&&f.noLog||console.error(f),r(f)}}function t(n,r){var a,o=n.id,c=n.args;(!s[o]||typeof s[o].value!="function")&&r(new Error("Worker module "+o+": not found or its 'init' did not return a function"));try{var l=(a=s[o]).value.apply(a,c);l&&typeof l.then=="function"?l.then(u,function(h){return r(h instanceof Error?h:new Error(""+h))}):u(l)}catch(h){r(h)}function u(h){try{var f=s[o].getTransferables&&s[o].getTransferables(h);(!f||!Array.isArray(f)||!f.length)&&(f=void 0),r(h,f)}catch(d){console.error(d),r(d)}}}function i(n,r){var a=void 0;self.troikaDefine=function(c){return a=c};var o=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+r+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(c){console.error(c)}return URL.revokeObjectURL(o),delete self.troikaDefine,a}self.addEventListener("message",function(n){var r=n.data,a=r.messageId,o=r.action,c=r.data;try{o==="registerModule"&&e(c,function(l){l instanceof Error?postMessage({messageId:a,success:!1,error:l.message}):postMessage({messageId:a,success:!0,result:{isCallable:typeof l=="function"}})}),o==="callModule"&&t(c,function(l,u){l instanceof Error?postMessage({messageId:a,success:!1,error:l.message}):postMessage({messageId:a,success:!0,result:l},u||void 0)})}catch(l){postMessage({messageId:a,success:!1,error:l.stack})}})}function $g(s){var e=function(){for(var t=[],i=arguments.length;i--;)t[i]=arguments[i];return e._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=s.dependencies,i=s.init;t=Array.isArray(t)?t.map(function(r){return r&&r._getInitResult?r._getInitResult():r}):[];var n=Promise.all(t).then(function(r){return i.apply(null,r)});return e._getInitResult=function(){return n},n},e}var Wc=function(){var s=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),s=!0}catch(t){typeof process<"u",console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return Wc=function(){return s},s},ev=0,tv=0,va=!1,hr=Object.create(null),fr=Object.create(null),Ia=Object.create(null);function Vi(s){if((!s||typeof s.init!="function")&&!va)throw new Error("requires `options.init` function");var e=s.dependencies,t=s.init,i=s.getTransferables,n=s.workerId;if(!Wc())return $g(s);n==null&&(n="#default");var r="workerModule"+ ++ev,a=s.name||r,o=null;e=e&&e.map(function(l){return typeof l=="function"&&!l.workerModuleData&&(va=!0,l=Vi({workerId:n,name:"<"+a+"> function dependency: "+l.name,init:`function(){return (
`+cs(l)+`
)}`}),va=!1),l&&l.workerModuleData&&(l=l.workerModuleData),l});function c(){for(var l=[],u=arguments.length;u--;)l[u]=arguments[u];if(!o){o=Vl(n,"registerModule",c.workerModuleData);var h=function(){o=null,fr[n].delete(h)};(fr[n]||(fr[n]=new Set)).add(h)}return o.then(function(f){var d=f.isCallable;if(d)return Vl(n,"callModule",{id:r,args:l});throw new Error("Worker module function was called but `init` did not return a callable function")})}return c.workerModuleData={isWorkerModule:!0,id:r,name:a,dependencies:e,init:cs(t),getTransferables:i&&cs(i)},c}function nv(s){fr[s]&&fr[s].forEach(function(e){e()}),hr[s]&&(hr[s].terminate(),delete hr[s])}function cs(s){var e=s.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function iv(s){var e=hr[s];if(!e){var t=cs(Qg);e=hr[s]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+s.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(i){var n=i.data,r=n.messageId,a=Ia[r];if(!a)throw new Error("WorkerModule response with empty or unknown messageId");delete Ia[r],a(n)}}return e}function Vl(s,e,t){return new Promise(function(i,n){var r=++tv;Ia[r]=function(a){a.success?i(a.result):n(new Error("Error in worker "+e+" call: "+a.error))},iv(s).postMessage({messageId:r,action:e,data:t})})}function Xc(){var s=function(e){function t(q,Y,O,H,z,T,P,N){var E=1-P;N.x=E*E*q+2*E*P*O+P*P*z,N.y=E*E*Y+2*E*P*H+P*P*T}function i(q,Y,O,H,z,T,P,N,E,G){var oe=1-E;G.x=oe*oe*oe*q+3*oe*oe*E*O+3*oe*E*E*z+E*E*E*P,G.y=oe*oe*oe*Y+3*oe*oe*E*H+3*oe*E*E*T+E*E*E*N}function n(q,Y){for(var O=/([MLQCZ])([^MLQCZ]*)/g,H,z,T,P,N;H=O.exec(q);){var E=H[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(G){return parseFloat(G)});switch(H[1]){case"M":P=z=E[0],N=T=E[1];break;case"L":(E[0]!==P||E[1]!==N)&&Y("L",P,N,P=E[0],N=E[1]);break;case"Q":{Y("Q",P,N,P=E[2],N=E[3],E[0],E[1]);break}case"C":{Y("C",P,N,P=E[4],N=E[5],E[0],E[1],E[2],E[3]);break}case"Z":(P!==z||N!==T)&&Y("L",P,N,z,T);break}}}function r(q,Y,O){O===void 0&&(O=16);var H={x:0,y:0};n(q,function(z,T,P,N,E,G,oe,Q,le){switch(z){case"L":Y(T,P,N,E);break;case"Q":{for(var X=T,te=P,ie=1;ie<O;ie++)t(T,P,G,oe,N,E,ie/(O-1),H),Y(X,te,H.x,H.y),X=H.x,te=H.y;break}case"C":{for(var pe=T,ue=P,Se=1;Se<O;Se++)i(T,P,G,oe,Q,le,N,E,Se/(O-1),H),Y(pe,ue,H.x,H.y),pe=H.x,ue=H.y;break}}})}var a="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",o="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",c=new WeakMap,l={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(q,Y){var O=q.getContext?q.getContext("webgl",l):q,H=c.get(O);if(!H){let oe=function(pe){var ue=T[pe];if(!ue&&(ue=T[pe]=O.getExtension(pe),!ue))throw new Error(pe+" not supported");return ue},Q=function(pe,ue){var Se=O.createShader(ue);return O.shaderSource(Se,pe),O.compileShader(Se),Se},le=function(pe,ue,Se,he){if(!P[pe]){var xe={},Te={},de=O.createProgram();O.attachShader(de,Q(ue,O.VERTEX_SHADER)),O.attachShader(de,Q(Se,O.FRAGMENT_SHADER)),O.linkProgram(de),P[pe]={program:de,transaction:function(b){O.useProgram(de),b({setUniform:function(re,ge){for(var me=[],B=arguments.length-2;B-- >0;)me[B]=arguments[B+2];var ae=Te[ge]||(Te[ge]=O.getUniformLocation(de,ge));O["uniform"+re].apply(O,[ae].concat(me))},setAttribute:function(re,ge,me,B,ae){var ee=xe[re];ee||(ee=xe[re]={buf:O.createBuffer(),loc:O.getAttribLocation(de,re),data:null}),O.bindBuffer(O.ARRAY_BUFFER,ee.buf),O.vertexAttribPointer(ee.loc,ge,O.FLOAT,!1,0,0),O.enableVertexAttribArray(ee.loc),z?O.vertexAttribDivisor(ee.loc,B):oe("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(ee.loc,B),ae!==ee.data&&(O.bufferData(O.ARRAY_BUFFER,ae,me),ee.data=ae)}})}}}P[pe].transaction(he)},X=function(pe,ue){E++;try{O.activeTexture(O.TEXTURE0+E);var Se=N[pe];Se||(Se=N[pe]=O.createTexture(),O.bindTexture(O.TEXTURE_2D,Se),O.texParameteri(O.TEXTURE_2D,O.TEXTURE_MIN_FILTER,O.NEAREST),O.texParameteri(O.TEXTURE_2D,O.TEXTURE_MAG_FILTER,O.NEAREST)),O.bindTexture(O.TEXTURE_2D,Se),ue(Se,E)}finally{E--}},te=function(pe,ue,Se){var he=O.createFramebuffer();G.push(he),O.bindFramebuffer(O.FRAMEBUFFER,he),O.activeTexture(O.TEXTURE0+ue),O.bindTexture(O.TEXTURE_2D,pe),O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,pe,0);try{Se(he)}finally{O.deleteFramebuffer(he),O.bindFramebuffer(O.FRAMEBUFFER,G[--G.length-1]||null)}},ie=function(){T={},P={},N={},E=-1,G.length=0};var z=typeof WebGL2RenderingContext<"u"&&O instanceof WebGL2RenderingContext,T={},P={},N={},E=-1,G=[];O.canvas.addEventListener("webglcontextlost",function(pe){ie(),pe.preventDefault()},!1),c.set(O,H={gl:O,isWebGL2:z,getExtension:oe,withProgram:le,withTexture:X,withTextureFramebuffer:te,handleContextLoss:ie})}Y(H)}function h(q,Y,O,H,z,T,P,N){P===void 0&&(P=15),N===void 0&&(N=null),u(q,function(E){var G=E.gl,oe=E.withProgram,Q=E.withTexture;Q("copy",function(le,X){G.texImage2D(G.TEXTURE_2D,0,G.RGBA,z,T,0,G.RGBA,G.UNSIGNED_BYTE,Y),oe("copy",a,o,function(te){var ie=te.setUniform,pe=te.setAttribute;pe("aUV",2,G.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),ie("1i","image",X),G.bindFramebuffer(G.FRAMEBUFFER,N||null),G.disable(G.BLEND),G.colorMask(P&8,P&4,P&2,P&1),G.viewport(O,H,z,T),G.scissor(O,H,z,T),G.drawArrays(G.TRIANGLES,0,3)})})})}function f(q,Y,O){var H=q.width,z=q.height;u(q,function(T){var P=T.gl,N=new Uint8Array(H*z*4);P.readPixels(0,0,H,z,P.RGBA,P.UNSIGNED_BYTE,N),q.width=Y,q.height=O,h(P,N,0,0,H,z)})}var d=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:h,resizeWebGLCanvasWithoutClearing:f});function g(q,Y,O,H,z,T){T===void 0&&(T=1);var P=new Uint8Array(q*Y),N=H[2]-H[0],E=H[3]-H[1],G=[];r(O,function(pe,ue,Se,he){G.push({x1:pe,y1:ue,x2:Se,y2:he,minX:Math.min(pe,Se),minY:Math.min(ue,he),maxX:Math.max(pe,Se),maxY:Math.max(ue,he)})}),G.sort(function(pe,ue){return pe.maxX-ue.maxX});for(var oe=0;oe<q;oe++)for(var Q=0;Q<Y;Q++){var le=te(H[0]+N*(oe+.5)/q,H[1]+E*(Q+.5)/Y),X=Math.pow(1-Math.abs(le)/z,T)/2;le<0&&(X=1-X),X=Math.max(0,Math.min(255,Math.round(X*255))),P[Q*q+oe]=X}return P;function te(pe,ue){for(var Se=1/0,he=1/0,xe=G.length;xe--;){var Te=G[xe];if(Te.maxX+he<=pe)break;if(pe+he>Te.minX&&ue-he<Te.maxY&&ue+he>Te.minY){var de=p(pe,ue,Te.x1,Te.y1,Te.x2,Te.y2);de<Se&&(Se=de,he=Math.sqrt(Se))}}return ie(pe,ue)&&(he=-he),he}function ie(pe,ue){for(var Se=0,he=G.length;he--;){var xe=G[he];if(xe.maxX<=pe)break;var Te=xe.y1>ue!=xe.y2>ue&&pe<(xe.x2-xe.x1)*(ue-xe.y1)/(xe.y2-xe.y1)+xe.x1;Te&&(Se+=xe.y1<xe.y2?1:-1)}return Se!==0}}function v(q,Y,O,H,z,T,P,N,E,G){T===void 0&&(T=1),N===void 0&&(N=0),E===void 0&&(E=0),G===void 0&&(G=0),m(q,Y,O,H,z,T,P,null,N,E,G)}function m(q,Y,O,H,z,T,P,N,E,G,oe){T===void 0&&(T=1),E===void 0&&(E=0),G===void 0&&(G=0),oe===void 0&&(oe=0);for(var Q=g(q,Y,O,H,z,T),le=new Uint8Array(Q.length*4),X=0;X<Q.length;X++)le[X*4+oe]=Q[X];h(P,le,E,G,q,Y,1<<3-oe,N)}function p(q,Y,O,H,z,T){var P=z-O,N=T-H,E=P*P+N*N,G=E?Math.max(0,Math.min(1,((q-O)*P+(Y-H)*N)/E)):0,oe=q-(O+G*P),Q=Y-(H+G*N);return oe*oe+Q*Q}var S=Object.freeze({__proto__:null,generate:g,generateIntoCanvas:v,generateIntoFramebuffer:m}),_="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",M="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",y="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",A=new Float32Array([0,0,2,0,0,2]),R=null,I=!1,x={},w=new WeakMap;function Z(q){if(!I&&!L(q))throw new Error("WebGL generation not supported")}function k(q,Y,O,H,z,T,P){if(T===void 0&&(T=1),P===void 0&&(P=null),!P&&(P=R,!P)){var N=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!N)throw new Error("OffscreenCanvas or DOM canvas not supported");P=R=N.getContext("webgl",{depth:!1})}Z(P);var E=new Uint8Array(q*Y*4);u(P,function(le){var X=le.gl,te=le.withTexture,ie=le.withTextureFramebuffer;te("readable",function(pe,ue){X.texImage2D(X.TEXTURE_2D,0,X.RGBA,q,Y,0,X.RGBA,X.UNSIGNED_BYTE,null),ie(pe,ue,function(Se){F(q,Y,O,H,z,T,X,Se,0,0,0),X.readPixels(0,0,q,Y,X.RGBA,X.UNSIGNED_BYTE,E)})})});for(var G=new Uint8Array(q*Y),oe=0,Q=0;oe<E.length;oe+=4)G[Q++]=E[oe];return G}function D(q,Y,O,H,z,T,P,N,E,G){T===void 0&&(T=1),N===void 0&&(N=0),E===void 0&&(E=0),G===void 0&&(G=0),F(q,Y,O,H,z,T,P,null,N,E,G)}function F(q,Y,O,H,z,T,P,N,E,G,oe){T===void 0&&(T=1),E===void 0&&(E=0),G===void 0&&(G=0),oe===void 0&&(oe=0),Z(P);var Q=[];r(O,function(le,X,te,ie){Q.push(le,X,te,ie)}),Q=new Float32Array(Q),u(P,function(le){var X=le.gl,te=le.isWebGL2,ie=le.getExtension,pe=le.withProgram,ue=le.withTexture,Se=le.withTextureFramebuffer,he=le.handleContextLoss;if(ue("rawDistances",function(xe,Te){(q!==xe._lastWidth||Y!==xe._lastHeight)&&X.texImage2D(X.TEXTURE_2D,0,X.RGBA,xe._lastWidth=q,xe._lastHeight=Y,0,X.RGBA,X.UNSIGNED_BYTE,null),pe("main",_,M,function(de){var C=de.setAttribute,b=de.setUniform,K=!te&&ie("ANGLE_instanced_arrays"),re=!te&&ie("EXT_blend_minmax");C("aUV",2,X.STATIC_DRAW,0,A),C("aLineSegment",4,X.DYNAMIC_DRAW,1,Q),b.apply(void 0,["4f","uGlyphBounds"].concat(H)),b("1f","uMaxDistance",z),b("1f","uExponent",T),Se(xe,Te,function(ge){X.enable(X.BLEND),X.colorMask(!0,!0,!0,!0),X.viewport(0,0,q,Y),X.scissor(0,0,q,Y),X.blendFunc(X.ONE,X.ONE),X.blendEquationSeparate(X.FUNC_ADD,te?X.MAX:re.MAX_EXT),X.clear(X.COLOR_BUFFER_BIT),te?X.drawArraysInstanced(X.TRIANGLES,0,3,Q.length/4):K.drawArraysInstancedANGLE(X.TRIANGLES,0,3,Q.length/4)})}),pe("post",a,y,function(de){de.setAttribute("aUV",2,X.STATIC_DRAW,0,A),de.setUniform("1i","tex",Te),X.bindFramebuffer(X.FRAMEBUFFER,N),X.disable(X.BLEND),X.colorMask(oe===0,oe===1,oe===2,oe===3),X.viewport(E,G,q,Y),X.scissor(E,G,q,Y),X.drawArrays(X.TRIANGLES,0,3)})}),X.isContextLost())throw he(),new Error("webgl context lost")})}function L(q){var Y=!q||q===R?x:q.canvas||q,O=w.get(Y);if(O===void 0){I=!0;var H=null;try{var z=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],T=k(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,q);O=T&&z.length===T.length&&T.every(function(P,N){return P===z[N]}),O||(H="bad trial run results",console.info(z,T))}catch(P){O=!1,H=P.message}H&&console.warn("WebGL SDF generation not supported:",H),I=!1,w.set(Y,O)}return O}var W=Object.freeze({__proto__:null,generate:k,generateIntoCanvas:D,generateIntoFramebuffer:F,isSupported:L});function J(q,Y,O,H,z,T){z===void 0&&(z=Math.max(H[2]-H[0],H[3]-H[1])/2),T===void 0&&(T=1);try{return k.apply(W,arguments)}catch(P){return console.info("WebGL SDF generation failed, falling back to JS",P),g.apply(S,arguments)}}function $(q,Y,O,H,z,T,P,N,E,G){z===void 0&&(z=Math.max(H[2]-H[0],H[3]-H[1])/2),T===void 0&&(T=1),N===void 0&&(N=0),E===void 0&&(E=0),G===void 0&&(G=0);try{return D.apply(W,arguments)}catch(oe){return console.info("WebGL SDF generation failed, falling back to JS",oe),v.apply(S,arguments)}}return e.forEachPathCommand=n,e.generate=J,e.generateIntoCanvas=$,e.javascript=S,e.pathToLineSegments=r,e.webgl=W,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return s}function rv(){var s=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},i={},n={};i.L=1,n[1]="L",Object.keys(t).forEach(function(he,xe){i[he]=1<<xe+1,n[i[he]]=he}),Object.freeze(i);var r=i.LRI|i.RLI|i.FSI,a=i.L|i.R|i.AL,o=i.B|i.S|i.WS|i.ON|i.FSI|i.LRI|i.RLI|i.PDI,c=i.BN|i.RLE|i.LRE|i.RLO|i.LRO|i.PDF,l=i.S|i.WS|i.B|r|i.PDI|c,u=null;function h(){if(!u){u=new Map;var he=function(Te){if(t.hasOwnProperty(Te)){var de=0;t[Te].split(",").forEach(function(C){var b=C.split("+"),K=b[0],re=b[1];K=parseInt(K,36),re=re?parseInt(re,36):0,u.set(de+=K,i[Te]);for(var ge=0;ge<re;ge++)u.set(++de,i[Te])})}};for(var xe in t)he(xe)}}function f(he){return h(),u.get(he.codePointAt(0))||i.L}function d(he){return n[f(he)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function v(he,xe){var Te=36,de=0,C=new Map,b=xe&&new Map,K;return he.split(",").forEach(function re(ge){if(ge.indexOf("+")!==-1)for(var me=+ge;me--;)re(K);else{K=ge;var B=ge.split(">"),ae=B[0],ee=B[1];ae=String.fromCodePoint(de+=parseInt(ae,Te)),ee=String.fromCodePoint(de+=parseInt(ee,Te)),C.set(ae,ee),xe&&b.set(ee,ae)}}),{map:C,reverseMap:b}}var m,p,S;function _(){if(!m){var he=v(g.pairs,!0),xe=he.map,Te=he.reverseMap;m=xe,p=Te,S=v(g.canonical,!1).map}}function M(he){return _(),m.get(he)||null}function y(he){return _(),p.get(he)||null}function A(he){return _(),S.get(he)||null}var R=i.L,I=i.R,x=i.EN,w=i.ES,Z=i.ET,k=i.AN,D=i.CS,F=i.B,L=i.S,W=i.ON,J=i.BN,$=i.NSM,q=i.AL,Y=i.LRO,O=i.RLO,H=i.LRE,z=i.RLE,T=i.PDF,P=i.LRI,N=i.RLI,E=i.FSI,G=i.PDI;function oe(he,xe){for(var Te=125,de=new Uint32Array(he.length),C=0;C<he.length;C++)de[C]=f(he[C]);var b=new Map;function K(Rt,Wt){var Ct=de[Rt];de[Rt]=Wt,b.set(Ct,b.get(Ct)-1),Ct&o&&b.set(o,b.get(o)-1),b.set(Wt,(b.get(Wt)||0)+1),Wt&o&&b.set(o,(b.get(o)||0)+1)}for(var re=new Uint8Array(he.length),ge=new Map,me=[],B=null,ae=0;ae<he.length;ae++)B||me.push(B={start:ae,end:he.length-1,level:xe==="rtl"?1:xe==="ltr"?0:lo(ae,!1)}),de[ae]&F&&(B.end=ae,B=null);for(var ee=z|H|O|Y|r|G|T|F,be=function(Rt){return Rt+(Rt&1?1:2)},Ae=function(Rt){return Rt+(Rt&1?2:1)},we=0;we<me.length;we++){B=me[we];var Ee=[{_level:B.level,_override:0,_isolate:0}],ye=void 0,Pe=0,De=0,Ze=0;b.clear();for(var j=B.start;j<=B.end;j++){var ne=de[j];if(ye=Ee[Ee.length-1],b.set(ne,(b.get(ne)||0)+1),ne&o&&b.set(o,(b.get(o)||0)+1),ne&ee)if(ne&(z|H)){re[j]=ye._level;var ve=(ne===z?Ae:be)(ye._level);ve<=Te&&!Pe&&!De?Ee.push({_level:ve,_override:0,_isolate:0}):Pe||De++}else if(ne&(O|Y)){re[j]=ye._level;var Le=(ne===O?Ae:be)(ye._level);Le<=Te&&!Pe&&!De?Ee.push({_level:Le,_override:ne&O?I:R,_isolate:0}):Pe||De++}else if(ne&r){ne&E&&(ne=lo(j+1,!0)===1?N:P),re[j]=ye._level,ye._override&&K(j,ye._override);var Re=(ne===N?Ae:be)(ye._level);Re<=Te&&Pe===0&&De===0?(Ze++,Ee.push({_level:Re,_override:0,_isolate:1,_isolInitIndex:j})):Pe++}else if(ne&G){if(Pe>0)Pe--;else if(Ze>0){for(De=0;!Ee[Ee.length-1]._isolate;)Ee.pop();var Ue=Ee[Ee.length-1]._isolInitIndex;Ue!=null&&(ge.set(Ue,j),ge.set(j,Ue)),Ee.pop(),Ze--}ye=Ee[Ee.length-1],re[j]=ye._level,ye._override&&K(j,ye._override)}else ne&T?(Pe===0&&(De>0?De--:!ye._isolate&&Ee.length>1&&(Ee.pop(),ye=Ee[Ee.length-1])),re[j]=ye._level):ne&F&&(re[j]=B.level);else re[j]=ye._level,ye._override&&ne!==J&&K(j,ye._override)}for(var Be=[],Ve=null,Oe=B.start;Oe<=B.end;Oe++){var ze=de[Oe];if(!(ze&c)){var $e=re[Oe],et=ze&r,st=ze===G;Ve&&$e===Ve._level?(Ve._end=Oe,Ve._endsWithIsolInit=et):Be.push(Ve={_start:Oe,_end:Oe,_level:$e,_startsWithPDI:st,_endsWithIsolInit:et})}}for(var At=[],Jt=0;Jt<Be.length;Jt++){var Ht=Be[Jt];if(!Ht._startsWithPDI||Ht._startsWithPDI&&!ge.has(Ht._start)){for(var Qt=[Ve=Ht],U=void 0;Ve&&Ve._endsWithIsolInit&&(U=ge.get(Ve._end))!=null;)for(var ce=Jt+1;ce<Be.length;ce++)if(Be[ce]._start===U){Qt.push(Ve=Be[ce]);break}for(var fe=[],se=0;se<Qt.length;se++)for(var _e=Qt[se],Fe=_e._start;Fe<=_e._end;Fe++)fe.push(Fe);for(var Ne=re[fe[0]],ke=B.level,He=fe[0]-1;He>=0;He--)if(!(de[He]&c)){ke=re[He];break}var We=fe[fe.length-1],je=re[We],Ye=B.level;if(!(de[We]&r)){for(var Qe=We+1;Qe<=B.end;Qe++)if(!(de[Qe]&c)){Ye=re[Qe];break}}At.push({_seqIndices:fe,_sosType:Math.max(ke,Ne)%2?I:R,_eosType:Math.max(Ye,je)%2?I:R})}}for(var ut=0;ut<At.length;ut++){var Mt=At[ut],Ie=Mt._seqIndices,tt=Mt._sosType,Ke=Mt._eosType,$t=re[Ie[0]]&1?I:R;if(b.get($))for(var at=0;at<Ie.length;at++){var en=Ie[at];if(de[en]&$){for(var Kn=tt,tn=at-1;tn>=0;tn--)if(!(de[Ie[tn]]&c)){Kn=de[Ie[tn]];break}K(en,Kn&(r|G)?W:Kn)}}if(b.get(x))for(var yn=0;yn<Ie.length;yn++){var pt=Ie[yn];if(de[pt]&x)for(var Ft=yn-1;Ft>=-1;Ft--){var Jn=Ft===-1?tt:de[Ie[Ft]];if(Jn&a){Jn===q&&K(pt,k);break}}}if(b.get(q))for(var gt=0;gt<Ie.length;gt++){var Qn=Ie[gt];de[Qn]&q&&K(Qn,I)}if(b.get(w)||b.get(D))for(var Ln=1;Ln<Ie.length-1;Ln++){var $n=Ie[Ln];if(de[$n]&(w|D)){for(var ei=0,ys=0,Ms=Ln-1;Ms>=0&&(ei=de[Ie[Ms]],!!(ei&c));Ms--);for(var Ss=Ln+1;Ss<Ie.length&&(ys=de[Ie[Ss]],!!(ys&c));Ss++);ei===ys&&(de[$n]===w?ei===x:ei&(x|k))&&K($n,ei)}}if(b.get(x))for(var nn=0;nn<Ie.length;nn++){var tu=Ie[nn];if(de[tu]&x){for(var Mr=nn-1;Mr>=0&&de[Ie[Mr]]&(Z|c);Mr--)K(Ie[Mr],x);for(nn++;nn<Ie.length&&de[Ie[nn]]&(Z|c|x);nn++)de[Ie[nn]]!==x&&K(Ie[nn],x)}}if(b.get(Z)||b.get(w)||b.get(D))for(var Wi=0;Wi<Ie.length;Wi++){var Za=Ie[Wi];if(de[Za]&(Z|w|D)){K(Za,W);for(var Sr=Wi-1;Sr>=0&&de[Ie[Sr]]&c;Sr--)K(Ie[Sr],W);for(var Er=Wi+1;Er<Ie.length&&de[Ie[Er]]&c;Er++)K(Ie[Er],W)}}if(b.get(x))for(var Es=0,Ka=tt;Es<Ie.length;Es++){var Ja=Ie[Es],bs=de[Ja];bs&x?Ka===R&&K(Ja,R):bs&a&&(Ka=bs)}if(b.get(o)){var Xi=I|x|k,Qa=Xi|R,br=[];{for(var ti=[],ni=0;ni<Ie.length;ni++)if(de[Ie[ni]]&o){var ji=he[Ie[ni]],$a=void 0;if(M(ji)!==null)if(ti.length<63)ti.push({char:ji,seqIndex:ni});else break;else if(($a=y(ji))!==null)for(var Yi=ti.length-1;Yi>=0;Yi--){var Ts=ti[Yi].char;if(Ts===$a||Ts===y(A(ji))||M(A(Ts))===ji){br.push([ti[Yi].seqIndex,ni]),ti.length=Yi;break}}}br.sort(function(Rt,Wt){return Rt[0]-Wt[0]})}for(var ws=0;ws<br.length;ws++){for(var eo=br[ws],Tr=eo[0],As=eo[1],to=!1,Vt=0,Rs=Tr+1;Rs<As;Rs++){var no=Ie[Rs];if(de[no]&Qa){to=!0;var io=de[no]&Xi?I:R;if(io===$t){Vt=io;break}}}if(to&&!Vt){Vt=tt;for(var Cs=Tr-1;Cs>=0;Cs--){var ro=Ie[Cs];if(de[ro]&Qa){var so=de[ro]&Xi?I:R;so!==$t?Vt=so:Vt=$t;break}}}if(Vt){if(de[Ie[Tr]]=de[Ie[As]]=Vt,Vt!==$t){for(var qi=Tr+1;qi<Ie.length;qi++)if(!(de[Ie[qi]]&c)){f(he[Ie[qi]])&$&&(de[Ie[qi]]=Vt);break}}if(Vt!==$t){for(var Zi=As+1;Zi<Ie.length;Zi++)if(!(de[Ie[Zi]]&c)){f(he[Ie[Zi]])&$&&(de[Ie[Zi]]=Vt);break}}}}for(var Mn=0;Mn<Ie.length;Mn++)if(de[Ie[Mn]]&o){for(var ao=Mn,Ls=Mn,Ps=tt,Ki=Mn-1;Ki>=0;Ki--)if(de[Ie[Ki]]&c)ao=Ki;else{Ps=de[Ie[Ki]]&Xi?I:R;break}for(var oo=Ke,Ji=Mn+1;Ji<Ie.length;Ji++)if(de[Ie[Ji]]&(o|c))Ls=Ji;else{oo=de[Ie[Ji]]&Xi?I:R;break}for(var Us=ao;Us<=Ls;Us++)de[Ie[Us]]=Ps===oo?Ps:$t;Mn=Ls}}}for(var Pt=B.start;Pt<=B.end;Pt++){var nu=re[Pt],wr=de[Pt];if(nu&1?wr&(R|x|k)&&re[Pt]++:wr&I?re[Pt]++:wr&(k|x)&&(re[Pt]+=2),wr&c&&(re[Pt]=Pt===0?B.level:re[Pt-1]),Pt===B.end||f(he[Pt])&(L|F))for(var Ar=Pt;Ar>=0&&f(he[Ar])&l;Ar--)re[Ar]=B.level}}return{levels:re,paragraphs:me};function lo(Rt,Wt){for(var Ct=Rt;Ct<he.length;Ct++){var Sn=de[Ct];if(Sn&(I|q))return 1;if(Sn&(F|R)||Wt&&Sn===G)return 0;if(Sn&r){var co=iu(Ct);Ct=co===-1?he.length:co}}return 0}function iu(Rt){for(var Wt=1,Ct=Rt+1;Ct<he.length;Ct++){var Sn=de[Ct];if(Sn&F)break;if(Sn&G){if(--Wt===0)return Ct}else Sn&r&&Wt++}return-1}}var Q="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",le;function X(){if(!le){var he=v(Q,!0),xe=he.map,Te=he.reverseMap;Te.forEach(function(de,C){xe.set(C,de)}),le=xe}}function te(he){return X(),le.get(he)||null}function ie(he,xe,Te,de){var C=he.length;Te=Math.max(0,Te==null?0:+Te),de=Math.min(C-1,de==null?C-1:+de);for(var b=new Map,K=Te;K<=de;K++)if(xe[K]&1){var re=te(he[K]);re!==null&&b.set(K,re)}return b}function pe(he,xe,Te,de){var C=he.length;Te=Math.max(0,Te==null?0:+Te),de=Math.min(C-1,de==null?C-1:+de);var b=[];return xe.paragraphs.forEach(function(K){var re=Math.max(Te,K.start),ge=Math.min(de,K.end);if(re<ge){for(var me=xe.levels.slice(re,ge+1),B=ge;B>=re&&f(he[B])&l;B--)me[B]=K.level;for(var ae=K.level,ee=1/0,be=0;be<me.length;be++){var Ae=me[be];Ae>ae&&(ae=Ae),Ae<ee&&(ee=Ae|1)}for(var we=ae;we>=ee;we--)for(var Ee=0;Ee<me.length;Ee++)if(me[Ee]>=we){for(var ye=Ee;Ee+1<me.length&&me[Ee+1]>=we;)Ee++;Ee>ye&&b.push([ye+re,Ee+re])}}}),b}function ue(he,xe,Te,de){var C=Se(he,xe,Te,de),b=[].concat(he);return C.forEach(function(K,re){b[re]=(xe.levels[K]&1?te(he[K]):null)||he[K]}),b.join("")}function Se(he,xe,Te,de){for(var C=pe(he,xe,Te,de),b=[],K=0;K<he.length;K++)b[K]=K;return C.forEach(function(re){for(var ge=re[0],me=re[1],B=b.slice(ge,me+1),ae=B.length;ae--;)b[me-ae]=B[ae]}),b}return e.closingToOpeningBracket=y,e.getBidiCharType=f,e.getBidiCharTypeName=d,e.getCanonicalBracket=A,e.getEmbeddingLevels=oe,e.getMirroredCharacter=te,e.getMirroredCharactersMap=ie,e.getReorderSegments=pe,e.getReorderedIndices=Se,e.getReorderedString=ue,e.openingToClosingBracket=M,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return s}const jc=/\bvoid\s+main\s*\(\s*\)\s*{/g;function Fa(s){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(i,n){let r=Ge[n];return r?Fa(r):i}return s.replace(e,t)}const vt=[];for(let s=0;s<256;s++)vt[s]=(s<16?"0":"")+s.toString(16);function sv(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vt[s&255]+vt[s>>8&255]+vt[s>>16&255]+vt[s>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[i&255]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]).toUpperCase()}const In=Object.assign||function(){let s=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let i=arguments[e];if(i)for(let n in i)Object.prototype.hasOwnProperty.call(i,n)&&(s[n]=i[n])}return s},av=Date.now(),Wl=new WeakMap,Xl=new Map;let ov=1e10;function Na(s,e){const t=hv(e);let i=Wl.get(s);if(i||Wl.set(s,i=Object.create(null)),i[t])return new i[t];const n=`_onBeforeCompile${t}`,r=function(l,u){s.onBeforeCompile.call(this,l,u);const h=this.customProgramCacheKey()+"|"+l.vertexShader+"|"+l.fragmentShader;let f=Xl[h];if(!f){const d=lv(this,l,e,t);f=Xl[h]=d}l.vertexShader=f.vertexShader,l.fragmentShader=f.fragmentShader,In(l.uniforms,this.uniforms),e.timeUniform&&(l.uniforms[e.timeUniform]={get value(){return Date.now()-av}}),this[n]&&this[n](l)},a=function(){return o(e.chained?s:s.clone())},o=function(l){const u=Object.create(l,c);return Object.defineProperty(u,"baseMaterial",{value:s}),Object.defineProperty(u,"id",{value:ov++}),u.uuid=sv(),u.uniforms=In({},l.uniforms,e.uniforms),u.defines=In({},l.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=In({},l.extensions,e.extensions),u._listeners=void 0,u},c={constructor:{value:a},isDerivedMaterial:{value:!0},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return s.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return r},set(l){this[n]=l}},copy:{writable:!0,configurable:!0,value:function(l){return s.copy.call(this,l),!s.isShaderMaterial&&!s.isDerivedMaterial&&(In(this.extensions,l.extensions),In(this.defines,l.defines),In(this.uniforms,Ha.clone(l.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const l=new s.constructor;return o(l).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let l=this._depthMaterial;return l||(l=this._depthMaterial=Na(s.isDerivedMaterial?s.getDepthMaterial():new Cc({depthPacking:uc}),e),l.defines.IS_DEPTH_MATERIAL="",l.uniforms=this.uniforms),l}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let l=this._distanceMaterial;return l||(l=this._distanceMaterial=Na(s.isDerivedMaterial?s.getDistanceMaterial():new Lc,e),l.defines.IS_DISTANCE_MATERIAL="",l.uniforms=this.uniforms),l}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:l,_distanceMaterial:u}=this;l&&l.dispose(),u&&u.dispose(),s.dispose.call(this)}}};return i[t]=a,new a}function lv(s,{vertexShader:e,fragmentShader:t},i,n){let{vertexDefs:r,vertexMainIntro:a,vertexMainOutro:o,vertexTransform:c,fragmentDefs:l,fragmentMainIntro:u,fragmentMainOutro:h,fragmentColorTransform:f,customRewriter:d,timeUniform:g}=i;if(r=r||"",a=a||"",o=o||"",l=l||"",u=u||"",h=h||"",(c||d)&&(e=Fa(e)),(f||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=Fa(t)),d){let v=d({vertexShader:e,fragmentShader:t});e=v.vertexShader,t=v.fragmentShader}if(f){let v=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,m=>(v.push(m),"")),h=`${f}
${v.join(`
`)}
${h}`}if(g){const v=`
uniform float ${g};
`;r=v+r,l=v+l}return c&&(e=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${e}
`,r=`${r}
void troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${c}
}
`,a=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});
${a}
`,e=e.replace(/\b(position|normal|uv)\b/g,(v,m,p,S)=>/\battribute\s+vec[23]\s+$/.test(S.substr(0,p))?m:`troika_${m}_${n}`),s.map&&s.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),e=jl(e,n,r,a,o),t=jl(t,n,l,u,h),{vertexShader:e,fragmentShader:t}}function jl(s,e,t,i,n){return(i||n||t)&&(s=s.replace(jc,`
${t}
void troikaOrigMain${e}() {`),s+=`
void main() {
  ${i}
  troikaOrigMain${e}();
  ${n}
}`),s}function cv(s,e){return s==="uniforms"?void 0:typeof e=="function"?e.toString():e}let uv=0;const Yl=new Map;function hv(s){const e=JSON.stringify(s,cv);let t=Yl.get(e);return t==null&&Yl.set(e,t=++uv),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function fv(){return typeof window>"u"&&(self.window=self),function(s){var e={parse:function(n){var r=e._bin,a=new Uint8Array(n);if(r.readASCII(a,0,4)=="ttcf"){var o=4;r.readUshort(a,o),o+=2,r.readUshort(a,o),o+=2;var c=r.readUint(a,o);o+=4;for(var l=[],u=0;u<c;u++){var h=r.readUint(a,o);o+=4,l.push(e._readFont(a,h))}return l}return[e._readFont(a,0)]},_readFont:function(n,r){var a=e._bin,o=r;a.readFixed(n,r),r+=4;var c=a.readUshort(n,r);r+=2,a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2;for(var l=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],u={_data:n,_offset:o},h={},f=0;f<c;f++){var d=a.readASCII(n,r,4);r+=4,a.readUint(n,r),r+=4;var g=a.readUint(n,r);r+=4;var v=a.readUint(n,r);r+=4,h[d]={offset:g,length:v}}for(f=0;f<l.length;f++){var m=l[f];h[m]&&(u[m.trim()]=e[m.trim()].parse(n,h[m].offset,h[m].length,u))}return u},_tabOffset:function(n,r,a){for(var o=e._bin,c=o.readUshort(n,a+4),l=a+12,u=0;u<c;u++){var h=o.readASCII(n,l,4);l+=4,o.readUint(n,l),l+=4;var f=o.readUint(n,l);if(l+=4,o.readUint(n,l),l+=4,h==r)return f}return 0}};e._bin={readFixed:function(n,r){return(n[r]<<8|n[r+1])+(n[r+2]<<8|n[r+3])/65540},readF2dot14:function(n,r){return e._bin.readShort(n,r)/16384},readInt:function(n,r){return e._bin._view(n).getInt32(r)},readInt8:function(n,r){return e._bin._view(n).getInt8(r)},readShort:function(n,r){return e._bin._view(n).getInt16(r)},readUshort:function(n,r){return e._bin._view(n).getUint16(r)},readUshorts:function(n,r,a){for(var o=[],c=0;c<a;c++)o.push(e._bin.readUshort(n,r+2*c));return o},readUint:function(n,r){return e._bin._view(n).getUint32(r)},readUint64:function(n,r){return 4294967296*e._bin.readUint(n,r)+e._bin.readUint(n,r+4)},readASCII:function(n,r,a){for(var o="",c=0;c<a;c++)o+=String.fromCharCode(n[r+c]);return o},readUnicode:function(n,r,a){for(var o="",c=0;c<a;c++){var l=n[r++]<<8|n[r++];o+=String.fromCharCode(l)}return o},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,r,a){var o=e._bin._tdec;return o&&r==0&&a==n.length?o.decode(n):e._bin.readASCII(n,r,a)},readBytes:function(n,r,a){for(var o=[],c=0;c<a;c++)o.push(n[r+c]);return o},readASCIIArray:function(n,r,a){for(var o=[],c=0;c<a;c++)o.push(String.fromCharCode(n[r+c]));return o},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,r,a,o,c){var l=e._bin,u={},h=r;l.readFixed(n,r),r+=4;var f=l.readUshort(n,r);r+=2;var d=l.readUshort(n,r);r+=2;var g=l.readUshort(n,r);return r+=2,u.scriptList=e._lctf.readScriptList(n,h+f),u.featureList=e._lctf.readFeatureList(n,h+d),u.lookupList=e._lctf.readLookupList(n,h+g,c),u},e._lctf.readLookupList=function(n,r,a){var o=e._bin,c=r,l=[],u=o.readUshort(n,r);r+=2;for(var h=0;h<u;h++){var f=o.readUshort(n,r);r+=2;var d=e._lctf.readLookupTable(n,c+f,a);l.push(d)}return l},e._lctf.readLookupTable=function(n,r,a){var o=e._bin,c=r,l={tabs:[]};l.ltype=o.readUshort(n,r),r+=2,l.flag=o.readUshort(n,r),r+=2;var u=o.readUshort(n,r);r+=2;for(var h=l.ltype,f=0;f<u;f++){var d=o.readUshort(n,r);r+=2;var g=a(n,h,c+d,l);l.tabs.push(g)}return l},e._lctf.numOfOnes=function(n){for(var r=0,a=0;a<32;a++)n>>>a&1&&r++;return r},e._lctf.readClassDef=function(n,r){var a=e._bin,o=[],c=a.readUshort(n,r);if(r+=2,c==1){var l=a.readUshort(n,r);r+=2;var u=a.readUshort(n,r);r+=2;for(var h=0;h<u;h++)o.push(l+h),o.push(l+h),o.push(a.readUshort(n,r)),r+=2}if(c==2){var f=a.readUshort(n,r);for(r+=2,h=0;h<f;h++)o.push(a.readUshort(n,r)),r+=2,o.push(a.readUshort(n,r)),r+=2,o.push(a.readUshort(n,r)),r+=2}return o},e._lctf.getInterval=function(n,r){for(var a=0;a<n.length;a+=3){var o=n[a],c=n[a+1];if(n[a+2],o<=r&&r<=c)return a}return-1},e._lctf.readCoverage=function(n,r){var a=e._bin,o={};o.fmt=a.readUshort(n,r),r+=2;var c=a.readUshort(n,r);return r+=2,o.fmt==1&&(o.tab=a.readUshorts(n,r,c)),o.fmt==2&&(o.tab=a.readUshorts(n,r,3*c)),o},e._lctf.coverageIndex=function(n,r){var a=n.tab;if(n.fmt==1)return a.indexOf(r);if(n.fmt==2){var o=e._lctf.getInterval(a,r);if(o!=-1)return a[o+2]+(r-a[o])}return-1},e._lctf.readFeatureList=function(n,r){var a=e._bin,o=r,c=[],l=a.readUshort(n,r);r+=2;for(var u=0;u<l;u++){var h=a.readASCII(n,r,4);r+=4;var f=a.readUshort(n,r);r+=2;var d=e._lctf.readFeatureTable(n,o+f);d.tag=h.trim(),c.push(d)}return c},e._lctf.readFeatureTable=function(n,r){var a=e._bin,o=r,c={},l=a.readUshort(n,r);r+=2,l>0&&(c.featureParams=o+l);var u=a.readUshort(n,r);r+=2,c.tab=[];for(var h=0;h<u;h++)c.tab.push(a.readUshort(n,r+2*h));return c},e._lctf.readScriptList=function(n,r){var a=e._bin,o=r,c={},l=a.readUshort(n,r);r+=2;for(var u=0;u<l;u++){var h=a.readASCII(n,r,4);r+=4;var f=a.readUshort(n,r);r+=2,c[h.trim()]=e._lctf.readScriptTable(n,o+f)}return c},e._lctf.readScriptTable=function(n,r){var a=e._bin,o=r,c={},l=a.readUshort(n,r);r+=2,l>0&&(c.default=e._lctf.readLangSysTable(n,o+l));var u=a.readUshort(n,r);r+=2;for(var h=0;h<u;h++){var f=a.readASCII(n,r,4);r+=4;var d=a.readUshort(n,r);r+=2,c[f.trim()]=e._lctf.readLangSysTable(n,o+d)}return c},e._lctf.readLangSysTable=function(n,r){var a=e._bin,o={};a.readUshort(n,r),r+=2,o.reqFeature=a.readUshort(n,r),r+=2;var c=a.readUshort(n,r);return r+=2,o.features=a.readUshorts(n,r,c),o},e.CFF={},e.CFF.parse=function(n,r,a){var o=e._bin;(n=new Uint8Array(n.buffer,r,a))[r=0],n[++r],n[++r],n[++r],r++;var c=[];r=e.CFF.readIndex(n,r,c);for(var l=[],u=0;u<c.length-1;u++)l.push(o.readASCII(n,r+c[u],c[u+1]-c[u]));r+=c[c.length-1];var h=[];r=e.CFF.readIndex(n,r,h);var f=[];for(u=0;u<h.length-1;u++)f.push(e.CFF.readDict(n,r+h[u],r+h[u+1]));r+=h[h.length-1];var d=f[0],g=[];r=e.CFF.readIndex(n,r,g);var v=[];for(u=0;u<g.length-1;u++)v.push(o.readASCII(n,r+g[u],g[u+1]-g[u]));if(r+=g[g.length-1],e.CFF.readSubrs(n,r,d),d.CharStrings){r=d.CharStrings,g=[],r=e.CFF.readIndex(n,r,g);var m=[];for(u=0;u<g.length-1;u++)m.push(o.readBytes(n,r+g[u],g[u+1]-g[u]));d.CharStrings=m}if(d.ROS){r=d.FDArray;var p=[];for(r=e.CFF.readIndex(n,r,p),d.FDArray=[],u=0;u<p.length-1;u++){var S=e.CFF.readDict(n,r+p[u],r+p[u+1]);e.CFF._readFDict(n,S,v),d.FDArray.push(S)}r+=p[p.length-1],r=d.FDSelect,d.FDSelect=[];var _=n[r];if(r++,_!=3)throw _;var M=o.readUshort(n,r);for(r+=2,u=0;u<M+1;u++)d.FDSelect.push(o.readUshort(n,r),n[r+2]),r+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(n,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(n,d.charset,d.CharStrings.length)),e.CFF._readFDict(n,d,v),d},e.CFF._readFDict=function(n,r,a){var o;for(var c in r.Private&&(o=r.Private[1],r.Private=e.CFF.readDict(n,o,o+r.Private[0]),r.Private.Subrs&&e.CFF.readSubrs(n,o+r.Private.Subrs,r.Private)),r)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(c)!=-1&&(r[c]=a[r[c]-426+35])},e.CFF.readSubrs=function(n,r,a){var o=e._bin,c=[];r=e.CFF.readIndex(n,r,c);var l,u=c.length;l=u<1240?107:u<33900?1131:32768,a.Bias=l,a.Subrs=[];for(var h=0;h<c.length-1;h++)a.Subrs.push(o.readBytes(n,r+c[h],c[h+1]-c[h]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,r){for(var a=0;a<n.charset.length;a++)if(n.charset[a]==r)return a;return-1},e.CFF.glyphBySE=function(n,r){return r<0||r>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[r])},e.CFF.readEncoding=function(n,r,a){e._bin;var o=[".notdef"],c=n[r];if(r++,c!=0)throw"error: unknown encoding format: "+c;var l=n[r];r++;for(var u=0;u<l;u++)o.push(n[r+u]);return o},e.CFF.readCharset=function(n,r,a){var o=e._bin,c=[".notdef"],l=n[r];if(r++,l==0)for(var u=0;u<a;u++){var h=o.readUshort(n,r);r+=2,c.push(h)}else{if(l!=1&&l!=2)throw"error: format: "+l;for(;c.length<a;){h=o.readUshort(n,r),r+=2;var f=0;for(l==1?(f=n[r],r++):(f=o.readUshort(n,r),r+=2),u=0;u<=f;u++)c.push(h),h++}}return c},e.CFF.readIndex=function(n,r,a){var o=e._bin,c=o.readUshort(n,r)+1,l=n[r+=2];if(r++,l==1)for(var u=0;u<c;u++)a.push(n[r+u]);else if(l==2)for(u=0;u<c;u++)a.push(o.readUshort(n,r+2*u));else if(l==3)for(u=0;u<c;u++)a.push(16777215&o.readUint(n,r+3*u-1));else if(c!=1)throw"unsupported offset size: "+l+", count: "+c;return(r+=c*l)-1},e.CFF.getCharString=function(n,r,a){var o=e._bin,c=n[r],l=n[r+1];n[r+2],n[r+3],n[r+4];var u=1,h=null,f=null;c<=20&&(h=c,u=1),c==12&&(h=100*c+l,u=2),21<=c&&c<=27&&(h=c,u=1),c==28&&(f=o.readShort(n,r+1),u=3),29<=c&&c<=31&&(h=c,u=1),32<=c&&c<=246&&(f=c-139,u=1),247<=c&&c<=250&&(f=256*(c-247)+l+108,u=2),251<=c&&c<=254&&(f=256*-(c-251)-l-108,u=2),c==255&&(f=o.readInt(n,r+1)/65535,u=5),a.val=f??"o"+h,a.size=u},e.CFF.readCharString=function(n,r,a){for(var o=r+a,c=e._bin,l=[];r<o;){var u=n[r],h=n[r+1];n[r+2],n[r+3],n[r+4];var f=1,d=null,g=null;u<=20&&(d=u,f=1),u==12&&(d=100*u+h,f=2),u!=19&&u!=20||(d=u,f=2),21<=u&&u<=27&&(d=u,f=1),u==28&&(g=c.readShort(n,r+1),f=3),29<=u&&u<=31&&(d=u,f=1),32<=u&&u<=246&&(g=u-139,f=1),247<=u&&u<=250&&(g=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(g=256*-(u-251)-h-108,f=2),u==255&&(g=c.readInt(n,r+1)/65535,f=5),l.push(g??"o"+d),r+=f}return l},e.CFF.readDict=function(n,r,a){for(var o=e._bin,c={},l=[];r<a;){var u=n[r],h=n[r+1];n[r+2],n[r+3],n[r+4];var f=1,d=null,g=null;if(u==28&&(g=o.readShort(n,r+1),f=3),u==29&&(g=o.readInt(n,r+1),f=5),32<=u&&u<=246&&(g=u-139,f=1),247<=u&&u<=250&&(g=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(g=256*-(u-251)-h-108,f=2),u==255)throw g=o.readInt(n,r+1)/65535,f=5,"unknown number";if(u==30){var v=[];for(f=1;;){var m=n[r+f];f++;var p=m>>4,S=15&m;if(p!=15&&v.push(p),S!=15&&v.push(S),S==15)break}for(var _="",M=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],y=0;y<v.length;y++)_+=M[v[y]];g=parseFloat(_)}u<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],f=1,u==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][h],f=2)),d!=null?(c[d]=l.length==1?l[0]:l,l=[]):l.push(g),r+=f}return c},e.cmap={},e.cmap.parse=function(n,r,a){n=new Uint8Array(n.buffer,r,a),r=0;var o=e._bin,c={};o.readUshort(n,r),r+=2;var l=o.readUshort(n,r);r+=2;var u=[];c.tables=[];for(var h=0;h<l;h++){var f=o.readUshort(n,r);r+=2;var d=o.readUshort(n,r);r+=2;var g=o.readUint(n,r);r+=4;var v="p"+f+"e"+d,m=u.indexOf(g);if(m==-1){var p;m=c.tables.length,u.push(g);var S=o.readUshort(n,g);S==0?p=e.cmap.parse0(n,g):S==4?p=e.cmap.parse4(n,g):S==6?p=e.cmap.parse6(n,g):S==12?p=e.cmap.parse12(n,g):console.debug("unknown format: "+S,f,d,g),c.tables.push(p)}if(c[v]!=null)throw"multiple tables for one platform+encoding";c[v]=m}return c},e.cmap.parse0=function(n,r){var a=e._bin,o={};o.format=a.readUshort(n,r),r+=2;var c=a.readUshort(n,r);r+=2,a.readUshort(n,r),r+=2,o.map=[];for(var l=0;l<c-6;l++)o.map.push(n[r+l]);return o},e.cmap.parse4=function(n,r){var a=e._bin,o=r,c={};c.format=a.readUshort(n,r),r+=2;var l=a.readUshort(n,r);r+=2,a.readUshort(n,r),r+=2;var u=a.readUshort(n,r);r+=2;var h=u/2;c.searchRange=a.readUshort(n,r),r+=2,c.entrySelector=a.readUshort(n,r),r+=2,c.rangeShift=a.readUshort(n,r),r+=2,c.endCount=a.readUshorts(n,r,h),r+=2*h,r+=2,c.startCount=a.readUshorts(n,r,h),r+=2*h,c.idDelta=[];for(var f=0;f<h;f++)c.idDelta.push(a.readShort(n,r)),r+=2;for(c.idRangeOffset=a.readUshorts(n,r,h),r+=2*h,c.glyphIdArray=[];r<o+l;)c.glyphIdArray.push(a.readUshort(n,r)),r+=2;return c},e.cmap.parse6=function(n,r){var a=e._bin,o={};o.format=a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2,o.firstCode=a.readUshort(n,r),r+=2;var c=a.readUshort(n,r);r+=2,o.glyphIdArray=[];for(var l=0;l<c;l++)o.glyphIdArray.push(a.readUshort(n,r)),r+=2;return o},e.cmap.parse12=function(n,r){var a=e._bin,o={};o.format=a.readUshort(n,r),r+=2,r+=2,a.readUint(n,r),r+=4,a.readUint(n,r),r+=4;var c=a.readUint(n,r);r+=4,o.groups=[];for(var l=0;l<c;l++){var u=r+12*l,h=a.readUint(n,u+0),f=a.readUint(n,u+4),d=a.readUint(n,u+8);o.groups.push([h,f,d])}return o},e.glyf={},e.glyf.parse=function(n,r,a,o){for(var c=[],l=0;l<o.maxp.numGlyphs;l++)c.push(null);return c},e.glyf._parseGlyf=function(n,r){var a=e._bin,o=n._data,c=e._tabOffset(o,"glyf",n._offset)+n.loca[r];if(n.loca[r]==n.loca[r+1])return null;var l={};if(l.noc=a.readShort(o,c),c+=2,l.xMin=a.readShort(o,c),c+=2,l.yMin=a.readShort(o,c),c+=2,l.xMax=a.readShort(o,c),c+=2,l.yMax=a.readShort(o,c),c+=2,l.xMin>=l.xMax||l.yMin>=l.yMax)return null;if(l.noc>0){l.endPts=[];for(var u=0;u<l.noc;u++)l.endPts.push(a.readUshort(o,c)),c+=2;var h=a.readUshort(o,c);if(c+=2,o.length-c<h)return null;l.instructions=a.readBytes(o,c,h),c+=h;var f=l.endPts[l.noc-1]+1;for(l.flags=[],u=0;u<f;u++){var d=o[c];if(c++,l.flags.push(d),(8&d)!=0){var g=o[c];c++;for(var v=0;v<g;v++)l.flags.push(d),u++}}for(l.xs=[],u=0;u<f;u++){var m=(2&l.flags[u])!=0,p=(16&l.flags[u])!=0;m?(l.xs.push(p?o[c]:-o[c]),c++):p?l.xs.push(0):(l.xs.push(a.readShort(o,c)),c+=2)}for(l.ys=[],u=0;u<f;u++)m=(4&l.flags[u])!=0,p=(32&l.flags[u])!=0,m?(l.ys.push(p?o[c]:-o[c]),c++):p?l.ys.push(0):(l.ys.push(a.readShort(o,c)),c+=2);var S=0,_=0;for(u=0;u<f;u++)S+=l.xs[u],_+=l.ys[u],l.xs[u]=S,l.ys[u]=_}else{var M;l.parts=[];do{M=a.readUshort(o,c),c+=2;var y={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(l.parts.push(y),y.glyphIndex=a.readUshort(o,c),c+=2,1&M){var A=a.readShort(o,c);c+=2;var R=a.readShort(o,c);c+=2}else A=a.readInt8(o,c),c++,R=a.readInt8(o,c),c++;2&M?(y.m.tx=A,y.m.ty=R):(y.p1=A,y.p2=R),8&M?(y.m.a=y.m.d=a.readF2dot14(o,c),c+=2):64&M?(y.m.a=a.readF2dot14(o,c),c+=2,y.m.d=a.readF2dot14(o,c),c+=2):128&M&&(y.m.a=a.readF2dot14(o,c),c+=2,y.m.b=a.readF2dot14(o,c),c+=2,y.m.c=a.readF2dot14(o,c),c+=2,y.m.d=a.readF2dot14(o,c),c+=2)}while(32&M);if(256&M){var I=a.readUshort(o,c);for(c+=2,l.instr=[],u=0;u<I;u++)l.instr.push(o[c]),c++}}return l},e.GDEF={},e.GDEF.parse=function(n,r,a,o){var c=r;r+=4;var l=e._bin.readUshort(n,r);return{glyphClassDef:l===0?null:e._lctf.readClassDef(n,c+l)}},e.GPOS={},e.GPOS.parse=function(n,r,a,o){return e._lctf.parse(n,r,a,o,e.GPOS.subt)},e.GPOS.subt=function(n,r,a,o){var c=e._bin,l=a,u={};if(u.fmt=c.readUshort(n,a),a+=2,r==1||r==2||r==3||r==7||r==8&&u.fmt<=2){var h=c.readUshort(n,a);a+=2,u.coverage=e._lctf.readCoverage(n,h+l)}if(r==1&&u.fmt==1){var f=c.readUshort(n,a);a+=2,f!=0&&(u.pos=e.GPOS.readValueRecord(n,a,f))}else if(r==2&&u.fmt>=1&&u.fmt<=2){f=c.readUshort(n,a),a+=2;var d=c.readUshort(n,a);a+=2;var g=e._lctf.numOfOnes(f),v=e._lctf.numOfOnes(d);if(u.fmt==1){u.pairsets=[];var m=c.readUshort(n,a);a+=2;for(var p=0;p<m;p++){var S=l+c.readUshort(n,a);a+=2;var _=c.readUshort(n,S);S+=2;for(var M=[],y=0;y<_;y++){var A=c.readUshort(n,S);S+=2,f!=0&&(k=e.GPOS.readValueRecord(n,S,f),S+=2*g),d!=0&&(D=e.GPOS.readValueRecord(n,S,d),S+=2*v),M.push({gid2:A,val1:k,val2:D})}u.pairsets.push(M)}}if(u.fmt==2){var R=c.readUshort(n,a);a+=2;var I=c.readUshort(n,a);a+=2;var x=c.readUshort(n,a);a+=2;var w=c.readUshort(n,a);for(a+=2,u.classDef1=e._lctf.readClassDef(n,l+R),u.classDef2=e._lctf.readClassDef(n,l+I),u.matrix=[],p=0;p<x;p++){var Z=[];for(y=0;y<w;y++){var k=null,D=null;f!=0&&(k=e.GPOS.readValueRecord(n,a,f),a+=2*g),d!=0&&(D=e.GPOS.readValueRecord(n,a,d),a+=2*v),Z.push({val1:k,val2:D})}u.matrix.push(Z)}}}else if(r==4&&u.fmt==1)u.markCoverage=e._lctf.readCoverage(n,c.readUshort(n,a)+l),u.baseCoverage=e._lctf.readCoverage(n,c.readUshort(n,a+2)+l),u.markClassCount=c.readUshort(n,a+4),u.markArray=e.GPOS.readMarkArray(n,c.readUshort(n,a+6)+l),u.baseArray=e.GPOS.readBaseArray(n,c.readUshort(n,a+8)+l,u.markClassCount);else if(r==6&&u.fmt==1)u.mark1Coverage=e._lctf.readCoverage(n,c.readUshort(n,a)+l),u.mark2Coverage=e._lctf.readCoverage(n,c.readUshort(n,a+2)+l),u.markClassCount=c.readUshort(n,a+4),u.mark1Array=e.GPOS.readMarkArray(n,c.readUshort(n,a+6)+l),u.mark2Array=e.GPOS.readBaseArray(n,c.readUshort(n,a+8)+l,u.markClassCount);else{if(r==9&&u.fmt==1){var F=c.readUshort(n,a);a+=2;var L=c.readUint(n,a);if(a+=4,o.ltype==9)o.ltype=F;else if(o.ltype!=F)throw"invalid extension substitution";return e.GPOS.subt(n,o.ltype,l+L)}console.debug("unsupported GPOS table LookupType",r,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(n,r,a){var o=e._bin,c=[];return c.push(1&a?o.readShort(n,r):0),r+=1&a?2:0,c.push(2&a?o.readShort(n,r):0),r+=2&a?2:0,c.push(4&a?o.readShort(n,r):0),r+=4&a?2:0,c.push(8&a?o.readShort(n,r):0),r+=8&a?2:0,c},e.GPOS.readBaseArray=function(n,r,a){var o=e._bin,c=[],l=r,u=o.readUshort(n,r);r+=2;for(var h=0;h<u;h++){for(var f=[],d=0;d<a;d++)f.push(e.GPOS.readAnchorRecord(n,l+o.readUshort(n,r))),r+=2;c.push(f)}return c},e.GPOS.readMarkArray=function(n,r){var a=e._bin,o=[],c=r,l=a.readUshort(n,r);r+=2;for(var u=0;u<l;u++){var h=e.GPOS.readAnchorRecord(n,a.readUshort(n,r+2)+c);h.markClass=a.readUshort(n,r),o.push(h),r+=4}return o},e.GPOS.readAnchorRecord=function(n,r){var a=e._bin,o={};return o.fmt=a.readUshort(n,r),o.x=a.readShort(n,r+2),o.y=a.readShort(n,r+4),o},e.GSUB={},e.GSUB.parse=function(n,r,a,o){return e._lctf.parse(n,r,a,o,e.GSUB.subt)},e.GSUB.subt=function(n,r,a,o){var c=e._bin,l=a,u={};if(u.fmt=c.readUshort(n,a),a+=2,r!=1&&r!=2&&r!=4&&r!=5&&r!=6)return null;if(r==1||r==2||r==4||r==5&&u.fmt<=2||r==6&&u.fmt<=2){var h=c.readUshort(n,a);a+=2,u.coverage=e._lctf.readCoverage(n,l+h)}if(r==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=c.readShort(n,a),a+=2;else if(u.fmt==2){var f=c.readUshort(n,a);a+=2,u.newg=c.readUshorts(n,a,f),a+=2*u.newg.length}}else if(r==2&&u.fmt==1){f=c.readUshort(n,a),a+=2,u.seqs=[];for(var d=0;d<f;d++){var g=c.readUshort(n,a)+l;a+=2;var v=c.readUshort(n,g);u.seqs.push(c.readUshorts(n,g+2,v))}}else if(r==4)for(u.vals=[],f=c.readUshort(n,a),a+=2,d=0;d<f;d++){var m=c.readUshort(n,a);a+=2,u.vals.push(e.GSUB.readLigatureSet(n,l+m))}else if(r==5&&u.fmt==2){if(u.fmt==2){var p=c.readUshort(n,a);a+=2,u.cDef=e._lctf.readClassDef(n,l+p),u.scset=[];var S=c.readUshort(n,a);for(a+=2,d=0;d<S;d++){var _=c.readUshort(n,a);a+=2,u.scset.push(_==0?null:e.GSUB.readSubClassSet(n,l+_))}}}else if(r==6&&u.fmt==3){if(u.fmt==3){for(d=0;d<3;d++){f=c.readUshort(n,a),a+=2;for(var M=[],y=0;y<f;y++)M.push(e._lctf.readCoverage(n,l+c.readUshort(n,a+2*y)));a+=2*f,d==0&&(u.backCvg=M),d==1&&(u.inptCvg=M),d==2&&(u.ahedCvg=M)}f=c.readUshort(n,a),a+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(n,a,f)}}else{if(r==7&&u.fmt==1){var A=c.readUshort(n,a);a+=2;var R=c.readUint(n,a);if(a+=4,o.ltype==9)o.ltype=A;else if(o.ltype!=A)throw"invalid extension substitution";return e.GSUB.subt(n,o.ltype,l+R)}console.debug("unsupported GSUB table LookupType",r,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(n,r){var a=e._bin.readUshort,o=r,c=[],l=a(n,r);r+=2;for(var u=0;u<l;u++){var h=a(n,r);r+=2,c.push(e.GSUB.readSubClassRule(n,o+h))}return c},e.GSUB.readSubClassRule=function(n,r){var a=e._bin.readUshort,o={},c=a(n,r),l=a(n,r+=2);r+=2,o.input=[];for(var u=0;u<c-1;u++)o.input.push(a(n,r)),r+=2;return o.substLookupRecords=e.GSUB.readSubstLookupRecords(n,r,l),o},e.GSUB.readSubstLookupRecords=function(n,r,a){for(var o=e._bin.readUshort,c=[],l=0;l<a;l++)c.push(o(n,r),o(n,r+2)),r+=4;return c},e.GSUB.readChainSubClassSet=function(n,r){var a=e._bin,o=r,c=[],l=a.readUshort(n,r);r+=2;for(var u=0;u<l;u++){var h=a.readUshort(n,r);r+=2,c.push(e.GSUB.readChainSubClassRule(n,o+h))}return c},e.GSUB.readChainSubClassRule=function(n,r){for(var a=e._bin,o={},c=["backtrack","input","lookahead"],l=0;l<c.length;l++){var u=a.readUshort(n,r);r+=2,l==1&&u--,o[c[l]]=a.readUshorts(n,r,u),r+=2*o[c[l]].length}return u=a.readUshort(n,r),r+=2,o.subst=a.readUshorts(n,r,2*u),r+=2*o.subst.length,o},e.GSUB.readLigatureSet=function(n,r){var a=e._bin,o=r,c=[],l=a.readUshort(n,r);r+=2;for(var u=0;u<l;u++){var h=a.readUshort(n,r);r+=2,c.push(e.GSUB.readLigature(n,o+h))}return c},e.GSUB.readLigature=function(n,r){var a=e._bin,o={chain:[]};o.nglyph=a.readUshort(n,r),r+=2;var c=a.readUshort(n,r);r+=2;for(var l=0;l<c-1;l++)o.chain.push(a.readUshort(n,r)),r+=2;return o},e.head={},e.head.parse=function(n,r,a){var o=e._bin,c={};return o.readFixed(n,r),r+=4,c.fontRevision=o.readFixed(n,r),r+=4,o.readUint(n,r),r+=4,o.readUint(n,r),r+=4,c.flags=o.readUshort(n,r),r+=2,c.unitsPerEm=o.readUshort(n,r),r+=2,c.created=o.readUint64(n,r),r+=8,c.modified=o.readUint64(n,r),r+=8,c.xMin=o.readShort(n,r),r+=2,c.yMin=o.readShort(n,r),r+=2,c.xMax=o.readShort(n,r),r+=2,c.yMax=o.readShort(n,r),r+=2,c.macStyle=o.readUshort(n,r),r+=2,c.lowestRecPPEM=o.readUshort(n,r),r+=2,c.fontDirectionHint=o.readShort(n,r),r+=2,c.indexToLocFormat=o.readShort(n,r),r+=2,c.glyphDataFormat=o.readShort(n,r),r+=2,c},e.hhea={},e.hhea.parse=function(n,r,a){var o=e._bin,c={};return o.readFixed(n,r),r+=4,c.ascender=o.readShort(n,r),r+=2,c.descender=o.readShort(n,r),r+=2,c.lineGap=o.readShort(n,r),r+=2,c.advanceWidthMax=o.readUshort(n,r),r+=2,c.minLeftSideBearing=o.readShort(n,r),r+=2,c.minRightSideBearing=o.readShort(n,r),r+=2,c.xMaxExtent=o.readShort(n,r),r+=2,c.caretSlopeRise=o.readShort(n,r),r+=2,c.caretSlopeRun=o.readShort(n,r),r+=2,c.caretOffset=o.readShort(n,r),r+=2,r+=8,c.metricDataFormat=o.readShort(n,r),r+=2,c.numberOfHMetrics=o.readUshort(n,r),r+=2,c},e.hmtx={},e.hmtx.parse=function(n,r,a,o){for(var c=e._bin,l={aWidth:[],lsBearing:[]},u=0,h=0,f=0;f<o.maxp.numGlyphs;f++)f<o.hhea.numberOfHMetrics&&(u=c.readUshort(n,r),r+=2,h=c.readShort(n,r),r+=2),l.aWidth.push(u),l.lsBearing.push(h);return l},e.kern={},e.kern.parse=function(n,r,a,o){var c=e._bin,l=c.readUshort(n,r);if(r+=2,l==1)return e.kern.parseV1(n,r-2,a,o);var u=c.readUshort(n,r);r+=2;for(var h={glyph1:[],rval:[]},f=0;f<u;f++){r+=2,a=c.readUshort(n,r),r+=2;var d=c.readUshort(n,r);r+=2;var g=d>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;r=e.kern.readFormat0(n,r,h)}return h},e.kern.parseV1=function(n,r,a,o){var c=e._bin;c.readFixed(n,r),r+=4;var l=c.readUint(n,r);r+=4;for(var u={glyph1:[],rval:[]},h=0;h<l;h++){c.readUint(n,r),r+=4;var f=c.readUshort(n,r);r+=2,c.readUshort(n,r),r+=2;var d=f>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;r=e.kern.readFormat0(n,r,u)}return u},e.kern.readFormat0=function(n,r,a){var o=e._bin,c=-1,l=o.readUshort(n,r);r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2;for(var u=0;u<l;u++){var h=o.readUshort(n,r);r+=2;var f=o.readUshort(n,r);r+=2;var d=o.readShort(n,r);r+=2,h!=c&&(a.glyph1.push(h),a.rval.push({glyph2:[],vals:[]}));var g=a.rval[a.rval.length-1];g.glyph2.push(f),g.vals.push(d),c=h}return r},e.loca={},e.loca.parse=function(n,r,a,o){var c=e._bin,l=[],u=o.head.indexToLocFormat,h=o.maxp.numGlyphs+1;if(u==0)for(var f=0;f<h;f++)l.push(c.readUshort(n,r+(f<<1))<<1);if(u==1)for(f=0;f<h;f++)l.push(c.readUint(n,r+(f<<2)));return l},e.maxp={},e.maxp.parse=function(n,r,a){var o=e._bin,c={},l=o.readUint(n,r);return r+=4,c.numGlyphs=o.readUshort(n,r),r+=2,l==65536&&(c.maxPoints=o.readUshort(n,r),r+=2,c.maxContours=o.readUshort(n,r),r+=2,c.maxCompositePoints=o.readUshort(n,r),r+=2,c.maxCompositeContours=o.readUshort(n,r),r+=2,c.maxZones=o.readUshort(n,r),r+=2,c.maxTwilightPoints=o.readUshort(n,r),r+=2,c.maxStorage=o.readUshort(n,r),r+=2,c.maxFunctionDefs=o.readUshort(n,r),r+=2,c.maxInstructionDefs=o.readUshort(n,r),r+=2,c.maxStackElements=o.readUshort(n,r),r+=2,c.maxSizeOfInstructions=o.readUshort(n,r),r+=2,c.maxComponentElements=o.readUshort(n,r),r+=2,c.maxComponentDepth=o.readUshort(n,r),r+=2),c},e.name={},e.name.parse=function(n,r,a){var o=e._bin,c={};o.readUshort(n,r),r+=2;var l=o.readUshort(n,r);r+=2,o.readUshort(n,r);for(var u,h=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],f=r+=2,d=0;d<l;d++){var g=o.readUshort(n,r);r+=2;var v=o.readUshort(n,r);r+=2;var m=o.readUshort(n,r);r+=2;var p=o.readUshort(n,r);r+=2;var S=o.readUshort(n,r);r+=2;var _=o.readUshort(n,r);r+=2;var M,y=h[p],A=f+12*l+_;if(g==0)M=o.readUnicode(n,A,S/2);else if(g==3&&v==0)M=o.readUnicode(n,A,S/2);else if(v==0)M=o.readASCII(n,A,S);else if(v==1)M=o.readUnicode(n,A,S/2);else if(v==3)M=o.readUnicode(n,A,S/2);else{if(g!=1)throw"unknown encoding "+v+", platformID: "+g;M=o.readASCII(n,A,S),console.debug("reading unknown MAC encoding "+v+" as ASCII")}var R="p"+g+","+m.toString(16);c[R]==null&&(c[R]={}),c[R][y!==void 0?y:p]=M,c[R]._lang=m}for(var I in c)if(c[I].postScriptName!=null&&c[I]._lang==1033)return c[I];for(var I in c)if(c[I].postScriptName!=null&&c[I]._lang==0)return c[I];for(var I in c)if(c[I].postScriptName!=null&&c[I]._lang==3084)return c[I];for(var I in c)if(c[I].postScriptName!=null)return c[I];for(var I in c){u=I;break}return console.debug("returning name table with languageID "+c[u]._lang),c[u]},e["OS/2"]={},e["OS/2"].parse=function(n,r,a){var o=e._bin.readUshort(n,r);r+=2;var c={};if(o==0)e["OS/2"].version0(n,r,c);else if(o==1)e["OS/2"].version1(n,r,c);else if(o==2||o==3||o==4)e["OS/2"].version2(n,r,c);else{if(o!=5)throw"unknown OS/2 table version: "+o;e["OS/2"].version5(n,r,c)}return c},e["OS/2"].version0=function(n,r,a){var o=e._bin;return a.xAvgCharWidth=o.readShort(n,r),r+=2,a.usWeightClass=o.readUshort(n,r),r+=2,a.usWidthClass=o.readUshort(n,r),r+=2,a.fsType=o.readUshort(n,r),r+=2,a.ySubscriptXSize=o.readShort(n,r),r+=2,a.ySubscriptYSize=o.readShort(n,r),r+=2,a.ySubscriptXOffset=o.readShort(n,r),r+=2,a.ySubscriptYOffset=o.readShort(n,r),r+=2,a.ySuperscriptXSize=o.readShort(n,r),r+=2,a.ySuperscriptYSize=o.readShort(n,r),r+=2,a.ySuperscriptXOffset=o.readShort(n,r),r+=2,a.ySuperscriptYOffset=o.readShort(n,r),r+=2,a.yStrikeoutSize=o.readShort(n,r),r+=2,a.yStrikeoutPosition=o.readShort(n,r),r+=2,a.sFamilyClass=o.readShort(n,r),r+=2,a.panose=o.readBytes(n,r,10),r+=10,a.ulUnicodeRange1=o.readUint(n,r),r+=4,a.ulUnicodeRange2=o.readUint(n,r),r+=4,a.ulUnicodeRange3=o.readUint(n,r),r+=4,a.ulUnicodeRange4=o.readUint(n,r),r+=4,a.achVendID=[o.readInt8(n,r),o.readInt8(n,r+1),o.readInt8(n,r+2),o.readInt8(n,r+3)],r+=4,a.fsSelection=o.readUshort(n,r),r+=2,a.usFirstCharIndex=o.readUshort(n,r),r+=2,a.usLastCharIndex=o.readUshort(n,r),r+=2,a.sTypoAscender=o.readShort(n,r),r+=2,a.sTypoDescender=o.readShort(n,r),r+=2,a.sTypoLineGap=o.readShort(n,r),r+=2,a.usWinAscent=o.readUshort(n,r),r+=2,a.usWinDescent=o.readUshort(n,r),r+=2},e["OS/2"].version1=function(n,r,a){var o=e._bin;return r=e["OS/2"].version0(n,r,a),a.ulCodePageRange1=o.readUint(n,r),r+=4,a.ulCodePageRange2=o.readUint(n,r),r+=4},e["OS/2"].version2=function(n,r,a){var o=e._bin;return r=e["OS/2"].version1(n,r,a),a.sxHeight=o.readShort(n,r),r+=2,a.sCapHeight=o.readShort(n,r),r+=2,a.usDefault=o.readUshort(n,r),r+=2,a.usBreak=o.readUshort(n,r),r+=2,a.usMaxContext=o.readUshort(n,r),r+=2},e["OS/2"].version5=function(n,r,a){var o=e._bin;return r=e["OS/2"].version2(n,r,a),a.usLowerOpticalPointSize=o.readUshort(n,r),r+=2,a.usUpperOpticalPointSize=o.readUshort(n,r),r+=2},e.post={},e.post.parse=function(n,r,a){var o=e._bin,c={};return c.version=o.readFixed(n,r),r+=4,c.italicAngle=o.readFixed(n,r),r+=4,c.underlinePosition=o.readShort(n,r),r+=2,c.underlineThickness=o.readShort(n,r),r+=2,c},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,r){var a=n.cmap,o=-1;if(a.p0e4!=null?o=a.p0e4:a.p3e1!=null?o=a.p3e1:a.p1e0!=null?o=a.p1e0:a.p0e3!=null&&(o=a.p0e3),o==-1)throw"no familiar platform and encoding!";var c=a.tables[o];if(c.format==0)return r>=c.map.length?0:c.map[r];if(c.format==4){for(var l=-1,u=0;u<c.endCount.length;u++)if(r<=c.endCount[u]){l=u;break}return l==-1||c.startCount[l]>r?0:65535&(c.idRangeOffset[l]!=0?c.glyphIdArray[r-c.startCount[l]+(c.idRangeOffset[l]>>1)-(c.idRangeOffset.length-l)]:r+c.idDelta[l])}if(c.format==12){if(r>c.groups[c.groups.length-1][1])return 0;for(u=0;u<c.groups.length;u++){var h=c.groups[u];if(h[0]<=r&&r<=h[1])return h[2]+(r-h[0])}return 0}throw"unknown cmap table format "+c.format},e.U.glyphToPath=function(n,r){var a={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[r]){var o=n.SVG.entries[r];return o==null?a:(typeof o=="string"&&(o=e.SVG.toPath(o),n.SVG.entries[r]=o),o)}if(n.CFF){var c={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},l=n.CFF,u=n.CFF.Private;if(l.ROS){for(var h=0;l.FDSelect[h+2]<=r;)h+=2;u=l.FDArray[l.FDSelect[h+1]].Private}e.U._drawCFF(n.CFF.CharStrings[r],c,l,u,a)}else n.glyf&&e.U._drawGlyf(r,n,a);return a},e.U._drawGlyf=function(n,r,a){var o=r.glyf[n];o==null&&(o=r.glyf[n]=e.glyf._parseGlyf(r,n)),o!=null&&(o.noc>-1?e.U._simpleGlyph(o,a):e.U._compoGlyph(o,r,a))},e.U._simpleGlyph=function(n,r){for(var a=0;a<n.noc;a++){for(var o=a==0?0:n.endPts[a-1]+1,c=n.endPts[a],l=o;l<=c;l++){var u=l==o?c:l-1,h=l==c?o:l+1,f=1&n.flags[l],d=1&n.flags[u],g=1&n.flags[h],v=n.xs[l],m=n.ys[l];if(l==o)if(f){if(!d){e.U.P.moveTo(r,v,m);continue}e.U.P.moveTo(r,n.xs[u],n.ys[u])}else d?e.U.P.moveTo(r,n.xs[u],n.ys[u]):e.U.P.moveTo(r,(n.xs[u]+v)/2,(n.ys[u]+m)/2);f?d&&e.U.P.lineTo(r,v,m):g?e.U.P.qcurveTo(r,v,m,n.xs[h],n.ys[h]):e.U.P.qcurveTo(r,v,m,(v+n.xs[h])/2,(m+n.ys[h])/2)}e.U.P.closePath(r)}},e.U._compoGlyph=function(n,r,a){for(var o=0;o<n.parts.length;o++){var c={cmds:[],crds:[]},l=n.parts[o];e.U._drawGlyf(l.glyphIndex,r,c);for(var u=l.m,h=0;h<c.crds.length;h+=2){var f=c.crds[h],d=c.crds[h+1];a.crds.push(f*u.a+d*u.b+u.tx),a.crds.push(f*u.c+d*u.d+u.ty)}for(h=0;h<c.cmds.length;h++)a.cmds.push(c.cmds[h])}},e.U._getGlyphClass=function(n,r){var a=e._lctf.getInterval(r,n);return a==-1?0:r[a+2]},e.U._applySubs=function(n,r,a,o){for(var c=n.length-r-1,l=0;l<a.tabs.length;l++)if(a.tabs[l]!=null){var u,h=a.tabs[l];if(!h.coverage||(u=e._lctf.coverageIndex(h.coverage,n[r]))!=-1){if(a.ltype==1)n[r],h.fmt==1?n[r]=n[r]+h.delta:n[r]=h.newg[u];else if(a.ltype==4)for(var f=h.vals[u],d=0;d<f.length;d++){var g=f[d],v=g.chain.length;if(!(v>c)){for(var m=!0,p=0,S=0;S<v;S++){for(;n[r+p+(1+S)]==-1;)p++;g.chain[S]!=n[r+p+(1+S)]&&(m=!1)}if(m){for(n[r]=g.nglyph,S=0;S<v+p;S++)n[r+S+1]=-1;break}}}else if(a.ltype==5&&h.fmt==2)for(var _=e._lctf.getInterval(h.cDef,n[r]),M=h.cDef[_+2],y=h.scset[M],A=0;A<y.length;A++){var R=y[A],I=R.input;if(!(I.length>c)){for(m=!0,S=0;S<I.length;S++){var x=e._lctf.getInterval(h.cDef,n[r+1+S]);if(_==-1&&h.cDef[x+2]!=I[S]){m=!1;break}}if(m){var w=R.substLookupRecords;for(d=0;d<w.length;d+=2)w[d],w[d+1]}}}else if(a.ltype==6&&h.fmt==3){if(!e.U._glsCovered(n,h.backCvg,r-h.backCvg.length)||!e.U._glsCovered(n,h.inptCvg,r)||!e.U._glsCovered(n,h.ahedCvg,r+h.inptCvg.length))continue;var Z=h.lookupRec;for(A=0;A<Z.length;A+=2){_=Z[A];var k=o[Z[A+1]];e.U._applySubs(n,r+_,k,o)}}}}},e.U._glsCovered=function(n,r,a){for(var o=0;o<r.length;o++)if(e._lctf.coverageIndex(r[o],n[a+o])==-1)return!1;return!0},e.U.glyphsToPath=function(n,r,a){for(var o={cmds:[],crds:[]},c=0,l=0;l<r.length;l++){var u=r[l];if(u!=-1){for(var h=l<r.length-1&&r[l+1]!=-1?r[l+1]:0,f=e.U.glyphToPath(n,u),d=0;d<f.crds.length;d+=2)o.crds.push(f.crds[d]+c),o.crds.push(f.crds[d+1]);for(a&&o.cmds.push(a),d=0;d<f.cmds.length;d++)o.cmds.push(f.cmds[d]);a&&o.cmds.push("X"),c+=n.hmtx.aWidth[u],l<r.length-1&&(c+=e.U.getPairAdjustment(n,u,h))}}return o},e.U.P={},e.U.P.moveTo=function(n,r,a){n.cmds.push("M"),n.crds.push(r,a)},e.U.P.lineTo=function(n,r,a){n.cmds.push("L"),n.crds.push(r,a)},e.U.P.curveTo=function(n,r,a,o,c,l,u){n.cmds.push("C"),n.crds.push(r,a,o,c,l,u)},e.U.P.qcurveTo=function(n,r,a,o,c){n.cmds.push("Q"),n.crds.push(r,a,o,c)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,r,a,o,c){for(var l=r.stack,u=r.nStems,h=r.haveWidth,f=r.width,d=r.open,g=0,v=r.x,m=r.y,p=0,S=0,_=0,M=0,y=0,A=0,R=0,I=0,x=0,w=0,Z={val:0,size:0};g<n.length;){e.CFF.getCharString(n,g,Z);var k=Z.val;if(g+=Z.size,k=="o1"||k=="o18")l.length%2!=0&&!h&&(f=l.shift()+o.nominalWidthX),u+=l.length>>1,l.length=0,h=!0;else if(k=="o3"||k=="o23")l.length%2!=0&&!h&&(f=l.shift()+o.nominalWidthX),u+=l.length>>1,l.length=0,h=!0;else if(k=="o4")l.length>1&&!h&&(f=l.shift()+o.nominalWidthX,h=!0),d&&e.U.P.closePath(c),m+=l.pop(),e.U.P.moveTo(c,v,m),d=!0;else if(k=="o5")for(;l.length>0;)v+=l.shift(),m+=l.shift(),e.U.P.lineTo(c,v,m);else if(k=="o6"||k=="o7")for(var D=l.length,F=k=="o6",L=0;L<D;L++){var W=l.shift();F?v+=W:m+=W,F=!F,e.U.P.lineTo(c,v,m)}else if(k=="o8"||k=="o24"){D=l.length;for(var J=0;J+6<=D;)p=v+l.shift(),S=m+l.shift(),_=p+l.shift(),M=S+l.shift(),v=_+l.shift(),m=M+l.shift(),e.U.P.curveTo(c,p,S,_,M,v,m),J+=6;k=="o24"&&(v+=l.shift(),m+=l.shift(),e.U.P.lineTo(c,v,m))}else{if(k=="o11")break;if(k=="o1234"||k=="o1235"||k=="o1236"||k=="o1237")k=="o1234"&&(S=m,_=(p=v+l.shift())+l.shift(),w=M=S+l.shift(),A=M,I=m,v=(R=(y=(x=_+l.shift())+l.shift())+l.shift())+l.shift(),e.U.P.curveTo(c,p,S,_,M,x,w),e.U.P.curveTo(c,y,A,R,I,v,m)),k=="o1235"&&(p=v+l.shift(),S=m+l.shift(),_=p+l.shift(),M=S+l.shift(),x=_+l.shift(),w=M+l.shift(),y=x+l.shift(),A=w+l.shift(),R=y+l.shift(),I=A+l.shift(),v=R+l.shift(),m=I+l.shift(),l.shift(),e.U.P.curveTo(c,p,S,_,M,x,w),e.U.P.curveTo(c,y,A,R,I,v,m)),k=="o1236"&&(p=v+l.shift(),S=m+l.shift(),_=p+l.shift(),w=M=S+l.shift(),A=M,R=(y=(x=_+l.shift())+l.shift())+l.shift(),I=A+l.shift(),v=R+l.shift(),e.U.P.curveTo(c,p,S,_,M,x,w),e.U.P.curveTo(c,y,A,R,I,v,m)),k=="o1237"&&(p=v+l.shift(),S=m+l.shift(),_=p+l.shift(),M=S+l.shift(),x=_+l.shift(),w=M+l.shift(),y=x+l.shift(),A=w+l.shift(),R=y+l.shift(),I=A+l.shift(),Math.abs(R-v)>Math.abs(I-m)?v=R+l.shift():m=I+l.shift(),e.U.P.curveTo(c,p,S,_,M,x,w),e.U.P.curveTo(c,y,A,R,I,v,m));else if(k=="o14"){if(l.length>0&&!h&&(f=l.shift()+a.nominalWidthX,h=!0),l.length==4){var $=l.shift(),q=l.shift(),Y=l.shift(),O=l.shift(),H=e.CFF.glyphBySE(a,Y),z=e.CFF.glyphBySE(a,O);e.U._drawCFF(a.CharStrings[H],r,a,o,c),r.x=$,r.y=q,e.U._drawCFF(a.CharStrings[z],r,a,o,c)}d&&(e.U.P.closePath(c),d=!1)}else if(k=="o19"||k=="o20")l.length%2!=0&&!h&&(f=l.shift()+o.nominalWidthX),u+=l.length>>1,l.length=0,h=!0,g+=u+7>>3;else if(k=="o21")l.length>2&&!h&&(f=l.shift()+o.nominalWidthX,h=!0),m+=l.pop(),v+=l.pop(),d&&e.U.P.closePath(c),e.U.P.moveTo(c,v,m),d=!0;else if(k=="o22")l.length>1&&!h&&(f=l.shift()+o.nominalWidthX,h=!0),v+=l.pop(),d&&e.U.P.closePath(c),e.U.P.moveTo(c,v,m),d=!0;else if(k=="o25"){for(;l.length>6;)v+=l.shift(),m+=l.shift(),e.U.P.lineTo(c,v,m);p=v+l.shift(),S=m+l.shift(),_=p+l.shift(),M=S+l.shift(),v=_+l.shift(),m=M+l.shift(),e.U.P.curveTo(c,p,S,_,M,v,m)}else if(k=="o26")for(l.length%2&&(v+=l.shift());l.length>0;)p=v,S=m+l.shift(),v=_=p+l.shift(),m=(M=S+l.shift())+l.shift(),e.U.P.curveTo(c,p,S,_,M,v,m);else if(k=="o27")for(l.length%2&&(m+=l.shift());l.length>0;)S=m,_=(p=v+l.shift())+l.shift(),M=S+l.shift(),v=_+l.shift(),m=M,e.U.P.curveTo(c,p,S,_,M,v,m);else if(k=="o10"||k=="o29"){var T=k=="o10"?o:a;if(l.length==0)console.debug("error: empty stack");else{var P=l.pop(),N=T.Subrs[P+T.Bias];r.x=v,r.y=m,r.nStems=u,r.haveWidth=h,r.width=f,r.open=d,e.U._drawCFF(N,r,a,o,c),v=r.x,m=r.y,u=r.nStems,h=r.haveWidth,f=r.width,d=r.open}}else if(k=="o30"||k=="o31"){var E=l.length,G=(J=0,k=="o31");for(J+=E-(D=-3&E);J<D;)G?(S=m,_=(p=v+l.shift())+l.shift(),m=(M=S+l.shift())+l.shift(),D-J==5?(v=_+l.shift(),J++):v=_,G=!1):(p=v,S=m+l.shift(),_=p+l.shift(),M=S+l.shift(),v=_+l.shift(),D-J==5?(m=M+l.shift(),J++):m=M,G=!0),e.U.P.curveTo(c,p,S,_,M,v,m),J+=4}else{if((k+"").charAt(0)=="o")throw console.debug("Unknown operation: "+k,n),k;l.push(k)}}}r.x=v,r.y=m,r.nStems=u,r.haveWidth=h,r.width=f,r.open=d};var t=e,i={Typr:t};return s.Typr=t,s.default=i,Object.defineProperty(s,"__esModule",{value:!0}),s}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function dv(){return function(s){var e=Uint8Array,t=Uint16Array,i=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),r=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(k,D){for(var F=new t(31),L=0;L<31;++L)F[L]=D+=1<<k[L-1];var W=new i(F[30]);for(L=1;L<30;++L)for(var J=F[L];J<F[L+1];++J)W[J]=J-F[L]<<5|L;return[F,W]},c=o(n,2),l=c[0],u=c[1];l[28]=258,u[258]=28;for(var h=o(r,0)[0],f=new t(32768),d=0;d<32768;++d){var g=(43690&d)>>>1|(21845&d)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,f[d]=((65280&g)>>>8|(255&g)<<8)>>>1}var v=function(k,D,F){for(var L=k.length,W=0,J=new t(D);W<L;++W)++J[k[W]-1];var $,q=new t(D);for(W=0;W<D;++W)q[W]=q[W-1]+J[W-1]<<1;{$=new t(1<<D);var Y=15-D;for(W=0;W<L;++W)if(k[W])for(var O=W<<4|k[W],H=D-k[W],z=q[k[W]-1]++<<H,T=z|(1<<H)-1;z<=T;++z)$[f[z]>>>Y]=O}return $},m=new e(288);for(d=0;d<144;++d)m[d]=8;for(d=144;d<256;++d)m[d]=9;for(d=256;d<280;++d)m[d]=7;for(d=280;d<288;++d)m[d]=8;var p=new e(32);for(d=0;d<32;++d)p[d]=5;var S=v(m,9),_=v(p,5),M=function(k){for(var D=k[0],F=1;F<k.length;++F)k[F]>D&&(D=k[F]);return D},y=function(k,D,F){var L=D/8|0;return(k[L]|k[L+1]<<8)>>(7&D)&F},A=function(k,D){var F=D/8|0;return(k[F]|k[F+1]<<8|k[F+2]<<16)>>(7&D)},R=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],I=function(k,D,F){var L=new Error(D||R[k]);if(L.code=k,Error.captureStackTrace&&Error.captureStackTrace(L,I),!F)throw L;return L},x=function(k,D,F){var L=k.length;if(!L||F&&!F.l&&L<5)return D||new e(0);var W=!D||F,J=!F||F.i;F||(F={}),D||(D=new e(3*L));var $,q=function(ye){var Pe=D.length;if(ye>Pe){var De=new e(Math.max(2*Pe,ye));De.set(D),D=De}},Y=F.f||0,O=F.p||0,H=F.b||0,z=F.l,T=F.d,P=F.m,N=F.n,E=8*L;do{if(!z){F.f=Y=y(k,O,1);var G=y(k,O+1,3);if(O+=3,!G){var oe=k[(Te=(($=O)/8|0)+(7&$&&1)+4)-4]|k[Te-3]<<8,Q=Te+oe;if(Q>L){J&&I(0);break}W&&q(H+oe),D.set(k.subarray(Te,Q),H),F.b=H+=oe,F.p=O=8*Q;continue}if(G==1)z=S,T=_,P=9,N=5;else if(G==2){var le=y(k,O,31)+257,X=y(k,O+10,15)+4,te=le+y(k,O+5,31)+1;O+=14;for(var ie=new e(te),pe=new e(19),ue=0;ue<X;++ue)pe[a[ue]]=y(k,O+3*ue,7);O+=3*X;var Se=M(pe),he=(1<<Se)-1,xe=v(pe,Se);for(ue=0;ue<te;){var Te,de=xe[y(k,O,he)];if(O+=15&de,(Te=de>>>4)<16)ie[ue++]=Te;else{var C=0,b=0;for(Te==16?(b=3+y(k,O,3),O+=2,C=ie[ue-1]):Te==17?(b=3+y(k,O,7),O+=3):Te==18&&(b=11+y(k,O,127),O+=7);b--;)ie[ue++]=C}}var K=ie.subarray(0,le),re=ie.subarray(le);P=M(K),N=M(re),z=v(K,P),T=v(re,N)}else I(1);if(O>E){J&&I(0);break}}W&&q(H+131072);for(var ge=(1<<P)-1,me=(1<<N)-1,B=O;;B=O){var ae=(C=z[A(k,O)&ge])>>>4;if((O+=15&C)>E){J&&I(0);break}if(C||I(2),ae<256)D[H++]=ae;else{if(ae==256){B=O,z=null;break}var ee=ae-254;if(ae>264){var be=n[ue=ae-257];ee=y(k,O,(1<<be)-1)+l[ue],O+=be}var Ae=T[A(k,O)&me],we=Ae>>>4;if(Ae||I(3),O+=15&Ae,re=h[we],we>3&&(be=r[we],re+=A(k,O)&(1<<be)-1,O+=be),O>E){J&&I(0);break}W&&q(H+131072);for(var Ee=H+ee;H<Ee;H+=4)D[H]=D[H-re],D[H+1]=D[H+1-re],D[H+2]=D[H+2-re],D[H+3]=D[H+3-re];H=Ee}}F.l=z,F.p=B,F.b=H,z&&(Y=1,F.m=P,F.d=T,F.n=N)}while(!Y);return H==D.length?D:function(ye,Pe,De){(De==null||De>ye.length)&&(De=ye.length);var Ze=new(ye instanceof t?t:ye instanceof i?i:e)(De-Pe);return Ze.set(ye.subarray(Pe,De)),Ze}(D,0,H)},w=new e(0),Z=typeof TextDecoder<"u"&&new TextDecoder;try{Z.decode(w,{stream:!0})}catch{}return s.convert_streams=function(k){var D=new DataView(k),F=0;function L(){var le=D.getUint16(F);return F+=2,le}function W(){var le=D.getUint32(F);return F+=4,le}function J(le){oe.setUint16(Q,le),Q+=2}function $(le){oe.setUint32(Q,le),Q+=4}for(var q={signature:W(),flavor:W(),length:W(),numTables:L(),reserved:L(),totalSfntSize:W(),majorVersion:L(),minorVersion:L(),metaOffset:W(),metaLength:W(),metaOrigLength:W(),privOffset:W(),privLength:W()},Y=0;Math.pow(2,Y)<=q.numTables;)Y++;Y--;for(var O=16*Math.pow(2,Y),H=16*q.numTables-O,z=12,T=[],P=0;P<q.numTables;P++)T.push({tag:W(),offset:W(),compLength:W(),origLength:W(),origChecksum:W()}),z+=16;var N,E=new Uint8Array(12+16*T.length+T.reduce(function(le,X){return le+X.origLength+4},0)),G=E.buffer,oe=new DataView(G),Q=0;return $(q.flavor),J(q.numTables),J(O),J(Y),J(H),T.forEach(function(le){$(le.tag),$(le.origChecksum),$(z),$(le.origLength),le.outOffset=z,(z+=le.origLength)%4!=0&&(z+=4-z%4)}),T.forEach(function(le){var X,te=k.slice(le.offset,le.offset+le.compLength);if(le.compLength!=le.origLength){var ie=new Uint8Array(le.origLength);X=new Uint8Array(te,2),x(X,ie)}else ie=new Uint8Array(te);E.set(ie,le.outOffset);var pe=0;(z=le.outOffset+le.origLength)%4!=0&&(pe=4-z%4),E.set(new Uint8Array(pe).buffer,le.outOffset+le.origLength),N=z+pe}),G.slice(0,N)},Object.defineProperty(s,"__esModule",{value:!0}),s}({}).convert_streams}function pv(s,e){const t={M:2,L:2,Q:4,C:6,Z:0},i={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,r=2,a=4,o=8,c=16,l=32;let u;function h(R){if(!u){const I={R:r,L:n,D:a,C:c,U:l,T:o};u=new Map;for(let x in i){let w=0;i[x].split(",").forEach(Z=>{let[k,D]=Z.split("+");k=parseInt(k,36),D=D?parseInt(D,36):0,u.set(w+=k,I[x]);for(let F=D;F--;)u.set(++w,I[x])})}}return u.get(R)||l}const f=1,d=2,g=3,v=4,m=[null,"isol","init","fina","medi"];function p(R){const I=new Uint8Array(R.length);let x=l,w=f,Z=-1;for(let k=0;k<R.length;k++){const D=R.codePointAt(k);let F=h(D)|0,L=f;F&o||(x&(n|a|c)?F&(r|a|c)?(L=g,(w===f||w===g)&&I[Z]++):F&(n|l)&&(w===d||w===v)&&I[Z]--:x&(r|l)&&(w===d||w===v)&&I[Z]--,w=I[k]=L,x=F,Z=k,D>65535&&k++)}return I}function S(R,I){const x=[];for(let Z=0;Z<I.length;Z++){const k=I.codePointAt(Z);k>65535&&Z++,x.push(s.U.codeToGlyph(R,k))}const w=R.GSUB;if(w){const{lookupList:Z,featureList:k}=w;let D;const F=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,L=[];k.forEach(W=>{if(F.test(W.tag))for(let J=0;J<W.tab.length;J++){if(L[W.tab[J]])continue;L[W.tab[J]]=!0;const $=Z[W.tab[J]],q=/^(isol|init|fina|medi)$/.test(W.tag);q&&!D&&(D=p(I));for(let Y=0;Y<x.length;Y++)(!D||!q||m[D[Y]]===W.tag)&&s.U._applySubs(x,Y,$,Z)}})}return x}function _(R,I){const x=new Int16Array(I.length*3);let w=0;for(;w<I.length;w++){const F=I[w];if(F===-1)continue;x[w*3+2]=R.hmtx.aWidth[F];const L=R.GPOS;if(L){const W=L.lookupList;for(let J=0;J<W.length;J++){const $=W[J];for(let q=0;q<$.tabs.length;q++){const Y=$.tabs[q];if($.ltype===1){if(s._lctf.coverageIndex(Y.coverage,F)!==-1&&Y.pos){D(Y.pos,w);break}}else if($.ltype===2){let O=null,H=Z();if(H!==-1){const z=s._lctf.coverageIndex(Y.coverage,I[H]);if(z!==-1){if(Y.fmt===1){const T=Y.pairsets[z];for(let P=0;P<T.length;P++)T[P].gid2===F&&(O=T[P])}else if(Y.fmt===2){const T=s.U._getGlyphClass(I[H],Y.classDef1),P=s.U._getGlyphClass(F,Y.classDef2);O=Y.matrix[T][P]}if(O){O.val1&&D(O.val1,H),O.val2&&D(O.val2,w);break}}}}else if($.ltype===4){const O=s._lctf.coverageIndex(Y.markCoverage,F);if(O!==-1){const H=Z(k),z=H===-1?-1:s._lctf.coverageIndex(Y.baseCoverage,I[H]);if(z!==-1){const T=Y.markArray[O],P=Y.baseArray[z][T.markClass];x[w*3]=P.x-T.x+x[H*3]-x[H*3+2],x[w*3+1]=P.y-T.y+x[H*3+1];break}}}else if($.ltype===6){const O=s._lctf.coverageIndex(Y.mark1Coverage,F);if(O!==-1){const H=Z();if(H!==-1){const z=I[H];if(M(R,z)===3){const T=s._lctf.coverageIndex(Y.mark2Coverage,z);if(T!==-1){const P=Y.mark1Array[O],N=Y.mark2Array[T][P.markClass];x[w*3]=N.x-P.x+x[H*3]-x[H*3+2],x[w*3+1]=N.y-P.y+x[H*3+1];break}}}}}}}}else if(R.kern&&!R.cff){const W=Z();if(W!==-1){const J=R.kern.glyph1.indexOf(I[W]);if(J!==-1){const $=R.kern.rval[J].glyph2.indexOf(F);$!==-1&&(x[W*3+2]+=R.kern.rval[J].vals[$])}}}}return x;function Z(F){for(let L=w-1;L>=0;L--)if(I[L]!==-1&&(!F||F(I[L])))return L;return-1}function k(F){return M(R,F)===1}function D(F,L){for(let W=0;W<3;W++)x[L*3+W]+=F[W]||0}}function M(R,I){const x=R.GDEF&&R.GDEF.glyphClassDef;return x?s.U._getGlyphClass(I,x):0}function y(...R){for(let I=0;I<R.length;I++)if(typeof R[I]=="number")return R[I]}function A(R){const I=Object.create(null),x=R["OS/2"],w=R.hhea,Z=R.head.unitsPerEm,k=y(x&&x.sTypoAscender,w&&w.ascender,Z),D={unitsPerEm:Z,ascender:k,descender:y(x&&x.sTypoDescender,w&&w.descender,0),capHeight:y(x&&x.sCapHeight,k),xHeight:y(x&&x.sxHeight,k),lineGap:y(x&&x.sTypoLineGap,w&&w.lineGap),supportsCodePoint(F){return s.U.codeToGlyph(R,F)>0},forEachGlyph(F,L,W,J){let $=0;const q=1/D.unitsPerEm*L,Y=S(R,F);let O=0;const H=_(R,Y);return Y.forEach((z,T)=>{if(z!==-1){let P=I[z];if(!P){const{cmds:N,crds:E}=s.U.glyphToPath(R,z);let G="",oe=0;for(let ie=0,pe=N.length;ie<pe;ie++){const ue=t[N[ie]];G+=N[ie];for(let Se=1;Se<=ue;Se++)G+=(Se>1?",":"")+E[oe++]}let Q,le,X,te;if(E.length){Q=le=1/0,X=te=-1/0;for(let ie=0,pe=E.length;ie<pe;ie+=2){let ue=E[ie],Se=E[ie+1];ue<Q&&(Q=ue),Se<le&&(le=Se),ue>X&&(X=ue),Se>te&&(te=Se)}}else Q=X=le=te=0;P=I[z]={index:z,advanceWidth:R.hmtx.aWidth[z],xMin:Q,yMin:le,xMax:X,yMax:te,path:G}}J.call(null,P,$+H[T*3]*q,H[T*3+1]*q,O),$+=H[T*3+2]*q,W&&($+=W*L)}O+=F.codePointAt(O)>65535?2:1}),$}};return D}return function(I){const x=new Uint8Array(I,0,4),w=s._bin.readASCII(x,0,4);if(w==="wOFF")I=e(I);else if(w==="wOF2")throw new Error("woff2 fonts not supported");return A(s.parse(I)[0])}}const mv=Vi({name:"Typr Font Parser",dependencies:[fv,dv,pv],init(s,e,t){const i=s(),n=e();return t(i,n)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function gv(){return function(s){var e=function(){this.buckets=new Map};e.prototype.add=function(_){var M=_>>5;this.buckets.set(M,(this.buckets.get(M)||0)|1<<(31&_))},e.prototype.has=function(_){var M=this.buckets.get(_>>5);return M!==void 0&&(M&1<<(31&_))!=0},e.prototype.serialize=function(){var _=[];return this.buckets.forEach(function(M,y){_.push((+y).toString(36)+":"+M.toString(36))}),_.join(",")},e.prototype.deserialize=function(_){var M=this;this.buckets.clear(),_.split(",").forEach(function(y){var A=y.split(":");M.buckets.set(parseInt(A[0],36),parseInt(A[1],36))})};var t=Math.pow(2,8),i=t-1,n=~i;function r(_){var M=function(A){return A&n}(_).toString(16),y=function(A){return(A&n)+t-1}(_).toString(16);return"codepoint-index/plane"+(_>>16)+"/"+M+"-"+y+".json"}function a(_,M){var y=_&i,A=M.codePointAt(y/6|0);return((A=(A||48)-48)&1<<y%6)!=0}function o(_,M){var y;(y=_,y.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(A){return A.split("-").map(function(R){return parseInt(R.trim(),16)})})).forEach(function(A){var R=A[0],I=A[1];I===void 0&&(I=R),M(R,I)})}function c(_,M){o(_,function(y,A){for(var R=y;R<=A;R++)M(R)})}var l={},u={},h=new WeakMap,f="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function d(_){var M=h.get(_);return M||(M=new e,c(_.ranges,function(y){return M.add(y)}),h.set(_,M)),M}var g,v=new Map;function m(_,M,y){return _[M]?M:_[y]?y:function(A){for(var R in A)return R}(_)}function p(_,M){var y=M;if(!_.includes(y)){y=1/0;for(var A=0;A<_.length;A++)Math.abs(_[A]-M)<Math.abs(y-M)&&(y=_[A])}return y}function S(_){return g||(g=new Set,c("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(M){g.add(M)})),g.has(_)}return s.CodePointSet=e,s.clearCache=function(){l={},u={}},s.getFontsForString=function(_,M){M===void 0&&(M={});var y,A=M.lang;A===void 0&&(A=new RegExp("\\p{Script=Hangul}","u").test(y=_)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(y)?"ja":"en");var R=M.category;R===void 0&&(R="sans-serif");var I=M.style;I===void 0&&(I="normal");var x=M.weight;x===void 0&&(x=400);var w=(M.dataUrl||f).replace(/\/$/g,""),Z=new Map,k=new Uint8Array(_.length),D={},F={},L=new Array(_.length),W=new Map,J=!1;function $(O){var H=v.get(O);return H||(H=fetch(w+"/"+O).then(function(z){if(!z.ok)throw new Error(z.statusText);return z.json().then(function(T){if(!Array.isArray(T)||T[0]!==1)throw new Error("Incorrect schema version; need 1, got "+T[0]);return T[1]})}).catch(function(z){if(w!==f)return J||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+w+'", trying default CDN. '+z.message),J=!0),w=f,v.delete(O),$(O);throw z}),v.set(O,H)),H}for(var q=function(O){var H=_.codePointAt(O),z=r(H);L[O]=z,l[z]||W.has(z)||W.set(z,$(z).then(function(T){l[z]=T})),H>65535&&(O++,Y=O)},Y=0;Y<_.length;Y++)q(Y);return Promise.all(W.values()).then(function(){W.clear();for(var O=function(z){var T=_.codePointAt(z),P=null,N=l[L[z]],E=void 0;for(var G in N){var oe=F[G];if(oe===void 0&&(oe=F[G]=new RegExp(G).test(A||"en")),oe){for(var Q in E=G,N[G])if(a(T,N[G][Q])){P=Q;break}break}}if(!P){e:for(var le in N)if(le!==E){for(var X in N[le])if(a(T,N[le][X])){P=X;break e}}}P||(console.debug("No font coverage for U+"+T.toString(16)),P="latin"),L[z]=P,u[P]||W.has(P)||W.set(P,$("font-meta/"+P+".json").then(function(te){u[P]=te})),T>65535&&(z++,H=z)},H=0;H<_.length;H++)O(H);return Promise.all(W.values())}).then(function(){for(var O,H=null,z=0;z<_.length;z++){var T=_.codePointAt(z);if(H&&(S(T)||d(H).has(T)))k[z]=k[z-1];else{H=u[L[z]];var P=D[H.id];if(!P){var N=H.typeforms,E=m(N,R,"sans-serif"),G=m(N[E],I,"normal"),oe=p((O=N[E])===null||O===void 0?void 0:O[G],x);P=D[H.id]=w+"/font-files/"+H.id+"/"+E+"."+G+"."+oe+".woff"}var Q=Z.get(P);Q==null&&(Q=Z.size,Z.set(P,Q)),k[z]=Q}T>65535&&(z++,k[z]=k[z-1])}return{fontUrls:Array.from(Z.keys()),chars:k}})},Object.defineProperty(s,"__esModule",{value:!0}),s}({})}function vv(s,e){const t=Object.create(null),i=Object.create(null);function n(a,o){const c=l=>{console.error(`Failure loading font ${a}`,l)};try{const l=new XMLHttpRequest;l.open("get",a,!0),l.responseType="arraybuffer",l.onload=function(){if(l.status>=400)c(new Error(l.statusText));else if(l.status>0)try{const u=s(l.response);u.src=a,o(u)}catch(u){c(u)}},l.onerror=c,l.send()}catch(l){c(l)}}function r(a,o){let c=t[a];c?o(c):i[a]?i[a].push(o):(i[a]=[o],n(a,l=>{l.src=a,t[a]=l,i[a].forEach(u=>u(l)),delete i[a]}))}return function(a,o,{lang:c,fonts:l=[],style:u="normal",weight:h="normal",unicodeFontsURL:f}={}){const d=new Uint8Array(a.length),g=[];a.length||S();const v=new Map,m=[];if(u!=="italic"&&(u="normal"),typeof h!="number"&&(h=h==="bold"?700:400),l&&!Array.isArray(l)&&(l=[l]),l=l.slice().filter(M=>!M.lang||M.lang.test(c)).reverse(),l.length){let R=0;(function I(x=0){for(let w=x,Z=a.length;w<Z;w++){const k=a.codePointAt(w);if(R===1&&g[d[w-1]].supportsCodePoint(k)||/\s/.test(a[w]))d[w]=d[w-1],R===2&&(m[m.length-1][1]=w);else for(let D=d[w],F=l.length;D<=F;D++)if(D===F){const L=R===2?m[m.length-1]:m[m.length]=[w,w];L[1]=w,R=2}else{d[w]=D;const{src:L,unicodeRange:W}=l[D];if(!W||_(k,W)){const J=t[L];if(!J){r(L,()=>{I(w)});return}if(J.supportsCodePoint(k)){let $=v.get(J);typeof $!="number"&&($=g.length,g.push(J),v.set(J,$)),d[w]=$,R=1;break}}}k>65535&&w+1<Z&&(d[w+1]=d[w],w++,R===2&&(m[m.length-1][1]=w))}p()})()}else m.push([0,a.length-1]),p();function p(){if(m.length){const M=m.map(y=>a.substring(y[0],y[1]+1)).join(`
`);e.getFontsForString(M,{lang:c||void 0,style:u,weight:h,dataUrl:f}).then(({fontUrls:y,chars:A})=>{const R=g.length;let I=0;m.forEach(w=>{for(let Z=0,k=w[1]-w[0];Z<=k;Z++)d[w[0]+Z]=A[I++]+R;I++});let x=0;y.forEach((w,Z)=>{r(w,k=>{g[Z+R]=k,++x===y.length&&S()})})})}else S()}function S(){o({chars:d,fonts:g})}function _(M,y){for(let A=0;A<y.length;A++){const[R,I=R]=y[A];if(R<=M&&M<=I)return!0}return!1}}}const _v=Vi({name:"FontResolver",dependencies:[vv,mv,gv],init(s,e,t){return s(e,t())}});function xv(s,e){const i=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",r=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function a({text:g,lang:v,fonts:m,style:p,weight:S,preResolvedFonts:_,unicodeFontsURL:M},y){const A=({chars:R,fonts:I})=>{let x,w;const Z=[];for(let k=0;k<R.length;k++)R[k]!==w?(w=R[k],Z.push(x={start:k,end:k,fontObj:I[R[k]]})):x.end=k;y(Z)};_?A(_):s(g,A,{lang:v,fonts:m,style:p,weight:S,unicodeFontsURL:M})}function o({text:g="",font:v,lang:m,sdfGlyphSize:p=64,fontSize:S=400,fontWeight:_=1,fontStyle:M="normal",letterSpacing:y=0,lineHeight:A="normal",maxWidth:R=1/0,direction:I,textAlign:x="left",textIndent:w=0,whiteSpace:Z="normal",overflowWrap:k="normal",anchorX:D=0,anchorY:F=0,metricsOnly:L=!1,unicodeFontsURL:W,preResolvedFonts:J=null,includeCaretPositions:$=!1,chunkedBoundsSize:q=8192,colorRanges:Y=null},O){const H=h(),z={fontLoad:0,typesetting:0};g.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),g=g.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),S=+S,y=+y,R=+R,A=A||"normal",w=+w,a({text:g,lang:m,style:M,weight:_,fonts:typeof v=="string"?[{src:v}]:v,unicodeFontsURL:W,preResolvedFonts:J},T=>{z.fontLoad=h()-H;const P=isFinite(R);let N=null,E=null,G=null,oe=null,Q=null,le=null,X=null,te=null,ie=0,pe=0,ue=Z!=="nowrap";const Se=new Map,he=h();let xe=w,Te=0,de=new f;const C=[de];T.forEach(me=>{const{fontObj:B}=me,{ascender:ae,descender:ee,unitsPerEm:be,lineGap:Ae,capHeight:we,xHeight:Ee}=B;let ye=Se.get(B);if(!ye){const ne=S/be,ve=A==="normal"?(ae-ee+Ae)*ne:A*S,Le=(ve-(ae-ee)*ne)/2,Re=Math.min(ve,(ae-ee)*ne),Ue=(ae+ee)/2*ne+Re/2;ye={index:Se.size,src:B.src,fontObj:B,fontSizeMult:ne,unitsPerEm:be,ascender:ae*ne,descender:ee*ne,capHeight:we*ne,xHeight:Ee*ne,lineHeight:ve,baseline:-Le-ae*ne,caretTop:Ue,caretBottom:Ue-Re},Se.set(B,ye)}const{fontSizeMult:Pe}=ye,De=g.slice(me.start,me.end+1);let Ze,j;B.forEachGlyph(De,S,y,(ne,ve,Le,Re)=>{ve+=Te,Re+=me.start,Ze=ve,j=ne;const Ue=g.charAt(Re),Be=ne.advanceWidth*Pe,Ve=de.count;let Oe;if("isEmpty"in ne||(ne.isWhitespace=!!Ue&&new RegExp(n).test(Ue),ne.canBreakAfter=!!Ue&&r.test(Ue),ne.isEmpty=ne.xMin===ne.xMax||ne.yMin===ne.yMax||i.test(Ue)),!ne.isWhitespace&&!ne.isEmpty&&pe++,ue&&P&&!ne.isWhitespace&&ve+Be+xe>R&&Ve){if(de.glyphAt(Ve-1).glyphObj.canBreakAfter)Oe=new f,xe=-ve;else for(let $e=Ve;$e--;)if($e===0&&k==="break-word"){Oe=new f,xe=-ve;break}else if(de.glyphAt($e).glyphObj.canBreakAfter){Oe=de.splitAt($e+1);const et=Oe.glyphAt(0).x;xe-=et;for(let st=Oe.count;st--;)Oe.glyphAt(st).x-=et;break}Oe&&(de.isSoftWrapped=!0,de=Oe,C.push(de),ie=R)}let ze=de.glyphAt(de.count);ze.glyphObj=ne,ze.x=ve+xe,ze.y=Le,ze.width=Be,ze.charIndex=Re,ze.fontData=ye,Ue===`
`&&(de=new f,C.push(de),xe=-(ve+Be+y*S)+w)}),Te=Ze+j.advanceWidth*Pe+y*S});let b=0;C.forEach(me=>{let B=!0;for(let ae=me.count;ae--;){const ee=me.glyphAt(ae);B&&!ee.glyphObj.isWhitespace&&(me.width=ee.x+ee.width,me.width>ie&&(ie=me.width),B=!1);let{lineHeight:be,capHeight:Ae,xHeight:we,baseline:Ee}=ee.fontData;be>me.lineHeight&&(me.lineHeight=be);const ye=Ee-me.baseline;ye<0&&(me.baseline+=ye,me.cap+=ye,me.ex+=ye),me.cap=Math.max(me.cap,me.baseline+Ae),me.ex=Math.max(me.ex,me.baseline+we)}me.baseline-=b,me.cap-=b,me.ex-=b,b+=me.lineHeight});let K=0,re=0;if(D&&(typeof D=="number"?K=-D:typeof D=="string"&&(K=-ie*(D==="left"?0:D==="center"?.5:D==="right"?1:l(D)))),F&&(typeof F=="number"?re=-F:typeof F=="string"&&(re=F==="top"?0:F==="top-baseline"?-C[0].baseline:F==="top-cap"?-C[0].cap:F==="top-ex"?-C[0].ex:F==="middle"?b/2:F==="bottom"?b:F==="bottom-baseline"?-C[C.length-1].baseline:l(F)*b)),!L){const me=e.getEmbeddingLevels(g,I);N=new Uint16Array(pe),E=new Uint8Array(pe),G=new Float32Array(pe*2),oe={},X=[1/0,1/0,-1/0,-1/0],te=[],$&&(le=new Float32Array(g.length*4)),Y&&(Q=new Uint8Array(pe*3));let B=0,ae=-1,ee=-1,be,Ae;if(C.forEach((we,Ee)=>{let{count:ye,width:Pe}=we;if(ye>0){let De=0;for(let Re=ye;Re--&&we.glyphAt(Re).glyphObj.isWhitespace;)De++;let Ze=0,j=0;if(x==="center")Ze=(ie-Pe)/2;else if(x==="right")Ze=ie-Pe;else if(x==="justify"&&we.isSoftWrapped){let Re=0;for(let Ue=ye-De;Ue--;)we.glyphAt(Ue).glyphObj.isWhitespace&&Re++;j=(ie-Pe)/Re}if(j||Ze){let Re=0;for(let Ue=0;Ue<ye;Ue++){let Be=we.glyphAt(Ue);const Ve=Be.glyphObj;Be.x+=Ze+Re,j!==0&&Ve.isWhitespace&&Ue<ye-De&&(Re+=j,Be.width+=j)}}const ne=e.getReorderSegments(g,me,we.glyphAt(0).charIndex,we.glyphAt(we.count-1).charIndex);for(let Re=0;Re<ne.length;Re++){const[Ue,Be]=ne[Re];let Ve=1/0,Oe=-1/0;for(let ze=0;ze<ye;ze++)if(we.glyphAt(ze).charIndex>=Ue){let $e=ze,et=ze;for(;et<ye;et++){let st=we.glyphAt(et);if(st.charIndex>Be)break;et<ye-De&&(Ve=Math.min(Ve,st.x),Oe=Math.max(Oe,st.x+st.width))}for(let st=$e;st<et;st++){const At=we.glyphAt(st);At.x=Oe-(At.x+At.width-Ve)}break}}let ve;const Le=Re=>ve=Re;for(let Re=0;Re<ye;Re++){const Ue=we.glyphAt(Re);ve=Ue.glyphObj;const Be=ve.index,Ve=me.levels[Ue.charIndex]&1;if(Ve){const Oe=e.getMirroredCharacter(g[Ue.charIndex]);Oe&&Ue.fontData.fontObj.forEachGlyph(Oe,0,0,Le)}if($){const{charIndex:Oe,fontData:ze}=Ue,$e=Ue.x+K,et=Ue.x+Ue.width+K;le[Oe*4]=Ve?et:$e,le[Oe*4+1]=Ve?$e:et,le[Oe*4+2]=we.baseline+ze.caretBottom+re,le[Oe*4+3]=we.baseline+ze.caretTop+re;const st=Oe-ae;st>1&&u(le,ae,st),ae=Oe}if(Y){const{charIndex:Oe}=Ue;for(;Oe>ee;)ee++,Y.hasOwnProperty(ee)&&(Ae=Y[ee])}if(!ve.isWhitespace&&!ve.isEmpty){const Oe=B++,{fontSizeMult:ze,src:$e,index:et}=Ue.fontData,st=oe[$e]||(oe[$e]={});st[Be]||(st[Be]={path:ve.path,pathBounds:[ve.xMin,ve.yMin,ve.xMax,ve.yMax]});const At=Ue.x+K,Jt=Ue.y+we.baseline+re;G[Oe*2]=At,G[Oe*2+1]=Jt;const Ht=At+ve.xMin*ze,Qt=Jt+ve.yMin*ze,U=At+ve.xMax*ze,ce=Jt+ve.yMax*ze;Ht<X[0]&&(X[0]=Ht),Qt<X[1]&&(X[1]=Qt),U>X[2]&&(X[2]=U),ce>X[3]&&(X[3]=ce),Oe%q===0&&(be={start:Oe,end:Oe,rect:[1/0,1/0,-1/0,-1/0]},te.push(be)),be.end++;const fe=be.rect;if(Ht<fe[0]&&(fe[0]=Ht),Qt<fe[1]&&(fe[1]=Qt),U>fe[2]&&(fe[2]=U),ce>fe[3]&&(fe[3]=ce),N[Oe]=Be,E[Oe]=et,Y){const se=Oe*3;Q[se]=Ae>>16&255,Q[se+1]=Ae>>8&255,Q[se+2]=Ae&255}}}}}),le){const we=g.length-ae;we>1&&u(le,ae,we)}}const ge=[];Se.forEach(({index:me,src:B,unitsPerEm:ae,ascender:ee,descender:be,lineHeight:Ae,capHeight:we,xHeight:Ee})=>{ge[me]={src:B,unitsPerEm:ae,ascender:ee,descender:be,lineHeight:Ae,capHeight:we,xHeight:Ee}}),z.typesetting=h()-he,O({glyphIds:N,glyphFontIndices:E,glyphPositions:G,glyphData:oe,fontData:ge,caretPositions:le,glyphColors:Q,chunkedBounds:te,fontSize:S,topBaseline:re+C[0].baseline,blockBounds:[K,re-b,K+ie,re],visibleBounds:X,timings:z})})}function c(g,v){o({...g,metricsOnly:!0},m=>{const[p,S,_,M]=m.blockBounds;v({width:_-p,height:M-S})})}function l(g){let v=g.match(/^([\d.]+)%$/),m=v?parseFloat(v[1]):NaN;return isNaN(m)?0:m/100}function u(g,v,m){const p=g[v*4],S=g[v*4+1],_=g[v*4+2],M=g[v*4+3],y=(S-p)/m;for(let A=0;A<m;A++){const R=(v+A)*4;g[R]=p+y*A,g[R+1]=p+y*(A+1),g[R+2]=_,g[R+3]=M}}function h(){return(self.performance||Date).now()}function f(){this.data=[]}const d=["glyphObj","x","y","width","charIndex","fontData"];return f.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(g){let v=f.flyweight;return v.data=this.data,v.index=g,v},splitAt(g){let v=new f;return v.data=this.data.splice(g*d.length),v}},f.flyweight=d.reduce((g,v,m,p)=>(Object.defineProperty(g,v,{get(){return this.data[this.index*d.length+m]},set(S){this.data[this.index*d.length+m]=S}}),g),{data:null,index:0}),{typeset:o,measure:c}}const Vn=()=>(self.performance||Date).now(),xs=Xc();let ql;function yv(s,e,t,i,n,r,a,o,c,l,u=!0){return u?Sv(s,e,t,i,n,r,a,o,c,l).then(null,h=>(ql||(console.warn("WebGL SDF generation failed, falling back to JS",h),ql=!0),Kl(s,e,t,i,n,r,a,o,c,l))):Kl(s,e,t,i,n,r,a,o,c,l)}const us=[],Mv=5;let Oa=0;function Yc(){const s=Vn();for(;us.length&&Vn()-s<Mv;)us.shift()();Oa=us.length?setTimeout(Yc,0):0}const Sv=(...s)=>new Promise((e,t)=>{us.push(()=>{const i=Vn();try{xs.webgl.generateIntoCanvas(...s),e({timing:Vn()-i})}catch(n){t(n)}}),Oa||(Oa=setTimeout(Yc,0))}),Ev=4,bv=2e3,Zl={};let Tv=0;function Kl(s,e,t,i,n,r,a,o,c,l){const u="TroikaTextSDFGenerator_JS_"+Tv++%Ev;let h=Zl[u];return h||(h=Zl[u]={workerModule:Vi({name:u,workerId:u,dependencies:[Xc,Vn],init(f,d){const g=f().javascript.generate;return function(...v){const m=d();return{textureData:g(...v),timing:d()-m}}},getTransferables(f){return[f.textureData.buffer]}}),requests:0,idleTimer:null}),h.requests++,clearTimeout(h.idleTimer),h.workerModule(s,e,t,i,n,r).then(({textureData:f,timing:d})=>{const g=Vn(),v=new Uint8Array(f.length*4);for(let m=0;m<f.length;m++)v[m*4+l]=f[m];return xs.webglUtils.renderImageData(a,v,o,c,s,e,1<<3-l),d+=Vn()-g,--h.requests===0&&(h.idleTimer=setTimeout(()=>{nv(u)},bv)),{timing:d}})}function wv(s){s._warm||(xs.webgl.isSupported(s),s._warm=!0)}const Av=xs.webglUtils.resizeWebGLCanvasWithoutClearing,Ai={defaultFontURL:null,unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},Rv=new qe;function Ti(){return(self.performance||Date).now()}const Jl=Object.create(null);function Cv(s,e){s=Pv({},s);const t=Ti(),{defaultFontURL:i}=Ai,n=[];if(i&&n.push({label:"default",src:Ql(i)}),s.font&&n.push({label:"user",src:Ql(s.font)}),s.font=n,s.text=""+s.text,s.sdfGlyphSize=s.sdfGlyphSize||Ai.sdfGlyphSize,s.unicodeFontsURL=s.unicodeFontsURL||Ai.unicodeFontsURL,s.colorRanges!=null){let f={};for(let d in s.colorRanges)if(s.colorRanges.hasOwnProperty(d)){let g=s.colorRanges[d];typeof g!="number"&&(g=Rv.set(g).getHex()),f[d]=g}s.colorRanges=f}Object.freeze(s);const{textureWidth:r,sdfExponent:a}=Ai,{sdfGlyphSize:o}=s,c=r/o*4;let l=Jl[o];if(!l){const f=document.createElement("canvas");f.width=r,f.height=o*256/c,l=Jl[o]={glyphCount:0,sdfGlyphSize:o,sdfCanvas:f,sdfTexture:new wt(f,void 0,void 0,void 0,Lt,Lt),contextLost:!1,glyphsByFont:new Map},l.sdfTexture.generateMipmaps=!1,Lv(l)}const{sdfTexture:u,sdfCanvas:h}=l;Dv(s).then(f=>{const{glyphIds:d,glyphFontIndices:g,fontData:v,glyphPositions:m,fontSize:p,timings:S}=f,_=[],M=new Float32Array(d.length*4);let y=0,A=0;const R=Ti(),I=v.map(D=>{let F=l.glyphsByFont.get(D.src);return F||l.glyphsByFont.set(D.src,F=new Map),F});d.forEach((D,F)=>{const L=g[F],{src:W,unitsPerEm:J}=v[L];let $=I[L].get(D);if(!$){const{path:z,pathBounds:T}=f.glyphData[W][D],P=Math.max(T[2]-T[0],T[3]-T[1])/o*(Ai.sdfMargin*o+.5),N=l.glyphCount++,E=[T[0]-P,T[1]-P,T[2]+P,T[3]+P];I[L].set(D,$={path:z,atlasIndex:N,sdfViewBox:E}),_.push($)}const{sdfViewBox:q}=$,Y=m[A++],O=m[A++],H=p/J;M[y++]=Y+q[0]*H,M[y++]=O+q[1]*H,M[y++]=Y+q[2]*H,M[y++]=O+q[3]*H,d[F]=$.atlasIndex}),S.quads=(S.quads||0)+(Ti()-R);const x=Ti();S.sdf={};const w=h.height,Z=Math.ceil(l.glyphCount/c),k=Math.pow(2,Math.ceil(Math.log2(Z*o)));k>w&&(console.info(`Increasing SDF texture size ${w}->${k}`),Av(h,r,k),u.dispose()),Promise.all(_.map(D=>qc(D,l,s.gpuAccelerateSDF).then(({timing:F})=>{S.sdf[D.atlasIndex]=F}))).then(()=>{_.length&&!l.contextLost&&(Zc(l),u.needsUpdate=!0),S.sdfTotal=Ti()-x,S.total=Ti()-t,e(Object.freeze({parameters:s,sdfTexture:u,sdfGlyphSize:o,sdfExponent:a,glyphBounds:M,glyphAtlasIndices:d,glyphColors:f.glyphColors,caretPositions:f.caretPositions,chunkedBounds:f.chunkedBounds,ascender:f.ascender,descender:f.descender,lineHeight:f.lineHeight,capHeight:f.capHeight,xHeight:f.xHeight,topBaseline:f.topBaseline,blockBounds:f.blockBounds,visibleBounds:f.visibleBounds,timings:f.timings}))})}),Promise.resolve().then(()=>{l.contextLost||wv(h)})}function qc({path:s,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:i,sdfCanvas:n,contextLost:r},a){if(r)return Promise.resolve({timing:-1});const{textureWidth:o,sdfExponent:c}=Ai,l=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),h=u%(o/i)*i,f=Math.floor(u/(o/i))*i,d=e%4;return yv(i,i,s,t,l,c,n,h,f,d,a)}function Lv(s){const e=s.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),s.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),s.contextLost=!1;const i=[];s.glyphsByFont.forEach(n=>{n.forEach(r=>{i.push(qc(r,s,!0))})}),Promise.all(i).then(()=>{Zc(s),s.sdfTexture.needsUpdate=!0})})}function Pv(s,e){for(let t in e)e.hasOwnProperty(t)&&(s[t]=e[t]);return s}let ss;function Ql(s){return ss||(ss=typeof document>"u"?{}:document.createElement("a")),ss.href=s,ss.href}function Zc(s){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=s,{width:i,height:n}=e,r=s.sdfCanvas.getContext("webgl");let a=t.image.data;(!a||a.length!==i*n*4)&&(a=new Uint8Array(i*n*4),t.image={width:i,height:n,data:a},t.flipY=!1,t.isDataTexture=!0),r.readPixels(0,0,i,n,r.RGBA,r.UNSIGNED_BYTE,a)}}const Uv=Vi({name:"Typesetter",dependencies:[xv,_v,rv],init(s,e,t){return s(e,t())}}),Dv=Vi({name:"Typesetter",dependencies:[Uv],init(s){return function(e){return new Promise(t=>{s.typeset(e,t)})}},getTransferables(s){const e=[];for(let t in s)s[t]&&s[t].buffer&&e.push(s[t].buffer);return e}}),$l={};function Iv(s){let e=$l[s];if(!e){const t=new Gi(1,1,s,s),i=t.clone(),n=t.attributes,r=i.attributes,a=new ht,o=n.uv.count;for(let c=0;c<o;c++)r.position.array[c*3]*=-1,r.normal.array[c*3+2]*=-1;["position","normal","uv"].forEach(c=>{a.setAttribute(c,new Gt([...n[c].array,...r[c].array],n[c].itemSize))}),a.setIndex([...t.index.array,...i.index.array.map(c=>c+o)]),a.translate(.5,.5,0),e=$l[s]=a}return e}const Fv="aTroikaGlyphBounds",ec="aTroikaGlyphIndex",Nv="aTroikaGlyphColor";class Ov extends Wg{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new zi,this.boundingBox=new Zn}computeBoundingSphere(){}computeBoundingBox(){}setSide(e){const t=this.getIndex().count;this.setDrawRange(e===Tt?t/2:0,e===kt?t:t/2)}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=Iv(e);["position","normal","uv"].forEach(i=>{this.attributes[i]=t.attributes[i].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,i,n,r){_a(this,Fv,e,4),_a(this,ec,t,1),_a(this,Nv,r,3),this._blockBounds=i,this._chunkedBounds=n,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:i}=this;if(t){const{PI:n,floor:r,min:a,max:o,sin:c,cos:l}=Math,u=n/2,h=n*2,f=Math.abs(t),d=e[0]/f,g=e[2]/f,v=r((d+u)/h)!==r((g+u)/h)?-f:a(c(d)*f,c(g)*f),m=r((d-u)/h)!==r((g-u)/h)?f:o(c(d)*f,c(g)*f),p=r((d+n)/h)!==r((g+n)/h)?f*2:o(f-l(d)*f,f-l(g)*f);i.min.set(v,e[1],t<0?-p:0),i.max.set(m,e[3],t<0?0:p)}else i.min.set(e[0],e[1],0),i.max.set(e[2],e[3],0);i.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(ec).count,i=this._chunkedBounds;if(i)for(let n=i.length;n--;){t=i[n].end;let r=i[n].rect;if(r[1]<e.w&&r[3]>e.y&&r[0]<e.z&&r[2]>e.x)break}this.instanceCount=t}}function _a(s,e,t,i){const n=s.getAttribute(e);t?n&&n.array.length===t.length?(n.array.set(t),n.needsUpdate=!0):(s.setAttribute(e,new ig(t,i)),delete s._maxInstanceCount,s.dispose()):n&&s.deleteAttribute(e)}const Bv=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaDistanceOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,kv=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaDistanceOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaDistanceOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,zv=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaDistanceOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaOutlineOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,Gv=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaDistanceOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function Hv(s){const e=Na(s,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new Me},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new it(0,0,0,0)},uTroikaClipRect:{value:new it(0,0,0,0)},uTroikaDistanceOffset:{value:0},uTroikaOutlineOpacity:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new Me},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new qe},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Je},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:Bv,vertexTransform:kv,fragmentDefs:zv,fragmentColorTransform:Gv,customRewriter({vertexShader:t,fragmentShader:i}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(i)&&(i=i.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(jc,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:i}}});return e.transparent=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const qa=new gr({color:16777215,side:kt,transparent:!0}),tc=8421504,nc=new rt,as=new V,xa=new V,ar=[],Vv=new V,ya="+x+y";function ic(s){return Array.isArray(s)?s[0]:s}let Kc=()=>{const s=new It(new Gi(1,1),qa);return Kc=()=>s,s},Jc=()=>{const s=new It(new Gi(1,1,32,1),qa);return Jc=()=>s,s};const Wv={type:"syncstart"},Xv={type:"synccomplete"},Qc=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],jv=Qc.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class $c extends It{constructor(){const e=new Ov;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=tc,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=ya,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(Wv),Cv({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const i=this._queuedSyncs;i&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{i.forEach(n=>n&&n())})),this.dispatchEvent(Xv),e&&e()})))}onBeforeRender(e,t,i,n,r,a){this.sync(),r.isTroikaTextMaterial&&this._prepareForRender(r),r._hadOwnSide=r.hasOwnProperty("side"),this.geometry.setSide(r._actualSide=r.side),r.side=_n}onAfterRender(e,t,i,n,r,a){r._hadOwnSide?r.side=r._actualSide:delete r.side}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=qa.clone());if((!e||e.baseMaterial!==t)&&(e=this._derivedMaterial=Hv(t),t.addEventListener("dispose",function i(){t.removeEventListener("dispose",i),e.dispose()})),this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY){let i=e._outlineMtl;return i||(i=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),i.isTextOutlineMaterial=!0,i.depthWrite=!1,i.map=null,e.addEventListener("dispose",function n(){e.removeEventListener("dispose",n),i.dispose()})),[i,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return ic(this.material).getDepthMaterial()}get customDistanceMaterial(){return ic(this.material).getDistanceMaterial()}_prepareForRender(e){const t=e.isTextOutlineMaterial,i=e.uniforms,n=this.textRenderInfo;if(n){const{sdfTexture:o,blockBounds:c}=n;i.uTroikaSDFTexture.value=o,i.uTroikaSDFTextureSize.value.set(o.image.width,o.image.height),i.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,i.uTroikaSDFExponent.value=n.sdfExponent,i.uTroikaTotalBounds.value.fromArray(c),i.uTroikaUseGlyphColors.value=!t&&!!n.glyphColors;let l=0,u=0,h=0,f,d,g,v=0,m=0;if(t){let{outlineWidth:S,outlineOffsetX:_,outlineOffsetY:M,outlineBlur:y,outlineOpacity:A}=this;l=this._parsePercent(S)||0,u=Math.max(0,this._parsePercent(y)||0),f=A,v=this._parsePercent(_)||0,m=this._parsePercent(M)||0}else h=Math.max(0,this._parsePercent(this.strokeWidth)||0),h&&(g=this.strokeColor,i.uTroikaStrokeColor.value.set(g??tc),d=this.strokeOpacity,d==null&&(d=1)),f=this.fillOpacity;i.uTroikaDistanceOffset.value=l,i.uTroikaPositionOffset.value.set(v,m),i.uTroikaBlurRadius.value=u,i.uTroikaStrokeWidth.value=h,i.uTroikaStrokeOpacity.value=d,i.uTroikaFillOpacity.value=f??1,i.uTroikaCurveRadius.value=this.curveRadius||0;let p=this.clipRect;if(p&&Array.isArray(p)&&p.length===4)i.uTroikaClipRect.value.fromArray(p);else{const S=(this.fontSize||.1)*100;i.uTroikaClipRect.value.set(c[0]-S,c[1]-S,c[2]+S,c[3]+S)}this.geometry.applyClipRect(i.uTroikaClipRect.value)}i.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const r=t?this.outlineColor||0:this.color;if(r==null)delete e.color;else{const o=e.hasOwnProperty("color")?e.color:e.color=new qe;(r!==o._input||typeof r=="object")&&o.set(o._input=r)}let a=this.orientation||ya;if(a!==e._orientation){let o=i.uTroikaOrient.value;a=a.replace(/[^-+xyz]/g,"");let c=a!==ya&&a.match(/^([-+])([xyz])([-+])([xyz])$/);if(c){let[,l,u,h,f]=c;as.set(0,0,0)[u]=l==="-"?1:-1,xa.set(0,0,0)[f]=h==="-"?-1:1,nc.lookAt(Vv,as.cross(xa),xa),o.setFromMatrix4(nc)}else o.identity();e._orientation=a}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),i=t?parseFloat(t[1]):NaN;e=(isNaN(i)?0:i/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new Me){t.copy(e);const i=this.curveRadius;return i&&(t.x=Math.atan2(e.x,Math.abs(i)-Math.abs(e.z))*Math.abs(i)),t}worldPositionToTextCoords(e,t=new Me){return as.copy(e),this.localPositionToTextCoords(this.worldToLocal(as),t)}raycast(e,t){const{textRenderInfo:i,curveRadius:n}=this;if(i){const r=i.blockBounds,a=n?Jc():Kc(),o=a.geometry,{position:c,uv:l}=o.attributes;for(let u=0;u<l.count;u++){let h=r[0]+l.getX(u)*(r[2]-r[0]);const f=r[1]+l.getY(u)*(r[3]-r[1]);let d=0;n&&(d=n-Math.cos(h/n)*n,h=Math.sin(h/n)*n),c.setXYZ(u,h,f,d)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,a.matrixWorld=this.matrixWorld,a.material.side=this.material.side,ar.length=0,a.raycast(e,ar);for(let u=0;u<ar.length;u++)ar[u].object=this,t.push(ar[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,jv.forEach(i=>{this[i]=e[i]}),this}clone(){return new this.constructor().copy(this)}}Qc.forEach(s=>{const e="_private_"+s;Object.defineProperty($c.prototype,s,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});const Yv={d:"°",c:"⌀",p:"±"},eu=(s,e)=>{s=s.replace(/%%(.)/g,(a,o)=>Yv[o]||o);let t="",i;const n=[],r=a=>{t&&(n.push(t),t=""),n.push(a)};for(let a=0;a<s.length;a++)switch(i=s[a]){default:t+=i;break;case"\\":{switch(i=s[++a]){default:t+=i;break;case"P":t+=`
`;break;case"f":case"F":{let u="";for(;i=s[++a];){if(i===";"){r({f:u});break}if(i==="|"){const h={f:u},f=s.indexOf(";",++a);for(const d of s.slice(a,f).split("|"))h[d[0]]=+d.slice(1);a=f,r(h);break}u+=i==="\\"?s[++a]:i}break}case"S":{let u="",h,f="";for(;i=s[++a];){if(i===";"){h&&r({S:[u,h,f]});break}i==="\\"?h?f+=s[++a]:u+=s[++a]:h?f+=i:i==="^"||i==="/"||i==="#"?h=i:u+=i}break}case"H":case"W":const o=++a,[,c,l]=s.slice(o,a=s.indexOf(";",a)).match(/^(\d*(?:\.\d+)?)(\D*)$/);r({[i]:[+c,l]});break;case"Q":case"A":case"C":case"T":{const u=++a;r({[i]:+s.slice(u,a=s.indexOf(";",a))});break}case"L":case"O":case"K":r({[i]:1});break;case"l":case"o":case"k":r({[i.toUpperCase()]:0});break;case"U":case"u":s[a+1]==="+"?(t+=String.fromCodePoint(parseInt(s.substr(a+2,4),16)),a+=5):t+=i;break;case"M":case"m":t+="\\"+i;break}break}case"{":{let o=1;const c=a;for(;i=s[++a];)if(i==="{")o++;else if(i==="}"){if(--o===0){r(eu(s.slice(c+1,a)));break}}else i==="\\"&&a++;break}}return t&&n.push(t),n};var Pi={Math:{}};Pi.Math.angle2=function(s,e){var t=new Me(s.x,s.y),i=new Me(e.x,e.y);return i.sub(t),i.normalize(),i.y<0?-Math.acos(i.x):Math.acos(i.x)};Pi.Math.polar=function(s,e,t){var i={};return i.x=s.x+e*Math.cos(t),i.y=s.y+e*Math.sin(t),i};function qv(s,e,t,i){var n,r,a,o,c,l,u,h,f;o=s?new Me(s.x,s.y):new Me(0,0),c=e?new Me(e.x,e.y):new Me(1,0),t=t||1,l=4*Math.atan(t),u=o.distanceTo(c)/2/Math.sin(l/2),a=Pi.Math.polar(s,u,Pi.Math.angle2(o,c)+(Math.PI/2-l/2)),i=i||Math.max(Math.abs(Math.ceil(l/(Math.PI/18))),6),h=Pi.Math.angle2(a,o),f=l/i;var d=[];for(d.push(new V(o.x,o.y,0)),r=1;r<=i-1;r++)n=Pi.Math.polar(a,Math.abs(u),h+f*r),d.push(new V(n.x,n.y,0));return d}function r_(s,e,t,i,n){H(s);var r=new eg,a,o,c,l={min:{x:0,y:0,z:0},max:{x:0,y:0,z:0}};for(a=0;a<s.entities.length;a++){if(o=s.entities[a],c=A(o,s),c){var u=new Zn().setFromObject(c);isFinite(u.min.x)&&l.min.x>u.min.x&&(l.min.x=u.min.x),isFinite(u.min.y)&&l.min.y>u.min.y&&(l.min.y=u.min.y),isFinite(u.min.z)&&l.min.z>u.min.z&&(l.min.z=u.min.z),isFinite(u.max.x)&&l.max.x<u.max.x&&(l.max.x=u.max.x),isFinite(u.max.y)&&l.max.y<u.max.y&&(l.max.y=u.max.y),isFinite(u.max.z)&&l.max.z<u.max.z&&(l.max.z=u.max.z),r.add(c)}c=null}t=t||e.clientWidth,i=i||e.clientHeight;var h=t/i,f={x:l.max.x,y:l.max.y},d={x:l.min.x,y:l.min.y},g=f.x-d.x,v=f.y-d.y,m=m||{x:g/2+d.x,y:v/2+d.y},p=Math.abs(g/v);h>p?g=v*h:v=g/h;var S={bottom:-v/2,left:-g/2,top:v/2,right:g/2,center:{x:m.x,y:m.y}},_=new bc(S.left,S.right,S.top,S.bottom,1,19);_.position.z=10,_.position.x=S.center.x,_.position.y=S.center.y;var M=this.renderer=new Pc;M.setSize(t,i),M.setClearColor(268435455,0),e.appendChild(M.domElement),e.style.display="block";var y=new Vc(_,e);y.target.x=_.position.x,y.target.y=_.position.y,y.target.z=0,y.zoomSpeed=3,this.render=function(){M.render(r,_)},y.addEventListener("change",this.render),this.render(),y.update(),this.resize=function(T,P){var N=M.domElement.width,E=M.domElement.height,G=T/N,oe=P/E;_.top=oe*_.top,_.bottom=oe*_.bottom,_.left=G*_.left,_.right=G*_.right,M.setSize(T,P),M.setClearColor(268435455,1),this.render()};function A(T,P){var N;if(T.type==="CIRCLE"||T.type==="ARC")N=F(T,P);else if(T.type==="LWPOLYLINE"||T.type==="LINE"||T.type==="POLYLINE")N=D(T,P);else if(T.type==="TEXT")N=J(T,P);else if(T.type==="SOLID")N=W(T,P);else if(T.type==="POINT")N=$(T,P);else if(T.type==="INSERT")N=Y(T,P);else if(T.type==="SPLINE")N=Z(T,P);else if(T.type==="MTEXT")N=I(T,P);else if(T.type==="ELLIPSE")N=R(T,P);else if(T.type==="DIMENSION"){var E=T.dimensionType&7;E===0?N=q(T,P):console.log("Unsupported Dimension type: "+E)}else console.log("Unsupported Entity Type: "+T.type);return N}function R(T,P){var N=O(T,P),E=Math.sqrt(Math.pow(T.majorAxisEndPoint.x,2)+Math.pow(T.majorAxisEndPoint.y,2)),G=E*T.axisRatio,oe=Math.atan2(T.majorAxisEndPoint.y,T.majorAxisEndPoint.x),Q=new gs(T.center.x,T.center.y,E,G,T.startAngle,T.endAngle,!1,oe),le=Q.getPoints(50),X=new ht().setFromPoints(le),te=new Ci({linewidth:1,color:N}),ie=new $r(X,te);return ie}function I(T,P){var N=O(T,P);if(!n)return console.log("font parameter not set. Ignoring text entity.");var E=eu(T.text),G=x(E,T),oe=w(G.text,G.style,T,N),Q=new ct;return Q.add(oe),Q}function x(T,P,N){let E={horizontalAlignment:"left",textHeight:P.height};var G=[];for(let Q of T)if(typeof Q=="string")Q.startsWith("pxq")&&Q.endsWith(";")?Q.indexOf("c")!==-1?E.horizontalAlignment="center":Q.indexOf("l")!==-1?E.horizontalAlignment="left":Q.indexOf("r")!==-1?E.horizontalAlignment="right":Q.indexOf("j")!==-1&&(E.horizontalAlignment="justify"):G.push(Q);else if(Array.isArray(Q)){var oe=x(Q,P);G.push(oe.text)}else typeof Q=="object"&&Q.S&&Q.S.length===3&&G.push(Q.S[0]+"/"+Q.S[2]);return{text:G.join(),style:E}}function w(T,P,N,E){if(!T)return null;let G=new $c;if(G.text=T.replaceAll("\\P",`
`).replaceAll("\\X",`
`),G.fontSize=P.textHeight,G.maxWidth=N.width||1/0,G.position.x=N.position.x,G.position.y=N.position.y,G.position.z=N.position.z,G.textAlign=P.horizontalAlignment,G.color=E,N.rotation&&(G.rotation.z=N.rotation*Math.PI/180),N.directionVector){var oe=N.directionVector;G.rotation.z=new V(1,0,0).angleTo(new V(oe.x,oe.y,oe.z))}switch(N.attachmentPoint){case 1:G.anchorX="left",G.anchorY="top";break;case 2:G.anchorX="center",G.anchorY="top";break;case 3:G.anchorX="right",G.anchorY="top";break;case 4:G.anchorX="left",G.anchorY="middle";break;case 5:G.anchorX="center",G.anchorY="middle";break;case 6:G.anchorX="right",G.anchorY="middle";break;case 7:G.anchorX="left",G.anchorY="bottom";break;case 8:G.anchorX="center",G.anchorY="bottom";break;case 9:G.anchorX="right",G.anchorY="bottom";break;default:return}return G.sync(()=>{if(G.textAlign!=="left"){G.geometry.computeBoundingBox();var Q=G.geometry.boundingBox.max.x-G.geometry.boundingBox.min.x;G.textAlign==="center"&&(G.position.x+=(N.width-Q)/2),G.textAlign==="right"&&(G.position.x+=N.width-Q)}}),G}function Z(T,P){var N=O(T,P),E=k(T.controlPoints,T.degreeOfSplineCurve,T.knotValues,100),G=new ht().setFromPoints(E),oe=new Ci({linewidth:1,color:N}),Q=new $r(G,oe);return Q}function k(T,P,N,E,G){const oe=[],Q=T.map(function(te){return[te.x,te.y]}),le=[N[P]],X=[N[P],N[N.length-1-P]];for(let te=P+1;te<N.length-P;++te)le[le.length-1]!==N[te]&&le.push(N[te]);E=E||25;for(let te=1;te<le.length;++te){const ie=le[te-1],pe=le[te];for(let ue=0;ue<=E;++ue){let he=(ue/E*(pe-ie)+ie-X[0])/(X[1]-X[0]);he=Math.max(he,0),he=Math.min(he,1);const xe=Jg(he,P,Q,N,G);oe.push(new Me(xe[0],xe[1]))}}return oe}function D(T,P){let N=[],E=O(T,P);var G,oe,Q,le,X,te,ie,pe;if(!T.vertices)return console.log("entity missing vertices.");for(ie=0;ie<T.vertices.length;ie++)if(T.vertices[ie].bulge){te=T.vertices[ie].bulge,le=T.vertices[ie],X=ie+1<T.vertices.length?T.vertices[ie+1]:N[0];let Se=qv(le,X,te);N.push.apply(N,Se)}else Q=T.vertices[ie],N.push(new V(Q.x,Q.y,0));T.shape&&N.push(N[0]),T.lineType&&(oe=P.tables.lineType.lineTypes[T.lineType]),oe&&oe.pattern&&oe.pattern.length!==0?G=new Ng({color:E,gapSize:4,dashSize:4}):G=new Ci({linewidth:1,color:E});var ue=new ht().setFromPoints(N);return pe=new $r(ue,G),pe}function F(T,P){var N,E;T.type==="CIRCLE"?(N=T.startAngle||0,E=N+2*Math.PI):(N=T.startAngle,E=T.endAngle);var G=new Ic(0,0,T.radius,N,E),oe=G.getPoints(32),Q=new ht().setFromPoints(oe),le=new Ci({color:O(T,P)}),X=new $r(Q,le);return X.position.x=T.center.x,X.position.y=T.center.y,X.position.z=T.center.z,X}function L(T,P,N,E){var G=new V,oe=new V;G.subVectors(N,P),oe.subVectors(E,P),G.cross(oe);var Q=new V(P.x,P.y,P.z),le=new V(N.x,N.y,N.z),X=new V(E.x,E.y,E.z);G.z<0?T.push(X,le,Q):T.push(Q,le,X)}function W(T,P){var N,E,G=new ht,oe=T.points;return E=[],L(E,oe[0],oe[1],oe[2]),L(E,oe[1],oe[2],oe[3]),N=new gr({color:O(T,P)}),G.setFromPoints(E),new It(G,N)}function J(T,P){var N,E,G;if(!n)return console.warn("Text is not supported without a Three.js font loaded with THREE.FontLoader! Load a font of your choice and pass this into the constructor. See the sample for this repository or Three.js examples at http://threejs.org/examples/?q=text#webgl_geometry_text for more details.");if(N=new Zg(T.text.replaceAll("%%u",""),{font:n,depth:0,size:T.textHeight||12}),T.rotation){var oe=T.rotation*Math.PI/180;N.rotateZ(oe)}return E=new gr({color:O(T,P),side:kt}),G=new It(N,E),G.position.x=T.startPoint.x,G.position.y=T.startPoint.y,G.position.z=T.startPoint.z,G}function $(T,P){var N,E,G;N=new ht,N.setAttribute("position",new Gt([T.position.x,T.position.y,T.position.z],3));var oe=O(T,P);E=new Dc({size:.1,color:new qe(oe)}),G=new rg(N,E),r.add(G)}function q(T,P){var N=P.blocks[T.block];if(!N||!N.entities)return null;for(var E=new ct,G=0;G<N.entities.length;G++){var oe=A(N.entities[G],P);oe&&E.add(oe)}return E}function Y(T,P){var N=P.blocks[T.name];if(!N.entities)return null;var E=new ct;T.xScale&&(E.scale.x=T.xScale),T.yScale&&(E.scale.y=T.yScale),T.rotation&&(E.rotation.z=T.rotation*Math.PI/180),T.position&&(E.position.x=T.position.x,E.position.y=T.position.y,E.position.z=T.position.z);for(var G=0;G<N.entities.length;G++){var oe=A(N.entities[G],P);oe&&E.add(oe)}return E}function O(T,P){var N=0;return T.color?N=T.color:P.tables&&P.tables.layer&&P.tables.layer.layers[T.layer]&&(N=P.tables.layer.layers[T.layer].color),(N==null||N===16777215)&&(N=0),N}function H(T){var P,N;if(!(!T.tables||!T.tables.lineType)){var E=T.tables.lineType.lineTypes;for(N in E)P=E[N],P.pattern&&(P.material=z(P.pattern))}}function z(T){var P,N={},E=0;for(P=0;P<T.length;P++)E+=Math.abs(T[P]);return N.uniforms=Ha.merge([Ce.common,Ce.fog,{pattern:{type:"fv1",value:T},patternLength:{type:"f",value:E}}]),N.vertexShader=["attribute float lineDistance;","varying float vLineDistance;",Ge.color_pars_vertex,"void main() {",Ge.color_vertex,"vLineDistance = lineDistance;","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join(`
`),N.fragmentShader=["uniform vec3 diffuse;","uniform float opacity;","uniform float pattern["+T.length+"];","uniform float patternLength;","varying float vLineDistance;",Ge.color_pars_fragment,Ge.fog_pars_fragment,"void main() {","float pos = mod(vLineDistance, patternLength);","for ( int i = 0; i < "+T.length+"; i++ ) {","pos = pos - abs(pattern[i]);","if( pos < 0.0 ) {","if( pattern[i] > 0.0 ) {","gl_FragColor = vec4(1.0, 0.0, 0.0, opacity );","break;","}","discard;","}","}",Ge.color_fragment,Ge.fog_fragment,"}"].join(`
`),N}}export{e_ as A,Zn as B,Ya as E,i_ as F,qr as G,Ci as L,Jv as M,t_ as O,Bt as P,eg as S,Qv as T,V,Pc as W,$v as a,ls as b,It as c,Kv as d,ng as e,Zv as f,ht as g,$r as h,r_ as i};
