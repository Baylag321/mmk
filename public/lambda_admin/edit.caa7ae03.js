import{m as c,c as f,K as l}from"./mixin.2f0e9d83.js";import{a as p}from"./entry.94f568a7.js";import{Z as h,_ as u,c as r,$ as i,W as d}from"./vue.6b2d282b.js";import"./common.914374cd.js";import"./ant.202d08f0.js";import"./moment.8b5e7d95.js";import"./ag.b10eb020.js";import"./lodash.0a37595b.js";import"./numeral.adfb6437.js";import"./cryptoJs.abce1e06.js";const _={inheritAttrs:!1,name:"Canvas",mixins:[c],data(){return{form_width:800,formIdentity:null,exportLoading:!1}},components:{common:f,Krudtools:l},methods:{templateOnSuccess(){this.actions?(this.editMode=!0,this.$refs.form.editModel(this.actions)):this.formIdentity&&(this.editMode=!0,this.$refs.form.editModel(this.formIdentity))},onReadyEdit(e,o){this.actions?(this.editMode=!0,this.$refs.form.editModel(this.actions)):this.checkEdit(e)},checkEdit(e){if(this.user_condition&&this.user_condition.formCondition){let o=e.identity,s=this.user_condition.formCondition.findIndex(t=>t.form_field===o);if(s>=0){let t=this.user_condition.formCondition[s].user_field;window.init&&window.init.user&&window.init.user[t]&&(this.editMode=!0,this.formIdentity=window.init.user[t],this.$refs.form.editModel(this.formIdentity))}}}},mounted(){}},w={class:"card drawer-wrappper"},y={class:"offcanvas-template"},M={class:"crud-page"},v={class:"crud-page-body"},I={class:""},E={class:"ant-drawer-content"},C={class:"ant-drawer-wrapper-body"},$={class:"ant-drawer-body"};function g(e,o,s,t,k,n){const a=d("common"),m=d("dataform");return h(),u("div",w,[r(a,{parent:e.parent,title:e.title,hideAction:!0,permissions:e.permissions},null,8,["parent","title","permissions"]),i("section",y,[i("div",M,[i("div",v,[i("div",I,[i("div",E,[i("div",C,[i("div",$,[r(m,{ref:"form",hideTitle:!0,schemaID:e.form,title:e.title,url:e.url,editMode:e.editMode,onSuccess:n.templateOnSuccess,onReady:n.onReadyEdit,do_render:!0,permissions:e.permissions,page_id:e.page_id,user_condition:e.user_condition?e.user_condition.formCondition:null,onError:e.onError},null,8,["schemaID","title","url","editMode","onSuccess","onReady","permissions","page_id","user_condition","onError"])])])])])])])])])}const F=p(_,[["render",g]]);export{F as default};
