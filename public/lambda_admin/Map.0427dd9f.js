import{m as h}from"./_mixin.bcbb50b5.js";import{a as u}from"./entry.07ce20b5.js";import{Z as f,_,c as s,$ as v,a0 as p,a2 as c,U as m}from"./vue.94d6394d.js";import"./common.c0c079f4.js";import"./ant.01c818db.js";import"./moment.8b5e7d95.js";import"./ag.01cba310.js";import"./lodash.1dddd912.js";import"./numeral.fd2a7c31.js";import"./cryptoJs.33cead7e.js";const C={mixins:[h],data(){return{map:null,center:{lat:47.9197668,lng:106.9183483},zoom:11,marker:null,fromCityCenter:0}},computed:{coordinate(){return this.model.form[this.model.component]},lang(){const t=["fromCityCenter","latitude","longitude"];return t.reduce((e,o,l)=>(e[o]=this.$t("dataGrid."+t[l]),e),{})}},watch:{coordinate(t,e){if((e&&!t||t&&!e)&&t){let o=JSON.parse(t);this.center={lat:parseFloat(o.lat),lng:parseFloat(o.lng)},this.init()}}},mounted(){this.init()},methods:{init(){this.map=new google.maps.Map(this.$el.getElementsByClassName("lambda-map")[0],{zoom:this.zoom,center:this.center}),this.marker=new google.maps.Marker({map:this.map,draggable:!0,animation:google.maps.Animation.DROP,position:this.center}),google.maps.event.addListener(this.map,"click",t=>{this.model.form[this.model.component]=JSON.stringify(t.latLng),this.marker.setPosition(t.latLng)}),this.marker.addListener("position_changed",this.moveEvent.bind(this))},calcDistance(t,e){let o=47.91854,l=106.917658,n=.017453292519943295,a=Math.cos,i=.5-a((t-o)*n)/2+a(o*n)*a(t*n)*(1-a((e-l)*n))/2;this.fromCityCenter=(12742*Math.asin(Math.sqrt(i))).toFixed(2)},moveEvent(){this.center={lat:this.marker.getPosition().lat().toFixed(7),lng:this.marker.getPosition().lng().toFixed(7)},this.calcDistance(this.center.lat,this.center.lng),new google.maps.LatLng(this.center.lat,this.center.lng),this.model.form[this.model.component]=JSON.stringify(this.center)},updateLat(t){this.center.lat=parseFloat(t.target.value).toFixed(7);let e=new google.maps.LatLng(this.center.lat,this.center.lng);this.marker.setPosition(e)},updateLng(t){this.center.lng=parseFloat(t.target.value).toFixed(7);let e=new google.maps.LatLng(this.center.lat,this.center.lng);this.marker.setPosition(e)}}},L={class:"lambda-map-wrapper"},k={class:"lambda-lat-lng"},b=p("div",{class:"lambda-map"},null,-1);function y(t,e,o,l,n,a){const i=m("a-input"),d=m("Input"),g=m("lambda-form-item");return f(),_("div",L,[s(g,{label:t.label,name:t.model.component,meta:t.meta},{default:v(()=>[p("div",k,[s(i,{value:n.center.lat,"onUpdate:value":e[0]||(e[0]=r=>n.center.lat=r),placeholder:a.lang.latitude,onOnBlur:a.updateLat},null,8,["value","placeholder","onOnBlur"]),s(d,{value:n.center.lng,"onUpdate:value":e[1]||(e[1]=r=>n.center.lng=r),placeholder:a.lang.longitude},null,8,["value","placeholder"])]),p("span",null,c(a.lang.fromCityCenter)+": "+c(n.fromCityCenter)+" \u043A\u043C",1),b]),_:1},8,["label","name","meta"])])}const S=u(C,[["render",y]]);export{S as default};