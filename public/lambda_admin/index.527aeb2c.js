import{H as I,T as R}from"./components.6b196aa5.js";import{S,g as N,c as C,a as T,d as $,s as h,K as B,P as D,L,M as A,i as P,b as V,e as E}from"./entry.6fd2a578.js";import{S as F}from"./SettingOutlined.193b4281.js";import{d as O,Z as s,_ as n,a8 as k,a2 as i,a1 as a,$ as m,a3 as l,F as g,a6 as f,a0 as y,W as M,H as v,c as w}from"./vue.65c51cdf.js";import"./composables.51d5719c.js";import"./common.72b693eb.js";import"./ant.770c87db.js";import"./moment.8b5e7d95.js";import"./ag.23ecb9ea.js";import"./lodash.d251a0a5.js";import"./numeral.1f6cf9d6.js";import"./cryptoJs.f0105b17.js";const K=O({name:"HomeMenuRender",props:["item","cruds","permissions","title","children"],components:{SvgIcon:S,SettingOutlined:F},data(){return{}},methods:{getModuleItem(e){if(e.children)return e},findActivehild(e){let o=0;for(;!this.can(e.children[o]);)o++;return{...e.children[o],svg:e.svg,icon:e.icon}},getPath(e){return N(e)},can(e){return this.permissions[e.id]?!!this.permissions[e.id].show:!1},getTitleHome(e,o){return this.title&&!o?this.title:C(e,this.cruds)},hasItems(e){return e&&e.children!==void 0?e.children.length>0:!1}}});const U=["href"],z={key:2,class:"module-menus"},G={key:0},W={key:2,class:"module-menus"},Z={key:0},j={key:2,class:"module-menus"},q={key:0};function J(e,o,b,t,u,_){const c=M("inline-svg"),p=$,H=M("HomeMenuRender",!0);return s(),n(g,null,[e.can(e.item)&&!e.hasItems(e.item)&&e.item.link_to==="link"?(s(),n("a",{key:0,class:"card p-4 sm:p-5 shadow-md bg-white dark:bg-slate-900 bg-white dark:bg-slate-900",href:e.item.url,target:"_blank"},[e.item.icon?(s(),n("i",{key:0,class:k(e.item.icon)},null,2)):i("",!0),e.item.svg?(s(),a(c,{key:1,class:"svg-icon",src:e.item.svg},null,8,["src"])):i("",!0),m("span",null,l(e.getTitleHome(e.item)),1),e.children?(s(),n("p",z,[(s(!0),n(g,null,f(e.children,(r,d)=>(s(),n("span",{key:r.index},[d>=1?(s(),n("span",G,", ")):i("",!0),v(l(e.getTitleHome(r,!0)),1)]))),128))])):i("",!0)],8,U)):e.can(e.item)&&!e.hasItems(e.item)&&e.item.link_to==="router-link"?(s(),a(p,{key:1,to:e.item.url,class:"card p-4 sm:p-5 shadow-md bg-white dark:bg-slate-900 bg-white dark:bg-slate-900"},{default:y(()=>[e.item.icon?(s(),n("i",{key:0,class:k(e.item.icon)},null,2)):i("",!0),e.item.svg?(s(),a(c,{key:1,class:"svg-icon",src:e.item.svg},null,8,["src"])):i("",!0),m("span",null,l(e.getTitleHome(e.item)),1),e.children?(s(),n("p",W,[(s(!0),n(g,null,f(e.children,(r,d)=>(s(),n("span",{key:r.index},[d>=1?(s(),n("span",Z,", ")):i("",!0),v(l(e.getTitleHome(r,!0)),1)]))),128))])):i("",!0)]),_:1},8,["to"])):e.can(e.item)&&!e.hasItems(e.item)&&e.item.link_to!=="divider"?(s(),a(p,{key:2,to:`/admin/p/${e.item.id}`,class:"card p-4 sm:p-5 shadow-md bg-white dark:bg-slate-900 bg-white dark:bg-slate-900"},{default:y(()=>[e.item.icon?(s(),n("i",{key:0,class:k(e.item.icon)},null,2)):i("",!0),e.item.svg?(s(),a(c,{key:1,class:"svg-icon",src:e.item.svg},null,8,["src"])):i("",!0),m("span",null,l(e.getTitleHome(e.item)),1),e.children?(s(),n("p",j,[(s(!0),n(g,null,f(e.children,(r,d)=>(s(),n("span",{key:d},[d>=1?(s(),n("span",q,", ")):i("",!0),v(l(e.getTitleHome(r,!0)),1)]))),128))])):i("",!0)]),_:1},8,["to"])):i("",!0),e.can(e.item)&&e.hasItems(e.item)?(s(),a(H,{key:3,title:e.getTitleHome(e.item),children:e.item.children,item:e.findActivehild(e.item),cruds:e.cruds,permissions:e.permissions},null,8,["title","children","item","cruds","permissions"])):i("",!0)],64)}const Q=T(K,[["render",J],["__scopeId","data-v-096c2eba"]]),X={name:"index",components:{HomeMenuRender:Q},setup(e,{emit:o}){const b=h.get(B),t=h.get(D),u=h.get(L),_=h.get(A);return{isMobile:P,menu:_,permissions:t,kruds:b,title:u.title,logo:u.logo,logoDark:u.logo_dark,base_url:V,darkMode:E}}},Y={class:"grid grow grid-nogutter module-page container pb-16 px-4 mx-auto"},x=["src","alt"],ee=["src","alt"],se={class:"module-navigation"};function ne(e,o,b,t,u,_){const c=R,p=I,H=M("HomeMenuRender");return s(),n("div",Y,[w(p,null,{default:y(()=>[w(c,null,{default:y(()=>[v(l(t.title),1)]),_:1})]),_:1}),m("div",null,[t.darkMode?(s(),n("img",{key:0,src:`${t.base_url}${t.logoDark}`,class:"logo-light",alt:t.title},null,8,x)):i("",!0),t.darkMode?i("",!0):(s(),n("img",{key:1,src:`${t.base_url}${t.logo}`,class:"logo-dark",alt:t.title},null,8,ee)),m("nav",se,[m("div",{class:k(t.isMobile?"grid grid-cols-1  gap-4":"grid grid-cols-3  gap-4")},[(s(!0),n(g,null,f(t.menu,r=>(s(),a(H,{key:r.index,item:r,cruds:t.kruds,permissions:t.permissions.permissions},null,8,["item","cruds","permissions"]))),128))],2)])])])}const he=T(X,[["render",ne]]);export{he as default};
