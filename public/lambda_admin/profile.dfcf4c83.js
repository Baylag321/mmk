import{H as p,T as m}from"./components.977d0541.js";import{a as f,b as u,s as h,U as v}from"./entry.94f568a7.js";import{Z as b,_ as g,c as o,a0 as a,$ as e,W as d,H as y,a3 as c}from"./vue.6b2d282b.js";import"./composables.3efb5a08.js";import"./common.914374cd.js";import"./ant.202d08f0.js";import"./moment.8b5e7d95.js";import"./ag.b10eb020.js";import"./lodash.0a37595b.js";import"./numeral.adfb6437.js";import"./cryptoJs.abce1e06.js";const w={name:"profile",data(){return{editMode:!0,base_url:u}},methods:{onSuccess(t){},editUser(){this.$nextTick(()=>{let t=h.get(v);this.$refs.form.editModel(t.id)})}}},x={class:"card drawer-wrappper"},M={class:"page-title float-left"},S={class:"float-left pt-5"},T={class:"text-gray-700 dark:text-gray-200 text-base m-0"},k={class:"offcanvas-template"},H={class:"crud-page"},N={class:"crud-page-body"},U={class:""},$={class:"ant-drawer-content"},B={class:"ant-drawer-wrapper-body"},R={class:"ant-drawer-body"};function V(t,A,C,D,s,r){const i=m,n=p,l=d("portal"),_=d("dataform");return b(),g("div",x,[o(n,null,{default:a(()=>[o(i,null,{default:a(()=>[y(c(t.$t("appAdmin.profile")),1)]),_:1})]),_:1}),o(l,{to:"header-left"},{default:a(()=>[e("div",M,[e("div",S,[e("h1",T,c(t.$t("appAdmin.profile")),1)])])]),_:1}),e("section",k,[e("div",H,[e("div",N,[e("div",U,[e("div",$,[e("div",B,[e("div",R,[o(_,{ref:"form",url:s.base_url,hideTitle:!0,schemaID:"user_profile_user",editMode:s.editMode,do_render:s.editMode,onReady:r.editUser,onSuccess:r.onSuccess},null,8,["url","editMode","do_render","onReady","onSuccess"])])])])])])])])])}const K=f(w,[["render",V]]);export{K as default};
