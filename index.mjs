// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
function e(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){if(this instanceof e){var r=[null];r.push.apply(r,arguments);var n=Function.bind.apply(t,r);return new n}return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}var t="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}var o=r,i=n;function u(e){if(o===setTimeout)return setTimeout(e,0);if((o===r||!o)&&setTimeout)return o=setTimeout,setTimeout(e,0);try{return o(e,0)}catch(t){try{return o.call(null,e,0)}catch(t){return o.call(this,e,0)}}}"function"==typeof t.setTimeout&&(o=setTimeout),"function"==typeof t.clearTimeout&&(i=clearTimeout);var a,c=[],f=!1,l=-1;function s(){f&&a&&(f=!1,a.length?c=a.concat(c):l=-1,c.length&&p())}function p(){if(!f){var e=u(s);f=!0;for(var t=c.length;t;){for(a=c,c=[];++l<t;)a&&a[l].run();l=-1,t=c.length}a=null,f=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===n||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function h(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new m(e,t)),1!==c.length||f||u(p)}function m(e,t){this.fun=e,this.array=t}m.prototype.run=function(){this.fun.apply(null,this.array)};var d={},w=[],v={},y={},g={};function b(){}var T=b,_=b,k=b,L=b,O=b,j=b,E=b;function x(e){throw new Error("process.binding is not supported")}function D(){return"/"}function M(e){throw new Error("process.chdir is not supported")}function N(){return 0}var A=t.performance||{},P=A.now||A.mozNow||A.msNow||A.oNow||A.webkitNow||function(){return(new Date).getTime()};function z(e){var t=.001*P.call(A),r=Math.floor(t),n=Math.floor(t%1*1e9);return e&&(r-=e[0],(n-=e[1])<0&&(r--,n+=1e9)),[r,n]}var F=new Date;function q(){return(new Date-F)/1e3}var B={nextTick:h,title:"browser",browser:true,env:d,argv:w,version:"",versions:v,on:T,addListener:_,once:k,off:L,removeListener:O,removeAllListeners:j,emit:E,binding:x,cwd:D,chdir:M,umask:N,hrtime:z,platform:"browser",release:y,config:g,uptime:q},C=e(Object.freeze({__proto__:null,addListener:_,argv:w,binding:x,browser:true,chdir:M,config:g,cwd:D,default:B,emit:E,env:d,hrtime:z,nextTick:h,off:L,on:T,once:k,platform:"browser",release:y,removeAllListeners:j,removeListener:O,title:"browser",umask:N,uptime:q,version:"",versions:v}));function G(e){var t,r;for(t=[],r=1;r<arguments.length;r++)t.push(arguments[r]);function n(){e.apply(null,t)}C.nextTick(n)}export{G as default};
//# sourceMappingURL=index.mjs.map
