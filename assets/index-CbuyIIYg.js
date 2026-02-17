(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Td={exports:{}},Il={};var N_;function fS(){if(N_)return Il;N_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:c}}return Il.Fragment=t,Il.jsx=i,Il.jsxs=i,Il}var O_;function hS(){return O_||(O_=1,Td.exports=fS()),Td.exports}var nt=hS(),Ad={exports:{}},we={};var P_;function dS(){if(P_)return we;P_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),S=Symbol.iterator;function b(G){return G===null||typeof G!="object"?null:(G=S&&G[S]||G["@@iterator"],typeof G=="function"?G:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,E={};function x(G,ct,At){this.props=G,this.context=ct,this.refs=E,this.updater=At||T}x.prototype.isReactComponent={},x.prototype.setState=function(G,ct){if(typeof G!="object"&&typeof G!="function"&&G!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,G,ct,"setState")},x.prototype.forceUpdate=function(G){this.updater.enqueueForceUpdate(this,G,"forceUpdate")};function F(){}F.prototype=x.prototype;function N(G,ct,At){this.props=G,this.context=ct,this.refs=E,this.updater=At||T}var O=N.prototype=new F;O.constructor=N,R(O,x.prototype),O.isPureReactComponent=!0;var z=Array.isArray;function P(){}var I={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function C(G,ct,At){var Gt=At.ref;return{$$typeof:s,type:G,key:ct,ref:Gt!==void 0?Gt:null,props:At}}function U(G,ct){return C(G.type,ct,G.props)}function X(G){return typeof G=="object"&&G!==null&&G.$$typeof===s}function $(G){var ct={"=":"=0",":":"=2"};return"$"+G.replace(/[=:]/g,function(At){return ct[At]})}var rt=/\/+/g;function tt(G,ct){return typeof G=="object"&&G!==null&&G.key!=null?$(""+G.key):ct.toString(36)}function xt(G){switch(G.status){case"fulfilled":return G.value;case"rejected":throw G.reason;default:switch(typeof G.status=="string"?G.then(P,P):(G.status="pending",G.then(function(ct){G.status==="pending"&&(G.status="fulfilled",G.value=ct)},function(ct){G.status==="pending"&&(G.status="rejected",G.reason=ct)})),G.status){case"fulfilled":return G.value;case"rejected":throw G.reason}}throw G}function H(G,ct,At,Gt,kt){var lt=typeof G;(lt==="undefined"||lt==="boolean")&&(G=null);var vt=!1;if(G===null)vt=!0;else switch(lt){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(G.$$typeof){case s:case t:vt=!0;break;case g:return vt=G._init,H(vt(G._payload),ct,At,Gt,kt)}}if(vt)return kt=kt(G),vt=Gt===""?"."+tt(G,0):Gt,z(kt)?(At="",vt!=null&&(At=vt.replace(rt,"$&/")+"/"),H(kt,ct,At,"",function(re){return re})):kt!=null&&(X(kt)&&(kt=U(kt,At+(kt.key==null||G&&G.key===kt.key?"":(""+kt.key).replace(rt,"$&/")+"/")+vt)),ct.push(kt)),1;vt=0;var Xt=Gt===""?".":Gt+":";if(z(G))for(var ie=0;ie<G.length;ie++)Gt=G[ie],lt=Xt+tt(Gt,ie),vt+=H(Gt,ct,At,lt,kt);else if(ie=b(G),typeof ie=="function")for(G=ie.call(G),ie=0;!(Gt=G.next()).done;)Gt=Gt.value,lt=Xt+tt(Gt,ie++),vt+=H(Gt,ct,At,lt,kt);else if(lt==="object"){if(typeof G.then=="function")return H(xt(G),ct,At,Gt,kt);throw ct=String(G),Error("Objects are not valid as a React child (found: "+(ct==="[object Object]"?"object with keys {"+Object.keys(G).join(", ")+"}":ct)+"). If you meant to render a collection of children, use an array instead.")}return vt}function Y(G,ct,At){if(G==null)return G;var Gt=[],kt=0;return H(G,Gt,"","",function(lt){return ct.call(At,lt,kt++)}),Gt}function st(G){if(G._status===-1){var ct=G._result;ct=ct(),ct.then(function(At){(G._status===0||G._status===-1)&&(G._status=1,G._result=At)},function(At){(G._status===0||G._status===-1)&&(G._status=2,G._result=At)}),G._status===-1&&(G._status=0,G._result=ct)}if(G._status===1)return G._result.default;throw G._result}var Ft=typeof reportError=="function"?reportError:function(G){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ct=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof G=="object"&&G!==null&&typeof G.message=="string"?String(G.message):String(G),error:G});if(!window.dispatchEvent(ct))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",G);return}console.error(G)},Nt={map:Y,forEach:function(G,ct,At){Y(G,function(){ct.apply(this,arguments)},At)},count:function(G){var ct=0;return Y(G,function(){ct++}),ct},toArray:function(G){return Y(G,function(ct){return ct})||[]},only:function(G){if(!X(G))throw Error("React.Children.only expected to receive a single React element child.");return G}};return we.Activity=_,we.Children=Nt,we.Component=x,we.Fragment=i,we.Profiler=l,we.PureComponent=N,we.StrictMode=r,we.Suspense=m,we.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,we.__COMPILER_RUNTIME={__proto__:null,c:function(G){return I.H.useMemoCache(G)}},we.cache=function(G){return function(){return G.apply(null,arguments)}},we.cacheSignal=function(){return null},we.cloneElement=function(G,ct,At){if(G==null)throw Error("The argument must be a React element, but you passed "+G+".");var Gt=R({},G.props),kt=G.key;if(ct!=null)for(lt in ct.key!==void 0&&(kt=""+ct.key),ct)!j.call(ct,lt)||lt==="key"||lt==="__self"||lt==="__source"||lt==="ref"&&ct.ref===void 0||(Gt[lt]=ct[lt]);var lt=arguments.length-2;if(lt===1)Gt.children=At;else if(1<lt){for(var vt=Array(lt),Xt=0;Xt<lt;Xt++)vt[Xt]=arguments[Xt+2];Gt.children=vt}return C(G.type,kt,Gt)},we.createContext=function(G){return G={$$typeof:h,_currentValue:G,_currentValue2:G,_threadCount:0,Provider:null,Consumer:null},G.Provider=G,G.Consumer={$$typeof:c,_context:G},G},we.createElement=function(G,ct,At){var Gt,kt={},lt=null;if(ct!=null)for(Gt in ct.key!==void 0&&(lt=""+ct.key),ct)j.call(ct,Gt)&&Gt!=="key"&&Gt!=="__self"&&Gt!=="__source"&&(kt[Gt]=ct[Gt]);var vt=arguments.length-2;if(vt===1)kt.children=At;else if(1<vt){for(var Xt=Array(vt),ie=0;ie<vt;ie++)Xt[ie]=arguments[ie+2];kt.children=Xt}if(G&&G.defaultProps)for(Gt in vt=G.defaultProps,vt)kt[Gt]===void 0&&(kt[Gt]=vt[Gt]);return C(G,lt,kt)},we.createRef=function(){return{current:null}},we.forwardRef=function(G){return{$$typeof:d,render:G}},we.isValidElement=X,we.lazy=function(G){return{$$typeof:g,_payload:{_status:-1,_result:G},_init:st}},we.memo=function(G,ct){return{$$typeof:p,type:G,compare:ct===void 0?null:ct}},we.startTransition=function(G){var ct=I.T,At={};I.T=At;try{var Gt=G(),kt=I.S;kt!==null&&kt(At,Gt),typeof Gt=="object"&&Gt!==null&&typeof Gt.then=="function"&&Gt.then(P,Ft)}catch(lt){Ft(lt)}finally{ct!==null&&At.types!==null&&(ct.types=At.types),I.T=ct}},we.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},we.use=function(G){return I.H.use(G)},we.useActionState=function(G,ct,At){return I.H.useActionState(G,ct,At)},we.useCallback=function(G,ct){return I.H.useCallback(G,ct)},we.useContext=function(G){return I.H.useContext(G)},we.useDebugValue=function(){},we.useDeferredValue=function(G,ct){return I.H.useDeferredValue(G,ct)},we.useEffect=function(G,ct){return I.H.useEffect(G,ct)},we.useEffectEvent=function(G){return I.H.useEffectEvent(G)},we.useId=function(){return I.H.useId()},we.useImperativeHandle=function(G,ct,At){return I.H.useImperativeHandle(G,ct,At)},we.useInsertionEffect=function(G,ct){return I.H.useInsertionEffect(G,ct)},we.useLayoutEffect=function(G,ct){return I.H.useLayoutEffect(G,ct)},we.useMemo=function(G,ct){return I.H.useMemo(G,ct)},we.useOptimistic=function(G,ct){return I.H.useOptimistic(G,ct)},we.useReducer=function(G,ct,At){return I.H.useReducer(G,ct,At)},we.useRef=function(G){return I.H.useRef(G)},we.useState=function(G){return I.H.useState(G)},we.useSyncExternalStore=function(G,ct,At){return I.H.useSyncExternalStore(G,ct,At)},we.useTransition=function(){return I.H.useTransition()},we.version="19.2.4",we}var F_;function um(){return F_||(F_=1,Ad.exports=dS()),Ad.exports}var Se=um(),Rd={exports:{}},Bl={},Cd={exports:{}},wd={};var I_;function pS(){return I_||(I_=1,(function(s){function t(H,Y){var st=H.length;H.push(Y);t:for(;0<st;){var Ft=st-1>>>1,Nt=H[Ft];if(0<l(Nt,Y))H[Ft]=Y,H[st]=Nt,st=Ft;else break t}}function i(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var Y=H[0],st=H.pop();if(st!==Y){H[0]=st;t:for(var Ft=0,Nt=H.length,G=Nt>>>1;Ft<G;){var ct=2*(Ft+1)-1,At=H[ct],Gt=ct+1,kt=H[Gt];if(0>l(At,st))Gt<Nt&&0>l(kt,At)?(H[Ft]=kt,H[Gt]=st,Ft=Gt):(H[Ft]=At,H[ct]=st,Ft=ct);else if(Gt<Nt&&0>l(kt,st))H[Ft]=kt,H[Gt]=st,Ft=Gt;else break t}}return Y}function l(H,Y){var st=H.sortIndex-Y.sortIndex;return st!==0?st:H.id-Y.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,_=null,S=3,b=!1,T=!1,R=!1,E=!1,x=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function O(H){for(var Y=i(p);Y!==null;){if(Y.callback===null)r(p);else if(Y.startTime<=H)r(p),Y.sortIndex=Y.expirationTime,t(m,Y);else break;Y=i(p)}}function z(H){if(R=!1,O(H),!T)if(i(m)!==null)T=!0,P||(P=!0,$());else{var Y=i(p);Y!==null&&xt(z,Y.startTime-H)}}var P=!1,I=-1,j=5,C=-1;function U(){return E?!0:!(s.unstable_now()-C<j)}function X(){if(E=!1,P){var H=s.unstable_now();C=H;var Y=!0;try{t:{T=!1,R&&(R=!1,F(I),I=-1),b=!0;var st=S;try{e:{for(O(H),_=i(m);_!==null&&!(_.expirationTime>H&&U());){var Ft=_.callback;if(typeof Ft=="function"){_.callback=null,S=_.priorityLevel;var Nt=Ft(_.expirationTime<=H);if(H=s.unstable_now(),typeof Nt=="function"){_.callback=Nt,O(H),Y=!0;break e}_===i(m)&&r(m),O(H)}else r(m);_=i(m)}if(_!==null)Y=!0;else{var G=i(p);G!==null&&xt(z,G.startTime-H),Y=!1}}break t}finally{_=null,S=st,b=!1}Y=void 0}}finally{Y?$():P=!1}}}var $;if(typeof N=="function")$=function(){N(X)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,tt=rt.port2;rt.port1.onmessage=X,$=function(){tt.postMessage(null)}}else $=function(){x(X,0)};function xt(H,Y){I=x(function(){H(s.unstable_now())},Y)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_next=function(H){switch(S){case 1:case 2:case 3:var Y=3;break;default:Y=S}var st=S;S=Y;try{return H()}finally{S=st}},s.unstable_requestPaint=function(){E=!0},s.unstable_runWithPriority=function(H,Y){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var st=S;S=H;try{return Y()}finally{S=st}},s.unstable_scheduleCallback=function(H,Y,st){var Ft=s.unstable_now();switch(typeof st=="object"&&st!==null?(st=st.delay,st=typeof st=="number"&&0<st?Ft+st:Ft):st=Ft,H){case 1:var Nt=-1;break;case 2:Nt=250;break;case 5:Nt=1073741823;break;case 4:Nt=1e4;break;default:Nt=5e3}return Nt=st+Nt,H={id:g++,callback:Y,priorityLevel:H,startTime:st,expirationTime:Nt,sortIndex:-1},st>Ft?(H.sortIndex=st,t(p,H),i(m)===null&&H===i(p)&&(R?(F(I),I=-1):R=!0,xt(z,st-Ft))):(H.sortIndex=Nt,t(m,H),T||b||(T=!0,P||(P=!0,$()))),H},s.unstable_shouldYield=U,s.unstable_wrapCallback=function(H){var Y=S;return function(){var st=S;S=Y;try{return H.apply(this,arguments)}finally{S=st}}}})(wd)),wd}var B_;function mS(){return B_||(B_=1,Cd.exports=pS()),Cd.exports}var Dd={exports:{}},ci={};var z_;function gS(){if(z_)return ci;z_=1;var s=um();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return ci.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,ci.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},ci.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},ci.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},ci.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},ci.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,b=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:b}):g==="script"&&r.d.X(m,{crossOrigin:_,integrity:S,fetchPriority:b,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},ci.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},ci.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},ci.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},ci.requestFormReset=function(m){r.d.r(m)},ci.unstable_batchedUpdates=function(m,p){return m(p)},ci.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},ci.useFormStatus=function(){return h.H.useHostTransitionStatus()},ci.version="19.2.4",ci}var H_;function _S(){if(H_)return Dd.exports;H_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Dd.exports=gS(),Dd.exports}var G_;function vS(){if(G_)return Bl;G_=1;var s=mS(),t=um(),i=_S();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var M=!1,D=u.child;D;){if(D===a){M=!0,a=u,o=f;break}if(D===o){M=!0,o=u,a=f;break}D=D.sibling}if(!M){for(D=f.child;D;){if(D===a){M=!0,a=f,o=u;break}if(D===o){M=!0,o=f,a=u;break}D=D.sibling}if(!M)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),N=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=X&&e[X]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Symbol.for("react.client.reference");function tt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===rt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case x:return"Profiler";case E:return"StrictMode";case z:return"Suspense";case P:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case N:return e.displayName||"Context";case F:return(e._context.displayName||"Context")+".Consumer";case O:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:tt(e.type)||"Memo";case j:n=e._payload,e=e._init;try{return tt(e(n))}catch{}}return null}var xt=Array.isArray,H=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,st={pending:!1,data:null,method:null,action:null},Ft=[],Nt=-1;function G(e){return{current:e}}function ct(e){0>Nt||(e.current=Ft[Nt],Ft[Nt]=null,Nt--)}function At(e,n){Nt++,Ft[Nt]=e.current,e.current=n}var Gt=G(null),kt=G(null),lt=G(null),vt=G(null);function Xt(e,n){switch(At(lt,n),At(kt,e),At(Gt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?n_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=n_(n),e=i_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ct(Gt),At(Gt,e)}function ie(){ct(Gt),ct(kt),ct(lt)}function re(e){e.memoizedState!==null&&At(vt,e);var n=Gt.current,a=i_(n,e.type);n!==a&&(At(kt,e),At(Gt,a))}function Ne(e){kt.current===e&&(ct(Gt),ct(kt)),vt.current===e&&(ct(vt),Nl._currentValue=st)}var ln,Ie;function Ce(e){if(ln===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ln=n&&n[1]||"",Ie=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ln+e+Ie}var ke=!1;function Jt(e,n){if(!e||ke)return"";ke=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var wt=function(){throw Error()};if(Object.defineProperty(wt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(wt,[])}catch(gt){var pt=gt}Reflect.construct(e,[],wt)}else{try{wt.call()}catch(gt){pt=gt}e.call(wt.prototype)}}else{try{throw Error()}catch(gt){pt=gt}(wt=e())&&typeof wt.catch=="function"&&wt.catch(function(){})}}catch(gt){if(gt&&pt&&typeof gt.stack=="string")return[gt.stack,pt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),M=f[0],D=f[1];if(M&&D){var W=M.split(`
`),ht=D.split(`
`);for(u=o=0;o<W.length&&!W[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ht.length&&!ht[u].includes("DetermineComponentFrameRoot");)u++;if(o===W.length||u===ht.length)for(o=W.length-1,u=ht.length-1;1<=o&&0<=u&&W[o]!==ht[u];)u--;for(;1<=o&&0<=u;o--,u--)if(W[o]!==ht[u]){if(o!==1||u!==1)do if(o--,u--,0>u||W[o]!==ht[u]){var Et=`
`+W[o].replace(" at new "," at ");return e.displayName&&Et.includes("<anonymous>")&&(Et=Et.replace("<anonymous>",e.displayName)),Et}while(1<=o&&0<=u);break}}}finally{ke=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ce(a):""}function pe(e,n){switch(e.tag){case 26:case 27:case 5:return Ce(e.type);case 16:return Ce("Lazy");case 13:return e.child!==n&&n!==null?Ce("Suspense Fallback"):Ce("Suspense");case 19:return Ce("SuspenseList");case 0:case 15:return Jt(e.type,!1);case 11:return Jt(e.type.render,!1);case 1:return Jt(e.type,!0);case 31:return Ce("Activity");default:return""}}function k(e){try{var n="",a=null;do n+=pe(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var ge=Object.prototype.hasOwnProperty,Me=s.unstable_scheduleCallback,xe=s.unstable_cancelCallback,Qt=s.unstable_shouldYield,B=s.unstable_requestPaint,A=s.unstable_now,K=s.unstable_getCurrentPriorityLevel,bt=s.unstable_ImmediatePriority,Dt=s.unstable_UserBlockingPriority,_t=s.unstable_NormalPriority,se=s.unstable_LowPriority,Vt=s.unstable_IdlePriority,ae=s.log,de=s.unstable_setDisableYieldValue,Ot=null,Bt=null;function te(e){if(typeof ae=="function"&&de(e),Bt&&typeof Bt.setStrictMode=="function")try{Bt.setStrictMode(Ot,e)}catch{}}var Yt=Math.clz32?Math.clz32:Q,jt=Math.log,De=Math.LN2;function Q(e){return e>>>=0,e===0?32:31-(jt(e)/De|0)|0}var qt=256,Lt=262144,Zt=4194304;function St(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ct(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var D=o&134217727;return D!==0?(o=D&~f,o!==0?u=St(o):(M&=D,M!==0?u=St(M):a||(a=D&~e,a!==0&&(u=St(a))))):(D=o&~f,D!==0?u=St(D):M!==0?u=St(M):a||(a=o&~e,a!==0&&(u=St(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ht(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function me(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function an(){var e=Zt;return Zt<<=1,(Zt&62914560)===0&&(Zt=4194304),e}function je(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function In(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function di(e,n,a,o,u,f){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var D=e.entanglements,W=e.expirationTimes,ht=e.hiddenUpdates;for(a=M&~a;0<a;){var Et=31-Yt(a),wt=1<<Et;D[Et]=0,W[Et]=-1;var pt=ht[Et];if(pt!==null)for(ht[Et]=null,Et=0;Et<pt.length;Et++){var gt=pt[Et];gt!==null&&(gt.lane&=-536870913)}a&=~wt}o!==0&&$r(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(M&~n))}function $r(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Yt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Jr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Yt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Ia(e,n){var a=n&-n;return a=(a&42)!==0?1:pr(a),(a&(e.suspendedLanes|n))!==0?0:a}function pr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ba(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ts(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:A_(e.type))}function Zi(e,n){var a=Y.p;try{return Y.p=e,n()}finally{Y.p=a}}var Qn=Math.random().toString(36).slice(2),Mn="__reactFiber$"+Qn,An="__reactProps$"+Qn,Pi="__reactContainer$"+Qn,mr="__reactEvents$"+Qn,Ki="__reactListeners$"+Qn,Hs="__reactHandles$"+Qn,es="__reactResources$"+Qn,Qi="__reactMarker$"+Qn;function ns(e){delete e[Mn],delete e[An],delete e[mr],delete e[Ki],delete e[Hs]}function yi(e){var n=e[Mn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Pi]||a[Mn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=u_(e);e!==null;){if(a=e[Mn])return a;e=u_(e)}return n}e=a,a=e.parentNode}return null}function ya(e){if(e=e[Mn]||e[Pi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function $i(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function pi(e){var n=e[es];return n||(n=e[es]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function w(e){e[Qi]=!0}var J=new Set,mt={};function dt(e,n){at(e,n),at(e+"Capture",n)}function at(e,n){for(mt[e]=n,e=0;e<n.length;e++)J.add(n[e])}var Kt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ne={},$t={};function oe(e){return ge.call($t,e)?!0:ge.call(ne,e)?!1:Kt.test(e)?$t[e]=!0:(ne[e]=!0,!1)}function ue(e,n,a){if(oe(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function _e(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function le(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ye(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ke(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function rn(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){a=""+M,f.call(this,M)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(M){a=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function sn(e){if(!e._valueTracker){var n=Ke(e)?"checked":"value";e._valueTracker=rn(e,n,""+e[n])}}function Je(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Ke(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function he(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ue=/[\n"\\]/g;function Re(e){return e.replace(Ue,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Bn(e,n,a,o,u,f,M,D){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ye(n)):e.value!==""+ye(n)&&(e.value=""+ye(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?Cn(e,M,ye(n)):a!=null?Cn(e,M,ye(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?e.name=""+ye(D):e.removeAttribute("name")}function Ji(e,n,a,o,u,f,M,D){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){sn(e);return}a=a!=null?""+ye(a):"",n=n!=null?""+ye(n):a,D||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=D?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M),sn(e)}function Cn(e,n,a){n==="number"&&he(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Si(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ye(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Qe(e,n,a){if(n!=null&&(n=""+ye(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ye(a):""}function zn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(xt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ye(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),sn(e)}function wn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Wn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Wn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function gr(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Nn(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Nn(e,f,n[f])}function Mi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var df=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),qo=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bi(e){return qo.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Fi(){}var Zo=null;function Ko(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vn=null,_r=null;function Qo(e){var n=ya(e);if(n&&(e=n.stateNode)){var a=e[An]||null;t:switch(e=n.stateNode,n.type){case"input":if(Bn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Re(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[An]||null;if(!u)throw Error(r(90));Bn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Je(o)}break t;case"textarea":Qe(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Si(e,!!a.multiple,n,!1)}}}var $o=!1;function rc(e,n,a){if($o)return e(n,a);$o=!0;try{var o=e(n);return o}finally{if($o=!1,(vn!==null||_r!==null)&&($c(),vn&&(n=vn,e=_r,_r=vn=null,Qo(n),e)))for(n=0;n<e.length;n++)Qo(e[n])}}function Sa(e,n){var a=e.stateNode;if(a===null)return null;var o=a[An]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),is=!1;if(ua)try{var as={};Object.defineProperty(as,"passive",{get:function(){is=!0}}),window.addEventListener("test",as,as),window.removeEventListener("test",as,as)}catch{is=!1}var Ma=null,Jo=null,Gs=null;function sc(){if(Gs)return Gs;var e,n=Jo,a=n.length,o,u="value"in Ma?Ma.value:Ma.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===u[f-o];o++);return Gs=u.slice(e,1<o?1-o:void 0)}function Vs(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ks(){return!0}function oc(){return!1}function li(e){function n(a,o,u,f,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=M,this.currentTarget=null;for(var D in e)e.hasOwnProperty(D)&&(a=e[D],this[D]=a?a(f):f[D]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ks:oc,this.isPropagationStopped=oc,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ks)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ks)},persist:function(){},isPersistent:ks}),n}var za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rs=li(za),ss=_({},za,{view:0,detail:0}),pf=li(ss),tl,Xs,os,Ws=_({},ss,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:il,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==os&&(os&&e.type==="mousemove"?(tl=e.screenX-os.screenX,Xs=e.screenY-os.screenY):Xs=tl=0,os=e),tl)},movementY:function(e){return"movementY"in e?e.movementY:Xs}}),lc=li(Ws),mf=_({},Ws,{dataTransfer:0}),gf=li(mf),_f=_({},ss,{relatedTarget:0}),el=li(_f),vf=_({},za,{animationName:0,elapsedTime:0,pseudoElement:0}),xf=li(vf),yf=_({},za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sf=li(yf),cc=_({},za,{data:0}),uc=li(cc),Mf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=nl[e])?!!n[e]:!1}function il(){return bf}var Ef=_({},ss,{key:function(e){if(e.key){var n=Mf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Vs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:il,charCode:function(e){return e.type==="keypress"?Vs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Tf=li(Ef),Af=_({},Ws,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hc=li(Af),Rf=_({},ss,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:il}),Cf=li(Rf),wf=_({},za,{propertyName:0,elapsedTime:0,pseudoElement:0}),Df=li(wf),Uf=_({},Ws,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lf=li(Uf),Nf=_({},za,{newState:0,oldState:0}),Of=li(Nf),Pf=[9,13,27,32],js=ua&&"CompositionEvent"in window,ls=null;ua&&"documentMode"in document&&(ls=document.documentMode);var Ff=ua&&"TextEvent"in window&&!ls,dc=ua&&(!js||ls&&8<ls&&11>=ls),pc=" ",ba=!1;function mc(e,n){switch(e){case"keyup":return Pf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ys(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vr=!1;function al(e,n){switch(e){case"compositionend":return Ys(n);case"keypress":return n.which!==32?null:(ba=!0,pc);case"textInput":return e=n.data,e===pc&&ba?null:e;default:return null}}function cs(e,n){if(vr)return e==="compositionend"||!js&&mc(e,n)?(e=sc(),Gs=Jo=Ma=null,vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return dc&&n.locale!=="ko"?null:n.data;default:return null}}var us={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!us[e.type]:n==="textarea"}function Ei(e,n,a,o){vn?_r?_r.push(o):_r=[o]:vn=o,n=ru(n,"onChange"),0<n.length&&(a=new rs("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var xr=null,Ha=null;function fa(e){Kg(e,0)}function fs(e){var n=$i(e);if(Je(n))return e}function _c(e,n){if(e==="change")return n}var hs=!1;if(ua){var qs;if(ua){var v="oninput"in document;if(!v){var y=document.createElement("div");y.setAttribute("oninput","return;"),v=typeof y.oninput=="function"}qs=v}else qs=!1;hs=qs&&(!document.documentMode||9<document.documentMode)}function L(){xr&&(xr.detachEvent("onpropertychange",V),Ha=xr=null)}function V(e){if(e.propertyName==="value"&&fs(Ha)){var n=[];Ei(n,Ha,e,Ko(e)),rc(fa,n)}}function ot(e,n,a){e==="focusin"?(L(),xr=n,Ha=a,xr.attachEvent("onpropertychange",V)):e==="focusout"&&L()}function yt(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fs(Ha)}function Ut(e,n){if(e==="click")return fs(n)}function Mt(e,n){if(e==="input"||e==="change")return fs(n)}function It(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Pt=typeof Object.is=="function"?Object.is:It;function Wt(e,n){if(Pt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!ge.call(n,u)||!Pt(e[u],n[u]))return!1}return!0}function Ee(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ye(e,n){var a=Ee(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Ee(a)}}function Rn(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Rn(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function xn(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=he(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=he(e.document)}return n}function mi(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Ii=ua&&"documentMode"in document&&11>=document.documentMode,q=null,ut=null,Tt=null,zt=!1;function Te(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;zt||q==null||q!==he(o)||(o=q,"selectionStart"in o&&mi(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Tt&&Wt(Tt,o)||(Tt=o,o=ru(ut,"onSelect"),0<o.length&&(n=new rs("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=q)))}function qe(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var hn={animationend:qe("Animation","AnimationEnd"),animationiteration:qe("Animation","AnimationIteration"),animationstart:qe("Animation","AnimationStart"),transitionrun:qe("Transition","TransitionRun"),transitionstart:qe("Transition","TransitionStart"),transitioncancel:qe("Transition","TransitionCancel"),transitionend:qe("Transition","TransitionEnd")},ei={},On={};ua&&(On=document.createElement("div").style,"AnimationEvent"in window||(delete hn.animationend.animation,delete hn.animationiteration.animation,delete hn.animationstart.animation),"TransitionEvent"in window||delete hn.transitionend.transition);function Ti(e){if(ei[e])return ei[e];if(!hn[e])return e;var n=hn[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in On)return ei[e]=n[a];return e}var Ga=Ti("animationend"),bn=Ti("animationiteration"),If=Ti("animationstart"),Wx=Ti("transitionrun"),jx=Ti("transitionstart"),Yx=Ti("transitioncancel"),wm=Ti("transitionend"),Dm=new Map,Bf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Bf.push("scrollEnd");function ha(e,n){Dm.set(e,n),dt(n,[e])}var vc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ta=[],Zs=0,zf=0;function xc(){for(var e=Zs,n=zf=Zs=0;n<e;){var a=ta[n];ta[n++]=null;var o=ta[n];ta[n++]=null;var u=ta[n];ta[n++]=null;var f=ta[n];if(ta[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}f!==0&&Um(a,u,f)}}function yc(e,n,a,o){ta[Zs++]=e,ta[Zs++]=n,ta[Zs++]=a,ta[Zs++]=o,zf|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Hf(e,n,a,o){return yc(e,n,a,o),Sc(e)}function ds(e,n){return yc(e,null,null,n),Sc(e)}function Um(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Yt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Sc(e){if(50<Al)throw Al=0,Zh=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ks={};function qx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bi(e,n,a,o){return new qx(e,n,a,o)}function Gf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Va(e,n){var a=e.alternate;return a===null?(a=Bi(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Lm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Mc(e,n,a,o,u,f){var M=0;if(o=e,typeof e=="function")Gf(e)&&(M=1);else if(typeof e=="string")M=Jy(e,a,Gt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=Bi(31,a,n,u),e.elementType=C,e.lanes=f,e;case R:return ps(a.children,u,f,n);case E:M=8,u|=24;break;case x:return e=Bi(12,a,n,u|2),e.elementType=x,e.lanes=f,e;case z:return e=Bi(13,a,n,u),e.elementType=z,e.lanes=f,e;case P:return e=Bi(19,a,n,u),e.elementType=P,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:M=10;break t;case F:M=9;break t;case O:M=11;break t;case I:M=14;break t;case j:M=16,o=null;break t}M=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=Bi(M,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function ps(e,n,a,o){return e=Bi(7,e,o,n),e.lanes=a,e}function Vf(e,n,a){return e=Bi(6,e,null,n),e.lanes=a,e}function Nm(e){var n=Bi(18,null,null,0);return n.stateNode=e,n}function kf(e,n,a){return n=Bi(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Om=new WeakMap;function ea(e,n){if(typeof e=="object"&&e!==null){var a=Om.get(e);return a!==void 0?a:(n={value:e,source:n,stack:k(n)},Om.set(e,n),n)}return{value:e,source:n,stack:k(n)}}var Qs=[],$s=0,bc=null,rl=0,na=[],ia=0,yr=null,Ea=1,Ta="";function ka(e,n){Qs[$s++]=rl,Qs[$s++]=bc,bc=e,rl=n}function Pm(e,n,a){na[ia++]=Ea,na[ia++]=Ta,na[ia++]=yr,yr=e;var o=Ea;e=Ta;var u=32-Yt(o)-1;o&=~(1<<u),a+=1;var f=32-Yt(n)+u;if(30<f){var M=u-u%5;f=(o&(1<<M)-1).toString(32),o>>=M,u-=M,Ea=1<<32-Yt(n)+u|a<<u|o,Ta=f+e}else Ea=1<<f|a<<u|o,Ta=e}function Xf(e){e.return!==null&&(ka(e,1),Pm(e,1,0))}function Wf(e){for(;e===bc;)bc=Qs[--$s],Qs[$s]=null,rl=Qs[--$s],Qs[$s]=null;for(;e===yr;)yr=na[--ia],na[ia]=null,Ta=na[--ia],na[ia]=null,Ea=na[--ia],na[ia]=null}function Fm(e,n){na[ia++]=Ea,na[ia++]=Ta,na[ia++]=yr,Ea=n.id,Ta=n.overflow,yr=e}var ni=null,yn=null,Ze=!1,Sr=null,aa=!1,jf=Error(r(519));function Mr(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw sl(ea(n,e)),jf}function Im(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[Mn]=e,n[An]=o,a){case"dialog":Ve("cancel",n),Ve("close",n);break;case"iframe":case"object":case"embed":Ve("load",n);break;case"video":case"audio":for(a=0;a<Cl.length;a++)Ve(Cl[a],n);break;case"source":Ve("error",n);break;case"img":case"image":case"link":Ve("error",n),Ve("load",n);break;case"details":Ve("toggle",n);break;case"input":Ve("invalid",n),Ji(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ve("invalid",n);break;case"textarea":Ve("invalid",n),zn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||t_(n.textContent,a)?(o.popover!=null&&(Ve("beforetoggle",n),Ve("toggle",n)),o.onScroll!=null&&Ve("scroll",n),o.onScrollEnd!=null&&Ve("scrollend",n),o.onClick!=null&&(n.onclick=Fi),n=!0):n=!1,n||Mr(e,!0)}function Bm(e){for(ni=e.return;ni;)switch(ni.tag){case 5:case 31:case 13:aa=!1;return;case 27:case 3:aa=!0;return;default:ni=ni.return}}function Js(e){if(e!==ni)return!1;if(!Ze)return Bm(e),Ze=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ud(e.type,e.memoizedProps)),a=!a),a&&yn&&Mr(e),Bm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));yn=c_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));yn=c_(e)}else n===27?(n=yn,Fr(e.type)?(e=md,md=null,yn=e):yn=n):yn=ni?sa(e.stateNode.nextSibling):null;return!0}function ms(){yn=ni=null,Ze=!1}function Yf(){var e=Sr;return e!==null&&(wi===null?wi=e:wi.push.apply(wi,e),Sr=null),e}function sl(e){Sr===null?Sr=[e]:Sr.push(e)}var qf=G(null),gs=null,Xa=null;function br(e,n,a){At(qf,n._currentValue),n._currentValue=a}function Wa(e){e._currentValue=qf.current,ct(qf)}function Zf(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Kf(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var M=u.child;f=f.firstContext;t:for(;f!==null;){var D=f;f=u;for(var W=0;W<n.length;W++)if(D.context===n[W]){f.lanes|=a,D=f.alternate,D!==null&&(D.lanes|=a),Zf(f.return,a,e),o||(M=null);break t}f=D.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(r(341));M.lanes|=a,f=M.alternate,f!==null&&(f.lanes|=a),Zf(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function to(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var D=u.type;Pt(u.pendingProps.value,M.value)||(e!==null?e.push(D):e=[D])}}else if(u===vt.current){if(M=u.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Nl):e=[Nl])}u=u.return}e!==null&&Kf(n,e,a,o),n.flags|=262144}function Ec(e){for(e=e.firstContext;e!==null;){if(!Pt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _s(e){gs=e,Xa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ii(e){return zm(gs,e)}function Tc(e,n){return gs===null&&_s(e),zm(e,n)}function zm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Xa===null){if(e===null)throw Error(r(308));Xa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Xa=Xa.next=n;return a}var Zx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Kx=s.unstable_scheduleCallback,Qx=s.unstable_NormalPriority,Hn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qf(){return{controller:new Zx,data:new Map,refCount:0}}function ol(e){e.refCount--,e.refCount===0&&Kx(Qx,function(){e.controller.abort()})}var ll=null,$f=0,eo=0,no=null;function $x(e,n){if(ll===null){var a=ll=[];$f=0,eo=ed(),no={status:"pending",value:void 0,then:function(o){a.push(o)}}}return $f++,n.then(Hm,Hm),n}function Hm(){if(--$f===0&&ll!==null){no!==null&&(no.status="fulfilled");var e=ll;ll=null,eo=0,no=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Jx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Gm=H.S;H.S=function(e,n){Eg=A(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&$x(e,n),Gm!==null&&Gm(e,n)};var vs=G(null);function Jf(){var e=vs.current;return e!==null?e:_n.pooledCache}function Ac(e,n){n===null?At(vs,vs.current):At(vs,n.pool)}function Vm(){var e=Jf();return e===null?null:{parent:Hn._currentValue,pool:e}}var io=Error(r(460)),th=Error(r(474)),Rc=Error(r(542)),Cc={then:function(){}};function km(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Xm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Fi,Fi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,jm(e),e;default:if(typeof n.status=="string")n.then(Fi,Fi);else{if(e=_n,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,jm(e),e}throw ys=n,io}}function xs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ys=a,io):a}}var ys=null;function Wm(){if(ys===null)throw Error(r(459));var e=ys;return ys=null,e}function jm(e){if(e===io||e===Rc)throw Error(r(483))}var ao=null,cl=0;function wc(e){var n=cl;return cl+=1,ao===null&&(ao=[]),Xm(ao,e,n)}function ul(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Dc(e,n){throw n.$$typeof===S?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Ym(e){function n(et,Z){if(e){var ft=et.deletions;ft===null?(et.deletions=[Z],et.flags|=16):ft.push(Z)}}function a(et,Z){if(!e)return null;for(;Z!==null;)n(et,Z),Z=Z.sibling;return null}function o(et){for(var Z=new Map;et!==null;)et.key!==null?Z.set(et.key,et):Z.set(et.index,et),et=et.sibling;return Z}function u(et,Z){return et=Va(et,Z),et.index=0,et.sibling=null,et}function f(et,Z,ft){return et.index=ft,e?(ft=et.alternate,ft!==null?(ft=ft.index,ft<Z?(et.flags|=67108866,Z):ft):(et.flags|=67108866,Z)):(et.flags|=1048576,Z)}function M(et){return e&&et.alternate===null&&(et.flags|=67108866),et}function D(et,Z,ft,Rt){return Z===null||Z.tag!==6?(Z=Vf(ft,et.mode,Rt),Z.return=et,Z):(Z=u(Z,ft),Z.return=et,Z)}function W(et,Z,ft,Rt){var ve=ft.type;return ve===R?Et(et,Z,ft.props.children,Rt,ft.key):Z!==null&&(Z.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===j&&xs(ve)===Z.type)?(Z=u(Z,ft.props),ul(Z,ft),Z.return=et,Z):(Z=Mc(ft.type,ft.key,ft.props,null,et.mode,Rt),ul(Z,ft),Z.return=et,Z)}function ht(et,Z,ft,Rt){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==ft.containerInfo||Z.stateNode.implementation!==ft.implementation?(Z=kf(ft,et.mode,Rt),Z.return=et,Z):(Z=u(Z,ft.children||[]),Z.return=et,Z)}function Et(et,Z,ft,Rt,ve){return Z===null||Z.tag!==7?(Z=ps(ft,et.mode,Rt,ve),Z.return=et,Z):(Z=u(Z,ft),Z.return=et,Z)}function wt(et,Z,ft){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Z=Vf(""+Z,et.mode,ft),Z.return=et,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case b:return ft=Mc(Z.type,Z.key,Z.props,null,et.mode,ft),ul(ft,Z),ft.return=et,ft;case T:return Z=kf(Z,et.mode,ft),Z.return=et,Z;case j:return Z=xs(Z),wt(et,Z,ft)}if(xt(Z)||$(Z))return Z=ps(Z,et.mode,ft,null),Z.return=et,Z;if(typeof Z.then=="function")return wt(et,wc(Z),ft);if(Z.$$typeof===N)return wt(et,Tc(et,Z),ft);Dc(et,Z)}return null}function pt(et,Z,ft,Rt){var ve=Z!==null?Z.key:null;if(typeof ft=="string"&&ft!==""||typeof ft=="number"||typeof ft=="bigint")return ve!==null?null:D(et,Z,""+ft,Rt);if(typeof ft=="object"&&ft!==null){switch(ft.$$typeof){case b:return ft.key===ve?W(et,Z,ft,Rt):null;case T:return ft.key===ve?ht(et,Z,ft,Rt):null;case j:return ft=xs(ft),pt(et,Z,ft,Rt)}if(xt(ft)||$(ft))return ve!==null?null:Et(et,Z,ft,Rt,null);if(typeof ft.then=="function")return pt(et,Z,wc(ft),Rt);if(ft.$$typeof===N)return pt(et,Z,Tc(et,ft),Rt);Dc(et,ft)}return null}function gt(et,Z,ft,Rt,ve){if(typeof Rt=="string"&&Rt!==""||typeof Rt=="number"||typeof Rt=="bigint")return et=et.get(ft)||null,D(Z,et,""+Rt,ve);if(typeof Rt=="object"&&Rt!==null){switch(Rt.$$typeof){case b:return et=et.get(Rt.key===null?ft:Rt.key)||null,W(Z,et,Rt,ve);case T:return et=et.get(Rt.key===null?ft:Rt.key)||null,ht(Z,et,Rt,ve);case j:return Rt=xs(Rt),gt(et,Z,ft,Rt,ve)}if(xt(Rt)||$(Rt))return et=et.get(ft)||null,Et(Z,et,Rt,ve,null);if(typeof Rt.then=="function")return gt(et,Z,ft,wc(Rt),ve);if(Rt.$$typeof===N)return gt(et,Z,ft,Tc(Z,Rt),ve);Dc(Z,Rt)}return null}function ce(et,Z,ft,Rt){for(var ve=null,tn=null,fe=Z,Pe=Z=0,We=null;fe!==null&&Pe<ft.length;Pe++){fe.index>Pe?(We=fe,fe=null):We=fe.sibling;var en=pt(et,fe,ft[Pe],Rt);if(en===null){fe===null&&(fe=We);break}e&&fe&&en.alternate===null&&n(et,fe),Z=f(en,Z,Pe),tn===null?ve=en:tn.sibling=en,tn=en,fe=We}if(Pe===ft.length)return a(et,fe),Ze&&ka(et,Pe),ve;if(fe===null){for(;Pe<ft.length;Pe++)fe=wt(et,ft[Pe],Rt),fe!==null&&(Z=f(fe,Z,Pe),tn===null?ve=fe:tn.sibling=fe,tn=fe);return Ze&&ka(et,Pe),ve}for(fe=o(fe);Pe<ft.length;Pe++)We=gt(fe,et,Pe,ft[Pe],Rt),We!==null&&(e&&We.alternate!==null&&fe.delete(We.key===null?Pe:We.key),Z=f(We,Z,Pe),tn===null?ve=We:tn.sibling=We,tn=We);return e&&fe.forEach(function(Gr){return n(et,Gr)}),Ze&&ka(et,Pe),ve}function be(et,Z,ft,Rt){if(ft==null)throw Error(r(151));for(var ve=null,tn=null,fe=Z,Pe=Z=0,We=null,en=ft.next();fe!==null&&!en.done;Pe++,en=ft.next()){fe.index>Pe?(We=fe,fe=null):We=fe.sibling;var Gr=pt(et,fe,en.value,Rt);if(Gr===null){fe===null&&(fe=We);break}e&&fe&&Gr.alternate===null&&n(et,fe),Z=f(Gr,Z,Pe),tn===null?ve=Gr:tn.sibling=Gr,tn=Gr,fe=We}if(en.done)return a(et,fe),Ze&&ka(et,Pe),ve;if(fe===null){for(;!en.done;Pe++,en=ft.next())en=wt(et,en.value,Rt),en!==null&&(Z=f(en,Z,Pe),tn===null?ve=en:tn.sibling=en,tn=en);return Ze&&ka(et,Pe),ve}for(fe=o(fe);!en.done;Pe++,en=ft.next())en=gt(fe,et,Pe,en.value,Rt),en!==null&&(e&&en.alternate!==null&&fe.delete(en.key===null?Pe:en.key),Z=f(en,Z,Pe),tn===null?ve=en:tn.sibling=en,tn=en);return e&&fe.forEach(function(uS){return n(et,uS)}),Ze&&ka(et,Pe),ve}function mn(et,Z,ft,Rt){if(typeof ft=="object"&&ft!==null&&ft.type===R&&ft.key===null&&(ft=ft.props.children),typeof ft=="object"&&ft!==null){switch(ft.$$typeof){case b:t:{for(var ve=ft.key;Z!==null;){if(Z.key===ve){if(ve=ft.type,ve===R){if(Z.tag===7){a(et,Z.sibling),Rt=u(Z,ft.props.children),Rt.return=et,et=Rt;break t}}else if(Z.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===j&&xs(ve)===Z.type){a(et,Z.sibling),Rt=u(Z,ft.props),ul(Rt,ft),Rt.return=et,et=Rt;break t}a(et,Z);break}else n(et,Z);Z=Z.sibling}ft.type===R?(Rt=ps(ft.props.children,et.mode,Rt,ft.key),Rt.return=et,et=Rt):(Rt=Mc(ft.type,ft.key,ft.props,null,et.mode,Rt),ul(Rt,ft),Rt.return=et,et=Rt)}return M(et);case T:t:{for(ve=ft.key;Z!==null;){if(Z.key===ve)if(Z.tag===4&&Z.stateNode.containerInfo===ft.containerInfo&&Z.stateNode.implementation===ft.implementation){a(et,Z.sibling),Rt=u(Z,ft.children||[]),Rt.return=et,et=Rt;break t}else{a(et,Z);break}else n(et,Z);Z=Z.sibling}Rt=kf(ft,et.mode,Rt),Rt.return=et,et=Rt}return M(et);case j:return ft=xs(ft),mn(et,Z,ft,Rt)}if(xt(ft))return ce(et,Z,ft,Rt);if($(ft)){if(ve=$(ft),typeof ve!="function")throw Error(r(150));return ft=ve.call(ft),be(et,Z,ft,Rt)}if(typeof ft.then=="function")return mn(et,Z,wc(ft),Rt);if(ft.$$typeof===N)return mn(et,Z,Tc(et,ft),Rt);Dc(et,ft)}return typeof ft=="string"&&ft!==""||typeof ft=="number"||typeof ft=="bigint"?(ft=""+ft,Z!==null&&Z.tag===6?(a(et,Z.sibling),Rt=u(Z,ft),Rt.return=et,et=Rt):(a(et,Z),Rt=Vf(ft,et.mode,Rt),Rt.return=et,et=Rt),M(et)):a(et,Z)}return function(et,Z,ft,Rt){try{cl=0;var ve=mn(et,Z,ft,Rt);return ao=null,ve}catch(fe){if(fe===io||fe===Rc)throw fe;var tn=Bi(29,fe,null,et.mode);return tn.lanes=Rt,tn.return=et,tn}}}var Ss=Ym(!0),qm=Ym(!1),Er=!1;function eh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function nh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Tr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ar(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(on&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Sc(e),Um(e,null,a),n}return yc(e,o,n,a),Sc(e)}function fl(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Jr(e,a)}}function ih(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=M:f=f.next=M,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var ah=!1;function hl(){if(ah){var e=no;if(e!==null)throw e}}function dl(e,n,a,o){ah=!1;var u=e.updateQueue;Er=!1;var f=u.firstBaseUpdate,M=u.lastBaseUpdate,D=u.shared.pending;if(D!==null){u.shared.pending=null;var W=D,ht=W.next;W.next=null,M===null?f=ht:M.next=ht,M=W;var Et=e.alternate;Et!==null&&(Et=Et.updateQueue,D=Et.lastBaseUpdate,D!==M&&(D===null?Et.firstBaseUpdate=ht:D.next=ht,Et.lastBaseUpdate=W))}if(f!==null){var wt=u.baseState;M=0,Et=ht=W=null,D=f;do{var pt=D.lane&-536870913,gt=pt!==D.lane;if(gt?(Xe&pt)===pt:(o&pt)===pt){pt!==0&&pt===eo&&(ah=!0),Et!==null&&(Et=Et.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});t:{var ce=e,be=D;pt=n;var mn=a;switch(be.tag){case 1:if(ce=be.payload,typeof ce=="function"){wt=ce.call(mn,wt,pt);break t}wt=ce;break t;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=be.payload,pt=typeof ce=="function"?ce.call(mn,wt,pt):ce,pt==null)break t;wt=_({},wt,pt);break t;case 2:Er=!0}}pt=D.callback,pt!==null&&(e.flags|=64,gt&&(e.flags|=8192),gt=u.callbacks,gt===null?u.callbacks=[pt]:gt.push(pt))}else gt={lane:pt,tag:D.tag,payload:D.payload,callback:D.callback,next:null},Et===null?(ht=Et=gt,W=wt):Et=Et.next=gt,M|=pt;if(D=D.next,D===null){if(D=u.shared.pending,D===null)break;gt=D,D=gt.next,gt.next=null,u.lastBaseUpdate=gt,u.shared.pending=null}}while(!0);Et===null&&(W=wt),u.baseState=W,u.firstBaseUpdate=ht,u.lastBaseUpdate=Et,f===null&&(u.shared.lanes=0),Ur|=M,e.lanes=M,e.memoizedState=wt}}function Zm(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Km(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Zm(a[e],n)}var ro=G(null),Uc=G(0);function Qm(e,n){e=tr,At(Uc,e),At(ro,n),tr=e|n.baseLanes}function rh(){At(Uc,tr),At(ro,ro.current)}function sh(){tr=Uc.current,ct(ro),ct(Uc)}var zi=G(null),ra=null;function Rr(e){var n=e.alternate;At(Pn,Pn.current&1),At(zi,e),ra===null&&(n===null||ro.current!==null||n.memoizedState!==null)&&(ra=e)}function oh(e){At(Pn,Pn.current),At(zi,e),ra===null&&(ra=e)}function $m(e){e.tag===22?(At(Pn,Pn.current),At(zi,e),ra===null&&(ra=e)):Cr()}function Cr(){At(Pn,Pn.current),At(zi,zi.current)}function Hi(e){ct(zi),ra===e&&(ra=null),ct(Pn)}var Pn=G(0);function Lc(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||dd(a)||pd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ja=0,Oe=null,dn=null,Gn=null,Nc=!1,so=!1,Ms=!1,Oc=0,pl=0,oo=null,ty=0;function Dn(){throw Error(r(321))}function lh(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Pt(e[a],n[a]))return!1;return!0}function ch(e,n,a,o,u,f){return ja=f,Oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,H.H=e===null||e.memoizedState===null?P0:Eh,Ms=!1,f=a(o,u),Ms=!1,so&&(f=t0(n,a,o,u)),Jm(e),f}function Jm(e){H.H=_l;var n=dn!==null&&dn.next!==null;if(ja=0,Gn=dn=Oe=null,Nc=!1,pl=0,oo=null,n)throw Error(r(300));e===null||Vn||(e=e.dependencies,e!==null&&Ec(e)&&(Vn=!0))}function t0(e,n,a,o){Oe=e;var u=0;do{if(so&&(oo=null),pl=0,so=!1,25<=u)throw Error(r(301));if(u+=1,Gn=dn=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}H.H=F0,f=n(a,o)}while(so);return f}function ey(){var e=H.H,n=e.useState()[0];return n=typeof n.then=="function"?ml(n):n,e=e.useState()[0],(dn!==null?dn.memoizedState:null)!==e&&(Oe.flags|=1024),n}function uh(){var e=Oc!==0;return Oc=0,e}function fh(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function hh(e){if(Nc){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Nc=!1}ja=0,Gn=dn=Oe=null,so=!1,pl=Oc=0,oo=null}function gi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gn===null?Oe.memoizedState=Gn=e:Gn=Gn.next=e,Gn}function Fn(){if(dn===null){var e=Oe.alternate;e=e!==null?e.memoizedState:null}else e=dn.next;var n=Gn===null?Oe.memoizedState:Gn.next;if(n!==null)Gn=n,dn=e;else{if(e===null)throw Oe.alternate===null?Error(r(467)):Error(r(310));dn=e,e={memoizedState:dn.memoizedState,baseState:dn.baseState,baseQueue:dn.baseQueue,queue:dn.queue,next:null},Gn===null?Oe.memoizedState=Gn=e:Gn=Gn.next=e}return Gn}function Pc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ml(e){var n=pl;return pl+=1,oo===null&&(oo=[]),e=Xm(oo,e,n),n=Oe,(Gn===null?n.memoizedState:Gn.next)===null&&(n=n.alternate,H.H=n===null||n.memoizedState===null?P0:Eh),e}function Fc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ml(e);if(e.$$typeof===N)return ii(e)}throw Error(r(438,String(e)))}function dh(e){var n=null,a=Oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Oe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Pc(),Oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=U;return n.index++,a}function Ya(e,n){return typeof n=="function"?n(e):n}function Ic(e){var n=Fn();return ph(n,dn,e)}function ph(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var M=u.next;u.next=f.next,f.next=M}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var D=M=null,W=null,ht=n,Et=!1;do{var wt=ht.lane&-536870913;if(wt!==ht.lane?(Xe&wt)===wt:(ja&wt)===wt){var pt=ht.revertLane;if(pt===0)W!==null&&(W=W.next={lane:0,revertLane:0,gesture:null,action:ht.action,hasEagerState:ht.hasEagerState,eagerState:ht.eagerState,next:null}),wt===eo&&(Et=!0);else if((ja&pt)===pt){ht=ht.next,pt===eo&&(Et=!0);continue}else wt={lane:0,revertLane:ht.revertLane,gesture:null,action:ht.action,hasEagerState:ht.hasEagerState,eagerState:ht.eagerState,next:null},W===null?(D=W=wt,M=f):W=W.next=wt,Oe.lanes|=pt,Ur|=pt;wt=ht.action,Ms&&a(f,wt),f=ht.hasEagerState?ht.eagerState:a(f,wt)}else pt={lane:wt,revertLane:ht.revertLane,gesture:ht.gesture,action:ht.action,hasEagerState:ht.hasEagerState,eagerState:ht.eagerState,next:null},W===null?(D=W=pt,M=f):W=W.next=pt,Oe.lanes|=wt,Ur|=wt;ht=ht.next}while(ht!==null&&ht!==n);if(W===null?M=f:W.next=D,!Pt(f,e.memoizedState)&&(Vn=!0,Et&&(a=no,a!==null)))throw a;e.memoizedState=f,e.baseState=M,e.baseQueue=W,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function mh(e){var n=Fn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do f=e(f,M.action),M=M.next;while(M!==u);Pt(f,n.memoizedState)||(Vn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function e0(e,n,a){var o=Oe,u=Fn(),f=Ze;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var M=!Pt((dn||u).memoizedState,a);if(M&&(u.memoizedState=a,Vn=!0),u=u.queue,vh(a0.bind(null,o,u,e),[e]),u.getSnapshot!==n||M||Gn!==null&&Gn.memoizedState.tag&1){if(o.flags|=2048,lo(9,{destroy:void 0},i0.bind(null,o,u,a,n),null),_n===null)throw Error(r(349));f||(ja&127)!==0||n0(o,n,a)}return a}function n0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Oe.updateQueue,n===null?(n=Pc(),Oe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function i0(e,n,a,o){n.value=a,n.getSnapshot=o,r0(n)&&s0(e)}function a0(e,n,a){return a(function(){r0(n)&&s0(e)})}function r0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Pt(e,a)}catch{return!0}}function s0(e){var n=ds(e,2);n!==null&&Di(n,e,2)}function gh(e){var n=gi();if(typeof e=="function"){var a=e;if(e=a(),Ms){te(!0);try{a()}finally{te(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ya,lastRenderedState:e},n}function o0(e,n,a,o){return e.baseState=a,ph(e,dn,typeof o=="function"?o:Ya)}function ny(e,n,a,o,u){if(Hc(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){f.listeners.push(M)}};H.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,l0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function l0(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=H.T,M={};H.T=M;try{var D=a(u,o),W=H.S;W!==null&&W(M,D),c0(e,n,D)}catch(ht){_h(e,n,ht)}finally{f!==null&&M.types!==null&&(f.types=M.types),H.T=f}}else try{f=a(u,o),c0(e,n,f)}catch(ht){_h(e,n,ht)}}function c0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){u0(e,n,o)},function(o){return _h(e,n,o)}):u0(e,n,a)}function u0(e,n,a){n.status="fulfilled",n.value=a,f0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,l0(e,a)))}function _h(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,f0(n),n=n.next;while(n!==o)}e.action=null}function f0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function h0(e,n){return n}function d0(e,n){if(Ze){var a=_n.formState;if(a!==null){t:{var o=Oe;if(Ze){if(yn){e:{for(var u=yn,f=aa;u.nodeType!==8;){if(!f){u=null;break e}if(u=sa(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){yn=sa(u.nextSibling),o=u.data==="F!";break t}}Mr(o)}o=!1}o&&(n=a[0])}}return a=gi(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:h0,lastRenderedState:n},a.queue=o,a=L0.bind(null,Oe,o),o.dispatch=a,o=gh(!1),f=bh.bind(null,Oe,!1,o.queue),o=gi(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=ny.bind(null,Oe,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function p0(e){var n=Fn();return m0(n,dn,e)}function m0(e,n,a){if(n=ph(e,n,h0)[0],e=Ic(Ya)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=ml(n)}catch(M){throw M===io?Rc:M}else o=n;n=Fn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(Oe.flags|=2048,lo(9,{destroy:void 0},iy.bind(null,u,a),null)),[o,f,e]}function iy(e,n){e.action=n}function g0(e){var n=Fn(),a=dn;if(a!==null)return m0(n,a,e);Fn(),n=n.memoizedState,a=Fn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function lo(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=Oe.updateQueue,n===null&&(n=Pc(),Oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function _0(){return Fn().memoizedState}function Bc(e,n,a,o){var u=gi();Oe.flags|=e,u.memoizedState=lo(1|n,{destroy:void 0},a,o===void 0?null:o)}function zc(e,n,a,o){var u=Fn();o=o===void 0?null:o;var f=u.memoizedState.inst;dn!==null&&o!==null&&lh(o,dn.memoizedState.deps)?u.memoizedState=lo(n,f,a,o):(Oe.flags|=e,u.memoizedState=lo(1|n,f,a,o))}function v0(e,n){Bc(8390656,8,e,n)}function vh(e,n){zc(2048,8,e,n)}function ay(e){Oe.flags|=4;var n=Oe.updateQueue;if(n===null)n=Pc(),Oe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function x0(e){var n=Fn().memoizedState;return ay({ref:n,nextImpl:e}),function(){if((on&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function y0(e,n){return zc(4,2,e,n)}function S0(e,n){return zc(4,4,e,n)}function M0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function b0(e,n,a){a=a!=null?a.concat([e]):null,zc(4,4,M0.bind(null,n,e),a)}function xh(){}function E0(e,n){var a=Fn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&lh(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function T0(e,n){var a=Fn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&lh(n,o[1]))return o[0];if(o=e(),Ms){te(!0);try{e()}finally{te(!1)}}return a.memoizedState=[o,n],o}function yh(e,n,a){return a===void 0||(ja&1073741824)!==0&&(Xe&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Ag(),Oe.lanes|=e,Ur|=e,a)}function A0(e,n,a,o){return Pt(a,n)?a:ro.current!==null?(e=yh(e,a,o),Pt(e,n)||(Vn=!0),e):(ja&42)===0||(ja&1073741824)!==0&&(Xe&261930)===0?(Vn=!0,e.memoizedState=a):(e=Ag(),Oe.lanes|=e,Ur|=e,n)}function R0(e,n,a,o,u){var f=Y.p;Y.p=f!==0&&8>f?f:8;var M=H.T,D={};H.T=D,bh(e,!1,n,a);try{var W=u(),ht=H.S;if(ht!==null&&ht(D,W),W!==null&&typeof W=="object"&&typeof W.then=="function"){var Et=Jx(W,o);gl(e,n,Et,ki(e))}else gl(e,n,o,ki(e))}catch(wt){gl(e,n,{then:function(){},status:"rejected",reason:wt},ki())}finally{Y.p=f,M!==null&&D.types!==null&&(M.types=D.types),H.T=M}}function ry(){}function Sh(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=C0(e).queue;R0(e,u,n,st,a===null?ry:function(){return w0(e),a(o)})}function C0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:st,baseState:st,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ya,lastRenderedState:st},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ya,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function w0(e){var n=C0(e);n.next===null&&(n=e.alternate.memoizedState),gl(e,n.next.queue,{},ki())}function Mh(){return ii(Nl)}function D0(){return Fn().memoizedState}function U0(){return Fn().memoizedState}function sy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ki();e=Tr(a);var o=Ar(n,e,a);o!==null&&(Di(o,n,a),fl(o,n,a)),n={cache:Qf()},e.payload=n;return}n=n.return}}function oy(e,n,a){var o=ki();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Hc(e)?N0(n,a):(a=Hf(e,n,a,o),a!==null&&(Di(a,e,o),O0(a,n,o)))}function L0(e,n,a){var o=ki();gl(e,n,a,o)}function gl(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Hc(e))N0(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var M=n.lastRenderedState,D=f(M,a);if(u.hasEagerState=!0,u.eagerState=D,Pt(D,M))return yc(e,n,u,0),_n===null&&xc(),!1}catch{}if(a=Hf(e,n,u,o),a!==null)return Di(a,e,o),O0(a,n,o),!0}return!1}function bh(e,n,a,o){if(o={lane:2,revertLane:ed(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Hc(e)){if(n)throw Error(r(479))}else n=Hf(e,a,o,2),n!==null&&Di(n,e,2)}function Hc(e){var n=e.alternate;return e===Oe||n!==null&&n===Oe}function N0(e,n){so=Nc=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function O0(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Jr(e,a)}}var _l={readContext:ii,use:Fc,useCallback:Dn,useContext:Dn,useEffect:Dn,useImperativeHandle:Dn,useLayoutEffect:Dn,useInsertionEffect:Dn,useMemo:Dn,useReducer:Dn,useRef:Dn,useState:Dn,useDebugValue:Dn,useDeferredValue:Dn,useTransition:Dn,useSyncExternalStore:Dn,useId:Dn,useHostTransitionStatus:Dn,useFormState:Dn,useActionState:Dn,useOptimistic:Dn,useMemoCache:Dn,useCacheRefresh:Dn};_l.useEffectEvent=Dn;var P0={readContext:ii,use:Fc,useCallback:function(e,n){return gi().memoizedState=[e,n===void 0?null:n],e},useContext:ii,useEffect:v0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Bc(4194308,4,M0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Bc(4194308,4,e,n)},useInsertionEffect:function(e,n){Bc(4,2,e,n)},useMemo:function(e,n){var a=gi();n=n===void 0?null:n;var o=e();if(Ms){te(!0);try{e()}finally{te(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=gi();if(a!==void 0){var u=a(n);if(Ms){te(!0);try{a(n)}finally{te(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=oy.bind(null,Oe,e),[o.memoizedState,e]},useRef:function(e){var n=gi();return e={current:e},n.memoizedState=e},useState:function(e){e=gh(e);var n=e.queue,a=L0.bind(null,Oe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:xh,useDeferredValue:function(e,n){var a=gi();return yh(a,e,n)},useTransition:function(){var e=gh(!1);return e=R0.bind(null,Oe,e.queue,!0,!1),gi().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=Oe,u=gi();if(Ze){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),_n===null)throw Error(r(349));(Xe&127)!==0||n0(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,v0(a0.bind(null,o,f,e),[e]),o.flags|=2048,lo(9,{destroy:void 0},i0.bind(null,o,f,a,n),null),a},useId:function(){var e=gi(),n=_n.identifierPrefix;if(Ze){var a=Ta,o=Ea;a=(o&~(1<<32-Yt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Oc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=ty++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Mh,useFormState:d0,useActionState:d0,useOptimistic:function(e){var n=gi();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=bh.bind(null,Oe,!0,a),a.dispatch=n,[e,n]},useMemoCache:dh,useCacheRefresh:function(){return gi().memoizedState=sy.bind(null,Oe)},useEffectEvent:function(e){var n=gi(),a={impl:e};return n.memoizedState=a,function(){if((on&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Eh={readContext:ii,use:Fc,useCallback:E0,useContext:ii,useEffect:vh,useImperativeHandle:b0,useInsertionEffect:y0,useLayoutEffect:S0,useMemo:T0,useReducer:Ic,useRef:_0,useState:function(){return Ic(Ya)},useDebugValue:xh,useDeferredValue:function(e,n){var a=Fn();return A0(a,dn.memoizedState,e,n)},useTransition:function(){var e=Ic(Ya)[0],n=Fn().memoizedState;return[typeof e=="boolean"?e:ml(e),n]},useSyncExternalStore:e0,useId:D0,useHostTransitionStatus:Mh,useFormState:p0,useActionState:p0,useOptimistic:function(e,n){var a=Fn();return o0(a,dn,e,n)},useMemoCache:dh,useCacheRefresh:U0};Eh.useEffectEvent=x0;var F0={readContext:ii,use:Fc,useCallback:E0,useContext:ii,useEffect:vh,useImperativeHandle:b0,useInsertionEffect:y0,useLayoutEffect:S0,useMemo:T0,useReducer:mh,useRef:_0,useState:function(){return mh(Ya)},useDebugValue:xh,useDeferredValue:function(e,n){var a=Fn();return dn===null?yh(a,e,n):A0(a,dn.memoizedState,e,n)},useTransition:function(){var e=mh(Ya)[0],n=Fn().memoizedState;return[typeof e=="boolean"?e:ml(e),n]},useSyncExternalStore:e0,useId:D0,useHostTransitionStatus:Mh,useFormState:g0,useActionState:g0,useOptimistic:function(e,n){var a=Fn();return dn!==null?o0(a,dn,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:dh,useCacheRefresh:U0};F0.useEffectEvent=x0;function Th(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ah={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ki(),u=Tr(o);u.payload=n,a!=null&&(u.callback=a),n=Ar(e,u,o),n!==null&&(Di(n,e,o),fl(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ki(),u=Tr(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ar(e,u,o),n!==null&&(Di(n,e,o),fl(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ki(),o=Tr(a);o.tag=2,n!=null&&(o.callback=n),n=Ar(e,o,a),n!==null&&(Di(n,e,a),fl(n,e,a))}};function I0(e,n,a,o,u,f,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,M):n.prototype&&n.prototype.isPureReactComponent?!Wt(a,o)||!Wt(u,f):!0}function B0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Ah.enqueueReplaceState(n,n.state,null)}function bs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function z0(e){vc(e)}function H0(e){console.error(e)}function G0(e){vc(e)}function Gc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function V0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Rh(e,n,a){return a=Tr(a),a.tag=3,a.payload={element:null},a.callback=function(){Gc(e,n)},a}function k0(e){return e=Tr(e),e.tag=3,e}function X0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){V0(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){V0(n,a,o),typeof u!="function"&&(Lr===null?Lr=new Set([this]):Lr.add(this));var D=o.stack;this.componentDidCatch(o.value,{componentStack:D!==null?D:""})})}function ly(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&to(n,a,u,!0),a=zi.current,a!==null){switch(a.tag){case 31:case 13:return ra===null?Jc():a.alternate===null&&Un===0&&(Un=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Cc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),$h(e,o,u)),!1;case 22:return a.flags|=65536,o===Cc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),$h(e,o,u)),!1}throw Error(r(435,a.tag))}return $h(e,o,u),Jc(),!1}if(Ze)return n=zi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==jf&&(e=Error(r(422),{cause:o}),sl(ea(e,a)))):(o!==jf&&(n=Error(r(423),{cause:o}),sl(ea(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ea(o,a),u=Rh(e.stateNode,o,u),ih(e,u),Un!==4&&(Un=2)),!1;var f=Error(r(520),{cause:o});if(f=ea(f,a),Tl===null?Tl=[f]:Tl.push(f),Un!==4&&(Un=2),n===null)return!0;o=ea(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Rh(a.stateNode,o,e),ih(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Lr===null||!Lr.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=k0(u),X0(u,e,a,o),ih(a,u),!1}a=a.return}while(a!==null);return!1}var Ch=Error(r(461)),Vn=!1;function ai(e,n,a,o){n.child=e===null?qm(n,null,a,o):Ss(n,e.child,a,o)}function W0(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var M={};for(var D in o)D!=="ref"&&(M[D]=o[D])}else M=o;return _s(n),o=ch(e,n,a,M,f,u),D=uh(),e!==null&&!Vn?(fh(e,n,u),qa(e,n,u)):(Ze&&D&&Xf(n),n.flags|=1,ai(e,n,o,u),n.child)}function j0(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Gf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Y0(e,n,f,o,u)):(e=Mc(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Fh(e,u)){var M=f.memoizedProps;if(a=a.compare,a=a!==null?a:Wt,a(M,o)&&e.ref===n.ref)return qa(e,n,u)}return n.flags|=1,e=Va(f,o),e.ref=n.ref,e.return=n,n.child=e}function Y0(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(Wt(f,o)&&e.ref===n.ref)if(Vn=!1,n.pendingProps=o=f,Fh(e,u))(e.flags&131072)!==0&&(Vn=!0);else return n.lanes=e.lanes,qa(e,n,u)}return wh(e,n,a,o,u)}function q0(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return Z0(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ac(n,f!==null?f.cachePool:null),f!==null?Qm(n,f):rh(),$m(n);else return o=n.lanes=536870912,Z0(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Ac(n,f.cachePool),Qm(n,f),Cr(),n.memoizedState=null):(e!==null&&Ac(n,null),rh(),Cr());return ai(e,n,u,a),n.child}function vl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Z0(e,n,a,o,u){var f=Jf();return f=f===null?null:{parent:Hn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Ac(n,null),rh(),$m(n),e!==null&&to(e,n,o,!0),n.childLanes=u,null}function Vc(e,n){return n=Xc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function K0(e,n,a){return Ss(n,e.child,null,a),e=Vc(n,n.pendingProps),e.flags|=2,Hi(n),n.memoizedState=null,e}function cy(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ze){if(o.mode==="hidden")return e=Vc(n,o),n.lanes=536870912,vl(null,e);if(oh(n),(e=yn)?(e=l_(e,aa),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:yr!==null?{id:Ea,overflow:Ta}:null,retryLane:536870912,hydrationErrors:null},a=Nm(e),a.return=n,n.child=a,ni=n,yn=null)):e=null,e===null)throw Mr(n);return n.lanes=536870912,null}return Vc(n,o)}var f=e.memoizedState;if(f!==null){var M=f.dehydrated;if(oh(n),u)if(n.flags&256)n.flags&=-257,n=K0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(Vn||to(e,n,a,!1),u=(a&e.childLanes)!==0,Vn||u){if(o=_n,o!==null&&(M=Ia(o,a),M!==0&&M!==f.retryLane))throw f.retryLane=M,ds(e,M),Di(o,e,M),Ch;Jc(),n=K0(e,n,a)}else e=f.treeContext,yn=sa(M.nextSibling),ni=n,Ze=!0,Sr=null,aa=!1,e!==null&&Fm(n,e),n=Vc(n,o),n.flags|=4096;return n}return e=Va(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function kc(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function wh(e,n,a,o,u){return _s(n),a=ch(e,n,a,o,void 0,u),o=uh(),e!==null&&!Vn?(fh(e,n,u),qa(e,n,u)):(Ze&&o&&Xf(n),n.flags|=1,ai(e,n,a,u),n.child)}function Q0(e,n,a,o,u,f){return _s(n),n.updateQueue=null,a=t0(n,o,a,u),Jm(e),o=uh(),e!==null&&!Vn?(fh(e,n,f),qa(e,n,f)):(Ze&&o&&Xf(n),n.flags|=1,ai(e,n,a,f),n.child)}function $0(e,n,a,o,u){if(_s(n),n.stateNode===null){var f=Ks,M=a.contextType;typeof M=="object"&&M!==null&&(f=ii(M)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ah,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},eh(n),M=a.contextType,f.context=typeof M=="object"&&M!==null?ii(M):Ks,f.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(Th(n,a,M,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(M=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),M!==f.state&&Ah.enqueueReplaceState(f,f.state,null),dl(n,o,f,u),hl(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var D=n.memoizedProps,W=bs(a,D);f.props=W;var ht=f.context,Et=a.contextType;M=Ks,typeof Et=="object"&&Et!==null&&(M=ii(Et));var wt=a.getDerivedStateFromProps;Et=typeof wt=="function"||typeof f.getSnapshotBeforeUpdate=="function",D=n.pendingProps!==D,Et||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(D||ht!==M)&&B0(n,f,o,M),Er=!1;var pt=n.memoizedState;f.state=pt,dl(n,o,f,u),hl(),ht=n.memoizedState,D||pt!==ht||Er?(typeof wt=="function"&&(Th(n,a,wt,o),ht=n.memoizedState),(W=Er||I0(n,a,W,o,pt,ht,M))?(Et||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ht),f.props=o,f.state=ht,f.context=M,o=W):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,nh(e,n),M=n.memoizedProps,Et=bs(a,M),f.props=Et,wt=n.pendingProps,pt=f.context,ht=a.contextType,W=Ks,typeof ht=="object"&&ht!==null&&(W=ii(ht)),D=a.getDerivedStateFromProps,(ht=typeof D=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(M!==wt||pt!==W)&&B0(n,f,o,W),Er=!1,pt=n.memoizedState,f.state=pt,dl(n,o,f,u),hl();var gt=n.memoizedState;M!==wt||pt!==gt||Er||e!==null&&e.dependencies!==null&&Ec(e.dependencies)?(typeof D=="function"&&(Th(n,a,D,o),gt=n.memoizedState),(Et=Er||I0(n,a,Et,o,pt,gt,W)||e!==null&&e.dependencies!==null&&Ec(e.dependencies))?(ht||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,gt,W),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,gt,W)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||M===e.memoizedProps&&pt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&pt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=gt),f.props=o,f.state=gt,f.context=W,o=Et):(typeof f.componentDidUpdate!="function"||M===e.memoizedProps&&pt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&pt===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,kc(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Ss(n,e.child,null,u),n.child=Ss(n,null,a,u)):ai(e,n,a,u),n.memoizedState=f.state,e=n.child):e=qa(e,n,u),e}function J0(e,n,a,o){return ms(),n.flags|=256,ai(e,n,a,o),n.child}var Dh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uh(e){return{baseLanes:e,cachePool:Vm()}}function Lh(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Vi),e}function tg(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,M;if((M=f)||(M=e!==null&&e.memoizedState===null?!1:(Pn.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ze){if(u?Rr(n):Cr(),(e=yn)?(e=l_(e,aa),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:yr!==null?{id:Ea,overflow:Ta}:null,retryLane:536870912,hydrationErrors:null},a=Nm(e),a.return=n,n.child=a,ni=n,yn=null)):e=null,e===null)throw Mr(n);return pd(e)?n.lanes=32:n.lanes=536870912,null}var D=o.children;return o=o.fallback,u?(Cr(),u=n.mode,D=Xc({mode:"hidden",children:D},u),o=ps(o,u,a,null),D.return=n,o.return=n,D.sibling=o,n.child=D,o=n.child,o.memoizedState=Uh(a),o.childLanes=Lh(e,M,a),n.memoizedState=Dh,vl(null,o)):(Rr(n),Nh(n,D))}var W=e.memoizedState;if(W!==null&&(D=W.dehydrated,D!==null)){if(f)n.flags&256?(Rr(n),n.flags&=-257,n=Oh(e,n,a)):n.memoizedState!==null?(Cr(),n.child=e.child,n.flags|=128,n=null):(Cr(),D=o.fallback,u=n.mode,o=Xc({mode:"visible",children:o.children},u),D=ps(D,u,a,null),D.flags|=2,o.return=n,D.return=n,o.sibling=D,n.child=o,Ss(n,e.child,null,a),o=n.child,o.memoizedState=Uh(a),o.childLanes=Lh(e,M,a),n.memoizedState=Dh,n=vl(null,o));else if(Rr(n),pd(D)){if(M=D.nextSibling&&D.nextSibling.dataset,M)var ht=M.dgst;M=ht,o=Error(r(419)),o.stack="",o.digest=M,sl({value:o,source:null,stack:null}),n=Oh(e,n,a)}else if(Vn||to(e,n,a,!1),M=(a&e.childLanes)!==0,Vn||M){if(M=_n,M!==null&&(o=Ia(M,a),o!==0&&o!==W.retryLane))throw W.retryLane=o,ds(e,o),Di(M,e,o),Ch;dd(D)||Jc(),n=Oh(e,n,a)}else dd(D)?(n.flags|=192,n.child=e.child,n=null):(e=W.treeContext,yn=sa(D.nextSibling),ni=n,Ze=!0,Sr=null,aa=!1,e!==null&&Fm(n,e),n=Nh(n,o.children),n.flags|=4096);return n}return u?(Cr(),D=o.fallback,u=n.mode,W=e.child,ht=W.sibling,o=Va(W,{mode:"hidden",children:o.children}),o.subtreeFlags=W.subtreeFlags&65011712,ht!==null?D=Va(ht,D):(D=ps(D,u,a,null),D.flags|=2),D.return=n,o.return=n,o.sibling=D,n.child=o,vl(null,o),o=n.child,D=e.child.memoizedState,D===null?D=Uh(a):(u=D.cachePool,u!==null?(W=Hn._currentValue,u=u.parent!==W?{parent:W,pool:W}:u):u=Vm(),D={baseLanes:D.baseLanes|a,cachePool:u}),o.memoizedState=D,o.childLanes=Lh(e,M,a),n.memoizedState=Dh,vl(e.child,o)):(Rr(n),a=e.child,e=a.sibling,a=Va(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function Nh(e,n){return n=Xc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Xc(e,n){return e=Bi(22,e,null,n),e.lanes=0,e}function Oh(e,n,a){return Ss(n,e.child,null,a),e=Nh(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function eg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Zf(e.return,n,a)}function Ph(e,n,a,o,u,f){var M=e.memoizedState;M===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(M.isBackwards=n,M.rendering=null,M.renderingStartTime=0,M.last=o,M.tail=a,M.tailMode=u,M.treeForkCount=f)}function ng(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var M=Pn.current,D=(M&2)!==0;if(D?(M=M&1|2,n.flags|=128):M&=1,At(Pn,M),ai(e,n,o,a),o=Ze?rl:0,!D&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&eg(e,a,n);else if(e.tag===19)eg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Lc(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Ph(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Lc(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Ph(n,!0,a,null,f,o);break;case"together":Ph(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function qa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ur|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(to(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Va(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Va(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Fh(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ec(e)))}function uy(e,n,a){switch(n.tag){case 3:Xt(n,n.stateNode.containerInfo),br(n,Hn,e.memoizedState.cache),ms();break;case 27:case 5:re(n);break;case 4:Xt(n,n.stateNode.containerInfo);break;case 10:br(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,oh(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Rr(n),n.flags|=128,null):(a&n.child.childLanes)!==0?tg(e,n,a):(Rr(n),e=qa(e,n,a),e!==null?e.sibling:null);Rr(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(to(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return ng(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),At(Pn,Pn.current),o)break;return null;case 22:return n.lanes=0,q0(e,n,a,n.pendingProps);case 24:br(n,Hn,e.memoizedState.cache)}return qa(e,n,a)}function ig(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Vn=!0;else{if(!Fh(e,a)&&(n.flags&128)===0)return Vn=!1,uy(e,n,a);Vn=(e.flags&131072)!==0}else Vn=!1,Ze&&(n.flags&1048576)!==0&&Pm(n,rl,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=xs(n.elementType),n.type=e,typeof e=="function")Gf(e)?(o=bs(e,o),n.tag=1,n=$0(null,n,e,o,a)):(n.tag=0,n=wh(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===O){n.tag=11,n=W0(null,n,e,o,a);break t}else if(u===I){n.tag=14,n=j0(null,n,e,o,a);break t}}throw n=tt(e)||e,Error(r(306,n,""))}}return n;case 0:return wh(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=bs(o,n.pendingProps),$0(e,n,o,u,a);case 3:t:{if(Xt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,nh(e,n),dl(n,o,null,a);var M=n.memoizedState;if(o=M.cache,br(n,Hn,o),o!==f.cache&&Kf(n,[Hn],a,!0),hl(),o=M.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=J0(e,n,o,a);break t}else if(o!==u){u=ea(Error(r(424)),n),sl(u),n=J0(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,yn=sa(e.firstChild),ni=n,Ze=!0,Sr=null,aa=!0,a=qm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ms(),o===u){n=qa(e,n,a);break t}ai(e,n,o,a)}n=n.child}return n;case 26:return kc(e,n),e===null?(a=p_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ze||(a=n.type,e=n.pendingProps,o=su(lt.current).createElement(a),o[Mn]=n,o[An]=e,ri(o,a,e),w(o),n.stateNode=o):n.memoizedState=p_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return re(n),e===null&&Ze&&(o=n.stateNode=f_(n.type,n.pendingProps,lt.current),ni=n,aa=!0,u=yn,Fr(n.type)?(md=u,yn=sa(o.firstChild)):yn=u),ai(e,n,n.pendingProps.children,a),kc(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ze&&((u=o=yn)&&(o=Hy(o,n.type,n.pendingProps,aa),o!==null?(n.stateNode=o,ni=n,yn=sa(o.firstChild),aa=!1,u=!0):u=!1),u||Mr(n)),re(n),u=n.type,f=n.pendingProps,M=e!==null?e.memoizedProps:null,o=f.children,ud(u,f)?o=null:M!==null&&ud(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=ch(e,n,ey,null,null,a),Nl._currentValue=u),kc(e,n),ai(e,n,o,a),n.child;case 6:return e===null&&Ze&&((e=a=yn)&&(a=Gy(a,n.pendingProps,aa),a!==null?(n.stateNode=a,ni=n,yn=null,e=!0):e=!1),e||Mr(n)),null;case 13:return tg(e,n,a);case 4:return Xt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ss(n,null,o,a):ai(e,n,o,a),n.child;case 11:return W0(e,n,n.type,n.pendingProps,a);case 7:return ai(e,n,n.pendingProps,a),n.child;case 8:return ai(e,n,n.pendingProps.children,a),n.child;case 12:return ai(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,br(n,n.type,o.value),ai(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,_s(n),u=ii(u),o=o(u),n.flags|=1,ai(e,n,o,a),n.child;case 14:return j0(e,n,n.type,n.pendingProps,a);case 15:return Y0(e,n,n.type,n.pendingProps,a);case 19:return ng(e,n,a);case 31:return cy(e,n,a);case 22:return q0(e,n,a,n.pendingProps);case 24:return _s(n),o=ii(Hn),e===null?(u=Jf(),u===null&&(u=_n,f=Qf(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},eh(n),br(n,Hn,u)):((e.lanes&a)!==0&&(nh(e,n),dl(n,null,null,a),hl()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),br(n,Hn,o)):(o=f.cache,br(n,Hn,o),o!==u.cache&&Kf(n,[Hn],a,!0))),ai(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Za(e){e.flags|=4}function Ih(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Dg())e.flags|=8192;else throw ys=Cc,th}else e.flags&=-16777217}function ag(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!x_(n))if(Dg())e.flags|=8192;else throw ys=Cc,th}function Wc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?an():536870912,e.lanes|=n,ho|=n)}function xl(e,n){if(!Ze)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Sn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function fy(e,n,a){var o=n.pendingProps;switch(Wf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Sn(n),null;case 1:return Sn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Wa(Hn),ie(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Js(n)?Za(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Yf())),Sn(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(Za(n),f!==null?(Sn(n),ag(n,f)):(Sn(n),Ih(n,u,null,o,a))):f?f!==e.memoizedState?(Za(n),Sn(n),ag(n,f)):(Sn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Za(n),Sn(n),Ih(n,u,e,o,a)),null;case 27:if(Ne(n),a=lt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Za(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Sn(n),null}e=Gt.current,Js(n)?Im(n):(e=f_(u,o,a),n.stateNode=e,Za(n))}return Sn(n),null;case 5:if(Ne(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Za(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Sn(n),null}if(f=Gt.current,Js(n))Im(n);else{var M=su(lt.current);switch(f){case 1:f=M.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=M.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=M.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=M.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=M.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?M.createElement("select",{is:o.is}):M.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?M.createElement(u,{is:o.is}):M.createElement(u)}}f[Mn]=n,f[An]=o;t:for(M=n.child;M!==null;){if(M.tag===5||M.tag===6)f.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===n)break t;for(;M.sibling===null;){if(M.return===null||M.return===n)break t;M=M.return}M.sibling.return=M.return,M=M.sibling}n.stateNode=f;t:switch(ri(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Za(n)}}return Sn(n),Ih(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Za(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=lt.current,Js(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=ni,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[Mn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||t_(e.nodeValue,a)),e||Mr(n,!0)}else e=su(e).createTextNode(o),e[Mn]=n,n.stateNode=e}return Sn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Js(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[Mn]=n}else ms(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Sn(n),e=!1}else a=Yf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Hi(n),n):(Hi(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Sn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Js(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[Mn]=n}else ms(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Sn(n),u=!1}else u=Yf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Hi(n),n):(Hi(n),null)}return Hi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Wc(n,n.updateQueue),Sn(n),null);case 4:return ie(),e===null&&rd(n.stateNode.containerInfo),Sn(n),null;case 10:return Wa(n.type),Sn(n),null;case 19:if(ct(Pn),o=n.memoizedState,o===null)return Sn(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)xl(o,!1);else{if(Un!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Lc(e),f!==null){for(n.flags|=128,xl(o,!1),e=f.updateQueue,n.updateQueue=e,Wc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Lm(a,e),a=a.sibling;return At(Pn,Pn.current&1|2),Ze&&ka(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&A()>Kc&&(n.flags|=128,u=!0,xl(o,!1),n.lanes=4194304)}else{if(!u)if(e=Lc(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Wc(n,e),xl(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Ze)return Sn(n),null}else 2*A()-o.renderingStartTime>Kc&&a!==536870912&&(n.flags|=128,u=!0,xl(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=A(),e.sibling=null,a=Pn.current,At(Pn,u?a&1|2:a&1),Ze&&ka(n,o.treeForkCount),e):(Sn(n),null);case 22:case 23:return Hi(n),sh(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Sn(n),n.subtreeFlags&6&&(n.flags|=8192)):Sn(n),a=n.updateQueue,a!==null&&Wc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&ct(vs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Wa(Hn),Sn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function hy(e,n){switch(Wf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Wa(Hn),ie(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ne(n),null;case 31:if(n.memoizedState!==null){if(Hi(n),n.alternate===null)throw Error(r(340));ms()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Hi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ms()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ct(Pn),null;case 4:return ie(),null;case 10:return Wa(n.type),null;case 22:case 23:return Hi(n),sh(),e!==null&&ct(vs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Wa(Hn),null;case 25:return null;default:return null}}function rg(e,n){switch(Wf(n),n.tag){case 3:Wa(Hn),ie();break;case 26:case 27:case 5:Ne(n);break;case 4:ie();break;case 31:n.memoizedState!==null&&Hi(n);break;case 13:Hi(n);break;case 19:ct(Pn);break;case 10:Wa(n.type);break;case 22:case 23:Hi(n),sh(),e!==null&&ct(vs);break;case 24:Wa(Hn)}}function yl(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,M=a.inst;o=f(),M.destroy=o}a=a.next}while(a!==u)}}catch(D){un(n,n.return,D)}}function wr(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var M=o.inst,D=M.destroy;if(D!==void 0){M.destroy=void 0,u=n;var W=a,ht=D;try{ht()}catch(Et){un(u,W,Et)}}}o=o.next}while(o!==f)}}catch(Et){un(n,n.return,Et)}}function sg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Km(n,a)}catch(o){un(e,e.return,o)}}}function og(e,n,a){a.props=bs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){un(e,n,o)}}function Sl(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){un(e,n,u)}}function Aa(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){un(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){un(e,n,u)}else a.current=null}function lg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){un(e,e.return,u)}}function Bh(e,n,a){try{var o=e.stateNode;Oy(o,e.type,a,n),o[An]=n}catch(u){un(e,e.return,u)}}function cg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Fr(e.type)||e.tag===4}function zh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||cg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Fr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hh(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Fi));else if(o!==4&&(o===27&&Fr(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Hh(e,n,a),e=e.sibling;e!==null;)Hh(e,n,a),e=e.sibling}function jc(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Fr(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(jc(e,n,a),e=e.sibling;e!==null;)jc(e,n,a),e=e.sibling}function ug(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);ri(n,o,a),n[Mn]=e,n[An]=a}catch(f){un(e,e.return,f)}}var Ka=!1,kn=!1,Gh=!1,fg=typeof WeakSet=="function"?WeakSet:Set,$n=null;function dy(e,n){if(e=e.containerInfo,ld=du,e=xn(e),mi(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var M=0,D=-1,W=-1,ht=0,Et=0,wt=e,pt=null;e:for(;;){for(var gt;wt!==a||u!==0&&wt.nodeType!==3||(D=M+u),wt!==f||o!==0&&wt.nodeType!==3||(W=M+o),wt.nodeType===3&&(M+=wt.nodeValue.length),(gt=wt.firstChild)!==null;)pt=wt,wt=gt;for(;;){if(wt===e)break e;if(pt===a&&++ht===u&&(D=M),pt===f&&++Et===o&&(W=M),(gt=wt.nextSibling)!==null)break;wt=pt,pt=wt.parentNode}wt=gt}a=D===-1||W===-1?null:{start:D,end:W}}else a=null}a=a||{start:0,end:0}}else a=null;for(cd={focusedElem:e,selectionRange:a},du=!1,$n=n;$n!==null;)if(n=$n,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,$n=e;else for(;$n!==null;){switch(n=$n,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ce=bs(a.type,u);e=o.getSnapshotBeforeUpdate(ce,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(be){un(a,a.return,be)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)hd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":hd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,$n=e;break}$n=n.return}}function hg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:$a(e,a),o&4&&yl(5,a);break;case 1:if($a(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){un(a,a.return,M)}else{var u=bs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){un(a,a.return,M)}}o&64&&sg(a),o&512&&Sl(a,a.return);break;case 3:if($a(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Km(e,n)}catch(M){un(a,a.return,M)}}break;case 27:n===null&&o&4&&ug(a);case 26:case 5:$a(e,a),n===null&&o&4&&lg(a),o&512&&Sl(a,a.return);break;case 12:$a(e,a);break;case 31:$a(e,a),o&4&&mg(e,a);break;case 13:$a(e,a),o&4&&gg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=My.bind(null,a),Vy(e,a))));break;case 22:if(o=a.memoizedState!==null||Ka,!o){n=n!==null&&n.memoizedState!==null||kn,u=Ka;var f=kn;Ka=o,(kn=n)&&!f?Ja(e,a,(a.subtreeFlags&8772)!==0):$a(e,a),Ka=u,kn=f}break;case 30:break;default:$a(e,a)}}function dg(e){var n=e.alternate;n!==null&&(e.alternate=null,dg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ns(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var En=null,Ai=!1;function Qa(e,n,a){for(a=a.child;a!==null;)pg(e,n,a),a=a.sibling}function pg(e,n,a){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(Ot,a)}catch{}switch(a.tag){case 26:kn||Aa(a,n),Qa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:kn||Aa(a,n);var o=En,u=Ai;Fr(a.type)&&(En=a.stateNode,Ai=!1),Qa(e,n,a),Dl(a.stateNode),En=o,Ai=u;break;case 5:kn||Aa(a,n);case 6:if(o=En,u=Ai,En=null,Qa(e,n,a),En=o,Ai=u,En!==null)if(Ai)try{(En.nodeType===9?En.body:En.nodeName==="HTML"?En.ownerDocument.body:En).removeChild(a.stateNode)}catch(f){un(a,n,f)}else try{En.removeChild(a.stateNode)}catch(f){un(a,n,f)}break;case 18:En!==null&&(Ai?(e=En,s_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),So(e)):s_(En,a.stateNode));break;case 4:o=En,u=Ai,En=a.stateNode.containerInfo,Ai=!0,Qa(e,n,a),En=o,Ai=u;break;case 0:case 11:case 14:case 15:wr(2,a,n),kn||wr(4,a,n),Qa(e,n,a);break;case 1:kn||(Aa(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&og(a,n,o)),Qa(e,n,a);break;case 21:Qa(e,n,a);break;case 22:kn=(o=kn)||a.memoizedState!==null,Qa(e,n,a),kn=o;break;default:Qa(e,n,a)}}function mg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{So(e)}catch(a){un(n,n.return,a)}}}function gg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{So(e)}catch(a){un(n,n.return,a)}}function py(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new fg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new fg),n;default:throw Error(r(435,e.tag))}}function Yc(e,n){var a=py(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=by.bind(null,e,o);o.then(u,u)}})}function Ri(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,M=n,D=M;t:for(;D!==null;){switch(D.tag){case 27:if(Fr(D.type)){En=D.stateNode,Ai=!1;break t}break;case 5:En=D.stateNode,Ai=!1;break t;case 3:case 4:En=D.stateNode.containerInfo,Ai=!0;break t}D=D.return}if(En===null)throw Error(r(160));pg(f,M,u),En=null,Ai=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)_g(n,e),n=n.sibling}var da=null;function _g(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ri(n,e),Ci(e),o&4&&(wr(3,e,e.return),yl(3,e),wr(5,e,e.return));break;case 1:Ri(n,e),Ci(e),o&512&&(kn||a===null||Aa(a,a.return)),o&64&&Ka&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=da;if(Ri(n,e),Ci(e),o&512&&(kn||a===null||Aa(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Qi]||f[Mn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),ri(f,o,a),f[Mn]=e,w(f),o=f;break t;case"link":var M=__("link","href",u).get(o+(a.href||""));if(M){for(var D=0;D<M.length;D++)if(f=M[D],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(D,1);break e}}f=u.createElement(o),ri(f,o,a),u.head.appendChild(f);break;case"meta":if(M=__("meta","content",u).get(o+(a.content||""))){for(D=0;D<M.length;D++)if(f=M[D],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(D,1);break e}}f=u.createElement(o),ri(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[Mn]=e,w(f),o=f}e.stateNode=o}else v_(u,e.type,e.stateNode);else e.stateNode=g_(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?v_(u,e.type,e.stateNode):g_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Bh(e,e.memoizedProps,a.memoizedProps)}break;case 27:Ri(n,e),Ci(e),o&512&&(kn||a===null||Aa(a,a.return)),a!==null&&o&4&&Bh(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Ri(n,e),Ci(e),o&512&&(kn||a===null||Aa(a,a.return)),e.flags&32){u=e.stateNode;try{wn(u,"")}catch(ce){un(e,e.return,ce)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Bh(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Gh=!0);break;case 6:if(Ri(n,e),Ci(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(ce){un(e,e.return,ce)}}break;case 3:if(cu=null,u=da,da=ou(n.containerInfo),Ri(n,e),da=u,Ci(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{So(n.containerInfo)}catch(ce){un(e,e.return,ce)}Gh&&(Gh=!1,vg(e));break;case 4:o=da,da=ou(e.stateNode.containerInfo),Ri(n,e),Ci(e),da=o;break;case 12:Ri(n,e),Ci(e);break;case 31:Ri(n,e),Ci(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Yc(e,o)));break;case 13:Ri(n,e),Ci(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Zc=A()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Yc(e,o)));break;case 22:u=e.memoizedState!==null;var W=a!==null&&a.memoizedState!==null,ht=Ka,Et=kn;if(Ka=ht||u,kn=Et||W,Ri(n,e),kn=Et,Ka=ht,Ci(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||W||Ka||kn||Es(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){W=a=n;try{if(f=W.stateNode,u)M=f.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{D=W.stateNode;var wt=W.memoizedProps.style,pt=wt!=null&&wt.hasOwnProperty("display")?wt.display:null;D.style.display=pt==null||typeof pt=="boolean"?"":(""+pt).trim()}}catch(ce){un(W,W.return,ce)}}}else if(n.tag===6){if(a===null){W=n;try{W.stateNode.nodeValue=u?"":W.memoizedProps}catch(ce){un(W,W.return,ce)}}}else if(n.tag===18){if(a===null){W=n;try{var gt=W.stateNode;u?o_(gt,!0):o_(W.stateNode,!1)}catch(ce){un(W,W.return,ce)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Yc(e,a))));break;case 19:Ri(n,e),Ci(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Yc(e,o)));break;case 30:break;case 21:break;default:Ri(n,e),Ci(e)}}function Ci(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(cg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=zh(e);jc(e,f,u);break;case 5:var M=a.stateNode;a.flags&32&&(wn(M,""),a.flags&=-33);var D=zh(e);jc(e,D,M);break;case 3:case 4:var W=a.stateNode.containerInfo,ht=zh(e);Hh(e,ht,W);break;default:throw Error(r(161))}}catch(Et){un(e,e.return,Et)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function vg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;vg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function $a(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)hg(e,n.alternate,n),n=n.sibling}function Es(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:wr(4,n,n.return),Es(n);break;case 1:Aa(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&og(n,n.return,a),Es(n);break;case 27:Dl(n.stateNode);case 26:case 5:Aa(n,n.return),Es(n);break;case 22:n.memoizedState===null&&Es(n);break;case 30:Es(n);break;default:Es(n)}e=e.sibling}}function Ja(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,M=f.flags;switch(f.tag){case 0:case 11:case 15:Ja(u,f,a),yl(4,f);break;case 1:if(Ja(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ht){un(o,o.return,ht)}if(o=f,u=o.updateQueue,u!==null){var D=o.stateNode;try{var W=u.shared.hiddenCallbacks;if(W!==null)for(u.shared.hiddenCallbacks=null,u=0;u<W.length;u++)Zm(W[u],D)}catch(ht){un(o,o.return,ht)}}a&&M&64&&sg(f),Sl(f,f.return);break;case 27:ug(f);case 26:case 5:Ja(u,f,a),a&&o===null&&M&4&&lg(f),Sl(f,f.return);break;case 12:Ja(u,f,a);break;case 31:Ja(u,f,a),a&&M&4&&mg(u,f);break;case 13:Ja(u,f,a),a&&M&4&&gg(u,f);break;case 22:f.memoizedState===null&&Ja(u,f,a),Sl(f,f.return);break;case 30:break;default:Ja(u,f,a)}n=n.sibling}}function Vh(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ol(a))}function kh(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ol(e))}function pa(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)xg(e,n,a,o),n=n.sibling}function xg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:pa(e,n,a,o),u&2048&&yl(9,n);break;case 1:pa(e,n,a,o);break;case 3:pa(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ol(e)));break;case 12:if(u&2048){pa(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,M=f.id,D=f.onPostCommit;typeof D=="function"&&D(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(W){un(n,n.return,W)}}else pa(e,n,a,o);break;case 31:pa(e,n,a,o);break;case 13:pa(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,M=n.alternate,n.memoizedState!==null?f._visibility&2?pa(e,n,a,o):Ml(e,n):f._visibility&2?pa(e,n,a,o):(f._visibility|=2,co(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Vh(M,n);break;case 24:pa(e,n,a,o),u&2048&&kh(n.alternate,n);break;default:pa(e,n,a,o)}}function co(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,M=n,D=a,W=o,ht=M.flags;switch(M.tag){case 0:case 11:case 15:co(f,M,D,W,u),yl(8,M);break;case 23:break;case 22:var Et=M.stateNode;M.memoizedState!==null?Et._visibility&2?co(f,M,D,W,u):Ml(f,M):(Et._visibility|=2,co(f,M,D,W,u)),u&&ht&2048&&Vh(M.alternate,M);break;case 24:co(f,M,D,W,u),u&&ht&2048&&kh(M.alternate,M);break;default:co(f,M,D,W,u)}n=n.sibling}}function Ml(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Ml(a,o),u&2048&&Vh(o.alternate,o);break;case 24:Ml(a,o),u&2048&&kh(o.alternate,o);break;default:Ml(a,o)}n=n.sibling}}var bl=8192;function uo(e,n,a){if(e.subtreeFlags&bl)for(e=e.child;e!==null;)yg(e,n,a),e=e.sibling}function yg(e,n,a){switch(e.tag){case 26:uo(e,n,a),e.flags&bl&&e.memoizedState!==null&&tS(a,da,e.memoizedState,e.memoizedProps);break;case 5:uo(e,n,a);break;case 3:case 4:var o=da;da=ou(e.stateNode.containerInfo),uo(e,n,a),da=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=bl,bl=16777216,uo(e,n,a),bl=o):uo(e,n,a));break;default:uo(e,n,a)}}function Sg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function El(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];$n=o,bg(o,e)}Sg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Mg(e),e=e.sibling}function Mg(e){switch(e.tag){case 0:case 11:case 15:El(e),e.flags&2048&&wr(9,e,e.return);break;case 3:El(e);break;case 12:El(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,qc(e)):El(e);break;default:El(e)}}function qc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];$n=o,bg(o,e)}Sg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:wr(8,n,n.return),qc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,qc(n));break;default:qc(n)}e=e.sibling}}function bg(e,n){for(;$n!==null;){var a=$n;switch(a.tag){case 0:case 11:case 15:wr(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ol(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,$n=o;else t:for(a=e;$n!==null;){o=$n;var u=o.sibling,f=o.return;if(dg(o),o===a){$n=null;break t}if(u!==null){u.return=f,$n=u;break t}$n=f}}}var my={getCacheForType:function(e){var n=ii(Hn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return ii(Hn).controller.signal}},gy=typeof WeakMap=="function"?WeakMap:Map,on=0,_n=null,Ge=null,Xe=0,cn=0,Gi=null,Dr=!1,fo=!1,Xh=!1,tr=0,Un=0,Ur=0,Ts=0,Wh=0,Vi=0,ho=0,Tl=null,wi=null,jh=!1,Zc=0,Eg=0,Kc=1/0,Qc=null,Lr=null,jn=0,Nr=null,po=null,er=0,Yh=0,qh=null,Tg=null,Al=0,Zh=null;function ki(){return(on&2)!==0&&Xe!==0?Xe&-Xe:H.T!==null?ed():ts()}function Ag(){if(Vi===0)if((Xe&536870912)===0||Ze){var e=Lt;Lt<<=1,(Lt&3932160)===0&&(Lt=262144),Vi=e}else Vi=536870912;return e=zi.current,e!==null&&(e.flags|=32),Vi}function Di(e,n,a){(e===_n&&(cn===2||cn===9)||e.cancelPendingCommit!==null)&&(mo(e,0),Or(e,Xe,Vi,!1)),In(e,a),((on&2)===0||e!==_n)&&(e===_n&&((on&2)===0&&(Ts|=a),Un===4&&Or(e,Xe,Vi,!1)),Ra(e))}function Rg(e,n,a){if((on&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ht(e,n),u=o?xy(e,n):Qh(e,n,!0),f=o;do{if(u===0){fo&&!o&&Or(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!_y(a)){u=Qh(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var D=e;u=Tl;var W=D.current.memoizedState.isDehydrated;if(W&&(mo(D,M).flags|=256),M=Qh(D,M,!1),M!==2){if(Xh&&!W){D.errorRecoveryDisabledLanes|=f,Ts|=f,u=4;break t}f=wi,wi=u,f!==null&&(wi===null?wi=f:wi.push.apply(wi,f))}u=M}if(f=!1,u!==2)continue}}if(u===1){mo(e,0),Or(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Or(o,n,Vi,!Dr);break t;case 2:wi=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Zc+300-A(),10<u)){if(Or(o,n,Vi,!Dr),Ct(o,0,!0)!==0)break t;er=n,o.timeoutHandle=a_(Cg.bind(null,o,a,wi,Qc,jh,n,Vi,Ts,ho,Dr,f,"Throttled",-0,0),u);break t}Cg(o,a,wi,Qc,jh,n,Vi,Ts,ho,Dr,f,null,-0,0)}}break}while(!0);Ra(e)}function Cg(e,n,a,o,u,f,M,D,W,ht,Et,wt,pt,gt){if(e.timeoutHandle=-1,wt=n.subtreeFlags,wt&8192||(wt&16785408)===16785408){wt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Fi},yg(n,f,wt);var ce=(f&62914560)===f?Zc-A():(f&4194048)===f?Eg-A():0;if(ce=eS(wt,ce),ce!==null){er=f,e.cancelPendingCommit=ce(Fg.bind(null,e,n,f,a,o,u,M,D,W,Et,wt,null,pt,gt)),Or(e,f,M,!ht);return}}Fg(e,n,f,a,o,u,M,D,W)}function _y(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Pt(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Or(e,n,a,o){n&=~Wh,n&=~Ts,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Yt(u),M=1<<f;o[f]=-1,u&=~M}a!==0&&$r(e,a,n)}function $c(){return(on&6)===0?(Rl(0),!1):!0}function Kh(){if(Ge!==null){if(cn===0)var e=Ge.return;else e=Ge,Xa=gs=null,hh(e),ao=null,cl=0,e=Ge;for(;e!==null;)rg(e.alternate,e),e=e.return;Ge=null}}function mo(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Iy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),er=0,Kh(),_n=e,Ge=a=Va(e.current,null),Xe=n,cn=0,Gi=null,Dr=!1,fo=Ht(e,n),Xh=!1,ho=Vi=Wh=Ts=Ur=Un=0,wi=Tl=null,jh=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Yt(o),f=1<<u;n|=e[u],o&=~f}return tr=n,xc(),a}function wg(e,n){Oe=null,H.H=_l,n===io||n===Rc?(n=Wm(),cn=3):n===th?(n=Wm(),cn=4):cn=n===Ch?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Gi=n,Ge===null&&(Un=1,Gc(e,ea(n,e.current)))}function Dg(){var e=zi.current;return e===null?!0:(Xe&4194048)===Xe?ra===null:(Xe&62914560)===Xe||(Xe&536870912)!==0?e===ra:!1}function Ug(){var e=H.H;return H.H=_l,e===null?_l:e}function Lg(){var e=H.A;return H.A=my,e}function Jc(){Un=4,Dr||(Xe&4194048)!==Xe&&zi.current!==null||(fo=!0),(Ur&134217727)===0&&(Ts&134217727)===0||_n===null||Or(_n,Xe,Vi,!1)}function Qh(e,n,a){var o=on;on|=2;var u=Ug(),f=Lg();(_n!==e||Xe!==n)&&(Qc=null,mo(e,n)),n=!1;var M=Un;t:do try{if(cn!==0&&Ge!==null){var D=Ge,W=Gi;switch(cn){case 8:Kh(),M=6;break t;case 3:case 2:case 9:case 6:zi.current===null&&(n=!0);var ht=cn;if(cn=0,Gi=null,go(e,D,W,ht),a&&fo){M=0;break t}break;default:ht=cn,cn=0,Gi=null,go(e,D,W,ht)}}vy(),M=Un;break}catch(Et){wg(e,Et)}while(!0);return n&&e.shellSuspendCounter++,Xa=gs=null,on=o,H.H=u,H.A=f,Ge===null&&(_n=null,Xe=0,xc()),M}function vy(){for(;Ge!==null;)Ng(Ge)}function xy(e,n){var a=on;on|=2;var o=Ug(),u=Lg();_n!==e||Xe!==n?(Qc=null,Kc=A()+500,mo(e,n)):fo=Ht(e,n);t:do try{if(cn!==0&&Ge!==null){n=Ge;var f=Gi;e:switch(cn){case 1:cn=0,Gi=null,go(e,n,f,1);break;case 2:case 9:if(km(f)){cn=0,Gi=null,Og(n);break}n=function(){cn!==2&&cn!==9||_n!==e||(cn=7),Ra(e)},f.then(n,n);break t;case 3:cn=7;break t;case 4:cn=5;break t;case 7:km(f)?(cn=0,Gi=null,Og(n)):(cn=0,Gi=null,go(e,n,f,7));break;case 5:var M=null;switch(Ge.tag){case 26:M=Ge.memoizedState;case 5:case 27:var D=Ge;if(M?x_(M):D.stateNode.complete){cn=0,Gi=null;var W=D.sibling;if(W!==null)Ge=W;else{var ht=D.return;ht!==null?(Ge=ht,tu(ht)):Ge=null}break e}}cn=0,Gi=null,go(e,n,f,5);break;case 6:cn=0,Gi=null,go(e,n,f,6);break;case 8:Kh(),Un=6;break t;default:throw Error(r(462))}}yy();break}catch(Et){wg(e,Et)}while(!0);return Xa=gs=null,H.H=o,H.A=u,on=a,Ge!==null?0:(_n=null,Xe=0,xc(),Un)}function yy(){for(;Ge!==null&&!Qt();)Ng(Ge)}function Ng(e){var n=ig(e.alternate,e,tr);e.memoizedProps=e.pendingProps,n===null?tu(e):Ge=n}function Og(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Q0(a,n,n.pendingProps,n.type,void 0,Xe);break;case 11:n=Q0(a,n,n.pendingProps,n.type.render,n.ref,Xe);break;case 5:hh(n);default:rg(a,n),n=Ge=Lm(n,tr),n=ig(a,n,tr)}e.memoizedProps=e.pendingProps,n===null?tu(e):Ge=n}function go(e,n,a,o){Xa=gs=null,hh(n),ao=null,cl=0;var u=n.return;try{if(ly(e,u,n,a,Xe)){Un=1,Gc(e,ea(a,e.current)),Ge=null;return}}catch(f){if(u!==null)throw Ge=u,f;Un=1,Gc(e,ea(a,e.current)),Ge=null;return}n.flags&32768?(Ze||o===1?e=!0:fo||(Xe&536870912)!==0?e=!1:(Dr=e=!0,(o===2||o===9||o===3||o===6)&&(o=zi.current,o!==null&&o.tag===13&&(o.flags|=16384))),Pg(n,e)):tu(n)}function tu(e){var n=e;do{if((n.flags&32768)!==0){Pg(n,Dr);return}e=n.return;var a=fy(n.alternate,n,tr);if(a!==null){Ge=a;return}if(n=n.sibling,n!==null){Ge=n;return}Ge=n=e}while(n!==null);Un===0&&(Un=5)}function Pg(e,n){do{var a=hy(e.alternate,e);if(a!==null){a.flags&=32767,Ge=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ge=e;return}Ge=e=a}while(e!==null);Un=6,Ge=null}function Fg(e,n,a,o,u,f,M,D,W){e.cancelPendingCommit=null;do eu();while(jn!==0);if((on&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=zf,di(e,a,f,M,D,W),e===_n&&(Ge=_n=null,Xe=0),po=n,Nr=e,er=a,Yh=f,qh=u,Tg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ey(_t,function(){return Gg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=H.T,H.T=null,u=Y.p,Y.p=2,M=on,on|=4;try{dy(e,n,a)}finally{on=M,Y.p=u,H.T=o}}jn=1,Ig(),Bg(),zg()}}function Ig(){if(jn===1){jn=0;var e=Nr,n=po,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=H.T,H.T=null;var o=Y.p;Y.p=2;var u=on;on|=4;try{_g(n,e);var f=cd,M=xn(e.containerInfo),D=f.focusedElem,W=f.selectionRange;if(M!==D&&D&&D.ownerDocument&&Rn(D.ownerDocument.documentElement,D)){if(W!==null&&mi(D)){var ht=W.start,Et=W.end;if(Et===void 0&&(Et=ht),"selectionStart"in D)D.selectionStart=ht,D.selectionEnd=Math.min(Et,D.value.length);else{var wt=D.ownerDocument||document,pt=wt&&wt.defaultView||window;if(pt.getSelection){var gt=pt.getSelection(),ce=D.textContent.length,be=Math.min(W.start,ce),mn=W.end===void 0?be:Math.min(W.end,ce);!gt.extend&&be>mn&&(M=mn,mn=be,be=M);var et=Ye(D,be),Z=Ye(D,mn);if(et&&Z&&(gt.rangeCount!==1||gt.anchorNode!==et.node||gt.anchorOffset!==et.offset||gt.focusNode!==Z.node||gt.focusOffset!==Z.offset)){var ft=wt.createRange();ft.setStart(et.node,et.offset),gt.removeAllRanges(),be>mn?(gt.addRange(ft),gt.extend(Z.node,Z.offset)):(ft.setEnd(Z.node,Z.offset),gt.addRange(ft))}}}}for(wt=[],gt=D;gt=gt.parentNode;)gt.nodeType===1&&wt.push({element:gt,left:gt.scrollLeft,top:gt.scrollTop});for(typeof D.focus=="function"&&D.focus(),D=0;D<wt.length;D++){var Rt=wt[D];Rt.element.scrollLeft=Rt.left,Rt.element.scrollTop=Rt.top}}du=!!ld,cd=ld=null}finally{on=u,Y.p=o,H.T=a}}e.current=n,jn=2}}function Bg(){if(jn===2){jn=0;var e=Nr,n=po,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=H.T,H.T=null;var o=Y.p;Y.p=2;var u=on;on|=4;try{hg(e,n.alternate,n)}finally{on=u,Y.p=o,H.T=a}}jn=3}}function zg(){if(jn===4||jn===3){jn=0,B();var e=Nr,n=po,a=er,o=Tg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?jn=5:(jn=0,po=Nr=null,Hg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Lr=null),Ba(a),n=n.stateNode,Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(Ot,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=H.T,u=Y.p,Y.p=2,H.T=null;try{for(var f=e.onRecoverableError,M=0;M<o.length;M++){var D=o[M];f(D.value,{componentStack:D.stack})}}finally{H.T=n,Y.p=u}}(er&3)!==0&&eu(),Ra(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Zh?Al++:(Al=0,Zh=e):Al=0,Rl(0)}}function Hg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ol(n)))}function eu(){return Ig(),Bg(),zg(),Gg()}function Gg(){if(jn!==5)return!1;var e=Nr,n=Yh;Yh=0;var a=Ba(er),o=H.T,u=Y.p;try{Y.p=32>a?32:a,H.T=null,a=qh,qh=null;var f=Nr,M=er;if(jn=0,po=Nr=null,er=0,(on&6)!==0)throw Error(r(331));var D=on;if(on|=4,Mg(f.current),xg(f,f.current,M,a),on=D,Rl(0,!1),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(Ot,f)}catch{}return!0}finally{Y.p=u,H.T=o,Hg(e,n)}}function Vg(e,n,a){n=ea(a,n),n=Rh(e.stateNode,n,2),e=Ar(e,n,2),e!==null&&(In(e,2),Ra(e))}function un(e,n,a){if(e.tag===3)Vg(e,e,a);else for(;n!==null;){if(n.tag===3){Vg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Lr===null||!Lr.has(o))){e=ea(a,e),a=k0(2),o=Ar(n,a,2),o!==null&&(X0(a,o,n,e),In(o,2),Ra(o));break}}n=n.return}}function $h(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new gy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Xh=!0,u.add(a),e=Sy.bind(null,e,n,a),n.then(e,e))}function Sy(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,_n===e&&(Xe&a)===a&&(Un===4||Un===3&&(Xe&62914560)===Xe&&300>A()-Zc?(on&2)===0&&mo(e,0):Wh|=a,ho===Xe&&(ho=0)),Ra(e)}function kg(e,n){n===0&&(n=an()),e=ds(e,n),e!==null&&(In(e,n),Ra(e))}function My(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),kg(e,a)}function by(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),kg(e,a)}function Ey(e,n){return Me(e,n)}var nu=null,_o=null,Jh=!1,iu=!1,td=!1,Pr=0;function Ra(e){e!==_o&&e.next===null&&(_o===null?nu=_o=e:_o=_o.next=e),iu=!0,Jh||(Jh=!0,Ay())}function Rl(e,n){if(!td&&iu){td=!0;do for(var a=!1,o=nu;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var M=o.suspendedLanes,D=o.pingedLanes;f=(1<<31-Yt(42|e)+1)-1,f&=u&~(M&~D),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Yg(o,f))}else f=Xe,f=Ct(o,o===_n?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ht(o,f)||(a=!0,Yg(o,f));o=o.next}while(a);td=!1}}function Ty(){Xg()}function Xg(){iu=Jh=!1;var e=0;Pr!==0&&Fy()&&(e=Pr);for(var n=A(),a=null,o=nu;o!==null;){var u=o.next,f=Wg(o,n);f===0?(o.next=null,a===null?nu=u:a.next=u,u===null&&(_o=a)):(a=o,(e!==0||(f&3)!==0)&&(iu=!0)),o=u}jn!==0&&jn!==5||Rl(e),Pr!==0&&(Pr=0)}function Wg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var M=31-Yt(f),D=1<<M,W=u[M];W===-1?((D&a)===0||(D&o)!==0)&&(u[M]=me(D,n)):W<=n&&(e.expiredLanes|=D),f&=~D}if(n=_n,a=Xe,a=Ct(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(cn===2||cn===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&xe(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ht(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&xe(o),Ba(a)){case 2:case 8:a=Dt;break;case 32:a=_t;break;case 268435456:a=Vt;break;default:a=_t}return o=jg.bind(null,e),a=Me(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&xe(o),e.callbackPriority=2,e.callbackNode=null,2}function jg(e,n){if(jn!==0&&jn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(eu()&&e.callbackNode!==a)return null;var o=Xe;return o=Ct(e,e===_n?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Rg(e,o,n),Wg(e,A()),e.callbackNode!=null&&e.callbackNode===a?jg.bind(null,e):null)}function Yg(e,n){if(eu())return null;Rg(e,n,!0)}function Ay(){By(function(){(on&6)!==0?Me(bt,Ty):Xg()})}function ed(){if(Pr===0){var e=eo;e===0&&(e=qt,qt<<=1,(qt&261888)===0&&(qt=256)),Pr=e}return Pr}function qg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:bi(""+e)}function Zg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Ry(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=qg((u[An]||null).action),M=o.submitter;M&&(n=(n=M[An]||null)?qg(n.formAction):M.getAttribute("formAction"),n!==null&&(f=n,M=null));var D=new rs("action","action",null,o,u);e.push({event:D,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Pr!==0){var W=M?Zg(u,M):new FormData(u);Sh(a,{pending:!0,data:W,method:u.method,action:f},null,W)}}else typeof f=="function"&&(D.preventDefault(),W=M?Zg(u,M):new FormData(u),Sh(a,{pending:!0,data:W,method:u.method,action:f},f,W))},currentTarget:u}]})}}for(var nd=0;nd<Bf.length;nd++){var id=Bf[nd],Cy=id.toLowerCase(),wy=id[0].toUpperCase()+id.slice(1);ha(Cy,"on"+wy)}ha(Ga,"onAnimationEnd"),ha(bn,"onAnimationIteration"),ha(If,"onAnimationStart"),ha("dblclick","onDoubleClick"),ha("focusin","onFocus"),ha("focusout","onBlur"),ha(Wx,"onTransitionRun"),ha(jx,"onTransitionStart"),ha(Yx,"onTransitionCancel"),ha(wm,"onTransitionEnd"),at("onMouseEnter",["mouseout","mouseover"]),at("onMouseLeave",["mouseout","mouseover"]),at("onPointerEnter",["pointerout","pointerover"]),at("onPointerLeave",["pointerout","pointerover"]),dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),dt("onBeforeInput",["compositionend","keypress","textInput","paste"]),dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Cl));function Kg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var M=o.length-1;0<=M;M--){var D=o[M],W=D.instance,ht=D.currentTarget;if(D=D.listener,W!==f&&u.isPropagationStopped())break t;f=D,u.currentTarget=ht;try{f(u)}catch(Et){vc(Et)}u.currentTarget=null,f=W}else for(M=0;M<o.length;M++){if(D=o[M],W=D.instance,ht=D.currentTarget,D=D.listener,W!==f&&u.isPropagationStopped())break t;f=D,u.currentTarget=ht;try{f(u)}catch(Et){vc(Et)}u.currentTarget=null,f=W}}}}function Ve(e,n){var a=n[mr];a===void 0&&(a=n[mr]=new Set);var o=e+"__bubble";a.has(o)||(Qg(n,e,2,!1),a.add(o))}function ad(e,n,a){var o=0;n&&(o|=4),Qg(a,e,o,n)}var au="_reactListening"+Math.random().toString(36).slice(2);function rd(e){if(!e[au]){e[au]=!0,J.forEach(function(a){a!=="selectionchange"&&(Dy.has(a)||ad(a,!1,e),ad(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[au]||(n[au]=!0,ad("selectionchange",!1,n))}}function Qg(e,n,a,o){switch(A_(n)){case 2:var u=aS;break;case 8:u=rS;break;default:u=yd}a=u.bind(null,n,a,e),u=void 0,!is||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function sd(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var D=o.stateNode.containerInfo;if(D===u)break;if(M===4)for(M=o.return;M!==null;){var W=M.tag;if((W===3||W===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;D!==null;){if(M=yi(D),M===null)return;if(W=M.tag,W===5||W===6||W===26||W===27){o=f=M;continue t}D=D.parentNode}}o=o.return}rc(function(){var ht=f,Et=Ko(a),wt=[];t:{var pt=Dm.get(e);if(pt!==void 0){var gt=rs,ce=e;switch(e){case"keypress":if(Vs(a)===0)break t;case"keydown":case"keyup":gt=Tf;break;case"focusin":ce="focus",gt=el;break;case"focusout":ce="blur",gt=el;break;case"beforeblur":case"afterblur":gt=el;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":gt=lc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":gt=gf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":gt=Cf;break;case Ga:case bn:case If:gt=xf;break;case wm:gt=Df;break;case"scroll":case"scrollend":gt=pf;break;case"wheel":gt=Lf;break;case"copy":case"cut":case"paste":gt=Sf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":gt=hc;break;case"toggle":case"beforetoggle":gt=Of}var be=(n&4)!==0,mn=!be&&(e==="scroll"||e==="scrollend"),et=be?pt!==null?pt+"Capture":null:pt;be=[];for(var Z=ht,ft;Z!==null;){var Rt=Z;if(ft=Rt.stateNode,Rt=Rt.tag,Rt!==5&&Rt!==26&&Rt!==27||ft===null||et===null||(Rt=Sa(Z,et),Rt!=null&&be.push(wl(Z,Rt,ft))),mn)break;Z=Z.return}0<be.length&&(pt=new gt(pt,ce,null,a,Et),wt.push({event:pt,listeners:be}))}}if((n&7)===0){t:{if(pt=e==="mouseover"||e==="pointerover",gt=e==="mouseout"||e==="pointerout",pt&&a!==Zo&&(ce=a.relatedTarget||a.fromElement)&&(yi(ce)||ce[Pi]))break t;if((gt||pt)&&(pt=Et.window===Et?Et:(pt=Et.ownerDocument)?pt.defaultView||pt.parentWindow:window,gt?(ce=a.relatedTarget||a.toElement,gt=ht,ce=ce?yi(ce):null,ce!==null&&(mn=c(ce),be=ce.tag,ce!==mn||be!==5&&be!==27&&be!==6)&&(ce=null)):(gt=null,ce=ht),gt!==ce)){if(be=lc,Rt="onMouseLeave",et="onMouseEnter",Z="mouse",(e==="pointerout"||e==="pointerover")&&(be=hc,Rt="onPointerLeave",et="onPointerEnter",Z="pointer"),mn=gt==null?pt:$i(gt),ft=ce==null?pt:$i(ce),pt=new be(Rt,Z+"leave",gt,a,Et),pt.target=mn,pt.relatedTarget=ft,Rt=null,yi(Et)===ht&&(be=new be(et,Z+"enter",ce,a,Et),be.target=ft,be.relatedTarget=mn,Rt=be),mn=Rt,gt&&ce)e:{for(be=Uy,et=gt,Z=ce,ft=0,Rt=et;Rt;Rt=be(Rt))ft++;Rt=0;for(var ve=Z;ve;ve=be(ve))Rt++;for(;0<ft-Rt;)et=be(et),ft--;for(;0<Rt-ft;)Z=be(Z),Rt--;for(;ft--;){if(et===Z||Z!==null&&et===Z.alternate){be=et;break e}et=be(et),Z=be(Z)}be=null}else be=null;gt!==null&&$g(wt,pt,gt,be,!1),ce!==null&&mn!==null&&$g(wt,mn,ce,be,!0)}}t:{if(pt=ht?$i(ht):window,gt=pt.nodeName&&pt.nodeName.toLowerCase(),gt==="select"||gt==="input"&&pt.type==="file")var tn=_c;else if(gc(pt))if(hs)tn=Mt;else{tn=yt;var fe=ot}else gt=pt.nodeName,!gt||gt.toLowerCase()!=="input"||pt.type!=="checkbox"&&pt.type!=="radio"?ht&&Mi(ht.elementType)&&(tn=_c):tn=Ut;if(tn&&(tn=tn(e,ht))){Ei(wt,tn,a,Et);break t}fe&&fe(e,pt,ht),e==="focusout"&&ht&&pt.type==="number"&&ht.memoizedProps.value!=null&&Cn(pt,"number",pt.value)}switch(fe=ht?$i(ht):window,e){case"focusin":(gc(fe)||fe.contentEditable==="true")&&(q=fe,ut=ht,Tt=null);break;case"focusout":Tt=ut=q=null;break;case"mousedown":zt=!0;break;case"contextmenu":case"mouseup":case"dragend":zt=!1,Te(wt,a,Et);break;case"selectionchange":if(Ii)break;case"keydown":case"keyup":Te(wt,a,Et)}var Pe;if(js)t:{switch(e){case"compositionstart":var We="onCompositionStart";break t;case"compositionend":We="onCompositionEnd";break t;case"compositionupdate":We="onCompositionUpdate";break t}We=void 0}else vr?mc(e,a)&&(We="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(We="onCompositionStart");We&&(dc&&a.locale!=="ko"&&(vr||We!=="onCompositionStart"?We==="onCompositionEnd"&&vr&&(Pe=sc()):(Ma=Et,Jo="value"in Ma?Ma.value:Ma.textContent,vr=!0)),fe=ru(ht,We),0<fe.length&&(We=new uc(We,e,null,a,Et),wt.push({event:We,listeners:fe}),Pe?We.data=Pe:(Pe=Ys(a),Pe!==null&&(We.data=Pe)))),(Pe=Ff?al(e,a):cs(e,a))&&(We=ru(ht,"onBeforeInput"),0<We.length&&(fe=new uc("onBeforeInput","beforeinput",null,a,Et),wt.push({event:fe,listeners:We}),fe.data=Pe)),Ry(wt,e,ht,a,Et)}Kg(wt,n)})}function wl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function ru(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Sa(e,a),u!=null&&o.unshift(wl(e,u,f)),u=Sa(e,n),u!=null&&o.push(wl(e,u,f))),e.tag===3)return o;e=e.return}return[]}function Uy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function $g(e,n,a,o,u){for(var f=n._reactName,M=[];a!==null&&a!==o;){var D=a,W=D.alternate,ht=D.stateNode;if(D=D.tag,W!==null&&W===o)break;D!==5&&D!==26&&D!==27||ht===null||(W=ht,u?(ht=Sa(a,f),ht!=null&&M.unshift(wl(a,ht,W))):u||(ht=Sa(a,f),ht!=null&&M.push(wl(a,ht,W)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var Ly=/\r\n?/g,Ny=/\u0000|\uFFFD/g;function Jg(e){return(typeof e=="string"?e:""+e).replace(Ly,`
`).replace(Ny,"")}function t_(e,n){return n=Jg(n),Jg(e)===n}function pn(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||wn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&wn(e,""+o);break;case"className":_e(e,"class",o);break;case"tabIndex":_e(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":_e(e,a,o);break;case"style":gr(e,o,f);break;case"data":if(n!=="object"){_e(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=bi(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&pn(e,n,"name",u.name,u,null),pn(e,n,"formEncType",u.formEncType,u,null),pn(e,n,"formMethod",u.formMethod,u,null),pn(e,n,"formTarget",u.formTarget,u,null)):(pn(e,n,"encType",u.encType,u,null),pn(e,n,"method",u.method,u,null),pn(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=bi(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Fi);break;case"onScroll":o!=null&&Ve("scroll",e);break;case"onScrollEnd":o!=null&&Ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=bi(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ve("beforetoggle",e),Ve("toggle",e),ue(e,"popover",o);break;case"xlinkActuate":le(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":le(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":le(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":le(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":le(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":le(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":le(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":le(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":le(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ue(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=df.get(a)||a,ue(e,a,o))}}function od(e,n,a,o,u,f){switch(a){case"style":gr(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?wn(e,o):(typeof o=="number"||typeof o=="bigint")&&wn(e,""+o);break;case"onScroll":o!=null&&Ve("scroll",e);break;case"onScrollEnd":o!=null&&Ve("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Fi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!mt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[An]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):ue(e,a,o)}}}function ri(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ve("error",e),Ve("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var M=a[f];if(M!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:pn(e,n,f,M,a,null)}}u&&pn(e,n,"srcSet",a.srcSet,a,null),o&&pn(e,n,"src",a.src,a,null);return;case"input":Ve("invalid",e);var D=f=M=u=null,W=null,ht=null;for(o in a)if(a.hasOwnProperty(o)){var Et=a[o];if(Et!=null)switch(o){case"name":u=Et;break;case"type":M=Et;break;case"checked":W=Et;break;case"defaultChecked":ht=Et;break;case"value":f=Et;break;case"defaultValue":D=Et;break;case"children":case"dangerouslySetInnerHTML":if(Et!=null)throw Error(r(137,n));break;default:pn(e,n,o,Et,a,null)}}Ji(e,f,D,W,ht,M,u,!1);return;case"select":Ve("invalid",e),o=M=f=null;for(u in a)if(a.hasOwnProperty(u)&&(D=a[u],D!=null))switch(u){case"value":f=D;break;case"defaultValue":M=D;break;case"multiple":o=D;default:pn(e,n,u,D,a,null)}n=f,a=M,e.multiple=!!o,n!=null?Si(e,!!o,n,!1):a!=null&&Si(e,!!o,a,!0);return;case"textarea":Ve("invalid",e),f=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(D=a[M],D!=null))switch(M){case"value":o=D;break;case"defaultValue":u=D;break;case"children":f=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(r(91));break;default:pn(e,n,M,D,a,null)}zn(e,o,u,f);return;case"option":for(W in a)a.hasOwnProperty(W)&&(o=a[W],o!=null)&&(W==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":pn(e,n,W,o,a,null));return;case"dialog":Ve("beforetoggle",e),Ve("toggle",e),Ve("cancel",e),Ve("close",e);break;case"iframe":case"object":Ve("load",e);break;case"video":case"audio":for(o=0;o<Cl.length;o++)Ve(Cl[o],e);break;case"image":Ve("error",e),Ve("load",e);break;case"details":Ve("toggle",e);break;case"embed":case"source":case"link":Ve("error",e),Ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ht in a)if(a.hasOwnProperty(ht)&&(o=a[ht],o!=null))switch(ht){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:pn(e,n,ht,o,a,null)}return;default:if(Mi(n)){for(Et in a)a.hasOwnProperty(Et)&&(o=a[Et],o!==void 0&&od(e,n,Et,o,a,void 0));return}}for(D in a)a.hasOwnProperty(D)&&(o=a[D],o!=null&&pn(e,n,D,o,a,null))}function Oy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,M=null,D=null,W=null,ht=null,Et=null;for(gt in a){var wt=a[gt];if(a.hasOwnProperty(gt)&&wt!=null)switch(gt){case"checked":break;case"value":break;case"defaultValue":W=wt;default:o.hasOwnProperty(gt)||pn(e,n,gt,null,o,wt)}}for(var pt in o){var gt=o[pt];if(wt=a[pt],o.hasOwnProperty(pt)&&(gt!=null||wt!=null))switch(pt){case"type":f=gt;break;case"name":u=gt;break;case"checked":ht=gt;break;case"defaultChecked":Et=gt;break;case"value":M=gt;break;case"defaultValue":D=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(r(137,n));break;default:gt!==wt&&pn(e,n,pt,gt,o,wt)}}Bn(e,M,D,W,ht,Et,f,u);return;case"select":gt=M=D=pt=null;for(f in a)if(W=a[f],a.hasOwnProperty(f)&&W!=null)switch(f){case"value":break;case"multiple":gt=W;default:o.hasOwnProperty(f)||pn(e,n,f,null,o,W)}for(u in o)if(f=o[u],W=a[u],o.hasOwnProperty(u)&&(f!=null||W!=null))switch(u){case"value":pt=f;break;case"defaultValue":D=f;break;case"multiple":M=f;default:f!==W&&pn(e,n,u,f,o,W)}n=D,a=M,o=gt,pt!=null?Si(e,!!a,pt,!1):!!o!=!!a&&(n!=null?Si(e,!!a,n,!0):Si(e,!!a,a?[]:"",!1));return;case"textarea":gt=pt=null;for(D in a)if(u=a[D],a.hasOwnProperty(D)&&u!=null&&!o.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:pn(e,n,D,null,o,u)}for(M in o)if(u=o[M],f=a[M],o.hasOwnProperty(M)&&(u!=null||f!=null))switch(M){case"value":pt=u;break;case"defaultValue":gt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&pn(e,n,M,u,o,f)}Qe(e,pt,gt);return;case"option":for(var ce in a)pt=a[ce],a.hasOwnProperty(ce)&&pt!=null&&!o.hasOwnProperty(ce)&&(ce==="selected"?e.selected=!1:pn(e,n,ce,null,o,pt));for(W in o)pt=o[W],gt=a[W],o.hasOwnProperty(W)&&pt!==gt&&(pt!=null||gt!=null)&&(W==="selected"?e.selected=pt&&typeof pt!="function"&&typeof pt!="symbol":pn(e,n,W,pt,o,gt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var be in a)pt=a[be],a.hasOwnProperty(be)&&pt!=null&&!o.hasOwnProperty(be)&&pn(e,n,be,null,o,pt);for(ht in o)if(pt=o[ht],gt=a[ht],o.hasOwnProperty(ht)&&pt!==gt&&(pt!=null||gt!=null))switch(ht){case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(r(137,n));break;default:pn(e,n,ht,pt,o,gt)}return;default:if(Mi(n)){for(var mn in a)pt=a[mn],a.hasOwnProperty(mn)&&pt!==void 0&&!o.hasOwnProperty(mn)&&od(e,n,mn,void 0,o,pt);for(Et in o)pt=o[Et],gt=a[Et],!o.hasOwnProperty(Et)||pt===gt||pt===void 0&&gt===void 0||od(e,n,Et,pt,o,gt);return}}for(var et in a)pt=a[et],a.hasOwnProperty(et)&&pt!=null&&!o.hasOwnProperty(et)&&pn(e,n,et,null,o,pt);for(wt in o)pt=o[wt],gt=a[wt],!o.hasOwnProperty(wt)||pt===gt||pt==null&&gt==null||pn(e,n,wt,pt,o,gt)}function e_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Py(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,M=u.initiatorType,D=u.duration;if(f&&D&&e_(M)){for(M=0,D=u.responseEnd,o+=1;o<a.length;o++){var W=a[o],ht=W.startTime;if(ht>D)break;var Et=W.transferSize,wt=W.initiatorType;Et&&e_(wt)&&(W=W.responseEnd,M+=Et*(W<D?1:(D-ht)/(W-ht)))}if(--o,n+=8*(f+M)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ld=null,cd=null;function su(e){return e.nodeType===9?e:e.ownerDocument}function n_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function i_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function ud(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var fd=null;function Fy(){var e=window.event;return e&&e.type==="popstate"?e===fd?!1:(fd=e,!0):(fd=null,!1)}var a_=typeof setTimeout=="function"?setTimeout:void 0,Iy=typeof clearTimeout=="function"?clearTimeout:void 0,r_=typeof Promise=="function"?Promise:void 0,By=typeof queueMicrotask=="function"?queueMicrotask:typeof r_<"u"?function(e){return r_.resolve(null).then(e).catch(zy)}:a_;function zy(e){setTimeout(function(){throw e})}function Fr(e){return e==="head"}function s_(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),So(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Dl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Dl(a);for(var f=a.firstChild;f;){var M=f.nextSibling,D=f.nodeName;f[Qi]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=M}}else a==="body"&&Dl(e.ownerDocument.body);a=u}while(a);So(n)}function o_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function hd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":hd(a),ns(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Hy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Qi])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=sa(e.nextSibling),e===null)break}return null}function Gy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=sa(e.nextSibling),e===null))return null;return e}function l_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=sa(e.nextSibling),e===null))return null;return e}function dd(e){return e.data==="$?"||e.data==="$~"}function pd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Vy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function sa(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var md=null;function c_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return sa(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function u_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function f_(e,n,a){switch(n=su(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Dl(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ns(e)}var oa=new Map,h_=new Set;function ou(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var nr=Y.d;Y.d={f:ky,r:Xy,D:Wy,C:jy,L:Yy,m:qy,X:Ky,S:Zy,M:Qy};function ky(){var e=nr.f(),n=$c();return e||n}function Xy(e){var n=ya(e);n!==null&&n.tag===5&&n.type==="form"?w0(n):nr.r(e)}var vo=typeof document>"u"?null:document;function d_(e,n,a){var o=vo;if(o&&typeof n=="string"&&n){var u=Re(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),h_.has(u)||(h_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),ri(n,"link",e),w(n),o.head.appendChild(n)))}}function Wy(e){nr.D(e),d_("dns-prefetch",e,null)}function jy(e,n){nr.C(e,n),d_("preconnect",e,n)}function Yy(e,n,a){nr.L(e,n,a);var o=vo;if(o&&e&&n){var u='link[rel="preload"][as="'+Re(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Re(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Re(a.imageSizes)+'"]')):u+='[href="'+Re(e)+'"]';var f=u;switch(n){case"style":f=xo(e);break;case"script":f=yo(e)}oa.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),oa.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Ul(f))||n==="script"&&o.querySelector(Ll(f))||(n=o.createElement("link"),ri(n,"link",e),w(n),o.head.appendChild(n)))}}function qy(e,n){nr.m(e,n);var a=vo;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Re(o)+'"][href="'+Re(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=yo(e)}if(!oa.has(f)&&(e=_({rel:"modulepreload",href:e},n),oa.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ll(f)))return}o=a.createElement("link"),ri(o,"link",e),w(o),a.head.appendChild(o)}}}function Zy(e,n,a){nr.S(e,n,a);var o=vo;if(o&&e){var u=pi(o).hoistableStyles,f=xo(e);n=n||"default";var M=u.get(f);if(!M){var D={loading:0,preload:null};if(M=o.querySelector(Ul(f)))D.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=oa.get(f))&&gd(e,a);var W=M=o.createElement("link");w(W),ri(W,"link",e),W._p=new Promise(function(ht,Et){W.onload=ht,W.onerror=Et}),W.addEventListener("load",function(){D.loading|=1}),W.addEventListener("error",function(){D.loading|=2}),D.loading|=4,lu(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:D},u.set(f,M)}}}function Ky(e,n){nr.X(e,n);var a=vo;if(a&&e){var o=pi(a).hoistableScripts,u=yo(e),f=o.get(u);f||(f=a.querySelector(Ll(u)),f||(e=_({src:e,async:!0},n),(n=oa.get(u))&&_d(e,n),f=a.createElement("script"),w(f),ri(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Qy(e,n){nr.M(e,n);var a=vo;if(a&&e){var o=pi(a).hoistableScripts,u=yo(e),f=o.get(u);f||(f=a.querySelector(Ll(u)),f||(e=_({src:e,async:!0,type:"module"},n),(n=oa.get(u))&&_d(e,n),f=a.createElement("script"),w(f),ri(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function p_(e,n,a,o){var u=(u=lt.current)?ou(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=xo(a.href),a=pi(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=xo(a.href);var f=pi(u).hoistableStyles,M=f.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,M),(f=u.querySelector(Ul(e)))&&!f._p&&(M.instance=f,M.state.loading=5),oa.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},oa.set(e,a),f||$y(u,e,a,M.state))),n&&o===null)throw Error(r(528,""));return M}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=yo(a),a=pi(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function xo(e){return'href="'+Re(e)+'"'}function Ul(e){return'link[rel="stylesheet"]['+e+"]"}function m_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function $y(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),ri(n,"link",a),w(n),e.head.appendChild(n))}function yo(e){return'[src="'+Re(e)+'"]'}function Ll(e){return"script[async]"+e}function g_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Re(a.href)+'"]');if(o)return n.instance=o,w(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),w(o),ri(o,"style",u),lu(o,a.precedence,e),n.instance=o;case"stylesheet":u=xo(a.href);var f=e.querySelector(Ul(u));if(f)return n.state.loading|=4,n.instance=f,w(f),f;o=m_(a),(u=oa.get(u))&&gd(o,u),f=(e.ownerDocument||e).createElement("link"),w(f);var M=f;return M._p=new Promise(function(D,W){M.onload=D,M.onerror=W}),ri(f,"link",o),n.state.loading|=4,lu(f,a.precedence,e),n.instance=f;case"script":return f=yo(a.src),(u=e.querySelector(Ll(f)))?(n.instance=u,w(u),u):(o=a,(u=oa.get(f))&&(o=_({},a),_d(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),w(u),ri(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,lu(o,a.precedence,e));return n.instance}function lu(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,M=0;M<o.length;M++){var D=o[M];if(D.dataset.precedence===n)f=D;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function gd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function _d(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var cu=null;function __(e,n,a){if(cu===null){var o=new Map,u=cu=new Map;u.set(a,o)}else u=cu,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Qi]||f[Mn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var M=f.getAttribute(n)||"";M=e+M;var D=o.get(M);D?D.push(f):o.set(M,[f])}}return o}function v_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Jy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function x_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function tS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=xo(o.href),f=n.querySelector(Ul(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=uu.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,w(f);return}f=n.ownerDocument||n,o=m_(o),(u=oa.get(u))&&gd(o,u),f=f.createElement("link"),w(f);var M=f;M._p=new Promise(function(D,W){M.onload=D,M.onerror=W}),ri(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=uu.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var vd=0;function eS(e,n){return e.stylesheets&&e.count===0&&hu(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&hu(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&vd===0&&(vd=62500*Py());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&hu(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>vd?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function uu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)hu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var fu=null;function hu(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,fu=new Map,n.forEach(nS,e),fu=null,uu.call(e))}function nS(e,n){if(!(n.state.loading&4)){var a=fu.get(e);if(a)var o=a.get(null);else{a=new Map,fu.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var M=u[f];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),f=a.get(M)||o,f===o&&a.set(null,u),a.set(M,u),this.count++,o=uu.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Nl={$$typeof:N,Provider:null,Consumer:null,_currentValue:st,_currentValue2:st,_threadCount:0};function iS(e,n,a,o,u,f,M,D,W){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=je(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=je(0),this.hiddenUpdates=je(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=W,this.incompleteTransitions=new Map}function y_(e,n,a,o,u,f,M,D,W,ht,Et,wt){return e=new iS(e,n,a,M,W,ht,Et,wt,D),n=1,f===!0&&(n|=24),f=Bi(3,null,null,n),e.current=f,f.stateNode=e,n=Qf(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},eh(f),e}function S_(e){return e?(e=Ks,e):Ks}function M_(e,n,a,o,u,f){u=S_(u),o.context===null?o.context=u:o.pendingContext=u,o=Tr(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ar(e,o,n),a!==null&&(Di(a,e,n),fl(a,e,n))}function b_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function xd(e,n){b_(e,n),(e=e.alternate)&&b_(e,n)}function E_(e){if(e.tag===13||e.tag===31){var n=ds(e,67108864);n!==null&&Di(n,e,67108864),xd(e,67108864)}}function T_(e){if(e.tag===13||e.tag===31){var n=ki();n=pr(n);var a=ds(e,n);a!==null&&Di(a,e,n),xd(e,n)}}var du=!0;function aS(e,n,a,o){var u=H.T;H.T=null;var f=Y.p;try{Y.p=2,yd(e,n,a,o)}finally{Y.p=f,H.T=u}}function rS(e,n,a,o){var u=H.T;H.T=null;var f=Y.p;try{Y.p=8,yd(e,n,a,o)}finally{Y.p=f,H.T=u}}function yd(e,n,a,o){if(du){var u=Sd(o);if(u===null)sd(e,n,o,pu,a),R_(e,o);else if(oS(u,e,n,a,o))o.stopPropagation();else if(R_(e,o),n&4&&-1<sS.indexOf(e)){for(;u!==null;){var f=ya(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var M=St(f.pendingLanes);if(M!==0){var D=f;for(D.pendingLanes|=2,D.entangledLanes|=2;M;){var W=1<<31-Yt(M);D.entanglements[1]|=W,M&=~W}Ra(f),(on&6)===0&&(Kc=A()+500,Rl(0))}}break;case 31:case 13:D=ds(f,2),D!==null&&Di(D,f,2),$c(),xd(f,2)}if(f=Sd(o),f===null&&sd(e,n,o,pu,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else sd(e,n,o,null,a)}}function Sd(e){return e=Ko(e),Md(e)}var pu=null;function Md(e){if(pu=null,e=yi(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return pu=e,null}function A_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(K()){case bt:return 2;case Dt:return 8;case _t:case se:return 32;case Vt:return 268435456;default:return 32}default:return 32}}var bd=!1,Ir=null,Br=null,zr=null,Ol=new Map,Pl=new Map,Hr=[],sS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function R_(e,n){switch(e){case"focusin":case"focusout":Ir=null;break;case"dragenter":case"dragleave":Br=null;break;case"mouseover":case"mouseout":zr=null;break;case"pointerover":case"pointerout":Ol.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pl.delete(n.pointerId)}}function Fl(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ya(n),n!==null&&E_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function oS(e,n,a,o,u){switch(n){case"focusin":return Ir=Fl(Ir,e,n,a,o,u),!0;case"dragenter":return Br=Fl(Br,e,n,a,o,u),!0;case"mouseover":return zr=Fl(zr,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Ol.set(f,Fl(Ol.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Pl.set(f,Fl(Pl.get(f)||null,e,n,a,o,u)),!0}return!1}function C_(e){var n=yi(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Zi(e.priority,function(){T_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Zi(e.priority,function(){T_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Sd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Zo=o,a.target.dispatchEvent(o),Zo=null}else return n=ya(a),n!==null&&E_(n),e.blockedOn=a,!1;n.shift()}return!0}function w_(e,n,a){mu(e)&&a.delete(n)}function lS(){bd=!1,Ir!==null&&mu(Ir)&&(Ir=null),Br!==null&&mu(Br)&&(Br=null),zr!==null&&mu(zr)&&(zr=null),Ol.forEach(w_),Pl.forEach(w_)}function gu(e,n){e.blockedOn===n&&(e.blockedOn=null,bd||(bd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,lS)))}var _u=null;function D_(e){_u!==e&&(_u=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){_u===e&&(_u=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Md(o||a)===null)continue;break}var f=ya(a);f!==null&&(e.splice(n,3),n-=3,Sh(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function So(e){function n(W){return gu(W,e)}Ir!==null&&gu(Ir,e),Br!==null&&gu(Br,e),zr!==null&&gu(zr,e),Ol.forEach(n),Pl.forEach(n);for(var a=0;a<Hr.length;a++){var o=Hr[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Hr.length&&(a=Hr[0],a.blockedOn===null);)C_(a),a.blockedOn===null&&Hr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],M=u[An]||null;if(typeof f=="function")M||D_(a);else if(M){var D=null;if(f&&f.hasAttribute("formAction")){if(u=f,M=f[An]||null)D=M.formAction;else if(Md(u)!==null)continue}else D=M.action;typeof D=="function"?a[o+1]=D:(a.splice(o,3),o-=3),D_(a)}}}function U_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(M){return u=M})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Ed(e){this._internalRoot=e}vu.prototype.render=Ed.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ki();M_(a,o,e,n,null,null)},vu.prototype.unmount=Ed.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;M_(e.current,2,null,e,null,null),$c(),n[Pi]=null}};function vu(e){this._internalRoot=e}vu.prototype.unstable_scheduleHydration=function(e){if(e){var n=ts();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Hr.length&&n!==0&&n<Hr[a].priority;a++);Hr.splice(a,0,e),a===0&&C_(e)}};var L_=t.version;if(L_!=="19.2.4")throw Error(r(527,L_,"19.2.4"));Y.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var cS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xu.isDisabled&&xu.supportsFiber)try{Ot=xu.inject(cS),Bt=xu}catch{}}return Bl.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=z0,f=H0,M=G0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError)),n=y_(e,1,!1,null,null,a,o,null,u,f,M,U_),e[Pi]=n.current,rd(e),new Ed(n)},Bl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",f=z0,M=H0,D=G0,W=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(D=a.onRecoverableError),a.formState!==void 0&&(W=a.formState)),n=y_(e,1,!0,n,a??null,o,u,W,f,M,D,U_),n.context=S_(null),a=n.current,o=ki(),o=pr(o),u=Tr(o),u.callback=null,Ar(a,u,o),a=o,n.current.lanes=a,In(n,a),Ra(n),e[Pi]=n.current,rd(e),new vu(n)},Bl.version="19.2.4",Bl}var V_;function xS(){if(V_)return Rd.exports;V_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Rd.exports=vS(),Rd.exports}var yS=xS();const fm="182",Bo={ROTATE:0,DOLLY:1,PAN:2},Io={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},SS=0,k_=1,MS=2,Wu=1,bS=2,Yl=3,Qr=0,Oi=1,Yi=2,ur=0,zo=1,X_=2,W_=3,j_=4,ES=5,Ls=100,TS=101,AS=102,RS=103,CS=104,wS=200,DS=201,US=202,LS=203,pp=204,mp=205,NS=206,OS=207,PS=208,FS=209,IS=210,BS=211,zS=212,HS=213,GS=214,gp=0,_p=1,vp=2,Go=3,xp=4,yp=5,Sp=6,Mp=7,lx=0,VS=1,kS=2,La=0,cx=1,ux=2,fx=3,hm=4,hx=5,dx=6,px=7,mx=300,Fs=301,Vo=302,bp=303,Ep=304,lf=306,Tp=1e3,cr=1001,Ap=1002,si=1003,XS=1004,yu=1005,hi=1006,Ud=1007,Os=1008,qi=1009,gx=1010,_x=1011,$l=1012,dm=1013,Oa=1014,Da=1015,hr=1016,pm=1017,mm=1018,Jl=1020,vx=35902,xx=35899,yx=1021,Sx=1022,xa=1023,dr=1026,Ps=1027,Mx=1028,gm=1029,ko=1030,_m=1031,vm=1033,ju=33776,Yu=33777,qu=33778,Zu=33779,Rp=35840,Cp=35841,wp=35842,Dp=35843,Up=36196,Lp=37492,Np=37496,Op=37488,Pp=37489,Fp=37490,Ip=37491,Bp=37808,zp=37809,Hp=37810,Gp=37811,Vp=37812,kp=37813,Xp=37814,Wp=37815,jp=37816,Yp=37817,qp=37818,Zp=37819,Kp=37820,Qp=37821,$p=36492,Jp=36494,tm=36495,em=36283,nm=36284,im=36285,am=36286,WS=3200,bx=0,jS=1,Zr="",ji="srgb",Xo="srgb-linear",ef="linear",fn="srgb",Mo=7680,Y_=519,YS=512,qS=513,ZS=514,xm=515,KS=516,QS=517,ym=518,$S=519,q_=35044,Z_="300 es",Ua=2e3,nf=2001;function Ex(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function af(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function JS(){const s=af("canvas");return s.style.display="block",s}const K_={};function Q_(...s){const t="THREE."+s.shift();console.log(t,...s)}function Ae(...s){const t="THREE."+s.shift();console.warn(t,...s)}function nn(...s){const t="THREE."+s.shift();console.error(t,...s)}function tc(...s){const t=s.join(" ");t in K_||(K_[t]=!0,Ae(...s))}function tM(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class Bs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const ui=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ku=Math.PI/180,rm=180/Math.PI;function nc(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ui[s&255]+ui[s>>8&255]+ui[s>>16&255]+ui[s>>24&255]+"-"+ui[t&255]+ui[t>>8&255]+"-"+ui[t>>16&15|64]+ui[t>>24&255]+"-"+ui[i&63|128]+ui[i>>8&255]+"-"+ui[i>>16&255]+ui[i>>24&255]+ui[r&255]+ui[r>>8&255]+ui[r>>16&255]+ui[r>>24&255]).toLowerCase()}function ze(s,t,i){return Math.max(t,Math.min(i,s))}function eM(s,t){return(s%t+t)%t}function Ld(s,t,i){return(1-i)*s+i*t}function zl(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ui(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const nM={DEG2RAD:Ku};class Le{constructor(t=0,i=0){Le.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ze(this.x,t.x,i.x),this.y=ze(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ze(this.x,t,i),this.y=ze(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ze(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(ze(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*r-h*l+t.x,this.y=c*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Is{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],_=r[l+3],S=c[h+0],b=c[h+1],T=c[h+2],R=c[h+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(d>=1){t[i+0]=S,t[i+1]=b,t[i+2]=T,t[i+3]=R;return}if(_!==R||m!==S||p!==b||g!==T){let E=m*S+p*b+g*T+_*R;E<0&&(S=-S,b=-b,T=-T,R=-R,E=-E);let x=1-d;if(E<.9995){const F=Math.acos(E),N=Math.sin(F);x=Math.sin(x*F)/N,d=Math.sin(d*F)/N,m=m*x+S*d,p=p*x+b*d,g=g*x+T*d,_=_*x+R*d}else{m=m*x+S*d,p=p*x+b*d,g=g*x+T*d,_=_*x+R*d;const F=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=F,p*=F,g*=F,_*=F}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],_=c[h],S=c[h+1],b=c[h+2],T=c[h+3];return t[i]=d*T+g*_+m*b-p*S,t[i+1]=m*T+g*S+p*_-d*b,t[i+2]=p*T+g*b+d*S-m*_,t[i+3]=g*T-d*_-m*S-p*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),_=d(c/2),S=m(r/2),b=m(l/2),T=m(c/2);switch(h){case"XYZ":this._x=S*g*_+p*b*T,this._y=p*b*_-S*g*T,this._z=p*g*T+S*b*_,this._w=p*g*_-S*b*T;break;case"YXZ":this._x=S*g*_+p*b*T,this._y=p*b*_-S*g*T,this._z=p*g*T-S*b*_,this._w=p*g*_+S*b*T;break;case"ZXY":this._x=S*g*_-p*b*T,this._y=p*b*_+S*g*T,this._z=p*g*T+S*b*_,this._w=p*g*_-S*b*T;break;case"ZYX":this._x=S*g*_-p*b*T,this._y=p*b*_+S*g*T,this._z=p*g*T-S*b*_,this._w=p*g*_+S*b*T;break;case"YZX":this._x=S*g*_+p*b*T,this._y=p*b*_+S*g*T,this._z=p*g*T-S*b*_,this._w=p*g*_-S*b*T;break;case"XZY":this._x=S*g*_-p*b*T,this._y=p*b*_-S*g*T,this._z=p*g*T+S*b*_,this._w=p*g*_+S*b*T;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],S=r+d+_;if(S>0){const b=.5/Math.sqrt(S+1);this._w=.25/b,this._x=(g-m)*b,this._y=(c-p)*b,this._z=(h-l)*b}else if(r>d&&r>_){const b=2*Math.sqrt(1+r-d-_);this._w=(g-m)/b,this._x=.25*b,this._y=(l+h)/b,this._z=(c+p)/b}else if(d>_){const b=2*Math.sqrt(1+d-r-_);this._w=(c-p)/b,this._x=(l+h)/b,this._y=.25*b,this._z=(m+g)/b}else{const b=2*Math.sqrt(1+_-r-d);this._w=(h-l)/b,this._x=(c+p)/b,this._y=(m+g)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-c*m,this._y=l*g+h*m+c*d-r*p,this._z=c*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let r=t._x,l=t._y,c=t._z,h=t._w,d=this.dot(t);d<0&&(r=-r,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class it{constructor(t=0,i=0,r=0){it.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion($_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion($_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),g=2*(d*i-c*l),_=2*(c*r-h*i);return this.x=i+m*p+h*_-d*g,this.y=r+m*g+d*p-c*_,this.z=l+m*_+c*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ze(this.x,t.x,i.x),this.y=ze(this.y,t.y,i.y),this.z=ze(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ze(this.x,t,i),this.y=ze(this.y,t,i),this.z=ze(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ze(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Nd.copy(this).projectOnVector(t),this.sub(Nd)}reflect(t){return this.sub(Nd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(ze(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nd=new it,$_=new Is;class Fe{constructor(t,i,r,l,c,h,d,m,p){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p)}set(t,i,r,l,c,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],_=r[7],S=r[2],b=r[5],T=r[8],R=l[0],E=l[3],x=l[6],F=l[1],N=l[4],O=l[7],z=l[2],P=l[5],I=l[8];return c[0]=h*R+d*F+m*z,c[3]=h*E+d*N+m*P,c[6]=h*x+d*O+m*I,c[1]=p*R+g*F+_*z,c[4]=p*E+g*N+_*P,c[7]=p*x+g*O+_*I,c[2]=S*R+b*F+T*z,c[5]=S*E+b*N+T*P,c[8]=S*x+b*O+T*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-r*c*g+r*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=g*h-d*p,S=d*m-g*c,b=p*c-h*m,T=i*_+r*S+l*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/T;return t[0]=_*R,t[1]=(l*p-g*r)*R,t[2]=(d*r-l*h)*R,t[3]=S*R,t[4]=(g*i-l*m)*R,t[5]=(l*c-d*i)*R,t[6]=b*R,t[7]=(r*m-p*i)*R,t[8]=(h*i-r*c)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Od.makeScale(t,i)),this}rotate(t){return this.premultiply(Od.makeRotation(-t)),this}translate(t,i){return this.premultiply(Od.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Od=new Fe,J_=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tv=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iM(){const s={enabled:!0,workingColorSpace:Xo,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===fn&&(l.r=fr(l.r),l.g=fr(l.g),l.b=fr(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===fn&&(l.r=Ho(l.r),l.g=Ho(l.g),l.b=Ho(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Zr?ef:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return tc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return tc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Xo]:{primaries:t,whitePoint:r,transfer:ef,toXYZ:J_,fromXYZ:tv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ji},outputColorSpaceConfig:{drawingBufferColorSpace:ji}},[ji]:{primaries:t,whitePoint:r,transfer:fn,toXYZ:J_,fromXYZ:tv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ji}}}),s}const $e=iM();function fr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ho(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let bo;class aM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{bo===void 0&&(bo=af("canvas")),bo.width=t.width,bo.height=t.height;const l=bo.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=bo}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=af("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=fr(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(fr(i[r]/255)*255):i[r]=fr(i[r]);return{data:i,width:t.width,height:t.height}}else return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rM=0;class Sm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=nc(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Pd(l[h].image)):c.push(Pd(l[h]))}else c=Pd(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function Pd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?aM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}let sM=0;const Fd=new it;class vi extends Bs{constructor(t=vi.DEFAULT_IMAGE,i=vi.DEFAULT_MAPPING,r=cr,l=cr,c=hi,h=Os,d=xa,m=qi,p=vi.DEFAULT_ANISOTROPY,g=Zr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=nc(),this.name="",this.source=new Sm(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Fd).x}get height(){return this.source.getSize(Fd).y}get depth(){return this.source.getSize(Fd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){Ae(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Ae(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Tp:t.x=t.x-Math.floor(t.x);break;case cr:t.x=t.x<0?0:1;break;case Ap:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Tp:t.y=t.y-Math.floor(t.y);break;case cr:t.y=t.y<0?0:1;break;case Ap:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}vi.DEFAULT_IMAGE=null;vi.DEFAULT_MAPPING=mx;vi.DEFAULT_ANISOTROPY=1;class Ln{constructor(t=0,i=0,r=0,l=1){Ln.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],S=m[1],b=m[5],T=m[9],R=m[2],E=m[6],x=m[10];if(Math.abs(g-S)<.01&&Math.abs(_-R)<.01&&Math.abs(T-E)<.01){if(Math.abs(g+S)<.1&&Math.abs(_+R)<.1&&Math.abs(T+E)<.1&&Math.abs(p+b+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,O=(b+1)/2,z=(x+1)/2,P=(g+S)/4,I=(_+R)/4,j=(T+E)/4;return N>O&&N>z?N<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(N),l=P/r,c=I/r):O>z?O<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(O),r=P/l,c=j/l):z<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),r=I/c,l=j/c),this.set(r,l,c,i),this}let F=Math.sqrt((E-T)*(E-T)+(_-R)*(_-R)+(S-g)*(S-g));return Math.abs(F)<.001&&(F=1),this.x=(E-T)/F,this.y=(_-R)/F,this.z=(S-g)/F,this.w=Math.acos((p+b+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ze(this.x,t.x,i.x),this.y=ze(this.y,t.y,i.y),this.z=ze(this.z,t.z,i.z),this.w=ze(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ze(this.x,t,i),this.y=ze(this.y,t,i),this.z=ze(this.z,t,i),this.w=ze(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ze(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oM extends Bs{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new Ln(0,0,t,i),this.scissorTest=!1,this.viewport=new Ln(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new vi(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:hi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Sm(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Na extends oM{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class Tx extends vi{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=si,this.minFilter=si,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class lM extends vi{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=si,this.minFilter=si,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jo{constructor(t=new it(1/0,1/0,1/0),i=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(ma.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(ma.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=ma.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,ma):ma.fromBufferAttribute(c,h),ma.applyMatrix4(t.matrixWorld),this.expandByPoint(ma);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Su.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Su.copy(r.boundingBox)),Su.applyMatrix4(t.matrixWorld),this.union(Su)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ma),ma.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hl),Mu.subVectors(this.max,Hl),Eo.subVectors(t.a,Hl),To.subVectors(t.b,Hl),Ao.subVectors(t.c,Hl),Vr.subVectors(To,Eo),kr.subVectors(Ao,To),As.subVectors(Eo,Ao);let i=[0,-Vr.z,Vr.y,0,-kr.z,kr.y,0,-As.z,As.y,Vr.z,0,-Vr.x,kr.z,0,-kr.x,As.z,0,-As.x,-Vr.y,Vr.x,0,-kr.y,kr.x,0,-As.y,As.x,0];return!Id(i,Eo,To,Ao,Mu)||(i=[1,0,0,0,1,0,0,0,1],!Id(i,Eo,To,Ao,Mu))?!1:(bu.crossVectors(Vr,kr),i=[bu.x,bu.y,bu.z],Id(i,Eo,To,Ao,Mu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ma).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ma).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ir[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ir[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ir[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ir[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ir[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ir[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ir[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ir[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ir),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ir=[new it,new it,new it,new it,new it,new it,new it,new it],ma=new it,Su=new jo,Eo=new it,To=new it,Ao=new it,Vr=new it,kr=new it,As=new it,Hl=new it,Mu=new it,bu=new it,Rs=new it;function Id(s,t,i,r,l){for(let c=0,h=s.length-3;c<=h;c+=3){Rs.fromArray(s,c);const d=l.x*Math.abs(Rs.x)+l.y*Math.abs(Rs.y)+l.z*Math.abs(Rs.z),m=t.dot(Rs),p=i.dot(Rs),g=r.dot(Rs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const cM=new jo,Gl=new it,Bd=new it;class cf{constructor(t=new it,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):cM.setFromPoints(t).getCenter(r);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gl.subVectors(t,this.center);const i=Gl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Gl,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Bd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gl.copy(t.center).add(Bd)),this.expandByPoint(Gl.copy(t.center).sub(Bd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ar=new it,zd=new it,Eu=new it,Xr=new it,Hd=new it,Tu=new it,Gd=new it;class Mm{constructor(t=new it,i=new it(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ar)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ar.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ar.copy(this.origin).addScaledVector(this.direction,i),ar.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){zd.copy(t).add(i).multiplyScalar(.5),Eu.copy(i).sub(t).normalize(),Xr.copy(this.origin).sub(zd);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Eu),d=Xr.dot(this.direction),m=-Xr.dot(Eu),p=Xr.lengthSq(),g=Math.abs(1-h*h);let _,S,b,T;if(g>0)if(_=h*m-d,S=h*d-m,T=c*g,_>=0)if(S>=-T)if(S<=T){const R=1/g;_*=R,S*=R,b=_*(_+h*S+2*d)+S*(h*_+S+2*m)+p}else S=c,_=Math.max(0,-(h*S+d)),b=-_*_+S*(S+2*m)+p;else S=-c,_=Math.max(0,-(h*S+d)),b=-_*_+S*(S+2*m)+p;else S<=-T?(_=Math.max(0,-(-h*c+d)),S=_>0?-c:Math.min(Math.max(-c,-m),c),b=-_*_+S*(S+2*m)+p):S<=T?(_=0,S=Math.min(Math.max(-c,-m),c),b=S*(S+2*m)+p):(_=Math.max(0,-(h*c+d)),S=_>0?c:Math.min(Math.max(-c,-m),c),b=-_*_+S*(S+2*m)+p);else S=h>0?-c:c,_=Math.max(0,-(h*S+d)),b=-_*_+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(zd).addScaledVector(Eu,S),b}intersectSphere(t,i){ar.subVectors(t.center,this.origin);const r=ar.dot(this.direction),l=ar.dot(ar)-r*r,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,S=this.origin;return p>=0?(r=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(r=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),g>=0?(c=(t.min.y-S.y)*g,h=(t.max.y-S.y)*g):(c=(t.max.y-S.y)*g,h=(t.min.y-S.y)*g),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),_>=0?(d=(t.min.z-S.z)*_,m=(t.max.z-S.z)*_):(d=(t.max.z-S.z)*_,m=(t.min.z-S.z)*_),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ar)!==null}intersectTriangle(t,i,r,l,c){Hd.subVectors(i,t),Tu.subVectors(r,t),Gd.crossVectors(Hd,Tu);let h=this.direction.dot(Gd),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Xr.subVectors(this.origin,t);const m=d*this.direction.dot(Tu.crossVectors(Xr,Tu));if(m<0)return null;const p=d*this.direction.dot(Hd.cross(Xr));if(p<0||m+p>h)return null;const g=-d*Xr.dot(Gd);return g<0?null:this.at(g/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tn{constructor(t,i,r,l,c,h,d,m,p,g,_,S,b,T,R,E){Tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p,g,_,S,b,T,R,E)}set(t,i,r,l,c,h,d,m,p,g,_,S,b,T,R,E){const x=this.elements;return x[0]=t,x[4]=i,x[8]=r,x[12]=l,x[1]=c,x[5]=h,x[9]=d,x[13]=m,x[2]=p,x[6]=g,x[10]=_,x[14]=S,x[3]=b,x[7]=T,x[11]=R,x[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,r=t.elements,l=1/Ro.setFromMatrixColumn(t,0).length(),c=1/Ro.setFromMatrixColumn(t,1).length(),h=1/Ro.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const S=h*g,b=h*_,T=d*g,R=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=b+T*p,i[5]=S-R*p,i[9]=-d*m,i[2]=R-S*p,i[6]=T+b*p,i[10]=h*m}else if(t.order==="YXZ"){const S=m*g,b=m*_,T=p*g,R=p*_;i[0]=S+R*d,i[4]=T*d-b,i[8]=h*p,i[1]=h*_,i[5]=h*g,i[9]=-d,i[2]=b*d-T,i[6]=R+S*d,i[10]=h*m}else if(t.order==="ZXY"){const S=m*g,b=m*_,T=p*g,R=p*_;i[0]=S-R*d,i[4]=-h*_,i[8]=T+b*d,i[1]=b+T*d,i[5]=h*g,i[9]=R-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const S=h*g,b=h*_,T=d*g,R=d*_;i[0]=m*g,i[4]=T*p-b,i[8]=S*p+R,i[1]=m*_,i[5]=R*p+S,i[9]=b*p-T,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const S=h*m,b=h*p,T=d*m,R=d*p;i[0]=m*g,i[4]=R-S*_,i[8]=T*_+b,i[1]=_,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=b*_+T,i[10]=S-R*_}else if(t.order==="XZY"){const S=h*m,b=h*p,T=d*m,R=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=S*_+R,i[5]=h*g,i[9]=b*_-T,i[2]=T*_-b,i[6]=d*g,i[10]=R*_+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(uM,t,fM)}lookAt(t,i,r){const l=this.elements;return Xi.subVectors(t,i),Xi.lengthSq()===0&&(Xi.z=1),Xi.normalize(),Wr.crossVectors(r,Xi),Wr.lengthSq()===0&&(Math.abs(r.z)===1?Xi.x+=1e-4:Xi.z+=1e-4,Xi.normalize(),Wr.crossVectors(r,Xi)),Wr.normalize(),Au.crossVectors(Xi,Wr),l[0]=Wr.x,l[4]=Au.x,l[8]=Xi.x,l[1]=Wr.y,l[5]=Au.y,l[9]=Xi.y,l[2]=Wr.z,l[6]=Au.z,l[10]=Xi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],_=r[5],S=r[9],b=r[13],T=r[2],R=r[6],E=r[10],x=r[14],F=r[3],N=r[7],O=r[11],z=r[15],P=l[0],I=l[4],j=l[8],C=l[12],U=l[1],X=l[5],$=l[9],rt=l[13],tt=l[2],xt=l[6],H=l[10],Y=l[14],st=l[3],Ft=l[7],Nt=l[11],G=l[15];return c[0]=h*P+d*U+m*tt+p*st,c[4]=h*I+d*X+m*xt+p*Ft,c[8]=h*j+d*$+m*H+p*Nt,c[12]=h*C+d*rt+m*Y+p*G,c[1]=g*P+_*U+S*tt+b*st,c[5]=g*I+_*X+S*xt+b*Ft,c[9]=g*j+_*$+S*H+b*Nt,c[13]=g*C+_*rt+S*Y+b*G,c[2]=T*P+R*U+E*tt+x*st,c[6]=T*I+R*X+E*xt+x*Ft,c[10]=T*j+R*$+E*H+x*Nt,c[14]=T*C+R*rt+E*Y+x*G,c[3]=F*P+N*U+O*tt+z*st,c[7]=F*I+N*X+O*xt+z*Ft,c[11]=F*j+N*$+O*H+z*Nt,c[15]=F*C+N*rt+O*Y+z*G,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],_=t[6],S=t[10],b=t[14],T=t[3],R=t[7],E=t[11],x=t[15],F=m*b-p*S,N=d*b-p*_,O=d*S-m*_,z=h*b-p*g,P=h*S-m*g,I=h*_-d*g;return i*(R*F-E*N+x*O)-r*(T*F-E*z+x*P)+l*(T*N-R*z+x*I)-c*(T*O-R*P+E*I)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=t[9],S=t[10],b=t[11],T=t[12],R=t[13],E=t[14],x=t[15],F=_*E*p-R*S*p+R*m*b-d*E*b-_*m*x+d*S*x,N=T*S*p-g*E*p-T*m*b+h*E*b+g*m*x-h*S*x,O=g*R*p-T*_*p+T*d*b-h*R*b-g*d*x+h*_*x,z=T*_*m-g*R*m-T*d*S+h*R*S+g*d*E-h*_*E,P=i*F+r*N+l*O+c*z;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/P;return t[0]=F*I,t[1]=(R*S*c-_*E*c-R*l*b+r*E*b+_*l*x-r*S*x)*I,t[2]=(d*E*c-R*m*c+R*l*p-r*E*p-d*l*x+r*m*x)*I,t[3]=(_*m*c-d*S*c-_*l*p+r*S*p+d*l*b-r*m*b)*I,t[4]=N*I,t[5]=(g*E*c-T*S*c+T*l*b-i*E*b-g*l*x+i*S*x)*I,t[6]=(T*m*c-h*E*c-T*l*p+i*E*p+h*l*x-i*m*x)*I,t[7]=(h*S*c-g*m*c+g*l*p-i*S*p-h*l*b+i*m*b)*I,t[8]=O*I,t[9]=(T*_*c-g*R*c-T*r*b+i*R*b+g*r*x-i*_*x)*I,t[10]=(h*R*c-T*d*c+T*r*p-i*R*p-h*r*x+i*d*x)*I,t[11]=(g*d*c-h*_*c-g*r*p+i*_*p+h*r*b-i*d*b)*I,t[12]=z*I,t[13]=(g*R*l-T*_*l+T*r*S-i*R*S-g*r*E+i*_*E)*I,t[14]=(T*d*l-h*R*l-T*r*m+i*R*m+h*r*E-i*d*E)*I,t[15]=(h*_*l-g*d*l+g*r*m-i*_*m-h*r*S+i*d*S)*I,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=t.x,d=t.y,m=t.z,p=c*h,g=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,h){return this.set(1,r,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,g=h+h,_=d+d,S=c*p,b=c*g,T=c*_,R=h*g,E=h*_,x=d*_,F=m*p,N=m*g,O=m*_,z=r.x,P=r.y,I=r.z;return l[0]=(1-(R+x))*z,l[1]=(b+O)*z,l[2]=(T-N)*z,l[3]=0,l[4]=(b-O)*P,l[5]=(1-(S+x))*P,l[6]=(E+F)*P,l[7]=0,l[8]=(T+N)*I,l[9]=(E-F)*I,l[10]=(1-(S+R))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let c=Ro.set(l[0],l[1],l[2]).length();const h=Ro.set(l[4],l[5],l[6]).length(),d=Ro.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),ga.copy(this);const p=1/c,g=1/h,_=1/d;return ga.elements[0]*=p,ga.elements[1]*=p,ga.elements[2]*=p,ga.elements[4]*=g,ga.elements[5]*=g,ga.elements[6]*=g,ga.elements[8]*=_,ga.elements[9]*=_,ga.elements[10]*=_,i.setFromRotationMatrix(ga),r.x=c,r.y=h,r.z=d,this}makePerspective(t,i,r,l,c,h,d=Ua,m=!1){const p=this.elements,g=2*c/(i-t),_=2*c/(r-l),S=(i+t)/(i-t),b=(r+l)/(r-l);let T,R;if(m)T=c/(h-c),R=h*c/(h-c);else if(d===Ua)T=-(h+c)/(h-c),R=-2*h*c/(h-c);else if(d===nf)T=-h/(h-c),R=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=_,p[9]=b,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,h,d=Ua,m=!1){const p=this.elements,g=2/(i-t),_=2/(r-l),S=-(i+t)/(i-t),b=-(r+l)/(r-l);let T,R;if(m)T=1/(h-c),R=h/(h-c);else if(d===Ua)T=-2/(h-c),R=-(h+c)/(h-c);else if(d===nf)T=-1/(h-c),R=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=_,p[9]=0,p[13]=b,p[2]=0,p[6]=0,p[10]=T,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const Ro=new it,ga=new Tn,uM=new it(0,0,0),fM=new it(1,1,1),Wr=new it,Au=new it,Xi=new it,ev=new Tn,nv=new Is;class Pa{constructor(t=0,i=0,r=0,l=Pa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],S=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,b),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,b),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(ze(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,b),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ze(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,b),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ze(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,b));break;case"XZY":this._z=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,b),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return ev.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ev,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return nv.setFromEuler(this),this.setFromQuaternion(nv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pa.DEFAULT_ORDER="XYZ";class Ax{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hM=0;const iv=new it,Co=new Is,rr=new Tn,Ru=new it,Vl=new it,dM=new it,pM=new Is,av=new it(1,0,0),rv=new it(0,1,0),sv=new it(0,0,1),ov={type:"added"},mM={type:"removed"},wo={type:"childadded",child:null},Vd={type:"childremoved",child:null};class oi extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=nc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=oi.DEFAULT_UP.clone();const t=new it,i=new Pa,r=new Is,l=new it(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Tn},normalMatrix:{value:new Fe}}),this.matrix=new Tn,this.matrixWorld=new Tn,this.matrixAutoUpdate=oi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=oi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ax,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Co.setFromAxisAngle(t,i),this.quaternion.multiply(Co),this}rotateOnWorldAxis(t,i){return Co.setFromAxisAngle(t,i),this.quaternion.premultiply(Co),this}rotateX(t){return this.rotateOnAxis(av,t)}rotateY(t){return this.rotateOnAxis(rv,t)}rotateZ(t){return this.rotateOnAxis(sv,t)}translateOnAxis(t,i){return iv.copy(t).applyQuaternion(this.quaternion),this.position.add(iv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(av,t)}translateY(t){return this.translateOnAxis(rv,t)}translateZ(t){return this.translateOnAxis(sv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(rr.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Ru.copy(t):Ru.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Vl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rr.lookAt(Vl,Ru,this.up):rr.lookAt(Ru,Vl,this.up),this.quaternion.setFromRotationMatrix(rr),l&&(rr.extractRotation(l.matrixWorld),Co.setFromRotationMatrix(rr),this.quaternion.premultiply(Co.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(nn("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ov),wo.child=t,this.dispatchEvent(wo),wo.child=null):nn("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(mM),Vd.child=t,this.dispatchEvent(Vd),Vd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),rr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),rr.multiply(t.parent.matrixWorld)),t.applyMatrix4(rr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ov),wo.child=t,this.dispatchEvent(wo),wo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vl,t,dM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vl,pM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),_=h(t.shapes),S=h(t.skeletons),b=h(t.animations),T=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),S.length>0&&(r.skeletons=S),b.length>0&&(r.animations=b),T.length>0&&(r.nodes=T)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}oi.DEFAULT_UP=new it(0,1,0);oi.DEFAULT_MATRIX_AUTO_UPDATE=!0;oi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _a=new it,sr=new it,kd=new it,or=new it,Do=new it,Uo=new it,lv=new it,Xd=new it,Wd=new it,jd=new it,Yd=new Ln,qd=new Ln,Zd=new Ln;class va{constructor(t=new it,i=new it,r=new it){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),_a.subVectors(t,i),l.cross(_a);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){_a.subVectors(l,i),sr.subVectors(r,i),kd.subVectors(t,i);const h=_a.dot(_a),d=_a.dot(sr),m=_a.dot(kd),p=sr.dot(sr),g=sr.dot(kd),_=h*p-d*d;if(_===0)return c.set(0,0,0),null;const S=1/_,b=(p*m-d*g)*S,T=(h*g-d*m)*S;return c.set(1-b-T,T,b)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,or)===null?!1:or.x>=0&&or.y>=0&&or.x+or.y<=1}static getInterpolation(t,i,r,l,c,h,d,m){return this.getBarycoord(t,i,r,l,or)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,or.x),m.addScaledVector(h,or.y),m.addScaledVector(d,or.z),m)}static getInterpolatedAttribute(t,i,r,l,c,h){return Yd.setScalar(0),qd.setScalar(0),Zd.setScalar(0),Yd.fromBufferAttribute(t,i),qd.fromBufferAttribute(t,r),Zd.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Yd,c.x),h.addScaledVector(qd,c.y),h.addScaledVector(Zd,c.z),h}static isFrontFacing(t,i,r,l){return _a.subVectors(r,i),sr.subVectors(t,i),_a.cross(sr).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _a.subVectors(this.c,this.b),sr.subVectors(this.a,this.b),_a.cross(sr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return va.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return va.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return va.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return va.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return va.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let h,d;Do.subVectors(l,r),Uo.subVectors(c,r),Xd.subVectors(t,r);const m=Do.dot(Xd),p=Uo.dot(Xd);if(m<=0&&p<=0)return i.copy(r);Wd.subVectors(t,l);const g=Do.dot(Wd),_=Uo.dot(Wd);if(g>=0&&_<=g)return i.copy(l);const S=m*_-g*p;if(S<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(Do,h);jd.subVectors(t,c);const b=Do.dot(jd),T=Uo.dot(jd);if(T>=0&&b<=T)return i.copy(c);const R=b*p-m*T;if(R<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(r).addScaledVector(Uo,d);const E=g*T-b*_;if(E<=0&&_-g>=0&&b-T>=0)return lv.subVectors(c,l),d=(_-g)/(_-g+(b-T)),i.copy(l).addScaledVector(lv,d);const x=1/(E+R+S);return h=R*x,d=S*x,i.copy(r).addScaledVector(Do,h).addScaledVector(Uo,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Rx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jr={h:0,s:0,l:0},Cu={h:0,s:0,l:0};function Kd(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class He{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ji){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$e.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=$e.workingColorSpace){return this.r=t,this.g=i,this.b=r,$e.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=$e.workingColorSpace){if(t=eM(t,1),i=ze(i,0,1),r=ze(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=Kd(h,c,t+1/3),this.g=Kd(h,c,t),this.b=Kd(h,c,t-1/3)}return $e.colorSpaceToWorking(this,l),this}setStyle(t,i=ji){function r(c){c!==void 0&&parseFloat(c)<1&&Ae("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:Ae("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);Ae("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ji){const r=Rx[t.toLowerCase()];return r!==void 0?this.setHex(r,i):Ae("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fr(t.r),this.g=fr(t.g),this.b=fr(t.b),this}copyLinearToSRGB(t){return this.r=Ho(t.r),this.g=Ho(t.g),this.b=Ho(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ji){return $e.workingToColorSpace(fi.copy(this),t),Math.round(ze(fi.r*255,0,255))*65536+Math.round(ze(fi.g*255,0,255))*256+Math.round(ze(fi.b*255,0,255))}getHexString(t=ji){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=$e.workingColorSpace){$e.workingToColorSpace(fi.copy(this),i);const r=fi.r,l=fi.g,c=fi.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=g<=.5?_/(h+d):_/(2-h-d),h){case r:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-r)/_+2;break;case c:m=(r-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=$e.workingColorSpace){return $e.workingToColorSpace(fi.copy(this),i),t.r=fi.r,t.g=fi.g,t.b=fi.b,t}getStyle(t=ji){$e.workingToColorSpace(fi.copy(this),t);const i=fi.r,r=fi.g,l=fi.b;return t!==ji?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(jr),this.setHSL(jr.h+t,jr.s+i,jr.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(jr),t.getHSL(Cu);const r=Ld(jr.h,Cu.h,i),l=Ld(jr.s,Cu.s,i),c=Ld(jr.l,Cu.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fi=new He;He.NAMES=Rx;let gM=0;class zs extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=nc(),this.name="",this.type="Material",this.blending=zo,this.side=Qr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pp,this.blendDst=mp,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Y_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mo,this.stencilZFail=Mo,this.stencilZPass=Mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){Ae(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Ae(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==zo&&(r.blending=this.blending),this.side!==Qr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==pp&&(r.blendSrc=this.blendSrc),this.blendDst!==mp&&(r.blendDst=this.blendDst),this.blendEquation!==Ls&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Go&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Y_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mo&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Mo&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Mo&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class bm extends zs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pa,this.combine=lx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Xn=new it,wu=new Le;let _M=0;class qn{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_M++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=q_,this.updateRanges=[],this.gpuType=Da,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)wu.fromBufferAttribute(this,i),wu.applyMatrix3(t),this.setXY(i,wu.x,wu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Xn.fromBufferAttribute(this,i),Xn.applyMatrix3(t),this.setXYZ(i,Xn.x,Xn.y,Xn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)Xn.fromBufferAttribute(this,i),Xn.applyMatrix4(t),this.setXYZ(i,Xn.x,Xn.y,Xn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Xn.fromBufferAttribute(this,i),Xn.applyNormalMatrix(t),this.setXYZ(i,Xn.x,Xn.y,Xn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Xn.fromBufferAttribute(this,i),Xn.transformDirection(t),this.setXYZ(i,Xn.x,Xn.y,Xn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=zl(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ui(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=zl(i,this.array)),i}setX(t,i){return this.normalized&&(i=Ui(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=zl(i,this.array)),i}setY(t,i){return this.normalized&&(i=Ui(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=zl(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Ui(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=zl(i,this.array)),i}setW(t,i){return this.normalized&&(i=Ui(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Ui(i,this.array),r=Ui(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Ui(i,this.array),r=Ui(r,this.array),l=Ui(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Ui(i,this.array),r=Ui(r,this.array),l=Ui(l,this.array),c=Ui(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==q_&&(t.usage=this.usage),t}}class Cx extends qn{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class wx extends qn{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class xi extends qn{constructor(t,i,r){super(new Float32Array(t),i,r)}}let vM=0;const la=new Tn,Qd=new oi,Lo=new it,Wi=new jo,kl=new jo,Jn=new it;class ti extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=nc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ex(t)?wx:Cx)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new Fe().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return la.makeRotationFromQuaternion(t),this.applyMatrix4(la),this}rotateX(t){return la.makeRotationX(t),this.applyMatrix4(la),this}rotateY(t){return la.makeRotationY(t),this.applyMatrix4(la),this}rotateZ(t){return la.makeRotationZ(t),this.applyMatrix4(la),this}translate(t,i,r){return la.makeTranslation(t,i,r),this.applyMatrix4(la),this}scale(t,i,r){return la.makeScale(t,i,r),this.applyMatrix4(la),this}lookAt(t){return Qd.lookAt(t),Qd.updateMatrix(),this.applyMatrix4(Qd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lo).negate(),this.translate(Lo.x,Lo.y,Lo.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new xi(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){nn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];Wi.setFromBufferAttribute(c),this.morphTargetsRelative?(Jn.addVectors(this.boundingBox.min,Wi.min),this.boundingBox.expandByPoint(Jn),Jn.addVectors(this.boundingBox.max,Wi.max),this.boundingBox.expandByPoint(Jn)):(this.boundingBox.expandByPoint(Wi.min),this.boundingBox.expandByPoint(Wi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cf);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){nn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(t){const r=this.boundingSphere.center;if(Wi.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];kl.setFromBufferAttribute(d),this.morphTargetsRelative?(Jn.addVectors(Wi.min,kl.min),Wi.expandByPoint(Jn),Jn.addVectors(Wi.max,kl.max),Wi.expandByPoint(Jn)):(Wi.expandByPoint(kl.min),Wi.expandByPoint(kl.max))}Wi.getCenter(r);let l=0;for(let c=0,h=t.count;c<h;c++)Jn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(Jn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)Jn.fromBufferAttribute(d,p),m&&(Lo.fromBufferAttribute(t,p),Jn.add(Lo)),l=Math.max(l,r.distanceToSquared(Jn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&nn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){nn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qn(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let j=0;j<r.count;j++)d[j]=new it,m[j]=new it;const p=new it,g=new it,_=new it,S=new Le,b=new Le,T=new Le,R=new it,E=new it;function x(j,C,U){p.fromBufferAttribute(r,j),g.fromBufferAttribute(r,C),_.fromBufferAttribute(r,U),S.fromBufferAttribute(c,j),b.fromBufferAttribute(c,C),T.fromBufferAttribute(c,U),g.sub(p),_.sub(p),b.sub(S),T.sub(S);const X=1/(b.x*T.y-T.x*b.y);isFinite(X)&&(R.copy(g).multiplyScalar(T.y).addScaledVector(_,-b.y).multiplyScalar(X),E.copy(_).multiplyScalar(b.x).addScaledVector(g,-T.x).multiplyScalar(X),d[j].add(R),d[C].add(R),d[U].add(R),m[j].add(E),m[C].add(E),m[U].add(E))}let F=this.groups;F.length===0&&(F=[{start:0,count:t.count}]);for(let j=0,C=F.length;j<C;++j){const U=F[j],X=U.start,$=U.count;for(let rt=X,tt=X+$;rt<tt;rt+=3)x(t.getX(rt+0),t.getX(rt+1),t.getX(rt+2))}const N=new it,O=new it,z=new it,P=new it;function I(j){z.fromBufferAttribute(l,j),P.copy(z);const C=d[j];N.copy(C),N.sub(z.multiplyScalar(z.dot(C))).normalize(),O.crossVectors(P,C);const X=O.dot(m[j])<0?-1:1;h.setXYZW(j,N.x,N.y,N.z,X)}for(let j=0,C=F.length;j<C;++j){const U=F[j],X=U.start,$=U.count;for(let rt=X,tt=X+$;rt<tt;rt+=3)I(t.getX(rt+0)),I(t.getX(rt+1)),I(t.getX(rt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new qn(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,b=r.count;S<b;S++)r.setXYZ(S,0,0,0);const l=new it,c=new it,h=new it,d=new it,m=new it,p=new it,g=new it,_=new it;if(t)for(let S=0,b=t.count;S<b;S+=3){const T=t.getX(S+0),R=t.getX(S+1),E=t.getX(S+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,E),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(r,T),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,E),d.add(g),m.add(g),p.add(g),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(E,p.x,p.y,p.z)}else for(let S=0,b=i.count;S<b;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),r.setXYZ(S+0,g.x,g.y,g.z),r.setXYZ(S+1,g.x,g.y,g.z),r.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Jn.fromBufferAttribute(t,i),Jn.normalize(),t.setXYZ(i,Jn.x,Jn.y,Jn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,_=d.normalized,S=new p.constructor(m.length*g);let b=0,T=0;for(let R=0,E=m.length;R<E;R++){d.isInterleavedBufferAttribute?b=m[R]*d.data.stride+d.offset:b=m[R]*g;for(let x=0;x<g;x++)S[T++]=p[b++]}return new qn(S,g,_)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ti,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const S=p[g],b=t(S,r);m.push(b)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,S=p.length;_<S;_++){const b=p[_];g.push(b.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let S=0,b=_.length;S<b;S++)g.push(_[S].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cv=new Tn,Cs=new Mm,Du=new cf,uv=new it,Uu=new it,Lu=new it,Nu=new it,$d=new it,Ou=new it,fv=new it,Pu=new it;class Ni extends oi{constructor(t=new ti,i=new bm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Ou.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&($d.fromBufferAttribute(_,t),h?Ou.addScaledVector($d,g):Ou.addScaledVector($d.sub(i),g))}i.add(Ou)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Du.copy(r.boundingSphere),Du.applyMatrix4(c),Cs.copy(t.ray).recast(t.near),!(Du.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(Du,uv)===null||Cs.origin.distanceToSquared(uv)>(t.far-t.near)**2))&&(cv.copy(c).invert(),Cs.copy(t.ray).applyMatrix4(cv),!(r.boundingBox!==null&&Cs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,Cs)))}_computeIntersections(t,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,S=c.groups,b=c.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,R=S.length;T<R;T++){const E=S[T],x=h[E.materialIndex],F=Math.max(E.start,b.start),N=Math.min(d.count,Math.min(E.start+E.count,b.start+b.count));for(let O=F,z=N;O<z;O+=3){const P=d.getX(O),I=d.getX(O+1),j=d.getX(O+2);l=Fu(this,x,t,r,p,g,_,P,I,j),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=E.materialIndex,i.push(l))}}else{const T=Math.max(0,b.start),R=Math.min(d.count,b.start+b.count);for(let E=T,x=R;E<x;E+=3){const F=d.getX(E),N=d.getX(E+1),O=d.getX(E+2);l=Fu(this,h,t,r,p,g,_,F,N,O),l&&(l.faceIndex=Math.floor(E/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,R=S.length;T<R;T++){const E=S[T],x=h[E.materialIndex],F=Math.max(E.start,b.start),N=Math.min(m.count,Math.min(E.start+E.count,b.start+b.count));for(let O=F,z=N;O<z;O+=3){const P=O,I=O+1,j=O+2;l=Fu(this,x,t,r,p,g,_,P,I,j),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=E.materialIndex,i.push(l))}}else{const T=Math.max(0,b.start),R=Math.min(m.count,b.start+b.count);for(let E=T,x=R;E<x;E+=3){const F=E,N=E+1,O=E+2;l=Fu(this,h,t,r,p,g,_,F,N,O),l&&(l.faceIndex=Math.floor(E/3),i.push(l))}}}}function xM(s,t,i,r,l,c,h,d){let m;if(t.side===Oi?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,t.side===Qr,d),m===null)return null;Pu.copy(d),Pu.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Pu);return p<i.near||p>i.far?null:{distance:p,point:Pu.clone(),object:s}}function Fu(s,t,i,r,l,c,h,d,m,p){s.getVertexPosition(d,Uu),s.getVertexPosition(m,Lu),s.getVertexPosition(p,Nu);const g=xM(s,t,i,r,Uu,Lu,Nu,fv);if(g){const _=new it;va.getBarycoord(fv,Uu,Lu,Nu,_),l&&(g.uv=va.getInterpolatedAttribute(l,d,m,p,_,new Le)),c&&(g.uv1=va.getInterpolatedAttribute(c,d,m,p,_,new Le)),h&&(g.normal=va.getInterpolatedAttribute(h,d,m,p,_,new it),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new it,materialIndex:0};va.getNormal(Uu,Lu,Nu,S.normal),g.face=S,g.barycoord=_}return g}class ic extends ti{constructor(t=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],_=[];let S=0,b=0;T("z","y","x",-1,-1,r,i,t,h,c,0),T("z","y","x",1,-1,r,i,-t,h,c,1),T("x","z","y",1,1,t,r,i,l,h,2),T("x","z","y",1,-1,t,r,-i,l,h,3),T("x","y","z",1,-1,t,i,r,l,c,4),T("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new xi(p,3)),this.setAttribute("normal",new xi(g,3)),this.setAttribute("uv",new xi(_,2));function T(R,E,x,F,N,O,z,P,I,j,C){const U=O/I,X=z/j,$=O/2,rt=z/2,tt=P/2,xt=I+1,H=j+1;let Y=0,st=0;const Ft=new it;for(let Nt=0;Nt<H;Nt++){const G=Nt*X-rt;for(let ct=0;ct<xt;ct++){const At=ct*U-$;Ft[R]=At*F,Ft[E]=G*N,Ft[x]=tt,p.push(Ft.x,Ft.y,Ft.z),Ft[R]=0,Ft[E]=0,Ft[x]=P>0?1:-1,g.push(Ft.x,Ft.y,Ft.z),_.push(ct/I),_.push(1-Nt/j),Y+=1}}for(let Nt=0;Nt<j;Nt++)for(let G=0;G<I;G++){const ct=S+G+xt*Nt,At=S+G+xt*(Nt+1),Gt=S+(G+1)+xt*(Nt+1),kt=S+(G+1)+xt*Nt;m.push(ct,At,kt),m.push(At,Gt,kt),st+=6}d.addGroup(b,st,C),b+=st,S+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ic(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Wo(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function _i(s){const t={};for(let i=0;i<s.length;i++){const r=Wo(s[i]);for(const l in r)t[l]=r[l]}return t}function yM(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function Dx(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$e.workingColorSpace}const SM={clone:Wo,merge:_i};var MM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fa extends zs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=MM,this.fragmentShader=bM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wo(t.uniforms),this.uniformsGroups=yM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Ux extends oi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tn,this.projectionMatrix=new Tn,this.projectionMatrixInverse=new Tn,this.coordinateSystem=Ua,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yr=new it,hv=new Le,dv=new Le;class ca extends Ux{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=rm*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ku*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rm*2*Math.atan(Math.tan(Ku*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yr.x,Yr.y).multiplyScalar(-t/Yr.z),Yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Yr.x,Yr.y).multiplyScalar(-t/Yr.z)}getViewSize(t,i){return this.getViewBounds(t,hv,dv),i.subVectors(dv,hv)}setViewOffset(t,i,r,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Ku*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const No=-90,Oo=1;class EM extends oi{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ca(No,Oo,t,i);l.layers=this.layers,this.add(l);const c=new ca(No,Oo,t,i);c.layers=this.layers,this.add(c);const h=new ca(No,Oo,t,i);h.layers=this.layers,this.add(h);const d=new ca(No,Oo,t,i);d.layers=this.layers,this.add(d);const m=new ca(No,Oo,t,i);m.layers=this.layers,this.add(m);const p=new ca(No,Oo,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Ua)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===nf)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,g]=this.children,_=t.getRenderTarget(),S=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=R,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(_,S,b),t.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Lx extends vi{constructor(t=[],i=Fs,r,l,c,h,d,m,p,g){super(t,i,r,l,c,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Nx extends Na{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Lx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ic(5,5,5),c=new Fa({name:"CubemapFromEquirect",uniforms:Wo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Oi,blending:ur});c.uniforms.tEquirect.value=i;const h=new Ni(l,c),d=i.minFilter;return i.minFilter===Os&&(i.minFilter=hi),new EM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(c)}}class ql extends oi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TM={type:"move"};class Jd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ql,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ql,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ql,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const R of t.hand.values()){const E=i.getJointPose(R,r),x=this._getHandJoint(p,R);E!==null&&(x.matrix.fromArray(E.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=E.radius),x.visible=E!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],S=g.position.distanceTo(_.position),b=.02,T=.005;p.inputState.pinching&&S>b+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=b-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(TM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new ql;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class AM extends oi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pa,this.environmentIntensity=1,this.environmentRotation=new Pa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class RM extends vi{constructor(t=null,i=1,r=1,l,c,h,d,m,p=si,g=si,_,S){super(null,h,d,m,p,g,l,c,_,S),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const tp=new it,CM=new it,wM=new Fe;class qr{constructor(t=new it(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=tp.subVectors(r,i).cross(CM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(tp),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||wM.getNormalMatrix(t),l=this.coplanarPoint(tp).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new cf,DM=new Le(.5,.5),Iu=new it;class Em{constructor(t=new qr,i=new qr,r=new qr,l=new qr,c=new qr,h=new qr){this.planes=[t,i,r,l,c,h]}set(t,i,r,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Ua,r=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],g=c[4],_=c[5],S=c[6],b=c[7],T=c[8],R=c[9],E=c[10],x=c[11],F=c[12],N=c[13],O=c[14],z=c[15];if(l[0].setComponents(p-h,b-g,x-T,z-F).normalize(),l[1].setComponents(p+h,b+g,x+T,z+F).normalize(),l[2].setComponents(p+d,b+_,x+R,z+N).normalize(),l[3].setComponents(p-d,b-_,x-R,z-N).normalize(),r)l[4].setComponents(m,S,E,O).normalize(),l[5].setComponents(p-m,b-S,x-E,z-O).normalize();else if(l[4].setComponents(p-m,b-S,x-E,z-O).normalize(),i===Ua)l[5].setComponents(p+m,b+S,x+E,z+O).normalize();else if(i===nf)l[5].setComponents(m,S,E,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ws.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(t){ws.center.set(0,0,0);const i=DM.distanceTo(t.center);return ws.radius=.7071067811865476+i,ws.applyMatrix4(t.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Iu.x=l.normal.x>0?t.max.x:t.min.x,Iu.y=l.normal.y>0?t.max.y:t.min.y,Iu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Iu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class uf extends zs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const rf=new it,sf=new it,pv=new Tn,Xl=new Mm,Bu=new cf,ep=new it,mv=new it;class Qu extends oi{constructor(t=new ti,i=new uf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)rf.fromBufferAttribute(i,l-1),sf.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=rf.distanceTo(sf);t.setAttribute("lineDistance",new xi(r,1))}else Ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Bu.copy(r.boundingSphere),Bu.applyMatrix4(l),Bu.radius+=c,t.ray.intersectsSphere(Bu)===!1)return;pv.copy(l).invert(),Xl.copy(t.ray).applyMatrix4(pv);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=r.index,S=r.attributes.position;if(g!==null){const b=Math.max(0,h.start),T=Math.min(g.count,h.start+h.count);for(let R=b,E=T-1;R<E;R+=p){const x=g.getX(R),F=g.getX(R+1),N=zu(this,t,Xl,m,x,F,R);N&&i.push(N)}if(this.isLineLoop){const R=g.getX(T-1),E=g.getX(b),x=zu(this,t,Xl,m,R,E,T-1);x&&i.push(x)}}else{const b=Math.max(0,h.start),T=Math.min(S.count,h.start+h.count);for(let R=b,E=T-1;R<E;R+=p){const x=zu(this,t,Xl,m,R,R+1,R);x&&i.push(x)}if(this.isLineLoop){const R=zu(this,t,Xl,m,T-1,b,T-1);R&&i.push(R)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function zu(s,t,i,r,l,c,h){const d=s.geometry.attributes.position;if(rf.fromBufferAttribute(d,l),sf.fromBufferAttribute(d,c),i.distanceSqToSegment(rf,sf,ep,mv)>r)return;ep.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(ep);if(!(p<t.near||p>t.far))return{distance:p,point:mv.clone().applyMatrix4(s.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:s}}const gv=new it,_v=new it;class UM extends Qu{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)gv.fromBufferAttribute(i,l),_v.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+gv.distanceTo(_v);t.setAttribute("lineDistance",new xi(r,1))}else Ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ec extends vi{constructor(t,i,r=Oa,l,c,h,d=si,m=si,p,g=dr,_=1){if(g!==dr&&g!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:_};super(S,l,c,h,d,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Sm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class LM extends ec{constructor(t,i=Oa,r=Fs,l,c,h=si,d=si,m,p=dr){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,i,r,l,c,h,d,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Ox extends vi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ac extends ti{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,_=t/d,S=i/m,b=[],T=[],R=[],E=[];for(let x=0;x<g;x++){const F=x*S-h;for(let N=0;N<p;N++){const O=N*_-c;T.push(O,-F,0),R.push(0,0,1),E.push(N/d),E.push(1-x/m)}}for(let x=0;x<m;x++)for(let F=0;F<d;F++){const N=F+p*x,O=F+p*(x+1),z=F+1+p*(x+1),P=F+1+p*x;b.push(N,O,P),b.push(O,z,P)}this.setIndex(b),this.setAttribute("position",new xi(T,3)),this.setAttribute("normal",new xi(R,3)),this.setAttribute("uv",new xi(E,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ac(t.width,t.height,t.widthSegments,t.heightSegments)}}class NM extends Fa{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class OM extends zs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bx,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class np extends OM{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class PM extends zs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=WS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class FM extends zs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class IM extends uf{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}const vv={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class BM{constructor(t,i,r){const l=this;let c=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(g){d++,c===!1&&l.onStart!==void 0&&l.onStart(g,h,d),c=!0},this.itemEnd=function(g){h++,l.onProgress!==void 0&&l.onProgress(g,h,d),h===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,S=p.length;_<S;_+=2){const b=p[_],T=p[_+1];if(b.global&&(b.lastIndex=0),b.test(g))return T}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const zM=new BM;class Tm{constructor(t){this.manager=t!==void 0?t:zM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,c){r.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Tm.DEFAULT_MATERIAL_NAME="__DEFAULT";const lr={};class HM extends Error{constructor(t,i){super(t),this.response=i}}class GM extends Tm{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,i,r,l){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=vv.get(`file:${t}`);if(c!==void 0)return this.manager.itemStart(t),setTimeout(()=>{i&&i(c),this.manager.itemEnd(t)},0),c;if(lr[t]!==void 0){lr[t].push({onLoad:i,onProgress:r,onError:l});return}lr[t]=[],lr[t].push({onLoad:i,onProgress:r,onError:l});const h=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),d=this.mimeType,m=this.responseType;fetch(h).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&Ae("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const g=lr[t],_=p.body.getReader(),S=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),b=S?parseInt(S):0,T=b!==0;let R=0;const E=new ReadableStream({start(x){F();function F(){_.read().then(({done:N,value:O})=>{if(N)x.close();else{R+=O.byteLength;const z=new ProgressEvent("progress",{lengthComputable:T,loaded:R,total:b});for(let P=0,I=g.length;P<I;P++){const j=g[P];j.onProgress&&j.onProgress(z)}x.enqueue(O),F()}},N=>{x.error(N)})}}});return new Response(E)}else throw new HM(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(m){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(g=>new DOMParser().parseFromString(g,d));case"json":return p.json();default:if(d==="")return p.text();{const _=/charset="?([^;"\s]*)"?/i.exec(d),S=_&&_[1]?_[1].toLowerCase():void 0,b=new TextDecoder(S);return p.arrayBuffer().then(T=>b.decode(T))}}}).then(p=>{vv.add(`file:${t}`,p);const g=lr[t];delete lr[t];for(let _=0,S=g.length;_<S;_++){const b=g[_];b.onLoad&&b.onLoad(p)}}).catch(p=>{const g=lr[t];if(g===void 0)throw this.manager.itemError(t),p;delete lr[t];for(let _=0,S=g.length;_<S;_++){const b=g[_];b.onError&&b.onError(p)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Px extends oi{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new He(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const ip=new Tn,xv=new it,yv=new it;class VM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.mapType=qi,this.map=null,this.mapPass=null,this.matrix=new Tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Em,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new Ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;xv.setFromMatrixPosition(t.matrixWorld),i.position.copy(xv),yv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(yv),i.updateMatrixWorld(),ip.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ip,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(ip)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Am extends Ux{constructor(t=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class kM extends VM{constructor(){super(new Am(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sv extends Px{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(oi.DEFAULT_UP),this.updateMatrix(),this.target=new oi,this.shadow=new kM}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class XM extends Px{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class WM extends ca{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Mv{constructor(t=1,i=0,r=0){this.radius=t,this.phi=i,this.theta=r}set(t,i,r){return this.radius=t,this.phi=i,this.theta=r,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,r){return this.radius=Math.sqrt(t*t+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,r),this.phi=Math.acos(ze(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class bv extends UM{constructor(t=10,i=10,r=4473924,l=8947848){r=new He(r),l=new He(l);const c=i/2,h=t/i,d=t/2,m=[],p=[];for(let S=0,b=0,T=-d;S<=i;S++,T+=h){m.push(-d,0,T,d,0,T),m.push(T,0,-d,T,0,d);const R=S===c?r:l;R.toArray(p,b),b+=3,R.toArray(p,b),b+=3,R.toArray(p,b),b+=3,R.toArray(p,b),b+=3}const g=new ti;g.setAttribute("position",new xi(m,3)),g.setAttribute("color",new xi(p,3));const _=new uf({vertexColors:!0,toneMapped:!1});super(g,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}let jM=class extends Bs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Ae("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Ev(s,t,i,r){const l=YM(r);switch(i){case yx:return s*t;case Mx:return s*t/l.components*l.byteLength;case gm:return s*t/l.components*l.byteLength;case ko:return s*t*2/l.components*l.byteLength;case _m:return s*t*2/l.components*l.byteLength;case Sx:return s*t*3/l.components*l.byteLength;case xa:return s*t*4/l.components*l.byteLength;case vm:return s*t*4/l.components*l.byteLength;case ju:case Yu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case qu:case Zu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Cp:case Dp:return Math.max(s,16)*Math.max(t,8)/4;case Rp:case wp:return Math.max(s,8)*Math.max(t,8)/2;case Up:case Lp:case Op:case Pp:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Np:case Fp:case Ip:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Bp:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case zp:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Hp:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Gp:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Vp:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case kp:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Xp:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Wp:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case jp:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Yp:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case qp:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Zp:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Kp:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Qp:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case $p:case Jp:case tm:return Math.ceil(s/4)*Math.ceil(t/4)*16;case em:case nm:return Math.ceil(s/4)*Math.ceil(t/4)*8;case im:case am:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function YM(s){switch(s){case qi:case gx:return{byteLength:1,components:1};case $l:case _x:case hr:return{byteLength:2,components:1};case pm:case mm:return{byteLength:2,components:4};case Oa:case dm:case Da:return{byteLength:4,components:1};case vx:case xx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fm}}));typeof window<"u"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fm);function Fx(){let s=null,t=!1,i=null,r=null;function l(c,h){i(c,h),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function qM(s){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,S=s.createBuffer();s.bindBuffer(m,S),s.bufferData(m,p,g),d.onUploadCallback();let b;if(p instanceof Float32Array)b=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)b=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?b=s.HALF_FLOAT:b=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)b=s.SHORT;else if(p instanceof Uint32Array)b=s.UNSIGNED_INT;else if(p instanceof Int32Array)b=s.INT;else if(p instanceof Int8Array)b=s.BYTE;else if(p instanceof Uint8Array)b=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)b=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:b,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,m,p){const g=m.array,_=m.updateRanges;if(s.bindBuffer(p,d),_.length===0)s.bufferSubData(p,0,g);else{_.sort((b,T)=>b.start-T.start);let S=0;for(let b=1;b<_.length;b++){const T=_[S],R=_[b];R.start<=T.start+T.count+1?T.count=Math.max(T.count,R.start+R.count-T.start):(++S,_[S]=R)}_.length=S+1;for(let b=0,T=_.length;b<T;b++){const R=_[b];s.bufferSubData(p,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(s.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var ZM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,KM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,QM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$M=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ib=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ab=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ob=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lb=`#ifdef USE_IRIDESCENCE
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
#endif`,cb=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ub=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,fb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,db=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_b=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vb=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
} // validated`,xb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,yb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Eb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ab=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rb=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Cb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wb=`#ifdef USE_ENVMAP
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
#endif`,Db=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ub=`#ifdef USE_ENVMAP
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
#endif`,Lb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ob=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fb=`#ifdef USE_GRADIENTMAP
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
}`,Ib=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,Gb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,Vb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Yb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Kb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$b=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,aE=`#if defined( USE_POINTS_UV )
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
#endif`,rE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
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
vec3 nonPerturbedNormal = normal;`,dE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_E=`#ifdef USE_NORMALMAP
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
#endif`,vE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,SE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ME=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,EE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,TE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,AE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,RE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,DE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,UE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,LE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,NE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,OE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,FE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IE=`#ifdef USE_SKINNING
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
#endif`,BE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,GE=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,VE=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kE=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,XE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,eT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,iT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,aT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sT=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oT=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lT=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,cT=`uniform vec3 diffuse;
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
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,fT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,dT=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,mT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,_T=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,xT=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,ST=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MT=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,bT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ET=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,TT=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,AT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,RT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:ZM,alphahash_pars_fragment:KM,alphamap_fragment:QM,alphamap_pars_fragment:$M,alphatest_fragment:JM,alphatest_pars_fragment:tb,aomap_fragment:eb,aomap_pars_fragment:nb,batching_pars_vertex:ib,batching_vertex:ab,begin_vertex:rb,beginnormal_vertex:sb,bsdfs:ob,iridescence_fragment:lb,bumpmap_pars_fragment:cb,clipping_planes_fragment:ub,clipping_planes_pars_fragment:fb,clipping_planes_pars_vertex:hb,clipping_planes_vertex:db,color_fragment:pb,color_pars_fragment:mb,color_pars_vertex:gb,color_vertex:_b,common:vb,cube_uv_reflection_fragment:xb,defaultnormal_vertex:yb,displacementmap_pars_vertex:Sb,displacementmap_vertex:Mb,emissivemap_fragment:bb,emissivemap_pars_fragment:Eb,colorspace_fragment:Tb,colorspace_pars_fragment:Ab,envmap_fragment:Rb,envmap_common_pars_fragment:Cb,envmap_pars_fragment:wb,envmap_pars_vertex:Db,envmap_physical_pars_fragment:Gb,envmap_vertex:Ub,fog_vertex:Lb,fog_pars_vertex:Nb,fog_fragment:Ob,fog_pars_fragment:Pb,gradientmap_pars_fragment:Fb,lightmap_pars_fragment:Ib,lights_lambert_fragment:Bb,lights_lambert_pars_fragment:zb,lights_pars_begin:Hb,lights_toon_fragment:Vb,lights_toon_pars_fragment:kb,lights_phong_fragment:Xb,lights_phong_pars_fragment:Wb,lights_physical_fragment:jb,lights_physical_pars_fragment:Yb,lights_fragment_begin:qb,lights_fragment_maps:Zb,lights_fragment_end:Kb,logdepthbuf_fragment:Qb,logdepthbuf_pars_fragment:$b,logdepthbuf_pars_vertex:Jb,logdepthbuf_vertex:tE,map_fragment:eE,map_pars_fragment:nE,map_particle_fragment:iE,map_particle_pars_fragment:aE,metalnessmap_fragment:rE,metalnessmap_pars_fragment:sE,morphinstance_vertex:oE,morphcolor_vertex:lE,morphnormal_vertex:cE,morphtarget_pars_vertex:uE,morphtarget_vertex:fE,normal_fragment_begin:hE,normal_fragment_maps:dE,normal_pars_fragment:pE,normal_pars_vertex:mE,normal_vertex:gE,normalmap_pars_fragment:_E,clearcoat_normal_fragment_begin:vE,clearcoat_normal_fragment_maps:xE,clearcoat_pars_fragment:yE,iridescence_pars_fragment:SE,opaque_fragment:ME,packing:bE,premultiplied_alpha_fragment:EE,project_vertex:TE,dithering_fragment:AE,dithering_pars_fragment:RE,roughnessmap_fragment:CE,roughnessmap_pars_fragment:wE,shadowmap_pars_fragment:DE,shadowmap_pars_vertex:UE,shadowmap_vertex:LE,shadowmask_pars_fragment:NE,skinbase_vertex:OE,skinning_pars_vertex:PE,skinning_vertex:FE,skinnormal_vertex:IE,specularmap_fragment:BE,specularmap_pars_fragment:zE,tonemapping_fragment:HE,tonemapping_pars_fragment:GE,transmission_fragment:VE,transmission_pars_fragment:kE,uv_pars_fragment:XE,uv_pars_vertex:WE,uv_vertex:jE,worldpos_vertex:YE,background_vert:qE,background_frag:ZE,backgroundCube_vert:KE,backgroundCube_frag:QE,cube_vert:$E,cube_frag:JE,depth_vert:tT,depth_frag:eT,distance_vert:nT,distance_frag:iT,equirect_vert:aT,equirect_frag:rT,linedashed_vert:sT,linedashed_frag:oT,meshbasic_vert:lT,meshbasic_frag:cT,meshlambert_vert:uT,meshlambert_frag:fT,meshmatcap_vert:hT,meshmatcap_frag:dT,meshnormal_vert:pT,meshnormal_frag:mT,meshphong_vert:gT,meshphong_frag:_T,meshphysical_vert:vT,meshphysical_frag:xT,meshtoon_vert:yT,meshtoon_frag:ST,points_vert:MT,points_frag:bT,shadow_vert:ET,shadow_frag:TT,sprite_vert:AT,sprite_frag:RT},ee={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},wa={basic:{uniforms:_i([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:_i([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new He(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:_i([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:_i([ee.common,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.roughnessmap,ee.metalnessmap,ee.fog,ee.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:_i([ee.common,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.gradientmap,ee.fog,ee.lights,{emissive:{value:new He(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:_i([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:_i([ee.points,ee.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:_i([ee.common,ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:_i([ee.common,ee.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:_i([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:_i([ee.sprite,ee.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:_i([ee.common,ee.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:_i([ee.lights,ee.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};wa.physical={uniforms:_i([wa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Hu={r:0,b:0,g:0},Ds=new Pa,CT=new Tn;function wT(s,t,i,r,l,c,h){const d=new He(0);let m=c===!0?0:1,p,g,_=null,S=0,b=null;function T(N){let O=N.isScene===!0?N.background:null;return O&&O.isTexture&&(O=(N.backgroundBlurriness>0?i:t).get(O)),O}function R(N){let O=!1;const z=T(N);z===null?x(d,m):z&&z.isColor&&(x(z,1),O=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?r.buffers.color.setClear(0,0,0,1,h):P==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||O)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function E(N,O){const z=T(O);z&&(z.isCubeTexture||z.mapping===lf)?(g===void 0&&(g=new Ni(new ic(1,1,1),new Fa({name:"BackgroundCubeMaterial",uniforms:Wo(wa.backgroundCube.uniforms),vertexShader:wa.backgroundCube.vertexShader,fragmentShader:wa.backgroundCube.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(P,I,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Ds.copy(O.backgroundRotation),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),g.material.uniforms.envMap.value=z,g.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(CT.makeRotationFromEuler(Ds)),g.material.toneMapped=$e.getTransfer(z.colorSpace)!==fn,(_!==z||S!==z.version||b!==s.toneMapping)&&(g.material.needsUpdate=!0,_=z,S=z.version,b=s.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new Ni(new ac(2,2),new Fa({name:"BackgroundMaterial",uniforms:Wo(wa.background.uniforms),vertexShader:wa.background.vertexShader,fragmentShader:wa.background.fragmentShader,side:Qr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.toneMapped=$e.getTransfer(z.colorSpace)!==fn,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(_!==z||S!==z.version||b!==s.toneMapping)&&(p.material.needsUpdate=!0,_=z,S=z.version,b=s.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function x(N,O){N.getRGB(Hu,Dx(s)),r.buffers.color.setClear(Hu.r,Hu.g,Hu.b,O,h)}function F(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,O=1){d.set(N),m=O,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,x(d,m)},render:R,addToRenderList:E,dispose:F}}function DT(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=S(null);let c=l,h=!1;function d(U,X,$,rt,tt){let xt=!1;const H=_(rt,$,X);c!==H&&(c=H,p(c.object)),xt=b(U,rt,$,tt),xt&&T(U,rt,$,tt),tt!==null&&t.update(tt,s.ELEMENT_ARRAY_BUFFER),(xt||h)&&(h=!1,O(U,X,$,rt),tt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function m(){return s.createVertexArray()}function p(U){return s.bindVertexArray(U)}function g(U){return s.deleteVertexArray(U)}function _(U,X,$){const rt=$.wireframe===!0;let tt=r[U.id];tt===void 0&&(tt={},r[U.id]=tt);let xt=tt[X.id];xt===void 0&&(xt={},tt[X.id]=xt);let H=xt[rt];return H===void 0&&(H=S(m()),xt[rt]=H),H}function S(U){const X=[],$=[],rt=[];for(let tt=0;tt<i;tt++)X[tt]=0,$[tt]=0,rt[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:$,attributeDivisors:rt,object:U,attributes:{},index:null}}function b(U,X,$,rt){const tt=c.attributes,xt=X.attributes;let H=0;const Y=$.getAttributes();for(const st in Y)if(Y[st].location>=0){const Nt=tt[st];let G=xt[st];if(G===void 0&&(st==="instanceMatrix"&&U.instanceMatrix&&(G=U.instanceMatrix),st==="instanceColor"&&U.instanceColor&&(G=U.instanceColor)),Nt===void 0||Nt.attribute!==G||G&&Nt.data!==G.data)return!0;H++}return c.attributesNum!==H||c.index!==rt}function T(U,X,$,rt){const tt={},xt=X.attributes;let H=0;const Y=$.getAttributes();for(const st in Y)if(Y[st].location>=0){let Nt=xt[st];Nt===void 0&&(st==="instanceMatrix"&&U.instanceMatrix&&(Nt=U.instanceMatrix),st==="instanceColor"&&U.instanceColor&&(Nt=U.instanceColor));const G={};G.attribute=Nt,Nt&&Nt.data&&(G.data=Nt.data),tt[st]=G,H++}c.attributes=tt,c.attributesNum=H,c.index=rt}function R(){const U=c.newAttributes;for(let X=0,$=U.length;X<$;X++)U[X]=0}function E(U){x(U,0)}function x(U,X){const $=c.newAttributes,rt=c.enabledAttributes,tt=c.attributeDivisors;$[U]=1,rt[U]===0&&(s.enableVertexAttribArray(U),rt[U]=1),tt[U]!==X&&(s.vertexAttribDivisor(U,X),tt[U]=X)}function F(){const U=c.newAttributes,X=c.enabledAttributes;for(let $=0,rt=X.length;$<rt;$++)X[$]!==U[$]&&(s.disableVertexAttribArray($),X[$]=0)}function N(U,X,$,rt,tt,xt,H){H===!0?s.vertexAttribIPointer(U,X,$,tt,xt):s.vertexAttribPointer(U,X,$,rt,tt,xt)}function O(U,X,$,rt){R();const tt=rt.attributes,xt=$.getAttributes(),H=X.defaultAttributeValues;for(const Y in xt){const st=xt[Y];if(st.location>=0){let Ft=tt[Y];if(Ft===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(Ft=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(Ft=U.instanceColor)),Ft!==void 0){const Nt=Ft.normalized,G=Ft.itemSize,ct=t.get(Ft);if(ct===void 0)continue;const At=ct.buffer,Gt=ct.type,kt=ct.bytesPerElement,lt=Gt===s.INT||Gt===s.UNSIGNED_INT||Ft.gpuType===dm;if(Ft.isInterleavedBufferAttribute){const vt=Ft.data,Xt=vt.stride,ie=Ft.offset;if(vt.isInstancedInterleavedBuffer){for(let re=0;re<st.locationSize;re++)x(st.location+re,vt.meshPerAttribute);U.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let re=0;re<st.locationSize;re++)E(st.location+re);s.bindBuffer(s.ARRAY_BUFFER,At);for(let re=0;re<st.locationSize;re++)N(st.location+re,G/st.locationSize,Gt,Nt,Xt*kt,(ie+G/st.locationSize*re)*kt,lt)}else{if(Ft.isInstancedBufferAttribute){for(let vt=0;vt<st.locationSize;vt++)x(st.location+vt,Ft.meshPerAttribute);U.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=Ft.meshPerAttribute*Ft.count)}else for(let vt=0;vt<st.locationSize;vt++)E(st.location+vt);s.bindBuffer(s.ARRAY_BUFFER,At);for(let vt=0;vt<st.locationSize;vt++)N(st.location+vt,G/st.locationSize,Gt,Nt,G*kt,G/st.locationSize*vt*kt,lt)}}else if(H!==void 0){const Nt=H[Y];if(Nt!==void 0)switch(Nt.length){case 2:s.vertexAttrib2fv(st.location,Nt);break;case 3:s.vertexAttrib3fv(st.location,Nt);break;case 4:s.vertexAttrib4fv(st.location,Nt);break;default:s.vertexAttrib1fv(st.location,Nt)}}}}F()}function z(){j();for(const U in r){const X=r[U];for(const $ in X){const rt=X[$];for(const tt in rt)g(rt[tt].object),delete rt[tt];delete X[$]}delete r[U]}}function P(U){if(r[U.id]===void 0)return;const X=r[U.id];for(const $ in X){const rt=X[$];for(const tt in rt)g(rt[tt].object),delete rt[tt];delete X[$]}delete r[U.id]}function I(U){for(const X in r){const $=r[X];if($[U.id]===void 0)continue;const rt=$[U.id];for(const tt in rt)g(rt[tt].object),delete rt[tt];delete $[U.id]}}function j(){C(),h=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:C,dispose:z,releaseStatesOfGeometry:P,releaseStatesOfProgram:I,initAttributes:R,enableAttribute:E,disableUnusedAttributes:F}}function UT(s,t,i){let r;function l(p){r=p}function c(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,_){_!==0&&(s.drawArraysInstanced(r,p,g,_),i.update(g,r,_))}function d(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,_);let b=0;for(let T=0;T<_;T++)b+=g[T];i.update(b,r,1)}function m(p,g,_,S){if(_===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let T=0;T<p.length;T++)h(p[T],g[T],S[T]);else{b.multiDrawArraysInstancedWEBGL(r,p,0,g,0,S,0,_);let T=0;for(let R=0;R<_;R++)T+=g[R]*S[R];i.update(T,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function LT(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==xa&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const j=I===hr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==qi&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Da&&!j)}function m(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(Ae("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),b=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),E=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),F=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),O=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),z=s.getParameter(s.MAX_SAMPLES),P=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:b,maxVertexTextures:T,maxTextureSize:R,maxCubemapSize:E,maxAttributes:x,maxVertexUniforms:F,maxVaryings:N,maxFragmentUniforms:O,maxSamples:z,samples:P}}function NT(s){const t=this;let i=null,r=0,l=!1,c=!1;const h=new qr,d=new Fe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const b=_.length!==0||S||r!==0||l;return l=S,r=_.length,b},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,S){i=g(_,S,0)},this.setState=function(_,S,b){const T=_.clippingPlanes,R=_.clipIntersection,E=_.clipShadows,x=s.get(_);if(!l||T===null||T.length===0||c&&!E)c?g(null):p();else{const F=c?0:r,N=F*4;let O=x.clippingState||null;m.value=O,O=g(T,S,N,b);for(let z=0;z!==N;++z)O[z]=i[z];x.clippingState=O,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=F}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(_,S,b,T){const R=_!==null?_.length:0;let E=null;if(R!==0){if(E=m.value,T!==!0||E===null){const x=b+R*4,F=S.matrixWorldInverse;d.getNormalMatrix(F),(E===null||E.length<x)&&(E=new Float32Array(x));for(let N=0,O=b;N!==R;++N,O+=4)h.copy(_[N]).applyMatrix4(F,d),h.normal.toArray(E,O),E[O+3]=h.constant}m.value=E,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,E}}function OT(s){let t=new WeakMap;function i(h,d){return d===bp?h.mapping=Fs:d===Ep&&(h.mapping=Vo),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===bp||d===Ep)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Nx(m.height);return p.fromEquirectangularTexture(s,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const Kr=4,Tv=[.125,.215,.35,.446,.526,.582],Ns=20,PT=256,Wl=new Am,Av=new He;let ap=null,rp=0,sp=0,op=!1;const FT=new it;class Rv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=FT}=c;ap=this._renderer.getRenderTarget(),rp=this._renderer.getActiveCubeFace(),sp=this._renderer.getActiveMipmapLevel(),op=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ap,rp,sp),this._renderer.xr.enabled=op,t.scissorTest=!1,Po(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Fs||t.mapping===Vo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ap=this._renderer.getRenderTarget(),rp=this._renderer.getActiveCubeFace(),sp=this._renderer.getActiveMipmapLevel(),op=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:hr,format:xa,colorSpace:Xo,depthBuffer:!1},l=Cv(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cv(t,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=IT(c)),this._blurMaterial=zT(c,t,i),this._ggxMaterial=BT(c,t,i)}return l}_compileMaterial(t){const i=new Ni(new ti,t);this._renderer.compile(i,Wl)}_sceneToCubeUV(t,i,r,l,c){const m=new ca(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,b=_.toneMapping;_.getClearColor(Av),_.toneMapping=La,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ni(new ic,new bm({name:"PMREM.Background",side:Oi,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,E=R.material;let x=!1;const F=t.background;F?F.isColor&&(E.color.copy(F),t.background=null,x=!0):(E.color.copy(Av),x=!0);for(let N=0;N<6;N++){const O=N%3;O===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[N],c.y,c.z)):O===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[N]));const z=this._cubeSize;Po(l,O*z,N>2?z:0,z,z),_.setRenderTarget(l),x&&_.render(R,m),_.render(t,m)}_.toneMapping=b,_.autoClear=S,t.background=F}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Fs||t.mapping===Vo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wv());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Po(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Wl)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[r];d.material=h;const m=h.uniforms,p=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),S=0+p*1.25,b=_*S,{_lodMax:T}=this,R=this._sizeLods[r],E=3*R*(r>T-Kr?r-T+Kr:0),x=4*(this._cubeSize-R);m.envMap.value=t.texture,m.roughness.value=b,m.mipInt.value=T-i,Po(c,E,x,3*R,2*R),l.setRenderTarget(c),l.render(d,Wl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-r,Po(t,E,x,3*R,2*R),l.setRenderTarget(t),l.render(d,Wl)}_blur(t,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",c),this._halfBlur(h,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&nn("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=p;const S=p.uniforms,b=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*Ns-1),R=c/T,E=isFinite(c)?1+Math.floor(g*R):Ns;E>Ns&&Ae(`sigmaRadians, ${c}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${Ns}`);const x=[];let F=0;for(let I=0;I<Ns;++I){const j=I/R,C=Math.exp(-j*j/2);x.push(C),I===0?F+=C:I<E&&(F+=2*C)}for(let I=0;I<x.length;I++)x[I]=x[I]/F;S.envMap.value=t.texture,S.samples.value=E,S.weights.value=x,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:N}=this;S.dTheta.value=T,S.mipInt.value=N-r;const O=this._sizeLods[l],z=3*O*(l>N-Kr?l-N+Kr:0),P=4*(this._cubeSize-O);Po(i,z,P,3*O,2*O),m.setRenderTarget(i),m.render(_,Wl)}}function IT(s){const t=[],i=[],r=[];let l=s;const c=s-Kr+1+Tv.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>s-Kr?m=Tv[h-s+Kr-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),g=-p,_=1+p,S=[g,g,_,g,_,_,g,g,_,_,g,_],b=6,T=6,R=3,E=2,x=1,F=new Float32Array(R*T*b),N=new Float32Array(E*T*b),O=new Float32Array(x*T*b);for(let P=0;P<b;P++){const I=P%3*2/3-1,j=P>2?0:-1,C=[I,j,0,I+2/3,j,0,I+2/3,j+1,0,I,j,0,I+2/3,j+1,0,I,j+1,0];F.set(C,R*T*P),N.set(S,E*T*P);const U=[P,P,P,P,P,P];O.set(U,x*T*P)}const z=new ti;z.setAttribute("position",new qn(F,R)),z.setAttribute("uv",new qn(N,E)),z.setAttribute("faceIndex",new qn(O,x)),r.push(new Ni(z,null)),l>Kr&&l--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function Cv(s,t,i){const r=new Na(s,t,i);return r.texture.mapping=lf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Po(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function BT(s,t,i){return new Fa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:PT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ff(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function zT(s,t,i){const r=new Float32Array(Ns),l=new it(0,1,0);return new Fa({name:"SphericalGaussianBlur",defines:{n:Ns,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ff(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function wv(){return new Fa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ff(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Dv(){return new Fa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function ff(){return`

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
	`}function HT(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===bp||m===Ep,g=m===Fs||m===Vo;if(p||g){let _=t.get(d);const S=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new Rv(s)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const b=d.image;return p&&b&&b.height>0||g&&b&&l(b)?(i===null&&(i=new Rv(s)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function GT(s){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=s.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&tc("WebGLRenderer: "+r+" extension not supported."),l}}}function VT(s,t,i,r){const l={},c=new WeakMap;function h(_){const S=_.target;S.index!==null&&t.remove(S.index);for(const T in S.attributes)t.remove(S.attributes[T]);S.removeEventListener("dispose",h),delete l[S.id];const b=c.get(S);b&&(t.remove(b),c.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(_,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(_){const S=_.attributes;for(const b in S)t.update(S[b],s.ARRAY_BUFFER)}function p(_){const S=[],b=_.index,T=_.attributes.position;let R=0;if(b!==null){const F=b.array;R=b.version;for(let N=0,O=F.length;N<O;N+=3){const z=F[N+0],P=F[N+1],I=F[N+2];S.push(z,P,P,I,I,z)}}else if(T!==void 0){const F=T.array;R=T.version;for(let N=0,O=F.length/3-1;N<O;N+=3){const z=N+0,P=N+1,I=N+2;S.push(z,P,P,I,I,z)}}else return;const E=new(Ex(S)?wx:Cx)(S,1);E.version=R;const x=c.get(_);x&&t.remove(x),c.set(_,E)}function g(_){const S=c.get(_);if(S){const b=_.index;b!==null&&S.version<b.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function kT(s,t,i){let r;function l(S){r=S}let c,h;function d(S){c=S.type,h=S.bytesPerElement}function m(S,b){s.drawElements(r,b,c,S*h),i.update(b,r,1)}function p(S,b,T){T!==0&&(s.drawElementsInstanced(r,b,c,S*h,T),i.update(b,r,T))}function g(S,b,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,b,0,c,S,0,T);let E=0;for(let x=0;x<T;x++)E+=b[x];i.update(E,r,1)}function _(S,b,T,R){if(T===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let x=0;x<S.length;x++)p(S[x]/h,b[x],R[x]);else{E.multiDrawElementsInstancedWEBGL(r,b,0,c,S,0,R,0,T);let x=0;for(let F=0;F<T;F++)x+=b[F]*R[F];i.update(x,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function XT(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=d*(c/3);break;case s.LINES:i.lines+=d*(c/2);break;case s.LINE_STRIP:i.lines+=d*(c-1);break;case s.LINE_LOOP:i.lines+=d*c;break;case s.POINTS:i.points+=d*c;break;default:nn("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function WT(s,t,i){const r=new WeakMap,l=new Ln;function c(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let S=r.get(d);if(S===void 0||S.count!==_){let C=function(){I.dispose(),r.delete(d),d.removeEventListener("dispose",C)};S!==void 0&&S.texture.dispose();const b=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,R=d.morphAttributes.color!==void 0,E=d.morphAttributes.position||[],x=d.morphAttributes.normal||[],F=d.morphAttributes.color||[];let N=0;b===!0&&(N=1),T===!0&&(N=2),R===!0&&(N=3);let O=d.attributes.position.count*N,z=1;O>t.maxTextureSize&&(z=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const P=new Float32Array(O*z*4*_),I=new Tx(P,O,z,_);I.type=Da,I.needsUpdate=!0;const j=N*4;for(let U=0;U<_;U++){const X=E[U],$=x[U],rt=F[U],tt=O*z*4*U;for(let xt=0;xt<X.count;xt++){const H=xt*j;b===!0&&(l.fromBufferAttribute(X,xt),P[tt+H+0]=l.x,P[tt+H+1]=l.y,P[tt+H+2]=l.z,P[tt+H+3]=0),T===!0&&(l.fromBufferAttribute($,xt),P[tt+H+4]=l.x,P[tt+H+5]=l.y,P[tt+H+6]=l.z,P[tt+H+7]=0),R===!0&&(l.fromBufferAttribute(rt,xt),P[tt+H+8]=l.x,P[tt+H+9]=l.y,P[tt+H+10]=l.z,P[tt+H+11]=rt.itemSize===4?l.w:1)}}S={count:_,texture:I,size:new Le(O,z)},r.set(d,S),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let b=0;for(let R=0;R<p.length;R++)b+=p[R];const T=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(s,"morphTargetBaseInfluence",T),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",S.size)}return{update:c}}function jT(s,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const YT={[cx]:"LINEAR_TONE_MAPPING",[ux]:"REINHARD_TONE_MAPPING",[fx]:"CINEON_TONE_MAPPING",[hm]:"ACES_FILMIC_TONE_MAPPING",[dx]:"AGX_TONE_MAPPING",[px]:"NEUTRAL_TONE_MAPPING",[hx]:"CUSTOM_TONE_MAPPING"};function qT(s,t,i,r,l){const c=new Na(t,i,{type:s,depthBuffer:r,stencilBuffer:l}),h=new Na(t,i,{type:hr,depthBuffer:!1,stencilBuffer:!1}),d=new ti;d.setAttribute("position",new xi([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new xi([0,2,0,0,2,0],2));const m=new NM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Ni(d,m),g=new Am(-1,1,1,-1,0,1);let _=null,S=null,b=!1,T,R=null,E=[],x=!1;this.setSize=function(F,N){c.setSize(F,N),h.setSize(F,N);for(let O=0;O<E.length;O++){const z=E[O];z.setSize&&z.setSize(F,N)}},this.setEffects=function(F){E=F,x=E.length>0&&E[0].isRenderPass===!0;const N=c.width,O=c.height;for(let z=0;z<E.length;z++){const P=E[z];P.setSize&&P.setSize(N,O)}},this.begin=function(F,N){if(b||F.toneMapping===La&&E.length===0)return!1;if(R=N,N!==null){const O=N.width,z=N.height;(c.width!==O||c.height!==z)&&this.setSize(O,z)}return x===!1&&F.setRenderTarget(c),T=F.toneMapping,F.toneMapping=La,!0},this.hasRenderPass=function(){return x},this.end=function(F,N){F.toneMapping=T,b=!0;let O=c,z=h;for(let P=0;P<E.length;P++){const I=E[P];if(I.enabled!==!1&&(I.render(F,z,O,N),I.needsSwap!==!1)){const j=O;O=z,z=j}}if(_!==F.outputColorSpace||S!==F.toneMapping){_=F.outputColorSpace,S=F.toneMapping,m.defines={},$e.getTransfer(_)===fn&&(m.defines.SRGB_TRANSFER="");const P=YT[S];P&&(m.defines[P]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=O.texture,F.setRenderTarget(R),F.render(p,g),R=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const Ix=new vi,sm=new ec(1,1),Bx=new Tx,zx=new lM,Hx=new Lx,Uv=[],Lv=[],Nv=new Float32Array(16),Ov=new Float32Array(9),Pv=new Float32Array(4);function Yo(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=Uv[l];if(c===void 0&&(c=new Float32Array(l),Uv[l]=c),t!==0){r.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,s[h].toArray(c,d)}return c}function Zn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function Kn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function hf(s,t){let i=Lv[t];i===void 0&&(i=new Int32Array(t),Lv[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function ZT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function KT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Zn(i,t))return;s.uniform2fv(this.addr,t),Kn(i,t)}}function QT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Zn(i,t))return;s.uniform3fv(this.addr,t),Kn(i,t)}}function $T(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Zn(i,t))return;s.uniform4fv(this.addr,t),Kn(i,t)}}function JT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(Zn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),Kn(i,t)}else{if(Zn(i,r))return;Pv.set(r),s.uniformMatrix2fv(this.addr,!1,Pv),Kn(i,r)}}function t1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(Zn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),Kn(i,t)}else{if(Zn(i,r))return;Ov.set(r),s.uniformMatrix3fv(this.addr,!1,Ov),Kn(i,r)}}function e1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(Zn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),Kn(i,t)}else{if(Zn(i,r))return;Nv.set(r),s.uniformMatrix4fv(this.addr,!1,Nv),Kn(i,r)}}function n1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function i1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Zn(i,t))return;s.uniform2iv(this.addr,t),Kn(i,t)}}function a1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Zn(i,t))return;s.uniform3iv(this.addr,t),Kn(i,t)}}function r1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Zn(i,t))return;s.uniform4iv(this.addr,t),Kn(i,t)}}function s1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function o1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Zn(i,t))return;s.uniform2uiv(this.addr,t),Kn(i,t)}}function l1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Zn(i,t))return;s.uniform3uiv(this.addr,t),Kn(i,t)}}function c1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Zn(i,t))return;s.uniform4uiv(this.addr,t),Kn(i,t)}}function u1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(sm.compareFunction=i.isReversedDepthBuffer()?ym:xm,c=sm):c=Ix,i.setTexture2D(t||c,l)}function f1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||zx,l)}function h1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Hx,l)}function d1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||Bx,l)}function p1(s){switch(s){case 5126:return ZT;case 35664:return KT;case 35665:return QT;case 35666:return $T;case 35674:return JT;case 35675:return t1;case 35676:return e1;case 5124:case 35670:return n1;case 35667:case 35671:return i1;case 35668:case 35672:return a1;case 35669:case 35673:return r1;case 5125:return s1;case 36294:return o1;case 36295:return l1;case 36296:return c1;case 35678:case 36198:case 36298:case 36306:case 35682:return u1;case 35679:case 36299:case 36307:return f1;case 35680:case 36300:case 36308:case 36293:return h1;case 36289:case 36303:case 36311:case 36292:return d1}}function m1(s,t){s.uniform1fv(this.addr,t)}function g1(s,t){const i=Yo(t,this.size,2);s.uniform2fv(this.addr,i)}function _1(s,t){const i=Yo(t,this.size,3);s.uniform3fv(this.addr,i)}function v1(s,t){const i=Yo(t,this.size,4);s.uniform4fv(this.addr,i)}function x1(s,t){const i=Yo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function y1(s,t){const i=Yo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function S1(s,t){const i=Yo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function M1(s,t){s.uniform1iv(this.addr,t)}function b1(s,t){s.uniform2iv(this.addr,t)}function E1(s,t){s.uniform3iv(this.addr,t)}function T1(s,t){s.uniform4iv(this.addr,t)}function A1(s,t){s.uniform1uiv(this.addr,t)}function R1(s,t){s.uniform2uiv(this.addr,t)}function C1(s,t){s.uniform3uiv(this.addr,t)}function w1(s,t){s.uniform4uiv(this.addr,t)}function D1(s,t,i){const r=this.cache,l=t.length,c=hf(i,l);Zn(r,c)||(s.uniform1iv(this.addr,c),Kn(r,c));let h;this.type===s.SAMPLER_2D_SHADOW?h=sm:h=Ix;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,c[d])}function U1(s,t,i){const r=this.cache,l=t.length,c=hf(i,l);Zn(r,c)||(s.uniform1iv(this.addr,c),Kn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||zx,c[h])}function L1(s,t,i){const r=this.cache,l=t.length,c=hf(i,l);Zn(r,c)||(s.uniform1iv(this.addr,c),Kn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Hx,c[h])}function N1(s,t,i){const r=this.cache,l=t.length,c=hf(i,l);Zn(r,c)||(s.uniform1iv(this.addr,c),Kn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Bx,c[h])}function O1(s){switch(s){case 5126:return m1;case 35664:return g1;case 35665:return _1;case 35666:return v1;case 35674:return x1;case 35675:return y1;case 35676:return S1;case 5124:case 35670:return M1;case 35667:case 35671:return b1;case 35668:case 35672:return E1;case 35669:case 35673:return T1;case 5125:return A1;case 36294:return R1;case 36295:return C1;case 36296:return w1;case 35678:case 36198:case 36298:case 36306:case 35682:return D1;case 35679:case 36299:case 36307:return U1;case 35680:case 36300:case 36308:case 36293:return L1;case 36289:case 36303:case 36311:case 36292:return N1}}class P1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=p1(i.type)}}class F1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=O1(i.type)}}class I1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],r)}}}const lp=/(\w+)(\])?(\[|\.)?/g;function Fv(s,t){s.seq.push(t),s.map[t.id]=t}function B1(s,t,i){const r=s.name,l=r.length;for(lp.lastIndex=0;;){const c=lp.exec(r),h=lp.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){Fv(i,p===void 0?new P1(d,s,t):new F1(d,s,t));break}else{let _=i.map[d];_===void 0&&(_=new I1(d),Fv(i,_)),i=_}}}class $u{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<r;++h){const d=t.getActiveUniform(i,h),m=t.getUniformLocation(i,d.name);B1(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function Iv(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const z1=37297;let H1=0;function G1(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const Bv=new Fe;function V1(s){$e._getMatrix(Bv,$e.workingColorSpace,s);const t=`mat3( ${Bv.elements.map(i=>i.toFixed(4))} )`;switch($e.getTransfer(s)){case ef:return[t,"LinearTransferOETF"];case fn:return[t,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function zv(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+G1(s.getShaderSource(t),d)}else return c}function k1(s,t){const i=V1(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const X1={[cx]:"Linear",[ux]:"Reinhard",[fx]:"Cineon",[hm]:"ACESFilmic",[dx]:"AgX",[px]:"Neutral",[hx]:"Custom"};function W1(s,t){const i=X1[t];return i===void 0?(Ae("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Gu=new it;function j1(){$e.getLuminanceCoefficients(Gu);const s=Gu.x.toFixed(4),t=Gu.y.toFixed(4),i=Gu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zl).join(`
`)}function q1(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function Z1(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),h=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:s.getAttribLocation(t,h),locationSize:d}}return i}function Zl(s){return s!==""}function Hv(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gv(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const K1=/^[ \t]*#include +<([\w\d./]+)>/gm;function om(s){return s.replace(K1,$1)}const Q1=new Map;function $1(s,t){let i=Be[t];if(i===void 0){const r=Q1.get(t);if(r!==void 0)i=Be[r],Ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return om(i)}const J1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vv(s){return s.replace(J1,tA)}function tA(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function kv(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const eA={[Wu]:"SHADOWMAP_TYPE_PCF",[Yl]:"SHADOWMAP_TYPE_VSM"};function nA(s){return eA[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const iA={[Fs]:"ENVMAP_TYPE_CUBE",[Vo]:"ENVMAP_TYPE_CUBE",[lf]:"ENVMAP_TYPE_CUBE_UV"};function aA(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":iA[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const rA={[Vo]:"ENVMAP_MODE_REFRACTION"};function sA(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":rA[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const oA={[lx]:"ENVMAP_BLENDING_MULTIPLY",[VS]:"ENVMAP_BLENDING_MIX",[kS]:"ENVMAP_BLENDING_ADD"};function lA(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":oA[s.combine]||"ENVMAP_BLENDING_NONE"}function cA(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function uA(s,t,i,r){const l=s.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=nA(i),p=aA(i),g=sA(i),_=lA(i),S=cA(i),b=Y1(i),T=q1(c),R=l.createProgram();let E,x,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(E=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Zl).join(`
`),E.length>0&&(E+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Zl).join(`
`),x.length>0&&(x+=`
`)):(E=[kv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zl).join(`
`),x=[kv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==La?"#define TONE_MAPPING":"",i.toneMapping!==La?Be.tonemapping_pars_fragment:"",i.toneMapping!==La?W1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,k1("linearToOutputTexel",i.outputColorSpace),j1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Zl).join(`
`)),h=om(h),h=Hv(h,i),h=Gv(h,i),d=om(d),d=Hv(d,i),d=Gv(d,i),h=Vv(h),d=Vv(d),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,E=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,x=["#define varying in",i.glslVersion===Z_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Z_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const N=F+E+h,O=F+x+d,z=Iv(l,l.VERTEX_SHADER,N),P=Iv(l,l.FRAGMENT_SHADER,O);l.attachShader(R,z),l.attachShader(R,P),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function I(X){if(s.debug.checkShaderErrors){const $=l.getProgramInfoLog(R)||"",rt=l.getShaderInfoLog(z)||"",tt=l.getShaderInfoLog(P)||"",xt=$.trim(),H=rt.trim(),Y=tt.trim();let st=!0,Ft=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(st=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,R,z,P);else{const Nt=zv(l,z,"vertex"),G=zv(l,P,"fragment");nn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+xt+`
`+Nt+`
`+G)}else xt!==""?Ae("WebGLProgram: Program Info Log:",xt):(H===""||Y==="")&&(Ft=!1);Ft&&(X.diagnostics={runnable:st,programLog:xt,vertexShader:{log:H,prefix:E},fragmentShader:{log:Y,prefix:x}})}l.deleteShader(z),l.deleteShader(P),j=new $u(l,R),C=Z1(l,R)}let j;this.getUniforms=function(){return j===void 0&&I(this),j};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let U=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=l.getProgramParameter(R,z1)),U},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=H1++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=z,this.fragmentShader=P,this}let fA=0;class hA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new dA(t),i.set(t,r)),r}}class dA{constructor(t){this.id=fA++,this.code=t,this.usedTimes=0}}function pA(s,t,i,r,l,c,h){const d=new Ax,m=new hA,p=new Set,g=[],_=new Map,S=l.logarithmicDepthBuffer;let b=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(C){return p.add(C),C===0?"uv":`uv${C}`}function E(C,U,X,$,rt){const tt=$.fog,xt=rt.geometry,H=C.isMeshStandardMaterial?$.environment:null,Y=(C.isMeshStandardMaterial?i:t).get(C.envMap||H),st=Y&&Y.mapping===lf?Y.image.height:null,Ft=T[C.type];C.precision!==null&&(b=l.getMaxPrecision(C.precision),b!==C.precision&&Ae("WebGLProgram.getParameters:",C.precision,"not supported, using",b,"instead."));const Nt=xt.morphAttributes.position||xt.morphAttributes.normal||xt.morphAttributes.color,G=Nt!==void 0?Nt.length:0;let ct=0;xt.morphAttributes.position!==void 0&&(ct=1),xt.morphAttributes.normal!==void 0&&(ct=2),xt.morphAttributes.color!==void 0&&(ct=3);let At,Gt,kt,lt;if(Ft){const je=wa[Ft];At=je.vertexShader,Gt=je.fragmentShader}else At=C.vertexShader,Gt=C.fragmentShader,m.update(C),kt=m.getVertexShaderID(C),lt=m.getFragmentShaderID(C);const vt=s.getRenderTarget(),Xt=s.state.buffers.depth.getReversed(),ie=rt.isInstancedMesh===!0,re=rt.isBatchedMesh===!0,Ne=!!C.map,ln=!!C.matcap,Ie=!!Y,Ce=!!C.aoMap,ke=!!C.lightMap,Jt=!!C.bumpMap,pe=!!C.normalMap,k=!!C.displacementMap,ge=!!C.emissiveMap,Me=!!C.metalnessMap,xe=!!C.roughnessMap,Qt=C.anisotropy>0,B=C.clearcoat>0,A=C.dispersion>0,K=C.iridescence>0,bt=C.sheen>0,Dt=C.transmission>0,_t=Qt&&!!C.anisotropyMap,se=B&&!!C.clearcoatMap,Vt=B&&!!C.clearcoatNormalMap,ae=B&&!!C.clearcoatRoughnessMap,de=K&&!!C.iridescenceMap,Ot=K&&!!C.iridescenceThicknessMap,Bt=bt&&!!C.sheenColorMap,te=bt&&!!C.sheenRoughnessMap,Yt=!!C.specularMap,jt=!!C.specularColorMap,De=!!C.specularIntensityMap,Q=Dt&&!!C.transmissionMap,qt=Dt&&!!C.thicknessMap,Lt=!!C.gradientMap,Zt=!!C.alphaMap,St=C.alphaTest>0,Ct=!!C.alphaHash,Ht=!!C.extensions;let me=La;C.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(me=s.toneMapping);const an={shaderID:Ft,shaderType:C.type,shaderName:C.name,vertexShader:At,fragmentShader:Gt,defines:C.defines,customVertexShaderID:kt,customFragmentShaderID:lt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:b,batching:re,batchingColor:re&&rt._colorsTexture!==null,instancing:ie,instancingColor:ie&&rt.instanceColor!==null,instancingMorph:ie&&rt.morphTexture!==null,outputColorSpace:vt===null?s.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Xo,alphaToCoverage:!!C.alphaToCoverage,map:Ne,matcap:ln,envMap:Ie,envMapMode:Ie&&Y.mapping,envMapCubeUVHeight:st,aoMap:Ce,lightMap:ke,bumpMap:Jt,normalMap:pe,displacementMap:k,emissiveMap:ge,normalMapObjectSpace:pe&&C.normalMapType===jS,normalMapTangentSpace:pe&&C.normalMapType===bx,metalnessMap:Me,roughnessMap:xe,anisotropy:Qt,anisotropyMap:_t,clearcoat:B,clearcoatMap:se,clearcoatNormalMap:Vt,clearcoatRoughnessMap:ae,dispersion:A,iridescence:K,iridescenceMap:de,iridescenceThicknessMap:Ot,sheen:bt,sheenColorMap:Bt,sheenRoughnessMap:te,specularMap:Yt,specularColorMap:jt,specularIntensityMap:De,transmission:Dt,transmissionMap:Q,thicknessMap:qt,gradientMap:Lt,opaque:C.transparent===!1&&C.blending===zo&&C.alphaToCoverage===!1,alphaMap:Zt,alphaTest:St,alphaHash:Ct,combine:C.combine,mapUv:Ne&&R(C.map.channel),aoMapUv:Ce&&R(C.aoMap.channel),lightMapUv:ke&&R(C.lightMap.channel),bumpMapUv:Jt&&R(C.bumpMap.channel),normalMapUv:pe&&R(C.normalMap.channel),displacementMapUv:k&&R(C.displacementMap.channel),emissiveMapUv:ge&&R(C.emissiveMap.channel),metalnessMapUv:Me&&R(C.metalnessMap.channel),roughnessMapUv:xe&&R(C.roughnessMap.channel),anisotropyMapUv:_t&&R(C.anisotropyMap.channel),clearcoatMapUv:se&&R(C.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&R(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&R(C.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&R(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&R(C.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&R(C.sheenColorMap.channel),sheenRoughnessMapUv:te&&R(C.sheenRoughnessMap.channel),specularMapUv:Yt&&R(C.specularMap.channel),specularColorMapUv:jt&&R(C.specularColorMap.channel),specularIntensityMapUv:De&&R(C.specularIntensityMap.channel),transmissionMapUv:Q&&R(C.transmissionMap.channel),thicknessMapUv:qt&&R(C.thicknessMap.channel),alphaMapUv:Zt&&R(C.alphaMap.channel),vertexTangents:!!xt.attributes.tangent&&(pe||Qt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!xt.attributes.color&&xt.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!xt.attributes.uv&&(Ne||Zt),fog:!!tt,useFog:C.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Xt,skinning:rt.isSkinnedMesh===!0,morphTargets:xt.morphAttributes.position!==void 0,morphNormals:xt.morphAttributes.normal!==void 0,morphColors:xt.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:ct,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&X.length>0,shadowMapType:s.shadowMap.type,toneMapping:me,decodeVideoTexture:Ne&&C.map.isVideoTexture===!0&&$e.getTransfer(C.map.colorSpace)===fn,decodeVideoTextureEmissive:ge&&C.emissiveMap.isVideoTexture===!0&&$e.getTransfer(C.emissiveMap.colorSpace)===fn,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Yi,flipSided:C.side===Oi,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ht&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&C.extensions.multiDraw===!0||re)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return an.vertexUv1s=p.has(1),an.vertexUv2s=p.has(2),an.vertexUv3s=p.has(3),p.clear(),an}function x(C){const U=[];if(C.shaderID?U.push(C.shaderID):(U.push(C.customVertexShaderID),U.push(C.customFragmentShaderID)),C.defines!==void 0)for(const X in C.defines)U.push(X),U.push(C.defines[X]);return C.isRawShaderMaterial===!1&&(F(U,C),N(U,C),U.push(s.outputColorSpace)),U.push(C.customProgramCacheKey),U.join()}function F(C,U){C.push(U.precision),C.push(U.outputColorSpace),C.push(U.envMapMode),C.push(U.envMapCubeUVHeight),C.push(U.mapUv),C.push(U.alphaMapUv),C.push(U.lightMapUv),C.push(U.aoMapUv),C.push(U.bumpMapUv),C.push(U.normalMapUv),C.push(U.displacementMapUv),C.push(U.emissiveMapUv),C.push(U.metalnessMapUv),C.push(U.roughnessMapUv),C.push(U.anisotropyMapUv),C.push(U.clearcoatMapUv),C.push(U.clearcoatNormalMapUv),C.push(U.clearcoatRoughnessMapUv),C.push(U.iridescenceMapUv),C.push(U.iridescenceThicknessMapUv),C.push(U.sheenColorMapUv),C.push(U.sheenRoughnessMapUv),C.push(U.specularMapUv),C.push(U.specularColorMapUv),C.push(U.specularIntensityMapUv),C.push(U.transmissionMapUv),C.push(U.thicknessMapUv),C.push(U.combine),C.push(U.fogExp2),C.push(U.sizeAttenuation),C.push(U.morphTargetsCount),C.push(U.morphAttributeCount),C.push(U.numDirLights),C.push(U.numPointLights),C.push(U.numSpotLights),C.push(U.numSpotLightMaps),C.push(U.numHemiLights),C.push(U.numRectAreaLights),C.push(U.numDirLightShadows),C.push(U.numPointLightShadows),C.push(U.numSpotLightShadows),C.push(U.numSpotLightShadowsWithMaps),C.push(U.numLightProbes),C.push(U.shadowMapType),C.push(U.toneMapping),C.push(U.numClippingPlanes),C.push(U.numClipIntersection),C.push(U.depthPacking)}function N(C,U){d.disableAll(),U.instancing&&d.enable(0),U.instancingColor&&d.enable(1),U.instancingMorph&&d.enable(2),U.matcap&&d.enable(3),U.envMap&&d.enable(4),U.normalMapObjectSpace&&d.enable(5),U.normalMapTangentSpace&&d.enable(6),U.clearcoat&&d.enable(7),U.iridescence&&d.enable(8),U.alphaTest&&d.enable(9),U.vertexColors&&d.enable(10),U.vertexAlphas&&d.enable(11),U.vertexUv1s&&d.enable(12),U.vertexUv2s&&d.enable(13),U.vertexUv3s&&d.enable(14),U.vertexTangents&&d.enable(15),U.anisotropy&&d.enable(16),U.alphaHash&&d.enable(17),U.batching&&d.enable(18),U.dispersion&&d.enable(19),U.batchingColor&&d.enable(20),U.gradientMap&&d.enable(21),C.push(d.mask),d.disableAll(),U.fog&&d.enable(0),U.useFog&&d.enable(1),U.flatShading&&d.enable(2),U.logarithmicDepthBuffer&&d.enable(3),U.reversedDepthBuffer&&d.enable(4),U.skinning&&d.enable(5),U.morphTargets&&d.enable(6),U.morphNormals&&d.enable(7),U.morphColors&&d.enable(8),U.premultipliedAlpha&&d.enable(9),U.shadowMapEnabled&&d.enable(10),U.doubleSided&&d.enable(11),U.flipSided&&d.enable(12),U.useDepthPacking&&d.enable(13),U.dithering&&d.enable(14),U.transmission&&d.enable(15),U.sheen&&d.enable(16),U.opaque&&d.enable(17),U.pointsUvs&&d.enable(18),U.decodeVideoTexture&&d.enable(19),U.decodeVideoTextureEmissive&&d.enable(20),U.alphaToCoverage&&d.enable(21),C.push(d.mask)}function O(C){const U=T[C.type];let X;if(U){const $=wa[U];X=SM.clone($.uniforms)}else X=C.uniforms;return X}function z(C,U){let X=_.get(U);return X!==void 0?++X.usedTimes:(X=new uA(s,U,C,c),g.push(X),_.set(U,X)),X}function P(C){if(--C.usedTimes===0){const U=g.indexOf(C);g[U]=g[g.length-1],g.pop(),_.delete(C.cacheKey),C.destroy()}}function I(C){m.remove(C)}function j(){m.dispose()}return{getParameters:E,getProgramCacheKey:x,getUniforms:O,acquireProgram:z,releaseProgram:P,releaseShaderCache:I,programs:g,dispose:j}}function mA(){let s=new WeakMap;function t(h){return s.has(h)}function i(h){let d=s.get(h);return d===void 0&&(d={},s.set(h,d)),d}function r(h){s.delete(h)}function l(h,d,m){s.get(h)[d]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function gA(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Xv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Wv(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function h(_,S,b,T,R,E){let x=s[t];return x===void 0?(x={id:_.id,object:_,geometry:S,material:b,groupOrder:T,renderOrder:_.renderOrder,z:R,group:E},s[t]=x):(x.id=_.id,x.object=_,x.geometry=S,x.material=b,x.groupOrder=T,x.renderOrder=_.renderOrder,x.z=R,x.group=E),t++,x}function d(_,S,b,T,R,E){const x=h(_,S,b,T,R,E);b.transmission>0?r.push(x):b.transparent===!0?l.push(x):i.push(x)}function m(_,S,b,T,R,E){const x=h(_,S,b,T,R,E);b.transmission>0?r.unshift(x):b.transparent===!0?l.unshift(x):i.unshift(x)}function p(_,S){i.length>1&&i.sort(_||gA),r.length>1&&r.sort(S||Xv),l.length>1&&l.sort(S||Xv)}function g(){for(let _=t,S=s.length;_<S;_++){const b=s[_];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function _A(){let s=new WeakMap;function t(r,l){const c=s.get(r);let h;return c===void 0?(h=new Wv,s.set(r,[h])):l>=c.length?(h=new Wv,c.push(h)):h=c[l],h}function i(){s=new WeakMap}return{get:t,dispose:i}}function vA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new it,color:new He};break;case"SpotLight":i={position:new it,direction:new it,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new it,color:new He,distance:0,decay:0};break;case"HemisphereLight":i={direction:new it,skyColor:new He,groundColor:new He};break;case"RectAreaLight":i={color:new He,position:new it,halfWidth:new it,halfHeight:new it};break}return s[t.id]=i,i}}}function xA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let yA=0;function SA(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function MA(s){const t=new vA,i=xA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new it);const l=new it,c=new Tn,h=new Tn;function d(p){let g=0,_=0,S=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let b=0,T=0,R=0,E=0,x=0,F=0,N=0,O=0,z=0,P=0,I=0;p.sort(SA);for(let C=0,U=p.length;C<U;C++){const X=p[C],$=X.color,rt=X.intensity,tt=X.distance;let xt=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===ko?xt=X.shadow.map.texture:xt=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)g+=$.r*rt,_+=$.g*rt,S+=$.b*rt;else if(X.isLightProbe){for(let H=0;H<9;H++)r.probe[H].addScaledVector(X.sh.coefficients[H],rt);I++}else if(X.isDirectionalLight){const H=t.get(X);if(H.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const Y=X.shadow,st=i.get(X);st.shadowIntensity=Y.intensity,st.shadowBias=Y.bias,st.shadowNormalBias=Y.normalBias,st.shadowRadius=Y.radius,st.shadowMapSize=Y.mapSize,r.directionalShadow[b]=st,r.directionalShadowMap[b]=xt,r.directionalShadowMatrix[b]=X.shadow.matrix,F++}r.directional[b]=H,b++}else if(X.isSpotLight){const H=t.get(X);H.position.setFromMatrixPosition(X.matrixWorld),H.color.copy($).multiplyScalar(rt),H.distance=tt,H.coneCos=Math.cos(X.angle),H.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),H.decay=X.decay,r.spot[R]=H;const Y=X.shadow;if(X.map&&(r.spotLightMap[z]=X.map,z++,Y.updateMatrices(X),X.castShadow&&P++),r.spotLightMatrix[R]=Y.matrix,X.castShadow){const st=i.get(X);st.shadowIntensity=Y.intensity,st.shadowBias=Y.bias,st.shadowNormalBias=Y.normalBias,st.shadowRadius=Y.radius,st.shadowMapSize=Y.mapSize,r.spotShadow[R]=st,r.spotShadowMap[R]=xt,O++}R++}else if(X.isRectAreaLight){const H=t.get(X);H.color.copy($).multiplyScalar(rt),H.halfWidth.set(X.width*.5,0,0),H.halfHeight.set(0,X.height*.5,0),r.rectArea[E]=H,E++}else if(X.isPointLight){const H=t.get(X);if(H.color.copy(X.color).multiplyScalar(X.intensity),H.distance=X.distance,H.decay=X.decay,X.castShadow){const Y=X.shadow,st=i.get(X);st.shadowIntensity=Y.intensity,st.shadowBias=Y.bias,st.shadowNormalBias=Y.normalBias,st.shadowRadius=Y.radius,st.shadowMapSize=Y.mapSize,st.shadowCameraNear=Y.camera.near,st.shadowCameraFar=Y.camera.far,r.pointShadow[T]=st,r.pointShadowMap[T]=xt,r.pointShadowMatrix[T]=X.shadow.matrix,N++}r.point[T]=H,T++}else if(X.isHemisphereLight){const H=t.get(X);H.skyColor.copy(X.color).multiplyScalar(rt),H.groundColor.copy(X.groundColor).multiplyScalar(rt),r.hemi[x]=H,x++}}E>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ee.LTC_FLOAT_1,r.rectAreaLTC2=ee.LTC_FLOAT_2):(r.rectAreaLTC1=ee.LTC_HALF_1,r.rectAreaLTC2=ee.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=S;const j=r.hash;(j.directionalLength!==b||j.pointLength!==T||j.spotLength!==R||j.rectAreaLength!==E||j.hemiLength!==x||j.numDirectionalShadows!==F||j.numPointShadows!==N||j.numSpotShadows!==O||j.numSpotMaps!==z||j.numLightProbes!==I)&&(r.directional.length=b,r.spot.length=R,r.rectArea.length=E,r.point.length=T,r.hemi.length=x,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=O,r.spotShadowMap.length=O,r.directionalShadowMatrix.length=F,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=O+z-P,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=I,j.directionalLength=b,j.pointLength=T,j.spotLength=R,j.rectAreaLength=E,j.hemiLength=x,j.numDirectionalShadows=F,j.numPointShadows=N,j.numSpotShadows=O,j.numSpotMaps=z,j.numLightProbes=I,r.version=yA++)}function m(p,g){let _=0,S=0,b=0,T=0,R=0;const E=g.matrixWorldInverse;for(let x=0,F=p.length;x<F;x++){const N=p[x];if(N.isDirectionalLight){const O=r.directional[_];O.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(E),_++}else if(N.isSpotLight){const O=r.spot[b];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(E),O.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(E),b++}else if(N.isRectAreaLight){const O=r.rectArea[T];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(E),h.identity(),c.copy(N.matrixWorld),c.premultiply(E),h.extractRotation(c),O.halfWidth.set(N.width*.5,0,0),O.halfHeight.set(0,N.height*.5,0),O.halfWidth.applyMatrix4(h),O.halfHeight.applyMatrix4(h),T++}else if(N.isPointLight){const O=r.point[S];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(E),S++}else if(N.isHemisphereLight){const O=r.hemi[R];O.direction.setFromMatrixPosition(N.matrixWorld),O.direction.transformDirection(E),R++}}}return{setup:d,setupView:m,state:r}}function jv(s){const t=new MA(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function h(g){r.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function bA(s){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new jv(s),t.set(l,[d])):c>=h.length?(d=new jv(s),h.push(d)):d=h[c],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const EA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,AA=[new it(1,0,0),new it(-1,0,0),new it(0,1,0),new it(0,-1,0),new it(0,0,1),new it(0,0,-1)],RA=[new it(0,-1,0),new it(0,-1,0),new it(0,0,1),new it(0,0,-1),new it(0,-1,0),new it(0,-1,0)],Yv=new Tn,jl=new it,cp=new it;function CA(s,t,i){let r=new Em;const l=new Le,c=new Le,h=new Ln,d=new PM,m=new FM,p={},g=i.maxTextureSize,_={[Qr]:Oi,[Oi]:Qr,[Yi]:Yi},S=new Fa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:EA,fragmentShader:TA}),b=S.clone();b.defines.HORIZONTAL_PASS=1;const T=new ti;T.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ni(T,S),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wu;let x=this.type;this.render=function(P,I,j){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||P.length===0)return;P.type===bS&&(Ae("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),P.type=Wu);const C=s.getRenderTarget(),U=s.getActiveCubeFace(),X=s.getActiveMipmapLevel(),$=s.state;$.setBlending(ur),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const rt=x!==this.type;rt&&I.traverse(function(tt){tt.material&&(Array.isArray(tt.material)?tt.material.forEach(xt=>xt.needsUpdate=!0):tt.material.needsUpdate=!0)});for(let tt=0,xt=P.length;tt<xt;tt++){const H=P[tt],Y=H.shadow;if(Y===void 0){Ae("WebGLShadowMap:",H,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const st=Y.getFrameExtents();if(l.multiply(st),c.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/st.x),l.x=c.x*st.x,Y.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/st.y),l.y=c.y*st.y,Y.mapSize.y=c.y)),Y.map===null||rt===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Yl){if(H.isPointLight){Ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Na(l.x,l.y,{format:ko,type:hr,minFilter:hi,magFilter:hi,generateMipmaps:!1}),Y.map.texture.name=H.name+".shadowMap",Y.map.depthTexture=new ec(l.x,l.y,Da),Y.map.depthTexture.name=H.name+".shadowMapDepth",Y.map.depthTexture.format=dr,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=si,Y.map.depthTexture.magFilter=si}else{H.isPointLight?(Y.map=new Nx(l.x),Y.map.depthTexture=new LM(l.x,Oa)):(Y.map=new Na(l.x,l.y),Y.map.depthTexture=new ec(l.x,l.y,Oa)),Y.map.depthTexture.name=H.name+".shadowMap",Y.map.depthTexture.format=dr;const Nt=s.state.buffers.depth.getReversed();this.type===Wu?(Y.map.depthTexture.compareFunction=Nt?ym:xm,Y.map.depthTexture.minFilter=hi,Y.map.depthTexture.magFilter=hi):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=si,Y.map.depthTexture.magFilter=si)}Y.camera.updateProjectionMatrix()}const Ft=Y.map.isWebGLCubeRenderTarget?6:1;for(let Nt=0;Nt<Ft;Nt++){if(Y.map.isWebGLCubeRenderTarget)s.setRenderTarget(Y.map,Nt),s.clear();else{Nt===0&&(s.setRenderTarget(Y.map),s.clear());const G=Y.getViewport(Nt);h.set(c.x*G.x,c.y*G.y,c.x*G.z,c.y*G.w),$.viewport(h)}if(H.isPointLight){const G=Y.camera,ct=Y.matrix,At=H.distance||G.far;At!==G.far&&(G.far=At,G.updateProjectionMatrix()),jl.setFromMatrixPosition(H.matrixWorld),G.position.copy(jl),cp.copy(G.position),cp.add(AA[Nt]),G.up.copy(RA[Nt]),G.lookAt(cp),G.updateMatrixWorld(),ct.makeTranslation(-jl.x,-jl.y,-jl.z),Yv.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Yv,G.coordinateSystem,G.reversedDepth)}else Y.updateMatrices(H);r=Y.getFrustum(),O(I,j,Y.camera,H,this.type)}Y.isPointLightShadow!==!0&&this.type===Yl&&F(Y,j),Y.needsUpdate=!1}x=this.type,E.needsUpdate=!1,s.setRenderTarget(C,U,X)};function F(P,I){const j=t.update(R);S.defines.VSM_SAMPLES!==P.blurSamples&&(S.defines.VSM_SAMPLES=P.blurSamples,b.defines.VSM_SAMPLES=P.blurSamples,S.needsUpdate=!0,b.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Na(l.x,l.y,{format:ko,type:hr})),S.uniforms.shadow_pass.value=P.map.depthTexture,S.uniforms.resolution.value=P.mapSize,S.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(I,null,j,S,R,null),b.uniforms.shadow_pass.value=P.mapPass.texture,b.uniforms.resolution.value=P.mapSize,b.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(I,null,j,b,R,null)}function N(P,I,j,C){let U=null;const X=j.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(X!==void 0)U=X;else if(U=j.isPointLight===!0?m:d,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const $=U.uuid,rt=I.uuid;let tt=p[$];tt===void 0&&(tt={},p[$]=tt);let xt=tt[rt];xt===void 0&&(xt=U.clone(),tt[rt]=xt,I.addEventListener("dispose",z)),U=xt}if(U.visible=I.visible,U.wireframe=I.wireframe,C===Yl?U.side=I.shadowSide!==null?I.shadowSide:I.side:U.side=I.shadowSide!==null?I.shadowSide:_[I.side],U.alphaMap=I.alphaMap,U.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,U.map=I.map,U.clipShadows=I.clipShadows,U.clippingPlanes=I.clippingPlanes,U.clipIntersection=I.clipIntersection,U.displacementMap=I.displacementMap,U.displacementScale=I.displacementScale,U.displacementBias=I.displacementBias,U.wireframeLinewidth=I.wireframeLinewidth,U.linewidth=I.linewidth,j.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const $=s.properties.get(U);$.light=j}return U}function O(P,I,j,C,U){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&U===Yl)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,P.matrixWorld);const rt=t.update(P),tt=P.material;if(Array.isArray(tt)){const xt=rt.groups;for(let H=0,Y=xt.length;H<Y;H++){const st=xt[H],Ft=tt[st.materialIndex];if(Ft&&Ft.visible){const Nt=N(P,Ft,C,U);P.onBeforeShadow(s,P,I,j,rt,Nt,st),s.renderBufferDirect(j,null,rt,Nt,P,st),P.onAfterShadow(s,P,I,j,rt,Nt,st)}}}else if(tt.visible){const xt=N(P,tt,C,U);P.onBeforeShadow(s,P,I,j,rt,xt,null),s.renderBufferDirect(j,null,rt,xt,P,null),P.onAfterShadow(s,P,I,j,rt,xt,null)}}const $=P.children;for(let rt=0,tt=$.length;rt<tt;rt++)O($[rt],I,j,C,U)}function z(P){P.target.removeEventListener("dispose",z);for(const j in p){const C=p[j],U=P.target.uuid;U in C&&(C[U].dispose(),delete C[U])}}}const wA={[gp]:_p,[vp]:Sp,[xp]:Mp,[Go]:yp,[_p]:gp,[Sp]:vp,[Mp]:xp,[yp]:Go};function DA(s,t){function i(){let Q=!1;const qt=new Ln;let Lt=null;const Zt=new Ln(0,0,0,0);return{setMask:function(St){Lt!==St&&!Q&&(s.colorMask(St,St,St,St),Lt=St)},setLocked:function(St){Q=St},setClear:function(St,Ct,Ht,me,an){an===!0&&(St*=me,Ct*=me,Ht*=me),qt.set(St,Ct,Ht,me),Zt.equals(qt)===!1&&(s.clearColor(St,Ct,Ht,me),Zt.copy(qt))},reset:function(){Q=!1,Lt=null,Zt.set(-1,0,0,0)}}}function r(){let Q=!1,qt=!1,Lt=null,Zt=null,St=null;return{setReversed:function(Ct){if(qt!==Ct){const Ht=t.get("EXT_clip_control");Ct?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),qt=Ct;const me=St;St=null,this.setClear(me)}},getReversed:function(){return qt},setTest:function(Ct){Ct?vt(s.DEPTH_TEST):Xt(s.DEPTH_TEST)},setMask:function(Ct){Lt!==Ct&&!Q&&(s.depthMask(Ct),Lt=Ct)},setFunc:function(Ct){if(qt&&(Ct=wA[Ct]),Zt!==Ct){switch(Ct){case gp:s.depthFunc(s.NEVER);break;case _p:s.depthFunc(s.ALWAYS);break;case vp:s.depthFunc(s.LESS);break;case Go:s.depthFunc(s.LEQUAL);break;case xp:s.depthFunc(s.EQUAL);break;case yp:s.depthFunc(s.GEQUAL);break;case Sp:s.depthFunc(s.GREATER);break;case Mp:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Zt=Ct}},setLocked:function(Ct){Q=Ct},setClear:function(Ct){St!==Ct&&(qt&&(Ct=1-Ct),s.clearDepth(Ct),St=Ct)},reset:function(){Q=!1,Lt=null,Zt=null,St=null,qt=!1}}}function l(){let Q=!1,qt=null,Lt=null,Zt=null,St=null,Ct=null,Ht=null,me=null,an=null;return{setTest:function(je){Q||(je?vt(s.STENCIL_TEST):Xt(s.STENCIL_TEST))},setMask:function(je){qt!==je&&!Q&&(s.stencilMask(je),qt=je)},setFunc:function(je,In,di){(Lt!==je||Zt!==In||St!==di)&&(s.stencilFunc(je,In,di),Lt=je,Zt=In,St=di)},setOp:function(je,In,di){(Ct!==je||Ht!==In||me!==di)&&(s.stencilOp(je,In,di),Ct=je,Ht=In,me=di)},setLocked:function(je){Q=je},setClear:function(je){an!==je&&(s.clearStencil(je),an=je)},reset:function(){Q=!1,qt=null,Lt=null,Zt=null,St=null,Ct=null,Ht=null,me=null,an=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},S=new WeakMap,b=[],T=null,R=!1,E=null,x=null,F=null,N=null,O=null,z=null,P=null,I=new He(0,0,0),j=0,C=!1,U=null,X=null,$=null,rt=null,tt=null;const xt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Y=0;const st=s.getParameter(s.VERSION);st.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(st)[1]),H=Y>=1):st.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),H=Y>=2);let Ft=null,Nt={};const G=s.getParameter(s.SCISSOR_BOX),ct=s.getParameter(s.VIEWPORT),At=new Ln().fromArray(G),Gt=new Ln().fromArray(ct);function kt(Q,qt,Lt,Zt){const St=new Uint8Array(4),Ct=s.createTexture();s.bindTexture(Q,Ct),s.texParameteri(Q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ht=0;Ht<Lt;Ht++)Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?s.texImage3D(qt,0,s.RGBA,1,1,Zt,0,s.RGBA,s.UNSIGNED_BYTE,St):s.texImage2D(qt+Ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,St);return Ct}const lt={};lt[s.TEXTURE_2D]=kt(s.TEXTURE_2D,s.TEXTURE_2D,1),lt[s.TEXTURE_CUBE_MAP]=kt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[s.TEXTURE_2D_ARRAY]=kt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),lt[s.TEXTURE_3D]=kt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),vt(s.DEPTH_TEST),h.setFunc(Go),Jt(!1),pe(k_),vt(s.CULL_FACE),Ce(ur);function vt(Q){g[Q]!==!0&&(s.enable(Q),g[Q]=!0)}function Xt(Q){g[Q]!==!1&&(s.disable(Q),g[Q]=!1)}function ie(Q,qt){return _[Q]!==qt?(s.bindFramebuffer(Q,qt),_[Q]=qt,Q===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=qt),Q===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=qt),!0):!1}function re(Q,qt){let Lt=b,Zt=!1;if(Q){Lt=S.get(qt),Lt===void 0&&(Lt=[],S.set(qt,Lt));const St=Q.textures;if(Lt.length!==St.length||Lt[0]!==s.COLOR_ATTACHMENT0){for(let Ct=0,Ht=St.length;Ct<Ht;Ct++)Lt[Ct]=s.COLOR_ATTACHMENT0+Ct;Lt.length=St.length,Zt=!0}}else Lt[0]!==s.BACK&&(Lt[0]=s.BACK,Zt=!0);Zt&&s.drawBuffers(Lt)}function Ne(Q){return T!==Q?(s.useProgram(Q),T=Q,!0):!1}const ln={[Ls]:s.FUNC_ADD,[TS]:s.FUNC_SUBTRACT,[AS]:s.FUNC_REVERSE_SUBTRACT};ln[RS]=s.MIN,ln[CS]=s.MAX;const Ie={[wS]:s.ZERO,[DS]:s.ONE,[US]:s.SRC_COLOR,[pp]:s.SRC_ALPHA,[IS]:s.SRC_ALPHA_SATURATE,[PS]:s.DST_COLOR,[NS]:s.DST_ALPHA,[LS]:s.ONE_MINUS_SRC_COLOR,[mp]:s.ONE_MINUS_SRC_ALPHA,[FS]:s.ONE_MINUS_DST_COLOR,[OS]:s.ONE_MINUS_DST_ALPHA,[BS]:s.CONSTANT_COLOR,[zS]:s.ONE_MINUS_CONSTANT_COLOR,[HS]:s.CONSTANT_ALPHA,[GS]:s.ONE_MINUS_CONSTANT_ALPHA};function Ce(Q,qt,Lt,Zt,St,Ct,Ht,me,an,je){if(Q===ur){R===!0&&(Xt(s.BLEND),R=!1);return}if(R===!1&&(vt(s.BLEND),R=!0),Q!==ES){if(Q!==E||je!==C){if((x!==Ls||O!==Ls)&&(s.blendEquation(s.FUNC_ADD),x=Ls,O=Ls),je)switch(Q){case zo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case X_:s.blendFunc(s.ONE,s.ONE);break;case W_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case j_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:nn("WebGLState: Invalid blending: ",Q);break}else switch(Q){case zo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case X_:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case W_:nn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case j_:nn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nn("WebGLState: Invalid blending: ",Q);break}F=null,N=null,z=null,P=null,I.set(0,0,0),j=0,E=Q,C=je}return}St=St||qt,Ct=Ct||Lt,Ht=Ht||Zt,(qt!==x||St!==O)&&(s.blendEquationSeparate(ln[qt],ln[St]),x=qt,O=St),(Lt!==F||Zt!==N||Ct!==z||Ht!==P)&&(s.blendFuncSeparate(Ie[Lt],Ie[Zt],Ie[Ct],Ie[Ht]),F=Lt,N=Zt,z=Ct,P=Ht),(me.equals(I)===!1||an!==j)&&(s.blendColor(me.r,me.g,me.b,an),I.copy(me),j=an),E=Q,C=!1}function ke(Q,qt){Q.side===Yi?Xt(s.CULL_FACE):vt(s.CULL_FACE);let Lt=Q.side===Oi;qt&&(Lt=!Lt),Jt(Lt),Q.blending===zo&&Q.transparent===!1?Ce(ur):Ce(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),h.setFunc(Q.depthFunc),h.setTest(Q.depthTest),h.setMask(Q.depthWrite),c.setMask(Q.colorWrite);const Zt=Q.stencilWrite;d.setTest(Zt),Zt&&(d.setMask(Q.stencilWriteMask),d.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),d.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),ge(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?vt(s.SAMPLE_ALPHA_TO_COVERAGE):Xt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(Q){U!==Q&&(Q?s.frontFace(s.CW):s.frontFace(s.CCW),U=Q)}function pe(Q){Q!==SS?(vt(s.CULL_FACE),Q!==X&&(Q===k_?s.cullFace(s.BACK):Q===MS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Xt(s.CULL_FACE),X=Q}function k(Q){Q!==$&&(H&&s.lineWidth(Q),$=Q)}function ge(Q,qt,Lt){Q?(vt(s.POLYGON_OFFSET_FILL),(rt!==qt||tt!==Lt)&&(s.polygonOffset(qt,Lt),rt=qt,tt=Lt)):Xt(s.POLYGON_OFFSET_FILL)}function Me(Q){Q?vt(s.SCISSOR_TEST):Xt(s.SCISSOR_TEST)}function xe(Q){Q===void 0&&(Q=s.TEXTURE0+xt-1),Ft!==Q&&(s.activeTexture(Q),Ft=Q)}function Qt(Q,qt,Lt){Lt===void 0&&(Ft===null?Lt=s.TEXTURE0+xt-1:Lt=Ft);let Zt=Nt[Lt];Zt===void 0&&(Zt={type:void 0,texture:void 0},Nt[Lt]=Zt),(Zt.type!==Q||Zt.texture!==qt)&&(Ft!==Lt&&(s.activeTexture(Lt),Ft=Lt),s.bindTexture(Q,qt||lt[Q]),Zt.type=Q,Zt.texture=qt)}function B(){const Q=Nt[Ft];Q!==void 0&&Q.type!==void 0&&(s.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function A(){try{s.compressedTexImage2D(...arguments)}catch(Q){nn("WebGLState:",Q)}}function K(){try{s.compressedTexImage3D(...arguments)}catch(Q){nn("WebGLState:",Q)}}function bt(){try{s.texSubImage2D(...arguments)}catch(Q){nn("WebGLState:",Q)}}function Dt(){try{s.texSubImage3D(...arguments)}catch(Q){nn("WebGLState:",Q)}}function _t(){try{s.compressedTexSubImage2D(...arguments)}catch(Q){nn("WebGLState:",Q)}}function se(){try{s.compressedTexSubImage3D(...arguments)}catch(Q){nn("WebGLState:",Q)}}function Vt(){try{s.texStorage2D(...arguments)}catch(Q){nn("WebGLState:",Q)}}function ae(){try{s.texStorage3D(...arguments)}catch(Q){nn("WebGLState:",Q)}}function de(){try{s.texImage2D(...arguments)}catch(Q){nn("WebGLState:",Q)}}function Ot(){try{s.texImage3D(...arguments)}catch(Q){nn("WebGLState:",Q)}}function Bt(Q){At.equals(Q)===!1&&(s.scissor(Q.x,Q.y,Q.z,Q.w),At.copy(Q))}function te(Q){Gt.equals(Q)===!1&&(s.viewport(Q.x,Q.y,Q.z,Q.w),Gt.copy(Q))}function Yt(Q,qt){let Lt=p.get(qt);Lt===void 0&&(Lt=new WeakMap,p.set(qt,Lt));let Zt=Lt.get(Q);Zt===void 0&&(Zt=s.getUniformBlockIndex(qt,Q.name),Lt.set(Q,Zt))}function jt(Q,qt){const Zt=p.get(qt).get(Q);m.get(qt)!==Zt&&(s.uniformBlockBinding(qt,Zt,Q.__bindingPointIndex),m.set(qt,Zt))}function De(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},Ft=null,Nt={},_={},S=new WeakMap,b=[],T=null,R=!1,E=null,x=null,F=null,N=null,O=null,z=null,P=null,I=new He(0,0,0),j=0,C=!1,U=null,X=null,$=null,rt=null,tt=null,At.set(0,0,s.canvas.width,s.canvas.height),Gt.set(0,0,s.canvas.width,s.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:vt,disable:Xt,bindFramebuffer:ie,drawBuffers:re,useProgram:Ne,setBlending:Ce,setMaterial:ke,setFlipSided:Jt,setCullFace:pe,setLineWidth:k,setPolygonOffset:ge,setScissorTest:Me,activeTexture:xe,bindTexture:Qt,unbindTexture:B,compressedTexImage2D:A,compressedTexImage3D:K,texImage2D:de,texImage3D:Ot,updateUBOMapping:Yt,uniformBlockBinding:jt,texStorage2D:Vt,texStorage3D:ae,texSubImage2D:bt,texSubImage3D:Dt,compressedTexSubImage2D:_t,compressedTexSubImage3D:se,scissor:Bt,viewport:te,reset:De}}function UA(s,t,i,r,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Le,g=new WeakMap;let _;const S=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(B,A){return b?new OffscreenCanvas(B,A):af("canvas")}function R(B,A,K){let bt=1;const Dt=Qt(B);if((Dt.width>K||Dt.height>K)&&(bt=K/Math.max(Dt.width,Dt.height)),bt<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const _t=Math.floor(bt*Dt.width),se=Math.floor(bt*Dt.height);_===void 0&&(_=T(_t,se));const Vt=A?T(_t,se):_;return Vt.width=_t,Vt.height=se,Vt.getContext("2d").drawImage(B,0,0,_t,se),Ae("WebGLRenderer: Texture has been resized from ("+Dt.width+"x"+Dt.height+") to ("+_t+"x"+se+")."),Vt}else return"data"in B&&Ae("WebGLRenderer: Image in DataTexture is too big ("+Dt.width+"x"+Dt.height+")."),B;return B}function E(B){return B.generateMipmaps}function x(B){s.generateMipmap(B)}function F(B){return B.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?s.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(B,A,K,bt,Dt=!1){if(B!==null){if(s[B]!==void 0)return s[B];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let _t=A;if(A===s.RED&&(K===s.FLOAT&&(_t=s.R32F),K===s.HALF_FLOAT&&(_t=s.R16F),K===s.UNSIGNED_BYTE&&(_t=s.R8)),A===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(_t=s.R8UI),K===s.UNSIGNED_SHORT&&(_t=s.R16UI),K===s.UNSIGNED_INT&&(_t=s.R32UI),K===s.BYTE&&(_t=s.R8I),K===s.SHORT&&(_t=s.R16I),K===s.INT&&(_t=s.R32I)),A===s.RG&&(K===s.FLOAT&&(_t=s.RG32F),K===s.HALF_FLOAT&&(_t=s.RG16F),K===s.UNSIGNED_BYTE&&(_t=s.RG8)),A===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(_t=s.RG8UI),K===s.UNSIGNED_SHORT&&(_t=s.RG16UI),K===s.UNSIGNED_INT&&(_t=s.RG32UI),K===s.BYTE&&(_t=s.RG8I),K===s.SHORT&&(_t=s.RG16I),K===s.INT&&(_t=s.RG32I)),A===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(_t=s.RGB8UI),K===s.UNSIGNED_SHORT&&(_t=s.RGB16UI),K===s.UNSIGNED_INT&&(_t=s.RGB32UI),K===s.BYTE&&(_t=s.RGB8I),K===s.SHORT&&(_t=s.RGB16I),K===s.INT&&(_t=s.RGB32I)),A===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(_t=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(_t=s.RGBA16UI),K===s.UNSIGNED_INT&&(_t=s.RGBA32UI),K===s.BYTE&&(_t=s.RGBA8I),K===s.SHORT&&(_t=s.RGBA16I),K===s.INT&&(_t=s.RGBA32I)),A===s.RGB&&(K===s.UNSIGNED_INT_5_9_9_9_REV&&(_t=s.RGB9_E5),K===s.UNSIGNED_INT_10F_11F_11F_REV&&(_t=s.R11F_G11F_B10F)),A===s.RGBA){const se=Dt?ef:$e.getTransfer(bt);K===s.FLOAT&&(_t=s.RGBA32F),K===s.HALF_FLOAT&&(_t=s.RGBA16F),K===s.UNSIGNED_BYTE&&(_t=se===fn?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT_4_4_4_4&&(_t=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(_t=s.RGB5_A1)}return(_t===s.R16F||_t===s.R32F||_t===s.RG16F||_t===s.RG32F||_t===s.RGBA16F||_t===s.RGBA32F)&&t.get("EXT_color_buffer_float"),_t}function O(B,A){let K;return B?A===null||A===Oa||A===Jl?K=s.DEPTH24_STENCIL8:A===Da?K=s.DEPTH32F_STENCIL8:A===$l&&(K=s.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Oa||A===Jl?K=s.DEPTH_COMPONENT24:A===Da?K=s.DEPTH_COMPONENT32F:A===$l&&(K=s.DEPTH_COMPONENT16),K}function z(B,A){return E(B)===!0||B.isFramebufferTexture&&B.minFilter!==si&&B.minFilter!==hi?Math.log2(Math.max(A.width,A.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?A.mipmaps.length:1}function P(B){const A=B.target;A.removeEventListener("dispose",P),j(A),A.isVideoTexture&&g.delete(A)}function I(B){const A=B.target;A.removeEventListener("dispose",I),U(A)}function j(B){const A=r.get(B);if(A.__webglInit===void 0)return;const K=B.source,bt=S.get(K);if(bt){const Dt=bt[A.__cacheKey];Dt.usedTimes--,Dt.usedTimes===0&&C(B),Object.keys(bt).length===0&&S.delete(K)}r.remove(B)}function C(B){const A=r.get(B);s.deleteTexture(A.__webglTexture);const K=B.source,bt=S.get(K);delete bt[A.__cacheKey],h.memory.textures--}function U(B){const A=r.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),r.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let bt=0;bt<6;bt++){if(Array.isArray(A.__webglFramebuffer[bt]))for(let Dt=0;Dt<A.__webglFramebuffer[bt].length;Dt++)s.deleteFramebuffer(A.__webglFramebuffer[bt][Dt]);else s.deleteFramebuffer(A.__webglFramebuffer[bt]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[bt])}else{if(Array.isArray(A.__webglFramebuffer))for(let bt=0;bt<A.__webglFramebuffer.length;bt++)s.deleteFramebuffer(A.__webglFramebuffer[bt]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let bt=0;bt<A.__webglColorRenderbuffer.length;bt++)A.__webglColorRenderbuffer[bt]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[bt]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const K=B.textures;for(let bt=0,Dt=K.length;bt<Dt;bt++){const _t=r.get(K[bt]);_t.__webglTexture&&(s.deleteTexture(_t.__webglTexture),h.memory.textures--),r.remove(K[bt])}r.remove(B)}let X=0;function $(){X=0}function rt(){const B=X;return B>=l.maxTextures&&Ae("WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+l.maxTextures),X+=1,B}function tt(B){const A=[];return A.push(B.wrapS),A.push(B.wrapT),A.push(B.wrapR||0),A.push(B.magFilter),A.push(B.minFilter),A.push(B.anisotropy),A.push(B.internalFormat),A.push(B.format),A.push(B.type),A.push(B.generateMipmaps),A.push(B.premultiplyAlpha),A.push(B.flipY),A.push(B.unpackAlignment),A.push(B.colorSpace),A.join()}function xt(B,A){const K=r.get(B);if(B.isVideoTexture&&Me(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&K.__version!==B.version){const bt=B.image;if(bt===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else if(bt.complete===!1)Ae("WebGLRenderer: Texture marked for update but image is incomplete");else{lt(K,B,A);return}}else B.isExternalTexture&&(K.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+A)}function H(B,A){const K=r.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&K.__version!==B.version){lt(K,B,A);return}else B.isExternalTexture&&(K.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+A)}function Y(B,A){const K=r.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&K.__version!==B.version){lt(K,B,A);return}i.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+A)}function st(B,A){const K=r.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&K.__version!==B.version){vt(K,B,A);return}i.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+A)}const Ft={[Tp]:s.REPEAT,[cr]:s.CLAMP_TO_EDGE,[Ap]:s.MIRRORED_REPEAT},Nt={[si]:s.NEAREST,[XS]:s.NEAREST_MIPMAP_NEAREST,[yu]:s.NEAREST_MIPMAP_LINEAR,[hi]:s.LINEAR,[Ud]:s.LINEAR_MIPMAP_NEAREST,[Os]:s.LINEAR_MIPMAP_LINEAR},G={[YS]:s.NEVER,[$S]:s.ALWAYS,[qS]:s.LESS,[xm]:s.LEQUAL,[ZS]:s.EQUAL,[ym]:s.GEQUAL,[KS]:s.GREATER,[QS]:s.NOTEQUAL};function ct(B,A){if(A.type===Da&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===hi||A.magFilter===Ud||A.magFilter===yu||A.magFilter===Os||A.minFilter===hi||A.minFilter===Ud||A.minFilter===yu||A.minFilter===Os)&&Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(B,s.TEXTURE_WRAP_S,Ft[A.wrapS]),s.texParameteri(B,s.TEXTURE_WRAP_T,Ft[A.wrapT]),(B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY)&&s.texParameteri(B,s.TEXTURE_WRAP_R,Ft[A.wrapR]),s.texParameteri(B,s.TEXTURE_MAG_FILTER,Nt[A.magFilter]),s.texParameteri(B,s.TEXTURE_MIN_FILTER,Nt[A.minFilter]),A.compareFunction&&(s.texParameteri(B,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(B,s.TEXTURE_COMPARE_FUNC,G[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===si||A.minFilter!==yu&&A.minFilter!==Os||A.type===Da&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");s.texParameterf(B,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function At(B,A){let K=!1;B.__webglInit===void 0&&(B.__webglInit=!0,A.addEventListener("dispose",P));const bt=A.source;let Dt=S.get(bt);Dt===void 0&&(Dt={},S.set(bt,Dt));const _t=tt(A);if(_t!==B.__cacheKey){Dt[_t]===void 0&&(Dt[_t]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,K=!0),Dt[_t].usedTimes++;const se=Dt[B.__cacheKey];se!==void 0&&(Dt[B.__cacheKey].usedTimes--,se.usedTimes===0&&C(A)),B.__cacheKey=_t,B.__webglTexture=Dt[_t].texture}return K}function Gt(B,A,K){return Math.floor(Math.floor(B/K)/A)}function kt(B,A,K,bt){const _t=B.updateRanges;if(_t.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,K,bt,A.data);else{_t.sort((Ot,Bt)=>Ot.start-Bt.start);let se=0;for(let Ot=1;Ot<_t.length;Ot++){const Bt=_t[se],te=_t[Ot],Yt=Bt.start+Bt.count,jt=Gt(te.start,A.width,4),De=Gt(Bt.start,A.width,4);te.start<=Yt+1&&jt===De&&Gt(te.start+te.count-1,A.width,4)===jt?Bt.count=Math.max(Bt.count,te.start+te.count-Bt.start):(++se,_t[se]=te)}_t.length=se+1;const Vt=s.getParameter(s.UNPACK_ROW_LENGTH),ae=s.getParameter(s.UNPACK_SKIP_PIXELS),de=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let Ot=0,Bt=_t.length;Ot<Bt;Ot++){const te=_t[Ot],Yt=Math.floor(te.start/4),jt=Math.ceil(te.count/4),De=Yt%A.width,Q=Math.floor(Yt/A.width),qt=jt,Lt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,De),s.pixelStorei(s.UNPACK_SKIP_ROWS,Q),i.texSubImage2D(s.TEXTURE_2D,0,De,Q,qt,Lt,K,bt,A.data)}B.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Vt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ae),s.pixelStorei(s.UNPACK_SKIP_ROWS,de)}}function lt(B,A,K){let bt=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(bt=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(bt=s.TEXTURE_3D);const Dt=At(B,A),_t=A.source;i.bindTexture(bt,B.__webglTexture,s.TEXTURE0+K);const se=r.get(_t);if(_t.version!==se.__version||Dt===!0){i.activeTexture(s.TEXTURE0+K);const Vt=$e.getPrimaries($e.workingColorSpace),ae=A.colorSpace===Zr?null:$e.getPrimaries(A.colorSpace),de=A.colorSpace===Zr||Vt===ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let Ot=R(A.image,!1,l.maxTextureSize);Ot=xe(A,Ot);const Bt=c.convert(A.format,A.colorSpace),te=c.convert(A.type);let Yt=N(A.internalFormat,Bt,te,A.colorSpace,A.isVideoTexture);ct(bt,A);let jt;const De=A.mipmaps,Q=A.isVideoTexture!==!0,qt=se.__version===void 0||Dt===!0,Lt=_t.dataReady,Zt=z(A,Ot);if(A.isDepthTexture)Yt=O(A.format===Ps,A.type),qt&&(Q?i.texStorage2D(s.TEXTURE_2D,1,Yt,Ot.width,Ot.height):i.texImage2D(s.TEXTURE_2D,0,Yt,Ot.width,Ot.height,0,Bt,te,null));else if(A.isDataTexture)if(De.length>0){Q&&qt&&i.texStorage2D(s.TEXTURE_2D,Zt,Yt,De[0].width,De[0].height);for(let St=0,Ct=De.length;St<Ct;St++)jt=De[St],Q?Lt&&i.texSubImage2D(s.TEXTURE_2D,St,0,0,jt.width,jt.height,Bt,te,jt.data):i.texImage2D(s.TEXTURE_2D,St,Yt,jt.width,jt.height,0,Bt,te,jt.data);A.generateMipmaps=!1}else Q?(qt&&i.texStorage2D(s.TEXTURE_2D,Zt,Yt,Ot.width,Ot.height),Lt&&kt(A,Ot,Bt,te)):i.texImage2D(s.TEXTURE_2D,0,Yt,Ot.width,Ot.height,0,Bt,te,Ot.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Q&&qt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Zt,Yt,De[0].width,De[0].height,Ot.depth);for(let St=0,Ct=De.length;St<Ct;St++)if(jt=De[St],A.format!==xa)if(Bt!==null)if(Q){if(Lt)if(A.layerUpdates.size>0){const Ht=Ev(jt.width,jt.height,A.format,A.type);for(const me of A.layerUpdates){const an=jt.data.subarray(me*Ht/jt.data.BYTES_PER_ELEMENT,(me+1)*Ht/jt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,St,0,0,me,jt.width,jt.height,1,Bt,an)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,St,0,0,0,jt.width,jt.height,Ot.depth,Bt,jt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,St,Yt,jt.width,jt.height,Ot.depth,0,jt.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Q?Lt&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,St,0,0,0,jt.width,jt.height,Ot.depth,Bt,te,jt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,St,Yt,jt.width,jt.height,Ot.depth,0,Bt,te,jt.data)}else{Q&&qt&&i.texStorage2D(s.TEXTURE_2D,Zt,Yt,De[0].width,De[0].height);for(let St=0,Ct=De.length;St<Ct;St++)jt=De[St],A.format!==xa?Bt!==null?Q?Lt&&i.compressedTexSubImage2D(s.TEXTURE_2D,St,0,0,jt.width,jt.height,Bt,jt.data):i.compressedTexImage2D(s.TEXTURE_2D,St,Yt,jt.width,jt.height,0,jt.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Q?Lt&&i.texSubImage2D(s.TEXTURE_2D,St,0,0,jt.width,jt.height,Bt,te,jt.data):i.texImage2D(s.TEXTURE_2D,St,Yt,jt.width,jt.height,0,Bt,te,jt.data)}else if(A.isDataArrayTexture)if(Q){if(qt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Zt,Yt,Ot.width,Ot.height,Ot.depth),Lt)if(A.layerUpdates.size>0){const St=Ev(Ot.width,Ot.height,A.format,A.type);for(const Ct of A.layerUpdates){const Ht=Ot.data.subarray(Ct*St/Ot.data.BYTES_PER_ELEMENT,(Ct+1)*St/Ot.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ct,Ot.width,Ot.height,1,Bt,te,Ht)}A.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ot.width,Ot.height,Ot.depth,Bt,te,Ot.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Yt,Ot.width,Ot.height,Ot.depth,0,Bt,te,Ot.data);else if(A.isData3DTexture)Q?(qt&&i.texStorage3D(s.TEXTURE_3D,Zt,Yt,Ot.width,Ot.height,Ot.depth),Lt&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ot.width,Ot.height,Ot.depth,Bt,te,Ot.data)):i.texImage3D(s.TEXTURE_3D,0,Yt,Ot.width,Ot.height,Ot.depth,0,Bt,te,Ot.data);else if(A.isFramebufferTexture){if(qt)if(Q)i.texStorage2D(s.TEXTURE_2D,Zt,Yt,Ot.width,Ot.height);else{let St=Ot.width,Ct=Ot.height;for(let Ht=0;Ht<Zt;Ht++)i.texImage2D(s.TEXTURE_2D,Ht,Yt,St,Ct,0,Bt,te,null),St>>=1,Ct>>=1}}else if(De.length>0){if(Q&&qt){const St=Qt(De[0]);i.texStorage2D(s.TEXTURE_2D,Zt,Yt,St.width,St.height)}for(let St=0,Ct=De.length;St<Ct;St++)jt=De[St],Q?Lt&&i.texSubImage2D(s.TEXTURE_2D,St,0,0,Bt,te,jt):i.texImage2D(s.TEXTURE_2D,St,Yt,Bt,te,jt);A.generateMipmaps=!1}else if(Q){if(qt){const St=Qt(Ot);i.texStorage2D(s.TEXTURE_2D,Zt,Yt,St.width,St.height)}Lt&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Bt,te,Ot)}else i.texImage2D(s.TEXTURE_2D,0,Yt,Bt,te,Ot);E(A)&&x(bt),se.__version=_t.version,A.onUpdate&&A.onUpdate(A)}B.__version=A.version}function vt(B,A,K){if(A.image.length!==6)return;const bt=At(B,A),Dt=A.source;i.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+K);const _t=r.get(Dt);if(Dt.version!==_t.__version||bt===!0){i.activeTexture(s.TEXTURE0+K);const se=$e.getPrimaries($e.workingColorSpace),Vt=A.colorSpace===Zr?null:$e.getPrimaries(A.colorSpace),ae=A.colorSpace===Zr||se===Vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const de=A.isCompressedTexture||A.image[0].isCompressedTexture,Ot=A.image[0]&&A.image[0].isDataTexture,Bt=[];for(let Ct=0;Ct<6;Ct++)!de&&!Ot?Bt[Ct]=R(A.image[Ct],!0,l.maxCubemapSize):Bt[Ct]=Ot?A.image[Ct].image:A.image[Ct],Bt[Ct]=xe(A,Bt[Ct]);const te=Bt[0],Yt=c.convert(A.format,A.colorSpace),jt=c.convert(A.type),De=N(A.internalFormat,Yt,jt,A.colorSpace),Q=A.isVideoTexture!==!0,qt=_t.__version===void 0||bt===!0,Lt=Dt.dataReady;let Zt=z(A,te);ct(s.TEXTURE_CUBE_MAP,A);let St;if(de){Q&&qt&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Zt,De,te.width,te.height);for(let Ct=0;Ct<6;Ct++){St=Bt[Ct].mipmaps;for(let Ht=0;Ht<St.length;Ht++){const me=St[Ht];A.format!==xa?Yt!==null?Q?Lt&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Ht,0,0,me.width,me.height,Yt,me.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Ht,De,me.width,me.height,0,me.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?Lt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Ht,0,0,me.width,me.height,Yt,jt,me.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Ht,De,me.width,me.height,0,Yt,jt,me.data)}}}else{if(St=A.mipmaps,Q&&qt){St.length>0&&Zt++;const Ct=Qt(Bt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Zt,De,Ct.width,Ct.height)}for(let Ct=0;Ct<6;Ct++)if(Ot){Q?Lt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,Bt[Ct].width,Bt[Ct].height,Yt,jt,Bt[Ct].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,De,Bt[Ct].width,Bt[Ct].height,0,Yt,jt,Bt[Ct].data);for(let Ht=0;Ht<St.length;Ht++){const an=St[Ht].image[Ct].image;Q?Lt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Ht+1,0,0,an.width,an.height,Yt,jt,an.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Ht+1,De,an.width,an.height,0,Yt,jt,an.data)}}else{Q?Lt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,Yt,jt,Bt[Ct]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,De,Yt,jt,Bt[Ct]);for(let Ht=0;Ht<St.length;Ht++){const me=St[Ht];Q?Lt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Ht+1,0,0,Yt,jt,me.image[Ct]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Ht+1,De,Yt,jt,me.image[Ct])}}}E(A)&&x(s.TEXTURE_CUBE_MAP),_t.__version=Dt.version,A.onUpdate&&A.onUpdate(A)}B.__version=A.version}function Xt(B,A,K,bt,Dt,_t){const se=c.convert(K.format,K.colorSpace),Vt=c.convert(K.type),ae=N(K.internalFormat,se,Vt,K.colorSpace),de=r.get(A),Ot=r.get(K);if(Ot.__renderTarget=A,!de.__hasExternalTextures){const Bt=Math.max(1,A.width>>_t),te=Math.max(1,A.height>>_t);Dt===s.TEXTURE_3D||Dt===s.TEXTURE_2D_ARRAY?i.texImage3D(Dt,_t,ae,Bt,te,A.depth,0,se,Vt,null):i.texImage2D(Dt,_t,ae,Bt,te,0,se,Vt,null)}i.bindFramebuffer(s.FRAMEBUFFER,B),ge(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,bt,Dt,Ot.__webglTexture,0,k(A)):(Dt===s.TEXTURE_2D||Dt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Dt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,bt,Dt,Ot.__webglTexture,_t),i.bindFramebuffer(s.FRAMEBUFFER,null)}function ie(B,A,K){if(s.bindRenderbuffer(s.RENDERBUFFER,B),A.depthBuffer){const bt=A.depthTexture,Dt=bt&&bt.isDepthTexture?bt.type:null,_t=O(A.stencilBuffer,Dt),se=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ge(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,k(A),_t,A.width,A.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,k(A),_t,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,_t,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,se,s.RENDERBUFFER,B)}else{const bt=A.textures;for(let Dt=0;Dt<bt.length;Dt++){const _t=bt[Dt],se=c.convert(_t.format,_t.colorSpace),Vt=c.convert(_t.type),ae=N(_t.internalFormat,se,Vt,_t.colorSpace);ge(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,k(A),ae,A.width,A.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,k(A),ae,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,ae,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function re(B,A,K){const bt=A.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,B),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Dt=r.get(A.depthTexture);if(Dt.__renderTarget=A,(!Dt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),bt){if(Dt.__webglInit===void 0&&(Dt.__webglInit=!0,A.depthTexture.addEventListener("dispose",P)),Dt.__webglTexture===void 0){Dt.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,Dt.__webglTexture),ct(s.TEXTURE_CUBE_MAP,A.depthTexture);const de=c.convert(A.depthTexture.format),Ot=c.convert(A.depthTexture.type);let Bt;A.depthTexture.format===dr?Bt=s.DEPTH_COMPONENT24:A.depthTexture.format===Ps&&(Bt=s.DEPTH24_STENCIL8);for(let te=0;te<6;te++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Bt,A.width,A.height,0,de,Ot,null)}}else xt(A.depthTexture,0);const _t=Dt.__webglTexture,se=k(A),Vt=bt?s.TEXTURE_CUBE_MAP_POSITIVE_X+K:s.TEXTURE_2D,ae=A.depthTexture.format===Ps?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(A.depthTexture.format===dr)ge(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ae,Vt,_t,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,ae,Vt,_t,0);else if(A.depthTexture.format===Ps)ge(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ae,Vt,_t,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,ae,Vt,_t,0);else throw new Error("Unknown depthTexture format")}function Ne(B){const A=r.get(B),K=B.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==B.depthTexture){const bt=B.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),bt){const Dt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,bt.removeEventListener("dispose",Dt)};bt.addEventListener("dispose",Dt),A.__depthDisposeCallback=Dt}A.__boundDepthTexture=bt}if(B.depthTexture&&!A.__autoAllocateDepthBuffer)if(K)for(let bt=0;bt<6;bt++)re(A.__webglFramebuffer[bt],B,bt);else{const bt=B.texture.mipmaps;bt&&bt.length>0?re(A.__webglFramebuffer[0],B,0):re(A.__webglFramebuffer,B,0)}else if(K){A.__webglDepthbuffer=[];for(let bt=0;bt<6;bt++)if(i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[bt]),A.__webglDepthbuffer[bt]===void 0)A.__webglDepthbuffer[bt]=s.createRenderbuffer(),ie(A.__webglDepthbuffer[bt],B,!1);else{const Dt=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_t=A.__webglDepthbuffer[bt];s.bindRenderbuffer(s.RENDERBUFFER,_t),s.framebufferRenderbuffer(s.FRAMEBUFFER,Dt,s.RENDERBUFFER,_t)}}else{const bt=B.texture.mipmaps;if(bt&&bt.length>0?i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),ie(A.__webglDepthbuffer,B,!1);else{const Dt=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_t=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,_t),s.framebufferRenderbuffer(s.FRAMEBUFFER,Dt,s.RENDERBUFFER,_t)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function ln(B,A,K){const bt=r.get(B);A!==void 0&&Xt(bt.__webglFramebuffer,B,B.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&Ne(B)}function Ie(B){const A=B.texture,K=r.get(B),bt=r.get(A);B.addEventListener("dispose",I);const Dt=B.textures,_t=B.isWebGLCubeRenderTarget===!0,se=Dt.length>1;if(se||(bt.__webglTexture===void 0&&(bt.__webglTexture=s.createTexture()),bt.__version=A.version,h.memory.textures++),_t){K.__webglFramebuffer=[];for(let Vt=0;Vt<6;Vt++)if(A.mipmaps&&A.mipmaps.length>0){K.__webglFramebuffer[Vt]=[];for(let ae=0;ae<A.mipmaps.length;ae++)K.__webglFramebuffer[Vt][ae]=s.createFramebuffer()}else K.__webglFramebuffer[Vt]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){K.__webglFramebuffer=[];for(let Vt=0;Vt<A.mipmaps.length;Vt++)K.__webglFramebuffer[Vt]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(se)for(let Vt=0,ae=Dt.length;Vt<ae;Vt++){const de=r.get(Dt[Vt]);de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture(),h.memory.textures++)}if(B.samples>0&&ge(B)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Vt=0;Vt<Dt.length;Vt++){const ae=Dt[Vt];K.__webglColorRenderbuffer[Vt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[Vt]);const de=c.convert(ae.format,ae.colorSpace),Ot=c.convert(ae.type),Bt=N(ae.internalFormat,de,Ot,ae.colorSpace,B.isXRRenderTarget===!0),te=k(B);s.renderbufferStorageMultisample(s.RENDERBUFFER,te,Bt,B.width,B.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Vt,s.RENDERBUFFER,K.__webglColorRenderbuffer[Vt])}s.bindRenderbuffer(s.RENDERBUFFER,null),B.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),ie(K.__webglDepthRenderbuffer,B,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(_t){i.bindTexture(s.TEXTURE_CUBE_MAP,bt.__webglTexture),ct(s.TEXTURE_CUBE_MAP,A);for(let Vt=0;Vt<6;Vt++)if(A.mipmaps&&A.mipmaps.length>0)for(let ae=0;ae<A.mipmaps.length;ae++)Xt(K.__webglFramebuffer[Vt][ae],B,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,ae);else Xt(K.__webglFramebuffer[Vt],B,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,0);E(A)&&x(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(se){for(let Vt=0,ae=Dt.length;Vt<ae;Vt++){const de=Dt[Vt],Ot=r.get(de);let Bt=s.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Bt=B.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Bt,Ot.__webglTexture),ct(Bt,de),Xt(K.__webglFramebuffer,B,de,s.COLOR_ATTACHMENT0+Vt,Bt,0),E(de)&&x(Bt)}i.unbindTexture()}else{let Vt=s.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Vt=B.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Vt,bt.__webglTexture),ct(Vt,A),A.mipmaps&&A.mipmaps.length>0)for(let ae=0;ae<A.mipmaps.length;ae++)Xt(K.__webglFramebuffer[ae],B,A,s.COLOR_ATTACHMENT0,Vt,ae);else Xt(K.__webglFramebuffer,B,A,s.COLOR_ATTACHMENT0,Vt,0);E(A)&&x(Vt),i.unbindTexture()}B.depthBuffer&&Ne(B)}function Ce(B){const A=B.textures;for(let K=0,bt=A.length;K<bt;K++){const Dt=A[K];if(E(Dt)){const _t=F(B),se=r.get(Dt).__webglTexture;i.bindTexture(_t,se),x(_t),i.unbindTexture()}}}const ke=[],Jt=[];function pe(B){if(B.samples>0){if(ge(B)===!1){const A=B.textures,K=B.width,bt=B.height;let Dt=s.COLOR_BUFFER_BIT;const _t=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=r.get(B),Vt=A.length>1;if(Vt)for(let de=0;de<A.length;de++)i.bindFramebuffer(s.FRAMEBUFFER,se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);const ae=B.texture.mipmaps;ae&&ae.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let de=0;de<A.length;de++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(Dt|=s.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(Dt|=s.STENCIL_BUFFER_BIT)),Vt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,se.__webglColorRenderbuffer[de]);const Ot=r.get(A[de]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ot,0)}s.blitFramebuffer(0,0,K,bt,0,0,K,bt,Dt,s.NEAREST),m===!0&&(ke.length=0,Jt.length=0,ke.push(s.COLOR_ATTACHMENT0+de),B.depthBuffer&&B.resolveDepthBuffer===!1&&(ke.push(_t),Jt.push(_t),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Jt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ke))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Vt)for(let de=0;de<A.length;de++){i.bindFramebuffer(s.FRAMEBUFFER,se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,se.__webglColorRenderbuffer[de]);const Ot=r.get(A[de]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,Ot,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&m){const A=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function k(B){return Math.min(l.maxSamples,B.samples)}function ge(B){const A=r.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Me(B){const A=h.render.frame;g.get(B)!==A&&(g.set(B,A),B.update())}function xe(B,A){const K=B.colorSpace,bt=B.format,Dt=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||K!==Xo&&K!==Zr&&($e.getTransfer(K)===fn?(bt!==xa||Dt!==qi)&&Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nn("WebGLTextures: Unsupported texture color space:",K)),A}function Qt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(p.width=B.naturalWidth||B.width,p.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(p.width=B.displayWidth,p.height=B.displayHeight):(p.width=B.width,p.height=B.height),p}this.allocateTextureUnit=rt,this.resetTextureUnits=$,this.setTexture2D=xt,this.setTexture2DArray=H,this.setTexture3D=Y,this.setTextureCube=st,this.rebindTextures=ln,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Xt,this.useMultisampledRTT=ge,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function LA(s,t){function i(r,l=Zr){let c;const h=$e.getTransfer(l);if(r===qi)return s.UNSIGNED_BYTE;if(r===pm)return s.UNSIGNED_SHORT_4_4_4_4;if(r===mm)return s.UNSIGNED_SHORT_5_5_5_1;if(r===vx)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===xx)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===gx)return s.BYTE;if(r===_x)return s.SHORT;if(r===$l)return s.UNSIGNED_SHORT;if(r===dm)return s.INT;if(r===Oa)return s.UNSIGNED_INT;if(r===Da)return s.FLOAT;if(r===hr)return s.HALF_FLOAT;if(r===yx)return s.ALPHA;if(r===Sx)return s.RGB;if(r===xa)return s.RGBA;if(r===dr)return s.DEPTH_COMPONENT;if(r===Ps)return s.DEPTH_STENCIL;if(r===Mx)return s.RED;if(r===gm)return s.RED_INTEGER;if(r===ko)return s.RG;if(r===_m)return s.RG_INTEGER;if(r===vm)return s.RGBA_INTEGER;if(r===ju||r===Yu||r===qu||r===Zu)if(h===fn)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===ju)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Yu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===qu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Zu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===ju)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Yu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===qu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Zu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Rp||r===Cp||r===wp||r===Dp)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Rp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Cp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===wp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Dp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Up||r===Lp||r===Np||r===Op||r===Pp||r===Fp||r===Ip)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Up||r===Lp)return h===fn?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Np)return h===fn?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Op)return c.COMPRESSED_R11_EAC;if(r===Pp)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Fp)return c.COMPRESSED_RG11_EAC;if(r===Ip)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Bp||r===zp||r===Hp||r===Gp||r===Vp||r===kp||r===Xp||r===Wp||r===jp||r===Yp||r===qp||r===Zp||r===Kp||r===Qp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Bp)return h===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===zp)return h===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Hp)return h===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Gp)return h===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Vp)return h===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===kp)return h===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Xp)return h===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Wp)return h===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===jp)return h===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Yp)return h===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===qp)return h===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Zp)return h===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Kp)return h===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Qp)return h===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===$p||r===Jp||r===tm)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===$p)return h===fn?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Jp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===tm)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===em||r===nm||r===im||r===am)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===em)return c.COMPRESSED_RED_RGTC1_EXT;if(r===nm)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===im)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===am)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Jl?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const NA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class PA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new Ox(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Fa({vertexShader:NA,fragmentShader:OA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ni(new ac(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FA extends Bs{constructor(t,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,g=null,_=null,S=null,b=null,T=null;const R=typeof XRWebGLBinding<"u",E=new PA,x={},F=i.getContextAttributes();let N=null,O=null;const z=[],P=[],I=new Le;let j=null;const C=new ca;C.viewport=new Ln;const U=new ca;U.viewport=new Ln;const X=[C,U],$=new WM;let rt=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(lt){let vt=z[lt];return vt===void 0&&(vt=new Jd,z[lt]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(lt){let vt=z[lt];return vt===void 0&&(vt=new Jd,z[lt]=vt),vt.getGripSpace()},this.getHand=function(lt){let vt=z[lt];return vt===void 0&&(vt=new Jd,z[lt]=vt),vt.getHandSpace()};function xt(lt){const vt=P.indexOf(lt.inputSource);if(vt===-1)return;const Xt=z[vt];Xt!==void 0&&(Xt.update(lt.inputSource,lt.frame,p||h),Xt.dispatchEvent({type:lt.type,data:lt.inputSource}))}function H(){l.removeEventListener("select",xt),l.removeEventListener("selectstart",xt),l.removeEventListener("selectend",xt),l.removeEventListener("squeeze",xt),l.removeEventListener("squeezestart",xt),l.removeEventListener("squeezeend",xt),l.removeEventListener("end",H),l.removeEventListener("inputsourceschange",Y);for(let lt=0;lt<z.length;lt++){const vt=P[lt];vt!==null&&(P[lt]=null,z[lt].disconnect(vt))}rt=null,tt=null,E.reset();for(const lt in x)delete x[lt];t.setRenderTarget(N),b=null,S=null,_=null,l=null,O=null,kt.stop(),r.isPresenting=!1,t.setPixelRatio(j),t.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(lt){c=lt,r.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(lt){d=lt,r.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(lt){p=lt},this.getBaseLayer=function(){return S!==null?S:b},this.getBinding=function(){return _===null&&R&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(lt){if(l=lt,l!==null){if(N=t.getRenderTarget(),l.addEventListener("select",xt),l.addEventListener("selectstart",xt),l.addEventListener("selectend",xt),l.addEventListener("squeeze",xt),l.addEventListener("squeezestart",xt),l.addEventListener("squeezeend",xt),l.addEventListener("end",H),l.addEventListener("inputsourceschange",Y),F.xrCompatible!==!0&&await i.makeXRCompatible(),j=t.getPixelRatio(),t.getSize(I),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Xt=null,ie=null,re=null;F.depth&&(re=F.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Xt=F.stencil?Ps:dr,ie=F.stencil?Jl:Oa);const Ne={colorFormat:i.RGBA8,depthFormat:re,scaleFactor:c};_=this.getBinding(),S=_.createProjectionLayer(Ne),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),O=new Na(S.textureWidth,S.textureHeight,{format:xa,type:qi,depthTexture:new ec(S.textureWidth,S.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,Xt),stencilBuffer:F.stencil,colorSpace:t.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Xt={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(l,i,Xt),l.updateRenderState({baseLayer:b}),t.setPixelRatio(1),t.setSize(b.framebufferWidth,b.framebufferHeight,!1),O=new Na(b.framebufferWidth,b.framebufferHeight,{format:xa,type:qi,colorSpace:t.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),kt.setContext(l),kt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function Y(lt){for(let vt=0;vt<lt.removed.length;vt++){const Xt=lt.removed[vt],ie=P.indexOf(Xt);ie>=0&&(P[ie]=null,z[ie].disconnect(Xt))}for(let vt=0;vt<lt.added.length;vt++){const Xt=lt.added[vt];let ie=P.indexOf(Xt);if(ie===-1){for(let Ne=0;Ne<z.length;Ne++)if(Ne>=P.length){P.push(Xt),ie=Ne;break}else if(P[Ne]===null){P[Ne]=Xt,ie=Ne;break}if(ie===-1)break}const re=z[ie];re&&re.connect(Xt)}}const st=new it,Ft=new it;function Nt(lt,vt,Xt){st.setFromMatrixPosition(vt.matrixWorld),Ft.setFromMatrixPosition(Xt.matrixWorld);const ie=st.distanceTo(Ft),re=vt.projectionMatrix.elements,Ne=Xt.projectionMatrix.elements,ln=re[14]/(re[10]-1),Ie=re[14]/(re[10]+1),Ce=(re[9]+1)/re[5],ke=(re[9]-1)/re[5],Jt=(re[8]-1)/re[0],pe=(Ne[8]+1)/Ne[0],k=ln*Jt,ge=ln*pe,Me=ie/(-Jt+pe),xe=Me*-Jt;if(vt.matrixWorld.decompose(lt.position,lt.quaternion,lt.scale),lt.translateX(xe),lt.translateZ(Me),lt.matrixWorld.compose(lt.position,lt.quaternion,lt.scale),lt.matrixWorldInverse.copy(lt.matrixWorld).invert(),re[10]===-1)lt.projectionMatrix.copy(vt.projectionMatrix),lt.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const Qt=ln+Me,B=Ie+Me,A=k-xe,K=ge+(ie-xe),bt=Ce*Ie/B*Qt,Dt=ke*Ie/B*Qt;lt.projectionMatrix.makePerspective(A,K,bt,Dt,Qt,B),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert()}}function G(lt,vt){vt===null?lt.matrixWorld.copy(lt.matrix):lt.matrixWorld.multiplyMatrices(vt.matrixWorld,lt.matrix),lt.matrixWorldInverse.copy(lt.matrixWorld).invert()}this.updateCamera=function(lt){if(l===null)return;let vt=lt.near,Xt=lt.far;E.texture!==null&&(E.depthNear>0&&(vt=E.depthNear),E.depthFar>0&&(Xt=E.depthFar)),$.near=U.near=C.near=vt,$.far=U.far=C.far=Xt,(rt!==$.near||tt!==$.far)&&(l.updateRenderState({depthNear:$.near,depthFar:$.far}),rt=$.near,tt=$.far),$.layers.mask=lt.layers.mask|6,C.layers.mask=$.layers.mask&3,U.layers.mask=$.layers.mask&5;const ie=lt.parent,re=$.cameras;G($,ie);for(let Ne=0;Ne<re.length;Ne++)G(re[Ne],ie);re.length===2?Nt($,C,U):$.projectionMatrix.copy(C.projectionMatrix),ct(lt,$,ie)};function ct(lt,vt,Xt){Xt===null?lt.matrix.copy(vt.matrixWorld):(lt.matrix.copy(Xt.matrixWorld),lt.matrix.invert(),lt.matrix.multiply(vt.matrixWorld)),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.updateMatrixWorld(!0),lt.projectionMatrix.copy(vt.projectionMatrix),lt.projectionMatrixInverse.copy(vt.projectionMatrixInverse),lt.isPerspectiveCamera&&(lt.fov=rm*2*Math.atan(1/lt.projectionMatrix.elements[5]),lt.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(S===null&&b===null))return m},this.setFoveation=function(lt){m=lt,S!==null&&(S.fixedFoveation=lt),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=lt)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh($)},this.getCameraTexture=function(lt){return x[lt]};let At=null;function Gt(lt,vt){if(g=vt.getViewerPose(p||h),T=vt,g!==null){const Xt=g.views;b!==null&&(t.setRenderTargetFramebuffer(O,b.framebuffer),t.setRenderTarget(O));let ie=!1;Xt.length!==$.cameras.length&&($.cameras.length=0,ie=!0);for(let Ie=0;Ie<Xt.length;Ie++){const Ce=Xt[Ie];let ke=null;if(b!==null)ke=b.getViewport(Ce);else{const pe=_.getViewSubImage(S,Ce);ke=pe.viewport,Ie===0&&(t.setRenderTargetTextures(O,pe.colorTexture,pe.depthStencilTexture),t.setRenderTarget(O))}let Jt=X[Ie];Jt===void 0&&(Jt=new ca,Jt.layers.enable(Ie),Jt.viewport=new Ln,X[Ie]=Jt),Jt.matrix.fromArray(Ce.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(Ce.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(ke.x,ke.y,ke.width,ke.height),Ie===0&&($.matrix.copy(Jt.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),ie===!0&&$.cameras.push(Jt)}const re=l.enabledFeatures;if(re&&re.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){_=r.getBinding();const Ie=_.getDepthInformation(Xt[0]);Ie&&Ie.isValid&&Ie.texture&&E.init(Ie,l.renderState)}if(re&&re.includes("camera-access")&&R){t.state.unbindTexture(),_=r.getBinding();for(let Ie=0;Ie<Xt.length;Ie++){const Ce=Xt[Ie].camera;if(Ce){let ke=x[Ce];ke||(ke=new Ox,x[Ce]=ke);const Jt=_.getCameraImage(Ce);ke.sourceTexture=Jt}}}}for(let Xt=0;Xt<z.length;Xt++){const ie=P[Xt],re=z[Xt];ie!==null&&re!==void 0&&re.update(ie,vt,p||h)}At&&At(lt,vt),vt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:vt}),T=null}const kt=new Fx;kt.setAnimationLoop(Gt),this.setAnimationLoop=function(lt){At=lt},this.dispose=function(){}}}const Us=new Pa,IA=new Tn;function BA(s,t){function i(E,x){E.matrixAutoUpdate===!0&&E.updateMatrix(),x.value.copy(E.matrix)}function r(E,x){x.color.getRGB(E.fogColor.value,Dx(s)),x.isFog?(E.fogNear.value=x.near,E.fogFar.value=x.far):x.isFogExp2&&(E.fogDensity.value=x.density)}function l(E,x,F,N,O){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(E,x):x.isMeshToonMaterial?(c(E,x),_(E,x)):x.isMeshPhongMaterial?(c(E,x),g(E,x)):x.isMeshStandardMaterial?(c(E,x),S(E,x),x.isMeshPhysicalMaterial&&b(E,x,O)):x.isMeshMatcapMaterial?(c(E,x),T(E,x)):x.isMeshDepthMaterial?c(E,x):x.isMeshDistanceMaterial?(c(E,x),R(E,x)):x.isMeshNormalMaterial?c(E,x):x.isLineBasicMaterial?(h(E,x),x.isLineDashedMaterial&&d(E,x)):x.isPointsMaterial?m(E,x,F,N):x.isSpriteMaterial?p(E,x):x.isShadowMaterial?(E.color.value.copy(x.color),E.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(E,x){E.opacity.value=x.opacity,x.color&&E.diffuse.value.copy(x.color),x.emissive&&E.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(E.map.value=x.map,i(x.map,E.mapTransform)),x.alphaMap&&(E.alphaMap.value=x.alphaMap,i(x.alphaMap,E.alphaMapTransform)),x.bumpMap&&(E.bumpMap.value=x.bumpMap,i(x.bumpMap,E.bumpMapTransform),E.bumpScale.value=x.bumpScale,x.side===Oi&&(E.bumpScale.value*=-1)),x.normalMap&&(E.normalMap.value=x.normalMap,i(x.normalMap,E.normalMapTransform),E.normalScale.value.copy(x.normalScale),x.side===Oi&&E.normalScale.value.negate()),x.displacementMap&&(E.displacementMap.value=x.displacementMap,i(x.displacementMap,E.displacementMapTransform),E.displacementScale.value=x.displacementScale,E.displacementBias.value=x.displacementBias),x.emissiveMap&&(E.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,E.emissiveMapTransform)),x.specularMap&&(E.specularMap.value=x.specularMap,i(x.specularMap,E.specularMapTransform)),x.alphaTest>0&&(E.alphaTest.value=x.alphaTest);const F=t.get(x),N=F.envMap,O=F.envMapRotation;N&&(E.envMap.value=N,Us.copy(O),Us.x*=-1,Us.y*=-1,Us.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),E.envMapRotation.value.setFromMatrix4(IA.makeRotationFromEuler(Us)),E.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,E.reflectivity.value=x.reflectivity,E.ior.value=x.ior,E.refractionRatio.value=x.refractionRatio),x.lightMap&&(E.lightMap.value=x.lightMap,E.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,E.lightMapTransform)),x.aoMap&&(E.aoMap.value=x.aoMap,E.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,E.aoMapTransform))}function h(E,x){E.diffuse.value.copy(x.color),E.opacity.value=x.opacity,x.map&&(E.map.value=x.map,i(x.map,E.mapTransform))}function d(E,x){E.dashSize.value=x.dashSize,E.totalSize.value=x.dashSize+x.gapSize,E.scale.value=x.scale}function m(E,x,F,N){E.diffuse.value.copy(x.color),E.opacity.value=x.opacity,E.size.value=x.size*F,E.scale.value=N*.5,x.map&&(E.map.value=x.map,i(x.map,E.uvTransform)),x.alphaMap&&(E.alphaMap.value=x.alphaMap,i(x.alphaMap,E.alphaMapTransform)),x.alphaTest>0&&(E.alphaTest.value=x.alphaTest)}function p(E,x){E.diffuse.value.copy(x.color),E.opacity.value=x.opacity,E.rotation.value=x.rotation,x.map&&(E.map.value=x.map,i(x.map,E.mapTransform)),x.alphaMap&&(E.alphaMap.value=x.alphaMap,i(x.alphaMap,E.alphaMapTransform)),x.alphaTest>0&&(E.alphaTest.value=x.alphaTest)}function g(E,x){E.specular.value.copy(x.specular),E.shininess.value=Math.max(x.shininess,1e-4)}function _(E,x){x.gradientMap&&(E.gradientMap.value=x.gradientMap)}function S(E,x){E.metalness.value=x.metalness,x.metalnessMap&&(E.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,E.metalnessMapTransform)),E.roughness.value=x.roughness,x.roughnessMap&&(E.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,E.roughnessMapTransform)),x.envMap&&(E.envMapIntensity.value=x.envMapIntensity)}function b(E,x,F){E.ior.value=x.ior,x.sheen>0&&(E.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),E.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(E.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,E.sheenColorMapTransform)),x.sheenRoughnessMap&&(E.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,E.sheenRoughnessMapTransform))),x.clearcoat>0&&(E.clearcoat.value=x.clearcoat,E.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(E.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,E.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(E.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Oi&&E.clearcoatNormalScale.value.negate())),x.dispersion>0&&(E.dispersion.value=x.dispersion),x.iridescence>0&&(E.iridescence.value=x.iridescence,E.iridescenceIOR.value=x.iridescenceIOR,E.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(E.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,E.iridescenceMapTransform)),x.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),x.transmission>0&&(E.transmission.value=x.transmission,E.transmissionSamplerMap.value=F.texture,E.transmissionSamplerSize.value.set(F.width,F.height),x.transmissionMap&&(E.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,E.transmissionMapTransform)),E.thickness.value=x.thickness,x.thicknessMap&&(E.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=x.attenuationDistance,E.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(E.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(E.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,E.anisotropyMapTransform))),E.specularIntensity.value=x.specularIntensity,E.specularColor.value.copy(x.specularColor),x.specularColorMap&&(E.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,E.specularColorMapTransform)),x.specularIntensityMap&&(E.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,E.specularIntensityMapTransform))}function T(E,x){x.matcap&&(E.matcap.value=x.matcap)}function R(E,x){const F=t.get(x).light;E.referencePosition.value.setFromMatrixPosition(F.matrixWorld),E.nearDistance.value=F.shadow.camera.near,E.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function zA(s,t,i,r){let l={},c={},h=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(F,N){const O=N.program;r.uniformBlockBinding(F,O)}function p(F,N){let O=l[F.id];O===void 0&&(T(F),O=g(F),l[F.id]=O,F.addEventListener("dispose",E));const z=N.program;r.updateUBOMapping(F,z);const P=t.render.frame;c[F.id]!==P&&(S(F),c[F.id]=P)}function g(F){const N=_();F.__bindingPointIndex=N;const O=s.createBuffer(),z=F.__size,P=F.usage;return s.bindBuffer(s.UNIFORM_BUFFER,O),s.bufferData(s.UNIFORM_BUFFER,z,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,O),O}function _(){for(let F=0;F<d;F++)if(h.indexOf(F)===-1)return h.push(F),F;return nn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(F){const N=l[F.id],O=F.uniforms,z=F.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let P=0,I=O.length;P<I;P++){const j=Array.isArray(O[P])?O[P]:[O[P]];for(let C=0,U=j.length;C<U;C++){const X=j[C];if(b(X,P,C,z)===!0){const $=X.__offset,rt=Array.isArray(X.value)?X.value:[X.value];let tt=0;for(let xt=0;xt<rt.length;xt++){const H=rt[xt],Y=R(H);typeof H=="number"||typeof H=="boolean"?(X.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,$+tt,X.__data)):H.isMatrix3?(X.__data[0]=H.elements[0],X.__data[1]=H.elements[1],X.__data[2]=H.elements[2],X.__data[3]=0,X.__data[4]=H.elements[3],X.__data[5]=H.elements[4],X.__data[6]=H.elements[5],X.__data[7]=0,X.__data[8]=H.elements[6],X.__data[9]=H.elements[7],X.__data[10]=H.elements[8],X.__data[11]=0):(H.toArray(X.__data,tt),tt+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,$,X.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function b(F,N,O,z){const P=F.value,I=N+"_"+O;if(z[I]===void 0)return typeof P=="number"||typeof P=="boolean"?z[I]=P:z[I]=P.clone(),!0;{const j=z[I];if(typeof P=="number"||typeof P=="boolean"){if(j!==P)return z[I]=P,!0}else if(j.equals(P)===!1)return j.copy(P),!0}return!1}function T(F){const N=F.uniforms;let O=0;const z=16;for(let I=0,j=N.length;I<j;I++){const C=Array.isArray(N[I])?N[I]:[N[I]];for(let U=0,X=C.length;U<X;U++){const $=C[U],rt=Array.isArray($.value)?$.value:[$.value];for(let tt=0,xt=rt.length;tt<xt;tt++){const H=rt[tt],Y=R(H),st=O%z,Ft=st%Y.boundary,Nt=st+Ft;O+=Ft,Nt!==0&&z-Nt<Y.storage&&(O+=z-Nt),$.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=O,O+=Y.storage}}}const P=O%z;return P>0&&(O+=z-P),F.__size=O,F.__cache={},this}function R(F){const N={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(N.boundary=4,N.storage=4):F.isVector2?(N.boundary=8,N.storage=8):F.isVector3||F.isColor?(N.boundary=16,N.storage=12):F.isVector4?(N.boundary=16,N.storage=16):F.isMatrix3?(N.boundary=48,N.storage=48):F.isMatrix4?(N.boundary=64,N.storage=64):F.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ae("WebGLRenderer: Unsupported uniform value type.",F),N}function E(F){const N=F.target;N.removeEventListener("dispose",E);const O=h.indexOf(N.__bindingPointIndex);h.splice(O,1),s.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function x(){for(const F in l)s.deleteBuffer(l[F]);h=[],l={},c={}}return{bind:m,update:p,dispose:x}}const HA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ca=null;function GA(){return Ca===null&&(Ca=new RM(HA,16,16,ko,hr),Ca.name="DFG_LUT",Ca.minFilter=hi,Ca.magFilter=hi,Ca.wrapS=cr,Ca.wrapT=cr,Ca.generateMipmaps=!1,Ca.needsUpdate=!0),Ca}class VA{constructor(t={}){const{canvas:i=JS(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:S=!1,outputBufferType:b=qi}=t;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=h;const R=b,E=new Set([vm,_m,gm]),x=new Set([qi,Oa,$l,Jl,pm,mm]),F=new Uint32Array(4),N=new Int32Array(4);let O=null,z=null;const P=[],I=[];let j=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=La,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let U=!1;this._outputColorSpace=ji;let X=0,$=0,rt=null,tt=-1,xt=null;const H=new Ln,Y=new Ln;let st=null;const Ft=new He(0);let Nt=0,G=i.width,ct=i.height,At=1,Gt=null,kt=null;const lt=new Ln(0,0,G,ct),vt=new Ln(0,0,G,ct);let Xt=!1;const ie=new Em;let re=!1,Ne=!1;const ln=new Tn,Ie=new it,Ce=new Ln,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Jt=!1;function pe(){return rt===null?At:1}let k=r;function ge(w,J){return i.getContext(w,J)}try{const w={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${fm}`),i.addEventListener("webglcontextlost",me,!1),i.addEventListener("webglcontextrestored",an,!1),i.addEventListener("webglcontextcreationerror",je,!1),k===null){const J="webgl2";if(k=ge(J,w),k===null)throw ge(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw nn("WebGLRenderer: "+w.message),w}let Me,xe,Qt,B,A,K,bt,Dt,_t,se,Vt,ae,de,Ot,Bt,te,Yt,jt,De,Q,qt,Lt,Zt,St;function Ct(){Me=new GT(k),Me.init(),Lt=new LA(k,Me),xe=new LT(k,Me,t,Lt),Qt=new DA(k,Me),xe.reversedDepthBuffer&&S&&Qt.buffers.depth.setReversed(!0),B=new XT(k),A=new mA,K=new UA(k,Me,Qt,A,xe,Lt,B),bt=new OT(C),Dt=new HT(C),_t=new qM(k),Zt=new DT(k,_t),se=new VT(k,_t,B,Zt),Vt=new jT(k,se,_t,B),De=new WT(k,xe,K),te=new NT(A),ae=new pA(C,bt,Dt,Me,xe,Zt,te),de=new BA(C,A),Ot=new _A,Bt=new bA(Me),jt=new wT(C,bt,Dt,Qt,Vt,T,m),Yt=new CA(C,Vt,xe),St=new zA(k,B,xe,Qt),Q=new UT(k,Me,B),qt=new kT(k,Me,B),B.programs=ae.programs,C.capabilities=xe,C.extensions=Me,C.properties=A,C.renderLists=Ot,C.shadowMap=Yt,C.state=Qt,C.info=B}Ct(),R!==qi&&(j=new qT(R,i.width,i.height,l,c));const Ht=new FA(C,k);this.xr=Ht,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=Me.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Me.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return At},this.setPixelRatio=function(w){w!==void 0&&(At=w,this.setSize(G,ct,!1))},this.getSize=function(w){return w.set(G,ct)},this.setSize=function(w,J,mt=!0){if(Ht.isPresenting){Ae("WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,ct=J,i.width=Math.floor(w*At),i.height=Math.floor(J*At),mt===!0&&(i.style.width=w+"px",i.style.height=J+"px"),j!==null&&j.setSize(i.width,i.height),this.setViewport(0,0,w,J)},this.getDrawingBufferSize=function(w){return w.set(G*At,ct*At).floor()},this.setDrawingBufferSize=function(w,J,mt){G=w,ct=J,At=mt,i.width=Math.floor(w*mt),i.height=Math.floor(J*mt),this.setViewport(0,0,w,J)},this.setEffects=function(w){if(R===qi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let J=0;J<w.length;J++)if(w[J].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}j.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(H)},this.getViewport=function(w){return w.copy(lt)},this.setViewport=function(w,J,mt,dt){w.isVector4?lt.set(w.x,w.y,w.z,w.w):lt.set(w,J,mt,dt),Qt.viewport(H.copy(lt).multiplyScalar(At).round())},this.getScissor=function(w){return w.copy(vt)},this.setScissor=function(w,J,mt,dt){w.isVector4?vt.set(w.x,w.y,w.z,w.w):vt.set(w,J,mt,dt),Qt.scissor(Y.copy(vt).multiplyScalar(At).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(w){Qt.setScissorTest(Xt=w)},this.setOpaqueSort=function(w){Gt=w},this.setTransparentSort=function(w){kt=w},this.getClearColor=function(w){return w.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(w=!0,J=!0,mt=!0){let dt=0;if(w){let at=!1;if(rt!==null){const Kt=rt.texture.format;at=E.has(Kt)}if(at){const Kt=rt.texture.type,ne=x.has(Kt),$t=jt.getClearColor(),oe=jt.getClearAlpha(),ue=$t.r,_e=$t.g,le=$t.b;ne?(F[0]=ue,F[1]=_e,F[2]=le,F[3]=oe,k.clearBufferuiv(k.COLOR,0,F)):(N[0]=ue,N[1]=_e,N[2]=le,N[3]=oe,k.clearBufferiv(k.COLOR,0,N))}else dt|=k.COLOR_BUFFER_BIT}J&&(dt|=k.DEPTH_BUFFER_BIT),mt&&(dt|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(dt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",me,!1),i.removeEventListener("webglcontextrestored",an,!1),i.removeEventListener("webglcontextcreationerror",je,!1),jt.dispose(),Ot.dispose(),Bt.dispose(),A.dispose(),bt.dispose(),Dt.dispose(),Vt.dispose(),Zt.dispose(),St.dispose(),ae.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",Ba),Ht.removeEventListener("sessionend",ts),Zi.stop()};function me(w){w.preventDefault(),Q_("WebGLRenderer: Context Lost."),U=!0}function an(){Q_("WebGLRenderer: Context Restored."),U=!1;const w=B.autoReset,J=Yt.enabled,mt=Yt.autoUpdate,dt=Yt.needsUpdate,at=Yt.type;Ct(),B.autoReset=w,Yt.enabled=J,Yt.autoUpdate=mt,Yt.needsUpdate=dt,Yt.type=at}function je(w){nn("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function In(w){const J=w.target;J.removeEventListener("dispose",In),di(J)}function di(w){$r(w),A.remove(w)}function $r(w){const J=A.get(w).programs;J!==void 0&&(J.forEach(function(mt){ae.releaseProgram(mt)}),w.isShaderMaterial&&ae.releaseShaderCache(w))}this.renderBufferDirect=function(w,J,mt,dt,at,Kt){J===null&&(J=ke);const ne=at.isMesh&&at.matrixWorld.determinant()<0,$t=Qi(w,J,mt,dt,at);Qt.setMaterial(dt,ne);let oe=mt.index,ue=1;if(dt.wireframe===!0){if(oe=se.getWireframeAttribute(mt),oe===void 0)return;ue=2}const _e=mt.drawRange,le=mt.attributes.position;let ye=_e.start*ue,Ke=(_e.start+_e.count)*ue;Kt!==null&&(ye=Math.max(ye,Kt.start*ue),Ke=Math.min(Ke,(Kt.start+Kt.count)*ue)),oe!==null?(ye=Math.max(ye,0),Ke=Math.min(Ke,oe.count)):le!=null&&(ye=Math.max(ye,0),Ke=Math.min(Ke,le.count));const rn=Ke-ye;if(rn<0||rn===1/0)return;Zt.setup(at,dt,$t,mt,oe);let sn,Je=Q;if(oe!==null&&(sn=_t.get(oe),Je=qt,Je.setIndex(sn)),at.isMesh)dt.wireframe===!0?(Qt.setLineWidth(dt.wireframeLinewidth*pe()),Je.setMode(k.LINES)):Je.setMode(k.TRIANGLES);else if(at.isLine){let he=dt.linewidth;he===void 0&&(he=1),Qt.setLineWidth(he*pe()),at.isLineSegments?Je.setMode(k.LINES):at.isLineLoop?Je.setMode(k.LINE_LOOP):Je.setMode(k.LINE_STRIP)}else at.isPoints?Je.setMode(k.POINTS):at.isSprite&&Je.setMode(k.TRIANGLES);if(at.isBatchedMesh)if(at._multiDrawInstances!==null)tc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Je.renderMultiDrawInstances(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount,at._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))Je.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else{const he=at._multiDrawStarts,Ue=at._multiDrawCounts,Re=at._multiDrawCount,Bn=oe?_t.get(oe).bytesPerElement:1,Ji=A.get(dt).currentProgram.getUniforms();for(let Cn=0;Cn<Re;Cn++)Ji.setValue(k,"_gl_DrawID",Cn),Je.render(he[Cn]/Bn,Ue[Cn])}else if(at.isInstancedMesh)Je.renderInstances(ye,rn,at.count);else if(mt.isInstancedBufferGeometry){const he=mt._maxInstanceCount!==void 0?mt._maxInstanceCount:1/0,Ue=Math.min(mt.instanceCount,he);Je.renderInstances(ye,rn,Ue)}else Je.render(ye,rn)};function Jr(w,J,mt){w.transparent===!0&&w.side===Yi&&w.forceSinglePass===!1?(w.side=Oi,w.needsUpdate=!0,Ki(w,J,mt),w.side=Qr,w.needsUpdate=!0,Ki(w,J,mt),w.side=Yi):Ki(w,J,mt)}this.compile=function(w,J,mt=null){mt===null&&(mt=w),z=Bt.get(mt),z.init(J),I.push(z),mt.traverseVisible(function(at){at.isLight&&at.layers.test(J.layers)&&(z.pushLight(at),at.castShadow&&z.pushShadow(at))}),w!==mt&&w.traverseVisible(function(at){at.isLight&&at.layers.test(J.layers)&&(z.pushLight(at),at.castShadow&&z.pushShadow(at))}),z.setupLights();const dt=new Set;return w.traverse(function(at){if(!(at.isMesh||at.isPoints||at.isLine||at.isSprite))return;const Kt=at.material;if(Kt)if(Array.isArray(Kt))for(let ne=0;ne<Kt.length;ne++){const $t=Kt[ne];Jr($t,mt,at),dt.add($t)}else Jr(Kt,mt,at),dt.add(Kt)}),z=I.pop(),dt},this.compileAsync=function(w,J,mt=null){const dt=this.compile(w,J,mt);return new Promise(at=>{function Kt(){if(dt.forEach(function(ne){A.get(ne).currentProgram.isReady()&&dt.delete(ne)}),dt.size===0){at(w);return}setTimeout(Kt,10)}Me.get("KHR_parallel_shader_compile")!==null?Kt():setTimeout(Kt,10)})};let Ia=null;function pr(w){Ia&&Ia(w)}function Ba(){Zi.stop()}function ts(){Zi.start()}const Zi=new Fx;Zi.setAnimationLoop(pr),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(w){Ia=w,Ht.setAnimationLoop(w),w===null?Zi.stop():Zi.start()},Ht.addEventListener("sessionstart",Ba),Ht.addEventListener("sessionend",ts),this.render=function(w,J){if(J!==void 0&&J.isCamera!==!0){nn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;const mt=Ht.enabled===!0&&Ht.isPresenting===!0,dt=j!==null&&(rt===null||mt)&&j.begin(C,rt);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(j===null||j.isCompositing()===!1)&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(J),J=Ht.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,J,rt),z=Bt.get(w,I.length),z.init(J),I.push(z),ln.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),ie.setFromProjectionMatrix(ln,Ua,J.reversedDepth),Ne=this.localClippingEnabled,re=te.init(this.clippingPlanes,Ne),O=Ot.get(w,P.length),O.init(),P.push(O),Ht.enabled===!0&&Ht.isPresenting===!0){const ne=C.xr.getDepthSensingMesh();ne!==null&&Qn(ne,J,-1/0,C.sortObjects)}Qn(w,J,0,C.sortObjects),O.finish(),C.sortObjects===!0&&O.sort(Gt,kt),Jt=Ht.enabled===!1||Ht.isPresenting===!1||Ht.hasDepthSensing()===!1,Jt&&jt.addToRenderList(O,w),this.info.render.frame++,re===!0&&te.beginShadows();const at=z.state.shadowsArray;if(Yt.render(at,w,J),re===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(dt&&j.hasRenderPass())===!1){const ne=O.opaque,$t=O.transmissive;if(z.setupLights(),J.isArrayCamera){const oe=J.cameras;if($t.length>0)for(let ue=0,_e=oe.length;ue<_e;ue++){const le=oe[ue];An(ne,$t,w,le)}Jt&&jt.render(w);for(let ue=0,_e=oe.length;ue<_e;ue++){const le=oe[ue];Mn(O,w,le,le.viewport)}}else $t.length>0&&An(ne,$t,w,J),Jt&&jt.render(w),Mn(O,w,J)}rt!==null&&$===0&&(K.updateMultisampleRenderTarget(rt),K.updateRenderTargetMipmap(rt)),dt&&j.end(C),w.isScene===!0&&w.onAfterRender(C,w,J),Zt.resetDefaultState(),tt=-1,xt=null,I.pop(),I.length>0?(z=I[I.length-1],re===!0&&te.setGlobalState(C.clippingPlanes,z.state.camera)):z=null,P.pop(),P.length>0?O=P[P.length-1]:O=null};function Qn(w,J,mt,dt){if(w.visible===!1)return;if(w.layers.test(J.layers)){if(w.isGroup)mt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(J);else if(w.isLight)z.pushLight(w),w.castShadow&&z.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ie.intersectsSprite(w)){dt&&Ce.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ln);const ne=Vt.update(w),$t=w.material;$t.visible&&O.push(w,ne,$t,mt,Ce.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ie.intersectsObject(w))){const ne=Vt.update(w),$t=w.material;if(dt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ce.copy(w.boundingSphere.center)):(ne.boundingSphere===null&&ne.computeBoundingSphere(),Ce.copy(ne.boundingSphere.center)),Ce.applyMatrix4(w.matrixWorld).applyMatrix4(ln)),Array.isArray($t)){const oe=ne.groups;for(let ue=0,_e=oe.length;ue<_e;ue++){const le=oe[ue],ye=$t[le.materialIndex];ye&&ye.visible&&O.push(w,ne,ye,mt,Ce.z,le)}}else $t.visible&&O.push(w,ne,$t,mt,Ce.z,null)}}const Kt=w.children;for(let ne=0,$t=Kt.length;ne<$t;ne++)Qn(Kt[ne],J,mt,dt)}function Mn(w,J,mt,dt){const{opaque:at,transmissive:Kt,transparent:ne}=w;z.setupLightsView(mt),re===!0&&te.setGlobalState(C.clippingPlanes,mt),dt&&Qt.viewport(H.copy(dt)),at.length>0&&Pi(at,J,mt),Kt.length>0&&Pi(Kt,J,mt),ne.length>0&&Pi(ne,J,mt),Qt.buffers.depth.setTest(!0),Qt.buffers.depth.setMask(!0),Qt.buffers.color.setMask(!0),Qt.setPolygonOffset(!1)}function An(w,J,mt,dt){if((mt.isScene===!0?mt.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[dt.id]===void 0){const ye=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[dt.id]=new Na(1,1,{generateMipmaps:!0,type:ye?hr:qi,minFilter:Os,samples:xe.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace})}const Kt=z.state.transmissionRenderTarget[dt.id],ne=dt.viewport||H;Kt.setSize(ne.z*C.transmissionResolutionScale,ne.w*C.transmissionResolutionScale);const $t=C.getRenderTarget(),oe=C.getActiveCubeFace(),ue=C.getActiveMipmapLevel();C.setRenderTarget(Kt),C.getClearColor(Ft),Nt=C.getClearAlpha(),Nt<1&&C.setClearColor(16777215,.5),C.clear(),Jt&&jt.render(mt);const _e=C.toneMapping;C.toneMapping=La;const le=dt.viewport;if(dt.viewport!==void 0&&(dt.viewport=void 0),z.setupLightsView(dt),re===!0&&te.setGlobalState(C.clippingPlanes,dt),Pi(w,mt,dt),K.updateMultisampleRenderTarget(Kt),K.updateRenderTargetMipmap(Kt),Me.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let Ke=0,rn=J.length;Ke<rn;Ke++){const sn=J[Ke],{object:Je,geometry:he,material:Ue,group:Re}=sn;if(Ue.side===Yi&&Je.layers.test(dt.layers)){const Bn=Ue.side;Ue.side=Oi,Ue.needsUpdate=!0,mr(Je,mt,dt,he,Ue,Re),Ue.side=Bn,Ue.needsUpdate=!0,ye=!0}}ye===!0&&(K.updateMultisampleRenderTarget(Kt),K.updateRenderTargetMipmap(Kt))}C.setRenderTarget($t,oe,ue),C.setClearColor(Ft,Nt),le!==void 0&&(dt.viewport=le),C.toneMapping=_e}function Pi(w,J,mt){const dt=J.isScene===!0?J.overrideMaterial:null;for(let at=0,Kt=w.length;at<Kt;at++){const ne=w[at],{object:$t,geometry:oe,group:ue}=ne;let _e=ne.material;_e.allowOverride===!0&&dt!==null&&(_e=dt),$t.layers.test(mt.layers)&&mr($t,J,mt,oe,_e,ue)}}function mr(w,J,mt,dt,at,Kt){w.onBeforeRender(C,J,mt,dt,at,Kt),w.modelViewMatrix.multiplyMatrices(mt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),at.onBeforeRender(C,J,mt,dt,w,Kt),at.transparent===!0&&at.side===Yi&&at.forceSinglePass===!1?(at.side=Oi,at.needsUpdate=!0,C.renderBufferDirect(mt,J,dt,at,w,Kt),at.side=Qr,at.needsUpdate=!0,C.renderBufferDirect(mt,J,dt,at,w,Kt),at.side=Yi):C.renderBufferDirect(mt,J,dt,at,w,Kt),w.onAfterRender(C,J,mt,dt,at,Kt)}function Ki(w,J,mt){J.isScene!==!0&&(J=ke);const dt=A.get(w),at=z.state.lights,Kt=z.state.shadowsArray,ne=at.state.version,$t=ae.getParameters(w,at.state,Kt,J,mt),oe=ae.getProgramCacheKey($t);let ue=dt.programs;dt.environment=w.isMeshStandardMaterial?J.environment:null,dt.fog=J.fog,dt.envMap=(w.isMeshStandardMaterial?Dt:bt).get(w.envMap||dt.environment),dt.envMapRotation=dt.environment!==null&&w.envMap===null?J.environmentRotation:w.envMapRotation,ue===void 0&&(w.addEventListener("dispose",In),ue=new Map,dt.programs=ue);let _e=ue.get(oe);if(_e!==void 0){if(dt.currentProgram===_e&&dt.lightsStateVersion===ne)return es(w,$t),_e}else $t.uniforms=ae.getUniforms(w),w.onBeforeCompile($t,C),_e=ae.acquireProgram($t,oe),ue.set(oe,_e),dt.uniforms=$t.uniforms;const le=dt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(le.clippingPlanes=te.uniform),es(w,$t),dt.needsLights=yi(w),dt.lightsStateVersion=ne,dt.needsLights&&(le.ambientLightColor.value=at.state.ambient,le.lightProbe.value=at.state.probe,le.directionalLights.value=at.state.directional,le.directionalLightShadows.value=at.state.directionalShadow,le.spotLights.value=at.state.spot,le.spotLightShadows.value=at.state.spotShadow,le.rectAreaLights.value=at.state.rectArea,le.ltc_1.value=at.state.rectAreaLTC1,le.ltc_2.value=at.state.rectAreaLTC2,le.pointLights.value=at.state.point,le.pointLightShadows.value=at.state.pointShadow,le.hemisphereLights.value=at.state.hemi,le.directionalShadowMap.value=at.state.directionalShadowMap,le.directionalShadowMatrix.value=at.state.directionalShadowMatrix,le.spotShadowMap.value=at.state.spotShadowMap,le.spotLightMatrix.value=at.state.spotLightMatrix,le.spotLightMap.value=at.state.spotLightMap,le.pointShadowMap.value=at.state.pointShadowMap,le.pointShadowMatrix.value=at.state.pointShadowMatrix),dt.currentProgram=_e,dt.uniformsList=null,_e}function Hs(w){if(w.uniformsList===null){const J=w.currentProgram.getUniforms();w.uniformsList=$u.seqWithValue(J.seq,w.uniforms)}return w.uniformsList}function es(w,J){const mt=A.get(w);mt.outputColorSpace=J.outputColorSpace,mt.batching=J.batching,mt.batchingColor=J.batchingColor,mt.instancing=J.instancing,mt.instancingColor=J.instancingColor,mt.instancingMorph=J.instancingMorph,mt.skinning=J.skinning,mt.morphTargets=J.morphTargets,mt.morphNormals=J.morphNormals,mt.morphColors=J.morphColors,mt.morphTargetsCount=J.morphTargetsCount,mt.numClippingPlanes=J.numClippingPlanes,mt.numIntersection=J.numClipIntersection,mt.vertexAlphas=J.vertexAlphas,mt.vertexTangents=J.vertexTangents,mt.toneMapping=J.toneMapping}function Qi(w,J,mt,dt,at){J.isScene!==!0&&(J=ke),K.resetTextureUnits();const Kt=J.fog,ne=dt.isMeshStandardMaterial?J.environment:null,$t=rt===null?C.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Xo,oe=(dt.isMeshStandardMaterial?Dt:bt).get(dt.envMap||ne),ue=dt.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,_e=!!mt.attributes.tangent&&(!!dt.normalMap||dt.anisotropy>0),le=!!mt.morphAttributes.position,ye=!!mt.morphAttributes.normal,Ke=!!mt.morphAttributes.color;let rn=La;dt.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(rn=C.toneMapping);const sn=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,Je=sn!==void 0?sn.length:0,he=A.get(dt),Ue=z.state.lights;if(re===!0&&(Ne===!0||w!==xt)){const Wn=w===xt&&dt.id===tt;te.setState(dt,w,Wn)}let Re=!1;dt.version===he.__version?(he.needsLights&&he.lightsStateVersion!==Ue.state.version||he.outputColorSpace!==$t||at.isBatchedMesh&&he.batching===!1||!at.isBatchedMesh&&he.batching===!0||at.isBatchedMesh&&he.batchingColor===!0&&at.colorTexture===null||at.isBatchedMesh&&he.batchingColor===!1&&at.colorTexture!==null||at.isInstancedMesh&&he.instancing===!1||!at.isInstancedMesh&&he.instancing===!0||at.isSkinnedMesh&&he.skinning===!1||!at.isSkinnedMesh&&he.skinning===!0||at.isInstancedMesh&&he.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&he.instancingColor===!1&&at.instanceColor!==null||at.isInstancedMesh&&he.instancingMorph===!0&&at.morphTexture===null||at.isInstancedMesh&&he.instancingMorph===!1&&at.morphTexture!==null||he.envMap!==oe||dt.fog===!0&&he.fog!==Kt||he.numClippingPlanes!==void 0&&(he.numClippingPlanes!==te.numPlanes||he.numIntersection!==te.numIntersection)||he.vertexAlphas!==ue||he.vertexTangents!==_e||he.morphTargets!==le||he.morphNormals!==ye||he.morphColors!==Ke||he.toneMapping!==rn||he.morphTargetsCount!==Je)&&(Re=!0):(Re=!0,he.__version=dt.version);let Bn=he.currentProgram;Re===!0&&(Bn=Ki(dt,J,at));let Ji=!1,Cn=!1,Si=!1;const Qe=Bn.getUniforms(),zn=he.uniforms;if(Qt.useProgram(Bn.program)&&(Ji=!0,Cn=!0,Si=!0),dt.id!==tt&&(tt=dt.id,Cn=!0),Ji||xt!==w){Qt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Qe.setValue(k,"projectionMatrix",w.projectionMatrix),Qe.setValue(k,"viewMatrix",w.matrixWorldInverse);const Nn=Qe.map.cameraPosition;Nn!==void 0&&Nn.setValue(k,Ie.setFromMatrixPosition(w.matrixWorld)),xe.logarithmicDepthBuffer&&Qe.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(dt.isMeshPhongMaterial||dt.isMeshToonMaterial||dt.isMeshLambertMaterial||dt.isMeshBasicMaterial||dt.isMeshStandardMaterial||dt.isShaderMaterial)&&Qe.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),xt!==w&&(xt=w,Cn=!0,Si=!0)}if(he.needsLights&&(Ue.state.directionalShadowMap.length>0&&Qe.setValue(k,"directionalShadowMap",Ue.state.directionalShadowMap,K),Ue.state.spotShadowMap.length>0&&Qe.setValue(k,"spotShadowMap",Ue.state.spotShadowMap,K),Ue.state.pointShadowMap.length>0&&Qe.setValue(k,"pointShadowMap",Ue.state.pointShadowMap,K)),at.isSkinnedMesh){Qe.setOptional(k,at,"bindMatrix"),Qe.setOptional(k,at,"bindMatrixInverse");const Wn=at.skeleton;Wn&&(Wn.boneTexture===null&&Wn.computeBoneTexture(),Qe.setValue(k,"boneTexture",Wn.boneTexture,K))}at.isBatchedMesh&&(Qe.setOptional(k,at,"batchingTexture"),Qe.setValue(k,"batchingTexture",at._matricesTexture,K),Qe.setOptional(k,at,"batchingIdTexture"),Qe.setValue(k,"batchingIdTexture",at._indirectTexture,K),Qe.setOptional(k,at,"batchingColorTexture"),at._colorsTexture!==null&&Qe.setValue(k,"batchingColorTexture",at._colorsTexture,K));const wn=mt.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&De.update(at,mt,Bn),(Cn||he.receiveShadow!==at.receiveShadow)&&(he.receiveShadow=at.receiveShadow,Qe.setValue(k,"receiveShadow",at.receiveShadow)),dt.isMeshGouraudMaterial&&dt.envMap!==null&&(zn.envMap.value=oe,zn.flipEnvMap.value=oe.isCubeTexture&&oe.isRenderTargetTexture===!1?-1:1),dt.isMeshStandardMaterial&&dt.envMap===null&&J.environment!==null&&(zn.envMapIntensity.value=J.environmentIntensity),zn.dfgLUT!==void 0&&(zn.dfgLUT.value=GA()),Cn&&(Qe.setValue(k,"toneMappingExposure",C.toneMappingExposure),he.needsLights&&ns(zn,Si),Kt&&dt.fog===!0&&de.refreshFogUniforms(zn,Kt),de.refreshMaterialUniforms(zn,dt,At,ct,z.state.transmissionRenderTarget[w.id]),$u.upload(k,Hs(he),zn,K)),dt.isShaderMaterial&&dt.uniformsNeedUpdate===!0&&($u.upload(k,Hs(he),zn,K),dt.uniformsNeedUpdate=!1),dt.isSpriteMaterial&&Qe.setValue(k,"center",at.center),Qe.setValue(k,"modelViewMatrix",at.modelViewMatrix),Qe.setValue(k,"normalMatrix",at.normalMatrix),Qe.setValue(k,"modelMatrix",at.matrixWorld),dt.isShaderMaterial||dt.isRawShaderMaterial){const Wn=dt.uniformsGroups;for(let Nn=0,gr=Wn.length;Nn<gr;Nn++){const Mi=Wn[Nn];St.update(Mi,Bn),St.bind(Mi,Bn)}}return Bn}function ns(w,J){w.ambientLightColor.needsUpdate=J,w.lightProbe.needsUpdate=J,w.directionalLights.needsUpdate=J,w.directionalLightShadows.needsUpdate=J,w.pointLights.needsUpdate=J,w.pointLightShadows.needsUpdate=J,w.spotLights.needsUpdate=J,w.spotLightShadows.needsUpdate=J,w.rectAreaLights.needsUpdate=J,w.hemisphereLights.needsUpdate=J}function yi(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(w,J,mt){const dt=A.get(w);dt.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,dt.__autoAllocateDepthBuffer===!1&&(dt.__useRenderToTexture=!1),A.get(w.texture).__webglTexture=J,A.get(w.depthTexture).__webglTexture=dt.__autoAllocateDepthBuffer?void 0:mt,dt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,J){const mt=A.get(w);mt.__webglFramebuffer=J,mt.__useDefaultFramebuffer=J===void 0};const ya=k.createFramebuffer();this.setRenderTarget=function(w,J=0,mt=0){rt=w,X=J,$=mt;let dt=null,at=!1,Kt=!1;if(w){const $t=A.get(w);if($t.__useDefaultFramebuffer!==void 0){Qt.bindFramebuffer(k.FRAMEBUFFER,$t.__webglFramebuffer),H.copy(w.viewport),Y.copy(w.scissor),st=w.scissorTest,Qt.viewport(H),Qt.scissor(Y),Qt.setScissorTest(st),tt=-1;return}else if($t.__webglFramebuffer===void 0)K.setupRenderTarget(w);else if($t.__hasExternalTextures)K.rebindTextures(w,A.get(w.texture).__webglTexture,A.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const _e=w.depthTexture;if($t.__boundDepthTexture!==_e){if(_e!==null&&A.has(_e)&&(w.width!==_e.image.width||w.height!==_e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(w)}}const oe=w.texture;(oe.isData3DTexture||oe.isDataArrayTexture||oe.isCompressedArrayTexture)&&(Kt=!0);const ue=A.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ue[J])?dt=ue[J][mt]:dt=ue[J],at=!0):w.samples>0&&K.useMultisampledRTT(w)===!1?dt=A.get(w).__webglMultisampledFramebuffer:Array.isArray(ue)?dt=ue[mt]:dt=ue,H.copy(w.viewport),Y.copy(w.scissor),st=w.scissorTest}else H.copy(lt).multiplyScalar(At).floor(),Y.copy(vt).multiplyScalar(At).floor(),st=Xt;if(mt!==0&&(dt=ya),Qt.bindFramebuffer(k.FRAMEBUFFER,dt)&&Qt.drawBuffers(w,dt),Qt.viewport(H),Qt.scissor(Y),Qt.setScissorTest(st),at){const $t=A.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+J,$t.__webglTexture,mt)}else if(Kt){const $t=J;for(let oe=0;oe<w.textures.length;oe++){const ue=A.get(w.textures[oe]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+oe,ue.__webglTexture,mt,$t)}}else if(w!==null&&mt!==0){const $t=A.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,$t.__webglTexture,mt)}tt=-1},this.readRenderTargetPixels=function(w,J,mt,dt,at,Kt,ne,$t=0){if(!(w&&w.isWebGLRenderTarget)){nn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let oe=A.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ne!==void 0&&(oe=oe[ne]),oe){Qt.bindFramebuffer(k.FRAMEBUFFER,oe);try{const ue=w.textures[$t],_e=ue.format,le=ue.type;if(!xe.textureFormatReadable(_e)){nn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xe.textureTypeReadable(le)){nn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=w.width-dt&&mt>=0&&mt<=w.height-at&&(w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+$t),k.readPixels(J,mt,dt,at,Lt.convert(_e),Lt.convert(le),Kt))}finally{const ue=rt!==null?A.get(rt).__webglFramebuffer:null;Qt.bindFramebuffer(k.FRAMEBUFFER,ue)}}},this.readRenderTargetPixelsAsync=async function(w,J,mt,dt,at,Kt,ne,$t=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let oe=A.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ne!==void 0&&(oe=oe[ne]),oe)if(J>=0&&J<=w.width-dt&&mt>=0&&mt<=w.height-at){Qt.bindFramebuffer(k.FRAMEBUFFER,oe);const ue=w.textures[$t],_e=ue.format,le=ue.type;if(!xe.textureFormatReadable(_e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xe.textureTypeReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ye=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ye),k.bufferData(k.PIXEL_PACK_BUFFER,Kt.byteLength,k.STREAM_READ),w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+$t),k.readPixels(J,mt,dt,at,Lt.convert(_e),Lt.convert(le),0);const Ke=rt!==null?A.get(rt).__webglFramebuffer:null;Qt.bindFramebuffer(k.FRAMEBUFFER,Ke);const rn=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await tM(k,rn,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ye),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Kt),k.deleteBuffer(ye),k.deleteSync(rn),Kt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,J=null,mt=0){const dt=Math.pow(2,-mt),at=Math.floor(w.image.width*dt),Kt=Math.floor(w.image.height*dt),ne=J!==null?J.x:0,$t=J!==null?J.y:0;K.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,mt,0,0,ne,$t,at,Kt),Qt.unbindTexture()};const $i=k.createFramebuffer(),pi=k.createFramebuffer();this.copyTextureToTexture=function(w,J,mt=null,dt=null,at=0,Kt=null){Kt===null&&(at!==0?(tc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Kt=at,at=0):Kt=0);let ne,$t,oe,ue,_e,le,ye,Ke,rn;const sn=w.isCompressedTexture?w.mipmaps[Kt]:w.image;if(mt!==null)ne=mt.max.x-mt.min.x,$t=mt.max.y-mt.min.y,oe=mt.isBox3?mt.max.z-mt.min.z:1,ue=mt.min.x,_e=mt.min.y,le=mt.isBox3?mt.min.z:0;else{const wn=Math.pow(2,-at);ne=Math.floor(sn.width*wn),$t=Math.floor(sn.height*wn),w.isDataArrayTexture?oe=sn.depth:w.isData3DTexture?oe=Math.floor(sn.depth*wn):oe=1,ue=0,_e=0,le=0}dt!==null?(ye=dt.x,Ke=dt.y,rn=dt.z):(ye=0,Ke=0,rn=0);const Je=Lt.convert(J.format),he=Lt.convert(J.type);let Ue;J.isData3DTexture?(K.setTexture3D(J,0),Ue=k.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(K.setTexture2DArray(J,0),Ue=k.TEXTURE_2D_ARRAY):(K.setTexture2D(J,0),Ue=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,J.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,J.unpackAlignment);const Re=k.getParameter(k.UNPACK_ROW_LENGTH),Bn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Ji=k.getParameter(k.UNPACK_SKIP_PIXELS),Cn=k.getParameter(k.UNPACK_SKIP_ROWS),Si=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,sn.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,sn.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ue),k.pixelStorei(k.UNPACK_SKIP_ROWS,_e),k.pixelStorei(k.UNPACK_SKIP_IMAGES,le);const Qe=w.isDataArrayTexture||w.isData3DTexture,zn=J.isDataArrayTexture||J.isData3DTexture;if(w.isDepthTexture){const wn=A.get(w),Wn=A.get(J),Nn=A.get(wn.__renderTarget),gr=A.get(Wn.__renderTarget);Qt.bindFramebuffer(k.READ_FRAMEBUFFER,Nn.__webglFramebuffer),Qt.bindFramebuffer(k.DRAW_FRAMEBUFFER,gr.__webglFramebuffer);for(let Mi=0;Mi<oe;Mi++)Qe&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,A.get(w).__webglTexture,at,le+Mi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,A.get(J).__webglTexture,Kt,rn+Mi)),k.blitFramebuffer(ue,_e,ne,$t,ye,Ke,ne,$t,k.DEPTH_BUFFER_BIT,k.NEAREST);Qt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Qt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(at!==0||w.isRenderTargetTexture||A.has(w)){const wn=A.get(w),Wn=A.get(J);Qt.bindFramebuffer(k.READ_FRAMEBUFFER,$i),Qt.bindFramebuffer(k.DRAW_FRAMEBUFFER,pi);for(let Nn=0;Nn<oe;Nn++)Qe?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,wn.__webglTexture,at,le+Nn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,wn.__webglTexture,at),zn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Wn.__webglTexture,Kt,rn+Nn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Wn.__webglTexture,Kt),at!==0?k.blitFramebuffer(ue,_e,ne,$t,ye,Ke,ne,$t,k.COLOR_BUFFER_BIT,k.NEAREST):zn?k.copyTexSubImage3D(Ue,Kt,ye,Ke,rn+Nn,ue,_e,ne,$t):k.copyTexSubImage2D(Ue,Kt,ye,Ke,ue,_e,ne,$t);Qt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Qt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else zn?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(Ue,Kt,ye,Ke,rn,ne,$t,oe,Je,he,sn.data):J.isCompressedArrayTexture?k.compressedTexSubImage3D(Ue,Kt,ye,Ke,rn,ne,$t,oe,Je,sn.data):k.texSubImage3D(Ue,Kt,ye,Ke,rn,ne,$t,oe,Je,he,sn):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Kt,ye,Ke,ne,$t,Je,he,sn.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Kt,ye,Ke,sn.width,sn.height,Je,sn.data):k.texSubImage2D(k.TEXTURE_2D,Kt,ye,Ke,ne,$t,Je,he,sn);k.pixelStorei(k.UNPACK_ROW_LENGTH,Re),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Bn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ji),k.pixelStorei(k.UNPACK_SKIP_ROWS,Cn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Si),Kt===0&&J.generateMipmaps&&k.generateMipmap(Ue),Qt.unbindTexture()},this.initRenderTarget=function(w){A.get(w).__webglFramebuffer===void 0&&K.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?K.setTextureCube(w,0):w.isData3DTexture?K.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?K.setTexture2DArray(w,0):K.setTexture2D(w,0),Qt.unbindTexture()},this.resetState=function(){X=0,$=0,rt=null,Qt.reset(),Zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ua}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(t),i.unpackColorSpace=$e._getUnpackColorSpace()}}const kA=10,Gx=20,XA=kA*1024*1024,WA=Gx*1024*1024;function jA({onFileLoaded:s,disabled:t}){const[i,r]=Se.useState(!1),l=Se.useRef(null),c=Se.useCallback(_=>{if(!_.name.toLowerCase().endsWith(".stl")){alert("Please upload an STL file.");return}if(_.size>WA){alert(`File is too large (${(_.size/1024/1024).toFixed(1)}MB). Maximum supported size is ${Gx}MB.`);return}if(_.size>XA&&!window.confirm(`This STL is ${(_.size/1024/1024).toFixed(1)}MB. Large files can be slow in-browser. Continue?`))return;const S=new FileReader;S.onload=()=>{S.result instanceof ArrayBuffer&&s(S.result,_.name)},S.readAsArrayBuffer(_)},[s]),h=Se.useCallback(_=>{if(_.preventDefault(),r(!1),t)return;const S=_.dataTransfer.files[0];S&&c(S)},[c,t]),d=Se.useCallback(_=>{_.preventDefault(),t||r(!0)},[t]),m=Se.useCallback(()=>{r(!1)},[]),p=Se.useCallback(()=>{t||l.current?.click()},[t]),g=Se.useCallback(_=>{const S=_.target.files?.[0];S&&c(S),_.target.value=""},[c]);return nt.jsxs("div",{onClick:p,onDrop:h,onDragOver:d,onDragLeave:m,className:`
        border-2 border-dashed rounded-xl p-6 text-center cursor-pointer
        transition-all duration-200 select-none
        ${i?"border-blue-400 bg-blue-950/30 text-blue-300":t?"border-gray-700 bg-gray-900/30 text-gray-600 cursor-not-allowed":"border-gray-600 bg-gray-900/50 text-gray-400 hover:border-gray-500 hover:bg-gray-900/70"}
      `,children:[nt.jsx("input",{ref:l,type:"file",accept:".stl",onChange:g,className:"hidden"}),nt.jsxs("div",{className:"flex items-center justify-center gap-3",children:[nt.jsx("svg",{className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:nt.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"})}),nt.jsx("span",{className:"text-sm font-medium",children:"Drop STL file here or click to upload"})]})]})}function YA({filename:s,triangleCount:t,dimensions:i,onRemove:r}){return nt.jsxs("div",{className:"flex items-center gap-3 bg-gray-800/60 border border-gray-700/50 rounded-xl px-3 py-2.5",children:[nt.jsx("div",{className:"shrink-0 w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center",children:nt.jsx("svg",{className:"w-4 h-4 text-blue-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:nt.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"})})}),nt.jsxs("div",{className:"flex-1 min-w-0",children:[nt.jsx("div",{className:"text-sm font-medium text-gray-200 truncate",children:s}),nt.jsxs("div",{className:"text-xs text-gray-500 flex flex-wrap gap-x-3 gap-y-0.5",children:[nt.jsxs("span",{children:["▲ ",t.toLocaleString()," triangles"]}),i&&nt.jsxs("span",{children:[i.width.toFixed(1)," × ",i.depth.toFixed(1)," × ",i.height.toFixed(1)," mm"]})]})]}),nt.jsx("button",{onClick:r,className:"shrink-0 p-2 rounded-lg text-gray-500 hover:text-red-400 hover:bg-red-950/30 transition-all",title:"Remove file",children:nt.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:nt.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})})]})}const qv={type:"change"},Rm={type:"start"},Vx={type:"end"},Vu=new Mm,Zv=new qr,qA=Math.cos(70*nM.DEG2RAD),Yn=new it,Li=2*Math.PI,gn={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},up=1e-6;class ZA extends jM{constructor(t,i=null){super(t,i),this.state=gn.NONE,this.target=new it,this.cursor=new it,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Bo.ROTATE,MIDDLE:Bo.DOLLY,RIGHT:Bo.PAN},this.touches={ONE:Io.ROTATE,TWO:Io.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new it,this._lastQuaternion=new Is,this._lastTargetPosition=new it,this._quat=new Is().setFromUnitVectors(t.up,new it(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Mv,this._sphericalDelta=new Mv,this._scale=1,this._panOffset=new it,this._rotateStart=new Le,this._rotateEnd=new Le,this._rotateDelta=new Le,this._panStart=new Le,this._panEnd=new Le,this._panDelta=new Le,this._dollyStart=new Le,this._dollyEnd=new Le,this._dollyDelta=new Le,this._dollyDirection=new it,this._mouse=new Le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=QA.bind(this),this._onPointerDown=KA.bind(this),this._onPointerUp=$A.bind(this),this._onContextMenu=r2.bind(this),this._onMouseWheel=e2.bind(this),this._onKeyDown=n2.bind(this),this._onTouchStart=i2.bind(this),this._onTouchMove=a2.bind(this),this._onMouseDown=JA.bind(this),this._onMouseMove=t2.bind(this),this._interceptControlDown=s2.bind(this),this._interceptControlUp=o2.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(qv),this.update(),this.state=gn.NONE}update(t=null){const i=this.object.position;Yn.copy(i).sub(this.target),Yn.applyQuaternion(this._quat),this._spherical.setFromVector3(Yn),this.autoRotate&&this.state===gn.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(r)&&isFinite(l)&&(r<-Math.PI?r+=Li:r>Math.PI&&(r-=Li),l<-Math.PI?l+=Li:l>Math.PI&&(l-=Li),r<=l?this._spherical.theta=Math.max(r,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+l)/2?Math.max(r,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(Yn.setFromSpherical(this._spherical),Yn.applyQuaternion(this._quatInverse),i.copy(this.target).add(Yn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=Yn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new it(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new it(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=Yn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Vu.origin.copy(this.object.position),Vu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Vu.direction))<qA?this.object.lookAt(this.target):(Zv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Vu.intersectPlane(Zv,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>up||8*(1-this._lastQuaternion.dot(this.object.quaternion))>up||this._lastTargetPosition.distanceToSquared(this.target)>up?(this.dispatchEvent(qv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Li/60*this.autoRotateSpeed*t:Li/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){Yn.setFromMatrixColumn(i,0),Yn.multiplyScalar(-t),this._panOffset.add(Yn)}_panUp(t,i){this.screenSpacePanning===!0?Yn.setFromMatrixColumn(i,1):(Yn.setFromMatrixColumn(i,0),Yn.crossVectors(this.object.up,Yn)),Yn.multiplyScalar(t),this._panOffset.add(Yn)}_pan(t,i){const r=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;Yn.copy(l).sub(this.target);let c=Yn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/r.clientHeight,this.object.matrix),this._panUp(2*i*c/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),l=t-r.left,c=i-r.top,h=r.width,d=r.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Li*this._rotateDelta.x/i.clientHeight),this._rotateUp(Li*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Li*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Li*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Li*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Li*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(r,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(r,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),r=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(r*r+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const r=this._getSecondPointerPosition(t),l=.5*(t.pageX+r.x),c=.5*(t.pageY+r.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Li*this._rotateDelta.x/i.clientHeight),this._rotateUp(Li*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(r,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),r=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(r*r+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new Le,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,r={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function KA(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function QA(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function $A(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Vx),this.state=gn.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function JA(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Bo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=gn.DOLLY;break;case Bo.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=gn.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=gn.ROTATE}break;case Bo.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=gn.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=gn.PAN}break;default:this.state=gn.NONE}this.state!==gn.NONE&&this.dispatchEvent(Rm)}function t2(s){switch(this.state){case gn.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case gn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case gn.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function e2(s){this.enabled===!1||this.enableZoom===!1||this.state!==gn.NONE||(s.preventDefault(),this.dispatchEvent(Rm),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Vx))}function n2(s){this.enabled!==!1&&this._handleKeyDown(s)}function i2(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Io.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=gn.TOUCH_ROTATE;break;case Io.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=gn.TOUCH_PAN;break;default:this.state=gn.NONE}break;case 2:switch(this.touches.TWO){case Io.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=gn.TOUCH_DOLLY_PAN;break;case Io.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=gn.TOUCH_DOLLY_ROTATE;break;default:this.state=gn.NONE}break;default:this.state=gn.NONE}this.state!==gn.NONE&&this.dispatchEvent(Rm)}function a2(s){switch(this._trackPointer(s),this.state){case gn.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case gn.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case gn.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case gn.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=gn.NONE}}function r2(s){this.enabled!==!1&&s.preventDefault()}function s2(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function o2(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function l2(){return nt.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center text-center p-6 pointer-events-none",children:[nt.jsxs("div",{className:"mb-6 relative",children:[nt.jsxs("svg",{width:"80",height:"80",viewBox:"0 0 80 80",fill:"none",className:"opacity-30",children:[nt.jsx("rect",{x:"4",y:"4",width:"34",height:"34",rx:"4",stroke:"currentColor",strokeWidth:"2",className:"text-gray-400"}),nt.jsx("rect",{x:"42",y:"4",width:"34",height:"34",rx:"4",stroke:"currentColor",strokeWidth:"2",className:"text-gray-400"}),nt.jsx("rect",{x:"4",y:"42",width:"34",height:"34",rx:"4",stroke:"currentColor",strokeWidth:"2",className:"text-gray-400"}),nt.jsx("rect",{x:"42",y:"42",width:"34",height:"34",rx:"4",stroke:"currentColor",strokeWidth:"2",className:"text-gray-400"}),nt.jsx("circle",{cx:"21",cy:"21",r:"5",stroke:"currentColor",strokeWidth:"1.5",className:"text-gray-500"}),nt.jsx("circle",{cx:"59",cy:"21",r:"5",stroke:"currentColor",strokeWidth:"1.5",className:"text-gray-500"}),nt.jsx("circle",{cx:"21",cy:"59",r:"5",stroke:"currentColor",strokeWidth:"1.5",className:"text-gray-500"}),nt.jsx("circle",{cx:"59",cy:"59",r:"5",stroke:"currentColor",strokeWidth:"1.5",className:"text-gray-500"})]}),nt.jsx("div",{className:"absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center",children:nt.jsx("svg",{className:"w-4 h-4 text-blue-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:nt.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})})})]}),nt.jsx("h3",{className:"text-base font-semibold text-gray-400 mb-2",children:"Upload an STL file to get started"}),nt.jsx("p",{className:"text-sm text-gray-600 max-w-xs mb-4",children:"Add a Gridfinity-compatible base to any 3D model — right in your browser."}),nt.jsx("div",{className:"flex flex-wrap gap-2 justify-center",children:["Bins","Holders","Organizers","Tool holders","Trays"].map(s=>nt.jsx("span",{className:"text-xs px-2.5 py-1 rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-500",children:s},s))})]})}function c2({originalGeometry:s,baseGeometry:t,combinedGeometry:i,gridX:r,gridY:l,gridUnit:c,offsetX:h,offsetY:d,placement:m}){const p=Se.useRef(null),g=Se.useRef(null);Se.useEffect(()=>{if(!p.current)return;const T=p.current,R=new VA({antialias:!0,alpha:!0});R.setPixelRatio(window.devicePixelRatio),R.setSize(T.clientWidth,T.clientHeight),R.setClearColor(657935,1),R.toneMapping=hm,R.toneMappingExposure=1.2,T.appendChild(R.domElement);const E=new AM,x=new ca(45,T.clientWidth/T.clientHeight,.1,1e4);x.position.set(100,100,100);const F=new ZA(x,R.domElement);F.enableDamping=!0,F.dampingFactor=.1,F.target.set(0,0,0);const N=new XM(16777215,.4);E.add(N);const O=new Sv(16777215,1);O.position.set(100,200,100),E.add(O);const z=new Sv(8947967,.5);z.position.set(-100,-50,-100),E.add(z);const P=new bv(200,20,3355443,2236962);P.rotation.x=Math.PI/2,E.add(P);const I={renderer:R,scene:E,camera:x,controls:F,originalMesh:null,baseMesh:null,combinedMesh:null,gridOverlay:null,bgGrid:P,animId:0};g.current=I;const j=()=>{I.animId=requestAnimationFrame(j),F.update(),R.render(E,x)};j();const C=()=>{if(!T)return;const X=T.clientWidth,$=T.clientHeight;x.aspect=X/$,x.updateProjectionMatrix(),R.setSize(X,$)},U=new ResizeObserver(C);return U.observe(T),()=>{cancelAnimationFrame(I.animId),U.disconnect(),F.dispose(),R.dispose(),T.removeChild(R.domElement),g.current=null}},[]);const _=Se.useCallback(T=>{const R=g.current;if(!R)return;const E=new jo;for(const C of T)E.expandByObject(C);if(E.isEmpty())return;const x=E.getCenter(new it),F=E.getSize(new it),N=Math.max(F.x,F.y,F.z),O=R.camera.fov*(Math.PI/180),z=N/2/Math.tan(O/2)*1.5;R.controls.target.copy(x),R.camera.position.set(x.x+z*.6,x.y+z*.6,x.z+z*.6),R.camera.lookAt(x),R.controls.update(),R.bgGrid&&(R.scene.remove(R.bgGrid),R.bgGrid.dispose());const P=Math.ceil(N*2/c)*c,I=Math.ceil(P/c),j=new bv(P,I,4473924,2631720);j.rotation.x=Math.PI/2,j.position.set(x.x,x.y,0),R.scene.add(j),R.bgGrid=j},[c]),S=Se.useCallback((T,R,E,x)=>{const F=new ql;for(let O=0;O<T;O++)for(let z=0;z<R;z++){const P=E+(O-(T-1)/2)*c,I=x+(z-(R-1)/2)*c,j=new ac(c-1,c-1),C=new bm({color:2280550,transparent:!0,opacity:.12,side:Yi,depthWrite:!1}),U=new Ni(j,C);U.position.set(P,I,.05),F.add(U);const X=[new it(P-c/2,I-c/2,.1),new it(P+c/2,I-c/2,.1),new it(P+c/2,I+c/2,.1),new it(P-c/2,I+c/2,.1),new it(P-c/2,I-c/2,.1)],$=new ti().setFromPoints(X),rt=new uf({color:2280550,transparent:!0,opacity:.5}),tt=new Qu($,rt);F.add(tt)}const N=1;for(let O=-N;O<T+N;O++)for(let z=-N;z<R+N;z++){if(O>=0&&O<T&&z>=0&&z<R)continue;const P=E+(O-(T-1)/2)*c,I=x+(z-(R-1)/2)*c,j=[new it(P-c/2,I-c/2,.05),new it(P+c/2,I-c/2,.05),new it(P+c/2,I+c/2,.05),new it(P-c/2,I+c/2,.05),new it(P-c/2,I-c/2,.05)],C=new ti().setFromPoints(j),U=new IM({color:8947848,transparent:!0,opacity:.2,dashSize:3,gapSize:3}),X=new Qu(C,U);X.computeLineDistances(),F.add(X)}return F},[c]);Se.useEffect(()=>{const T=g.current;if(!T||(T.gridOverlay&&(T.scene.remove(T.gridOverlay),T.gridOverlay.traverse(E=>{(E instanceof Ni||E instanceof Qu)&&(E.geometry.dispose(),E.material instanceof zs&&E.material.dispose())}),T.gridOverlay=null),!s&&!i))return;const R=S(r,l,h,d);T.scene.add(R),T.gridOverlay=R},[r,l,h,d,s,i,S]),Se.useEffect(()=>{const T=g.current;if(!T)return;T.originalMesh&&(T.scene.remove(T.originalMesh),T.originalMesh.geometry.dispose(),T.originalMesh.material.dispose(),T.originalMesh=null),T.baseMesh&&(T.scene.remove(T.baseMesh),T.baseMesh.geometry.dispose(),T.baseMesh.material.dispose(),T.baseMesh=null),T.combinedMesh&&(T.scene.remove(T.combinedMesh),T.combinedMesh.geometry.dispose(),T.combinedMesh.material.dispose(),T.combinedMesh=null);const R=[];if(i){const E=new np({color:4491519,metalness:.1,roughness:.4,transparent:m==="inside",opacity:m==="inside"?.62:1,side:Yi}),x=new Ni(i,E);T.scene.add(x),T.combinedMesh=x,R.push(x)}else{if(s){const E=new np({color:8956620,metalness:.1,roughness:.4,transparent:m==="inside",opacity:m==="inside"?.45:1,side:Yi}),x=new Ni(s,E);T.scene.add(x),T.originalMesh=x,R.push(x)}if(t){const E=new np({color:4508774,metalness:.1,roughness:.4,transparent:!0,opacity:.7,side:Yi}),x=new Ni(t,E);T.scene.add(x),T.baseMesh=x,R.push(x)}}R.length>0&&_(R)},[s,t,i,_,m]);const b=!s&&!t&&!i;return nt.jsxs("div",{className:"relative w-full h-full min-h-[300px] lg:min-h-[600px] rounded-xl overflow-hidden bg-gray-950",children:[nt.jsx("div",{ref:p,className:"w-full h-full"}),b&&nt.jsx(l2,{})]})}function fp({title:s,defaultOpen:t=!1,children:i,badge:r}){const[l,c]=Se.useState(t);return nt.jsxs("div",{className:"border border-gray-800 rounded-xl overflow-hidden",children:[nt.jsxs("button",{onClick:()=>c(!l),className:`w-full flex items-center justify-between px-4 py-3 text-left
          bg-gray-900/30 hover:bg-gray-800/50 transition-colors active:bg-gray-800/70`,children:[nt.jsxs("div",{className:"flex items-center gap-2",children:[nt.jsx("span",{className:"text-sm font-medium text-gray-300",children:s}),r&&nt.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400",children:r})]}),nt.jsx("svg",{className:`w-4 h-4 text-gray-500 transition-transform duration-200 ${l?"rotate-180":""}`,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:nt.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})})]}),nt.jsx("div",{className:`transition-all duration-200 overflow-hidden ${l?"max-h-[800px] opacity-100":"max-h-0 opacity-0"}`,children:nt.jsx("div",{className:"p-4 pt-2",children:i})})]})}const of=42,ku=21,lm=.25,Kl=.8,kx=1.8,Ql=2.15,Cm=Kl+kx+Ql,Xx=2.25,cm=Cm+Xx,Ju=3.75,Kv=6.5,Qv=2.4,$v=4.8,Jv=3,tx=6,ex=2;function nx(s,t,i="inside",r=of){if(i==="outside")return{gridX:Math.max(1,Math.ceil(s/r)),gridY:Math.max(1,Math.ceil(t/r))};const l=s/r,c=t/r,h=Math.floor(l),d=Math.floor(c),m=(l-h)*r/2,p=(c-d)*r/2,g=m>0&&m<=ex?h+1:Math.max(1,h),_=p>0&&p<=ex?d+1:Math.max(1,d);return{gridX:g,gridY:_}}const u2=16;function tf(s,t,i,r=u2){const l=[],c=s/2,h=t/2,d=Math.min(i,c,h);for(let m=0;m<4;m++){const p=m===0||m===3?c-d:-(c-d),g=m===0||m===1?h-d:-(h-d),_=m*Math.PI/2;for(let S=0;S<=r;S++){const b=_+S*Math.PI/(2*r);l.push([p+d*Math.cos(b),g+d*Math.sin(b)])}}return l}function f2(s,t){const{CrossSection:i,Manifold:r}=s,l=t-2*lm,c=l-2*(Kl+Ql),h=l-2*Ql,d=l,m=Kl+Ql,p=Ql,g=Math.max(.1,Ju-m),_=Math.max(.1,Ju-p),S=Ju,b=Kl,T=Kl+kx,R=Cm,E=.01,x=new i([tf(c,c,g)]),F=new i([tf(h,h,_)]),N=new i([tf(d,d,S)]),O=x.extrude(E),z=F.extrude(E).translate([0,0,b]),P=F.extrude(E).translate([0,0,T]),I=N.extrude(E).translate([0,0,R]),j=r.hull([O,z]),C=F.extrude(T-b).translate([0,0,b]),U=r.hull([P,I]);x.delete(),F.delete(),N.delete(),O.delete(),z.delete(),P.delete(),I.delete();const X=r.union([j,C,U]);return j.delete(),C.delete(),U.delete(),X}async function h2(s,t){const{Manifold:i}=s;s.setCircularSegments(32);const r=t.gridUnit,l=f2(s,r),c=[],h=r<=21;for(let T=0;T<t.gridX;T++)for(let R=0;R<t.gridY;R++){const E=t.offsetX+(T-(t.gridX-1)/2)*r,x=t.offsetY+(R-(t.gridY-1)/2)*r;let F=l.translate([E,x,0]);if(!h){const N=$v,O=[[E-r/2+N,x-r/2+N],[E+r/2-N,x-r/2+N],[E-r/2+N,x+r/2-N],[E+r/2-N,x+r/2-N]];if(t.magnets){const z=Kv/2,P=O.map(([j,C])=>i.cylinder(Qv,z,z,24,!1).translate([j,C,0])),I=i.difference([F,...P]);F.delete(),F=I,P.forEach(j=>j.delete())}if(t.screws){const z=[],P=Jv/2;for(const[j,C]of O){const U=i.cylinder(tx,P,P,16).translate([j,C,0]);z.push(U)}const I=i.difference([F,...z]);F.delete(),F=I;for(const j of z)j.delete()}}c.push(F)}l.delete();let d;if(c.length===1)d=c[0];else{d=i.union(c);for(const T of c)T.delete()}if(h&&(t.magnets||t.screws)){const T=$v,R=t.gridX*r/2,E=t.gridY*r/2,x=[[t.offsetX-R+T,t.offsetY-E+T],[t.offsetX+R-T,t.offsetY-E+T],[t.offsetX-R+T,t.offsetY+E-T],[t.offsetX+R-T,t.offsetY+E-T]];if(t.magnets){const F=Kv/2,N=x.map(([z,P])=>i.cylinder(Qv,F,F,24,!1).translate([z,P,0])),O=i.difference([d,...N]);d.delete(),d=O,N.forEach(z=>z.delete())}if(t.screws){const F=Jv/2,N=x.map(([z,P])=>i.cylinder(tx,F,F,16).translate([z,P,0])),O=i.difference([d,...N]);d.delete(),d=O,N.forEach(z=>z.delete())}}const m=t.gridX*r-2*lm,p=t.gridY*r-2*lm,{CrossSection:g}=s,_=new g([tf(m,p,Ju)]),S=_.extrude(Xx).translate([t.offsetX,t.offsetY,Cm]);_.delete();const b=i.union([d,S]);return d.delete(),S.delete(),b}function d2(s,t){const{Mesh:i}=t,r=s.getAttribute("position"),l=s.getIndex();let c,h;if(l){const p=r.array;c=new Float32Array(p.length),c.set(p),h=new Uint32Array(l.array)}else{const p=r.array,g=r.count;if(g%3!==0)throw new Error("Invalid geometry: vertex count is not divisible by 3");c=new Float32Array(p.length),c.set(p),h=new Uint32Array(g);for(let _=0;_<g;_++)h[_]=_}const d=new i({numProp:3,vertProperties:c,triVerts:h}),m=d;return typeof m.merge=="function"&&m.merge(),d}function ix(s){const t=s.vertProperties,i=s.triVerts,r=s.numProp,l=t.length/r,c=new Float32Array(l*3);for(let h=0;h<l;h++)c[h*3]=t[h*r],c[h*3+1]=t[h*r+1],c[h*3+2]=t[h*r+2];return{positions:c,indices:new Uint32Array(i)}}const hp={inside:{label:"Fit Inside",desc:"Max grid units within model footprint"},outside:{label:"Fit Outside",desc:"Grid units encompass entire model"},custom:{label:"Custom",desc:"Manual grid count"}},p2=[{axis:"-z",label:"⊥",title:"Bottom (-Z) — default"},{axis:"+z",label:"⊤",title:"Top (+Z)"},{axis:"-x",label:"◀",title:"Left (-X)"},{axis:"+x",label:"▶",title:"Right (+X)"},{axis:"-y",label:"▼",title:"Front (-Y)"},{axis:"+y",label:"▲",title:"Back (+Y)"}],Xu={outside:{label:"Turn Into Box",desc:"Attach the base on the outside of the selected bottom face"},inside:{label:"Add Base Inside",desc:"Attach the base inward from the selected face (for trays/boxes)"}};function m2({gridX:s,gridY:t,offsetX:i,offsetY:r,gridUnit:l,magnets:c,screws:h,fitMode:d,orientation:m,placement:p,modelDims:g,hasModel:_,hasCombined:S,isProcessing:b,filename:T,onGridXChange:R,onGridYChange:E,onOffsetXChange:x,onOffsetYChange:F,onGridUnitChange:N,onMagnetsChange:O,onScrewsChange:z,onFitModeChange:P,onOrientationChange:I,onPlacementChange:j,onGenerate:C,onDownload:U}){const[X,$]=Se.useState(!1),rt=()=>{const tt=["Gridfinity Base Adder Settings",`File: ${T}`,`Grid Unit: ${l}mm`,`Grid: ${s}×${t} (${(s*l).toFixed(0)}×${(t*l).toFixed(0)}mm)`,l===ku&&(c||h)?"Note: Holes placed at outer corners only at 21mm grid size":"",`Fit Mode: ${hp[d].label}`,`Orientation: ${m}`,`Base Side: ${Xu[p].label}`,`Offset: X=${i.toFixed(1)}mm, Y=${r.toFixed(1)}mm`,`Magnets: ${c?"Yes":"No"}`,`Screws: ${h?"Yes":"No"}`,g?`Model: ${g.width.toFixed(1)}×${g.depth.toFixed(1)}×${g.height.toFixed(1)}mm`:"",`
https://molty-assistant.github.io/gridfinity-base-adder/`].filter(Boolean).join(`
`);navigator.clipboard.writeText(tt).then(()=>{$(!0),setTimeout(()=>$(!1),2e3)})};return nt.jsxs("div",{className:"flex flex-col gap-3",children:[nt.jsx("button",{onClick:C,disabled:!_||b,className:`w-full py-3.5 px-4 rounded-xl font-semibold text-sm transition-all
          bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white shadow-lg shadow-blue-600/20
          disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed disabled:shadow-none
          flex items-center justify-center gap-2`,children:b?nt.jsxs(nt.Fragment,{children:[nt.jsxs("svg",{className:"animate-spin w-4 h-4",fill:"none",viewBox:"0 0 24 24",children:[nt.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),nt.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Generating…"]}):nt.jsxs(nt.Fragment,{children:[nt.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:nt.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"})}),"Generate Base"]})}),!S&&_&&!b&&nt.jsx("p",{className:"text-xs text-yellow-400/70 text-center",children:"Adjust settings below, then generate."}),_&&nt.jsxs("div",{className:"bg-gray-900/50 border border-gray-800 rounded-xl p-3",children:[nt.jsx("label",{className:"block text-xs font-medium text-gray-400 mb-2",children:"Workflow"}),nt.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:Object.keys(Xu).map(tt=>nt.jsx("button",{onClick:()=>j(tt),disabled:b,className:`
                  py-2 px-2 rounded-lg text-xs font-medium transition-all
                  ${p===tt?"bg-blue-600 text-white":"bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200"}
                  disabled:opacity-50 disabled:cursor-not-allowed
                `,children:Xu[tt].label},tt))}),nt.jsx("p",{className:"text-[10px] text-gray-600 mt-1.5",children:Xu[p].desc})]}),S&&nt.jsxs("div",{className:"bg-emerald-950/30 border border-emerald-700/40 rounded-xl p-3 space-y-2.5",children:[nt.jsxs("button",{onClick:U,disabled:b,className:`w-full py-3.5 px-4 rounded-xl font-semibold text-sm transition-all
              bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20
              disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed
              flex items-center justify-center gap-2`,children:[nt.jsx("svg",{className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:nt.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"})}),"Download STL"]}),nt.jsxs("div",{className:"flex items-center justify-between text-xs text-emerald-400/70",children:[nt.jsxs("span",{children:[s,"×",t," grid · ",c?"magnets":"",c&&h?" + ":"",h?"screws":"",!c&&!h?"no features":""]}),nt.jsx("button",{onClick:rt,className:"flex items-center gap-1 px-2 py-1 rounded-md hover:bg-emerald-800/30 transition-colors",children:X?nt.jsxs(nt.Fragment,{children:[nt.jsx("svg",{className:"w-3 h-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:nt.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"})}),"Copied!"]}):nt.jsxs(nt.Fragment,{children:[nt.jsx("svg",{className:"w-3 h-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:nt.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"})}),"Copy settings"]})})]})]}),nt.jsx(fp,{title:"Grid Size",defaultOpen:!0,badge:_?`${s}×${t}`:void 0,children:nt.jsxs("div",{className:"space-y-3",children:[nt.jsxs("div",{children:[nt.jsx("label",{className:"block text-xs font-medium text-gray-400 mb-2",children:"Grid Unit Size"}),nt.jsxs("div",{className:"grid grid-cols-2 gap-1.5",children:[nt.jsx("button",{onClick:()=>N(of),disabled:b,className:`
                  py-2 px-2 rounded-lg text-xs font-medium transition-all
                  ${l===of?"bg-blue-600/20 border border-blue-500/50 text-blue-300":"bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:bg-gray-700/50 hover:text-gray-300"}
                  disabled:opacity-50 disabled:cursor-not-allowed
                `,children:"42mm Standard"}),nt.jsx("button",{onClick:()=>N(ku),disabled:b,className:`
                  py-2 px-2 rounded-lg text-xs font-medium transition-all
                  ${l===ku?"bg-blue-600/20 border border-blue-500/50 text-blue-300":"bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:bg-gray-700/50 hover:text-gray-300"}
                  disabled:opacity-50 disabled:cursor-not-allowed
                `,children:"21mm Half"})]})]}),_&&nt.jsxs("div",{children:[nt.jsx("label",{className:"block text-xs font-medium text-gray-400 mb-2",children:"Fitting Mode"}),nt.jsx("div",{className:"flex gap-1",children:Object.keys(hp).map(tt=>nt.jsx("button",{onClick:()=>P(tt),disabled:b,className:`
                      flex-1 text-center px-2 py-2 rounded-lg text-xs transition-all
                      ${d===tt?"bg-blue-600/20 border border-blue-500/50 text-blue-300":"bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:bg-gray-700/50 hover:text-gray-300"}
                      disabled:opacity-50 disabled:cursor-not-allowed
                    `,children:nt.jsx("div",{className:"font-medium",children:hp[tt].label})},tt))})]}),nt.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[nt.jsxs("div",{children:[nt.jsx("label",{className:"block text-xs font-medium text-gray-400 mb-1",children:"Grid X"}),nt.jsx("input",{type:"number",min:1,max:20,value:s,onChange:tt=>R(Math.max(1,parseInt(tt.target.value)||1)),disabled:!_||b||d!=="custom",className:`w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2.5 text-sm
                  text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  disabled:opacity-50 disabled:cursor-not-allowed`})]}),nt.jsxs("div",{children:[nt.jsx("label",{className:"block text-xs font-medium text-gray-400 mb-1",children:"Grid Y"}),nt.jsx("input",{type:"number",min:1,max:20,value:t,onChange:tt=>E(Math.max(1,parseInt(tt.target.value)||1)),disabled:!_||b||d!=="custom",className:`w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2.5 text-sm
                  text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  disabled:opacity-50 disabled:cursor-not-allowed`})]})]}),nt.jsxs("div",{className:"text-xs text-gray-500",children:["Base: ",(s*l).toFixed(0)," × ",(t*l).toFixed(0)," mm · Height: ",cm.toFixed(1)," mm"]})]})}),_&&nt.jsx(fp,{title:"Orientation",badge:m,children:nt.jsxs("div",{children:[nt.jsx("label",{className:"block text-xs font-medium text-gray-400 mb-2",children:"Bottom Face"}),nt.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:p2.map(tt=>nt.jsx("button",{title:tt.title,onClick:()=>I(tt.axis),disabled:b,className:`
                    py-2.5 px-2 rounded-lg text-sm font-medium transition-all
                    ${m===tt.axis?"bg-blue-600 text-white":"bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200 active:bg-gray-600"}
                    disabled:opacity-50 disabled:cursor-not-allowed
                  `,children:tt.label},tt.axis))}),nt.jsx("p",{className:"text-[10px] text-gray-600 mt-1.5",children:"Rotate model so a different face becomes the bottom"})]})}),nt.jsx(fp,{title:"Offset & Features",children:nt.jsxs("div",{className:"space-y-3",children:[nt.jsxs("div",{children:[nt.jsxs("label",{className:"block text-xs font-medium text-gray-400 mb-1",children:["Offset X: ",i.toFixed(1)," mm"]}),nt.jsx("input",{type:"range",min:-l/2,max:l/2,step:.5,value:i,onChange:tt=>x(parseFloat(tt.target.value)),disabled:!_||b,className:`w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer
                accent-blue-500 disabled:opacity-50 disabled:cursor-not-allowed`})]}),nt.jsxs("div",{children:[nt.jsxs("label",{className:"block text-xs font-medium text-gray-400 mb-1",children:["Offset Y: ",r.toFixed(1)," mm"]}),nt.jsx("input",{type:"range",min:-l/2,max:l/2,step:.5,value:r,onChange:tt=>F(parseFloat(tt.target.value)),disabled:!_||b,className:`w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer
                accent-blue-500 disabled:opacity-50 disabled:cursor-not-allowed`})]}),nt.jsxs("div",{className:"space-y-2 pt-1",children:[nt.jsxs("label",{className:"flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-800/50 transition-colors cursor-pointer",children:[nt.jsx("input",{type:"checkbox",checked:c,onChange:tt=>O(tt.target.checked),disabled:!_||b,className:`w-5 h-5 rounded bg-gray-800 border-gray-600 text-blue-500
                  focus:ring-blue-500 focus:ring-offset-gray-900
                  disabled:opacity-50 disabled:cursor-not-allowed`}),nt.jsxs("div",{children:[nt.jsx("div",{className:"text-sm text-gray-300",children:"Magnet holes"}),nt.jsx("div",{className:"text-[10px] text-gray-600",children:"6×3mm round magnets"})]})]}),(c||h)&&l===ku&&nt.jsx("div",{className:"px-2.5 -mt-1 text-[10px] text-yellow-400/70",children:"Holes placed at outer corners only at 21mm grid size."}),nt.jsxs("label",{className:"flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-800/50 transition-colors cursor-pointer",children:[nt.jsx("input",{type:"checkbox",checked:h,onChange:tt=>z(tt.target.checked),disabled:!_||b,className:`w-5 h-5 rounded bg-gray-800 border-gray-600 text-blue-500
                  focus:ring-blue-500 focus:ring-offset-gray-900
                  disabled:opacity-50 disabled:cursor-not-allowed`}),nt.jsxs("div",{children:[nt.jsx("div",{className:"text-sm text-gray-300",children:"Screw holes"}),nt.jsx("div",{className:"text-[10px] text-gray-600",children:"M3 countersunk"})]})]})]})]})}),g&&nt.jsxs("div",{className:"bg-gray-900/50 rounded-xl p-3 text-xs text-gray-400 space-y-1",children:[nt.jsx("div",{className:"font-medium text-gray-300",children:"Model Dimensions"}),nt.jsxs("div",{className:"grid grid-cols-3 gap-2 text-center",children:[nt.jsxs("div",{children:[nt.jsx("div",{className:"text-gray-500 text-[10px]",children:"Width"}),nt.jsx("div",{children:g.width.toFixed(1)})]}),nt.jsxs("div",{children:[nt.jsx("div",{className:"text-gray-500 text-[10px]",children:"Depth"}),nt.jsx("div",{children:g.depth.toFixed(1)})]}),nt.jsxs("div",{children:[nt.jsx("div",{className:"text-gray-500 text-[10px]",children:"Height"}),nt.jsx("div",{children:g.height.toFixed(1)})]})]}),nt.jsxs("div",{className:"text-center text-gray-600 text-[10px] pt-1",children:["Grid unit: ",l,"mm · All processing runs in your browser"]})]})]})}function g2({message:s,type:t="success",duration:i=4e3,onDismiss:r}){const[l,c]=Se.useState(!1);Se.useEffect(()=>{requestAnimationFrame(()=>c(!0));const d=setTimeout(()=>{c(!1),setTimeout(r,300)},i);return()=>clearTimeout(d)},[i,r]);const h=t==="success"?"bg-emerald-900/90 border-emerald-600/50 text-emerald-200":t==="error"?"bg-red-900/90 border-red-600/50 text-red-200":"bg-blue-900/90 border-blue-600/50 text-blue-200";return nt.jsx("div",{className:`
        fixed top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-3 rounded-xl border
        shadow-2xl backdrop-blur-sm text-sm font-medium
        transition-all duration-300
        ${h}
        ${l?"opacity-100 translate-y-0":"opacity-0 -translate-y-4"}
      `,children:nt.jsxs("div",{className:"flex items-center gap-2",children:[nt.jsx("span",{children:s}),nt.jsx("button",{onClick:()=>{c(!1),setTimeout(r,300)},className:"ml-2 opacity-60 hover:opacity-100 transition-opacity",children:"✕"})]})})}class _2 extends Tm{constructor(t){super(t)}load(t,i,r,l){const c=this,h=new GM(this.manager);h.setPath(this.path),h.setResponseType("arraybuffer"),h.setRequestHeader(this.requestHeader),h.setWithCredentials(this.withCredentials),h.load(t,function(d){try{i(c.parse(d))}catch(m){l?l(m):console.error(m),c.manager.itemError(t)}},r,l)}parse(t){function i(p){const g=new DataView(p),_=32/8*3+32/8*3*3+16/8,S=g.getUint32(80,!0);if(80+32/8+S*_===g.byteLength)return!0;const T=[115,111,108,105,100];for(let R=0;R<5;R++)if(r(T,g,R))return!1;return!0}function r(p,g,_){for(let S=0,b=p.length;S<b;S++)if(p[S]!==g.getUint8(_+S))return!1;return!0}function l(p){const g=new DataView(p),_=g.getUint32(80,!0);let S,b,T,R=!1,E,x,F,N,O;for(let X=0;X<70;X++)g.getUint32(X,!1)==1129270351&&g.getUint8(X+4)==82&&g.getUint8(X+5)==61&&(R=!0,E=new Float32Array(_*3*3),x=g.getUint8(X+6)/255,F=g.getUint8(X+7)/255,N=g.getUint8(X+8)/255,O=g.getUint8(X+9)/255);const z=84,P=50,I=new ti,j=new Float32Array(_*3*3),C=new Float32Array(_*3*3),U=new He;for(let X=0;X<_;X++){const $=z+X*P,rt=g.getFloat32($,!0),tt=g.getFloat32($+4,!0),xt=g.getFloat32($+8,!0);if(R){const H=g.getUint16($+48,!0);(H&32768)===0?(S=(H&31)/31,b=(H>>5&31)/31,T=(H>>10&31)/31):(S=x,b=F,T=N)}for(let H=1;H<=3;H++){const Y=$+H*12,st=X*3*3+(H-1)*3;j[st]=g.getFloat32(Y,!0),j[st+1]=g.getFloat32(Y+4,!0),j[st+2]=g.getFloat32(Y+8,!0),C[st]=rt,C[st+1]=tt,C[st+2]=xt,R&&(U.setRGB(S,b,T,ji),E[st]=U.r,E[st+1]=U.g,E[st+2]=U.b)}}return I.setAttribute("position",new qn(j,3)),I.setAttribute("normal",new qn(C,3)),R&&(I.setAttribute("color",new qn(E,3)),I.hasColors=!0,I.alpha=O),I}function c(p){const g=new ti,_=/solid([\s\S]*?)endsolid/g,S=/facet([\s\S]*?)endfacet/g,b=/solid\s(.+)/;let T=0;const R=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,E=new RegExp("vertex"+R+R+R,"g"),x=new RegExp("normal"+R+R+R,"g"),F=[],N=[],O=[],z=new it;let P,I=0,j=0,C=0;for(;(P=_.exec(p))!==null;){j=C;const U=P[0],X=(P=b.exec(U))!==null?P[1]:"";for(O.push(X);(P=S.exec(U))!==null;){let tt=0,xt=0;const H=P[0];for(;(P=x.exec(H))!==null;)z.x=parseFloat(P[1]),z.y=parseFloat(P[2]),z.z=parseFloat(P[3]),xt++;for(;(P=E.exec(H))!==null;)F.push(parseFloat(P[1]),parseFloat(P[2]),parseFloat(P[3])),N.push(z.x,z.y,z.z),tt++,C++;xt!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+T),tt!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+T),T++}const $=j,rt=C-j;g.userData.groupNames=O,g.addGroup($,rt,I),I++}return g.setAttribute("position",new xi(F,3)),g.setAttribute("normal",new xi(N,3)),g}function h(p){return typeof p!="string"?new TextDecoder().decode(p):p}function d(p){if(typeof p=="string"){const g=new Uint8Array(p.length);for(let _=0;_<p.length;_++)g[_]=p.charCodeAt(_)&255;return g.buffer||g}else return p}const m=d(t);return i(m)?l(m):c(h(t))}}function v2(s){const i=new _2().parse(s);return i.computeBoundingBox(),i.computeVertexNormals(),i}function ax(s){s.boundingBox||s.computeBoundingBox();const t=s.boundingBox;return{width:t.max.x-t.min.x,height:t.max.z-t.min.z,depth:t.max.y-t.min.y,minX:t.min.x,maxX:t.max.x,minY:t.min.y,maxY:t.max.y,minZ:t.min.z,maxZ:t.max.z,centerX:(t.min.x+t.max.x)/2,centerY:(t.min.y+t.max.y)/2,centerZ:(t.min.z+t.max.z)/2}}function x2(s,t){const i=t.length/3,r=84+i*50,l=new ArrayBuffer(r),c=new DataView(l),h="Binary STL generated by Gridfinity Base Adder";for(let m=0;m<Math.min(h.length,80);m++)c.setUint8(m,h.charCodeAt(m));c.setUint32(80,i,!0);let d=84;for(let m=0;m<i;m++){const p=t[m*3],g=t[m*3+1],_=t[m*3+2],S=s[p*3],b=s[p*3+1],T=s[p*3+2],R=s[g*3],E=s[g*3+1],x=s[g*3+2],F=s[_*3],N=s[_*3+1],O=s[_*3+2],z=R-S,P=E-b,I=x-T,j=F-S,C=N-b,U=O-T;let X=P*U-I*C,$=I*j-z*U,rt=z*C-P*j;const tt=Math.sqrt(X*X+$*$+rt*rt);tt>0&&(X/=tt,$/=tt,rt/=tt),c.setFloat32(d,X,!0),d+=4,c.setFloat32(d,$,!0),d+=4,c.setFloat32(d,rt,!0),d+=4,c.setFloat32(d,S,!0),d+=4,c.setFloat32(d,b,!0),d+=4,c.setFloat32(d,T,!0),d+=4,c.setFloat32(d,R,!0),d+=4,c.setFloat32(d,E,!0),d+=4,c.setFloat32(d,x,!0),d+=4,c.setFloat32(d,F,!0),d+=4,c.setFloat32(d,N,!0),d+=4,c.setFloat32(d,O,!0),d+=4,c.setUint16(d,0,!0),d+=2}return l}function y2(s,t){const i=new Blob([s],{type:"application/octet-stream"}),r=URL.createObjectURL(i),l=document.createElement("a");l.href=r,l.download=t,l.click(),URL.revokeObjectURL(r)}const S2="modulepreload",M2=function(s){return"/gridfinity-base-adder/"+s},rx={},b2=function(t,i,r){let l=Promise.resolve();if(i&&i.length>0){let m=function(p){return Promise.all(p.map(g=>Promise.resolve(g).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),d=h?.nonce||h?.getAttribute("nonce");l=m(i.map(p=>{if(p=M2(p),p in rx)return;rx[p]=!0;const g=p.endsWith(".css"),_=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${_}`))return;const S=document.createElement("link");if(S.rel=g?"stylesheet":S2,g||(S.as="script"),S.crossOrigin="",S.href=p,d&&S.setAttribute("nonce",d),document.head.appendChild(S),g)return new Promise((b,T)=>{S.addEventListener("load",b),S.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${p}`)))})}))}function c(h){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=h,window.dispatchEvent(d),!d.defaultPrevented)throw h}return l.then(h=>{for(const d of h||[])d.status==="rejected"&&c(d.reason);return t().catch(c)})};var E2=(()=>{var s=import.meta.url;return(async function(t={}){var i,r=t,l,c,h=new Promise((v,y)=>{l=v,c=y}),d=typeof window=="object",m=typeof importScripts=="function",p=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string";if(p){const{createRequire:v}=await b2(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]);var g=v(import.meta.url)}var _=!1;r.setup=function(){if(_)return;_=!0,r.initTBB();function v(q,ut,Tt=(zt=>zt)){if(ut)for(let zt of ut)q.push_back(Tt(zt));return q}function y(q,ut=(Tt=>Tt)){const Tt=[],zt=q.size();for(let Te=0;Te<zt;Te++)Tt.push(ut(q.get(Te)));return Tt}function L(q,ut=(Tt=>Tt)){const Tt=[],zt=q.size();for(let Te=0;Te<zt;Te++){const qe=q.get(Te),hn=qe.size(),ei=[];for(let On=0;On<hn;On++)ei.push(ut(qe.get(On)));Tt.push(ei)}return Tt}function V(q){return q[0].length<3&&(q=[q]),v(new r.Vector2_vec2,q,ut=>v(new r.Vector_vec2,ut,Tt=>Tt instanceof Array?{x:Tt[0],y:Tt[1]}:Tt))}function ot(q){for(let ut=0;ut<q.size();ut++)q.get(ut).delete();q.delete()}function yt(q){return q[0]instanceof Array?{x:q[0][0],y:q[0][1]}:typeof q[0]=="number"?{x:q[0]||0,y:q[1]||0}:q[0]}function Ut(q){return q[0]instanceof Array?{x:q[0][0],y:q[0][1],z:q[0][2]}:typeof q[0]=="number"?{x:q[0]||0,y:q[1]||0,z:q[2]||0}:q[0]}function Mt(q){return q=="EvenOdd"?0:q=="NonZero"?1:q=="Negative"?3:2}function It(q){return q=="Round"?1:q=="Miter"?2:0}const Pt=r.CrossSection;function Wt(q,ut="Positive"){if(q instanceof Pt)return q;{const Tt=V(q),zt=new Pt(Tt,Mt(ut));return ot(Tt),zt}}r.CrossSection.prototype.translate=function(...q){return this._Translate(yt(q))},r.CrossSection.prototype.scale=function(q){return typeof q=="number"?this._Scale({x:q,y:q}):this._Scale(yt([q]))},r.CrossSection.prototype.mirror=function(q){return this._Mirror(yt([q]))},r.CrossSection.prototype.warp=function(q){const ut=cs(function(zt){const Te=Qt(zt,"double"),qe=Qt(zt+8,"double"),hn=[Te,qe];q(hn),B(zt,hn[0],"double"),B(zt+8,hn[1],"double")},"vi"),Tt=this._Warp(ut);return us(ut),Tt},r.CrossSection.prototype.decompose=function(){const q=this._Decompose(),ut=y(q);return q.delete(),ut},r.CrossSection.prototype.bounds=function(){const q=this._Bounds();return{min:["x","y"].map(ut=>q.min[ut]),max:["x","y"].map(ut=>q.max[ut])}},r.CrossSection.prototype.offset=function(q,ut="Round",Tt=2,zt=0){return this._Offset(q,It(ut),Tt,zt)},r.CrossSection.prototype.simplify=function(q=1e-6){return this._Simplify(q)},r.CrossSection.prototype.extrude=function(q,ut=0,Tt=0,zt=[1,1],Te=!1){zt=yt([zt]);const qe=r._Extrude(this._ToPolygons(),q,ut,Tt,zt);return Te?qe.translate([0,0,-q/2]):qe},r.CrossSection.prototype.revolve=function(q=0,ut=360){return r._Revolve(this._ToPolygons(),q,ut)},r.CrossSection.prototype.add=function(q){return this._add(Wt(q))},r.CrossSection.prototype.subtract=function(q){return this._subtract(Wt(q))},r.CrossSection.prototype.intersect=function(q){return this._intersect(Wt(q))},r.CrossSection.prototype.toPolygons=function(){const q=this._ToPolygons(),ut=L(q,Tt=>[Tt.x,Tt.y]);return q.delete(),ut},r.Manifold.prototype.smoothOut=function(q=60,ut=0){return this._SmoothOut(q,ut)},r.Manifold.prototype.warp=function(q){const ut=cs(function(Te){const qe=Qt(Te,"double"),hn=Qt(Te+8,"double"),ei=Qt(Te+16,"double"),On=[qe,hn,ei];q(On),B(Te,On[0],"double"),B(Te+8,On[1],"double"),B(Te+16,On[2],"double")},"vi"),Tt=this._Warp(ut);us(ut);const zt=Tt.status();if(zt!=="NoError")throw new r.ManifoldError(zt);return Tt},r.Manifold.prototype.calculateNormals=function(q,ut=60){return this._CalculateNormals(q,ut)},r.Manifold.prototype.setProperties=function(q,ut){const Tt=this.numProp(),zt=cs(function(qe,hn,ei){const On=[];for(let bn=0;bn<q;++bn)On[bn]=Qt(qe+8*bn,"double");const Ti=[];for(let bn=0;bn<3;++bn)Ti[bn]=Qt(hn+8*bn,"double");const Ga=[];for(let bn=0;bn<Tt;++bn)Ga[bn]=Qt(ei+8*bn,"double");ut(On,Ti,Ga);for(let bn=0;bn<q;++bn)B(qe+8*bn,On[bn],"double")},"viii"),Te=this._SetProperties(q,zt);return us(zt),Te},r.Manifold.prototype.translate=function(...q){return this._Translate(Ut(q))},r.Manifold.prototype.rotate=function(q,ut,Tt){return Array.isArray(q)?this._Rotate(...q):this._Rotate(q,ut||0,Tt||0)},r.Manifold.prototype.scale=function(q){return typeof q=="number"?this._Scale({x:q,y:q,z:q}):this._Scale(Ut([q]))},r.Manifold.prototype.mirror=function(q){return this._Mirror(Ut([q]))},r.Manifold.prototype.trimByPlane=function(q,ut=0){return this._TrimByPlane(Ut([q]),ut)},r.Manifold.prototype.slice=function(q=0){const ut=this._Slice(q),Tt=new Pt(ut,Mt("Positive"));return ot(ut),Tt},r.Manifold.prototype.project=function(){const q=this._Project(),ut=new Pt(q,Mt("Positive"));return ot(q),ut},r.Manifold.prototype.split=function(q){const ut=this._Split(q),Tt=y(ut);return ut.delete(),Tt},r.Manifold.prototype.splitByPlane=function(q,ut=0){const Tt=this._SplitByPlane(Ut([q]),ut),zt=y(Tt);return Tt.delete(),zt},r.Manifold.prototype.decompose=function(){const q=this._Decompose(),ut=y(q);return q.delete(),ut},r.Manifold.prototype.boundingBox=function(){const q=this._boundingBox();return{min:["x","y","z"].map(ut=>q.min[ut]),max:["x","y","z"].map(ut=>q.max[ut])}};class Ee{constructor({numProp:ut=3,triVerts:Tt=new Uint32Array,vertProperties:zt=new Float32Array,mergeFromVert:Te,mergeToVert:qe,runIndex:hn,runOriginalID:ei,faceID:On,halfedgeTangent:Ti,runTransform:Ga}={}){this.numProp=ut,this.triVerts=Tt,this.vertProperties=zt,this.mergeFromVert=Te,this.mergeToVert=qe,this.runIndex=hn,this.runOriginalID=ei,this.faceID=On,this.halfedgeTangent=Ti,this.runTransform=Ga}get numTri(){return this.triVerts.length/3}get numVert(){return this.vertProperties.length/this.numProp}get numRun(){return this.runOriginalID.length}merge(){const{changed:ut,mesh:Tt}=r._Merge(this);return Object.assign(this,{...Tt}),ut}verts(ut){return this.triVerts.subarray(3*ut,3*(ut+1))}position(ut){return this.vertProperties.subarray(this.numProp*ut,this.numProp*ut+3)}extras(ut){return this.vertProperties.subarray(this.numProp*ut+3,this.numProp*(ut+1))}tangent(ut){return this.halfedgeTangent.subarray(4*ut,4*(ut+1))}transform(ut){const Tt=new Array(16);for(const zt of[0,1,2,3])for(const Te of[0,1,2])Tt[4*zt+Te]=this.runTransform[12*ut+3*zt+Te];return Tt[15]=1,Tt}}r.Mesh=Ee,r.Manifold.prototype.getMesh=function(q=-1){return new Ee(this._GetMeshJS(q))},r.ManifoldError=function(ut,...Tt){let zt="Unknown error";switch(ut){case"NonFiniteVertex":zt="Non-finite vertex";break;case"NotManifold":zt="Not manifold";break;case"VertexOutOfBounds":zt="Vertex index out of bounds";break;case"PropertiesWrongLength":zt="Properties have wrong length";break;case"MissingPositionProperties":zt="Less than three properties";break;case"MergeVectorsDifferentLengths":zt="Merge vectors have different lengths";break;case"MergeIndexOutOfBounds":zt="Merge index out of bounds";break;case"TransformWrongLength":zt="Transform vector has wrong length";break;case"RunIndexWrongLength":zt="Run index vector has wrong length";break;case"FaceIDWrongLength":zt="Face ID vector has wrong length";case"InvalidConstruction":zt="Manifold constructed with invalid parameters"}const Te=Error.apply(this,[zt,...Tt]);Te.name=this.name="ManifoldError",this.message=Te.message,this.stack=Te.stack,this.code=ut},r.ManifoldError.prototype=Object.create(Error.prototype,{constructor:{value:r.ManifoldError,writable:!0,configurable:!0}}),r.CrossSection=function(q,ut="Positive"){const Tt=V(q),zt=new Pt(Tt,Mt(ut));return ot(Tt),zt},r.CrossSection.ofPolygons=function(q,ut="Positive"){return new r.CrossSection(q,ut)},r.CrossSection.square=function(...q){let ut;q.length==0?ut={x:1,y:1}:typeof q[0]=="number"?ut={x:q[0],y:q[0]}:ut=yt(q);const Tt=q[1]||!1;return r._Square(ut,Tt)},r.CrossSection.circle=function(q,ut=0){return r._Circle(q,ut)};function Ye(q){return function(...ut){ut.length==1&&(ut=ut[0]);const Tt=new r.Vector_crossSection;for(const Te of ut)Tt.push_back(Wt(Te));const zt=r["_crossSection"+q](Tt);return Tt.delete(),zt}}r.CrossSection.compose=Ye("Compose"),r.CrossSection.union=Ye("UnionN"),r.CrossSection.difference=Ye("DifferenceN"),r.CrossSection.intersection=Ye("IntersectionN");function Rn(q,ut){v(q,ut,Tt=>Tt instanceof Array?{x:Tt[0],y:Tt[1]}:Tt)}r.CrossSection.hull=function(...q){q.length==1&&(q=q[0]);let ut=new r.Vector_vec2;for(const zt of q)if(zt instanceof Pt)r._crossSectionCollectVertices(ut,zt);else if(zt instanceof Array&&zt.length==2&&typeof zt[0]=="number")ut.push_back({x:zt[0],y:zt[1]});else if(zt.x)ut.push_back(zt);else{const qe=zt[0].length==2&&typeof zt[0][0]=="number"||zt[0].x?[zt]:zt;for(const hn of qe)Rn(ut,hn)}const Tt=r._crossSectionHullPoints(ut);return ut.delete(),Tt},r.CrossSection.prototype=Object.create(Pt.prototype),Object.defineProperty(r.CrossSection,Symbol.hasInstance,{get:()=>q=>q instanceof Pt});const xn=r.Manifold;r.Manifold=function(q){const ut=new xn(q),Tt=ut.status();if(Tt!=="NoError")throw new r.ManifoldError(Tt);return ut},r.Manifold.ofMesh=function(q){return new r.Manifold(q)},r.Manifold.tetrahedron=function(){return r._Tetrahedron()},r.Manifold.cube=function(...q){let ut;q.length==0?ut={x:1,y:1,z:1}:typeof q[0]=="number"?ut={x:q[0],y:q[0],z:q[0]}:ut=Ut(q);const Tt=q[1]||!1;return r._Cube(ut,Tt)},r.Manifold.cylinder=function(q,ut,Tt=-1,zt=0,Te=!1){return r._Cylinder(q,ut,Tt,zt,Te)},r.Manifold.sphere=function(q,ut=0){return r._Sphere(q,ut)},r.Manifold.smooth=function(q,ut=[]){const Tt=new r.Vector_smoothness;v(Tt,ut);const zt=r._Smooth(q,Tt);return Tt.delete(),zt},r.Manifold.extrude=function(q,ut,Tt=0,zt=0,Te=[1,1],qe=!1){return(q instanceof Pt?q:r.CrossSection(q,"Positive")).extrude(ut,Tt,zt,Te,qe)},r.Manifold.revolve=function(q,ut=0,Tt=360){return(q instanceof Pt?q:r.CrossSection(q,"Positive")).revolve(ut,Tt)},r.Manifold.reserveIDs=function(q){return r._ReserveIDs(q)},r.Manifold.compose=function(q){const ut=new r.Vector_manifold;v(ut,q);const Tt=r._manifoldCompose(ut);return ut.delete(),Tt};function mi(q){return function(...ut){ut.length==1&&(ut=ut[0]);const Tt=new r.Vector_manifold;for(const Te of ut)Tt.push_back(Te);const zt=r["_manifold"+q+"N"](Tt);return Tt.delete(),zt}}r.Manifold.union=mi("Union"),r.Manifold.difference=mi("Difference"),r.Manifold.intersection=mi("Intersection"),r.Manifold.levelSet=function(q,ut,Tt,zt=0,Te=-1){const qe={min:{x:ut.min[0],y:ut.min[1],z:ut.min[2]},max:{x:ut.max[0],y:ut.max[1],z:ut.max[2]}},hn=cs(function(On){const Ti=Qt(On,"double"),Ga=Qt(On+8,"double"),bn=Qt(On+16,"double");return q([Ti,Ga,bn])},"di"),ei=r._LevelSet(hn,qe,Tt,zt,Te);return us(hn),ei};function Ii(q,ut){v(q,ut,Tt=>Tt instanceof Array?{x:Tt[0],y:Tt[1],z:Tt[2]}:Tt)}r.Manifold.hull=function(...q){q.length==1&&(q=q[0]);let ut=new r.Vector_vec3;for(const zt of q)zt instanceof xn?r._manifoldCollectVertices(ut,zt):zt instanceof Array&&zt.length==3&&typeof zt[0]=="number"?ut.push_back({x:zt[0],y:zt[1],z:zt[2]}):zt.x?ut.push_back(zt):Ii(ut,zt);const Tt=r._manifoldHullPoints(ut);return ut.delete(),Tt},r.Manifold.prototype=Object.create(xn.prototype),Object.defineProperty(r.Manifold,Symbol.hasInstance,{get:()=>q=>q instanceof xn}),r.triangulate=function(q,ut=-1,Tt=!0){const zt=V(q),Te=y(r._Triangulate(zt,ut,Tt),qe=>[qe[0],qe[1],qe[2]]);return ot(zt),Te}};var S=Object.assign({},r),b="";function T(v){return r.locateFile?r.locateFile(v,b):b+v}var R,E;if(p){var x=g("fs"),F=g("path");b=g("url").fileURLToPath(new URL("/gridfinity-base-adder/assets/manifold-B8h_vZ5O.js",import.meta.url)),E=v=>{v=ln(v)?new URL(v):F.normalize(v);var y=x.readFileSync(v);return y},R=(v,y=!0)=>(v=ln(v)?new URL(v):F.normalize(v),new Promise((L,V)=>{x.readFile(v,y?void 0:"utf8",(ot,yt)=>{ot?V(ot):L(y?yt.buffer:yt)})})),!r.thisProgram&&process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2)}else(d||m)&&(m?b=self.location.href:typeof document<"u"&&document.currentScript&&(b=document.currentScript.src),s&&(b=s),b.startsWith("blob:")?b="":b=b.substr(0,b.replace(/[?#].*/,"").lastIndexOf("/")+1),m&&(E=v=>{var y=new XMLHttpRequest;return y.open("GET",v,!1),y.responseType="arraybuffer",y.send(null),new Uint8Array(y.response)}),R=v=>ln(v)?new Promise((y,L)=>{var V=new XMLHttpRequest;V.open("GET",v,!0),V.responseType="arraybuffer",V.onload=()=>{(V.status==200||V.status==0&&V.response)&&L(V.response),y(V.status)},V.onerror=y,V.send(null)}):fetch(v,{credentials:"same-origin"}).then(y=>y.ok?y.arrayBuffer():Promise.reject(new Error(y.status+" : "+y.url))));r.print||console.log.bind(console);var N=r.printErr||console.error.bind(console);Object.assign(r,S),S=null,r.arguments&&r.arguments,r.thisProgram&&r.thisProgram,r.quit&&r.quit;var O;r.wasmBinary&&(O=r.wasmBinary);var z,P=!1,I,j,C,U,X,$,rt,tt;function xt(){var v=z.buffer;r.HEAP8=I=new Int8Array(v),r.HEAP16=C=new Int16Array(v),r.HEAPU8=j=new Uint8Array(v),r.HEAPU16=U=new Uint16Array(v),r.HEAP32=X=new Int32Array(v),r.HEAPU32=$=new Uint32Array(v),r.HEAPF32=rt=new Float32Array(v),r.HEAPF64=tt=new Float64Array(v)}var H=[],Y=[],st=[];function Ft(){if(r.preRun)for(typeof r.preRun=="function"&&(r.preRun=[r.preRun]);r.preRun.length;)ct(r.preRun.shift());xe(H)}function Nt(){xe(Y)}function G(){if(r.postRun)for(typeof r.postRun=="function"&&(r.postRun=[r.postRun]);r.postRun.length;)Gt(r.postRun.shift());xe(st)}function ct(v){H.unshift(v)}function At(v){Y.unshift(v)}function Gt(v){st.unshift(v)}var kt=0,lt=null;function vt(v){kt++,r.monitorRunDependencies?.(kt)}function Xt(v){if(kt--,r.monitorRunDependencies?.(kt),kt==0&&lt){var y=lt;lt=null,y()}}function ie(v){r.onAbort?.(v),v="Aborted("+v+")",N(v),P=!0,v+=". Build with -sASSERTIONS for more info.";var y=new WebAssembly.RuntimeError(v);throw c(y),y}var re="data:application/octet-stream;base64,",Ne=v=>v.startsWith(re),ln=v=>v.startsWith("file://");function Ie(){if(r.locateFile){var v="manifold.wasm";return Ne(v)?v:T(v)}return new URL("/gridfinity-base-adder/assets/manifold-D9yvTBHx.wasm",import.meta.url).href}var Ce;function ke(v){if(v==Ce&&O)return new Uint8Array(O);if(E)return E(v);throw"both async and sync fetching of the wasm failed"}function Jt(v){return O?Promise.resolve().then(()=>ke(v)):R(v).then(y=>new Uint8Array(y),()=>ke(v))}function pe(v,y,L){return Jt(v).then(V=>WebAssembly.instantiate(V,y)).then(L,V=>{N(`failed to asynchronously prepare wasm: ${V}`),ie(V)})}function k(v,y,L,V){return!v&&typeof WebAssembly.instantiateStreaming=="function"&&!Ne(y)&&!ln(y)&&!p&&typeof fetch=="function"?fetch(y,{credentials:"same-origin"}).then(ot=>{var yt=WebAssembly.instantiateStreaming(ot,L);return yt.then(V,function(Ut){return N(`wasm streaming compile failed: ${Ut}`),N("falling back to ArrayBuffer instantiation"),pe(y,L,V)})}):pe(y,L,V)}function ge(){return{a:gc}}function Me(){var v=ge();function y(V,ot){return Ei=V.exports,Ei=_c(Ei),z=Ei.J,xt(),rn=Ei.M,At(Ei.K),Xt(),Ei}vt();function L(V){y(V.instance)}if(r.instantiateWasm)try{return r.instantiateWasm(v,y)}catch(V){N(`Module.instantiateWasm callback failed with error: ${V}`),c(V)}return Ce||(Ce=Ie()),k(O,Ce,v,L).catch(c),{}}var xe=v=>{for(;v.length>0;)v.shift()(r)};function Qt(v,y="i8"){switch(y.endsWith("*")&&(y="*"),y){case"i1":return I[v>>>0];case"i8":return I[v>>>0];case"i16":return C[v>>>1>>>0];case"i32":return X[v>>>2>>>0];case"i64":ie("to do getValue(i64) use WASM_BIGINT");case"float":return rt[v>>>2>>>0];case"double":return tt[v>>>3>>>0];case"*":return $[v>>>2>>>0];default:ie(`invalid type for getValue: ${y}`)}}r.noExitRuntime;function B(v,y,L="i8"){switch(L.endsWith("*")&&(L="*"),L){case"i1":I[v>>>0]=y;break;case"i8":I[v>>>0]=y;break;case"i16":C[v>>>1>>>0]=y;break;case"i32":X[v>>>2>>>0]=y;break;case"i64":ie("to do setValue(i64) use WASM_BIGINT");case"float":rt[v>>>2>>>0]=y;break;case"double":tt[v>>>3>>>0]=y;break;case"*":$[v>>>2>>>0]=y;break;default:ie(`invalid type for setValue: ${L}`)}}class A{constructor(y){this.excPtr=y,this.ptr=y-24}set_type(y){$[this.ptr+4>>>2>>>0]=y}get_type(){return $[this.ptr+4>>>2>>>0]}set_destructor(y){$[this.ptr+8>>>2>>>0]=y}get_destructor(){return $[this.ptr+8>>>2>>>0]}set_caught(y){y=y?1:0,I[this.ptr+12>>>0]=y}get_caught(){return I[this.ptr+12>>>0]!=0}set_rethrown(y){y=y?1:0,I[this.ptr+13>>>0]=y}get_rethrown(){return I[this.ptr+13>>>0]!=0}init(y,L){this.set_adjusted_ptr(0),this.set_type(y),this.set_destructor(L)}set_adjusted_ptr(y){$[this.ptr+16>>>2>>>0]=y}get_adjusted_ptr(){return $[this.ptr+16>>>2>>>0]}get_exception_ptr(){var y=fs(this.get_type());if(y)return $[this.excPtr>>>2>>>0];var L=this.get_adjusted_ptr();return L!==0?L:this.excPtr}}var K=0;function bt(v,y,L){v>>>=0,y>>>=0,L>>>=0;var V=new A(v);throw V.init(y,L),K=v,K}var Dt=()=>{ie("")},_t={},se=v=>{for(;v.length;){var y=v.pop(),L=v.pop();L(y)}};function Vt(v){return this.fromWireType($[v>>>2>>>0])}var ae={},de={},Ot={},Bt,te=v=>{throw new Bt(v)},Yt=(v,y,L)=>{v.forEach(function(Mt){Ot[Mt]=y});function V(Mt){var It=L(Mt);It.length!==v.length&&te("Mismatched type converter count");for(var Pt=0;Pt<v.length;++Pt)Ht(v[Pt],It[Pt])}var ot=new Array(y.length),yt=[],Ut=0;y.forEach((Mt,It)=>{de.hasOwnProperty(Mt)?ot[It]=de[Mt]:(yt.push(Mt),ae.hasOwnProperty(Mt)||(ae[Mt]=[]),ae[Mt].push(()=>{ot[It]=de[Mt],++Ut,Ut===yt.length&&V(ot)}))}),yt.length===0&&V(ot)},jt=function(v){v>>>=0;var y=_t[v];delete _t[v];var L=y.rawConstructor,V=y.rawDestructor,ot=y.fields,yt=ot.map(Ut=>Ut.getterReturnType).concat(ot.map(Ut=>Ut.setterArgumentType));Yt([v],yt,Ut=>{var Mt={};return ot.forEach((It,Pt)=>{var Wt=It.fieldName,Ee=Ut[Pt],Ye=It.getter,Rn=It.getterContext,xn=Ut[Pt+ot.length],mi=It.setter,Ii=It.setterContext;Mt[Wt]={read:q=>Ee.fromWireType(Ye(Rn,q)),write:(q,ut)=>{var Tt=[];mi(Ii,q,xn.toWireType(Tt,ut)),se(Tt)}}}),[{name:y.name,fromWireType:It=>{var Pt={};for(var Wt in Mt)Pt[Wt]=Mt[Wt].read(It);return V(It),Pt},toWireType:(It,Pt)=>{for(var Wt in Mt)if(!(Wt in Pt))throw new TypeError(`Missing field: "${Wt}"`);var Ee=L();for(Wt in Mt)Mt[Wt].write(Ee,Pt[Wt]);return It!==null&&It.push(V,Ee),Ee},argPackAdvance:me,readValueFromPointer:Vt,destructorFunction:V}]})};function De(v,y,L,V,ot){}var Q=()=>{for(var v=new Array(256),y=0;y<256;++y)v[y]=String.fromCharCode(y);qt=v},qt,Lt=v=>{for(var y="",L=v;j[L>>>0];)y+=qt[j[L++>>>0]];return y},Zt,St=v=>{throw new Zt(v)};function Ct(v,y,L={}){var V=y.name;if(v||St(`type "${V}" must have a positive integer typeid pointer`),de.hasOwnProperty(v)){if(L.ignoreDuplicateRegistrations)return;St(`Cannot register type '${V}' twice`)}if(de[v]=y,delete Ot[v],ae.hasOwnProperty(v)){var ot=ae[v];delete ae[v],ot.forEach(yt=>yt())}}function Ht(v,y,L={}){if(!("argPackAdvance"in y))throw new TypeError("registerType registeredInstance requires argPackAdvance");return Ct(v,y,L)}var me=8;function an(v,y,L,V){v>>>=0,y>>>=0,y=Lt(y),Ht(v,{name:y,fromWireType:function(ot){return!!ot},toWireType:function(ot,yt){return yt?L:V},argPackAdvance:me,readValueFromPointer:function(ot){return this.fromWireType(j[ot>>>0])},destructorFunction:null})}var je=v=>({count:v.count,deleteScheduled:v.deleteScheduled,preservePointerOnDelete:v.preservePointerOnDelete,ptr:v.ptr,ptrType:v.ptrType,smartPtr:v.smartPtr,smartPtrType:v.smartPtrType}),In=v=>{function y(L){return L.$$.ptrType.registeredClass.name}St(y(v)+" instance already deleted")},di=!1,$r=v=>{},Jr=v=>{v.smartPtr?v.smartPtrType.rawDestructor(v.smartPtr):v.ptrType.registeredClass.rawDestructor(v.ptr)},Ia=v=>{v.count.value-=1;var y=v.count.value===0;y&&Jr(v)},pr=(v,y,L)=>{if(y===L)return v;if(L.baseClass===void 0)return null;var V=pr(v,y,L.baseClass);return V===null?null:L.downcast(V)},Ba={},ts=()=>Object.keys(Ki).length,Zi=()=>{var v=[];for(var y in Ki)Ki.hasOwnProperty(y)&&v.push(Ki[y]);return v},Qn=[],Mn=()=>{for(;Qn.length;){var v=Qn.pop();v.$$.deleteScheduled=!1,v.delete()}},An,Pi=v=>{An=v,Qn.length&&An&&An(Mn)},mr=()=>{r.getInheritedInstanceCount=ts,r.getLiveInheritedInstances=Zi,r.flushPendingDeletes=Mn,r.setDelayFunction=Pi},Ki={},Hs=(v,y)=>{for(y===void 0&&St("ptr should not be undefined");v.baseClass;)y=v.upcast(y),v=v.baseClass;return y},es=(v,y)=>(y=Hs(v,y),Ki[y]),Qi=(v,y)=>{(!y.ptrType||!y.ptr)&&te("makeClassHandle requires ptr and ptrType");var L=!!y.smartPtrType,V=!!y.smartPtr;return L!==V&&te("Both smartPtrType and smartPtr must be specified"),y.count={value:1},yi(Object.create(v,{$$:{value:y,writable:!0}}))};function ns(v){var y=this.getPointee(v);if(!y)return this.destructor(v),null;var L=es(this.registeredClass,y);if(L!==void 0){if(L.$$.count.value===0)return L.$$.ptr=y,L.$$.smartPtr=v,L.clone();var V=L.clone();return this.destructor(v),V}function ot(){return this.isSmartPointer?Qi(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:y,smartPtrType:this,smartPtr:v}):Qi(this.registeredClass.instancePrototype,{ptrType:this,ptr:v})}var yt=this.registeredClass.getActualType(y),Ut=Ba[yt];if(!Ut)return ot.call(this);var Mt;this.isConst?Mt=Ut.constPointerType:Mt=Ut.pointerType;var It=pr(y,this.registeredClass,Mt.registeredClass);return It===null?ot.call(this):this.isSmartPointer?Qi(Mt.registeredClass.instancePrototype,{ptrType:Mt,ptr:It,smartPtrType:this,smartPtr:v}):Qi(Mt.registeredClass.instancePrototype,{ptrType:Mt,ptr:It})}var yi=v=>typeof FinalizationRegistry>"u"?(yi=y=>y,v):(di=new FinalizationRegistry(y=>{Ia(y.$$)}),yi=y=>{var L=y.$$,V=!!L.smartPtr;if(V){var ot={$$:L};di.register(y,ot,y)}return y},$r=y=>di.unregister(y),yi(v)),ya=()=>{Object.assign($i.prototype,{isAliasOf(v){if(!(this instanceof $i)||!(v instanceof $i))return!1;var y=this.$$.ptrType.registeredClass,L=this.$$.ptr;v.$$=v.$$;for(var V=v.$$.ptrType.registeredClass,ot=v.$$.ptr;y.baseClass;)L=y.upcast(L),y=y.baseClass;for(;V.baseClass;)ot=V.upcast(ot),V=V.baseClass;return y===V&&L===ot},clone(){if(this.$$.ptr||In(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var v=yi(Object.create(Object.getPrototypeOf(this),{$$:{value:je(this.$$)}}));return v.$$.count.value+=1,v.$$.deleteScheduled=!1,v},delete(){this.$$.ptr||In(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&St("Object already scheduled for deletion"),$r(this),Ia(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||In(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&St("Object already scheduled for deletion"),Qn.push(this),Qn.length===1&&An&&An(Mn),this.$$.deleteScheduled=!0,this}})};function $i(){}var pi=(v,y)=>Object.defineProperty(y,"name",{value:v}),w=(v,y,L)=>{if(v[y].overloadTable===void 0){var V=v[y];v[y]=function(...ot){return v[y].overloadTable.hasOwnProperty(ot.length)||St(`Function '${L}' called with an invalid number of arguments (${ot.length}) - expects one of (${v[y].overloadTable})!`),v[y].overloadTable[ot.length].apply(this,ot)},v[y].overloadTable=[],v[y].overloadTable[V.argCount]=V}},J=(v,y,L)=>{r.hasOwnProperty(v)?((L===void 0||r[v].overloadTable!==void 0&&r[v].overloadTable[L]!==void 0)&&St(`Cannot register public name '${v}' twice`),w(r,v,v),r.hasOwnProperty(L)&&St(`Cannot register multiple overloads of a function with the same number of arguments (${L})!`),r[v].overloadTable[L]=y):(r[v]=y,L!==void 0&&(r[v].numArguments=L))},mt=48,dt=57,at=v=>{if(v===void 0)return"_unknown";v=v.replace(/[^a-zA-Z0-9_]/g,"$");var y=v.charCodeAt(0);return y>=mt&&y<=dt?`_${v}`:v};function Kt(v,y,L,V,ot,yt,Ut,Mt){this.name=v,this.constructor=y,this.instancePrototype=L,this.rawDestructor=V,this.baseClass=ot,this.getActualType=yt,this.upcast=Ut,this.downcast=Mt,this.pureVirtualFunctions=[]}var ne=(v,y,L)=>{for(;y!==L;)y.upcast||St(`Expected null or instance of ${L.name}, got an instance of ${y.name}`),v=y.upcast(v),y=y.baseClass;return v};function $t(v,y){if(y===null)return this.isReference&&St(`null is not a valid ${this.name}`),0;y.$$||St(`Cannot pass "${is(y)}" as a ${this.name}`),y.$$.ptr||St(`Cannot pass deleted object as a pointer of type ${this.name}`);var L=y.$$.ptrType.registeredClass,V=ne(y.$$.ptr,L,this.registeredClass);return V}function oe(v,y){var L;if(y===null)return this.isReference&&St(`null is not a valid ${this.name}`),this.isSmartPointer?(L=this.rawConstructor(),v!==null&&v.push(this.rawDestructor,L),L):0;(!y||!y.$$)&&St(`Cannot pass "${is(y)}" as a ${this.name}`),y.$$.ptr||St(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&y.$$.ptrType.isConst&&St(`Cannot convert argument of type ${y.$$.smartPtrType?y.$$.smartPtrType.name:y.$$.ptrType.name} to parameter type ${this.name}`);var V=y.$$.ptrType.registeredClass;if(L=ne(y.$$.ptr,V,this.registeredClass),this.isSmartPointer)switch(y.$$.smartPtr===void 0&&St("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:y.$$.smartPtrType===this?L=y.$$.smartPtr:St(`Cannot convert argument of type ${y.$$.smartPtrType?y.$$.smartPtrType.name:y.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:L=y.$$.smartPtr;break;case 2:if(y.$$.smartPtrType===this)L=y.$$.smartPtr;else{var ot=y.clone();L=this.rawShare(L,vn.toHandle(()=>ot.delete())),v!==null&&v.push(this.rawDestructor,L)}break;default:St("Unsupporting sharing policy")}return L}function ue(v,y){if(y===null)return this.isReference&&St(`null is not a valid ${this.name}`),0;y.$$||St(`Cannot pass "${is(y)}" as a ${this.name}`),y.$$.ptr||St(`Cannot pass deleted object as a pointer of type ${this.name}`),y.$$.ptrType.isConst&&St(`Cannot convert argument of type ${y.$$.ptrType.name} to parameter type ${this.name}`);var L=y.$$.ptrType.registeredClass,V=ne(y.$$.ptr,L,this.registeredClass);return V}var _e=()=>{Object.assign(le.prototype,{getPointee(v){return this.rawGetPointee&&(v=this.rawGetPointee(v)),v},destructor(v){this.rawDestructor?.(v)},argPackAdvance:me,readValueFromPointer:Vt,fromWireType:ns})};function le(v,y,L,V,ot,yt,Ut,Mt,It,Pt,Wt){this.name=v,this.registeredClass=y,this.isReference=L,this.isConst=V,this.isSmartPointer=ot,this.pointeeType=yt,this.sharingPolicy=Ut,this.rawGetPointee=Mt,this.rawConstructor=It,this.rawShare=Pt,this.rawDestructor=Wt,!ot&&y.baseClass===void 0?V?(this.toWireType=$t,this.destructorFunction=null):(this.toWireType=ue,this.destructorFunction=null):this.toWireType=oe}var ye=(v,y,L)=>{r.hasOwnProperty(v)||te("Replacing nonexistent public symbol"),r[v].overloadTable!==void 0&&L!==void 0?r[v].overloadTable[L]=y:(r[v]=y,r[v].argCount=L)},Ke=(v,y,L)=>{v=v.replace(/p/g,"i");var V=r["dynCall_"+v];return V(y,...L)},rn,sn=v=>rn.get(v),Je=(v,y,L=[])=>{if(v.includes("j"))return Ke(v,y,L);var V=sn(y)(...L);return v[0]=="p"?V>>>0:V},he=(v,y)=>(...L)=>Je(v,y,L),Ue=(v,y)=>{v=Lt(v);function L(){return v.includes("j")||v.includes("p")?he(v,y):sn(y)}var V=L();return typeof V!="function"&&St(`unknown function pointer with signature ${v}: ${y}`),V},Re=(v,y)=>{var L=pi(y,function(V){this.name=y,this.message=V;var ot=new Error(V).stack;ot!==void 0&&(this.stack=this.toString()+`
`+ot.replace(/^Error(:[^\n]*)?\n/,""))});return L.prototype=Object.create(v.prototype),L.prototype.constructor=L,L.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},L},Bn,Ji=v=>{var y=xr(v),L=Lt(y);return fa(y),L},Cn=(v,y)=>{var L=[],V={};function ot(yt){if(!V[yt]&&!de[yt]){if(Ot[yt]){Ot[yt].forEach(ot);return}L.push(yt),V[yt]=!0}}throw y.forEach(ot),new Bn(`${v}: `+L.map(Ji).join([", "]))};function Si(v,y,L,V,ot,yt,Ut,Mt,It,Pt,Wt,Ee,Ye){v>>>=0,y>>>=0,L>>>=0,V>>>=0,ot>>>=0,yt>>>=0,Ut>>>=0,Mt>>>=0,It>>>=0,Pt>>>=0,Wt>>>=0,Ee>>>=0,Ye>>>=0,Wt=Lt(Wt),yt=Ue(ot,yt),Mt&&=Ue(Ut,Mt),Pt&&=Ue(It,Pt),Ye=Ue(Ee,Ye);var Rn=at(Wt);J(Rn,function(){Cn(`Cannot construct ${Wt} due to unbound types`,[V])}),Yt([v,y,L],V?[V]:[],xn=>{xn=xn[0];var mi,Ii;V?(mi=xn.registeredClass,Ii=mi.instancePrototype):Ii=$i.prototype;var q=pi(Wt,function(...hn){if(Object.getPrototypeOf(this)!==ut)throw new Zt("Use 'new' to construct "+Wt);if(Tt.constructor_body===void 0)throw new Zt(Wt+" has no accessible constructor");var ei=Tt.constructor_body[hn.length];if(ei===void 0)throw new Zt(`Tried to invoke ctor of ${Wt} with invalid number of parameters (${hn.length}) - expected (${Object.keys(Tt.constructor_body).toString()}) parameters instead!`);return ei.apply(this,hn)}),ut=Object.create(Ii,{constructor:{value:q}});q.prototype=ut;var Tt=new Kt(Wt,q,ut,Ye,mi,yt,Mt,Pt);Tt.baseClass&&(Tt.baseClass.__derivedClasses??=[],Tt.baseClass.__derivedClasses.push(Tt));var zt=new le(Wt,Tt,!0,!1,!1),Te=new le(Wt+"*",Tt,!1,!1,!1),qe=new le(Wt+" const*",Tt,!1,!0,!1);return Ba[v]={pointerType:Te,constPointerType:qe},ye(Rn,q),[zt,Te,qe]})}var Qe=(v,y)=>{for(var L=[],V=0;V<v;V++)L.push($[y+V*4>>>2>>>0]);return L};function zn(v){for(var y=1;y<v.length;++y)if(v[y]!==null&&v[y].destructorFunction===void 0)return!0;return!1}function wn(v,y){if(!(v instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof v} which is not a function`);var L=pi(v.name||"unknownFunctionName",function(){});L.prototype=v.prototype;var V=new L,ot=v.apply(V,y);return ot instanceof Object?ot:V}function Wn(v,y,L,V){for(var ot=zn(v),yt=v.length,Ut="",Mt="",It=0;It<yt-2;++It)Ut+=(It!==0?", ":"")+"arg"+It,Mt+=(It!==0?", ":"")+"arg"+It+"Wired";var Pt=`
        return function (${Ut}) {
        if (arguments.length !== ${yt-2}) {
          throwBindingError('function ' + humanName + ' called with ' + arguments.length + ' arguments, expected ${yt-2}');
        }`;ot&&(Pt+=`var destructors = [];
`);var Wt=ot?"destructors":"null",Ee=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];y&&(Pt+="var thisWired = classParam['toWireType']("+Wt+`, this);
`);for(var It=0;It<yt-2;++It)Pt+="var arg"+It+"Wired = argType"+It+"['toWireType']("+Wt+", arg"+It+`);
`,Ee.push("argType"+It);if(y&&(Mt="thisWired"+(Mt.length>0?", ":"")+Mt),Pt+=(L||V?"var rv = ":"")+"invoker(fn"+(Mt.length>0?", ":"")+Mt+`);
`,ot)Pt+=`runDestructors(destructors);
`;else for(var It=y?1:2;It<v.length;++It){var Ye=It===1?"thisWired":"arg"+(It-2)+"Wired";v[It].destructorFunction!==null&&(Pt+=`${Ye}_dtor(${Ye});
`,Ee.push(`${Ye}_dtor`))}return L&&(Pt+=`var ret = retType['fromWireType'](rv);
return ret;
`),Pt+=`}
`,[Ee,Pt]}function Nn(v,y,L,V,ot,yt){var Ut=y.length;Ut<2&&St("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var Mt=y[1]!==null&&L!==null,It=zn(y),Pt=y[0].name!=="void",Wt=[v,St,V,ot,se,y[0],y[1]],Ee=0;Ee<Ut-2;++Ee)Wt.push(y[Ee+2]);if(!It)for(var Ee=Mt?1:2;Ee<y.length;++Ee)y[Ee].destructorFunction!==null&&Wt.push(y[Ee].destructorFunction);let[Ye,Rn]=Wn(y,Mt,Pt,yt);Ye.push(Rn);var xn=wn(Function,Ye)(...Wt);return pi(v,xn)}var gr=function(v,y,L,V,ot,yt){v>>>=0,L>>>=0,V>>>=0,ot>>>=0,yt>>>=0;var Ut=Qe(y,L);ot=Ue(V,ot),Yt([],[v],Mt=>{Mt=Mt[0];var It=`constructor ${Mt.name}`;if(Mt.registeredClass.constructor_body===void 0&&(Mt.registeredClass.constructor_body=[]),Mt.registeredClass.constructor_body[y-1]!==void 0)throw new Zt(`Cannot register multiple constructors with identical number of parameters (${y-1}) for class '${Mt.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return Mt.registeredClass.constructor_body[y-1]=()=>{Cn(`Cannot construct ${Mt.name} due to unbound types`,Ut)},Yt([],Ut,Pt=>(Pt.splice(1,0,null),Mt.registeredClass.constructor_body[y-1]=Nn(It,Pt,null,ot,yt),[])),[]})},Mi=v=>{v=v.trim();const y=v.indexOf("(");return y!==-1?v.substr(0,y):v},df=function(v,y,L,V,ot,yt,Ut,Mt,It){v>>>=0,y>>>=0,V>>>=0,ot>>>=0,yt>>>=0,Ut>>>=0;var Pt=Qe(L,V);y=Lt(y),y=Mi(y),yt=Ue(ot,yt),Yt([],[v],Wt=>{Wt=Wt[0];var Ee=`${Wt.name}.${y}`;y.startsWith("@@")&&(y=Symbol[y.substring(2)]),Mt&&Wt.registeredClass.pureVirtualFunctions.push(y);function Ye(){Cn(`Cannot call ${Ee} due to unbound types`,Pt)}var Rn=Wt.registeredClass.instancePrototype,xn=Rn[y];return xn===void 0||xn.overloadTable===void 0&&xn.className!==Wt.name&&xn.argCount===L-2?(Ye.argCount=L-2,Ye.className=Wt.name,Rn[y]=Ye):(w(Rn,y,Ee),Rn[y].overloadTable[L-2]=Ye),Yt([],Pt,mi=>{var Ii=Nn(Ee,mi,Wt,yt,Ut,It);return Rn[y].overloadTable===void 0?(Ii.argCount=L-2,Rn[y]=Ii):Rn[y].overloadTable[L-2]=Ii,[]}),[]})},qo=[],bi=[];function Fi(v){v>>>=0,v>9&&--bi[v+1]===0&&(bi[v]=void 0,qo.push(v))}var Zo=()=>bi.length/2-5-qo.length,Ko=()=>{bi.push(0,1,void 0,1,null,1,!0,1,!1,1),r.count_emval_handles=Zo},vn={toValue:v=>(v||St("Cannot use deleted val. handle = "+v),bi[v]),toHandle:v=>{switch(v){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const y=qo.pop()||bi.length;return bi[y]=v,bi[y+1]=1,y}}}},_r={name:"emscripten::val",fromWireType:v=>{var y=vn.toValue(v);return Fi(v),y},toWireType:(v,y)=>vn.toHandle(y),argPackAdvance:me,readValueFromPointer:Vt,destructorFunction:null};function Qo(v){return v>>>=0,Ht(v,_r)}var $o=(v,y,L)=>{switch(y){case 1:return L?function(V){return this.fromWireType(I[V>>>0])}:function(V){return this.fromWireType(j[V>>>0])};case 2:return L?function(V){return this.fromWireType(C[V>>>1>>>0])}:function(V){return this.fromWireType(U[V>>>1>>>0])};case 4:return L?function(V){return this.fromWireType(X[V>>>2>>>0])}:function(V){return this.fromWireType($[V>>>2>>>0])};default:throw new TypeError(`invalid integer width (${y}): ${v}`)}};function rc(v,y,L,V){v>>>=0,y>>>=0,L>>>=0,y=Lt(y);function ot(){}ot.values={},Ht(v,{name:y,constructor:ot,fromWireType:function(yt){return this.constructor.values[yt]},toWireType:(yt,Ut)=>Ut.value,argPackAdvance:me,readValueFromPointer:$o(y,L,V),destructorFunction:null}),J(y,ot)}var Sa=(v,y)=>{var L=de[v];return L===void 0&&St(`${y} has unknown type ${Ji(v)}`),L};function ua(v,y,L){v>>>=0,y>>>=0;var V=Sa(v,"enum");y=Lt(y);var ot=V.constructor,yt=Object.create(V.constructor.prototype,{value:{value:L},constructor:{value:pi(`${V.name}_${y}`,function(){})}});ot.values[L]=yt,ot[y]=yt}var is=v=>{if(v===null)return"null";var y=typeof v;return y==="object"||y==="array"||y==="function"?v.toString():""+v},as=(v,y)=>{switch(y){case 4:return function(L){return this.fromWireType(rt[L>>>2>>>0])};case 8:return function(L){return this.fromWireType(tt[L>>>3>>>0])};default:throw new TypeError(`invalid float width (${y}): ${v}`)}},Ma=function(v,y,L){v>>>=0,y>>>=0,L>>>=0,y=Lt(y),Ht(v,{name:y,fromWireType:V=>V,toWireType:(V,ot)=>ot,argPackAdvance:me,readValueFromPointer:as(y,L),destructorFunction:null})};function Jo(v,y,L,V,ot,yt,Ut){v>>>=0,L>>>=0,V>>>=0,ot>>>=0,yt>>>=0;var Mt=Qe(y,L);v=Lt(v),v=Mi(v),ot=Ue(V,ot),J(v,function(){Cn(`Cannot call ${v} due to unbound types`,Mt)},y-1),Yt([],Mt,It=>{var Pt=[It[0],null].concat(It.slice(1));return ye(v,Nn(v,Pt,null,ot,yt,Ut),y-1),[]})}var Gs=(v,y,L)=>{switch(y){case 1:return L?V=>I[V>>>0]:V=>j[V>>>0];case 2:return L?V=>C[V>>>1>>>0]:V=>U[V>>>1>>>0];case 4:return L?V=>X[V>>>2>>>0]:V=>$[V>>>2>>>0];default:throw new TypeError(`invalid integer width (${y}): ${v}`)}};function sc(v,y,L,V,ot){v>>>=0,y>>>=0,L>>>=0,y=Lt(y);var yt=Wt=>Wt;if(V===0){var Ut=32-8*L;yt=Wt=>Wt<<Ut>>>Ut}var Mt=y.includes("unsigned"),It=(Wt,Ee)=>{},Pt;Mt?Pt=function(Wt,Ee){return It(Ee,this.name),Ee>>>0}:Pt=function(Wt,Ee){return It(Ee,this.name),Ee},Ht(v,{name:y,fromWireType:yt,toWireType:Pt,argPackAdvance:me,readValueFromPointer:Gs(y,L,V!==0),destructorFunction:null})}function Vs(v,y,L){v>>>=0,L>>>=0;var V=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],ot=V[y];function yt(Ut){var Mt=$[Ut>>>2>>>0],It=$[Ut+4>>>2>>>0];return new ot(I.buffer,It,Mt)}L=Lt(L),Ht(v,{name:L,fromWireType:yt,argPackAdvance:me,readValueFromPointer:yt},{ignoreDuplicateRegistrations:!0})}function ks(v,y){v>>>=0,Qo(v)}var oc=(v,y,L,V)=>{if(L>>>=0,!(V>0))return 0;for(var ot=L,yt=L+V-1,Ut=0;Ut<v.length;++Ut){var Mt=v.charCodeAt(Ut);if(Mt>=55296&&Mt<=57343){var It=v.charCodeAt(++Ut);Mt=65536+((Mt&1023)<<10)|It&1023}if(Mt<=127){if(L>=yt)break;y[L++>>>0]=Mt}else if(Mt<=2047){if(L+1>=yt)break;y[L++>>>0]=192|Mt>>6,y[L++>>>0]=128|Mt&63}else if(Mt<=65535){if(L+2>=yt)break;y[L++>>>0]=224|Mt>>12,y[L++>>>0]=128|Mt>>6&63,y[L++>>>0]=128|Mt&63}else{if(L+3>=yt)break;y[L++>>>0]=240|Mt>>18,y[L++>>>0]=128|Mt>>12&63,y[L++>>>0]=128|Mt>>6&63,y[L++>>>0]=128|Mt&63}}return y[L>>>0]=0,L-ot},li=(v,y,L)=>oc(v,j,y,L),za=v=>{for(var y=0,L=0;L<v.length;++L){var V=v.charCodeAt(L);V<=127?y++:V<=2047?y+=2:V>=55296&&V<=57343?(y+=4,++L):y+=3}return y},rs=typeof TextDecoder<"u"?new TextDecoder:void 0,ss=(v,y,L)=>{y>>>=0;for(var V=y+L,ot=y;v[ot]&&!(ot>=V);)++ot;if(ot-y>16&&v.buffer&&rs)return rs.decode(v.subarray(y,ot));for(var yt="";y<ot;){var Ut=v[y++];if(!(Ut&128)){yt+=String.fromCharCode(Ut);continue}var Mt=v[y++]&63;if((Ut&224)==192){yt+=String.fromCharCode((Ut&31)<<6|Mt);continue}var It=v[y++]&63;if((Ut&240)==224?Ut=(Ut&15)<<12|Mt<<6|It:Ut=(Ut&7)<<18|Mt<<12|It<<6|v[y++]&63,Ut<65536)yt+=String.fromCharCode(Ut);else{var Pt=Ut-65536;yt+=String.fromCharCode(55296|Pt>>10,56320|Pt&1023)}}return yt},pf=(v,y)=>(v>>>=0,v?ss(j,v,y):"");function tl(v,y){v>>>=0,y>>>=0,y=Lt(y);var L=y==="std::string";Ht(v,{name:y,fromWireType(V){var ot=$[V>>>2>>>0],yt=V+4,Ut;if(L)for(var Mt=yt,It=0;It<=ot;++It){var Pt=yt+It;if(It==ot||j[Pt>>>0]==0){var Wt=Pt-Mt,Ee=pf(Mt,Wt);Ut===void 0?Ut=Ee:(Ut+="\0",Ut+=Ee),Mt=Pt+1}}else{for(var Ye=new Array(ot),It=0;It<ot;++It)Ye[It]=String.fromCharCode(j[yt+It>>>0]);Ut=Ye.join("")}return fa(V),Ut},toWireType(V,ot){ot instanceof ArrayBuffer&&(ot=new Uint8Array(ot));var yt,Ut=typeof ot=="string";Ut||ot instanceof Uint8Array||ot instanceof Uint8ClampedArray||ot instanceof Int8Array||St("Cannot pass non-string to std::string"),L&&Ut?yt=za(ot):yt=ot.length;var Mt=Ha(4+yt+1),It=Mt+4;if($[Mt>>>2>>>0]=yt,L&&Ut)li(ot,It,yt+1);else if(Ut)for(var Pt=0;Pt<yt;++Pt){var Wt=ot.charCodeAt(Pt);Wt>255&&(fa(It),St("String has UTF-16 code units that do not fit in 8 bits")),j[It+Pt>>>0]=Wt}else for(var Pt=0;Pt<yt;++Pt)j[It+Pt>>>0]=ot[Pt];return V!==null&&V.push(fa,Mt),Mt},argPackAdvance:me,readValueFromPointer:Vt,destructorFunction(V){fa(V)}})}var Xs=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,os=(v,y)=>{for(var L=v,V=L>>1,ot=V+y/2;!(V>=ot)&&U[V>>>0];)++V;if(L=V<<1,L-v>32&&Xs)return Xs.decode(j.subarray(v>>>0,L>>>0));for(var yt="",Ut=0;!(Ut>=y/2);++Ut){var Mt=C[v+Ut*2>>>1>>>0];if(Mt==0)break;yt+=String.fromCharCode(Mt)}return yt},Ws=(v,y,L)=>{if(L??=2147483647,L<2)return 0;L-=2;for(var V=y,ot=L<v.length*2?L/2:v.length,yt=0;yt<ot;++yt){var Ut=v.charCodeAt(yt);C[y>>>1>>>0]=Ut,y+=2}return C[y>>>1>>>0]=0,y-V},lc=v=>v.length*2,mf=(v,y)=>{for(var L=0,V="";!(L>=y/4);){var ot=X[v+L*4>>>2>>>0];if(ot==0)break;if(++L,ot>=65536){var yt=ot-65536;V+=String.fromCharCode(55296|yt>>10,56320|yt&1023)}else V+=String.fromCharCode(ot)}return V},gf=(v,y,L)=>{if(y>>>=0,L??=2147483647,L<4)return 0;for(var V=y,ot=V+L-4,yt=0;yt<v.length;++yt){var Ut=v.charCodeAt(yt);if(Ut>=55296&&Ut<=57343){var Mt=v.charCodeAt(++yt);Ut=65536+((Ut&1023)<<10)|Mt&1023}if(X[y>>>2>>>0]=Ut,y+=4,y+4>ot)break}return X[y>>>2>>>0]=0,y-V},_f=v=>{for(var y=0,L=0;L<v.length;++L){var V=v.charCodeAt(L);V>=55296&&V<=57343&&++L,y+=4}return y},el=function(v,y,L){v>>>=0,y>>>=0,L>>>=0,L=Lt(L);var V,ot,yt,Ut;y===2?(V=os,ot=Ws,Ut=lc,yt=Mt=>U[Mt>>>1>>>0]):y===4&&(V=mf,ot=gf,Ut=_f,yt=Mt=>$[Mt>>>2>>>0]),Ht(v,{name:L,fromWireType:Mt=>{for(var It=$[Mt>>>2>>>0],Pt,Wt=Mt+4,Ee=0;Ee<=It;++Ee){var Ye=Mt+4+Ee*y;if(Ee==It||yt(Ye)==0){var Rn=Ye-Wt,xn=V(Wt,Rn);Pt===void 0?Pt=xn:(Pt+="\0",Pt+=xn),Wt=Ye+y}}return fa(Mt),Pt},toWireType:(Mt,It)=>{typeof It!="string"&&St(`Cannot pass non-string to C++ string type ${L}`);var Pt=Ut(It),Wt=Ha(4+Pt+y);return $[Wt>>>2>>>0]=Pt/y,ot(It,Wt+4,Pt+y),Mt!==null&&Mt.push(fa,Wt),Wt},argPackAdvance:me,readValueFromPointer:Vt,destructorFunction(Mt){fa(Mt)}})};function vf(v,y,L,V,ot,yt){v>>>=0,y>>>=0,L>>>=0,V>>>=0,ot>>>=0,yt>>>=0,_t[v]={name:Lt(y),rawConstructor:Ue(L,V),rawDestructor:Ue(ot,yt),fields:[]}}function xf(v,y,L,V,ot,yt,Ut,Mt,It,Pt){v>>>=0,y>>>=0,L>>>=0,V>>>=0,ot>>>=0,yt>>>=0,Ut>>>=0,Mt>>>=0,It>>>=0,Pt>>>=0,_t[v].fields.push({fieldName:Lt(y),getterReturnType:L,getter:Ue(V,ot),getterContext:yt,setterArgumentType:Ut,setter:Ue(Mt,It),setterContext:Pt})}var yf=function(v,y){v>>>=0,y>>>=0,y=Lt(y),Ht(v,{isVoid:!0,name:y,argPackAdvance:0,fromWireType:()=>{},toWireType:(L,V)=>{}})};function Sf(v,y,L){return v>>>=0,y>>>=0,L>>>=0,j.copyWithin(v>>>0,y>>>0,y+L>>>0)}var cc=(v,y,L)=>{var V=[],ot=v.toWireType(V,L);return V.length&&($[y>>>2>>>0]=vn.toHandle(V)),ot};function uc(v,y,L){return v>>>=0,y>>>=0,L>>>=0,v=vn.toValue(v),y=Sa(y,"emval::as"),cc(y,L,v)}var Mf={},fc=v=>{var y=Mf[v];return y===void 0?Lt(v):y},nl=[];function bf(v,y,L,V,ot){return v>>>=0,y>>>=0,L>>>=0,V>>>=0,ot>>>=0,v=nl[v],y=vn.toValue(y),L=fc(L),v(y,y[L],V,ot)}function il(v,y){return v>>>=0,y>>>=0,v=vn.toValue(v),y=vn.toValue(y),v==y}var Ef=v=>{var y=nl.length;return nl.push(v),y},Tf=(v,y)=>{for(var L=new Array(v),V=0;V<v;++V)L[V]=Sa($[y+V*4>>>2>>>0],"parameter "+V);return L};function Af(v,y,L){y>>>=0;var V=Tf(v,y),ot=V.shift();v--;var yt=`return function (obj, func, destructorsRef, args) {
`,Ut=0,Mt=[];L===0&&Mt.push("obj");for(var It=["retType"],Pt=[ot],Wt=0;Wt<v;++Wt)Mt.push("arg"+Wt),It.push("argType"+Wt),Pt.push(V[Wt]),yt+=`  var arg${Wt} = argType${Wt}.readValueFromPointer(args${Ut?"+"+Ut:""});
`,Ut+=V[Wt].argPackAdvance;var Ee=L===1?"new func":"func.call";yt+=`  var rv = ${Ee}(${Mt.join(", ")});
`,ot.isVoid||(It.push("emval_returnValue"),Pt.push(cc),yt+=`  return emval_returnValue(retType, destructorsRef, rv);
`),yt+=`};
`,It.push(yt);var Ye=wn(Function,It)(...Pt),Rn=`methodCaller<(${V.map(xn=>xn.name).join(", ")}) => ${ot.name}>`;return Ef(pi(Rn,Ye))}function hc(v,y){return v>>>=0,y>>>=0,v=vn.toValue(v),y=vn.toValue(y),vn.toHandle(v[y])}function Rf(v){v>>>=0,v>9&&(bi[v+1]+=1)}function Cf(v){return v>>>=0,vn.toHandle(fc(v))}function wf(){return vn.toHandle({})}function Df(v){v>>>=0;var y=vn.toValue(v);se(y),Fi(v)}function Uf(v,y,L){v>>>=0,y>>>=0,L>>>=0,v=vn.toValue(v),y=vn.toValue(y),L=vn.toValue(L),v[y]=L}function Lf(v,y){v>>>=0,y>>>=0,v=Sa(v,"_emval_take_value");var L=v.readValueFromPointer(y);return vn.toHandle(L)}var Nf=()=>4294901760,Of=v=>{var y=z.buffer,L=(v-y.byteLength+65535)/65536;try{return z.grow(L),xt(),1}catch{}};function Pf(v){v>>>=0;var y=j.length,L=Nf();if(v>L)return!1;for(var V=(It,Pt)=>It+(Pt-It%Pt)%Pt,ot=1;ot<=4;ot*=2){var yt=y*(1+.2/ot);yt=Math.min(yt,v+100663296);var Ut=Math.min(L,V(Math.max(v,yt),65536)),Mt=Of(Ut);if(Mt)return!0}return!1}var js=(v,y)=>{v<128?y.push(v):y.push(v%128|128,v>>7)},ls=v=>{for(var y={i:"i32",j:"i64",f:"f32",d:"f64",e:"externref",p:"i32"},L={parameters:[],results:v[0]=="v"?[]:[y[v[0]]]},V=1;V<v.length;++V)L.parameters.push(y[v[V]]);return L},Ff=(v,y)=>{var L=v.slice(0,1),V=v.slice(1),ot={i:127,p:127,j:126,f:125,d:124,e:111};y.push(96),js(V.length,y);for(var yt=0;yt<V.length;++yt)y.push(ot[V[yt]]);L=="v"?y.push(0):y.push(1,ot[L])},dc=(v,y)=>{if(typeof WebAssembly.Function=="function")return new WebAssembly.Function(ls(y),v);var L=[1];Ff(y,L);var V=[0,97,115,109,1,0,0,0,1];js(L.length,V),V.push(...L),V.push(2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0);var ot=new WebAssembly.Module(new Uint8Array(V)),yt=new WebAssembly.Instance(ot,{e:{f:v}}),Ut=yt.exports.f;return Ut},pc=(v,y)=>{if(ba)for(var L=v;L<v+y;L++){var V=sn(L);V&&ba.set(V,L)}},ba,mc=v=>(ba||(ba=new WeakMap,pc(0,rn.length)),ba.get(v)||0),Ys=[],vr=()=>{if(Ys.length)return Ys.pop();try{rn.grow(1)}catch(v){throw v instanceof RangeError?"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.":v}return rn.length-1},al=(v,y)=>rn.set(v,y),cs=(v,y)=>{var L=mc(v);if(L)return L;var V=vr();try{al(V,v)}catch(yt){if(!(yt instanceof TypeError))throw yt;var ot=dc(v,y);al(V,ot)}return ba.set(v,V),V},us=v=>{ba.delete(sn(v)),al(v,null),Ys.push(v)};Bt=r.InternalError=class extends Error{constructor(y){super(y),this.name="InternalError"}},Q(),Zt=r.BindingError=class extends Error{constructor(y){super(y),this.name="BindingError"}},ya(),mr(),_e(),Bn=r.UnboundTypeError=Re(Error,"UnboundTypeError"),Ko();var gc={i:bt,D:Dt,n:jt,C:De,H:an,h:Si,g:gr,a:df,G:Qo,t:rc,e:ua,x:Ma,c:Jo,j:sc,f:Vs,k:ks,w:tl,s:el,o:vf,l:xf,I:yf,F:Sf,v:uc,z:bf,b:Fi,m:il,y:Af,B:hc,u:Rf,q:Cf,A:wf,p:Df,r:Uf,d:Lf,E:Pf},Ei=Me(),xr=v=>(xr=Ei.L)(v),Ha=v=>(Ha=Ei.N)(v),fa=v=>(fa=Ei.O)(v),fs=v=>(fs=Ei.P)(v);function _c(v){v=Object.assign({},v);var y=V=>ot=>V(ot)>>>0,L=V=>()=>V()>>>0;return v.L=y(v.L),v.N=y(v.N),v._emscripten_stack_alloc=y(v._emscripten_stack_alloc),v.emscripten_stack_get_current=L(v.emscripten_stack_get_current),v}r.addFunction=cs,r.removeFunction=us;var hs;lt=function v(){hs||qs(),hs||(lt=v)};function qs(){if(kt>0||(Ft(),kt>0))return;function v(){hs||(hs=!0,r.calledRun=!0,!P&&(Nt(),l(r),r.onRuntimeInitialized?.(),G()))}r.setStatus?(r.setStatus("Running..."),setTimeout(function(){setTimeout(function(){r.setStatus("")},1),v()},1)):v()}if(r.preInit)for(typeof r.preInit=="function"&&(r.preInit=[r.preInit]);r.preInit.length>0;)r.preInit.pop()();return qs(),i=h,i})})();let Fo=null;async function sx(){return Fo||(Fo=await E2(),typeof Fo.setup=="function"&&Fo.setup(),Fo)}function dp(s){return s instanceof Error?s.message:String(s)}function T2(s){const t=s.getAttribute("position");if(!t)throw new Error("Geometry has no position attribute");const i=new Float32Array(t.array.length);i.set(t.array);const r=s.getIndex();if(r)return{positions:i,indices:new Uint32Array(r.array)};const l=new Uint32Array(t.count);for(let c=0;c<t.count;c++)l[c]=c;return{positions:i,indices:l}}function A2(s){const t=s.reduce((m,p)=>m+p.positions.length,0),i=s.reduce((m,p)=>m+p.indices.length,0),r=new Float32Array(t),l=new Uint32Array(i);let c=0,h=0,d=0;for(const m of s){r.set(m.positions,c);for(let p=0;p<m.indices.length;p++)l[h+p]=m.indices[p]+d;c+=m.positions.length,h+=m.indices.length,d+=m.positions.length/3}return{positions:r,indices:l}}function R2(s){const t=new Tn;switch(s){case"-z":return t;case"+z":return t.makeRotationX(Math.PI);case"+x":return t.makeRotationY(-Math.PI/2);case"-x":return t.makeRotationY(Math.PI/2);case"+y":return t.makeRotationX(Math.PI/2);case"-y":return t.makeRotationX(-Math.PI/2);default:return t}}const ox=(s,t,i)=>Math.max(t,Math.min(i,s));function C2(){const s=Se.useRef(null),[t,i]=Se.useState(null),[r,l]=Se.useState(null),[c,h]=Se.useState(null),[d,m]=Se.useState(null),[p,g]=Se.useState(""),[_,S]=Se.useState(0),[b,T]=Se.useState(1),[R,E]=Se.useState(1),[x,F]=Se.useState(of),[N,O]=Se.useState(0),[z,P]=Se.useState(0),[I,j]=Se.useState(!0),[C,U]=Se.useState(!1),[X,$]=Se.useState("inside"),[rt,tt]=Se.useState("-z"),[xt,H]=Se.useState("outside"),[Y,st]=Se.useState(!1),[Ft,Nt]=Se.useState(!1),[G,ct]=Se.useState(null),[At,Gt]=Se.useState(null),kt=Se.useRef(null);Se.useEffect(()=>{sx().then(()=>Nt(!0)).catch(Jt=>{console.error("Failed to init Manifold:",Jt),ct("Failed to initialize 3D engine. Please refresh the page.")})},[]),Se.useEffect(()=>{const Jt="kofi-overlay-widget-script",pe="kofi-sidebar-widget",k=()=>{if(window.__kofiOverlayInit)return;const xe=window.kofiWidgetOverlay;!xe||typeof xe.draw!="function"||document.getElementById(pe)&&(xe.draw("lightscout",{type:"floating-chat","floating-chat.donateButton.text":"Support me","floating-chat.donateButton.background-color":"#00b9fe","floating-chat.donateButton.text-color":"#fff"},pe),window.__kofiOverlayInit=!0)},ge=document.getElementById(Jt);if(ge){window.kofiWidgetOverlay?k():ge.addEventListener("load",k,{once:!0});return}const Me=document.createElement("script");return Me.id=Jt,Me.src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js",Me.async=!0,Me.onload=k,document.body.appendChild(Me),()=>{Me.onload=null}},[]);const lt=Se.useCallback((Jt,pe)=>{const k=Jt.clone(),ge=R2(pe);k.applyMatrix4(ge),k.computeBoundingBox();const Me=ax(k);k.translate(-Me.centerX,-Me.centerY,-Me.minZ),k.computeBoundingBox();const xe=ax(k);return{geometry:k,dims:{width:xe.width,depth:xe.depth,height:xe.height,minX:xe.minX,maxX:xe.maxX,minY:xe.minY,maxY:xe.maxY,minZ:xe.minZ,maxZ:xe.maxZ,centerX:xe.centerX,centerY:xe.centerY}}},[]),vt=Se.useCallback((Jt,pe,k)=>{if(pe==="custom")return;const ge=nx(Jt.width,Jt.depth,pe,k);T(ge.gridX),E(ge.gridY)},[]),Xt=Se.useCallback((Jt,pe)=>{ct(null);try{s.current&&s.current.dispose();const k=v2(Jt);s.current=k;const ge=k.getAttribute("position"),Me=k.index,xe=Me?Me.count/3:ge.count/3;S(Math.round(xe));const{geometry:Qt,dims:B}=lt(k,rt);i(K=>(K?.dispose(),Qt)),m(B),g(pe);const A=nx(B.width,B.depth,X,x);T(A.gridX),E(A.gridY),H("outside"),l(K=>(K?.dispose(),null)),h(K=>(K?.dispose(),null)),kt.current=null,O(0),P(0)}catch(k){console.error("Failed to parse STL:",k),ct(`Failed to parse STL file: ${dp(k)}`)}},[lt,rt,X,x]),ie=Se.useCallback(()=>{s.current&&(s.current.dispose(),s.current=null),t?.dispose(),r?.dispose(),c?.dispose(),i(null),l(null),h(null),m(null),g(""),S(0),kt.current=null,O(0),P(0),tt("-z"),H("outside"),ct(null)},[t,r,c]),re=Se.useCallback(Jt=>{if(!s.current)return;tt(Jt);const{geometry:pe,dims:k}=lt(s.current,Jt);i(ge=>(ge?.dispose(),pe)),m(k),vt(k,X,x),l(ge=>(ge?.dispose(),null)),h(ge=>(ge?.dispose(),null)),kt.current=null,O(0),P(0)},[lt,X,vt,x]),Ne=Se.useCallback(Jt=>{$(Jt),d&&vt(d,Jt,x),l(pe=>(pe?.dispose(),null)),h(pe=>(pe?.dispose(),null)),kt.current=null},[d,vt,x]),ln=Se.useCallback(Jt=>{F(Jt);const pe=Jt/2;O(k=>ox(k,-pe,pe)),P(k=>ox(k,-pe,pe)),d&&vt(d,X,Jt),l(k=>(k?.dispose(),null)),h(k=>(k?.dispose(),null)),kt.current=null},[d,X,vt]),Ie=Se.useCallback(Jt=>{H(Jt),l(pe=>(pe?.dispose(),null)),h(pe=>(pe?.dispose(),null)),kt.current=null},[]),Ce=Se.useCallback(async()=>{if(!t||!Ft)return;st(!0),ct(null),h(ge=>(ge?.dispose(),null)),l(ge=>(ge?.dispose(),null)),kt.current=null;let Jt=null,pe=null,k=null;try{const ge=await sx();Jt=await h2(ge,{gridX:b,gridY:R,gridUnit:x,offsetX:N,offsetY:z,magnets:I,screws:C});const xe=Jt.getMesh(),Qt=ix(xe),B=new ti;B.setAttribute("position",new qn(Qt.positions,3)),B.setIndex(new qn(Qt.indices,1)),B.computeVertexNormals(),xt==="outside"&&B.translate(0,0,-cm),l(B);const A=t.clone();xt==="outside"&&A.translate(0,0,cm);const K=d2(A,ge);try{pe=new ge.Manifold(K)}catch(ae){console.warn("Model is not manifold, trying to fix...",dp(ae));const de=T2(A),Ot=A2([de,Qt]),Bt=new ti;Bt.setAttribute("position",new qn(Ot.positions,3)),Bt.setIndex(new qn(Ot.indices,1)),Bt.computeVertexNormals(),h(Bt),kt.current=Ot,ct("Boolean union failed on this STL, so compatibility mode was used (model + base exported together as overlapping solids). Most slicers merge these automatically."),Gt({message:"⚠️ Used compatibility mode for this STL",type:"info"});return}finally{A.dispose()}const bt=pe.volume();k=pe.add(Jt);const Dt=k.volume();xt==="inside"&&Math.abs(Dt-bt)<1&&(ct("Inside mode added almost no new volume. This model is likely mostly solid at that face. Try Turn Into Box, or rotate Bottom Face to an interior-facing side."),Gt({message:"⚠️ Inside mode had minimal effect on this STL",type:"info"}));const _t=k.getMesh(),se=ix(_t),Vt=new ti;Vt.setAttribute("position",new qn(se.positions,3)),Vt.setIndex(new qn(se.indices,1)),Vt.computeVertexNormals(),h(Vt),kt.current=se,Gt({message:"✅ Base generated! Preview below.",type:"success"})}catch(ge){console.error("Generation failed:",ge),ct(`Generation failed: ${dp(ge)}`),Gt({message:"❌ Generation failed. Check error details.",type:"error"})}finally{k?.delete(),pe?.delete(),Jt?.delete(),st(!1)}},[t,Ft,b,R,x,N,z,I,C,xt]),ke=Se.useCallback(()=>{if(!kt.current)return;const{positions:Jt,indices:pe}=kt.current,k=x2(Jt,pe),ge=p.replace(/\.stl$/i,"");y2(k,`${ge}_gridfinity_${b}x${R}_${x}mm.stl`)},[p,b,R,x]);return nt.jsxs("div",{className:"min-h-screen flex flex-col bg-gray-950",children:[At&&nt.jsx(g2,{message:At.message,type:At.type,onDismiss:()=>Gt(null)}),nt.jsx("header",{className:"border-b border-gray-800 px-4 sm:px-6 py-3",children:nt.jsxs("div",{className:"flex items-center gap-3",children:[nt.jsx("div",{className:"text-xl",children:"🔲"}),nt.jsxs("div",{children:[nt.jsx("h1",{className:"text-lg font-bold text-gray-100",children:"Gridfinity Base Adder"}),nt.jsx("p",{className:"text-xs text-gray-500 hidden sm:block",children:"Add Gridfinity-compatible bases to any STL model"})]}),nt.jsxs("span",{className:"ml-auto text-[10px] font-mono text-gray-500 border border-gray-700 rounded px-2 py-0.5",children:["v","18"]}),!Ft&&nt.jsx("span",{className:"text-xs text-yellow-500 animate-pulse",children:"Loading engine…"})]})}),nt.jsxs("div",{className:"flex-1 flex flex-col lg:flex-row overflow-hidden",children:[nt.jsx("div",{className:"order-2 lg:order-1 flex-1 flex flex-col min-h-0",children:nt.jsx("div",{className:"flex-1 p-3 min-h-0",children:nt.jsx("div",{className:"h-full rounded-xl border border-gray-800 overflow-hidden",children:nt.jsx(c2,{originalGeometry:t,baseGeometry:r,combinedGeometry:c,gridX:b,gridY:R,gridUnit:x,offsetX:N,offsetY:z,placement:xt})})})}),nt.jsx("div",{className:"order-1 lg:order-2 w-full lg:w-80 xl:w-96 border-b lg:border-b-0 lg:border-l border-gray-800 overflow-y-auto",children:nt.jsxs("div",{className:"p-3 lg:p-4 space-y-3",children:[nt.jsx("div",{children:p?nt.jsx(YA,{filename:p,triangleCount:_,dimensions:d,onRemove:ie}):nt.jsx(jA,{onFileLoaded:Xt,disabled:!Ft||Y})}),Y&&nt.jsxs("div",{className:"bg-blue-950/30 border border-blue-700/30 rounded-xl p-3 flex items-center gap-3",children:[nt.jsx("div",{className:"relative w-8 h-8 shrink-0",children:nt.jsxs("svg",{className:"animate-spin w-8 h-8 text-blue-500",fill:"none",viewBox:"0 0 24 24",children:[nt.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"3"}),nt.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}),nt.jsxs("div",{children:[nt.jsx("div",{className:"text-sm font-medium text-blue-300",children:"Generating base…"}),nt.jsx("div",{className:"text-xs text-blue-400/60",children:"Boolean union in progress"})]})]}),G&&nt.jsx("div",{className:"p-3 rounded-xl bg-red-950/50 border border-red-800 text-xs text-red-300",children:G}),nt.jsx(m2,{gridX:b,gridY:R,offsetX:N,offsetY:z,gridUnit:x,magnets:I,screws:C,fitMode:X,orientation:rt,placement:xt,modelDims:d,hasModel:!!t,hasBase:!!r,hasCombined:!!c,isProcessing:Y,filename:p,onGridXChange:T,onGridYChange:E,onOffsetXChange:O,onOffsetYChange:P,onGridUnitChange:ln,onMagnetsChange:j,onScrewsChange:U,onFitModeChange:Ne,onOrientationChange:re,onPlacementChange:Ie,onGenerate:Ce,onDownload:ke}),nt.jsx("div",{id:"kofi-sidebar-widget",className:"kofi-sidebar-widget"})]})})]})]})}yS.createRoot(document.getElementById("root")).render(nt.jsx(Se.StrictMode,{children:nt.jsx(C2,{})}));
