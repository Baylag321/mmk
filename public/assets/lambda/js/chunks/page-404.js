"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8725],{67180:(n,t,e)=>{e.d(t,{Z:()=>i});var o=e(23645),r=e.n(o)()((function(n){return n[1]}));r.push([n.id,"#notfound{height:100vh;position:relative}#notfound .notfound{left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}.notfound{line-height:1.4;max-width:520px;text-align:center;width:100%}.notfound .notfound-404{height:200px;margin:0 auto 20px;position:relative;z-index:-1}.notfound .notfound-404 h1{font-size:236px;font-weight:200;left:50%;margin:0;top:50%;transform:translate(-50%,-50%)}.notfound .notfound-404 h1,.notfound .notfound-404 h2{color:#211b19;font-family:Montserrat,sans-serif;position:absolute;text-transform:uppercase}.notfound .notfound-404 h2{background:#fff;bottom:0;display:inline-block;font-size:28px;font-weight:400;left:0;margin:auto;padding:10px 5px;right:0}.notfound a{background:#007ae5;color:#fff;display:inline-block;font-family:Montserrat,sans-serif;font-size:18px;font-weight:700;padding:13px 23px;text-decoration:none;text-transform:uppercase;transition:all .2s}.notfound a:hover{background:#211b19;color:#007ae5}@media only screen and (max-width:767px){.notfound .notfound-404 h1{font-size:148px}}@media only screen and (max-width:480px){.notfound .notfound-404{height:148px;margin:0 auto 10px}.notfound .notfound-404 h1{font-size:86px}.notfound .notfound-404 h2{font-size:16px}.notfound a{font-size:14px;padding:7px 15px}}",""]);const i=r},23645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=n(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);o&&r[d[0]]||(e&&(d[2]?d[2]="".concat(e," and ").concat(d[2]):d[2]=e),t.push(d))}},t}},93379:(n,t,e)=>{var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),a=[];function s(n){for(var t=-1,e=0;e<a.length;e++)if(a[e].identifier===n){t=e;break}return t}function d(n,t){for(var e={},o=[],r=0;r<n.length;r++){var i=n[r],d=t.base?i[0]+t.base:i[0],f=e[d]||0,u="".concat(d," ").concat(f);e[d]=f+1;var c=s(u),l={css:i[1],media:i[2],sourceMap:i[3]};-1!==c?(a[c].references++,a[c].updater(l)):a.push({identifier:u,updater:m(l,t),references:1}),o.push(u)}return o}function f(n){var t=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var r=e.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(n){t.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(t);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,c=(u=[],function(n,t){return u[n]=t,u.filter(Boolean).join("\n")});function l(n,t,e,o){var r=e?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=c(t,r);else{var i=document.createTextNode(r),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}function p(n,t,e){var o=e.css,r=e.media,i=e.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var h=null,v=0;function m(n,t){var e,o,r;if(t.singleton){var i=v++;e=h||(h=f(t)),o=l.bind(null,e,i,!1),r=l.bind(null,e,i,!0)}else e=f(t),o=p.bind(null,e,t),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return o(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;o(n=t)}else r()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var e=d(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<e.length;o++){var r=s(e[o]);a[r].references--}for(var i=d(n,t),f=0;f<e.length;f++){var u=s(e[f]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}e=i}}}},11489:(n,t,e)=>{e.r(t),e.d(t,{default:()=>d});const o={computed:{lang(){const n=["pageNotFound"];return n.reduce(((t,e,o)=>(t[e]=this.$t("page."+n[o]),t)),{})}},methods:{}};var r=e(93379),i=e.n(r),a=e(67180),s={insert:"head",singleton:!1};i()(a.Z,s);a.Z.locals;const d=(0,e(51900).Z)(o,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"notfound"}},[e("div",{staticClass:"notfound"},[e("div",{staticClass:"notfound-404"},[e("h1",[n._v("Oops!")]),n._v(" "),e("h2",[n._v("404 - "+n._s(n.lang.pageNotFound))])])])])}),[],!1,null,null,null).exports},51900:(n,t,e)=>{function o(n,t,e,o,r,i,a,s){var d,f="function"==typeof n?n.options:n;if(t&&(f.render=t,f.staticRenderFns=e,f._compiled=!0),o&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),a?(d=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),r&&r.call(this,n),n&&n._registeredComponents&&n._registeredComponents.add(a)},f._ssrRegister=d):r&&(d=s?function(){r.call(this,(f.functional?this.parent:this).$root.$options.shadowRoot)}:r),d)if(f.functional){f._injectStyles=d;var u=f.render;f.render=function(n,t){return d.call(t),u(n,t)}}else{var c=f.beforeCreate;f.beforeCreate=c?[].concat(c,d):[d]}return{exports:n,options:f}}e.d(t,{Z:()=>o})}}]);