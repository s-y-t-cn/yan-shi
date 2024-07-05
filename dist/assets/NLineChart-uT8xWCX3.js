var y=Object.defineProperty;var x=(s,t,o)=>t in s?y(s,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[t]=o;var a=(s,t,o)=>x(s,typeof t!="symbol"?t+"":t,o);import{I as v,c as m,E as C,k as N}from"./PageEditor-C2VipOmv.js";import{i as w}from"./index-Cc46_B1g.js";import{E}from"./index-sCpGYuuU.js";import{au as p,d as l,r as V,o as I,M as e,O as L,ac as b}from"./index-3lwVo2y0.js";import"./el-card-DsiDhd6c.js";import"./plugin-vue_export-helper-CqGSI99y.js";import"./focus-trap-BjQrKON9.js";import"./typescript-gghwE45V.js";import"./index-DlwHQsx5.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./castArray-Br8Ioqbo.js";import"./index-yAYQ0nfy.js";import"./index-BbsUdgo6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-CmodV8F6.js";import"./vnode-mNfM4dg-.js";import"./scroll-BTBHWhC0.js";class G extends v{constructor(o){super(o);a(this,"isNLineChart",!0);a(this,"chartView",!0);this.path="./components/NLineChart/NLineChart.tsx",this.name="折线图";const u=this.props.style;this.props.style={width:"300px",height:"200px",flexShrink:"0",...u};const d=this.component;this.component=p(l(r=>{const i=V();let n=null,f={xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[150,230,224,218,135,147,260],type:"line"}]};return I(()=>{n=w(i.value),n.setOption(f)}),()=>e(d,null,{default:()=>[e("div",{ref:i,style:{width:"100%",height:"100%"}},null)]})},{name:"NLineChart"}));const h=this.view;this.view=p(l(r=>()=>e(h,null,{default:()=>[e(this.component,{style:{transform:"scale(0.35, 0.5)"}},null)]})));const c=this.params;this.params=p(l(()=>()=>e(c,null,{default:()=>[e("div",{class:m["params-item"]},[e(C,{class:m["params-item-label"],type:"info",truncated:!0},{default:()=>[L("abc")]}),e(E,{modelValue:this.props.placeholder,"onUpdate:modelValue":r=>this.props.placeholder=r,size:"small"},null)])]})))}toVue(){return`
<script setup>
import { ElInput } from 'element-plus'

const model = defineModel()
<\/script>
<template>
  <div class="node">
    <ElInput
      placeholder="${this.props.placeholder}"
      v-model="model"
    ></ElInput>
  </div>
</template>
<style scoped>
.node ${N(JSON.stringify(b(this.props.style),null,2).replaceAll('"',""))}
</style>
    `}}export{G as default};
