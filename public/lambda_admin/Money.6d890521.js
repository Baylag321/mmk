import{m as n}from"./_mixin.06e71949.js";import{a as p}from"./entry.b0bba7ab.js";import{Z as l,a1 as s,a0 as i,c as d,W as a}from"./vue.65c51cdf.js";import"./common.c40c4e6a.js";import"./ant.e036270e.js";import"./moment.8b5e7d95.js";import"./ag.ab39fb93.js";import"./lodash.888217fe.js";import"./numeral.4dda2596.js";import"./cryptoJs.61df0830.js";const f={mixins:[n]};function u(e,m,c,b,_,$){const r=a("a-input-number"),t=a("lambda-form-item");return l(),s(t,{label:e.label,name:e.model.component,meta:e.meta},{default:i(()=>[d(r,{value:e.model.form[e.model.component],"onUpdate:value":m[0]||(m[0]=o=>e.model.form[e.model.component]=o),formatter:o=>`\u20AE ${o}`.replace(/\B(?=(\d{3})+(?!\d))/g,","),parser:o=>o.replace(/\₮\s?|(,*)/g,""),disabled:e.disabled},null,8,["value","formatter","parser","disabled"])]),_:1},8,["label","name","meta"])}const V=p(f,[["render",u]]);export{V as default};
