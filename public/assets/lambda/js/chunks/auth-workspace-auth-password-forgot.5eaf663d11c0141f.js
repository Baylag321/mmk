"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7547],{68785:(s,t,e)=>{e.r(t),e.d(t,{default:()=>r});const i={computed:{lang(){const s=["sendPasswordResetCode","forgotDescription","email","forget"];return s.reduce(((t,e,i)=>(t[e]=this.$t("user."+s[i]),t)),{})},_errorMassage(){const s=["errorSendingMail"];return s.reduce(((t,e,i)=>(t[e]=this.$t("alertMessage."+s[i]),t)),{})}},props:["selectedLang"],name:"aside-forgot",data:()=>({loading:!1,isSuccess:!1,isError:!1,errorMsg:"",successMsg:"",credentials:{email:null}}),methods:{onSubmit(){this.isSuccess=!1,this.isError=!1,this.loading||(this.loading=!0,axios.post("/auth/send-forgot-mail",{...this.credentials,lang:this.selectedLang}).then((({data:s})=>{setTimeout((()=>{this.loading=!1,s.status?(this.isSuccess=!0,this.successMsg=s.msg,setTimeout((()=>{this.$router.push("password-reset")}),2100)):(this.isError=!0,this.errorMsg=this._errorMassage.errorSendingMail)}),1e3)})).catch((s=>{this.errorMsg=s.response.data.error,setTimeout((()=>{this.loading=!1,this.isError=!0}),1e3)})))}}};const r=(0,e(51900).Z)(i,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"form-wrap"},[e("div",{staticClass:"form-content"},[e("h2",[s._v(s._s(s.lang.forgot))]),s._v(" "),e("form",{staticClass:"login-form",attrs:{method:"post"},on:{submit:function(t){return t.preventDefault(),s.onSubmit.apply(null,arguments)}}},[e("div",{staticClass:"form-element input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.credentials.email,expression:"credentials.email"}],attrs:{type:"text",id:"email",name:"email",autocomplete:"off",placeholder:s.lang.email},domProps:{value:s.credentials.email},on:{input:function(t){t.target.composing||s.$set(s.credentials,"email",t.target.value)}}}),s._v(" "),e("span",{staticClass:"icon user"})]),s._v(" "),e("div",{staticClass:"form-element"},[e("label",{staticStyle:{"font-size":"12px"}},[s._v(s._s(s.lang.forgotDescription))])]),s._v(" "),e("div",{staticClass:"form-element "},[e("button",{staticClass:"button",staticStyle:{width:"100%"},attrs:{id:"submit",disabled:s.loading}},[e("span",{attrs:{id:"submitTxt"}},[s._v(s._s(s.lang.sendPasswordResetCode))]),s._v(" "),e("span",{staticClass:"loader"},[s.loading?e("div",{staticClass:"sk-fading-circle"},[e("div",{staticClass:"sk-circle1 sk-circle"}),s._v(" "),e("div",{staticClass:"sk-circle2 sk-circle"}),s._v(" "),e("div",{staticClass:"sk-circle3 sk-circle"}),s._v(" "),e("div",{staticClass:"sk-circle4 sk-circle"}),s._v(" "),e("div",{staticClass:"sk-circle5 sk-circle"}),s._v(" "),e("div",{staticClass:"sk-circle6 sk-circle"}),s._v(" "),e("div",{staticClass:"sk-circle7 sk-circle"}),s._v(" "),e("div",{staticClass:"sk-circle8 sk-circle"}),s._v(" "),e("div",{staticClass:"sk-circle9 sk-circle"}),s._v(" "),e("div",{staticClass:"sk-circle10 sk-circle"}),s._v(" "),e("div",{staticClass:"sk-circle11 sk-circle"}),s._v(" "),e("div",{staticClass:"sk-circle12 sk-circle"})]):s._e()])])])]),s._v(" "),e("div",{attrs:{id:"msg"}},[s.isSuccess?e("span",{staticClass:"success"},[s._v(s._s(s.successMsg))]):s._e(),s._v(" "),s.isError?e("span",{staticClass:"error"},[s._v(s._s(s.errorMsg))]):s._e()])])])}),[],!1,null,null,null).exports},51900:(s,t,e)=>{function i(s,t,e,i,r,a,c,l){var n,o="function"==typeof s?s.options:s;if(t&&(o.render=t,o.staticRenderFns=e,o._compiled=!0),i&&(o.functional=!0),a&&(o._scopeId="data-v-"+a),c?(n=function(s){(s=s||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(s=__VUE_SSR_CONTEXT__),r&&r.call(this,s),s&&s._registeredComponents&&s._registeredComponents.add(c)},o._ssrRegister=n):r&&(n=l?function(){r.call(this,(o.functional?this.parent:this).$root.$options.shadowRoot)}:r),n)if(o.functional){o._injectStyles=n;var d=o.render;o.render=function(s,t){return n.call(t),d(s,t)}}else{var u=o.beforeCreate;o.beforeCreate=u?[].concat(u,n):[n]}return{exports:s,options:o}}e.d(t,{Z:()=>i})}}]);
//# sourceMappingURL=auth-workspace-auth-password-forgot.5eaf663d11c0141f.js.map