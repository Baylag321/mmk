import{m as l}from"./_mixin.9d154bf1.js";import{a as n}from"./entry.71105e47.js";import{Z as p,a1 as d,a0 as i,c as s,W as a}from"./vue.65c51cdf.js";import"./common.c40c4e6a.js";import"./ant.e036270e.js";import"./moment.8b5e7d95.js";import"./ag.ab39fb93.js";import"./lodash.888217fe.js";import"./numeral.4dda2596.js";import"./cryptoJs.61df0830.js";const c={mixins:[l]};function f(e,o,u,b,_,v){const m=a("a-date-picker"),t=a("lambda-form-item");return p(),d(t,{label:e.label,name:e.model.component,meta:e.meta},{default:i(()=>[s(m,{value:e.model.form[e.model.component],"onUpdate:value":o[0]||(o[0]=r=>e.model.form[e.model.component]=r),mode:"date",placeholder:e.placeholder,disabled:e.disabled,style:{width:"100%"},valueFormat:"YYYY-MM-DD"},null,8,["value","placeholder","disabled"])]),_:1},8,["label","name","meta"])}const F=n(c,[["render",f]]);export{F as default};