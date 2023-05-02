import{a as f,$ as m,a0 as x,o as l,e as d,h as t,f as b,p as g,F as n,q as c,r as u,t as e,i}from"./entry.8ecb60d7.js";import{I as v,e as y}from"./queries.513f850b.js";import{_ as k,a as w}from"./spin-90.df6da084.js";import{A as j,a as L}from"./AppleOutlined.79c31608.js";const A={name:"lunch",components:{AppleOutlined:j,AndroidOutlined:L},setup(){},data(){return{dayjs:m,activeKey:"1",IMAGE_URL:v,selectedToday:m(Date.now()),lunch:{},loader:!0}},mounted(){this.getLunch()},methods:{getLunch(){this.loader=!0,this.lunch={},console.log(x(this.selectedToday.$d)),this.$apollo.query({query:y,fetchPolicy:"no-cache",variables:{udriin:"Өдрийн хоол",selectDate:x(this.selectedToday.$d)}}).then(({data:r})=>{this.lunch=r.gal_togoo_neg_set_menu[0],this.loader=!1})},searchDate(r){this.selectedToday.$d=r.$d,console.log(this.selectedToday.$d),console.log(x(this.selectedToday.$d)),this.getLunch()}}},T={class:"flex items-end justify-end px-0 lg:px-4"},E=t("img",{class:"w-8 h-8 mr-4",src:k},null,-1),U={key:0,class:"py-3 w-full text-center"},q=t("img",{class:"mx-auto",src:w,alt:""},null,-1),G=[q],I={class:"grid grid-cols-1 gap-10 px-0 lg:px-4 mt-4"},M={class:"shadow border dark:border-slate-600 rounded-lg"},R=t("div",{class:"text-sm text-slate-800 dark:text-slate-200 uppercase font-bold border-b dark:border-slate-600 p-4 mb-6"},"Нэгдүгээр хоол",-1),D={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-4 pb-6"},N={class:"relative w-full h-32 md:h-24 lg:h-28 2xl:h-28"},C=["src"],V=t("div",{class:"bg-slate-900 opacity-60 rounded-lg absolute left-0 top-0 right-0 bottom-0"},null,-1),B={class:"absolute bottom-0 left-0 right-0 top-0"},F={class:"flex items-center justify-center text-center text-white w-full h-full text-sm font-semibold uppercase"},O={class:"flex items-center justify-between py-2"},H=t("p",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold mb-0",style:{"margin-bottom":"0!important"}},"Калори:",-1),K={class:"text-xs font-semibold text-orange-500 mb-0",style:{"margin-bottom":"0!important"}},P=t("span",{class:"text-xs font-semibold text-orange-500 pl-1"},"ккал",-1),S={class:""},z={class:"text-xs text-slate-500 dark:text-slate-400 m-0 pb-1",style:{"margin-bottom":"0!important"}},J=t("span",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold pr-2 m-0"},"Орц:",-1),Q={class:"flex items-end justify-end w-full"},W=t("p",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold pr-2 m-0"},"Үлдэгдэл:",-1),X={class:"text-xs font-bold text-red-600 dark:text-red-500 m-0"},Y={class:"shadow border dark:border-slate-600 rounded-lg"},Z=t("div",{class:"text-sm text-slate-800 dark:text-slate-200 uppercase font-bold border-b dark:border-slate-600 p-4 mb-6"},"Хоёрдугаар хоол",-1),$={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-4 pb-6"},tt={class:"relative w-full h-32 md:h-24 lg:h-28 2xl:h-28"},st=["src"],et=t("div",{class:"bg-slate-900 opacity-60 rounded-lg absolute left-0 top-0 right-0 bottom-0"},null,-1),ot={class:"absolute bottom-0 left-0 right-0 top-0"},lt={class:"flex items-center justify-center text-center text-white w-full h-full text-sm font-semibold uppercase"},dt={class:"flex items-center justify-between py-2"},it=t("p",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold mb-0",style:{"margin-bottom":"0!important"}},"Калори:",-1),at={class:"text-xs font-semibold text-orange-500 mb-0",style:{"margin-bottom":"0!important"}},nt=t("span",{class:"text-xs font-semibold text-orange-500 pl-1"},"ккал",-1),ct={class:""},rt={class:"text-xs text-slate-500 dark:text-slate-400 m-0 pb-1",style:{"margin-bottom":"0!important"}},_t=t("span",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold pr-2 m-0"},"Орц:",-1),xt={class:"flex items-end justify-end w-full"},mt=t("p",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold pr-2 m-0"},"Үлдэгдэл:",-1),ht={class:"text-xs font-bold text-red-600 dark:text-red-500 m-0"},pt={class:"shadow border dark:border-slate-600 rounded-lg"},ft=t("div",{class:"text-sm text-slate-800 dark:text-slate-200 uppercase font-bold border-b dark:border-slate-600 p-4 mb-6"},"Салат",-1),bt={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-4 pb-6"},gt={class:"relative w-full h-32 md:h-24 lg:h-28 2xl:h-28"},ut=["src"],vt=t("div",{class:"bg-slate-900 opacity-60 rounded-lg absolute left-0 top-0 right-0 bottom-0"},null,-1),yt={class:"absolute bottom-0 left-0 right-0 top-0"},kt={class:"flex items-center justify-center text-center text-white w-full h-full text-sm font-semibold uppercase"},wt={class:"flex items-center justify-between py-2"},jt=t("p",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold mb-0",style:{"margin-bottom":"0!important"}},"Калори:",-1),Lt={class:"text-xs font-semibold text-orange-500 mb-0",style:{"margin-bottom":"0!important"}},At=t("span",{class:"text-xs font-semibold text-orange-500 pl-1"},"ккал",-1),Tt={class:""},Et={class:"text-xs text-slate-500 dark:text-slate-400 m-0 pb-1",style:{"margin-bottom":"0!important"}},Ut=t("span",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold pr-2 m-0"},"Орц:",-1),qt={class:"flex items-end justify-end w-full"},Gt=t("p",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold pr-2 m-0"},"Үлдэгдэл:",-1),It={class:"text-xs font-bold text-red-600 dark:text-red-500 m-0"},Mt={class:"shadow border dark:border-slate-600 rounded-lg"},Rt=t("div",{class:"text-sm text-slate-800 dark:text-slate-200 uppercase font-bold border-b dark:border-slate-600 p-4 mb-6"},"Уух зүйлс",-1),Dt={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-4 pb-6"},Nt={class:"relative w-full h-32 md:h-24 lg:h-28 2xl:h-28"},Ct=["src"],Vt=t("div",{class:"bg-slate-900 opacity-60 rounded-lg absolute left-0 top-0 right-0 bottom-0"},null,-1),Bt={class:"absolute bottom-0 left-0 right-0 top-0"},Ft={class:"flex items-center justify-center text-center text-white w-full h-full text-sm font-semibold uppercase"},Ot={class:"flex items-center justify-between py-2"},Ht=t("p",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold mb-0",style:{"margin-bottom":"0!important"}},"Калори:",-1),Kt={class:"text-xs font-semibold text-orange-500 mb-0",style:{"margin-bottom":"0!important"}},Pt=t("span",{class:"text-xs font-semibold text-orange-500 pl-1"},"ккал",-1),St={class:""},zt={class:"text-xs text-slate-500 dark:text-slate-400 m-0 pb-1",style:{"margin-bottom":"0!important"}},Jt=t("span",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold pr-2 m-0"},"Орц:",-1),Qt={class:"flex items-end justify-end w-full"},Wt=t("p",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold pr-2 m-0"},"Үлдэгдэл:",-1),Xt={class:"text-xs font-bold text-red-600 dark:text-red-500 m-0"},Yt={class:"shadow border dark:border-slate-600 rounded-lg"},Zt=t("div",{class:"text-sm text-slate-800 dark:text-slate-200 uppercase font-bold border-b dark:border-slate-600 p-4 mb-6"},"ДЕСЕРТ",-1),$t={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-4 pb-6"},ts={class:"relative w-full h-32 md:h-24 lg:h-28 2xl:h-28"},ss=["src"],es=t("div",{class:"bg-slate-900 opacity-60 rounded-lg absolute left-0 top-0 right-0 bottom-0"},null,-1),os={class:"absolute bottom-0 left-0 right-0 top-0"},ls={class:"flex items-center justify-center text-center text-white w-full h-full text-sm font-semibold uppercase"},ds={class:"flex items-center justify-between py-2"},is=t("p",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold mb-0",style:{"margin-bottom":"0!important"}},"Калори:",-1),as={class:"text-xs font-semibold text-orange-500 mb-0",style:{"margin-bottom":"0!important"}},ns=t("span",{class:"text-xs font-semibold text-orange-500 pl-1"},"ккал",-1),cs={class:""},rs={class:"text-xs text-slate-500 dark:text-slate-400 m-0 pb-1",style:{"margin-bottom":"0!important"}},_s=t("span",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold pr-2 m-0"},"Орц:",-1),xs={class:"flex items-end justify-end w-full"},ms=t("p",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold pr-2 m-0"},"Үлдэгдэл:",-1),hs={class:"text-xs font-bold text-red-600 dark:text-red-500 m-0"};function ps(r,_,fs,bs,o,h){const p=u("a-date-picker");return l(),d(n,null,[t("div",T,[E,b(p,{value:o.selectedToday,"onUpdate:value":_[0]||(_[0]=s=>o.selectedToday=s),onChange:_[1]||(_[1]=s=>h.searchDate(s))},null,8,["value"])]),o.loader?(l(),d("div",U,G)):g("",!0),t("div",I,[t("div",M,[R,t("div",D,[(l(!0),d(n,null,c(o.lunch.gal_togoo_neg_neg,(s,a)=>(l(),d("div",{class:"col-span-1",key:a},[t("div",N,[t("img",{class:"w-full h-full rounded-lg mb-4 object-cover",src:o.IMAGE_URL+s.food_iamge},null,8,C),V,t("div",B,[t("div",F,e(s.food_name),1)])]),t("div",O,[H,t("p",K,[i(e(s.food_calorie)+" ",1),P])]),t("div",S,[t("p",z,[J,i(e(s.food_ingredients),1)])]),t("div",Q,[W,t("p",X,e(s.food_quantity),1)])]))),128))])]),t("div",Y,[Z,t("div",$,[(l(!0),d(n,null,c(o.lunch.gal_togoo_neg_hoer,(s,a)=>(l(),d("div",{class:"col-span-1",key:a},[t("div",tt,[t("img",{class:"w-full h-full rounded-lg mb-4 object-cover",src:o.IMAGE_URL+s.food_iamge},null,8,st),et,t("div",ot,[t("div",lt,e(s.food_name),1)])]),t("div",dt,[it,t("p",at,[i(e(s.food_calorie)+" ",1),nt])]),t("div",ct,[t("p",rt,[_t,i(e(s.food_ingredients),1)])]),t("div",xt,[mt,t("p",ht,e(s.food_quantity),1)])]))),128))])]),t("div",pt,[ft,t("div",bt,[(l(!0),d(n,null,c(o.lunch.gal_togoo_neg_salat,(s,a)=>(l(),d("div",{class:"col-span-1",key:a},[t("div",gt,[t("img",{class:"w-full h-full rounded-lg mb-4 object-cover",src:o.IMAGE_URL+s.food_iamge},null,8,ut),vt,t("div",yt,[t("div",kt,e(s.food_name),1)])]),t("div",wt,[jt,t("p",Lt,[i(e(s.food_calorie)+" ",1),At])]),t("div",Tt,[t("p",Et,[Ut,i(e(s.food_ingredients),1)])]),t("div",qt,[Gt,t("p",It,e(s.food_quantity),1)])]))),128))])]),t("div",Mt,[Rt,t("div",Dt,[(l(!0),d(n,null,c(o.lunch.gal_togoo_neg_uuhim,(s,a)=>(l(),d("div",{class:"col-span-1",key:a},[t("div",Nt,[t("img",{class:"w-full h-full rounded-lg mb-4 object-cover",src:o.IMAGE_URL+s.food_iamge},null,8,Ct),Vt,t("div",Bt,[t("div",Ft,e(s.food_name),1)])]),t("div",Ot,[Ht,t("p",Kt,[i(e(s.food_calorie),1),Pt])]),t("div",St,[t("p",zt,[Jt,i(e(s.food_ingredients),1)])]),t("div",Qt,[Wt,t("p",Xt,e(s.food_quantity),1)])]))),128))])]),t("div",Yt,[Zt,t("div",$t,[(l(!0),d(n,null,c(o.lunch.gal_togoo_neg_desert,(s,a)=>(l(),d("div",{class:"col-span-1",key:a},[t("div",ts,[t("img",{class:"w-full h-full rounded-lg mb-4 object-cover",src:o.IMAGE_URL+s.food_iamge},null,8,ss),es,t("div",os,[t("div",ls,e(s.food_name),1)])]),t("div",ds,[is,t("p",as,[i(e(s.food_calorie),1),ns])]),t("div",cs,[t("p",rs,[_s,i(e(s.food_ingredients),1)])]),t("div",xs,[ms,t("p",hs,e(s.food_quantity),1)])]))),128))])])])],64)}const ks=f(A,[["render",ps]]);export{ks as default};