import{H as p,T as m}from"./components.ae6f094a.js";import{a as u,b as f,s as h,U as g}from"./entry.71105e47.js";import{Z as v,_ as w,c as s,a0 as a,$ as e,W as d,H as b,a3 as c}from"./vue.65c51cdf.js";import"./composables.607d8da1.js";import"./common.c40c4e6a.js";import"./ant.e036270e.js";import"./moment.8b5e7d95.js";import"./ag.ab39fb93.js";import"./lodash.888217fe.js";import"./numeral.4dda2596.js";import"./cryptoJs.61df0830.js";const y={name:"profile",data(){return{editMode:!0,base_url:f}},methods:{onSuccess(t){},editUser(){this.$nextTick(()=>{let t=h.get(g);this.$refs.form.editModel(t.id)})}}},x={class:"card drawer-wrappper"},M={class:"page-title float-left"},S={class:"float-left pt-5"},T={class:"text-gray-700 dark:text-gray-200 text-base m-0"},k={class:"offcanvas-template"},H={class:"crud-page"},N={class:"crud-page-body"},U={class:""},$={class:"ant-drawer-content"},B={class:"ant-drawer-wrapper-body"},P={class:"ant-drawer-body"};function R(t,V,A,C,o,r){const n=m,i=p,_=d("portal"),l=d("dataform");return v(),w("div",x,[s(i,null,{default:a(()=>[s(n,null,{default:a(()=>[b(c(t.$t("appAdmin.changePassword")),1)]),_:1})]),_:1}),s(_,{to:"header-left"},{default:a(()=>[e("div",M,[e("div",S,[e("h1",T,c(t.$t("appAdmin.changePassword")),1)])])]),_:1}),e("section",k,[e("div",H,[e("div",N,[e("div",U,[e("div",$,[e("div",B,[e("div",P,[s(l,{ref:"form",url:o.base_url,hideTitle:!0,schemaID:"user_password",editMode:o.editMode,do_render:o.editMode,onReady:r.editUser,onSuccess:r.onSuccess},null,8,["url","editMode","do_render","onReady","onSuccess"])])])])])])])])])}const J=u(y,[["render",R]]);export{J as default};
