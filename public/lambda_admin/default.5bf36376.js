import{_ as M,S as L,a as S,b as $,c as N}from"./SideMenu.f3a6d273.js";import{z as G,B as d,C as O,D as R,E as V,F as W,G as F,H as I,i as u,I as Y,J as q,N as x,O as J,Q as y,a as Q,y as j}from"./entry.46591473.js";import{d as K,k as b,ag as U,e as X,w as T,o as Z,q as ee,Y as n,a3 as l,_ as s,a5 as w,S as i,u as C,f as t,a2 as c,$ as m,h as ae,a7 as k}from"./vue.13bb76e9.js";import"./ant.ba1bd7fe.js";import"./SettingOutlined.f667cc06.js";import"./ck.e23e6285.js";import"./moment.8b5e7d95.js";import"./cryptoJs.940212dc.js";import"./numeral.ccce3a12.js";import"./common.00ee525f.js";const oe=K({name:"BasicLayout",components:{MultiTab:M,SideMenu:L,GlobalHeader:S,GlobalFooter:$,SettingDrawer:N},setup(){const e=G(),a=b(!1);b([]);const p=U(),_=X(()=>!y.value||u.value?"0":d.value?"256px":"70px");d.value?a.value=!1:a.value=!0,T(()=>d.value,o=>{a.value=!o}),T(()=>e.fullPath,o=>{u.value&&r()}),Z(()=>{navigator.userAgent.indexOf("Edge")>-1&&ee(()=>{a.value=!a.value,setTimeout(()=>{a.value=!a.value},16)})});const v=()=>{a.value=!a.value,p.commit(q,!a.value),x()},g=()=>{let o="";return d.value?o=J.value?"256px":"70px":o=u.value&&"0"||y.value&&"70px"||"0",o},r=()=>{a.value=!1};return{collapsed:a,contentPaddingLeft:_,toggle:v,paddingCalc:g,drawerClose:r,multiTab:O,device:R,layoutMode:V,contentWidth:W,fixedHeader:F,navTheme:I,isMobile:u,isSideMenu:Y}}}),te={class:"flex"};function ne(e,a,p,_,v,g){const r=i("side-menu"),o=i("a-drawer"),B=S,E=M,f=i("portal-target"),H=j,P=i("a-layout-content"),z=$,A=i("a-layout-footer"),D=N,h=i("a-layout");return n(),l(h,{class:w(["layout",e.device])},{default:s(()=>[C(u)?(n(),l(o,{key:0,placement:"left",wrapClassName:`drawer-sider ${e.navTheme}`,closable:!1,visible:e.collapsed,width:"275",onClose:e.drawerClose},{default:s(()=>[t(r,{mode:"inline",theme:e.navTheme,collapsed:!1,collapsible:!0,onToggle:e.toggle,device:e.device},null,8,["theme","onToggle","device"])]),_:1},8,["wrapClassName","visible","onClose"])):e.isSideMenu()?(n(),l(r,{key:1,mode:"inline",theme:e.navTheme,collapsed:e.collapsed,collapsible:!0,onToggle:e.toggle,device:e.device},null,8,["theme","collapsed","onToggle","device"])):c("",!0),t(h,{class:w([e.layoutMode,`content-width-${e.contentWidth}`]),style:k({paddingLeft:e.contentPaddingLeft,minHeight:"100vh"})},{default:s(()=>[t(B,{mode:e.layoutMode,theme:e.navTheme,collapsed:e.collapsed,device:e.device,onToggle:e.toggle},null,8,["mode","theme","collapsed","device","onToggle"]),t(P,null,{default:s(()=>[m("div",{class:"bg-slate-60 dark:bg-slate-800",style:k(`height: 100%; padding: ${e.fixedHeader?e.layoutMode==="levelmenu"?"20px":"87px":"20px"} 24px 20px;`)},[e.multiTab?(n(),l(E,{key:0})):c("",!0),t(ae,{name:"page-transition"},{default:s(()=>[m("section",null,[C(u)||e.layoutMode==="topmenu"?(n(),l(f,{key:0,name:"mobile-page-title"})):c("",!0),m("div",te,[t(f,{name:"level-menu"}),(n(),l(H,{key:e.$route.path}))])])]),_:1})],4)]),_:1}),t(A,{class:""},{default:s(()=>[t(z)]),_:1}),t(D)]),_:1},8,["class","style"])]),_:1},8,["class"])}const ve=Q(oe,[["render",ne]]);export{ve as default};
