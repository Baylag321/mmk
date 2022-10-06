"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9937],{80143:(t,e,a)=>{function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}a.d(e,{Z:()=>c});var l=a(22964);const s={props:["title","type","src","preview","prefix"],data:function(){return{duplicateModal:!1,loading:!0,listData:[],filteredList:[],duplicateData:{schema:{},name:null,id:null},tableList:window.init.dbSchema.tableList,viewList:window.init.dbSchema.viewList,reportList:window.init.dbSchema.reportList}},created:function(){this.getData()},computed:{lang:function(){var t=this,e=["add","delete_data"];return e.reduce((function(a,i,l){return a[i]=t.$t("puzzle."+e[l]),a}),{})},lang1:function(){var t=this,e=["pleaseEnterSearchValue","yes","no","copy","name","selectTable","table","basicTable","table_list"];return e.reduce((function(a,i,l){return a[i]=t.$t("components."+e[l]),a}),{})}},methods:{beforeMount:function(){"mn"!=this.selectedLang&&(0,l.loadLanguageAsync)(this.selectedLang)},switchLanguage:function(t){this.selectedLang=t,(0,l.loadLanguageAsync)(t)},getData:function(){var t=this;axios.get(this.$props.src).then((function(e){var a=e.data;t.loading=!1,t.filteredList=t.listData=a.data}))},doDuplicate:function(){var t=this,e="/lambda/puzzle/schema/form";"grid"==this.type&&(e="/lambda/puzzle/schema/grid",this.duplicateData.schema.schema.forEach((function(e){e.table=t.duplicateData.schema.model}))),this.$project&&(e="/lambda/puzzle/project/".concat(this.$project.id,"/form"),"grid"==this.type&&(e="/lambda/puzzle/project/".concat(this.$project.id,"/grid"),this.duplicateData.schema.schema.forEach((function(e){e.table=t.duplicateData.schema.model}))));var a={name:this.duplicateData.name,schema:JSON.stringify(this.duplicateData.schema)};axios.post(e,a).then((function(e){e.data.status?(t.$Notice.success({title:"Амжилттай хадгалагдлаа",desc:'"'.concat(t.formName,'" формын мэдээлэл амжилттай хадгалагдлаа.')}),t.duplicateModal=!1,t.duplicateData={schema:{},name:null,id:null},t.getData()):t.$Notice.error({title:"Хадгалах үед алдаа гарлаа!"})}))},duplicate:function(t,e){var a=this,i="/lambda/puzzle/schema/form/".concat(t,"/builder");"grid"==this.type&&(i="/lambda/puzzle/schema/grid/".concat(t)),this.$project&&(i="/lambda/puzzle/project/".concat(this.$project.id,"/form/").concat(t,"/builder"),"grid"==this.type&&(i="/lambda/puzzle/project/".concat(this.$project.id,"/grid/").concat(t))),axios.get(i).then((function(e){var i=e.data;a.duplicateData.name=i.data.hasOwnProperty("name")?i.data.name:i.data.model,a.duplicateData.schema=JSON.parse(i.data.schema),a.duplicateData.id=t,a.duplicateModal=!0})).catch((function(t){console.log(t)}))},deleteListItem:function(t){var e=this;axios.delete(this.$project?"/lambda/puzzle/delete/project/vb_schemas/".concat(this.$project.id,"/").concat(this.type,"/").concat(t):"/lambda/puzzle/delete/vb_schemas/".concat(this.type,"/").concat(t)).then((function(a){e.filteredList=e.filteredList.filter((function(e){return e.id!==t})),e.listData=e.listData.filter((function(e){return e.id!==t})),e.$Message.success("444 Амжилттай устгалаа!")}))},cancel:function(){},filterList:function(t){var e=this,a=t.target.value;e.filteredList=""!=a?e.listData.filter((function(t){return t.name.toString().toLowerCase().indexOf(a.toLowerCase())>=0})):e.listData}}};const c=(0,a(51900).Z)(s,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"page page-list"},[e("div",{staticClass:"page-list-header"},[e("h3",[t._v(t._s(t.title)+" ("+t._s(t.listData.length)+")")]),t._v(" "),e("div",{staticClass:"page-list-header-search"},[e("Input",{staticStyle:{width:"200px"},attrs:{icon:"ios-search",placeholder:t.lang1.pleaseEnterSearchValue},on:{"on-keyup":t.filterList}})],1),t._v(" "),e("div",{staticClass:"page-list-header-control"},[e("router-link",{staticClass:"btn-del",attrs:{to:"".concat(t.prefix?t.prefix:"","/").concat(t.type,"/builder")}},[e("Button",{attrs:{type:"success"}},[e("Icon",{attrs:{type:"md-add"}}),t._v("\n                    "+t._s(t.lang.add)+"\n                ")],1)],1)],1)]),t._v(" "),t.loading?e("div",{staticClass:"loader"},[t._m(0)]):e("Row",{directives:[{name:"slimscroll",rawName:"v-slimscroll",value:{height:"100vh-30",size:7,alwaysVisible:!0,wheelStep:7,color:"#2C3A47"},expression:"{height:'100vh-30',size:7,alwaysVisible: true,wheelStep:7,color:'#2C3A47'}"}],staticClass:"pz-list",attrs:{gutter:16}},t._l(t.filteredList,(function(a){var l;return e("Col",{key:a.index,attrs:{xs:24,sm:12,md:8,lg:6}},[e("div",{staticClass:"pz-list-item"},[e("div",{staticClass:"pz-list-item-body"},[e("h3",[t._v(t._s(a.name))]),t._v(" "),e("small",[t._v(t._s(a.created_at))])]),t._v(" "),e("div",{staticClass:"pz-list-item-control"},["hidden"!=t.preview?e("router-link",{staticClass:"btn-preview",attrs:{to:"".concat(t.prefix?t.prefix:"","/").concat(t.type,"/preview/").concat(a.id)}},[e("Icon",{attrs:{type:"ios-eye"}})],1):t._e(),t._v(" \n                    "),"form"==t.type||"grid"==t.type?e("a",{staticClass:"btn-preview",attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.duplicate(a.id,t.type)}}},[e("Icon",{attrs:{type:"md-copy"}})],1):t._e(),t._v(" "),e("span",[e("router-link",{staticClass:"btn-edit",attrs:{to:"".concat(t.prefix?t.prefix:"","/").concat(t.type,"/builder/").concat(a.id)}},[e("Icon",{attrs:{type:"md-create"}})],1),t._v(" "),e("Poptip",{attrs:(l={confirm:"",title:t.lang.delete_data},i(l,"confirm",""),i(l,"width","180"),i(l,"ok-text",t.lang1.yes),i(l,"cancel-text",t.lang1.no),l),on:{"on-ok":function(e){return t.deleteListItem(a.id)},"on-cancel":t.cancel}},[e("a",{staticClass:"btn-del",attrs:{href:"javascript:void(0)"}},[e("Icon",{attrs:{type:"ios-trash"}})],1)])],1)],1)])])})),1),t._v(" "),e("Modal",{attrs:{title:t.lang1.copy,"ok-text":t.lang1.copy},on:{"on-ok":t.doDuplicate},model:{value:t.duplicateModal,callback:function(e){t.duplicateModal=e},expression:"duplicateModal"}},[e("label",[t._v(t._s(t.lang1.name))]),t._v(" "),e("Input",{staticStyle:{width:"100%"},attrs:{placeholder:t.lang1.name},model:{value:t.duplicateData.name,callback:function(e){t.$set(t.duplicateData,"name",e)},expression:"duplicateData.name"}}),t._v(" "),e("label",[t._v(t._s(t.lang1.table)+" (DB table)")]),t._v(" "),"form"==t.type?e("Select",{staticStyle:{width:"100%"},attrs:{placeholder:t.lang1.selectTable,clearable:"",filterable:""},model:{value:t.duplicateData.schema.model,callback:function(e){t.$set(t.duplicateData.schema,"model",e)},expression:"duplicateData.schema.model"}},t._l(t.tableList,(function(a){return e("Option",{key:a.index,attrs:{value:a}},[t._v(t._s(a))])})),1):t._e(),t._v(" "),"grid"==t.type?e("Select",{staticStyle:{width:"100%"},attrs:{placeholder:t.lang1.selectTable,clearable:"",filterable:""},model:{value:t.duplicateData.schema.model,callback:function(e){t.$set(t.duplicateData.schema,"model",e)},expression:"duplicateData.schema.model"}},[e("OptionGroup",{attrs:{label:t.lang.table_list}},t._l(t.tableList,(function(a){return e("Option",{key:a.index,attrs:{value:a}},[t._v(t._s(a))])})),1),t._v(" "),e("OptionGroup",{attrs:{label:t.lang.table_list}},t._l(t.viewList,(function(a){return e("Option",{key:a.index,attrs:{value:a}},[t._v(t._s(a))])})),1)],1):t._e(),t._v(" "),"grid"==t.type?e("label",[t._v(t._s(t.lang1.basicTable)+" (DB table)")]):t._e(),t._v(" "),"grid"==t.type?e("Select",{staticStyle:{width:"100%"},attrs:{placeholder:t.lang1.selectTable,clearable:"",filterable:""},model:{value:t.duplicateData.schema.mainTable,callback:function(e){t.$set(t.duplicateData.schema,"mainTable",e)},expression:"duplicateData.schema.mainTable"}},t._l(t.tableList,(function(a){return e("Option",{key:a.index,attrs:{value:a}},[t._v(t._s(a))])})),1):t._e()],1)],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"loader-wrapper"},[e("div",{staticClass:"lds-roller"},[e("div"),t._v(" "),e("div"),t._v(" "),e("div"),t._v(" "),e("div"),t._v(" "),e("div"),t._v(" "),e("div"),t._v(" "),e("div"),t._v(" "),e("div")]),t._v(" "),e("h3",[t._v("Түр хүлээнэ үү")])])}],!1,null,null,null).exports},4970:(t,e,a)=>{a.r(e),a.d(e,{default:()=>l});const i={components:{"list-view":a(80143).Z},data:function(){return{}},methods:{},computed:{lang:function(){var t=this,e=["graphql_management"];return e.reduce((function(a,i,l){return a[i]=t.$t("project."+e[l]),a}),{})}}};const l=(0,a(51900).Z)(i,(function(){var t=this,e=t._self._c;return e("div",[t.$project?e("list-view",{attrs:{src:"/lambda/puzzle/project/".concat(t.$project.id,"/graphql"),title:t.lang.graphql_management,type:"graphql",data:t.listData,preview:"hidden"}}):e("list-view",{attrs:{src:"/lambda/puzzle/schema/graphql",title:t.lang.graphql_management,type:"graphql",data:t.listData,preview:"hidden"}})],1)}),[],!1,null,null,null).exports}}]);