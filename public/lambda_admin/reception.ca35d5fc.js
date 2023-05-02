import{a as b,a2 as x,N as v,o as a,e as l,h as t,t as e,f as r,w as d,p as w,F as f,q as u,r as p,i as m}from"./entry.8ecb60d7.js";import{I as k,h as q,i as O,j as R}from"./queries.513f850b.js";const D=""+globalThis.__publicAssetsURL("tavanbogd/images/user.png"),E={name:"reception",data(){return{IMAGE_URL:k,qr_code:"",orders:[],order_list:[],user_data:{},loading:!1}},mounted(){this.getOlgogdsonOrders()},methods:{callData(){this.qr_code!=""?(this.loading=!0,this.$apollo.query({query:q,fetchPolicy:"no-cache",variables:{user_id:this.qr_code,is_selled:"olgoogui",payment_status:"success"}}).then(({data:n})=>{this.orders=n.view_orders_zahialgat,this.loading=!1,this.qr_code=""}),this.$apollo.query({query:O,fetchPolicy:"no-cache",variables:{user_id:this.qr_code}}).then(({data:n})=>{this.user_data=n.view_user[0],this.loading=!1})):x.warning({content:()=>"Qr код оо уншуулна уу!"})},checkOrder(n){this.loading=!0,v.post("/api/reception",{id:n.id,user_id:n.user_id,payment_status:"olgoson"}).then(c=>{c.data.status==="success"?(this.loading=!1,x.success("Амжилттай илгээгдлээ"),this.qr_code=n.user_id,this.callData(),this.getOlgogdsonOrders(),window.location.reload()):x.error("Алдаа гарлаа")})},getDate(n){return new Date(n).toJSON().slice(0,10).replace(/-/g,".")},getOlgogdsonOrders(){this.loading=!0,this.$apollo.query({query:R}).then(({data:n})=>{this.order_list=n.view_orders_zahialgat_cur_date_list,this.loading=!1,console.log(this.order_list)})}}},G={id:"reception",class:"items-center justify-center bg-white dark:bg-slate-900 rounded-lg p-6 w-full space-y-8"},N={class:"flex flex-col items-center justify-center space-y-2 pt-28 relative"},S=t("span",{class:"sm:text-3xl text-2xl text-slate-900"},"Захиалга шалгах",-1),C=t("p",{class:"sm:text-base text-sm text-slate-600 font-light text-center leading-0"},"QR код уншуулж захиалга шалгаарай",-1),I={class:"absolute top-2 right-2"},L={class:"flex flex-col text-base items-center"},T={class:"text-4xl"},U=t("span",{class:"text-slate-500 text-sm"},"Олгосон захиалга",-1),j={class:"w-full flex px-48"},A={class:"flex flex-col items-center justify-center"},M={key:0,class:"py-32"},Q={key:1,class:"w-full pt-20"},z={key:0,class:"space-y-2"},B={key:0,class:"w-full"},P={class:"flex flex-row pb-6 space-x-4 items-center"},V={class:"flex items-center justify-center shadow-none border rounded-lg"},F=["src"],J={key:1,class:"w-20 p-2",src:D,alt:"qr path"},H={class:"flex flex-col text-base"},K={class:"text-slate-500"},W={class:"w-full border rounded-lg p-3"},X={class:"w-full mt-3"},Y=t("thead",null,[t("tr",null,[t("th",{class:"text-left w-2 pr-2"},[t("span",{class:"text-base font-normal text-xs"},"№")]),t("th",{class:"text-left"},[t("span",{class:"text-base font-normal text-xs"},"Захиалгын дугаар")]),t("th",{class:"px-5 text-left"},[t("span",{class:"text-base font-normal text-xs"},"Хэрэглэгч")]),t("th",{class:"px-5 text-left"},[t("span",{class:"text-base font-normal text-xs"},"Огноо")]),t("th",{class:"px-5 text-left"},[t("span",{class:"text-base font-normal text-xs"},"Төлбөрийн төрөл")]),t("th",{class:"px-5 text-center"},[t("span",{class:"text-base font-normal text-xs"},"Тоо ширхэг")]),t("th",{class:"px-5 text-center"},[t("span",{class:"text-base font-normal text-xs"},"Нийт дүн")]),t("th",{class:"text-right"},[t("span",{class:"text-base font-normal text-xs"})])])],-1),Z={class:""},$={class:"text-left w-2 pr-2 text-xs"},tt={class:"text-left text-xs"},st={class:"text-left px-5 text-xs"},et={class:"text-left px-5 text-xs"},at={class:"text-left px-5 text-xs"},lt={key:0,class:"text-sky-900"},ot={key:1,class:"text-amber-400"},nt={class:"text-center px-5 text-xs"},ct={class:"text-center px-5 text-xs"},_t={class:"text-right py-1"},it={key:1,class:"py-32"},rt=t("p",{class:"text-xs font-light text-center leading-0"},"Баталгаажсан захиалга байхгүй байна.",-1),xt=[rt],dt={class:"w-full border rounded-lg p-3 mt-4"},pt={class:"w-full mt-3"},ht=t("thead",null,[t("tr",null,[t("th",{class:"text-left w-2 pr-2"},[t("span",{class:"text-base font-normal text-xs"},"№")]),t("th",{class:"text-left"},[t("span",{class:"text-base font-normal text-xs"},"Захиалгын дугаар")]),t("th",{class:"px-5 text-left"},[t("span",{class:"text-base font-normal text-xs"},"Компанийн нэр")]),t("th",{class:"px-5 text-left"},[t("span",{class:"text-base font-normal text-xs"},"Огноо")]),t("th",{class:"px-5 text-left"},[t("span",{class:"text-base font-normal text-xs"},"Овог нэр")]),t("th",{class:"px-5 text-left"},[t("span",{class:"text-base font-normal text-xs"},"Төлбөрийн төрөл")]),t("th",{class:"px-5 text-center"},[t("span",{class:"text-base font-normal text-xs"},"Тоо ширхэг")]),t("th",{class:"px-5 text-center"},[t("span",{class:"text-base font-normal text-xs"},"Нийт дүн")]),t("th",{class:"text-right"},[t("span",{class:"text-base font-normal text-xs"})])])],-1),ft={class:""},ut={class:"text-left w-2 pr-2 text-xs"},mt={class:"text-left text-xs"},yt={class:"text-left px-5 py-2 text-xs"},gt={class:"text-left px-5 py-2 text-xs"},bt={class:"text-left px-5 py-2 text-xs"},vt={class:"text-left px-5 py-2 text-xs"},wt={key:0,class:"text-sky-900"},kt={key:1,class:"text-amber-400"},qt={class:"text-center px-5 py-2 text-xs"},Ot={class:"text-center px-5 py-2 text-xs"},Rt=t("td",{class:"text-right py-2 text-green-600 text-xs"}," Олгогдсон ",-1);function Dt(n,c,Et,Gt,o,i){const h=p("a-button"),y=p("a-input-search"),g=p("a-spin");return a(),l("div",G,[t("div",N,[S,C,t("div",I,[t("div",L,[t("span",T,e(o.order_list.length),1),U])])]),t("div",j,[r(y,{value:o.qr_code,"onUpdate:value":c[0]||(c[0]=s=>o.qr_code=s),placeholder:"Хэрэглэгчийн QR код",size:"large",onSearch:i.callData},{enterButton:d(()=>[r(h,{onClick:i.callData,type:"primary"},{default:d(()=>[m("Шалгах")]),_:1},8,["onClick"])]),_:1},8,["value","onSearch"])]),t("div",A,[o.loading?(a(),l("div",M,[r(g,{class:"pt-20"})])):(a(),l("div",Q,[o.orders.length>0?(a(),l("div",z,[o.user_data.first_name?(a(),l("div",B,[t("div",P,[t("div",V,[o.user_data.avatar!=null&&o.user_data.avatar!=" "?(a(),l("img",{key:0,class:"w-20 h-20 p-2",src:o.IMAGE_URL+o.user_data.avatar,alt:"qr path"},null,8,F)):(a(),l("img",J))]),t("div",H,[t("span",K,e(o.user_data.first_name),1)])])])):w("",!0),t("div",W,[t("table",X,[Y,t("tbody",Z,[(a(!0),l(f,null,u(o.orders,(s,_)=>(a(),l("tr",{class:"",key:_},[t("td",$,e(_+1)+". ",1),t("td",tt,e(s.order_number),1),t("td",st,e(s.full_name),1),t("td",et,e(i.getDate(s.created_at)),1),t("td",at,[s.payment_type=="QPay"?(a(),l("span",lt,e(s.payment_type),1)):(a(),l("span",ot,e(s.payment_type),1))]),t("td",nt,e(s.order_quantity),1),t("td",ct,e(s.order_price)+"₮ ",1),t("td",_t,[r(h,{type:"primary",onClick:Nt=>i.checkOrder(s),size:"small"},{default:d(()=>[m(" Захиалга олгох ")]),_:2},1032,["onClick"])])]))),128))])])])])):(a(),l("div",it,xt)),t("div",dt,[t("table",pt,[ht,t("tbody",ft,[(a(!0),l(f,null,u(o.order_list,(s,_)=>(a(),l("tr",{class:"",key:_},[t("td",ut,e(_+1)+". ",1),t("td",mt,e(s.order_number),1),t("td",yt,e(s.company_name),1),t("td",gt,e(s.success_time),1),t("td",bt,e(s.full_name),1),t("td",vt,[s.payment_type=="QPay"?(a(),l("span",wt,e(s.payment_type),1)):(a(),l("span",kt,e(s.payment_type),1))]),t("td",qt,e(s.order_quantity),1),t("td",Ot,e(s.order_price)+"₮ ",1),Rt]))),128))])])])]))])])}const It=b(E,[["render",Dt]]);export{It as default};