import{m as I}from"./_mixin.abbd934f.js";import{a as A}from"./entry.c8558833.js";import{Y as p,Z as _,f as l,$ as s,E as m,a0 as e,F as k,a3 as x,a2 as h,V as a}from"./vue.091937b4.js";import"./ant.edd72bf4.js";import"./moment.8b5e7d95.js";import"./cryptoJs.ce41d5ee.js";import"./numeral.cf209493.js";import"./common.33f268d0.js";const J={mixins:[I],data(){return{gisAttribute:null,formField:null,columns:[{title:"ArcGIS \u0430\u0442\u0440\u0438\u0431\u0443\u0442",dataIndex:"attribute",key:"attribute"},{title:"\u041C\u0430\u044F\u0433\u0442\u044B\u043D \u0442\u0430\u043B\u0431\u0430\u0440",dataIndex:"field",key:"field"},{title:"operation",dataIndex:"operation"}],connections:[],objectIdField:null,geoJsonField:null,layerType:null}},methods:{remove(n){this.connections.splice(n,1),this.saveData()},addConnection(){this.gisAttribute&&this.formField&&(this.connections.push({attribute:this.gisAttribute,field:this.formField}),this.gisAttribute=null,this.formField=null,this.saveData())},saveData(){this.model.form[this.model.component]=JSON.stringify({connections:this.connections,objectIdField:this.objectIdField,geoJsonField:this.geoJsonField,layerType:this.layerType})}},created(){},mounted(){this.model.form[this.model.component]},computed:{gisAttributes(){return this.meta.gis_options?this.meta.gis_options:[]},connectionValue(){return this.model.form[this.model.component]}},watch:{connectionValue(n,t){if((t&&!n||n&&!t)&&n){let d=JSON.parse(this.model.form[this.model.component]);this.connections=d.connections,this.objectIdField=d.objectIdField,this.geoJsonField=d.geoJsonField,this.layerType=d.layerType}}}},T=e("div",null,[e("label",null,"\u0413\u0430\u0437\u0430\u0440 \u0437\u04AF\u0439\u043D \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0438\u0439\u043D \u0442\u04E9\u0440\u04E9\u043B:")],-1),j=e("hr",null,null,-1),D=e("br",null,null,-1),S=e("label",null,"OBJECTID \u0445\u0430\u0434\u0433\u0430\u043B\u043B\u0430\u0445 \u0442\u0430\u043B\u0431\u0430\u0440 (\u041C\u0430\u044F\u0433\u0442\u044B\u043D)",-1),w=e("label",null,"\u0413\u0430\u0437\u0430\u0440\u0437\u04AF\u0439\u043D \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0442\u0430\u043B\u0431\u0430\u0440 (\u041C\u0430\u044F\u0433\u0442\u044B\u043D)",-1),N=e("br",null,null,-1),P=e("hr",null,null,-1),V=e("br",null,null,-1),B=e("label",null,"ArcGIS \u0430\u0442\u0440\u0438\u0431\u0443\u0442",-1),U=e("label",null,"\u041C\u0430\u044F\u0433\u0442\u044B\u043D \u0442\u0430\u043B\u0431\u0430\u0440",-1),E=e("br",null,null,-1),G=e("a",null,"\u0423\u0442\u0433\u0430\u0445",-1);function O(n,t,d,L,o,r){const b=a("lambda-form-item"),c=a("a-radio"),f=a("a-radio-group"),u=a("a-select"),v=a("a-button"),y=a("a-popconfirm"),g=a("a-table");return p(),_("div",null,[l(b,{label:n.label,name:n.model.component,meta:n.meta},{default:s(()=>[T]),_:1},8,["label","name","meta"]),l(f,{value:o.layerType,"onUpdate:value":t[0]||(t[0]=i=>o.layerType=i),onChange:r.saveData},{default:s(()=>[l(c,{value:"Point"},{default:s(()=>[m("Point")]),_:1}),l(c,{value:"Polygon"},{default:s(()=>[m("Polygon")]),_:1}),l(c,{value:"Polyline"},{default:s(()=>[m("Polyline")]),_:1})]),_:1},8,["value","onChange"]),j,D,e("div",null,[S,l(u,{value:o.objectIdField,"onUpdate:value":t[1]||(t[1]=i=>o.objectIdField=i),style:{width:"200px"},onChange:r.saveData,options:n.meta.options},null,8,["value","onChange","options"])]),e("div",null,[w,l(u,{value:o.geoJsonField,"onUpdate:value":t[2]||(t[2]=i=>o.geoJsonField=i),style:{width:"200px"},onChange:r.saveData,options:n.meta.options},null,8,["value","onChange","options"])]),N,P,e("div",null,[V,e("table",null,[e("tr",null,[e("td",null,[B,l(u,{value:o.gisAttribute,"onUpdate:value":t[3]||(t[3]=i=>o.gisAttribute=i),style:{width:"100%"},options:r.gisAttributes},null,8,["value","options"])]),e("td",null,[U,l(u,{value:o.formField,"onUpdate:value":t[4]||(t[4]=i=>o.formField=i),style:{width:"100%"},options:n.meta.options},null,8,["value","options"])]),e("td",null,[E,l(v,{type:"primary",onClick:r.addConnection},{default:s(()=>[m("\u041D\u044D\u043C\u044D\u0445")]),_:1},8,["onClick"])])])]),l(g,{border:"",columns:o.columns,dataSource:o.connections},{bodyCell:s(({text:i,record:Y,index:F,column:C})=>[C.dataIndex==="operation"?(p(),_(k,{key:0},[o.connections.length?(p(),x(y,{key:0,title:"\u0423\u0442\u0433\u0430\u0445 \u0443\u0443?","ok-text":"\u0422\u0438\u0439\u043C","cancel-text":"\u04AE\u0433\u04AF\u0439",onConfirm:Z=>r.remove(F)},{default:s(()=>[G]),_:2},1032,["onConfirm"])):h("",!0)],64)):h("",!0)]),_:1},8,["columns","dataSource"])])])}const X=A(J,[["render",O]]);export{X as default};
