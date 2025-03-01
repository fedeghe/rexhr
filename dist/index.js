'use strict';
/*

   _         
  |_|___ ___ 
  | | . | -_|
 _| |___|___|
|___|  

Federico Ghedina <fedeghe@gmail.com>
❤️‍🔥 
~1.81KB

*/
var joe={};!function(e,t){var n=function(){},o=function(e,t){var n=Object.assign({},e);for(var o in t)t.hasOwnProperty(o)&&(n[o]=t[o]);return n},r=function(e){
var r=e.url,a=e.timeout,s=e.user||null,d=e.password||null,a=e.timeout,i=e.responseType,u=e.contentType,p=e.body||null,c=e.method||(p?"POST":"GET"),l=e.onCompleted||n,T=e.onLoad||n,E=e.onError||n,f=e.onAbort||n,m=e.onProgress||n,L=e.onLoadend||n,v=e.onLoadstart||n,y=e.onTimeout||n,h=e.headers||{},w=(e.withCredentials,
new XMLHttpRequest),x=!1;if(w){w.responseType=i,w.timeout=a||null,w.addEventListener("load",T),w.addEventListener("progress",m),w.addEventListener("error",E),w.addEventListener("timeout",y),
w.addEventListener("abort",f),w.addEventListener("loadend",function(){L(w)}),w.addEventListener("loadstart",function(){v(w)}),w.onreadystatechange=function(){if(w.readyState===XMLHttpRequest.DONE){
const e=w.status;if(!(0===e||e>=200&&e<400))throw E(w.error),w.abort(),new Error(r+" replied 404");!x&&l(w),x=!0}},"application/xml"===u&&w.overrideMimeType("text/xml"),p&&(h=o(h,{
"X-Requested-With":"XMLHttpRequest"}),t.FormData&&p instanceof t.FormData||(h=o(h,{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"})),p=new URLSearchParams(p)),w.open(c,r,!0,s,d)
;for(var C in h)w.setRequestHeader(C,h[C]);w.send(p)}return w};e.getJson=function(e){return r(o(e,{method:"GET",responseType:"json"}))},e.getXML=function(e){return r(o(e,{method:"GET",
responseType:"document",contentType:"application/xml"}))},["GET","POST","PUT","PATCH","DELETE","HEAD","OPTIONS","TRACE","CONNECT"].forEach(function(t){e[t.toLowerCase()]=function(e){return r(o(e,{
method:t,responseType:"text"}))}})}(joe,window),"object"==typeof exports&&(module.exports=joe);