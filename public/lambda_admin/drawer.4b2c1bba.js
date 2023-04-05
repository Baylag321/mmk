import{m as S,c as E,K as C}from"./mixin.ffd02c14.js";import{a as y}from"./entry.46591473.js";import{Y as r,Z as p,f as d,_ as R,$ as s,a5 as a,a3 as c,a2 as l,a1 as I,F as k,S as i,ah as L,ai as U}from"./vue.13bb76e9.js";import"./ant.ba1bd7fe.js";import"./moment.8b5e7d95.js";import"./cryptoJs.940212dc.js";import"./numeral.ccce3a12.js";import"./common.00ee525f.js";const $={inheritAttrs:!1,name:"Canvas",mixins:[S],data(){return{form_width:800,openSlidePanel:!1,exportLoading:!1,isResizing:!1,m_pos:0}},components:{common:E,Krudtools:C},methods:{hideSide(){this.openSlidePanel=!1,this.editMode=!1,this.$refs.panel.style.width="0px",this.$refs.panel.style.flex="0 0 0px"},openSide(){if(!this.openSlidePanel){this.openSlidePanel=!0;let e=(window.innerWidth-300)/100,o=parseInt(e*40);this.$refs.panel.style.width=o+"px",this.$refs.panel.style.flex=`0 0 ${o+"px"}`}},resize(e){window.getSelection().removeAllRanges();const o=this.m_pos-e.x;this.m_pos=e.x,this.$refs.panel.style.width=parseInt(getComputedStyle(this.$refs.panel,"").width)+o+"px",this.$refs.panel.style.flex=`0 0 ${parseInt(getComputedStyle(this.$refs.panel,"").width)+o+"px"}`},handleResize(){this.$refs.panel.addEventListener("mousedown",o=>{o.offsetX<4&&(this.m_pos=o.x,document.addEventListener("mousemove",this.resize,!1))},!1),document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",this.resize,!1)},!1)},templateEdit(){this.openSide()},templateOnSuccess(){this.hideSide()}},mounted(){this.handleResize()}},m=e=>(L("data-v-6e8986c8"),e=e(),U(),e),P={class:"krud-drawer"},b={class:"offcanvas-template"},M={class:"crud-page"},z={class:"crud-page-body"},B={id:"drawer-container"},D={id:"left_panel"},A=m(()=>s("div",{class:"resizer"},null,-1)),V={class:"ant-drawer-content-wrapper"},K={class:"ant-drawer-content"},N={class:"ant-drawer-wrapper-body"},O={class:"ant-drawer-header"},Z={key:0,class:"ant-drawer-header-title"},F={class:"ant-drawer-title"},Q=m(()=>s("span",{role:"img","aria-label":"close",class:"anticon anticon-close"},[s("svg",{focusable:"false",class:"","data-icon":"close",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",viewBox:"64 64 896 896"},[s("path",{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"})])],-1)),q=[Q],H={class:"ant-drawer-body"};function T(e,o,W,X,n,t){const h=i("common"),u=i("Krudtools"),f=i("portal"),w=i("datagrid"),_=i("dataform"),g=i("crud-log");return r(),p(k,null,[d(h,{parent:e.parent,title:e.title,addAction:t.openSide,permissions:e.permissions},null,8,["parent","title","addAction","permissions"]),d(f,{to:"header-right"},{default:R(()=>[d(u,{search:e.search,refresh:e.refresh,exportExcel:e.exportExcel,exportLoading:n.exportLoading,print:e.print,save:e.save,isPrint:e.isPrint,isExcel:e.isExcel,isExcelUpload:e.isExcelUpload,excelUploadCustomUrl:e.excelUploadCustomUrl,excelUploadMethod:e.excelUploadMethod,isRefresh:e.isRefresh,isSave:e.isSave},null,8,["search","refresh","exportExcel","exportLoading","print","save","isPrint","isExcel","isExcelUpload","excelUploadCustomUrl","excelUploadMethod","isRefresh","isSave"])]),_:1}),s("div",P,[s("section",b,[s("div",M,[s("div",z,[s("div",B,[s("div",D,[s("div",{class:a(n.openSlidePanel?"dg-flex open-drawer":"dg-flex")},[e.permissions&&e.permissions.r?(r(),c(w,{key:0,ref:"grid",url:e.url,schemaID:e.grid,paginate:50,fnClone:e.clone,fnEdit:e.edit,fnQuickEdit:e.quickEdit,fnView:e.view,actions:e.$props.actions,dblClick:e.$props.dbClickAction,onRowSelect:e.$props.onRowSelect,permissions:e.permissions,page_id:e.page_id,custom_condition:e.$props.custom_condition?e.$props.custom_condition:null,user_condition:e.user_condition?e.user_condition.gridCondition:null},null,8,["url","schemaID","fnClone","fnEdit","fnQuickEdit","fnView","actions","dblClick","onRowSelect","permissions","page_id","custom_condition","user_condition"])):l("",!0)],2)]),s("div",{id:"right_panel",class:a(["ant-drawer",n.openSlidePanel?"show-panel":"hide-panel"]),ref:"panel"},[A,s("div",V,[s("div",K,[s("div",N,[s("div",O,[n.openSlidePanel?(r(),p("div",Z,[s("div",F,I(e.title),1),s("button",{"aria-label":"Close",onClick:o[0]||(o[0]=(...v)=>t.hideSide&&t.hideSide(...v)),class:"ant-drawer-close"},q)])):l("",!0)]),s("div",H,[s("div",{class:a(e.withCrudLog&&e.editMode?"with-crud-log":"crud-form")},[d(_,{ref:"form",hideTitle:!0,schemaID:e.form,title:e.title,url:e.url,editMode:e.editMode,onSuccess:e.onSuccess,onReady:e.onReady,do_render:n.openSlidePanel,permissions:e.permissions,page_id:e.page_id,user_condition:e.user_condition?e.user_condition.formCondition:null,onError:e.onError,close:t.hideSide},null,8,["schemaID","title","url","editMode","onSuccess","onReady","do_render","permissions","page_id","user_condition","onError","close"]),e.withCrudLog&&e.editMode?(r(),c(g,{key:0,form:e.form,rowId:e.rowId,grid:e.grid},null,8,["form","rowId","grid"])):l("",!0)],2)])])])])],2)])])])])])],64)}const ie=y($,[["render",T],["__scopeId","data-v-6e8986c8"]]);export{ie as default};
