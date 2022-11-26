import{H as I,T as S}from"./components.01db0983.js";import{S as R,g as $,c as C,a as T,s as h,K as N,P as B,L as D,M as A,i as E,b as L,d as P}from"./entry.46591473.js";import{S as V}from"./SettingOutlined.f667cc06.js";import{d as F,Y as s,Z as n,a5 as k,a2 as i,a3 as l,$ as d,a1 as a,F as g,a0 as f,_,S as v,E as y,f as w}from"./vue.13bb76e9.js";import"./composables.aa3f3d9b.js";import"./ant.ba1bd7fe.js";import"./moment.8b5e7d95.js";import"./cryptoJs.940212dc.js";import"./numeral.ccce3a12.js";import"./common.00ee525f.js";const O=F({name:"HomeMenuRender",props:["item","cruds","permissions","title","children"],components:{SvgIcon:R,SettingOutlined:V},data(){return{}},methods:{getModuleItem(e){if(e.children)return e},findActivehild(e){let o=0;for(;!this.can(e.children[o]);)o++;return{...e.children[o],svg:e.svg,icon:e.icon}},getPath(e){return $(e)},can(e){return this.permissions[e.id]?!!this.permissions[e.id].show:!1},getTitleHome(e,o){return this.title&&!o?this.title:C(e,this.cruds)},hasItems(e){return e&&e.children!==void 0?e.children.length>0:!1}}});const K=["href"],U={key:2,class:"module-menus"},z={key:0},G={key:2,class:"module-menus"},Y={key:0},Z={key:2,class:"module-menus"},j={key:0};function q(e,o,b,t,u,H){const c=v("inline-svg"),p=v("router-link"),M=v("HomeMenuRender",!0);return s(),n(g,null,[e.can(e.item)&&!e.hasItems(e.item)&&e.item.link_to==="link"?(s(),n("a",{key:0,class:"card p-4 sm:p-5 shadow-md bg-white dark:bg-slate-900 bg-white dark:bg-slate-900",href:e.item.url,target:"_blank"},[e.item.icon?(s(),n("i",{key:0,class:k(e.item.icon)},null,2)):i("",!0),e.item.svg?(s(),l(c,{key:1,class:"svg-icon",src:e.item.svg},null,8,["src"])):i("",!0),d("span",null,a(e.getTitleHome(e.item)),1),e.children?(s(),n("p",U,[(s(!0),n(g,null,f(e.children,(r,m)=>(s(),n("span",{key:r.index},[m>=1?(s(),n("span",z,", ")):i("",!0),y(a(e.getTitleHome(r,!0)),1)]))),128))])):i("",!0)],8,K)):e.can(e.item)&&!e.hasItems(e.item)&&e.item.link_to==="router-link"?(s(),l(p,{key:1,to:e.item.url,class:"card p-4 sm:p-5 shadow-md bg-white dark:bg-slate-900 bg-white dark:bg-slate-900"},{default:_(()=>[e.item.icon?(s(),n("i",{key:0,class:k(e.item.icon)},null,2)):i("",!0),e.item.svg?(s(),l(c,{key:1,class:"svg-icon",src:e.item.svg},null,8,["src"])):i("",!0),d("span",null,a(e.getTitleHome(e.item)),1),e.children?(s(),n("p",G,[(s(!0),n(g,null,f(e.children,(r,m)=>(s(),n("span",{key:r.index},[m>=1?(s(),n("span",Y,", ")):i("",!0),y(a(e.getTitleHome(r,!0)),1)]))),128))])):i("",!0)]),_:1},8,["to"])):e.can(e.item)&&!e.hasItems(e.item)?(s(),l(p,{key:2,to:`/admin/p/${e.item.id}`,class:"card p-4 sm:p-5 shadow-md bg-white dark:bg-slate-900 bg-white dark:bg-slate-900"},{default:_(()=>[e.item.icon?(s(),n("i",{key:0,class:k(e.item.icon)},null,2)):i("",!0),e.item.svg?(s(),l(c,{key:1,class:"svg-icon",src:e.item.svg},null,8,["src"])):i("",!0),d("span",null,a(e.getTitleHome(e.item)),1),e.children?(s(),n("p",Z,[(s(!0),n(g,null,f(e.children,(r,m)=>(s(),n("span",{key:m},[m>=1?(s(),n("span",j,", ")):i("",!0),y(a(e.getTitleHome(r,!0)),1)]))),128))])):i("",!0)]),_:1},8,["to"])):i("",!0),e.can(e.item)&&e.hasItems(e.item)?(s(),l(M,{key:3,title:e.getTitleHome(e.item),children:e.item.children,item:e.findActivehild(e.item),cruds:e.cruds,permissions:e.permissions},null,8,["title","children","item","cruds","permissions"])):i("",!0)],64)}const J=T(O,[["render",q],["__scopeId","data-v-e47d797d"]]),Q={name:"index",components:{HomeMenuRender:J},setup(e,{emit:o}){const b=h.get(N),t=h.get(B),u=h.get(D),H=h.get(A);return{isMobile:E,menu:H,permissions:t,kruds:b,title:u.title,logo:u.logo,logoDark:u.logo_dark,base_url:L,darkMode:P}}},W={class:"grid grow grid-nogutter module-page container pb-16 px-4 mx-auto"},X={class:""},x={class:"my-20"},ee=["src","alt"],se=["src","alt"],ne={class:"module-navigation"};function te(e,o,b,t,u,H){const c=S,p=I,M=v("HomeMenuRender");return s(),n("div",W,[w(p,null,{default:_(()=>[w(c,null,{default:_(()=>[y(a(t.title),1)]),_:1})]),_:1}),d("div",X,[d("div",x,[t.darkMode?(s(),n("img",{key:0,src:`${t.base_url}${t.logoDark}`,class:"logo-light",alt:t.title},null,8,ee)):i("",!0),t.darkMode?i("",!0):(s(),n("img",{key:1,src:`${t.base_url}${t.logo}`,class:"logo-dark",alt:t.title},null,8,se))]),d("nav",ne,[d("div",{class:k(t.isMobile?"grid grid-cols-1  gap-4":"grid grid-cols-3  gap-4")},[(s(!0),n(g,null,f(t.menu,r=>(s(),l(M,{key:r.index,item:r,cruds:t.kruds,permissions:t.permissions.permissions},null,8,["item","cruds","permissions"]))),128))],2)])])])}const pe=T(Q,[["render",te]]);export{pe as default};
