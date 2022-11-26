import{m as L}from"./_mixin.eebe659b.js";import{a as _,aq as b,aL as w}from"./entry.74a9c9b3.js";import{P as y}from"./PlusOutlined.210b9991.js";import{Y as l,a3 as a,_ as r,f as d,$ as h,Z as v,a1 as M,S as o}from"./vue.13bb76e9.js";import"./ant.b38ea10b.js";import"./moment.8b5e7d95.js";import"./cryptoJs.69a6c71a.js";import"./numeral.166788f6.js";import"./common.41eb234c.js";const C={mixins:[L],components:{LoadingOutlined:b,PlusOutlined:y},computed:{lang(){const e=["viewPhotos","_delete"];return e.reduce((t,n,m)=>(t[n]=this.$t("dataForm."+e[m]),t),{})},isMultiple(){return this.meta.file?!!(typeof this.meta.file.isMultiple<"u"&&this.meta.file.isMultiple):!1}},mounted(){this.init()},data(){return{defaultList:[],uploadList:[],showImage:!1,showImageUrl:"",loading:!1}},watch:{itemValue(e,t){(t&&!e||e&&!t)&&(e?this.init():this.uploadList=[])}},methods:{init(){if(this.model.form[this.model.component])if(this.isMultiple){if(JSON.stringify(this.uploadList!==this.model.form[this.model.component])){let e=JSON.parse(this.model.form[this.model.component]);Array.isArray(e)&&(this.uploadList=e)}}else{let e=this.model.form[this.model.component].split("/"),t="";e.length>=1&&(t=e[e.length-1]),this.uploadList.length>=1?this.uploadList[0].response!==this.model.form[this.model.component]&&(this.uploadList=[{status:"done",thumbUrl:this.url+this.model.form[this.model.component],response:this.model.form[this.model.component],name:t}]):this.uploadList=[{status:"done",thumbUrl:this.url+this.model.form[this.model.component],response:this.model.form[this.model.component],name:t}]}},onVisibleChange(e){this.showImage=e},handleView(e){this.showImage=!0,this.showImageUrl=this.url+e.response},handleChange(e){if(e.file.status==="uploading"){this.loading=!0;return}e.file.status==="done"&&(this.isMultiple?(this.uploadList=this.uploadList.map(t=>({status:"done",thumbUrl:this.url+t.response,response:t.response,name:t.name})),this.model.form[this.model.component]=JSON.stringify(this.uploadList)):(this.model.form[this.model.component]=e.file.response,this.uploadList=[{status:"done",thumbUrl:this.url+this.model.form[this.model.component],response:this.model.form[this.model.component],name:e.file.name}]),this.loading=!1),e.file.status==="error"&&(this.uploadList=this.uploadList.filter(t=>t.status==="done"),this.loading=!1,w.error(this.$t("alertMessage.errorMsg")))},success(e){this.meta.file?this.isMultiple?(this.uploadList=this.$refs.upload.fileList,this.model.form[this.model.component]=JSON.stringify(this.uploadList.map(t=>({name:t.name,response:t.response})))):this.model.form[this.model.component]=e:this.model.form[this.model.component]=e},handleRemove(e){this.isMultiple?this.model.form[this.model.component]=JSON.stringify(this.uploadList.filter(t=>t.response!==e.response)):this.model.form[this.model.component]=null}}},I={key:1,class:"ti ti-camera"},N={class:"ant-upload-text"};function U(e,t,n,m,s,i){const p=o("loading-outlined"),u=o("a-upload"),f=o("a-image"),c=o("lambda-form-item");return l(),a(c,{label:e.label,name:e.model.component,meta:e.meta},{default:r(()=>[d(u,{"file-list":s.uploadList,"onUpdate:file-list":t[0]||(t[0]=g=>s.uploadList=g),multiple:this.isMultiple,disabled:e.disabled,name:"file","list-type":"picture-card",action:`${e.url?e.url:""}/lambda/krud/upload`,onPreview:i.handleView,onChange:i.handleChange,onRemove:i.handleRemove},{default:r(()=>[h("div",null,[s.loading?(l(),a(p,{key:0})):(l(),v("i",I)),h("div",N,M(e.label),1)])]),_:1},8,["file-list","multiple","disabled","action","onPreview","onChange","onRemove"]),d(f,{width:200,style:{display:"none"},preview:{visible:s.showImage,onVisibleChange:i.onVisibleChange},src:s.showImageUrl},null,8,["preview","src"])]),_:1},8,["label","name","meta"])}const q=_(C,[["render",U]]);export{q as default};
