import{m as v}from"./_mixin.a35eaa81.js";import{a as g}from"./entry.e3cd167a.js";import{Y as s,a0 as u,$ as o,f as i,Z as k,a6 as B,_ as h,a2 as f,F as V,E as y,V as r}from"./vue.3f3be479.js";import"./common.194e1616.js";import"./ant.44dab1d6.js";import"./moment.8b5e7d95.js";import"./lodash.7f89dc3c.js";import"./numeral.30e81b7f.js";import"./cryptoJs.b278cf6a.js";const F={mixins:[v],methods:{},data(){return{other:""}},computed:{lang(){const e=["pleaseWriting","other"];return e.reduce((t,m,p)=>(t[m]=this.$t("dataForm."+e[p]),t),{})},options(){if(this.other=this.model.form[this.model.component],this.meta.options.length>=1)return this.meta.options;if(this.relations)return this.relations[this.meta.relation.table]?this.relations[this.meta.relation.table].data?this.relations[this.meta.relation.table].data:[]:[]}}};function N(e,t,m,p,l,n){const d=r("a-radio"),c=r("a-input"),_=r("a-radio-group"),b=r("lambda-form-item");return s(),u(b,{label:e.label,name:e.model.component,meta:e.meta},{default:o(()=>[i(_,{value:e.model.form[e.model.component],"onUpdate:value":t[1]||(t[1]=a=>e.model.form[e.model.component]=a)},{default:o(()=>[(s(!0),k(V,null,B(n.options,a=>(s(),u(d,{value:a.value,key:a.index,disabled:e.disabled},{default:o(()=>[h("span",null,f(a.label),1)]),_:2},1032,["value","disabled"]))),128)),i(d,{value:l.other},{default:o(()=>[h("span",null,[y(f(n.lang.other)+": ",1),i(c,{type:"text",value:l.other,"onUpdate:value":t[0]||(t[0]=a=>l.other=a),placeholder:n.lang.pleaseWriting},null,8,["value","placeholder"])])]),_:1},8,["value"])]),_:1},8,["value"])]),_:1},8,["label","name","meta"])}const L=g(F,[["render",N]]);export{L as default};
