import{a as n}from"./common.683a698b.js";import{a as p}from"./entry.bbc0a0fe.js";import{Z as s,a4 as i,U as m}from"./vue.94d6394d.js";import"./ant.a39268cc.js";import"./moment.8b5e7d95.js";import"./ag.01cba310.js";import"./lodash.a5f6e27a.js";import"./numeral.3554dd39.js";import"./cryptoJs.1212ab17.js";const d={props:["model","rule","label","meta"],data(){return{options:[],loading:!0}},computed:{computedOptions(){return this.options.filter(o=>this.isShow(o))}},mounted(){let o=`/lambda/krud/${this.meta.schemaID}/options`;n.post(o,this.meta.filter.relation).then(({data:e})=>{this.options=e,this.loading=!1})},methods:{isShow(o){return o.value&&o.label?this.$props.meta.filter.relation.parentFieldOfForm?this.$props.model.form[this.$props.meta.filter.relation.parentFieldOfForm]==o.parent_value:!0:!1}}};function u(o,e,t,f,c,r){const l=m("Dropdown");return s(),i(l,{modelValue:o.$props.model.form[t.model.component],"onUpdate:modelValue":e[0]||(e[0]=a=>o.$props.model.form[t.model.component]=a),options:r.computedOptions,optionLabel:"label",optionGroupLabel:"label",optionGroupChildren:"items"},null,8,["modelValue","options"])}const v=p(d,[["render",u]]);export{v as default};
