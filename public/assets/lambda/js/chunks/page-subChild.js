"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3290],{27082:(i,t,e)=>{e.r(t),e.d(t,{default:()=>r});const s={data:()=>({pageType:"",menu:window.init.menu,cruds:window.init.cruds,permissions:window.init.permissions.permissions,property:{withCrudLog:window.init.withCrudLog,withoutHeader:!0===window.init.withoutHeader,page_id:null,template:"canvas",mode:window.init.crud_mode?window.init.crud_mode:void 0,title:"",grid:null,form:null,form_width:null,view_url:null,actions:[],user_condition:null,permissions:{c:!1,r:!1,u:!1,d:!1}},iframeUrl:""}),methods:{getPage(){let i=this.menu.findIndex((i=>i.id==this.$route.params.menu_id));if(i>=0){let t=this.menu[i].children.findIndex((i=>i.id==this.$route.params.sub_menu_id));if(t>=0){let e=this.menu[i].children[t].children.findIndex((i=>i.id==this.$route.params.sub_child_menu_id));if(e>=0){let s=this.menu[i].children[t].children[e];if(this.pageType=s.link_to,"crud"==this.pageType){let i=this.cruds.findIndex((i=>i.id==s.url));if(i>=0){this.property.page_id=s.id,this.property.title=this.cruds[i].title,this.property.grid=this.cruds[i].grid,this.property.form=this.cruds[i].form,this.property.form_width=this.cruds[i].form_width?this.cruds[i].form_width:null,this.property.view_url=this.cruds[i].view_url,this.property.permissions.c=this.permissions[s.id].c,this.property.permissions.r=this.permissions[s.id].r,this.property.permissions.u=this.permissions[s.id].u,this.property.permissions.d=this.permissions[s.id].d;let t={};this.permissions[s.id].formCondition&&(t.formCondition=this.permissions[s.id].formCondition),this.permissions[s.id].gridCondition&&(t.gridCondition=this.permissions[s.id].gridCondition),t&&(this.property.user_condition=t)}}else"iframe"==this.pageType&&(this.iframeUrl=s.url)}}}}},mounted(){this.getPage()}};const r=(0,e(51900).Z)(s,(function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{class:(i.pageType,"")},["crud"==i.pageType?e("krud",{staticClass:"material",attrs:{template:i.property.template,property:i.property}},[e("template",{slot:"nav"},[i._t("nav")],2),i._v(" "),e("template",{slot:"v-nav"},[i._t("v-nav")],2),i._v(" "),e("user-control",{attrs:{slot:"right"},slot:"right"})],2):i._e(),i._v(" "),"iframe"==i.pageType?e("div",{staticClass:"material"},[e("section",{staticClass:"offcanvas-template"},[e("div",{staticClass:"crud-page"},[i._m(0),i._v(" "),e("div",{staticClass:"crud-page-body"},[e("div",{staticClass:"v-nav"},[i._t("v-nav")],2),i._v(" "),e("div",{staticClass:"dg-flex"},[e("div",{staticClass:"iframe-page"},["iframe"==i.pageType?e("iframe",{attrs:{src:i.iframeUrl}}):i._e()])])])])])]):i._e()],1)}),[function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"crud-page-header"},[t("h3")])}],!1,null,null,null).exports},51900:(i,t,e)=>{function s(i,t,e,s,r,n,o,d){var a,p="function"==typeof i?i.options:i;if(t&&(p.render=t,p.staticRenderFns=e,p._compiled=!0),s&&(p.functional=!0),n&&(p._scopeId="data-v-"+n),o?(a=function(i){(i=i||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(i=__VUE_SSR_CONTEXT__),r&&r.call(this,i),i&&i._registeredComponents&&i._registeredComponents.add(o)},p._ssrRegister=a):r&&(a=d?function(){r.call(this,(p.functional?this.parent:this).$root.$options.shadowRoot)}:r),a)if(p.functional){p._injectStyles=a;var l=p.render;p.render=function(i,t){return a.call(t),l(i,t)}}else{var u=p.beforeCreate;p.beforeCreate=u?[].concat(u,a):[a]}return{exports:i,options:p}}e.d(t,{Z:()=>s})}}]);