import{H as E,T as L}from"./components.6b196aa5.js";import{s as a,K as T,P as K,f as x,h as P,j as R,l as U,g as w,a as N,i as j,M as z,L as A,b as D,k as H}from"./entry.6fd2a578.js";import{R as $}from"./RenderSubMenu.3f64804f.js";import{d as J,a as C,n as V,j as q,o as F,w as k,Z as d,a1 as f,a0 as h,_ as S,a6 as G,F as W,W as m,c as b,a2 as M,$ as I,a8 as Z,H as Q,a3 as X}from"./vue.65c51cdf.js";import"./composables.51d5719c.js";import"./common.72b693eb.js";import"./ant.770c87db.js";import"./moment.8b5e7d95.js";import"./ag.23ecb9ea.js";import"./lodash.d251a0a5.js";import"./numeral.1f6cf9d6.js";import"./cryptoJs.f0105b17.js";const Y=J({name:"Menu",props:{menu:{type:Array,required:!1,default:[]},mode:{type:String,required:!1,default:"horizontal"},collapsed:{type:Boolean,required:!1,default:!1}},components:{RenderSubMenu:$},setup(e,{emit:r}){const t=a.get(T),i=a.get(K),s=a.get(x),c=P(),o=C({value:[]}),l=V([]),u=C({value:[]}),_=q(()=>{const n=[];return e.menu.forEach(p=>n.push(w(p))),n}),g=n=>w(n);F(()=>{v()}),k(()=>e.collapsed,n=>{n?u.value=o.value.concat():o.value=u.value}),k(()=>c.fullPath,n=>{v()});const O=n=>{if(e.mode==="horizontal"){o.value=n;return}const p=n.find(y=>!o.value.includes(y));_.value.includes(p)?o.value=p?[p]:[]:o.value=n},B=({item:n,key:p,selectedKeys:y})=>{l.value=y,r("select",{item:n,key:p,selectedKeys:l})},v=()=>{if(s){l.value=[c.path];let n=[];e.mode!=="horizontal"&&(n=R(s,c.path)),e.collapsed?u.value=n:o.value=n}};return{openKeys:o,selectedKeys:l,onOpenChange:O,onSelect:B,permissions:i,kruds:t,getPath:g,layoutMode:U}}});function ee(e,r,t,i,s,c){const o=m("RenderSubMenu"),l=m("a-menu");return d(),f(l,{mode:e.mode,openKeys:e.openKeys.value,selectedKeys:e.selectedKeys,onOpenChange:e.onOpenChange,onSelect:e.onSelect,inlineIndent:21,class:"sub-top-menu rounded-md"},{default:h(()=>[(d(!0),S(W,null,G(e.menu.filter(u=>e.permissions.permissions[u.id].show===!0),u=>(d(),f(o,{key:e.getPath(u),item:u,cruds:e.kruds,permissions:e.permissions.permissions,mode:e.mode,collapsed:e.collapsed},null,8,["item","cruds","permissions","mode","collapsed"]))),128))]),_:1},8,["mode","openKeys","selectedKeys","onOpenChange","onSelect"])}const te=N(Y,[["render",ee]]),se={components:{SubTopMenu:te},computed:{menuMode(){let e=localStorage.getItem("menuMode");if(e)return e},isMobile(){return j},path(){return this.$route.fullPath}},data(){const e=a.get(T),r=a.get(K),t=a.get(z),i=a.get(x),s=a.get(A);return{options:{height:"1000px"},pageType:"",property:{base_url:D,withCrudLog:s.withCrudLog,withoutHeader:!1,page_id:null,template:"drawer",mode:"refresh",title:"",projects_id:null,grid:null,form:null,form_width:800,view_url:null,actions:null,user_condition:null,parent:[],permissions:{c:!1,r:!1,u:!1,d:!1}},iframeUrl:"",iframeTitle:"",submenu:[],showSub:!1,cruds:e,menu:t,menu_list:i,permissions:r.permissions,pageTitle:"",subMenuId:"0",showNestedMenu:!1,subTopMenus:[]}},methods:{getShowAbleChild(e){let r=e.findIndex(t=>this.can(t));return r>=0?e[r]:null},can(e){return this.permissions[e.id]?!!this.permissions[e.id].show:!1},getTitle(e){if(e.link_to=="crud"){let r=this.cruds.findIndex(t=>t.id==e.url);return r>=0?this.cruds[r].title:""}else return e.title},getPage(){var e;if(this.menu_list){let r=this.menu_list.findIndex(t=>t.id===this.$route.params.menu_id);if(r>=0){const t=this.menu_list[r];switch(this.pageType=t.link_to,this.pageType){case"crud":let i=this.cruds.findIndex(s=>s.id==t.url);if(i>=0){this.$route.meta.title=this.cruds[i].title,this.property.parent=t.parent,this.property.title=this.cruds[i].title,this.property.projects_id=this.cruds[i].projects_id,this.property.grid=this.cruds[i].grid,this.property.form=this.cruds[i].form,this.property.edit_id=this.cruds[i].edit_id,this.property.template=this.cruds[i].template,this.cruds[i].actions&&(this.property.actions=this.cruds[i].actions),this.property.main_tab_title=this.cruds[i].main_tab_title,this.property.form_width=this.cruds[i].form_width?this.cruds[i].form_width:null,this.property.view_url=this.cruds[i].view_url,this.property.permissions.c=this.permissions[t.id].c,this.property.permissions.r=this.permissions[t.id].r,this.property.permissions.u=this.permissions[t.id].u,this.property.permissions.d=this.permissions[t.id].d,this.property.permissions.gridDeleteConditionJS=this.permissions[t.id].gridDeleteConditionJS,this.property.permissions.gridEditConditionJS=this.permissions[t.id].gridEditConditionJS;let s={};this.permissions[t.id].formCondition&&(s.formCondition=this.permissions[t.id].formCondition),this.permissions[t.id].gridCondition&&(s.gridCondition=this.permissions[t.id].gridCondition),s&&(this.property.user_condition=s),this.property.page_id=t.id}break;case"link":window.location=this.menu[parentIndex].url;break;case"router-link":console.log(this.menu[parentIndex].url),this.$router.push(this.menu[parentIndex].url);break;case"iframe":this.iframeUrl=t.url,this.property.title=t.title;break}if(((e=t.parent)==null?void 0:e.length)>=1){const i=t.parent.findIndex(s=>s.link_to==="noActionSubTop");if(i>=0){const{children:s}=H(this.menu,t.parent[i].id);s!=null&&s.length&&(this.subTopMenus=s)}}}}}},beforeMount(){this.getPage()}},ie={class:"rounded-md grid grow grid-nogutter"},ne={key:1,class:"iframe-page"},re=["src"];function oe(e,r,t,i,s,c){const o=L,l=E,u=m("SubTopMenu"),_=m("portal"),g=m("krud");return d(),S("div",ie,[b(l,null,{default:h(()=>[b(o,null,{default:h(()=>[Q(X(s.property.title),1)]),_:1})]),_:1}),s.subTopMenus.length?(d(),f(_,{key:0,to:"sub-top-menu"},{default:h(()=>[b(u,{menu:s.subTopMenus,collapsed:!1,mode:"horizontal"},null,8,["menu"])]),_:1})):M("",!0),I("div",{class:Z(`${s.subTopMenus.length?"with-top-menu":""}`)},[s.pageType==="crud"&&s.property.page_id!=null?(d(),f(g,{key:0,template:s.property.template,property:s.property,base_url:s.property.base_url},null,8,["template","property","base_url"])):M("",!0)],2),s.pageType==="iframe"?(d(),S("div",ne,[I("iframe",{src:s.iframeUrl},null,8,re)])):M("",!0)])}const be=N(se,[["render",oe]]);export{be as default};
