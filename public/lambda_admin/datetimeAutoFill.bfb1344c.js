import{m as r}from"./_mixin.59ca9337.js";import{a as n}from"./common.c40c4e6a.js";import{e as d}from"./ant.e036270e.js";import{a as i}from"./entry.71105e47.js";import{Z as s,a1 as p,a0 as f,c,W as a}from"./vue.65c51cdf.js";import"./moment.8b5e7d95.js";import"./ag.ab39fb93.js";import"./lodash.888217fe.js";import"./numeral.4dda2596.js";import"./cryptoJs.61df0830.js";const u={mixins:[r],mounted(){this.itemValue===null&&n.get("/lambda/krud/today").then(({data:e})=>{const o="YYYY-MM-DD";this.model.form[this.model.component]=d(e.today,o)})}};function b(e,o,h,_,k,v){const m=a("a-date-picker"),t=a("lambda-form-item");return s(),p(t,{label:e.label,name:e.model.component,meta:e.meta},{default:f(()=>[c(m,{value:e.model.form[e.model.component],"onUpdate:value":o[0]||(o[0]=l=>e.model.form[e.model.component]=l),"show-time":"",placeholder:e.placeholder,disabled:e.disabled},null,8,["value","placeholder","disabled"])]),_:1},8,["label","name","meta"])}const g=i(u,[["render",b]]);export{g as default};
