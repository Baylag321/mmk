import{a as u}from"./common.ee65b9fa.js";import{Z as o,_ as l,a0 as s,a2 as c,E as h,y as _,a7 as f,a3 as d,am as p}from"./vue.8df9dc4e.js";import{a as g}from"./entry.2f722340.js";import"./ant.37833f30.js";import"./moment.8b5e7d95.js";import"./ag.6f4f687c.js";import"./lodash.9ef015a0.js";import"./numeral.d58f1efd.js";import"./cryptoJs.bc7a374e.js";const v={props:["selectedLang"],name:"aside-forgot",data(){return{loading:!1,isSuccess:!1,isError:!1,errorMsg:"",successMsg:"",credentials:{email:null}}},computed:{lang(){const e=["forgot","email","forgotDescription","sendPasswordResetCode","emailSendError"];return e.reduce((t,n,m)=>(t[n]=this.$t("user."+e[m]),t),{})}},methods:{onSubmit(){this.isSuccess=!1,this.isError=!1,this.loading||(this.loading=!0,u.post("/auth/send-forgot-mail",{...this.credentials,lang:this.selectedLang}).then(({data:e})=>{setTimeout(()=>{this.loading=!1,e.status?(this.isSuccess=!0,this.successMsg=e.msg,setTimeout(()=>{this.$router.push("/auth/password-reset")},2100)):(this.isError=!0,this.errorMsg=this.lang.emailSendError)},1e3)}).catch(e=>{this.errorMsg=e.response.data.error,setTimeout(()=>{this.loading=!1,this.isError=!0},1e3)}))}}},k={class:"form-wrap"},S={class:"form-content"},b={class:"form-element input"},E=["placeholder"],M=s("span",{class:"icon user"},null,-1),x={class:"form-element"},y={style:{"font-size":"12px"}},w={class:"form-element"},T=["disabled"],D={id:"submitTxt"},V={class:"loader"},B={key:0,class:"sk-fading-circle"},C=p('<div class="sk-circle1 sk-circle"></div><div class="sk-circle2 sk-circle"></div><div class="sk-circle3 sk-circle"></div><div class="sk-circle4 sk-circle"></div><div class="sk-circle5 sk-circle"></div><div class="sk-circle6 sk-circle"></div><div class="sk-circle7 sk-circle"></div><div class="sk-circle8 sk-circle"></div><div class="sk-circle9 sk-circle"></div><div class="sk-circle10 sk-circle"></div><div class="sk-circle11 sk-circle"></div><div class="sk-circle12 sk-circle"></div>',12),N=[C],L={id:"msg"},P={key:0,class:"success"},R={key:1,class:"error"};function z(e,t,n,m,i,r){return o(),l("div",k,[s("div",S,[s("h2",null,c(r.lang.forgot),1),s("form",{onSubmit:t[1]||(t[1]=h((...a)=>r.onSubmit&&r.onSubmit(...a),["prevent"])),method:"post",class:"login-form"},[s("div",b,[_(s("input",{type:"text",id:"email","onUpdate:modelValue":t[0]||(t[0]=a=>i.credentials.email=a),name:"email",autocomplete:"off",placeholder:r.lang.email},null,8,E),[[f,i.credentials.email]]),M]),s("div",x,[s("label",y,c(r.lang.forgotDescription),1)]),s("div",w,[s("button",{id:"submit",class:"button",disabled:i.loading,style:{width:"100%"}},[s("span",D,c(r.lang.sendPasswordResetCode),1),s("span",V,[i.loading?(o(),l("div",B,N)):d("",!0)])],8,T)])],32),s("div",L,[i.isSuccess?(o(),l("span",P,c(i.successMsg),1)):d("",!0),i.isError?(o(),l("span",R,c(i.errorMsg),1)):d("",!0)])])])}const K=g(v,[["render",z]]);export{K as default};
