import{_ as n}from"./entry.f4b9eee7.js";import{Y as c,Z as g,a1 as E,ac as k,ad as P,u as r}from"./vue.65c51cdf.js";import"./common.c40c4e6a.js";import"./ant.e036270e.js";import"./moment.8b5e7d95.js";import"./ag.ab39fb93.js";import"./lodash.888217fe.js";import"./numeral.4dda2596.js";import"./cryptoJs.61df0830.js";const v={__name:"nuxt-error-page",props:{error:Object},setup(i){var a;const{error:e}=i;(e.stack||"").split(`
`).splice(1).map(t=>({text:t.replace("webpack:/","").replace(".vue",".js").trim(),internal:t.includes("node_modules")&&!t.includes(".cache")||t.includes("internal")||t.includes("new Promise")})).map(t=>`<span class="stack${t.internal?" internal":""}">${t.text}</span>`).join(`
`);const s=Number(e.statusCode||500),o=s===404,p=(a=e.statusMessage)!=null?a:o?"Page Not Found":"Internal Server Error",u=e.message||e.toString(),m=void 0,_=c(()=>n(()=>import("./error-404.e3f1c45d.js"),["./error-404.e3f1c45d.js","./entry.f4b9eee7.js","./vue.65c51cdf.js","./common.c40c4e6a.js","./ant.e036270e.js","./moment.8b5e7d95.js","./ag.ab39fb93.js","./lodash.888217fe.js","./numeral.4dda2596.js","./cryptoJs.61df0830.js","./entry.0c2e97f4.css","./composables.4f27e254.js","./error-404.0cd4f3dd.css"],import.meta.url).then(t=>t.default||t)),d=c(()=>n(()=>import("./error-500.7633389a.js"),["./error-500.7633389a.js","./composables.4f27e254.js","./entry.f4b9eee7.js","./vue.65c51cdf.js","./common.c40c4e6a.js","./ant.e036270e.js","./moment.8b5e7d95.js","./ag.ab39fb93.js","./lodash.888217fe.js","./numeral.4dda2596.js","./cryptoJs.61df0830.js","./entry.0c2e97f4.css","./error-500.748cb764.css"],import.meta.url).then(t=>t.default||t)),l=o?_:d;return(t,f)=>(g(),E(r(l),k(P({statusCode:r(s),statusMessage:r(p),description:r(u),stack:r(m)})),null,16))}},R=v;export{R as default};
