import{H as p,T as m}from"./components.fb5ca51b.js";import{a as u,b as f,s as h,U as g}from"./entry.2f722340.js";import{Z as v,_ as w,c as s,$ as a,a0 as e,U as d,H as b,a2 as c}from"./vue.8df9dc4e.js";import"./composables.5ead7d52.js";import"./common.ee65b9fa.js";import"./ant.37833f30.js";import"./moment.8b5e7d95.js";import"./ag.6f4f687c.js";import"./lodash.9ef015a0.js";import"./numeral.d58f1efd.js";import"./cryptoJs.bc7a374e.js";const y={name:"profile",data(){return{editMode:!0,base_url:f}},methods:{onSuccess(t){},editUser(){this.$nextTick(()=>{let t=h.get(g);this.$refs.form.editModel(t.id)})}}},x={class:"card drawer-wrappper"},M={class:"page-title float-left"},S={class:"float-left pt-5"},T={class:"text-gray-700 dark:text-gray-200 text-base m-0"},U={class:"offcanvas-template"},k={class:"crud-page"},H={class:"crud-page-body"},N={class:""},$={class:"ant-drawer-content"},B={class:"ant-drawer-wrapper-body"},P={class:"ant-drawer-body"};function R(t,V,A,C,o,r){const n=m,i=p,_=d("portal"),l=d("dataform");return v(),w("div",x,[s(i,null,{default:a(()=>[s(n,null,{default:a(()=>[b(c(t.$t("appAdmin.changePassword")),1)]),_:1})]),_:1}),s(_,{to:"header-left"},{default:a(()=>[e("div",M,[e("div",S,[e("h1",T,c(t.$t("appAdmin.changePassword")),1)])])]),_:1}),e("section",U,[e("div",k,[e("div",H,[e("div",N,[e("div",$,[e("div",B,[e("div",P,[s(l,{ref:"form",url:o.base_url,hideTitle:!0,schemaID:"user_password",editMode:o.editMode,do_render:o.editMode,onReady:r.editUser,onSuccess:r.onSuccess},null,8,["url","editMode","do_render","onReady","onSuccess"])])])])])])])])])}const K=u(y,[["render",R]]);export{K as default};
