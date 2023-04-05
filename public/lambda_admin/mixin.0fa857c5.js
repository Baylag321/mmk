import{a as $}from"./entry.e3cd167a.js";import{V as f,Y as o,Z as n,f as l,$ as a,_ as i,a2 as c,F as k,a6 as b,a1 as p,E as m,a0 as x,v as E,aa as M}from"./vue.3f3be479.js";import{a as C}from"./common.194e1616.js";import{h as S}from"./moment.8b5e7d95.js";const I={name:"common",props:["parent","addAction","title","hideAction","permissions"],computed:{lang(){const e=["_add","Information_viewing_history","excelUpload"];return e.reduce((t,s,u)=>(t[s]=this.$t("crud."+e[u]),t),{})}}},L={class:"page-title float-left"},U={class:"float-left pt-3"},D={class:"text-gray-700 dark:text-gray-200 text-base m-0"},P={class:"text-gray-400 text-xs m-0"},A={key:0},Y={key:0,class:"float-left ml-3"},V=i("span",{class:"divider"},null,-1),B={class:"anticon align-top ant-btn-svg-icon",style:{"vertical-align":"top"}},H={class:"page-title mb-3"},N={class:"text-gray-700 dark:text-gray-200 text-base m-0"},F={class:"text-gray-400 text-xs m-0"},R={key:0},G={class:"fixed bottom-14 right-2"},j={class:"settings-btn ant-btn-svg-icon"};function z(e,t,s,u,_,d){const h=f("inline-svg"),g=f("a-button"),y=f("portal-target"),r=f("portal");return o(),n(k,null,[l(r,{to:"header-left"},{default:a(()=>[i("div",L,[i("div",U,[i("h1",D,c(s.title),1),i("h2",P,[(o(!0),n(k,null,b(s.parent,(v,w)=>(o(),n("span",{key:v.index},[w>=1?(o(),n("span",A," / ")):p("",!0),m(c(v.title),1)]))),128))])])]),!s.hideAction&&s.permissions.c?(o(),n("div",Y,[V,l(g,{type:"primary",onClick:s.addAction,shape:"round"},{icon:a(()=>[i("span",B,[l(h,{src:"/assets/icons/duotune/general/gen041.svg"})])]),default:a(()=>[m(" "+c(d.lang._add),1)]),_:1},8,["onClick"])])):p("",!0),l(y,{name:"grid-left"})]),_:1}),l(r,{to:"mobile-page-title"},{default:a(()=>[i("div",H,[i("div",null,[i("h1",N,c(s.title),1),i("h2",F,[(o(!0),n(k,null,b(s.parent,(v,w)=>(o(),n("span",{key:v.index},[w>=1?(o(),n("span",R," / ")):p("",!0),m(c(v.title),1)]))),128))])])])]),_:1}),!s.hideAction&&s.permissions.c?(o(),x(r,{key:0,to:"header-mobile"},{default:a(()=>[i("div",G,[l(g,{type:"primary",onClick:s.addAction,shape:"circle",size:"large"},{icon:a(()=>[i("span",j,[l(h,{src:"/assets/icons/duotune/general/gen041.svg"})])]),_:1},8,["onClick"])])]),_:1})):p("",!0)],64)}const xe=$(I,[["render",z]]),O={props:["refresh","exportExcel","print","search","save","options","isExcel","isExcelUpload","excelUploadCustomUrl","excelUploadMethod","isPrint","isRefresh","isSave","isSearch","exportLoading"],data(){return{searchModel:null}},computed:{lang(){const e=["_save","re_call","_print","download_file","excelUpload"];return e.reduce((t,s,u)=>(t[s]=this.$t("crud."+e[u]),t),{})}},methods:{searchGrid(e){e.preventDefault(),this.$props.search(this.searchModel)}}},K={class:"crud-page-header-right-inside action"},T=i("i",{class:"ti-save"},null,-1),W=[T],q=i("i",{class:"ti-reload"},null,-1),Z=[q],J={class:"svg-icon"},Q=["href"],X=i("i",{class:"ti-layers"},null,-1),ee=[X],te=i("i",{class:"ti-layers"},null,-1),se=[te],ie={key:0,class:"btnLine",href:"javascript:void(0)"},oe={class:"svg-icon"},re={class:"right-search"},ne=["placeholder"],ae=i("i",{class:"ti-search"},null,-1);function le(e,t,s,u,_,d){const h=f("a-tooltip"),g=f("inline-svg"),y=f("a-spin");return o(),n("div",K,[l(h,null,{title:a(()=>[m(c(d.lang._save),1)]),default:a(()=>[s.isSave?(o(),n("a",{key:0,onClick:t[0]||(t[0]=(...r)=>e.$props.save&&e.$props.save(...r)),class:"btnLine"},W)):p("",!0)]),_:1}),l(h,null,{title:a(()=>[m(c(d.lang.re_call),1)]),default:a(()=>[s.isRefresh?(o(),n("a",{key:0,onClick:t[1]||(t[1]=(...r)=>e.$props.refresh&&e.$props.refresh(...r)),class:"btnLine"},Z)):p("",!0)]),_:1}),s.isPrint?(o(),x(h,{key:0},{title:a(()=>[m(c(d.lang._print),1)]),default:a(()=>[i("span",{class:"btn btn-icon",onClick:t[2]||(t[2]=(...r)=>e.$props.print&&e.$props.print(...r))},[i("span",J,[l(g,{src:"/assets/icons/duotone/Devices/Printer.svg"})])])]),_:1})):p("",!0),s.isExcelUpload?(o(),x(h,{key:1},{title:a(()=>[m(c(d.lang.excelUpload),1)]),default:a(()=>[e.$props.excelUploadCustomUrl?(o(),n("a",{key:0,href:e.$props.excelUploadCustomUrl,class:"btnLine"},ee,8,Q)):(o(),n("a",{key:1,onClick:t[3]||(t[3]=(...r)=>e.$props.excelUploadMethod&&e.$props.excelUploadMethod(...r)),class:"btnLine"},se))]),_:1})):p("",!0),s.isExcel?(o(),x(h,{key:2},{title:a(()=>[m(c(d.lang.download_file),1)]),default:a(()=>[e.$props.exportLoading?(o(),n("a",ie,[l(y)])):(o(),n("span",{key:1,class:"btn btn-icon",onClick:t[4]||(t[4]=(...r)=>e.$props.exportExcel&&e.$props.exportExcel(...r))},[i("span",oe,[l(g,{src:"/assets/icons/duotone/Files/Download.svg"})])]))]),_:1})):p("",!0),s.isSearch?(o(),n("form",{key:3,onSubmit:t[6]||(t[6]=(...r)=>d.searchGrid&&d.searchGrid(...r))},[i("div",re,[E(i("input",{"onUpdate:modelValue":t[5]||(t[5]=r=>_.searchModel=r),placeholder:e.$t("dataForm.search"),class:"right-search-input"},null,8,ne),[[M,_.searchModel]]),ae])],32)):p("",!0)])}const ye=$(O,[["render",le]]),de={name:"crudLog",props:["form","grid","rowId"],data(){return{logs:[],reads:[],logColumns:[{title:"\u0411\u04AF\u0440\u0442\u0433\u044D\u043B\u0438\u0439\u043D \u0442\u04E9\u0440\u04E9\u043B",dataIndex:"action",key:"action"},{title:"\u0425\u044D\u0440\u044D\u0433\u043B\u044D\u0433\u0447",dataIndex:"user",key:"user"},{title:"\u041E\u0433\u043D\u043E\u043E",dataIndex:"created_at",key:"created_at"}],readColumns:[{title:"\u0425\u044D\u0440\u044D\u0433\u043B\u044D\u0433\u0447",dataIndex:"user",key:"user"},{title:"\u041E\u0433\u043D\u043E\u043E",dataIndex:"created_at",key:"created_at"}]}},computed:{lang(){const e=["registration_history","Information_viewing_history"];return e.reduce((t,s,u)=>(t[s]=this.$t("crud."+e[u]),t),{})}},methods:{getLog(){this.logs=[],this.reads=[],C.post("/crud_log/history",{schemaId:this.form,rowId:this.rowId}).then(e=>{e.data.forEach(t=>{t.action!=="view"&&this.logs.push({action:t.action=="store"?"\u0411\u04AF\u0440\u0442\u0433\u044D\u0441\u044D\u043D":"\u0417\u0430\u0441\u0441\u0430\u043D",user:t.last_name.charAt(0)+"."+t.first_name,created_at:S(t.created_at).format("YYYY-MM-DD HH:mm:ss")}),t.action==="view"&&this.reads.push({user:t.last_name.charAt(0)+"."+t.first_name,created_at:S(t.created_at).format("YYYY-MM-DD HH:mm:ss")})})})}},watch:{rowId(){this.getLog()}},mounted(){this.getLog()}},ce={class:"crud-log"},he={class:"fieldset"},ue={class:"fieldset"};function _e(e,t,s,u,_,d){const h=f("a-table");return o(),n("div",ce,[i("div",he,[i("legend",null,c(d.lang.registration_history),1),l(h,{columns:_.logColumns,dataSource:_.logs,size:"small",height:_.logs.length>=3?200:100},null,8,["columns","dataSource","height"])]),i("div",ue,[i("legend",null,c(d.lang.Information_viewing_history),1),l(h,{columns:_.readColumns,dataSource:_.reads,size:"small",height:_.reads.length>=3?200:80},null,8,["columns","dataSource","height"])])])}const pe=$(de,[["render",_e]]),we={props:["title","icon","main_tab_title","grid","form","projects_id","hideHeader","hasSelection","actions","dbClickAction","onRowSelect","rowCurrentChange","permissions","user_condition","custom_condition","view_url","mode","onPropertySuccess","onPropertyError","page_id","withoutHeader","withCrudLog","base_url","parent"],components:{crudLog:pe},data(){return{closeByBtn:!0,gridSrc:"",formSrc:"",editMode:!1,searchModel:"",form_width:600,exportLoading:!1,isPrint:!1,isExcel:!1,isRefresh:!1,isSave:!1,rowId:null,visibleDataForm:!1,isExcelUpload:!1,excelUploadCustomUrl:null}},computed:{hasVNavSlot(){return!!this.$slots["v-nav"]},hasNavSlot(){return!!this.$slots.nav},hasLeftSlot(){return!!this.$slots.left},url(){if(this.projects_id!==null&&this.projects_id!=""&&this.projects_id!=null&&window.init.microserviceSettings&&window.init.microserviceSettings.length>=1){let e=window.init.microserviceSettings.findIndex(t=>t.project_id==this.projects_id);if(e>=0)return window.microservice_dev?window.init.microserviceSettings[e].dev_url:window.init.microserviceSettings[e].production_url}return this.base_url?this.base_url:""},lang(){const e=["_add","Information_viewing_history","excelUpload"];return e.reduce((t,s,u)=>(t[s]=this.$t("crud."+e[u]),t),{})}},methods:{view(e){this.rowId=e,this.editMode=!0,this.$refs.form.viewMode=!0,this.$refs.form.editModel(e),this.templateEdit&&this.templateEdit()},edit(e){this.rowId=e,this.editMode=!0,this.$refs.form.editModel(e),this.templateEdit&&this.templateEdit(e)},clone(e){this.$refs.form.cloneModel(e),this.templateEdit&&this.templateEdit(e)},quickEdit(e){console.log(e)},refresh(){this.searchModel=null,this.$refs.grid.refresh()},search(e){this.$refs.grid.searchData(e,1)},stopLoading(e){this.exportLoading=!1,e||this.$Message.error("\u0422\u0430\u0442\u0430\u0445 \u04AF\u0435\u0434 \u0430\u043B\u0434\u0430\u0430 \u0433\u0430\u0440\u043B\u0430\u0430!")},exportExcel(){this.exportLoading=!0,this.$refs.grid.exportExcel(this.stopLoading)},print(){this.$refs.grid.print()},excelUploadMethod(){this.$refs.grid.importExcel()},save(){this.$refs.grid.saveGridData()},onReady(e){window.innerWidth-100>=parseInt(e.width)?this.form_width=e.width:this.form_width=window.innerWidth,this.editMode&&this.rowId!==null&&this.rowId!==void 0&&this.$refs.form.editModel(this.rowId)},onSuccess(e){this.$refs.grid&&(typeof this.mode<"u"&&this.mode&&this.mode==="refresh"?this.$refs.grid.refresh():this.editMode?this.$refs.grid.update(e):this.$refs.grid.append(e)),this.editMode=!1,this.templateOnSuccess&&this.templateOnSuccess(e),this.onPropertySuccess&&this.onPropertySuccess()},onError(){this.templateOnError&&this.templateOnError(),this.onPropertyError&&this.onPropertyError()}}};export{ye as K,xe as c,we as m};
