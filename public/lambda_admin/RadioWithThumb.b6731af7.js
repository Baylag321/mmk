import{m as p}from"./_mixin.1f6d012c.js";import{a as u}from"./entry.6fd2a578.js";import{Z as a,a1 as n,a0 as t,c,_ as f,a6 as _,$ as b,F as h,W as r}from"./vue.65c51cdf.js";import"./common.72b693eb.js";import"./ant.770c87db.js";import"./moment.8b5e7d95.js";import"./ag.23ecb9ea.js";import"./lodash.d251a0a5.js";import"./numeral.1f6cf9d6.js";import"./cryptoJs.f0105b17.js";const v={mixins:[p],computed:{options(){return this.meta.options.length>=1?this.meta.options:this.relation_data}}},g=["src"];function k(e,m,B,$,C,s){const i=r("a-radio"),l=r("a-radio-group"),d=r("lambda-form-item");return a(),n(d,{label:e.label,name:e.model.component,meta:e.meta},{default:t(()=>[c(l,{value:e.model.form[e.model.component],"onUpdate:value":m[0]||(m[0]=o=>e.model.form[e.model.component]=o)},{default:t(()=>[(a(!0),f(h,null,_(s.options,o=>(a(),n(i,{value:o.value,key:o.index,disabled:e.disabled},{default:t(()=>[b("img",{src:o.thumb,alt:""},null,8,g)]),_:2},1032,["value","disabled"]))),128))]),_:1},8,["value"])]),_:1},8,["label","name","meta"])}const U=u(v,[["render",k]]);export{U as default};
