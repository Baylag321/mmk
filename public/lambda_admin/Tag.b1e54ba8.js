import{a as n}from"./common.194e1616.js";import{a as p}from"./entry.e3cd167a.js";import{Y as s,a0 as i,V as m}from"./vue.3f3be479.js";import"./ant.44dab1d6.js";import"./moment.8b5e7d95.js";import"./lodash.7f89dc3c.js";import"./numeral.30e81b7f.js";import"./cryptoJs.b278cf6a.js";const d={props:["model","rule","label","meta"],data(){return{options:[],loading:!0}},computed:{computedOptions(){return this.options.filter(o=>this.isShow(o))}},mounted(){let o=`/lambda/krud/${this.meta.schemaID}/options`;n.post(o,this.meta.filter.relation).then(({data:e})=>{this.options=e,this.loading=!1})},methods:{isShow(o){return o.value&&o.label?this.$props.meta.filter.relation.parentFieldOfForm?this.$props.model.form[this.$props.meta.filter.relation.parentFieldOfForm]==o.parent_value:!0:!1}}};function u(o,e,t,f,c,r){const l=m("Dropdown");return s(),i(l,{modelValue:o.$props.model.form[t.model.component],"onUpdate:modelValue":e[0]||(e[0]=a=>o.$props.model.form[t.model.component]=a),options:r.computedOptions,optionLabel:"label",optionGroupLabel:"label",optionGroupChildren:"items"},null,8,["modelValue","options"])}const g=p(d,[["render",u]]);export{g as default};
