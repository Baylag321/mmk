"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8313],{41262:(e,t,i)=>{i.r(t),i.d(t,{default:()=>r});const s={computed:{menuMode(){let e=localStorage.getItem("menuMode");return e||void 0}},data:()=>({options:{height:"1000px"},pageType:"",property:{withCrudLog:window.init.withCrudLog,withoutHeader:!0===window.init.withoutHeader,page_id:null,template:"canvas",mode:window.init.crud_mode?window.init.crud_mode:void 0,title:"",grid:null,form:null,form_width:800,view_url:null,actions:[],user_condition:null,permissions:{c:!1,r:!1,u:!1,d:!1}},iframeUrl:"",iframeTitle:"",submenu:[],showSub:!1,menu:window.init.menu,cruds:window.init.cruds,permissions:window.init.permissions.permissions,pageTitle:"",subMenuId:"0",showNestedMenu:!1}),methods:{checkSub(){let e=this.menu.findIndex((e=>e.id==this.$route.params.menu_id));if(e>=0)if(this.menu[e].children.length>=1)if(this.menu[e].children.forEach(((e,t)=>{e.children.length>=1&&(this.showNestedMenu=!0,this.$route.params.sub_menu_id==e.id&&(this.subMenuId=e.id))})),this.pageTitle=this.getTitle(this.menu[e]),this.pageTitle=this.getTitle(this.menu[e]),this.$route.matched.length<=1){let t=this.getShowAbleChild(this.menu[e].children);t&&this.$router.push(`/p/${this.$route.params.menu_id}/${t.id}`)}else this.subMenu=this.menu[e].children,this.showSub=!0;else this.showSub=!1,this.getPage()},getShowAbleChild(e){let t=e.findIndex((e=>this.can(e)));return t>=0?e[t]:null},can(e){return!!this.permissions[e.id]&&!!this.permissions[e.id].show},getTitle(e){if("crud"==e.link_to){let t=this.cruds.findIndex((t=>t.id==e.url));return t>=0?this.cruds[t].title:""}return e.title},getPage(){let e=this.menu.findIndex((e=>e.id==this.$route.params.menu_id));if(e>=0){let t=this.menu[e];switch(this.pageType=t.link_to,this.pageType){case"crud":let i=this.cruds.findIndex((e=>e.id==t.url));if(i>=0){this.property.page_id=t.id,this.property.title=this.cruds[i].title,this.property.grid=this.cruds[i].grid,this.property.form=this.cruds[i].form,this.property.form_width=this.cruds[i].form_width?this.cruds[i].form_width:null,this.property.view_url=this.cruds[i].view_url,this.property.permissions.c=this.permissions[t.id].c,this.property.permissions.r=this.permissions[t.id].r,this.property.permissions.u=this.permissions[t.id].u,this.property.permissions.d=this.permissions[t.id].d;let e={};this.permissions[t.id].formCondition&&(e.formCondition=this.permissions[t.id].formCondition),this.permissions[t.id].gridCondition&&(e.gridCondition=this.permissions[t.id].gridCondition),e&&(this.property.user_condition=e)}break;case"link":window.location=this.menu[e].url;break;case"router-link":console.log(this.menu[e].url),this.$router.push(this.menu[e].url);break;case"iframe":this.iframeUrl=t.url,this.iframeTitle=t.title}}}},mounted(){this.checkSub()}};const r=(0,i(51900).Z)(s,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"page"},[e.showSub?i("router-view",{key:e.$route.path},[i("nav",{directives:[{name:"show",rawName:"v-show",value:e.showSub&&"nested"!=e.menuMode,expression:"showSub && menuMode != 'nested'"}],attrs:{slot:"v-nav"},slot:"v-nav"},[i("div",{staticClass:"card sub-nav-list"},[i("h3",{staticClass:"card-header"},[e._v(e._s(e.pageTitle))]),e._v(" "),e.showNestedMenu?i("Collapse",{attrs:{simple:""},model:{value:e.subMenuId,callback:function(t){e.subMenuId=t},expression:"subMenuId"}},e._l(e.subMenu,(function(t,s){return e.can(t)&&t.children.length>=1?i("Panel",{key:s,attrs:{name:t.id}},[i("span",{domProps:{innerHTML:e._s(e.getTitle(t))}}),e._v(" "),i("ul",{staticClass:"card-body",attrs:{slot:"content"},slot:"content"},e._l(t.children,(function(s,r){return e.can(s)?i("li",{key:r},["link"!=s.link_to&&"router-link"!=s.link_to?i("router-link",{attrs:{to:"/p/"+e.$route.params.menu_id+"/"+t.id+"/"+s.id}},[s.icon?i("i",{class:s.icon}):e._e(),e._v(" "),i("span",{domProps:{innerHTML:e._s(e.getTitle(s))}})]):e._e(),e._v(" "),"router-link"==s.link_to?i("router-link",{attrs:{to:s.url}},[s.icon?i("i",{class:s.icon}):e._e(),e._v(" "),i("span",{domProps:{innerHTML:e._s(e.getTitle(s))}})]):e._e(),e._v(" "),"link"==s.link_to?i("a",{attrs:{href:s.url,target:t.target}},[s.icon?i("i",{class:s.icon}):e._e(),e._v(" "),i("span",{domProps:{innerHTML:e._s(e.getTitle(s))}})]):e._e()],1):e._e()})),0)]):e._e()})),1):e._e(),e._v(" "),i("ul",{staticClass:"card-body"},e._l(e.subMenu,(function(t,s){return e.can(t)&&t.children.length<=0?i("li",{key:s},["link"!=t.link_to&&"router-link"!=t.link_to?i("router-link",{attrs:{to:"/p/"+e.$route.params.menu_id+"/"+t.id}},[t.icon?i("i",{class:t.icon}):e._e(),e._v(" "),i("span",{domProps:{innerHTML:e._s(e.getTitle(t))}})]):"router-link"==t.link_to?i("router-link",{attrs:{to:t.url}},[t.icon?i("i",{class:t.icon}):e._e(),e._v(" "),i("span",{domProps:{innerHTML:e._s(e.getTitle(t))}})]):"link"==t.link_to?i("a",{attrs:{href:t.url,target:t.target}},[t.icon?i("i",{class:t.icon}):e._e(),e._v(" "),i("span",{domProps:{innerHTML:e._s(e.getTitle(t))}})]):e._e()],1):e._e()})),0)],1)])]):e._e(),e._v(" "),e.showSub?e._e():i("div",{class:"iframe"==e.pageType?"iframe-page":"sub-page"},["crud"==e.pageType?i("krud",{staticClass:"material",attrs:{template:e.property.template,property:e.property}},[i("user-control",{attrs:{slot:"right"},slot:"right"})],1):e._e(),e._v(" "),"iframe"==e.pageType?i("iframe",{attrs:{src:e.iframeUrl}}):e._e(),e._v(" "),"iframe"==e.pageType&&e.property.withoutHeader?i("portal",{attrs:{to:"header-left"}},[i("h3",[e._v(e._s(e.iframeTitle))])]):e._e()],1)],1)}),[],!1,null,null,null).exports},51900:(e,t,i)=>{function s(e,t,i,s,r,n,o,l){var a,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=i,u._compiled=!0),s&&(u.functional=!0),n&&(u._scopeId="data-v-"+n),o?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=a):r&&(a=l?function(){r.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:r),a)if(u.functional){u._injectStyles=a;var d=u.render;u.render=function(e,t){return a.call(t),d(e,t)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,a):[a]}return{exports:e,options:u}}i.d(t,{Z:()=>s})}}]);