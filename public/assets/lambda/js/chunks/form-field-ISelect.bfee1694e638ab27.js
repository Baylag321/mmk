"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3120],{85310:(e,l,t)=>{t.r(l),t.d(l,{default:()=>a});const o={components:{Button:t(25477).Z},props:["model","rule","label","meta","disabled","relation_data"],computed:{options:function(){return void 0!==this.meta.options&&this.meta.options.length>=1?this.meta.options:this.relation_data}},methods:{isShow:function(e){return!(!e.value||!e.label)&&(!this.$props.meta.relation.parentFieldOfForm||this.$props.model.form[this.$props.meta.relation.parentFieldOfForm]==e.parent_value)}}};const a=(0,t(51900).Z)(o,(function(){var e=this,l=e._self._c;return l("FormItem",{attrs:{label:e.label,prop:e.rule}},[e.meta.relation.multiple?l("Select",{attrs:{disabled:!(!e.meta||!e.meta.disabled)&&e.meta.disabled,placeholder:e.meta&&e.meta.placeHolder?e.meta.placeHolder:e.label,filterable:"",multiple:""},model:{value:e.model.form[e.model.component],callback:function(l){e.$set(e.model.form,e.model.component,l)},expression:"model.form[model.component]"}},e._l(e.options,(function(t){return e.isShow(t)?l("Option",{key:t.index,attrs:{value:t.value}},[e._v(e._s(t.label)+"\n        ")]):e._e()})),1):l("Select",{attrs:{disabled:!(!e.meta||!e.meta.disabled)&&e.meta.disabled,placeholder:e.meta&&e.meta.placeHolder?e.meta.placeHolder:e.label,filterable:""},model:{value:e.model.form[e.model.component],callback:function(l){e.$set(e.model.form,e.model.component,l)},expression:"model.form[model.component]"}},e._l(e.options,(function(t){return e.isShow(t)?l("Option",{key:t.index,attrs:{value:t.value}},[e._v(e._s(t.label)+"\n        ")]):e._e()})),1)],1)}),[],!1,null,null,null).exports}}]);