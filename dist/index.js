"use strict";var _=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var n=_(function(G,v){
var E=require('@stdlib/regexp-utf16-surrogate-pair/dist').REGEXP,F=/[\uDC00-\uDFFF]/,c=/[\uD800-\uDBFF]/;function T(r,e){var t,u,a,R,f,i;if(r===""||e===0)return"";if(e===1)return r=r.substring(0,2),E.test(r)?r:r[0];for(t=r.length,u="",f=0,i=0;i<t;i++){if(a=r[i],u+=a,f+=1,c.test(a)){if(i===t-1)break;R=r[i+1],F.test(R)&&(u+=R,i+=1)}if(f===e)break}return u}v.exports=T
});var U=n();module.exports=U;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
