(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var bd={exports:{}},Il={};var D_;function eS(){if(D_)return Il;D_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return Il.Fragment=t,Il.jsx=i,Il.jsxs=i,Il}var U_;function nS(){return U_||(U_=1,bd.exports=eS()),bd.exports}var Wt=nS(),Ed={exports:{}},Ae={};var L_;function iS(){if(L_)return Ae;L_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function b(G){return G===null||typeof G!="object"?null:(G=x&&G[x]||G["@@iterator"],typeof G=="function"?G:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,E={};function y(G,ft,At){this.props=G,this.context=ft,this.refs=E,this.updater=At||A}y.prototype.isReactComponent={},y.prototype.setState=function(G,ft){if(typeof G!="object"&&typeof G!="function"&&G!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,G,ft,"setState")},y.prototype.forceUpdate=function(G){this.updater.enqueueForceUpdate(this,G,"forceUpdate")};function F(){}F.prototype=y.prototype;function N(G,ft,At){this.props=G,this.context=ft,this.refs=E,this.updater=At||A}var P=N.prototype=new F;P.constructor=N,R(P,y.prototype),P.isPureReactComponent=!0;var H=Array.isArray;function O(){}var B={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function C(G,ft,At){var Vt=At.ref;return{$$typeof:o,type:G,key:ft,ref:Vt!==void 0?Vt:null,props:At}}function L(G,ft){return C(G.type,ft,G.props)}function k(G){return typeof G=="object"&&G!==null&&G.$$typeof===o}function J(G){var ft={"=":"=0",":":"=2"};return"$"+G.replace(/[=:]/g,function(At){return ft[At]})}var rt=/\/+/g;function pt(G,ft){return typeof G=="object"&&G!==null&&G.key!=null?J(""+G.key):ft.toString(36)}function yt(G){switch(G.status){case"fulfilled":return G.value;case"rejected":throw G.reason;default:switch(typeof G.status=="string"?G.then(O,O):(G.status="pending",G.then(function(ft){G.status==="pending"&&(G.status="fulfilled",G.value=ft)},function(ft){G.status==="pending"&&(G.status="rejected",G.reason=ft)})),G.status){case"fulfilled":return G.value;case"rejected":throw G.reason}}throw G}function z(G,ft,At,Vt,It){var nt=typeof G;(nt==="undefined"||nt==="boolean")&&(G=null);var lt=!1;if(G===null)lt=!0;else switch(nt){case"bigint":case"string":case"number":lt=!0;break;case"object":switch(G.$$typeof){case o:case t:lt=!0;break;case _:return lt=G._init,z(lt(G._payload),ft,At,Vt,It)}}if(lt)return It=It(G),lt=Vt===""?"."+pt(G,0):Vt,H(It)?(At="",lt!=null&&(At=lt.replace(rt,"$&/")+"/"),z(It,ft,At,"",function(kt){return kt})):It!=null&&(k(It)&&(It=L(It,At+(It.key==null||G&&G.key===It.key?"":(""+It.key).replace(rt,"$&/")+"/")+lt)),ft.push(It)),1;lt=0;var Gt=Vt===""?".":Vt+":";if(H(G))for(var jt=0;jt<G.length;jt++)Vt=G[jt],nt=Gt+pt(Vt,jt),lt+=z(Vt,ft,At,nt,It);else if(jt=b(G),typeof jt=="function")for(G=jt.call(G),jt=0;!(Vt=G.next()).done;)Vt=Vt.value,nt=Gt+pt(Vt,jt++),lt+=z(Vt,ft,At,nt,It);else if(nt==="object"){if(typeof G.then=="function")return z(yt(G),ft,At,Vt,It);throw ft=String(G),Error("Objects are not valid as a React child (found: "+(ft==="[object Object]"?"object with keys {"+Object.keys(G).join(", ")+"}":ft)+"). If you meant to render a collection of children, use an array instead.")}return lt}function W(G,ft,At){if(G==null)return G;var Vt=[],It=0;return z(G,Vt,"","",function(nt){return ft.call(At,nt,It++)}),Vt}function at(G){if(G._status===-1){var ft=G._result;ft=ft(),ft.then(function(At){(G._status===0||G._status===-1)&&(G._status=1,G._result=At)},function(At){(G._status===0||G._status===-1)&&(G._status=2,G._result=At)}),G._status===-1&&(G._status=0,G._result=ft)}if(G._status===1)return G._result.default;throw G._result}var Ot=typeof reportError=="function"?reportError:function(G){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ft=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof G=="object"&&G!==null&&typeof G.message=="string"?String(G.message):String(G),error:G});if(!window.dispatchEvent(ft))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",G);return}console.error(G)},Lt={map:W,forEach:function(G,ft,At){W(G,function(){ft.apply(this,arguments)},At)},count:function(G){var ft=0;return W(G,function(){ft++}),ft},toArray:function(G){return W(G,function(ft){return ft})||[]},only:function(G){if(!k(G))throw Error("React.Children.only expected to receive a single React element child.");return G}};return Ae.Activity=g,Ae.Children=Lt,Ae.Component=y,Ae.Fragment=i,Ae.Profiler=l,Ae.PureComponent=N,Ae.StrictMode=r,Ae.Suspense=m,Ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,Ae.__COMPILER_RUNTIME={__proto__:null,c:function(G){return B.H.useMemoCache(G)}},Ae.cache=function(G){return function(){return G.apply(null,arguments)}},Ae.cacheSignal=function(){return null},Ae.cloneElement=function(G,ft,At){if(G==null)throw Error("The argument must be a React element, but you passed "+G+".");var Vt=R({},G.props),It=G.key;if(ft!=null)for(nt in ft.key!==void 0&&(It=""+ft.key),ft)!j.call(ft,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&ft.ref===void 0||(Vt[nt]=ft[nt]);var nt=arguments.length-2;if(nt===1)Vt.children=At;else if(1<nt){for(var lt=Array(nt),Gt=0;Gt<nt;Gt++)lt[Gt]=arguments[Gt+2];Vt.children=lt}return C(G.type,It,Vt)},Ae.createContext=function(G){return G={$$typeof:h,_currentValue:G,_currentValue2:G,_threadCount:0,Provider:null,Consumer:null},G.Provider=G,G.Consumer={$$typeof:c,_context:G},G},Ae.createElement=function(G,ft,At){var Vt,It={},nt=null;if(ft!=null)for(Vt in ft.key!==void 0&&(nt=""+ft.key),ft)j.call(ft,Vt)&&Vt!=="key"&&Vt!=="__self"&&Vt!=="__source"&&(It[Vt]=ft[Vt]);var lt=arguments.length-2;if(lt===1)It.children=At;else if(1<lt){for(var Gt=Array(lt),jt=0;jt<lt;jt++)Gt[jt]=arguments[jt+2];It.children=Gt}if(G&&G.defaultProps)for(Vt in lt=G.defaultProps,lt)It[Vt]===void 0&&(It[Vt]=lt[Vt]);return C(G,nt,It)},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(G){return{$$typeof:d,render:G}},Ae.isValidElement=k,Ae.lazy=function(G){return{$$typeof:_,_payload:{_status:-1,_result:G},_init:at}},Ae.memo=function(G,ft){return{$$typeof:p,type:G,compare:ft===void 0?null:ft}},Ae.startTransition=function(G){var ft=B.T,At={};B.T=At;try{var Vt=G(),It=B.S;It!==null&&It(At,Vt),typeof Vt=="object"&&Vt!==null&&typeof Vt.then=="function"&&Vt.then(O,Ot)}catch(nt){Ot(nt)}finally{ft!==null&&At.types!==null&&(ft.types=At.types),B.T=ft}},Ae.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},Ae.use=function(G){return B.H.use(G)},Ae.useActionState=function(G,ft,At){return B.H.useActionState(G,ft,At)},Ae.useCallback=function(G,ft){return B.H.useCallback(G,ft)},Ae.useContext=function(G){return B.H.useContext(G)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(G,ft){return B.H.useDeferredValue(G,ft)},Ae.useEffect=function(G,ft){return B.H.useEffect(G,ft)},Ae.useEffectEvent=function(G){return B.H.useEffectEvent(G)},Ae.useId=function(){return B.H.useId()},Ae.useImperativeHandle=function(G,ft,At){return B.H.useImperativeHandle(G,ft,At)},Ae.useInsertionEffect=function(G,ft){return B.H.useInsertionEffect(G,ft)},Ae.useLayoutEffect=function(G,ft){return B.H.useLayoutEffect(G,ft)},Ae.useMemo=function(G,ft){return B.H.useMemo(G,ft)},Ae.useOptimistic=function(G,ft){return B.H.useOptimistic(G,ft)},Ae.useReducer=function(G,ft,At){return B.H.useReducer(G,ft,At)},Ae.useRef=function(G){return B.H.useRef(G)},Ae.useState=function(G){return B.H.useState(G)},Ae.useSyncExternalStore=function(G,ft,At){return B.H.useSyncExternalStore(G,ft,At)},Ae.useTransition=function(){return B.H.useTransition()},Ae.version="19.2.4",Ae}var N_;function om(){return N_||(N_=1,Ed.exports=iS()),Ed.exports}var Le=om(),Td={exports:{}},Bl={},Ad={exports:{}},Rd={};var O_;function aS(){return O_||(O_=1,(function(o){function t(z,W){var at=z.length;z.push(W);t:for(;0<at;){var Ot=at-1>>>1,Lt=z[Ot];if(0<l(Lt,W))z[Ot]=W,z[at]=Lt,at=Ot;else break t}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var W=z[0],at=z.pop();if(at!==W){z[0]=at;t:for(var Ot=0,Lt=z.length,G=Lt>>>1;Ot<G;){var ft=2*(Ot+1)-1,At=z[ft],Vt=ft+1,It=z[Vt];if(0>l(At,at))Vt<Lt&&0>l(It,At)?(z[Ot]=It,z[Vt]=at,Ot=Vt):(z[Ot]=At,z[ft]=at,Ot=ft);else if(Vt<Lt&&0>l(It,at))z[Ot]=It,z[Vt]=at,Ot=Vt;else break t}}return W}function l(z,W){var at=z.sortIndex-W.sortIndex;return at!==0?at:z.id-W.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,g=null,x=3,b=!1,A=!1,R=!1,E=!1,y=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function P(z){for(var W=i(p);W!==null;){if(W.callback===null)r(p);else if(W.startTime<=z)r(p),W.sortIndex=W.expirationTime,t(m,W);else break;W=i(p)}}function H(z){if(R=!1,P(z),!A)if(i(m)!==null)A=!0,O||(O=!0,J());else{var W=i(p);W!==null&&yt(H,W.startTime-z)}}var O=!1,B=-1,j=5,C=-1;function L(){return E?!0:!(o.unstable_now()-C<j)}function k(){if(E=!1,O){var z=o.unstable_now();C=z;var W=!0;try{t:{A=!1,R&&(R=!1,F(B),B=-1),b=!0;var at=x;try{e:{for(P(z),g=i(m);g!==null&&!(g.expirationTime>z&&L());){var Ot=g.callback;if(typeof Ot=="function"){g.callback=null,x=g.priorityLevel;var Lt=Ot(g.expirationTime<=z);if(z=o.unstable_now(),typeof Lt=="function"){g.callback=Lt,P(z),W=!0;break e}g===i(m)&&r(m),P(z)}else r(m);g=i(m)}if(g!==null)W=!0;else{var G=i(p);G!==null&&yt(H,G.startTime-z),W=!1}}break t}finally{g=null,x=at,b=!1}W=void 0}}finally{W?J():O=!1}}}var J;if(typeof N=="function")J=function(){N(k)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,pt=rt.port2;rt.port1.onmessage=k,J=function(){pt.postMessage(null)}}else J=function(){y(k,0)};function yt(z,W){B=y(function(){z(o.unstable_now())},W)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(z){switch(x){case 1:case 2:case 3:var W=3;break;default:W=x}var at=x;x=W;try{return z()}finally{x=at}},o.unstable_requestPaint=function(){E=!0},o.unstable_runWithPriority=function(z,W){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var at=x;x=z;try{return W()}finally{x=at}},o.unstable_scheduleCallback=function(z,W,at){var Ot=o.unstable_now();switch(typeof at=="object"&&at!==null?(at=at.delay,at=typeof at=="number"&&0<at?Ot+at:Ot):at=Ot,z){case 1:var Lt=-1;break;case 2:Lt=250;break;case 5:Lt=1073741823;break;case 4:Lt=1e4;break;default:Lt=5e3}return Lt=at+Lt,z={id:_++,callback:W,priorityLevel:z,startTime:at,expirationTime:Lt,sortIndex:-1},at>Ot?(z.sortIndex=at,t(p,z),i(m)===null&&z===i(p)&&(R?(F(B),B=-1):R=!0,yt(H,at-Ot))):(z.sortIndex=Lt,t(m,z),A||b||(A=!0,O||(O=!0,J()))),z},o.unstable_shouldYield=L,o.unstable_wrapCallback=function(z){var W=x;return function(){var at=x;x=W;try{return z.apply(this,arguments)}finally{x=at}}}})(Rd)),Rd}var P_;function rS(){return P_||(P_=1,Ad.exports=aS()),Ad.exports}var Cd={exports:{}},ui={};var F_;function sS(){if(F_)return ui;F_=1;var o=om();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return ui.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,ui.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},ui.flushSync=function(m){var p=h.T,_=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=_,r.d.f()}},ui.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},ui.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},ui.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,b=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:b}):_==="script"&&r.d.X(m,{crossOrigin:g,integrity:x,fetchPriority:b,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},ui.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},ui.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},ui.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},ui.requestFormReset=function(m){r.d.r(m)},ui.unstable_batchedUpdates=function(m,p){return m(p)},ui.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},ui.useFormStatus=function(){return h.H.useHostTransitionStatus()},ui.version="19.2.4",ui}var I_;function oS(){if(I_)return Cd.exports;I_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Cd.exports=sS(),Cd.exports}var B_;function lS(){if(B_)return Bl;B_=1;var o=rS(),t=om(),i=oS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===s)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var M=!1,D=u.child;D;){if(D===a){M=!0,a=u,s=f;break}if(D===s){M=!0,s=u,a=f;break}D=D.sibling}if(!M){for(D=f.child;D;){if(D===a){M=!0,a=f,s=u;break}if(D===s){M=!0,s=f,a=u;break}D=D.sibling}if(!M)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),N=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),L=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Symbol.for("react.client.reference");function pt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===rt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case y:return"Profiler";case E:return"StrictMode";case H:return"Suspense";case O:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case N:return e.displayName||"Context";case F:return(e._context.displayName||"Context")+".Consumer";case P:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:pt(e.type)||"Memo";case j:n=e._payload,e=e._init;try{return pt(e(n))}catch{}}return null}var yt=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,at={pending:!1,data:null,method:null,action:null},Ot=[],Lt=-1;function G(e){return{current:e}}function ft(e){0>Lt||(e.current=Ot[Lt],Ot[Lt]=null,Lt--)}function At(e,n){Lt++,Ot[Lt]=e.current,e.current=n}var Vt=G(null),It=G(null),nt=G(null),lt=G(null);function Gt(e,n){switch(At(nt,n),At(It,e),At(Vt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?$g(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=$g(n),e=t_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ft(Vt),At(Vt,e)}function jt(){ft(Vt),ft(It),ft(nt)}function kt(e){e.memoizedState!==null&&At(lt,e);var n=Vt.current,a=t_(n,e.type);n!==a&&(At(It,e),At(Vt,a))}function Te(e){It.current===e&&(ft(Vt),ft(It)),lt.current===e&&(ft(lt),Nl._currentValue=at)}var nn,De;function Ee(e){if(nn===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);nn=n&&n[1]||"",De=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+nn+e+De}var Be=!1;function ve(e,n){if(!e||Be)return"";Be=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Ct=function(){throw Error()};if(Object.defineProperty(Ct.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ct,[])}catch(gt){var dt=gt}Reflect.construct(e,[],Ct)}else{try{Ct.call()}catch(gt){dt=gt}e.call(Ct.prototype)}}else{try{throw Error()}catch(gt){dt=gt}(Ct=e())&&typeof Ct.catch=="function"&&Ct.catch(function(){})}}catch(gt){if(gt&&dt&&typeof gt.stack=="string")return[gt.stack,dt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),M=f[0],D=f[1];if(M&&D){var X=M.split(`
`),ut=D.split(`
`);for(u=s=0;s<X.length&&!X[s].includes("DetermineComponentFrameRoot");)s++;for(;u<ut.length&&!ut[u].includes("DetermineComponentFrameRoot");)u++;if(s===X.length||u===ut.length)for(s=X.length-1,u=ut.length-1;1<=s&&0<=u&&X[s]!==ut[u];)u--;for(;1<=s&&0<=u;s--,u--)if(X[s]!==ut[u]){if(s!==1||u!==1)do if(s--,u--,0>u||X[s]!==ut[u]){var Mt=`
`+X[s].replace(" at new "," at ");return e.displayName&&Mt.includes("<anonymous>")&&(Mt=Mt.replace("<anonymous>",e.displayName)),Mt}while(1<=s&&0<=u);break}}}finally{Be=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ee(a):""}function ln(e,n){switch(e.tag){case 26:case 27:case 5:return Ee(e.type);case 16:return Ee("Lazy");case 13:return e.child!==n&&n!==null?Ee("Suspense Fallback"):Ee("Suspense");case 19:return Ee("SuspenseList");case 0:case 15:return ve(e.type,!1);case 11:return ve(e.type.render,!1);case 1:return ve(e.type,!0);case 31:return Ee("Activity");default:return""}}function Y(e){try{var n="",a=null;do n+=ln(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var vn=Object.prototype.hasOwnProperty,Ge=o.unstable_scheduleCallback,je=o.unstable_cancelCallback,ne=o.unstable_shouldYield,I=o.unstable_requestPaint,T=o.unstable_now,Q=o.unstable_getCurrentPriorityLevel,bt=o.unstable_ImmediatePriority,wt=o.unstable_UserBlockingPriority,_t=o.unstable_NormalPriority,le=o.unstable_LowPriority,Xt=o.unstable_IdlePriority,ae=o.log,he=o.unstable_setDisableYieldValue,Pt=null,Ht=null;function te(e){if(typeof ae=="function"&&he(e),Ht&&typeof Ht.setStrictMode=="function")try{Ht.setStrictMode(Pt,e)}catch{}}var Zt=Math.clz32?Math.clz32:K,qt=Math.log,Re=Math.LN2;function K(e){return e>>>=0,e===0?32:31-(qt(e)/Re|0)|0}var Kt=256,Ut=262144,Qt=4194304;function xt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Rt(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var u=0,f=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var D=s&134217727;return D!==0?(s=D&~f,s!==0?u=xt(s):(M&=D,M!==0?u=xt(M):a||(a=D&~e,a!==0&&(u=xt(a))))):(D=s&~f,D!==0?u=xt(D):M!==0?u=xt(M):a||(a=s&~e,a!==0&&(u=xt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function zt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function de(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function an(){var e=Qt;return Qt<<=1,(Qt&62914560)===0&&(Qt=4194304),e}function Xe(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Bn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function pi(e,n,a,s,u,f){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var D=e.entanglements,X=e.expirationTimes,ut=e.hiddenUpdates;for(a=M&~a;0<a;){var Mt=31-Zt(a),Ct=1<<Mt;D[Mt]=0,X[Mt]=-1;var dt=ut[Mt];if(dt!==null)for(ut[Mt]=null,Mt=0;Mt<dt.length;Mt++){var gt=dt[Mt];gt!==null&&(gt.lane&=-536870913)}a&=~Ct}s!==0&&$r(e,s,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(M&~n))}function $r(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Zt(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function ts(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Zt(a),u=1<<s;u&n|e[s]&n&&(e[s]|=n),a&=~u}}function Ba(e,n){var a=n&-n;return a=(a&42)!==0?1:mr(a),(a&(e.suspendedLanes|n))!==0?0:a}function mr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function za(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function es(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:b_(e.type))}function Ki(e,n){var a=W.p;try{return W.p=e,n()}finally{W.p=a}}var Qn=Math.random().toString(36).slice(2),bn="__reactFiber$"+Qn,Rn="__reactProps$"+Qn,Fi="__reactContainer$"+Qn,gr="__reactEvents$"+Qn,Qi="__reactListeners$"+Qn,Gs="__reactHandles$"+Qn,ns="__reactResources$"+Qn,Ji="__reactMarker$"+Qn;function is(e){delete e[bn],delete e[Rn],delete e[gr],delete e[Qi],delete e[Gs]}function Si(e){var n=e[bn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Fi]||a[bn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=o_(e);e!==null;){if(a=e[bn])return a;e=o_(e)}return n}e=a,a=e.parentNode}return null}function Sa(e){if(e=e[bn]||e[Fi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function $i(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function mi(e){var n=e[ns];return n||(n=e[ns]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function w(e){e[Ji]=!0}var $=new Set,mt={};function ht(e,n){it(e,n),it(e+"Capture",n)}function it(e,n){for(mt[e]=n,e=0;e<n.length;e++)$.add(n[e])}var Jt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ie={},$t={};function re(e){return vn.call($t,e)?!0:vn.call(ie,e)?!1:Jt.test(e)?$t[e]=!0:(ie[e]=!0,!1)}function ce(e,n,a){if(re(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function pe(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function se(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}function ge(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ze(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function rn(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){a=""+M,f.call(this,M)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(M){a=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function sn(e){if(!e._valueTracker){var n=Ze(e)?"checked":"value";e._valueTracker=rn(e,n,""+e[n])}}function Je(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=Ze(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function fe(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ce=/[\n"\\]/g;function Me(e){return e.replace(Ce,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function zn(e,n,a,s,u,f,M,D){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ge(n)):e.value!==""+ge(n)&&(e.value=""+ge(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?wn(e,M,ge(n)):a!=null?wn(e,M,ge(a)):s!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?e.name=""+ge(D):e.removeAttribute("name")}function ta(e,n,a,s,u,f,M,D){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){sn(e);return}a=a!=null?""+ge(a):"",n=n!=null?""+ge(n):a,D||n===e.value||(e.value=n),e.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=D?e.checked:!!s,e.defaultChecked=!!s,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M),sn(e)}function wn(e,n,a){n==="number"&&fe(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Mi(e,n,a,s){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&s&&(e[a].defaultSelected=!0)}else{for(a=""+ge(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,s&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Ke(e,n,a){if(n!=null&&(n=""+ge(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ge(a):""}function Hn(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(yt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ge(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),sn(e)}function Dn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Yn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function On(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||Yn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function _r(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&On(e,u,s)}else for(var f in n)n.hasOwnProperty(f)&&On(e,f,n[f])}function bi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ff=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jo=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ei(e){return jo.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ii(){}var Zo=null;function Ko(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xn=null,vr=null;function Qo(e){var n=Sa(e);if(n&&(e=n.stateNode)){var a=e[Rn]||null;t:switch(e=n.stateNode,n.type){case"input":if(zn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Me(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var u=s[Rn]||null;if(!u)throw Error(r(90));zn(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Je(s)}break t;case"textarea":Ke(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Mi(e,!!a.multiple,n,!1)}}}var Jo=!1;function sc(e,n,a){if(Jo)return e(n,a);Jo=!0;try{var s=e(n);return s}finally{if(Jo=!1,(xn!==null||vr!==null)&&($c(),xn&&(n=xn,e=vr,vr=xn=null,Qo(n),e)))for(n=0;n<e.length;n++)Qo(e[n])}}function Ma(e,n){var a=e.stateNode;if(a===null)return null;var s=a[Rn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var fa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),as=!1;if(fa)try{var rs={};Object.defineProperty(rs,"passive",{get:function(){as=!0}}),window.addEventListener("test",rs,rs),window.removeEventListener("test",rs,rs)}catch{as=!1}var ba=null,$o=null,Vs=null;function oc(){if(Vs)return Vs;var e,n=$o,a=n.length,s,u="value"in ba?ba.value:ba.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(s=1;s<=M&&n[a-s]===u[f-s];s++);return Vs=u.slice(e,1<s?1-s:void 0)}function ks(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Xs(){return!0}function lc(){return!1}function ci(e){function n(a,s,u,f,M){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=M,this.currentTarget=null;for(var D in e)e.hasOwnProperty(D)&&(a=e[D],this[D]=a?a(f):f[D]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Xs:lc,this.isPropagationStopped=lc,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xs)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xs)},persist:function(){},isPersistent:Xs}),n}var Ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ss=ci(Ha),os=g({},Ha,{view:0,detail:0}),hf=ci(os),tl,Ws,ls,Ys=g({},os,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:il,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ls&&(ls&&e.type==="mousemove"?(tl=e.screenX-ls.screenX,Ws=e.screenY-ls.screenY):Ws=tl=0,ls=e),tl)},movementY:function(e){return"movementY"in e?e.movementY:Ws}}),cc=ci(Ys),df=g({},Ys,{dataTransfer:0}),pf=ci(df),mf=g({},os,{relatedTarget:0}),el=ci(mf),gf=g({},Ha,{animationName:0,elapsedTime:0,pseudoElement:0}),_f=ci(gf),vf=g({},Ha,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xf=ci(vf),uc=g({},Ha,{data:0}),fc=ci(uc),yf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=nl[e])?!!n[e]:!1}function il(){return Sf}var Mf=g({},os,{key:function(e){if(e.key){var n=yf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ks(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:il,charCode:function(e){return e.type==="keypress"?ks(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ks(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bf=ci(Mf),Ef=g({},Ys,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dc=ci(Ef),Tf=g({},os,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:il}),Af=ci(Tf),Rf=g({},Ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cf=ci(Rf),wf=g({},Ys,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Df=ci(wf),Uf=g({},Ha,{newState:0,oldState:0}),Lf=ci(Uf),Nf=[9,13,27,32],qs=fa&&"CompositionEvent"in window,cs=null;fa&&"documentMode"in document&&(cs=document.documentMode);var Of=fa&&"TextEvent"in window&&!cs,pc=fa&&(!qs||cs&&8<cs&&11>=cs),mc=" ",Ea=!1;function gc(e,n){switch(e){case"keyup":return Nf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function js(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xr=!1;function al(e,n){switch(e){case"compositionend":return js(n);case"keypress":return n.which!==32?null:(Ea=!0,mc);case"textInput":return e=n.data,e===mc&&Ea?null:e;default:return null}}function us(e,n){if(xr)return e==="compositionend"||!qs&&gc(e,n)?(e=oc(),Vs=$o=ba=null,xr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return pc&&n.locale!=="ko"?null:n.data;default:return null}}var fs={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _c(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!fs[e.type]:n==="textarea"}function Ti(e,n,a,s){xn?vr?vr.push(s):vr=[s]:xn=s,n=su(n,"onChange"),0<n.length&&(a=new ss("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var yr=null,Ga=null;function ha(e){qg(e,0)}function hs(e){var n=$i(e);if(Je(n))return e}function vc(e,n){if(e==="change")return n}var ds=!1;if(fa){var Zs;if(fa){var v="oninput"in document;if(!v){var S=document.createElement("div");S.setAttribute("oninput","return;"),v=typeof S.oninput=="function"}Zs=v}else Zs=!1;ds=Zs&&(!document.documentMode||9<document.documentMode)}function U(){yr&&(yr.detachEvent("onpropertychange",V),Ga=yr=null)}function V(e){if(e.propertyName==="value"&&hs(Ga)){var n=[];Ti(n,Ga,e,Ko(e)),sc(ha,n)}}function st(e,n,a){e==="focusin"?(U(),yr=n,Ga=a,yr.attachEvent("onpropertychange",V)):e==="focusout"&&U()}function vt(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hs(Ga)}function Dt(e,n){if(e==="click")return hs(n)}function St(e,n){if(e==="input"||e==="change")return hs(n)}function Ft(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Nt=typeof Object.is=="function"?Object.is:Ft;function Yt(e,n){if(Nt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!vn.call(n,u)||!Nt(e[u],n[u]))return!1}return!0}function xe(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function We(e,n){var a=xe(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=xe(a)}}function Cn(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Cn(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function yn(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=fe(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=fe(e.document)}return n}function gi(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Bi=fa&&"documentMode"in document&&11>=document.documentMode,q=null,ot=null,Et=null,Bt=!1;function ye(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Bt||q==null||q!==fe(s)||(s=q,"selectionStart"in s&&gi(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Et&&Yt(Et,s)||(Et=s,s=su(ot,"onSelect"),0<s.length&&(n=new ss("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=q)))}function Ye(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var hn={animationend:Ye("Animation","AnimationEnd"),animationiteration:Ye("Animation","AnimationIteration"),animationstart:Ye("Animation","AnimationStart"),transitionrun:Ye("Transition","TransitionRun"),transitionstart:Ye("Transition","TransitionStart"),transitioncancel:Ye("Transition","TransitionCancel"),transitionend:Ye("Transition","TransitionEnd")},ti={},Pn={};fa&&(Pn=document.createElement("div").style,"AnimationEvent"in window||(delete hn.animationend.animation,delete hn.animationiteration.animation,delete hn.animationstart.animation),"TransitionEvent"in window||delete hn.transitionend.transition);function Ai(e){if(ti[e])return ti[e];if(!hn[e])return e;var n=hn[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Pn)return ti[e]=n[a];return e}var Va=Ai("animationend"),En=Ai("animationiteration"),Pf=Ai("animationstart"),Px=Ai("transitionrun"),Fx=Ai("transitionstart"),Ix=Ai("transitioncancel"),Am=Ai("transitionend"),Rm=new Map,Ff="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ff.push("scrollEnd");function da(e,n){Rm.set(e,n),ht(n,[e])}var xc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ea=[],Ks=0,If=0;function yc(){for(var e=Ks,n=If=Ks=0;n<e;){var a=ea[n];ea[n++]=null;var s=ea[n];ea[n++]=null;var u=ea[n];ea[n++]=null;var f=ea[n];if(ea[n++]=null,s!==null&&u!==null){var M=s.pending;M===null?u.next=u:(u.next=M.next,M.next=u),s.pending=u}f!==0&&Cm(a,u,f)}}function Sc(e,n,a,s){ea[Ks++]=e,ea[Ks++]=n,ea[Ks++]=a,ea[Ks++]=s,If|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function Bf(e,n,a,s){return Sc(e,n,a,s),Mc(e)}function ps(e,n){return Sc(e,null,null,n),Mc(e)}function Cm(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Zt(a),e=f.hiddenUpdates,s=e[u],s===null?e[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function Mc(e){if(50<Al)throw Al=0,qh=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Qs={};function Bx(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zi(e,n,a,s){return new Bx(e,n,a,s)}function zf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ka(e,n){var a=e.alternate;return a===null?(a=zi(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function wm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function bc(e,n,a,s,u,f){var M=0;if(s=e,typeof e=="function")zf(e)&&(M=1);else if(typeof e=="string")M=ky(e,a,Vt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=zi(31,a,n,u),e.elementType=C,e.lanes=f,e;case R:return ms(a.children,u,f,n);case E:M=8,u|=24;break;case y:return e=zi(12,a,n,u|2),e.elementType=y,e.lanes=f,e;case H:return e=zi(13,a,n,u),e.elementType=H,e.lanes=f,e;case O:return e=zi(19,a,n,u),e.elementType=O,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:M=10;break t;case F:M=9;break t;case P:M=11;break t;case B:M=14;break t;case j:M=16,s=null;break t}M=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=zi(M,a,n,u),n.elementType=e,n.type=s,n.lanes=f,n}function ms(e,n,a,s){return e=zi(7,e,s,n),e.lanes=a,e}function Hf(e,n,a){return e=zi(6,e,null,n),e.lanes=a,e}function Dm(e){var n=zi(18,null,null,0);return n.stateNode=e,n}function Gf(e,n,a){return n=zi(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Um=new WeakMap;function na(e,n){if(typeof e=="object"&&e!==null){var a=Um.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Y(n)},Um.set(e,n),n)}return{value:e,source:n,stack:Y(n)}}var Js=[],$s=0,Ec=null,rl=0,ia=[],aa=0,Sr=null,Ta=1,Aa="";function Xa(e,n){Js[$s++]=rl,Js[$s++]=Ec,Ec=e,rl=n}function Lm(e,n,a){ia[aa++]=Ta,ia[aa++]=Aa,ia[aa++]=Sr,Sr=e;var s=Ta;e=Aa;var u=32-Zt(s)-1;s&=~(1<<u),a+=1;var f=32-Zt(n)+u;if(30<f){var M=u-u%5;f=(s&(1<<M)-1).toString(32),s>>=M,u-=M,Ta=1<<32-Zt(n)+u|a<<u|s,Aa=f+e}else Ta=1<<f|a<<u|s,Aa=e}function Vf(e){e.return!==null&&(Xa(e,1),Lm(e,1,0))}function kf(e){for(;e===Ec;)Ec=Js[--$s],Js[$s]=null,rl=Js[--$s],Js[$s]=null;for(;e===Sr;)Sr=ia[--aa],ia[aa]=null,Aa=ia[--aa],ia[aa]=null,Ta=ia[--aa],ia[aa]=null}function Nm(e,n){ia[aa++]=Ta,ia[aa++]=Aa,ia[aa++]=Sr,Ta=n.id,Aa=n.overflow,Sr=e}var ei=null,Sn=null,qe=!1,Mr=null,ra=!1,Xf=Error(r(519));function br(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw sl(na(n,e)),Xf}function Om(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[bn]=e,n[Rn]=s,a){case"dialog":He("cancel",n),He("close",n);break;case"iframe":case"object":case"embed":He("load",n);break;case"video":case"audio":for(a=0;a<Cl.length;a++)He(Cl[a],n);break;case"source":He("error",n);break;case"img":case"image":case"link":He("error",n),He("load",n);break;case"details":He("toggle",n);break;case"input":He("invalid",n),ta(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":He("invalid",n);break;case"textarea":He("invalid",n),Hn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Qg(n.textContent,a)?(s.popover!=null&&(He("beforetoggle",n),He("toggle",n)),s.onScroll!=null&&He("scroll",n),s.onScrollEnd!=null&&He("scrollend",n),s.onClick!=null&&(n.onclick=Ii),n=!0):n=!1,n||br(e,!0)}function Pm(e){for(ei=e.return;ei;)switch(ei.tag){case 5:case 31:case 13:ra=!1;return;case 27:case 3:ra=!0;return;default:ei=ei.return}}function to(e){if(e!==ei)return!1;if(!qe)return Pm(e),qe=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ld(e.type,e.memoizedProps)),a=!a),a&&Sn&&br(e),Pm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Sn=s_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Sn=s_(e)}else n===27?(n=Sn,Ir(e.type)?(e=dd,dd=null,Sn=e):Sn=n):Sn=ei?oa(e.stateNode.nextSibling):null;return!0}function gs(){Sn=ei=null,qe=!1}function Wf(){var e=Mr;return e!==null&&(Di===null?Di=e:Di.push.apply(Di,e),Mr=null),e}function sl(e){Mr===null?Mr=[e]:Mr.push(e)}var Yf=G(null),_s=null,Wa=null;function Er(e,n,a){At(Yf,n._currentValue),n._currentValue=a}function Ya(e){e._currentValue=Yf.current,ft(Yf)}function qf(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function jf(e,n,a,s){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var M=u.child;f=f.firstContext;t:for(;f!==null;){var D=f;f=u;for(var X=0;X<n.length;X++)if(D.context===n[X]){f.lanes|=a,D=f.alternate,D!==null&&(D.lanes|=a),qf(f.return,a,e),s||(M=null);break t}f=D.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(r(341));M.lanes|=a,f=M.alternate,f!==null&&(f.lanes|=a),qf(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function eo(e,n,a,s){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var D=u.type;Nt(u.pendingProps.value,M.value)||(e!==null?e.push(D):e=[D])}}else if(u===lt.current){if(M=u.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Nl):e=[Nl])}u=u.return}e!==null&&jf(n,e,a,s),n.flags|=262144}function Tc(e){for(e=e.firstContext;e!==null;){if(!Nt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function vs(e){_s=e,Wa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ni(e){return Fm(_s,e)}function Ac(e,n){return _s===null&&vs(e),Fm(e,n)}function Fm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Wa===null){if(e===null)throw Error(r(308));Wa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Wa=Wa.next=n;return a}var zx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Hx=o.unstable_scheduleCallback,Gx=o.unstable_NormalPriority,Gn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zf(){return{controller:new zx,data:new Map,refCount:0}}function ol(e){e.refCount--,e.refCount===0&&Hx(Gx,function(){e.controller.abort()})}var ll=null,Kf=0,no=0,io=null;function Vx(e,n){if(ll===null){var a=ll=[];Kf=0,no=$h(),io={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Kf++,n.then(Im,Im),n}function Im(){if(--Kf===0&&ll!==null){io!==null&&(io.status="fulfilled");var e=ll;ll=null,no=0,io=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function kx(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Bm=z.S;z.S=function(e,n){Sg=T(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Vx(e,n),Bm!==null&&Bm(e,n)};var xs=G(null);function Qf(){var e=xs.current;return e!==null?e:_n.pooledCache}function Rc(e,n){n===null?At(xs,xs.current):At(xs,n.pool)}function zm(){var e=Qf();return e===null?null:{parent:Gn._currentValue,pool:e}}var ao=Error(r(460)),Jf=Error(r(474)),Cc=Error(r(542)),wc={then:function(){}};function Hm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Gm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ii,Ii),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,km(e),e;default:if(typeof n.status=="string")n.then(Ii,Ii);else{if(e=_n,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,km(e),e}throw Ss=n,ao}}function ys(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ss=a,ao):a}}var Ss=null;function Vm(){if(Ss===null)throw Error(r(459));var e=Ss;return Ss=null,e}function km(e){if(e===ao||e===Cc)throw Error(r(483))}var ro=null,cl=0;function Dc(e){var n=cl;return cl+=1,ro===null&&(ro=[]),Gm(ro,e,n)}function ul(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Uc(e,n){throw n.$$typeof===x?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Xm(e){function n(tt,Z){if(e){var ct=tt.deletions;ct===null?(tt.deletions=[Z],tt.flags|=16):ct.push(Z)}}function a(tt,Z){if(!e)return null;for(;Z!==null;)n(tt,Z),Z=Z.sibling;return null}function s(tt){for(var Z=new Map;tt!==null;)tt.key!==null?Z.set(tt.key,tt):Z.set(tt.index,tt),tt=tt.sibling;return Z}function u(tt,Z){return tt=ka(tt,Z),tt.index=0,tt.sibling=null,tt}function f(tt,Z,ct){return tt.index=ct,e?(ct=tt.alternate,ct!==null?(ct=ct.index,ct<Z?(tt.flags|=67108866,Z):ct):(tt.flags|=67108866,Z)):(tt.flags|=1048576,Z)}function M(tt){return e&&tt.alternate===null&&(tt.flags|=67108866),tt}function D(tt,Z,ct,Tt){return Z===null||Z.tag!==6?(Z=Hf(ct,tt.mode,Tt),Z.return=tt,Z):(Z=u(Z,ct),Z.return=tt,Z)}function X(tt,Z,ct,Tt){var me=ct.type;return me===R?Mt(tt,Z,ct.props.children,Tt,ct.key):Z!==null&&(Z.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===j&&ys(me)===Z.type)?(Z=u(Z,ct.props),ul(Z,ct),Z.return=tt,Z):(Z=bc(ct.type,ct.key,ct.props,null,tt.mode,Tt),ul(Z,ct),Z.return=tt,Z)}function ut(tt,Z,ct,Tt){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==ct.containerInfo||Z.stateNode.implementation!==ct.implementation?(Z=Gf(ct,tt.mode,Tt),Z.return=tt,Z):(Z=u(Z,ct.children||[]),Z.return=tt,Z)}function Mt(tt,Z,ct,Tt,me){return Z===null||Z.tag!==7?(Z=ms(ct,tt.mode,Tt,me),Z.return=tt,Z):(Z=u(Z,ct),Z.return=tt,Z)}function Ct(tt,Z,ct){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Z=Hf(""+Z,tt.mode,ct),Z.return=tt,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case b:return ct=bc(Z.type,Z.key,Z.props,null,tt.mode,ct),ul(ct,Z),ct.return=tt,ct;case A:return Z=Gf(Z,tt.mode,ct),Z.return=tt,Z;case j:return Z=ys(Z),Ct(tt,Z,ct)}if(yt(Z)||J(Z))return Z=ms(Z,tt.mode,ct,null),Z.return=tt,Z;if(typeof Z.then=="function")return Ct(tt,Dc(Z),ct);if(Z.$$typeof===N)return Ct(tt,Ac(tt,Z),ct);Uc(tt,Z)}return null}function dt(tt,Z,ct,Tt){var me=Z!==null?Z.key:null;if(typeof ct=="string"&&ct!==""||typeof ct=="number"||typeof ct=="bigint")return me!==null?null:D(tt,Z,""+ct,Tt);if(typeof ct=="object"&&ct!==null){switch(ct.$$typeof){case b:return ct.key===me?X(tt,Z,ct,Tt):null;case A:return ct.key===me?ut(tt,Z,ct,Tt):null;case j:return ct=ys(ct),dt(tt,Z,ct,Tt)}if(yt(ct)||J(ct))return me!==null?null:Mt(tt,Z,ct,Tt,null);if(typeof ct.then=="function")return dt(tt,Z,Dc(ct),Tt);if(ct.$$typeof===N)return dt(tt,Z,Ac(tt,ct),Tt);Uc(tt,ct)}return null}function gt(tt,Z,ct,Tt,me){if(typeof Tt=="string"&&Tt!==""||typeof Tt=="number"||typeof Tt=="bigint")return tt=tt.get(ct)||null,D(Z,tt,""+Tt,me);if(typeof Tt=="object"&&Tt!==null){switch(Tt.$$typeof){case b:return tt=tt.get(Tt.key===null?ct:Tt.key)||null,X(Z,tt,Tt,me);case A:return tt=tt.get(Tt.key===null?ct:Tt.key)||null,ut(Z,tt,Tt,me);case j:return Tt=ys(Tt),gt(tt,Z,ct,Tt,me)}if(yt(Tt)||J(Tt))return tt=tt.get(ct)||null,Mt(Z,tt,Tt,me,null);if(typeof Tt.then=="function")return gt(tt,Z,ct,Dc(Tt),me);if(Tt.$$typeof===N)return gt(tt,Z,ct,Ac(Z,Tt),me);Uc(Z,Tt)}return null}function oe(tt,Z,ct,Tt){for(var me=null,$e=null,ue=Z,Ne=Z=0,ke=null;ue!==null&&Ne<ct.length;Ne++){ue.index>Ne?(ke=ue,ue=null):ke=ue.sibling;var tn=dt(tt,ue,ct[Ne],Tt);if(tn===null){ue===null&&(ue=ke);break}e&&ue&&tn.alternate===null&&n(tt,ue),Z=f(tn,Z,Ne),$e===null?me=tn:$e.sibling=tn,$e=tn,ue=ke}if(Ne===ct.length)return a(tt,ue),qe&&Xa(tt,Ne),me;if(ue===null){for(;Ne<ct.length;Ne++)ue=Ct(tt,ct[Ne],Tt),ue!==null&&(Z=f(ue,Z,Ne),$e===null?me=ue:$e.sibling=ue,$e=ue);return qe&&Xa(tt,Ne),me}for(ue=s(ue);Ne<ct.length;Ne++)ke=gt(ue,tt,Ne,ct[Ne],Tt),ke!==null&&(e&&ke.alternate!==null&&ue.delete(ke.key===null?Ne:ke.key),Z=f(ke,Z,Ne),$e===null?me=ke:$e.sibling=ke,$e=ke);return e&&ue.forEach(function(Vr){return n(tt,Vr)}),qe&&Xa(tt,Ne),me}function _e(tt,Z,ct,Tt){if(ct==null)throw Error(r(151));for(var me=null,$e=null,ue=Z,Ne=Z=0,ke=null,tn=ct.next();ue!==null&&!tn.done;Ne++,tn=ct.next()){ue.index>Ne?(ke=ue,ue=null):ke=ue.sibling;var Vr=dt(tt,ue,tn.value,Tt);if(Vr===null){ue===null&&(ue=ke);break}e&&ue&&Vr.alternate===null&&n(tt,ue),Z=f(Vr,Z,Ne),$e===null?me=Vr:$e.sibling=Vr,$e=Vr,ue=ke}if(tn.done)return a(tt,ue),qe&&Xa(tt,Ne),me;if(ue===null){for(;!tn.done;Ne++,tn=ct.next())tn=Ct(tt,tn.value,Tt),tn!==null&&(Z=f(tn,Z,Ne),$e===null?me=tn:$e.sibling=tn,$e=tn);return qe&&Xa(tt,Ne),me}for(ue=s(ue);!tn.done;Ne++,tn=ct.next())tn=gt(ue,tt,Ne,tn.value,Tt),tn!==null&&(e&&tn.alternate!==null&&ue.delete(tn.key===null?Ne:tn.key),Z=f(tn,Z,Ne),$e===null?me=tn:$e.sibling=tn,$e=tn);return e&&ue.forEach(function(tS){return n(tt,tS)}),qe&&Xa(tt,Ne),me}function mn(tt,Z,ct,Tt){if(typeof ct=="object"&&ct!==null&&ct.type===R&&ct.key===null&&(ct=ct.props.children),typeof ct=="object"&&ct!==null){switch(ct.$$typeof){case b:t:{for(var me=ct.key;Z!==null;){if(Z.key===me){if(me=ct.type,me===R){if(Z.tag===7){a(tt,Z.sibling),Tt=u(Z,ct.props.children),Tt.return=tt,tt=Tt;break t}}else if(Z.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===j&&ys(me)===Z.type){a(tt,Z.sibling),Tt=u(Z,ct.props),ul(Tt,ct),Tt.return=tt,tt=Tt;break t}a(tt,Z);break}else n(tt,Z);Z=Z.sibling}ct.type===R?(Tt=ms(ct.props.children,tt.mode,Tt,ct.key),Tt.return=tt,tt=Tt):(Tt=bc(ct.type,ct.key,ct.props,null,tt.mode,Tt),ul(Tt,ct),Tt.return=tt,tt=Tt)}return M(tt);case A:t:{for(me=ct.key;Z!==null;){if(Z.key===me)if(Z.tag===4&&Z.stateNode.containerInfo===ct.containerInfo&&Z.stateNode.implementation===ct.implementation){a(tt,Z.sibling),Tt=u(Z,ct.children||[]),Tt.return=tt,tt=Tt;break t}else{a(tt,Z);break}else n(tt,Z);Z=Z.sibling}Tt=Gf(ct,tt.mode,Tt),Tt.return=tt,tt=Tt}return M(tt);case j:return ct=ys(ct),mn(tt,Z,ct,Tt)}if(yt(ct))return oe(tt,Z,ct,Tt);if(J(ct)){if(me=J(ct),typeof me!="function")throw Error(r(150));return ct=me.call(ct),_e(tt,Z,ct,Tt)}if(typeof ct.then=="function")return mn(tt,Z,Dc(ct),Tt);if(ct.$$typeof===N)return mn(tt,Z,Ac(tt,ct),Tt);Uc(tt,ct)}return typeof ct=="string"&&ct!==""||typeof ct=="number"||typeof ct=="bigint"?(ct=""+ct,Z!==null&&Z.tag===6?(a(tt,Z.sibling),Tt=u(Z,ct),Tt.return=tt,tt=Tt):(a(tt,Z),Tt=Hf(ct,tt.mode,Tt),Tt.return=tt,tt=Tt),M(tt)):a(tt,Z)}return function(tt,Z,ct,Tt){try{cl=0;var me=mn(tt,Z,ct,Tt);return ro=null,me}catch(ue){if(ue===ao||ue===Cc)throw ue;var $e=zi(29,ue,null,tt.mode);return $e.lanes=Tt,$e.return=tt,$e}}}var Ms=Xm(!0),Wm=Xm(!1),Tr=!1;function $f(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function th(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ar(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Rr(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(on&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=Mc(e),Cm(e,null,a),n}return Sc(e,s,n,a),Mc(e)}function fl(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,ts(e,a)}}function eh(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=M:f=f.next=M,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var nh=!1;function hl(){if(nh){var e=io;if(e!==null)throw e}}function dl(e,n,a,s){nh=!1;var u=e.updateQueue;Tr=!1;var f=u.firstBaseUpdate,M=u.lastBaseUpdate,D=u.shared.pending;if(D!==null){u.shared.pending=null;var X=D,ut=X.next;X.next=null,M===null?f=ut:M.next=ut,M=X;var Mt=e.alternate;Mt!==null&&(Mt=Mt.updateQueue,D=Mt.lastBaseUpdate,D!==M&&(D===null?Mt.firstBaseUpdate=ut:D.next=ut,Mt.lastBaseUpdate=X))}if(f!==null){var Ct=u.baseState;M=0,Mt=ut=X=null,D=f;do{var dt=D.lane&-536870913,gt=dt!==D.lane;if(gt?(Ve&dt)===dt:(s&dt)===dt){dt!==0&&dt===no&&(nh=!0),Mt!==null&&(Mt=Mt.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});t:{var oe=e,_e=D;dt=n;var mn=a;switch(_e.tag){case 1:if(oe=_e.payload,typeof oe=="function"){Ct=oe.call(mn,Ct,dt);break t}Ct=oe;break t;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=_e.payload,dt=typeof oe=="function"?oe.call(mn,Ct,dt):oe,dt==null)break t;Ct=g({},Ct,dt);break t;case 2:Tr=!0}}dt=D.callback,dt!==null&&(e.flags|=64,gt&&(e.flags|=8192),gt=u.callbacks,gt===null?u.callbacks=[dt]:gt.push(dt))}else gt={lane:dt,tag:D.tag,payload:D.payload,callback:D.callback,next:null},Mt===null?(ut=Mt=gt,X=Ct):Mt=Mt.next=gt,M|=dt;if(D=D.next,D===null){if(D=u.shared.pending,D===null)break;gt=D,D=gt.next,gt.next=null,u.lastBaseUpdate=gt,u.shared.pending=null}}while(!0);Mt===null&&(X=Ct),u.baseState=X,u.firstBaseUpdate=ut,u.lastBaseUpdate=Mt,f===null&&(u.shared.lanes=0),Lr|=M,e.lanes=M,e.memoizedState=Ct}}function Ym(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function qm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ym(a[e],n)}var so=G(null),Lc=G(0);function jm(e,n){e=er,At(Lc,e),At(so,n),er=e|n.baseLanes}function ih(){At(Lc,er),At(so,so.current)}function ah(){er=Lc.current,ft(so),ft(Lc)}var Hi=G(null),sa=null;function Cr(e){var n=e.alternate;At(Fn,Fn.current&1),At(Hi,e),sa===null&&(n===null||so.current!==null||n.memoizedState!==null)&&(sa=e)}function rh(e){At(Fn,Fn.current),At(Hi,e),sa===null&&(sa=e)}function Zm(e){e.tag===22?(At(Fn,Fn.current),At(Hi,e),sa===null&&(sa=e)):wr()}function wr(){At(Fn,Fn.current),At(Hi,Hi.current)}function Gi(e){ft(Hi),sa===e&&(sa=null),ft(Fn)}var Fn=G(0);function Nc(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||fd(a)||hd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var qa=0,Ue=null,dn=null,Vn=null,Oc=!1,oo=!1,bs=!1,Pc=0,pl=0,lo=null,Xx=0;function Un(){throw Error(r(321))}function sh(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Nt(e[a],n[a]))return!1;return!0}function oh(e,n,a,s,u,f){return qa=f,Ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=e===null||e.memoizedState===null?L0:Mh,bs=!1,f=a(s,u),bs=!1,oo&&(f=Qm(n,a,s,u)),Km(e),f}function Km(e){z.H=_l;var n=dn!==null&&dn.next!==null;if(qa=0,Vn=dn=Ue=null,Oc=!1,pl=0,lo=null,n)throw Error(r(300));e===null||kn||(e=e.dependencies,e!==null&&Tc(e)&&(kn=!0))}function Qm(e,n,a,s){Ue=e;var u=0;do{if(oo&&(lo=null),pl=0,oo=!1,25<=u)throw Error(r(301));if(u+=1,Vn=dn=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=N0,f=n(a,s)}while(oo);return f}function Wx(){var e=z.H,n=e.useState()[0];return n=typeof n.then=="function"?ml(n):n,e=e.useState()[0],(dn!==null?dn.memoizedState:null)!==e&&(Ue.flags|=1024),n}function lh(){var e=Pc!==0;return Pc=0,e}function ch(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function uh(e){if(Oc){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Oc=!1}qa=0,Vn=dn=Ue=null,oo=!1,pl=Pc=0,lo=null}function _i(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vn===null?Ue.memoizedState=Vn=e:Vn=Vn.next=e,Vn}function In(){if(dn===null){var e=Ue.alternate;e=e!==null?e.memoizedState:null}else e=dn.next;var n=Vn===null?Ue.memoizedState:Vn.next;if(n!==null)Vn=n,dn=e;else{if(e===null)throw Ue.alternate===null?Error(r(467)):Error(r(310));dn=e,e={memoizedState:dn.memoizedState,baseState:dn.baseState,baseQueue:dn.baseQueue,queue:dn.queue,next:null},Vn===null?Ue.memoizedState=Vn=e:Vn=Vn.next=e}return Vn}function Fc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ml(e){var n=pl;return pl+=1,lo===null&&(lo=[]),e=Gm(lo,e,n),n=Ue,(Vn===null?n.memoizedState:Vn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?L0:Mh),e}function Ic(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ml(e);if(e.$$typeof===N)return ni(e)}throw Error(r(438,String(e)))}function fh(e){var n=null,a=Ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=Ue.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Fc(),Ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=L;return n.index++,a}function ja(e,n){return typeof n=="function"?n(e):n}function Bc(e){var n=In();return hh(n,dn,e)}function hh(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=e.baseQueue,f=s.pending;if(f!==null){if(u!==null){var M=u.next;u.next=f.next,f.next=M}n.baseQueue=u=f,s.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var D=M=null,X=null,ut=n,Mt=!1;do{var Ct=ut.lane&-536870913;if(Ct!==ut.lane?(Ve&Ct)===Ct:(qa&Ct)===Ct){var dt=ut.revertLane;if(dt===0)X!==null&&(X=X.next={lane:0,revertLane:0,gesture:null,action:ut.action,hasEagerState:ut.hasEagerState,eagerState:ut.eagerState,next:null}),Ct===no&&(Mt=!0);else if((qa&dt)===dt){ut=ut.next,dt===no&&(Mt=!0);continue}else Ct={lane:0,revertLane:ut.revertLane,gesture:null,action:ut.action,hasEagerState:ut.hasEagerState,eagerState:ut.eagerState,next:null},X===null?(D=X=Ct,M=f):X=X.next=Ct,Ue.lanes|=dt,Lr|=dt;Ct=ut.action,bs&&a(f,Ct),f=ut.hasEagerState?ut.eagerState:a(f,Ct)}else dt={lane:Ct,revertLane:ut.revertLane,gesture:ut.gesture,action:ut.action,hasEagerState:ut.hasEagerState,eagerState:ut.eagerState,next:null},X===null?(D=X=dt,M=f):X=X.next=dt,Ue.lanes|=Ct,Lr|=Ct;ut=ut.next}while(ut!==null&&ut!==n);if(X===null?M=f:X.next=D,!Nt(f,e.memoizedState)&&(kn=!0,Mt&&(a=io,a!==null)))throw a;e.memoizedState=f,e.baseState=M,e.baseQueue=X,s.lastRenderedState=f}return u===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function dh(e){var n=In(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do f=e(f,M.action),M=M.next;while(M!==u);Nt(f,n.memoizedState)||(kn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Jm(e,n,a){var s=Ue,u=In(),f=qe;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var M=!Nt((dn||u).memoizedState,a);if(M&&(u.memoizedState=a,kn=!0),u=u.queue,gh(e0.bind(null,s,u,e),[e]),u.getSnapshot!==n||M||Vn!==null&&Vn.memoizedState.tag&1){if(s.flags|=2048,co(9,{destroy:void 0},t0.bind(null,s,u,a,n),null),_n===null)throw Error(r(349));f||(qa&127)!==0||$m(s,n,a)}return a}function $m(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Ue.updateQueue,n===null?(n=Fc(),Ue.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function t0(e,n,a,s){n.value=a,n.getSnapshot=s,n0(n)&&i0(e)}function e0(e,n,a){return a(function(){n0(n)&&i0(e)})}function n0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Nt(e,a)}catch{return!0}}function i0(e){var n=ps(e,2);n!==null&&Ui(n,e,2)}function ph(e){var n=_i();if(typeof e=="function"){var a=e;if(e=a(),bs){te(!0);try{a()}finally{te(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:e},n}function a0(e,n,a,s){return e.baseState=a,hh(e,dn,typeof s=="function"?s:ja)}function Yx(e,n,a,s,u){if(Gc(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){f.listeners.push(M)}};z.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,r0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function r0(e,n){var a=n.action,s=n.payload,u=e.state;if(n.isTransition){var f=z.T,M={};z.T=M;try{var D=a(u,s),X=z.S;X!==null&&X(M,D),s0(e,n,D)}catch(ut){mh(e,n,ut)}finally{f!==null&&M.types!==null&&(f.types=M.types),z.T=f}}else try{f=a(u,s),s0(e,n,f)}catch(ut){mh(e,n,ut)}}function s0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){o0(e,n,s)},function(s){return mh(e,n,s)}):o0(e,n,a)}function o0(e,n,a){n.status="fulfilled",n.value=a,l0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,r0(e,a)))}function mh(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,l0(n),n=n.next;while(n!==s)}e.action=null}function l0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function c0(e,n){return n}function u0(e,n){if(qe){var a=_n.formState;if(a!==null){t:{var s=Ue;if(qe){if(Sn){e:{for(var u=Sn,f=ra;u.nodeType!==8;){if(!f){u=null;break e}if(u=oa(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Sn=oa(u.nextSibling),s=u.data==="F!";break t}}br(s)}s=!1}s&&(n=a[0])}}return a=_i(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:c0,lastRenderedState:n},a.queue=s,a=w0.bind(null,Ue,s),s.dispatch=a,s=ph(!1),f=Sh.bind(null,Ue,!1,s.queue),s=_i(),u={state:n,dispatch:null,action:e,pending:null},s.queue=u,a=Yx.bind(null,Ue,u,f,a),u.dispatch=a,s.memoizedState=e,[n,a,!1]}function f0(e){var n=In();return h0(n,dn,e)}function h0(e,n,a){if(n=hh(e,n,c0)[0],e=Bc(ja)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=ml(n)}catch(M){throw M===ao?Cc:M}else s=n;n=In();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(Ue.flags|=2048,co(9,{destroy:void 0},qx.bind(null,u,a),null)),[s,f,e]}function qx(e,n){e.action=n}function d0(e){var n=In(),a=dn;if(a!==null)return h0(n,a,e);In(),n=n.memoizedState,a=In();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function co(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=Ue.updateQueue,n===null&&(n=Fc(),Ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function p0(){return In().memoizedState}function zc(e,n,a,s){var u=_i();Ue.flags|=e,u.memoizedState=co(1|n,{destroy:void 0},a,s===void 0?null:s)}function Hc(e,n,a,s){var u=In();s=s===void 0?null:s;var f=u.memoizedState.inst;dn!==null&&s!==null&&sh(s,dn.memoizedState.deps)?u.memoizedState=co(n,f,a,s):(Ue.flags|=e,u.memoizedState=co(1|n,f,a,s))}function m0(e,n){zc(8390656,8,e,n)}function gh(e,n){Hc(2048,8,e,n)}function jx(e){Ue.flags|=4;var n=Ue.updateQueue;if(n===null)n=Fc(),Ue.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function g0(e){var n=In().memoizedState;return jx({ref:n,nextImpl:e}),function(){if((on&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function _0(e,n){return Hc(4,2,e,n)}function v0(e,n){return Hc(4,4,e,n)}function x0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function y0(e,n,a){a=a!=null?a.concat([e]):null,Hc(4,4,x0.bind(null,n,e),a)}function _h(){}function S0(e,n){var a=In();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&sh(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function M0(e,n){var a=In();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&sh(n,s[1]))return s[0];if(s=e(),bs){te(!0);try{e()}finally{te(!1)}}return a.memoizedState=[s,n],s}function vh(e,n,a){return a===void 0||(qa&1073741824)!==0&&(Ve&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=bg(),Ue.lanes|=e,Lr|=e,a)}function b0(e,n,a,s){return Nt(a,n)?a:so.current!==null?(e=vh(e,a,s),Nt(e,n)||(kn=!0),e):(qa&42)===0||(qa&1073741824)!==0&&(Ve&261930)===0?(kn=!0,e.memoizedState=a):(e=bg(),Ue.lanes|=e,Lr|=e,n)}function E0(e,n,a,s,u){var f=W.p;W.p=f!==0&&8>f?f:8;var M=z.T,D={};z.T=D,Sh(e,!1,n,a);try{var X=u(),ut=z.S;if(ut!==null&&ut(D,X),X!==null&&typeof X=="object"&&typeof X.then=="function"){var Mt=kx(X,s);gl(e,n,Mt,Xi(e))}else gl(e,n,s,Xi(e))}catch(Ct){gl(e,n,{then:function(){},status:"rejected",reason:Ct},Xi())}finally{W.p=f,M!==null&&D.types!==null&&(M.types=D.types),z.T=M}}function Zx(){}function xh(e,n,a,s){if(e.tag!==5)throw Error(r(476));var u=T0(e).queue;E0(e,u,n,at,a===null?Zx:function(){return A0(e),a(s)})}function T0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:at,baseState:at,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:at},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function A0(e){var n=T0(e);n.next===null&&(n=e.alternate.memoizedState),gl(e,n.next.queue,{},Xi())}function yh(){return ni(Nl)}function R0(){return In().memoizedState}function C0(){return In().memoizedState}function Kx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Xi();e=Ar(a);var s=Rr(n,e,a);s!==null&&(Ui(s,n,a),fl(s,n,a)),n={cache:Zf()},e.payload=n;return}n=n.return}}function Qx(e,n,a){var s=Xi();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Gc(e)?D0(n,a):(a=Bf(e,n,a,s),a!==null&&(Ui(a,e,s),U0(a,n,s)))}function w0(e,n,a){var s=Xi();gl(e,n,a,s)}function gl(e,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Gc(e))D0(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var M=n.lastRenderedState,D=f(M,a);if(u.hasEagerState=!0,u.eagerState=D,Nt(D,M))return Sc(e,n,u,0),_n===null&&yc(),!1}catch{}if(a=Bf(e,n,u,s),a!==null)return Ui(a,e,s),U0(a,n,s),!0}return!1}function Sh(e,n,a,s){if(s={lane:2,revertLane:$h(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Gc(e)){if(n)throw Error(r(479))}else n=Bf(e,a,s,2),n!==null&&Ui(n,e,2)}function Gc(e){var n=e.alternate;return e===Ue||n!==null&&n===Ue}function D0(e,n){oo=Oc=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function U0(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,ts(e,a)}}var _l={readContext:ni,use:Ic,useCallback:Un,useContext:Un,useEffect:Un,useImperativeHandle:Un,useLayoutEffect:Un,useInsertionEffect:Un,useMemo:Un,useReducer:Un,useRef:Un,useState:Un,useDebugValue:Un,useDeferredValue:Un,useTransition:Un,useSyncExternalStore:Un,useId:Un,useHostTransitionStatus:Un,useFormState:Un,useActionState:Un,useOptimistic:Un,useMemoCache:Un,useCacheRefresh:Un};_l.useEffectEvent=Un;var L0={readContext:ni,use:Ic,useCallback:function(e,n){return _i().memoizedState=[e,n===void 0?null:n],e},useContext:ni,useEffect:m0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,zc(4194308,4,x0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return zc(4194308,4,e,n)},useInsertionEffect:function(e,n){zc(4,2,e,n)},useMemo:function(e,n){var a=_i();n=n===void 0?null:n;var s=e();if(bs){te(!0);try{e()}finally{te(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=_i();if(a!==void 0){var u=a(n);if(bs){te(!0);try{a(n)}finally{te(!1)}}}else u=n;return s.memoizedState=s.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},s.queue=e,e=e.dispatch=Qx.bind(null,Ue,e),[s.memoizedState,e]},useRef:function(e){var n=_i();return e={current:e},n.memoizedState=e},useState:function(e){e=ph(e);var n=e.queue,a=w0.bind(null,Ue,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:_h,useDeferredValue:function(e,n){var a=_i();return vh(a,e,n)},useTransition:function(){var e=ph(!1);return e=E0.bind(null,Ue,e.queue,!0,!1),_i().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=Ue,u=_i();if(qe){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),_n===null)throw Error(r(349));(Ve&127)!==0||$m(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,m0(e0.bind(null,s,f,e),[e]),s.flags|=2048,co(9,{destroy:void 0},t0.bind(null,s,f,a,n),null),a},useId:function(){var e=_i(),n=_n.identifierPrefix;if(qe){var a=Aa,s=Ta;a=(s&~(1<<32-Zt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Pc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Xx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:yh,useFormState:u0,useActionState:u0,useOptimistic:function(e){var n=_i();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Sh.bind(null,Ue,!0,a),a.dispatch=n,[e,n]},useMemoCache:fh,useCacheRefresh:function(){return _i().memoizedState=Kx.bind(null,Ue)},useEffectEvent:function(e){var n=_i(),a={impl:e};return n.memoizedState=a,function(){if((on&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Mh={readContext:ni,use:Ic,useCallback:S0,useContext:ni,useEffect:gh,useImperativeHandle:y0,useInsertionEffect:_0,useLayoutEffect:v0,useMemo:M0,useReducer:Bc,useRef:p0,useState:function(){return Bc(ja)},useDebugValue:_h,useDeferredValue:function(e,n){var a=In();return b0(a,dn.memoizedState,e,n)},useTransition:function(){var e=Bc(ja)[0],n=In().memoizedState;return[typeof e=="boolean"?e:ml(e),n]},useSyncExternalStore:Jm,useId:R0,useHostTransitionStatus:yh,useFormState:f0,useActionState:f0,useOptimistic:function(e,n){var a=In();return a0(a,dn,e,n)},useMemoCache:fh,useCacheRefresh:C0};Mh.useEffectEvent=g0;var N0={readContext:ni,use:Ic,useCallback:S0,useContext:ni,useEffect:gh,useImperativeHandle:y0,useInsertionEffect:_0,useLayoutEffect:v0,useMemo:M0,useReducer:dh,useRef:p0,useState:function(){return dh(ja)},useDebugValue:_h,useDeferredValue:function(e,n){var a=In();return dn===null?vh(a,e,n):b0(a,dn.memoizedState,e,n)},useTransition:function(){var e=dh(ja)[0],n=In().memoizedState;return[typeof e=="boolean"?e:ml(e),n]},useSyncExternalStore:Jm,useId:R0,useHostTransitionStatus:yh,useFormState:d0,useActionState:d0,useOptimistic:function(e,n){var a=In();return dn!==null?a0(a,dn,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:fh,useCacheRefresh:C0};N0.useEffectEvent=g0;function bh(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Eh={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=Xi(),u=Ar(s);u.payload=n,a!=null&&(u.callback=a),n=Rr(e,u,s),n!==null&&(Ui(n,e,s),fl(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=Xi(),u=Ar(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Rr(e,u,s),n!==null&&(Ui(n,e,s),fl(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Xi(),s=Ar(a);s.tag=2,n!=null&&(s.callback=n),n=Rr(e,s,a),n!==null&&(Ui(n,e,a),fl(n,e,a))}};function O0(e,n,a,s,u,f,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,M):n.prototype&&n.prototype.isPureReactComponent?!Yt(a,s)||!Yt(u,f):!0}function P0(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Eh.enqueueReplaceState(n,n.state,null)}function Es(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function F0(e){xc(e)}function I0(e){console.error(e)}function B0(e){xc(e)}function Vc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function z0(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Th(e,n,a){return a=Ar(a),a.tag=3,a.payload={element:null},a.callback=function(){Vc(e,n)},a}function H0(e){return e=Ar(e),e.tag=3,e}function G0(e,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;e.payload=function(){return u(f)},e.callback=function(){z0(n,a,s)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){z0(n,a,s),typeof u!="function"&&(Nr===null?Nr=new Set([this]):Nr.add(this));var D=s.stack;this.componentDidCatch(s.value,{componentStack:D!==null?D:""})})}function Jx(e,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&eo(n,a,u,!0),a=Hi.current,a!==null){switch(a.tag){case 31:case 13:return sa===null?tu():a.alternate===null&&Ln===0&&(Ln=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===wc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Kh(e,s,u)),!1;case 22:return a.flags|=65536,s===wc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Kh(e,s,u)),!1}throw Error(r(435,a.tag))}return Kh(e,s,u),tu(),!1}if(qe)return n=Hi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==Xf&&(e=Error(r(422),{cause:s}),sl(na(e,a)))):(s!==Xf&&(n=Error(r(423),{cause:s}),sl(na(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,s=na(s,a),u=Th(e.stateNode,s,u),eh(e,u),Ln!==4&&(Ln=2)),!1;var f=Error(r(520),{cause:s});if(f=na(f,a),Tl===null?Tl=[f]:Tl.push(f),Ln!==4&&(Ln=2),n===null)return!0;s=na(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Th(a.stateNode,s,e),eh(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Nr===null||!Nr.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=H0(u),G0(u,e,a,s),eh(a,u),!1}a=a.return}while(a!==null);return!1}var Ah=Error(r(461)),kn=!1;function ii(e,n,a,s){n.child=e===null?Wm(n,null,a,s):Ms(n,e.child,a,s)}function V0(e,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var M={};for(var D in s)D!=="ref"&&(M[D]=s[D])}else M=s;return vs(n),s=oh(e,n,a,M,f,u),D=lh(),e!==null&&!kn?(ch(e,n,u),Za(e,n,u)):(qe&&D&&Vf(n),n.flags|=1,ii(e,n,s,u),n.child)}function k0(e,n,a,s,u){if(e===null){var f=a.type;return typeof f=="function"&&!zf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,X0(e,n,f,s,u)):(e=bc(a.type,null,s,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Oh(e,u)){var M=f.memoizedProps;if(a=a.compare,a=a!==null?a:Yt,a(M,s)&&e.ref===n.ref)return Za(e,n,u)}return n.flags|=1,e=ka(f,s),e.ref=n.ref,e.return=n,n.child=e}function X0(e,n,a,s,u){if(e!==null){var f=e.memoizedProps;if(Yt(f,s)&&e.ref===n.ref)if(kn=!1,n.pendingProps=s=f,Oh(e,u))(e.flags&131072)!==0&&(kn=!0);else return n.lanes=e.lanes,Za(e,n,u)}return Rh(e,n,a,s,u)}function W0(e,n,a,s){var u=s.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(s=n.child=e.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return Y0(e,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Rc(n,f!==null?f.cachePool:null),f!==null?jm(n,f):ih(),Zm(n);else return s=n.lanes=536870912,Y0(e,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(Rc(n,f.cachePool),jm(n,f),wr(),n.memoizedState=null):(e!==null&&Rc(n,null),ih(),wr());return ii(e,n,u,a),n.child}function vl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Y0(e,n,a,s,u){var f=Qf();return f=f===null?null:{parent:Gn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Rc(n,null),ih(),Zm(n),e!==null&&eo(e,n,s,!0),n.childLanes=u,null}function kc(e,n){return n=Wc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function q0(e,n,a){return Ms(n,e.child,null,a),e=kc(n,n.pendingProps),e.flags|=2,Gi(n),n.memoizedState=null,e}function $x(e,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(qe){if(s.mode==="hidden")return e=kc(n,s),n.lanes=536870912,vl(null,e);if(rh(n),(e=Sn)?(e=r_(e,ra),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Sr!==null?{id:Ta,overflow:Aa}:null,retryLane:536870912,hydrationErrors:null},a=Dm(e),a.return=n,n.child=a,ei=n,Sn=null)):e=null,e===null)throw br(n);return n.lanes=536870912,null}return kc(n,s)}var f=e.memoizedState;if(f!==null){var M=f.dehydrated;if(rh(n),u)if(n.flags&256)n.flags&=-257,n=q0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(kn||eo(e,n,a,!1),u=(a&e.childLanes)!==0,kn||u){if(s=_n,s!==null&&(M=Ba(s,a),M!==0&&M!==f.retryLane))throw f.retryLane=M,ps(e,M),Ui(s,e,M),Ah;tu(),n=q0(e,n,a)}else e=f.treeContext,Sn=oa(M.nextSibling),ei=n,qe=!0,Mr=null,ra=!1,e!==null&&Nm(n,e),n=kc(n,s),n.flags|=4096;return n}return e=ka(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Xc(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Rh(e,n,a,s,u){return vs(n),a=oh(e,n,a,s,void 0,u),s=lh(),e!==null&&!kn?(ch(e,n,u),Za(e,n,u)):(qe&&s&&Vf(n),n.flags|=1,ii(e,n,a,u),n.child)}function j0(e,n,a,s,u,f){return vs(n),n.updateQueue=null,a=Qm(n,s,a,u),Km(e),s=lh(),e!==null&&!kn?(ch(e,n,f),Za(e,n,f)):(qe&&s&&Vf(n),n.flags|=1,ii(e,n,a,f),n.child)}function Z0(e,n,a,s,u){if(vs(n),n.stateNode===null){var f=Qs,M=a.contextType;typeof M=="object"&&M!==null&&(f=ni(M)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Eh,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},$f(n),M=a.contextType,f.context=typeof M=="object"&&M!==null?ni(M):Qs,f.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(bh(n,a,M,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(M=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),M!==f.state&&Eh.enqueueReplaceState(f,f.state,null),dl(n,s,f,u),hl(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var D=n.memoizedProps,X=Es(a,D);f.props=X;var ut=f.context,Mt=a.contextType;M=Qs,typeof Mt=="object"&&Mt!==null&&(M=ni(Mt));var Ct=a.getDerivedStateFromProps;Mt=typeof Ct=="function"||typeof f.getSnapshotBeforeUpdate=="function",D=n.pendingProps!==D,Mt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(D||ut!==M)&&P0(n,f,s,M),Tr=!1;var dt=n.memoizedState;f.state=dt,dl(n,s,f,u),hl(),ut=n.memoizedState,D||dt!==ut||Tr?(typeof Ct=="function"&&(bh(n,a,Ct,s),ut=n.memoizedState),(X=Tr||O0(n,a,X,s,dt,ut,M))?(Mt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=ut),f.props=s,f.state=ut,f.context=M,s=X):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,th(e,n),M=n.memoizedProps,Mt=Es(a,M),f.props=Mt,Ct=n.pendingProps,dt=f.context,ut=a.contextType,X=Qs,typeof ut=="object"&&ut!==null&&(X=ni(ut)),D=a.getDerivedStateFromProps,(ut=typeof D=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(M!==Ct||dt!==X)&&P0(n,f,s,X),Tr=!1,dt=n.memoizedState,f.state=dt,dl(n,s,f,u),hl();var gt=n.memoizedState;M!==Ct||dt!==gt||Tr||e!==null&&e.dependencies!==null&&Tc(e.dependencies)?(typeof D=="function"&&(bh(n,a,D,s),gt=n.memoizedState),(Mt=Tr||O0(n,a,Mt,s,dt,gt,X)||e!==null&&e.dependencies!==null&&Tc(e.dependencies))?(ut||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,gt,X),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,gt,X)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||M===e.memoizedProps&&dt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&dt===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=gt),f.props=s,f.state=gt,f.context=X,s=Mt):(typeof f.componentDidUpdate!="function"||M===e.memoizedProps&&dt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&dt===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,Xc(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=Ms(n,e.child,null,u),n.child=Ms(n,null,a,u)):ii(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Za(e,n,u),e}function K0(e,n,a,s){return gs(),n.flags|=256,ii(e,n,a,s),n.child}var Ch={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wh(e){return{baseLanes:e,cachePool:zm()}}function Dh(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ki),e}function Q0(e,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,M;if((M=f)||(M=e!==null&&e.memoizedState===null?!1:(Fn.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(qe){if(u?Cr(n):wr(),(e=Sn)?(e=r_(e,ra),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Sr!==null?{id:Ta,overflow:Aa}:null,retryLane:536870912,hydrationErrors:null},a=Dm(e),a.return=n,n.child=a,ei=n,Sn=null)):e=null,e===null)throw br(n);return hd(e)?n.lanes=32:n.lanes=536870912,null}var D=s.children;return s=s.fallback,u?(wr(),u=n.mode,D=Wc({mode:"hidden",children:D},u),s=ms(s,u,a,null),D.return=n,s.return=n,D.sibling=s,n.child=D,s=n.child,s.memoizedState=wh(a),s.childLanes=Dh(e,M,a),n.memoizedState=Ch,vl(null,s)):(Cr(n),Uh(n,D))}var X=e.memoizedState;if(X!==null&&(D=X.dehydrated,D!==null)){if(f)n.flags&256?(Cr(n),n.flags&=-257,n=Lh(e,n,a)):n.memoizedState!==null?(wr(),n.child=e.child,n.flags|=128,n=null):(wr(),D=s.fallback,u=n.mode,s=Wc({mode:"visible",children:s.children},u),D=ms(D,u,a,null),D.flags|=2,s.return=n,D.return=n,s.sibling=D,n.child=s,Ms(n,e.child,null,a),s=n.child,s.memoizedState=wh(a),s.childLanes=Dh(e,M,a),n.memoizedState=Ch,n=vl(null,s));else if(Cr(n),hd(D)){if(M=D.nextSibling&&D.nextSibling.dataset,M)var ut=M.dgst;M=ut,s=Error(r(419)),s.stack="",s.digest=M,sl({value:s,source:null,stack:null}),n=Lh(e,n,a)}else if(kn||eo(e,n,a,!1),M=(a&e.childLanes)!==0,kn||M){if(M=_n,M!==null&&(s=Ba(M,a),s!==0&&s!==X.retryLane))throw X.retryLane=s,ps(e,s),Ui(M,e,s),Ah;fd(D)||tu(),n=Lh(e,n,a)}else fd(D)?(n.flags|=192,n.child=e.child,n=null):(e=X.treeContext,Sn=oa(D.nextSibling),ei=n,qe=!0,Mr=null,ra=!1,e!==null&&Nm(n,e),n=Uh(n,s.children),n.flags|=4096);return n}return u?(wr(),D=s.fallback,u=n.mode,X=e.child,ut=X.sibling,s=ka(X,{mode:"hidden",children:s.children}),s.subtreeFlags=X.subtreeFlags&65011712,ut!==null?D=ka(ut,D):(D=ms(D,u,a,null),D.flags|=2),D.return=n,s.return=n,s.sibling=D,n.child=s,vl(null,s),s=n.child,D=e.child.memoizedState,D===null?D=wh(a):(u=D.cachePool,u!==null?(X=Gn._currentValue,u=u.parent!==X?{parent:X,pool:X}:u):u=zm(),D={baseLanes:D.baseLanes|a,cachePool:u}),s.memoizedState=D,s.childLanes=Dh(e,M,a),n.memoizedState=Ch,vl(e.child,s)):(Cr(n),a=e.child,e=a.sibling,a=ka(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function Uh(e,n){return n=Wc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Wc(e,n){return e=zi(22,e,null,n),e.lanes=0,e}function Lh(e,n,a){return Ms(n,e.child,null,a),e=Uh(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function J0(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),qf(e.return,n,a)}function Nh(e,n,a,s,u,f){var M=e.memoizedState;M===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(M.isBackwards=n,M.rendering=null,M.renderingStartTime=0,M.last=s,M.tail=a,M.tailMode=u,M.treeForkCount=f)}function $0(e,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var M=Fn.current,D=(M&2)!==0;if(D?(M=M&1|2,n.flags|=128):M&=1,At(Fn,M),ii(e,n,s,a),s=qe?rl:0,!D&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&J0(e,a,n);else if(e.tag===19)J0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Nc(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Nh(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Nc(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Nh(n,!0,a,null,f,s);break;case"together":Nh(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Za(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Lr|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(eo(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=ka(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ka(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Oh(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Tc(e)))}function ty(e,n,a){switch(n.tag){case 3:Gt(n,n.stateNode.containerInfo),Er(n,Gn,e.memoizedState.cache),gs();break;case 27:case 5:kt(n);break;case 4:Gt(n,n.stateNode.containerInfo);break;case 10:Er(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,rh(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Cr(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Q0(e,n,a):(Cr(n),e=Za(e,n,a),e!==null?e.sibling:null);Cr(n);break;case 19:var u=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(eo(e,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return $0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),At(Fn,Fn.current),s)break;return null;case 22:return n.lanes=0,W0(e,n,a,n.pendingProps);case 24:Er(n,Gn,e.memoizedState.cache)}return Za(e,n,a)}function tg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)kn=!0;else{if(!Oh(e,a)&&(n.flags&128)===0)return kn=!1,ty(e,n,a);kn=(e.flags&131072)!==0}else kn=!1,qe&&(n.flags&1048576)!==0&&Lm(n,rl,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(e=ys(n.elementType),n.type=e,typeof e=="function")zf(e)?(s=Es(e,s),n.tag=1,n=Z0(null,n,e,s,a)):(n.tag=0,n=Rh(null,n,e,s,a));else{if(e!=null){var u=e.$$typeof;if(u===P){n.tag=11,n=V0(null,n,e,s,a);break t}else if(u===B){n.tag=14,n=k0(null,n,e,s,a);break t}}throw n=pt(e)||e,Error(r(306,n,""))}}return n;case 0:return Rh(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=Es(s,n.pendingProps),Z0(e,n,s,u,a);case 3:t:{if(Gt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,th(e,n),dl(n,s,null,a);var M=n.memoizedState;if(s=M.cache,Er(n,Gn,s),s!==f.cache&&jf(n,[Gn],a,!0),hl(),s=M.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=K0(e,n,s,a);break t}else if(s!==u){u=na(Error(r(424)),n),sl(u),n=K0(e,n,s,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Sn=oa(e.firstChild),ei=n,qe=!0,Mr=null,ra=!0,a=Wm(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(gs(),s===u){n=Za(e,n,a);break t}ii(e,n,s,a)}n=n.child}return n;case 26:return Xc(e,n),e===null?(a=f_(n.type,null,n.pendingProps,null))?n.memoizedState=a:qe||(a=n.type,e=n.pendingProps,s=ou(nt.current).createElement(a),s[bn]=n,s[Rn]=e,ai(s,a,e),w(s),n.stateNode=s):n.memoizedState=f_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return kt(n),e===null&&qe&&(s=n.stateNode=l_(n.type,n.pendingProps,nt.current),ei=n,ra=!0,u=Sn,Ir(n.type)?(dd=u,Sn=oa(s.firstChild)):Sn=u),ii(e,n,n.pendingProps.children,a),Xc(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&qe&&((u=s=Sn)&&(s=Dy(s,n.type,n.pendingProps,ra),s!==null?(n.stateNode=s,ei=n,Sn=oa(s.firstChild),ra=!1,u=!0):u=!1),u||br(n)),kt(n),u=n.type,f=n.pendingProps,M=e!==null?e.memoizedProps:null,s=f.children,ld(u,f)?s=null:M!==null&&ld(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=oh(e,n,Wx,null,null,a),Nl._currentValue=u),Xc(e,n),ii(e,n,s,a),n.child;case 6:return e===null&&qe&&((e=a=Sn)&&(a=Uy(a,n.pendingProps,ra),a!==null?(n.stateNode=a,ei=n,Sn=null,e=!0):e=!1),e||br(n)),null;case 13:return Q0(e,n,a);case 4:return Gt(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Ms(n,null,s,a):ii(e,n,s,a),n.child;case 11:return V0(e,n,n.type,n.pendingProps,a);case 7:return ii(e,n,n.pendingProps,a),n.child;case 8:return ii(e,n,n.pendingProps.children,a),n.child;case 12:return ii(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Er(n,n.type,s.value),ii(e,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,vs(n),u=ni(u),s=s(u),n.flags|=1,ii(e,n,s,a),n.child;case 14:return k0(e,n,n.type,n.pendingProps,a);case 15:return X0(e,n,n.type,n.pendingProps,a);case 19:return $0(e,n,a);case 31:return $x(e,n,a);case 22:return W0(e,n,a,n.pendingProps);case 24:return vs(n),s=ni(Gn),e===null?(u=Qf(),u===null&&(u=_n,f=Zf(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},$f(n),Er(n,Gn,u)):((e.lanes&a)!==0&&(th(e,n),dl(n,null,null,a),hl()),u=e.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Er(n,Gn,s)):(s=f.cache,Er(n,Gn,s),s!==u.cache&&jf(n,[Gn],a,!0))),ii(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ka(e){e.flags|=4}function Ph(e,n,a,s,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Rg())e.flags|=8192;else throw Ss=wc,Jf}else e.flags&=-16777217}function eg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!g_(n))if(Rg())e.flags|=8192;else throw Ss=wc,Jf}function Yc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?an():536870912,e.lanes|=n,po|=n)}function xl(e,n){if(!qe)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Mn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function ey(e,n,a){var s=n.pendingProps;switch(kf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(n),null;case 1:return Mn(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ya(Gn),jt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(to(n)?Ka(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Wf())),Mn(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(Ka(n),f!==null?(Mn(n),eg(n,f)):(Mn(n),Ph(n,u,null,s,a))):f?f!==e.memoizedState?(Ka(n),Mn(n),eg(n,f)):(Mn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&Ka(n),Mn(n),Ph(n,u,e,s,a)),null;case 27:if(Te(n),a=nt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Ka(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Mn(n),null}e=Vt.current,to(n)?Om(n):(e=l_(u,s,a),n.stateNode=e,Ka(n))}return Mn(n),null;case 5:if(Te(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Ka(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Mn(n),null}if(f=Vt.current,to(n))Om(n);else{var M=ou(nt.current);switch(f){case 1:f=M.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=M.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=M.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=M.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=M.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?M.createElement("select",{is:s.is}):M.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?M.createElement(u,{is:s.is}):M.createElement(u)}}f[bn]=n,f[Rn]=s;t:for(M=n.child;M!==null;){if(M.tag===5||M.tag===6)f.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===n)break t;for(;M.sibling===null;){if(M.return===null||M.return===n)break t;M=M.return}M.sibling.return=M.return,M=M.sibling}n.stateNode=f;t:switch(ai(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Ka(n)}}return Mn(n),Ph(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Ka(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=nt.current,to(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,u=ei,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}e[bn]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Qg(e.nodeValue,a)),e||br(n,!0)}else e=ou(e).createTextNode(s),e[bn]=n,n.stateNode=e}return Mn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=to(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[bn]=n}else gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Mn(n),e=!1}else a=Wf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Gi(n),n):(Gi(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Mn(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=to(n),s!==null&&s.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[bn]=n}else gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Mn(n),u=!1}else u=Wf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Gi(n),n):(Gi(n),null)}return Gi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Yc(n,n.updateQueue),Mn(n),null);case 4:return jt(),e===null&&id(n.stateNode.containerInfo),Mn(n),null;case 10:return Ya(n.type),Mn(n),null;case 19:if(ft(Fn),s=n.memoizedState,s===null)return Mn(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)xl(s,!1);else{if(Ln!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Nc(e),f!==null){for(n.flags|=128,xl(s,!1),e=f.updateQueue,n.updateQueue=e,Yc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)wm(a,e),a=a.sibling;return At(Fn,Fn.current&1|2),qe&&Xa(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&T()>Qc&&(n.flags|=128,u=!0,xl(s,!1),n.lanes=4194304)}else{if(!u)if(e=Nc(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Yc(n,e),xl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!qe)return Mn(n),null}else 2*T()-s.renderingStartTime>Qc&&a!==536870912&&(n.flags|=128,u=!0,xl(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(e=s.last,e!==null?e.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=T(),e.sibling=null,a=Fn.current,At(Fn,u?a&1|2:a&1),qe&&Xa(n,s.treeForkCount),e):(Mn(n),null);case 22:case 23:return Gi(n),ah(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Mn(n),n.subtreeFlags&6&&(n.flags|=8192)):Mn(n),a=n.updateQueue,a!==null&&Yc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&ft(xs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ya(Gn),Mn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function ny(e,n){switch(kf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ya(Gn),jt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Te(n),null;case 31:if(n.memoizedState!==null){if(Gi(n),n.alternate===null)throw Error(r(340));gs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Gi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));gs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ft(Fn),null;case 4:return jt(),null;case 10:return Ya(n.type),null;case 22:case 23:return Gi(n),ah(),e!==null&&ft(xs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ya(Gn),null;case 25:return null;default:return null}}function ng(e,n){switch(kf(n),n.tag){case 3:Ya(Gn),jt();break;case 26:case 27:case 5:Te(n);break;case 4:jt();break;case 31:n.memoizedState!==null&&Gi(n);break;case 13:Gi(n);break;case 19:ft(Fn);break;case 10:Ya(n.type);break;case 22:case 23:Gi(n),ah(),e!==null&&ft(xs);break;case 24:Ya(Gn)}}function yl(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&e)===e){s=void 0;var f=a.create,M=a.inst;s=f(),M.destroy=s}a=a.next}while(a!==u)}}catch(D){un(n,n.return,D)}}function Dr(e,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&e)===e){var M=s.inst,D=M.destroy;if(D!==void 0){M.destroy=void 0,u=n;var X=a,ut=D;try{ut()}catch(Mt){un(u,X,Mt)}}}s=s.next}while(s!==f)}}catch(Mt){un(n,n.return,Mt)}}function ig(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{qm(n,a)}catch(s){un(e,e.return,s)}}}function ag(e,n,a){a.props=Es(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){un(e,n,s)}}function Sl(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(u){un(e,n,u)}}function Ra(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){un(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){un(e,n,u)}else a.current=null}function rg(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){un(e,e.return,u)}}function Fh(e,n,a){try{var s=e.stateNode;Ey(s,e.type,a,n),s[Rn]=n}catch(u){un(e,e.return,u)}}function sg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ir(e.type)||e.tag===4}function Ih(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||sg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ir(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bh(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ii));else if(s!==4&&(s===27&&Ir(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Bh(e,n,a),e=e.sibling;e!==null;)Bh(e,n,a),e=e.sibling}function qc(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&Ir(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(qc(e,n,a),e=e.sibling;e!==null;)qc(e,n,a),e=e.sibling}function og(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);ai(n,s,a),n[bn]=e,n[Rn]=a}catch(f){un(e,e.return,f)}}var Qa=!1,Xn=!1,zh=!1,lg=typeof WeakSet=="function"?WeakSet:Set,Jn=null;function iy(e,n){if(e=e.containerInfo,sd=pu,e=yn(e),gi(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var M=0,D=-1,X=-1,ut=0,Mt=0,Ct=e,dt=null;e:for(;;){for(var gt;Ct!==a||u!==0&&Ct.nodeType!==3||(D=M+u),Ct!==f||s!==0&&Ct.nodeType!==3||(X=M+s),Ct.nodeType===3&&(M+=Ct.nodeValue.length),(gt=Ct.firstChild)!==null;)dt=Ct,Ct=gt;for(;;){if(Ct===e)break e;if(dt===a&&++ut===u&&(D=M),dt===f&&++Mt===s&&(X=M),(gt=Ct.nextSibling)!==null)break;Ct=dt,dt=Ct.parentNode}Ct=gt}a=D===-1||X===-1?null:{start:D,end:X}}else a=null}a=a||{start:0,end:0}}else a=null;for(od={focusedElem:e,selectionRange:a},pu=!1,Jn=n;Jn!==null;)if(n=Jn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Jn=e;else for(;Jn!==null;){switch(n=Jn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var oe=Es(a.type,u);e=s.getSnapshotBeforeUpdate(oe,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(_e){un(a,a.return,_e)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)ud(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ud(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,Jn=e;break}Jn=n.return}}function cg(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:$a(e,a),s&4&&yl(5,a);break;case 1:if($a(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){un(a,a.return,M)}else{var u=Es(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){un(a,a.return,M)}}s&64&&ig(a),s&512&&Sl(a,a.return);break;case 3:if($a(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{qm(e,n)}catch(M){un(a,a.return,M)}}break;case 27:n===null&&s&4&&og(a);case 26:case 5:$a(e,a),n===null&&s&4&&rg(a),s&512&&Sl(a,a.return);break;case 12:$a(e,a);break;case 31:$a(e,a),s&4&&hg(e,a);break;case 13:$a(e,a),s&4&&dg(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=hy.bind(null,a),Ly(e,a))));break;case 22:if(s=a.memoizedState!==null||Qa,!s){n=n!==null&&n.memoizedState!==null||Xn,u=Qa;var f=Xn;Qa=s,(Xn=n)&&!f?tr(e,a,(a.subtreeFlags&8772)!==0):$a(e,a),Qa=u,Xn=f}break;case 30:break;default:$a(e,a)}}function ug(e){var n=e.alternate;n!==null&&(e.alternate=null,ug(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&is(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Tn=null,Ri=!1;function Ja(e,n,a){for(a=a.child;a!==null;)fg(e,n,a),a=a.sibling}function fg(e,n,a){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(Pt,a)}catch{}switch(a.tag){case 26:Xn||Ra(a,n),Ja(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Xn||Ra(a,n);var s=Tn,u=Ri;Ir(a.type)&&(Tn=a.stateNode,Ri=!1),Ja(e,n,a),Dl(a.stateNode),Tn=s,Ri=u;break;case 5:Xn||Ra(a,n);case 6:if(s=Tn,u=Ri,Tn=null,Ja(e,n,a),Tn=s,Ri=u,Tn!==null)if(Ri)try{(Tn.nodeType===9?Tn.body:Tn.nodeName==="HTML"?Tn.ownerDocument.body:Tn).removeChild(a.stateNode)}catch(f){un(a,n,f)}else try{Tn.removeChild(a.stateNode)}catch(f){un(a,n,f)}break;case 18:Tn!==null&&(Ri?(e=Tn,i_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Mo(e)):i_(Tn,a.stateNode));break;case 4:s=Tn,u=Ri,Tn=a.stateNode.containerInfo,Ri=!0,Ja(e,n,a),Tn=s,Ri=u;break;case 0:case 11:case 14:case 15:Dr(2,a,n),Xn||Dr(4,a,n),Ja(e,n,a);break;case 1:Xn||(Ra(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&ag(a,n,s)),Ja(e,n,a);break;case 21:Ja(e,n,a);break;case 22:Xn=(s=Xn)||a.memoizedState!==null,Ja(e,n,a),Xn=s;break;default:Ja(e,n,a)}}function hg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Mo(e)}catch(a){un(n,n.return,a)}}}function dg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Mo(e)}catch(a){un(n,n.return,a)}}function ay(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new lg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new lg),n;default:throw Error(r(435,e.tag))}}function jc(e,n){var a=ay(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=dy.bind(null,e,s);s.then(u,u)}})}function Ci(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=e,M=n,D=M;t:for(;D!==null;){switch(D.tag){case 27:if(Ir(D.type)){Tn=D.stateNode,Ri=!1;break t}break;case 5:Tn=D.stateNode,Ri=!1;break t;case 3:case 4:Tn=D.stateNode.containerInfo,Ri=!0;break t}D=D.return}if(Tn===null)throw Error(r(160));fg(f,M,u),Tn=null,Ri=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)pg(n,e),n=n.sibling}var pa=null;function pg(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ci(n,e),wi(e),s&4&&(Dr(3,e,e.return),yl(3,e),Dr(5,e,e.return));break;case 1:Ci(n,e),wi(e),s&512&&(Xn||a===null||Ra(a,a.return)),s&64&&Qa&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=pa;if(Ci(n,e),wi(e),s&512&&(Xn||a===null||Ra(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){t:{s=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ji]||f[bn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),ai(f,s,a),f[bn]=e,w(f),s=f;break t;case"link":var M=p_("link","href",u).get(s+(a.href||""));if(M){for(var D=0;D<M.length;D++)if(f=M[D],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(D,1);break e}}f=u.createElement(s),ai(f,s,a),u.head.appendChild(f);break;case"meta":if(M=p_("meta","content",u).get(s+(a.content||""))){for(D=0;D<M.length;D++)if(f=M[D],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(D,1);break e}}f=u.createElement(s),ai(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[bn]=e,w(f),s=f}e.stateNode=s}else m_(u,e.type,e.stateNode);else e.stateNode=d_(u,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?m_(u,e.type,e.stateNode):d_(u,s,e.memoizedProps)):s===null&&e.stateNode!==null&&Fh(e,e.memoizedProps,a.memoizedProps)}break;case 27:Ci(n,e),wi(e),s&512&&(Xn||a===null||Ra(a,a.return)),a!==null&&s&4&&Fh(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Ci(n,e),wi(e),s&512&&(Xn||a===null||Ra(a,a.return)),e.flags&32){u=e.stateNode;try{Dn(u,"")}catch(oe){un(e,e.return,oe)}}s&4&&e.stateNode!=null&&(u=e.memoizedProps,Fh(e,u,a!==null?a.memoizedProps:u)),s&1024&&(zh=!0);break;case 6:if(Ci(n,e),wi(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(oe){un(e,e.return,oe)}}break;case 3:if(uu=null,u=pa,pa=lu(n.containerInfo),Ci(n,e),pa=u,wi(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{Mo(n.containerInfo)}catch(oe){un(e,e.return,oe)}zh&&(zh=!1,mg(e));break;case 4:s=pa,pa=lu(e.stateNode.containerInfo),Ci(n,e),wi(e),pa=s;break;case 12:Ci(n,e),wi(e);break;case 31:Ci(n,e),wi(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,jc(e,s)));break;case 13:Ci(n,e),wi(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Kc=T()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,jc(e,s)));break;case 22:u=e.memoizedState!==null;var X=a!==null&&a.memoizedState!==null,ut=Qa,Mt=Xn;if(Qa=ut||u,Xn=Mt||X,Ci(n,e),Xn=Mt,Qa=ut,wi(e),s&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||X||Qa||Xn||Ts(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){X=a=n;try{if(f=X.stateNode,u)M=f.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{D=X.stateNode;var Ct=X.memoizedProps.style,dt=Ct!=null&&Ct.hasOwnProperty("display")?Ct.display:null;D.style.display=dt==null||typeof dt=="boolean"?"":(""+dt).trim()}}catch(oe){un(X,X.return,oe)}}}else if(n.tag===6){if(a===null){X=n;try{X.stateNode.nodeValue=u?"":X.memoizedProps}catch(oe){un(X,X.return,oe)}}}else if(n.tag===18){if(a===null){X=n;try{var gt=X.stateNode;u?a_(gt,!0):a_(X.stateNode,!1)}catch(oe){un(X,X.return,oe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,jc(e,a))));break;case 19:Ci(n,e),wi(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,jc(e,s)));break;case 30:break;case 21:break;default:Ci(n,e),wi(e)}}function wi(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(sg(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Ih(e);qc(e,f,u);break;case 5:var M=a.stateNode;a.flags&32&&(Dn(M,""),a.flags&=-33);var D=Ih(e);qc(e,D,M);break;case 3:case 4:var X=a.stateNode.containerInfo,ut=Ih(e);Bh(e,ut,X);break;default:throw Error(r(161))}}catch(Mt){un(e,e.return,Mt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function mg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;mg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function $a(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)cg(e,n.alternate,n),n=n.sibling}function Ts(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Dr(4,n,n.return),Ts(n);break;case 1:Ra(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&ag(n,n.return,a),Ts(n);break;case 27:Dl(n.stateNode);case 26:case 5:Ra(n,n.return),Ts(n);break;case 22:n.memoizedState===null&&Ts(n);break;case 30:Ts(n);break;default:Ts(n)}e=e.sibling}}function tr(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=e,f=n,M=f.flags;switch(f.tag){case 0:case 11:case 15:tr(u,f,a),yl(4,f);break;case 1:if(tr(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ut){un(s,s.return,ut)}if(s=f,u=s.updateQueue,u!==null){var D=s.stateNode;try{var X=u.shared.hiddenCallbacks;if(X!==null)for(u.shared.hiddenCallbacks=null,u=0;u<X.length;u++)Ym(X[u],D)}catch(ut){un(s,s.return,ut)}}a&&M&64&&ig(f),Sl(f,f.return);break;case 27:og(f);case 26:case 5:tr(u,f,a),a&&s===null&&M&4&&rg(f),Sl(f,f.return);break;case 12:tr(u,f,a);break;case 31:tr(u,f,a),a&&M&4&&hg(u,f);break;case 13:tr(u,f,a),a&&M&4&&dg(u,f);break;case 22:f.memoizedState===null&&tr(u,f,a),Sl(f,f.return);break;case 30:break;default:tr(u,f,a)}n=n.sibling}}function Hh(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ol(a))}function Gh(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ol(e))}function ma(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)gg(e,n,a,s),n=n.sibling}function gg(e,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:ma(e,n,a,s),u&2048&&yl(9,n);break;case 1:ma(e,n,a,s);break;case 3:ma(e,n,a,s),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ol(e)));break;case 12:if(u&2048){ma(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,M=f.id,D=f.onPostCommit;typeof D=="function"&&D(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(X){un(n,n.return,X)}}else ma(e,n,a,s);break;case 31:ma(e,n,a,s);break;case 13:ma(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,M=n.alternate,n.memoizedState!==null?f._visibility&2?ma(e,n,a,s):Ml(e,n):f._visibility&2?ma(e,n,a,s):(f._visibility|=2,uo(e,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Hh(M,n);break;case 24:ma(e,n,a,s),u&2048&&Gh(n.alternate,n);break;default:ma(e,n,a,s)}}function uo(e,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,M=n,D=a,X=s,ut=M.flags;switch(M.tag){case 0:case 11:case 15:uo(f,M,D,X,u),yl(8,M);break;case 23:break;case 22:var Mt=M.stateNode;M.memoizedState!==null?Mt._visibility&2?uo(f,M,D,X,u):Ml(f,M):(Mt._visibility|=2,uo(f,M,D,X,u)),u&&ut&2048&&Hh(M.alternate,M);break;case 24:uo(f,M,D,X,u),u&&ut&2048&&Gh(M.alternate,M);break;default:uo(f,M,D,X,u)}n=n.sibling}}function Ml(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,u=s.flags;switch(s.tag){case 22:Ml(a,s),u&2048&&Hh(s.alternate,s);break;case 24:Ml(a,s),u&2048&&Gh(s.alternate,s);break;default:Ml(a,s)}n=n.sibling}}var bl=8192;function fo(e,n,a){if(e.subtreeFlags&bl)for(e=e.child;e!==null;)_g(e,n,a),e=e.sibling}function _g(e,n,a){switch(e.tag){case 26:fo(e,n,a),e.flags&bl&&e.memoizedState!==null&&Xy(a,pa,e.memoizedState,e.memoizedProps);break;case 5:fo(e,n,a);break;case 3:case 4:var s=pa;pa=lu(e.stateNode.containerInfo),fo(e,n,a),pa=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=bl,bl=16777216,fo(e,n,a),bl=s):fo(e,n,a));break;default:fo(e,n,a)}}function vg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function El(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Jn=s,yg(s,e)}vg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)xg(e),e=e.sibling}function xg(e){switch(e.tag){case 0:case 11:case 15:El(e),e.flags&2048&&Dr(9,e,e.return);break;case 3:El(e);break;case 12:El(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Zc(e)):El(e);break;default:El(e)}}function Zc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Jn=s,yg(s,e)}vg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Dr(8,n,n.return),Zc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Zc(n));break;default:Zc(n)}e=e.sibling}}function yg(e,n){for(;Jn!==null;){var a=Jn;switch(a.tag){case 0:case 11:case 15:Dr(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:ol(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Jn=s;else t:for(a=e;Jn!==null;){s=Jn;var u=s.sibling,f=s.return;if(ug(s),s===a){Jn=null;break t}if(u!==null){u.return=f,Jn=u;break t}Jn=f}}}var ry={getCacheForType:function(e){var n=ni(Gn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return ni(Gn).controller.signal}},sy=typeof WeakMap=="function"?WeakMap:Map,on=0,_n=null,ze=null,Ve=0,cn=0,Vi=null,Ur=!1,ho=!1,Vh=!1,er=0,Ln=0,Lr=0,As=0,kh=0,ki=0,po=0,Tl=null,Di=null,Xh=!1,Kc=0,Sg=0,Qc=1/0,Jc=null,Nr=null,qn=0,Or=null,mo=null,nr=0,Wh=0,Yh=null,Mg=null,Al=0,qh=null;function Xi(){return(on&2)!==0&&Ve!==0?Ve&-Ve:z.T!==null?$h():es()}function bg(){if(ki===0)if((Ve&536870912)===0||qe){var e=Ut;Ut<<=1,(Ut&3932160)===0&&(Ut=262144),ki=e}else ki=536870912;return e=Hi.current,e!==null&&(e.flags|=32),ki}function Ui(e,n,a){(e===_n&&(cn===2||cn===9)||e.cancelPendingCommit!==null)&&(go(e,0),Pr(e,Ve,ki,!1)),Bn(e,a),((on&2)===0||e!==_n)&&(e===_n&&((on&2)===0&&(As|=a),Ln===4&&Pr(e,Ve,ki,!1)),Ca(e))}function Eg(e,n,a){if((on&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||zt(e,n),u=s?cy(e,n):Zh(e,n,!0),f=s;do{if(u===0){ho&&!s&&Pr(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!oy(a)){u=Zh(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var D=e;u=Tl;var X=D.current.memoizedState.isDehydrated;if(X&&(go(D,M).flags|=256),M=Zh(D,M,!1),M!==2){if(Vh&&!X){D.errorRecoveryDisabledLanes|=f,As|=f,u=4;break t}f=Di,Di=u,f!==null&&(Di===null?Di=f:Di.push.apply(Di,f))}u=M}if(f=!1,u!==2)continue}}if(u===1){go(e,0),Pr(e,n,0,!0);break}t:{switch(s=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Pr(s,n,ki,!Ur);break t;case 2:Di=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Kc+300-T(),10<u)){if(Pr(s,n,ki,!Ur),Rt(s,0,!0)!==0)break t;nr=n,s.timeoutHandle=e_(Tg.bind(null,s,a,Di,Jc,Xh,n,ki,As,po,Ur,f,"Throttled",-0,0),u);break t}Tg(s,a,Di,Jc,Xh,n,ki,As,po,Ur,f,null,-0,0)}}break}while(!0);Ca(e)}function Tg(e,n,a,s,u,f,M,D,X,ut,Mt,Ct,dt,gt){if(e.timeoutHandle=-1,Ct=n.subtreeFlags,Ct&8192||(Ct&16785408)===16785408){Ct={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ii},_g(n,f,Ct);var oe=(f&62914560)===f?Kc-T():(f&4194048)===f?Sg-T():0;if(oe=Wy(Ct,oe),oe!==null){nr=f,e.cancelPendingCommit=oe(Ng.bind(null,e,n,f,a,s,u,M,D,X,Mt,Ct,null,dt,gt)),Pr(e,f,M,!ut);return}}Ng(e,n,f,a,s,u,M,D,X)}function oy(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!Nt(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Pr(e,n,a,s){n&=~kh,n&=~As,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var u=n;0<u;){var f=31-Zt(u),M=1<<f;s[f]=-1,u&=~M}a!==0&&$r(e,a,n)}function $c(){return(on&6)===0?(Rl(0),!1):!0}function jh(){if(ze!==null){if(cn===0)var e=ze.return;else e=ze,Wa=_s=null,uh(e),ro=null,cl=0,e=ze;for(;e!==null;)ng(e.alternate,e),e=e.return;ze=null}}function go(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ry(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),nr=0,jh(),_n=e,ze=a=ka(e.current,null),Ve=n,cn=0,Vi=null,Ur=!1,ho=zt(e,n),Vh=!1,po=ki=kh=As=Lr=Ln=0,Di=Tl=null,Xh=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var u=31-Zt(s),f=1<<u;n|=e[u],s&=~f}return er=n,yc(),a}function Ag(e,n){Ue=null,z.H=_l,n===ao||n===Cc?(n=Vm(),cn=3):n===Jf?(n=Vm(),cn=4):cn=n===Ah?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Vi=n,ze===null&&(Ln=1,Vc(e,na(n,e.current)))}function Rg(){var e=Hi.current;return e===null?!0:(Ve&4194048)===Ve?sa===null:(Ve&62914560)===Ve||(Ve&536870912)!==0?e===sa:!1}function Cg(){var e=z.H;return z.H=_l,e===null?_l:e}function wg(){var e=z.A;return z.A=ry,e}function tu(){Ln=4,Ur||(Ve&4194048)!==Ve&&Hi.current!==null||(ho=!0),(Lr&134217727)===0&&(As&134217727)===0||_n===null||Pr(_n,Ve,ki,!1)}function Zh(e,n,a){var s=on;on|=2;var u=Cg(),f=wg();(_n!==e||Ve!==n)&&(Jc=null,go(e,n)),n=!1;var M=Ln;t:do try{if(cn!==0&&ze!==null){var D=ze,X=Vi;switch(cn){case 8:jh(),M=6;break t;case 3:case 2:case 9:case 6:Hi.current===null&&(n=!0);var ut=cn;if(cn=0,Vi=null,_o(e,D,X,ut),a&&ho){M=0;break t}break;default:ut=cn,cn=0,Vi=null,_o(e,D,X,ut)}}ly(),M=Ln;break}catch(Mt){Ag(e,Mt)}while(!0);return n&&e.shellSuspendCounter++,Wa=_s=null,on=s,z.H=u,z.A=f,ze===null&&(_n=null,Ve=0,yc()),M}function ly(){for(;ze!==null;)Dg(ze)}function cy(e,n){var a=on;on|=2;var s=Cg(),u=wg();_n!==e||Ve!==n?(Jc=null,Qc=T()+500,go(e,n)):ho=zt(e,n);t:do try{if(cn!==0&&ze!==null){n=ze;var f=Vi;e:switch(cn){case 1:cn=0,Vi=null,_o(e,n,f,1);break;case 2:case 9:if(Hm(f)){cn=0,Vi=null,Ug(n);break}n=function(){cn!==2&&cn!==9||_n!==e||(cn=7),Ca(e)},f.then(n,n);break t;case 3:cn=7;break t;case 4:cn=5;break t;case 7:Hm(f)?(cn=0,Vi=null,Ug(n)):(cn=0,Vi=null,_o(e,n,f,7));break;case 5:var M=null;switch(ze.tag){case 26:M=ze.memoizedState;case 5:case 27:var D=ze;if(M?g_(M):D.stateNode.complete){cn=0,Vi=null;var X=D.sibling;if(X!==null)ze=X;else{var ut=D.return;ut!==null?(ze=ut,eu(ut)):ze=null}break e}}cn=0,Vi=null,_o(e,n,f,5);break;case 6:cn=0,Vi=null,_o(e,n,f,6);break;case 8:jh(),Ln=6;break t;default:throw Error(r(462))}}uy();break}catch(Mt){Ag(e,Mt)}while(!0);return Wa=_s=null,z.H=s,z.A=u,on=a,ze!==null?0:(_n=null,Ve=0,yc(),Ln)}function uy(){for(;ze!==null&&!ne();)Dg(ze)}function Dg(e){var n=tg(e.alternate,e,er);e.memoizedProps=e.pendingProps,n===null?eu(e):ze=n}function Ug(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=j0(a,n,n.pendingProps,n.type,void 0,Ve);break;case 11:n=j0(a,n,n.pendingProps,n.type.render,n.ref,Ve);break;case 5:uh(n);default:ng(a,n),n=ze=wm(n,er),n=tg(a,n,er)}e.memoizedProps=e.pendingProps,n===null?eu(e):ze=n}function _o(e,n,a,s){Wa=_s=null,uh(n),ro=null,cl=0;var u=n.return;try{if(Jx(e,u,n,a,Ve)){Ln=1,Vc(e,na(a,e.current)),ze=null;return}}catch(f){if(u!==null)throw ze=u,f;Ln=1,Vc(e,na(a,e.current)),ze=null;return}n.flags&32768?(qe||s===1?e=!0:ho||(Ve&536870912)!==0?e=!1:(Ur=e=!0,(s===2||s===9||s===3||s===6)&&(s=Hi.current,s!==null&&s.tag===13&&(s.flags|=16384))),Lg(n,e)):eu(n)}function eu(e){var n=e;do{if((n.flags&32768)!==0){Lg(n,Ur);return}e=n.return;var a=ey(n.alternate,n,er);if(a!==null){ze=a;return}if(n=n.sibling,n!==null){ze=n;return}ze=n=e}while(n!==null);Ln===0&&(Ln=5)}function Lg(e,n){do{var a=ny(e.alternate,e);if(a!==null){a.flags&=32767,ze=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ze=e;return}ze=e=a}while(e!==null);Ln=6,ze=null}function Ng(e,n,a,s,u,f,M,D,X){e.cancelPendingCommit=null;do nu();while(qn!==0);if((on&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=If,pi(e,a,f,M,D,X),e===_n&&(ze=_n=null,Ve=0),mo=n,Or=e,nr=a,Wh=f,Yh=u,Mg=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,py(_t,function(){return Bg(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=z.T,z.T=null,u=W.p,W.p=2,M=on,on|=4;try{iy(e,n,a)}finally{on=M,W.p=u,z.T=s}}qn=1,Og(),Pg(),Fg()}}function Og(){if(qn===1){qn=0;var e=Or,n=mo,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var s=W.p;W.p=2;var u=on;on|=4;try{pg(n,e);var f=od,M=yn(e.containerInfo),D=f.focusedElem,X=f.selectionRange;if(M!==D&&D&&D.ownerDocument&&Cn(D.ownerDocument.documentElement,D)){if(X!==null&&gi(D)){var ut=X.start,Mt=X.end;if(Mt===void 0&&(Mt=ut),"selectionStart"in D)D.selectionStart=ut,D.selectionEnd=Math.min(Mt,D.value.length);else{var Ct=D.ownerDocument||document,dt=Ct&&Ct.defaultView||window;if(dt.getSelection){var gt=dt.getSelection(),oe=D.textContent.length,_e=Math.min(X.start,oe),mn=X.end===void 0?_e:Math.min(X.end,oe);!gt.extend&&_e>mn&&(M=mn,mn=_e,_e=M);var tt=We(D,_e),Z=We(D,mn);if(tt&&Z&&(gt.rangeCount!==1||gt.anchorNode!==tt.node||gt.anchorOffset!==tt.offset||gt.focusNode!==Z.node||gt.focusOffset!==Z.offset)){var ct=Ct.createRange();ct.setStart(tt.node,tt.offset),gt.removeAllRanges(),_e>mn?(gt.addRange(ct),gt.extend(Z.node,Z.offset)):(ct.setEnd(Z.node,Z.offset),gt.addRange(ct))}}}}for(Ct=[],gt=D;gt=gt.parentNode;)gt.nodeType===1&&Ct.push({element:gt,left:gt.scrollLeft,top:gt.scrollTop});for(typeof D.focus=="function"&&D.focus(),D=0;D<Ct.length;D++){var Tt=Ct[D];Tt.element.scrollLeft=Tt.left,Tt.element.scrollTop=Tt.top}}pu=!!sd,od=sd=null}finally{on=u,W.p=s,z.T=a}}e.current=n,qn=2}}function Pg(){if(qn===2){qn=0;var e=Or,n=mo,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var s=W.p;W.p=2;var u=on;on|=4;try{cg(e,n.alternate,n)}finally{on=u,W.p=s,z.T=a}}qn=3}}function Fg(){if(qn===4||qn===3){qn=0,I();var e=Or,n=mo,a=nr,s=Mg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?qn=5:(qn=0,mo=Or=null,Ig(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Nr=null),za(a),n=n.stateNode,Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(Pt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=z.T,u=W.p,W.p=2,z.T=null;try{for(var f=e.onRecoverableError,M=0;M<s.length;M++){var D=s[M];f(D.value,{componentStack:D.stack})}}finally{z.T=n,W.p=u}}(nr&3)!==0&&nu(),Ca(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===qh?Al++:(Al=0,qh=e):Al=0,Rl(0)}}function Ig(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ol(n)))}function nu(){return Og(),Pg(),Fg(),Bg()}function Bg(){if(qn!==5)return!1;var e=Or,n=Wh;Wh=0;var a=za(nr),s=z.T,u=W.p;try{W.p=32>a?32:a,z.T=null,a=Yh,Yh=null;var f=Or,M=nr;if(qn=0,mo=Or=null,nr=0,(on&6)!==0)throw Error(r(331));var D=on;if(on|=4,xg(f.current),gg(f,f.current,M,a),on=D,Rl(0,!1),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(Pt,f)}catch{}return!0}finally{W.p=u,z.T=s,Ig(e,n)}}function zg(e,n,a){n=na(a,n),n=Th(e.stateNode,n,2),e=Rr(e,n,2),e!==null&&(Bn(e,2),Ca(e))}function un(e,n,a){if(e.tag===3)zg(e,e,a);else for(;n!==null;){if(n.tag===3){zg(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Nr===null||!Nr.has(s))){e=na(a,e),a=H0(2),s=Rr(n,a,2),s!==null&&(G0(a,s,n,e),Bn(s,2),Ca(s));break}}n=n.return}}function Kh(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new sy;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(Vh=!0,u.add(a),e=fy.bind(null,e,n,a),n.then(e,e))}function fy(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,_n===e&&(Ve&a)===a&&(Ln===4||Ln===3&&(Ve&62914560)===Ve&&300>T()-Kc?(on&2)===0&&go(e,0):kh|=a,po===Ve&&(po=0)),Ca(e)}function Hg(e,n){n===0&&(n=an()),e=ps(e,n),e!==null&&(Bn(e,n),Ca(e))}function hy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Hg(e,a)}function dy(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Hg(e,a)}function py(e,n){return Ge(e,n)}var iu=null,vo=null,Qh=!1,au=!1,Jh=!1,Fr=0;function Ca(e){e!==vo&&e.next===null&&(vo===null?iu=vo=e:vo=vo.next=e),au=!0,Qh||(Qh=!0,gy())}function Rl(e,n){if(!Jh&&au){Jh=!0;do for(var a=!1,s=iu;s!==null;){if(e!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var M=s.suspendedLanes,D=s.pingedLanes;f=(1<<31-Zt(42|e)+1)-1,f&=u&~(M&~D),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Xg(s,f))}else f=Ve,f=Rt(s,s===_n?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||zt(s,f)||(a=!0,Xg(s,f));s=s.next}while(a);Jh=!1}}function my(){Gg()}function Gg(){au=Qh=!1;var e=0;Fr!==0&&Ay()&&(e=Fr);for(var n=T(),a=null,s=iu;s!==null;){var u=s.next,f=Vg(s,n);f===0?(s.next=null,a===null?iu=u:a.next=u,u===null&&(vo=a)):(a=s,(e!==0||(f&3)!==0)&&(au=!0)),s=u}qn!==0&&qn!==5||Rl(e),Fr!==0&&(Fr=0)}function Vg(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var M=31-Zt(f),D=1<<M,X=u[M];X===-1?((D&a)===0||(D&s)!==0)&&(u[M]=de(D,n)):X<=n&&(e.expiredLanes|=D),f&=~D}if(n=_n,a=Ve,a=Rt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(cn===2||cn===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&je(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||zt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&je(s),za(a)){case 2:case 8:a=wt;break;case 32:a=_t;break;case 268435456:a=Xt;break;default:a=_t}return s=kg.bind(null,e),a=Ge(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&je(s),e.callbackPriority=2,e.callbackNode=null,2}function kg(e,n){if(qn!==0&&qn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(nu()&&e.callbackNode!==a)return null;var s=Ve;return s=Rt(e,e===_n?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(Eg(e,s,n),Vg(e,T()),e.callbackNode!=null&&e.callbackNode===a?kg.bind(null,e):null)}function Xg(e,n){if(nu())return null;Eg(e,n,!0)}function gy(){Cy(function(){(on&6)!==0?Ge(bt,my):Gg()})}function $h(){if(Fr===0){var e=no;e===0&&(e=Kt,Kt<<=1,(Kt&261888)===0&&(Kt=256)),Fr=e}return Fr}function Wg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ei(""+e)}function Yg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function _y(e,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=Wg((u[Rn]||null).action),M=s.submitter;M&&(n=(n=M[Rn]||null)?Wg(n.formAction):M.getAttribute("formAction"),n!==null&&(f=n,M=null));var D=new ss("action","action",null,s,u);e.push({event:D,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Fr!==0){var X=M?Yg(u,M):new FormData(u);xh(a,{pending:!0,data:X,method:u.method,action:f},null,X)}}else typeof f=="function"&&(D.preventDefault(),X=M?Yg(u,M):new FormData(u),xh(a,{pending:!0,data:X,method:u.method,action:f},f,X))},currentTarget:u}]})}}for(var td=0;td<Ff.length;td++){var ed=Ff[td],vy=ed.toLowerCase(),xy=ed[0].toUpperCase()+ed.slice(1);da(vy,"on"+xy)}da(Va,"onAnimationEnd"),da(En,"onAnimationIteration"),da(Pf,"onAnimationStart"),da("dblclick","onDoubleClick"),da("focusin","onFocus"),da("focusout","onBlur"),da(Px,"onTransitionRun"),da(Fx,"onTransitionStart"),da(Ix,"onTransitionCancel"),da(Am,"onTransitionEnd"),it("onMouseEnter",["mouseout","mouseover"]),it("onMouseLeave",["mouseout","mouseover"]),it("onPointerEnter",["pointerout","pointerover"]),it("onPointerLeave",["pointerout","pointerover"]),ht("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ht("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ht("onBeforeInput",["compositionend","keypress","textInput","paste"]),ht("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ht("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ht("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Cl));function qg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var M=s.length-1;0<=M;M--){var D=s[M],X=D.instance,ut=D.currentTarget;if(D=D.listener,X!==f&&u.isPropagationStopped())break t;f=D,u.currentTarget=ut;try{f(u)}catch(Mt){xc(Mt)}u.currentTarget=null,f=X}else for(M=0;M<s.length;M++){if(D=s[M],X=D.instance,ut=D.currentTarget,D=D.listener,X!==f&&u.isPropagationStopped())break t;f=D,u.currentTarget=ut;try{f(u)}catch(Mt){xc(Mt)}u.currentTarget=null,f=X}}}}function He(e,n){var a=n[gr];a===void 0&&(a=n[gr]=new Set);var s=e+"__bubble";a.has(s)||(jg(n,e,2,!1),a.add(s))}function nd(e,n,a){var s=0;n&&(s|=4),jg(a,e,s,n)}var ru="_reactListening"+Math.random().toString(36).slice(2);function id(e){if(!e[ru]){e[ru]=!0,$.forEach(function(a){a!=="selectionchange"&&(yy.has(a)||nd(a,!1,e),nd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ru]||(n[ru]=!0,nd("selectionchange",!1,n))}}function jg(e,n,a,s){switch(b_(n)){case 2:var u=jy;break;case 8:u=Zy;break;default:u=vd}a=u.bind(null,n,a,e),u=void 0,!as||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function ad(e,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var M=s.tag;if(M===3||M===4){var D=s.stateNode.containerInfo;if(D===u)break;if(M===4)for(M=s.return;M!==null;){var X=M.tag;if((X===3||X===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;D!==null;){if(M=Si(D),M===null)return;if(X=M.tag,X===5||X===6||X===26||X===27){s=f=M;continue t}D=D.parentNode}}s=s.return}sc(function(){var ut=f,Mt=Ko(a),Ct=[];t:{var dt=Rm.get(e);if(dt!==void 0){var gt=ss,oe=e;switch(e){case"keypress":if(ks(a)===0)break t;case"keydown":case"keyup":gt=bf;break;case"focusin":oe="focus",gt=el;break;case"focusout":oe="blur",gt=el;break;case"beforeblur":case"afterblur":gt=el;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":gt=cc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":gt=pf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":gt=Af;break;case Va:case En:case Pf:gt=_f;break;case Am:gt=Cf;break;case"scroll":case"scrollend":gt=hf;break;case"wheel":gt=Df;break;case"copy":case"cut":case"paste":gt=xf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":gt=dc;break;case"toggle":case"beforetoggle":gt=Lf}var _e=(n&4)!==0,mn=!_e&&(e==="scroll"||e==="scrollend"),tt=_e?dt!==null?dt+"Capture":null:dt;_e=[];for(var Z=ut,ct;Z!==null;){var Tt=Z;if(ct=Tt.stateNode,Tt=Tt.tag,Tt!==5&&Tt!==26&&Tt!==27||ct===null||tt===null||(Tt=Ma(Z,tt),Tt!=null&&_e.push(wl(Z,Tt,ct))),mn)break;Z=Z.return}0<_e.length&&(dt=new gt(dt,oe,null,a,Mt),Ct.push({event:dt,listeners:_e}))}}if((n&7)===0){t:{if(dt=e==="mouseover"||e==="pointerover",gt=e==="mouseout"||e==="pointerout",dt&&a!==Zo&&(oe=a.relatedTarget||a.fromElement)&&(Si(oe)||oe[Fi]))break t;if((gt||dt)&&(dt=Mt.window===Mt?Mt:(dt=Mt.ownerDocument)?dt.defaultView||dt.parentWindow:window,gt?(oe=a.relatedTarget||a.toElement,gt=ut,oe=oe?Si(oe):null,oe!==null&&(mn=c(oe),_e=oe.tag,oe!==mn||_e!==5&&_e!==27&&_e!==6)&&(oe=null)):(gt=null,oe=ut),gt!==oe)){if(_e=cc,Tt="onMouseLeave",tt="onMouseEnter",Z="mouse",(e==="pointerout"||e==="pointerover")&&(_e=dc,Tt="onPointerLeave",tt="onPointerEnter",Z="pointer"),mn=gt==null?dt:$i(gt),ct=oe==null?dt:$i(oe),dt=new _e(Tt,Z+"leave",gt,a,Mt),dt.target=mn,dt.relatedTarget=ct,Tt=null,Si(Mt)===ut&&(_e=new _e(tt,Z+"enter",oe,a,Mt),_e.target=ct,_e.relatedTarget=mn,Tt=_e),mn=Tt,gt&&oe)e:{for(_e=Sy,tt=gt,Z=oe,ct=0,Tt=tt;Tt;Tt=_e(Tt))ct++;Tt=0;for(var me=Z;me;me=_e(me))Tt++;for(;0<ct-Tt;)tt=_e(tt),ct--;for(;0<Tt-ct;)Z=_e(Z),Tt--;for(;ct--;){if(tt===Z||Z!==null&&tt===Z.alternate){_e=tt;break e}tt=_e(tt),Z=_e(Z)}_e=null}else _e=null;gt!==null&&Zg(Ct,dt,gt,_e,!1),oe!==null&&mn!==null&&Zg(Ct,mn,oe,_e,!0)}}t:{if(dt=ut?$i(ut):window,gt=dt.nodeName&&dt.nodeName.toLowerCase(),gt==="select"||gt==="input"&&dt.type==="file")var $e=vc;else if(_c(dt))if(ds)$e=St;else{$e=vt;var ue=st}else gt=dt.nodeName,!gt||gt.toLowerCase()!=="input"||dt.type!=="checkbox"&&dt.type!=="radio"?ut&&bi(ut.elementType)&&($e=vc):$e=Dt;if($e&&($e=$e(e,ut))){Ti(Ct,$e,a,Mt);break t}ue&&ue(e,dt,ut),e==="focusout"&&ut&&dt.type==="number"&&ut.memoizedProps.value!=null&&wn(dt,"number",dt.value)}switch(ue=ut?$i(ut):window,e){case"focusin":(_c(ue)||ue.contentEditable==="true")&&(q=ue,ot=ut,Et=null);break;case"focusout":Et=ot=q=null;break;case"mousedown":Bt=!0;break;case"contextmenu":case"mouseup":case"dragend":Bt=!1,ye(Ct,a,Mt);break;case"selectionchange":if(Bi)break;case"keydown":case"keyup":ye(Ct,a,Mt)}var Ne;if(qs)t:{switch(e){case"compositionstart":var ke="onCompositionStart";break t;case"compositionend":ke="onCompositionEnd";break t;case"compositionupdate":ke="onCompositionUpdate";break t}ke=void 0}else xr?gc(e,a)&&(ke="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ke="onCompositionStart");ke&&(pc&&a.locale!=="ko"&&(xr||ke!=="onCompositionStart"?ke==="onCompositionEnd"&&xr&&(Ne=oc()):(ba=Mt,$o="value"in ba?ba.value:ba.textContent,xr=!0)),ue=su(ut,ke),0<ue.length&&(ke=new fc(ke,e,null,a,Mt),Ct.push({event:ke,listeners:ue}),Ne?ke.data=Ne:(Ne=js(a),Ne!==null&&(ke.data=Ne)))),(Ne=Of?al(e,a):us(e,a))&&(ke=su(ut,"onBeforeInput"),0<ke.length&&(ue=new fc("onBeforeInput","beforeinput",null,a,Mt),Ct.push({event:ue,listeners:ke}),ue.data=Ne)),_y(Ct,e,ut,a,Mt)}qg(Ct,n)})}function wl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function su(e,n){for(var a=n+"Capture",s=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Ma(e,a),u!=null&&s.unshift(wl(e,u,f)),u=Ma(e,n),u!=null&&s.push(wl(e,u,f))),e.tag===3)return s;e=e.return}return[]}function Sy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Zg(e,n,a,s,u){for(var f=n._reactName,M=[];a!==null&&a!==s;){var D=a,X=D.alternate,ut=D.stateNode;if(D=D.tag,X!==null&&X===s)break;D!==5&&D!==26&&D!==27||ut===null||(X=ut,u?(ut=Ma(a,f),ut!=null&&M.unshift(wl(a,ut,X))):u||(ut=Ma(a,f),ut!=null&&M.push(wl(a,ut,X)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var My=/\r\n?/g,by=/\u0000|\uFFFD/g;function Kg(e){return(typeof e=="string"?e:""+e).replace(My,`
`).replace(by,"")}function Qg(e,n){return n=Kg(n),Kg(e)===n}function pn(e,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Dn(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Dn(e,""+s);break;case"className":pe(e,"class",s);break;case"tabIndex":pe(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":pe(e,a,s);break;case"style":_r(e,s,f);break;case"data":if(n!=="object"){pe(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Ei(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&pn(e,n,"name",u.name,u,null),pn(e,n,"formEncType",u.formEncType,u,null),pn(e,n,"formMethod",u.formMethod,u,null),pn(e,n,"formTarget",u.formTarget,u,null)):(pn(e,n,"encType",u.encType,u,null),pn(e,n,"method",u.method,u,null),pn(e,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Ei(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Ii);break;case"onScroll":s!=null&&He("scroll",e);break;case"onScrollEnd":s!=null&&He("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Ei(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":He("beforetoggle",e),He("toggle",e),ce(e,"popover",s);break;case"xlinkActuate":se(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":se(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":se(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":se(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":se(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":se(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":se(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":se(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":se(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":ce(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ff.get(a)||a,ce(e,a,s))}}function rd(e,n,a,s,u,f){switch(a){case"style":_r(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?Dn(e,s):(typeof s=="number"||typeof s=="bigint")&&Dn(e,""+s);break;case"onScroll":s!=null&&He("scroll",e);break;case"onScrollEnd":s!=null&&He("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Ii);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!mt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Rn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,u);break t}a in e?e[a]=s:s===!0?e.setAttribute(a,""):ce(e,a,s)}}}function ai(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":He("error",e),He("load",e);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var M=a[f];if(M!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:pn(e,n,f,M,a,null)}}u&&pn(e,n,"srcSet",a.srcSet,a,null),s&&pn(e,n,"src",a.src,a,null);return;case"input":He("invalid",e);var D=f=M=u=null,X=null,ut=null;for(s in a)if(a.hasOwnProperty(s)){var Mt=a[s];if(Mt!=null)switch(s){case"name":u=Mt;break;case"type":M=Mt;break;case"checked":X=Mt;break;case"defaultChecked":ut=Mt;break;case"value":f=Mt;break;case"defaultValue":D=Mt;break;case"children":case"dangerouslySetInnerHTML":if(Mt!=null)throw Error(r(137,n));break;default:pn(e,n,s,Mt,a,null)}}ta(e,f,D,X,ut,M,u,!1);return;case"select":He("invalid",e),s=M=f=null;for(u in a)if(a.hasOwnProperty(u)&&(D=a[u],D!=null))switch(u){case"value":f=D;break;case"defaultValue":M=D;break;case"multiple":s=D;default:pn(e,n,u,D,a,null)}n=f,a=M,e.multiple=!!s,n!=null?Mi(e,!!s,n,!1):a!=null&&Mi(e,!!s,a,!0);return;case"textarea":He("invalid",e),f=u=s=null;for(M in a)if(a.hasOwnProperty(M)&&(D=a[M],D!=null))switch(M){case"value":s=D;break;case"defaultValue":u=D;break;case"children":f=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(r(91));break;default:pn(e,n,M,D,a,null)}Hn(e,s,u,f);return;case"option":for(X in a)a.hasOwnProperty(X)&&(s=a[X],s!=null)&&(X==="selected"?e.selected=s&&typeof s!="function"&&typeof s!="symbol":pn(e,n,X,s,a,null));return;case"dialog":He("beforetoggle",e),He("toggle",e),He("cancel",e),He("close",e);break;case"iframe":case"object":He("load",e);break;case"video":case"audio":for(s=0;s<Cl.length;s++)He(Cl[s],e);break;case"image":He("error",e),He("load",e);break;case"details":He("toggle",e);break;case"embed":case"source":case"link":He("error",e),He("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ut in a)if(a.hasOwnProperty(ut)&&(s=a[ut],s!=null))switch(ut){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:pn(e,n,ut,s,a,null)}return;default:if(bi(n)){for(Mt in a)a.hasOwnProperty(Mt)&&(s=a[Mt],s!==void 0&&rd(e,n,Mt,s,a,void 0));return}}for(D in a)a.hasOwnProperty(D)&&(s=a[D],s!=null&&pn(e,n,D,s,a,null))}function Ey(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,M=null,D=null,X=null,ut=null,Mt=null;for(gt in a){var Ct=a[gt];if(a.hasOwnProperty(gt)&&Ct!=null)switch(gt){case"checked":break;case"value":break;case"defaultValue":X=Ct;default:s.hasOwnProperty(gt)||pn(e,n,gt,null,s,Ct)}}for(var dt in s){var gt=s[dt];if(Ct=a[dt],s.hasOwnProperty(dt)&&(gt!=null||Ct!=null))switch(dt){case"type":f=gt;break;case"name":u=gt;break;case"checked":ut=gt;break;case"defaultChecked":Mt=gt;break;case"value":M=gt;break;case"defaultValue":D=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(r(137,n));break;default:gt!==Ct&&pn(e,n,dt,gt,s,Ct)}}zn(e,M,D,X,ut,Mt,f,u);return;case"select":gt=M=D=dt=null;for(f in a)if(X=a[f],a.hasOwnProperty(f)&&X!=null)switch(f){case"value":break;case"multiple":gt=X;default:s.hasOwnProperty(f)||pn(e,n,f,null,s,X)}for(u in s)if(f=s[u],X=a[u],s.hasOwnProperty(u)&&(f!=null||X!=null))switch(u){case"value":dt=f;break;case"defaultValue":D=f;break;case"multiple":M=f;default:f!==X&&pn(e,n,u,f,s,X)}n=D,a=M,s=gt,dt!=null?Mi(e,!!a,dt,!1):!!s!=!!a&&(n!=null?Mi(e,!!a,n,!0):Mi(e,!!a,a?[]:"",!1));return;case"textarea":gt=dt=null;for(D in a)if(u=a[D],a.hasOwnProperty(D)&&u!=null&&!s.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:pn(e,n,D,null,s,u)}for(M in s)if(u=s[M],f=a[M],s.hasOwnProperty(M)&&(u!=null||f!=null))switch(M){case"value":dt=u;break;case"defaultValue":gt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&pn(e,n,M,u,s,f)}Ke(e,dt,gt);return;case"option":for(var oe in a)dt=a[oe],a.hasOwnProperty(oe)&&dt!=null&&!s.hasOwnProperty(oe)&&(oe==="selected"?e.selected=!1:pn(e,n,oe,null,s,dt));for(X in s)dt=s[X],gt=a[X],s.hasOwnProperty(X)&&dt!==gt&&(dt!=null||gt!=null)&&(X==="selected"?e.selected=dt&&typeof dt!="function"&&typeof dt!="symbol":pn(e,n,X,dt,s,gt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _e in a)dt=a[_e],a.hasOwnProperty(_e)&&dt!=null&&!s.hasOwnProperty(_e)&&pn(e,n,_e,null,s,dt);for(ut in s)if(dt=s[ut],gt=a[ut],s.hasOwnProperty(ut)&&dt!==gt&&(dt!=null||gt!=null))switch(ut){case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,n));break;default:pn(e,n,ut,dt,s,gt)}return;default:if(bi(n)){for(var mn in a)dt=a[mn],a.hasOwnProperty(mn)&&dt!==void 0&&!s.hasOwnProperty(mn)&&rd(e,n,mn,void 0,s,dt);for(Mt in s)dt=s[Mt],gt=a[Mt],!s.hasOwnProperty(Mt)||dt===gt||dt===void 0&&gt===void 0||rd(e,n,Mt,dt,s,gt);return}}for(var tt in a)dt=a[tt],a.hasOwnProperty(tt)&&dt!=null&&!s.hasOwnProperty(tt)&&pn(e,n,tt,null,s,dt);for(Ct in s)dt=s[Ct],gt=a[Ct],!s.hasOwnProperty(Ct)||dt===gt||dt==null&&gt==null||pn(e,n,Ct,dt,s,gt)}function Jg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ty(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,M=u.initiatorType,D=u.duration;if(f&&D&&Jg(M)){for(M=0,D=u.responseEnd,s+=1;s<a.length;s++){var X=a[s],ut=X.startTime;if(ut>D)break;var Mt=X.transferSize,Ct=X.initiatorType;Mt&&Jg(Ct)&&(X=X.responseEnd,M+=Mt*(X<D?1:(D-ut)/(X-ut)))}if(--s,n+=8*(f+M)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var sd=null,od=null;function ou(e){return e.nodeType===9?e:e.ownerDocument}function $g(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function t_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function ld(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var cd=null;function Ay(){var e=window.event;return e&&e.type==="popstate"?e===cd?!1:(cd=e,!0):(cd=null,!1)}var e_=typeof setTimeout=="function"?setTimeout:void 0,Ry=typeof clearTimeout=="function"?clearTimeout:void 0,n_=typeof Promise=="function"?Promise:void 0,Cy=typeof queueMicrotask=="function"?queueMicrotask:typeof n_<"u"?function(e){return n_.resolve(null).then(e).catch(wy)}:e_;function wy(e){setTimeout(function(){throw e})}function Ir(e){return e==="head"}function i_(e,n){var a=n,s=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(u),Mo(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Dl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Dl(a);for(var f=a.firstChild;f;){var M=f.nextSibling,D=f.nodeName;f[Ji]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=M}}else a==="body"&&Dl(e.ownerDocument.body);a=u}while(a);Mo(n)}function a_(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function ud(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ud(a),is(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Dy(e,n,a,s){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Ji])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=oa(e.nextSibling),e===null)break}return null}function Uy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=oa(e.nextSibling),e===null))return null;return e}function r_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=oa(e.nextSibling),e===null))return null;return e}function fd(e){return e.data==="$?"||e.data==="$~"}function hd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ly(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function oa(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var dd=null;function s_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return oa(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function o_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function l_(e,n,a){switch(n=ou(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Dl(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);is(e)}var la=new Map,c_=new Set;function lu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ir=W.d;W.d={f:Ny,r:Oy,D:Py,C:Fy,L:Iy,m:By,X:Hy,S:zy,M:Gy};function Ny(){var e=ir.f(),n=$c();return e||n}function Oy(e){var n=Sa(e);n!==null&&n.tag===5&&n.type==="form"?A0(n):ir.r(e)}var xo=typeof document>"u"?null:document;function u_(e,n,a){var s=xo;if(s&&typeof n=="string"&&n){var u=Me(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),c_.has(u)||(c_.add(u),e={rel:e,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),ai(n,"link",e),w(n),s.head.appendChild(n)))}}function Py(e){ir.D(e),u_("dns-prefetch",e,null)}function Fy(e,n){ir.C(e,n),u_("preconnect",e,n)}function Iy(e,n,a){ir.L(e,n,a);var s=xo;if(s&&e&&n){var u='link[rel="preload"][as="'+Me(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Me(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Me(a.imageSizes)+'"]')):u+='[href="'+Me(e)+'"]';var f=u;switch(n){case"style":f=yo(e);break;case"script":f=So(e)}la.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),la.set(f,e),s.querySelector(u)!==null||n==="style"&&s.querySelector(Ul(f))||n==="script"&&s.querySelector(Ll(f))||(n=s.createElement("link"),ai(n,"link",e),w(n),s.head.appendChild(n)))}}function By(e,n){ir.m(e,n);var a=xo;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Me(s)+'"][href="'+Me(e)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=So(e)}if(!la.has(f)&&(e=g({rel:"modulepreload",href:e},n),la.set(f,e),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ll(f)))return}s=a.createElement("link"),ai(s,"link",e),w(s),a.head.appendChild(s)}}}function zy(e,n,a){ir.S(e,n,a);var s=xo;if(s&&e){var u=mi(s).hoistableStyles,f=yo(e);n=n||"default";var M=u.get(f);if(!M){var D={loading:0,preload:null};if(M=s.querySelector(Ul(f)))D.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=la.get(f))&&pd(e,a);var X=M=s.createElement("link");w(X),ai(X,"link",e),X._p=new Promise(function(ut,Mt){X.onload=ut,X.onerror=Mt}),X.addEventListener("load",function(){D.loading|=1}),X.addEventListener("error",function(){D.loading|=2}),D.loading|=4,cu(M,n,s)}M={type:"stylesheet",instance:M,count:1,state:D},u.set(f,M)}}}function Hy(e,n){ir.X(e,n);var a=xo;if(a&&e){var s=mi(a).hoistableScripts,u=So(e),f=s.get(u);f||(f=a.querySelector(Ll(u)),f||(e=g({src:e,async:!0},n),(n=la.get(u))&&md(e,n),f=a.createElement("script"),w(f),ai(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Gy(e,n){ir.M(e,n);var a=xo;if(a&&e){var s=mi(a).hoistableScripts,u=So(e),f=s.get(u);f||(f=a.querySelector(Ll(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=la.get(u))&&md(e,n),f=a.createElement("script"),w(f),ai(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function f_(e,n,a,s){var u=(u=nt.current)?lu(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=yo(a.href),a=mi(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=yo(a.href);var f=mi(u).hoistableStyles,M=f.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,M),(f=u.querySelector(Ul(e)))&&!f._p&&(M.instance=f,M.state.loading=5),la.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},la.set(e,a),f||Vy(u,e,a,M.state))),n&&s===null)throw Error(r(528,""));return M}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=So(a),a=mi(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function yo(e){return'href="'+Me(e)+'"'}function Ul(e){return'link[rel="stylesheet"]['+e+"]"}function h_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Vy(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),ai(n,"link",a),w(n),e.head.appendChild(n))}function So(e){return'[src="'+Me(e)+'"]'}function Ll(e){return"script[async]"+e}function d_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+Me(a.href)+'"]');if(s)return n.instance=s,w(s),s;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),w(s),ai(s,"style",u),cu(s,a.precedence,e),n.instance=s;case"stylesheet":u=yo(a.href);var f=e.querySelector(Ul(u));if(f)return n.state.loading|=4,n.instance=f,w(f),f;s=h_(a),(u=la.get(u))&&pd(s,u),f=(e.ownerDocument||e).createElement("link"),w(f);var M=f;return M._p=new Promise(function(D,X){M.onload=D,M.onerror=X}),ai(f,"link",s),n.state.loading|=4,cu(f,a.precedence,e),n.instance=f;case"script":return f=So(a.src),(u=e.querySelector(Ll(f)))?(n.instance=u,w(u),u):(s=a,(u=la.get(f))&&(s=g({},a),md(s,u)),e=e.ownerDocument||e,u=e.createElement("script"),w(u),ai(u,"link",s),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,cu(s,a.precedence,e));return n.instance}function cu(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,M=0;M<s.length;M++){var D=s[M];if(D.dataset.precedence===n)f=D;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function pd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function md(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var uu=null;function p_(e,n,a){if(uu===null){var s=new Map,u=uu=new Map;u.set(a,s)}else u=uu,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Ji]||f[bn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var M=f.getAttribute(n)||"";M=e+M;var D=s.get(M);D?D.push(f):s.set(M,[f])}}return s}function m_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function ky(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function g_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Xy(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=yo(s.href),f=n.querySelector(Ul(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=fu.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,w(f);return}f=n.ownerDocument||n,s=h_(s),(u=la.get(u))&&pd(s,u),f=f.createElement("link"),w(f);var M=f;M._p=new Promise(function(D,X){M.onload=D,M.onerror=X}),ai(f,"link",s),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=fu.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var gd=0;function Wy(e,n){return e.stylesheets&&e.count===0&&du(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&du(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&gd===0&&(gd=62500*Ty());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&du(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>gd?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function fu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)du(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var hu=null;function du(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,hu=new Map,n.forEach(Yy,e),hu=null,fu.call(e))}function Yy(e,n){if(!(n.state.loading&4)){var a=hu.get(e);if(a)var s=a.get(null);else{a=new Map,hu.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var M=u[f];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),s=M)}s&&a.set(null,s)}u=n.instance,M=u.getAttribute("data-precedence"),f=a.get(M)||s,f===s&&a.set(null,u),a.set(M,u),this.count++,s=fu.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Nl={$$typeof:N,Provider:null,Consumer:null,_currentValue:at,_currentValue2:at,_threadCount:0};function qy(e,n,a,s,u,f,M,D,X){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xe(0),this.hiddenUpdates=Xe(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=X,this.incompleteTransitions=new Map}function __(e,n,a,s,u,f,M,D,X,ut,Mt,Ct){return e=new qy(e,n,a,M,X,ut,Mt,Ct,D),n=1,f===!0&&(n|=24),f=zi(3,null,null,n),e.current=f,f.stateNode=e,n=Zf(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},$f(f),e}function v_(e){return e?(e=Qs,e):Qs}function x_(e,n,a,s,u,f){u=v_(u),s.context===null?s.context=u:s.pendingContext=u,s=Ar(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Rr(e,s,n),a!==null&&(Ui(a,e,n),fl(a,e,n))}function y_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function _d(e,n){y_(e,n),(e=e.alternate)&&y_(e,n)}function S_(e){if(e.tag===13||e.tag===31){var n=ps(e,67108864);n!==null&&Ui(n,e,67108864),_d(e,67108864)}}function M_(e){if(e.tag===13||e.tag===31){var n=Xi();n=mr(n);var a=ps(e,n);a!==null&&Ui(a,e,n),_d(e,n)}}var pu=!0;function jy(e,n,a,s){var u=z.T;z.T=null;var f=W.p;try{W.p=2,vd(e,n,a,s)}finally{W.p=f,z.T=u}}function Zy(e,n,a,s){var u=z.T;z.T=null;var f=W.p;try{W.p=8,vd(e,n,a,s)}finally{W.p=f,z.T=u}}function vd(e,n,a,s){if(pu){var u=xd(s);if(u===null)ad(e,n,s,mu,a),E_(e,s);else if(Qy(u,e,n,a,s))s.stopPropagation();else if(E_(e,s),n&4&&-1<Ky.indexOf(e)){for(;u!==null;){var f=Sa(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var M=xt(f.pendingLanes);if(M!==0){var D=f;for(D.pendingLanes|=2,D.entangledLanes|=2;M;){var X=1<<31-Zt(M);D.entanglements[1]|=X,M&=~X}Ca(f),(on&6)===0&&(Qc=T()+500,Rl(0))}}break;case 31:case 13:D=ps(f,2),D!==null&&Ui(D,f,2),$c(),_d(f,2)}if(f=xd(s),f===null&&ad(e,n,s,mu,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else ad(e,n,s,null,a)}}function xd(e){return e=Ko(e),yd(e)}var mu=null;function yd(e){if(mu=null,e=Si(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return mu=e,null}function b_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Q()){case bt:return 2;case wt:return 8;case _t:case le:return 32;case Xt:return 268435456;default:return 32}default:return 32}}var Sd=!1,Br=null,zr=null,Hr=null,Ol=new Map,Pl=new Map,Gr=[],Ky="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function E_(e,n){switch(e){case"focusin":case"focusout":Br=null;break;case"dragenter":case"dragleave":zr=null;break;case"mouseover":case"mouseout":Hr=null;break;case"pointerover":case"pointerout":Ol.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pl.delete(n.pointerId)}}function Fl(e,n,a,s,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Sa(n),n!==null&&S_(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Qy(e,n,a,s,u){switch(n){case"focusin":return Br=Fl(Br,e,n,a,s,u),!0;case"dragenter":return zr=Fl(zr,e,n,a,s,u),!0;case"mouseover":return Hr=Fl(Hr,e,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return Ol.set(f,Fl(Ol.get(f)||null,e,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,Pl.set(f,Fl(Pl.get(f)||null,e,n,a,s,u)),!0}return!1}function T_(e){var n=Si(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Ki(e.priority,function(){M_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Ki(e.priority,function(){M_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=xd(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Zo=s,a.target.dispatchEvent(s),Zo=null}else return n=Sa(a),n!==null&&S_(n),e.blockedOn=a,!1;n.shift()}return!0}function A_(e,n,a){gu(e)&&a.delete(n)}function Jy(){Sd=!1,Br!==null&&gu(Br)&&(Br=null),zr!==null&&gu(zr)&&(zr=null),Hr!==null&&gu(Hr)&&(Hr=null),Ol.forEach(A_),Pl.forEach(A_)}function _u(e,n){e.blockedOn===n&&(e.blockedOn=null,Sd||(Sd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Jy)))}var vu=null;function R_(e){vu!==e&&(vu=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){vu===e&&(vu=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],u=e[n+2];if(typeof s!="function"){if(yd(s||a)===null)continue;break}var f=Sa(a);f!==null&&(e.splice(n,3),n-=3,xh(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function Mo(e){function n(X){return _u(X,e)}Br!==null&&_u(Br,e),zr!==null&&_u(zr,e),Hr!==null&&_u(Hr,e),Ol.forEach(n),Pl.forEach(n);for(var a=0;a<Gr.length;a++){var s=Gr[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Gr.length&&(a=Gr[0],a.blockedOn===null);)T_(a),a.blockedOn===null&&Gr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],M=u[Rn]||null;if(typeof f=="function")M||R_(a);else if(M){var D=null;if(f&&f.hasAttribute("formAction")){if(u=f,M=f[Rn]||null)D=M.formAction;else if(yd(u)!==null)continue}else D=M.action;typeof D=="function"?a[s+1]=D:(a.splice(s,3),s-=3),R_(a)}}}function C_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(M){return u=M})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Md(e){this._internalRoot=e}xu.prototype.render=Md.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Xi();x_(a,s,e,n,null,null)},xu.prototype.unmount=Md.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;x_(e.current,2,null,e,null,null),$c(),n[Fi]=null}};function xu(e){this._internalRoot=e}xu.prototype.unstable_scheduleHydration=function(e){if(e){var n=es();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Gr.length&&n!==0&&n<Gr[a].priority;a++);Gr.splice(a,0,e),a===0&&T_(e)}};var w_=t.version;if(w_!=="19.2.4")throw Error(r(527,w_,"19.2.4"));W.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var $y={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yu.isDisabled&&yu.supportsFiber)try{Pt=yu.inject($y),Ht=yu}catch{}}return Bl.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",u=F0,f=I0,M=B0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError)),n=__(e,1,!1,null,null,a,s,null,u,f,M,C_),e[Fi]=n.current,id(e),new Md(n)},Bl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,u="",f=F0,M=I0,D=B0,X=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(D=a.onRecoverableError),a.formState!==void 0&&(X=a.formState)),n=__(e,1,!0,n,a??null,s,u,X,f,M,D,C_),n.context=v_(null),a=n.current,s=Xi(),s=mr(s),u=Ar(s),u.callback=null,Rr(a,u,s),a=s,n.current.lanes=a,Bn(n,a),Ca(n),e[Fi]=n.current,id(e),new xu(n)},Bl.version="19.2.4",Bl}var z_;function cS(){if(z_)return Td.exports;z_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Td.exports=lS(),Td.exports}var uS=cS();const lm="182",Bo={ROTATE:0,DOLLY:1,PAN:2},Io={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fS=0,H_=1,hS=2,Xu=1,dS=2,jl=3,Jr=0,Pi=1,ji=2,fr=0,zo=1,G_=2,V_=3,k_=4,pS=5,Ns=100,mS=101,gS=102,_S=103,vS=104,xS=200,yS=201,SS=202,MS=203,hp=204,dp=205,bS=206,ES=207,TS=208,AS=209,RS=210,CS=211,wS=212,DS=213,US=214,pp=0,mp=1,gp=2,Go=3,_p=4,vp=5,xp=6,yp=7,$v=0,LS=1,NS=2,Na=0,tx=1,ex=2,nx=3,cm=4,ix=5,ax=6,rx=7,sx=300,Is=301,Vo=302,Sp=303,Mp=304,sf=306,bp=1e3,ur=1001,Ep=1002,ri=1003,OS=1004,Su=1005,di=1006,wd=1007,Ps=1008,Zi=1009,ox=1010,lx=1011,$l=1012,um=1013,Pa=1014,Ua=1015,dr=1016,fm=1017,hm=1018,tc=1020,cx=35902,ux=35899,fx=1021,hx=1022,ya=1023,pr=1026,Fs=1027,dx=1028,dm=1029,ko=1030,pm=1031,mm=1033,Wu=33776,Yu=33777,qu=33778,ju=33779,Tp=35840,Ap=35841,Rp=35842,Cp=35843,wp=36196,Dp=37492,Up=37496,Lp=37488,Np=37489,Op=37490,Pp=37491,Fp=37808,Ip=37809,Bp=37810,zp=37811,Hp=37812,Gp=37813,Vp=37814,kp=37815,Xp=37816,Wp=37817,Yp=37818,qp=37819,jp=37820,Zp=37821,Kp=36492,Qp=36494,Jp=36495,$p=36283,tm=36284,em=36285,nm=36286,PS=3200,px=0,FS=1,Kr="",qi="srgb",Xo="srgb-linear",tf="linear",fn="srgb",bo=7680,X_=519,IS=512,BS=513,zS=514,gm=515,HS=516,GS=517,_m=518,VS=519,W_=35044,Y_="300 es",La=2e3,ef=2001;function mx(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function nf(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function kS(){const o=nf("canvas");return o.style.display="block",o}const q_={};function j_(...o){const t="THREE."+o.shift();console.log(t,...o)}function Se(...o){const t="THREE."+o.shift();console.warn(t,...o)}function en(...o){const t="THREE."+o.shift();console.error(t,...o)}function ec(...o){const t=o.join(" ");t in q_||(q_[t]=!0,Se(...o))}function XS(o,t,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class zs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const fi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zu=Math.PI/180,im=180/Math.PI;function ic(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(fi[o&255]+fi[o>>8&255]+fi[o>>16&255]+fi[o>>24&255]+"-"+fi[t&255]+fi[t>>8&255]+"-"+fi[t>>16&15|64]+fi[t>>24&255]+"-"+fi[i&63|128]+fi[i>>8&255]+"-"+fi[i>>16&255]+fi[i>>24&255]+fi[r&255]+fi[r>>8&255]+fi[r>>16&255]+fi[r>>24&255]).toLowerCase()}function Fe(o,t,i){return Math.max(t,Math.min(i,o))}function WS(o,t){return(o%t+t)%t}function Dd(o,t,i){return(1-i)*o+i*t}function zl(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Li(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const YS={DEG2RAD:Zu};class we{constructor(t=0,i=0){we.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Fe(this.x,t.x,i.x),this.y=Fe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Fe(this.x,t,i),this.y=Fe(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Fe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Fe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*r-h*l+t.x,this.y=c*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bs{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],_=r[l+2],g=r[l+3],x=c[h+0],b=c[h+1],A=c[h+2],R=c[h+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g;return}if(d>=1){t[i+0]=x,t[i+1]=b,t[i+2]=A,t[i+3]=R;return}if(g!==R||m!==x||p!==b||_!==A){let E=m*x+p*b+_*A+g*R;E<0&&(x=-x,b=-b,A=-A,R=-R,E=-E);let y=1-d;if(E<.9995){const F=Math.acos(E),N=Math.sin(F);y=Math.sin(y*F)/N,d=Math.sin(d*F)/N,m=m*y+x*d,p=p*y+b*d,_=_*y+A*d,g=g*y+R*d}else{m=m*y+x*d,p=p*y+b*d,_=_*y+A*d,g=g*y+R*d;const F=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=F,p*=F,_*=F,g*=F}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g}static multiplyQuaternionsFlat(t,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],_=r[l+3],g=c[h],x=c[h+1],b=c[h+2],A=c[h+3];return t[i]=d*A+_*g+m*b-p*x,t[i+1]=m*A+_*x+p*g-d*b,t[i+2]=p*A+_*b+d*x-m*g,t[i+3]=_*A-d*g-m*x-p*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),_=d(l/2),g=d(c/2),x=m(r/2),b=m(l/2),A=m(c/2);switch(h){case"XYZ":this._x=x*_*g+p*b*A,this._y=p*b*g-x*_*A,this._z=p*_*A+x*b*g,this._w=p*_*g-x*b*A;break;case"YXZ":this._x=x*_*g+p*b*A,this._y=p*b*g-x*_*A,this._z=p*_*A-x*b*g,this._w=p*_*g+x*b*A;break;case"ZXY":this._x=x*_*g-p*b*A,this._y=p*b*g+x*_*A,this._z=p*_*A+x*b*g,this._w=p*_*g-x*b*A;break;case"ZYX":this._x=x*_*g-p*b*A,this._y=p*b*g+x*_*A,this._z=p*_*A-x*b*g,this._w=p*_*g+x*b*A;break;case"YZX":this._x=x*_*g+p*b*A,this._y=p*b*g+x*_*A,this._z=p*_*A-x*b*g,this._w=p*_*g-x*b*A;break;case"XZY":this._x=x*_*g-p*b*A,this._y=p*b*g-x*_*A,this._z=p*_*A+x*b*g,this._w=p*_*g+x*b*A;break;default:Se("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],g=i[10],x=r+d+g;if(x>0){const b=.5/Math.sqrt(x+1);this._w=.25/b,this._x=(_-m)*b,this._y=(c-p)*b,this._z=(h-l)*b}else if(r>d&&r>g){const b=2*Math.sqrt(1+r-d-g);this._w=(_-m)/b,this._x=.25*b,this._y=(l+h)/b,this._z=(c+p)/b}else if(d>g){const b=2*Math.sqrt(1+d-r-g);this._w=(c-p)/b,this._x=(l+h)/b,this._y=.25*b,this._z=(m+_)/b}else{const b=2*Math.sqrt(1+g-r-d);this._w=(h-l)/b,this._x=(c+p)/b,this._y=(m+_)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+h*d+l*p-c*m,this._y=l*_+h*m+c*d-r*p,this._z=c*_+h*p+r*m-l*d,this._w=h*_-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let r=t._x,l=t._y,c=t._z,h=t._w,d=this.dot(t);d<0&&(r=-r,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class et{constructor(t=0,i=0,r=0){et.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Z_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Z_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),_=2*(d*i-c*l),g=2*(c*r-h*i);return this.x=i+m*p+h*g-d*_,this.y=r+m*_+d*p-c*g,this.z=l+m*g+c*_-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Fe(this.x,t.x,i.x),this.y=Fe(this.y,t.y,i.y),this.z=Fe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Fe(this.x,t,i),this.y=Fe(this.y,t,i),this.z=Fe(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Fe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Ud.copy(this).projectOnVector(t),this.sub(Ud)}reflect(t){return this.sub(Ud.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Fe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ud=new et,Z_=new Bs;class Oe{constructor(t,i,r,l,c,h,d,m,p){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p)}set(t,i,r,l,c,h,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=r,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],_=r[4],g=r[7],x=r[2],b=r[5],A=r[8],R=l[0],E=l[3],y=l[6],F=l[1],N=l[4],P=l[7],H=l[2],O=l[5],B=l[8];return c[0]=h*R+d*F+m*H,c[3]=h*E+d*N+m*O,c[6]=h*y+d*P+m*B,c[1]=p*R+_*F+g*H,c[4]=p*E+_*N+g*O,c[7]=p*y+_*P+g*B,c[2]=x*R+b*F+A*H,c[5]=x*E+b*N+A*O,c[8]=x*y+b*P+A*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*h*_-i*d*p-r*c*_+r*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],g=_*h-d*p,x=d*m-_*c,b=p*c-h*m,A=i*g+r*x+l*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=g*R,t[1]=(l*p-_*r)*R,t[2]=(d*r-l*h)*R,t[3]=x*R,t[4]=(_*i-l*m)*R,t[5]=(l*c-d*i)*R,t[6]=b*R,t[7]=(r*m-p*i)*R,t[8]=(h*i-r*c)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Ld.makeScale(t,i)),this}rotate(t){return this.premultiply(Ld.makeRotation(-t)),this}translate(t,i){return this.premultiply(Ld.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ld=new Oe,K_=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Q_=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qS(){const o={enabled:!0,workingColorSpace:Xo,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===fn&&(l.r=hr(l.r),l.g=hr(l.g),l.b=hr(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===fn&&(l.r=Ho(l.r),l.g=Ho(l.g),l.b=Ho(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Kr?tf:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ec("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ec("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Xo]:{primaries:t,whitePoint:r,transfer:tf,toXYZ:K_,fromXYZ:Q_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:qi},outputColorSpaceConfig:{drawingBufferColorSpace:qi}},[qi]:{primaries:t,whitePoint:r,transfer:fn,toXYZ:K_,fromXYZ:Q_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:qi}}}),o}const Qe=qS();function hr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ho(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Eo;class jS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{Eo===void 0&&(Eo=nf("canvas")),Eo.width=t.width,Eo.height=t.height;const l=Eo.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=Eo}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=nf("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=hr(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(hr(i[r]/255)*255):i[r]=hr(i[r]);return{data:i,width:t.width,height:t.height}}else return Se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ZS=0;class vm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=ic(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Nd(l[h].image)):c.push(Nd(l[h]))}else c=Nd(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function Nd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?jS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(Se("Texture: Unable to serialize Texture."),{})}let KS=0;const Od=new et;class xi extends zs{constructor(t=xi.DEFAULT_IMAGE,i=xi.DEFAULT_MAPPING,r=ur,l=ur,c=di,h=Ps,d=ya,m=Zi,p=xi.DEFAULT_ANISOTROPY,_=Kr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=ic(),this.name="",this.source=new vm(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Od).x}get height(){return this.source.getSize(Od).y}get depth(){return this.source.getSize(Od).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){Se(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Se(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bp:t.x=t.x-Math.floor(t.x);break;case ur:t.x=t.x<0?0:1;break;case Ep:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bp:t.y=t.y-Math.floor(t.y);break;case ur:t.y=t.y<0?0:1;break;case Ep:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}xi.DEFAULT_IMAGE=null;xi.DEFAULT_MAPPING=sx;xi.DEFAULT_ANISOTROPY=1;class Nn{constructor(t=0,i=0,r=0,l=1){Nn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],_=m[4],g=m[8],x=m[1],b=m[5],A=m[9],R=m[2],E=m[6],y=m[10];if(Math.abs(_-x)<.01&&Math.abs(g-R)<.01&&Math.abs(A-E)<.01){if(Math.abs(_+x)<.1&&Math.abs(g+R)<.1&&Math.abs(A+E)<.1&&Math.abs(p+b+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,P=(b+1)/2,H=(y+1)/2,O=(_+x)/4,B=(g+R)/4,j=(A+E)/4;return N>P&&N>H?N<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(N),l=O/r,c=B/r):P>H?P<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(P),r=O/l,c=j/l):H<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),r=B/c,l=j/c),this.set(r,l,c,i),this}let F=Math.sqrt((E-A)*(E-A)+(g-R)*(g-R)+(x-_)*(x-_));return Math.abs(F)<.001&&(F=1),this.x=(E-A)/F,this.y=(g-R)/F,this.z=(x-_)/F,this.w=Math.acos((p+b+y-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Fe(this.x,t.x,i.x),this.y=Fe(this.y,t.y,i.y),this.z=Fe(this.z,t.z,i.z),this.w=Fe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Fe(this.x,t,i),this.y=Fe(this.y,t,i),this.z=Fe(this.z,t,i),this.w=Fe(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Fe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class QS extends zs{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new Nn(0,0,t,i),this.scissorTest=!1,this.viewport=new Nn(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new xi(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:di,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new vm(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oa extends QS{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class gx extends xi{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ri,this.minFilter=ri,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class JS extends xi{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ri,this.minFilter=ri,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yo{constructor(t=new et(1/0,1/0,1/0),i=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(ga.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(ga.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=ga.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,ga):ga.fromBufferAttribute(c,h),ga.applyMatrix4(t.matrixWorld),this.expandByPoint(ga);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mu.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Mu.copy(r.boundingBox)),Mu.applyMatrix4(t.matrixWorld),this.union(Mu)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ga),ga.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hl),bu.subVectors(this.max,Hl),To.subVectors(t.a,Hl),Ao.subVectors(t.b,Hl),Ro.subVectors(t.c,Hl),kr.subVectors(Ao,To),Xr.subVectors(Ro,Ao),Rs.subVectors(To,Ro);let i=[0,-kr.z,kr.y,0,-Xr.z,Xr.y,0,-Rs.z,Rs.y,kr.z,0,-kr.x,Xr.z,0,-Xr.x,Rs.z,0,-Rs.x,-kr.y,kr.x,0,-Xr.y,Xr.x,0,-Rs.y,Rs.x,0];return!Pd(i,To,Ao,Ro,bu)||(i=[1,0,0,0,1,0,0,0,1],!Pd(i,To,Ao,Ro,bu))?!1:(Eu.crossVectors(kr,Xr),i=[Eu.x,Eu.y,Eu.z],Pd(i,To,Ao,Ro,bu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ga).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ga).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ar),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ar=[new et,new et,new et,new et,new et,new et,new et,new et],ga=new et,Mu=new Yo,To=new et,Ao=new et,Ro=new et,kr=new et,Xr=new et,Rs=new et,Hl=new et,bu=new et,Eu=new et,Cs=new et;function Pd(o,t,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){Cs.fromArray(o,c);const d=l.x*Math.abs(Cs.x)+l.y*Math.abs(Cs.y)+l.z*Math.abs(Cs.z),m=t.dot(Cs),p=i.dot(Cs),_=r.dot(Cs);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const $S=new Yo,Gl=new et,Fd=new et;class of{constructor(t=new et,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):$S.setFromPoints(t).getCenter(r);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gl.subVectors(t,this.center);const i=Gl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Gl,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gl.copy(t.center).add(Fd)),this.expandByPoint(Gl.copy(t.center).sub(Fd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const rr=new et,Id=new et,Tu=new et,Wr=new et,Bd=new et,Au=new et,zd=new et;class xm{constructor(t=new et,i=new et(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,rr)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=rr.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(rr.copy(this.origin).addScaledVector(this.direction,i),rr.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Id.copy(t).add(i).multiplyScalar(.5),Tu.copy(i).sub(t).normalize(),Wr.copy(this.origin).sub(Id);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Tu),d=Wr.dot(this.direction),m=-Wr.dot(Tu),p=Wr.lengthSq(),_=Math.abs(1-h*h);let g,x,b,A;if(_>0)if(g=h*m-d,x=h*d-m,A=c*_,g>=0)if(x>=-A)if(x<=A){const R=1/_;g*=R,x*=R,b=g*(g+h*x+2*d)+x*(h*g+x+2*m)+p}else x=c,g=Math.max(0,-(h*x+d)),b=-g*g+x*(x+2*m)+p;else x=-c,g=Math.max(0,-(h*x+d)),b=-g*g+x*(x+2*m)+p;else x<=-A?(g=Math.max(0,-(-h*c+d)),x=g>0?-c:Math.min(Math.max(-c,-m),c),b=-g*g+x*(x+2*m)+p):x<=A?(g=0,x=Math.min(Math.max(-c,-m),c),b=x*(x+2*m)+p):(g=Math.max(0,-(h*c+d)),x=g>0?c:Math.min(Math.max(-c,-m),c),b=-g*g+x*(x+2*m)+p);else x=h>0?-c:c,g=Math.max(0,-(h*x+d)),b=-g*g+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Id).addScaledVector(Tu,x),b}intersectSphere(t,i){rr.subVectors(t.center,this.origin);const r=rr.dot(this.direction),l=rr.dot(rr)-r*r,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(r=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(r=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),_>=0?(c=(t.min.y-x.y)*_,h=(t.max.y-x.y)*_):(c=(t.max.y-x.y)*_,h=(t.min.y-x.y)*_),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),g>=0?(d=(t.min.z-x.z)*g,m=(t.max.z-x.z)*g):(d=(t.max.z-x.z)*g,m=(t.min.z-x.z)*g),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,rr)!==null}intersectTriangle(t,i,r,l,c){Bd.subVectors(i,t),Au.subVectors(r,t),zd.crossVectors(Bd,Au);let h=this.direction.dot(zd),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Wr.subVectors(this.origin,t);const m=d*this.direction.dot(Au.crossVectors(Wr,Au));if(m<0)return null;const p=d*this.direction.dot(Bd.cross(Wr));if(p<0||m+p>h)return null;const _=-d*Wr.dot(zd);return _<0?null:this.at(_/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class An{constructor(t,i,r,l,c,h,d,m,p,_,g,x,b,A,R,E){An.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p,_,g,x,b,A,R,E)}set(t,i,r,l,c,h,d,m,p,_,g,x,b,A,R,E){const y=this.elements;return y[0]=t,y[4]=i,y[8]=r,y[12]=l,y[1]=c,y[5]=h,y[9]=d,y[13]=m,y[2]=p,y[6]=_,y[10]=g,y[14]=x,y[3]=b,y[7]=A,y[11]=R,y[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new An().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,r=t.elements,l=1/Co.setFromMatrixColumn(t,0).length(),c=1/Co.setFromMatrixColumn(t,1).length(),h=1/Co.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const x=h*_,b=h*g,A=d*_,R=d*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=b+A*p,i[5]=x-R*p,i[9]=-d*m,i[2]=R-x*p,i[6]=A+b*p,i[10]=h*m}else if(t.order==="YXZ"){const x=m*_,b=m*g,A=p*_,R=p*g;i[0]=x+R*d,i[4]=A*d-b,i[8]=h*p,i[1]=h*g,i[5]=h*_,i[9]=-d,i[2]=b*d-A,i[6]=R+x*d,i[10]=h*m}else if(t.order==="ZXY"){const x=m*_,b=m*g,A=p*_,R=p*g;i[0]=x-R*d,i[4]=-h*g,i[8]=A+b*d,i[1]=b+A*d,i[5]=h*_,i[9]=R-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const x=h*_,b=h*g,A=d*_,R=d*g;i[0]=m*_,i[4]=A*p-b,i[8]=x*p+R,i[1]=m*g,i[5]=R*p+x,i[9]=b*p-A,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,b=h*p,A=d*m,R=d*p;i[0]=m*_,i[4]=R-x*g,i[8]=A*g+b,i[1]=g,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=b*g+A,i[10]=x-R*g}else if(t.order==="XZY"){const x=h*m,b=h*p,A=d*m,R=d*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=x*g+R,i[5]=h*_,i[9]=b*g-A,i[2]=A*g-b,i[6]=d*_,i[10]=R*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tM,t,eM)}lookAt(t,i,r){const l=this.elements;return Wi.subVectors(t,i),Wi.lengthSq()===0&&(Wi.z=1),Wi.normalize(),Yr.crossVectors(r,Wi),Yr.lengthSq()===0&&(Math.abs(r.z)===1?Wi.x+=1e-4:Wi.z+=1e-4,Wi.normalize(),Yr.crossVectors(r,Wi)),Yr.normalize(),Ru.crossVectors(Wi,Yr),l[0]=Yr.x,l[4]=Ru.x,l[8]=Wi.x,l[1]=Yr.y,l[5]=Ru.y,l[9]=Wi.y,l[2]=Yr.z,l[6]=Ru.z,l[10]=Wi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],_=r[1],g=r[5],x=r[9],b=r[13],A=r[2],R=r[6],E=r[10],y=r[14],F=r[3],N=r[7],P=r[11],H=r[15],O=l[0],B=l[4],j=l[8],C=l[12],L=l[1],k=l[5],J=l[9],rt=l[13],pt=l[2],yt=l[6],z=l[10],W=l[14],at=l[3],Ot=l[7],Lt=l[11],G=l[15];return c[0]=h*O+d*L+m*pt+p*at,c[4]=h*B+d*k+m*yt+p*Ot,c[8]=h*j+d*J+m*z+p*Lt,c[12]=h*C+d*rt+m*W+p*G,c[1]=_*O+g*L+x*pt+b*at,c[5]=_*B+g*k+x*yt+b*Ot,c[9]=_*j+g*J+x*z+b*Lt,c[13]=_*C+g*rt+x*W+b*G,c[2]=A*O+R*L+E*pt+y*at,c[6]=A*B+R*k+E*yt+y*Ot,c[10]=A*j+R*J+E*z+y*Lt,c[14]=A*C+R*rt+E*W+y*G,c[3]=F*O+N*L+P*pt+H*at,c[7]=F*B+N*k+P*yt+H*Ot,c[11]=F*j+N*J+P*z+H*Lt,c[15]=F*C+N*rt+P*W+H*G,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],_=t[2],g=t[6],x=t[10],b=t[14],A=t[3],R=t[7],E=t[11],y=t[15],F=m*b-p*x,N=d*b-p*g,P=d*x-m*g,H=h*b-p*_,O=h*x-m*_,B=h*g-d*_;return i*(R*F-E*N+y*P)-r*(A*F-E*H+y*O)+l*(A*N-R*H+y*B)-c*(A*P-R*O+E*B)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],g=t[9],x=t[10],b=t[11],A=t[12],R=t[13],E=t[14],y=t[15],F=g*E*p-R*x*p+R*m*b-d*E*b-g*m*y+d*x*y,N=A*x*p-_*E*p-A*m*b+h*E*b+_*m*y-h*x*y,P=_*R*p-A*g*p+A*d*b-h*R*b-_*d*y+h*g*y,H=A*g*m-_*R*m-A*d*x+h*R*x+_*d*E-h*g*E,O=i*F+r*N+l*P+c*H;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/O;return t[0]=F*B,t[1]=(R*x*c-g*E*c-R*l*b+r*E*b+g*l*y-r*x*y)*B,t[2]=(d*E*c-R*m*c+R*l*p-r*E*p-d*l*y+r*m*y)*B,t[3]=(g*m*c-d*x*c-g*l*p+r*x*p+d*l*b-r*m*b)*B,t[4]=N*B,t[5]=(_*E*c-A*x*c+A*l*b-i*E*b-_*l*y+i*x*y)*B,t[6]=(A*m*c-h*E*c-A*l*p+i*E*p+h*l*y-i*m*y)*B,t[7]=(h*x*c-_*m*c+_*l*p-i*x*p-h*l*b+i*m*b)*B,t[8]=P*B,t[9]=(A*g*c-_*R*c-A*r*b+i*R*b+_*r*y-i*g*y)*B,t[10]=(h*R*c-A*d*c+A*r*p-i*R*p-h*r*y+i*d*y)*B,t[11]=(_*d*c-h*g*c-_*r*p+i*g*p+h*r*b-i*d*b)*B,t[12]=H*B,t[13]=(_*R*l-A*g*l+A*r*x-i*R*x-_*r*E+i*g*E)*B,t[14]=(A*d*l-h*R*l-A*r*m+i*R*m+h*r*E-i*d*E)*B,t[15]=(h*g*l-_*d*l+_*r*m-i*g*m-h*r*x+i*d*x)*B,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=t.x,d=t.y,m=t.z,p=c*h,_=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+r,_*m-l*h,0,p*m-l*d,_*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,h){return this.set(1,r,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,_=h+h,g=d+d,x=c*p,b=c*_,A=c*g,R=h*_,E=h*g,y=d*g,F=m*p,N=m*_,P=m*g,H=r.x,O=r.y,B=r.z;return l[0]=(1-(R+y))*H,l[1]=(b+P)*H,l[2]=(A-N)*H,l[3]=0,l[4]=(b-P)*O,l[5]=(1-(x+y))*O,l[6]=(E+F)*O,l[7]=0,l[8]=(A+N)*B,l[9]=(E-F)*B,l[10]=(1-(x+R))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let c=Co.set(l[0],l[1],l[2]).length();const h=Co.set(l[4],l[5],l[6]).length(),d=Co.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),_a.copy(this);const p=1/c,_=1/h,g=1/d;return _a.elements[0]*=p,_a.elements[1]*=p,_a.elements[2]*=p,_a.elements[4]*=_,_a.elements[5]*=_,_a.elements[6]*=_,_a.elements[8]*=g,_a.elements[9]*=g,_a.elements[10]*=g,i.setFromRotationMatrix(_a),r.x=c,r.y=h,r.z=d,this}makePerspective(t,i,r,l,c,h,d=La,m=!1){const p=this.elements,_=2*c/(i-t),g=2*c/(r-l),x=(i+t)/(i-t),b=(r+l)/(r-l);let A,R;if(m)A=c/(h-c),R=h*c/(h-c);else if(d===La)A=-(h+c)/(h-c),R=-2*h*c/(h-c);else if(d===ef)A=-h/(h-c),R=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=b,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,h,d=La,m=!1){const p=this.elements,_=2/(i-t),g=2/(r-l),x=-(i+t)/(i-t),b=-(r+l)/(r-l);let A,R;if(m)A=1/(h-c),R=h/(h-c);else if(d===La)A=-2/(h-c),R=-(h+c)/(h-c);else if(d===ef)A=-1/(h-c),R=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=b,p[2]=0,p[6]=0,p[10]=A,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const Co=new et,_a=new An,tM=new et(0,0,0),eM=new et(1,1,1),Yr=new et,Ru=new et,Wi=new et,J_=new An,$_=new Bs;class Fa{constructor(t=0,i=0,r=0,l=Fa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],g=l[2],x=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(Fe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,b),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,b),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,b),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Fe(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,b),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Fe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,b));break;case"XZY":this._z=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,b),this._y=0);break;default:Se("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return J_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(J_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return $_.setFromEuler(this),this.setFromQuaternion($_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fa.DEFAULT_ORDER="XYZ";class _x{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let nM=0;const tv=new et,wo=new Bs,sr=new An,Cu=new et,Vl=new et,iM=new et,aM=new Bs,ev=new et(1,0,0),nv=new et(0,1,0),iv=new et(0,0,1),av={type:"added"},rM={type:"removed"},Do={type:"childadded",child:null},Hd={type:"childremoved",child:null};class oi extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=ic(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=oi.DEFAULT_UP.clone();const t=new et,i=new Fa,r=new Bs,l=new et(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new An},normalMatrix:{value:new Oe}}),this.matrix=new An,this.matrixWorld=new An,this.matrixAutoUpdate=oi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=oi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _x,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return wo.setFromAxisAngle(t,i),this.quaternion.multiply(wo),this}rotateOnWorldAxis(t,i){return wo.setFromAxisAngle(t,i),this.quaternion.premultiply(wo),this}rotateX(t){return this.rotateOnAxis(ev,t)}rotateY(t){return this.rotateOnAxis(nv,t)}rotateZ(t){return this.rotateOnAxis(iv,t)}translateOnAxis(t,i){return tv.copy(t).applyQuaternion(this.quaternion),this.position.add(tv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(ev,t)}translateY(t){return this.translateOnAxis(nv,t)}translateZ(t){return this.translateOnAxis(iv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(sr.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Cu.copy(t):Cu.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Vl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sr.lookAt(Vl,Cu,this.up):sr.lookAt(Cu,Vl,this.up),this.quaternion.setFromRotationMatrix(sr),l&&(sr.extractRotation(l.matrixWorld),wo.setFromRotationMatrix(sr),this.quaternion.premultiply(wo.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(en("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(av),Do.child=t,this.dispatchEvent(Do),Do.child=null):en("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(rM),Hd.child=t,this.dispatchEvent(Hd),Hd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),sr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),sr.multiply(t.parent.matrixWorld)),t.applyMatrix4(sr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(av),Do.child=t,this.dispatchEvent(Do),Do.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vl,t,iM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vl,aM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),_=h(t.images),g=h(t.shapes),x=h(t.skeletons),b=h(t.animations),A=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),b.length>0&&(r.animations=b),A.length>0&&(r.nodes=A)}return r.object=l,r;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}oi.DEFAULT_UP=new et(0,1,0);oi.DEFAULT_MATRIX_AUTO_UPDATE=!0;oi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const va=new et,or=new et,Gd=new et,lr=new et,Uo=new et,Lo=new et,rv=new et,Vd=new et,kd=new et,Xd=new et,Wd=new Nn,Yd=new Nn,qd=new Nn;class xa{constructor(t=new et,i=new et,r=new et){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),va.subVectors(t,i),l.cross(va);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){va.subVectors(l,i),or.subVectors(r,i),Gd.subVectors(t,i);const h=va.dot(va),d=va.dot(or),m=va.dot(Gd),p=or.dot(or),_=or.dot(Gd),g=h*p-d*d;if(g===0)return c.set(0,0,0),null;const x=1/g,b=(p*m-d*_)*x,A=(h*_-d*m)*x;return c.set(1-b-A,A,b)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,lr)===null?!1:lr.x>=0&&lr.y>=0&&lr.x+lr.y<=1}static getInterpolation(t,i,r,l,c,h,d,m){return this.getBarycoord(t,i,r,l,lr)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,lr.x),m.addScaledVector(h,lr.y),m.addScaledVector(d,lr.z),m)}static getInterpolatedAttribute(t,i,r,l,c,h){return Wd.setScalar(0),Yd.setScalar(0),qd.setScalar(0),Wd.fromBufferAttribute(t,i),Yd.fromBufferAttribute(t,r),qd.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Wd,c.x),h.addScaledVector(Yd,c.y),h.addScaledVector(qd,c.z),h}static isFrontFacing(t,i,r,l){return va.subVectors(r,i),or.subVectors(t,i),va.cross(or).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return va.subVectors(this.c,this.b),or.subVectors(this.a,this.b),va.cross(or).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xa.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return xa.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return xa.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return xa.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xa.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let h,d;Uo.subVectors(l,r),Lo.subVectors(c,r),Vd.subVectors(t,r);const m=Uo.dot(Vd),p=Lo.dot(Vd);if(m<=0&&p<=0)return i.copy(r);kd.subVectors(t,l);const _=Uo.dot(kd),g=Lo.dot(kd);if(_>=0&&g<=_)return i.copy(l);const x=m*g-_*p;if(x<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(r).addScaledVector(Uo,h);Xd.subVectors(t,c);const b=Uo.dot(Xd),A=Lo.dot(Xd);if(A>=0&&b<=A)return i.copy(c);const R=b*p-m*A;if(R<=0&&p>=0&&A<=0)return d=p/(p-A),i.copy(r).addScaledVector(Lo,d);const E=_*A-b*g;if(E<=0&&g-_>=0&&b-A>=0)return rv.subVectors(c,l),d=(g-_)/(g-_+(b-A)),i.copy(l).addScaledVector(rv,d);const y=1/(E+R+x);return h=R*y,d=x*y,i.copy(r).addScaledVector(Uo,h).addScaledVector(Lo,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const vx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qr={h:0,s:0,l:0},wu={h:0,s:0,l:0};function jd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Ie{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=qi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qe.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Qe.workingColorSpace){return this.r=t,this.g=i,this.b=r,Qe.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Qe.workingColorSpace){if(t=WS(t,1),i=Fe(i,0,1),r=Fe(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=jd(h,c,t+1/3),this.g=jd(h,c,t),this.b=jd(h,c,t-1/3)}return Qe.colorSpaceToWorking(this,l),this}setStyle(t,i=qi){function r(c){c!==void 0&&parseFloat(c)<1&&Se("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:Se("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);Se("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=qi){const r=vx[t.toLowerCase()];return r!==void 0?this.setHex(r,i):Se("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hr(t.r),this.g=hr(t.g),this.b=hr(t.b),this}copyLinearToSRGB(t){return this.r=Ho(t.r),this.g=Ho(t.g),this.b=Ho(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qi){return Qe.workingToColorSpace(hi.copy(this),t),Math.round(Fe(hi.r*255,0,255))*65536+Math.round(Fe(hi.g*255,0,255))*256+Math.round(Fe(hi.b*255,0,255))}getHexString(t=qi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Qe.workingColorSpace){Qe.workingToColorSpace(hi.copy(this),i);const r=hi.r,l=hi.g,c=hi.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=_<=.5?g/(h+d):g/(2-h-d),h){case r:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-r)/g+2;break;case c:m=(r-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Qe.workingColorSpace){return Qe.workingToColorSpace(hi.copy(this),i),t.r=hi.r,t.g=hi.g,t.b=hi.b,t}getStyle(t=qi){Qe.workingToColorSpace(hi.copy(this),t);const i=hi.r,r=hi.g,l=hi.b;return t!==qi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(qr),this.setHSL(qr.h+t,qr.s+i,qr.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(qr),t.getHSL(wu);const r=Dd(qr.h,wu.h,i),l=Dd(qr.s,wu.s,i),c=Dd(qr.l,wu.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hi=new Ie;Ie.NAMES=vx;let sM=0;class Hs extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=ic(),this.name="",this.type="Material",this.blending=zo,this.side=Jr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hp,this.blendDst=dp,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=X_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bo,this.stencilZFail=bo,this.stencilZPass=bo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){Se(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Se(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==zo&&(r.blending=this.blending),this.side!==Jr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==hp&&(r.blendSrc=this.blendSrc),this.blendDst!==dp&&(r.blendDst=this.blendDst),this.blendEquation!==Ns&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Go&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==X_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bo&&(r.stencilFail=this.stencilFail),this.stencilZFail!==bo&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==bo&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ym extends Hs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fa,this.combine=$v,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Wn=new et,Du=new we;let oM=0;class si{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:oM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=W_,this.updateRanges=[],this.gpuType=Ua,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Du.fromBufferAttribute(this,i),Du.applyMatrix3(t),this.setXY(i,Du.x,Du.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Wn.fromBufferAttribute(this,i),Wn.applyMatrix3(t),this.setXYZ(i,Wn.x,Wn.y,Wn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)Wn.fromBufferAttribute(this,i),Wn.applyMatrix4(t),this.setXYZ(i,Wn.x,Wn.y,Wn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Wn.fromBufferAttribute(this,i),Wn.applyNormalMatrix(t),this.setXYZ(i,Wn.x,Wn.y,Wn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Wn.fromBufferAttribute(this,i),Wn.transformDirection(t),this.setXYZ(i,Wn.x,Wn.y,Wn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=zl(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Li(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=zl(i,this.array)),i}setX(t,i){return this.normalized&&(i=Li(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=zl(i,this.array)),i}setY(t,i){return this.normalized&&(i=Li(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=zl(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Li(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=zl(i,this.array)),i}setW(t,i){return this.normalized&&(i=Li(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Li(i,this.array),r=Li(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Li(i,this.array),r=Li(r,this.array),l=Li(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Li(i,this.array),r=Li(r,this.array),l=Li(l,this.array),c=Li(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==W_&&(t.usage=this.usage),t}}class xx extends si{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class yx extends si{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class yi extends si{constructor(t,i,r){super(new Float32Array(t),i,r)}}let lM=0;const ca=new An,Zd=new oi,No=new et,Yi=new Yo,kl=new Yo,$n=new et;class li extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=ic(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mx(t)?yx:xx)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new Oe().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ca.makeRotationFromQuaternion(t),this.applyMatrix4(ca),this}rotateX(t){return ca.makeRotationX(t),this.applyMatrix4(ca),this}rotateY(t){return ca.makeRotationY(t),this.applyMatrix4(ca),this}rotateZ(t){return ca.makeRotationZ(t),this.applyMatrix4(ca),this}translate(t,i,r){return ca.makeTranslation(t,i,r),this.applyMatrix4(ca),this}scale(t,i,r){return ca.makeScale(t,i,r),this.applyMatrix4(ca),this}lookAt(t){return Zd.lookAt(t),Zd.updateMatrix(),this.applyMatrix4(Zd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(No).negate(),this.translate(No.x,No.y,No.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new yi(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&Se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){en("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];Yi.setFromBufferAttribute(c),this.morphTargetsRelative?($n.addVectors(this.boundingBox.min,Yi.min),this.boundingBox.expandByPoint($n),$n.addVectors(this.boundingBox.max,Yi.max),this.boundingBox.expandByPoint($n)):(this.boundingBox.expandByPoint(Yi.min),this.boundingBox.expandByPoint(Yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&en('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new of);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){en("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new et,1/0);return}if(t){const r=this.boundingSphere.center;if(Yi.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];kl.setFromBufferAttribute(d),this.morphTargetsRelative?($n.addVectors(Yi.min,kl.min),Yi.expandByPoint($n),$n.addVectors(Yi.max,kl.max),Yi.expandByPoint($n)):(Yi.expandByPoint(kl.min),Yi.expandByPoint(kl.max))}Yi.getCenter(r);let l=0;for(let c=0,h=t.count;c<h;c++)$n.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared($n));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)$n.fromBufferAttribute(d,p),m&&(No.fromBufferAttribute(t,p),$n.add(No)),l=Math.max(l,r.distanceToSquared($n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&en('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){en("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let j=0;j<r.count;j++)d[j]=new et,m[j]=new et;const p=new et,_=new et,g=new et,x=new we,b=new we,A=new we,R=new et,E=new et;function y(j,C,L){p.fromBufferAttribute(r,j),_.fromBufferAttribute(r,C),g.fromBufferAttribute(r,L),x.fromBufferAttribute(c,j),b.fromBufferAttribute(c,C),A.fromBufferAttribute(c,L),_.sub(p),g.sub(p),b.sub(x),A.sub(x);const k=1/(b.x*A.y-A.x*b.y);isFinite(k)&&(R.copy(_).multiplyScalar(A.y).addScaledVector(g,-b.y).multiplyScalar(k),E.copy(g).multiplyScalar(b.x).addScaledVector(_,-A.x).multiplyScalar(k),d[j].add(R),d[C].add(R),d[L].add(R),m[j].add(E),m[C].add(E),m[L].add(E))}let F=this.groups;F.length===0&&(F=[{start:0,count:t.count}]);for(let j=0,C=F.length;j<C;++j){const L=F[j],k=L.start,J=L.count;for(let rt=k,pt=k+J;rt<pt;rt+=3)y(t.getX(rt+0),t.getX(rt+1),t.getX(rt+2))}const N=new et,P=new et,H=new et,O=new et;function B(j){H.fromBufferAttribute(l,j),O.copy(H);const C=d[j];N.copy(C),N.sub(H.multiplyScalar(H.dot(C))).normalize(),P.crossVectors(O,C);const k=P.dot(m[j])<0?-1:1;h.setXYZW(j,N.x,N.y,N.z,k)}for(let j=0,C=F.length;j<C;++j){const L=F[j],k=L.start,J=L.count;for(let rt=k,pt=k+J;rt<pt;rt+=3)B(t.getX(rt+0)),B(t.getX(rt+1)),B(t.getX(rt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new si(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,b=r.count;x<b;x++)r.setXYZ(x,0,0,0);const l=new et,c=new et,h=new et,d=new et,m=new et,p=new et,_=new et,g=new et;if(t)for(let x=0,b=t.count;x<b;x+=3){const A=t.getX(x+0),R=t.getX(x+1),E=t.getX(x+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,E),_.subVectors(h,c),g.subVectors(l,c),_.cross(g),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,E),d.add(_),m.add(_),p.add(_),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(E,p.x,p.y,p.z)}else for(let x=0,b=i.count;x<b;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),_.subVectors(h,c),g.subVectors(l,c),_.cross(g),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)$n.fromBufferAttribute(t,i),$n.normalize(),t.setXYZ(i,$n.x,$n.y,$n.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,g=d.normalized,x=new p.constructor(m.length*_);let b=0,A=0;for(let R=0,E=m.length;R<E;R++){d.isInterleavedBufferAttribute?b=m[R]*d.data.stride+d.offset:b=m[R]*_;for(let y=0;y<_;y++)x[A++]=p[b++]}return new si(x,_,g)}if(this.index===null)return Se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new li,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,g=p.length;_<g;_++){const x=p[_],b=t(x,r);m.push(b)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,x=p.length;g<x;g++){const b=p[g];_.push(b.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],g=c[p];for(let x=0,b=g.length;x<b;x++)_.push(g[x].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,_=h.length;p<_;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sv=new An,ws=new xm,Uu=new of,ov=new et,Lu=new et,Nu=new et,Ou=new et,Kd=new et,Pu=new et,lv=new et,Fu=new et;class Oi extends oi{constructor(t=new li,i=new ym){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Pu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],g=c[m];_!==0&&(Kd.fromBufferAttribute(g,t),h?Pu.addScaledVector(Kd,_):Pu.addScaledVector(Kd.sub(i),_))}i.add(Pu)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Uu.copy(r.boundingSphere),Uu.applyMatrix4(c),ws.copy(t.ray).recast(t.near),!(Uu.containsPoint(ws.origin)===!1&&(ws.intersectSphere(Uu,ov)===null||ws.origin.distanceToSquared(ov)>(t.far-t.near)**2))&&(sv.copy(c).invert(),ws.copy(t.ray).applyMatrix4(sv),!(r.boundingBox!==null&&ws.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,ws)))}_computeIntersections(t,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,x=c.groups,b=c.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,R=x.length;A<R;A++){const E=x[A],y=h[E.materialIndex],F=Math.max(E.start,b.start),N=Math.min(d.count,Math.min(E.start+E.count,b.start+b.count));for(let P=F,H=N;P<H;P+=3){const O=d.getX(P),B=d.getX(P+1),j=d.getX(P+2);l=Iu(this,y,t,r,p,_,g,O,B,j),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=E.materialIndex,i.push(l))}}else{const A=Math.max(0,b.start),R=Math.min(d.count,b.start+b.count);for(let E=A,y=R;E<y;E+=3){const F=d.getX(E),N=d.getX(E+1),P=d.getX(E+2);l=Iu(this,h,t,r,p,_,g,F,N,P),l&&(l.faceIndex=Math.floor(E/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let A=0,R=x.length;A<R;A++){const E=x[A],y=h[E.materialIndex],F=Math.max(E.start,b.start),N=Math.min(m.count,Math.min(E.start+E.count,b.start+b.count));for(let P=F,H=N;P<H;P+=3){const O=P,B=P+1,j=P+2;l=Iu(this,y,t,r,p,_,g,O,B,j),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=E.materialIndex,i.push(l))}}else{const A=Math.max(0,b.start),R=Math.min(m.count,b.start+b.count);for(let E=A,y=R;E<y;E+=3){const F=E,N=E+1,P=E+2;l=Iu(this,h,t,r,p,_,g,F,N,P),l&&(l.faceIndex=Math.floor(E/3),i.push(l))}}}}function cM(o,t,i,r,l,c,h,d){let m;if(t.side===Pi?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,t.side===Jr,d),m===null)return null;Fu.copy(d),Fu.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Fu);return p<i.near||p>i.far?null:{distance:p,point:Fu.clone(),object:o}}function Iu(o,t,i,r,l,c,h,d,m,p){o.getVertexPosition(d,Lu),o.getVertexPosition(m,Nu),o.getVertexPosition(p,Ou);const _=cM(o,t,i,r,Lu,Nu,Ou,lv);if(_){const g=new et;xa.getBarycoord(lv,Lu,Nu,Ou,g),l&&(_.uv=xa.getInterpolatedAttribute(l,d,m,p,g,new we)),c&&(_.uv1=xa.getInterpolatedAttribute(c,d,m,p,g,new we)),h&&(_.normal=xa.getInterpolatedAttribute(h,d,m,p,g,new et),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new et,materialIndex:0};xa.getNormal(Lu,Nu,Ou,x.normal),_.face=x,_.barycoord=g}return _}class ac extends li{constructor(t=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],_=[],g=[];let x=0,b=0;A("z","y","x",-1,-1,r,i,t,h,c,0),A("z","y","x",1,-1,r,i,-t,h,c,1),A("x","z","y",1,1,t,r,i,l,h,2),A("x","z","y",1,-1,t,r,-i,l,h,3),A("x","y","z",1,-1,t,i,r,l,c,4),A("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new yi(p,3)),this.setAttribute("normal",new yi(_,3)),this.setAttribute("uv",new yi(g,2));function A(R,E,y,F,N,P,H,O,B,j,C){const L=P/B,k=H/j,J=P/2,rt=H/2,pt=O/2,yt=B+1,z=j+1;let W=0,at=0;const Ot=new et;for(let Lt=0;Lt<z;Lt++){const G=Lt*k-rt;for(let ft=0;ft<yt;ft++){const At=ft*L-J;Ot[R]=At*F,Ot[E]=G*N,Ot[y]=pt,p.push(Ot.x,Ot.y,Ot.z),Ot[R]=0,Ot[E]=0,Ot[y]=O>0?1:-1,_.push(Ot.x,Ot.y,Ot.z),g.push(ft/B),g.push(1-Lt/j),W+=1}}for(let Lt=0;Lt<j;Lt++)for(let G=0;G<B;G++){const ft=x+G+yt*Lt,At=x+G+yt*(Lt+1),Vt=x+(G+1)+yt*(Lt+1),It=x+(G+1)+yt*Lt;m.push(ft,At,It),m.push(At,Vt,It),at+=6}d.addGroup(b,at,C),b+=at,x+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ac(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Wo(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(Se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function vi(o){const t={};for(let i=0;i<o.length;i++){const r=Wo(o[i]);for(const l in r)t[l]=r[l]}return t}function uM(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Sx(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qe.workingColorSpace}const fM={clone:Wo,merge:vi};var hM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ia extends Hs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hM,this.fragmentShader=dM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wo(t.uniforms),this.uniformsGroups=uM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Mx extends oi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new An,this.projectionMatrix=new An,this.projectionMatrixInverse=new An,this.coordinateSystem=La,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jr=new et,cv=new we,uv=new we;class ua extends Mx{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=im*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return im*2*Math.atan(Math.tan(Zu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){jr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(jr.x,jr.y).multiplyScalar(-t/jr.z),jr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(jr.x,jr.y).multiplyScalar(-t/jr.z)}getViewSize(t,i){return this.getViewBounds(t,cv,uv),i.subVectors(uv,cv)}setViewOffset(t,i,r,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Zu*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Oo=-90,Po=1;class pM extends oi{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ua(Oo,Po,t,i);l.layers=this.layers,this.add(l);const c=new ua(Oo,Po,t,i);c.layers=this.layers,this.add(c);const h=new ua(Oo,Po,t,i);h.layers=this.layers,this.add(h);const d=new ua(Oo,Po,t,i);d.layers=this.layers,this.add(d);const m=new ua(Oo,Po,t,i);m.layers=this.layers,this.add(m);const p=new ua(Oo,Po,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===La)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===ef)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,_]=this.children,g=t.getRenderTarget(),x=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=R,t.setRenderTarget(r,5,l),t.render(i,_),t.setRenderTarget(g,x,b),t.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class bx extends xi{constructor(t=[],i=Is,r,l,c,h,d,m,p,_){super(t,i,r,l,c,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ex extends Oa{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new bx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ac(5,5,5),c=new Ia({name:"CubemapFromEquirect",uniforms:Wo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Pi,blending:fr});c.uniforms.tEquirect.value=i;const h=new Oi(l,c),d=i.minFilter;return i.minFilter===Ps&&(i.minFilter=di),new pM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(c)}}class Zl extends oi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mM={type:"move"};class Qd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const R of t.hand.values()){const E=i.getJointPose(R,r),y=this._getHandJoint(p,R);E!==null&&(y.matrix.fromArray(E.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=E.radius),y.visible=E!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=_.position.distanceTo(g.position),b=.02,A=.005;p.inputState.pinching&&x>b+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=b-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(mM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Zl;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class gM extends oi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fa,this.environmentIntensity=1,this.environmentRotation=new Fa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class _M extends xi{constructor(t=null,i=1,r=1,l,c,h,d,m,p=ri,_=ri,g,x){super(null,h,d,m,p,_,l,c,g,x),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jd=new et,vM=new et,xM=new Oe;class Zr{constructor(t=new et(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Jd.subVectors(r,i).cross(vM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Jd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||xM.getNormalMatrix(t),l=this.coplanarPoint(Jd).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ds=new of,yM=new we(.5,.5),Bu=new et;class Sm{constructor(t=new Zr,i=new Zr,r=new Zr,l=new Zr,c=new Zr,h=new Zr){this.planes=[t,i,r,l,c,h]}set(t,i,r,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=La,r=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],_=c[4],g=c[5],x=c[6],b=c[7],A=c[8],R=c[9],E=c[10],y=c[11],F=c[12],N=c[13],P=c[14],H=c[15];if(l[0].setComponents(p-h,b-_,y-A,H-F).normalize(),l[1].setComponents(p+h,b+_,y+A,H+F).normalize(),l[2].setComponents(p+d,b+g,y+R,H+N).normalize(),l[3].setComponents(p-d,b-g,y-R,H-N).normalize(),r)l[4].setComponents(m,x,E,P).normalize(),l[5].setComponents(p-m,b-x,y-E,H-P).normalize();else if(l[4].setComponents(p-m,b-x,y-E,H-P).normalize(),i===La)l[5].setComponents(p+m,b+x,y+E,H+P).normalize();else if(i===ef)l[5].setComponents(m,x,E,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ds.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(t){Ds.center.set(0,0,0);const i=yM.distanceTo(t.center);return Ds.radius=.7071067811865476+i,Ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Bu.x=l.normal.x>0?t.max.x:t.min.x,Bu.y=l.normal.y>0?t.max.y:t.min.y,Bu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Bu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lf extends Hs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const af=new et,rf=new et,fv=new An,Xl=new xm,zu=new of,$d=new et,hv=new et;class Ku extends oi{constructor(t=new li,i=new lf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)af.fromBufferAttribute(i,l-1),rf.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=af.distanceTo(rf);t.setAttribute("lineDistance",new yi(r,1))}else Se("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),zu.copy(r.boundingSphere),zu.applyMatrix4(l),zu.radius+=c,t.ray.intersectsSphere(zu)===!1)return;fv.copy(l).invert(),Xl.copy(t.ray).applyMatrix4(fv);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,_=r.index,x=r.attributes.position;if(_!==null){const b=Math.max(0,h.start),A=Math.min(_.count,h.start+h.count);for(let R=b,E=A-1;R<E;R+=p){const y=_.getX(R),F=_.getX(R+1),N=Hu(this,t,Xl,m,y,F,R);N&&i.push(N)}if(this.isLineLoop){const R=_.getX(A-1),E=_.getX(b),y=Hu(this,t,Xl,m,R,E,A-1);y&&i.push(y)}}else{const b=Math.max(0,h.start),A=Math.min(x.count,h.start+h.count);for(let R=b,E=A-1;R<E;R+=p){const y=Hu(this,t,Xl,m,R,R+1,R);y&&i.push(y)}if(this.isLineLoop){const R=Hu(this,t,Xl,m,A-1,b,A-1);R&&i.push(R)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Hu(o,t,i,r,l,c,h){const d=o.geometry.attributes.position;if(af.fromBufferAttribute(d,l),rf.fromBufferAttribute(d,c),i.distanceSqToSegment(af,rf,$d,hv)>r)return;$d.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo($d);if(!(p<t.near||p>t.far))return{distance:p,point:hv.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const dv=new et,pv=new et;class SM extends Ku{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)dv.fromBufferAttribute(i,l),pv.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+dv.distanceTo(pv);t.setAttribute("lineDistance",new yi(r,1))}else Se("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nc extends xi{constructor(t,i,r=Pa,l,c,h,d=ri,m=ri,p,_=pr,g=1){if(_!==pr&&_!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:g};super(x,l,c,h,d,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new vm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class MM extends nc{constructor(t,i=Pa,r=Is,l,c,h=ri,d=ri,m,p=pr){const _={width:t,height:t,depth:1},g=[_,_,_,_,_,_];super(t,t,i,r,l,c,h,d,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Tx extends xi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class rc extends li{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,_=m+1,g=t/d,x=i/m,b=[],A=[],R=[],E=[];for(let y=0;y<_;y++){const F=y*x-h;for(let N=0;N<p;N++){const P=N*g-c;A.push(P,-F,0),R.push(0,0,1),E.push(N/d),E.push(1-y/m)}}for(let y=0;y<m;y++)for(let F=0;F<d;F++){const N=F+p*y,P=F+p*(y+1),H=F+1+p*(y+1),O=F+1+p*y;b.push(N,P,O),b.push(P,H,O)}this.setIndex(b),this.setAttribute("position",new yi(A,3)),this.setAttribute("normal",new yi(R,3)),this.setAttribute("uv",new yi(E,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rc(t.width,t.height,t.widthSegments,t.heightSegments)}}class bM extends Ia{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class EM extends Hs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=px,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class tp extends EM{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new we(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Fe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class TM extends Hs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=PS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class AM extends Hs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class RM extends lf{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}const mv={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class CM{constructor(t,i,r){const l=this;let c=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(_){d++,c===!1&&l.onStart!==void 0&&l.onStart(_,h,d),c=!0},this.itemEnd=function(_){h++,l.onProgress!==void 0&&l.onProgress(_,h,d),h===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,g){return p.push(_,g),this},this.removeHandler=function(_){const g=p.indexOf(_);return g!==-1&&p.splice(g,2),this},this.getHandler=function(_){for(let g=0,x=p.length;g<x;g+=2){const b=p[g],A=p[g+1];if(b.global&&(b.lastIndex=0),b.test(_))return A}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const wM=new CM;class Mm{constructor(t){this.manager=t!==void 0?t:wM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,c){r.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Mm.DEFAULT_MATERIAL_NAME="__DEFAULT";const cr={};class DM extends Error{constructor(t,i){super(t),this.response=i}}class UM extends Mm{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,i,r,l){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=mv.get(`file:${t}`);if(c!==void 0)return this.manager.itemStart(t),setTimeout(()=>{i&&i(c),this.manager.itemEnd(t)},0),c;if(cr[t]!==void 0){cr[t].push({onLoad:i,onProgress:r,onError:l});return}cr[t]=[],cr[t].push({onLoad:i,onProgress:r,onError:l});const h=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),d=this.mimeType,m=this.responseType;fetch(h).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&Se("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const _=cr[t],g=p.body.getReader(),x=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),b=x?parseInt(x):0,A=b!==0;let R=0;const E=new ReadableStream({start(y){F();function F(){g.read().then(({done:N,value:P})=>{if(N)y.close();else{R+=P.byteLength;const H=new ProgressEvent("progress",{lengthComputable:A,loaded:R,total:b});for(let O=0,B=_.length;O<B;O++){const j=_[O];j.onProgress&&j.onProgress(H)}y.enqueue(P),F()}},N=>{y.error(N)})}}});return new Response(E)}else throw new DM(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(m){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(_=>new DOMParser().parseFromString(_,d));case"json":return p.json();default:if(d==="")return p.text();{const g=/charset="?([^;"\s]*)"?/i.exec(d),x=g&&g[1]?g[1].toLowerCase():void 0,b=new TextDecoder(x);return p.arrayBuffer().then(A=>b.decode(A))}}}).then(p=>{mv.add(`file:${t}`,p);const _=cr[t];delete cr[t];for(let g=0,x=_.length;g<x;g++){const b=_[g];b.onLoad&&b.onLoad(p)}}).catch(p=>{const _=cr[t];if(_===void 0)throw this.manager.itemError(t),p;delete cr[t];for(let g=0,x=_.length;g<x;g++){const b=_[g];b.onError&&b.onError(p)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Ax extends oi{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const ep=new An,gv=new et,_v=new et;class LM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.mapType=Zi,this.map=null,this.mapPass=null,this.matrix=new An,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sm,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new Nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;gv.setFromMatrixPosition(t.matrixWorld),i.position.copy(gv),_v.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(_v),i.updateMatrixWorld(),ep.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ep,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(ep)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class bm extends Mx{constructor(t=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class NM extends LM{constructor(){super(new bm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vv extends Ax{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(oi.DEFAULT_UP),this.updateMatrix(),this.target=new oi,this.shadow=new NM}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class OM extends Ax{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class PM extends ua{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class xv{constructor(t=1,i=0,r=0){this.radius=t,this.phi=i,this.theta=r}set(t,i,r){return this.radius=t,this.phi=i,this.theta=r,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Fe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,r){return this.radius=Math.sqrt(t*t+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,r),this.phi=Math.acos(Fe(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class yv extends SM{constructor(t=10,i=10,r=4473924,l=8947848){r=new Ie(r),l=new Ie(l);const c=i/2,h=t/i,d=t/2,m=[],p=[];for(let x=0,b=0,A=-d;x<=i;x++,A+=h){m.push(-d,0,A,d,0,A),m.push(A,0,-d,A,0,d);const R=x===c?r:l;R.toArray(p,b),b+=3,R.toArray(p,b),b+=3,R.toArray(p,b),b+=3,R.toArray(p,b),b+=3}const _=new li;_.setAttribute("position",new yi(m,3)),_.setAttribute("color",new yi(p,3));const g=new lf({vertexColors:!0,toneMapped:!1});super(_,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}let FM=class extends zs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Se("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Sv(o,t,i,r){const l=IM(r);switch(i){case fx:return o*t;case dx:return o*t/l.components*l.byteLength;case dm:return o*t/l.components*l.byteLength;case ko:return o*t*2/l.components*l.byteLength;case pm:return o*t*2/l.components*l.byteLength;case hx:return o*t*3/l.components*l.byteLength;case ya:return o*t*4/l.components*l.byteLength;case mm:return o*t*4/l.components*l.byteLength;case Wu:case Yu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case qu:case ju:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ap:case Cp:return Math.max(o,16)*Math.max(t,8)/4;case Tp:case Rp:return Math.max(o,8)*Math.max(t,8)/2;case wp:case Dp:case Lp:case Np:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Up:case Op:case Pp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Fp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ip:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Bp:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case zp:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Hp:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Gp:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Vp:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case kp:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Xp:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Wp:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Yp:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case qp:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case jp:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Zp:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Kp:case Qp:case Jp:return Math.ceil(o/4)*Math.ceil(t/4)*16;case $p:case tm:return Math.ceil(o/4)*Math.ceil(t/4)*8;case em:case nm:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function IM(o){switch(o){case Zi:case ox:return{byteLength:1,components:1};case $l:case lx:case dr:return{byteLength:2,components:1};case fm:case hm:return{byteLength:2,components:4};case Pa:case um:case Ua:return{byteLength:4,components:1};case cx:case ux:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lm}}));typeof window<"u"&&(window.__THREE__?Se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lm);function Rx(){let o=null,t=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function BM(o){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,g=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,_),d.onUploadCallback();let b;if(p instanceof Float32Array)b=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)b=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?b=o.HALF_FLOAT:b=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)b=o.SHORT;else if(p instanceof Uint32Array)b=o.UNSIGNED_INT;else if(p instanceof Int32Array)b=o.INT;else if(p instanceof Int8Array)b=o.BYTE;else if(p instanceof Uint8Array)b=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)b=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:b,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,m,p){const _=m.array,g=m.updateRanges;if(o.bindBuffer(p,d),g.length===0)o.bufferSubData(p,0,_);else{g.sort((b,A)=>b.start-A.start);let x=0;for(let b=1;b<g.length;b++){const A=g[x],R=g[b];R.start<=A.start+A.count+1?A.count=Math.max(A.count,R.start+R.count-A.start):(++x,g[x]=R)}g.length=x+1;for(let b=0,A=g.length;b<A;b++){const R=g[b];o.bufferSubData(p,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var zM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HM=`#ifdef USE_ALPHAHASH
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
#endif`,GM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,VM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,XM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,WM=`#ifdef USE_AOMAP
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
#endif`,YM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qM=`#ifdef USE_BATCHING
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
#endif`,jM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,KM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,JM=`#ifdef USE_IRIDESCENCE
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
#endif`,$M=`#ifdef USE_BUMPMAP
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
#endif`,tb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ib=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ab=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ob=`#if defined( USE_COLOR_ALPHA )
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
#endif`,lb=`#define PI 3.141592653589793
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
} // validated`,cb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ub=`vec3 transformedNormal = objectNormal;
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
#endif`,fb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,db=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mb="gl_FragColor = linearToOutputTexel( gl_FragColor );",gb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_b=`#ifdef USE_ENVMAP
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
#endif`,vb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xb=`#ifdef USE_ENVMAP
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
#endif`,yb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sb=`#ifdef USE_ENVMAP
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
#endif`,Mb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ab=`#ifdef USE_GRADIENTMAP
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
}`,Rb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Db=`uniform bool receiveShadow;
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
#endif`,Ub=`#ifdef USE_ENVMAP
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
#endif`,Lb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ob=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fb=`PhysicalMaterial material;
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
#endif`,Ib=`uniform sampler2D dfgLUT;
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
}`,Bb=`
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
#endif`,zb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jb=`#if defined( USE_POINTS_UV )
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
#endif`,Zb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$b=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tE=`#ifdef USE_MORPHTARGETS
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
#endif`,eE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,iE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,aE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oE=`#ifdef USE_NORMALMAP
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
#endif`,lE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_E=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,SE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ME=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bE=`float getShadowMask() {
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
}`,EE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TE=`#ifdef USE_SKINNING
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
#endif`,AE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RE=`#ifdef USE_SKINNING
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
#endif`,CE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,UE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,LE=`#ifdef USE_TRANSMISSION
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
#endif`,NE=`#ifdef USE_TRANSMISSION
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
#endif`,OE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zE=`uniform sampler2D t2D;
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
}`,HE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,VE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XE=`#include <common>
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
}`,WE=`#if DEPTH_PACKING == 3200
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
}`,YE=`#define DISTANCE
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
}`,qE=`#define DISTANCE
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
}`,jE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KE=`uniform float scale;
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
}`,QE=`uniform vec3 diffuse;
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
}`,JE=`#include <common>
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
}`,$E=`uniform vec3 diffuse;
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
}`,tT=`#define LAMBERT
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
}`,eT=`#define LAMBERT
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
}`,nT=`#define MATCAP
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
}`,iT=`#define MATCAP
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
}`,aT=`#define NORMAL
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
}`,rT=`#define NORMAL
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
}`,sT=`#define PHONG
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
}`,oT=`#define PHONG
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
}`,lT=`#define STANDARD
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
}`,cT=`#define STANDARD
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
}`,uT=`#define TOON
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
}`,fT=`#define TOON
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
}`,hT=`uniform float size;
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
}`,dT=`uniform vec3 diffuse;
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
}`,pT=`#include <common>
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
}`,mT=`uniform vec3 color;
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
}`,gT=`uniform float rotation;
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
}`,_T=`uniform vec3 diffuse;
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
}`,Pe={alphahash_fragment:zM,alphahash_pars_fragment:HM,alphamap_fragment:GM,alphamap_pars_fragment:VM,alphatest_fragment:kM,alphatest_pars_fragment:XM,aomap_fragment:WM,aomap_pars_fragment:YM,batching_pars_vertex:qM,batching_vertex:jM,begin_vertex:ZM,beginnormal_vertex:KM,bsdfs:QM,iridescence_fragment:JM,bumpmap_pars_fragment:$M,clipping_planes_fragment:tb,clipping_planes_pars_fragment:eb,clipping_planes_pars_vertex:nb,clipping_planes_vertex:ib,color_fragment:ab,color_pars_fragment:rb,color_pars_vertex:sb,color_vertex:ob,common:lb,cube_uv_reflection_fragment:cb,defaultnormal_vertex:ub,displacementmap_pars_vertex:fb,displacementmap_vertex:hb,emissivemap_fragment:db,emissivemap_pars_fragment:pb,colorspace_fragment:mb,colorspace_pars_fragment:gb,envmap_fragment:_b,envmap_common_pars_fragment:vb,envmap_pars_fragment:xb,envmap_pars_vertex:yb,envmap_physical_pars_fragment:Ub,envmap_vertex:Sb,fog_vertex:Mb,fog_pars_vertex:bb,fog_fragment:Eb,fog_pars_fragment:Tb,gradientmap_pars_fragment:Ab,lightmap_pars_fragment:Rb,lights_lambert_fragment:Cb,lights_lambert_pars_fragment:wb,lights_pars_begin:Db,lights_toon_fragment:Lb,lights_toon_pars_fragment:Nb,lights_phong_fragment:Ob,lights_phong_pars_fragment:Pb,lights_physical_fragment:Fb,lights_physical_pars_fragment:Ib,lights_fragment_begin:Bb,lights_fragment_maps:zb,lights_fragment_end:Hb,logdepthbuf_fragment:Gb,logdepthbuf_pars_fragment:Vb,logdepthbuf_pars_vertex:kb,logdepthbuf_vertex:Xb,map_fragment:Wb,map_pars_fragment:Yb,map_particle_fragment:qb,map_particle_pars_fragment:jb,metalnessmap_fragment:Zb,metalnessmap_pars_fragment:Kb,morphinstance_vertex:Qb,morphcolor_vertex:Jb,morphnormal_vertex:$b,morphtarget_pars_vertex:tE,morphtarget_vertex:eE,normal_fragment_begin:nE,normal_fragment_maps:iE,normal_pars_fragment:aE,normal_pars_vertex:rE,normal_vertex:sE,normalmap_pars_fragment:oE,clearcoat_normal_fragment_begin:lE,clearcoat_normal_fragment_maps:cE,clearcoat_pars_fragment:uE,iridescence_pars_fragment:fE,opaque_fragment:hE,packing:dE,premultiplied_alpha_fragment:pE,project_vertex:mE,dithering_fragment:gE,dithering_pars_fragment:_E,roughnessmap_fragment:vE,roughnessmap_pars_fragment:xE,shadowmap_pars_fragment:yE,shadowmap_pars_vertex:SE,shadowmap_vertex:ME,shadowmask_pars_fragment:bE,skinbase_vertex:EE,skinning_pars_vertex:TE,skinning_vertex:AE,skinnormal_vertex:RE,specularmap_fragment:CE,specularmap_pars_fragment:wE,tonemapping_fragment:DE,tonemapping_pars_fragment:UE,transmission_fragment:LE,transmission_pars_fragment:NE,uv_pars_fragment:OE,uv_pars_vertex:PE,uv_vertex:FE,worldpos_vertex:IE,background_vert:BE,background_frag:zE,backgroundCube_vert:HE,backgroundCube_frag:GE,cube_vert:VE,cube_frag:kE,depth_vert:XE,depth_frag:WE,distance_vert:YE,distance_frag:qE,equirect_vert:jE,equirect_frag:ZE,linedashed_vert:KE,linedashed_frag:QE,meshbasic_vert:JE,meshbasic_frag:$E,meshlambert_vert:tT,meshlambert_frag:eT,meshmatcap_vert:nT,meshmatcap_frag:iT,meshnormal_vert:aT,meshnormal_frag:rT,meshphong_vert:sT,meshphong_frag:oT,meshphysical_vert:lT,meshphysical_frag:cT,meshtoon_vert:uT,meshtoon_frag:fT,points_vert:hT,points_frag:dT,shadow_vert:pT,shadow_frag:mT,sprite_vert:gT,sprite_frag:_T},ee={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Da={basic:{uniforms:vi([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:vi([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:vi([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:vi([ee.common,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.roughnessmap,ee.metalnessmap,ee.fog,ee.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:vi([ee.common,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.gradientmap,ee.fog,ee.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:vi([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:vi([ee.points,ee.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:vi([ee.common,ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:vi([ee.common,ee.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:vi([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:vi([ee.sprite,ee.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distance:{uniforms:vi([ee.common,ee.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distance_vert,fragmentShader:Pe.distance_frag},shadow:{uniforms:vi([ee.lights,ee.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};Da.physical={uniforms:vi([Da.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};const Gu={r:0,b:0,g:0},Us=new Fa,vT=new An;function xT(o,t,i,r,l,c,h){const d=new Ie(0);let m=c===!0?0:1,p,_,g=null,x=0,b=null;function A(N){let P=N.isScene===!0?N.background:null;return P&&P.isTexture&&(P=(N.backgroundBlurriness>0?i:t).get(P)),P}function R(N){let P=!1;const H=A(N);H===null?y(d,m):H&&H.isColor&&(y(H,1),P=!0);const O=o.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,h):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function E(N,P){const H=A(P);H&&(H.isCubeTexture||H.mapping===sf)?(_===void 0&&(_=new Oi(new ac(1,1,1),new Ia({name:"BackgroundCubeMaterial",uniforms:Wo(Da.backgroundCube.uniforms),vertexShader:Da.backgroundCube.vertexShader,fragmentShader:Da.backgroundCube.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(O,B,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Us.copy(P.backgroundRotation),Us.x*=-1,Us.y*=-1,Us.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),_.material.uniforms.envMap.value=H,_.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(vT.makeRotationFromEuler(Us)),_.material.toneMapped=Qe.getTransfer(H.colorSpace)!==fn,(g!==H||x!==H.version||b!==o.toneMapping)&&(_.material.needsUpdate=!0,g=H,x=H.version,b=o.toneMapping),_.layers.enableAll(),N.unshift(_,_.geometry,_.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new Oi(new rc(2,2),new Ia({name:"BackgroundMaterial",uniforms:Wo(Da.background.uniforms),vertexShader:Da.background.vertexShader,fragmentShader:Da.background.fragmentShader,side:Jr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=Qe.getTransfer(H.colorSpace)!==fn,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(g!==H||x!==H.version||b!==o.toneMapping)&&(p.material.needsUpdate=!0,g=H,x=H.version,b=o.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function y(N,P){N.getRGB(Gu,Sx(o)),r.buffers.color.setClear(Gu.r,Gu.g,Gu.b,P,h)}function F(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,P=1){d.set(N),m=P,y(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,y(d,m)},render:R,addToRenderList:E,dispose:F}}function yT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,h=!1;function d(L,k,J,rt,pt){let yt=!1;const z=g(rt,J,k);c!==z&&(c=z,p(c.object)),yt=b(L,rt,J,pt),yt&&A(L,rt,J,pt),pt!==null&&t.update(pt,o.ELEMENT_ARRAY_BUFFER),(yt||h)&&(h=!1,P(L,k,J,rt),pt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(pt).buffer))}function m(){return o.createVertexArray()}function p(L){return o.bindVertexArray(L)}function _(L){return o.deleteVertexArray(L)}function g(L,k,J){const rt=J.wireframe===!0;let pt=r[L.id];pt===void 0&&(pt={},r[L.id]=pt);let yt=pt[k.id];yt===void 0&&(yt={},pt[k.id]=yt);let z=yt[rt];return z===void 0&&(z=x(m()),yt[rt]=z),z}function x(L){const k=[],J=[],rt=[];for(let pt=0;pt<i;pt++)k[pt]=0,J[pt]=0,rt[pt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:J,attributeDivisors:rt,object:L,attributes:{},index:null}}function b(L,k,J,rt){const pt=c.attributes,yt=k.attributes;let z=0;const W=J.getAttributes();for(const at in W)if(W[at].location>=0){const Lt=pt[at];let G=yt[at];if(G===void 0&&(at==="instanceMatrix"&&L.instanceMatrix&&(G=L.instanceMatrix),at==="instanceColor"&&L.instanceColor&&(G=L.instanceColor)),Lt===void 0||Lt.attribute!==G||G&&Lt.data!==G.data)return!0;z++}return c.attributesNum!==z||c.index!==rt}function A(L,k,J,rt){const pt={},yt=k.attributes;let z=0;const W=J.getAttributes();for(const at in W)if(W[at].location>=0){let Lt=yt[at];Lt===void 0&&(at==="instanceMatrix"&&L.instanceMatrix&&(Lt=L.instanceMatrix),at==="instanceColor"&&L.instanceColor&&(Lt=L.instanceColor));const G={};G.attribute=Lt,Lt&&Lt.data&&(G.data=Lt.data),pt[at]=G,z++}c.attributes=pt,c.attributesNum=z,c.index=rt}function R(){const L=c.newAttributes;for(let k=0,J=L.length;k<J;k++)L[k]=0}function E(L){y(L,0)}function y(L,k){const J=c.newAttributes,rt=c.enabledAttributes,pt=c.attributeDivisors;J[L]=1,rt[L]===0&&(o.enableVertexAttribArray(L),rt[L]=1),pt[L]!==k&&(o.vertexAttribDivisor(L,k),pt[L]=k)}function F(){const L=c.newAttributes,k=c.enabledAttributes;for(let J=0,rt=k.length;J<rt;J++)k[J]!==L[J]&&(o.disableVertexAttribArray(J),k[J]=0)}function N(L,k,J,rt,pt,yt,z){z===!0?o.vertexAttribIPointer(L,k,J,pt,yt):o.vertexAttribPointer(L,k,J,rt,pt,yt)}function P(L,k,J,rt){R();const pt=rt.attributes,yt=J.getAttributes(),z=k.defaultAttributeValues;for(const W in yt){const at=yt[W];if(at.location>=0){let Ot=pt[W];if(Ot===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(Ot=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(Ot=L.instanceColor)),Ot!==void 0){const Lt=Ot.normalized,G=Ot.itemSize,ft=t.get(Ot);if(ft===void 0)continue;const At=ft.buffer,Vt=ft.type,It=ft.bytesPerElement,nt=Vt===o.INT||Vt===o.UNSIGNED_INT||Ot.gpuType===um;if(Ot.isInterleavedBufferAttribute){const lt=Ot.data,Gt=lt.stride,jt=Ot.offset;if(lt.isInstancedInterleavedBuffer){for(let kt=0;kt<at.locationSize;kt++)y(at.location+kt,lt.meshPerAttribute);L.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let kt=0;kt<at.locationSize;kt++)E(at.location+kt);o.bindBuffer(o.ARRAY_BUFFER,At);for(let kt=0;kt<at.locationSize;kt++)N(at.location+kt,G/at.locationSize,Vt,Lt,Gt*It,(jt+G/at.locationSize*kt)*It,nt)}else{if(Ot.isInstancedBufferAttribute){for(let lt=0;lt<at.locationSize;lt++)y(at.location+lt,Ot.meshPerAttribute);L.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=Ot.meshPerAttribute*Ot.count)}else for(let lt=0;lt<at.locationSize;lt++)E(at.location+lt);o.bindBuffer(o.ARRAY_BUFFER,At);for(let lt=0;lt<at.locationSize;lt++)N(at.location+lt,G/at.locationSize,Vt,Lt,G*It,G/at.locationSize*lt*It,nt)}}else if(z!==void 0){const Lt=z[W];if(Lt!==void 0)switch(Lt.length){case 2:o.vertexAttrib2fv(at.location,Lt);break;case 3:o.vertexAttrib3fv(at.location,Lt);break;case 4:o.vertexAttrib4fv(at.location,Lt);break;default:o.vertexAttrib1fv(at.location,Lt)}}}}F()}function H(){j();for(const L in r){const k=r[L];for(const J in k){const rt=k[J];for(const pt in rt)_(rt[pt].object),delete rt[pt];delete k[J]}delete r[L]}}function O(L){if(r[L.id]===void 0)return;const k=r[L.id];for(const J in k){const rt=k[J];for(const pt in rt)_(rt[pt].object),delete rt[pt];delete k[J]}delete r[L.id]}function B(L){for(const k in r){const J=r[k];if(J[L.id]===void 0)continue;const rt=J[L.id];for(const pt in rt)_(rt[pt].object),delete rt[pt];delete J[L.id]}}function j(){C(),h=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:C,dispose:H,releaseStatesOfGeometry:O,releaseStatesOfProgram:B,initAttributes:R,enableAttribute:E,disableUnusedAttributes:F}}function ST(o,t,i){let r;function l(p){r=p}function c(p,_){o.drawArrays(r,p,_),i.update(_,r,1)}function h(p,_,g){g!==0&&(o.drawArraysInstanced(r,p,_,g),i.update(_,r,g))}function d(p,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,g);let b=0;for(let A=0;A<g;A++)b+=_[A];i.update(b,r,1)}function m(p,_,g,x){if(g===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let A=0;A<p.length;A++)h(p[A],_[A],x[A]);else{b.multiDrawArraysInstancedWEBGL(r,p,0,_,0,x,0,g);let A=0;for(let R=0;R<g;R++)A+=_[R]*x[R];i.update(A,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function MT(o,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(B){return!(B!==ya&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const j=B===dr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==Zi&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Ua&&!j)}function m(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(Se("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),b=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),E=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),F=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),P=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=o.getParameter(o.MAX_SAMPLES),O=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:b,maxVertexTextures:A,maxTextureSize:R,maxCubemapSize:E,maxAttributes:y,maxVertexUniforms:F,maxVaryings:N,maxFragmentUniforms:P,maxSamples:H,samples:O}}function bT(o){const t=this;let i=null,r=0,l=!1,c=!1;const h=new Zr,d=new Oe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const b=g.length!==0||x||r!==0||l;return l=x,r=g.length,b},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,x){i=_(g,x,0)},this.setState=function(g,x,b){const A=g.clippingPlanes,R=g.clipIntersection,E=g.clipShadows,y=o.get(g);if(!l||A===null||A.length===0||c&&!E)c?_(null):p();else{const F=c?0:r,N=F*4;let P=y.clippingState||null;m.value=P,P=_(A,x,N,b);for(let H=0;H!==N;++H)P[H]=i[H];y.clippingState=P,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=F}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function _(g,x,b,A){const R=g!==null?g.length:0;let E=null;if(R!==0){if(E=m.value,A!==!0||E===null){const y=b+R*4,F=x.matrixWorldInverse;d.getNormalMatrix(F),(E===null||E.length<y)&&(E=new Float32Array(y));for(let N=0,P=b;N!==R;++N,P+=4)h.copy(g[N]).applyMatrix4(F,d),h.normal.toArray(E,P),E[P+3]=h.constant}m.value=E,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,E}}function ET(o){let t=new WeakMap;function i(h,d){return d===Sp?h.mapping=Is:d===Mp&&(h.mapping=Vo),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Sp||d===Mp)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Ex(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const Qr=4,Mv=[.125,.215,.35,.446,.526,.582],Os=20,TT=256,Wl=new bm,bv=new Ie;let np=null,ip=0,ap=0,rp=!1;const AT=new et;class Ev{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=AT}=c;np=this._renderer.getRenderTarget(),ip=this._renderer.getActiveCubeFace(),ap=this._renderer.getActiveMipmapLevel(),rp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Av(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(np,ip,ap),this._renderer.xr.enabled=rp,t.scissorTest=!1,Fo(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Is||t.mapping===Vo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),np=this._renderer.getRenderTarget(),ip=this._renderer.getActiveCubeFace(),ap=this._renderer.getActiveMipmapLevel(),rp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:di,minFilter:di,generateMipmaps:!1,type:dr,format:ya,colorSpace:Xo,depthBuffer:!1},l=Tv(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tv(t,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=RT(c)),this._blurMaterial=wT(c,t,i),this._ggxMaterial=CT(c,t,i)}return l}_compileMaterial(t){const i=new Oi(new li,t);this._renderer.compile(i,Wl)}_sceneToCubeUV(t,i,r,l,c){const m=new ua(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,b=g.toneMapping;g.getClearColor(bv),g.toneMapping=Na,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Oi(new ac,new ym({name:"PMREM.Background",side:Pi,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,E=R.material;let y=!1;const F=t.background;F?F.isColor&&(E.color.copy(F),t.background=null,y=!0):(E.color.copy(bv),y=!0);for(let N=0;N<6;N++){const P=N%3;P===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[N],c.y,c.z)):P===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[N]));const H=this._cubeSize;Fo(l,P*H,N>2?H:0,H,H),g.setRenderTarget(l),y&&g.render(R,m),g.render(t,m)}g.toneMapping=b,g.autoClear=x,t.background=F}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Is||t.mapping===Vo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Av());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Fo(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Wl)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[r];d.material=h;const m=h.uniforms,p=r/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),x=0+p*1.25,b=g*x,{_lodMax:A}=this,R=this._sizeLods[r],E=3*R*(r>A-Qr?r-A+Qr:0),y=4*(this._cubeSize-R);m.envMap.value=t.texture,m.roughness.value=b,m.mipInt.value=A-i,Fo(c,E,y,3*R,2*R),l.setRenderTarget(c),l.render(d,Wl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=A-r,Fo(t,E,y,3*R,2*R),l.setRenderTarget(t),l.render(d,Wl)}_blur(t,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",c),this._halfBlur(h,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&en("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[l];g.material=p;const x=p.uniforms,b=this._sizeLods[r]-1,A=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*Os-1),R=c/A,E=isFinite(c)?1+Math.floor(_*R):Os;E>Os&&Se(`sigmaRadians, ${c}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${Os}`);const y=[];let F=0;for(let B=0;B<Os;++B){const j=B/R,C=Math.exp(-j*j/2);y.push(C),B===0?F+=C:B<E&&(F+=2*C)}for(let B=0;B<y.length;B++)y[B]=y[B]/F;x.envMap.value=t.texture,x.samples.value=E,x.weights.value=y,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:N}=this;x.dTheta.value=A,x.mipInt.value=N-r;const P=this._sizeLods[l],H=3*P*(l>N-Qr?l-N+Qr:0),O=4*(this._cubeSize-P);Fo(i,H,O,3*P,2*P),m.setRenderTarget(i),m.render(g,Wl)}}function RT(o){const t=[],i=[],r=[];let l=o;const c=o-Qr+1+Mv.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>o-Qr?m=Mv[h-o+Qr-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,g=1+p,x=[_,_,g,_,g,g,_,_,g,g,_,g],b=6,A=6,R=3,E=2,y=1,F=new Float32Array(R*A*b),N=new Float32Array(E*A*b),P=new Float32Array(y*A*b);for(let O=0;O<b;O++){const B=O%3*2/3-1,j=O>2?0:-1,C=[B,j,0,B+2/3,j,0,B+2/3,j+1,0,B,j,0,B+2/3,j+1,0,B,j+1,0];F.set(C,R*A*O),N.set(x,E*A*O);const L=[O,O,O,O,O,O];P.set(L,y*A*O)}const H=new li;H.setAttribute("position",new si(F,R)),H.setAttribute("uv",new si(N,E)),H.setAttribute("faceIndex",new si(P,y)),r.push(new Oi(H,null)),l>Qr&&l--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function Tv(o,t,i){const r=new Oa(o,t,i);return r.texture.mapping=sf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Fo(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function CT(o,t,i){return new Ia({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:TT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cf(),fragmentShader:`

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
		`,blending:fr,depthTest:!1,depthWrite:!1})}function wT(o,t,i){const r=new Float32Array(Os),l=new et(0,1,0);return new Ia({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:cf(),fragmentShader:`

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
		`,blending:fr,depthTest:!1,depthWrite:!1})}function Av(){return new Ia({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cf(),fragmentShader:`

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
		`,blending:fr,depthTest:!1,depthWrite:!1})}function Rv(){return new Ia({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function cf(){return`

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
	`}function DT(o){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Sp||m===Mp,_=m===Is||m===Vo;if(p||_){let g=t.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new Ev(o)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const b=d.image;return p&&b&&b.height>0||_&&b&&l(b)?(i===null&&(i=new Ev(o)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function UT(o){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=o.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&ec("WebGLRenderer: "+r+" extension not supported."),l}}}function LT(o,t,i,r){const l={},c=new WeakMap;function h(g){const x=g.target;x.index!==null&&t.remove(x.index);for(const A in x.attributes)t.remove(x.attributes[A]);x.removeEventListener("dispose",h),delete l[x.id];const b=c.get(x);b&&(t.remove(b),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(g,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(g){const x=g.attributes;for(const b in x)t.update(x[b],o.ARRAY_BUFFER)}function p(g){const x=[],b=g.index,A=g.attributes.position;let R=0;if(b!==null){const F=b.array;R=b.version;for(let N=0,P=F.length;N<P;N+=3){const H=F[N+0],O=F[N+1],B=F[N+2];x.push(H,O,O,B,B,H)}}else if(A!==void 0){const F=A.array;R=A.version;for(let N=0,P=F.length/3-1;N<P;N+=3){const H=N+0,O=N+1,B=N+2;x.push(H,O,O,B,B,H)}}else return;const E=new(mx(x)?yx:xx)(x,1);E.version=R;const y=c.get(g);y&&t.remove(y),c.set(g,E)}function _(g){const x=c.get(g);if(x){const b=g.index;b!==null&&x.version<b.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:_}}function NT(o,t,i){let r;function l(x){r=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function m(x,b){o.drawElements(r,b,c,x*h),i.update(b,r,1)}function p(x,b,A){A!==0&&(o.drawElementsInstanced(r,b,c,x*h,A),i.update(b,r,A))}function _(x,b,A){if(A===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,b,0,c,x,0,A);let E=0;for(let y=0;y<A;y++)E+=b[y];i.update(E,r,1)}function g(x,b,A,R){if(A===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let y=0;y<x.length;y++)p(x[y]/h,b[y],R[y]);else{E.multiDrawElementsInstancedWEBGL(r,b,0,c,x,0,R,0,A);let y=0;for(let F=0;F<A;F++)y+=b[F]*R[F];i.update(y,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function OT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:en("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function PT(o,t,i){const r=new WeakMap,l=new Nn;function c(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==g){let C=function(){B.dispose(),r.delete(d),d.removeEventListener("dispose",C)};x!==void 0&&x.texture.dispose();const b=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,R=d.morphAttributes.color!==void 0,E=d.morphAttributes.position||[],y=d.morphAttributes.normal||[],F=d.morphAttributes.color||[];let N=0;b===!0&&(N=1),A===!0&&(N=2),R===!0&&(N=3);let P=d.attributes.position.count*N,H=1;P>t.maxTextureSize&&(H=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const O=new Float32Array(P*H*4*g),B=new gx(O,P,H,g);B.type=Ua,B.needsUpdate=!0;const j=N*4;for(let L=0;L<g;L++){const k=E[L],J=y[L],rt=F[L],pt=P*H*4*L;for(let yt=0;yt<k.count;yt++){const z=yt*j;b===!0&&(l.fromBufferAttribute(k,yt),O[pt+z+0]=l.x,O[pt+z+1]=l.y,O[pt+z+2]=l.z,O[pt+z+3]=0),A===!0&&(l.fromBufferAttribute(J,yt),O[pt+z+4]=l.x,O[pt+z+5]=l.y,O[pt+z+6]=l.z,O[pt+z+7]=0),R===!0&&(l.fromBufferAttribute(rt,yt),O[pt+z+8]=l.x,O[pt+z+9]=l.y,O[pt+z+10]=l.z,O[pt+z+11]=rt.itemSize===4?l.w:1)}}x={count:g,texture:B,size:new we(P,H)},r.set(d,x),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let R=0;R<p.length;R++)b+=p[R];const A=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",A),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:c}}function FT(o,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,_=m.geometry,g=t.get(m,_);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return g}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const IT={[tx]:"LINEAR_TONE_MAPPING",[ex]:"REINHARD_TONE_MAPPING",[nx]:"CINEON_TONE_MAPPING",[cm]:"ACES_FILMIC_TONE_MAPPING",[ax]:"AGX_TONE_MAPPING",[rx]:"NEUTRAL_TONE_MAPPING",[ix]:"CUSTOM_TONE_MAPPING"};function BT(o,t,i,r,l){const c=new Oa(t,i,{type:o,depthBuffer:r,stencilBuffer:l}),h=new Oa(t,i,{type:dr,depthBuffer:!1,stencilBuffer:!1}),d=new li;d.setAttribute("position",new yi([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new yi([0,2,0,0,2,0],2));const m=new bM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Oi(d,m),_=new bm(-1,1,1,-1,0,1);let g=null,x=null,b=!1,A,R=null,E=[],y=!1;this.setSize=function(F,N){c.setSize(F,N),h.setSize(F,N);for(let P=0;P<E.length;P++){const H=E[P];H.setSize&&H.setSize(F,N)}},this.setEffects=function(F){E=F,y=E.length>0&&E[0].isRenderPass===!0;const N=c.width,P=c.height;for(let H=0;H<E.length;H++){const O=E[H];O.setSize&&O.setSize(N,P)}},this.begin=function(F,N){if(b||F.toneMapping===Na&&E.length===0)return!1;if(R=N,N!==null){const P=N.width,H=N.height;(c.width!==P||c.height!==H)&&this.setSize(P,H)}return y===!1&&F.setRenderTarget(c),A=F.toneMapping,F.toneMapping=Na,!0},this.hasRenderPass=function(){return y},this.end=function(F,N){F.toneMapping=A,b=!0;let P=c,H=h;for(let O=0;O<E.length;O++){const B=E[O];if(B.enabled!==!1&&(B.render(F,H,P,N),B.needsSwap!==!1)){const j=P;P=H,H=j}}if(g!==F.outputColorSpace||x!==F.toneMapping){g=F.outputColorSpace,x=F.toneMapping,m.defines={},Qe.getTransfer(g)===fn&&(m.defines.SRGB_TRANSFER="");const O=IT[x];O&&(m.defines[O]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=P.texture,F.setRenderTarget(R),F.render(p,_),R=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const Cx=new xi,am=new nc(1,1),wx=new gx,Dx=new JS,Ux=new bx,Cv=[],wv=[],Dv=new Float32Array(16),Uv=new Float32Array(9),Lv=new Float32Array(4);function qo(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let c=Cv[l];if(c===void 0&&(c=new Float32Array(l),Cv[l]=c),t!==0){r.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(c,d)}return c}function Zn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function Kn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function uf(o,t){let i=wv[t];i===void 0&&(i=new Int32Array(t),wv[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function zT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function HT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Zn(i,t))return;o.uniform2fv(this.addr,t),Kn(i,t)}}function GT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Zn(i,t))return;o.uniform3fv(this.addr,t),Kn(i,t)}}function VT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Zn(i,t))return;o.uniform4fv(this.addr,t),Kn(i,t)}}function kT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(Zn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),Kn(i,t)}else{if(Zn(i,r))return;Lv.set(r),o.uniformMatrix2fv(this.addr,!1,Lv),Kn(i,r)}}function XT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(Zn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),Kn(i,t)}else{if(Zn(i,r))return;Uv.set(r),o.uniformMatrix3fv(this.addr,!1,Uv),Kn(i,r)}}function WT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(Zn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),Kn(i,t)}else{if(Zn(i,r))return;Dv.set(r),o.uniformMatrix4fv(this.addr,!1,Dv),Kn(i,r)}}function YT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function qT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Zn(i,t))return;o.uniform2iv(this.addr,t),Kn(i,t)}}function jT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Zn(i,t))return;o.uniform3iv(this.addr,t),Kn(i,t)}}function ZT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Zn(i,t))return;o.uniform4iv(this.addr,t),Kn(i,t)}}function KT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function QT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Zn(i,t))return;o.uniform2uiv(this.addr,t),Kn(i,t)}}function JT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Zn(i,t))return;o.uniform3uiv(this.addr,t),Kn(i,t)}}function $T(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Zn(i,t))return;o.uniform4uiv(this.addr,t),Kn(i,t)}}function t1(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(am.compareFunction=i.isReversedDepthBuffer()?_m:gm,c=am):c=Cx,i.setTexture2D(t||c,l)}function e1(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Dx,l)}function n1(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Ux,l)}function i1(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||wx,l)}function a1(o){switch(o){case 5126:return zT;case 35664:return HT;case 35665:return GT;case 35666:return VT;case 35674:return kT;case 35675:return XT;case 35676:return WT;case 5124:case 35670:return YT;case 35667:case 35671:return qT;case 35668:case 35672:return jT;case 35669:case 35673:return ZT;case 5125:return KT;case 36294:return QT;case 36295:return JT;case 36296:return $T;case 35678:case 36198:case 36298:case 36306:case 35682:return t1;case 35679:case 36299:case 36307:return e1;case 35680:case 36300:case 36308:case 36293:return n1;case 36289:case 36303:case 36311:case 36292:return i1}}function r1(o,t){o.uniform1fv(this.addr,t)}function s1(o,t){const i=qo(t,this.size,2);o.uniform2fv(this.addr,i)}function o1(o,t){const i=qo(t,this.size,3);o.uniform3fv(this.addr,i)}function l1(o,t){const i=qo(t,this.size,4);o.uniform4fv(this.addr,i)}function c1(o,t){const i=qo(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function u1(o,t){const i=qo(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function f1(o,t){const i=qo(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function h1(o,t){o.uniform1iv(this.addr,t)}function d1(o,t){o.uniform2iv(this.addr,t)}function p1(o,t){o.uniform3iv(this.addr,t)}function m1(o,t){o.uniform4iv(this.addr,t)}function g1(o,t){o.uniform1uiv(this.addr,t)}function _1(o,t){o.uniform2uiv(this.addr,t)}function v1(o,t){o.uniform3uiv(this.addr,t)}function x1(o,t){o.uniform4uiv(this.addr,t)}function y1(o,t,i){const r=this.cache,l=t.length,c=uf(i,l);Zn(r,c)||(o.uniform1iv(this.addr,c),Kn(r,c));let h;this.type===o.SAMPLER_2D_SHADOW?h=am:h=Cx;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,c[d])}function S1(o,t,i){const r=this.cache,l=t.length,c=uf(i,l);Zn(r,c)||(o.uniform1iv(this.addr,c),Kn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Dx,c[h])}function M1(o,t,i){const r=this.cache,l=t.length,c=uf(i,l);Zn(r,c)||(o.uniform1iv(this.addr,c),Kn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Ux,c[h])}function b1(o,t,i){const r=this.cache,l=t.length,c=uf(i,l);Zn(r,c)||(o.uniform1iv(this.addr,c),Kn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||wx,c[h])}function E1(o){switch(o){case 5126:return r1;case 35664:return s1;case 35665:return o1;case 35666:return l1;case 35674:return c1;case 35675:return u1;case 35676:return f1;case 5124:case 35670:return h1;case 35667:case 35671:return d1;case 35668:case 35672:return p1;case 35669:case 35673:return m1;case 5125:return g1;case 36294:return _1;case 36295:return v1;case 36296:return x1;case 35678:case 36198:case 36298:case 36306:case 35682:return y1;case 35679:case 36299:case 36307:return S1;case 35680:case 36300:case 36308:case 36293:return M1;case 36289:case 36303:case 36311:case 36292:return b1}}class T1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=a1(i.type)}}class A1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=E1(i.type)}}class R1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],r)}}}const sp=/(\w+)(\])?(\[|\.)?/g;function Nv(o,t){o.seq.push(t),o.map[t.id]=t}function C1(o,t,i){const r=o.name,l=r.length;for(sp.lastIndex=0;;){const c=sp.exec(r),h=sp.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){Nv(i,p===void 0?new T1(d,o,t):new A1(d,o,t));break}else{let g=i.map[d];g===void 0&&(g=new R1(d),Nv(i,g)),i=g}}}class Qu{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<r;++h){const d=t.getActiveUniform(i,h),m=t.getUniformLocation(i,d.name);C1(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function Ov(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const w1=37297;let D1=0;function U1(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const Pv=new Oe;function L1(o){Qe._getMatrix(Pv,Qe.workingColorSpace,o);const t=`mat3( ${Pv.elements.map(i=>i.toFixed(4))} )`;switch(Qe.getTransfer(o)){case tf:return[t,"LinearTransferOETF"];case fn:return[t,"sRGBTransferOETF"];default:return Se("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Fv(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+U1(o.getShaderSource(t),d)}else return c}function N1(o,t){const i=L1(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const O1={[tx]:"Linear",[ex]:"Reinhard",[nx]:"Cineon",[cm]:"ACESFilmic",[ax]:"AgX",[rx]:"Neutral",[ix]:"Custom"};function P1(o,t){const i=O1[t];return i===void 0?(Se("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Vu=new et;function F1(){Qe.getLuminanceCoefficients(Vu);const o=Vu.x.toFixed(4),t=Vu.y.toFixed(4),i=Vu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function I1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kl).join(`
`)}function B1(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function z1(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(t,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Kl(o){return o!==""}function Iv(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bv(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const H1=/^[ \t]*#include +<([\w\d./]+)>/gm;function rm(o){return o.replace(H1,V1)}const G1=new Map;function V1(o,t){let i=Pe[t];if(i===void 0){const r=G1.get(t);if(r!==void 0)i=Pe[r],Se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return rm(i)}const k1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zv(o){return o.replace(k1,X1)}function X1(o,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Hv(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const W1={[Xu]:"SHADOWMAP_TYPE_PCF",[jl]:"SHADOWMAP_TYPE_VSM"};function Y1(o){return W1[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const q1={[Is]:"ENVMAP_TYPE_CUBE",[Vo]:"ENVMAP_TYPE_CUBE",[sf]:"ENVMAP_TYPE_CUBE_UV"};function j1(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":q1[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const Z1={[Vo]:"ENVMAP_MODE_REFRACTION"};function K1(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":Z1[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Q1={[$v]:"ENVMAP_BLENDING_MULTIPLY",[LS]:"ENVMAP_BLENDING_MIX",[NS]:"ENVMAP_BLENDING_ADD"};function J1(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":Q1[o.combine]||"ENVMAP_BLENDING_NONE"}function $1(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function tA(o,t,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Y1(i),p=j1(i),_=K1(i),g=J1(i),x=$1(i),b=I1(i),A=B1(c),R=l.createProgram();let E,y,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(E=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Kl).join(`
`),E.length>0&&(E+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Kl).join(`
`),y.length>0&&(y+=`
`)):(E=[Hv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kl).join(`
`),y=[Hv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Na?"#define TONE_MAPPING":"",i.toneMapping!==Na?Pe.tonemapping_pars_fragment:"",i.toneMapping!==Na?P1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Pe.colorspace_pars_fragment,N1("linearToOutputTexel",i.outputColorSpace),F1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Kl).join(`
`)),h=rm(h),h=Iv(h,i),h=Bv(h,i),d=rm(d),d=Iv(d,i),d=Bv(d,i),h=zv(h),d=zv(d),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,E=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,y=["#define varying in",i.glslVersion===Y_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Y_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const N=F+E+h,P=F+y+d,H=Ov(l,l.VERTEX_SHADER,N),O=Ov(l,l.FRAGMENT_SHADER,P);l.attachShader(R,H),l.attachShader(R,O),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function B(k){if(o.debug.checkShaderErrors){const J=l.getProgramInfoLog(R)||"",rt=l.getShaderInfoLog(H)||"",pt=l.getShaderInfoLog(O)||"",yt=J.trim(),z=rt.trim(),W=pt.trim();let at=!0,Ot=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(at=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,H,O);else{const Lt=Fv(l,H,"vertex"),G=Fv(l,O,"fragment");en("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+yt+`
`+Lt+`
`+G)}else yt!==""?Se("WebGLProgram: Program Info Log:",yt):(z===""||W==="")&&(Ot=!1);Ot&&(k.diagnostics={runnable:at,programLog:yt,vertexShader:{log:z,prefix:E},fragmentShader:{log:W,prefix:y}})}l.deleteShader(H),l.deleteShader(O),j=new Qu(l,R),C=z1(l,R)}let j;this.getUniforms=function(){return j===void 0&&B(this),j};let C;this.getAttributes=function(){return C===void 0&&B(this),C};let L=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=l.getProgramParameter(R,w1)),L},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=D1++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=H,this.fragmentShader=O,this}let eA=0;class nA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new iA(t),i.set(t,r)),r}}class iA{constructor(t){this.id=eA++,this.code=t,this.usedTimes=0}}function aA(o,t,i,r,l,c,h){const d=new _x,m=new nA,p=new Set,_=[],g=new Map,x=l.logarithmicDepthBuffer;let b=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(C){return p.add(C),C===0?"uv":`uv${C}`}function E(C,L,k,J,rt){const pt=J.fog,yt=rt.geometry,z=C.isMeshStandardMaterial?J.environment:null,W=(C.isMeshStandardMaterial?i:t).get(C.envMap||z),at=W&&W.mapping===sf?W.image.height:null,Ot=A[C.type];C.precision!==null&&(b=l.getMaxPrecision(C.precision),b!==C.precision&&Se("WebGLProgram.getParameters:",C.precision,"not supported, using",b,"instead."));const Lt=yt.morphAttributes.position||yt.morphAttributes.normal||yt.morphAttributes.color,G=Lt!==void 0?Lt.length:0;let ft=0;yt.morphAttributes.position!==void 0&&(ft=1),yt.morphAttributes.normal!==void 0&&(ft=2),yt.morphAttributes.color!==void 0&&(ft=3);let At,Vt,It,nt;if(Ot){const Xe=Da[Ot];At=Xe.vertexShader,Vt=Xe.fragmentShader}else At=C.vertexShader,Vt=C.fragmentShader,m.update(C),It=m.getVertexShaderID(C),nt=m.getFragmentShaderID(C);const lt=o.getRenderTarget(),Gt=o.state.buffers.depth.getReversed(),jt=rt.isInstancedMesh===!0,kt=rt.isBatchedMesh===!0,Te=!!C.map,nn=!!C.matcap,De=!!W,Ee=!!C.aoMap,Be=!!C.lightMap,ve=!!C.bumpMap,ln=!!C.normalMap,Y=!!C.displacementMap,vn=!!C.emissiveMap,Ge=!!C.metalnessMap,je=!!C.roughnessMap,ne=C.anisotropy>0,I=C.clearcoat>0,T=C.dispersion>0,Q=C.iridescence>0,bt=C.sheen>0,wt=C.transmission>0,_t=ne&&!!C.anisotropyMap,le=I&&!!C.clearcoatMap,Xt=I&&!!C.clearcoatNormalMap,ae=I&&!!C.clearcoatRoughnessMap,he=Q&&!!C.iridescenceMap,Pt=Q&&!!C.iridescenceThicknessMap,Ht=bt&&!!C.sheenColorMap,te=bt&&!!C.sheenRoughnessMap,Zt=!!C.specularMap,qt=!!C.specularColorMap,Re=!!C.specularIntensityMap,K=wt&&!!C.transmissionMap,Kt=wt&&!!C.thicknessMap,Ut=!!C.gradientMap,Qt=!!C.alphaMap,xt=C.alphaTest>0,Rt=!!C.alphaHash,zt=!!C.extensions;let de=Na;C.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(de=o.toneMapping);const an={shaderID:Ot,shaderType:C.type,shaderName:C.name,vertexShader:At,fragmentShader:Vt,defines:C.defines,customVertexShaderID:It,customFragmentShaderID:nt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:b,batching:kt,batchingColor:kt&&rt._colorsTexture!==null,instancing:jt,instancingColor:jt&&rt.instanceColor!==null,instancingMorph:jt&&rt.morphTexture!==null,outputColorSpace:lt===null?o.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Xo,alphaToCoverage:!!C.alphaToCoverage,map:Te,matcap:nn,envMap:De,envMapMode:De&&W.mapping,envMapCubeUVHeight:at,aoMap:Ee,lightMap:Be,bumpMap:ve,normalMap:ln,displacementMap:Y,emissiveMap:vn,normalMapObjectSpace:ln&&C.normalMapType===FS,normalMapTangentSpace:ln&&C.normalMapType===px,metalnessMap:Ge,roughnessMap:je,anisotropy:ne,anisotropyMap:_t,clearcoat:I,clearcoatMap:le,clearcoatNormalMap:Xt,clearcoatRoughnessMap:ae,dispersion:T,iridescence:Q,iridescenceMap:he,iridescenceThicknessMap:Pt,sheen:bt,sheenColorMap:Ht,sheenRoughnessMap:te,specularMap:Zt,specularColorMap:qt,specularIntensityMap:Re,transmission:wt,transmissionMap:K,thicknessMap:Kt,gradientMap:Ut,opaque:C.transparent===!1&&C.blending===zo&&C.alphaToCoverage===!1,alphaMap:Qt,alphaTest:xt,alphaHash:Rt,combine:C.combine,mapUv:Te&&R(C.map.channel),aoMapUv:Ee&&R(C.aoMap.channel),lightMapUv:Be&&R(C.lightMap.channel),bumpMapUv:ve&&R(C.bumpMap.channel),normalMapUv:ln&&R(C.normalMap.channel),displacementMapUv:Y&&R(C.displacementMap.channel),emissiveMapUv:vn&&R(C.emissiveMap.channel),metalnessMapUv:Ge&&R(C.metalnessMap.channel),roughnessMapUv:je&&R(C.roughnessMap.channel),anisotropyMapUv:_t&&R(C.anisotropyMap.channel),clearcoatMapUv:le&&R(C.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&R(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&R(C.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&R(C.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&R(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&R(C.sheenColorMap.channel),sheenRoughnessMapUv:te&&R(C.sheenRoughnessMap.channel),specularMapUv:Zt&&R(C.specularMap.channel),specularColorMapUv:qt&&R(C.specularColorMap.channel),specularIntensityMapUv:Re&&R(C.specularIntensityMap.channel),transmissionMapUv:K&&R(C.transmissionMap.channel),thicknessMapUv:Kt&&R(C.thicknessMap.channel),alphaMapUv:Qt&&R(C.alphaMap.channel),vertexTangents:!!yt.attributes.tangent&&(ln||ne),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!yt.attributes.color&&yt.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!yt.attributes.uv&&(Te||Qt),fog:!!pt,useFog:C.fog===!0,fogExp2:!!pt&&pt.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Gt,skinning:rt.isSkinnedMesh===!0,morphTargets:yt.morphAttributes.position!==void 0,morphNormals:yt.morphAttributes.normal!==void 0,morphColors:yt.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:ft,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:de,decodeVideoTexture:Te&&C.map.isVideoTexture===!0&&Qe.getTransfer(C.map.colorSpace)===fn,decodeVideoTextureEmissive:vn&&C.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(C.emissiveMap.colorSpace)===fn,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ji,flipSided:C.side===Pi,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:zt&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&C.extensions.multiDraw===!0||kt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return an.vertexUv1s=p.has(1),an.vertexUv2s=p.has(2),an.vertexUv3s=p.has(3),p.clear(),an}function y(C){const L=[];if(C.shaderID?L.push(C.shaderID):(L.push(C.customVertexShaderID),L.push(C.customFragmentShaderID)),C.defines!==void 0)for(const k in C.defines)L.push(k),L.push(C.defines[k]);return C.isRawShaderMaterial===!1&&(F(L,C),N(L,C),L.push(o.outputColorSpace)),L.push(C.customProgramCacheKey),L.join()}function F(C,L){C.push(L.precision),C.push(L.outputColorSpace),C.push(L.envMapMode),C.push(L.envMapCubeUVHeight),C.push(L.mapUv),C.push(L.alphaMapUv),C.push(L.lightMapUv),C.push(L.aoMapUv),C.push(L.bumpMapUv),C.push(L.normalMapUv),C.push(L.displacementMapUv),C.push(L.emissiveMapUv),C.push(L.metalnessMapUv),C.push(L.roughnessMapUv),C.push(L.anisotropyMapUv),C.push(L.clearcoatMapUv),C.push(L.clearcoatNormalMapUv),C.push(L.clearcoatRoughnessMapUv),C.push(L.iridescenceMapUv),C.push(L.iridescenceThicknessMapUv),C.push(L.sheenColorMapUv),C.push(L.sheenRoughnessMapUv),C.push(L.specularMapUv),C.push(L.specularColorMapUv),C.push(L.specularIntensityMapUv),C.push(L.transmissionMapUv),C.push(L.thicknessMapUv),C.push(L.combine),C.push(L.fogExp2),C.push(L.sizeAttenuation),C.push(L.morphTargetsCount),C.push(L.morphAttributeCount),C.push(L.numDirLights),C.push(L.numPointLights),C.push(L.numSpotLights),C.push(L.numSpotLightMaps),C.push(L.numHemiLights),C.push(L.numRectAreaLights),C.push(L.numDirLightShadows),C.push(L.numPointLightShadows),C.push(L.numSpotLightShadows),C.push(L.numSpotLightShadowsWithMaps),C.push(L.numLightProbes),C.push(L.shadowMapType),C.push(L.toneMapping),C.push(L.numClippingPlanes),C.push(L.numClipIntersection),C.push(L.depthPacking)}function N(C,L){d.disableAll(),L.instancing&&d.enable(0),L.instancingColor&&d.enable(1),L.instancingMorph&&d.enable(2),L.matcap&&d.enable(3),L.envMap&&d.enable(4),L.normalMapObjectSpace&&d.enable(5),L.normalMapTangentSpace&&d.enable(6),L.clearcoat&&d.enable(7),L.iridescence&&d.enable(8),L.alphaTest&&d.enable(9),L.vertexColors&&d.enable(10),L.vertexAlphas&&d.enable(11),L.vertexUv1s&&d.enable(12),L.vertexUv2s&&d.enable(13),L.vertexUv3s&&d.enable(14),L.vertexTangents&&d.enable(15),L.anisotropy&&d.enable(16),L.alphaHash&&d.enable(17),L.batching&&d.enable(18),L.dispersion&&d.enable(19),L.batchingColor&&d.enable(20),L.gradientMap&&d.enable(21),C.push(d.mask),d.disableAll(),L.fog&&d.enable(0),L.useFog&&d.enable(1),L.flatShading&&d.enable(2),L.logarithmicDepthBuffer&&d.enable(3),L.reversedDepthBuffer&&d.enable(4),L.skinning&&d.enable(5),L.morphTargets&&d.enable(6),L.morphNormals&&d.enable(7),L.morphColors&&d.enable(8),L.premultipliedAlpha&&d.enable(9),L.shadowMapEnabled&&d.enable(10),L.doubleSided&&d.enable(11),L.flipSided&&d.enable(12),L.useDepthPacking&&d.enable(13),L.dithering&&d.enable(14),L.transmission&&d.enable(15),L.sheen&&d.enable(16),L.opaque&&d.enable(17),L.pointsUvs&&d.enable(18),L.decodeVideoTexture&&d.enable(19),L.decodeVideoTextureEmissive&&d.enable(20),L.alphaToCoverage&&d.enable(21),C.push(d.mask)}function P(C){const L=A[C.type];let k;if(L){const J=Da[L];k=fM.clone(J.uniforms)}else k=C.uniforms;return k}function H(C,L){let k=g.get(L);return k!==void 0?++k.usedTimes:(k=new tA(o,L,C,c),_.push(k),g.set(L,k)),k}function O(C){if(--C.usedTimes===0){const L=_.indexOf(C);_[L]=_[_.length-1],_.pop(),g.delete(C.cacheKey),C.destroy()}}function B(C){m.remove(C)}function j(){m.dispose()}return{getParameters:E,getProgramCacheKey:y,getUniforms:P,acquireProgram:H,releaseProgram:O,releaseShaderCache:B,programs:_,dispose:j}}function rA(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function sA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Gv(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Vv(){const o=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function h(g,x,b,A,R,E){let y=o[t];return y===void 0?(y={id:g.id,object:g,geometry:x,material:b,groupOrder:A,renderOrder:g.renderOrder,z:R,group:E},o[t]=y):(y.id=g.id,y.object=g,y.geometry=x,y.material=b,y.groupOrder=A,y.renderOrder=g.renderOrder,y.z=R,y.group=E),t++,y}function d(g,x,b,A,R,E){const y=h(g,x,b,A,R,E);b.transmission>0?r.push(y):b.transparent===!0?l.push(y):i.push(y)}function m(g,x,b,A,R,E){const y=h(g,x,b,A,R,E);b.transmission>0?r.unshift(y):b.transparent===!0?l.unshift(y):i.unshift(y)}function p(g,x){i.length>1&&i.sort(g||sA),r.length>1&&r.sort(x||Gv),l.length>1&&l.sort(x||Gv)}function _(){for(let g=t,x=o.length;g<x;g++){const b=o[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:_,sort:p}}function oA(){let o=new WeakMap;function t(r,l){const c=o.get(r);let h;return c===void 0?(h=new Vv,o.set(r,[h])):l>=c.length?(h=new Vv,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function lA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new et,color:new Ie};break;case"SpotLight":i={position:new et,direction:new et,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new et,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":i={direction:new et,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":i={color:new Ie,position:new et,halfWidth:new et,halfHeight:new et};break}return o[t.id]=i,i}}}function cA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let uA=0;function fA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function hA(o){const t=new lA,i=cA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new et);const l=new et,c=new An,h=new An;function d(p){let _=0,g=0,x=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let b=0,A=0,R=0,E=0,y=0,F=0,N=0,P=0,H=0,O=0,B=0;p.sort(fA);for(let C=0,L=p.length;C<L;C++){const k=p[C],J=k.color,rt=k.intensity,pt=k.distance;let yt=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===ko?yt=k.shadow.map.texture:yt=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)_+=J.r*rt,g+=J.g*rt,x+=J.b*rt;else if(k.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(k.sh.coefficients[z],rt);B++}else if(k.isDirectionalLight){const z=t.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const W=k.shadow,at=i.get(k);at.shadowIntensity=W.intensity,at.shadowBias=W.bias,at.shadowNormalBias=W.normalBias,at.shadowRadius=W.radius,at.shadowMapSize=W.mapSize,r.directionalShadow[b]=at,r.directionalShadowMap[b]=yt,r.directionalShadowMatrix[b]=k.shadow.matrix,F++}r.directional[b]=z,b++}else if(k.isSpotLight){const z=t.get(k);z.position.setFromMatrixPosition(k.matrixWorld),z.color.copy(J).multiplyScalar(rt),z.distance=pt,z.coneCos=Math.cos(k.angle),z.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),z.decay=k.decay,r.spot[R]=z;const W=k.shadow;if(k.map&&(r.spotLightMap[H]=k.map,H++,W.updateMatrices(k),k.castShadow&&O++),r.spotLightMatrix[R]=W.matrix,k.castShadow){const at=i.get(k);at.shadowIntensity=W.intensity,at.shadowBias=W.bias,at.shadowNormalBias=W.normalBias,at.shadowRadius=W.radius,at.shadowMapSize=W.mapSize,r.spotShadow[R]=at,r.spotShadowMap[R]=yt,P++}R++}else if(k.isRectAreaLight){const z=t.get(k);z.color.copy(J).multiplyScalar(rt),z.halfWidth.set(k.width*.5,0,0),z.halfHeight.set(0,k.height*.5,0),r.rectArea[E]=z,E++}else if(k.isPointLight){const z=t.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity),z.distance=k.distance,z.decay=k.decay,k.castShadow){const W=k.shadow,at=i.get(k);at.shadowIntensity=W.intensity,at.shadowBias=W.bias,at.shadowNormalBias=W.normalBias,at.shadowRadius=W.radius,at.shadowMapSize=W.mapSize,at.shadowCameraNear=W.camera.near,at.shadowCameraFar=W.camera.far,r.pointShadow[A]=at,r.pointShadowMap[A]=yt,r.pointShadowMatrix[A]=k.shadow.matrix,N++}r.point[A]=z,A++}else if(k.isHemisphereLight){const z=t.get(k);z.skyColor.copy(k.color).multiplyScalar(rt),z.groundColor.copy(k.groundColor).multiplyScalar(rt),r.hemi[y]=z,y++}}E>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ee.LTC_FLOAT_1,r.rectAreaLTC2=ee.LTC_FLOAT_2):(r.rectAreaLTC1=ee.LTC_HALF_1,r.rectAreaLTC2=ee.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=x;const j=r.hash;(j.directionalLength!==b||j.pointLength!==A||j.spotLength!==R||j.rectAreaLength!==E||j.hemiLength!==y||j.numDirectionalShadows!==F||j.numPointShadows!==N||j.numSpotShadows!==P||j.numSpotMaps!==H||j.numLightProbes!==B)&&(r.directional.length=b,r.spot.length=R,r.rectArea.length=E,r.point.length=A,r.hemi.length=y,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=F,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=P+H-O,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=B,j.directionalLength=b,j.pointLength=A,j.spotLength=R,j.rectAreaLength=E,j.hemiLength=y,j.numDirectionalShadows=F,j.numPointShadows=N,j.numSpotShadows=P,j.numSpotMaps=H,j.numLightProbes=B,r.version=uA++)}function m(p,_){let g=0,x=0,b=0,A=0,R=0;const E=_.matrixWorldInverse;for(let y=0,F=p.length;y<F;y++){const N=p[y];if(N.isDirectionalLight){const P=r.directional[g];P.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(E),g++}else if(N.isSpotLight){const P=r.spot[b];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(E),P.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(E),b++}else if(N.isRectAreaLight){const P=r.rectArea[A];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(E),h.identity(),c.copy(N.matrixWorld),c.premultiply(E),h.extractRotation(c),P.halfWidth.set(N.width*.5,0,0),P.halfHeight.set(0,N.height*.5,0),P.halfWidth.applyMatrix4(h),P.halfHeight.applyMatrix4(h),A++}else if(N.isPointLight){const P=r.point[x];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(E),x++}else if(N.isHemisphereLight){const P=r.hemi[R];P.direction.setFromMatrixPosition(N.matrixWorld),P.direction.transformDirection(E),R++}}}return{setup:d,setupView:m,state:r}}function kv(o){const t=new hA(o),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function c(_){i.push(_)}function h(_){r.push(_)}function d(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function dA(o){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new kv(o),t.set(l,[d])):c>=h.length?(d=new kv(o),h.push(d)):d=h[c],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const pA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mA=`uniform sampler2D shadow_pass;
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
}`,gA=[new et(1,0,0),new et(-1,0,0),new et(0,1,0),new et(0,-1,0),new et(0,0,1),new et(0,0,-1)],_A=[new et(0,-1,0),new et(0,-1,0),new et(0,0,1),new et(0,0,-1),new et(0,-1,0),new et(0,-1,0)],Xv=new An,Yl=new et,op=new et;function vA(o,t,i){let r=new Sm;const l=new we,c=new we,h=new Nn,d=new TM,m=new AM,p={},_=i.maxTextureSize,g={[Jr]:Pi,[Pi]:Jr,[ji]:ji},x=new Ia({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:pA,fragmentShader:mA}),b=x.clone();b.defines.HORIZONTAL_PASS=1;const A=new li;A.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Oi(A,x),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xu;let y=this.type;this.render=function(O,B,j){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||O.length===0)return;O.type===dS&&(Se("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),O.type=Xu);const C=o.getRenderTarget(),L=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),J=o.state;J.setBlending(fr),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const rt=y!==this.type;rt&&B.traverse(function(pt){pt.material&&(Array.isArray(pt.material)?pt.material.forEach(yt=>yt.needsUpdate=!0):pt.material.needsUpdate=!0)});for(let pt=0,yt=O.length;pt<yt;pt++){const z=O[pt],W=z.shadow;if(W===void 0){Se("WebGLShadowMap:",z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const at=W.getFrameExtents();if(l.multiply(at),c.copy(W.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/at.x),l.x=c.x*at.x,W.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/at.y),l.y=c.y*at.y,W.mapSize.y=c.y)),W.map===null||rt===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===jl){if(z.isPointLight){Se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Oa(l.x,l.y,{format:ko,type:dr,minFilter:di,magFilter:di,generateMipmaps:!1}),W.map.texture.name=z.name+".shadowMap",W.map.depthTexture=new nc(l.x,l.y,Ua),W.map.depthTexture.name=z.name+".shadowMapDepth",W.map.depthTexture.format=pr,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=ri,W.map.depthTexture.magFilter=ri}else{z.isPointLight?(W.map=new Ex(l.x),W.map.depthTexture=new MM(l.x,Pa)):(W.map=new Oa(l.x,l.y),W.map.depthTexture=new nc(l.x,l.y,Pa)),W.map.depthTexture.name=z.name+".shadowMap",W.map.depthTexture.format=pr;const Lt=o.state.buffers.depth.getReversed();this.type===Xu?(W.map.depthTexture.compareFunction=Lt?_m:gm,W.map.depthTexture.minFilter=di,W.map.depthTexture.magFilter=di):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=ri,W.map.depthTexture.magFilter=ri)}W.camera.updateProjectionMatrix()}const Ot=W.map.isWebGLCubeRenderTarget?6:1;for(let Lt=0;Lt<Ot;Lt++){if(W.map.isWebGLCubeRenderTarget)o.setRenderTarget(W.map,Lt),o.clear();else{Lt===0&&(o.setRenderTarget(W.map),o.clear());const G=W.getViewport(Lt);h.set(c.x*G.x,c.y*G.y,c.x*G.z,c.y*G.w),J.viewport(h)}if(z.isPointLight){const G=W.camera,ft=W.matrix,At=z.distance||G.far;At!==G.far&&(G.far=At,G.updateProjectionMatrix()),Yl.setFromMatrixPosition(z.matrixWorld),G.position.copy(Yl),op.copy(G.position),op.add(gA[Lt]),G.up.copy(_A[Lt]),G.lookAt(op),G.updateMatrixWorld(),ft.makeTranslation(-Yl.x,-Yl.y,-Yl.z),Xv.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Xv,G.coordinateSystem,G.reversedDepth)}else W.updateMatrices(z);r=W.getFrustum(),P(B,j,W.camera,z,this.type)}W.isPointLightShadow!==!0&&this.type===jl&&F(W,j),W.needsUpdate=!1}y=this.type,E.needsUpdate=!1,o.setRenderTarget(C,L,k)};function F(O,B){const j=t.update(R);x.defines.VSM_SAMPLES!==O.blurSamples&&(x.defines.VSM_SAMPLES=O.blurSamples,b.defines.VSM_SAMPLES=O.blurSamples,x.needsUpdate=!0,b.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Oa(l.x,l.y,{format:ko,type:dr})),x.uniforms.shadow_pass.value=O.map.depthTexture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(B,null,j,x,R,null),b.uniforms.shadow_pass.value=O.mapPass.texture,b.uniforms.resolution.value=O.mapSize,b.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(B,null,j,b,R,null)}function N(O,B,j,C){let L=null;const k=j.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(k!==void 0)L=k;else if(L=j.isPointLight===!0?m:d,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const J=L.uuid,rt=B.uuid;let pt=p[J];pt===void 0&&(pt={},p[J]=pt);let yt=pt[rt];yt===void 0&&(yt=L.clone(),pt[rt]=yt,B.addEventListener("dispose",H)),L=yt}if(L.visible=B.visible,L.wireframe=B.wireframe,C===jl?L.side=B.shadowSide!==null?B.shadowSide:B.side:L.side=B.shadowSide!==null?B.shadowSide:g[B.side],L.alphaMap=B.alphaMap,L.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,L.map=B.map,L.clipShadows=B.clipShadows,L.clippingPlanes=B.clippingPlanes,L.clipIntersection=B.clipIntersection,L.displacementMap=B.displacementMap,L.displacementScale=B.displacementScale,L.displacementBias=B.displacementBias,L.wireframeLinewidth=B.wireframeLinewidth,L.linewidth=B.linewidth,j.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const J=o.properties.get(L);J.light=j}return L}function P(O,B,j,C,L){if(O.visible===!1)return;if(O.layers.test(B.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&L===jl)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,O.matrixWorld);const rt=t.update(O),pt=O.material;if(Array.isArray(pt)){const yt=rt.groups;for(let z=0,W=yt.length;z<W;z++){const at=yt[z],Ot=pt[at.materialIndex];if(Ot&&Ot.visible){const Lt=N(O,Ot,C,L);O.onBeforeShadow(o,O,B,j,rt,Lt,at),o.renderBufferDirect(j,null,rt,Lt,O,at),O.onAfterShadow(o,O,B,j,rt,Lt,at)}}}else if(pt.visible){const yt=N(O,pt,C,L);O.onBeforeShadow(o,O,B,j,rt,yt,null),o.renderBufferDirect(j,null,rt,yt,O,null),O.onAfterShadow(o,O,B,j,rt,yt,null)}}const J=O.children;for(let rt=0,pt=J.length;rt<pt;rt++)P(J[rt],B,j,C,L)}function H(O){O.target.removeEventListener("dispose",H);for(const j in p){const C=p[j],L=O.target.uuid;L in C&&(C[L].dispose(),delete C[L])}}}const xA={[pp]:mp,[gp]:xp,[_p]:yp,[Go]:vp,[mp]:pp,[xp]:gp,[yp]:_p,[vp]:Go};function yA(o,t){function i(){let K=!1;const Kt=new Nn;let Ut=null;const Qt=new Nn(0,0,0,0);return{setMask:function(xt){Ut!==xt&&!K&&(o.colorMask(xt,xt,xt,xt),Ut=xt)},setLocked:function(xt){K=xt},setClear:function(xt,Rt,zt,de,an){an===!0&&(xt*=de,Rt*=de,zt*=de),Kt.set(xt,Rt,zt,de),Qt.equals(Kt)===!1&&(o.clearColor(xt,Rt,zt,de),Qt.copy(Kt))},reset:function(){K=!1,Ut=null,Qt.set(-1,0,0,0)}}}function r(){let K=!1,Kt=!1,Ut=null,Qt=null,xt=null;return{setReversed:function(Rt){if(Kt!==Rt){const zt=t.get("EXT_clip_control");Rt?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),Kt=Rt;const de=xt;xt=null,this.setClear(de)}},getReversed:function(){return Kt},setTest:function(Rt){Rt?lt(o.DEPTH_TEST):Gt(o.DEPTH_TEST)},setMask:function(Rt){Ut!==Rt&&!K&&(o.depthMask(Rt),Ut=Rt)},setFunc:function(Rt){if(Kt&&(Rt=xA[Rt]),Qt!==Rt){switch(Rt){case pp:o.depthFunc(o.NEVER);break;case mp:o.depthFunc(o.ALWAYS);break;case gp:o.depthFunc(o.LESS);break;case Go:o.depthFunc(o.LEQUAL);break;case _p:o.depthFunc(o.EQUAL);break;case vp:o.depthFunc(o.GEQUAL);break;case xp:o.depthFunc(o.GREATER);break;case yp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Qt=Rt}},setLocked:function(Rt){K=Rt},setClear:function(Rt){xt!==Rt&&(Kt&&(Rt=1-Rt),o.clearDepth(Rt),xt=Rt)},reset:function(){K=!1,Ut=null,Qt=null,xt=null,Kt=!1}}}function l(){let K=!1,Kt=null,Ut=null,Qt=null,xt=null,Rt=null,zt=null,de=null,an=null;return{setTest:function(Xe){K||(Xe?lt(o.STENCIL_TEST):Gt(o.STENCIL_TEST))},setMask:function(Xe){Kt!==Xe&&!K&&(o.stencilMask(Xe),Kt=Xe)},setFunc:function(Xe,Bn,pi){(Ut!==Xe||Qt!==Bn||xt!==pi)&&(o.stencilFunc(Xe,Bn,pi),Ut=Xe,Qt=Bn,xt=pi)},setOp:function(Xe,Bn,pi){(Rt!==Xe||zt!==Bn||de!==pi)&&(o.stencilOp(Xe,Bn,pi),Rt=Xe,zt=Bn,de=pi)},setLocked:function(Xe){K=Xe},setClear:function(Xe){an!==Xe&&(o.clearStencil(Xe),an=Xe)},reset:function(){K=!1,Kt=null,Ut=null,Qt=null,xt=null,Rt=null,zt=null,de=null,an=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let _={},g={},x=new WeakMap,b=[],A=null,R=!1,E=null,y=null,F=null,N=null,P=null,H=null,O=null,B=new Ie(0,0,0),j=0,C=!1,L=null,k=null,J=null,rt=null,pt=null;const yt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,W=0;const at=o.getParameter(o.VERSION);at.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(at)[1]),z=W>=1):at.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),z=W>=2);let Ot=null,Lt={};const G=o.getParameter(o.SCISSOR_BOX),ft=o.getParameter(o.VIEWPORT),At=new Nn().fromArray(G),Vt=new Nn().fromArray(ft);function It(K,Kt,Ut,Qt){const xt=new Uint8Array(4),Rt=o.createTexture();o.bindTexture(K,Rt),o.texParameteri(K,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(K,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let zt=0;zt<Ut;zt++)K===o.TEXTURE_3D||K===o.TEXTURE_2D_ARRAY?o.texImage3D(Kt,0,o.RGBA,1,1,Qt,0,o.RGBA,o.UNSIGNED_BYTE,xt):o.texImage2D(Kt+zt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,xt);return Rt}const nt={};nt[o.TEXTURE_2D]=It(o.TEXTURE_2D,o.TEXTURE_2D,1),nt[o.TEXTURE_CUBE_MAP]=It(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[o.TEXTURE_2D_ARRAY]=It(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),nt[o.TEXTURE_3D]=It(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),lt(o.DEPTH_TEST),h.setFunc(Go),ve(!1),ln(H_),lt(o.CULL_FACE),Ee(fr);function lt(K){_[K]!==!0&&(o.enable(K),_[K]=!0)}function Gt(K){_[K]!==!1&&(o.disable(K),_[K]=!1)}function jt(K,Kt){return g[K]!==Kt?(o.bindFramebuffer(K,Kt),g[K]=Kt,K===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Kt),K===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Kt),!0):!1}function kt(K,Kt){let Ut=b,Qt=!1;if(K){Ut=x.get(Kt),Ut===void 0&&(Ut=[],x.set(Kt,Ut));const xt=K.textures;if(Ut.length!==xt.length||Ut[0]!==o.COLOR_ATTACHMENT0){for(let Rt=0,zt=xt.length;Rt<zt;Rt++)Ut[Rt]=o.COLOR_ATTACHMENT0+Rt;Ut.length=xt.length,Qt=!0}}else Ut[0]!==o.BACK&&(Ut[0]=o.BACK,Qt=!0);Qt&&o.drawBuffers(Ut)}function Te(K){return A!==K?(o.useProgram(K),A=K,!0):!1}const nn={[Ns]:o.FUNC_ADD,[mS]:o.FUNC_SUBTRACT,[gS]:o.FUNC_REVERSE_SUBTRACT};nn[_S]=o.MIN,nn[vS]=o.MAX;const De={[xS]:o.ZERO,[yS]:o.ONE,[SS]:o.SRC_COLOR,[hp]:o.SRC_ALPHA,[RS]:o.SRC_ALPHA_SATURATE,[TS]:o.DST_COLOR,[bS]:o.DST_ALPHA,[MS]:o.ONE_MINUS_SRC_COLOR,[dp]:o.ONE_MINUS_SRC_ALPHA,[AS]:o.ONE_MINUS_DST_COLOR,[ES]:o.ONE_MINUS_DST_ALPHA,[CS]:o.CONSTANT_COLOR,[wS]:o.ONE_MINUS_CONSTANT_COLOR,[DS]:o.CONSTANT_ALPHA,[US]:o.ONE_MINUS_CONSTANT_ALPHA};function Ee(K,Kt,Ut,Qt,xt,Rt,zt,de,an,Xe){if(K===fr){R===!0&&(Gt(o.BLEND),R=!1);return}if(R===!1&&(lt(o.BLEND),R=!0),K!==pS){if(K!==E||Xe!==C){if((y!==Ns||P!==Ns)&&(o.blendEquation(o.FUNC_ADD),y=Ns,P=Ns),Xe)switch(K){case zo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case G_:o.blendFunc(o.ONE,o.ONE);break;case V_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case k_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:en("WebGLState: Invalid blending: ",K);break}else switch(K){case zo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case G_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case V_:en("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case k_:en("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:en("WebGLState: Invalid blending: ",K);break}F=null,N=null,H=null,O=null,B.set(0,0,0),j=0,E=K,C=Xe}return}xt=xt||Kt,Rt=Rt||Ut,zt=zt||Qt,(Kt!==y||xt!==P)&&(o.blendEquationSeparate(nn[Kt],nn[xt]),y=Kt,P=xt),(Ut!==F||Qt!==N||Rt!==H||zt!==O)&&(o.blendFuncSeparate(De[Ut],De[Qt],De[Rt],De[zt]),F=Ut,N=Qt,H=Rt,O=zt),(de.equals(B)===!1||an!==j)&&(o.blendColor(de.r,de.g,de.b,an),B.copy(de),j=an),E=K,C=!1}function Be(K,Kt){K.side===ji?Gt(o.CULL_FACE):lt(o.CULL_FACE);let Ut=K.side===Pi;Kt&&(Ut=!Ut),ve(Ut),K.blending===zo&&K.transparent===!1?Ee(fr):Ee(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),h.setFunc(K.depthFunc),h.setTest(K.depthTest),h.setMask(K.depthWrite),c.setMask(K.colorWrite);const Qt=K.stencilWrite;d.setTest(Qt),Qt&&(d.setMask(K.stencilWriteMask),d.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),d.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),vn(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?lt(o.SAMPLE_ALPHA_TO_COVERAGE):Gt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ve(K){L!==K&&(K?o.frontFace(o.CW):o.frontFace(o.CCW),L=K)}function ln(K){K!==fS?(lt(o.CULL_FACE),K!==k&&(K===H_?o.cullFace(o.BACK):K===hS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Gt(o.CULL_FACE),k=K}function Y(K){K!==J&&(z&&o.lineWidth(K),J=K)}function vn(K,Kt,Ut){K?(lt(o.POLYGON_OFFSET_FILL),(rt!==Kt||pt!==Ut)&&(o.polygonOffset(Kt,Ut),rt=Kt,pt=Ut)):Gt(o.POLYGON_OFFSET_FILL)}function Ge(K){K?lt(o.SCISSOR_TEST):Gt(o.SCISSOR_TEST)}function je(K){K===void 0&&(K=o.TEXTURE0+yt-1),Ot!==K&&(o.activeTexture(K),Ot=K)}function ne(K,Kt,Ut){Ut===void 0&&(Ot===null?Ut=o.TEXTURE0+yt-1:Ut=Ot);let Qt=Lt[Ut];Qt===void 0&&(Qt={type:void 0,texture:void 0},Lt[Ut]=Qt),(Qt.type!==K||Qt.texture!==Kt)&&(Ot!==Ut&&(o.activeTexture(Ut),Ot=Ut),o.bindTexture(K,Kt||nt[K]),Qt.type=K,Qt.texture=Kt)}function I(){const K=Lt[Ot];K!==void 0&&K.type!==void 0&&(o.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(K){en("WebGLState:",K)}}function Q(){try{o.compressedTexImage3D(...arguments)}catch(K){en("WebGLState:",K)}}function bt(){try{o.texSubImage2D(...arguments)}catch(K){en("WebGLState:",K)}}function wt(){try{o.texSubImage3D(...arguments)}catch(K){en("WebGLState:",K)}}function _t(){try{o.compressedTexSubImage2D(...arguments)}catch(K){en("WebGLState:",K)}}function le(){try{o.compressedTexSubImage3D(...arguments)}catch(K){en("WebGLState:",K)}}function Xt(){try{o.texStorage2D(...arguments)}catch(K){en("WebGLState:",K)}}function ae(){try{o.texStorage3D(...arguments)}catch(K){en("WebGLState:",K)}}function he(){try{o.texImage2D(...arguments)}catch(K){en("WebGLState:",K)}}function Pt(){try{o.texImage3D(...arguments)}catch(K){en("WebGLState:",K)}}function Ht(K){At.equals(K)===!1&&(o.scissor(K.x,K.y,K.z,K.w),At.copy(K))}function te(K){Vt.equals(K)===!1&&(o.viewport(K.x,K.y,K.z,K.w),Vt.copy(K))}function Zt(K,Kt){let Ut=p.get(Kt);Ut===void 0&&(Ut=new WeakMap,p.set(Kt,Ut));let Qt=Ut.get(K);Qt===void 0&&(Qt=o.getUniformBlockIndex(Kt,K.name),Ut.set(K,Qt))}function qt(K,Kt){const Qt=p.get(Kt).get(K);m.get(Kt)!==Qt&&(o.uniformBlockBinding(Kt,Qt,K.__bindingPointIndex),m.set(Kt,Qt))}function Re(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},Ot=null,Lt={},g={},x=new WeakMap,b=[],A=null,R=!1,E=null,y=null,F=null,N=null,P=null,H=null,O=null,B=new Ie(0,0,0),j=0,C=!1,L=null,k=null,J=null,rt=null,pt=null,At.set(0,0,o.canvas.width,o.canvas.height),Vt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:lt,disable:Gt,bindFramebuffer:jt,drawBuffers:kt,useProgram:Te,setBlending:Ee,setMaterial:Be,setFlipSided:ve,setCullFace:ln,setLineWidth:Y,setPolygonOffset:vn,setScissorTest:Ge,activeTexture:je,bindTexture:ne,unbindTexture:I,compressedTexImage2D:T,compressedTexImage3D:Q,texImage2D:he,texImage3D:Pt,updateUBOMapping:Zt,uniformBlockBinding:qt,texStorage2D:Xt,texStorage3D:ae,texSubImage2D:bt,texSubImage3D:wt,compressedTexSubImage2D:_t,compressedTexSubImage3D:le,scissor:Ht,viewport:te,reset:Re}}function SA(o,t,i,r,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new we,_=new WeakMap;let g;const x=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(I,T){return b?new OffscreenCanvas(I,T):nf("canvas")}function R(I,T,Q){let bt=1;const wt=ne(I);if((wt.width>Q||wt.height>Q)&&(bt=Q/Math.max(wt.width,wt.height)),bt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const _t=Math.floor(bt*wt.width),le=Math.floor(bt*wt.height);g===void 0&&(g=A(_t,le));const Xt=T?A(_t,le):g;return Xt.width=_t,Xt.height=le,Xt.getContext("2d").drawImage(I,0,0,_t,le),Se("WebGLRenderer: Texture has been resized from ("+wt.width+"x"+wt.height+") to ("+_t+"x"+le+")."),Xt}else return"data"in I&&Se("WebGLRenderer: Image in DataTexture is too big ("+wt.width+"x"+wt.height+")."),I;return I}function E(I){return I.generateMipmaps}function y(I){o.generateMipmap(I)}function F(I){return I.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?o.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(I,T,Q,bt,wt=!1){if(I!==null){if(o[I]!==void 0)return o[I];Se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let _t=T;if(T===o.RED&&(Q===o.FLOAT&&(_t=o.R32F),Q===o.HALF_FLOAT&&(_t=o.R16F),Q===o.UNSIGNED_BYTE&&(_t=o.R8)),T===o.RED_INTEGER&&(Q===o.UNSIGNED_BYTE&&(_t=o.R8UI),Q===o.UNSIGNED_SHORT&&(_t=o.R16UI),Q===o.UNSIGNED_INT&&(_t=o.R32UI),Q===o.BYTE&&(_t=o.R8I),Q===o.SHORT&&(_t=o.R16I),Q===o.INT&&(_t=o.R32I)),T===o.RG&&(Q===o.FLOAT&&(_t=o.RG32F),Q===o.HALF_FLOAT&&(_t=o.RG16F),Q===o.UNSIGNED_BYTE&&(_t=o.RG8)),T===o.RG_INTEGER&&(Q===o.UNSIGNED_BYTE&&(_t=o.RG8UI),Q===o.UNSIGNED_SHORT&&(_t=o.RG16UI),Q===o.UNSIGNED_INT&&(_t=o.RG32UI),Q===o.BYTE&&(_t=o.RG8I),Q===o.SHORT&&(_t=o.RG16I),Q===o.INT&&(_t=o.RG32I)),T===o.RGB_INTEGER&&(Q===o.UNSIGNED_BYTE&&(_t=o.RGB8UI),Q===o.UNSIGNED_SHORT&&(_t=o.RGB16UI),Q===o.UNSIGNED_INT&&(_t=o.RGB32UI),Q===o.BYTE&&(_t=o.RGB8I),Q===o.SHORT&&(_t=o.RGB16I),Q===o.INT&&(_t=o.RGB32I)),T===o.RGBA_INTEGER&&(Q===o.UNSIGNED_BYTE&&(_t=o.RGBA8UI),Q===o.UNSIGNED_SHORT&&(_t=o.RGBA16UI),Q===o.UNSIGNED_INT&&(_t=o.RGBA32UI),Q===o.BYTE&&(_t=o.RGBA8I),Q===o.SHORT&&(_t=o.RGBA16I),Q===o.INT&&(_t=o.RGBA32I)),T===o.RGB&&(Q===o.UNSIGNED_INT_5_9_9_9_REV&&(_t=o.RGB9_E5),Q===o.UNSIGNED_INT_10F_11F_11F_REV&&(_t=o.R11F_G11F_B10F)),T===o.RGBA){const le=wt?tf:Qe.getTransfer(bt);Q===o.FLOAT&&(_t=o.RGBA32F),Q===o.HALF_FLOAT&&(_t=o.RGBA16F),Q===o.UNSIGNED_BYTE&&(_t=le===fn?o.SRGB8_ALPHA8:o.RGBA8),Q===o.UNSIGNED_SHORT_4_4_4_4&&(_t=o.RGBA4),Q===o.UNSIGNED_SHORT_5_5_5_1&&(_t=o.RGB5_A1)}return(_t===o.R16F||_t===o.R32F||_t===o.RG16F||_t===o.RG32F||_t===o.RGBA16F||_t===o.RGBA32F)&&t.get("EXT_color_buffer_float"),_t}function P(I,T){let Q;return I?T===null||T===Pa||T===tc?Q=o.DEPTH24_STENCIL8:T===Ua?Q=o.DEPTH32F_STENCIL8:T===$l&&(Q=o.DEPTH24_STENCIL8,Se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Pa||T===tc?Q=o.DEPTH_COMPONENT24:T===Ua?Q=o.DEPTH_COMPONENT32F:T===$l&&(Q=o.DEPTH_COMPONENT16),Q}function H(I,T){return E(I)===!0||I.isFramebufferTexture&&I.minFilter!==ri&&I.minFilter!==di?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function O(I){const T=I.target;T.removeEventListener("dispose",O),j(T),T.isVideoTexture&&_.delete(T)}function B(I){const T=I.target;T.removeEventListener("dispose",B),L(T)}function j(I){const T=r.get(I);if(T.__webglInit===void 0)return;const Q=I.source,bt=x.get(Q);if(bt){const wt=bt[T.__cacheKey];wt.usedTimes--,wt.usedTimes===0&&C(I),Object.keys(bt).length===0&&x.delete(Q)}r.remove(I)}function C(I){const T=r.get(I);o.deleteTexture(T.__webglTexture);const Q=I.source,bt=x.get(Q);delete bt[T.__cacheKey],h.memory.textures--}function L(I){const T=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let bt=0;bt<6;bt++){if(Array.isArray(T.__webglFramebuffer[bt]))for(let wt=0;wt<T.__webglFramebuffer[bt].length;wt++)o.deleteFramebuffer(T.__webglFramebuffer[bt][wt]);else o.deleteFramebuffer(T.__webglFramebuffer[bt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[bt])}else{if(Array.isArray(T.__webglFramebuffer))for(let bt=0;bt<T.__webglFramebuffer.length;bt++)o.deleteFramebuffer(T.__webglFramebuffer[bt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let bt=0;bt<T.__webglColorRenderbuffer.length;bt++)T.__webglColorRenderbuffer[bt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[bt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Q=I.textures;for(let bt=0,wt=Q.length;bt<wt;bt++){const _t=r.get(Q[bt]);_t.__webglTexture&&(o.deleteTexture(_t.__webglTexture),h.memory.textures--),r.remove(Q[bt])}r.remove(I)}let k=0;function J(){k=0}function rt(){const I=k;return I>=l.maxTextures&&Se("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l.maxTextures),k+=1,I}function pt(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function yt(I,T){const Q=r.get(I);if(I.isVideoTexture&&Ge(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Q.__version!==I.version){const bt=I.image;if(bt===null)Se("WebGLRenderer: Texture marked for update but no image data found.");else if(bt.complete===!1)Se("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(Q,I,T);return}}else I.isExternalTexture&&(Q.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,Q.__webglTexture,o.TEXTURE0+T)}function z(I,T){const Q=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Q.__version!==I.version){nt(Q,I,T);return}else I.isExternalTexture&&(Q.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,Q.__webglTexture,o.TEXTURE0+T)}function W(I,T){const Q=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Q.__version!==I.version){nt(Q,I,T);return}i.bindTexture(o.TEXTURE_3D,Q.__webglTexture,o.TEXTURE0+T)}function at(I,T){const Q=r.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&Q.__version!==I.version){lt(Q,I,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,Q.__webglTexture,o.TEXTURE0+T)}const Ot={[bp]:o.REPEAT,[ur]:o.CLAMP_TO_EDGE,[Ep]:o.MIRRORED_REPEAT},Lt={[ri]:o.NEAREST,[OS]:o.NEAREST_MIPMAP_NEAREST,[Su]:o.NEAREST_MIPMAP_LINEAR,[di]:o.LINEAR,[wd]:o.LINEAR_MIPMAP_NEAREST,[Ps]:o.LINEAR_MIPMAP_LINEAR},G={[IS]:o.NEVER,[VS]:o.ALWAYS,[BS]:o.LESS,[gm]:o.LEQUAL,[zS]:o.EQUAL,[_m]:o.GEQUAL,[HS]:o.GREATER,[GS]:o.NOTEQUAL};function ft(I,T){if(T.type===Ua&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===di||T.magFilter===wd||T.magFilter===Su||T.magFilter===Ps||T.minFilter===di||T.minFilter===wd||T.minFilter===Su||T.minFilter===Ps)&&Se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(I,o.TEXTURE_WRAP_S,Ot[T.wrapS]),o.texParameteri(I,o.TEXTURE_WRAP_T,Ot[T.wrapT]),(I===o.TEXTURE_3D||I===o.TEXTURE_2D_ARRAY)&&o.texParameteri(I,o.TEXTURE_WRAP_R,Ot[T.wrapR]),o.texParameteri(I,o.TEXTURE_MAG_FILTER,Lt[T.magFilter]),o.texParameteri(I,o.TEXTURE_MIN_FILTER,Lt[T.minFilter]),T.compareFunction&&(o.texParameteri(I,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(I,o.TEXTURE_COMPARE_FUNC,G[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ri||T.minFilter!==Su&&T.minFilter!==Ps||T.type===Ua&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");o.texParameterf(I,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function At(I,T){let Q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",O));const bt=T.source;let wt=x.get(bt);wt===void 0&&(wt={},x.set(bt,wt));const _t=pt(T);if(_t!==I.__cacheKey){wt[_t]===void 0&&(wt[_t]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,Q=!0),wt[_t].usedTimes++;const le=wt[I.__cacheKey];le!==void 0&&(wt[I.__cacheKey].usedTimes--,le.usedTimes===0&&C(T)),I.__cacheKey=_t,I.__webglTexture=wt[_t].texture}return Q}function Vt(I,T,Q){return Math.floor(Math.floor(I/Q)/T)}function It(I,T,Q,bt){const _t=I.updateRanges;if(_t.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,Q,bt,T.data);else{_t.sort((Pt,Ht)=>Pt.start-Ht.start);let le=0;for(let Pt=1;Pt<_t.length;Pt++){const Ht=_t[le],te=_t[Pt],Zt=Ht.start+Ht.count,qt=Vt(te.start,T.width,4),Re=Vt(Ht.start,T.width,4);te.start<=Zt+1&&qt===Re&&Vt(te.start+te.count-1,T.width,4)===qt?Ht.count=Math.max(Ht.count,te.start+te.count-Ht.start):(++le,_t[le]=te)}_t.length=le+1;const Xt=o.getParameter(o.UNPACK_ROW_LENGTH),ae=o.getParameter(o.UNPACK_SKIP_PIXELS),he=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let Pt=0,Ht=_t.length;Pt<Ht;Pt++){const te=_t[Pt],Zt=Math.floor(te.start/4),qt=Math.ceil(te.count/4),Re=Zt%T.width,K=Math.floor(Zt/T.width),Kt=qt,Ut=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,Re),o.pixelStorei(o.UNPACK_SKIP_ROWS,K),i.texSubImage2D(o.TEXTURE_2D,0,Re,K,Kt,Ut,Q,bt,T.data)}I.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Xt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,ae),o.pixelStorei(o.UNPACK_SKIP_ROWS,he)}}function nt(I,T,Q){let bt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(bt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(bt=o.TEXTURE_3D);const wt=At(I,T),_t=T.source;i.bindTexture(bt,I.__webglTexture,o.TEXTURE0+Q);const le=r.get(_t);if(_t.version!==le.__version||wt===!0){i.activeTexture(o.TEXTURE0+Q);const Xt=Qe.getPrimaries(Qe.workingColorSpace),ae=T.colorSpace===Kr?null:Qe.getPrimaries(T.colorSpace),he=T.colorSpace===Kr||Xt===ae?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let Pt=R(T.image,!1,l.maxTextureSize);Pt=je(T,Pt);const Ht=c.convert(T.format,T.colorSpace),te=c.convert(T.type);let Zt=N(T.internalFormat,Ht,te,T.colorSpace,T.isVideoTexture);ft(bt,T);let qt;const Re=T.mipmaps,K=T.isVideoTexture!==!0,Kt=le.__version===void 0||wt===!0,Ut=_t.dataReady,Qt=H(T,Pt);if(T.isDepthTexture)Zt=P(T.format===Fs,T.type),Kt&&(K?i.texStorage2D(o.TEXTURE_2D,1,Zt,Pt.width,Pt.height):i.texImage2D(o.TEXTURE_2D,0,Zt,Pt.width,Pt.height,0,Ht,te,null));else if(T.isDataTexture)if(Re.length>0){K&&Kt&&i.texStorage2D(o.TEXTURE_2D,Qt,Zt,Re[0].width,Re[0].height);for(let xt=0,Rt=Re.length;xt<Rt;xt++)qt=Re[xt],K?Ut&&i.texSubImage2D(o.TEXTURE_2D,xt,0,0,qt.width,qt.height,Ht,te,qt.data):i.texImage2D(o.TEXTURE_2D,xt,Zt,qt.width,qt.height,0,Ht,te,qt.data);T.generateMipmaps=!1}else K?(Kt&&i.texStorage2D(o.TEXTURE_2D,Qt,Zt,Pt.width,Pt.height),Ut&&It(T,Pt,Ht,te)):i.texImage2D(o.TEXTURE_2D,0,Zt,Pt.width,Pt.height,0,Ht,te,Pt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){K&&Kt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Qt,Zt,Re[0].width,Re[0].height,Pt.depth);for(let xt=0,Rt=Re.length;xt<Rt;xt++)if(qt=Re[xt],T.format!==ya)if(Ht!==null)if(K){if(Ut)if(T.layerUpdates.size>0){const zt=Sv(qt.width,qt.height,T.format,T.type);for(const de of T.layerUpdates){const an=qt.data.subarray(de*zt/qt.data.BYTES_PER_ELEMENT,(de+1)*zt/qt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,xt,0,0,de,qt.width,qt.height,1,Ht,an)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,xt,0,0,0,qt.width,qt.height,Pt.depth,Ht,qt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,xt,Zt,qt.width,qt.height,Pt.depth,0,qt.data,0,0);else Se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else K?Ut&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,xt,0,0,0,qt.width,qt.height,Pt.depth,Ht,te,qt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,xt,Zt,qt.width,qt.height,Pt.depth,0,Ht,te,qt.data)}else{K&&Kt&&i.texStorage2D(o.TEXTURE_2D,Qt,Zt,Re[0].width,Re[0].height);for(let xt=0,Rt=Re.length;xt<Rt;xt++)qt=Re[xt],T.format!==ya?Ht!==null?K?Ut&&i.compressedTexSubImage2D(o.TEXTURE_2D,xt,0,0,qt.width,qt.height,Ht,qt.data):i.compressedTexImage2D(o.TEXTURE_2D,xt,Zt,qt.width,qt.height,0,qt.data):Se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):K?Ut&&i.texSubImage2D(o.TEXTURE_2D,xt,0,0,qt.width,qt.height,Ht,te,qt.data):i.texImage2D(o.TEXTURE_2D,xt,Zt,qt.width,qt.height,0,Ht,te,qt.data)}else if(T.isDataArrayTexture)if(K){if(Kt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Qt,Zt,Pt.width,Pt.height,Pt.depth),Ut)if(T.layerUpdates.size>0){const xt=Sv(Pt.width,Pt.height,T.format,T.type);for(const Rt of T.layerUpdates){const zt=Pt.data.subarray(Rt*xt/Pt.data.BYTES_PER_ELEMENT,(Rt+1)*xt/Pt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Rt,Pt.width,Pt.height,1,Ht,te,zt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Pt.width,Pt.height,Pt.depth,Ht,te,Pt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Zt,Pt.width,Pt.height,Pt.depth,0,Ht,te,Pt.data);else if(T.isData3DTexture)K?(Kt&&i.texStorage3D(o.TEXTURE_3D,Qt,Zt,Pt.width,Pt.height,Pt.depth),Ut&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Pt.width,Pt.height,Pt.depth,Ht,te,Pt.data)):i.texImage3D(o.TEXTURE_3D,0,Zt,Pt.width,Pt.height,Pt.depth,0,Ht,te,Pt.data);else if(T.isFramebufferTexture){if(Kt)if(K)i.texStorage2D(o.TEXTURE_2D,Qt,Zt,Pt.width,Pt.height);else{let xt=Pt.width,Rt=Pt.height;for(let zt=0;zt<Qt;zt++)i.texImage2D(o.TEXTURE_2D,zt,Zt,xt,Rt,0,Ht,te,null),xt>>=1,Rt>>=1}}else if(Re.length>0){if(K&&Kt){const xt=ne(Re[0]);i.texStorage2D(o.TEXTURE_2D,Qt,Zt,xt.width,xt.height)}for(let xt=0,Rt=Re.length;xt<Rt;xt++)qt=Re[xt],K?Ut&&i.texSubImage2D(o.TEXTURE_2D,xt,0,0,Ht,te,qt):i.texImage2D(o.TEXTURE_2D,xt,Zt,Ht,te,qt);T.generateMipmaps=!1}else if(K){if(Kt){const xt=ne(Pt);i.texStorage2D(o.TEXTURE_2D,Qt,Zt,xt.width,xt.height)}Ut&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ht,te,Pt)}else i.texImage2D(o.TEXTURE_2D,0,Zt,Ht,te,Pt);E(T)&&y(bt),le.__version=_t.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function lt(I,T,Q){if(T.image.length!==6)return;const bt=At(I,T),wt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,I.__webglTexture,o.TEXTURE0+Q);const _t=r.get(wt);if(wt.version!==_t.__version||bt===!0){i.activeTexture(o.TEXTURE0+Q);const le=Qe.getPrimaries(Qe.workingColorSpace),Xt=T.colorSpace===Kr?null:Qe.getPrimaries(T.colorSpace),ae=T.colorSpace===Kr||le===Xt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const he=T.isCompressedTexture||T.image[0].isCompressedTexture,Pt=T.image[0]&&T.image[0].isDataTexture,Ht=[];for(let Rt=0;Rt<6;Rt++)!he&&!Pt?Ht[Rt]=R(T.image[Rt],!0,l.maxCubemapSize):Ht[Rt]=Pt?T.image[Rt].image:T.image[Rt],Ht[Rt]=je(T,Ht[Rt]);const te=Ht[0],Zt=c.convert(T.format,T.colorSpace),qt=c.convert(T.type),Re=N(T.internalFormat,Zt,qt,T.colorSpace),K=T.isVideoTexture!==!0,Kt=_t.__version===void 0||bt===!0,Ut=wt.dataReady;let Qt=H(T,te);ft(o.TEXTURE_CUBE_MAP,T);let xt;if(he){K&&Kt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Qt,Re,te.width,te.height);for(let Rt=0;Rt<6;Rt++){xt=Ht[Rt].mipmaps;for(let zt=0;zt<xt.length;zt++){const de=xt[zt];T.format!==ya?Zt!==null?K?Ut&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,zt,0,0,de.width,de.height,Zt,de.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,zt,Re,de.width,de.height,0,de.data):Se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?Ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,zt,0,0,de.width,de.height,Zt,qt,de.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,zt,Re,de.width,de.height,0,Zt,qt,de.data)}}}else{if(xt=T.mipmaps,K&&Kt){xt.length>0&&Qt++;const Rt=ne(Ht[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Qt,Re,Rt.width,Rt.height)}for(let Rt=0;Rt<6;Rt++)if(Pt){K?Ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,Ht[Rt].width,Ht[Rt].height,Zt,qt,Ht[Rt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,Re,Ht[Rt].width,Ht[Rt].height,0,Zt,qt,Ht[Rt].data);for(let zt=0;zt<xt.length;zt++){const an=xt[zt].image[Rt].image;K?Ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,zt+1,0,0,an.width,an.height,Zt,qt,an.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,zt+1,Re,an.width,an.height,0,Zt,qt,an.data)}}else{K?Ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,Zt,qt,Ht[Rt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,Re,Zt,qt,Ht[Rt]);for(let zt=0;zt<xt.length;zt++){const de=xt[zt];K?Ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,zt+1,0,0,Zt,qt,de.image[Rt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,zt+1,Re,Zt,qt,de.image[Rt])}}}E(T)&&y(o.TEXTURE_CUBE_MAP),_t.__version=wt.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function Gt(I,T,Q,bt,wt,_t){const le=c.convert(Q.format,Q.colorSpace),Xt=c.convert(Q.type),ae=N(Q.internalFormat,le,Xt,Q.colorSpace),he=r.get(T),Pt=r.get(Q);if(Pt.__renderTarget=T,!he.__hasExternalTextures){const Ht=Math.max(1,T.width>>_t),te=Math.max(1,T.height>>_t);wt===o.TEXTURE_3D||wt===o.TEXTURE_2D_ARRAY?i.texImage3D(wt,_t,ae,Ht,te,T.depth,0,le,Xt,null):i.texImage2D(wt,_t,ae,Ht,te,0,le,Xt,null)}i.bindFramebuffer(o.FRAMEBUFFER,I),vn(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,bt,wt,Pt.__webglTexture,0,Y(T)):(wt===o.TEXTURE_2D||wt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&wt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,bt,wt,Pt.__webglTexture,_t),i.bindFramebuffer(o.FRAMEBUFFER,null)}function jt(I,T,Q){if(o.bindRenderbuffer(o.RENDERBUFFER,I),T.depthBuffer){const bt=T.depthTexture,wt=bt&&bt.isDepthTexture?bt.type:null,_t=P(T.stencilBuffer,wt),le=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;vn(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Y(T),_t,T.width,T.height):Q?o.renderbufferStorageMultisample(o.RENDERBUFFER,Y(T),_t,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,_t,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,le,o.RENDERBUFFER,I)}else{const bt=T.textures;for(let wt=0;wt<bt.length;wt++){const _t=bt[wt],le=c.convert(_t.format,_t.colorSpace),Xt=c.convert(_t.type),ae=N(_t.internalFormat,le,Xt,_t.colorSpace);vn(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Y(T),ae,T.width,T.height):Q?o.renderbufferStorageMultisample(o.RENDERBUFFER,Y(T),ae,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,ae,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function kt(I,T,Q){const bt=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const wt=r.get(T.depthTexture);if(wt.__renderTarget=T,(!wt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),bt){if(wt.__webglInit===void 0&&(wt.__webglInit=!0,T.depthTexture.addEventListener("dispose",O)),wt.__webglTexture===void 0){wt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,wt.__webglTexture),ft(o.TEXTURE_CUBE_MAP,T.depthTexture);const he=c.convert(T.depthTexture.format),Pt=c.convert(T.depthTexture.type);let Ht;T.depthTexture.format===pr?Ht=o.DEPTH_COMPONENT24:T.depthTexture.format===Fs&&(Ht=o.DEPTH24_STENCIL8);for(let te=0;te<6;te++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ht,T.width,T.height,0,he,Pt,null)}}else yt(T.depthTexture,0);const _t=wt.__webglTexture,le=Y(T),Xt=bt?o.TEXTURE_CUBE_MAP_POSITIVE_X+Q:o.TEXTURE_2D,ae=T.depthTexture.format===Fs?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(T.depthTexture.format===pr)vn(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ae,Xt,_t,0,le):o.framebufferTexture2D(o.FRAMEBUFFER,ae,Xt,_t,0);else if(T.depthTexture.format===Fs)vn(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ae,Xt,_t,0,le):o.framebufferTexture2D(o.FRAMEBUFFER,ae,Xt,_t,0);else throw new Error("Unknown depthTexture format")}function Te(I){const T=r.get(I),Q=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const bt=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),bt){const wt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,bt.removeEventListener("dispose",wt)};bt.addEventListener("dispose",wt),T.__depthDisposeCallback=wt}T.__boundDepthTexture=bt}if(I.depthTexture&&!T.__autoAllocateDepthBuffer)if(Q)for(let bt=0;bt<6;bt++)kt(T.__webglFramebuffer[bt],I,bt);else{const bt=I.texture.mipmaps;bt&&bt.length>0?kt(T.__webglFramebuffer[0],I,0):kt(T.__webglFramebuffer,I,0)}else if(Q){T.__webglDepthbuffer=[];for(let bt=0;bt<6;bt++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[bt]),T.__webglDepthbuffer[bt]===void 0)T.__webglDepthbuffer[bt]=o.createRenderbuffer(),jt(T.__webglDepthbuffer[bt],I,!1);else{const wt=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,_t=T.__webglDepthbuffer[bt];o.bindRenderbuffer(o.RENDERBUFFER,_t),o.framebufferRenderbuffer(o.FRAMEBUFFER,wt,o.RENDERBUFFER,_t)}}else{const bt=I.texture.mipmaps;if(bt&&bt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),jt(T.__webglDepthbuffer,I,!1);else{const wt=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,_t=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,_t),o.framebufferRenderbuffer(o.FRAMEBUFFER,wt,o.RENDERBUFFER,_t)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function nn(I,T,Q){const bt=r.get(I);T!==void 0&&Gt(bt.__webglFramebuffer,I,I.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Q!==void 0&&Te(I)}function De(I){const T=I.texture,Q=r.get(I),bt=r.get(T);I.addEventListener("dispose",B);const wt=I.textures,_t=I.isWebGLCubeRenderTarget===!0,le=wt.length>1;if(le||(bt.__webglTexture===void 0&&(bt.__webglTexture=o.createTexture()),bt.__version=T.version,h.memory.textures++),_t){Q.__webglFramebuffer=[];for(let Xt=0;Xt<6;Xt++)if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer[Xt]=[];for(let ae=0;ae<T.mipmaps.length;ae++)Q.__webglFramebuffer[Xt][ae]=o.createFramebuffer()}else Q.__webglFramebuffer[Xt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Xt=0;Xt<T.mipmaps.length;Xt++)Q.__webglFramebuffer[Xt]=o.createFramebuffer()}else Q.__webglFramebuffer=o.createFramebuffer();if(le)for(let Xt=0,ae=wt.length;Xt<ae;Xt++){const he=r.get(wt[Xt]);he.__webglTexture===void 0&&(he.__webglTexture=o.createTexture(),h.memory.textures++)}if(I.samples>0&&vn(I)===!1){Q.__webglMultisampledFramebuffer=o.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Xt=0;Xt<wt.length;Xt++){const ae=wt[Xt];Q.__webglColorRenderbuffer[Xt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Q.__webglColorRenderbuffer[Xt]);const he=c.convert(ae.format,ae.colorSpace),Pt=c.convert(ae.type),Ht=N(ae.internalFormat,he,Pt,ae.colorSpace,I.isXRRenderTarget===!0),te=Y(I);o.renderbufferStorageMultisample(o.RENDERBUFFER,te,Ht,I.width,I.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xt,o.RENDERBUFFER,Q.__webglColorRenderbuffer[Xt])}o.bindRenderbuffer(o.RENDERBUFFER,null),I.depthBuffer&&(Q.__webglDepthRenderbuffer=o.createRenderbuffer(),jt(Q.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(_t){i.bindTexture(o.TEXTURE_CUBE_MAP,bt.__webglTexture),ft(o.TEXTURE_CUBE_MAP,T);for(let Xt=0;Xt<6;Xt++)if(T.mipmaps&&T.mipmaps.length>0)for(let ae=0;ae<T.mipmaps.length;ae++)Gt(Q.__webglFramebuffer[Xt][ae],I,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,ae);else Gt(Q.__webglFramebuffer[Xt],I,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,0);E(T)&&y(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(le){for(let Xt=0,ae=wt.length;Xt<ae;Xt++){const he=wt[Xt],Pt=r.get(he);let Ht=o.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ht=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ht,Pt.__webglTexture),ft(Ht,he),Gt(Q.__webglFramebuffer,I,he,o.COLOR_ATTACHMENT0+Xt,Ht,0),E(he)&&y(Ht)}i.unbindTexture()}else{let Xt=o.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Xt=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Xt,bt.__webglTexture),ft(Xt,T),T.mipmaps&&T.mipmaps.length>0)for(let ae=0;ae<T.mipmaps.length;ae++)Gt(Q.__webglFramebuffer[ae],I,T,o.COLOR_ATTACHMENT0,Xt,ae);else Gt(Q.__webglFramebuffer,I,T,o.COLOR_ATTACHMENT0,Xt,0);E(T)&&y(Xt),i.unbindTexture()}I.depthBuffer&&Te(I)}function Ee(I){const T=I.textures;for(let Q=0,bt=T.length;Q<bt;Q++){const wt=T[Q];if(E(wt)){const _t=F(I),le=r.get(wt).__webglTexture;i.bindTexture(_t,le),y(_t),i.unbindTexture()}}}const Be=[],ve=[];function ln(I){if(I.samples>0){if(vn(I)===!1){const T=I.textures,Q=I.width,bt=I.height;let wt=o.COLOR_BUFFER_BIT;const _t=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,le=r.get(I),Xt=T.length>1;if(Xt)for(let he=0;he<T.length;he++)i.bindFramebuffer(o.FRAMEBUFFER,le.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+he,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,le.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+he,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);const ae=I.texture.mipmaps;ae&&ae.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let he=0;he<T.length;he++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(wt|=o.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(wt|=o.STENCIL_BUFFER_BIT)),Xt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,le.__webglColorRenderbuffer[he]);const Pt=r.get(T[he]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Pt,0)}o.blitFramebuffer(0,0,Q,bt,0,0,Q,bt,wt,o.NEAREST),m===!0&&(Be.length=0,ve.length=0,Be.push(o.COLOR_ATTACHMENT0+he),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Be.push(_t),ve.push(_t),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ve)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Be))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Xt)for(let he=0;he<T.length;he++){i.bindFramebuffer(o.FRAMEBUFFER,le.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+he,o.RENDERBUFFER,le.__webglColorRenderbuffer[he]);const Pt=r.get(T[he]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,le.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+he,o.TEXTURE_2D,Pt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&m){const T=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function Y(I){return Math.min(l.maxSamples,I.samples)}function vn(I){const T=r.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ge(I){const T=h.render.frame;_.get(I)!==T&&(_.set(I,T),I.update())}function je(I,T){const Q=I.colorSpace,bt=I.format,wt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Q!==Xo&&Q!==Kr&&(Qe.getTransfer(Q)===fn?(bt!==ya||wt!==Zi)&&Se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):en("WebGLTextures: Unsupported texture color space:",Q)),T}function ne(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=rt,this.resetTextureUnits=J,this.setTexture2D=yt,this.setTexture2DArray=z,this.setTexture3D=W,this.setTextureCube=at,this.rebindTextures=nn,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Gt,this.useMultisampledRTT=vn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function MA(o,t){function i(r,l=Kr){let c;const h=Qe.getTransfer(l);if(r===Zi)return o.UNSIGNED_BYTE;if(r===fm)return o.UNSIGNED_SHORT_4_4_4_4;if(r===hm)return o.UNSIGNED_SHORT_5_5_5_1;if(r===cx)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===ux)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===ox)return o.BYTE;if(r===lx)return o.SHORT;if(r===$l)return o.UNSIGNED_SHORT;if(r===um)return o.INT;if(r===Pa)return o.UNSIGNED_INT;if(r===Ua)return o.FLOAT;if(r===dr)return o.HALF_FLOAT;if(r===fx)return o.ALPHA;if(r===hx)return o.RGB;if(r===ya)return o.RGBA;if(r===pr)return o.DEPTH_COMPONENT;if(r===Fs)return o.DEPTH_STENCIL;if(r===dx)return o.RED;if(r===dm)return o.RED_INTEGER;if(r===ko)return o.RG;if(r===pm)return o.RG_INTEGER;if(r===mm)return o.RGBA_INTEGER;if(r===Wu||r===Yu||r===qu||r===ju)if(h===fn)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Wu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Yu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===qu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ju)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Wu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Yu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===qu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ju)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Tp||r===Ap||r===Rp||r===Cp)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Tp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ap)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Rp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Cp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===wp||r===Dp||r===Up||r===Lp||r===Np||r===Op||r===Pp)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===wp||r===Dp)return h===fn?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Up)return h===fn?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Lp)return c.COMPRESSED_R11_EAC;if(r===Np)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Op)return c.COMPRESSED_RG11_EAC;if(r===Pp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Fp||r===Ip||r===Bp||r===zp||r===Hp||r===Gp||r===Vp||r===kp||r===Xp||r===Wp||r===Yp||r===qp||r===jp||r===Zp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Fp)return h===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ip)return h===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Bp)return h===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===zp)return h===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Hp)return h===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Gp)return h===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vp)return h===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===kp)return h===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Xp)return h===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Wp)return h===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Yp)return h===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===qp)return h===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===jp)return h===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Zp)return h===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Kp||r===Qp||r===Jp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===Kp)return h===fn?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Qp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Jp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===$p||r===tm||r===em||r===nm)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===$p)return c.COMPRESSED_RED_RGTC1_EXT;if(r===tm)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===em)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===nm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===tc?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const bA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,EA=`
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

}`;class TA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new Tx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Ia({vertexShader:bA,fragmentShader:EA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Oi(new rc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AA extends zs{constructor(t,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,_=null,g=null,x=null,b=null,A=null;const R=typeof XRWebGLBinding<"u",E=new TA,y={},F=i.getContextAttributes();let N=null,P=null;const H=[],O=[],B=new we;let j=null;const C=new ua;C.viewport=new Nn;const L=new ua;L.viewport=new Nn;const k=[C,L],J=new PM;let rt=null,pt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let lt=H[nt];return lt===void 0&&(lt=new Qd,H[nt]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(nt){let lt=H[nt];return lt===void 0&&(lt=new Qd,H[nt]=lt),lt.getGripSpace()},this.getHand=function(nt){let lt=H[nt];return lt===void 0&&(lt=new Qd,H[nt]=lt),lt.getHandSpace()};function yt(nt){const lt=O.indexOf(nt.inputSource);if(lt===-1)return;const Gt=H[lt];Gt!==void 0&&(Gt.update(nt.inputSource,nt.frame,p||h),Gt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function z(){l.removeEventListener("select",yt),l.removeEventListener("selectstart",yt),l.removeEventListener("selectend",yt),l.removeEventListener("squeeze",yt),l.removeEventListener("squeezestart",yt),l.removeEventListener("squeezeend",yt),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",W);for(let nt=0;nt<H.length;nt++){const lt=O[nt];lt!==null&&(O[nt]=null,H[nt].disconnect(lt))}rt=null,pt=null,E.reset();for(const nt in y)delete y[nt];t.setRenderTarget(N),b=null,x=null,g=null,l=null,P=null,It.stop(),r.isPresenting=!1,t.setPixelRatio(j),t.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){c=nt,r.isPresenting===!0&&Se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){d=nt,r.isPresenting===!0&&Se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(nt){p=nt},this.getBaseLayer=function(){return x!==null?x:b},this.getBinding=function(){return g===null&&R&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(nt){if(l=nt,l!==null){if(N=t.getRenderTarget(),l.addEventListener("select",yt),l.addEventListener("selectstart",yt),l.addEventListener("selectend",yt),l.addEventListener("squeeze",yt),l.addEventListener("squeezestart",yt),l.addEventListener("squeezeend",yt),l.addEventListener("end",z),l.addEventListener("inputsourceschange",W),F.xrCompatible!==!0&&await i.makeXRCompatible(),j=t.getPixelRatio(),t.getSize(B),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Gt=null,jt=null,kt=null;F.depth&&(kt=F.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Gt=F.stencil?Fs:pr,jt=F.stencil?tc:Pa);const Te={colorFormat:i.RGBA8,depthFormat:kt,scaleFactor:c};g=this.getBinding(),x=g.createProjectionLayer(Te),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),P=new Oa(x.textureWidth,x.textureHeight,{format:ya,type:Zi,depthTexture:new nc(x.textureWidth,x.textureHeight,jt,void 0,void 0,void 0,void 0,void 0,void 0,Gt),stencilBuffer:F.stencil,colorSpace:t.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Gt={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(l,i,Gt),l.updateRenderState({baseLayer:b}),t.setPixelRatio(1),t.setSize(b.framebufferWidth,b.framebufferHeight,!1),P=new Oa(b.framebufferWidth,b.framebufferHeight,{format:ya,type:Zi,colorSpace:t.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),It.setContext(l),It.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function W(nt){for(let lt=0;lt<nt.removed.length;lt++){const Gt=nt.removed[lt],jt=O.indexOf(Gt);jt>=0&&(O[jt]=null,H[jt].disconnect(Gt))}for(let lt=0;lt<nt.added.length;lt++){const Gt=nt.added[lt];let jt=O.indexOf(Gt);if(jt===-1){for(let Te=0;Te<H.length;Te++)if(Te>=O.length){O.push(Gt),jt=Te;break}else if(O[Te]===null){O[Te]=Gt,jt=Te;break}if(jt===-1)break}const kt=H[jt];kt&&kt.connect(Gt)}}const at=new et,Ot=new et;function Lt(nt,lt,Gt){at.setFromMatrixPosition(lt.matrixWorld),Ot.setFromMatrixPosition(Gt.matrixWorld);const jt=at.distanceTo(Ot),kt=lt.projectionMatrix.elements,Te=Gt.projectionMatrix.elements,nn=kt[14]/(kt[10]-1),De=kt[14]/(kt[10]+1),Ee=(kt[9]+1)/kt[5],Be=(kt[9]-1)/kt[5],ve=(kt[8]-1)/kt[0],ln=(Te[8]+1)/Te[0],Y=nn*ve,vn=nn*ln,Ge=jt/(-ve+ln),je=Ge*-ve;if(lt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(je),nt.translateZ(Ge),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),kt[10]===-1)nt.projectionMatrix.copy(lt.projectionMatrix),nt.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const ne=nn+Ge,I=De+Ge,T=Y-je,Q=vn+(jt-je),bt=Ee*De/I*ne,wt=Be*De/I*ne;nt.projectionMatrix.makePerspective(T,Q,bt,wt,ne,I),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function G(nt,lt){lt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(lt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(l===null)return;let lt=nt.near,Gt=nt.far;E.texture!==null&&(E.depthNear>0&&(lt=E.depthNear),E.depthFar>0&&(Gt=E.depthFar)),J.near=L.near=C.near=lt,J.far=L.far=C.far=Gt,(rt!==J.near||pt!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),rt=J.near,pt=J.far),J.layers.mask=nt.layers.mask|6,C.layers.mask=J.layers.mask&3,L.layers.mask=J.layers.mask&5;const jt=nt.parent,kt=J.cameras;G(J,jt);for(let Te=0;Te<kt.length;Te++)G(kt[Te],jt);kt.length===2?Lt(J,C,L):J.projectionMatrix.copy(C.projectionMatrix),ft(nt,J,jt)};function ft(nt,lt,Gt){Gt===null?nt.matrix.copy(lt.matrixWorld):(nt.matrix.copy(Gt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(lt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(lt.projectionMatrix),nt.projectionMatrixInverse.copy(lt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=im*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(x===null&&b===null))return m},this.setFoveation=function(nt){m=nt,x!==null&&(x.fixedFoveation=nt),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=nt)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(J)},this.getCameraTexture=function(nt){return y[nt]};let At=null;function Vt(nt,lt){if(_=lt.getViewerPose(p||h),A=lt,_!==null){const Gt=_.views;b!==null&&(t.setRenderTargetFramebuffer(P,b.framebuffer),t.setRenderTarget(P));let jt=!1;Gt.length!==J.cameras.length&&(J.cameras.length=0,jt=!0);for(let De=0;De<Gt.length;De++){const Ee=Gt[De];let Be=null;if(b!==null)Be=b.getViewport(Ee);else{const ln=g.getViewSubImage(x,Ee);Be=ln.viewport,De===0&&(t.setRenderTargetTextures(P,ln.colorTexture,ln.depthStencilTexture),t.setRenderTarget(P))}let ve=k[De];ve===void 0&&(ve=new ua,ve.layers.enable(De),ve.viewport=new Nn,k[De]=ve),ve.matrix.fromArray(Ee.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(Ee.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(Be.x,Be.y,Be.width,Be.height),De===0&&(J.matrix.copy(ve.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),jt===!0&&J.cameras.push(ve)}const kt=l.enabledFeatures;if(kt&&kt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){g=r.getBinding();const De=g.getDepthInformation(Gt[0]);De&&De.isValid&&De.texture&&E.init(De,l.renderState)}if(kt&&kt.includes("camera-access")&&R){t.state.unbindTexture(),g=r.getBinding();for(let De=0;De<Gt.length;De++){const Ee=Gt[De].camera;if(Ee){let Be=y[Ee];Be||(Be=new Tx,y[Ee]=Be);const ve=g.getCameraImage(Ee);Be.sourceTexture=ve}}}}for(let Gt=0;Gt<H.length;Gt++){const jt=O[Gt],kt=H[Gt];jt!==null&&kt!==void 0&&kt.update(jt,lt,p||h)}At&&At(nt,lt),lt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:lt}),A=null}const It=new Rx;It.setAnimationLoop(Vt),this.setAnimationLoop=function(nt){At=nt},this.dispose=function(){}}}const Ls=new Fa,RA=new An;function CA(o,t){function i(E,y){E.matrixAutoUpdate===!0&&E.updateMatrix(),y.value.copy(E.matrix)}function r(E,y){y.color.getRGB(E.fogColor.value,Sx(o)),y.isFog?(E.fogNear.value=y.near,E.fogFar.value=y.far):y.isFogExp2&&(E.fogDensity.value=y.density)}function l(E,y,F,N,P){y.isMeshBasicMaterial||y.isMeshLambertMaterial?c(E,y):y.isMeshToonMaterial?(c(E,y),g(E,y)):y.isMeshPhongMaterial?(c(E,y),_(E,y)):y.isMeshStandardMaterial?(c(E,y),x(E,y),y.isMeshPhysicalMaterial&&b(E,y,P)):y.isMeshMatcapMaterial?(c(E,y),A(E,y)):y.isMeshDepthMaterial?c(E,y):y.isMeshDistanceMaterial?(c(E,y),R(E,y)):y.isMeshNormalMaterial?c(E,y):y.isLineBasicMaterial?(h(E,y),y.isLineDashedMaterial&&d(E,y)):y.isPointsMaterial?m(E,y,F,N):y.isSpriteMaterial?p(E,y):y.isShadowMaterial?(E.color.value.copy(y.color),E.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(E,y){E.opacity.value=y.opacity,y.color&&E.diffuse.value.copy(y.color),y.emissive&&E.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(E.map.value=y.map,i(y.map,E.mapTransform)),y.alphaMap&&(E.alphaMap.value=y.alphaMap,i(y.alphaMap,E.alphaMapTransform)),y.bumpMap&&(E.bumpMap.value=y.bumpMap,i(y.bumpMap,E.bumpMapTransform),E.bumpScale.value=y.bumpScale,y.side===Pi&&(E.bumpScale.value*=-1)),y.normalMap&&(E.normalMap.value=y.normalMap,i(y.normalMap,E.normalMapTransform),E.normalScale.value.copy(y.normalScale),y.side===Pi&&E.normalScale.value.negate()),y.displacementMap&&(E.displacementMap.value=y.displacementMap,i(y.displacementMap,E.displacementMapTransform),E.displacementScale.value=y.displacementScale,E.displacementBias.value=y.displacementBias),y.emissiveMap&&(E.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,E.emissiveMapTransform)),y.specularMap&&(E.specularMap.value=y.specularMap,i(y.specularMap,E.specularMapTransform)),y.alphaTest>0&&(E.alphaTest.value=y.alphaTest);const F=t.get(y),N=F.envMap,P=F.envMapRotation;N&&(E.envMap.value=N,Ls.copy(P),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),E.envMapRotation.value.setFromMatrix4(RA.makeRotationFromEuler(Ls)),E.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,E.reflectivity.value=y.reflectivity,E.ior.value=y.ior,E.refractionRatio.value=y.refractionRatio),y.lightMap&&(E.lightMap.value=y.lightMap,E.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,E.lightMapTransform)),y.aoMap&&(E.aoMap.value=y.aoMap,E.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,E.aoMapTransform))}function h(E,y){E.diffuse.value.copy(y.color),E.opacity.value=y.opacity,y.map&&(E.map.value=y.map,i(y.map,E.mapTransform))}function d(E,y){E.dashSize.value=y.dashSize,E.totalSize.value=y.dashSize+y.gapSize,E.scale.value=y.scale}function m(E,y,F,N){E.diffuse.value.copy(y.color),E.opacity.value=y.opacity,E.size.value=y.size*F,E.scale.value=N*.5,y.map&&(E.map.value=y.map,i(y.map,E.uvTransform)),y.alphaMap&&(E.alphaMap.value=y.alphaMap,i(y.alphaMap,E.alphaMapTransform)),y.alphaTest>0&&(E.alphaTest.value=y.alphaTest)}function p(E,y){E.diffuse.value.copy(y.color),E.opacity.value=y.opacity,E.rotation.value=y.rotation,y.map&&(E.map.value=y.map,i(y.map,E.mapTransform)),y.alphaMap&&(E.alphaMap.value=y.alphaMap,i(y.alphaMap,E.alphaMapTransform)),y.alphaTest>0&&(E.alphaTest.value=y.alphaTest)}function _(E,y){E.specular.value.copy(y.specular),E.shininess.value=Math.max(y.shininess,1e-4)}function g(E,y){y.gradientMap&&(E.gradientMap.value=y.gradientMap)}function x(E,y){E.metalness.value=y.metalness,y.metalnessMap&&(E.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,E.metalnessMapTransform)),E.roughness.value=y.roughness,y.roughnessMap&&(E.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,E.roughnessMapTransform)),y.envMap&&(E.envMapIntensity.value=y.envMapIntensity)}function b(E,y,F){E.ior.value=y.ior,y.sheen>0&&(E.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),E.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(E.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,E.sheenColorMapTransform)),y.sheenRoughnessMap&&(E.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,E.sheenRoughnessMapTransform))),y.clearcoat>0&&(E.clearcoat.value=y.clearcoat,E.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(E.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,E.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(E.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Pi&&E.clearcoatNormalScale.value.negate())),y.dispersion>0&&(E.dispersion.value=y.dispersion),y.iridescence>0&&(E.iridescence.value=y.iridescence,E.iridescenceIOR.value=y.iridescenceIOR,E.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(E.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,E.iridescenceMapTransform)),y.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),y.transmission>0&&(E.transmission.value=y.transmission,E.transmissionSamplerMap.value=F.texture,E.transmissionSamplerSize.value.set(F.width,F.height),y.transmissionMap&&(E.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,E.transmissionMapTransform)),E.thickness.value=y.thickness,y.thicknessMap&&(E.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=y.attenuationDistance,E.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(E.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(E.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,E.anisotropyMapTransform))),E.specularIntensity.value=y.specularIntensity,E.specularColor.value.copy(y.specularColor),y.specularColorMap&&(E.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,E.specularColorMapTransform)),y.specularIntensityMap&&(E.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,E.specularIntensityMapTransform))}function A(E,y){y.matcap&&(E.matcap.value=y.matcap)}function R(E,y){const F=t.get(y).light;E.referencePosition.value.setFromMatrixPosition(F.matrixWorld),E.nearDistance.value=F.shadow.camera.near,E.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function wA(o,t,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(F,N){const P=N.program;r.uniformBlockBinding(F,P)}function p(F,N){let P=l[F.id];P===void 0&&(A(F),P=_(F),l[F.id]=P,F.addEventListener("dispose",E));const H=N.program;r.updateUBOMapping(F,H);const O=t.render.frame;c[F.id]!==O&&(x(F),c[F.id]=O)}function _(F){const N=g();F.__bindingPointIndex=N;const P=o.createBuffer(),H=F.__size,O=F.usage;return o.bindBuffer(o.UNIFORM_BUFFER,P),o.bufferData(o.UNIFORM_BUFFER,H,O),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,P),P}function g(){for(let F=0;F<d;F++)if(h.indexOf(F)===-1)return h.push(F),F;return en("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(F){const N=l[F.id],P=F.uniforms,H=F.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let O=0,B=P.length;O<B;O++){const j=Array.isArray(P[O])?P[O]:[P[O]];for(let C=0,L=j.length;C<L;C++){const k=j[C];if(b(k,O,C,H)===!0){const J=k.__offset,rt=Array.isArray(k.value)?k.value:[k.value];let pt=0;for(let yt=0;yt<rt.length;yt++){const z=rt[yt],W=R(z);typeof z=="number"||typeof z=="boolean"?(k.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,J+pt,k.__data)):z.isMatrix3?(k.__data[0]=z.elements[0],k.__data[1]=z.elements[1],k.__data[2]=z.elements[2],k.__data[3]=0,k.__data[4]=z.elements[3],k.__data[5]=z.elements[4],k.__data[6]=z.elements[5],k.__data[7]=0,k.__data[8]=z.elements[6],k.__data[9]=z.elements[7],k.__data[10]=z.elements[8],k.__data[11]=0):(z.toArray(k.__data,pt),pt+=W.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,J,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function b(F,N,P,H){const O=F.value,B=N+"_"+P;if(H[B]===void 0)return typeof O=="number"||typeof O=="boolean"?H[B]=O:H[B]=O.clone(),!0;{const j=H[B];if(typeof O=="number"||typeof O=="boolean"){if(j!==O)return H[B]=O,!0}else if(j.equals(O)===!1)return j.copy(O),!0}return!1}function A(F){const N=F.uniforms;let P=0;const H=16;for(let B=0,j=N.length;B<j;B++){const C=Array.isArray(N[B])?N[B]:[N[B]];for(let L=0,k=C.length;L<k;L++){const J=C[L],rt=Array.isArray(J.value)?J.value:[J.value];for(let pt=0,yt=rt.length;pt<yt;pt++){const z=rt[pt],W=R(z),at=P%H,Ot=at%W.boundary,Lt=at+Ot;P+=Ot,Lt!==0&&H-Lt<W.storage&&(P+=H-Lt),J.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=P,P+=W.storage}}}const O=P%H;return O>0&&(P+=H-O),F.__size=P,F.__cache={},this}function R(F){const N={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(N.boundary=4,N.storage=4):F.isVector2?(N.boundary=8,N.storage=8):F.isVector3||F.isColor?(N.boundary=16,N.storage=12):F.isVector4?(N.boundary=16,N.storage=16):F.isMatrix3?(N.boundary=48,N.storage=48):F.isMatrix4?(N.boundary=64,N.storage=64):F.isTexture?Se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Se("WebGLRenderer: Unsupported uniform value type.",F),N}function E(F){const N=F.target;N.removeEventListener("dispose",E);const P=h.indexOf(N.__bindingPointIndex);h.splice(P,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function y(){for(const F in l)o.deleteBuffer(l[F]);h=[],l={},c={}}return{bind:m,update:p,dispose:y}}const DA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wa=null;function UA(){return wa===null&&(wa=new _M(DA,16,16,ko,dr),wa.name="DFG_LUT",wa.minFilter=di,wa.magFilter=di,wa.wrapS=ur,wa.wrapT=ur,wa.generateMipmaps=!1,wa.needsUpdate=!0),wa}class LA{constructor(t={}){const{canvas:i=kS(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1,outputBufferType:b=Zi}=t;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=h;const R=b,E=new Set([mm,pm,dm]),y=new Set([Zi,Pa,$l,tc,fm,hm]),F=new Uint32Array(4),N=new Int32Array(4);let P=null,H=null;const O=[],B=[];let j=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Na,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let L=!1;this._outputColorSpace=qi;let k=0,J=0,rt=null,pt=-1,yt=null;const z=new Nn,W=new Nn;let at=null;const Ot=new Ie(0);let Lt=0,G=i.width,ft=i.height,At=1,Vt=null,It=null;const nt=new Nn(0,0,G,ft),lt=new Nn(0,0,G,ft);let Gt=!1;const jt=new Sm;let kt=!1,Te=!1;const nn=new An,De=new et,Ee=new Nn,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ve=!1;function ln(){return rt===null?At:1}let Y=r;function vn(w,$){return i.getContext(w,$)}try{const w={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${lm}`),i.addEventListener("webglcontextlost",de,!1),i.addEventListener("webglcontextrestored",an,!1),i.addEventListener("webglcontextcreationerror",Xe,!1),Y===null){const $="webgl2";if(Y=vn($,w),Y===null)throw vn($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw en("WebGLRenderer: "+w.message),w}let Ge,je,ne,I,T,Q,bt,wt,_t,le,Xt,ae,he,Pt,Ht,te,Zt,qt,Re,K,Kt,Ut,Qt,xt;function Rt(){Ge=new UT(Y),Ge.init(),Ut=new MA(Y,Ge),je=new MT(Y,Ge,t,Ut),ne=new yA(Y,Ge),je.reversedDepthBuffer&&x&&ne.buffers.depth.setReversed(!0),I=new OT(Y),T=new rA,Q=new SA(Y,Ge,ne,T,je,Ut,I),bt=new ET(C),wt=new DT(C),_t=new BM(Y),Qt=new yT(Y,_t),le=new LT(Y,_t,I,Qt),Xt=new FT(Y,le,_t,I),Re=new PT(Y,je,Q),te=new bT(T),ae=new aA(C,bt,wt,Ge,je,Qt,te),he=new CA(C,T),Pt=new oA,Ht=new dA(Ge),qt=new xT(C,bt,wt,ne,Xt,A,m),Zt=new vA(C,Xt,je),xt=new wA(Y,I,je,ne),K=new ST(Y,Ge,I),Kt=new NT(Y,Ge,I),I.programs=ae.programs,C.capabilities=je,C.extensions=Ge,C.properties=T,C.renderLists=Pt,C.shadowMap=Zt,C.state=ne,C.info=I}Rt(),R!==Zi&&(j=new BT(R,i.width,i.height,l,c));const zt=new AA(C,Y);this.xr=zt,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const w=Ge.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ge.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return At},this.setPixelRatio=function(w){w!==void 0&&(At=w,this.setSize(G,ft,!1))},this.getSize=function(w){return w.set(G,ft)},this.setSize=function(w,$,mt=!0){if(zt.isPresenting){Se("WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,ft=$,i.width=Math.floor(w*At),i.height=Math.floor($*At),mt===!0&&(i.style.width=w+"px",i.style.height=$+"px"),j!==null&&j.setSize(i.width,i.height),this.setViewport(0,0,w,$)},this.getDrawingBufferSize=function(w){return w.set(G*At,ft*At).floor()},this.setDrawingBufferSize=function(w,$,mt){G=w,ft=$,At=mt,i.width=Math.floor(w*mt),i.height=Math.floor($*mt),this.setViewport(0,0,w,$)},this.setEffects=function(w){if(R===Zi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let $=0;$<w.length;$++)if(w[$].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}j.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(z)},this.getViewport=function(w){return w.copy(nt)},this.setViewport=function(w,$,mt,ht){w.isVector4?nt.set(w.x,w.y,w.z,w.w):nt.set(w,$,mt,ht),ne.viewport(z.copy(nt).multiplyScalar(At).round())},this.getScissor=function(w){return w.copy(lt)},this.setScissor=function(w,$,mt,ht){w.isVector4?lt.set(w.x,w.y,w.z,w.w):lt.set(w,$,mt,ht),ne.scissor(W.copy(lt).multiplyScalar(At).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(w){ne.setScissorTest(Gt=w)},this.setOpaqueSort=function(w){Vt=w},this.setTransparentSort=function(w){It=w},this.getClearColor=function(w){return w.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(w=!0,$=!0,mt=!0){let ht=0;if(w){let it=!1;if(rt!==null){const Jt=rt.texture.format;it=E.has(Jt)}if(it){const Jt=rt.texture.type,ie=y.has(Jt),$t=qt.getClearColor(),re=qt.getClearAlpha(),ce=$t.r,pe=$t.g,se=$t.b;ie?(F[0]=ce,F[1]=pe,F[2]=se,F[3]=re,Y.clearBufferuiv(Y.COLOR,0,F)):(N[0]=ce,N[1]=pe,N[2]=se,N[3]=re,Y.clearBufferiv(Y.COLOR,0,N))}else ht|=Y.COLOR_BUFFER_BIT}$&&(ht|=Y.DEPTH_BUFFER_BIT),mt&&(ht|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(ht)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",de,!1),i.removeEventListener("webglcontextrestored",an,!1),i.removeEventListener("webglcontextcreationerror",Xe,!1),qt.dispose(),Pt.dispose(),Ht.dispose(),T.dispose(),bt.dispose(),wt.dispose(),Xt.dispose(),Qt.dispose(),xt.dispose(),ae.dispose(),zt.dispose(),zt.removeEventListener("sessionstart",za),zt.removeEventListener("sessionend",es),Ki.stop()};function de(w){w.preventDefault(),j_("WebGLRenderer: Context Lost."),L=!0}function an(){j_("WebGLRenderer: Context Restored."),L=!1;const w=I.autoReset,$=Zt.enabled,mt=Zt.autoUpdate,ht=Zt.needsUpdate,it=Zt.type;Rt(),I.autoReset=w,Zt.enabled=$,Zt.autoUpdate=mt,Zt.needsUpdate=ht,Zt.type=it}function Xe(w){en("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Bn(w){const $=w.target;$.removeEventListener("dispose",Bn),pi($)}function pi(w){$r(w),T.remove(w)}function $r(w){const $=T.get(w).programs;$!==void 0&&($.forEach(function(mt){ae.releaseProgram(mt)}),w.isShaderMaterial&&ae.releaseShaderCache(w))}this.renderBufferDirect=function(w,$,mt,ht,it,Jt){$===null&&($=Be);const ie=it.isMesh&&it.matrixWorld.determinant()<0,$t=Ji(w,$,mt,ht,it);ne.setMaterial(ht,ie);let re=mt.index,ce=1;if(ht.wireframe===!0){if(re=le.getWireframeAttribute(mt),re===void 0)return;ce=2}const pe=mt.drawRange,se=mt.attributes.position;let ge=pe.start*ce,Ze=(pe.start+pe.count)*ce;Jt!==null&&(ge=Math.max(ge,Jt.start*ce),Ze=Math.min(Ze,(Jt.start+Jt.count)*ce)),re!==null?(ge=Math.max(ge,0),Ze=Math.min(Ze,re.count)):se!=null&&(ge=Math.max(ge,0),Ze=Math.min(Ze,se.count));const rn=Ze-ge;if(rn<0||rn===1/0)return;Qt.setup(it,ht,$t,mt,re);let sn,Je=K;if(re!==null&&(sn=_t.get(re),Je=Kt,Je.setIndex(sn)),it.isMesh)ht.wireframe===!0?(ne.setLineWidth(ht.wireframeLinewidth*ln()),Je.setMode(Y.LINES)):Je.setMode(Y.TRIANGLES);else if(it.isLine){let fe=ht.linewidth;fe===void 0&&(fe=1),ne.setLineWidth(fe*ln()),it.isLineSegments?Je.setMode(Y.LINES):it.isLineLoop?Je.setMode(Y.LINE_LOOP):Je.setMode(Y.LINE_STRIP)}else it.isPoints?Je.setMode(Y.POINTS):it.isSprite&&Je.setMode(Y.TRIANGLES);if(it.isBatchedMesh)if(it._multiDrawInstances!==null)ec("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Je.renderMultiDrawInstances(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount,it._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))Je.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{const fe=it._multiDrawStarts,Ce=it._multiDrawCounts,Me=it._multiDrawCount,zn=re?_t.get(re).bytesPerElement:1,ta=T.get(ht).currentProgram.getUniforms();for(let wn=0;wn<Me;wn++)ta.setValue(Y,"_gl_DrawID",wn),Je.render(fe[wn]/zn,Ce[wn])}else if(it.isInstancedMesh)Je.renderInstances(ge,rn,it.count);else if(mt.isInstancedBufferGeometry){const fe=mt._maxInstanceCount!==void 0?mt._maxInstanceCount:1/0,Ce=Math.min(mt.instanceCount,fe);Je.renderInstances(ge,rn,Ce)}else Je.render(ge,rn)};function ts(w,$,mt){w.transparent===!0&&w.side===ji&&w.forceSinglePass===!1?(w.side=Pi,w.needsUpdate=!0,Qi(w,$,mt),w.side=Jr,w.needsUpdate=!0,Qi(w,$,mt),w.side=ji):Qi(w,$,mt)}this.compile=function(w,$,mt=null){mt===null&&(mt=w),H=Ht.get(mt),H.init($),B.push(H),mt.traverseVisible(function(it){it.isLight&&it.layers.test($.layers)&&(H.pushLight(it),it.castShadow&&H.pushShadow(it))}),w!==mt&&w.traverseVisible(function(it){it.isLight&&it.layers.test($.layers)&&(H.pushLight(it),it.castShadow&&H.pushShadow(it))}),H.setupLights();const ht=new Set;return w.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;const Jt=it.material;if(Jt)if(Array.isArray(Jt))for(let ie=0;ie<Jt.length;ie++){const $t=Jt[ie];ts($t,mt,it),ht.add($t)}else ts(Jt,mt,it),ht.add(Jt)}),H=B.pop(),ht},this.compileAsync=function(w,$,mt=null){const ht=this.compile(w,$,mt);return new Promise(it=>{function Jt(){if(ht.forEach(function(ie){T.get(ie).currentProgram.isReady()&&ht.delete(ie)}),ht.size===0){it(w);return}setTimeout(Jt,10)}Ge.get("KHR_parallel_shader_compile")!==null?Jt():setTimeout(Jt,10)})};let Ba=null;function mr(w){Ba&&Ba(w)}function za(){Ki.stop()}function es(){Ki.start()}const Ki=new Rx;Ki.setAnimationLoop(mr),typeof self<"u"&&Ki.setContext(self),this.setAnimationLoop=function(w){Ba=w,zt.setAnimationLoop(w),w===null?Ki.stop():Ki.start()},zt.addEventListener("sessionstart",za),zt.addEventListener("sessionend",es),this.render=function(w,$){if($!==void 0&&$.isCamera!==!0){en("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;const mt=zt.enabled===!0&&zt.isPresenting===!0,ht=j!==null&&(rt===null||mt)&&j.begin(C,rt);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),zt.enabled===!0&&zt.isPresenting===!0&&(j===null||j.isCompositing()===!1)&&(zt.cameraAutoUpdate===!0&&zt.updateCamera($),$=zt.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,$,rt),H=Ht.get(w,B.length),H.init($),B.push(H),nn.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),jt.setFromProjectionMatrix(nn,La,$.reversedDepth),Te=this.localClippingEnabled,kt=te.init(this.clippingPlanes,Te),P=Pt.get(w,O.length),P.init(),O.push(P),zt.enabled===!0&&zt.isPresenting===!0){const ie=C.xr.getDepthSensingMesh();ie!==null&&Qn(ie,$,-1/0,C.sortObjects)}Qn(w,$,0,C.sortObjects),P.finish(),C.sortObjects===!0&&P.sort(Vt,It),ve=zt.enabled===!1||zt.isPresenting===!1||zt.hasDepthSensing()===!1,ve&&qt.addToRenderList(P,w),this.info.render.frame++,kt===!0&&te.beginShadows();const it=H.state.shadowsArray;if(Zt.render(it,w,$),kt===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ht&&j.hasRenderPass())===!1){const ie=P.opaque,$t=P.transmissive;if(H.setupLights(),$.isArrayCamera){const re=$.cameras;if($t.length>0)for(let ce=0,pe=re.length;ce<pe;ce++){const se=re[ce];Rn(ie,$t,w,se)}ve&&qt.render(w);for(let ce=0,pe=re.length;ce<pe;ce++){const se=re[ce];bn(P,w,se,se.viewport)}}else $t.length>0&&Rn(ie,$t,w,$),ve&&qt.render(w),bn(P,w,$)}rt!==null&&J===0&&(Q.updateMultisampleRenderTarget(rt),Q.updateRenderTargetMipmap(rt)),ht&&j.end(C),w.isScene===!0&&w.onAfterRender(C,w,$),Qt.resetDefaultState(),pt=-1,yt=null,B.pop(),B.length>0?(H=B[B.length-1],kt===!0&&te.setGlobalState(C.clippingPlanes,H.state.camera)):H=null,O.pop(),O.length>0?P=O[O.length-1]:P=null};function Qn(w,$,mt,ht){if(w.visible===!1)return;if(w.layers.test($.layers)){if(w.isGroup)mt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update($);else if(w.isLight)H.pushLight(w),w.castShadow&&H.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||jt.intersectsSprite(w)){ht&&Ee.setFromMatrixPosition(w.matrixWorld).applyMatrix4(nn);const ie=Xt.update(w),$t=w.material;$t.visible&&P.push(w,ie,$t,mt,Ee.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||jt.intersectsObject(w))){const ie=Xt.update(w),$t=w.material;if(ht&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ee.copy(w.boundingSphere.center)):(ie.boundingSphere===null&&ie.computeBoundingSphere(),Ee.copy(ie.boundingSphere.center)),Ee.applyMatrix4(w.matrixWorld).applyMatrix4(nn)),Array.isArray($t)){const re=ie.groups;for(let ce=0,pe=re.length;ce<pe;ce++){const se=re[ce],ge=$t[se.materialIndex];ge&&ge.visible&&P.push(w,ie,ge,mt,Ee.z,se)}}else $t.visible&&P.push(w,ie,$t,mt,Ee.z,null)}}const Jt=w.children;for(let ie=0,$t=Jt.length;ie<$t;ie++)Qn(Jt[ie],$,mt,ht)}function bn(w,$,mt,ht){const{opaque:it,transmissive:Jt,transparent:ie}=w;H.setupLightsView(mt),kt===!0&&te.setGlobalState(C.clippingPlanes,mt),ht&&ne.viewport(z.copy(ht)),it.length>0&&Fi(it,$,mt),Jt.length>0&&Fi(Jt,$,mt),ie.length>0&&Fi(ie,$,mt),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function Rn(w,$,mt,ht){if((mt.isScene===!0?mt.overrideMaterial:null)!==null)return;if(H.state.transmissionRenderTarget[ht.id]===void 0){const ge=Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float");H.state.transmissionRenderTarget[ht.id]=new Oa(1,1,{generateMipmaps:!0,type:ge?dr:Zi,minFilter:Ps,samples:je.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}const Jt=H.state.transmissionRenderTarget[ht.id],ie=ht.viewport||z;Jt.setSize(ie.z*C.transmissionResolutionScale,ie.w*C.transmissionResolutionScale);const $t=C.getRenderTarget(),re=C.getActiveCubeFace(),ce=C.getActiveMipmapLevel();C.setRenderTarget(Jt),C.getClearColor(Ot),Lt=C.getClearAlpha(),Lt<1&&C.setClearColor(16777215,.5),C.clear(),ve&&qt.render(mt);const pe=C.toneMapping;C.toneMapping=Na;const se=ht.viewport;if(ht.viewport!==void 0&&(ht.viewport=void 0),H.setupLightsView(ht),kt===!0&&te.setGlobalState(C.clippingPlanes,ht),Fi(w,mt,ht),Q.updateMultisampleRenderTarget(Jt),Q.updateRenderTargetMipmap(Jt),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let ge=!1;for(let Ze=0,rn=$.length;Ze<rn;Ze++){const sn=$[Ze],{object:Je,geometry:fe,material:Ce,group:Me}=sn;if(Ce.side===ji&&Je.layers.test(ht.layers)){const zn=Ce.side;Ce.side=Pi,Ce.needsUpdate=!0,gr(Je,mt,ht,fe,Ce,Me),Ce.side=zn,Ce.needsUpdate=!0,ge=!0}}ge===!0&&(Q.updateMultisampleRenderTarget(Jt),Q.updateRenderTargetMipmap(Jt))}C.setRenderTarget($t,re,ce),C.setClearColor(Ot,Lt),se!==void 0&&(ht.viewport=se),C.toneMapping=pe}function Fi(w,$,mt){const ht=$.isScene===!0?$.overrideMaterial:null;for(let it=0,Jt=w.length;it<Jt;it++){const ie=w[it],{object:$t,geometry:re,group:ce}=ie;let pe=ie.material;pe.allowOverride===!0&&ht!==null&&(pe=ht),$t.layers.test(mt.layers)&&gr($t,$,mt,re,pe,ce)}}function gr(w,$,mt,ht,it,Jt){w.onBeforeRender(C,$,mt,ht,it,Jt),w.modelViewMatrix.multiplyMatrices(mt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),it.onBeforeRender(C,$,mt,ht,w,Jt),it.transparent===!0&&it.side===ji&&it.forceSinglePass===!1?(it.side=Pi,it.needsUpdate=!0,C.renderBufferDirect(mt,$,ht,it,w,Jt),it.side=Jr,it.needsUpdate=!0,C.renderBufferDirect(mt,$,ht,it,w,Jt),it.side=ji):C.renderBufferDirect(mt,$,ht,it,w,Jt),w.onAfterRender(C,$,mt,ht,it,Jt)}function Qi(w,$,mt){$.isScene!==!0&&($=Be);const ht=T.get(w),it=H.state.lights,Jt=H.state.shadowsArray,ie=it.state.version,$t=ae.getParameters(w,it.state,Jt,$,mt),re=ae.getProgramCacheKey($t);let ce=ht.programs;ht.environment=w.isMeshStandardMaterial?$.environment:null,ht.fog=$.fog,ht.envMap=(w.isMeshStandardMaterial?wt:bt).get(w.envMap||ht.environment),ht.envMapRotation=ht.environment!==null&&w.envMap===null?$.environmentRotation:w.envMapRotation,ce===void 0&&(w.addEventListener("dispose",Bn),ce=new Map,ht.programs=ce);let pe=ce.get(re);if(pe!==void 0){if(ht.currentProgram===pe&&ht.lightsStateVersion===ie)return ns(w,$t),pe}else $t.uniforms=ae.getUniforms(w),w.onBeforeCompile($t,C),pe=ae.acquireProgram($t,re),ce.set(re,pe),ht.uniforms=$t.uniforms;const se=ht.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(se.clippingPlanes=te.uniform),ns(w,$t),ht.needsLights=Si(w),ht.lightsStateVersion=ie,ht.needsLights&&(se.ambientLightColor.value=it.state.ambient,se.lightProbe.value=it.state.probe,se.directionalLights.value=it.state.directional,se.directionalLightShadows.value=it.state.directionalShadow,se.spotLights.value=it.state.spot,se.spotLightShadows.value=it.state.spotShadow,se.rectAreaLights.value=it.state.rectArea,se.ltc_1.value=it.state.rectAreaLTC1,se.ltc_2.value=it.state.rectAreaLTC2,se.pointLights.value=it.state.point,se.pointLightShadows.value=it.state.pointShadow,se.hemisphereLights.value=it.state.hemi,se.directionalShadowMap.value=it.state.directionalShadowMap,se.directionalShadowMatrix.value=it.state.directionalShadowMatrix,se.spotShadowMap.value=it.state.spotShadowMap,se.spotLightMatrix.value=it.state.spotLightMatrix,se.spotLightMap.value=it.state.spotLightMap,se.pointShadowMap.value=it.state.pointShadowMap,se.pointShadowMatrix.value=it.state.pointShadowMatrix),ht.currentProgram=pe,ht.uniformsList=null,pe}function Gs(w){if(w.uniformsList===null){const $=w.currentProgram.getUniforms();w.uniformsList=Qu.seqWithValue($.seq,w.uniforms)}return w.uniformsList}function ns(w,$){const mt=T.get(w);mt.outputColorSpace=$.outputColorSpace,mt.batching=$.batching,mt.batchingColor=$.batchingColor,mt.instancing=$.instancing,mt.instancingColor=$.instancingColor,mt.instancingMorph=$.instancingMorph,mt.skinning=$.skinning,mt.morphTargets=$.morphTargets,mt.morphNormals=$.morphNormals,mt.morphColors=$.morphColors,mt.morphTargetsCount=$.morphTargetsCount,mt.numClippingPlanes=$.numClippingPlanes,mt.numIntersection=$.numClipIntersection,mt.vertexAlphas=$.vertexAlphas,mt.vertexTangents=$.vertexTangents,mt.toneMapping=$.toneMapping}function Ji(w,$,mt,ht,it){$.isScene!==!0&&($=Be),Q.resetTextureUnits();const Jt=$.fog,ie=ht.isMeshStandardMaterial?$.environment:null,$t=rt===null?C.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Xo,re=(ht.isMeshStandardMaterial?wt:bt).get(ht.envMap||ie),ce=ht.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,pe=!!mt.attributes.tangent&&(!!ht.normalMap||ht.anisotropy>0),se=!!mt.morphAttributes.position,ge=!!mt.morphAttributes.normal,Ze=!!mt.morphAttributes.color;let rn=Na;ht.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(rn=C.toneMapping);const sn=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,Je=sn!==void 0?sn.length:0,fe=T.get(ht),Ce=H.state.lights;if(kt===!0&&(Te===!0||w!==yt)){const Yn=w===yt&&ht.id===pt;te.setState(ht,w,Yn)}let Me=!1;ht.version===fe.__version?(fe.needsLights&&fe.lightsStateVersion!==Ce.state.version||fe.outputColorSpace!==$t||it.isBatchedMesh&&fe.batching===!1||!it.isBatchedMesh&&fe.batching===!0||it.isBatchedMesh&&fe.batchingColor===!0&&it.colorTexture===null||it.isBatchedMesh&&fe.batchingColor===!1&&it.colorTexture!==null||it.isInstancedMesh&&fe.instancing===!1||!it.isInstancedMesh&&fe.instancing===!0||it.isSkinnedMesh&&fe.skinning===!1||!it.isSkinnedMesh&&fe.skinning===!0||it.isInstancedMesh&&fe.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&fe.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&fe.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&fe.instancingMorph===!1&&it.morphTexture!==null||fe.envMap!==re||ht.fog===!0&&fe.fog!==Jt||fe.numClippingPlanes!==void 0&&(fe.numClippingPlanes!==te.numPlanes||fe.numIntersection!==te.numIntersection)||fe.vertexAlphas!==ce||fe.vertexTangents!==pe||fe.morphTargets!==se||fe.morphNormals!==ge||fe.morphColors!==Ze||fe.toneMapping!==rn||fe.morphTargetsCount!==Je)&&(Me=!0):(Me=!0,fe.__version=ht.version);let zn=fe.currentProgram;Me===!0&&(zn=Qi(ht,$,it));let ta=!1,wn=!1,Mi=!1;const Ke=zn.getUniforms(),Hn=fe.uniforms;if(ne.useProgram(zn.program)&&(ta=!0,wn=!0,Mi=!0),ht.id!==pt&&(pt=ht.id,wn=!0),ta||yt!==w){ne.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ke.setValue(Y,"projectionMatrix",w.projectionMatrix),Ke.setValue(Y,"viewMatrix",w.matrixWorldInverse);const On=Ke.map.cameraPosition;On!==void 0&&On.setValue(Y,De.setFromMatrixPosition(w.matrixWorld)),je.logarithmicDepthBuffer&&Ke.setValue(Y,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ht.isMeshPhongMaterial||ht.isMeshToonMaterial||ht.isMeshLambertMaterial||ht.isMeshBasicMaterial||ht.isMeshStandardMaterial||ht.isShaderMaterial)&&Ke.setValue(Y,"isOrthographic",w.isOrthographicCamera===!0),yt!==w&&(yt=w,wn=!0,Mi=!0)}if(fe.needsLights&&(Ce.state.directionalShadowMap.length>0&&Ke.setValue(Y,"directionalShadowMap",Ce.state.directionalShadowMap,Q),Ce.state.spotShadowMap.length>0&&Ke.setValue(Y,"spotShadowMap",Ce.state.spotShadowMap,Q),Ce.state.pointShadowMap.length>0&&Ke.setValue(Y,"pointShadowMap",Ce.state.pointShadowMap,Q)),it.isSkinnedMesh){Ke.setOptional(Y,it,"bindMatrix"),Ke.setOptional(Y,it,"bindMatrixInverse");const Yn=it.skeleton;Yn&&(Yn.boneTexture===null&&Yn.computeBoneTexture(),Ke.setValue(Y,"boneTexture",Yn.boneTexture,Q))}it.isBatchedMesh&&(Ke.setOptional(Y,it,"batchingTexture"),Ke.setValue(Y,"batchingTexture",it._matricesTexture,Q),Ke.setOptional(Y,it,"batchingIdTexture"),Ke.setValue(Y,"batchingIdTexture",it._indirectTexture,Q),Ke.setOptional(Y,it,"batchingColorTexture"),it._colorsTexture!==null&&Ke.setValue(Y,"batchingColorTexture",it._colorsTexture,Q));const Dn=mt.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&Re.update(it,mt,zn),(wn||fe.receiveShadow!==it.receiveShadow)&&(fe.receiveShadow=it.receiveShadow,Ke.setValue(Y,"receiveShadow",it.receiveShadow)),ht.isMeshGouraudMaterial&&ht.envMap!==null&&(Hn.envMap.value=re,Hn.flipEnvMap.value=re.isCubeTexture&&re.isRenderTargetTexture===!1?-1:1),ht.isMeshStandardMaterial&&ht.envMap===null&&$.environment!==null&&(Hn.envMapIntensity.value=$.environmentIntensity),Hn.dfgLUT!==void 0&&(Hn.dfgLUT.value=UA()),wn&&(Ke.setValue(Y,"toneMappingExposure",C.toneMappingExposure),fe.needsLights&&is(Hn,Mi),Jt&&ht.fog===!0&&he.refreshFogUniforms(Hn,Jt),he.refreshMaterialUniforms(Hn,ht,At,ft,H.state.transmissionRenderTarget[w.id]),Qu.upload(Y,Gs(fe),Hn,Q)),ht.isShaderMaterial&&ht.uniformsNeedUpdate===!0&&(Qu.upload(Y,Gs(fe),Hn,Q),ht.uniformsNeedUpdate=!1),ht.isSpriteMaterial&&Ke.setValue(Y,"center",it.center),Ke.setValue(Y,"modelViewMatrix",it.modelViewMatrix),Ke.setValue(Y,"normalMatrix",it.normalMatrix),Ke.setValue(Y,"modelMatrix",it.matrixWorld),ht.isShaderMaterial||ht.isRawShaderMaterial){const Yn=ht.uniformsGroups;for(let On=0,_r=Yn.length;On<_r;On++){const bi=Yn[On];xt.update(bi,zn),xt.bind(bi,zn)}}return zn}function is(w,$){w.ambientLightColor.needsUpdate=$,w.lightProbe.needsUpdate=$,w.directionalLights.needsUpdate=$,w.directionalLightShadows.needsUpdate=$,w.pointLights.needsUpdate=$,w.pointLightShadows.needsUpdate=$,w.spotLights.needsUpdate=$,w.spotLightShadows.needsUpdate=$,w.rectAreaLights.needsUpdate=$,w.hemisphereLights.needsUpdate=$}function Si(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(w,$,mt){const ht=T.get(w);ht.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ht.__autoAllocateDepthBuffer===!1&&(ht.__useRenderToTexture=!1),T.get(w.texture).__webglTexture=$,T.get(w.depthTexture).__webglTexture=ht.__autoAllocateDepthBuffer?void 0:mt,ht.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,$){const mt=T.get(w);mt.__webglFramebuffer=$,mt.__useDefaultFramebuffer=$===void 0};const Sa=Y.createFramebuffer();this.setRenderTarget=function(w,$=0,mt=0){rt=w,k=$,J=mt;let ht=null,it=!1,Jt=!1;if(w){const $t=T.get(w);if($t.__useDefaultFramebuffer!==void 0){ne.bindFramebuffer(Y.FRAMEBUFFER,$t.__webglFramebuffer),z.copy(w.viewport),W.copy(w.scissor),at=w.scissorTest,ne.viewport(z),ne.scissor(W),ne.setScissorTest(at),pt=-1;return}else if($t.__webglFramebuffer===void 0)Q.setupRenderTarget(w);else if($t.__hasExternalTextures)Q.rebindTextures(w,T.get(w.texture).__webglTexture,T.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const pe=w.depthTexture;if($t.__boundDepthTexture!==pe){if(pe!==null&&T.has(pe)&&(w.width!==pe.image.width||w.height!==pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(w)}}const re=w.texture;(re.isData3DTexture||re.isDataArrayTexture||re.isCompressedArrayTexture)&&(Jt=!0);const ce=T.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ce[$])?ht=ce[$][mt]:ht=ce[$],it=!0):w.samples>0&&Q.useMultisampledRTT(w)===!1?ht=T.get(w).__webglMultisampledFramebuffer:Array.isArray(ce)?ht=ce[mt]:ht=ce,z.copy(w.viewport),W.copy(w.scissor),at=w.scissorTest}else z.copy(nt).multiplyScalar(At).floor(),W.copy(lt).multiplyScalar(At).floor(),at=Gt;if(mt!==0&&(ht=Sa),ne.bindFramebuffer(Y.FRAMEBUFFER,ht)&&ne.drawBuffers(w,ht),ne.viewport(z),ne.scissor(W),ne.setScissorTest(at),it){const $t=T.get(w.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+$,$t.__webglTexture,mt)}else if(Jt){const $t=$;for(let re=0;re<w.textures.length;re++){const ce=T.get(w.textures[re]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+re,ce.__webglTexture,mt,$t)}}else if(w!==null&&mt!==0){const $t=T.get(w.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,$t.__webglTexture,mt)}pt=-1},this.readRenderTargetPixels=function(w,$,mt,ht,it,Jt,ie,$t=0){if(!(w&&w.isWebGLRenderTarget)){en("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let re=T.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ie!==void 0&&(re=re[ie]),re){ne.bindFramebuffer(Y.FRAMEBUFFER,re);try{const ce=w.textures[$t],pe=ce.format,se=ce.type;if(!je.textureFormatReadable(pe)){en("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(se)){en("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=w.width-ht&&mt>=0&&mt<=w.height-it&&(w.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+$t),Y.readPixels($,mt,ht,it,Ut.convert(pe),Ut.convert(se),Jt))}finally{const ce=rt!==null?T.get(rt).__webglFramebuffer:null;ne.bindFramebuffer(Y.FRAMEBUFFER,ce)}}},this.readRenderTargetPixelsAsync=async function(w,$,mt,ht,it,Jt,ie,$t=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let re=T.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ie!==void 0&&(re=re[ie]),re)if($>=0&&$<=w.width-ht&&mt>=0&&mt<=w.height-it){ne.bindFramebuffer(Y.FRAMEBUFFER,re);const ce=w.textures[$t],pe=ce.format,se=ce.type;if(!je.textureFormatReadable(pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ge=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,ge),Y.bufferData(Y.PIXEL_PACK_BUFFER,Jt.byteLength,Y.STREAM_READ),w.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+$t),Y.readPixels($,mt,ht,it,Ut.convert(pe),Ut.convert(se),0);const Ze=rt!==null?T.get(rt).__webglFramebuffer:null;ne.bindFramebuffer(Y.FRAMEBUFFER,Ze);const rn=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await XS(Y,rn,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,ge),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Jt),Y.deleteBuffer(ge),Y.deleteSync(rn),Jt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,$=null,mt=0){const ht=Math.pow(2,-mt),it=Math.floor(w.image.width*ht),Jt=Math.floor(w.image.height*ht),ie=$!==null?$.x:0,$t=$!==null?$.y:0;Q.setTexture2D(w,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,mt,0,0,ie,$t,it,Jt),ne.unbindTexture()};const $i=Y.createFramebuffer(),mi=Y.createFramebuffer();this.copyTextureToTexture=function(w,$,mt=null,ht=null,it=0,Jt=null){Jt===null&&(it!==0?(ec("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Jt=it,it=0):Jt=0);let ie,$t,re,ce,pe,se,ge,Ze,rn;const sn=w.isCompressedTexture?w.mipmaps[Jt]:w.image;if(mt!==null)ie=mt.max.x-mt.min.x,$t=mt.max.y-mt.min.y,re=mt.isBox3?mt.max.z-mt.min.z:1,ce=mt.min.x,pe=mt.min.y,se=mt.isBox3?mt.min.z:0;else{const Dn=Math.pow(2,-it);ie=Math.floor(sn.width*Dn),$t=Math.floor(sn.height*Dn),w.isDataArrayTexture?re=sn.depth:w.isData3DTexture?re=Math.floor(sn.depth*Dn):re=1,ce=0,pe=0,se=0}ht!==null?(ge=ht.x,Ze=ht.y,rn=ht.z):(ge=0,Ze=0,rn=0);const Je=Ut.convert($.format),fe=Ut.convert($.type);let Ce;$.isData3DTexture?(Q.setTexture3D($,0),Ce=Y.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(Q.setTexture2DArray($,0),Ce=Y.TEXTURE_2D_ARRAY):(Q.setTexture2D($,0),Ce=Y.TEXTURE_2D),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,$.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,$.unpackAlignment);const Me=Y.getParameter(Y.UNPACK_ROW_LENGTH),zn=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),ta=Y.getParameter(Y.UNPACK_SKIP_PIXELS),wn=Y.getParameter(Y.UNPACK_SKIP_ROWS),Mi=Y.getParameter(Y.UNPACK_SKIP_IMAGES);Y.pixelStorei(Y.UNPACK_ROW_LENGTH,sn.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,sn.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,ce),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,pe),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,se);const Ke=w.isDataArrayTexture||w.isData3DTexture,Hn=$.isDataArrayTexture||$.isData3DTexture;if(w.isDepthTexture){const Dn=T.get(w),Yn=T.get($),On=T.get(Dn.__renderTarget),_r=T.get(Yn.__renderTarget);ne.bindFramebuffer(Y.READ_FRAMEBUFFER,On.__webglFramebuffer),ne.bindFramebuffer(Y.DRAW_FRAMEBUFFER,_r.__webglFramebuffer);for(let bi=0;bi<re;bi++)Ke&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,T.get(w).__webglTexture,it,se+bi),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,T.get($).__webglTexture,Jt,rn+bi)),Y.blitFramebuffer(ce,pe,ie,$t,ge,Ze,ie,$t,Y.DEPTH_BUFFER_BIT,Y.NEAREST);ne.bindFramebuffer(Y.READ_FRAMEBUFFER,null),ne.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(it!==0||w.isRenderTargetTexture||T.has(w)){const Dn=T.get(w),Yn=T.get($);ne.bindFramebuffer(Y.READ_FRAMEBUFFER,$i),ne.bindFramebuffer(Y.DRAW_FRAMEBUFFER,mi);for(let On=0;On<re;On++)Ke?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Dn.__webglTexture,it,se+On):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Dn.__webglTexture,it),Hn?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Yn.__webglTexture,Jt,rn+On):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Yn.__webglTexture,Jt),it!==0?Y.blitFramebuffer(ce,pe,ie,$t,ge,Ze,ie,$t,Y.COLOR_BUFFER_BIT,Y.NEAREST):Hn?Y.copyTexSubImage3D(Ce,Jt,ge,Ze,rn+On,ce,pe,ie,$t):Y.copyTexSubImage2D(Ce,Jt,ge,Ze,ce,pe,ie,$t);ne.bindFramebuffer(Y.READ_FRAMEBUFFER,null),ne.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Hn?w.isDataTexture||w.isData3DTexture?Y.texSubImage3D(Ce,Jt,ge,Ze,rn,ie,$t,re,Je,fe,sn.data):$.isCompressedArrayTexture?Y.compressedTexSubImage3D(Ce,Jt,ge,Ze,rn,ie,$t,re,Je,sn.data):Y.texSubImage3D(Ce,Jt,ge,Ze,rn,ie,$t,re,Je,fe,sn):w.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Jt,ge,Ze,ie,$t,Je,fe,sn.data):w.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Jt,ge,Ze,sn.width,sn.height,Je,sn.data):Y.texSubImage2D(Y.TEXTURE_2D,Jt,ge,Ze,ie,$t,Je,fe,sn);Y.pixelStorei(Y.UNPACK_ROW_LENGTH,Me),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,zn),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,ta),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,wn),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,Mi),Jt===0&&$.generateMipmaps&&Y.generateMipmap(Ce),ne.unbindTexture()},this.initRenderTarget=function(w){T.get(w).__webglFramebuffer===void 0&&Q.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Q.setTextureCube(w,0):w.isData3DTexture?Q.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Q.setTexture2DArray(w,0):Q.setTexture2D(w,0),ne.unbindTexture()},this.resetState=function(){k=0,J=0,rt=null,ne.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return La}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(t),i.unpackColorSpace=Qe._getUnpackColorSpace()}}function NA({onFileLoaded:o,disabled:t}){const[i,r]=Le.useState(!1),l=Le.useRef(null),c=Le.useCallback(g=>{if(!g.name.toLowerCase().endsWith(".stl")){alert("Please upload an STL file.");return}const x=new FileReader;x.onload=()=>{x.result instanceof ArrayBuffer&&o(x.result,g.name)},x.readAsArrayBuffer(g)},[o]),h=Le.useCallback(g=>{if(g.preventDefault(),r(!1),t)return;const x=g.dataTransfer.files[0];x&&c(x)},[c,t]),d=Le.useCallback(g=>{g.preventDefault(),t||r(!0)},[t]),m=Le.useCallback(()=>{r(!1)},[]),p=Le.useCallback(()=>{t||l.current?.click()},[t]),_=Le.useCallback(g=>{const x=g.target.files?.[0];x&&c(x),g.target.value=""},[c]);return Wt.jsxs("div",{onClick:p,onDrop:h,onDragOver:d,onDragLeave:m,className:`
        border-2 border-dashed rounded-xl p-6 text-center cursor-pointer
        transition-all duration-200 select-none
        ${i?"border-blue-400 bg-blue-950/30 text-blue-300":t?"border-gray-700 bg-gray-900/30 text-gray-600 cursor-not-allowed":"border-gray-600 bg-gray-900/50 text-gray-400 hover:border-gray-500 hover:bg-gray-900/70"}
      `,children:[Wt.jsx("input",{ref:l,type:"file",accept:".stl",onChange:_,className:"hidden"}),Wt.jsxs("div",{className:"flex items-center justify-center gap-3",children:[Wt.jsx("svg",{className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:Wt.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"})}),Wt.jsx("span",{className:"text-sm font-medium",children:"Drop STL file here or click to upload"})]})]})}const Wv={type:"change"},Em={type:"start"},Lx={type:"end"},ku=new xm,Yv=new Zr,OA=Math.cos(70*YS.DEG2RAD),jn=new et,Ni=2*Math.PI,gn={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},lp=1e-6;class PA extends FM{constructor(t,i=null){super(t,i),this.state=gn.NONE,this.target=new et,this.cursor=new et,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Bo.ROTATE,MIDDLE:Bo.DOLLY,RIGHT:Bo.PAN},this.touches={ONE:Io.ROTATE,TWO:Io.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new et,this._lastQuaternion=new Bs,this._lastTargetPosition=new et,this._quat=new Bs().setFromUnitVectors(t.up,new et(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new xv,this._sphericalDelta=new xv,this._scale=1,this._panOffset=new et,this._rotateStart=new we,this._rotateEnd=new we,this._rotateDelta=new we,this._panStart=new we,this._panEnd=new we,this._panDelta=new we,this._dollyStart=new we,this._dollyEnd=new we,this._dollyDelta=new we,this._dollyDirection=new et,this._mouse=new we,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=IA.bind(this),this._onPointerDown=FA.bind(this),this._onPointerUp=BA.bind(this),this._onContextMenu=WA.bind(this),this._onMouseWheel=GA.bind(this),this._onKeyDown=VA.bind(this),this._onTouchStart=kA.bind(this),this._onTouchMove=XA.bind(this),this._onMouseDown=zA.bind(this),this._onMouseMove=HA.bind(this),this._interceptControlDown=YA.bind(this),this._interceptControlUp=qA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Wv),this.update(),this.state=gn.NONE}update(t=null){const i=this.object.position;jn.copy(i).sub(this.target),jn.applyQuaternion(this._quat),this._spherical.setFromVector3(jn),this.autoRotate&&this.state===gn.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(r)&&isFinite(l)&&(r<-Math.PI?r+=Ni:r>Math.PI&&(r-=Ni),l<-Math.PI?l+=Ni:l>Math.PI&&(l-=Ni),r<=l?this._spherical.theta=Math.max(r,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+l)/2?Math.max(r,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(jn.setFromSpherical(this._spherical),jn.applyQuaternion(this._quatInverse),i.copy(this.target).add(jn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=jn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new et(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new et(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=jn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(ku.origin.copy(this.object.position),ku.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ku.direction))<OA?this.object.lookAt(this.target):(Yv.setFromNormalAndCoplanarPoint(this.object.up,this.target),ku.intersectPlane(Yv,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>lp||8*(1-this._lastQuaternion.dot(this.object.quaternion))>lp||this._lastTargetPosition.distanceToSquared(this.target)>lp?(this.dispatchEvent(Wv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ni/60*this.autoRotateSpeed*t:Ni/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){jn.setFromMatrixColumn(i,0),jn.multiplyScalar(-t),this._panOffset.add(jn)}_panUp(t,i){this.screenSpacePanning===!0?jn.setFromMatrixColumn(i,1):(jn.setFromMatrixColumn(i,0),jn.crossVectors(this.object.up,jn)),jn.multiplyScalar(t),this._panOffset.add(jn)}_pan(t,i){const r=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;jn.copy(l).sub(this.target);let c=jn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/r.clientHeight,this.object.matrix),this._panUp(2*i*c/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),l=t-r.left,c=i-r.top,h=r.width,d=r.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Ni*this._rotateDelta.x/i.clientHeight),this._rotateUp(Ni*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(r,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(r,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),r=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(r*r+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const r=this._getSecondPointerPosition(t),l=.5*(t.pageX+r.x),c=.5*(t.pageY+r.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Ni*this._rotateDelta.x/i.clientHeight),this._rotateUp(Ni*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(r,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),r=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(r*r+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new we,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,r={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function FA(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function IA(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function BA(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Lx),this.state=gn.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function zA(o){let t;switch(o.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Bo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=gn.DOLLY;break;case Bo.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=gn.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=gn.ROTATE}break;case Bo.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=gn.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=gn.PAN}break;default:this.state=gn.NONE}this.state!==gn.NONE&&this.dispatchEvent(Em)}function HA(o){switch(this.state){case gn.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case gn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case gn.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function GA(o){this.enabled===!1||this.enableZoom===!1||this.state!==gn.NONE||(o.preventDefault(),this.dispatchEvent(Em),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(Lx))}function VA(o){this.enabled!==!1&&this._handleKeyDown(o)}function kA(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case Io.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=gn.TOUCH_ROTATE;break;case Io.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=gn.TOUCH_PAN;break;default:this.state=gn.NONE}break;case 2:switch(this.touches.TWO){case Io.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=gn.TOUCH_DOLLY_PAN;break;case Io.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=gn.TOUCH_DOLLY_ROTATE;break;default:this.state=gn.NONE}break;default:this.state=gn.NONE}this.state!==gn.NONE&&this.dispatchEvent(Em)}function XA(o){switch(this._trackPointer(o),this.state){case gn.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case gn.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case gn.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case gn.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=gn.NONE}}function WA(o){this.enabled!==!1&&o.preventDefault()}function YA(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function qA(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const be=42,sm=.25,cp=be-2*sm,Ql=.8,Nx=1.8,Jl=2.15,Tm=Ql+Nx+Jl,Ox=2.25,qv=Tm+Ox,Ju=3.75,jA=6.5,ZA=2.4,KA=4.8,QA=3,JA=6,jv=2;function up(o,t,i="inside"){if(i==="outside")return{gridX:Math.max(1,Math.ceil(o/be)),gridY:Math.max(1,Math.ceil(t/be))};const r=o/be,l=t/be,c=Math.floor(r),h=Math.floor(l),d=(r-c)*be/2,m=(l-h)*be/2,p=d>0&&d<=jv?c+1:Math.max(1,c),_=m>0&&m<=jv?h+1:Math.max(1,h);return{gridX:p,gridY:_}}const $A=16;function $u(o,t,i,r=$A){const l=[],c=o/2,h=t/2,d=Math.min(i,c,h);for(let m=0;m<4;m++){const p=m===0||m===3?c-d:-(c-d),_=m===0||m===1?h-d:-(h-d),g=m*Math.PI/2;for(let x=0;x<=r;x++){const b=g+x*Math.PI/(2*r);l.push([p+d*Math.cos(b),_+d*Math.sin(b)])}}return l}function tR(o){const{Manifold:t,CrossSection:i}=o,r=cp-2*(Ql+Jl),l=cp-2*Jl,c=cp,h=Ql+Jl,d=Jl,m=Math.max(.1,Ju-h),p=Math.max(.1,Ju-d),_=Ju,g=Ql,x=Ql+Nx,b=Tm,A=.01,R=new i([$u(r,r,m)]),E=new i([$u(l,l,p)]),y=new i([$u(c,c,_)]),F=R.extrude(A),N=E.extrude(A).translate([0,0,g]),P=E.extrude(A).translate([0,0,x]),H=y.extrude(A).translate([0,0,b]),O=t.hull([F,N]),B=E.extrude(x-g).translate([0,0,g]),j=t.hull([P,H]);R.delete(),E.delete(),y.delete(),F.delete(),N.delete(),P.delete(),H.delete();const C=t.union([O,B,j]);return O.delete(),B.delete(),j.delete(),C}async function eR(o,t){const{Manifold:i}=o;o.setCircularSegments(32);const r=tR(o),l=[];for(let x=0;x<t.gridX;x++)for(let b=0;b<t.gridY;b++){const A=t.offsetX+(x-(t.gridX-1)/2)*be,R=t.offsetY+(b-(t.gridY-1)/2)*be;let E=r.translate([A,R,0]);const y=KA,F=[[A-be/2+y,R-be/2+y],[A+be/2-y,R-be/2+y],[A-be/2+y,R+be/2-y],[A+be/2-y,R+be/2-y]];if(t.magnets){const N=[],P=jA/2;for(const[O,B]of F){const j=i.cylinder(ZA,P,P,24).translate([O,B,0]);N.push(j)}const H=i.difference([E,...N]);E.delete(),E=H;for(const O of N)O.delete()}if(t.screws){const N=[],P=QA/2;for(const[O,B]of F){const j=i.cylinder(JA,P,P,16).translate([O,B,0]);N.push(j)}const H=i.difference([E,...N]);E.delete(),E=H;for(const O of N)O.delete()}l.push(E)}r.delete();let c;if(l.length===1)c=l[0];else{c=i.union(l);for(const x of l)x.delete()}const h=t.gridX*be-2*sm,d=t.gridY*be-2*sm,{CrossSection:m}=o,p=new m([$u(h,d,Ju)]),_=p.extrude(Ox).translate([t.offsetX,t.offsetY,Tm]);p.delete();const g=i.union([c,_]);return c.delete(),_.delete(),g}function nR(o,t){const{Mesh:i}=t,r=o.getAttribute("position"),l=o.getIndex();let c,h;if(l){const m=r.array;c=new Float32Array(m.length),c.set(m),h=new Uint32Array(l.array)}else{const m=r.array,p=r.count;if(p%3!==0)throw new Error("Invalid geometry: vertex count is not divisible by 3");c=new Float32Array(m.length),c.set(m),h=new Uint32Array(p);for(let _=0;_<p;_++)h[_]=_}const d=new i({numProp:3,vertProperties:c,triVerts:h});return d.merge(),d}function Zv(o){const t=o.vertProperties,i=o.triVerts,r=o.numProp,l=t.length/r,c=new Float32Array(l*3);for(let h=0;h<l;h++)c[h*3]=t[h*r],c[h*3+1]=t[h*r+1],c[h*3+2]=t[h*r+2];return{positions:c,indices:new Uint32Array(i)}}function iR({originalGeometry:o,baseGeometry:t,combinedGeometry:i,gridX:r,gridY:l,offsetX:c,offsetY:h}){const d=Le.useRef(null),m=Le.useRef(null);Le.useEffect(()=>{if(!d.current)return;const g=d.current,x=new LA({antialias:!0,alpha:!0});x.setPixelRatio(window.devicePixelRatio),x.setSize(g.clientWidth,g.clientHeight),x.setClearColor(657935,1),x.toneMapping=cm,x.toneMappingExposure=1.2,g.appendChild(x.domElement);const b=new gM,A=new ua(45,g.clientWidth/g.clientHeight,.1,1e4);A.position.set(100,100,100);const R=new PA(A,x.domElement);R.enableDamping=!0,R.dampingFactor=.1,R.target.set(0,0,0);const E=new OM(16777215,.4);b.add(E);const y=new vv(16777215,1);y.position.set(100,200,100),b.add(y);const F=new vv(8947967,.5);F.position.set(-100,-50,-100),b.add(F);const N=new yv(200,20,3355443,2236962);N.rotation.x=Math.PI/2,b.add(N);const P={renderer:x,scene:b,camera:A,controls:R,originalMesh:null,baseMesh:null,combinedMesh:null,gridOverlay:null,bgGrid:N,animId:0};m.current=P;const H=()=>{P.animId=requestAnimationFrame(H),R.update(),x.render(b,A)};H();const O=()=>{if(!g)return;const j=g.clientWidth,C=g.clientHeight;A.aspect=j/C,A.updateProjectionMatrix(),x.setSize(j,C)},B=new ResizeObserver(O);return B.observe(g),()=>{cancelAnimationFrame(P.animId),B.disconnect(),R.dispose(),x.dispose(),g.removeChild(x.domElement),m.current=null}},[]);const p=Le.useCallback(g=>{const x=m.current;if(!x)return;const b=new Yo;for(const O of g)b.expandByObject(O);if(b.isEmpty())return;const A=b.getCenter(new et),R=b.getSize(new et),E=Math.max(R.x,R.y,R.z),y=x.camera.fov*(Math.PI/180),F=E/2/Math.tan(y/2)*1.5;x.controls.target.copy(A),x.camera.position.set(A.x+F*.6,A.y+F*.6,A.z+F*.6),x.camera.lookAt(A),x.controls.update(),x.bgGrid&&(x.scene.remove(x.bgGrid),x.bgGrid.dispose());const N=Math.ceil(E*2/42)*42,P=Math.ceil(N/42),H=new yv(N,P,4473924,2631720);H.rotation.x=Math.PI/2,H.position.set(A.x,A.y,0),x.scene.add(H),x.bgGrid=H},[]),_=Le.useCallback((g,x,b,A)=>{const R=new Zl;for(let y=0;y<g;y++)for(let F=0;F<x;F++){const N=b+(y-(g-1)/2)*be,P=A+(F-(x-1)/2)*be,H=new rc(be-1,be-1),O=new ym({color:2280550,transparent:!0,opacity:.12,side:ji,depthWrite:!1}),B=new Oi(H,O);B.position.set(N,P,.05),R.add(B);const j=[new et(N-be/2,P-be/2,.1),new et(N+be/2,P-be/2,.1),new et(N+be/2,P+be/2,.1),new et(N-be/2,P+be/2,.1),new et(N-be/2,P-be/2,.1)],C=new li().setFromPoints(j),L=new lf({color:2280550,transparent:!0,opacity:.5}),k=new Ku(C,L);R.add(k)}const E=1;for(let y=-E;y<g+E;y++)for(let F=-E;F<x+E;F++){if(y>=0&&y<g&&F>=0&&F<x)continue;const N=b+(y-(g-1)/2)*be,P=A+(F-(x-1)/2)*be,H=[new et(N-be/2,P-be/2,.05),new et(N+be/2,P-be/2,.05),new et(N+be/2,P+be/2,.05),new et(N-be/2,P+be/2,.05),new et(N-be/2,P-be/2,.05)],O=new li().setFromPoints(H),B=new RM({color:8947848,transparent:!0,opacity:.2,dashSize:3,gapSize:3}),j=new Ku(O,B);j.computeLineDistances(),R.add(j)}return R},[]);return Le.useEffect(()=>{const g=m.current;if(!g||(g.gridOverlay&&(g.scene.remove(g.gridOverlay),g.gridOverlay.traverse(b=>{(b instanceof Oi||b instanceof Ku)&&(b.geometry.dispose(),b.material instanceof Hs&&b.material.dispose())}),g.gridOverlay=null),!o&&!i))return;const x=_(r,l,c,h);g.scene.add(x),g.gridOverlay=x},[r,l,c,h,o,i,_]),Le.useEffect(()=>{const g=m.current;if(!g)return;g.originalMesh&&(g.scene.remove(g.originalMesh),g.originalMesh.geometry.dispose(),g.originalMesh.material.dispose(),g.originalMesh=null),g.baseMesh&&(g.scene.remove(g.baseMesh),g.baseMesh.geometry.dispose(),g.baseMesh.material.dispose(),g.baseMesh=null),g.combinedMesh&&(g.scene.remove(g.combinedMesh),g.combinedMesh.geometry.dispose(),g.combinedMesh.material.dispose(),g.combinedMesh=null);const x=[];if(i){const b=new tp({color:4491519,metalness:.1,roughness:.4,side:ji}),A=new Oi(i,b);g.scene.add(A),g.combinedMesh=A,x.push(A)}else{if(o){const b=new tp({color:8956620,metalness:.1,roughness:.4,side:ji}),A=new Oi(o,b);g.scene.add(A),g.originalMesh=A,x.push(A)}if(t){const b=new tp({color:4508774,metalness:.1,roughness:.4,transparent:!0,opacity:.7,side:ji}),A=new Oi(t,b);g.scene.add(A),g.baseMesh=A,x.push(A)}}x.length>0&&p(x)},[o,t,i,p]),Wt.jsx("div",{ref:d,className:"w-full h-full min-h-[400px] rounded-xl overflow-hidden bg-gray-950"})}const fp={inside:{label:"Fit Inside",desc:"Max grid units within model footprint"},outside:{label:"Fit Outside",desc:"Grid units encompass entire model"},custom:{label:"Custom",desc:"Manual grid count"}},aR=[{axis:"-z",label:"⊥",title:"Bottom (-Z) — default"},{axis:"+z",label:"⊤",title:"Top (+Z)"},{axis:"-x",label:"◀",title:"Left (-X)"},{axis:"+x",label:"▶",title:"Right (+X)"},{axis:"-y",label:"▼",title:"Front (-Y)"},{axis:"+y",label:"▲",title:"Back (+Y)"}];function rR({gridX:o,gridY:t,offsetX:i,offsetY:r,magnets:l,screws:c,fitMode:h,orientation:d,modelDims:m,hasModel:p,hasCombined:_,isProcessing:g,onGridXChange:x,onGridYChange:b,onOffsetXChange:A,onOffsetYChange:R,onMagnetsChange:E,onScrewsChange:y,onFitModeChange:F,onOrientationChange:N,onGenerate:P,onDownload:H}){return Wt.jsxs("div",{className:"flex flex-col gap-4",children:[Wt.jsx("h2",{className:"text-sm font-semibold text-gray-400 uppercase tracking-wider",children:"Controls"}),m&&Wt.jsxs("div",{className:"bg-gray-900/50 rounded-lg p-3 text-xs text-gray-400 space-y-1",children:[Wt.jsx("div",{className:"font-medium text-gray-300 mb-1",children:"Model Size"}),Wt.jsxs("div",{children:["X: ",m.width.toFixed(1)," mm"]}),Wt.jsxs("div",{children:["Y: ",m.depth.toFixed(1)," mm"]}),Wt.jsxs("div",{children:["Z: ",m.height.toFixed(1)," mm"]})]}),p&&Wt.jsxs("div",{children:[Wt.jsx("label",{className:"block text-xs font-medium text-gray-400 mb-2",children:"Bottom Face"}),Wt.jsx("div",{className:"grid grid-cols-3 gap-1",children:aR.map(O=>Wt.jsx("button",{title:O.title,onClick:()=>N(O.axis),disabled:g,className:`
                  py-1.5 px-2 rounded text-sm font-medium transition-all
                  ${d===O.axis?"bg-blue-600 text-white":"bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200"}
                  disabled:opacity-50 disabled:cursor-not-allowed
                `,children:O.label},O.axis))}),Wt.jsx("p",{className:"text-[10px] text-gray-600 mt-1",children:"Rotate model so a different face becomes the bottom"})]}),p&&Wt.jsxs("div",{children:[Wt.jsx("label",{className:"block text-xs font-medium text-gray-400 mb-2",children:"Fitting Mode"}),Wt.jsx("div",{className:"flex flex-col gap-1",children:Object.keys(fp).map(O=>Wt.jsxs("button",{onClick:()=>F(O),disabled:g,className:`
                  text-left px-3 py-2 rounded-lg text-xs transition-all
                  ${h===O?"bg-blue-600/20 border border-blue-500/50 text-blue-300":"bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:bg-gray-700/50 hover:text-gray-300"}
                  disabled:opacity-50 disabled:cursor-not-allowed
                `,children:[Wt.jsx("div",{className:"font-medium",children:fp[O].label}),Wt.jsx("div",{className:"text-[10px] opacity-70 mt-0.5",children:fp[O].desc})]},O))})]}),Wt.jsxs("div",{className:"space-y-3",children:[Wt.jsxs("div",{children:[Wt.jsx("label",{className:"block text-xs font-medium text-gray-400 mb-1",children:"Grid Units X"}),Wt.jsx("input",{type:"number",min:1,max:20,value:o,onChange:O=>x(Math.max(1,parseInt(O.target.value)||1)),disabled:!p||g||h!=="custom",className:`w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm
              text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
              disabled:opacity-50 disabled:cursor-not-allowed`})]}),Wt.jsxs("div",{children:[Wt.jsx("label",{className:"block text-xs font-medium text-gray-400 mb-1",children:"Grid Units Y"}),Wt.jsx("input",{type:"number",min:1,max:20,value:t,onChange:O=>b(Math.max(1,parseInt(O.target.value)||1)),disabled:!p||g||h!=="custom",className:`w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm
              text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
              disabled:opacity-50 disabled:cursor-not-allowed`})]}),Wt.jsxs("div",{className:"text-xs text-gray-500",children:["Base size: ",(o*42).toFixed(0)," × ",(t*42).toFixed(0)," mm"]}),Wt.jsxs("div",{children:[Wt.jsxs("label",{className:"block text-xs font-medium text-gray-400 mb-1",children:["Offset X: ",i.toFixed(1)," mm"]}),Wt.jsx("input",{type:"range",min:-21,max:21,step:.5,value:i,onChange:O=>A(parseFloat(O.target.value)),disabled:!p||g,className:`w-full h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer
              accent-blue-500 disabled:opacity-50 disabled:cursor-not-allowed`})]}),Wt.jsxs("div",{children:[Wt.jsxs("label",{className:"block text-xs font-medium text-gray-400 mb-1",children:["Offset Y: ",r.toFixed(1)," mm"]}),Wt.jsx("input",{type:"range",min:-21,max:21,step:.5,value:r,onChange:O=>R(parseFloat(O.target.value)),disabled:!p||g,className:`w-full h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer
              accent-blue-500 disabled:opacity-50 disabled:cursor-not-allowed`})]}),Wt.jsxs("div",{className:"flex items-center gap-2",children:[Wt.jsx("input",{type:"checkbox",id:"magnets",checked:l,onChange:O=>E(O.target.checked),disabled:!p||g,className:`w-4 h-4 rounded bg-gray-800 border-gray-600 text-blue-500
              focus:ring-blue-500 focus:ring-offset-gray-900
              disabled:opacity-50 disabled:cursor-not-allowed`}),Wt.jsx("label",{htmlFor:"magnets",className:"text-sm text-gray-300",children:"Magnet holes (6.5mm)"})]}),Wt.jsxs("div",{className:"flex items-center gap-2",children:[Wt.jsx("input",{type:"checkbox",id:"screws",checked:c,onChange:O=>y(O.target.checked),disabled:!p||g,className:`w-4 h-4 rounded bg-gray-800 border-gray-600 text-blue-500
              focus:ring-blue-500 focus:ring-offset-gray-900
              disabled:opacity-50 disabled:cursor-not-allowed`}),Wt.jsx("label",{htmlFor:"screws",className:"text-sm text-gray-300",children:"Screw holes (M3)"})]})]}),Wt.jsxs("div",{className:"flex flex-col gap-2 pt-2",children:[Wt.jsx("button",{onClick:P,disabled:!p||g,className:`w-full py-2.5 px-4 rounded-lg font-medium text-sm transition-all
            bg-blue-600 hover:bg-blue-500 text-white
            disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed
            flex items-center justify-center gap-2`,children:g?Wt.jsxs(Wt.Fragment,{children:[Wt.jsxs("svg",{className:"animate-spin w-4 h-4",fill:"none",viewBox:"0 0 24 24",children:[Wt.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),Wt.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Processing..."]}):Wt.jsxs(Wt.Fragment,{children:[Wt.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:Wt.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"})}),"Generate Base"]})}),Wt.jsxs("button",{onClick:H,disabled:!_||g,className:`w-full py-2.5 px-4 rounded-lg font-medium text-sm transition-all
            bg-emerald-600 hover:bg-emerald-500 text-white
            disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed
            flex items-center justify-center gap-2`,children:[Wt.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:Wt.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"})}),"Download STL"]})]}),!_&&p&&Wt.jsx("p",{className:"text-xs text-yellow-400/70",children:"Adjust settings then click Generate to create the combined mesh."})]})}class sR extends Mm{constructor(t){super(t)}load(t,i,r,l){const c=this,h=new UM(this.manager);h.setPath(this.path),h.setResponseType("arraybuffer"),h.setRequestHeader(this.requestHeader),h.setWithCredentials(this.withCredentials),h.load(t,function(d){try{i(c.parse(d))}catch(m){l?l(m):console.error(m),c.manager.itemError(t)}},r,l)}parse(t){function i(p){const _=new DataView(p),g=32/8*3+32/8*3*3+16/8,x=_.getUint32(80,!0);if(80+32/8+x*g===_.byteLength)return!0;const A=[115,111,108,105,100];for(let R=0;R<5;R++)if(r(A,_,R))return!1;return!0}function r(p,_,g){for(let x=0,b=p.length;x<b;x++)if(p[x]!==_.getUint8(g+x))return!1;return!0}function l(p){const _=new DataView(p),g=_.getUint32(80,!0);let x,b,A,R=!1,E,y,F,N,P;for(let k=0;k<70;k++)_.getUint32(k,!1)==1129270351&&_.getUint8(k+4)==82&&_.getUint8(k+5)==61&&(R=!0,E=new Float32Array(g*3*3),y=_.getUint8(k+6)/255,F=_.getUint8(k+7)/255,N=_.getUint8(k+8)/255,P=_.getUint8(k+9)/255);const H=84,O=50,B=new li,j=new Float32Array(g*3*3),C=new Float32Array(g*3*3),L=new Ie;for(let k=0;k<g;k++){const J=H+k*O,rt=_.getFloat32(J,!0),pt=_.getFloat32(J+4,!0),yt=_.getFloat32(J+8,!0);if(R){const z=_.getUint16(J+48,!0);(z&32768)===0?(x=(z&31)/31,b=(z>>5&31)/31,A=(z>>10&31)/31):(x=y,b=F,A=N)}for(let z=1;z<=3;z++){const W=J+z*12,at=k*3*3+(z-1)*3;j[at]=_.getFloat32(W,!0),j[at+1]=_.getFloat32(W+4,!0),j[at+2]=_.getFloat32(W+8,!0),C[at]=rt,C[at+1]=pt,C[at+2]=yt,R&&(L.setRGB(x,b,A,qi),E[at]=L.r,E[at+1]=L.g,E[at+2]=L.b)}}return B.setAttribute("position",new si(j,3)),B.setAttribute("normal",new si(C,3)),R&&(B.setAttribute("color",new si(E,3)),B.hasColors=!0,B.alpha=P),B}function c(p){const _=new li,g=/solid([\s\S]*?)endsolid/g,x=/facet([\s\S]*?)endfacet/g,b=/solid\s(.+)/;let A=0;const R=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,E=new RegExp("vertex"+R+R+R,"g"),y=new RegExp("normal"+R+R+R,"g"),F=[],N=[],P=[],H=new et;let O,B=0,j=0,C=0;for(;(O=g.exec(p))!==null;){j=C;const L=O[0],k=(O=b.exec(L))!==null?O[1]:"";for(P.push(k);(O=x.exec(L))!==null;){let pt=0,yt=0;const z=O[0];for(;(O=y.exec(z))!==null;)H.x=parseFloat(O[1]),H.y=parseFloat(O[2]),H.z=parseFloat(O[3]),yt++;for(;(O=E.exec(z))!==null;)F.push(parseFloat(O[1]),parseFloat(O[2]),parseFloat(O[3])),N.push(H.x,H.y,H.z),pt++,C++;yt!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+A),pt!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+A),A++}const J=j,rt=C-j;_.userData.groupNames=P,_.addGroup(J,rt,B),B++}return _.setAttribute("position",new yi(F,3)),_.setAttribute("normal",new yi(N,3)),_}function h(p){return typeof p!="string"?new TextDecoder().decode(p):p}function d(p){if(typeof p=="string"){const _=new Uint8Array(p.length);for(let g=0;g<p.length;g++)_[g]=p.charCodeAt(g)&255;return _.buffer||_}else return p}const m=d(t);return i(m)?l(m):c(h(t))}}function oR(o){const i=new sR().parse(o);return i.computeBoundingBox(),i.computeVertexNormals(),i}function Kv(o){o.boundingBox||o.computeBoundingBox();const t=o.boundingBox;return{width:t.max.x-t.min.x,height:t.max.z-t.min.z,depth:t.max.y-t.min.y,minX:t.min.x,maxX:t.max.x,minY:t.min.y,maxY:t.max.y,minZ:t.min.z,maxZ:t.max.z,centerX:(t.min.x+t.max.x)/2,centerY:(t.min.y+t.max.y)/2,centerZ:(t.min.z+t.max.z)/2}}function lR(o,t){const i=t.length/3,r=84+i*50,l=new ArrayBuffer(r),c=new DataView(l),h="Binary STL generated by Gridfinity Base Adder";for(let m=0;m<Math.min(h.length,80);m++)c.setUint8(m,h.charCodeAt(m));c.setUint32(80,i,!0);let d=84;for(let m=0;m<i;m++){const p=t[m*3],_=t[m*3+1],g=t[m*3+2],x=o[p*3],b=o[p*3+1],A=o[p*3+2],R=o[_*3],E=o[_*3+1],y=o[_*3+2],F=o[g*3],N=o[g*3+1],P=o[g*3+2],H=R-x,O=E-b,B=y-A,j=F-x,C=N-b,L=P-A;let k=O*L-B*C,J=B*j-H*L,rt=H*C-O*j;const pt=Math.sqrt(k*k+J*J+rt*rt);pt>0&&(k/=pt,J/=pt,rt/=pt),c.setFloat32(d,k,!0),d+=4,c.setFloat32(d,J,!0),d+=4,c.setFloat32(d,rt,!0),d+=4,c.setFloat32(d,x,!0),d+=4,c.setFloat32(d,b,!0),d+=4,c.setFloat32(d,A,!0),d+=4,c.setFloat32(d,R,!0),d+=4,c.setFloat32(d,E,!0),d+=4,c.setFloat32(d,y,!0),d+=4,c.setFloat32(d,F,!0),d+=4,c.setFloat32(d,N,!0),d+=4,c.setFloat32(d,P,!0),d+=4,c.setUint16(d,0,!0),d+=2}return l}function cR(o,t){const i=new Blob([o],{type:"application/octet-stream"}),r=URL.createObjectURL(i),l=document.createElement("a");l.href=r,l.download=t,l.click(),URL.revokeObjectURL(r)}const uR="modulepreload",fR=function(o){return"/gridfinity-base-adder/"+o},Qv={},hR=function(t,i,r){let l=Promise.resolve();if(i&&i.length>0){let m=function(p){return Promise.all(p.map(_=>Promise.resolve(_).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),d=h?.nonce||h?.getAttribute("nonce");l=m(i.map(p=>{if(p=fR(p),p in Qv)return;Qv[p]=!0;const _=p.endsWith(".css"),g=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${g}`))return;const x=document.createElement("link");if(x.rel=_?"stylesheet":uR,_||(x.as="script"),x.crossOrigin="",x.href=p,d&&x.setAttribute("nonce",d),document.head.appendChild(x),_)return new Promise((b,A)=>{x.addEventListener("load",b),x.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${p}`)))})}))}function c(h){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=h,window.dispatchEvent(d),!d.defaultPrevented)throw h}return l.then(h=>{for(const d of h||[])d.status==="rejected"&&c(d.reason);return t().catch(c)})};var dR=(()=>{var o=import.meta.url;return(async function(t={}){var i,r=t,l,c,h=new Promise((v,S)=>{l=v,c=S}),d=typeof window=="object",m=typeof importScripts=="function",p=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string";if(p){const{createRequire:v}=await hR(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]);var _=v(import.meta.url)}var g=!1;r.setup=function(){if(g)return;g=!0,r.initTBB();function v(q,ot,Et=(Bt=>Bt)){if(ot)for(let Bt of ot)q.push_back(Et(Bt));return q}function S(q,ot=(Et=>Et)){const Et=[],Bt=q.size();for(let ye=0;ye<Bt;ye++)Et.push(ot(q.get(ye)));return Et}function U(q,ot=(Et=>Et)){const Et=[],Bt=q.size();for(let ye=0;ye<Bt;ye++){const Ye=q.get(ye),hn=Ye.size(),ti=[];for(let Pn=0;Pn<hn;Pn++)ti.push(ot(Ye.get(Pn)));Et.push(ti)}return Et}function V(q){return q[0].length<3&&(q=[q]),v(new r.Vector2_vec2,q,ot=>v(new r.Vector_vec2,ot,Et=>Et instanceof Array?{x:Et[0],y:Et[1]}:Et))}function st(q){for(let ot=0;ot<q.size();ot++)q.get(ot).delete();q.delete()}function vt(q){return q[0]instanceof Array?{x:q[0][0],y:q[0][1]}:typeof q[0]=="number"?{x:q[0]||0,y:q[1]||0}:q[0]}function Dt(q){return q[0]instanceof Array?{x:q[0][0],y:q[0][1],z:q[0][2]}:typeof q[0]=="number"?{x:q[0]||0,y:q[1]||0,z:q[2]||0}:q[0]}function St(q){return q=="EvenOdd"?0:q=="NonZero"?1:q=="Negative"?3:2}function Ft(q){return q=="Round"?1:q=="Miter"?2:0}const Nt=r.CrossSection;function Yt(q,ot="Positive"){if(q instanceof Nt)return q;{const Et=V(q),Bt=new Nt(Et,St(ot));return st(Et),Bt}}r.CrossSection.prototype.translate=function(...q){return this._Translate(vt(q))},r.CrossSection.prototype.scale=function(q){return typeof q=="number"?this._Scale({x:q,y:q}):this._Scale(vt([q]))},r.CrossSection.prototype.mirror=function(q){return this._Mirror(vt([q]))},r.CrossSection.prototype.warp=function(q){const ot=us(function(Bt){const ye=ne(Bt,"double"),Ye=ne(Bt+8,"double"),hn=[ye,Ye];q(hn),I(Bt,hn[0],"double"),I(Bt+8,hn[1],"double")},"vi"),Et=this._Warp(ot);return fs(ot),Et},r.CrossSection.prototype.decompose=function(){const q=this._Decompose(),ot=S(q);return q.delete(),ot},r.CrossSection.prototype.bounds=function(){const q=this._Bounds();return{min:["x","y"].map(ot=>q.min[ot]),max:["x","y"].map(ot=>q.max[ot])}},r.CrossSection.prototype.offset=function(q,ot="Round",Et=2,Bt=0){return this._Offset(q,Ft(ot),Et,Bt)},r.CrossSection.prototype.simplify=function(q=1e-6){return this._Simplify(q)},r.CrossSection.prototype.extrude=function(q,ot=0,Et=0,Bt=[1,1],ye=!1){Bt=vt([Bt]);const Ye=r._Extrude(this._ToPolygons(),q,ot,Et,Bt);return ye?Ye.translate([0,0,-q/2]):Ye},r.CrossSection.prototype.revolve=function(q=0,ot=360){return r._Revolve(this._ToPolygons(),q,ot)},r.CrossSection.prototype.add=function(q){return this._add(Yt(q))},r.CrossSection.prototype.subtract=function(q){return this._subtract(Yt(q))},r.CrossSection.prototype.intersect=function(q){return this._intersect(Yt(q))},r.CrossSection.prototype.toPolygons=function(){const q=this._ToPolygons(),ot=U(q,Et=>[Et.x,Et.y]);return q.delete(),ot},r.Manifold.prototype.smoothOut=function(q=60,ot=0){return this._SmoothOut(q,ot)},r.Manifold.prototype.warp=function(q){const ot=us(function(ye){const Ye=ne(ye,"double"),hn=ne(ye+8,"double"),ti=ne(ye+16,"double"),Pn=[Ye,hn,ti];q(Pn),I(ye,Pn[0],"double"),I(ye+8,Pn[1],"double"),I(ye+16,Pn[2],"double")},"vi"),Et=this._Warp(ot);fs(ot);const Bt=Et.status();if(Bt!=="NoError")throw new r.ManifoldError(Bt);return Et},r.Manifold.prototype.calculateNormals=function(q,ot=60){return this._CalculateNormals(q,ot)},r.Manifold.prototype.setProperties=function(q,ot){const Et=this.numProp(),Bt=us(function(Ye,hn,ti){const Pn=[];for(let En=0;En<q;++En)Pn[En]=ne(Ye+8*En,"double");const Ai=[];for(let En=0;En<3;++En)Ai[En]=ne(hn+8*En,"double");const Va=[];for(let En=0;En<Et;++En)Va[En]=ne(ti+8*En,"double");ot(Pn,Ai,Va);for(let En=0;En<q;++En)I(Ye+8*En,Pn[En],"double")},"viii"),ye=this._SetProperties(q,Bt);return fs(Bt),ye},r.Manifold.prototype.translate=function(...q){return this._Translate(Dt(q))},r.Manifold.prototype.rotate=function(q,ot,Et){return Array.isArray(q)?this._Rotate(...q):this._Rotate(q,ot||0,Et||0)},r.Manifold.prototype.scale=function(q){return typeof q=="number"?this._Scale({x:q,y:q,z:q}):this._Scale(Dt([q]))},r.Manifold.prototype.mirror=function(q){return this._Mirror(Dt([q]))},r.Manifold.prototype.trimByPlane=function(q,ot=0){return this._TrimByPlane(Dt([q]),ot)},r.Manifold.prototype.slice=function(q=0){const ot=this._Slice(q),Et=new Nt(ot,St("Positive"));return st(ot),Et},r.Manifold.prototype.project=function(){const q=this._Project(),ot=new Nt(q,St("Positive"));return st(q),ot},r.Manifold.prototype.split=function(q){const ot=this._Split(q),Et=S(ot);return ot.delete(),Et},r.Manifold.prototype.splitByPlane=function(q,ot=0){const Et=this._SplitByPlane(Dt([q]),ot),Bt=S(Et);return Et.delete(),Bt},r.Manifold.prototype.decompose=function(){const q=this._Decompose(),ot=S(q);return q.delete(),ot},r.Manifold.prototype.boundingBox=function(){const q=this._boundingBox();return{min:["x","y","z"].map(ot=>q.min[ot]),max:["x","y","z"].map(ot=>q.max[ot])}};class xe{constructor({numProp:ot=3,triVerts:Et=new Uint32Array,vertProperties:Bt=new Float32Array,mergeFromVert:ye,mergeToVert:Ye,runIndex:hn,runOriginalID:ti,faceID:Pn,halfedgeTangent:Ai,runTransform:Va}={}){this.numProp=ot,this.triVerts=Et,this.vertProperties=Bt,this.mergeFromVert=ye,this.mergeToVert=Ye,this.runIndex=hn,this.runOriginalID=ti,this.faceID=Pn,this.halfedgeTangent=Ai,this.runTransform=Va}get numTri(){return this.triVerts.length/3}get numVert(){return this.vertProperties.length/this.numProp}get numRun(){return this.runOriginalID.length}merge(){const{changed:ot,mesh:Et}=r._Merge(this);return Object.assign(this,{...Et}),ot}verts(ot){return this.triVerts.subarray(3*ot,3*(ot+1))}position(ot){return this.vertProperties.subarray(this.numProp*ot,this.numProp*ot+3)}extras(ot){return this.vertProperties.subarray(this.numProp*ot+3,this.numProp*(ot+1))}tangent(ot){return this.halfedgeTangent.subarray(4*ot,4*(ot+1))}transform(ot){const Et=new Array(16);for(const Bt of[0,1,2,3])for(const ye of[0,1,2])Et[4*Bt+ye]=this.runTransform[12*ot+3*Bt+ye];return Et[15]=1,Et}}r.Mesh=xe,r.Manifold.prototype.getMesh=function(q=-1){return new xe(this._GetMeshJS(q))},r.ManifoldError=function(ot,...Et){let Bt="Unknown error";switch(ot){case"NonFiniteVertex":Bt="Non-finite vertex";break;case"NotManifold":Bt="Not manifold";break;case"VertexOutOfBounds":Bt="Vertex index out of bounds";break;case"PropertiesWrongLength":Bt="Properties have wrong length";break;case"MissingPositionProperties":Bt="Less than three properties";break;case"MergeVectorsDifferentLengths":Bt="Merge vectors have different lengths";break;case"MergeIndexOutOfBounds":Bt="Merge index out of bounds";break;case"TransformWrongLength":Bt="Transform vector has wrong length";break;case"RunIndexWrongLength":Bt="Run index vector has wrong length";break;case"FaceIDWrongLength":Bt="Face ID vector has wrong length";case"InvalidConstruction":Bt="Manifold constructed with invalid parameters"}const ye=Error.apply(this,[Bt,...Et]);ye.name=this.name="ManifoldError",this.message=ye.message,this.stack=ye.stack,this.code=ot},r.ManifoldError.prototype=Object.create(Error.prototype,{constructor:{value:r.ManifoldError,writable:!0,configurable:!0}}),r.CrossSection=function(q,ot="Positive"){const Et=V(q),Bt=new Nt(Et,St(ot));return st(Et),Bt},r.CrossSection.ofPolygons=function(q,ot="Positive"){return new r.CrossSection(q,ot)},r.CrossSection.square=function(...q){let ot;q.length==0?ot={x:1,y:1}:typeof q[0]=="number"?ot={x:q[0],y:q[0]}:ot=vt(q);const Et=q[1]||!1;return r._Square(ot,Et)},r.CrossSection.circle=function(q,ot=0){return r._Circle(q,ot)};function We(q){return function(...ot){ot.length==1&&(ot=ot[0]);const Et=new r.Vector_crossSection;for(const ye of ot)Et.push_back(Yt(ye));const Bt=r["_crossSection"+q](Et);return Et.delete(),Bt}}r.CrossSection.compose=We("Compose"),r.CrossSection.union=We("UnionN"),r.CrossSection.difference=We("DifferenceN"),r.CrossSection.intersection=We("IntersectionN");function Cn(q,ot){v(q,ot,Et=>Et instanceof Array?{x:Et[0],y:Et[1]}:Et)}r.CrossSection.hull=function(...q){q.length==1&&(q=q[0]);let ot=new r.Vector_vec2;for(const Bt of q)if(Bt instanceof Nt)r._crossSectionCollectVertices(ot,Bt);else if(Bt instanceof Array&&Bt.length==2&&typeof Bt[0]=="number")ot.push_back({x:Bt[0],y:Bt[1]});else if(Bt.x)ot.push_back(Bt);else{const Ye=Bt[0].length==2&&typeof Bt[0][0]=="number"||Bt[0].x?[Bt]:Bt;for(const hn of Ye)Cn(ot,hn)}const Et=r._crossSectionHullPoints(ot);return ot.delete(),Et},r.CrossSection.prototype=Object.create(Nt.prototype),Object.defineProperty(r.CrossSection,Symbol.hasInstance,{get:()=>q=>q instanceof Nt});const yn=r.Manifold;r.Manifold=function(q){const ot=new yn(q),Et=ot.status();if(Et!=="NoError")throw new r.ManifoldError(Et);return ot},r.Manifold.ofMesh=function(q){return new r.Manifold(q)},r.Manifold.tetrahedron=function(){return r._Tetrahedron()},r.Manifold.cube=function(...q){let ot;q.length==0?ot={x:1,y:1,z:1}:typeof q[0]=="number"?ot={x:q[0],y:q[0],z:q[0]}:ot=Dt(q);const Et=q[1]||!1;return r._Cube(ot,Et)},r.Manifold.cylinder=function(q,ot,Et=-1,Bt=0,ye=!1){return r._Cylinder(q,ot,Et,Bt,ye)},r.Manifold.sphere=function(q,ot=0){return r._Sphere(q,ot)},r.Manifold.smooth=function(q,ot=[]){const Et=new r.Vector_smoothness;v(Et,ot);const Bt=r._Smooth(q,Et);return Et.delete(),Bt},r.Manifold.extrude=function(q,ot,Et=0,Bt=0,ye=[1,1],Ye=!1){return(q instanceof Nt?q:r.CrossSection(q,"Positive")).extrude(ot,Et,Bt,ye,Ye)},r.Manifold.revolve=function(q,ot=0,Et=360){return(q instanceof Nt?q:r.CrossSection(q,"Positive")).revolve(ot,Et)},r.Manifold.reserveIDs=function(q){return r._ReserveIDs(q)},r.Manifold.compose=function(q){const ot=new r.Vector_manifold;v(ot,q);const Et=r._manifoldCompose(ot);return ot.delete(),Et};function gi(q){return function(...ot){ot.length==1&&(ot=ot[0]);const Et=new r.Vector_manifold;for(const ye of ot)Et.push_back(ye);const Bt=r["_manifold"+q+"N"](Et);return Et.delete(),Bt}}r.Manifold.union=gi("Union"),r.Manifold.difference=gi("Difference"),r.Manifold.intersection=gi("Intersection"),r.Manifold.levelSet=function(q,ot,Et,Bt=0,ye=-1){const Ye={min:{x:ot.min[0],y:ot.min[1],z:ot.min[2]},max:{x:ot.max[0],y:ot.max[1],z:ot.max[2]}},hn=us(function(Pn){const Ai=ne(Pn,"double"),Va=ne(Pn+8,"double"),En=ne(Pn+16,"double");return q([Ai,Va,En])},"di"),ti=r._LevelSet(hn,Ye,Et,Bt,ye);return fs(hn),ti};function Bi(q,ot){v(q,ot,Et=>Et instanceof Array?{x:Et[0],y:Et[1],z:Et[2]}:Et)}r.Manifold.hull=function(...q){q.length==1&&(q=q[0]);let ot=new r.Vector_vec3;for(const Bt of q)Bt instanceof yn?r._manifoldCollectVertices(ot,Bt):Bt instanceof Array&&Bt.length==3&&typeof Bt[0]=="number"?ot.push_back({x:Bt[0],y:Bt[1],z:Bt[2]}):Bt.x?ot.push_back(Bt):Bi(ot,Bt);const Et=r._manifoldHullPoints(ot);return ot.delete(),Et},r.Manifold.prototype=Object.create(yn.prototype),Object.defineProperty(r.Manifold,Symbol.hasInstance,{get:()=>q=>q instanceof yn}),r.triangulate=function(q,ot=-1,Et=!0){const Bt=V(q),ye=S(r._Triangulate(Bt,ot,Et),Ye=>[Ye[0],Ye[1],Ye[2]]);return st(Bt),ye}};var x=Object.assign({},r),b="";function A(v){return r.locateFile?r.locateFile(v,b):b+v}var R,E;if(p){var y=_("fs"),F=_("path");b=_("url").fileURLToPath(new URL("/gridfinity-base-adder/assets/manifold-B8h_vZ5O.js",import.meta.url)),E=v=>{v=nn(v)?new URL(v):F.normalize(v);var S=y.readFileSync(v);return S},R=(v,S=!0)=>(v=nn(v)?new URL(v):F.normalize(v),new Promise((U,V)=>{y.readFile(v,S?void 0:"utf8",(st,vt)=>{st?V(st):U(S?vt.buffer:vt)})})),!r.thisProgram&&process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2)}else(d||m)&&(m?b=self.location.href:typeof document<"u"&&document.currentScript&&(b=document.currentScript.src),o&&(b=o),b.startsWith("blob:")?b="":b=b.substr(0,b.replace(/[?#].*/,"").lastIndexOf("/")+1),m&&(E=v=>{var S=new XMLHttpRequest;return S.open("GET",v,!1),S.responseType="arraybuffer",S.send(null),new Uint8Array(S.response)}),R=v=>nn(v)?new Promise((S,U)=>{var V=new XMLHttpRequest;V.open("GET",v,!0),V.responseType="arraybuffer",V.onload=()=>{(V.status==200||V.status==0&&V.response)&&U(V.response),S(V.status)},V.onerror=S,V.send(null)}):fetch(v,{credentials:"same-origin"}).then(S=>S.ok?S.arrayBuffer():Promise.reject(new Error(S.status+" : "+S.url))));r.print||console.log.bind(console);var N=r.printErr||console.error.bind(console);Object.assign(r,x),x=null,r.arguments&&r.arguments,r.thisProgram&&r.thisProgram,r.quit&&r.quit;var P;r.wasmBinary&&(P=r.wasmBinary);var H,O=!1,B,j,C,L,k,J,rt,pt;function yt(){var v=H.buffer;r.HEAP8=B=new Int8Array(v),r.HEAP16=C=new Int16Array(v),r.HEAPU8=j=new Uint8Array(v),r.HEAPU16=L=new Uint16Array(v),r.HEAP32=k=new Int32Array(v),r.HEAPU32=J=new Uint32Array(v),r.HEAPF32=rt=new Float32Array(v),r.HEAPF64=pt=new Float64Array(v)}var z=[],W=[],at=[];function Ot(){if(r.preRun)for(typeof r.preRun=="function"&&(r.preRun=[r.preRun]);r.preRun.length;)ft(r.preRun.shift());je(z)}function Lt(){je(W)}function G(){if(r.postRun)for(typeof r.postRun=="function"&&(r.postRun=[r.postRun]);r.postRun.length;)Vt(r.postRun.shift());je(at)}function ft(v){z.unshift(v)}function At(v){W.unshift(v)}function Vt(v){at.unshift(v)}var It=0,nt=null;function lt(v){It++,r.monitorRunDependencies?.(It)}function Gt(v){if(It--,r.monitorRunDependencies?.(It),It==0&&nt){var S=nt;nt=null,S()}}function jt(v){r.onAbort?.(v),v="Aborted("+v+")",N(v),O=!0,v+=". Build with -sASSERTIONS for more info.";var S=new WebAssembly.RuntimeError(v);throw c(S),S}var kt="data:application/octet-stream;base64,",Te=v=>v.startsWith(kt),nn=v=>v.startsWith("file://");function De(){if(r.locateFile){var v="manifold.wasm";return Te(v)?v:A(v)}return new URL("/gridfinity-base-adder/assets/manifold-D9yvTBHx.wasm",import.meta.url).href}var Ee;function Be(v){if(v==Ee&&P)return new Uint8Array(P);if(E)return E(v);throw"both async and sync fetching of the wasm failed"}function ve(v){return P?Promise.resolve().then(()=>Be(v)):R(v).then(S=>new Uint8Array(S),()=>Be(v))}function ln(v,S,U){return ve(v).then(V=>WebAssembly.instantiate(V,S)).then(U,V=>{N(`failed to asynchronously prepare wasm: ${V}`),jt(V)})}function Y(v,S,U,V){return!v&&typeof WebAssembly.instantiateStreaming=="function"&&!Te(S)&&!nn(S)&&!p&&typeof fetch=="function"?fetch(S,{credentials:"same-origin"}).then(st=>{var vt=WebAssembly.instantiateStreaming(st,U);return vt.then(V,function(Dt){return N(`wasm streaming compile failed: ${Dt}`),N("falling back to ArrayBuffer instantiation"),ln(S,U,V)})}):ln(S,U,V)}function vn(){return{a:_c}}function Ge(){var v=vn();function S(V,st){return Ti=V.exports,Ti=vc(Ti),H=Ti.J,yt(),rn=Ti.M,At(Ti.K),Gt(),Ti}lt();function U(V){S(V.instance)}if(r.instantiateWasm)try{return r.instantiateWasm(v,S)}catch(V){N(`Module.instantiateWasm callback failed with error: ${V}`),c(V)}return Ee||(Ee=De()),Y(P,Ee,v,U).catch(c),{}}var je=v=>{for(;v.length>0;)v.shift()(r)};function ne(v,S="i8"){switch(S.endsWith("*")&&(S="*"),S){case"i1":return B[v>>>0];case"i8":return B[v>>>0];case"i16":return C[v>>>1>>>0];case"i32":return k[v>>>2>>>0];case"i64":jt("to do getValue(i64) use WASM_BIGINT");case"float":return rt[v>>>2>>>0];case"double":return pt[v>>>3>>>0];case"*":return J[v>>>2>>>0];default:jt(`invalid type for getValue: ${S}`)}}r.noExitRuntime;function I(v,S,U="i8"){switch(U.endsWith("*")&&(U="*"),U){case"i1":B[v>>>0]=S;break;case"i8":B[v>>>0]=S;break;case"i16":C[v>>>1>>>0]=S;break;case"i32":k[v>>>2>>>0]=S;break;case"i64":jt("to do setValue(i64) use WASM_BIGINT");case"float":rt[v>>>2>>>0]=S;break;case"double":pt[v>>>3>>>0]=S;break;case"*":J[v>>>2>>>0]=S;break;default:jt(`invalid type for setValue: ${U}`)}}class T{constructor(S){this.excPtr=S,this.ptr=S-24}set_type(S){J[this.ptr+4>>>2>>>0]=S}get_type(){return J[this.ptr+4>>>2>>>0]}set_destructor(S){J[this.ptr+8>>>2>>>0]=S}get_destructor(){return J[this.ptr+8>>>2>>>0]}set_caught(S){S=S?1:0,B[this.ptr+12>>>0]=S}get_caught(){return B[this.ptr+12>>>0]!=0}set_rethrown(S){S=S?1:0,B[this.ptr+13>>>0]=S}get_rethrown(){return B[this.ptr+13>>>0]!=0}init(S,U){this.set_adjusted_ptr(0),this.set_type(S),this.set_destructor(U)}set_adjusted_ptr(S){J[this.ptr+16>>>2>>>0]=S}get_adjusted_ptr(){return J[this.ptr+16>>>2>>>0]}get_exception_ptr(){var S=hs(this.get_type());if(S)return J[this.excPtr>>>2>>>0];var U=this.get_adjusted_ptr();return U!==0?U:this.excPtr}}var Q=0;function bt(v,S,U){v>>>=0,S>>>=0,U>>>=0;var V=new T(v);throw V.init(S,U),Q=v,Q}var wt=()=>{jt("")},_t={},le=v=>{for(;v.length;){var S=v.pop(),U=v.pop();U(S)}};function Xt(v){return this.fromWireType(J[v>>>2>>>0])}var ae={},he={},Pt={},Ht,te=v=>{throw new Ht(v)},Zt=(v,S,U)=>{v.forEach(function(St){Pt[St]=S});function V(St){var Ft=U(St);Ft.length!==v.length&&te("Mismatched type converter count");for(var Nt=0;Nt<v.length;++Nt)zt(v[Nt],Ft[Nt])}var st=new Array(S.length),vt=[],Dt=0;S.forEach((St,Ft)=>{he.hasOwnProperty(St)?st[Ft]=he[St]:(vt.push(St),ae.hasOwnProperty(St)||(ae[St]=[]),ae[St].push(()=>{st[Ft]=he[St],++Dt,Dt===vt.length&&V(st)}))}),vt.length===0&&V(st)},qt=function(v){v>>>=0;var S=_t[v];delete _t[v];var U=S.rawConstructor,V=S.rawDestructor,st=S.fields,vt=st.map(Dt=>Dt.getterReturnType).concat(st.map(Dt=>Dt.setterArgumentType));Zt([v],vt,Dt=>{var St={};return st.forEach((Ft,Nt)=>{var Yt=Ft.fieldName,xe=Dt[Nt],We=Ft.getter,Cn=Ft.getterContext,yn=Dt[Nt+st.length],gi=Ft.setter,Bi=Ft.setterContext;St[Yt]={read:q=>xe.fromWireType(We(Cn,q)),write:(q,ot)=>{var Et=[];gi(Bi,q,yn.toWireType(Et,ot)),le(Et)}}}),[{name:S.name,fromWireType:Ft=>{var Nt={};for(var Yt in St)Nt[Yt]=St[Yt].read(Ft);return V(Ft),Nt},toWireType:(Ft,Nt)=>{for(var Yt in St)if(!(Yt in Nt))throw new TypeError(`Missing field: "${Yt}"`);var xe=U();for(Yt in St)St[Yt].write(xe,Nt[Yt]);return Ft!==null&&Ft.push(V,xe),xe},argPackAdvance:de,readValueFromPointer:Xt,destructorFunction:V}]})};function Re(v,S,U,V,st){}var K=()=>{for(var v=new Array(256),S=0;S<256;++S)v[S]=String.fromCharCode(S);Kt=v},Kt,Ut=v=>{for(var S="",U=v;j[U>>>0];)S+=Kt[j[U++>>>0]];return S},Qt,xt=v=>{throw new Qt(v)};function Rt(v,S,U={}){var V=S.name;if(v||xt(`type "${V}" must have a positive integer typeid pointer`),he.hasOwnProperty(v)){if(U.ignoreDuplicateRegistrations)return;xt(`Cannot register type '${V}' twice`)}if(he[v]=S,delete Pt[v],ae.hasOwnProperty(v)){var st=ae[v];delete ae[v],st.forEach(vt=>vt())}}function zt(v,S,U={}){if(!("argPackAdvance"in S))throw new TypeError("registerType registeredInstance requires argPackAdvance");return Rt(v,S,U)}var de=8;function an(v,S,U,V){v>>>=0,S>>>=0,S=Ut(S),zt(v,{name:S,fromWireType:function(st){return!!st},toWireType:function(st,vt){return vt?U:V},argPackAdvance:de,readValueFromPointer:function(st){return this.fromWireType(j[st>>>0])},destructorFunction:null})}var Xe=v=>({count:v.count,deleteScheduled:v.deleteScheduled,preservePointerOnDelete:v.preservePointerOnDelete,ptr:v.ptr,ptrType:v.ptrType,smartPtr:v.smartPtr,smartPtrType:v.smartPtrType}),Bn=v=>{function S(U){return U.$$.ptrType.registeredClass.name}xt(S(v)+" instance already deleted")},pi=!1,$r=v=>{},ts=v=>{v.smartPtr?v.smartPtrType.rawDestructor(v.smartPtr):v.ptrType.registeredClass.rawDestructor(v.ptr)},Ba=v=>{v.count.value-=1;var S=v.count.value===0;S&&ts(v)},mr=(v,S,U)=>{if(S===U)return v;if(U.baseClass===void 0)return null;var V=mr(v,S,U.baseClass);return V===null?null:U.downcast(V)},za={},es=()=>Object.keys(Qi).length,Ki=()=>{var v=[];for(var S in Qi)Qi.hasOwnProperty(S)&&v.push(Qi[S]);return v},Qn=[],bn=()=>{for(;Qn.length;){var v=Qn.pop();v.$$.deleteScheduled=!1,v.delete()}},Rn,Fi=v=>{Rn=v,Qn.length&&Rn&&Rn(bn)},gr=()=>{r.getInheritedInstanceCount=es,r.getLiveInheritedInstances=Ki,r.flushPendingDeletes=bn,r.setDelayFunction=Fi},Qi={},Gs=(v,S)=>{for(S===void 0&&xt("ptr should not be undefined");v.baseClass;)S=v.upcast(S),v=v.baseClass;return S},ns=(v,S)=>(S=Gs(v,S),Qi[S]),Ji=(v,S)=>{(!S.ptrType||!S.ptr)&&te("makeClassHandle requires ptr and ptrType");var U=!!S.smartPtrType,V=!!S.smartPtr;return U!==V&&te("Both smartPtrType and smartPtr must be specified"),S.count={value:1},Si(Object.create(v,{$$:{value:S,writable:!0}}))};function is(v){var S=this.getPointee(v);if(!S)return this.destructor(v),null;var U=ns(this.registeredClass,S);if(U!==void 0){if(U.$$.count.value===0)return U.$$.ptr=S,U.$$.smartPtr=v,U.clone();var V=U.clone();return this.destructor(v),V}function st(){return this.isSmartPointer?Ji(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:S,smartPtrType:this,smartPtr:v}):Ji(this.registeredClass.instancePrototype,{ptrType:this,ptr:v})}var vt=this.registeredClass.getActualType(S),Dt=za[vt];if(!Dt)return st.call(this);var St;this.isConst?St=Dt.constPointerType:St=Dt.pointerType;var Ft=mr(S,this.registeredClass,St.registeredClass);return Ft===null?st.call(this):this.isSmartPointer?Ji(St.registeredClass.instancePrototype,{ptrType:St,ptr:Ft,smartPtrType:this,smartPtr:v}):Ji(St.registeredClass.instancePrototype,{ptrType:St,ptr:Ft})}var Si=v=>typeof FinalizationRegistry>"u"?(Si=S=>S,v):(pi=new FinalizationRegistry(S=>{Ba(S.$$)}),Si=S=>{var U=S.$$,V=!!U.smartPtr;if(V){var st={$$:U};pi.register(S,st,S)}return S},$r=S=>pi.unregister(S),Si(v)),Sa=()=>{Object.assign($i.prototype,{isAliasOf(v){if(!(this instanceof $i)||!(v instanceof $i))return!1;var S=this.$$.ptrType.registeredClass,U=this.$$.ptr;v.$$=v.$$;for(var V=v.$$.ptrType.registeredClass,st=v.$$.ptr;S.baseClass;)U=S.upcast(U),S=S.baseClass;for(;V.baseClass;)st=V.upcast(st),V=V.baseClass;return S===V&&U===st},clone(){if(this.$$.ptr||Bn(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var v=Si(Object.create(Object.getPrototypeOf(this),{$$:{value:Xe(this.$$)}}));return v.$$.count.value+=1,v.$$.deleteScheduled=!1,v},delete(){this.$$.ptr||Bn(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&xt("Object already scheduled for deletion"),$r(this),Ba(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||Bn(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&xt("Object already scheduled for deletion"),Qn.push(this),Qn.length===1&&Rn&&Rn(bn),this.$$.deleteScheduled=!0,this}})};function $i(){}var mi=(v,S)=>Object.defineProperty(S,"name",{value:v}),w=(v,S,U)=>{if(v[S].overloadTable===void 0){var V=v[S];v[S]=function(...st){return v[S].overloadTable.hasOwnProperty(st.length)||xt(`Function '${U}' called with an invalid number of arguments (${st.length}) - expects one of (${v[S].overloadTable})!`),v[S].overloadTable[st.length].apply(this,st)},v[S].overloadTable=[],v[S].overloadTable[V.argCount]=V}},$=(v,S,U)=>{r.hasOwnProperty(v)?((U===void 0||r[v].overloadTable!==void 0&&r[v].overloadTable[U]!==void 0)&&xt(`Cannot register public name '${v}' twice`),w(r,v,v),r.hasOwnProperty(U)&&xt(`Cannot register multiple overloads of a function with the same number of arguments (${U})!`),r[v].overloadTable[U]=S):(r[v]=S,U!==void 0&&(r[v].numArguments=U))},mt=48,ht=57,it=v=>{if(v===void 0)return"_unknown";v=v.replace(/[^a-zA-Z0-9_]/g,"$");var S=v.charCodeAt(0);return S>=mt&&S<=ht?`_${v}`:v};function Jt(v,S,U,V,st,vt,Dt,St){this.name=v,this.constructor=S,this.instancePrototype=U,this.rawDestructor=V,this.baseClass=st,this.getActualType=vt,this.upcast=Dt,this.downcast=St,this.pureVirtualFunctions=[]}var ie=(v,S,U)=>{for(;S!==U;)S.upcast||xt(`Expected null or instance of ${U.name}, got an instance of ${S.name}`),v=S.upcast(v),S=S.baseClass;return v};function $t(v,S){if(S===null)return this.isReference&&xt(`null is not a valid ${this.name}`),0;S.$$||xt(`Cannot pass "${as(S)}" as a ${this.name}`),S.$$.ptr||xt(`Cannot pass deleted object as a pointer of type ${this.name}`);var U=S.$$.ptrType.registeredClass,V=ie(S.$$.ptr,U,this.registeredClass);return V}function re(v,S){var U;if(S===null)return this.isReference&&xt(`null is not a valid ${this.name}`),this.isSmartPointer?(U=this.rawConstructor(),v!==null&&v.push(this.rawDestructor,U),U):0;(!S||!S.$$)&&xt(`Cannot pass "${as(S)}" as a ${this.name}`),S.$$.ptr||xt(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&S.$$.ptrType.isConst&&xt(`Cannot convert argument of type ${S.$$.smartPtrType?S.$$.smartPtrType.name:S.$$.ptrType.name} to parameter type ${this.name}`);var V=S.$$.ptrType.registeredClass;if(U=ie(S.$$.ptr,V,this.registeredClass),this.isSmartPointer)switch(S.$$.smartPtr===void 0&&xt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:S.$$.smartPtrType===this?U=S.$$.smartPtr:xt(`Cannot convert argument of type ${S.$$.smartPtrType?S.$$.smartPtrType.name:S.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:U=S.$$.smartPtr;break;case 2:if(S.$$.smartPtrType===this)U=S.$$.smartPtr;else{var st=S.clone();U=this.rawShare(U,xn.toHandle(()=>st.delete())),v!==null&&v.push(this.rawDestructor,U)}break;default:xt("Unsupporting sharing policy")}return U}function ce(v,S){if(S===null)return this.isReference&&xt(`null is not a valid ${this.name}`),0;S.$$||xt(`Cannot pass "${as(S)}" as a ${this.name}`),S.$$.ptr||xt(`Cannot pass deleted object as a pointer of type ${this.name}`),S.$$.ptrType.isConst&&xt(`Cannot convert argument of type ${S.$$.ptrType.name} to parameter type ${this.name}`);var U=S.$$.ptrType.registeredClass,V=ie(S.$$.ptr,U,this.registeredClass);return V}var pe=()=>{Object.assign(se.prototype,{getPointee(v){return this.rawGetPointee&&(v=this.rawGetPointee(v)),v},destructor(v){this.rawDestructor?.(v)},argPackAdvance:de,readValueFromPointer:Xt,fromWireType:is})};function se(v,S,U,V,st,vt,Dt,St,Ft,Nt,Yt){this.name=v,this.registeredClass=S,this.isReference=U,this.isConst=V,this.isSmartPointer=st,this.pointeeType=vt,this.sharingPolicy=Dt,this.rawGetPointee=St,this.rawConstructor=Ft,this.rawShare=Nt,this.rawDestructor=Yt,!st&&S.baseClass===void 0?V?(this.toWireType=$t,this.destructorFunction=null):(this.toWireType=ce,this.destructorFunction=null):this.toWireType=re}var ge=(v,S,U)=>{r.hasOwnProperty(v)||te("Replacing nonexistent public symbol"),r[v].overloadTable!==void 0&&U!==void 0?r[v].overloadTable[U]=S:(r[v]=S,r[v].argCount=U)},Ze=(v,S,U)=>{v=v.replace(/p/g,"i");var V=r["dynCall_"+v];return V(S,...U)},rn,sn=v=>rn.get(v),Je=(v,S,U=[])=>{if(v.includes("j"))return Ze(v,S,U);var V=sn(S)(...U);return v[0]=="p"?V>>>0:V},fe=(v,S)=>(...U)=>Je(v,S,U),Ce=(v,S)=>{v=Ut(v);function U(){return v.includes("j")||v.includes("p")?fe(v,S):sn(S)}var V=U();return typeof V!="function"&&xt(`unknown function pointer with signature ${v}: ${S}`),V},Me=(v,S)=>{var U=mi(S,function(V){this.name=S,this.message=V;var st=new Error(V).stack;st!==void 0&&(this.stack=this.toString()+`
`+st.replace(/^Error(:[^\n]*)?\n/,""))});return U.prototype=Object.create(v.prototype),U.prototype.constructor=U,U.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},U},zn,ta=v=>{var S=yr(v),U=Ut(S);return ha(S),U},wn=(v,S)=>{var U=[],V={};function st(vt){if(!V[vt]&&!he[vt]){if(Pt[vt]){Pt[vt].forEach(st);return}U.push(vt),V[vt]=!0}}throw S.forEach(st),new zn(`${v}: `+U.map(ta).join([", "]))};function Mi(v,S,U,V,st,vt,Dt,St,Ft,Nt,Yt,xe,We){v>>>=0,S>>>=0,U>>>=0,V>>>=0,st>>>=0,vt>>>=0,Dt>>>=0,St>>>=0,Ft>>>=0,Nt>>>=0,Yt>>>=0,xe>>>=0,We>>>=0,Yt=Ut(Yt),vt=Ce(st,vt),St&&=Ce(Dt,St),Nt&&=Ce(Ft,Nt),We=Ce(xe,We);var Cn=it(Yt);$(Cn,function(){wn(`Cannot construct ${Yt} due to unbound types`,[V])}),Zt([v,S,U],V?[V]:[],yn=>{yn=yn[0];var gi,Bi;V?(gi=yn.registeredClass,Bi=gi.instancePrototype):Bi=$i.prototype;var q=mi(Yt,function(...hn){if(Object.getPrototypeOf(this)!==ot)throw new Qt("Use 'new' to construct "+Yt);if(Et.constructor_body===void 0)throw new Qt(Yt+" has no accessible constructor");var ti=Et.constructor_body[hn.length];if(ti===void 0)throw new Qt(`Tried to invoke ctor of ${Yt} with invalid number of parameters (${hn.length}) - expected (${Object.keys(Et.constructor_body).toString()}) parameters instead!`);return ti.apply(this,hn)}),ot=Object.create(Bi,{constructor:{value:q}});q.prototype=ot;var Et=new Jt(Yt,q,ot,We,gi,vt,St,Nt);Et.baseClass&&(Et.baseClass.__derivedClasses??=[],Et.baseClass.__derivedClasses.push(Et));var Bt=new se(Yt,Et,!0,!1,!1),ye=new se(Yt+"*",Et,!1,!1,!1),Ye=new se(Yt+" const*",Et,!1,!0,!1);return za[v]={pointerType:ye,constPointerType:Ye},ge(Cn,q),[Bt,ye,Ye]})}var Ke=(v,S)=>{for(var U=[],V=0;V<v;V++)U.push(J[S+V*4>>>2>>>0]);return U};function Hn(v){for(var S=1;S<v.length;++S)if(v[S]!==null&&v[S].destructorFunction===void 0)return!0;return!1}function Dn(v,S){if(!(v instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof v} which is not a function`);var U=mi(v.name||"unknownFunctionName",function(){});U.prototype=v.prototype;var V=new U,st=v.apply(V,S);return st instanceof Object?st:V}function Yn(v,S,U,V){for(var st=Hn(v),vt=v.length,Dt="",St="",Ft=0;Ft<vt-2;++Ft)Dt+=(Ft!==0?", ":"")+"arg"+Ft,St+=(Ft!==0?", ":"")+"arg"+Ft+"Wired";var Nt=`
        return function (${Dt}) {
        if (arguments.length !== ${vt-2}) {
          throwBindingError('function ' + humanName + ' called with ' + arguments.length + ' arguments, expected ${vt-2}');
        }`;st&&(Nt+=`var destructors = [];
`);var Yt=st?"destructors":"null",xe=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];S&&(Nt+="var thisWired = classParam['toWireType']("+Yt+`, this);
`);for(var Ft=0;Ft<vt-2;++Ft)Nt+="var arg"+Ft+"Wired = argType"+Ft+"['toWireType']("+Yt+", arg"+Ft+`);
`,xe.push("argType"+Ft);if(S&&(St="thisWired"+(St.length>0?", ":"")+St),Nt+=(U||V?"var rv = ":"")+"invoker(fn"+(St.length>0?", ":"")+St+`);
`,st)Nt+=`runDestructors(destructors);
`;else for(var Ft=S?1:2;Ft<v.length;++Ft){var We=Ft===1?"thisWired":"arg"+(Ft-2)+"Wired";v[Ft].destructorFunction!==null&&(Nt+=`${We}_dtor(${We});
`,xe.push(`${We}_dtor`))}return U&&(Nt+=`var ret = retType['fromWireType'](rv);
return ret;
`),Nt+=`}
`,[xe,Nt]}function On(v,S,U,V,st,vt){var Dt=S.length;Dt<2&&xt("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var St=S[1]!==null&&U!==null,Ft=Hn(S),Nt=S[0].name!=="void",Yt=[v,xt,V,st,le,S[0],S[1]],xe=0;xe<Dt-2;++xe)Yt.push(S[xe+2]);if(!Ft)for(var xe=St?1:2;xe<S.length;++xe)S[xe].destructorFunction!==null&&Yt.push(S[xe].destructorFunction);let[We,Cn]=Yn(S,St,Nt,vt);We.push(Cn);var yn=Dn(Function,We)(...Yt);return mi(v,yn)}var _r=function(v,S,U,V,st,vt){v>>>=0,U>>>=0,V>>>=0,st>>>=0,vt>>>=0;var Dt=Ke(S,U);st=Ce(V,st),Zt([],[v],St=>{St=St[0];var Ft=`constructor ${St.name}`;if(St.registeredClass.constructor_body===void 0&&(St.registeredClass.constructor_body=[]),St.registeredClass.constructor_body[S-1]!==void 0)throw new Qt(`Cannot register multiple constructors with identical number of parameters (${S-1}) for class '${St.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return St.registeredClass.constructor_body[S-1]=()=>{wn(`Cannot construct ${St.name} due to unbound types`,Dt)},Zt([],Dt,Nt=>(Nt.splice(1,0,null),St.registeredClass.constructor_body[S-1]=On(Ft,Nt,null,st,vt),[])),[]})},bi=v=>{v=v.trim();const S=v.indexOf("(");return S!==-1?v.substr(0,S):v},ff=function(v,S,U,V,st,vt,Dt,St,Ft){v>>>=0,S>>>=0,V>>>=0,st>>>=0,vt>>>=0,Dt>>>=0;var Nt=Ke(U,V);S=Ut(S),S=bi(S),vt=Ce(st,vt),Zt([],[v],Yt=>{Yt=Yt[0];var xe=`${Yt.name}.${S}`;S.startsWith("@@")&&(S=Symbol[S.substring(2)]),St&&Yt.registeredClass.pureVirtualFunctions.push(S);function We(){wn(`Cannot call ${xe} due to unbound types`,Nt)}var Cn=Yt.registeredClass.instancePrototype,yn=Cn[S];return yn===void 0||yn.overloadTable===void 0&&yn.className!==Yt.name&&yn.argCount===U-2?(We.argCount=U-2,We.className=Yt.name,Cn[S]=We):(w(Cn,S,xe),Cn[S].overloadTable[U-2]=We),Zt([],Nt,gi=>{var Bi=On(xe,gi,Yt,vt,Dt,Ft);return Cn[S].overloadTable===void 0?(Bi.argCount=U-2,Cn[S]=Bi):Cn[S].overloadTable[U-2]=Bi,[]}),[]})},jo=[],Ei=[];function Ii(v){v>>>=0,v>9&&--Ei[v+1]===0&&(Ei[v]=void 0,jo.push(v))}var Zo=()=>Ei.length/2-5-jo.length,Ko=()=>{Ei.push(0,1,void 0,1,null,1,!0,1,!1,1),r.count_emval_handles=Zo},xn={toValue:v=>(v||xt("Cannot use deleted val. handle = "+v),Ei[v]),toHandle:v=>{switch(v){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const S=jo.pop()||Ei.length;return Ei[S]=v,Ei[S+1]=1,S}}}},vr={name:"emscripten::val",fromWireType:v=>{var S=xn.toValue(v);return Ii(v),S},toWireType:(v,S)=>xn.toHandle(S),argPackAdvance:de,readValueFromPointer:Xt,destructorFunction:null};function Qo(v){return v>>>=0,zt(v,vr)}var Jo=(v,S,U)=>{switch(S){case 1:return U?function(V){return this.fromWireType(B[V>>>0])}:function(V){return this.fromWireType(j[V>>>0])};case 2:return U?function(V){return this.fromWireType(C[V>>>1>>>0])}:function(V){return this.fromWireType(L[V>>>1>>>0])};case 4:return U?function(V){return this.fromWireType(k[V>>>2>>>0])}:function(V){return this.fromWireType(J[V>>>2>>>0])};default:throw new TypeError(`invalid integer width (${S}): ${v}`)}};function sc(v,S,U,V){v>>>=0,S>>>=0,U>>>=0,S=Ut(S);function st(){}st.values={},zt(v,{name:S,constructor:st,fromWireType:function(vt){return this.constructor.values[vt]},toWireType:(vt,Dt)=>Dt.value,argPackAdvance:de,readValueFromPointer:Jo(S,U,V),destructorFunction:null}),$(S,st)}var Ma=(v,S)=>{var U=he[v];return U===void 0&&xt(`${S} has unknown type ${ta(v)}`),U};function fa(v,S,U){v>>>=0,S>>>=0;var V=Ma(v,"enum");S=Ut(S);var st=V.constructor,vt=Object.create(V.constructor.prototype,{value:{value:U},constructor:{value:mi(`${V.name}_${S}`,function(){})}});st.values[U]=vt,st[S]=vt}var as=v=>{if(v===null)return"null";var S=typeof v;return S==="object"||S==="array"||S==="function"?v.toString():""+v},rs=(v,S)=>{switch(S){case 4:return function(U){return this.fromWireType(rt[U>>>2>>>0])};case 8:return function(U){return this.fromWireType(pt[U>>>3>>>0])};default:throw new TypeError(`invalid float width (${S}): ${v}`)}},ba=function(v,S,U){v>>>=0,S>>>=0,U>>>=0,S=Ut(S),zt(v,{name:S,fromWireType:V=>V,toWireType:(V,st)=>st,argPackAdvance:de,readValueFromPointer:rs(S,U),destructorFunction:null})};function $o(v,S,U,V,st,vt,Dt){v>>>=0,U>>>=0,V>>>=0,st>>>=0,vt>>>=0;var St=Ke(S,U);v=Ut(v),v=bi(v),st=Ce(V,st),$(v,function(){wn(`Cannot call ${v} due to unbound types`,St)},S-1),Zt([],St,Ft=>{var Nt=[Ft[0],null].concat(Ft.slice(1));return ge(v,On(v,Nt,null,st,vt,Dt),S-1),[]})}var Vs=(v,S,U)=>{switch(S){case 1:return U?V=>B[V>>>0]:V=>j[V>>>0];case 2:return U?V=>C[V>>>1>>>0]:V=>L[V>>>1>>>0];case 4:return U?V=>k[V>>>2>>>0]:V=>J[V>>>2>>>0];default:throw new TypeError(`invalid integer width (${S}): ${v}`)}};function oc(v,S,U,V,st){v>>>=0,S>>>=0,U>>>=0,S=Ut(S);var vt=Yt=>Yt;if(V===0){var Dt=32-8*U;vt=Yt=>Yt<<Dt>>>Dt}var St=S.includes("unsigned"),Ft=(Yt,xe)=>{},Nt;St?Nt=function(Yt,xe){return Ft(xe,this.name),xe>>>0}:Nt=function(Yt,xe){return Ft(xe,this.name),xe},zt(v,{name:S,fromWireType:vt,toWireType:Nt,argPackAdvance:de,readValueFromPointer:Vs(S,U,V!==0),destructorFunction:null})}function ks(v,S,U){v>>>=0,U>>>=0;var V=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],st=V[S];function vt(Dt){var St=J[Dt>>>2>>>0],Ft=J[Dt+4>>>2>>>0];return new st(B.buffer,Ft,St)}U=Ut(U),zt(v,{name:U,fromWireType:vt,argPackAdvance:de,readValueFromPointer:vt},{ignoreDuplicateRegistrations:!0})}function Xs(v,S){v>>>=0,Qo(v)}var lc=(v,S,U,V)=>{if(U>>>=0,!(V>0))return 0;for(var st=U,vt=U+V-1,Dt=0;Dt<v.length;++Dt){var St=v.charCodeAt(Dt);if(St>=55296&&St<=57343){var Ft=v.charCodeAt(++Dt);St=65536+((St&1023)<<10)|Ft&1023}if(St<=127){if(U>=vt)break;S[U++>>>0]=St}else if(St<=2047){if(U+1>=vt)break;S[U++>>>0]=192|St>>6,S[U++>>>0]=128|St&63}else if(St<=65535){if(U+2>=vt)break;S[U++>>>0]=224|St>>12,S[U++>>>0]=128|St>>6&63,S[U++>>>0]=128|St&63}else{if(U+3>=vt)break;S[U++>>>0]=240|St>>18,S[U++>>>0]=128|St>>12&63,S[U++>>>0]=128|St>>6&63,S[U++>>>0]=128|St&63}}return S[U>>>0]=0,U-st},ci=(v,S,U)=>lc(v,j,S,U),Ha=v=>{for(var S=0,U=0;U<v.length;++U){var V=v.charCodeAt(U);V<=127?S++:V<=2047?S+=2:V>=55296&&V<=57343?(S+=4,++U):S+=3}return S},ss=typeof TextDecoder<"u"?new TextDecoder:void 0,os=(v,S,U)=>{S>>>=0;for(var V=S+U,st=S;v[st]&&!(st>=V);)++st;if(st-S>16&&v.buffer&&ss)return ss.decode(v.subarray(S,st));for(var vt="";S<st;){var Dt=v[S++];if(!(Dt&128)){vt+=String.fromCharCode(Dt);continue}var St=v[S++]&63;if((Dt&224)==192){vt+=String.fromCharCode((Dt&31)<<6|St);continue}var Ft=v[S++]&63;if((Dt&240)==224?Dt=(Dt&15)<<12|St<<6|Ft:Dt=(Dt&7)<<18|St<<12|Ft<<6|v[S++]&63,Dt<65536)vt+=String.fromCharCode(Dt);else{var Nt=Dt-65536;vt+=String.fromCharCode(55296|Nt>>10,56320|Nt&1023)}}return vt},hf=(v,S)=>(v>>>=0,v?os(j,v,S):"");function tl(v,S){v>>>=0,S>>>=0,S=Ut(S);var U=S==="std::string";zt(v,{name:S,fromWireType(V){var st=J[V>>>2>>>0],vt=V+4,Dt;if(U)for(var St=vt,Ft=0;Ft<=st;++Ft){var Nt=vt+Ft;if(Ft==st||j[Nt>>>0]==0){var Yt=Nt-St,xe=hf(St,Yt);Dt===void 0?Dt=xe:(Dt+="\0",Dt+=xe),St=Nt+1}}else{for(var We=new Array(st),Ft=0;Ft<st;++Ft)We[Ft]=String.fromCharCode(j[vt+Ft>>>0]);Dt=We.join("")}return ha(V),Dt},toWireType(V,st){st instanceof ArrayBuffer&&(st=new Uint8Array(st));var vt,Dt=typeof st=="string";Dt||st instanceof Uint8Array||st instanceof Uint8ClampedArray||st instanceof Int8Array||xt("Cannot pass non-string to std::string"),U&&Dt?vt=Ha(st):vt=st.length;var St=Ga(4+vt+1),Ft=St+4;if(J[St>>>2>>>0]=vt,U&&Dt)ci(st,Ft,vt+1);else if(Dt)for(var Nt=0;Nt<vt;++Nt){var Yt=st.charCodeAt(Nt);Yt>255&&(ha(Ft),xt("String has UTF-16 code units that do not fit in 8 bits")),j[Ft+Nt>>>0]=Yt}else for(var Nt=0;Nt<vt;++Nt)j[Ft+Nt>>>0]=st[Nt];return V!==null&&V.push(ha,St),St},argPackAdvance:de,readValueFromPointer:Xt,destructorFunction(V){ha(V)}})}var Ws=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,ls=(v,S)=>{for(var U=v,V=U>>1,st=V+S/2;!(V>=st)&&L[V>>>0];)++V;if(U=V<<1,U-v>32&&Ws)return Ws.decode(j.subarray(v>>>0,U>>>0));for(var vt="",Dt=0;!(Dt>=S/2);++Dt){var St=C[v+Dt*2>>>1>>>0];if(St==0)break;vt+=String.fromCharCode(St)}return vt},Ys=(v,S,U)=>{if(U??=2147483647,U<2)return 0;U-=2;for(var V=S,st=U<v.length*2?U/2:v.length,vt=0;vt<st;++vt){var Dt=v.charCodeAt(vt);C[S>>>1>>>0]=Dt,S+=2}return C[S>>>1>>>0]=0,S-V},cc=v=>v.length*2,df=(v,S)=>{for(var U=0,V="";!(U>=S/4);){var st=k[v+U*4>>>2>>>0];if(st==0)break;if(++U,st>=65536){var vt=st-65536;V+=String.fromCharCode(55296|vt>>10,56320|vt&1023)}else V+=String.fromCharCode(st)}return V},pf=(v,S,U)=>{if(S>>>=0,U??=2147483647,U<4)return 0;for(var V=S,st=V+U-4,vt=0;vt<v.length;++vt){var Dt=v.charCodeAt(vt);if(Dt>=55296&&Dt<=57343){var St=v.charCodeAt(++vt);Dt=65536+((Dt&1023)<<10)|St&1023}if(k[S>>>2>>>0]=Dt,S+=4,S+4>st)break}return k[S>>>2>>>0]=0,S-V},mf=v=>{for(var S=0,U=0;U<v.length;++U){var V=v.charCodeAt(U);V>=55296&&V<=57343&&++U,S+=4}return S},el=function(v,S,U){v>>>=0,S>>>=0,U>>>=0,U=Ut(U);var V,st,vt,Dt;S===2?(V=ls,st=Ys,Dt=cc,vt=St=>L[St>>>1>>>0]):S===4&&(V=df,st=pf,Dt=mf,vt=St=>J[St>>>2>>>0]),zt(v,{name:U,fromWireType:St=>{for(var Ft=J[St>>>2>>>0],Nt,Yt=St+4,xe=0;xe<=Ft;++xe){var We=St+4+xe*S;if(xe==Ft||vt(We)==0){var Cn=We-Yt,yn=V(Yt,Cn);Nt===void 0?Nt=yn:(Nt+="\0",Nt+=yn),Yt=We+S}}return ha(St),Nt},toWireType:(St,Ft)=>{typeof Ft!="string"&&xt(`Cannot pass non-string to C++ string type ${U}`);var Nt=Dt(Ft),Yt=Ga(4+Nt+S);return J[Yt>>>2>>>0]=Nt/S,st(Ft,Yt+4,Nt+S),St!==null&&St.push(ha,Yt),Yt},argPackAdvance:de,readValueFromPointer:Xt,destructorFunction(St){ha(St)}})};function gf(v,S,U,V,st,vt){v>>>=0,S>>>=0,U>>>=0,V>>>=0,st>>>=0,vt>>>=0,_t[v]={name:Ut(S),rawConstructor:Ce(U,V),rawDestructor:Ce(st,vt),fields:[]}}function _f(v,S,U,V,st,vt,Dt,St,Ft,Nt){v>>>=0,S>>>=0,U>>>=0,V>>>=0,st>>>=0,vt>>>=0,Dt>>>=0,St>>>=0,Ft>>>=0,Nt>>>=0,_t[v].fields.push({fieldName:Ut(S),getterReturnType:U,getter:Ce(V,st),getterContext:vt,setterArgumentType:Dt,setter:Ce(St,Ft),setterContext:Nt})}var vf=function(v,S){v>>>=0,S>>>=0,S=Ut(S),zt(v,{isVoid:!0,name:S,argPackAdvance:0,fromWireType:()=>{},toWireType:(U,V)=>{}})};function xf(v,S,U){return v>>>=0,S>>>=0,U>>>=0,j.copyWithin(v>>>0,S>>>0,S+U>>>0)}var uc=(v,S,U)=>{var V=[],st=v.toWireType(V,U);return V.length&&(J[S>>>2>>>0]=xn.toHandle(V)),st};function fc(v,S,U){return v>>>=0,S>>>=0,U>>>=0,v=xn.toValue(v),S=Ma(S,"emval::as"),uc(S,U,v)}var yf={},hc=v=>{var S=yf[v];return S===void 0?Ut(v):S},nl=[];function Sf(v,S,U,V,st){return v>>>=0,S>>>=0,U>>>=0,V>>>=0,st>>>=0,v=nl[v],S=xn.toValue(S),U=hc(U),v(S,S[U],V,st)}function il(v,S){return v>>>=0,S>>>=0,v=xn.toValue(v),S=xn.toValue(S),v==S}var Mf=v=>{var S=nl.length;return nl.push(v),S},bf=(v,S)=>{for(var U=new Array(v),V=0;V<v;++V)U[V]=Ma(J[S+V*4>>>2>>>0],"parameter "+V);return U};function Ef(v,S,U){S>>>=0;var V=bf(v,S),st=V.shift();v--;var vt=`return function (obj, func, destructorsRef, args) {
`,Dt=0,St=[];U===0&&St.push("obj");for(var Ft=["retType"],Nt=[st],Yt=0;Yt<v;++Yt)St.push("arg"+Yt),Ft.push("argType"+Yt),Nt.push(V[Yt]),vt+=`  var arg${Yt} = argType${Yt}.readValueFromPointer(args${Dt?"+"+Dt:""});
`,Dt+=V[Yt].argPackAdvance;var xe=U===1?"new func":"func.call";vt+=`  var rv = ${xe}(${St.join(", ")});
`,st.isVoid||(Ft.push("emval_returnValue"),Nt.push(uc),vt+=`  return emval_returnValue(retType, destructorsRef, rv);
`),vt+=`};
`,Ft.push(vt);var We=Dn(Function,Ft)(...Nt),Cn=`methodCaller<(${V.map(yn=>yn.name).join(", ")}) => ${st.name}>`;return Mf(mi(Cn,We))}function dc(v,S){return v>>>=0,S>>>=0,v=xn.toValue(v),S=xn.toValue(S),xn.toHandle(v[S])}function Tf(v){v>>>=0,v>9&&(Ei[v+1]+=1)}function Af(v){return v>>>=0,xn.toHandle(hc(v))}function Rf(){return xn.toHandle({})}function Cf(v){v>>>=0;var S=xn.toValue(v);le(S),Ii(v)}function wf(v,S,U){v>>>=0,S>>>=0,U>>>=0,v=xn.toValue(v),S=xn.toValue(S),U=xn.toValue(U),v[S]=U}function Df(v,S){v>>>=0,S>>>=0,v=Ma(v,"_emval_take_value");var U=v.readValueFromPointer(S);return xn.toHandle(U)}var Uf=()=>4294901760,Lf=v=>{var S=H.buffer,U=(v-S.byteLength+65535)/65536;try{return H.grow(U),yt(),1}catch{}};function Nf(v){v>>>=0;var S=j.length,U=Uf();if(v>U)return!1;for(var V=(Ft,Nt)=>Ft+(Nt-Ft%Nt)%Nt,st=1;st<=4;st*=2){var vt=S*(1+.2/st);vt=Math.min(vt,v+100663296);var Dt=Math.min(U,V(Math.max(v,vt),65536)),St=Lf(Dt);if(St)return!0}return!1}var qs=(v,S)=>{v<128?S.push(v):S.push(v%128|128,v>>7)},cs=v=>{for(var S={i:"i32",j:"i64",f:"f32",d:"f64",e:"externref",p:"i32"},U={parameters:[],results:v[0]=="v"?[]:[S[v[0]]]},V=1;V<v.length;++V)U.parameters.push(S[v[V]]);return U},Of=(v,S)=>{var U=v.slice(0,1),V=v.slice(1),st={i:127,p:127,j:126,f:125,d:124,e:111};S.push(96),qs(V.length,S);for(var vt=0;vt<V.length;++vt)S.push(st[V[vt]]);U=="v"?S.push(0):S.push(1,st[U])},pc=(v,S)=>{if(typeof WebAssembly.Function=="function")return new WebAssembly.Function(cs(S),v);var U=[1];Of(S,U);var V=[0,97,115,109,1,0,0,0,1];qs(U.length,V),V.push(...U),V.push(2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0);var st=new WebAssembly.Module(new Uint8Array(V)),vt=new WebAssembly.Instance(st,{e:{f:v}}),Dt=vt.exports.f;return Dt},mc=(v,S)=>{if(Ea)for(var U=v;U<v+S;U++){var V=sn(U);V&&Ea.set(V,U)}},Ea,gc=v=>(Ea||(Ea=new WeakMap,mc(0,rn.length)),Ea.get(v)||0),js=[],xr=()=>{if(js.length)return js.pop();try{rn.grow(1)}catch(v){throw v instanceof RangeError?"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.":v}return rn.length-1},al=(v,S)=>rn.set(v,S),us=(v,S)=>{var U=gc(v);if(U)return U;var V=xr();try{al(V,v)}catch(vt){if(!(vt instanceof TypeError))throw vt;var st=pc(v,S);al(V,st)}return Ea.set(v,V),V},fs=v=>{Ea.delete(sn(v)),al(v,null),js.push(v)};Ht=r.InternalError=class extends Error{constructor(S){super(S),this.name="InternalError"}},K(),Qt=r.BindingError=class extends Error{constructor(S){super(S),this.name="BindingError"}},Sa(),gr(),pe(),zn=r.UnboundTypeError=Me(Error,"UnboundTypeError"),Ko();var _c={i:bt,D:wt,n:qt,C:Re,H:an,h:Mi,g:_r,a:ff,G:Qo,t:sc,e:fa,x:ba,c:$o,j:oc,f:ks,k:Xs,w:tl,s:el,o:gf,l:_f,I:vf,F:xf,v:fc,z:Sf,b:Ii,m:il,y:Ef,B:dc,u:Tf,q:Af,A:Rf,p:Cf,r:wf,d:Df,E:Nf},Ti=Ge(),yr=v=>(yr=Ti.L)(v),Ga=v=>(Ga=Ti.N)(v),ha=v=>(ha=Ti.O)(v),hs=v=>(hs=Ti.P)(v);function vc(v){v=Object.assign({},v);var S=V=>st=>V(st)>>>0,U=V=>()=>V()>>>0;return v.L=S(v.L),v.N=S(v.N),v._emscripten_stack_alloc=S(v._emscripten_stack_alloc),v.emscripten_stack_get_current=U(v.emscripten_stack_get_current),v}r.addFunction=us,r.removeFunction=fs;var ds;nt=function v(){ds||Zs(),ds||(nt=v)};function Zs(){if(It>0||(Ot(),It>0))return;function v(){ds||(ds=!0,r.calledRun=!0,!O&&(Lt(),l(r),r.onRuntimeInitialized?.(),G()))}r.setStatus?(r.setStatus("Running..."),setTimeout(function(){setTimeout(function(){r.setStatus("")},1),v()},1)):v()}if(r.preInit)for(typeof r.preInit=="function"&&(r.preInit=[r.preInit]);r.preInit.length>0;)r.preInit.pop()();return Zs(),i=h,i})})();let ql=null;async function Jv(){return ql||(ql=await dR(),ql.setup(),ql)}function pR(o){const t=new An;switch(o){case"-z":return t;case"+z":return t.makeRotationX(Math.PI);case"+x":return t.makeRotationY(-Math.PI/2);case"-x":return t.makeRotationY(Math.PI/2);case"+y":return t.makeRotationX(Math.PI/2);case"-y":return t.makeRotationX(-Math.PI/2);default:return t}}function mR(){const o=Le.useRef(null),[t,i]=Le.useState(null),[r,l]=Le.useState(null),[c,h]=Le.useState(null),[d,m]=Le.useState(null),[p,_]=Le.useState(""),[g,x]=Le.useState(1),[b,A]=Le.useState(1),[R,E]=Le.useState(0),[y,F]=Le.useState(0),[N,P]=Le.useState(!0),[H,O]=Le.useState(!1),[B,j]=Le.useState("inside"),[C,L]=Le.useState("-z"),[k,J]=Le.useState(!1),[rt,pt]=Le.useState(!1),[yt,z]=Le.useState(null),W=Le.useRef(null);Le.useEffect(()=>{Jv().then(()=>pt(!0)).catch(It=>{console.error("Failed to init Manifold:",It),z("Failed to initialize 3D engine. Please refresh the page.")})},[]);const at=Le.useCallback((It,nt)=>{const lt=It.clone(),Gt=pR(nt);lt.applyMatrix4(Gt),lt.computeBoundingBox();const jt=Kv(lt);lt.translate(-jt.centerX,-jt.centerY,-jt.minZ),lt.computeBoundingBox();const kt=Kv(lt);return{geometry:lt,dims:{width:kt.width,depth:kt.depth,height:kt.height,minX:kt.minX,maxX:kt.maxX,minY:kt.minY,maxY:kt.maxY,minZ:kt.minZ,maxZ:kt.maxZ,centerX:kt.centerX,centerY:kt.centerY}}},[]),Ot=Le.useCallback((It,nt)=>{if(nt==="custom")return;const lt=up(It.width,It.depth,nt);x(lt.gridX),A(lt.gridY)},[]),Lt=Le.useCallback((It,nt)=>{z(null);try{o.current&&o.current.dispose(),t?.dispose(),r?.dispose(),c?.dispose();const lt=oR(It);o.current=lt;const{geometry:Gt,dims:jt}=at(lt,C);i(Gt),m(jt),_(nt);const kt=up(jt.width,jt.depth,B);x(kt.gridX),A(kt.gridY),l(null),h(null),W.current=null,E(0),F(0)}catch(lt){console.error("Failed to parse STL:",lt),z(`Failed to parse STL file: ${lt.message}`)}},[at,C,B,t,r,c]),G=Le.useCallback(It=>{if(!o.current)return;t?.dispose(),r?.dispose(),c?.dispose(),L(It);const{geometry:nt,dims:lt}=at(o.current,It);i(nt),m(lt);const Gt=up(lt.width,lt.depth,B);x(Gt.gridX),A(Gt.gridY),l(null),h(null),W.current=null,E(0),F(0)},[at,B,t,r,c]),ft=Le.useCallback(It=>{j(It),d&&Ot(d,It),l(null),h(null),W.current=null},[d,Ot]),At=Le.useCallback(async()=>{if(!(!t||!rt)){J(!0),z(null),h(null),l(null),W.current=null;try{const It=await Jv(),lt=await eR(It,{gridX:g,gridY:b,offsetX:R,offsetY:y,magnets:N,screws:H}),Gt=lt.getMesh(),jt=Zv(Gt);Gt.delete();const kt=new li;kt.setAttribute("position",new si(jt.positions,3)),kt.setIndex(new si(jt.indices,1)),kt.computeVertexNormals(),l(kt);const Te=t.clone();Te.translate(0,0,qv);const nn=nR(Te,It);Te.dispose();let De;try{De=new It.Manifold(nn)}catch(Y){console.warn("Model is not manifold, trying to fix...",Y.message),nn.delete(),z("The uploaded model has mesh errors (non-manifold geometry). Try repairing it with Microsoft 3D Builder (free, Windows) or Meshmixer (free) before uploading. Most STL repair tools can fix this automatically."),J(!1),lt.delete();return}nn.delete();const Ee=De.add(lt),Be=Ee.getMesh(),ve=Zv(Be);Be.delete();const ln=new li;ln.setAttribute("position",new si(ve.positions,3)),ln.setIndex(new si(ve.indices,1)),ln.computeVertexNormals(),h(ln),W.current=ve,Ee.delete(),De.delete(),lt.delete()}catch(It){console.error("Generation failed:",It),z(`Generation failed: ${It.message}`)}finally{J(!1)}}},[t,rt,g,b,R,y,N,H]),Vt=Le.useCallback(()=>{if(!W.current)return;const{positions:It,indices:nt}=W.current,lt=lR(It,nt),Gt=p.replace(/\.stl$/i,"");cR(lt,`${Gt}_gridfinity_${g}x${b}.stl`)},[p,g,b]);return Wt.jsxs("div",{className:"min-h-screen flex flex-col",children:[Wt.jsx("header",{className:"border-b border-gray-800 px-6 py-3",children:Wt.jsxs("div",{className:"flex items-center gap-3",children:[Wt.jsx("div",{className:"text-xl",children:"🔲"}),Wt.jsxs("div",{children:[Wt.jsx("h1",{className:"text-lg font-bold text-gray-100",children:"Gridfinity Base Adder"}),Wt.jsx("p",{className:"text-xs text-gray-500",children:"Add Gridfinity-compatible bases to any STL model"})]}),!rt&&Wt.jsx("span",{className:"ml-auto text-xs text-yellow-500 animate-pulse",children:"Loading 3D engine..."})]})}),Wt.jsxs("div",{className:"flex-1 flex flex-col lg:flex-row",children:[Wt.jsx("div",{className:"flex-1 p-4",children:Wt.jsx("div",{className:"h-full min-h-[400px] lg:min-h-[600px] rounded-xl border border-gray-800 overflow-hidden",children:Wt.jsx(iR,{originalGeometry:t,baseGeometry:r,combinedGeometry:c,gridX:g,gridY:b,offsetX:R,offsetY:y})})}),Wt.jsxs("div",{className:"w-full lg:w-80 p-4 lg:pl-0 border-t lg:border-t-0 lg:border-l border-gray-800 overflow-y-auto max-h-screen",children:[Wt.jsx(rR,{gridX:g,gridY:b,offsetX:R,offsetY:y,magnets:N,screws:H,fitMode:B,orientation:C,modelDims:d,hasModel:!!t,hasBase:!!r,hasCombined:!!c,isProcessing:k,onGridXChange:x,onGridYChange:A,onOffsetXChange:E,onOffsetYChange:F,onMagnetsChange:P,onScrewsChange:O,onFitModeChange:ft,onOrientationChange:G,onGenerate:At,onDownload:Vt}),yt&&Wt.jsx("div",{className:"mt-4 p-3 rounded-lg bg-red-950/50 border border-red-800 text-xs text-red-300",children:yt}),Wt.jsxs("div",{className:"mt-6 text-xs text-gray-600 space-y-1",children:[Wt.jsxs("p",{children:["Grid unit: ",be,"mm × ",be,"mm"]}),Wt.jsxs("p",{children:["Base height: ",qv.toFixed(1),"mm"]}),Wt.jsx("p",{children:"All processing runs in your browser."})]})]})]}),Wt.jsxs("div",{className:"p-4 border-t border-gray-800",children:[Wt.jsx(NA,{onFileLoaded:Lt,disabled:!rt||k}),p&&Wt.jsxs("p",{className:"mt-2 text-xs text-gray-500 text-center",children:["Loaded: ",p]})]})]})}uS.createRoot(document.getElementById("root")).render(Wt.jsx(Le.StrictMode,{children:Wt.jsx(mR,{})}));
