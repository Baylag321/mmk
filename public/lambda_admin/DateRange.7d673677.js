import{m as n}from"./_mixin.50370c94.js";import{a as l}from"./entry.e5ab3232.js";import{Y as i,a3 as p,$ as s,c as d,V as a}from"./vue.8575f319.js";import"./common.77f0e8e0.js";import"./ant.8a0ad9d7.js";import"./moment.8b5e7d95.js";import"./ag.2d2e5170.js";import"./lodash.007e3bbb.js";import"./numeral.183422ec.js";import"./cryptoJs.c870fd31.js";const f={mixins:[n]};function c(e,o,u,b,_,v){const m=a("a-range-picker"),t=a("lambda-form-item");return i(),p(t,{label:e.label,name:e.model.component,meta:e.meta},{default:s(()=>[d(m,{value:e.model.form[e.model.component],"onUpdate:value":o[0]||(o[0]=r=>e.model.form[e.model.component]=r),disabled:e.disabled,style:{width:"100%"},valueFormat:"YYYY-MM-DD"},null,8,["value","disabled"])]),_:1},8,["label","name","meta"])}const h=l(f,[["render",c]]);export{h as default};