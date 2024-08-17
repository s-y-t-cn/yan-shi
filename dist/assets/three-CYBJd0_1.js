/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ds="152";const En="",Xe="srgb",Qt="srgb-linear",fo="display-p3";const na="300 es";class Rn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const n=r.slice(0);for(let i=0,a=n.length;i<a;i++)n[i].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qr=Math.PI/180,Es=180/Math.PI;function li(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(vt[s&255]+vt[s>>8&255]+vt[s>>16&255]+vt[s>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[r&255]+vt[r>>8&255]+vt[r>>16&255]+vt[r>>24&255]).toLowerCase()}function xt(s,e,t){return Math.max(e,Math.min(t,s))}function al(s,e){return(s%e+e)%e}function Yr(s,e,t){return(1-t)*s+t*e}function ia(s){return(s&s-1)===0&&s!==0}function ol(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function qi(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function wt(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6],this.y=n[1]*t+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),n=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*r-a*n+e.x,this.y=i*n+a*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,r,n,i,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=n,u[2]=o,u[3]=t,u[4]=i,u[5]=c,u[6]=r,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,i=this.elements,a=r[0],o=r[3],c=r[6],l=r[1],u=r[4],h=r[7],f=r[2],d=r[5],g=r[8],v=n[0],m=n[3],p=n[6],M=n[1],_=n[4],S=n[7],E=n[2],w=n[5],R=n[8];return i[0]=a*v+o*M+c*E,i[3]=a*m+o*_+c*w,i[6]=a*p+o*S+c*R,i[1]=l*v+u*M+h*E,i[4]=l*m+u*_+h*w,i[7]=l*p+u*S+h*R,i[2]=f*v+d*M+g*E,i[5]=f*m+d*_+g*w,i[8]=f*p+d*S+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-r*i*u+r*o*c+n*i*l-n*a*c}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*i,d=l*i-a*c,g=t*h+r*f+n*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(n*l-u*r)*v,e[2]=(o*r-n*a)*v,e[3]=f*v,e[4]=(u*t-n*c)*v,e[5]=(n*i-o*t)*v,e[6]=d*v,e[7]=(r*c-l*t)*v,e[8]=(a*t-r*i)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,n,i,a,o){const c=Math.cos(i),l=Math.sin(i);return this.set(r*c,r*l,-r*(c*a+l*o)+a+e,-n*l,n*c,-n*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(jr.makeScale(e,t)),this}rotate(e){return this.premultiply(jr.makeRotation(-e)),this}translate(e,t){return this.premultiply(jr.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<9;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const jr=new Ke;function po(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function wr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const ra={};function Ri(s){s in ra||(ra[s]=!0,console.warn(s))}function si(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Jr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const ll=new Ke().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),cl=new Ke().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function ul(s){return s.convertSRGBToLinear().applyMatrix3(cl)}function hl(s){return s.applyMatrix3(ll).convertLinearToSRGB()}const fl={[Qt]:s=>s,[Xe]:s=>s.convertSRGBToLinear(),[fo]:ul},dl={[Qt]:s=>s,[Xe]:s=>s.convertLinearToSRGB(),[fo]:hl},Ot={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return Qt},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const r=fl[e],n=dl[t];if(r===void 0||n===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return n(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let On;class mo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{On===void 0&&(On=wr("canvas")),On.width=e.width,On.height=e.height;const r=On.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=On}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wr("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const n=r.getImageData(0,0,e.width,e.height),i=n.data;for(let a=0;a<i.length;a++)i[a]=si(i[a]/255)*255;return r.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(si(t[r]/255)*255):t[r]=si(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class go{constructor(e=null){this.isSource=!0,this.uuid=li(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let i;if(Array.isArray(n)){i=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?i.push(Kr(n[a].image)):i.push(Kr(n[a]))}else i=Kr(n);r.url=i}return t||(e.images[this.uuid]=r),r}}function Kr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?mo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pl=0;class bt extends Rn{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,r=1001,n=1001,i=1006,a=1008,o=1023,c=1009,l=bt.DEFAULT_ANISOTROPY,u=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pl++}),this.uuid=li(),this.name="",this.source=new go(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=i,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ri("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===3001?Xe:En),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ri("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Xe?3001:3e3}set encoding(e){Ri("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===3001?Xe:En}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=300;bt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,r=0,n=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,n){return this.x=e,this.y=t,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*n+a[12]*i,this.y=a[1]*t+a[5]*r+a[9]*n+a[13]*i,this.z=a[2]*t+a[6]*r+a[10]*n+a[14]*i,this.w=a[3]*t+a[7]*r+a[11]*n+a[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,n,i;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,S=(d+1)/2,E=(p+1)/2,w=(u+f)/4,R=(h+v)/4,F=(g+m)/4;return _>S&&_>E?_<.01?(r=0,n=.707106781,i=.707106781):(r=Math.sqrt(_),n=w/r,i=R/r):S>E?S<.01?(r=.707106781,n=0,i=.707106781):(n=Math.sqrt(S),r=w/n,i=F/n):E<.01?(r=.707106781,n=.707106781,i=0):(i=Math.sqrt(E),r=R/i,n=F/i),this.set(r,n,i,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-v)/M,this.z=(f-u)/M,this.w=Math.acos((l+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bn extends Rn{constructor(e=1,t=1,r={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const n={width:e,height:t,depth:1};r.encoding!==void 0&&(Ri("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===3001?Xe:En),this.texture=new bt(n,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.internalFormat=r.internalFormat!==void 0?r.internalFormat:null,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:1006,this.depthBuffer=r.depthBuffer!==void 0?r.depthBuffer:!0,this.stencilBuffer=r.stencilBuffer!==void 0?r.stencilBuffer:!1,this.depthTexture=r.depthTexture!==void 0?r.depthTexture:null,this.samples=r.samples!==void 0?r.samples:0}setSize(e,t,r=1){(this.width!==e||this.height!==t||this.depth!==r)&&(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new go(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vo extends bt{constructor(e=null,t=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ml extends bt{constructor(e=null,t=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oi{constructor(e=0,t=0,r=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=n}static slerpFlat(e,t,r,n,i,a,o){let c=r[n+0],l=r[n+1],u=r[n+2],h=r[n+3];const f=i[a+0],d=i[a+1],g=i[a+2],v=i[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(h!==v||c!==f||l!==d||u!==g){let m=1-o;const p=c*f+l*d+u*g+h*v,M=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const E=Math.sqrt(_),w=Math.atan2(E,p*M);m=Math.sin(m*w)/E,o=Math.sin(o*w)/E}const S=o*M;if(c=c*m+f*S,l=l*m+d*S,u=u*m+g*S,h=h*m+v*S,m===1-o){const E=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=E,l*=E,u*=E,h*=E}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,r,n,i,a){const o=r[n],c=r[n+1],l=r[n+2],u=r[n+3],h=i[a],f=i[a+1],d=i[a+2],g=i[a+3];return e[t]=o*g+u*h+c*d-l*f,e[t+1]=c*g+u*f+l*h-o*d,e[t+2]=l*g+u*d+o*f-c*h,e[t+3]=u*g-o*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,n){return this._x=e,this._y=t,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const r=e._x,n=e._y,i=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(r/2),u=o(n/2),h=o(i/2),f=c(r/2),d=c(n/2),g=c(i/2);switch(a){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],n=t[4],i=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=r+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(i-l)*d,this._z=(a-n)*d}else if(r>o&&r>h){const d=2*Math.sqrt(1+r-o-h);this._w=(u-c)/d,this._x=.25*d,this._y=(n+a)/d,this._z=(i+l)/d}else if(o>h){const d=2*Math.sqrt(1+o-r-h);this._w=(i-l)/d,this._x=(n+a)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-r-o);this._w=(a-n)/d,this._x=(i+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const n=Math.min(1,t/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,n=e._y,i=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=r*u+a*o+n*l-i*c,this._y=n*u+a*c+i*o-r*l,this._z=i*u+a*l+r*c-n*o,this._w=a*u-r*o-n*c-i*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,n=this._y,i=this._z,a=this._w;let o=a*e._w+r*e._x+n*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=r,this._y=n,this._z=i,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*r+t*this._x,this._y=d*n+t*this._y,this._z=d*i+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*h+this._w*f,this._x=r*h+this._x*f,this._y=n*h+this._y*f,this._z=i*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=Math.random(),t=Math.sqrt(1-e),r=Math.sqrt(e),n=2*Math.PI*Math.random(),i=2*Math.PI*Math.random();return this.set(t*Math.cos(n),r*Math.sin(i),r*Math.cos(i),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,t=0,r=0){J.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6]*n,this.y=i[1]*t+i[4]*r+i[7]*n,this.z=i[2]*t+i[5]*r+i[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,i=e.elements,a=1/(i[3]*t+i[7]*r+i[11]*n+i[15]);return this.x=(i[0]*t+i[4]*r+i[8]*n+i[12])*a,this.y=(i[1]*t+i[5]*r+i[9]*n+i[13])*a,this.z=(i[2]*t+i[6]*r+i[10]*n+i[14])*a,this}applyQuaternion(e){const t=this.x,r=this.y,n=this.z,i=e.x,a=e.y,o=e.z,c=e.w,l=c*t+a*n-o*r,u=c*r+o*t-i*n,h=c*n+i*r-a*t,f=-i*t-a*r-o*n;return this.x=l*c+f*-i+u*-o-h*-a,this.y=u*c+f*-a+h*-i-l*-o,this.z=h*c+f*-o+l*-a-u*-i,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[4]*r+i[8]*n,this.y=i[1]*t+i[5]*r+i[9]*n,this.z=i[2]*t+i[6]*r+i[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,n=e.y,i=e.z,a=t.x,o=t.y,c=t.z;return this.x=n*c-i*o,this.y=i*a-r*c,this.z=r*o-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Zr.copy(this).projectOnVector(e),this.sub(Zr)}reflect(e){return this.sub(Zr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return t*t+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const n=Math.sin(t)*e;return this.x=n*Math.sin(r),this.y=Math.cos(t)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(t),this.y=r*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zr=new J,sa=new Oi;class Cn{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Bn.copy(e.boundingBox),Bn.applyMatrix4(e.matrixWorld),this.union(Bn);else{const n=e.geometry;if(n!==void 0)if(t&&n.attributes!==void 0&&n.attributes.position!==void 0){const i=n.attributes.position;for(let a=0,o=i.count;a<o;a++)tn.fromBufferAttribute(i,a).applyMatrix4(e.matrixWorld),this.expandByPoint(tn)}else n.boundingBox===null&&n.computeBoundingBox(),Bn.copy(n.boundingBox),Bn.applyMatrix4(e.matrixWorld),this.union(Bn)}const r=e.children;for(let n=0,i=r.length;n<i;n++)this.expandByObject(r[n],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,tn),tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yi),Yi.subVectors(this.max,yi),Gn.subVectors(e.a,yi),kn.subVectors(e.b,yi),zn.subVectors(e.c,yi),hn.subVectors(kn,Gn),fn.subVectors(zn,kn),gn.subVectors(Gn,zn);let t=[0,-hn.z,hn.y,0,-fn.z,fn.y,0,-gn.z,gn.y,hn.z,0,-hn.x,fn.z,0,-fn.x,gn.z,0,-gn.x,-hn.y,hn.x,0,-fn.y,fn.x,0,-gn.y,gn.x,0];return!Qr(t,Gn,kn,zn,Yi)||(t=[1,0,0,0,1,0,0,0,1],!Qr(t,Gn,kn,zn,Yi))?!1:(ji.crossVectors(hn,fn),t=[ji.x,ji.y,ji.z],Qr(t,Gn,kn,zn,Yi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(en[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),en[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),en[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),en[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),en[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),en[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),en[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),en[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(en),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const en=[new J,new J,new J,new J,new J,new J,new J,new J],tn=new J,Bn=new Cn,Gn=new J,kn=new J,zn=new J,hn=new J,fn=new J,gn=new J,yi=new J,Yi=new J,ji=new J,vn=new J;function Qr(s,e,t,r,n){for(let i=0,a=s.length-3;i<=a;i+=3){vn.fromArray(s,i);const o=n.x*Math.abs(vn.x)+n.y*Math.abs(vn.y)+n.z*Math.abs(vn.z),c=e.dot(vn),l=t.dot(vn),u=r.dot(vn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const gl=new Cn,Ei=new J,$r=new J;class ci{constructor(e=new J,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):gl.setFromPoints(e).getCenter(r);let n=0;for(let i=0,a=e.length;i<a;i++)n=Math.max(n,r.distanceToSquared(e[i]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ei.subVectors(e,this.center);const t=Ei.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),n=(r-this.radius)*.5;this.center.addScaledVector(Ei,n/r),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($r.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ei.copy(e.center).add($r)),this.expandByPoint(Ei.copy(e.center).sub($r))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const nn=new J,es=new J,Ji=new J,dn=new J,ts=new J,Ki=new J,ns=new J;class Fs{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nn.copy(this.origin).addScaledVector(this.direction,t),nn.distanceToSquared(e))}distanceSqToSegment(e,t,r,n){es.copy(e).add(t).multiplyScalar(.5),Ji.copy(t).sub(e).normalize(),dn.copy(this.origin).sub(es);const i=e.distanceTo(t)*.5,a=-this.direction.dot(Ji),o=dn.dot(this.direction),c=-dn.dot(Ji),l=dn.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*c-o,f=a*o-c,g=i*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,d=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=i,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f=-i,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-a*i+o)),f=h>0?-i:Math.min(Math.max(-i,-c),i),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-i,-c),i),d=f*(f+2*c)+l):(h=Math.max(0,-(a*i+o)),f=h>0?i:Math.min(Math.max(-i,-c),i),d=-h*h+f*(f+2*c)+l);else f=a>0?-i:i,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;return r&&r.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(es).addScaledVector(Ji,f),d}intersectSphere(e,t){nn.subVectors(e.center,this.origin);const r=nn.dot(this.direction),n=nn.dot(nn)-r*r,i=e.radius*e.radius;if(n>i)return null;const a=Math.sqrt(i-n),o=r-a,c=r+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,n,i,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(r=(e.min.x-f.x)*l,n=(e.max.x-f.x)*l):(r=(e.max.x-f.x)*l,n=(e.min.x-f.x)*l),u>=0?(i=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(i=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),r>a||i>n||((i>r||isNaN(r))&&(r=i),(a<n||isNaN(n))&&(n=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),r>c||o>n)||((o>r||r!==r)&&(r=o),(c<n||n!==n)&&(n=c),n<0)?null:this.at(r>=0?r:n,t)}intersectsBox(e){return this.intersectBox(e,nn)!==null}intersectTriangle(e,t,r,n,i){ts.subVectors(t,e),Ki.subVectors(r,e),ns.crossVectors(ts,Ki);let a=this.direction.dot(ns),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;dn.subVectors(this.origin,e);const c=o*this.direction.dot(Ki.crossVectors(dn,Ki));if(c<0)return null;const l=o*this.direction.dot(ts.cross(dn));if(l<0||c+l>a)return null;const u=-o*dn.dot(ns);return u<0?null:this.at(u/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,r,n,i,a,o,c,l,u,h,f,d,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=r,p[12]=n,p[1]=i,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,n=1/Hn.setFromMatrixColumn(e,0).length(),i=1/Hn.setFromMatrixColumn(e,1).length(),a=1/Hn.setFromMatrixColumn(e,2).length();return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=0,t[4]=r[4]*i,t[5]=r[5]*i,t[6]=r[6]*i,t[7]=0,t[8]=r[8]*a,t[9]=r[9]*a,t[10]=r[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,n=e.y,i=e.z,a=Math.cos(r),o=Math.sin(r),c=Math.cos(n),l=Math.sin(n),u=Math.cos(i),h=Math.sin(i);if(e.order==="XYZ"){const f=a*u,d=a*h,g=o*u,v=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+g*l,t[5]=f-v*l,t[9]=-o*c,t[2]=v-f*l,t[6]=g+d*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,g=l*u,v=l*h;t[0]=f+v*o,t[4]=g*o-d,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=v+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,g=l*u,v=l*h;t[0]=f-v*o,t[4]=-a*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,d=a*h,g=o*u,v=o*h;t[0]=c*u,t[4]=g*l-d,t[8]=f*l+v,t[1]=c*h,t[5]=v*l+f,t[9]=d*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,d=a*l,g=o*c,v=o*l;t[0]=c*u,t[4]=v-f*h,t[8]=g*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=d*h+g,t[10]=f-v*h}else if(e.order==="XZY"){const f=a*c,d=a*l,g=o*c,v=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+v,t[5]=a*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vl,e,_l)}lookAt(e,t,r){const n=this.elements;return Rt.subVectors(e,t),Rt.lengthSq()===0&&(Rt.z=1),Rt.normalize(),pn.crossVectors(r,Rt),pn.lengthSq()===0&&(Math.abs(r.z)===1?Rt.x+=1e-4:Rt.z+=1e-4,Rt.normalize(),pn.crossVectors(r,Rt)),pn.normalize(),Zi.crossVectors(Rt,pn),n[0]=pn.x,n[4]=Zi.x,n[8]=Rt.x,n[1]=pn.y,n[5]=Zi.y,n[9]=Rt.y,n[2]=pn.z,n[6]=Zi.z,n[10]=Rt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,i=this.elements,a=r[0],o=r[4],c=r[8],l=r[12],u=r[1],h=r[5],f=r[9],d=r[13],g=r[2],v=r[6],m=r[10],p=r[14],M=r[3],_=r[7],S=r[11],E=r[15],w=n[0],R=n[4],F=n[8],x=n[12],A=n[1],j=n[5],B=n[9],D=n[13],I=n[2],L=n[6],V=n[10],K=n[14],Q=n[3],q=n[7],X=n[11],O=n[15];return i[0]=a*w+o*A+c*I+l*Q,i[4]=a*R+o*j+c*L+l*q,i[8]=a*F+o*B+c*V+l*X,i[12]=a*x+o*D+c*K+l*O,i[1]=u*w+h*A+f*I+d*Q,i[5]=u*R+h*j+f*L+d*q,i[9]=u*F+h*B+f*V+d*X,i[13]=u*x+h*D+f*K+d*O,i[2]=g*w+v*A+m*I+p*Q,i[6]=g*R+v*j+m*L+p*q,i[10]=g*F+v*B+m*V+p*X,i[14]=g*x+v*D+m*K+p*O,i[3]=M*w+_*A+S*I+E*Q,i[7]=M*R+_*j+S*L+E*q,i[11]=M*F+_*B+S*V+E*X,i[15]=M*x+_*D+S*K+E*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],n=e[8],i=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+i*c*h-n*l*h-i*o*f+r*l*f+n*o*d-r*c*d)+v*(+t*c*d-t*l*f+i*a*f-n*a*d+n*l*u-i*c*u)+m*(+t*l*h-t*o*d-i*a*h+r*a*d+i*o*u-r*l*u)+p*(-n*o*u-t*c*h+t*o*f+n*a*h-r*a*f+r*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],M=h*m*l-v*f*l+v*c*d-o*m*d-h*c*p+o*f*p,_=g*f*l-u*m*l-g*c*d+a*m*d+u*c*p-a*f*p,S=u*v*l-g*h*l+g*o*d-a*v*d-u*o*p+a*h*p,E=g*h*c-u*v*c-g*o*f+a*v*f+u*o*m-a*h*m,w=t*M+r*_+n*S+i*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=M*R,e[1]=(v*f*i-h*m*i-v*n*d+r*m*d+h*n*p-r*f*p)*R,e[2]=(o*m*i-v*c*i+v*n*l-r*m*l-o*n*p+r*c*p)*R,e[3]=(h*c*i-o*f*i-h*n*l+r*f*l+o*n*d-r*c*d)*R,e[4]=_*R,e[5]=(u*m*i-g*f*i+g*n*d-t*m*d-u*n*p+t*f*p)*R,e[6]=(g*c*i-a*m*i-g*n*l+t*m*l+a*n*p-t*c*p)*R,e[7]=(a*f*i-u*c*i+u*n*l-t*f*l-a*n*d+t*c*d)*R,e[8]=S*R,e[9]=(g*h*i-u*v*i-g*r*d+t*v*d+u*r*p-t*h*p)*R,e[10]=(a*v*i-g*o*i+g*r*l-t*v*l-a*r*p+t*o*p)*R,e[11]=(u*o*i-a*h*i-u*r*l+t*h*l+a*r*d-t*o*d)*R,e[12]=E*R,e[13]=(u*v*n-g*h*n+g*r*f-t*v*f-u*r*m+t*h*m)*R,e[14]=(g*o*n-a*v*n-g*r*c+t*v*c+a*r*m-t*o*m)*R,e[15]=(a*h*n-u*o*n+u*r*c-t*h*c-a*r*f+t*o*f)*R,this}scale(e){const t=this.elements,r=e.x,n=e.y,i=e.z;return t[0]*=r,t[4]*=n,t[8]*=i,t[1]*=r,t[5]*=n,t[9]*=i,t[2]*=r,t[6]*=n,t[10]*=i,t[3]*=r,t[7]*=n,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,n))}makeTranslation(e,t,r){return this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),n=Math.sin(t),i=1-r,a=e.x,o=e.y,c=e.z,l=i*a,u=i*o;return this.set(l*a+r,l*o-n*c,l*c+n*o,0,l*o+n*c,u*o+r,u*c-n*a,0,l*c-n*o,u*c+n*a,i*c*c+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,n,i,a){return this.set(1,r,i,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,r){const n=this.elements,i=t._x,a=t._y,o=t._z,c=t._w,l=i+i,u=a+a,h=o+o,f=i*l,d=i*u,g=i*h,v=a*u,m=a*h,p=o*h,M=c*l,_=c*u,S=c*h,E=r.x,w=r.y,R=r.z;return n[0]=(1-(v+p))*E,n[1]=(d+S)*E,n[2]=(g-_)*E,n[3]=0,n[4]=(d-S)*w,n[5]=(1-(f+p))*w,n[6]=(m+M)*w,n[7]=0,n[8]=(g+_)*R,n[9]=(m-M)*R,n[10]=(1-(f+v))*R,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,r){const n=this.elements;let i=Hn.set(n[0],n[1],n[2]).length();const a=Hn.set(n[4],n[5],n[6]).length(),o=Hn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(i=-i),e.x=n[12],e.y=n[13],e.z=n[14],Bt.copy(this);const l=1/i,u=1/a,h=1/o;return Bt.elements[0]*=l,Bt.elements[1]*=l,Bt.elements[2]*=l,Bt.elements[4]*=u,Bt.elements[5]*=u,Bt.elements[6]*=u,Bt.elements[8]*=h,Bt.elements[9]*=h,Bt.elements[10]*=h,t.setFromRotationMatrix(Bt),r.x=i,r.y=a,r.z=o,this}makePerspective(e,t,r,n,i,a){const o=this.elements,c=2*i/(t-e),l=2*i/(r-n),u=(t+e)/(t-e),h=(r+n)/(r-n),f=-(a+i)/(a-i),d=-2*a*i/(a-i);return o[0]=c,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=l,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=d,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,r,n,i,a){const o=this.elements,c=1/(t-e),l=1/(r-n),u=1/(a-i),h=(t+e)*c,f=(r+n)*l,d=(a+i)*u;return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-d,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<16;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Hn=new J,Bt=new st,vl=new J(0,0,0),_l=new J(1,1,1),pn=new J,Zi=new J,Rt=new J,aa=new st,oa=new Oi;class Rr{constructor(e=0,t=0,r=0,n=Rr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,n=this._order){return this._x=e,this._y=t,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const n=e.elements,i=n[0],a=n[4],o=n[8],c=n[1],l=n[5],u=n[9],h=n[2],f=n[6],d=n[10];switch(t){case"XYZ":this._y=Math.asin(xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,i),this._z=0);break;case"ZXY":this._x=Math.asin(xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,i));break;case"ZYX":this._y=Math.asin(-xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,i)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,i)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return aa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(aa,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return oa.setFromEuler(this),this.setFromQuaternion(oa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rr.DEFAULT_ORDER="XYZ";class _o{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xl=0;const la=new J,Vn=new Oi,rn=new st,Qi=new J,Ti=new J,Sl=new J,Ml=new Oi,ca=new J(1,0,0),ua=new J(0,1,0),ha=new J(0,0,1),yl={type:"added"},fa={type:"removed"};class pt extends Rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xl++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new J,t=new Rr,r=new Oi,n=new J(1,1,1);function i(){r.setFromEuler(t,!1)}function a(){t.setFromQuaternion(r,void 0,!1)}t._onChange(i),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new st},normalMatrix:{value:new Ke}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new _o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vn.setFromAxisAngle(e,t),this.quaternion.multiply(Vn),this}rotateOnWorldAxis(e,t){return Vn.setFromAxisAngle(e,t),this.quaternion.premultiply(Vn),this}rotateX(e){return this.rotateOnAxis(ca,e)}rotateY(e){return this.rotateOnAxis(ua,e)}rotateZ(e){return this.rotateOnAxis(ha,e)}translateOnAxis(e,t){return la.copy(e).applyQuaternion(this.quaternion),this.position.add(la.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ca,e)}translateY(e){return this.translateOnAxis(ua,e)}translateZ(e){return this.translateOnAxis(ha,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Qi.copy(e):Qi.set(e,t,r);const n=this.parent;this.updateWorldMatrix(!0,!1),Ti.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(Ti,Qi,this.up):rn.lookAt(Qi,Ti,this.up),this.quaternion.setFromRotationMatrix(rn),n&&(rn.extractRotation(n.matrixWorld),Vn.setFromRotationMatrix(rn),this.quaternion.premultiply(Vn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(yl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fa)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(fa)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(rn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,n=this.children.length;r<n;r++){const a=this.children[r].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let r=[];this[e]===t&&r.push(this);for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectsByProperty(e,t);a.length>0&&(r=r.concat(a))}return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,e,Sl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,Ml,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,n=t.length;r<n;r++){const i=t[r];(i.matrixWorldAutoUpdate===!0||e===!0)&&i.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let i=0,a=n.length;i<a;i++){const o=n[i];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function i(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=i(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];i(e.shapes,h)}else i(e.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(i(e.materials,this.material[c]));n.material=o}else n.material=i(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];n.animations.push(i(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(r.geometries=o),c.length>0&&(r.materials=c),l.length>0&&(r.textures=l),u.length>0&&(r.images=u),h.length>0&&(r.shapes=h),f.length>0&&(r.skeletons=f),d.length>0&&(r.animations=d),g.length>0&&(r.nodes=g)}return r.object=n,r;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const n=e.children[r];this.add(n.clone())}return this}}pt.DEFAULT_UP=new J(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gt=new J,sn=new J,is=new J,an=new J,Wn=new J,Xn=new J,da=new J,rs=new J,ss=new J,as=new J;let $i=!1;class zt{constructor(e=new J,t=new J,r=new J){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,n){n.subVectors(r,t),Gt.subVectors(e,t),n.cross(Gt);const i=n.lengthSq();return i>0?n.multiplyScalar(1/Math.sqrt(i)):n.set(0,0,0)}static getBarycoord(e,t,r,n,i){Gt.subVectors(n,t),sn.subVectors(r,t),is.subVectors(e,t);const a=Gt.dot(Gt),o=Gt.dot(sn),c=Gt.dot(is),l=sn.dot(sn),u=sn.dot(is),h=a*l-o*o;if(h===0)return i.set(-2,-1,-1);const f=1/h,d=(l*c-o*u)*f,g=(a*u-o*c)*f;return i.set(1-d-g,g,d)}static containsPoint(e,t,r,n){return this.getBarycoord(e,t,r,n,an),an.x>=0&&an.y>=0&&an.x+an.y<=1}static getUV(e,t,r,n,i,a,o,c){return $i===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$i=!0),this.getInterpolation(e,t,r,n,i,a,o,c)}static getInterpolation(e,t,r,n,i,a,o,c){return this.getBarycoord(e,t,r,n,an),c.setScalar(0),c.addScaledVector(i,an.x),c.addScaledVector(a,an.y),c.addScaledVector(o,an.z),c}static isFrontFacing(e,t,r,n){return Gt.subVectors(r,t),sn.subVectors(e,t),Gt.cross(sn).dot(n)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,n){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,r,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),sn.subVectors(this.a,this.b),Gt.cross(sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,r,n,i){return $i===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$i=!0),zt.getInterpolation(e,this.a,this.b,this.c,t,r,n,i)}getInterpolation(e,t,r,n,i){return zt.getInterpolation(e,this.a,this.b,this.c,t,r,n,i)}containsPoint(e){return zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,n=this.b,i=this.c;let a,o;Wn.subVectors(n,r),Xn.subVectors(i,r),rs.subVectors(e,r);const c=Wn.dot(rs),l=Xn.dot(rs);if(c<=0&&l<=0)return t.copy(r);ss.subVectors(e,n);const u=Wn.dot(ss),h=Xn.dot(ss);if(u>=0&&h<=u)return t.copy(n);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(r).addScaledVector(Wn,a);as.subVectors(e,i);const d=Wn.dot(as),g=Xn.dot(as);if(g>=0&&d<=g)return t.copy(i);const v=d*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(r).addScaledVector(Xn,o);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return da.subVectors(i,n),o=(h-u)/(h-u+(d-g)),t.copy(n).addScaledVector(da,o);const p=1/(m+v+f);return a=v*p,o=f*p,t.copy(r).addScaledVector(Wn,a).addScaledVector(Xn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let El=0;class ui extends Rn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:El++}),this.uuid=li(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(r.blending=this.blending),this.side!==0&&(r.side=this.side),this.vertexColors&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=this.transparent),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.stencilWrite=this.stencilWrite,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(r.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(r.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(r.wireframe=this.wireframe),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=this.flatShading),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function n(i){const a=[];for(const o in i){const c=i[o];delete c.metadata,a.push(c)}return a}if(t){const i=n(e.textures),a=n(e.images);i.length>0&&(r.textures=i),a.length>0&&(r.images=a)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const n=t.length;r=new Array(n);for(let i=0;i!==n;++i)r[i]=t[i].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const xo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kt={h:0,s:0,l:0},er={h:0,s:0,l:0};function os(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Qe{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&r===void 0?this.set(e):this.setRGB(e,t,r)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ot.toWorkingColorSpace(this,t),this}setRGB(e,t,r,n=Ot.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ot.toWorkingColorSpace(this,n),this}setHSL(e,t,r,n=Ot.workingColorSpace){if(e=al(e,1),t=xt(t,0,1),r=xt(r,0,1),t===0)this.r=this.g=this.b=r;else{const i=r<=.5?r*(1+t):r+t-r*t,a=2*r-i;this.r=os(a,i,e+1/3),this.g=os(a,i,e),this.b=os(a,i,e-1/3)}return Ot.toWorkingColorSpace(this,n),this}setStyle(e,t=Xe){function r(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let i;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],a=i.length;if(a===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(i,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xe){const r=xo[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=Jr(e.r),this.g=Jr(e.g),this.b=Jr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xe){return Ot.fromWorkingColorSpace(_t.copy(this),e),Math.round(xt(_t.r*255,0,255))*65536+Math.round(xt(_t.g*255,0,255))*256+Math.round(xt(_t.b*255,0,255))}getHexString(e=Xe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ot.workingColorSpace){Ot.fromWorkingColorSpace(_t.copy(this),t);const r=_t.r,n=_t.g,i=_t.b,a=Math.max(r,n,i),o=Math.min(r,n,i);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case r:c=(n-i)/h+(n<i?6:0);break;case n:c=(i-r)/h+2;break;case i:c=(r-n)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ot.workingColorSpace){return Ot.fromWorkingColorSpace(_t.copy(this),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=Xe){Ot.fromWorkingColorSpace(_t.copy(this),e);const t=_t.r,r=_t.g,n=_t.b;return e!==Xe?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(n*255)})`}offsetHSL(e,t,r){return this.getHSL(kt),kt.h+=e,kt.s+=t,kt.l+=r,this.setHSL(kt.h,kt.s,kt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(kt),e.getHSL(er);const r=Yr(kt.h,er.h,t),n=Yr(kt.s,er.s,t),i=Yr(kt.l,er.l,t);return this.setHSL(r,n,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,n=this.b,i=e.elements;return this.r=i[0]*t+i[3]*r+i[6]*n,this.g=i[1]*t+i[4]*r+i[7]*n,this.b=i[2]*t+i[5]*r+i[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _t=new Qe;Qe.NAMES=xo;class Di extends ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const at=new J,tr=new be;class Vt{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let n=0,i=this.itemSize;n<i;n++)this.array[e+n]=t.array[r+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)tr.fromBufferAttribute(this,t),tr.applyMatrix3(e),this.setXY(t,tr.x,tr.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qi(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qi(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qi(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),r=wt(r,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,t,r,n,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),r=wt(r,this.array),n=wt(n,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class So extends Vt{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Mo extends Vt{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Dt extends Vt{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Tl=0;const Ut=new st,ls=new pt,qn=new J,Ct=new Cn,bi=new Cn,ft=new J;class dt extends Rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tl++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(po(e)?Mo:So)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const i=new Ke().getNormalMatrix(e);r.applyNormalMatrix(i),r.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ut.makeRotationFromQuaternion(e),this.applyMatrix4(Ut),this}rotateX(e){return Ut.makeRotationX(e),this.applyMatrix4(Ut),this}rotateY(e){return Ut.makeRotationY(e),this.applyMatrix4(Ut),this}rotateZ(e){return Ut.makeRotationZ(e),this.applyMatrix4(Ut),this}translate(e,t,r){return Ut.makeTranslation(e,t,r),this.applyMatrix4(Ut),this}scale(e,t,r){return Ut.makeScale(e,t,r),this.applyMatrix4(Ut),this}lookAt(e){return ls.lookAt(e),ls.updateMatrix(),this.applyMatrix4(ls.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qn).negate(),this.translate(qn.x,qn.y,qn.z),this}setFromPoints(e){const t=[];for(let r=0,n=e.length;r<n;r++){const i=e[r];t.push(i.x,i.y,i.z||0)}return this.setAttribute("position",new Dt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,n=t.length;r<n;r++){const i=t[r];Ct.setFromBufferAttribute(i),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Ct.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Ct.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Ct.min),this.boundingBox.expandByPoint(Ct.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new J,1/0);return}if(e){const r=this.boundingSphere.center;if(Ct.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const o=t[i];bi.setFromBufferAttribute(o),this.morphTargetsRelative?(ft.addVectors(Ct.min,bi.min),Ct.expandByPoint(ft),ft.addVectors(Ct.max,bi.max),Ct.expandByPoint(ft)):(Ct.expandByPoint(bi.min),Ct.expandByPoint(bi.max))}Ct.getCenter(r);let n=0;for(let i=0,a=e.count;i<a;i++)ft.fromBufferAttribute(e,i),n=Math.max(n,r.distanceToSquared(ft));if(t)for(let i=0,a=t.length;i<a;i++){const o=t[i],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)ft.fromBufferAttribute(o,l),c&&(qn.fromBufferAttribute(e,l),ft.add(qn)),n=Math.max(n,r.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,n=t.position.array,i=t.normal.array,a=t.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let A=0;A<o;A++)l[A]=new J,u[A]=new J;const h=new J,f=new J,d=new J,g=new be,v=new be,m=new be,p=new J,M=new J;function _(A,j,B){h.fromArray(n,A*3),f.fromArray(n,j*3),d.fromArray(n,B*3),g.fromArray(a,A*2),v.fromArray(a,j*2),m.fromArray(a,B*2),f.sub(h),d.sub(h),v.sub(g),m.sub(g);const D=1/(v.x*m.y-m.x*v.y);isFinite(D)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-v.y).multiplyScalar(D),M.copy(d).multiplyScalar(v.x).addScaledVector(f,-m.x).multiplyScalar(D),l[A].add(p),l[j].add(p),l[B].add(p),u[A].add(M),u[j].add(M),u[B].add(M))}let S=this.groups;S.length===0&&(S=[{start:0,count:r.length}]);for(let A=0,j=S.length;A<j;++A){const B=S[A],D=B.start,I=B.count;for(let L=D,V=D+I;L<V;L+=3)_(r[L+0],r[L+1],r[L+2])}const E=new J,w=new J,R=new J,F=new J;function x(A){R.fromArray(i,A*3),F.copy(R);const j=l[A];E.copy(j),E.sub(R.multiplyScalar(R.dot(j))).normalize(),w.crossVectors(F,j);const D=w.dot(u[A])<0?-1:1;c[A*4]=E.x,c[A*4+1]=E.y,c[A*4+2]=E.z,c[A*4+3]=D}for(let A=0,j=S.length;A<j;++A){const B=S[A],D=B.start,I=B.count;for(let L=D,V=D+I;L<V;L+=3)x(r[L+0]),x(r[L+1]),x(r[L+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let f=0,d=r.count;f<d;f++)r.setXYZ(f,0,0,0);const n=new J,i=new J,a=new J,o=new J,c=new J,l=new J,u=new J,h=new J;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);n.fromBufferAttribute(t,g),i.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,i),h.subVectors(n,i),u.cross(h),o.fromBufferAttribute(r,g),c.fromBufferAttribute(r,v),l.fromBufferAttribute(r,m),o.add(u),c.add(u),l.add(u),r.setXYZ(g,o.x,o.y,o.z),r.setXYZ(v,c.x,c.y,c.z),r.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)n.fromBufferAttribute(t,f+0),i.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,i),h.subVectors(n,i),u.cross(h),r.setXYZ(f+0,u.x,u.y,u.z),r.setXYZ(f+1,u.x,u.y,u.z),r.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let d=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?d=c[v]*o.data.stride+o.offset:d=c[v]*u;for(let p=0;p<u;p++)f[g++]=l[d++]}return new Vt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dt,r=this.index.array,n=this.attributes;for(const o in n){const c=n[o],l=e(c,r);t.setAttribute(o,l)}const i=this.morphAttributes;for(const o in i){const c=[],l=i[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,r);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const c in r){const l=r[c];e.data.attributes[c]=l.toJSON(e.data)}const n={};let i=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(n[c]=u,i=!0)}i&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const n=e.attributes;for(const l in n){const u=n[l];this.setAttribute(l,u.clone(t))}const i=e.morphAttributes;for(const l in i){const u=[],h=i[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pa=new st,Kt=new Fs,nr=new ci,ma=new J,Yn=new J,jn=new J,Jn=new J,cs=new J,ir=new J,rr=new be,sr=new be,ar=new be,ga=new J,va=new J,_a=new J,or=new J,lr=new J;class Lt extends pt{constructor(e=new dt,t=new Di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=n.length;i<a;i++){const o=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}getVertexPosition(e,t){const r=this.geometry,n=r.attributes.position,i=r.morphAttributes.position,a=r.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(i&&o){ir.set(0,0,0);for(let c=0,l=i.length;c<l;c++){const u=o[c],h=i[c];u!==0&&(cs.fromBufferAttribute(h,e),a?ir.addScaledVector(cs,u):ir.addScaledVector(cs.sub(t),u))}t.add(ir)}return t}raycast(e,t){const r=this.geometry,n=this.material,i=this.matrixWorld;n!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),nr.copy(r.boundingSphere),nr.applyMatrix4(i),Kt.copy(e.ray).recast(e.near),!(nr.containsPoint(Kt.origin)===!1&&(Kt.intersectSphere(nr,ma)===null||Kt.origin.distanceToSquared(ma)>(e.far-e.near)**2))&&(pa.copy(i).invert(),Kt.copy(e.ray).applyMatrix4(pa),!(r.boundingBox!==null&&Kt.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let r;const n=this.geometry,i=this.material,a=n.index,o=n.attributes.position,c=n.attributes.uv,l=n.attributes.uv1,u=n.attributes.normal,h=n.groups,f=n.drawRange;if(a!==null)if(Array.isArray(i))for(let d=0,g=h.length;d<g;d++){const v=h[d],m=i[v.materialIndex],p=Math.max(v.start,f.start),M=Math.min(a.count,Math.min(v.start+v.count,f.start+f.count));for(let _=p,S=M;_<S;_+=3){const E=a.getX(_),w=a.getX(_+1),R=a.getX(_+2);r=cr(this,m,e,Kt,c,l,u,E,w,R),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const d=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let v=d,m=g;v<m;v+=3){const p=a.getX(v),M=a.getX(v+1),_=a.getX(v+2);r=cr(this,i,e,Kt,c,l,u,p,M,_),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(i))for(let d=0,g=h.length;d<g;d++){const v=h[d],m=i[v.materialIndex],p=Math.max(v.start,f.start),M=Math.min(o.count,Math.min(v.start+v.count,f.start+f.count));for(let _=p,S=M;_<S;_+=3){const E=_,w=_+1,R=_+2;r=cr(this,m,e,Kt,c,l,u,E,w,R),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const d=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let v=d,m=g;v<m;v+=3){const p=v,M=v+1,_=v+2;r=cr(this,i,e,Kt,c,l,u,p,M,_),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}}function bl(s,e,t,r,n,i,a,o){let c;if(e.side===1?c=r.intersectTriangle(a,i,n,!0,o):c=r.intersectTriangle(n,i,a,e.side===0,o),c===null)return null;lr.copy(o),lr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(lr);return l<t.near||l>t.far?null:{distance:l,point:lr.clone(),object:s}}function cr(s,e,t,r,n,i,a,o,c,l){s.getVertexPosition(o,Yn),s.getVertexPosition(c,jn),s.getVertexPosition(l,Jn);const u=bl(s,e,t,r,Yn,jn,Jn,or);if(u){n&&(rr.fromBufferAttribute(n,o),sr.fromBufferAttribute(n,c),ar.fromBufferAttribute(n,l),u.uv=zt.getInterpolation(or,Yn,jn,Jn,rr,sr,ar,new be)),i&&(rr.fromBufferAttribute(i,o),sr.fromBufferAttribute(i,c),ar.fromBufferAttribute(i,l),u.uv1=zt.getInterpolation(or,Yn,jn,Jn,rr,sr,ar,new be),u.uv2=u.uv1),a&&(ga.fromBufferAttribute(a,o),va.fromBufferAttribute(a,c),_a.fromBufferAttribute(a,l),u.normal=zt.getInterpolation(or,Yn,jn,Jn,ga,va,_a,new J),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new J,materialIndex:0};zt.getNormal(Yn,jn,Jn,h.normal),u.face=h}return u}class Bi extends dt{constructor(e=1,t=1,r=1,n=1,i=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:n,heightSegments:i,depthSegments:a};const o=this;n=Math.floor(n),i=Math.floor(i),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,r,t,e,a,i,0),g("z","y","x",1,-1,r,t,-e,a,i,1),g("x","z","y",1,1,e,r,t,n,a,2),g("x","z","y",1,-1,e,r,-t,n,a,3),g("x","y","z",1,-1,e,t,r,n,i,4),g("x","y","z",-1,-1,e,t,-r,n,i,5),this.setIndex(c),this.setAttribute("position",new Dt(l,3)),this.setAttribute("normal",new Dt(u,3)),this.setAttribute("uv",new Dt(h,2));function g(v,m,p,M,_,S,E,w,R,F,x){const A=S/R,j=E/F,B=S/2,D=E/2,I=w/2,L=R+1,V=F+1;let K=0,Q=0;const q=new J;for(let X=0;X<V;X++){const O=X*j-D;for(let z=0;z<L;z++){const G=z*A-B;q[v]=G*M,q[m]=O*_,q[p]=I,l.push(q.x,q.y,q.z),q[v]=0,q[m]=0,q[p]=w>0?1:-1,u.push(q.x,q.y,q.z),h.push(z/R),h.push(1-X/F),K+=1}}for(let X=0;X<F;X++)for(let O=0;O<R;O++){const z=f+O+L*X,G=f+O+L*(X+1),b=f+(O+1)+L*(X+1),P=f+(O+1)+L*X;c.push(z,G,P),c.push(G,b,P),Q+=6}o.addGroup(d,Q,x),d+=Q,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function oi(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const n=s[t][r];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=n.clone():Array.isArray(n)?e[t][r]=n.slice():e[t][r]=n}}return e}function Mt(s){const e={};for(let t=0;t<s.length;t++){const r=oi(s[t]);for(const n in r)e[n]=r[n]}return e}function Al(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function yo(s){return s.getRenderTarget()===null?s.outputColorSpace:Qt}const Is={clone:oi,merge:Mt};var wl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wl,this.fragmentShader=Rl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oi(e.uniforms),this.uniformsGroups=Al(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Eo extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ht extends Eo{constructor(e=50,t=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Es*2*Math.atan(Math.tan(qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,r,n,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qr*.5*this.fov)/this.zoom,r=2*t,n=this.aspect*r,i=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;i+=a.offsetX*n/c,t-=a.offsetY*r/l,n*=a.width/c,r*=a.height/l}const o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+n,t,t-r,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Kn=-90,Zn=1;class Cl extends pt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r;const n=new Ht(Kn,Zn,e,t);n.layers=this.layers,n.up.set(0,1,0),n.lookAt(1,0,0),this.add(n);const i=new Ht(Kn,Zn,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(-1,0,0),this.add(i);const a=new Ht(Kn,Zn,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new Ht(Kn,Zn,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const c=new Ht(Kn,Zn,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new Ht(Kn,Zn,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const r=this.renderTarget,[n,i,a,o,c,l]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=0,e.xr.enabled=!1;const d=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0),e.render(t,n),e.setRenderTarget(r,1),e.render(t,i),e.setRenderTarget(r,2),e.render(t,a),e.setRenderTarget(r,3),e.render(t,o),e.setRenderTarget(r,4),e.render(t,c),r.texture.generateMipmaps=d,e.setRenderTarget(r,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,r.texture.needsPMREMUpdate=!0}}class To extends bt{constructor(e,t,r,n,i,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:301,super(e,t,r,n,i,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ll extends bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},n=[r,r,r,r,r,r];t.encoding!==void 0&&(Ri("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===3001?Xe:En),this.texture=new To(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Bi(5,5,5),i=new An({name:"CubemapFromEquirect",uniforms:oi(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;const a=new Lt(n,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new Cl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,r,n){const i=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,r,n);e.setRenderTarget(i)}}const us=new J,Pl=new J,Ul=new Ke;class Sn{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,n){return this.normal.set(e,t,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const n=us.subVectors(r,t).cross(Pl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(us),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/n;return i<0||i>1?null:t.copy(e.start).addScaledVector(r,i)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Ul.getNormalMatrix(e),n=this.coplanarPoint(us).applyMatrix4(e),i=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _n=new ci,ur=new J;class bo{constructor(e=new Sn,t=new Sn,r=new Sn,n=new Sn,i=new Sn,a=new Sn){this.planes=[e,t,r,n,i,a]}set(e,t,r,n,i,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(n),o[4].copy(i),o[5].copy(a),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e){const t=this.planes,r=e.elements,n=r[0],i=r[1],a=r[2],o=r[3],c=r[4],l=r[5],u=r[6],h=r[7],f=r[8],d=r[9],g=r[10],v=r[11],m=r[12],p=r[13],M=r[14],_=r[15];return t[0].setComponents(o-n,h-c,v-f,_-m).normalize(),t[1].setComponents(o+n,h+c,v+f,_+m).normalize(),t[2].setComponents(o+i,h+l,v+d,_+p).normalize(),t[3].setComponents(o-i,h-l,v-d,_-p).normalize(),t[4].setComponents(o-a,h-u,v-g,_-M).normalize(),t[5].setComponents(o+a,h+u,v+g,_+M).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_n.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_n)}intersectsSprite(e){return _n.center.set(0,0,0),_n.radius=.7071067811865476,_n.applyMatrix4(e.matrixWorld),this.intersectsSphere(_n)}intersectsSphere(e){const t=this.planes,r=e.center,n=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const n=t[r];if(ur.x=n.normal.x>0?e.max.x:e.min.x,ur.y=n.normal.y>0?e.max.y:e.min.y,ur.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(ur)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ao(){let s=null,e=!1,t=null,r=null;function n(i,a){t(i,a),r=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(n),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){s=i}}}function Dl(s,e){const t=e.isWebGL2,r=new WeakMap;function n(l,u){const h=l.array,f=l.usage,d=s.createBuffer();s.bindBuffer(u,d),s.bufferData(u,h,f),l.onUploadCallback();let g;if(h instanceof Float32Array)g=s.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=s.SHORT;else if(h instanceof Uint32Array)g=s.UNSIGNED_INT;else if(h instanceof Int32Array)g=s.INT;else if(h instanceof Int8Array)g=s.BYTE;else if(h instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function i(l,u,h){const f=u.array,d=u.updateRange;s.bindBuffer(h,l),d.count===-1?s.bufferSubData(h,0,f):(t?s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),r.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=r.get(l);u&&(s.deleteBuffer(u.buffer),r.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=r.get(l);(!f||f.version<l.version)&&r.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=r.get(l);h===void 0?r.set(l,n(l,u)):h.version<l.version&&(i(h.buffer,l,u),h.version=l.version)}return{get:a,remove:o,update:c}}class hi extends dt{constructor(e=1,t=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:n};const i=e/2,a=t/2,o=Math.floor(r),c=Math.floor(n),l=o+1,u=c+1,h=e/o,f=t/c,d=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const M=p*f-a;for(let _=0;_<l;_++){const S=_*h-i;g.push(S,-M,0),v.push(0,0,1),m.push(_/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){const _=M+l*p,S=M+l*(p+1),E=M+1+l*(p+1),w=M+1+l*p;d.push(_,S,w),d.push(S,E,w)}this.setIndex(d),this.setAttribute("position",new Dt(g,3)),this.setAttribute("normal",new Dt(v,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Fl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Il=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nl=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ol=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kl="vec3 transformed = vec3( position );",zl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hl=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vl=`#ifdef USE_IRIDESCENCE
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
#endif`,Wl=`#ifdef USE_BUMPMAP
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
#endif`,Xl=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ql=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ql=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,$l=`#define PI 3.141592653589793
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
} // validated`,ec=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tc=`vec3 transformedNormal = objectNormal;
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
#endif`,nc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ic=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ac="gl_FragColor = linearToOutputTexel( gl_FragColor );",oc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lc=`#ifdef USE_ENVMAP
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
#endif`,cc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uc=`#ifdef USE_ENVMAP
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
#endif`,hc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fc=`#ifdef USE_ENVMAP
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
#endif`,dc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vc=`#ifdef USE_GRADIENTMAP
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
}`,_c=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,xc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yc=`uniform bool receiveShadow;
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
#endif`,Ec=`#if defined( USE_ENVMAP )
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
#endif`,Tc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ac=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rc=`PhysicalMaterial material;
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
#endif`,Cc=`struct PhysicalMaterial {
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
}`,Lc=`
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
#endif`,Pc=`#if defined( RE_IndirectDiffuse )
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
#endif`,Uc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Dc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ic=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Nc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Oc=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Bc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kc=`#if defined( USE_POINTS_UV )
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
#endif`,zc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vc=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wc=`#ifdef USE_MORPHNORMALS
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
#endif`,Xc=`#ifdef USE_MORPHTARGETS
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
#endif`,qc=`#ifdef USE_MORPHTARGETS
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
#endif`,Yc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,jc=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qc=`#ifdef USE_NORMALMAP
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
#endif`,$c=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,eu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ru=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,su=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,au=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ou=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,du=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pu=`float getShadowMask() {
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
}`,mu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gu=`#ifdef USE_SKINNING
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
#endif`,vu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_u=`#ifdef USE_SKINNING
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
#endif`,xu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Su=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Eu=`#ifdef USE_TRANSMISSION
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
#endif`,Tu=`#ifdef USE_TRANSMISSION
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
#endif`,bu=`#ifdef USE_UV
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
#endif`,Au=`#ifdef USE_UV
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
#endif`,wu=`#ifdef USE_UV
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
#endif`,Ru=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Pu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Du=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Iu=`#include <common>
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
}`,Nu=`#if DEPTH_PACKING == 3200
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
}`,Ou=`#define DISTANCE
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
}`,Bu=`#define DISTANCE
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
}`,Gu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ku=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zu=`uniform float scale;
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
}`,Hu=`uniform vec3 diffuse;
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
}`,Vu=`#include <common>
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
}`,Wu=`uniform vec3 diffuse;
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
}`,Xu=`#define LAMBERT
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
}`,qu=`#define LAMBERT
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
}`,Yu=`#define MATCAP
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
}`,ju=`#define MATCAP
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
}`,Ju=`#define NORMAL
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
}`,Ku=`#define NORMAL
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
}`,Zu=`#define PHONG
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
}`,Qu=`#define PHONG
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
}`,$u=`#define STANDARD
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
}`,eh=`#define STANDARD
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
}`,th=`#define TOON
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
}`,nh=`#define TOON
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
}`,ih=`uniform float size;
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
}`,rh=`uniform vec3 diffuse;
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
}`,sh=`#include <common>
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
}`,ah=`uniform vec3 color;
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
}`,oh=`uniform float rotation;
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
}`,lh=`uniform vec3 diffuse;
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
}`,ze={alphamap_fragment:Fl,alphamap_pars_fragment:Il,alphatest_fragment:Nl,alphatest_pars_fragment:Ol,aomap_fragment:Bl,aomap_pars_fragment:Gl,begin_vertex:kl,beginnormal_vertex:zl,bsdfs:Hl,iridescence_fragment:Vl,bumpmap_pars_fragment:Wl,clipping_planes_fragment:Xl,clipping_planes_pars_fragment:ql,clipping_planes_pars_vertex:Yl,clipping_planes_vertex:jl,color_fragment:Jl,color_pars_fragment:Kl,color_pars_vertex:Zl,color_vertex:Ql,common:$l,cube_uv_reflection_fragment:ec,defaultnormal_vertex:tc,displacementmap_pars_vertex:nc,displacementmap_vertex:ic,emissivemap_fragment:rc,emissivemap_pars_fragment:sc,encodings_fragment:ac,encodings_pars_fragment:oc,envmap_fragment:lc,envmap_common_pars_fragment:cc,envmap_pars_fragment:uc,envmap_pars_vertex:hc,envmap_physical_pars_fragment:Ec,envmap_vertex:fc,fog_vertex:dc,fog_pars_vertex:pc,fog_fragment:mc,fog_pars_fragment:gc,gradientmap_pars_fragment:vc,lightmap_fragment:_c,lightmap_pars_fragment:xc,lights_lambert_fragment:Sc,lights_lambert_pars_fragment:Mc,lights_pars_begin:yc,lights_toon_fragment:Tc,lights_toon_pars_fragment:bc,lights_phong_fragment:Ac,lights_phong_pars_fragment:wc,lights_physical_fragment:Rc,lights_physical_pars_fragment:Cc,lights_fragment_begin:Lc,lights_fragment_maps:Pc,lights_fragment_end:Uc,logdepthbuf_fragment:Dc,logdepthbuf_pars_fragment:Fc,logdepthbuf_pars_vertex:Ic,logdepthbuf_vertex:Nc,map_fragment:Oc,map_pars_fragment:Bc,map_particle_fragment:Gc,map_particle_pars_fragment:kc,metalnessmap_fragment:zc,metalnessmap_pars_fragment:Hc,morphcolor_vertex:Vc,morphnormal_vertex:Wc,morphtarget_pars_vertex:Xc,morphtarget_vertex:qc,normal_fragment_begin:Yc,normal_fragment_maps:jc,normal_pars_fragment:Jc,normal_pars_vertex:Kc,normal_vertex:Zc,normalmap_pars_fragment:Qc,clearcoat_normal_fragment_begin:$c,clearcoat_normal_fragment_maps:eu,clearcoat_pars_fragment:tu,iridescence_pars_fragment:nu,output_fragment:iu,packing:ru,premultiplied_alpha_fragment:su,project_vertex:au,dithering_fragment:ou,dithering_pars_fragment:lu,roughnessmap_fragment:cu,roughnessmap_pars_fragment:uu,shadowmap_pars_fragment:hu,shadowmap_pars_vertex:fu,shadowmap_vertex:du,shadowmask_pars_fragment:pu,skinbase_vertex:mu,skinning_pars_vertex:gu,skinning_vertex:vu,skinnormal_vertex:_u,specularmap_fragment:xu,specularmap_pars_fragment:Su,tonemapping_fragment:Mu,tonemapping_pars_fragment:yu,transmission_fragment:Eu,transmission_pars_fragment:Tu,uv_pars_fragment:bu,uv_pars_vertex:Au,uv_vertex:wu,worldpos_vertex:Ru,background_vert:Cu,background_frag:Lu,backgroundCube_vert:Pu,backgroundCube_frag:Uu,cube_vert:Du,cube_frag:Fu,depth_vert:Iu,depth_frag:Nu,distanceRGBA_vert:Ou,distanceRGBA_frag:Bu,equirect_vert:Gu,equirect_frag:ku,linedashed_vert:zu,linedashed_frag:Hu,meshbasic_vert:Vu,meshbasic_frag:Wu,meshlambert_vert:Xu,meshlambert_frag:qu,meshmatcap_vert:Yu,meshmatcap_frag:ju,meshnormal_vert:Ju,meshnormal_frag:Ku,meshphong_vert:Zu,meshphong_frag:Qu,meshphysical_vert:$u,meshphysical_frag:eh,meshtoon_vert:th,meshtoon_frag:nh,points_vert:ih,points_frag:rh,shadow_vert:sh,shadow_frag:ah,sprite_vert:oh,sprite_frag:lh},Re={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaTest:{value:0}}},Zt={basic:{uniforms:Mt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Mt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Qe(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Mt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Mt([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Mt([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Qe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Mt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Mt([Re.points,Re.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Mt([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Mt([Re.common,Re.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Mt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Mt([Re.sprite,Re.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Mt([Re.common,Re.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Mt([Re.lights,Re.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Zt.physical={uniforms:Mt([Zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const hr={r:0,b:0,g:0};function ch(s,e,t,r,n,i,a){const o=new Qe(0);let c=i===!0?0:1,l,u,h=null,f=0,d=null;function g(m,p){let M=!1,_=p.isScene===!0?p.background:null;switch(_&&_.isTexture&&(_=(p.backgroundBlurriness>0?t:e).get(_)),_===null?v(o,c):_&&_.isColor&&(v(_,1),M=!0),s.xr.getEnvironmentBlendMode()){case"opaque":M=!0;break;case"additive":r.buffers.color.setClear(0,0,0,1,a),M=!0;break;case"alpha-blend":r.buffers.color.setClear(0,0,0,0,a),M=!0;break}(s.autoClear||M)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===306)?(u===void 0&&(u=new Lt(new Bi(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:oi(Zt.backgroundCube.uniforms),vertexShader:Zt.backgroundCube.vertexShader,fragmentShader:Zt.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,R,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=_.colorSpace!==Xe,(h!==_||f!==_.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,d=s.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Lt(new hi(2,2),new An({name:"BackgroundMaterial",uniforms:oi(Zt.background.uniforms),vertexShader:Zt.background.vertexShader,fragmentShader:Zt.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=_.colorSpace!==Xe,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=_,f=_.version,d=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function v(m,p){m.getRGB(hr,yo(s)),r.buffers.color.setClear(hr.r,hr.g,hr.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,v(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,v(o,c)},render:g}}function uh(s,e,t,r){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),i=r.isWebGL2?null:e.get("OES_vertex_array_object"),a=r.isWebGL2||i!==null,o={},c=m(null);let l=c,u=!1;function h(I,L,V,K,Q){let q=!1;if(a){const X=v(K,V,L);l!==X&&(l=X,d(l.object)),q=p(I,K,V,Q),q&&M(I,K,V,Q)}else{const X=L.wireframe===!0;(l.geometry!==K.id||l.program!==V.id||l.wireframe!==X)&&(l.geometry=K.id,l.program=V.id,l.wireframe=X,q=!0)}Q!==null&&t.update(Q,s.ELEMENT_ARRAY_BUFFER),(q||u)&&(u=!1,F(I,L,V,K),Q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function f(){return r.isWebGL2?s.createVertexArray():i.createVertexArrayOES()}function d(I){return r.isWebGL2?s.bindVertexArray(I):i.bindVertexArrayOES(I)}function g(I){return r.isWebGL2?s.deleteVertexArray(I):i.deleteVertexArrayOES(I)}function v(I,L,V){const K=V.wireframe===!0;let Q=o[I.id];Q===void 0&&(Q={},o[I.id]=Q);let q=Q[L.id];q===void 0&&(q={},Q[L.id]=q);let X=q[K];return X===void 0&&(X=m(f()),q[K]=X),X}function m(I){const L=[],V=[],K=[];for(let Q=0;Q<n;Q++)L[Q]=0,V[Q]=0,K[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:K,object:I,attributes:{},index:null}}function p(I,L,V,K){const Q=l.attributes,q=L.attributes;let X=0;const O=V.getAttributes();for(const z in O)if(O[z].location>=0){const b=Q[z];let P=q[z];if(P===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(P=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(P=I.instanceColor)),b===void 0||b.attribute!==P||P&&b.data!==P.data)return!0;X++}return l.attributesNum!==X||l.index!==K}function M(I,L,V,K){const Q={},q=L.attributes;let X=0;const O=V.getAttributes();for(const z in O)if(O[z].location>=0){let b=q[z];b===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(b=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(b=I.instanceColor));const P={};P.attribute=b,b&&b.data&&(P.data=b.data),Q[z]=P,X++}l.attributes=Q,l.attributesNum=X,l.index=K}function _(){const I=l.newAttributes;for(let L=0,V=I.length;L<V;L++)I[L]=0}function S(I){E(I,0)}function E(I,L){const V=l.newAttributes,K=l.enabledAttributes,Q=l.attributeDivisors;V[I]=1,K[I]===0&&(s.enableVertexAttribArray(I),K[I]=1),Q[I]!==L&&((r.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,L),Q[I]=L)}function w(){const I=l.newAttributes,L=l.enabledAttributes;for(let V=0,K=L.length;V<K;V++)L[V]!==I[V]&&(s.disableVertexAttribArray(V),L[V]=0)}function R(I,L,V,K,Q,q){r.isWebGL2===!0&&(V===s.INT||V===s.UNSIGNED_INT)?s.vertexAttribIPointer(I,L,V,Q,q):s.vertexAttribPointer(I,L,V,K,Q,q)}function F(I,L,V,K){if(r.isWebGL2===!1&&(I.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const Q=K.attributes,q=V.getAttributes(),X=L.defaultAttributeValues;for(const O in q){const z=q[O];if(z.location>=0){let G=Q[O];if(G===void 0&&(O==="instanceMatrix"&&I.instanceMatrix&&(G=I.instanceMatrix),O==="instanceColor"&&I.instanceColor&&(G=I.instanceColor)),G!==void 0){const b=G.normalized,P=G.itemSize,N=t.get(G);if(N===void 0)continue;const y=N.buffer,k=N.type,se=N.bytesPerElement;if(G.isInterleavedBufferAttribute){const Z=G.data,oe=Z.stride,W=G.offset;if(Z.isInstancedInterleavedBuffer){for(let $=0;$<z.locationSize;$++)E(z.location+$,Z.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let $=0;$<z.locationSize;$++)S(z.location+$);s.bindBuffer(s.ARRAY_BUFFER,y);for(let $=0;$<z.locationSize;$++)R(z.location+$,P/z.locationSize,k,b,oe*se,(W+P/z.locationSize*$)*se)}else{if(G.isInstancedBufferAttribute){for(let Z=0;Z<z.locationSize;Z++)E(z.location+Z,G.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Z=0;Z<z.locationSize;Z++)S(z.location+Z);s.bindBuffer(s.ARRAY_BUFFER,y);for(let Z=0;Z<z.locationSize;Z++)R(z.location+Z,P/z.locationSize,k,b,P*se,P/z.locationSize*Z*se)}}else if(X!==void 0){const b=X[O];if(b!==void 0)switch(b.length){case 2:s.vertexAttrib2fv(z.location,b);break;case 3:s.vertexAttrib3fv(z.location,b);break;case 4:s.vertexAttrib4fv(z.location,b);break;default:s.vertexAttrib1fv(z.location,b)}}}}w()}function x(){B();for(const I in o){const L=o[I];for(const V in L){const K=L[V];for(const Q in K)g(K[Q].object),delete K[Q];delete L[V]}delete o[I]}}function A(I){if(o[I.id]===void 0)return;const L=o[I.id];for(const V in L){const K=L[V];for(const Q in K)g(K[Q].object),delete K[Q];delete L[V]}delete o[I.id]}function j(I){for(const L in o){const V=o[L];if(V[I.id]===void 0)continue;const K=V[I.id];for(const Q in K)g(K[Q].object),delete K[Q];delete V[I.id]}}function B(){D(),u=!0,l!==c&&(l=c,d(l.object))}function D(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:B,resetDefaultState:D,dispose:x,releaseStatesOfGeometry:A,releaseStatesOfProgram:j,initAttributes:_,enableAttribute:S,disableUnusedAttributes:w}}function hh(s,e,t,r){const n=r.isWebGL2;let i;function a(l){i=l}function o(l,u){s.drawArrays(i,l,u),t.update(u,i,1)}function c(l,u,h){if(h===0)return;let f,d;if(n)f=s,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](i,l,u,h),t.update(u,i,h)}this.setMode=a,this.render=o,this.renderInstances=c}function fh(s,e,t){let r;function n(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function i(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=i(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,S=a||e.has("OES_texture_float"),E=_&&S,w=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:n,getMaxPrecision:i,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:_,floatFragmentTextures:S,floatVertexTextures:E,maxSamples:w}}function dh(s){const e=this;let t=null,r=0,n=!1,i=!1;const a=new Sn,o=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||r!==0||n;return n=f,r=h.length,d},this.beginShadows=function(){i=!0,u(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!n||g===null||g.length===0||i&&!m)i?u(null):l();else{const M=i?0:r,_=M*4;let S=p.clippingState||null;c.value=S,S=u(g,f,_,d);for(let E=0;E!==_;++E)S[E]=t[E];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(h,f,d,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=d+v*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,S=d;_!==v;++_,S+=4)a.copy(h[_]).applyMatrix4(M,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function ph(s){let e=new WeakMap;function t(a,o){return o===303?a.mapping=301:o===304&&(a.mapping=302),a}function r(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===303||o===304)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Ll(c.height/2);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",n),t(l.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function i(){e=new WeakMap}return{get:r,dispose:i}}class wo extends Eo{constructor(e=-1,t=1,r=1,n=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=n,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,n,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let i=r-e,a=r+e,o=n+t,c=n-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=l*this.view.offsetX,a=i+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ti=4,xa=[.125,.215,.35,.446,.526,.582],yn=20,hs=new wo,Sa=new Qe;let fs=null;const Mn=(1+Math.sqrt(5))/2,Qn=1/Mn,Ma=[new J(1,1,1),new J(-1,1,1),new J(1,1,-1),new J(-1,1,-1),new J(0,Mn,Qn),new J(0,Mn,-Qn),new J(Qn,0,Mn),new J(-Qn,0,Mn),new J(Mn,Qn,0),new J(-Mn,Qn,0)];class ya{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,n=100){fs=this._renderer.getRenderTarget(),this._setSize(256);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,r,n,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ba(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ta(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fs),e.scissorTest=!1,fr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fs=this._renderer.getRenderTarget();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:Qt,depthBuffer:!1},n=Ea(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ea(e,t,r);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mh(i)),this._blurMaterial=gh(i,e,t)}return n}_compileMaterial(e){const t=new Lt(this._lodPlanes[0],e);this._renderer.compile(t,hs)}_sceneToCubeUV(e,t,r,n){const o=new Ht(90,1,t,r),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Sa),u.toneMapping=0,u.autoClear=!1;const d=new Di({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),g=new Lt(new Bi,d);let v=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,v=!0):(d.color.copy(Sa),v=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):M===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const _=this._cubeSize;fr(n,M*_,p>2?_:0,_,_),u.setRenderTarget(n),v&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const r=this._renderer,n=e.mapping===301||e.mapping===302;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=ba()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ta());const i=n?this._cubemapMaterial:this._equirectMaterial,a=new Lt(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;const c=this._cubeSize;fr(t,0,0,3*c,2*c),r.setRenderTarget(t),r.render(a,hs)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const i=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=Ma[(n-1)%Ma.length];this._blur(e,n-1,n,i,a)}t.autoClear=r}_blur(e,t,r,n,i){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,r,n,"latitudinal",i),this._halfBlur(a,e,r,r,n,"longitudinal",i)}_halfBlur(e,t,r,n,i,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Lt(this._lodPlanes[n],l),f=l.uniforms,d=this._sizeLods[r]-1,g=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*yn-1),v=i/g,m=isFinite(i)?1+Math.floor(u*v):yn;m>yn&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yn}`);const p=[];let M=0;for(let R=0;R<yn;++R){const F=R/v,x=Math.exp(-F*F/2);p.push(x),R===0?M+=x:R<m&&(M+=2*x)}for(let R=0;R<p.length;R++)p[R]=p[R]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-r;const S=this._sizeLods[n],E=3*S*(n>_-ti?n-_+ti:0),w=4*(this._cubeSize-S);fr(t,E,w,3*S,2*S),c.setRenderTarget(t),c.render(h,hs)}}function mh(s){const e=[],t=[],r=[];let n=s;const i=s-ti+1+xa.length;for(let a=0;a<i;a++){const o=Math.pow(2,n);t.push(o);let c=1/o;a>s-ti?c=xa[a-s+ti-1]:a===0&&(c=0),r.push(c);const l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,v=3,m=2,p=1,M=new Float32Array(v*g*d),_=new Float32Array(m*g*d),S=new Float32Array(p*g*d);for(let w=0;w<d;w++){const R=w%3*2/3-1,F=w>2?0:-1,x=[R,F,0,R+2/3,F,0,R+2/3,F+1,0,R,F,0,R+2/3,F+1,0,R,F+1,0];M.set(x,v*g*w),_.set(f,m*g*w);const A=[w,w,w,w,w,w];S.set(A,p*g*w)}const E=new dt;E.setAttribute("position",new Vt(M,v)),E.setAttribute("uv",new Vt(_,m)),E.setAttribute("faceIndex",new Vt(S,p)),e.push(E),n>ti&&n--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Ea(s,e,t){const r=new bn(s,e,t);return r.texture.mapping=306,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function fr(s,e,t,r,n){s.viewport.set(e,t,r,n),s.scissor.set(e,t,r,n)}function gh(s,e,t){const r=new Float32Array(yn),n=new J(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:yn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Ns(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ta(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ns(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ba(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ns(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ns(){return`

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
	`}function vh(s){let e=new WeakMap,t=null;function r(o){if(o&&o.isTexture){const c=o.mapping,l=c===303||c===304,u=c===301||c===302;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new ya(s)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(l&&h&&h.height>0||u&&h&&n(h)){t===null&&(t=new ya(s));const f=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",i),f.texture}else return null}}}return o}function n(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function i(o){const c=o.target;c.removeEventListener("dispose",i);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:a}}function _h(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let n;switch(r){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(r)}return e[r]=n,n}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const n=t(r);return n===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),n}}}function xh(s,e,t,r){const n={},i=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete n[f.id];const d=i.get(f);d&&(e.remove(d),i.delete(f)),r.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return n[f.id]===!0||(f.addEventListener("dispose",a),n[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)e.update(f[g],s.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const v=d[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],s.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,g=h.attributes.position;let v=0;if(d!==null){const M=d.array;v=d.version;for(let _=0,S=M.length;_<S;_+=3){const E=M[_+0],w=M[_+1],R=M[_+2];f.push(E,w,w,R,R,E)}}else{const M=g.array;v=g.version;for(let _=0,S=M.length/3-1;_<S;_+=3){const E=_+0,w=_+1,R=_+2;f.push(E,w,w,R,R,E)}}const m=new(po(f)?Mo:So)(f,1);m.version=v;const p=i.get(h);p&&e.remove(p),i.set(h,m)}function u(h){const f=i.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return i.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function Sh(s,e,t,r){const n=r.isWebGL2;let i;function a(f){i=f}let o,c;function l(f){o=f.type,c=f.bytesPerElement}function u(f,d){s.drawElements(i,d,o,f*c),t.update(d,i,1)}function h(f,d,g){if(g===0)return;let v,m;if(n)v=s,m="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](i,d,o,f*c,g),t.update(d,i,g)}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=h}function Mh(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(i,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(i/3);break;case s.LINES:t.lines+=o*(i/2);break;case s.LINE_STRIP:t.lines+=o*(i-1);break;case s.LINE_LOOP:t.lines+=o*i;break;case s.POINTS:t.points+=o*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:r}}function yh(s,e){return s[0]-e[0]}function Eh(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Th(s,e,t){const r={},n=new Float32Array(8),i=new WeakMap,a=new lt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,h){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=d!==void 0?d.length:0;let v=i.get(u);if(v===void 0||v.count!==g){let I=function(){B.dispose(),i.delete(u),u.removeEventListener("dispose",I)};v!==void 0&&v.texture.dispose();const M=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],R=u.morphAttributes.color||[];let F=0;M===!0&&(F=1),_===!0&&(F=2),S===!0&&(F=3);let x=u.attributes.position.count*F,A=1;x>e.maxTextureSize&&(A=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const j=new Float32Array(x*A*4*g),B=new vo(j,x,A,g);B.type=1015,B.needsUpdate=!0;const D=F*4;for(let L=0;L<g;L++){const V=E[L],K=w[L],Q=R[L],q=x*A*4*L;for(let X=0;X<V.count;X++){const O=X*D;M===!0&&(a.fromBufferAttribute(V,X),j[q+O+0]=a.x,j[q+O+1]=a.y,j[q+O+2]=a.z,j[q+O+3]=0),_===!0&&(a.fromBufferAttribute(K,X),j[q+O+4]=a.x,j[q+O+5]=a.y,j[q+O+6]=a.z,j[q+O+7]=0),S===!0&&(a.fromBufferAttribute(Q,X),j[q+O+8]=a.x,j[q+O+9]=a.y,j[q+O+10]=a.z,j[q+O+11]=Q.itemSize===4?a.w:1)}}v={count:g,texture:B,size:new be(x,A)},i.set(u,v),u.addEventListener("dispose",I)}let m=0;for(let M=0;M<f.length;M++)m+=f[M];const p=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(s,"morphTargetBaseInfluence",p),h.getUniforms().setValue(s,"morphTargetInfluences",f),h.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}else{const d=f===void 0?0:f.length;let g=r[u.id];if(g===void 0||g.length!==d){g=[];for(let _=0;_<d;_++)g[_]=[_,0];r[u.id]=g}for(let _=0;_<d;_++){const S=g[_];S[0]=_,S[1]=f[_]}g.sort(Eh);for(let _=0;_<8;_++)_<d&&g[_][1]?(o[_][0]=g[_][0],o[_][1]=g[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(yh);const v=u.morphAttributes.position,m=u.morphAttributes.normal;let p=0;for(let _=0;_<8;_++){const S=o[_],E=S[0],w=S[1];E!==Number.MAX_SAFE_INTEGER&&w?(v&&u.getAttribute("morphTarget"+_)!==v[E]&&u.setAttribute("morphTarget"+_,v[E]),m&&u.getAttribute("morphNormal"+_)!==m[E]&&u.setAttribute("morphNormal"+_,m[E]),n[_]=w,p+=w):(v&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),m&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),n[_]=0)}const M=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(s,"morphTargetBaseInfluence",M),h.getUniforms().setValue(s,"morphTargetInfluences",n)}}return{update:c}}function bh(s,e,t,r){let n=new WeakMap;function i(c){const l=r.render.frame,u=c.geometry,h=e.get(c,u);return n.get(h)!==l&&(e.update(h),n.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER)),h}function a(){n=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:i,dispose:a}}const Ro=new bt,Co=new vo,Lo=new ml,Po=new To,Aa=[],wa=[],Ra=new Float32Array(16),Ca=new Float32Array(9),La=new Float32Array(4);function fi(s,e,t){const r=s[0];if(r<=0||r>0)return s;const n=e*t;let i=Aa[n];if(i===void 0&&(i=new Float32Array(n),Aa[n]=i),e!==0){r.toArray(i,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(i,o)}return i}function ct(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function ut(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Cr(s,e){let t=wa[e];t===void 0&&(t=new Int32Array(e),wa[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function Ah(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function wh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;s.uniform2fv(this.addr,e),ut(t,e)}}function Rh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ct(t,e))return;s.uniform3fv(this.addr,e),ut(t,e)}}function Ch(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;s.uniform4fv(this.addr,e),ut(t,e)}}function Lh(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(ct(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,r))return;La.set(r),s.uniformMatrix2fv(this.addr,!1,La),ut(t,r)}}function Ph(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(ct(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,r))return;Ca.set(r),s.uniformMatrix3fv(this.addr,!1,Ca),ut(t,r)}}function Uh(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(ct(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,r))return;Ra.set(r),s.uniformMatrix4fv(this.addr,!1,Ra),ut(t,r)}}function Dh(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Fh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;s.uniform2iv(this.addr,e),ut(t,e)}}function Ih(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;s.uniform3iv(this.addr,e),ut(t,e)}}function Nh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;s.uniform4iv(this.addr,e),ut(t,e)}}function Oh(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Bh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;s.uniform2uiv(this.addr,e),ut(t,e)}}function Gh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;s.uniform3uiv(this.addr,e),ut(t,e)}}function kh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;s.uniform4uiv(this.addr,e),ut(t,e)}}function zh(s,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(s.uniform1i(this.addr,n),r[0]=n),t.setTexture2D(e||Ro,n)}function Hh(s,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(s.uniform1i(this.addr,n),r[0]=n),t.setTexture3D(e||Lo,n)}function Vh(s,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(s.uniform1i(this.addr,n),r[0]=n),t.setTextureCube(e||Po,n)}function Wh(s,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(s.uniform1i(this.addr,n),r[0]=n),t.setTexture2DArray(e||Co,n)}function Xh(s){switch(s){case 5126:return Ah;case 35664:return wh;case 35665:return Rh;case 35666:return Ch;case 35674:return Lh;case 35675:return Ph;case 35676:return Uh;case 5124:case 35670:return Dh;case 35667:case 35671:return Fh;case 35668:case 35672:return Ih;case 35669:case 35673:return Nh;case 5125:return Oh;case 36294:return Bh;case 36295:return Gh;case 36296:return kh;case 35678:case 36198:case 36298:case 36306:case 35682:return zh;case 35679:case 36299:case 36307:return Hh;case 35680:case 36300:case 36308:case 36293:return Vh;case 36289:case 36303:case 36311:case 36292:return Wh}}function qh(s,e){s.uniform1fv(this.addr,e)}function Yh(s,e){const t=fi(e,this.size,2);s.uniform2fv(this.addr,t)}function jh(s,e){const t=fi(e,this.size,3);s.uniform3fv(this.addr,t)}function Jh(s,e){const t=fi(e,this.size,4);s.uniform4fv(this.addr,t)}function Kh(s,e){const t=fi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Zh(s,e){const t=fi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Qh(s,e){const t=fi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function $h(s,e){s.uniform1iv(this.addr,e)}function ef(s,e){s.uniform2iv(this.addr,e)}function tf(s,e){s.uniform3iv(this.addr,e)}function nf(s,e){s.uniform4iv(this.addr,e)}function rf(s,e){s.uniform1uiv(this.addr,e)}function sf(s,e){s.uniform2uiv(this.addr,e)}function af(s,e){s.uniform3uiv(this.addr,e)}function of(s,e){s.uniform4uiv(this.addr,e)}function lf(s,e,t){const r=this.cache,n=e.length,i=Cr(t,n);ct(r,i)||(s.uniform1iv(this.addr,i),ut(r,i));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||Ro,i[a])}function cf(s,e,t){const r=this.cache,n=e.length,i=Cr(t,n);ct(r,i)||(s.uniform1iv(this.addr,i),ut(r,i));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||Lo,i[a])}function uf(s,e,t){const r=this.cache,n=e.length,i=Cr(t,n);ct(r,i)||(s.uniform1iv(this.addr,i),ut(r,i));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||Po,i[a])}function hf(s,e,t){const r=this.cache,n=e.length,i=Cr(t,n);ct(r,i)||(s.uniform1iv(this.addr,i),ut(r,i));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||Co,i[a])}function ff(s){switch(s){case 5126:return qh;case 35664:return Yh;case 35665:return jh;case 35666:return Jh;case 35674:return Kh;case 35675:return Zh;case 35676:return Qh;case 5124:case 35670:return $h;case 35667:case 35671:return ef;case 35668:case 35672:return tf;case 35669:case 35673:return nf;case 5125:return rf;case 36294:return sf;case 36295:return af;case 36296:return of;case 35678:case 36198:case 36298:case 36306:case 35682:return lf;case 35679:case 36299:case 36307:return cf;case 35680:case 36300:case 36308:case 36293:return uf;case 36289:case 36303:case 36311:case 36292:return hf}}class df{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.setValue=Xh(t.type)}}class pf{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.size=t.size,this.setValue=ff(t.type)}}class mf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const n=this.seq;for(let i=0,a=n.length;i!==a;++i){const o=n[i];o.setValue(e,t[o.id],r)}}}const ds=/(\w+)(\])?(\[|\.)?/g;function Pa(s,e){s.seq.push(e),s.map[e.id]=e}function gf(s,e,t){const r=s.name,n=r.length;for(ds.lastIndex=0;;){const i=ds.exec(r),a=ds.lastIndex;let o=i[1];const c=i[2]==="]",l=i[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===n){Pa(t,l===void 0?new df(o,s,e):new pf(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new mf(o),Pa(t,h)),t=h}}}class Er{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<r;++n){const i=e.getActiveUniform(t,n),a=e.getUniformLocation(t,i.name);gf(i,a,this)}}setValue(e,t,r,n){const i=this.map[t];i!==void 0&&i.setValue(e,r,n)}setOptional(e,t,r){const n=t[r];n!==void 0&&this.setValue(e,r,n)}static upload(e,t,r,n){for(let i=0,a=t.length;i!==a;++i){const o=t[i],c=r[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,n)}}static seqWithValue(e,t){const r=[];for(let n=0,i=e.length;n!==i;++n){const a=e[n];a.id in t&&r.push(a)}return r}}function Ua(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}let vf=0;function _f(s,e){const t=s.split(`
`),r=[],n=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let a=n;a<i;a++){const o=a+1;r.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return r.join(`
`)}function xf(s){switch(s){case Qt:return["Linear","( value )"];case Xe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function Da(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),n=s.getShaderInfoLog(e).trim();if(r&&n==="")return"";const i=/ERROR: 0:(\d+)/.exec(n);if(i){const a=parseInt(i[1]);return t.toUpperCase()+`

`+n+`

`+_f(s.getShaderSource(e),a)}else return n}function Sf(s,e){const t=xf(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Mf(s,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="OptimizedCineon";break;case 4:t="ACESFilmic";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function yf(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(wi).join(`
`)}function Ef(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function Tf(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){const i=s.getActiveAttrib(e,n),a=i.name;let o=1;i.type===s.FLOAT_MAT2&&(o=2),i.type===s.FLOAT_MAT3&&(o=3),i.type===s.FLOAT_MAT4&&(o=4),t[a]={type:i.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function wi(s){return s!==""}function Fa(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ia(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ts(s){return s.replace(bf,Af)}function Af(s,e){const t=ze[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ts(t)}const wf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Na(s){return s.replace(wf,Rf)}function Rf(s,e,t,r){let n="";for(let i=parseInt(e);i<parseInt(t);i++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return n}function Oa(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Cf(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===1?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===2?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===3&&(e="SHADOWMAP_TYPE_VSM"),e}function Lf(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Pf(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case 302:e="ENVMAP_MODE_REFRACTION";break}return e}function Uf(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function Df(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function Ff(s,e,t,r){const n=s.getContext(),i=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Cf(t),l=Lf(t),u=Pf(t),h=Uf(t),f=Df(t),d=t.isWebGL2?"":yf(t),g=Ef(i),v=n.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(wi).join(`
`),m.length>0&&(m+=`
`),p=[d,g].filter(wi).join(`
`),p.length>0&&(p+=`
`)):(m=[Oa(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wi).join(`
`),p=[d,Oa(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?ze.tonemapping_pars_fragment:"",t.toneMapping!==0?Mf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.encodings_pars_fragment,Sf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wi).join(`
`)),a=Ts(a),a=Fa(a,t),a=Ia(a,t),o=Ts(o),o=Fa(o,t),o=Ia(o,t),a=Na(a),o=Na(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===na?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===na?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=M+m+a,S=M+p+o,E=Ua(n,n.VERTEX_SHADER,_),w=Ua(n,n.FRAGMENT_SHADER,S);if(n.attachShader(v,E),n.attachShader(v,w),t.index0AttributeName!==void 0?n.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v),s.debug.checkShaderErrors){const x=n.getProgramInfoLog(v).trim(),A=n.getShaderInfoLog(E).trim(),j=n.getShaderInfoLog(w).trim();let B=!0,D=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,v,E,w);else{const I=Da(n,E,"vertex"),L=Da(n,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+I+`
`+L)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(A===""||j==="")&&(D=!1);D&&(this.diagnostics={runnable:B,programLog:x,vertexShader:{log:A,prefix:m},fragmentShader:{log:j,prefix:p}})}n.deleteShader(E),n.deleteShader(w);let R;this.getUniforms=function(){return R===void 0&&(R=new Er(n,v)),R};let F;return this.getAttributes=function(){return F===void 0&&(F=Tf(n,v)),F},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=vf++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=w,this}let If=0;class Nf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,n=this._getShaderStage(t),i=this._getShaderStage(r),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Of(e),t.set(e,r)),r}}class Of{constructor(e){this.id=If++,this.code=e,this.usedTimes=0}}function Bf(s,e,t,r,n,i,a){const o=new _o,c=new Nf,l=[],u=n.isWebGL2,h=n.logarithmicDepthBuffer,f=n.vertexTextures;let d=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return x===1?"uv1":x===2?"uv2":x===3?"uv3":"uv"}function m(x,A,j,B,D){const I=B.fog,L=D.geometry,V=x.isMeshStandardMaterial?B.environment:null,K=(x.isMeshStandardMaterial?t:e).get(x.envMap||V),Q=K&&K.mapping===306?K.image.height:null,q=g[x.type];x.precision!==null&&(d=n.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const X=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,O=X!==void 0?X.length:0;let z=0;L.morphAttributes.position!==void 0&&(z=1),L.morphAttributes.normal!==void 0&&(z=2),L.morphAttributes.color!==void 0&&(z=3);let G,b,P,N;if(q){const Pe=Zt[q];G=Pe.vertexShader,b=Pe.fragmentShader}else G=x.vertexShader,b=x.fragmentShader,c.update(x),P=c.getVertexShaderID(x),N=c.getFragmentShaderID(x);const y=s.getRenderTarget(),k=D.isInstancedMesh===!0,se=!!x.map,Z=!!x.matcap,oe=!!K,W=!!x.aoMap,$=!!x.lightMap,ne=!!x.bumpMap,fe=!!x.normalMap,le=!!x.displacementMap,Se=!!x.emissiveMap,ce=!!x.metalnessMap,_e=!!x.roughnessMap,Ee=x.clearcoat>0,he=x.iridescence>0,C=x.sheen>0,T=x.transmission>0,Y=Ee&&!!x.clearcoatMap,ie=Ee&&!!x.clearcoatNormalMap,me=Ee&&!!x.clearcoatRoughnessMap,de=he&&!!x.iridescenceMap,Me=he&&!!x.iridescenceThicknessMap,ve=C&&!!x.sheenColorMap,re=C&&!!x.sheenRoughnessMap,Ae=!!x.specularMap,Ce=!!x.specularColorMap,Te=!!x.specularIntensityMap,ye=T&&!!x.transmissionMap,xe=T&&!!x.thicknessMap,De=!!x.gradientMap,Ie=!!x.alphaMap,je=x.alphaTest>0,H=!!x.extensions,ee=!!L.attributes.uv1,pe=!!L.attributes.uv2,Le=!!L.attributes.uv3;return{isWebGL2:u,shaderID:q,shaderName:x.type,vertexShader:G,fragmentShader:b,defines:x.defines,customVertexShaderID:P,customFragmentShaderID:N,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,instancing:k,instancingColor:k&&D.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:y===null?s.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:Qt,map:se,matcap:Z,envMap:oe,envMapMode:oe&&K.mapping,envMapCubeUVHeight:Q,aoMap:W,lightMap:$,bumpMap:ne,normalMap:fe,displacementMap:f&&le,emissiveMap:Se,normalMapObjectSpace:fe&&x.normalMapType===1,normalMapTangentSpace:fe&&x.normalMapType===0,metalnessMap:ce,roughnessMap:_e,clearcoat:Ee,clearcoatMap:Y,clearcoatNormalMap:ie,clearcoatRoughnessMap:me,iridescence:he,iridescenceMap:de,iridescenceThicknessMap:Me,sheen:C,sheenColorMap:ve,sheenRoughnessMap:re,specularMap:Ae,specularColorMap:Ce,specularIntensityMap:Te,transmission:T,transmissionMap:ye,thicknessMap:xe,gradientMap:De,opaque:x.transparent===!1&&x.blending===1,alphaMap:Ie,alphaTest:je,combine:x.combine,mapUv:se&&v(x.map.channel),aoMapUv:W&&v(x.aoMap.channel),lightMapUv:$&&v(x.lightMap.channel),bumpMapUv:ne&&v(x.bumpMap.channel),normalMapUv:fe&&v(x.normalMap.channel),displacementMapUv:le&&v(x.displacementMap.channel),emissiveMapUv:Se&&v(x.emissiveMap.channel),metalnessMapUv:ce&&v(x.metalnessMap.channel),roughnessMapUv:_e&&v(x.roughnessMap.channel),clearcoatMapUv:Y&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:ie&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:re&&v(x.sheenRoughnessMap.channel),specularMapUv:Ae&&v(x.specularMap.channel),specularColorMapUv:Ce&&v(x.specularColorMap.channel),specularIntensityMapUv:Te&&v(x.specularIntensityMap.channel),transmissionMapUv:ye&&v(x.transmissionMap.channel),thicknessMapUv:xe&&v(x.thicknessMap.channel),alphaMapUv:Ie&&v(x.alphaMap.channel),vertexTangents:fe&&!!L.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUv1s:ee,vertexUv2s:pe,vertexUv3s:Le,pointsUvs:D.isPoints===!0&&!!L.attributes.uv&&(se||Ie),fog:!!I,useFog:x.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:z,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&j.length>0,shadowMapType:s.shadowMap.type,toneMapping:x.toneMapped?s.toneMapping:0,useLegacyLights:s.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===2,flipSided:x.side===1,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:H&&x.extensions.derivatives===!0,extensionFragDepth:H&&x.extensions.fragDepth===!0,extensionDrawBuffers:H&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:H&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||r.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const j in x.defines)A.push(j),A.push(x.defines[j]);return x.isRawShaderMaterial===!1&&(M(A,x),_(A,x),A.push(s.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function M(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function _(x,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),x.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),x.push(o.mask)}function S(x){const A=g[x.type];let j;if(A){const B=Zt[A];j=Is.clone(B.uniforms)}else j=x.uniforms;return j}function E(x,A){let j;for(let B=0,D=l.length;B<D;B++){const I=l[B];if(I.cacheKey===A){j=I,++j.usedTimes;break}}return j===void 0&&(j=new Ff(s,A,x,i),l.push(j)),j}function w(x){if(--x.usedTimes===0){const A=l.indexOf(x);l[A]=l[l.length-1],l.pop(),x.destroy()}}function R(x){c.remove(x)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:E,releaseProgram:w,releaseShaderCache:R,programs:l,dispose:F}}function Gf(){let s=new WeakMap;function e(i){let a=s.get(i);return a===void 0&&(a={},s.set(i,a)),a}function t(i){s.delete(i)}function r(i,a,o){s.get(i)[a]=o}function n(){s=new WeakMap}return{get:e,remove:t,update:r,dispose:n}}function kf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ba(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ga(){const s=[];let e=0;const t=[],r=[],n=[];function i(){e=0,t.length=0,r.length=0,n.length=0}function a(h,f,d,g,v,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),e++,p}function o(h,f,d,g,v,m){const p=a(h,f,d,g,v,m);d.transmission>0?r.push(p):d.transparent===!0?n.push(p):t.push(p)}function c(h,f,d,g,v,m){const p=a(h,f,d,g,v,m);d.transmission>0?r.unshift(p):d.transparent===!0?n.unshift(p):t.unshift(p)}function l(h,f){t.length>1&&t.sort(h||kf),r.length>1&&r.sort(f||Ba),n.length>1&&n.sort(f||Ba)}function u(){for(let h=e,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:r,transparent:n,init:i,push:o,unshift:c,finish:u,sort:l}}function zf(){let s=new WeakMap;function e(r,n){const i=s.get(r);let a;return i===void 0?(a=new Ga,s.set(r,[a])):n>=i.length?(a=new Ga,i.push(a)):a=i[n],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Hf(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new Qe};break;case"SpotLight":t={position:new J,direction:new J,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new J,halfWidth:new J,halfHeight:new J};break}return s[e.id]=t,t}}}function Vf(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Wf=0;function Xf(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function qf(s,e){const t=new Hf,r=Vf(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)n.probe.push(new J);const i=new J,a=new st,o=new st;function c(u,h){let f=0,d=0,g=0;for(let j=0;j<9;j++)n.probe[j].set(0,0,0);let v=0,m=0,p=0,M=0,_=0,S=0,E=0,w=0,R=0,F=0;u.sort(Xf);const x=h===!0?Math.PI:1;for(let j=0,B=u.length;j<B;j++){const D=u[j],I=D.color,L=D.intensity,V=D.distance,K=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=I.r*L*x,d+=I.g*L*x,g+=I.b*L*x;else if(D.isLightProbe)for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(D.sh.coefficients[Q],L);else if(D.isDirectionalLight){const Q=t.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity*x),D.castShadow){const q=D.shadow,X=r.get(D);X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,n.directionalShadow[v]=X,n.directionalShadowMap[v]=K,n.directionalShadowMatrix[v]=D.shadow.matrix,S++}n.directional[v]=Q,v++}else if(D.isSpotLight){const Q=t.get(D);Q.position.setFromMatrixPosition(D.matrixWorld),Q.color.copy(I).multiplyScalar(L*x),Q.distance=V,Q.coneCos=Math.cos(D.angle),Q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Q.decay=D.decay,n.spot[p]=Q;const q=D.shadow;if(D.map&&(n.spotLightMap[R]=D.map,R++,q.updateMatrices(D),D.castShadow&&F++),n.spotLightMatrix[p]=q.matrix,D.castShadow){const X=r.get(D);X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,n.spotShadow[p]=X,n.spotShadowMap[p]=K,w++}p++}else if(D.isRectAreaLight){const Q=t.get(D);Q.color.copy(I).multiplyScalar(L),Q.halfWidth.set(D.width*.5,0,0),Q.halfHeight.set(0,D.height*.5,0),n.rectArea[M]=Q,M++}else if(D.isPointLight){const Q=t.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity*x),Q.distance=D.distance,Q.decay=D.decay,D.castShadow){const q=D.shadow,X=r.get(D);X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,X.shadowCameraNear=q.camera.near,X.shadowCameraFar=q.camera.far,n.pointShadow[m]=X,n.pointShadowMap[m]=K,n.pointShadowMatrix[m]=D.shadow.matrix,E++}n.point[m]=Q,m++}else if(D.isHemisphereLight){const Q=t.get(D);Q.skyColor.copy(D.color).multiplyScalar(L*x),Q.groundColor.copy(D.groundColor).multiplyScalar(L*x),n.hemi[_]=Q,_++}}M>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=f,n.ambient[1]=d,n.ambient[2]=g;const A=n.hash;(A.directionalLength!==v||A.pointLength!==m||A.spotLength!==p||A.rectAreaLength!==M||A.hemiLength!==_||A.numDirectionalShadows!==S||A.numPointShadows!==E||A.numSpotShadows!==w||A.numSpotMaps!==R)&&(n.directional.length=v,n.spot.length=p,n.rectArea.length=M,n.point.length=m,n.hemi.length=_,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=w+R-F,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=F,A.directionalLength=v,A.pointLength=m,A.spotLength=p,A.rectAreaLength=M,A.hemiLength=_,A.numDirectionalShadows=S,A.numPointShadows=E,A.numSpotShadows=w,A.numSpotMaps=R,n.version=Wf++)}function l(u,h){let f=0,d=0,g=0,v=0,m=0;const p=h.matrixWorldInverse;for(let M=0,_=u.length;M<_;M++){const S=u[M];if(S.isDirectionalLight){const E=n.directional[f];E.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(p),f++}else if(S.isSpotLight){const E=n.spot[g];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(p),g++}else if(S.isRectAreaLight){const E=n.rectArea[v];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),o.identity(),a.copy(S.matrixWorld),a.premultiply(p),o.extractRotation(a),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),v++}else if(S.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){const E=n.hemi[m];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:n}}function ka(s,e){const t=new qf(s,e),r=[],n=[];function i(){r.length=0,n.length=0}function a(h){r.push(h)}function o(h){n.push(h)}function c(h){t.setup(r,h)}function l(h){t.setupView(r,h)}return{init:i,state:{lightsArray:r,shadowsArray:n,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Yf(s,e){let t=new WeakMap;function r(i,a=0){const o=t.get(i);let c;return o===void 0?(c=new ka(s,e),t.set(i,[c])):a>=o.length?(c=new ka(s,e),o.push(c)):c=o[a],c}function n(){t=new WeakMap}return{get:r,dispose:n}}class Uo extends ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Do extends ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jf=`uniform sampler2D shadow_pass;
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
}`;function Kf(s,e,t){let r=new bo;const n=new be,i=new be,a=new lt,o=new Uo({depthPacking:3201}),c=new Do,l={},u=t.maxTextureSize,h={0:1,1:0,2:2},f=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:jf,fragmentShader:Jf}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new dt;g.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Lt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let p=this.type;this.render=function(E,w,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const F=s.getRenderTarget(),x=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),j=s.state;j.setBlending(0),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const B=p!==3&&this.type===3,D=p===3&&this.type!==3;for(let I=0,L=E.length;I<L;I++){const V=E[I],K=V.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;n.copy(K.mapSize);const Q=K.getFrameExtents();if(n.multiply(Q),i.copy(K.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(i.x=Math.floor(u/Q.x),n.x=i.x*Q.x,K.mapSize.x=i.x),n.y>u&&(i.y=Math.floor(u/Q.y),n.y=i.y*Q.y,K.mapSize.y=i.y)),K.map===null||B===!0||D===!0){const X=this.type!==3?{minFilter:1003,magFilter:1003}:{};K.map!==null&&K.map.dispose(),K.map=new bn(n.x,n.y,X),K.map.texture.name=V.name+".shadowMap",K.camera.updateProjectionMatrix()}s.setRenderTarget(K.map),s.clear();const q=K.getViewportCount();for(let X=0;X<q;X++){const O=K.getViewport(X);a.set(i.x*O.x,i.y*O.y,i.x*O.z,i.y*O.w),j.viewport(a),K.updateMatrices(V,X),r=K.getFrustum(),S(w,R,K.camera,V,this.type)}K.isPointLightShadow!==!0&&this.type===3&&M(K,R),K.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(F,x,A)};function M(E,w){const R=e.update(v);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new bn(n.x,n.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(w,null,R,f,v,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(w,null,R,d,v,null)}function _(E,w,R,F){let x=null;const A=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(A!==void 0)x=A;else if(x=R.isPointLight===!0?c:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const j=x.uuid,B=w.uuid;let D=l[j];D===void 0&&(D={},l[j]=D);let I=D[B];I===void 0&&(I=x.clone(),D[B]=I),x=I}if(x.visible=w.visible,x.wireframe=w.wireframe,F===3?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:h[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const j=s.properties.get(x);j.light=R}return x}function S(E,w,R,F,x){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===3)&&(!E.frustumCulled||r.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const B=e.update(E),D=E.material;if(Array.isArray(D)){const I=B.groups;for(let L=0,V=I.length;L<V;L++){const K=I[L],Q=D[K.materialIndex];if(Q&&Q.visible){const q=_(E,Q,F,x);s.renderBufferDirect(R,null,B,q,E,K)}}}else if(D.visible){const I=_(E,D,F,x);s.renderBufferDirect(R,null,B,I,E,null)}}const j=E.children;for(let B=0,D=j.length;B<D;B++)S(j[B],w,R,F,x)}}function Zf(s,e,t){const r=t.isWebGL2;function n(){let H=!1;const ee=new lt;let pe=null;const Le=new lt(0,0,0,0);return{setMask:function(we){pe!==we&&!H&&(s.colorMask(we,we,we,we),pe=we)},setLocked:function(we){H=we},setClear:function(we,Pe,Be,Ve,Oe){Oe===!0&&(we*=Ve,Pe*=Ve,Be*=Ve),ee.set(we,Pe,Be,Ve),Le.equals(ee)===!1&&(s.clearColor(we,Pe,Be,Ve),Le.copy(ee))},reset:function(){H=!1,pe=null,Le.set(-1,0,0,0)}}}function i(){let H=!1,ee=null,pe=null,Le=null;return{setTest:function(we){we?y(s.DEPTH_TEST):k(s.DEPTH_TEST)},setMask:function(we){ee!==we&&!H&&(s.depthMask(we),ee=we)},setFunc:function(we){if(pe!==we){switch(we){case 0:s.depthFunc(s.NEVER);break;case 1:s.depthFunc(s.ALWAYS);break;case 2:s.depthFunc(s.LESS);break;case 3:s.depthFunc(s.LEQUAL);break;case 4:s.depthFunc(s.EQUAL);break;case 5:s.depthFunc(s.GEQUAL);break;case 6:s.depthFunc(s.GREATER);break;case 7:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=we}},setLocked:function(we){H=we},setClear:function(we){Le!==we&&(s.clearDepth(we),Le=we)},reset:function(){H=!1,ee=null,pe=null,Le=null}}}function a(){let H=!1,ee=null,pe=null,Le=null,we=null,Pe=null,Be=null,Ve=null,Oe=null;return{setTest:function(ke){H||(ke?y(s.STENCIL_TEST):k(s.STENCIL_TEST))},setMask:function(ke){ee!==ke&&!H&&(s.stencilMask(ke),ee=ke)},setFunc:function(ke,$e,et){(pe!==ke||Le!==$e||we!==et)&&(s.stencilFunc(ke,$e,et),pe=ke,Le=$e,we=et)},setOp:function(ke,$e,et){(Pe!==ke||Be!==$e||Ve!==et)&&(s.stencilOp(ke,$e,et),Pe=ke,Be=$e,Ve=et)},setLocked:function(ke){H=ke},setClear:function(ke){Oe!==ke&&(s.clearStencil(ke),Oe=ke)},reset:function(){H=!1,ee=null,pe=null,Le=null,we=null,Pe=null,Be=null,Ve=null,Oe=null}}}const o=new n,c=new i,l=new a,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,v=[],m=null,p=!1,M=null,_=null,S=null,E=null,w=null,R=null,F=null,x=!1,A=null,j=null,B=null,D=null,I=null;const L=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,K=0;const Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Q)[1]),V=K>=1):Q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),V=K>=2);let q=null,X={};const O=s.getParameter(s.SCISSOR_BOX),z=s.getParameter(s.VIEWPORT),G=new lt().fromArray(O),b=new lt().fromArray(z);function P(H,ee,pe,Le){const we=new Uint8Array(4),Pe=s.createTexture();s.bindTexture(H,Pe),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Be=0;Be<pe;Be++)r&&(H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY)?s.texImage3D(ee,0,s.RGBA,1,1,Le,0,s.RGBA,s.UNSIGNED_BYTE,we):s.texImage2D(ee+Be,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,we);return Pe}const N={};N[s.TEXTURE_2D]=P(s.TEXTURE_2D,s.TEXTURE_2D,1),N[s.TEXTURE_CUBE_MAP]=P(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(N[s.TEXTURE_2D_ARRAY]=P(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),N[s.TEXTURE_3D]=P(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),y(s.DEPTH_TEST),c.setFunc(3),le(!1),Se(1),y(s.CULL_FACE),ne(0);function y(H){f[H]!==!0&&(s.enable(H),f[H]=!0)}function k(H){f[H]!==!1&&(s.disable(H),f[H]=!1)}function se(H,ee){return d[H]!==ee?(s.bindFramebuffer(H,ee),d[H]=ee,r&&(H===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ee),H===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ee)),!0):!1}function Z(H,ee){let pe=v,Le=!1;if(H)if(pe=g.get(ee),pe===void 0&&(pe=[],g.set(ee,pe)),H.isWebGLMultipleRenderTargets){const we=H.texture;if(pe.length!==we.length||pe[0]!==s.COLOR_ATTACHMENT0){for(let Pe=0,Be=we.length;Pe<Be;Pe++)pe[Pe]=s.COLOR_ATTACHMENT0+Pe;pe.length=we.length,Le=!0}}else pe[0]!==s.COLOR_ATTACHMENT0&&(pe[0]=s.COLOR_ATTACHMENT0,Le=!0);else pe[0]!==s.BACK&&(pe[0]=s.BACK,Le=!0);Le&&(t.isWebGL2?s.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function oe(H){return m!==H?(s.useProgram(H),m=H,!0):!1}const W={100:s.FUNC_ADD,101:s.FUNC_SUBTRACT,102:s.FUNC_REVERSE_SUBTRACT};if(r)W[103]=s.MIN,W[104]=s.MAX;else{const H=e.get("EXT_blend_minmax");H!==null&&(W[103]=H.MIN_EXT,W[104]=H.MAX_EXT)}const $={200:s.ZERO,201:s.ONE,202:s.SRC_COLOR,204:s.SRC_ALPHA,210:s.SRC_ALPHA_SATURATE,208:s.DST_COLOR,206:s.DST_ALPHA,203:s.ONE_MINUS_SRC_COLOR,205:s.ONE_MINUS_SRC_ALPHA,209:s.ONE_MINUS_DST_COLOR,207:s.ONE_MINUS_DST_ALPHA};function ne(H,ee,pe,Le,we,Pe,Be,Ve){if(H===0){p===!0&&(k(s.BLEND),p=!1);return}if(p===!1&&(y(s.BLEND),p=!0),H!==5){if(H!==M||Ve!==x){if((_!==100||w!==100)&&(s.blendEquation(s.FUNC_ADD),_=100,w=100),Ve)switch(H){case 1:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.ONE,s.ONE);break;case 3:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case 4:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case 1:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case 3:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case 4:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}S=null,E=null,R=null,F=null,M=H,x=Ve}return}we=we||ee,Pe=Pe||pe,Be=Be||Le,(ee!==_||we!==w)&&(s.blendEquationSeparate(W[ee],W[we]),_=ee,w=we),(pe!==S||Le!==E||Pe!==R||Be!==F)&&(s.blendFuncSeparate($[pe],$[Le],$[Pe],$[Be]),S=pe,E=Le,R=Pe,F=Be),M=H,x=!1}function fe(H,ee){H.side===2?k(s.CULL_FACE):y(s.CULL_FACE);let pe=H.side===1;ee&&(pe=!pe),le(pe),H.blending===1&&H.transparent===!1?ne(0):ne(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),o.setMask(H.colorWrite);const Le=H.stencilWrite;l.setTest(Le),Le&&(l.setMask(H.stencilWriteMask),l.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),l.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),_e(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?y(s.SAMPLE_ALPHA_TO_COVERAGE):k(s.SAMPLE_ALPHA_TO_COVERAGE)}function le(H){A!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),A=H)}function Se(H){H!==0?(y(s.CULL_FACE),H!==j&&(H===1?s.cullFace(s.BACK):H===2?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):k(s.CULL_FACE),j=H}function ce(H){H!==B&&(V&&s.lineWidth(H),B=H)}function _e(H,ee,pe){H?(y(s.POLYGON_OFFSET_FILL),(D!==ee||I!==pe)&&(s.polygonOffset(ee,pe),D=ee,I=pe)):k(s.POLYGON_OFFSET_FILL)}function Ee(H){H?y(s.SCISSOR_TEST):k(s.SCISSOR_TEST)}function he(H){H===void 0&&(H=s.TEXTURE0+L-1),q!==H&&(s.activeTexture(H),q=H)}function C(H,ee,pe){pe===void 0&&(q===null?pe=s.TEXTURE0+L-1:pe=q);let Le=X[pe];Le===void 0&&(Le={type:void 0,texture:void 0},X[pe]=Le),(Le.type!==H||Le.texture!==ee)&&(q!==pe&&(s.activeTexture(pe),q=pe),s.bindTexture(H,ee||N[H]),Le.type=H,Le.texture=ee)}function T(){const H=X[q];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Y(){try{s.compressedTexImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ie(){try{s.compressedTexImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function me(){try{s.texSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function de(){try{s.texSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Me(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ve(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function re(){try{s.texStorage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ae(){try{s.texStorage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ce(){try{s.texImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Te(){try{s.texImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ye(H){G.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),G.copy(H))}function xe(H){b.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),b.copy(H))}function De(H,ee){let pe=h.get(ee);pe===void 0&&(pe=new WeakMap,h.set(ee,pe));let Le=pe.get(H);Le===void 0&&(Le=s.getUniformBlockIndex(ee,H.name),pe.set(H,Le))}function Ie(H,ee){const Le=h.get(ee).get(H);u.get(ee)!==Le&&(s.uniformBlockBinding(ee,Le,H.__bindingPointIndex),u.set(ee,Le))}function je(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),r===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},q=null,X={},d={},g=new WeakMap,v=[],m=null,p=!1,M=null,_=null,S=null,E=null,w=null,R=null,F=null,x=!1,A=null,j=null,B=null,D=null,I=null,G.set(0,0,s.canvas.width,s.canvas.height),b.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:y,disable:k,bindFramebuffer:se,drawBuffers:Z,useProgram:oe,setBlending:ne,setMaterial:fe,setFlipSided:le,setCullFace:Se,setLineWidth:ce,setPolygonOffset:_e,setScissorTest:Ee,activeTexture:he,bindTexture:C,unbindTexture:T,compressedTexImage2D:Y,compressedTexImage3D:ie,texImage2D:Ce,texImage3D:Te,updateUBOMapping:De,uniformBlockBinding:Ie,texStorage2D:re,texStorage3D:Ae,texSubImage2D:me,texSubImage3D:de,compressedTexSubImage2D:Me,compressedTexSubImage3D:ve,scissor:ye,viewport:xe,reset:je}}function Qf(s,e,t,r,n,i,a){const o=n.isWebGL2,c=n.maxTextures,l=n.maxCubemapSize,u=n.maxTextureSize,h=n.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let v;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(C,T){return p?new OffscreenCanvas(C,T):wr("canvas")}function _(C,T,Y,ie){let me=1;if((C.width>ie||C.height>ie)&&(me=ie/Math.max(C.width,C.height)),me<1||T===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const de=T?ol:Math.floor,Me=de(me*C.width),ve=de(me*C.height);v===void 0&&(v=M(Me,ve));const re=Y?M(Me,ve):v;return re.width=Me,re.height=ve,re.getContext("2d").drawImage(C,0,0,Me,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Me+"x"+ve+")."),re}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function S(C){return ia(C.width)&&ia(C.height)}function E(C){return o?!1:C.wrapS!==1001||C.wrapT!==1001||C.minFilter!==1003&&C.minFilter!==1006}function w(C,T){return C.generateMipmaps&&T&&C.minFilter!==1003&&C.minFilter!==1006}function R(C){s.generateMipmap(C)}function F(C,T,Y,ie,me=!1){if(o===!1)return T;if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let de=T;return T===s.RED&&(Y===s.FLOAT&&(de=s.R32F),Y===s.HALF_FLOAT&&(de=s.R16F),Y===s.UNSIGNED_BYTE&&(de=s.R8)),T===s.RG&&(Y===s.FLOAT&&(de=s.RG32F),Y===s.HALF_FLOAT&&(de=s.RG16F),Y===s.UNSIGNED_BYTE&&(de=s.RG8)),T===s.RGBA&&(Y===s.FLOAT&&(de=s.RGBA32F),Y===s.HALF_FLOAT&&(de=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(de=ie===Xe&&me===!1?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)),(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function x(C,T,Y){return w(C,Y)===!0||C.isFramebufferTexture&&C.minFilter!==1003&&C.minFilter!==1006?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function A(C){return C===1003||C===1004||C===1005?s.NEAREST:s.LINEAR}function j(C){const T=C.target;T.removeEventListener("dispose",j),D(T),T.isVideoTexture&&g.delete(T)}function B(C){const T=C.target;T.removeEventListener("dispose",B),L(T)}function D(C){const T=r.get(C);if(T.__webglInit===void 0)return;const Y=C.source,ie=m.get(Y);if(ie){const me=ie[T.__cacheKey];me.usedTimes--,me.usedTimes===0&&I(C),Object.keys(ie).length===0&&m.delete(Y)}r.remove(C)}function I(C){const T=r.get(C);s.deleteTexture(T.__webglTexture);const Y=C.source,ie=m.get(Y);delete ie[T.__cacheKey],a.memory.textures--}function L(C){const T=C.texture,Y=r.get(C),ie=r.get(T);if(ie.__webglTexture!==void 0&&(s.deleteTexture(ie.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let me=0;me<6;me++)s.deleteFramebuffer(Y.__webglFramebuffer[me]),Y.__webglDepthbuffer&&s.deleteRenderbuffer(Y.__webglDepthbuffer[me]);else{if(s.deleteFramebuffer(Y.__webglFramebuffer),Y.__webglDepthbuffer&&s.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let me=0;me<Y.__webglColorRenderbuffer.length;me++)Y.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(Y.__webglColorRenderbuffer[me]);Y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let me=0,de=T.length;me<de;me++){const Me=r.get(T[me]);Me.__webglTexture&&(s.deleteTexture(Me.__webglTexture),a.memory.textures--),r.remove(T[me])}r.remove(T),r.remove(C)}let V=0;function K(){V=0}function Q(){const C=V;return C>=c&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+c),V+=1,C}function q(C){const T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function X(C,T){const Y=r.get(C);if(C.isVideoTexture&&Ee(C),C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){const ie=C.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(Y,C,T);return}}t.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+T)}function O(C,T){const Y=r.get(C);if(C.version>0&&Y.__version!==C.version){k(Y,C,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+T)}function z(C,T){const Y=r.get(C);if(C.version>0&&Y.__version!==C.version){k(Y,C,T);return}t.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+T)}function G(C,T){const Y=r.get(C);if(C.version>0&&Y.__version!==C.version){se(Y,C,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+T)}const b={1e3:s.REPEAT,1001:s.CLAMP_TO_EDGE,1002:s.MIRRORED_REPEAT},P={1003:s.NEAREST,1004:s.NEAREST_MIPMAP_NEAREST,1005:s.NEAREST_MIPMAP_LINEAR,1006:s.LINEAR,1007:s.LINEAR_MIPMAP_NEAREST,1008:s.LINEAR_MIPMAP_LINEAR};function N(C,T,Y){if(Y?(s.texParameteri(C,s.TEXTURE_WRAP_S,b[T.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,b[T.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,b[T.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,P[T.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,P[T.minFilter])):(s.texParameteri(C,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(C,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(T.wrapS!==1001||T.wrapT!==1001)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(C,s.TEXTURE_MAG_FILTER,A(T.magFilter)),s.texParameteri(C,s.TEXTURE_MIN_FILTER,A(T.minFilter)),T.minFilter!==1003&&T.minFilter!==1006&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===1003||T.minFilter!==1005&&T.minFilter!==1008||T.type===1015&&e.has("OES_texture_float_linear")===!1||o===!1&&T.type===1016&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||r.get(T).__currentAnisotropy)&&(s.texParameterf(C,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,n.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy)}}function y(C,T){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",j));const ie=T.source;let me=m.get(ie);me===void 0&&(me={},m.set(ie,me));const de=q(T);if(de!==C.__cacheKey){me[de]===void 0&&(me[de]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),me[de].usedTimes++;const Me=me[C.__cacheKey];Me!==void 0&&(me[C.__cacheKey].usedTimes--,Me.usedTimes===0&&I(T)),C.__cacheKey=de,C.__webglTexture=me[de].texture}return Y}function k(C,T,Y){let ie=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ie=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ie=s.TEXTURE_3D);const me=y(C,T),de=T.source;t.bindTexture(ie,C.__webglTexture,s.TEXTURE0+Y);const Me=r.get(de);if(de.version!==Me.__version||me===!0){t.activeTexture(s.TEXTURE0+Y),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const ve=E(T)&&S(T.image)===!1;let re=_(T.image,ve,!1,u);re=he(T,re);const Ae=S(re)||o,Ce=i.convert(T.format,T.colorSpace);let Te=i.convert(T.type),ye=F(T.internalFormat,Ce,Te,T.colorSpace);N(ie,T,Ae);let xe;const De=T.mipmaps,Ie=o&&T.isVideoTexture!==!0,je=Me.__version===void 0||me===!0,H=x(T,re,Ae);if(T.isDepthTexture)ye=s.DEPTH_COMPONENT,o?T.type===1015?ye=s.DEPTH_COMPONENT32F:T.type===1014?ye=s.DEPTH_COMPONENT24:T.type===1020?ye=s.DEPTH24_STENCIL8:ye=s.DEPTH_COMPONENT16:T.type===1015&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===1026&&ye===s.DEPTH_COMPONENT&&T.type!==1012&&T.type!==1014&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=1014,Te=i.convert(T.type)),T.format===1027&&ye===s.DEPTH_COMPONENT&&(ye=s.DEPTH_STENCIL,T.type!==1020&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=1020,Te=i.convert(T.type))),je&&(Ie?t.texStorage2D(s.TEXTURE_2D,1,ye,re.width,re.height):t.texImage2D(s.TEXTURE_2D,0,ye,re.width,re.height,0,Ce,Te,null));else if(T.isDataTexture)if(De.length>0&&Ae){Ie&&je&&t.texStorage2D(s.TEXTURE_2D,H,ye,De[0].width,De[0].height);for(let ee=0,pe=De.length;ee<pe;ee++)xe=De[ee],Ie?t.texSubImage2D(s.TEXTURE_2D,ee,0,0,xe.width,xe.height,Ce,Te,xe.data):t.texImage2D(s.TEXTURE_2D,ee,ye,xe.width,xe.height,0,Ce,Te,xe.data);T.generateMipmaps=!1}else Ie?(je&&t.texStorage2D(s.TEXTURE_2D,H,ye,re.width,re.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,re.width,re.height,Ce,Te,re.data)):t.texImage2D(s.TEXTURE_2D,0,ye,re.width,re.height,0,Ce,Te,re.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ie&&je&&t.texStorage3D(s.TEXTURE_2D_ARRAY,H,ye,De[0].width,De[0].height,re.depth);for(let ee=0,pe=De.length;ee<pe;ee++)xe=De[ee],T.format!==1023?Ce!==null?Ie?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,xe.width,xe.height,re.depth,Ce,xe.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ee,ye,xe.width,xe.height,re.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?t.texSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,xe.width,xe.height,re.depth,Ce,Te,xe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ee,ye,xe.width,xe.height,re.depth,0,Ce,Te,xe.data)}else{Ie&&je&&t.texStorage2D(s.TEXTURE_2D,H,ye,De[0].width,De[0].height);for(let ee=0,pe=De.length;ee<pe;ee++)xe=De[ee],T.format!==1023?Ce!==null?Ie?t.compressedTexSubImage2D(s.TEXTURE_2D,ee,0,0,xe.width,xe.height,Ce,xe.data):t.compressedTexImage2D(s.TEXTURE_2D,ee,ye,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?t.texSubImage2D(s.TEXTURE_2D,ee,0,0,xe.width,xe.height,Ce,Te,xe.data):t.texImage2D(s.TEXTURE_2D,ee,ye,xe.width,xe.height,0,Ce,Te,xe.data)}else if(T.isDataArrayTexture)Ie?(je&&t.texStorage3D(s.TEXTURE_2D_ARRAY,H,ye,re.width,re.height,re.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Ce,Te,re.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ye,re.width,re.height,re.depth,0,Ce,Te,re.data);else if(T.isData3DTexture)Ie?(je&&t.texStorage3D(s.TEXTURE_3D,H,ye,re.width,re.height,re.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Ce,Te,re.data)):t.texImage3D(s.TEXTURE_3D,0,ye,re.width,re.height,re.depth,0,Ce,Te,re.data);else if(T.isFramebufferTexture){if(je)if(Ie)t.texStorage2D(s.TEXTURE_2D,H,ye,re.width,re.height);else{let ee=re.width,pe=re.height;for(let Le=0;Le<H;Le++)t.texImage2D(s.TEXTURE_2D,Le,ye,ee,pe,0,Ce,Te,null),ee>>=1,pe>>=1}}else if(De.length>0&&Ae){Ie&&je&&t.texStorage2D(s.TEXTURE_2D,H,ye,De[0].width,De[0].height);for(let ee=0,pe=De.length;ee<pe;ee++)xe=De[ee],Ie?t.texSubImage2D(s.TEXTURE_2D,ee,0,0,Ce,Te,xe):t.texImage2D(s.TEXTURE_2D,ee,ye,Ce,Te,xe);T.generateMipmaps=!1}else Ie?(je&&t.texStorage2D(s.TEXTURE_2D,H,ye,re.width,re.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ce,Te,re)):t.texImage2D(s.TEXTURE_2D,0,ye,Ce,Te,re);w(T,Ae)&&R(ie),Me.__version=de.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function se(C,T,Y){if(T.image.length!==6)return;const ie=y(C,T),me=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+Y);const de=r.get(me);if(me.version!==de.__version||ie===!0){t.activeTexture(s.TEXTURE0+Y),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const Me=T.isCompressedTexture||T.image[0].isCompressedTexture,ve=T.image[0]&&T.image[0].isDataTexture,re=[];for(let ee=0;ee<6;ee++)!Me&&!ve?re[ee]=_(T.image[ee],!1,!0,l):re[ee]=ve?T.image[ee].image:T.image[ee],re[ee]=he(T,re[ee]);const Ae=re[0],Ce=S(Ae)||o,Te=i.convert(T.format,T.colorSpace),ye=i.convert(T.type),xe=F(T.internalFormat,Te,ye,T.colorSpace),De=o&&T.isVideoTexture!==!0,Ie=de.__version===void 0||ie===!0;let je=x(T,Ae,Ce);N(s.TEXTURE_CUBE_MAP,T,Ce);let H;if(Me){De&&Ie&&t.texStorage2D(s.TEXTURE_CUBE_MAP,je,xe,Ae.width,Ae.height);for(let ee=0;ee<6;ee++){H=re[ee].mipmaps;for(let pe=0;pe<H.length;pe++){const Le=H[pe];T.format!==1023?Te!==null?De?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,0,0,Le.width,Le.height,Te,Le.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,xe,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,0,0,Le.width,Le.height,Te,ye,Le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,xe,Le.width,Le.height,0,Te,ye,Le.data)}}}else{H=T.mipmaps,De&&Ie&&(H.length>0&&je++,t.texStorage2D(s.TEXTURE_CUBE_MAP,je,xe,re[0].width,re[0].height));for(let ee=0;ee<6;ee++)if(ve){De?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,re[ee].width,re[ee].height,Te,ye,re[ee].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,xe,re[ee].width,re[ee].height,0,Te,ye,re[ee].data);for(let pe=0;pe<H.length;pe++){const we=H[pe].image[ee].image;De?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,0,0,we.width,we.height,Te,ye,we.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,xe,we.width,we.height,0,Te,ye,we.data)}}else{De?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Te,ye,re[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,xe,Te,ye,re[ee]);for(let pe=0;pe<H.length;pe++){const Le=H[pe];De?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,0,0,Te,ye,Le.image[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,xe,Te,ye,Le.image[ee])}}}w(T,Ce)&&R(s.TEXTURE_CUBE_MAP),de.__version=me.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function Z(C,T,Y,ie,me){const de=i.convert(Y.format,Y.colorSpace),Me=i.convert(Y.type),ve=F(Y.internalFormat,de,Me,Y.colorSpace);r.get(T).__hasExternalTextures||(me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?t.texImage3D(me,0,ve,T.width,T.height,T.depth,0,de,Me,null):t.texImage2D(me,0,ve,T.width,T.height,0,de,Me,null)),t.bindFramebuffer(s.FRAMEBUFFER,C),_e(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,me,r.get(Y).__webglTexture,0,ce(T)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ie,me,r.get(Y).__webglTexture,0),t.bindFramebuffer(s.FRAMEBUFFER,null)}function oe(C,T,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,C),T.depthBuffer&&!T.stencilBuffer){let ie=s.DEPTH_COMPONENT16;if(Y||_e(T)){const me=T.depthTexture;me&&me.isDepthTexture&&(me.type===1015?ie=s.DEPTH_COMPONENT32F:me.type===1014&&(ie=s.DEPTH_COMPONENT24));const de=ce(T);_e(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,de,ie,T.width,T.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,de,ie,T.width,T.height)}else s.renderbufferStorage(s.RENDERBUFFER,ie,T.width,T.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,C)}else if(T.depthBuffer&&T.stencilBuffer){const ie=ce(T);Y&&_e(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,s.DEPTH24_STENCIL8,T.width,T.height):_e(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ie,s.DEPTH24_STENCIL8,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,C)}else{const ie=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let me=0;me<ie.length;me++){const de=ie[me],Me=i.convert(de.format,de.colorSpace),ve=i.convert(de.type),re=F(de.internalFormat,Me,ve,de.colorSpace),Ae=ce(T);Y&&_e(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,re,T.width,T.height):_e(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,re,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,re,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function W(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),X(T.depthTexture,0);const ie=r.get(T.depthTexture).__webglTexture,me=ce(T);if(T.depthTexture.format===1026)_e(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0);else if(T.depthTexture.format===1027)_e(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function $(C){const T=r.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");W(T.__webglFramebuffer,C)}else if(Y){T.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ie]),T.__webglDepthbuffer[ie]=s.createRenderbuffer(),oe(T.__webglDepthbuffer[ie],C,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=s.createRenderbuffer(),oe(T.__webglDepthbuffer,C,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function ne(C,T,Y){const ie=r.get(C);T!==void 0&&Z(ie.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D),Y!==void 0&&$(C)}function fe(C){const T=C.texture,Y=r.get(C),ie=r.get(T);C.addEventListener("dispose",B),C.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture()),ie.__version=T.version,a.memory.textures++);const me=C.isWebGLCubeRenderTarget===!0,de=C.isWebGLMultipleRenderTargets===!0,Me=S(C)||o;if(me){Y.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)Y.__webglFramebuffer[ve]=s.createFramebuffer()}else{if(Y.__webglFramebuffer=s.createFramebuffer(),de)if(n.drawBuffers){const ve=C.texture;for(let re=0,Ae=ve.length;re<Ae;re++){const Ce=r.get(ve[re]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&_e(C)===!1){const ve=de?T:[T];Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let re=0;re<ve.length;re++){const Ae=ve[re];Y.__webglColorRenderbuffer[re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[re]);const Ce=i.convert(Ae.format,Ae.colorSpace),Te=i.convert(Ae.type),ye=F(Ae.internalFormat,Ce,Te,Ae.colorSpace,C.isXRRenderTarget===!0),xe=ce(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,ye,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.RENDERBUFFER,Y.__webglColorRenderbuffer[re])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),oe(Y.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(me){t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture),N(s.TEXTURE_CUBE_MAP,T,Me);for(let ve=0;ve<6;ve++)Z(Y.__webglFramebuffer[ve],C,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ve);w(T,Me)&&R(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){const ve=C.texture;for(let re=0,Ae=ve.length;re<Ae;re++){const Ce=ve[re],Te=r.get(Ce);t.bindTexture(s.TEXTURE_2D,Te.__webglTexture),N(s.TEXTURE_2D,Ce,Me),Z(Y.__webglFramebuffer,C,Ce,s.COLOR_ATTACHMENT0+re,s.TEXTURE_2D),w(Ce,Me)&&R(s.TEXTURE_2D)}t.unbindTexture()}else{let ve=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?ve=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ve,ie.__webglTexture),N(ve,T,Me),Z(Y.__webglFramebuffer,C,T,s.COLOR_ATTACHMENT0,ve),w(T,Me)&&R(ve),t.unbindTexture()}C.depthBuffer&&$(C)}function le(C){const T=S(C)||o,Y=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ie=0,me=Y.length;ie<me;ie++){const de=Y[ie];if(w(de,T)){const Me=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ve=r.get(de).__webglTexture;t.bindTexture(Me,ve),R(Me),t.unbindTexture()}}}function Se(C){if(o&&C.samples>0&&_e(C)===!1){const T=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],Y=C.width,ie=C.height;let me=s.COLOR_BUFFER_BIT;const de=[],Me=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=r.get(C),re=C.isWebGLMultipleRenderTargets===!0;if(re)for(let Ae=0;Ae<T.length;Ae++)t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Ae=0;Ae<T.length;Ae++){de.push(s.COLOR_ATTACHMENT0+Ae),C.depthBuffer&&de.push(Me);const Ce=ve.__ignoreDepthValues!==void 0?ve.__ignoreDepthValues:!1;if(Ce===!1&&(C.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),re&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ve.__webglColorRenderbuffer[Ae]),Ce===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Me]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Me])),re){const Te=r.get(T[Ae]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Te,0)}s.blitFramebuffer(0,0,Y,ie,0,0,Y,ie,me,s.NEAREST),d&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,de)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),re)for(let Ae=0;Ae<T.length;Ae++){t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,ve.__webglColorRenderbuffer[Ae]);const Ce=r.get(T[Ae]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,Ce,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}}function ce(C){return Math.min(h,C.samples)}function _e(C){const T=r.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ee(C){const T=a.render.frame;g.get(C)!==T&&(g.set(C,T),C.update())}function he(C,T){const Y=C.colorSpace,ie=C.format,me=C.type;return C.isCompressedTexture===!0||C.format===1035||Y!==Qt&&Y!==En&&(Y===Xe?o===!1?e.has("EXT_sRGB")===!0&&ie===1023?(C.format=1035,C.minFilter=1006,C.generateMipmaps=!1):T=mo.sRGBToLinear(T):(ie!==1023||me!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),T}this.allocateTextureUnit=Q,this.resetTextureUnits=K,this.setTexture2D=X,this.setTexture2DArray=O,this.setTexture3D=z,this.setTextureCube=G,this.rebindTextures=ne,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=_e}function $f(s,e,t){const r=t.isWebGL2;function n(i,a=En){let o;if(i===1009)return s.UNSIGNED_BYTE;if(i===1017)return s.UNSIGNED_SHORT_4_4_4_4;if(i===1018)return s.UNSIGNED_SHORT_5_5_5_1;if(i===1010)return s.BYTE;if(i===1011)return s.SHORT;if(i===1012)return s.UNSIGNED_SHORT;if(i===1013)return s.INT;if(i===1014)return s.UNSIGNED_INT;if(i===1015)return s.FLOAT;if(i===1016)return r?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(i===1021)return s.ALPHA;if(i===1023)return s.RGBA;if(i===1024)return s.LUMINANCE;if(i===1025)return s.LUMINANCE_ALPHA;if(i===1026)return s.DEPTH_COMPONENT;if(i===1027)return s.DEPTH_STENCIL;if(i===1035)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(i===1028)return s.RED;if(i===1029)return s.RED_INTEGER;if(i===1030)return s.RG;if(i===1031)return s.RG_INTEGER;if(i===1033)return s.RGBA_INTEGER;if(i===33776||i===33777||i===33778||i===33779)if(a===Xe)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===33776)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===33777)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===33778)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===33779)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===33776)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===33777)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===33778)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===33779)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===35840||i===35841||i===35842||i===35843)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===35840)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===35841)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===35842)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===35843)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===36196)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===37492||i===37496)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===37492)return a===Xe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===37496)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===37808||i===37809||i===37810||i===37811||i===37812||i===37813||i===37814||i===37815||i===37816||i===37817||i===37818||i===37819||i===37820||i===37821)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===37808)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===37809)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===37810)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===37811)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===37812)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===37813)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===37814)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===37815)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===37816)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===37817)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===37818)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===37819)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===37820)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===37821)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===36492)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===36492)return a===Xe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(i===36283||i===36284||i===36285||i===36286)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===36492)return o.COMPRESSED_RED_RGTC1_EXT;if(i===36284)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===36285)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===36286)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===1020?r?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[i]!==void 0?s[i]:null}return{convert:n}}class ed extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class dr extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const td={type:"move"};class ps{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let n=null,i=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,r),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,r),i!==null&&(c.matrix.fromArray(i.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,i.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(i.linearVelocity)):c.hasLinearVelocity=!1,i.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(i.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,r),n===null&&i!==null&&(n=i),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(td)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=i!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new dr;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class nd extends bt{constructor(e,t,r,n,i,a,o,c,l,u){if(u=u!==void 0?u:1026,u!==1026&&u!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===1026&&(r=1014),r===void 0&&u===1027&&(r=1020),super(null,n,i,a,o,c,u,r,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:1003,this.minFilter=c!==void 0?c:1003,this.flipY=!1,this.generateMipmaps=!1}}class id extends Rn{constructor(e,t){super();const r=this;let n=null,i=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null;const v=t.getContextAttributes();let m=null,p=null;const M=[],_=[],S=new Set,E=new Map,w=new Ht;w.layers.enable(1),w.viewport=new lt;const R=new Ht;R.layers.enable(2),R.viewport=new lt;const F=[w,R],x=new ed;x.layers.enable(1),x.layers.enable(2);let A=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let b=M[G];return b===void 0&&(b=new ps,M[G]=b),b.getTargetRaySpace()},this.getControllerGrip=function(G){let b=M[G];return b===void 0&&(b=new ps,M[G]=b),b.getGripSpace()},this.getHand=function(G){let b=M[G];return b===void 0&&(b=new ps,M[G]=b),b.getHandSpace()};function B(G){const b=_.indexOf(G.inputSource);if(b===-1)return;const P=M[b];P!==void 0&&(P.update(G.inputSource,G.frame,l||a),P.dispatchEvent({type:G.type,data:G.inputSource}))}function D(){n.removeEventListener("select",B),n.removeEventListener("selectstart",B),n.removeEventListener("selectend",B),n.removeEventListener("squeeze",B),n.removeEventListener("squeezestart",B),n.removeEventListener("squeezeend",B),n.removeEventListener("end",D),n.removeEventListener("inputsourceschange",I);for(let G=0;G<M.length;G++){const b=_[G];b!==null&&(_[G]=null,M[G].disconnect(b))}A=null,j=null,e.setRenderTarget(m),d=null,f=null,h=null,n=null,p=null,z.stop(),r.isPresenting=!1,r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){i=G,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(G){if(n=G,n!==null){if(m=e.getRenderTarget(),n.addEventListener("select",B),n.addEventListener("selectstart",B),n.addEventListener("selectend",B),n.addEventListener("squeeze",B),n.addEventListener("squeezestart",B),n.addEventListener("squeezeend",B),n.addEventListener("end",D),n.addEventListener("inputsourceschange",I),v.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const b={antialias:n.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:i};d=new XRWebGLLayer(n,t,b),n.updateRenderState({baseLayer:d}),p=new bn(d.framebufferWidth,d.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let b=null,P=null,N=null;v.depth&&(N=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,b=v.stencil?1027:1026,P=v.stencil?1020:1014);const y={colorFormat:t.RGBA8,depthFormat:N,scaleFactor:i};h=new XRWebGLBinding(n,t),f=h.createProjectionLayer(y),n.updateRenderState({layers:[f]}),p=new bn(f.textureWidth,f.textureHeight,{format:1023,type:1009,depthTexture:new nd(f.textureWidth,f.textureHeight,P,void 0,void 0,void 0,void 0,void 0,void 0,b),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const k=e.properties.get(p);k.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await n.requestReferenceSpace(o),z.setContext(n),z.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function I(G){for(let b=0;b<G.removed.length;b++){const P=G.removed[b],N=_.indexOf(P);N>=0&&(_[N]=null,M[N].disconnect(P))}for(let b=0;b<G.added.length;b++){const P=G.added[b];let N=_.indexOf(P);if(N===-1){for(let k=0;k<M.length;k++)if(k>=_.length){_.push(P),N=k;break}else if(_[k]===null){_[k]=P,N=k;break}if(N===-1)break}const y=M[N];y&&y.connect(P)}}const L=new J,V=new J;function K(G,b,P){L.setFromMatrixPosition(b.matrixWorld),V.setFromMatrixPosition(P.matrixWorld);const N=L.distanceTo(V),y=b.projectionMatrix.elements,k=P.projectionMatrix.elements,se=y[14]/(y[10]-1),Z=y[14]/(y[10]+1),oe=(y[9]+1)/y[5],W=(y[9]-1)/y[5],$=(y[8]-1)/y[0],ne=(k[8]+1)/k[0],fe=se*$,le=se*ne,Se=N/(-$+ne),ce=Se*-$;b.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ce),G.translateZ(Se),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const _e=se+Se,Ee=Z+Se,he=fe-ce,C=le+(N-ce),T=oe*Z/Ee*_e,Y=W*Z/Ee*_e;G.projectionMatrix.makePerspective(he,C,T,Y,_e,Ee),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function Q(G,b){b===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(b.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(n===null)return;x.near=R.near=w.near=G.near,x.far=R.far=w.far=G.far,(A!==x.near||j!==x.far)&&(n.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,j=x.far);const b=G.parent,P=x.cameras;Q(x,b);for(let N=0;N<P.length;N++)Q(P[N],b);P.length===2?K(x,w,R):x.projectionMatrix.copy(w.projectionMatrix),q(G,x,b)};function q(G,b,P){P===null?G.matrix.copy(b.matrixWorld):(G.matrix.copy(P.matrixWorld),G.matrix.invert(),G.matrix.multiply(b.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0);const N=G.children;for(let y=0,k=N.length;y<k;y++)N[y].updateMatrixWorld(!0);G.projectionMatrix.copy(b.projectionMatrix),G.projectionMatrixInverse.copy(b.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Es*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(G){c=G,f!==null&&(f.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)},this.getPlanes=function(){return S};let X=null;function O(G,b){if(u=b.getViewerPose(l||a),g=b,u!==null){const P=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let N=!1;P.length!==x.cameras.length&&(x.cameras.length=0,N=!0);for(let y=0;y<P.length;y++){const k=P[y];let se=null;if(d!==null)se=d.getViewport(k);else{const oe=h.getViewSubImage(f,k);se=oe.viewport,y===0&&(e.setRenderTargetTextures(p,oe.colorTexture,f.ignoreDepthValues?void 0:oe.depthStencilTexture),e.setRenderTarget(p))}let Z=F[y];Z===void 0&&(Z=new Ht,Z.layers.enable(y),Z.viewport=new lt,F[y]=Z),Z.matrix.fromArray(k.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(k.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(se.x,se.y,se.width,se.height),y===0&&(x.matrix.copy(Z.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),N===!0&&x.cameras.push(Z)}}for(let P=0;P<M.length;P++){const N=_[P],y=M[P];N!==null&&y!==void 0&&y.update(N,b,l||a)}if(X&&X(G,b),b.detectedPlanes){r.dispatchEvent({type:"planesdetected",data:b.detectedPlanes});let P=null;for(const N of S)b.detectedPlanes.has(N)||(P===null&&(P=[]),P.push(N));if(P!==null)for(const N of P)S.delete(N),E.delete(N),r.dispatchEvent({type:"planeremoved",data:N});for(const N of b.detectedPlanes)if(!S.has(N))S.add(N),E.set(N,b.lastChangedTime),r.dispatchEvent({type:"planeadded",data:N});else{const y=E.get(N);N.lastChangedTime>y&&(E.set(N,N.lastChangedTime),r.dispatchEvent({type:"planechanged",data:N}))}}g=null}const z=new Ao;z.setAnimationLoop(O),this.setAnimationLoop=function(G){X=G},this.dispose=function(){}}}function rd(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function r(m,p){p.color.getRGB(m.fogColor.value,yo(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,M,_,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(m,p):p.isMeshToonMaterial?(i(m,p),h(m,p)):p.isMeshPhongMaterial?(i(m,p),u(m,p)):p.isMeshStandardMaterial?(i(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(i(m,p),g(m,p)):p.isMeshDepthMaterial?i(m,p):p.isMeshDistanceMaterial?(i(m,p),v(m,p)):p.isMeshNormalMaterial?i(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,M,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===1&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===1&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const _=s.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===1&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function sd(s,e,t,r){let n={},i={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(M,_){const S=_.program;r.uniformBlockBinding(M,S)}function l(M,_){let S=n[M.id];S===void 0&&(g(M),S=u(M),n[M.id]=S,M.addEventListener("dispose",m));const E=_.program;r.updateUBOMapping(M,E);const w=e.render.frame;i[M.id]!==w&&(f(M),i[M.id]=w)}function u(M){const _=h();M.__bindingPointIndex=_;const S=s.createBuffer(),E=M.__size,w=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,E,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,S),S}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const _=n[M.id],S=M.uniforms,E=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let w=0,R=S.length;w<R;w++){const F=S[w];if(d(F,w,E)===!0){const x=F.__offset,A=Array.isArray(F.value)?F.value:[F.value];let j=0;for(let B=0;B<A.length;B++){const D=A[B],I=v(D);typeof D=="number"?(F.__data[0]=D,s.bufferSubData(s.UNIFORM_BUFFER,x+j,F.__data)):D.isMatrix3?(F.__data[0]=D.elements[0],F.__data[1]=D.elements[1],F.__data[2]=D.elements[2],F.__data[3]=D.elements[0],F.__data[4]=D.elements[3],F.__data[5]=D.elements[4],F.__data[6]=D.elements[5],F.__data[7]=D.elements[0],F.__data[8]=D.elements[6],F.__data[9]=D.elements[7],F.__data[10]=D.elements[8],F.__data[11]=D.elements[0]):(D.toArray(F.__data,j),j+=I.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,x,F.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(M,_,S){const E=M.value;if(S[_]===void 0){if(typeof E=="number")S[_]=E;else{const w=Array.isArray(E)?E:[E],R=[];for(let F=0;F<w.length;F++)R.push(w[F].clone());S[_]=R}return!0}else if(typeof E=="number"){if(S[_]!==E)return S[_]=E,!0}else{const w=Array.isArray(S[_])?S[_]:[S[_]],R=Array.isArray(E)?E:[E];for(let F=0;F<w.length;F++){const x=w[F];if(x.equals(R[F])===!1)return x.copy(R[F]),!0}}return!1}function g(M){const _=M.uniforms;let S=0;const E=16;let w=0;for(let R=0,F=_.length;R<F;R++){const x=_[R],A={boundary:0,storage:0},j=Array.isArray(x.value)?x.value:[x.value];for(let B=0,D=j.length;B<D;B++){const I=j[B],L=v(I);A.boundary+=L.boundary,A.storage+=L.storage}if(x.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=S,R>0){w=S%E;const B=E-w;w!==0&&B-A.boundary<0&&(S+=E-w,x.__offset=S)}S+=A.storage}return w=S%E,w>0&&(S+=E-w),M.__size=S,M.__cache={},this}function v(M){const _={boundary:0,storage:0};return typeof M=="number"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function m(M){const _=M.target;_.removeEventListener("dispose",m);const S=a.indexOf(_.__bindingPointIndex);a.splice(S,1),s.deleteBuffer(n[_.id]),delete n[_.id],delete i[_.id]}function p(){for(const M in n)s.deleteBuffer(n[M]);a=[],n={},i={}}return{bind:c,update:l,dispose:p}}function ad(){const s=wr("canvas");return s.style.display="block",s}class Fo{constructor(e={}){const{canvas:t=ad(),context:r=null,depth:n=!0,stencil:i=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;r!==null?f=r.getContextAttributes().alpha:f=a;let d=null,g=null;const v=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Xe,this.useLegacyLights=!0,this.toneMapping=0,this.toneMappingExposure=1;const p=this;let M=!1,_=0,S=0,E=null,w=-1,R=null;const F=new lt,x=new lt;let A=null,j=t.width,B=t.height,D=1,I=null,L=null;const V=new lt(0,0,j,B),K=new lt(0,0,j,B);let Q=!1;const q=new bo;let X=!1,O=!1,z=null;const G=new st,b=new J,P={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function N(){return E===null?D:1}let y=r;function k(U,ae){for(let ue=0;ue<U.length;ue++){const te=U[ue],ge=t.getContext(te,ae);if(ge!==null)return ge}return null}try{const U={alpha:!0,depth:n,stencil:i,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ds}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),y===null){const ae=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&ae.shift(),y=k(ae,U),y===null)throw k(ae)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}y.getShaderPrecisionFormat===void 0&&(y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let se,Z,oe,W,$,ne,fe,le,Se,ce,_e,Ee,he,C,T,Y,ie,me,de,Me,ve,re,Ae,Ce;function Te(){se=new _h(y),Z=new fh(y,se,e),se.init(Z),re=new $f(y,se,Z),oe=new Zf(y,se,Z),W=new Mh(y),$=new Gf,ne=new Qf(y,se,oe,$,Z,re,W),fe=new ph(p),le=new vh(p),Se=new Dl(y,Z),Ae=new uh(y,se,Se,Z),ce=new xh(y,Se,W,Ae),_e=new bh(y,ce,Se,W),de=new Th(y,Z,ne),Y=new dh($),Ee=new Bf(p,fe,le,se,Z,Ae,Y),he=new rd(p,$),C=new zf,T=new Yf(se,Z),me=new ch(p,fe,le,oe,_e,f,c),ie=new Kf(p,_e,Z),Ce=new sd(y,W,Z,oe),Me=new hh(y,se,W,Z),ve=new Sh(y,se,W,Z),W.programs=Ee.programs,p.capabilities=Z,p.extensions=se,p.properties=$,p.renderLists=C,p.shadowMap=ie,p.state=oe,p.info=W}Te();const ye=new id(p,y);this.xr=ye,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const U=se.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=se.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(U){U!==void 0&&(D=U,this.setSize(j,B,!1))},this.getSize=function(U){return U.set(j,B)},this.setSize=function(U,ae,ue=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=U,B=ae,t.width=Math.floor(U*D),t.height=Math.floor(ae*D),ue===!0&&(t.style.width=U+"px",t.style.height=ae+"px"),this.setViewport(0,0,U,ae)},this.getDrawingBufferSize=function(U){return U.set(j*D,B*D).floor()},this.setDrawingBufferSize=function(U,ae,ue){j=U,B=ae,D=ue,t.width=Math.floor(U*ue),t.height=Math.floor(ae*ue),this.setViewport(0,0,U,ae)},this.getCurrentViewport=function(U){return U.copy(F)},this.getViewport=function(U){return U.copy(V)},this.setViewport=function(U,ae,ue,te){U.isVector4?V.set(U.x,U.y,U.z,U.w):V.set(U,ae,ue,te),oe.viewport(F.copy(V).multiplyScalar(D).floor())},this.getScissor=function(U){return U.copy(K)},this.setScissor=function(U,ae,ue,te){U.isVector4?K.set(U.x,U.y,U.z,U.w):K.set(U,ae,ue,te),oe.scissor(x.copy(K).multiplyScalar(D).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(U){oe.setScissorTest(Q=U)},this.setOpaqueSort=function(U){I=U},this.setTransparentSort=function(U){L=U},this.getClearColor=function(U){return U.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(U=!0,ae=!0,ue=!0){let te=0;U&&(te|=y.COLOR_BUFFER_BIT),ae&&(te|=y.DEPTH_BUFFER_BIT),ue&&(te|=y.STENCIL_BUFFER_BIT),y.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),C.dispose(),T.dispose(),$.dispose(),fe.dispose(),le.dispose(),_e.dispose(),Ae.dispose(),Ce.dispose(),Ee.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",we),ye.removeEventListener("sessionend",Pe),z&&(z.dispose(),z=null),Be.stop()};function xe(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const U=W.autoReset,ae=ie.enabled,ue=ie.autoUpdate,te=ie.needsUpdate,ge=ie.type;Te(),W.autoReset=U,ie.enabled=ae,ie.autoUpdate=ue,ie.needsUpdate=te,ie.type=ge}function Ie(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function je(U){const ae=U.target;ae.removeEventListener("dispose",je),H(ae)}function H(U){ee(U),$.remove(U)}function ee(U){const ae=$.get(U).programs;ae!==void 0&&(ae.forEach(function(ue){Ee.releaseProgram(ue)}),U.isShaderMaterial&&Ee.releaseShaderCache(U))}this.renderBufferDirect=function(U,ae,ue,te,ge,Fe){ae===null&&(ae=P);const Ne=ge.isMesh&&ge.matrixWorld.determinant()<0,Ge=Wt(U,ae,ue,te,ge);oe.setMaterial(te,Ne);let He=ue.index,We=1;te.wireframe===!0&&(He=ce.getWireframeAttribute(ue),We=2);const qe=ue.drawRange,Ye=ue.attributes.position;let Ze=qe.start*We,ot=(qe.start+qe.count)*We;Fe!==null&&(Ze=Math.max(Ze,Fe.start*We),ot=Math.min(ot,(Fe.start+Fe.count)*We)),He!==null?(Ze=Math.max(Ze,0),ot=Math.min(ot,He.count)):Ye!=null&&(Ze=Math.max(Ze,0),ot=Math.min(ot,Ye.count));const St=ot-Ze;if(St<0||St===1/0)return;Ae.setup(ge,te,Ge,ue,He);let Ue,tt=Me;if(He!==null&&(Ue=Se.get(He),tt=ve,tt.setIndex(Ue)),ge.isMesh)te.wireframe===!0?(oe.setLineWidth(te.wireframeLinewidth*N()),tt.setMode(y.LINES)):tt.setMode(y.TRIANGLES);else if(ge.isLine){let Je=te.linewidth;Je===void 0&&(Je=1),oe.setLineWidth(Je*N()),ge.isLineSegments?tt.setMode(y.LINES):ge.isLineLoop?tt.setMode(y.LINE_LOOP):tt.setMode(y.LINE_STRIP)}else ge.isPoints?tt.setMode(y.POINTS):ge.isSprite&&tt.setMode(y.TRIANGLES);if(ge.isInstancedMesh)tt.renderInstances(Ze,St,ge.count);else if(ue.isInstancedBufferGeometry){const Je=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,qt=Math.min(ue.instanceCount,Je);tt.renderInstances(Ze,St,qt)}else tt.render(Ze,St)},this.compile=function(U,ae){function ue(te,ge,Fe){te.transparent===!0&&te.side===2&&te.forceSinglePass===!1?(te.side=1,te.needsUpdate=!0,nt(te,ge,Fe),te.side=0,te.needsUpdate=!0,nt(te,ge,Fe),te.side=2):nt(te,ge,Fe)}g=T.get(U),g.init(),m.push(g),U.traverseVisible(function(te){te.isLight&&te.layers.test(ae.layers)&&(g.pushLight(te),te.castShadow&&g.pushShadow(te))}),g.setupLights(p.useLegacyLights),U.traverse(function(te){const ge=te.material;if(ge)if(Array.isArray(ge))for(let Fe=0;Fe<ge.length;Fe++){const Ne=ge[Fe];ue(Ne,U,te)}else ue(ge,U,te)}),m.pop(),g=null};let pe=null;function Le(U){pe&&pe(U)}function we(){Be.stop()}function Pe(){Be.start()}const Be=new Ao;Be.setAnimationLoop(Le),typeof self<"u"&&Be.setContext(self),this.setAnimationLoop=function(U){pe=U,ye.setAnimationLoop(U),U===null?Be.stop():Be.start()},ye.addEventListener("sessionstart",we),ye.addEventListener("sessionend",Pe),this.render=function(U,ae){if(ae!==void 0&&ae.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ae.parent===null&&ae.matrixWorldAutoUpdate===!0&&ae.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(ae),ae=ye.getCamera()),U.isScene===!0&&U.onBeforeRender(p,U,ae,E),g=T.get(U,m.length),g.init(),m.push(g),G.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),q.setFromProjectionMatrix(G),O=this.localClippingEnabled,X=Y.init(this.clippingPlanes,O),d=C.get(U,v.length),d.init(),v.push(d),Ve(U,ae,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(I,L),X===!0&&Y.beginShadows();const ue=g.state.shadowsArray;if(ie.render(ue,U,ae),X===!0&&Y.endShadows(),this.info.autoReset===!0&&this.info.reset(),me.render(d,U),g.setupLights(p.useLegacyLights),ae.isArrayCamera){const te=ae.cameras;for(let ge=0,Fe=te.length;ge<Fe;ge++){const Ne=te[ge];Oe(d,U,Ne,Ne.viewport)}}else Oe(d,U,ae);E!==null&&(ne.updateMultisampleRenderTarget(E),ne.updateRenderTargetMipmap(E)),U.isScene===!0&&U.onAfterRender(p,U,ae),Ae.resetDefaultState(),w=-1,R=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,v.pop(),v.length>0?d=v[v.length-1]:d=null};function Ve(U,ae,ue,te){if(U.visible===!1)return;if(U.layers.test(ae.layers)){if(U.isGroup)ue=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(ae);else if(U.isLight)g.pushLight(U),U.castShadow&&g.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||q.intersectsSprite(U)){te&&b.setFromMatrixPosition(U.matrixWorld).applyMatrix4(G);const Ne=_e.update(U),Ge=U.material;Ge.visible&&d.push(U,Ne,Ge,ue,b.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||q.intersectsObject(U))){U.isSkinnedMesh&&U.skeleton.frame!==W.render.frame&&(U.skeleton.update(),U.skeleton.frame=W.render.frame);const Ne=_e.update(U),Ge=U.material;if(te&&(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),b.copy(Ne.boundingSphere.center).applyMatrix4(U.matrixWorld).applyMatrix4(G)),Array.isArray(Ge)){const He=Ne.groups;for(let We=0,qe=He.length;We<qe;We++){const Ye=He[We],Ze=Ge[Ye.materialIndex];Ze&&Ze.visible&&d.push(U,Ne,Ze,ue,b.z,Ye)}}else Ge.visible&&d.push(U,Ne,Ge,ue,b.z,null)}}const Fe=U.children;for(let Ne=0,Ge=Fe.length;Ne<Ge;Ne++)Ve(Fe[Ne],ae,ue,te)}function Oe(U,ae,ue,te){const ge=U.opaque,Fe=U.transmissive,Ne=U.transparent;g.setupLightsView(ue),X===!0&&Y.setGlobalState(p.clippingPlanes,ue),Fe.length>0&&ke(ge,Fe,ae,ue),te&&oe.viewport(F.copy(te)),ge.length>0&&$e(ge,ae,ue),Fe.length>0&&$e(Fe,ae,ue),Ne.length>0&&$e(Ne,ae,ue),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function ke(U,ae,ue,te){if(z===null){const Ge=Z.isWebGL2;z=new bn(1024,1024,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")?1016:1009,minFilter:1008,samples:Ge&&o===!0?4:0})}const ge=p.getRenderTarget();p.setRenderTarget(z),p.clear();const Fe=p.toneMapping;p.toneMapping=0,$e(U,ue,te),ne.updateMultisampleRenderTarget(z),ne.updateRenderTargetMipmap(z);let Ne=!1;for(let Ge=0,He=ae.length;Ge<He;Ge++){const We=ae[Ge],qe=We.object,Ye=We.geometry,Ze=We.material,ot=We.group;if(Ze.side===2&&qe.layers.test(te.layers)){const St=Ze.side;Ze.side=1,Ze.needsUpdate=!0,et(qe,ue,te,Ye,Ze,ot),Ze.side=St,Ze.needsUpdate=!0,Ne=!0}}Ne===!0&&(ne.updateMultisampleRenderTarget(z),ne.updateRenderTargetMipmap(z)),p.setRenderTarget(ge),p.toneMapping=Fe}function $e(U,ae,ue){const te=ae.isScene===!0?ae.overrideMaterial:null;for(let ge=0,Fe=U.length;ge<Fe;ge++){const Ne=U[ge],Ge=Ne.object,He=Ne.geometry,We=te===null?Ne.material:te,qe=Ne.group;Ge.layers.test(ue.layers)&&et(Ge,ae,ue,He,We,qe)}}function et(U,ae,ue,te,ge,Fe){U.onBeforeRender(p,ae,ue,te,ge,Fe),U.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),ge.onBeforeRender(p,ae,ue,te,U,Fe),ge.transparent===!0&&ge.side===2&&ge.forceSinglePass===!1?(ge.side=1,ge.needsUpdate=!0,p.renderBufferDirect(ue,ae,te,ge,U,Fe),ge.side=0,ge.needsUpdate=!0,p.renderBufferDirect(ue,ae,te,ge,U,Fe),ge.side=2):p.renderBufferDirect(ue,ae,te,ge,U,Fe),U.onAfterRender(p,ae,ue,te,ge,Fe)}function nt(U,ae,ue){ae.isScene!==!0&&(ae=P);const te=$.get(U),ge=g.state.lights,Fe=g.state.shadowsArray,Ne=ge.state.version,Ge=Ee.getParameters(U,ge.state,Fe,ae,ue),He=Ee.getProgramCacheKey(Ge);let We=te.programs;te.environment=U.isMeshStandardMaterial?ae.environment:null,te.fog=ae.fog,te.envMap=(U.isMeshStandardMaterial?le:fe).get(U.envMap||te.environment),We===void 0&&(U.addEventListener("dispose",je),We=new Map,te.programs=We);let qe=We.get(He);if(qe!==void 0){if(te.currentProgram===qe&&te.lightsStateVersion===Ne)return yt(U,Ge),qe}else Ge.uniforms=Ee.getUniforms(U),U.onBuild(ue,Ge,p),U.onBeforeCompile(Ge,p),qe=Ee.acquireProgram(Ge,He),We.set(He,qe),te.uniforms=Ge.uniforms;const Ye=te.uniforms;(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Ye.clippingPlanes=Y.uniform),yt(U,Ge),te.needsLights=Xt(U),te.lightsStateVersion=Ne,te.needsLights&&(Ye.ambientLightColor.value=ge.state.ambient,Ye.lightProbe.value=ge.state.probe,Ye.directionalLights.value=ge.state.directional,Ye.directionalLightShadows.value=ge.state.directionalShadow,Ye.spotLights.value=ge.state.spot,Ye.spotLightShadows.value=ge.state.spotShadow,Ye.rectAreaLights.value=ge.state.rectArea,Ye.ltc_1.value=ge.state.rectAreaLTC1,Ye.ltc_2.value=ge.state.rectAreaLTC2,Ye.pointLights.value=ge.state.point,Ye.pointLightShadows.value=ge.state.pointShadow,Ye.hemisphereLights.value=ge.state.hemi,Ye.directionalShadowMap.value=ge.state.directionalShadowMap,Ye.directionalShadowMatrix.value=ge.state.directionalShadowMatrix,Ye.spotShadowMap.value=ge.state.spotShadowMap,Ye.spotLightMatrix.value=ge.state.spotLightMatrix,Ye.spotLightMap.value=ge.state.spotLightMap,Ye.pointShadowMap.value=ge.state.pointShadowMap,Ye.pointShadowMatrix.value=ge.state.pointShadowMatrix);const Ze=qe.getUniforms(),ot=Er.seqWithValue(Ze.seq,Ye);return te.currentProgram=qe,te.uniformsList=ot,qe}function yt(U,ae){const ue=$.get(U);ue.outputColorSpace=ae.outputColorSpace,ue.instancing=ae.instancing,ue.skinning=ae.skinning,ue.morphTargets=ae.morphTargets,ue.morphNormals=ae.morphNormals,ue.morphColors=ae.morphColors,ue.morphTargetsCount=ae.morphTargetsCount,ue.numClippingPlanes=ae.numClippingPlanes,ue.numIntersection=ae.numClipIntersection,ue.vertexAlphas=ae.vertexAlphas,ue.vertexTangents=ae.vertexTangents,ue.toneMapping=ae.toneMapping}function Wt(U,ae,ue,te,ge){ae.isScene!==!0&&(ae=P),ne.resetTextureUnits();const Fe=ae.fog,Ne=te.isMeshStandardMaterial?ae.environment:null,Ge=E===null?p.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Qt,He=(te.isMeshStandardMaterial?le:fe).get(te.envMap||Ne),We=te.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,qe=!!te.normalMap&&!!ue.attributes.tangent,Ye=!!ue.morphAttributes.position,Ze=!!ue.morphAttributes.normal,ot=!!ue.morphAttributes.color,St=te.toneMapped?p.toneMapping:0,Ue=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,tt=Ue!==void 0?Ue.length:0,Je=$.get(te),qt=g.state.lights;if(X===!0&&(O===!0||U!==R)){const mt=U===R&&te.id===w;Y.setState(te,U,mt)}let it=!1;te.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==qt.state.version||Je.outputColorSpace!==Ge||ge.isInstancedMesh&&Je.instancing===!1||!ge.isInstancedMesh&&Je.instancing===!0||ge.isSkinnedMesh&&Je.skinning===!1||!ge.isSkinnedMesh&&Je.skinning===!0||Je.envMap!==He||te.fog===!0&&Je.fog!==Fe||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Y.numPlanes||Je.numIntersection!==Y.numIntersection)||Je.vertexAlphas!==We||Je.vertexTangents!==qe||Je.morphTargets!==Ye||Je.morphNormals!==Ze||Je.morphColors!==ot||Je.toneMapping!==St||Z.isWebGL2===!0&&Je.morphTargetsCount!==tt)&&(it=!0):(it=!0,Je.__version=te.version);let Yt=Je.currentProgram;it===!0&&(Yt=nt(te,ae,ge));let Ln=!1,jt=!1,ln=!1;const ht=Yt.getUniforms(),Pt=Je.uniforms;if(oe.useProgram(Yt.program)&&(Ln=!0,jt=!0,ln=!0),te.id!==w&&(w=te.id,jt=!0),Ln||R!==U){if(ht.setValue(y,"projectionMatrix",U.projectionMatrix),Z.logarithmicDepthBuffer&&ht.setValue(y,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),R!==U&&(R=U,jt=!0,ln=!0),te.isShaderMaterial||te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshStandardMaterial||te.envMap){const mt=ht.map.cameraPosition;mt!==void 0&&mt.setValue(y,b.setFromMatrixPosition(U.matrixWorld))}(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&ht.setValue(y,"isOrthographic",U.isOrthographicCamera===!0),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial||te.isShadowMaterial||ge.isSkinnedMesh)&&ht.setValue(y,"viewMatrix",U.matrixWorldInverse)}if(ge.isSkinnedMesh){ht.setOptional(y,ge,"bindMatrix"),ht.setOptional(y,ge,"bindMatrixInverse");const mt=ge.skeleton;mt&&(Z.floatVertexTextures?(mt.boneTexture===null&&mt.computeBoneTexture(),ht.setValue(y,"boneTexture",mt.boneTexture,ne),ht.setValue(y,"boneTextureSize",mt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Pn=ue.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0&&Z.isWebGL2===!0)&&de.update(ge,ue,Yt),(jt||Je.receiveShadow!==ge.receiveShadow)&&(Je.receiveShadow=ge.receiveShadow,ht.setValue(y,"receiveShadow",ge.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Pt.envMap.value=He,Pt.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),jt&&(ht.setValue(y,"toneMappingExposure",p.toneMappingExposure),Je.needsLights&&Ft(Pt,ln),Fe&&te.fog===!0&&he.refreshFogUniforms(Pt,Fe),he.refreshMaterialUniforms(Pt,te,D,B,z),Er.upload(y,Je.uniformsList,Pt,ne)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Er.upload(y,Je.uniformsList,Pt,ne),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&ht.setValue(y,"center",ge.center),ht.setValue(y,"modelViewMatrix",ge.modelViewMatrix),ht.setValue(y,"normalMatrix",ge.normalMatrix),ht.setValue(y,"modelMatrix",ge.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const mt=te.uniformsGroups;for(let Un=0,mn=mt.length;Un<mn;Un++)if(Z.isWebGL2){const Dn=mt[Un];Ce.update(Dn,Yt),Ce.bind(Dn,Yt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Yt}function Ft(U,ae){U.ambientLightColor.needsUpdate=ae,U.lightProbe.needsUpdate=ae,U.directionalLights.needsUpdate=ae,U.directionalLightShadows.needsUpdate=ae,U.pointLights.needsUpdate=ae,U.pointLightShadows.needsUpdate=ae,U.spotLights.needsUpdate=ae,U.spotLightShadows.needsUpdate=ae,U.rectAreaLights.needsUpdate=ae,U.hemisphereLights.needsUpdate=ae}function Xt(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(U,ae,ue){$.get(U.texture).__webglTexture=ae,$.get(U.depthTexture).__webglTexture=ue;const te=$.get(U);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=ue===void 0,te.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(U,ae){const ue=$.get(U);ue.__webglFramebuffer=ae,ue.__useDefaultFramebuffer=ae===void 0},this.setRenderTarget=function(U,ae=0,ue=0){E=U,_=ae,S=ue;let te=!0,ge=null,Fe=!1,Ne=!1;if(U){const He=$.get(U);He.__useDefaultFramebuffer!==void 0?(oe.bindFramebuffer(y.FRAMEBUFFER,null),te=!1):He.__webglFramebuffer===void 0?ne.setupRenderTarget(U):He.__hasExternalTextures&&ne.rebindTextures(U,$.get(U.texture).__webglTexture,$.get(U.depthTexture).__webglTexture);const We=U.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ne=!0);const qe=$.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(ge=qe[ae],Fe=!0):Z.isWebGL2&&U.samples>0&&ne.useMultisampledRTT(U)===!1?ge=$.get(U).__webglMultisampledFramebuffer:ge=qe,F.copy(U.viewport),x.copy(U.scissor),A=U.scissorTest}else F.copy(V).multiplyScalar(D).floor(),x.copy(K).multiplyScalar(D).floor(),A=Q;if(oe.bindFramebuffer(y.FRAMEBUFFER,ge)&&Z.drawBuffers&&te&&oe.drawBuffers(U,ge),oe.viewport(F),oe.scissor(x),oe.setScissorTest(A),Fe){const He=$.get(U.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+ae,He.__webglTexture,ue)}else if(Ne){const He=$.get(U.texture),We=ae||0;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,He.__webglTexture,ue||0,We)}w=-1},this.readRenderTargetPixels=function(U,ae,ue,te,ge,Fe,Ne){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=$.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ge=Ge[Ne]),Ge){oe.bindFramebuffer(y.FRAMEBUFFER,Ge);try{const He=U.texture,We=He.format,qe=He.type;if(We!==1023&&re.convert(We)!==y.getParameter(y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ye=qe===1016&&(se.has("EXT_color_buffer_half_float")||Z.isWebGL2&&se.has("EXT_color_buffer_float"));if(qe!==1009&&re.convert(qe)!==y.getParameter(y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(qe===1015&&(Z.isWebGL2||se.has("OES_texture_float")||se.has("WEBGL_color_buffer_float")))&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ae>=0&&ae<=U.width-te&&ue>=0&&ue<=U.height-ge&&y.readPixels(ae,ue,te,ge,re.convert(We),re.convert(qe),Fe)}finally{const He=E!==null?$.get(E).__webglFramebuffer:null;oe.bindFramebuffer(y.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(U,ae,ue=0){const te=Math.pow(2,-ue),ge=Math.floor(ae.image.width*te),Fe=Math.floor(ae.image.height*te);ne.setTexture2D(ae,0),y.copyTexSubImage2D(y.TEXTURE_2D,ue,0,0,U.x,U.y,ge,Fe),oe.unbindTexture()},this.copyTextureToTexture=function(U,ae,ue,te=0){const ge=ae.image.width,Fe=ae.image.height,Ne=re.convert(ue.format),Ge=re.convert(ue.type);ne.setTexture2D(ue,0),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,ue.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ue.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,ue.unpackAlignment),ae.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,te,U.x,U.y,ge,Fe,Ne,Ge,ae.image.data):ae.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,te,U.x,U.y,ae.mipmaps[0].width,ae.mipmaps[0].height,Ne,ae.mipmaps[0].data):y.texSubImage2D(y.TEXTURE_2D,te,U.x,U.y,Ne,Ge,ae.image),te===0&&ue.generateMipmaps&&y.generateMipmap(y.TEXTURE_2D),oe.unbindTexture()},this.copyTextureToTexture3D=function(U,ae,ue,te,ge=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Fe=U.max.x-U.min.x+1,Ne=U.max.y-U.min.y+1,Ge=U.max.z-U.min.z+1,He=re.convert(te.format),We=re.convert(te.type);let qe;if(te.isData3DTexture)ne.setTexture3D(te,0),qe=y.TEXTURE_3D;else if(te.isDataArrayTexture)ne.setTexture2DArray(te,0),qe=y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,te.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,te.unpackAlignment);const Ye=y.getParameter(y.UNPACK_ROW_LENGTH),Ze=y.getParameter(y.UNPACK_IMAGE_HEIGHT),ot=y.getParameter(y.UNPACK_SKIP_PIXELS),St=y.getParameter(y.UNPACK_SKIP_ROWS),Ue=y.getParameter(y.UNPACK_SKIP_IMAGES),tt=ue.isCompressedTexture?ue.mipmaps[0]:ue.image;y.pixelStorei(y.UNPACK_ROW_LENGTH,tt.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,tt.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,U.min.x),y.pixelStorei(y.UNPACK_SKIP_ROWS,U.min.y),y.pixelStorei(y.UNPACK_SKIP_IMAGES,U.min.z),ue.isDataTexture||ue.isData3DTexture?y.texSubImage3D(qe,ge,ae.x,ae.y,ae.z,Fe,Ne,Ge,He,We,tt.data):ue.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),y.compressedTexSubImage3D(qe,ge,ae.x,ae.y,ae.z,Fe,Ne,Ge,He,tt.data)):y.texSubImage3D(qe,ge,ae.x,ae.y,ae.z,Fe,Ne,Ge,He,We,tt),y.pixelStorei(y.UNPACK_ROW_LENGTH,Ye),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,Ze),y.pixelStorei(y.UNPACK_SKIP_PIXELS,ot),y.pixelStorei(y.UNPACK_SKIP_ROWS,St),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Ue),ge===0&&te.generateMipmaps&&y.generateMipmap(qe),oe.unbindTexture()},this.initTexture=function(U){U.isCubeTexture?ne.setTextureCube(U,0):U.isData3DTexture?ne.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?ne.setTexture2DArray(U,0):ne.setTexture2D(U,0),oe.unbindTexture()},this.resetState=function(){_=0,S=0,E=null,oe.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Xe?3001:3e3}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===3001?Xe:Qt}}class od extends Fo{}od.prototype.isWebGL1Renderer=!0;class ld extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class cd extends Vt{constructor(e,t,r,n=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class ni extends ui{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const za=new J,Ha=new J,Va=new st,ms=new Fs,pr=new ci;class mr extends pt{constructor(e=new dt,t=new ni){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let n=1,i=t.count;n<i;n++)za.fromBufferAttribute(t,n-1),Ha.fromBufferAttribute(t,n),r[n]=r[n-1],r[n]+=za.distanceTo(Ha);e.setAttribute("lineDistance",new Dt(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,n=this.matrixWorld,i=e.params.Line.threshold,a=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),pr.copy(r.boundingSphere),pr.applyMatrix4(n),pr.radius+=i,e.ray.intersectsSphere(pr)===!1)return;Va.copy(n).invert(),ms.copy(e.ray).applyMatrix4(Va);const o=i/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new J,u=new J,h=new J,f=new J,d=this.isLineSegments?2:1,g=r.index,m=r.attributes.position;if(g!==null){const p=Math.max(0,a.start),M=Math.min(g.count,a.start+a.count);for(let _=p,S=M-1;_<S;_+=d){const E=g.getX(_),w=g.getX(_+1);if(l.fromBufferAttribute(m,E),u.fromBufferAttribute(m,w),ms.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const F=e.ray.origin.distanceTo(f);F<e.near||F>e.far||t.push({distance:F,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),M=Math.min(m.count,a.start+a.count);for(let _=p,S=M-1;_<S;_+=d){if(l.fromBufferAttribute(m,_),u.fromBufferAttribute(m,_+1),ms.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(f);w<e.near||w>e.far||t.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=n.length;i<a;i++){const o=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}}class Io extends ui{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wa=new st,bs=new Fs,gr=new ci,vr=new J;class ud extends pt{constructor(e=new dt,t=new Io){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,n=this.matrixWorld,i=e.params.Points.threshold,a=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),gr.copy(r.boundingSphere),gr.applyMatrix4(n),gr.radius+=i,e.ray.intersectsSphere(gr)===!1)return;Wa.copy(n).invert(),bs.copy(e.ray).applyMatrix4(Wa);const o=i/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=r.index,h=r.attributes.position;if(l!==null){const f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let g=f,v=d;g<v;g++){const m=l.getX(g);vr.fromBufferAttribute(h,m),Xa(vr,m,c,n,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=f,v=d;g<v;g++)vr.fromBufferAttribute(h,g),Xa(vr,g,c,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=n.length;i<a;i++){const o=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}}function Xa(s,e,t,r,n,i,a){const o=bs.distanceSqToPoint(s);if(o<t){const c=new J;bs.closestPointToPoint(s,c),c.applyMatrix4(r);const l=n.ray.origin.distanceTo(c);if(l<n.near||l>n.far)return;i.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}class $t{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,n=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)r=this.getPoint(a/e),i+=r.distanceTo(n),t.push(i),n=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let n=0;const i=r.length;let a;t?a=t:a=e*r[i-1];let o=0,c=i-1,l;for(;o<=c;)if(n=Math.floor(o+(c-o)/2),l=r[n]-a,l<0)o=n+1;else if(l>0)c=n-1;else{c=n;break}if(n=c,r[n]===a)return n/(i-1);const u=r[n],f=r[n+1]-u,d=(a-u)/f;return(n+d)/(i-1)}getTangent(e,t){let n=e-1e-4,i=e+1e-4;n<0&&(n=0),i>1&&(i=1);const a=this.getPoint(n),o=this.getPoint(i),c=t||(a.isVector2?new be:new J);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new J,n=[],i=[],a=[],o=new J,c=new st;for(let d=0;d<=e;d++){const g=d/e;n[d]=this.getTangentAt(g,new J)}i[0]=new J,a[0]=new J;let l=Number.MAX_VALUE;const u=Math.abs(n[0].x),h=Math.abs(n[0].y),f=Math.abs(n[0].z);u<=l&&(l=u,r.set(1,0,0)),h<=l&&(l=h,r.set(0,1,0)),f<=l&&r.set(0,0,1),o.crossVectors(n[0],r).normalize(),i[0].crossVectors(n[0],o),a[0].crossVectors(n[0],i[0]);for(let d=1;d<=e;d++){if(i[d]=i[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(n[d-1],n[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(xt(n[d-1].dot(n[d]),-1,1));i[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(n[d],i[d])}if(t===!0){let d=Math.acos(xt(i[0].dot(i[e]),-1,1));d/=e,n[0].dot(o.crossVectors(i[0],i[e]))>0&&(d=-d);for(let g=1;g<=e;g++)i[g].applyMatrix4(c.makeRotationAxis(n[g],d*g)),a[g].crossVectors(n[g],i[g])}return{tangents:n,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Lr extends $t{constructor(e=0,t=0,r=1,n=1,i=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=n,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t){const r=t||new be,n=Math.PI*2;let i=this.aEndAngle-this.aStartAngle;const a=Math.abs(i)<Number.EPSILON;for(;i<0;)i+=n;for(;i>n;)i-=n;i<Number.EPSILON&&(a?i=0:i=n),this.aClockwise===!0&&!a&&(i===n?i=-n:i=i-n);const o=this.aStartAngle+e*i;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return r.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class No extends Lr{constructor(e,t,r,n,i,a){super(e,t,r,r,n,i,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Os(){let s=0,e=0,t=0,r=0;function n(i,a,o,c){s=i,e=o,t=-3*i+3*a-2*o-c,r=2*i-2*a+o+c}return{initCatmullRom:function(i,a,o,c,l){n(a,o,l*(o-i),l*(c-a))},initNonuniformCatmullRom:function(i,a,o,c,l,u,h){let f=(a-i)/l-(o-i)/(l+u)+(o-a)/u,d=(o-a)/u-(c-a)/(u+h)+(c-o)/h;f*=u,d*=u,n(a,o,f,d)},calc:function(i){const a=i*i,o=a*i;return s+e*i+t*a+r*o}}}const _r=new J,gs=new Os,vs=new Os,_s=new Os;class hd extends $t{constructor(e=[],t=!1,r="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=n}getPoint(e,t=new J){const r=t,n=this.points,i=n.length,a=(i-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:c===0&&o===i-1&&(o=i-2,c=1);let l,u;this.closed||o>0?l=n[(o-1)%i]:(_r.subVectors(n[0],n[1]).add(n[0]),l=_r);const h=n[o%i],f=n[(o+1)%i];if(this.closed||o+2<i?u=n[(o+2)%i]:(_r.subVectors(n[i-1],n[i-2]).add(n[i-1]),u=_r),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),d),v=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),gs.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,v,m),vs.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,v,m),_s.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(gs.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),vs.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),_s.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return r.set(gs.calc(c),vs.calc(c),_s.calc(c)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const n=e.points[t];this.points.push(new J().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function qa(s,e,t,r,n){const i=(r-e)*.5,a=(n-t)*.5,o=s*s,c=s*o;return(2*t-2*r+i+a)*c+(-3*t+3*r-2*i-a)*o+i*s+t}function fd(s,e){const t=1-s;return t*t*e}function dd(s,e){return 2*(1-s)*s*e}function pd(s,e){return s*s*e}function Ci(s,e,t,r){return fd(s,e)+dd(s,t)+pd(s,r)}function md(s,e){const t=1-s;return t*t*t*e}function gd(s,e){const t=1-s;return 3*t*t*s*e}function vd(s,e){return 3*(1-s)*s*s*e}function _d(s,e){return s*s*s*e}function Li(s,e,t,r,n){return md(s,e)+gd(s,t)+vd(s,r)+_d(s,n)}class Oo extends $t{constructor(e=new be,t=new be,r=new be,n=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=n}getPoint(e,t=new be){const r=t,n=this.v0,i=this.v1,a=this.v2,o=this.v3;return r.set(Li(e,n.x,i.x,a.x,o.x),Li(e,n.y,i.y,a.y,o.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class xd extends $t{constructor(e=new J,t=new J,r=new J,n=new J){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=n}getPoint(e,t=new J){const r=t,n=this.v0,i=this.v1,a=this.v2,o=this.v3;return r.set(Li(e,n.x,i.x,a.x,o.x),Li(e,n.y,i.y,a.y,o.y),Li(e,n.z,i.z,a.z,o.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Bs extends $t{constructor(e=new be,t=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new be){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sd extends $t{constructor(e=new J,t=new J){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new J){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new J){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bo extends $t{constructor(e=new be,t=new be,r=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new be){const r=t,n=this.v0,i=this.v1,a=this.v2;return r.set(Ci(e,n.x,i.x,a.x),Ci(e,n.y,i.y,a.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Md extends $t{constructor(e=new J,t=new J,r=new J){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new J){const r=t,n=this.v0,i=this.v1,a=this.v2;return r.set(Ci(e,n.x,i.x,a.x),Ci(e,n.y,i.y,a.y),Ci(e,n.z,i.z,a.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Go extends $t{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new be){const r=t,n=this.points,i=(n.length-1)*e,a=Math.floor(i),o=i-a,c=n[a===0?a:a-1],l=n[a],u=n[a>n.length-2?n.length-1:a+1],h=n[a>n.length-3?n.length-1:a+2];return r.set(qa(o,c.x,l.x,u.x,h.x),qa(o,c.y,l.y,u.y,h.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const n=e.points[t];this.points.push(new be().fromArray(n))}return this}}var ko=Object.freeze({__proto__:null,ArcCurve:No,CatmullRomCurve3:hd,CubicBezierCurve:Oo,CubicBezierCurve3:xd,EllipseCurve:Lr,LineCurve:Bs,LineCurve3:Sd,QuadraticBezierCurve:Bo,QuadraticBezierCurve3:Md,SplineCurve:Go});class yd extends $t{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Bs(t,e))}getPoint(e,t){const r=e*this.getLength(),n=this.getCurveLengths();let i=0;for(;i<n.length;){if(n[i]>=r){const a=n[i]-r,o=this.curves[i],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}i++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let r=0,n=this.curves.length;r<n;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let r;for(let n=0,i=this.curves;n<i.length;n++){const a=i[n],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];r&&r.equals(u)||(t.push(u),r=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){const n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const n=e.curves[t];this.curves.push(new ko[n.type]().fromJSON(n))}return this}}class As extends yd{constructor(e){super(),this.type="Path",this.currentPoint=new be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const r=new Bs(this.currentPoint.clone(),new be(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,n){const i=new Bo(this.currentPoint.clone(),new be(e,t),new be(r,n));return this.curves.push(i),this.currentPoint.set(r,n),this}bezierCurveTo(e,t,r,n,i,a){const o=new Oo(this.currentPoint.clone(),new be(e,t),new be(r,n),new be(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),r=new Go(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,n,i,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,r,n,i,a),this}absarc(e,t,r,n,i,a){return this.absellipse(e,t,r,r,n,i,a),this}ellipse(e,t,r,n,i,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,r,n,i,a,o,c),this}absellipse(e,t,r,n,i,a,o,c){const l=new Lr(e,t,r,n,i,a,o,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Tr extends As{constructor(e){super(e),this.uuid=li(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let r=0,n=this.holes.length;r<n;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){const n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const n=e.holes[t];this.holes.push(new As().fromJSON(n))}return this}}const Ed={triangulate:function(s,e,t=2){const r=e&&e.length,n=r?e[0]*t:s.length;let i=zo(s,0,n,t,!0);const a=[];if(!i||i.next===i.prev)return a;let o,c,l,u,h,f,d;if(r&&(i=Rd(s,e,i,t)),s.length>80*t){o=l=s[0],c=u=s[1];for(let g=t;g<n;g+=t)h=s[g],f=s[g+1],h<o&&(o=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-o,u-c),d=d!==0?32767/d:0}return Fi(i,a,t,o,c,d,0),a}};function zo(s,e,t,r,n){let i,a;if(n===Gd(s,e,t,r)>0)for(i=e;i<t;i+=r)a=Ya(i,s[i],s[i+1],a);else for(i=t-r;i>=e;i-=r)a=Ya(i,s[i],s[i+1],a);return a&&Pr(a,a.next)&&(Ni(a),a=a.next),a}function wn(s,e){if(!s)return s;e||(e=s);let t=s,r;do if(r=!1,!t.steiner&&(Pr(t,t.next)||rt(t.prev,t,t.next)===0)){if(Ni(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function Fi(s,e,t,r,n,i,a){if(!s)return;!a&&i&&Dd(s,r,n,i);let o=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,i?bd(s,r,n,i):Td(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),Ni(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=Ad(wn(s),e,t),Fi(s,e,t,r,n,i,2)):a===2&&wd(s,e,t,r,n,i):Fi(wn(s),e,t,r,n,i,1);break}}}function Td(s){const e=s.prev,t=s,r=s.next;if(rt(e,t,r)>=0)return!1;const n=e.x,i=t.x,a=r.x,o=e.y,c=t.y,l=r.y,u=n<i?n<a?n:a:i<a?i:a,h=o<c?o<l?o:l:c<l?c:l,f=n>i?n>a?n:a:i>a?i:a,d=o>c?o>l?o:l:c>l?c:l;let g=r.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&ii(n,o,i,c,a,l,g.x,g.y)&&rt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function bd(s,e,t,r){const n=s.prev,i=s,a=s.next;if(rt(n,i,a)>=0)return!1;const o=n.x,c=i.x,l=a.x,u=n.y,h=i.y,f=a.y,d=o<c?o<l?o:l:c<l?c:l,g=u<h?u<f?u:f:h<f?h:f,v=o>c?o>l?o:l:c>l?c:l,m=u>h?u>f?u:f:h>f?h:f,p=ws(d,g,e,t,r),M=ws(v,m,e,t,r);let _=s.prevZ,S=s.nextZ;for(;_&&_.z>=p&&S&&S.z<=M;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==n&&_!==a&&ii(o,u,c,h,l,f,_.x,_.y)&&rt(_.prev,_,_.next)>=0||(_=_.prevZ,S.x>=d&&S.x<=v&&S.y>=g&&S.y<=m&&S!==n&&S!==a&&ii(o,u,c,h,l,f,S.x,S.y)&&rt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==n&&_!==a&&ii(o,u,c,h,l,f,_.x,_.y)&&rt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;S&&S.z<=M;){if(S.x>=d&&S.x<=v&&S.y>=g&&S.y<=m&&S!==n&&S!==a&&ii(o,u,c,h,l,f,S.x,S.y)&&rt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Ad(s,e,t){let r=s;do{const n=r.prev,i=r.next.next;!Pr(n,i)&&Ho(n,r,r.next,i)&&Ii(n,i)&&Ii(i,n)&&(e.push(n.i/t|0),e.push(r.i/t|0),e.push(i.i/t|0),Ni(r),Ni(r.next),r=s=i),r=r.next}while(r!==s);return wn(r)}function wd(s,e,t,r,n,i){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Nd(a,o)){let c=Vo(a,o);a=wn(a,a.next),c=wn(c,c.next),Fi(a,e,t,r,n,i,0),Fi(c,e,t,r,n,i,0);return}o=o.next}a=a.next}while(a!==s)}function Rd(s,e,t,r){const n=[];let i,a,o,c,l;for(i=0,a=e.length;i<a;i++)o=e[i]*r,c=i<a-1?e[i+1]*r:s.length,l=zo(s,o,c,r,!1),l===l.next&&(l.steiner=!0),n.push(Id(l));for(n.sort(Cd),i=0;i<n.length;i++)t=Ld(n[i],t);return t}function Cd(s,e){return s.x-e.x}function Ld(s,e){const t=Pd(s,e);if(!t)return e;const r=Vo(t,s);return wn(r,r.next),wn(t,t.next)}function Pd(s,e){let t=e,r=-1/0,n;const i=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>r&&(r=f,n=t.x<t.next.x?t:t.next,f===i))return n}t=t.next}while(t!==e);if(!n)return null;const o=n,c=n.x,l=n.y;let u=1/0,h;t=n;do i>=t.x&&t.x>=c&&i!==t.x&&ii(a<l?i:r,a,c,l,a<l?r:i,a,t.x,t.y)&&(h=Math.abs(a-t.y)/(i-t.x),Ii(t,s)&&(h<u||h===u&&(t.x>n.x||t.x===n.x&&Ud(n,t)))&&(n=t,u=h)),t=t.next;while(t!==o);return n}function Ud(s,e){return rt(s.prev,s,e.prev)<0&&rt(e.next,s,s.next)<0}function Dd(s,e,t,r){let n=s;do n.z===0&&(n.z=ws(n.x,n.y,e,t,r)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,Fd(n)}function Fd(s){let e,t,r,n,i,a,o,c,l=1;do{for(t=s,s=null,i=null,a=0;t;){for(a++,r=t,o=0,e=0;e<l&&(o++,r=r.nextZ,!!r);e++);for(c=l;o>0||c>0&&r;)o!==0&&(c===0||!r||t.z<=r.z)?(n=t,t=t.nextZ,o--):(n=r,r=r.nextZ,c--),i?i.nextZ=n:s=n,n.prevZ=i,i=n;t=r}i.nextZ=null,l*=2}while(a>1);return s}function ws(s,e,t,r,n){return s=(s-t)*n|0,e=(e-r)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Id(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function ii(s,e,t,r,n,i,a,o){return(n-a)*(e-o)>=(s-a)*(i-o)&&(s-a)*(r-o)>=(t-a)*(e-o)&&(t-a)*(i-o)>=(n-a)*(r-o)}function Nd(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Od(s,e)&&(Ii(s,e)&&Ii(e,s)&&Bd(s,e)&&(rt(s.prev,s,e.prev)||rt(s,e.prev,e))||Pr(s,e)&&rt(s.prev,s,s.next)>0&&rt(e.prev,e,e.next)>0)}function rt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Pr(s,e){return s.x===e.x&&s.y===e.y}function Ho(s,e,t,r){const n=Sr(rt(s,e,t)),i=Sr(rt(s,e,r)),a=Sr(rt(t,r,s)),o=Sr(rt(t,r,e));return!!(n!==i&&a!==o||n===0&&xr(s,t,e)||i===0&&xr(s,r,e)||a===0&&xr(t,s,r)||o===0&&xr(t,e,r))}function xr(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Sr(s){return s>0?1:s<0?-1:0}function Od(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Ho(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Ii(s,e){return rt(s.prev,s,s.next)<0?rt(s,e,s.next)>=0&&rt(s,s.prev,e)>=0:rt(s,e,s.prev)<0||rt(s,s.next,e)<0}function Bd(s,e){let t=s,r=!1;const n=(s.x+e.x)/2,i=(s.y+e.y)/2;do t.y>i!=t.next.y>i&&t.next.y!==t.y&&n<(t.next.x-t.x)*(i-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==s);return r}function Vo(s,e){const t=new Rs(s.i,s.x,s.y),r=new Rs(e.i,e.x,e.y),n=s.next,i=e.prev;return s.next=e,e.prev=s,t.next=n,n.prev=t,r.next=t,t.prev=r,i.next=r,r.prev=i,r}function Ya(s,e,t,r){const n=new Rs(s,e,t);return r?(n.next=r.next,n.prev=r,r.next.prev=n,r.next=n):(n.prev=n,n.next=n),n}function Ni(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Rs(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Gd(s,e,t,r){let n=0;for(let i=e,a=t-r;i<t;i+=r)n+=(s[a]-s[i])*(s[i+1]+s[a+1]),a=i;return n}class ai{static area(e){const t=e.length;let r=0;for(let n=t-1,i=0;i<t;n=i++)r+=e[n].x*e[i].y-e[i].x*e[n].y;return r*.5}static isClockWise(e){return ai.area(e)<0}static triangulateShape(e,t){const r=[],n=[],i=[];ja(e),Ja(r,e);let a=e.length;t.forEach(ja);for(let c=0;c<t.length;c++)n.push(a),a+=t[c].length,Ja(r,t[c]);const o=Ed.triangulate(r,n);for(let c=0;c<o.length;c+=3)i.push(o.slice(c,c+3));return i}}function ja(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Ja(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Gs extends dt{constructor(e=new Tr([new be(.5,.5),new be(-.5,.5),new be(-.5,-.5),new be(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const r=this,n=[],i=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new Dt(n,3)),this.setAttribute("uv",new Dt(i,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:kd;let _,S=!1,E,w,R,F;p&&(_=p.getSpacedPoints(u),S=!0,f=!1,E=p.computeFrenetFrames(u,!1),w=new J,R=new J,F=new J),f||(m=0,d=0,g=0,v=0);const x=o.extractPoints(l);let A=x.shape;const j=x.holes;if(!ai.isClockWise(A)){A=A.reverse();for(let W=0,$=j.length;W<$;W++){const ne=j[W];ai.isClockWise(ne)&&(j[W]=ne.reverse())}}const D=ai.triangulateShape(A,j),I=A;for(let W=0,$=j.length;W<$;W++){const ne=j[W];A=A.concat(ne)}function L(W,$,ne){return $||console.error("THREE.ExtrudeGeometry: vec does not exist"),W.clone().addScaledVector($,ne)}const V=A.length,K=D.length;function Q(W,$,ne){let fe,le,Se;const ce=W.x-$.x,_e=W.y-$.y,Ee=ne.x-W.x,he=ne.y-W.y,C=ce*ce+_e*_e,T=ce*he-_e*Ee;if(Math.abs(T)>Number.EPSILON){const Y=Math.sqrt(C),ie=Math.sqrt(Ee*Ee+he*he),me=$.x-_e/Y,de=$.y+ce/Y,Me=ne.x-he/ie,ve=ne.y+Ee/ie,re=((Me-me)*he-(ve-de)*Ee)/(ce*he-_e*Ee);fe=me+ce*re-W.x,le=de+_e*re-W.y;const Ae=fe*fe+le*le;if(Ae<=2)return new be(fe,le);Se=Math.sqrt(Ae/2)}else{let Y=!1;ce>Number.EPSILON?Ee>Number.EPSILON&&(Y=!0):ce<-Number.EPSILON?Ee<-Number.EPSILON&&(Y=!0):Math.sign(_e)===Math.sign(he)&&(Y=!0),Y?(fe=-_e,le=ce,Se=Math.sqrt(C)):(fe=ce,le=_e,Se=Math.sqrt(C/2))}return new be(fe/Se,le/Se)}const q=[];for(let W=0,$=I.length,ne=$-1,fe=W+1;W<$;W++,ne++,fe++)ne===$&&(ne=0),fe===$&&(fe=0),q[W]=Q(I[W],I[ne],I[fe]);const X=[];let O,z=q.concat();for(let W=0,$=j.length;W<$;W++){const ne=j[W];O=[];for(let fe=0,le=ne.length,Se=le-1,ce=fe+1;fe<le;fe++,Se++,ce++)Se===le&&(Se=0),ce===le&&(ce=0),O[fe]=Q(ne[fe],ne[Se],ne[ce]);X.push(O),z=z.concat(O)}for(let W=0;W<m;W++){const $=W/m,ne=d*Math.cos($*Math.PI/2),fe=g*Math.sin($*Math.PI/2)+v;for(let le=0,Se=I.length;le<Se;le++){const ce=L(I[le],q[le],fe);y(ce.x,ce.y,-ne)}for(let le=0,Se=j.length;le<Se;le++){const ce=j[le];O=X[le];for(let _e=0,Ee=ce.length;_e<Ee;_e++){const he=L(ce[_e],O[_e],fe);y(he.x,he.y,-ne)}}}const G=g+v;for(let W=0;W<V;W++){const $=f?L(A[W],z[W],G):A[W];S?(R.copy(E.normals[0]).multiplyScalar($.x),w.copy(E.binormals[0]).multiplyScalar($.y),F.copy(_[0]).add(R).add(w),y(F.x,F.y,F.z)):y($.x,$.y,0)}for(let W=1;W<=u;W++)for(let $=0;$<V;$++){const ne=f?L(A[$],z[$],G):A[$];S?(R.copy(E.normals[W]).multiplyScalar(ne.x),w.copy(E.binormals[W]).multiplyScalar(ne.y),F.copy(_[W]).add(R).add(w),y(F.x,F.y,F.z)):y(ne.x,ne.y,h/u*W)}for(let W=m-1;W>=0;W--){const $=W/m,ne=d*Math.cos($*Math.PI/2),fe=g*Math.sin($*Math.PI/2)+v;for(let le=0,Se=I.length;le<Se;le++){const ce=L(I[le],q[le],fe);y(ce.x,ce.y,h+ne)}for(let le=0,Se=j.length;le<Se;le++){const ce=j[le];O=X[le];for(let _e=0,Ee=ce.length;_e<Ee;_e++){const he=L(ce[_e],O[_e],fe);S?y(he.x,he.y+_[u-1].y,_[u-1].x+ne):y(he.x,he.y,h+ne)}}}b(),P();function b(){const W=n.length/3;if(f){let $=0,ne=V*$;for(let fe=0;fe<K;fe++){const le=D[fe];k(le[2]+ne,le[1]+ne,le[0]+ne)}$=u+m*2,ne=V*$;for(let fe=0;fe<K;fe++){const le=D[fe];k(le[0]+ne,le[1]+ne,le[2]+ne)}}else{for(let $=0;$<K;$++){const ne=D[$];k(ne[2],ne[1],ne[0])}for(let $=0;$<K;$++){const ne=D[$];k(ne[0]+V*u,ne[1]+V*u,ne[2]+V*u)}}r.addGroup(W,n.length/3-W,0)}function P(){const W=n.length/3;let $=0;N(I,$),$+=I.length;for(let ne=0,fe=j.length;ne<fe;ne++){const le=j[ne];N(le,$),$+=le.length}r.addGroup(W,n.length/3-W,1)}function N(W,$){let ne=W.length;for(;--ne>=0;){const fe=ne;let le=ne-1;le<0&&(le=W.length-1);for(let Se=0,ce=u+m*2;Se<ce;Se++){const _e=V*Se,Ee=V*(Se+1),he=$+fe+_e,C=$+le+_e,T=$+le+Ee,Y=$+fe+Ee;se(he,C,T,Y)}}}function y(W,$,ne){c.push(W),c.push($),c.push(ne)}function k(W,$,ne){Z(W),Z($),Z(ne);const fe=n.length/3,le=M.generateTopUV(r,n,fe-3,fe-2,fe-1);oe(le[0]),oe(le[1]),oe(le[2])}function se(W,$,ne,fe){Z(W),Z($),Z(fe),Z($),Z(ne),Z(fe);const le=n.length/3,Se=M.generateSideWallUV(r,n,le-6,le-3,le-2,le-1);oe(Se[0]),oe(Se[1]),oe(Se[3]),oe(Se[1]),oe(Se[2]),oe(Se[3])}function Z(W){n.push(c[W*3+0]),n.push(c[W*3+1]),n.push(c[W*3+2])}function oe(W){i.push(W.x),i.push(W.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,r=this.parameters.options;return zd(t,r,e)}static fromJSON(e,t){const r=[];for(let i=0,a=e.shapes.length;i<a;i++){const o=t[e.shapes[i]];r.push(o)}const n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new ko[n.type]().fromJSON(n)),new Gs(r,e.options)}}const kd={generateTopUV:function(s,e,t,r,n){const i=e[t*3],a=e[t*3+1],o=e[r*3],c=e[r*3+1],l=e[n*3],u=e[n*3+1];return[new be(i,a),new be(o,c),new be(l,u)]},generateSideWallUV:function(s,e,t,r,n,i){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[r*3],u=e[r*3+1],h=e[r*3+2],f=e[n*3],d=e[n*3+1],g=e[n*3+2],v=e[i*3],m=e[i*3+1],p=e[i*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new be(a,1-c),new be(l,1-h),new be(f,1-g),new be(v,1-p)]:[new be(o,1-c),new be(u,1-h),new be(d,1-g),new be(m,1-p)]}};function zd(s,e,t){if(t.shapes=[],Array.isArray(s))for(let r=0,n=s.length;r<n;r++){const i=s[r];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Hd extends ni{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const Ka={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Vd{constructor(e,t,r){const n=this;let i=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(u){o++,i===!1&&n.onStart!==void 0&&n.onStart(u,a,o),i=!0},this.itemEnd=function(u){a++,n.onProgress!==void 0&&n.onProgress(u,a,o),a===o&&(i=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],g=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const Wd=new Vd;class Wo{constructor(e){this.manager=e!==void 0?e:Wd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(n,i){r.load(e,n,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const on={};class Xd extends Error{constructor(e,t){super(e),this.response=t}}class qd extends Wo{constructor(e){super(e)}load(e,t,r,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=Ka.get(e);if(i!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0),i;if(on[e]!==void 0){on[e].push({onLoad:t,onProgress:r,onError:n});return}on[e]=[],on[e].push({onLoad:t,onProgress:r,onError:n});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=on[e],h=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0;let v=0;const m=new ReadableStream({start(p){M();function M(){h.read().then(({done:_,value:S})=>{if(_)p.close();else{v+=S.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:d});for(let w=0,R=u.length;w<R;w++){const F=u[w];F.onProgress&&F.onProgress(E)}p.enqueue(S),M()}})}}});return new Response(m)}else throw new Xd(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{Ka.add(e,l);const u=on[e];delete on[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=on[e];if(u===void 0)throw this.manager.itemError(e),l;delete on[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Yd extends dt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class jd{constructor(){this.type="ShapePath",this.color=new Qe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new As,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,r,n){return this.currentPath.quadraticCurveTo(e,t,r,n),this}bezierCurveTo(e,t,r,n,i,a){return this.currentPath.bezierCurveTo(e,t,r,n,i,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const M=[];for(let _=0,S=p.length;_<S;_++){const E=p[_],w=new Tr;w.curves=E.curves,M.push(w)}return M}function r(p,M){const _=M.length;let S=!1;for(let E=_-1,w=0;w<_;E=w++){let R=M[E],F=M[w],x=F.x-R.x,A=F.y-R.y;if(Math.abs(A)>Number.EPSILON){if(A<0&&(R=M[w],x=-x,F=M[E],A=-A),p.y<R.y||p.y>F.y)continue;if(p.y===R.y){if(p.x===R.x)return!0}else{const j=A*(p.x-R.x)-x*(p.y-R.y);if(j===0)return!0;if(j<0)continue;S=!S}}else{if(p.y!==R.y)continue;if(F.x<=p.x&&p.x<=R.x||R.x<=p.x&&p.x<=F.x)return!0}}return S}const n=ai.isClockWise,i=this.subPaths;if(i.length===0)return[];let a,o,c;const l=[];if(i.length===1)return o=i[0],c=new Tr,c.curves=o.curves,l.push(c),l;let u=!n(i[0].getPoints());u=e?!u:u;const h=[],f=[];let d=[],g=0,v;f[g]=void 0,d[g]=[];for(let p=0,M=i.length;p<M;p++)o=i[p],v=o.getPoints(),a=n(v),a=e?!a:a,a?(!u&&f[g]&&g++,f[g]={s:new Tr,p:v},f[g].s.curves=o.curves,u&&g++,d[g]=[]):d[g].push({h:o,p:v[0]});if(!f[0])return t(i);if(f.length>1){let p=!1,M=0;for(let _=0,S=f.length;_<S;_++)h[_]=[];for(let _=0,S=f.length;_<S;_++){const E=d[_];for(let w=0;w<E.length;w++){const R=E[w];let F=!0;for(let x=0;x<f.length;x++)r(R.p,f[x].p)&&(_!==x&&M++,F?(F=!1,h[x].push(R)):p=!0);F&&h[_].push(R)}}M>0&&p===!1&&(d=h)}let m;for(let p=0,M=f.length;p<M;p++){c=f[p].s,l.push(c),m=d[p];for(let _=0,S=m.length;_<S;_++)c.holes.push(m[_].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ds}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ds);class Qp extends Wo{constructor(e){super(e)}load(e,t,r,n){const i=this,a=new qd(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){const c=i.parse(JSON.parse(o));t&&t(c)},r,n)}parse(e){return new Jd(e)}}class Jd{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const r=[],n=Kd(e,t,this.data);for(let i=0,a=n.length;i<a;i++)r.push(...n[i].toShapes());return r}}function Kd(s,e,t){const r=Array.from(s),n=e/t.resolution,i=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*n,a=[];let o=0,c=0;for(let l=0;l<r.length;l++){const u=r[l];if(u===`
`)o=0,c-=i;else{const h=Zd(u,n,o,c,t);o+=h.offsetX,a.push(h.path)}}return a}function Zd(s,e,t,r,n){const i=n.glyphs[s]||n.glyphs["?"];if(!i){console.error('THREE.Font: character "'+s+'" does not exists in font family '+n.familyName+".");return}const a=new jd;let o,c,l,u,h,f,d,g;if(i.o){const v=i._cachedOutline||(i._cachedOutline=i.o.split(" "));for(let m=0,p=v.length;m<p;)switch(v[m++]){case"m":o=v[m++]*e+t,c=v[m++]*e+r,a.moveTo(o,c);break;case"l":o=v[m++]*e+t,c=v[m++]*e+r,a.lineTo(o,c);break;case"q":l=v[m++]*e+t,u=v[m++]*e+r,h=v[m++]*e+t,f=v[m++]*e+r,a.quadraticCurveTo(h,f,l,u);break;case"b":l=v[m++]*e+t,u=v[m++]*e+r,h=v[m++]*e+t,f=v[m++]*e+r,d=v[m++]*e+t,g=v[m++]*e+r,a.bezierCurveTo(h,f,d,g,l,u);break}}return{offsetX:i.ha*e,path:a}}class Qd extends Gs{constructor(e,t={}){const r=t.font;if(r===void 0)super();else{const n=r.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(n,t)}this.type="TextGeometry"}}function Xo(s,e){this.object=s,this.domElement=e!==void 0?e:document,this.enabled=!0,this.target=new J,this.center=this.target,this.noZoom=!1,this.zoomSpeed=1,this.minDistance=0,this.maxDistance=1/0,this.noRotate=!1,this.rotateSpeed=1,this.noPan=!1,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.noKeys=!1,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40};var t=this,r=new be,n=new be,i=new be,a=new be,o=new be,c=new be,l=new J,u=new J,h=new be,f=new be,d=new be,g=1,v=new J;new J;var m={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_DOLLY:4,TOUCH_PAN:5},p=m.NONE;this.target0=this.target.clone(),this.position0=this.object.position.clone();var M={type:"change"},_={type:"start"},S={type:"end"};this.rotateLeft=function(L){L===void 0&&(L=E())},this.rotateUp=function(L){L===void 0&&(L=E())},this.panLeft=function(L){var V=this.object.matrix.elements;l.set(V[0],V[1],V[2]),l.multiplyScalar(-L),v.add(l)},this.panUp=function(L){var V=this.object.matrix.elements;l.set(V[4],V[5],V[6]),l.multiplyScalar(L),v.add(l)},this.pan=function(L,V){var K=t.domElement===document?t.domElement.body:t.domElement;if(t.object.fov!==void 0){var Q=t.object.position,q=Q.clone().sub(t.target),X=q.length();X*=Math.tan(t.object.fov/2*Math.PI/180),t.panLeft(2*L*X/K.clientHeight),t.panUp(2*V*X/K.clientHeight)}else t.object.top!==void 0?(t.panLeft(L*(t.object.right-t.object.left)/K.clientWidth),t.panUp(V*(t.object.top-t.object.bottom)/K.clientHeight)):console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.")},this.dollyIn=function(L){L===void 0&&(L=w()),g/=L},this.dollyOut=function(L){L===void 0&&(L=w()),g*=L},this.update=function(){t.object.top!==void 0&&(this.object.top=g*this.object.top,this.object.bottom=g*this.object.bottom,this.object.left=g*this.object.left,this.object.right=g*this.object.right,this.object.updateProjectionMatrix());var L=this.object.position;u.copy(L).sub(this.target),this.target.add(v),L.copy(this.target).add(u),this.object.lookAt(this.target),this.dispatchEvent(M),g=1,v.set(0,0,0)},this.reset=function(){p=m.NONE,this.target.copy(this.target0),this.object.position.copy(this.position0),this.update()};function E(){return 2*Math.PI/60/60*t.autoRotateSpeed}function w(){return Math.pow(.95,t.zoomSpeed)}function R(L){if(t.enabled!==!1){if(L.preventDefault(),L.button===2){if(t.noRotate===!0)return;p=m.ROTATE,r.set(L.clientX,L.clientY)}else if(L.button===1){if(t.noZoom===!0)return;p=m.DOLLY,h.set(L.clientX,L.clientY)}else if(L.button===0){if(t.noPan===!0)return;p=m.PAN,a.set(L.clientX,L.clientY)}t.domElement.addEventListener("mousemove",F,!1),t.domElement.addEventListener("mouseup",x,!1),t.dispatchEvent(_)}}function F(L){if(t.enabled!==!1){L.preventDefault();var V=t.domElement===document?t.domElement.body:t.domElement;if(p===m.ROTATE){if(t.noRotate===!0)return;n.set(L.clientX,L.clientY),i.subVectors(n,r),t.rotateLeft(2*Math.PI*i.x/V.clientWidth*t.rotateSpeed),t.rotateUp(2*Math.PI*i.y/V.clientHeight*t.rotateSpeed),r.copy(n)}else if(p===m.DOLLY){if(t.noZoom===!0)return;f.set(L.clientX,L.clientY),d.subVectors(f,h),d.y>0?t.dollyIn():t.dollyOut(),h.copy(f)}else if(p===m.PAN){if(t.noPan===!0)return;o.set(L.clientX,L.clientY),c.subVectors(o,a),t.pan(c.x,c.y),a.copy(o)}t.update()}}function x(){t.enabled!==!1&&(t.domElement.removeEventListener("mousemove",F,!1),t.domElement.removeEventListener("mouseup",x,!1),t.dispatchEvent(S),p=m.NONE)}function A(L){if(!(t.enabled===!1||t.noZoom===!0)){L.preventDefault();var V=0;L.wheelDelta!==void 0?V=L.wheelDelta:L.detail!==void 0&&(V=-L.detail),V>0?t.dollyOut():t.dollyIn(),t.update(),t.dispatchEvent(_),t.dispatchEvent(S)}}function j(L){if(!(t.enabled===!1||t.noKeys===!0||t.noPan===!0))switch(L.keyCode){case t.keys.UP:t.pan(0,t.keyPanSpeed),t.update();break;case t.keys.BOTTOM:t.pan(0,-t.keyPanSpeed),t.update();break;case t.keys.LEFT:t.pan(t.keyPanSpeed,0),t.update();break;case t.keys.RIGHT:t.pan(-t.keyPanSpeed,0),t.update();break}}function B(L){if(t.enabled!==!1){switch(L.touches.length){case 1:if(t.noRotate===!0)return;p=m.TOUCH_ROTATE,r.set(L.touches[0].pageX,L.touches[0].pageY);break;case 2:if(t.noZoom===!0)return;p=m.TOUCH_DOLLY;var V=L.touches[0].pageX-L.touches[1].pageX,K=L.touches[0].pageY-L.touches[1].pageY,Q=Math.sqrt(V*V+K*K);h.set(0,Q);break;case 3:if(t.noPan===!0)return;p=m.TOUCH_PAN,a.set(L.touches[0].pageX,L.touches[0].pageY);break;default:p=m.NONE}t.dispatchEvent(_)}}function D(L){if(t.enabled!==!1){L.preventDefault(),L.stopPropagation();var V=t.domElement===document?t.domElement.body:t.domElement;switch(L.touches.length){case 1:if(t.noRotate===!0||p!==m.TOUCH_ROTATE)return;n.set(L.touches[0].pageX,L.touches[0].pageY),i.subVectors(n,r),t.rotateLeft(2*Math.PI*i.x/V.clientWidth*t.rotateSpeed),t.rotateUp(2*Math.PI*i.y/V.clientHeight*t.rotateSpeed),r.copy(n),t.update();break;case 2:if(t.noZoom===!0||p!==m.TOUCH_DOLLY)return;var K=L.touches[0].pageX-L.touches[1].pageX,Q=L.touches[0].pageY-L.touches[1].pageY,q=Math.sqrt(K*K+Q*Q);f.set(0,q),d.subVectors(f,h),d.y>0?t.dollyOut():t.dollyIn(),h.copy(f),t.update();break;case 3:if(t.noPan===!0||p!==m.TOUCH_PAN)return;o.set(L.touches[0].pageX,L.touches[0].pageY),c.subVectors(o,a),t.pan(c.x,c.y),a.copy(o),t.update();break;default:p=m.NONE}}}function I(){t.enabled!==!1&&(t.dispatchEvent(S),p=m.NONE)}this.domElement.addEventListener("contextmenu",function(L){L.preventDefault()},!1),this.domElement.addEventListener("mousedown",R,!1),this.domElement.addEventListener("mousewheel",A,!1),this.domElement.addEventListener("DOMMouseScroll",A,!1),this.domElement.addEventListener("touchstart",B,!1),this.domElement.addEventListener("touchend",I,!1),this.domElement.addEventListener("touchmove",D,!1),window.addEventListener("keydown",j,!1)}Xo.prototype=Object.create(Rn.prototype);const $d=(s,e)=>typeof e>"u"||+e==0?Math.round(s):(s=+s,e=+e,isNaN(s)||!(typeof e=="number"&&e%1===0)?NaN:(s=s.toString().split("e"),s=Math.round(+(s[0]+"e"+(s[1]?+s[1]-e:-e))),s=s.toString().split("e"),+(s[0]+"e"+(s[1]?+s[1]+e:e)))),ep=(s,e,t,r,n)=>{const i=t.length,a=t[0].length;if(s<0||s>1)throw new Error("t out of bounds [0,1]: "+s);if(e<1)throw new Error("degree must be at least 1 (linear)");if(e>i-1)throw new Error("degree must be less than or equal to point count - 1");if(!n){n=[];for(let g=0;g<i;g++)n[g]=1}if(r){if(r.length!==i+e+1)throw new Error("bad knot vector length")}else{r=[];for(let g=0;g<i+e+1;g++)r[g]=g}const o=[e,r.length-1-e],c=r[o[0]],l=r[o[1]];s=s*(l-c)+c,s=Math.max(s,c),s=Math.min(s,l);let u;for(u=o[0];u<o[1]&&!(s>=r[u]&&s<=r[u+1]);u++);const h=[];for(let g=0;g<i;g++){h[g]=[];for(let v=0;v<a;v++)h[g][v]=t[g][v]*n[g];h[g][a]=n[g]}let f;for(let g=1;g<=e+1;g++)for(let v=u;v>u-e-1+g;v--){f=(s-r[v])/(r[v+e+1-g]-r[v]);for(let m=0;m<a+1;m++)h[v][m]=(1-f)*h[v-1][m]+f*h[v][m]}const d=[];for(let g=0;g<a;g++)d[g]=$d(h[u][g]/h[u][a],-9);return d};function tp(){var s=Object.create(null);function e(n,i){var a=n.id,o=n.name,c=n.dependencies;c===void 0&&(c=[]);var l=n.init;l===void 0&&(l=function(){});var u=n.getTransferables;if(u===void 0&&(u=null),!s[a])try{c=c.map(function(f){return f&&f.isWorkerModule&&(e(f,function(d){if(d instanceof Error)throw d}),f=s[f.id].value),f}),l=r("<"+o+">.init",l),u&&(u=r("<"+o+">.getTransferables",u));var h=null;typeof l=="function"?h=l.apply(void 0,c):console.error("worker module init function failed to rehydrate"),s[a]={id:a,value:h,getTransferables:u},i(h)}catch(f){f&&f.noLog||console.error(f),i(f)}}function t(n,i){var a,o=n.id,c=n.args;(!s[o]||typeof s[o].value!="function")&&i(new Error("Worker module "+o+": not found or its 'init' did not return a function"));try{var l=(a=s[o]).value.apply(a,c);l&&typeof l.then=="function"?l.then(u,function(h){return i(h instanceof Error?h:new Error(""+h))}):u(l)}catch(h){i(h)}function u(h){try{var f=s[o].getTransferables&&s[o].getTransferables(h);(!f||!Array.isArray(f)||!f.length)&&(f=void 0),i(h,f)}catch(d){console.error(d),i(d)}}}function r(n,i){var a=void 0;self.troikaDefine=function(c){return a=c};var o=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+i+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(c){console.error(c)}return URL.revokeObjectURL(o),delete self.troikaDefine,a}self.addEventListener("message",function(n){var i=n.data,a=i.messageId,o=i.action,c=i.data;try{o==="registerModule"&&e(c,function(l){l instanceof Error?postMessage({messageId:a,success:!1,error:l.message}):postMessage({messageId:a,success:!0,result:{isCallable:typeof l=="function"}})}),o==="callModule"&&t(c,function(l,u){l instanceof Error?postMessage({messageId:a,success:!1,error:l.message}):postMessage({messageId:a,success:!0,result:l},u||void 0)})}catch(l){postMessage({messageId:a,success:!1,error:l.stack})}})}function np(s){var e=function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];return e._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=s.dependencies,r=s.init;t=Array.isArray(t)?t.map(function(i){return i&&i._getInitResult?i._getInitResult():i}):[];var n=Promise.all(t).then(function(i){return r.apply(null,i)});return e._getInitResult=function(){return n},n},e}var qo=function(){var s=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),s=!0}catch(t){typeof process<"u",console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return qo=function(){return s},s},ip=0,rp=0,xs=!1,Pi=Object.create(null),Ui=Object.create(null),Cs=Object.create(null);function di(s){if((!s||typeof s.init!="function")&&!xs)throw new Error("requires `options.init` function");var e=s.dependencies,t=s.init,r=s.getTransferables,n=s.workerId;if(!qo())return np(s);n==null&&(n="#default");var i="workerModule"+ ++ip,a=s.name||i,o=null;e=e&&e.map(function(l){return typeof l=="function"&&!l.workerModuleData&&(xs=!0,l=di({workerId:n,name:"<"+a+"> function dependency: "+l.name,init:`function(){return (
`+br(l)+`
)}`}),xs=!1),l&&l.workerModuleData&&(l=l.workerModuleData),l});function c(){for(var l=[],u=arguments.length;u--;)l[u]=arguments[u];if(!o){o=Za(n,"registerModule",c.workerModuleData);var h=function(){o=null,Ui[n].delete(h)};(Ui[n]||(Ui[n]=new Set)).add(h)}return o.then(function(f){var d=f.isCallable;if(d)return Za(n,"callModule",{id:i,args:l});throw new Error("Worker module function was called but `init` did not return a callable function")})}return c.workerModuleData={isWorkerModule:!0,id:i,name:a,dependencies:e,init:br(t),getTransferables:r&&br(r)},c}function sp(s){Ui[s]&&Ui[s].forEach(function(e){e()}),Pi[s]&&(Pi[s].terminate(),delete Pi[s])}function br(s){var e=s.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function ap(s){var e=Pi[s];if(!e){var t=br(tp);e=Pi[s]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+s.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(r){var n=r.data,i=n.messageId,a=Cs[i];if(!a)throw new Error("WorkerModule response with empty or unknown messageId");delete Cs[i],a(n)}}return e}function Za(s,e,t){return new Promise(function(r,n){var i=++rp;Cs[i]=function(a){a.success?r(a.result):n(new Error("Error in worker "+e+" call: "+a.error))},ap(s).postMessage({messageId:i,action:e,data:t})})}function Yo(){var s=function(e){function t(q,X,O,z,G,b,P,N){var y=1-P;N.x=y*y*q+2*y*P*O+P*P*G,N.y=y*y*X+2*y*P*z+P*P*b}function r(q,X,O,z,G,b,P,N,y,k){var se=1-y;k.x=se*se*se*q+3*se*se*y*O+3*se*y*y*G+y*y*y*P,k.y=se*se*se*X+3*se*se*y*z+3*se*y*y*b+y*y*y*N}function n(q,X){for(var O=/([MLQCZ])([^MLQCZ]*)/g,z,G,b,P,N;z=O.exec(q);){var y=z[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(k){return parseFloat(k)});switch(z[1]){case"M":P=G=y[0],N=b=y[1];break;case"L":(y[0]!==P||y[1]!==N)&&X("L",P,N,P=y[0],N=y[1]);break;case"Q":{X("Q",P,N,P=y[2],N=y[3],y[0],y[1]);break}case"C":{X("C",P,N,P=y[4],N=y[5],y[0],y[1],y[2],y[3]);break}case"Z":(P!==G||N!==b)&&X("L",P,N,G,b);break}}}function i(q,X,O){O===void 0&&(O=16);var z={x:0,y:0};n(q,function(G,b,P,N,y,k,se,Z,oe){switch(G){case"L":X(b,P,N,y);break;case"Q":{for(var W=b,$=P,ne=1;ne<O;ne++)t(b,P,k,se,N,y,ne/(O-1),z),X(W,$,z.x,z.y),W=z.x,$=z.y;break}case"C":{for(var fe=b,le=P,Se=1;Se<O;Se++)r(b,P,k,se,Z,oe,N,y,Se/(O-1),z),X(fe,le,z.x,z.y),fe=z.x,le=z.y;break}}})}var a="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",o="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",c=new WeakMap,l={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(q,X){var O=q.getContext?q.getContext("webgl",l):q,z=c.get(O);if(!z){let se=function(fe){var le=b[fe];if(!le&&(le=b[fe]=O.getExtension(fe),!le))throw new Error(fe+" not supported");return le},Z=function(fe,le){var Se=O.createShader(le);return O.shaderSource(Se,fe),O.compileShader(Se),Se},oe=function(fe,le,Se,ce){if(!P[fe]){var _e={},Ee={},he=O.createProgram();O.attachShader(he,Z(le,O.VERTEX_SHADER)),O.attachShader(he,Z(Se,O.FRAGMENT_SHADER)),O.linkProgram(he),P[fe]={program:he,transaction:function(T){O.useProgram(he),T({setUniform:function(ie,me){for(var de=[],Me=arguments.length-2;Me-- >0;)de[Me]=arguments[Me+2];var ve=Ee[me]||(Ee[me]=O.getUniformLocation(he,me));O["uniform"+ie].apply(O,[ve].concat(de))},setAttribute:function(ie,me,de,Me,ve){var re=_e[ie];re||(re=_e[ie]={buf:O.createBuffer(),loc:O.getAttribLocation(he,ie),data:null}),O.bindBuffer(O.ARRAY_BUFFER,re.buf),O.vertexAttribPointer(re.loc,me,O.FLOAT,!1,0,0),O.enableVertexAttribArray(re.loc),G?O.vertexAttribDivisor(re.loc,Me):se("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(re.loc,Me),ve!==re.data&&(O.bufferData(O.ARRAY_BUFFER,ve,de),re.data=ve)}})}}}P[fe].transaction(ce)},W=function(fe,le){y++;try{O.activeTexture(O.TEXTURE0+y);var Se=N[fe];Se||(Se=N[fe]=O.createTexture(),O.bindTexture(O.TEXTURE_2D,Se),O.texParameteri(O.TEXTURE_2D,O.TEXTURE_MIN_FILTER,O.NEAREST),O.texParameteri(O.TEXTURE_2D,O.TEXTURE_MAG_FILTER,O.NEAREST)),O.bindTexture(O.TEXTURE_2D,Se),le(Se,y)}finally{y--}},$=function(fe,le,Se){var ce=O.createFramebuffer();k.push(ce),O.bindFramebuffer(O.FRAMEBUFFER,ce),O.activeTexture(O.TEXTURE0+le),O.bindTexture(O.TEXTURE_2D,fe),O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,fe,0);try{Se(ce)}finally{O.deleteFramebuffer(ce),O.bindFramebuffer(O.FRAMEBUFFER,k[--k.length-1]||null)}},ne=function(){b={},P={},N={},y=-1,k.length=0};var G=typeof WebGL2RenderingContext<"u"&&O instanceof WebGL2RenderingContext,b={},P={},N={},y=-1,k=[];O.canvas.addEventListener("webglcontextlost",function(fe){ne(),fe.preventDefault()},!1),c.set(O,z={gl:O,isWebGL2:G,getExtension:se,withProgram:oe,withTexture:W,withTextureFramebuffer:$,handleContextLoss:ne})}X(z)}function h(q,X,O,z,G,b,P,N){P===void 0&&(P=15),N===void 0&&(N=null),u(q,function(y){var k=y.gl,se=y.withProgram,Z=y.withTexture;Z("copy",function(oe,W){k.texImage2D(k.TEXTURE_2D,0,k.RGBA,G,b,0,k.RGBA,k.UNSIGNED_BYTE,X),se("copy",a,o,function($){var ne=$.setUniform,fe=$.setAttribute;fe("aUV",2,k.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),ne("1i","image",W),k.bindFramebuffer(k.FRAMEBUFFER,N||null),k.disable(k.BLEND),k.colorMask(P&8,P&4,P&2,P&1),k.viewport(O,z,G,b),k.scissor(O,z,G,b),k.drawArrays(k.TRIANGLES,0,3)})})})}function f(q,X,O){var z=q.width,G=q.height;u(q,function(b){var P=b.gl,N=new Uint8Array(z*G*4);P.readPixels(0,0,z,G,P.RGBA,P.UNSIGNED_BYTE,N),q.width=X,q.height=O,h(P,N,0,0,z,G)})}var d=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:h,resizeWebGLCanvasWithoutClearing:f});function g(q,X,O,z,G,b){b===void 0&&(b=1);var P=new Uint8Array(q*X),N=z[2]-z[0],y=z[3]-z[1],k=[];i(O,function(fe,le,Se,ce){k.push({x1:fe,y1:le,x2:Se,y2:ce,minX:Math.min(fe,Se),minY:Math.min(le,ce),maxX:Math.max(fe,Se),maxY:Math.max(le,ce)})}),k.sort(function(fe,le){return fe.maxX-le.maxX});for(var se=0;se<q;se++)for(var Z=0;Z<X;Z++){var oe=$(z[0]+N*(se+.5)/q,z[1]+y*(Z+.5)/X),W=Math.pow(1-Math.abs(oe)/G,b)/2;oe<0&&(W=1-W),W=Math.max(0,Math.min(255,Math.round(W*255))),P[Z*q+se]=W}return P;function $(fe,le){for(var Se=1/0,ce=1/0,_e=k.length;_e--;){var Ee=k[_e];if(Ee.maxX+ce<=fe)break;if(fe+ce>Ee.minX&&le-ce<Ee.maxY&&le+ce>Ee.minY){var he=p(fe,le,Ee.x1,Ee.y1,Ee.x2,Ee.y2);he<Se&&(Se=he,ce=Math.sqrt(Se))}}return ne(fe,le)&&(ce=-ce),ce}function ne(fe,le){for(var Se=0,ce=k.length;ce--;){var _e=k[ce];if(_e.maxX<=fe)break;var Ee=_e.y1>le!=_e.y2>le&&fe<(_e.x2-_e.x1)*(le-_e.y1)/(_e.y2-_e.y1)+_e.x1;Ee&&(Se+=_e.y1<_e.y2?1:-1)}return Se!==0}}function v(q,X,O,z,G,b,P,N,y,k){b===void 0&&(b=1),N===void 0&&(N=0),y===void 0&&(y=0),k===void 0&&(k=0),m(q,X,O,z,G,b,P,null,N,y,k)}function m(q,X,O,z,G,b,P,N,y,k,se){b===void 0&&(b=1),y===void 0&&(y=0),k===void 0&&(k=0),se===void 0&&(se=0);for(var Z=g(q,X,O,z,G,b),oe=new Uint8Array(Z.length*4),W=0;W<Z.length;W++)oe[W*4+se]=Z[W];h(P,oe,y,k,q,X,1<<3-se,N)}function p(q,X,O,z,G,b){var P=G-O,N=b-z,y=P*P+N*N,k=y?Math.max(0,Math.min(1,((q-O)*P+(X-z)*N)/y)):0,se=q-(O+k*P),Z=X-(z+k*N);return se*se+Z*Z}var M=Object.freeze({__proto__:null,generate:g,generateIntoCanvas:v,generateIntoFramebuffer:m}),_="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",S="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",E="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",w=new Float32Array([0,0,2,0,0,2]),R=null,F=!1,x={},A=new WeakMap;function j(q){if(!F&&!L(q))throw new Error("WebGL generation not supported")}function B(q,X,O,z,G,b,P){if(b===void 0&&(b=1),P===void 0&&(P=null),!P&&(P=R,!P)){var N=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!N)throw new Error("OffscreenCanvas or DOM canvas not supported");P=R=N.getContext("webgl",{depth:!1})}j(P);var y=new Uint8Array(q*X*4);u(P,function(oe){var W=oe.gl,$=oe.withTexture,ne=oe.withTextureFramebuffer;$("readable",function(fe,le){W.texImage2D(W.TEXTURE_2D,0,W.RGBA,q,X,0,W.RGBA,W.UNSIGNED_BYTE,null),ne(fe,le,function(Se){I(q,X,O,z,G,b,W,Se,0,0,0),W.readPixels(0,0,q,X,W.RGBA,W.UNSIGNED_BYTE,y)})})});for(var k=new Uint8Array(q*X),se=0,Z=0;se<y.length;se+=4)k[Z++]=y[se];return k}function D(q,X,O,z,G,b,P,N,y,k){b===void 0&&(b=1),N===void 0&&(N=0),y===void 0&&(y=0),k===void 0&&(k=0),I(q,X,O,z,G,b,P,null,N,y,k)}function I(q,X,O,z,G,b,P,N,y,k,se){b===void 0&&(b=1),y===void 0&&(y=0),k===void 0&&(k=0),se===void 0&&(se=0),j(P);var Z=[];i(O,function(oe,W,$,ne){Z.push(oe,W,$,ne)}),Z=new Float32Array(Z),u(P,function(oe){var W=oe.gl,$=oe.isWebGL2,ne=oe.getExtension,fe=oe.withProgram,le=oe.withTexture,Se=oe.withTextureFramebuffer,ce=oe.handleContextLoss;if(le("rawDistances",function(_e,Ee){(q!==_e._lastWidth||X!==_e._lastHeight)&&W.texImage2D(W.TEXTURE_2D,0,W.RGBA,_e._lastWidth=q,_e._lastHeight=X,0,W.RGBA,W.UNSIGNED_BYTE,null),fe("main",_,S,function(he){var C=he.setAttribute,T=he.setUniform,Y=!$&&ne("ANGLE_instanced_arrays"),ie=!$&&ne("EXT_blend_minmax");C("aUV",2,W.STATIC_DRAW,0,w),C("aLineSegment",4,W.DYNAMIC_DRAW,1,Z),T.apply(void 0,["4f","uGlyphBounds"].concat(z)),T("1f","uMaxDistance",G),T("1f","uExponent",b),Se(_e,Ee,function(me){W.enable(W.BLEND),W.colorMask(!0,!0,!0,!0),W.viewport(0,0,q,X),W.scissor(0,0,q,X),W.blendFunc(W.ONE,W.ONE),W.blendEquationSeparate(W.FUNC_ADD,$?W.MAX:ie.MAX_EXT),W.clear(W.COLOR_BUFFER_BIT),$?W.drawArraysInstanced(W.TRIANGLES,0,3,Z.length/4):Y.drawArraysInstancedANGLE(W.TRIANGLES,0,3,Z.length/4)})}),fe("post",a,E,function(he){he.setAttribute("aUV",2,W.STATIC_DRAW,0,w),he.setUniform("1i","tex",Ee),W.bindFramebuffer(W.FRAMEBUFFER,N),W.disable(W.BLEND),W.colorMask(se===0,se===1,se===2,se===3),W.viewport(y,k,q,X),W.scissor(y,k,q,X),W.drawArrays(W.TRIANGLES,0,3)})}),W.isContextLost())throw ce(),new Error("webgl context lost")})}function L(q){var X=!q||q===R?x:q.canvas||q,O=A.get(X);if(O===void 0){F=!0;var z=null;try{var G=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],b=B(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,q);O=b&&G.length===b.length&&b.every(function(P,N){return P===G[N]}),O||(z="bad trial run results",console.info(G,b))}catch(P){O=!1,z=P.message}z&&console.warn("WebGL SDF generation not supported:",z),F=!1,A.set(X,O)}return O}var V=Object.freeze({__proto__:null,generate:B,generateIntoCanvas:D,generateIntoFramebuffer:I,isSupported:L});function K(q,X,O,z,G,b){G===void 0&&(G=Math.max(z[2]-z[0],z[3]-z[1])/2),b===void 0&&(b=1);try{return B.apply(V,arguments)}catch(P){return console.info("WebGL SDF generation failed, falling back to JS",P),g.apply(M,arguments)}}function Q(q,X,O,z,G,b,P,N,y,k){G===void 0&&(G=Math.max(z[2]-z[0],z[3]-z[1])/2),b===void 0&&(b=1),N===void 0&&(N=0),y===void 0&&(y=0),k===void 0&&(k=0);try{return D.apply(V,arguments)}catch(se){return console.info("WebGL SDF generation failed, falling back to JS",se),v.apply(M,arguments)}}return e.forEachPathCommand=n,e.generate=K,e.generateIntoCanvas=Q,e.javascript=M,e.pathToLineSegments=i,e.webgl=V,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return s}function op(){var s=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},r={},n={};r.L=1,n[1]="L",Object.keys(t).forEach(function(ce,_e){r[ce]=1<<_e+1,n[r[ce]]=ce}),Object.freeze(r);var i=r.LRI|r.RLI|r.FSI,a=r.L|r.R|r.AL,o=r.B|r.S|r.WS|r.ON|r.FSI|r.LRI|r.RLI|r.PDI,c=r.BN|r.RLE|r.LRE|r.RLO|r.LRO|r.PDF,l=r.S|r.WS|r.B|i|r.PDI|c,u=null;function h(){if(!u){u=new Map;var ce=function(Ee){if(t.hasOwnProperty(Ee)){var he=0;t[Ee].split(",").forEach(function(C){var T=C.split("+"),Y=T[0],ie=T[1];Y=parseInt(Y,36),ie=ie?parseInt(ie,36):0,u.set(he+=Y,r[Ee]);for(var me=0;me<ie;me++)u.set(++he,r[Ee])})}};for(var _e in t)ce(_e)}}function f(ce){return h(),u.get(ce.codePointAt(0))||r.L}function d(ce){return n[f(ce)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function v(ce,_e){var Ee=36,he=0,C=new Map,T=_e&&new Map,Y;return ce.split(",").forEach(function ie(me){if(me.indexOf("+")!==-1)for(var de=+me;de--;)ie(Y);else{Y=me;var Me=me.split(">"),ve=Me[0],re=Me[1];ve=String.fromCodePoint(he+=parseInt(ve,Ee)),re=String.fromCodePoint(he+=parseInt(re,Ee)),C.set(ve,re),_e&&T.set(re,ve)}}),{map:C,reverseMap:T}}var m,p,M;function _(){if(!m){var ce=v(g.pairs,!0),_e=ce.map,Ee=ce.reverseMap;m=_e,p=Ee,M=v(g.canonical,!1).map}}function S(ce){return _(),m.get(ce)||null}function E(ce){return _(),p.get(ce)||null}function w(ce){return _(),M.get(ce)||null}var R=r.L,F=r.R,x=r.EN,A=r.ES,j=r.ET,B=r.AN,D=r.CS,I=r.B,L=r.S,V=r.ON,K=r.BN,Q=r.NSM,q=r.AL,X=r.LRO,O=r.RLO,z=r.LRE,G=r.RLE,b=r.PDF,P=r.LRI,N=r.RLI,y=r.FSI,k=r.PDI;function se(ce,_e){for(var Ee=125,he=new Uint32Array(ce.length),C=0;C<ce.length;C++)he[C]=f(ce[C]);var T=new Map;function Y(Et,Nt){var Tt=he[Et];he[Et]=Nt,T.set(Tt,T.get(Tt)-1),Tt&o&&T.set(o,T.get(o)-1),T.set(Nt,(T.get(Nt)||0)+1),Nt&o&&T.set(o,(T.get(o)||0)+1)}for(var ie=new Uint8Array(ce.length),me=new Map,de=[],Me=null,ve=0;ve<ce.length;ve++)Me||de.push(Me={start:ve,end:ce.length-1,level:_e==="rtl"?1:_e==="ltr"?0:ea(ve,!1)}),he[ve]&I&&(Me.end=ve,Me=null);for(var re=G|z|O|X|i|k|b|I,Ae=function(Et){return Et+(Et&1?1:2)},Ce=function(Et){return Et+(Et&1?2:1)},Te=0;Te<de.length;Te++){Me=de[Te];var ye=[{_level:Me.level,_override:0,_isolate:0}],xe=void 0,De=0,Ie=0,je=0;T.clear();for(var H=Me.start;H<=Me.end;H++){var ee=he[H];if(xe=ye[ye.length-1],T.set(ee,(T.get(ee)||0)+1),ee&o&&T.set(o,(T.get(o)||0)+1),ee&re)if(ee&(G|z)){ie[H]=xe._level;var pe=(ee===G?Ce:Ae)(xe._level);pe<=Ee&&!De&&!Ie?ye.push({_level:pe,_override:0,_isolate:0}):De||Ie++}else if(ee&(O|X)){ie[H]=xe._level;var Le=(ee===O?Ce:Ae)(xe._level);Le<=Ee&&!De&&!Ie?ye.push({_level:Le,_override:ee&O?F:R,_isolate:0}):De||Ie++}else if(ee&i){ee&y&&(ee=ea(H+1,!0)===1?N:P),ie[H]=xe._level,xe._override&&Y(H,xe._override);var we=(ee===N?Ce:Ae)(xe._level);we<=Ee&&De===0&&Ie===0?(je++,ye.push({_level:we,_override:0,_isolate:1,_isolInitIndex:H})):De++}else if(ee&k){if(De>0)De--;else if(je>0){for(Ie=0;!ye[ye.length-1]._isolate;)ye.pop();var Pe=ye[ye.length-1]._isolInitIndex;Pe!=null&&(me.set(Pe,H),me.set(H,Pe)),ye.pop(),je--}xe=ye[ye.length-1],ie[H]=xe._level,xe._override&&Y(H,xe._override)}else ee&b?(De===0&&(Ie>0?Ie--:!xe._isolate&&ye.length>1&&(ye.pop(),xe=ye[ye.length-1])),ie[H]=xe._level):ee&I&&(ie[H]=Me.level);else ie[H]=xe._level,xe._override&&ee!==K&&Y(H,xe._override)}for(var Be=[],Ve=null,Oe=Me.start;Oe<=Me.end;Oe++){var ke=he[Oe];if(!(ke&c)){var $e=ie[Oe],et=ke&i,nt=ke===k;Ve&&$e===Ve._level?(Ve._end=Oe,Ve._endsWithIsolInit=et):Be.push(Ve={_start:Oe,_end:Oe,_level:$e,_startsWithPDI:nt,_endsWithIsolInit:et})}}for(var yt=[],Wt=0;Wt<Be.length;Wt++){var Ft=Be[Wt];if(!Ft._startsWithPDI||Ft._startsWithPDI&&!me.has(Ft._start)){for(var Xt=[Ve=Ft],U=void 0;Ve&&Ve._endsWithIsolInit&&(U=me.get(Ve._end))!=null;)for(var ae=Wt+1;ae<Be.length;ae++)if(Be[ae]._start===U){Xt.push(Ve=Be[ae]);break}for(var ue=[],te=0;te<Xt.length;te++)for(var ge=Xt[te],Fe=ge._start;Fe<=ge._end;Fe++)ue.push(Fe);for(var Ne=ie[ue[0]],Ge=Me.level,He=ue[0]-1;He>=0;He--)if(!(he[He]&c)){Ge=ie[He];break}var We=ue[ue.length-1],qe=ie[We],Ye=Me.level;if(!(he[We]&i)){for(var Ze=We+1;Ze<=Me.end;Ze++)if(!(he[Ze]&c)){Ye=ie[Ze];break}}yt.push({_seqIndices:ue,_sosType:Math.max(Ge,Ne)%2?F:R,_eosType:Math.max(Ye,qe)%2?F:R})}}for(var ot=0;ot<yt.length;ot++){var St=yt[ot],Ue=St._seqIndices,tt=St._sosType,Je=St._eosType,qt=ie[Ue[0]]&1?F:R;if(T.get(Q))for(var it=0;it<Ue.length;it++){var Yt=Ue[it];if(he[Yt]&Q){for(var Ln=tt,jt=it-1;jt>=0;jt--)if(!(he[Ue[jt]]&c)){Ln=he[Ue[jt]];break}Y(Yt,Ln&(i|k)?V:Ln)}}if(T.get(x))for(var ln=0;ln<Ue.length;ln++){var ht=Ue[ln];if(he[ht]&x)for(var Pt=ln-1;Pt>=-1;Pt--){var Pn=Pt===-1?tt:he[Ue[Pt]];if(Pn&a){Pn===q&&Y(ht,B);break}}}if(T.get(q))for(var mt=0;mt<Ue.length;mt++){var Un=Ue[mt];he[Un]&q&&Y(Un,F)}if(T.get(A)||T.get(D))for(var mn=1;mn<Ue.length-1;mn++){var Dn=Ue[mn];if(he[Dn]&(A|D)){for(var Fn=0,Dr=0,Fr=mn-1;Fr>=0&&(Fn=he[Ue[Fr]],!!(Fn&c));Fr--);for(var Ir=mn+1;Ir<Ue.length&&(Dr=he[Ue[Ir]],!!(Dr&c));Ir++);Fn===Dr&&(he[Dn]===A?Fn===x:Fn&(x|B))&&Y(Dn,Fn)}}if(T.get(x))for(var Jt=0;Jt<Ue.length;Jt++){var il=Ue[Jt];if(he[il]&x){for(var Gi=Jt-1;Gi>=0&&he[Ue[Gi]]&(j|c);Gi--)Y(Ue[Gi],x);for(Jt++;Jt<Ue.length&&he[Ue[Jt]]&(j|c|x);Jt++)he[Ue[Jt]]!==x&&Y(Ue[Jt],x)}}if(T.get(j)||T.get(A)||T.get(D))for(var pi=0;pi<Ue.length;pi++){var zs=Ue[pi];if(he[zs]&(j|A|D)){Y(zs,V);for(var ki=pi-1;ki>=0&&he[Ue[ki]]&c;ki--)Y(Ue[ki],V);for(var zi=pi+1;zi<Ue.length&&he[Ue[zi]]&c;zi++)Y(Ue[zi],V)}}if(T.get(x))for(var Nr=0,Hs=tt;Nr<Ue.length;Nr++){var Vs=Ue[Nr],Or=he[Vs];Or&x?Hs===R&&Y(Vs,R):Or&a&&(Hs=Or)}if(T.get(o)){var mi=F|x|B,Ws=mi|R,Hi=[];{for(var In=[],Nn=0;Nn<Ue.length;Nn++)if(he[Ue[Nn]]&o){var gi=ce[Ue[Nn]],Xs=void 0;if(S(gi)!==null)if(In.length<63)In.push({char:gi,seqIndex:Nn});else break;else if((Xs=E(gi))!==null)for(var vi=In.length-1;vi>=0;vi--){var Br=In[vi].char;if(Br===Xs||Br===E(w(gi))||S(w(Br))===gi){Hi.push([In[vi].seqIndex,Nn]),In.length=vi;break}}}Hi.sort(function(Et,Nt){return Et[0]-Nt[0]})}for(var Gr=0;Gr<Hi.length;Gr++){for(var qs=Hi[Gr],Vi=qs[0],kr=qs[1],Ys=!1,It=0,zr=Vi+1;zr<kr;zr++){var js=Ue[zr];if(he[js]&Ws){Ys=!0;var Js=he[js]&mi?F:R;if(Js===qt){It=Js;break}}}if(Ys&&!It){It=tt;for(var Hr=Vi-1;Hr>=0;Hr--){var Ks=Ue[Hr];if(he[Ks]&Ws){var Zs=he[Ks]&mi?F:R;Zs!==qt?It=Zs:It=qt;break}}}if(It){if(he[Ue[Vi]]=he[Ue[kr]]=It,It!==qt){for(var _i=Vi+1;_i<Ue.length;_i++)if(!(he[Ue[_i]]&c)){f(ce[Ue[_i]])&Q&&(he[Ue[_i]]=It);break}}if(It!==qt){for(var xi=kr+1;xi<Ue.length;xi++)if(!(he[Ue[xi]]&c)){f(ce[Ue[xi]])&Q&&(he[Ue[xi]]=It);break}}}}for(var cn=0;cn<Ue.length;cn++)if(he[Ue[cn]]&o){for(var Qs=cn,Vr=cn,Wr=tt,Si=cn-1;Si>=0;Si--)if(he[Ue[Si]]&c)Qs=Si;else{Wr=he[Ue[Si]]&mi?F:R;break}for(var $s=Je,Mi=cn+1;Mi<Ue.length;Mi++)if(he[Ue[Mi]]&(o|c))Vr=Mi;else{$s=he[Ue[Mi]]&mi?F:R;break}for(var Xr=Qs;Xr<=Vr;Xr++)he[Ue[Xr]]=Wr===$s?Wr:qt;cn=Vr}}}for(var At=Me.start;At<=Me.end;At++){var rl=ie[At],Wi=he[At];if(rl&1?Wi&(R|x|B)&&ie[At]++:Wi&F?ie[At]++:Wi&(B|x)&&(ie[At]+=2),Wi&c&&(ie[At]=At===0?Me.level:ie[At-1]),At===Me.end||f(ce[At])&(L|I))for(var Xi=At;Xi>=0&&f(ce[Xi])&l;Xi--)ie[Xi]=Me.level}}return{levels:ie,paragraphs:de};function ea(Et,Nt){for(var Tt=Et;Tt<ce.length;Tt++){var un=he[Tt];if(un&(F|q))return 1;if(un&(I|R)||Nt&&un===k)return 0;if(un&i){var ta=sl(Tt);Tt=ta===-1?ce.length:ta}}return 0}function sl(Et){for(var Nt=1,Tt=Et+1;Tt<ce.length;Tt++){var un=he[Tt];if(un&I)break;if(un&k){if(--Nt===0)return Tt}else un&i&&Nt++}return-1}}var Z="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",oe;function W(){if(!oe){var ce=v(Z,!0),_e=ce.map,Ee=ce.reverseMap;Ee.forEach(function(he,C){_e.set(C,he)}),oe=_e}}function $(ce){return W(),oe.get(ce)||null}function ne(ce,_e,Ee,he){var C=ce.length;Ee=Math.max(0,Ee==null?0:+Ee),he=Math.min(C-1,he==null?C-1:+he);for(var T=new Map,Y=Ee;Y<=he;Y++)if(_e[Y]&1){var ie=$(ce[Y]);ie!==null&&T.set(Y,ie)}return T}function fe(ce,_e,Ee,he){var C=ce.length;Ee=Math.max(0,Ee==null?0:+Ee),he=Math.min(C-1,he==null?C-1:+he);var T=[];return _e.paragraphs.forEach(function(Y){var ie=Math.max(Ee,Y.start),me=Math.min(he,Y.end);if(ie<me){for(var de=_e.levels.slice(ie,me+1),Me=me;Me>=ie&&f(ce[Me])&l;Me--)de[Me]=Y.level;for(var ve=Y.level,re=1/0,Ae=0;Ae<de.length;Ae++){var Ce=de[Ae];Ce>ve&&(ve=Ce),Ce<re&&(re=Ce|1)}for(var Te=ve;Te>=re;Te--)for(var ye=0;ye<de.length;ye++)if(de[ye]>=Te){for(var xe=ye;ye+1<de.length&&de[ye+1]>=Te;)ye++;ye>xe&&T.push([xe+ie,ye+ie])}}}),T}function le(ce,_e,Ee,he){var C=Se(ce,_e,Ee,he),T=[].concat(ce);return C.forEach(function(Y,ie){T[ie]=(_e.levels[Y]&1?$(ce[Y]):null)||ce[Y]}),T.join("")}function Se(ce,_e,Ee,he){for(var C=fe(ce,_e,Ee,he),T=[],Y=0;Y<ce.length;Y++)T[Y]=Y;return C.forEach(function(ie){for(var me=ie[0],de=ie[1],Me=T.slice(me,de+1),ve=Me.length;ve--;)T[de-ve]=Me[ve]}),T}return e.closingToOpeningBracket=E,e.getBidiCharType=f,e.getBidiCharTypeName=d,e.getCanonicalBracket=w,e.getEmbeddingLevels=se,e.getMirroredCharacter=$,e.getMirroredCharactersMap=ne,e.getReorderSegments=fe,e.getReorderedIndices=Se,e.getReorderedString=le,e.openingToClosingBracket=S,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return s}const jo=/\bvoid\s+main\s*\(\s*\)\s*{/g;function Ls(s){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(r,n){let i=ze[n];return i?Ls(i):r}return s.replace(e,t)}const gt=[];for(let s=0;s<256;s++)gt[s]=(s<16?"0":"")+s.toString(16);function lp(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(gt[s&255]+gt[s>>8&255]+gt[s>>16&255]+gt[s>>24&255]+"-"+gt[e&255]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[t&63|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[r&255]+gt[r>>8&255]+gt[r>>16&255]+gt[r>>24&255]).toUpperCase()}const xn=Object.assign||function(){let s=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let r=arguments[e];if(r)for(let n in r)Object.prototype.hasOwnProperty.call(r,n)&&(s[n]=r[n])}return s},cp=Date.now(),Qa=new WeakMap,$a=new Map;let up=1e10;function Ps(s,e){const t=pp(e);let r=Qa.get(s);if(r||Qa.set(s,r=Object.create(null)),r[t])return new r[t];const n=`_onBeforeCompile${t}`,i=function(l,u){s.onBeforeCompile.call(this,l,u);const h=this.customProgramCacheKey()+"|"+l.vertexShader+"|"+l.fragmentShader;let f=$a[h];if(!f){const d=hp(this,l,e,t);f=$a[h]=d}l.vertexShader=f.vertexShader,l.fragmentShader=f.fragmentShader,xn(l.uniforms,this.uniforms),e.timeUniform&&(l.uniforms[e.timeUniform]={get value(){return Date.now()-cp}}),this[n]&&this[n](l)},a=function(){return o(e.chained?s:s.clone())},o=function(l){const u=Object.create(l,c);return Object.defineProperty(u,"baseMaterial",{value:s}),Object.defineProperty(u,"id",{value:up++}),u.uuid=lp(),u.uniforms=xn({},l.uniforms,e.uniforms),u.defines=xn({},l.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=xn({},l.extensions,e.extensions),u._listeners=void 0,u},c={constructor:{value:a},isDerivedMaterial:{value:!0},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return s.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return i},set(l){this[n]=l}},copy:{writable:!0,configurable:!0,value:function(l){return s.copy.call(this,l),!s.isShaderMaterial&&!s.isDerivedMaterial&&(xn(this.extensions,l.extensions),xn(this.defines,l.defines),xn(this.uniforms,Is.clone(l.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const l=new s.constructor;return o(l).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let l=this._depthMaterial;return l||(l=this._depthMaterial=Ps(s.isDerivedMaterial?s.getDepthMaterial():new Uo({depthPacking:3201}),e),l.defines.IS_DEPTH_MATERIAL="",l.uniforms=this.uniforms),l}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let l=this._distanceMaterial;return l||(l=this._distanceMaterial=Ps(s.isDerivedMaterial?s.getDistanceMaterial():new Do,e),l.defines.IS_DISTANCE_MATERIAL="",l.uniforms=this.uniforms),l}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:l,_distanceMaterial:u}=this;l&&l.dispose(),u&&u.dispose(),s.dispose.call(this)}}};return r[t]=a,new a}function hp(s,{vertexShader:e,fragmentShader:t},r,n){let{vertexDefs:i,vertexMainIntro:a,vertexMainOutro:o,vertexTransform:c,fragmentDefs:l,fragmentMainIntro:u,fragmentMainOutro:h,fragmentColorTransform:f,customRewriter:d,timeUniform:g}=r;if(i=i||"",a=a||"",o=o||"",l=l||"",u=u||"",h=h||"",(c||d)&&(e=Ls(e)),(f||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=Ls(t)),d){let v=d({vertexShader:e,fragmentShader:t});e=v.vertexShader,t=v.fragmentShader}if(f){let v=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,m=>(v.push(m),"")),h=`${f}
${v.join(`
`)}
${h}`}if(g){const v=`
uniform float ${g};
`;i=v+i,l=v+l}return c&&(e=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${e}
`,i=`${i}
void troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${c}
}
`,a=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});
${a}
`,e=e.replace(/\b(position|normal|uv)\b/g,(v,m,p,M)=>/\battribute\s+vec[23]\s+$/.test(M.substr(0,p))?m:`troika_${m}_${n}`),s.map&&s.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),e=eo(e,n,i,a,o),t=eo(t,n,l,u,h),{vertexShader:e,fragmentShader:t}}function eo(s,e,t,r,n){return(r||n||t)&&(s=s.replace(jo,`
${t}
void troikaOrigMain${e}() {`),s+=`
void main() {
  ${r}
  troikaOrigMain${e}();
  ${n}
}`),s}function fp(s,e){return s==="uniforms"?void 0:typeof e=="function"?e.toString():e}let dp=0;const to=new Map;function pp(s){const e=JSON.stringify(s,fp);let t=to.get(e);return t==null&&to.set(e,t=++dp),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function mp(){return typeof window>"u"&&(self.window=self),function(s){var e={parse:function(n){var i=e._bin,a=new Uint8Array(n);if(i.readASCII(a,0,4)=="ttcf"){var o=4;i.readUshort(a,o),o+=2,i.readUshort(a,o),o+=2;var c=i.readUint(a,o);o+=4;for(var l=[],u=0;u<c;u++){var h=i.readUint(a,o);o+=4,l.push(e._readFont(a,h))}return l}return[e._readFont(a,0)]},_readFont:function(n,i){var a=e._bin,o=i;a.readFixed(n,i),i+=4;var c=a.readUshort(n,i);i+=2,a.readUshort(n,i),i+=2,a.readUshort(n,i),i+=2,a.readUshort(n,i),i+=2;for(var l=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],u={_data:n,_offset:o},h={},f=0;f<c;f++){var d=a.readASCII(n,i,4);i+=4,a.readUint(n,i),i+=4;var g=a.readUint(n,i);i+=4;var v=a.readUint(n,i);i+=4,h[d]={offset:g,length:v}}for(f=0;f<l.length;f++){var m=l[f];h[m]&&(u[m.trim()]=e[m.trim()].parse(n,h[m].offset,h[m].length,u))}return u},_tabOffset:function(n,i,a){for(var o=e._bin,c=o.readUshort(n,a+4),l=a+12,u=0;u<c;u++){var h=o.readASCII(n,l,4);l+=4,o.readUint(n,l),l+=4;var f=o.readUint(n,l);if(l+=4,o.readUint(n,l),l+=4,h==i)return f}return 0}};e._bin={readFixed:function(n,i){return(n[i]<<8|n[i+1])+(n[i+2]<<8|n[i+3])/65540},readF2dot14:function(n,i){return e._bin.readShort(n,i)/16384},readInt:function(n,i){return e._bin._view(n).getInt32(i)},readInt8:function(n,i){return e._bin._view(n).getInt8(i)},readShort:function(n,i){return e._bin._view(n).getInt16(i)},readUshort:function(n,i){return e._bin._view(n).getUint16(i)},readUshorts:function(n,i,a){for(var o=[],c=0;c<a;c++)o.push(e._bin.readUshort(n,i+2*c));return o},readUint:function(n,i){return e._bin._view(n).getUint32(i)},readUint64:function(n,i){return 4294967296*e._bin.readUint(n,i)+e._bin.readUint(n,i+4)},readASCII:function(n,i,a){for(var o="",c=0;c<a;c++)o+=String.fromCharCode(n[i+c]);return o},readUnicode:function(n,i,a){for(var o="",c=0;c<a;c++){var l=n[i++]<<8|n[i++];o+=String.fromCharCode(l)}return o},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,i,a){var o=e._bin._tdec;return o&&i==0&&a==n.length?o.decode(n):e._bin.readASCII(n,i,a)},readBytes:function(n,i,a){for(var o=[],c=0;c<a;c++)o.push(n[i+c]);return o},readASCIIArray:function(n,i,a){for(var o=[],c=0;c<a;c++)o.push(String.fromCharCode(n[i+c]));return o},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,i,a,o,c){var l=e._bin,u={},h=i;l.readFixed(n,i),i+=4;var f=l.readUshort(n,i);i+=2;var d=l.readUshort(n,i);i+=2;var g=l.readUshort(n,i);return i+=2,u.scriptList=e._lctf.readScriptList(n,h+f),u.featureList=e._lctf.readFeatureList(n,h+d),u.lookupList=e._lctf.readLookupList(n,h+g,c),u},e._lctf.readLookupList=function(n,i,a){var o=e._bin,c=i,l=[],u=o.readUshort(n,i);i+=2;for(var h=0;h<u;h++){var f=o.readUshort(n,i);i+=2;var d=e._lctf.readLookupTable(n,c+f,a);l.push(d)}return l},e._lctf.readLookupTable=function(n,i,a){var o=e._bin,c=i,l={tabs:[]};l.ltype=o.readUshort(n,i),i+=2,l.flag=o.readUshort(n,i),i+=2;var u=o.readUshort(n,i);i+=2;for(var h=l.ltype,f=0;f<u;f++){var d=o.readUshort(n,i);i+=2;var g=a(n,h,c+d,l);l.tabs.push(g)}return l},e._lctf.numOfOnes=function(n){for(var i=0,a=0;a<32;a++)n>>>a&1&&i++;return i},e._lctf.readClassDef=function(n,i){var a=e._bin,o=[],c=a.readUshort(n,i);if(i+=2,c==1){var l=a.readUshort(n,i);i+=2;var u=a.readUshort(n,i);i+=2;for(var h=0;h<u;h++)o.push(l+h),o.push(l+h),o.push(a.readUshort(n,i)),i+=2}if(c==2){var f=a.readUshort(n,i);for(i+=2,h=0;h<f;h++)o.push(a.readUshort(n,i)),i+=2,o.push(a.readUshort(n,i)),i+=2,o.push(a.readUshort(n,i)),i+=2}return o},e._lctf.getInterval=function(n,i){for(var a=0;a<n.length;a+=3){var o=n[a],c=n[a+1];if(n[a+2],o<=i&&i<=c)return a}return-1},e._lctf.readCoverage=function(n,i){var a=e._bin,o={};o.fmt=a.readUshort(n,i),i+=2;var c=a.readUshort(n,i);return i+=2,o.fmt==1&&(o.tab=a.readUshorts(n,i,c)),o.fmt==2&&(o.tab=a.readUshorts(n,i,3*c)),o},e._lctf.coverageIndex=function(n,i){var a=n.tab;if(n.fmt==1)return a.indexOf(i);if(n.fmt==2){var o=e._lctf.getInterval(a,i);if(o!=-1)return a[o+2]+(i-a[o])}return-1},e._lctf.readFeatureList=function(n,i){var a=e._bin,o=i,c=[],l=a.readUshort(n,i);i+=2;for(var u=0;u<l;u++){var h=a.readASCII(n,i,4);i+=4;var f=a.readUshort(n,i);i+=2;var d=e._lctf.readFeatureTable(n,o+f);d.tag=h.trim(),c.push(d)}return c},e._lctf.readFeatureTable=function(n,i){var a=e._bin,o=i,c={},l=a.readUshort(n,i);i+=2,l>0&&(c.featureParams=o+l);var u=a.readUshort(n,i);i+=2,c.tab=[];for(var h=0;h<u;h++)c.tab.push(a.readUshort(n,i+2*h));return c},e._lctf.readScriptList=function(n,i){var a=e._bin,o=i,c={},l=a.readUshort(n,i);i+=2;for(var u=0;u<l;u++){var h=a.readASCII(n,i,4);i+=4;var f=a.readUshort(n,i);i+=2,c[h.trim()]=e._lctf.readScriptTable(n,o+f)}return c},e._lctf.readScriptTable=function(n,i){var a=e._bin,o=i,c={},l=a.readUshort(n,i);i+=2,l>0&&(c.default=e._lctf.readLangSysTable(n,o+l));var u=a.readUshort(n,i);i+=2;for(var h=0;h<u;h++){var f=a.readASCII(n,i,4);i+=4;var d=a.readUshort(n,i);i+=2,c[f.trim()]=e._lctf.readLangSysTable(n,o+d)}return c},e._lctf.readLangSysTable=function(n,i){var a=e._bin,o={};a.readUshort(n,i),i+=2,o.reqFeature=a.readUshort(n,i),i+=2;var c=a.readUshort(n,i);return i+=2,o.features=a.readUshorts(n,i,c),o},e.CFF={},e.CFF.parse=function(n,i,a){var o=e._bin;(n=new Uint8Array(n.buffer,i,a))[i=0],n[++i],n[++i],n[++i],i++;var c=[];i=e.CFF.readIndex(n,i,c);for(var l=[],u=0;u<c.length-1;u++)l.push(o.readASCII(n,i+c[u],c[u+1]-c[u]));i+=c[c.length-1];var h=[];i=e.CFF.readIndex(n,i,h);var f=[];for(u=0;u<h.length-1;u++)f.push(e.CFF.readDict(n,i+h[u],i+h[u+1]));i+=h[h.length-1];var d=f[0],g=[];i=e.CFF.readIndex(n,i,g);var v=[];for(u=0;u<g.length-1;u++)v.push(o.readASCII(n,i+g[u],g[u+1]-g[u]));if(i+=g[g.length-1],e.CFF.readSubrs(n,i,d),d.CharStrings){i=d.CharStrings,g=[],i=e.CFF.readIndex(n,i,g);var m=[];for(u=0;u<g.length-1;u++)m.push(o.readBytes(n,i+g[u],g[u+1]-g[u]));d.CharStrings=m}if(d.ROS){i=d.FDArray;var p=[];for(i=e.CFF.readIndex(n,i,p),d.FDArray=[],u=0;u<p.length-1;u++){var M=e.CFF.readDict(n,i+p[u],i+p[u+1]);e.CFF._readFDict(n,M,v),d.FDArray.push(M)}i+=p[p.length-1],i=d.FDSelect,d.FDSelect=[];var _=n[i];if(i++,_!=3)throw _;var S=o.readUshort(n,i);for(i+=2,u=0;u<S+1;u++)d.FDSelect.push(o.readUshort(n,i),n[i+2]),i+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(n,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(n,d.charset,d.CharStrings.length)),e.CFF._readFDict(n,d,v),d},e.CFF._readFDict=function(n,i,a){var o;for(var c in i.Private&&(o=i.Private[1],i.Private=e.CFF.readDict(n,o,o+i.Private[0]),i.Private.Subrs&&e.CFF.readSubrs(n,o+i.Private.Subrs,i.Private)),i)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(c)!=-1&&(i[c]=a[i[c]-426+35])},e.CFF.readSubrs=function(n,i,a){var o=e._bin,c=[];i=e.CFF.readIndex(n,i,c);var l,u=c.length;l=u<1240?107:u<33900?1131:32768,a.Bias=l,a.Subrs=[];for(var h=0;h<c.length-1;h++)a.Subrs.push(o.readBytes(n,i+c[h],c[h+1]-c[h]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,i){for(var a=0;a<n.charset.length;a++)if(n.charset[a]==i)return a;return-1},e.CFF.glyphBySE=function(n,i){return i<0||i>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[i])},e.CFF.readEncoding=function(n,i,a){e._bin;var o=[".notdef"],c=n[i];if(i++,c!=0)throw"error: unknown encoding format: "+c;var l=n[i];i++;for(var u=0;u<l;u++)o.push(n[i+u]);return o},e.CFF.readCharset=function(n,i,a){var o=e._bin,c=[".notdef"],l=n[i];if(i++,l==0)for(var u=0;u<a;u++){var h=o.readUshort(n,i);i+=2,c.push(h)}else{if(l!=1&&l!=2)throw"error: format: "+l;for(;c.length<a;){h=o.readUshort(n,i),i+=2;var f=0;for(l==1?(f=n[i],i++):(f=o.readUshort(n,i),i+=2),u=0;u<=f;u++)c.push(h),h++}}return c},e.CFF.readIndex=function(n,i,a){var o=e._bin,c=o.readUshort(n,i)+1,l=n[i+=2];if(i++,l==1)for(var u=0;u<c;u++)a.push(n[i+u]);else if(l==2)for(u=0;u<c;u++)a.push(o.readUshort(n,i+2*u));else if(l==3)for(u=0;u<c;u++)a.push(16777215&o.readUint(n,i+3*u-1));else if(c!=1)throw"unsupported offset size: "+l+", count: "+c;return(i+=c*l)-1},e.CFF.getCharString=function(n,i,a){var o=e._bin,c=n[i],l=n[i+1];n[i+2],n[i+3],n[i+4];var u=1,h=null,f=null;c<=20&&(h=c,u=1),c==12&&(h=100*c+l,u=2),21<=c&&c<=27&&(h=c,u=1),c==28&&(f=o.readShort(n,i+1),u=3),29<=c&&c<=31&&(h=c,u=1),32<=c&&c<=246&&(f=c-139,u=1),247<=c&&c<=250&&(f=256*(c-247)+l+108,u=2),251<=c&&c<=254&&(f=256*-(c-251)-l-108,u=2),c==255&&(f=o.readInt(n,i+1)/65535,u=5),a.val=f??"o"+h,a.size=u},e.CFF.readCharString=function(n,i,a){for(var o=i+a,c=e._bin,l=[];i<o;){var u=n[i],h=n[i+1];n[i+2],n[i+3],n[i+4];var f=1,d=null,g=null;u<=20&&(d=u,f=1),u==12&&(d=100*u+h,f=2),u!=19&&u!=20||(d=u,f=2),21<=u&&u<=27&&(d=u,f=1),u==28&&(g=c.readShort(n,i+1),f=3),29<=u&&u<=31&&(d=u,f=1),32<=u&&u<=246&&(g=u-139,f=1),247<=u&&u<=250&&(g=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(g=256*-(u-251)-h-108,f=2),u==255&&(g=c.readInt(n,i+1)/65535,f=5),l.push(g??"o"+d),i+=f}return l},e.CFF.readDict=function(n,i,a){for(var o=e._bin,c={},l=[];i<a;){var u=n[i],h=n[i+1];n[i+2],n[i+3],n[i+4];var f=1,d=null,g=null;if(u==28&&(g=o.readShort(n,i+1),f=3),u==29&&(g=o.readInt(n,i+1),f=5),32<=u&&u<=246&&(g=u-139,f=1),247<=u&&u<=250&&(g=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(g=256*-(u-251)-h-108,f=2),u==255)throw g=o.readInt(n,i+1)/65535,f=5,"unknown number";if(u==30){var v=[];for(f=1;;){var m=n[i+f];f++;var p=m>>4,M=15&m;if(p!=15&&v.push(p),M!=15&&v.push(M),M==15)break}for(var _="",S=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],E=0;E<v.length;E++)_+=S[v[E]];g=parseFloat(_)}u<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],f=1,u==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][h],f=2)),d!=null?(c[d]=l.length==1?l[0]:l,l=[]):l.push(g),i+=f}return c},e.cmap={},e.cmap.parse=function(n,i,a){n=new Uint8Array(n.buffer,i,a),i=0;var o=e._bin,c={};o.readUshort(n,i),i+=2;var l=o.readUshort(n,i);i+=2;var u=[];c.tables=[];for(var h=0;h<l;h++){var f=o.readUshort(n,i);i+=2;var d=o.readUshort(n,i);i+=2;var g=o.readUint(n,i);i+=4;var v="p"+f+"e"+d,m=u.indexOf(g);if(m==-1){var p;m=c.tables.length,u.push(g);var M=o.readUshort(n,g);M==0?p=e.cmap.parse0(n,g):M==4?p=e.cmap.parse4(n,g):M==6?p=e.cmap.parse6(n,g):M==12?p=e.cmap.parse12(n,g):console.debug("unknown format: "+M,f,d,g),c.tables.push(p)}if(c[v]!=null)throw"multiple tables for one platform+encoding";c[v]=m}return c},e.cmap.parse0=function(n,i){var a=e._bin,o={};o.format=a.readUshort(n,i),i+=2;var c=a.readUshort(n,i);i+=2,a.readUshort(n,i),i+=2,o.map=[];for(var l=0;l<c-6;l++)o.map.push(n[i+l]);return o},e.cmap.parse4=function(n,i){var a=e._bin,o=i,c={};c.format=a.readUshort(n,i),i+=2;var l=a.readUshort(n,i);i+=2,a.readUshort(n,i),i+=2;var u=a.readUshort(n,i);i+=2;var h=u/2;c.searchRange=a.readUshort(n,i),i+=2,c.entrySelector=a.readUshort(n,i),i+=2,c.rangeShift=a.readUshort(n,i),i+=2,c.endCount=a.readUshorts(n,i,h),i+=2*h,i+=2,c.startCount=a.readUshorts(n,i,h),i+=2*h,c.idDelta=[];for(var f=0;f<h;f++)c.idDelta.push(a.readShort(n,i)),i+=2;for(c.idRangeOffset=a.readUshorts(n,i,h),i+=2*h,c.glyphIdArray=[];i<o+l;)c.glyphIdArray.push(a.readUshort(n,i)),i+=2;return c},e.cmap.parse6=function(n,i){var a=e._bin,o={};o.format=a.readUshort(n,i),i+=2,a.readUshort(n,i),i+=2,a.readUshort(n,i),i+=2,o.firstCode=a.readUshort(n,i),i+=2;var c=a.readUshort(n,i);i+=2,o.glyphIdArray=[];for(var l=0;l<c;l++)o.glyphIdArray.push(a.readUshort(n,i)),i+=2;return o},e.cmap.parse12=function(n,i){var a=e._bin,o={};o.format=a.readUshort(n,i),i+=2,i+=2,a.readUint(n,i),i+=4,a.readUint(n,i),i+=4;var c=a.readUint(n,i);i+=4,o.groups=[];for(var l=0;l<c;l++){var u=i+12*l,h=a.readUint(n,u+0),f=a.readUint(n,u+4),d=a.readUint(n,u+8);o.groups.push([h,f,d])}return o},e.glyf={},e.glyf.parse=function(n,i,a,o){for(var c=[],l=0;l<o.maxp.numGlyphs;l++)c.push(null);return c},e.glyf._parseGlyf=function(n,i){var a=e._bin,o=n._data,c=e._tabOffset(o,"glyf",n._offset)+n.loca[i];if(n.loca[i]==n.loca[i+1])return null;var l={};if(l.noc=a.readShort(o,c),c+=2,l.xMin=a.readShort(o,c),c+=2,l.yMin=a.readShort(o,c),c+=2,l.xMax=a.readShort(o,c),c+=2,l.yMax=a.readShort(o,c),c+=2,l.xMin>=l.xMax||l.yMin>=l.yMax)return null;if(l.noc>0){l.endPts=[];for(var u=0;u<l.noc;u++)l.endPts.push(a.readUshort(o,c)),c+=2;var h=a.readUshort(o,c);if(c+=2,o.length-c<h)return null;l.instructions=a.readBytes(o,c,h),c+=h;var f=l.endPts[l.noc-1]+1;for(l.flags=[],u=0;u<f;u++){var d=o[c];if(c++,l.flags.push(d),(8&d)!=0){var g=o[c];c++;for(var v=0;v<g;v++)l.flags.push(d),u++}}for(l.xs=[],u=0;u<f;u++){var m=(2&l.flags[u])!=0,p=(16&l.flags[u])!=0;m?(l.xs.push(p?o[c]:-o[c]),c++):p?l.xs.push(0):(l.xs.push(a.readShort(o,c)),c+=2)}for(l.ys=[],u=0;u<f;u++)m=(4&l.flags[u])!=0,p=(32&l.flags[u])!=0,m?(l.ys.push(p?o[c]:-o[c]),c++):p?l.ys.push(0):(l.ys.push(a.readShort(o,c)),c+=2);var M=0,_=0;for(u=0;u<f;u++)M+=l.xs[u],_+=l.ys[u],l.xs[u]=M,l.ys[u]=_}else{var S;l.parts=[];do{S=a.readUshort(o,c),c+=2;var E={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(l.parts.push(E),E.glyphIndex=a.readUshort(o,c),c+=2,1&S){var w=a.readShort(o,c);c+=2;var R=a.readShort(o,c);c+=2}else w=a.readInt8(o,c),c++,R=a.readInt8(o,c),c++;2&S?(E.m.tx=w,E.m.ty=R):(E.p1=w,E.p2=R),8&S?(E.m.a=E.m.d=a.readF2dot14(o,c),c+=2):64&S?(E.m.a=a.readF2dot14(o,c),c+=2,E.m.d=a.readF2dot14(o,c),c+=2):128&S&&(E.m.a=a.readF2dot14(o,c),c+=2,E.m.b=a.readF2dot14(o,c),c+=2,E.m.c=a.readF2dot14(o,c),c+=2,E.m.d=a.readF2dot14(o,c),c+=2)}while(32&S);if(256&S){var F=a.readUshort(o,c);for(c+=2,l.instr=[],u=0;u<F;u++)l.instr.push(o[c]),c++}}return l},e.GDEF={},e.GDEF.parse=function(n,i,a,o){var c=i;i+=4;var l=e._bin.readUshort(n,i);return{glyphClassDef:l===0?null:e._lctf.readClassDef(n,c+l)}},e.GPOS={},e.GPOS.parse=function(n,i,a,o){return e._lctf.parse(n,i,a,o,e.GPOS.subt)},e.GPOS.subt=function(n,i,a,o){var c=e._bin,l=a,u={};if(u.fmt=c.readUshort(n,a),a+=2,i==1||i==2||i==3||i==7||i==8&&u.fmt<=2){var h=c.readUshort(n,a);a+=2,u.coverage=e._lctf.readCoverage(n,h+l)}if(i==1&&u.fmt==1){var f=c.readUshort(n,a);a+=2,f!=0&&(u.pos=e.GPOS.readValueRecord(n,a,f))}else if(i==2&&u.fmt>=1&&u.fmt<=2){f=c.readUshort(n,a),a+=2;var d=c.readUshort(n,a);a+=2;var g=e._lctf.numOfOnes(f),v=e._lctf.numOfOnes(d);if(u.fmt==1){u.pairsets=[];var m=c.readUshort(n,a);a+=2;for(var p=0;p<m;p++){var M=l+c.readUshort(n,a);a+=2;var _=c.readUshort(n,M);M+=2;for(var S=[],E=0;E<_;E++){var w=c.readUshort(n,M);M+=2,f!=0&&(B=e.GPOS.readValueRecord(n,M,f),M+=2*g),d!=0&&(D=e.GPOS.readValueRecord(n,M,d),M+=2*v),S.push({gid2:w,val1:B,val2:D})}u.pairsets.push(S)}}if(u.fmt==2){var R=c.readUshort(n,a);a+=2;var F=c.readUshort(n,a);a+=2;var x=c.readUshort(n,a);a+=2;var A=c.readUshort(n,a);for(a+=2,u.classDef1=e._lctf.readClassDef(n,l+R),u.classDef2=e._lctf.readClassDef(n,l+F),u.matrix=[],p=0;p<x;p++){var j=[];for(E=0;E<A;E++){var B=null,D=null;f!=0&&(B=e.GPOS.readValueRecord(n,a,f),a+=2*g),d!=0&&(D=e.GPOS.readValueRecord(n,a,d),a+=2*v),j.push({val1:B,val2:D})}u.matrix.push(j)}}}else if(i==4&&u.fmt==1)u.markCoverage=e._lctf.readCoverage(n,c.readUshort(n,a)+l),u.baseCoverage=e._lctf.readCoverage(n,c.readUshort(n,a+2)+l),u.markClassCount=c.readUshort(n,a+4),u.markArray=e.GPOS.readMarkArray(n,c.readUshort(n,a+6)+l),u.baseArray=e.GPOS.readBaseArray(n,c.readUshort(n,a+8)+l,u.markClassCount);else if(i==6&&u.fmt==1)u.mark1Coverage=e._lctf.readCoverage(n,c.readUshort(n,a)+l),u.mark2Coverage=e._lctf.readCoverage(n,c.readUshort(n,a+2)+l),u.markClassCount=c.readUshort(n,a+4),u.mark1Array=e.GPOS.readMarkArray(n,c.readUshort(n,a+6)+l),u.mark2Array=e.GPOS.readBaseArray(n,c.readUshort(n,a+8)+l,u.markClassCount);else{if(i==9&&u.fmt==1){var I=c.readUshort(n,a);a+=2;var L=c.readUint(n,a);if(a+=4,o.ltype==9)o.ltype=I;else if(o.ltype!=I)throw"invalid extension substitution";return e.GPOS.subt(n,o.ltype,l+L)}console.debug("unsupported GPOS table LookupType",i,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(n,i,a){var o=e._bin,c=[];return c.push(1&a?o.readShort(n,i):0),i+=1&a?2:0,c.push(2&a?o.readShort(n,i):0),i+=2&a?2:0,c.push(4&a?o.readShort(n,i):0),i+=4&a?2:0,c.push(8&a?o.readShort(n,i):0),i+=8&a?2:0,c},e.GPOS.readBaseArray=function(n,i,a){var o=e._bin,c=[],l=i,u=o.readUshort(n,i);i+=2;for(var h=0;h<u;h++){for(var f=[],d=0;d<a;d++)f.push(e.GPOS.readAnchorRecord(n,l+o.readUshort(n,i))),i+=2;c.push(f)}return c},e.GPOS.readMarkArray=function(n,i){var a=e._bin,o=[],c=i,l=a.readUshort(n,i);i+=2;for(var u=0;u<l;u++){var h=e.GPOS.readAnchorRecord(n,a.readUshort(n,i+2)+c);h.markClass=a.readUshort(n,i),o.push(h),i+=4}return o},e.GPOS.readAnchorRecord=function(n,i){var a=e._bin,o={};return o.fmt=a.readUshort(n,i),o.x=a.readShort(n,i+2),o.y=a.readShort(n,i+4),o},e.GSUB={},e.GSUB.parse=function(n,i,a,o){return e._lctf.parse(n,i,a,o,e.GSUB.subt)},e.GSUB.subt=function(n,i,a,o){var c=e._bin,l=a,u={};if(u.fmt=c.readUshort(n,a),a+=2,i!=1&&i!=2&&i!=4&&i!=5&&i!=6)return null;if(i==1||i==2||i==4||i==5&&u.fmt<=2||i==6&&u.fmt<=2){var h=c.readUshort(n,a);a+=2,u.coverage=e._lctf.readCoverage(n,l+h)}if(i==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=c.readShort(n,a),a+=2;else if(u.fmt==2){var f=c.readUshort(n,a);a+=2,u.newg=c.readUshorts(n,a,f),a+=2*u.newg.length}}else if(i==2&&u.fmt==1){f=c.readUshort(n,a),a+=2,u.seqs=[];for(var d=0;d<f;d++){var g=c.readUshort(n,a)+l;a+=2;var v=c.readUshort(n,g);u.seqs.push(c.readUshorts(n,g+2,v))}}else if(i==4)for(u.vals=[],f=c.readUshort(n,a),a+=2,d=0;d<f;d++){var m=c.readUshort(n,a);a+=2,u.vals.push(e.GSUB.readLigatureSet(n,l+m))}else if(i==5&&u.fmt==2){if(u.fmt==2){var p=c.readUshort(n,a);a+=2,u.cDef=e._lctf.readClassDef(n,l+p),u.scset=[];var M=c.readUshort(n,a);for(a+=2,d=0;d<M;d++){var _=c.readUshort(n,a);a+=2,u.scset.push(_==0?null:e.GSUB.readSubClassSet(n,l+_))}}}else if(i==6&&u.fmt==3){if(u.fmt==3){for(d=0;d<3;d++){f=c.readUshort(n,a),a+=2;for(var S=[],E=0;E<f;E++)S.push(e._lctf.readCoverage(n,l+c.readUshort(n,a+2*E)));a+=2*f,d==0&&(u.backCvg=S),d==1&&(u.inptCvg=S),d==2&&(u.ahedCvg=S)}f=c.readUshort(n,a),a+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(n,a,f)}}else{if(i==7&&u.fmt==1){var w=c.readUshort(n,a);a+=2;var R=c.readUint(n,a);if(a+=4,o.ltype==9)o.ltype=w;else if(o.ltype!=w)throw"invalid extension substitution";return e.GSUB.subt(n,o.ltype,l+R)}console.debug("unsupported GSUB table LookupType",i,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(n,i){var a=e._bin.readUshort,o=i,c=[],l=a(n,i);i+=2;for(var u=0;u<l;u++){var h=a(n,i);i+=2,c.push(e.GSUB.readSubClassRule(n,o+h))}return c},e.GSUB.readSubClassRule=function(n,i){var a=e._bin.readUshort,o={},c=a(n,i),l=a(n,i+=2);i+=2,o.input=[];for(var u=0;u<c-1;u++)o.input.push(a(n,i)),i+=2;return o.substLookupRecords=e.GSUB.readSubstLookupRecords(n,i,l),o},e.GSUB.readSubstLookupRecords=function(n,i,a){for(var o=e._bin.readUshort,c=[],l=0;l<a;l++)c.push(o(n,i),o(n,i+2)),i+=4;return c},e.GSUB.readChainSubClassSet=function(n,i){var a=e._bin,o=i,c=[],l=a.readUshort(n,i);i+=2;for(var u=0;u<l;u++){var h=a.readUshort(n,i);i+=2,c.push(e.GSUB.readChainSubClassRule(n,o+h))}return c},e.GSUB.readChainSubClassRule=function(n,i){for(var a=e._bin,o={},c=["backtrack","input","lookahead"],l=0;l<c.length;l++){var u=a.readUshort(n,i);i+=2,l==1&&u--,o[c[l]]=a.readUshorts(n,i,u),i+=2*o[c[l]].length}return u=a.readUshort(n,i),i+=2,o.subst=a.readUshorts(n,i,2*u),i+=2*o.subst.length,o},e.GSUB.readLigatureSet=function(n,i){var a=e._bin,o=i,c=[],l=a.readUshort(n,i);i+=2;for(var u=0;u<l;u++){var h=a.readUshort(n,i);i+=2,c.push(e.GSUB.readLigature(n,o+h))}return c},e.GSUB.readLigature=function(n,i){var a=e._bin,o={chain:[]};o.nglyph=a.readUshort(n,i),i+=2;var c=a.readUshort(n,i);i+=2;for(var l=0;l<c-1;l++)o.chain.push(a.readUshort(n,i)),i+=2;return o},e.head={},e.head.parse=function(n,i,a){var o=e._bin,c={};return o.readFixed(n,i),i+=4,c.fontRevision=o.readFixed(n,i),i+=4,o.readUint(n,i),i+=4,o.readUint(n,i),i+=4,c.flags=o.readUshort(n,i),i+=2,c.unitsPerEm=o.readUshort(n,i),i+=2,c.created=o.readUint64(n,i),i+=8,c.modified=o.readUint64(n,i),i+=8,c.xMin=o.readShort(n,i),i+=2,c.yMin=o.readShort(n,i),i+=2,c.xMax=o.readShort(n,i),i+=2,c.yMax=o.readShort(n,i),i+=2,c.macStyle=o.readUshort(n,i),i+=2,c.lowestRecPPEM=o.readUshort(n,i),i+=2,c.fontDirectionHint=o.readShort(n,i),i+=2,c.indexToLocFormat=o.readShort(n,i),i+=2,c.glyphDataFormat=o.readShort(n,i),i+=2,c},e.hhea={},e.hhea.parse=function(n,i,a){var o=e._bin,c={};return o.readFixed(n,i),i+=4,c.ascender=o.readShort(n,i),i+=2,c.descender=o.readShort(n,i),i+=2,c.lineGap=o.readShort(n,i),i+=2,c.advanceWidthMax=o.readUshort(n,i),i+=2,c.minLeftSideBearing=o.readShort(n,i),i+=2,c.minRightSideBearing=o.readShort(n,i),i+=2,c.xMaxExtent=o.readShort(n,i),i+=2,c.caretSlopeRise=o.readShort(n,i),i+=2,c.caretSlopeRun=o.readShort(n,i),i+=2,c.caretOffset=o.readShort(n,i),i+=2,i+=8,c.metricDataFormat=o.readShort(n,i),i+=2,c.numberOfHMetrics=o.readUshort(n,i),i+=2,c},e.hmtx={},e.hmtx.parse=function(n,i,a,o){for(var c=e._bin,l={aWidth:[],lsBearing:[]},u=0,h=0,f=0;f<o.maxp.numGlyphs;f++)f<o.hhea.numberOfHMetrics&&(u=c.readUshort(n,i),i+=2,h=c.readShort(n,i),i+=2),l.aWidth.push(u),l.lsBearing.push(h);return l},e.kern={},e.kern.parse=function(n,i,a,o){var c=e._bin,l=c.readUshort(n,i);if(i+=2,l==1)return e.kern.parseV1(n,i-2,a,o);var u=c.readUshort(n,i);i+=2;for(var h={glyph1:[],rval:[]},f=0;f<u;f++){i+=2,a=c.readUshort(n,i),i+=2;var d=c.readUshort(n,i);i+=2;var g=d>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;i=e.kern.readFormat0(n,i,h)}return h},e.kern.parseV1=function(n,i,a,o){var c=e._bin;c.readFixed(n,i),i+=4;var l=c.readUint(n,i);i+=4;for(var u={glyph1:[],rval:[]},h=0;h<l;h++){c.readUint(n,i),i+=4;var f=c.readUshort(n,i);i+=2,c.readUshort(n,i),i+=2;var d=f>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;i=e.kern.readFormat0(n,i,u)}return u},e.kern.readFormat0=function(n,i,a){var o=e._bin,c=-1,l=o.readUshort(n,i);i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2;for(var u=0;u<l;u++){var h=o.readUshort(n,i);i+=2;var f=o.readUshort(n,i);i+=2;var d=o.readShort(n,i);i+=2,h!=c&&(a.glyph1.push(h),a.rval.push({glyph2:[],vals:[]}));var g=a.rval[a.rval.length-1];g.glyph2.push(f),g.vals.push(d),c=h}return i},e.loca={},e.loca.parse=function(n,i,a,o){var c=e._bin,l=[],u=o.head.indexToLocFormat,h=o.maxp.numGlyphs+1;if(u==0)for(var f=0;f<h;f++)l.push(c.readUshort(n,i+(f<<1))<<1);if(u==1)for(f=0;f<h;f++)l.push(c.readUint(n,i+(f<<2)));return l},e.maxp={},e.maxp.parse=function(n,i,a){var o=e._bin,c={},l=o.readUint(n,i);return i+=4,c.numGlyphs=o.readUshort(n,i),i+=2,l==65536&&(c.maxPoints=o.readUshort(n,i),i+=2,c.maxContours=o.readUshort(n,i),i+=2,c.maxCompositePoints=o.readUshort(n,i),i+=2,c.maxCompositeContours=o.readUshort(n,i),i+=2,c.maxZones=o.readUshort(n,i),i+=2,c.maxTwilightPoints=o.readUshort(n,i),i+=2,c.maxStorage=o.readUshort(n,i),i+=2,c.maxFunctionDefs=o.readUshort(n,i),i+=2,c.maxInstructionDefs=o.readUshort(n,i),i+=2,c.maxStackElements=o.readUshort(n,i),i+=2,c.maxSizeOfInstructions=o.readUshort(n,i),i+=2,c.maxComponentElements=o.readUshort(n,i),i+=2,c.maxComponentDepth=o.readUshort(n,i),i+=2),c},e.name={},e.name.parse=function(n,i,a){var o=e._bin,c={};o.readUshort(n,i),i+=2;var l=o.readUshort(n,i);i+=2,o.readUshort(n,i);for(var u,h=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],f=i+=2,d=0;d<l;d++){var g=o.readUshort(n,i);i+=2;var v=o.readUshort(n,i);i+=2;var m=o.readUshort(n,i);i+=2;var p=o.readUshort(n,i);i+=2;var M=o.readUshort(n,i);i+=2;var _=o.readUshort(n,i);i+=2;var S,E=h[p],w=f+12*l+_;if(g==0)S=o.readUnicode(n,w,M/2);else if(g==3&&v==0)S=o.readUnicode(n,w,M/2);else if(v==0)S=o.readASCII(n,w,M);else if(v==1)S=o.readUnicode(n,w,M/2);else if(v==3)S=o.readUnicode(n,w,M/2);else{if(g!=1)throw"unknown encoding "+v+", platformID: "+g;S=o.readASCII(n,w,M),console.debug("reading unknown MAC encoding "+v+" as ASCII")}var R="p"+g+","+m.toString(16);c[R]==null&&(c[R]={}),c[R][E!==void 0?E:p]=S,c[R]._lang=m}for(var F in c)if(c[F].postScriptName!=null&&c[F]._lang==1033)return c[F];for(var F in c)if(c[F].postScriptName!=null&&c[F]._lang==0)return c[F];for(var F in c)if(c[F].postScriptName!=null&&c[F]._lang==3084)return c[F];for(var F in c)if(c[F].postScriptName!=null)return c[F];for(var F in c){u=F;break}return console.debug("returning name table with languageID "+c[u]._lang),c[u]},e["OS/2"]={},e["OS/2"].parse=function(n,i,a){var o=e._bin.readUshort(n,i);i+=2;var c={};if(o==0)e["OS/2"].version0(n,i,c);else if(o==1)e["OS/2"].version1(n,i,c);else if(o==2||o==3||o==4)e["OS/2"].version2(n,i,c);else{if(o!=5)throw"unknown OS/2 table version: "+o;e["OS/2"].version5(n,i,c)}return c},e["OS/2"].version0=function(n,i,a){var o=e._bin;return a.xAvgCharWidth=o.readShort(n,i),i+=2,a.usWeightClass=o.readUshort(n,i),i+=2,a.usWidthClass=o.readUshort(n,i),i+=2,a.fsType=o.readUshort(n,i),i+=2,a.ySubscriptXSize=o.readShort(n,i),i+=2,a.ySubscriptYSize=o.readShort(n,i),i+=2,a.ySubscriptXOffset=o.readShort(n,i),i+=2,a.ySubscriptYOffset=o.readShort(n,i),i+=2,a.ySuperscriptXSize=o.readShort(n,i),i+=2,a.ySuperscriptYSize=o.readShort(n,i),i+=2,a.ySuperscriptXOffset=o.readShort(n,i),i+=2,a.ySuperscriptYOffset=o.readShort(n,i),i+=2,a.yStrikeoutSize=o.readShort(n,i),i+=2,a.yStrikeoutPosition=o.readShort(n,i),i+=2,a.sFamilyClass=o.readShort(n,i),i+=2,a.panose=o.readBytes(n,i,10),i+=10,a.ulUnicodeRange1=o.readUint(n,i),i+=4,a.ulUnicodeRange2=o.readUint(n,i),i+=4,a.ulUnicodeRange3=o.readUint(n,i),i+=4,a.ulUnicodeRange4=o.readUint(n,i),i+=4,a.achVendID=[o.readInt8(n,i),o.readInt8(n,i+1),o.readInt8(n,i+2),o.readInt8(n,i+3)],i+=4,a.fsSelection=o.readUshort(n,i),i+=2,a.usFirstCharIndex=o.readUshort(n,i),i+=2,a.usLastCharIndex=o.readUshort(n,i),i+=2,a.sTypoAscender=o.readShort(n,i),i+=2,a.sTypoDescender=o.readShort(n,i),i+=2,a.sTypoLineGap=o.readShort(n,i),i+=2,a.usWinAscent=o.readUshort(n,i),i+=2,a.usWinDescent=o.readUshort(n,i),i+=2},e["OS/2"].version1=function(n,i,a){var o=e._bin;return i=e["OS/2"].version0(n,i,a),a.ulCodePageRange1=o.readUint(n,i),i+=4,a.ulCodePageRange2=o.readUint(n,i),i+=4},e["OS/2"].version2=function(n,i,a){var o=e._bin;return i=e["OS/2"].version1(n,i,a),a.sxHeight=o.readShort(n,i),i+=2,a.sCapHeight=o.readShort(n,i),i+=2,a.usDefault=o.readUshort(n,i),i+=2,a.usBreak=o.readUshort(n,i),i+=2,a.usMaxContext=o.readUshort(n,i),i+=2},e["OS/2"].version5=function(n,i,a){var o=e._bin;return i=e["OS/2"].version2(n,i,a),a.usLowerOpticalPointSize=o.readUshort(n,i),i+=2,a.usUpperOpticalPointSize=o.readUshort(n,i),i+=2},e.post={},e.post.parse=function(n,i,a){var o=e._bin,c={};return c.version=o.readFixed(n,i),i+=4,c.italicAngle=o.readFixed(n,i),i+=4,c.underlinePosition=o.readShort(n,i),i+=2,c.underlineThickness=o.readShort(n,i),i+=2,c},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,i){var a=n.cmap,o=-1;if(a.p0e4!=null?o=a.p0e4:a.p3e1!=null?o=a.p3e1:a.p1e0!=null?o=a.p1e0:a.p0e3!=null&&(o=a.p0e3),o==-1)throw"no familiar platform and encoding!";var c=a.tables[o];if(c.format==0)return i>=c.map.length?0:c.map[i];if(c.format==4){for(var l=-1,u=0;u<c.endCount.length;u++)if(i<=c.endCount[u]){l=u;break}return l==-1||c.startCount[l]>i?0:65535&(c.idRangeOffset[l]!=0?c.glyphIdArray[i-c.startCount[l]+(c.idRangeOffset[l]>>1)-(c.idRangeOffset.length-l)]:i+c.idDelta[l])}if(c.format==12){if(i>c.groups[c.groups.length-1][1])return 0;for(u=0;u<c.groups.length;u++){var h=c.groups[u];if(h[0]<=i&&i<=h[1])return h[2]+(i-h[0])}return 0}throw"unknown cmap table format "+c.format},e.U.glyphToPath=function(n,i){var a={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[i]){var o=n.SVG.entries[i];return o==null?a:(typeof o=="string"&&(o=e.SVG.toPath(o),n.SVG.entries[i]=o),o)}if(n.CFF){var c={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},l=n.CFF,u=n.CFF.Private;if(l.ROS){for(var h=0;l.FDSelect[h+2]<=i;)h+=2;u=l.FDArray[l.FDSelect[h+1]].Private}e.U._drawCFF(n.CFF.CharStrings[i],c,l,u,a)}else n.glyf&&e.U._drawGlyf(i,n,a);return a},e.U._drawGlyf=function(n,i,a){var o=i.glyf[n];o==null&&(o=i.glyf[n]=e.glyf._parseGlyf(i,n)),o!=null&&(o.noc>-1?e.U._simpleGlyph(o,a):e.U._compoGlyph(o,i,a))},e.U._simpleGlyph=function(n,i){for(var a=0;a<n.noc;a++){for(var o=a==0?0:n.endPts[a-1]+1,c=n.endPts[a],l=o;l<=c;l++){var u=l==o?c:l-1,h=l==c?o:l+1,f=1&n.flags[l],d=1&n.flags[u],g=1&n.flags[h],v=n.xs[l],m=n.ys[l];if(l==o)if(f){if(!d){e.U.P.moveTo(i,v,m);continue}e.U.P.moveTo(i,n.xs[u],n.ys[u])}else d?e.U.P.moveTo(i,n.xs[u],n.ys[u]):e.U.P.moveTo(i,(n.xs[u]+v)/2,(n.ys[u]+m)/2);f?d&&e.U.P.lineTo(i,v,m):g?e.U.P.qcurveTo(i,v,m,n.xs[h],n.ys[h]):e.U.P.qcurveTo(i,v,m,(v+n.xs[h])/2,(m+n.ys[h])/2)}e.U.P.closePath(i)}},e.U._compoGlyph=function(n,i,a){for(var o=0;o<n.parts.length;o++){var c={cmds:[],crds:[]},l=n.parts[o];e.U._drawGlyf(l.glyphIndex,i,c);for(var u=l.m,h=0;h<c.crds.length;h+=2){var f=c.crds[h],d=c.crds[h+1];a.crds.push(f*u.a+d*u.b+u.tx),a.crds.push(f*u.c+d*u.d+u.ty)}for(h=0;h<c.cmds.length;h++)a.cmds.push(c.cmds[h])}},e.U._getGlyphClass=function(n,i){var a=e._lctf.getInterval(i,n);return a==-1?0:i[a+2]},e.U._applySubs=function(n,i,a,o){for(var c=n.length-i-1,l=0;l<a.tabs.length;l++)if(a.tabs[l]!=null){var u,h=a.tabs[l];if(!h.coverage||(u=e._lctf.coverageIndex(h.coverage,n[i]))!=-1){if(a.ltype==1)n[i],h.fmt==1?n[i]=n[i]+h.delta:n[i]=h.newg[u];else if(a.ltype==4)for(var f=h.vals[u],d=0;d<f.length;d++){var g=f[d],v=g.chain.length;if(!(v>c)){for(var m=!0,p=0,M=0;M<v;M++){for(;n[i+p+(1+M)]==-1;)p++;g.chain[M]!=n[i+p+(1+M)]&&(m=!1)}if(m){for(n[i]=g.nglyph,M=0;M<v+p;M++)n[i+M+1]=-1;break}}}else if(a.ltype==5&&h.fmt==2)for(var _=e._lctf.getInterval(h.cDef,n[i]),S=h.cDef[_+2],E=h.scset[S],w=0;w<E.length;w++){var R=E[w],F=R.input;if(!(F.length>c)){for(m=!0,M=0;M<F.length;M++){var x=e._lctf.getInterval(h.cDef,n[i+1+M]);if(_==-1&&h.cDef[x+2]!=F[M]){m=!1;break}}if(m){var A=R.substLookupRecords;for(d=0;d<A.length;d+=2)A[d],A[d+1]}}}else if(a.ltype==6&&h.fmt==3){if(!e.U._glsCovered(n,h.backCvg,i-h.backCvg.length)||!e.U._glsCovered(n,h.inptCvg,i)||!e.U._glsCovered(n,h.ahedCvg,i+h.inptCvg.length))continue;var j=h.lookupRec;for(w=0;w<j.length;w+=2){_=j[w];var B=o[j[w+1]];e.U._applySubs(n,i+_,B,o)}}}}},e.U._glsCovered=function(n,i,a){for(var o=0;o<i.length;o++)if(e._lctf.coverageIndex(i[o],n[a+o])==-1)return!1;return!0},e.U.glyphsToPath=function(n,i,a){for(var o={cmds:[],crds:[]},c=0,l=0;l<i.length;l++){var u=i[l];if(u!=-1){for(var h=l<i.length-1&&i[l+1]!=-1?i[l+1]:0,f=e.U.glyphToPath(n,u),d=0;d<f.crds.length;d+=2)o.crds.push(f.crds[d]+c),o.crds.push(f.crds[d+1]);for(a&&o.cmds.push(a),d=0;d<f.cmds.length;d++)o.cmds.push(f.cmds[d]);a&&o.cmds.push("X"),c+=n.hmtx.aWidth[u],l<i.length-1&&(c+=e.U.getPairAdjustment(n,u,h))}}return o},e.U.P={},e.U.P.moveTo=function(n,i,a){n.cmds.push("M"),n.crds.push(i,a)},e.U.P.lineTo=function(n,i,a){n.cmds.push("L"),n.crds.push(i,a)},e.U.P.curveTo=function(n,i,a,o,c,l,u){n.cmds.push("C"),n.crds.push(i,a,o,c,l,u)},e.U.P.qcurveTo=function(n,i,a,o,c){n.cmds.push("Q"),n.crds.push(i,a,o,c)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,i,a,o,c){for(var l=i.stack,u=i.nStems,h=i.haveWidth,f=i.width,d=i.open,g=0,v=i.x,m=i.y,p=0,M=0,_=0,S=0,E=0,w=0,R=0,F=0,x=0,A=0,j={val:0,size:0};g<n.length;){e.CFF.getCharString(n,g,j);var B=j.val;if(g+=j.size,B=="o1"||B=="o18")l.length%2!=0&&!h&&(f=l.shift()+o.nominalWidthX),u+=l.length>>1,l.length=0,h=!0;else if(B=="o3"||B=="o23")l.length%2!=0&&!h&&(f=l.shift()+o.nominalWidthX),u+=l.length>>1,l.length=0,h=!0;else if(B=="o4")l.length>1&&!h&&(f=l.shift()+o.nominalWidthX,h=!0),d&&e.U.P.closePath(c),m+=l.pop(),e.U.P.moveTo(c,v,m),d=!0;else if(B=="o5")for(;l.length>0;)v+=l.shift(),m+=l.shift(),e.U.P.lineTo(c,v,m);else if(B=="o6"||B=="o7")for(var D=l.length,I=B=="o6",L=0;L<D;L++){var V=l.shift();I?v+=V:m+=V,I=!I,e.U.P.lineTo(c,v,m)}else if(B=="o8"||B=="o24"){D=l.length;for(var K=0;K+6<=D;)p=v+l.shift(),M=m+l.shift(),_=p+l.shift(),S=M+l.shift(),v=_+l.shift(),m=S+l.shift(),e.U.P.curveTo(c,p,M,_,S,v,m),K+=6;B=="o24"&&(v+=l.shift(),m+=l.shift(),e.U.P.lineTo(c,v,m))}else{if(B=="o11")break;if(B=="o1234"||B=="o1235"||B=="o1236"||B=="o1237")B=="o1234"&&(M=m,_=(p=v+l.shift())+l.shift(),A=S=M+l.shift(),w=S,F=m,v=(R=(E=(x=_+l.shift())+l.shift())+l.shift())+l.shift(),e.U.P.curveTo(c,p,M,_,S,x,A),e.U.P.curveTo(c,E,w,R,F,v,m)),B=="o1235"&&(p=v+l.shift(),M=m+l.shift(),_=p+l.shift(),S=M+l.shift(),x=_+l.shift(),A=S+l.shift(),E=x+l.shift(),w=A+l.shift(),R=E+l.shift(),F=w+l.shift(),v=R+l.shift(),m=F+l.shift(),l.shift(),e.U.P.curveTo(c,p,M,_,S,x,A),e.U.P.curveTo(c,E,w,R,F,v,m)),B=="o1236"&&(p=v+l.shift(),M=m+l.shift(),_=p+l.shift(),A=S=M+l.shift(),w=S,R=(E=(x=_+l.shift())+l.shift())+l.shift(),F=w+l.shift(),v=R+l.shift(),e.U.P.curveTo(c,p,M,_,S,x,A),e.U.P.curveTo(c,E,w,R,F,v,m)),B=="o1237"&&(p=v+l.shift(),M=m+l.shift(),_=p+l.shift(),S=M+l.shift(),x=_+l.shift(),A=S+l.shift(),E=x+l.shift(),w=A+l.shift(),R=E+l.shift(),F=w+l.shift(),Math.abs(R-v)>Math.abs(F-m)?v=R+l.shift():m=F+l.shift(),e.U.P.curveTo(c,p,M,_,S,x,A),e.U.P.curveTo(c,E,w,R,F,v,m));else if(B=="o14"){if(l.length>0&&!h&&(f=l.shift()+a.nominalWidthX,h=!0),l.length==4){var Q=l.shift(),q=l.shift(),X=l.shift(),O=l.shift(),z=e.CFF.glyphBySE(a,X),G=e.CFF.glyphBySE(a,O);e.U._drawCFF(a.CharStrings[z],i,a,o,c),i.x=Q,i.y=q,e.U._drawCFF(a.CharStrings[G],i,a,o,c)}d&&(e.U.P.closePath(c),d=!1)}else if(B=="o19"||B=="o20")l.length%2!=0&&!h&&(f=l.shift()+o.nominalWidthX),u+=l.length>>1,l.length=0,h=!0,g+=u+7>>3;else if(B=="o21")l.length>2&&!h&&(f=l.shift()+o.nominalWidthX,h=!0),m+=l.pop(),v+=l.pop(),d&&e.U.P.closePath(c),e.U.P.moveTo(c,v,m),d=!0;else if(B=="o22")l.length>1&&!h&&(f=l.shift()+o.nominalWidthX,h=!0),v+=l.pop(),d&&e.U.P.closePath(c),e.U.P.moveTo(c,v,m),d=!0;else if(B=="o25"){for(;l.length>6;)v+=l.shift(),m+=l.shift(),e.U.P.lineTo(c,v,m);p=v+l.shift(),M=m+l.shift(),_=p+l.shift(),S=M+l.shift(),v=_+l.shift(),m=S+l.shift(),e.U.P.curveTo(c,p,M,_,S,v,m)}else if(B=="o26")for(l.length%2&&(v+=l.shift());l.length>0;)p=v,M=m+l.shift(),v=_=p+l.shift(),m=(S=M+l.shift())+l.shift(),e.U.P.curveTo(c,p,M,_,S,v,m);else if(B=="o27")for(l.length%2&&(m+=l.shift());l.length>0;)M=m,_=(p=v+l.shift())+l.shift(),S=M+l.shift(),v=_+l.shift(),m=S,e.U.P.curveTo(c,p,M,_,S,v,m);else if(B=="o10"||B=="o29"){var b=B=="o10"?o:a;if(l.length==0)console.debug("error: empty stack");else{var P=l.pop(),N=b.Subrs[P+b.Bias];i.x=v,i.y=m,i.nStems=u,i.haveWidth=h,i.width=f,i.open=d,e.U._drawCFF(N,i,a,o,c),v=i.x,m=i.y,u=i.nStems,h=i.haveWidth,f=i.width,d=i.open}}else if(B=="o30"||B=="o31"){var y=l.length,k=(K=0,B=="o31");for(K+=y-(D=-3&y);K<D;)k?(M=m,_=(p=v+l.shift())+l.shift(),m=(S=M+l.shift())+l.shift(),D-K==5?(v=_+l.shift(),K++):v=_,k=!1):(p=v,M=m+l.shift(),_=p+l.shift(),S=M+l.shift(),v=_+l.shift(),D-K==5?(m=S+l.shift(),K++):m=S,k=!0),e.U.P.curveTo(c,p,M,_,S,v,m),K+=4}else{if((B+"").charAt(0)=="o")throw console.debug("Unknown operation: "+B,n),B;l.push(B)}}}i.x=v,i.y=m,i.nStems=u,i.haveWidth=h,i.width=f,i.open=d};var t=e,r={Typr:t};return s.Typr=t,s.default=r,Object.defineProperty(s,"__esModule",{value:!0}),s}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function gp(){return function(s){var e=Uint8Array,t=Uint16Array,r=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(B,D){for(var I=new t(31),L=0;L<31;++L)I[L]=D+=1<<B[L-1];var V=new r(I[30]);for(L=1;L<30;++L)for(var K=I[L];K<I[L+1];++K)V[K]=K-I[L]<<5|L;return[I,V]},c=o(n,2),l=c[0],u=c[1];l[28]=258,u[258]=28;for(var h=o(i,0)[0],f=new t(32768),d=0;d<32768;++d){var g=(43690&d)>>>1|(21845&d)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,f[d]=((65280&g)>>>8|(255&g)<<8)>>>1}var v=function(B,D,I){for(var L=B.length,V=0,K=new t(D);V<L;++V)++K[B[V]-1];var Q,q=new t(D);for(V=0;V<D;++V)q[V]=q[V-1]+K[V-1]<<1;{Q=new t(1<<D);var X=15-D;for(V=0;V<L;++V)if(B[V])for(var O=V<<4|B[V],z=D-B[V],G=q[B[V]-1]++<<z,b=G|(1<<z)-1;G<=b;++G)Q[f[G]>>>X]=O}return Q},m=new e(288);for(d=0;d<144;++d)m[d]=8;for(d=144;d<256;++d)m[d]=9;for(d=256;d<280;++d)m[d]=7;for(d=280;d<288;++d)m[d]=8;var p=new e(32);for(d=0;d<32;++d)p[d]=5;var M=v(m,9),_=v(p,5),S=function(B){for(var D=B[0],I=1;I<B.length;++I)B[I]>D&&(D=B[I]);return D},E=function(B,D,I){var L=D/8|0;return(B[L]|B[L+1]<<8)>>(7&D)&I},w=function(B,D){var I=D/8|0;return(B[I]|B[I+1]<<8|B[I+2]<<16)>>(7&D)},R=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],F=function(B,D,I){var L=new Error(D||R[B]);if(L.code=B,Error.captureStackTrace&&Error.captureStackTrace(L,F),!I)throw L;return L},x=function(B,D,I){var L=B.length;if(!L||I&&!I.l&&L<5)return D||new e(0);var V=!D||I,K=!I||I.i;I||(I={}),D||(D=new e(3*L));var Q,q=function(xe){var De=D.length;if(xe>De){var Ie=new e(Math.max(2*De,xe));Ie.set(D),D=Ie}},X=I.f||0,O=I.p||0,z=I.b||0,G=I.l,b=I.d,P=I.m,N=I.n,y=8*L;do{if(!G){I.f=X=E(B,O,1);var k=E(B,O+1,3);if(O+=3,!k){var se=B[(Ee=((Q=O)/8|0)+(7&Q&&1)+4)-4]|B[Ee-3]<<8,Z=Ee+se;if(Z>L){K&&F(0);break}V&&q(z+se),D.set(B.subarray(Ee,Z),z),I.b=z+=se,I.p=O=8*Z;continue}if(k==1)G=M,b=_,P=9,N=5;else if(k==2){var oe=E(B,O,31)+257,W=E(B,O+10,15)+4,$=oe+E(B,O+5,31)+1;O+=14;for(var ne=new e($),fe=new e(19),le=0;le<W;++le)fe[a[le]]=E(B,O+3*le,7);O+=3*W;var Se=S(fe),ce=(1<<Se)-1,_e=v(fe,Se);for(le=0;le<$;){var Ee,he=_e[E(B,O,ce)];if(O+=15&he,(Ee=he>>>4)<16)ne[le++]=Ee;else{var C=0,T=0;for(Ee==16?(T=3+E(B,O,3),O+=2,C=ne[le-1]):Ee==17?(T=3+E(B,O,7),O+=3):Ee==18&&(T=11+E(B,O,127),O+=7);T--;)ne[le++]=C}}var Y=ne.subarray(0,oe),ie=ne.subarray(oe);P=S(Y),N=S(ie),G=v(Y,P),b=v(ie,N)}else F(1);if(O>y){K&&F(0);break}}V&&q(z+131072);for(var me=(1<<P)-1,de=(1<<N)-1,Me=O;;Me=O){var ve=(C=G[w(B,O)&me])>>>4;if((O+=15&C)>y){K&&F(0);break}if(C||F(2),ve<256)D[z++]=ve;else{if(ve==256){Me=O,G=null;break}var re=ve-254;if(ve>264){var Ae=n[le=ve-257];re=E(B,O,(1<<Ae)-1)+l[le],O+=Ae}var Ce=b[w(B,O)&de],Te=Ce>>>4;if(Ce||F(3),O+=15&Ce,ie=h[Te],Te>3&&(Ae=i[Te],ie+=w(B,O)&(1<<Ae)-1,O+=Ae),O>y){K&&F(0);break}V&&q(z+131072);for(var ye=z+re;z<ye;z+=4)D[z]=D[z-ie],D[z+1]=D[z+1-ie],D[z+2]=D[z+2-ie],D[z+3]=D[z+3-ie];z=ye}}I.l=G,I.p=Me,I.b=z,G&&(X=1,I.m=P,I.d=b,I.n=N)}while(!X);return z==D.length?D:function(xe,De,Ie){(Ie==null||Ie>xe.length)&&(Ie=xe.length);var je=new(xe instanceof t?t:xe instanceof r?r:e)(Ie-De);return je.set(xe.subarray(De,Ie)),je}(D,0,z)},A=new e(0),j=typeof TextDecoder<"u"&&new TextDecoder;try{j.decode(A,{stream:!0})}catch{}return s.convert_streams=function(B){var D=new DataView(B),I=0;function L(){var oe=D.getUint16(I);return I+=2,oe}function V(){var oe=D.getUint32(I);return I+=4,oe}function K(oe){se.setUint16(Z,oe),Z+=2}function Q(oe){se.setUint32(Z,oe),Z+=4}for(var q={signature:V(),flavor:V(),length:V(),numTables:L(),reserved:L(),totalSfntSize:V(),majorVersion:L(),minorVersion:L(),metaOffset:V(),metaLength:V(),metaOrigLength:V(),privOffset:V(),privLength:V()},X=0;Math.pow(2,X)<=q.numTables;)X++;X--;for(var O=16*Math.pow(2,X),z=16*q.numTables-O,G=12,b=[],P=0;P<q.numTables;P++)b.push({tag:V(),offset:V(),compLength:V(),origLength:V(),origChecksum:V()}),G+=16;var N,y=new Uint8Array(12+16*b.length+b.reduce(function(oe,W){return oe+W.origLength+4},0)),k=y.buffer,se=new DataView(k),Z=0;return Q(q.flavor),K(q.numTables),K(O),K(X),K(z),b.forEach(function(oe){Q(oe.tag),Q(oe.origChecksum),Q(G),Q(oe.origLength),oe.outOffset=G,(G+=oe.origLength)%4!=0&&(G+=4-G%4)}),b.forEach(function(oe){var W,$=B.slice(oe.offset,oe.offset+oe.compLength);if(oe.compLength!=oe.origLength){var ne=new Uint8Array(oe.origLength);W=new Uint8Array($,2),x(W,ne)}else ne=new Uint8Array($);y.set(ne,oe.outOffset);var fe=0;(G=oe.outOffset+oe.origLength)%4!=0&&(fe=4-G%4),y.set(new Uint8Array(fe).buffer,oe.outOffset+oe.origLength),N=G+fe}),k.slice(0,N)},Object.defineProperty(s,"__esModule",{value:!0}),s}({}).convert_streams}function vp(s,e){const t={M:2,L:2,Q:4,C:6,Z:0},r={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,i=2,a=4,o=8,c=16,l=32;let u;function h(R){if(!u){const F={R:i,L:n,D:a,C:c,U:l,T:o};u=new Map;for(let x in r){let A=0;r[x].split(",").forEach(j=>{let[B,D]=j.split("+");B=parseInt(B,36),D=D?parseInt(D,36):0,u.set(A+=B,F[x]);for(let I=D;I--;)u.set(++A,F[x])})}}return u.get(R)||l}const f=1,d=2,g=3,v=4,m=[null,"isol","init","fina","medi"];function p(R){const F=new Uint8Array(R.length);let x=l,A=f,j=-1;for(let B=0;B<R.length;B++){const D=R.codePointAt(B);let I=h(D)|0,L=f;I&o||(x&(n|a|c)?I&(i|a|c)?(L=g,(A===f||A===g)&&F[j]++):I&(n|l)&&(A===d||A===v)&&F[j]--:x&(i|l)&&(A===d||A===v)&&F[j]--,A=F[B]=L,x=I,j=B,D>65535&&B++)}return F}function M(R,F){const x=[];for(let j=0;j<F.length;j++){const B=F.codePointAt(j);B>65535&&j++,x.push(s.U.codeToGlyph(R,B))}const A=R.GSUB;if(A){const{lookupList:j,featureList:B}=A;let D;const I=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,L=[];B.forEach(V=>{if(I.test(V.tag))for(let K=0;K<V.tab.length;K++){if(L[V.tab[K]])continue;L[V.tab[K]]=!0;const Q=j[V.tab[K]],q=/^(isol|init|fina|medi)$/.test(V.tag);q&&!D&&(D=p(F));for(let X=0;X<x.length;X++)(!D||!q||m[D[X]]===V.tag)&&s.U._applySubs(x,X,Q,j)}})}return x}function _(R,F){const x=new Int16Array(F.length*3);let A=0;for(;A<F.length;A++){const I=F[A];if(I===-1)continue;x[A*3+2]=R.hmtx.aWidth[I];const L=R.GPOS;if(L){const V=L.lookupList;for(let K=0;K<V.length;K++){const Q=V[K];for(let q=0;q<Q.tabs.length;q++){const X=Q.tabs[q];if(Q.ltype===1){if(s._lctf.coverageIndex(X.coverage,I)!==-1&&X.pos){D(X.pos,A);break}}else if(Q.ltype===2){let O=null,z=j();if(z!==-1){const G=s._lctf.coverageIndex(X.coverage,F[z]);if(G!==-1){if(X.fmt===1){const b=X.pairsets[G];for(let P=0;P<b.length;P++)b[P].gid2===I&&(O=b[P])}else if(X.fmt===2){const b=s.U._getGlyphClass(F[z],X.classDef1),P=s.U._getGlyphClass(I,X.classDef2);O=X.matrix[b][P]}if(O){O.val1&&D(O.val1,z),O.val2&&D(O.val2,A);break}}}}else if(Q.ltype===4){const O=s._lctf.coverageIndex(X.markCoverage,I);if(O!==-1){const z=j(B),G=z===-1?-1:s._lctf.coverageIndex(X.baseCoverage,F[z]);if(G!==-1){const b=X.markArray[O],P=X.baseArray[G][b.markClass];x[A*3]=P.x-b.x+x[z*3]-x[z*3+2],x[A*3+1]=P.y-b.y+x[z*3+1];break}}}else if(Q.ltype===6){const O=s._lctf.coverageIndex(X.mark1Coverage,I);if(O!==-1){const z=j();if(z!==-1){const G=F[z];if(S(R,G)===3){const b=s._lctf.coverageIndex(X.mark2Coverage,G);if(b!==-1){const P=X.mark1Array[O],N=X.mark2Array[b][P.markClass];x[A*3]=N.x-P.x+x[z*3]-x[z*3+2],x[A*3+1]=N.y-P.y+x[z*3+1];break}}}}}}}}else if(R.kern&&!R.cff){const V=j();if(V!==-1){const K=R.kern.glyph1.indexOf(F[V]);if(K!==-1){const Q=R.kern.rval[K].glyph2.indexOf(I);Q!==-1&&(x[V*3+2]+=R.kern.rval[K].vals[Q])}}}}return x;function j(I){for(let L=A-1;L>=0;L--)if(F[L]!==-1&&(!I||I(F[L])))return L;return-1}function B(I){return S(R,I)===1}function D(I,L){for(let V=0;V<3;V++)x[L*3+V]+=I[V]||0}}function S(R,F){const x=R.GDEF&&R.GDEF.glyphClassDef;return x?s.U._getGlyphClass(F,x):0}function E(...R){for(let F=0;F<R.length;F++)if(typeof R[F]=="number")return R[F]}function w(R){const F=Object.create(null),x=R["OS/2"],A=R.hhea,j=R.head.unitsPerEm,B=E(x&&x.sTypoAscender,A&&A.ascender,j),D={unitsPerEm:j,ascender:B,descender:E(x&&x.sTypoDescender,A&&A.descender,0),capHeight:E(x&&x.sCapHeight,B),xHeight:E(x&&x.sxHeight,B),lineGap:E(x&&x.sTypoLineGap,A&&A.lineGap),supportsCodePoint(I){return s.U.codeToGlyph(R,I)>0},forEachGlyph(I,L,V,K){let Q=0;const q=1/D.unitsPerEm*L,X=M(R,I);let O=0;const z=_(R,X);return X.forEach((G,b)=>{if(G!==-1){let P=F[G];if(!P){const{cmds:N,crds:y}=s.U.glyphToPath(R,G);let k="",se=0;for(let ne=0,fe=N.length;ne<fe;ne++){const le=t[N[ne]];k+=N[ne];for(let Se=1;Se<=le;Se++)k+=(Se>1?",":"")+y[se++]}let Z,oe,W,$;if(y.length){Z=oe=1/0,W=$=-1/0;for(let ne=0,fe=y.length;ne<fe;ne+=2){let le=y[ne],Se=y[ne+1];le<Z&&(Z=le),Se<oe&&(oe=Se),le>W&&(W=le),Se>$&&($=Se)}}else Z=W=oe=$=0;P=F[G]={index:G,advanceWidth:R.hmtx.aWidth[G],xMin:Z,yMin:oe,xMax:W,yMax:$,path:k}}K.call(null,P,Q+z[b*3]*q,z[b*3+1]*q,O),Q+=z[b*3+2]*q,V&&(Q+=V*L)}O+=I.codePointAt(O)>65535?2:1}),Q}};return D}return function(F){const x=new Uint8Array(F,0,4),A=s._bin.readASCII(x,0,4);if(A==="wOFF")F=e(F);else if(A==="wOF2")throw new Error("woff2 fonts not supported");return w(s.parse(F)[0])}}const _p=di({name:"Typr Font Parser",dependencies:[mp,gp,vp],init(s,e,t){const r=s(),n=e();return t(r,n)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function xp(){return function(s){var e=function(){this.buckets=new Map};e.prototype.add=function(_){var S=_>>5;this.buckets.set(S,(this.buckets.get(S)||0)|1<<(31&_))},e.prototype.has=function(_){var S=this.buckets.get(_>>5);return S!==void 0&&(S&1<<(31&_))!=0},e.prototype.serialize=function(){var _=[];return this.buckets.forEach(function(S,E){_.push((+E).toString(36)+":"+S.toString(36))}),_.join(",")},e.prototype.deserialize=function(_){var S=this;this.buckets.clear(),_.split(",").forEach(function(E){var w=E.split(":");S.buckets.set(parseInt(w[0],36),parseInt(w[1],36))})};var t=Math.pow(2,8),r=t-1,n=~r;function i(_){var S=function(w){return w&n}(_).toString(16),E=function(w){return(w&n)+t-1}(_).toString(16);return"codepoint-index/plane"+(_>>16)+"/"+S+"-"+E+".json"}function a(_,S){var E=_&r,w=S.codePointAt(E/6|0);return((w=(w||48)-48)&1<<E%6)!=0}function o(_,S){var E;(E=_,E.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(w){return w.split("-").map(function(R){return parseInt(R.trim(),16)})})).forEach(function(w){var R=w[0],F=w[1];F===void 0&&(F=R),S(R,F)})}function c(_,S){o(_,function(E,w){for(var R=E;R<=w;R++)S(R)})}var l={},u={},h=new WeakMap,f="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function d(_){var S=h.get(_);return S||(S=new e,c(_.ranges,function(E){return S.add(E)}),h.set(_,S)),S}var g,v=new Map;function m(_,S,E){return _[S]?S:_[E]?E:function(w){for(var R in w)return R}(_)}function p(_,S){var E=S;if(!_.includes(E)){E=1/0;for(var w=0;w<_.length;w++)Math.abs(_[w]-S)<Math.abs(E-S)&&(E=_[w])}return E}function M(_){return g||(g=new Set,c("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(S){g.add(S)})),g.has(_)}return s.CodePointSet=e,s.clearCache=function(){l={},u={}},s.getFontsForString=function(_,S){S===void 0&&(S={});var E,w=S.lang;w===void 0&&(w=new RegExp("\\p{Script=Hangul}","u").test(E=_)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(E)?"ja":"en");var R=S.category;R===void 0&&(R="sans-serif");var F=S.style;F===void 0&&(F="normal");var x=S.weight;x===void 0&&(x=400);var A=(S.dataUrl||f).replace(/\/$/g,""),j=new Map,B=new Uint8Array(_.length),D={},I={},L=new Array(_.length),V=new Map,K=!1;function Q(O){var z=v.get(O);return z||(z=fetch(A+"/"+O).then(function(G){if(!G.ok)throw new Error(G.statusText);return G.json().then(function(b){if(!Array.isArray(b)||b[0]!==1)throw new Error("Incorrect schema version; need 1, got "+b[0]);return b[1]})}).catch(function(G){if(A!==f)return K||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+A+'", trying default CDN. '+G.message),K=!0),A=f,v.delete(O),Q(O);throw G}),v.set(O,z)),z}for(var q=function(O){var z=_.codePointAt(O),G=i(z);L[O]=G,l[G]||V.has(G)||V.set(G,Q(G).then(function(b){l[G]=b})),z>65535&&(O++,X=O)},X=0;X<_.length;X++)q(X);return Promise.all(V.values()).then(function(){V.clear();for(var O=function(G){var b=_.codePointAt(G),P=null,N=l[L[G]],y=void 0;for(var k in N){var se=I[k];if(se===void 0&&(se=I[k]=new RegExp(k).test(w||"en")),se){for(var Z in y=k,N[k])if(a(b,N[k][Z])){P=Z;break}break}}if(!P){e:for(var oe in N)if(oe!==y){for(var W in N[oe])if(a(b,N[oe][W])){P=W;break e}}}P||(console.debug("No font coverage for U+"+b.toString(16)),P="latin"),L[G]=P,u[P]||V.has(P)||V.set(P,Q("font-meta/"+P+".json").then(function($){u[P]=$})),b>65535&&(G++,z=G)},z=0;z<_.length;z++)O(z);return Promise.all(V.values())}).then(function(){for(var O,z=null,G=0;G<_.length;G++){var b=_.codePointAt(G);if(z&&(M(b)||d(z).has(b)))B[G]=B[G-1];else{z=u[L[G]];var P=D[z.id];if(!P){var N=z.typeforms,y=m(N,R,"sans-serif"),k=m(N[y],F,"normal"),se=p((O=N[y])===null||O===void 0?void 0:O[k],x);P=D[z.id]=A+"/font-files/"+z.id+"/"+y+"."+k+"."+se+".woff"}var Z=j.get(P);Z==null&&(Z=j.size,j.set(P,Z)),B[G]=Z}b>65535&&(G++,B[G]=B[G-1])}return{fontUrls:Array.from(j.keys()),chars:B}})},Object.defineProperty(s,"__esModule",{value:!0}),s}({})}function Sp(s,e){const t=Object.create(null),r=Object.create(null);function n(a,o){const c=l=>{console.error(`Failure loading font ${a}`,l)};try{const l=new XMLHttpRequest;l.open("get",a,!0),l.responseType="arraybuffer",l.onload=function(){if(l.status>=400)c(new Error(l.statusText));else if(l.status>0)try{const u=s(l.response);u.src=a,o(u)}catch(u){c(u)}},l.onerror=c,l.send()}catch(l){c(l)}}function i(a,o){let c=t[a];c?o(c):r[a]?r[a].push(o):(r[a]=[o],n(a,l=>{l.src=a,t[a]=l,r[a].forEach(u=>u(l)),delete r[a]}))}return function(a,o,{lang:c,fonts:l=[],style:u="normal",weight:h="normal",unicodeFontsURL:f}={}){const d=new Uint8Array(a.length),g=[];a.length||M();const v=new Map,m=[];if(u!=="italic"&&(u="normal"),typeof h!="number"&&(h=h==="bold"?700:400),l&&!Array.isArray(l)&&(l=[l]),l=l.slice().filter(S=>!S.lang||S.lang.test(c)).reverse(),l.length){let R=0;(function F(x=0){for(let A=x,j=a.length;A<j;A++){const B=a.codePointAt(A);if(R===1&&g[d[A-1]].supportsCodePoint(B)||/\s/.test(a[A]))d[A]=d[A-1],R===2&&(m[m.length-1][1]=A);else for(let D=d[A],I=l.length;D<=I;D++)if(D===I){const L=R===2?m[m.length-1]:m[m.length]=[A,A];L[1]=A,R=2}else{d[A]=D;const{src:L,unicodeRange:V}=l[D];if(!V||_(B,V)){const K=t[L];if(!K){i(L,()=>{F(A)});return}if(K.supportsCodePoint(B)){let Q=v.get(K);typeof Q!="number"&&(Q=g.length,g.push(K),v.set(K,Q)),d[A]=Q,R=1;break}}}B>65535&&A+1<j&&(d[A+1]=d[A],A++,R===2&&(m[m.length-1][1]=A))}p()})()}else m.push([0,a.length-1]),p();function p(){if(m.length){const S=m.map(E=>a.substring(E[0],E[1]+1)).join(`
`);e.getFontsForString(S,{lang:c||void 0,style:u,weight:h,dataUrl:f}).then(({fontUrls:E,chars:w})=>{const R=g.length;let F=0;m.forEach(A=>{for(let j=0,B=A[1]-A[0];j<=B;j++)d[A[0]+j]=w[F++]+R;F++});let x=0;E.forEach((A,j)=>{i(A,B=>{g[j+R]=B,++x===E.length&&M()})})})}else M()}function M(){o({chars:d,fonts:g})}function _(S,E){for(let w=0;w<E.length;w++){const[R,F=R]=E[w];if(R<=S&&S<=F)return!0}return!1}}}const Mp=di({name:"FontResolver",dependencies:[Sp,_p,xp],init(s,e,t){return s(e,t())}});function yp(s,e){const r=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",i=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function a({text:g,lang:v,fonts:m,style:p,weight:M,preResolvedFonts:_,unicodeFontsURL:S},E){const w=({chars:R,fonts:F})=>{let x,A;const j=[];for(let B=0;B<R.length;B++)R[B]!==A?(A=R[B],j.push(x={start:B,end:B,fontObj:F[R[B]]})):x.end=B;E(j)};_?w(_):s(g,w,{lang:v,fonts:m,style:p,weight:M,unicodeFontsURL:S})}function o({text:g="",font:v,lang:m,sdfGlyphSize:p=64,fontSize:M=400,fontWeight:_=1,fontStyle:S="normal",letterSpacing:E=0,lineHeight:w="normal",maxWidth:R=1/0,direction:F,textAlign:x="left",textIndent:A=0,whiteSpace:j="normal",overflowWrap:B="normal",anchorX:D=0,anchorY:I=0,metricsOnly:L=!1,unicodeFontsURL:V,preResolvedFonts:K=null,includeCaretPositions:Q=!1,chunkedBoundsSize:q=8192,colorRanges:X=null},O){const z=h(),G={fontLoad:0,typesetting:0};g.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),g=g.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),M=+M,E=+E,R=+R,w=w||"normal",A=+A,a({text:g,lang:m,style:S,weight:_,fonts:typeof v=="string"?[{src:v}]:v,unicodeFontsURL:V,preResolvedFonts:K},b=>{G.fontLoad=h()-z;const P=isFinite(R);let N=null,y=null,k=null,se=null,Z=null,oe=null,W=null,$=null,ne=0,fe=0,le=j!=="nowrap";const Se=new Map,ce=h();let _e=A,Ee=0,he=new f;const C=[he];b.forEach(de=>{const{fontObj:Me}=de,{ascender:ve,descender:re,unitsPerEm:Ae,lineGap:Ce,capHeight:Te,xHeight:ye}=Me;let xe=Se.get(Me);if(!xe){const ee=M/Ae,pe=w==="normal"?(ve-re+Ce)*ee:w*M,Le=(pe-(ve-re)*ee)/2,we=Math.min(pe,(ve-re)*ee),Pe=(ve+re)/2*ee+we/2;xe={index:Se.size,src:Me.src,fontObj:Me,fontSizeMult:ee,unitsPerEm:Ae,ascender:ve*ee,descender:re*ee,capHeight:Te*ee,xHeight:ye*ee,lineHeight:pe,baseline:-Le-ve*ee,caretTop:Pe,caretBottom:Pe-we},Se.set(Me,xe)}const{fontSizeMult:De}=xe,Ie=g.slice(de.start,de.end+1);let je,H;Me.forEachGlyph(Ie,M,E,(ee,pe,Le,we)=>{pe+=Ee,we+=de.start,je=pe,H=ee;const Pe=g.charAt(we),Be=ee.advanceWidth*De,Ve=he.count;let Oe;if("isEmpty"in ee||(ee.isWhitespace=!!Pe&&new RegExp(n).test(Pe),ee.canBreakAfter=!!Pe&&i.test(Pe),ee.isEmpty=ee.xMin===ee.xMax||ee.yMin===ee.yMax||r.test(Pe)),!ee.isWhitespace&&!ee.isEmpty&&fe++,le&&P&&!ee.isWhitespace&&pe+Be+_e>R&&Ve){if(he.glyphAt(Ve-1).glyphObj.canBreakAfter)Oe=new f,_e=-pe;else for(let $e=Ve;$e--;)if($e===0&&B==="break-word"){Oe=new f,_e=-pe;break}else if(he.glyphAt($e).glyphObj.canBreakAfter){Oe=he.splitAt($e+1);const et=Oe.glyphAt(0).x;_e-=et;for(let nt=Oe.count;nt--;)Oe.glyphAt(nt).x-=et;break}Oe&&(he.isSoftWrapped=!0,he=Oe,C.push(he),ne=R)}let ke=he.glyphAt(he.count);ke.glyphObj=ee,ke.x=pe+_e,ke.y=Le,ke.width=Be,ke.charIndex=we,ke.fontData=xe,Pe===`
`&&(he=new f,C.push(he),_e=-(pe+Be+E*M)+A)}),Ee=je+H.advanceWidth*De+E*M});let T=0;C.forEach(de=>{let Me=!0;for(let ve=de.count;ve--;){const re=de.glyphAt(ve);Me&&!re.glyphObj.isWhitespace&&(de.width=re.x+re.width,de.width>ne&&(ne=de.width),Me=!1);let{lineHeight:Ae,capHeight:Ce,xHeight:Te,baseline:ye}=re.fontData;Ae>de.lineHeight&&(de.lineHeight=Ae);const xe=ye-de.baseline;xe<0&&(de.baseline+=xe,de.cap+=xe,de.ex+=xe),de.cap=Math.max(de.cap,de.baseline+Ce),de.ex=Math.max(de.ex,de.baseline+Te)}de.baseline-=T,de.cap-=T,de.ex-=T,T+=de.lineHeight});let Y=0,ie=0;if(D&&(typeof D=="number"?Y=-D:typeof D=="string"&&(Y=-ne*(D==="left"?0:D==="center"?.5:D==="right"?1:l(D)))),I&&(typeof I=="number"?ie=-I:typeof I=="string"&&(ie=I==="top"?0:I==="top-baseline"?-C[0].baseline:I==="top-cap"?-C[0].cap:I==="top-ex"?-C[0].ex:I==="middle"?T/2:I==="bottom"?T:I==="bottom-baseline"?-C[C.length-1].baseline:l(I)*T)),!L){const de=e.getEmbeddingLevels(g,F);N=new Uint16Array(fe),y=new Uint8Array(fe),k=new Float32Array(fe*2),se={},W=[1/0,1/0,-1/0,-1/0],$=[],Q&&(oe=new Float32Array(g.length*4)),X&&(Z=new Uint8Array(fe*3));let Me=0,ve=-1,re=-1,Ae,Ce;if(C.forEach((Te,ye)=>{let{count:xe,width:De}=Te;if(xe>0){let Ie=0;for(let we=xe;we--&&Te.glyphAt(we).glyphObj.isWhitespace;)Ie++;let je=0,H=0;if(x==="center")je=(ne-De)/2;else if(x==="right")je=ne-De;else if(x==="justify"&&Te.isSoftWrapped){let we=0;for(let Pe=xe-Ie;Pe--;)Te.glyphAt(Pe).glyphObj.isWhitespace&&we++;H=(ne-De)/we}if(H||je){let we=0;for(let Pe=0;Pe<xe;Pe++){let Be=Te.glyphAt(Pe);const Ve=Be.glyphObj;Be.x+=je+we,H!==0&&Ve.isWhitespace&&Pe<xe-Ie&&(we+=H,Be.width+=H)}}const ee=e.getReorderSegments(g,de,Te.glyphAt(0).charIndex,Te.glyphAt(Te.count-1).charIndex);for(let we=0;we<ee.length;we++){const[Pe,Be]=ee[we];let Ve=1/0,Oe=-1/0;for(let ke=0;ke<xe;ke++)if(Te.glyphAt(ke).charIndex>=Pe){let $e=ke,et=ke;for(;et<xe;et++){let nt=Te.glyphAt(et);if(nt.charIndex>Be)break;et<xe-Ie&&(Ve=Math.min(Ve,nt.x),Oe=Math.max(Oe,nt.x+nt.width))}for(let nt=$e;nt<et;nt++){const yt=Te.glyphAt(nt);yt.x=Oe-(yt.x+yt.width-Ve)}break}}let pe;const Le=we=>pe=we;for(let we=0;we<xe;we++){const Pe=Te.glyphAt(we);pe=Pe.glyphObj;const Be=pe.index,Ve=de.levels[Pe.charIndex]&1;if(Ve){const Oe=e.getMirroredCharacter(g[Pe.charIndex]);Oe&&Pe.fontData.fontObj.forEachGlyph(Oe,0,0,Le)}if(Q){const{charIndex:Oe,fontData:ke}=Pe,$e=Pe.x+Y,et=Pe.x+Pe.width+Y;oe[Oe*4]=Ve?et:$e,oe[Oe*4+1]=Ve?$e:et,oe[Oe*4+2]=Te.baseline+ke.caretBottom+ie,oe[Oe*4+3]=Te.baseline+ke.caretTop+ie;const nt=Oe-ve;nt>1&&u(oe,ve,nt),ve=Oe}if(X){const{charIndex:Oe}=Pe;for(;Oe>re;)re++,X.hasOwnProperty(re)&&(Ce=X[re])}if(!pe.isWhitespace&&!pe.isEmpty){const Oe=Me++,{fontSizeMult:ke,src:$e,index:et}=Pe.fontData,nt=se[$e]||(se[$e]={});nt[Be]||(nt[Be]={path:pe.path,pathBounds:[pe.xMin,pe.yMin,pe.xMax,pe.yMax]});const yt=Pe.x+Y,Wt=Pe.y+Te.baseline+ie;k[Oe*2]=yt,k[Oe*2+1]=Wt;const Ft=yt+pe.xMin*ke,Xt=Wt+pe.yMin*ke,U=yt+pe.xMax*ke,ae=Wt+pe.yMax*ke;Ft<W[0]&&(W[0]=Ft),Xt<W[1]&&(W[1]=Xt),U>W[2]&&(W[2]=U),ae>W[3]&&(W[3]=ae),Oe%q===0&&(Ae={start:Oe,end:Oe,rect:[1/0,1/0,-1/0,-1/0]},$.push(Ae)),Ae.end++;const ue=Ae.rect;if(Ft<ue[0]&&(ue[0]=Ft),Xt<ue[1]&&(ue[1]=Xt),U>ue[2]&&(ue[2]=U),ae>ue[3]&&(ue[3]=ae),N[Oe]=Be,y[Oe]=et,X){const te=Oe*3;Z[te]=Ce>>16&255,Z[te+1]=Ce>>8&255,Z[te+2]=Ce&255}}}}}),oe){const Te=g.length-ve;Te>1&&u(oe,ve,Te)}}const me=[];Se.forEach(({index:de,src:Me,unitsPerEm:ve,ascender:re,descender:Ae,lineHeight:Ce,capHeight:Te,xHeight:ye})=>{me[de]={src:Me,unitsPerEm:ve,ascender:re,descender:Ae,lineHeight:Ce,capHeight:Te,xHeight:ye}}),G.typesetting=h()-ce,O({glyphIds:N,glyphFontIndices:y,glyphPositions:k,glyphData:se,fontData:me,caretPositions:oe,glyphColors:Z,chunkedBounds:$,fontSize:M,topBaseline:ie+C[0].baseline,blockBounds:[Y,ie-T,Y+ne,ie],visibleBounds:W,timings:G})})}function c(g,v){o({...g,metricsOnly:!0},m=>{const[p,M,_,S]=m.blockBounds;v({width:_-p,height:S-M})})}function l(g){let v=g.match(/^([\d.]+)%$/),m=v?parseFloat(v[1]):NaN;return isNaN(m)?0:m/100}function u(g,v,m){const p=g[v*4],M=g[v*4+1],_=g[v*4+2],S=g[v*4+3],E=(M-p)/m;for(let w=0;w<m;w++){const R=(v+w)*4;g[R]=p+E*w,g[R+1]=p+E*(w+1),g[R+2]=_,g[R+3]=S}}function h(){return(self.performance||Date).now()}function f(){this.data=[]}const d=["glyphObj","x","y","width","charIndex","fontData"];return f.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(g){let v=f.flyweight;return v.data=this.data,v.index=g,v},splitAt(g){let v=new f;return v.data=this.data.splice(g*d.length),v}},f.flyweight=d.reduce((g,v,m,p)=>(Object.defineProperty(g,v,{get(){return this.data[this.index*d.length+m]},set(M){this.data[this.index*d.length+m]=M}}),g),{data:null,index:0}),{typeset:o,measure:c}}const Tn=()=>(self.performance||Date).now(),Ur=Yo();let no;function Ep(s,e,t,r,n,i,a,o,c,l,u=!0){return u?bp(s,e,t,r,n,i,a,o,c,l).then(null,h=>(no||(console.warn("WebGL SDF generation failed, falling back to JS",h),no=!0),ro(s,e,t,r,n,i,a,o,c,l))):ro(s,e,t,r,n,i,a,o,c,l)}const Ar=[],Tp=5;let Us=0;function Jo(){const s=Tn();for(;Ar.length&&Tn()-s<Tp;)Ar.shift()();Us=Ar.length?setTimeout(Jo,0):0}const bp=(...s)=>new Promise((e,t)=>{Ar.push(()=>{const r=Tn();try{Ur.webgl.generateIntoCanvas(...s),e({timing:Tn()-r})}catch(n){t(n)}}),Us||(Us=setTimeout(Jo,0))}),Ap=4,wp=2e3,io={};let Rp=0;function ro(s,e,t,r,n,i,a,o,c,l){const u="TroikaTextSDFGenerator_JS_"+Rp++%Ap;let h=io[u];return h||(h=io[u]={workerModule:di({name:u,workerId:u,dependencies:[Yo,Tn],init(f,d){const g=f().javascript.generate;return function(...v){const m=d();return{textureData:g(...v),timing:d()-m}}},getTransferables(f){return[f.textureData.buffer]}}),requests:0,idleTimer:null}),h.requests++,clearTimeout(h.idleTimer),h.workerModule(s,e,t,r,n,i).then(({textureData:f,timing:d})=>{const g=Tn(),v=new Uint8Array(f.length*4);for(let m=0;m<f.length;m++)v[m*4+l]=f[m];return Ur.webglUtils.renderImageData(a,v,o,c,s,e,1<<3-l),d+=Tn()-g,--h.requests===0&&(h.idleTimer=setTimeout(()=>{sp(u)},wp)),{timing:d}})}function Cp(s){s._warm||(Ur.webgl.isSupported(s),s._warm=!0)}const Lp=Ur.webglUtils.resizeWebGLCanvasWithoutClearing,ei={defaultFontURL:null,unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},Pp=new Qe;function $n(){return(self.performance||Date).now()}const so=Object.create(null);function Up(s,e){s=Fp({},s);const t=$n(),{defaultFontURL:r}=ei,n=[];if(r&&n.push({label:"default",src:ao(r)}),s.font&&n.push({label:"user",src:ao(s.font)}),s.font=n,s.text=""+s.text,s.sdfGlyphSize=s.sdfGlyphSize||ei.sdfGlyphSize,s.unicodeFontsURL=s.unicodeFontsURL||ei.unicodeFontsURL,s.colorRanges!=null){let f={};for(let d in s.colorRanges)if(s.colorRanges.hasOwnProperty(d)){let g=s.colorRanges[d];typeof g!="number"&&(g=Pp.set(g).getHex()),f[d]=g}s.colorRanges=f}Object.freeze(s);const{textureWidth:i,sdfExponent:a}=ei,{sdfGlyphSize:o}=s,c=i/o*4;let l=so[o];if(!l){const f=document.createElement("canvas");f.width=i,f.height=o*256/c,l=so[o]={glyphCount:0,sdfGlyphSize:o,sdfCanvas:f,sdfTexture:new bt(f,void 0,void 0,void 0,1006,1006),contextLost:!1,glyphsByFont:new Map},l.sdfTexture.generateMipmaps=!1,Dp(l)}const{sdfTexture:u,sdfCanvas:h}=l;Np(s).then(f=>{const{glyphIds:d,glyphFontIndices:g,fontData:v,glyphPositions:m,fontSize:p,timings:M}=f,_=[],S=new Float32Array(d.length*4);let E=0,w=0;const R=$n(),F=v.map(D=>{let I=l.glyphsByFont.get(D.src);return I||l.glyphsByFont.set(D.src,I=new Map),I});d.forEach((D,I)=>{const L=g[I],{src:V,unitsPerEm:K}=v[L];let Q=F[L].get(D);if(!Q){const{path:G,pathBounds:b}=f.glyphData[V][D],P=Math.max(b[2]-b[0],b[3]-b[1])/o*(ei.sdfMargin*o+.5),N=l.glyphCount++,y=[b[0]-P,b[1]-P,b[2]+P,b[3]+P];F[L].set(D,Q={path:G,atlasIndex:N,sdfViewBox:y}),_.push(Q)}const{sdfViewBox:q}=Q,X=m[w++],O=m[w++],z=p/K;S[E++]=X+q[0]*z,S[E++]=O+q[1]*z,S[E++]=X+q[2]*z,S[E++]=O+q[3]*z,d[I]=Q.atlasIndex}),M.quads=(M.quads||0)+($n()-R);const x=$n();M.sdf={};const A=h.height,j=Math.ceil(l.glyphCount/c),B=Math.pow(2,Math.ceil(Math.log2(j*o)));B>A&&(console.info(`Increasing SDF texture size ${A}->${B}`),Lp(h,i,B),u.dispose()),Promise.all(_.map(D=>Ko(D,l,s.gpuAccelerateSDF).then(({timing:I})=>{M.sdf[D.atlasIndex]=I}))).then(()=>{_.length&&!l.contextLost&&(Zo(l),u.needsUpdate=!0),M.sdfTotal=$n()-x,M.total=$n()-t,e(Object.freeze({parameters:s,sdfTexture:u,sdfGlyphSize:o,sdfExponent:a,glyphBounds:S,glyphAtlasIndices:d,glyphColors:f.glyphColors,caretPositions:f.caretPositions,chunkedBounds:f.chunkedBounds,ascender:f.ascender,descender:f.descender,lineHeight:f.lineHeight,capHeight:f.capHeight,xHeight:f.xHeight,topBaseline:f.topBaseline,blockBounds:f.blockBounds,visibleBounds:f.visibleBounds,timings:f.timings}))})}),Promise.resolve().then(()=>{l.contextLost||Cp(h)})}function Ko({path:s,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:r,sdfCanvas:n,contextLost:i},a){if(i)return Promise.resolve({timing:-1});const{textureWidth:o,sdfExponent:c}=ei,l=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),h=u%(o/r)*r,f=Math.floor(u/(o/r))*r,d=e%4;return Ep(r,r,s,t,l,c,n,h,f,d,a)}function Dp(s){const e=s.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),s.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),s.contextLost=!1;const r=[];s.glyphsByFont.forEach(n=>{n.forEach(i=>{r.push(Ko(i,s,!0))})}),Promise.all(r).then(()=>{Zo(s),s.sdfTexture.needsUpdate=!0})})}function Fp(s,e){for(let t in e)e.hasOwnProperty(t)&&(s[t]=e[t]);return s}let Mr;function ao(s){return Mr||(Mr=typeof document>"u"?{}:document.createElement("a")),Mr.href=s,Mr.href}function Zo(s){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=s,{width:r,height:n}=e,i=s.sdfCanvas.getContext("webgl");let a=t.image.data;(!a||a.length!==r*n*4)&&(a=new Uint8Array(r*n*4),t.image={width:r,height:n,data:a},t.flipY=!1,t.isDataTexture=!0),i.readPixels(0,0,r,n,i.RGBA,i.UNSIGNED_BYTE,a)}}const Ip=di({name:"Typesetter",dependencies:[yp,Mp,op],init(s,e,t){return s(e,t())}}),Np=di({name:"Typesetter",dependencies:[Ip],init(s){return function(e){return new Promise(t=>{s.typeset(e,t)})}},getTransferables(s){const e=[];for(let t in s)s[t]&&s[t].buffer&&e.push(s[t].buffer);return e}}),oo={};function Op(s){let e=oo[s];if(!e){const t=new hi(1,1,s,s),r=t.clone(),n=t.attributes,i=r.attributes,a=new dt,o=n.uv.count;for(let c=0;c<o;c++)i.position.array[c*3]*=-1,i.normal.array[c*3+2]*=-1;["position","normal","uv"].forEach(c=>{a.setAttribute(c,new Dt([...n[c].array,...i[c].array],n[c].itemSize))}),a.setIndex([...t.index.array,...r.index.array.map(c=>c+o)]),a.translate(.5,.5,0),e=oo[s]=a}return e}const Bp="aTroikaGlyphBounds",lo="aTroikaGlyphIndex",Gp="aTroikaGlyphColor";class kp extends Yd{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new ci,this.boundingBox=new Cn}computeBoundingSphere(){}computeBoundingBox(){}setSide(e){const t=this.getIndex().count;this.setDrawRange(e===1?t/2:0,e===2?t:t/2)}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=Op(e);["position","normal","uv"].forEach(r=>{this.attributes[r]=t.attributes[r].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,r,n,i){Ss(this,Bp,e,4),Ss(this,lo,t,1),Ss(this,Gp,i,3),this._blockBounds=r,this._chunkedBounds=n,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:r}=this;if(t){const{PI:n,floor:i,min:a,max:o,sin:c,cos:l}=Math,u=n/2,h=n*2,f=Math.abs(t),d=e[0]/f,g=e[2]/f,v=i((d+u)/h)!==i((g+u)/h)?-f:a(c(d)*f,c(g)*f),m=i((d-u)/h)!==i((g-u)/h)?f:o(c(d)*f,c(g)*f),p=i((d+n)/h)!==i((g+n)/h)?f*2:o(f-l(d)*f,f-l(g)*f);r.min.set(v,e[1],t<0?-p:0),r.max.set(m,e[3],t<0?0:p)}else r.min.set(e[0],e[1],0),r.max.set(e[2],e[3],0);r.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(lo).count,r=this._chunkedBounds;if(r)for(let n=r.length;n--;){t=r[n].end;let i=r[n].rect;if(i[1]<e.w&&i[3]>e.y&&i[0]<e.z&&i[2]>e.x)break}this.instanceCount=t}}function Ss(s,e,t,r){const n=s.getAttribute(e);t?n&&n.array.length===t.length?(n.array.set(t),n.needsUpdate=!0):(s.setAttribute(e,new cd(t,r)),delete s._maxInstanceCount,s.dispose()):n&&s.deleteAttribute(e)}const zp=`
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
`,Hp=`
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
`,Vp=`
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
`,Wp=`
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
`;function Xp(s){const e=Ps(s,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new be},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new lt(0,0,0,0)},uTroikaClipRect:{value:new lt(0,0,0,0)},uTroikaDistanceOffset:{value:0},uTroikaOutlineOpacity:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new be},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new Qe},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Ke},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:zp,vertexTransform:Hp,fragmentDefs:Vp,fragmentColorTransform:Wp,customRewriter({vertexShader:t,fragmentShader:r}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(r)&&(r=r.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(jo,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:r}}});return e.transparent=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const ks=new Di({color:16777215,side:2,transparent:!0}),co=8421504,uo=new st,yr=new J,Ms=new J,Ai=[],qp=new J,ys="+x+y";function ho(s){return Array.isArray(s)?s[0]:s}let Qo=()=>{const s=new Lt(new hi(1,1),ks);return Qo=()=>s,s},$o=()=>{const s=new Lt(new hi(1,1,32,1),ks);return $o=()=>s,s};const Yp={type:"syncstart"},jp={type:"synccomplete"},el=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],Jp=el.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class tl extends Lt{constructor(){const e=new kp;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=co,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=ys,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(Yp),Up({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const r=this._queuedSyncs;r&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{r.forEach(n=>n&&n())})),this.dispatchEvent(jp),e&&e()})))}onBeforeRender(e,t,r,n,i,a){this.sync(),i.isTroikaTextMaterial&&this._prepareForRender(i),i._hadOwnSide=i.hasOwnProperty("side"),this.geometry.setSide(i._actualSide=i.side),i.side=0}onAfterRender(e,t,r,n,i,a){i._hadOwnSide?i.side=i._actualSide:delete i.side}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=ks.clone());if((!e||e.baseMaterial!==t)&&(e=this._derivedMaterial=Xp(t),t.addEventListener("dispose",function r(){t.removeEventListener("dispose",r),e.dispose()})),this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY){let r=e._outlineMtl;return r||(r=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),r.isTextOutlineMaterial=!0,r.depthWrite=!1,r.map=null,e.addEventListener("dispose",function n(){e.removeEventListener("dispose",n),r.dispose()})),[r,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return ho(this.material).getDepthMaterial()}get customDistanceMaterial(){return ho(this.material).getDistanceMaterial()}_prepareForRender(e){const t=e.isTextOutlineMaterial,r=e.uniforms,n=this.textRenderInfo;if(n){const{sdfTexture:o,blockBounds:c}=n;r.uTroikaSDFTexture.value=o,r.uTroikaSDFTextureSize.value.set(o.image.width,o.image.height),r.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,r.uTroikaSDFExponent.value=n.sdfExponent,r.uTroikaTotalBounds.value.fromArray(c),r.uTroikaUseGlyphColors.value=!t&&!!n.glyphColors;let l=0,u=0,h=0,f,d,g,v=0,m=0;if(t){let{outlineWidth:M,outlineOffsetX:_,outlineOffsetY:S,outlineBlur:E,outlineOpacity:w}=this;l=this._parsePercent(M)||0,u=Math.max(0,this._parsePercent(E)||0),f=w,v=this._parsePercent(_)||0,m=this._parsePercent(S)||0}else h=Math.max(0,this._parsePercent(this.strokeWidth)||0),h&&(g=this.strokeColor,r.uTroikaStrokeColor.value.set(g??co),d=this.strokeOpacity,d==null&&(d=1)),f=this.fillOpacity;r.uTroikaDistanceOffset.value=l,r.uTroikaPositionOffset.value.set(v,m),r.uTroikaBlurRadius.value=u,r.uTroikaStrokeWidth.value=h,r.uTroikaStrokeOpacity.value=d,r.uTroikaFillOpacity.value=f??1,r.uTroikaCurveRadius.value=this.curveRadius||0;let p=this.clipRect;if(p&&Array.isArray(p)&&p.length===4)r.uTroikaClipRect.value.fromArray(p);else{const M=(this.fontSize||.1)*100;r.uTroikaClipRect.value.set(c[0]-M,c[1]-M,c[2]+M,c[3]+M)}this.geometry.applyClipRect(r.uTroikaClipRect.value)}r.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const i=t?this.outlineColor||0:this.color;if(i==null)delete e.color;else{const o=e.hasOwnProperty("color")?e.color:e.color=new Qe;(i!==o._input||typeof i=="object")&&o.set(o._input=i)}let a=this.orientation||ys;if(a!==e._orientation){let o=r.uTroikaOrient.value;a=a.replace(/[^-+xyz]/g,"");let c=a!==ys&&a.match(/^([-+])([xyz])([-+])([xyz])$/);if(c){let[,l,u,h,f]=c;yr.set(0,0,0)[u]=l==="-"?1:-1,Ms.set(0,0,0)[f]=h==="-"?-1:1,uo.lookAt(qp,yr.cross(Ms),Ms),o.setFromMatrix4(uo)}else o.identity();e._orientation=a}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),r=t?parseFloat(t[1]):NaN;e=(isNaN(r)?0:r/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new be){t.copy(e);const r=this.curveRadius;return r&&(t.x=Math.atan2(e.x,Math.abs(r)-Math.abs(e.z))*Math.abs(r)),t}worldPositionToTextCoords(e,t=new be){return yr.copy(e),this.localPositionToTextCoords(this.worldToLocal(yr),t)}raycast(e,t){const{textRenderInfo:r,curveRadius:n}=this;if(r){const i=r.blockBounds,a=n?$o():Qo(),o=a.geometry,{position:c,uv:l}=o.attributes;for(let u=0;u<l.count;u++){let h=i[0]+l.getX(u)*(i[2]-i[0]);const f=i[1]+l.getY(u)*(i[3]-i[1]);let d=0;n&&(d=n-Math.cos(h/n)*n,h=Math.sin(h/n)*n),c.setXYZ(u,h,f,d)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,a.matrixWorld=this.matrixWorld,a.material.side=this.material.side,Ai.length=0,a.raycast(e,Ai);for(let u=0;u<Ai.length;u++)Ai[u].object=this,t.push(Ai[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,Jp.forEach(r=>{this[r]=e[r]}),this}clone(){return new this.constructor().copy(this)}}el.forEach(s=>{const e="_private_"+s;Object.defineProperty(tl.prototype,s,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});const Kp={d:"°",c:"⌀",p:"±"},nl=(s,e)=>{s=s.replace(/%%(.)/g,(a,o)=>Kp[o]||o);let t="",r;const n=[],i=a=>{t&&(n.push(t),t=""),n.push(a)};for(let a=0;a<s.length;a++)switch(r=s[a]){default:t+=r;break;case"\\":{switch(r=s[++a]){default:t+=r;break;case"P":t+=`
`;break;case"f":case"F":{let u="";for(;r=s[++a];){if(r===";"){i({f:u});break}if(r==="|"){const h={f:u},f=s.indexOf(";",++a);for(const d of s.slice(a,f).split("|"))h[d[0]]=+d.slice(1);a=f,i(h);break}u+=r==="\\"?s[++a]:r}break}case"S":{let u="",h,f="";for(;r=s[++a];){if(r===";"){h&&i({S:[u,h,f]});break}r==="\\"?h?f+=s[++a]:u+=s[++a]:h?f+=r:r==="^"||r==="/"||r==="#"?h=r:u+=r}break}case"H":case"W":const o=++a,[,c,l]=s.slice(o,a=s.indexOf(";",a)).match(/^(\d*(?:\.\d+)?)(\D*)$/);i({[r]:[+c,l]});break;case"Q":case"A":case"C":case"T":{const u=++a;i({[r]:+s.slice(u,a=s.indexOf(";",a))});break}case"L":case"O":case"K":i({[r]:1});break;case"l":case"o":case"k":i({[r.toUpperCase()]:0});break;case"U":case"u":s[a+1]==="+"?(t+=String.fromCodePoint(parseInt(s.substr(a+2,4),16)),a+=5):t+=r;break;case"M":case"m":t+="\\"+r;break}break}case"{":{let o=1;const c=a;for(;r=s[++a];)if(r==="{")o++;else if(r==="}"){if(--o===0){i(nl(s.slice(c+1,a)));break}}else r==="\\"&&a++;break}}return t&&n.push(t),n};var ri={Math:{}};ri.Math.angle2=function(s,e){var t=new be(s.x,s.y),r=new be(e.x,e.y);return r.sub(t),r.normalize(),r.y<0?-Math.acos(r.x):Math.acos(r.x)};ri.Math.polar=function(s,e,t){var r={};return r.x=s.x+e*Math.cos(t),r.y=s.y+e*Math.sin(t),r};function Zp(s,e,t,r){var n,i,a,o,c,l,u,h,f;o=s?new be(s.x,s.y):new be(0,0),c=e?new be(e.x,e.y):new be(1,0),t=t||1,l=4*Math.atan(t),u=o.distanceTo(c)/2/Math.sin(l/2),a=ri.Math.polar(s,u,ri.Math.angle2(o,c)+(Math.PI/2-l/2)),r=r||Math.max(Math.abs(Math.ceil(l/(Math.PI/18))),6),h=ri.Math.angle2(a,o),f=l/r;var d=[];for(d.push(new J(o.x,o.y,0)),i=1;i<=r-1;i++)n=ri.Math.polar(a,Math.abs(u),h+f*i),d.push(new J(n.x,n.y,0));return d}function $p(s,e,t,r,n){z(s);var i=new ld,a,o,c,l={min:{x:0,y:0,z:0},max:{x:0,y:0,z:0}};for(a=0;a<s.entities.length;a++){if(o=s.entities[a],c=w(o,s),c){var u=new Cn().setFromObject(c);isFinite(u.min.x)&&l.min.x>u.min.x&&(l.min.x=u.min.x),isFinite(u.min.y)&&l.min.y>u.min.y&&(l.min.y=u.min.y),isFinite(u.min.z)&&l.min.z>u.min.z&&(l.min.z=u.min.z),isFinite(u.max.x)&&l.max.x<u.max.x&&(l.max.x=u.max.x),isFinite(u.max.y)&&l.max.y<u.max.y&&(l.max.y=u.max.y),isFinite(u.max.z)&&l.max.z<u.max.z&&(l.max.z=u.max.z),i.add(c)}c=null}t=t||e.clientWidth,r=r||e.clientHeight;var h=t/r,f={x:l.max.x,y:l.max.y},d={x:l.min.x,y:l.min.y},g=f.x-d.x,v=f.y-d.y,m=m||{x:g/2+d.x,y:v/2+d.y},p=Math.abs(g/v);h>p?g=v*h:v=g/h;var M={bottom:-v/2,left:-g/2,top:v/2,right:g/2,center:{x:m.x,y:m.y}},_=new wo(M.left,M.right,M.top,M.bottom,1,19);_.position.z=10,_.position.x=M.center.x,_.position.y=M.center.y;var S=this.renderer=new Fo;S.setSize(t,r),S.setClearColor(268435455,0),e.appendChild(S.domElement),e.style.display="block";var E=new Xo(_,e);E.target.x=_.position.x,E.target.y=_.position.y,E.target.z=0,E.zoomSpeed=3,this.render=function(){S.render(i,_)},E.addEventListener("change",this.render),this.render(),E.update(),this.resize=function(b,P){var N=S.domElement.width,y=S.domElement.height,k=b/N,se=P/y;_.top=se*_.top,_.bottom=se*_.bottom,_.left=k*_.left,_.right=k*_.right,S.setSize(b,P),S.setClearColor(268435455,1),this.render()};function w(b,P){var N;if(b.type==="CIRCLE"||b.type==="ARC")N=I(b,P);else if(b.type==="LWPOLYLINE"||b.type==="LINE"||b.type==="POLYLINE")N=D(b,P);else if(b.type==="TEXT")N=K(b,P);else if(b.type==="SOLID")N=V(b,P);else if(b.type==="POINT")N=Q(b,P);else if(b.type==="INSERT")N=X(b,P);else if(b.type==="SPLINE")N=j(b,P);else if(b.type==="MTEXT")N=F(b,P);else if(b.type==="ELLIPSE")N=R(b,P);else if(b.type==="DIMENSION"){var y=b.dimensionType&7;y===0?N=q(b,P):console.log("Unsupported Dimension type: "+y)}else console.log("Unsupported Entity Type: "+b.type);return N}function R(b,P){var N=O(b,P),y=Math.sqrt(Math.pow(b.majorAxisEndPoint.x,2)+Math.pow(b.majorAxisEndPoint.y,2)),k=y*b.axisRatio,se=Math.atan2(b.majorAxisEndPoint.y,b.majorAxisEndPoint.x),Z=new Lr(b.center.x,b.center.y,y,k,b.startAngle,b.endAngle,!1,se),oe=Z.getPoints(50),W=new dt().setFromPoints(oe),$=new ni({linewidth:1,color:N}),ne=new mr(W,$);return ne}function F(b,P){var N=O(b,P);if(!n)return console.log("font parameter not set. Ignoring text entity.");var y=nl(b.text),k=x(y,b),se=A(k.text,k.style,b,N),Z=new pt;return Z.add(se),Z}function x(b,P,N){let y={horizontalAlignment:"left",textHeight:P.height};var k=[];for(let Z of b)if(typeof Z=="string")Z.startsWith("pxq")&&Z.endsWith(";")?Z.indexOf("c")!==-1?y.horizontalAlignment="center":Z.indexOf("l")!==-1?y.horizontalAlignment="left":Z.indexOf("r")!==-1?y.horizontalAlignment="right":Z.indexOf("j")!==-1&&(y.horizontalAlignment="justify"):k.push(Z);else if(Array.isArray(Z)){var se=x(Z,P);k.push(se.text)}else typeof Z=="object"&&Z.S&&Z.S.length===3&&k.push(Z.S[0]+"/"+Z.S[2]);return{text:k.join(),style:y}}function A(b,P,N,y){if(!b)return null;let k=new tl;if(k.text=b.replaceAll("\\P",`
`).replaceAll("\\X",`
`),k.fontSize=P.textHeight,k.maxWidth=N.width||1/0,k.position.x=N.position.x,k.position.y=N.position.y,k.position.z=N.position.z,k.textAlign=P.horizontalAlignment,k.color=y,N.rotation&&(k.rotation.z=N.rotation*Math.PI/180),N.directionVector){var se=N.directionVector;k.rotation.z=new J(1,0,0).angleTo(new J(se.x,se.y,se.z))}switch(N.attachmentPoint){case 1:k.anchorX="left",k.anchorY="top";break;case 2:k.anchorX="center",k.anchorY="top";break;case 3:k.anchorX="right",k.anchorY="top";break;case 4:k.anchorX="left",k.anchorY="middle";break;case 5:k.anchorX="center",k.anchorY="middle";break;case 6:k.anchorX="right",k.anchorY="middle";break;case 7:k.anchorX="left",k.anchorY="bottom";break;case 8:k.anchorX="center",k.anchorY="bottom";break;case 9:k.anchorX="right",k.anchorY="bottom";break;default:return}return k.sync(()=>{if(k.textAlign!=="left"){k.geometry.computeBoundingBox();var Z=k.geometry.boundingBox.max.x-k.geometry.boundingBox.min.x;k.textAlign==="center"&&(k.position.x+=(N.width-Z)/2),k.textAlign==="right"&&(k.position.x+=N.width-Z)}}),k}function j(b,P){var N=O(b,P),y=B(b.controlPoints,b.degreeOfSplineCurve,b.knotValues,100),k=new dt().setFromPoints(y),se=new ni({linewidth:1,color:N}),Z=new mr(k,se);return Z}function B(b,P,N,y,k){const se=[],Z=b.map(function($){return[$.x,$.y]}),oe=[N[P]],W=[N[P],N[N.length-1-P]];for(let $=P+1;$<N.length-P;++$)oe[oe.length-1]!==N[$]&&oe.push(N[$]);y=y||25;for(let $=1;$<oe.length;++$){const ne=oe[$-1],fe=oe[$];for(let le=0;le<=y;++le){let ce=(le/y*(fe-ne)+ne-W[0])/(W[1]-W[0]);ce=Math.max(ce,0),ce=Math.min(ce,1);const _e=ep(ce,P,Z,N,k);se.push(new be(_e[0],_e[1]))}}return se}function D(b,P){let N=[],y=O(b,P);var k,se,Z,oe,W,$,ne,fe;if(!b.vertices)return console.log("entity missing vertices.");for(ne=0;ne<b.vertices.length;ne++)if(b.vertices[ne].bulge){$=b.vertices[ne].bulge,oe=b.vertices[ne],W=ne+1<b.vertices.length?b.vertices[ne+1]:N[0];let Se=Zp(oe,W,$);N.push.apply(N,Se)}else Z=b.vertices[ne],N.push(new J(Z.x,Z.y,0));b.shape&&N.push(N[0]),b.lineType&&(se=P.tables.lineType.lineTypes[b.lineType]),se&&se.pattern&&se.pattern.length!==0?k=new Hd({color:y,gapSize:4,dashSize:4}):k=new ni({linewidth:1,color:y});var le=new dt().setFromPoints(N);return fe=new mr(le,k),fe}function I(b,P){var N,y;b.type==="CIRCLE"?(N=b.startAngle||0,y=N+2*Math.PI):(N=b.startAngle,y=b.endAngle);var k=new No(0,0,b.radius,N,y),se=k.getPoints(32),Z=new dt().setFromPoints(se),oe=new ni({color:O(b,P)}),W=new mr(Z,oe);return W.position.x=b.center.x,W.position.y=b.center.y,W.position.z=b.center.z,W}function L(b,P,N,y){var k=new J,se=new J;k.subVectors(N,P),se.subVectors(y,P),k.cross(se);var Z=new J(P.x,P.y,P.z),oe=new J(N.x,N.y,N.z),W=new J(y.x,y.y,y.z);k.z<0?b.push(W,oe,Z):b.push(Z,oe,W)}function V(b,P){var N,y,k=new dt,se=b.points;return y=[],L(y,se[0],se[1],se[2]),L(y,se[1],se[2],se[3]),N=new Di({color:O(b,P)}),k.setFromPoints(y),new Lt(k,N)}function K(b,P){var N,y,k;if(!n)return console.warn("Text is not supported without a Three.js font loaded with THREE.FontLoader! Load a font of your choice and pass this into the constructor. See the sample for this repository or Three.js examples at http://threejs.org/examples/?q=text#webgl_geometry_text for more details.");if(N=new Qd(b.text.replaceAll("%%u",""),{font:n,depth:0,size:b.textHeight||12}),b.rotation){var se=b.rotation*Math.PI/180;N.rotateZ(se)}return y=new Di({color:O(b,P),side:2}),k=new Lt(N,y),k.position.x=b.startPoint.x,k.position.y=b.startPoint.y,k.position.z=b.startPoint.z,k}function Q(b,P){var N,y,k;N=new dt,N.setAttribute("position",new Dt([b.position.x,b.position.y,b.position.z],3));var se=O(b,P);y=new Io({size:.1,color:new Qe(se)}),k=new ud(N,y),i.add(k)}function q(b,P){var N=P.blocks[b.block];if(!N||!N.entities)return null;for(var y=new pt,k=0;k<N.entities.length;k++){var se=w(N.entities[k],P);se&&y.add(se)}return y}function X(b,P){var N=P.blocks[b.name];if(!N.entities)return null;var y=new pt;b.xScale&&(y.scale.x=b.xScale),b.yScale&&(y.scale.y=b.yScale),b.rotation&&(y.rotation.z=b.rotation*Math.PI/180),b.position&&(y.position.x=b.position.x,y.position.y=b.position.y,y.position.z=b.position.z);for(var k=0;k<N.entities.length;k++){var se=w(N.entities[k],P);se&&y.add(se)}return y}function O(b,P){var N=0;return b.color?N=b.color:P.tables&&P.tables.layer&&P.tables.layer.layers[b.layer]&&(N=P.tables.layer.layers[b.layer].color),(N==null||N===16777215)&&(N=0),N}function z(b){var P,N;if(!(!b.tables||!b.tables.lineType)){var y=b.tables.lineType.lineTypes;for(N in y)P=y[N],P.pattern&&(P.material=G(P.pattern))}}function G(b){var P,N={},y=0;for(P=0;P<b.length;P++)y+=Math.abs(b[P]);return N.uniforms=Is.merge([Re.common,Re.fog,{pattern:{type:"fv1",value:b},patternLength:{type:"f",value:y}}]),N.vertexShader=["attribute float lineDistance;","varying float vLineDistance;",ze.color_pars_vertex,"void main() {",ze.color_vertex,"vLineDistance = lineDistance;","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join(`
`),N.fragmentShader=["uniform vec3 diffuse;","uniform float opacity;","uniform float pattern["+b.length+"];","uniform float patternLength;","varying float vLineDistance;",ze.color_pars_fragment,ze.fog_pars_fragment,"void main() {","float pos = mod(vLineDistance, patternLength);","for ( int i = 0; i < "+b.length+"; i++ ) {","pos = pos - abs(pattern[i]);","if( pos < 0.0 ) {","if( pattern[i] > 0.0 ) {","gl_FragColor = vec4(1.0, 0.0, 0.0, opacity );","break;","}","discard;","}","}",ze.color_fragment,ze.fog_fragment,"}"].join(`
`),N}}export{Qp as F,$p as V};
