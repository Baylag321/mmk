import{a as C,aX as F}from"./entry.46591473.js";import{s as x,G as N}from"./subFormMix.3b4d1cd3.js";import{M as G}from"./Modal.cb79d436.js";import{Y as l,Z as n,E as k,a1 as u,f as h,_ as f,$ as i,a2 as m,F as y,a0 as D,a3 as S,a8 as T,a7 as R,S as g}from"./vue.13bb76e9.js";import"./ant.ba1bd7fe.js";import"./moment.8b5e7d95.js";import"./cryptoJs.940212dc.js";import"./numeral.ccce3a12.js";import"./common.00ee525f.js";const A={props:["form","model","editMode","relations","formula","url"],mixins:[x],components:{"grid-form":N,"a-modal":G},mounted(){this.equationRenderer(),this.form.schema.forEach(t=>{t.disabled=!0})},computed:{lang(){const t=["pleaseCompleteFirstLine"];return t.reduce((o,e,r)=>(o[e]=this.$t("dataForm."+t[r]),o),{})},subStyle(){if(this.form.min_height)return{minHeight:this.form.min_height+"px",background:"#f3f4f5"}},Lang(){const t=["add"];return t.reduce((o,e,r)=>(o[e]=this.$t("dataForm."+t[r]),o),{})}},watch:{listData:{handler:function(t,o){this.hasEq&&this.equationData.map(e=>{if(e.hasEquation){e.data=-1;let r=0;switch(e.equation){case"SUM":{e.data=0,t.map(s=>{e.data+=Number(isNaN(parseInt(s.model[e.model],10))?0:s.model[e.model])});break}case"COUNT":{e.data=0,t.map(s=>{e.data+=Number(1)});break}case"MIN":{t.map(s=>{e.data==-1?e.data=s.model[e.model]:e.data=Math.min(e.data,s.model[e.model])});break}case"MAX":{e.data=0,t.map(s=>{e.data=Math.max(e.data,s.model[e.model])});break}case"AVG":{e.data=0,t.map(s=>{r++,e.data+=Number(s.model[e.model])}),e.data=Number(e.data/r);break}}}})},deep:!0}},data(){return{listData:[],equationData:[],currentSortDir:"asc",hasEq:!1,modal_show:!1,filled:!1,editIndex:-1}},methods:{showAddModal(){this.modal_show=!0},closeModal(){this.modal_show=!1,this.editIndex=-1},formReady(t,o){let e=o.findIndex(r=>r.model===this.form.parent);e>0&&(o[e].hidden=!0),this.editIndex>=0&&this.$nextTick(()=>{this.$refs.form.editModel(this.listData[this.editIndex].model[this.form.identity],{...this.listData[this.editIndex].model})})},onError(){},onSuccess(t){if(this.editIndex>=0)Object.keys(t).forEach(o=>{this.listData[this.editIndex].form.identity!=o&&(o=="created_at"||o=="updated_at"||(this.listData[this.editIndex].model[o]=t[o]))});else{let o=_.cloneDeep(this.form),e={};Object.keys(t).forEach(d=>{let c=o.schema.findIndex(p=>p.model=="key");c>=0&&(o.identity==o.schema[c].model||o.schema[c].formType==null||o.timestamp&&(o.schema[c].model=="created_at"||o.schema[c].model=="updated_at"))||(e[d]=t[d])});let r={form:o,model:e},s=this.model.form[this.model.component];s==null&&(s=[]),s.push(e),this.model.form[this.model.component]=s,this.listData.push(r)}this.closeModal()},element:F,checkAddable(){return new Promise((t,o)=>{let e=this.listData[this.listData.length-1];if(e){let r=!1,s=e.model;for(let d in s)typeof s[d]!=null&&s[d]!=null&&s[d]!=""&&s[d]!=!1&&(r=!0);r?t(!0):(alert(this.lang.pleaseCompleteFirstLine),o(!1))}else t(!0)})},addSubForm(){let t=_.cloneDeep(this.form),o={};t.schema.forEach(r=>{t.identity==r.model||r.formType==null||t.timestamp&&(r.model=="created_at"||r.model=="updated_at")||(o[r.model]=r.default)});let e={form:t,model:o};this.model.form[this.model.component]==null&&(this.model.form[this.model.component]=[]),this.model.form[this.model.component].push(o),this.listData.push(e)},add(){this.form.addFromGrid&&this.form.sourceGridID?this.showAddSourceModal():this.addByFrom()},addByFrom(){this.closeSourceModal(),this.editIndex=-1,this.showAddModal()},fillData(t){this.$nextTick(()=>{let o=[];t.forEach(e=>{o.push({form:_.cloneDeep(this.form),model:e})}),this.listData=o})},equationRenderer(){this.equationData=[],this.form.schema.map(t=>{t.label!=""&&!t.hidden&&(t.hasEquation&&(this.hasEq=!0),this.equationData.push({hasEquation:t.hasEquation,equation:t.equations,prefix:t.prefix,model:t.model,preStaticWord:t.preStaticWord,data:0}))})},edit(t){this.model.form[this.form.model][t],this.editIndex=t,this.showAddModal()},remove(t){this.model.form[this.form.model].splice(t,1),this.listData.splice(t,1)},reset(){this.model.form[this.form.model]=[],this.listData=[]},sort(t){let o=1;this.currentSortDir=this.currentSortDir==="asc"?"desc":"asc",this.currentSort=this.currentSortDir==="desc"?-1:1,this.currentSort=t.model,this.listData.sort((e,r)=>(this.currentSortDir==="desc"&&(o=-1),e.model[this.currentSort]<r.model[this.currentSort]?-1*o:e.model[this.currentSort]>r.model[this.currentSort]?1*o:0))}}},B={key:0,class:"subform-header"},L={class:"svg-icon"},V={key:1,class:"sub-form-grid",border:"1"},j={key:0,class:"row-number"},z=["onClick"],U={class:"th-title"},W=i("i",{class:"ti-exchange-vertical"},null,-1),H=i("th",{class:"action"},"...",-1),O=["onClick"],P={class:"svg-icon"},X=["onClick"],Y={class:"svg-icon"},Z={key:0},J={key:0},Q={key:1},q={key:2},K=i("td",null,null,-1),$={class:"svg-icon"},ee={class:"form-modal"},te={class:"form-body"},oe={class:"form-modal source-grid"},se={class:"form-tool"},ae={class:"form-tool-actions"},re=i("i",{class:"ti-close"},null,-1),ie=[re],de={key:0,class:"form-body"},le={key:0,class:"source-grid-description"},ne=["innerHTML"],me={class:"add-from-pre-source"};function ce(t,o,e,r,s,d){const c=g("inline-svg"),p=g("a-button"),w=g("grid-form"),M=g("dataform"),v=g("a-modal"),I=g("datagrid");return l(),n("div",{class:"subform-grid sub-modal-form",style:R(d.subStyle)},[!e.form.min_height&&!e.form.disableCreate?(l(),n("div",B,[k(u(e.form.name)+" ",1),h(p,{shape:"circle",type:"success",size:"small",onClick:d.add,class:"sub-form-add-btn"},{icon:f(()=>[i("span",L,[h(c,{src:"/assets/icons/duotune/general/gen041.svg"})])]),_:1},8,["onClick"])])):m("",!0),e.form.min_height||this.listData.length>=1?(l(),n("table",V,[i("thead",null,[i("tr",null,[e.form.showRowNumber?(l(),n("th",j,"\u0414\u0414")):m("",!0),(l(!0),n(y,null,D(e.form.schema.filter(a=>a.label!==""&&!a.hidden),a=>(l(),n("th",{onClick:b=>d.sort(a),key:a.index},[i("div",U,[k(u(a.label)+" ",1),W])],8,z))),128)),H])]),i("tbody",null,[(l(!0),n(y,null,D(s.listData,(a,b)=>(l(),S(w,{key:b,f:a.form,model:a.model,editMode:e.editMode,relations:e.relations,formula:e.formula,schema:e.form.schema},T({_:2},[e.form.disableDelete?void 0:{name:"action",fn:f(()=>[e.form.disableEdit?m("",!0):(l(),n("a",{key:0,href:"javascript:void(0);",class:"btn btn-icon sub-edit",onClick:E=>d.edit(b)},[i("span",P,[h(c,{src:"/assets/icons/duotone/Design/Edit.svg"})])],8,O)),e.form.disableDelete?m("",!0):(l(),n("a",{key:1,href:"javascript:void(0);",class:"btn btn-icon",onClick:E=>d.remove(b)},[i("span",Y,[h(c,{src:"/assets/icons/duotone/General/Trash.svg"})])],8,X))]),key:"0"},e.form.showRowNumber?{name:"rowNumber",fn:f(()=>[i("span",null,u(b+1),1)]),key:"1"}:void 0]),1032,["f","model","editMode","relations","formula","schema"]))),128))]),s.hasEq?(l(),n("tfoot",Z,[i("tr",null,[(l(!0),n(y,null,D(s.equationData,(a,b)=>(l(),n("td",{key:b},[a.preStaticWord!=null&&a.preStaticWord!=""?(l(),n("span",J,u(a.preStaticWord),1)):m("",!0),a.hasEquation?(l(),n("span",Q,u(a.data.toLocaleString()),1)):m("",!0),a.prefix!=null&&a.prefix!=""?(l(),n("span",q,u(a.prefix),1)):m("",!0)]))),128)),K])])):m("",!0)])):m("",!0),e.form.min_height?(l(),n("a",{key:2,class:"sub-grid-add",href:"javascript:void(0)",onClick:o[0]||(o[0]=(...a)=>d.add&&d.add(...a))},[i("span",$,[h(c,{src:"/assets/icons/duotune/general/gen041.svg"})]),k(" "+u(d.lang.save),1)])):m("",!0),h(v,{"min-width":200,"min-height":100,draggable:!0,"footer-hide":!0,title:e.form.name,width:"85%",height:"85%",visible:s.modal_show,"onUpdate:visible":o[1]||(o[1]=a=>s.modal_show=a)},{footer:f(()=>[]),default:f(()=>[i("section",ee,[i("div",te,[s.modal_show?(l(),S(M,{key:0,ref:"form",schemaID:e.form.formId,do_render:s.modal_show,editMode:s.editIndex>=0,isSubForm:!0,onSuccess:d.onSuccess,url:e.url,onReady:d.formReady,onError:d.onError},null,8,["schemaID","do_render","editMode","onSuccess","url","onReady","onError"])):m("",!0)])])]),_:1},8,["title","visible"]),h(v,{name:`grid-modal-${e.form.sourceGridID}`,visible:t.modal_grid_show,"onUpdate:visible":o[3]||(o[3]=a=>t.modal_grid_show=a),class:"form-modal","min-width":200,"min-height":100,"pivot-y":.5,adaptive:!0,reset:!0,draggable:!0,resizable:!0,width:"85%",height:"50%"},{footer:f(()=>[]),default:f(()=>[i("section",oe,[i("div",se,[i("h4",null,u(e.form.sourceGridModalTitle),1),i("div",ae,[i("a",{href:"javascript:void(0)",onClick:o[2]||(o[2]=(...a)=>t.closeSourceModal&&t.closeSourceModal(...a))},ie)])]),t.modal_grid_show?(l(),n("div",de,[e.form.sourceGridTitle&&e.form.sourceGridDescription?(l(),n("div",le,[i("h3",null,u(e.form.sourceGridTitle),1),i("p",{innerHTML:e.form.sourceGridDescription},null,8,ne)])):m("",!0),h(I,{schemaID:e.form.sourceGridID,url:t.sourceGridUrl(),onRowSelect:t.onRowSelect,user_condition:t.user_condition,paginate:50,hasSelection:!0,permissions:{c:!1,r:!0,u:!1,d:!1}},null,8,["schemaID","url","onRowSelect","user_condition"]),i("div",me,[h(p,{shape:"circle",type:"primary",size:"small",onClick:d.addByFrom,disabled:t.preSource.length>=1,icon:"md-add",class:"sub-form-add-btn"},{default:f(()=>[k("\u0428\u0438\u043D\u044D\u044D\u0440 \u0431\u04AF\u0440\u0442\u0433\u044D\u0445")]),_:1},8,["onClick","disabled"]),h(p,{shape:"circle",type:"success",size:"small",onClick:t.addFromPreSource,disabled:t.preSource.length==0,icon:"md-add",class:"sub-form-add-btn"},{default:f(()=>[k("\u0421\u043E\u043D\u0433\u043E\u0445")]),_:1},8,["onClick","disabled"])])])):m("",!0)])]),_:1},8,["name","visible","pivot-y"])],4)}const De=C(A,[["render",ce]]);export{De as default};
