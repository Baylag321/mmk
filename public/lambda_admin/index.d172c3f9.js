import{a as r}from"./entry.07ce20b5.js";import{Z as l,_ as n,a0 as e,a2 as i,F as d,a1 as u,a6 as _,a3 as g,Q as h,a8 as m}from"./vue.94d6394d.js";import"./common.c0c079f4.js";import"./ant.01c818db.js";import"./moment.8b5e7d95.js";import"./ag.01cba310.js";import"./lodash.1dddd912.js";import"./numeral.fd2a7c31.js";import"./cryptoJs.33cead7e.js";const v={props:["lambda","subTitle","languages","copyright","title","selectedLang","switchLanguage"],name:"default",data(){return{loading:!1,isSuccess:!1,isError:!1,credentials:{login:null,password:null}}},computed:{lang(){const a=["title","subtitle"];return a.reduce((o,t,c)=>(o[t]=this.$t("user."+a[c]),o),{})}}},f={class:"wrap"},b={class:"content"},p=e("div",{class:"content-blur"},null,-1),y=e("div",{class:"content-color-layer"},null,-1),k={id:"slideshow"},w={class:"one"},x={class:"auth"},L=e("div",{class:"auth-blur"},null,-1),S=e("div",{class:"auth-color-layer"},null,-1),C={key:0,class:"lang-switcher"},z=["onClick"];function B(a,o,t,c,E,F){return l(),n("div",{class:"login default-theme",style:m({backgroundImage:"url("+t.lambda.bg+")",backgroundSize:"cover",backgroundPosition:"center top"})},[e("div",f,[e("div",b,[p,y,e("div",k,[e("div",w,[e("h2",null,[e("span",null,i(t.title),1)]),e("p",null,i(t.subTitle),1)])])]),e("div",x,[L,S,t.lambda.has_language&&t.languages.length>=2?(l(),n("div",C,[(l(!0),n(d,null,u(t.languages,s=>(l(),n("a",{key:s.index,class:_(t.selectedLang==s.value?"active":""),href:"javascript:void(0)",onClick:N=>t.switchLanguage(s.code)},i(s.label),11,z))),128))])):g("",!0),h(a.$slots,"default")])])],4)}const A=r(v,[["render",B]]);export{A as default};
