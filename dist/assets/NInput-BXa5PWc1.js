var h=Object.defineProperty;var f=(p,e,o)=>e in p?h(p,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):p[e]=o;var l=(p,e,o)=>f(p,typeof e!="symbol"?e+"":e,o);import{I,c as i,E as v,k as N}from"./PageEditor-C2VipOmv.js";import{E as m}from"./index-sCpGYuuU.js";import{au as r,d as a,M as t,O as V,ac as E}from"./index-3lwVo2y0.js";import"./el-card-DsiDhd6c.js";import"./plugin-vue_export-helper-CqGSI99y.js";import"./focus-trap-BjQrKON9.js";import"./typescript-gghwE45V.js";import"./index-DlwHQsx5.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./castArray-Br8Ioqbo.js";import"./index-yAYQ0nfy.js";import"./index-BbsUdgo6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-CmodV8F6.js";import"./vnode-mNfM4dg-.js";import"./scroll-BTBHWhC0.js";class P extends I{constructor(o){super(o);l(this,"isNInput",!0);l(this,"formView",!0);this.path="./components/NInput/NInput.tsx",this.name="输入框",this.props.value="",this.props.placeholder="输入框";const n=this.component;this.component=r(a(s=>()=>t(n,null,{default:()=>[t(m,{placeholder:this.props.placeholder,modelValue:this.props.value,"onUpdate:modelValue":c=>this.props.value=c},null)]}),{name:"NInput"}));const u=this.view;this.view=r(a(s=>()=>t(u,null,{default:()=>[t(this.component,null,null)]})));const d=this.params;this.params=r(a(()=>()=>t(d,null,{default:()=>[t("div",{class:i["params-item"]},[t(v,{class:i["params-item-label"],type:"info",truncated:!0},{default:()=>[V("占位文本")]}),t(m,{modelValue:this.props.placeholder,"onUpdate:modelValue":s=>this.props.placeholder=s,size:"small"},null)])]})))}toVue(){return`
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
.node ${N(JSON.stringify(E(this.props.style),null,2).replaceAll('"',""))}
</style>
    `}}export{P as default};
