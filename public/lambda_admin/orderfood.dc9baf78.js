import{a as h,$ as m,a0 as x,o as l,e as d,h as t,f as b,p as g,F as n,q as r,r as u,t as s,i as a}from"./entry.8ecb60d7.js";import{I as v,g as y}from"./queries.513f850b.js";import{_ as k,a as w}from"./spin-90.df6da084.js";import{A as j,a as A}from"./AppleOutlined.79c31608.js";const E={name:"orderfood",components:{AppleOutlined:j,AndroidOutlined:A},setup(){},data(){return{dayjs:m,activeKey:"1",IMAGE_URL:v,orderfood:{},selectedToday:m(Date.now()),loader:!0}},mounted(){this.getOrderFood()},methods:{getOrderFood(){this.loader=!0,this.orderfood={},console.log(x(this.selectedToday.$d)),this.$apollo.query({query:y,fetchPolicy:"no-cache",variables:{zaxialgat:"Захиалгат хоол",selectDate:x(this.selectedToday.$d)}}).then(({data:c})=>{this.orderfood=c.gal_togoo_neg_set_menu[0],this.loader=!1})},searchDate(c){this.selectedToday.$d=c.$d,console.log(this.selectedToday.$d),console.log(x(this.selectedToday.$d)),this.getOrderFood()}}},T={class:"flex items-end justify-end px-0 lg:px-4"},O=t("img",{class:"w-8 h-8 mr-4",src:k},null,-1),R={key:0,class:"py-3 w-full text-center"},q=t("img",{class:"mx-auto",src:w,alt:""},null,-1),D=[q],G={class:"grid grid-cols-1 gap-10 px-0 lg:px-4 mt-4"},I={class:"shadow border dark:border-slate-600 rounded-lg"},L=t("div",{class:"text-sm text-slate-800 dark:text-slate-200 uppercase font-bold border-b dark:border-slate-600 p-4 mb-6"},"Нэгдүгээр хоол",-1),U={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-4 pb-6"},M={class:"relative w-full h-32 md:h-24 lg:h-28 2xl:h-28"},F=["src"],N=t("div",{class:"bg-slate-900 opacity-60 rounded-lg absolute left-0 top-0 right-0 bottom-0"},null,-1),V={class:"absolute bottom-0 left-0 right-0 top-0"},B={class:"flex items-center justify-center text-center text-white w-full h-full text-sm font-semibold uppercase"},C={class:"flex items-start justify-between w-full pt-2"},z=t("p",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold pr-2 m-0"},"Үнэ:",-1),K={class:"text-xs font-bold text-green-600 dark:text-green-500 m-0"},P={class:"flex items-center justify-between py-1"},S=t("p",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold mb-0",style:{"margin-bottom":"0!important"}},"Калори:",-1),H={class:"text-xs font-semibold text-orange-500 mb-0",style:{"margin-bottom":"0!important"}},J=t("span",{class:"text-xs font-semibold text-orange-500 pl-1"},"ккал",-1),Q={class:""},W={class:"text-xs text-slate-500 dark:text-slate-400 m-0 pb-1",style:{"margin-bottom":"0!important"}},X=t("span",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold pr-2 m-0"},"Орц:",-1),Y={class:"flex items-end justify-end w-full"},Z=t("p",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold pr-2 m-0"},"Үлдэгдэл:",-1),$={class:"text-xs font-bold text-red-600 dark:text-red-500 m-0"},tt={class:"shadow border dark:border-slate-600 rounded-lg"},et=t("div",{class:"text-sm text-slate-800 dark:text-slate-200 uppercase font-bold border-b dark:border-slate-600 p-4 mb-6"},"Хоёрдугаар хоол",-1),st={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-4 pb-6"},ot={class:"relative w-full h-32 md:h-24 lg:h-28 2xl:h-28"},lt=["src"],dt=t("div",{class:"bg-slate-900 opacity-60 rounded-lg absolute left-0 top-0 right-0 bottom-0"},null,-1),at={class:"absolute bottom-0 left-0 right-0 top-0"},it={class:"flex items-center justify-center text-center text-white w-full h-full text-sm font-semibold uppercase"},nt={class:"flex items-start justify-between w-full pt-2"},rt=t("p",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold pr-2 m-0"},"Үнэ:",-1),ct={class:"text-xs font-bold text-green-600 dark:text-green-500 m-0"},_t={class:"flex items-center justify-between py-1"},xt=t("p",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold mb-0",style:{"margin-bottom":"0!important"}},"Калори:",-1),mt={class:"text-xs font-semibold text-orange-500 mb-0",style:{"margin-bottom":"0!important"}},pt=t("span",{class:"text-xs font-semibold text-orange-500 pl-1"},"ккал",-1),ft={class:""},ht={class:"text-xs text-slate-500 dark:text-slate-400 m-0 pb-1",style:{"margin-bottom":"0!important"}},bt=t("span",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold pr-2 m-0"},"Орц:",-1),gt={class:"flex items-end justify-end w-full"},ut=t("p",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold pr-2 m-0"},"Үлдэгдэл:",-1),vt={class:"text-xs font-bold text-red-600 dark:text-red-500 m-0"},yt={class:"shadow border dark:border-slate-600 rounded-lg"},kt=t("div",{class:"text-sm text-slate-800 dark:text-slate-200 uppercase font-bold border-b dark:border-slate-600 p-4 mb-6"},"Салат",-1),wt={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-4 pb-6"},jt={class:"relative w-full h-32 md:h-24 lg:h-28 2xl:h-28"},At=["src"],Et=t("div",{class:"bg-slate-900 opacity-60 rounded-lg absolute left-0 top-0 right-0 bottom-0"},null,-1),Tt={class:"absolute bottom-0 left-0 right-0 top-0"},Ot={class:"flex items-center justify-center text-center text-white w-full h-full text-sm font-semibold uppercase"},Rt={class:"flex items-start justify-between w-full pt-2"},qt=t("p",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold pr-2 m-0"},"Үнэ:",-1),Dt={class:"text-xs font-bold text-green-600 dark:text-green-500 m-0"},Gt={class:"flex items-center justify-between py-1"},It=t("p",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold mb-0",style:{"margin-bottom":"0!important"}},"Калори:",-1),Lt={class:"text-xs font-semibold text-orange-500 mb-0",style:{"margin-bottom":"0!important"}},Ut=t("span",{class:"text-xs font-semibold text-orange-500 pl-1"},"ккал",-1),Mt={class:""},Ft={class:"text-xs text-slate-500 dark:text-slate-400 m-0 pb-1",style:{"margin-bottom":"0!important"}},Nt=t("span",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold pr-2 m-0"},"Орц:",-1),Vt={class:"flex items-end justify-end w-full"},Bt=t("p",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold pr-2 m-0"},"Үлдэгдэл:",-1),Ct={class:"text-xs font-bold text-red-600 dark:text-red-500 m-0"},zt={class:"shadow border dark:border-slate-600 rounded-lg"},Kt=t("div",{class:"text-sm text-slate-800 dark:text-slate-200 uppercase font-bold border-b dark:border-slate-600 p-4 mb-6"},"Уух зүйлс",-1),Pt={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-4 pb-6"},St={class:"relative w-full h-32 md:h-24 lg:h-28 2xl:h-28"},Ht=["src"],Jt=t("div",{class:"bg-slate-900 opacity-60 rounded-lg absolute left-0 top-0 right-0 bottom-0"},null,-1),Qt={class:"absolute bottom-0 left-0 right-0 top-0"},Wt={class:"flex items-center justify-center text-center text-white w-full h-full text-sm font-semibold uppercase"},Xt={class:"flex items-start justify-between w-full pt-2"},Yt=t("p",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold pr-2 m-0"},"Үнэ:",-1),Zt={class:"text-xs font-bold text-green-600 dark:text-green-500 m-0"},$t={class:"flex items-center justify-between py-1"},te=t("p",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold mb-0",style:{"margin-bottom":"0!important"}},"Калори:",-1),ee={class:"text-xs font-semibold text-orange-500 mb-0",style:{"margin-bottom":"0!important"}},se=t("span",{class:"text-xs font-semibold text-orange-500 pl-1"},"ккал",-1),oe={class:""},le={class:"text-xs text-slate-500 dark:text-slate-400 m-0 pb-1",style:{"margin-bottom":"0!important"}},de=t("span",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold pr-2 m-0"},"Орц:",-1),ae={class:"flex items-end justify-end w-full"},ie=t("p",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold pr-2 m-0"},"Үлдэгдэл:",-1),ne={class:"text-xs font-bold text-red-600 dark:text-red-500 m-0"},re={class:"shadow border dark:border-slate-600 rounded-lg"},ce=t("div",{class:"text-sm text-slate-800 dark:text-slate-200 uppercase font-bold border-b dark:border-slate-600 p-4 mb-6"},"ДЕСЕРТ",-1),_e={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-4 pb-6"},xe={class:"relative w-full h-32 md:h-24 lg:h-28 2xl:h-28"},me=["src"],pe=t("div",{class:"bg-slate-900 opacity-60 rounded-lg absolute left-0 top-0 right-0 bottom-0"},null,-1),fe={class:"absolute bottom-0 left-0 right-0 top-0"},he={class:"flex items-center justify-center text-center text-white w-full h-full text-sm font-semibold uppercase"},be={class:"flex items-start justify-between w-full pt-2"},ge=t("p",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold pr-2 m-0"},"Үнэ:",-1),ue={class:"text-xs font-bold text-green-600 dark:text-green-500 m-0"},ve={class:"flex items-center justify-between py-1"},ye=t("p",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold mb-0",style:{"margin-bottom":"0!important"}},"Калори:",-1),ke={class:"text-xs font-semibold text-orange-500 mb-0",style:{"margin-bottom":"0!important"}},we=t("span",{class:"text-xs font-semibold text-orange-500 pl-1"},"ккал",-1),je={class:""},Ae={class:"text-xs text-slate-500 dark:text-slate-400 m-0 pb-1",style:{"margin-bottom":"0!important"}},Ee=t("span",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold pr-2 m-0"},"Орц:",-1),Te={class:"flex items-end justify-end w-full"},Oe=t("p",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold pr-2 m-0"},"Үлдэгдэл:",-1),Re={class:"text-xs font-bold text-red-600 dark:text-red-500 m-0"};function qe(c,_,De,Ge,o,p){const f=u("a-date-picker");return l(),d(n,null,[t("div",T,[O,b(f,{value:o.selectedToday,"onUpdate:value":_[0]||(_[0]=e=>o.selectedToday=e),onChange:_[1]||(_[1]=e=>p.searchDate(e))},null,8,["value"])]),o.loader?(l(),d("div",R,D)):g("",!0),t("div",G,[t("div",I,[L,t("div",U,[(l(!0),d(n,null,r(o.orderfood.gal_togoo_neg_neg,(e,i)=>(l(),d("div",{class:"col-span-1",key:i},[t("div",M,[t("img",{class:"w-full h-full rounded-lg mb-4 object-cover",src:o.IMAGE_URL+e.food_iamge},null,8,F),N,t("div",V,[t("div",B,s(e.food_name),1)])]),t("div",C,[z,t("p",K,s(e.food_price)+" ₮",1)]),t("div",P,[S,t("p",H,[a(s(e.food_calorie)+" ",1),J])]),t("div",Q,[t("p",W,[X,a(s(e.food_ingredients),1)])]),t("div",Y,[Z,t("p",$,s(e.food_quantity),1)])]))),128))])]),t("div",tt,[et,t("div",st,[(l(!0),d(n,null,r(o.orderfood.gal_togoo_neg_hoer,(e,i)=>(l(),d("div",{class:"col-span-1",key:i},[t("div",ot,[t("img",{class:"w-full h-full rounded-lg mb-4 object-cover",src:o.IMAGE_URL+e.food_iamge},null,8,lt),dt,t("div",at,[t("div",it,s(e.food_name),1)])]),t("div",nt,[rt,t("p",ct,s(e.food_price)+" ₮",1)]),t("div",_t,[xt,t("p",mt,[a(s(e.food_calorie)+" ",1),pt])]),t("div",ft,[t("p",ht,[bt,a(s(e.food_ingredients),1)])]),t("div",gt,[ut,t("p",vt,s(e.food_quantity),1)])]))),128))])]),t("div",yt,[kt,t("div",wt,[(l(!0),d(n,null,r(o.orderfood.gal_togoo_neg_salat,(e,i)=>(l(),d("div",{class:"col-span-1",key:i},[t("div",jt,[t("img",{class:"w-full h-full rounded-lg mb-4 object-cover",src:o.IMAGE_URL+e.food_iamge},null,8,At),Et,t("div",Tt,[t("div",Ot,s(e.food_name),1)])]),t("div",Rt,[qt,t("p",Dt,s(e.food_price)+" ₮",1)]),t("div",Gt,[It,t("p",Lt,[a(s(e.food_calorie)+" ",1),Ut])]),t("div",Mt,[t("p",Ft,[Nt,a(s(e.food_ingredients),1)])]),t("div",Vt,[Bt,t("p",Ct,s(e.food_quantity),1)])]))),128))])]),t("div",zt,[Kt,t("div",Pt,[(l(!0),d(n,null,r(o.orderfood.gal_togoo_neg_uuhim,(e,i)=>(l(),d("div",{class:"col-span-1",key:i},[t("div",St,[t("img",{class:"w-full h-full rounded-lg mb-4 object-cover",src:o.IMAGE_URL+e.food_iamge},null,8,Ht),Jt,t("div",Qt,[t("div",Wt,s(e.food_name),1)])]),t("div",Xt,[Yt,t("p",Zt,s(e.food_price)+" ₮",1)]),t("div",$t,[te,t("p",ee,[a(s(e.food_calorie),1),se])]),t("div",oe,[t("p",le,[de,a(s(e.food_ingredients),1)])]),t("div",ae,[ie,t("p",ne,s(e.food_quantity),1)])]))),128))])]),t("div",re,[ce,t("div",_e,[(l(!0),d(n,null,r(o.orderfood.gal_togoo_neg_desert,(e,i)=>(l(),d("div",{class:"col-span-1",key:i},[t("div",xe,[t("img",{class:"w-full h-full rounded-lg mb-4 object-cover",src:o.IMAGE_URL+e.food_iamge},null,8,me),pe,t("div",fe,[t("div",he,s(e.food_name),1)])]),t("div",be,[ge,t("p",ue,s(e.food_price)+" ₮",1)]),t("div",ve,[ye,t("p",ke,[a(s(e.food_calorie),1),we])]),t("div",je,[t("p",Ae,[Ee,a(s(e.food_ingredients),1)])]),t("div",Te,[Oe,t("p",Re,s(e.food_quantity),1)])]))),128))])])])],64)}const Fe=h(E,[["render",qe]]);export{Fe as default};