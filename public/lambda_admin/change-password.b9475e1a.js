import{a as p,b as m,s as u,U as f}from"./entry.0dfbcad4.js";import{S as s,Y as h,Z as g,c as o,a4 as d,_ as e,E as v,a6 as c}from"./vue.a1a1d817.js";import"./cryptoJs.37acf5e1.js";import"./ant.3cb96f1d.js";import"./common.db75f8be.js";import"./numeral.f32c122b.js";import"./moment.8b5e7d95.js";const w={name:"profile",data(){return{editMode:!0,base_url:m}},methods:{onSuccess(t){},editUser(){this.$nextTick(()=>{let t=u.get(f);this.$refs.form.editModel(t.id)})}}},b={class:"card drawer-wrappper"},y={class:"page-title float-left"},x={class:"float-left pt-5"},S={class:"text-gray-700 dark:text-gray-200 text-base m-0"},M={class:"offcanvas-template"},T={class:"crud-page"},k={class:"crud-page-body"},N={class:""},U={class:"ant-drawer-content"},B={class:"ant-drawer-wrapper-body"},E={class:"ant-drawer-body"};function P(t,R,V,$,a,r){const n=s("Title"),i=s("Head"),_=s("portal"),l=s("dataform");return h(),g("div",b,[o(i,null,{default:d(()=>[o(n,null,{default:d(()=>[v(c(t.$t("appAdmin.changePassword")),1)]),_:1})]),_:1}),o(_,{to:"header-left"},{default:d(()=>[e("div",y,[e("div",x,[e("h1",S,c(t.$t("appAdmin.changePassword")),1)])])]),_:1}),e("section",M,[e("div",T,[e("div",k,[e("div",N,[e("div",U,[e("div",B,[e("div",E,[o(l,{ref:"form",url:a.base_url,hideTitle:!0,schemaID:"user_password",editMode:a.editMode,do_render:a.editMode,onReady:r.editUser,onSuccess:r.onSuccess},null,8,["url","editMode","do_render","onReady","onSuccess"])])])])])])])])])}const Y=p(w,[["render",P]]);export{Y as default};
