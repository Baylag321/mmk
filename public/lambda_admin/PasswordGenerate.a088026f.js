import{m as u}from"./_mixin.eebe659b.js";import{a as f}from"./entry.74a9c9b3.js";import{Y as _,a3 as g,_ as a,f as s,E as v,a1 as b,$ as h,S as t}from"./vue.13bb76e9.js";import"./ant.b38ea10b.js";import"./moment.8b5e7d95.js";import"./cryptoJs.69a6c71a.js";import"./numeral.166788f6.js";import"./common.41eb234c.js";const w={mixins:[u],computed:{lang(){const e=["Create_a_password"];return e.reduce((o,n,r)=>(o[n]=this.$t("dataForm."+e[r]),o),{})}},methods:{generatePass(){this.model.form[this.model.component]=Math.floor(1e5+Math.random()*9e5)}}};function C(e,o,n,r,$,l){const d=t("inline-svg"),p=t("a-tooltip"),i=t("a-input-password"),c=t("lambda-form-item");return _(),g(c,{rule:e.rule,label:e.label,name:e.model.component,meta:e.meta},{default:a(()=>[s(i,{value:e.model.form[e.model.component],"onUpdate:value":o[1]||(o[1]=m=>e.model.form[e.model.component]=m),password:"",placeholder:e.placeholder,disabled:e.disabled},{addonAfter:a(()=>[s(p,{slot:"append"},{title:a(()=>[v(b(l.lang.Create_a_password),1)]),default:a(()=>[h("span",{class:"svg-icon",onClick:o[0]||(o[0]=m=>l.generatePass())},[s(d,{src:"/assets/icons/duotone/Home/Key.svg"})])]),_:1})]),_:1},8,["value","placeholder","disabled"])]),_:1},8,["rule","label","name","meta"])}const A=f(w,[["render",C]]);export{A as default};
