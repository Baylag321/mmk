import{a as n,al as s}from"./entry.c8558833.js";import{Y as p,a3 as i,V as m}from"./vue.091937b4.js";import"./ant.edd72bf4.js";import"./moment.8b5e7d95.js";import"./cryptoJs.ce41d5ee.js";import"./numeral.cf209493.js";import"./common.33f268d0.js";const d={props:["model","rule","label","meta"],data(){return{options:[],loading:!0}},computed:{computedOptions(){return this.options.filter(o=>this.isShow(o))}},mounted(){let o=`/lambda/krud/${this.meta.schemaID}/options`;s.post(o,this.meta.filter.relation).then(({data:e})=>{this.options=e,this.loading=!1})},methods:{isShow(o){return o.value&&o.label?this.$props.meta.filter.relation.parentFieldOfForm?this.$props.model.form[this.$props.meta.filter.relation.parentFieldOfForm]==o.parent_value:!0:!1}}};function u(o,e,t,f,c,r){const l=m("Dropdown");return p(),i(l,{modelValue:o.$props.model.form[t.model.component],"onUpdate:modelValue":e[0]||(e[0]=a=>o.$props.model.form[t.model.component]=a),options:r.computedOptions,optionLabel:"label",optionGroupLabel:"label",optionGroupChildren:"items"},null,8,["modelValue","options"])}const V=n(d,[["render",u]]);export{V as default};
