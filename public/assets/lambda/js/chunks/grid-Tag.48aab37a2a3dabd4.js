"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5903],{49105:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});var l=o(9669),n=o.n(l);const a={props:["model","rule","label","meta"],data:function(){return{options:[],loading:!0}},computed:{computedOptions:function(){var e=this;return this.options.filter((function(t){return e.isShow(t)}))}},mounted:function(){var e=this,t="/lambda/krud/".concat(this.meta.schemaID,"/options");n().post(t,this.meta.filter.relation).then((function(t){var o=t.data;e.options=o,e.loading=!1}))},methods:{isShow:function(e){return!(!e.value||!e.label)&&(!this.$props.meta.filter.relation.parentFieldOfForm||this.$props.model.form[this.$props.meta.filter.relation.parentFieldOfForm]==e.parent_value)}}};const r=(0,o(51900).Z)(a,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("FormItem",{attrs:{label:e.label}},[e.loading?e._e():o("Select",{attrs:{multiple:"",placeholder:e.meta&&e.meta.placeHolder?e.meta.placeHolder:e.label,filterable:""},model:{value:e.model.form[e.model.component],callback:function(t){e.$set(e.model.form,e.model.component,t)},expression:"model.form[model.component]"}},e._l(e.computedOptions,(function(t){return o("Option",{key:t.index,attrs:{value:t.value}},[e._v(e._s(t.label)+"\n        ")])})),1)],1)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=grid-Tag.48aab37a2a3dabd4.js.map