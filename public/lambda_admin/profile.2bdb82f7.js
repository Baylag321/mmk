import{H as p,T as f}from"./components.1bd2bacb.js";import{a as m,b as u,s as h,U as v}from"./entry.c8558833.js";import{Y as b,Z as g,f as s,$ as a,a0 as e,V as d,E as y,_ as c}from"./vue.091937b4.js";import"./composables.3b9cab34.js";import"./ant.edd72bf4.js";import"./moment.8b5e7d95.js";import"./cryptoJs.ce41d5ee.js";import"./numeral.cf209493.js";import"./common.33f268d0.js";const w={name:"profile",data(){return{editMode:!0,base_url:u}},methods:{onSuccess(t){},editUser(){this.$nextTick(()=>{let t=h.get(v);this.$refs.form.editModel(t.id)})}}},x={class:"card drawer-wrappper"},M={class:"page-title float-left"},S={class:"float-left pt-5"},T={class:"text-gray-700 dark:text-gray-200 text-base m-0"},k={class:"offcanvas-template"},N={class:"crud-page"},U={class:"crud-page-body"},V={class:""},$={class:"ant-drawer-content"},B={class:"ant-drawer-wrapper-body"},E={class:"ant-drawer-body"};function H(t,R,A,C,o,r){const i=f,n=p,l=d("portal"),_=d("dataform");return b(),g("div",x,[s(n,null,{default:a(()=>[s(i,null,{default:a(()=>[y(c(t.$t("appAdmin.profile")),1)]),_:1})]),_:1}),s(l,{to:"header-left"},{default:a(()=>[e("div",M,[e("div",S,[e("h1",T,c(t.$t("appAdmin.profile")),1)])])]),_:1}),e("section",k,[e("div",N,[e("div",U,[e("div",V,[e("div",$,[e("div",B,[e("div",E,[s(_,{ref:"form",url:o.base_url,hideTitle:!0,schemaID:"user_profile",editMode:o.editMode,do_render:o.editMode,onReady:r.editUser,onSuccess:r.onSuccess},null,8,["url","editMode","do_render","onReady","onSuccess"])])])])])])])])])}const G=m(w,[["render",H]]);export{G as default};
