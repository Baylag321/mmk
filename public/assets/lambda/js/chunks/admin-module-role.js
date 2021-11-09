"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6620],{34669:(e,s,t)=>{t.d(s,{Z:()=>l});const i={props:["data","menuIndex","cruds","permissions"],components:{},computed:{lang(){const e=["pleaseWait","_form","value_column","list_grid","Custom_column","Judgment_column","","","",""];return e.reduce(((s,t,i)=>(s[t]=this.$t("adminModule."+e[i]),s)),{})},_alert(){const e=["please_wait","form_value","alertSelectColumns","errorMsg"];return e.reduce(((s,t,i)=>(s[t]=this.$t("alertMessage."+e[i]),s)),{})}},data:()=>({loading:!0,extend:!1,formUser:null,gridUser:null,formField:null,gridField:null,user_fields:[],grid_fields:[],form_fields:[],gridCondition:[],formCondition:[]}),methods:{addFrom(){this.formUser&&this.formField?(this.formCondition.push({user_field:this.formUser,form_field:this.formField}),this.formField=null,this.formUser=null,this.updateValue()):this.$Message.error(`${this._alert.alertSelectColumns}`)},deleteFrom(e){this.formCondition.splice(e,1),this.updateValue()},deleteGrid(e){this.gridCondition.splice(e,1),this.updateValue()},addGrid(){this.gridUser&&this.gridField?(this.gridCondition.push({user_field:this.gridUser,grid_field:this.gridField}),this.gridField=null,this.gridUser=null,this.updateValue()):this.$Message.error(`${this._alert.alertSelectColumns}`)},updateValue(){this.permissions[this.data.id].formCondition=this.formCondition,this.permissions[this.data.id].gridCondition=this.gridCondition},showUserData(){this.extend?this.extend=!1:(this.extend=!0,this.loading=!0,axios.get("/lambda/puzzle/get-krud-fields/"+this.data.url).then((e=>{this.loading=!1,e.status&&(this.user_fields=e.data.user_fields,this.grid_fields=e.data.grid_fields,this.form_fields=e.data.form_fields,this.permissions[this.data.id].formCondition&&(this.formCondition=this.permissions[this.data.id].formCondition),this.permissions[this.data.id].gridCondition&&(this.gridCondition=this.permissions[this.data.id].gridCondition))})).catch((e=>{this.loading=!1,this.$Message.error(`${this._alert.errorMsg}`)})))},getIndex(e){let s=[e];return this.menuIndex.concat(s)},element:()=>t(34669).Z,getTitle(e){if("crud"==e.link_to){let s=this.cruds.findIndex((s=>s.id==e.url));return s>=0?this.cruds[s].title:""}return e.title},changePermissionPre(e,s){this.$emit("changePermission",e,this.data.id,s)},changePermission(e,s,t){this.$emit("changePermission",e,s,t)}}};const l=(0,t(51900).Z)(i,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("li",{staticClass:"menu-tree-item",attrs:{"data-link_to":e.data.link_to,"data-url":e.data.url,"data-title":e.data.title,"data-icon":e.data.icon,"data-c":e.data.c,"data-r":e.data.r,"data-u":e.data.u,"data-d":e.data.d}},[t("div",{staticClass:"clickable sortDiv"},[t("div",{staticClass:"menu-icon"},[t("i",{class:e.data.icon})]),e._v(" "),t("div",{staticClass:"menu-title"},[t("span",{domProps:{innerHTML:e._s(e.getTitle(e.data))}}),e._v("\n\n            | "),t("span",{staticClass:"link-to"},[e._v("\n            "+e._s(e.data.link_to)+"\n            "),"crud"!=e.data.link_to&&"noAction"!=e.data.link_to?t("span",[e._v("\n                | "+e._s(e.data.url)+"\n            ")]):e._e()])]),e._v(" "),t("div",{staticClass:"menu-control"},[t("span",[e._v(" ")]),e._v(" "),"crud"==e.data.link_to?t("span",[t("Checkbox",{attrs:{disabled:!e.permissions[e.data.id].show},model:{value:e.permissions[e.data.id].c,callback:function(s){e.$set(e.permissions[e.data.id],"c",s)},expression:"permissions[data.id].c"}},[e._v("C")]),e._v(" "),t("Checkbox",{attrs:{disabled:!e.permissions[e.data.id].show},model:{value:e.permissions[e.data.id].r,callback:function(s){e.$set(e.permissions[e.data.id],"r",s)},expression:"permissions[data.id].r"}},[e._v("R")]),e._v(" "),t("Checkbox",{attrs:{disabled:!e.permissions[e.data.id].show},model:{value:e.permissions[e.data.id].u,callback:function(s){e.$set(e.permissions[e.data.id],"u",s)},expression:"permissions[data.id].u"}},[e._v("U")]),e._v(" "),t("Checkbox",{attrs:{disabled:!e.permissions[e.data.id].show},model:{value:e.permissions[e.data.id].d,callback:function(s){e.$set(e.permissions[e.data.id],"d",s)},expression:"permissions[data.id].d"}},[e._v("D")]),e._v(" "),t("Button",{attrs:{type:"text",size:"small",icon:e.extend?"ios-arrow-down":"ios-arrow-forward"},on:{click:e.showUserData}})],1):e._e(),e._v(" "),t("i-switch",{attrs:{size:"small"},on:{"on-change":function(s){return e.changePermissionPre("show",s)}},model:{value:e.permissions[e.data.id].show,callback:function(s){e.$set(e.permissions[e.data.id],"show",s)},expression:"permissions[data.id].show"}})],1)]),e._v(" "),e.data.children&&e.data.children.length>=1?t("ul",{staticClass:"dd-list"},e._l(e.data.children,(function(s,i){return t(e.element(),{key:i,tag:"component",attrs:{menuIndex:e.getIndex(i),data:s,cruds:e.cruds,permissions:e.permissions}})})),1):e._e(),e._v(" "),e.extend?t("div",{staticClass:"user-data"},[e.loading?t("div",{staticClass:"loader"},[t("div",{staticClass:"loader-wrapper"},[e._m(0),e._v(" "),t("h3",[e._v(e._s(e.lang.pleaseWait))])])]):e._e(),e._v(" "),e.loading?e._e():t("Row",[t("Col",{attrs:{span:"12"}},[e._v("\n                "+e._s(e.lang.form_value)+") "),t("br"),e._v(" "),t("div",[t("Row",[t("Col",{attrs:{span:"10"}},[t("Select",{attrs:{filterable:"",placeholder:e.lang.Custom_column},model:{value:e.formUser,callback:function(s){e.formUser=s},expression:"formUser"}},e._l(e.user_fields,(function(s){return t("Option",{key:s,attrs:{value:s}},[e._v(e._s(s))])})),1)],1),e._v(" "),t("Col",{attrs:{span:"10"}},[t("Select",{attrs:{filterable:"",placeholder:e.lang.Judgment_column},model:{value:e.formField,callback:function(s){e.formField=s},expression:"formField"}},e._l(e.form_fields,(function(s){return t("Option",{key:s,attrs:{value:s}},[e._v(e._s(s))])})),1)],1),e._v(" "),t("Col",{attrs:{span:"4"}},[t("Button",{attrs:{type:"primary",shape:"circle",icon:"md-add"},on:{click:e.addFrom}})],1)],1)],1),e._v(" "),t("div",e._l(e.formCondition,(function(s,i){return t("Row",{key:i},[t("Col",{attrs:{span:"10"}},[e._v("\n                           "+e._s(s.user_field)+"\n                       ")]),e._v(" "),t("Col",{attrs:{span:"10"}},[e._v("\n                           "+e._s(s.form_field)+"\n                       ")]),e._v(" "),t("Col",{attrs:{span:"4"}},[t("Button",{attrs:{type:"primary",shape:"circle",icon:"ios-trash"},on:{click:function(s){return e.deleteFrom(i)}}})],1)],1)})),1)]),e._v(" "),t("Col",{attrs:{span:"12"}},[e._v("\n                "+e._s(e.lang.list_grid)+"\n                "),t("br"),e._v(" "),t("div",[t("Row",[t("Col",{attrs:{span:"10"}},[t("Select",{attrs:{filterable:"",placeholder:e.lang.Custom_column},model:{value:e.gridUser,callback:function(s){e.gridUser=s},expression:"gridUser"}},e._l(e.user_fields,(function(s){return t("Option",{key:s,attrs:{value:s}},[e._v(e._s(s))])})),1)],1),e._v(" "),t("Col",{attrs:{span:"10"}},[t("Select",{attrs:{filterable:"",placeholder:e.lang.value_column},model:{value:e.gridField,callback:function(s){e.gridField=s},expression:"gridField"}},e._l(e.grid_fields,(function(s){return t("Option",{key:s,attrs:{value:s}},[e._v(e._s(s))])})),1)],1),e._v(" "),t("Col",{attrs:{span:"4"}},[t("Button",{attrs:{type:"primary",shape:"circle",icon:"md-add"},on:{click:e.addGrid}})],1)],1)],1),e._v(" "),t("div",e._l(e.gridCondition,(function(s,i){return t("Row",{key:i},[t("Col",{attrs:{span:"10"}},[e._v("\n                            "+e._s(s.user_field)+"\n                        ")]),e._v(" "),t("Col",{attrs:{span:"10"}},[e._v("\n                            "+e._s(s.grid_field)+"\n                        ")]),e._v(" "),t("Col",{attrs:{span:"4"}},[t("Button",{attrs:{type:"primary",shape:"circle",icon:"ios-trash"},on:{click:function(s){return e.deleteGrid(i)}}})],1)],1)})),1)])],1)],1):e._e()])}),[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"lds-roller"},[t("div"),e._v(" "),t("div"),e._v(" "),t("div"),e._v(" "),t("div"),e._v(" "),t("div"),e._v(" "),t("div"),e._v(" "),t("div"),e._v(" "),t("div")])}],!1,null,null,null).exports},32107:(e,s,t)=>{t.r(s),t.d(s,{default:()=>l});const i={components:{MenuItem:t(34669).Z},name:"roles",data:()=>({roles:[],menus:[],cruds:[],selectedMenu:null,menuIndex:null,selectedRole:null,loading:!0,showRoleForm:!1,loadingForm:!1,roleForm:{name:"",display_name:"",description:""},extra:{datasourcce:!1,moqup:!1,chart:!1,userlist:!1,excelupload:!1,approve:!1,hascustomcreatebtn:!1},editID:null,ruleRole:{name:[{required:!0,message:"Нэр оруулна уу",trigger:"blur"}],display_name:[{required:!0,message:"Харагдах нэр оруулна уу",trigger:"blur"}]}}),methods:{getMenuUrl(e){let s="#/p/"+e;if(this.selectedMenu){this.selectedMenu.items.findIndex((s=>s.id==e))>=0?s="#/p/"+e:this.selectedMenu.items.forEach((t=>{t.children.findIndex((s=>s.id==e))>=0?s="#/p/"+t.id+"/"+e:t.children.forEach((i=>{i.children.findIndex((s=>s.id==e))>=0&&(s="#/p/"+t.id+"/"+i.id+"/"+e)}))}))}return s},addRole(){this.showRoleForm=!0},editRole(e){console.log(e),this.roleForm.name=e.name,this.roleForm.display_name=e.display_name,this.roleForm.description=e.description,this.editID=e.id,this.showRoleForm=!0},deleteRole(e){axios.delete(`/lambda/puzzle/roles/destroy/${e}`).then((e=>{this.$Message.success(`${this._form.successDeleted}`),this.getData()})).catch((e=>{this.loadingForm=!1,this.$Message.error(`${this._form.errorSaving}`)}))},saveRoleForm(){this.$refs.roleForm.validate((e=>{if(e){this.loadingForm=!0;let e=this.editID?`/lambda/puzzle/roles/store/${this.editID}`:"/lambda/puzzle/roles/create";axios.post(e,{...this.roleForm}).then((e=>{this.getData(),this.closeRole(),this.$Message.success(`${this._form.savedSuccessfull}`)})).catch((e=>{this.loadingForm=!1,this.$Message.error(`${this._form.errorSaving}`)}))}}))},closeRole(){this.showRoleForm=!1,this.editID=null,this.loadingForm=!1,this.roleForm={name:"",display_name:"",description:""},this.selectedMenu=null,this.menuIndex=null,this.selectedRole=null},getData(){this.loading=!0,axios.get("/lambda/puzzle/roles-menus").then((e=>{e.data.status&&(this.roles=e.data.roles.map((e=>(null!=e.permissions&&""!=e.permissions&&(e.permissions=JSON.parse(e.permissions)),e))),this.cruds=e.data.cruds,this.menus=e.data.menus.map(((e,s)=>{let t=JSON.parse(e.schema);return{id:e.id,menuIndex:s,title:e.name,items:t}})),this.loading=!1)}))},selectMenu(e){this.selectedMenu=this.menus[e],e>=0?this.initPermissions({}):this.roles[this.selectedRole].permissions={menu_id:null,default_menu:null,permissions:{},extra:{datasource:!1,moqup:!1,chart:!1,userlist:!1,excelupload:!1,approve:!1,hascustomcreatebtn:!1}}},disSelectRole(){this.selectedMenu=null,this.menuIndex=null,this.extra={datasource:!1,moqup:!1,chart:!1},this.roles[this.selectedRole].permissions={menu_id:null,default_menu:null,permissions:{},extra:{datasource:!1,moqup:!1,chart:!1,userlist:!1,excelupload:!1,approve:!1,hascustomcreatebtn:!1}}},selectRole(e){if(this.selectedRole=e,null===this.roles[this.selectedRole].permissions||""==this.roles[this.selectedRole].permissions)this.disSelectRole();else{let e=this.menus.findIndex((e=>e.id==this.roles[this.selectedRole].permissions.menu_id));e>=0?(this.selectedMenu=null,setTimeout((()=>{this.selectedMenu=JSON.parse(JSON.stringify(this.menus[e])),this.menuIndex=e,this.initPermissions(this.roles[this.selectedRole].permissions.permissions,this.roles[this.selectedRole].permissions.default_menu)}),100)):this.disSelectRole()}},changePermission(e,s,t){},initPermissions(e,s){let t=this.roles[this.selectedRole].permissions,i=null;i=t.extra?{...t.extra}:{...this.extra},this.roles[this.selectedRole].permissions={menu_id:this.selectedMenu.id,default_menu:s,permissions:this.getPermissions(e||{},this.selectedMenu.items),extra:i}},getPermissions(e,s){let t={};return s.map((s=>{if(e.hasOwnProperty(s.id)?t[s.id]={...e[s.id]}:"crud"==s.link_to?t[s.id]={menu_id:s.id,c:!1,r:!1,u:!1,d:!1,show:!1,title:this.getTitle(s)}:t[s.id]={menu_id:s.id,show:!1,title:this.getTitle(s)},s.children.length>=1){let i=this.getPermissions(e,s.children);t={...t,...i}}})),t},saveRole(){this.roles[this.selectedRole].permissions?this.roles[this.selectedRole].permissions.default_menu?axios.post("/lambda/puzzle/save-role",{id:this.roles[this.selectedRole].id,permissions:this.roles[this.selectedRole].permissions,extra:{...this.extra}}).then((e=>{this.$Message.success(`${this._form.savedSuccessfull}`)})).catch((e=>{this.$Message.error(`${this._form.errorSaving}`)})):this.$Message.error(`${this._form.selectDefaultMenu}`):this.$Message.error(`${this._form.selectMenu}`)},getTitle(e){if("crud"==e.link_to){let s=this.cruds.findIndex((s=>s.id==e.url));return s>=0?this.cruds[s].title:""}return e.title}},mounted(){this.getData()},watch:{},computed:{lang(){const e=["administraationRightsManagment","add","pleaseWait","pleaseSelectRole","save","role","name","displayName","note","cancel","menuSelection","defaultMenu","additional","dataSource","chart","userList","import","register","confirm"];return e.reduce(((s,t,i)=>(s[t]=this.$t("role."+e[i]),s)),{})},_form(){const e=["savedSuccessfull","errorSaving","selectDefaultMenu","selectMenu","successDeleted"];return e.reduce(((s,t,i)=>(s[t]=this.$t("alertMessage."+e[i]),s)),{})},permissions(){return null!==this.selectedRole&&this.roles[this.selectedRole].permissions?this.roles[this.selectedRole].permissions.permissions:{}},currentRole(){return null!==this.selectedRole?this.roles[this.selectedRole]:null}}};const l=(0,t(51900).Z)(i,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{staticClass:"page"},[t("paper-header",{staticClass:"mini"},[t("user-control",{attrs:{slot:"right"},slot:"right"}),e._v(" "),t("div",{attrs:{slot:"nav"},slot:"nav"},[t("ul",[t("li",[t("router-link",{attrs:{to:"/role"}},[t("i",{staticClass:"ti-user"}),e._v(" "),t("span",[e._v(e._s(e.lang.administraationRightsManagment))])])],1)])])],1),e._v(" "),t("section",{staticClass:"paper-page-body"},[t("div",{staticClass:"role-control"},[e.loading?t("div",{staticClass:"loader"},[t("div",{staticClass:"loader-wrapper"},[e._m(0),e._v(" "),t("h3",[e._v(e._s(e.lang.pleaseWait))])])]):e._e(),e._v(" "),t("div",{staticClass:"role-list"},[t("Button",{attrs:{icon:"md-add",type:"success",long:""},on:{click:e.addRole}},[e._v(e._s(e.lang.add))]),e._v(" "),t("ul",e._l(e.roles,(function(s,i){return t("li",{key:i,class:i==e.selectedRole?"active":""},[t("span",{staticClass:"role_name",on:{click:function(s){return e.selectRole(i)}}},[e._v("\n                            "+e._s(s.display_name)+"\n                        ")]),e._v(" "),t("Button",{staticClass:"edit-btn",attrs:{shape:"circle",icon:"md-create",size:"small"},on:{click:function(t){return e.editRole(s)}}}),e._v(" "),t("Button",{attrs:{shape:"circle",icon:"ios-trash",size:"small"},on:{click:function(t){return e.deleteRole(s.id)}}})],1)})),0)],1),e._v(" "),t("div",{staticClass:"role-config"},[null!=e.selectedRole?t("div",{attrs:{id:"menu-tree"}},[t("Select",{staticStyle:{width:"300px"},attrs:{clearable:"",placeholder:e.lang.menuSelection},on:{"on-change":e.selectMenu},model:{value:e.menuIndex,callback:function(s){e.menuIndex=s},expression:"menuIndex"}},e._l(e.menus,(function(s){return t("Option",{key:s.menuIndex,attrs:{value:s.menuIndex}},[e._v(e._s(s.title)+"\n                        ")])})),1),e._v(" "),Object.keys(e.permissions).length>=1?t("Select",{staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:e.lang.defaultMenu},model:{value:e.roles[e.selectedRole].permissions.default_menu,callback:function(s){e.$set(e.roles[e.selectedRole].permissions,"default_menu",s)},expression:"roles[selectedRole].permissions.default_menu"}},e._l(Object.keys(e.permissions),(function(s){return e.permissions[s].show?t("Option",{key:e.permissions[s].menu_id,attrs:{value:e.getMenuUrl(e.permissions[s].menu_id)}},[e._v(e._s(e.permissions[s].title)+"\n                        ")]):e._e()})),1):e._e(),e._v(" "),t("Button",{attrs:{icon:"android-done",type:"success"},on:{click:e.saveRole}},[e._v(e._s(e.lang.save))]),e._v(" "),null!=e.selectedMenu?t("ul",{staticClass:"menuTree listsClass"},e._l(e.selectedMenu.items,(function(s,i){return t("MenuItem",{key:i,attrs:{data:s,menuIndex:[i],cruds:e.cruds,permissions:e.permissions}})})),1):e._e(),e._v(" "),t("div",{staticClass:"advanced"},[t("h4",[e._v(e._s(e.lang.additional))]),e._v(" "),t("Checkbox",{attrs:{size:"large"},model:{value:e.roles[e.selectedRole].permissions.extra.datasource,callback:function(s){e.$set(e.roles[e.selectedRole].permissions.extra,"datasource",s)},expression:"roles[selectedRole].permissions.extra.datasource"}},[t("span",[e._v(e._s(e.lang.dataSource))])]),e._v(" "),t("Checkbox",{attrs:{size:"large"},model:{value:e.roles[e.selectedRole].permissions.extra.moqup,callback:function(s){e.$set(e.roles[e.selectedRole].permissions.extra,"moqup",s)},expression:"roles[selectedRole].permissions.extra.moqup"}},[t("span",[e._v("Moqup")])]),e._v(" "),t("Checkbox",{attrs:{size:"large"},model:{value:e.roles[e.selectedRole].permissions.extra.chart,callback:function(s){e.$set(e.roles[e.selectedRole].permissions.extra,"chart",s)},expression:"roles[selectedRole].permissions.extra.chart"}},[t("span",[e._v(e._s(e.lang.chart))])]),e._v(" "),t("Checkbox",{attrs:{size:"large"},model:{value:e.roles[e.selectedRole].permissions.extra.userlist,callback:function(s){e.$set(e.roles[e.selectedRole].permissions.extra,"userlist",s)},expression:"roles[selectedRole].permissions.extra.userlist"}},[t("span",[e._v(e._s(e.lang.userList))])]),e._v(" "),t("Checkbox",{attrs:{size:"large"},model:{value:e.roles[e.selectedRole].permissions.extra.excelupload,callback:function(s){e.$set(e.roles[e.selectedRole].permissions.extra,"excelupload",s)},expression:"roles[selectedRole].permissions.extra.excelupload"}},[t("span",[e._v(e._s(e.lang.import))])]),e._v(" "),t("Checkbox",{attrs:{size:"large"},model:{value:e.roles[e.selectedRole].permissions.extra.hascustomcreatebtn,callback:function(s){e.$set(e.roles[e.selectedRole].permissions.extra,"hascustomcreatebtn",s)},expression:"roles[selectedRole].permissions.extra.hascustomcreatebtn"}},[t("span",[e._v(e._s(e.lang.register))])]),e._v(" "),t("Checkbox",{attrs:{size:"large"},model:{value:e.roles[e.selectedRole].permissions.extra.approve,callback:function(s){e.$set(e.roles[e.selectedRole].permissions.extra,"approve",s)},expression:"roles[selectedRole].permissions.extra.approve"}},[t("span",[e._v(e._s(e.lang.confirm))])])],1)],1):e._e(),e._v(" "),null===e.selectedRole?t("Alert",{attrs:{type:"info"}},[e._v("\n                    "+e._s(e.lang.pleaseSelectRole)+"\n                ")]):e._e(),e._v(" "),t("Modal",{attrs:{title:e.lang.role},model:{value:e.showRoleForm,callback:function(s){e.showRoleForm=s},expression:"showRoleForm"}},[t("Form",{ref:"roleForm",attrs:{model:e.roleForm,rules:e.ruleRole}},[t("FormItem",{attrs:{prop:"name"}},[t("Input",{attrs:{type:"text",placeholder:e.lang.name},model:{value:e.roleForm.name,callback:function(s){e.$set(e.roleForm,"name",s)},expression:"roleForm.name"}})],1),e._v(" "),t("FormItem",{attrs:{prop:"display_name"}},[t("Input",{attrs:{type:"text",placeholder:e.lang.displayName},model:{value:e.roleForm.display_name,callback:function(s){e.$set(e.roleForm,"display_name",s)},expression:"roleForm.display_name"}})],1),e._v(" "),t("FormItem",{attrs:{prop:"description"}},[t("Input",{attrs:{type:"textarea",placeholder:e.lang.note},model:{value:e.roleForm.description,callback:function(s){e.$set(e.roleForm,"description",s)},expression:"roleForm.description"}})],1),e._v(" "),t("FormItem",[t("Button",{attrs:{type:"primary",loading:e.loadingForm},on:{click:e.saveRoleForm}},[e._v(e._s(e.lang.save))]),e._v(" "),t("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"info"},on:{click:e.closeRole}},[e._v(e._s(e.lang.cancel))])],1)],1),e._v(" "),t("footer",{attrs:{slot:"footer"},slot:"footer"})],1)],1)])])],1)}),[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"lds-roller"},[t("div"),e._v(" "),t("div"),e._v(" "),t("div"),e._v(" "),t("div"),e._v(" "),t("div"),e._v(" "),t("div"),e._v(" "),t("div"),e._v(" "),t("div")])}],!1,null,null,null).exports}}]);