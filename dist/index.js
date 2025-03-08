'use strict';
/*
                      .__           
_______   ____ ___  __|  |_________ 
\_  __ \_/ __ \\  \/  /  |  \_  __ \
 |  | \/\  ___/ >    <|   Y  \  | \/
 |__|    \___  >__/\_ \___|  /__|   
             \/      \/    \/

v. 0.0.7  

Federico Ghedina <fedeghe@gmail.com>  

~1.94KB of ❤️‍🔥   


*/
var rexhr={};!function(e,t){var n=function(){},o=function(e,t){var n=Object.assign({},e);for(var o in t)t.hasOwnProperty(o)&&(n[o]=t[o]);return n},r=function(e){
var r=e.url,a=e.timeout||0,s=e.user||null,i=e.password||null,d=e.responseType,p=e.contentType,u=e.body||null,c=e.method,l=e.onCompleted||n,T=e.onLoad||n,m=e.onError||n,E=e.onAbort||n,f=e.onProgress||n,L=e.onLoadend||n,h=e.onLoadstart||n,v=e.onTimeout||n,y=e.headers||{},w=!!e.withCredentials,x=new XMLHttpRequest,C=!1
;x.responseType=d,x.withCredentials=w,x.timeout=a||null,x.addEventListener("load",T),x.addEventListener("progress",f),x.addEventListener("error",m),x.addEventListener("timeout",v),
x.addEventListener("abort",E),x.addEventListener("loadend",function(){L(x)}),x.addEventListener("loadstart",function(){h(x)}),x.onreadystatechange=function(){if(x.readyState===XMLHttpRequest.DONE){
var e=x.status;(0===e||e>=200&&e<400)&&(!C&&l(x),C=!0)}},"application/xml"===p&&x.overrideMimeType("text/xml"),u&&(y=o(y,{"X-Requested-With":"XMLHttpRequest"}),
t.FormData&&u instanceof t.FormData||(y=o(y,{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"})),u=new URLSearchParams(u)),x.open(c,r,!0,s,i);for(var O in y)x.setRequestHeader(O,y[O])
;return x.send(u),x};e.getJson=function(e){return r(o(e,{method:"GET",responseType:"json",contentType:"application/json"}))},e.getXML=function(e){return r(o(e,{method:"GET",responseType:"document",
contentType:"application/xml"}))},"GET POST PUT PATCH DELETE HEAD OPTIONS TRACE CONNECT".split(/\s/).forEach(function(t){e[t.toLowerCase()]=function(e){return r(o({method:t,responseType:"text"},e))}})
}(rexhr,window),"object"==typeof exports&&(module.exports=rexhr);