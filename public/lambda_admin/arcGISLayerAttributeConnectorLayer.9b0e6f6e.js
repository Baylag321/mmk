import{L as d,g as f}from"./arcGISHelper.438deae3.js";import{m as c}from"./_mixin.4652fc4e.js";import{a as u}from"./entry.9b01c438.js";import{X as s,a2 as l,Z as y,a1 as g,S as n}from"./vue.300029e2.js";import"./common.01c9107c.js";import"./ant.d96fdebf.js";import"./moment.8b5e7d95.js";import"./ag.1d467b62.js";import"./lodash.ccbc03fa.js";import"./numeral.6cca0570.js";import"./cryptoJs.b65e2552.js";const _={mixins:[c],data(){return{layers:[],value:[],featureFields:[],layerType:"feature",token:"",ignoreWatching:!0}},methods:{setLayerValue(e){this.model.form[this.model.component]=JSON.stringify(e),this.getLayerData(e)},async getLayerData(e,r){let o=await d(e[e.length-1],this.token);o.data.type==="Feature Layer"&&(this.featureFields=o.data.fields.map(t=>({value:t.name,label:t.name}))),this.setSchemaByModel("connection","gis_options",this.featureFields),r?this.ignoreWatching=!1:this.model.form.connection=null},async getData(){if(!this.isBuilder){let e=await f();this.layers=e.layers,this.token=e.token}}},mounted(){this.getData()},computed:{popupFieldValue(){return this.model.form.popup_fields},searchFieldValue(){return this.model.form.search_fields},layerValue(){return this.model.form[this.model.component]}},watch:{popupFieldValue(e,r){if(!this.ignoreWatching){let o=[];e!==null&&e!=""&&e!="''"&&e&&(o=e.split(","));let t="";o.forEach(a=>{t=t+""+a+" <b>{"+a+"}</b> <br/>"}),this.model.form.info_template=t}},searchFieldValue(e,r){if(!this.ignoreWatching){let o=[];e!==null&&e!=""&&e!="''"&&e&&(o=e.split(","));let t="";o.forEach((a,i)=>{i>=o.length-1?t=t+""+a+" {"+a+"}":t=t+""+a+" {"+a+"}, "}),this.model.form.search_info=t}},layerValue(e,r){(r&&!e||e&&!r)&&e&&(this.value=JSON.parse(e),this.ignoreWatching=!0,this.getLayerData(this.value,!0))}}};function b(e,r,o,t,a,i){const m=n("a-cascader"),p=n("lambda-form-item");return s(),l(p,{label:e.label,name:e.model.component,meta:e.meta},{default:y(()=>[e.do_render?(s(),l(m,{key:0,value:a.value,"onUpdate:value":r[0]||(r[0]=h=>a.value=h),options:a.layers,onChange:i.setLayerValue,placeholder:e.placeholder,disabled:e.disabled},null,8,["value","options","onChange","placeholder","disabled"])):g("",!0)]),_:1},8,["label","name","meta"])}const E=u(_,[["render",b]]);export{E as default};
