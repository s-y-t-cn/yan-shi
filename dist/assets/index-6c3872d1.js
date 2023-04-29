import{d as z,e as H,f as L}from"./user-5b6e7218.js";import{_ as G,d as J,m as K,r as F,o as O,x as P,c as a,a as t,t as d,u as o,b as c,w as _,i as W,e as h,E,f as C,g as l,F as S,h as V,y as p,p as X,l as Y,k as Z}from"./index-b9a3182b.js";import{c as ee}from"./index-20ac2abc.js";import"./index-571559b7.js";const v=f=>(X("data-v-514c7446"),f=f(),Y(),f),te={class:"box"},se={class:"left"},ue={class:"exam-title"},oe={class:"content-title"},ae={key:0},le={key:1},ne={key:0},ie={key:1},de={key:2},re={key:3},ce=v(()=>t("span",null,".",-1)),_e=v(()=>t("span",{style:{"font-size":"0.9rem","margin-right":"1rem"}},"请选择",-1)),he=h("A"),pe=h("B"),ve=h("C"),fe=h("D"),ye=v(()=>t("div",null,null,-1)),Fe={class:"right"},me={class:"right-1"},ge=v(()=>t("div",{class:"right-1-1"},"如未录像或人像显示不全，成绩作废",-1)),Ce={class:"right-2"},ke=v(()=>t("div",{class:"right-2-1"},"试卷详情",-1)),Ie={class:"right-2-2"},xe={class:"right-2-2"},Ae={class:"right-2-2"},Ee=v(()=>t("div",{class:"right-2-2"},"每道题："+d(1)+"分",-1)),Be={class:"right-2-2"},De={class:"right-3"},be={class:"right-2-1"},qe=h(" 剩余时间："),we={style:{"font-weight":"500",color:"red"}},Ne=h("交卷"),Se=J({props:["examId"],setup(f){const T=f,M=Z();K();let m=F(1e3),r=F({}),k=F([]);const B=F();let R=async()=>{await z({examId:T.examId}).then(e=>{e.code==200?(r.value=e.data,m.value=Number.isNaN(e.data.examDuration)?0:e.data.examDuration*60):E({type:"error",message:e.errMsg})}),H({ids:r.value.questionIds}).then(e=>{e.code==200&&(k.value=e.data.data)})},g=(e,s)=>{e.result??(e.result=new Set),e.questionType==1&&(e.result.clear(),e.result.add(s)),e.questionType==2&&(e.result.has(s)?e.result.delete(s):e.result.add(s))},y=F(!1),I=()=>{let e=[];k.value.reduce((s,n)=>(n.result?s.push([...n.result].sort((x,A)=>x-A).join()):s.push(""),s),e),L({questionIds:"23,24,25,32,34,36",userAnswers:e.join("-"),examId:r.value.examId,examQtId:r.value.examQtId,creditImgUrl:""}).then(s=>{s.code==200?(E({type:"success",message:"交卷成功"}),M.back()):E({type:"error",message:s.errMsg})})},$=e=>{let s=Math.floor(e/60),n=e%60;return`${s>0?s+"分":""}${n}秒`},U=setInterval(()=>{m.value>0?m.value--:y.value=!0},1e3);return O(()=>{ee(B.value).then(()=>{}),R()}),P(()=>{clearInterval(U)}),(e,s)=>{var D;const n=C("el-button"),x=C("el-scrollbar"),A=C("el-alert"),Q=C("el-dialog");return l(),a("div",te,[t("div",se,[t("div",ue,d(o(r).examName),1),c(x,{class:"content",height:"70vh"},{default:_(()=>[(l(!0),a(S,null,V(o(k),(u,j)=>{var b,q,w,N;return l(),a("div",{key:u.questionId,class:"content-item"},[t("div",oe,[t("span",null,d(j+1)+".",1),u.questionType==1?(l(),a("span",ae,"【单选题】")):p("",!0),u.questionType==2?(l(),a("span",le,"【多选题】")):p("",!0),t("span",null,d(u.questionContent),1)]),t("div",null,[(l(!0),a(S,null,V(u.answer,i=>(l(),a("div",{key:i.id,class:"answer-item"},[i.id==0?(l(),a("span",ne,"A")):p("",!0),i.id==1?(l(),a("span",ie,"B")):p("",!0),i.id==2?(l(),a("span",de,"C")):p("",!0),i.id==3?(l(),a("span",re,"D")):p("",!0),ce,h(" "+d(i.answer),1)]))),128))]),t("div",null,[_e,c(n,{circle:"",type:(b=u.result)!=null&&b.has(0)?"primary":"default",onClick:i=>o(g)(u,0)},{default:_(()=>[he]),_:2},1032,["type","onClick"]),c(n,{circle:"",type:(q=u.result)!=null&&q.has(1)?"primary":"default",onClick:i=>o(g)(u,1)},{default:_(()=>[pe]),_:2},1032,["type","onClick"]),c(n,{circle:"",type:(w=u.result)!=null&&w.has(2)?"primary":"default",onClick:i=>o(g)(u,2)},{default:_(()=>[ve]),_:2},1032,["type","onClick"]),c(n,{circle:"",type:(N=u.result)!=null&&N.has(3)?"primary":"default",onClick:i=>o(g)(u,3)},{default:_(()=>[fe]),_:2},1032,["type","onClick"])]),ye])}),128))]),_:1})]),t("div",Fe,[t("div",me,[ge,t("video",{ref_key:"videoRef",ref:B},null,512)]),t("div",Ce,[ke,t("div",Ie,"本卷共分为："+d((D=o(r).questionIds)==null?void 0:D.split(",").length)+"小题",1),t("div",xe,"作答时间："+d(o(r).examDuration)+"分钟",1),t("div",Ae,"试卷总分："+d(o(r).totalScore)+"分",1),Ee,t("div",Be,"及格分："+d(o(r).passScore)+"分",1)]),t("div",De,[t("div",be,[qe,t("span",we,d(o($)(o(m))),1)])]),t("div",{class:"right-button",onClick:s[0]||(s[0]=(...u)=>o(I)&&o(I)(...u))},"确认交卷")]),c(Q,{modelValue:o(y),"onUpdate:modelValue":s[1]||(s[1]=u=>W(y)?y.value=u:y=u),title:"考试提示",center:"",width:"15rem"},{footer:_(()=>[c(n,{type:"primary",onClick:o(I)},{default:_(()=>[Ne]),_:1},8,["onClick"])]),default:_(()=>[c(A,{title:"考试时间到了，请交卷！",type:"warning","show-icon":!0,closable:!1})]),_:1},8,["modelValue"])])}}}),$e=G(Se,[["__scopeId","data-v-514c7446"]]);export{$e as default};
