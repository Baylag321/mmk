import{m as r}from"./_mixin.4f22079c.js";import{a as n}from"./common.72b693eb.js";import{e as d}from"./ant.770c87db.js";import{a as i}from"./entry.f00561da.js";import{Z as s,a1 as p,a0 as f,c,W as a}from"./vue.65c51cdf.js";import"./moment.8b5e7d95.js";import"./ag.ab39fb93.js";import"./lodash.d251a0a5.js";import"./numeral.1f6cf9d6.js";import"./cryptoJs.f0105b17.js";const u={mixins:[r],mounted(){this.itemValue===null&&n.get("/lambda/krud/today").then(({data:e})=>{const o="YYYY-MM-DD";this.model.form[this.model.component]=d(e.today,o)})}};function b(e,o,h,_,k,v){const m=a("a-date-picker"),t=a("lambda-form-item");return s(),p(t,{label:e.label,name:e.model.component,meta:e.meta},{default:f(()=>[c(m,{value:e.model.form[e.model.component],"onUpdate:value":o[0]||(o[0]=l=>e.model.form[e.model.component]=l),"show-time":"",placeholder:e.placeholder,disabled:e.disabled},null,8,["value","placeholder","disabled"])]),_:1},8,["label","name","meta"])}const g=i(u,[["render",b]]);export{g as default};
