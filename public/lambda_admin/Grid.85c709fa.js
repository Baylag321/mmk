import{a as M,aw as C}from"./entry.94f568a7.js";import{s as G,G as N}from"./subFormMix.ea862cd8.js";import{M as F}from"./ant.202d08f0.js";import{Z as i,_ as l,$ as n,a3 as m,H as p,c as u,a0 as h,a2 as c,F as k,a6 as v,a1 as E,a8 as T,ab as L,W as g}from"./vue.6b2d282b.js";import"./common.914374cd.js";import"./moment.8b5e7d95.js";import"./ag.b10eb020.js";import"./lodash.0a37595b.js";import"./numeral.adfb6437.js";import"./cryptoJs.abce1e06.js";const I={props:["form","model","editMode","relations","formula","url","viewMode"],mixins:[G],components:{"grid-form":N,"a-modal":F},mounted(){this.equationRenderer()},computed:{lang(){const t=["pleaseCompleteFirstLine"];return t.reduce((o,e,r)=>(o[e]=this.$t("dataForm."+t[r]),o),{})},subStyle(){return this.form.min_height?{minHeight:this.form.min_height+"px"}:{minHeight:"30px"}},Lang(){const t=["add"];return t.reduce((o,e,r)=>(o[e]=this.$t("dataForm."+t[r]),o),{})}},watch:{listData:{handler:function(t,o){this.hasEq&&this.equationData.map(e=>{if(e.hasEquation){e.data=-1;let r=0;switch(e.equation){case"SUM":{e.data=0,t.map(a=>{e.data+=Number(isNaN(parseInt(a.model[e.model],10))?0:a.model[e.model])});break}case"COUNT":{e.data=0,t.map(a=>{e.data+=Number(1)});break}case"MIN":{t.map(a=>{e.data==-1?e.data=a.model[e.model]:e.data=Math.min(e.data,a.model[e.model])});break}case"MAX":{e.data=0,t.map(a=>{e.data=Math.max(e.data,a.model[e.model])});break}case"AVG":{e.data=0,t.map(a=>{r++,e.data+=Number(a.model[e.model])}),e.data=Number(e.data/r);break}}}})},deep:!0}},data(){return{listData:[],equationData:[],currentSortDir:"asc",hasEq:!1,rowLength:0}},methods:{element:C,checkAddable(){return new Promise((t,o)=>{let e=this.listData[this.listData.length-1];if(e){let r=!1,a=e.model;for(let d in a)typeof a[d]!=null&&a[d]!=null&&a[d]!=""&&a[d]!=!1&&(r=!0);r?t(!0):(alert(this.lang.pleaseCompleteFirstLine),o(!1))}else t(!0)})},addSubForm(){let t=_.cloneDeep(this.form),o={};t.schema.forEach(r=>{t.identity==r.model||r.formType==null||t.timestamp&&(r.model=="created_at"||r.model=="updated_at")||(o[r.model]=r.default)});let e={form:t,model:o};this.model.form[this.model.component]==null&&(this.model.form[this.model.component]=[]),this.model.form[this.model.component].push(o),this.listData.push(e),this.rowLength=this.model.form[this.model.component].length},add(){this.form.addFromGrid&&this.form.sourceGridID?this.showAddSourceModal():this.checkAddable().then(t=>{setTimeout(()=>{this.addSubForm()},200)}).catch(t=>{console.log(t)})},fillData(t){this.$nextTick(()=>{let o=[];t&&t.forEach(e=>{o.push({form:_.cloneDeep(this.form),model:e})}),this.listData=o})},equationRenderer(){this.equationData=[],this.form.schema.map(t=>{t.label!=""&&!t.hidden&&(t.hasEquation&&(this.hasEq=!0),this.equationData.push({hasEquation:t.hasEquation,equation:t.equations,prefix:t.prefix,model:t.model,preStaticWord:t.preStaticWord,data:0}))})},remove(t){this.model.form[this.form.model].splice(t,1),this.listData.splice(t,1),this.rowLength=this.model.form[this.model.component].length},reset(){this.model.form[this.form.model]=[],this.listData=[]},sort(t){let o=1;this.currentSortDir=this.currentSortDir==="asc"?"desc":"asc",this.currentSort=this.currentSortDir==="desc"?-1:1,this.currentSort=t.model,this.listData.sort((e,r)=>(this.currentSortDir==="desc"&&(o=-1),e.model[this.currentSort]<r.model[this.currentSort]?-1*o:e.model[this.currentSort]>r.model[this.currentSort]?1*o:0))}}},x={style:{display:"none"}},R={key:0,class:"subform-header"},V={class:"svg-icon"},W={border:"1"},A={key:0,class:"row-number"},H=["onClick"],z={class:"th-title"},B=n("i",{class:"ti-exchange-vertical"},null,-1),U={key:1,class:"action"},P=["onClick"],j={class:"svg-icon"},O={key:0},X={key:0},Z={key:1},J={key:2},K=n("td",null,null,-1),Q={class:"svg-icon"},Y={class:"form-modal source-grid",style:{height:"calc(100vh - 300px)"}},q={key:0,class:"form-body"},$={key:0,class:"source-grid-description"},ee={key:0},te=["innerHTML"],oe={class:"add-from-pre-source"},se={class:"svg-icon"};function ae(t,o,e,r,a,d){const b=g("inline-svg"),y=g("a-button"),D=g("grid-form"),S=g("datagrid"),w=g("a-modal");return i(),l("div",{class:"subform-grid",style:L(d.subStyle)},[n("h3",x,m(a.rowLength),1),!e.form.min_height&&!e.form.disableCreate&&!e.viewMode?(i(),l("div",R,[p(m(e.form.name)+" ",1),u(y,{shape:"circle",type:"success",size:"small",onClick:d.add,class:"sub-form-add-btn"},{icon:h(()=>[n("span",V,[u(b,{src:"/assets/icons/duotune/general/gen041.svg"})])]),_:1},8,["onClick"])])):c("",!0),n("table",W,[n("thead",null,[n("tr",null,[e.form.showRowNumber?(i(),l("th",A,"\u0414\u0414")):c("",!0),(i(!0),l(k,null,v(e.form.schema.filter(s=>s.label!==""&&!s.hidden),s=>(i(),l("th",{onClick:f=>d.sort(s),key:s.index},[n("div",z,[p(m(s.label),1),B])],8,H))),128)),e.form.disableDelete?c("",!0):(i(),l("th",U,"..."))])]),n("tbody",null,[(i(!0),l(k,null,v(a.listData,(s,f)=>(i(),E(D,{key:f,f:s.form,model:s.model,editMode:e.editMode,relations:e.relations,url:e.url,schema:e.form.schema,formula:e.formula},T({_:2},[e.form.disableDelete?void 0:{name:"action",fn:h(()=>[n("a",{href:"javascript:void(0);",class:"btn btn-icon",onClick:re=>d.remove(f)},[n("span",j,[u(b,{src:"/assets/icons/duotone/General/Trash.svg"})])],8,P)]),key:"0"},e.form.showRowNumber?{name:"rowNumber",fn:h(()=>[n("span",null,m(f+1),1)]),key:"1"}:void 0]),1032,["f","model","editMode","relations","url","schema","formula"]))),128))]),a.hasEq?(i(),l("tfoot",O,[n("tr",null,[(i(!0),l(k,null,v(a.equationData,(s,f)=>(i(),l("td",{key:f},[s.preStaticWord!=null&&s.preStaticWord!=""?(i(),l("span",X,m(s.preStaticWord),1)):c("",!0),s.hasEquation?(i(),l("span",Z,m(s.data.toLocaleString()),1)):c("",!0),s.prefix!=null&&s.prefix!=""?(i(),l("span",J,m(s.prefix),1)):c("",!0)]))),128)),K])])):c("",!0)]),e.form.min_height&&!e.form.disableCreate&&!e.viewMode?(i(),l("a",{key:1,class:"sub-grid-add",href:"javascript:void(0)",onClick:o[0]||(o[0]=(...s)=>d.add&&d.add(...s))},[n("span",Q,[u(b,{src:"/assets/icons/duotune/general/gen041.svg"})]),p(" "+m(d.lang.add),1)])):c("",!0),u(w,{name:`grid-modal-${e.form.sourceGridID}`,visible:t.modal_grid_show,"onUpdate:visible":o[1]||(o[1]=s=>t.modal_grid_show=s),class:"form-modal",title:e.form.sourceGridModalTitle,"min-width":200,"min-height":100,"pivot-y":.5,adaptive:!0,reset:!0,draggable:!0,resizable:!0,width:"85%",height:"50%"},{footer:h(()=>[n("div",oe,[u(y,{type:"success",size:"small",onClick:t.addFromPreSource,disabled:t.preSource.length===0,class:"sub-form-add-btn"},{icon:h(()=>[n("span",se,[u(b,{src:"/assets/icons/duotune/general/gen041.svg"})])]),default:h(()=>[p(" \u0421\u043E\u043D\u0433\u043E\u0445 ")]),_:1},8,["onClick","disabled"])])]),default:h(()=>[n("section",Y,[t.modal_grid_show?(i(),l("div",q,[e.form.sourceGridTitle||e.form.sourceGridDescription?(i(),l("div",$,[e.form.sourceGridTitle?(i(),l("h3",ee,m(e.form.sourceGridTitle),1)):c("",!0),n("p",{innerHTML:e.form.sourceGridDescription},null,8,te)])):c("",!0),u(S,{schemaID:e.form.sourceGridID,url:t.sourceGridUrl(),onRowSelect:t.onRowSelect,paginate:50,hasSelection:!0,user_condition:t.user_condition,custom_condition:t.custom_condition,permissions:{c:!1,r:!0,u:!1,d:!1}},null,8,["schemaID","url","onRowSelect","user_condition","custom_condition"])])):c("",!0)])]),_:1},8,["name","visible","title","pivot-y"])],4)}const ge=M(I,[["render",ae]]);export{ge as default};
