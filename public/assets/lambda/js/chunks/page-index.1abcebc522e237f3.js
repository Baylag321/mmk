"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8313],{45969:(i,t,e)=>{e.r(t),e.d(t,{default:()=>r});const s={computed:{menuMode:function(){var i=localStorage.getItem("menuMode");return i||void 0}},data:function(){return{options:{height:"1000px"},pageType:"",property:{withCrudLog:window.init.withCrudLog,withoutHeader:!0===window.init.withoutHeader,page_id:null,template:"canvas",mode:window.init.crud_mode?window.init.crud_mode:void 0,title:"",projects_id:null,grid:null,form:null,form_width:800,view_url:null,actions:[],user_condition:null,permissions:{c:!1,r:!1,u:!1,d:!1,gridDeleteConditionJS:"",gridEditConditionJS:""}},iframeUrl:"",iframeTitle:"",submenu:[],showSub:!1,menu:window.init.menu,cruds:window.init.cruds,permissions:window.init.permissions.permissions,pageTitle:"",subMenuId:"0",showNestedMenu:!1}},methods:{checkSub:function(){var i=this,t=this.menu.findIndex((function(t){return t.id==i.$route.params.menu_id}));if(t>=0)if(this.menu[t].children.length>=1)if(this.menu[t].children.forEach((function(t,e){t.children.length>=1&&(i.showNestedMenu=!0,i.$route.params.sub_menu_id==t.id&&(i.subMenuId=t.id))})),this.pageTitle=this.getTitle(this.menu[t]),this.pageTitle=this.getTitle(this.menu[t]),this.$route.matched.length<=1){var e=this.getShowAbleChild(this.menu[t].children);e&&this.$router.push("/p/".concat(this.$route.params.menu_id,"/").concat(e.id))}else this.subMenu=this.menu[t].children,this.showSub=!0;else this.showSub=!1,this.getPage()},getShowAbleChild:function(i){var t=this,e=i.findIndex((function(i){return t.can(i)}));return e>=0?i[e]:null},can:function(i){return!!this.permissions[i.id]&&!!this.permissions[i.id].show},getTitle:function(i){if("crud"==i.link_to){var t=this.cruds.findIndex((function(t){return t.id==i.url}));return t>=0?this.cruds[t].title:""}return i.title},getPage:function(){var i=this,t=this.menu.findIndex((function(t){return t.id==i.$route.params.menu_id}));if(t>=0){var e=this.menu[t];switch(this.pageType=e.link_to,this.pageType){case"crud":var s=this.cruds.findIndex((function(i){return i.id==e.url}));if(s>=0){this.property.page_id=e.id,this.property.title=this.cruds[s].title,this.property.projects_id=this.cruds[s].projects_id,this.property.grid=this.cruds[s].grid,this.property.form=this.cruds[s].form,this.property.edit_id=this.cruds[s].edit_id,this.property.template=this.cruds[s].template,this.cruds[s].actions&&(this.property.actions=JSON.parse(this.cruds[s].actions)),this.property.main_tab_title=this.cruds[s].main_tab_title,this.property.form_width=this.cruds[s].form_width?this.cruds[s].form_width:null,this.property.view_url=this.cruds[s].view_url,this.property.permissions.c=this.permissions[e.id].c,this.property.permissions.r=this.permissions[e.id].r,this.property.permissions.u=this.permissions[e.id].u,this.property.permissions.d=this.permissions[e.id].d,this.property.permissions.gridDeleteConditionJS=this.permissions[e.id].gridDeleteConditionJS,this.property.permissions.gridEditConditionJS=this.permissions[e.id].gridEditConditionJS;var r={};this.permissions[e.id].formCondition&&(r.formCondition=this.permissions[e.id].formCondition),this.permissions[e.id].gridCondition&&(r.gridCondition=this.permissions[e.id].gridCondition),r&&(this.property.user_condition=r)}break;case"link":window.location=this.menu[t].url;break;case"router-link":console.log(this.menu[t].url),this.$router.push(this.menu[t].url);break;case"iframe":this.iframeUrl=e.url,this.iframeTitle=e.title}}}},mounted:function(){this.checkSub()}};const r=(0,e(51900).Z)(s,(function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("section",{staticClass:"page"},[i.showSub?e("router-view",{key:i.$route.path},[e("nav",{directives:[{name:"show",rawName:"v-show",value:i.showSub&&"nested"!=i.menuMode,expression:"showSub && menuMode != 'nested'"}],attrs:{slot:"v-nav"},slot:"v-nav"},[e("div",{staticClass:"card sub-nav-list"},[e("h3",{staticClass:"card-header"},[i._v(i._s(i.pageTitle))]),i._v(" "),e("ul",{staticClass:"card-body"},i._l(i.subMenu,(function(t,s){return i.can(t)?e("li",{key:s},[t.children.length<=0?e("span",["link"!=t.link_to&&"router-link"!=t.link_to?e("router-link",{attrs:{to:"/p/"+i.$route.params.menu_id+"/"+t.id}},[t.icon?e("i",{class:t.icon}):i._e(),i._v(" "),e("span",{domProps:{innerHTML:i._s(i.getTitle(t))}})]):"router-link"==t.link_to?e("router-link",{attrs:{to:t.url}},[t.icon?e("i",{class:t.icon}):i._e(),i._v(" "),e("span",{domProps:{innerHTML:i._s(i.getTitle(t))}})]):"link"==t.link_to?e("a",{attrs:{href:t.url,target:t.target}},[t.icon?e("i",{class:t.icon}):i._e(),i._v(" "),e("span",{domProps:{innerHTML:i._s(i.getTitle(t))}})]):i._e()],1):i._e(),i._v(" "),i.showNestedMenu&&t.children.length>=1?e("Collapse",{attrs:{simple:""},model:{value:i.subMenuId,callback:function(t){i.subMenuId=t},expression:"subMenuId"}},[e("Panel",{key:s,attrs:{name:t.id}},[e("span",{domProps:{innerHTML:i._s(i.getTitle(t))}}),i._v(" "),e("ul",{staticClass:"card-body",attrs:{slot:"content"},slot:"content"},i._l(t.children,(function(s,r){return i.can(s)?e("li",{key:r},["link"!=s.link_to&&"router-link"!=s.link_to?e("router-link",{attrs:{to:"/p/"+i.$route.params.menu_id+"/"+t.id+"/"+s.id}},[s.icon?e("i",{class:s.icon}):i._e(),i._v(" "),e("span",{domProps:{innerHTML:i._s(i.getTitle(s))}})]):i._e(),i._v(" "),"router-link"==s.link_to?e("router-link",{attrs:{to:s.url}},[s.icon?e("i",{class:s.icon}):i._e(),i._v(" "),e("span",{domProps:{innerHTML:i._s(i.getTitle(s))}})]):i._e(),i._v(" "),"link"==s.link_to?e("a",{attrs:{href:s.url,target:t.target}},[s.icon?e("i",{class:s.icon}):i._e(),i._v(" "),e("span",{domProps:{innerHTML:i._s(i.getTitle(s))}})]):i._e()],1):i._e()})),0)])],1):i._e()],1):i._e()})),0)])])]):i._e(),i._v(" "),i.showSub?i._e():e("div",{class:"iframe"==i.pageType?"iframe-page":"sub-page"},["crud"==i.pageType?e("krud",{staticClass:"material",attrs:{template:i.property.template,property:i.property}},[e("user-control",{attrs:{slot:"right"},slot:"right"})],1):i._e(),i._v(" "),"iframe"==i.pageType?e("iframe",{attrs:{src:i.iframeUrl}}):i._e(),i._v(" "),"iframe"==i.pageType&&i.property.withoutHeader?e("portal",{attrs:{to:"header-left"}},[e("h3",[i._v(i._s(i.iframeTitle))])]):i._e()],1)],1)}),[],!1,null,null,null).exports},51900:(i,t,e)=>{function s(i,t,e,s,r,n,o,d){var u,a="function"==typeof i?i.options:i;if(t&&(a.render=t,a.staticRenderFns=e,a._compiled=!0),s&&(a.functional=!0),n&&(a._scopeId="data-v-"+n),o?(u=function(i){(i=i||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(i=__VUE_SSR_CONTEXT__),r&&r.call(this,i),i&&i._registeredComponents&&i._registeredComponents.add(o)},a._ssrRegister=u):r&&(u=d?function(){r.call(this,(a.functional?this.parent:this).$root.$options.shadowRoot)}:r),u)if(a.functional){a._injectStyles=u;var l=a.render;a.render=function(i,t){return u.call(t),l(i,t)}}else{var p=a.beforeCreate;a.beforeCreate=p?[].concat(p,u):[u]}return{exports:i,options:a}}e.d(t,{Z:()=>s})}}]);
//# sourceMappingURL=page-index.1abcebc522e237f3.js.map