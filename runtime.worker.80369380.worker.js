!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/neishauben/",t(t.s=3)}([function(e,n){var t,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var s,c=[],l=!1,f=-1;function p(){l&&s&&(l=!1,s.length?c=s.concat(c):f=-1,c.length&&h())}function h(){if(!l){var e=u(p);l=!0;for(var n=c.length;n;){for(s=c,c=[];++f<n;)s&&s[f].run();f=-1,n=c.length}s=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(n){try{return r.call(null,e)}catch(n){return r.call(this,e)}}}(e)}}function m(e,n){this.fun=e,this.array=n}function d(){}o.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];c.push(new m(e,n)),1!==c.length||l||u(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=d,o.addListener=d,o.once=d,o.off=d,o.removeListener=d,o.removeAllListeners=d,o.emit=d,o.prependListener=d,o.prependOnceListener=d,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,n,t){(function(e){function t(e,n){for(var t=0,r=e.length-1;r>=0;r--){var o=e[r];"."===o?e.splice(r,1):".."===o?(e.splice(r,1),t++):t&&(e.splice(r,1),t--)}if(n)for(;t--;t)e.unshift("..");return e}function r(e,n){if(e.filter)return e.filter(n);for(var t=[],r=0;r<e.length;r++)n(e[r],r,e)&&t.push(e[r]);return t}n.resolve=function(){for(var n="",o=!1,i=arguments.length-1;i>=-1&&!o;i--){var a=i>=0?arguments[i]:e.cwd();if("string"!=typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(n=a+"/"+n,o="/"===a.charAt(0))}return(o?"/":"")+(n=t(r(n.split("/"),(function(e){return!!e})),!o).join("/"))||"."},n.normalize=function(e){var i=n.isAbsolute(e),a="/"===o(e,-1);return(e=t(r(e.split("/"),(function(e){return!!e})),!i).join("/"))||i||(e="."),e&&a&&(e+="/"),(i?"/":"")+e},n.isAbsolute=function(e){return"/"===e.charAt(0)},n.join=function(){var e=Array.prototype.slice.call(arguments,0);return n.normalize(r(e,(function(e,n){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},n.relative=function(e,t){function r(e){for(var n=0;n<e.length&&""===e[n];n++);for(var t=e.length-1;t>=0&&""===e[t];t--);return n>t?[]:e.slice(n,t-n+1)}e=n.resolve(e).substr(1),t=n.resolve(t).substr(1);for(var o=r(e.split("/")),i=r(t.split("/")),a=Math.min(o.length,i.length),u=a,s=0;s<a;s++)if(o[s]!==i[s]){u=s;break}var c=[];for(s=u;s<o.length;s++)c.push("..");return(c=c.concat(i.slice(u))).join("/")},n.sep="/",n.delimiter=":",n.dirname=function(e){if("string"!=typeof e&&(e+=""),0===e.length)return".";for(var n=e.charCodeAt(0),t=47===n,r=-1,o=!0,i=e.length-1;i>=1;--i)if(47===(n=e.charCodeAt(i))){if(!o){r=i;break}}else o=!1;return-1===r?t?"/":".":t&&1===r?"/":e.slice(0,r)},n.basename=function(e,n){var t=function(e){"string"!=typeof e&&(e+="");var n,t=0,r=-1,o=!0;for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!o){t=n+1;break}}else-1===r&&(o=!1,r=n+1);return-1===r?"":e.slice(t,r)}(e);return n&&t.substr(-1*n.length)===n&&(t=t.substr(0,t.length-n.length)),t},n.extname=function(e){"string"!=typeof e&&(e+="");for(var n=-1,t=0,r=-1,o=!0,i=0,a=e.length-1;a>=0;--a){var u=e.charCodeAt(a);if(47!==u)-1===r&&(o=!1,r=a+1),46===u?-1===n?n=a:1!==i&&(i=1):-1!==n&&(i=-1);else if(!o){t=a+1;break}}return-1===n||-1===r||0===i||1===i&&n===r-1&&n===t+1?"":e.slice(n,r)};var o="b"==="ab".substr(-1)?function(e,n,t){return e.substr(n,t)}:function(e,n,t){return n<0&&(n=e.length+n),e.substr(n,t)}}).call(this,t(0))},function(e,n,t){(function(n,r,o){var i,a=(i=(i="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0)||n,function(e){var n,a,u=void 0!==(e=e||{})?e:{};u.ready=new Promise((function(e,t){n=e,a=t}));var s,c={};for(s in u)u.hasOwnProperty(s)&&(c[s]=u[s]);var l=[],f=!1,p=!1,h=!1,m=!1;f="object"==typeof window,p="function"==typeof importScripts,h="object"==typeof r&&"object"==typeof r.versions&&"string"==typeof r.versions.node,m=!f&&!h&&!p;var d,g,v,y,b,w="";function A(e){return u.locateFile?u.locateFile(e,w):w+e}h?(w=p?t(1).dirname(w)+"/":o+"/",d=function(e,n){return y||(y=t(!function(){var e=new Error("Cannot find module 'fs'");throw e.code="MODULE_NOT_FOUND",e}())),b||(b=t(1)),e=b.normalize(e),y.readFileSync(e,n?null:"utf8")},v=function(e){var n=d(e,!0);return n.buffer||(n=new Uint8Array(n)),E(n.buffer),n},r.argv.length>1&&r.argv[1].replace(/\\/g,"/"),l=r.argv.slice(2),r.on("uncaughtException",(function(e){if(!(e instanceof Ee))throw e})),r.on("unhandledRejection",ae),u.inspect=function(){return"[Emscripten Module object]"}):m?("undefined"!=typeof read&&(d=function(e){return read(e)}),v=function(e){var n;return"function"==typeof readbuffer?new Uint8Array(readbuffer(e)):(E("object"==typeof(n=read(e,"binary"))),n)},"undefined"!=typeof scriptArgs?l=scriptArgs:void 0!==arguments&&(l=arguments),"undefined"!=typeof print&&("undefined"==typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!=typeof printErr?printErr:print)):(f||p)&&(p?w=self.location.href:"undefined"!=typeof document&&document.currentScript&&(w=document.currentScript.src),i&&(w=i),w=0!==w.indexOf("blob:")?w.substr(0,w.lastIndexOf("/")+1):"",d=function(e){var n=new XMLHttpRequest;return n.open("GET",e,!1),n.send(null),n.responseText},p&&(v=function(e){var n=new XMLHttpRequest;return n.open("GET",e,!1),n.responseType="arraybuffer",n.send(null),new Uint8Array(n.response)}),g=function(e,n,t){var r=new XMLHttpRequest;r.open("GET",e,!0),r.responseType="arraybuffer",r.onload=function(){200==r.status||0==r.status&&r.response?n(r.response):t()},r.onerror=t,r.send(null)}),u.print||console.log.bind(console);var _,k=u.printErr||console.warn.bind(console);for(s in c)c.hasOwnProperty(s)&&(u[s]=c[s]);function R(e,n,t,r){switch("*"===(t=t||"i8").charAt(t.length-1)&&(t="i32"),t){case"i1":case"i8":M[e>>0]=n;break;case"i16":V[e>>1]=n;break;case"i32":I[e>>2]=n;break;case"i64":he=[n>>>0,(pe=n,+Math.abs(pe)>=1?pe>0?(0|Math.min(+Math.floor(pe/4294967296),4294967295))>>>0:~~+Math.ceil((pe-+(~~pe>>>0))/4294967296)>>>0:0)],I[e>>2]=he[0],I[e+4>>2]=he[1];break;case"float":C[e>>2]=n;break;case"double":U[e>>3]=n;break;default:ae("invalid type for setValue: "+t)}}function S(e,n,t){switch("*"===(n=n||"i8").charAt(n.length-1)&&(n="i32"),n){case"i1":case"i8":return M[e>>0];case"i16":return V[e>>1];case"i32":case"i64":return I[e>>2];case"float":return C[e>>2];case"double":return U[e>>3];default:ae("invalid type for getValue: "+n)}return null}c=null,u.arguments&&(l=u.arguments),u.thisProgram&&u.thisProgram,u.quit&&u.quit,u.wasmBinary&&(_=u.wasmBinary),u.noExitRuntime,"object"!=typeof WebAssembly&&ae("no native wasm support detected");var T=!1;function E(e,n){e||ae("Assertion failed: "+n)}function x(e){var n=u["_"+e];return E(n,"Cannot call unknown function "+e+", make sure it is exported"),n}function j(e,n,t,r,o){var i={string:function(e){var n=0;if(null!=e&&0!==e){var t=1+(e.length<<2);D(e,n=Te(t),t)}return n},array:function(e){var n=Te(e.length);return F(e,n),n}},a=x(e),u=[],s=0;if(r)for(var c=0;c<r.length;c++){var l=i[t[c]];l?(0===s&&(s=Re()),u[c]=l(r[c])):u[c]=r[c]}var f=a.apply(null,u);return f=function(e){return"string"===n?H(e):"boolean"===n?Boolean(e):e}(f),0!==s&&Se(s),f}function P(e,n,t,r){var o=(t=t||[]).every((function(e){return"number"===e}));return"string"!==n&&o&&!r?x(e):function(){return j(e,n,t,arguments)}}var M,O,V,I,C,U,W="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function z(e,n,t){for(var r=n+t,o=n;e[o]&&!(o>=r);)++o;if(o-n>16&&e.subarray&&W)return W.decode(e.subarray(n,o));for(var i="";n<o;){var a=e[n++];if(128&a){var u=63&e[n++];if(192!=(224&a)){var s=63&e[n++];if((a=224==(240&a)?(15&a)<<12|u<<6|s:(7&a)<<18|u<<12|s<<6|63&e[n++])<65536)i+=String.fromCharCode(a);else{var c=a-65536;i+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else i+=String.fromCharCode((31&a)<<6|u)}else i+=String.fromCharCode(a)}return i}function H(e,n){return e?z(O,e,n):""}function L(e,n,t,r){if(!(r>0))return 0;for(var o=t,i=t+r-1,a=0;a<e.length;++a){var u=e.charCodeAt(a);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&e.charCodeAt(++a)),u<=127){if(t>=i)break;n[t++]=u}else if(u<=2047){if(t+1>=i)break;n[t++]=192|u>>6,n[t++]=128|63&u}else if(u<=65535){if(t+2>=i)break;n[t++]=224|u>>12,n[t++]=128|u>>6&63,n[t++]=128|63&u}else{if(t+3>=i)break;n[t++]=240|u>>18,n[t++]=128|u>>12&63,n[t++]=128|u>>6&63,n[t++]=128|63&u}}return n[t]=0,t-o}function D(e,n,t){return L(e,O,n,t)}function F(e,n){M.set(e,n)}function q(e){u.HEAP8=M=new Int8Array(e),u.HEAP16=V=new Int16Array(e),u.HEAP32=I=new Int32Array(e),u.HEAPU8=O=new Uint8Array(e),u.HEAPU16=new Uint16Array(e),u.HEAPU32=new Uint32Array(e),u.HEAPF32=C=new Float32Array(e),u.HEAPF64=U=new Float64Array(e)}u.INITIAL_MEMORY;var B,N=[],G=[],X=[],Y=[];function J(){if(u.preRun)for("function"==typeof u.preRun&&(u.preRun=[u.preRun]);u.preRun.length;)$(u.preRun.shift());ye(N)}function K(){ye(G)}function Q(){ye(X)}function Z(){if(u.postRun)for("function"==typeof u.postRun&&(u.postRun=[u.postRun]);u.postRun.length;)ee(u.postRun.shift());ye(Y)}function $(e){N.unshift(e)}function ee(e){Y.unshift(e)}G.push({func:function(){ke()}});var ne=0,te=null,re=null;function oe(e){ne++,u.monitorRunDependencies&&u.monitorRunDependencies(ne)}function ie(e){if(ne--,u.monitorRunDependencies&&u.monitorRunDependencies(ne),0==ne&&(null!==te&&(clearInterval(te),te=null),re)){var n=re;re=null,n()}}function ae(e){u.onAbort&&u.onAbort(e),k(e+=""),T=!0,e="abort("+e+"). Build with -s ASSERTIONS=1 for more info.";var n=new WebAssembly.RuntimeError(e);throw a(n),n}function ue(e,n){return String.prototype.startsWith?e.startsWith(n):0===e.indexOf(n)}u.preloadedImages={},u.preloadedAudios={};var se="data:application/octet-stream;base64,";function ce(e){return ue(e,se)}var le="file://";function fe(e){return ue(e,le)}var pe,he,me="rubiks.wasm";function de(e){try{if(e==me&&_)return new Uint8Array(_);if(v)return v(e);throw"both async and sync fetching of the wasm failed"}catch(e){ae(e)}}function ge(){if(!_&&(f||p)){if("function"==typeof fetch&&!fe(me))return fetch(me,{credentials:"same-origin"}).then((function(e){if(!e.ok)throw"failed to load wasm binary file at '"+me+"'";return e.arrayBuffer()})).catch((function(){return de(me)}));if(g)return new Promise((function(e,n){g(me,(function(n){e(new Uint8Array(n))}),n)}))}return Promise.resolve().then((function(){return de(me)}))}function ve(){var e={a:_e};function n(e,n){var t=e.exports;u.asm=t,q(u.asm.c.buffer),B=u.asm.q,ie()}function t(e){n(e.instance)}function r(n){return ge().then((function(n){return WebAssembly.instantiate(n,e)})).then(n,(function(e){k("failed to asynchronously prepare wasm: "+e),ae(e)}))}if(oe(),u.instantiateWasm)try{return u.instantiateWasm(e,n)}catch(e){return k("Module.instantiateWasm callback failed with error: "+e),!1}return(_||"function"!=typeof WebAssembly.instantiateStreaming||ce(me)||fe(me)||"function"!=typeof fetch?r(t):fetch(me,{credentials:"same-origin"}).then((function(n){return WebAssembly.instantiateStreaming(n,e).then(t,(function(e){return k("wasm streaming compile failed: "+e),k("falling back to ArrayBuffer instantiation"),r(t)}))}))).catch(a),{}}function ye(e){for(;e.length>0;){var n=e.shift();if("function"!=typeof n){var t=n.func;"number"==typeof t?void 0===n.arg?B.get(t)():B.get(t)(n.arg):t(void 0===n.arg?null:n.arg)}else n(u)}}function be(e,n,t){O.copyWithin(e,n,n+t)}function we(e){var n=Date.now()/1e3|0;return e&&(I[e>>2]=n),n}ce(me)||(me=A(me));var Ae,_e={a:be,b:we},ke=(ve(),u.___wasm_call_ctors=function(){return(ke=u.___wasm_call_ctors=u.asm.d).apply(null,arguments)}),Re=(u._init=function(){return(u._init=u.asm.e).apply(null,arguments)},u._perform=function(){return(u._perform=u.asm.f).apply(null,arguments)},u._reorient_cube=function(){return(u._reorient_cube=u.asm.g).apply(null,arguments)},u._generate_scramble=function(){return(u._generate_scramble=u.asm.h).apply(null,arguments)},u._invert_algorithm=function(){return(u._invert_algorithm=u.asm.i).apply(null,arguments)},u._optimize_algorithm=function(){return(u._optimize_algorithm=u.asm.j).apply(null,arguments)},u._perform_algorithm=function(){return(u._perform_algorithm=u.asm.k).apply(null,arguments)},u._solve=function(){return(u._solve=u.asm.l).apply(null,arguments)},u._is_solved=function(){return(u._is_solved=u.asm.m).apply(null,arguments)},u.stackSave=function(){return(Re=u.stackSave=u.asm.n).apply(null,arguments)}),Se=u.stackRestore=function(){return(Se=u.stackRestore=u.asm.o).apply(null,arguments)},Te=u.stackAlloc=function(){return(Te=u.stackAlloc=u.asm.p).apply(null,arguments)};function Ee(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}function xe(e){function t(){Ae||(Ae=!0,u.calledRun=!0,T||(K(),Q(),n(u),u.onRuntimeInitialized&&u.onRuntimeInitialized(),Z()))}e=e||l,ne>0||(J(),ne>0||(u.setStatus?(u.setStatus("Running..."),setTimeout((function(){setTimeout((function(){u.setStatus("")}),1),t()}),1)):t()))}if(u.cwrap=P,u.setValue=R,u.getValue=S,re=function e(){Ae||xe(),Ae||(re=e)},u.run=xe,u.preInit)for("function"==typeof u.preInit&&(u.preInit=[u.preInit]);u.preInit.length>0;)u.preInit.pop()();return xe(),e.ready});e.exports=a}).call(this,"/index.js",t(0),"/")},function(e,n,t){"use strict";t.r(n);var r=t(2),o=t.n(r),i=t.p+"6b621715699ae1aeeeb97e304f3d4003.wasm";(async()=>{const e=await o()({locateFile:e=>e.endsWith(".wasm")?i:e});return e._init(),{performOperation(n,t){for(var r=e.stackSave(),o=e.stackAlloc(54),i=0;i<54;++i)e.setValue(o+i,n[i]);e._perform(o,t);const a=new Array(54);for(i=0;i<54;++i)a[i]=e.getValue(o+i);return e.stackRestore(r),a},performAlgorithm(n,t){for(var r=e.stackSave(),o=e.stackAlloc(54),i=e.stackAlloc(4*t.length),a=0;a<54;++a)e.setValue(o+a,n[a]);for(a=0;a<t.length;++a)e.setValue(i+4*a,t[a],"i32");e._perform_algorithm(o,i,t.length);const u=new Array(54);for(a=0;a<54;++a)u[a]=e.getValue(o+a);return e.stackRestore(r),u},invertAlgorithm(n){for(var t=e.stackSave(),r=e.stackAlloc(4*n.length),o=0;o<n.length;++o)e.setValue(r+4*o,n[o],"i32");e._invert_algorithm(r,n.length);const i=new Array(n.length);for(o=0;o<n.length;++o)i[o]=e.getValue(r+4*o,"i32");return e.stackRestore(t),i},optimizeAlgorithm(n){for(var t=e.stackSave(),r=e.stackAlloc(4*n.length),o=0;o<n.length;++o)e.setValue(r+4*o,n[o],"i32");const i=e._optimize_algorithm(r,n.length),a=new Array(i);for(o=0;o<i;++o)a[o]=e.getValue(r+4*o,"i32");return e.stackRestore(t),a},reorientCube(n){for(var t=e.stackSave(),r=e.stackAlloc(54),o=0;o<54;++o)e.setValue(r+o,n[o]);e._reorient_cube(r);const i=new Array(54);for(o=0;o<54;++o)i[o]=e.getValue(r+o);return e.stackRestore(t),i},solve(n){for(var t=e.stackSave(),r=e.stackAlloc(54),o=e.stackAlloc(2048),i=0;i<54;++i)e.setValue(r+i,n[i]);const a=e._solve(r,o),u=new Array(a);for(i=0;i<a;++i)u[i]=e.getValue(o+4*i,"i32");return e.stackRestore(t),u},generateScramble(n,t=!0){var r=e.stackSave(),o=e.stackAlloc(4*n);e._generate_scramble(o,n,t?1:0);const i=new Array(n);for(var a=0;a<n;++a){const n=e.getValue(o+4*a,"i32");i[a]=n}return e.stackRestore(r),i},isSolved(n){for(var t=e.stackSave(),r=e.stackAlloc(54),o=0;o<54;++o)e.setValue(r+o,n[o]);const i=e._is_solved(r);return e.stackRestore(t),0!==i}}})().then(e=>{console.log("Worker initialized!"),onmessage=async n=>{const{action:t,index:r,args:o}=n.data;try{const n=e[t](...o);postMessage({action:"success",index:r,result:n})}catch(e){postMessage({action:"failure",index:r,error:e})}},postMessage({action:"initialized"})})}]);
//# sourceMappingURL=runtime.worker.80369380.worker.js.map