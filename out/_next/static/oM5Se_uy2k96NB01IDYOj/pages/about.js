(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{114:function(e,t,n){"use strict";n.r(t),t.default=function(e,t){return t=t||{},new Promise(function(n,r){var o=new XMLHttpRequest;for(var u in o.open(t.method||"get",e,!0),t.headers)o.setRequestHeader(u,t.headers[u]);function s(){var e,t=[],n=[],r={};return o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(o,u,s){t.push(u=u.toLowerCase()),n.push([u,s]),r[u]=(e=r[u])?e+","+s:s}),{ok:2==(o.status/100|0),status:o.status,statusText:o.statusText,url:o.responseURL,clone:s,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(o.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([o.response]))},headers:{keys:function(){return t},entries:function(){return n},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}o.withCredentials="include"==t.credentials,o.onload=function(){n(s())},o.onerror=r,o.send(t.body||null)})}},211:function(e,t,n){__NEXT_REGISTER_PAGE("/about",function(){return e.exports=n(212),{page:e.exports.default}})},212:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return y});var r=n(79),o=n.n(r),u=n(0),s=n.n(u),i=(n(20),n(12));n(233);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,n,r,o,u,s){try{var i=e[u](s),a=i.value}catch(e){return void n(e)}i.done?t(a):Promise.resolve(a).then(r,o)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,l(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,u["Component"]),n=t,r=[{key:"render",value:function(){var e=this.props.user;return s.a.createElement(i.a,{title:"About"},s.a.createElement("p",null,e.name),s.a.createElement("img",{src:e.avatar_url,alt:"Jeff",height:"200px"}))}}],a=[{key:"getInitialProps",value:function(){var e,t=(e=o.a.mark(function e(){var t,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/jeffreyjarrett");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",{user:n});case 7:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(r,o){var u=e.apply(t,n);function s(e){c(u,r,o,s,i,"next",e)}function i(e){c(u,r,o,s,i,"throw",e)}s(void 0)})});return function(){return t.apply(this,arguments)}}()}],r&&f(n.prototype,r),a&&f(n,a),t}()},233:function(e,t,n){e.exports=window.fetch||(window.fetch=n(114).default||n(114))},79:function(e,t,n){e.exports=n(89)}},[[211,1,0]]]);