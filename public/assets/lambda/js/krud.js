"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1339],{87046:(t,e,n)=>{var r=n(91317),o=n.n(r),s=n(72433);o().use(s.ZP),o().prototype.$bus=new(o())({}),window.Vue=o(),o().config.productionTip=!1;var i={canvas:function(){return n.e(8052).then(n.bind(n,92790))},drawer:function(){return n.e(8052).then(n.bind(n,54526))},create:function(){return n.e(1976).then(n.bind(n,15379))},edit:function(){return n.e(1976).then(n.bind(n,75158))},list:function(){return n.e(1976).then(n.bind(n,34572))},empty:function(){return n.e(1976).then(n.bind(n,92434))},emptyWithSideMenu:function(){return n.e(1976).then(n.bind(n,21609))},default:function(){return n.e(8035).then(n.bind(n,83748))},spa:function(){return n.e(1923).then(n.bind(n,19407))},modal:function(){return n.e(4656).then(n.bind(n,19622))},window:function(){return n.e(4656).then(n.bind(n,59212))},withSubCruds:function(){return n.e(9898).then(n.bind(n,73983))},progressList:function(){return n.e(4843).then(n.bind(n,28853))}};const a={props:["property"],methods:{renderTemplate:function(t){return i.hasOwnProperty(t)?i[t]:i.canvas},callWindowForm:function(){this.renderTemplate("windowForm")}}};var u={krud:(0,n(51900).Z)(a,(function(){var t=this,e=t._self._c;return e(t.renderTemplate(t.property.template),t._b({ref:"krud",tag:"component",attrs:{schema:t.property.form,id:t.property.edit_id}},"component",t.property,!1),[e("template",{slot:"left"},[t._t("left")],2),t._v(" "),e("template",{slot:"nav"},[t._t("nav")],2),t._v(" "),e("template",{slot:"v-nav"},[t._t("v-nav")],2),t._v(" "),e("template",{slot:"tooloptions"},[t._t("toolbuttons")],2),t._v(" "),e("div",{staticClass:"krud-header-right",attrs:{slot:"right"},slot:"right"},[t._t("right",(function(){return[e("user-control")]}))],2),t._v(" "),e("div",{attrs:{slot:"dg-slot-body"},slot:"dg-slot-body"},[t._t("dg-slot-body")],2)],2)}),[],!1,null,null,null).exports},l=function t(e,n){t.installed||Object.keys(u).forEach((function(t){return e.component(t,u[t])}))};"undefined"!=typeof window&&window.Vue&&l(window.Vue)},72433:(t,e,n)=>{var r,o=(r=n(72100))&&"object"==typeof r&&"default"in r?r.default:r;function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function i(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var a="undefined"!=typeof window;function u(t,e){return e.reduce((function(e,n){return t.hasOwnProperty(n)&&(e[n]=t[n]),e}),{})}var l={},c={},p={},d=o.extend({data:function(){return{transports:l,targets:c,sources:p,trackInstances:a}},methods:{open:function(t){if(a){var e=t.to,n=t.from,r=t.passengers,i=t.order,u=void 0===i?1/0:i;if(e&&n&&r){var l,c={to:e,from:n,passengers:(l=r,Array.isArray(l)||"object"===s(l)?Object.freeze(l):l),order:u};-1===Object.keys(this.transports).indexOf(e)&&o.set(this.transports,e,[]);var p,d=this.$_getTransportIndex(c),h=this.transports[e].slice(0);-1===d?h.push(c):h[d]=c,this.transports[e]=(p=function(t,e){return t.order-e.order},h.map((function(t,e){return[e,t]})).sort((function(t,e){return p(t[1],e[1])||t[0]-e[0]})).map((function(t){return t[1]})))}}},close:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.to,r=t.from;if(n&&(r||!1!==e)&&this.transports[n])if(e)this.transports[n]=[];else{var o=this.$_getTransportIndex(t);if(o>=0){var s=this.transports[n].slice(0);s.splice(o,1),this.transports[n]=s}}},registerTarget:function(t,e,n){a&&(this.trackInstances&&!n&&this.targets[t]&&console.warn("[portal-vue]: Target ".concat(t," already exists")),this.$set(this.targets,t,Object.freeze([e])))},unregisterTarget:function(t){this.$delete(this.targets,t)},registerSource:function(t,e,n){a&&(this.trackInstances&&!n&&this.sources[t]&&console.warn("[portal-vue]: source ".concat(t," already exists")),this.$set(this.sources,t,Object.freeze([e])))},unregisterSource:function(t){this.$delete(this.sources,t)},hasTarget:function(t){return!(!this.targets[t]||!this.targets[t][0])},hasSource:function(t){return!(!this.sources[t]||!this.sources[t][0])},hasContentFor:function(t){return!!this.transports[t]&&!!this.transports[t].length},$_getTransportIndex:function(t){var e=t.to,n=t.from;for(var r in this.transports[e])if(this.transports[e][r].from===n)return+r;return-1}}}),h=new d(l),f=1,g=o.extend({name:"portal",props:{disabled:{type:Boolean},name:{type:String,default:function(){return String(f++)}},order:{type:Number,default:0},slim:{type:Boolean},slotProps:{type:Object,default:function(){return{}}},tag:{type:String,default:"DIV"},to:{type:String,default:function(){return String(Math.round(1e7*Math.random()))}}},created:function(){var t=this;this.$nextTick((function(){h.registerSource(t.name,t)}))},mounted:function(){this.disabled||this.sendUpdate()},updated:function(){this.disabled?this.clear():this.sendUpdate()},beforeDestroy:function(){h.unregisterSource(this.name),this.clear()},watch:{to:function(t,e){e&&e!==t&&this.clear(e),this.sendUpdate()}},methods:{clear:function(t){var e={from:this.name,to:t||this.to};h.close(e)},normalizeSlots:function(){return this.$scopedSlots.default?[this.$scopedSlots.default]:this.$slots.default},normalizeOwnChildren:function(t){return"function"==typeof t?t(this.slotProps):t},sendUpdate:function(){var t=this.normalizeSlots();if(t){var e={from:this.name,to:this.to,passengers:i(t),order:this.order};h.open(e)}else this.clear()}},render:function(t){var e=this.$slots.default||this.$scopedSlots.default||[],n=this.tag;return e&&this.disabled?e.length<=1&&this.slim?this.normalizeOwnChildren(e)[0]:t(n,[this.normalizeOwnChildren(e)]):this.slim?t():t(n,{class:{"v-portal":!0},style:{display:"none"},key:"v-portal-placeholder"})}}),m=o.extend({name:"portalTarget",props:{multiple:{type:Boolean,default:!1},name:{type:String,required:!0},slim:{type:Boolean,default:!1},slotProps:{type:Object,default:function(){return{}}},tag:{type:String,default:"div"},transition:{type:[String,Object,Function]}},data:function(){return{transports:h.transports,firstRender:!0}},created:function(){var t=this;this.$nextTick((function(){h.registerTarget(t.name,t)}))},watch:{ownTransports:function(){this.$emit("change",this.children().length>0)},name:function(t,e){h.unregisterTarget(e),h.registerTarget(t,this)}},mounted:function(){var t=this;this.transition&&this.$nextTick((function(){t.firstRender=!1}))},beforeDestroy:function(){h.unregisterTarget(this.name)},computed:{ownTransports:function(){var t=this.transports[this.name]||[];return this.multiple?t:0===t.length?[]:[t[t.length-1]]},passengers:function(){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.reduce((function(t,n){var r=n.passengers[0],o="function"==typeof r?r(e):n.passengers;return t.concat(o)}),[])}(this.ownTransports,this.slotProps)}},methods:{children:function(){return 0!==this.passengers.length?this.passengers:this.$scopedSlots.default?this.$scopedSlots.default(this.slotProps):this.$slots.default||[]},noWrapper:function(){var t=this.slim&&!this.transition;return t&&this.children().length>1&&console.warn("[portal-vue]: PortalTarget with `slim` option received more than one child element."),t}},render:function(t){var e=this.noWrapper(),n=this.children(),r=this.transition||this.tag;return e?n[0]:this.slim&&!r?t():t(r,{props:{tag:this.transition&&this.tag?this.tag:void 0},class:{"vue-portal-target":!0}},n)}}),y=0,v=["disabled","name","order","slim","slotProps","tag","to"],b=["multiple","transition"],S=o.extend({name:"MountingPortal",inheritAttrs:!1,props:{append:{type:[Boolean,String]},bail:{type:Boolean},mountTo:{type:String,required:!0},disabled:{type:Boolean},name:{type:String,default:function(){return"mounted_"+String(y++)}},order:{type:Number,default:0},slim:{type:Boolean},slotProps:{type:Object,default:function(){return{}}},tag:{type:String,default:"DIV"},to:{type:String,default:function(){return String(Math.round(1e7*Math.random()))}},multiple:{type:Boolean,default:!1},targetSlim:{type:Boolean},targetSlotProps:{type:Object,default:function(){return{}}},targetTag:{type:String,default:"div"},transition:{type:[String,Object,Function]}},created:function(){if("undefined"!=typeof document){var t=document.querySelector(this.mountTo);if(t){var e=this.$props;if(h.targets[e.name])e.bail?console.warn("[portal-vue]: Target ".concat(e.name," is already mounted.\n        Aborting because 'bail: true' is set")):this.portalTarget=h.targets[e.name];else{var n=e.append;if(n){var r="string"==typeof n?n:"DIV",o=document.createElement(r);t.appendChild(o),t=o}var s=u(this.$props,b);s.slim=this.targetSlim,s.tag=this.targetTag,s.slotProps=this.targetSlotProps,s.name=this.to,this.portalTarget=new m({el:t,parent:this.$parent||this,propsData:s})}}else console.error("[portal-vue]: Mount Point '".concat(this.mountTo,"' not found in document"))}},beforeDestroy:function(){var t=this.portalTarget;if(this.append){var e=t.$el;e.parentNode.removeChild(e)}t.$destroy()},render:function(t){if(!this.portalTarget)return console.warn("[portal-vue] Target wasn't mounted"),t();if(!this.$scopedSlots.manual){var e=u(this.$props,v);return t(g,{props:e,attrs:this.$attrs,on:this.$listeners,scopedSlots:this.$scopedSlots},this.$slots.default)}var n=this.$scopedSlots.manual({to:this.to});return Array.isArray(n)&&(n=n[0]),n||t()}});var w={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.component(e.portalName||"Portal",g),t.component(e.portalTargetName||"PortalTarget",m),t.component(e.MountingPortalName||"MountingPortal",S)}};e.ZP=w},51900:(t,e,n)=>{function r(t,e,n,r,o,s,i,a){var u,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),i?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=u):o&&(u=a?function(){o.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:o),u)if(l.functional){l._injectStyles=u;var c=l.render;l.render=function(t,e){return u.call(e),c(t,e)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,u):[u]}return{exports:t,options:l}}n.d(e,{Z:()=>r})}},t=>{t.O(0,[8204],(()=>{return e=87046,t(t.s=e);var e}));t.O()}]);