import{m as v,c as C,K as _}from"./mixin.7c06dec4.js";import{a as q}from"./entry.2f722340.js";import{Z as t,_ as a,c as l,a4 as u,$ as E,a3 as d,a0 as o,a2 as P,a6 as p,U as n}from"./vue.8df9dc4e.js";import"./common.ee65b9fa.js";import"./ant.37833f30.js";import"./moment.8b5e7d95.js";import"./ag.6f4f687c.js";import"./lodash.9ef015a0.js";import"./numeral.d58f1efd.js";import"./cryptoJs.bc7a374e.js";const $={inheritAttrs:!1,name:"Canvas",mixins:[v],data(){return{form_width:800,openSlidePanel:!1,exportLoading:!1}},computed:{path(){return this.$route.fullPath}},components:{common:C,Krudtools:_},methods:{hideSide(){this.openSlidePanel=!1,this.$router.push({query:this.getQuery()}),this.editMode=!1},openSide(){let e=this.getQuery();e.add=!0,this.$router.push({query:e}),this.openSlidePanel=!0},templateEdit(e){let i=this.getQuery();i.edit=!0,i.id=e,this.$route.params.id&&this.$route.query.edit?this.$route.params.id.toString()!==e.toString()&&this.$router.push({query:i}):this.$router.push({query:i})},templateOnSuccess(){this.hideSide()},handleChange(){let e=this.$route.query.add,i=this.$route.query.edit,c=this.$route.query.id;e==="true"||e===!0?this.openSlidePanel=!0:i==="true"||i===!0?(this.rowId=c,this.editMode=!0,this.openSlidePanel=!0):(this.rowId=0,this.editMode=!1,this.openSlidePanel=!1)},getQuery(){let e={};return this.$route.query.sort&&(e.sort=this.$route.query.sort),this.$route.query.order&&(e.order=this.$route.query.order),this.$route.query.paginate&&(e.paginate=this.$route.query.paginate),this.$route.query.currentPage&&(e.currentPage=this.$route.query.currentPage),e}},watch:{path(){this.handleChange()}},beforeMount(){this.handleChange()}},k={class:"card drawer-wrappper window-crud"},M={class:"offcanvas-template"},U={class:"crud-page"},b={class:"crud-page-body"},I={key:0,class:""},L={class:"ant-drawer-content"},R={class:"ant-drawer-wrapper-body"},Q={class:"ant-drawer-header"},A={class:"ant-drawer-header-title"},B={class:"ant-drawer-title"},D=o("span",{role:"img","aria-label":"close",class:"anticon anticon-close"},[o("svg",{focusable:"false",class:"","data-icon":"close",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",viewBox:"64 64 896 896"},[o("path",{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"})])],-1),V=[D],K={class:"ant-drawer-body"},N={key:1,id:"drawer-container"};function z(e,i,c,O,r,s){const h=n("common"),m=n("Krudtools"),f=n("portal"),g=n("dataform"),w=n("crud-log"),y=n("datagrid");return t(),a("div",k,[l(h,{parent:e.parent,title:e.title,addAction:s.openSide,"hide-action":r.openSlidePanel,permissions:e.permissions},null,8,["parent","title","addAction","hide-action","permissions"]),r.openSlidePanel?d("",!0):(t(),u(f,{key:0,to:"header-right"},{default:E(()=>[l(m,{search:e.search,refresh:e.refresh,exportExcel:e.exportExcel,exportLoading:r.exportLoading,print:e.print,save:e.save,isPrint:e.isPrint,isExcel:e.isExcel,isExcelUpload:e.isExcelUpload,excelUploadCustomUrl:e.excelUploadCustomUrl,excelUploadMethod:e.excelUploadMethod,isRefresh:e.isRefresh,isSave:e.isSave,isSearch:!1},null,8,["search","refresh","exportExcel","exportLoading","print","save","isPrint","isExcel","isExcelUpload","excelUploadCustomUrl","excelUploadMethod","isRefresh","isSave"])]),_:1})),o("section",M,[o("div",U,[o("div",b,[r.openSlidePanel?(t(),a("div",I,[o("div",L,[o("div",R,[o("div",Q,[o("div",A,[o("div",B,P(e.title),1),o("button",{"aria-label":"Close",onClick:i[0]||(i[0]=(...S)=>s.hideSide&&s.hideSide(...S)),class:"ant-drawer-close"},V)])]),o("div",K,[o("div",{class:p(e.withCrudLog&&e.editMode?"with-crud-log":"crud-form")},[l(g,{ref:"form",hideTitle:!0,schemaID:e.form,title:e.title,url:e.url,editMode:e.editMode,onSuccess:s.templateOnSuccess,onReady:e.onReady,do_render:r.openSlidePanel,permissions:e.permissions,page_id:e.page_id,user_condition:e.user_condition?e.user_condition.formCondition:null,onError:e.onError,close:s.hideSide},null,8,["schemaID","title","url","editMode","onSuccess","onReady","do_render","permissions","page_id","user_condition","onError","close"]),e.withCrudLog&&e.editMode?(t(),u(w,{key:0,form:e.form,rowId:e.rowId,grid:e.grid},null,8,["form","rowId","grid"])):d("",!0)],2)])])])])):d("",!0),r.openSlidePanel?d("",!0):(t(),a("div",N,[o("div",{class:p(r.openSlidePanel?"dg-flex open-drawer":"dg-flex")},[e.permissions&&e.permissions.r?(t(),u(y,{key:0,ref:"grid",url:e.url,schemaID:e.grid,paginate:50,fnClone:e.clone,fnEdit:s.templateEdit,fnQuickEdit:e.quickEdit,fnView:e.view,actions:e.$props.actions,dblClick:e.$props.dbClickAction,onRowSelect:e.$props.onRowSelect,permissions:e.permissions,page_id:e.page_id,custom_condition:e.$props.custom_condition?e.$props.custom_condition:null,user_condition:e.user_condition?e.user_condition.gridCondition:null},null,8,["url","schemaID","fnClone","fnEdit","fnQuickEdit","fnView","actions","dblClick","onRowSelect","permissions","page_id","custom_condition","user_condition"])):d("",!0)],2)]))])])])])}const x=q($,[["render",z]]);export{x as default};
