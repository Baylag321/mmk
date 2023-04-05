import{a as w}from"./common.c40c4e6a.js";import{m as v}from"./_mixin.eef67487.js";import{a as b}from"./entry.f4b9eee7.js";import{M as O}from"./ant.e036270e.js";import{Z as s,a1 as k,a0 as l,$ as o,_ as r,a6 as p,a3 as m,F as _,c as d,a2 as u,H as R,W as c}from"./vue.65c51cdf.js";import"./moment.8b5e7d95.js";import"./ag.ab39fb93.js";import"./lodash.888217fe.js";import"./numeral.4dda2596.js";import"./cryptoJs.61df0830.js";const C={mixins:[v],components:{"a-modal":O},data(){return{preSource:[],modal_grid_show:!1,user_condition:null,selectedRow:{}}},computed:{value(){return this.model.form[this.model.component]}},watch:{value(e,t){(this.value===null||this.value===0||this.value==="")&&(this.selectedRow={}),e&&!t&&Object.keys(this.selectedRow).length==0&&this.callRowData()}},mounted(){this.meta.GSOption.sourceGridUserCondition!==void 0&&this.meta.GSOption.sourceGridUserCondition!==null&&this.meta.GSOption.sourceGridUserCondition!=""&&(this.user_condition=JSON.parse(this.meta.GSOption.sourceGridUserCondition))},methods:{callRowData(){let e={};e[this.meta.GSOption.sourceGridValueField]=this.value,w.post(`${this.sourceGridUrl()}/lambda/puzzle/grid/data/${this.meta.GSOption.sourceGridID}?&paginate=1&page=1&sort=id&order=desc`,e).then(({data:t})=>{t.data.length>=1&&(this.selectedRow=t.data[0])})},onRowSelect(e){this.preSource=e},sourceGridUrl(){if(window.init)if(window.init.microserviceSettings){let e=window.init.microserviceSettings.findIndex(t=>t.project_id==this.meta.GSOption.sourceMicroserviceID);return e>=0?window.init.microserviceSettings[e].production_url:this.url}else return this.url;else return this.url},showAddSourceModal(){this.modal_grid_show=!0},closeSourceModal(){this.modal_grid_show=!1},addFromPreSource(){this.selectedRow={},this.preSource&&this.meta.GSOption.sourceGridTargetColumns&&this.preSource.length>=1&&(this.selectedRow=this.preSource[0],this.model.form[this.model.component]=this.selectedRow[this.meta.GSOption.sourceGridValueField]),this.closeSourceModal()}}},y={class:"subform-grid"},D={border:"1"},M=o("th",{class:"action"},"...",-1),T={class:"action"},U={class:"svg-icon"},I={class:"form-modal source-grid",style:{height:"calc(100vh - 300px)"}},F={key:0,class:"form-body"},V={key:0,class:"source-grid-description"},N={key:0},B=["innerHTML"],j={class:"add-from-pre-source"},A={class:"svg-icon"};function H(e,t,L,z,n,a){const h=c("inline-svg"),S=c("datagrid"),f=c("a-button"),g=c("a-modal"),G=c("lambda-form-item");return s(),k(G,{label:e.label,name:e.model.component,meta:e.meta},{default:l(()=>[o("div",y,[o("table",D,[o("thead",null,[o("tr",null,[(s(!0),r(_,null,p(e.meta.GSOption.sourceGridTargetColumns,i=>(s(),r("th",{key:i.index},m(i.label),1))),128)),M])]),o("tbody",null,[o("tr",null,[(s(!0),r(_,null,p(e.meta.GSOption.sourceGridTargetColumns,i=>(s(),r("td",{key:i.index},m(n.selectedRow[i.model]),1))),128)),o("td",T,[e.meta.disabled?u("",!0):(s(),r("a",{key:0,href:"javascript:void(0);",class:"link link-icon",onClick:t[0]||(t[0]=(...i)=>a.showAddSourceModal&&a.showAddSourceModal(...i))},[o("span",U,[d(h,{src:"/assets/icons/duotune/general/gen021.svg"})])]))])])])]),d(g,{name:`grid-modal-${e.meta.GSOption.sourceGridID}`,visible:n.modal_grid_show,"onUpdate:visible":t[1]||(t[1]=i=>n.modal_grid_show=i),class:"form-modal",width:"85%",height:"85%",title:e.meta.GSOption.sourceGridModalTitle},{footer:l(()=>[o("div",j,[d(f,{type:"success",onClick:a.addFromPreSource,disabled:n.preSource.length===0,class:"sub-form-add-btn"},{icon:l(()=>[o("span",A,[d(h,{src:"/assets/icons/duotune/general/gen041.svg"})])]),default:l(()=>[R(" \xA0\xA0\u0421\u043E\u043D\u0433\u043E\u0445 ")]),_:1},8,["onClick","disabled"])])]),default:l(()=>[o("section",I,[n.modal_grid_show?(s(),r("div",F,[e.meta.GSOption.sourceGridTitle||e.meta.GSOption.sourceGridDescription?(s(),r("div",V,[e.meta.GSOption.sourceGridTitle?(s(),r("h3",N,m(e.meta.GSOption.sourceGridTitle),1)):u("",!0),o("p",{innerHTML:e.meta.GSOption.sourceGridDescription},null,8,B)])):u("",!0),d(S,{schemaID:e.meta.GSOption.sourceGridID,url:a.sourceGridUrl(),onRowSelect:a.onRowSelect,paginate:50,hasSelection:!0,gridSelector:!0,user_condition:n.user_condition,permissions:{c:!1,r:!0,u:!1,d:!1}},null,8,["schemaID","url","onRowSelect","user_condition"])])):u("",!0)])]),_:1},8,["name","visible","title"])])]),_:1},8,["label","name","meta"])}const x=b(C,[["render",H]]);export{x as default};
