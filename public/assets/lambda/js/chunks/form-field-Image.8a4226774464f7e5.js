"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6987],{46088:(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});const i={props:["model","label","rule","meta","do_render","url"],computed:{lang:function(){var e=this,t=["viewPhotos","_delete"];return t.reduce((function(s,i,o){return s[i]=e.$t("dataForm."+t[o]),s}),{})}},mounted:function(){this.uploadList=void 0!==this.$refs.upload.fileList?this.$refs.upload.fileList:[]},data:function(){return{defaultList:[],uploadList:[],showImage:!1,showImageUrl:""}},watch:{"model.form":function(e){var t=this,s=e[this.model.component];if(void 0!==this.meta.file.isMultiple&&this.meta.file.isMultiple)if("string"==typeof s&&void 0!==s&&null!=s){var i=JSON.parse(this.model.form[this.model.component]);Array.isArray(i)&&(this.defaultList=i.map((function(e){return{status:"finished",response:e.response,name:e.name}})),this.$nextTick((function(){t.uploadList=t.$refs.upload.fileList})))}else this.$refs.upload.fileList=[],this.uploadList=[],this.model.form[this.model.component]=null},do_render:function(e){e||(this.$refs.upload.fileList=[])}},methods:{handleView:function(e){this.showImage=!0,this.showImageUrl=e},success:function(e){this.meta.file.isMultiple?(this.uploadList=this.$refs.upload.fileList,this.model.form[this.model.component]=JSON.stringify(this.uploadList.map((function(e){return{name:e.name,response:e.response}})))):this.model.form[this.model.component]=e},handleRemove:function(e){var t=this.$refs.upload.fileList;this.$refs.upload.fileList.splice(t.indexOf(e),1),this.uploadList=this.$refs.upload.fileList,this.model.form[this.model.component]=this.uploadList.map((function(e){return{name:e.name,response:e.response}}))},beforeUpload:function(){}}};const o=(0,s(51900).Z)(i,(function(){var e=this,t=e._self._c;return t("FormItem",{attrs:{prop:e.rule}},[e.meta.file&&1==e.meta.file.isMultiple?t("div",{staticClass:"multi-upload"},[t("label",[e._v(e._s(e.label))]),e._v(" "),t("div",{staticClass:"multi-upload-list"},[e._l(e.uploadList,(function(s){return t("div",{key:s.index,staticClass:"upload-list"},["finished"==s.status?[s.response?t("img",{attrs:{src:"".concat(e.url?e.url:"").concat(s.response)},on:{click:function(t){return e.handleView(s.response)}}}):e._e(),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.meta||!e.meta.disabled,expression:"meta && meta.disabled ? false : true"}],staticClass:"upload-control",on:{click:function(t){return e.handleRemove(s)}}},[e._v(e._s(e.lang._delete)+"\n                    ")])]:[s.showProgress?t("Progress",{attrs:{percent:s.percentage,"hide-info":""}}):e._e()]],2)})),e._v(" "),t("Upload",{ref:"upload",attrs:{multiple:"","with-credentials":!0,action:"".concat(e.url?e.url:"","/lambda/krud/upload"),"show-upload-list":!1,"default-file-list":e.defaultList,"on-success":e.success,"before-upload":e.beforeUpload,disabled:!(!e.meta||!e.meta.disabled)&&e.meta.disabled}},[t("div",{staticClass:"upload-handler"},[t("i",{staticClass:"ti ti-camera"})])])],2)]):t("Upload",{ref:"upload",attrs:{"with-credentials":!0,action:"".concat(e.url?e.url:"","/lambda/krud/upload"),"on-success":e.success,disabled:!(!e.meta||!e.meta.disabled)&&e.meta.disabled},model:{value:e.model.form[e.model.component],callback:function(t){e.$set(e.model.form,e.model.component,t)},expression:"model.form[model.component]"}},[t("Button",{attrs:{type:"dashed"}},[null!=this.model.form[this.model.component]?t("img",{staticClass:"preview-img",attrs:{src:"".concat(e.url?e.url:"").concat(e.model.form[e.model.component]),alt:"image"}}):e._e(),e._v(" "),t("div",[t("i",{staticClass:"ti ti-camera"}),e._v("\n                "+e._s(e.label)+"\n            ")])])],1),e._v(" "),t("Modal",{attrs:{title:e.lang.viewPhotos,width:"1000px"},model:{value:e.showImage,callback:function(t){e.showImage=t},expression:"showImage"}},[e.showImage?t("img",{staticStyle:{width:"100%"},attrs:{src:"".concat(e.url?e.url:"").concat(e.showImageUrl)}}):e._e()])],1)}),[],!1,null,null,null).exports}}]);