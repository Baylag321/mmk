import{_ as f,S as B,a as g,b as h,c as y}from"./SideMenu.edeb5599.js";import{o as n,p as E,q as A,r as H,t as N,v as P,w as z,i as s,x as D,y as V,z as W,B as G,C as m,a as L,m as O}from"./entry.07ce20b5.js";import{d as R,n as p,ai as j,j as q,w as F,o as I,s as U,Z as l,a4 as r,$ as o,a6 as v,U as u,c as a,a0 as i,a3 as Y,k as Z}from"./vue.94d6394d.js";import"./ant.01c818db.js";import"./SettingOutlined.305375d6.js";import"./ck.c9c8ed17.js";import"./common.c0c079f4.js";import"./moment.8b5e7d95.js";import"./ag.01cba310.js";import"./lodash.1dddd912.js";import"./numeral.fd2a7c31.js";import"./cryptoJs.33cead7e.js";const J=R({name:"BasicLayout",components:{MultiTab:f,SideMenu:B,GlobalHeader:g,GlobalFooter:h,SettingDrawer:y},setup(){const e=p(!1);p([]);const c=j(),d=q(()=>!m.value||s.value?"0":n.value?"256px":"70px");return F(()=>n.value,t=>{e.value=!t}),I(()=>{navigator.userAgent.indexOf("Edge")>-1&&U(()=>{e.value=!e.value,setTimeout(()=>{e.value=!e.value},16)}),n.value||(e.value=!0)}),{collapsed:e,contentPaddingLeft:d,toggle:()=>{e.value=!e.value,c.commit(V,!e.value),W()},paddingCalc:()=>{let t="";return n.value?t=G.value?"256px":"70px":t=s.value&&"0"||m.value&&"70px"||"0",t},drawerClose:()=>{e.value=!1},multiTab:E,device:A,layoutMode:H,contentWidth:N,fixedHeader:P,navTheme:z,isMobile:s,isSideMenu:D}}}),K={class:"bg-slate-60 dark:bg-slate-800",style:"height: 100%; "},Q={class:"flex"};function X(e,c,d,b,x,T){const t=g,w=f,C=O,k=u("a-layout-content"),S=h,M=u("a-layout-footer"),$=y,_=u("a-layout");return l(),r(_,{class:v(["layout",e.device])},{default:o(()=>[a(_,{class:v([e.layoutMode,`content-width-${e.contentWidth}`]),style:{minHeight:"100vh"}},{default:o(()=>[a(t,{class:"module-page",theme:e.navTheme,collapsed:!0,moduleHeader:!0,device:e.device,onToggle:e.toggle},null,8,["theme","device","onToggle"]),a(k,null,{default:o(()=>[i("div",K,[e.multiTab?(l(),r(w,{key:0})):Y("",!0),a(Z,{name:"page-transition"},{default:o(()=>[i("section",null,[i("div",Q,[(l(),r(C,{key:e.$route.fullPath}))])])]),_:1})])]),_:1}),a(M,{class:""},{default:o(()=>[a(S)]),_:1}),a($)]),_:1},8,["class"])]),_:1},8,["class"])}const _e=L(J,[["render",X]]);export{_e as default};