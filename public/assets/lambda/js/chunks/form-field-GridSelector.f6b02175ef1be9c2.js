"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3183],{863:(t,e,o)=>{function i(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}o.r(e),o.d(e,{default:()=>s});const r={props:["model","rule","label","meta"],data:function(){return{preSource:[],modal_grid_show:!1,user_condition:null,selectedRow:{}}},computed:{value:function(){return this.model.form[this.model.component]}},watch:{value:function(t,e){null!==this.value&&0!==this.value&&""!==this.value||(this.selectedRow={}),t&&!e&&0==Object.keys(this.selectedRow).length&&this.callRowData()}},mounted:function(){void 0!==this.meta.GSOption.sourceGridUserCondition&&null!==this.meta.GSOption.sourceGridUserCondition&&""!=this.meta.GSOption.sourceGridUserCondition&&(this.user_condition=JSON.parse(this.meta.GSOption.sourceGridUserCondition))},methods:{callRowData:function(){var t=this,e={};e[this.meta.GSOption.sourceGridValueField]=this.value,axios.post("".concat(this.sourceGridUrl(),"/lambda/puzzle/grid/data/").concat(this.meta.GSOption.sourceGridID,"?&paginate=1&page=1&sort=id&order=desc"),e).then((function(e){var o=e.data;o.data.length>=1&&(t.selectedRow=o.data[0])}))},onRowSelect:function(t){this.preSource=t},sourceGridUrl:function(){var t=this;if(window.init.microserviceSettings){var e=window.init.microserviceSettings.findIndex((function(e){return e.project_id==t.meta.GSOption.sourceMicroserviceID}));return e>=0?window.init.microserviceSettings[e].production_url:""}return""},showAddSourceModal:function(){this.modal_grid_show=!0,this.$modal.show("grid-modal-".concat(this.meta.GSOption.sourceGridID))},closeSourceModal:function(){this.modal_grid_show=!1,this.$modal.hide("grid-modal-".concat(this.meta.GSOption.sourceGridID))},addFromPreSource:function(){this.selectedRow={},this.preSource&&this.meta.GSOption.sourceGridTargetColumns&&this.preSource.length>=1&&(this.selectedRow=this.preSource[0],this.model.form[this.model.component]=this.selectedRow[this.meta.GSOption.sourceGridValueField]),this.closeSourceModal()}}};const s=(0,o(51900).Z)(r,(function(){var t,e=this,o=e._self._c;return o("div",{staticClass:"subform-grid"},[o("FormItem",{attrs:{label:e.label,prop:e.rule}},[o("div",{staticClass:"subform-header"},[e._v("\n            "+e._s(e.meta.GSOption.sourceGridModalTitle)+"\n\n        ")]),e._v(" "),e.meta.GSOption?o("table",{attrs:{border:"1"}},[o("thead",[e.meta.GSOption.sourceGridTargetColumns&&e.meta.GSOption.sourceGridTargetColumns instanceof Array?o("tr",[e._l(e.meta.GSOption.sourceGridTargetColumns.filter((function(t){return null!==t})),(function(t,i){return o("th",{key:i},[e._v("\n                    "+e._s(t.label)+"\n                ")])})),e._v(" "),o("th",{staticClass:"action"},[e._v("...")])],2):e._e()]),e._v(" "),o("tbody",[e.meta.GSOption.sourceGridTargetColumns&&e.meta.GSOption.sourceGridTargetColumns instanceof Array?o("tr",[e._l(e.meta.GSOption.sourceGridTargetColumns.filter((function(t){return null!==t})),(function(t,i){return o("td",{key:i},[e._v("\n                    "+e._s(e.selectedRow[t.model])+"\n                ")])})),e._v(" "),o("td",{staticClass:"action"},[e.meta.disabled?e._e():o("a",{attrs:{href:"javascript:void(0);"},on:{click:e.showAddSourceModal}},[o("Icon",{attrs:{type:"md-search"}})],1)])],2):e._e()])]):e._e()]),e._v(" "),o("paper-modal",{staticClass:"form-modal",attrs:(t={name:"grid-modal-".concat(e.meta.GSOption.sourceGridID),"min-width":200,"min-height":100,"pivot-y":.5,adaptive:!0,reset:!0,draggable:!0,resizable:!0},i(t,"draggable",".form-tool"),i(t,"width","85%"),i(t,"height","85%"),t)},[o("section",{staticClass:"form-modal source-grid"},[o("div",{staticClass:"form-tool"},[o("h4",[e._v(e._s(e.meta.GSOption.sourceGridModalTitle))]),e._v(" "),o("div",{staticClass:"form-tool-actions"},[o("a",{attrs:{href:"javascript:void(0)"},on:{click:e.closeSourceModal}},[o("i",{staticClass:"ti-close"})])])]),e._v(" "),e.modal_grid_show?o("div",{staticClass:"form-body"},[e.meta.GSOption.sourceGridTitle&&e.meta.GSOption.sourceGridDescription?o("div",{staticClass:"source-grid-description"},[o("h3",[e._v("\n                        "+e._s(e.meta.GSOption.sourceGridTitle)+"\n                    ")]),e._v(" "),o("p",{domProps:{innerHTML:e._s(e.meta.GSOption.sourceGridDescription)}})]):e._e(),e._v(" "),o("datagrid",{attrs:{schemaID:e.meta.GSOption.sourceGridID,url:e.sourceGridUrl(),onRowSelect:e.onRowSelect,paginate:50,hasSelection:!0,gridSelector:!0,user_condition:e.user_condition,permissions:{c:!1,r:!0,u:!1,d:!1}}}),e._v(" "),o("div",{staticClass:"add-from-pre-source"},[o("Button",{staticClass:"sub-form-add-btn",attrs:{shape:"circle",type:"success",size:"small",disabled:0==e.preSource.length,icon:"md-add"},on:{click:e.addFromPreSource}},[e._v("Сонгох")])],1)],1):e._e()])])],1)}),[],!1,null,null,null).exports}}]);