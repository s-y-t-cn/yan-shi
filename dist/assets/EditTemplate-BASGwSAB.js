import{d as pe,r as I,a6 as Ne,P as Ue,c as d,e as p,g as e,l as M,w as y,Y as E,ae as q,H as ne,A as h,D as r,ac as le,n as Pe,E as Xe,N as be,y as Ve,a2 as ze,k as l,t as ee,am as we,an as $e,ai as Ie,F as ie,a_ as Ce,a$ as xe,U as Ae,al as Be}from"./index-B_ZJlzGL.js";import{a as Ee,b as Se,c as je,d as Je,S as He,E as We}from"./SytPreviewItem-CmQ2eCzg.js";/* empty css                  */import{E as Ge}from"./el-card-8P3sCtdk.js";/* empty css                 */import{h as Ke,p as Qe,u as Ze}from"./examples-M3TPShd4.js";/* empty css                   */import"./el-radio-Bnf4y1jI.js";/* empty css               *//* empty css                  *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                    */import{E as De}from"./index-BBE6lv8d.js";import{E as Fe}from"./index-NPrhiEQX.js";import{a as qe,E as Me}from"./index-Bhb0wNCv.js";import{a as el,E as ll}from"./index-CT3RxB0d.js";import{a as Oe,E as Te}from"./index-ZFLvW_Yn.js";import{E as tl}from"./index-4rceZkO6.js";import{E as ke}from"./index-BU1K9O-H.js";import{E as ol}from"./index-D7HMuvna.js";import{E as Re,a as Ye}from"./index-hpsKijdF.js";import{_ as me}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{E as al}from"./index-DaUUvwgy.js";import{b as nl}from"./index-DMy1G94c.js";import"./vnode-BLYMqKVk.js";import"./index-TXtwhKK1.js";import"./error-BJ0obFE8.js";import"./isEqual-BBTZ5Qrx.js";import"./index-DIP1PYhk.js";import"./position-D1Aw7UUH.js";import"./index-DkGcPRir.js";import"./castArray-istU0CW9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./_baseClone-DJp4dWdX.js";const sl=["data-index"],dl=pe({__name:"SytEditItem",props:{activeIndex:String,index:String,modelValue:{type:Object,default(){return{}}},ruleFormRef:Object},emits:["update:modelValue","toggle","drop","dragstart","removeItem","cascaderFetch"],setup(g,{emit:oe}){const J=g,W=oe,_=(w,u)=>{w&&fetch(u).then(t=>t.json()).then(t=>W("cascaderFetch",t.data))};let s=I({});Ne(()=>s.value=JSON.parse(JSON.stringify(J.modelValue)));const f=()=>{W("update:modelValue",s.value)};return(w,u)=>{const t=Ue("SytEditItem",!0),x=Ee,$=Se,O=De,G=Fe,ae=qe,Q=Me,se=el,V=ll,n=Oe,Z=Te,R=je,D=tl,b=Je,C=ke,Y=ol,U=Re,X=Ue("Delete"),T=Xe;return d(),p("div",{class:Pe(["form-item-box",{"active-form-item":g.activeIndex===g.index}]),draggable:"true","data-index":g.index,onDrop:u[16]||(u[16]=i=>w.$emit("drop",i)),onDragstart:u[17]||(u[17]=i=>w.$emit("dragstart",i)),onClick:u[18]||(u[18]=ne(i=>w.$emit("toggle",g.index),["stop"]))},[e(s).type=="layout"?(d(),M($,{key:0},{default:y(()=>[(d(!0),p(E,null,q(e(s).cols,(i,P)=>(d(),M(x,{key:i.id,span:i.span,"data-index":`${g.index}.cols.${P}`,onDrop:u[2]||(u[2]=A=>w.$emit("drop",A))},{default:y(()=>[(d(!0),p(E,null,q(i.children,(A,k)=>(d(),M(t,{key:A.field,modelValue:e(s).cols[P].children[k],"onUpdate:modelValue":[S=>e(s).cols[P].children[k]=S,f],index:`${g.index}.cols.${P}.children.${k}`,"active-index":g.activeIndex,"rule-form-ref":g.ruleFormRef,onCascaderFetch:S=>A.options=S,onClick:ne(S=>w.$emit("toggle",`${g.index}.cols.${P}.children.${k}`),["stop"]),onDrop:u[0]||(u[0]=S=>w.$emit("drop",S)),onDragstart:u[1]||(u[1]=S=>w.$emit("dragstart",S)),onRemoveItem:S=>w.$emit("removeItem",`${g.index}.cols.${P}.children.${k}`)},null,8,["modelValue","onUpdate:modelValue","index","active-index","rule-form-ref","onCascaderFetch","onClick","onRemoveItem"]))),128))]),_:2},1032,["span","data-index"]))),128))]),_:1})):(d(),M(U,{key:1,label:e(s).label,prop:`${g.index}.value`,rules:e(s).rules},{default:y(()=>[e(s).type=="input"?(d(),M(O,{key:0,modelValue:e(s).value,"onUpdate:modelValue":u[3]||(u[3]=i=>e(s).value=i),"show-word-limit":"",maxlength:e(s).maxlength,placeholder:e(s).placeholder,required:e(s).required,onInput:f},null,8,["modelValue","maxlength","placeholder","required"])):h("",!0),e(s).type=="textarea"?(d(),M(O,{key:1,type:"textarea",autosize:"","show-word-limit":"",modelValue:e(s).value,"onUpdate:modelValue":u[4]||(u[4]=i=>e(s).value=i),maxlength:e(s).maxlength,placeholder:e(s).placeholder,onInput:f},null,8,["modelValue","maxlength","placeholder"])):h("",!0),e(s).type=="number"?(d(),M(G,{key:2,modelValue:e(s).value,"onUpdate:modelValue":u[5]||(u[5]=i=>e(s).value=i),min:e(s).min,max:e(s).max,placeholder:e(s).placeholder,"controls-position":"right",onChange:f},null,8,["modelValue","min","max","placeholder"])):h("",!0),e(s).type=="radio"?(d(),M(Q,{key:3,modelValue:e(s).value,"onUpdate:modelValue":u[6]||(u[6]=i=>e(s).value=i),onChange:u[7]||(u[7]=()=>{f(),g.ruleFormRef.validateField(`${g.index}.value`)})},{default:y(()=>[(d(!0),p(E,null,q(e(s).options,i=>(d(),M(ae,{key:i,label:i.label,value:i.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])):h("",!0),e(s).type=="checkbox"?(d(),M(V,{key:4,modelValue:e(s).value,"onUpdate:modelValue":u[8]||(u[8]=i=>e(s).value=i),max:e(s).max,onChange:f},{default:y(()=>[(d(!0),p(E,null,q(e(s).options,i=>(d(),M(se,{key:i,label:i.label,value:i.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","max"])):h("",!0),e(s).type=="select"?(d(),M(Z,{key:5,modelValue:e(s).value,"onUpdate:modelValue":u[9]||(u[9]=i=>e(s).value=i),placeholder:e(s).placeholder,size:"large",onChange:f},{default:y(()=>[(d(!0),p(E,null,q(e(s).options,i=>(d(),M(n,{key:i.label,label:i.label,value:i.label},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])):h("",!0),e(s).type=="cascader"?(d(),M(R,{key:6,modelValue:e(s).value,"onUpdate:modelValue":u[10]||(u[10]=i=>e(s).value=i),options:e(s).options,onVisibleChange:u[11]||(u[11]=i=>_(i,e(s).url)),onChange:f},null,8,["modelValue","options"])):h("",!0),e(s).type=="datePicker"?(d(),M(D,{key:7,modelValue:e(s).value,"onUpdate:modelValue":u[12]||(u[12]=i=>e(s).value=i),type:e(s).dateType,placeholder:e(s).placeholder,onChange:f},null,8,["modelValue","type","placeholder"])):h("",!0),e(s).type=="timePicker"?(d(),M(b,{key:8,modelValue:e(s).value,"onUpdate:modelValue":u[13]||(u[13]=i=>e(s).value=i),placeholder:e(s).placeholder,onChange:f},null,8,["modelValue","placeholder"])):h("",!0),e(s).type=="text"?(d(),M(O,{key:9,type:"textarea",autosize:"",modelValue:e(s).value,"onUpdate:modelValue":u[14]||(u[14]=i=>e(s).value=i),onInput:f},null,8,["modelValue"])):h("",!0),e(s).type=="img-upload"?(d(),M(Y,{key:10,"list-type":"picture",accept:"image/*","auto-upload":!1,limit:e(s).limit,"on-change":(i,P)=>{e(s).value=P.map(A=>A.raw),f(),g.ruleFormRef.validateField(`${g.index}.value`)},"on-remove":(i,P)=>{e(s).value=P.map(A=>A.raw),f()}},{default:y(()=>[r(C,null,{default:y(()=>[le(" 添加图片 ")]),_:1})]),_:1},8,["limit","on-change","on-remove"])):h("",!0)]),_:1},8,["label","prop","rules"])),r(T,{class:"remove-el",color:"var(--el-color-danger)",size:16,onClick:u[15]||(u[15]=i=>w.$emit("removeItem",g.index))},{default:y(()=>[r(X)]),_:1})],42,sl)}}}),il=me(dl,[["__scopeId","data-v-3ea62a1c"]]),rl={class:"h-full"},ul=pe({__name:"SytFormPreview",props:{data:{}},setup(g){let oe=g,J=I([]);be(()=>JSON.parse(JSON.stringify(oe.data)),f=>{J.value=f},{deep:!0,immediate:!0});const W=I();let _=new FormData;const s=f=>{f&&f.validate(w=>{if(w)_=new FormData,J.value.forEach(u=>{Array.isArray(u.value)?u.type==="img-upload"?u.value.forEach(t=>_.append(u.field,t)):_.append(u.field,u.value.join("&")):u.type==="layout"?u.cols.forEach(t=>{t.children.forEach(x=>{Array.isArray(x.value)?x.type==="img-upload"?x.value.forEach($=>_.append(x.field,$)):_.append(x.field,x.value.join("&")):_.append(x.field,x.value)})}):_.append(u.field,u.value)});else return console.log("error submit!"),!1})};return(f,w)=>{const u=ke,t=Re,x=Ye;return d(),p("div",rl,[r(x,{ref_key:"ruleFormRef",ref:W,model:e(J)},{default:y(()=>[(d(!0),p(E,null,q(e(J),($,O)=>(d(),M(He,{key:$.field,modelValue:e(J)[O],"onUpdate:modelValue":G=>e(J)[O]=G,index:O.toString(),"rule-form-ref":W.value,onCascaderFetch:G=>$.options=G},null,8,["modelValue","onUpdate:modelValue","index","rule-form-ref","onCascaderFetch"]))),128)),r(t,null,{default:y(()=>[r(u,{type:"primary",onClick:w[0]||(w[0]=$=>s(W.value))},{default:y(()=>[le("提交")]),_:1})]),_:1})]),_:1},8,["model"])])}}}),pl=me(ul,[["__scopeId","data-v-778180cc"]]),c=g=>(we("data-v-bee0adc9"),g=g(),$e(),g),ml=c(()=>l("h4",null,"拖动下方元素到中框",-1)),vl=["data-index"],fl=c(()=>l("h4",null,"修改属性",-1)),cl={class:"attr-box"},gl=c(()=>l("div",null,"字段：",-1)),yl={class:"attr-box"},hl=c(()=>l("div",null,"标题：",-1)),_l={key:1},xl={class:"attr-box"},Vl=c(()=>l("div",null,"修改列宽：",-1)),bl={key:2},kl={class:"attr-box"},wl=c(()=>l("div",null,"占位文本：",-1)),$l={class:"attr-box"},Dl=c(()=>l("div",null,"默认内容：",-1)),Ul={class:"attr-box"},Cl=c(()=>l("div",null,"最大输入长度：",-1)),Pl={class:"attr-box"},Il=c(()=>l("div",null,"是否必选：",-1)),El={class:"attr-box"},Sl=c(()=>l("div",null,"空选提示文本：",-1)),Fl={class:"attr-box"},ql=c(()=>l("div",null,"添加其它验证规则：",-1)),Ml={class:"flex"},Ol={key:3},Tl={class:"attr-box"},Rl=c(()=>l("div",null,"占位文本：",-1)),Yl={class:"attr-box"},Ll=c(()=>l("div",null,"最小值：",-1)),Nl={class:"attr-box"},Xl=c(()=>l("div",null,"最大值：",-1)),zl={class:"attr-box"},Al=c(()=>l("div",null,"默认值：",-1)),Bl={class:"attr-box"},jl=c(()=>l("div",null,"是否必选：",-1)),Jl={class:"attr-box"},Hl=c(()=>l("div",null,"空选提示文本：",-1)),Wl={key:4},Gl={class:"attr-box"},Kl=c(()=>l("div",null,"默认选项：",-1)),Ql={class:"attr-box"},Zl=c(()=>l("div",null,"修改选项：",-1)),et={class:"attr-box"},lt=c(()=>l("div",null,"是否必选：",-1)),tt={class:"attr-box"},ot=c(()=>l("div",null,"空选提示文本：",-1)),at={key:5},nt={class:"attr-box"},st=c(()=>l("div",null,"最多可选个数：",-1)),dt={class:"attr-box"},it=c(()=>l("div",null,"默认选项：",-1)),rt={class:"attr-box"},ut=c(()=>l("div",null,"修改选项：",-1)),pt={class:"attr-box"},mt=c(()=>l("div",null,"是否必选：",-1)),vt={class:"attr-box"},ft=c(()=>l("div",null,"空选提示文本：",-1)),ct={key:6},gt={class:"attr-box"},yt=c(()=>l("div",null,"默认选项：",-1)),ht={class:"attr-box"},_t=c(()=>l("div",null,"修改选项：",-1)),xt={class:"attr-box"},Vt=c(()=>l("div",null,"是否必选：",-1)),bt={class:"attr-box"},kt=c(()=>l("div",null,"空选提示文本：",-1)),wt={key:7},$t={class:"attr-box"},Dt=c(()=>l("div",null,[le(" 获取数据地址： "),l("br"),l("small",null,"（请求不能有权限验证）")],-1)),Ut={class:"attr-box"},Ct=c(()=>l("div",null,"是否必选：",-1)),Pt={class:"attr-box"},It=c(()=>l("div",null,"空选提示文本：",-1)),Et={key:8},St={class:"attr-box"},Ft=c(()=>l("div",null,"是否必选：",-1)),qt={class:"attr-box"},Mt=c(()=>l("div",null,"空选提示文本：",-1)),Ot={class:"attr-box"},Tt=c(()=>l("div",null,"显示类型：",-1)),Rt={key:9},Yt={class:"attr-box"},Lt=c(()=>l("div",null,"是否必选：",-1)),Nt={class:"attr-box"},Xt=c(()=>l("div",null,"空选提示文本：",-1)),zt={key:10},At={class:"attr-box"},Bt=c(()=>l("div",null,"文本内容：",-1)),jt={key:11},Jt={class:"attr-box"},Ht=c(()=>l("div",null,"是否必选：",-1)),Wt={class:"attr-box"},Gt=c(()=>l("div",null,"空选提示文本：",-1)),Kt={class:"attr-box"},Qt=c(()=>l("div",null,"可添加图片个数：",-1)),Zt=pe({__name:"SytEditForm",props:{modelValue:{type:Array,default(){return[]}}},emits:["update:modelValue"],setup(g,{emit:oe}){const J=oe,W=g,_=I(),s=I([]),f=Ve(()=>W.modelValue);be(f,V=>{J("update:modelValue",V)},{deep:!0});const w=I(!1);let u=I(""),t=Ve(()=>u.value.split(".").reduce((V,n)=>V[n],f.value));s.value=[{field:"",type:"layout",label:"栅格布局",rules:[],cols:[{id:Date.now().toString(16)+Math.random().toString(16),span:12,children:[]},{id:Date.now().toString(16)+Math.random().toString(16),span:12,children:[]}]},{field:"",value:"",type:"input",label:"单行文本",placeholder:"占位文本",maxlength:20,rules:[{required:!0,message:"不能为空",trigger:"blur"}]},{field:"",value:"",type:"textarea",label:"多行文本",placeholder:"占位文本",maxlength:100,rules:[{required:!0,message:"不能为空",trigger:"blur"}]},{field:"",value:null,type:"number",label:"数字输入框",placeholder:"占位文本",min:0,max:1e4,rules:[{required:!0,message:"不能为空",trigger:"blur"}]},{field:"",value:"",type:"radio",label:"单选框",rules:[{required:!0,message:"不能为空",trigger:"change"}],options:[{label:"选项1"},{label:"选项2"}]},{field:"",value:[],type:"checkbox",label:"多选框",max:2,rules:[{required:!0,message:"不能为空",trigger:"change"}],options:[{label:"选项1"},{label:"选项2"},{label:"选项3"},{label:"选项4"}]},{field:"",value:"",type:"select",label:"下拉框",placeholder:"占位文本",rules:[{required:!0,message:"不能为空",trigger:"change"}],options:[{label:"选项1"},{label:"选项2"}]},{field:"",value:[],type:"cascader",label:"级联选择器",rules:[{required:!0,message:"不能为空",trigger:["change","blur"]}],url:"http://localhost:8080/examples/getDepartmentPersonnel",options:[]},{field:"",value:"",type:"datePicker",label:"日期选择器",placeholder:"选择日期",dateType:"datetime",rules:[{required:!0,message:"不能为空",trigger:["change"]}]},{field:"",value:"",type:"timePicker",label:"时间选择器",rules:[{required:!0,message:"不能为空",trigger:["change","blur"]}]},{field:"",value:"文本内容",type:"text",label:"文字",rules:[{required:!1}]},{field:"",value:[],type:"img-upload",label:"上传图片",action:"",limit:2,rules:[{required:!0,message:"不能为空",trigger:["blur","change"]}]}];const x=ze({select:{},rules:[{label:"无规则",value:{type:"string",pattern:"",message:""}},{label:"手机号",value:{type:"string",pattern:"^1[3456789]{1}\\d{9}$",message:"请输入正确手机号"}},{label:"邮箱",value:{type:"email",message:"请输入正确邮箱"}}]}),$=V=>{const n=s.value[V.target.dataset.index];n.field=Date.now().toString(16),V.dataTransfer.setData("text/plain","copy"+JSON.stringify(n))},O=V=>{V.dataTransfer.setData("text/plain","move"+V.target.dataset.index)},G=V=>{V.preventDefault()},ae=V=>{V.preventDefault(),V.stopPropagation(),u.value="";const n=V.dataTransfer.getData("text/plain").match(/^(\w{4})(.*?)$/),Z=n[1],R=n[2];let D=f.value,b=f.value,C=V.currentTarget.dataset.index,Y,U=D.length;if(/^-?\d+$/.test(C))C=parseInt(C);else{let T=C.match(/^(\d+)\.cols\.(\d+)(\.children\.(\d+))?/);T&&(D=f.value[T[1]].cols[T[2]].children,C=D.length,T[4]&&(C=parseInt(T[4])))}let X=R.match(/^(\d+)\.cols\.(\d+)\.children\.(\d+)/);if(X?(b=f.value[X[1]].cols[X[2]].children,Y=X[3]):Y=R,Z=="copy"){if(C!==-1){const i=V.offsetY,P=parseInt(getComputedStyle(V.target,null).getPropertyValue("height"))/2;i<=P?U=C:U=C+1}const T=JSON.parse(R);D.splice(U,0,T)}if(Z=="move"){let T,i;const P=V.offsetY,A=parseInt(getComputedStyle(V.target,null).getPropertyValue("height"))/2;P<=A?U=C:U=C+1,C!==-1&&U<D.length?(T=D.find((k,S)=>S===U),i=b.splice(Y,1)[0],U=D.findIndex(k=>k.field===T.field),U==-1&&(U=D.length)):(i=b.splice(Y,1)[0],U=D.length),D.splice(U,0,i)}},Q=V=>{/^-?\d+$/.test(V)&&f.value.splice(V,1);let n=V.match(/^(\d+)\.cols\.(\d+)\.children\.(\d+)/);n&&f.value[n[1]].cols[n[2]].children.splice(parseInt(n[3]),1),u.value=""},se=()=>{t.value.options.push({label:"选项"+(t.value.options.length+1)}),t.value.value=[]};return(V,n)=>{const Z=Ee,R=ke,D=Ye,b=De,C=Fe,Y=al,U=Oe,X=Te,T=qe,i=Me,P=Se,A=nl;return d(),p(E,null,[r(P,{class:"h-full"},{default:y(()=>[r(Z,{class:"items-data",span:3},{default:y(()=>[ml,(d(!0),p(E,null,q(s.value,(k,S)=>(d(),p("div",{key:k.type,class:"drag-el",draggable:"true","data-index":S,onDragstart:n[0]||(n[0]=L=>$(L))},ee(k.label),41,vl))),128))]),_:1}),r(Z,{span:15},{default:y(()=>[r(R,{type:"info",plain:"",onClick:n[1]||(n[1]=k=>w.value=!0)},{default:y(()=>[le(" 预览 ")]),_:1}),r(D,{ref_key:"ruleFormRef",ref:_,class:"form-container","data-index":"-1",model:f.value,"inline-message":!0,onDrop:n[6]||(n[6]=k=>ae(k)),onDragover:n[7]||(n[7]=k=>G(k))},{default:y(()=>[(d(!0),p(E,null,q(f.value,(k,S)=>(d(),M(il,{key:k.field,modelValue:f.value[S],"onUpdate:modelValue":L=>f.value[S]=L,index:S.toString(),"active-index":e(u),"rule-form-ref":_.value,onCascaderFetch:L=>k.options=L,onToggle:n[2]||(n[2]=L=>Ie(u)?u.value=L:u=L),onDrop:n[3]||(n[3]=L=>ae(L)),onDragstart:n[4]||(n[4]=L=>O(L)),onRemoveItem:n[5]||(n[5]=L=>Q(L))},null,8,["modelValue","onUpdate:modelValue","index","active-index","rule-form-ref","onCascaderFetch"]))),128))]),_:1},8,["model"])]),_:1}),r(Z,{span:5,offset:1},{default:y(()=>{var k,S,L,ve,fe,ce,ge,ye,he,m,v,a;return[fl,e(t)&&e(t).type!="layout"?(d(),p(E,{key:0},[l("div",cl,[gl,r(b,{modelValue:e(t).field,"onUpdate:modelValue":n[8]||(n[8]=o=>e(t).field=o)},null,8,["modelValue"])]),l("div",yl,[hl,r(b,{modelValue:e(t).label,"onUpdate:modelValue":n[9]||(n[9]=o=>e(t).label=o)},null,8,["modelValue"])])],64)):h("",!0),((k=e(t))==null?void 0:k.type)==="layout"?(d(),p("div",_l,[l("div",xl,[Vl,(d(!0),p(E,null,q(e(t).cols,(o,N)=>(d(),p("div",{key:o,class:"flex"},[r(C,{modelValue:o.span,"onUpdate:modelValue":z=>o.span=z,min:0,max:24},null,8,["modelValue","onUpdate:modelValue"]),r(R,{type:"danger",icon:"Delete",circle:"",onClick:z=>e(t).cols.splice(N,1)},null,8,["onClick"])]))),128)),r(R,{onClick:n[10]||(n[10]=o=>e(t).cols.push({id:Date.now().toString(16)+Math.random().toString(16),span:12,children:[]}))},{default:y(()=>[le(" 添加列 ")]),_:1})])])):h("",!0),((S=e(t))==null?void 0:S.type)==="input"||((L=e(t))==null?void 0:L.type)==="textarea"?(d(),p("div",bl,[l("div",kl,[wl,r(b,{modelValue:e(t).placeholder,"onUpdate:modelValue":n[11]||(n[11]=o=>e(t).placeholder=o)},null,8,["modelValue"])]),l("div",$l,[Dl,r(b,{modelValue:e(t).value,"onUpdate:modelValue":n[12]||(n[12]=o=>e(t).value=o),autosize:"",type:"textarea"},null,8,["modelValue"])]),l("div",Ul,[Cl,r(C,{modelValue:e(t).maxlength,"onUpdate:modelValue":n[13]||(n[13]=o=>e(t).maxlength=o),min:0},null,8,["modelValue"])]),l("div",Pl,[Il,r(Y,{modelValue:e(t).rules[0].required,"onUpdate:modelValue":n[14]||(n[14]=o=>e(t).rules[0].required=o)},null,8,["modelValue"])]),l("div",El,[Sl,r(b,{modelValue:e(t).rules[0].message,"onUpdate:modelValue":n[15]||(n[15]=o=>e(t).rules[0].message=o)},null,8,["modelValue"])]),l("div",Fl,[ql,l("div",Ml,[r(X,{modelValue:x.select,"onUpdate:modelValue":n[16]||(n[16]=o=>x.select=o),"value-key":"value",placeholder:"选择规则",size:"large",onChange:n[17]||(n[17]=o=>e(t).rules[1]=o.value)},{default:y(()=>[(d(!0),p(E,null,q(x.rules,o=>(d(),M(U,{key:o.label,label:o.label,value:o},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])])])):h("",!0),((ve=e(t))==null?void 0:ve.type)==="number"?(d(),p("div",Ol,[l("div",Tl,[Rl,r(b,{modelValue:e(t).placeholder,"onUpdate:modelValue":n[18]||(n[18]=o=>e(t).placeholder=o)},null,8,["modelValue"])]),l("div",Yl,[Ll,r(C,{modelValue:e(t).min,"onUpdate:modelValue":n[19]||(n[19]=o=>e(t).min=o)},null,8,["modelValue"])]),l("div",Nl,[Xl,r(C,{modelValue:e(t).max,"onUpdate:modelValue":n[20]||(n[20]=o=>e(t).max=o)},null,8,["modelValue"])]),l("div",zl,[Al,r(C,{modelValue:e(t).value,"onUpdate:modelValue":n[21]||(n[21]=o=>e(t).value=o),min:e(t).min,max:e(t).max},null,8,["modelValue","min","max"])]),l("div",Bl,[jl,r(Y,{modelValue:e(t).rules[0].required,"onUpdate:modelValue":n[22]||(n[22]=o=>e(t).rules[0].required=o)},null,8,["modelValue"])]),l("div",Jl,[Hl,r(b,{modelValue:e(t).rules[0].message,"onUpdate:modelValue":n[23]||(n[23]=o=>e(t).rules[0].message=o)},null,8,["modelValue"])])])):h("",!0),((fe=e(t))==null?void 0:fe.type)==="radio"?(d(),p("div",Wl,[l("div",Gl,[Kl,r(b,{modelValue:e(t).value,"onUpdate:modelValue":n[24]||(n[24]=o=>e(t).value=o)},null,8,["modelValue"])]),l("div",Ql,[Zl,(d(!0),p(E,null,q(e(t).options,(o,N)=>(d(),p("div",{key:o.value,class:"flex"},[r(b,{modelValue:o.label,"onUpdate:modelValue":z=>o.label=z},null,8,["modelValue","onUpdate:modelValue"]),r(R,{type:"danger",icon:"Delete",circle:"",onClick:z=>e(t).options.splice(N,1)},null,8,["onClick"])]))),128)),r(R,{onClick:n[25]||(n[25]=o=>e(t).options.push({label:"选项"+(e(t).options.length+1)}))},{default:y(()=>[le(" 添加选项 ")]),_:1}),l("div",et,[lt,r(Y,{modelValue:e(t).rules[0].required,"onUpdate:modelValue":n[26]||(n[26]=o=>e(t).rules[0].required=o)},null,8,["modelValue"])]),l("div",tt,[ot,r(b,{modelValue:e(t).rules[0].message,"onUpdate:modelValue":n[27]||(n[27]=o=>e(t).rules[0].message=o)},null,8,["modelValue"])])])])):h("",!0),((ce=e(t))==null?void 0:ce.type)==="checkbox"?(d(),p("div",at,[l("div",nt,[st,r(C,{modelValue:e(t).max,"onUpdate:modelValue":n[28]||(n[28]=o=>e(t).max=o),min:2},null,8,["modelValue"])]),l("div",dt,[it,l("span",null,ee(e(t).value),1)]),l("div",rt,[ut,(d(!0),p(E,null,q(e(t).options,(o,N)=>(d(),p("div",{key:o.value,class:"flex"},[r(b,{modelValue:o.label,"onUpdate:modelValue":z=>o.label=z,onChange:n[29]||(n[29]=z=>e(t).value=[])},null,8,["modelValue","onUpdate:modelValue"]),r(R,{type:"danger",icon:"Delete",circle:"",onClick:z=>e(t).options.splice(N,1)},null,8,["onClick"])]))),128)),r(R,{onClick:se},{default:y(()=>[le("添加选项")]),_:1})]),l("div",pt,[mt,r(Y,{modelValue:e(t).rules[0].required,"onUpdate:modelValue":n[30]||(n[30]=o=>e(t).rules[0].required=o)},null,8,["modelValue"])]),l("div",vt,[ft,r(b,{modelValue:e(t).rules[0].message,"onUpdate:modelValue":n[31]||(n[31]=o=>e(t).rules[0].message=o)},null,8,["modelValue"])])])):h("",!0),((ge=e(t))==null?void 0:ge.type)==="select"?(d(),p("div",ct,[l("div",gt,[yt,r(b,{modelValue:e(t).value,"onUpdate:modelValue":n[32]||(n[32]=o=>e(t).value=o)},null,8,["modelValue"])]),l("div",ht,[_t,(d(!0),p(E,null,q(e(t).options,(o,N)=>(d(),p("div",{key:o.value,class:"flex"},[r(b,{modelValue:o.label,"onUpdate:modelValue":z=>o.label=z},null,8,["modelValue","onUpdate:modelValue"]),r(R,{type:"danger",icon:"Delete",circle:"",onClick:z=>e(t).options.splice(N,1)},null,8,["onClick"])]))),128)),r(R,{onClick:n[33]||(n[33]=o=>e(t).options.push({label:"选项"+(e(t).options.length+1)}))},{default:y(()=>[le(" 添加选项 ")]),_:1})]),l("div",xt,[Vt,r(Y,{modelValue:e(t).rules[0].required,"onUpdate:modelValue":n[34]||(n[34]=o=>e(t).rules[0].required=o)},null,8,["modelValue"])]),l("div",bt,[kt,r(b,{modelValue:e(t).rules[0].message,"onUpdate:modelValue":n[35]||(n[35]=o=>e(t).rules[0].message=o)},null,8,["modelValue"])])])):h("",!0),((ye=e(t))==null?void 0:ye.type)==="cascader"?(d(),p("div",wt,[l("div",$t,[Dt,r(b,{modelValue:e(t).url,"onUpdate:modelValue":n[36]||(n[36]=o=>e(t).url=o)},null,8,["modelValue"])]),l("div",Ut,[Ct,r(Y,{modelValue:e(t).rules[0].required,"onUpdate:modelValue":n[37]||(n[37]=o=>e(t).rules[0].required=o)},null,8,["modelValue"])]),l("div",Pt,[It,r(b,{modelValue:e(t).rules[0].message,"onUpdate:modelValue":n[38]||(n[38]=o=>e(t).rules[0].message=o)},null,8,["modelValue"])])])):h("",!0),((he=e(t))==null?void 0:he.type)==="datePicker"?(d(),p("div",Et,[l("div",St,[Ft,r(Y,{modelValue:e(t).rules[0].required,"onUpdate:modelValue":n[39]||(n[39]=o=>e(t).rules[0].required=o)},null,8,["modelValue"])]),l("div",qt,[Mt,r(b,{modelValue:e(t).rules[0].message,"onUpdate:modelValue":n[40]||(n[40]=o=>e(t).rules[0].message=o)},null,8,["modelValue"])]),l("div",Ot,[Tt,r(i,{modelValue:e(t).dateType,"onUpdate:modelValue":n[41]||(n[41]=o=>e(t).dateType=o)},{default:y(()=>[r(T,{value:"date"},{default:y(()=>[le("日期")]),_:1}),r(T,{value:"datetime"},{default:y(()=>[le("日期和时间")]),_:1})]),_:1},8,["modelValue"])])])):h("",!0),((m=e(t))==null?void 0:m.type)==="timePicker"?(d(),p("div",Rt,[l("div",Yt,[Lt,r(Y,{modelValue:e(t).rules[0].required,"onUpdate:modelValue":n[42]||(n[42]=o=>e(t).rules[0].required=o)},null,8,["modelValue"])]),l("div",Nt,[Xt,r(b,{modelValue:e(t).rules[0].message,"onUpdate:modelValue":n[43]||(n[43]=o=>e(t).rules[0].message=o)},null,8,["modelValue"])])])):h("",!0),((v=e(t))==null?void 0:v.type)==="text"?(d(),p("div",zt,[l("div",At,[Bt,r(b,{modelValue:e(t).value,"onUpdate:modelValue":n[44]||(n[44]=o=>e(t).value=o),type:"textarea",autosize:""},null,8,["modelValue"])])])):h("",!0),((a=e(t))==null?void 0:a.type)==="img-upload"?(d(),p("div",jt,[l("div",Jt,[Ht,r(Y,{modelValue:e(t).rules[0].required,"onUpdate:modelValue":n[45]||(n[45]=o=>e(t).rules[0].required=o)},null,8,["modelValue"])]),l("div",Wt,[Gt,r(b,{modelValue:e(t).rules[0].message,"onUpdate:modelValue":n[46]||(n[46]=o=>e(t).rules[0].message=o)},null,8,["modelValue"])]),l("div",Kt,[Qt,r(C,{modelValue:e(t).limit,"onUpdate:modelValue":n[47]||(n[47]=o=>e(t).limit=o),min:1},null,8,["modelValue"])])])):h("",!0)]}),_:1})]),_:1}),r(A,{modelValue:w.value,"onUpdate:modelValue":n[48]||(n[48]=k=>w.value=k)},{default:y(()=>[r(pl,{data:f.value},null,8,["data"])]),_:1},8,["modelValue"])],64)}}}),eo=me(Zt,[["__scopeId","data-v-bee0adc9"]]),K=g=>(we("data-v-d0e66ecc"),g=g(),$e(),g),lo=K(()=>l("svg",{class:"background",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},[l("defs",null,[l("pattern",{id:"svg-bg-grid",patternUnits:"userSpaceOnUse",x:"0",y:"0",width:"10",height:"10"},[l("path",{d:"M 10 0 H0 M0 0 V0 10",stroke:"#DCDCDC","stroke-width":"1",opacity:"1"})])]),l("g",null,[l("rect",{width:"100%",height:"100%",fill:"url(#svg-bg-grid)"})])],-1)),to=["height"],oo=["transform","onPointerdown"],ao=["d","stroke","fill"],no=["x","y"],so=K(()=>l("defs",null,[l("marker",{id:"svg-line-triangle",viewBox:"0 0 10 10",refX:"1",refY:"5",markerUnits:"userSpaceOnUse",markerWidth:"10",markerHeight:"10",orient:"auto"},[l("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#000"})])],-1)),io=["transform"],ro=["data-id"],uo=["points"],po=["points"],mo=["x","y"],vo=["data-id","transform"],fo=["d","stroke","fill"],co=["x","y"],go=["x","y"],yo=["x","y"],ho=["cx","cy","onPointerdown","onPointerup"],_o=["x1","y1","x2","y2"],xo={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",style:{width:"100%",height:"100%"}},Vo=K(()=>l("path",{d:"M 0 0 L 1000 1000 M 1000 0 L 0 1000","stroke-width":"100",stroke:"#123456"},null,-1)),bo=[Vo],ko=K(()=>l("strong",null,"编辑",-1)),wo=[ko],$o=K(()=>l("span",{class:"dialog-span"},"节点文本",-1)),Do=K(()=>l("span",null,"：",-1)),Uo={key:0},Co=K(()=>l("span",{class:"dialog-span"},"执行人",-1)),Po=K(()=>l("span",null,"：",-1)),Io=["label"],Eo=["value"],So={key:1},Fo=K(()=>l("span",{class:"dialog-span"},"条件",-1)),qo=K(()=>l("span",null,"：",-1)),Mo=K(()=>l("option",{disabled:"",value:""},"表单项",-1)),Oo=["value"],To=K(()=>l("option",{disabled:"",value:""},"比较",-1)),Ro=["value"],Yo=K(()=>l("option",{disabled:"",value:""},"选项",-1)),Lo=pe({__name:"SytFlow",props:{modelValue:{type:Object,default(){return{nodesData:[],linesData:[]}}},flowHandleOptions:Array,flowConditionOptions:Array},emits:["update:modelValue"],setup(g,{emit:oe}){const J=g,W=oe;let _=I([{id:"",type:"start",x:0,y:0,width:120,height:60,text:"开始",path:"M 30 0 h 60 a 30 30 0 0 1 30 30 a 30 30 0 0 1 -30 30 h -60 a 30 30 0 0 1 -30 -30 a 30 30 0 0 1 30 -30",fill:"#fff",stroke:"#123456"},{id:"",type:"handle",x:0,y:0,width:120,height:60,text:"处理",path:"M 5 0 h 110 a 5 5 0 0 1 5 5 v 50 a 5 5 0 0 1 -5 5 h -110 a 5 5 0 0 1 -5 -5 v -50 a 5 5 0 0 1 5 -5",fill:"#fff",stroke:"#123456",properties:{label:"",value:""}},{id:"",type:"condition",x:0,y:0,width:120,height:80,text:"条件",path:"M 60 0 L 120 40 L 60 80 L 0 40 z",fill:"#fff",stroke:"#123456",properties:{field:"",label:"",type:"",comparison:"",value:""}},{id:"",type:"end",x:0,y:0,width:120,height:60,text:"结束",path:"M 30 0 h 60 a 30 30 0 0 1 30 30 a 30 30 0 0 1 -30 30 h -60 a 30 30 0 0 1 -30 -30 a 30 30 0 0 1 30 -30",fill:"#fff",stroke:"#123456"}]),s=Ve(()=>J.modelValue);be(s,m=>W("update:modelValue",m),{deep:!0});let f=I({x:0,y:0}),w=()=>{f.value={x:0,y:0}},u=I({x:0,y:0}),t=I(!1);const x=(m,v)=>{$.value.x=m.screenX,$.value.y=m.screenY;let a=JSON.parse(JSON.stringify(_.value.find(o=>o.type==v)));a.id=Date.now().toString(16)+Math.random().toString(16),a.x=Math.round(m.offsetX/10)*10-u.value.x,a.y=Math.round(m.offsetY/10)*10-u.value.y,s.value.nodesData.push(a),f.value=a};let $=I({x:0,y:0});const O=m=>{t.value=!0,$.value.x=m.screenX,$.value.y=m.screenY,m.target.dataset.id==="body"?f.value=u.value:f.value=s.value.nodesData.find(v=>v.id===m.currentTarget.dataset.id)??f.value},G=m=>{let v=m.screenX-$.value.x,a=m.screenY-$.value.y;Math.abs(v)>=10&&(f.value.x+=parseInt(v/10)*10,$.value.x=m.screenX-v%10),Math.abs(a)>=10&&(f.value.y+=parseInt(a/10)*10,$.value.y=m.screenY-a%10),s.value.linesData.forEach(o=>Q(o)),C(m)},ae=()=>{w(),Y(),A.value=!1},Q=m=>{let v=s.value.nodesData.find(o=>o.id===m.fromId),a=s.value.nodesData.find(o=>o.id===m.toId);if(v===a)return!1;if(v&&a){let o=v.x+v.width/2,N=v.y+v.height/2,z=a.x+a.width/2,de=a.y+a.height/2,F=z,B=de,_e=o,re=N,H=o,te=de,ue=!1;for(let j of s.value.nodesData){if(o>=j.x&&o<=j.x+j.width&&N<=j.y&&B>=j.y+j.height){ue="vertical";break}if(N>=j.y&&N<=j.y+j.height&&o<=j.x&&F>=j.x+j.width){ue="horizontal";break}}ue?(ue=="vertical"&&(H=_e=_e+Math.abs(N)/4+100,H<F&&H-F<-(a.width/2+10)?F-=a.width/2+10:H>F&&H-F>a.width/2+10?F+=a.width/2+10:(N<de?B=de-a.height/2-10:B=de+a.height/2+10,te=re,F=H)),ue=="horizontal"&&(H=F,te=re=re+Math.abs(o)/4+100,te<B&&te-B<-(a.height/2+10)?B-=a.height/2+10:te>B&&te-B>a.height/2+10?B+=a.height/2+10:(o<z?F=z-a.width/2-10:F=z+a.width/2+10,H=_e,B=te))):H<F&&H-F<-(a.width/2+10)?F=F-a.width/2-10:H>F&&H-F>a.width/2+10?F=F+a.width/2+10:(N<de?B=de-a.height/2-10:B=de+a.height/2+10,te=re=(N+B)/2,F=o);let Le=`${o} ${N},
    ${_e} ${re},
    ${H} ${te},
    ${F} ${B}`;m.points=Le,m.textCoord={x:(H+F)/2,y:(te+B)/2},s.value.linesData.find(j=>j.fromId==m.fromId&&j.toId==m.toId)||(m.id=Date.now().toString(16)+Math.random().toString(16),s.value.linesData.push(m))}};let se=I({id:"",type:"line",fromId:"",toId:"",points:"",textCoord:{x:0,y:0},text:""});const V=()=>{se.value={id:"",type:"line",fromId:"",toId:"",points:"",textCoord:{x:0,y:0},text:""}},n=m=>{let v=s.value.nodesData.find(a=>a.id==m);b(v),se.value.fromId=m},Z=m=>{se.value.toId=m,Q(se.value),Y(),w()};let R=I(null),D=I({fromPoint:{x:0,y:0},toPoint:{x:0,y:0}});const b=m=>{D.value.fromPoint.x=D.value.toPoint.x=m.x+m.width/2,D.value.fromPoint.y=D.value.toPoint.y=m.y+m.height/2,R.value.style.display="block"},C=m=>{D.value.toPoint.x=m.offsetX-u.value.x,D.value.toPoint.y=m.offsetY-u.value.y},Y=()=>{R.value.style.display="none",D.value={fromPoint:{x:0,y:0},toPoint:{x:0,y:0}},V()};let U=I(null),X=I(null),T=I(!1),i=I(null),P=I(),A=I(!1),k=I({x:0,y:0});const S=(m,v)=>{v==="node"&&(U.value.style.display="block",X.value=s.value.nodesData.find(a=>a.id===m.currentTarget.dataset.id),i.value=X.value),v==="line"&&(U.value.style.display="block",X.value=s.value.linesData.find(a=>a.id===m.currentTarget.dataset.id),i.value=X.value)},L=m=>{T.value=!1,U.value.style.left=`${m.offsetX}px`,U.value.style.top=`${m.offsetY}px`},ve=()=>{X.value=null,U.value.style.display="none"},fe=()=>{s.value.nodesData=s.value.nodesData.filter(m=>m.id!==X.value.id),s.value.linesData=s.value.linesData.filter(m=>m.id!==X.value.id&&m.fromId!==X.value.id&&m.toId!==X.value.id)},ce=()=>{i.value=null,T.value=!1},ge=()=>{T.value=!0,Ae(()=>{P.value.style.left=U.value.style.left,P.value.style.top=U.value.style.top})},ye=m=>{A.value=!0,k.value.x=m.pageX-P.value.offsetLeft,k.value.y=m.pageY-P.value.offsetTop},he=m=>{A.value&&(P.value.style.left=m.pageX-k.value.x+"px",P.value.style.top=m.pageY-k.value.y+"px")};return(m,v)=>(d(),p("div",{class:"flow-container",onPointerup:v[15]||(v[15]=a=>ae()),onPointerleave:v[16]||(v[16]=a=>ae()),onContextmenu:ne(L,["prevent"]),onPointerdown:ve,onPointermove:v[17]||(v[17]=a=>he(a))},[lo,(d(),p("svg",{class:"panel",width:"90",height:e(_).length*55,xmlns:"http://www.w3.org/2000/svg"},[(d(!0),p(E,null,q(e(_),(a,o)=>(d(),p("g",{class:"cursor-pointer",key:a.type,transform:`translate(9, ${55*o+10}) scale(.6)`,onPointerdown:N=>x(N,a.type)},[l("path",{d:a.path,stroke:a.stroke,fill:a.fill,"stroke-width":"2"},null,8,ao),l("text",{x:a.width/2,y:a.height/2,"font-size":"25","text-anchor":"middle","dominant-baseline":"central","user-select":"none"},ee(a.text),9,no)],40,oo))),128))],8,to)),(d(),p("svg",{class:Pe(["draw",{"cursor-grabbing":e(t)}]),xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%","data-id":"body",onPointerdown:v[3]||(v[3]=a=>O(a)),onPointermove:v[4]||(v[4]=a=>G(a)),onPointerup:v[5]||(v[5]=a=>Ie(t)?t.value=!1:t=!1)},[so,l("g",{transform:`translate(${e(u).x}, ${e(u).y})`},[(d(!0),p(E,null,q(e(s).linesData,a=>(d(),p("g",{class:"cursor-auto",key:a.path,"data-id":a.id,onContextmenu:v[0]||(v[0]=o=>S(o,"line"))},[l("polyline",{fill:"none",stroke:"transparent",points:a.points,"stroke-width":"20"},null,8,uo),l("polyline",{fill:"none",stroke:"black",points:a.points,"stroke-width":"1","marker-end":"url(#svg-line-triangle)"},null,8,po),l("text",{x:a.textCoord.x,y:a.textCoord.y,"text-anchor":"middle"},ee(a.text),9,mo)],40,ro))),128)),(d(!0),p(E,null,q(e(s).linesData,a=>(d(),p("g",{key:a.id}))),128)),(d(!0),p(E,null,q(e(s).nodesData,a=>(d(),p("g",{class:"node cursor-move",key:a.id,style:{filter:"drop-shadow(0 0 12px rgba(0, 0, 100, 0.12))"},"data-id":a.id,transform:`translate(${a.x}, ${a.y})`,onPointerdown:v[1]||(v[1]=ne(o=>O(o),["stop"])),onContextmenu:v[2]||(v[2]=o=>S(o,"node"))},[l("path",{d:a.path,stroke:a.stroke,fill:a.fill,"stroke-opacity":"0.2","stroke-width":"2"},null,8,fo),l("text",{x:a.width/2,y:a.height/2,"text-anchor":"middle","dominant-baseline":"central"},ee(a.text),9,co),a.type=="handle"?(d(),p("text",{key:0,x:a.width/2,y:a.height/2+25,"text-anchor":"middle"},ee(a.properties.label),9,go)):h("",!0),a.type=="condition"?(d(),p("text",{key:1,x:a.width/2,y:a.height/2+25,"text-anchor":"middle",fill:"#000","stroke-width":"0.1",stroke:"#fff"},ee(a.properties.label+a.properties.comparison+a.properties.value),9,yo)):h("",!0),l("circle",{class:"anchor cursor-pointer",cx:a.width/2,cy:a.height/2,r:"6",fill:"#fff",stroke:"#000","stroke-width":"3",opacity:"0.5",display:"none",onPointerdown:ne(o=>n(a.id),["stop"]),onPointerup:ne(o=>Z(a.id),["stop"])},null,40,ho)],40,vo))),128)),l("line",{ref_key:"dragLineRef",ref:R,x1:e(D).fromPoint.x,y1:e(D).fromPoint.y,x2:e(D).toPoint.x,y2:e(D).toPoint.y,"stroke-dasharray":"3 2",stroke:"#000",display:"none","pointer-events":"none"},null,8,_o)],8,io)],34)),l("div",{ref_key:"contextmenuRef",ref:U,class:"menu"},[l("div",{class:"menu-item",onPointerdown:ge},"编辑",32),l("div",{class:"menu-item",onPointerdown:fe},"删除",32)],512),e(T)?(d(),p("div",{key:0,ref_key:"dialogRef",ref:P,class:"dialog",onContextmenu:v[14]||(v[14]=ne(()=>{},["stop","prevent"]))},[l("div",{class:"close-dialog cursor-pointer",onPointerdown:ne(ce,["stop"])},[(d(),p("svg",xo,bo))],32),l("div",{class:"dialog-drag cursor-move",onPointerdown:v[6]||(v[6]=ne(a=>ye(a),["stop"]))},wo,32),l("div",null,[$o,Do,ie(l("input",{"onUpdate:modelValue":v[7]||(v[7]=a=>e(i).text=a)},null,512),[[Ce,e(i).text]])]),l("div",null,[e(i).type=="handle"?(d(),p("div",Uo,[Co,Po,ie(l("select",{"onUpdate:modelValue":v[8]||(v[8]=a=>e(i).properties=a)},[(d(!0),p(E,null,q(g.flowHandleOptions,a=>(d(),p("optgroup",{key:a.value,label:a.label},[(d(!0),p(E,null,q(a.children,o=>(d(),p("option",{key:o.value,value:o},ee(o.label),9,Eo))),128))],8,Io))),128))],512),[[xe,e(i).properties]])])):h("",!0),e(i).type=="condition"?(d(),p("div",So,[Fo,qo,ie(l("select",{"onUpdate:modelValue":v[9]||(v[9]=a=>e(i).properties.field=a),onChange:v[10]||(v[10]=a=>Object.assign(e(i).properties,g.flowConditionOptions.find(o=>o.field==a.target.value)))},[Mo,(d(!0),p(E,null,q(g.flowConditionOptions,a=>(d(),p("option",{key:a.filed,value:a.field},ee(a.label),9,Oo))),128))],544),[[xe,e(i).properties.field]]),ie(l("select",{"onUpdate:modelValue":v[11]||(v[11]=a=>e(i).properties.comparison=a),style:{width:"58px"}},[To,(d(),p(E,null,q(["小于","等于","大于"],a=>l("option",{key:a,value:a},ee(a),9,Ro)),64))],512),[[xe,e(i).properties.comparison]]),e(i).properties.type=="number"?ie((d(),p("input",{key:0,type:"number","onUpdate:modelValue":v[12]||(v[12]=a=>e(i).properties.value=a)},null,512)),[[Ce,e(i).properties.value]]):h("",!0),e(i).properties.type=="radio"?ie((d(),p("select",{key:1,"onUpdate:modelValue":v[13]||(v[13]=a=>e(i).properties.value=a)},[Yo,(d(!0),p(E,null,q(e(i).properties.options,a=>(d(),p("option",{key:a.value},ee(a.label),1))),128))],512)),[[xe,e(i).properties.value]]):h("",!0)])):h("",!0)])],544)):h("",!0)],32))}}),No=me(Lo,[["__scopeId","data-v-d0e66ecc"]]),Xo=g=>(we("data-v-dc5c9ca9"),g=g(),$e(),g),zo={class:"h-full"},Ao={class:"flex"},Bo=Xo(()=>l("span",null,"模板名称：",-1)),jo=pe({__name:"EditTemplate",props:{modelValue:{type:Object,default(){return{name:"",formData:[],flowData:{nodesData:[],linesData:[]}}}}},emits:["update:modelValue","submit"],setup(g,{emit:oe}){const J=g,W=oe;let _=Ve(()=>J.modelValue);be(_,t=>{W("update:modelValue",t),u()},{deep:!0});const s=async()=>{if(!_.value.name)return Be.error("模板名不能为空"),!1;_.value._id?await Ze(_.value):await Qe(_.value),W("submit")};let f=I([]);Ke().then(t=>{f.value=t.data,f.value.unshift({value:"不固定",label:"不固定",children:[{value:"部门主管",label:"部门主管"}]})});let w=I([]);const u=()=>{let t=["number","radio"],x=[];_.value.formData.forEach($=>{$.type==="layout"?$.cols.forEach(O=>{O.children.forEach(G=>{t.includes($.type)&&x.push(G)})}):t.includes($.type)&&x.push($)}),w.value=x};return(t,x)=>{const $=De,O=Ge,G=ke,ae=We;return d(),p("div",zo,[r(ae,{class:"w-full",direction:"vertical",fill:""},{default:y(()=>[r(O,null,{default:y(()=>[l("div",Ao,[Bo,r($,{modelValue:e(_).name,"onUpdate:modelValue":x[0]||(x[0]=Q=>e(_).name=Q)},null,8,["modelValue"])])]),_:1}),r(O,{header:"表单"},{default:y(()=>[r(eo,{modelValue:e(_).formData,"onUpdate:modelValue":x[1]||(x[1]=Q=>e(_).formData=Q)},null,8,["modelValue"])]),_:1}),r(O,{header:"流程"},{default:y(()=>[r(O,null,{default:y(()=>[r(No,{"flow-handle-options":e(f),"flow-condition-options":e(w),modelValue:e(_).flowData,"onUpdate:modelValue":x[2]||(x[2]=Q=>e(_).flowData=Q)},null,8,["flow-handle-options","flow-condition-options","modelValue"])]),_:1})]),_:1}),r(O,null,{default:y(()=>[r(G,{type:"primary",onClick:s},{default:y(()=>[le("保存模板")]),_:1})]),_:1})]),_:1})])}}}),Pa=me(jo,[["__scopeId","data-v-dc5c9ca9"]]);export{Pa as default};
