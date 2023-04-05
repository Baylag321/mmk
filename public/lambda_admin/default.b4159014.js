import{_ as M,S as R,a as S,b as $,c as N}from"./SideMenu.81c7684d.js";import{h as W,F as d,G as z,H as D,l as G,I as O,J as F,N as I,i as u,O as Y,Q as j,R as q,V as x,W as b,a as J,E as Q}from"./entry.e3cd167a.js";import{d as K,k as y,aj as U,e as X,w as T,o as Z,q as ee,Y as n,a0 as l,$ as s,a8 as w,V as i,u as C,f as o,a1 as c,_ as m,h as ae,ab as k}from"./vue.3f3be479.js";import"./ant.44dab1d6.js";import"./SettingOutlined.71c523f0.js";import"./RenderSubMenu.626d09f4.js";import"./ck.2be2f711.js";import"./common.194e1616.js";import"./moment.8b5e7d95.js";import"./lodash.7f89dc3c.js";import"./numeral.30e81b7f.js";import"./cryptoJs.b278cf6a.js";const oe=K({name:"BasicLayout",components:{MultiTab:M,SideMenu:R,GlobalHeader:S,GlobalFooter:$,SettingDrawer:N},setup(){const e=W(),a=y(!1);y([]);const _=U(),v=X(()=>!b.value||u.value?"0":d.value?"256px":"70px");d.value?a.value=!1:a.value=!0,T(()=>d.value,t=>{a.value=!t}),T(()=>e.fullPath,t=>{u.value&&r()}),Z(()=>{navigator.userAgent.indexOf("Edge")>-1&&ee(()=>{a.value=!a.value,setTimeout(()=>{a.value=!a.value},16)})});const f=()=>{a.value=!a.value,_.commit(j,!a.value),q()},g=()=>{let t="";return d.value?t=x.value?"256px":"70px":t=u.value&&"0"||b.value&&"70px"||"0",t},r=()=>{a.value=!1};return{collapsed:a,contentPaddingLeft:v,toggle:f,paddingCalc:g,drawerClose:r,multiTab:z,device:D,layoutMode:G,contentWidth:O,fixedHeader:F,navTheme:I,isMobile:u,isSideMenu:Y}}}),te={class:"flex"},ne={class:"w-full"};function le(e,a,_,v,f,g){const r=i("side-menu"),t=i("a-drawer"),E=S,B=M,p=i("portal-target"),H=Q,P=i("a-layout-content"),V=$,A=i("a-layout-footer"),L=N,h=i("a-layout");return n(),l(h,{class:w(["layout",e.device])},{default:s(()=>[C(u)?(n(),l(t,{key:0,placement:"left",wrapClassName:`drawer-sider ${e.navTheme}`,closable:!1,visible:e.collapsed,width:"275",onClose:e.drawerClose},{default:s(()=>[o(r,{mode:"inline",theme:e.navTheme,collapsed:!1,collapsible:!0,onToggle:e.toggle,device:e.device},null,8,["theme","onToggle","device"])]),_:1},8,["wrapClassName","visible","onClose"])):e.isSideMenu()?(n(),l(r,{key:1,mode:"inline",theme:e.navTheme,collapsed:e.collapsed,collapsible:!0,onToggle:e.toggle,device:e.device},null,8,["theme","collapsed","onToggle","device"])):c("",!0),o(h,{class:w([e.layoutMode,`content-width-${e.contentWidth}`]),style:k({paddingLeft:e.contentPaddingLeft,minHeight:"100vh"})},{default:s(()=>[o(E,{mode:e.layoutMode,theme:e.navTheme,collapsed:e.collapsed,device:e.device,onToggle:e.toggle},null,8,["mode","theme","collapsed","device","onToggle"]),o(P,null,{default:s(()=>[m("div",{class:"bg-slate-60 dark:bg-slate-800",style:k(`height: 100%; padding: ${e.fixedHeader?e.layoutMode==="levelmenu"?"20px":"87px":"20px"} 24px 20px;`)},[e.multiTab?(n(),l(B,{key:0})):c("",!0),o(ae,{name:"page-transition"},{default:s(()=>[m("section",null,[C(u)||e.layoutMode==="topmenu"?(n(),l(p,{key:0,name:"mobile-page-title"})):c("",!0),m("div",te,[o(p,{name:"level-menu"}),m("div",ne,[o(p,{name:"sub-top-menu"}),(n(),l(H,{key:e.$route.path}))])])])]),_:1})],4)]),_:1}),o(A,{class:""},{default:s(()=>[o(V)]),_:1}),o(L)]),_:1},8,["class","style"])]),_:1},8,["class"])}const he=J(oe,[["render",le]]);export{he as default};
