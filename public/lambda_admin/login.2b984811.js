import{a as v}from"./common.72b693eb.js";import{Z as a,_ as c,$ as e,a3 as n,y as m,aa as u,c as g,a0 as _,H as h,E as y,a2 as p,W as f}from"./vue.65c51cdf.js";import{a as S}from"./entry.28040374.js";import"./ant.770c87db.js";import"./moment.8b5e7d95.js";import"./ag.ab39fb93.js";import"./lodash.d251a0a5.js";import"./numeral.1f6cf9d6.js";import"./cryptoJs.f0105b17.js";const k={props:["lambda","onSuccess","selectedLang"],name:"aside-login",data(){return{loading:!1,isSuccess:!1,isError:!1,credentials:{login:null,password:null}}},computed:{lang(){const l=["loginTitle","username","password","remember","login","forgot","loginSuccess","loginError"];return l.reduce((o,i,d)=>(o[i]=this.$t("user."+l[d]),o),{})}},methods:{onSubmit(){this.isSuccess=!1,this.isError=!1,this.loading||(this.loading=!0,v.post("/auth/login",this.credentials).then(({data:l})=>{l.status?this.onSuccess(l):(this.isError=!0,this.loading=!1)}).catch(l=>{this.loading=!1,this.isError=!0}))}}},w={class:"form-content"},E={key:0,class:"logo with-text"},T=["src"],V={key:1,class:"logo"},N=["src"],B={class:"form-element input"},C=["disabled","placeholder"],D=e("span",{class:"icon user"},null,-1),M={class:"form-element input"},U=["disabled","placeholder"],F=e("span",{class:"icon pass"},null,-1),H={class:"form-element"},L=e("input",{type:"checkbox",class:"checkbox",id:"remember_me"},null,-1),W={for:"remember_me"},Z={class:"form-element action"},q={id:"msg"},z={key:0,class:"success"},A={key:1,class:"error"};function G(l,o,i,d,t,s){const b=f("a-button"),x=f("router-link");return a(),c("div",w,[i.lambda.logoText!=""?(a(),c("div",E,[e("img",{src:i.lambda.logo,alt:""},null,8,T),e("span",null,n(i.lambda.logoText),1)])):(a(),c("div",V,[e("img",{src:i.lambda.logo,alt:""},null,8,N)])),e("h2",null,n(s.lang.loginTitle),1),e("form",{id:"authForm",method:"post",class:"login-form",onSubmit:o[2]||(o[2]=y((...r)=>s.onSubmit&&s.onSubmit(...r),["prevent"]))},[e("div",B,[m(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=r=>t.credentials.login=r),disabled:t.loading,placeholder:s.lang.username},null,8,C),[[u,t.credentials.login]]),D]),e("div",M,[m(e("input",{type:"password","onUpdate:modelValue":o[1]||(o[1]=r=>t.credentials.password=r),disabled:t.loading,placeholder:s.lang.password},null,8,U),[[u,t.credentials.password]]),F]),e("div",H,[L,e("label",W,n(s.lang.remember),1)]),e("div",Z,[g(b,{type:"primary",loading:t.loading,"html-type":"submit"},{default:_(()=>[h(n(s.lang.login),1)]),_:1},8,["loading"]),e("p",null,[g(x,{class:"forgot",to:"/auth/forgot"},{default:_(()=>[h(n(s.lang.forgot),1)]),_:1})])])],32),e("div",q,[t.isSuccess?(a(),c("span",z,n(s.lang.loginSuccess),1)):p("",!0),t.isError?(a(),c("span",A,n(s.lang.loginError),1)):p("",!0)])])}const j=S(k,[["render",G]]);export{j as default};
