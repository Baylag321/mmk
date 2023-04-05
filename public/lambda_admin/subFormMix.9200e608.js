import{a as u,aO as c,aP as f,aQ as S,aR as n,aN as p}from"./entry.74a9c9b3.js";import{Y as l,Z as a,P as h,a2 as m,F as g,a0 as w,a3 as M,a4 as y,$ as G}from"./vue.13bb76e9.js";const C={props:["f","model","editMode","relations","formula","schema","url"],created(){this.f.data={},this.f.schema.forEach(e=>{this.f.identity==e.model||e.formType==null||this.f.timestamp&&(e.model=="created_at"||e.model=="updated_at")||(this.editMode?this.setModel(e.model,this.model[e.model],e.formType):this.setModel(e.model,e.default,e.formType),this.$watch("model."+e.model,{handler:(o,t)=>{this.afterChange(e.model,o,t)},deep:!0}))})},methods:{isShowAble(e){if(this.schema){let o=this.schema.findIndex(t=>t.model==e);return o>=0?!this.schema[o].hidden:!1}return!0},element:c,setModel(e,o,t){switch(t){case"Switch":this.model[e]=d,this.f.data[e]=d;break;case"Checkbox":let d=0;(o=="true"||o==1)&&(d=1),this.model[e]=d,this.f.data[e]=d;break;default:this.f.data[e]=o}},setMeta(e){return delete e.table,delete e.rules,delete e.label,delete e.span,delete e.default,e},getSchemaIndex(e){return this.f.schema.findIndex(o=>o.model==e)},afterChange(e,o,t){f(e,o,this.model,this.f.schema,this.$refs,this.$Notice),S(this.formula,e,this.model,this.f.schema,this.f.rule,this.f.model)},getSchemaRelationByModel(e){let o=this.f.schema.findIndex(t=>t.model==e);return o>=0?n(this.f.schema[o],this.relations):null},getRelation(e){return n(e,this.relations)}}},B={key:0,class:"row-number"},F={class:"action"};function b(e,o,t,d,s,i){return l(),a("tr",null,[t.f.showRowNumber?(l(),a("td",B,[h(e.$slots,"rowNumber")])):m("",!0),(l(!0),a(g,null,w(t.f.schema.filter(r=>typeof r.formType<"u"&&r.formType!==null&&r.model&&i.isShowAble(r.model)&&r.model!==t.f.identity&&r.model!==t.f.parent&&r.model!=="updated_at"&&r.model!=="created_at"&&!r.hidden),r=>(l(),a("td",{key:r.index},[t.model?(l(),M(y(i.element(r.formType)),{key:0,model:{form:t.model,component:r.model},url:t.url,size:"small",label:r.label!==""?r.label:`[${r.model}]`,meta:i.setMeta(r),getSchemaRelationByModel:i.getSchemaRelationByModel,relation_data:i.getRelation},null,8,["model","url","label","meta","getSchemaRelationByModel","relation_data"])):m("",!0)]))),128)),G("td",F,[h(e.$slots,"action")])])}const I=u(C,[["render",b]]),P={data(){return{preSource:[],modal_grid_show:!1,user_condition:null,custom_condition:null,sourceGridParentBasedCondition:null}},mounted(){this.form.sourceGridUserCondition!==void 0&&this.form.sourceGridUserCondition!==null&&this.form.sourceGridUserCondition!=""&&(this.user_condition=JSON.parse(this.form.sourceGridUserCondition)),this.form.sourceGridParentBasedCondition!==void 0&&this.form.sourceGridParentBasedCondition!==null&&this.form.sourceGridParentBasedCondition!=""&&(this.sourceGridParentBasedCondition=JSON.parse(this.form.sourceGridParentBasedCondition))},methods:{showAddSourceModal(){if(this.sourceGridParentBasedCondition){this.custom_condition={};let e=!1;this.sourceGridParentBasedCondition.forEach(o=>{this.model.form[o.parent_field]!==void 0&&this.model.form[o.parent_field]!==null?this.custom_condition[o.grid_field]=this.model.form[o.parent_field]:(e=!0,p.error({message:this.lang.informationIsIncomplete,description:o.message}))}),e||this.showAddSourceModalReal()}else this.showAddSourceModalReal()},showAddSourceModalReal(){this.modal_grid_show=!0},closeSourceModal(){this.modal_grid_show=!1},addFromPreSource(){this.preSource&&this.form.sourceGridTargetColumns&&this.preSource.forEach(e=>{this.createDataFromSource(e)}),this.closeSourceModal()},createDataFromSource(e){let o=_.cloneDeep(this.form),t={};o.schema.forEach(s=>{o.identity==s.model||s.formType==null||o.timestamp&&(s.model=="created_at"||s.model=="updated_at")}),this.form.sourceGridTargetColumns.forEach(s=>{t[s.selfColumn]=e[s.sourceColumn]});let d={form:o,model:t};this.model.form[this.model.component]==null&&(this.model.form[this.model.component]=[]),!(this.form.sourceUniqueField!==""&&this.form.sourceUniqueField!==void 0&&this.form.sourceUniqueField!==null&&this.model.form[this.model.component].findIndex(i=>i[this.form.sourceUniqueField]===t[this.form.sourceUniqueField])!==-1)&&(this.model.form[this.model.component].push(t),this.listData.push(d),this.rowLength=this.model.form[this.model.component].length)},onRowSelect(e){this.preSource=e},sourceGridUrl(){if(window.init)if(window.init.microserviceSettings){let e=window.init.microserviceSettings.findIndex(o=>o.project_id==this.meta.GSOption.sourceMicroserviceID);return e>=0?window.init.microserviceSettings[e].production_url:this.url}else return this.url;else return this.url}}};export{I as G,P as s};
