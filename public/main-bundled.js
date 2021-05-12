(()=>{var e={669:(e,t,r)=>{e.exports=r(609)},448:(e,t,r)=>{"use strict";var n=r(867),s=r(26),a=r(372),i=r(327),o=r(97),c=r(109),u=r(985),l=r(61);e.exports=function(e){return new Promise((function(t,r){var h=e.data,d=e.headers;n.isFormData(h)&&delete d["Content-Type"];var f=new XMLHttpRequest;if(e.auth){var p=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";d.Authorization="Basic "+btoa(p+":"+m)}var v=o(e.baseURL,e.url);if(f.open(e.method.toUpperCase(),i(v,e.params,e.paramsSerializer),!0),f.timeout=e.timeout,f.onreadystatechange=function(){if(f&&4===f.readyState&&(0!==f.status||f.responseURL&&0===f.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in f?c(f.getAllResponseHeaders()):null,a={data:e.responseType&&"text"!==e.responseType?f.response:f.responseText,status:f.status,statusText:f.statusText,headers:n,config:e,request:f};s(t,r,a),f=null}},f.onabort=function(){f&&(r(l("Request aborted",e,"ECONNABORTED",f)),f=null)},f.onerror=function(){r(l("Network Error",e,null,f)),f=null},f.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(l(t,e,"ECONNABORTED",f)),f=null},n.isStandardBrowserEnv()){var y=(e.withCredentials||u(v))&&e.xsrfCookieName?a.read(e.xsrfCookieName):void 0;y&&(d[e.xsrfHeaderName]=y)}if("setRequestHeader"in f&&n.forEach(d,(function(e,t){void 0===h&&"content-type"===t.toLowerCase()?delete d[t]:f.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(f.withCredentials=!!e.withCredentials),e.responseType)try{f.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&f.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&f.upload&&f.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){f&&(f.abort(),r(e),f=null)})),h||(h=null),f.send(h)}))}},609:(e,t,r)=>{"use strict";var n=r(867),s=r(849),a=r(321),i=r(185);function o(e){var t=new a(e),r=s(a.prototype.request,t);return n.extend(r,a.prototype,t),n.extend(r,t),r}var c=o(r(655));c.Axios=a,c.create=function(e){return o(i(c.defaults,e))},c.Cancel=r(263),c.CancelToken=r(972),c.isCancel=r(502),c.all=function(e){return Promise.all(e)},c.spread=r(713),c.isAxiosError=r(268),e.exports=c,e.exports.default=c},263:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},972:(e,t,r)=>{"use strict";var n=r(263);function s(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}s.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},s.source=function(){var e;return{token:new s((function(t){e=t})),cancel:e}},e.exports=s},502:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:(e,t,r)=>{"use strict";var n=r(867),s=r(327),a=r(782),i=r(572),o=r(185);function c(e){this.defaults=e,this.interceptors={request:new a,response:new a}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=o(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[i,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},c.prototype.getUri=function(e){return e=o(this.defaults,e),s(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,r){return this.request(o(r||{},{method:e,url:t,data:(r||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,r,n){return this.request(o(n||{},{method:e,url:t,data:r}))}})),e.exports=c},782:(e,t,r)=>{"use strict";var n=r(867);function s(){this.handlers=[]}s.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},s.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},s.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=s},97:(e,t,r)=>{"use strict";var n=r(793),s=r(303);e.exports=function(e,t){return e&&!n(t)?s(e,t):t}},61:(e,t,r)=>{"use strict";var n=r(481);e.exports=function(e,t,r,s,a){var i=new Error(e);return n(i,t,r,s,a)}},572:(e,t,r)=>{"use strict";var n=r(867),s=r(527),a=r(502),i=r(655);function o(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return o(e),e.headers=e.headers||{},e.data=s(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||i.adapter)(e).then((function(t){return o(e),t.data=s(t.data,t.headers,e.transformResponse),t}),(function(t){return a(t)||(o(e),t&&t.response&&(t.response.data=s(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},481:e=>{"use strict";e.exports=function(e,t,r,n,s){return e.config=t,r&&(e.code=r),e.request=n,e.response=s,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},185:(e,t,r)=>{"use strict";var n=r(867);e.exports=function(e,t){t=t||{};var r={},s=["url","method","data"],a=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],o=["validateStatus"];function c(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function u(s){n.isUndefined(t[s])?n.isUndefined(e[s])||(r[s]=c(void 0,e[s])):r[s]=c(e[s],t[s])}n.forEach(s,(function(e){n.isUndefined(t[e])||(r[e]=c(void 0,t[e]))})),n.forEach(a,u),n.forEach(i,(function(s){n.isUndefined(t[s])?n.isUndefined(e[s])||(r[s]=c(void 0,e[s])):r[s]=c(void 0,t[s])})),n.forEach(o,(function(n){n in t?r[n]=c(e[n],t[n]):n in e&&(r[n]=c(void 0,e[n]))}));var l=s.concat(a).concat(i).concat(o),h=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===l.indexOf(e)}));return n.forEach(h,u),r}},26:(e,t,r)=>{"use strict";var n=r(61);e.exports=function(e,t,r){var s=r.config.validateStatus;r.status&&s&&!s(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},527:(e,t,r)=>{"use strict";var n=r(867);e.exports=function(e,t,r){return n.forEach(r,(function(r){e=r(e,t)})),e}},655:(e,t,r)=>{"use strict";var n=r(867),s=r(16),a={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o,c={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(o=r(448)),o),transformRequest:[function(e,t){return s(t,"Accept"),s(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){c.headers[e]=n.merge(a)})),e.exports=c},849:e=>{"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},327:(e,t,r)=>{"use strict";var n=r(867);function s(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var a;if(r)a=r(t);else if(n.isURLSearchParams(t))a=t.toString();else{var i=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),i.push(s(t)+"="+s(e))})))})),a=i.join("&")}if(a){var o=e.indexOf("#");-1!==o&&(e=e.slice(0,o)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}},303:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},372:(e,t,r)=>{"use strict";var n=r(867);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,s,a,i){var o=[];o.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&o.push("expires="+new Date(r).toGMTString()),n.isString(s)&&o.push("path="+s),n.isString(a)&&o.push("domain="+a),!0===i&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},793:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},268:e=>{"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},985:(e,t,r)=>{"use strict";var n=r(867);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function s(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=s(window.location.href),function(t){var r=n.isString(t)?s(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},16:(e,t,r)=>{"use strict";var n=r(867);e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},109:(e,t,r)=>{"use strict";var n=r(867),s=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,a,i={};return e?(n.forEach(e.split("\n"),(function(e){if(a=e.indexOf(":"),t=n.trim(e.substr(0,a)).toLowerCase(),r=n.trim(e.substr(a+1)),t){if(i[t]&&s.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([r]):i[t]?i[t]+", "+r:r}})),i):i}},713:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},867:(e,t,r)=>{"use strict";var n=r(849),s=Object.prototype.toString;function a(e){return"[object Array]"===s.call(e)}function i(e){return void 0===e}function o(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==s.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function u(e){return"[object Function]"===s.call(e)}function l(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),a(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===s.call(e)},isBuffer:function(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:o,isPlainObject:c,isUndefined:i,isDate:function(e){return"[object Date]"===s.call(e)},isFile:function(e){return"[object File]"===s.call(e)},isBlob:function(e){return"[object Blob]"===s.call(e)},isFunction:u,isStream:function(e){return o(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:l,merge:function e(){var t={};function r(r,n){c(t[n])&&c(r)?t[n]=e(t[n],r):c(r)?t[n]=e({},r):a(r)?t[n]=r.slice():t[n]=r}for(var n=0,s=arguments.length;n<s;n++)l(arguments[n],r);return t},extend:function(e,t,r){return l(t,(function(t,s){e[s]=r&&"function"==typeof t?n(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=r(669),t=r.n(e);function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.injectHTML(),this.headerSearchIcon=document.querySelector(".header-search-icon"),this.overlay=document.querySelector(".search-overlay"),this.closeIcon=document.querySelector(".close-live-search"),this.inputField=document.querySelector("#live-search-field"),this.resultsArea=document.querySelector(".live-search-results"),this.loaderIcon=document.querySelector(".circle-loader"),this.typingWaitTimer,this.previousValue="",this.events()}var r,s;return r=e,(s=[{key:"events",value:function(){var e=this;this.inputField.addEventListener("keyup",(function(){return e.keyPressHandler()})),this.closeIcon.addEventListener("click",(function(){return e.closeOverlay()})),this.headerSearchIcon.addEventListener("click",(function(t){t.preventDefault(),e.openOverlay()}))}},{key:"keyPressHandler",value:function(){var e=this,t=this.inputField.value;""==t&&(clearTimeout(this.typingWaitTimer),this.hideLoaderIcon(),this.hideResultsArea()),""!=t&&t!=this.previousValue&&(clearTimeout(this.typingWaitTimer),this.showLoaderIcon(),this.hideResultsArea(),this.typingWaitTimer=setTimeout((function(){return e.sendRequest()}),750)),this.previousValue=t}},{key:"sendRequest",value:function(){var e=this;t().post("/search",{searchTerm:this.inputField.value}).then((function(t){console.log(t.data),e.renderResultsHTML(t.data)})).catch((function(){alert("Hello, the request failed.")}))}},{key:"renderResultsHTML",value:function(e){e.length?this.resultsArea.innerHTML='<div class="list-group shadow-sm">\n      <div class="list-group-item active"><strong>Search Results</strong> ('.concat(e.length>1?"".concat(e.length," items found"):"1 item found",")</div>\n      ").concat(e.map((function(e){var t=new Date(e.createdDate);return'<a href="/post/'.concat(e._id,'" class="list-group-item list-group-item-action">\n        <img class="avatar-tiny" src="').concat(e.author.avatar,'"> <strong>').concat(e.title,'</strong>\n        <span class="text-muted small">by ').concat(e.author.username," on ").concat(t.getMonth()+1,"/").concat(t.getDate(),"/").concat(t.getFullYear(),"</span>\n      </a>")})).join(""),"\n    </div>"):this.resultsArea.innerHTML='<p class="alert alert-danger text-center shadow-sm">Sorry, we could not find any results for that search.</p>',this.hideLoaderIcon(),this.showResultsArea()}},{key:"showLoaderIcon",value:function(){this.loaderIcon.classList.add("circle-loader--visible")}},{key:"hideLoaderIcon",value:function(){this.loaderIcon.classList.remove("circle-loader--visible")}},{key:"showResultsArea",value:function(){this.resultsArea.classList.add("live-search-results--visible")}},{key:"hideResultsArea",value:function(){this.resultsArea.classList.remove("live-search-results--visible")}},{key:"openOverlay",value:function(){var e=this;this.overlay.classList.add("search-overlay--visible"),setTimeout((function(){return e.inputField.focus()}),50)}},{key:"closeOverlay",value:function(){this.overlay.classList.remove("search-overlay--visible")}},{key:"injectHTML",value:function(){document.body.insertAdjacentHTML("beforeend",'<div class="search-overlay">\n    <div class="search-overlay-top shadow-sm">\n      <div class="container container--narrow">\n        <label for="live-search-field" class="search-overlay-icon"><i class="fas fa-search"></i></label>\n        <input type="text" id="live-search-field" class="live-search-field" placeholder="What are you interested in?">\n        <span class="close-live-search"><i class="fas fa-times-circle"></i></span>\n      </div>\n    </div>\n\n    <div class="search-overlay-bottom">\n      <div class="container container--narrow py-3">\n        <div class="circle-loader"></div>\n        <div class="live-search-results"></div>\n      </div>\n    </div>\n  </div>')}}])&&n(r.prototype,s),e}();function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.openedYet=!1,this.chatWrapper=document.querySelector("#chat-wrapper"),this.openIcon=document.querySelector(".header-chat-icon"),this.injectHTML(),this.chatLog=document.querySelector("#chat"),this.chatField=document.querySelector("#chatField"),this.chatForm=document.querySelector("#chatForm"),this.closeIcon=document.querySelector(".chat-title-bar-close"),this.events()}var t,r;return t=e,(r=[{key:"events",value:function(){var e=this;this.chatForm.addEventListener("submit",(function(t){t.preventDefault(),e.sendMessagetoServer()})),this.openIcon.addEventListener("click",(function(){return e.showChat()})),this.closeIcon.addEventListener("click",(function(){return e.hideChat()}))}},{key:"sendMessagetoServer",value:function(){this.socket.emit("chatMessageFromBrowser",{message:this.chatField.value}),this.chatLog.insertAdjacentHTML("beforeend",'\n        <div class="chat-self">\n        <div class="chat-message">\n          <div class="chat-message-inner">\n           '.concat(this.chatField.value,'\n          </div>\n        </div>\n        <img class="chat-avatar avatar-tiny" src="').concat(this.avatar,'">\n      </div>\n        ')),this.chatLog.scrollTop=this.chatLog.scrollHeight,this.chatField.value="",this.chatField.focus()}},{key:"hideChat",value:function(){this.chatWrapper.classList.remove("chat--visible")}},{key:"showChat",value:function(){this.openedYet||this.openConnection(),this.openedYet=!0,this.chatWrapper.classList.add("chat--visible"),this.chatField.focus()}},{key:"openConnection",value:function(){var e=this;this.socket=io(),this.socket.on("welcome",(function(t){e.username=t.username,e.avatar=t.avatar})),this.socket.on("chatMessageFromServer",(function(t){e.displayMessageFromServer(t)}))}},{key:"displayMessageFromServer",value:function(e){this.chatLog.insertAdjacentHTML("beforeend",'\n        <div class="chat-other">\n        <a href="#"><img class="avatar-tiny" src="'.concat(e.avatar,'"></a>\n        <div class="chat-message"><div class="chat-message-inner">\n          <a href="#"><strong>').concat(e.username,":</strong></a>\n          ").concat(e.message,"\n        </div></div>\n      </div>\n        ")),this.chatLog.scrollTop=this.chatLog.scrollHeight}},{key:"injectHTML",value:function(){this.chatWrapper.innerHTML='\n      <div class="chat-title-bar">Chat <span class="chat-title-bar-close"><i class="fas fa-times-circle"></i></span></div>\n      <div id="chat" class="chat-log"></div>\n      \n      <form id="chatForm" class="chat-form border-top">\n        <input type="text" class="chat-field" id="chatField" placeholder="Type a message…" autocomplete="off">\n      </form>\n      '}}])&&a(t.prototype,r),e}();function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.form=document.querySelector("#registration-form"),this.allFields=document.querySelectorAll("#registration-form .form-control"),this.insertValidationElements(),this.username=document.querySelector("#username-register"),this.username.previousValue="",this.email=document.querySelector("#email-register"),this.email.previousValue="",this.password=document.querySelector("#password-register"),this.password.previousValue="",this.username.isUnique=!1,this.email.isUnique=!1,this.events()}var r,n;return r=e,(n=[{key:"events",value:function(){var e=this;this.form.addEventListener("submit",(function(t){t.preventDefault(),e.formSubmitHandler()})),this.username.addEventListener("keyup",(function(){e.isDifferent(e.username,e.usernameHandler)})),this.email.addEventListener("keyup",(function(){e.isDifferent(e.email,e.emailHandler)})),this.password.addEventListener("keyup",(function(){e.isDifferent(e.password,e.passwordHandler)})),this.username.addEventListener("blur",(function(){e.isDifferent(e.username,e.usernameHandler)})),this.email.addEventListener("blur",(function(){e.isDifferent(e.email,e.emailHandler)})),this.password.addEventListener("blur",(function(){e.isDifferent(e.password,e.passwordHandler)}))}},{key:"formSubmitHandler",value:function(){this.usernameImmediately(),this.usernameAfterDelay(),this.emailAfterDelay(),this.passwordImmediately(),this.passwordAfterDelay(),!this.username.isUnique||this.username.errors||!this.email.isUnique||this.email.errors||this.password.errors||this.form.submit()}},{key:"isDifferent",value:function(e,t){e.previousValue!=e.value&&t.call(this),e.previousValue=e.value}},{key:"usernameHandler",value:function(){var e=this;this.username.errors=!1,this.usernameImmediately(),clearTimeout(this.username.timer),this.username.timer=setTimeout((function(){return e.usernameAfterDelay()}),800)}},{key:"passwordHandler",value:function(){var e=this;this.password.errors=!1,this.passwordImmediately(),clearTimeout(this.password.timer),this.password.timer=setTimeout((function(){return e.passwordAfterDelay()}),800)}},{key:"passwordImmediately",value:function(){this.password.value.length>50&&this.showValidationError(this.password,"Password cannot exceed 50 characters."),this.password.errors||this.hideValidationError(this.password)}},{key:"passwordAfterDelay",value:function(){this.password.value.length<12&&this.showValidationError(this.password,"Password must be at least 12 characters.")}},{key:"emailHandler",value:function(){var e=this;this.email.errors=!1,clearTimeout(this.email.timer),this.email.timer=setTimeout((function(){return e.emailAfterDelay()}),800)}},{key:"emailAfterDelay",value:function(){var e=this;/^\S+\S+$/.test(this.email.value)||this.showValidationError(this.email,"You must provide a valid email address."),this.email.errors||t().post("/doesEmailExist",{email:this.email.value}).then((function(t){t.data?(e.email.isUnique=!1,e.showValidationError(e.email,"That email is already being used.")):(e.email.isUnique=!0,e.hideValidationError(e.email))})).catch((function(){console.log("Please try again later.")}))}},{key:"usernameImmediately",value:function(){""==this.username.value||/^([a-zA-Z0-9]+)$/.test(this.username.value)||this.showValidationError(this.username,"Username can only contain letters and numbers."),this.username.value.length>30&&this.showValidationError(this.username,"Username cannot exceed 30 characters."),this.username.errors||this.hideValidationError(this.username)}},{key:"hideValidationError",value:function(e){e.nextElementSibling.classList.remove("liveValidateMessage--visible")}},{key:"showValidationError",value:function(e,t){e.nextElementSibling.innerHTML=t,e.nextElementSibling.classList.add("liveValidateMessage--visible"),e.errors=!0}},{key:"usernameAfterDelay",value:function(){var e=this;this.username.value.length<3&&this.showValidationError(this.username,"Username must be at least 3 characters."),this.username.errors||t().post("/doesUsernameExist",{username:this.username.value}).then((function(t){t.data?(e.showValidationError(e.username,"That username is already taken."),e.username.isUnique=!1):e.username.isUnique=!0})).catch((function(){console.log("Please try again later.")}))}},{key:"insertValidationElements",value:function(){this.allFields.forEach((function(e){e.insertAdjacentHTML("afterend",'<div class="alert alert-danger small liveValidateMessage"></div>')}))}}])&&o(r.prototype,n),e}();document.querySelector("#registration-form")&&new c,document.querySelector("#chat-wrapper")&&new i,document.querySelector(".header-search-icon")&&new s})()})();