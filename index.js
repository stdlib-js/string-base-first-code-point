// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e,t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,a=n.__lookupGetter__,l=n.__lookupSetter__;function f(){return/[\uD800-\uDBFF][\uDC00-\uDFFF]/}e=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var f,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(a.call(e,t)||l.call(e,t)?(f=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=f):e[t]=r.value),_="get"in r,p="set"in r,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&u&&u.call(e,t,r.get),p&&i&&i.call(e,t,r.set),e};var c=/[\uD800-\uDBFF][\uDC00-\uDFFF]/;e(f,"REGEXP",{configurable:!1,enumerable:!1,writable:!1,value:c});var _=/[\uDC00-\uDFFF]/,p=/[\uD800-\uDBFF]/;return function(e,t){var r,n,o,u,i,a;if(""===e||0===t)return"";if(1===t)return e=e.substring(0,2),c.test(e)?e:e[0];for(r=e.length,n="",i=0,a=0;a<r;a++){if(n+=o=e[a],i+=1,p.test(o)){if(a===r-1)break;u=e[a+1],_.test(u)&&(n+=u,a+=1)}if(i===t)break}return n}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).firstCodePoint=t();
//# sourceMappingURL=index.js.map