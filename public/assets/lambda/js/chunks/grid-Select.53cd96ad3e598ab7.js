"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9998],{57936:(e,l,t)=>{function a(e){if(e.filterWithUser){if(e.filterWithUser&&e.filterWithUser.constructor===Array)e.filterWithUser.forEach((function(l){var t="".concat(l.tableField," = '").concat(window.init.user[l.userField],"'");""==e.filter||void 0===e.filter?e.filter=t:e.filter=e.filter+" AND "+t}));else{var l="".concat(e.filterWithUser.tableField," = '").concat(window.init.user[e.filterWithUser.userField],"'");""==e.filter||void 0===e.filter?e.filter=l:e.filter=e.filter+" AND "+l}e.filterWithUser=void 0}return e}t.d(l,{_:()=>a})},14421:(e,l,t)=>{t.r(l),t.d(l,{default:()=>c});var a=t(91317),n=t.n(a),o=t(9669),i=t.n(o),r=t(57936);const s={props:["model","rule","label","meta","relation_data"],data:function(){return{options:[],loading:!0,value:null,clearAble:!1,searchval:null}},methods:{clearState:function(){this.value=null,this.clearAble=!1,n().set(this.model.form,this.model.component,null)},searchChange:function(e){this.searchval=e}},watch:{value:function(e){e&&(1==this.meta.relation.multiple?n().set(this.model.form,this.model.component,e.map((function(e){return e.value})).join(",")):n().set(this.model.form,this.model.component,e.value),this.clearAble=!0)}},mounted:function(){var e=this,l="/lambda/krud/".concat(this.meta.schemaID,"/options");null!=this.meta.filter.relation.parentFieldOfForm&&null!=this.meta.filter.relation.parentFieldOfTable&&this.$watch("model.form."+this.meta.filter.relation.parentFieldOfForm,{handler:function(t,a){e.meta.filter.relation.filter=e.meta.filter.relation.parentFieldOfTable+"='"+t.toString()+"'",i().post(l,(0,r._)(e.meta.filter.relation)).then((function(l){var t=l.data;e.options=t,e.loading=!1}))},deep:!0}),i().post(l,(0,r._)(this.meta.filter.relation)).then((function(l){var t=l.data;if(e.options=t,e.loading=!1,null!=e.model.form[e.model.component]&&null!=e.model.form[e.model.component]){var a=e.options.findIndex((function(l){return l.value==e.model.form[e.model.component]}));a>=0&&(e.value=e.options[a])}}))}};const c=(0,t(51900).Z)(s,(function(){var e=this,l=e._self._c;return l("FormItem",{attrs:{label:e.label,prop:e.rule}},[e.meta.relation.multiple?l("multiselect",{attrs:{multiple:!0,disabled:e.meta.disabled,"track-by":"value",searchable:!0,"clear-on-select":!0,placeholder:e.label?e.label:"",label:"label",options:e.options},on:{"search-change":e.searchChange},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}}):l("multiselect",{attrs:{disabled:e.meta.disabled,options:e.options,"track-by":"value",searchable:!0,"clear-on-select":!0,placeholder:e.label?e.label:"",label:"label"},on:{"search-change":e.searchChange},scopedSlots:e._u([{key:"singleLabel",fn:function(l){var t=l.option;return[e._v("\n            "+e._s(t.label)+"\n        ")]}}],null,!1,3474305198),model:{value:e.value,callback:function(l){e.value=l},expression:"value"}},[e._v(" "),l("template",{on:{mousedown:function(l){return l.preventDefault(),l.stopPropagation(),e.toggle.apply(null,arguments)}},slot:"clear"},[l("div",{staticClass:"clear-container"},[e.clearAble?l("Button",{attrs:{shape:"circle",size:"small",icon:"md-close"},on:{click:e.clearState}}):e._e()],1)])],2)],1)}),[],!1,null,null,null).exports}}]);