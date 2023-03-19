(function(){"use strict";var e={7942:function(e,t,n){var i=n(9242),o=n(3396);function a(e,t,n,i,a,r){const s=(0,o.up)("Dashboard");return(0,o.wg)(),(0,o.j4)(s)}n(7658);var r=n(4870),s=n(2268),u=n(1483),l=n(22);const d=e=>{const t=l.lookupViaCity(e);if(t.length)return t[0].timezone;const n=l.findFromCityStateProvince(e);if(n.length)return n[0].timezone;const i=u.gr();for(const o in i)if(e===i[o].name)return i[o].name;return null},m=(e,t)=>{if(c(e)){const n=-1*u.EP(e.timezone).utcOffset-t.getTimezoneOffset(),i=new Date(e.year,e.month-1,e.day,e.hour,e.minutes,0,0),o=new Date(i.getTime()+60*n*1e3);return o}return t},c=e=>/^[1-3][0-9][0-9][0-9]$/.test(e.year)&&/(^[1-9]$|0[0-9]$|[0-1][0-2]$)/.test(e.month)&&/(^([0-9])$|([0-5][0-9])$)/.test(e.hour)&&/(^([0-9])$|([0-5][0-9])$)/.test(e.minutes),f=(e,t)=>{const n=u.EP(e).utcOffset,i=t.toUTCString(),o=new Date(i.replace("GMT","")),a=o.getHours();return o.setHours(a+n/60),new Date(o.toString())},g=e=>{const t=-1*e.getTimezoneOffset(),n=u.gr();for(const i in n)if(t===n[i].utcOffset)return n[i].name;return""},p=(e,t=new Date)=>{const n=d(e),i=f(n,t),o=i.toLocaleTimeString(),a=o.split(":"),r={timezone:n,month:String(i.getMonth()+1).padStart(2,"0"),day:String(i.getDate()).padStart(2,"0"),year:i.getFullYear(),hour:a[0].padStart(2,"0"),minutes:a[1].padStart(2,"0"),totalTime:i.getTime()};return r};var b=n(7139),v=n(7826);const h={id:"timezone-date-year-container"},y={id:"timezone-date"},T={id:"timezone-time"};var w={__name:"TimeZoneModal",props:{region:{default:""},index:{default:0},isEditable:{default:!1}},setup(e){const t=e,n=(0,b.oR)(),a=(0,r.iH)(t.index),s="draggable-area"+a.value;let u=(0,r.iH)({target:["#"+s+".timezone-modal"],draggable:!1,origin:!1,zoom:0});const l=p(t.region,n.getters.getBaseTime);let d=(0,r.iH)({timezone:l.timezone,month:l.month,day:l.day,year:l.year,hour:l.hour,minutes:l.minutes,totalTime:l.totalTime});const c=()=>{const e=n.getters.getTimeBoxList[t.index].totalTime===d.value.totalTime;if(!e){const e=m(d.value,n.getters.getBaseTime);n.commit("setBaseTime",e)}},f=()=>{const e=p(t.region,n.getters.getBaseTime);n.commit("updateCurrentTimeInTimeBaseList",t.index),d.value={timezone:e.timezone,month:e.month,day:e.day,year:e.year,hour:e.hour,minutes:e.minutes,totalTime:e.totalTime}},g=()=>{u.value.draggable=t.isEditable},w=({target:e,transform:t})=>{e.style.transform=t};return(0,o.YP)((()=>n.state.baseTime),f),(0,o.YP)((()=>t.isEditable),g),(e,t)=>((0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",{class:"timezone-modal",id:s},[(0,o._)("div",h,[(0,o._)("div",y,[(0,o.wy)((0,o._)("input",{type:"number",min:"1",max:"12",class:"editable-field",id:"timezone-month","onUpdate:modelValue":t[0]||(t[0]=e=>(0,r.SU)(d).month=e),onInput:c},null,544),[[i.nr,(0,r.SU)(d).month]]),(0,o.Uk)("/"),(0,o.wy)((0,o._)("input",{type:"number",class:"editable-field",id:"timezone-day","onUpdate:modelValue":t[1]||(t[1]=e=>(0,r.SU)(d).day=e),onInput:c},null,544),[[i.nr,(0,r.SU)(d).day]])]),(0,o.wy)((0,o._)("input",{type:"number",id:"timezone-year",class:"editable-field","onUpdate:modelValue":t[2]||(t[2]=e=>(0,r.SU)(d).year=e),onInput:c},null,544),[[i.nr,(0,r.SU)(d).year]])]),(0,o._)("div",T,[(0,o.wy)((0,o._)("input",{type:"number",min:"0",max:"23",class:"editable-field",id:"timezone-hour","onUpdate:modelValue":t[3]||(t[3]=e=>(0,r.SU)(d).hour=e),onInput:c},null,544),[[i.nr,(0,r.SU)(d).hour]]),(0,o.Uk)(": "),(0,o.wy)((0,o._)("input",{type:"number",min:"0",max:"59",class:"editable-field",id:"timezone-minutes","onUpdate:modelValue":t[4]||(t[4]=e=>(0,r.SU)(d).minutes=e),onInput:c},null,544),[[i.nr,(0,r.SU)(d).minutes]])]),(0,o.wy)((0,o._)("input",{id:"timezone-name",class:"editable-field","onUpdate:modelValue":t[5]||(t[5]=e=>(0,r.SU)(d).timezone=e)},null,512),[[i.nr,(0,r.SU)(d).timezone]])]),((0,o.wg)(),(0,o.j4)((0,o.LL)((0,r.SU)(v.ZP)),(0,o.dG)((0,r.SU)(u),{onDrag:w}),null,16))]))}};const x=w;var S=x;const U={class:"region-modal-container"},_={class:"input-form"},z=["onSubmit"],B=["disabled"],D=["disabled"],O={class:"editable-button"};var L={__name:"TimeZoneModals",setup(e){const t=(0,b.oR)(),n=(0,r.iH)(""),a=g(t.getters.getBaseTime),u={index:0,region:a,time:p(a,t.getters.getBaseTime)},l=(0,r.iH)([u]);let m=(0,r.iH)(!1);t.commit("addTimeBox",u);const c=()=>{const e=d(n.value);if(null===e)alert("Invalid region");else{const n={index:l.value.length,region:e,time:p(e,t.getters.getBaseTime)};l.value.push(n),t.commit("addTimeBox",n)}},f=()=>{m.value=!m.value},v=()=>{t.commit("setBaseTime",new Date)};return(e,t)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",U,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.value,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e},[(0,o.Wm)(S,{region:e.region,index:e.index,isEditable:(0,r.SU)(m)},null,8,["region","index","isEditable"])])))),128))]),(0,o._)("div",_,[(0,o._)("form",{class:"add-region",onSubmit:(0,i.iM)(c,["prevent"])},[(0,o._)("button",{disabled:(0,r.SU)(m)},"Add",8,B),(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),class:"add-button",placeholder:"region",disabled:(0,r.SU)(m)},null,8,D),[[i.nr,n.value]])],40,z),(0,o._)("div",O,[(0,o._)("button",{type:"button",id:"edit-button",onClick:f},(0,s.zw)((0,r.SU)(m)?"Add mode":"Edit mode"),1),(0,o._)("button",{type:"button",id:"edit-button",onClick:v},"Reset Time")])])],64))}};const k=L;var j=k;const C={class:"dashboard bg",background:"src/assets/background.png"};var H={__name:"Dashboard",setup(e){return(e,t)=>((0,o.wg)(),(0,o.iD)("div",C,[(0,o.Wm)(j)]))}};const E=H;var I=E,P={name:"App",components:{Dashboard:I}},V=n(89);const $=(0,V.Z)(P,[["render",a]]);var M=$,Y=(0,b.MT)({state:{baseTime:new Date,timeBoxLists:[]},mutations:{setBaseTime(e,t){e.baseTime=t},addTimeBox(e,t){e.timeBoxLists.push(t)},updateCurrentTimeInTimeBaseList(e){for(let t of e.timeBoxLists)t.time=p(t.region,e.baseTime)},updateCurrentTimeOfIndexList(e,t){e.timeBoxLists[t].time=p(e.timeBoxLists.region,e.baseTime)}},actions:{},getters:{getBaseTime(e){return e.baseTime},getTimeBoxList(e){return e.timeBoxLists}}});(0,i.ri)(M).use(Y).mount("#app")}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var a=t[i]={id:i,loaded:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=e,function(){var e=[];n.O=function(t,i,o,a){if(!i){var r=1/0;for(d=0;d<e.length;d++){i=e[d][0],o=e[d][1],a=e[d][2];for(var s=!0,u=0;u<i.length;u++)(!1&a||r>=a)&&Object.keys(n.O).every((function(e){return n.O[e](i[u])}))?i.splice(u--,1):(s=!1,a<r&&(r=a));if(s){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[i,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var o,a,r=i[0],s=i[1],u=i[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(u)var d=u(n)}for(t&&t(i);l<r.length;l++)a=r[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},i=self["webpackChunkjetlag"]=self["webpackChunkjetlag"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(7942)}));i=n.O(i)})();
//# sourceMappingURL=app.3cc295eb.js.map