import{m as g}from"./_mixin.59e23610.js";import{a as _,al as L,aH as b}from"./entry.0dfbcad4.js";import{P as w}from"./PlusOutlined.b3193afe.js";import{S as i,Y as t,a8 as r,a4 as d,_ as h,c as k,Z as l,a6 as v}from"./vue.a1a1d817.js";import"./cryptoJs.37acf5e1.js";import"./ant.3cb96f1d.js";import"./common.db75f8be.js";import"./numeral.f32c122b.js";import"./moment.8b5e7d95.js";const y={mixins:[g],components:{LoadingOutlined:L,PlusOutlined:w},computed:{lang(){const e=["viewPhotos","_delete"];return e.reduce((o,m,n)=>(o[m]=this.$t("dataForm."+e[n]),o),{})}},mounted(){this.init()},data(){return{defaultList:[],uploadList:[],showImage:!1,showImageUrl:"",loading:!1}},watch:{itemValue(e,o){(o&&!e||e&&!o)&&e&&this.init()}},methods:{init(){this.model.form[this.model.component]&&(this.uploadList.length>=1?this.uploadList[0].response!==this.model.form[this.model.component]&&(this.uploadList=[{status:"done",thumbUrl:this.url+this.model.form[this.model.component],response:this.model.form[this.model.component]}]):this.uploadList=[{status:"done",thumbUrl:this.url+this.model.form[this.model.component],response:this.model.form[this.model.component]}])},onVisibleChange(e){this.showImage=e},handleView(e){this.showImage=!0,this.showImageUrl=e.response},handleChange(e){if(e.file.status==="uploading"){this.loading=!0;return}e.file.status==="done"&&(this.model.form[this.model.component]=e.file.response,this.uploadList=[{status:"done",thumbUrl:this.url+this.model.form[this.model.component],response:this.model.form[this.model.component],name:e.file.name}],this.loading=!1),e.file.status==="error"&&(this.uploadList=this.uploadList.filter(o=>o.status==="done"),this.loading=!1,b.error(this.$t("alertMessage.errorMsg")))},success(e){this.meta.file.isMultiple?(this.uploadList=this.$refs.upload.fileList,this.model.form[this.model.component]=JSON.stringify(this.uploadList.map(o=>({name:o.name,response:o.response})))):this.model.form[this.model.component]=e},handleRemove(e){this.meta.file.isMultiple?this.model.form[this.model.component]=JSON.stringify(this.uploadList.filter(o=>o.response!==e.response)):this.model.form[this.model.component]=null}}},C={class:"sub-form-image"},I=["src"],U={key:1},S={key:1,class:"ti ti-camera"},B={class:"ant-upload-text"};function M(e,o,m,n,s,a){const p=i("loading-outlined"),u=i("a-upload"),f=i("lambda-form-item");return t(),r(f,{label:e.label,name:e.model.component,meta:e.meta},{default:d(()=>[h("div",C,[k(u,{"file-list":s.uploadList,"onUpdate:file-list":o[0]||(o[0]=c=>s.uploadList=c),name:"file",action:`${e.url?e.url:""}/lambda/krud/upload`,onChange:a.handleChange,onRemove:a.handleRemove},{default:d(()=>[this.model.form[this.model.component]?(t(),l("img",{key:0,src:this.url+this.model.form[this.model.component],alt:"image sub form"},null,8,I)):(t(),l("div",U,[s.loading?(t(),r(p,{key:0})):(t(),l("i",S)),h("div",B,v(e.label),1)]))]),_:1},8,["file-list","action","onChange","onRemove"])])]),_:1},8,["label","name","meta"])}const E=_(y,[["render",M]]);export{E as default};
