import{m as p}from"./_mixin.e6f7dd13.js";import{a as u}from"./entry.2f722340.js";import{Z as t,a4 as _,$ as f,a0 as a,a2 as m,_ as s,a1 as h,a3 as b,F as w,U as g}from"./vue.8df9dc4e.js";import"./common.ee65b9fa.js";import"./ant.37833f30.js";import"./moment.8b5e7d95.js";import"./ag.6f4f687c.js";import"./lodash.9ef015a0.js";import"./numeral.d58f1efd.js";import"./cryptoJs.bc7a374e.js";const k={mixins:[p],computed:{lang(){const o=["download"];return o.reduce((l,r,n)=>(l[r]=this.$t("dataForm."+o[n]),l),{})}},data(){return{uploadList:[]}},watch:{"model.form"(o){this.uploadList=JSON.parse(this.model.form[this.model.component])}}},v={class:"multi-upload"},B={class:"multi-upload-list"},L=["src"],$=["href"];function x(o,l,r,n,d,i){const c=g("lambda-form-item");return t(),_(c,{label:o.label,name:o.model.component,meta:o.meta},{default:f(()=>[a("div",v,[a("label",null,m(o.label),1),a("div",B,[(t(!0),s(w,null,h(d.uploadList,e=>(t(),s("div",{class:"upload-list",key:e.index},[a("template",null,[e?(t(),s("img",{key:0,src:e},null,8,L)):b("",!0),a("a",{class:"upload-control",href:e,download:""},m(i.lang.download),9,$)])]))),128))])])]),_:1},8,["label","name","meta"])}const U=u(k,[["render",x]]);export{U as default};
