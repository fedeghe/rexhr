'use strict';
/*
                      .__           
_______   ____ ___  __|  |_________ 
\_  __ \_/ __ \\  \/  /  |  \_  __ \
 |  | \/\  ___/ >    <|   Y  \  | \/
 |__|    \___  >__/\_ \___|  /__|   
             \/      \/    \/

v. 0.0.13  

Federico Ghedina <fedeghe@gmail.com>  

~1.97KB of ❤️‍🔥   


*/
var rexhr={};!function(e,t){var n=function(){},o=function(e,t){var n=Object.assign({},e);for(var o in t)t.hasOwnProperty(o)&&(n[o]=t[o]);return n},r=function(e){
var r=e.url,a=e.timeout||0,s=e.user||null,d=e.password||null,i=e.responseType,p=e.contentType,u=e.body||null,l=e.method,c=e.onCompleted||n,T=e.onLoad||n,f=e.onError||n,m=e.onAbort||n,E=e.onProgress||n,L=e.onLoadend||n,h=e.onLoadstart||n,y=e.onTimeout||n,v=e.headers||{},w=!!e.withCredentials,x=new XMLHttpRequest,C=!1
;x.responseType=i,x.withCredentials=w,x.timeout=a||null,x.addEventListener("load",T),x.addEventListener("progress",E),x.addEventListener("error",f),x.addEventListener("timeout",y),
x.addEventListener("abort",m),x.addEventListener("loadend",function(){L(x)}),x.addEventListener("loadstart",function(){h(x)}),x.onreadystatechange=function(){if(x.readyState===XMLHttpRequest.DONE){
var e=x.status;(0===e||e>=200&&e<400)&&(!C&&c(x),C=!0)}},"application/xml"===p&&x.overrideMimeType("text/xml"),u&&(v=o(v,{"X-Requested-With":"XMLHttpRequest"}),
t.FormData&&u instanceof t.FormData||(v=o(v,{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"})),u=new URLSearchParams(u)),x.open(l,r,!0,s,d);for(var g in v)x.setRequestHeader(g,v[g])
;return x.send(u),x};e.getJson=function(e){return r(o(e,{method:"GET",responseType:"json",contentType:"application/json"}))},e.getXML=function(e){return r(o(e,{method:"GET",responseType:"document",
contentType:"application/xml"}))},"GET POST PUT PATCH DELETE HEAD OPTIONS TRACE CONNECT".split(/\s/).forEach(function(t){e[t.toLowerCase()]=function(e){return r(o({method:t,responseType:"text"},e))}})
}(rexhr,"undefined"!=typeof global?global:window),"object"==typeof exports&&(module.exports=rexhr);