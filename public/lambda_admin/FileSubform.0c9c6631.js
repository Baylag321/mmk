import{m as _}from"./_mixin.eebe659b.js";import{a as L,aq as b,aL as w}from"./entry.74a9c9b3.js";import{P as k}from"./PlusOutlined.210b9991.js";import{Y as o,a3 as d,_ as r,$ as h,f as y,Z as l,a1 as p,S as m}from"./vue.13bb76e9.js";import"./ant.b38ea10b.js";import"./moment.8b5e7d95.js";import"./cryptoJs.69a6c71a.js";import"./numeral.166788f6.js";import"./common.41eb234c.js";const v={mixins:[_],components:{LoadingOutlined:b,PlusOutlined:k},computed:{lang(){const e=["viewPhotos","_delete"];return e.reduce((t,n,a)=>(t[n]=this.$t("dataForm."+e[a]),t),{})},fileName(){if(this.model.form[this.model.component]){let e=this.model.form[this.model.component].split("/");return e.length>=1?e[e.length-1]:this.model.form[this.model.component]}}},mounted(){this.init()},data(){return{defaultList:[],uploadList:[],showImage:!1,showImageUrl:"",loading:!1}},watch:{itemValue(e,t){(t&&!e||e&&!t)&&e&&this.init()}},methods:{init(){this.model.form[this.model.component]&&(this.uploadList.length>=1?this.uploadList[0].response!==this.model.form[this.model.component]&&(this.uploadList=[{status:"done",thumbUrl:this.url+this.model.form[this.model.component],response:this.model.form[this.model.component]}]):this.uploadList=[{status:"done",thumbUrl:this.url+this.model.form[this.model.component],response:this.model.form[this.model.component]}])},onVisibleChange(e){this.showImage=e},handleView(e){this.showImage=!0,this.showImageUrl=e.response},handleChange(e){if(e.file.status==="uploading"){this.loading=!0;return}e.file.status==="done"&&(this.model.form[this.model.component]=e.file.response,this.uploadList=[{status:"done",thumbUrl:this.url+this.model.form[this.model.component],response:this.model.form[this.model.component],name:e.file.name}],this.loading=!1),e.file.status==="error"&&(this.uploadList=this.uploadList.filter(t=>t.status==="done"),this.loading=!1,w.error(this.$t("alertMessage.errorMsg")))},success(e){this.meta.file.isMultiple?(this.uploadList=this.$refs.upload.fileList,this.model.form[this.model.component]=JSON.stringify(this.uploadList.map(t=>({name:t.name,response:t.response})))):this.model.form[this.model.component]=e},handleRemove(e){this.meta.file.isMultiple?this.model.form[this.model.component]=JSON.stringify(this.uploadList.filter(t=>t.response!==e.response)):this.model.form[this.model.component]=null}}},C={class:"sub-form-image"},N={key:0,style:{"max-width":"120px",overflow:"hidden",display:"block",height:"24px"}},U={key:1},I={key:1,class:"ti ti-file"},S={class:"ant-upload-text"};function x(e,t,n,a,s,i){const f=m("loading-outlined"),u=m("a-upload"),c=m("lambda-form-item");return o(),d(c,{label:e.label,name:e.model.component,meta:e.meta},{default:r(()=>[h("div",C,[y(u,{"file-list":s.uploadList,"onUpdate:file-list":t[0]||(t[0]=g=>s.uploadList=g),name:"file",action:`${e.url?e.url:""}/lambda/krud/upload`,onChange:i.handleChange,onRemove:i.handleRemove},{default:r(()=>[this.model.form[this.model.component]?(o(),l("span",N,p(i.fileName),1)):(o(),l("div",U,[s.loading?(o(),d(f,{key:0})):(o(),l("i",I)),h("div",S,p(e.label),1)]))]),_:1},8,["file-list","action","onChange","onRemove"])])]),_:1},8,["label","name","meta"])}const q=L(v,[["render",x]]);export{q as default};
