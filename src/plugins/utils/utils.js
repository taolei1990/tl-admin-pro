/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/@pureadmin/utils@1.8.5/dist/iife.global.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
"use strict";var PureUtils=(()=>{var v=Object.defineProperty;var At=Object.getOwnPropertyDescriptor;var St=Object.getOwnPropertyNames;var Tt=Object.prototype.hasOwnProperty;var $t=(t,n)=>{for(var e in n)v(t,e,{get:n[e],enumerable:!0})},kt=(t,n,e,r)=>{if(n&&typeof n=="object"||typeof n=="function")for(let o of St(n))!Tt.call(t,o)&&o!==e&&v(t,o,{get:()=>n[o],enumerable:!(r=At(n,o))||r.enumerable});return t};var Ct=t=>kt(v({},"__esModule",{value:!0}),t);var sn={};$t(sn,{addClass:()=>ce,addZero:()=>U,addition:()=>ke,allowMouseEvent:()=>jt,appendFieldByUniqueId:()=>Et,average:()=>$e,banMouseEvent:()=>It,bd09togcj02:()=>we,buildHierarchyTree:()=>wt,buildPrefixUUID:()=>tn,buildUUID:()=>Xe,centsToDollars:()=>Lt,clone:()=>me,cloneDeep:()=>he,createYear:()=>Re,darken:()=>xe,dataURLtoBlob:()=>P,dateFormat:()=>m,debounce:()=>Ie,delay:()=>K,deleteChildren:()=>yt,deviceDetection:()=>ve,divisionOperation:()=>Oe,dollarsToCents:()=>Ot,downloadByBase64:()=>gt,downloadByData:()=>pt,downloadByOnlineUrl:()=>Pe,downloadByUrl:()=>Be,exceedMathMax:()=>M,extractPathList:()=>xt,formDataHander:()=>Fe,gcj02tobd09:()=>Me,gcj02towgs84:()=>Ae,getBrowserInfo:()=>Ue,getClass:()=>fe,getCurrentDate:()=>Ne,getCurrentWeek:()=>ft,getDecimalPlaces:()=>Dt,getLocation:()=>Ge,getNodeByUniqueId:()=>Mt,getPerformance:()=>Ye,getQueryMap:()=>Ke,handleTree:()=>Qe,hasCNChars:()=>oe,hasClass:()=>w,hasOwnProp:()=>at,hexToRgb:()=>W,intersection:()=>rn,is:()=>p,isAllEmpty:()=>b,isAlphabets:()=>ae,isArray:()=>it,isBase64:()=>Qt,isBoolean:()=>zt,isClient:()=>T,isDate:()=>Ht,isDef:()=>rt,isElement:()=>Zt,isEmail:()=>ee,isEmpty:()=>st,isEqual:()=>tt,isEqualArray:()=>mt,isEqualObject:()=>dt,isExistSpace:()=>z,isFunction:()=>H,isHex:()=>Gt,isIncludeAllChildren:()=>nn,isJSON:()=>Vt,isLeapYear:()=>_t,isLowerCase:()=>se,isNull:()=>Y,isNullAndUnDef:()=>Ft,isNullOrUnDef:()=>ot,isNumber:()=>Yt,isObject:()=>y,isPhone:()=>te,isPostCode:()=>re,isPromise:()=>qt,isQQ:()=>ne,isRegExp:()=>Jt,isRgb:()=>Kt,isRgba:()=>Xt,isServer:()=>S,isString:()=>d,isUnDef:()=>_,isUpperCase:()=>ie,isUrl:()=>q,isWindow:()=>Wt,lighten:()=>ye,max:()=>Se,min:()=>Te,monthDays:()=>De,multiplication:()=>Le,nameCamelize:()=>He,nameHyphenate:()=>_e,numberToChinese:()=>G,openLink:()=>X,out_of_china:()=>Q,priceToThousands:()=>Nt,priceUppercase:()=>Rt,randomColor:()=>be,removeAllSpace:()=>F,removeBothSidesSpace:()=>Pt,removeClass:()=>ue,removeLeftSpace:()=>vt,removeRightSpace:()=>Ut,rgbToHex:()=>Z,splitNum:()=>Ze,storageLocal:()=>qe,storageSession:()=>ze,subAfter:()=>bt,subBefore:()=>ht,subBetween:()=>Ve,subBothSides:()=>Je,subTextAddEllipsis:()=>We,subtraction:()=>Ce,sum:()=>lt,swapOrder:()=>on,throttle:()=>je,toggleClass:()=>le,urlToBase64:()=>B,uuid:()=>en,wgs84togcj02:()=>Ee});var U=t=>{let n=parseFloat(t);if(isNaN(n))return!1;n=Math.round(t*100)/100;let e=n.toString(),r=e.indexOf(".");for(r<0&&(r=e.length,e+=".");e.length<=r+2;)e+="0";return e},Lt=(t,n=!0)=>{let e=t;e=t*.01,e+="";let r=e.indexOf(".")>-1?/(\d{1,3})(?=(?:\d{3})+\.)/g:/(\d{1,3})(?=(?:\d{3})+$)/g;return e=e.replace(r,"$1"),n?U(e):e},Ot=(t,n=100)=>{let e=0,r=t.toString(),o=n.toString();try{e+=r.split(".")[1].length}catch{}try{e+=o.split(".")[1].length}catch{}return Number(r.replace(".",""))*Number(o.replace(".",""))/Math.pow(10,e)},Dt=t=>(t=t.toString(),t.includes(".")?t.toString().split(".")[1].length:0),Rt=(t,n="\u6574")=>{let e=["\u96F6","\u58F9","\u8D30","\u53C1","\u8086","\u4F0D","\u9646","\u67D2","\u634C","\u7396"],r=["","\u62FE","\u4F70","\u4EDF"],o=["","\u4E07","\u4EBF","\u5146"],s=["\u89D2","\u5206","\u6BEB","\u5398"],i="\u5143",l,c,u="",R;if(t==""||(t=parseFloat(t),t>=1e15))return"";if(t==0)return u=e[0]+i,u;t=t.toString(),t.indexOf(".")==-1?(l=t,c="",i=`\u5143${n}`):(R=t.split("."),l=R[0],c=R[1].substr(0,4));let x=0,N=0,h,I,j,et,nt=0;if(parseInt(l,10)>0){x=0,N=l.length;for(let g=0;g<N;g++)h=l.substr(g,1),I=N-g-1,et=I/4,j=I%4,h=="0"?x++:(x>0&&(u+=e[0]),x=0,u+=e[parseInt(h)]+r[j]),j==0&&x<4&&(u+=o[et]);u+=i}if(c!=""){nt=c.length;for(let g=0;g<nt;g++)h=c.substr(g,1),h!="0"&&(u+=e[Number(h)]+s[g])}return u==""&&(u+=e[0]+i),u},Nt=t=>{if(t){if(t=U(t),t=t.toString().replace(/\$|\,/g,""),t==""||isNaN(t))return"num must be number type";let n=t.indexOf("-")>0?"-":"",e=t.indexOf(".")>0?t.substr(t.indexOf(".")):"";if(e=e.length>1?e:"",t=t.indexOf(".")>0?t.substring(0,t.indexOf(".")):t,e==""){if(t.length>1&&t.substr(0,1)=="0")return"num must be number type"}else if(t.length>1&&t.substr(0,1)=="0")return"num must be number type";for(let r=0;r<Math.floor((t.length-(1+r))/3);r++)t=t.substring(0,t.length-(4*r+3))+","+t.substring(t.length-(4*r+3));return n+t+e}};function A(t){t.preventDefault()}var It=t=>{function n(e){e==="add"?t.forEach(r=>{document.addEventListener(r,A,{passive:!1})}):t.forEach(r=>{document.removeEventListener(r,A)})}document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"?n("add"):document.visibilityState==="hidden"&&(n("remove"),document.removeEventListener("visibilitychange",A))}),n("add")},jt=t=>{t.forEach(n=>{document.removeEventListener(n,A)})};function P(t){let n=t.split(","),r=n[0].match(/:(.*?);/)[1],o=window.atob(n[1]),s=o.length,i=new Uint8Array(s);for(;s--;)i[s]=o.charCodeAt(s);return new Blob([i],{type:r})}function B(t,n,e){return new Promise((r,o)=>{let s=document.createElement("CANVAS"),i=s.getContext("2d"),a=new Image;a.crossOrigin="",a.onload=function(){if(!s||!i)return o();s.height=a.height,s.width=a.width,i.drawImage(a,0,0);let l=s.toDataURL(n||"image/png",e);s=null,r(l)},a.src=t})}var vt=t=>t.replace(/^\s*/,""),Ut=t=>t.replace(/(\s*$)/g,""),Pt=t=>t.replace(/^\s*|\s*$/g,""),F=t=>t.replace(/\s*/g,"");var Bt=Object.prototype.toString;function p(t,n){return Bt.call(t)===`[object ${n}]`}function y(t){return t!==null&&p(t,"Object")}function rt(t){return typeof t<"u"}function _(t){return!rt(t)}function Y(t){return t===null}function Ft(t){return Y(t)&&_(t)}function ot(t){return Y(t)||_(t)}function st(t){return it(t)||d(t)?t.length===0:t instanceof Map||t instanceof Set?t.size===0:y(t)?Object.keys(t).length===0:!1}function b(t){return!!(st(t)||ot(t))}function Ht(t){return p(t,"Date")}function _t(t){return t%4===0&&(t%100!==0||t%400===0)}function Yt(t){return p(t,"Number")}function qt(t){return p(t,"Promise")&&y(t)&&H(t.then)&&H(t.catch)}function d(t){return p(t,"String")}function H(t){return typeof t=="function"}function zt(t){return p(t,"Boolean")}function Jt(t){return p(t,"RegExp")}function it(t){return t&&Array.isArray(t)}function Vt(t){if(d(t))try{let n=JSON.parse(t);return!!(y(n)&&n)}catch{return!1}return!1}function Wt(t){return typeof window<"u"&&p(t,"Window")}function Zt(t){return y(t)&&!!t.tagName}var Qt=t=>{if(t===""||t.trim()==="")return!1;try{return btoa(atob(t))==t}catch{return!1}},Gt=t=>/^#[a-fA-F0-9]{3}$|#[a-fA-F0-9]{6}$/.test(t),Kt=t=>/^rgb\((\s*\d+\s*,?){3}\)$/.test(t),Xt=t=>/^rgba\((\s*\d+\s*,\s*){3}\s*\d(\.\d+)?\s*\)$/.test(t),S=typeof window>"u",T=!S;function q(t){let n="^((https|http|ftp|rtsp|mms)?://)(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].[a-z]{2,6})(:[0-9]{1,4})?((/?)|(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";return new RegExp(n,"ig").test(t)}function te(t){return/^[1](([3][0-9])|([4][0,1,4-9])|([5][0-3,5-9])|([6][2,5,6,7])|([7][0-8])|([8][0-9])|([9][0-3,5-9]))[0-9]{8}$/.test(t)}function ee(t){return/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(t)}function ne(t){return/^[1-9][0-9]{4,12}$/.test(t.toString())}function re(t){return/^[1-9][0-9]{5}$/.test(t.toString())}function oe(t,n){let e="[\u4E00-\u9FFF",r="\u3002\uFF1B\uFF0C\uFF1A\u201C\u201D\uFF08\uFF09\u3001\uFF1F\u300A\u300B\uFF01\u3010\u3011\uFFE5";if(n?.pure&&(t=F(t)),n?.all){let o;return n?.unicode?o=new RegExp(`(^${e}${r}${n?.unicode}]+$)`,"g"):n?.replaceUnicode?o=new RegExp(`(^${e}${n?.replaceUnicode}]+$)`,"g"):o=new RegExp(`(^${e}${r}]+$)`,"g"),o.test(t)}else{let o;return n?.unicode?o=new RegExp(`(${e}${r}${n?.unicode}]+)`,"g"):n?.replaceUnicode?o=new RegExp(`(${e}${n?.replaceUnicode}]+)`,"g"):o=new RegExp(`(${e}${r}]+)`,"g"),o.test(t)}}function se(t){return/^[a-z]+$/.test(t)}function ie(t){return/^[A-Z]+$/.test(t)}function ae(t){return/^[A-Za-z]+$/.test(t)}function z(t){return!!new RegExp(/\s+/g).test(t)}var w=(t,n)=>!!t?.className.match(new RegExp("(\\s|^)"+n+"(\\s|$)")),ce=(t,n,e)=>{w(t,n)||(t.className+=" "+n),e&&!w(t,e)&&(t.className+=" "+e)},ue=(t,n,e)=>{if(w(t,n)){let r=new RegExp("(\\s|^)"+n+"(\\s|$)");t.className=t.className.replace(r," ").trim()}if(e&&w(t,e)){let r=new RegExp("(\\s|^)"+e+"(\\s|$)");t.className=t.className.replace(r," ").trim()}},le=(t,n,e)=>{let r=e||document.body,{className:o}=r,s=o.replace(n,"").trim().split(/\s+/).join(" ");r.className=t?`${s} ${n}`:s},fe=t=>z(t?.className)?t?.className.split(" "):t?.className;var ge=Object.prototype.toString;function at(t,n){return t&&t.hasOwnProperty?t.hasOwnProperty(n):!1}function pe(t,n,e){if(t)if(t.forEach)t.forEach(n,e);else for(let r=0,o=t.length;r<o;r++)n.call(e,t[r],r,t)}function de(t,n,e){if(t)for(let r in t)at(t,r)&&n.call(e,t[r],r,t)}function J(t,n){let e=t.__proto__.constructor;return n?new e(n):new e}function $(t,n){return n?V(t,n):t}function V(t,n){if(t)switch(ge.call(t)){case"[object Object]":{let e=Object.create(t.__proto__);return de(t,function(r,o){e[o]=$(r,n)}),e}case"[object Date]":case"[object RegExp]":return J(t,t.valueOf());case"[object Array]":case"[object Arguments]":{let e=[];return pe(t,function(r){e.push($(r,n))}),e}case"[object Set]":{let e=J(t);return e.forEach(function(r){e.add($(r,n))}),e}case"[object Map]":{let e=J(t);return e.forEach(function(r){e.set($(r,n))}),e}}return t}function me(t,n){return t&&V(t,n)}function he(t){return t&&V(t,!0)}var be=t=>{let n=t?.type??"rgb",e=t?.num??0;if(e===0)switch(n){case"rgb":return window.crypto.getRandomValues(new Uint8Array(3)).toString();case"hex":return`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,`${Math.random()*10}`)}`;case"hsl":return[360*Math.random(),`${100*Math.random()}%`,`${100*Math.random()}%`].toString()}else switch(n){case"rgb":let r=[];for(let i=0;i<e;i++)r.push(window.crypto.getRandomValues(new Uint8Array(3)).toString());return r;case"hex":let o=[];for(let i=0;i<e;i++)o.push(`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,`${Math.random()*10}`)}`);return o;case"hsl":let s=[];for(let i=0;i<e;i++)s.push([360*Math.random(),`${100*Math.random()}%`,`${100*Math.random()}%`].toString());return s}},W=t=>{let n=t.replace("#","").match(/../g);for(let e=0;e<3;e++)n[e]=parseInt(n[e],16);return n},Z=(t,n,e)=>{let r=[t.toString(16),n.toString(16),e.toString(16)];for(let o=0;o<3;o++)r[o].length==1&&(r[o]=`0${r[o]}`);return`#${r.join("")}`},xe=(t,n)=>{let e=W(t);for(let r=0;r<3;r++)e[r]=Math.floor(e[r]*(1-n));return Z(e[0],e[1],e[2])},ye=(t,n)=>{let e=W(t);for(let r=0;r<3;r++)e[r]=Math.floor((255-e[r])*n+e[r]);return Z(e[0],e[1],e[2])};var k=52.35987755982988,f=3.141592653589793,C=6378245,L=.006693421622965943;function ct(t,n){let e=+t,r=+n,o=-100+2*e+3*r+.2*r*r+.1*e*r+.2*Math.sqrt(Math.abs(e));return o+=(20*Math.sin(6*e*f)+20*Math.sin(2*e*f))*2/3,o+=(20*Math.sin(r*f)+40*Math.sin(r/3*f))*2/3,o+=(160*Math.sin(r/12*f)+320*Math.sin(r*f/30))*2/3,o}function ut(t,n){let e=+t,r=+n,o=300+t+2*r+.1*e*e+.1*e*r+.1*Math.sqrt(Math.abs(e));return o+=(20*Math.sin(6*e*f)+20*Math.sin(2*e*f))*2/3,o+=(20*Math.sin(e*f)+40*Math.sin(e/3*f))*2/3,o+=(150*Math.sin(e/12*f)+300*Math.sin(e/30*f))*2/3,o}function we(t,n){let e=+t,r=+n,o=e-.0065,s=r-.006,i=Math.sqrt(o*o+s*s)-2e-5*Math.sin(s*k),a=Math.atan2(s,o)-3e-6*Math.cos(o*k),l=i*Math.cos(a),c=i*Math.sin(a);return[l,c]}function Me(t,n){let e=+t,r=+n,o=Math.sqrt(e*e+r*r)+2e-5*Math.sin(r*k),s=Math.atan2(r,e)+3e-6*Math.cos(e*k),i=o*Math.cos(s)+.0065,a=o*Math.sin(s)+.006;return[i,a]}function Ee(t,n){let e=+t,r=+n;if(Q(e,r))return[e,r];{let o=ct(e-105,r-35),s=ut(e-105,r-35),i=r/180*f,a=Math.sin(i);a=1-L*a*a;let l=Math.sqrt(a);o=o*180/(C*(1-L)/(a*l)*f),s=s*180/(C/l*Math.cos(i)*f);let c=r+o;return[e+s,c]}}function Ae(t,n){let e=+t,r=+n;if(Q(e,r))return[e,r];{let o=ct(e-105,r-35),s=ut(e-105,r-35),i=r/180*f,a=Math.sin(i);a=1-L*a*a;let l=Math.sqrt(a);o=o*180/(C*(1-L)/(a*l)*f),s=s*180/(C/l*Math.cos(i)*f);let c=r+o,u=e+s;return[e*2-u,r*2-c]}}function Q(t,n){let e=+t,r=+n;return!(e>73.66&&e<135.05&&r>3.86&&r<53.55)}var Se=t=>Math.max.apply(null,t),Te=t=>Math.min.apply(null,t),lt=t=>t.reduce((n,e)=>n+e),$e=t=>lt(t)/t.length,G=t=>{if(!t&&typeof t>"u")return"";if(Number(t)===0)return"\u96F6";let n=["\u96F6","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D","\u4E03","\u516B","\u4E5D","\u5341"],e=["","\u5341","\u767E","\u5343","\u4E07","\u4EBF","\u70B9",""],r=(""+t).replace(/(^0*)/g,"").split("."),o=0,s="";for(let i=r[0].length-1;i>=0;i--){switch(o){case 0:s=e[7]+s;break;case 4:new RegExp("0{4}//d{"+(r[0].length-i-1)+"}$").test(r[0])||(s=e[4]+s);break;case 8:s=e[5]+s,e[7]=e[5],o=0;break}o%4==2&&r[0].charAt(i+2)!=0&&r[0].charAt(i+1)==0&&(s=n[0]+s),r[0].charAt(i)!=0&&(s=n[r[0].charAt(i)]+e[o%4]+s),o++}if(r.length>1){s+=e[6];for(let i=0;i<r[1].length;i++)s+=n[r[1].charAt(i)]}return s=="\u4E00\u5341"&&(s="\u5341"),s.match(/^一/)&&s.length==3&&(s=s.replace("\u4E00","")),s};function M(t){let n=t>Math.pow(2,53);return n&&console.warn("The calculation length has exceeded the JS maximum security integer"),n}function O(t,n){let e=t.toString().split(".").length>1?t.toString().split(".")[1].length:0,r=n.toString().split(".").length>1?n.toString().split(".")[1].length:0;return Math.pow(10,Math.max(e,r))}function ke(t,n,e){let r=O(t,n),o=t*r+n*r;M(o);let s=o/r;return s=e||e?s.toFixed(e):s,Number(s)}function Ce(t,n,e){let r=O(t,n),o=t*r-n*r;M(o);let s=o/r;return s=e||e?s.toFixed(e):s,Number(s)}function Le(t,n,e){let r=O(t,n),o=t*r*(n*r);M(o);let s=o/(r*r);return s=e||e?s.toFixed(e):s,Number(s)}function Oe(t,n,e){let r=O(t,n),o=t*r/(n*r);return M(o),o=e||e?o.toFixed(e):o,Number(o)}function m(t){let n=new Date,e={"M+":n.getMonth()+1,"D+":n.getDate(),"H+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds()};/(Y+)/.test(t)&&(t=t.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length)));for(let r in e)new RegExp("("+r+")").test(t)&&(t=t.replace(RegExp.$1,RegExp.$1.length==1?e[r]:("00"+e[r]).substr((""+e[r]).length)));return t}function ft(t="\u661F\u671F"){let n=new Date().getDay();return`${t}${n===0?"\u65E5":G(n)}`}function De(t){t=new Date(t);let n=t.getFullYear(),e=t.getMonth()+1;return new Date(n,e,0).getDate()}function Re(t){let n=[];for(let e=0;e<=new Date().getFullYear()-t;e++)n.push(t+e);return n.reverse()}function Ne(t){let n=t?.type??1,e=ft(t?.prefix??"\u661F\u671F"),r={ymd:m("YYYY\u5E74MM\u6708DD\u65E5"),hms:m("HH\u65F6mm\u5206ss\u79D2"),week:e},o={ymd:m("YYYY-MM-DD"),hms:m("HH-mm-ss"),week:e},s={ymd:m("YYYY/MM/DD"),hms:m("HH/mm/ss"),week:e};switch(n){case 1:return r;case 2:return o;case 3:return s;default:return r}}var K=(t=20)=>new Promise(n=>setTimeout(n,t)),Ie=(t,n=200,e=!1)=>{let r,o=n,s=void 0;return function(){r&&clearTimeout(r),e?(r||t.call(s,...arguments),r=setTimeout(()=>r=null,o)):r=setTimeout(()=>t.call(s,...arguments),o)}},je=(t,n=1e3)=>{let e;return function(){e||(e=setTimeout(()=>{t.call(void 0,...arguments),e=null},n))}};var ve=()=>{let t=navigator.userAgent.toLowerCase(),n=t.match(/midp/i)=="midp",e=t.match(/ucweb/i)=="ucweb",r=t.match(/android/i)=="android",o=t.match(/iphone os/i)=="iphone os",s=t.match(/windows ce/i)=="windows ce",i=t.match(/rv:1.2.3.4/i)=="rv:1.2.3.4",a=t.match(/windows mobile/i)=="windows mobile";return n||e||r||o||s||i||a},Ue=()=>{let t=navigator.userAgent.toLowerCase(),n=/(msie|firefox|chrome|opera|version).*?([\d.]+)/,e=t.match(n);return{browser:e?.[1].replace(/version/,"'safari"),version:e?.[2]}};var X=(t,n="_blank")=>{let e=document.createElement("a");e.setAttribute("href",t),e.setAttribute("target",n),e.setAttribute("rel","noreferrer noopener"),e.setAttribute("id","external");let r=document.getElementById("external");r&&document.body.removeChild(r),document.body.appendChild(e),e.click(),e.remove()};function Pe(t,n,e,r){B(t).then(o=>{gt(o,n,e,r)})}function gt(t,n,e,r){let o=P(t);pt(o,n,e,r)}function pt(t,n,e,r){let o=typeof r<"u"?[r,t]:[t],s=new Blob(o,{type:e||"application/octet-stream"}),i=window.URL.createObjectURL(s),a=document.createElement("a");a.style.display="none",a.href=i,a.setAttribute("download",n),typeof a.download>"u"&&a.setAttribute("target","_blank"),document.body.appendChild(a),a.click(),document.body.removeChild(a),window.URL.revokeObjectURL(i)}function Be(t,n,e="_self"){let r=window.navigator.userAgent.toLowerCase().indexOf("chrome")>-1,o=window.navigator.userAgent.toLowerCase().indexOf("safari")>-1;if(/(iP)/g.test(window.navigator.userAgent))return console.error("Your browser does not support download!"),!1;if(r||o){let s=document.createElement("a");if(s.href=t,s.target=e,s.download!==void 0&&(s.download=n||t.substring(t.lastIndexOf("/")+1,t.length)),document.createEvent){let i=document.createEvent("MouseEvents");return i.initEvent("click",!0,!0),s.dispatchEvent(i),!0}}return t.indexOf("?")===-1&&(t+="?download"),X(t,e),!0}function dt(t,n){if(!t||!n||t.length!==n.length)return!1;for(let e of Object.keys(t))if(!tt(t[e],n[e]))return!1;return!0}function mt(t,n){if(!t||!n)return!1;let{length:e}=t;if(e!==n.length)return!1;for(let r=0;r<e;r++)if(!tt(t[r],n[r]))return!1;return!0}function tt(t,n){let e=Object.prototype.toString.call(t);return e!==Object.prototype.toString.call(n)?!1:e==="[object Object]"?dt(t,n):e==="[object Array]"?mt(t,n):e==="[object Function]"?t===n?!0:t.toString()===n.toString():t===n}function Fe(t){let n=new FormData;return Object.keys(t).forEach(e=>{n.append(e,t[e])}),n}var He=t=>{let n=/-(\w)/g;return t.replace(n,(e,r)=>r?r.toUpperCase():"")},_e=t=>{let n=/\B([A-Z])/g;return t.replace(n,"-$1").toLowerCase()};function Ye(){if(S)return{};let t=window.performance.timing;return new Promise((n,e)=>{K(500).then(r=>{n({dns:(t.domainLookupEnd-t.domainLookupStart)/1e3,tcp:(t.connectEnd-t.connectStart)/1e3,request:(t.responseEnd-t.responseStart)/1e3,dom:(t.domComplete-t.domInteractive)/1e3,whiteScreen:(t.domComplete-t.navigationStart)/1e3})}).catch(r=>{e(r)})})}var E=class{storage;constructor(n){this.storage=n}setItem(n,e){b(this.storage)||this.storage.setItem(n,JSON.stringify(e))}getItem(n){if(!b(this.storage))return JSON.parse(this.storage.getItem(n))}removeItem(n){b(this.storage)||this.storage.removeItem(n)}clear(){b(this.storage)||this.storage.clear()}},D=class extends E{constructor(n){super(n)}},qe=()=>T?new D(window.localStorage):new D(""),ze=()=>T?new E(window.sessionStorage):new E("");function ht(t,n){return d(n)?t.substring(0,t.indexOf(n)):""}function bt(t,n){return d(n)?t.substring(t.lastIndexOf(n)+n.length,t.length):""}function Je(t,n){return d(n)?[ht(t,n),bt(t,n)]:[]}function Ve(t,n,e){if(!d(n)||!d(e))return"";let r=t.substring(t.indexOf(n)+n.length,t.length);return r.substring(0,r.indexOf(e))}function We(t,n=3){return t=t.toString(),t.length>n?t.substr(0,n)+"...":t}function Ze(t){return t?[...t+""].map(Number):""}var xt=t=>{if(!Array.isArray(t))return console.warn("tree must be an array"),[];if(!t||t.length===0)return[];let n=[];for(let e of t)e.children&&e.children.length>0&&xt(e.children),n.push(e.uniqueId);return n},yt=(t,n=[])=>{if(!Array.isArray(t))return console.warn("menuTree must be an array"),[];if(!t||t.length===0)return[];for(let[e,r]of t.entries())r.children&&r.children.length===1&&delete r.children,r.id=e,r.parentId=n.length?n[n.length-1]:null,r.pathList=[...n,r.id],r.uniqueId=r.pathList.length>1?r.pathList.join("-"):r.pathList[0],r.children&&r.children.length>0&&yt(r.children,r.pathList);return t},wt=(t,n=[])=>{if(!Array.isArray(t))return console.warn("tree must be an array"),[];if(!t||t.length===0)return[];for(let[e,r]of t.entries())r.id=e,r.parentId=n.length?n[n.length-1]:null,r.pathList=[...n,r.id],r.children&&r.children.length>0&&wt(r.children,r.pathList);return t},Mt=(t,n)=>{if(!Array.isArray(t))return console.warn("menuTree must be an array"),[];if(!t||t.length===0)return[];let e=t.find(o=>o.uniqueId===n);if(e)return e;let r=t.filter(o=>o.children).map(o=>o.children).flat(1);return Mt(r,n)},Et=(t,n,e)=>{if(!Array.isArray(t))return console.warn("menuTree must be an array"),[];if(!t||t.length===0)return[];for(let r of t){let o=r.children&&r.children.length>0;r.uniqueId===n&&Object.prototype.toString.call(e)==="[object Object]"&&Object.assign(r,e),o&&Et(r.children,n,e)}return t},Qe=(t,n,e,r)=>{if(!Array.isArray(t))return console.warn("data must be an array"),[];let o={id:n||"id",parentId:e||"parentId",childrenList:r||"children"},s={},i={},a=[];for(let c of t){let u=c[o.parentId];s[u]==null&&(s[u]=[]),i[c[o.id]]=c,s[u].push(c)}for(let c of t){let u=c[o.parentId];i[u]==null&&a.push(c)}for(let c of a)l(c);function l(c){if(s[c[o.id]]!==null&&(c[o.childrenList]=s[c[o.id]]),c[o.childrenList])for(let u of c[o.childrenList])l(u)}return a};function Ge(){return window.location}function Ke(t){if(!q(t))return console.error(`${t}\u4E0D\u7B26\u5408\u8D85\u94FE\u63A5\u89C4\u8303`),{};let n=t.indexOf("?"),r=t.slice(n+1).split("&"),o={};for(let s=0;s<r.length;s++)o[r[s].split("=")[0]]=r[s].split("=")[1];return o}var Xe=()=>{let t="",n=[];for(let e=0;e<=15;e++)n[e]=e.toString(16);for(let e=1;e<=36;e++)e===9||e===14||e===19||e===24?t+="-":e===15?t+=4:e===20?t+=n[Math.random()*4|8]:t+=n[Math.random()*16|0];return t.replace(/-/g,"")},tn=(t="")=>{let n=0,e=Date.now(),r=Math.floor(Math.random()*1e9);return n++,`${t}${r}${n}${String(e)}`},en=(t,n,e="")=>{let r="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),o=[],s;if(n=n||r.length,t)for(s=0;s<t;s++)o[s]=r[0|Math.random()*n];else{let i;for(o[8]=o[13]=o[18]=o[23]="-",o[14]="4",s=0;s<36;s++)o[s]||(i=0|Math.random()*16,o[s]=r[s==19?i&3|8:i])}return e?e+o.join(""):o.join("")};function nn(t,n){return t.every(e=>n.some(r=>r===e))}var rn=(...t)=>[...t].reduce((n,e)=>n.filter(r=>e.includes(r)));function on(t,n,e){return t[n]=t.splice(e,1,t[n])[0],t}return Ct(sn);})();
