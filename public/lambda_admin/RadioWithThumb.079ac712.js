import{m as p}from"./_mixin.abbd934f.js";import{a as u}from"./entry.c8558833.js";import{Y as a,a3 as m,$ as t,f as c,Z as f,a1 as _,a0 as b,F as h,V as r}from"./vue.091937b4.js";import"./ant.edd72bf4.js";import"./moment.8b5e7d95.js";import"./cryptoJs.ce41d5ee.js";import"./numeral.cf209493.js";import"./common.33f268d0.js";const v={mixins:[p],computed:{options(){return this.meta.options.length>=1?this.meta.options:this.relation_data}}},g=["src"];function k(e,n,B,$,V,s){const l=r("a-radio"),i=r("a-radio-group"),d=r("lambda-form-item");return a(),m(d,{label:e.label,name:e.model.component,meta:e.meta},{default:t(()=>[c(i,{value:e.model.form[e.model.component],"onUpdate:value":n[0]||(n[0]=o=>e.model.form[e.model.component]=o)},{default:t(()=>[(a(!0),f(h,null,_(s.options,o=>(a(),m(l,{value:o.value,key:o.index,disabled:e.disabled},{default:t(()=>[b("img",{src:o.thumb,alt:""},null,8,g)]),_:2},1032,["value","disabled"]))),128))]),_:1},8,["value"])]),_:1},8,["label","name","meta"])}const T=u(v,[["render",k]]);export{T as default};
