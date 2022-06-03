"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8473],{76372:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function i(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){c(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function c(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const n={props:["selectedLang"],name:"forgot",data:function(){return{loading:!1,isSuccess:!1,isError:!1,errorMsg:"",successMsg:"",credentials:{email:null}}},computed:{lang:function(){var e=this,t=["forgot","email","forgotDescription","sendPasswordResetCode","emailSendError"];return t.reduce((function(s,r,i){return s[r]=e.$t("user."+t[i]),s}),{})}},methods:{onSubmit:function(){var e=this;this.isSuccess=!1,this.isError=!1,this.loading||(this.loading=!0,axios.post("/auth/send-forgot-mail",i(i({},this.credentials),{},{lang:this.selectedLang})).then((function(t){var s=t.data;setTimeout((function(){e.loading=!1,s.status?(e.isSuccess=!0,e.successMsg=s.msg,setTimeout((function(){e.$router.push("password-reset")}),2100)):(e.isError=!0,e.errorMsg=e.lang.emailSendError)}),1e3)})).catch((function(t){e.errorMsg=t.response.data.error,setTimeout((function(){e.loading=!1,e.isError=!0}),1e3)})))}}};const a=(0,s(51900).Z)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"form-wrap"},[s("div",{staticClass:"form-content"},[s("h2",[e._v(e._s(e.lang.forgot))]),e._v(" "),s("form",{staticClass:"login-form",attrs:{method:"post"},on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[s("div",{staticClass:"form-element input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.email,expression:"credentials.email"}],attrs:{type:"text",id:"email",name:"email",autocomplete:"off",placeholder:e.lang.email},domProps:{value:e.credentials.email},on:{input:function(t){t.target.composing||e.$set(e.credentials,"email",t.target.value)}}}),e._v(" "),s("span",{staticClass:"icon user"})]),e._v(" "),s("div",{staticClass:"form-element"},[s("label",{staticStyle:{"font-size":"12px"}},[e._v(e._s(e.lang.forgotDescription))])]),e._v(" "),s("div",{staticClass:"form-element "},[s("button",{staticClass:"button",staticStyle:{width:"100%"},attrs:{id:"submit",disabled:e.loading}},[s("span",{attrs:{id:"submitTxt"}},[e._v(e._s(e.lang.sendPasswordResetCode))]),e._v(" "),s("span",{staticClass:"loader"},[e.loading?s("div",{staticClass:"sk-fading-circle"},[s("div",{staticClass:"sk-circle1 sk-circle"}),e._v(" "),s("div",{staticClass:"sk-circle2 sk-circle"}),e._v(" "),s("div",{staticClass:"sk-circle3 sk-circle"}),e._v(" "),s("div",{staticClass:"sk-circle4 sk-circle"}),e._v(" "),s("div",{staticClass:"sk-circle5 sk-circle"}),e._v(" "),s("div",{staticClass:"sk-circle6 sk-circle"}),e._v(" "),s("div",{staticClass:"sk-circle7 sk-circle"}),e._v(" "),s("div",{staticClass:"sk-circle8 sk-circle"}),e._v(" "),s("div",{staticClass:"sk-circle9 sk-circle"}),e._v(" "),s("div",{staticClass:"sk-circle10 sk-circle"}),e._v(" "),s("div",{staticClass:"sk-circle11 sk-circle"}),e._v(" "),s("div",{staticClass:"sk-circle12 sk-circle"})]):e._e()])])])]),e._v(" "),s("div",{attrs:{id:"msg"}},[e.isSuccess?s("span",{staticClass:"success"},[e._v(e._s(e.successMsg))]):e._e(),e._v(" "),e.isError?s("span",{staticClass:"error"},[e._v(e._s(e.errorMsg))]):e._e()])]),e._v(" "),e._t("copyright")],2)}),[],!1,null,null,null).exports},51900:(e,t,s)=>{function r(e,t,s,r,i,c,n,a){var o,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=s,l._compiled=!0),r&&(l.functional=!0),c&&(l._scopeId="data-v-"+c),n?(o=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(n)},l._ssrRegister=o):i&&(o=a?function(){i.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:i),o)if(l.functional){l._injectStyles=o;var d=l.render;l.render=function(e,t){return o.call(t),d(e,t)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,o):[o]}return{exports:e,options:l}}s.d(t,{Z:()=>r})}}]);
//# sourceMappingURL=auth-default-auth-password-forgot.d97d406d9610cf94.js.map