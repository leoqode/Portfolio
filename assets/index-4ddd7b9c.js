var g1=Object.defineProperty;var v1=(t,e,n)=>e in t?g1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var xr=(t,e,n)=>(v1(t,typeof e!="symbol"?e+"":e,n),n);function _1(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function y1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var vg={exports:{}},oc={},_g={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ca=Symbol.for("react.element"),x1=Symbol.for("react.portal"),S1=Symbol.for("react.fragment"),E1=Symbol.for("react.strict_mode"),M1=Symbol.for("react.profiler"),w1=Symbol.for("react.provider"),T1=Symbol.for("react.context"),A1=Symbol.for("react.forward_ref"),R1=Symbol.for("react.suspense"),C1=Symbol.for("react.memo"),b1=Symbol.for("react.lazy"),up=Symbol.iterator;function P1(t){return t===null||typeof t!="object"?null:(t=up&&t[up]||t["@@iterator"],typeof t=="function"?t:null)}var yg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xg=Object.assign,Sg={};function Qs(t,e,n){this.props=t,this.context=e,this.refs=Sg,this.updater=n||yg}Qs.prototype.isReactComponent={};Qs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Eg(){}Eg.prototype=Qs.prototype;function Fd(t,e,n){this.props=t,this.context=e,this.refs=Sg,this.updater=n||yg}var kd=Fd.prototype=new Eg;kd.constructor=Fd;xg(kd,Qs.prototype);kd.isPureReactComponent=!0;var fp=Array.isArray,Mg=Object.prototype.hasOwnProperty,zd={current:null},wg={key:!0,ref:!0,__self:!0,__source:!0};function Tg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Mg.call(e,i)&&!wg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ca,type:t,key:s,ref:o,props:r,_owner:zd.current}}function L1(t,e){return{$$typeof:ca,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Bd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ca}function D1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var dp=/\/+/g;function su(t,e){return typeof t=="object"&&t!==null&&t.key!=null?D1(""+t.key):e.toString(36)}function ll(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ca:case x1:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+su(o,0):i,fp(r)?(n="",t!=null&&(n=t.replace(dp,"$&/")+"/"),ll(r,e,n,"",function(c){return c})):r!=null&&(Bd(r)&&(r=L1(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(dp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",fp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+su(s,a);o+=ll(s,e,n,l,r)}else if(l=P1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+su(s,a++),o+=ll(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function xa(t,e,n){if(t==null)return t;var i=[],r=0;return ll(t,i,"","",function(s){return e.call(n,s,r++)}),i}function U1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var rn={current:null},cl={transition:null},N1={ReactCurrentDispatcher:rn,ReactCurrentBatchConfig:cl,ReactCurrentOwner:zd};function Ag(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:xa,forEach:function(t,e,n){xa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return xa(t,function(){e++}),e},toArray:function(t){return xa(t,function(e){return e})||[]},only:function(t){if(!Bd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Component=Qs;We.Fragment=S1;We.Profiler=M1;We.PureComponent=Fd;We.StrictMode=E1;We.Suspense=R1;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N1;We.act=Ag;We.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=xg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=zd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Mg.call(e,l)&&!wg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ca,type:t.type,key:r,ref:s,props:i,_owner:o}};We.createContext=function(t){return t={$$typeof:T1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:w1,_context:t},t.Consumer=t};We.createElement=Tg;We.createFactory=function(t){var e=Tg.bind(null,t);return e.type=t,e};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:A1,render:t}};We.isValidElement=Bd;We.lazy=function(t){return{$$typeof:b1,_payload:{_status:-1,_result:t},_init:U1}};We.memo=function(t,e){return{$$typeof:C1,type:t,compare:e===void 0?null:e}};We.startTransition=function(t){var e=cl.transition;cl.transition={};try{t()}finally{cl.transition=e}};We.unstable_act=Ag;We.useCallback=function(t,e){return rn.current.useCallback(t,e)};We.useContext=function(t){return rn.current.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t){return rn.current.useDeferredValue(t)};We.useEffect=function(t,e){return rn.current.useEffect(t,e)};We.useId=function(){return rn.current.useId()};We.useImperativeHandle=function(t,e,n){return rn.current.useImperativeHandle(t,e,n)};We.useInsertionEffect=function(t,e){return rn.current.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return rn.current.useLayoutEffect(t,e)};We.useMemo=function(t,e){return rn.current.useMemo(t,e)};We.useReducer=function(t,e,n){return rn.current.useReducer(t,e,n)};We.useRef=function(t){return rn.current.useRef(t)};We.useState=function(t){return rn.current.useState(t)};We.useSyncExternalStore=function(t,e,n){return rn.current.useSyncExternalStore(t,e,n)};We.useTransition=function(){return rn.current.useTransition()};We.version="18.3.1";_g.exports=We;var ge=_g.exports;const er=y1(ge),gf=_1({__proto__:null,default:er},[ge]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I1=ge,O1=Symbol.for("react.element"),F1=Symbol.for("react.fragment"),k1=Object.prototype.hasOwnProperty,z1=I1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,B1={key:!0,ref:!0,__self:!0,__source:!0};function Rg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)k1.call(e,i)&&!B1.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:O1,type:t,key:s,ref:o,props:r,_owner:z1.current}}oc.Fragment=F1;oc.jsx=Rg;oc.jsxs=Rg;vg.exports=oc;var Z=vg.exports,vf={},Cg={exports:{}},Tn={},bg={exports:{}},Pg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,G){var z=D.length;D.push(G);e:for(;0<z;){var ce=z-1>>>1,U=D[ce];if(0<r(U,G))D[ce]=G,D[z]=U,z=ce;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var G=D[0],z=D.pop();if(z!==G){D[0]=z;e:for(var ce=0,U=D.length,te=U>>>1;ce<te;){var Q=2*(ce+1)-1,re=D[Q],ue=Q+1,ve=D[ue];if(0>r(re,z))ue<U&&0>r(ve,re)?(D[ce]=ve,D[ue]=z,ce=ue):(D[ce]=re,D[Q]=z,ce=Q);else if(ue<U&&0>r(ve,z))D[ce]=ve,D[ue]=z,ce=ue;else break e}}return G}function r(D,G){var z=D.sortIndex-G.sortIndex;return z!==0?z:D.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,h=3,m=!1,y=!1,_=!1,p=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var G=n(c);G!==null;){if(G.callback===null)i(c);else if(G.startTime<=D)i(c),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(c)}}function x(D){if(_=!1,g(D),!y)if(n(l)!==null)y=!0,ee(S);else{var G=n(c);G!==null&&$(x,G.startTime-D)}}function S(D,G){y=!1,_&&(_=!1,f(P),P=-1),m=!0;var z=h;try{for(g(G),d=n(l);d!==null&&(!(d.expirationTime>G)||D&&!X());){var ce=d.callback;if(typeof ce=="function"){d.callback=null,h=d.priorityLevel;var U=ce(d.expirationTime<=G);G=t.unstable_now(),typeof U=="function"?d.callback=U:d===n(l)&&i(l),g(G)}else i(l);d=n(l)}if(d!==null)var te=!0;else{var Q=n(c);Q!==null&&$(x,Q.startTime-G),te=!1}return te}finally{d=null,h=z,m=!1}}var T=!1,A=null,P=-1,E=5,R=-1;function X(){return!(t.unstable_now()-R<E)}function ne(){if(A!==null){var D=t.unstable_now();R=D;var G=!0;try{G=A(!0,D)}finally{G?F():(T=!1,A=null)}}else T=!1}var F;if(typeof v=="function")F=function(){v(ne)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,H=B.port2;B.port1.onmessage=ne,F=function(){H.postMessage(null)}}else F=function(){p(ne,0)};function ee(D){A=D,T||(T=!0,F())}function $(D,G){P=p(function(){D(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,ee(S))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var G=3;break;default:G=h}var z=h;h=G;try{return D()}finally{h=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,G){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var z=h;h=D;try{return G()}finally{h=z}},t.unstable_scheduleCallback=function(D,G,z){var ce=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?ce+z:ce):z=ce,D){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=z+U,D={id:u++,callback:G,priorityLevel:D,startTime:z,expirationTime:U,sortIndex:-1},z>ce?(D.sortIndex=z,e(c,D),n(l)===null&&D===n(c)&&(_?(f(P),P=-1):_=!0,$(x,z-ce))):(D.sortIndex=U,e(l,D),y||m||(y=!0,ee(S))),D},t.unstable_shouldYield=X,t.unstable_wrapCallback=function(D){var G=h;return function(){var z=h;h=G;try{return D.apply(this,arguments)}finally{h=z}}}})(Pg);bg.exports=Pg;var H1=bg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V1=ge,wn=H1;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Lg=new Set,ko={};function qr(t,e){Bs(t,e),Bs(t+"Capture",e)}function Bs(t,e){for(ko[t]=e,t=0;t<e.length;t++)Lg.add(e[t])}var Li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_f=Object.prototype.hasOwnProperty,G1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hp={},pp={};function W1(t){return _f.call(pp,t)?!0:_f.call(hp,t)?!1:G1.test(t)?pp[t]=!0:(hp[t]=!0,!1)}function j1(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function X1(t,e,n,i){if(e===null||typeof e>"u"||j1(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function sn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ht[t]=new sn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ht[e]=new sn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ht[t]=new sn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ht[t]=new sn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ht[t]=new sn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ht[t]=new sn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ht[t]=new sn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ht[t]=new sn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ht[t]=new sn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Hd=/[\-:]([a-z])/g;function Vd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Hd,Vd);Ht[e]=new sn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Hd,Vd);Ht[e]=new sn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Hd,Vd);Ht[e]=new sn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ht[t]=new sn(t,1,!1,t.toLowerCase(),null,!1,!1)});Ht.xlinkHref=new sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ht[t]=new sn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Gd(t,e,n,i){var r=Ht.hasOwnProperty(e)?Ht[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(X1(e,n,r,i)&&(n=null),i||r===null?W1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Oi=V1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sa=Symbol.for("react.element"),_s=Symbol.for("react.portal"),ys=Symbol.for("react.fragment"),Wd=Symbol.for("react.strict_mode"),yf=Symbol.for("react.profiler"),Dg=Symbol.for("react.provider"),Ug=Symbol.for("react.context"),jd=Symbol.for("react.forward_ref"),xf=Symbol.for("react.suspense"),Sf=Symbol.for("react.suspense_list"),Xd=Symbol.for("react.memo"),Xi=Symbol.for("react.lazy"),Ng=Symbol.for("react.offscreen"),mp=Symbol.iterator;function oo(t){return t===null||typeof t!="object"?null:(t=mp&&t[mp]||t["@@iterator"],typeof t=="function"?t:null)}var ft=Object.assign,ou;function So(t){if(ou===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ou=e&&e[1]||""}return`
`+ou+t}var au=!1;function lu(t,e){if(!t||au)return"";au=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{au=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?So(t):""}function $1(t){switch(t.tag){case 5:return So(t.type);case 16:return So("Lazy");case 13:return So("Suspense");case 19:return So("SuspenseList");case 0:case 2:case 15:return t=lu(t.type,!1),t;case 11:return t=lu(t.type.render,!1),t;case 1:return t=lu(t.type,!0),t;default:return""}}function Ef(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ys:return"Fragment";case _s:return"Portal";case yf:return"Profiler";case Wd:return"StrictMode";case xf:return"Suspense";case Sf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ug:return(t.displayName||"Context")+".Consumer";case Dg:return(t._context.displayName||"Context")+".Provider";case jd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xd:return e=t.displayName||null,e!==null?e:Ef(t.type)||"Memo";case Xi:e=t._payload,t=t._init;try{return Ef(t(e))}catch{}}return null}function Y1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ef(e);case 8:return e===Wd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function fr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ig(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function q1(t){var e=Ig(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ea(t){t._valueTracker||(t._valueTracker=q1(t))}function Og(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Ig(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Rl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Mf(t,e){var n=e.checked;return ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function gp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=fr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Fg(t,e){e=e.checked,e!=null&&Gd(t,"checked",e,!1)}function wf(t,e){Fg(t,e);var n=fr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Tf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Tf(t,e.type,fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Tf(t,e,n){(e!=="number"||Rl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Eo=Array.isArray;function Ls(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+fr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Af(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return ft({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function _p(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(Eo(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:fr(n)}}function kg(t,e){var n=fr(e.value),i=fr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function yp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function zg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?zg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ma,Bg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ma=Ma||document.createElement("div"),Ma.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ma.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function zo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},K1=["Webkit","ms","Moz","O"];Object.keys(Ro).forEach(function(t){K1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ro[e]=Ro[t]})});function Hg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ro.hasOwnProperty(t)&&Ro[t]?(""+e).trim():e+"px"}function Vg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Hg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Z1=ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cf(t,e){if(e){if(Z1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function bf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pf=null;function $d(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Lf=null,Ds=null,Us=null;function xp(t){if(t=da(t)){if(typeof Lf!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=fc(e),Lf(t.stateNode,t.type,e))}}function Gg(t){Ds?Us?Us.push(t):Us=[t]:Ds=t}function Wg(){if(Ds){var t=Ds,e=Us;if(Us=Ds=null,xp(t),e)for(t=0;t<e.length;t++)xp(e[t])}}function jg(t,e){return t(e)}function Xg(){}var cu=!1;function $g(t,e,n){if(cu)return t(e,n);cu=!0;try{return jg(t,e,n)}finally{cu=!1,(Ds!==null||Us!==null)&&(Xg(),Wg())}}function Bo(t,e){var n=t.stateNode;if(n===null)return null;var i=fc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var Df=!1;if(Li)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){Df=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{Df=!1}function Q1(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Co=!1,Cl=null,bl=!1,Uf=null,J1={onError:function(t){Co=!0,Cl=t}};function ex(t,e,n,i,r,s,o,a,l){Co=!1,Cl=null,Q1.apply(J1,arguments)}function tx(t,e,n,i,r,s,o,a,l){if(ex.apply(this,arguments),Co){if(Co){var c=Cl;Co=!1,Cl=null}else throw Error(ie(198));bl||(bl=!0,Uf=c)}}function Kr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Yg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Sp(t){if(Kr(t)!==t)throw Error(ie(188))}function nx(t){var e=t.alternate;if(!e){if(e=Kr(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Sp(r),t;if(s===i)return Sp(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function qg(t){return t=nx(t),t!==null?Kg(t):null}function Kg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Kg(t);if(e!==null)return e;t=t.sibling}return null}var Zg=wn.unstable_scheduleCallback,Ep=wn.unstable_cancelCallback,ix=wn.unstable_shouldYield,rx=wn.unstable_requestPaint,gt=wn.unstable_now,sx=wn.unstable_getCurrentPriorityLevel,Yd=wn.unstable_ImmediatePriority,Qg=wn.unstable_UserBlockingPriority,Pl=wn.unstable_NormalPriority,ox=wn.unstable_LowPriority,Jg=wn.unstable_IdlePriority,ac=null,fi=null;function ax(t){if(fi&&typeof fi.onCommitFiberRoot=="function")try{fi.onCommitFiberRoot(ac,t,void 0,(t.current.flags&128)===128)}catch{}}var Zn=Math.clz32?Math.clz32:ux,lx=Math.log,cx=Math.LN2;function ux(t){return t>>>=0,t===0?32:31-(lx(t)/cx|0)|0}var wa=64,Ta=4194304;function Mo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ll(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Mo(a):(s&=o,s!==0&&(i=Mo(s)))}else o=n&~r,o!==0?i=Mo(o):s!==0&&(i=Mo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Zn(e),r=1<<n,i|=t[n],e&=~r;return i}function fx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Zn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=fx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Nf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ev(){var t=wa;return wa<<=1,!(wa&4194240)&&(wa=64),t}function uu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ua(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Zn(e),t[e]=n}function hx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Zn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function qd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Zn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Je=0;function tv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var nv,Kd,iv,rv,sv,If=!1,Aa=[],tr=null,nr=null,ir=null,Ho=new Map,Vo=new Map,Yi=[],px="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mp(t,e){switch(t){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":Ho.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(e.pointerId)}}function lo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=da(e),e!==null&&Kd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function mx(t,e,n,i,r){switch(e){case"focusin":return tr=lo(tr,t,e,n,i,r),!0;case"dragenter":return nr=lo(nr,t,e,n,i,r),!0;case"mouseover":return ir=lo(ir,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ho.set(s,lo(Ho.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Vo.set(s,lo(Vo.get(s)||null,t,e,n,i,r)),!0}return!1}function ov(t){var e=Pr(t.target);if(e!==null){var n=Kr(e);if(n!==null){if(e=n.tag,e===13){if(e=Yg(n),e!==null){t.blockedOn=e,sv(t.priority,function(){iv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ul(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Of(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Pf=i,n.target.dispatchEvent(i),Pf=null}else return e=da(n),e!==null&&Kd(e),t.blockedOn=n,!1;e.shift()}return!0}function wp(t,e,n){ul(t)&&n.delete(e)}function gx(){If=!1,tr!==null&&ul(tr)&&(tr=null),nr!==null&&ul(nr)&&(nr=null),ir!==null&&ul(ir)&&(ir=null),Ho.forEach(wp),Vo.forEach(wp)}function co(t,e){t.blockedOn===e&&(t.blockedOn=null,If||(If=!0,wn.unstable_scheduleCallback(wn.unstable_NormalPriority,gx)))}function Go(t){function e(r){return co(r,t)}if(0<Aa.length){co(Aa[0],t);for(var n=1;n<Aa.length;n++){var i=Aa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(tr!==null&&co(tr,t),nr!==null&&co(nr,t),ir!==null&&co(ir,t),Ho.forEach(e),Vo.forEach(e),n=0;n<Yi.length;n++)i=Yi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Yi.length&&(n=Yi[0],n.blockedOn===null);)ov(n),n.blockedOn===null&&Yi.shift()}var Ns=Oi.ReactCurrentBatchConfig,Dl=!0;function vx(t,e,n,i){var r=Je,s=Ns.transition;Ns.transition=null;try{Je=1,Zd(t,e,n,i)}finally{Je=r,Ns.transition=s}}function _x(t,e,n,i){var r=Je,s=Ns.transition;Ns.transition=null;try{Je=4,Zd(t,e,n,i)}finally{Je=r,Ns.transition=s}}function Zd(t,e,n,i){if(Dl){var r=Of(t,e,n,i);if(r===null)xu(t,e,i,Ul,n),Mp(t,i);else if(mx(r,t,e,n,i))i.stopPropagation();else if(Mp(t,i),e&4&&-1<px.indexOf(t)){for(;r!==null;){var s=da(r);if(s!==null&&nv(s),s=Of(t,e,n,i),s===null&&xu(t,e,i,Ul,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else xu(t,e,i,null,n)}}var Ul=null;function Of(t,e,n,i){if(Ul=null,t=$d(i),t=Pr(t),t!==null)if(e=Kr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Yg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ul=t,null}function av(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sx()){case Yd:return 1;case Qg:return 4;case Pl:case ox:return 16;case Jg:return 536870912;default:return 16}default:return 16}}var Ki=null,Qd=null,fl=null;function lv(){if(fl)return fl;var t,e=Qd,n=e.length,i,r="value"in Ki?Ki.value:Ki.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return fl=r.slice(t,1<i?1-i:void 0)}function dl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ra(){return!0}function Tp(){return!1}function An(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ra:Tp,this.isPropagationStopped=Tp,this}return ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ra)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ra)},persist:function(){},isPersistent:Ra}),e}var Js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jd=An(Js),fa=ft({},Js,{view:0,detail:0}),yx=An(fa),fu,du,uo,lc=ft({},fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==uo&&(uo&&t.type==="mousemove"?(fu=t.screenX-uo.screenX,du=t.screenY-uo.screenY):du=fu=0,uo=t),fu)},movementY:function(t){return"movementY"in t?t.movementY:du}}),Ap=An(lc),xx=ft({},lc,{dataTransfer:0}),Sx=An(xx),Ex=ft({},fa,{relatedTarget:0}),hu=An(Ex),Mx=ft({},Js,{animationName:0,elapsedTime:0,pseudoElement:0}),wx=An(Mx),Tx=ft({},Js,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ax=An(Tx),Rx=ft({},Js,{data:0}),Rp=An(Rx),Cx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Px={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Px[t])?!!e[t]:!1}function eh(){return Lx}var Dx=ft({},fa,{key:function(t){if(t.key){var e=Cx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eh,charCode:function(t){return t.type==="keypress"?dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ux=An(Dx),Nx=ft({},lc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cp=An(Nx),Ix=ft({},fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eh}),Ox=An(Ix),Fx=ft({},Js,{propertyName:0,elapsedTime:0,pseudoElement:0}),kx=An(Fx),zx=ft({},lc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Bx=An(zx),Hx=[9,13,27,32],th=Li&&"CompositionEvent"in window,bo=null;Li&&"documentMode"in document&&(bo=document.documentMode);var Vx=Li&&"TextEvent"in window&&!bo,cv=Li&&(!th||bo&&8<bo&&11>=bo),bp=String.fromCharCode(32),Pp=!1;function uv(t,e){switch(t){case"keyup":return Hx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xs=!1;function Gx(t,e){switch(t){case"compositionend":return fv(e);case"keypress":return e.which!==32?null:(Pp=!0,bp);case"textInput":return t=e.data,t===bp&&Pp?null:t;default:return null}}function Wx(t,e){if(xs)return t==="compositionend"||!th&&uv(t,e)?(t=lv(),fl=Qd=Ki=null,xs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return cv&&e.locale!=="ko"?null:e.data;default:return null}}var jx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!jx[t.type]:e==="textarea"}function dv(t,e,n,i){Gg(i),e=Nl(e,"onChange"),0<e.length&&(n=new Jd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Po=null,Wo=null;function Xx(t){Mv(t,0)}function cc(t){var e=Ms(t);if(Og(e))return t}function $x(t,e){if(t==="change")return e}var hv=!1;if(Li){var pu;if(Li){var mu="oninput"in document;if(!mu){var Dp=document.createElement("div");Dp.setAttribute("oninput","return;"),mu=typeof Dp.oninput=="function"}pu=mu}else pu=!1;hv=pu&&(!document.documentMode||9<document.documentMode)}function Up(){Po&&(Po.detachEvent("onpropertychange",pv),Wo=Po=null)}function pv(t){if(t.propertyName==="value"&&cc(Wo)){var e=[];dv(e,Wo,t,$d(t)),$g(Xx,e)}}function Yx(t,e,n){t==="focusin"?(Up(),Po=e,Wo=n,Po.attachEvent("onpropertychange",pv)):t==="focusout"&&Up()}function qx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cc(Wo)}function Kx(t,e){if(t==="click")return cc(e)}function Zx(t,e){if(t==="input"||t==="change")return cc(e)}function Qx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ti=typeof Object.is=="function"?Object.is:Qx;function jo(t,e){if(ti(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!_f.call(e,r)||!ti(t[r],e[r]))return!1}return!0}function Np(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ip(t,e){var n=Np(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Np(n)}}function mv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?mv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function gv(){for(var t=window,e=Rl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Rl(t.document)}return e}function nh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Jx(t){var e=gv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&mv(n.ownerDocument.documentElement,n)){if(i!==null&&nh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Ip(n,s);var o=Ip(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var eS=Li&&"documentMode"in document&&11>=document.documentMode,Ss=null,Ff=null,Lo=null,kf=!1;function Op(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;kf||Ss==null||Ss!==Rl(i)||(i=Ss,"selectionStart"in i&&nh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Lo&&jo(Lo,i)||(Lo=i,i=Nl(Ff,"onSelect"),0<i.length&&(e=new Jd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ss)))}function Ca(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Es={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionend:Ca("Transition","TransitionEnd")},gu={},vv={};Li&&(vv=document.createElement("div").style,"AnimationEvent"in window||(delete Es.animationend.animation,delete Es.animationiteration.animation,delete Es.animationstart.animation),"TransitionEvent"in window||delete Es.transitionend.transition);function uc(t){if(gu[t])return gu[t];if(!Es[t])return t;var e=Es[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in vv)return gu[t]=e[n];return t}var _v=uc("animationend"),yv=uc("animationiteration"),xv=uc("animationstart"),Sv=uc("transitionend"),Ev=new Map,Fp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(t,e){Ev.set(t,e),qr(e,[t])}for(var vu=0;vu<Fp.length;vu++){var _u=Fp[vu],tS=_u.toLowerCase(),nS=_u[0].toUpperCase()+_u.slice(1);pr(tS,"on"+nS)}pr(_v,"onAnimationEnd");pr(yv,"onAnimationIteration");pr(xv,"onAnimationStart");pr("dblclick","onDoubleClick");pr("focusin","onFocus");pr("focusout","onBlur");pr(Sv,"onTransitionEnd");Bs("onMouseEnter",["mouseout","mouseover"]);Bs("onMouseLeave",["mouseout","mouseover"]);Bs("onPointerEnter",["pointerout","pointerover"]);Bs("onPointerLeave",["pointerout","pointerover"]);qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iS=new Set("cancel close invalid load scroll toggle".split(" ").concat(wo));function kp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,tx(i,e,void 0,t),t.currentTarget=null}function Mv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;kp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;kp(r,a,c),s=l}}}if(bl)throw t=Uf,bl=!1,Uf=null,t}function ot(t,e){var n=e[Gf];n===void 0&&(n=e[Gf]=new Set);var i=t+"__bubble";n.has(i)||(wv(e,t,2,!1),n.add(i))}function yu(t,e,n){var i=0;e&&(i|=4),wv(n,t,i,e)}var ba="_reactListening"+Math.random().toString(36).slice(2);function Xo(t){if(!t[ba]){t[ba]=!0,Lg.forEach(function(n){n!=="selectionchange"&&(iS.has(n)||yu(n,!1,t),yu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ba]||(e[ba]=!0,yu("selectionchange",!1,e))}}function wv(t,e,n,i){switch(av(e)){case 1:var r=vx;break;case 4:r=_x;break;default:r=Zd}n=r.bind(null,e,n,t),r=void 0,!Df||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function xu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Pr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}$g(function(){var c=s,u=$d(n),d=[];e:{var h=Ev.get(t);if(h!==void 0){var m=Jd,y=t;switch(t){case"keypress":if(dl(n)===0)break e;case"keydown":case"keyup":m=Ux;break;case"focusin":y="focus",m=hu;break;case"focusout":y="blur",m=hu;break;case"beforeblur":case"afterblur":m=hu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Sx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Ox;break;case _v:case yv:case xv:m=wx;break;case Sv:m=kx;break;case"scroll":m=yx;break;case"wheel":m=Bx;break;case"copy":case"cut":case"paste":m=Ax;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Cp}var _=(e&4)!==0,p=!_&&t==="scroll",f=_?h!==null?h+"Capture":null:h;_=[];for(var v=c,g;v!==null;){g=v;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,f!==null&&(x=Bo(v,f),x!=null&&_.push($o(v,x,g)))),p)break;v=v.return}0<_.length&&(h=new m(h,y,null,n,u),d.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==Pf&&(y=n.relatedTarget||n.fromElement)&&(Pr(y)||y[Di]))break e;if((m||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=c,y=y?Pr(y):null,y!==null&&(p=Kr(y),y!==p||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=c),m!==y)){if(_=Ap,x="onMouseLeave",f="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(_=Cp,x="onPointerLeave",f="onPointerEnter",v="pointer"),p=m==null?h:Ms(m),g=y==null?h:Ms(y),h=new _(x,v+"leave",m,n,u),h.target=p,h.relatedTarget=g,x=null,Pr(u)===c&&(_=new _(f,v+"enter",y,n,u),_.target=g,_.relatedTarget=p,x=_),p=x,m&&y)t:{for(_=m,f=y,v=0,g=_;g;g=Qr(g))v++;for(g=0,x=f;x;x=Qr(x))g++;for(;0<v-g;)_=Qr(_),v--;for(;0<g-v;)f=Qr(f),g--;for(;v--;){if(_===f||f!==null&&_===f.alternate)break t;_=Qr(_),f=Qr(f)}_=null}else _=null;m!==null&&zp(d,h,m,_,!1),y!==null&&p!==null&&zp(d,p,y,_,!0)}}e:{if(h=c?Ms(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var S=$x;else if(Lp(h))if(hv)S=Zx;else{S=qx;var T=Yx}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=Kx);if(S&&(S=S(t,c))){dv(d,S,n,u);break e}T&&T(t,h,c),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&Tf(h,"number",h.value)}switch(T=c?Ms(c):window,t){case"focusin":(Lp(T)||T.contentEditable==="true")&&(Ss=T,Ff=c,Lo=null);break;case"focusout":Lo=Ff=Ss=null;break;case"mousedown":kf=!0;break;case"contextmenu":case"mouseup":case"dragend":kf=!1,Op(d,n,u);break;case"selectionchange":if(eS)break;case"keydown":case"keyup":Op(d,n,u)}var A;if(th)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else xs?uv(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(cv&&n.locale!=="ko"&&(xs||P!=="onCompositionStart"?P==="onCompositionEnd"&&xs&&(A=lv()):(Ki=u,Qd="value"in Ki?Ki.value:Ki.textContent,xs=!0)),T=Nl(c,P),0<T.length&&(P=new Rp(P,t,null,n,u),d.push({event:P,listeners:T}),A?P.data=A:(A=fv(n),A!==null&&(P.data=A)))),(A=Vx?Gx(t,n):Wx(t,n))&&(c=Nl(c,"onBeforeInput"),0<c.length&&(u=new Rp("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=A))}Mv(d,e)})}function $o(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Nl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Bo(t,n),s!=null&&i.unshift($o(t,s,r)),s=Bo(t,e),s!=null&&i.push($o(t,s,r))),t=t.return}return i}function Qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Bo(n,s),l!=null&&o.unshift($o(n,l,a))):r||(l=Bo(n,s),l!=null&&o.push($o(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var rS=/\r\n?/g,sS=/\u0000|\uFFFD/g;function Bp(t){return(typeof t=="string"?t:""+t).replace(rS,`
`).replace(sS,"")}function Pa(t,e,n){if(e=Bp(e),Bp(t)!==e&&n)throw Error(ie(425))}function Il(){}var zf=null,Bf=null;function Hf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Vf=typeof setTimeout=="function"?setTimeout:void 0,oS=typeof clearTimeout=="function"?clearTimeout:void 0,Hp=typeof Promise=="function"?Promise:void 0,aS=typeof queueMicrotask=="function"?queueMicrotask:typeof Hp<"u"?function(t){return Hp.resolve(null).then(t).catch(lS)}:Vf;function lS(t){setTimeout(function(){throw t})}function Su(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Go(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Go(e)}function rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Vp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var eo=Math.random().toString(36).slice(2),ci="__reactFiber$"+eo,Yo="__reactProps$"+eo,Di="__reactContainer$"+eo,Gf="__reactEvents$"+eo,cS="__reactListeners$"+eo,uS="__reactHandles$"+eo;function Pr(t){var e=t[ci];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Di]||n[ci]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Vp(t);t!==null;){if(n=t[ci])return n;t=Vp(t)}return e}t=n,n=t.parentNode}return null}function da(t){return t=t[ci]||t[Di],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ms(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function fc(t){return t[Yo]||null}var Wf=[],ws=-1;function mr(t){return{current:t}}function at(t){0>ws||(t.current=Wf[ws],Wf[ws]=null,ws--)}function rt(t,e){ws++,Wf[ws]=t.current,t.current=e}var dr={},qt=mr(dr),ln=mr(!1),Br=dr;function Hs(t,e){var n=t.type.contextTypes;if(!n)return dr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function cn(t){return t=t.childContextTypes,t!=null}function Ol(){at(ln),at(qt)}function Gp(t,e,n){if(qt.current!==dr)throw Error(ie(168));rt(qt,e),rt(ln,n)}function Tv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,Y1(t)||"Unknown",r));return ft({},n,i)}function Fl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||dr,Br=qt.current,rt(qt,t),rt(ln,ln.current),!0}function Wp(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=Tv(t,e,Br),i.__reactInternalMemoizedMergedChildContext=t,at(ln),at(qt),rt(qt,t)):at(ln),rt(ln,n)}var Ti=null,dc=!1,Eu=!1;function Av(t){Ti===null?Ti=[t]:Ti.push(t)}function fS(t){dc=!0,Av(t)}function gr(){if(!Eu&&Ti!==null){Eu=!0;var t=0,e=Je;try{var n=Ti;for(Je=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ti=null,dc=!1}catch(r){throw Ti!==null&&(Ti=Ti.slice(t+1)),Zg(Yd,gr),r}finally{Je=e,Eu=!1}}return null}var Ts=[],As=0,kl=null,zl=0,bn=[],Pn=0,Hr=null,Ai=1,Ri="";function Tr(t,e){Ts[As++]=zl,Ts[As++]=kl,kl=t,zl=e}function Rv(t,e,n){bn[Pn++]=Ai,bn[Pn++]=Ri,bn[Pn++]=Hr,Hr=t;var i=Ai;t=Ri;var r=32-Zn(i)-1;i&=~(1<<r),n+=1;var s=32-Zn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ai=1<<32-Zn(e)+r|n<<r|i,Ri=s+t}else Ai=1<<s|n<<r|i,Ri=t}function ih(t){t.return!==null&&(Tr(t,1),Rv(t,1,0))}function rh(t){for(;t===kl;)kl=Ts[--As],Ts[As]=null,zl=Ts[--As],Ts[As]=null;for(;t===Hr;)Hr=bn[--Pn],bn[Pn]=null,Ri=bn[--Pn],bn[Pn]=null,Ai=bn[--Pn],bn[Pn]=null}var Sn=null,xn=null,lt=!1,$n=null;function Cv(t,e){var n=Un(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function jp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Sn=t,xn=rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Sn=t,xn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hr!==null?{id:Ai,overflow:Ri}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Un(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Sn=t,xn=null,!0):!1;default:return!1}}function jf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Xf(t){if(lt){var e=xn;if(e){var n=e;if(!jp(t,e)){if(jf(t))throw Error(ie(418));e=rr(n.nextSibling);var i=Sn;e&&jp(t,e)?Cv(i,n):(t.flags=t.flags&-4097|2,lt=!1,Sn=t)}}else{if(jf(t))throw Error(ie(418));t.flags=t.flags&-4097|2,lt=!1,Sn=t}}}function Xp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Sn=t}function La(t){if(t!==Sn)return!1;if(!lt)return Xp(t),lt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hf(t.type,t.memoizedProps)),e&&(e=xn)){if(jf(t))throw bv(),Error(ie(418));for(;e;)Cv(t,e),e=rr(e.nextSibling)}if(Xp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xn=rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xn=null}}else xn=Sn?rr(t.stateNode.nextSibling):null;return!0}function bv(){for(var t=xn;t;)t=rr(t.nextSibling)}function Vs(){xn=Sn=null,lt=!1}function sh(t){$n===null?$n=[t]:$n.push(t)}var dS=Oi.ReactCurrentBatchConfig;function fo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function Da(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $p(t){var e=t._init;return e(t._payload)}function Pv(t){function e(f,v){if(t){var g=f.deletions;g===null?(f.deletions=[v],f.flags|=16):g.push(v)}}function n(f,v){if(!t)return null;for(;v!==null;)e(f,v),v=v.sibling;return null}function i(f,v){for(f=new Map;v!==null;)v.key!==null?f.set(v.key,v):f.set(v.index,v),v=v.sibling;return f}function r(f,v){return f=lr(f,v),f.index=0,f.sibling=null,f}function s(f,v,g){return f.index=g,t?(g=f.alternate,g!==null?(g=g.index,g<v?(f.flags|=2,v):g):(f.flags|=2,v)):(f.flags|=1048576,v)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,v,g,x){return v===null||v.tag!==6?(v=bu(g,f.mode,x),v.return=f,v):(v=r(v,g),v.return=f,v)}function l(f,v,g,x){var S=g.type;return S===ys?u(f,v,g.props.children,x,g.key):v!==null&&(v.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Xi&&$p(S)===v.type)?(x=r(v,g.props),x.ref=fo(f,v,g),x.return=f,x):(x=yl(g.type,g.key,g.props,null,f.mode,x),x.ref=fo(f,v,g),x.return=f,x)}function c(f,v,g,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=Pu(g,f.mode,x),v.return=f,v):(v=r(v,g.children||[]),v.return=f,v)}function u(f,v,g,x,S){return v===null||v.tag!==7?(v=Ir(g,f.mode,x,S),v.return=f,v):(v=r(v,g),v.return=f,v)}function d(f,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=bu(""+v,f.mode,g),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Sa:return g=yl(v.type,v.key,v.props,null,f.mode,g),g.ref=fo(f,null,v),g.return=f,g;case _s:return v=Pu(v,f.mode,g),v.return=f,v;case Xi:var x=v._init;return d(f,x(v._payload),g)}if(Eo(v)||oo(v))return v=Ir(v,f.mode,g,null),v.return=f,v;Da(f,v)}return null}function h(f,v,g,x){var S=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:a(f,v,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Sa:return g.key===S?l(f,v,g,x):null;case _s:return g.key===S?c(f,v,g,x):null;case Xi:return S=g._init,h(f,v,S(g._payload),x)}if(Eo(g)||oo(g))return S!==null?null:u(f,v,g,x,null);Da(f,g)}return null}function m(f,v,g,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(g)||null,a(v,f,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Sa:return f=f.get(x.key===null?g:x.key)||null,l(v,f,x,S);case _s:return f=f.get(x.key===null?g:x.key)||null,c(v,f,x,S);case Xi:var T=x._init;return m(f,v,g,T(x._payload),S)}if(Eo(x)||oo(x))return f=f.get(g)||null,u(v,f,x,S,null);Da(v,x)}return null}function y(f,v,g,x){for(var S=null,T=null,A=v,P=v=0,E=null;A!==null&&P<g.length;P++){A.index>P?(E=A,A=null):E=A.sibling;var R=h(f,A,g[P],x);if(R===null){A===null&&(A=E);break}t&&A&&R.alternate===null&&e(f,A),v=s(R,v,P),T===null?S=R:T.sibling=R,T=R,A=E}if(P===g.length)return n(f,A),lt&&Tr(f,P),S;if(A===null){for(;P<g.length;P++)A=d(f,g[P],x),A!==null&&(v=s(A,v,P),T===null?S=A:T.sibling=A,T=A);return lt&&Tr(f,P),S}for(A=i(f,A);P<g.length;P++)E=m(A,f,P,g[P],x),E!==null&&(t&&E.alternate!==null&&A.delete(E.key===null?P:E.key),v=s(E,v,P),T===null?S=E:T.sibling=E,T=E);return t&&A.forEach(function(X){return e(f,X)}),lt&&Tr(f,P),S}function _(f,v,g,x){var S=oo(g);if(typeof S!="function")throw Error(ie(150));if(g=S.call(g),g==null)throw Error(ie(151));for(var T=S=null,A=v,P=v=0,E=null,R=g.next();A!==null&&!R.done;P++,R=g.next()){A.index>P?(E=A,A=null):E=A.sibling;var X=h(f,A,R.value,x);if(X===null){A===null&&(A=E);break}t&&A&&X.alternate===null&&e(f,A),v=s(X,v,P),T===null?S=X:T.sibling=X,T=X,A=E}if(R.done)return n(f,A),lt&&Tr(f,P),S;if(A===null){for(;!R.done;P++,R=g.next())R=d(f,R.value,x),R!==null&&(v=s(R,v,P),T===null?S=R:T.sibling=R,T=R);return lt&&Tr(f,P),S}for(A=i(f,A);!R.done;P++,R=g.next())R=m(A,f,P,R.value,x),R!==null&&(t&&R.alternate!==null&&A.delete(R.key===null?P:R.key),v=s(R,v,P),T===null?S=R:T.sibling=R,T=R);return t&&A.forEach(function(ne){return e(f,ne)}),lt&&Tr(f,P),S}function p(f,v,g,x){if(typeof g=="object"&&g!==null&&g.type===ys&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Sa:e:{for(var S=g.key,T=v;T!==null;){if(T.key===S){if(S=g.type,S===ys){if(T.tag===7){n(f,T.sibling),v=r(T,g.props.children),v.return=f,f=v;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Xi&&$p(S)===T.type){n(f,T.sibling),v=r(T,g.props),v.ref=fo(f,T,g),v.return=f,f=v;break e}n(f,T);break}else e(f,T);T=T.sibling}g.type===ys?(v=Ir(g.props.children,f.mode,x,g.key),v.return=f,f=v):(x=yl(g.type,g.key,g.props,null,f.mode,x),x.ref=fo(f,v,g),x.return=f,f=x)}return o(f);case _s:e:{for(T=g.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(f,v.sibling),v=r(v,g.children||[]),v.return=f,f=v;break e}else{n(f,v);break}else e(f,v);v=v.sibling}v=Pu(g,f.mode,x),v.return=f,f=v}return o(f);case Xi:return T=g._init,p(f,v,T(g._payload),x)}if(Eo(g))return y(f,v,g,x);if(oo(g))return _(f,v,g,x);Da(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(f,v.sibling),v=r(v,g),v.return=f,f=v):(n(f,v),v=bu(g,f.mode,x),v.return=f,f=v),o(f)):n(f,v)}return p}var Gs=Pv(!0),Lv=Pv(!1),Bl=mr(null),Hl=null,Rs=null,oh=null;function ah(){oh=Rs=Hl=null}function lh(t){var e=Bl.current;at(Bl),t._currentValue=e}function $f(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Is(t,e){Hl=t,oh=Rs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(an=!0),t.firstContext=null)}function On(t){var e=t._currentValue;if(oh!==t)if(t={context:t,memoizedValue:e,next:null},Rs===null){if(Hl===null)throw Error(ie(308));Rs=t,Hl.dependencies={lanes:0,firstContext:t}}else Rs=Rs.next=t;return e}var Lr=null;function ch(t){Lr===null?Lr=[t]:Lr.push(t)}function Dv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,ch(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ui(t,i)}function Ui(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var $i=!1;function uh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Uv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function sr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ui(t,n)}return r=i.interleaved,r===null?(e.next=e,ch(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ui(t,n)}function hl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,qd(t,n)}}function Yp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Vl(t,e,n,i){var r=t.updateQueue;$i=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,_=a;switch(h=e,m=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){d=y.call(m,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,h=typeof y=="function"?y.call(m,d,h):y,h==null)break e;d=ft({},d,h);break e;case 2:$i=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=m,l=d):u=u.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Gr|=o,t.lanes=o,t.memoizedState=d}}function qp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var ha={},di=mr(ha),qo=mr(ha),Ko=mr(ha);function Dr(t){if(t===ha)throw Error(ie(174));return t}function fh(t,e){switch(rt(Ko,e),rt(qo,t),rt(di,ha),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Rf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Rf(e,t)}at(di),rt(di,e)}function Ws(){at(di),at(qo),at(Ko)}function Nv(t){Dr(Ko.current);var e=Dr(di.current),n=Rf(e,t.type);e!==n&&(rt(qo,t),rt(di,n))}function dh(t){qo.current===t&&(at(di),at(qo))}var ct=mr(0);function Gl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Mu=[];function hh(){for(var t=0;t<Mu.length;t++)Mu[t]._workInProgressVersionPrimary=null;Mu.length=0}var pl=Oi.ReactCurrentDispatcher,wu=Oi.ReactCurrentBatchConfig,Vr=0,ut=null,Tt=null,Nt=null,Wl=!1,Do=!1,Zo=0,hS=0;function Vt(){throw Error(ie(321))}function ph(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ti(t[n],e[n]))return!1;return!0}function mh(t,e,n,i,r,s){if(Vr=s,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pl.current=t===null||t.memoizedState===null?vS:_S,t=n(i,r),Do){s=0;do{if(Do=!1,Zo=0,25<=s)throw Error(ie(301));s+=1,Nt=Tt=null,e.updateQueue=null,pl.current=yS,t=n(i,r)}while(Do)}if(pl.current=jl,e=Tt!==null&&Tt.next!==null,Vr=0,Nt=Tt=ut=null,Wl=!1,e)throw Error(ie(300));return t}function gh(){var t=Zo!==0;return Zo=0,t}function si(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?ut.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function Fn(){if(Tt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=Tt.next;var e=Nt===null?ut.memoizedState:Nt.next;if(e!==null)Nt=e,Tt=t;else{if(t===null)throw Error(ie(310));Tt=t,t={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Nt===null?ut.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function Qo(t,e){return typeof e=="function"?e(t):e}function Tu(t){var e=Fn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=Tt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Vr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,ut.lanes|=u,Gr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ti(i,e.memoizedState)||(an=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ut.lanes|=s,Gr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Au(t){var e=Fn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ti(s,e.memoizedState)||(an=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Iv(){}function Ov(t,e){var n=ut,i=Fn(),r=e(),s=!ti(i.memoizedState,r);if(s&&(i.memoizedState=r,an=!0),i=i.queue,vh(zv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Nt!==null&&Nt.memoizedState.tag&1){if(n.flags|=2048,Jo(9,kv.bind(null,n,i,r,e),void 0,null),Ot===null)throw Error(ie(349));Vr&30||Fv(n,e,r)}return r}function Fv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function kv(t,e,n,i){e.value=n,e.getSnapshot=i,Bv(e)&&Hv(t)}function zv(t,e,n){return n(function(){Bv(e)&&Hv(t)})}function Bv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ti(t,n)}catch{return!0}}function Hv(t){var e=Ui(t,1);e!==null&&Qn(e,t,1,-1)}function Kp(t){var e=si();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qo,lastRenderedState:t},e.queue=t,t=t.dispatch=gS.bind(null,ut,t),[e.memoizedState,t]}function Jo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Vv(){return Fn().memoizedState}function ml(t,e,n,i){var r=si();ut.flags|=t,r.memoizedState=Jo(1|e,n,void 0,i===void 0?null:i)}function hc(t,e,n,i){var r=Fn();i=i===void 0?null:i;var s=void 0;if(Tt!==null){var o=Tt.memoizedState;if(s=o.destroy,i!==null&&ph(i,o.deps)){r.memoizedState=Jo(e,n,s,i);return}}ut.flags|=t,r.memoizedState=Jo(1|e,n,s,i)}function Zp(t,e){return ml(8390656,8,t,e)}function vh(t,e){return hc(2048,8,t,e)}function Gv(t,e){return hc(4,2,t,e)}function Wv(t,e){return hc(4,4,t,e)}function jv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Xv(t,e,n){return n=n!=null?n.concat([t]):null,hc(4,4,jv.bind(null,e,t),n)}function _h(){}function $v(t,e){var n=Fn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ph(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Yv(t,e){var n=Fn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ph(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function qv(t,e,n){return Vr&21?(ti(n,e)||(n=ev(),ut.lanes|=n,Gr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,an=!0),t.memoizedState=n)}function pS(t,e){var n=Je;Je=n!==0&&4>n?n:4,t(!0);var i=wu.transition;wu.transition={};try{t(!1),e()}finally{Je=n,wu.transition=i}}function Kv(){return Fn().memoizedState}function mS(t,e,n){var i=ar(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Zv(t))Qv(e,n);else if(n=Dv(t,e,n,i),n!==null){var r=nn();Qn(n,t,i,r),Jv(n,e,i)}}function gS(t,e,n){var i=ar(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zv(t))Qv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ti(a,o)){var l=e.interleaved;l===null?(r.next=r,ch(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Dv(t,e,r,i),n!==null&&(r=nn(),Qn(n,t,i,r),Jv(n,e,i))}}function Zv(t){var e=t.alternate;return t===ut||e!==null&&e===ut}function Qv(t,e){Do=Wl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Jv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,qd(t,n)}}var jl={readContext:On,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},vS={readContext:On,useCallback:function(t,e){return si().memoizedState=[t,e===void 0?null:e],t},useContext:On,useEffect:Zp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ml(4194308,4,jv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ml(4194308,4,t,e)},useInsertionEffect:function(t,e){return ml(4,2,t,e)},useMemo:function(t,e){var n=si();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=si();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=mS.bind(null,ut,t),[i.memoizedState,t]},useRef:function(t){var e=si();return t={current:t},e.memoizedState=t},useState:Kp,useDebugValue:_h,useDeferredValue:function(t){return si().memoizedState=t},useTransition:function(){var t=Kp(!1),e=t[0];return t=pS.bind(null,t[1]),si().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ut,r=si();if(lt){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Ot===null)throw Error(ie(349));Vr&30||Fv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Zp(zv.bind(null,i,s,t),[t]),i.flags|=2048,Jo(9,kv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=si(),e=Ot.identifierPrefix;if(lt){var n=Ri,i=Ai;n=(i&~(1<<32-Zn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Zo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=hS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},_S={readContext:On,useCallback:$v,useContext:On,useEffect:vh,useImperativeHandle:Xv,useInsertionEffect:Gv,useLayoutEffect:Wv,useMemo:Yv,useReducer:Tu,useRef:Vv,useState:function(){return Tu(Qo)},useDebugValue:_h,useDeferredValue:function(t){var e=Fn();return qv(e,Tt.memoizedState,t)},useTransition:function(){var t=Tu(Qo)[0],e=Fn().memoizedState;return[t,e]},useMutableSource:Iv,useSyncExternalStore:Ov,useId:Kv,unstable_isNewReconciler:!1},yS={readContext:On,useCallback:$v,useContext:On,useEffect:vh,useImperativeHandle:Xv,useInsertionEffect:Gv,useLayoutEffect:Wv,useMemo:Yv,useReducer:Au,useRef:Vv,useState:function(){return Au(Qo)},useDebugValue:_h,useDeferredValue:function(t){var e=Fn();return Tt===null?e.memoizedState=t:qv(e,Tt.memoizedState,t)},useTransition:function(){var t=Au(Qo)[0],e=Fn().memoizedState;return[t,e]},useMutableSource:Iv,useSyncExternalStore:Ov,useId:Kv,unstable_isNewReconciler:!1};function jn(t,e){if(t&&t.defaultProps){e=ft({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Yf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ft({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var pc={isMounted:function(t){return(t=t._reactInternals)?Kr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=nn(),r=ar(t),s=bi(i,r);s.payload=e,n!=null&&(s.callback=n),e=sr(t,s,r),e!==null&&(Qn(e,t,r,i),hl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=nn(),r=ar(t),s=bi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=sr(t,s,r),e!==null&&(Qn(e,t,r,i),hl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nn(),i=ar(t),r=bi(n,i);r.tag=2,e!=null&&(r.callback=e),e=sr(t,r,i),e!==null&&(Qn(e,t,i,n),hl(e,t,i))}};function Qp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!jo(n,i)||!jo(r,s):!0}function e_(t,e,n){var i=!1,r=dr,s=e.contextType;return typeof s=="object"&&s!==null?s=On(s):(r=cn(e)?Br:qt.current,i=e.contextTypes,s=(i=i!=null)?Hs(t,r):dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=pc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Jp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&pc.enqueueReplaceState(e,e.state,null)}function qf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},uh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=On(s):(s=cn(e)?Br:qt.current,r.context=Hs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Yf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&pc.enqueueReplaceState(r,r.state,null),Vl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function js(t,e){try{var n="",i=e;do n+=$1(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Ru(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Kf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var xS=typeof WeakMap=="function"?WeakMap:Map;function t_(t,e,n){n=bi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){$l||($l=!0,od=i),Kf(t,e)},n}function n_(t,e,n){n=bi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Kf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Kf(t,e),typeof i!="function"&&(or===null?or=new Set([this]):or.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function em(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new xS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=NS.bind(null,t,e,n),e.then(t,t))}function tm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function nm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bi(-1,1),e.tag=2,sr(n,e,1))),n.lanes|=1),t)}var SS=Oi.ReactCurrentOwner,an=!1;function Jt(t,e,n,i){e.child=t===null?Lv(e,null,n,i):Gs(e,t.child,n,i)}function im(t,e,n,i,r){n=n.render;var s=e.ref;return Is(e,r),i=mh(t,e,n,i,s,r),n=gh(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ni(t,e,r)):(lt&&n&&ih(e),e.flags|=1,Jt(t,e,i,r),e.child)}function rm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Ah(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,i_(t,e,s,i,r)):(t=yl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:jo,n(o,i)&&t.ref===e.ref)return Ni(t,e,r)}return e.flags|=1,t=lr(s,i),t.ref=e.ref,t.return=e,e.child=t}function i_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(jo(s,i)&&t.ref===e.ref)if(an=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(an=!0);else return e.lanes=t.lanes,Ni(t,e,r)}return Zf(t,e,n,i,r)}function r_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(bs,_n),_n|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,rt(bs,_n),_n|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,rt(bs,_n),_n|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,rt(bs,_n),_n|=i;return Jt(t,e,r,n),e.child}function s_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Zf(t,e,n,i,r){var s=cn(n)?Br:qt.current;return s=Hs(e,s),Is(e,r),n=mh(t,e,n,i,s,r),i=gh(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ni(t,e,r)):(lt&&i&&ih(e),e.flags|=1,Jt(t,e,n,r),e.child)}function sm(t,e,n,i,r){if(cn(n)){var s=!0;Fl(e)}else s=!1;if(Is(e,r),e.stateNode===null)gl(t,e),e_(e,n,i),qf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=On(c):(c=cn(n)?Br:qt.current,c=Hs(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Jp(e,o,i,c),$i=!1;var h=e.memoizedState;o.state=h,Vl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||ln.current||$i?(typeof u=="function"&&(Yf(e,n,u,i),l=e.memoizedState),(a=$i||Qp(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Uv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:jn(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=On(l):(l=cn(n)?Br:qt.current,l=Hs(e,l));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Jp(e,o,i,l),$i=!1,h=e.memoizedState,o.state=h,Vl(e,i,o,r);var y=e.memoizedState;a!==d||h!==y||ln.current||$i?(typeof m=="function"&&(Yf(e,n,m,i),y=e.memoizedState),(c=$i||Qp(e,n,c,i,h,y,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Qf(t,e,n,i,s,r)}function Qf(t,e,n,i,r,s){s_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Wp(e,n,!1),Ni(t,e,s);i=e.stateNode,SS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Gs(e,t.child,null,s),e.child=Gs(e,null,a,s)):Jt(t,e,a,s),e.memoizedState=i.state,r&&Wp(e,n,!0),e.child}function o_(t){var e=t.stateNode;e.pendingContext?Gp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Gp(t,e.context,!1),fh(t,e.containerInfo)}function om(t,e,n,i,r){return Vs(),sh(r),e.flags|=256,Jt(t,e,n,i),e.child}var Jf={dehydrated:null,treeContext:null,retryLane:0};function ed(t){return{baseLanes:t,cachePool:null,transitions:null}}function a_(t,e,n){var i=e.pendingProps,r=ct.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),rt(ct,r&1),t===null)return Xf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=vc(o,i,0,null),t=Ir(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ed(n),e.memoizedState=Jf,t):yh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return ES(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=lr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=lr(a,s):(s=Ir(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?ed(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Jf,i}return s=t.child,t=s.sibling,i=lr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function yh(t,e){return e=vc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ua(t,e,n,i){return i!==null&&sh(i),Gs(e,t.child,null,n),t=yh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ES(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Ru(Error(ie(422))),Ua(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=vc({mode:"visible",children:i.children},r,0,null),s=Ir(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Gs(e,t.child,null,o),e.child.memoizedState=ed(o),e.memoizedState=Jf,s);if(!(e.mode&1))return Ua(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ie(419)),i=Ru(s,i,void 0),Ua(t,e,o,i)}if(a=(o&t.childLanes)!==0,an||a){if(i=Ot,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ui(t,r),Qn(i,t,r,-1))}return Th(),i=Ru(Error(ie(421))),Ua(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=IS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,xn=rr(r.nextSibling),Sn=e,lt=!0,$n=null,t!==null&&(bn[Pn++]=Ai,bn[Pn++]=Ri,bn[Pn++]=Hr,Ai=t.id,Ri=t.overflow,Hr=e),e=yh(e,i.children),e.flags|=4096,e)}function am(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),$f(t.return,e,n)}function Cu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function l_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Jt(t,e,i.children,n),i=ct.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&am(t,n,e);else if(t.tag===19)am(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(rt(ct,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Gl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Cu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Gl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Cu(e,!0,n,null,s);break;case"together":Cu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function gl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ni(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function MS(t,e,n){switch(e.tag){case 3:o_(e),Vs();break;case 5:Nv(e);break;case 1:cn(e.type)&&Fl(e);break;case 4:fh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;rt(Bl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(rt(ct,ct.current&1),e.flags|=128,null):n&e.child.childLanes?a_(t,e,n):(rt(ct,ct.current&1),t=Ni(t,e,n),t!==null?t.sibling:null);rt(ct,ct.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return l_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),rt(ct,ct.current),i)break;return null;case 22:case 23:return e.lanes=0,r_(t,e,n)}return Ni(t,e,n)}var c_,td,u_,f_;c_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};td=function(){};u_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Dr(di.current);var s=null;switch(n){case"input":r=Mf(t,r),i=Mf(t,i),s=[];break;case"select":r=ft({},r,{value:void 0}),i=ft({},i,{value:void 0}),s=[];break;case"textarea":r=Af(t,r),i=Af(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Il)}Cf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ko.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ko.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ot("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};f_=function(t,e,n,i){n!==i&&(e.flags|=4)};function ho(t,e){if(!lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Gt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function wS(t,e,n){var i=e.pendingProps;switch(rh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gt(e),null;case 1:return cn(e.type)&&Ol(),Gt(e),null;case 3:return i=e.stateNode,Ws(),at(ln),at(qt),hh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(La(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$n!==null&&(cd($n),$n=null))),td(t,e),Gt(e),null;case 5:dh(e);var r=Dr(Ko.current);if(n=e.type,t!==null&&e.stateNode!=null)u_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Gt(e),null}if(t=Dr(di.current),La(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ci]=e,i[Yo]=s,t=(e.mode&1)!==0,n){case"dialog":ot("cancel",i),ot("close",i);break;case"iframe":case"object":case"embed":ot("load",i);break;case"video":case"audio":for(r=0;r<wo.length;r++)ot(wo[r],i);break;case"source":ot("error",i);break;case"img":case"image":case"link":ot("error",i),ot("load",i);break;case"details":ot("toggle",i);break;case"input":gp(i,s),ot("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ot("invalid",i);break;case"textarea":_p(i,s),ot("invalid",i)}Cf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Pa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Pa(i.textContent,a,t),r=["children",""+a]):ko.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ot("scroll",i)}switch(n){case"input":Ea(i),vp(i,s,!0);break;case"textarea":Ea(i),yp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Il)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=zg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ci]=e,t[Yo]=i,c_(t,e,!1,!1),e.stateNode=t;e:{switch(o=bf(n,i),n){case"dialog":ot("cancel",t),ot("close",t),r=i;break;case"iframe":case"object":case"embed":ot("load",t),r=i;break;case"video":case"audio":for(r=0;r<wo.length;r++)ot(wo[r],t);r=i;break;case"source":ot("error",t),r=i;break;case"img":case"image":case"link":ot("error",t),ot("load",t),r=i;break;case"details":ot("toggle",t),r=i;break;case"input":gp(t,i),r=Mf(t,i),ot("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ft({},i,{value:void 0}),ot("invalid",t);break;case"textarea":_p(t,i),r=Af(t,i),ot("invalid",t);break;default:r=i}Cf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Vg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Bg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&zo(t,l):typeof l=="number"&&zo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ko.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ot("scroll",t):l!=null&&Gd(t,s,l,o))}switch(n){case"input":Ea(t),vp(t,i,!1);break;case"textarea":Ea(t),yp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+fr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ls(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ls(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Il)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Gt(e),null;case 6:if(t&&e.stateNode!=null)f_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=Dr(Ko.current),Dr(di.current),La(e)){if(i=e.stateNode,n=e.memoizedProps,i[ci]=e,(s=i.nodeValue!==n)&&(t=Sn,t!==null))switch(t.tag){case 3:Pa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Pa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ci]=e,e.stateNode=i}return Gt(e),null;case 13:if(at(ct),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(lt&&xn!==null&&e.mode&1&&!(e.flags&128))bv(),Vs(),e.flags|=98560,s=!1;else if(s=La(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[ci]=e}else Vs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Gt(e),s=!1}else $n!==null&&(cd($n),$n=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ct.current&1?At===0&&(At=3):Th())),e.updateQueue!==null&&(e.flags|=4),Gt(e),null);case 4:return Ws(),td(t,e),t===null&&Xo(e.stateNode.containerInfo),Gt(e),null;case 10:return lh(e.type._context),Gt(e),null;case 17:return cn(e.type)&&Ol(),Gt(e),null;case 19:if(at(ct),s=e.memoizedState,s===null)return Gt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ho(s,!1);else{if(At!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Gl(t),o!==null){for(e.flags|=128,ho(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return rt(ct,ct.current&1|2),e.child}t=t.sibling}s.tail!==null&&gt()>Xs&&(e.flags|=128,i=!0,ho(s,!1),e.lanes=4194304)}else{if(!i)if(t=Gl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ho(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!lt)return Gt(e),null}else 2*gt()-s.renderingStartTime>Xs&&n!==1073741824&&(e.flags|=128,i=!0,ho(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=gt(),e.sibling=null,n=ct.current,rt(ct,i?n&1|2:n&1),e):(Gt(e),null);case 22:case 23:return wh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?_n&1073741824&&(Gt(e),e.subtreeFlags&6&&(e.flags|=8192)):Gt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function TS(t,e){switch(rh(e),e.tag){case 1:return cn(e.type)&&Ol(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ws(),at(ln),at(qt),hh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return dh(e),null;case 13:if(at(ct),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));Vs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return at(ct),null;case 4:return Ws(),null;case 10:return lh(e.type._context),null;case 22:case 23:return wh(),null;case 24:return null;default:return null}}var Na=!1,$t=!1,AS=typeof WeakSet=="function"?WeakSet:Set,me=null;function Cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){pt(t,e,i)}else n.current=null}function nd(t,e,n){try{n()}catch(i){pt(t,e,i)}}var lm=!1;function RS(t,e){if(zf=Dl,t=gv(),nh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,h=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bf={focusedElem:t,selectionRange:n},Dl=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,p=y.memoizedState,f=e.stateNode,v=f.getSnapshotBeforeUpdate(e.elementType===e.type?_:jn(e.type,_),p);f.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(x){pt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return y=lm,lm=!1,y}function Uo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&nd(e,n,s)}r=r.next}while(r!==i)}}function mc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function id(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function d_(t){var e=t.alternate;e!==null&&(t.alternate=null,d_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ci],delete e[Yo],delete e[Gf],delete e[cS],delete e[uS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function h_(t){return t.tag===5||t.tag===3||t.tag===4}function cm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||h_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Il));else if(i!==4&&(t=t.child,t!==null))for(rd(t,e,n),t=t.sibling;t!==null;)rd(t,e,n),t=t.sibling}function sd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(sd(t,e,n),t=t.sibling;t!==null;)sd(t,e,n),t=t.sibling}var kt=null,Xn=!1;function Bi(t,e,n){for(n=n.child;n!==null;)p_(t,e,n),n=n.sibling}function p_(t,e,n){if(fi&&typeof fi.onCommitFiberUnmount=="function")try{fi.onCommitFiberUnmount(ac,n)}catch{}switch(n.tag){case 5:$t||Cs(n,e);case 6:var i=kt,r=Xn;kt=null,Bi(t,e,n),kt=i,Xn=r,kt!==null&&(Xn?(t=kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):kt.removeChild(n.stateNode));break;case 18:kt!==null&&(Xn?(t=kt,n=n.stateNode,t.nodeType===8?Su(t.parentNode,n):t.nodeType===1&&Su(t,n),Go(t)):Su(kt,n.stateNode));break;case 4:i=kt,r=Xn,kt=n.stateNode.containerInfo,Xn=!0,Bi(t,e,n),kt=i,Xn=r;break;case 0:case 11:case 14:case 15:if(!$t&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&nd(n,e,o),r=r.next}while(r!==i)}Bi(t,e,n);break;case 1:if(!$t&&(Cs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){pt(n,e,a)}Bi(t,e,n);break;case 21:Bi(t,e,n);break;case 22:n.mode&1?($t=(i=$t)||n.memoizedState!==null,Bi(t,e,n),$t=i):Bi(t,e,n);break;default:Bi(t,e,n)}}function um(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new AS),e.forEach(function(i){var r=OS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Bn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:kt=a.stateNode,Xn=!1;break e;case 3:kt=a.stateNode.containerInfo,Xn=!0;break e;case 4:kt=a.stateNode.containerInfo,Xn=!0;break e}a=a.return}if(kt===null)throw Error(ie(160));p_(s,o,r),kt=null,Xn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){pt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)m_(e,t),e=e.sibling}function m_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bn(e,t),ri(t),i&4){try{Uo(3,t,t.return),mc(3,t)}catch(_){pt(t,t.return,_)}try{Uo(5,t,t.return)}catch(_){pt(t,t.return,_)}}break;case 1:Bn(e,t),ri(t),i&512&&n!==null&&Cs(n,n.return);break;case 5:if(Bn(e,t),ri(t),i&512&&n!==null&&Cs(n,n.return),t.flags&32){var r=t.stateNode;try{zo(r,"")}catch(_){pt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Fg(r,s),bf(a,o);var c=bf(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?Vg(r,d):u==="dangerouslySetInnerHTML"?Bg(r,d):u==="children"?zo(r,d):Gd(r,u,d,c)}switch(a){case"input":wf(r,s);break;case"textarea":kg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ls(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ls(r,!!s.multiple,s.defaultValue,!0):Ls(r,!!s.multiple,s.multiple?[]:"",!1))}r[Yo]=s}catch(_){pt(t,t.return,_)}}break;case 6:if(Bn(e,t),ri(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){pt(t,t.return,_)}}break;case 3:if(Bn(e,t),ri(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Go(e.containerInfo)}catch(_){pt(t,t.return,_)}break;case 4:Bn(e,t),ri(t);break;case 13:Bn(e,t),ri(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Eh=gt())),i&4&&um(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?($t=(c=$t)||u,Bn(e,t),$t=c):Bn(e,t),ri(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(me=t,u=t.child;u!==null;){for(d=me=u;me!==null;){switch(h=me,m=h.child,h.tag){case 0:case 11:case 14:case 15:Uo(4,h,h.return);break;case 1:Cs(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){pt(i,n,_)}}break;case 5:Cs(h,h.return);break;case 22:if(h.memoizedState!==null){dm(d);continue}}m!==null?(m.return=h,me=m):dm(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Hg("display",o))}catch(_){pt(t,t.return,_)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(_){pt(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Bn(e,t),ri(t),i&4&&um(t);break;case 21:break;default:Bn(e,t),ri(t)}}function ri(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(h_(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(zo(r,""),i.flags&=-33);var s=cm(t);sd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=cm(t);rd(t,a,o);break;default:throw Error(ie(161))}}catch(l){pt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function CS(t,e,n){me=t,g_(t)}function g_(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Na;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||$t;a=Na;var c=$t;if(Na=o,($t=l)&&!c)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?hm(r):l!==null?(l.return=o,me=l):hm(r);for(;s!==null;)me=s,g_(s),s=s.sibling;me=r,Na=a,$t=c}fm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):fm(t)}}function fm(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$t||mc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!$t)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&qp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}qp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Go(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}$t||e.flags&512&&id(e)}catch(h){pt(e,e.return,h)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function dm(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function hm(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{mc(4,e)}catch(l){pt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){pt(e,r,l)}}var s=e.return;try{id(e)}catch(l){pt(e,s,l)}break;case 5:var o=e.return;try{id(e)}catch(l){pt(e,o,l)}}}catch(l){pt(e,e.return,l)}if(e===t){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var bS=Math.ceil,Xl=Oi.ReactCurrentDispatcher,xh=Oi.ReactCurrentOwner,Nn=Oi.ReactCurrentBatchConfig,$e=0,Ot=null,St=null,Bt=0,_n=0,bs=mr(0),At=0,ea=null,Gr=0,gc=0,Sh=0,No=null,on=null,Eh=0,Xs=1/0,wi=null,$l=!1,od=null,or=null,Ia=!1,Zi=null,Yl=0,Io=0,ad=null,vl=-1,_l=0;function nn(){return $e&6?gt():vl!==-1?vl:vl=gt()}function ar(t){return t.mode&1?$e&2&&Bt!==0?Bt&-Bt:dS.transition!==null?(_l===0&&(_l=ev()),_l):(t=Je,t!==0||(t=window.event,t=t===void 0?16:av(t.type)),t):1}function Qn(t,e,n,i){if(50<Io)throw Io=0,ad=null,Error(ie(185));ua(t,n,i),(!($e&2)||t!==Ot)&&(t===Ot&&(!($e&2)&&(gc|=n),At===4&&qi(t,Bt)),un(t,i),n===1&&$e===0&&!(e.mode&1)&&(Xs=gt()+500,dc&&gr()))}function un(t,e){var n=t.callbackNode;dx(t,e);var i=Ll(t,t===Ot?Bt:0);if(i===0)n!==null&&Ep(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Ep(n),e===1)t.tag===0?fS(pm.bind(null,t)):Av(pm.bind(null,t)),aS(function(){!($e&6)&&gr()}),n=null;else{switch(tv(i)){case 1:n=Yd;break;case 4:n=Qg;break;case 16:n=Pl;break;case 536870912:n=Jg;break;default:n=Pl}n=w_(n,v_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function v_(t,e){if(vl=-1,_l=0,$e&6)throw Error(ie(327));var n=t.callbackNode;if(Os()&&t.callbackNode!==n)return null;var i=Ll(t,t===Ot?Bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ql(t,i);else{e=i;var r=$e;$e|=2;var s=y_();(Ot!==t||Bt!==e)&&(wi=null,Xs=gt()+500,Nr(t,e));do try{DS();break}catch(a){__(t,a)}while(1);ah(),Xl.current=s,$e=r,St!==null?e=0:(Ot=null,Bt=0,e=At)}if(e!==0){if(e===2&&(r=Nf(t),r!==0&&(i=r,e=ld(t,r))),e===1)throw n=ea,Nr(t,0),qi(t,i),un(t,gt()),n;if(e===6)qi(t,i);else{if(r=t.current.alternate,!(i&30)&&!PS(r)&&(e=ql(t,i),e===2&&(s=Nf(t),s!==0&&(i=s,e=ld(t,s))),e===1))throw n=ea,Nr(t,0),qi(t,i),un(t,gt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:Ar(t,on,wi);break;case 3:if(qi(t,i),(i&130023424)===i&&(e=Eh+500-gt(),10<e)){if(Ll(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){nn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Vf(Ar.bind(null,t,on,wi),e);break}Ar(t,on,wi);break;case 4:if(qi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Zn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=gt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*bS(i/1960))-i,10<i){t.timeoutHandle=Vf(Ar.bind(null,t,on,wi),i);break}Ar(t,on,wi);break;case 5:Ar(t,on,wi);break;default:throw Error(ie(329))}}}return un(t,gt()),t.callbackNode===n?v_.bind(null,t):null}function ld(t,e){var n=No;return t.current.memoizedState.isDehydrated&&(Nr(t,e).flags|=256),t=ql(t,e),t!==2&&(e=on,on=n,e!==null&&cd(e)),t}function cd(t){on===null?on=t:on.push.apply(on,t)}function PS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ti(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qi(t,e){for(e&=~Sh,e&=~gc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Zn(e),i=1<<n;t[n]=-1,e&=~i}}function pm(t){if($e&6)throw Error(ie(327));Os();var e=Ll(t,0);if(!(e&1))return un(t,gt()),null;var n=ql(t,e);if(t.tag!==0&&n===2){var i=Nf(t);i!==0&&(e=i,n=ld(t,i))}if(n===1)throw n=ea,Nr(t,0),qi(t,e),un(t,gt()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ar(t,on,wi),un(t,gt()),null}function Mh(t,e){var n=$e;$e|=1;try{return t(e)}finally{$e=n,$e===0&&(Xs=gt()+500,dc&&gr())}}function Wr(t){Zi!==null&&Zi.tag===0&&!($e&6)&&Os();var e=$e;$e|=1;var n=Nn.transition,i=Je;try{if(Nn.transition=null,Je=1,t)return t()}finally{Je=i,Nn.transition=n,$e=e,!($e&6)&&gr()}}function wh(){_n=bs.current,at(bs)}function Nr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,oS(n)),St!==null)for(n=St.return;n!==null;){var i=n;switch(rh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ol();break;case 3:Ws(),at(ln),at(qt),hh();break;case 5:dh(i);break;case 4:Ws();break;case 13:at(ct);break;case 19:at(ct);break;case 10:lh(i.type._context);break;case 22:case 23:wh()}n=n.return}if(Ot=t,St=t=lr(t.current,null),Bt=_n=e,At=0,ea=null,Sh=gc=Gr=0,on=No=null,Lr!==null){for(e=0;e<Lr.length;e++)if(n=Lr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Lr=null}return t}function __(t,e){do{var n=St;try{if(ah(),pl.current=jl,Wl){for(var i=ut.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Wl=!1}if(Vr=0,Nt=Tt=ut=null,Do=!1,Zo=0,xh.current=null,n===null||n.return===null){At=1,ea=e,St=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=tm(o);if(m!==null){m.flags&=-257,nm(m,o,a,s,e),m.mode&1&&em(s,c,e),e=m,l=c;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){em(s,c,e),Th();break e}l=Error(ie(426))}}else if(lt&&a.mode&1){var p=tm(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),nm(p,o,a,s,e),sh(js(l,a));break e}}s=l=js(l,a),At!==4&&(At=2),No===null?No=[s]:No.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=t_(s,l,e);Yp(s,f);break e;case 1:a=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(or===null||!or.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=n_(s,a,e);Yp(s,x);break e}}s=s.return}while(s!==null)}S_(n)}catch(S){e=S,St===n&&n!==null&&(St=n=n.return);continue}break}while(1)}function y_(){var t=Xl.current;return Xl.current=jl,t===null?jl:t}function Th(){(At===0||At===3||At===2)&&(At=4),Ot===null||!(Gr&268435455)&&!(gc&268435455)||qi(Ot,Bt)}function ql(t,e){var n=$e;$e|=2;var i=y_();(Ot!==t||Bt!==e)&&(wi=null,Nr(t,e));do try{LS();break}catch(r){__(t,r)}while(1);if(ah(),$e=n,Xl.current=i,St!==null)throw Error(ie(261));return Ot=null,Bt=0,At}function LS(){for(;St!==null;)x_(St)}function DS(){for(;St!==null&&!ix();)x_(St)}function x_(t){var e=M_(t.alternate,t,_n);t.memoizedProps=t.pendingProps,e===null?S_(t):St=e,xh.current=null}function S_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=TS(n,e),n!==null){n.flags&=32767,St=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{At=6,St=null;return}}else if(n=wS(n,e,_n),n!==null){St=n;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);At===0&&(At=5)}function Ar(t,e,n){var i=Je,r=Nn.transition;try{Nn.transition=null,Je=1,US(t,e,n,i)}finally{Nn.transition=r,Je=i}return null}function US(t,e,n,i){do Os();while(Zi!==null);if($e&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(hx(t,s),t===Ot&&(St=Ot=null,Bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ia||(Ia=!0,w_(Pl,function(){return Os(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Nn.transition,Nn.transition=null;var o=Je;Je=1;var a=$e;$e|=4,xh.current=null,RS(t,n),m_(n,t),Jx(Bf),Dl=!!zf,Bf=zf=null,t.current=n,CS(n),rx(),$e=a,Je=o,Nn.transition=s}else t.current=n;if(Ia&&(Ia=!1,Zi=t,Yl=r),s=t.pendingLanes,s===0&&(or=null),ax(n.stateNode),un(t,gt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if($l)throw $l=!1,t=od,od=null,t;return Yl&1&&t.tag!==0&&Os(),s=t.pendingLanes,s&1?t===ad?Io++:(Io=0,ad=t):Io=0,gr(),null}function Os(){if(Zi!==null){var t=tv(Yl),e=Nn.transition,n=Je;try{if(Nn.transition=null,Je=16>t?16:t,Zi===null)var i=!1;else{if(t=Zi,Zi=null,Yl=0,$e&6)throw Error(ie(331));var r=$e;for($e|=4,me=t.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(me=c;me!==null;){var u=me;switch(u.tag){case 0:case 11:case 15:Uo(8,u,s)}var d=u.child;if(d!==null)d.return=u,me=d;else for(;me!==null;){u=me;var h=u.sibling,m=u.return;if(d_(u),u===c){me=null;break}if(h!==null){h.return=m,me=h;break}me=m}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var p=_.sibling;_.sibling=null,_=p}while(_!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Uo(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,me=f;break e}me=s.return}}var v=t.current;for(me=v;me!==null;){o=me;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,me=g;else e:for(o=v;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:mc(9,a)}}catch(S){pt(a,a.return,S)}if(a===o){me=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,me=x;break e}me=a.return}}if($e=r,gr(),fi&&typeof fi.onPostCommitFiberRoot=="function")try{fi.onPostCommitFiberRoot(ac,t)}catch{}i=!0}return i}finally{Je=n,Nn.transition=e}}return!1}function mm(t,e,n){e=js(n,e),e=t_(t,e,1),t=sr(t,e,1),e=nn(),t!==null&&(ua(t,1,e),un(t,e))}function pt(t,e,n){if(t.tag===3)mm(t,t,n);else for(;e!==null;){if(e.tag===3){mm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(or===null||!or.has(i))){t=js(n,t),t=n_(e,t,1),e=sr(e,t,1),t=nn(),e!==null&&(ua(e,1,t),un(e,t));break}}e=e.return}}function NS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=nn(),t.pingedLanes|=t.suspendedLanes&n,Ot===t&&(Bt&n)===n&&(At===4||At===3&&(Bt&130023424)===Bt&&500>gt()-Eh?Nr(t,0):Sh|=n),un(t,e)}function E_(t,e){e===0&&(t.mode&1?(e=Ta,Ta<<=1,!(Ta&130023424)&&(Ta=4194304)):e=1);var n=nn();t=Ui(t,e),t!==null&&(ua(t,e,n),un(t,n))}function IS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),E_(t,n)}function OS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),E_(t,n)}var M_;M_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ln.current)an=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return an=!1,MS(t,e,n);an=!!(t.flags&131072)}else an=!1,lt&&e.flags&1048576&&Rv(e,zl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;gl(t,e),t=e.pendingProps;var r=Hs(e,qt.current);Is(e,n),r=mh(null,e,i,t,r,n);var s=gh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,cn(i)?(s=!0,Fl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,uh(e),r.updater=pc,e.stateNode=r,r._reactInternals=e,qf(e,i,t,n),e=Qf(null,e,i,!0,s,n)):(e.tag=0,lt&&s&&ih(e),Jt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(gl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=kS(i),t=jn(i,t),r){case 0:e=Zf(null,e,i,t,n);break e;case 1:e=sm(null,e,i,t,n);break e;case 11:e=im(null,e,i,t,n);break e;case 14:e=rm(null,e,i,jn(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Zf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),sm(t,e,i,r,n);case 3:e:{if(o_(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Uv(t,e),Vl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=js(Error(ie(423)),e),e=om(t,e,i,n,r);break e}else if(i!==r){r=js(Error(ie(424)),e),e=om(t,e,i,n,r);break e}else for(xn=rr(e.stateNode.containerInfo.firstChild),Sn=e,lt=!0,$n=null,n=Lv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vs(),i===r){e=Ni(t,e,n);break e}Jt(t,e,i,n)}e=e.child}return e;case 5:return Nv(e),t===null&&Xf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Hf(i,r)?o=null:s!==null&&Hf(i,s)&&(e.flags|=32),s_(t,e),Jt(t,e,o,n),e.child;case 6:return t===null&&Xf(e),null;case 13:return a_(t,e,n);case 4:return fh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Gs(e,null,i,n):Jt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),im(t,e,i,r,n);case 7:return Jt(t,e,e.pendingProps,n),e.child;case 8:return Jt(t,e,e.pendingProps.children,n),e.child;case 12:return Jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,rt(Bl,i._currentValue),i._currentValue=o,s!==null)if(ti(s.value,o)){if(s.children===r.children&&!ln.current){e=Ni(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=bi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),$f(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),$f(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Jt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Is(e,n),r=On(r),i=i(r),e.flags|=1,Jt(t,e,i,n),e.child;case 14:return i=e.type,r=jn(i,e.pendingProps),r=jn(i.type,r),rm(t,e,i,r,n);case 15:return i_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),gl(t,e),e.tag=1,cn(i)?(t=!0,Fl(e)):t=!1,Is(e,n),e_(e,i,r),qf(e,i,r,n),Qf(null,e,i,!0,t,n);case 19:return l_(t,e,n);case 22:return r_(t,e,n)}throw Error(ie(156,e.tag))};function w_(t,e){return Zg(t,e)}function FS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Un(t,e,n,i){return new FS(t,e,n,i)}function Ah(t){return t=t.prototype,!(!t||!t.isReactComponent)}function kS(t){if(typeof t=="function")return Ah(t)?1:0;if(t!=null){if(t=t.$$typeof,t===jd)return 11;if(t===Xd)return 14}return 2}function lr(t,e){var n=t.alternate;return n===null?(n=Un(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function yl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Ah(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ys:return Ir(n.children,r,s,e);case Wd:o=8,r|=8;break;case yf:return t=Un(12,n,e,r|2),t.elementType=yf,t.lanes=s,t;case xf:return t=Un(13,n,e,r),t.elementType=xf,t.lanes=s,t;case Sf:return t=Un(19,n,e,r),t.elementType=Sf,t.lanes=s,t;case Ng:return vc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Dg:o=10;break e;case Ug:o=9;break e;case jd:o=11;break e;case Xd:o=14;break e;case Xi:o=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=Un(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ir(t,e,n,i){return t=Un(7,t,i,e),t.lanes=n,t}function vc(t,e,n,i){return t=Un(22,t,i,e),t.elementType=Ng,t.lanes=n,t.stateNode={isHidden:!1},t}function bu(t,e,n){return t=Un(6,t,null,e),t.lanes=n,t}function Pu(t,e,n){return e=Un(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function zS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=uu(0),this.expirationTimes=uu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Rh(t,e,n,i,r,s,o,a,l){return t=new zS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Un(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},uh(s),t}function BS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_s,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function T_(t){if(!t)return dr;t=t._reactInternals;e:{if(Kr(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(cn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(cn(n))return Tv(t,n,e)}return e}function A_(t,e,n,i,r,s,o,a,l){return t=Rh(n,i,!0,t,r,s,o,a,l),t.context=T_(null),n=t.current,i=nn(),r=ar(n),s=bi(i,r),s.callback=e??null,sr(n,s,r),t.current.lanes=r,ua(t,r,i),un(t,i),t}function _c(t,e,n,i){var r=e.current,s=nn(),o=ar(r);return n=T_(n),e.context===null?e.context=n:e.pendingContext=n,e=bi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=sr(r,e,o),t!==null&&(Qn(t,r,o,s),hl(t,r,o)),o}function Kl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function gm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ch(t,e){gm(t,e),(t=t.alternate)&&gm(t,e)}function HS(){return null}var R_=typeof reportError=="function"?reportError:function(t){console.error(t)};function bh(t){this._internalRoot=t}yc.prototype.render=bh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));_c(t,e,null,null)};yc.prototype.unmount=bh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wr(function(){_c(null,t,null,null)}),e[Di]=null}};function yc(t){this._internalRoot=t}yc.prototype.unstable_scheduleHydration=function(t){if(t){var e=rv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yi.length&&e!==0&&e<Yi[n].priority;n++);Yi.splice(n,0,t),n===0&&ov(t)}};function Ph(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function xc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vm(){}function VS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Kl(o);s.call(c)}}var o=A_(e,i,t,0,null,!1,!1,"",vm);return t._reactRootContainer=o,t[Di]=o.current,Xo(t.nodeType===8?t.parentNode:t),Wr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Kl(l);a.call(c)}}var l=Rh(t,0,!1,null,null,!1,!1,"",vm);return t._reactRootContainer=l,t[Di]=l.current,Xo(t.nodeType===8?t.parentNode:t),Wr(function(){_c(e,l,n,i)}),l}function Sc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Kl(o);a.call(l)}}_c(e,o,t,r)}else o=VS(n,e,t,r,i);return Kl(o)}nv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Mo(e.pendingLanes);n!==0&&(qd(e,n|1),un(e,gt()),!($e&6)&&(Xs=gt()+500,gr()))}break;case 13:Wr(function(){var i=Ui(t,1);if(i!==null){var r=nn();Qn(i,t,1,r)}}),Ch(t,1)}};Kd=function(t){if(t.tag===13){var e=Ui(t,134217728);if(e!==null){var n=nn();Qn(e,t,134217728,n)}Ch(t,134217728)}};iv=function(t){if(t.tag===13){var e=ar(t),n=Ui(t,e);if(n!==null){var i=nn();Qn(n,t,e,i)}Ch(t,e)}};rv=function(){return Je};sv=function(t,e){var n=Je;try{return Je=t,e()}finally{Je=n}};Lf=function(t,e,n){switch(e){case"input":if(wf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=fc(i);if(!r)throw Error(ie(90));Og(i),wf(i,r)}}}break;case"textarea":kg(t,n);break;case"select":e=n.value,e!=null&&Ls(t,!!n.multiple,e,!1)}};jg=Mh;Xg=Wr;var GS={usingClientEntryPoint:!1,Events:[da,Ms,fc,Gg,Wg,Mh]},po={findFiberByHostInstance:Pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},WS={bundleType:po.bundleType,version:po.version,rendererPackageName:po.rendererPackageName,rendererConfig:po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Oi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=qg(t),t===null?null:t.stateNode},findFiberByHostInstance:po.findFiberByHostInstance||HS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oa.isDisabled&&Oa.supportsFiber)try{ac=Oa.inject(WS),fi=Oa}catch{}}Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GS;Tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ph(e))throw Error(ie(200));return BS(t,e,null,n)};Tn.createRoot=function(t,e){if(!Ph(t))throw Error(ie(299));var n=!1,i="",r=R_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Rh(t,1,!1,null,null,n,!1,i,r),t[Di]=e.current,Xo(t.nodeType===8?t.parentNode:t),new bh(e)};Tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=qg(e),t=t===null?null:t.stateNode,t};Tn.flushSync=function(t){return Wr(t)};Tn.hydrate=function(t,e,n){if(!xc(e))throw Error(ie(200));return Sc(null,t,e,!0,n)};Tn.hydrateRoot=function(t,e,n){if(!Ph(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=R_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=A_(e,null,t,1,n??null,r,!1,s,o),t[Di]=e.current,Xo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new yc(e)};Tn.render=function(t,e,n){if(!xc(e))throw Error(ie(200));return Sc(null,t,e,!1,n)};Tn.unmountComponentAtNode=function(t){if(!xc(t))throw Error(ie(40));return t._reactRootContainer?(Wr(function(){Sc(null,null,t,!1,function(){t._reactRootContainer=null,t[Di]=null})}),!0):!1};Tn.unstable_batchedUpdates=Mh;Tn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!xc(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return Sc(t,e,n,!1,i)};Tn.version="18.3.1-next-f1338f8080-20240426";function C_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C_)}catch(t){console.error(t)}}C_(),Cg.exports=Tn;var jS=Cg.exports,_m=jS;vf.createRoot=_m.createRoot,vf.hydrateRoot=_m.hydrateRoot;const XS=({headerStyle:t,id:e})=>{const[n,i]=ge.useState(new Date);ge.useEffect(()=>{const o=setInterval(()=>i(new Date),1e3);return()=>clearInterval(o)},[]);const r=o=>{const a={weekday:"short",month:"short",day:"numeric"};return o.toLocaleDateString("en-US",a)},s=o=>o.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",second:"2-digit",hour12:!0});return Z.jsxs("div",{id:e,className:`date-component ${t}`,children:[Z.jsx("div",{className:"date",children:r(n)}),Z.jsx("div",{className:"time",children:s(n).split(":").map((o,a)=>Z.jsx("span",{className:"time-part",children:o},a))})]})};function b_(t,e){return function(){return t.apply(e,arguments)}}const{toString:$S}=Object.prototype,{getPrototypeOf:Lh}=Object,Ec=(t=>e=>{const n=$S.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ni=t=>(t=t.toLowerCase(),e=>Ec(e)===t),Mc=t=>e=>typeof e===t,{isArray:to}=Array,ta=Mc("undefined");function YS(t){return t!==null&&!ta(t)&&t.constructor!==null&&!ta(t.constructor)&&In(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const P_=ni("ArrayBuffer");function qS(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&P_(t.buffer),e}const KS=Mc("string"),In=Mc("function"),L_=Mc("number"),wc=t=>t!==null&&typeof t=="object",ZS=t=>t===!0||t===!1,xl=t=>{if(Ec(t)!=="object")return!1;const e=Lh(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},QS=ni("Date"),JS=ni("File"),eE=ni("Blob"),tE=ni("FileList"),nE=t=>wc(t)&&In(t.pipe),iE=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||In(t.append)&&((e=Ec(t))==="formdata"||e==="object"&&In(t.toString)&&t.toString()==="[object FormData]"))},rE=ni("URLSearchParams"),[sE,oE,aE,lE]=["ReadableStream","Request","Response","Headers"].map(ni),cE=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function pa(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),to(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(i=0;i<o;i++)a=s[i],e.call(null,t[a],a,t)}}function D_(t,e){e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const U_=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),N_=t=>!ta(t)&&t!==U_;function ud(){const{caseless:t}=N_(this)&&this||{},e={},n=(i,r)=>{const s=t&&D_(e,r)||r;xl(e[s])&&xl(i)?e[s]=ud(e[s],i):xl(i)?e[s]=ud({},i):to(i)?e[s]=i.slice():e[s]=i};for(let i=0,r=arguments.length;i<r;i++)arguments[i]&&pa(arguments[i],n);return e}const uE=(t,e,n,{allOwnKeys:i}={})=>(pa(e,(r,s)=>{n&&In(r)?t[s]=b_(r,n):t[s]=r},{allOwnKeys:i}),t),fE=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),dE=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},hE=(t,e,n,i)=>{let r,s,o;const a={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)o=r[s],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Lh(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},pE=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},mE=t=>{if(!t)return null;if(to(t))return t;let e=t.length;if(!L_(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},gE=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Lh(Uint8Array)),vE=(t,e)=>{const i=(t&&t[Symbol.iterator]).call(t);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(t,s[0],s[1])}},_E=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},yE=ni("HTMLFormElement"),xE=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),ym=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),SE=ni("RegExp"),I_=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};pa(n,(r,s)=>{let o;(o=e(r,s,t))!==!1&&(i[s]=o||r)}),Object.defineProperties(t,i)},EE=t=>{I_(t,(e,n)=>{if(In(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(In(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},ME=(t,e)=>{const n={},i=r=>{r.forEach(s=>{n[s]=!0})};return to(t)?i(t):i(String(t).split(e)),n},wE=()=>{},TE=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,Lu="abcdefghijklmnopqrstuvwxyz",xm="0123456789",O_={DIGIT:xm,ALPHA:Lu,ALPHA_DIGIT:Lu+Lu.toUpperCase()+xm},AE=(t=16,e=O_.ALPHA_DIGIT)=>{let n="";const{length:i}=e;for(;t--;)n+=e[Math.random()*i|0];return n};function RE(t){return!!(t&&In(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const CE=t=>{const e=new Array(10),n=(i,r)=>{if(wc(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[r]=i;const s=to(i)?[]:{};return pa(i,(o,a)=>{const l=n(o,r+1);!ta(l)&&(s[a]=l)}),e[r]=void 0,s}}return i};return n(t,0)},bE=ni("AsyncFunction"),PE=t=>t&&(wc(t)||In(t))&&In(t.then)&&In(t.catch),j={isArray:to,isArrayBuffer:P_,isBuffer:YS,isFormData:iE,isArrayBufferView:qS,isString:KS,isNumber:L_,isBoolean:ZS,isObject:wc,isPlainObject:xl,isReadableStream:sE,isRequest:oE,isResponse:aE,isHeaders:lE,isUndefined:ta,isDate:QS,isFile:JS,isBlob:eE,isRegExp:SE,isFunction:In,isStream:nE,isURLSearchParams:rE,isTypedArray:gE,isFileList:tE,forEach:pa,merge:ud,extend:uE,trim:cE,stripBOM:fE,inherits:dE,toFlatObject:hE,kindOf:Ec,kindOfTest:ni,endsWith:pE,toArray:mE,forEachEntry:vE,matchAll:_E,isHTMLForm:yE,hasOwnProperty:ym,hasOwnProp:ym,reduceDescriptors:I_,freezeMethods:EE,toObjectSet:ME,toCamelCase:xE,noop:wE,toFiniteNumber:TE,findKey:D_,global:U_,isContextDefined:N_,ALPHABET:O_,generateString:AE,isSpecCompliantForm:RE,toJSONObject:CE,isAsyncFn:bE,isThenable:PE};function Ne(t,e,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}j.inherits(Ne,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:j.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const F_=Ne.prototype,k_={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{k_[t]={value:t}});Object.defineProperties(Ne,k_);Object.defineProperty(F_,"isAxiosError",{value:!0});Ne.from=(t,e,n,i,r,s)=>{const o=Object.create(F_);return j.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),Ne.call(o,t.message,e,n,i,r),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const LE=null;function fd(t){return j.isPlainObject(t)||j.isArray(t)}function z_(t){return j.endsWith(t,"[]")?t.slice(0,-2):t}function Sm(t,e,n){return t?t.concat(e).map(function(r,s){return r=z_(r),!n&&s?"["+r+"]":r}).join(n?".":""):e}function DE(t){return j.isArray(t)&&!t.some(fd)}const UE=j.toFlatObject(j,{},null,function(e){return/^is[A-Z]/.test(e)});function Tc(t,e,n){if(!j.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=j.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,p){return!j.isUndefined(p[_])});const i=n.metaTokens,r=n.visitor||u,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&j.isSpecCompliantForm(e);if(!j.isFunction(r))throw new TypeError("visitor must be a function");function c(y){if(y===null)return"";if(j.isDate(y))return y.toISOString();if(!l&&j.isBlob(y))throw new Ne("Blob is not supported. Use a Buffer instead.");return j.isArrayBuffer(y)||j.isTypedArray(y)?l&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function u(y,_,p){let f=y;if(y&&!p&&typeof y=="object"){if(j.endsWith(_,"{}"))_=i?_:_.slice(0,-2),y=JSON.stringify(y);else if(j.isArray(y)&&DE(y)||(j.isFileList(y)||j.endsWith(_,"[]"))&&(f=j.toArray(y)))return _=z_(_),f.forEach(function(g,x){!(j.isUndefined(g)||g===null)&&e.append(o===!0?Sm([_],x,s):o===null?_:_+"[]",c(g))}),!1}return fd(y)?!0:(e.append(Sm(p,_,s),c(y)),!1)}const d=[],h=Object.assign(UE,{defaultVisitor:u,convertValue:c,isVisitable:fd});function m(y,_){if(!j.isUndefined(y)){if(d.indexOf(y)!==-1)throw Error("Circular reference detected in "+_.join("."));d.push(y),j.forEach(y,function(f,v){(!(j.isUndefined(f)||f===null)&&r.call(e,f,j.isString(v)?v.trim():v,_,h))===!0&&m(f,_?_.concat(v):[v])}),d.pop()}}if(!j.isObject(t))throw new TypeError("data must be an object");return m(t),e}function Em(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function Dh(t,e){this._pairs=[],t&&Tc(t,this,e)}const B_=Dh.prototype;B_.append=function(e,n){this._pairs.push([e,n])};B_.toString=function(e){const n=e?function(i){return e.call(this,i,Em)}:Em;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function NE(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function H_(t,e,n){if(!e)return t;const i=n&&n.encode||NE,r=n&&n.serialize;let s;if(r?s=r(e,n):s=j.isURLSearchParams(e)?e.toString():new Dh(e,n).toString(i),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class IE{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){j.forEach(this.handlers,function(i){i!==null&&e(i)})}}const Mm=IE,V_={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},OE=typeof URLSearchParams<"u"?URLSearchParams:Dh,FE=typeof FormData<"u"?FormData:null,kE=typeof Blob<"u"?Blob:null,zE={isBrowser:!0,classes:{URLSearchParams:OE,FormData:FE,Blob:kE},protocols:["http","https","file","blob","url","data"]},Uh=typeof window<"u"&&typeof document<"u",BE=(t=>Uh&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),HE=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),VE=Uh&&window.location.href||"http://localhost",GE=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Uh,hasStandardBrowserEnv:BE,hasStandardBrowserWebWorkerEnv:HE,origin:VE},Symbol.toStringTag,{value:"Module"})),Jn={...GE,...zE};function WE(t,e){return Tc(t,new Jn.classes.URLSearchParams,Object.assign({visitor:function(n,i,r,s){return Jn.isNode&&j.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function jE(t){return j.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function XE(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function G_(t){function e(n,i,r,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&j.isArray(r)?r.length:o,l?(j.hasOwnProp(r,o)?r[o]=[r[o],i]:r[o]=i,!a):((!r[o]||!j.isObject(r[o]))&&(r[o]=[]),e(n,i,r[o],s)&&j.isArray(r[o])&&(r[o]=XE(r[o])),!a)}if(j.isFormData(t)&&j.isFunction(t.entries)){const n={};return j.forEachEntry(t,(i,r)=>{e(jE(i),r,n,0)}),n}return null}function $E(t,e,n){if(j.isString(t))try{return(e||JSON.parse)(t),j.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const Nh={transitional:V_,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,s=j.isObject(e);if(s&&j.isHTMLForm(e)&&(e=new FormData(e)),j.isFormData(e))return r?JSON.stringify(G_(e)):e;if(j.isArrayBuffer(e)||j.isBuffer(e)||j.isStream(e)||j.isFile(e)||j.isBlob(e)||j.isReadableStream(e))return e;if(j.isArrayBufferView(e))return e.buffer;if(j.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return WE(e,this.formSerializer).toString();if((a=j.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Tc(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||r?(n.setContentType("application/json",!1),$E(e)):e}],transformResponse:[function(e){const n=this.transitional||Nh.transitional,i=n&&n.forcedJSONParsing,r=this.responseType==="json";if(j.isResponse(e)||j.isReadableStream(e))return e;if(e&&j.isString(e)&&(i&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?Ne.from(a,Ne.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Jn.classes.FormData,Blob:Jn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};j.forEach(["delete","get","head","post","put","patch"],t=>{Nh.headers[t]={}});const Ih=Nh,YE=j.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),qE=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!n||e[n]&&YE[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},wm=Symbol("internals");function mo(t){return t&&String(t).trim().toLowerCase()}function Sl(t){return t===!1||t==null?t:j.isArray(t)?t.map(Sl):String(t)}function KE(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const ZE=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Du(t,e,n,i,r){if(j.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!j.isString(e)){if(j.isString(i))return e.indexOf(i)!==-1;if(j.isRegExp(i))return i.test(e)}}function QE(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function JE(t,e){const n=j.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(r,s,o){return this[i].call(this,e,r,s,o)},configurable:!0})})}class Ac{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function s(a,l,c){const u=mo(l);if(!u)throw new Error("header name must be a non-empty string");const d=j.findKey(r,u);(!d||r[d]===void 0||c===!0||c===void 0&&r[d]!==!1)&&(r[d||l]=Sl(a))}const o=(a,l)=>j.forEach(a,(c,u)=>s(c,u,l));if(j.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(j.isString(e)&&(e=e.trim())&&!ZE(e))o(qE(e),n);else if(j.isHeaders(e))for(const[a,l]of e.entries())s(l,a,i);else e!=null&&s(n,e,i);return this}get(e,n){if(e=mo(e),e){const i=j.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return KE(r);if(j.isFunction(n))return n.call(this,r,i);if(j.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=mo(e),e){const i=j.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||Du(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function s(o){if(o=mo(o),o){const a=j.findKey(i,o);a&&(!n||Du(i,i[a],a,n))&&(delete i[a],r=!0)}}return j.isArray(e)?e.forEach(s):s(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const s=n[i];(!e||Du(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const n=this,i={};return j.forEach(this,(r,s)=>{const o=j.findKey(i,s);if(o){n[o]=Sl(r),delete n[s];return}const a=e?QE(s):String(s).trim();a!==s&&delete n[s],n[a]=Sl(r),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return j.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&j.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[wm]=this[wm]={accessors:{}}).accessors,r=this.prototype;function s(o){const a=mo(o);i[a]||(JE(r,o),i[a]=!0)}return j.isArray(e)?e.forEach(s):s(e),this}}Ac.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);j.reduceDescriptors(Ac.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});j.freezeMethods(Ac);const ei=Ac;function Uu(t,e){const n=this||Ih,i=e||n,r=ei.from(i.headers);let s=i.data;return j.forEach(t,function(a){s=a.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function W_(t){return!!(t&&t.__CANCEL__)}function no(t,e,n){Ne.call(this,t??"canceled",Ne.ERR_CANCELED,e,n),this.name="CanceledError"}j.inherits(no,Ne,{__CANCEL__:!0});function j_(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new Ne("Request failed with status code "+n.status,[Ne.ERR_BAD_REQUEST,Ne.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function eM(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function tM(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[s];o||(o=c),n[r]=l,i[r]=c;let d=s,h=0;for(;d!==r;)h+=n[d++],d=d%t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),c-o<e)return;const m=u&&c-u;return m?Math.round(h*1e3/m):void 0}}function nM(t,e){let n=0;const i=1e3/e;let r=null;return function(){const o=this===!0,a=Date.now();if(o||a-n>i)return r&&(clearTimeout(r),r=null),n=a,t.apply(null,arguments);r||(r=setTimeout(()=>(r=null,n=Date.now(),t.apply(null,arguments)),i-(a-n)))}}const Zl=(t,e,n=3)=>{let i=0;const r=tM(50,250);return nM(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,l=o-i,c=r(l),u=o<=a;i=o;const d={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&u?(a-o)/c:void 0,event:s,lengthComputable:a!=null};d[e?"download":"upload"]=!0,t(d)},n)},iM=Jn.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let i;function r(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return i=r(window.location.href),function(o){const a=j.isString(o)?r(o):o;return a.protocol===i.protocol&&a.host===i.host}}():function(){return function(){return!0}}(),rM=Jn.hasStandardBrowserEnv?{write(t,e,n,i,r,s){const o=[t+"="+encodeURIComponent(e)];j.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),j.isString(i)&&o.push("path="+i),j.isString(r)&&o.push("domain="+r),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function sM(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function oM(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function X_(t,e){return t&&!sM(e)?oM(t,e):e}const Tm=t=>t instanceof ei?{...t}:t;function jr(t,e){e=e||{};const n={};function i(c,u,d){return j.isPlainObject(c)&&j.isPlainObject(u)?j.merge.call({caseless:d},c,u):j.isPlainObject(u)?j.merge({},u):j.isArray(u)?u.slice():u}function r(c,u,d){if(j.isUndefined(u)){if(!j.isUndefined(c))return i(void 0,c,d)}else return i(c,u,d)}function s(c,u){if(!j.isUndefined(u))return i(void 0,u)}function o(c,u){if(j.isUndefined(u)){if(!j.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function a(c,u,d){if(d in e)return i(c,u);if(d in t)return i(void 0,c)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u)=>r(Tm(c),Tm(u),!0)};return j.forEach(Object.keys(Object.assign({},t,e)),function(u){const d=l[u]||r,h=d(t[u],e[u],u);j.isUndefined(h)&&d!==a||(n[u]=h)}),n}const $_=t=>{const e=jr({},t);let{data:n,withXSRFToken:i,xsrfHeaderName:r,xsrfCookieName:s,headers:o,auth:a}=e;e.headers=o=ei.from(o),e.url=H_(X_(e.baseURL,e.url),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(j.isFormData(n)){if(Jn.hasStandardBrowserEnv||Jn.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[c,...u]=l?l.split(";").map(d=>d.trim()).filter(Boolean):[];o.setContentType([c||"multipart/form-data",...u].join("; "))}}if(Jn.hasStandardBrowserEnv&&(i&&j.isFunction(i)&&(i=i(e)),i||i!==!1&&iM(e.url))){const c=r&&s&&rM.read(s);c&&o.set(r,c)}return e},aM=typeof XMLHttpRequest<"u",lM=aM&&function(t){return new Promise(function(n,i){const r=$_(t);let s=r.data;const o=ei.from(r.headers).normalize();let{responseType:a}=r,l;function c(){r.cancelToken&&r.cancelToken.unsubscribe(l),r.signal&&r.signal.removeEventListener("abort",l)}let u=new XMLHttpRequest;u.open(r.method.toUpperCase(),r.url,!0),u.timeout=r.timeout;function d(){if(!u)return;const m=ei.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),_={data:!a||a==="text"||a==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:m,config:t,request:u};j_(function(f){n(f),c()},function(f){i(f),c()},_),u=null}"onloadend"in u?u.onloadend=d:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(d)},u.onabort=function(){u&&(i(new Ne("Request aborted",Ne.ECONNABORTED,r,u)),u=null)},u.onerror=function(){i(new Ne("Network Error",Ne.ERR_NETWORK,r,u)),u=null},u.ontimeout=function(){let y=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const _=r.transitional||V_;r.timeoutErrorMessage&&(y=r.timeoutErrorMessage),i(new Ne(y,_.clarifyTimeoutError?Ne.ETIMEDOUT:Ne.ECONNABORTED,r,u)),u=null},s===void 0&&o.setContentType(null),"setRequestHeader"in u&&j.forEach(o.toJSON(),function(y,_){u.setRequestHeader(_,y)}),j.isUndefined(r.withCredentials)||(u.withCredentials=!!r.withCredentials),a&&a!=="json"&&(u.responseType=r.responseType),typeof r.onDownloadProgress=="function"&&u.addEventListener("progress",Zl(r.onDownloadProgress,!0)),typeof r.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Zl(r.onUploadProgress)),(r.cancelToken||r.signal)&&(l=m=>{u&&(i(!m||m.type?new no(null,t,u):m),u.abort(),u=null)},r.cancelToken&&r.cancelToken.subscribe(l),r.signal&&(r.signal.aborted?l():r.signal.addEventListener("abort",l)));const h=eM(r.url);if(h&&Jn.protocols.indexOf(h)===-1){i(new Ne("Unsupported protocol "+h+":",Ne.ERR_BAD_REQUEST,t));return}u.send(s||null)})},cM=(t,e)=>{let n=new AbortController,i;const r=function(l){if(!i){i=!0,o();const c=l instanceof Error?l:this.reason;n.abort(c instanceof Ne?c:new no(c instanceof Error?c.message:c))}};let s=e&&setTimeout(()=>{r(new Ne(`timeout ${e} of ms exceeded`,Ne.ETIMEDOUT))},e);const o=()=>{t&&(s&&clearTimeout(s),s=null,t.forEach(l=>{l&&(l.removeEventListener?l.removeEventListener("abort",r):l.unsubscribe(r))}),t=null)};t.forEach(l=>l&&l.addEventListener&&l.addEventListener("abort",r));const{signal:a}=n;return a.unsubscribe=o,[a,()=>{s&&clearTimeout(s),s=null}]},uM=cM,fM=function*(t,e){let n=t.byteLength;if(!e||n<e){yield t;return}let i=0,r;for(;i<n;)r=i+e,yield t.slice(i,r),i=r},dM=async function*(t,e,n){for await(const i of t)yield*fM(ArrayBuffer.isView(i)?i:await n(String(i)),e)},Am=(t,e,n,i,r)=>{const s=dM(t,e,r);let o=0;return new ReadableStream({type:"bytes",async pull(a){const{done:l,value:c}=await s.next();if(l){a.close(),i();return}let u=c.byteLength;n&&n(o+=u),a.enqueue(new Uint8Array(c))},cancel(a){return i(a),s.return()}},{highWaterMark:2})},Rm=(t,e)=>{const n=t!=null;return i=>setTimeout(()=>e({lengthComputable:n,total:t,loaded:i}))},Rc=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Y_=Rc&&typeof ReadableStream=="function",dd=Rc&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),hM=Y_&&(()=>{let t=!1;const e=new Request(Jn.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e})(),Cm=64*1024,hd=Y_&&!!(()=>{try{return j.isReadableStream(new Response("").body)}catch{}})(),Ql={stream:hd&&(t=>t.body)};Rc&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!Ql[e]&&(Ql[e]=j.isFunction(t[e])?n=>n[e]():(n,i)=>{throw new Ne(`Response type '${e}' is not supported`,Ne.ERR_NOT_SUPPORT,i)})})})(new Response);const pM=async t=>{if(t==null)return 0;if(j.isBlob(t))return t.size;if(j.isSpecCompliantForm(t))return(await new Request(t).arrayBuffer()).byteLength;if(j.isArrayBufferView(t))return t.byteLength;if(j.isURLSearchParams(t)&&(t=t+""),j.isString(t))return(await dd(t)).byteLength},mM=async(t,e)=>{const n=j.toFiniteNumber(t.getContentLength());return n??pM(e)},gM=Rc&&(async t=>{let{url:e,method:n,data:i,signal:r,cancelToken:s,timeout:o,onDownloadProgress:a,onUploadProgress:l,responseType:c,headers:u,withCredentials:d="same-origin",fetchOptions:h}=$_(t);c=c?(c+"").toLowerCase():"text";let[m,y]=r||s||o?uM([r,s],o):[],_,p;const f=()=>{!_&&setTimeout(()=>{m&&m.unsubscribe()}),_=!0};let v;try{if(l&&hM&&n!=="get"&&n!=="head"&&(v=await mM(u,i))!==0){let T=new Request(e,{method:"POST",body:i,duplex:"half"}),A;j.isFormData(i)&&(A=T.headers.get("content-type"))&&u.setContentType(A),T.body&&(i=Am(T.body,Cm,Rm(v,Zl(l)),null,dd))}j.isString(d)||(d=d?"cors":"omit"),p=new Request(e,{...h,signal:m,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:i,duplex:"half",withCredentials:d});let g=await fetch(p);const x=hd&&(c==="stream"||c==="response");if(hd&&(a||x)){const T={};["status","statusText","headers"].forEach(P=>{T[P]=g[P]});const A=j.toFiniteNumber(g.headers.get("content-length"));g=new Response(Am(g.body,Cm,a&&Rm(A,Zl(a,!0)),x&&f,dd),T)}c=c||"text";let S=await Ql[j.findKey(Ql,c)||"text"](g,t);return!x&&f(),y&&y(),await new Promise((T,A)=>{j_(T,A,{data:S,headers:ei.from(g.headers),status:g.status,statusText:g.statusText,config:t,request:p})})}catch(g){throw f(),g&&g.name==="TypeError"&&/fetch/i.test(g.message)?Object.assign(new Ne("Network Error",Ne.ERR_NETWORK,t,p),{cause:g.cause||g}):Ne.from(g,g&&g.code,t,p)}}),pd={http:LE,xhr:lM,fetch:gM};j.forEach(pd,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const bm=t=>`- ${t}`,vM=t=>j.isFunction(t)||t===null||t===!1,q_={getAdapter:t=>{t=j.isArray(t)?t:[t];const{length:e}=t;let n,i;const r={};for(let s=0;s<e;s++){n=t[s];let o;if(i=n,!vM(n)&&(i=pd[(o=String(n)).toLowerCase()],i===void 0))throw new Ne(`Unknown adapter '${o}'`);if(i)break;r[o||"#"+s]=i}if(!i){const s=Object.entries(r).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(bm).join(`
`):" "+bm(s[0]):"as no adapter specified";throw new Ne("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return i},adapters:pd};function Nu(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new no(null,t)}function Pm(t){return Nu(t),t.headers=ei.from(t.headers),t.data=Uu.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),q_.getAdapter(t.adapter||Ih.adapter)(t).then(function(i){return Nu(t),i.data=Uu.call(t,t.transformResponse,i),i.headers=ei.from(i.headers),i},function(i){return W_(i)||(Nu(t),i&&i.response&&(i.response.data=Uu.call(t,t.transformResponse,i.response),i.response.headers=ei.from(i.response.headers))),Promise.reject(i)})}const K_="1.7.2",Oh={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Oh[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const Lm={};Oh.transitional=function(e,n,i){function r(s,o){return"[Axios v"+K_+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return(s,o,a)=>{if(e===!1)throw new Ne(r(o," has been removed"+(n?" in "+n:"")),Ne.ERR_DEPRECATED);return n&&!Lm[o]&&(Lm[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};function _M(t,e,n){if(typeof t!="object")throw new Ne("options must be an object",Ne.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new Ne("option "+s+" must be "+l,Ne.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Ne("Unknown option "+s,Ne.ERR_BAD_OPTION)}}const md={assertOptions:_M,validators:Oh},Hi=md.validators;class Jl{constructor(e){this.defaults=e,this.interceptors={request:new Mm,response:new Mm}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let r;Error.captureStackTrace?Error.captureStackTrace(r={}):r=new Error;const s=r.stack?r.stack.replace(/^.+\n/,""):"";try{i.stack?s&&!String(i.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+s):i.stack=s}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=jr(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:s}=n;i!==void 0&&md.assertOptions(i,{silentJSONParsing:Hi.transitional(Hi.boolean),forcedJSONParsing:Hi.transitional(Hi.boolean),clarifyTimeoutError:Hi.transitional(Hi.boolean)},!1),r!=null&&(j.isFunction(r)?n.paramsSerializer={serialize:r}:md.assertOptions(r,{encode:Hi.function,serialize:Hi.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&j.merge(s.common,s[n.method]);s&&j.forEach(["delete","get","head","post","put","patch","common"],y=>{delete s[y]}),n.headers=ei.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(_){typeof _.runWhen=="function"&&_.runWhen(n)===!1||(l=l&&_.synchronous,a.unshift(_.fulfilled,_.rejected))});const c=[];this.interceptors.response.forEach(function(_){c.push(_.fulfilled,_.rejected)});let u,d=0,h;if(!l){const y=[Pm.bind(this),void 0];for(y.unshift.apply(y,a),y.push.apply(y,c),h=y.length,u=Promise.resolve(n);d<h;)u=u.then(y[d++],y[d++]);return u}h=a.length;let m=n;for(d=0;d<h;){const y=a[d++],_=a[d++];try{m=y(m)}catch(p){_.call(this,p);break}}try{u=Pm.call(this,m)}catch(y){return Promise.reject(y)}for(d=0,h=c.length;d<h;)u=u.then(c[d++],c[d++]);return u}getUri(e){e=jr(this.defaults,e);const n=X_(e.baseURL,e.url);return H_(n,e.params,e.paramsSerializer)}}j.forEach(["delete","get","head","options"],function(e){Jl.prototype[e]=function(n,i){return this.request(jr(i||{},{method:e,url:n,data:(i||{}).data}))}});j.forEach(["post","put","patch"],function(e){function n(i){return function(s,o,a){return this.request(jr(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Jl.prototype[e]=n(),Jl.prototype[e+"Form"]=n(!0)});const El=Jl;class Fh{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const o=new Promise(a=>{i.subscribe(a),s=a}).then(r);return o.cancel=function(){i.unsubscribe(s)},o},e(function(s,o,a){i.reason||(i.reason=new no(s,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new Fh(function(r){e=r}),cancel:e}}}const yM=Fh;function xM(t){return function(n){return t.apply(null,n)}}function SM(t){return j.isObject(t)&&t.isAxiosError===!0}const gd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(gd).forEach(([t,e])=>{gd[e]=t});const EM=gd;function Z_(t){const e=new El(t),n=b_(El.prototype.request,e);return j.extend(n,El.prototype,e,{allOwnKeys:!0}),j.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return Z_(jr(t,r))},n}const Et=Z_(Ih);Et.Axios=El;Et.CanceledError=no;Et.CancelToken=yM;Et.isCancel=W_;Et.VERSION=K_;Et.toFormData=Tc;Et.AxiosError=Ne;Et.Cancel=Et.CanceledError;Et.all=function(e){return Promise.all(e)};Et.spread=xM;Et.isAxiosError=SM;Et.mergeConfig=jr;Et.AxiosHeaders=ei;Et.formToJSON=t=>G_(j.isHTMLForm(t)?new FormData(t):t);Et.getAdapter=q_.getAdapter;Et.HttpStatusCode=EM;Et.default=Et;const MM=Et;/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Q_=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var TM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=ge.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>ge.createElement("svg",{ref:l,...TM,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:Q_("lucide",r),...a},[...o.map(([c,u])=>ge.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fi=(t,e)=>{const n=ge.forwardRef(({className:i,...r},s)=>ge.createElement(AM,{ref:s,iconNode:e,className:Q_(`lucide-${wM(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=Fi("BookOpenCheck",[["path",{d:"M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z",key:"1i8u0n"}],["path",{d:"m16 12 2 2 4-4",key:"mdajum"}],["path",{d:"M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3",key:"jb5l51"}]]);/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM=Fi("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=Fi("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=Fi("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=Fi("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=Fi("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=Fi("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=Fi("Thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=Fi("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),OM=new Map([["0","Unknown"],["1000","Clear"],["1100","Mostly Clear"],["1101","Partly Cloudy"],["1102","Mostly Cloudy"],["1001","Cloudy"],["2000","Fog"],["2100","Fog Light"],["4000","Drizzle"],["4001","Rain"],["4200","Rain Light"],["4201","Rain Heavy"],["5000","Snow"],["5001","Flurries"],["5100","Snow Light"],["5101","Snow Heavy"],["6000","Freezing Rain Drizzle"],["6001","Freezing Rain"],["6200","Freezing Rain Light"],["6201","Freezing Rain Heavy"],["7000","Ice Pellets"],["7101","Ice Pellets Heavy"],["7102","Ice Pellets Light"],["8000","Thunderstorm"]]),vd=new Map;function FM(t,e){const n=parseInt(t),i=n*10+1,r=e.toLowerCase().replace(/ /g,"_");vd.set(n,`${n*10}_${r}_small.png`),vd.set(i,`${i}_${r}_small.png`)}OM.forEach((t,e)=>{FM(e,t)});const _d=new Date,kM="https://api.tomorrow.io/v4/timelines",zM="XqcA1V7gG3blEcKCq8nEFNXjDzsBqqSR",BM=[42.63496561409271,-73.68988401705542],HM=["1d"],VM=_d.toISOString();function GM(t,e){switch(e.type){case"SET_WEATHER_CODE":return{...t,weatherCode:e.payload};case"RESET":return{weatherCode:0};default:return t}}const WM=({weatherID:t})=>{const[e,n]=ge.useState(null),[i,r]=ge.useReducer(GM,{weatherCode:0}),[s,o]=ge.useState(!1),a=async()=>{try{const c=await MM.post(`${kM}?apikey=${zM}`,{location:BM,fields:["temperature","weatherCode"],units:"imperial",timesteps:HM,startTime:VM});o(!0),n(c.data.data.timelines[0].intervals[0].values.temperature);let u=c.data.data.timelines[0].intervals[0].values.weatherCode;(_d.getHours()>=19||_d.getHours()<7)&&u%1e4===0&&(u+=1),r({type:"SET_WEATHER_CODE",payload:u})}catch(c){console.error("Error retrieving weather data:",c)}};ge.useEffect(()=>{s||a()},[s]);const l=c=>vd.get(c)||"0_unknown_small.png";return Z.jsxs("div",{className:"location-container",children:[Z.jsx("div",{className:"location-background"}),Z.jsxs("div",{id:t,className:"location-item",children:[Z.jsx("span",{className:"location-icon",children:Z.jsx(UM,{size:18})}),Z.jsx("span",{className:"location-text",children:"Leo's Location"})]}),Z.jsxs("div",{className:"location-item",children:[Z.jsx("span",{className:"location-icon",children:Z.jsx(NM,{size:18})}),Z.jsx("span",{className:"location-text",children:e!==null?`${Math.round(e)}°F`:"Loading..."})]}),Z.jsx("div",{className:"location-item",children:Z.jsx("img",{className:"weather-icon",src:`/assets/weatherAssets/${l(i.weatherCode)}`,alt:"Weather"})})]})};const jM=({itemStyle:t,navStyle:e,items:n})=>{const[i,r]=ge.useState(null),s=a=>{switch(a.toLowerCase()){case"about":return Z.jsx(IM,{size:18});case"tech stack":return Z.jsx(CM,{size:18});case"research":return Z.jsx(RM,{size:18});case"projects":return Z.jsx(LM,{size:18});case"linkedin":return Z.jsx(DM,{size:18});case"github":return Z.jsx(PM,{size:18});case"resume":return Z.jsx(bM,{size:18});default:return null}},o=a=>{r(a.label),a.onClick?a.onClick():a.href&&(a.external?window.open(a.href,"_blank"):window.location.href=a.href)};return ge.useEffect(()=>{const a=()=>{const l=window.scrollY,c=window.innerHeight;document.querySelectorAll("section").forEach(d=>{const h=d.offsetTop,m=d.clientHeight;l>=h-c/2&&l<h+m-c/2&&r(d.id)})};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]),Z.jsxs("nav",{className:`navbar-container ${e}`,children:[Z.jsx("div",{className:"navbar-background"}),n.map((a,l)=>Z.jsxs("a",{className:`${t} navbar-item ${i===a.label?"active":""}`,onClick:()=>o(a),href:a.href,target:a.external?"_blank":void 0,rel:a.external?"noopener noreferrer":void 0,children:[Z.jsx("span",{className:"navbar-icon",children:s(a.label)}),Z.jsx("span",{className:"navbar-text",children:a.label}),Z.jsx("div",{className:"navbar-item-background"})]},`${l}_nav`))]})};const XM=({style:t})=>{const e=[{label:"About",onClick:()=>n("about-me-section")},{label:"Tech Stack",onClick:()=>n("tech-stack-section")},{label:"Research",onClick:()=>n("research-section")},{label:"Projects",onClick:()=>n("projects-section")},{label:"LinkedIn",href:"https://linkedin.com/in/leonardojim",external:!0},{label:"GitHub",href:"https://github.com/leoqode",external:!0}],n=i=>{const r=document.querySelector(`.${i}`);r&&r.scrollIntoView({behavior:"smooth",block:"center"})};return Z.jsx("header",{className:`${t} cool-header`,children:Z.jsxs("div",{className:"header-content",children:[Z.jsx("div",{className:"header-left",children:Z.jsx(WM,{weatherID:"header_weather"})}),Z.jsx("div",{className:"header-center",children:Z.jsx(jM,{navStyle:"header-nav",itemStyle:"header-nav-item",items:e})}),Z.jsx("div",{className:"header-right",children:Z.jsx(XS,{id:"header_date_cmp",headerStyle:"header-cmps"})})]})})};const $M=()=>{const t=":) Hi! My name is...",e="Leonardo",[n,i]=ge.useState(0),[r,s]=ge.useState(0),[o,a]=ge.useState([]),[l,c]=ge.useState([]),[u,d]=ge.useState(!1);ge.useEffect(()=>{let y;const _=()=>{a(p=>[...p,t[n]]),i(p=>p+1)};if(n<t.length)y=setTimeout(_,150);else{const p=()=>{c(f=>[...f,e[r]]),s(f=>f+1)};r-3<=e.length?y=setTimeout(p,350):r===l.length&&(d(!0),y=setTimeout(()=>{c([]),s(0),a([]),i(0),d(!1)},7e3))}return()=>clearTimeout(y)},[n,r]);const h=o.join(""),m=l.map((y,_)=>Z.jsx("div",{className:u?`anim-letter-${_}`:`letter-${_}`,children:y},_));return Z.jsxs("div",{className:"landing-main",children:[Z.jsx("p",{id:"landing_p_intro",children:h}),Z.jsx("div",{className:"landing-name-wrapper",children:Z.jsx("h1",{id:"landing_name_intro",children:m})})]})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kh="153",Jr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},YM=0,Dm=1,qM=2,J_=1,KM=2,Mi=3,hr=0,fn=1,ui=2,cr=0,Fs=1,yd=2,Um=3,Nm=4,ZM=5,vs=100,QM=101,JM=102,Im=103,Om=104,ew=200,tw=201,nw=202,iw=203,ey=204,ty=205,rw=206,sw=207,ow=208,aw=209,lw=210,cw=0,uw=1,fw=2,xd=3,dw=4,hw=5,pw=6,mw=7,ny=0,gw=1,vw=2,Pi=0,_w=1,yw=2,xw=3,Sw=4,Ew=5,iy=300,$s=301,Ys=302,Sd=303,Ed=304,Cc=306,Md=1e3,qn=1001,wd=1002,en=1003,Fm=1004,Iu=1005,Ln=1006,Mw=1007,na=1008,ur=1009,ww=1010,Tw=1011,zh=1012,ry=1013,Qi=1014,Ji=1015,ia=1016,sy=1017,oy=1018,Or=1020,Aw=1021,Kn=1023,Rw=1024,Cw=1025,Fr=1026,qs=1027,bw=1028,ay=1029,Pw=1030,ly=1031,cy=1033,Ou=33776,Fu=33777,ku=33778,zu=33779,km=35840,zm=35841,Bm=35842,Hm=35843,Lw=36196,Vm=37492,Gm=37496,Wm=37808,jm=37809,Xm=37810,$m=37811,Ym=37812,qm=37813,Km=37814,Zm=37815,Qm=37816,Jm=37817,e0=37818,t0=37819,n0=37820,i0=37821,Bu=36492,Dw=36283,r0=36284,s0=36285,o0=36286,uy=3e3,kr=3001,Uw=3200,Nw=3201,Iw=0,Ow=1,zr="",ke="srgb",mi="srgb-linear",fy="display-p3",Hu=7680,Fw=519,kw=512,zw=513,Bw=514,Hw=515,Vw=516,Gw=517,Ww=518,jw=519,a0=35044,l0="300 es",Td=1035,Ci=2e3,ec=2001;class Zr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vu=Math.PI/180,Ad=180/Math.PI;function ma(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function tn(t,e,n){return Math.max(e,Math.min(n,t))}function Xw(t,e){return(t%e+e)%e}function Gu(t,e,n){return(1-n)*t+n*e}function c0(t){return(t&t-1)===0&&t!==0}function Rd(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Fa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function mn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Oe{constructor(e=0,n=0){Oe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,n,i,r,s,o,a,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],m=i[5],y=i[8],_=r[0],p=r[3],f=r[6],v=r[1],g=r[4],x=r[7],S=r[2],T=r[5],A=r[8];return s[0]=o*_+a*v+l*S,s[3]=o*p+a*g+l*T,s[6]=o*f+a*x+l*A,s[1]=c*_+u*v+d*S,s[4]=c*p+u*g+d*T,s[7]=c*f+u*x+d*A,s[2]=h*_+m*v+y*S,s[5]=h*p+m*g+y*T,s[8]=h*f+m*x+y*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,m=c*s-o*l,y=n*d+i*h+r*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/y;return e[0]=d*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(u*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=m*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Wu.makeScale(e,n)),this}rotate(e){return this.premultiply(Wu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Wu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wu=new He;function dy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ra(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const u0={};function Oo(t){t in u0||(u0[t]=!0,console.warn(t))}function ks(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ju(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const $w=new He().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Yw=new He().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function qw(t){return t.convertSRGBToLinear().applyMatrix3(Yw)}function Kw(t){return t.applyMatrix3($w).convertLinearToSRGB()}const Zw={[mi]:t=>t,[ke]:t=>t.convertSRGBToLinear(),[fy]:qw},Qw={[mi]:t=>t,[ke]:t=>t.convertLinearToSRGB(),[fy]:Kw},Hn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return mi},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Zw[e],r=Qw[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let ts;class hy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ts===void 0&&(ts=ra("canvas")),ts.width=e.width,ts.height=e.height;const i=ts.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ts}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ra("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ks(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ks(n[i]/255)*255):n[i]=ks(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jw=0;class py{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jw++}),this.uuid=ma(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Xu(r[o].image)):s.push(Xu(r[o]))}else s=Xu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Xu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?hy.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eT=0;class dn extends Zr{constructor(e=dn.DEFAULT_IMAGE,n=dn.DEFAULT_MAPPING,i=qn,r=qn,s=Ln,o=na,a=Kn,l=ur,c=dn.DEFAULT_ANISOTROPY,u=zr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eT++}),this.uuid=ma(),this.name="",this.source=new py(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Oo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===kr?ke:zr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==iy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Md:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case wd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Md:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case wd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Oo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ke?kr:uy}set encoding(e){Oo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===kr?ke:zr}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=iy;dn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,n=0,i=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],m=l[5],y=l[9],_=l[2],p=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(y-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(y+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,x=(m+1)/2,S=(f+1)/2,T=(u+h)/4,A=(d+_)/4,P=(y+p)/4;return g>x&&g>S?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=T/i,s=A/i):x>S?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=T/r,s=P/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=A/s,r=P/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-y)*(p-y)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(p-y)/v,this.y=(d-_)/v,this.z=(h-u)/v,this.w=Math.acos((c+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xr extends Zr{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new It(0,0,e,n),this.scissorTest=!1,this.viewport=new It(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Oo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===kr?ke:zr),this.texture=new dn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ln,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new py(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class my extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tT extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $r{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[o+0],m=s[o+1],y=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=y,e[n+3]=_;return}if(d!==_||l!==h||c!==m||u!==y){let p=1-a;const f=l*h+c*m+u*y+d*_,v=f>=0?1:-1,g=1-f*f;if(g>Number.EPSILON){const S=Math.sqrt(g),T=Math.atan2(S,f*v);p=Math.sin(p*T)/S,a=Math.sin(a*T)/S}const x=a*v;if(l=l*p+h*x,c=c*p+m*x,u=u*p+y*x,d=d*p+_*x,p===1-a){const S=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=S,c*=S,u*=S,d*=S}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],h=s[o+1],m=s[o+2],y=s[o+3];return e[n]=a*y+u*d+l*m-c*h,e[n+1]=l*y+u*h+c*d-a*m,e[n+2]=c*y+u*m+a*h-l*d,e[n+3]=u*y-a*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),h=l(i/2),m=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*m*y,this._y=c*m*d-h*u*y,this._z=c*u*y+h*m*d,this._w=c*u*d-h*m*y;break;case"YXZ":this._x=h*u*d+c*m*y,this._y=c*m*d-h*u*y,this._z=c*u*y-h*m*d,this._w=c*u*d+h*m*y;break;case"ZXY":this._x=h*u*d-c*m*y,this._y=c*m*d+h*u*y,this._z=c*u*y+h*m*d,this._w=c*u*d-h*m*y;break;case"ZYX":this._x=h*u*d-c*m*y,this._y=c*m*d+h*u*y,this._z=c*u*y-h*m*d,this._w=c*u*d+h*m*y;break;case"YZX":this._x=h*u*d+c*m*y,this._y=c*m*d+h*u*y,this._z=c*u*y-h*m*d,this._w=c*u*d-h*m*y;break;case"XZY":this._x=h*u*d-c*m*y,this._y=c*m*d-h*u*y,this._z=c*u*y+h*m*d,this._w=c*u*d+h*m*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,n=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(f0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(f0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*n+o*r-a*i,u=l*i+a*n-s*r,d=l*r+s*i-o*n,h=-s*n-o*i-a*r;return this.x=c*l+h*-s+u*-a-d*-o,this.y=u*l+h*-o+d*-s-c*-a,this.z=d*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $u.copy(this).projectOnVector(e),this.sub($u)}reflect(e){return this.sub($u.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $u=new I,f0=new $r;class ga{constructor(e=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(_i.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(_i.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=_i.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ns.copy(e.boundingBox),ns.applyMatrix4(e.matrixWorld),this.union(ns);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)_i.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(_i)}else r.boundingBox===null&&r.computeBoundingBox(),ns.copy(r.boundingBox),ns.applyMatrix4(e.matrixWorld),this.union(ns)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(go),ka.subVectors(this.max,go),is.subVectors(e.a,go),rs.subVectors(e.b,go),ss.subVectors(e.c,go),Vi.subVectors(rs,is),Gi.subVectors(ss,rs),Sr.subVectors(is,ss);let n=[0,-Vi.z,Vi.y,0,-Gi.z,Gi.y,0,-Sr.z,Sr.y,Vi.z,0,-Vi.x,Gi.z,0,-Gi.x,Sr.z,0,-Sr.x,-Vi.y,Vi.x,0,-Gi.y,Gi.x,0,-Sr.y,Sr.x,0];return!Yu(n,is,rs,ss,ka)||(n=[1,0,0,0,1,0,0,0,1],!Yu(n,is,rs,ss,ka))?!1:(za.crossVectors(Vi,Gi),n=[za.x,za.y,za.z],Yu(n,is,rs,ss,ka))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vi=[new I,new I,new I,new I,new I,new I,new I,new I],_i=new I,ns=new ga,is=new I,rs=new I,ss=new I,Vi=new I,Gi=new I,Sr=new I,go=new I,ka=new I,za=new I,Er=new I;function Yu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Er.fromArray(t,s);const a=r.x*Math.abs(Er.x)+r.y*Math.abs(Er.y)+r.z*Math.abs(Er.z),l=e.dot(Er),c=n.dot(Er),u=i.dot(Er);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const nT=new ga,vo=new I,qu=new I;class Bh{constructor(e=new I,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):nT.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vo.subVectors(e,this.center);const n=vo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(vo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vo.copy(e.center).add(qu)),this.expandByPoint(vo.copy(e.center).sub(qu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yi=new I,Ku=new I,Ba=new I,Wi=new I,Zu=new I,Ha=new I,Qu=new I;class gy{constructor(e=new I,n=new I(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=yi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,n),yi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ku.copy(e).add(n).multiplyScalar(.5),Ba.copy(n).sub(e).normalize(),Wi.copy(this.origin).sub(Ku);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ba),a=Wi.dot(this.direction),l=-Wi.dot(Ba),c=Wi.lengthSq(),u=Math.abs(1-o*o);let d,h,m,y;if(u>0)if(d=o*l-a,h=o*a-l,y=s*u,d>=0)if(h>=-y)if(h<=y){const _=1/u;d*=_,h*=_,m=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h<=-y?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c):h<=y?(d=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ku).addScaledVector(Ba,h),m}intersectSphere(e,n){yi.subVectors(e.center,this.origin);const i=yi.dot(this.direction),r=yi.dot(yi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,n,i,r,s){Zu.subVectors(n,e),Ha.subVectors(i,e),Qu.crossVectors(Zu,Ha);let o=this.direction.dot(Qu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wi.subVectors(this.origin,e);const l=a*this.direction.dot(Ha.crossVectors(Wi,Ha));if(l<0)return null;const c=a*this.direction.dot(Zu.cross(Wi));if(c<0||l+c>o)return null;const u=-a*Wi.dot(Qu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,n,i,r,s,o,a,l,c,u,d,h,m,y,_,p){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,h,m,y,_,p)}set(e,n,i,r,s,o,a,l,c,u,d,h,m,y,_,p){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=m,f[7]=y,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/os.setFromMatrixColumn(e,0).length(),s=1/os.setFromMatrixColumn(e,1).length(),o=1/os.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,m=o*d,y=a*u,_=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=m+y*c,n[5]=h-_*c,n[9]=-a*l,n[2]=_-h*c,n[6]=y+m*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*d,y=c*u,_=c*d;n[0]=h+_*a,n[4]=y*a-m,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=m*a-y,n[6]=_+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*d,y=c*u,_=c*d;n[0]=h-_*a,n[4]=-o*d,n[8]=y+m*a,n[1]=m+y*a,n[5]=o*u,n[9]=_-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*d,y=a*u,_=a*d;n[0]=l*u,n[4]=y*c-m,n[8]=h*c+_,n[1]=l*d,n[5]=_*c+h,n[9]=m*c-y,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,y=a*l,_=a*c;n[0]=l*u,n[4]=_-h*d,n[8]=y*d+m,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=m*d+y,n[10]=h-_*d}else if(e.order==="XZY"){const h=o*l,m=o*c,y=a*l,_=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+_,n[5]=o*u,n[9]=m*d-y,n[2]=y*d-m,n[6]=a*u,n[10]=_*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iT,e,rT)}lookAt(e,n,i){const r=this.elements;return gn.subVectors(e,n),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),ji.crossVectors(i,gn),ji.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),ji.crossVectors(i,gn)),ji.normalize(),Va.crossVectors(gn,ji),r[0]=ji.x,r[4]=Va.x,r[8]=gn.x,r[1]=ji.y,r[5]=Va.y,r[9]=gn.y,r[2]=ji.z,r[6]=Va.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],m=i[13],y=i[2],_=i[6],p=i[10],f=i[14],v=i[3],g=i[7],x=i[11],S=i[15],T=r[0],A=r[4],P=r[8],E=r[12],R=r[1],X=r[5],ne=r[9],F=r[13],B=r[2],H=r[6],ee=r[10],$=r[14],D=r[3],G=r[7],z=r[11],ce=r[15];return s[0]=o*T+a*R+l*B+c*D,s[4]=o*A+a*X+l*H+c*G,s[8]=o*P+a*ne+l*ee+c*z,s[12]=o*E+a*F+l*$+c*ce,s[1]=u*T+d*R+h*B+m*D,s[5]=u*A+d*X+h*H+m*G,s[9]=u*P+d*ne+h*ee+m*z,s[13]=u*E+d*F+h*$+m*ce,s[2]=y*T+_*R+p*B+f*D,s[6]=y*A+_*X+p*H+f*G,s[10]=y*P+_*ne+p*ee+f*z,s[14]=y*E+_*F+p*$+f*ce,s[3]=v*T+g*R+x*B+S*D,s[7]=v*A+g*X+x*H+S*G,s[11]=v*P+g*ne+x*ee+S*z,s[15]=v*E+g*F+x*$+S*ce,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],m=e[14],y=e[3],_=e[7],p=e[11],f=e[15];return y*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*m-i*l*m)+_*(+n*l*m-n*c*h+s*o*h-r*o*m+r*c*u-s*l*u)+p*(+n*c*d-n*a*m-s*o*d+i*o*m+s*a*u-i*c*u)+f*(-r*a*u-n*l*d+n*a*h+r*o*d-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],m=e[11],y=e[12],_=e[13],p=e[14],f=e[15],v=d*p*c-_*h*c+_*l*m-a*p*m-d*l*f+a*h*f,g=y*h*c-u*p*c-y*l*m+o*p*m+u*l*f-o*h*f,x=u*_*c-y*d*c+y*a*m-o*_*m-u*a*f+o*d*f,S=y*d*l-u*_*l-y*a*h+o*_*h+u*a*p-o*d*p,T=n*v+i*g+r*x+s*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=v*A,e[1]=(_*h*s-d*p*s-_*r*m+i*p*m+d*r*f-i*h*f)*A,e[2]=(a*p*s-_*l*s+_*r*c-i*p*c-a*r*f+i*l*f)*A,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*m-i*l*m)*A,e[4]=g*A,e[5]=(u*p*s-y*h*s+y*r*m-n*p*m-u*r*f+n*h*f)*A,e[6]=(y*l*s-o*p*s-y*r*c+n*p*c+o*r*f-n*l*f)*A,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*m+n*l*m)*A,e[8]=x*A,e[9]=(y*d*s-u*_*s-y*i*m+n*_*m+u*i*f-n*d*f)*A,e[10]=(o*_*s-y*a*s+y*i*c-n*_*c-o*i*f+n*a*f)*A,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*m-n*a*m)*A,e[12]=S*A,e[13]=(u*_*r-y*d*r+y*i*h-n*_*h-u*i*p+n*d*p)*A,e[14]=(y*a*r-o*_*r-y*i*l+n*_*l+o*i*p-n*a*p)*A,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*h+n*a*h)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,h=s*c,m=s*u,y=s*d,_=o*u,p=o*d,f=a*d,v=l*c,g=l*u,x=l*d,S=i.x,T=i.y,A=i.z;return r[0]=(1-(_+f))*S,r[1]=(m+x)*S,r[2]=(y-g)*S,r[3]=0,r[4]=(m-x)*T,r[5]=(1-(h+f))*T,r[6]=(p+v)*T,r[7]=0,r[8]=(y+g)*A,r[9]=(p-v)*A,r[10]=(1-(h+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=os.set(r[0],r[1],r[2]).length();const o=os.set(r[4],r[5],r[6]).length(),a=os.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Vn.copy(this);const c=1/s,u=1/o,d=1/a;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=u,Vn.elements[5]*=u,Vn.elements[6]*=u,Vn.elements[8]*=d,Vn.elements[9]*=d,Vn.elements[10]*=d,n.setFromRotationMatrix(Vn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ci){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let m,y;if(a===Ci)m=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===ec)m=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ci){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),h=(n+e)*c,m=(i+r)*u;let y,_;if(a===Ci)y=(o+s)*d,_=-2*d;else if(a===ec)y=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const os=new I,Vn=new Rt,iT=new I(0,0,0),rT=new I(1,1,1),ji=new I,Va=new I,gn=new I,d0=new Rt,h0=new $r;class bc{constructor(e=0,n=0,i=0,r=bc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return d0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(d0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return h0.setFromEuler(this),this.setFromQuaternion(h0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bc.DEFAULT_ORDER="XYZ";class Hh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sT=0;const p0=new I,as=new $r,xi=new Rt,Ga=new I,_o=new I,oT=new I,aT=new $r,m0=new I(1,0,0),g0=new I(0,1,0),v0=new I(0,0,1),lT={type:"added"},_0={type:"removed"};class Yt extends Zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sT++}),this.uuid=ma(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new I,n=new bc,i=new $r,r=new I(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new He}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Hh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return as.setFromAxisAngle(e,n),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,n){return as.setFromAxisAngle(e,n),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(m0,e)}rotateY(e){return this.rotateOnAxis(g0,e)}rotateZ(e){return this.rotateOnAxis(v0,e)}translateOnAxis(e,n){return p0.copy(e).applyQuaternion(this.quaternion),this.position.add(p0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(m0,e)}translateY(e){return this.translateOnAxis(g0,e)}translateZ(e){return this.translateOnAxis(v0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ga.copy(e):Ga.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),_o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(_o,Ga,this.up):xi.lookAt(Ga,_o,this.up),this.quaternion.setFromRotationMatrix(xi),r&&(xi.extractRotation(r.matrixWorld),as.setFromRotationMatrix(xi),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(lT)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(_0)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(_0)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,e,oT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,aT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),m=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Yt.DEFAULT_UP=new I(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gn=new I,Si=new I,Ju=new I,Ei=new I,ls=new I,cs=new I,y0=new I,ef=new I,tf=new I,nf=new I;let Wa=!1;class Yn{constructor(e=new I,n=new I,i=new I){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Gn.subVectors(e,n),r.cross(Gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Gn.subVectors(r,n),Si.subVectors(i,n),Ju.subVectors(e,n);const o=Gn.dot(Gn),a=Gn.dot(Si),l=Gn.dot(Ju),c=Si.dot(Si),u=Si.dot(Ju),d=o*c-a*a;if(d===0)return s.set(-2,-1,-1);const h=1/d,m=(c*l-a*u)*h,y=(o*u-a*l)*h;return s.set(1-m-y,y,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ei),Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getUV(e,n,i,r,s,o,a,l){return Wa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wa=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ei),l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(o,Ei.y),l.addScaledVector(a,Ei.z),l}static isFrontFacing(e,n,i,r){return Gn.subVectors(i,n),Si.subVectors(e,n),Gn.cross(Si).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Gn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Yn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Wa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wa=!0),Yn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Yn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ls.subVectors(r,i),cs.subVectors(s,i),ef.subVectors(e,i);const l=ls.dot(ef),c=cs.dot(ef);if(l<=0&&c<=0)return n.copy(i);tf.subVectors(e,r);const u=ls.dot(tf),d=cs.dot(tf);if(u>=0&&d<=u)return n.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(ls,o);nf.subVectors(e,s);const m=ls.dot(nf),y=cs.dot(nf);if(y>=0&&m<=y)return n.copy(s);const _=m*c-l*y;if(_<=0&&c>=0&&y<=0)return a=c/(c-y),n.copy(i).addScaledVector(cs,a);const p=u*y-m*d;if(p<=0&&d-u>=0&&m-y>=0)return y0.subVectors(s,r),a=(d-u)/(d-u+(m-y)),n.copy(r).addScaledVector(y0,a);const f=1/(p+_+h);return o=_*f,a=h*f,n.copy(i).addScaledVector(ls,o).addScaledVector(cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let cT=0;class Pc extends Zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cT++}),this.uuid=ma(),this.name="",this.type="Material",this.blending=Fs,this.side=hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ey,this.blendDst=ty,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=xd,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fw,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hu,this.stencilZFail=Hu,this.stencilZPass=Hu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(i.blending=this.blending),this.side!==hr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const vy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},ja={h:0,s:0,l:0};function rf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ke){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Hn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Hn.workingColorSpace){return this.r=e,this.g=n,this.b=i,Hn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Hn.workingColorSpace){if(e=Xw(e,1),n=tn(n,0,1),i=tn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=rf(o,s,e+1/3),this.g=rf(o,s,e),this.b=rf(o,s,e-1/3)}return Hn.toWorkingColorSpace(this,r),this}setStyle(e,n=ke){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ke){const i=vy[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}copyLinearToSRGB(e){return this.r=ju(e.r),this.g=ju(e.g),this.b=ju(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ke){return Hn.fromWorkingColorSpace(jt.copy(this),e),Math.round(tn(jt.r*255,0,255))*65536+Math.round(tn(jt.g*255,0,255))*256+Math.round(tn(jt.b*255,0,255))}getHexString(e=ke){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Hn.workingColorSpace){Hn.fromWorkingColorSpace(jt.copy(this),n);const i=jt.r,r=jt.g,s=jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Hn.workingColorSpace){return Hn.fromWorkingColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=ke){Hn.fromWorkingColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,r=jt.b;return e!==ke?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Wn),Wn.h+=e,Wn.s+=n,Wn.l+=i,this.setHSL(Wn.h,Wn.s,Wn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Wn),e.getHSL(ja);const i=Gu(Wn.h,ja.h,n),r=Gu(Wn.s,ja.s,n),s=Gu(Wn.l,ja.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new qe;qe.NAMES=vy;class Fo extends Pc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ny,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new I,Xa=new Oe;class hi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=a0,this.updateRange={offset:0,count:-1},this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Xa.fromBufferAttribute(this,n),Xa.applyMatrix3(e),this.setXY(n,Xa.x,Xa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Fa(n,this.array)),n}setX(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Fa(n,this.array)),n}setY(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Fa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Fa(n,this.array)),n}setW(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array),r=mn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array),r=mn(r,this.array),s=mn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==a0&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class _y extends hi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class yy extends hi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class En extends hi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let uT=0;const Cn=new Rt,sf=new Yt,us=new I,vn=new ga,yo=new ga,Dt=new I;class ki extends Zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uT++}),this.uuid=ma(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dy(e)?yy:_y)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,n,i){return Cn.makeTranslation(e,n,i),this.applyMatrix4(Cn),this}scale(e,n,i){return Cn.makeScale(e,n,i),this.applyMatrix4(Cn),this}lookAt(e){return sf.lookAt(e),sf.updateMatrix(),this.applyMatrix4(sf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new En(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ga);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];yo.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(vn.min,yo.min),vn.expandByPoint(Dt),Dt.addVectors(vn.max,yo.max),vn.expandByPoint(Dt)):(vn.expandByPoint(yo.min),vn.expandByPoint(yo.max))}vn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Dt.fromBufferAttribute(a,c),l&&(us.fromBufferAttribute(e,c),Dt.add(us)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<a;R++)c[R]=new I,u[R]=new I;const d=new I,h=new I,m=new I,y=new Oe,_=new Oe,p=new Oe,f=new I,v=new I;function g(R,X,ne){d.fromArray(r,R*3),h.fromArray(r,X*3),m.fromArray(r,ne*3),y.fromArray(o,R*2),_.fromArray(o,X*2),p.fromArray(o,ne*2),h.sub(d),m.sub(d),_.sub(y),p.sub(y);const F=1/(_.x*p.y-p.x*_.y);isFinite(F)&&(f.copy(h).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(F),v.copy(m).multiplyScalar(_.x).addScaledVector(h,-p.x).multiplyScalar(F),c[R].add(f),c[X].add(f),c[ne].add(f),u[R].add(v),u[X].add(v),u[ne].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let R=0,X=x.length;R<X;++R){const ne=x[R],F=ne.start,B=ne.count;for(let H=F,ee=F+B;H<ee;H+=3)g(i[H+0],i[H+1],i[H+2])}const S=new I,T=new I,A=new I,P=new I;function E(R){A.fromArray(s,R*3),P.copy(A);const X=c[R];S.copy(X),S.sub(A.multiplyScalar(A.dot(X))).normalize(),T.crossVectors(P,X);const F=T.dot(u[R])<0?-1:1;l[R*4]=S.x,l[R*4+1]=S.y,l[R*4+2]=S.z,l[R*4+3]=F}for(let R=0,X=x.length;R<X;++R){const ne=x[R],F=ne.start,B=ne.count;for(let H=F,ee=F+B;H<ee;H+=3)E(i[H+0]),E(i[H+1]),E(i[H+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,d=new I;if(e)for(let h=0,m=e.count;h<m;h+=3){const y=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Dt.fromBufferAttribute(e,n),Dt.normalize(),e.setXYZ(n,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let m=0,y=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*u;for(let f=0;f<u;f++)h[y++]=c[m++]}return new hi(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ki,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const x0=new Rt,Mr=new gy,$a=new Bh,S0=new I,fs=new I,ds=new I,hs=new I,of=new I,Ya=new I,qa=new Oe,Ka=new Oe,Za=new Oe,E0=new I,M0=new I,w0=new I,Qa=new I,Ja=new I;class yn extends Yt{constructor(e=new ki,n=new Fo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ya.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(of.fromBufferAttribute(d,e),o?Ya.addScaledVector(of,u):Ya.addScaledVector(of.sub(n),u))}n.add(Ya)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$a.copy(i.boundingSphere),$a.applyMatrix4(s),Mr.copy(e.ray).recast(e.near),!($a.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere($a,S0)===null||Mr.origin.distanceToSquared(S0)>(e.far-e.near)**2))&&(x0.copy(s).invert(),Mr.copy(e.ray).applyMatrix4(x0),!(i.boundingBox!==null&&Mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Mr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,_=h.length;y<_;y++){const p=h[y],f=o[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let x=v,S=g;x<S;x+=3){const T=a.getX(x),A=a.getX(x+1),P=a.getX(x+2);r=el(this,f,e,i,c,u,d,T,A,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const y=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=y,f=_;p<f;p+=3){const v=a.getX(p),g=a.getX(p+1),x=a.getX(p+2);r=el(this,o,e,i,c,u,d,v,g,x),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,_=h.length;y<_;y++){const p=h[y],f=o[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let x=v,S=g;x<S;x+=3){const T=x,A=x+1,P=x+2;r=el(this,f,e,i,c,u,d,T,A,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const y=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=y,f=_;p<f;p+=3){const v=p,g=p+1,x=p+2;r=el(this,o,e,i,c,u,d,v,g,x),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function fT(t,e,n,i,r,s,o,a){let l;if(e.side===fn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===hr,a),l===null)return null;Ja.copy(a),Ja.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ja);return c<n.near||c>n.far?null:{distance:c,point:Ja.clone(),object:t}}function el(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,fs),t.getVertexPosition(l,ds),t.getVertexPosition(c,hs);const u=fT(t,e,n,i,fs,ds,hs,Qa);if(u){r&&(qa.fromBufferAttribute(r,a),Ka.fromBufferAttribute(r,l),Za.fromBufferAttribute(r,c),u.uv=Yn.getInterpolation(Qa,fs,ds,hs,qa,Ka,Za,new Oe)),s&&(qa.fromBufferAttribute(s,a),Ka.fromBufferAttribute(s,l),Za.fromBufferAttribute(s,c),u.uv1=Yn.getInterpolation(Qa,fs,ds,hs,qa,Ka,Za,new Oe),u.uv2=u.uv1),o&&(E0.fromBufferAttribute(o,a),M0.fromBufferAttribute(o,l),w0.fromBufferAttribute(o,c),u.normal=Yn.getInterpolation(Qa,fs,ds,hs,E0,M0,w0,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new I,materialIndex:0};Yn.getNormal(fs,ds,hs,d.normal),u.face=d}return u}class Yr extends ki{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,m=0;y("z","y","x",-1,-1,i,n,e,o,s,0),y("z","y","x",1,-1,i,n,-e,o,s,1),y("x","z","y",1,1,e,i,n,r,o,2),y("x","z","y",1,-1,e,i,-n,r,o,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new En(c,3)),this.setAttribute("normal",new En(u,3)),this.setAttribute("uv",new En(d,2));function y(_,p,f,v,g,x,S,T,A,P,E){const R=x/A,X=S/P,ne=x/2,F=S/2,B=T/2,H=A+1,ee=P+1;let $=0,D=0;const G=new I;for(let z=0;z<ee;z++){const ce=z*X-F;for(let U=0;U<H;U++){const te=U*R-ne;G[_]=te*v,G[p]=ce*g,G[f]=B,c.push(G.x,G.y,G.z),G[_]=0,G[p]=0,G[f]=T>0?1:-1,u.push(G.x,G.y,G.z),d.push(U/A),d.push(1-z/P),$+=1}}for(let z=0;z<P;z++)for(let ce=0;ce<A;ce++){const U=h+ce+H*z,te=h+ce+H*(z+1),Q=h+(ce+1)+H*(z+1),re=h+(ce+1)+H*z;l.push(U,te,re),l.push(te,Q,re),D+=6}a.addGroup(m,D,E),m+=D,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Qt(t){const e={};for(let n=0;n<t.length;n++){const i=Ks(t[n]);for(const r in i)e[r]=i[r]}return e}function dT(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function xy(t){return t.getRenderTarget()===null?t.outputColorSpace:mi}const hT={clone:Ks,merge:Qt};var pT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends Pc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pT,this.fragmentShader=mT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=dT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Sy extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=Ci}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Dn extends Sy{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ad*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ad*2*Math.atan(Math.tan(Vu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Vu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ps=-90,ms=1;class gT extends Yt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new Dn(ps,ms,e,n);r.layers=this.layers,this.add(r);const s=new Dn(ps,ms,e,n);s.layers=this.layers,this.add(s);const o=new Dn(ps,ms,e,n);o.layers=this.layers,this.add(o);const a=new Dn(ps,ms,e,n);a.layers=this.layers,this.add(a);const l=new Dn(ps,ms,e,n);l.layers=this.layers,this.add(l);const c=new Dn(ps,ms,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ec)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),d=e.toneMapping,h=e.xr.enabled;e.toneMapping=Pi,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(n,c),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Ey extends dn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:$s,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vT extends Xr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Oo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===kr?ke:zr),this.texture=new Ey(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ln}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Yr(5,5,5),s=new Ii({name:"CubemapFromEquirect",uniforms:Ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:cr});s.uniforms.tEquirect.value=n;const o=new yn(r,s),a=n.minFilter;return n.minFilter===na&&(n.minFilter=Ln),new gT(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const af=new I,_T=new I,yT=new He;class Rr{constructor(e=new I(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=af.subVectors(i,n).cross(_T.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(af),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||yT.getNormalMatrix(e),r=this.coplanarPoint(af).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new Bh,tl=new I;class Vh{constructor(e=new Rr,n=new Rr,i=new Rr,r=new Rr,s=new Rr,o=new Rr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ci){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],m=r[8],y=r[9],_=r[10],p=r[11],f=r[12],v=r[13],g=r[14],x=r[15];if(i[0].setComponents(l-s,h-c,p-m,x-f).normalize(),i[1].setComponents(l+s,h+c,p+m,x+f).normalize(),i[2].setComponents(l+o,h+u,p+y,x+v).normalize(),i[3].setComponents(l-o,h-u,p-y,x-v).normalize(),i[4].setComponents(l-a,h-d,p-_,x-g).normalize(),n===Ci)i[5].setComponents(l+a,h+d,p+_,x+g).normalize();else if(n===ec)i[5].setComponents(a,d,_,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){return wr.center.set(0,0,0),wr.radius=.7071067811865476,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(tl.x=r.normal.x>0?e.max.x:e.min.x,tl.y=r.normal.y>0?e.max.y:e.min.y,tl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(tl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function My(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function xT(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const d=c.array,h=c.usage,m=t.createBuffer();t.bindBuffer(u,m),t.bufferData(u,d,h),c.onUploadCallback();let y;if(d instanceof Float32Array)y=t.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=t.SHORT;else if(d instanceof Uint32Array)y=t.UNSIGNED_INT;else if(d instanceof Int32Array)y=t.INT;else if(d instanceof Int8Array)y=t.BYTE;else if(d instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,d){const h=u.array,m=u.updateRange;t.bindBuffer(d,c),m.count===-1?t.bufferSubData(d,0,h):(n?t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,r(c,u)):d.version<c.version&&(s(d.buffer,c,u),d.version=c.version)}return{get:o,remove:a,update:l}}class Gh extends ki{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=n/l,m=[],y=[],_=[],p=[];for(let f=0;f<u;f++){const v=f*h-o;for(let g=0;g<c;g++){const x=g*d-s;y.push(x,-v,0),_.push(0,0,1),p.push(g/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){const g=v+c*f,x=v+c*(f+1),S=v+1+c*(f+1),T=v+1+c*f;m.push(g,x,T),m.push(x,S,T)}this.setIndex(m),this.setAttribute("position",new En(y,3)),this.setAttribute("normal",new En(_,3)),this.setAttribute("uv",new En(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gh(e.width,e.height,e.widthSegments,e.heightSegments)}}var ST=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ET=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MT=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,wT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,AT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RT="vec3 transformed = vec3( position );",CT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,PT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,LT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,DT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,UT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,NT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,IT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,OT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,FT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,zT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,BT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,HT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,VT=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,GT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$T="gl_FragColor = linearToOutputTexel( gl_FragColor );",YT=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,KT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ZT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,QT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,e2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,t2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,n2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,i2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,s2=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,o2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,u2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,f2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,g2=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,v2=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,y2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,x2=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S2=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E2=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,M2=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,w2=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,T2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,R2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,b2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P2=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,L2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,D2=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,U2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,N2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,I2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,O2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,z2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,B2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,H2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,V2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,G2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,X2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,q2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,J2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,rA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,oA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,uA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dA=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hA=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pA=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,_A=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,xA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,EA=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,MA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,wA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,TA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,AA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,CA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PA=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,LA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,IA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,FA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,HA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XA=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$A=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,YA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ze={alphamap_fragment:ST,alphamap_pars_fragment:ET,alphatest_fragment:MT,alphatest_pars_fragment:wT,aomap_fragment:TT,aomap_pars_fragment:AT,begin_vertex:RT,beginnormal_vertex:CT,bsdfs:bT,iridescence_fragment:PT,bumpmap_pars_fragment:LT,clipping_planes_fragment:DT,clipping_planes_pars_fragment:UT,clipping_planes_pars_vertex:NT,clipping_planes_vertex:IT,color_fragment:OT,color_pars_fragment:FT,color_pars_vertex:kT,color_vertex:zT,common:BT,cube_uv_reflection_fragment:HT,defaultnormal_vertex:VT,displacementmap_pars_vertex:GT,displacementmap_vertex:WT,emissivemap_fragment:jT,emissivemap_pars_fragment:XT,encodings_fragment:$T,encodings_pars_fragment:YT,envmap_fragment:qT,envmap_common_pars_fragment:KT,envmap_pars_fragment:ZT,envmap_pars_vertex:QT,envmap_physical_pars_fragment:u2,envmap_vertex:JT,fog_vertex:e2,fog_pars_vertex:t2,fog_fragment:n2,fog_pars_fragment:i2,gradientmap_pars_fragment:r2,lightmap_fragment:s2,lightmap_pars_fragment:o2,lights_lambert_fragment:a2,lights_lambert_pars_fragment:l2,lights_pars_begin:c2,lights_toon_fragment:f2,lights_toon_pars_fragment:d2,lights_phong_fragment:h2,lights_phong_pars_fragment:p2,lights_physical_fragment:m2,lights_physical_pars_fragment:g2,lights_fragment_begin:v2,lights_fragment_maps:_2,lights_fragment_end:y2,logdepthbuf_fragment:x2,logdepthbuf_pars_fragment:S2,logdepthbuf_pars_vertex:E2,logdepthbuf_vertex:M2,map_fragment:w2,map_pars_fragment:T2,map_particle_fragment:A2,map_particle_pars_fragment:R2,metalnessmap_fragment:C2,metalnessmap_pars_fragment:b2,morphcolor_vertex:P2,morphnormal_vertex:L2,morphtarget_pars_vertex:D2,morphtarget_vertex:U2,normal_fragment_begin:N2,normal_fragment_maps:I2,normal_pars_fragment:O2,normal_pars_vertex:F2,normal_vertex:k2,normalmap_pars_fragment:z2,clearcoat_normal_fragment_begin:B2,clearcoat_normal_fragment_maps:H2,clearcoat_pars_fragment:V2,iridescence_pars_fragment:G2,output_fragment:W2,packing:j2,premultiplied_alpha_fragment:X2,project_vertex:$2,dithering_fragment:Y2,dithering_pars_fragment:q2,roughnessmap_fragment:K2,roughnessmap_pars_fragment:Z2,shadowmap_pars_fragment:Q2,shadowmap_pars_vertex:J2,shadowmap_vertex:eA,shadowmask_pars_fragment:tA,skinbase_vertex:nA,skinning_pars_vertex:iA,skinning_vertex:rA,skinnormal_vertex:sA,specularmap_fragment:oA,specularmap_pars_fragment:aA,tonemapping_fragment:lA,tonemapping_pars_fragment:cA,transmission_fragment:uA,transmission_pars_fragment:fA,uv_pars_fragment:dA,uv_pars_vertex:hA,uv_vertex:pA,worldpos_vertex:mA,background_vert:gA,background_frag:vA,backgroundCube_vert:_A,backgroundCube_frag:yA,cube_vert:xA,cube_frag:SA,depth_vert:EA,depth_frag:MA,distanceRGBA_vert:wA,distanceRGBA_frag:TA,equirect_vert:AA,equirect_frag:RA,linedashed_vert:CA,linedashed_frag:bA,meshbasic_vert:PA,meshbasic_frag:LA,meshlambert_vert:DA,meshlambert_frag:UA,meshmatcap_vert:NA,meshmatcap_frag:IA,meshnormal_vert:OA,meshnormal_frag:FA,meshphong_vert:kA,meshphong_frag:zA,meshphysical_vert:BA,meshphysical_frag:HA,meshtoon_vert:VA,meshtoon_frag:GA,points_vert:WA,points_frag:jA,shadow_vert:XA,shadow_frag:$A,sprite_vert:YA,sprite_frag:qA},de={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},oi={basic:{uniforms:Qt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Qt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new qe(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Qt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Qt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Qt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new qe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Qt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Qt([de.points,de.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Qt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Qt([de.common,de.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Qt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Qt([de.sprite,de.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Qt([de.common,de.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Qt([de.lights,de.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};oi.physical={uniforms:Qt([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const nl={r:0,b:0,g:0};function KA(t,e,n,i,r,s,o){const a=new qe(0);let l=s===!0?0:1,c,u,d=null,h=0,m=null;function y(p,f){let v=!1,g=f.isScene===!0?f.background:null;switch(g&&g.isTexture&&(g=(f.backgroundBlurriness>0?n:e).get(g)),g===null?_(a,l):g&&g.isColor&&(_(g,1),v=!0),t.xr.getEnvironmentBlendMode()){case"opaque":v=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),v=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),v=!0;break}(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Cc)?(u===void 0&&(u=new yn(new Yr(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:Ks(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=g.colorSpace!==ke,(d!==g||h!==g.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,d=g,h=g.version,m=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new yn(new Gh(2,2),new Ii({name:"BackgroundMaterial",uniforms:Ks(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:hr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=g.colorSpace!==ke,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||h!==g.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,d=g,h=g.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,f){p.getRGB(nl,xy(t)),i.buffers.color.setClear(nl.r,nl.g,nl.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),l=f,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:y}}function ZA(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function d(B,H,ee,$,D){let G=!1;if(o){const z=_($,ee,H);c!==z&&(c=z,m(c.object)),G=f(B,$,ee,D),G&&v(B,$,ee,D)}else{const z=H.wireframe===!0;(c.geometry!==$.id||c.program!==ee.id||c.wireframe!==z)&&(c.geometry=$.id,c.program=ee.id,c.wireframe=z,G=!0)}D!==null&&n.update(D,t.ELEMENT_ARRAY_BUFFER),(G||u)&&(u=!1,P(B,H,ee,$),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(D).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(B){return i.isWebGL2?t.bindVertexArray(B):s.bindVertexArrayOES(B)}function y(B){return i.isWebGL2?t.deleteVertexArray(B):s.deleteVertexArrayOES(B)}function _(B,H,ee){const $=ee.wireframe===!0;let D=a[B.id];D===void 0&&(D={},a[B.id]=D);let G=D[H.id];G===void 0&&(G={},D[H.id]=G);let z=G[$];return z===void 0&&(z=p(h()),G[$]=z),z}function p(B){const H=[],ee=[],$=[];for(let D=0;D<r;D++)H[D]=0,ee[D]=0,$[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:ee,attributeDivisors:$,object:B,attributes:{},index:null}}function f(B,H,ee,$){const D=c.attributes,G=H.attributes;let z=0;const ce=ee.getAttributes();for(const U in ce)if(ce[U].location>=0){const Q=D[U];let re=G[U];if(re===void 0&&(U==="instanceMatrix"&&B.instanceMatrix&&(re=B.instanceMatrix),U==="instanceColor"&&B.instanceColor&&(re=B.instanceColor)),Q===void 0||Q.attribute!==re||re&&Q.data!==re.data)return!0;z++}return c.attributesNum!==z||c.index!==$}function v(B,H,ee,$){const D={},G=H.attributes;let z=0;const ce=ee.getAttributes();for(const U in ce)if(ce[U].location>=0){let Q=G[U];Q===void 0&&(U==="instanceMatrix"&&B.instanceMatrix&&(Q=B.instanceMatrix),U==="instanceColor"&&B.instanceColor&&(Q=B.instanceColor));const re={};re.attribute=Q,Q&&Q.data&&(re.data=Q.data),D[U]=re,z++}c.attributes=D,c.attributesNum=z,c.index=$}function g(){const B=c.newAttributes;for(let H=0,ee=B.length;H<ee;H++)B[H]=0}function x(B){S(B,0)}function S(B,H){const ee=c.newAttributes,$=c.enabledAttributes,D=c.attributeDivisors;ee[B]=1,$[B]===0&&(t.enableVertexAttribArray(B),$[B]=1),D[B]!==H&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,H),D[B]=H)}function T(){const B=c.newAttributes,H=c.enabledAttributes;for(let ee=0,$=H.length;ee<$;ee++)H[ee]!==B[ee]&&(t.disableVertexAttribArray(ee),H[ee]=0)}function A(B,H,ee,$,D,G,z){z===!0?t.vertexAttribIPointer(B,H,ee,D,G):t.vertexAttribPointer(B,H,ee,$,D,G)}function P(B,H,ee,$){if(i.isWebGL2===!1&&(B.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const D=$.attributes,G=ee.getAttributes(),z=H.defaultAttributeValues;for(const ce in G){const U=G[ce];if(U.location>=0){let te=D[ce];if(te===void 0&&(ce==="instanceMatrix"&&B.instanceMatrix&&(te=B.instanceMatrix),ce==="instanceColor"&&B.instanceColor&&(te=B.instanceColor)),te!==void 0){const Q=te.normalized,re=te.itemSize,ue=n.get(te);if(ue===void 0)continue;const ve=ue.buffer,Pe=ue.type,we=ue.bytesPerElement,it=i.isWebGL2===!0&&(Pe===t.INT||Pe===t.UNSIGNED_INT||te.gpuType===ry);if(te.isInterleavedBufferAttribute){const Ve=te.data,O=Ve.stride,Mt=te.offset;if(Ve.isInstancedInterleavedBuffer){for(let Te=0;Te<U.locationSize;Te++)S(U.location+Te,Ve.meshPerAttribute);B.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ve.meshPerAttribute*Ve.count)}else for(let Te=0;Te<U.locationSize;Te++)x(U.location+Te);t.bindBuffer(t.ARRAY_BUFFER,ve);for(let Te=0;Te<U.locationSize;Te++)A(U.location+Te,re/U.locationSize,Pe,Q,O*we,(Mt+re/U.locationSize*Te)*we,it)}else{if(te.isInstancedBufferAttribute){for(let Ve=0;Ve<U.locationSize;Ve++)S(U.location+Ve,te.meshPerAttribute);B.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Ve=0;Ve<U.locationSize;Ve++)x(U.location+Ve);t.bindBuffer(t.ARRAY_BUFFER,ve);for(let Ve=0;Ve<U.locationSize;Ve++)A(U.location+Ve,re/U.locationSize,Pe,Q,re*we,re/U.locationSize*Ve*we,it)}}else if(z!==void 0){const Q=z[ce];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(U.location,Q);break;case 3:t.vertexAttrib3fv(U.location,Q);break;case 4:t.vertexAttrib4fv(U.location,Q);break;default:t.vertexAttrib1fv(U.location,Q)}}}}T()}function E(){ne();for(const B in a){const H=a[B];for(const ee in H){const $=H[ee];for(const D in $)y($[D].object),delete $[D];delete H[ee]}delete a[B]}}function R(B){if(a[B.id]===void 0)return;const H=a[B.id];for(const ee in H){const $=H[ee];for(const D in $)y($[D].object),delete $[D];delete H[ee]}delete a[B.id]}function X(B){for(const H in a){const ee=a[H];if(ee[B.id]===void 0)continue;const $=ee[B.id];for(const D in $)y($[D].object),delete $[D];delete ee[B.id]}}function ne(){F(),u=!0,c!==l&&(c=l,m(c.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:ne,resetDefaultState:F,dispose:E,releaseStatesOfGeometry:R,releaseStatesOfProgram:X,initAttributes:g,enableAttribute:x,disableUnusedAttributes:T}}function QA(t,e,n,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){t.drawArrays(s,c,u),n.update(u,s,1)}function l(c,u,d){if(d===0)return;let h,m;if(r)h=t,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,u,d),n.update(u,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function JA(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),f=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,x=o||e.has("OES_texture_float"),S=g&&x,T=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:x,floatVertexTextures:S,maxSamples:T}}function e3(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Rr,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,m){const y=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,f=t.get(d);if(!r||y===null||y.length===0||s&&!p)s?u(null):c();else{const v=s?0:i,g=v*4;let x=f.clippingState||null;l.value=x,x=u(y,h,g,m);for(let S=0;S!==g;++S)x[S]=n[S];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,m,y){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,y!==!0||p===null){const f=m+_*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<f)&&(p=new Float32Array(f));for(let g=0,x=m;g!==_;++g,x+=4)o.copy(d[g]).applyMatrix4(v,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function t3(t){let e=new WeakMap;function n(o,a){return a===Sd?o.mapping=$s:a===Ed&&(o.mapping=Ys),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Sd||a===Ed)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new vT(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class wy extends Sy{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ps=4,T0=[.125,.215,.35,.446,.526,.582],br=20,lf=new wy,A0=new qe;let cf=null;const Cr=(1+Math.sqrt(5))/2,gs=1/Cr,R0=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Cr,gs),new I(0,Cr,-gs),new I(gs,0,Cr),new I(-gs,0,Cr),new I(Cr,gs,0),new I(-Cr,gs,0)];class C0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){cf=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=L0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=P0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cf),e.scissorTest=!1,il(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===$s||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cf=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:ia,format:Kn,colorSpace:mi,depthBuffer:!1},r=b0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=b0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=n3(s)),this._blurMaterial=i3(s,e,n)}return r}_compileMaterial(e){const n=new yn(this._lodPlanes[0],e);this._renderer.compile(n,lf)}_sceneToCubeUV(e,n,i,r){const a=new Dn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(A0),u.toneMapping=Pi,u.autoClear=!1;const m=new Fo({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),y=new yn(new Yr,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(A0),_=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):v===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const g=this._cubeSize;il(r,v*g,f>2?g:0,g,g),u.setRenderTarget(r),_&&u.render(y,a),u.render(e,a)}y.geometry.dispose(),y.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===$s||e.mapping===Ys;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=L0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=P0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new yn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;il(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,lf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=R0[(r-1)%R0.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new yn(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*br-1),_=s/y,p=isFinite(s)?1+Math.floor(u*_):br;p>br&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${br}`);const f=[];let v=0;for(let A=0;A<br;++A){const P=A/_,E=Math.exp(-P*P/2);f.push(E),A===0?v+=E:A<p&&(v+=2*E)}for(let A=0;A<f.length;A++)f[A]=f[A]/v;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:g}=this;h.dTheta.value=y,h.mipInt.value=g-i;const x=this._sizeLods[r],S=3*x*(r>g-Ps?r-g+Ps:0),T=4*(this._cubeSize-x);il(n,S,T,3*x,2*x),l.setRenderTarget(n),l.render(d,lf)}}function n3(t){const e=[],n=[],i=[];let r=t;const s=t-Ps+1+T0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ps?l=T0[o-t+Ps-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,y=6,_=3,p=2,f=1,v=new Float32Array(_*y*m),g=new Float32Array(p*y*m),x=new Float32Array(f*y*m);for(let T=0;T<m;T++){const A=T%3*2/3-1,P=T>2?0:-1,E=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];v.set(E,_*y*T),g.set(h,p*y*T);const R=[T,T,T,T,T,T];x.set(R,f*y*T)}const S=new ki;S.setAttribute("position",new hi(v,_)),S.setAttribute("uv",new hi(g,p)),S.setAttribute("faceIndex",new hi(x,f)),e.push(S),r>Ps&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function b0(t,e,n){const i=new Xr(t,e,n);return i.texture.mapping=Cc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function il(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function i3(t,e,n){const i=new Float32Array(br),r=new I(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function P0(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function L0(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Wh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function r3(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Sd||l===Ed,u=l===$s||l===Ys;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new C0(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&r(d)){n===null&&(n=new C0(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function s3(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function o3(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const y in h.attributes)e.remove(h.attributes[y]);for(const y in h.morphAttributes){const _=h.morphAttributes[y];for(let p=0,f=_.length;p<f;p++)e.remove(_[p])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const y in h)e.update(h[y],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const y in m){const _=m[y];for(let p=0,f=_.length;p<f;p++)e.update(_[p],t.ARRAY_BUFFER)}}function c(d){const h=[],m=d.index,y=d.attributes.position;let _=0;if(m!==null){const v=m.array;_=m.version;for(let g=0,x=v.length;g<x;g+=3){const S=v[g+0],T=v[g+1],A=v[g+2];h.push(S,T,T,A,A,S)}}else{const v=y.array;_=y.version;for(let g=0,x=v.length/3-1;g<x;g+=3){const S=g+0,T=g+1,A=g+2;h.push(S,T,T,A,A,S)}}const p=new(dy(h)?yy:_y)(h,1);p.version=_;const f=s.get(d);f&&e.remove(f),s.set(d,p)}function u(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function a3(t,e,n,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,m){t.drawElements(s,m,a,h*l),n.update(m,s,1)}function d(h,m,y){if(y===0)return;let _,p;if(r)_=t,p="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[p](s,m,a,h*l,y),n.update(m,s,y)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d}function l3(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function c3(t,e){return t[0]-e[0]}function u3(t,e){return Math.abs(e[1])-Math.abs(t[1])}function f3(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new It,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const y=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=y!==void 0?y.length:0;let p=s.get(u);if(p===void 0||p.count!==_){let H=function(){F.dispose(),s.delete(u),u.removeEventListener("dispose",H)};var m=H;p!==void 0&&p.texture.dispose();const g=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let E=0;g===!0&&(E=1),x===!0&&(E=2),S===!0&&(E=3);let R=u.attributes.position.count*E,X=1;R>e.maxTextureSize&&(X=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const ne=new Float32Array(R*X*4*_),F=new my(ne,R,X,_);F.type=Ji,F.needsUpdate=!0;const B=E*4;for(let ee=0;ee<_;ee++){const $=T[ee],D=A[ee],G=P[ee],z=R*X*4*ee;for(let ce=0;ce<$.count;ce++){const U=ce*B;g===!0&&(o.fromBufferAttribute($,ce),ne[z+U+0]=o.x,ne[z+U+1]=o.y,ne[z+U+2]=o.z,ne[z+U+3]=0),x===!0&&(o.fromBufferAttribute(D,ce),ne[z+U+4]=o.x,ne[z+U+5]=o.y,ne[z+U+6]=o.z,ne[z+U+7]=0),S===!0&&(o.fromBufferAttribute(G,ce),ne[z+U+8]=o.x,ne[z+U+9]=o.y,ne[z+U+10]=o.z,ne[z+U+11]=G.itemSize===4?o.w:1)}}p={count:_,texture:F,size:new Oe(R,X)},s.set(u,p),u.addEventListener("dispose",H)}let f=0;for(let g=0;g<h.length;g++)f+=h[g];const v=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const y=h===void 0?0:h.length;let _=i[u.id];if(_===void 0||_.length!==y){_=[];for(let x=0;x<y;x++)_[x]=[x,0];i[u.id]=_}for(let x=0;x<y;x++){const S=_[x];S[0]=x,S[1]=h[x]}_.sort(u3);for(let x=0;x<8;x++)x<y&&_[x][1]?(a[x][0]=_[x][0],a[x][1]=_[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(c3);const p=u.morphAttributes.position,f=u.morphAttributes.normal;let v=0;for(let x=0;x<8;x++){const S=a[x],T=S[0],A=S[1];T!==Number.MAX_SAFE_INTEGER&&A?(p&&u.getAttribute("morphTarget"+x)!==p[T]&&u.setAttribute("morphTarget"+x,p[T]),f&&u.getAttribute("morphNormal"+x)!==f[T]&&u.setAttribute("morphNormal"+x,f[T]),r[x]=A,v+=A):(p&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),f&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),r[x]=0)}const g=u.morphTargetsRelative?1:1-v;d.getUniforms().setValue(t,"morphTargetBaseInfluence",g),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function d3(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);return r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER)),d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const Ty=new dn,Ay=new my,Ry=new tT,Cy=new Ey,D0=[],U0=[],N0=new Float32Array(16),I0=new Float32Array(9),O0=new Float32Array(4);function io(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=D0[r];if(s===void 0&&(s=new Float32Array(r),D0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Lc(t,e){let n=U0[e];n===void 0&&(n=new Int32Array(e),U0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function h3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function p3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),bt(n,e)}}function m3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),bt(n,e)}}function g3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),bt(n,e)}}function v3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bt(n,e)}else{if(Ct(n,i))return;O0.set(i),t.uniformMatrix2fv(this.addr,!1,O0),bt(n,i)}}function _3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bt(n,e)}else{if(Ct(n,i))return;I0.set(i),t.uniformMatrix3fv(this.addr,!1,I0),bt(n,i)}}function y3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bt(n,e)}else{if(Ct(n,i))return;N0.set(i),t.uniformMatrix4fv(this.addr,!1,N0),bt(n,i)}}function x3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function S3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),bt(n,e)}}function E3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),bt(n,e)}}function M3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),bt(n,e)}}function w3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function T3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),bt(n,e)}}function A3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),bt(n,e)}}function R3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),bt(n,e)}}function C3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||Ty,r)}function b3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Ry,r)}function P3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Cy,r)}function L3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Ay,r)}function D3(t){switch(t){case 5126:return h3;case 35664:return p3;case 35665:return m3;case 35666:return g3;case 35674:return v3;case 35675:return _3;case 35676:return y3;case 5124:case 35670:return x3;case 35667:case 35671:return S3;case 35668:case 35672:return E3;case 35669:case 35673:return M3;case 5125:return w3;case 36294:return T3;case 36295:return A3;case 36296:return R3;case 35678:case 36198:case 36298:case 36306:case 35682:return C3;case 35679:case 36299:case 36307:return b3;case 35680:case 36300:case 36308:case 36293:return P3;case 36289:case 36303:case 36311:case 36292:return L3}}function U3(t,e){t.uniform1fv(this.addr,e)}function N3(t,e){const n=io(e,this.size,2);t.uniform2fv(this.addr,n)}function I3(t,e){const n=io(e,this.size,3);t.uniform3fv(this.addr,n)}function O3(t,e){const n=io(e,this.size,4);t.uniform4fv(this.addr,n)}function F3(t,e){const n=io(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function k3(t,e){const n=io(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function z3(t,e){const n=io(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function B3(t,e){t.uniform1iv(this.addr,e)}function H3(t,e){t.uniform2iv(this.addr,e)}function V3(t,e){t.uniform3iv(this.addr,e)}function G3(t,e){t.uniform4iv(this.addr,e)}function W3(t,e){t.uniform1uiv(this.addr,e)}function j3(t,e){t.uniform2uiv(this.addr,e)}function X3(t,e){t.uniform3uiv(this.addr,e)}function $3(t,e){t.uniform4uiv(this.addr,e)}function Y3(t,e,n){const i=this.cache,r=e.length,s=Lc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Ty,s[o])}function q3(t,e,n){const i=this.cache,r=e.length,s=Lc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Ry,s[o])}function K3(t,e,n){const i=this.cache,r=e.length,s=Lc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Cy,s[o])}function Z3(t,e,n){const i=this.cache,r=e.length,s=Lc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Ay,s[o])}function Q3(t){switch(t){case 5126:return U3;case 35664:return N3;case 35665:return I3;case 35666:return O3;case 35674:return F3;case 35675:return k3;case 35676:return z3;case 5124:case 35670:return B3;case 35667:case 35671:return H3;case 35668:case 35672:return V3;case 35669:case 35673:return G3;case 5125:return W3;case 36294:return j3;case 36295:return X3;case 36296:return $3;case 35678:case 36198:case 36298:case 36306:case 35682:return Y3;case 35679:case 36299:case 36307:return q3;case 35680:case 36300:case 36308:case 36293:return K3;case 36289:case 36303:case 36311:case 36292:return Z3}}class J3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=D3(n.type)}}class eR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=Q3(n.type)}}class tR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const uf=/(\w+)(\])?(\[|\.)?/g;function F0(t,e){t.seq.push(e),t.map[e.id]=e}function nR(t,e,n){const i=t.name,r=i.length;for(uf.lastIndex=0;;){const s=uf.exec(i),o=uf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){F0(n,c===void 0?new J3(a,t,e):new eR(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new tR(a),F0(n,d)),n=d}}}class Ml{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);nR(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function k0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let iR=0;function rR(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function sR(t){switch(t){case mi:return["Linear","( value )"];case ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function z0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+rR(t.getShaderSource(e),o)}else return r}function oR(t,e){const n=sR(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function aR(t,e){let n;switch(e){case _w:n="Linear";break;case yw:n="Reinhard";break;case xw:n="OptimizedCineon";break;case Sw:n="ACESFilmic";break;case Ew:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function lR(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(To).join(`
`)}function cR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function uR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function To(t){return t!==""}function B0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function H0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cd(t){return t.replace(fR,dR)}function dR(t,e){const n=ze[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Cd(n)}const hR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function V0(t){return t.replace(hR,pR)}function pR(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function G0(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mR(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===J_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===KM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function gR(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case $s:case Ys:e="ENVMAP_TYPE_CUBE";break;case Cc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vR(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function _R(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ny:e="ENVMAP_BLENDING_MULTIPLY";break;case gw:e="ENVMAP_BLENDING_MIX";break;case vw:e="ENVMAP_BLENDING_ADD";break}return e}function yR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function xR(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=mR(n),c=gR(n),u=vR(n),d=_R(n),h=yR(n),m=n.isWebGL2?"":lR(n),y=cR(s),_=r.createProgram();let p,f,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(To).join(`
`),p.length>0&&(p+=`
`),f=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(To).join(`
`),f.length>0&&(f+=`
`)):(p=[G0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(To).join(`
`),f=[m,G0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Pi?"#define TONE_MAPPING":"",n.toneMapping!==Pi?ze.tonemapping_pars_fragment:"",n.toneMapping!==Pi?aR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.encodings_pars_fragment,oR("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(To).join(`
`)),o=Cd(o),o=B0(o,n),o=H0(o,n),a=Cd(a),a=B0(a,n),a=H0(a,n),o=V0(o),a=V0(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",n.glslVersion===l0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===l0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const g=v+p+o,x=v+f+a,S=k0(r,r.VERTEX_SHADER,g),T=k0(r,r.FRAGMENT_SHADER,x);if(r.attachShader(_,S),r.attachShader(_,T),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),t.debug.checkShaderErrors){const E=r.getProgramInfoLog(_).trim(),R=r.getShaderInfoLog(S).trim(),X=r.getShaderInfoLog(T).trim();let ne=!0,F=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(ne=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,S,T);else{const B=z0(r,S,"vertex"),H=z0(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+E+`
`+B+`
`+H)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(R===""||X==="")&&(F=!1);F&&(this.diagnostics={runnable:ne,programLog:E,vertexShader:{log:R,prefix:p},fragmentShader:{log:X,prefix:f}})}r.deleteShader(S),r.deleteShader(T);let A;this.getUniforms=function(){return A===void 0&&(A=new Ml(r,_)),A};let P;return this.getAttributes=function(){return P===void 0&&(P=uR(r,_)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=iR++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=T,this}let SR=0;class ER{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new MR(e),n.set(e,i)),i}}class MR{constructor(e){this.id=SR++,this.code=e,this.usedTimes=0}}function wR(t,e,n,i,r,s,o){const a=new Hh,l=new ER,c=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return E===0?"uv":`uv${E}`}function p(E,R,X,ne,F){const B=ne.fog,H=F.geometry,ee=E.isMeshStandardMaterial?ne.environment:null,$=(E.isMeshStandardMaterial?n:e).get(E.envMap||ee),D=$&&$.mapping===Cc?$.image.height:null,G=y[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const z=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ce=z!==void 0?z.length:0;let U=0;H.morphAttributes.position!==void 0&&(U=1),H.morphAttributes.normal!==void 0&&(U=2),H.morphAttributes.color!==void 0&&(U=3);let te,Q,re,ue;if(G){const vt=oi[G];te=vt.vertexShader,Q=vt.fragmentShader}else te=E.vertexShader,Q=E.fragmentShader,l.update(E),re=l.getVertexShaderID(E),ue=l.getFragmentShaderID(E);const ve=t.getRenderTarget(),Pe=F.isInstancedMesh===!0,we=!!E.map,it=!!E.matcap,Ve=!!$,O=!!E.aoMap,Mt=!!E.lightMap,Te=!!E.bumpMap,Ie=!!E.normalMap,Ae=!!E.displacementMap,nt=!!E.emissiveMap,Be=!!E.metalnessMap,De=!!E.roughnessMap,Ke=E.anisotropy>0,wt=E.clearcoat>0,Pt=E.iridescence>0,C=E.sheen>0,M=E.transmission>0,Y=Ke&&!!E.anisotropyMap,ae=wt&&!!E.clearcoatMap,oe=wt&&!!E.clearcoatNormalMap,b=wt&&!!E.clearcoatRoughnessMap,J=Pt&&!!E.iridescenceMap,se=Pt&&!!E.iridescenceThicknessMap,W=C&&!!E.sheenColorMap,xe=C&&!!E.sheenRoughnessMap,Me=!!E.specularMap,Ee=!!E.specularColorMap,Se=!!E.specularIntensityMap,_e=M&&!!E.transmissionMap,Ce=M&&!!E.thicknessMap,je=!!E.gradientMap,L=!!E.alphaMap,he=E.alphaTest>0,V=!!E.extensions,fe=!!H.attributes.uv1,pe=!!H.attributes.uv2,Ye=!!H.attributes.uv3;return{isWebGL2:u,shaderID:G,shaderType:E.type,shaderName:E.name,vertexShader:te,fragmentShader:Q,defines:E.defines,customVertexShaderID:re,customFragmentShaderID:ue,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,instancing:Pe,instancingColor:Pe&&F.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:ve===null?t.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:mi,map:we,matcap:it,envMap:Ve,envMapMode:Ve&&$.mapping,envMapCubeUVHeight:D,aoMap:O,lightMap:Mt,bumpMap:Te,normalMap:Ie,displacementMap:h&&Ae,emissiveMap:nt,normalMapObjectSpace:Ie&&E.normalMapType===Ow,normalMapTangentSpace:Ie&&E.normalMapType===Iw,metalnessMap:Be,roughnessMap:De,anisotropy:Ke,anisotropyMap:Y,clearcoat:wt,clearcoatMap:ae,clearcoatNormalMap:oe,clearcoatRoughnessMap:b,iridescence:Pt,iridescenceMap:J,iridescenceThicknessMap:se,sheen:C,sheenColorMap:W,sheenRoughnessMap:xe,specularMap:Me,specularColorMap:Ee,specularIntensityMap:Se,transmission:M,transmissionMap:_e,thicknessMap:Ce,gradientMap:je,opaque:E.transparent===!1&&E.blending===Fs,alphaMap:L,alphaTest:he,combine:E.combine,mapUv:we&&_(E.map.channel),aoMapUv:O&&_(E.aoMap.channel),lightMapUv:Mt&&_(E.lightMap.channel),bumpMapUv:Te&&_(E.bumpMap.channel),normalMapUv:Ie&&_(E.normalMap.channel),displacementMapUv:Ae&&_(E.displacementMap.channel),emissiveMapUv:nt&&_(E.emissiveMap.channel),metalnessMapUv:Be&&_(E.metalnessMap.channel),roughnessMapUv:De&&_(E.roughnessMap.channel),anisotropyMapUv:Y&&_(E.anisotropyMap.channel),clearcoatMapUv:ae&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:oe&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:b&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:se&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:W&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:xe&&_(E.sheenRoughnessMap.channel),specularMapUv:Me&&_(E.specularMap.channel),specularColorMapUv:Ee&&_(E.specularColorMap.channel),specularIntensityMapUv:Se&&_(E.specularIntensityMap.channel),transmissionMapUv:_e&&_(E.transmissionMap.channel),thicknessMapUv:Ce&&_(E.thicknessMap.channel),alphaMapUv:L&&_(E.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ie||Ke),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:fe,vertexUv2s:pe,vertexUv3s:Ye,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(we||L),fog:!!B,useFog:E.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:F.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:U,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&X.length>0,shadowMapType:t.shadowMap.type,toneMapping:E.toneMapped?t.toneMapping:Pi,useLegacyLights:t.useLegacyLights,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ui,flipSided:E.side===fn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:V&&E.extensions.derivatives===!0,extensionFragDepth:V&&E.extensions.fragDepth===!0,extensionDrawBuffers:V&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:V&&E.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:E.customProgramCacheKey()}}function f(E){const R=[];if(E.shaderID?R.push(E.shaderID):(R.push(E.customVertexShaderID),R.push(E.customFragmentShaderID)),E.defines!==void 0)for(const X in E.defines)R.push(X),R.push(E.defines[X]);return E.isRawShaderMaterial===!1&&(v(R,E),g(R,E),R.push(t.outputColorSpace)),R.push(E.customProgramCacheKey),R.join()}function v(E,R){E.push(R.precision),E.push(R.outputColorSpace),E.push(R.envMapMode),E.push(R.envMapCubeUVHeight),E.push(R.mapUv),E.push(R.alphaMapUv),E.push(R.lightMapUv),E.push(R.aoMapUv),E.push(R.bumpMapUv),E.push(R.normalMapUv),E.push(R.displacementMapUv),E.push(R.emissiveMapUv),E.push(R.metalnessMapUv),E.push(R.roughnessMapUv),E.push(R.anisotropyMapUv),E.push(R.clearcoatMapUv),E.push(R.clearcoatNormalMapUv),E.push(R.clearcoatRoughnessMapUv),E.push(R.iridescenceMapUv),E.push(R.iridescenceThicknessMapUv),E.push(R.sheenColorMapUv),E.push(R.sheenRoughnessMapUv),E.push(R.specularMapUv),E.push(R.specularColorMapUv),E.push(R.specularIntensityMapUv),E.push(R.transmissionMapUv),E.push(R.thicknessMapUv),E.push(R.combine),E.push(R.fogExp2),E.push(R.sizeAttenuation),E.push(R.morphTargetsCount),E.push(R.morphAttributeCount),E.push(R.numDirLights),E.push(R.numPointLights),E.push(R.numSpotLights),E.push(R.numSpotLightMaps),E.push(R.numHemiLights),E.push(R.numRectAreaLights),E.push(R.numDirLightShadows),E.push(R.numPointLightShadows),E.push(R.numSpotLightShadows),E.push(R.numSpotLightShadowsWithMaps),E.push(R.shadowMapType),E.push(R.toneMapping),E.push(R.numClippingPlanes),E.push(R.numClipIntersection),E.push(R.depthPacking)}function g(E,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),E.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),E.push(a.mask)}function x(E){const R=y[E.type];let X;if(R){const ne=oi[R];X=hT.clone(ne.uniforms)}else X=E.uniforms;return X}function S(E,R){let X;for(let ne=0,F=c.length;ne<F;ne++){const B=c[ne];if(B.cacheKey===R){X=B,++X.usedTimes;break}}return X===void 0&&(X=new xR(t,R,E,s),c.push(X)),X}function T(E){if(--E.usedTimes===0){const R=c.indexOf(E);c[R]=c[c.length-1],c.pop(),E.destroy()}}function A(E){l.remove(E)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:x,acquireProgram:S,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:P}}function TR(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function AR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function W0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function j0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,m,y,_,p){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:m,groupOrder:y,renderOrder:d.renderOrder,z:_,group:p},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=m,f.groupOrder=y,f.renderOrder=d.renderOrder,f.z=_,f.group=p),e++,f}function a(d,h,m,y,_,p){const f=o(d,h,m,y,_,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):n.push(f)}function l(d,h,m,y,_,p){const f=o(d,h,m,y,_,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):n.unshift(f)}function c(d,h){n.length>1&&n.sort(d||AR),i.length>1&&i.sort(h||W0),r.length>1&&r.sort(h||W0)}function u(){for(let d=e,h=t.length;d<h;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function RR(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new j0,t.set(i,[o])):r>=s.length?(o=new j0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function CR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new I,color:new qe};break;case"SpotLight":n={position:new I,direction:new I,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new I,halfWidth:new I,halfHeight:new I};break}return t[e.id]=n,n}}}function bR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let PR=0;function LR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function DR(t,e){const n=new CR,i=bR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new I);const s=new I,o=new Rt,a=new Rt;function l(u,d){let h=0,m=0,y=0;for(let X=0;X<9;X++)r.probe[X].set(0,0,0);let _=0,p=0,f=0,v=0,g=0,x=0,S=0,T=0,A=0,P=0;u.sort(LR);const E=d===!0?Math.PI:1;for(let X=0,ne=u.length;X<ne;X++){const F=u[X],B=F.color,H=F.intensity,ee=F.distance,$=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)h+=B.r*H*E,m+=B.g*H*E,y+=B.b*H*E;else if(F.isLightProbe)for(let D=0;D<9;D++)r.probe[D].addScaledVector(F.sh.coefficients[D],H);else if(F.isDirectionalLight){const D=n.get(F);if(D.color.copy(F.color).multiplyScalar(F.intensity*E),F.castShadow){const G=F.shadow,z=i.get(F);z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,r.directionalShadow[_]=z,r.directionalShadowMap[_]=$,r.directionalShadowMatrix[_]=F.shadow.matrix,x++}r.directional[_]=D,_++}else if(F.isSpotLight){const D=n.get(F);D.position.setFromMatrixPosition(F.matrixWorld),D.color.copy(B).multiplyScalar(H*E),D.distance=ee,D.coneCos=Math.cos(F.angle),D.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),D.decay=F.decay,r.spot[f]=D;const G=F.shadow;if(F.map&&(r.spotLightMap[A]=F.map,A++,G.updateMatrices(F),F.castShadow&&P++),r.spotLightMatrix[f]=G.matrix,F.castShadow){const z=i.get(F);z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,r.spotShadow[f]=z,r.spotShadowMap[f]=$,T++}f++}else if(F.isRectAreaLight){const D=n.get(F);D.color.copy(B).multiplyScalar(H),D.halfWidth.set(F.width*.5,0,0),D.halfHeight.set(0,F.height*.5,0),r.rectArea[v]=D,v++}else if(F.isPointLight){const D=n.get(F);if(D.color.copy(F.color).multiplyScalar(F.intensity*E),D.distance=F.distance,D.decay=F.decay,F.castShadow){const G=F.shadow,z=i.get(F);z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,z.shadowCameraNear=G.camera.near,z.shadowCameraFar=G.camera.far,r.pointShadow[p]=z,r.pointShadowMap[p]=$,r.pointShadowMatrix[p]=F.shadow.matrix,S++}r.point[p]=D,p++}else if(F.isHemisphereLight){const D=n.get(F);D.skyColor.copy(F.color).multiplyScalar(H*E),D.groundColor.copy(F.groundColor).multiplyScalar(H*E),r.hemi[g]=D,g++}}v>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=de.LTC_FLOAT_1,r.rectAreaLTC2=de.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=de.LTC_HALF_1,r.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=y;const R=r.hash;(R.directionalLength!==_||R.pointLength!==p||R.spotLength!==f||R.rectAreaLength!==v||R.hemiLength!==g||R.numDirectionalShadows!==x||R.numPointShadows!==S||R.numSpotShadows!==T||R.numSpotMaps!==A)&&(r.directional.length=_,r.spot.length=f,r.rectArea.length=v,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=T+A-P,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=P,R.directionalLength=_,R.pointLength=p,R.spotLength=f,R.rectAreaLength=v,R.hemiLength=g,R.numDirectionalShadows=x,R.numPointShadows=S,R.numSpotShadows=T,R.numSpotMaps=A,r.version=PR++)}function c(u,d){let h=0,m=0,y=0,_=0,p=0;const f=d.matrixWorldInverse;for(let v=0,g=u.length;v<g;v++){const x=u[v];if(x.isDirectionalLight){const S=r.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),h++}else if(x.isSpotLight){const S=r.spot[y];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),y++}else if(x.isRectAreaLight){const S=r.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(f),a.identity(),o.copy(x.matrixWorld),o.premultiply(f),a.extractRotation(o),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const S=r.point[m];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(f),m++}else if(x.isHemisphereLight){const S=r.hemi[p];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:r}}function X0(t,e){const n=new DR(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function UR(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new X0(t,e),n.set(s,[l])):o>=a.length?(l=new X0(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class NR extends Pc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class IR extends Pc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const OR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kR(t,e,n){let i=new Vh;const r=new Oe,s=new Oe,o=new It,a=new NR({depthPacking:Nw}),l=new IR,c={},u=n.maxTextureSize,d={[hr]:fn,[fn]:hr,[ui]:ui},h=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:OR,fragmentShader:FR}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const y=new ki;y.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new yn(y,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=J_;let f=this.type;this.render=function(S,T,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const P=t.getRenderTarget(),E=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),X=t.state;X.setBlending(cr),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const ne=f!==Mi&&this.type===Mi,F=f===Mi&&this.type!==Mi;for(let B=0,H=S.length;B<H;B++){const ee=S[B],$=ee.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const D=$.getFrameExtents();if(r.multiply(D),s.copy($.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/D.x),r.x=s.x*D.x,$.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/D.y),r.y=s.y*D.y,$.mapSize.y=s.y)),$.map===null||ne===!0||F===!0){const z=this.type!==Mi?{minFilter:en,magFilter:en}:{};$.map!==null&&$.map.dispose(),$.map=new Xr(r.x,r.y,z),$.map.texture.name=ee.name+".shadowMap",$.camera.updateProjectionMatrix()}t.setRenderTarget($.map),t.clear();const G=$.getViewportCount();for(let z=0;z<G;z++){const ce=$.getViewport(z);o.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),X.viewport(o),$.updateMatrices(ee,z),i=$.getFrustum(),x(T,A,$.camera,ee,this.type)}$.isPointLightShadow!==!0&&this.type===Mi&&v($,A),$.needsUpdate=!1}f=this.type,p.needsUpdate=!1,t.setRenderTarget(P,E,R)};function v(S,T){const A=e.update(_);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Xr(r.x,r.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,t.setRenderTarget(S.mapPass),t.clear(),t.renderBufferDirect(T,null,A,h,_,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,t.setRenderTarget(S.map),t.clear(),t.renderBufferDirect(T,null,A,m,_,null)}function g(S,T,A,P){let E=null;const R=A.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(R!==void 0)E=R;else if(E=A.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const X=E.uuid,ne=T.uuid;let F=c[X];F===void 0&&(F={},c[X]=F);let B=F[ne];B===void 0&&(B=E.clone(),F[ne]=B),E=B}if(E.visible=T.visible,E.wireframe=T.wireframe,P===Mi?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:d[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,A.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const X=t.properties.get(E);X.light=A}return E}function x(S,T,A,P,E){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&E===Mi)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,S.matrixWorld);const ne=e.update(S),F=S.material;if(Array.isArray(F)){const B=ne.groups;for(let H=0,ee=B.length;H<ee;H++){const $=B[H],D=F[$.materialIndex];if(D&&D.visible){const G=g(S,D,P,E);t.renderBufferDirect(A,null,ne,G,S,$)}}}else if(F.visible){const B=g(S,F,P,E);t.renderBufferDirect(A,null,ne,B,S,null)}}const X=S.children;for(let ne=0,F=X.length;ne<F;ne++)x(X[ne],T,A,P,E)}}function zR(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const he=new It;let V=null;const fe=new It(0,0,0,0);return{setMask:function(pe){V!==pe&&!L&&(t.colorMask(pe,pe,pe,pe),V=pe)},setLocked:function(pe){L=pe},setClear:function(pe,Ye,dt,vt,vr){vr===!0&&(pe*=vt,Ye*=vt,dt*=vt),he.set(pe,Ye,dt,vt),fe.equals(he)===!1&&(t.clearColor(pe,Ye,dt,vt),fe.copy(he))},reset:function(){L=!1,V=null,fe.set(-1,0,0,0)}}}function s(){let L=!1,he=null,V=null,fe=null;return{setTest:function(pe){pe?ve(t.DEPTH_TEST):Pe(t.DEPTH_TEST)},setMask:function(pe){he!==pe&&!L&&(t.depthMask(pe),he=pe)},setFunc:function(pe){if(V!==pe){switch(pe){case cw:t.depthFunc(t.NEVER);break;case uw:t.depthFunc(t.ALWAYS);break;case fw:t.depthFunc(t.LESS);break;case xd:t.depthFunc(t.LEQUAL);break;case dw:t.depthFunc(t.EQUAL);break;case hw:t.depthFunc(t.GEQUAL);break;case pw:t.depthFunc(t.GREATER);break;case mw:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}V=pe}},setLocked:function(pe){L=pe},setClear:function(pe){fe!==pe&&(t.clearDepth(pe),fe=pe)},reset:function(){L=!1,he=null,V=null,fe=null}}}function o(){let L=!1,he=null,V=null,fe=null,pe=null,Ye=null,dt=null,vt=null,vr=null;return{setTest:function(ht){L||(ht?ve(t.STENCIL_TEST):Pe(t.STENCIL_TEST))},setMask:function(ht){he!==ht&&!L&&(t.stencilMask(ht),he=ht)},setFunc:function(ht,ii,Kt){(V!==ht||fe!==ii||pe!==Kt)&&(t.stencilFunc(ht,ii,Kt),V=ht,fe=ii,pe=Kt)},setOp:function(ht,ii,Kt){(Ye!==ht||dt!==ii||vt!==Kt)&&(t.stencilOp(ht,ii,Kt),Ye=ht,dt=ii,vt=Kt)},setLocked:function(ht){L=ht},setClear:function(ht){vr!==ht&&(t.clearStencil(ht),vr=ht)},reset:function(){L=!1,he=null,V=null,fe=null,pe=null,Ye=null,dt=null,vt=null,vr=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,d=new WeakMap;let h={},m={},y=new WeakMap,_=[],p=null,f=!1,v=null,g=null,x=null,S=null,T=null,A=null,P=null,E=!1,R=null,X=null,ne=null,F=null,B=null;const H=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,$=0;const D=t.getParameter(t.VERSION);D.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(D)[1]),ee=$>=1):D.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),ee=$>=2);let G=null,z={};const ce=t.getParameter(t.SCISSOR_BOX),U=t.getParameter(t.VIEWPORT),te=new It().fromArray(ce),Q=new It().fromArray(U);function re(L,he,V,fe){const pe=new Uint8Array(4),Ye=t.createTexture();t.bindTexture(L,Ye),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let dt=0;dt<V;dt++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(he,0,t.RGBA,1,1,fe,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(he+dt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return Ye}const ue={};ue[t.TEXTURE_2D]=re(t.TEXTURE_2D,t.TEXTURE_2D,1),ue[t.TEXTURE_CUBE_MAP]=re(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ue[t.TEXTURE_2D_ARRAY]=re(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ue[t.TEXTURE_3D]=re(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ve(t.DEPTH_TEST),l.setFunc(xd),Ae(!1),nt(Dm),ve(t.CULL_FACE),Te(cr);function ve(L){h[L]!==!0&&(t.enable(L),h[L]=!0)}function Pe(L){h[L]!==!1&&(t.disable(L),h[L]=!1)}function we(L,he){return m[L]!==he?(t.bindFramebuffer(L,he),m[L]=he,i&&(L===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=he),L===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=he)),!0):!1}function it(L,he){let V=_,fe=!1;if(L)if(V=y.get(he),V===void 0&&(V=[],y.set(he,V)),L.isWebGLMultipleRenderTargets){const pe=L.texture;if(V.length!==pe.length||V[0]!==t.COLOR_ATTACHMENT0){for(let Ye=0,dt=pe.length;Ye<dt;Ye++)V[Ye]=t.COLOR_ATTACHMENT0+Ye;V.length=pe.length,fe=!0}}else V[0]!==t.COLOR_ATTACHMENT0&&(V[0]=t.COLOR_ATTACHMENT0,fe=!0);else V[0]!==t.BACK&&(V[0]=t.BACK,fe=!0);fe&&(n.isWebGL2?t.drawBuffers(V):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(V))}function Ve(L){return p!==L?(t.useProgram(L),p=L,!0):!1}const O={[vs]:t.FUNC_ADD,[QM]:t.FUNC_SUBTRACT,[JM]:t.FUNC_REVERSE_SUBTRACT};if(i)O[Im]=t.MIN,O[Om]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(O[Im]=L.MIN_EXT,O[Om]=L.MAX_EXT)}const Mt={[ew]:t.ZERO,[tw]:t.ONE,[nw]:t.SRC_COLOR,[ey]:t.SRC_ALPHA,[lw]:t.SRC_ALPHA_SATURATE,[ow]:t.DST_COLOR,[rw]:t.DST_ALPHA,[iw]:t.ONE_MINUS_SRC_COLOR,[ty]:t.ONE_MINUS_SRC_ALPHA,[aw]:t.ONE_MINUS_DST_COLOR,[sw]:t.ONE_MINUS_DST_ALPHA};function Te(L,he,V,fe,pe,Ye,dt,vt){if(L===cr){f===!0&&(Pe(t.BLEND),f=!1);return}if(f===!1&&(ve(t.BLEND),f=!0),L!==ZM){if(L!==v||vt!==E){if((g!==vs||T!==vs)&&(t.blendEquation(t.FUNC_ADD),g=vs,T=vs),vt)switch(L){case Fs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case yd:t.blendFunc(t.ONE,t.ONE);break;case Um:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Nm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Fs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case yd:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Um:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Nm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}x=null,S=null,A=null,P=null,v=L,E=vt}return}pe=pe||he,Ye=Ye||V,dt=dt||fe,(he!==g||pe!==T)&&(t.blendEquationSeparate(O[he],O[pe]),g=he,T=pe),(V!==x||fe!==S||Ye!==A||dt!==P)&&(t.blendFuncSeparate(Mt[V],Mt[fe],Mt[Ye],Mt[dt]),x=V,S=fe,A=Ye,P=dt),v=L,E=!1}function Ie(L,he){L.side===ui?Pe(t.CULL_FACE):ve(t.CULL_FACE);let V=L.side===fn;he&&(V=!V),Ae(V),L.blending===Fs&&L.transparent===!1?Te(cr):Te(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const fe=L.stencilWrite;c.setTest(fe),fe&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),De(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ve(t.SAMPLE_ALPHA_TO_COVERAGE):Pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(L){R!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),R=L)}function nt(L){L!==YM?(ve(t.CULL_FACE),L!==X&&(L===Dm?t.cullFace(t.BACK):L===qM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Pe(t.CULL_FACE),X=L}function Be(L){L!==ne&&(ee&&t.lineWidth(L),ne=L)}function De(L,he,V){L?(ve(t.POLYGON_OFFSET_FILL),(F!==he||B!==V)&&(t.polygonOffset(he,V),F=he,B=V)):Pe(t.POLYGON_OFFSET_FILL)}function Ke(L){L?ve(t.SCISSOR_TEST):Pe(t.SCISSOR_TEST)}function wt(L){L===void 0&&(L=t.TEXTURE0+H-1),G!==L&&(t.activeTexture(L),G=L)}function Pt(L,he,V){V===void 0&&(G===null?V=t.TEXTURE0+H-1:V=G);let fe=z[V];fe===void 0&&(fe={type:void 0,texture:void 0},z[V]=fe),(fe.type!==L||fe.texture!==he)&&(G!==V&&(t.activeTexture(V),G=V),t.bindTexture(L,he||ue[L]),fe.type=L,fe.texture=he)}function C(){const L=z[G];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function M(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function b(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function W(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(L){te.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),te.copy(L))}function Se(L){Q.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),Q.copy(L))}function _e(L,he){let V=d.get(he);V===void 0&&(V=new WeakMap,d.set(he,V));let fe=V.get(L);fe===void 0&&(fe=t.getUniformBlockIndex(he,L.name),V.set(L,fe))}function Ce(L,he){const fe=d.get(he).get(L);u.get(he)!==fe&&(t.uniformBlockBinding(he,fe,L.__bindingPointIndex),u.set(he,fe))}function je(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},G=null,z={},m={},y=new WeakMap,_=[],p=null,f=!1,v=null,g=null,x=null,S=null,T=null,A=null,P=null,E=!1,R=null,X=null,ne=null,F=null,B=null,te.set(0,0,t.canvas.width,t.canvas.height),Q.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ve,disable:Pe,bindFramebuffer:we,drawBuffers:it,useProgram:Ve,setBlending:Te,setMaterial:Ie,setFlipSided:Ae,setCullFace:nt,setLineWidth:Be,setPolygonOffset:De,setScissorTest:Ke,activeTexture:wt,bindTexture:Pt,unbindTexture:C,compressedTexImage2D:M,compressedTexImage3D:Y,texImage2D:xe,texImage3D:Me,updateUBOMapping:_e,uniformBlockBinding:Ce,texStorage2D:se,texStorage3D:W,texSubImage2D:ae,texSubImage3D:oe,compressedTexSubImage2D:b,compressedTexSubImage3D:J,scissor:Ee,viewport:Se,reset:je}}function BR(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,d=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),y=new WeakMap;let _;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,M){return f?new OffscreenCanvas(C,M):ra("canvas")}function g(C,M,Y,ae){let oe=1;if((C.width>ae||C.height>ae)&&(oe=ae/Math.max(C.width,C.height)),oe<1||M===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const b=M?Rd:Math.floor,J=b(oe*C.width),se=b(oe*C.height);_===void 0&&(_=v(J,se));const W=Y?v(J,se):_;return W.width=J,W.height=se,W.getContext("2d").drawImage(C,0,0,J,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+J+"x"+se+")."),W}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function x(C){return c0(C.width)&&c0(C.height)}function S(C){return a?!1:C.wrapS!==qn||C.wrapT!==qn||C.minFilter!==en&&C.minFilter!==Ln}function T(C,M){return C.generateMipmaps&&M&&C.minFilter!==en&&C.minFilter!==Ln}function A(C){t.generateMipmap(C)}function P(C,M,Y,ae,oe=!1){if(a===!1)return M;if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let b=M;return M===t.RED&&(Y===t.FLOAT&&(b=t.R32F),Y===t.HALF_FLOAT&&(b=t.R16F),Y===t.UNSIGNED_BYTE&&(b=t.R8)),M===t.RG&&(Y===t.FLOAT&&(b=t.RG32F),Y===t.HALF_FLOAT&&(b=t.RG16F),Y===t.UNSIGNED_BYTE&&(b=t.RG8)),M===t.RGBA&&(Y===t.FLOAT&&(b=t.RGBA32F),Y===t.HALF_FLOAT&&(b=t.RGBA16F),Y===t.UNSIGNED_BYTE&&(b=ae===ke&&oe===!1?t.SRGB8_ALPHA8:t.RGBA8),Y===t.UNSIGNED_SHORT_4_4_4_4&&(b=t.RGBA4),Y===t.UNSIGNED_SHORT_5_5_5_1&&(b=t.RGB5_A1)),(b===t.R16F||b===t.R32F||b===t.RG16F||b===t.RG32F||b===t.RGBA16F||b===t.RGBA32F)&&e.get("EXT_color_buffer_float"),b}function E(C,M,Y){return T(C,Y)===!0||C.isFramebufferTexture&&C.minFilter!==en&&C.minFilter!==Ln?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function R(C){return C===en||C===Fm||C===Iu?t.NEAREST:t.LINEAR}function X(C){const M=C.target;M.removeEventListener("dispose",X),F(M),M.isVideoTexture&&y.delete(M)}function ne(C){const M=C.target;M.removeEventListener("dispose",ne),H(M)}function F(C){const M=i.get(C);if(M.__webglInit===void 0)return;const Y=C.source,ae=p.get(Y);if(ae){const oe=ae[M.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&B(C),Object.keys(ae).length===0&&p.delete(Y)}i.remove(C)}function B(C){const M=i.get(C);t.deleteTexture(M.__webglTexture);const Y=C.source,ae=p.get(Y);delete ae[M.__cacheKey],o.memory.textures--}function H(C){const M=C.texture,Y=i.get(C),ae=i.get(M);if(ae.__webglTexture!==void 0&&(t.deleteTexture(ae.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++)t.deleteFramebuffer(Y.__webglFramebuffer[oe]),Y.__webglDepthbuffer&&t.deleteRenderbuffer(Y.__webglDepthbuffer[oe]);else{if(t.deleteFramebuffer(Y.__webglFramebuffer),Y.__webglDepthbuffer&&t.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let oe=0;oe<Y.__webglColorRenderbuffer.length;oe++)Y.__webglColorRenderbuffer[oe]&&t.deleteRenderbuffer(Y.__webglColorRenderbuffer[oe]);Y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let oe=0,b=M.length;oe<b;oe++){const J=i.get(M[oe]);J.__webglTexture&&(t.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(M[oe])}i.remove(M),i.remove(C)}let ee=0;function $(){ee=0}function D(){const C=ee;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),ee+=1,C}function G(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function z(C,M){const Y=i.get(C);if(C.isVideoTexture&&wt(C),C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){const ae=C.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(Y,C,M);return}}n.bindTexture(t.TEXTURE_2D,Y.__webglTexture,t.TEXTURE0+M)}function ce(C,M){const Y=i.get(C);if(C.version>0&&Y.__version!==C.version){we(Y,C,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,Y.__webglTexture,t.TEXTURE0+M)}function U(C,M){const Y=i.get(C);if(C.version>0&&Y.__version!==C.version){we(Y,C,M);return}n.bindTexture(t.TEXTURE_3D,Y.__webglTexture,t.TEXTURE0+M)}function te(C,M){const Y=i.get(C);if(C.version>0&&Y.__version!==C.version){it(Y,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture,t.TEXTURE0+M)}const Q={[Md]:t.REPEAT,[qn]:t.CLAMP_TO_EDGE,[wd]:t.MIRRORED_REPEAT},re={[en]:t.NEAREST,[Fm]:t.NEAREST_MIPMAP_NEAREST,[Iu]:t.NEAREST_MIPMAP_LINEAR,[Ln]:t.LINEAR,[Mw]:t.LINEAR_MIPMAP_NEAREST,[na]:t.LINEAR_MIPMAP_LINEAR},ue={[kw]:t.NEVER,[jw]:t.ALWAYS,[zw]:t.LESS,[Hw]:t.LEQUAL,[Bw]:t.EQUAL,[Ww]:t.GEQUAL,[Vw]:t.GREATER,[Gw]:t.NOTEQUAL};function ve(C,M,Y){if(Y?(t.texParameteri(C,t.TEXTURE_WRAP_S,Q[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,Q[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,Q[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,re[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,re[M.minFilter])):(t.texParameteri(C,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(C,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==qn||M.wrapT!==qn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(C,t.TEXTURE_MAG_FILTER,R(M.magFilter)),t.texParameteri(C,t.TEXTURE_MIN_FILTER,R(M.minFilter)),M.minFilter!==en&&M.minFilter!==Ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,ue[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===en||M.minFilter!==Iu&&M.minFilter!==na||M.type===Ji&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===ia&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(C,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function Pe(C,M){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",X));const ae=M.source;let oe=p.get(ae);oe===void 0&&(oe={},p.set(ae,oe));const b=G(M);if(b!==C.__cacheKey){oe[b]===void 0&&(oe[b]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),oe[b].usedTimes++;const J=oe[C.__cacheKey];J!==void 0&&(oe[C.__cacheKey].usedTimes--,J.usedTimes===0&&B(M)),C.__cacheKey=b,C.__webglTexture=oe[b].texture}return Y}function we(C,M,Y){let ae=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ae=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ae=t.TEXTURE_3D);const oe=Pe(C,M),b=M.source;n.bindTexture(ae,C.__webglTexture,t.TEXTURE0+Y);const J=i.get(b);if(b.version!==J.__version||oe===!0){n.activeTexture(t.TEXTURE0+Y),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const se=S(M)&&x(M.image)===!1;let W=g(M.image,se,!1,u);W=Pt(M,W);const xe=x(W)||a,Me=s.convert(M.format,M.colorSpace);let Ee=s.convert(M.type),Se=P(M.internalFormat,Me,Ee,M.colorSpace);ve(ae,M,xe);let _e;const Ce=M.mipmaps,je=a&&M.isVideoTexture!==!0,L=J.__version===void 0||oe===!0,he=E(M,W,xe);if(M.isDepthTexture)Se=t.DEPTH_COMPONENT,a?M.type===Ji?Se=t.DEPTH_COMPONENT32F:M.type===Qi?Se=t.DEPTH_COMPONENT24:M.type===Or?Se=t.DEPTH24_STENCIL8:Se=t.DEPTH_COMPONENT16:M.type===Ji&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Fr&&Se===t.DEPTH_COMPONENT&&M.type!==zh&&M.type!==Qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Qi,Ee=s.convert(M.type)),M.format===qs&&Se===t.DEPTH_COMPONENT&&(Se=t.DEPTH_STENCIL,M.type!==Or&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Or,Ee=s.convert(M.type))),L&&(je?n.texStorage2D(t.TEXTURE_2D,1,Se,W.width,W.height):n.texImage2D(t.TEXTURE_2D,0,Se,W.width,W.height,0,Me,Ee,null));else if(M.isDataTexture)if(Ce.length>0&&xe){je&&L&&n.texStorage2D(t.TEXTURE_2D,he,Se,Ce[0].width,Ce[0].height);for(let V=0,fe=Ce.length;V<fe;V++)_e=Ce[V],je?n.texSubImage2D(t.TEXTURE_2D,V,0,0,_e.width,_e.height,Me,Ee,_e.data):n.texImage2D(t.TEXTURE_2D,V,Se,_e.width,_e.height,0,Me,Ee,_e.data);M.generateMipmaps=!1}else je?(L&&n.texStorage2D(t.TEXTURE_2D,he,Se,W.width,W.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,W.width,W.height,Me,Ee,W.data)):n.texImage2D(t.TEXTURE_2D,0,Se,W.width,W.height,0,Me,Ee,W.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){je&&L&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Se,Ce[0].width,Ce[0].height,W.depth);for(let V=0,fe=Ce.length;V<fe;V++)_e=Ce[V],M.format!==Kn?Me!==null?je?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,0,_e.width,_e.height,W.depth,Me,_e.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,V,Se,_e.width,_e.height,W.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?n.texSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,0,_e.width,_e.height,W.depth,Me,Ee,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,V,Se,_e.width,_e.height,W.depth,0,Me,Ee,_e.data)}else{je&&L&&n.texStorage2D(t.TEXTURE_2D,he,Se,Ce[0].width,Ce[0].height);for(let V=0,fe=Ce.length;V<fe;V++)_e=Ce[V],M.format!==Kn?Me!==null?je?n.compressedTexSubImage2D(t.TEXTURE_2D,V,0,0,_e.width,_e.height,Me,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,V,Se,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?n.texSubImage2D(t.TEXTURE_2D,V,0,0,_e.width,_e.height,Me,Ee,_e.data):n.texImage2D(t.TEXTURE_2D,V,Se,_e.width,_e.height,0,Me,Ee,_e.data)}else if(M.isDataArrayTexture)je?(L&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Se,W.width,W.height,W.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,Me,Ee,W.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Se,W.width,W.height,W.depth,0,Me,Ee,W.data);else if(M.isData3DTexture)je?(L&&n.texStorage3D(t.TEXTURE_3D,he,Se,W.width,W.height,W.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,Me,Ee,W.data)):n.texImage3D(t.TEXTURE_3D,0,Se,W.width,W.height,W.depth,0,Me,Ee,W.data);else if(M.isFramebufferTexture){if(L)if(je)n.texStorage2D(t.TEXTURE_2D,he,Se,W.width,W.height);else{let V=W.width,fe=W.height;for(let pe=0;pe<he;pe++)n.texImage2D(t.TEXTURE_2D,pe,Se,V,fe,0,Me,Ee,null),V>>=1,fe>>=1}}else if(Ce.length>0&&xe){je&&L&&n.texStorage2D(t.TEXTURE_2D,he,Se,Ce[0].width,Ce[0].height);for(let V=0,fe=Ce.length;V<fe;V++)_e=Ce[V],je?n.texSubImage2D(t.TEXTURE_2D,V,0,0,Me,Ee,_e):n.texImage2D(t.TEXTURE_2D,V,Se,Me,Ee,_e);M.generateMipmaps=!1}else je?(L&&n.texStorage2D(t.TEXTURE_2D,he,Se,W.width,W.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Me,Ee,W)):n.texImage2D(t.TEXTURE_2D,0,Se,Me,Ee,W);T(M,xe)&&A(ae),J.__version=b.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function it(C,M,Y){if(M.image.length!==6)return;const ae=Pe(C,M),oe=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+Y);const b=i.get(oe);if(oe.version!==b.__version||ae===!0){n.activeTexture(t.TEXTURE0+Y),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const J=M.isCompressedTexture||M.image[0].isCompressedTexture,se=M.image[0]&&M.image[0].isDataTexture,W=[];for(let V=0;V<6;V++)!J&&!se?W[V]=g(M.image[V],!1,!0,c):W[V]=se?M.image[V].image:M.image[V],W[V]=Pt(M,W[V]);const xe=W[0],Me=x(xe)||a,Ee=s.convert(M.format,M.colorSpace),Se=s.convert(M.type),_e=P(M.internalFormat,Ee,Se,M.colorSpace),Ce=a&&M.isVideoTexture!==!0,je=b.__version===void 0||ae===!0;let L=E(M,xe,Me);ve(t.TEXTURE_CUBE_MAP,M,Me);let he;if(J){Ce&&je&&n.texStorage2D(t.TEXTURE_CUBE_MAP,L,_e,xe.width,xe.height);for(let V=0;V<6;V++){he=W[V].mipmaps;for(let fe=0;fe<he.length;fe++){const pe=he[fe];M.format!==Kn?Ee!==null?Ce?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,fe,0,0,pe.width,pe.height,Ee,pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,fe,_e,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,fe,0,0,pe.width,pe.height,Ee,Se,pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,fe,_e,pe.width,pe.height,0,Ee,Se,pe.data)}}}else{he=M.mipmaps,Ce&&je&&(he.length>0&&L++,n.texStorage2D(t.TEXTURE_CUBE_MAP,L,_e,W[0].width,W[0].height));for(let V=0;V<6;V++)if(se){Ce?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,W[V].width,W[V].height,Ee,Se,W[V].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,_e,W[V].width,W[V].height,0,Ee,Se,W[V].data);for(let fe=0;fe<he.length;fe++){const Ye=he[fe].image[V].image;Ce?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,fe+1,0,0,Ye.width,Ye.height,Ee,Se,Ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,fe+1,_e,Ye.width,Ye.height,0,Ee,Se,Ye.data)}}else{Ce?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,Ee,Se,W[V]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,_e,Ee,Se,W[V]);for(let fe=0;fe<he.length;fe++){const pe=he[fe];Ce?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,fe+1,0,0,Ee,Se,pe.image[V]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+V,fe+1,_e,Ee,Se,pe.image[V])}}}T(M,Me)&&A(t.TEXTURE_CUBE_MAP),b.__version=oe.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Ve(C,M,Y,ae,oe){const b=s.convert(Y.format,Y.colorSpace),J=s.convert(Y.type),se=P(Y.internalFormat,b,J,Y.colorSpace);i.get(M).__hasExternalTextures||(oe===t.TEXTURE_3D||oe===t.TEXTURE_2D_ARRAY?n.texImage3D(oe,0,se,M.width,M.height,M.depth,0,b,J,null):n.texImage2D(oe,0,se,M.width,M.height,0,b,J,null)),n.bindFramebuffer(t.FRAMEBUFFER,C),Ke(M)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ae,oe,i.get(Y).__webglTexture,0,De(M)):(oe===t.TEXTURE_2D||oe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ae,oe,i.get(Y).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function O(C,M,Y){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer&&!M.stencilBuffer){let ae=t.DEPTH_COMPONENT16;if(Y||Ke(M)){const oe=M.depthTexture;oe&&oe.isDepthTexture&&(oe.type===Ji?ae=t.DEPTH_COMPONENT32F:oe.type===Qi&&(ae=t.DEPTH_COMPONENT24));const b=De(M);Ke(M)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,b,ae,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,b,ae,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,ae,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,C)}else if(M.depthBuffer&&M.stencilBuffer){const ae=De(M);Y&&Ke(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,t.DEPTH24_STENCIL8,M.width,M.height):Ke(M)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,C)}else{const ae=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let oe=0;oe<ae.length;oe++){const b=ae[oe],J=s.convert(b.format,b.colorSpace),se=s.convert(b.type),W=P(b.internalFormat,J,se,b.colorSpace),xe=De(M);Y&&Ke(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,xe,W,M.width,M.height):Ke(M)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,xe,W,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,W,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Mt(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),z(M.depthTexture,0);const ae=i.get(M.depthTexture).__webglTexture,oe=De(M);if(M.depthTexture.format===Fr)Ke(M)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0);else if(M.depthTexture.format===qs)Ke(M)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Te(C){const M=i.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Mt(M.__webglFramebuffer,C)}else if(Y){M.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ae]),M.__webglDepthbuffer[ae]=t.createRenderbuffer(),O(M.__webglDepthbuffer[ae],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),O(M.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ie(C,M,Y){const ae=i.get(C);M!==void 0&&Ve(ae.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),Y!==void 0&&Te(C)}function Ae(C){const M=C.texture,Y=i.get(C),ae=i.get(M);C.addEventListener("dispose",ne),C.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=t.createTexture()),ae.__version=M.version,o.memory.textures++);const oe=C.isWebGLCubeRenderTarget===!0,b=C.isWebGLMultipleRenderTargets===!0,J=x(C)||a;if(oe){Y.__webglFramebuffer=[];for(let se=0;se<6;se++)Y.__webglFramebuffer[se]=t.createFramebuffer()}else{if(Y.__webglFramebuffer=t.createFramebuffer(),b)if(r.drawBuffers){const se=C.texture;for(let W=0,xe=se.length;W<xe;W++){const Me=i.get(se[W]);Me.__webglTexture===void 0&&(Me.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Ke(C)===!1){const se=b?M:[M];Y.__webglMultisampledFramebuffer=t.createFramebuffer(),Y.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let W=0;W<se.length;W++){const xe=se[W];Y.__webglColorRenderbuffer[W]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Y.__webglColorRenderbuffer[W]);const Me=s.convert(xe.format,xe.colorSpace),Ee=s.convert(xe.type),Se=P(xe.internalFormat,Me,Ee,xe.colorSpace,C.isXRRenderTarget===!0),_e=De(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,_e,Se,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+W,t.RENDERBUFFER,Y.__webglColorRenderbuffer[W])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=t.createRenderbuffer(),O(Y.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){n.bindTexture(t.TEXTURE_CUBE_MAP,ae.__webglTexture),ve(t.TEXTURE_CUBE_MAP,M,J);for(let se=0;se<6;se++)Ve(Y.__webglFramebuffer[se],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+se);T(M,J)&&A(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(b){const se=C.texture;for(let W=0,xe=se.length;W<xe;W++){const Me=se[W],Ee=i.get(Me);n.bindTexture(t.TEXTURE_2D,Ee.__webglTexture),ve(t.TEXTURE_2D,Me,J),Ve(Y.__webglFramebuffer,C,Me,t.COLOR_ATTACHMENT0+W,t.TEXTURE_2D),T(Me,J)&&A(t.TEXTURE_2D)}n.unbindTexture()}else{let se=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?se=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(se,ae.__webglTexture),ve(se,M,J),Ve(Y.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,se),T(M,J)&&A(se),n.unbindTexture()}C.depthBuffer&&Te(C)}function nt(C){const M=x(C)||a,Y=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ae=0,oe=Y.length;ae<oe;ae++){const b=Y[ae];if(T(b,M)){const J=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,se=i.get(b).__webglTexture;n.bindTexture(J,se),A(J),n.unbindTexture()}}}function Be(C){if(a&&C.samples>0&&Ke(C)===!1){const M=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],Y=C.width,ae=C.height;let oe=t.COLOR_BUFFER_BIT;const b=[],J=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=i.get(C),W=C.isWebGLMultipleRenderTargets===!0;if(W)for(let xe=0;xe<M.length;xe++)n.bindFramebuffer(t.FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let xe=0;xe<M.length;xe++){b.push(t.COLOR_ATTACHMENT0+xe),C.depthBuffer&&b.push(J);const Me=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(Me===!1&&(C.depthBuffer&&(oe|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&(oe|=t.STENCIL_BUFFER_BIT)),W&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,se.__webglColorRenderbuffer[xe]),Me===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[J]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[J])),W){const Ee=i.get(M[xe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ee,0)}t.blitFramebuffer(0,0,Y,ae,0,0,Y,ae,oe,t.NEAREST),m&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,b)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),W)for(let xe=0;xe<M.length;xe++){n.bindFramebuffer(t.FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,se.__webglColorRenderbuffer[xe]);const Me=i.get(M[xe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,Me,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function De(C){return Math.min(d,C.samples)}function Ke(C){const M=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function wt(C){const M=o.render.frame;y.get(C)!==M&&(y.set(C,M),C.update())}function Pt(C,M){const Y=C.colorSpace,ae=C.format,oe=C.type;return C.isCompressedTexture===!0||C.format===Td||Y!==mi&&Y!==zr&&(Y===ke?a===!1?e.has("EXT_sRGB")===!0&&ae===Kn?(C.format=Td,C.minFilter=Ln,C.generateMipmaps=!1):M=hy.sRGBToLinear(M):(ae!==Kn||oe!==ur)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),M}this.allocateTextureUnit=D,this.resetTextureUnits=$,this.setTexture2D=z,this.setTexture2DArray=ce,this.setTexture3D=U,this.setTextureCube=te,this.rebindTextures=Ie,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Ve,this.useMultisampledRTT=Ke}function HR(t,e,n){const i=n.isWebGL2;function r(s,o=zr){let a;if(s===ur)return t.UNSIGNED_BYTE;if(s===sy)return t.UNSIGNED_SHORT_4_4_4_4;if(s===oy)return t.UNSIGNED_SHORT_5_5_5_1;if(s===ww)return t.BYTE;if(s===Tw)return t.SHORT;if(s===zh)return t.UNSIGNED_SHORT;if(s===ry)return t.INT;if(s===Qi)return t.UNSIGNED_INT;if(s===Ji)return t.FLOAT;if(s===ia)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Aw)return t.ALPHA;if(s===Kn)return t.RGBA;if(s===Rw)return t.LUMINANCE;if(s===Cw)return t.LUMINANCE_ALPHA;if(s===Fr)return t.DEPTH_COMPONENT;if(s===qs)return t.DEPTH_STENCIL;if(s===Td)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===bw)return t.RED;if(s===ay)return t.RED_INTEGER;if(s===Pw)return t.RG;if(s===ly)return t.RG_INTEGER;if(s===cy)return t.RGBA_INTEGER;if(s===Ou||s===Fu||s===ku||s===zu)if(o===ke)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ou)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Fu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ku)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ou)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Fu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ku)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===km||s===zm||s===Bm||s===Hm)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===km)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===zm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Bm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Hm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Lw)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Vm||s===Gm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Vm)return o===ke?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Gm)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Wm||s===jm||s===Xm||s===$m||s===Ym||s===qm||s===Km||s===Zm||s===Qm||s===Jm||s===e0||s===t0||s===n0||s===i0)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Wm)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===jm)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Xm)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$m)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ym)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===qm)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Km)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Zm)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Qm)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Jm)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===e0)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===t0)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===n0)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===i0)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Bu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Bu)return o===ke?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Dw||s===r0||s===s0||s===o0)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Bu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===r0)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===s0)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===o0)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Or?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class VR extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ao extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const GR={type:"move"};class ff{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ao,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ao,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ao,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=n.getJointPose(_,i),f=this._getHandJoint(c,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,y=.005;c.inputState.pinching&&h>m+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(GR)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ao;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class WR extends dn{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Fr,u!==Fr&&u!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Fr&&(i=Qi),i===void 0&&u===qs&&(i=Or),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class jR extends Zr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,m=null,y=null;const _=n.getContextAttributes();let p=null,f=null;const v=[],g=[];let x=null;const S=new Dn;S.layers.enable(1),S.viewport=new It;const T=new Dn;T.layers.enable(2),T.viewport=new It;const A=[S,T],P=new VR;P.layers.enable(1),P.layers.enable(2);let E=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(U){x=U},this.getController=function(U){let te=v[U];return te===void 0&&(te=new ff,v[U]=te),te.getTargetRaySpace()},this.getControllerGrip=function(U){let te=v[U];return te===void 0&&(te=new ff,v[U]=te),te.getGripSpace()},this.getHand=function(U){let te=v[U];return te===void 0&&(te=new ff,v[U]=te),te.getHandSpace()};function X(U){const te=g.indexOf(U.inputSource);if(te===-1)return;const Q=v[te];Q!==void 0&&(Q.update(U.inputSource,U.frame,c||o),Q.dispatchEvent({type:U.type,data:U.inputSource}))}function ne(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",ne),r.removeEventListener("inputsourceschange",F);for(let U=0;U<v.length;U++){const te=g[U];te!==null&&(g[U]=null,v[U].disconnect(te))}E=null,R=null,e.setRenderTarget(p),m=null,h=null,d=null,r=null,f=null,ce.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",ne),r.addEventListener("inputsourceschange",F),_.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const te={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:m}),f=new Xr(m.framebufferWidth,m.framebufferHeight,{format:Kn,type:ur,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let te=null,Q=null,re=null;_.depth&&(re=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=_.stencil?qs:Fr,Q=_.stencil?Or:Qi);const ue={colorFormat:n.RGBA8,depthFormat:re,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(ue),r.updateRenderState({layers:[h]}),f=new Xr(h.textureWidth,h.textureHeight,{format:Kn,type:ur,depthTexture:new WR(h.textureWidth,h.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const ve=e.properties.get(f);ve.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ce.setContext(r),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function F(U){for(let te=0;te<U.removed.length;te++){const Q=U.removed[te],re=g.indexOf(Q);re>=0&&(g[re]=null,v[re].disconnect(Q))}for(let te=0;te<U.added.length;te++){const Q=U.added[te];let re=g.indexOf(Q);if(re===-1){for(let ve=0;ve<v.length;ve++)if(ve>=g.length){g.push(Q),re=ve;break}else if(g[ve]===null){g[ve]=Q,re=ve;break}if(re===-1)break}const ue=v[re];ue&&ue.connect(Q)}}const B=new I,H=new I;function ee(U,te,Q){B.setFromMatrixPosition(te.matrixWorld),H.setFromMatrixPosition(Q.matrixWorld);const re=B.distanceTo(H),ue=te.projectionMatrix.elements,ve=Q.projectionMatrix.elements,Pe=ue[14]/(ue[10]-1),we=ue[14]/(ue[10]+1),it=(ue[9]+1)/ue[5],Ve=(ue[9]-1)/ue[5],O=(ue[8]-1)/ue[0],Mt=(ve[8]+1)/ve[0],Te=Pe*O,Ie=Pe*Mt,Ae=re/(-O+Mt),nt=Ae*-O;te.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(nt),U.translateZ(Ae),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const Be=Pe+Ae,De=we+Ae,Ke=Te-nt,wt=Ie+(re-nt),Pt=it*we/De*Be,C=Ve*we/De*Be;U.projectionMatrix.makePerspective(Ke,wt,Pt,C,Be,De),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}function $(U,te){te===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(te.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCameraXR=function(U){if(r===null)return U;x&&(U=x),P.near=T.near=S.near=U.near,P.far=T.far=S.far=U.far,(E!==P.near||R!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),E=P.near,R=P.far);const te=U.parent,Q=P.cameras;$(P,te);for(let re=0;re<Q.length;re++)$(Q[re],te);return Q.length===2?ee(P,S,T):P.projectionMatrix.copy(S.projectionMatrix),x&&D(P,te),P};function D(U,te){const Q=x;te===null?Q.matrix.copy(U.matrixWorld):(Q.matrix.copy(te.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(U.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0);const re=Q.children;for(let ue=0,ve=re.length;ue<ve;ue++)re[ue].updateMatrixWorld(!0);Q.projectionMatrix.copy(U.projectionMatrix),Q.projectionMatrixInverse.copy(U.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ad*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(U){l=U,h!==null&&(h.fixedFoveation=U),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=U)};let G=null;function z(U,te){if(u=te.getViewerPose(c||o),y=te,u!==null){const Q=u.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let re=!1;Q.length!==P.cameras.length&&(P.cameras.length=0,re=!0);for(let ue=0;ue<Q.length;ue++){const ve=Q[ue];let Pe=null;if(m!==null)Pe=m.getViewport(ve);else{const it=d.getViewSubImage(h,ve);Pe=it.viewport,ue===0&&(e.setRenderTargetTextures(f,it.colorTexture,h.ignoreDepthValues?void 0:it.depthStencilTexture),e.setRenderTarget(f))}let we=A[ue];we===void 0&&(we=new Dn,we.layers.enable(ue),we.viewport=new It,A[ue]=we),we.matrix.fromArray(ve.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(ve.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),ue===0&&(P.matrix.copy(we.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),re===!0&&P.cameras.push(we)}}for(let Q=0;Q<v.length;Q++){const re=g[Q],ue=v[Q];re!==null&&ue!==void 0&&ue.update(re,te,c||o)}G&&G(U,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),y=null}const ce=new My;ce.setAnimationLoop(z),this.setAnimationLoop=function(U){G=U},this.dispose=function(){}}}function XR(t,e){function n(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,xy(t)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,v,g,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),d(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f)):f.isMeshStandardMaterial?(s(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,x)):f.isMeshMatcapMaterial?(s(p,f),y(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),_(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,v,g):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,n(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===fn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,n(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===fn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,n(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,n(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const v=e.get(f).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const g=t.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*g,n(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,v,g){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*v,p.scale.value=g*.5,f.map&&(p.map.value=f.map,n(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,v){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===fn&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,p.specularIntensityMapTransform))}function y(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const v=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function $R(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,g){const x=g.program;i.uniformBlockBinding(v,x)}function c(v,g){let x=r[v.id];x===void 0&&(y(v),x=u(v),r[v.id]=x,v.addEventListener("dispose",p));const S=g.program;i.updateUBOMapping(v,S);const T=e.render.frame;s[v.id]!==T&&(h(v),s[v.id]=T)}function u(v){const g=d();v.__bindingPointIndex=g;const x=t.createBuffer(),S=v.__size,T=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,S,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,x),x}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const g=r[v.id],x=v.uniforms,S=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let T=0,A=x.length;T<A;T++){const P=x[T];if(m(P,T,S)===!0){const E=P.__offset,R=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let ne=0;ne<R.length;ne++){const F=R[ne],B=_(F);typeof F=="number"?(P.__data[0]=F,t.bufferSubData(t.UNIFORM_BUFFER,E+X,P.__data)):F.isMatrix3?(P.__data[0]=F.elements[0],P.__data[1]=F.elements[1],P.__data[2]=F.elements[2],P.__data[3]=F.elements[0],P.__data[4]=F.elements[3],P.__data[5]=F.elements[4],P.__data[6]=F.elements[5],P.__data[7]=F.elements[0],P.__data[8]=F.elements[6],P.__data[9]=F.elements[7],P.__data[10]=F.elements[8],P.__data[11]=F.elements[0]):(F.toArray(P.__data,X),X+=B.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,E,P.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,g,x){const S=v.value;if(x[g]===void 0){if(typeof S=="number")x[g]=S;else{const T=Array.isArray(S)?S:[S],A=[];for(let P=0;P<T.length;P++)A.push(T[P].clone());x[g]=A}return!0}else if(typeof S=="number"){if(x[g]!==S)return x[g]=S,!0}else{const T=Array.isArray(x[g])?x[g]:[x[g]],A=Array.isArray(S)?S:[S];for(let P=0;P<T.length;P++){const E=T[P];if(E.equals(A[P])===!1)return E.copy(A[P]),!0}}return!1}function y(v){const g=v.uniforms;let x=0;const S=16;let T=0;for(let A=0,P=g.length;A<P;A++){const E=g[A],R={boundary:0,storage:0},X=Array.isArray(E.value)?E.value:[E.value];for(let ne=0,F=X.length;ne<F;ne++){const B=X[ne],H=_(B);R.boundary+=H.boundary,R.storage+=H.storage}if(E.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=x,A>0){T=x%S;const ne=S-T;T!==0&&ne-R.boundary<0&&(x+=S-T,E.__offset=x)}x+=R.storage}return T=x%S,T>0&&(x+=S-T),v.__size=x,v.__cache={},this}function _(v){const g={boundary:0,storage:0};return typeof v=="number"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function p(v){const g=v.target;g.removeEventListener("dispose",p);const x=o.indexOf(g.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function f(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}function YR(){const t=ra("canvas");return t.style.display="block",t}class by{constructor(e={}){const{canvas:n=YR(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const m=new Uint32Array(4),y=new Int32Array(4);let _=null,p=null;const f=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=ke,this.useLegacyLights=!0,this.toneMapping=Pi,this.toneMappingExposure=1;const g=this;let x=!1,S=0,T=0,A=null,P=-1,E=null;const R=new It,X=new It;let ne=null;const F=new qe(0);let B=0,H=n.width,ee=n.height,$=1,D=null,G=null;const z=new It(0,0,H,ee),ce=new It(0,0,H,ee);let U=!1;const te=new Vh;let Q=!1,re=!1,ue=null;const ve=new Rt,Pe=new Oe,we=new I,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ve(){return A===null?$:1}let O=i;function Mt(w,k){for(let q=0;q<w.length;q++){const N=w[q],K=n.getContext(N,k);if(K!==null)return K}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${kh}`),n.addEventListener("webglcontextlost",he,!1),n.addEventListener("webglcontextrestored",V,!1),n.addEventListener("webglcontextcreationerror",fe,!1),O===null){const k=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&k.shift(),O=Mt(k,w),O===null)throw Mt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Te,Ie,Ae,nt,Be,De,Ke,wt,Pt,C,M,Y,ae,oe,b,J,se,W,xe,Me,Ee,Se,_e,Ce;function je(){Te=new s3(O),Ie=new JA(O,Te,e),Te.init(Ie),Se=new HR(O,Te,Ie),Ae=new zR(O,Te,Ie),nt=new l3(O),Be=new TR,De=new BR(O,Te,Ae,Be,Ie,Se,nt),Ke=new t3(g),wt=new r3(g),Pt=new xT(O,Ie),_e=new ZA(O,Te,Pt,Ie),C=new o3(O,Pt,nt,_e),M=new d3(O,C,Pt,nt),xe=new f3(O,Ie,De),J=new e3(Be),Y=new wR(g,Ke,wt,Te,Ie,_e,J),ae=new XR(g,Be),oe=new RR,b=new UR(Te,Ie),W=new KA(g,Ke,wt,Ae,M,h,l),se=new kR(g,M,Ie),Ce=new $R(O,nt,Ie,Ae),Me=new QA(O,Te,nt,Ie),Ee=new a3(O,Te,nt,Ie),nt.programs=Y.programs,g.capabilities=Ie,g.extensions=Te,g.properties=Be,g.renderLists=oe,g.shadowMap=se,g.state=Ae,g.info=nt}je();const L=new jR(g,O);this.xr=L,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=Te.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Te.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(H,ee,!1))},this.getSize=function(w){return w.set(H,ee)},this.setSize=function(w,k,q=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=w,ee=k,n.width=Math.floor(w*$),n.height=Math.floor(k*$),q===!0&&(n.style.width=w+"px",n.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(H*$,ee*$).floor()},this.setDrawingBufferSize=function(w,k,q){H=w,ee=k,$=q,n.width=Math.floor(w*q),n.height=Math.floor(k*q),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(z)},this.setViewport=function(w,k,q,N){w.isVector4?z.set(w.x,w.y,w.z,w.w):z.set(w,k,q,N),Ae.viewport(R.copy(z).multiplyScalar($).floor())},this.getScissor=function(w){return w.copy(ce)},this.setScissor=function(w,k,q,N){w.isVector4?ce.set(w.x,w.y,w.z,w.w):ce.set(w,k,q,N),Ae.scissor(X.copy(ce).multiplyScalar($).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(w){Ae.setScissorTest(U=w)},this.setOpaqueSort=function(w){D=w},this.setTransparentSort=function(w){G=w},this.getClearColor=function(w){return w.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor.apply(W,arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha.apply(W,arguments)},this.clear=function(w=!0,k=!0,q=!0){let N=0;if(w){let K=!1;if(A!==null){const ye=A.texture.format;K=ye===cy||ye===ly||ye===ay}if(K){const ye=A.texture.type,Re=ye===ur||ye===Qi||ye===zh||ye===Or||ye===sy||ye===oy,be=W.getClearColor(),Le=W.getClearAlpha(),Ge=be.r,Ue=be.g,Fe=be.b,st=Be.get(A).__webglFramebuffer;Re?(m[0]=Ge,m[1]=Ue,m[2]=Fe,m[3]=Le,O.clearBufferuiv(O.COLOR,st,m)):(y[0]=Ge,y[1]=Ue,y[2]=Fe,y[3]=Le,O.clearBufferiv(O.COLOR,st,y))}else N|=O.COLOR_BUFFER_BIT}k&&(N|=O.DEPTH_BUFFER_BIT),q&&(N|=O.STENCIL_BUFFER_BIT),O.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",he,!1),n.removeEventListener("webglcontextrestored",V,!1),n.removeEventListener("webglcontextcreationerror",fe,!1),oe.dispose(),b.dispose(),Be.dispose(),Ke.dispose(),wt.dispose(),M.dispose(),_e.dispose(),Ce.dispose(),Y.dispose(),L.dispose(),L.removeEventListener("sessionstart",ht),L.removeEventListener("sessionend",ii),ue&&(ue.dispose(),ue=null),Kt.stop()};function he(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const w=nt.autoReset,k=se.enabled,q=se.autoUpdate,N=se.needsUpdate,K=se.type;je(),nt.autoReset=w,se.enabled=k,se.autoUpdate=q,se.needsUpdate=N,se.type=K}function fe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function pe(w){const k=w.target;k.removeEventListener("dispose",pe),Ye(k)}function Ye(w){dt(w),Be.remove(w)}function dt(w){const k=Be.get(w).programs;k!==void 0&&(k.forEach(function(q){Y.releaseProgram(q)}),w.isShaderMaterial&&Y.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,q,N,K,ye){k===null&&(k=it);const Re=K.isMesh&&K.matrixWorld.determinant()<0,be=d1(w,k,q,N,K);Ae.setMaterial(N,Re);let Le=q.index,Ge=1;N.wireframe===!0&&(Le=C.getWireframeAttribute(q),Ge=2);const Ue=q.drawRange,Fe=q.attributes.position;let st=Ue.start*Ge,mt=(Ue.start+Ue.count)*Ge;ye!==null&&(st=Math.max(st,ye.start*Ge),mt=Math.min(mt,(ye.start+ye.count)*Ge)),Le!==null?(st=Math.max(st,0),mt=Math.min(mt,Le.count)):Fe!=null&&(st=Math.max(st,0),mt=Math.min(mt,Fe.count));const zn=mt-st;if(zn<0||zn===1/0)return;_e.setup(K,N,be,q,Le);let gi,_t=Me;if(Le!==null&&(gi=Pt.get(Le),_t=Ee,_t.setIndex(gi)),K.isMesh)N.wireframe===!0?(Ae.setLineWidth(N.wireframeLinewidth*Ve()),_t.setMode(O.LINES)):_t.setMode(O.TRIANGLES);else if(K.isLine){let Xe=N.linewidth;Xe===void 0&&(Xe=1),Ae.setLineWidth(Xe*Ve()),K.isLineSegments?_t.setMode(O.LINES):K.isLineLoop?_t.setMode(O.LINE_LOOP):_t.setMode(O.LINE_STRIP)}else K.isPoints?_t.setMode(O.POINTS):K.isSprite&&_t.setMode(O.TRIANGLES);if(K.isInstancedMesh)_t.renderInstances(st,zn,K.count);else if(q.isInstancedBufferGeometry){const Xe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,tu=Math.min(q.instanceCount,Xe);_t.renderInstances(st,zn,tu)}else _t.render(st,zn)},this.compile=function(w,k){function q(N,K,ye){N.transparent===!0&&N.side===ui&&N.forceSinglePass===!1?(N.side=fn,N.needsUpdate=!0,ya(N,K,ye),N.side=hr,N.needsUpdate=!0,ya(N,K,ye),N.side=ui):ya(N,K,ye)}p=b.get(w),p.init(),v.push(p),w.traverseVisible(function(N){N.isLight&&N.layers.test(k.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights(g.useLegacyLights),w.traverse(function(N){const K=N.material;if(K)if(Array.isArray(K))for(let ye=0;ye<K.length;ye++){const Re=K[ye];q(Re,w,N)}else q(K,w,N)}),v.pop(),p=null};let vt=null;function vr(w){vt&&vt(w)}function ht(){Kt.stop()}function ii(){Kt.start()}const Kt=new My;Kt.setAnimationLoop(vr),typeof self<"u"&&Kt.setContext(self),this.setAnimationLoop=function(w){vt=w,L.setAnimationLoop(w),w===null?Kt.stop():Kt.start()},L.addEventListener("sessionstart",ht),L.addEventListener("sessionend",ii),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(k=L.updateCameraXR(k)),w.isScene===!0&&w.onBeforeRender(g,w,k,A),p=b.get(w,v.length),p.init(),v.push(p),ve.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),te.setFromProjectionMatrix(ve),re=this.localClippingEnabled,Q=J.init(this.clippingPlanes,re),_=oe.get(w,f.length),_.init(),f.push(_),rp(w,k,0,g.sortObjects),_.finish(),g.sortObjects===!0&&_.sort(D,G),Q===!0&&J.beginShadows();const q=p.state.shadowsArray;if(se.render(q,w,k),Q===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,W.render(_,w),p.setupLights(g.useLegacyLights),k.isArrayCamera){const N=k.cameras;for(let K=0,ye=N.length;K<ye;K++){const Re=N[K];sp(_,w,Re,Re.viewport)}}else sp(_,w,k);A!==null&&(De.updateMultisampleRenderTarget(A),De.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(g,w,k),_e.resetDefaultState(),P=-1,E=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function rp(w,k,q,N){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||te.intersectsSprite(w)){N&&we.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ve);const Re=M.update(w),be=w.material;be.visible&&_.push(w,Re,be,q,we.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||te.intersectsObject(w))){w.isSkinnedMesh&&w.skeleton.frame!==nt.render.frame&&(w.skeleton.update(),w.skeleton.frame=nt.render.frame);const Re=M.update(w),be=w.material;if(N&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),we.copy(w.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),we.copy(Re.boundingSphere.center)),we.applyMatrix4(w.matrixWorld).applyMatrix4(ve)),Array.isArray(be)){const Le=Re.groups;for(let Ge=0,Ue=Le.length;Ge<Ue;Ge++){const Fe=Le[Ge],st=be[Fe.materialIndex];st&&st.visible&&_.push(w,Re,st,q,we.z,Fe)}}else be.visible&&_.push(w,Re,be,q,we.z,null)}}const ye=w.children;for(let Re=0,be=ye.length;Re<be;Re++)rp(ye[Re],k,q,N)}function sp(w,k,q,N){const K=w.opaque,ye=w.transmissive,Re=w.transparent;p.setupLightsView(q),Q===!0&&J.setGlobalState(g.clippingPlanes,q),ye.length>0&&f1(K,ye,k,q),N&&Ae.viewport(R.copy(N)),K.length>0&&_a(K,k,q),ye.length>0&&_a(ye,k,q),Re.length>0&&_a(Re,k,q),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function f1(w,k,q,N){const K=Ie.isWebGL2;ue===null&&(ue=new Xr(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?ia:ur,minFilter:na,samples:K&&a===!0?4:0})),g.getDrawingBufferSize(Pe),K?ue.setSize(Pe.x,Pe.y):ue.setSize(Rd(Pe.x),Rd(Pe.y));const ye=g.getRenderTarget();g.setRenderTarget(ue),g.getClearColor(F),B=g.getClearAlpha(),B<1&&g.setClearColor(16777215,.5),g.clear();const Re=g.toneMapping;g.toneMapping=Pi,_a(w,q,N),De.updateMultisampleRenderTarget(ue),De.updateRenderTargetMipmap(ue);let be=!1;for(let Le=0,Ge=k.length;Le<Ge;Le++){const Ue=k[Le],Fe=Ue.object,st=Ue.geometry,mt=Ue.material,zn=Ue.group;if(mt.side===ui&&Fe.layers.test(N.layers)){const gi=mt.side;mt.side=fn,mt.needsUpdate=!0,op(Fe,q,N,st,mt,zn),mt.side=gi,mt.needsUpdate=!0,be=!0}}be===!0&&(De.updateMultisampleRenderTarget(ue),De.updateRenderTargetMipmap(ue)),g.setRenderTarget(ye),g.setClearColor(F,B),g.toneMapping=Re}function _a(w,k,q){const N=k.isScene===!0?k.overrideMaterial:null;for(let K=0,ye=w.length;K<ye;K++){const Re=w[K],be=Re.object,Le=Re.geometry,Ge=N===null?Re.material:N,Ue=Re.group;be.layers.test(q.layers)&&op(be,k,q,Le,Ge,Ue)}}function op(w,k,q,N,K,ye){w.onBeforeRender(g,k,q,N,K,ye),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(g,k,q,N,w,ye),K.transparent===!0&&K.side===ui&&K.forceSinglePass===!1?(K.side=fn,K.needsUpdate=!0,g.renderBufferDirect(q,k,N,K,w,ye),K.side=hr,K.needsUpdate=!0,g.renderBufferDirect(q,k,N,K,w,ye),K.side=ui):g.renderBufferDirect(q,k,N,K,w,ye),w.onAfterRender(g,k,q,N,K,ye)}function ya(w,k,q){k.isScene!==!0&&(k=it);const N=Be.get(w),K=p.state.lights,ye=p.state.shadowsArray,Re=K.state.version,be=Y.getParameters(w,K.state,ye,k,q),Le=Y.getProgramCacheKey(be);let Ge=N.programs;N.environment=w.isMeshStandardMaterial?k.environment:null,N.fog=k.fog,N.envMap=(w.isMeshStandardMaterial?wt:Ke).get(w.envMap||N.environment),Ge===void 0&&(w.addEventListener("dispose",pe),Ge=new Map,N.programs=Ge);let Ue=Ge.get(Le);if(Ue!==void 0){if(N.currentProgram===Ue&&N.lightsStateVersion===Re)return ap(w,be),Ue}else be.uniforms=Y.getUniforms(w),w.onBuild(q,be,g),w.onBeforeCompile(be,g),Ue=Y.acquireProgram(be,Le),Ge.set(Le,Ue),N.uniforms=be.uniforms;const Fe=N.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Fe.clippingPlanes=J.uniform),ap(w,be),N.needsLights=p1(w),N.lightsStateVersion=Re,N.needsLights&&(Fe.ambientLightColor.value=K.state.ambient,Fe.lightProbe.value=K.state.probe,Fe.directionalLights.value=K.state.directional,Fe.directionalLightShadows.value=K.state.directionalShadow,Fe.spotLights.value=K.state.spot,Fe.spotLightShadows.value=K.state.spotShadow,Fe.rectAreaLights.value=K.state.rectArea,Fe.ltc_1.value=K.state.rectAreaLTC1,Fe.ltc_2.value=K.state.rectAreaLTC2,Fe.pointLights.value=K.state.point,Fe.pointLightShadows.value=K.state.pointShadow,Fe.hemisphereLights.value=K.state.hemi,Fe.directionalShadowMap.value=K.state.directionalShadowMap,Fe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Fe.spotShadowMap.value=K.state.spotShadowMap,Fe.spotLightMatrix.value=K.state.spotLightMatrix,Fe.spotLightMap.value=K.state.spotLightMap,Fe.pointShadowMap.value=K.state.pointShadowMap,Fe.pointShadowMatrix.value=K.state.pointShadowMatrix);const st=Ue.getUniforms(),mt=Ml.seqWithValue(st.seq,Fe);return N.currentProgram=Ue,N.uniformsList=mt,Ue}function ap(w,k){const q=Be.get(w);q.outputColorSpace=k.outputColorSpace,q.instancing=k.instancing,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function d1(w,k,q,N,K){k.isScene!==!0&&(k=it),De.resetTextureUnits();const ye=k.fog,Re=N.isMeshStandardMaterial?k.environment:null,be=A===null?g.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:mi,Le=(N.isMeshStandardMaterial?wt:Ke).get(N.envMap||Re),Ge=N.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ue=!!q.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),Fe=!!q.morphAttributes.position,st=!!q.morphAttributes.normal,mt=!!q.morphAttributes.color,zn=N.toneMapped?g.toneMapping:Pi,gi=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,_t=gi!==void 0?gi.length:0,Xe=Be.get(N),tu=p.state.lights;if(Q===!0&&(re===!0||w!==E)){const pn=w===E&&N.id===P;J.setState(N,w,pn)}let Lt=!1;N.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==tu.state.version||Xe.outputColorSpace!==be||K.isInstancedMesh&&Xe.instancing===!1||!K.isInstancedMesh&&Xe.instancing===!0||K.isSkinnedMesh&&Xe.skinning===!1||!K.isSkinnedMesh&&Xe.skinning===!0||Xe.envMap!==Le||N.fog===!0&&Xe.fog!==ye||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==J.numPlanes||Xe.numIntersection!==J.numIntersection)||Xe.vertexAlphas!==Ge||Xe.vertexTangents!==Ue||Xe.morphTargets!==Fe||Xe.morphNormals!==st||Xe.morphColors!==mt||Xe.toneMapping!==zn||Ie.isWebGL2===!0&&Xe.morphTargetsCount!==_t)&&(Lt=!0):(Lt=!0,Xe.__version=N.version);let _r=Xe.currentProgram;Lt===!0&&(_r=ya(N,k,K));let lp=!1,so=!1,nu=!1;const Zt=_r.getUniforms(),yr=Xe.uniforms;if(Ae.useProgram(_r.program)&&(lp=!0,so=!0,nu=!0),N.id!==P&&(P=N.id,so=!0),lp||E!==w){if(Zt.setValue(O,"projectionMatrix",w.projectionMatrix),Ie.logarithmicDepthBuffer&&Zt.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),E!==w&&(E=w,so=!0,nu=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const pn=Zt.map.cameraPosition;pn!==void 0&&pn.setValue(O,we.setFromMatrixPosition(w.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Zt.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||K.isSkinnedMesh)&&Zt.setValue(O,"viewMatrix",w.matrixWorldInverse)}if(K.isSkinnedMesh){Zt.setOptional(O,K,"bindMatrix"),Zt.setOptional(O,K,"bindMatrixInverse");const pn=K.skeleton;pn&&(Ie.floatVertexTextures?(pn.boneTexture===null&&pn.computeBoneTexture(),Zt.setValue(O,"boneTexture",pn.boneTexture,De),Zt.setValue(O,"boneTextureSize",pn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const iu=q.morphAttributes;if((iu.position!==void 0||iu.normal!==void 0||iu.color!==void 0&&Ie.isWebGL2===!0)&&xe.update(K,q,_r),(so||Xe.receiveShadow!==K.receiveShadow)&&(Xe.receiveShadow=K.receiveShadow,Zt.setValue(O,"receiveShadow",K.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(yr.envMap.value=Le,yr.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),so&&(Zt.setValue(O,"toneMappingExposure",g.toneMappingExposure),Xe.needsLights&&h1(yr,nu),ye&&N.fog===!0&&ae.refreshFogUniforms(yr,ye),ae.refreshMaterialUniforms(yr,N,$,ee,ue),Ml.upload(O,Xe.uniformsList,yr,De)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Ml.upload(O,Xe.uniformsList,yr,De),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Zt.setValue(O,"center",K.center),Zt.setValue(O,"modelViewMatrix",K.modelViewMatrix),Zt.setValue(O,"normalMatrix",K.normalMatrix),Zt.setValue(O,"modelMatrix",K.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const pn=N.uniformsGroups;for(let ru=0,m1=pn.length;ru<m1;ru++)if(Ie.isWebGL2){const cp=pn[ru];Ce.update(cp,_r),Ce.bind(cp,_r)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _r}function h1(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function p1(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,k,q){Be.get(w.texture).__webglTexture=k,Be.get(w.depthTexture).__webglTexture=q;const N=Be.get(w);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=q===void 0,N.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,k){const q=Be.get(w);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,q=0){A=w,S=k,T=q;let N=!0,K=null,ye=!1,Re=!1;if(w){const Le=Be.get(w);Le.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(O.FRAMEBUFFER,null),N=!1):Le.__webglFramebuffer===void 0?De.setupRenderTarget(w):Le.__hasExternalTextures&&De.rebindTextures(w,Be.get(w.texture).__webglTexture,Be.get(w.depthTexture).__webglTexture);const Ge=w.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Re=!0);const Ue=Be.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(K=Ue[k],ye=!0):Ie.isWebGL2&&w.samples>0&&De.useMultisampledRTT(w)===!1?K=Be.get(w).__webglMultisampledFramebuffer:K=Ue,R.copy(w.viewport),X.copy(w.scissor),ne=w.scissorTest}else R.copy(z).multiplyScalar($).floor(),X.copy(ce).multiplyScalar($).floor(),ne=U;if(Ae.bindFramebuffer(O.FRAMEBUFFER,K)&&Ie.drawBuffers&&N&&Ae.drawBuffers(w,K),Ae.viewport(R),Ae.scissor(X),Ae.setScissorTest(ne),ye){const Le=Be.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,Le.__webglTexture,q)}else if(Re){const Le=Be.get(w.texture),Ge=k||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Le.__webglTexture,q||0,Ge)}P=-1},this.readRenderTargetPixels=function(w,k,q,N,K,ye,Re){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(be=be[Re]),be){Ae.bindFramebuffer(O.FRAMEBUFFER,be);try{const Le=w.texture,Ge=Le.format,Ue=Le.type;if(Ge!==Kn&&Se.convert(Ge)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Ue===ia&&(Te.has("EXT_color_buffer_half_float")||Ie.isWebGL2&&Te.has("EXT_color_buffer_float"));if(Ue!==ur&&Se.convert(Ue)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ue===Ji&&(Ie.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-N&&q>=0&&q<=w.height-K&&O.readPixels(k,q,N,K,Se.convert(Ge),Se.convert(Ue),ye)}finally{const Le=A!==null?Be.get(A).__webglFramebuffer:null;Ae.bindFramebuffer(O.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(w,k,q=0){const N=Math.pow(2,-q),K=Math.floor(k.image.width*N),ye=Math.floor(k.image.height*N);De.setTexture2D(k,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,w.x,w.y,K,ye),Ae.unbindTexture()},this.copyTextureToTexture=function(w,k,q,N=0){const K=k.image.width,ye=k.image.height,Re=Se.convert(q.format),be=Se.convert(q.type);De.setTexture2D(q,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,q.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,q.unpackAlignment),k.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,N,w.x,w.y,K,ye,Re,be,k.image.data):k.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,N,w.x,w.y,k.mipmaps[0].width,k.mipmaps[0].height,Re,k.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,N,w.x,w.y,Re,be,k.image),N===0&&q.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(w,k,q,N,K=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=w.max.x-w.min.x+1,Re=w.max.y-w.min.y+1,be=w.max.z-w.min.z+1,Le=Se.convert(N.format),Ge=Se.convert(N.type);let Ue;if(N.isData3DTexture)De.setTexture3D(N,0),Ue=O.TEXTURE_3D;else if(N.isDataArrayTexture)De.setTexture2DArray(N,0),Ue=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,N.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,N.unpackAlignment);const Fe=O.getParameter(O.UNPACK_ROW_LENGTH),st=O.getParameter(O.UNPACK_IMAGE_HEIGHT),mt=O.getParameter(O.UNPACK_SKIP_PIXELS),zn=O.getParameter(O.UNPACK_SKIP_ROWS),gi=O.getParameter(O.UNPACK_SKIP_IMAGES),_t=q.isCompressedTexture?q.mipmaps[0]:q.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,_t.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,_t.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,w.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,w.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,w.min.z),q.isDataTexture||q.isData3DTexture?O.texSubImage3D(Ue,K,k.x,k.y,k.z,ye,Re,be,Le,Ge,_t.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Ue,K,k.x,k.y,k.z,ye,Re,be,Le,_t.data)):O.texSubImage3D(Ue,K,k.x,k.y,k.z,ye,Re,be,Le,Ge,_t),O.pixelStorei(O.UNPACK_ROW_LENGTH,Fe),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,st),O.pixelStorei(O.UNPACK_SKIP_PIXELS,mt),O.pixelStorei(O.UNPACK_SKIP_ROWS,zn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,gi),K===0&&N.generateMipmaps&&O.generateMipmap(Ue),Ae.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?De.setTextureCube(w,0):w.isData3DTexture?De.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?De.setTexture2DArray(w,0):De.setTexture2D(w,0),Ae.unbindTexture()},this.resetState=function(){S=0,T=0,A=null,Ae.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ke?kr:uy}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===kr?ke:mi}}class qR extends by{}qR.prototype.isWebGL1Renderer=!0;class KR extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class jh extends ki{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let d=e;const h=(n-e)/r,m=new I,y=new Oe;for(let _=0;_<=r;_++){for(let p=0;p<=i;p++){const f=s+p/i*o;m.x=d*Math.cos(f),m.y=d*Math.sin(f),l.push(m.x,m.y,m.z),c.push(0,0,1),y.x=(m.x/n+1)/2,y.y=(m.y/n+1)/2,u.push(y.x,y.y)}d+=h}for(let _=0;_<r;_++){const p=_*(i+1);for(let f=0;f<i;f++){const v=f+p,g=v,x=v+i+1,S=v+i+2,T=v+1;a.push(g,x,T),a.push(x,S,T)}}this.setIndex(a),this.setAttribute("position",new En(l,3)),this.setAttribute("normal",new En(c,3)),this.setAttribute("uv",new En(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class tc extends ki{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new I,h=new I,m=[],y=[],_=[],p=[];for(let f=0;f<=i;f++){const v=[],g=f/i;let x=0;f===0&&o===0?x=.5/n:f===i&&l===Math.PI&&(x=-.5/n);for(let S=0;S<=n;S++){const T=S/n;d.x=-e*Math.cos(r+T*s)*Math.sin(o+g*a),d.y=e*Math.cos(o+g*a),d.z=e*Math.sin(r+T*s)*Math.sin(o+g*a),y.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),p.push(T+x,1-g),v.push(c++)}u.push(v)}for(let f=0;f<i;f++)for(let v=0;v<n;v++){const g=u[f][v+1],x=u[f][v],S=u[f+1][v],T=u[f+1][v+1];(f!==0||o>0)&&m.push(g,x,T),(f!==i-1||l<Math.PI)&&m.push(x,S,T)}this.setIndex(m),this.setAttribute("position",new En(y,3)),this.setAttribute("normal",new En(_,3)),this.setAttribute("uv",new En(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const $0={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class ZR{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const m=c[d],y=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return y}return null}}}const QR=new ZR;class Py{constructor(e){this.manager=e!==void 0?e:QR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class JR extends Py{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=$0.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=ra("img");function l(){u(),$0.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Y0 extends Py{constructor(e){super(e)}load(e,n,i,r){const s=new dn,o=new JR(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Ly extends Yt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const df=new Rt,q0=new I,K0=new I;class eC{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vh,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;q0.setFromMatrixPosition(e.matrixWorld),n.position.copy(q0),K0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(K0),n.updateMatrixWorld(),df.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(df),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(df)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class tC extends eC{constructor(){super(new wy(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nC extends Ly{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new tC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class iC extends Ly{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class rC{constructor(e,n,i=0,r=1/0){this.ray=new gy(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Hh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return bd(e,this,i,n),i.sort(Z0),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)bd(e[r],this,i,n);return i.sort(Z0),i}}function Z0(t,e){return t.distance-e.distance}function bd(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)bd(r[s],e,n,!0)}}class Q0{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(tn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kh);const J0={type:"change"},hf={type:"start"},eg={type:"end"};class sC extends Zr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Jr.ROTATE,MIDDLE:Jr.DOLLY,RIGHT:Jr.PAN},this.touches={ONE:es.ROTATE,TWO:es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(b){b.addEventListener("keydown",Ke),this._domElementKeyEvents=b},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ke),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(J0),i.update(),s=r.NONE},this.update=function(){const b=new I,J=new $r().setFromUnitVectors(e.up,new I(0,1,0)),se=J.clone().invert(),W=new I,xe=new $r,Me=new I,Ee=2*Math.PI;return function(){const _e=i.object.position;b.copy(_e).sub(i.target),b.applyQuaternion(J),a.setFromVector3(b),i.autoRotate&&s===r.NONE&&E(A()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ce=i.minAzimuthAngle,je=i.maxAzimuthAngle;return isFinite(Ce)&&isFinite(je)&&(Ce<-Math.PI?Ce+=Ee:Ce>Math.PI&&(Ce-=Ee),je<-Math.PI?je+=Ee:je>Math.PI&&(je-=Ee),Ce<=je?a.theta=Math.max(Ce,Math.min(je,a.theta)):a.theta=a.theta>(Ce+je)/2?Math.max(Ce,a.theta):Math.min(je,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),b.setFromSpherical(a),b.applyQuaternion(se),_e.copy(i.target).add(b),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,d||W.distanceToSquared(i.object.position)>o||8*(1-xe.dot(i.object.quaternion))>o||Me.distanceToSquared(i.target)>0?(i.dispatchEvent(J0),W.copy(i.object.position),xe.copy(i.object.quaternion),Me.copy(i.target),d=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",C),i.domElement.removeEventListener("pointerdown",Te),i.domElement.removeEventListener("pointercancel",Ae),i.domElement.removeEventListener("wheel",De),i.domElement.removeEventListener("pointermove",Ie),i.domElement.removeEventListener("pointerup",Ae),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Ke),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Q0,l=new Q0;let c=1;const u=new I;let d=!1;const h=new Oe,m=new Oe,y=new Oe,_=new Oe,p=new Oe,f=new Oe,v=new Oe,g=new Oe,x=new Oe,S=[],T={};function A(){return 2*Math.PI/60/60*i.autoRotateSpeed}function P(){return Math.pow(.95,i.zoomSpeed)}function E(b){l.theta-=b}function R(b){l.phi-=b}const X=function(){const b=new I;return function(se,W){b.setFromMatrixColumn(W,0),b.multiplyScalar(-se),u.add(b)}}(),ne=function(){const b=new I;return function(se,W){i.screenSpacePanning===!0?b.setFromMatrixColumn(W,1):(b.setFromMatrixColumn(W,0),b.crossVectors(i.object.up,b)),b.multiplyScalar(se),u.add(b)}}(),F=function(){const b=new I;return function(se,W){const xe=i.domElement;if(i.object.isPerspectiveCamera){const Me=i.object.position;b.copy(Me).sub(i.target);let Ee=b.length();Ee*=Math.tan(i.object.fov/2*Math.PI/180),X(2*se*Ee/xe.clientHeight,i.object.matrix),ne(2*W*Ee/xe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(X(se*(i.object.right-i.object.left)/i.object.zoom/xe.clientWidth,i.object.matrix),ne(W*(i.object.top-i.object.bottom)/i.object.zoom/xe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function B(b){i.object.isPerspectiveCamera?c/=b:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*b)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function H(b){i.object.isPerspectiveCamera?c*=b:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/b)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ee(b){h.set(b.clientX,b.clientY)}function $(b){v.set(b.clientX,b.clientY)}function D(b){_.set(b.clientX,b.clientY)}function G(b){m.set(b.clientX,b.clientY),y.subVectors(m,h).multiplyScalar(i.rotateSpeed);const J=i.domElement;E(2*Math.PI*y.x/J.clientHeight),R(2*Math.PI*y.y/J.clientHeight),h.copy(m),i.update()}function z(b){g.set(b.clientX,b.clientY),x.subVectors(g,v),x.y>0?B(P()):x.y<0&&H(P()),v.copy(g),i.update()}function ce(b){p.set(b.clientX,b.clientY),f.subVectors(p,_).multiplyScalar(i.panSpeed),F(f.x,f.y),_.copy(p),i.update()}function U(b){b.deltaY<0?H(P()):b.deltaY>0&&B(P()),i.update()}function te(b){let J=!1;switch(b.code){case i.keys.UP:b.ctrlKey||b.metaKey||b.shiftKey?R(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):F(0,i.keyPanSpeed),J=!0;break;case i.keys.BOTTOM:b.ctrlKey||b.metaKey||b.shiftKey?R(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):F(0,-i.keyPanSpeed),J=!0;break;case i.keys.LEFT:b.ctrlKey||b.metaKey||b.shiftKey?E(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):F(i.keyPanSpeed,0),J=!0;break;case i.keys.RIGHT:b.ctrlKey||b.metaKey||b.shiftKey?E(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):F(-i.keyPanSpeed,0),J=!0;break}J&&(b.preventDefault(),i.update())}function Q(){if(S.length===1)h.set(S[0].pageX,S[0].pageY);else{const b=.5*(S[0].pageX+S[1].pageX),J=.5*(S[0].pageY+S[1].pageY);h.set(b,J)}}function re(){if(S.length===1)_.set(S[0].pageX,S[0].pageY);else{const b=.5*(S[0].pageX+S[1].pageX),J=.5*(S[0].pageY+S[1].pageY);_.set(b,J)}}function ue(){const b=S[0].pageX-S[1].pageX,J=S[0].pageY-S[1].pageY,se=Math.sqrt(b*b+J*J);v.set(0,se)}function ve(){i.enableZoom&&ue(),i.enablePan&&re()}function Pe(){i.enableZoom&&ue(),i.enableRotate&&Q()}function we(b){if(S.length==1)m.set(b.pageX,b.pageY);else{const se=oe(b),W=.5*(b.pageX+se.x),xe=.5*(b.pageY+se.y);m.set(W,xe)}y.subVectors(m,h).multiplyScalar(i.rotateSpeed);const J=i.domElement;E(2*Math.PI*y.x/J.clientHeight),R(2*Math.PI*y.y/J.clientHeight),h.copy(m)}function it(b){if(S.length===1)p.set(b.pageX,b.pageY);else{const J=oe(b),se=.5*(b.pageX+J.x),W=.5*(b.pageY+J.y);p.set(se,W)}f.subVectors(p,_).multiplyScalar(i.panSpeed),F(f.x,f.y),_.copy(p)}function Ve(b){const J=oe(b),se=b.pageX-J.x,W=b.pageY-J.y,xe=Math.sqrt(se*se+W*W);g.set(0,xe),x.set(0,Math.pow(g.y/v.y,i.zoomSpeed)),B(x.y),v.copy(g)}function O(b){i.enableZoom&&Ve(b),i.enablePan&&it(b)}function Mt(b){i.enableZoom&&Ve(b),i.enableRotate&&we(b)}function Te(b){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(b.pointerId),i.domElement.addEventListener("pointermove",Ie),i.domElement.addEventListener("pointerup",Ae)),M(b),b.pointerType==="touch"?wt(b):nt(b))}function Ie(b){i.enabled!==!1&&(b.pointerType==="touch"?Pt(b):Be(b))}function Ae(b){Y(b),S.length===0&&(i.domElement.releasePointerCapture(b.pointerId),i.domElement.removeEventListener("pointermove",Ie),i.domElement.removeEventListener("pointerup",Ae)),i.dispatchEvent(eg),s=r.NONE}function nt(b){let J;switch(b.button){case 0:J=i.mouseButtons.LEFT;break;case 1:J=i.mouseButtons.MIDDLE;break;case 2:J=i.mouseButtons.RIGHT;break;default:J=-1}switch(J){case Jr.DOLLY:if(i.enableZoom===!1)return;$(b),s=r.DOLLY;break;case Jr.ROTATE:if(b.ctrlKey||b.metaKey||b.shiftKey){if(i.enablePan===!1)return;D(b),s=r.PAN}else{if(i.enableRotate===!1)return;ee(b),s=r.ROTATE}break;case Jr.PAN:if(b.ctrlKey||b.metaKey||b.shiftKey){if(i.enableRotate===!1)return;ee(b),s=r.ROTATE}else{if(i.enablePan===!1)return;D(b),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(hf)}function Be(b){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;G(b);break;case r.DOLLY:if(i.enableZoom===!1)return;z(b);break;case r.PAN:if(i.enablePan===!1)return;ce(b);break}}function De(b){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(b.preventDefault(),i.dispatchEvent(hf),U(b),i.dispatchEvent(eg))}function Ke(b){i.enabled===!1||i.enablePan===!1||te(b)}function wt(b){switch(ae(b),S.length){case 1:switch(i.touches.ONE){case es.ROTATE:if(i.enableRotate===!1)return;Q(),s=r.TOUCH_ROTATE;break;case es.PAN:if(i.enablePan===!1)return;re(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case es.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ve(),s=r.TOUCH_DOLLY_PAN;break;case es.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Pe(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(hf)}function Pt(b){switch(ae(b),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;we(b),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;it(b),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;O(b),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Mt(b),i.update();break;default:s=r.NONE}}function C(b){i.enabled!==!1&&b.preventDefault()}function M(b){S.push(b)}function Y(b){delete T[b.pointerId];for(let J=0;J<S.length;J++)if(S[J].pointerId==b.pointerId){S.splice(J,1);return}}function ae(b){let J=T[b.pointerId];J===void 0&&(J=new Oe,T[b.pointerId]=J),J.set(b.pageX,b.pageY)}function oe(b){const J=b.pointerId===S[0].pointerId?S[1]:S[0];return T[J.pointerId]}i.domElement.addEventListener("contextmenu",C),i.domElement.addEventListener("pointerdown",Te),i.domElement.addEventListener("pointercancel",Ae),i.domElement.addEventListener("wheel",De,{passive:!1}),this.update()}}const oC=()=>{const t=ge.useRef(null),[e,n]=ge.useState({x:0,y:0}),[i,r]=ge.useState(null),s=ge.useRef(null);class o{constructor(){xr(this,"positionX");xr(this,"positionY");xr(this,"positionZ");xr(this,"star");xr(this,"shape");xr(this,"material");this.positionX=Math.random()*400-200,this.positionY=Math.random()*400-200,this.positionZ=Math.random()*400-200,this.shape=new tc(.2,32,32),this.material=new Fo({color:16777215}),this.star=new yn(this.shape,this.material),this.star.position.set(this.positionX,this.positionY,this.positionZ)}}return ge.useEffect(()=>{if(t.current){const a=new KR,l=new qe("#afcaad");a.background=l;const c=new Dn(75,window.innerWidth/window.innerHeight,.1,1e3);c.position.z=50,c.position.y=0,c.position.x=0;const u=new by({canvas:t.current,antialias:!0});u.setSize(window.innerWidth,window.innerHeight),u.setPixelRatio(window.devicePixelRatio);const d=new Ao;a.add(d);const h=4,m=64,y=new tc(h,m,m),_=new Ii({uniforms:{time:{value:0}},vertexShader:`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          uniform float time;
          varying vec2 vUv;
          void main() {
            vec2 center = vec2(0.5, 0.5);
            float dist = distance(vUv, center);
            float alpha = smoothstep(0.5, 0.2, dist);
            vec3 color = mix(vec3(0.0), vec3(0.5, 0.0, 0.5), smoothstep(0.2, 0.5, dist));
            color += 0.05 * sin(dist * 50.0 - time * 2.0);
            gl_FragColor = vec4(color, alpha);
          }
        `,transparent:!0}),p=new yn(y,_);d.add(p);const f=new jh(h,h*3,64),v=new Ii({uniforms:{time:{value:0}},vertexShader:`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          uniform float time;
          varying vec2 vUv;
      
          float noise(vec2 st) {
            return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
          }
      
          void main() {
            float angle = atan(vUv.y - 0.5, vUv.x - 0.5);
            float dist = distance(vUv, vec2(0.5));
            
            vec3 baseColor = mix(vec3(0.1, 0.05, 0.3), vec3(0.7, 0.3, 0.1), smoothstep(0.33, 0.47, dist));
            
            float noiseValue = noise(vUv * 10.0 + time * 0.1);
            baseColor += noiseValue * 0.1;
            
            baseColor += 0.05 * sin(dist * 30.0 - time + angle * 5.0);
      
            float alpha = smoothstep(0.33, 0.35, dist) * (1.0 - smoothstep(0.45, 0.47, dist));
            
            float glow = exp(-dist * 5.0) * 0.2;
            baseColor += vec3(glow);
      
            gl_FragColor = vec4(baseColor, alpha);
          }
        `,side:ui,transparent:!0,blending:yd}),g=new yn(f,v);g.rotation.x=Math.PI/4,d.add(g);const x=new Y0().load("/assets/linkedInOrbit.png"),S=new Yr(2,2,2),T=new Fo({map:x}),A=new yn(S,T);A.name="linkedin",A.position.set(-10,0,0),a.add(A);const P=new Y0().load("/assets/githubOrbit.png"),E=new Yr(2,2,2),R=new Fo({map:P}),X=new yn(E,R);X.name="github",X.position.set(10,0,0),a.add(X),d.add(X),d.add(A),d.position.y=-13;for(let re=0;re<2e3;re++){let ue=new o;a.add(ue.star)}const ne=new iC(16777215,.5);a.add(ne);const F=new nC(16777215,.5);F.position.set(0,1,0),a.add(F);const B=new sC(c,t.current);B.enableDamping=!0,B.enableRotate=!0,B.enableZoom=!1,B.enablePan=!1,B.autoRotate=!0,B.autoRotateSpeed=.5;let H=0,ee=0;const $=()=>{H=window.scrollY/(document.documentElement.scrollHeight-window.innerHeight),H=Math.min(Math.max(H,0),1);const re=Math.min(H*5,1),ue=new qe().lerpColors(l,new qe(0,0,0),re);a.background=ue,document.body.style.backgroundColor=ue.getStyle();const ve=document.getElementById("landing_name_intro"),Pe=document.getElementById("landing_p_intro");if(ve&&Pe){const we=new qe().lerpColors(new qe(0,0,0),new qe(1,1,1),re);ve.style.color=we.getStyle(),Pe.style.color=we.getStyle()}},D=re=>{const ue=window.innerWidth/8,ve=re*ue;d.position.x=ve,A.position.x=-10-re*20,X.position.x=10+re*20},G=()=>{c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),u.setSize(window.innerWidth,window.innerHeight),D(H)};window.addEventListener("scroll",$,{passive:!0}),window.addEventListener("resize",G);const z=new rC,ce=new Oe,U=re=>{ce.x=re.clientX/window.innerWidth*2-1,ce.y=-(re.clientY/window.innerHeight)*2+1,n({x:re.clientX,y:re.clientY})},te=()=>{s.current==="linkedin"?window.open("https://www.linkedin.com/in/leonardojim/","_blank"):s.current==="github"?window.open("https://www.github.com/leoqode","_blank"):console.log("No matching hoveredMesh found.")};window.addEventListener("mousemove",U),window.addEventListener("click",te);const Q=()=>{requestAnimationFrame(Q),ee+=.01,_.uniforms.time.value=ee,v.uniforms.time.value=ee;const re=Math.max(1-H*.5,.5);p.scale.set(re,re,re),g.scale.set(re,re,re);const ue=.005;g.rotation.z+=ue*2,D(H),g.rotation.z+=ue*2;const ve=window.innerWidth/8,Pe=H*ve;d.position.x+=(Pe-d.position.x)*.05,A.position.x=-10-H*20,X.position.x=10+H*20,z.setFromCamera(ce,c);const we=z.intersectObjects([A,X]);if(we.length>0){const it=we[0].object;s.current!==it.name&&(s.current=it.name,r(it.name)),it.scale.lerp(new I(1.2,1.2,1.2),.1),document.body.style.cursor="pointer"}else s.current!==null&&(s.current=null,r(null)),document.body.style.cursor="default",A.scale.lerp(new I(1,1,1),.1),X.scale.lerp(new I(1,1,1),.1);B.update(),u.render(a,c)};return Q(),()=>{window.removeEventListener("scroll",$),window.removeEventListener("resize",G),window.removeEventListener("mousemove",U),window.removeEventListener("click",te)}}},[]),Z.jsxs(Z.Fragment,{children:[Z.jsx("canvas",{ref:t,className:"webgl"}),i&&Z.jsx("div",{style:{position:"absolute",left:e.x+10,top:e.y+10,background:"rgba(0, 0, 0, 0.7)",color:"white",padding:"5px 10px",borderRadius:"5px",pointerEvents:"none"},children:i==="linkedin"?"Visit LinkedIn":"Visit GitHub"})]})};function aC(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function lC(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var cC=function(){function t(n){var i=this;this._insertTag=function(r){var s;i.tags.length===0?i.insertionPoint?s=i.insertionPoint.nextSibling:i.prepend?s=i.container.firstChild:s=i.before:s=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(r,s),i.tags.push(r)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(i){i.forEach(this._insertTag)},e.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(lC(this));var r=this.tags[this.tags.length-1];if(this.isSpeedy){var s=aC(r);try{s.insertRule(i,s.cssRules.length)}catch{}}else r.appendChild(document.createTextNode(i));this.ctr++},e.flush=function(){this.tags.forEach(function(i){return i.parentNode&&i.parentNode.removeChild(i)}),this.tags=[],this.ctr=0},t}(),Xt="-ms-",nc="-moz-",Ze="-webkit-",Dy="comm",Xh="rule",$h="decl",uC="@import",Uy="@keyframes",fC="@layer",dC=Math.abs,Dc=String.fromCharCode,hC=Object.assign;function pC(t,e){return zt(t,0)^45?(((e<<2^zt(t,0))<<2^zt(t,1))<<2^zt(t,2))<<2^zt(t,3):0}function Ny(t){return t.trim()}function mC(t,e){return(t=e.exec(t))?t[0]:t}function Qe(t,e,n){return t.replace(e,n)}function Pd(t,e){return t.indexOf(e)}function zt(t,e){return t.charCodeAt(e)|0}function sa(t,e,n){return t.slice(e,n)}function ai(t){return t.length}function Yh(t){return t.length}function rl(t,e){return e.push(t),t}function gC(t,e){return t.map(e).join("")}var Uc=1,Zs=1,Iy=0,hn=0,xt=0,ro="";function Nc(t,e,n,i,r,s,o){return{value:t,root:e,parent:n,type:i,props:r,children:s,line:Uc,column:Zs,length:o,return:""}}function xo(t,e){return hC(Nc("",null,null,"",null,null,0),t,{length:-t.length},e)}function vC(){return xt}function _C(){return xt=hn>0?zt(ro,--hn):0,Zs--,xt===10&&(Zs=1,Uc--),xt}function Mn(){return xt=hn<Iy?zt(ro,hn++):0,Zs++,xt===10&&(Zs=1,Uc++),xt}function pi(){return zt(ro,hn)}function wl(){return hn}function va(t,e){return sa(ro,t,e)}function oa(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Oy(t){return Uc=Zs=1,Iy=ai(ro=t),hn=0,[]}function Fy(t){return ro="",t}function Tl(t){return Ny(va(hn-1,Ld(t===91?t+2:t===40?t+1:t)))}function yC(t){for(;(xt=pi())&&xt<33;)Mn();return oa(t)>2||oa(xt)>3?"":" "}function xC(t,e){for(;--e&&Mn()&&!(xt<48||xt>102||xt>57&&xt<65||xt>70&&xt<97););return va(t,wl()+(e<6&&pi()==32&&Mn()==32))}function Ld(t){for(;Mn();)switch(xt){case t:return hn;case 34:case 39:t!==34&&t!==39&&Ld(xt);break;case 40:t===41&&Ld(t);break;case 92:Mn();break}return hn}function SC(t,e){for(;Mn()&&t+xt!==47+10;)if(t+xt===42+42&&pi()===47)break;return"/*"+va(e,hn-1)+"*"+Dc(t===47?t:Mn())}function EC(t){for(;!oa(pi());)Mn();return va(t,hn)}function MC(t){return Fy(Al("",null,null,null,[""],t=Oy(t),0,[0],t))}function Al(t,e,n,i,r,s,o,a,l){for(var c=0,u=0,d=o,h=0,m=0,y=0,_=1,p=1,f=1,v=0,g="",x=r,S=s,T=i,A=g;p;)switch(y=v,v=Mn()){case 40:if(y!=108&&zt(A,d-1)==58){Pd(A+=Qe(Tl(v),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:A+=Tl(v);break;case 9:case 10:case 13:case 32:A+=yC(y);break;case 92:A+=xC(wl()-1,7);continue;case 47:switch(pi()){case 42:case 47:rl(wC(SC(Mn(),wl()),e,n),l);break;default:A+="/"}break;case 123*_:a[c++]=ai(A)*f;case 125*_:case 59:case 0:switch(v){case 0:case 125:p=0;case 59+u:f==-1&&(A=Qe(A,/\f/g,"")),m>0&&ai(A)-d&&rl(m>32?ng(A+";",i,n,d-1):ng(Qe(A," ","")+";",i,n,d-2),l);break;case 59:A+=";";default:if(rl(T=tg(A,e,n,c,u,r,a,g,x=[],S=[],d),s),v===123)if(u===0)Al(A,e,T,T,x,s,d,a,S);else switch(h===99&&zt(A,3)===110?100:h){case 100:case 108:case 109:case 115:Al(t,T,T,i&&rl(tg(t,T,T,0,0,r,a,g,r,x=[],d),S),r,S,d,a,i?x:S);break;default:Al(A,T,T,T,[""],S,0,a,S)}}c=u=m=0,_=f=1,g=A="",d=o;break;case 58:d=1+ai(A),m=y;default:if(_<1){if(v==123)--_;else if(v==125&&_++==0&&_C()==125)continue}switch(A+=Dc(v),v*_){case 38:f=u>0?1:(A+="\f",-1);break;case 44:a[c++]=(ai(A)-1)*f,f=1;break;case 64:pi()===45&&(A+=Tl(Mn())),h=pi(),u=d=ai(g=A+=EC(wl())),v++;break;case 45:y===45&&ai(A)==2&&(_=0)}}return s}function tg(t,e,n,i,r,s,o,a,l,c,u){for(var d=r-1,h=r===0?s:[""],m=Yh(h),y=0,_=0,p=0;y<i;++y)for(var f=0,v=sa(t,d+1,d=dC(_=o[y])),g=t;f<m;++f)(g=Ny(_>0?h[f]+" "+v:Qe(v,/&\f/g,h[f])))&&(l[p++]=g);return Nc(t,e,n,r===0?Xh:a,l,c,u)}function wC(t,e,n){return Nc(t,e,n,Dy,Dc(vC()),sa(t,2,-2),0)}function ng(t,e,n,i){return Nc(t,e,n,$h,sa(t,0,i),sa(t,i+1,-1),i)}function zs(t,e){for(var n="",i=Yh(t),r=0;r<i;r++)n+=e(t[r],r,t,e)||"";return n}function TC(t,e,n,i){switch(t.type){case fC:if(t.children.length)break;case uC:case $h:return t.return=t.return||t.value;case Dy:return"";case Uy:return t.return=t.value+"{"+zs(t.children,i)+"}";case Xh:t.value=t.props.join(",")}return ai(n=zs(t.children,i))?t.return=t.value+"{"+n+"}":""}function AC(t){var e=Yh(t);return function(n,i,r,s){for(var o="",a=0;a<e;a++)o+=t[a](n,i,r,s)||"";return o}}function RC(t){return function(e){e.root||(e=e.return)&&t(e)}}function CC(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var bC=function(e,n,i){for(var r=0,s=0;r=s,s=pi(),r===38&&s===12&&(n[i]=1),!oa(s);)Mn();return va(e,hn)},PC=function(e,n){var i=-1,r=44;do switch(oa(r)){case 0:r===38&&pi()===12&&(n[i]=1),e[i]+=bC(hn-1,n,i);break;case 2:e[i]+=Tl(r);break;case 4:if(r===44){e[++i]=pi()===58?"&\f":"",n[i]=e[i].length;break}default:e[i]+=Dc(r)}while(r=Mn());return e},LC=function(e,n){return Fy(PC(Oy(e),n))},ig=new WeakMap,DC=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,i=e.parent,r=e.column===i.column&&e.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!ig.get(i))&&!r){ig.set(e,!0);for(var s=[],o=LC(n,s),a=i.props,l=0,c=0;l<o.length;l++)for(var u=0;u<a.length;u++,c++)e.props[c]=s[l]?o[l].replace(/&\f/g,a[u]):a[u]+" "+o[l]}}},UC=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function ky(t,e){switch(pC(t,e)){case 5103:return Ze+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ze+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Ze+t+nc+t+Xt+t+t;case 6828:case 4268:return Ze+t+Xt+t+t;case 6165:return Ze+t+Xt+"flex-"+t+t;case 5187:return Ze+t+Qe(t,/(\w+).+(:[^]+)/,Ze+"box-$1$2"+Xt+"flex-$1$2")+t;case 5443:return Ze+t+Xt+"flex-item-"+Qe(t,/flex-|-self/,"")+t;case 4675:return Ze+t+Xt+"flex-line-pack"+Qe(t,/align-content|flex-|-self/,"")+t;case 5548:return Ze+t+Xt+Qe(t,"shrink","negative")+t;case 5292:return Ze+t+Xt+Qe(t,"basis","preferred-size")+t;case 6060:return Ze+"box-"+Qe(t,"-grow","")+Ze+t+Xt+Qe(t,"grow","positive")+t;case 4554:return Ze+Qe(t,/([^-])(transform)/g,"$1"+Ze+"$2")+t;case 6187:return Qe(Qe(Qe(t,/(zoom-|grab)/,Ze+"$1"),/(image-set)/,Ze+"$1"),t,"")+t;case 5495:case 3959:return Qe(t,/(image-set\([^]*)/,Ze+"$1$`$1");case 4968:return Qe(Qe(t,/(.+:)(flex-)?(.*)/,Ze+"box-pack:$3"+Xt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ze+t+t;case 4095:case 3583:case 4068:case 2532:return Qe(t,/(.+)-inline(.+)/,Ze+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ai(t)-1-e>6)switch(zt(t,e+1)){case 109:if(zt(t,e+4)!==45)break;case 102:return Qe(t,/(.+:)(.+)-([^]+)/,"$1"+Ze+"$2-$3$1"+nc+(zt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Pd(t,"stretch")?ky(Qe(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(zt(t,e+1)!==115)break;case 6444:switch(zt(t,ai(t)-3-(~Pd(t,"!important")&&10))){case 107:return Qe(t,":",":"+Ze)+t;case 101:return Qe(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Ze+(zt(t,14)===45?"inline-":"")+"box$3$1"+Ze+"$2$3$1"+Xt+"$2box$3")+t}break;case 5936:switch(zt(t,e+11)){case 114:return Ze+t+Xt+Qe(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Ze+t+Xt+Qe(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Ze+t+Xt+Qe(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return Ze+t+Xt+t+t}return t}var NC=function(e,n,i,r){if(e.length>-1&&!e.return)switch(e.type){case $h:e.return=ky(e.value,e.length);break;case Uy:return zs([xo(e,{value:Qe(e.value,"@","@"+Ze)})],r);case Xh:if(e.length)return gC(e.props,function(s){switch(mC(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return zs([xo(e,{props:[Qe(s,/:(read-\w+)/,":"+nc+"$1")]})],r);case"::placeholder":return zs([xo(e,{props:[Qe(s,/:(plac\w+)/,":"+Ze+"input-$1")]}),xo(e,{props:[Qe(s,/:(plac\w+)/,":"+nc+"$1")]}),xo(e,{props:[Qe(s,/:(plac\w+)/,Xt+"input-$1")]})],r)}return""})}},IC=[NC],OC=function(e){var n=e.key;if(n==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(_){var p=_.getAttribute("data-emotion");p.indexOf(" ")!==-1&&(document.head.appendChild(_),_.setAttribute("data-s",""))})}var r=e.stylisPlugins||IC,s={},o,a=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(_){for(var p=_.getAttribute("data-emotion").split(" "),f=1;f<p.length;f++)s[p[f]]=!0;a.push(_)});var l,c=[DC,UC];{var u,d=[TC,RC(function(_){u.insert(_)})],h=AC(c.concat(r,d)),m=function(p){return zs(MC(p),h)};l=function(p,f,v,g){u=v,m(p?p+"{"+f.styles+"}":f.styles),g&&(y.inserted[f.name]=!0)}}var y={key:n,sheet:new cC({key:n,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:l};return y.sheet.hydrate(a),y},zy={exports:{}},et={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ft=typeof Symbol=="function"&&Symbol.for,qh=Ft?Symbol.for("react.element"):60103,Kh=Ft?Symbol.for("react.portal"):60106,Ic=Ft?Symbol.for("react.fragment"):60107,Oc=Ft?Symbol.for("react.strict_mode"):60108,Fc=Ft?Symbol.for("react.profiler"):60114,kc=Ft?Symbol.for("react.provider"):60109,zc=Ft?Symbol.for("react.context"):60110,Zh=Ft?Symbol.for("react.async_mode"):60111,Bc=Ft?Symbol.for("react.concurrent_mode"):60111,Hc=Ft?Symbol.for("react.forward_ref"):60112,Vc=Ft?Symbol.for("react.suspense"):60113,FC=Ft?Symbol.for("react.suspense_list"):60120,Gc=Ft?Symbol.for("react.memo"):60115,Wc=Ft?Symbol.for("react.lazy"):60116,kC=Ft?Symbol.for("react.block"):60121,zC=Ft?Symbol.for("react.fundamental"):60117,BC=Ft?Symbol.for("react.responder"):60118,HC=Ft?Symbol.for("react.scope"):60119;function Rn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case qh:switch(t=t.type,t){case Zh:case Bc:case Ic:case Fc:case Oc:case Vc:return t;default:switch(t=t&&t.$$typeof,t){case zc:case Hc:case Wc:case Gc:case kc:return t;default:return e}}case Kh:return e}}}function By(t){return Rn(t)===Bc}et.AsyncMode=Zh;et.ConcurrentMode=Bc;et.ContextConsumer=zc;et.ContextProvider=kc;et.Element=qh;et.ForwardRef=Hc;et.Fragment=Ic;et.Lazy=Wc;et.Memo=Gc;et.Portal=Kh;et.Profiler=Fc;et.StrictMode=Oc;et.Suspense=Vc;et.isAsyncMode=function(t){return By(t)||Rn(t)===Zh};et.isConcurrentMode=By;et.isContextConsumer=function(t){return Rn(t)===zc};et.isContextProvider=function(t){return Rn(t)===kc};et.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===qh};et.isForwardRef=function(t){return Rn(t)===Hc};et.isFragment=function(t){return Rn(t)===Ic};et.isLazy=function(t){return Rn(t)===Wc};et.isMemo=function(t){return Rn(t)===Gc};et.isPortal=function(t){return Rn(t)===Kh};et.isProfiler=function(t){return Rn(t)===Fc};et.isStrictMode=function(t){return Rn(t)===Oc};et.isSuspense=function(t){return Rn(t)===Vc};et.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Ic||t===Bc||t===Fc||t===Oc||t===Vc||t===FC||typeof t=="object"&&t!==null&&(t.$$typeof===Wc||t.$$typeof===Gc||t.$$typeof===kc||t.$$typeof===zc||t.$$typeof===Hc||t.$$typeof===zC||t.$$typeof===BC||t.$$typeof===HC||t.$$typeof===kC)};et.typeOf=Rn;zy.exports=et;var VC=zy.exports,Hy=VC,GC={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},WC={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Vy={};Vy[Hy.ForwardRef]=GC;Vy[Hy.Memo]=WC;var jC=!0;function Gy(t,e,n){var i="";return n.split(" ").forEach(function(r){t[r]!==void 0?e.push(t[r]+";"):i+=r+" "}),i}var Qh=function(e,n,i){var r=e.key+"-"+n.name;(i===!1||jC===!1)&&e.registered[r]===void 0&&(e.registered[r]=n.styles)},Wy=function(e,n,i){Qh(e,n,i);var r=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var s=n;do e.insert(n===s?"."+r:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function XC(t){for(var e=0,n,i=0,r=t.length;r>=4;++i,r-=4)n=t.charCodeAt(i)&255|(t.charCodeAt(++i)&255)<<8|(t.charCodeAt(++i)&255)<<16|(t.charCodeAt(++i)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(r){case 3:e^=(t.charCodeAt(i+2)&255)<<16;case 2:e^=(t.charCodeAt(i+1)&255)<<8;case 1:e^=t.charCodeAt(i)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var $C={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},YC=/[A-Z]|^ms/g,qC=/_EMO_([^_]+?)_([^]*?)_EMO_/g,jy=function(e){return e.charCodeAt(1)===45},rg=function(e){return e!=null&&typeof e!="boolean"},pf=CC(function(t){return jy(t)?t:t.replace(YC,"-$&").toLowerCase()}),sg=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(qC,function(i,r,s){return li={name:r,styles:s,next:li},r})}return $C[e]!==1&&!jy(e)&&typeof n=="number"&&n!==0?n+"px":n};function aa(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return li={name:n.name,styles:n.styles,next:li},n.name;if(n.styles!==void 0){var i=n.next;if(i!==void 0)for(;i!==void 0;)li={name:i.name,styles:i.styles,next:li},i=i.next;var r=n.styles+";";return r}return KC(t,e,n)}case"function":{if(t!==void 0){var s=li,o=n(t);return li=s,aa(t,e,o)}break}}if(e==null)return n;var a=e[n];return a!==void 0?a:n}function KC(t,e,n){var i="";if(Array.isArray(n))for(var r=0;r<n.length;r++)i+=aa(t,e,n[r])+";";else for(var s in n){var o=n[s];if(typeof o!="object")e!=null&&e[o]!==void 0?i+=s+"{"+e[o]+"}":rg(o)&&(i+=pf(s)+":"+sg(s,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var a=0;a<o.length;a++)rg(o[a])&&(i+=pf(s)+":"+sg(s,o[a])+";");else{var l=aa(t,e,o);switch(s){case"animation":case"animationName":{i+=pf(s)+":"+l+";";break}default:i+=s+"{"+l+"}"}}}return i}var og=/label:\s*([^\s;\n{]+)\s*(;|$)/g,li,Jh=function(e,n,i){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,s="";li=void 0;var o=e[0];o==null||o.raw===void 0?(r=!1,s+=aa(i,n,o)):s+=o[0];for(var a=1;a<e.length;a++)s+=aa(i,n,e[a]),r&&(s+=o[a]);og.lastIndex=0;for(var l="",c;(c=og.exec(s))!==null;)l+="-"+c[1];var u=XC(s)+l;return{name:u,styles:s,next:li}},ZC=function(e){return e()},QC=gf["useInsertionEffect"]?gf["useInsertionEffect"]:!1,Xy=QC||ZC,ep={}.hasOwnProperty,$y=ge.createContext(typeof HTMLElement<"u"?OC({key:"css"}):null);$y.Provider;var Yy=function(e){return ge.forwardRef(function(n,i){var r=ge.useContext($y);return e(n,r,i)})},qy=ge.createContext({}),Dd="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",JC=function(e,n){var i={};for(var r in n)ep.call(n,r)&&(i[r]=n[r]);return i[Dd]=e,i},eb=function(e){var n=e.cache,i=e.serialized,r=e.isStringTag;return Qh(n,i,r),Xy(function(){return Wy(n,i,r)}),null},tb=Yy(function(t,e,n){var i=t.css;typeof i=="string"&&e.registered[i]!==void 0&&(i=e.registered[i]);var r=t[Dd],s=[i],o="";typeof t.className=="string"?o=Gy(e.registered,s,t.className):t.className!=null&&(o=t.className+" ");var a=Jh(s,void 0,ge.useContext(qy));o+=e.key+"-"+a.name;var l={};for(var c in t)ep.call(t,c)&&c!=="css"&&c!==Dd&&(l[c]=t[c]);return l.ref=n,l.className=o,ge.createElement(ge.Fragment,null,ge.createElement(eb,{cache:e,serialized:a,isStringTag:typeof r=="string"}),ge.createElement(r,l))}),nb=tb,ib=Z.Fragment;function Ut(t,e,n){return ep.call(e,"css")?Z.jsx(nb,JC(t,e),n):Z.jsx(t,e,n)}function Ky(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return Jh(e)}var le=function(){var e=Ky.apply(void 0,arguments),n="animation-"+e.name;return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},rb=function t(e){for(var n=e.length,i=0,r="";i<n;i++){var s=e[i];if(s!=null){var o=void 0;switch(typeof s){case"boolean":break;case"object":{if(Array.isArray(s))o=t(s);else{o="";for(var a in s)s[a]&&a&&(o&&(o+=" "),o+=a)}break}default:o=s}o&&(r&&(r+=" "),r+=o)}}return r};function sb(t,e,n){var i=[],r=Gy(t,i,n);return i.length<2?n:r+e(i)}var ob=function(e){var n=e.cache,i=e.serializedArr;return Xy(function(){for(var r=0;r<i.length;r++)Wy(n,i[r],!1)}),null},mf=Yy(function(t,e){var n=!1,i=[],r=function(){for(var c=arguments.length,u=new Array(c),d=0;d<c;d++)u[d]=arguments[d];var h=Jh(u,e.registered);return i.push(h),Qh(e,h,!1),e.key+"-"+h.name},s=function(){for(var c=arguments.length,u=new Array(c),d=0;d<c;d++)u[d]=arguments[d];return sb(e.registered,r,rb(u))},o={css:r,cx:s,theme:ge.useContext(qy)},a=t.children(o);return n=!0,ge.createElement(ge.Fragment,null,ge.createElement(ob,{cache:e,serializedArr:i}),a)}),ab=Object.defineProperty,lb=(t,e,n)=>e in t?ab(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,sl=(t,e,n)=>lb(t,typeof e!="symbol"?e+"":e,n),Ud=new Map,ol=new WeakMap,ag=0,cb=void 0;function ub(t){return t?(ol.has(t)||(ag+=1,ol.set(t,ag.toString())),ol.get(t)):"0"}function fb(t){return Object.keys(t).sort().filter(e=>t[e]!==void 0).map(e=>`${e}_${e==="root"?ub(t.root):t[e]}`).toString()}function db(t){const e=fb(t);let n=Ud.get(e);if(!n){const i=new Map;let r;const s=new IntersectionObserver(o=>{o.forEach(a=>{var l;const c=a.isIntersecting&&r.some(u=>a.intersectionRatio>=u);t.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=c),(l=i.get(a.target))==null||l.forEach(u=>{u(c,a)})})},t);r=s.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),n={id:e,observer:s,elements:i},Ud.set(e,n)}return n}function Zy(t,e,n={},i=cb){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const l=t.getBoundingClientRect();return e(i,{isIntersecting:i,target:t,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:r,observer:s,elements:o}=db(n),a=o.get(t)||[];return o.has(t)||o.set(t,a),a.push(e),s.observe(t),function(){a.splice(a.indexOf(e),1),a.length===0&&(o.delete(t),s.unobserve(t)),o.size===0&&(s.disconnect(),Ud.delete(r))}}function hb(t){return typeof t.children!="function"}var lg=class extends ge.Component{constructor(t){super(t),sl(this,"node",null),sl(this,"_unobserveCb",null),sl(this,"handleNode",e=>{this.node&&(this.unobserve(),!e&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()}),sl(this,"handleChange",(e,n)=>{e&&this.props.triggerOnce&&this.unobserve(),hb(this.props)||this.setState({inView:e,entry:n}),this.props.onChange&&this.props.onChange(e,n)}),this.state={inView:!!t.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:e,rootMargin:n,trackVisibility:i,delay:r,fallbackInView:s}=this.props;this._unobserveCb=Zy(this.node,this.handleChange,{threshold:t,root:e,rootMargin:n,trackVisibility:i,delay:r},s)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:t}=this.props;if(typeof t=="function"){const{inView:m,entry:y}=this.state;return t({inView:m,entry:y,ref:this.handleNode})}const{as:e,triggerOnce:n,threshold:i,root:r,rootMargin:s,onChange:o,skip:a,trackVisibility:l,delay:c,initialInView:u,fallbackInView:d,...h}=this.props;return ge.createElement(e||"div",{ref:this.handleNode,...h},t)}};function Qy({threshold:t,delay:e,trackVisibility:n,rootMargin:i,root:r,triggerOnce:s,skip:o,initialInView:a,fallbackInView:l,onChange:c}={}){var u;const[d,h]=ge.useState(null),m=ge.useRef(),[y,_]=ge.useState({inView:!!a,entry:void 0});m.current=c,ge.useEffect(()=>{if(o||!d)return;let g;return g=Zy(d,(x,S)=>{_({inView:x,entry:S}),m.current&&m.current(x,S),S.isIntersecting&&s&&g&&(g(),g=void 0)},{root:r,rootMargin:i,threshold:t,trackVisibility:n,delay:e},l),()=>{g&&g()}},[Array.isArray(t)?t.toString():t,d,r,i,s,o,n,l,e]);const p=(u=y.entry)==null?void 0:u.target,f=ge.useRef();!d&&p&&!s&&!o&&f.current!==p&&(f.current=p,_({inView:!!a,entry:void 0}));const v=[h,y.inView,y.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}var Jy={exports:{}},tt={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tp=Symbol.for("react.element"),np=Symbol.for("react.portal"),jc=Symbol.for("react.fragment"),Xc=Symbol.for("react.strict_mode"),$c=Symbol.for("react.profiler"),Yc=Symbol.for("react.provider"),qc=Symbol.for("react.context"),pb=Symbol.for("react.server_context"),Kc=Symbol.for("react.forward_ref"),Zc=Symbol.for("react.suspense"),Qc=Symbol.for("react.suspense_list"),Jc=Symbol.for("react.memo"),eu=Symbol.for("react.lazy"),mb=Symbol.for("react.offscreen"),e1;e1=Symbol.for("react.module.reference");function kn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case tp:switch(t=t.type,t){case jc:case $c:case Xc:case Zc:case Qc:return t;default:switch(t=t&&t.$$typeof,t){case pb:case qc:case Kc:case eu:case Jc:case Yc:return t;default:return e}}case np:return e}}}tt.ContextConsumer=qc;tt.ContextProvider=Yc;tt.Element=tp;tt.ForwardRef=Kc;tt.Fragment=jc;tt.Lazy=eu;tt.Memo=Jc;tt.Portal=np;tt.Profiler=$c;tt.StrictMode=Xc;tt.Suspense=Zc;tt.SuspenseList=Qc;tt.isAsyncMode=function(){return!1};tt.isConcurrentMode=function(){return!1};tt.isContextConsumer=function(t){return kn(t)===qc};tt.isContextProvider=function(t){return kn(t)===Yc};tt.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===tp};tt.isForwardRef=function(t){return kn(t)===Kc};tt.isFragment=function(t){return kn(t)===jc};tt.isLazy=function(t){return kn(t)===eu};tt.isMemo=function(t){return kn(t)===Jc};tt.isPortal=function(t){return kn(t)===np};tt.isProfiler=function(t){return kn(t)===$c};tt.isStrictMode=function(t){return kn(t)===Xc};tt.isSuspense=function(t){return kn(t)===Zc};tt.isSuspenseList=function(t){return kn(t)===Qc};tt.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===jc||t===$c||t===Xc||t===Zc||t===Qc||t===mb||typeof t=="object"&&t!==null&&(t.$$typeof===eu||t.$$typeof===Jc||t.$$typeof===Yc||t.$$typeof===qc||t.$$typeof===Kc||t.$$typeof===e1||t.getModuleId!==void 0)};tt.typeOf=kn;Jy.exports=tt;var gb=Jy.exports;le`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;le`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;le`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;le`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;le`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;le`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;le`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;le`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;le`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;le`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;le`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;le`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;le`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const vb=le`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,_b=le`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,yb=le`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,xb=le`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Sb=le`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ip=le`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Eb=le`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Mb=le`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,wb=le`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Tb=le`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ab=le`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Rb=le`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Cb=le`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function bb({duration:t=1e3,delay:e=0,timingFunction:n="ease",keyframes:i=ip,iterationCount:r=1}){return Ky`
    animation-duration: ${t}ms;
    animation-timing-function: ${n};
    animation-delay: ${e}ms;
    animation-name: ${i};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${r};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function Pb(t){return t==null}function Lb(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"}function t1(t,e){return n=>n?t():e()}function la(t){return t1(t,()=>null)}function Nd(t){return la(()=>({opacity:0}))(t)}const n1=t=>{const{cascade:e=!1,damping:n=.5,delay:i=0,duration:r=1e3,fraction:s=0,keyframes:o=ip,triggerOnce:a=!1,className:l,style:c,childClassName:u,childStyle:d,children:h,onVisibilityChange:m}=t,y=ge.useMemo(()=>bb({keyframes:o,duration:r}),[r,o]);return Pb(h)?null:Lb(h)?Ut(Ub,{...t,animationStyles:y,children:String(h)}):gb.isFragment(h)?Ut(i1,{...t,animationStyles:y}):Ut(ib,{children:ge.Children.map(h,(_,p)=>{if(!ge.isValidElement(_))return null;const f=i+(e?p*r*n:0);switch(_.type){case"ol":case"ul":return Ut(mf,{children:({cx:v})=>Ut(_.type,{..._.props,className:v(l,_.props.className),style:Object.assign({},c,_.props.style),children:Ut(n1,{...t,children:_.props.children})})});case"li":return Ut(lg,{threshold:s,triggerOnce:a,onChange:m,children:({inView:v,ref:g})=>Ut(mf,{children:({cx:x})=>Ut(_.type,{..._.props,ref:g,className:x(u,_.props.className),css:la(()=>y)(v),style:Object.assign({},d,_.props.style,Nd(!v),{animationDelay:f+"ms"})})})});default:return Ut(lg,{threshold:s,triggerOnce:a,onChange:m,children:({inView:v,ref:g})=>Ut("div",{ref:g,className:l,css:la(()=>y)(v),style:Object.assign({},c,Nd(!v),{animationDelay:f+"ms"}),children:Ut(mf,{children:({cx:x})=>Ut(_.type,{..._.props,className:x(u,_.props.className),style:Object.assign({},d,_.props.style)})})})})}})})},Db={display:"inline-block",whiteSpace:"pre"},Ub=t=>{const{animationStyles:e,cascade:n=!1,damping:i=.5,delay:r=0,duration:s=1e3,fraction:o=0,triggerOnce:a=!1,className:l,style:c,children:u,onVisibilityChange:d}=t,{ref:h,inView:m}=Qy({triggerOnce:a,threshold:o,onChange:d});return t1(()=>Ut("div",{ref:h,className:l,style:Object.assign({},c,Db),children:u.split("").map((y,_)=>Ut("span",{css:la(()=>e)(m),style:{animationDelay:r+_*s*i+"ms"},children:y},_))}),()=>Ut(i1,{...t,children:u}))(n)},i1=t=>{const{animationStyles:e,fraction:n=0,triggerOnce:i=!1,className:r,style:s,children:o,onVisibilityChange:a}=t,{ref:l,inView:c}=Qy({triggerOnce:i,threshold:n,onChange:a});return Ut("div",{ref:l,className:r,css:la(()=>e)(c),style:Object.assign({},s,Nd(!c)),children:o})};le`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;le`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;le`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;le`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;le`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;le`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;le`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;le`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;le`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;le`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const Nb=le`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Ib=le`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Ob=le`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Fb=le`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,kb=le`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,zb=le`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Bb=le`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Hb=le`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Vb=le`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Gb=le`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Wb=le`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,jb=le`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Xb=le`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function $b(t,e,n){switch(n){case"bottom-left":return e?Ib:_b;case"bottom-right":return e?Ob:yb;case"down":return t?e?kb:Sb:e?Fb:xb;case"left":return t?e?Bb:Eb:e?zb:ip;case"right":return t?e?Vb:wb:e?Hb:Mb;case"top-left":return e?Gb:Tb;case"top-right":return e?Wb:Ab;case"up":return t?e?Xb:Cb:e?jb:Rb;default:return e?Nb:vb}}const al=t=>{const{big:e=!1,direction:n,reverse:i=!1,...r}=t,s=ge.useMemo(()=>$b(e,i,n),[e,n,i]);return Ut(n1,{keyframes:s,...r})};le`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;le`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;le`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;le`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;le`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;le`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;le`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;le`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;le`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;le`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;le`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;le`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;le`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;le`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;le`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;le`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;le`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;le`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;le`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;le`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;le`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;le`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;le`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;le`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;le`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;le`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;le`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;le`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;le`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;le`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;le`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;le`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;le`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;le`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;le`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;le`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;le`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;var r1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},cg=er.createContext&&er.createContext(r1),Yb=["attr","size","title"];function qb(t,e){if(t==null)return{};var n=Kb(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function Kb(t,e){if(t==null)return{};var n={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(e.indexOf(i)>=0)continue;n[i]=t[i]}return n}function ic(){return ic=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ic.apply(this,arguments)}function ug(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function rc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ug(Object(n),!0).forEach(function(i){Zb(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ug(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Zb(t,e,n){return e=Qb(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Qb(t){var e=Jb(t,"string");return typeof e=="symbol"?e:e+""}function Jb(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function s1(t){return t&&t.map((e,n)=>er.createElement(e.tag,rc({key:n},e.attr),s1(e.child)))}function zi(t){return e=>er.createElement(eP,ic({attr:rc({},t.attr)},e),s1(t.child))}function eP(t){var e=n=>{var{attr:i,size:r,title:s}=t,o=qb(t,Yb),a=r||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),er.createElement("svg",ic({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,o,{className:l,style:rc(rc({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&er.createElement("title",null,s),t.children)};return cg!==void 0?er.createElement(cg.Consumer,null,n=>e(n)):e(r1)}function tP(t){return zi({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"},child:[]}]})(t)}function nP(t){return zi({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(t)}function iP(t){return zi({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(t)}function rP(t){return zi({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"},child:[]}]})(t)}function sP(t){return zi({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"},child:[]}]})(t)}function oP(t){return zi({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z"},child:[]}]})(t)}function aP(t){return zi({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"},child:[]}]})(t)}function lP(t){return zi({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.005 0L4.952 7.053a9.865 9.865 0 000 14.022 9.866 9.866 0 0014.022 0c3.984-3.9 3.986-10.205.085-14.023l-1.744 1.743c2.904 2.905 2.904 7.634 0 10.538s-7.634 2.904-10.538 0-2.904-7.634 0-10.538l4.647-4.646.582-.665zm3.568 3.899a1.327 1.327 0 00-1.327 1.327 1.327 1.327 0 001.327 1.328A1.327 1.327 0 0016.9 5.226 1.327 1.327 0 0015.573 3.9z"},child:[]}]})(t)}function cP(t){return zi({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"},child:[]}]})(t)}const uP=()=>{const[t,e]=ge.useState(0);return ge.useEffect(()=>{const n=()=>{const i=document.documentElement.scrollHeight-window.innerHeight,r=window.pageYOffset;e(r/i)};return window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)},[]),Z.jsxs("div",{className:"about-me-container",children:[Z.jsx("div",{className:"about-me-section",style:{opacity:Math.min(1,Math.max(0,t*2-0)),transform:`translateY(${Math.max(0,50-t*100)}px)`},children:Z.jsxs(al,{cascade:!0,damping:.1,children:[Z.jsx("h1",{className:"about-me-title",children:"About Me"}),Z.jsx("div",{className:"about-me-content",children:Z.jsxs("div",{className:"about-me-text",children:[Z.jsx("p",{children:"👋 Hi there! I'm Leonardo Jimenez, a first-generation undergraduate student at Texas State University."}),Z.jsx("p",{children:`🚀 My journey into Computer Science and Mathematics began with a profound moment watching "Interstellar". Since then, I've been on an exciting path of discovery and learning.`}),Z.jsx("p",{children:"🍎 Currently, I'm working in Apple's College Program while pursuing my dual major in Computer Science and Mathematics."}),Z.jsx("p",{children:"🌟 I'm passionate about Deep Learning, particularly with PyTorch, and I'm always working on exciting projects like WhereHungry 🌭."})]})}),Z.jsxs("div",{className:"social-links",children:[Z.jsx("a",{href:"https://github.com/leoqode",target:"_blank",rel:"noopener noreferrer",children:Z.jsx(nP,{})}),Z.jsx("a",{href:"https://www.linkedin.com/in/leonardojim",target:"_blank",rel:"noopener noreferrer",children:Z.jsx(iP,{})})]})]})}),Z.jsx("div",{className:"tech-stack-section",style:{opacity:Math.min(1,Math.max(0,t*2-.4)),transform:`translateY(${Math.max(0,50-t*100)}px)`},children:Z.jsxs(al,{cascade:!0,damping:.1,children:[Z.jsx("h2",{className:"tech-stack-title",children:"Tech Stack & Achievements"}),Z.jsxs("div",{className:"tech-stack-icons",children:[Z.jsx(rP,{title:"Python"}),Z.jsx(oP,{title:"C++"}),Z.jsx(cP,{title:"TypeScript"}),Z.jsx(aP,{title:"JavaScript"}),Z.jsx(sP,{title:"React"}),Z.jsx(lP,{title:"PyTorch"}),Z.jsx(tP,{title:"Apple"})]}),Z.jsxs("ul",{className:"achievements-list",children:[Z.jsx("li",{children:"🏆 First Place in Riverhacks Hackathon"}),Z.jsx("li",{children:"📚 Double Major in Computer Science and Mathematics"}),Z.jsx("li",{children:"💼 Apple College Program Participant"}),Z.jsx("li",{children:"🧠 Self-taught in Deep Learning and PyTorch"})]})]})}),Z.jsx("div",{className:"research-section",style:{opacity:Math.min(1,Math.max(0,t*2-.75)),transform:`translateY(${Math.max(0,100-t*100)}px)`},children:Z.jsxs(al,{cascade:!0,damping:.1,children:[Z.jsx("h2",{className:"research-title",children:"Research Interests"}),Z.jsxs("div",{className:"research-content",children:[Z.jsx("p",{children:"Currently, I am fascinated with research and actively trying to break into the field. I recently had the pleasure of working alongside Dr. Farnsworth and two other students at Texas State Problem Solvers on an intriguing mathematical problem."}),Z.jsx("p",{children:"Our research was for the American Mathematical Monthly. The question proposed was on the minimum number of unit cubes needed to satisfy specific conditions in an n-by-n-by-n cube. We discovered that this minimum is given by the formula for the n-th concentric hexagonal number. Our solution involves a geometric construction using hexagons formed by intersecting planes with the cube, resulting in a pattern of concentric hexagons of cubes."}),Z.jsx("a",{href:"https://drive.google.com/file/d/1e3gvWO5sHrmooWcUDk9ZUuV1IiT-IjPo/view?usp=drive_link",target:"_blank",rel:"noopener noreferrer",className:"research-link",children:"View a draft of our paper"})]})]})}),Z.jsx("div",{className:"projects-section",style:{opacity:Math.min(1,Math.max(0,t*2-.9)),transform:`translateY(${Math.max(0,150-t*100)}px)`},children:Z.jsxs(al,{cascade:!0,damping:.1,children:[Z.jsx("h2",{className:"projects-title",children:"Featured Projects"}),Z.jsxs("div",{className:"project-cards",children:[Z.jsxs("div",{className:"project-card",children:[Z.jsx("h3",{children:"Riverhacks23"}),Z.jsx("p",{children:"First Place Hackathon Project"}),Z.jsx("a",{href:"https://github.com/leoqode/Riverhacks23",target:"_blank",rel:"noopener noreferrer",children:"View on GitHub"})]}),Z.jsxs("div",{className:"project-card",children:[Z.jsx("h3",{children:"TypeGym"}),Z.jsx("p",{children:" Monkeytype and TypeRacer seem to be missing something, and I think I can find it."}),Z.jsx("a",{href:"https://github.com/leoqode/Riverhacks23",target:"_blank",rel:"noopener noreferrer",children:"View on GitHub"})]}),Z.jsxs("div",{className:"project-card",children:[Z.jsx("h3",{children:"WhereHungry 🌭"}),Z.jsx("p",{children:"A solution for college students tired of eating at the same places."}),Z.jsx("a",{href:"https://github.com/leoqode/WhereHungry",target:"_blank",rel:"noopener noreferrer",children:"View on GitHub"})]})]})]})})]})};function fP(){return Z.jsxs("div",{className:"app",children:[Z.jsx("div",{className:"background",children:Z.jsx(oC,{})}),Z.jsxs("div",{className:"content",children:[Z.jsx(XM,{style:"header"}),Z.jsx($M,{}),Z.jsx(uP,{})]})]})}/**
 * @remix-run/router v1.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sc(){return sc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},sc.apply(this,arguments)}var Ur;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ur||(Ur={}));const fg="popstate";function dP(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return Id("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:a1(r)}return pP(e,n,null,t)}function o1(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function hP(){return Math.random().toString(36).substr(2,8)}function dg(t,e){return{usr:t.state,key:t.key,idx:e}}function Id(t,e,n,i){return n===void 0&&(n=null),sc({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?l1(e):e,{state:n,key:e&&e.key||i||hP()})}function a1(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function l1(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function pP(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=Ur.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(sc({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function d(){a=Ur.Pop;let p=u(),f=p==null?null:p-c;c=p,l&&l({action:a,location:_.location,delta:f})}function h(p,f){a=Ur.Push;let v=Id(_.location,p,f);n&&n(v,p),c=u()+1;let g=dg(v,c),x=_.createHref(v);try{o.pushState(g,"",x)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;r.location.assign(x)}s&&l&&l({action:a,location:_.location,delta:1})}function m(p,f){a=Ur.Replace;let v=Id(_.location,p,f);n&&n(v,p),c=u();let g=dg(v,c),x=_.createHref(v);o.replaceState(g,"",x),s&&l&&l({action:a,location:_.location,delta:0})}function y(p){let f=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof p=="string"?p:a1(p);return v=v.replace(/ $/,"%20"),o1(f,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,f)}let _={get action(){return a},get location(){return t(r,o)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(fg,d),l=p,()=>{r.removeEventListener(fg,d),l=null}},createHref(p){return e(r,p)},createURL:y,encodeLocation(p){let f=y(p);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:m,go(p){return o.go(p)}};return _}var hg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(hg||(hg={}));function mP(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const c1=["post","put","patch","delete"];new Set(c1);const gP=["get",...c1];new Set(gP);/**
 * React Router v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Od(){return Od=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Od.apply(this,arguments)}const vP=ge.createContext(null),u1=ge.createContext(null);function _P(){return ge.useContext(u1)!=null}function yP(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Ur.Pop,navigator:s,static:o=!1,future:a}=t;_P()&&o1(!1);let l=e.replace(/^\/*/,"/"),c=ge.useMemo(()=>({basename:l,navigator:s,static:o,future:Od({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=l1(i));let{pathname:u="/",search:d="",hash:h="",state:m=null,key:y="default"}=i,_=ge.useMemo(()=>{let p=mP(u,l);return p==null?null:{location:{pathname:p,search:d,hash:h,state:m,key:y},navigationType:r}},[l,u,d,h,m,y,r]);return _==null?null:ge.createElement(vP.Provider,{value:c},ge.createElement(u1.Provider,{children:n,value:_}))}new Promise(()=>{});/**
 * React Router DOM v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const xP="6";try{window.__reactRouterVersion=xP}catch{}const SP="startTransition",pg=gf[SP];function EP(t){let{basename:e,children:n,future:i,window:r}=t,s=ge.useRef();s.current==null&&(s.current=dP({window:r,v5Compat:!0}));let o=s.current,[a,l]=ge.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},u=ge.useCallback(d=>{c&&pg?pg(()=>l(d)):l(d)},[l,c]);return ge.useLayoutEffect(()=>o.listen(u),[o,u]),ge.createElement(yP,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}var mg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(mg||(mg={}));var gg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(gg||(gg={}));vf.createRoot(document.getElementById("root")).render(Z.jsx(EP,{children:Z.jsx(fP,{})}));
