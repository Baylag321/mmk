import{a as i}from"./common.33f268d0.js";import{b as u}from"./entry.c8558833.js";import{m as $}from"./ant.edd72bf4.js";const s="https://dms.ulaanbaatar.mn/arcgis/rest/services/Manaikhoroo_II",f=async()=>{try{let o=await i.get(u+"/arcgis/token");if(o.data.token)return o.data.token.token;m()}catch{m()}},m=()=>{$.error("ArcGIS server \u0442\u044D\u0439 \u0445\u043E\u043B\u0431\u043E\u0433\u0434\u043E\u0436 \u0447\u0430\u0434\u0441\u0430\u043D\u0433\u04AF\u0439 !!!")},h=async()=>{let o=await f(),r=await i.get(`${s}?f=json&token=${o}`,{transformRequest:(a,t)=>{delete t.common["X-CSRF-TOKEN"],delete t["X-CSRF-TOKEN"],delete t.Authorization,delete t.common["X-Requested-With"],delete t.common.Authorization}}),n=[];if(r.data.folders.length>=1)r.data.folders.map(async(a,t)=>{let e={value:`${s}${a}`,label:a},l=await d(`${s}/${a}`,o);l.length>=1&&(e.children=l),n.push(e)});else{let a={value:`${s}`,label:"root"},t=await d(`${s}`,o);t.length>=1&&(a.children=t),n.push(a)}return{layers:n,token:o}},d=async(o,r)=>{let n=await i.get(`${o}?f=pjson&token=${r}`,{transformRequest:(t,e)=>{delete e.common["X-CSRF-TOKEN"],delete e["X-CSRF-TOKEN"],delete e.Authorization,delete e.common["X-Requested-With"],delete e.common.Authorization}}),a=[];if(n.data.services)for(const t of n.data.services){n.data.services.indexOf(t);let e=t.name.split("/");if(t.type==="FeatureServer"){let l=await p(`${o}/${e[1]}/${t.type}`,r),c={value:`${o}/${e[1]}/${t.type}`,label:`FeatureService - ${e[1]}`};l.length>=1&&(c.children=l),a.push(c)}else a.push({value:`${o}/${e[1]}/${t.type}`,label:`${t.type} - ${e[1]}`})}return a},p=async(o,r)=>{let n=await i.get(`${o}?f=pjson&token=${r}`,{transformRequest:(t,e)=>{delete e.common["X-CSRF-TOKEN"],delete e["X-CSRF-TOKEN"],delete e.Authorization,delete e.common["X-Requested-With"],delete e.common.Authorization}}),a=[];return n.data.layers.map((t,e)=>{a.push({value:`${o}/${e}`,label:t.name})}),a},v=async(o,r)=>await i.get(`${o}?f=pjson&token=${r}`,{transformRequest:(n,a)=>{delete a.common["X-CSRF-TOKEN"],delete a["X-CSRF-TOKEN"],delete a.Authorization,delete a.common["X-Requested-With"],delete a.common.Authorization}});export{v as L,h as g};
