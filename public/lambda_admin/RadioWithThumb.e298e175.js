import{m as p}from"./_mixin.59e23610.js";import{a as u}from"./entry.0dfbcad4.js";import{S as a,Y as t,a8 as m,a4 as r,c,Z as f,a5 as _,_ as b,F as h}from"./vue.a1a1d817.js";import"./cryptoJs.37acf5e1.js";import"./ant.3cb96f1d.js";import"./common.db75f8be.js";import"./numeral.f32c122b.js";import"./moment.8b5e7d95.js";const v={mixins:[p],computed:{options(){return this.meta.options.length>=1?this.meta.options:this.relation_data}}},g=["src"];function k(e,n,B,$,C,s){const l=a("a-radio"),i=a("a-radio-group"),d=a("lambda-form-item");return t(),m(d,{label:e.label,name:e.model.component,meta:e.meta},{default:r(()=>[c(i,{value:e.model.form[e.model.component],"onUpdate:value":n[0]||(n[0]=o=>e.model.form[e.model.component]=o)},{default:r(()=>[(t(!0),f(h,null,_(s.options,o=>(t(),m(l,{value:o.value,key:o.index,disabled:e.disabled},{default:r(()=>[b("img",{src:o.thumb,alt:""},null,8,g)]),_:2},1032,["value","disabled"]))),128))]),_:1},8,["value"])]),_:1},8,["label","name","meta"])}const S=u(v,[["render",k]]);export{S as default};
