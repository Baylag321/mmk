"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4501],{65406:(t,e,r)=>{r.r(e),r.d(e,{default:()=>a});const o={name:"crud",data:function(){return{}},computed:{lang:function(){var t=this,e=["form_and_table_consolidation"];return e.reduce((function(r,o,a){return r[o]=t.$t("project."+e[a]),r}),{})},property:function(){return this.$project?{template:"canvas",title:this.lang.form_and_table_consolidation,grid:"51",form:"50",custom_condition:"projects_id = ".concat(this.$project.id),exportSelectedRows:!0,exportLabel:"Lambda тохиргоо татах",exportPath:"/crud/export?ids=",gridSelector:!1,hasSelection:!0,actions:[]}:{template:"canvas",title:this.lang.form_and_table_consolidation,grid:"crud_grid",form:"crud_form",exportSelectedRows:!0,exportLabel:"Lambda тохиргоо татах",exportPath:"/crud/export?ids=",gridSelector:!1,hasSelection:!0,actions:[]}}}};const a=(0,r(51900).Z)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"page"},[e("krud",{staticClass:"material",attrs:{template:t.property.template,property:t.property}},[e("template",{slot:"nav"},[t._t("nav")],2),t._v(" "),e("user-control",{attrs:{slot:"right"},slot:"right"})],2)],1)}),[],!1,null,null,null).exports}}]);