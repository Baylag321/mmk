import{m as v}from"./_mixin.90da006c.js";import{a as g}from"./entry.b42421c5.js";import{Z as i,a1 as u,a0 as o,c as s,_ as k,a6 as B,$ as h,a3 as f,F as W,H as y,W as r}from"./vue.65c51cdf.js";import"./common.72b693eb.js";import"./ant.770c87db.js";import"./moment.8b5e7d95.js";import"./ag.ab39fb93.js";import"./lodash.d251a0a5.js";import"./numeral.1f6cf9d6.js";import"./cryptoJs.f0105b17.js";const F={mixins:[v],methods:{},data(){return{other:""}},computed:{lang(){const e=["pleaseWriting","other"];return e.reduce((t,m,p)=>(t[m]=this.$t("dataForm."+e[p]),t),{})},options(){if(this.other=this.model.form[this.model.component],this.meta.options.length>=1)return this.meta.options;if(this.relations)return this.relations[this.meta.relation.table]?this.relations[this.meta.relation.table].data?this.relations[this.meta.relation.table].data:[]:[]}}};function N(e,t,m,p,l,n){const d=r("a-radio"),c=r("a-input"),_=r("a-radio-group"),b=r("lambda-form-item");return i(),u(b,{label:e.label,name:e.model.component,meta:e.meta},{default:o(()=>[s(_,{value:e.model.form[e.model.component],"onUpdate:value":t[1]||(t[1]=a=>e.model.form[e.model.component]=a)},{default:o(()=>[(i(!0),k(W,null,B(n.options,a=>(i(),u(d,{value:a.value,key:a.index,disabled:e.disabled},{default:o(()=>[h("span",null,f(a.label),1)]),_:2},1032,["value","disabled"]))),128)),s(d,{value:l.other},{default:o(()=>[h("span",null,[y(f(n.lang.other)+": ",1),s(c,{type:"text",value:l.other,"onUpdate:value":t[0]||(t[0]=a=>l.other=a),placeholder:n.lang.pleaseWriting},null,8,["value","placeholder"])])]),_:1},8,["value"])]),_:1},8,["value"])]),_:1},8,["label","name","meta"])}const L=g(F,[["render",N]]);export{L as default};
