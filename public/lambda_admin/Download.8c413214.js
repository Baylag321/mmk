import{m as p}from"./_mixin.6a89461b.js";import{a as u}from"./entry.94f568a7.js";import{Z as t,a1 as _,a0 as f,$ as a,a3 as m,_ as s,a6 as h,a2 as b,F as w,W as g}from"./vue.6b2d282b.js";import"./common.914374cd.js";import"./ant.202d08f0.js";import"./moment.8b5e7d95.js";import"./ag.b10eb020.js";import"./lodash.0a37595b.js";import"./numeral.adfb6437.js";import"./cryptoJs.abce1e06.js";const k={mixins:[p],computed:{lang(){const o=["download"];return o.reduce((l,r,n)=>(l[r]=this.$t("dataForm."+o[n]),l),{})}},data(){return{uploadList:[]}},watch:{"model.form"(o){this.uploadList=JSON.parse(this.model.form[this.model.component])}}},v={class:"multi-upload"},B={class:"multi-upload-list"},L=["src"],$=["href"];function x(o,l,r,n,d,i){const c=g("lambda-form-item");return t(),_(c,{label:o.label,name:o.model.component,meta:o.meta},{default:f(()=>[a("div",v,[a("label",null,m(o.label),1),a("div",B,[(t(!0),s(w,null,h(d.uploadList,e=>(t(),s("div",{class:"upload-list",key:e.index},[a("template",null,[e?(t(),s("img",{key:0,src:e},null,8,L)):b("",!0),a("a",{class:"upload-control",href:e,download:""},m(i.lang.download),9,$)])]))),128))])])]),_:1},8,["label","name","meta"])}const W=u(k,[["render",x]]);export{W as default};
