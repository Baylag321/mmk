import{_ as M,S as L,a as k,b as S,c as $}from"./SideMenu.6d10afe8.js";import{n as D,o as u,p as R,q as V,r as W,t as G,v as O,w as j,i as d,x as q,y as F,z as I,B as U,C as y,a as Y,m as Z}from"./entry.bbc0a0fe.js";import{d as x,n as b,ai as J,j as K,w as T,o as Q,s as X,Z as n,a4 as l,$ as s,a6 as w,U as i,c as t,a3 as m,a0 as p,k as ee,a8 as C}from"./vue.94d6394d.js";import"./ant.a39268cc.js";import"./SettingOutlined.9672bf8d.js";import"./ck.c9ee949f.js";import"./common.683a698b.js";import"./moment.8b5e7d95.js";import"./ag.01cba310.js";import"./lodash.a5f6e27a.js";import"./numeral.3554dd39.js";import"./cryptoJs.1212ab17.js";const ae=x({name:"BasicLayout",components:{MultiTab:M,SideMenu:L,GlobalHeader:k,GlobalFooter:S,SettingDrawer:$},setup(){const e=D(),a=b(!1);b([]);const c=J(),v=K(()=>!y.value||d.value?"0":u.value?"256px":"70px");u.value?a.value=!1:a.value=!0,T(()=>u.value,o=>{a.value=!o}),T(()=>e.fullPath,o=>{d.value&&r()}),Q(()=>{navigator.userAgent.indexOf("Edge")>-1&&X(()=>{a.value=!a.value,setTimeout(()=>{a.value=!a.value},16)})});const _=()=>{a.value=!a.value,c.commit(F,!a.value),I()},g=()=>{let o="";return u.value?o=U.value?"256px":"70px":o=d.value&&"0"||y.value&&"70px"||"0",o},r=()=>{a.value=!1};return{collapsed:a,contentPaddingLeft:v,toggle:_,paddingCalc:g,drawerClose:r,multiTab:R,device:V,layoutMode:W,contentWidth:G,fixedHeader:O,navTheme:j,isMobile:d,isSideMenu:q}}}),oe={class:"flex"};function te(e,a,c,v,_,g){const r=i("side-menu"),o=i("a-drawer"),B=k,N=M,f=i("portal-target"),E=Z,P=i("a-layout-content"),z=S,A=i("a-layout-footer"),H=$,h=i("a-layout");return n(),l(h,{class:w(["layout",e.device])},{default:s(()=>[e.isMobile?(n(),l(o,{key:0,placement:"left",wrapClassName:`drawer-sider ${e.navTheme}`,closable:!1,visible:e.collapsed,width:"275",onClose:e.drawerClose},{default:s(()=>[t(r,{mode:"inline",theme:e.navTheme,collapsed:!1,collapsible:!0,onToggle:e.toggle,device:e.device},null,8,["theme","onToggle","device"])]),_:1},8,["wrapClassName","visible","onClose"])):e.isSideMenu()?(n(),l(r,{key:1,mode:"inline",theme:e.navTheme,collapsed:e.collapsed,collapsible:!0,onToggle:e.toggle,device:e.device},null,8,["theme","collapsed","onToggle","device"])):m("",!0),t(h,{class:w([e.layoutMode,`content-width-${e.contentWidth}`]),style:C({paddingLeft:e.contentPaddingLeft,minHeight:"100vh"})},{default:s(()=>[t(B,{mode:e.layoutMode,theme:e.navTheme,collapsed:e.collapsed,device:e.device,onToggle:e.toggle},null,8,["mode","theme","collapsed","device","onToggle"]),t(P,null,{default:s(()=>[p("div",{class:"bg-slate-60 dark:bg-slate-800",style:C(`height: 100%; padding: ${e.fixedHeader?e.layoutMode==="levelmenu"?"20px":"87px":"20px"} 24px 20px;`)},[e.multiTab?(n(),l(N,{key:0})):m("",!0),t(ee,{name:"page-transition"},{default:s(()=>[p("section",null,[e.isMobile||e.layoutMode==="topmenu"?(n(),l(f,{key:0,name:"mobile-page-title"})):m("",!0),p("div",oe,[t(f,{name:"level-menu"}),(n(),l(E,{key:e.$route.path}))])])]),_:1})],4)]),_:1}),t(A,{class:""},{default:s(()=>[t(z)]),_:1}),t(H)]),_:1},8,["class","style"])]),_:1},8,["class"])}const ge=Y(ae,[["render",te]]);export{ge as default};
