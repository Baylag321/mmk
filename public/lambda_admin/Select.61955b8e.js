import{m as C}from"./_mixin.32351e64.js";import{a as F}from"./entry.e3cd167a.js";import{M as v}from"./ant.44dab1d6.js";import{Y as a,a0 as d,$ as n,f as r,a8 as S,_ as u,a1 as c,Z as k,V as s}from"./vue.3f3be479.js";import"./common.194e1616.js";import"./moment.8b5e7d95.js";import"./lodash.7f89dc3c.js";import"./numeral.30e81b7f.js";import"./cryptoJs.b278cf6a.js";const N={mixins:[C],components:{"a-modal":v},computed:{lang(){const e=["dataNotFound"];return e.reduce((o,l,m)=>(o[l]=this.$t("dataForm."+e[m]),o),{})},addAble(){return this.meta.relation.addAble&&this.meta.relation.addFrom},selectClass(){let e="";return this.meta.info_url&&this.model.form[this.model.component]&&(e=e+" with-info-caller "),this.addAble&&(e=e+" addable-select "),e}},data(){return{selectValue:null,modal_show:!1}},methods:{changeValue(e){e!=null?this.meta.relation.multiple===!0?this.model.form[this.model.component]=e.join(","):e===""?this.model.form[this.model.component]=null:isNaN(e)?this.model.form[this.model.component]=e:this.model.form[this.model.component]=e*1:this.model.form[this.model.component]=null},addFromUrl(){if(window.init)if(window.init.microserviceSettings){let e=window.init.microserviceSettings.findIndex(o=>o.project_id==this.meta.relation.addFromMicroservice);return e>=0?window.init.microserviceSettings[e].production_url:this.url}else return this.url;else return this.url},showAddModal(){this.modal_show=!0},closeModal(){this.modal_show=!1},onSuccess(e){let o=this.meta.relation.fields.map(m=>e[m]);o=o.join(", ");let l={value:e[this.meta.relation.key],label:o};this.meta.relation.parentFieldOfTable!==""&&this.meta.relation.parentFieldOfForm!==""&&(l.parent_value=e[this.meta.relation.parentFieldOfTable].toString()),this.relation_data(this.meta).push(l),this.closeModal()},onError(e){},showInfoModal(){this.model.form[this.model.component]&&window.showInformationModal(`${this.meta.info_url}${this.model.form[this.model.component]}`,this.meta.placeHolder)},search(e){console.log(e)},initialValue(e){this.model.form[this.model.component]?this.model.form[this.meta.relation.parentFieldOfForm]?e.findIndex(l=>l.value===this.model.form[this.model.component])>=0?this.setSelectValue():this.setNull():this.setSelectValue():this.setNull()},setSelectValue(){this.meta.relation.multiple===!0&&this.model.form[this.model.component]!==""?this.selectValue=this.model.form[this.model.component].split(",").map(e=>isNaN(e)?e:e*1):this.selectValue=this.model.form[this.model.component]},setNull(){this.meta.relation.multiple===!0?this.selectValue=[]:this.selectValue=null}},watch:{do_render(e){e||(this.value=null,this.clearAble=!1,this.ignoreChange=!1)}}},M={class:"svg-icon"},I={class:"svg-icon"},A={key:0,class:"add-modal"},y={class:"add-body"};function E(e,o,l,m,i,t){const _=s("a-select"),f=s("inline-svg"),p=s("a-button"),b=s("a-input-group"),w=s("dataform"),g=s("a-modal"),V=s("lambda-form-item");return a(),d(V,{label:e.label,name:e.model.component,meta:e.meta},{default:n(()=>[r(b,{compact:""},{default:n(()=>[r(_,{value:i.selectValue,"onUpdate:value":o[0]||(o[0]=h=>i.selectValue=h),disabled:e.disabled,autocomplete:"off",allowClear:"",showSearch:"",options:e.options,optionFilterProp:"label",optionLabelProp:"label",mode:e.meta.relation.multiple?"multiple":void 0,onChange:t.changeValue,placeholder:e.placeholder,class:S(t.selectClass)},null,8,["value","disabled","options","mode","onChange","placeholder","class"]),t.addAble?(a(),d(p,{key:0,onClick:t.showAddModal},{icon:n(()=>[u("span",M,[r(f,{src:"/assets/icons/duotune/general/gen041.svg"})])]),_:1},8,["onClick"])):c("",!0),e.meta.info_url&&e.model.form[e.model.component]?(a(),d(p,{key:1,onClick:t.showInfoModal},{icon:n(()=>[u("span",I,[r(f,{src:"/assets/icons/duotone/Code/Info-circle.svg"})])]),_:1},8,["onClick"])):c("",!0)]),_:1}),t.addAble?(a(),d(g,{key:0,"min-width":200,"min-height":100,draggable:!0,"footer-hide":!0,title:e.label,width:"800",height:"70%",visible:i.modal_show,"onUpdate:visible":o[1]||(o[1]=h=>i.modal_show=h)},{footer:n(()=>[]),default:n(()=>[i.modal_show?(a(),k("section",A,[u("div",y,[r(w,{ref:"form",schemaID:e.meta.relation.addFrom,editMode:!1,onSuccess:t.onSuccess,url:t.addFromUrl(),do_render:i.modal_show,onError:t.onError},null,8,["schemaID","onSuccess","url","do_render","onError"])])])):c("",!0)]),_:1},8,["title","visible"])):c("",!0)]),_:1},8,["label","name","meta"])}const L=F(N,[["render",E]]);export{L as default};
