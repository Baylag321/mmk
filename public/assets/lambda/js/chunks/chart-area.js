(self.webpackChunk=self.webpackChunk||[]).push([[5470],{34155:t=>{var e,i,n=t.exports={};function a(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function r(t){if(e===setTimeout)return setTimeout(t,0);if((e===a||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(i){try{return e.call(null,t,0)}catch(i){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:a}catch(t){e=a}try{i="function"==typeof clearTimeout?clearTimeout:s}catch(t){i=s}}();var o,l=[],h=!1,u=-1;function c(){h&&o&&(h=!1,o.length?l=o.concat(l):u=-1,l.length&&m())}function m(){if(!h){var t=r(c);h=!0;for(var e=l.length;e;){for(o=l,l=[];++u<e;)o&&o[u].run();u=-1,e=l.length}o=null,h=!1,function(t){if(i===clearTimeout)return clearTimeout(t);if((i===s||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(t);try{i(t)}catch(e){try{return i.call(null,t)}catch(e){return i.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function f(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];l.push(new p(t,e)),1!==l.length||h||r(m)},p.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=f,n.addListener=f,n.once=f,n.off=f,n.removeListener=f,n.removeAllListeners=f,n.emit=f,n.prependListener=f,n.prependOnceListener=f,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},41979:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>r});var n=i(9669),a=i.n(n);const s={props:["axis","lines","type","chart_title","hideTitle","filters","hideZoom","chartTitle","chartData","xData","isRest","minH","chartColor"],methods:{getSeries(){},callData(){this.axis.length>=1&&this.lines.length>=1&&a().post("/ve/get-data",{axis:this.axis,lines:this.lines,filters:this.filters}).then((t=>{this.elementData=t.data,this.initChart()})).catch((t=>{console.log(t)}))},initChart(){this.instance&&(this.instance.dispose(),this.instance=null);var t=this.$el,e=t.parentElement;t.style.height=e.offsetHeight+"px";var i=window.echarts.init(t,"light");this.instance=i;let n=[],a=[];this.axis.map((t=>{this.elementData.map((e=>{n.push(`${e[t.name]}`)}))}));let s=[];this.lines.map((t=>{let e=[];this.elementData.map((i=>{e.push(i[t.name])})),"AreaChart"==this.type&&a.push({name:t.title,type:"line",smooth:!0,areaStyle:{},data:e}),"LineChart"==this.type&&a.push({name:t.title,type:"line",smooth:!0,data:e}),"ColumnChart"==this.type&&a.push({name:t.title,type:"bar",smooth:!0,data:e}),null!=t.color&&""!=t.color&&s.push(t.color)})),this.axis.length>=1&&this.lines.length>=1&&i.setOption({title:this.hideTitle?void 0:{text:this.chart_title,textStyle:{fontFamily:"Arial",fontWeight:"normal"}},tooltip:{trigger:"axis",position:function(t){return[t[0],"10%"]}},legend:{data:this.lines.map((t=>t.title)),align:"left",left:10,top:25},toolbox:{feature:{saveAsImage:{title:"Татах"},magicType:{type:["line","bar"],title:{line:"Шугман",bar:"Багнан"}}}},xAxis:{type:"category",boundaryGap:!0,data:n},yAxis:{type:"value",scale:!0,max:function(t){return t.max-0},min:function(t){return t.min-0},boundaryGap:[0,"100%"]},dataZoom:this.hideZoom?void 0:[{startValue:n[0]},{type:"inside"}],series:a,color:s.length>=1?s:void 0}),setTimeout((()=>{this.initing=!1}),2100)},initRest(){this.instance&&(this.instance.dispose(),this.instance=null);var t=this.$el,e=t.parentElement;t.style.height=e.offsetHeight+"px";var i=window.echarts.init(t,"shine");this.instance=i,i.setOption({title:this.hideTitle?void 0:{text:this.chartTitle,textStyle:{fontFamily:"Arial",fontWeight:"normal"}},tooltip:{trigger:"axis",position:function(t){return[t[0],"10%"]}},legend:{data:this.chartData.map((t=>t.name)),align:"left",left:10,top:25},toolbox:{feature:{saveAsImage:{title:"Татах"},magicType:{type:["line","bar"],title:{line:"Шугман",bar:"Багнан"}}}},xAxis:{type:"category",boundaryGap:!0,data:this.xData},yAxis:{type:"value",scale:!0,boundaryGap:[0,"100%"]},dataZoom:this.hideZoom?void 0:[{startValue:this.xData[0]},{type:"inside"}],series:this.chartData,color:this.chartColor?this.chartColor:void 0})}},beforeMount(){this.id=`${"area"}-${Math.random().toString(36).substr(3,9)}`},mounted(){this.isRest?this.initRest():this.callData()},data:()=>({elementData:[],instance:null,timeout:null}),watch:{type:function(t){this.initChart()},axis:{handler:function(t,e){this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((()=>{this.callData()}),1200)},deep:!0},lines:{handler:function(t,e){this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((()=>{this.callData()}),1200)},deep:!0}}};const r=(0,i(51900).Z)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"chart",style:t.minH?"width: 100%; height: 100%; min-height: "+t.minH:"width: 100%; height: 100%;"})}),[],!1,null,null,null).exports}}]);