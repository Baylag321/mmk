"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4843],{57203:(t,e,s)=>{s.d(e,{Z:()=>r});const i={props:["refresh","exportExcel","print","search","save","options","isExcel","isPrint","isRefresh","isSave","isSearch","exportLoading"],data:()=>({searchModel:null}),computed:{lang(){const t=["_save","re_call","_print","download_file"];return t.reduce(((e,s,i)=>(e[s]=this.$t("crud."+t[i]),e)),{})}},methods:{searchGrid(t){t.preventDefault(),this.$props.search(this.searchModel)}}};const r={props:["title","icon","main_tab_title","grid","form","projects_id","hideHeader","hasSelection","actions","dbClickAction","onRowSelect","rowCurrentChange","permissions","user_condition","custom_condition","view_url","mode","onPropertySuccess","onPropertyError","page_id","withoutHeader","withCrudLog"],components:{krudtools:(0,s(51900).Z)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"crud-page-header-right-inside"},[s("Tooltip",{attrs:{content:t.lang._save}},[t.isSave?s("a",{staticClass:"btnLine",on:{click:t.$props.save}},[s("i",{staticClass:"ti-save"})]):t._e()]),t._v(" "),s("Tooltip",{attrs:{content:t.lang.re_call}},[t.isRefresh?s("a",{staticClass:"btnLine",on:{click:t.$props.refresh}},[s("i",{staticClass:"ti-reload"})]):t._e()]),t._v(" "),t.isPrint?s("Tooltip",{attrs:{content:t.lang._print}},[s("a",{staticClass:"btnLine",on:{click:t.$props.print}},[s("i",{staticClass:"ti-printer"})])]):t._e(),t._v(" "),t.isExcel?s("Tooltip",{attrs:{content:t.lang.download_file}},[t.$props.exportLoading?s("a",{staticClass:"btnLine",attrs:{href:"javascript:void(0)"}},[s("Spin",[s("Icon",{staticClass:"spin-icon-load",attrs:{type:"ios-loading",size:"18"}})],1)],1):s("a",{staticClass:"btnLine",on:{click:t.$props.exportExcel}},[s("i",{staticClass:"ti-download"})])]):t._e(),t._v(" "),t.isSearch?s("form",{on:{submit:t.searchGrid}},[s("div",{staticClass:"right-search"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchModel,expression:"searchModel"}],staticClass:"right-search-input",attrs:{placeholder:t.$static_words?t.$static_words.search:"Хайх..."},domProps:{value:t.searchModel},on:{input:function(e){e.target.composing||(t.searchModel=e.target.value)}}}),t._v(" "),s("i",{staticClass:"ti-search"})])]):t._e()],1)}),[],!1,null,null,null).exports},data:()=>({closeByBtn:window.init.closeByBtn,gridSrc:"",formSrc:"",editMode:!1,searchModel:"",form_width:600,exportLoading:!1,isPrint:!1,isExcel:!1,isRefresh:!1,isSave:!1,rowId:null}),computed:{hasVNavSlot(){return!!this.$slots["v-nav"]},hasNavSlot(){return!!this.$slots.nav},hasLeftSlot(){return!!this.$slots.left}},methods:{view(t){this.rowId=t,this.editMode=!0,this.$refs.form.viewMode=!0,this.$refs.form.editModel(t),this.templateEdit&&this.templateEdit()},edit(t){this.rowId=t,this.editMode=!0,this.$refs.form.editModel(t),this.templateEdit&&this.templateEdit()},clone(t){this.$refs.form.cloneModel(t),this.templateEdit&&this.templateEdit()},quickEdit(t){console.log(t)},refresh(){this.searchModel=null,this.$refs.grid.refresh()},search(t){this.$refs.grid.searchData(t,1)},stopLoading(t){this.exportLoading=!1,t||this.$Message.error("Татах үед алдаа гарлаа!")},exportExcel(){this.exportLoading=!0,this.$refs.grid.exportExcel(this.stopLoading)},print(){this.$refs.grid.print()},save(){this.$refs.grid.saveGridData()},onSuccess(t){void 0!==this.mode&&this.mode&&"refresh"==this.mode?this.$refs.grid.refresh():this.editMode?this.$refs.grid.update(t):this.$refs.grid.append(t),this.editMode=!1,this.templateOnSuccess&&this.templateOnSuccess(t),this.onPropertySuccess&&this.onPropertySuccess()},onError(t){this.templateOnError&&this.templateOnError(),this.onPropertyError&&this.onPropertyError()}}}},16673:(t,e,s)=>{s.r(e),s.d(e,{default:()=>r});const i={mixins:[s(57203).Z]};const r=(0,s(51900).Z)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"offcanvas-template"},[s("div",{staticClass:"crud-page"},[s("div",{staticClass:"crud-page-header"},[s("div",{staticClass:"crud-page-header-left"},[s("h3",[t._v(t._s(t.$props.title.replace("-"," ")))]),t._v(" "),t._t("tooloptions")],2),t._v(" "),s("div",{staticClass:"crud-page-header-right"},[s("krudtools",{attrs:{search:t.search,refresh:t.refresh,exportExcel:t.exportExcel}})],1)]),t._v(" "),s("div",{staticClass:"crud-page-body"},[s("datagrid",{ref:"grid",attrs:{schemaID:t.grid,paginate:50,fnEdit:t.edit,fnQuickEdit:t.quickEdit,fnView:t.view,actions:t.$props.actions,dblClick:t.$props.dbClickAction,rowCurrentChange:t.$props.rowCurrentChange}})],1)])])}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=krud-progress-list.015dbae201b55fb7.js.map