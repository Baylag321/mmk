import{m as c}from"./_mixin.a35eaa81.js";import{a as f}from"./entry.e3cd167a.js";import{Y as b,a0 as _,$ as t,f as n,E as g,a2 as v,_ as N,V as a}from"./vue.3f3be479.js";import"./common.194e1616.js";import"./ant.44dab1d6.js";import"./moment.8b5e7d95.js";import"./lodash.7f89dc3c.js";import"./numeral.30e81b7f.js";import"./cryptoJs.b278cf6a.js";const h={mixins:[c],computed:{lang(){const e=["createNumber"];return e.reduce((o,m,r)=>(o[m]=this.$t("dataForm."+e[r]),o),{})}},methods:{generateNumber(){this.model.form[this.model.component]=Math.floor(1e3+Math.random()*9e5)}}};function $(e,o,m,r,V,l){const d=a("inline-svg"),i=a("a-tooltip"),p=a("a-input-number"),u=a("lambda-form-item");return b(),_(u,{label:e.label,name:e.model.component,meta:e.meta},{default:t(()=>[n(p,{type:"number",value:e.model.form[e.model.component],"onUpdate:value":o[1]||(o[1]=s=>e.model.form[e.model.component]=s),placeholder:e.placeholder,disabled:e.disabled},{addonAfter:t(()=>[n(i,{slot:"append"},{title:t(()=>[g(v(l.lang.createNumber),1)]),default:t(()=>[N("span",{class:"svg-icon",onClick:o[0]||(o[0]=s=>l.generateNumber())},[n(d,{src:"/assets/icons/duotone/Home/Key.svg"})])]),_:1})]),_:1},8,["value","placeholder","disabled"])]),_:1},8,["label","name","meta"])}const F=f(h,[["render",$]]);export{F as default};
