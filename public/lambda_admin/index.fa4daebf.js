import{a as r}from"./entry.9b01c438.js";import{X as l,Y as n,_ as e,a0 as i,F as d,$ as u,a4 as _,a1 as g,P as h,a6 as m}from"./vue.300029e2.js";import"./common.01c9107c.js";import"./ant.d96fdebf.js";import"./moment.8b5e7d95.js";import"./ag.1d467b62.js";import"./lodash.ccbc03fa.js";import"./numeral.6cca0570.js";import"./cryptoJs.b65e2552.js";const v={props:["lambda","subTitle","languages","copyright","title","selectedLang","switchLanguage"],name:"default",data(){return{loading:!1,isSuccess:!1,isError:!1,credentials:{login:null,password:null}}},computed:{lang(){const s=["title","subtitle"];return s.reduce((o,t,c)=>(o[t]=this.$t("user."+s[c]),o),{})}}},f={class:"wrap"},b={class:"content"},p=e("div",{class:"content-blur"},null,-1),y=e("div",{class:"content-color-layer"},null,-1),k={id:"slideshow"},w={class:"one"},x={class:"auth"},L=e("div",{class:"auth-blur"},null,-1),S=e("div",{class:"auth-color-layer"},null,-1),C={key:0,class:"lang-switcher"},z=["onClick"];function B(s,o,t,c,E,F){return l(),n("div",{class:"login default-theme",style:m({backgroundImage:"url("+t.lambda.bg+")",backgroundSize:"cover",backgroundPosition:"center top"})},[e("div",f,[e("div",b,[p,y,e("div",k,[e("div",w,[e("h2",null,[e("span",null,i(t.title),1)]),e("p",null,i(t.subTitle),1)])])]),e("div",x,[L,S,t.lambda.has_language&&t.languages.length>=2?(l(),n("div",C,[(l(!0),n(d,null,u(t.languages,a=>(l(),n("a",{key:a.index,class:_(t.selectedLang==a.value?"active":""),href:"javascript:void(0)",onClick:N=>t.switchLanguage(a.code)},i(a.label),11,z))),128))])):g("",!0),h(s.$slots,"default")])])],4)}const A=r(v,[["render",B]]);export{A as default};
