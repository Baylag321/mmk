import{m as p}from"./_mixin.4f22079c.js";import{a as u}from"./entry.f00561da.js";import{Z as t,a1 as _,a0 as f,$ as a,a3 as m,_ as s,a6 as h,a2 as b,F as w,W as g}from"./vue.65c51cdf.js";import"./common.72b693eb.js";import"./ant.770c87db.js";import"./moment.8b5e7d95.js";import"./ag.ab39fb93.js";import"./lodash.d251a0a5.js";import"./numeral.1f6cf9d6.js";import"./cryptoJs.f0105b17.js";const k={mixins:[p],computed:{lang(){const o=["download"];return o.reduce((l,r,n)=>(l[r]=this.$t("dataForm."+o[n]),l),{})}},data(){return{uploadList:[]}},watch:{"model.form"(o){this.uploadList=JSON.parse(this.model.form[this.model.component])}}},v={class:"multi-upload"},B={class:"multi-upload-list"},L=["src"],$=["href"];function x(o,l,r,n,d,i){const c=g("lambda-form-item");return t(),_(c,{label:o.label,name:o.model.component,meta:o.meta},{default:f(()=>[a("div",v,[a("label",null,m(o.label),1),a("div",B,[(t(!0),s(w,null,h(d.uploadList,e=>(t(),s("div",{class:"upload-list",key:e.index},[a("template",null,[e?(t(),s("img",{key:0,src:e},null,8,L)):b("",!0),a("a",{class:"upload-control",href:e,download:""},m(i.lang.download),9,$)])]))),128))])])]),_:1},8,["label","name","meta"])}const W=u(k,[["render",x]]);export{W as default};