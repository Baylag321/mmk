import{m as i,c as a,K as d}from"./mixin.8359bf6e.js";import{a as c}from"./entry.71105e47.js";import{Z as m,_ as p,c as s,$ as o,W as t}from"./vue.65c51cdf.js";import"./common.c40c4e6a.js";import"./ant.e036270e.js";import"./moment.8b5e7d95.js";import"./ag.ab39fb93.js";import"./lodash.888217fe.js";import"./numeral.4dda2596.js";import"./cryptoJs.61df0830.js";const l={inheritAttrs:!1,name:"Canvas",mixins:[i],data(){return{form_width:800,exportLoading:!1}},components:{common:a,Krudtools:d},methods:{templateEdit(){this.openSide()},templateOnSuccess(){this.hideSide()}},mounted(){}},u={class:"card drawer-wrappper"},_={class:"offcanvas-template"},f={class:"crud-page"},h={class:"crud-page-body"},v={class:""},w={class:"ant-drawer-content"},g={class:"ant-drawer-wrapper-body"},y={class:"ant-drawer-body"};function S(e,E,$,b,B,C){const r=t("common"),n=t("dataform");return m(),p("div",u,[s(r,{parent:e.parent,title:e.title,hideAction:!0,permissions:e.permissions},null,8,["parent","title","permissions"]),o("section",_,[o("div",f,[o("div",h,[o("div",v,[o("div",w,[o("div",g,[o("div",y,[s(n,{ref:"form",hideTitle:!0,schemaID:e.form,title:e.title,url:e.url,editMode:e.editMode,onSuccess:e.onSuccess,onReady:e.onReady,do_render:!0,permissions:e.permissions,page_id:e.page_id,user_condition:e.user_condition?e.user_condition.formCondition:null,onError:e.onError},null,8,["schemaID","title","url","editMode","onSuccess","onReady","permissions","page_id","user_condition","onError"])])])])])])])])])}const O=c(l,[["render",S]]);export{O as default};
