import{m as r}from"./_mixin.43205ba1.js";import{a as s,dP as t,N as i,r as a,o as p,c as u,w as f,f as c}from"./entry.8ecb60d7.js";const h={mixins:[r],computed:{autoFillCurrentDate(){return this.meta.autoFillCurrentDate===!0}},beforeMount(){this.model.form[this.model.component]!==null&&typeof this.model.form[this.model.component]=="string"&&(this.model.form[this.model.component]=t(this.model.form[this.model.component]))},mounted(){this.itemValue===null&&this.autoFillCurrentDate&&i.get("/lambda/krud/today").then(({data:e})=>{const o="YYYY-MM-DD";this.model.form[this.model.component]=t(e.today,o)})}};function b(e,o,D,C,_,m){const l=a("a-date-picker"),n=a("lambda-form-item");return p(),u(n,{label:e.label,name:e.model.component,meta:e.meta},{default:f(()=>[c(l,{value:e.model.form[e.model.component],"onUpdate:value":o[0]||(o[0]=d=>e.model.form[e.model.component]=d),mode:"date",placeholder:e.placeholder,disabled:e.disabled||m.autoFillCurrentDate},null,8,["value","placeholder","disabled"])]),_:1},8,["label","name","meta"])}const v=s(h,[["render",b]]);export{v as default};