import{a as v}from"./common.c40c4e6a.js";import{Z as a,_ as c,$ as e,a3 as n,E as m,y as u,aa as p,c as g,a0 as h,H as _,a2 as f,S as w,W as b}from"./vue.65c51cdf.js";import{a as x}from"./entry.f4b9eee7.js";import"./ant.e036270e.js";import"./moment.8b5e7d95.js";import"./ag.ab39fb93.js";import"./lodash.888217fe.js";import"./numeral.4dda2596.js";import"./cryptoJs.61df0830.js";const E={props:["lambda","onSuccess"],name:"login",data(){return{loading:!1,isSuccess:!1,isError:!1,credentials:{login:null,password:null}}},computed:{lang(){const l=["loginTitle","username","password","remember","login","forgot","loginSuccess","loginError"];return l.reduce((t,i,d)=>(t[i]=this.$t("user."+l[d]),t),{})}},methods:{onSubmit(){this.isSuccess=!1,this.isError=!1,this.loading||(this.loading=!0,v.post("/auth/login",this.credentials).then(({data:l})=>{l.status?this.onSuccess(l):(this.isError=!0,this.loading=!1)}).catch(l=>{this.loading=!1,this.isError=!0}))}}},k={class:"form-wrap"},V={class:"form-content"},N={class:"form-element input"},T=["disabled","placeholder"],B=e("span",{class:"icon user"},null,-1),C={class:"form-element input"},D=["disabled","placeholder"],M=e("span",{class:"icon pass"},null,-1),U={class:"form-element"},F=e("input",{type:"checkbox",class:"checkbox",id:"remember_me"},null,-1),H={for:"remember_me"},W={class:"form-element action"},Z={id:"msg"},q={key:0,class:"success"},z={key:1,class:"error"},A={class:"copyright",style:{width:"70%","text-align":"center"}};function G(l,t,i,d,o,s){const S=b("a-button"),y=b("router-link");return a(),c("div",k,[e("div",V,[e("h2",null,n(s.lang.loginTitle),1),e("form",{onSubmit:[t[2]||(t[2]=m((...r)=>s.onSubmit&&s.onSubmit(...r),["prevent"])),t[3]||(t[3]=m((...r)=>s.onSubmit&&s.onSubmit(...r),["prevent"]))],id:"authForm",method:"post",class:"login-form"},[e("div",N,[u(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=r=>o.credentials.login=r),disabled:o.loading,placeholder:s.lang.username},null,8,T),[[p,o.credentials.login]]),B]),e("div",C,[u(e("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=r=>o.credentials.password=r),disabled:o.loading,placeholder:s.lang.password},null,8,D),[[p,o.credentials.password]]),M]),e("div",U,[F,e("label",H,n(s.lang.remember),1)]),e("div",W,[g(S,{type:"primary",loading:o.loading,"html-type":"submit"},{default:h(()=>[_(n(s.lang.login),1)]),_:1},8,["loading"]),e("p",null,[g(y,{class:"forgot",to:"/auth/forgot"},{default:h(()=>[_(n(s.lang.forgot),1)]),_:1})])])],32),e("div",Z,[o.isSuccess?(a(),c("span",q,n(s.lang.loginSuccess),1)):f("",!0),o.isError?(a(),c("span",z,n(s.lang.loginError),1)):f("",!0)])]),e("div",A,n(i.lambda.copyright),1),w(l.$slots,"copyright")])}const Y=x(E,[["render",G]]);export{Y as default};
