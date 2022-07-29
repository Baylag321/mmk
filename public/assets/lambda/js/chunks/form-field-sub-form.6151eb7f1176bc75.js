"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[931],{66956:(e,t,o)=>{o.d(t,{Z:()=>r});const r={data:function(){return{preSource:[],modal_grid_show:!1,user_condition:null}},mounted:function(){void 0!==this.form.sourceGridUserCondition&&null!==this.form.sourceGridUserCondition&&""!=this.form.sourceGridUserCondition&&(this.user_condition=JSON.parse(this.form.sourceGridUserCondition))},methods:{showAddSourceModal:function(){this.modal_grid_show=!0,this.$modal.show("grid-modal-".concat(this.form.sourceGridID))},closeSourceModal:function(){this.modal_grid_show=!1,this.$modal.hide("grid-modal-".concat(this.form.sourceGridID))},addFromPreSource:function(){var e=this;this.preSource&&this.form.sourceGridTargetColumns&&this.preSource.forEach((function(t){e.createDataFromSource(t)})),this.closeSourceModal()},createDataFromSource:function(e){var t=this,o=_.cloneDeep(this.form),r={};o.schema.forEach((function(e){o.identity!=e.model&&null!=e.formType&&(!o.timestamp||"created_at"!=e.model&&e.model)})),this.form.sourceGridTargetColumns.forEach((function(t){console.log(t),console.log(t.sourceColumn),console.log(e[t.sourceColumn]),Vue.set(r,t.selfColumn,e[t.sourceColumn])}));var i={form:o,model:r};if(null==this.model.form[this.model.component]&&(this.model.form[this.model.component]=[]),""!==this.form.sourceUniqueField&&void 0!==this.form.sourceUniqueField&&null!==this.form.sourceUniqueField){var n=this.model.form[this.model.component].findIndex((function(e){return e[t.form.sourceUniqueField]===r[t.form.sourceUniqueField]}));if(-1!==n)return}this.model.form[this.model.component].push(r),this.listData.push(i),this.rowLength=this.model.form[this.model.component].length},onRowSelect:function(e){this.preSource=e},sourceGridUrl:function(){var e=this;if(window.init.microserviceSettings){var t=window.init.microserviceSettings.findIndex((function(t){return t.project_id==e.form.sourceMicroserviceID}));return t>=0?window.init.microserviceSettings[t].production_url:""}return""}}}},41313:(e,t,o)=>{o.r(t),o.d(t,{default:()=>l});var r=o(34530),i=o(96253);function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}const d={props:["form","model","editMode","relations","formula","url"],mixins:[o(66956).Z],components:{"grid-form":i.Z,dataform:function(){return o.e(826).then(o.bind(o,29886))}},mounted:function(){this.equationRenderer(),this.form.schema.forEach((function(e){e.disabled=!0}))},computed:{lang:function(){var e=this,t=["pleaseCompleteFirstLine"];return t.reduce((function(o,r,i){return o[r]=e.$t("dataForm."+t[i]),o}),{})},subStyle:function(){return this.form.min_height?{minHeight:this.form.min_height+"px",background:"#f3f4f5"}:void 0},Lang:function(){var e=this,t=["add"];return t.reduce((function(o,r,i){return o[r]=e.$t("dataForm."+t[i]),o}),{})}},watch:{listData:{handler:function(e,t){this.hasEq&&this.equationData.map((function(t){if(t.hasEquation){t.data=-1;var o=0;switch(t.equation){case"SUM":t.data=0,e.map((function(e){t.data+=Number(isNaN(parseInt(e.model[t.model],10))?0:e.model[t.model])}));break;case"COUNT":t.data=0,e.map((function(e){t.data+=Number(1)}));break;case"MIN":e.map((function(e){-1==t.data?t.data=e.model[t.model]:t.data=Math.min(t.data,e.model[t.model])}));break;case"MAX":t.data=0,e.map((function(e){t.data=Math.max(t.data,e.model[t.model])}));break;case"AVG":t.data=0,e.map((function(e){o++,t.data+=Number(e.model[t.model])})),t.data=Number(t.data/o)}}}))},deep:!0}},data:function(){return{listData:[],equationData:[],currentSortDir:"asc",hasEq:!1,modal_show:!1,editIndex:-1}},methods:{showAddModal:function(){this.modal_show=!0},closeModal:function(){this.modal_show=!1,this.editIndex=-1},formReady:function(e,t){var o=this,r=t.findIndex((function(e){return e.model==o.form.parent}));r>0&&(t[r].hidden=!0),this.editIndex>=0&&this.$nextTick((function(){o.$refs.form.editModel(o.listData[o.editIndex].model[o.form.identity],function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){s(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},o.listData[o.editIndex].model))}))},onError:function(){},onSuccess:function(e){var t=this;if(console.log(e),this.editIndex>=0)Object.keys(e).forEach((function(o){t.listData[t.editIndex].form.identity!=o&&"created_at"!=o&&"updated_at"!=o&&Vue.set(t.listData[t.editIndex].model,o,e[o])}));else{var o=_.cloneDeep(this.form),r={};Object.keys(e).forEach((function(t){var i=o.schema.findIndex((function(e){return"key"==e.model}));if(i>=0){if(o.identity==o.schema[i].model||null==o.schema[i].formType)return;if(o.timestamp&&("created_at"==o.schema[i].model||"updated_at"==o.schema[i].model))return}Vue.set(r,t,e[t])}));var i={form:o,model:r},n=this.model.form[this.model.component];null==n&&(n=[]),n.push(r),Vue.set(this.model.form,this.model.component,n),this.listData.push(i)}this.closeModal()},element:r.b,checkAddable:function(){var e=this;return new Promise((function(t,o){var r=e.listData[e.listData.length-1];if(r){var i=!1,a=r.model;for(var s in a)null!=n(a[s])&&null!=a[s]&&""!=a[s]&&0!=a[s]&&(i=!0);i?t(!0):(alert(e.lang.pleaseCompleteFirstLine),o(!1))}else t(!0)}))},addSubForm:function(){var e=_.cloneDeep(this.form),t={};e.schema.forEach((function(o){e.identity!=o.model&&null!=o.formType&&(!e.timestamp||"created_at"!=o.model&&"updated_at"!=o.model)&&Vue.set(t,o.model,o.default)}));var o={form:e,model:t};null==this.model.form[this.model.component]&&(this.model.form[this.model.component]=[]),this.model.form[this.model.component].push(t),this.listData.push(o)},add:function(){this.form.addFromGrid&&this.form.sourceGridID?this.showAddSourceModal():this.addByFrom()},addByFrom:function(){this.closeSourceModal(),this.editIndex=-1,this.showAddModal()},fillData:function(){var e=this;this.listData=[],setTimeout((function(){e.model.form[e.model.component].forEach((function(t){var o={form:_.cloneDeep(e.form),model:t};e.listData.push(o)}))}),100)},equationRenderer:function(){var e=this;this.equationData=[],this.form.schema.map((function(t){""==t.label||t.hidden||(t.hasEquation&&(e.hasEq=!0),e.equationData.push({hasEquation:t.hasEquation,equation:t.equations,prefix:t.prefix,model:t.model,preStaticWord:t.preStaticWord,data:0}))}))},edit:function(e){this.model.form[this.form.model][e],this.editIndex=e,this.showAddModal()},remove:function(e){this.model.form[this.form.model].splice(e,1),this.listData.splice(e,1)},reset:function(){this.model.form[this.form.model]=[],this.listData=[]},sort:function(e){var t=this,o=1;this.currentSortDir="asc"===this.currentSortDir?"desc":"asc",this.currentSort="desc"===this.currentSortDir?-1:1,this.currentSort=e.model,this.listData.sort((function(e,r){return"desc"===t.currentSortDir&&(o=-1),e.model[t.currentSort]<r.model[t.currentSort]?-1*o:e.model[t.currentSort]>r.model[t.currentSort]?1*o:0}))}}};const l=(0,o(51900).Z)(d,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"subform-grid sub-modal-form",style:e.subStyle},[e.form.min_height||e.form.disableCreate?e._e():o("div",{staticClass:"subform-header"},[e._v("\n            "+e._s(e.form.name)+"\n            "),o("Button",{staticClass:"sub-form-add-btn",attrs:{shape:"circle",type:"success",size:"small",icon:"md-add"},on:{click:e.add}})],1),e._v(" "),e.form.min_height||this.listData.length>=1?o("table",{staticClass:"sub-form-grid",attrs:{border:"1"}},[o("thead",[o("tr",[e.form.showRowNumber?o("th",{staticClass:"row-number"},[e._v("ДД")]):e._e(),e._v(" "),e._l(e.form.schema,(function(t){return""==t.label||t.hidden?e._e():o("th",{key:t.index,on:{click:function(o){return e.sort(t)}}},[e._v("\n                    "+e._s(t.label)+" "),o("i",{staticClass:"ti-exchange-vertical"})])})),e._v(" "),o("th",{staticClass:"action"},[e._v("...")])],2)]),e._v(" "),o("tbody",e._l(e.listData,(function(t,r){return o("grid-form",{key:r,attrs:{f:t.form,model:t.model,editMode:e.editMode,relations:e.relations,formula:e.formula}},[o("template",{slot:"action"},[e.form.disableEdit?e._e():o("a",{staticClass:"sub-edit",attrs:{href:"javscript:void(0)"},on:{click:function(){return e.edit(r)}}},[o("Icon",{attrs:{type:"md-create"}})],1),e._v(" "),e.form.disableDelete?e._e():o("a",{attrs:{href:"javscript:void(0)"},on:{click:function(){return e.remove(r)}}},[o("Icon",{attrs:{type:"ios-trash"}})],1)]),e._v(" "),e.form.showRowNumber?o("template",{slot:"rowNumber"},[o("span",[e._v(e._s(r+1))])]):e._e()],2)})),1),e._v(" "),e.hasEq?o("tfoot",[o("tr",[e._l(e.equationData,(function(t,r){return o("td",{key:r},[null!=t.preStaticWord&&""!=t.preStaticWord?o("span",[e._v(" "+e._s(t.preStaticWord)+" ")]):e._e(),e._v(" "),t.hasEquation?o("span",[e._v(e._s(t.data.toLocaleString()))]):e._e(),e._v(" "),null!=t.prefix&&""!=t.prefix?o("span",[e._v(" "+e._s(t.prefix))]):e._e()])})),e._v(" "),o("td")],2)]):e._e()]):e._e(),e._v(" "),e.form.min_height?o("a",{staticClass:"sub-grid-add",attrs:{href:"javascript:void(0)"},on:{click:e.add}},[o("Icon",{attrs:{type:"plus"}}),e._v("\n            "+e._s(e.lang.save)+"\n        ")],1):e._e(),e._v(" "),o("Modal",{attrs:{"min-width":200,"min-height":100,draggable:!0,"footer-hide":!0,title:e.form.name,width:"800",height:"70%"},model:{value:e.modal_show,callback:function(t){e.modal_show=t},expression:"modal_show"}},[o("section",{staticClass:"form-modal"},[o("div",{staticClass:"form-body"},[e.modal_show?o("dataform",{ref:"form",attrs:{schemaID:e.form.formId,do_render:e.modal_show,editMode:e.editIndex>=0,isSubForm:!0,onSuccess:e.onSuccess,url:e.url,onReady:e.formReady,onError:e.onError}}):e._e()],1)])]),e._v(" "),o("paper-modal",{staticClass:"form-modal",attrs:{name:"grid-modal-"+e.form.sourceGridID,"min-width":200,"min-height":100,"pivot-y":.5,adaptive:!0,reset:!0,draggable:!0,resizable:!0,draggable:".form-tool",width:"800",height:"70%"}},[o("section",{staticClass:"form-modal source-grid"},[o("div",{staticClass:"form-tool "},[o("h4",[e._v(e._s(e.form.sourceGridModalTitle))]),e._v(" "),o("div",{staticClass:"form-tool-actions"},[o("a",{attrs:{href:"javascript:void(0)"},on:{click:e.closeSourceModal}},[o("i",{staticClass:"ti-close"})])])]),e._v(" "),e.modal_grid_show?o("div",{staticClass:"form-body"},[e.form.sourceGridTitle&&e.form.sourceGridDescription?o("div",{staticClass:"source-grid-description"},[o("h3",[e._v("\n                            "+e._s(e.form.sourceGridTitle)+"\n                        ")]),e._v(" "),o("p",{domProps:{innerHTML:e._s(e.form.sourceGridDescription)}})]):e._e(),e._v(" "),o("datagrid",{attrs:{schemaID:e.form.sourceGridID,url:e.sourceGridUrl(),onRowSelect:e.onRowSelect,user_condition:e.user_condition,paginate:50,hasSelection:!0,permissions:{c:!1,r:!0,u:!1,d:!1}}}),e._v(" "),o("div",{staticClass:"add-from-pre-source"},[o("Button",{staticClass:"sub-form-add-btn",attrs:{shape:"circle",type:"primary",size:"small",disabled:e.preSource.length>=1,icon:"md-add"},on:{click:e.addByFrom}},[e._v("Шинээр бүртгэх")]),e._v(" "),o("Button",{staticClass:"sub-form-add-btn",attrs:{shape:"circle",type:"success",size:"small",disabled:0==e.preSource.length,icon:"md-add"},on:{click:e.addFromPreSource}},[e._v("Сонгох")])],1)],1):e._e()])])],1)}),[],!1,null,null,null).exports},96253:(e,t,o)=>{o.d(t,{Z:()=>s});var r=o(34530),i=(o(66093),o(5122)),n=o(91996);const a={props:["f","model","editMode","relations","formula","schema"],created:function(){var e=this;this.f.data={},this.f.schema.forEach((function(t){e.f.identity!=t.model&&null!=t.formType&&(!e.f.timestamp||"created_at"!=t.model&&"updated_at"!=t.model)&&(e.editMode?e.setModel(t.model,e.model[t.model],t.formType):e.setModel(t.model,t.default,t.formType),e.$watch("model."+t.model,{handler:function(o,r){e.afterChange(t.model,o,r)},deep:!0}))}))},methods:{isShowAble:function(e){if(this.schema){var t=this.schema.findIndex((function(t){return t.model==e}));return t>=0&&!this.schema[t].hidden}return!0},element:r.b,setModel:function(e,t,o){switch(o){case"Switch":"true"!=t&&1!=t||!0,this.model[e]=r,this.f.data[e]=r;break;case"Checkbox":var r=0;"true"!=t&&1!=t||(r=1),this.model[e]=r,this.f.data[e]=r;break;default:this.f.data[e]=t}},setMeta:function(e){return delete e.table,delete e.rules,delete e.label,delete e.span,delete e.default,e},getSchemaIndex:function(e){return this.f.schema.findIndex((function(t){return t.model==e}))},afterChange:function(e,t,o){(0,i.BS)(e,t,this.model,this.f.schema,this.$refs,this.$Notice),(0,i.x4)(this.formula,e,this.model,this.f.schema,this.f.rule,this.f.model)},getSchemaRelationByModel:function(e){var t=this.f.schema.findIndex((function(t){return t.model==e}));return t>=0?(0,n.gN)(this.f.schema[t],this.relations):null},getRelation:function(e){return(0,n.gN)(e,this.relations)}}};const s=(0,o(51900).Z)(a,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("tr",[e.f.showRowNumber?o("td",{staticClass:"row-number"},[e._t("rowNumber")],2):e._e(),e._v(" "),e._l(e.f.schema,(function(t){return void 0!==t.formType&&null!==t.formType&&t.model&&e.isShowAble(t.model)&&t.model!=e.f.identity&&t.model!=e.f.parent&&"updated_at"!=t.model&&"created_at"!=t.model?o("td",{key:t.index},[e.model?o(e.element(t.formType),{tag:"component",attrs:{model:{form:e.model,component:t.model},size:"small",label:t.label?t.label:"["+t.model+"]",meta:e.setMeta(t),getSchemaRelationByModel:e.getSchemaRelationByModel,relation_data:e.getRelation(t)}}):e._e()],1):e._e()})),e._v(" "),o("td",{staticClass:"action"},[e._t("action")],2)],2)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=form-field-sub-form.6151eb7f1176bc75.js.map