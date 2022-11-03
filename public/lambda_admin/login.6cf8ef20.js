import{a as k}from"./common.db75f8be.js";import{S as m,Y as a,Z as r,_ as e,a6 as n,v as u,ab as _,c as g,a4 as h,E as p,a7 as f}from"./vue.a1a1d817.js";import{a as v}from"./entry.0dfbcad4.js";import"./ant.3cb96f1d.js";import"./cryptoJs.37acf5e1.js";import"./numeral.f32c122b.js";import"./moment.8b5e7d95.js";const S={props:["lambda","onSuccess","selectedLang"],name:"aside-login",data(){return{loading:!1,isSuccess:!1,isError:!1,credentials:{login:null,password:null}}},computed:{lang(){const t=["loginTitle","username","password","remember","login","forgot","loginSuccess","loginError"];return t.reduce((l,i,d)=>(l[i]=this.$t("user."+t[d]),l),{})}},methods:{onSubmit(){this.isSuccess=!1,this.isError=!1,this.loading||(this.loading=!0,k.post("/auth/login",this.credentials).then(({data:t})=>{t.status?this.onSuccess(t):(this.isError=!0,this.loading=!1)}).catch(t=>{this.loading=!1,this.isError=!0}))}}},y={class:"form-content"},w={key:0,class:"logo with-text"},E=["src"],T={key:1,class:"logo"},V=["src"],C={id:"authForm",method:"post",class:"login-form"},N={class:"form-element input"},B=["disabled","placeholder"],D=e("span",{class:"icon user"},null,-1),U={class:"form-element input"},F=["disabled","placeholder"],L=e("span",{class:"icon pass"},null,-1),M={class:"form-element"},Y=e("input",{type:"checkbox",class:"checkbox",id:"remember_me"},null,-1),Z={for:"remember_me"},q={class:"form-element action"},z={id:"msg"},A={key:0,class:"success"},G={key:1,class:"error"};function H(t,l,i,d,s,o){const b=m("a-button"),x=m("router-link");return a(),r("div",y,[i.lambda.logoText!=""?(a(),r("div",w,[e("img",{src:i.lambda.logo,alt:""},null,8,E),e("span",null,n(i.lambda.logoText),1)])):(a(),r("div",T,[e("img",{src:i.lambda.logo,alt:""},null,8,V)])),e("h2",null,n(o.lang.loginTitle),1),e("form",C,[e("div",N,[u(e("input",{type:"text","onUpdate:modelValue":l[0]||(l[0]=c=>s.credentials.login=c),disabled:s.loading,placeholder:o.lang.username},null,8,B),[[_,s.credentials.login]]),D]),e("div",U,[u(e("input",{type:"password","onUpdate:modelValue":l[1]||(l[1]=c=>s.credentials.password=c),disabled:s.loading,placeholder:o.lang.password},null,8,F),[[_,s.credentials.password]]),L]),e("div",M,[Y,e("label",Z,n(o.lang.remember),1)]),e("div",q,[g(b,{type:"primary",loading:s.loading,onClick:o.onSubmit},{default:h(()=>[p(n(o.lang.login),1)]),_:1},8,["loading","onClick"]),e("p",null,[g(x,{class:"forgot",to:"/auth/forgot"},{default:h(()=>[p(n(o.lang.forgot),1)]),_:1})])])]),e("div",z,[s.isSuccess?(a(),r("span",A,n(o.lang.loginSuccess),1)):f("",!0),s.isError?(a(),r("span",G,n(o.lang.loginError),1)):f("",!0)])])}const W=v(S,[["render",H]]);export{W as default};
