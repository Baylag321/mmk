import{m as p}from"./_mixin.be72e923.js";import{a as u}from"./entry.46591473.js";import{Y as a,a3 as m,_ as t,f as c,Z as f,a0 as _,$ as b,F as h,S as r}from"./vue.13bb76e9.js";import"./ant.ba1bd7fe.js";import"./moment.8b5e7d95.js";import"./cryptoJs.940212dc.js";import"./numeral.ccce3a12.js";import"./common.00ee525f.js";const v={mixins:[p],computed:{options(){return this.meta.options.length>=1?this.meta.options:this.relation_data}}},g=["src"];function k(e,n,B,$,C,s){const l=r("a-radio"),i=r("a-radio-group"),d=r("lambda-form-item");return a(),m(d,{label:e.label,name:e.model.component,meta:e.meta},{default:t(()=>[c(i,{value:e.model.form[e.model.component],"onUpdate:value":n[0]||(n[0]=o=>e.model.form[e.model.component]=o)},{default:t(()=>[(a(!0),f(h,null,_(s.options,o=>(a(),m(l,{value:o.value,key:o.index,disabled:e.disabled},{default:t(()=>[b("img",{src:o.thumb,alt:""},null,8,g)]),_:2},1032,["value","disabled"]))),128))]),_:1},8,["value"])]),_:1},8,["label","name","meta"])}const S=u(v,[["render",k]]);export{S as default};
