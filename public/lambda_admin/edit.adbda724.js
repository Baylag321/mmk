import{m as d,c as a,K as c}from"./mixin.0d0c2ebf.js";import{a as m}from"./entry.74a9c9b3.js";import{Y as p,Z as l,f as s,$ as o,S as t}from"./vue.13bb76e9.js";import"./ant.b38ea10b.js";import"./moment.8b5e7d95.js";import"./cryptoJs.69a6c71a.js";import"./numeral.166788f6.js";import"./common.41eb234c.js";const u={inheritAttrs:!1,name:"Canvas",mixins:[d],data(){return{form_width:800,exportLoading:!1}},components:{common:a,Krudtools:c},methods:{templateOnSuccess(){this.editMode=!0,this.$refs.form.editModel(this.actions)},onReadyEdit(){this.actions&&(this.editMode=!0,this.$refs.form.editModel(this.actions))}},mounted(){}},f={class:"card drawer-wrappper"},_={class:"offcanvas-template"},h={class:"crud-page"},v={class:"crud-page-body"},w={class:""},y={class:"ant-drawer-content"},M={class:"ant-drawer-wrapper-body"},g={class:"ant-drawer-body"};function E(e,$,S,R,b,i){const r=t("common"),n=t("dataform");return p(),l("div",f,[s(r,{parent:e.parent,title:e.title,hideAction:!0,permissions:e.permissions},null,8,["parent","title","permissions"]),o("section",_,[o("div",h,[o("div",v,[o("div",w,[o("div",y,[o("div",M,[o("div",g,[s(n,{ref:"form",hideTitle:!0,schemaID:e.form,title:e.title,url:e.url,editMode:e.editMode,onSuccess:e.onSuccess,onReady:i.onReadyEdit,do_render:!0,permissions:e.permissions,page_id:e.page_id,user_condition:e.user_condition?e.user_condition.formCondition:null,onError:e.onError},null,8,["schemaID","title","url","editMode","onSuccess","onReady","permissions","page_id","user_condition","onError"])])])])])])])])])}const V=m(u,[["render",E]]);export{V as default};
