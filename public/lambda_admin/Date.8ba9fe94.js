import{m as l}from"./_mixin.6ac0b8cb.js";import{a as n}from"./entry.6fd2a578.js";import{Z as p,a1 as d,a0 as i,c as s,W as a}from"./vue.65c51cdf.js";import"./common.72b693eb.js";import"./ant.770c87db.js";import"./moment.8b5e7d95.js";import"./ag.23ecb9ea.js";import"./lodash.d251a0a5.js";import"./numeral.1f6cf9d6.js";import"./cryptoJs.f0105b17.js";const c={mixins:[l]};function f(e,o,u,b,_,v){const m=a("a-date-picker"),t=a("lambda-form-item");return p(),d(t,{label:e.label,name:e.model.component,meta:e.meta},{default:i(()=>[s(m,{value:e.model.form[e.model.component],"onUpdate:value":o[0]||(o[0]=r=>e.model.form[e.model.component]=r),mode:"date",placeholder:e.placeholder,disabled:e.disabled,style:{width:"100%"},valueFormat:"YYYY-MM-DD"},null,8,["value","placeholder","disabled"])]),_:1},8,["label","name","meta"])}const F=n(c,[["render",f]]);export{F as default};