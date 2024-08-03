// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).nextTick=t()}(this,(function(){"use strict";function e(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var n=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),n}var t="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}var o=n,i=r;function u(e){if(o===setTimeout)return setTimeout(e,0);if((o===n||!o)&&setTimeout)return o=setTimeout,setTimeout(e,0);try{return o(e,0)}catch(t){try{return o.call(null,e,0)}catch(t){return o.call(this,e,0)}}}"function"==typeof t.setTimeout&&(o=setTimeout),"function"==typeof t.clearTimeout&&(i=clearTimeout);var f,c=[],l=!1,a=-1;function s(){l&&f&&(l=!1,f.length?c=f.concat(c):a=-1,c.length&&d())}function d(){if(!l){var e=u(s);l=!0;for(var t=c.length;t;){for(f=c,c=[];++a<t;)f&&f[a].run();a=-1,t=c.length}f=null,l=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===r||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{return i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function p(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||l||u(d)}function h(e,t){this.fun=e,this.array=t}h.prototype.run=function(){this.fun.apply(null,this.array)};var m="browser",v="browser",w={},y=[],g={},T={},b={};function k(){}var _=k,j=k,x=k,L=k,O=k,E=k,D=k;function M(e){throw new Error("process.binding is not supported")}function N(){return"/"}function A(e){throw new Error("process.chdir is not supported")}function P(){return 0}var z=t.performance||{},R=z.now||z.mozNow||z.msNow||z.oNow||z.webkitNow||function(){return(new Date).getTime()};function q(e){var t=.001*R.call(z),n=Math.floor(t),r=Math.floor(t%1*1e9);return e&&(n-=e[0],(r-=e[1])<0&&(n--,r+=1e9)),[n,r]}var B=new Date;function C(){return(new Date-B)/1e3}var F={nextTick:p,title:m,browser:true,env:w,argv:y,version:"",versions:g,on:_,addListener:j,once:x,off:L,removeListener:O,removeAllListeners:E,emit:D,binding:M,cwd:N,chdir:A,umask:P,hrtime:q,platform:v,release:T,config:b,uptime:C},G=e(Object.freeze({__proto__:null,addListener:j,argv:y,binding:M,browser:true,chdir:A,config:b,cwd:N,default:F,emit:D,env:w,hrtime:q,nextTick:p,off:L,on:_,once:x,platform:v,release:T,removeAllListeners:E,removeListener:O,title:m,umask:P,uptime:C,version:"",versions:g}));return function(e){var t,n;for(t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);G.nextTick((function(){e.apply(null,t)}))}}));
//# sourceMappingURL=browser.js.map
