import{m as S,c as g,K as E}from"./mixin.2f0e9d83.js";import{a as v}from"./entry.94f568a7.js";import{M as C}from"./ant.202d08f0.js";import{Z as t,_ as w,c as s,a0 as r,$ as n,a7 as U,a1 as k,a2 as P,W as o}from"./vue.6b2d282b.js";import"./common.914374cd.js";import"./moment.8b5e7d95.js";import"./ag.b10eb020.js";import"./lodash.0a37595b.js";import"./numeral.adfb6437.js";import"./cryptoJs.abce1e06.js";const R={inheritAttrs:!1,name:"Canvas",mixins:[S],data(){return{form_width:800,openSlidePanel:!1,exportLoading:!1}},components:{common:g,Krudtools:E,"a-modal":C},methods:{hideSide(){this.openSlidePanel=!1,this.editMode=!1},openSide(){this.openSlidePanel=!0},templateEdit(){this.openSide()},templateOnSuccess(){this.hideSide()}},mounted(){}},_={class:"card drawer-wrappper"},M={class:"offcanvas-template"},b={class:"crud-page"},y={class:"crud-page-body"},V={id:"drawer-container"};function A(e,d,B,D,i,a){const l=o("common"),p=o("Krudtools"),m=o("portal"),c=o("datagrid"),u=o("dataform"),f=o("a-modal");return t(),w("div",_,[s(l,{parent:e.parent,title:e.title,addAction:a.openSide,permissions:e.permissions},null,8,["parent","title","addAction","permissions"]),s(m,{to:"header-right"},{default:r(()=>[s(p,{search:e.search,refresh:e.refresh,exportExcel:e.exportExcel,exportLoading:i.exportLoading,print:e.print,save:e.save,isPrint:e.isPrint,isExcel:e.isExcel,isExcelUpload:e.isExcelUpload,excelUploadCustomUrl:e.excelUploadCustomUrl,excelUploadMethod:e.excelUploadMethod,isRefresh:e.isRefresh,isSave:e.isSave,isSearch:!1},null,8,["search","refresh","exportExcel","exportLoading","print","save","isPrint","isExcel","isExcelUpload","excelUploadCustomUrl","excelUploadMethod","isRefresh","isSave"])]),_:1}),n("section",M,[n("div",b,[n("div",y,[n("div",V,[n("div",{class:U(i.openSlidePanel?"dg-flex open-drawer":"dg-flex")},[e.permissions&&e.permissions.r?(t(),k(c,{key:0,ref:"grid",url:e.url,schemaID:e.grid,paginate:50,fnClone:e.clone,fnEdit:e.edit,fnQuickEdit:e.quickEdit,fnView:e.view,actions:e.$props.actions,dblClick:e.$props.dbClickAction,onRowSelect:e.$props.onRowSelect,permissions:e.permissions,page_id:e.page_id,custom_condition:e.$props.custom_condition?e.$props.custom_condition:null,user_condition:e.user_condition?e.user_condition.gridCondition:null},null,8,["url","schemaID","fnClone","fnEdit","fnQuickEdit","fnView","actions","dblClick","onRowSelect","permissions","page_id","custom_condition","user_condition"])):P("",!0)],2)])])])]),s(f,{visible:i.openSlidePanel,"onUpdate:visible":d[0]||(d[0]=h=>i.openSlidePanel=h),class:"create",maskClosable:!1,title:e.title,forceRender:!0,width:this.form_width,placement:"right"},{footer:r(()=>[]),default:r(()=>[s(u,{ref:"form",hideTitle:!0,schemaID:e.form,title:e.title,url:e.url,editMode:e.editMode,onSuccess:e.onSuccess,onReady:e.onReady,do_render:i.openSlidePanel,permissions:e.permissions,page_id:e.page_id,user_condition:e.user_condition?e.user_condition.formCondition:null,onError:e.onError,close:a.hideSide},null,8,["schemaID","title","url","editMode","onSuccess","onReady","do_render","permissions","page_id","user_condition","onError","close"])]),_:1},8,["visible","title","width"])])}const W=v(R,[["render",A]]);export{W as default};
