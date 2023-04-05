import{m as c}from"./_mixin.eebe659b.js";import{a as g,aq as L,aL as _}from"./entry.74a9c9b3.js";import{P as b}from"./PlusOutlined.210b9991.js";import{Y as o,a3 as n,_ as a,$ as y,f as w,Z as k,E as M,a1 as N,a2 as S,S as i}from"./vue.13bb76e9.js";import"./ant.b38ea10b.js";import"./moment.8b5e7d95.js";import"./cryptoJs.69a6c71a.js";import"./numeral.166788f6.js";import"./common.41eb234c.js";const C={mixins:[c],components:{LoadingOutlined:L,PlusOutlined:b},computed:{lang(){const e=["viewPhotos","_delete","pleaseSelectFile"];return e.reduce((t,m,r)=>(t[m]=this.$t("dataForm."+e[r]),t),{})},isMultiple(){return this.meta.file?!!(typeof this.meta.file.isMultiple<"u"&&this.meta.file.isMultiple):!1}},mounted(){this.init()},data(){return{defaultList:[],uploadList:[],showImage:!1,showImageUrl:"",loading:!1}},watch:{itemValue(e,t){(t&&!e||e&&!t)&&(e?this.init():this.uploadList=[])}},methods:{init(){if(this.model.form[this.model.component])if(this.isMultiple){if(JSON.stringify(this.uploadList!==this.model.form[this.model.component])){let e=JSON.parse(this.model.form[this.model.component]);Array.isArray(e)&&(this.uploadList=e)}}else{let e=this.model.form[this.model.component].split("/"),t="";e.length>=1&&(t=e[e.length-1]),this.uploadList.length>=1?this.uploadList[0].response!==this.model.form[this.model.component]&&(this.uploadList=[{status:"done",thumbUrl:this.model.form[this.model.component],response:this.model.form[this.model.component],name:t}]):this.uploadList=[{status:"done",thumbUrl:this.model.form[this.model.component],response:this.model.form[this.model.component],name:t}]}},onVisibleChange(e){this.showImage=e},handleView(e){this.showImageUrl=e.response;const t=document.createElement("a");t.href=e.response,t.target="_blank",t.click()},handleChange(e){if(e.file.status==="uploading"){this.loading=!0;return}e.file.status==="done"&&(this.isMultiple?(this.uploadList=this.uploadList.map(t=>({status:"done",thumbUrl:this.url+t.response,response:t.response,name:t.name})),this.model.form[this.model.component]=JSON.stringify(this.uploadList)):(this.model.form[this.model.component]=e.file.response,this.uploadList=[{status:"done",thumbUrl:this.url+this.model.form[this.model.component],response:this.model.form[this.model.component],name:e.file.name}]),this.loading=!1),e.file.status==="error"&&(this.uploadList=this.uploadList.filter(t=>t.status==="done"),this.loading=!1,_.error(this.$t("alertMessage.errorMsg")))},success(e){this.meta.file?this.isMultiple?(this.uploadList=this.$refs.upload.fileList,this.model.form[this.model.component]=JSON.stringify(this.uploadList.map(t=>({name:t.name,response:t.response})))):this.model.form[this.model.component]=e:this.model.form[this.model.component]=e},handleRemove(e){this.isMultiple?this.model.form[this.model.component]=JSON.stringify(this.uploadList.filter(t=>t.response!==e.response)):this.model.form[this.model.component]=null}}},O={class:"file-uploader"},U={key:1,class:"ti ti-file"};function V(e,t,m,r,l,s){const d=i("loading-outlined"),h=i("a-button"),p=i("a-upload"),u=i("lambda-form-item");return o(),n(u,{label:e.label,name:e.model.component,meta:e.meta},{default:a(()=>[y("div",O,[w(p,{"file-list":l.uploadList,"onUpdate:file-list":t[0]||(t[0]=f=>l.uploadList=f),disabled:e.disabled,multiple:this.isMultiple,name:"file",action:`${e.url?e.url:""}/lambda/krud/upload`,onPreview:s.handleView,onChange:s.handleChange,onRemove:s.handleRemove},{default:a(()=>[e.disabled?S("",!0):(o(),n(h,{key:0,type:"dashed",block:""},{default:a(()=>[l.loading?(o(),n(d,{key:0})):(o(),k("i",U)),M(" "+N(s.lang.pleaseSelectFile),1)]),_:1}))]),_:1},8,["file-list","disabled","multiple","action","onPreview","onChange","onRemove"])])]),_:1},8,["label","name","meta"])}const $=g(C,[["render",V]]);export{$ as default};
