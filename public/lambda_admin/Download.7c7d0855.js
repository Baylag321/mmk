import{m as p}from"./_mixin.eebe659b.js";import{a as u}from"./entry.74a9c9b3.js";import{Y as t,a3 as _,_ as f,$ as e,a1 as m,Z as s,a0 as h,a2 as b,F as w,S as g}from"./vue.13bb76e9.js";import"./ant.b38ea10b.js";import"./moment.8b5e7d95.js";import"./cryptoJs.69a6c71a.js";import"./numeral.166788f6.js";import"./common.41eb234c.js";const k={mixins:[p],computed:{lang(){const a=["download"];return a.reduce((l,r,n)=>(l[r]=this.$t("dataForm."+a[n]),l),{})}},data(){return{uploadList:[]}},watch:{"model.form"(a){this.uploadList=JSON.parse(this.model.form[this.model.component])}}},v={class:"multi-upload"},B={class:"multi-upload-list"},L=["src"],$=["href"];function x(a,l,r,n,d,i){const c=g("lambda-form-item");return t(),_(c,{label:a.label,name:a.model.component,meta:a.meta},{default:f(()=>[e("div",v,[e("label",null,m(a.label),1),e("div",B,[(t(!0),s(w,null,h(d.uploadList,o=>(t(),s("div",{class:"upload-list",key:o.index},[e("template",null,[o?(t(),s("img",{key:0,src:o},null,8,L)):b("",!0),e("a",{class:"upload-control",href:o,download:""},m(i.lang.download),9,$)])]))),128))])])]),_:1},8,["label","name","meta"])}const J=u(k,[["render",x]]);export{J as default};
