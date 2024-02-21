// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{REGEXP as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/regexp-utf16-surrogate-pair@v0.2.0-esm/index.mjs";var r=/[\uDC00-\uDFFF]/,e=/[\uD800-\uDBFF]/;function s(s,i){var u,f,n,a,o,d;if(""===s||0===i)return"";if(1===i)return s=s.substring(0,2),t.test(s)?s:s[0];for(u=s.length,f="",o=0,d=0;d<u;d++){if(f+=n=s[d],o+=1,e.test(n)){if(d===u-1)break;a=s[d+1],r.test(a)&&(f+=a,d+=1)}if(o===i)break}return f}export{s as default};
//# sourceMappingURL=index.mjs.map
