import{_ as n}from"./entry.6fd2a578.js";import{Y as c,Z as g,a1 as E,ac as k,ad as P,u as r}from"./vue.65c51cdf.js";import"./common.72b693eb.js";import"./ant.770c87db.js";import"./moment.8b5e7d95.js";import"./ag.23ecb9ea.js";import"./lodash.d251a0a5.js";import"./numeral.1f6cf9d6.js";import"./cryptoJs.f0105b17.js";const v={__name:"nuxt-error-page",props:{error:Object},setup(i){var a;const{error:e}=i;(e.stack||"").split(`
`).splice(1).map(t=>({text:t.replace("webpack:/","").replace(".vue",".js").trim(),internal:t.includes("node_modules")&&!t.includes(".cache")||t.includes("internal")||t.includes("new Promise")})).map(t=>`<span class="stack${t.internal?" internal":""}">${t.text}</span>`).join(`
`);const s=Number(e.statusCode||500),o=s===404,p=(a=e.statusMessage)!=null?a:o?"Page Not Found":"Internal Server Error",u=e.message||e.toString(),m=void 0,_=c(()=>n(()=>import("./error-404.968c4259.js"),["./error-404.968c4259.js","./entry.6fd2a578.js","./vue.65c51cdf.js","./common.72b693eb.js","./ant.770c87db.js","./moment.8b5e7d95.js","./ag.23ecb9ea.js","./lodash.d251a0a5.js","./numeral.1f6cf9d6.js","./cryptoJs.f0105b17.js","./entry.86b47746.css","./composables.51d5719c.js","./error-404.0cd4f3dd.css"],import.meta.url).then(t=>t.default||t)),d=c(()=>n(()=>import("./error-500.e2c701b9.js"),["./error-500.e2c701b9.js","./composables.51d5719c.js","./entry.6fd2a578.js","./vue.65c51cdf.js","./common.72b693eb.js","./ant.770c87db.js","./moment.8b5e7d95.js","./ag.23ecb9ea.js","./lodash.d251a0a5.js","./numeral.1f6cf9d6.js","./cryptoJs.f0105b17.js","./entry.86b47746.css","./error-500.748cb764.css"],import.meta.url).then(t=>t.default||t)),l=o?_:d;return(t,f)=>(g(),E(r(l),k(P({statusCode:r(s),statusMessage:r(p),description:r(u),stack:r(m)})),null,16))}},R=v;export{R as default};