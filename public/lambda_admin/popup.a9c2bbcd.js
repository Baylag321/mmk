import{m as S,c as g,K as E}from"./mixin.73201b7c.js";import{a as v}from"./entry.e5ab3232.js";import{M as C}from"./Modal.0dab6870.js";import{Y as t,Z as w,c as s,$ as r,a0 as n,a5 as U,a3 as k,a2 as P,V as o}from"./vue.8575f319.js";import"./common.77f0e8e0.js";import"./ant.8a0ad9d7.js";import"./moment.8b5e7d95.js";import"./ag.2d2e5170.js";import"./lodash.007e3bbb.js";import"./numeral.183422ec.js";import"./cryptoJs.c870fd31.js";const R={inheritAttrs:!1,name:"Canvas",mixins:[S],data(){return{form_width:800,openSlidePanel:!1,exportLoading:!1}},components:{common:g,Krudtools:E,"a-modal":C},methods:{hideSide(){this.openSlidePanel=!1,this.editMode=!1},openSide(){this.openSlidePanel=!0},templateEdit(){this.openSide()},templateOnSuccess(){this.hideSide()}},mounted(){}},M={class:"card drawer-wrappper"},_={class:"offcanvas-template"},b={class:"crud-page"},V={class:"crud-page-body"},y={id:"drawer-container"};function A(e,d,B,D,i,a){const l=o("common"),p=o("Krudtools"),m=o("portal"),c=o("datagrid"),u=o("dataform"),f=o("a-modal");return t(),w("div",M,[s(l,{parent:e.parent,title:e.title,addAction:a.openSide,permissions:e.permissions},null,8,["parent","title","addAction","permissions"]),s(m,{to:"header-right"},{default:r(()=>[s(p,{search:e.search,refresh:e.refresh,exportExcel:e.exportExcel,exportLoading:i.exportLoading,print:e.print,save:e.save,isPrint:e.isPrint,isExcel:e.isExcel,isExcelUpload:e.isExcelUpload,excelUploadCustomUrl:e.excelUploadCustomUrl,excelUploadMethod:e.excelUploadMethod,isRefresh:e.isRefresh,isSave:e.isSave,isSearch:!1},null,8,["search","refresh","exportExcel","exportLoading","print","save","isPrint","isExcel","isExcelUpload","excelUploadCustomUrl","excelUploadMethod","isRefresh","isSave"])]),_:1}),n("section",_,[n("div",b,[n("div",V,[n("div",y,[n("div",{class:U(i.openSlidePanel?"dg-flex open-drawer":"dg-flex")},[e.permissions&&e.permissions.r?(t(),k(c,{key:0,ref:"grid",url:e.url,schemaID:e.grid,paginate:50,fnClone:e.clone,fnEdit:e.edit,fnQuickEdit:e.quickEdit,fnView:e.view,actions:e.$props.actions,dblClick:e.$props.dbClickAction,onRowSelect:e.$props.onRowSelect,permissions:e.permissions,page_id:e.page_id,custom_condition:e.$props.custom_condition?e.$props.custom_condition:null,user_condition:e.user_condition?e.user_condition.gridCondition:null},null,8,["url","schemaID","fnClone","fnEdit","fnQuickEdit","fnView","actions","dblClick","onRowSelect","permissions","page_id","custom_condition","user_condition"])):P("",!0)],2)])])])]),s(f,{visible:i.openSlidePanel,"onUpdate:visible":d[0]||(d[0]=h=>i.openSlidePanel=h),class:"create",maskClosable:!1,title:e.title,forceRender:!0,width:this.form_width,placement:"right"},{footer:r(()=>[]),default:r(()=>[s(u,{ref:"form",hideTitle:!0,schemaID:e.form,title:e.title,url:e.url,editMode:e.editMode,onSuccess:e.onSuccess,onReady:e.onReady,do_render:i.openSlidePanel,permissions:e.permissions,page_id:e.page_id,user_condition:e.user_condition?e.user_condition.formCondition:null,onError:e.onError,close:a.hideSide},null,8,["schemaID","title","url","editMode","onSuccess","onReady","do_render","permissions","page_id","user_condition","onError","close"])]),_:1},8,["visible","title","width"])])}const Z=v(R,[["render",A]]);export{Z as default};
