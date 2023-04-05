import{_ as M,S as R,a as S,b as $,c as N}from"./SideMenu.fa5c568b.js";import{h as V,F as d,G as z,H as D,l as G,I as O,J as j,N as F,i as u,O as I,Q as x,R as J,V as Q,W as b,a as Y,E as Z}from"./entry.6fd2a578.js";import{d as q,n as y,aj as K,j as U,w as T,o as X,s as ee,Z as n,a1 as l,a0 as s,a8 as w,W as i,u as C,c as o,a2 as c,$ as m,k as ae,ab as k}from"./vue.65c51cdf.js";import"./ant.770c87db.js";import"./SettingOutlined.193b4281.js";import"./RenderSubMenu.3f64804f.js";import"./ck.660397d8.js";import"./common.72b693eb.js";import"./moment.8b5e7d95.js";import"./ag.23ecb9ea.js";import"./lodash.d251a0a5.js";import"./numeral.1f6cf9d6.js";import"./cryptoJs.f0105b17.js";const oe=q({name:"BasicLayout",components:{MultiTab:M,SideMenu:R,GlobalHeader:S,GlobalFooter:$,SettingDrawer:N},setup(){const e=V(),a=y(!1);y([]);const _=K(),v=U(()=>!b.value||u.value?"0":d.value?"256px":"70px");d.value?a.value=!1:a.value=!0,T(()=>d.value,t=>{a.value=!t}),T(()=>e.fullPath,t=>{u.value&&r()}),X(()=>{navigator.userAgent.indexOf("Edge")>-1&&ee(()=>{a.value=!a.value,setTimeout(()=>{a.value=!a.value},16)})});const g=()=>{a.value=!a.value,_.commit(x,!a.value),J()},f=()=>{let t="";return d.value?t=Q.value?"256px":"70px":t=u.value&&"0"||b.value&&"70px"||"0",t},r=()=>{a.value=!1};return{collapsed:a,contentPaddingLeft:v,toggle:g,paddingCalc:f,drawerClose:r,multiTab:z,device:D,layoutMode:G,contentWidth:O,fixedHeader:j,navTheme:F,isMobile:u,isSideMenu:I}}}),te={class:"flex"},ne={class:"w-full"};function le(e,a,_,v,g,f){const r=i("side-menu"),t=i("a-drawer"),E=S,B=M,p=i("portal-target"),H=Z,P=i("a-layout-content"),W=$,A=i("a-layout-footer"),L=N,h=i("a-layout");return n(),l(h,{class:w(["layout",e.device])},{default:s(()=>[C(u)?(n(),l(t,{key:0,placement:"left",wrapClassName:`drawer-sider ${e.navTheme}`,closable:!1,visible:e.collapsed,width:"275",onClose:e.drawerClose},{default:s(()=>[o(r,{mode:"inline",theme:e.navTheme,collapsed:!1,collapsible:!0,onToggle:e.toggle,device:e.device},null,8,["theme","onToggle","device"])]),_:1},8,["wrapClassName","visible","onClose"])):e.isSideMenu()?(n(),l(r,{key:1,mode:"inline",theme:e.navTheme,collapsed:e.collapsed,collapsible:!0,onToggle:e.toggle,device:e.device},null,8,["theme","collapsed","onToggle","device"])):c("",!0),o(h,{class:w([e.layoutMode,`content-width-${e.contentWidth}`]),style:k({paddingLeft:e.contentPaddingLeft,minHeight:"100vh"})},{default:s(()=>[o(E,{mode:e.layoutMode,theme:e.navTheme,collapsed:e.collapsed,device:e.device,onToggle:e.toggle},null,8,["mode","theme","collapsed","device","onToggle"]),o(P,null,{default:s(()=>[m("div",{class:"bg-slate-60 dark:bg-slate-800",style:k(`height: 100%; padding: ${e.fixedHeader?e.layoutMode==="levelmenu"?"20px":"87px":"20px"} 24px 20px;`)},[e.multiTab?(n(),l(B,{key:0})):c("",!0),o(ae,{name:"page-transition"},{default:s(()=>[m("section",null,[C(u)||e.layoutMode==="topmenu"?(n(),l(p,{key:0,name:"mobile-page-title"})):c("",!0),m("div",te,[o(p,{name:"level-menu"}),m("div",ne,[o(p,{name:"sub-top-menu"}),(n(),l(H,{key:e.$route.path}))])])])]),_:1})],4)]),_:1}),o(A,{class:""},{default:s(()=>[o(W)]),_:1}),o(L)]),_:1},8,["class","style"])]),_:1},8,["class"])}const be=Y(oe,[["render",le]]);export{be as default};
