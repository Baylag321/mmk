"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2761],{34577:(t,e,r)=>{r.r(e),r.d(e,{default:()=>o});const a={components:{},data:function(){return{editMode:!1,src:""}},created:function(){var t=this.$route.params.id;this.$project?void 0!==t&&""!==t&&null!==t?(this.editMode=!0,this.src="/lambda/puzzle/project/".concat(this.$project.id,"/chart/").concat(this.$route.params.id)):this.src="/lambda/puzzle/project/".concat(this.$project.id,"/chart"):void 0!==t&&""!==t&&null!==t&&(this.editMode=!0,this.src="/lambda/puzzle/schema/chart/".concat(this.$route.params.id))},methods:{onCreate:function(){this.$router.push("/chart")},onUpdate:function(){this.$router.push("/chart")}}};const o=(0,r(51900).Z)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"page page-chart"},[t.$project?r("chart-builder",{attrs:{editMode:t.editMode,projectID:t.$project.id,src:t.src,onCreate:t.onCreate,onUpdate:t.onUpdate,projectDomain:t.projectDomain}}):r("chart-builder",{attrs:{editMode:t.editMode,src:t.src,onCreate:t.onCreate,onUpdate:t.onUpdate}})],1)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=chart-builder.650a6e79df1d0fc9.js.map