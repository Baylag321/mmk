import{a as r}from"./entry.6fd2a578.js";import{Z as l,_ as n,$ as e,a3 as i,F as d,a6 as u,a8 as _,a2 as g,S as h,ab as m}from"./vue.65c51cdf.js";import"./common.72b693eb.js";import"./ant.770c87db.js";import"./moment.8b5e7d95.js";import"./ag.23ecb9ea.js";import"./lodash.d251a0a5.js";import"./numeral.1f6cf9d6.js";import"./cryptoJs.f0105b17.js";const v={props:["lambda","subTitle","languages","copyright","title","selectedLang","switchLanguage"],name:"default",data(){return{loading:!1,isSuccess:!1,isError:!1,credentials:{login:null,password:null}}},computed:{lang(){const s=["title","subtitle"];return s.reduce((o,t,c)=>(o[t]=this.$t("user."+s[c]),o),{})}}},b={class:"wrap"},f={class:"content"},p=e("div",{class:"content-blur"},null,-1),y=e("div",{class:"content-color-layer"},null,-1),k={id:"slideshow"},w={class:"one"},x={class:"auth"},S=e("div",{class:"auth-blur"},null,-1),L=e("div",{class:"auth-color-layer"},null,-1),C={key:0,class:"lang-switcher"},z=["onClick"];function B(s,o,t,c,E,F){return l(),n("div",{class:"login default-theme",style:m({backgroundImage:"url("+t.lambda.bg+")",backgroundSize:"cover",backgroundPosition:"center top"})},[e("div",b,[e("div",f,[p,y,e("div",k,[e("div",w,[e("h2",null,[e("span",null,i(t.title),1)]),e("p",null,i(t.subTitle),1)])])]),e("div",x,[S,L,t.lambda.has_language&&t.languages.length>=2?(l(),n("div",C,[(l(!0),n(d,null,u(t.languages,a=>(l(),n("a",{key:a.index,class:_(t.selectedLang==a.value?"active":""),href:"javascript:void(0)",onClick:N=>t.switchLanguage(a.code)},i(a.label),11,z))),128))])):g("",!0),h(s.$slots,"default")])])],4)}const G=r(v,[["render",B]]);export{G as default};
