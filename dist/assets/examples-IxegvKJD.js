import{bO as t}from"./index-DIMNw_Zj.js";const r=e=>t({url:`/examples/findTables?${new URLSearchParams(e)}`,method:"GET"}),o=e=>t({url:"/examples/insertTables",method:"POST",data:e}),l=e=>t({url:"/examples/deleteTable",method:"POST",data:e}),s=e=>t({url:"/examples/postWorkflowTemplate",method:"POST",data:e}),m=()=>t({url:"/examples/getWorkflowTemplates",method:"GET"}),n=e=>t({url:`/examples/getWorkflowTemplateOne?${new URLSearchParams(e)}`,method:"GET"}),p=e=>t({url:"/examples/updateWorkflowTemplate",method:"POST",data:e}),u=e=>t({url:"/examples/deleteWorkflowTemplate",method:"POST",data:e}),T=e=>t({url:"/examples/postWorkflowData",method:"POST",data:e}),w=e=>t({url:`/examples/getWorkflowDatasBySubmit?${new URLSearchParams(e)}`,method:"GET"}),f=e=>t({url:`/examples/getWorkflowDatasByExamine?${new URLSearchParams(e)}`,method:"GET"}),d=e=>t({url:"/examples/workflowExamine",method:"POST",data:e});export{m as a,u as b,f as c,l as d,w as e,n as f,r as g,T as h,o as i,s as p,p as u,d as w};
