import{m as g}from"./_mixin.eebe659b.js";import{a as h}from"./entry.74a9c9b3.js";import{Y as m,Z as b,a3 as i,_ as t,f as l,a2 as f,E as P,a1 as y,$ as O,S as d}from"./vue.13bb76e9.js";import"./ant.b38ea10b.js";import"./moment.8b5e7d95.js";import"./cryptoJs.69a6c71a.js";import"./numeral.166788f6.js";import"./common.41eb234c.js";const k={mixins:[g],computed:{lang(){const e=["currentPassword","confirmPassword","Create_a_password","_pass"];return e.reduce((a,o,n)=>(a[o]=this.$t("dataForm."+e[n]),a),{})}},data(){return{passwordGenerated:!1}},methods:{generatePass(){let e=["a-z","A-Z","0-9","#"],a="",o="";e.indexOf("a-z")>=0&&(a+="abcdefghijklmnopqrstuvwxyz"),e.indexOf("A-Z")>=0&&(a+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"),e.indexOf("0-9")>=0&&(a+="0123456789"),e.indexOf("#")>=0&&(a+="!{}()%&*$#^<>~@|");for(let n=0;n<8;n++)o+=a.charAt(Math.floor(Math.random()*a.length));this.model.form[this.model.component]=o,this.meta.passwordOption.confirm&&(this.model.form.password_confirm=o),this.passwordGenerated=!0}}};function C(e,a,o,n,c,r){const p=d("a-input-password"),u=d("a-form-item"),w=d("inline-svg"),_=d("a-tooltip"),v=d("lambda-form-item");return m(),b("div",null,[e.meta.passwordOption.edit_with_old_password?(m(),i(u,{key:0,label:r.lang.currentPassword,name:"current_password"},{default:t(()=>[l(p,{value:e.model.form.current_password,"onUpdate:value":a[0]||(a[0]=s=>e.model.form.current_password=s),password:"",placeholder:r.lang.currentPassword},null,8,["value","placeholder"])]),_:1},8,["label"])):f("",!0),l(v,{label:e.label,name:e.model.component,meta:e.meta},{default:t(()=>[l(p,{value:e.model.form[e.model.component],"onUpdate:value":a[2]||(a[2]=s=>e.model.form[e.model.component]=s),password:"",placeholder:e.placeholder,disabled:e.disabled},{addonAfter:t(()=>[e.meta.passwordOption.generate?(m(),i(_,{key:0,slot:"append"},{title:t(()=>[P(y(r.lang.Create_a_password),1)]),default:t(()=>[O("span",{class:"svg-icon",onClick:a[1]||(a[1]=s=>r.generatePass())},[l(w,{src:"/assets/icons/duotone/Home/Key.svg"})])]),_:1})):f("",!0)]),_:1},8,["value","placeholder","disabled"])]),_:1},8,["label","name","meta"]),e.meta.passwordOption.confirm?(m(),i(u,{key:1,label:r.lang.confirmPassword,name:"password_confirm"},{default:t(()=>[l(p,{type:c.passwordGenerated?"text":"password",value:e.model.form.password_confirm,"onUpdate:value":a[3]||(a[3]=s=>e.model.form.password_confirm=s),placeholder:r.lang.confirmPassword},null,8,["type","value","placeholder"])]),_:1},8,["label"])):f("",!0)])}const z=h(k,[["render",C]]);export{z as default};
