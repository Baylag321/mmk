import{a as D}from"./common.72b693eb.js";import{p as q,a as C,b as E}from"./leaflet.ff882a8f.js";import{m as H}from"./_mixin.90da006c.js";import{c as y,Z as h,a1 as d,a0 as c,$ as o,_ as A,a6 as z,a8 as O,a3 as m,F as B,a2 as k,y as M,aa as S,H as V,W as f}from"./vue.65c51cdf.js";import{a as I}from"./entry.b42421c5.js";import{A as F,n as v}from"./ant.770c87db.js";import"./moment.8b5e7d95.js";import"./ag.ab39fb93.js";import"./lodash.d251a0a5.js";import"./numeral.1f6cf9d6.js";import"./cryptoJs.f0105b17.js";var j={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M365.3 518.5l246 178c5.3 3.8 12.7 0 12.7-6.5v-46.9c0-10.2-4.9-19.9-13.2-25.9L465.4 512l145.4-105.2c8.3-6 13.2-15.6 13.2-25.9V334c0-6.5-7.4-10.3-12.7-6.5l-246 178a8.05 8.05 0 000 13z"}},{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"}}]},name:"left-square",theme:"outlined"};const _=j;function T(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?Object(arguments[t]):{},s=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(s=s.concat(Object.getOwnPropertySymbols(i).filter(function(a){return Object.getOwnPropertyDescriptor(i,a).enumerable}))),s.forEach(function(a){K(e,a,i[a])})}return e}function K(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var N=function(t,i){var s=T({},t,i.attrs);return y(F,T({},s,{icon:_}),null)};N.displayName="LeftSquareOutlined";N.inheritAttrs=!1;const X=N;var Z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M412.7 696.5l246-178c4.4-3.2 4.4-9.7 0-12.9l-246-178c-5.3-3.8-12.7 0-12.7 6.5V381c0 10.2 4.9 19.9 13.2 25.9L558.6 512 413.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5z"}},{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"}}]},name:"right-square",theme:"outlined"};const P=Z;function G(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?Object(arguments[t]):{},s=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(s=s.concat(Object.getOwnPropertySymbols(i).filter(function(a){return Object.getOwnPropertyDescriptor(i,a).enumerable}))),s.forEach(function(a){Y(e,a,i[a])})}return e}function Y(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var x=function(t,i){var s=G({},t,i.attrs);return y(F,G({},s,{icon:P}),null)};x.displayName="RightSquareOutlined";x.inheritAttrs=!1;const Q=x,W="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC",$="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAMAAAAhFXfZAAAC91BMVEVMaXEzeak2f7I4g7g3g7cua5gzeKg8hJo3grY4g7c3grU0gLI2frE0daAubJc2gbQwd6QzeKk2gLMtd5sxdKIua5g1frA2f7IydaM0e6w2fq41fK01eqo3grgubJgta5cxdKI1f7AydaQydaMxc6EubJgvbJkwcZ4ubZkwcJwubZgubJcydqUydKIxapgubJctbJcubZcubJcvbJYubJcvbZkubJctbJctbZcubJg2f7AubJcrbZcubJcubJcua5g3grY0fq8ubJcubJdEkdEwhsw6i88vhswuhcsuhMtBjMgthMsrg8srgss6is8qgcs8i9A9iMYtg8spgcoogMo7hcMngMonf8olfso4gr8kfck5iM8jfMk4iM8he8k1fro7itAgesk2hs8eecgzfLcofssdeMg0hc4cd8g2hcsxeLQbdsgZdcgxeLImfcszhM0vda4xgckzhM4xg84wf8Yxgs4udKsvfcQucqhUndROmdM1fK0wcZ8vb5w0eqpQm9MzeKhXoNVcpdYydKNWn9VZotVKltJFjsIwcJ1Rms9OlslLmtH///8+kc9epdYzd6dbo9VHkMM2f7FHmNBClM8ydqVcpNY9hro3gLM9hLczealQmcw3fa46f7A8gLMxc6I3eagyc6FIldJMl9JSnNRSntNNl9JPnNJFi75UnM9ZodVKksg8kM45jc09e6ZHltFBk883gbRBh7pDk9EwcaBzn784g7dKkcY2i81Om9M7j85Llc81is09g7Q4grY/j9A0eqxKmdFFltBEjcXf6fFImdBCiLxJl9FGlNFBi78yiMxVndEvbpo6js74+vx+psPP3+o/ks5HkcpGmNCjwdZCkNDM3ehYoNJEls+lxNkxh8xHks0+jdC1zd5Lg6r+/v/H2ufz9/o3jM3t8/edvdM/k89Th61OiLBSjbZklbaTt9BfptdjmL1AicBHj8hGk9FAgK1dkLNTjLRekrdClc/k7fM0icy0y9tgp9c4jc2NtM9Dlc8zicxeXZn3AAAAQ3RSTlMAHDdTb4yPA+LtnEQmC4L2EmHqB7XA0d0sr478x4/Yd5i1zOfyPkf1sLVq4Nh3FvjxopQ2/STNuFzUwFIwxKaejILpIBEV9wAABhVJREFUeF6s1NdyFEcYBeBeoQIhRAkLlRDGrhIgY3BJL8CVeKzuyXFzzjkn5ZxzzuScg3PO8cKzu70JkO0LfxdTU//pM9vTu7Xgf6KqOVTb9X7toRrVEfBf1HTVjZccrT/2by1VV928Yty9ZbVuucdz90frG8DBjl9pVApbOstvmMuvVgaNXSfAAd6pGxpy6yxf5ph43pS/4f3uoaGm2rdu72S9xzOvMymkZFq/ptDrk90mhW7e4zl7HLzhxGWPR20xmSxJ/VqldG5m9XhaVOA1DadsNh3Pu5L2N6QtPO/32JpqQBVVk20oy/Pi2s23WEvyfHbe1thadVQttvm7Llf65gGmXK67XtupyoM7HQhmXdLS8oGWJNeOJ3C5fG5XCEJnkez3/oFdsvgJ4l2ANZwhrJKk/7OSXa+3Vw2WJMlKnGkobouYk6T0TyX30klOUnTD9HJ5qpckL3EW/w4XF3Xd0FGywXUrstrclVsqz5Pd/sXFYyDnPdrLcQODmGOK47IZb4CmibmMn+MYRzFZ5jg33ZL/EJrWcszHmANy3ARBK/IXtciJy8VsitPSdE3uuHxzougojcUdr8/32atnz/ev3f/K5wtpxUTpcaI45zusVDpYtZi+jg0oU9b3x74h7+n9ABvYEZeKaVq0sh0AtLKsFtqNBdeT0MrSzwwlq9+x6xAO4tgOtSzbCjrNQQiNvQUbUEubvzBUeGw26yDCsRHCoLkTHDa7IdOLIThs/gHvChszh2CimE8peRs47cxANI0lYNB5y1DljpOF0IhzBDPOZnDOqYYbeGKECbPzWnXludPphw5c2YBq5zlwXphIbO4VDCZ0gnPfUO1TwZoYwAs2ExPCedAu9DAjfQUjzITQb3jNj0KG2Sgt6BHaQUdYzWz+XmBktOHwanXjaSTcwwziBcuMOtwBmqPrTOxFQR/DRKKPqyur0aiW6cULYsx6tBm0jXpR/AUWR6HRq9WVW6MRhIq5jLyjbaCTDCijyYJNpCajdyobP/eTw0iexBAKkJ3gA5KcQb2zBXsIBckn+xVv8jkZSaEFHE+jFEleAEfayRU0MouNoBmB/L50Ai/HSLIHxcrpCvnhSQAuakKp2C/YbCylJjXRVy/z3+Kv/RrNcCo+WUzlVEhzKffnTQnxeN9fWF88fiNCUdSTsaufaChKWInHeysygfpIqagoakW+vV20J8uyl6TyNKEZWV4oRSPyCkWpgOLSbkCObT8o2r6tlG58HQquf6O0v50tB7JM7F4EORd2dx/K0w/KHsVkLPaoYrwgP/y7krr3SSMA4zj+OBgmjYkxcdIJQyQRKgg2viX9Hddi9UBb29LrKR7CVVEEEXWojUkXNyfTNDE14W9gbHJNuhjDettN3ZvbOvdOqCD3Jp/9l+/wJE+9PkYGjx/fqkys3S2rMozM/o2106rfMUINo6hVqz+eu/hd1c4xTg0TAfy5kV+4UG6+IthHTU9woWmxuKNbTfuCSfovBCxq7EtHqvYL4Sm6F8GVxsSXHMQ07TOi1DKtZxjWaaIyi4CXWjxPccUw8WVbMYY5wxC1mzEyXMJWkllpRloi+Kkoq69sxBTlElF6aAxYUbjXNlhlDZilDnM4U5SlN5biRsRHnbx3mbeWjEh4mEyiuJDl5XcWVmX5GvNkFgLWZM5qwsop4/AWfLhU1cR7k1VVvcYCWRkOI6Xy5gmnphCYIkvzuNYzHzosq2oNk2RtSs8khfUOfHIDgR6ysYBaMpl4uEgk2U/oJTs9AaTSwma7dT69geAE2ZpEjUsn2ieJNHeKfrI3EcAGJ2ZaNgVuC8EBctCLc57P5u5led6IOBkIYkuQMrmmjChs4VkfOerHqSBkPzZlhe06RslZ3zMjk2sscqKwY0RcjKK+LWbzd7KiHhkncs/siFJ+V5eXxD34B8nVuJEpGJNmxN2gH3vSvp7J70tF+D1Ej8qUJD1TkErAND2GZwTFg/LubvmgiBG3SOvdlsqFQrkEzJCL1rstlnVFROixZoDDSuXQFHESwVGlcuQcMb/b42NgjLowh5MTDFE3vNB5qStRIErdCQEh6pLPR92anSUb/wAIhldAaDMpGgAAAABJRU5ErkJggg==",ee="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=";const U=L.icon({iconRetinaUrl:$,iconUrl:ee,shadowUrl:W,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]});window.type=!0;const te={mixins:[H],computed:{lang(){const e=["save","cancel","longitude","latitude","graphicsManagement","polygon","point","noSiteFound","theSiteHasNotBeenSelected"];return e.reduce((t,i,s)=>(t[i]=this.$t("dataForm."+e[s]),t),{})},options(){return this.meta.options},value_field_form(){if(this.formValueField)return this.model.form[this.formValueField]}},components:{LeftSquareOutlined:X,RightSquareOutlined:Q},mounted(){this.meta.GeographicOption&&(this.zoom=this.meta.GeographicOption.zoom,this.attributes=this.meta.GeographicOption.attributes.split(","),this.currentBaseMap=this.meta.GeographicOption.baseMap,this.geometryType=this.meta.GeographicOption.geometryType,this.center=this.meta.GeographicOption.center,this.allowMultiGeometryTypes=!1,this.allowMultiGeometries=!1,this.checkByArea=this.meta.GeographicOption.checkByArea,this.featureLayerUrl=this.meta.GeographicOption.featureLayerUrl,this.featureTitles=this.meta.GeographicOption.featureTitles,this.searchField=this.meta.GeographicOption.searchField,this.formValueField=this.meta.GeographicOption.formValueField,this.successMsg=this.meta.GeographicOption.successMsg,this.errorMsg=this.meta.GeographicOption.errorMsg,this.searchFieldPlaceHolder=this.meta.GeographicOption.searchFieldPlaceHolder),!this.meta.hidden&&this.do_render&&this.initMap()},data(){return{formInline:{search_value:""},ruleInline:{search_value:[{required:!0,message:"\u0425\u0430\u0439\u0445 \u0443\u0442\u0433\u0430 \u0430\u0430 \u043E\u0440\u0443\u0443\u043B\u043D\u0430 \u0443\u0443",trigger:"blur"}]},current:null,new_point:{lng:null,lat:null},attributes:[],geometryType:"point",points:[],openSide:!1,allowMultiGeometryTypes:!1,allowMultiGeometries:!1,checkByArea:!1,featureLayerUrl:"",featureTitles:"",searchField:"",successMsg:"",formValueField:"",errorMsg:"",searchLoading:!1,center:{lat:47.91876971846709,lng:106.91736415028574},zoom:15,map:null,currentBaseMap:0,baseMaps:[{title:"iMap",thumb:"/webgis/images/baseMaps/googleSatellite.jpg",baseMap:L.tileLayer("https://cloudgis.mn/map01/Tilemap/demo/{z}/{x}/{y}.png?mskey=12345",{name:"imap",maxZoom:20,subdomains:["mt0","mt1","mt2","mt3"]})},{title:"Google \u0421\u0430\u043D\u0441\u0440\u044B\u043D",thumb:"/webgis/images/baseMaps/googleSatellite.jpg",baseMap:L.tileLayer("https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",{name:"googleil",maxZoom:20,subdomains:["mt0","mt1","mt2","mt3"]})},{title:"Google \u0413\u0443\u0434\u0430\u043C\u0436",thumb:"/webgis/images/baseMaps/googleStreets.jpg",baseMap:L.tileLayer("https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",{name:"googlei",maxZoom:20,subdomains:["mt0","mt1","mt2","mt3"]})},{title:"Open Street Map",baseMap:L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{name:"osm",maxZoom:19,subdomains:["a","b","c"]}),thumb:"/webgis/images/baseMaps/openstreet.jpg"}],draw:null,layer:new L.FeatureGroup,searchLayer:null,drawValue:null}},beforeMount(){this.meta.options&&(this.meta.options=null)},methods:{removeEditeLauyer(){this.layer.eachLayer(e=>{this.layer.removeLayer(e)}),this.cancelGraphic()},clearSearchLayer(){this.searchLayer&&(this.map.hasLayer(this.searchLayer)&&this.map.removeLayer(this.searchLayer),this.searchLayer=null)},handleSubmit(){let e=this.model.form[this.formValueField];if(e&&this.do_render){this.searchLoading=!0;var t=D.create({headers:{common:{}}});t.get(`/api/get-region/${e}`).then(i=>{if(i.data.object_id>=1){let s=`${this.featureLayerUrl}/query?returnGeometry=true&where=${this.searchField}=${i.data.object_id}&outFields=*&f=json&outSR=4326`;t.get(s,{transformRequest:(a,r)=>{delete r.common["X-CSRF-TOKEN"],delete r["X-CSRF-TOKEN"],delete r.Authorization,delete r.common["X-Requested-With"],delete r.common.Authorization}}).then(a=>{if(a.data.features.length>=1){a.data.features[0].geometry.rings[0];let r=[];a.data.features[0].geometry.rings.forEach(n=>{let u=[];n.forEach(g=>{u.push([g[1],g[0]])}),r.push(u)}),this.clearSearchLayer(),this.searchLayer=L.polygon(r,{color:"green"}).addTo(this.map),this.searchLayer.bindPopup(L.Util.template(this.featureTitles,a.data.features[0].attributes));let p=this.searchLayer.getBounds();this.map.fitBounds(p),this.searchLoading=!1}else this.searchLoading=!1,this.clearSearchLayer(),v.error({message:this.lang.noSiteFound})})}})}},cancelGraphic(){this.points=[],this.current=null,this.map.closePopup(),this.openSide=!1;let e=this.getData();if(this.checkByArea&&e)if(this.searchLayer){let t=this.layer.toGeoJSON(),i=this.searchLayer.toGeoJSON(),s=!0;i.geometry.coordinates.forEach(a=>{let r=q([a]);t.features.forEach(p=>{if(this.geometryType=="polygon"&&p.geometry.coordinates[0].map(n=>{let u=C(n);E(u,r)&&(s=!1)}),this.geometryType=="point"){let n=C(p.geometry.coordinates);E(n,r)&&(s=!1)}})}),s?(this.model.form[this.model.component]=null,v.error({message:this.errorMsg})):(this.model.form[this.model.component]=e,v.success({message:this.successMsg}))}else this.layer.eachLayer(t=>{this.map.removeLayer(t)}),this.model.form[this.model.component]=null,v.error({message:this.lang.theSiteHasNotBeenSelected});else this.model.form[this.model.component]=e},createFeature(e){let t=e.toGeoJSON();L.geoJSON(t).eachLayer(s=>{this.layer.addLayer(this.setLayerOptions(s))})},setLayerOptions(e){e.on("click",s=>this.geometrySelectEvent(s));let t={},i=L.DomUtil.create("div");return this.attributes.map(s=>{t[s]=e.feature.properties[s]?e.feature.properties[s]:"";let a=L.DomUtil.create("div"),r=L.DomUtil.create("br"),p=L.DomUtil.create("label");p.innerText=s;let n=L.DomUtil.create("input");n.value=t[s],L.DomEvent.addListener(n,"change",u=>{t[s]=n.value}),a.appendChild(p),a.appendChild(r),a.appendChild(n),i.appendChild(a)}),this.checkByArea||e.bindPopup(i),e.feature.properties=t,e},saveGraphic(){if(this.current){if(this.geometryType=="point"){if(this.IsValidCoordinates(this.points[0])){let t=L.latLng([this.points[0][1],this.points[0][0]]);this.current.setLatLng(t)}}else{let t=[];this.points.map(i=>{this.IsValidCoordinates(i)&&t.push(L.latLng([i[1],i[0]]))}),this.current.setLatLngs(t)}return this.cancelGraphic(),!0}let e=null;if(this.geometryType=="point")this.IsValidCoordinates(this.points[0])&&(e=L.marker([this.points[0][1],this.points[0][0]]));else{let t=[];this.points.map(i=>{this.IsValidCoordinates(i)&&t.push([i[1],i[0]])}),this.geometryType=="line"&&(e=new L.polyline(t)),this.geometryType=="polygon"&&(e=new L.polygon(t))}e&&this.createFeature(e),this.cancelGraphic()},destroy(){if(this.meta.options=null,this.map!==null){this.layer.eachLayer(s=>{this.map.removeLayer(s)}),this.map.removeLayer(this.layer),this.layer=new L.FeatureGroup,this.map.remove(),this.map=null;var e=document.getElementById(`geographic_${this.model.component}`),t=e.parentNode;t.removeChild(e);var i=document.createElement("div");i.setAttribute("id",`geographic_${this.model.component}`),i.setAttribute("class","geographic-mapx"),t.appendChild(i)}},initMap(){L.Marker.prototype.options.icon=U,L.Draw.Marker.prototype.options.icon=U;var e=L.DomUtil.get(`geographic_${this.model.component}`);e!=null&&(e._leaflet_id=null),this.map=L.map(`geographic_${this.model.component}`).setView([this.center.lat,this.center.lng],this.zoom),this.map.addLayer(this.baseMaps[this.currentBaseMap].baseMap),this.itemValue||(this.layer.eachLayer(t=>{this.map.removeLayer(t)}),this.map.removeLayer(this.layer)),this.draw=new L.Control.Draw({draw:{polygon:this.allowMultiGeometryTypes?!0:this.geometryType==="polygon",rectangle:this.allowMultiGeometryTypes?!0:this.geometryType==="polygon",marker:this.allowMultiGeometryTypes?!0:this.geometryType==="point",polyline:this.allowMultiGeometryTypes?!0:this.geometryType==="line",circle:!1,circlemarker:!1},edit:{featureGroup:this.layer,remove:!(this.meta&&this.meta.disabled)}}),this.map.addControl(this.draw),L.control.scale().addTo(this.map),this.setElement(),this.map.on(L.Draw.Event.CREATED,t=>{t.layerType;let i=t.layer;this.meta&&this.meta.disabled?alert(this.lang.thereZNoRightChangeInformation):(this.createFeature(i),this.cancelGraphic())}),this.map.on(L.Draw.Event.DELETED,t=>{this.meta&&this.meta.disabled?alert(this.lang.thereZNoRightChangeInformation):this.cancelGraphic()}),this.map.on(L.Draw.Event.EDITED,t=>{this.meta&&this.meta.disabled?alert(this.lang.thereZNoRightChangeInformation):this.cancelGraphic()}),this.formValueField&&this.checkByArea&&this.model.form[this.formValueField]&&this.do_render&&this.handleSubmit()},setElement(){if(this.itemValue)try{let e=JSON.parse(this.itemValue);this.geometryType==="point"&&(e={type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:{coordinates:[e.lng,e.lat],type:"Point"}}]}),L.geoJSON(e).eachLayer(i=>{this.layer.addLayer(this.setLayerOptions(i))}),this.map.fitBounds(this.layer.getBounds())}catch(e){console.log(e)}this.map.addLayer(this.layer)},geometrySelectEvent(e){if(!(this.meta&&this.meta.disabled)){if(this.current=e.target,this.points=[],e.target._latlngs){let t=[];e.target._latlngs[0]instanceof Array?(this.geometryType="polygon",t=e.target.getLatLngs()[0]):(this.geometryType="line",t=e.target.getLatLngs()),t.map(i=>{this.points.push([i.lng,i.lat])})}else{this.geometryType="point";let t=e.target.getLatLng();this.points.push([t.lng,t.lat])}this.openSide=!0}},getData(){let e=this.layer.toGeoJSON();if(e.features.length>=2){let t=0;this.layer.eachLayer(i=>{t=t+1,t<e.features.length&&this.layer.removeLayer(i)})}if(e=this.layer.toGeoJSON(),e.features.length>=1)if(this.geometryType=="point"){this.drawValue=e;let t={lat:e.features[0].geometry.coordinates[1],lng:e.features[0].geometry.coordinates[0]};return JSON.stringify(t)}else return this.drawValue=e,JSON.stringify(e);else return null},changeBaseMap(e){this.map.removeLayer(this.baseMaps[this.currentBaseMap].baseMap),this.currentBaseMap=e,this.map.options.maxZoom=20,this.map.addLayer(this.baseMaps[e].baseMap)},createNewGeometry(){let e=null;if(this.new_point.lng!==null&&this.new_point.lat===null&&(e=this.new_point.lng),this.new_point.lng===null&&this.new_point.lat!==null&&(e=this.new_point.lat),this.new_point.lng!==null&&this.new_point.lat!==null&&(this.new_point.lng=this.new_point.lng*1,this.new_point.lat=this.new_point.lat*1,this.IsValidCoordinates([this.new_point.lng,this.new_point.lat])&&(this.points.push([this.new_point.lng,this.new_point.lat]),this.resetInput())),e){let t=e.split(" ");if(t.length>=1){let i=!1;t.map(s=>{let a=s.split("	");a.length>=2?(a[0]=a[0]*1,a[1]=a[1]*1,this.IsValidCoordinates([a[0],a[1]])&&this.points.push(a)):i=!0}),i||this.resetInput()}}},resetInput(){this.new_point={lng:null,lat:null},this.$refs.lng.focus()},IsValidCoordinates(e){return e[0]&&e[1]?(e[0]=e[0]*1,e[1]=e[1]*1,this.longitude(e[0])&&this.latitude(e[1])):!1},longitude(e){return!!(this.isNumber(e)&&this.between(e,-180,180))},latitude(e){return!!(this.isNumber(e)&&this.between(e,-90,90))},isNumber(e){return typeof e=="number"},between(e,t,i){return t<=e&&i>=e}},watch:{drawValue(e,t){},value_field_form(e,t){e&&this.handleSubmit()},itemValue(e,t){e&&!t&&this.setElement(),!e&&!t&&this.editMode&&this.initMap()},do_render(e){e?this.editMode?this.itemValue===null&&this.initMap():this.initMap():this.destroy()},options(){this.meta.options&&(this.formInline.search_value=this.meta.options,this.handleSubmit())}}},ie={class:"geographic"},ae=["id"],se={id:"base-maps"},re=["onClick"],oe=o("hr",null,null,-1),le=o("span",null,"Line",-1),ne=o("hr",null,null,-1),he=["onUpdate:modelValue"],pe=["onUpdate:modelValue"];function ue(e,t,i,s,a,r){const p=f("RightSquareOutlined"),n=f("LeftSquareOutlined"),u=f("a-button"),g=f("a-radio"),J=f("a-radio-group"),R=f("lambda-form-item");return h(),d(R,{label:e.label,name:e.model.component,meta:e.meta},{default:c(()=>[o("div",ie,[o("div",{class:"geographic-mapx",id:`geographic_${e.model.component}`,style:{height:"100%",width:"100%",border:"1px solid #ccc"}},null,8,ae),o("div",se,[o("ul",null,[(h(!0),A(B,null,z(a.baseMaps,(l,b)=>(h(),A("li",{key:b},[o("a",{href:"javascript:;",onClick:w=>r.changeBaseMap(b),class:O(b==a.currentBaseMap?"active":"")},m(l.title),11,re)]))),128))])]),o("div",{id:"side_bar",class:O(a.openSide?"open":"")},[y(u,{onClick:t[0]||(t[0]=l=>a.openSide=!a.openSide),class:O(a.openSide?"side-toggle show":"side-toggle")},{icon:c(()=>[a.openSide?(h(),d(p,{key:0})):(h(),d(n,{key:1}))]),_:1},8,["class"]),o("h3",null,m(r.lang.graphicsManagement),1),oe,a.allowMultiGeometryTypes?(h(),d(J,{key:0,value:a.geometryType,"onUpdate:value":t[1]||(t[1]=l=>a.geometryType=l),class:"geometry_type"},{default:c(()=>[y(g,{value:"point",disabled:a.current!==null},{default:c(()=>[o("span",null,m(r.lang.point),1)]),_:1},8,["disabled"]),y(g,{value:"line",disabled:a.current!==null},{default:c(()=>[le]),_:1},8,["disabled"]),y(g,{value:"polygon",disabled:a.current!==null},{default:c(()=>[o("span",null,m(r.lang.polygon),1)]),_:1},8,["disabled"])]),_:1},8,["value"])):k("",!0),ne,o("table",null,[o("thead",null,[o("tr",null,[o("th",null,m(r.lang.longitude),1),o("th",null,m(r.lang.latitude),1)])]),o("tbody",null,[(h(!0),A(B,null,z(a.points,(l,b)=>(h(),A("tr",{key:b},[o("td",null,[M(o("input",{type:"text","onUpdate:modelValue":w=>l[0]=w},null,8,he),[[S,l[0]]])]),o("td",null,[M(o("input",{type:"text","onUpdate:modelValue":w=>l[1]=w},null,8,pe),[[S,l[1]]])])]))),128)),o("tr",null,[o("td",null,[M(o("input",{type:"text",ref:"lng","onUpdate:modelValue":t[2]||(t[2]=l=>a.new_point.lng=l),onChange:t[3]||(t[3]=(...l)=>r.createNewGeometry&&r.createNewGeometry(...l))},null,544),[[S,a.new_point.lng]])]),o("td",null,[M(o("input",{type:"text",ref:"lat","onUpdate:modelValue":t[4]||(t[4]=l=>a.new_point.lat=l),onChange:t[5]||(t[5]=(...l)=>r.createNewGeometry&&r.createNewGeometry(...l))},null,544),[[S,a.new_point.lat]])])])])]),a.points.length>=1?(h(),d(u,{key:1,type:"success",onClick:r.saveGraphic},{default:c(()=>[V(m(r.lang.save),1)]),_:1},8,["onClick"])):k("",!0),a.points.length>=1?(h(),d(u,{key:2,type:"warning",onClick:r.cancelGraphic},{default:c(()=>[V(m(r.lang.cancel),1)]),_:1},8,["onClick"])):k("",!0)],2)])]),_:1},8,["label","name","meta"])}const Se=I(te,[["render",ue]]);export{Se as default};
