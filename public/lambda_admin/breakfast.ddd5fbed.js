import{a as g,k as m}from"./entry.9dd1ea9a.js";import{A as f,a as b,I as u,G as v,_ as y,b as k}from"./spin-90.ce523fd0.js";import{e as x}from"./ant.ba1bd7fe.js";import"./moment.8b5e7d95.js";import{Y as l,Z as d,$ as t,f as w,F as n,a0 as r,S as j,a1 as e,E as a}from"./vue.13bb76e9.js";import"./cryptoJs.940212dc.js";import"./numeral.ccce3a12.js";import"./common.00ee525f.js";const A=""+globalThis.__publicAssetsURL("tavanbogd/images/bell.svg"),T={name:"breakfast",components:{AppleOutlined:f,AndroidOutlined:b},setup(){},data(){return{dayjs:x,activeKey:"1",IMAGE_URL:u,selectedToday:x(Date.now()),breakfast_data:{},loader:!0}},mounted(){this.getBreakFast()},methods:{getBreakFast(){this.loader=!0,this.breakfast_data={},console.log(m(this.selectedToday.$d)),this.$apollo.query({query:v,fetchPolicy:"no-cache",variables:{ugluunii:"\u04E8\u0433\u043B\u04E9\u04E9\u043D\u0438\u0439 \u0445\u043E\u043E\u043B",selectDate:m(this.selectedToday.$d)}}).then(({data:c})=>{this.breakfast_data=c.gal_togoo_neg_set_menu[0],this.loader=!1})},searchDate(c){this.selectedToday.$d=c.$d,console.log(this.selectedToday.$d),console.log(m(this.selectedToday.$d)),this.getBreakFast()}}},E={class:"flex items-end justify-end px-0 lg:px-4"},G=t("img",{class:"w-8 h-8 mr-4",src:y},null,-1),L={key:0,class:"py-3 w-full text-center"},R=t("img",{class:"mx-auto",src:k,alt:""},null,-1),U=[R],B={key:1,class:"grid grid-cols-1 gap-10 px-0 lg:px-4 mt-4"},I={class:"shadow border dark:border-slate-600 rounded-lg"},q=t("div",{class:"text-sm text-slate-800 dark:text-slate-200 uppercase font-bold border-b dark:border-slate-600 p-4 mb-6"},"\u041D\u044D\u0433\u0434\u04AF\u0433\u044D\u044D\u0440 \u0445\u043E\u043E\u043B",-1),M={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-4 pb-6"},D={key:0,class:"py-3 w-full text-center"},F=t("img",{class:"mx-auto w-20",src:A,alt:"",width:"80"},null,-1),N=[F],S={class:"relative w-full h-32 md:h-24 lg:h-28 2xl:h-28"},V=["src"],C=t("div",{class:"bg-slate-900 opacity-60 rounded-lg absolute left-0 top-0 right-0 bottom-0"},null,-1),K={class:"absolute bottom-0 left-0 right-0 top-0"},O={class:"flex items-center justify-center text-center text-white w-full h-full text-sm font-semibold uppercase"},P={class:"flex items-center justify-between py-2"},Y=t("p",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold mb-0",style:{"margin-bottom":"0!important"}},"\u041A\u0430\u043B\u043E\u0440\u0438:",-1),Z={class:"text-xs font-semibold text-orange-500 mb-0",style:{"margin-bottom":"0!important"}},z=t("span",{class:"text-xs font-semibold text-orange-500 pl-1"},"\u043A\u043A\u0430\u043B",-1),H={class:""},J={class:"text-xs text-slate-500 dark:text-slate-400 m-0 pb-1",style:{"margin-bottom":"0!important"}},Q=t("span",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold pr-2 m-0"},"\u041E\u0440\u0446:",-1),W={class:"flex items-end justify-end w-full"},X=t("p",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold pr-2 m-0"},"\u04AE\u043B\u0434\u044D\u0433\u0434\u044D\u043B:",-1),$={class:"text-xs font-bold text-red-600 dark:text-red-500 m-0"},tt={class:"shadow border dark:border-slate-600 rounded-lg"},st=t("div",{class:"text-sm text-slate-800 dark:text-slate-200 uppercase font-bold border-b dark:border-slate-600 p-4 mb-6"},"\u0425\u043E\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0445\u043E\u043E\u043B",-1),et={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-4 pb-6"},ot={class:"relative w-full h-32 md:h-24 lg:h-28 2xl:h-28"},lt=["src"],dt=t("div",{class:"bg-slate-900 opacity-60 rounded-lg absolute left-0 top-0 right-0 bottom-0"},null,-1),at={class:"absolute bottom-0 left-0 right-0 top-0"},it={class:"flex items-center justify-center text-center text-white w-full h-full text-sm font-semibold uppercase"},nt={class:"flex items-center justify-between py-2"},rt=t("p",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold mb-0",style:{"margin-bottom":"0!important"}},"\u041A\u0430\u043B\u043E\u0440\u0438:",-1),ct={class:"text-xs font-semibold text-orange-500 mb-0",style:{"margin-bottom":"0!important"}},_t=t("span",{class:"text-xs font-semibold text-orange-500 pl-1"},"\u043A\u043A\u0430\u043B",-1),mt={class:""},xt={class:"text-xs text-slate-500 dark:text-slate-400 m-0 pb-1",style:{"margin-bottom":"0!important"}},pt=t("span",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold pr-2 m-0"},"\u041E\u0440\u0446:",-1),ht={class:"flex items-end justify-end w-full"},gt=t("p",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold pr-2 m-0"},"\u04AE\u043B\u0434\u044D\u0433\u0434\u044D\u043B:",-1),ft={class:"text-xs font-bold text-red-600 dark:text-red-500 m-0"},bt={class:"shadow border dark:border-slate-600 rounded-lg"},ut=t("div",{class:"text-sm text-slate-800 dark:text-slate-200 uppercase font-bold border-b dark:border-slate-600 p-4 mb-6"},"\u0421\u0430\u043B\u0430\u0442",-1),vt={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-4 pb-6"},yt={class:"relative w-full h-32 md:h-24 lg:h-28 2xl:h-28"},kt=["src"],wt=t("div",{class:"bg-slate-900 opacity-60 rounded-lg absolute left-0 top-0 right-0 bottom-0"},null,-1),jt={class:"absolute bottom-0 left-0 right-0 top-0"},At={class:"flex items-center justify-center text-center text-white w-full h-full text-sm font-semibold uppercase"},Tt={class:"flex items-center justify-between py-2"},Et=t("p",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold mb-0",style:{"margin-bottom":"0!important"}},"\u041A\u0430\u043B\u043E\u0440\u0438:",-1),Gt={class:"text-xs font-semibold text-orange-500 mb-0",style:{"margin-bottom":"0!important"}},Lt=t("span",{class:"text-xs font-semibold text-orange-500 pl-1"},"\u043A\u043A\u0430\u043B",-1),Rt={class:""},Ut={class:"text-xs text-slate-500 dark:text-slate-400 m-0 pb-1",style:{"margin-bottom":"0!important"}},Bt=t("span",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold pr-2 m-0"},"\u041E\u0440\u0446:",-1),It={class:"flex items-end justify-end w-full"},qt=t("p",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold pr-2 m-0"},"\u04AE\u043B\u0434\u044D\u0433\u0434\u044D\u043B:",-1),Mt={class:"text-xs font-bold text-red-600 dark:text-red-500 m-0"},Dt={class:"shadow border dark:border-slate-600 rounded-lg"},Ft=t("div",{class:"text-sm text-slate-800 dark:text-slate-200 uppercase font-bold border-b dark:border-slate-600 p-4 mb-6"},"\u0423\u0443\u0445 \u0437\u04AF\u0439\u043B\u0441",-1),Nt={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-4 pb-6"},St={class:"relative w-full h-32 md:h-24 lg:h-28 2xl:h-28"},Vt=["src"],Ct=t("div",{class:"bg-slate-900 opacity-60 rounded-lg absolute left-0 top-0 right-0 bottom-0"},null,-1),Kt={class:"absolute bottom-0 left-0 right-0 top-0"},Ot={class:"flex items-center justify-center text-center text-white w-full h-full text-sm font-semibold uppercase"},Pt={class:"flex items-center justify-between py-2"},Yt=t("p",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold mb-0",style:{"margin-bottom":"0!important"}},"\u041A\u0430\u043B\u043E\u0440\u0438:",-1),Zt={class:"text-xs font-semibold text-orange-500 mb-0",style:{"margin-bottom":"0!important"}},zt=t("span",{class:"text-xs font-semibold text-orange-500 pl-1"},"\u043A\u043A\u0430\u043B",-1),Ht={class:""},Jt={class:"text-xs text-slate-500 dark:text-slate-400 m-0 pb-1",style:{"margin-bottom":"0!important"}},Qt=t("span",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold pr-2 m-0"},"\u041E\u0440\u0446:",-1),Wt={class:"flex items-end justify-end w-full"},Xt=t("p",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold pr-2 m-0"},"\u04AE\u043B\u0434\u044D\u0433\u0434\u044D\u043B:",-1),$t={class:"text-xs font-bold text-red-600 dark:text-red-500 m-0"},ts={class:"shadow border dark:border-slate-600 rounded-lg"},ss=t("div",{class:"text-sm text-slate-800 dark:text-slate-200 uppercase font-bold border-b dark:border-slate-600 p-4 mb-6"},"\u0414\u0415\u0421\u0415\u0420\u0422",-1),es={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-4 pb-6"},os={class:"relative w-full h-32 md:h-24 lg:h-28 2xl:h-28"},ls=["src"],ds=t("div",{class:"bg-slate-900 opacity-60 rounded-lg absolute left-0 top-0 right-0 bottom-0"},null,-1),as={class:"absolute bottom-0 left-0 right-0 top-0"},is={class:"flex items-center justify-center text-center text-white w-full h-full text-sm font-semibold uppercase"},ns={class:"flex items-center justify-between py-2"},rs=t("p",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold mb-0",style:{"margin-bottom":"0!important"}},"\u041A\u0430\u043B\u043E\u0440\u0438:",-1),cs={class:"text-xs font-semibold text-orange-500 mb-0",style:{"margin-bottom":"0!important"}},_s=t("span",{class:"text-xs font-semibold text-orange-500 pl-1"},"\u043A\u043A\u0430\u043B",-1),ms={class:""},xs={class:"text-xs text-slate-500 dark:text-slate-400 m-0 pb-1",style:{"margin-bottom":"0!important"}},ps=t("span",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold pr-2 m-0"},"\u041E\u0440\u0446:",-1),hs={class:"flex items-end justify-end w-full"},gs=t("p",{class:"text-xs text-slate-700 dark:text-slate-300 font-semibold pr-2 m-0"},"\u04AE\u043B\u0434\u044D\u0433\u0434\u044D\u043B:",-1),fs={class:"text-xs font-bold text-red-600 dark:text-red-500 m-0"};function bs(c,_,us,vs,o,p){const h=j("a-date-picker");return l(),d(n,null,[t("div",E,[G,w(h,{value:o.selectedToday,"onUpdate:value":_[0]||(_[0]=s=>o.selectedToday=s),onChange:_[1]||(_[1]=s=>p.searchDate(s))},null,8,["value"])]),o.loader?(l(),d("div",L,U)):(l(),d("div",B,[t("div",I,[q,t("div",M,[o.breakfast_data.gal_togoo_neg_neg==""?(l(),d("div",D,N)):(l(!0),d(n,{key:1},r(o.breakfast_data.gal_togoo_neg_neg,(s,i)=>(l(),d("div",{class:"col-span-1",key:i},[t("div",S,[t("img",{class:"w-full h-full rounded-lg mb-4 object-cover",src:o.IMAGE_URL+s.food_iamge},null,8,V),C,t("div",K,[t("div",O,e(s.food_name),1)])]),t("div",P,[Y,t("p",Z,[a(e(s.food_calorie)+" ",1),z])]),t("div",H,[t("p",J,[Q,a(e(s.food_ingredients),1)])]),t("div",W,[X,t("p",$,e(s.food_quantity),1)])]))),128))])]),t("div",tt,[st,t("div",et,[(l(!0),d(n,null,r(o.breakfast_data.gal_togoo_neg_hoer,(s,i)=>(l(),d("div",{class:"col-span-1",key:i},[t("div",ot,[t("img",{class:"w-full h-full rounded-lg mb-4 object-cover",src:o.IMAGE_URL+s.food_iamge},null,8,lt),dt,t("div",at,[t("div",it,e(s.food_name),1)])]),t("div",nt,[rt,t("p",ct,[a(e(s.food_calorie)+" ",1),_t])]),t("div",mt,[t("p",xt,[pt,a(e(s.food_ingredients),1)])]),t("div",ht,[gt,t("p",ft,e(s.food_quantity),1)])]))),128))])]),t("div",bt,[ut,t("div",vt,[(l(!0),d(n,null,r(o.breakfast_data.gal_togoo_neg_salat,(s,i)=>(l(),d("div",{class:"col-span-1",key:i},[t("div",yt,[t("img",{class:"w-full h-full rounded-lg mb-4 object-cover",src:o.IMAGE_URL+s.food_iamge},null,8,kt),wt,t("div",jt,[t("div",At,e(s.food_name),1)])]),t("div",Tt,[Et,t("p",Gt,[a(e(s.food_calorie)+" ",1),Lt])]),t("div",Rt,[t("p",Ut,[Bt,a(e(s.food_ingredients),1)])]),t("div",It,[qt,t("p",Mt,e(s.food_quantity),1)])]))),128))])]),t("div",Dt,[Ft,t("div",Nt,[(l(!0),d(n,null,r(o.breakfast_data.gal_togoo_neg_uuhim,(s,i)=>(l(),d("div",{class:"col-span-1",key:i},[t("div",St,[t("img",{class:"w-full h-full rounded-lg mb-4 object-cover",src:o.IMAGE_URL+s.food_iamge},null,8,Vt),Ct,t("div",Kt,[t("div",Ot,e(s.food_name),1)])]),t("div",Pt,[Yt,t("p",Zt,[a(e(s.food_calorie),1),zt])]),t("div",Ht,[t("p",Jt,[Qt,a(e(s.food_ingredients),1)])]),t("div",Wt,[Xt,t("p",$t,e(s.food_quantity),1)])]))),128))])]),t("div",ts,[ss,t("div",es,[(l(!0),d(n,null,r(o.breakfast_data.gal_togoo_neg_desert,(s,i)=>(l(),d("div",{class:"col-span-1",key:i},[t("div",os,[t("img",{class:"w-full h-full rounded-lg mb-4 object-cover",src:o.IMAGE_URL+s.food_iamge},null,8,ls),ds,t("div",as,[t("div",is,e(s.food_name),1)])]),t("div",ns,[rs,t("p",cs,[a(e(s.food_calorie),1),_s])]),t("div",ms,[t("p",xs,[ps,a(e(s.food_ingredients),1)])]),t("div",hs,[gs,t("p",fs,e(s.food_quantity),1)])]))),128))])])]))],64)}const Ls=g(T,[["render",bs]]);export{Ls as default};
