import{_ as g,S as B,a as v,b as h,c as y}from"./SideMenu.f3a6d273.js";import{B as n,C as E,D as H,E as N,F as A,G as D,H as P,i as s,I as G,J as O,N as V,O as W,Q as m,a as z,y as F}from"./entry.46591473.js";import{d as I,k as p,ag as L,e as R,w as Y,o as q,q as J,Y as l,a3 as u,_ as o,a5 as f,S as r,f as a,$ as i,a2 as Q,h as j}from"./vue.13bb76e9.js";import"./ant.ba1bd7fe.js";import"./SettingOutlined.f667cc06.js";import"./ck.e23e6285.js";import"./moment.8b5e7d95.js";import"./cryptoJs.940212dc.js";import"./numeral.ccce3a12.js";import"./common.00ee525f.js";const K=I({name:"BasicLayout",components:{MultiTab:g,SideMenu:B,GlobalHeader:v,GlobalFooter:h,SettingDrawer:y},setup(){const e=p(!1);p([]);const c=L(),d=R(()=>!m.value||s.value?"0":n.value?"256px":"70px");return Y(()=>n.value,t=>{e.value=!t}),q(()=>{navigator.userAgent.indexOf("Edge")>-1&&J(()=>{e.value=!e.value,setTimeout(()=>{e.value=!e.value},16)}),n.value||(e.value=!0)}),{collapsed:e,contentPaddingLeft:d,toggle:()=>{e.value=!e.value,c.commit(O,!e.value),V()},paddingCalc:()=>{let t="";return n.value?t=W.value?"256px":"70px":t=s.value&&"0"||m.value&&"70px"||"0",t},drawerClose:()=>{e.value=!1},multiTab:E,device:H,layoutMode:N,contentWidth:A,fixedHeader:D,navTheme:P,isMobile:s,isSideMenu:G}}}),U={class:"bg-slate-60 dark:bg-slate-800",style:"height: 100%; "},X={class:"flex"};function Z(e,c,d,b,x,T){const t=v,C=g,w=F,S=r("a-layout-content"),k=h,M=r("a-layout-footer"),$=y,_=r("a-layout");return l(),u(_,{class:f(["layout",e.device])},{default:o(()=>[a(_,{class:f([e.layoutMode,`content-width-${e.contentWidth}`]),style:{minHeight:"100vh"}},{default:o(()=>[a(t,{class:"module-page",theme:e.navTheme,collapsed:!0,moduleHeader:!0,device:e.device,onToggle:e.toggle},null,8,["theme","device","onToggle"]),a(S,null,{default:o(()=>[i("div",U,[e.multiTab?(l(),u(C,{key:0})):Q("",!0),a(j,{name:"page-transition"},{default:o(()=>[i("section",null,[i("div",X,[(l(),u(w,{key:e.$route.fullPath}))])])]),_:1})])]),_:1}),a(M,{class:""},{default:o(()=>[a(k)]),_:1}),a($)]),_:1},8,["class"])]),_:1},8,["class"])}const ce=z(K,[["render",Z]]);export{ce as default};
