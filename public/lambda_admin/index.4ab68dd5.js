import{H as c,T as _}from"./components.af965e38.js";import{a as f,i as g,s as o,K as y,P as w,M as b,e as x,L as C,b as k}from"./entry.74a9c9b3.js";import{Y as n,Z as p,f as d,_ as l,a3 as I,a2 as a,$ as S,S as M,E as T,a1 as N}from"./vue.13bb76e9.js";import"./composables.9c91c3dc.js";import"./ant.b38ea10b.js";import"./moment.8b5e7d95.js";import"./cryptoJs.69a6c71a.js";import"./numeral.166788f6.js";import"./common.41eb234c.js";const v={computed:{menuMode(){let i=localStorage.getItem("menuMode");if(i)return i},isMobile(){return g}},data(){const i=o.get(y),e=o.get(w),t=o.get(b),r=o.get(x),s=o.get(C);return{options:{height:"1000px"},pageType:"",property:{base_url:k,withCrudLog:s.withCrudLog,withoutHeader:!1,page_id:null,template:"drawer",mode:"refresh",title:"",projects_id:null,grid:null,form:null,form_width:800,view_url:null,actions:null,user_condition:null,parent:[],permissions:{c:!1,r:!1,u:!1,d:!1}},iframeUrl:"",iframeTitle:"",submenu:[],showSub:!1,cruds:i,menu:t,menu_list:r,permissions:e.permissions,pageTitle:"",subMenuId:"0",showNestedMenu:!1}},methods:{getShowAbleChild(i){let e=i.findIndex(t=>this.can(t));return e>=0?i[e]:null},can(i){return this.permissions[i.id]?!!this.permissions[i.id].show:!1},getTitle(i){if(i.link_to=="crud"){let e=this.cruds.findIndex(t=>t.id==i.url);return e>=0?this.cruds[e].title:""}else return i.title},getPage(){if(this.menu_list){let i=this.menu_list.findIndex(e=>e.id===this.$route.params.menu_id);if(i>=0){let e=this.menu_list[i];switch(this.pageType=e.link_to,this.pageType){case"crud":let t=this.cruds.findIndex(r=>r.id==e.url);if(t>=0){this.$route.meta.title=this.cruds[t].title,this.property.parent=e.parent,this.property.title=this.cruds[t].title,this.property.projects_id=this.cruds[t].projects_id,this.property.grid=this.cruds[t].grid,this.property.form=this.cruds[t].form,this.property.edit_id=this.cruds[t].edit_id,this.property.template=this.cruds[t].template,this.cruds[t].actions&&(this.property.actions=this.cruds[t].actions),this.property.main_tab_title=this.cruds[t].main_tab_title,this.property.form_width=this.cruds[t].form_width?this.cruds[t].form_width:null,this.property.view_url=this.cruds[t].view_url,this.property.permissions.c=this.permissions[e.id].c,this.property.permissions.r=this.permissions[e.id].r,this.property.permissions.u=this.permissions[e.id].u,this.property.permissions.d=this.permissions[e.id].d,this.property.permissions.gridDeleteConditionJS=this.permissions[e.id].gridDeleteConditionJS,this.property.permissions.gridEditConditionJS=this.permissions[e.id].gridEditConditionJS;let r={};this.permissions[e.id].formCondition&&(r.formCondition=this.permissions[e.id].formCondition),this.permissions[e.id].gridCondition&&(r.gridCondition=this.permissions[e.id].gridCondition),r&&(this.property.user_condition=r),this.property.page_id=e.id}break;case"link":window.location=this.menu[parentIndex].url;break;case"router-link":console.log(this.menu[parentIndex].url),this.$router.push(this.menu[parentIndex].url);break;case"iframe":this.iframeUrl=e.url,this.property.title=e.title;break}}}}},beforeMount(){this.getPage()}},E={class:"rounded-md grid grow grid-nogutter"},L={key:1,class:"iframe-page"},U=["src"];function B(i,e,t,r,s,D){const u=_,m=c,h=M("krud");return n(),p("div",E,[d(m,null,{default:l(()=>[d(u,null,{default:l(()=>[T(N(s.property.title),1)]),_:1})]),_:1}),s.pageType==="crud"&&s.property.page_id!=null?(n(),I(h,{key:0,template:s.property.template,property:s.property,class:"material",base_url:s.property.base_url},null,8,["template","property","base_url"])):a("",!0),s.pageType==="iframe"?(n(),p("div",L,[S("iframe",{src:s.iframeUrl},null,8,U)])):a("",!0)])}const F=f(v,[["render",B]]);export{F as default};
