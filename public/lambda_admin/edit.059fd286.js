import{m as a,c as d,K as c}from"./mixin.7c06dec4.js";import{a as m}from"./entry.2f722340.js";import{Z as p,_ as l,c as s,a0 as o,U as t}from"./vue.8df9dc4e.js";import"./common.ee65b9fa.js";import"./ant.37833f30.js";import"./moment.8b5e7d95.js";import"./ag.6f4f687c.js";import"./lodash.9ef015a0.js";import"./numeral.d58f1efd.js";import"./cryptoJs.bc7a374e.js";const u={inheritAttrs:!1,name:"Canvas",mixins:[a],data(){return{form_width:800,exportLoading:!1}},components:{common:d,Krudtools:c},methods:{templateOnSuccess(){this.editMode=!0,this.$refs.form.editModel(this.actions)},onReadyEdit(){this.actions&&(this.editMode=!0,this.$refs.form.editModel(this.actions))}},mounted(){}},_={class:"card drawer-wrappper"},f={class:"offcanvas-template"},h={class:"crud-page"},v={class:"crud-page-body"},w={class:""},y={class:"ant-drawer-content"},M={class:"ant-drawer-wrapper-body"},g={class:"ant-drawer-body"};function E(e,$,R,S,b,i){const r=t("common"),n=t("dataform");return p(),l("div",_,[s(r,{parent:e.parent,title:e.title,hideAction:!0,permissions:e.permissions},null,8,["parent","title","permissions"]),o("section",f,[o("div",h,[o("div",v,[o("div",w,[o("div",y,[o("div",M,[o("div",g,[s(n,{ref:"form",hideTitle:!0,schemaID:e.form,title:e.title,url:e.url,editMode:e.editMode,onSuccess:e.onSuccess,onReady:i.onReadyEdit,do_render:!0,permissions:e.permissions,page_id:e.page_id,user_condition:e.user_condition?e.user_condition.formCondition:null,onError:e.onError},null,8,["schemaID","title","url","editMode","onSuccess","onReady","permissions","page_id","user_condition","onError"])])])])])])])])])}const O=m(u,[["render",E]]);export{O as default};
