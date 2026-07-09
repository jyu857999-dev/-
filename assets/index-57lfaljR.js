var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return ne(e.type,t,e.props)}function w(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ae=/\/+/g;function oe(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function se(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ce(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ce(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+oe(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(ae,`$&/`)+`/`),ce(o,r,i,``,function(e){return e})):o!=null&&(w(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ae,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+oe(a,u),c+=ce(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+oe(a,u++),c+=ce(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ce(se(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function le(e,t,n){if(e==null)return e;var r=[],i=0;return ce(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ue(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var T=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},E={map:le,forEach:function(e,t,n){le(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return le(e,function(){t++}),t},toArray:function(e){return le(e,function(e){return e})||[]},only:function(e){if(!w(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=E,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=w,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ue}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,T)}catch(e){T(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.7`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,w());else{var t=n(l);t!==null&&oe(x,t.startTime-e)}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function re(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&oe(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?w():ee=!1}}}var w;if(typeof y==`function`)w=function(){y(re)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=re,w=function(){ae.postMessage(null)}}else w=function(){_(re,0)};function oe(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,oe(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,w()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.7`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),w=Symbol.for(`react.lazy`),ie=Symbol.for(`react.activity`),ae=Symbol.for(`react.memo_cache_sentinel`),oe=Symbol.iterator;function se(e){return typeof e!=`object`||!e?null:(e=oe&&e[oe]||e[`@@iterator`],typeof e==`function`?e:null)}var ce=Symbol.for(`react.client.reference`);function le(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ce?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case ie:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?le(e.type)||`Memo`:t;case w:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}var ue=Array.isArray,T=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},fe=[],pe=-1;function me(e){return{current:e}}function D(e){0>pe||(e.current=fe[pe],fe[pe]=null,pe--)}function O(e,t){pe++,fe[pe]=e.current,e.current=t}var he=me(null),ge=me(null),_e=me(null),ve=me(null);function ye(e,t){switch(O(_e,t),O(ge,e),O(he,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}D(he),O(he,e)}function be(){D(he),D(ge),D(_e)}function xe(e){e.memoizedState!==null&&O(ve,e);var t=he.current,n=Hd(t,e.type);t!==n&&(O(ge,e),O(he,n))}function Se(e){ge.current===e&&(D(he),D(ge)),ve.current===e&&(D(ve),Qf._currentValue=de)}var Ce,we;function Te(e){if(Ce===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ce=t&&t[1]||``,we=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ce+e+we}var Ee=!1;function De(e,t){if(!e||Ee)return``;Ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ee=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Te(n):``}function Oe(e,t){switch(e.tag){case 26:case 27:case 5:return Te(e.type);case 16:return Te(`Lazy`);case 13:return e.child!==t&&t!==null?Te(`Suspense Fallback`):Te(`Suspense`);case 19:return Te(`SuspenseList`);case 0:case 15:return De(e.type,!1);case 11:return De(e.type.render,!1);case 1:return De(e.type,!0);case 31:return Te(`Activity`);default:return``}}function ke(e){try{var t=``,n=null;do t+=Oe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ae=Object.prototype.hasOwnProperty,je=t.unstable_scheduleCallback,Me=t.unstable_cancelCallback,Ne=t.unstable_shouldYield,Pe=t.unstable_requestPaint,Fe=t.unstable_now,Ie=t.unstable_getCurrentPriorityLevel,Le=t.unstable_ImmediatePriority,Re=t.unstable_UserBlockingPriority,ze=t.unstable_NormalPriority,Be=t.unstable_LowPriority,Ve=t.unstable_IdlePriority,He=t.log,Ue=t.unstable_setDisableYieldValue,We=null,Ge=null;function Ke(e){if(typeof He==`function`&&Ue(e),Ge&&typeof Ge.setStrictMode==`function`)try{Ge.setStrictMode(We,e)}catch{}}var qe=Math.clz32?Math.clz32:Xe,Je=Math.log,Ye=Math.LN2;function Xe(e){return e>>>=0,e===0?32:31-(Je(e)/Ye|0)|0}var Ze=256,Qe=262144,$e=4194304;function et(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=et(n))):i=et(o):i=et(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=et(n))):i=et(o)):i=et(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function nt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function rt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function it(){var e=$e;return $e<<=1,!($e&62914560)&&($e=4194304),e}function at(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ot(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function st(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-qe(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ct(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ct(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-qe(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function lt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ut(e,t){var n=t&-t;return n=n&42?1:dt(n),(n&(e.suspendedLanes|t))===0?n:0}function dt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ft(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function pt(){var e=E.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function mt(e,t){var n=E.p;try{return E.p=e,t()}finally{E.p=n}}var k=Math.random().toString(36).slice(2),ht=`__reactFiber$`+k,gt=`__reactProps$`+k,_t=`__reactContainer$`+k,vt=`__reactEvents$`+k,yt=`__reactListeners$`+k,bt=`__reactHandles$`+k,xt=`__reactResources$`+k,St=`__reactMarker$`+k;function Ct(e){delete e[ht],delete e[gt],delete e[vt],delete e[yt],delete e[bt]}function wt(e){var t=e[ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[ht])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Tt(e){if(e=e[ht]||e[_t]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Et(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Dt(e){var t=e[xt];return t||=e[xt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Ot(e){e[St]=!0}var kt=new Set,At={};function jt(e,t){Mt(e,t),Mt(e+`Capture`,t)}function Mt(e,t){for(At[e]=t,e=0;e<t.length;e++)kt.add(t[e])}var Nt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Pt={},Ft={};function It(e){return Ae.call(Ft,e)?!0:Ae.call(Pt,e)?!1:Nt.test(e)?Ft[e]=!0:(Pt[e]=!0,!1)}function Lt(e,t,n){if(It(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Rt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function zt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Bt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Vt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ht(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ut(e){if(!e._valueTracker){var t=Vt(e)?`checked`:`value`;e._valueTracker=Ht(e,t,``+e[t])}}function Wt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Vt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Gt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Kt=/[\n"\\]/g;function qt(e){return e.replace(Kt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Jt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Bt(t)):e.value!==``+Bt(t)&&(e.value=``+Bt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Xt(e,o,Bt(n)):Xt(e,o,Bt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Bt(s):e.removeAttribute(`name`)}function Yt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ut(e);return}n=n==null?``:``+Bt(n),t=t==null?n:``+Bt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ut(e)}function Xt(e,t,n){t===`number`&&Gt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Zt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qt(e,t,n){if(t!=null&&(t=``+Bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Bt(n)}function $t(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ue(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Bt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ut(e)}function en(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function nn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||tn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function rn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&nn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&nn(e,o,t[o])}function an(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var on=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),sn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cn(e){return sn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function ln(){}var un=null;function dn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fn=null,pn=null;function mn(e){var t=Tt(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Jt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+qt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[gt]||null;if(!a)throw Error(i(90));Jt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Wt(r)}break a;case`textarea`:Qt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}}}var hn=!1;function gn(e,t,n){if(hn)return e(t,n);hn=!0;try{return e(t)}finally{if(hn=!1,(fn!==null||pn!==null)&&(bu(),fn&&(t=fn,e=pn,pn=fn=null,mn(t),e)))for(t=0;t<e.length;t++)mn(e[t])}}function _n(e,t){var n=e.stateNode;if(n===null)return null;var r=n[gt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var vn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),yn=!1;if(vn)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){yn=!0}}),window.addEventListener(`test`,bn,bn),window.removeEventListener(`test`,bn,bn)}catch{yn=!1}var xn=null,Sn=null,Cn=null;function wn(){if(Cn)return Cn;var e,t=Sn,n=t.length,r,i=`value`in xn?xn.value:xn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Cn=i.slice(e,1<r?1-r:void 0)}function Tn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function En(){return!0}function Dn(){return!1}function On(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?En:Dn,this.isPropagationStopped=Dn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=En)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=En)},persist:function(){},isPersistent:En}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},An=On(kn),jn=h({},kn,{view:0,detail:0}),Mn=On(jn),Nn,Pn,Fn,In=h({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Fn&&(Fn&&e.type===`mousemove`?(Nn=e.screenX-Fn.screenX,Pn=e.screenY-Fn.screenY):Pn=Nn=0,Fn=e),Nn)},movementY:function(e){return`movementY`in e?e.movementY:Pn}}),Ln=On(In),Rn=On(h({},In,{dataTransfer:0})),zn=On(h({},jn,{relatedTarget:0})),Bn=On(h({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),Vn=On(h({},kn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Hn=On(h({},kn,{data:0})),Un={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Wn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Gn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gn[e])?!!t[e]:!1}function qn(){return Kn}var Jn=On(h({},jn,{key:function(e){if(e.key){var t=Un[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Tn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Wn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qn,charCode:function(e){return e.type===`keypress`?Tn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Tn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Yn=On(h({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Xn=On(h({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qn})),Zn=On(h({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Qn=On(h({},In,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),$n=On(h({},kn,{newState:0,oldState:0})),er=[9,13,27,32],tr=vn&&`CompositionEvent`in window,A=null;vn&&`documentMode`in document&&(A=document.documentMode);var nr=vn&&`TextEvent`in window&&!A,rr=vn&&(!tr||A&&8<A&&11>=A),ir=` `,ar=!1;function or(e,t){switch(e){case`keyup`:return er.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function sr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var cr=!1;function lr(e,t){switch(e){case`compositionend`:return sr(t);case`keypress`:return t.which===32?(ar=!0,ir):null;case`textInput`:return e=t.data,e===ir&&ar?null:e;default:return null}}function ur(e,t){if(cr)return e===`compositionend`||!tr&&or(e,t)?(e=wn(),Cn=Sn=xn=null,cr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return rr&&t.locale!==`ko`?null:t.data;default:return null}}var dr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!dr[e.type]:t===`textarea`}function pr(e,t,n,r){fn?pn?pn.push(r):pn=[r]:fn=r,t=Ed(t,`onChange`),0<t.length&&(n=new An(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var mr=null,hr=null;function gr(e){yd(e,0)}function _r(e){if(Wt(Et(e)))return e}function j(e,t){if(e===`change`)return t}var vr=!1;if(vn){var yr;if(vn){var br=`oninput`in document;if(!br){var xr=document.createElement(`div`);xr.setAttribute(`oninput`,`return;`),br=typeof xr.oninput==`function`}yr=br}else yr=!1;vr=yr&&(!document.documentMode||9<document.documentMode)}function Sr(){mr&&(mr.detachEvent(`onpropertychange`,Cr),hr=mr=null)}function Cr(e){if(e.propertyName===`value`&&_r(hr)){var t=[];pr(t,hr,e,dn(e)),gn(gr,t)}}function wr(e,t,n){e===`focusin`?(Sr(),mr=t,hr=n,mr.attachEvent(`onpropertychange`,Cr)):e===`focusout`&&Sr()}function Tr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return _r(hr)}function Er(e,t){if(e===`click`)return _r(t)}function Dr(e,t){if(e===`input`||e===`change`)return _r(t)}function Or(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var kr=typeof Object.is==`function`?Object.is:Or;function Ar(e,t){if(kr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ae.call(t,i)||!kr(e[i],t[i]))return!1}return!0}function jr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mr(e,t){var n=jr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=jr(n)}}function Nr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gt(e.document)}return t}function Fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Ir=vn&&`documentMode`in document&&11>=document.documentMode,Lr=null,Rr=null,zr=null,Br=!1;function Vr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Br||Lr==null||Lr!==Gt(r)||(r=Lr,`selectionStart`in r&&Fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zr&&Ar(zr,r)||(zr=r,r=Ed(Rr,`onSelect`),0<r.length&&(t=new An(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Lr)))}function Hr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Ur={animationend:Hr(`Animation`,`AnimationEnd`),animationiteration:Hr(`Animation`,`AnimationIteration`),animationstart:Hr(`Animation`,`AnimationStart`),transitionrun:Hr(`Transition`,`TransitionRun`),transitionstart:Hr(`Transition`,`TransitionStart`),transitioncancel:Hr(`Transition`,`TransitionCancel`),transitionend:Hr(`Transition`,`TransitionEnd`)},Wr={},Gr={};vn&&(Gr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),`TransitionEvent`in window||delete Ur.transitionend.transition);function Kr(e){if(Wr[e])return Wr[e];if(!Ur[e])return e;var t=Ur[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gr)return Wr[e]=t[n];return e}var qr=Kr(`animationend`),Jr=Kr(`animationiteration`),Yr=Kr(`animationstart`),Xr=Kr(`transitionrun`),Zr=Kr(`transitionstart`),Qr=Kr(`transitioncancel`),$r=Kr(`transitionend`),ei=new Map,ti=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ti.push(`scrollEnd`);function ni(e,t){ei.set(e,t),jt(t,[e])}var ri=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ii=[],ai=0,oi=0;function si(){for(var e=ai,t=oi=ai=0;t<e;){var n=ii[t];ii[t++]=null;var r=ii[t];ii[t++]=null;var i=ii[t];ii[t++]=null;var a=ii[t];if(ii[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&di(n,i,a)}}function ci(e,t,n,r){ii[ai++]=e,ii[ai++]=t,ii[ai++]=n,ii[ai++]=r,oi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function li(e,t,n,r){return ci(e,t,n,r),fi(e)}function ui(e,t){return ci(e,null,null,t),fi(e)}function di(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-qe(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function fi(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var pi={};function mi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(e,t,n,r){return new mi(e,t,n,r)}function gi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _i(e,t){var n=e.alternate;return n===null?(n=hi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function vi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function yi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)gi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,he.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ie:return e=hi(31,n,t,a),e.elementType=ie,e.lanes=o,e;case y:return bi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=hi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case te:return e=hi(13,n,t,a),e.elementType=te,e.lanes=o,e;case ne:return e=hi(19,n,t,a),e.elementType=ne,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:s=10;break a;case ee:s=9;break a;case C:s=11;break a;case re:s=14;break a;case w:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=hi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function bi(e,t,n,r){return e=hi(7,e,r,t),e.lanes=n,e}function xi(e,t,n){return e=hi(6,e,null,t),e.lanes=n,e}function Si(e){var t=hi(18,null,null,0);return t.stateNode=e,t}function Ci(e,t,n){return t=hi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var wi=new WeakMap;function Ti(e,t){if(typeof e==`object`&&e){var n=wi.get(e);return n===void 0?(t={value:e,source:t,stack:ke(t)},wi.set(e,t),t):n}return{value:e,source:t,stack:ke(t)}}var Ei=[],Di=0,Oi=null,ki=0,Ai=[],ji=0,Mi=null,Ni=1,Pi=``;function Fi(e,t){Ei[Di++]=ki,Ei[Di++]=Oi,Oi=e,ki=t}function Ii(e,t,n){Ai[ji++]=Ni,Ai[ji++]=Pi,Ai[ji++]=Mi,Mi=e;var r=Ni;e=Pi;var i=32-qe(r)-1;r&=~(1<<i),n+=1;var a=32-qe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ni=1<<32-qe(t)+i|n<<i|r,Pi=a+e}else Ni=1<<a|n<<i|r,Pi=e}function Li(e){e.return!==null&&(Fi(e,1),Ii(e,1,0))}function Ri(e){for(;e===Oi;)Oi=Ei[--Di],Ei[Di]=null,ki=Ei[--Di],Ei[Di]=null;for(;e===Mi;)Mi=Ai[--ji],Ai[ji]=null,Pi=Ai[--ji],Ai[ji]=null,Ni=Ai[--ji],Ai[ji]=null}function zi(e,t){Ai[ji++]=Ni,Ai[ji++]=Pi,Ai[ji++]=Mi,Ni=t.id,Pi=t.overflow,Mi=e}var Bi=null,M=null,N=!1,Vi=null,Hi=!1,Ui=Error(i(519));function Wi(e){throw Xi(Ti(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ui}function Gi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ht]=e,t[gt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Yt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),$t(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=ln),t=!0):t=!1,t||Wi(e,!0)}function Ki(e){for(Bi=e.return;Bi;)switch(Bi.tag){case 5:case 31:case 13:Hi=!1;return;case 27:case 3:Hi=!0;return;default:Bi=Bi.return}}function qi(e){if(e!==Bi)return!1;if(!N)return Ki(e),N=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&M&&Wi(e),Ki(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));M=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));M=uf(e)}else t===27?(t=M,Zd(e.type)?(e=lf,lf=null,M=e):M=t):M=Bi?cf(e.stateNode.nextSibling):null;return!0}function Ji(){M=Bi=null,N=!1}function Yi(){var e=Vi;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Vi=null),e}function Xi(e){Vi===null?Vi=[e]:Vi.push(e)}var Zi=me(null),Qi=null,$i=null;function ea(e,t,n){O(Zi,t._currentValue),t._currentValue=n}function ta(e){e._currentValue=Zi.current,D(Zi)}function na(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ra(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),na(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),na(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ia(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;kr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ve.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ra(t,e,n,r),t.flags|=262144}function aa(e){for(e=e.firstContext;e!==null;){if(!kr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function oa(e){Qi=e,$i=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function sa(e){return la(Qi,e)}function ca(e,t){return Qi===null&&oa(e),la(e,t)}function la(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},$i===null){if(e===null)throw Error(i(308));$i=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else $i=$i.next=t;return n}var ua=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},da=t.unstable_scheduleCallback,fa=t.unstable_NormalPriority,P={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pa(){return{controller:new ua,data:new Map,refCount:0}}function ma(e){e.refCount--,e.refCount===0&&da(fa,function(){e.controller.abort()})}var ha=null,ga=0,_a=0,va=null;function ya(e,t){if(ha===null){var n=ha=[];ga=0,_a=dd(),va={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ga++,t.then(ba,ba),t}function ba(){if(--ga===0&&ha!==null){va!==null&&(va.status=`fulfilled`);var e=ha;ha=null,_a=0,va=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function xa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Sa=T.S;T.S=function(e,t){eu=Fe(),typeof t==`object`&&t&&typeof t.then==`function`&&ya(e,t),Sa!==null&&Sa(e,t)};var Ca=me(null);function wa(){var e=Ca.current;return e===null?K.pooledCache:e}function Ta(e,t){t===null?O(Ca,Ca.current):O(Ca,t.pool)}function Ea(){var e=wa();return e===null?null:{parent:P._currentValue,pool:e}}var Da=Error(i(460)),Oa=Error(i(474)),ka=Error(i(542)),Aa={then:function(){}};function ja(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ma(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ln,ln),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ia(e),e;default:if(typeof t.status==`string`)t.then(ln,ln);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ia(e),e}throw Pa=t,Da}}function Na(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Pa=e,Da):e}}var Pa=null;function Fa(){if(Pa===null)throw Error(i(459));var e=Pa;return Pa=null,e}function Ia(e){if(e===Da||e===ka)throw Error(i(483))}var La=null,Ra=0;function za(e){var t=Ra;return Ra+=1,La===null&&(La=[]),Ma(La,e,t)}function Ba(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Va(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ha(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=_i(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=xi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===w&&Na(i)===t.type)?(t=a(t,n.props),Ba(t,n),t.return=e,t):(t=yi(n.type,n.key,n.props,null,e.mode,r),Ba(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ci(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=bi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=xi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=yi(t.type,t.key,t.props,null,e.mode,n),Ba(n,t),n.return=e,n;case v:return t=Ci(t,e.mode,n),t.return=e,t;case w:return t=Na(t),f(e,t,n)}if(ue(t)||se(t))return t=bi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,za(t),n);if(t.$$typeof===S)return f(e,ca(e,t),n);Va(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case w:return n=Na(n),p(e,t,n,r)}if(ue(n)||se(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,za(n),r);if(n.$$typeof===S)return p(e,t,ca(e,n),r);Va(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case w:return r=Na(r),m(e,t,n,r,i)}if(ue(r)||se(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,za(r),i);if(r.$$typeof===S)return m(e,t,n,ca(t,r),i);Va(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),N&&Fi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return N&&Fi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),N&&Fi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),N&&Fi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return N&&Fi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),N&&Fi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===w&&Na(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ba(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=bi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=yi(o.type,o.key,o.props,null,e.mode,c),Ba(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Ci(o,e.mode,c),c.return=e,e=c}return s(e);case w:return o=Na(o),b(e,r,o,c)}if(ue(o))return h(e,r,o,c);if(se(o)){if(l=se(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,za(o),c);if(o.$$typeof===S)return b(e,r,ca(e,o),c);Va(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=xi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ra=0;var i=b(e,t,n,r);return La=null,i}catch(t){if(t===Da||t===ka)throw t;var a=hi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ua=Ha(!0),Wa=Ha(!1),Ga=!1;function Ka(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=fi(e),di(e,null,n),t}return ci(e,r,t,n),fi(e)}function Xa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}function Za(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Qa=!1;function $a(){if(Qa){var e=va;if(e!==null)throw e}}function eo(e,t,n,r){Qa=!1;var i=e.updateQueue;Ga=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===_a&&(Qa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ga=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function to(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function no(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)to(n[e],t)}var ro=me(null),io=me(0);function ao(e,t){e=Wl,O(io,e),O(ro,t),Wl=e|t.baseLanes}function oo(){O(io,Wl),O(ro,ro.current)}function so(){Wl=io.current,D(ro),D(io)}var co=me(null),lo=null;function uo(e){var t=e.alternate;O(F,F.current&1),O(co,e),lo===null&&(t===null||ro.current!==null||t.memoizedState!==null)&&(lo=e)}function fo(e){O(F,F.current),O(co,e),lo===null&&(lo=e)}function po(e){e.tag===22?(O(F,F.current),O(co,e),lo===null&&(lo=e)):mo(e)}function mo(){O(F,F.current),O(co,co.current)}function ho(e){D(co),lo===e&&(lo=null),D(F)}var F=me(0);function go(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _o=0,I=null,L=null,R=null,vo=!1,yo=!1,bo=!1,xo=0,So=0,Co=null,wo=0;function z(){throw Error(i(321))}function To(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kr(e[n],t[n]))return!1;return!0}function Eo(e,t,n,r,i,a){return _o=a,I=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?Hs:Us,bo=!1,a=n(r,i),bo=!1,yo&&(a=Oo(t,n,r,i)),Do(e),a}function Do(e){T.H=Vs;var t=L!==null&&L.next!==null;if(_o=0,R=L=I=null,vo=!1,So=0,Co=null,t)throw Error(i(300));e===null||V||(e=e.dependencies,e!==null&&aa(e)&&(V=!0))}function Oo(e,t,n,r){I=e;var a=0;do{if(yo&&(Co=null),So=0,yo=!1,25<=a)throw Error(i(301));if(a+=1,R=L=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}T.H=Ws,o=t(n,r)}while(yo);return o}function ko(){var e=T.H,t=e.useState()[0];return t=typeof t.then==`function`?Fo(t):t,e=e.useState()[0],(L===null?null:L.memoizedState)!==e&&(I.flags|=1024),t}function Ao(){var e=xo!==0;return xo=0,e}function jo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Mo(e){if(vo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vo=!1}_o=0,R=L=I=null,yo=!1,So=xo=0,Co=null}function No(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return R===null?I.memoizedState=R=e:R=R.next=e,R}function B(){if(L===null){var e=I.alternate;e=e===null?null:e.memoizedState}else e=L.next;var t=R===null?I.memoizedState:R.next;if(t!==null)R=t,L=e;else{if(e===null)throw I.alternate===null?Error(i(467)):Error(i(310));L=e,e={memoizedState:L.memoizedState,baseState:L.baseState,baseQueue:L.baseQueue,queue:L.queue,next:null},R===null?I.memoizedState=R=e:R=R.next=e}return R}function Po(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fo(e){var t=So;return So+=1,Co===null&&(Co=[]),e=Ma(Co,e,t),t=I,(R===null?t.memoizedState:R.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?Hs:Us),e}function Io(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Fo(e);if(e.$$typeof===S)return sa(e)}throw Error(i(438,String(e)))}function Lo(e){var t=null,n=I.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=I.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Po(),I.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ae;return t.index++,n}function Ro(e,t){return typeof t==`function`?t(e):t}function zo(e){return Bo(B(),L,e)}function Bo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(_o&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===_a&&(d=!0);else if((_o&p)===p){u=u.next,p===_a&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,I.lanes|=p,Gl|=p;f=u.action,bo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,I.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!kr(o,e.memoizedState)&&(V=!0,d&&(n=va,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Vo(e){var t=B(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);kr(o,t.memoizedState)||(V=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ho(e,t,n){var r=I,a=B(),o=N;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!kr((L||a).memoizedState,n);if(s&&(a.memoizedState=n,V=!0),a=a.queue,ps(Go.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||R!==null&&R.memoizedState.tag&1){if(r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||_o&127||Uo(r,t,n)}return n}function Uo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=I.updateQueue,t===null?(t=Po(),I.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wo(e,t,n,r){t.value=n,t.getSnapshot=r,Ko(t)&&qo(e)}function Go(e,t,n){return n(function(){Ko(t)&&qo(e)})}function Ko(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kr(e,n)}catch{return!0}}function qo(e){var t=ui(e,2);t!==null&&hu(t,e,2)}function Jo(e){var t=No();if(typeof e==`function`){var n=e;if(e=n(),bo){Ke(!0);try{n()}finally{Ke(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:e},t}function Yo(e,t,n,r){return e.baseState=n,Bo(e,L,typeof r==`function`?r:Ro)}function Xo(e,t,n,r,a){if(Rs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};T.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Zo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Zo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=T.T,o={};T.T=o;try{var s=n(i,r),c=T.S;c!==null&&c(o,s),Qo(e,t,s)}catch(n){es(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),T.T=a}}else try{a=n(i,r),Qo(e,t,a)}catch(n){es(e,t,n)}}function Qo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){$o(e,t,n)},function(n){return es(e,t,n)}):$o(e,t,n)}function $o(e,t,n){t.status=`fulfilled`,t.value=n,ts(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Zo(e,n)))}function es(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ts(t),t=t.next;while(t!==r)}e.action=null}function ts(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ns(e,t){return t}function rs(e,t){if(N){var n=K.formState;if(n!==null){a:{var r=I;if(N){if(M){b:{for(var i=M,a=Hi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){M=cf(i.nextSibling),r=i.data===`F!`;break a}}Wi(r)}r=!1}r&&(t=n[0])}}return n=No(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:t},n.queue=r,n=Fs.bind(null,I,r),r.dispatch=n,r=Jo(!1),a=Ls.bind(null,I,!1,r.queue),r=No(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Xo.bind(null,I,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function is(e){return as(B(),L,e)}function as(e,t,n){if(t=Bo(e,t,ns)[0],e=zo(Ro)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Fo(t)}catch(e){throw e===Da?ka:e}else r=t;t=B();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(I.flags|=2048,cs(9,{destroy:void 0},os.bind(null,i,n),null)),[r,a,e]}function os(e,t){e.action=t}function ss(e){var t=B(),n=L;if(n!==null)return as(t,n,e);B(),t=t.memoizedState,n=B();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function cs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=I.updateQueue,t===null&&(t=Po(),I.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ls(){return B().memoizedState}function us(e,t,n,r){var i=No();I.flags|=e,i.memoizedState=cs(1|t,{destroy:void 0},n,r===void 0?null:r)}function ds(e,t,n,r){var i=B();r=r===void 0?null:r;var a=i.memoizedState.inst;L!==null&&r!==null&&To(r,L.memoizedState.deps)?i.memoizedState=cs(t,a,n,r):(I.flags|=e,i.memoizedState=cs(1|t,a,n,r))}function fs(e,t){us(8390656,8,e,t)}function ps(e,t){ds(2048,8,e,t)}function ms(e){I.flags|=4;var t=I.updateQueue;if(t===null)t=Po(),I.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function hs(e){var t=B().memoizedState;return ms({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function gs(e,t){return ds(4,2,e,t)}function _s(e,t){return ds(4,4,e,t)}function vs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ys(e,t,n){n=n==null?null:n.concat([e]),ds(4,4,vs.bind(null,t,e),n)}function bs(){}function xs(e,t){var n=B();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&To(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ss(e,t){var n=B();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&To(t,r[1]))return r[0];if(r=e(),bo){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r}function Cs(e,t,n){return n===void 0||_o&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),I.lanes|=e,Gl|=e,n)}function ws(e,t,n,r){return kr(n,t)?n:ro.current===null?!(_o&42)||_o&1073741824&&!(J&261930)?(V=!0,e.memoizedState=n):(e=mu(),I.lanes|=e,Gl|=e,t):(e=Cs(e,n,r),kr(e,t)||(V=!0),e)}function Ts(e,t,n,r,i){var a=E.p;E.p=a!==0&&8>a?a:8;var o=T.T,s={};T.T=s,Ls(e,!1,t,n);try{var c=i(),l=T.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Is(e,t,xa(c,r),pu(e)):Is(e,t,r,pu(e))}catch(n){Is(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{E.p=a,o!==null&&s.types!==null&&(o.types=s.types),T.T=o}}function Es(){}function Ds(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Os(e).queue;Ts(e,a,t,de,n===null?Es:function(){return ks(e),n(r)})}function Os(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:de},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ks(e){var t=Os(e);t.next===null&&(t=e.alternate.memoizedState),Is(e,t.next.queue,{},pu())}function As(){return sa(Qf)}function js(){return B().memoizedState}function Ms(){return B().memoizedState}function Ns(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ja(n);var r=Ya(t,e,n);r!==null&&(hu(r,t,n),Xa(r,t,n)),t={cache:pa()},e.payload=t;return}t=t.return}}function Ps(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Rs(e)?zs(t,n):(n=li(e,t,n,r),n!==null&&(hu(n,e,r),Bs(n,t,r)))}function Fs(e,t,n){Is(e,t,n,pu())}function Is(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rs(e))zs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,kr(s,o))return ci(e,t,i,0),K===null&&si(),!1}catch{}if(n=li(e,t,i,r),n!==null)return hu(n,e,r),Bs(n,t,r),!0}return!1}function Ls(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Rs(e)){if(t)throw Error(i(479))}else t=li(e,n,r,2),t!==null&&hu(t,e,2)}function Rs(e){var t=e.alternate;return e===I||t!==null&&t===I}function zs(e,t){yo=vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}var Vs={readContext:sa,use:Io,useCallback:z,useContext:z,useEffect:z,useImperativeHandle:z,useLayoutEffect:z,useInsertionEffect:z,useMemo:z,useReducer:z,useRef:z,useState:z,useDebugValue:z,useDeferredValue:z,useTransition:z,useSyncExternalStore:z,useId:z,useHostTransitionStatus:z,useFormState:z,useActionState:z,useOptimistic:z,useMemoCache:z,useCacheRefresh:z};Vs.useEffectEvent=z;var Hs={readContext:sa,use:Io,useCallback:function(e,t){return No().memoizedState=[e,t===void 0?null:t],e},useContext:sa,useEffect:fs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),us(4194308,4,vs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return us(4194308,4,e,t)},useInsertionEffect:function(e,t){us(4,2,e,t)},useMemo:function(e,t){var n=No();t=t===void 0?null:t;var r=e();if(bo){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=No();if(n!==void 0){var i=n(t);if(bo){Ke(!0);try{n(t)}finally{Ke(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ps.bind(null,I,e),[r.memoizedState,e]},useRef:function(e){var t=No();return e={current:e},t.memoizedState=e},useState:function(e){e=Jo(e);var t=e.queue,n=Fs.bind(null,I,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:bs,useDeferredValue:function(e,t){return Cs(No(),e,t)},useTransition:function(){var e=Jo(!1);return e=Ts.bind(null,I,e.queue,!0,!1),No().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=I,a=No();if(N){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Uo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,fs(Go.bind(null,r,o,e),[e]),r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,o,n,t),null),n},useId:function(){var e=No(),t=K.identifierPrefix;if(N){var n=Pi,r=Ni;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=xo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=wo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:As,useFormState:rs,useActionState:rs,useOptimistic:function(e){var t=No();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ls.bind(null,I,!0,n),n.dispatch=t,[e,t]},useMemoCache:Lo,useCacheRefresh:function(){return No().memoizedState=Ns.bind(null,I)},useEffectEvent:function(e){var t=No(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Us={readContext:sa,use:Io,useCallback:xs,useContext:sa,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:zo,useRef:ls,useState:function(){return zo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){return ws(B(),L.memoizedState,e,t)},useTransition:function(){var e=zo(Ro)[0],t=B().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:is,useActionState:is,useOptimistic:function(e,t){return Yo(B(),L,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Us.useEffectEvent=hs;var Ws={readContext:sa,use:Io,useCallback:xs,useContext:sa,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:Vo,useRef:ls,useState:function(){return Vo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){var n=B();return L===null?Cs(n,e,t):ws(n,L.memoizedState,e,t)},useTransition:function(){var e=Vo(Ro)[0],t=B().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:ss,useActionState:ss,useOptimistic:function(e,t){var n=B();return L===null?(n.baseState=e,[e,n.queue.dispatch]):Yo(n,L,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Ws.useEffectEvent=hs;function Gs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ks={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ja(r);i.payload=t,n!=null&&(i.callback=n),t=Ya(e,i,r),t!==null&&(hu(t,e,r),Xa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ja(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ya(e,i,r),t!==null&&(hu(t,e,r),Xa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ja(n);r.tag=2,t!=null&&(r.callback=t),t=Ya(e,r,n),t!==null&&(hu(t,e,n),Xa(t,e,n))}};function qs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ar(n,r)||!Ar(i,a):!0}function Js(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ks.enqueueReplaceState(t,t.state,null)}function Ys(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Xs(e){ri(e)}function Zs(e){console.error(e)}function Qs(e){ri(e)}function $s(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function ec(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){return n=Ja(n),n.tag=3,n.payload={element:null},n.callback=function(){$s(e,t)},n}function nc(e){return e=Ja(e),e.tag=3,e}function rc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){ec(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){ec(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ic(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ia(t,n,a,!0),n=co.current,n!==null){switch(n.tag){case 31:case 13:return lo===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Aa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Aa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(N)return t=co.current,t===null?(r!==Ui&&(t=Error(i(423),{cause:r}),Xi(Ti(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ti(r,n),a=tc(e.stateNode,r,a),Za(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ui&&(e=Error(i(422),{cause:r}),Xi(Ti(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ti(o,n),Xl===null?Xl=[o]:Xl.push(o),X!==4&&(X=2),t===null)return!0;r=Ti(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=tc(n.stateNode,r,e),Za(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=nc(a),rc(a,e,n,r),Za(n,a),!1}n=n.return}while(n!==null);return!1}var ac=Error(i(461)),V=!1;function oc(e,t,n,r){t.child=e===null?Wa(t,null,n,r):Ua(t,e.child,n,r)}function sc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return oa(t),r=Eo(e,t,n,o,a,i),s=Ao(),e!==null&&!V?(jo(e,t,i),jc(e,t,i)):(N&&s&&Li(t),t.flags|=1,oc(e,t,r,i),t.child)}function cc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!gi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,lc(e,t,a,r,i)):(e=yi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Mc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Ar:n,n(o,r)&&e.ref===t.ref)return jc(e,t,i)}return t.flags|=1,e=_i(a,r),e.ref=t.ref,e.return=t,t.child=e}function lc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ar(a,r)&&e.ref===t.ref)if(V=!1,t.pendingProps=r=a,Mc(e,i))e.flags&131072&&(V=!0);else return t.lanes=e.lanes,jc(e,t,i)}return _c(e,t,n,r,i)}function uc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return fc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ta(t,a===null?null:a.cachePool),a===null?oo():ao(t,a),po(t);else return r=t.lanes=536870912,fc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ta(t,null),oo(),mo(t)):(Ta(t,a.cachePool),ao(t,a),mo(t),t.memoizedState=null);return oc(e,t,i,n),t.child}function dc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function fc(e,t,n,r,i){var a=wa();return a=a===null?null:{parent:P._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ta(t,null),oo(),po(t),e!==null&&ia(e,t,r,!0),t.childLanes=i,null}function pc(e,t){return t=Ec({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function mc(e,t,n){return Ua(t,e.child,null,n),e=pc(t,t.pendingProps),e.flags|=2,ho(t),t.memoizedState=null,e}function hc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(N){if(r.mode===`hidden`)return e=pc(t,r),t.lanes=536870912,dc(null,e);if(fo(t),(e=M)?(e=rf(e,Hi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mi===null?null:{id:Ni,overflow:Pi},retryLane:536870912,hydrationErrors:null},n=Si(e),n.return=t,t.child=n,Bi=t,M=null)):e=null,e===null)throw Wi(t);return t.lanes=536870912,null}return pc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(fo(t),a)if(t.flags&256)t.flags&=-257,t=mc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(V||ia(e,t,n,!1),a=(n&e.childLanes)!==0,V||a){if(r=K,r!==null&&(s=ut(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ui(e,s),hu(r,e,s),ac;Du(),t=mc(e,t,n)}else e=o.treeContext,M=cf(s.nextSibling),Bi=t,N=!0,Vi=null,Hi=!1,e!==null&&zi(t,e),t=pc(t,r),t.flags|=4096;return t}return e=_i(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function gc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function _c(e,t,n,r,i){return oa(t),n=Eo(e,t,n,r,void 0,i),r=Ao(),e!==null&&!V?(jo(e,t,i),jc(e,t,i)):(N&&r&&Li(t),t.flags|=1,oc(e,t,n,i),t.child)}function vc(e,t,n,r,i,a){return oa(t),t.updateQueue=null,n=Oo(t,r,n,i),Do(e),r=Ao(),e!==null&&!V?(jo(e,t,a),jc(e,t,a)):(N&&r&&Li(t),t.flags|=1,oc(e,t,n,a),t.child)}function yc(e,t,n,r,i){if(oa(t),t.stateNode===null){var a=pi,o=n.contextType;typeof o==`object`&&o&&(a=sa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ks,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ka(t),o=n.contextType,a.context=typeof o==`object`&&o?sa(o):pi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Gs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ks.enqueueReplaceState(a,a.state,null),eo(t,r,a,i),$a(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ys(n,s);a.props=c;var l=a.context,u=n.contextType;o=pi,typeof u==`object`&&u&&(o=sa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Js(t,a,r,o),Ga=!1;var f=t.memoizedState;a.state=f,eo(t,r,a,i),$a(),l=t.memoizedState,s||f!==l||Ga?(typeof d==`function`&&(Gs(t,n,d,r),l=t.memoizedState),(c=Ga||qs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,qa(e,t),o=t.memoizedProps,u=Ys(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=pi,typeof l==`object`&&l&&(c=sa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Js(t,a,r,c),Ga=!1,f=t.memoizedState,a.state=f,eo(t,r,a,i),$a();var p=t.memoizedState;o!==d||f!==p||Ga||e!==null&&e.dependencies!==null&&aa(e.dependencies)?(typeof s==`function`&&(Gs(t,n,s,r),p=t.memoizedState),(u=Ga||qs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&aa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,gc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ua(t,e.child,null,i),t.child=Ua(t,null,n,i)):oc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=jc(e,t,i),e}function bc(e,t,n,r){return Ji(),t.flags|=256,oc(e,t,n,r),t.child}var xc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sc(e){return{baseLanes:e,cachePool:Ea()}}function Cc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function wc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(F.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(N){if(a?uo(t):mo(t),(e=M)?(e=rf(e,Hi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mi===null?null:{id:Ni,overflow:Pi},retryLane:536870912,hydrationErrors:null},n=Si(e),n.return=t,t.child=n,Bi=t,M=null)):e=null,e===null)throw Wi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(mo(t),a=t.mode,c=Ec({mode:`hidden`,children:c},a),r=bi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(null,r)):(uo(t),Tc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(uo(t),t.flags&=-257,t=Dc(e,t,n)):t.memoizedState===null?(mo(t),c=r.fallback,a=t.mode,r=Ec({mode:`visible`,children:r.children},a),c=bi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ua(t,e.child,null,n),r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,t=dc(null,r)):(mo(t),t.child=e.child,t.flags|=128,t=null);else if(uo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Xi({value:r,source:null,stack:null}),t=Dc(e,t,n)}else if(V||ia(e,t,n,!1),s=(n&e.childLanes)!==0,V||s){if(s=K,s!==null&&(r=ut(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ui(e,r),hu(s,e,r),ac;af(c)||Du(),t=Dc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,M=cf(c.nextSibling),Bi=t,N=!0,Vi=null,Hi=!1,e!==null&&zi(t,e),t=Tc(t,r.children),t.flags|=4096);return t}return a?(mo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=_i(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=bi(c,a,n,null),c.flags|=2):c=_i(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,dc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Sc(n):(a=c.cachePool,a===null?a=Ea():(l=P._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(e.child,r)):(uo(t),n=e.child,e=n.sibling,n=_i(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Tc(e,t){return t=Ec({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Ec(e,t){return e=hi(22,e,null,t),e.lanes=0,e}function Dc(e,t,n){return Ua(t,e.child,null,n),e=Tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Oc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),na(e.return,t,n)}function kc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ac(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=F.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,O(F,o),oc(e,t,r,n),r=N?ki:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oc(e,n,t);else if(e.tag===19)Oc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&go(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),kc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&go(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}kc(t,!0,n,null,a,r);break;case`together`:kc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function jc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ia(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=_i(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_i(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&aa(e))):!0}function Nc(e,t,n){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),ea(t,P,e.memoizedState.cache),Ji();break;case 27:case 5:xe(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:ea(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,fo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(uo(t),e=jc(e,t,n),e===null?null:e.sibling):wc(e,t,n):(uo(t),t.flags|=128,null);uo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(ia(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ac(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(F,F.current),r)break;return null;case 22:return t.lanes=0,uc(e,t,n,t.pendingProps);case 24:ea(t,P,e.memoizedState.cache)}return jc(e,t,n)}function Pc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)V=!0;else{if(!Mc(e,n)&&!(t.flags&128))return V=!1,Nc(e,t,n);V=!!(e.flags&131072)}else V=!1,N&&t.flags&1048576&&Ii(t,ki,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Na(t.elementType),t.type=e,typeof e==`function`)gi(e)?(r=Ys(e,r),t.tag=1,t=yc(null,t,e,r,n)):(t.tag=0,t=_c(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=sc(null,t,e,r,n);break a}else if(a===re){t.tag=14,t=cc(null,t,e,r,n);break a}}throw t=le(e)||e,Error(i(306,t,``))}}return t;case 0:return _c(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ys(r,t.pendingProps),yc(e,t,r,a,n);case 3:a:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,qa(e,t),eo(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ea(t,P,r),r!==o.cache&&ra(t,[P],n,!0),$a(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=bc(e,t,r,n);break a}else if(r!==a){a=Ti(Error(i(424)),t),Xi(a),t=bc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(M=cf(e.firstChild),Bi=t,N=!0,Vi=null,Hi=!0,n=Wa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ji(),r===a){t=jc(e,t,n);break a}oc(e,t,r,n)}t=t.child}return t;case 26:return gc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:N||(n=t.type,e=t.pendingProps,r=Bd(_e.current).createElement(n),r[ht]=t,r[gt]=e,Pd(r,n,e),Ot(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xe(t),e===null&&N&&(r=t.stateNode=ff(t.type,t.pendingProps,_e.current),Bi=t,Hi=!0,a=M,Zd(t.type)?(lf=a,M=cf(r.firstChild)):M=a),oc(e,t,t.pendingProps.children,n),gc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&N&&((a=r=M)&&(r=tf(r,t.type,t.pendingProps,Hi),r===null?a=!1:(t.stateNode=r,Bi=t,M=cf(r.firstChild),Hi=!1,a=!0)),a||Wi(t)),xe(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Eo(e,t,ko,null,null,n),Qf._currentValue=a),gc(e,t),oc(e,t,r,n),t.child;case 6:return e===null&&N&&((e=n=M)&&(n=nf(n,t.pendingProps,Hi),n===null?e=!1:(t.stateNode=n,Bi=t,M=null,e=!0)),e||Wi(t)),null;case 13:return wc(e,t,n);case 4:return ye(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ua(t,null,r,n):oc(e,t,r,n),t.child;case 11:return sc(e,t,t.type,t.pendingProps,n);case 7:return oc(e,t,t.pendingProps,n),t.child;case 8:return oc(e,t,t.pendingProps.children,n),t.child;case 12:return oc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ea(t,t.type,r.value),oc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,oa(t),a=sa(a),r=r(a),t.flags|=1,oc(e,t,r,n),t.child;case 14:return cc(e,t,t.type,t.pendingProps,n);case 15:return lc(e,t,t.type,t.pendingProps,n);case 19:return Ac(e,t,n);case 31:return hc(e,t,n);case 22:return uc(e,t,n,t.pendingProps);case 24:return oa(t),r=sa(P),e===null?(a=wa(),a===null&&(a=K,o=pa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ka(t),ea(t,P,a)):((e.lanes&n)!==0&&(qa(e,t),eo(t,null,null,n),$a()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ea(t,P,r),r!==a.cache&&ra(t,[P],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ea(t,P,r))),oc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Fc(e){e.flags|=4}function Ic(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Pa=Aa,Oa}else e.flags&=-16777217}function Lc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Pa=Aa,Oa}function Rc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:it(),e.lanes|=t,Yl|=t)}function zc(e,t){if(!N)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function H(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bc(e,t,n){var r=t.pendingProps;switch(Ri(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return H(t),null;case 1:return H(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ta(P),be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(qi(t)?Fc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Yi())),H(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Fc(t),o===null?(H(t),Ic(t,a,null,r,n)):(H(t),Lc(t,o))):o?o===e.memoizedState?(H(t),t.flags&=-16777217):(Fc(t),H(t),Lc(t,o)):(e=e.memoizedProps,e!==r&&Fc(t),H(t),Ic(t,a,e,r,n)),null;case 27:if(Se(t),n=_e.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}e=he.current,qi(t)?Gi(t,e):(e=ff(a,r,n),t.stateNode=e,Fc(t))}return H(t),null;case 5:if(Se(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}if(o=he.current,qi(t))Gi(t,o);else{var s=Bd(_e.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[ht]=t,o[gt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Fc(t)}}return H(t),Ic(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=_e.current,qi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Bi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ht]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Wi(t,!0)}else e=Bd(e).createTextNode(r),e[ht]=t,t.stateNode=e}return H(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=qi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[ht]=t}else Ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),e=!1}else n=Yi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ho(t),t):(ho(t),null);if(t.flags&128)throw Error(i(558))}return H(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=qi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ht]=t}else Ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),a=!1}else a=Yi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(ho(t),t):(ho(t),null)}return ho(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Rc(t,t.updateQueue),H(t),null);case 4:return be(),e===null&&Sd(t.stateNode.containerInfo),H(t),null;case 10:return ta(t.type),H(t),null;case 19:if(D(F),r=t.memoizedState,r===null)return H(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)zc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=go(e),o!==null){for(t.flags|=128,zc(r,!1),e=o.updateQueue,t.updateQueue=e,Rc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)vi(n,e),n=n.sibling;return O(F,F.current&1|2),N&&Fi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Fe()>tu&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304)}else{if(!a)if(e=go(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Rc(t,e),zc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!N)return H(t),null}else 2*Fe()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(H(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Fe(),e.sibling=null,n=F.current,O(F,a?n&1|2:n&1),N&&Fi(t,r.treeForkCount),e);case 22:case 23:return ho(t),so(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(H(t),t.subtreeFlags&6&&(t.flags|=8192)):H(t),n=t.updateQueue,n!==null&&Rc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&D(Ca),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ta(P),H(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Vc(e,t){switch(Ri(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ta(P),be(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Se(t),null;case 31:if(t.memoizedState!==null){if(ho(t),t.alternate===null)throw Error(i(340));Ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ho(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(F),null;case 4:return be(),null;case 10:return ta(t.type),null;case 22:case 23:return ho(t),so(),e!==null&&D(Ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ta(P),null;case 25:return null;default:return null}}function Hc(e,t){switch(Ri(t),t.tag){case 3:ta(P),be();break;case 26:case 27:case 5:Se(t);break;case 4:be();break;case 31:t.memoizedState!==null&&ho(t);break;case 13:ho(t);break;case 19:D(F);break;case 10:ta(t.type);break;case 22:case 23:ho(t),so(),e!==null&&D(Ca);break;case 24:ta(P)}}function Uc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Wc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Gc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{no(t,n)}catch(t){Z(e,e.return,t)}}}function Kc(e,t,n){n.props=Ys(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function qc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Jc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Yc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Xc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[gt]=t}catch(t){Z(e,e.return,t)}}function Zc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Qc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ln));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[ht]=e,t[gt]=n}catch(t){Z(e,e.return,t)}}var nl=!1,U=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Pr(e),Fr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ys(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Uc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ys(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Gc(n),r&512&&qc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{no(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&tl(n);case 26:case 5:xl(e,n),t===null&&r&4&&Yc(n),r&512&&qc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||nl,!r){t=t!==null&&t.memoizedState!==null||U,i=nl;var a=U;nl=r,(U=t)&&!a?Cl(e,n,(n.subtreeFlags&8772)!=0):xl(e,n),nl=i,U=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ct(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount==`function`)try{Ge.onCommitFiberUnmount(We,n)}catch{}switch(n.tag){case 26:U||Jc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:U||Jc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:U||Jc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null)if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Wc(2,n,t),U||Wc(4,n,t),ul(e,t,n);break;case 1:U||(Jc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Kc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:U=(r=U)||n.memoizedState!==null,ul(e,t,n),U=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Wc(3,e,e.return),Uc(3,e),Wc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),r&64&&nl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[St]||o[ht]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[ht]=e,Ot(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[ht]=e,Ot(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Xc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),n!==null&&r&4&&Xc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),e.flags&32){a=e.stateNode;try{en(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Xc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Fe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=nl,d=U;if(nl=u||a,U=d||l,gl(t,e),U=d,nl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||nl||U||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Zc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;el(e,Qc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(en(o,``),n.flags&=-33),el(e,Qc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;$c(e,Qc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wc(4,t,t.return),Sl(t);break;case 1:Jc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Kc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:Jc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Uc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)to(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Gc(a),qc(a,a.return);break;case 27:tl(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Yc(a),qc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),qc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ma(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Uc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Uc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Wc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Wc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ma(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=sa(P),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return sa(P).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:T.T===null?pt():dd()}function mu(){if(Jl===0)if(!(J&536870912)||N){var e=Qe;Qe<<=1,!(Qe&3932160)&&(Qe=262144),Jl=e}else Jl=536870912;return e=co.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),ot(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||nt(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Fe(),10<a)){if(yu(r,t,Jl,!Vl),tt(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ln},Ml(t,a,d);var m=(a&62914560)===a?$l-Fe():(a&4194048)===a?eu-Fe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!kr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-qe(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ct(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,$i=Qi=null,Mo(e),La=null,Ra=0,e=q;for(;e!==null;)Hc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=_i(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=nt(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-qe(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,si(),n}function Cu(e,t){I=null,T.H=Vs,t===Da||t===ka?(t=Fa(),Y=3):t===Oa?(t=Fa(),Y=4):Y=t===ac?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,$s(e,Ti(t,e.current)))}function wu(){var e=co.current;return e===null?!0:(J&4194048)===J?lo===null:(J&62914560)===J||J&536870912?e===lo:!1}function Tu(){var e=T.H;return T.H=Vs,e===null?Vs:e}function Eu(){var e=T.A;return T.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&co.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:co.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,$i=Qi=null,G=r,T.H=i,T.A=a,q===null&&(K=null,J=0,si()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(nu=null,tu=Fe()+500,Su(e,t)):Hl=nt(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(ja(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:ja(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),X=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return $i=Qi=null,T.H=r,T.A=a,G=n,q===null?(K=null,J=0,si(),X):0}function ju(){for(;q!==null&&!Ne();)Mu(q)}function Mu(e){var t=Pc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=vc(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=vc(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Mo(t);default:Hc(n,t),t=q=vi(t,Wl),t=Pc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){$i=Qi=null,Mo(t),La=null,Ra=0;var i=t.return;try{if(ic(e,i,t,n,J)){X=1,$s(e,Ti(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,$s(e,Ti(n,e.current)),q=null;return}t.flags&32768?(N||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=co.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=Bc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Vc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=oi,st(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(ze,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=T.T,T.T=null,a=E.p,E.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,E.p=a,T.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=Pr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Nr(s.ownerDocument.documentElement,s)){if(c!==null&&Fr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Mr(s,h),v=Mr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,E.p=r,T.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,E.p=r,T.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Pe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),ft(n),t=t.stateNode,Ge&&typeof Ge.onCommitFiberRoot==`function`)try{Ge.onCommitFiberRoot(We,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=T.T,i=E.p,E.p=2,T.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{T.T=t,E.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ma(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=ft(su),r=T.T,a=E.p;try{E.p=32>n?32:n,T.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot==`function`)try{Ge.onPostCommitFiberRoot(We,o)}catch{}return!0}finally{E.p=a,T.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ti(n,t),t=tc(e.stateNode,t,2),e=Ya(e,t,2),e!==null&&(ot(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=Ti(n,e),n=nc(2),r=Ya(t,n,2),r!==null&&(rc(n,r,t,e),ot(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>Fe()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=it()),e=ui(e,t),e!==null&&(ot(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return je(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-qe(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=tt(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||nt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Fe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-qe(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=rt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=tt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Me(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||nt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Me(r),ft(n)){case 2:case 8:n=Re;break;case 32:n=ze;break;case 268435456:n=Ve;break;default:n=ze}return r=cd.bind(null,e),n=je(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Me(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=tt(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Fe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?je(Le,ad):od()})}function dd(){if(nd===0){var e=_a;e===0&&(e=Ze,Ze<<=1,!(Ze&261888)&&(Ze=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:cn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[gt]||null).action),o=r.submitter;o&&(t=(t=o[gt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new An(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ds(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ds(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ti.length;hd++){var gd=ti[hd];ni(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ni(qr,`onAnimationEnd`),ni(Jr,`onAnimationIteration`),ni(Yr,`onAnimationStart`),ni(`dblclick`,`onDoubleClick`),ni(`focusin`,`onFocus`),ni(`focusout`,`onBlur`),ni(Xr,`onTransitionRun`),ni(Zr,`onTransitionStart`),ni(Qr,`onTransitionCancel`),ni($r,`onTransitionEnd`),Mt(`onMouseEnter`,[`mouseout`,`mouseover`]),Mt(`onMouseLeave`,[`mouseout`,`mouseover`]),Mt(`onPointerEnter`,[`pointerout`,`pointerover`]),Mt(`onPointerLeave`,[`pointerout`,`pointerover`]),jt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),jt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),jt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),jt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ri(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ri(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[vt];n===void 0&&(n=t[vt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,kt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!yn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=wt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}gn(function(){var r=a,i=dn(n),s=[];a:{var c=ei.get(e);if(c!==void 0){var l=An,u=e;switch(e){case`keypress`:if(Tn(n)===0)break a;case`keydown`:case`keyup`:l=Jn;break;case`focusin`:u=`focus`,l=zn;break;case`focusout`:u=`blur`,l=zn;break;case`beforeblur`:case`afterblur`:l=zn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Ln;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Rn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Xn;break;case qr:case Jr:case Yr:l=Bn;break;case $r:l=Zn;break;case`scroll`:case`scrollend`:l=Mn;break;case`wheel`:l=Qn;break;case`copy`:case`cut`:case`paste`:l=Vn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Yn;break;case`toggle`:case`beforetoggle`:l=$n}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=_n(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==un&&(u=n.relatedTarget||n.fromElement)&&(wt(u)||u[_t]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?wt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Ln,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Yn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Et(l),h=u==null?c:Et(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,wt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Et(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=j;else if(fr(c))if(vr)v=Dr;else{v=Tr;var y=wr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&an(r.elementType)&&(v=j):v=Er;if(v&&=v(e,r)){pr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Xt(c,`number`,c.value)}switch(y=r?Et(r):window,e){case`focusin`:(fr(y)||y.contentEditable===`true`)&&(Lr=y,Rr=r,zr=null);break;case`focusout`:zr=Rr=Lr=null;break;case`mousedown`:Br=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Br=!1,Vr(s,n,i);break;case`selectionchange`:if(Ir)break;case`keydown`:case`keyup`:Vr(s,n,i)}var b;if(tr)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else cr?or(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(rr&&n.locale!==`ko`&&(cr||x!==`onCompositionStart`?x===`onCompositionEnd`&&cr&&(b=wn()):(xn=i,Sn=`value`in xn?xn.value:xn.textContent,cr=!0)),y=Ed(r,x),0<y.length&&(x=new Hn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=sr(n),b!==null&&(x.data=b)))),(b=nr?lr(e,n):ur(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Hn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=_n(e,n),i!=null&&r.unshift(Td(e,i,a)),i=_n(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=_n(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=_n(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||en(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&en(e,``+r);break;case`className`:Rt(e,`class`,r);break;case`tabIndex`:Rt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Rt(e,n,r);break;case`style`:rn(e,r,o);break;case`data`:if(t!==`object`){Rt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=cn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Lt(e,`popover`,r);break;case`xlinkActuate`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Lt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=on.get(n)||n,Lt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:rn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?en(e,r):(typeof r==`number`||typeof r==`bigint`)&&en(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!At.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[gt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Lt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Yt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Zt(e,!!r,n,!0):Zt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}$t(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(an(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Jt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Zt(e,!!n,n?[]:``,!1):Zt(e,!!n,t,!0)):Zt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Qt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(an(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[St]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),Ct(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[St])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ct(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=E.d;E.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Tt(e);t!==null&&t.tag===5&&t.type===`form`?ks(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=qt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Ot(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+qt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+qt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+qt(n.imageSizes)+`"]`)):i+=`[href="`+qt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Ot(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+qt(r)+`"][href="`+qt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Ot(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Dt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Ot(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Ot(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Ot(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=_e.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Dt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Dt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Dt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+qt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Ot(t),e.head.appendChild(t))}function Pf(e){return`[src="`+qt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+qt(n.href)+`"]`);if(r)return t.instance=r,Ot(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Ot(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Ot(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Ot(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Ot(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Ot(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[St]||a[ht]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Ot(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Ot(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=at(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=at(0),this.hiddenUpdates=at(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=hi(3,null,null,t),e.current=a,a.stateNode=e,t=pa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ka(a),e}function tp(e){return e?(e=pi,e):pi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ja(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ya(e,r,t),n!==null&&(hu(n,e,t),Xa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ui(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=dt(t);var n=ui(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=2,up(e,t,n,r)}finally{E.p=a,T.T=i}}function lp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=8,up(e,t,n,r)}finally{E.p=a,T.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Tt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=et(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-qe(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=Fe()+500,id(0,!1))}}break;case 31:case 13:s=ui(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=dn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=wt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ie()){case Le:return 2;case Re:return 8;case ze:case Be:return 32;case Ve:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Tt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=wt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);un=r,n.target.dispatchEvent(r),un=null}else return t=Tt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Tt(n);a!==null&&(e.splice(t,3),t-=3,Ds(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[gt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[gt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[_t]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=pt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.7`)throw Error(i(527,Lp,`19.2.7`));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.7`,rendererPackageName:`react-dom`,currentDispatcherRef:T,reconcilerVersion:`19.2.7`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{We=zp.inject(Rp),Ge=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Xs,s=Zs,c=Qs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[_t]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=`modulepreload`,v=function(e){return`/-/`+e},y={},b=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,new URL(`../../../src/node/plugins/importAnalysisBuild.ts`,import.meta.url)).href}r=o(t.map(t=>{if(t=v(t,n),t=s(t),t in y)return;y[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:_,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},x=c(u(),1),ee=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,S=/^[\\/]{2}/;function C(e,t){return t+e.replace(/\\/g,`/`)}var te=`popstate`;function ne(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function re(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return se(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:ce(t)}return ue(t,n,null,e)}function w(e,t){if(e===!1||e==null)throw Error(t)}function ie(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function ae(){return Math.random().toString(36).substring(2,10)}function oe(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function se(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?le(t):t,state:n,key:t&&t.key||r||ae(),mask:i}}function ce({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function le(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function ue(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=ne(e)?e:se(h.location,e,t);n&&n(r,e),l=u()+1;let d=oe(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=ne(e)?e:se(h.location,e,t);n&&n(r,e),l=u();let i=oe(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return T(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(te,d),c=e,()=>{i.removeEventListener(te,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function T(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),w(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:ce(t);return i=i.replace(/ $/,`%20`),!n&&S.test(i)&&(i=r+i),new URL(i,r)}function E(e,t,n=`/`){return de(e,t,n,!1)}function de(e,t,n,r,i){let a=ke((typeof t==`string`?le(t):t).pathname||`/`,n);if(a==null)return null;let o=i??pe(e),s=null,c=Oe(a);for(let e=0;s==null&&e<o.length;++e)s=we(o[e],c,r);return s}function fe(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function pe(e){let t=me(e);return O(t),t}function me(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;w(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Le([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(w(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),me(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:Se(l,e.index),routesMeta:u.map((e,t)=>{let[n,r]=De(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of D(e.path))a(e,t,!0,n)}),t}function D(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=D(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function O(e){e.sort((e,t)=>e.score===t.score?Ce(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var he=/^:[\w-]+$/,ge=3,_e=2,ve=1,ye=10,be=-2,xe=e=>e===`*`;function Se(e,t){let n=e.split(`/`),r=n.length;return n.some(xe)&&(r+=be),t&&(r+=_e),n.filter(e=>!xe(e)).reduce((e,t)=>e+(he.test(t)?ge:t===``?ve:ye),r)}function Ce(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function we(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d=s.matcher&&s.compiledParams?Ee(u,l,s.matcher,s.compiledParams):Te(u,l),f=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=Te({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Le([a,d.pathname]),pathnameBase:ze(Le([a,d.pathnameBase])),route:f}),d.pathnameBase!==`/`&&(a=Le([a,d.pathnameBase]))}return o}function Te(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=De(e.path,e.caseSensitive,e.end);return Ee(e,t,n,r)}function Ee(e,t,n,r){let i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function De(e,t=!1,n=!0){ie(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Oe(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return ie(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function ke(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function Ae(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?le(e):e,a;return n?(n=Ie(n),a=n.startsWith(`/`)?je(n.substring(1),`/`):je(n,t)):a=t,{pathname:a,search:Be(r),hash:Ve(i)}}function je(e,t){let n=Re(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Me(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ne(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Pe(e){let t=Ne(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Fe(e,t,n,r=!1){let i;typeof e==`string`?i=le(e):(i={...e},w(!i.pathname||!i.pathname.includes(`?`),Me(`?`,`pathname`,`search`,i)),w(!i.pathname||!i.pathname.includes(`#`),Me(`#`,`pathname`,`hash`,i)),w(!i.search||!i.search.includes(`#`),Me(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Ae(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Ie=e=>e.replace(/[\\/]{2,}/g,`/`),Le=e=>Ie(e.join(`/`)),Re=e=>e.replace(/\/+$/,``),ze=e=>Re(e).replace(/^\/*/,`/`),Be=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Ve=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,He=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Ue(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function We(e){return Le(e.map(e=>e.route.path).filter(Boolean))||`/`}var Ge=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Ke(e,t){let n=e;if(typeof n!=`string`||!ee.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Ge)try{let e=new URL(window.location.href),r=S.test(n)?new URL(C(n,e.protocol)):new URL(n),a=ke(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{ie(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var qe=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(qe);var Je=[`GET`,...qe];new Set(Je);var Ye=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];function Xe(e){try{return Ye.includes(new URL(e).protocol)}catch{return!1}}var Ze=x.createContext(null);Ze.displayName=`DataRouter`;var Qe=x.createContext(null);Qe.displayName=`DataRouterState`;var $e=x.createContext(!1);function et(){return x.useContext($e)}var tt=x.createContext({isTransitioning:!1});tt.displayName=`ViewTransition`;var nt=x.createContext(new Map);nt.displayName=`Fetchers`;var rt=x.createContext(null);rt.displayName=`Await`;var it=x.createContext(null);it.displayName=`Navigation`;var at=x.createContext(null);at.displayName=`Location`;var ot=x.createContext({outlet:null,matches:[],isDataRoute:!1});ot.displayName=`Route`;var st=x.createContext(null);st.displayName=`RouteError`;var ct=`REACT_ROUTER_ERROR`,lt=`REDIRECT`,ut=`ROUTE_ERROR_RESPONSE`;function dt(e){if(e.startsWith(`${ct}:${lt}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function ft(e){if(e.startsWith(`${ct}:${ut}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new He(t.status,t.statusText,t.data)}catch{}}function pt(e,{relative:t}={}){w(mt(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=x.useContext(it),{hash:i,pathname:a,search:o}=bt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Le([n,a])),r.createHref({pathname:s,search:o,hash:i})}function mt(){return x.useContext(at)!=null}function k(){return w(mt(),`useLocation() may be used only in the context of a <Router> component.`),x.useContext(at).location}var ht=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function gt(e){x.useContext(it).static||x.useLayoutEffect(e)}function _t(){let{isDataRoute:e}=x.useContext(ot);return e?zt():vt()}function vt(){w(mt(),`useNavigate() may be used only in the context of a <Router> component.`);let e=x.useContext(Ze),{basename:t,navigator:n}=x.useContext(it),{matches:r}=x.useContext(ot),{pathname:i}=k(),a=JSON.stringify(Pe(r)),o=x.useRef(!1);return gt(()=>{o.current=!0}),x.useCallback((r,s={})=>{if(ie(o.current,ht),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Fe(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Le([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}x.createContext(null);function yt(){let{matches:e}=x.useContext(ot);return e[e.length-1]?.params??{}}function bt(e,{relative:t}={}){let{matches:n}=x.useContext(ot),{pathname:r}=k(),i=JSON.stringify(Pe(n));return x.useMemo(()=>Fe(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function xt(e,t){return St(e,t)}function St(e,t,n){w(mt(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=x.useContext(it),{matches:i}=x.useContext(ot),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Vt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=k(),d;if(t){let e=typeof t==`string`?le(t):t;w(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):E(e,{pathname:p});ie(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),ie(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=kt(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Le([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Le([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?x.createElement(at.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function Ct(){let e=Rt(),t=Ue(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=x.createElement(x.Fragment,null,x.createElement(`p`,null,`💿 Hey developer 👋`),x.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,x.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,x.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),x.createElement(x.Fragment,null,x.createElement(`h2`,null,`Unexpected Application Error!`),x.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?x.createElement(`pre`,{style:i},n):null,o)}var wt=x.createElement(Ct,null),Tt=class extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=ft(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:x.createElement(ot.Provider,{value:this.props.routeContext},x.createElement(st.Provider,{value:e,children:this.props.component}));return this.context?x.createElement(Dt,{error:e},t):t}};Tt.contextType=$e;var Et=new WeakMap;function Dt({children:e,error:t}){let{basename:n}=x.useContext(it);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=dt(t.digest);if(e){let r=Et.get(t);if(r)throw r;let i=Ke(e.location,n),a=i.absoluteURL||i.to;if(Xe(a))throw Error(`Invalid redirect location`);if(Ge&&!Et.get(t))if(i.isExternal||e.reloadDocument)window.location.href=a;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw Et.set(t,n),n}return x.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${a}`})}}return e}function Ot({routeContext:e,match:t,children:n}){let r=x.useContext(Ze);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(ot.Provider,{value:e},n)}function kt(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);w(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:We(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||wt,o&&(s<0&&c===0?(Vt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?x.createElement(n.route.Component,null):n.route.element?n.route.element:e,x.createElement(Ot,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?x.createElement(Tt,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function At(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jt(e){let t=x.useContext(Ze);return w(t,At(e)),t}function Mt(e){let t=x.useContext(Qe);return w(t,At(e)),t}function Nt(e){let t=x.useContext(ot);return w(t,At(e)),t}function Pt(e){let t=Nt(e),n=t.matches[t.matches.length-1];return w(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Ft(){return Pt(`useRouteId`)}function It(){let e=Mt(`useNavigation`);return x.useMemo(()=>{let{matches:t,historyAction:n,...r}=e.navigation;return r},[e.navigation])}function Lt(){let{matches:e,loaderData:t}=Mt(`useMatches`);return x.useMemo(()=>e.map(e=>fe(e,t)),[e,t])}function Rt(){let e=x.useContext(st),t=Mt(`useRouteError`),n=Pt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function zt(){let{router:e}=jt(`useNavigate`),t=Pt(`useNavigate`),n=x.useRef(!1);return gt(()=>{n.current=!0}),x.useCallback(async(r,i={})=>{ie(n.current,ht),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Bt={};function Vt(e,t,n){!t&&!Bt[e]&&(Bt[e]=!0,ie(!1,n))}x.memo(Ht);function Ht({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return St(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function Ut({to:e,replace:t,state:n,relative:r}){w(mt(),`<Navigate> may be used only in the context of a <Router> component.`);let{static:i}=x.useContext(it);ie(!i,`<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);let{matches:a}=x.useContext(ot),{pathname:o}=k(),s=_t(),c=Fe(e,Pe(a),o,r===`path`),l=JSON.stringify(c);return x.useEffect(()=>{s(JSON.parse(l),{replace:t,state:n,relative:r})},[s,l,r,t,n]),null}function Wt(e){w(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Gt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){w(!mt(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=x.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=le(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=x.useMemo(()=>{let e=ke(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return ie(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:x.createElement(it.Provider,{value:c},x.createElement(at.Provider,{children:t,value:h}))}function Kt({children:e,location:t}){return xt(qt(e),t)}x.Component;function qt(e,t=[]){let n=[];return x.Children.forEach(e,(e,r)=>{if(!x.isValidElement(e))return;let i=[...t,r];if(e.type===x.Fragment){n.push.apply(n,qt(e.props.children,i));return}w(e.type===Wt,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),w(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=qt(e.props.children,i)),n.push(a)}),n}var Jt=`get`,Yt=`application/x-www-form-urlencoded`;function Xt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Zt(e){return Xt(e)&&e.tagName.toLowerCase()===`button`}function Qt(e){return Xt(e)&&e.tagName.toLowerCase()===`form`}function $t(e){return Xt(e)&&e.tagName.toLowerCase()===`input`}function en(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function tn(e,t){return e.button===0&&(!t||t===`_self`)&&!en(e)}var nn=null;function rn(){if(nn===null)try{new FormData(document.createElement(`form`),0),nn=!1}catch{nn=!0}return nn}var an=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function on(e){return e!=null&&!an.has(e)?(ie(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Yt}"`),null):e}function sn(e,t){let n,r,i,a,o;if(Qt(e)){let o=e.getAttribute(`action`);r=o?ke(o,t):null,n=e.getAttribute(`method`)||Jt,i=on(e.getAttribute(`enctype`))||Yt,a=new FormData(e)}else if(Zt(e)||$t(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?ke(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Jt,i=on(e.getAttribute(`formenctype`))||on(o.getAttribute(`enctype`))||Yt,a=new FormData(o,e),!rn()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Xt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Jt,r=null,i=Yt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var cn={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},ln=/[&><\u2028\u2029]/g;function un(e){return e.replace(ln,e=>cn[e])}function dn(e,t){if(e===!1||e==null)throw Error(t)}function fn(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&ke(i.pathname,t)===`/`?i.pathname=`${Re(t)}/_root.${r}`:i.pathname=`${Re(i.pathname)}.${r}`,i}async function pn(e,t){if(e.id in t)return t[e.id];try{let n=await b(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function mn(e){return e!=null&&typeof e.page==`string`}function hn(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function gn(e,t,n){return xn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await pn(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(hn).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function _n(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function vn(e,t,{includeHydrateFallback:n}={}){return yn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function yn(e){return[...new Set(e)]}function bn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function xn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!mn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(bn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function Sn(){let e=x.useContext(Ze);return dn(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function Cn(){let e=x.useContext(Qe);return dn(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var wn=x.createContext(void 0);wn.displayName=`FrameworkContext`;function Tn(){let e=x.useContext(wn);return dn(e,`You must render this element inside a <HydratedRouter> element`),e}function En(e,t){let n=x.useContext(wn),[r,i]=x.useState(!1),[a,o]=x.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=x.useRef(null);x.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),x.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:Dn(s,p),onBlur:Dn(c,m),onMouseEnter:Dn(l,p),onMouseLeave:Dn(u,m),onTouchStart:Dn(d,p)}]:[a,f,{}]:[!1,f,{}]}function Dn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function On({page:e,...t}){let n=et(),{nonce:r}=Tn(),{router:i}=Sn(),a=x.useMemo(()=>E(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?(t.nonce==null&&r&&(t={...t,nonce:r}),n?x.createElement(An,{page:e,matches:a,...t}):x.createElement(jn,{page:e,matches:a,...t})):null}function kn(e){let{manifest:t,routeModules:n}=Tn(),[r,i]=x.useState([]);return x.useEffect(()=>{let r=!1;return gn(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function An({page:e,matches:t,...n}){let r=k(),{future:i}=Tn(),{basename:a}=Sn(),o=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=fn(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return x.createElement(x.Fragment,null,o.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function jn({page:e,matches:t,...n}){let r=k(),{future:i,manifest:a,routeModules:o}=Tn(),{basename:s}=Sn(),{loaderData:c,matches:l}=Cn(),u=x.useMemo(()=>_n(e,t,l,a,r,`data`),[e,t,l,a,r]),d=x.useMemo(()=>_n(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=fn(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=x.useMemo(()=>vn(d,a),[d,a]),m=kn(d);return x.createElement(x.Fragment,null,f.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>x.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>x.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function Mn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}x.Component;var Nn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{Nn&&(window.__reactRouterVersion=`7.18.1`)}catch{}function Pn({basename:e,children:t,useTransitions:n,window:r}){let i=x.useRef();i.current??=re({window:r,v5Compat:!0});let a=i.current,[o,s]=x.useState({action:a.action,location:a.location}),c=x.useCallback(e=>{n===!1?s(e):x.startTransition(()=>s(e))},[n]);return x.useLayoutEffect(()=>a.listen(c),[a,c]),x.createElement(Gt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}function Fn({basename:e,children:t,history:n,useTransitions:r}){let[i,a]=x.useState({action:n.action,location:n.location}),o=x.useCallback(e=>{r===!1?a(e):x.startTransition(()=>a(e))},[r]);return x.useLayoutEffect(()=>n.listen(o),[n,o]),x.createElement(Gt,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,useTransitions:r})}Fn.displayName=`unstable_HistoryRouter`;var In=x.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=x.useContext(it),v=typeof l==`string`&&ee.test(l),y=Ke(l,h);l=y.to;let b=pt(l,{relative:r}),S=k(),C=null;if(o){let e=Fe(o,[],S.mask?S.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Le([h,e.pathname])),C=g.createHref(e)}let[te,ne,re]=En(n,p),w=Un(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function ie(t){e&&e(t),t.defaultPrevented||w(t)}let ae=!(y.isExternal||i),oe=x.createElement(`a`,{...p,...re,href:(ae?C:void 0)||y.absoluteURL||b,onClick:ae?ie:e,ref:Mn(m,ne),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return te&&!v?x.createElement(x.Fragment,null,oe,x.createElement(On,{page:b})):oe});In.displayName=`Link`;var Ln=x.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=bt(a,{relative:c.relative}),d=k(),f=x.useContext(Qe),{navigator:p,basename:m}=x.useContext(it),h=f!=null&&$n(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=ke(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,b=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,ee=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),S={isActive:b,isPending:ee,isTransitioning:h},C=b?e:void 0,te;te=typeof n==`function`?n(S):[n,b?`active`:null,ee?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let ne=typeof i==`function`?i(S):i;return x.createElement(In,{...c,"aria-current":C,className:te,ref:l,style:ne,to:a,viewTransition:o},typeof s==`function`?s(S):s)});Ln.displayName=`NavLink`;var Rn=x.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Jt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=x.useContext(it),g=Kn(),_=qn(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&ee.test(s);return x.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?x.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});Rn.displayName=`Form`;function zn({getKey:e,storageKey:t,...n}){let r=x.useContext(wn),{basename:i}=x.useContext(it),a=k(),o=Lt();Zn({getKey:e,storageKey:t});let s=x.useMemo(()=>{if(!r||!e)return null;let t=Xn(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return n.nonce==null&&r?.nonce&&(n.nonce=r.nonce),x.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${un(JSON.stringify(t||Jn))}, ${un(JSON.stringify(s))})`}})}zn.displayName=`ScrollRestoration`;function Bn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Vn(e){let t=x.useContext(Ze);return w(t,Bn(e)),t}function Hn(e){let t=x.useContext(Qe);return w(t,Bn(e)),t}function Un(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=_t(),d=k(),f=bt(e,{relative:o});return x.useCallback(p=>{if(tn(p,t)){p.preventDefault();let t=n===void 0?ce(d)===ce(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?x.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Wn=0,Gn=()=>`__${String(++Wn)}__`;function Kn(){let{router:e}=Vn(`useSubmit`),{basename:t}=x.useContext(it),n=Ft(),r=e.fetch,i=e.navigate;return x.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=sn(e,t);if(a.navigate===!1){let e=a.fetcherKey||Gn();await r(e,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync})}else await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function qn(e,{relative:t}={}){let{basename:n}=x.useContext(it),r=x.useContext(ot);w(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...bt(e||`.`,{relative:t})},o=k();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Le([n,a.pathname])),ce(a)}var Jn=`react-router-scroll-positions`,Yn={};function Xn(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:ke(e.pathname,n)||e.pathname},t)),i??=e.key,i}function Zn({getKey:e,storageKey:t}={}){let{router:n}=Vn(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=Hn(`useScrollRestoration`),{basename:a}=x.useContext(it),o=k(),s=Lt(),c=It();x.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Qn(x.useCallback(()=>{if(c.state===`idle`){let t=Xn(o,s,a,e);Yn[t]=window.scrollY}try{sessionStorage.setItem(t||Jn,JSON.stringify(Yn))}catch(e){ie(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(x.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||Jn);e&&(Yn=JSON.parse(e))}catch{}},[t]),x.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(Yn,()=>window.scrollY,e?(t,n)=>Xn(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),x.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{ie(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function Qn(e,t){let{capture:n}=t||{};x.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function $n(e,{relative:t}={}){let n=x.useContext(tt);w(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Vn(`useViewTransitionState`),i=bt(e,{relative:t});if(!n.isTransitioning)return!1;let a=ke(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=ke(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Te(i.pathname,o)!=null||Te(i.pathname,a)!=null}var er=g(),tr=o((e=>{var t=Symbol.for(`react.transitional.element`);function n(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.jsx=n,e.jsxs=n})),A=o(((e,t)=>{t.exports=tr()}))();function nr({source:e}){return(0,A.jsx)(`div`,{className:`markdown-view`,children:rr(e).map((e,t)=>e.type===`heading`?(0,A.jsx)(e.level===2?`h2`:`h3`,{children:e.text},t):e.type===`list`?(0,A.jsx)(e.ordered?`ol`:`ul`,{children:e.items.map(e=>(0,A.jsx)(`li`,{children:e},e))},t):(0,A.jsx)(`p`,{children:e.text},t))})}function rr(e){let t=[],n=e.split(`
`),r=[],i=null,a=()=>{r.length>0&&(t.push({type:`paragraph`,text:r.join(` `)}),r=[])},o=()=>{i&&=(t.push({type:`list`,ordered:i.ordered,items:i.items}),null)};for(let e of n){let n=e.trim();if(!n){a(),o();continue}let s=/^(#{2,3})\s+(.+)$/.exec(n);if(s){a(),o(),t.push({type:`heading`,level:s[1].length,text:s[2]});continue}let c=/^[-*]\s+(.+)$/.exec(n),l=/^\d+\.\s+(.+)$/.exec(n);if(c||l){a();let e=!!l;(!i||i.ordered!==e)&&(o(),i={ordered:e,items:[]}),i.items.push((c??l)?.[1]??``);continue}o(),r.push(n)}return a(),o(),t}var ir=[{id:`no-rest-for-the-wicked`,name:`恶意不息`,cover:`https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1371980/header.jpg`,description:`综合整理自互联网公开资料的《恶意不息》攻略库，覆盖流程、探索、装备、Build、资源和 Boss。`,supportedCategories:[`quest_exploration`,`equipment`,`build`,`resource_map`,`boss`,`collection`]}],ar={quest_exploration:`任务与探索`,build:`Build 与流派`,equipment:`装备资料`,resource_map:`地图资源`,boss:`Boss 攻略`,collection:`全收集`},or={none:`无剧透`,light:`轻微剧透`,major:`重大剧透`},sr={draft:`综合草稿`,verified:`已校对`,needs_review:`待复核`},cr=`---
title: 攻略标题
gameId: no-rest-for-the-wicked
category: quest_exploration
region: 区域名称
phase: 游戏阶段
npcs: [NPC 名称]
items: [关键道具]
prerequisites: [前置条件]
rewards: [奖励]
spoilerLevel: light
tags: [标签]
summary: 一句话说明这篇攻略解决什么问题。
updatedAt: 2026-07-08
example: true
sources: [{"title":"来源标题","url":"https://example.com","type":"guide","language":"zh"}]
images: [{"url":"https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1371980/331de7e745f43867f0a220339153ac6019822ea4/header.jpg?t=1780442295","alt":"攻略配图","caption":"图片说明","sourceUrl":"https://store.steampowered.com/app/1371980/No_Rest_for_the_Wicked/","licenseNote":"公开媒体素材或外链图片，保留来源链接。"}]
contentStatus: draft
lastVerifiedAt: 2026-07-08
---

## 目标

写清楚玩家打开这篇攻略时要解决的问题。

## 触发方式

- 触发地点
- 相关 NPC
- 需要提前完成的条件

## 推荐路线

1. 第一步。
2. 第二步。
3. 第三步。

## 注意事项

- 写下容易错过的分支、捷径、敌人或奖励。
`,lr=`---
title: 前期治疗补给怎么不断档
gameId: no-rest-for-the-wicked
category: quest_exploration
region: 圣城周边
phase: 初期
npcs: [商人]
items: [食材, 治疗品, 制作材料]
prerequisites: [解锁基础商人]
rewards: [稳定续航]
spoilerLevel: none
tags: [补给, 新手, 资源循环]
summary: 记录早期治疗品、食材和商人补给的整理方式，降低反复死亡后的资源压力。
updatedAt: 2026-07-08
example: true
sources: [{"title":"Fextralife Guides & Walkthroughs","url":"https://norestforthewicked.wiki.fextralife.com/Guides%2B%26%2BWalkthroughs","type":"guide","language":"en"},{"title":"Steam 商店页面","url":"https://store.steampowered.com/app/1371980/No_Rest_for_the_Wicked/","type":"official","language":"en"}]
images: [{"url":"https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1371980/1163c9191d2261d845aa96cbc011ed6490182ae8/ss_1163c9191d2261d845aa96cbc011ed6490182ae8.1920x1080.jpg?t=1780442295","alt":"城镇补给参考图","caption":"补给和城镇功能整理参考","sourceUrl":"https://store.steampowered.com/app/1371980/No_Rest_for_the_Wicked/","licenseNote":"Steam 商店公开截图，保留来源链接。"}]
contentStatus: draft
lastVerifiedAt: 2026-07-08
---

## 目标

这篇示例用于管理前期治疗资源。正式内容可以继续补充具体食材位置、刷新规律和商人库存。

## 做法

1. 每次回城先检查商人是否有低价治疗相关物品。
2. 跑图时优先拾取可制作食物的材料。
3. 高风险探索前，不要把全部治疗品消耗在练手战斗里。

## 可扩展字段

如果后续添加装备或制作资料库，可以把食材和治疗品转成独立物品条目，再从攻略正文关联过去。
`,ur=`---
slug: fextralife-guides-walkthroughs-index
title: Fextralife Guides & Walkthroughs 总索引
gameId: no-rest-for-the-wicked
category: quest_exploration
region: 全区域
phase: 任意
npcs: []
items: [流程, 支线, 结局, 制作, 成就, Boss]
prerequisites: [打开攻略库]
rewards: [指南入口, 查漏清单]
spoilerLevel: light
tags: [Fextralife, Guides, Walkthroughs, 索引]
summary: 将 Fextralife Guides & Walkthroughs 页面中的主要指南入口整理为中文索引，方便在本站继续细分。
updatedAt: 2026-07-09
example: false
sources: [fextralife-guides, guide-new-player-help, guide-walkthrough, guide-side-quests, guide-endings, guide-crafting, guide-new-game-plus, fextralife-bosses, guide-achievements, guide-housing]
images: [steam-hero, wiki-crafting-materials, wiki-housing]
contentStatus: verified
lastVerifiedAt: 2026-07-09
---

## 收录范围

本索引覆盖 Fextralife 的 Guides & Walkthroughs 目录页，以及目录页指向的主要攻略主题：新手帮助、主线流程、支线、结局、制作、新周目、Boss、成就和房屋系统。

## 使用方式

先从本页确定要查的主题，再进入对应条目。具体路线和数值会在后续版本继续细化；当前版本优先保证入口完整、来源清楚、图片可追溯。

## 来源说明

本站不逐字搬运 Fextralife 原文，而是把公开资料按中文玩家习惯重新组织为查询卡片，并在详情页保留来源链接。

<!-- guide -->
---
slug: fextralife-new-player-help
title: 新玩家帮助总览
gameId: no-rest-for-the-wicked
category: quest_exploration
region: 通用
phase: 序章
npcs: []
items: [基础武器, 治疗品, 食物, 装备负重]
prerequisites: [首次进入游戏]
rewards: [开荒思路, 基础系统理解]
spoilerLevel: none
tags: [新手, New Player Help, 战斗, 系统]
summary: 面向第一次开荒的系统入口，重点解释战斗节奏、补给、装备重量和探索优先级。
updatedAt: 2026-07-09
example: false
sources: [guide-new-player-help, fextralife-guides, steam]
images: [steam-combat]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 先学什么

开荒最先要学的不是伤害最大化，而是体力条、闪避方向、敌人连段和喝药窗口。每换一把武器，都先在普通敌人身上确认轻攻击、重攻击和收招速度。

## 推荐顺序

1. 先保证有稳定治疗来源。
2. 再确认当前武器的攻击距离和后摇。
3. 然后检查装备重量，不要让翻滚手感突然变差。
4. 最后再考虑强化、符文和 Build。

## 常见误区

早期不要把所有资源都砸在不熟悉的武器上。遇到打不过的敌人时，先回去升级武器、补食物、开捷径，比硬打更有效。

<!-- guide -->
---
slug: fextralife-main-walkthrough
title: 主线 Walkthrough 查漏路线
gameId: no-rest-for-the-wicked
category: quest_exploration
region: 全区域
phase: 主线
npcs: [主线 NPC]
items: [关键道具, 捷径, 首领奖励]
prerequisites: [推进主线]
rewards: [主线进度, 区域解锁]
spoilerLevel: major
tags: [Walkthrough, 主线, 流程, 查漏]
summary: 主线流程条目按“到达区域、开捷径、拿关键资源、挑战 Boss、回城复查”的节奏整理。
updatedAt: 2026-07-09
example: false
sources: [guide-walkthrough, fextralife-guides, fextralife-bosses]
images: [steam-explore, steam-boss]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 流程框架

主线推进建议每个区域都按五步走：先抵达安全点，再开捷径，然后收集关键资源，之后挑战 Boss，最后回城复查 NPC 对话和商店变化。

## 查漏重点

- 每个新区域先找传送点和捷径。
- Boss 前确认修理、治疗和食物。
- Boss 后不要立刻冲下一张图，先回城检查新服务和新对话。
- 如果 Fextralife 后续补了 100% 路线，本条再拆成逐区域页面。

## 剧透提醒

本条属于主线总路线，会提到 Boss 和区域推进顺序。只想看无剧透探索提示时，优先看新玩家帮助或区域查漏条目。

<!-- guide -->
---
slug: fextralife-side-quests-hub
title: 支线任务 Hub
gameId: no-rest-for-the-wicked
category: quest_exploration
region: 多区域
phase: 初中期
npcs: [支线 NPC, 商人, 城镇居民]
items: [任务道具, 支线奖励]
prerequisites: [抵达圣城并反复回访 NPC]
rewards: [支线奖励, NPC 后续, 世界信息]
spoilerLevel: light
tags: [Side Quests, 支线, NPC, 查漏]
summary: 支线任务优先按 NPC、触发阶段、目标区域和奖励四类字段维护，避免漏接漏交。
updatedAt: 2026-07-09
example: false
sources: [guide-side-quests, fextralife-guides]
images: [wiki-side-quest-armor, steam-town]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 维护方式

支线不适合只按区域记，因为 NPC 对话和主线阶段会影响触发。本站后续会按“NPC 名称、触发阶段、目标区域、奖励、是否限时”拆成独立条目。

## 查漏步骤

1. 每次主线推进后回圣城绕一圈。
2. 对话出现新选项时记录 NPC 和阶段。
3. 接到任务后先确认目标区域，再决定是否顺路完成。
4. 完成任务后回到发起 NPC 处复查后续对话。

## 当前状态

本条先建立支线总入口；具体支线名称、步骤和奖励需要继续逐项复核。

<!-- guide -->
---
slug: fextralife-endings-guide
title: 结局与分支条件入口
gameId: no-rest-for-the-wicked
category: quest_exploration
region: 后期区域
phase: 后期
npcs: [关键 NPC]
items: [关键选择, 结局条件]
prerequisites: [推进到后期剧情]
rewards: [结局路线, 剧情查漏]
spoilerLevel: major
tags: [Endings, 结局, 剧透, 分支]
summary: 结局条目作为高剧透入口，后续用于维护分支条件、关键选择和不可逆节点。
updatedAt: 2026-07-09
example: false
sources: [guide-endings, fextralife-guides]
images: [steam-explore]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 剧透警告

结局相关内容天然包含重大剧透。第一次游玩建议只查看“是否存在不可逆节点”和“是否需要提前存资源”，不要提前看完整条件。

## 后续字段

- 结局名称。
- 触发条件。
- 关键 NPC。
- 不可逆选择。
- 是否影响成就。

## 当前建议

在具体条件复核前，先养成每个主线阶段回城对话、保留关键道具、记录选择前状态的习惯。

<!-- guide -->
---
slug: fextralife-crafting-guide
title: 制作系统与材料整理
gameId: no-rest-for-the-wicked
category: resource_map
region: 通用
phase: 初中期
npcs: [工匠, 商人]
items: [材料, 工作台, 家具, 食材]
prerequisites: [解锁制作或工作台]
rewards: [补给循环, 装备维护, 家园建设]
spoilerLevel: none
tags: [Crafting, 制作, 材料, 工作台]
summary: 制作系统条目整理材料用途、工作台优先级和哪些资源不该随手卖掉。
updatedAt: 2026-07-09
example: false
sources: [guide-crafting, fextralife-guides]
images: [wiki-crafting-materials, steam-town]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 核心思路

制作系统服务三件事：补给、装备维护和房屋/工作台建设。开荒时不要只看眼前售价，很多材料后续会变成升级、料理或家具需求。

## 材料管理

- 食材优先转化为稳定回复。
- 矿石、木材和稀有材料先留一部分库存。
- 解锁工作台后，再决定哪些材料可以批量消耗。

## 图片说明

本条使用 Fextralife Crafting 页面材料图作为远程引用，并保留来源链接。

<!-- guide -->
---
slug: fextralife-new-game-plus
title: New Game Plus 准备清单
gameId: no-rest-for-the-wicked
category: quest_exploration
region: 全区域
phase: 后期
npcs: []
items: [成型装备, 强化材料, 消耗品, 收藏品]
prerequisites: [接近通关或准备进入新周目]
rewards: [新周目规划, 资源保留]
spoilerLevel: major
tags: [New Game Plus, NG+, 新周目, 后期]
summary: 新周目入口用于整理进入下一轮前应该确认的装备、材料、成就、支线和收集项。
updatedAt: 2026-07-09
example: false
sources: [guide-new-game-plus, fextralife-guides]
images: [steam-boss]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 进入前检查

新周目前先确认哪些资源会保留、哪些内容会重置。若版本资料尚不稳定，至少先把常用装备、强化材料、关键消耗品和未完成支线列成清单。

## 推荐清单

1. 主武器和常用护甲强化到当前可承受上限。
2. 补齐高价值消耗品和食材。
3. 查漏 Boss、支线、成就和区域宝箱。
4. 记录当前 Build，方便新周目开局快速恢复手感。

## 当前状态

Fextralife 的 New Game+ 页面本轮请求不稳定，已先建立来源入口；具体继承规则后续需要重新抓取复核。

<!-- guide -->
---
slug: fextralife-bosses-guide-hub
title: Bosses Guide 总入口
gameId: no-rest-for-the-wicked
category: boss
region: 多区域
phase: 任意
npcs: []
items: [首领奖励, 弱点, 抗性, 掉落]
prerequisites: [遇到 Boss 或准备挑战]
rewards: [打法索引, 奖励查漏]
spoilerLevel: major
tags: [Bosses Guide, Boss, 弱点, 掉落]
bossType: 首领索引
summary: Bosses Guide 用于汇总所有首领位置、弱点、抗性、奖励和打法，并链接到单独 Boss 页面。
updatedAt: 2026-07-09
example: false
sources: [fextralife-bosses, boss-warrick, boss-riven-twins, boss-falstead-darak, boss-echo-knight, boss-lost-huntress, boss-caretaker-tusk, boss-winged-brood, boss-unbreakable-egg]
images: [boss-warrick, boss-riven-twins, boss-falstead-darak, boss-echo-knight]
contentStatus: verified
lastVerifiedAt: 2026-07-09
---

## 入口说明

本站已经把主线和支线 Boss 拆成独立条目。这个入口用于统一搜索“Boss、弱点、抗性、奖励、位置”等关键词。

## 维护字段

- Boss 名称。
- 主线/支线/挑战类型。
- 出现位置。
- 弱点、抗性和免疫。
- 奖励与掉落。
- 推荐准备和打法摘要。

## 当前覆盖

已建条目包括 Warrick the Torn、The Riven Twins、Falstead Darak、Echo Knight、The Lost Huntress、The Caretaker and the Tusk、The Winged Brood 和 The Unbreakable Egg。

<!-- guide -->
---
slug: fextralife-trophy-achievement-guide
title: 奖杯与成就查漏入口
gameId: no-rest-for-the-wicked
category: collection
region: 全区域
phase: 任意
npcs: []
items: [奖杯, 成就, 收集项, Boss 击杀]
prerequisites: [准备全收集或成就查漏]
rewards: [成就路线, 查漏清单]
spoilerLevel: light
tags: [Trophy, Achievement, 成就, 奖杯, 收集]
summary: 成就入口用于按主线、支线、Boss、收集和系统操作拆分查漏清单。
updatedAt: 2026-07-09
example: false
sources: [guide-achievements, fextralife-guides]
images: [steam-hero]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 分类方式

成就查漏建议分成五类：主线必得、Boss 击杀、支线完成、收集/制作、系统行为。这样能避免临近通关才发现漏了早期条件。

## 使用建议

第一周目只看轻剧透分类，后期再打开完整条件。若某成就可能错过，应在条目里标记“可能限时”或“不可逆”。

## 后续补全

后续需要把成就列表逐项整理成表格：名称、条件、是否剧透、是否可错过、推荐完成时机。

<!-- guide -->
---
slug: fextralife-housing-guide
title: 房屋与家园系统指南
gameId: no-rest-for-the-wicked
category: resource_map
region: 圣城
phase: 初中期
npcs: [房屋相关 NPC, 工匠, 商人]
items: [房屋, 家具, 工作台, 材料]
prerequisites: [解锁圣城相关功能]
rewards: [工作台布置, 材料循环, 长期据点]
spoilerLevel: light
tags: [Housing, 房屋, 家园, 工作台]
summary: 房屋系统条目整理买房、家具、工作台和材料投入优先级，帮助把圣城变成长期据点。
updatedAt: 2026-07-09
example: false
sources: [guide-housing, guide-crafting, fextralife-guides]
images: [wiki-housing, wiki-crafting-materials]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 系统定位

房屋不是单纯装饰，它会和制作、工作台、材料管理产生关联。第一次解锁时不要急着把资源花在外观上，先确认哪些设施能提升补给和维护效率。

## 优先级

1. 先确认买房条件和花费。
2. 再规划工作台位置。
3. 然后补材料循环。
4. 最后再做家具和装饰。

## 图片说明

本条使用 Fextralife Housing 与 Crafting 页面图片作为远程引用，并保留来源链接。
`,dr=`---
slug: weapon-breaking-wave
title: Breaking Wave 破碎的波浪
gameId: no-rest-for-the-wicked
category: equipment
region: 通用
phase: 初期
npcs: [商人, 铁匠]
items: [Breaking Wave, 破碎的波浪]
prerequisites: [探索、宝箱或商人库存]
rewards: [单手斧图鉴]
spoilerLevel: none
tags: [Weapons, Axes, 单手斧, Breaking Wave]
equipmentType: 斧
summary: Breaking Wave 是斧类武器条目，适合用来建立斧类图鉴、获取方式和属性资料卡。
updatedAt: 2026-07-09
example: false
sources: [fextralife-weapons]
images: [{"url":"https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/breaking-wave-weapon-no-rest-for-the-wicked-wiki-guide-100px.png","alt":"Breaking Wave weapon icon","caption":"Breaking Wave 武器图标","sourceUrl":"https://norestforthewicked.wiki.fextralife.com/Breaking+Wave","licenseNote":"Fextralife Wiki 图片，保留原图与来源链接，不移除水印或标识。"}]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 资料卡

| 字段 | 内容 |
| --- | --- |
| 英文名 | Breaking Wave |
| 中文备注 | 破碎的波浪 |
| 类型 | 斧 / 单手斧 |
| 规格 | 待复核 |
| 符文槽 | 待复核 |
| 需求 | 待复核 |
| 获取方式 | 物品掉落、宝箱或商人库存，具体位置待复核 |

## 使用建议

斧类适合想要比直剑更强打击感、但又不想完全进入重武器节奏的开荒玩家。先确认攻击后摇和体力消耗，再决定是否投入强化材料。

<!-- guide -->
---
slug: weapon-holy-felled
title: Holy Felled 圣费尔德
gameId: no-rest-for-the-wicked
category: equipment
region: 通用
phase: 初中期
npcs: [商人, 铁匠]
items: [Holy Felled, 圣费尔德]
prerequisites: [获得斧类武器]
rewards: [斧类图鉴]
spoilerLevel: none
tags: [Weapons, Axes, Holy Felled]
equipmentType: 斧
summary: Holy Felled 是斧类武器，适合归入单手斧/斧类图鉴进行获取和属性复核。
updatedAt: 2026-07-09
example: false
sources: [fextralife-weapons]
images: [{"url":"https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/holy-felled-weapon-no-rest-for-the-wicked-wiki-guide-100px.png","alt":"Holy Felled weapon icon","caption":"Holy Felled 武器图标","sourceUrl":"https://norestforthewicked.wiki.fextralife.com/Holy+Felled","licenseNote":"Fextralife Wiki 图片，保留原图与来源链接，不移除水印或标识。"}]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 资料卡

| 字段 | 内容 |
| --- | --- |
| 英文名 | Holy Felled |
| 类型 | 斧 |
| 规格 | 待复核 |
| 符文槽 | 待复核 |
| 需求 | 待复核 |
| 获取方式 | 待复核 |

## 使用建议

斧类武器的价值在于单次命中质量和削韧感。若你经常因为贪刀吃反击，先练习一击即走，再考虑用它打 Boss。

<!-- guide -->
---
slug: weapon-hunters-axe
title: Hunter's Axe 猎人斧
gameId: no-rest-for-the-wicked
category: equipment
region: 通用
phase: 初期
npcs: [商人]
items: [Hunter's Axe, 猎人斧]
prerequisites: [获得斧类武器]
rewards: [斧类图鉴]
spoilerLevel: none
tags: [Weapons, Axes, Hunter's Axe, 猎人斧]
equipmentType: 斧
summary: Hunter's Axe 是斧类武器，适合开荒时比较基础动作和体力消耗。
updatedAt: 2026-07-09
example: false
sources: [fextralife-weapons]
images: [{"url":"https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/hunters_axe_one_handed_axe_no_rest_for_the_wicked_wiki_guide_100px.png","alt":"Hunter's Axe weapon icon","caption":"Hunter's Axe 武器图标","sourceUrl":"https://norestforthewicked.wiki.fextralife.com/Hunter's+Axe","licenseNote":"Fextralife Wiki 图片，保留原图与来源链接，不移除水印或标识。"}]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 资料卡

| 字段 | 内容 |
| --- | --- |
| 英文名 | Hunter's Axe |
| 类型 | 斧 / 单手斧 |
| 规格 | 待复核 |
| 符文槽 | 待复核 |
| 获取方式 | 待复核 |

## 使用建议

猎人斧适合作为斧类手感样本：如果你喜欢它的节奏，再继续找更高稀有度或更好词条的斧类武器。

<!-- guide -->
---
slug: weapon-laquered-bow
title: Laquered Bow 漆弓
gameId: no-rest-for-the-wicked
category: equipment
region: 通用
phase: 初中期
npcs: [商人]
items: [Laquered Bow, 漆弓]
prerequisites: [获得弓类武器]
rewards: [弓类图鉴]
spoilerLevel: none
tags: [Weapons, Bows, 弓, Laquered Bow]
equipmentType: 弓
summary: Laquered Bow 是弓类武器，适合远程补刀、拉怪和安全处理危险目标。
updatedAt: 2026-07-09
example: false
sources: [fextralife-weapons]
images: [{"url":"https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/lacquered-bow-weapon-no-rest-for-the-wicked-wiki-guide-100px.png","alt":"Laquered Bow weapon icon","caption":"Laquered Bow 武器图标","sourceUrl":"https://norestforthewicked.wiki.fextralife.com/Laquered+Bow","licenseNote":"Fextralife Wiki 图片，保留原图与来源链接，不移除水印或标识。"}]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 资料卡

| 字段 | 内容 |
| --- | --- |
| 英文名 | Laquered Bow |
| 类型 | 弓 |
| 规格 | 待复核 |
| 符文槽 | 待复核 |
| 需求 | 待复核 |
| 获取方式 | 待复核 |

## 使用建议

弓类不一定承担主输出，但非常适合拉怪、补刀、打断危险目标和处理飞行/远距离威胁。

<!-- guide -->
---
slug: weapon-short-bow
title: Short Bow 短弓
gameId: no-rest-for-the-wicked
category: equipment
region: 通用
phase: 初期
npcs: [商人]
items: [Short Bow, 短弓]
prerequisites: [获得弓类武器]
rewards: [弓类图鉴]
spoilerLevel: none
tags: [Weapons, Bows, 弓, Short Bow]
equipmentType: 弓
summary: Short Bow 是基础弓类武器，适合用来建立远程武器手感。
updatedAt: 2026-07-09
example: false
sources: [fextralife-weapons]
images: [{"url":"https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/short_bow_none_bow_no_rest_for_the_wicked_wiki_guide_100px.png","alt":"Short Bow weapon icon","caption":"Short Bow 武器图标","sourceUrl":"https://norestforthewicked.wiki.fextralife.com/Short+Bow","licenseNote":"Fextralife Wiki 图片，保留原图与来源链接，不移除水印或标识。"}]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 资料卡

| 字段 | 内容 |
| --- | --- |
| 英文名 | Short Bow |
| 类型 | 弓 |
| 规格 | 待复核 |
| 获取方式 | 待复核 |

## 使用建议

短弓适合开荒查漏时携带，用于把敌人从群体中拉出来，降低近战被围攻的风险。

<!-- guide -->
---
slug: weapon-hunters-knife
title: Hunter's Knife 猎人刀
gameId: no-rest-for-the-wicked
category: equipment
region: 通用
phase: 初期
npcs: [商人]
items: [Hunter's Knife, 猎人刀]
prerequisites: [获得匕首类武器]
rewards: [匕首图鉴]
spoilerLevel: none
tags: [Weapons, Daggers, 匕首, Hunter's Knife]
equipmentType: 匕首
summary: Hunter's Knife 是匕首类武器，偏快节奏、低后摇和高机动。
updatedAt: 2026-07-09
example: false
sources: [fextralife-weapons]
images: [{"url":"https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/hunters_knife_one_handed_knife_weapons_no_rest_for_the_wicked_wiki_guide_100px.png","alt":"Hunter's Knife weapon icon","caption":"Hunter's Knife 武器图标","sourceUrl":"https://norestforthewicked.wiki.fextralife.com/Hunter's+Knife","licenseNote":"Fextralife Wiki 图片，保留原图与来源链接，不移除水印或标识。"}]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 资料卡

| 字段 | 内容 |
| --- | --- |
| 英文名 | Hunter's Knife |
| 类型 | 匕首 |
| 规格 | 待复核 |
| 获取方式 | 待复核 |

## 使用建议

匕首适合喜欢贴身、快速出手和立即撤离的玩家。打 Boss 时不要贪连段，靠频繁小窗口累计伤害。

<!-- guide -->
---
slug: weapon-jackknife
title: Jackknife 折刀
gameId: no-rest-for-the-wicked
category: equipment
region: 通用
phase: 初期
npcs: [商人]
items: [Jackknife, 折刀]
prerequisites: [获得匕首类武器]
rewards: [匕首图鉴]
spoilerLevel: none
tags: [Weapons, Daggers, 匕首, Jackknife]
equipmentType: 匕首
summary: Jackknife 是匕首类武器，适合轻装和高机动 Build 对比。
updatedAt: 2026-07-09
example: false
sources: [fextralife-weapons]
images: [{"url":"https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/jackknife-weapon-no-rest-for-the-wicked-wiki-guide-100px.png","alt":"Jackknife weapon icon","caption":"Jackknife 武器图标","sourceUrl":"https://norestforthewicked.wiki.fextralife.com/Jackknife","licenseNote":"Fextralife Wiki 图片，保留原图与来源链接，不移除水印或标识。"}]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 资料卡

| 字段 | 内容 |
| --- | --- |
| 英文名 | Jackknife |
| 类型 | 匕首 |
| 规格 | 待复核 |
| 获取方式 | 待复核 |

## 使用建议

如果你经常被重武器后摇惩罚，匕首类可以作为替代路线；代价是单次削韧和爆发通常需要更多操作。

<!-- guide -->
---
slug: weapon-ash-soothed-daggers
title: Ash Soothed Daggers 灰烬安抚匕首
gameId: no-rest-for-the-wicked
category: equipment
region: 通用
phase: 初中期
npcs: [商人]
items: [Ash Soothed Daggers]
prerequisites: [获得双匕首类武器]
rewards: [双匕首图鉴]
spoilerLevel: none
tags: [Weapons, Double Daggers, 双匕首]
equipmentType: 双匕首
summary: Ash Soothed Daggers 是双匕首类武器，适合高速连击和轻装机动路线。
updatedAt: 2026-07-09
example: false
sources: [fextralife-weapons]
images: [{"url":"https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/ash-soothed-daggers-weapon-no-rest-for-the-wicked-wiki-guide-100px.png","alt":"Ash Soothed Daggers weapon icon","caption":"Ash Soothed Daggers 武器图标","sourceUrl":"https://norestforthewicked.wiki.fextralife.com/Ash+Soothed+Daggers","licenseNote":"Fextralife Wiki 图片，保留原图与来源链接，不移除水印或标识。"}]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 资料卡

| 字段 | 内容 |
| --- | --- |
| 英文名 | Ash Soothed Daggers |
| 类型 | 双匕首 |
| 规格 | 待复核 |
| 获取方式 | 待复核 |

## 使用建议

双匕首的优势是动作密度高，但打高压 Boss 时更考验体力管理。建议搭配轻装和高回复补给。

<!-- guide -->
---
slug: weapon-brothers-keepers
title: Brothers Keepers 守兄弟
gameId: no-rest-for-the-wicked
category: equipment
region: 通用
phase: 中期
npcs: [商人]
items: [Brothers Keepers]
prerequisites: [获得双匕首类武器]
rewards: [双匕首图鉴]
spoilerLevel: none
tags: [Weapons, Double Daggers, 双匕首]
equipmentType: 双匕首
summary: Brothers Keepers 是双匕首类武器，适合高速近战图鉴分类。
updatedAt: 2026-07-09
example: false
sources: [fextralife-weapons]
images: [{"url":"https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/brothers_keepers_dual_wielding_double_dagger_weapons_no_rest_for_the_wicked_wiki_guide_100px.png","alt":"Brothers Keepers weapon icon","caption":"Brothers Keepers 武器图标","sourceUrl":"https://norestforthewicked.wiki.fextralife.com/Brothers+Keepers","licenseNote":"Fextralife Wiki 图片，保留原图与来源链接，不移除水印或标识。"}]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 资料卡

| 字段 | 内容 |
| --- | --- |
| 英文名 | Brothers Keepers |
| 类型 | 双匕首 |
| 规格 | 待复核 |
| 获取方式 | 待复核 |

## 使用建议

适合用来比较双持类武器的连段节奏。若面对大体型 Boss，尽量从侧后方进入输出窗口。

<!-- guide -->
---
slug: weapon-bandits-cleaver
title: Bandit's Cleaver 盗匪劈斧
gameId: no-rest-for-the-wicked
category: equipment
region: 通用
phase: 初中期
npcs: [商人]
items: [Bandit's Cleaver]
prerequisites: [获得巨斧类武器]
rewards: [巨斧图鉴]
spoilerLevel: none
tags: [Weapons, Great Axes, 巨斧]
equipmentType: 巨斧
summary: Bandit's Cleaver 是巨斧类武器，偏重击和高削韧。
updatedAt: 2026-07-09
example: false
sources: [fextralife-weapons]
images: [{"url":"https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/bandits-cleaver-weapon-no-rest-for-the-wicked-wiki-guide-100px.png","alt":"Bandit's Cleaver weapon icon","caption":"Bandit's Cleaver 武器图标","sourceUrl":"https://norestforthewicked.wiki.fextralife.com/Bandit's+Cleaver","licenseNote":"Fextralife Wiki 图片，保留原图与来源链接，不移除水印或标识。"}]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 资料卡

| 字段 | 内容 |
| --- | --- |
| 英文名 | Bandit's Cleaver |
| 类型 | 巨斧 |
| 规格 | 待复核 |
| 获取方式 | 待复核 |

## 使用建议

巨斧适合能读懂敌人后摇的玩家。它不适合无脑抢攻，但在 Boss 大硬直后能提供很高回报。

<!-- guide -->
---
slug: weapon-gavlans-great-axe
title: Gavlan's Great Axe 加弗兰巨斧
gameId: no-rest-for-the-wicked
category: equipment
region: 通用
phase: 中期
npcs: [商人]
items: [Gavlan's Great Axe]
prerequisites: [获得巨斧类武器]
rewards: [巨斧图鉴]
spoilerLevel: none
tags: [Weapons, Great Axes, 巨斧]
equipmentType: 巨斧
summary: Gavlan's Great Axe 是巨斧类武器，适合重武器 Build 查询。
updatedAt: 2026-07-09
example: false
sources: [fextralife-weapons]
images: [{"url":"https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/gavlans-great-axe-weapon-no-rest-for-the-wicked-wiki-guide-100px.png","alt":"Gavlan's Great Axe weapon icon","caption":"Gavlan's Great Axe 武器图标","sourceUrl":"https://norestforthewicked.wiki.fextralife.com/Gavlan's+Great+Axe","licenseNote":"Fextralife Wiki 图片，保留原图与来源链接，不移除水印或标识。"}]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 资料卡

| 字段 | 内容 |
| --- | --- |
| 英文名 | Gavlan's Great Axe |
| 类型 | 巨斧 |
| 规格 | 待复核 |
| 获取方式 | 待复核 |

## 使用建议

如果你偏好一击高收益路线，巨斧值得单独维护强化优先级；但先确认负重和体力是否能支撑。

<!-- guide -->
---
slug: weapon-claymore
title: Claymore 双手大剑
gameId: no-rest-for-the-wicked
category: equipment
region: 通用
phase: 初中期
npcs: [商人]
items: [Claymore]
prerequisites: [获得大剑类武器]
rewards: [大剑图鉴]
spoilerLevel: none
tags: [Weapons, Great Swords, 大剑, 双手剑]
equipmentType: 大剑
summary: Claymore 是大剑类武器，适合做重型剑类武器的基准条目。
updatedAt: 2026-07-09
example: false
sources: [fextralife-weapons]
images: [{"url":"https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/claymore_two_handed_weapons_no_rest_for_the_wicked_wiki_guide_100px.png","alt":"Claymore weapon icon","caption":"Claymore 武器图标","sourceUrl":"https://norestforthewicked.wiki.fextralife.com/Claymore","licenseNote":"Fextralife Wiki 图片，保留原图与来源链接，不移除水印或标识。"}]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 资料卡

| 字段 | 内容 |
| --- | --- |
| 英文名 | Claymore |
| 类型 | 大剑 / 双手剑 |
| 规格 | 待复核 |
| 获取方式 | 待复核 |

## 使用建议

大剑通常在攻击范围、削韧和后摇之间折中。适合喜欢稳定中距离近战的玩家。

<!-- guide -->
---
slug: weapon-blood-rusted-sword
title: Blood-Rusted Sword 血锈剑
gameId: no-rest-for-the-wicked
category: equipment
region: 通用
phase: 初期
npcs: [商人]
items: [Blood-Rusted Sword]
prerequisites: [获得直剑类武器]
rewards: [直剑图鉴]
spoilerLevel: none
tags: [Weapons, Straight Swords, 直剑]
equipmentType: 直剑
summary: Blood-Rusted Sword 是直剑类武器，适合作为开荒剑类手感参考。
updatedAt: 2026-07-09
example: false
sources: [fextralife-weapons]
images: [{"url":"https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/blood-rusted_sword_one_handed_straight_sword_weapons_no_rest_for_the_wicked_wiki_guide_100px.png","alt":"Blood-Rusted Sword weapon icon","caption":"Blood-Rusted Sword 武器图标","sourceUrl":"https://norestforthewicked.wiki.fextralife.com/Blood-Rusted+Sword","licenseNote":"Fextralife Wiki 图片，保留原图与来源链接，不移除水印或标识。"}]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 资料卡

| 字段 | 内容 |
| --- | --- |
| 英文名 | Blood-Rusted Sword |
| 类型 | 直剑 |
| 规格 | 待复核 |
| 获取方式 | 待复核 |

## 使用建议

直剑适合新手理解基础攻防节奏。它通常不如重武器爆发高，但容错和动作理解成本更低。

<!-- guide -->
---
slug: weapon-executioners-halberd
title: Executioner's Halberd 处刑者长戟
gameId: no-rest-for-the-wicked
category: equipment
region: 通用
phase: 中期
npcs: [商人]
items: [Executioner's Halberd]
prerequisites: [获得长柄类武器]
rewards: [长柄武器图鉴]
spoilerLevel: none
tags: [Weapons, Halberds, 长柄, 长戟]
equipmentType: 长柄武器
summary: Executioner's Halberd 是长柄类武器，适合利用距离和横扫控制敌人。
updatedAt: 2026-07-09
example: false
sources: [fextralife-weapons]
images: [{"url":"https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/executioners-halberd-weapon-no-rest-for-the-wicked-wiki-guide-100px.png","alt":"Executioner's Halberd weapon icon","caption":"Executioner's Halberd 武器图标","sourceUrl":"https://norestforthewicked.wiki.fextralife.com/Executioner's+Halberd","licenseNote":"Fextralife Wiki 图片，保留原图与来源链接，不移除水印或标识。"}]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 资料卡

| 字段 | 内容 |
| --- | --- |
| 英文名 | Executioner's Halberd |
| 类型 | 长柄武器 / Halberd |
| 规格 | 待复核 |
| 获取方式 | 待复核 |

## 使用建议

长柄武器的核心是距离管理。用它打人形敌人时，保持枪尖或刃部命中距离，不要贴脸空挥。

<!-- guide -->
---
slug: weapon-hanzo-blade
title: Hanzo Blade 半藏之刃
gameId: no-rest-for-the-wicked
category: equipment
region: 通用
phase: 中期
npcs: [商人]
items: [Hanzo Blade]
prerequisites: [获得武士刀类武器]
rewards: [武士刀图鉴]
spoilerLevel: none
tags: [Weapons, Katanas, 武士刀]
equipmentType: 武士刀
summary: Hanzo Blade 是武士刀类武器，适合高速斩击和敏捷近战路线。
updatedAt: 2026-07-09
example: false
sources: [fextralife-weapons]
images: [{"url":"https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/hanzo-blade-weapon-no-rest-for-the-wicked-wiki-guide-100px.png","alt":"Hanzo Blade weapon icon","caption":"Hanzo Blade 武器图标","sourceUrl":"https://norestforthewicked.wiki.fextralife.com/Hanzo+Blade","licenseNote":"Fextralife Wiki 图片，保留原图与来源链接，不移除水印或标识。"}]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 资料卡

| 字段 | 内容 |
| --- | --- |
| 英文名 | Hanzo Blade |
| 类型 | 武士刀 |
| 规格 | 待复核 |
| 获取方式 | 待复核 |

## 使用建议

武士刀适合偏敏捷的近战路线。重点不是站桩输出，而是在敌人收招后用快速斩击拿小窗口。

<!-- guide -->
---
slug: weapon-needle-spear
title: Needle Spear 针矛
gameId: no-rest-for-the-wicked
category: equipment
region: 通用
phase: 初中期
npcs: [商人]
items: [Needle Spear]
prerequisites: [获得长矛类武器]
rewards: [长矛图鉴]
spoilerLevel: none
tags: [Weapons, Spears, 长矛]
equipmentType: 长矛
summary: Needle Spear 是长矛类武器，适合利用刺击距离和安全输出窗口。
updatedAt: 2026-07-09
example: false
sources: [fextralife-weapons]
images: [{"url":"https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/needle-spear-weapon-no-rest-for-the-wicked-wiki-guide-100px.png","alt":"Needle Spear weapon icon","caption":"Needle Spear 武器图标","sourceUrl":"https://norestforthewicked.wiki.fextralife.com/Needle+Spear","licenseNote":"Fextralife Wiki 图片，保留原图与来源链接，不移除水印或标识。"}]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 资料卡

| 字段 | 内容 |
| --- | --- |
| 英文名 | Needle Spear |
| 类型 | 长矛 |
| 规格 | 待复核 |
| 获取方式 | 待复核 |

## 使用建议

长矛类适合不想贴脸的玩家。打大型敌人时，利用距离优势刺击后撤，别被转身或横扫压住。

<!-- guide -->
---
slug: weapon-estoc
title: Estoc 刺剑
gameId: no-rest-for-the-wicked
category: equipment
region: 通用
phase: 初中期
npcs: [商人]
items: [Estoc]
prerequisites: [获得刺剑类武器]
rewards: [刺剑图鉴]
spoilerLevel: none
tags: [Weapons, Rapiers, 刺剑]
equipmentType: 刺剑
summary: Estoc 是刺剑类武器，适合精准刺击和轻中装 Build。
updatedAt: 2026-07-09
example: false
sources: [fextralife-weapons]
images: [{"url":"https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/estoc-weapon-no-rest-for-the-wicked-wiki-guide-100px.png","alt":"Estoc weapon icon","caption":"Estoc 武器图标","sourceUrl":"https://norestforthewicked.wiki.fextralife.com/Estoc","licenseNote":"Fextralife Wiki 图片，保留原图与来源链接，不移除水印或标识。"}]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 资料卡

| 字段 | 内容 |
| --- | --- |
| 英文名 | Estoc |
| 类型 | 刺剑 |
| 规格 | 待复核 |
| 获取方式 | 待复核 |

## 使用建议

刺剑更依赖命中窗口和方向控制。它适合追求稳定单点输出，不适合被多目标包围时乱刺。

<!-- guide -->
---
slug: weapon-gnarled-staff
title: Gnarled Staff 扭曲法杖
gameId: no-rest-for-the-wicked
category: equipment
region: 通用
phase: 中期
npcs: [商人]
items: [Gnarled Staff]
prerequisites: [获得法杖类武器]
rewards: [法杖图鉴]
spoilerLevel: none
tags: [Weapons, Staves, 法杖]
equipmentType: 法杖
summary: Gnarled Staff 是法杖类武器，适合和符文/法术系统一起维护。
updatedAt: 2026-07-09
example: false
sources: [fextralife-weapons]
images: [{"url":"https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/gnarled_staff_two_handed_weapons_no_rest_for_the_wicked_wiki_guide_100px.png","alt":"Gnarled Staff weapon icon","caption":"Gnarled Staff 武器图标","sourceUrl":"https://norestforthewicked.wiki.fextralife.com/Gnarled+Staff","licenseNote":"Fextralife Wiki 图片，保留原图与来源链接，不移除水印或标识。"}]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 资料卡

| 字段 | 内容 |
| --- | --- |
| 英文名 | Gnarled Staff |
| 类型 | 法杖 |
| 规格 | 待复核 |
| 获取方式 | 待复核 |

## 使用建议

法杖条目后续要和符文、法术、属性需求绑定。当前先作为法杖分类入口，避免装备图鉴缺失法系武器。

<!-- guide -->
---
slug: weapon-clerics-mace
title: Cleric's Mace 牧师钉头锤
gameId: no-rest-for-the-wicked
category: equipment
region: 通用
phase: 初中期
npcs: [商人]
items: [Cleric's Mace]
prerequisites: [获得钉头锤类武器]
rewards: [钉头锤图鉴]
spoilerLevel: none
tags: [Weapons, Maces, 钉头锤]
equipmentType: 钉头锤
summary: Cleric's Mace 是钉头锤类武器，适合打击型近战路线。
updatedAt: 2026-07-09
example: false
sources: [fextralife-weapons]
images: [{"url":"https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/clerics_mace_one_handed_mace_no_rest_for_the_wicked_wiki_guide_100px.png","alt":"Cleric's Mace weapon icon","caption":"Cleric's Mace 武器图标","sourceUrl":"https://norestforthewicked.wiki.fextralife.com/Cleric's+Mace","licenseNote":"Fextralife Wiki 图片，保留原图与来源链接，不移除水印或标识。"}]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 资料卡

| 字段 | 内容 |
| --- | --- |
| 英文名 | Cleric's Mace |
| 类型 | 钉头锤 |
| 规格 | 待复核 |
| 获取方式 | 待复核 |

## 使用建议

钉头锤适合想要打击感和稳定破防的玩家。面对护甲厚或韧性高的敌人时，优先观察它的削韧表现。
`,fr=`---
slug: fextralife-wiki-navigation-hub
title: Fextralife Wiki 全站导航搬运索引
gameId: no-rest-for-the-wicked
category: quest_exploration
region: 全区域
phase: 任意
npcs: [NPCs, Merchants]
items: [Weapons, Armor, Runes, Rings, Consumables, Key Items]
prerequisites: [需要按 Wiki 结构查资料]
rewards: [全站目录, 本站内查询入口]
spoilerLevel: light
tags: [Fextralife, Wiki, 导航, 全站索引]
summary: 把 Fextralife Wiki 导航里的主要栏目搬进本站，用中文说明每个栏目应该查什么，减少反复跳外链。
updatedAt: 2026-07-09
example: false
sources: [fextralife, fextralife-guides]
images: [steam-hero]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 这个索引解决什么

Fextralife 的 Guides & Walkthroughs 页面同时带有整站导航。为了不用每次点外链，本页把导航栏目改写成本站内的中文查询入口。

## 主要栏目

- General：DLC、补丁、抢先体验、控制、战斗、FAQ。
- Character：角色创建、属性、状态效果、Build、动作。
- Equipment：武器、符文、法术、盾牌、护甲、戒指、升级、烹饪。
- Items：关键物品、消耗品。
- Online：PvP、联机。
- World：地点、Whispers、房屋、NPC、商人、敌人、Boss、Lore。
- Guides：新手帮助、流程、支线、结局、制作、新周目、Boss、成就。

## 本站维护规则

每个栏目先建立“怎么查”的中文条目，再逐步补数值表。能确认的内容标为已校对；只建立入口但未核对数值的内容标为待复核。

<!-- guide -->
---
slug: fextralife-general-information-hub
title: General Information 总览
gameId: no-rest-for-the-wicked
category: quest_exploration
region: 通用
phase: 任意
npcs: []
items: [DLC, Patch Notes, Early Access, Controls, Combat, FAQs]
prerequisites: [需要查询版本和基础系统]
rewards: [版本信息, 操作说明, 战斗入门]
spoilerLevel: none
tags: [General, DLC, Patch Notes, Controls, Combat, FAQ]
summary: General 栏目用于查版本变化、操作方式、战斗规则和常见问题，是游玩前的基础说明区。
updatedAt: 2026-07-09
example: false
sources: [fextralife]
images: [steam-combat]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 包含页面

- DLC：未来内容或扩展内容入口。
- Patch Notes：版本更新记录，适合查数值和机制是否改动。
- Early Access：抢先体验阶段说明。
- Controls：键鼠和手柄操作。
- Combat：战斗系统说明。
- FAQs：常见问题。

## 使用建议

遇到“攻略说法和游戏里不一样”时，先查 Patch Notes 和 Early Access 状态。遇到“操作不出来”时，先查 Controls 和 Combat，而不是直接怀疑 Build 有问题。

## 后续补全

后续应把 Controls 拆成键鼠/手柄表，把 Combat 拆成闪避、格挡、韧性、符文、体力、装备重量等小条目。

<!-- guide -->
---
slug: fextralife-character-systems-hub
title: 角色系统总览
gameId: no-rest-for-the-wicked
category: build
region: 通用
phase: 任意
npcs: []
items: [Character Creation, Stats, Status Effects, Builds, Gestures]
prerequisites: [创建角色或准备配装]
rewards: [属性规划, 状态理解, Build 入口]
spoilerLevel: none
tags: [Character, Stats, Status Effects, Builds, Gestures]
buildTags: [开荒, 属性, 状态]
summary: 角色栏目用于理解角色创建、属性、状态效果和 Build 规划，避免升级点和装备方向互相打架。
updatedAt: 2026-07-09
example: false
sources: [fextralife]
images: [steam-combat]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 包含页面

- Character Creation：角色创建和初始外观。
- Stats：属性字段与成长方向。
- Status Effects：状态效果、异常和抗性。
- Builds：武器、护甲、符文和属性组合。
- Gestures：动作与社交表达。

## 配装逻辑

先确定主要武器，再决定属性和装备重量；不要先随便加点，再反过来寻找能适配的武器。状态效果条目要和 Boss 抗性一起看，尤其是火、瘟疫、抗性和免疫字段。

## 后续补全

Build 条目后续应按“属性核心、武器类型、护甲重量、符文选择、适合阶段、怕什么 Boss”来维护。

<!-- guide -->
---
slug: fextralife-equipment-magic-hub
title: 装备与魔法栏目总览
gameId: no-rest-for-the-wicked
category: equipment
region: 通用
phase: 任意
npcs: [铁匠, 商人]
items: [Weapons, Runes, Spells, Shields, Armor, Rings, Upgrades, Cooking]
prerequisites: [开始强化或配装]
rewards: [装备索引, 强化优先级, 烹饪补给]
spoilerLevel: none
tags: [Equipment, Weapons, Runes, Armor, Rings, Upgrades, Cooking]
equipmentType: 综合装备
summary: 装备栏目覆盖武器、符文、法术、盾牌、护甲、戒指、升级和烹饪，是最常用的查表入口。
updatedAt: 2026-07-09
example: false
sources: [fextralife-weapons, wikigg-equipment, fextralife]
images: [steam-combat, steam-town]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 包含页面

- Weapons：所有武器、类型、稀有度、获取方式和基础信息。
- Runes：符文用途、推荐符文和获取。
- Spells List：法术列表。
- Shields：盾牌。
- Armor：护甲总览。
- Helms、Chest Armor、Gauntlets、Leg Armor：护甲部位。
- Rings：戒指。
- Upgrades：强化系统。
- Cooking：料理和补给。

## 查询方式

先按装备类型筛选，再看获取方式和是否适配当前 Build。武器不要只看面板，要看动作、后摇、体力消耗、符文孔和强化成本。护甲不要只看防御，要看重量和抗性。

## 后续补全

后续要把武器和护甲拆成表格：名称、类型、重量、获取、稀有度、适合 Build、是否推荐强化。

<!-- guide -->
---
slug: fextralife-armor-parts-index
title: 护甲部位索引
gameId: no-rest-for-the-wicked
category: equipment
region: 通用
phase: 任意
npcs: [铁匠, 商人]
items: [Helms, Chest Armor, Gauntlets, Leg Armor]
prerequisites: [开始比较护甲]
rewards: [重量控制, 防御提升, 抗性补强]
spoilerLevel: none
tags: [Armor, Helms, Chest Armor, Gauntlets, Leg Armor]
equipmentType: 护甲
summary: 护甲部位条目把头盔、胸甲、手甲和腿甲分开查，方便控制重量和抗性。
updatedAt: 2026-07-09
example: false
sources: [wikigg-equipment, fextralife]
images: [wiki-side-quest-armor, steam-town]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 部位说明

护甲由 Helms、Chest Armor、Gauntlets、Leg Armor 等部位组成。比较护甲时，最重要的是总重量、抗性补强和是否影响翻滚手感。

## 开荒建议

前期优先保持灵活，不要为了单件高防御导致整体负重过高。中后期再根据 Boss 属性压力调整抗性。

## 表格字段

后续每个部位都应补：名称、部位、重量、防御倾向、抗性、获取方式、适合阶段、是否推荐。

<!-- guide -->
---
slug: fextralife-item-systems-hub
title: 物品系统总览
gameId: no-rest-for-the-wicked
category: collection
region: 全区域
phase: 任意
npcs: [商人]
items: [Key Items, Consumables]
prerequisites: [开始整理背包]
rewards: [关键物品查漏, 消耗品管理]
spoilerLevel: light
tags: [Items, Key Items, Consumables, 背包]
summary: 物品栏目用于区分关键物品和消耗品，避免把后续会用到的材料或任务物品误卖误用。
updatedAt: 2026-07-09
example: false
sources: [fextralife]
images: [steam-town]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 包含页面

- Key Items：关键物品、任务物品和推进道具。
- Consumables：治疗、增益、投掷或其他一次性物品。

## 背包原则

关键物品不要随意处理；消耗品要按“战斗恢复、探索续航、Boss 准备、售卖换钱”分组。材料类物品需要先确认是否用于制作、升级或房屋系统。

## 后续补全

后续要把消耗品补成用途表：名称、效果、持续时间、获取方式、推荐使用场景。

<!-- guide -->
---
slug: fextralife-online-systems-hub
title: 在线与联机系统总览
gameId: no-rest-for-the-wicked
category: quest_exploration
region: 在线
phase: 任意
npcs: []
items: [PvP, Online & Multiplayer]
prerequisites: [需要了解在线功能]
rewards: [联机入口, PvP 说明]
spoilerLevel: none
tags: [Online, Multiplayer, PvP, 联机]
summary: 在线栏目用于记录 PvP 和多人功能的入口、限制和版本状态。
updatedAt: 2026-07-09
example: false
sources: [fextralife]
images: [steam-hero]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 包含页面

- PvP：玩家对战相关入口。
- Online & Multiplayer：在线和多人功能说明。

## 查询重点

在线功能最容易随版本变化。查看这类内容时要优先确认当前版本是否已经开放、是否需要特定平台或账号状态，以及是否和抢先体验阶段有关。

## 后续补全

后续应记录开放状态、匹配方式、限制条件、奖励和常见连接问题。

<!-- guide -->
---
slug: fextralife-world-information-hub
title: 世界信息总览
gameId: no-rest-for-the-wicked
category: resource_map
region: 全区域
phase: 任意
npcs: [NPCs, Merchants]
items: [Locations, Whispers, Housing, Creatures, Enemies, Bosses, Lore]
prerequisites: [需要查地图或世界资料]
rewards: [区域索引, NPC 索引, 敌人索引]
spoilerLevel: light
tags: [World, Locations, Whispers, NPCs, Merchants, Enemies, Lore]
summary: 世界栏目覆盖地点、Whispers、房屋、NPC、商人、敌人、Boss 和 Lore，是地图查漏的总入口。
updatedAt: 2026-07-09
example: false
sources: [fextralife, fextralife-bosses, guide-housing]
images: [steam-explore, wiki-housing]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 包含页面

- Locations：区域和地点。
- Whispers：传送或检查点相关入口。
- Housing Guide：房屋系统。
- NPCs：NPC。
- Merchants：商人。
- Creatures & Enemies：普通敌人与精英。
- Bosses：首领。
- Lore：世界观。

## 地图查漏顺序

先查 Locations，确认区域名；再查 Whispers 和捷径；之后查 NPC/Merchants；最后查敌人、Boss 和 Lore。这样能把“我在哪、能回哪、该找谁、会遇到什么”串成一条线。

## 后续补全

后续应给每个地点补：传送点、捷径、NPC、商人、Boss、资源点、重要道具和推荐进入阶段。

<!-- guide -->
---
slug: fextralife-locations-whispers-index
title: 地点与 Whispers 查漏入口
gameId: no-rest-for-the-wicked
category: resource_map
region: 全区域
phase: 任意
npcs: []
items: [Locations, Whispers, 捷径, 传送点]
prerequisites: [开始跑图或查漏]
rewards: [地图路线, 传送点清单]
spoilerLevel: light
tags: [Locations, Whispers, 地图, 捷径, 传送]
summary: 地点与 Whispers 条目用于整理区域名、传送/检查点、捷径和跑图路线。
updatedAt: 2026-07-09
example: false
sources: [fextralife]
images: [steam-explore]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 查漏方法

每到一个新区域，都记录三个东西：入口、Whisper 或检查点、返回路线。没有确认返回路线前，不建议带大量材料深入未知区域。

## 推荐字段

- 区域名称。
- 最近 Whisper。
- 单向门或梯子。
- 宝箱和资源点。
- Boss 或精英位置。
- 推荐进入阶段。

## 后续补全

后续可以把每个地点拆成图文路线，让卡片封面直接对应区域截图。

<!-- guide -->
---
slug: fextralife-npcs-merchants-index
title: NPC 与商人索引
gameId: no-rest-for-the-wicked
category: quest_exploration
region: 圣城
phase: 任意
npcs: [NPCs, Merchants]
items: [商品, 任务, 强化服务, 制作服务]
prerequisites: [抵达城镇或遇到新 NPC]
rewards: [任务入口, 商店服务, 补给来源]
spoilerLevel: light
tags: [NPCs, Merchants, 商人, 城镇]
summary: NPC 与商人条目用于记录谁在哪、卖什么、何时刷新、是否触发支线或解锁服务。
updatedAt: 2026-07-09
example: false
sources: [fextralife]
images: [steam-town]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 查询重点

NPC 不是只用来交任务，也可能解锁商店、强化、制作、房屋或剧情提示。每推进一个主线阶段，都应该回城复查一轮对话和商品。

## 推荐字段

- NPC 名称。
- 初次出现位置。
- 关联任务。
- 提供服务。
- 商品或可交换内容。
- 随阶段变化的对话。

## 后续补全

后续把商人单独做成表：商品、价格、阶段、刷新条件和推荐购买优先级。

<!-- guide -->
---
slug: fextralife-creatures-enemies-index
title: 普通敌人与精英敌人索引
gameId: no-rest-for-the-wicked
category: boss
region: 全区域
phase: 任意
npcs: []
items: [Creatures, Enemies, 掉落, 弱点]
prerequisites: [遇到新敌人或刷材料]
rewards: [敌人打法, 掉落查询]
spoilerLevel: light
tags: [Creatures, Enemies, 敌人, 精英, 掉落]
bossType: 敌人与精英
summary: 敌人索引用于记录普通怪、精英怪、出现区域、弱点和掉落，和 Boss 图鉴分开维护。
updatedAt: 2026-07-09
example: false
sources: [fextralife]
images: [steam-combat]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 和 Boss 的区别

普通敌人和精英敌人更适合查“在哪里刷、掉什么、怎么稳定处理”。Boss 条目则重点记录阶段、奖励和完整打法。

## 推荐字段

- 敌人名称。
- 出现区域。
- 攻击类型。
- 弱点和抗性。
- 常见掉落。
- 推荐处理方式。

## 后续补全

后续应按区域拆敌人表，方便玩家在跑图时顺手查。

<!-- guide -->
---
slug: fextralife-lore-index
title: Lore 世界观入口
gameId: no-rest-for-the-wicked
category: quest_exploration
region: 全区域
phase: 任意
npcs: [关键 NPC]
items: [文本, 剧情, 世界观]
prerequisites: [想整理剧情或设定]
rewards: [剧情理解, 世界观索引]
spoilerLevel: major
tags: [Lore, 世界观, 剧情, 设定]
summary: Lore 条目用于把世界观、关键势力、人物背景和文本线索汇总，适合通关后查阅。
updatedAt: 2026-07-09
example: false
sources: [fextralife]
images: [steam-explore]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 剧透提醒

Lore 内容容易包含剧情真相、人物关系和后期区域信息。第一次游玩建议只在完成相关章节后再查看。

## 维护方式

世界观条目不应该和任务步骤混在一起。推荐按人物、地点、势力、关键物品和事件拆分，正文只做线索整理和来源链接。

## 后续补全

后续可把 Lore 和结局条目互相关联，形成剧情查漏路线。
`,pr=`---
slug: prologue-ship-to-shore
title: 序章到海岸的推进顺序
gameId: no-rest-for-the-wicked
category: quest_exploration
region: 海岸
phase: 序章
npcs: []
items: [基础武器, 食材, 治疗品]
prerequisites: [新建角色]
rewards: [初期装备, 基础资源]
spoilerLevel: light
tags: [流程, 新手, 海岸]
summary: 从开局到登陆后的安全推进顺序，重点是先拿武器、补给和可回头检查的资源点。
updatedAt: 2026-07-08
example: false
sources: [steam, fextralife-guides]
images: [steam-explore]
contentStatus: draft
lastVerifiedAt: 2026-07-08
---

## 目标

序章阶段最重要的是建立基本战斗节奏，不要急着把所有敌人都清空。先保证手上有稳定武器、治疗来源和一条能撤退的路线。

## 推荐路线

1. 初次遭遇敌人时先练习闪避、格挡和体力管理。
2. 每到新岔路先观察是否有高低差、可破坏物和可拾取食材。
3. 遇到明显强敌时先记位置，补给不足就回头整理。

## 注意事项

- 早期死亡成本主要来自补给断档，优先收集食材比硬拼更稳。
- 本条为多来源综合整理稿，正式跑图时建议结合当前版本重新校对。

<!-- guide -->
---
slug: sacrament-function-unlocks
title: 圣城功能解锁优先级
gameId: no-rest-for-the-wicked
category: quest_exploration
region: 圣城
phase: 初期
npcs: [商人, 铁匠, 城镇 NPC]
items: [传送点, 强化材料, 修理资源]
prerequisites: [抵达圣城]
rewards: [城镇服务, 装备维护]
spoilerLevel: light
tags: [圣城, 城镇功能, 新手]
summary: 把圣城当作长期据点来整理，优先确认传送、商人、铁匠和后续升级入口。
updatedAt: 2026-07-08
example: false
sources: [steam, fextralife-guides]
images: [steam-town]
contentStatus: draft
lastVerifiedAt: 2026-07-08
---

## 目标

圣城是后续反复回来的据点。第一轮探索不要只找主线标记，而要把能提供补给、修理、强化和路线返回的功能点都标出来。

## 推荐路线

1. 先开传送点，再按商人、铁匠、任务 NPC 的顺序走一圈。
2. 把消耗品、修理、强化材料分开记录，避免临出门才发现缺资源。
3. 每完成一个阶段后回城复查 NPC 对话，很多提示会随进度变化。

## 注意事项

- 后续可以把每个城镇 NPC 拆成独立条目。
- 来源站点对具体 NPC 名称和位置可能随版本更新，需要继续复核。

<!-- guide -->
---
slug: nameless-pass-first-loop
title: 无名山口第一轮探索
gameId: no-rest-for-the-wicked
category: quest_exploration
region: 无名山口
phase: 初期
npcs: []
items: [梯子, 宝箱, 矿点]
prerequisites: [离开圣城外围]
rewards: [捷径, 资源点]
spoilerLevel: none
tags: [探索, 捷径, 资源]
summary: 用低风险路线摸清无名山口的上下层结构，优先打开能缩短跑图的捷径。
updatedAt: 2026-07-08
example: false
sources: [steam, fextralife]
images: [steam-explore]
contentStatus: draft
lastVerifiedAt: 2026-07-08
---

## 目标

无名山口一类区域容易因为高度差漏掉梯子和绕后门。第一轮只追求建立地图感，不建议带着大量资源硬闯。

## 推荐路线

1. 每进入一个平台先找可踢落梯子或单向门。
2. 看到矿点、木材或宝箱时标记资源类型。
3. 打开捷径后再回头清强敌，节省死亡后的跑图时间。

## 注意事项

- 若敌人明显超过当前伤害，先回城升级武器。
- 资源点是否刷新请以当前游戏版本为准。

<!-- guide -->
---
slug: mariners-keep-cleanup
title: 水手寨查漏路线
gameId: no-rest-for-the-wicked
category: quest_exploration
region: 水手寨
phase: 初期
npcs: []
items: [门闩, 梯子, 宝箱]
prerequisites: [进入水手寨]
rewards: [捷径, 探索补给]
spoilerLevel: none
tags: [水手寨, 查漏, 捷径]
summary: 清理水手寨时按门、梯子、平台三类检查点推进，减少漏宝箱和漏捷径。
updatedAt: 2026-07-08
example: false
sources: [fextralife-guides, steam]
images: [steam-explore]
contentStatus: draft
lastVerifiedAt: 2026-07-08
---

## 目标

水手寨适合用清单式攻略维护：每扇锁门、每个梯子和每个高台都可以成为一个复查点。

## 推荐路线

1. 主路只推进到下一个安全点，不急着跳所有支路。
2. 发现反锁门时记录从哪一侧能打开。
3. 区域 Boss 或精英清掉后，再沿边缘复查宝箱。

## 注意事项

- 本条不搬运地图坐标，只给查漏方法。
- 后续可补带截图的逐点路线。

<!-- guide -->
---
slug: sewer-and-lower-routes
title: 下层与排水路线整理
gameId: no-rest-for-the-wicked
category: quest_exploration
region: 下层区域
phase: 中期
npcs: []
items: [机关, 材料, 宝箱]
prerequisites: [解锁对应下层入口]
rewards: [支路资源, 捷径]
spoilerLevel: light
tags: [下层, 机关, 探索]
summary: 下层路线视野差且分叉多，建议按入口、机关、回城点三件事整理。
updatedAt: 2026-07-08
example: false
sources: [fextralife-guides, fextralife]
images: [steam-explore]
contentStatus: needs_review
lastVerifiedAt: 2026-07-08
---

## 目标

下层区域的难点不是单个敌人，而是路线判断和补给消耗。先找到能安全返回的路径，再处理分支。

## 推荐路线

1. 进入下层后先记入口方向和可返回路线。
2. 遇到机关先观察附近是否有敌人埋伏。
3. 分支资源点不要一次性全清，补给不足就回城。

## 注意事项

- 具体区域名可能随中文翻译变化，本条后续要按游戏内文本校正。

<!-- guide -->
---
slug: early-side-quest-tracking
title: 前期支线任务记录法
gameId: no-rest-for-the-wicked
category: quest_exploration
region: 通用
phase: 初期
npcs: [任务 NPC]
items: [任务道具]
prerequisites: [遇到支线 NPC]
rewards: [经验, 资源, 功能解锁]
spoilerLevel: light
tags: [支线, NPC, 记录]
summary: 用统一字段记录支线，避免忘记接取地点、交付 NPC 和关键选择。
updatedAt: 2026-07-08
example: false
sources: [fextralife-guides]
images: [steam-town]
contentStatus: draft
lastVerifiedAt: 2026-07-08
---

## 目标

当前版本资料分散，支线最容易漏的是触发位置和回交条件。建议每条支线都用固定模板记录。

## 推荐字段

- 接取地点：区域、最近传送点、附近地标。
- 相关 NPC：接取、推进、交付分别是谁。
- 关键道具：是否会占用背包、是否需要保留。
- 分支后果：如果不确定，先标待复核。

## 注意事项

- 不确定的奖励不要写死，避免误导玩家。

<!-- guide -->
---
slug: daily-resource-run
title: 每次上线的资源巡回
gameId: no-rest-for-the-wicked
category: resource_map
region: 通用
phase: 任意
npcs: [商人, 铁匠]
items: [矿石, 木材, 食材, 修理材料]
prerequisites: [解锁圣城]
rewards: [稳定补给, 强化材料]
spoilerLevel: none
tags: [资源, 日常, 巡回]
summary: 把矿石、木材、食材和商人库存纳入固定巡回，减少卡强化和卡治疗。
updatedAt: 2026-07-08
example: false
sources: [steam, fextralife-guides]
images: [steam-town]
contentStatus: draft
lastVerifiedAt: 2026-07-08
---

## 目标

资源循环比单次刷点更重要。每次上线先做短巡回，可以保证装备强化和治疗品不断档。

## 推荐路线

1. 回圣城检查商人和铁匠需求。
2. 去已知低风险区域采集矿石、木材和食材。
3. 回城后只强化当前主武器，不平均投资所有装备。

## 注意事项

- 刷新机制需要后续版本复核，本条只记录维护节奏。

<!-- guide -->
---
slug: food-and-healing-basics
title: 食物与治疗品管理
gameId: no-rest-for-the-wicked
category: resource_map
region: 通用
phase: 初期
npcs: [商人]
items: [食材, 治疗品]
prerequisites: [解锁基础商人]
rewards: [续航提升]
spoilerLevel: none
tags: [治疗, 食物, 新手]
summary: 前期别把治疗品当无限资源，食材、商店和低风险采集要一起管理。
updatedAt: 2026-07-08
example: false
sources: [fextralife-guides, steam]
images: [steam-town]
contentStatus: draft
lastVerifiedAt: 2026-07-08
---

## 目标

治疗资源断档会让探索体验急剧下降。核心思路是把食物制作和商店购买当成出门前准备，而不是战斗后补救。

## 做法

1. 高风险区域前先确认治疗数量。
2. 练 Boss 时设定尝试次数，避免把全部食物耗空。
3. 低血量时不要为了捡一个资源点硬冲。

## 注意事项

- 后续可以补每类食材的具体位置表。

<!-- guide -->
---
slug: mining-wood-gathering
title: 矿石与木材采集优先级
gameId: no-rest-for-the-wicked
category: resource_map
region: 通用
phase: 初中期
npcs: [铁匠]
items: [矿石, 木材, 强化材料]
prerequisites: [解锁采集工具或相关资源点]
rewards: [强化进度]
spoilerLevel: none
tags: [矿石, 木材, 强化]
summary: 采集材料先服务主武器和常用装备，避免仓库里材料很多但关键强化缺口仍然存在。
updatedAt: 2026-07-08
example: false
sources: [fextralife, wikigg-equipment]
images: [steam-explore]
contentStatus: needs_review
lastVerifiedAt: 2026-07-08
---

## 目标

矿石和木材的价值取决于当前强化目标。先记录你要升级的武器，再决定巡回路线。

## 优先级

1. 当前主武器强化所需材料。
2. 常用护甲升级或修理相关材料。
3. 备用流派装备材料。

## 注意事项

- 具体材料名称和掉落点需要根据版本继续补表。

<!-- guide -->
---
slug: storage-inventory-rules
title: 背包和仓库整理规则
gameId: no-rest-for-the-wicked
category: resource_map
region: 圣城
phase: 任意
npcs: [商人, 铁匠]
items: [装备, 材料, 消耗品]
prerequisites: [解锁城镇储物]
rewards: [整理效率]
spoilerLevel: none
tags: [仓库, 背包, 管理]
summary: 把装备、制作材料、任务道具和消耗品分开管理，避免查攻略时找不到关键物品。
updatedAt: 2026-07-08
example: false
sources: [steam, fextralife-guides]
images: [steam-town]
contentStatus: draft
lastVerifiedAt: 2026-07-08
---

## 目标

攻略库后续会记录大量物品，游戏内背包也要有对应规则。否则你知道某物重要，却找不到它在哪里。

## 建议规则

- 当前 Build 装备不卖。
- 未确认用途的任务道具不卖。
- 食材和治疗品按出门需求留一组，其余存仓。

## 注意事项

- 装备词条价值后续要和 Build 条目联动。

<!-- guide -->
---
slug: boss-warrick-first-wall
title: Warrick 新手墙应对
gameId: no-rest-for-the-wicked
category: boss
region: 海岸
phase: 初期
npcs: []
items: [治疗品, 初期武器]
prerequisites: [推进序章]
rewards: [流程推进]
spoilerLevel: major
tags: [Boss, Warrick, 新手墙]
bossType: 人形近战
summary: Warrick 的核心是学会等招和体力管理，不要用魂类习惯无限贪刀。
updatedAt: 2026-07-08
example: false
sources: [fextralife-bosses, fextralife-guides]
images: [steam-boss]
contentStatus: draft
lastVerifiedAt: 2026-07-08
---

## 目标

Warrick 适合作为战斗系统入门考：看清连段、保留体力、只在明确后摇后输出。

## 打法要点

1. 先练闪避方向，不急着追伤害。
2. 大动作后摇打一到两下就停。
3. 体力低于一半时先拉开，不要强行补刀。

## 注意事项

- 具体招式名称以玩家社区常用叫法为准。

<!-- guide -->
---
slug: boss-darakh-phase-control
title: Darak 阶段控制
gameId: no-rest-for-the-wicked
category: boss
region: 圣城周边
phase: 初中期
npcs: []
items: [强化武器, 治疗品]
prerequisites: [推进相关主线]
rewards: [主线推进]
spoilerLevel: major
tags: [Boss, Darak, 阶段]
bossType: 重型近战
summary: Darak 战更考验阶段识别和安全输出窗口，建议先确认武器强化再反复尝试。
updatedAt: 2026-07-08
example: false
sources: [fextralife-bosses, fextralife-guides]
images: [steam-boss]
contentStatus: draft
lastVerifiedAt: 2026-07-08
---

## 目标

Darak 类型 Boss 容易让玩家误以为伤害不够。先确认装备强度，再按阶段学习招式。

## 打法要点

1. 第一轮尝试只观察连段范围。
2. 输出窗口集中在大招后摇和转身空档。
3. 不熟阶段转换时宁可少打一刀。

## 注意事项

- 如果单次尝试消耗过多治疗，先去补资源再练。

<!-- guide -->
---
slug: boss-riven-twins-spacing
title: 双目标 Boss 的站位原则
gameId: no-rest-for-the-wicked
category: boss
region: 中后期区域
phase: 中后期
npcs: []
items: [远程消耗品, 高回复食物]
prerequisites: [进入双目标战斗]
rewards: [装备或流程奖励]
spoilerLevel: major
tags: [Boss, 双目标, 站位]
bossType: 多目标
summary: 双目标战不要被夹击，核心是把敌人拉到同一侧并利用地形重置节奏。
updatedAt: 2026-07-08
example: false
sources: [fextralife-bosses]
images: [steam-combat]
contentStatus: needs_review
lastVerifiedAt: 2026-07-08
---

## 目标

多目标 Boss 的难点是视角和夹击，而不是单体招式。站位优先级高于输出。

## 打法要点

1. 尽量让两个目标都在屏幕同侧。
2. 只攻击离群或硬直中的目标。
3. 被包夹时先滚出角落再喝药。

## 注意事项

- 具体 Boss 名称和奖励需要后续逐战校正。

<!-- guide -->
---
slug: boss-plague-creature-range
title: 瘟疫怪物远近距离处理
gameId: no-rest-for-the-wicked
category: boss
region: 腐化区域
phase: 中期
npcs: []
items: [抗性装备, 高回复食物]
prerequisites: [进入腐化区域]
rewards: [区域推进]
spoilerLevel: major
tags: [Boss, 腐化, 抗性]
bossType: 异形怪物
summary: 面对腐化类怪物，先判断远程压制和近身横扫的范围，再选择贴身或绕侧。
updatedAt: 2026-07-08
example: false
sources: [fextralife-bosses, steam]
images: [steam-combat]
contentStatus: needs_review
lastVerifiedAt: 2026-07-08
---

## 目标

腐化类敌人通常动作幅度大，盲目后退会被远程或突进追上。先判断安全距离。

## 打法要点

1. 远距离会被压制时改为绕侧贴近。
2. 横扫后摇明显时再输出。
3. 有异常状态压力时提高治疗和抗性准备。

## 注意事项

- 异常状态数值需要以后补资料表。

<!-- guide -->
---
slug: boss-human-elite-template
title: 人形精英通用模板
gameId: no-rest-for-the-wicked
category: boss
region: 通用
phase: 任意
npcs: []
items: [主武器, 护甲]
prerequisites: [遇到人形精英]
rewards: [装备, 材料]
spoilerLevel: light
tags: [Boss, 精英, 模板]
bossType: 人形精英
summary: 人形精英通常能被耐心处理，关键是别在对方体力和连段没结束前抢攻。
updatedAt: 2026-07-08
example: false
sources: [fextralife-bosses, fextralife-guides]
images: [steam-combat]
contentStatus: draft
lastVerifiedAt: 2026-07-08
---

## 目标

把人形精英当作小 Boss 处理。它们往往有明显连段，但也有清晰后摇。

## 打法要点

- 先绕圈观察三到五轮连段。
- 不确定能否打断时不要正面换血。
- 盾、重武器和快速武器的窗口不同，按 Build 调整。

## 注意事项

- 后续可拆成每个精英敌人的独立条目。

<!-- guide -->
---
slug: boss-large-beast-template
title: 大型兽类 Boss 通用模板
gameId: no-rest-for-the-wicked
category: boss
region: 通用
phase: 任意
npcs: []
items: [治疗品, 高机动装备]
prerequisites: [遇到大型怪物]
rewards: [材料, 区域通行]
spoilerLevel: light
tags: [Boss, 大型怪, 模板]
bossType: 大型怪物
summary: 大型怪物看似压迫感强，但通常有大后摇，安全绕侧比正面翻滚更重要。
updatedAt: 2026-07-08
example: false
sources: [fextralife-bosses, steam]
images: [steam-boss]
contentStatus: draft
lastVerifiedAt: 2026-07-08
---

## 目标

大型怪物的招式范围大，错误方向闪避会连续吃伤害。优先练绕侧和保持视角。

## 打法要点

1. 不贴墙，不站角落。
2. 冲撞后先确认是否有二段动作。
3. 输出集中在倒地、转身和大砸地后。

## 注意事项

- 具体弱点属性需要后续补证据来源。

<!-- guide -->
---
slug: boss-practice-routine
title: Boss 练习与补给预算
gameId: no-rest-for-the-wicked
category: boss
region: 通用
phase: 任意
npcs: []
items: [治疗品, 食物, 修理材料]
prerequisites: [准备挑战 Boss]
rewards: [稳定通关率]
spoilerLevel: none
tags: [Boss, 练习, 补给]
bossType: 通用
summary: 每次练 Boss 前设定补给预算，避免因为连续尝试把资源打空。
updatedAt: 2026-07-08
example: false
sources: [fextralife-guides]
images: [steam-boss]
contentStatus: draft
lastVerifiedAt: 2026-07-08
---

## 目标

练 Boss 的目的是学习招式，不是一次性烧完资源。用预算控制节奏会更稳。

## 推荐做法

- 前三次只观察，不强求通关。
- 每轮最多消耗固定数量治疗品。
- 装备耐久或补给不足时立刻回城整理。

## 注意事项

- 适合所有卡关点。

<!-- guide -->
---
slug: sword-and-shield-starter
title: 单手剑盾入门 Build
gameId: no-rest-for-the-wicked
category: build
region: 通用
phase: 初期
npcs: [铁匠]
items: [单手剑, 盾牌, 中甲]
prerequisites: [获得单手武器和盾]
rewards: [稳定容错]
spoilerLevel: none
tags: [Build, 剑盾, 新手]
buildTags: [防御, 稳定, 初期]
summary: 剑盾适合第一次游玩，容错高，能帮助玩家学习敌人节奏。
updatedAt: 2026-07-08
example: false
sources: [fextralife-weapons, wikigg-equipment]
images: [steam-combat]
contentStatus: draft
lastVerifiedAt: 2026-07-08
---

## 核心思路

剑盾不是站桩硬扛，而是用盾降低误判成本。输出窗口仍然要等敌人连段结束。

## 配装方向

- 主手选择攻速稳定的单手武器。
- 盾牌优先考虑防御性能和重量。
- 护甲不宜过重，保证闪避手感。

## 注意事项

- 后续要补具体武器名和属性需求。

<!-- guide -->
---
slug: two-handed-strength-build
title: 双手力量 Build
gameId: no-rest-for-the-wicked
category: build
region: 通用
phase: 初中期
npcs: [铁匠]
items: [双手武器, 重甲]
prerequisites: [获得双手武器]
rewards: [高削韧, 高单击伤害]
spoilerLevel: none
tags: [Build, 双手, 力量]
buildTags: [力量, 削韧, 慢速]
summary: 双手武器适合喜欢高单击伤害的玩家，但更依赖熟悉 Boss 后摇。
updatedAt: 2026-07-08
example: false
sources: [fextralife-weapons, wikigg-equipment]
images: [steam-combat]
contentStatus: draft
lastVerifiedAt: 2026-07-08
---

## 核心思路

双手 Build 的优势是爆发和压制，缺点是空挥惩罚大。不要把它玩成连续轻攻击。

## 配装方向

- 武器强化优先级最高。
- 护甲可以偏重，但要保留可接受的闪避。
- 词条优先服务伤害、耐久和生存。

## 注意事项

- 面对快速敌人时少蓄力，多等后摇。

<!-- guide -->
---
slug: fast-dexterity-build
title: 快速敏捷 Build
gameId: no-rest-for-the-wicked
category: build
region: 通用
phase: 初中期
npcs: [铁匠]
items: [快速武器, 轻甲]
prerequisites: [获得快速武器]
rewards: [灵活输出]
spoilerLevel: none
tags: [Build, 敏捷, 轻甲]
buildTags: [敏捷, 快速, 闪避]
summary: 快速武器容错来自机动和小窗口输出，适合熟悉翻滚节奏的玩家。
updatedAt: 2026-07-08
example: false
sources: [fextralife-weapons, wikigg-equipment]
images: [steam-combat]
contentStatus: draft
lastVerifiedAt: 2026-07-08
---

## 核心思路

快速 Build 不靠单次重击，而靠稳定命中和少吃反击。每次只贪一小段输出。

## 配装方向

- 武器攻速和耐力消耗比面板更重要。
- 轻甲保证闪避距离。
- 治疗和抗性弥补低防御。

## 注意事项

- 大型 Boss 面前不要贴太久，避免被范围技覆盖。

<!-- guide -->
---
slug: rune-skill-build
title: 符文技能 Build 入门
gameId: no-rest-for-the-wicked
category: build
region: 通用
phase: 中期
npcs: [铁匠, 商人]
items: [符文, 专用武器]
prerequisites: [解锁符文相关系统]
rewards: [技能爆发]
spoilerLevel: light
tags: [Build, 符文, 技能]
buildTags: [符文, 爆发, 中期]
summary: 符文 Build 要围绕技能窗口和资源恢复设计，不是简单堆面板。
updatedAt: 2026-07-08
example: false
sources: [fextralife, fextralife-weapons]
images: [steam-combat]
contentStatus: needs_review
lastVerifiedAt: 2026-07-08
---

## 核心思路

符文技能适合处理高风险窗口，但如果资源恢复跟不上，输出会断档。

## 配装方向

- 选择和武器节奏匹配的符文。
- 保留普通攻击输出能力。
- 优先记录每个符文的消耗和效果。

## 注意事项

- 符文数据变化可能较大，需要版本复核。

<!-- guide -->
---
slug: survival-heavy-armor-build
title: 重甲生存 Build
gameId: no-rest-for-the-wicked
category: build
region: 通用
phase: 任意
npcs: [铁匠]
items: [重甲, 盾牌, 高回复食物]
prerequisites: [获得重甲]
rewards: [高容错]
spoilerLevel: none
tags: [Build, 重甲, 生存]
buildTags: [防御, 重甲, 容错]
summary: 重甲路线适合探索未知区域，但要管理重量，避免闪避手感过差。
updatedAt: 2026-07-08
example: false
sources: [wikigg-equipment, fextralife]
images: [steam-town]
contentStatus: draft
lastVerifiedAt: 2026-07-08
---

## 核心思路

重甲不是无敌。它提高容错，但仍需要等招和保持体力。

## 配装方向

- 防御和重量一起看。
- 武器选择不要过慢，否则整体节奏太笨重。
- 食物和修理材料要更充足。

## 注意事项

- 后续要补重量阈值和实际翻滚档位。

<!-- guide -->
---
slug: weapon-types-overview
title: 武器类型选择总览
gameId: no-rest-for-the-wicked
category: equipment
region: 通用
phase: 任意
npcs: [铁匠]
items: [单手武器, 双手武器, 远程武器]
prerequisites: [获得多种武器]
rewards: [配装方向]
spoilerLevel: none
tags: [装备, 武器, 总览]
equipmentType: 武器
summary: 先按攻速、范围、体力消耗和强化成本选主武器，不要只看面板数字。
updatedAt: 2026-07-08
example: false
sources: [fextralife-weapons, wikigg-equipment]
images: [steam-combat]
contentStatus: draft
lastVerifiedAt: 2026-07-08
---

## 选择原则

武器适不适合你，取决于能否稳定命中。高面板武器如果经常空挥，实际效率反而低。

## 对比维度

- 攻速和后摇。
- 单次体力消耗。
- 攻击范围和削韧。
- 强化材料压力。

## 注意事项

- 后续会把具体武器拆成独立资料卡。

<!-- guide -->
---
slug: one-handed-weapons
title: 单手武器资料入口
gameId: no-rest-for-the-wicked
category: equipment
region: 通用
phase: 任意
npcs: [铁匠]
items: [单手剑, 短兵器]
prerequisites: [获得单手武器]
rewards: [灵活配装]
spoilerLevel: none
tags: [装备, 单手武器]
equipmentType: 武器
summary: 单手武器适合搭配盾牌或轻装闪避，是新手和稳定流派的基础。
updatedAt: 2026-07-08
example: false
sources: [fextralife-weapons, wikigg-equipment]
images: [steam-combat]
contentStatus: draft
lastVerifiedAt: 2026-07-08
---

## 特点

单手武器通常节奏更灵活，适合学习敌人动作，也方便搭配盾牌提高容错。

## 记录重点

- 属性需求。
- 攻速手感。
- 是否适合盾牌或符文技能。

## 注意事项

- 当前条目是分类入口，具体武器数值后续补全。

<!-- guide -->
---
slug: two-handed-weapons
title: 双手武器资料入口
gameId: no-rest-for-the-wicked
category: equipment
region: 通用
phase: 任意
npcs: [铁匠]
items: [双手剑, 大锤, 长柄武器]
prerequisites: [获得双手武器]
rewards: [高伤害路线]
spoilerLevel: none
tags: [装备, 双手武器]
equipmentType: 武器
summary: 双手武器重视后摇判断和高价值输出窗口，适合熟悉敌人动作后使用。
updatedAt: 2026-07-08
example: false
sources: [fextralife-weapons, wikigg-equipment]
images: [steam-combat]
contentStatus: draft
lastVerifiedAt: 2026-07-08
---

## 特点

双手武器攻击慢但回报高。它更适合在 Boss 大后摇后输出，而不是在小怪群里乱挥。

## 记录重点

- 削韧能力。
- 范围和转向性能。
- 强化后是否明显改变体验。

## 注意事项

- 具体武器掉落和商店来源需要后续核对。

<!-- guide -->
---
slug: armor-weight-overview
title: 护甲重量与防御取舍
gameId: no-rest-for-the-wicked
category: equipment
region: 通用
phase: 任意
npcs: [铁匠, 商人]
items: [轻甲, 中甲, 重甲]
prerequisites: [获得多件护甲]
rewards: [生存提升]
spoilerLevel: none
tags: [装备, 护甲, 重量]
equipmentType: 护甲
summary: 护甲不是越重越好，重量会影响移动和闪避手感，要和武器节奏一起看。
updatedAt: 2026-07-08
example: false
sources: [wikigg-equipment, fextralife]
images: [steam-town]
contentStatus: draft
lastVerifiedAt: 2026-07-08
---

## 核心取舍

轻甲提高机动，重甲提高容错。选择时先问自己更常死于被秒，还是死于躲不开。

## 记录重点

- 重量。
- 防御倾向。
- 词条是否服务当前 Build。

## 注意事项

- 需要补各护甲套装数据表。

<!-- guide -->
---
slug: rings-and-accessories
title: 戒指与饰品整理
gameId: no-rest-for-the-wicked
category: equipment
region: 通用
phase: 中期
npcs: [商人]
items: [戒指, 饰品]
prerequisites: [获得饰品]
rewards: [Build 强化]
spoilerLevel: light
tags: [装备, 饰品, 词条]
equipmentType: 饰品
summary: 饰品常常决定 Build 的细节表现，建议按生存、输出、资源三类整理。
updatedAt: 2026-07-08
example: false
sources: [wikigg-equipment, fextralife]
images: [steam-town]
contentStatus: needs_review
lastVerifiedAt: 2026-07-08
---

## 整理方式

饰品不要只按稀有度放仓库。按用途分组更容易在换 Build 时找到。

## 分类建议

- 生存：防御、回复、抗性。
- 输出：伤害、暴击、属性。
- 资源：体力、技能、消耗品效率。

## 注意事项

- 具体词条名称需要版本复核。

<!-- guide -->
---
slug: rune-equipment-notes
title: 符文与装备联动
gameId: no-rest-for-the-wicked
category: equipment
region: 通用
phase: 中期
npcs: [铁匠]
items: [符文, 武器]
prerequisites: [解锁符文系统]
rewards: [技能组合]
spoilerLevel: light
tags: [装备, 符文, 技能]
equipmentType: 符文
summary: 符文强度要结合武器动作和资源消耗判断，不能脱离 Build 单看效果。
updatedAt: 2026-07-08
example: false
sources: [fextralife-weapons, fextralife]
images: [steam-combat]
contentStatus: needs_review
lastVerifiedAt: 2026-07-08
---

## 核心思路

符文是 Build 的放大器。武器本身不顺手时，强符文也救不了整体体验。

## 记录重点

- 消耗。
- 施放时间。
- 是否能打断敌人或补足范围。

## 注意事项

- 后续应添加符文表格。

<!-- guide -->
---
slug: upgrade-priority
title: 装备强化优先级
gameId: no-rest-for-the-wicked
category: equipment
region: 圣城
phase: 任意
npcs: [铁匠]
items: [主武器, 护甲, 强化材料]
prerequisites: [解锁强化]
rewards: [伤害提升, 生存提升]
spoilerLevel: none
tags: [装备, 强化, 铁匠]
equipmentType: 强化
summary: 强化资源优先给主武器，其次是当前常穿护甲，备用装备等资源富余再处理。
updatedAt: 2026-07-08
example: false
sources: [fextralife-guides, wikigg-equipment]
images: [steam-town]
contentStatus: draft
lastVerifiedAt: 2026-07-08
---

## 优先级

1. 当前主武器。
2. 当前防具中最影响生存的部位。
3. 明确要切换的第二套 Build。

## 注意事项

- 不确定是否长期使用的装备先别重投材料。
- 强化收益需要后续补数值表。

<!-- guide -->
---
slug: weapon-comparison-checklist
title: 新武器试用清单
gameId: no-rest-for-the-wicked
category: equipment
region: 通用
phase: 任意
npcs: [铁匠]
items: [新武器]
prerequisites: [获得新武器]
rewards: [配装判断]
spoilerLevel: none
tags: [装备, 武器, 测试]
equipmentType: 武器
summary: 新武器先用同一套敌人测试攻速、范围、体力和硬直，再决定是否强化。
updatedAt: 2026-07-08
example: false
sources: [fextralife-weapons]
images: [steam-combat]
contentStatus: draft
lastVerifiedAt: 2026-07-08
---

## 测试步骤

1. 找熟悉的小怪测试轻重攻击。
2. 记录一套连招大概消耗多少体力。
3. 看是否容易打空或被反击。

## 注意事项

- 不要刚拿到就投入稀缺强化材料。

<!-- guide -->
---
slug: pestilence-and-status
title: 异常状态与抗性记录入口
gameId: no-rest-for-the-wicked
category: equipment
region: 通用
phase: 中期
npcs: [商人, 铁匠]
items: [抗性装备, 消耗品]
prerequisites: [遇到异常状态敌人]
rewards: [稳定生存]
spoilerLevel: light
tags: [装备, 抗性, 异常]
equipmentType: 抗性
summary: 遇到异常压力区域时，先换抗性和补给，不要只靠提高伤害硬推。
updatedAt: 2026-07-08
example: false
sources: [fextralife, wikigg-equipment]
images: [steam-explore]
contentStatus: needs_review
lastVerifiedAt: 2026-07-08
---

## 目标

异常状态会改变探索节奏。攻略库需要把区域、敌人和抗性装备联系起来。

## 记录重点

- 哪些区域异常压力高。
- 哪些装备或消耗品能缓解。
- 是否值得为了抗性牺牲伤害。

## 注意事项

- 具体状态名和数值待补。

<!-- guide -->
---
slug: early-game-roadmap
title: 前期推进总路线
gameId: no-rest-for-the-wicked
category: quest_exploration
region: 多区域
phase: 初期
npcs: [商人, 铁匠, 任务 NPC]
items: [主武器, 治疗品, 强化材料]
prerequisites: [抵达圣城]
rewards: [稳定开荒]
spoilerLevel: light
tags: [流程, 前期, 路线]
summary: 前期不要只追主线，按主武器强化、圣城功能、区域捷径三条线并行推进。
updatedAt: 2026-07-08
example: false
sources: [fextralife-guides, steam]
images: [steam-hero]
contentStatus: draft
lastVerifiedAt: 2026-07-08
---

## 推进原则

前期强度来自三件事：主武器强化、补给稳定、捷径打开。主线推进只是一部分。

## 推荐节奏

1. 每到新区域先找捷径。
2. 每次回城升级主武器和补治疗。
3. 遇到明显高压敌人先换路线探索。

## 注意事项

- 本条作为路线总览，具体区域请看对应条目。

<!-- guide -->
---
slug: mid-game-roadmap
title: 中期目标整理
gameId: no-rest-for-the-wicked
category: quest_exploration
region: 多区域
phase: 中期
npcs: [任务 NPC, 铁匠]
items: [符文, 高级材料, 护甲]
prerequisites: [完成前期核心功能解锁]
rewards: [Build 成型]
spoilerLevel: light
tags: [流程, 中期, Build]
summary: 中期开始要围绕 Build 成型推进，装备、符文、材料和 Boss 练习要同步整理。
updatedAt: 2026-07-08
example: false
sources: [fextralife-guides, fextralife]
images: [steam-combat]
contentStatus: draft
lastVerifiedAt: 2026-07-08
---

## 推进原则

中期最容易迷路，因为目标从“活下来”变成“让 Build 成型”。把装备目标写清楚会更有效率。

## 推荐节奏

1. 选定一个主 Build。
2. 查缺材料和关键装备。
3. 按 Boss 或区域压力调整抗性和补给。

## 注意事项

- 如果资料不确定，先标待复核，不要写死掉落。

<!-- guide -->
---
slug: breach-update-content-tracker
title: The Breach 内容追踪入口
gameId: no-rest-for-the-wicked
category: quest_exploration
region: The Breach
phase: 更新内容
npcs: []
items: [新装备, 新区域资源]
prerequisites: [进入 The Breach 更新内容]
rewards: [新区域探索]
spoilerLevel: light
tags: [The Breach, 更新, 2026]
summary: 用于记录 The Breach 相关更新内容，先做来源索引，再逐步补全路线和装备。
updatedAt: 2026-07-08
example: false
sources: [breach-showcase, breach-trailer, steam]
images: [steam-hero]
contentStatus: needs_review
lastVerifiedAt: 2026-07-08
---

## 目标

The Breach 是需要持续复核的更新内容入口。先把官方展示、预告和社区资料放进来源链，避免混用旧版本信息。

## 记录重点

- 新区域名称。
- 新敌人和 Boss。
- 新装备、符文和资源。
- 与旧流程的衔接条件。

## 注意事项

- 任何具体数值都应等正式版本资料复核后再标已校对。

<!-- guide -->
---
slug: internet-source-index
title: 互联网来源索引怎么用
gameId: no-rest-for-the-wicked
category: quest_exploration
region: 通用
phase: 任意
npcs: []
items: []
prerequisites: [打开攻略库]
rewards: [资料可信度提升]
spoilerLevel: none
tags: [来源, 互联网, 校对]
summary: 说明本站攻略如何综合互联网资料，哪些内容是官方，哪些内容需要继续复核。
updatedAt: 2026-07-08
example: false
sources: [official, steam, fextralife, wikigg-equipment]
images: [steam-hero]
contentStatus: verified
lastVerifiedAt: 2026-07-08
---

## 说明

本站攻略均来自互联网公开资料的综合整理，不直接搬运原文。官方和商店页面用于确认游戏信息和媒体素材，Wiki/攻略站用于交叉比对任务、装备、Boss 和系统资料。

## 阅读建议

- \`已校对\` 表示结构和来源已检查，不代表每个数值都永久有效。
- \`综合草稿\` 表示可用于查方向，但仍建议结合游戏内文本复核。
- \`待复核\` 表示版本变化或翻译差异可能影响准确性。

## 注意事项

- 若你发现错误，优先记录来源和当前游戏版本。

<!-- guide -->
---
slug: crucible-prep-checklist
title: 挑战型内容准备清单
gameId: no-rest-for-the-wicked
category: quest_exploration
region: 挑战区域
phase: 中后期
npcs: [铁匠, 商人]
items: [强化武器, 高回复食物, 修理材料]
prerequisites: [解锁挑战型内容]
rewards: [高价值装备, 材料]
spoilerLevel: light
tags: [挑战, 中后期, 准备]
summary: 进入高压挑战前，先确认武器强化、补给预算和装备耐久，避免把资源白白消耗掉。
updatedAt: 2026-07-08
example: false
sources: [fextralife-guides, fextralife]
images: [steam-boss]
contentStatus: needs_review
lastVerifiedAt: 2026-07-08
---

## 目标

挑战型内容通常更吃持续作战能力。准备不足时，失败不一定是操作问题，而是资源预算不够。

## 检查清单

- 主武器是否已经强化到当前阶段能接受的水平。
- 食物、治疗品和修理材料是否足够多轮尝试。
- 是否有备用装备应对不同敌人类型。

## 注意事项

- 具体挑战名称和奖励需要按当前版本继续校对。

<!-- guide -->
---
slug: sacrament-rebuild-planning
title: 圣城建设与长期规划
gameId: no-rest-for-the-wicked
category: resource_map
region: 圣城
phase: 中期
npcs: [城镇 NPC, 商人, 铁匠]
items: [建设材料, 金币, 装备材料]
prerequisites: [解锁城镇建设相关系统]
rewards: [城镇功能提升]
spoilerLevel: light
tags: [圣城, 建设, 长期规划]
summary: 城镇建设资源要服务长期效率，优先考虑能改善补给、强化和跑图体验的项目。
updatedAt: 2026-07-08
example: false
sources: [fextralife-guides, steam]
images: [steam-town]
contentStatus: needs_review
lastVerifiedAt: 2026-07-08
---

## 目标

圣城相关投入会影响长期维护成本。不要只看眼前缺什么，也要看哪个升级能减少之后的重复劳动。

## 推荐优先级

1. 提升补给和装备维护效率的功能。
2. 改善资源获取或消耗管理的功能。
3. 纯收集或装饰内容放在资源富余后。

## 注意事项

- 具体建设项目名称需要结合游戏内文本补齐。

<!-- guide -->
---
slug: merchant-stock-watchlist
title: 商人库存观察表
gameId: no-rest-for-the-wicked
category: resource_map
region: 圣城
phase: 任意
npcs: [商人]
items: [治疗品, 食材, 材料, 装备]
prerequisites: [解锁商人]
rewards: [资源效率]
spoilerLevel: none
tags: [商人, 库存, 资源]
summary: 每次回城记录商人卖什么，尤其是治疗、食材、强化材料和可用装备。
updatedAt: 2026-07-08
example: false
sources: [fextralife-guides]
images: [steam-town]
contentStatus: draft
lastVerifiedAt: 2026-07-08
---

## 目标

商人库存是补足资源缺口的快捷方式。把常买物品列成观察表，能减少临时刷材料。

## 记录重点

- 治疗和食材是否稳定供应。
- 强化材料是否值得购买。
- 是否出现适合当前 Build 的装备。

## 注意事项

- 库存刷新和条件需要后续实测。

<!-- guide -->
---
slug: fast-travel-route-notes
title: 传送点与回城路线笔记
gameId: no-rest-for-the-wicked
category: resource_map
region: 多区域
phase: 任意
npcs: []
items: [传送点, 捷径]
prerequisites: [解锁区域传送点]
rewards: [跑图效率]
spoilerLevel: none
tags: [传送点, 跑图, 捷径]
summary: 每个区域都记录最近传送点、回城方向和捷径状态，查攻略时更容易定位。
updatedAt: 2026-07-08
example: false
sources: [steam, fextralife-guides]
images: [steam-explore]
contentStatus: draft
lastVerifiedAt: 2026-07-08
---

## 目标

攻略条目如果只写地点名，玩家仍可能不知道怎么过去。传送点和回城路线是所有区域攻略的基础字段。

## 记录格式

- 最近传送点。
- 从传送点到目标点的方向。
- 哪些捷径必须先打开。
- 死亡后是否容易回收进度。

## 注意事项

- 后续适合和地图截图联动。

<!-- guide -->
---
slug: boss-safe-heal-windows
title: Boss 战喝药窗口判断
gameId: no-rest-for-the-wicked
category: boss
region: 通用
phase: 任意
npcs: []
items: [治疗品, 食物]
prerequisites: [进入 Boss 战]
rewards: [生存率提升]
spoilerLevel: none
tags: [Boss, 治疗, 生存]
bossType: 通用
summary: 喝药不是看到低血就按，必须等 Boss 后摇、换阶段或拉开足够距离。
updatedAt: 2026-07-08
example: false
sources: [fextralife-bosses, fextralife-guides]
images: [steam-boss]
contentStatus: draft
lastVerifiedAt: 2026-07-08
---

## 目标

很多 Boss 战失败来自错误喝药。低血只是提醒，安全窗口才是执行条件。

## 安全窗口

- Boss 大招后摇。
- 距离足够远且没有突进前摇。
- 阶段转换或召唤动作期间。

## 注意事项

- 不同 Boss 的安全窗口需要单独补图。

<!-- guide -->
---
slug: boss-stamina-discipline
title: Boss 战体力纪律
gameId: no-rest-for-the-wicked
category: boss
region: 通用
phase: 任意
npcs: []
items: [主武器, 护甲]
prerequisites: [进入 Boss 战]
rewards: [稳定输出]
spoilerLevel: none
tags: [Boss, 体力, 输出窗口]
bossType: 通用
summary: 体力条是 Boss 战的安全线，打完一套后必须留出闪避或防御余量。
updatedAt: 2026-07-08
example: false
sources: [fextralife-bosses]
images: [steam-combat]
contentStatus: draft
lastVerifiedAt: 2026-07-08
---

## 目标

Boss 战不是伤害竞速。体力耗空时，即使你看懂招式也躲不开。

## 执行规则

- 每个输出窗口最多打一套。
- 体力低于安全线立刻停止追击。
- 重武器 Build 更要保留翻滚余量。

## 注意事项

- 后续可按武器类型补体力消耗示例。

<!-- guide -->
---
slug: shield-equipment-notes
title: 盾牌装备笔记
gameId: no-rest-for-the-wicked
category: equipment
region: 通用
phase: 任意
npcs: [铁匠]
items: [盾牌, 单手武器]
prerequisites: [获得盾牌]
rewards: [防御容错]
spoilerLevel: none
tags: [装备, 盾牌, 防御]
equipmentType: 盾牌
summary: 盾牌适合降低学习成本，但仍要管理体力，不能把所有攻击都当成可硬挡。
updatedAt: 2026-07-08
example: false
sources: [wikigg-equipment, fextralife]
images: [steam-combat]
contentStatus: draft
lastVerifiedAt: 2026-07-08
---

## 特点

盾牌给新手提供更稳定的试错空间。它最适合用来观察敌人连段，而不是永久防御。

## 记录重点

- 防御性能。
- 重量。
- 和单手武器的动作匹配。

## 注意事项

- 盾牌数据表后续需要从装备资料补齐。

<!-- guide -->
---
slug: consumables-index
title: 消耗品索引入口
gameId: no-rest-for-the-wicked
category: equipment
region: 通用
phase: 任意
npcs: [商人]
items: [治疗品, 食物, 临时增益道具]
prerequisites: [获得消耗品]
rewards: [探索稳定性]
spoilerLevel: none
tags: [消耗品, 食物, 补给]
equipmentType: 消耗品
summary: 消耗品按治疗、增益、抗性和资源恢复分组，方便出门前快速检查。
updatedAt: 2026-07-08
example: false
sources: [fextralife-guides, fextralife]
images: [steam-town]
contentStatus: draft
lastVerifiedAt: 2026-07-08
---

## 分组建议

- 治疗：直接回血或持续恢复。
- 增益：提高伤害、防御或抗性。
- 资源：帮助体力或技能循环。

## 注意事项

- 具体效果和持续时间需要后续实测或查表。

<!-- guide -->
---
slug: hybrid-build-template
title: 混合 Build 记录模板
gameId: no-rest-for-the-wicked
category: build
region: 通用
phase: 中后期
npcs: [铁匠]
items: [主武器, 副武器, 符文, 饰品]
prerequisites: [已有多件可用装备]
rewards: [灵活应对]
spoilerLevel: none
tags: [Build, 混合, 模板]
buildTags: [混合, 中后期, 灵活]
summary: 混合 Build 要先定义主要输出方式，再选择防御、符文和饰品补短板。
updatedAt: 2026-07-08
example: false
sources: [fextralife-weapons, wikigg-equipment]
images: [steam-combat]
contentStatus: draft
lastVerifiedAt: 2026-07-08
---

## 核心思路

混合 Build 容易变成什么都想要、什么都不强。先写清主输出，再补辅助能力。

## 模板

- 主输出：武器、符文或状态。
- 防御：护甲重量和回复手段。
- 资源：体力、技能和消耗品循环。

## 注意事项

- 后续可以把成熟 Build 复制此模板单独成文。

<!-- guide -->
---
slug: version-check-routine
title: 版本更新后的攻略复核流程
gameId: no-rest-for-the-wicked
category: quest_exploration
region: 通用
phase: 任意
npcs: []
items: [装备, Boss, 资源点]
prerequisites: [游戏更新]
rewards: [资料准确性]
spoilerLevel: none
tags: [版本, 复核, 维护]
summary: 每次大更新后，优先复核装备数值、Boss 行为、资源刷新和任务触发条件。
updatedAt: 2026-07-08
example: false
sources: [official, steam, breach-showcase]
images: [steam-hero]
contentStatus: verified
lastVerifiedAt: 2026-07-08
---

## 复核顺序

1. 官方更新说明和商店页信息。
2. Boss、装备、资源点这些容易改动的条目。
3. 玩家社区和 Wiki 的补充资料。

## 注意事项

- 没有复核的条目标 \`待复核\`，不要继续显示成已校对。
`,mr=`---
title: 水手寨捷径排查清单
gameId: no-rest-for-the-wicked
category: quest_exploration
region: 水手寨
phase: 初期
npcs: []
items: [梯子, 门闩, 宝箱]
prerequisites: [进入水手寨区域]
rewards: [捷径解锁, 探索补给]
spoilerLevel: none
tags: [探索, 捷径, 区域清单]
summary: 用于记录水手寨区域里应优先打开的捷径和回头检查点。
updatedAt: 2026-07-08
example: true
sources: [{"title":"Steam 商店页面","url":"https://store.steampowered.com/app/1371980/No_Rest_for_the_Wicked/","type":"official","language":"en"},{"title":"Fextralife Wiki 总览","url":"https://norestforthewicked.wiki.fextralife.com/No%2BRest%2BFor%2BThe%2BWicked%2BWiki","type":"wiki","language":"en"}]
images: [{"url":"https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1371980/56066f44f29e8b042c482e0b0680bc101bf1ecd5/ss_56066f44f29e8b042c482e0b0680bc101bf1ecd5.1920x1080.jpg?t=1780442295","alt":"区域探索参考图","caption":"立体区域探索与捷径排查参考","sourceUrl":"https://store.steampowered.com/app/1371980/No_Rest_for_the_Wicked/","licenseNote":"Steam 商店公开截图，保留来源链接。"}]
contentStatus: draft
lastVerifiedAt: 2026-07-08
---

## 目标

水手寨一类立体区域很容易漏掉门闩、梯子和绕后路线。这篇示例把攻略写成可复查的探索清单。

## 清单

- 从主路推进时，优先观察高低差和可踢落的梯子。
- 每遇到锁住的门，记下门的正反面方向。
- 击败强敌后回头检查附近是否有宝箱或材料点。

## 补充记录

后续可以把每条捷径拆成独立小节，并在资料卡的 \`items\` 中补充关键物品。
`,hr=`---
title: 支线任务记录模板
gameId: no-rest-for-the-wicked
category: quest_exploration
region: 通用
phase: 任意
npcs: [任务 NPC]
items: [任务道具]
prerequisites: [接取任务]
rewards: [任务奖励]
spoilerLevel: light
tags: [模板, 支线, 记录方法]
summary: 一篇可复制的支线任务记录示例，用来统一后续攻略写法。
updatedAt: 2026-07-08
example: true
sources: [{"title":"Fextralife Guides & Walkthroughs","url":"https://norestforthewicked.wiki.fextralife.com/Guides%2B%26%2BWalkthroughs","type":"guide","language":"en"},{"title":"Fextralife Wiki 总览","url":"https://norestforthewicked.wiki.fextralife.com/No%2BRest%2BFor%2BThe%2BWicked%2BWiki","type":"wiki","language":"en"}]
images: [{"url":"https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1371980/331de7e745f43867f0a220339153ac6019822ea4/header.jpg?t=1780442295","alt":"No Rest for the Wicked 官方头图","caption":"支线记录模板通用配图","sourceUrl":"https://store.steampowered.com/app/1371980/No_Rest_for_the_Wicked/","licenseNote":"Steam 商店公开媒体素材，保留来源链接。"}]
contentStatus: draft
lastVerifiedAt: 2026-07-08
---

## 目标

把一条支线任务拆成固定信息：在哪接、找谁、要什么、何时交、会不会影响后续。

## 建议正文结构

- 接取位置：写区域、最近传送点和附近地标。
- 推进条件：写必须完成的前置任务或 Boss。
- 关键选择：如果存在分支，单独列出后果。
- 回报：写奖励和是否解锁新功能。

## 维护提醒

正式补内容时，保留 \`spoilerLevel\` 字段。无剧透条目适合写方向提示，重大剧透条目再写完整步骤。
`,gr=`---
title: 初到圣城后的整理路线
gameId: no-rest-for-the-wicked
category: quest_exploration
region: 圣城
phase: 初期
npcs: [看守, 商人, 铁匠]
items: [传送点, 修理材料]
prerequisites: [抵达圣城]
rewards: [基础补给, 城内功能解锁]
spoilerLevel: light
tags: [新手, 城镇功能, 路线整理]
summary: 用一条短路线把圣城的关键 NPC、传送点和早期补给先摸清楚。
updatedAt: 2026-07-08
example: true
sources: [{"title":"Steam 商店页面","url":"https://store.steampowered.com/app/1371980/No_Rest_for_the_Wicked/","type":"official","language":"en"},{"title":"Fextralife Guides & Walkthroughs","url":"https://norestforthewicked.wiki.fextralife.com/Guides%2B%26%2BWalkthroughs","type":"guide","language":"en"}]
images: [{"url":"https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1371980/1163c9191d2261d845aa96cbc011ed6490182ae8/ss_1163c9191d2261d845aa96cbc011ed6490182ae8.1920x1080.jpg?t=1780442295","alt":"圣城与城镇功能参考图","caption":"圣城功能与城镇整理参考","sourceUrl":"https://store.steampowered.com/app/1371980/No_Rest_for_the_Wicked/","licenseNote":"Steam 商店公开截图，保留来源链接。"}]
contentStatus: draft
lastVerifiedAt: 2026-07-08
---

## 目标

这篇示例用于记录初次进入圣城后，哪些功能和 NPC 值得优先确认。实际路线请按你的存档进度校对。

## 推荐路线

1. 先确认城内传送点，避免后续反复跑图。
2. 找到基础商人，记下会出售的消耗品和修理相关资源。
3. 标记铁匠位置，后续装备强化和修理会频繁回来。

## 注意事项

- 这是示例内容，不代表完整权威攻略。
- 如果你要补正式攻略，可以把每个 NPC 的具体位置和解锁条件写进资料卡字段。
`,_r=`---
slug: wiki-main-boss-index
title: 主线 Boss 图鉴总览
gameId: no-rest-for-the-wicked
category: boss
region: 多区域
phase: 主线
npcs: []
items: [首领掉落, 随机物品, 独特资源]
prerequisites: [推进主线剧情]
rewards: [剧情推进, 首领奖励]
spoilerLevel: major
tags: [Boss, 主线, 支线, 图鉴, Wiki]
bossType: 首领索引
summary: 以 Wiki 图鉴方式集中整理当前资料中可确认的主线、支线和挑战 Boss，并链接到单独打法条目。
updatedAt: 2026-07-09
example: false
sources: [fextralife-bosses, boss-warrick, boss-riven-twins, boss-falstead-darak, boss-echo-knight, boss-lost-huntress, boss-caretaker-tusk, boss-winged-brood, boss-unbreakable-egg]
images: [boss-warrick, boss-riven-twins, boss-falstead-darak, boss-echo-knight, boss-lost-huntress, boss-caretaker-tusk, boss-winged-brood]
contentStatus: verified
lastVerifiedAt: 2026-07-09
---

## 主线 Boss 列表

- Warrick the Torn：开局阶段的重要新手墙，用来检验闪避、体力和贪刀控制。
- The Riven Twins：无名入口相关首领，资料显示可选 Boss 为否，弱点为火，奖励为任务独特品与随机物品。
- Falstead Darak：主线阶段重型 Boss，重点在阶段节奏和大后摇输出。
- Echo Knight：后期高压首领，适合在装备、补给和 Build 成型后挑战。

## 支线与挑战 Boss 列表

- The Lost Huntress：猎手型首领，重点在远近距离切换和突进前摇。
- The Caretaker and the Tusk：双目标/组合压力首领，优先处理视角和站位。
- The Winged Brood：飞行或跃击压力首领，适合准备高机动或远程补刀手段。
- The Unbreakable Egg：资料页面已确认存在，但图片和详细数值暂未稳定抓取，先作为待复核入口。

## 使用方式

先从本页确认首领名字和阶段，再进入单独条目查看位置、弱点、抗性、奖励和打法。所有具体数值都保留来源链接，后续版本更新后要重新复核。

## 图片说明

本页使用 Fextralife Wiki 公开页面图片，仅做来源引用和攻略定位，不移除水印、Logo 或原站标识。

<!-- guide -->
---
slug: boss-warrick-the-torn-wiki
title: Warrick the Torn 首领攻略
gameId: no-rest-for-the-wicked
category: boss
region: 海岸
phase: 序章
npcs: []
items: [初期武器, 治疗品, 食物]
prerequisites: [推进序章到首领战]
rewards: [主线推进, 首领奖励]
spoilerLevel: major
tags: [Boss, Warrick, 主线, 新手墙]
bossType: 兽型 Boss
summary: Warrick the Torn 是开局阶段最重要的战斗门槛，打法核心是看完连段再输出。
updatedAt: 2026-07-09
example: false
sources: [boss-warrick, fextralife-bosses]
images: [boss-warrick]
contentStatus: verified
lastVerifiedAt: 2026-07-09
---

## Boss 信息

- 类型：主线首领。
- 体型分类：兽型 Boss。
- 作用：检验基础战斗系统，包括闪避方向、体力管理、轻重攻击节奏。
- 准备：至少保证有足够治疗品，主武器手感要熟，不建议临时换没练过的武器。

## 打法思路

Warrick 的威胁来自你太早出手。第一轮先记连段，不要看到一次空档就把体力打空。等完整连段结束后，用一到两次轻攻击或一次重击收手。

## 常见错误

- 闪避后立刻反打，结果吃到后续连段。
- 体力用完后站在 Boss 面前喝药。
- 低血时只顾拉远，没观察突进前摇。

## 建议打法

保持中距离，诱导 Boss 出完整动作。确认大后摇后再攻击；喝药只在远离攻击范围或 Boss 处于明显后摇时进行。

<!-- guide -->
---
slug: boss-the-riven-twins-wiki
title: The Riven Twins 首领攻略
gameId: no-rest-for-the-wicked
category: boss
region: 无名入口
phase: 主线
npcs: []
items: [任务独特品, 随机物品]
prerequisites: [推进到无名入口相关战斗]
rewards: [1 件任务独特品, 随机物品]
spoilerLevel: major
tags: [Boss, The Riven Twins, 裂痕双子, 主线]
bossType: 双目标 Boss
summary: The Riven Twins 资料显示弱点为火，强效对抗为瘟疫，核心是控制站位和分辨双目标压力。
updatedAt: 2026-07-09
example: false
sources: [boss-riven-twins, fextralife-bosses]
images: [boss-riven-twins]
contentStatus: verified
lastVerifiedAt: 2026-07-09
---

## Boss 信息

- 可选 Boss：否。
- 体型分类：双目标 Boss / 人形压力战。
- 位置：无名入口。
- 弱点：火。
- 强效对抗：瘟疫。
- 抗性：无。
- 免疫于：无。
- 奖励：1 件任务独特品 + 随机物品。

## 如何找到

根据 Wiki 资料，The Riven Twins 位于无名入口相关路线。推进到对应主线阶段后，把传送点、捷径和回城路线先确认，再进入首领战。

## 打法思路

双目标战最怕被夹在中间。开场优先把两个目标拉到同一侧，让视角能同时看到主要威胁。输出只打离群或硬直中的目标，不要在两者都能行动时贪连段。

## 准备建议

带足治疗和高回复食物。若当前 Build 有火属性或火相关输出，可优先尝试；如果没有，也不要为了属性临时换成不熟悉的武器。

<!-- guide -->
---
slug: boss-falstead-darak-wiki
title: Falstead Darak 首领攻略
gameId: no-rest-for-the-wicked
category: boss
region: 主线区域
phase: 初中期
npcs: []
items: [强化武器, 治疗品, 修理材料]
prerequisites: [推进 Falstead Darak 相关主线]
rewards: [主线推进, 首领奖励]
spoilerLevel: major
tags: [Boss, Falstead Darak, 主线, 阶段战]
bossType: 人形 Boss
summary: Falstead Darak 是重型压迫型首领，重点不是抢伤害，而是识别阶段和大后摇窗口。
updatedAt: 2026-07-09
example: false
sources: [boss-falstead-darak, fextralife-bosses]
images: [boss-falstead-darak]
contentStatus: verified
lastVerifiedAt: 2026-07-09
---

## Boss 信息

Falstead Darak 是 Fextralife Bosses 页面列出的主线 Boss 之一。它归入人形 Boss，适合作为中前期装备强度与战斗节奏的综合检查点。

## 打法思路

先用一到两轮尝试确认攻击范围。重型 Boss 的攻击后摇通常更有价值，但错误站位会让你连续吃到压制。输出窗口集中在大动作结束、转身、收招和阶段转换后的短暂停顿。

## 准备建议

- 主武器先强化，不要拿未强化武器硬磨。
- 修理材料和治疗品要足。
- 重武器 Build 少蓄力，快武器 Build 少贴身。

## 常见错误

最大错误是看到一次空档就打一整套。Falstead Darak 类 Boss 经常有二段动作，确认安全后再出手更稳。

<!-- guide -->
---
slug: boss-echo-knight-wiki
title: Echo Knight 首领攻略
gameId: no-rest-for-the-wicked
category: boss
region: 后期挑战
phase: 后期
npcs: []
items: [成型 Build, 高回复食物, 抗性装备]
prerequisites: [进入 Echo Knight 相关挑战]
rewards: [高价值奖励, 后期推进]
spoilerLevel: major
tags: [Boss, Echo Knight, 后期, 挑战]
bossType: 人形 Boss
summary: Echo Knight 属于后期高压首领，挑战前应确认 Build、补给、抗性和耐久都已准备好。
updatedAt: 2026-07-09
example: false
sources: [boss-echo-knight, fextralife-bosses]
images: [boss-echo-knight]
contentStatus: verified
lastVerifiedAt: 2026-07-09
---

## Boss 信息

Echo Knight 是 Fextralife Bosses 页面列出的 Boss，归入人形 Boss / 后期挑战。相较前期首领，它更适合在 Build 成型后挑战。

## 打法思路

不要把 Echo Knight 当成纯伤害检测。后期首领通常更考验连续判断：识别攻击节奏、保留体力、在安全窗口喝药，并在每次失败后明确修正一个问题。

## 准备建议

- 主武器和常穿护甲优先强化。
- 准备高回复食物和修理材料。
- 如果某类异常或属性压力明显，优先换抗性装备而不是硬拼。

## 练习方式

前三次挑战只观察连段和安全喝药窗口。确认稳定躲过主要攻击后，再开始追求输出效率。

<!-- guide -->
---
slug: boss-the-lost-huntress-wiki
title: The Lost Huntress 首领攻略
gameId: no-rest-for-the-wicked
category: boss
region: 支线区域
phase: 中期
npcs: []
items: [远程压力, 治疗品, 机动装备]
prerequisites: [触发 The Lost Huntress 相关挑战]
rewards: [首领奖励, 随机物品]
spoilerLevel: major
tags: [Boss, The Lost Huntress, 支线, 猎手]
bossType: 人形 Boss
summary: The Lost Huntress 属于机动型 Boss，重点是拉开视角、等突进结束后反击。
updatedAt: 2026-07-09
example: false
sources: [boss-lost-huntress, fextralife-bosses]
images: [boss-lost-huntress]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## Boss 信息

Fextralife 独立页面确认 The Lost Huntress 为 Boss 条目。当前归入人形 Boss / 猎手型首领；具体弱点、抗性、掉落数值后续需要按版本继续复核。

## 打法思路

猎手型敌人通常会用突进、拉开距离和连续压迫打乱节奏。不要追着它跑到体力见底，保持中距离，等它主动交位移后再反击。

## 准备建议

- 优先保证锁定视角稳定，不要被地形卡住。
- 留一段体力专门处理突进后的追击。
- 有远程符文或快速出手技能时，可以用来补最后一段血。

<!-- guide -->
---
slug: boss-the-caretaker-and-the-tusk-wiki
title: The Caretaker and the Tusk 首领攻略
gameId: no-rest-for-the-wicked
category: boss
region: 支线区域
phase: 中期
npcs: []
items: [治疗品, 控场技能, 高削韧武器]
prerequisites: [触发 The Caretaker and the Tusk 相关挑战]
rewards: [首领奖励, 随机物品]
spoilerLevel: major
tags: [Boss, Caretaker, Tusk, 支线, 双目标]
bossType: 双目标 Boss
summary: The Caretaker and the Tusk 的难点在组合压力，先整理站位，再考虑爆发输出。
updatedAt: 2026-07-09
example: false
sources: [boss-caretaker-tusk, fextralife-bosses]
images: [boss-caretaker-tusk]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## Boss 信息

Fextralife 独立页面确认 The Caretaker and the Tusk 为 Boss 条目。当前归入双目标 Boss / 组合压力首领，具体数值仍需复核。

## 打法思路

这类战斗不要站在两个威胁之间。把敌人拉到同一侧，保证屏幕里能看到主要攻击来源；只在一个目标收招、另一个目标距离较远时输出。

## 准备建议

- 带高回复食物，避免长战斗资源不足。
- 高削韧武器可以缩短危险窗口，但不要强行蓄力。
- 若有控场符文，优先用于打断或争取喝药时间。

<!-- guide -->
---
slug: boss-the-winged-brood-wiki
title: The Winged Brood 首领攻略
gameId: no-rest-for-the-wicked
category: boss
region: 支线区域
phase: 中后期
npcs: []
items: [高机动装备, 远程符文, 治疗品]
prerequisites: [触发 The Winged Brood 相关挑战]
rewards: [首领奖励, 随机物品]
spoilerLevel: major
tags: [Boss, Winged Brood, 支线, 飞行]
bossType: 飞行兽型 Boss
summary: The Winged Brood 适合按飞行/跃击 Boss 思路处理，先避开落点，再抓落地后摇。
updatedAt: 2026-07-09
example: false
sources: [boss-winged-brood, fextralife-bosses]
images: [boss-winged-brood]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## Boss 信息

Fextralife 独立页面确认 The Winged Brood 为 Boss 条目。当前归入飞行兽型 Boss，已抓取到图鉴图片，但弱点、抗性和掉落仍需后续复核。

## 打法思路

遇到飞行或跃击类 Boss 时，先不要追击空中目标。观察落点提示和俯冲前摇，横向闪避后抓落地后摇。近战 Build 要减少空挥，远程或符文 Build 可以补充安全输出。

## 准备建议

- 穿不会明显影响翻滚手感的装备。
- 准备快速出手技能，避免错过短后摇。
- 场地边缘通常更危险，尽量把战斗带回开阔区域。

<!-- guide -->
---
slug: boss-the-unbreakable-egg-wiki
title: The Unbreakable Egg 首领资料入口
gameId: no-rest-for-the-wicked
category: boss
region: 支线区域
phase: 待复核
npcs: []
items: [首领奖励, 随机物品]
prerequisites: [触发 The Unbreakable Egg 相关挑战]
rewards: [待复核]
spoilerLevel: major
tags: [Boss, Unbreakable Egg, 支线, 待复核]
bossType: 特殊 Boss
summary: The Unbreakable Egg 已建立资料入口，等待补齐图片、弱点、抗性、位置和奖励。
updatedAt: 2026-07-09
example: false
sources: [boss-unbreakable-egg, fextralife-bosses]
images: [steam-boss]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 当前状态

Fextralife 独立页面确认 The Unbreakable Egg 存在。当前归入特殊 Boss / 机制目标；本轮未稳定抓取到可用图鉴图片和完整资料，先作为 Boss 索引入口加入，避免搜索时漏掉。

## 后续补全清单

- 位置与触发方式。
- 弱点、抗性、免疫。
- 首领奖励。
- 对应图像或视频来源。
- 实战打法。

<!-- guide -->
---
slug: wiki-weapon-catalog-index
title: 武器 Wiki 分类索引
gameId: no-rest-for-the-wicked
category: equipment
region: 通用
phase: 任意
npcs: [铁匠, 商人]
items: [单手武器, 双手武器, 盾牌, 符文]
prerequisites: [获得多种装备]
rewards: [配装方向, 强化优先级]
spoilerLevel: none
tags: [装备, 武器, Wiki, 索引]
equipmentType: 武器
summary: 按 Wiki 方式整理武器选择维度：动作、体力消耗、削韧、强化成本和符文适配。
updatedAt: 2026-07-09
example: false
sources: [fextralife-weapons, wikigg-equipment]
images: [steam-combat]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 分类入口

- 单手武器：适合剑盾、轻装和稳定开荒。
- 双手武器：适合高削韧和高单击收益，但更吃后摇判断。
- 盾牌：提高容错，但会增加重量和体力管理压力。
- 符文：决定技能爆发和特殊功能，需要结合武器动作评价。

## 评价维度

武器条目后续都按五个维度补：基础动作、体力消耗、削韧能力、强化材料、推荐 Build。

## 维护说明

具体武器数值容易随版本变化，本索引优先保证结构和查询入口，数值表后续逐项复核。

<!-- guide -->
---
slug: wiki-armor-catalog-index
title: 护甲与装备 Wiki 分类索引
gameId: no-rest-for-the-wicked
category: equipment
region: 通用
phase: 任意
npcs: [铁匠, 商人]
items: [头盔, 胸甲, 手甲, 腿甲, 戒指]
prerequisites: [获得多类护甲或饰品]
rewards: [生存提升, Build 补强]
spoilerLevel: none
tags: [装备, 护甲, 戒指, Wiki]
equipmentType: 护甲
summary: 护甲条目按重量、防御、抗性、词条和 Build 适配整理，避免只看稀有度。
updatedAt: 2026-07-09
example: false
sources: [wikigg-equipment, fextralife]
images: [steam-town]
contentStatus: needs_review
lastVerifiedAt: 2026-07-09
---

## 分类入口

- 轻甲：偏机动和闪避手感。
- 中甲：在容错和动作之间折中。
- 重甲：提高生存，但要管理重量。
- 戒指/饰品：负责补足输出、生存、资源循环或抗性。

## 评价维度

每件装备应记录重量、防御倾向、抗性、词条、适合 Build、获取来源和是否值得强化。

## 维护说明

装备图像若来自第三方 Wiki，必须保留来源链接，不做去水印或去 Logo 处理。
`,j=[{title:`No Rest for the Wicked 官网`,url:`https://www.norestforthewicked.com/`,type:`official`,language:`en`},{title:`Steam 商店页面`,url:`https://store.steampowered.com/app/1371980/No_Rest_for_the_Wicked/`,type:`official`,language:`en`},{title:`Fextralife Wiki 总览`,url:`https://norestforthewicked.wiki.fextralife.com/No%2BRest%2BFor%2BThe%2BWicked%2BWiki`,type:`wiki`,language:`en`},{title:`Fextralife Weapons`,url:`https://norestforthewicked.wiki.fextralife.com/Weapons`,type:`wiki`,language:`en`},{title:`Fextralife Bosses`,url:`https://norestforthewicked.wiki.fextralife.com/Bosses`,type:`wiki`,language:`en`},{title:`Fextralife Warrick the Torn`,url:`https://norestforthewicked.wiki.fextralife.com/Warrick+the+Torn`,type:`wiki`,language:`en`},{title:`Fextralife The Riven Twins`,url:`https://norestforthewicked.wiki.fextralife.com/The+Riven+Twins`,type:`wiki`,language:`en`},{title:`Fextralife Falstead Darak`,url:`https://norestforthewicked.wiki.fextralife.com/Falstead+Darak`,type:`wiki`,language:`en`},{title:`Fextralife Echo Knight`,url:`https://norestforthewicked.wiki.fextralife.com/Echo+Knight`,type:`wiki`,language:`en`},{title:`Fextralife Guides & Walkthroughs`,url:`https://norestforthewicked.wiki.fextralife.com/Guides%2B%26%2BWalkthroughs`,type:`guide`,language:`en`},{title:`wiki.gg Equipment`,url:`https://nrftw.wiki.gg/wiki/Equipment`,type:`wiki`,language:`en`},{title:`Moon Studios The Breach 官方展示`,url:`https://www.youtube.com/watch?v=CzAtYaSYZms`,type:`official`,language:`en`},{title:`The Breach 官方预告`,url:`https://www.youtube.com/watch?v=mpoMEYnvA5Q`,type:`official`,language:`en`},{title:`Steam 社区截图`,url:`https://steamcommunity.com/app/1371980/screenshots/`,type:`community`,language:`en`},{title:`Fextralife The Lost Huntress`,url:`https://norestforthewicked.wiki.fextralife.com/The+Lost+Huntress`,type:`wiki`,language:`en`},{title:`Fextralife The Caretaker and the Tusk`,url:`https://norestforthewicked.wiki.fextralife.com/The+Caretaker+and+the+Tusk`,type:`wiki`,language:`en`},{title:`Fextralife The Winged Brood`,url:`https://norestforthewicked.wiki.fextralife.com/The+Winged+Brood`,type:`wiki`,language:`en`},{title:`Fextralife The Unbreakable Egg`,url:`https://norestforthewicked.wiki.fextralife.com/The+Unbreakable+Egg`,type:`wiki`,language:`en`},{title:`Fextralife New Player Help`,url:`https://norestforthewicked.wiki.fextralife.com/New+Player+Help`,type:`guide`,language:`en`},{title:`Fextralife Walkthrough`,url:`https://norestforthewicked.wiki.fextralife.com/Walkthrough`,type:`guide`,language:`en`},{title:`Fextralife Side Quests`,url:`https://norestforthewicked.wiki.fextralife.com/Side+Quests`,type:`guide`,language:`en`},{title:`Fextralife Endings`,url:`https://norestforthewicked.wiki.fextralife.com/Endings`,type:`guide`,language:`en`},{title:`Fextralife Crafting`,url:`https://norestforthewicked.wiki.fextralife.com/Crafting`,type:`guide`,language:`en`},{title:`Fextralife New Game Plus`,url:`https://norestforthewicked.wiki.fextralife.com/New+Game+%2B`,type:`guide`,language:`en`},{title:`Fextralife Trophy & Achievement Guide`,url:`https://norestforthewicked.wiki.fextralife.com/Trophy+%26+Achievement+Guide`,type:`guide`,language:`en`},{title:`Fextralife Housing`,url:`https://norestforthewicked.wiki.fextralife.com/Housing`,type:`guide`,language:`en`}],vr={official:j[0],steam:j[1],fextralife:j[2],"fextralife-weapons":j[3],"fextralife-bosses":j[4],"boss-warrick":j[5],"boss-riven-twins":j[6],"boss-falstead-darak":j[7],"boss-echo-knight":j[8],"fextralife-guides":j[9],"wikigg-equipment":j[10],"breach-showcase":j[11],"breach-trailer":j[12],"steam-community":j[13],"boss-lost-huntress":j[14],"boss-caretaker-tusk":j[15],"boss-winged-brood":j[16],"boss-unbreakable-egg":j[17],"guide-new-player-help":j[18],"guide-walkthrough":j[19],"guide-side-quests":j[20],"guide-endings":j[21],"guide-crafting":j[22],"guide-new-game-plus":j[23],"guide-achievements":j[24],"guide-housing":j[25]},yr=[{url:`https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1371980/331de7e745f43867f0a220339153ac6019822ea4/header.jpg?t=1780442295`,alt:`No Rest for the Wicked Steam header`,caption:`官方 Steam 商店头图`,sourceUrl:`https://store.steampowered.com/app/1371980/No_Rest_for_the_Wicked/`,licenseNote:`Steam 商店公开媒体素材，保留来源链接。`},{url:`https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1371980/079327abaf4866604f9f77200ded37da18d7089e/ss_079327abaf4866604f9f77200ded37da18d7089e.1920x1080.jpg?t=1780442295`,alt:`No Rest for the Wicked combat screenshot`,caption:`战斗场景参考图`,sourceUrl:`https://store.steampowered.com/app/1371980/No_Rest_for_the_Wicked/`,licenseNote:`Steam 商店公开截图，保留来源链接。`},{url:`https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1371980/56066f44f29e8b042c482e0b0680bc101bf1ecd5/ss_56066f44f29e8b042c482e0b0680bc101bf1ecd5.1920x1080.jpg?t=1780442295`,alt:`No Rest for the Wicked exploration screenshot`,caption:`区域探索参考图`,sourceUrl:`https://store.steampowered.com/app/1371980/No_Rest_for_the_Wicked/`,licenseNote:`Steam 商店公开截图，保留来源链接。`},{url:`https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1371980/1163c9191d2261d845aa96cbc011ed6490182ae8/ss_1163c9191d2261d845aa96cbc011ed6490182ae8.1920x1080.jpg?t=1780442295`,alt:`No Rest for the Wicked town screenshot`,caption:`圣城与城镇功能参考图`,sourceUrl:`https://store.steampowered.com/app/1371980/No_Rest_for_the_Wicked/`,licenseNote:`Steam 商店公开截图，保留来源链接。`},{url:`https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1371980/ss_01a87d9ec6cef10244eb5dd8d3f55047060da954.1920x1080.jpg?t=1780442295`,alt:`No Rest for the Wicked boss arena screenshot`,caption:`Boss 战场景参考图`,sourceUrl:`https://store.steampowered.com/app/1371980/No_Rest_for_the_Wicked/`,licenseNote:`Steam 商店公开截图，保留来源链接。`}],br={"steam-hero":yr[0],"steam-combat":yr[1],"steam-explore":yr[2],"steam-town":yr[3],"steam-boss":yr[4],"boss-warrick":{url:`https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/warrick-the-torn-boss-no-rest-for-the-wicked-wiki-guide.jpg`,alt:`Warrick the Torn boss image`,caption:`Warrick the Torn Boss 图鉴`,sourceUrl:`https://norestforthewicked.wiki.fextralife.com/Warrick+the+Torn`,licenseNote:`Fextralife Wiki 图片，保留原图与来源链接，不移除水印或标识。`},"boss-riven-twins":{url:`https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/the-riven-twins-boss-no-rest-for-the-wicked-wiki-guide.jpg`,alt:`The Riven Twins boss image`,caption:`The Riven Twins Boss 图鉴`,sourceUrl:`https://norestforthewicked.wiki.fextralife.com/The+Riven+Twins`,licenseNote:`Fextralife Wiki 图片，保留原图与来源链接，不移除水印或标识。`},"boss-falstead-darak":{url:`https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/falstead-derek-boss-no-rest-for-the-wicked-wiki-guide.jpg`,alt:`Falstead Darak boss image`,caption:`Falstead Darak Boss 图鉴`,sourceUrl:`https://norestforthewicked.wiki.fextralife.com/Falstead+Darak`,licenseNote:`Fextralife Wiki 图片，保留原图与来源链接，不移除水印或标识。`},"boss-echo-knight":{url:`https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/echo-knight-boss-no-rest-for-the-wicked-wiki-guide.jpg`,alt:`Echo Knight boss image`,caption:`Echo Knight Boss 图鉴`,sourceUrl:`https://norestforthewicked.wiki.fextralife.com/Echo+Knight`,licenseNote:`Fextralife Wiki 图片，保留原图与来源链接，不移除水印或标识。`},"boss-lost-huntress":{url:`https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/the-lost-huntress-boss-nrftw-wiki-guide-300px.jpg`,alt:`The Lost Huntress boss image`,caption:`The Lost Huntress Boss 图鉴`,sourceUrl:`https://norestforthewicked.wiki.fextralife.com/The+Lost+Huntress`,licenseNote:`Fextralife Wiki 图片，保留原图与来源链接，不移除水印或标识。`},"boss-caretaker-tusk":{url:`https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/the-caretaker-the-tusk-boss-nrftw-wiki-guide-300px.jpg`,alt:`The Caretaker and the Tusk boss image`,caption:`The Caretaker and the Tusk Boss 图鉴`,sourceUrl:`https://norestforthewicked.wiki.fextralife.com/The+Caretaker+and+the+Tusk`,licenseNote:`Fextralife Wiki 图片，保留原图与来源链接，不移除水印或标识。`},"boss-winged-brood":{url:`https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/the-winged-brood-boss-nrftw-wiki-guide-300px.png`,alt:`The Winged Brood boss image`,caption:`The Winged Brood Boss 图鉴`,sourceUrl:`https://norestforthewicked.wiki.fextralife.com/The+Winged+Brood`,licenseNote:`Fextralife Wiki 图片，保留原图与来源链接，不移除水印或标识。`},"wiki-crafting-materials":{url:`https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/materials-crafting-norestforthewicked-wiki-guide-400px.jpg`,alt:`No Rest for the Wicked crafting materials`,caption:`Crafting 页面材料图`,sourceUrl:`https://norestforthewicked.wiki.fextralife.com/Crafting`,licenseNote:`Fextralife Wiki 图片，保留原图与来源链接，不移除水印或标识。`},"wiki-housing":{url:`https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/buy-housing-no-rest-for-the-wicked-wiki-guide.jpg`,alt:`No Rest for the Wicked housing guide image`,caption:`Housing 页面房屋图`,sourceUrl:`https://norestforthewicked.wiki.fextralife.com/Housing`,licenseNote:`Fextralife Wiki 图片，保留原图与来源链接，不移除水印或标识。`},"wiki-side-quest-armor":{url:`https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/the-innkeepers-husband-side-quest-no-rest-for-the-wicked-wiki-guide.jpg`,alt:`No Rest for the Wicked side quest image`,caption:`Fextralife 支线/装备相关页面图片`,sourceUrl:`https://norestforthewicked.wiki.fextralife.com/Armor`,licenseNote:`Fextralife Wiki 图片，保留原图与来源链接，不移除水印或标识。`}},xr=Object.assign({"../content/guides/TEMPLATE.md":cr,"../content/guides/no-rest-for-the-wicked/early-healing-supplies.md":lr,"../content/guides/no-rest-for-the-wicked/fextralife-guides-walkthroughs-pack.md":ur,"../content/guides/no-rest-for-the-wicked/fextralife-weapon-catalog-pack.md":dr,"../content/guides/no-rest-for-the-wicked/fextralife-wiki-hub-pack.md":fr,"../content/guides/no-rest-for-the-wicked/internet-guide-pack.md":pr,"../content/guides/no-rest-for-the-wicked/mariners-keep-shortcuts.md":mr,"../content/guides/no-rest-for-the-wicked/quest-notes-template.md":hr,"../content/guides/no-rest-for-the-wicked/sacrament-first-visit.md":gr,"../content/guides/no-rest-for-the-wicked/wiki-boss-equipment-pack.md":_r}),Sr=[`quest_exploration`,`build`,`equipment`,`resource_map`,`boss`,`collection`],Cr=[`none`,`light`,`major`],wr=[`draft`,`verified`,`needs_review`],Tr=[`title`,`gameId`,`category`,`region`,`phase`,`npcs`,`items`,`prerequisites`,`rewards`,`spoilerLevel`,`tags`,`summary`,`updatedAt`,`example`,`sources`,`images`,`contentStatus`,`lastVerifiedAt`];function Er(){let e=Object.entries(xr).filter(([e])=>!e.endsWith(`/TEMPLATE.md`)).flatMap(([e,t])=>Or(e,t));return Ar(e,ir),e.sort((e,t)=>e.title.localeCompare(t.title,`zh-Hans-CN`))}var Dr=Er();function Or(e,t){return t.split(/\n<!--\s*guide\s*-->\n/g).map(e=>e.trim()).filter(Boolean).map((t,n)=>kr(e,t,n))}function kr(e,t,n=0){let{frontmatter:r,body:i}=jr(e,t),a=Mr(e,r),o=Fr(e,`slug`,r.slug)??(n===0?e.split(`/`).pop()?.replace(/\.md$/,``):void 0)??``,s=[a.title,a.summary,a.region,a.phase,a.npcs.join(` `),a.items.join(` `),a.prerequisites.join(` `),a.rewards.join(` `),a.tags.join(` `),a.sources.map(e=>e.title).join(` `),a.sources.map(e=>e.url).join(` `),a.bossType??``,a.equipmentType??``,a.buildTags?.join(` `)??``,i].join(` `).toLowerCase();return{...a,slug:o,body:i.trim(),searchText:s}}function Ar(e,t){let n=new Set(t.map(e=>e.id)),r=new Set;for(let i of e){if(!n.has(i.gameId))throw Error(`Guide "${i.slug}" references unknown gameId "${i.gameId}".`);let e=t.find(e=>e.id===i.gameId);if(e&&!e.supportedCategories.includes(i.category))throw Error(`Guide "${i.slug}" uses category "${i.category}" not enabled for "${i.gameId}".`);let a=`${i.gameId}/${i.slug}`;if(r.has(a))throw Error(`Duplicate guide slug "${a}".`);r.add(a)}}function jr(e,t){if(!t.startsWith(`---
`))throw Error(`Guide "${e}" is missing frontmatter delimiters.`);let n=t.indexOf(`
---`,4);if(n===-1)throw Error(`Guide "${e}" has unclosed frontmatter.`);let r=t.slice(4,n).trim(),i=t.slice(n+4).trim();return{frontmatter:Object.fromEntries(r.split(`
`).map(e=>e.trim()).filter(Boolean).map(t=>{let n=t.indexOf(`:`);if(n===-1)throw Error(`Guide "${e}" has invalid frontmatter line "${t}".`);return[t.slice(0,n).trim(),Nr(t.slice(n+1).trim())]})),body:i}}function Mr(e,t){for(let n of Tr)if(!(n in t))throw Error(`Guide "${e}" is missing required field "${n}".`);let n=zr(e,`category`,t.category,Sr),r=zr(e,`spoilerLevel`,t.spoilerLevel,Cr);return{title:Pr(e,`title`,t.title),gameId:Pr(e,`gameId`,t.gameId),category:n,region:Pr(e,`region`,t.region),phase:Pr(e,`phase`,t.phase),npcs:Lr(e,`npcs`,t.npcs),items:Lr(e,`items`,t.items),prerequisites:Lr(e,`prerequisites`,t.prerequisites),rewards:Lr(e,`rewards`,t.rewards),spoilerLevel:r,tags:Lr(e,`tags`,t.tags),summary:Pr(e,`summary`,t.summary),updatedAt:Pr(e,`updatedAt`,t.updatedAt),example:Ir(e,`example`,t.example),sources:Br(e,t.sources),images:Vr(e,t.images),contentStatus:zr(e,`contentStatus`,t.contentStatus,wr),lastVerifiedAt:Pr(e,`lastVerifiedAt`,t.lastVerifiedAt),bossType:Fr(e,`bossType`,t.bossType),equipmentType:Fr(e,`equipmentType`,t.equipmentType),buildTags:Rr(e,`buildTags`,t.buildTags)}}function Nr(e){if(e===`true`)return!0;if(e===`false`)return!1;if(e.startsWith(`[`)&&e.endsWith(`]`)){try{return JSON.parse(e)}catch{}let t=e.slice(1,-1).trim();return t?t.split(`,`).map(e=>e.trim()).filter(Boolean):[]}return e.startsWith(`{`)&&e.endsWith(`}`)?JSON.parse(e):e}function Pr(e,t,n){if(typeof n!=`string`||n.length===0)throw Error(`Guide "${e}" field "${t}" must be a string.`);return n}function Fr(e,t,n){if(n!==void 0)return Pr(e,t,n)}function Ir(e,t,n){if(typeof n!=`boolean`)throw Error(`Guide "${e}" field "${t}" must be a boolean.`);return n}function Lr(e,t,n){if(!Array.isArray(n)||n.some(e=>typeof e!=`string`))throw Error(`Guide "${e}" field "${t}" must be a string array.`);return n}function Rr(e,t,n){if(n!==void 0)return Lr(e,t,n)}function zr(e,t,n,r){if(typeof n!=`string`||!r.includes(n))throw Error(`Guide "${e}" field "${t}" must be one of: ${r.join(`, `)}.`);return n}function Br(e,t){if(!Array.isArray(t)||t.length===0)throw Error(`Guide "${e}" field "sources" must be a non-empty array.`);return t.map(t=>{if(typeof t==`string`){let n=vr[t];if(!n)throw Error(`Guide "${e}" references unknown source "${t}".`);return n}if(typeof t!=`object`||!t)throw Error(`Guide "${e}" has an invalid source item.`);let n=t;return{title:Pr(e,`sources.title`,n.title),url:Pr(e,`sources.url`,n.url),type:zr(e,`sources.type`,n.type,[`official`,`wiki`,`guide`,`video`,`community`,`news`]),language:zr(e,`sources.language`,n.language,[`zh`,`en`])}})}function Vr(e,t){if(!Array.isArray(t))throw Error(`Guide "${e}" field "images" must be an array.`);return t.map(t=>{if(typeof t==`string`){let n=br[t];if(!n)throw Error(`Guide "${e}" references unknown image "${t}".`);return n}if(typeof t!=`object`||!t)throw Error(`Guide "${e}" has an invalid image item.`);let n=t;return{url:Pr(e,`images.url`,n.url),alt:Pr(e,`images.alt`,n.alt),caption:Pr(e,`images.caption`,n.caption),sourceUrl:Pr(e,`images.sourceUrl`,n.sourceUrl),licenseNote:Pr(e,`images.licenseNote`,n.licenseNote)}})}function Hr(e,t,n,r){let i=n.trim().toLowerCase();return e.filter(e=>e.gameId!==t||r.category!==`all`&&e.category!==r.category||r.region!==`all`&&e.region!==r.region||r.phase!==`all`&&e.phase!==r.phase||r.spoilerLevel!==`all`&&e.spoilerLevel!==r.spoilerLevel?!1:i?e.searchText.includes(i):!0)}function Ur(e,t){return Array.from(new Set(e.map(e=>e[t]).filter(e=>typeof e==`string`))).sort((e,t)=>e.localeCompare(t,`zh-Hans-CN`))}var Wr=ir[0]?.id??``,Gr={category:`all`,region:`all`,phase:`all`,spoilerLevel:`all`};function Kr(){return(0,A.jsxs)(Kt,{children:[(0,A.jsx)(Wt,{path:`/`,element:(0,A.jsx)(Ut,{to:`/games/${Wr}`,replace:!0})}),(0,A.jsx)(Wt,{path:`/games/:gameId`,element:(0,A.jsx)(qr,{})}),(0,A.jsx)(Wt,{path:`/games/:gameId/guides/:guideSlug`,element:(0,A.jsx)(Xr,{})}),(0,A.jsx)(Wt,{path:`*`,element:(0,A.jsx)(oi,{title:`页面不存在`})})]})}function qr(){let{gameId:e=Wr}=yt(),t=_t(),n=ir.find(t=>t.id===e),[r,i]=(0,x.useState)(``),[a,o]=(0,x.useState)(Gr),[s,c]=(0,x.useState)(`all`),[l,u]=(0,x.useState)(`all`),[d,f]=(0,x.useState)(`all`);if(!n)return(0,A.jsx)(oi,{title:`未找到这个游戏`});let p=Dr.filter(e=>e.gameId===n.id),m=Ur(p,`region`),h=Ur(p,`phase`),g=si(p.filter(e=>e.category===`equipment`),`equipmentType`),_=si(p.filter(e=>e.category===`boss`),`bossType`),v=Array.from(new Set(p.flatMap(e=>e.buildTags??[]))).sort((e,t)=>e.localeCompare(t,`zh-Hans-CN`)),y=n.supportedCategories.map(e=>({category:e,count:p.filter(t=>t.category===e).length})),b=a.category===`equipment`||a.category===`all`?s:`all`,ee=a.category===`boss`||a.category===`all`?l:`all`,S=a.category===`build`||a.category===`all`?d:`all`,C=Hr(p,n.id,r,a).filter(e=>(b===`all`||e.equipmentType===b)&&(ee===`all`||e.bossType===ee)&&(S===`all`||e.buildTags?.includes(S))),te=a.category===`equipment`||a.category===`boss`;function ne(e){o({...a,category:e}),e!==`equipment`&&e!==`all`&&c(`all`),e!==`boss`&&e!==`all`&&u(`all`),e!==`build`&&e!==`all`&&f(`all`)}return(0,A.jsxs)(`main`,{className:`app-shell`,children:[(0,A.jsx)(Qr,{gameId:n.id,onGameChange:e=>t(`/games/${e}`)}),(0,A.jsxs)(`section`,{className:`game-hero`,children:[(0,A.jsx)(`img`,{src:n.cover,alt:``}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{className:`eyebrow`,children:`多游戏攻略库`}),(0,A.jsx)(`h1`,{children:n.name}),(0,A.jsx)(`p`,{children:n.description}),(0,A.jsx)(ei,{})]})]}),(0,A.jsx)(Jr,{stats:y,activeCategory:a.category,onSelect:ne}),(0,A.jsxs)(`section`,{className:`library-layout`,"aria-label":`攻略列表`,children:[(0,A.jsxs)(`aside`,{className:`filter-panel`,children:[(0,A.jsxs)(`label`,{className:`field`,children:[(0,A.jsx)(`span`,{children:`搜索`}),(0,A.jsx)(`input`,{value:r,onChange:e=>i(e.target.value),placeholder:`任务、地点、NPC、道具、Boss、装备...`})]}),(0,A.jsx)($r,{label:`分类`,value:a.category,onChange:e=>ne(e),options:[[`all`,`全部分类`],...n.supportedCategories.map(e=>[e,ar[e]])]}),(0,A.jsx)($r,{label:`区域`,value:a.region,onChange:e=>o({...a,region:e}),options:[[`all`,`全部区域`],...m.map(e=>[e,e])]}),(0,A.jsx)($r,{label:`阶段`,value:a.phase,onChange:e=>o({...a,phase:e}),options:[[`all`,`全部阶段`],...h.map(e=>[e,e])]}),(a.category===`equipment`||a.category===`all`)&&(0,A.jsx)($r,{label:`装备类型`,value:s,onChange:c,options:[[`all`,`全部装备类型`],...g.map(e=>[e,e])]}),(a.category===`boss`||a.category===`all`)&&(0,A.jsx)($r,{label:`Boss 类型`,value:l,onChange:u,options:[[`all`,`全部 Boss 类型`],..._.map(e=>[e,e])]}),(a.category===`build`||a.category===`all`)&&(0,A.jsx)($r,{label:`Build 标签`,value:d,onChange:f,options:[[`all`,`全部 Build 标签`],...v.map(e=>[e,e])]}),(0,A.jsx)($r,{label:`剧透`,value:a.spoilerLevel,onChange:e=>o({...a,spoilerLevel:e}),options:[[`all`,`全部剧透级别`],...Object.entries(or)]}),(0,A.jsx)(`button`,{type:`button`,className:`ghost-button`,onClick:()=>{i(``),o(Gr),c(`all`),u(`all`),f(`all`)},children:`重置筛选`})]}),(0,A.jsxs)(`div`,{className:`guide-results`,children:[(0,A.jsxs)(`div`,{className:`result-summary`,children:[(0,A.jsx)(`h2`,{children:`攻略条目`}),(0,A.jsxs)(`span`,{children:[C.length,` 篇`]})]}),te?(0,A.jsx)(Yr,{guides:C,mode:a.category===`equipment`?`equipment`:`boss`}):(0,A.jsx)(`div`,{className:`guide-grid`,children:C.map(e=>(0,A.jsx)(Zr,{guide:e},`${e.gameId}/${e.slug}`))}),C.length===0&&(0,A.jsx)(ai,{title:`没有匹配攻略`,body:`换一个关键词或重置筛选试试。`})]})]})]})}function Jr({stats:e,activeCategory:t,onSelect:n}){let r=e.reduce((e,t)=>e+t.count,0);return(0,A.jsxs)(`section`,{className:`category-dashboard`,"aria-label":`分类总览`,children:[(0,A.jsxs)(`button`,{type:`button`,className:t===`all`?`active`:``,onClick:()=>n(`all`),children:[(0,A.jsx)(`span`,{children:`全部`}),(0,A.jsx)(`strong`,{children:r})]}),e.map(({category:e,count:r})=>(0,A.jsxs)(`button`,{type:`button`,className:t===e?`active`:``,onClick:()=>n(e),children:[(0,A.jsx)(`span`,{children:ar[e]}),(0,A.jsx)(`strong`,{children:r})]},e))]})}function Yr({guides:e,mode:t}){return(0,A.jsx)(`div`,{className:`catalog-sections`,children:li(e,t).map(([e,t])=>(0,A.jsxs)(`section`,{className:`catalog-section`,children:[(0,A.jsxs)(`div`,{className:`catalog-heading`,children:[(0,A.jsx)(`h3`,{children:e}),(0,A.jsxs)(`span`,{children:[t.length,` 项`]})]}),(0,A.jsx)(`div`,{className:`catalog-grid`,children:t.map(e=>(0,A.jsx)(Zr,{guide:e,catalog:!0},`${e.gameId}/${e.slug}`))})]},e))})}function Xr(){let{gameId:e=``,guideSlug:t=``}=yt(),n=ir.find(t=>t.id===e),r=Dr.find(n=>n.gameId===e&&n.slug===t),i=(0,x.useMemo)(()=>Dr.filter(n=>n.gameId===e&&n.slug!==t&&(n.category===r?.category||n.region===r?.region||n.tags.some(e=>r?.tags.includes(e)))).slice(0,3),[e,t,r]);return n?r?(0,A.jsxs)(`main`,{className:`app-shell detail-shell`,children:[(0,A.jsx)(Qr,{gameId:n.id}),(0,A.jsx)(In,{className:`back-link`,to:`/games/${n.id}`,children:`返回攻略列表`}),(0,A.jsxs)(`article`,{className:`guide-detail`,children:[(0,A.jsxs)(`header`,{children:[(0,A.jsx)(`p`,{className:`eyebrow`,children:ar[r.category]}),(0,A.jsx)(`h1`,{children:r.title}),(0,A.jsx)(`p`,{children:r.summary}),(0,A.jsxs)(`div`,{className:`status-row`,children:[r.example&&(0,A.jsx)(`span`,{className:`notice`,children:`示例内容`}),(0,A.jsx)(`span`,{className:`notice`,children:sr[r.contentStatus]}),(0,A.jsxs)(`span`,{className:`notice`,children:[`复核：`,r.lastVerifiedAt]})]}),(0,A.jsx)(ei,{})]}),(0,A.jsxs)(`dl`,{className:`meta-panel`,"aria-label":`攻略资料卡`,children:[(0,A.jsx)(ri,{label:`区域`,values:[r.region]}),(0,A.jsx)(ri,{label:`阶段`,values:[r.phase]}),(0,A.jsx)(ri,{label:`NPC`,values:r.npcs}),(0,A.jsx)(ri,{label:`关键道具`,values:r.items}),(0,A.jsx)(ri,{label:`前置条件`,values:r.prerequisites}),(0,A.jsx)(ri,{label:`奖励`,values:r.rewards}),(0,A.jsx)(ri,{label:`装备类型`,values:ci(r.equipmentType)}),(0,A.jsx)(ri,{label:`Boss 类型`,values:ci(r.bossType)}),(0,A.jsx)(ri,{label:`Build 标签`,values:r.buildTags??[]}),(0,A.jsx)(ri,{label:`剧透级别`,values:[or[r.spoilerLevel]]}),(0,A.jsx)(ri,{label:`更新`,values:[r.updatedAt]})]}),(0,A.jsx)(ti,{guide:r}),(0,A.jsx)(nr,{source:r.body}),(0,A.jsx)(ii,{values:r.tags}),(0,A.jsx)(ni,{guide:r})]}),i.length>0&&(0,A.jsxs)(`section`,{className:`related-guides`,children:[(0,A.jsx)(`h2`,{children:`相关攻略`}),(0,A.jsx)(`div`,{className:`guide-grid compact`,children:i.map(e=>(0,A.jsx)(Zr,{guide:e,compact:!0},`${e.gameId}/${e.slug}`))})]})]}):(0,A.jsx)(oi,{title:`未找到这篇攻略`}):(0,A.jsx)(oi,{title:`未找到这个游戏`})}function Zr({guide:e,compact:t=!1,catalog:n=!1}){let r=e.images[0];return(0,A.jsxs)(In,{className:`guide-card ${t?`compact-card`:``} ${n?`catalog-card`:``}`,to:`/games/${e.gameId}/guides/${e.slug}`,children:[r&&(0,A.jsx)(`img`,{className:`card-image`,src:r.url,alt:r.alt}),(0,A.jsxs)(`div`,{className:`card-topline`,children:[(0,A.jsx)(`span`,{children:ar[e.category]}),(0,A.jsx)(`strong`,{children:sr[e.contentStatus]})]}),(0,A.jsx)(`h3`,{children:e.title}),!n&&(0,A.jsx)(`p`,{children:e.summary}),n&&(0,A.jsx)(`p`,{className:`catalog-type`,children:e.equipmentType??e.bossType??e.region}),!t&&!n&&(0,A.jsxs)(`dl`,{children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`dt`,{children:`区域`}),(0,A.jsx)(`dd`,{children:e.region})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`dt`,{children:`阶段`}),(0,A.jsx)(`dd`,{children:e.phase})]})]}),(0,A.jsx)(ii,{values:e.tags.slice(0,4)})]})}function Qr({gameId:e,onGameChange:t}){return(0,A.jsxs)(`header`,{className:`topbar`,children:[(0,A.jsxs)(In,{className:`brand`,to:`/games/${e}`,children:[(0,A.jsx)(`span`,{children:`攻略库`}),(0,A.jsx)(`strong`,{children:`Guide Forge`})]}),(0,A.jsxs)(`label`,{className:`game-switcher`,children:[(0,A.jsx)(`span`,{children:`游戏`}),(0,A.jsx)(`select`,{value:e,onChange:e=>t?.(e.target.value),children:ir.map(e=>(0,A.jsx)(`option`,{value:e.id,children:e.name},e.id))})]})]})}function $r({label:e,value:t,onChange:n,options:r}){return(0,A.jsxs)(`label`,{className:`field`,children:[(0,A.jsx)(`span`,{children:e}),(0,A.jsx)(`select`,{value:t,onChange:e=>n(e.target.value),children:r.map(([e,t])=>(0,A.jsx)(`option`,{value:e,children:t},e))})]})}function ei(){return(0,A.jsx)(`p`,{className:`source-notice`,children:`以下攻略均综合整理自互联网公开资料，并在详情页附来源链接；内容为重写摘要，不搬运第三方全文。`})}function ti({guide:e}){return e.images.length===0?null:(0,A.jsx)(`section`,{className:`image-gallery`,"aria-label":`攻略图片`,children:e.images.map(e=>(0,A.jsxs)(`figure`,{children:[(0,A.jsx)(`img`,{src:e.url,alt:e.alt}),(0,A.jsxs)(`figcaption`,{children:[e.caption,(0,A.jsx)(`a`,{href:e.sourceUrl,target:`_blank`,rel:`noreferrer`,children:`图片来源`}),(0,A.jsx)(`span`,{children:e.licenseNote})]})]},`${e.url}-${e.caption}`))})}function ni({guide:e}){return(0,A.jsxs)(`section`,{className:`source-list`,"aria-label":`来源链接`,children:[(0,A.jsx)(`h2`,{children:`来源链接`}),(0,A.jsx)(`ul`,{children:e.sources.map(e=>(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`a`,{href:e.url,target:`_blank`,rel:`noreferrer`,children:e.title}),(0,A.jsxs)(`span`,{children:[e.type,` · `,e.language]})]},`${e.title}-${e.url}`))})]})}function ri({label:e,values:t}){let n=t.length>0?t:[`无`];return(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`dt`,{children:e}),(0,A.jsx)(`dd`,{children:n.join(`、`)})]})}function ii({values:e}){return e.length===0?null:(0,A.jsx)(`ul`,{className:`tag-list`,children:e.map(e=>(0,A.jsx)(`li`,{children:e},e))})}function ai({title:e,body:t}){return(0,A.jsxs)(`div`,{className:`empty-state`,children:[(0,A.jsx)(`h2`,{children:e}),(0,A.jsx)(`p`,{children:t})]})}function oi({title:e}){return(0,A.jsxs)(`main`,{className:`app-shell`,children:[(0,A.jsx)(Qr,{gameId:Wr}),(0,A.jsx)(ai,{title:e,body:`回到攻略列表继续浏览已有内容。`}),(0,A.jsx)(In,{className:`primary-link`,to:`/games/${Wr}`,children:`打开攻略库`})]})}function si(e,t){return Array.from(new Set(e.map(e=>e[t]).filter(Boolean))).sort((e,t)=>e.localeCompare(t,`zh-Hans-CN`))}function ci(e){return e?[e]:[]}function li(e,t){let n=t===`equipment`?`未分类装备`:`未分类 Boss`,r=new Map;for(let i of e){let e=(t===`equipment`?i.equipmentType:i.bossType)??n;r.set(e,[...r.get(e)??[],i])}return Array.from(r.entries()).sort(([e],[t])=>e.localeCompare(t,`zh-Hans-CN`))}(0,er.createRoot)(document.getElementById(`root`)).render((0,A.jsx)(x.StrictMode,{children:(0,A.jsx)(Pn,{basename:`/-/`,children:(0,A.jsx)(Kr,{})})}));