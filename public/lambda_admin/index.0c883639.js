import{a as o}from"./entry.f4b9eee7.js";import{Z as s,_ as n,$ as t,a3 as l,F as c,a6 as r,a8 as d,a2 as _,S as g,ab as u}from"./vue.65c51cdf.js";import"./common.c40c4e6a.js";import"./ant.e036270e.js";import"./moment.8b5e7d95.js";import"./ag.ab39fb93.js";import"./lodash.888217fe.js";import"./numeral.4dda2596.js";import"./cryptoJs.61df0830.js";const h={props:["lambda","subTitle","languages","copyright","title","selectedLang","switchLanguage"],data(){return{loading:!1,isSuccess:!1,isError:!1,credentials:{login:null,password:null}}}},m={class:"content"},y=t("div",{class:"content-layer"},null,-1),f={class:"title"},v={style:{"max-width":"600px"}},b={class:"auth"},p={key:0,class:"lang-switcher"},x=["onClick"],k={class:"form-wrap"},w=["innerHTML"];function L(i,S,e,C,T,B){return s(),n("div",{class:"login aside-theme",style:u({backgroundImage:"url("+e.lambda.bg+")"})},[t("div",m,[y,t("div",f,[t("h2",v,l(e.title),1),t("p",null,l(e.subTitle),1)])]),t("div",b,[e.lambda.has_language&&e.languages.length>=2?(s(),n("div",p,[(s(!0),n(c,null,r(e.languages,a=>(s(),n("a",{key:a.index,class:d(e.selectedLang===a.code?"active":""),onClick:z=>e.switchLanguage(a.code)},l(a.label),11,x))),128))])):_("",!0),t("div",k,[g(i.$slots,"default"),t("div",{class:"copyright",style:{width:"70%","text-align":"center"},innerHTML:e.copyright},null,8,w)])])],4)}const j=o(h,[["render",L]]);export{j as default};
