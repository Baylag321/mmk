import{a as s,b as a}from"./entry.b0bba7ab.js";import{Z as n,_ as d,c,W as i}from"./vue.65c51cdf.js";import"./common.c40c4e6a.js";import"./ant.e036270e.js";import"./moment.8b5e7d95.js";import"./ag.ab39fb93.js";import"./lodash.888217fe.js";import"./numeral.4dda2596.js";import"./cryptoJs.61df0830.js";const m={components:{},computed:{url(){return a}},methods:{onSuccess(){},onError(){},getData(){this.editMode=!0,this.$refs.form.editModel(this.$route.params.id)}},data(){return{editMode:!1,formId:null}}},u={class:"form-preview-page"};function _(r,l,p,f,o,e){const t=i("dataform");return n(),d("div",u,[c(t,{ref:"form",schemaID:r.$route.params.schema_id,editMode:o.editMode,hideTitle:!0,onSuccess:e.onSuccess,do_render:!0,onReady:e.getData,url:e.url,permissions:{c:!0,r:!1,u:!1,d:!1},user_condition:null,onError:e.onError},null,8,["schemaID","editMode","onSuccess","onReady","url","onError"])])}const I=s(m,[["render",_]]);export{I as default};
