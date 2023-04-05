import{g as st}from"./ant.b38ea10b.js";import{r as lt}from"./ck.17aa6ab8.js";var P={exports:{}};/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(F,dt){(function($,l){F.exports=l(lt)})(window,function($){return function(l){var c={};function r(e){if(c[e])return c[e].exports;var i=c[e]={i:e,l:!1,exports:{}};return l[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=l,r.c=c,r.d=function(e,i,d){r.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:d})},r.r=function(e){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,i){if(1&i&&(e=r(e)),8&i||4&i&&typeof e=="object"&&e&&e.__esModule)return e;var d=Object.create(null);if(r.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:e}),2&i&&typeof e!="string")for(var g in e)r.d(d,g,function(S){return e[S]}.bind(null,g));return d},r.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(i,"a",i),i},r.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},r.p="",r(r.s=3)}([function(l,c){l.exports=$},function(l,c,r){(function(e){var i=typeof e=="object"&&e&&e.Object===Object&&e;c.a=i}).call(this,r(2))},function(l,c){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch{typeof window=="object"&&(r=window)}l.exports=r},function(l,c,r){r.r(c);var e=r(0),i=r.n(e),d=function(t){var n=typeof t;return t!=null&&(n=="object"||n=="function")},g=r(1),S=typeof self=="object"&&self&&self.Object===Object&&self,N=g.a||S||Function("return this")(),x=function(){return N.Date.now()},U=/\s/,q=function(t){for(var n=t.length;n--&&U.test(t.charAt(n)););return n},W=/^\s+/,A=function(t){return t&&t.slice(0,q(t)+1).replace(W,"")},j=N.Symbol,C=Object.prototype,B=C.hasOwnProperty,z=C.toString,v=j?j.toStringTag:void 0,G=function(t){var n=B.call(t,v),o=t[v];try{t[v]=void 0;var s=!0}catch{}var p=z.call(t);return s&&(n?t[v]=o:delete t[v]),p},H=Object.prototype.toString,J=function(t){return H.call(t)},I=j?j.toStringTag:void 0,L=function(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":I&&I in Object(t)?G(t):J(t)},Q=function(t){return t!=null&&typeof t=="object"},X=function(t){return typeof t=="symbol"||Q(t)&&L(t)=="[object Symbol]"},Y=/^[-+]0x[0-9a-f]+$/i,Z=/^0b[01]+$/i,tt=/^0o[0-7]+$/i,et=parseInt,M=function(t){if(typeof t=="number")return t;if(X(t))return NaN;if(d(t)){var n=typeof t.valueOf=="function"?t.valueOf():t;t=d(n)?n+"":n}if(typeof t!="string")return t===0?t:+t;t=A(t);var o=Z.test(t);return o||tt.test(t)?et(t.slice(2),o?2:8):Y.test(t)?NaN:+t},nt=Math.max,rt=Math.min,it=function(t,n,o){var s,p,h,b,u,m,y=0,R=!1,O=!1,T=!0;if(typeof t!="function")throw new TypeError("Expected a function");function D(a){var f=s,E=p;return s=p=void 0,y=a,b=t.apply(E,f)}function ct(a){return y=a,u=setTimeout(w,n),R?D(a):b}function _(a){var f=a-m;return m===void 0||f>=n||f<0||O&&a-y>=h}function w(){var a=x();if(_(a))return K(a);u=setTimeout(w,function(f){var E=n-(f-m);return O?rt(E,h-(f-y)):E}(a))}function K(a){return u=void 0,T&&s?D(a):(s=p=void 0,b)}function V(){var a=x(),f=_(a);if(s=arguments,p=this,m=a,f){if(u===void 0)return ct(m);if(O)return clearTimeout(u),u=setTimeout(w,n),D(m)}return u===void 0&&(u=setTimeout(w,n)),b}return n=M(n)||0,d(o)&&(R=!!o.leading,h=(O="maxWait"in o)?nt(M(o.maxWait)||0,n):h,T="trailing"in o?!!o.trailing:T),V.cancel=function(){u!==void 0&&clearTimeout(u),y=0,s=m=p=u=void 0},V.flush=function(){return u===void 0?b:K(x())},V},k={name:"ckeditor",created(){const{CKEDITOR_VERSION:t}=window;if(t){const[n]=t.split(".").map(Number);n<34&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 34 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')},render(){return Object(e.h)(this.tagName)},model:{prop:"modelValue",event:"update:modelValue"},props:{editor:{type:Function,default:null},modelValue:{type:String,default:""},config:{type:Object,default:()=>({})},tagName:{type:String,default:"div"},disabled:{type:Boolean,default:!1}},data:()=>({instance:null,lastEditorData:{type:String,default:""}}),mounted(){const t=Object.assign({},this.config);this.modelValue&&(t.initialData=this.modelValue),this.editor.create(this.$el,t).then(n=>{this.instance=Object(e.markRaw)(n),this.setUpEditorEvents(),this.modelValue!==t.initialData&&n.setData(this.modelValue),this.disabled&&n.enableReadOnlyMode("Integration Sample"),this.$emit("ready",n)}).catch(n=>{console.error(n)})},beforeUnmount(){this.instance&&(this.instance.destroy(),this.instance=null),this.$emit("destroy",this.instance)},watch:{modelValue(t){this.instance&&t!==this.lastEditorData&&this.instance.setData(t)},disabled(t){t?this.instance.enableReadOnlyMode("Integration Sample"):this.instance.disableReadOnlyMode("Integration Sample")}},methods:{setUpEditorEvents(){const t=this.instance,n=it(o=>{const s=this.lastEditorData=t.getData();this.$emit("update:modelValue",s,o,t),this.$emit("input",s,o,t)},300,{leading:!0});t.model.document.on("change:data",n),t.editing.view.document.on("focus",o=>{this.$emit("focus",o,t)}),t.editing.view.document.on("blur",o=>{this.$emit("blur",o,t)})}}};const ot=i.a?i.a.version:e.version,[at]=ot.split(".").map(t=>parseInt(t,10));if(at<3)throw new Error("The CKEditor plugin works only with Vue 3+. For more information, please refer to https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v3.html");const ut={install(t){t.component("ckeditor",k)},component:k};c.default=ut}]).default})})(P);const mt=st(P.exports);export{mt as C};
