import{m as L}from"./_mixin.84054464.js";import{a as _}from"./entry.bbc0a0fe.js";import{L as w,P as b,m as y}from"./ant.a39268cc.js";import{Z as l,a4 as a,$ as r,c as d,a0 as h,_ as v,a2 as C,U as o}from"./vue.94d6394d.js";import"./common.683a698b.js";import"./moment.8b5e7d95.js";import"./ag.01cba310.js";import"./lodash.a5f6e27a.js";import"./numeral.3554dd39.js";import"./cryptoJs.1212ab17.js";const U={mixins:[L],components:{LoadingOutlined:w,PlusOutlined:b},computed:{lang(){const e=["viewPhotos","_delete"];return e.reduce((t,n,m)=>(t[n]=this.$t("dataForm."+e[m]),t),{})}},mounted(){this.init()},data(){return{defaultList:[],uploadList:[],showImage:!1,showImageUrl:"",loading:!1}},watch:{itemValue(e,t){(t&&!e||e&&!t)&&e&&this.init()}},methods:{init(){if(this.model.form[this.model.component])if(typeof this.meta.file.isMultiple<"u"&&this.meta.file.isMultiple){if(JSON.stringify(this.uploadList!==this.model.form[this.model.component])){let e=JSON.parse(this.model.form[this.model.component]);Array.isArray(e)&&(this.uploadList=e)}}else this.uploadList.length>=1?this.uploadList[0].response!==this.model.form[this.model.component]&&(this.uploadList=[{status:"done",thumbUrl:this.url+this.model.form[this.model.component],response:this.model.form[this.model.component]}]):this.uploadList=[{status:"done",thumbUrl:this.url+this.model.form[this.model.component],response:this.model.form[this.model.component]}]},onVisibleChange(e){this.showImage=e},handleView(e){this.showImage=!0,this.showImageUrl=this.url+e.response},handleChange(e){if(e.file.status==="uploading"){this.loading=!0;return}e.file.status==="done"&&(this.meta.file.isMultiple?(this.uploadList=this.uploadList.map(t=>({status:"done",thumbUrl:this.url+t.response,response:t.response,name:t.name})),this.model.form[this.model.component]=JSON.stringify(this.uploadList)):(this.model.form[this.model.component]=e.file.response,this.uploadList=[{status:"done",thumbUrl:this.url+this.model.form[this.model.component],response:this.model.form[this.model.component],name:e.file.name}]),this.loading=!1),e.file.status==="error"&&(this.uploadList=this.uploadList.filter(t=>t.status==="done"),this.loading=!1,y.error(this.$t("alertMessage.errorMsg")))},success(e){this.meta.file.isMultiple?(this.uploadList=this.$refs.upload.fileList,this.model.form[this.model.component]=JSON.stringify(this.uploadList.map(t=>({name:t.name,response:t.response})))):this.model.form[this.model.component]=e},handleRemove(e){this.meta.file.isMultiple?this.model.form[this.model.component]=JSON.stringify(this.uploadList.filter(t=>t.response!==e.response)):this.model.form[this.model.component]=null}}},I={key:1,class:"ti ti-camera"},M={class:"ant-upload-text"};function N(e,t,n,m,s,i){const p=o("loading-outlined"),u=o("a-upload"),f=o("a-image"),c=o("lambda-form-item");return l(),a(c,{label:e.label,name:e.model.component,meta:e.meta},{default:r(()=>[d(u,{"file-list":s.uploadList,"onUpdate:file-list":t[0]||(t[0]=g=>s.uploadList=g),multiple:this.meta.file.isMultiple,name:"file","list-type":"picture-card",action:`${e.url?e.url:""}/lambda/krud/upload`,onPreview:i.handleView,onChange:i.handleChange,onRemove:i.handleRemove},{default:r(()=>[h("div",null,[s.loading?(l(),a(p,{key:0})):(l(),v("i",I)),h("div",M,C(e.label),1)])]),_:1},8,["file-list","multiple","action","onPreview","onChange","onRemove"]),d(f,{width:200,style:{display:"none"},preview:{visible:s.showImage,onVisibleChange:i.onVisibleChange},src:s.showImageUrl},null,8,["preview","src"])]),_:1},8,["label","name","meta"])}const x=_(U,[["render",N]]);export{x as default};
