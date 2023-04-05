import{a as v}from"./common.00ee525f.js";import{Y as a,Z as c,$ as e,a1 as n,v as m,a6 as u,f as g,_,E as h,B as S,a2 as p,S as f}from"./vue.13bb76e9.js";import{a as y}from"./entry.46591473.js";import"./ant.ba1bd7fe.js";import"./moment.8b5e7d95.js";import"./cryptoJs.940212dc.js";import"./numeral.ccce3a12.js";const w={props:["lambda","onSuccess","selectedLang"],name:"aside-login",data(){return{loading:!1,isSuccess:!1,isError:!1,credentials:{login:null,password:null}}},computed:{lang(){const l=["loginTitle","username","password","remember","login","forgot","loginSuccess","loginError"];return l.reduce((o,i,d)=>(o[i]=this.$t("user."+l[d]),o),{})}},methods:{onSubmit(){this.isSuccess=!1,this.isError=!1,this.loading||(this.loading=!0,v.post("/auth/login",this.credentials).then(({data:l})=>{l.status?this.onSuccess(l):(this.isError=!0,this.loading=!1)}).catch(l=>{this.loading=!1,this.isError=!0}))}}},k={class:"form-content"},E={key:0,class:"logo with-text"},T=["src"],V={key:1,class:"logo"},B=["src"],N={class:"form-element input"},C=["disabled","placeholder"],D=e("span",{class:"icon user"},null,-1),M={class:"form-element input"},U=["disabled","placeholder"],F=e("span",{class:"icon pass"},null,-1),L={class:"form-element"},Y=e("input",{type:"checkbox",class:"checkbox",id:"remember_me"},null,-1),Z={for:"remember_me"},j={class:"form-element action flex items-center justify-between"},q={id:"msg"},z={key:0,class:"success"},A={key:1,class:"error"};function G(l,o,i,d,t,s){const b=f("a-button"),x=f("router-link");return a(),c("div",k,[i.lambda.logoText!=""?(a(),c("div",E,[e("img",{src:i.lambda.logo,alt:""},null,8,T),e("span",null,n(i.lambda.logoText),1)])):(a(),c("div",V,[e("img",{src:i.lambda.logo,alt:""},null,8,B)])),e("h2",null,n(s.lang.loginTitle),1),e("form",{id:"authForm",method:"post",class:"login-form",onSubmit:o[2]||(o[2]=S((...r)=>s.onSubmit&&s.onSubmit(...r),["prevent"]))},[e("div",N,[m(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=r=>t.credentials.login=r),disabled:t.loading,placeholder:s.lang.username},null,8,C),[[u,t.credentials.login]]),D]),e("div",M,[m(e("input",{type:"password","onUpdate:modelValue":o[1]||(o[1]=r=>t.credentials.password=r),disabled:t.loading,placeholder:s.lang.password},null,8,U),[[u,t.credentials.password]]),F]),e("div",L,[Y,e("label",Z,n(s.lang.remember),1)]),e("div",j,[g(b,{type:"primary",loading:t.loading,"html-type":"submit"},{default:_(()=>[h(n(s.lang.login),1)]),_:1},8,["loading"]),e("p",null,[g(x,{class:"forgot",to:"/auth/forgot"},{default:_(()=>[h(n(s.lang.forgot),1)]),_:1})])])],32),e("div",q,[t.isSuccess?(a(),c("span",z,n(s.lang.loginSuccess),1)):p("",!0),t.isError?(a(),c("span",A,n(s.lang.loginError),1)):p("",!0)])])}const R=y(w,[["render",G]]);export{R as default};
