import{a as x}from"./common.194e1616.js";import{Y as a,Z as c,_ as e,a2 as n,v as m,aa as u,f as g,$ as _,E as h,B as S,a1 as p,V as f}from"./vue.3f3be479.js";import{a as y}from"./entry.e3cd167a.js";import"./ant.44dab1d6.js";import"./moment.8b5e7d95.js";import"./lodash.7f89dc3c.js";import"./numeral.30e81b7f.js";import"./cryptoJs.b278cf6a.js";const k={props:["lambda","onSuccess","selectedLang"],name:"aside-login",data(){return{loading:!1,isSuccess:!1,isError:!1,credentials:{login:null,password:null}}},computed:{lang(){const l=["loginTitle","username","password","remember","login","forgot","loginSuccess","loginError"];return l.reduce((o,i,d)=>(o[i]=this.$t("user."+l[d]),o),{})}},methods:{onSubmit(){this.isSuccess=!1,this.isError=!1,this.loading||(this.loading=!0,x.post("/auth/login",this.credentials).then(({data:l})=>{l.status?this.onSuccess(l):(this.isError=!0,this.loading=!1)}).catch(l=>{this.loading=!1,this.isError=!0}))}}},w={class:"form-content"},E={key:0,class:"logo with-text"},V=["src"],T={key:1,class:"logo"},B=["src"],N={class:"form-element input"},C=["disabled","placeholder"],D=e("span",{class:"icon user"},null,-1),M={class:"form-element input"},U=["disabled","placeholder"],F=e("span",{class:"icon pass"},null,-1),L={class:"form-element"},Y=e("input",{type:"checkbox",class:"checkbox",id:"remember_me"},null,-1),Z={for:"remember_me"},q={class:"form-element action"},z={id:"msg"},A={key:0,class:"success"},G={key:1,class:"error"};function H(l,o,i,d,t,s){const b=f("a-button"),v=f("router-link");return a(),c("div",w,[i.lambda.logoText!=""?(a(),c("div",E,[e("img",{src:i.lambda.logo,alt:""},null,8,V),e("span",null,n(i.lambda.logoText),1)])):(a(),c("div",T,[e("img",{src:i.lambda.logo,alt:""},null,8,B)])),e("h2",null,n(s.lang.loginTitle),1),e("form",{id:"authForm",method:"post",class:"login-form",onSubmit:o[2]||(o[2]=S((...r)=>s.onSubmit&&s.onSubmit(...r),["prevent"]))},[e("div",N,[m(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=r=>t.credentials.login=r),disabled:t.loading,placeholder:s.lang.username},null,8,C),[[u,t.credentials.login]]),D]),e("div",M,[m(e("input",{type:"password","onUpdate:modelValue":o[1]||(o[1]=r=>t.credentials.password=r),disabled:t.loading,placeholder:s.lang.password},null,8,U),[[u,t.credentials.password]]),F]),e("div",L,[Y,e("label",Z,n(s.lang.remember),1)]),e("div",q,[g(b,{type:"primary",loading:t.loading,"html-type":"submit"},{default:_(()=>[h(n(s.lang.login),1)]),_:1},8,["loading"]),e("p",null,[g(v,{class:"forgot",to:"/auth/forgot"},{default:_(()=>[h(n(s.lang.forgot),1)]),_:1})])])],32),e("div",z,[t.isSuccess?(a(),c("span",A,n(s.lang.loginSuccess),1)):p("",!0),t.isError?(a(),c("span",G,n(s.lang.loginError),1)):p("",!0)])])}const X=y(k,[["render",H]]);export{X as default};
