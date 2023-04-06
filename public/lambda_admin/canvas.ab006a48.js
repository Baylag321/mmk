import{m as C,c as E,K as U}from"./mixin.7c06dec4.js";import{a as k}from"./entry.2f722340.js";import{Z as d,_ as P,c as n,$ as a,a0 as i,a6 as t,a4 as p,a3 as m,U as o}from"./vue.8df9dc4e.js";import"./common.ee65b9fa.js";import"./ant.37833f30.js";import"./moment.8b5e7d95.js";import"./ag.6f4f687c.js";import"./lodash.9ef015a0.js";import"./numeral.d58f1efd.js";import"./cryptoJs.bc7a374e.js";const R={inheritAttrs:!1,name:"Canvas",mixins:[C],data(){return{openSlidePanel:!1,exportLoading:!1}},components:{common:E,Krudtools:U},methods:{hideSide(){this.openSlidePanel=!1,this.editMode=!1},openSide(){this.openSlidePanel=!0},templateEdit(){this.openSide()},templateOnSuccess(){this.hideSide()}}},M={class:"krud-canvas"},b={class:"offcanvas-template"},I={class:"crud-page"},y={class:"crud-page-body"},L={id:"drawer-container"};function V(e,l,A,B,s,r){const c=o("common"),u=o("Krudtools"),f=o("portal"),h=o("datagrid"),g=o("dataform"),S=o("crud-log"),v=o("a-drawer");return d(),P("div",M,[n(c,{parent:e.parent,title:e.title,addAction:r.openSide,permissions:e.permissions},null,8,["parent","title","addAction","permissions"]),n(f,{to:"header-right"},{default:a(()=>[n(u,{search:e.search,refresh:e.refresh,exportExcel:e.exportExcel,exportLoading:s.exportLoading,print:e.print,save:e.save,isPrint:e.isPrint,isExcel:e.isExcel,isExcelUpload:e.isExcelUpload,excelUploadCustomUrl:e.excelUploadCustomUrl,excelUploadMethod:e.excelUploadMethod,isRefresh:e.isRefresh,isSave:e.isSave,isSearch:!1},null,8,["search","refresh","exportExcel","exportLoading","print","save","isPrint","isExcel","isExcelUpload","excelUploadCustomUrl","excelUploadMethod","isRefresh","isSave"])]),_:1}),i("section",b,[i("div",I,[i("div",y,[i("div",L,[i("div",{class:t(s.openSlidePanel?"dg-flex open-drawer":"dg-flex")},[e.permissions&&e.permissions.r?(d(),p(h,{key:0,ref:"grid",url:e.url,schemaID:e.grid,paginate:50,fnClone:e.clone,fnEdit:e.edit,fnQuickEdit:e.quickEdit,fnView:e.view,actions:e.$props.actions,dblClick:e.$props.dbClickAction,onRowSelect:e.$props.onRowSelect,permissions:e.permissions,page_id:e.page_id,custom_condition:e.$props.custom_condition?e.$props.custom_condition:null,user_condition:e.user_condition?e.user_condition.gridCondition:null},null,8,["url","schemaID","fnClone","fnEdit","fnQuickEdit","fnView","actions","dblClick","onRowSelect","permissions","page_id","custom_condition","user_condition"])):m("",!0)],2)])])])]),n(v,{visible:s.openSlidePanel,"onUpdate:visible":l[0]||(l[0]=w=>s.openSlidePanel=w),class:"canvas-drawer",maskClosable:!1,forceRender:!0,title:e.title,width:e.form_width,placement:"right",onClose:r.hideSide},{default:a(()=>[i("div",{class:t(e.withCrudLog&&e.editMode?"with-crud-log":"crud-form")},[n(g,{ref:"form",hideTitle:!0,schemaID:e.form,title:e.title,url:e.url,editMode:e.editMode,onSuccess:e.onSuccess,onReady:e.onReady,do_render:s.openSlidePanel,permissions:e.permissions,page_id:e.page_id,user_condition:e.user_condition?e.user_condition.formCondition:null,onError:e.onError,close:r.hideSide},null,8,["schemaID","title","url","editMode","onSuccess","onReady","do_render","permissions","page_id","user_condition","onError","close"]),e.withCrudLog&&e.editMode?(d(),p(S,{key:0,form:e.form,rowId:e.rowId,grid:e.grid},null,8,["form","rowId","grid"])):m("",!0)],2)]),_:1},8,["visible","title","width","onClose"])])}const Z=k(R,[["render",V]]);export{Z as default};