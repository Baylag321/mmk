import{m as g}from"./_mixin.a8a9db99.js";import{a as _,az as L,aU as b}from"./entry.9dd1ea9a.js";import{P as w}from"./PlusOutlined.062323d4.js";import{Y as t,a3 as r,_ as d,$ as h,f as k,Z as i,a1 as v,S as l}from"./vue.13bb76e9.js";import"./ant.ba1bd7fe.js";import"./moment.8b5e7d95.js";import"./cryptoJs.940212dc.js";import"./numeral.ccce3a12.js";import"./common.00ee525f.js";const y={mixins:[g],components:{LoadingOutlined:L,PlusOutlined:w},computed:{lang(){const e=["viewPhotos","_delete"];return e.reduce((o,m,n)=>(o[m]=this.$t("dataForm."+e[n]),o),{})}},mounted(){this.init()},data(){return{defaultList:[],uploadList:[],showImage:!1,showImageUrl:"",loading:!1}},watch:{itemValue(e,o){(o&&!e||e&&!o)&&e&&this.init()}},methods:{init(){this.model.form[this.model.component]&&(this.uploadList.length>=1?this.uploadList[0].response!==this.model.form[this.model.component]&&(this.uploadList=[{status:"done",thumbUrl:this.url+this.model.form[this.model.component],response:this.model.form[this.model.component]}]):this.uploadList=[{status:"done",thumbUrl:this.url+this.model.form[this.model.component],response:this.model.form[this.model.component]}])},onVisibleChange(e){this.showImage=e},handleView(e){this.showImage=!0,this.showImageUrl=e.response},handleChange(e){if(e.file.status==="uploading"){this.loading=!0;return}e.file.status==="done"&&(this.model.form[this.model.component]=e.file.response,this.uploadList=[{status:"done",thumbUrl:this.url+this.model.form[this.model.component],response:this.model.form[this.model.component],name:e.file.name}],this.loading=!1),e.file.status==="error"&&(this.uploadList=this.uploadList.filter(o=>o.status==="done"),this.loading=!1,b.error(this.$t("alertMessage.errorMsg")))},success(e){this.meta.file.isMultiple?(this.uploadList=this.$refs.upload.fileList,this.model.form[this.model.component]=JSON.stringify(this.uploadList.map(o=>({name:o.name,response:o.response})))):this.model.form[this.model.component]=e},handleRemove(e){this.meta.file.isMultiple?this.model.form[this.model.component]=JSON.stringify(this.uploadList.filter(o=>o.response!==e.response)):this.model.form[this.model.component]=null}}},C={class:"sub-form-image"},U=["src"],I={key:1},S={key:1,class:"ti ti-camera"},B={class:"ant-upload-text"};function M(e,o,m,n,s,a){const p=l("loading-outlined"),u=l("a-upload"),f=l("lambda-form-item");return t(),r(f,{label:e.label,name:e.model.component,meta:e.meta},{default:d(()=>[h("div",C,[k(u,{"file-list":s.uploadList,"onUpdate:file-list":o[0]||(o[0]=c=>s.uploadList=c),name:"file",action:`${e.url?e.url:""}/lambda/krud/upload`,onChange:a.handleChange,onRemove:a.handleRemove},{default:d(()=>[this.model.form[this.model.component]?(t(),i("img",{key:0,src:this.url+this.model.form[this.model.component],alt:"image sub form"},null,8,U)):(t(),i("div",I,[s.loading?(t(),r(p,{key:0})):(t(),i("i",S)),h("div",B,v(e.label),1)]))]),_:1},8,["file-list","action","onChange","onRemove"])])]),_:1},8,["label","name","meta"])}const D=_(y,[["render",M]]);export{D as default};
