(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Ed={exports:{}},Bl={};var N_;function rS(){if(N_)return Bl;N_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:c}}return Bl.Fragment=t,Bl.jsx=i,Bl.jsxs=i,Bl}var O_;function sS(){return O_||(O_=1,Ed.exports=rS()),Ed.exports}var nt=sS(),Td={exports:{}},we={};var P_;function oS(){if(P_)return we;P_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function M(V){return V===null||typeof V!="object"?null:(V=x&&V[x]||V["@@iterator"],typeof V=="function"?V:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,E={};function y(V,ut,Et){this.props=V,this.context=ut,this.refs=E,this.updater=Et||A}y.prototype.isReactComponent={},y.prototype.setState=function(V,ut){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,ut,"setState")},y.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function z(){}z.prototype=y.prototype;function N(V,ut,Et){this.props=V,this.context=ut,this.refs=E,this.updater=Et||A}var O=N.prototype=new z;O.constructor=N,R(O,y.prototype),O.isPureReactComponent=!0;var B=Array.isArray;function P(){}var F={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function C(V,ut,Et){var Vt=Et.ref;return{$$typeof:s,type:V,key:ut,ref:Vt!==void 0?Vt:null,props:Et}}function U(V,ut){return C(V.type,ut,V.props)}function k(V){return typeof V=="object"&&V!==null&&V.$$typeof===s}function j(V){var ut={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(Et){return ut[Et]})}var it=/\/+/g;function pt(V,ut){return typeof V=="object"&&V!==null&&V.key!=null?j(""+V.key):ut.toString(36)}function xt(V){switch(V.status){case"fulfilled":return V.value;case"rejected":throw V.reason;default:switch(typeof V.status=="string"?V.then(P,P):(V.status="pending",V.then(function(ut){V.status==="pending"&&(V.status="fulfilled",V.value=ut)},function(ut){V.status==="pending"&&(V.status="rejected",V.reason=ut)})),V.status){case"fulfilled":return V.value;case"rejected":throw V.reason}}throw V}function H(V,ut,Et,Vt,jt){var lt=typeof V;(lt==="undefined"||lt==="boolean")&&(V=null);var St=!1;if(V===null)St=!0;else switch(lt){case"bigint":case"string":case"number":St=!0;break;case"object":switch(V.$$typeof){case s:case t:St=!0;break;case g:return St=V._init,H(St(V._payload),ut,Et,Vt,jt)}}if(St)return jt=jt(V),St=Vt===""?"."+pt(V,0):Vt,B(jt)?(Et="",St!=null&&(Et=St.replace(it,"$&/")+"/"),H(jt,ut,Et,"",function(ae){return ae})):jt!=null&&(k(jt)&&(jt=U(jt,Et+(jt.key==null||V&&V.key===jt.key?"":(""+jt.key).replace(it,"$&/")+"/")+St)),ut.push(jt)),1;St=0;var kt=Vt===""?".":Vt+":";if(B(V))for(var ie=0;ie<V.length;ie++)Vt=V[ie],lt=kt+pt(Vt,ie),St+=H(Vt,ut,Et,lt,jt);else if(ie=M(V),typeof ie=="function")for(V=ie.call(V),ie=0;!(Vt=V.next()).done;)Vt=Vt.value,lt=kt+pt(Vt,ie++),St+=H(Vt,ut,Et,lt,jt);else if(lt==="object"){if(typeof V.then=="function")return H(xt(V),ut,Et,Vt,jt);throw ut=String(V),Error("Objects are not valid as a React child (found: "+(ut==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":ut)+"). If you meant to render a collection of children, use an array instead.")}return St}function Y(V,ut,Et){if(V==null)return V;var Vt=[],jt=0;return H(V,Vt,"","",function(lt){return ut.call(Et,lt,jt++)}),Vt}function st(V){if(V._status===-1){var ut=V._result;ut=ut(),ut.then(function(Et){(V._status===0||V._status===-1)&&(V._status=1,V._result=Et)},function(Et){(V._status===0||V._status===-1)&&(V._status=2,V._result=Et)}),V._status===-1&&(V._status=0,V._result=ut)}if(V._status===1)return V._result.default;throw V._result}var Pt=typeof reportError=="function"?reportError:function(V){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ut=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof V=="object"&&V!==null&&typeof V.message=="string"?String(V.message):String(V),error:V});if(!window.dispatchEvent(ut))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",V);return}console.error(V)},Ut={map:Y,forEach:function(V,ut,Et){Y(V,function(){ut.apply(this,arguments)},Et)},count:function(V){var ut=0;return Y(V,function(){ut++}),ut},toArray:function(V){return Y(V,function(ut){return ut})||[]},only:function(V){if(!k(V))throw Error("React.Children.only expected to receive a single React element child.");return V}};return we.Activity=_,we.Children=Ut,we.Component=y,we.Fragment=i,we.Profiler=l,we.PureComponent=N,we.StrictMode=r,we.Suspense=m,we.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,we.__COMPILER_RUNTIME={__proto__:null,c:function(V){return F.H.useMemoCache(V)}},we.cache=function(V){return function(){return V.apply(null,arguments)}},we.cacheSignal=function(){return null},we.cloneElement=function(V,ut,Et){if(V==null)throw Error("The argument must be a React element, but you passed "+V+".");var Vt=R({},V.props),jt=V.key;if(ut!=null)for(lt in ut.key!==void 0&&(jt=""+ut.key),ut)!Z.call(ut,lt)||lt==="key"||lt==="__self"||lt==="__source"||lt==="ref"&&ut.ref===void 0||(Vt[lt]=ut[lt]);var lt=arguments.length-2;if(lt===1)Vt.children=Et;else if(1<lt){for(var St=Array(lt),kt=0;kt<lt;kt++)St[kt]=arguments[kt+2];Vt.children=St}return C(V.type,jt,Vt)},we.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null},V.Provider=V,V.Consumer={$$typeof:c,_context:V},V},we.createElement=function(V,ut,Et){var Vt,jt={},lt=null;if(ut!=null)for(Vt in ut.key!==void 0&&(lt=""+ut.key),ut)Z.call(ut,Vt)&&Vt!=="key"&&Vt!=="__self"&&Vt!=="__source"&&(jt[Vt]=ut[Vt]);var St=arguments.length-2;if(St===1)jt.children=Et;else if(1<St){for(var kt=Array(St),ie=0;ie<St;ie++)kt[ie]=arguments[ie+2];jt.children=kt}if(V&&V.defaultProps)for(Vt in St=V.defaultProps,St)jt[Vt]===void 0&&(jt[Vt]=St[Vt]);return C(V,lt,jt)},we.createRef=function(){return{current:null}},we.forwardRef=function(V){return{$$typeof:d,render:V}},we.isValidElement=k,we.lazy=function(V){return{$$typeof:g,_payload:{_status:-1,_result:V},_init:st}},we.memo=function(V,ut){return{$$typeof:p,type:V,compare:ut===void 0?null:ut}},we.startTransition=function(V){var ut=F.T,Et={};F.T=Et;try{var Vt=V(),jt=F.S;jt!==null&&jt(Et,Vt),typeof Vt=="object"&&Vt!==null&&typeof Vt.then=="function"&&Vt.then(P,Pt)}catch(lt){Pt(lt)}finally{ut!==null&&Et.types!==null&&(ut.types=Et.types),F.T=ut}},we.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},we.use=function(V){return F.H.use(V)},we.useActionState=function(V,ut,Et){return F.H.useActionState(V,ut,Et)},we.useCallback=function(V,ut){return F.H.useCallback(V,ut)},we.useContext=function(V){return F.H.useContext(V)},we.useDebugValue=function(){},we.useDeferredValue=function(V,ut){return F.H.useDeferredValue(V,ut)},we.useEffect=function(V,ut){return F.H.useEffect(V,ut)},we.useEffectEvent=function(V){return F.H.useEffectEvent(V)},we.useId=function(){return F.H.useId()},we.useImperativeHandle=function(V,ut,Et){return F.H.useImperativeHandle(V,ut,Et)},we.useInsertionEffect=function(V,ut){return F.H.useInsertionEffect(V,ut)},we.useLayoutEffect=function(V,ut){return F.H.useLayoutEffect(V,ut)},we.useMemo=function(V,ut){return F.H.useMemo(V,ut)},we.useOptimistic=function(V,ut){return F.H.useOptimistic(V,ut)},we.useReducer=function(V,ut,Et){return F.H.useReducer(V,ut,Et)},we.useRef=function(V){return F.H.useRef(V)},we.useState=function(V){return F.H.useState(V)},we.useSyncExternalStore=function(V,ut,Et){return F.H.useSyncExternalStore(V,ut,Et)},we.useTransition=function(){return F.H.useTransition()},we.version="19.2.4",we}var F_;function um(){return F_||(F_=1,Td.exports=oS()),Td.exports}var Me=um(),Ad={exports:{}},zl={},Rd={exports:{}},Cd={};var I_;function lS(){return I_||(I_=1,(function(s){function t(H,Y){var st=H.length;H.push(Y);t:for(;0<st;){var Pt=st-1>>>1,Ut=H[Pt];if(0<l(Ut,Y))H[Pt]=Y,H[st]=Ut,st=Pt;else break t}}function i(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var Y=H[0],st=H.pop();if(st!==Y){H[0]=st;t:for(var Pt=0,Ut=H.length,V=Ut>>>1;Pt<V;){var ut=2*(Pt+1)-1,Et=H[ut],Vt=ut+1,jt=H[Vt];if(0>l(Et,st))Vt<Ut&&0>l(jt,Et)?(H[Pt]=jt,H[Vt]=st,Pt=Vt):(H[Pt]=Et,H[ut]=st,Pt=ut);else if(Vt<Ut&&0>l(jt,st))H[Pt]=jt,H[Vt]=st,Pt=Vt;else break t}}return Y}function l(H,Y){var st=H.sortIndex-Y.sortIndex;return st!==0?st:H.id-Y.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,_=null,x=3,M=!1,A=!1,R=!1,E=!1,y=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function O(H){for(var Y=i(p);Y!==null;){if(Y.callback===null)r(p);else if(Y.startTime<=H)r(p),Y.sortIndex=Y.expirationTime,t(m,Y);else break;Y=i(p)}}function B(H){if(R=!1,O(H),!A)if(i(m)!==null)A=!0,P||(P=!0,j());else{var Y=i(p);Y!==null&&xt(B,Y.startTime-H)}}var P=!1,F=-1,Z=5,C=-1;function U(){return E?!0:!(s.unstable_now()-C<Z)}function k(){if(E=!1,P){var H=s.unstable_now();C=H;var Y=!0;try{t:{A=!1,R&&(R=!1,z(F),F=-1),M=!0;var st=x;try{e:{for(O(H),_=i(m);_!==null&&!(_.expirationTime>H&&U());){var Pt=_.callback;if(typeof Pt=="function"){_.callback=null,x=_.priorityLevel;var Ut=Pt(_.expirationTime<=H);if(H=s.unstable_now(),typeof Ut=="function"){_.callback=Ut,O(H),Y=!0;break e}_===i(m)&&r(m),O(H)}else r(m);_=i(m)}if(_!==null)Y=!0;else{var V=i(p);V!==null&&xt(B,V.startTime-H),Y=!1}}break t}finally{_=null,x=st,M=!1}Y=void 0}}finally{Y?j():P=!1}}}var j;if(typeof N=="function")j=function(){N(k)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,pt=it.port2;it.port1.onmessage=k,j=function(){pt.postMessage(null)}}else j=function(){y(k,0)};function xt(H,Y){F=y(function(){H(s.unstable_now())},Y)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(H){switch(x){case 1:case 2:case 3:var Y=3;break;default:Y=x}var st=x;x=Y;try{return H()}finally{x=st}},s.unstable_requestPaint=function(){E=!0},s.unstable_runWithPriority=function(H,Y){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var st=x;x=H;try{return Y()}finally{x=st}},s.unstable_scheduleCallback=function(H,Y,st){var Pt=s.unstable_now();switch(typeof st=="object"&&st!==null?(st=st.delay,st=typeof st=="number"&&0<st?Pt+st:Pt):st=Pt,H){case 1:var Ut=-1;break;case 2:Ut=250;break;case 5:Ut=1073741823;break;case 4:Ut=1e4;break;default:Ut=5e3}return Ut=st+Ut,H={id:g++,callback:Y,priorityLevel:H,startTime:st,expirationTime:Ut,sortIndex:-1},st>Pt?(H.sortIndex=st,t(p,H),i(m)===null&&H===i(p)&&(R?(z(F),F=-1):R=!0,xt(B,st-Pt))):(H.sortIndex=Ut,t(m,H),A||M||(A=!0,P||(P=!0,j()))),H},s.unstable_shouldYield=U,s.unstable_wrapCallback=function(H){var Y=x;return function(){var st=x;x=Y;try{return H.apply(this,arguments)}finally{x=st}}}})(Cd)),Cd}var B_;function cS(){return B_||(B_=1,Rd.exports=lS()),Rd.exports}var wd={exports:{}},ui={};var z_;function uS(){if(z_)return ui;z_=1;var s=um();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return ui.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,ui.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},ui.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},ui.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},ui.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},ui.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:M}):g==="script"&&r.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},ui.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},ui.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},ui.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},ui.requestFormReset=function(m){r.d.r(m)},ui.unstable_batchedUpdates=function(m,p){return m(p)},ui.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},ui.useFormStatus=function(){return h.H.useHostTransitionStatus()},ui.version="19.2.4",ui}var H_;function fS(){if(H_)return wd.exports;H_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),wd.exports=uS(),wd.exports}var V_;function hS(){if(V_)return zl;V_=1;var s=cS(),t=um(),i=fS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var b=!1,D=u.child;D;){if(D===a){b=!0,a=u,o=f;break}if(D===o){b=!0,o=u,a=f;break}D=D.sibling}if(!b){for(D=f.child;D;){if(D===a){b=!0,a=f,o=u;break}if(D===o){b=!0,o=f,a=u;break}D=D.sibling}if(!b)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),N=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function j(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var it=Symbol.for("react.client.reference");function pt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===it?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case y:return"Profiler";case E:return"StrictMode";case B:return"Suspense";case P:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case N:return e.displayName||"Context";case z:return(e._context.displayName||"Context")+".Consumer";case O:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return n=e.displayName||null,n!==null?n:pt(e.type)||"Memo";case Z:n=e._payload,e=e._init;try{return pt(e(n))}catch{}}return null}var xt=Array.isArray,H=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,st={pending:!1,data:null,method:null,action:null},Pt=[],Ut=-1;function V(e){return{current:e}}function ut(e){0>Ut||(e.current=Pt[Ut],Pt[Ut]=null,Ut--)}function Et(e,n){Ut++,Pt[Ut]=e.current,e.current=n}var Vt=V(null),jt=V(null),lt=V(null),St=V(null);function kt(e,n){switch(Et(lt,n),Et(jt,e),Et(Vt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?n_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=n_(n),e=i_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ut(Vt),Et(Vt,e)}function ie(){ut(Vt),ut(jt),ut(lt)}function ae(e){e.memoizedState!==null&&Et(St,e);var n=Vt.current,a=i_(n,e.type);n!==a&&(Et(jt,e),Et(Vt,a))}function Ne(e){jt.current===e&&(ut(Vt),ut(jt)),St.current===e&&(ut(St),Ol._currentValue=st)}var cn,de;function le(e){if(cn===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);cn=n&&n[1]||"",de=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+cn+e+de}var he=!1;function re(e,n){if(!e||he)return"";he=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Dt=function(){throw Error()};if(Object.defineProperty(Dt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Dt,[])}catch(gt){var dt=gt}Reflect.construct(e,[],Dt)}else{try{Dt.call()}catch(gt){dt=gt}e.call(Dt.prototype)}}else{try{throw Error()}catch(gt){dt=gt}(Dt=e())&&typeof Dt.catch=="function"&&Dt.catch(function(){})}}catch(gt){if(gt&&dt&&typeof gt.stack=="string")return[gt.stack,dt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),b=f[0],D=f[1];if(b&&D){var X=b.split(`
`),ft=D.split(`
`);for(u=o=0;o<X.length&&!X[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ft.length&&!ft[u].includes("DetermineComponentFrameRoot");)u++;if(o===X.length||u===ft.length)for(o=X.length-1,u=ft.length-1;1<=o&&0<=u&&X[o]!==ft[u];)u--;for(;1<=o&&0<=u;o--,u--)if(X[o]!==ft[u]){if(o!==1||u!==1)do if(o--,u--,0>u||X[o]!==ft[u]){var Tt=`
`+X[o].replace(" at new "," at ");return e.displayName&&Tt.includes("<anonymous>")&&(Tt=Tt.replace("<anonymous>",e.displayName)),Tt}while(1<=o&&0<=u);break}}}finally{he=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?le(a):""}function Ze(e,n){switch(e.tag){case 26:case 27:case 5:return le(e.type);case 16:return le("Lazy");case 13:return e.child!==n&&n!==null?le("Suspense Fallback"):le("Suspense");case 19:return le("SuspenseList");case 0:case 15:return re(e.type,!1);case 11:return re(e.type.render,!1);case 1:return re(e.type,!0);case 31:return le("Activity");default:return""}}function W(e){try{var n="",a=null;do n+=Ze(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Je=Object.prototype.hasOwnProperty,Ce=s.unstable_scheduleCallback,Oe=s.unstable_cancelCallback,Yt=s.unstable_shouldYield,I=s.unstable_requestPaint,T=s.unstable_now,$=s.unstable_getCurrentPriorityLevel,bt=s.unstable_ImmediatePriority,Ct=s.unstable_UserBlockingPriority,_t=s.unstable_NormalPriority,ce=s.unstable_LowPriority,Gt=s.unstable_IdlePriority,ee=s.log,ge=s.unstable_setDisableYieldValue,Ft=null,Ht=null;function Jt(e){if(typeof ee=="function"&&ge(e),Ht&&typeof Ht.setStrictMode=="function")try{Ht.setStrictMode(Ft,e)}catch{}}var qt=Math.clz32?Math.clz32:Q,Wt=Math.log,De=Math.LN2;function Q(e){return e>>>=0,e===0?32:31-(Wt(e)/De|0)|0}var Zt=256,Nt=262144,Kt=4194304;function yt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function wt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,b=e.pingedLanes;e=e.warmLanes;var D=o&134217727;return D!==0?(o=D&~f,o!==0?u=yt(o):(b&=D,b!==0?u=yt(b):a||(a=D&~e,a!==0&&(u=yt(a))))):(D=o&~f,D!==0?u=yt(D):b!==0?u=yt(b):a||(a=o&~e,a!==0&&(u=yt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function zt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function _e(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rn(){var e=Kt;return Kt<<=1,(Kt&62914560)===0&&(Kt=4194304),e}function We(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Bn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function pi(e,n,a,o,u,f){var b=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var D=e.entanglements,X=e.expirationTimes,ft=e.hiddenUpdates;for(a=b&~a;0<a;){var Tt=31-qt(a),Dt=1<<Tt;D[Tt]=0,X[Tt]=-1;var dt=ft[Tt];if(dt!==null)for(ft[Tt]=null,Tt=0;Tt<dt.length;Tt++){var gt=dt[Tt];gt!==null&&(gt.lane&=-536870913)}a&=~Dt}o!==0&&Jr(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(b&~n))}function Jr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-qt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function ts(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-qt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Ba(e,n){var a=n&-n;return a=(a&42)!==0?1:mr(a),(a&(e.suspendedLanes|n))!==0?0:a}function mr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function za(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function es(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:A_(e.type))}function Ki(e,n){var a=Y.p;try{return Y.p=e,n()}finally{Y.p=a}}var $n=Math.random().toString(36).slice(2),bn="__reactFiber$"+$n,Rn="__reactProps$"+$n,Fi="__reactContainer$"+$n,gr="__reactEvents$"+$n,Qi="__reactListeners$"+$n,Vs="__reactHandles$"+$n,ns="__reactResources$"+$n,$i="__reactMarker$"+$n;function is(e){delete e[bn],delete e[Rn],delete e[gr],delete e[Qi],delete e[Vs]}function Si(e){var n=e[bn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Fi]||a[bn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=u_(e);e!==null;){if(a=e[bn])return a;e=u_(e)}return n}e=a,a=e.parentNode}return null}function Sa(e){if(e=e[bn]||e[Fi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ji(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function mi(e){var n=e[ns];return n||(n=e[ns]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function w(e){e[$i]=!0}var J=new Set,mt={};function ht(e,n){at(e,n),at(e+"Capture",n)}function at(e,n){for(mt[e]=n,e=0;e<n.length;e++)J.add(n[e])}var Qt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ne={},$t={};function se(e){return Je.call($t,e)?!0:Je.call(ne,e)?!1:Qt.test(e)?$t[e]=!0:(ne[e]=!0,!1)}function fe(e,n,a){if(se(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ve(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function oe(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ye(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ke(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function sn(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(b){a=""+b,f.call(this,b)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(b){a=""+b},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function on(e){if(!e._valueTracker){var n=Ke(e)?"checked":"value";e._valueTracker=sn(e,n,""+e[n])}}function tn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Ke(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function me(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ue=/[\n"\\]/g;function Re(e){return e.replace(Ue,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function zn(e,n,a,o,u,f,b,D){e.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.type=b:e.removeAttribute("type"),n!=null?b==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ye(n)):e.value!==""+ye(n)&&(e.value=""+ye(n)):b!=="submit"&&b!=="reset"||e.removeAttribute("value"),n!=null?wn(e,b,ye(n)):a!=null?wn(e,b,ye(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?e.name=""+ye(D):e.removeAttribute("name")}function ta(e,n,a,o,u,f,b,D){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){on(e);return}a=a!=null?""+ye(a):"",n=n!=null?""+ye(n):a,D||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=D?e.checked:!!o,e.defaultChecked=!!o,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(e.name=b),on(e)}function wn(e,n,a){n==="number"&&me(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Mi(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ye(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Qe(e,n,a){if(n!=null&&(n=""+ye(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ye(a):""}function Hn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(xt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ye(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),on(e)}function Dn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var jn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function On(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||jn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function _r(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&On(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&On(e,f,n[f])}function bi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Zo=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ei(e){return Zo.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ii(){}var Ko=null;function Qo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xn=null,vr=null;function $o(e){var n=Sa(e);if(n&&(e=n.stateNode)){var a=e[Rn]||null;t:switch(e=n.stateNode,n.type){case"input":if(zn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Re(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Rn]||null;if(!u)throw Error(r(90));zn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&tn(o)}break t;case"textarea":Qe(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Mi(e,!!a.multiple,n,!1)}}}var Jo=!1;function sc(e,n,a){if(Jo)return e(n,a);Jo=!0;try{var o=e(n);return o}finally{if(Jo=!1,(xn!==null||vr!==null)&&(Jc(),xn&&(n=xn,e=vr,vr=xn=null,$o(n),e)))for(n=0;n<e.length;n++)$o(e[n])}}function Ma(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Rn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var fa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),as=!1;if(fa)try{var rs={};Object.defineProperty(rs,"passive",{get:function(){as=!0}}),window.addEventListener("test",rs,rs),window.removeEventListener("test",rs,rs)}catch{as=!1}var ba=null,tl=null,Gs=null;function oc(){if(Gs)return Gs;var e,n=tl,a=n.length,o,u="value"in ba?ba.value:ba.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var b=a-e;for(o=1;o<=b&&n[a-o]===u[f-o];o++);return Gs=u.slice(e,1<o?1-o:void 0)}function ks(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Xs(){return!0}function lc(){return!1}function ci(e){function n(a,o,u,f,b){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=b,this.currentTarget=null;for(var D in e)e.hasOwnProperty(D)&&(a=e[D],this[D]=a?a(f):f[D]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Xs:lc,this.isPropagationStopped=lc,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xs)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xs)},persist:function(){},isPersistent:Xs}),n}var Ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ss=ci(Ha),os=_({},Ha,{view:0,detail:0}),df=ci(os),el,Ws,ls,js=_({},os,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:al,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ls&&(ls&&e.type==="mousemove"?(el=e.screenX-ls.screenX,Ws=e.screenY-ls.screenY):Ws=el=0,ls=e),el)},movementY:function(e){return"movementY"in e?e.movementY:Ws}}),cc=ci(js),pf=_({},js,{dataTransfer:0}),mf=ci(pf),gf=_({},os,{relatedTarget:0}),nl=ci(gf),_f=_({},Ha,{animationName:0,elapsedTime:0,pseudoElement:0}),vf=ci(_f),xf=_({},Ha,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yf=ci(xf),uc=_({},Ha,{data:0}),fc=ci(uc),Sf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},il={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=il[e])?!!n[e]:!1}function al(){return Mf}var bf=_({},os,{key:function(e){if(e.key){var n=Sf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ks(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:al,charCode:function(e){return e.type==="keypress"?ks(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ks(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ef=ci(bf),Tf=_({},js,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dc=ci(Tf),Af=_({},os,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:al}),Rf=ci(Af),Cf=_({},Ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),wf=ci(Cf),Df=_({},js,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Uf=ci(Df),Lf=_({},Ha,{newState:0,oldState:0}),Nf=ci(Lf),Of=[9,13,27,32],Ys=fa&&"CompositionEvent"in window,cs=null;fa&&"documentMode"in document&&(cs=document.documentMode);var Pf=fa&&"TextEvent"in window&&!cs,pc=fa&&(!Ys||cs&&8<cs&&11>=cs),mc=" ",Ea=!1;function gc(e,n){switch(e){case"keyup":return Of.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xr=!1;function rl(e,n){switch(e){case"compositionend":return qs(n);case"keypress":return n.which!==32?null:(Ea=!0,mc);case"textInput":return e=n.data,e===mc&&Ea?null:e;default:return null}}function us(e,n){if(xr)return e==="compositionend"||!Ys&&gc(e,n)?(e=oc(),Gs=tl=ba=null,xr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return pc&&n.locale!=="ko"?null:n.data;default:return null}}var fs={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _c(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!fs[e.type]:n==="textarea"}function Ti(e,n,a,o){xn?vr?vr.push(o):vr=[o]:xn=o,n=su(n,"onChange"),0<n.length&&(a=new ss("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var yr=null,Va=null;function ha(e){Kg(e,0)}function hs(e){var n=Ji(e);if(tn(n))return e}function vc(e,n){if(e==="change")return n}var ds=!1;if(fa){var Zs;if(fa){var v="oninput"in document;if(!v){var S=document.createElement("div");S.setAttribute("oninput","return;"),v=typeof S.oninput=="function"}Zs=v}else Zs=!1;ds=Zs&&(!document.documentMode||9<document.documentMode)}function L(){yr&&(yr.detachEvent("onpropertychange",G),Va=yr=null)}function G(e){if(e.propertyName==="value"&&hs(Va)){var n=[];Ti(n,Va,e,Qo(e)),sc(ha,n)}}function rt(e,n,a){e==="focusin"?(L(),yr=n,Va=a,yr.attachEvent("onpropertychange",G)):e==="focusout"&&L()}function vt(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hs(Va)}function Lt(e,n){if(e==="click")return hs(n)}function Mt(e,n){if(e==="input"||e==="change")return hs(n)}function It(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ot=typeof Object.is=="function"?Object.is:It;function Xt(e,n){if(Ot(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Je.call(n,u)||!Ot(e[u],n[u]))return!1}return!0}function be(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function je(e,n){var a=be(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=be(a)}}function Cn(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Cn(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function yn(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=me(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=me(e.document)}return n}function gi(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Bi=fa&&"documentMode"in document&&11>=document.documentMode,q=null,ot=null,At=null,Bt=!1;function Ee(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Bt||q==null||q!==me(o)||(o=q,"selectionStart"in o&&gi(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),At&&Xt(At,o)||(At=o,o=su(ot,"onSelect"),0<o.length&&(n=new ss("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=q)))}function Ye(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var dn={animationend:Ye("Animation","AnimationEnd"),animationiteration:Ye("Animation","AnimationIteration"),animationstart:Ye("Animation","AnimationStart"),transitionrun:Ye("Transition","TransitionRun"),transitionstart:Ye("Transition","TransitionStart"),transitioncancel:Ye("Transition","TransitionCancel"),transitionend:Ye("Transition","TransitionEnd")},ni={},Pn={};fa&&(Pn=document.createElement("div").style,"AnimationEvent"in window||(delete dn.animationend.animation,delete dn.animationiteration.animation,delete dn.animationstart.animation),"TransitionEvent"in window||delete dn.transitionend.transition);function Ai(e){if(ni[e])return ni[e];if(!dn[e])return e;var n=dn[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Pn)return ni[e]=n[a];return e}var Ga=Ai("animationend"),En=Ai("animationiteration"),Ff=Ai("animationstart"),zx=Ai("transitionrun"),Hx=Ai("transitionstart"),Vx=Ai("transitioncancel"),wm=Ai("transitionend"),Dm=new Map,If="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");If.push("scrollEnd");function da(e,n){Dm.set(e,n),ht(n,[e])}var xc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ea=[],Ks=0,Bf=0;function yc(){for(var e=Ks,n=Bf=Ks=0;n<e;){var a=ea[n];ea[n++]=null;var o=ea[n];ea[n++]=null;var u=ea[n];ea[n++]=null;var f=ea[n];if(ea[n++]=null,o!==null&&u!==null){var b=o.pending;b===null?u.next=u:(u.next=b.next,b.next=u),o.pending=u}f!==0&&Um(a,u,f)}}function Sc(e,n,a,o){ea[Ks++]=e,ea[Ks++]=n,ea[Ks++]=a,ea[Ks++]=o,Bf|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function zf(e,n,a,o){return Sc(e,n,a,o),Mc(e)}function ps(e,n){return Sc(e,null,null,n),Mc(e)}function Um(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-qt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Mc(e){if(50<Rl)throw Rl=0,qh=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Qs={};function Gx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zi(e,n,a,o){return new Gx(e,n,a,o)}function Hf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ka(e,n){var a=e.alternate;return a===null?(a=zi(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Lm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function bc(e,n,a,o,u,f){var b=0;if(o=e,typeof e=="function")Hf(e)&&(b=1);else if(typeof e=="string")b=Yy(e,a,Vt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=zi(31,a,n,u),e.elementType=C,e.lanes=f,e;case R:return ms(a.children,u,f,n);case E:b=8,u|=24;break;case y:return e=zi(12,a,n,u|2),e.elementType=y,e.lanes=f,e;case B:return e=zi(13,a,n,u),e.elementType=B,e.lanes=f,e;case P:return e=zi(19,a,n,u),e.elementType=P,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:b=10;break t;case z:b=9;break t;case O:b=11;break t;case F:b=14;break t;case Z:b=16,o=null;break t}b=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=zi(b,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function ms(e,n,a,o){return e=zi(7,e,o,n),e.lanes=a,e}function Vf(e,n,a){return e=zi(6,e,null,n),e.lanes=a,e}function Nm(e){var n=zi(18,null,null,0);return n.stateNode=e,n}function Gf(e,n,a){return n=zi(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Om=new WeakMap;function na(e,n){if(typeof e=="object"&&e!==null){var a=Om.get(e);return a!==void 0?a:(n={value:e,source:n,stack:W(n)},Om.set(e,n),n)}return{value:e,source:n,stack:W(n)}}var $s=[],Js=0,Ec=null,sl=0,ia=[],aa=0,Sr=null,Ta=1,Aa="";function Xa(e,n){$s[Js++]=sl,$s[Js++]=Ec,Ec=e,sl=n}function Pm(e,n,a){ia[aa++]=Ta,ia[aa++]=Aa,ia[aa++]=Sr,Sr=e;var o=Ta;e=Aa;var u=32-qt(o)-1;o&=~(1<<u),a+=1;var f=32-qt(n)+u;if(30<f){var b=u-u%5;f=(o&(1<<b)-1).toString(32),o>>=b,u-=b,Ta=1<<32-qt(n)+u|a<<u|o,Aa=f+e}else Ta=1<<f|a<<u|o,Aa=e}function kf(e){e.return!==null&&(Xa(e,1),Pm(e,1,0))}function Xf(e){for(;e===Ec;)Ec=$s[--Js],$s[Js]=null,sl=$s[--Js],$s[Js]=null;for(;e===Sr;)Sr=ia[--aa],ia[aa]=null,Aa=ia[--aa],ia[aa]=null,Ta=ia[--aa],ia[aa]=null}function Fm(e,n){ia[aa++]=Ta,ia[aa++]=Aa,ia[aa++]=Sr,Ta=n.id,Aa=n.overflow,Sr=e}var ii=null,Sn=null,qe=!1,Mr=null,ra=!1,Wf=Error(r(519));function br(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ol(na(n,e)),Wf}function Im(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[bn]=e,n[Rn]=o,a){case"dialog":Ge("cancel",n),Ge("close",n);break;case"iframe":case"object":case"embed":Ge("load",n);break;case"video":case"audio":for(a=0;a<wl.length;a++)Ge(wl[a],n);break;case"source":Ge("error",n);break;case"img":case"image":case"link":Ge("error",n),Ge("load",n);break;case"details":Ge("toggle",n);break;case"input":Ge("invalid",n),ta(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ge("invalid",n);break;case"textarea":Ge("invalid",n),Hn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||t_(n.textContent,a)?(o.popover!=null&&(Ge("beforetoggle",n),Ge("toggle",n)),o.onScroll!=null&&Ge("scroll",n),o.onScrollEnd!=null&&Ge("scrollend",n),o.onClick!=null&&(n.onclick=Ii),n=!0):n=!1,n||br(e,!0)}function Bm(e){for(ii=e.return;ii;)switch(ii.tag){case 5:case 31:case 13:ra=!1;return;case 27:case 3:ra=!0;return;default:ii=ii.return}}function to(e){if(e!==ii)return!1;if(!qe)return Bm(e),qe=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||cd(e.type,e.memoizedProps)),a=!a),a&&Sn&&br(e),Bm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Sn=c_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Sn=c_(e)}else n===27?(n=Sn,Ir(e.type)?(e=pd,pd=null,Sn=e):Sn=n):Sn=ii?oa(e.stateNode.nextSibling):null;return!0}function gs(){Sn=ii=null,qe=!1}function jf(){var e=Mr;return e!==null&&(Di===null?Di=e:Di.push.apply(Di,e),Mr=null),e}function ol(e){Mr===null?Mr=[e]:Mr.push(e)}var Yf=V(null),_s=null,Wa=null;function Er(e,n,a){Et(Yf,n._currentValue),n._currentValue=a}function ja(e){e._currentValue=Yf.current,ut(Yf)}function qf(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Zf(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var b=u.child;f=f.firstContext;t:for(;f!==null;){var D=f;f=u;for(var X=0;X<n.length;X++)if(D.context===n[X]){f.lanes|=a,D=f.alternate,D!==null&&(D.lanes|=a),qf(f.return,a,e),o||(b=null);break t}f=D.next}}else if(u.tag===18){if(b=u.return,b===null)throw Error(r(341));b.lanes|=a,f=b.alternate,f!==null&&(f.lanes|=a),qf(b,a,e),b=null}else b=u.child;if(b!==null)b.return=u;else for(b=u;b!==null;){if(b===e){b=null;break}if(u=b.sibling,u!==null){u.return=b.return,b=u;break}b=b.return}u=b}}function eo(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var b=u.alternate;if(b===null)throw Error(r(387));if(b=b.memoizedProps,b!==null){var D=u.type;Ot(u.pendingProps.value,b.value)||(e!==null?e.push(D):e=[D])}}else if(u===St.current){if(b=u.alternate,b===null)throw Error(r(387));b.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Ol):e=[Ol])}u=u.return}e!==null&&Zf(n,e,a,o),n.flags|=262144}function Tc(e){for(e=e.firstContext;e!==null;){if(!Ot(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function vs(e){_s=e,Wa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ai(e){return zm(_s,e)}function Ac(e,n){return _s===null&&vs(e),zm(e,n)}function zm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Wa===null){if(e===null)throw Error(r(308));Wa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Wa=Wa.next=n;return a}var kx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Xx=s.unstable_scheduleCallback,Wx=s.unstable_NormalPriority,Vn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Kf(){return{controller:new kx,data:new Map,refCount:0}}function ll(e){e.refCount--,e.refCount===0&&Xx(Wx,function(){e.controller.abort()})}var cl=null,Qf=0,no=0,io=null;function jx(e,n){if(cl===null){var a=cl=[];Qf=0,no=td(),io={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Qf++,n.then(Hm,Hm),n}function Hm(){if(--Qf===0&&cl!==null){io!==null&&(io.status="fulfilled");var e=cl;cl=null,no=0,io=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Yx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Vm=H.S;H.S=function(e,n){Eg=T(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&jx(e,n),Vm!==null&&Vm(e,n)};var xs=V(null);function $f(){var e=xs.current;return e!==null?e:vn.pooledCache}function Rc(e,n){n===null?Et(xs,xs.current):Et(xs,n.pool)}function Gm(){var e=$f();return e===null?null:{parent:Vn._currentValue,pool:e}}var ao=Error(r(460)),Jf=Error(r(474)),Cc=Error(r(542)),wc={then:function(){}};function km(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Xm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ii,Ii),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,jm(e),e;default:if(typeof n.status=="string")n.then(Ii,Ii);else{if(e=vn,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,jm(e),e}throw Ss=n,ao}}function ys(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ss=a,ao):a}}var Ss=null;function Wm(){if(Ss===null)throw Error(r(459));var e=Ss;return Ss=null,e}function jm(e){if(e===ao||e===Cc)throw Error(r(483))}var ro=null,ul=0;function Dc(e){var n=ul;return ul+=1,ro===null&&(ro=[]),Xm(ro,e,n)}function fl(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Uc(e,n){throw n.$$typeof===x?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Ym(e){function n(tt,K){if(e){var ct=tt.deletions;ct===null?(tt.deletions=[K],tt.flags|=16):ct.push(K)}}function a(tt,K){if(!e)return null;for(;K!==null;)n(tt,K),K=K.sibling;return null}function o(tt){for(var K=new Map;tt!==null;)tt.key!==null?K.set(tt.key,tt):K.set(tt.index,tt),tt=tt.sibling;return K}function u(tt,K){return tt=ka(tt,K),tt.index=0,tt.sibling=null,tt}function f(tt,K,ct){return tt.index=ct,e?(ct=tt.alternate,ct!==null?(ct=ct.index,ct<K?(tt.flags|=67108866,K):ct):(tt.flags|=67108866,K)):(tt.flags|=1048576,K)}function b(tt){return e&&tt.alternate===null&&(tt.flags|=67108866),tt}function D(tt,K,ct,Rt){return K===null||K.tag!==6?(K=Vf(ct,tt.mode,Rt),K.return=tt,K):(K=u(K,ct),K.return=tt,K)}function X(tt,K,ct,Rt){var xe=ct.type;return xe===R?Tt(tt,K,ct.props.children,Rt,ct.key):K!==null&&(K.elementType===xe||typeof xe=="object"&&xe!==null&&xe.$$typeof===Z&&ys(xe)===K.type)?(K=u(K,ct.props),fl(K,ct),K.return=tt,K):(K=bc(ct.type,ct.key,ct.props,null,tt.mode,Rt),fl(K,ct),K.return=tt,K)}function ft(tt,K,ct,Rt){return K===null||K.tag!==4||K.stateNode.containerInfo!==ct.containerInfo||K.stateNode.implementation!==ct.implementation?(K=Gf(ct,tt.mode,Rt),K.return=tt,K):(K=u(K,ct.children||[]),K.return=tt,K)}function Tt(tt,K,ct,Rt,xe){return K===null||K.tag!==7?(K=ms(ct,tt.mode,Rt,xe),K.return=tt,K):(K=u(K,ct),K.return=tt,K)}function Dt(tt,K,ct){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return K=Vf(""+K,tt.mode,ct),K.return=tt,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case M:return ct=bc(K.type,K.key,K.props,null,tt.mode,ct),fl(ct,K),ct.return=tt,ct;case A:return K=Gf(K,tt.mode,ct),K.return=tt,K;case Z:return K=ys(K),Dt(tt,K,ct)}if(xt(K)||j(K))return K=ms(K,tt.mode,ct,null),K.return=tt,K;if(typeof K.then=="function")return Dt(tt,Dc(K),ct);if(K.$$typeof===N)return Dt(tt,Ac(tt,K),ct);Uc(tt,K)}return null}function dt(tt,K,ct,Rt){var xe=K!==null?K.key:null;if(typeof ct=="string"&&ct!==""||typeof ct=="number"||typeof ct=="bigint")return xe!==null?null:D(tt,K,""+ct,Rt);if(typeof ct=="object"&&ct!==null){switch(ct.$$typeof){case M:return ct.key===xe?X(tt,K,ct,Rt):null;case A:return ct.key===xe?ft(tt,K,ct,Rt):null;case Z:return ct=ys(ct),dt(tt,K,ct,Rt)}if(xt(ct)||j(ct))return xe!==null?null:Tt(tt,K,ct,Rt,null);if(typeof ct.then=="function")return dt(tt,K,Dc(ct),Rt);if(ct.$$typeof===N)return dt(tt,K,Ac(tt,ct),Rt);Uc(tt,ct)}return null}function gt(tt,K,ct,Rt,xe){if(typeof Rt=="string"&&Rt!==""||typeof Rt=="number"||typeof Rt=="bigint")return tt=tt.get(ct)||null,D(K,tt,""+Rt,xe);if(typeof Rt=="object"&&Rt!==null){switch(Rt.$$typeof){case M:return tt=tt.get(Rt.key===null?ct:Rt.key)||null,X(K,tt,Rt,xe);case A:return tt=tt.get(Rt.key===null?ct:Rt.key)||null,ft(K,tt,Rt,xe);case Z:return Rt=ys(Rt),gt(tt,K,ct,Rt,xe)}if(xt(Rt)||j(Rt))return tt=tt.get(ct)||null,Tt(K,tt,Rt,xe,null);if(typeof Rt.then=="function")return gt(tt,K,ct,Dc(Rt),xe);if(Rt.$$typeof===N)return gt(tt,K,ct,Ac(K,Rt),xe);Uc(K,Rt)}return null}function ue(tt,K,ct,Rt){for(var xe=null,en=null,pe=K,Fe=K=0,Xe=null;pe!==null&&Fe<ct.length;Fe++){pe.index>Fe?(Xe=pe,pe=null):Xe=pe.sibling;var nn=dt(tt,pe,ct[Fe],Rt);if(nn===null){pe===null&&(pe=Xe);break}e&&pe&&nn.alternate===null&&n(tt,pe),K=f(nn,K,Fe),en===null?xe=nn:en.sibling=nn,en=nn,pe=Xe}if(Fe===ct.length)return a(tt,pe),qe&&Xa(tt,Fe),xe;if(pe===null){for(;Fe<ct.length;Fe++)pe=Dt(tt,ct[Fe],Rt),pe!==null&&(K=f(pe,K,Fe),en===null?xe=pe:en.sibling=pe,en=pe);return qe&&Xa(tt,Fe),xe}for(pe=o(pe);Fe<ct.length;Fe++)Xe=gt(pe,tt,Fe,ct[Fe],Rt),Xe!==null&&(e&&Xe.alternate!==null&&pe.delete(Xe.key===null?Fe:Xe.key),K=f(Xe,K,Fe),en===null?xe=Xe:en.sibling=Xe,en=Xe);return e&&pe.forEach(function(Gr){return n(tt,Gr)}),qe&&Xa(tt,Fe),xe}function Se(tt,K,ct,Rt){if(ct==null)throw Error(r(151));for(var xe=null,en=null,pe=K,Fe=K=0,Xe=null,nn=ct.next();pe!==null&&!nn.done;Fe++,nn=ct.next()){pe.index>Fe?(Xe=pe,pe=null):Xe=pe.sibling;var Gr=dt(tt,pe,nn.value,Rt);if(Gr===null){pe===null&&(pe=Xe);break}e&&pe&&Gr.alternate===null&&n(tt,pe),K=f(Gr,K,Fe),en===null?xe=Gr:en.sibling=Gr,en=Gr,pe=Xe}if(nn.done)return a(tt,pe),qe&&Xa(tt,Fe),xe;if(pe===null){for(;!nn.done;Fe++,nn=ct.next())nn=Dt(tt,nn.value,Rt),nn!==null&&(K=f(nn,K,Fe),en===null?xe=nn:en.sibling=nn,en=nn);return qe&&Xa(tt,Fe),xe}for(pe=o(pe);!nn.done;Fe++,nn=ct.next())nn=gt(pe,tt,Fe,nn.value,Rt),nn!==null&&(e&&nn.alternate!==null&&pe.delete(nn.key===null?Fe:nn.key),K=f(nn,K,Fe),en===null?xe=nn:en.sibling=nn,en=nn);return e&&pe.forEach(function(aS){return n(tt,aS)}),qe&&Xa(tt,Fe),xe}function gn(tt,K,ct,Rt){if(typeof ct=="object"&&ct!==null&&ct.type===R&&ct.key===null&&(ct=ct.props.children),typeof ct=="object"&&ct!==null){switch(ct.$$typeof){case M:t:{for(var xe=ct.key;K!==null;){if(K.key===xe){if(xe=ct.type,xe===R){if(K.tag===7){a(tt,K.sibling),Rt=u(K,ct.props.children),Rt.return=tt,tt=Rt;break t}}else if(K.elementType===xe||typeof xe=="object"&&xe!==null&&xe.$$typeof===Z&&ys(xe)===K.type){a(tt,K.sibling),Rt=u(K,ct.props),fl(Rt,ct),Rt.return=tt,tt=Rt;break t}a(tt,K);break}else n(tt,K);K=K.sibling}ct.type===R?(Rt=ms(ct.props.children,tt.mode,Rt,ct.key),Rt.return=tt,tt=Rt):(Rt=bc(ct.type,ct.key,ct.props,null,tt.mode,Rt),fl(Rt,ct),Rt.return=tt,tt=Rt)}return b(tt);case A:t:{for(xe=ct.key;K!==null;){if(K.key===xe)if(K.tag===4&&K.stateNode.containerInfo===ct.containerInfo&&K.stateNode.implementation===ct.implementation){a(tt,K.sibling),Rt=u(K,ct.children||[]),Rt.return=tt,tt=Rt;break t}else{a(tt,K);break}else n(tt,K);K=K.sibling}Rt=Gf(ct,tt.mode,Rt),Rt.return=tt,tt=Rt}return b(tt);case Z:return ct=ys(ct),gn(tt,K,ct,Rt)}if(xt(ct))return ue(tt,K,ct,Rt);if(j(ct)){if(xe=j(ct),typeof xe!="function")throw Error(r(150));return ct=xe.call(ct),Se(tt,K,ct,Rt)}if(typeof ct.then=="function")return gn(tt,K,Dc(ct),Rt);if(ct.$$typeof===N)return gn(tt,K,Ac(tt,ct),Rt);Uc(tt,ct)}return typeof ct=="string"&&ct!==""||typeof ct=="number"||typeof ct=="bigint"?(ct=""+ct,K!==null&&K.tag===6?(a(tt,K.sibling),Rt=u(K,ct),Rt.return=tt,tt=Rt):(a(tt,K),Rt=Vf(ct,tt.mode,Rt),Rt.return=tt,tt=Rt),b(tt)):a(tt,K)}return function(tt,K,ct,Rt){try{ul=0;var xe=gn(tt,K,ct,Rt);return ro=null,xe}catch(pe){if(pe===ao||pe===Cc)throw pe;var en=zi(29,pe,null,tt.mode);return en.lanes=Rt,en.return=tt,en}}}var Ms=Ym(!0),qm=Ym(!1),Tr=!1;function th(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function eh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ar(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Rr(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ln&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Mc(e),Um(e,null,a),n}return Sc(e,o,n,a),Mc(e)}function hl(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ts(e,a)}}function nh(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var b={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=b:f=f.next=b,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var ih=!1;function dl(){if(ih){var e=io;if(e!==null)throw e}}function pl(e,n,a,o){ih=!1;var u=e.updateQueue;Tr=!1;var f=u.firstBaseUpdate,b=u.lastBaseUpdate,D=u.shared.pending;if(D!==null){u.shared.pending=null;var X=D,ft=X.next;X.next=null,b===null?f=ft:b.next=ft,b=X;var Tt=e.alternate;Tt!==null&&(Tt=Tt.updateQueue,D=Tt.lastBaseUpdate,D!==b&&(D===null?Tt.firstBaseUpdate=ft:D.next=ft,Tt.lastBaseUpdate=X))}if(f!==null){var Dt=u.baseState;b=0,Tt=ft=X=null,D=f;do{var dt=D.lane&-536870913,gt=dt!==D.lane;if(gt?(ke&dt)===dt:(o&dt)===dt){dt!==0&&dt===no&&(ih=!0),Tt!==null&&(Tt=Tt.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});t:{var ue=e,Se=D;dt=n;var gn=a;switch(Se.tag){case 1:if(ue=Se.payload,typeof ue=="function"){Dt=ue.call(gn,Dt,dt);break t}Dt=ue;break t;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=Se.payload,dt=typeof ue=="function"?ue.call(gn,Dt,dt):ue,dt==null)break t;Dt=_({},Dt,dt);break t;case 2:Tr=!0}}dt=D.callback,dt!==null&&(e.flags|=64,gt&&(e.flags|=8192),gt=u.callbacks,gt===null?u.callbacks=[dt]:gt.push(dt))}else gt={lane:dt,tag:D.tag,payload:D.payload,callback:D.callback,next:null},Tt===null?(ft=Tt=gt,X=Dt):Tt=Tt.next=gt,b|=dt;if(D=D.next,D===null){if(D=u.shared.pending,D===null)break;gt=D,D=gt.next,gt.next=null,u.lastBaseUpdate=gt,u.shared.pending=null}}while(!0);Tt===null&&(X=Dt),u.baseState=X,u.firstBaseUpdate=ft,u.lastBaseUpdate=Tt,f===null&&(u.shared.lanes=0),Lr|=b,e.lanes=b,e.memoizedState=Dt}}function Zm(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Km(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Zm(a[e],n)}var so=V(null),Lc=V(0);function Qm(e,n){e=er,Et(Lc,e),Et(so,n),er=e|n.baseLanes}function ah(){Et(Lc,er),Et(so,so.current)}function rh(){er=Lc.current,ut(so),ut(Lc)}var Hi=V(null),sa=null;function Cr(e){var n=e.alternate;Et(Fn,Fn.current&1),Et(Hi,e),sa===null&&(n===null||so.current!==null||n.memoizedState!==null)&&(sa=e)}function sh(e){Et(Fn,Fn.current),Et(Hi,e),sa===null&&(sa=e)}function $m(e){e.tag===22?(Et(Fn,Fn.current),Et(Hi,e),sa===null&&(sa=e)):wr()}function wr(){Et(Fn,Fn.current),Et(Hi,Hi.current)}function Vi(e){ut(Hi),sa===e&&(sa=null),ut(Fn)}var Fn=V(0);function Nc(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||hd(a)||dd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ya=0,Pe=null,pn=null,Gn=null,Oc=!1,oo=!1,bs=!1,Pc=0,ml=0,lo=null,qx=0;function Un(){throw Error(r(321))}function oh(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Ot(e[a],n[a]))return!1;return!0}function lh(e,n,a,o,u,f){return Ya=f,Pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,H.H=e===null||e.memoizedState===null?P0:bh,bs=!1,f=a(o,u),bs=!1,oo&&(f=t0(n,a,o,u)),Jm(e),f}function Jm(e){H.H=vl;var n=pn!==null&&pn.next!==null;if(Ya=0,Gn=pn=Pe=null,Oc=!1,ml=0,lo=null,n)throw Error(r(300));e===null||kn||(e=e.dependencies,e!==null&&Tc(e)&&(kn=!0))}function t0(e,n,a,o){Pe=e;var u=0;do{if(oo&&(lo=null),ml=0,oo=!1,25<=u)throw Error(r(301));if(u+=1,Gn=pn=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}H.H=F0,f=n(a,o)}while(oo);return f}function Zx(){var e=H.H,n=e.useState()[0];return n=typeof n.then=="function"?gl(n):n,e=e.useState()[0],(pn!==null?pn.memoizedState:null)!==e&&(Pe.flags|=1024),n}function ch(){var e=Pc!==0;return Pc=0,e}function uh(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function fh(e){if(Oc){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Oc=!1}Ya=0,Gn=pn=Pe=null,oo=!1,ml=Pc=0,lo=null}function _i(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gn===null?Pe.memoizedState=Gn=e:Gn=Gn.next=e,Gn}function In(){if(pn===null){var e=Pe.alternate;e=e!==null?e.memoizedState:null}else e=pn.next;var n=Gn===null?Pe.memoizedState:Gn.next;if(n!==null)Gn=n,pn=e;else{if(e===null)throw Pe.alternate===null?Error(r(467)):Error(r(310));pn=e,e={memoizedState:pn.memoizedState,baseState:pn.baseState,baseQueue:pn.baseQueue,queue:pn.queue,next:null},Gn===null?Pe.memoizedState=Gn=e:Gn=Gn.next=e}return Gn}function Fc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function gl(e){var n=ml;return ml+=1,lo===null&&(lo=[]),e=Xm(lo,e,n),n=Pe,(Gn===null?n.memoizedState:Gn.next)===null&&(n=n.alternate,H.H=n===null||n.memoizedState===null?P0:bh),e}function Ic(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return gl(e);if(e.$$typeof===N)return ai(e)}throw Error(r(438,String(e)))}function hh(e){var n=null,a=Pe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Pe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Fc(),Pe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=U;return n.index++,a}function qa(e,n){return typeof n=="function"?n(e):n}function Bc(e){var n=In();return dh(n,pn,e)}function dh(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var b=u.next;u.next=f.next,f.next=b}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var D=b=null,X=null,ft=n,Tt=!1;do{var Dt=ft.lane&-536870913;if(Dt!==ft.lane?(ke&Dt)===Dt:(Ya&Dt)===Dt){var dt=ft.revertLane;if(dt===0)X!==null&&(X=X.next={lane:0,revertLane:0,gesture:null,action:ft.action,hasEagerState:ft.hasEagerState,eagerState:ft.eagerState,next:null}),Dt===no&&(Tt=!0);else if((Ya&dt)===dt){ft=ft.next,dt===no&&(Tt=!0);continue}else Dt={lane:0,revertLane:ft.revertLane,gesture:null,action:ft.action,hasEagerState:ft.hasEagerState,eagerState:ft.eagerState,next:null},X===null?(D=X=Dt,b=f):X=X.next=Dt,Pe.lanes|=dt,Lr|=dt;Dt=ft.action,bs&&a(f,Dt),f=ft.hasEagerState?ft.eagerState:a(f,Dt)}else dt={lane:Dt,revertLane:ft.revertLane,gesture:ft.gesture,action:ft.action,hasEagerState:ft.hasEagerState,eagerState:ft.eagerState,next:null},X===null?(D=X=dt,b=f):X=X.next=dt,Pe.lanes|=Dt,Lr|=Dt;ft=ft.next}while(ft!==null&&ft!==n);if(X===null?b=f:X.next=D,!Ot(f,e.memoizedState)&&(kn=!0,Tt&&(a=io,a!==null)))throw a;e.memoizedState=f,e.baseState=b,e.baseQueue=X,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function ph(e){var n=In(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var b=u=u.next;do f=e(f,b.action),b=b.next;while(b!==u);Ot(f,n.memoizedState)||(kn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function e0(e,n,a){var o=Pe,u=In(),f=qe;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var b=!Ot((pn||u).memoizedState,a);if(b&&(u.memoizedState=a,kn=!0),u=u.queue,_h(a0.bind(null,o,u,e),[e]),u.getSnapshot!==n||b||Gn!==null&&Gn.memoizedState.tag&1){if(o.flags|=2048,co(9,{destroy:void 0},i0.bind(null,o,u,a,n),null),vn===null)throw Error(r(349));f||(Ya&127)!==0||n0(o,n,a)}return a}function n0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Pe.updateQueue,n===null?(n=Fc(),Pe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function i0(e,n,a,o){n.value=a,n.getSnapshot=o,r0(n)&&s0(e)}function a0(e,n,a){return a(function(){r0(n)&&s0(e)})}function r0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Ot(e,a)}catch{return!0}}function s0(e){var n=ps(e,2);n!==null&&Ui(n,e,2)}function mh(e){var n=_i();if(typeof e=="function"){var a=e;if(e=a(),bs){Jt(!0);try{a()}finally{Jt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:e},n}function o0(e,n,a,o){return e.baseState=a,dh(e,pn,typeof o=="function"?o:qa)}function Kx(e,n,a,o,u){if(Vc(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){f.listeners.push(b)}};H.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,l0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function l0(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=H.T,b={};H.T=b;try{var D=a(u,o),X=H.S;X!==null&&X(b,D),c0(e,n,D)}catch(ft){gh(e,n,ft)}finally{f!==null&&b.types!==null&&(f.types=b.types),H.T=f}}else try{f=a(u,o),c0(e,n,f)}catch(ft){gh(e,n,ft)}}function c0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){u0(e,n,o)},function(o){return gh(e,n,o)}):u0(e,n,a)}function u0(e,n,a){n.status="fulfilled",n.value=a,f0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,l0(e,a)))}function gh(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,f0(n),n=n.next;while(n!==o)}e.action=null}function f0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function h0(e,n){return n}function d0(e,n){if(qe){var a=vn.formState;if(a!==null){t:{var o=Pe;if(qe){if(Sn){e:{for(var u=Sn,f=ra;u.nodeType!==8;){if(!f){u=null;break e}if(u=oa(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Sn=oa(u.nextSibling),o=u.data==="F!";break t}}br(o)}o=!1}o&&(n=a[0])}}return a=_i(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:h0,lastRenderedState:n},a.queue=o,a=L0.bind(null,Pe,o),o.dispatch=a,o=mh(!1),f=Mh.bind(null,Pe,!1,o.queue),o=_i(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Kx.bind(null,Pe,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function p0(e){var n=In();return m0(n,pn,e)}function m0(e,n,a){if(n=dh(e,n,h0)[0],e=Bc(qa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=gl(n)}catch(b){throw b===ao?Cc:b}else o=n;n=In();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(Pe.flags|=2048,co(9,{destroy:void 0},Qx.bind(null,u,a),null)),[o,f,e]}function Qx(e,n){e.action=n}function g0(e){var n=In(),a=pn;if(a!==null)return m0(n,a,e);In(),n=n.memoizedState,a=In();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function co(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=Pe.updateQueue,n===null&&(n=Fc(),Pe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function _0(){return In().memoizedState}function zc(e,n,a,o){var u=_i();Pe.flags|=e,u.memoizedState=co(1|n,{destroy:void 0},a,o===void 0?null:o)}function Hc(e,n,a,o){var u=In();o=o===void 0?null:o;var f=u.memoizedState.inst;pn!==null&&o!==null&&oh(o,pn.memoizedState.deps)?u.memoizedState=co(n,f,a,o):(Pe.flags|=e,u.memoizedState=co(1|n,f,a,o))}function v0(e,n){zc(8390656,8,e,n)}function _h(e,n){Hc(2048,8,e,n)}function $x(e){Pe.flags|=4;var n=Pe.updateQueue;if(n===null)n=Fc(),Pe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function x0(e){var n=In().memoizedState;return $x({ref:n,nextImpl:e}),function(){if((ln&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function y0(e,n){return Hc(4,2,e,n)}function S0(e,n){return Hc(4,4,e,n)}function M0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function b0(e,n,a){a=a!=null?a.concat([e]):null,Hc(4,4,M0.bind(null,n,e),a)}function vh(){}function E0(e,n){var a=In();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&oh(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function T0(e,n){var a=In();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&oh(n,o[1]))return o[0];if(o=e(),bs){Jt(!0);try{e()}finally{Jt(!1)}}return a.memoizedState=[o,n],o}function xh(e,n,a){return a===void 0||(Ya&1073741824)!==0&&(ke&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Ag(),Pe.lanes|=e,Lr|=e,a)}function A0(e,n,a,o){return Ot(a,n)?a:so.current!==null?(e=xh(e,a,o),Ot(e,n)||(kn=!0),e):(Ya&42)===0||(Ya&1073741824)!==0&&(ke&261930)===0?(kn=!0,e.memoizedState=a):(e=Ag(),Pe.lanes|=e,Lr|=e,n)}function R0(e,n,a,o,u){var f=Y.p;Y.p=f!==0&&8>f?f:8;var b=H.T,D={};H.T=D,Mh(e,!1,n,a);try{var X=u(),ft=H.S;if(ft!==null&&ft(D,X),X!==null&&typeof X=="object"&&typeof X.then=="function"){var Tt=Yx(X,o);_l(e,n,Tt,Xi(e))}else _l(e,n,o,Xi(e))}catch(Dt){_l(e,n,{then:function(){},status:"rejected",reason:Dt},Xi())}finally{Y.p=f,b!==null&&D.types!==null&&(b.types=D.types),H.T=b}}function Jx(){}function yh(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=C0(e).queue;R0(e,u,n,st,a===null?Jx:function(){return w0(e),a(o)})}function C0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:st,baseState:st,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:st},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function w0(e){var n=C0(e);n.next===null&&(n=e.alternate.memoizedState),_l(e,n.next.queue,{},Xi())}function Sh(){return ai(Ol)}function D0(){return In().memoizedState}function U0(){return In().memoizedState}function ty(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Xi();e=Ar(a);var o=Rr(n,e,a);o!==null&&(Ui(o,n,a),hl(o,n,a)),n={cache:Kf()},e.payload=n;return}n=n.return}}function ey(e,n,a){var o=Xi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Vc(e)?N0(n,a):(a=zf(e,n,a,o),a!==null&&(Ui(a,e,o),O0(a,n,o)))}function L0(e,n,a){var o=Xi();_l(e,n,a,o)}function _l(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vc(e))N0(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var b=n.lastRenderedState,D=f(b,a);if(u.hasEagerState=!0,u.eagerState=D,Ot(D,b))return Sc(e,n,u,0),vn===null&&yc(),!1}catch{}if(a=zf(e,n,u,o),a!==null)return Ui(a,e,o),O0(a,n,o),!0}return!1}function Mh(e,n,a,o){if(o={lane:2,revertLane:td(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Vc(e)){if(n)throw Error(r(479))}else n=zf(e,a,o,2),n!==null&&Ui(n,e,2)}function Vc(e){var n=e.alternate;return e===Pe||n!==null&&n===Pe}function N0(e,n){oo=Oc=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function O0(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ts(e,a)}}var vl={readContext:ai,use:Ic,useCallback:Un,useContext:Un,useEffect:Un,useImperativeHandle:Un,useLayoutEffect:Un,useInsertionEffect:Un,useMemo:Un,useReducer:Un,useRef:Un,useState:Un,useDebugValue:Un,useDeferredValue:Un,useTransition:Un,useSyncExternalStore:Un,useId:Un,useHostTransitionStatus:Un,useFormState:Un,useActionState:Un,useOptimistic:Un,useMemoCache:Un,useCacheRefresh:Un};vl.useEffectEvent=Un;var P0={readContext:ai,use:Ic,useCallback:function(e,n){return _i().memoizedState=[e,n===void 0?null:n],e},useContext:ai,useEffect:v0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,zc(4194308,4,M0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return zc(4194308,4,e,n)},useInsertionEffect:function(e,n){zc(4,2,e,n)},useMemo:function(e,n){var a=_i();n=n===void 0?null:n;var o=e();if(bs){Jt(!0);try{e()}finally{Jt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=_i();if(a!==void 0){var u=a(n);if(bs){Jt(!0);try{a(n)}finally{Jt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=ey.bind(null,Pe,e),[o.memoizedState,e]},useRef:function(e){var n=_i();return e={current:e},n.memoizedState=e},useState:function(e){e=mh(e);var n=e.queue,a=L0.bind(null,Pe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:vh,useDeferredValue:function(e,n){var a=_i();return xh(a,e,n)},useTransition:function(){var e=mh(!1);return e=R0.bind(null,Pe,e.queue,!0,!1),_i().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=Pe,u=_i();if(qe){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),vn===null)throw Error(r(349));(ke&127)!==0||n0(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,v0(a0.bind(null,o,f,e),[e]),o.flags|=2048,co(9,{destroy:void 0},i0.bind(null,o,f,a,n),null),a},useId:function(){var e=_i(),n=vn.identifierPrefix;if(qe){var a=Aa,o=Ta;a=(o&~(1<<32-qt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Pc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=qx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Sh,useFormState:d0,useActionState:d0,useOptimistic:function(e){var n=_i();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Mh.bind(null,Pe,!0,a),a.dispatch=n,[e,n]},useMemoCache:hh,useCacheRefresh:function(){return _i().memoizedState=ty.bind(null,Pe)},useEffectEvent:function(e){var n=_i(),a={impl:e};return n.memoizedState=a,function(){if((ln&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},bh={readContext:ai,use:Ic,useCallback:E0,useContext:ai,useEffect:_h,useImperativeHandle:b0,useInsertionEffect:y0,useLayoutEffect:S0,useMemo:T0,useReducer:Bc,useRef:_0,useState:function(){return Bc(qa)},useDebugValue:vh,useDeferredValue:function(e,n){var a=In();return A0(a,pn.memoizedState,e,n)},useTransition:function(){var e=Bc(qa)[0],n=In().memoizedState;return[typeof e=="boolean"?e:gl(e),n]},useSyncExternalStore:e0,useId:D0,useHostTransitionStatus:Sh,useFormState:p0,useActionState:p0,useOptimistic:function(e,n){var a=In();return o0(a,pn,e,n)},useMemoCache:hh,useCacheRefresh:U0};bh.useEffectEvent=x0;var F0={readContext:ai,use:Ic,useCallback:E0,useContext:ai,useEffect:_h,useImperativeHandle:b0,useInsertionEffect:y0,useLayoutEffect:S0,useMemo:T0,useReducer:ph,useRef:_0,useState:function(){return ph(qa)},useDebugValue:vh,useDeferredValue:function(e,n){var a=In();return pn===null?xh(a,e,n):A0(a,pn.memoizedState,e,n)},useTransition:function(){var e=ph(qa)[0],n=In().memoizedState;return[typeof e=="boolean"?e:gl(e),n]},useSyncExternalStore:e0,useId:D0,useHostTransitionStatus:Sh,useFormState:g0,useActionState:g0,useOptimistic:function(e,n){var a=In();return pn!==null?o0(a,pn,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:hh,useCacheRefresh:U0};F0.useEffectEvent=x0;function Eh(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Th={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Xi(),u=Ar(o);u.payload=n,a!=null&&(u.callback=a),n=Rr(e,u,o),n!==null&&(Ui(n,e,o),hl(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Xi(),u=Ar(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Rr(e,u,o),n!==null&&(Ui(n,e,o),hl(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Xi(),o=Ar(a);o.tag=2,n!=null&&(o.callback=n),n=Rr(e,o,a),n!==null&&(Ui(n,e,a),hl(n,e,a))}};function I0(e,n,a,o,u,f,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,b):n.prototype&&n.prototype.isPureReactComponent?!Xt(a,o)||!Xt(u,f):!0}function B0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Th.enqueueReplaceState(n,n.state,null)}function Es(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function z0(e){xc(e)}function H0(e){console.error(e)}function V0(e){xc(e)}function Gc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function G0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ah(e,n,a){return a=Ar(a),a.tag=3,a.payload={element:null},a.callback=function(){Gc(e,n)},a}function k0(e){return e=Ar(e),e.tag=3,e}function X0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){G0(n,a,o)}}var b=a.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(e.callback=function(){G0(n,a,o),typeof u!="function"&&(Nr===null?Nr=new Set([this]):Nr.add(this));var D=o.stack;this.componentDidCatch(o.value,{componentStack:D!==null?D:""})})}function ny(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&eo(n,a,u,!0),a=Hi.current,a!==null){switch(a.tag){case 31:case 13:return sa===null?tu():a.alternate===null&&Ln===0&&(Ln=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===wc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Qh(e,o,u)),!1;case 22:return a.flags|=65536,o===wc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Qh(e,o,u)),!1}throw Error(r(435,a.tag))}return Qh(e,o,u),tu(),!1}if(qe)return n=Hi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Wf&&(e=Error(r(422),{cause:o}),ol(na(e,a)))):(o!==Wf&&(n=Error(r(423),{cause:o}),ol(na(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=na(o,a),u=Ah(e.stateNode,o,u),nh(e,u),Ln!==4&&(Ln=2)),!1;var f=Error(r(520),{cause:o});if(f=na(f,a),Al===null?Al=[f]:Al.push(f),Ln!==4&&(Ln=2),n===null)return!0;o=na(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Ah(a.stateNode,o,e),nh(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Nr===null||!Nr.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=k0(u),X0(u,e,a,o),nh(a,u),!1}a=a.return}while(a!==null);return!1}var Rh=Error(r(461)),kn=!1;function ri(e,n,a,o){n.child=e===null?qm(n,null,a,o):Ms(n,e.child,a,o)}function W0(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var b={};for(var D in o)D!=="ref"&&(b[D]=o[D])}else b=o;return vs(n),o=lh(e,n,a,b,f,u),D=ch(),e!==null&&!kn?(uh(e,n,u),Za(e,n,u)):(qe&&D&&kf(n),n.flags|=1,ri(e,n,o,u),n.child)}function j0(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Hf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Y0(e,n,f,o,u)):(e=bc(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Ph(e,u)){var b=f.memoizedProps;if(a=a.compare,a=a!==null?a:Xt,a(b,o)&&e.ref===n.ref)return Za(e,n,u)}return n.flags|=1,e=ka(f,o),e.ref=n.ref,e.return=n,n.child=e}function Y0(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(Xt(f,o)&&e.ref===n.ref)if(kn=!1,n.pendingProps=o=f,Ph(e,u))(e.flags&131072)!==0&&(kn=!0);else return n.lanes=e.lanes,Za(e,n,u)}return Ch(e,n,a,o,u)}function q0(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return Z0(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Rc(n,f!==null?f.cachePool:null),f!==null?Qm(n,f):ah(),$m(n);else return o=n.lanes=536870912,Z0(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Rc(n,f.cachePool),Qm(n,f),wr(),n.memoizedState=null):(e!==null&&Rc(n,null),ah(),wr());return ri(e,n,u,a),n.child}function xl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Z0(e,n,a,o,u){var f=$f();return f=f===null?null:{parent:Vn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Rc(n,null),ah(),$m(n),e!==null&&eo(e,n,o,!0),n.childLanes=u,null}function kc(e,n){return n=Wc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function K0(e,n,a){return Ms(n,e.child,null,a),e=kc(n,n.pendingProps),e.flags|=2,Vi(n),n.memoizedState=null,e}function iy(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(qe){if(o.mode==="hidden")return e=kc(n,o),n.lanes=536870912,xl(null,e);if(sh(n),(e=Sn)?(e=l_(e,ra),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Sr!==null?{id:Ta,overflow:Aa}:null,retryLane:536870912,hydrationErrors:null},a=Nm(e),a.return=n,n.child=a,ii=n,Sn=null)):e=null,e===null)throw br(n);return n.lanes=536870912,null}return kc(n,o)}var f=e.memoizedState;if(f!==null){var b=f.dehydrated;if(sh(n),u)if(n.flags&256)n.flags&=-257,n=K0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(kn||eo(e,n,a,!1),u=(a&e.childLanes)!==0,kn||u){if(o=vn,o!==null&&(b=Ba(o,a),b!==0&&b!==f.retryLane))throw f.retryLane=b,ps(e,b),Ui(o,e,b),Rh;tu(),n=K0(e,n,a)}else e=f.treeContext,Sn=oa(b.nextSibling),ii=n,qe=!0,Mr=null,ra=!1,e!==null&&Fm(n,e),n=kc(n,o),n.flags|=4096;return n}return e=ka(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Xc(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Ch(e,n,a,o,u){return vs(n),a=lh(e,n,a,o,void 0,u),o=ch(),e!==null&&!kn?(uh(e,n,u),Za(e,n,u)):(qe&&o&&kf(n),n.flags|=1,ri(e,n,a,u),n.child)}function Q0(e,n,a,o,u,f){return vs(n),n.updateQueue=null,a=t0(n,o,a,u),Jm(e),o=ch(),e!==null&&!kn?(uh(e,n,f),Za(e,n,f)):(qe&&o&&kf(n),n.flags|=1,ri(e,n,a,f),n.child)}function $0(e,n,a,o,u){if(vs(n),n.stateNode===null){var f=Qs,b=a.contextType;typeof b=="object"&&b!==null&&(f=ai(b)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Th,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},th(n),b=a.contextType,f.context=typeof b=="object"&&b!==null?ai(b):Qs,f.state=n.memoizedState,b=a.getDerivedStateFromProps,typeof b=="function"&&(Eh(n,a,b,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(b=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),b!==f.state&&Th.enqueueReplaceState(f,f.state,null),pl(n,o,f,u),dl(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var D=n.memoizedProps,X=Es(a,D);f.props=X;var ft=f.context,Tt=a.contextType;b=Qs,typeof Tt=="object"&&Tt!==null&&(b=ai(Tt));var Dt=a.getDerivedStateFromProps;Tt=typeof Dt=="function"||typeof f.getSnapshotBeforeUpdate=="function",D=n.pendingProps!==D,Tt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(D||ft!==b)&&B0(n,f,o,b),Tr=!1;var dt=n.memoizedState;f.state=dt,pl(n,o,f,u),dl(),ft=n.memoizedState,D||dt!==ft||Tr?(typeof Dt=="function"&&(Eh(n,a,Dt,o),ft=n.memoizedState),(X=Tr||I0(n,a,X,o,dt,ft,b))?(Tt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ft),f.props=o,f.state=ft,f.context=b,o=X):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,eh(e,n),b=n.memoizedProps,Tt=Es(a,b),f.props=Tt,Dt=n.pendingProps,dt=f.context,ft=a.contextType,X=Qs,typeof ft=="object"&&ft!==null&&(X=ai(ft)),D=a.getDerivedStateFromProps,(ft=typeof D=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b!==Dt||dt!==X)&&B0(n,f,o,X),Tr=!1,dt=n.memoizedState,f.state=dt,pl(n,o,f,u),dl();var gt=n.memoizedState;b!==Dt||dt!==gt||Tr||e!==null&&e.dependencies!==null&&Tc(e.dependencies)?(typeof D=="function"&&(Eh(n,a,D,o),gt=n.memoizedState),(Tt=Tr||I0(n,a,Tt,o,dt,gt,X)||e!==null&&e.dependencies!==null&&Tc(e.dependencies))?(ft||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,gt,X),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,gt,X)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||b===e.memoizedProps&&dt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&dt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=gt),f.props=o,f.state=gt,f.context=X,o=Tt):(typeof f.componentDidUpdate!="function"||b===e.memoizedProps&&dt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&dt===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Xc(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Ms(n,e.child,null,u),n.child=Ms(n,null,a,u)):ri(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Za(e,n,u),e}function J0(e,n,a,o){return gs(),n.flags|=256,ri(e,n,a,o),n.child}var wh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Dh(e){return{baseLanes:e,cachePool:Gm()}}function Uh(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ki),e}function tg(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,b;if((b=f)||(b=e!==null&&e.memoizedState===null?!1:(Fn.current&2)!==0),b&&(u=!0,n.flags&=-129),b=(n.flags&32)!==0,n.flags&=-33,e===null){if(qe){if(u?Cr(n):wr(),(e=Sn)?(e=l_(e,ra),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Sr!==null?{id:Ta,overflow:Aa}:null,retryLane:536870912,hydrationErrors:null},a=Nm(e),a.return=n,n.child=a,ii=n,Sn=null)):e=null,e===null)throw br(n);return dd(e)?n.lanes=32:n.lanes=536870912,null}var D=o.children;return o=o.fallback,u?(wr(),u=n.mode,D=Wc({mode:"hidden",children:D},u),o=ms(o,u,a,null),D.return=n,o.return=n,D.sibling=o,n.child=D,o=n.child,o.memoizedState=Dh(a),o.childLanes=Uh(e,b,a),n.memoizedState=wh,xl(null,o)):(Cr(n),Lh(n,D))}var X=e.memoizedState;if(X!==null&&(D=X.dehydrated,D!==null)){if(f)n.flags&256?(Cr(n),n.flags&=-257,n=Nh(e,n,a)):n.memoizedState!==null?(wr(),n.child=e.child,n.flags|=128,n=null):(wr(),D=o.fallback,u=n.mode,o=Wc({mode:"visible",children:o.children},u),D=ms(D,u,a,null),D.flags|=2,o.return=n,D.return=n,o.sibling=D,n.child=o,Ms(n,e.child,null,a),o=n.child,o.memoizedState=Dh(a),o.childLanes=Uh(e,b,a),n.memoizedState=wh,n=xl(null,o));else if(Cr(n),dd(D)){if(b=D.nextSibling&&D.nextSibling.dataset,b)var ft=b.dgst;b=ft,o=Error(r(419)),o.stack="",o.digest=b,ol({value:o,source:null,stack:null}),n=Nh(e,n,a)}else if(kn||eo(e,n,a,!1),b=(a&e.childLanes)!==0,kn||b){if(b=vn,b!==null&&(o=Ba(b,a),o!==0&&o!==X.retryLane))throw X.retryLane=o,ps(e,o),Ui(b,e,o),Rh;hd(D)||tu(),n=Nh(e,n,a)}else hd(D)?(n.flags|=192,n.child=e.child,n=null):(e=X.treeContext,Sn=oa(D.nextSibling),ii=n,qe=!0,Mr=null,ra=!1,e!==null&&Fm(n,e),n=Lh(n,o.children),n.flags|=4096);return n}return u?(wr(),D=o.fallback,u=n.mode,X=e.child,ft=X.sibling,o=ka(X,{mode:"hidden",children:o.children}),o.subtreeFlags=X.subtreeFlags&65011712,ft!==null?D=ka(ft,D):(D=ms(D,u,a,null),D.flags|=2),D.return=n,o.return=n,o.sibling=D,n.child=o,xl(null,o),o=n.child,D=e.child.memoizedState,D===null?D=Dh(a):(u=D.cachePool,u!==null?(X=Vn._currentValue,u=u.parent!==X?{parent:X,pool:X}:u):u=Gm(),D={baseLanes:D.baseLanes|a,cachePool:u}),o.memoizedState=D,o.childLanes=Uh(e,b,a),n.memoizedState=wh,xl(e.child,o)):(Cr(n),a=e.child,e=a.sibling,a=ka(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(b=n.deletions,b===null?(n.deletions=[e],n.flags|=16):b.push(e)),n.child=a,n.memoizedState=null,a)}function Lh(e,n){return n=Wc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Wc(e,n){return e=zi(22,e,null,n),e.lanes=0,e}function Nh(e,n,a){return Ms(n,e.child,null,a),e=Lh(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function eg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),qf(e.return,n,a)}function Oh(e,n,a,o,u,f){var b=e.memoizedState;b===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(b.isBackwards=n,b.rendering=null,b.renderingStartTime=0,b.last=o,b.tail=a,b.tailMode=u,b.treeForkCount=f)}function ng(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var b=Fn.current,D=(b&2)!==0;if(D?(b=b&1|2,n.flags|=128):b&=1,Et(Fn,b),ri(e,n,o,a),o=qe?sl:0,!D&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&eg(e,a,n);else if(e.tag===19)eg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Nc(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Oh(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Nc(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Oh(n,!0,a,null,f,o);break;case"together":Oh(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Za(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Lr|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(eo(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=ka(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ka(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Ph(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Tc(e)))}function ay(e,n,a){switch(n.tag){case 3:kt(n,n.stateNode.containerInfo),Er(n,Vn,e.memoizedState.cache),gs();break;case 27:case 5:ae(n);break;case 4:kt(n,n.stateNode.containerInfo);break;case 10:Er(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,sh(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Cr(n),n.flags|=128,null):(a&n.child.childLanes)!==0?tg(e,n,a):(Cr(n),e=Za(e,n,a),e!==null?e.sibling:null);Cr(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(eo(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return ng(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Et(Fn,Fn.current),o)break;return null;case 22:return n.lanes=0,q0(e,n,a,n.pendingProps);case 24:Er(n,Vn,e.memoizedState.cache)}return Za(e,n,a)}function ig(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)kn=!0;else{if(!Ph(e,a)&&(n.flags&128)===0)return kn=!1,ay(e,n,a);kn=(e.flags&131072)!==0}else kn=!1,qe&&(n.flags&1048576)!==0&&Pm(n,sl,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=ys(n.elementType),n.type=e,typeof e=="function")Hf(e)?(o=Es(e,o),n.tag=1,n=$0(null,n,e,o,a)):(n.tag=0,n=Ch(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===O){n.tag=11,n=W0(null,n,e,o,a);break t}else if(u===F){n.tag=14,n=j0(null,n,e,o,a);break t}}throw n=pt(e)||e,Error(r(306,n,""))}}return n;case 0:return Ch(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Es(o,n.pendingProps),$0(e,n,o,u,a);case 3:t:{if(kt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,eh(e,n),pl(n,o,null,a);var b=n.memoizedState;if(o=b.cache,Er(n,Vn,o),o!==f.cache&&Zf(n,[Vn],a,!0),dl(),o=b.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:b.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=J0(e,n,o,a);break t}else if(o!==u){u=na(Error(r(424)),n),ol(u),n=J0(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Sn=oa(e.firstChild),ii=n,qe=!0,Mr=null,ra=!0,a=qm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(gs(),o===u){n=Za(e,n,a);break t}ri(e,n,o,a)}n=n.child}return n;case 26:return Xc(e,n),e===null?(a=p_(n.type,null,n.pendingProps,null))?n.memoizedState=a:qe||(a=n.type,e=n.pendingProps,o=ou(lt.current).createElement(a),o[bn]=n,o[Rn]=e,si(o,a,e),w(o),n.stateNode=o):n.memoizedState=p_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ae(n),e===null&&qe&&(o=n.stateNode=f_(n.type,n.pendingProps,lt.current),ii=n,ra=!0,u=Sn,Ir(n.type)?(pd=u,Sn=oa(o.firstChild)):Sn=u),ri(e,n,n.pendingProps.children,a),Xc(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&qe&&((u=o=Sn)&&(o=Oy(o,n.type,n.pendingProps,ra),o!==null?(n.stateNode=o,ii=n,Sn=oa(o.firstChild),ra=!1,u=!0):u=!1),u||br(n)),ae(n),u=n.type,f=n.pendingProps,b=e!==null?e.memoizedProps:null,o=f.children,cd(u,f)?o=null:b!==null&&cd(u,b)&&(n.flags|=32),n.memoizedState!==null&&(u=lh(e,n,Zx,null,null,a),Ol._currentValue=u),Xc(e,n),ri(e,n,o,a),n.child;case 6:return e===null&&qe&&((e=a=Sn)&&(a=Py(a,n.pendingProps,ra),a!==null?(n.stateNode=a,ii=n,Sn=null,e=!0):e=!1),e||br(n)),null;case 13:return tg(e,n,a);case 4:return kt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ms(n,null,o,a):ri(e,n,o,a),n.child;case 11:return W0(e,n,n.type,n.pendingProps,a);case 7:return ri(e,n,n.pendingProps,a),n.child;case 8:return ri(e,n,n.pendingProps.children,a),n.child;case 12:return ri(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Er(n,n.type,o.value),ri(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,vs(n),u=ai(u),o=o(u),n.flags|=1,ri(e,n,o,a),n.child;case 14:return j0(e,n,n.type,n.pendingProps,a);case 15:return Y0(e,n,n.type,n.pendingProps,a);case 19:return ng(e,n,a);case 31:return iy(e,n,a);case 22:return q0(e,n,a,n.pendingProps);case 24:return vs(n),o=ai(Vn),e===null?(u=$f(),u===null&&(u=vn,f=Kf(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},th(n),Er(n,Vn,u)):((e.lanes&a)!==0&&(eh(e,n),pl(n,null,null,a),dl()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Er(n,Vn,o)):(o=f.cache,Er(n,Vn,o),o!==u.cache&&Zf(n,[Vn],a,!0))),ri(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ka(e){e.flags|=4}function Fh(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Dg())e.flags|=8192;else throw Ss=wc,Jf}else e.flags&=-16777217}function ag(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!x_(n))if(Dg())e.flags|=8192;else throw Ss=wc,Jf}function jc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?rn():536870912,e.lanes|=n,po|=n)}function yl(e,n){if(!qe)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Mn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function ry(e,n,a){var o=n.pendingProps;switch(Xf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(n),null;case 1:return Mn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ja(Vn),ie(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(to(n)?Ka(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,jf())),Mn(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(Ka(n),f!==null?(Mn(n),ag(n,f)):(Mn(n),Fh(n,u,null,o,a))):f?f!==e.memoizedState?(Ka(n),Mn(n),ag(n,f)):(Mn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Ka(n),Mn(n),Fh(n,u,e,o,a)),null;case 27:if(Ne(n),a=lt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ka(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Mn(n),null}e=Vt.current,to(n)?Im(n):(e=f_(u,o,a),n.stateNode=e,Ka(n))}return Mn(n),null;case 5:if(Ne(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ka(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Mn(n),null}if(f=Vt.current,to(n))Im(n);else{var b=ou(lt.current);switch(f){case 1:f=b.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=b.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=b.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=b.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=b.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?b.createElement("select",{is:o.is}):b.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?b.createElement(u,{is:o.is}):b.createElement(u)}}f[bn]=n,f[Rn]=o;t:for(b=n.child;b!==null;){if(b.tag===5||b.tag===6)f.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===n)break t;for(;b.sibling===null;){if(b.return===null||b.return===n)break t;b=b.return}b.sibling.return=b.return,b=b.sibling}n.stateNode=f;t:switch(si(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Ka(n)}}return Mn(n),Fh(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Ka(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=lt.current,to(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=ii,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[bn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||t_(e.nodeValue,a)),e||br(n,!0)}else e=ou(e).createTextNode(o),e[bn]=n,n.stateNode=e}return Mn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=to(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[bn]=n}else gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Mn(n),e=!1}else a=jf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Vi(n),n):(Vi(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Mn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=to(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[bn]=n}else gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Mn(n),u=!1}else u=jf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Vi(n),n):(Vi(n),null)}return Vi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),jc(n,n.updateQueue),Mn(n),null);case 4:return ie(),e===null&&ad(n.stateNode.containerInfo),Mn(n),null;case 10:return ja(n.type),Mn(n),null;case 19:if(ut(Fn),o=n.memoizedState,o===null)return Mn(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)yl(o,!1);else{if(Ln!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Nc(e),f!==null){for(n.flags|=128,yl(o,!1),e=f.updateQueue,n.updateQueue=e,jc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Lm(a,e),a=a.sibling;return Et(Fn,Fn.current&1|2),qe&&Xa(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&T()>Qc&&(n.flags|=128,u=!0,yl(o,!1),n.lanes=4194304)}else{if(!u)if(e=Nc(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,jc(n,e),yl(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!qe)return Mn(n),null}else 2*T()-o.renderingStartTime>Qc&&a!==536870912&&(n.flags|=128,u=!0,yl(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=T(),e.sibling=null,a=Fn.current,Et(Fn,u?a&1|2:a&1),qe&&Xa(n,o.treeForkCount),e):(Mn(n),null);case 22:case 23:return Vi(n),rh(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Mn(n),n.subtreeFlags&6&&(n.flags|=8192)):Mn(n),a=n.updateQueue,a!==null&&jc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&ut(xs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ja(Vn),Mn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function sy(e,n){switch(Xf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ja(Vn),ie(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ne(n),null;case 31:if(n.memoizedState!==null){if(Vi(n),n.alternate===null)throw Error(r(340));gs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Vi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));gs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ut(Fn),null;case 4:return ie(),null;case 10:return ja(n.type),null;case 22:case 23:return Vi(n),rh(),e!==null&&ut(xs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ja(Vn),null;case 25:return null;default:return null}}function rg(e,n){switch(Xf(n),n.tag){case 3:ja(Vn),ie();break;case 26:case 27:case 5:Ne(n);break;case 4:ie();break;case 31:n.memoizedState!==null&&Vi(n);break;case 13:Vi(n);break;case 19:ut(Fn);break;case 10:ja(n.type);break;case 22:case 23:Vi(n),rh(),e!==null&&ut(xs);break;case 24:ja(Vn)}}function Sl(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,b=a.inst;o=f(),b.destroy=o}a=a.next}while(a!==u)}}catch(D){fn(n,n.return,D)}}function Dr(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var b=o.inst,D=b.destroy;if(D!==void 0){b.destroy=void 0,u=n;var X=a,ft=D;try{ft()}catch(Tt){fn(u,X,Tt)}}}o=o.next}while(o!==f)}}catch(Tt){fn(n,n.return,Tt)}}function sg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Km(n,a)}catch(o){fn(e,e.return,o)}}}function og(e,n,a){a.props=Es(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){fn(e,n,o)}}function Ml(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){fn(e,n,u)}}function Ra(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){fn(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){fn(e,n,u)}else a.current=null}function lg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){fn(e,e.return,u)}}function Ih(e,n,a){try{var o=e.stateNode;Cy(o,e.type,a,n),o[Rn]=n}catch(u){fn(e,e.return,u)}}function cg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ir(e.type)||e.tag===4}function Bh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||cg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ir(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zh(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ii));else if(o!==4&&(o===27&&Ir(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(zh(e,n,a),e=e.sibling;e!==null;)zh(e,n,a),e=e.sibling}function Yc(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ir(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Yc(e,n,a),e=e.sibling;e!==null;)Yc(e,n,a),e=e.sibling}function ug(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);si(n,o,a),n[bn]=e,n[Rn]=a}catch(f){fn(e,e.return,f)}}var Qa=!1,Xn=!1,Hh=!1,fg=typeof WeakSet=="function"?WeakSet:Set,Jn=null;function oy(e,n){if(e=e.containerInfo,od=pu,e=yn(e),gi(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var b=0,D=-1,X=-1,ft=0,Tt=0,Dt=e,dt=null;e:for(;;){for(var gt;Dt!==a||u!==0&&Dt.nodeType!==3||(D=b+u),Dt!==f||o!==0&&Dt.nodeType!==3||(X=b+o),Dt.nodeType===3&&(b+=Dt.nodeValue.length),(gt=Dt.firstChild)!==null;)dt=Dt,Dt=gt;for(;;){if(Dt===e)break e;if(dt===a&&++ft===u&&(D=b),dt===f&&++Tt===o&&(X=b),(gt=Dt.nextSibling)!==null)break;Dt=dt,dt=Dt.parentNode}Dt=gt}a=D===-1||X===-1?null:{start:D,end:X}}else a=null}a=a||{start:0,end:0}}else a=null;for(ld={focusedElem:e,selectionRange:a},pu=!1,Jn=n;Jn!==null;)if(n=Jn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Jn=e;else for(;Jn!==null;){switch(n=Jn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ue=Es(a.type,u);e=o.getSnapshotBeforeUpdate(ue,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(Se){fn(a,a.return,Se)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)fd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":fd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,Jn=e;break}Jn=n.return}}function hg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ja(e,a),o&4&&Sl(5,a);break;case 1:if(Ja(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(b){fn(a,a.return,b)}else{var u=Es(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(b){fn(a,a.return,b)}}o&64&&sg(a),o&512&&Ml(a,a.return);break;case 3:if(Ja(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Km(e,n)}catch(b){fn(a,a.return,b)}}break;case 27:n===null&&o&4&&ug(a);case 26:case 5:Ja(e,a),n===null&&o&4&&lg(a),o&512&&Ml(a,a.return);break;case 12:Ja(e,a);break;case 31:Ja(e,a),o&4&&mg(e,a);break;case 13:Ja(e,a),o&4&&gg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=gy.bind(null,a),Fy(e,a))));break;case 22:if(o=a.memoizedState!==null||Qa,!o){n=n!==null&&n.memoizedState!==null||Xn,u=Qa;var f=Xn;Qa=o,(Xn=n)&&!f?tr(e,a,(a.subtreeFlags&8772)!==0):Ja(e,a),Qa=u,Xn=f}break;case 30:break;default:Ja(e,a)}}function dg(e){var n=e.alternate;n!==null&&(e.alternate=null,dg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&is(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Tn=null,Ri=!1;function $a(e,n,a){for(a=a.child;a!==null;)pg(e,n,a),a=a.sibling}function pg(e,n,a){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(Ft,a)}catch{}switch(a.tag){case 26:Xn||Ra(a,n),$a(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Xn||Ra(a,n);var o=Tn,u=Ri;Ir(a.type)&&(Tn=a.stateNode,Ri=!1),$a(e,n,a),Ul(a.stateNode),Tn=o,Ri=u;break;case 5:Xn||Ra(a,n);case 6:if(o=Tn,u=Ri,Tn=null,$a(e,n,a),Tn=o,Ri=u,Tn!==null)if(Ri)try{(Tn.nodeType===9?Tn.body:Tn.nodeName==="HTML"?Tn.ownerDocument.body:Tn).removeChild(a.stateNode)}catch(f){fn(a,n,f)}else try{Tn.removeChild(a.stateNode)}catch(f){fn(a,n,f)}break;case 18:Tn!==null&&(Ri?(e=Tn,s_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Mo(e)):s_(Tn,a.stateNode));break;case 4:o=Tn,u=Ri,Tn=a.stateNode.containerInfo,Ri=!0,$a(e,n,a),Tn=o,Ri=u;break;case 0:case 11:case 14:case 15:Dr(2,a,n),Xn||Dr(4,a,n),$a(e,n,a);break;case 1:Xn||(Ra(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&og(a,n,o)),$a(e,n,a);break;case 21:$a(e,n,a);break;case 22:Xn=(o=Xn)||a.memoizedState!==null,$a(e,n,a),Xn=o;break;default:$a(e,n,a)}}function mg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Mo(e)}catch(a){fn(n,n.return,a)}}}function gg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Mo(e)}catch(a){fn(n,n.return,a)}}function ly(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new fg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new fg),n;default:throw Error(r(435,e.tag))}}function qc(e,n){var a=ly(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=_y.bind(null,e,o);o.then(u,u)}})}function Ci(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,b=n,D=b;t:for(;D!==null;){switch(D.tag){case 27:if(Ir(D.type)){Tn=D.stateNode,Ri=!1;break t}break;case 5:Tn=D.stateNode,Ri=!1;break t;case 3:case 4:Tn=D.stateNode.containerInfo,Ri=!0;break t}D=D.return}if(Tn===null)throw Error(r(160));pg(f,b,u),Tn=null,Ri=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)_g(n,e),n=n.sibling}var pa=null;function _g(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ci(n,e),wi(e),o&4&&(Dr(3,e,e.return),Sl(3,e),Dr(5,e,e.return));break;case 1:Ci(n,e),wi(e),o&512&&(Xn||a===null||Ra(a,a.return)),o&64&&Qa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=pa;if(Ci(n,e),wi(e),o&512&&(Xn||a===null||Ra(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[$i]||f[bn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),si(f,o,a),f[bn]=e,w(f),o=f;break t;case"link":var b=__("link","href",u).get(o+(a.href||""));if(b){for(var D=0;D<b.length;D++)if(f=b[D],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){b.splice(D,1);break e}}f=u.createElement(o),si(f,o,a),u.head.appendChild(f);break;case"meta":if(b=__("meta","content",u).get(o+(a.content||""))){for(D=0;D<b.length;D++)if(f=b[D],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){b.splice(D,1);break e}}f=u.createElement(o),si(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[bn]=e,w(f),o=f}e.stateNode=o}else v_(u,e.type,e.stateNode);else e.stateNode=g_(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?v_(u,e.type,e.stateNode):g_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Ih(e,e.memoizedProps,a.memoizedProps)}break;case 27:Ci(n,e),wi(e),o&512&&(Xn||a===null||Ra(a,a.return)),a!==null&&o&4&&Ih(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Ci(n,e),wi(e),o&512&&(Xn||a===null||Ra(a,a.return)),e.flags&32){u=e.stateNode;try{Dn(u,"")}catch(ue){fn(e,e.return,ue)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Ih(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Hh=!0);break;case 6:if(Ci(n,e),wi(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(ue){fn(e,e.return,ue)}}break;case 3:if(uu=null,u=pa,pa=lu(n.containerInfo),Ci(n,e),pa=u,wi(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Mo(n.containerInfo)}catch(ue){fn(e,e.return,ue)}Hh&&(Hh=!1,vg(e));break;case 4:o=pa,pa=lu(e.stateNode.containerInfo),Ci(n,e),wi(e),pa=o;break;case 12:Ci(n,e),wi(e);break;case 31:Ci(n,e),wi(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,qc(e,o)));break;case 13:Ci(n,e),wi(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Kc=T()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,qc(e,o)));break;case 22:u=e.memoizedState!==null;var X=a!==null&&a.memoizedState!==null,ft=Qa,Tt=Xn;if(Qa=ft||u,Xn=Tt||X,Ci(n,e),Xn=Tt,Qa=ft,wi(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||X||Qa||Xn||Ts(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){X=a=n;try{if(f=X.stateNode,u)b=f.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{D=X.stateNode;var Dt=X.memoizedProps.style,dt=Dt!=null&&Dt.hasOwnProperty("display")?Dt.display:null;D.style.display=dt==null||typeof dt=="boolean"?"":(""+dt).trim()}}catch(ue){fn(X,X.return,ue)}}}else if(n.tag===6){if(a===null){X=n;try{X.stateNode.nodeValue=u?"":X.memoizedProps}catch(ue){fn(X,X.return,ue)}}}else if(n.tag===18){if(a===null){X=n;try{var gt=X.stateNode;u?o_(gt,!0):o_(X.stateNode,!1)}catch(ue){fn(X,X.return,ue)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,qc(e,a))));break;case 19:Ci(n,e),wi(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,qc(e,o)));break;case 30:break;case 21:break;default:Ci(n,e),wi(e)}}function wi(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(cg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Bh(e);Yc(e,f,u);break;case 5:var b=a.stateNode;a.flags&32&&(Dn(b,""),a.flags&=-33);var D=Bh(e);Yc(e,D,b);break;case 3:case 4:var X=a.stateNode.containerInfo,ft=Bh(e);zh(e,ft,X);break;default:throw Error(r(161))}}catch(Tt){fn(e,e.return,Tt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function vg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;vg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ja(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)hg(e,n.alternate,n),n=n.sibling}function Ts(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Dr(4,n,n.return),Ts(n);break;case 1:Ra(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&og(n,n.return,a),Ts(n);break;case 27:Ul(n.stateNode);case 26:case 5:Ra(n,n.return),Ts(n);break;case 22:n.memoizedState===null&&Ts(n);break;case 30:Ts(n);break;default:Ts(n)}e=e.sibling}}function tr(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,b=f.flags;switch(f.tag){case 0:case 11:case 15:tr(u,f,a),Sl(4,f);break;case 1:if(tr(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ft){fn(o,o.return,ft)}if(o=f,u=o.updateQueue,u!==null){var D=o.stateNode;try{var X=u.shared.hiddenCallbacks;if(X!==null)for(u.shared.hiddenCallbacks=null,u=0;u<X.length;u++)Zm(X[u],D)}catch(ft){fn(o,o.return,ft)}}a&&b&64&&sg(f),Ml(f,f.return);break;case 27:ug(f);case 26:case 5:tr(u,f,a),a&&o===null&&b&4&&lg(f),Ml(f,f.return);break;case 12:tr(u,f,a);break;case 31:tr(u,f,a),a&&b&4&&mg(u,f);break;case 13:tr(u,f,a),a&&b&4&&gg(u,f);break;case 22:f.memoizedState===null&&tr(u,f,a),Ml(f,f.return);break;case 30:break;default:tr(u,f,a)}n=n.sibling}}function Vh(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ll(a))}function Gh(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ll(e))}function ma(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)xg(e,n,a,o),n=n.sibling}function xg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:ma(e,n,a,o),u&2048&&Sl(9,n);break;case 1:ma(e,n,a,o);break;case 3:ma(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ll(e)));break;case 12:if(u&2048){ma(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,b=f.id,D=f.onPostCommit;typeof D=="function"&&D(b,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(X){fn(n,n.return,X)}}else ma(e,n,a,o);break;case 31:ma(e,n,a,o);break;case 13:ma(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,b=n.alternate,n.memoizedState!==null?f._visibility&2?ma(e,n,a,o):bl(e,n):f._visibility&2?ma(e,n,a,o):(f._visibility|=2,uo(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Vh(b,n);break;case 24:ma(e,n,a,o),u&2048&&Gh(n.alternate,n);break;default:ma(e,n,a,o)}}function uo(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,b=n,D=a,X=o,ft=b.flags;switch(b.tag){case 0:case 11:case 15:uo(f,b,D,X,u),Sl(8,b);break;case 23:break;case 22:var Tt=b.stateNode;b.memoizedState!==null?Tt._visibility&2?uo(f,b,D,X,u):bl(f,b):(Tt._visibility|=2,uo(f,b,D,X,u)),u&&ft&2048&&Vh(b.alternate,b);break;case 24:uo(f,b,D,X,u),u&&ft&2048&&Gh(b.alternate,b);break;default:uo(f,b,D,X,u)}n=n.sibling}}function bl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:bl(a,o),u&2048&&Vh(o.alternate,o);break;case 24:bl(a,o),u&2048&&Gh(o.alternate,o);break;default:bl(a,o)}n=n.sibling}}var El=8192;function fo(e,n,a){if(e.subtreeFlags&El)for(e=e.child;e!==null;)yg(e,n,a),e=e.sibling}function yg(e,n,a){switch(e.tag){case 26:fo(e,n,a),e.flags&El&&e.memoizedState!==null&&qy(a,pa,e.memoizedState,e.memoizedProps);break;case 5:fo(e,n,a);break;case 3:case 4:var o=pa;pa=lu(e.stateNode.containerInfo),fo(e,n,a),pa=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=El,El=16777216,fo(e,n,a),El=o):fo(e,n,a));break;default:fo(e,n,a)}}function Sg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Tl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Jn=o,bg(o,e)}Sg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Mg(e),e=e.sibling}function Mg(e){switch(e.tag){case 0:case 11:case 15:Tl(e),e.flags&2048&&Dr(9,e,e.return);break;case 3:Tl(e);break;case 12:Tl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Zc(e)):Tl(e);break;default:Tl(e)}}function Zc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Jn=o,bg(o,e)}Sg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Dr(8,n,n.return),Zc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Zc(n));break;default:Zc(n)}e=e.sibling}}function bg(e,n){for(;Jn!==null;){var a=Jn;switch(a.tag){case 0:case 11:case 15:Dr(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ll(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Jn=o;else t:for(a=e;Jn!==null;){o=Jn;var u=o.sibling,f=o.return;if(dg(o),o===a){Jn=null;break t}if(u!==null){u.return=f,Jn=u;break t}Jn=f}}}var cy={getCacheForType:function(e){var n=ai(Vn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return ai(Vn).controller.signal}},uy=typeof WeakMap=="function"?WeakMap:Map,ln=0,vn=null,Ve=null,ke=0,un=0,Gi=null,Ur=!1,ho=!1,kh=!1,er=0,Ln=0,Lr=0,As=0,Xh=0,ki=0,po=0,Al=null,Di=null,Wh=!1,Kc=0,Eg=0,Qc=1/0,$c=null,Nr=null,Yn=0,Or=null,mo=null,nr=0,jh=0,Yh=null,Tg=null,Rl=0,qh=null;function Xi(){return(ln&2)!==0&&ke!==0?ke&-ke:H.T!==null?td():es()}function Ag(){if(ki===0)if((ke&536870912)===0||qe){var e=Nt;Nt<<=1,(Nt&3932160)===0&&(Nt=262144),ki=e}else ki=536870912;return e=Hi.current,e!==null&&(e.flags|=32),ki}function Ui(e,n,a){(e===vn&&(un===2||un===9)||e.cancelPendingCommit!==null)&&(go(e,0),Pr(e,ke,ki,!1)),Bn(e,a),((ln&2)===0||e!==vn)&&(e===vn&&((ln&2)===0&&(As|=a),Ln===4&&Pr(e,ke,ki,!1)),Ca(e))}function Rg(e,n,a){if((ln&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||zt(e,n),u=o?dy(e,n):Kh(e,n,!0),f=o;do{if(u===0){ho&&!o&&Pr(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!fy(a)){u=Kh(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var b=0;else b=e.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){n=b;t:{var D=e;u=Al;var X=D.current.memoizedState.isDehydrated;if(X&&(go(D,b).flags|=256),b=Kh(D,b,!1),b!==2){if(kh&&!X){D.errorRecoveryDisabledLanes|=f,As|=f,u=4;break t}f=Di,Di=u,f!==null&&(Di===null?Di=f:Di.push.apply(Di,f))}u=b}if(f=!1,u!==2)continue}}if(u===1){go(e,0),Pr(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Pr(o,n,ki,!Ur);break t;case 2:Di=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Kc+300-T(),10<u)){if(Pr(o,n,ki,!Ur),wt(o,0,!0)!==0)break t;nr=n,o.timeoutHandle=a_(Cg.bind(null,o,a,Di,$c,Wh,n,ki,As,po,Ur,f,"Throttled",-0,0),u);break t}Cg(o,a,Di,$c,Wh,n,ki,As,po,Ur,f,null,-0,0)}}break}while(!0);Ca(e)}function Cg(e,n,a,o,u,f,b,D,X,ft,Tt,Dt,dt,gt){if(e.timeoutHandle=-1,Dt=n.subtreeFlags,Dt&8192||(Dt&16785408)===16785408){Dt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ii},yg(n,f,Dt);var ue=(f&62914560)===f?Kc-T():(f&4194048)===f?Eg-T():0;if(ue=Zy(Dt,ue),ue!==null){nr=f,e.cancelPendingCommit=ue(Fg.bind(null,e,n,f,a,o,u,b,D,X,Tt,Dt,null,dt,gt)),Pr(e,f,b,!ft);return}}Fg(e,n,f,a,o,u,b,D,X)}function fy(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Ot(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Pr(e,n,a,o){n&=~Xh,n&=~As,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-qt(u),b=1<<f;o[f]=-1,u&=~b}a!==0&&Jr(e,a,n)}function Jc(){return(ln&6)===0?(Cl(0),!1):!0}function Zh(){if(Ve!==null){if(un===0)var e=Ve.return;else e=Ve,Wa=_s=null,fh(e),ro=null,ul=0,e=Ve;for(;e!==null;)rg(e.alternate,e),e=e.return;Ve=null}}function go(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Uy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),nr=0,Zh(),vn=e,Ve=a=ka(e.current,null),ke=n,un=0,Gi=null,Ur=!1,ho=zt(e,n),kh=!1,po=ki=Xh=As=Lr=Ln=0,Di=Al=null,Wh=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-qt(o),f=1<<u;n|=e[u],o&=~f}return er=n,yc(),a}function wg(e,n){Pe=null,H.H=vl,n===ao||n===Cc?(n=Wm(),un=3):n===Jf?(n=Wm(),un=4):un=n===Rh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Gi=n,Ve===null&&(Ln=1,Gc(e,na(n,e.current)))}function Dg(){var e=Hi.current;return e===null?!0:(ke&4194048)===ke?sa===null:(ke&62914560)===ke||(ke&536870912)!==0?e===sa:!1}function Ug(){var e=H.H;return H.H=vl,e===null?vl:e}function Lg(){var e=H.A;return H.A=cy,e}function tu(){Ln=4,Ur||(ke&4194048)!==ke&&Hi.current!==null||(ho=!0),(Lr&134217727)===0&&(As&134217727)===0||vn===null||Pr(vn,ke,ki,!1)}function Kh(e,n,a){var o=ln;ln|=2;var u=Ug(),f=Lg();(vn!==e||ke!==n)&&($c=null,go(e,n)),n=!1;var b=Ln;t:do try{if(un!==0&&Ve!==null){var D=Ve,X=Gi;switch(un){case 8:Zh(),b=6;break t;case 3:case 2:case 9:case 6:Hi.current===null&&(n=!0);var ft=un;if(un=0,Gi=null,_o(e,D,X,ft),a&&ho){b=0;break t}break;default:ft=un,un=0,Gi=null,_o(e,D,X,ft)}}hy(),b=Ln;break}catch(Tt){wg(e,Tt)}while(!0);return n&&e.shellSuspendCounter++,Wa=_s=null,ln=o,H.H=u,H.A=f,Ve===null&&(vn=null,ke=0,yc()),b}function hy(){for(;Ve!==null;)Ng(Ve)}function dy(e,n){var a=ln;ln|=2;var o=Ug(),u=Lg();vn!==e||ke!==n?($c=null,Qc=T()+500,go(e,n)):ho=zt(e,n);t:do try{if(un!==0&&Ve!==null){n=Ve;var f=Gi;e:switch(un){case 1:un=0,Gi=null,_o(e,n,f,1);break;case 2:case 9:if(km(f)){un=0,Gi=null,Og(n);break}n=function(){un!==2&&un!==9||vn!==e||(un=7),Ca(e)},f.then(n,n);break t;case 3:un=7;break t;case 4:un=5;break t;case 7:km(f)?(un=0,Gi=null,Og(n)):(un=0,Gi=null,_o(e,n,f,7));break;case 5:var b=null;switch(Ve.tag){case 26:b=Ve.memoizedState;case 5:case 27:var D=Ve;if(b?x_(b):D.stateNode.complete){un=0,Gi=null;var X=D.sibling;if(X!==null)Ve=X;else{var ft=D.return;ft!==null?(Ve=ft,eu(ft)):Ve=null}break e}}un=0,Gi=null,_o(e,n,f,5);break;case 6:un=0,Gi=null,_o(e,n,f,6);break;case 8:Zh(),Ln=6;break t;default:throw Error(r(462))}}py();break}catch(Tt){wg(e,Tt)}while(!0);return Wa=_s=null,H.H=o,H.A=u,ln=a,Ve!==null?0:(vn=null,ke=0,yc(),Ln)}function py(){for(;Ve!==null&&!Yt();)Ng(Ve)}function Ng(e){var n=ig(e.alternate,e,er);e.memoizedProps=e.pendingProps,n===null?eu(e):Ve=n}function Og(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Q0(a,n,n.pendingProps,n.type,void 0,ke);break;case 11:n=Q0(a,n,n.pendingProps,n.type.render,n.ref,ke);break;case 5:fh(n);default:rg(a,n),n=Ve=Lm(n,er),n=ig(a,n,er)}e.memoizedProps=e.pendingProps,n===null?eu(e):Ve=n}function _o(e,n,a,o){Wa=_s=null,fh(n),ro=null,ul=0;var u=n.return;try{if(ny(e,u,n,a,ke)){Ln=1,Gc(e,na(a,e.current)),Ve=null;return}}catch(f){if(u!==null)throw Ve=u,f;Ln=1,Gc(e,na(a,e.current)),Ve=null;return}n.flags&32768?(qe||o===1?e=!0:ho||(ke&536870912)!==0?e=!1:(Ur=e=!0,(o===2||o===9||o===3||o===6)&&(o=Hi.current,o!==null&&o.tag===13&&(o.flags|=16384))),Pg(n,e)):eu(n)}function eu(e){var n=e;do{if((n.flags&32768)!==0){Pg(n,Ur);return}e=n.return;var a=ry(n.alternate,n,er);if(a!==null){Ve=a;return}if(n=n.sibling,n!==null){Ve=n;return}Ve=n=e}while(n!==null);Ln===0&&(Ln=5)}function Pg(e,n){do{var a=sy(e.alternate,e);if(a!==null){a.flags&=32767,Ve=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ve=e;return}Ve=e=a}while(e!==null);Ln=6,Ve=null}function Fg(e,n,a,o,u,f,b,D,X){e.cancelPendingCommit=null;do nu();while(Yn!==0);if((ln&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Bf,pi(e,a,f,b,D,X),e===vn&&(Ve=vn=null,ke=0),mo=n,Or=e,nr=a,jh=f,Yh=u,Tg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,vy(_t,function(){return Vg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=H.T,H.T=null,u=Y.p,Y.p=2,b=ln,ln|=4;try{oy(e,n,a)}finally{ln=b,Y.p=u,H.T=o}}Yn=1,Ig(),Bg(),zg()}}function Ig(){if(Yn===1){Yn=0;var e=Or,n=mo,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=H.T,H.T=null;var o=Y.p;Y.p=2;var u=ln;ln|=4;try{_g(n,e);var f=ld,b=yn(e.containerInfo),D=f.focusedElem,X=f.selectionRange;if(b!==D&&D&&D.ownerDocument&&Cn(D.ownerDocument.documentElement,D)){if(X!==null&&gi(D)){var ft=X.start,Tt=X.end;if(Tt===void 0&&(Tt=ft),"selectionStart"in D)D.selectionStart=ft,D.selectionEnd=Math.min(Tt,D.value.length);else{var Dt=D.ownerDocument||document,dt=Dt&&Dt.defaultView||window;if(dt.getSelection){var gt=dt.getSelection(),ue=D.textContent.length,Se=Math.min(X.start,ue),gn=X.end===void 0?Se:Math.min(X.end,ue);!gt.extend&&Se>gn&&(b=gn,gn=Se,Se=b);var tt=je(D,Se),K=je(D,gn);if(tt&&K&&(gt.rangeCount!==1||gt.anchorNode!==tt.node||gt.anchorOffset!==tt.offset||gt.focusNode!==K.node||gt.focusOffset!==K.offset)){var ct=Dt.createRange();ct.setStart(tt.node,tt.offset),gt.removeAllRanges(),Se>gn?(gt.addRange(ct),gt.extend(K.node,K.offset)):(ct.setEnd(K.node,K.offset),gt.addRange(ct))}}}}for(Dt=[],gt=D;gt=gt.parentNode;)gt.nodeType===1&&Dt.push({element:gt,left:gt.scrollLeft,top:gt.scrollTop});for(typeof D.focus=="function"&&D.focus(),D=0;D<Dt.length;D++){var Rt=Dt[D];Rt.element.scrollLeft=Rt.left,Rt.element.scrollTop=Rt.top}}pu=!!od,ld=od=null}finally{ln=u,Y.p=o,H.T=a}}e.current=n,Yn=2}}function Bg(){if(Yn===2){Yn=0;var e=Or,n=mo,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=H.T,H.T=null;var o=Y.p;Y.p=2;var u=ln;ln|=4;try{hg(e,n.alternate,n)}finally{ln=u,Y.p=o,H.T=a}}Yn=3}}function zg(){if(Yn===4||Yn===3){Yn=0,I();var e=Or,n=mo,a=nr,o=Tg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Yn=5:(Yn=0,mo=Or=null,Hg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Nr=null),za(a),n=n.stateNode,Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(Ft,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=H.T,u=Y.p,Y.p=2,H.T=null;try{for(var f=e.onRecoverableError,b=0;b<o.length;b++){var D=o[b];f(D.value,{componentStack:D.stack})}}finally{H.T=n,Y.p=u}}(nr&3)!==0&&nu(),Ca(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===qh?Rl++:(Rl=0,qh=e):Rl=0,Cl(0)}}function Hg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ll(n)))}function nu(){return Ig(),Bg(),zg(),Vg()}function Vg(){if(Yn!==5)return!1;var e=Or,n=jh;jh=0;var a=za(nr),o=H.T,u=Y.p;try{Y.p=32>a?32:a,H.T=null,a=Yh,Yh=null;var f=Or,b=nr;if(Yn=0,mo=Or=null,nr=0,(ln&6)!==0)throw Error(r(331));var D=ln;if(ln|=4,Mg(f.current),xg(f,f.current,b,a),ln=D,Cl(0,!1),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(Ft,f)}catch{}return!0}finally{Y.p=u,H.T=o,Hg(e,n)}}function Gg(e,n,a){n=na(a,n),n=Ah(e.stateNode,n,2),e=Rr(e,n,2),e!==null&&(Bn(e,2),Ca(e))}function fn(e,n,a){if(e.tag===3)Gg(e,e,a);else for(;n!==null;){if(n.tag===3){Gg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Nr===null||!Nr.has(o))){e=na(a,e),a=k0(2),o=Rr(n,a,2),o!==null&&(X0(a,o,n,e),Bn(o,2),Ca(o));break}}n=n.return}}function Qh(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new uy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(kh=!0,u.add(a),e=my.bind(null,e,n,a),n.then(e,e))}function my(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,vn===e&&(ke&a)===a&&(Ln===4||Ln===3&&(ke&62914560)===ke&&300>T()-Kc?(ln&2)===0&&go(e,0):Xh|=a,po===ke&&(po=0)),Ca(e)}function kg(e,n){n===0&&(n=rn()),e=ps(e,n),e!==null&&(Bn(e,n),Ca(e))}function gy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),kg(e,a)}function _y(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),kg(e,a)}function vy(e,n){return Ce(e,n)}var iu=null,vo=null,$h=!1,au=!1,Jh=!1,Fr=0;function Ca(e){e!==vo&&e.next===null&&(vo===null?iu=vo=e:vo=vo.next=e),au=!0,$h||($h=!0,yy())}function Cl(e,n){if(!Jh&&au){Jh=!0;do for(var a=!1,o=iu;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var b=o.suspendedLanes,D=o.pingedLanes;f=(1<<31-qt(42|e)+1)-1,f&=u&~(b&~D),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Yg(o,f))}else f=ke,f=wt(o,o===vn?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||zt(o,f)||(a=!0,Yg(o,f));o=o.next}while(a);Jh=!1}}function xy(){Xg()}function Xg(){au=$h=!1;var e=0;Fr!==0&&Dy()&&(e=Fr);for(var n=T(),a=null,o=iu;o!==null;){var u=o.next,f=Wg(o,n);f===0?(o.next=null,a===null?iu=u:a.next=u,u===null&&(vo=a)):(a=o,(e!==0||(f&3)!==0)&&(au=!0)),o=u}Yn!==0&&Yn!==5||Cl(e),Fr!==0&&(Fr=0)}function Wg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var b=31-qt(f),D=1<<b,X=u[b];X===-1?((D&a)===0||(D&o)!==0)&&(u[b]=_e(D,n)):X<=n&&(e.expiredLanes|=D),f&=~D}if(n=vn,a=ke,a=wt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(un===2||un===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Oe(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||zt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Oe(o),za(a)){case 2:case 8:a=Ct;break;case 32:a=_t;break;case 268435456:a=Gt;break;default:a=_t}return o=jg.bind(null,e),a=Ce(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Oe(o),e.callbackPriority=2,e.callbackNode=null,2}function jg(e,n){if(Yn!==0&&Yn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(nu()&&e.callbackNode!==a)return null;var o=ke;return o=wt(e,e===vn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Rg(e,o,n),Wg(e,T()),e.callbackNode!=null&&e.callbackNode===a?jg.bind(null,e):null)}function Yg(e,n){if(nu())return null;Rg(e,n,!0)}function yy(){Ly(function(){(ln&6)!==0?Ce(bt,xy):Xg()})}function td(){if(Fr===0){var e=no;e===0&&(e=Zt,Zt<<=1,(Zt&261888)===0&&(Zt=256)),Fr=e}return Fr}function qg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ei(""+e)}function Zg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Sy(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=qg((u[Rn]||null).action),b=o.submitter;b&&(n=(n=b[Rn]||null)?qg(n.formAction):b.getAttribute("formAction"),n!==null&&(f=n,b=null));var D=new ss("action","action",null,o,u);e.push({event:D,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Fr!==0){var X=b?Zg(u,b):new FormData(u);yh(a,{pending:!0,data:X,method:u.method,action:f},null,X)}}else typeof f=="function"&&(D.preventDefault(),X=b?Zg(u,b):new FormData(u),yh(a,{pending:!0,data:X,method:u.method,action:f},f,X))},currentTarget:u}]})}}for(var ed=0;ed<If.length;ed++){var nd=If[ed],My=nd.toLowerCase(),by=nd[0].toUpperCase()+nd.slice(1);da(My,"on"+by)}da(Ga,"onAnimationEnd"),da(En,"onAnimationIteration"),da(Ff,"onAnimationStart"),da("dblclick","onDoubleClick"),da("focusin","onFocus"),da("focusout","onBlur"),da(zx,"onTransitionRun"),da(Hx,"onTransitionStart"),da(Vx,"onTransitionCancel"),da(wm,"onTransitionEnd"),at("onMouseEnter",["mouseout","mouseover"]),at("onMouseLeave",["mouseout","mouseover"]),at("onPointerEnter",["pointerout","pointerover"]),at("onPointerLeave",["pointerout","pointerover"]),ht("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ht("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ht("onBeforeInput",["compositionend","keypress","textInput","paste"]),ht("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ht("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ht("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ey=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wl));function Kg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var b=o.length-1;0<=b;b--){var D=o[b],X=D.instance,ft=D.currentTarget;if(D=D.listener,X!==f&&u.isPropagationStopped())break t;f=D,u.currentTarget=ft;try{f(u)}catch(Tt){xc(Tt)}u.currentTarget=null,f=X}else for(b=0;b<o.length;b++){if(D=o[b],X=D.instance,ft=D.currentTarget,D=D.listener,X!==f&&u.isPropagationStopped())break t;f=D,u.currentTarget=ft;try{f(u)}catch(Tt){xc(Tt)}u.currentTarget=null,f=X}}}}function Ge(e,n){var a=n[gr];a===void 0&&(a=n[gr]=new Set);var o=e+"__bubble";a.has(o)||(Qg(n,e,2,!1),a.add(o))}function id(e,n,a){var o=0;n&&(o|=4),Qg(a,e,o,n)}var ru="_reactListening"+Math.random().toString(36).slice(2);function ad(e){if(!e[ru]){e[ru]=!0,J.forEach(function(a){a!=="selectionchange"&&(Ey.has(a)||id(a,!1,e),id(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ru]||(n[ru]=!0,id("selectionchange",!1,n))}}function Qg(e,n,a,o){switch(A_(n)){case 2:var u=$y;break;case 8:u=Jy;break;default:u=xd}a=u.bind(null,n,a,e),u=void 0,!as||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function rd(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var b=o.tag;if(b===3||b===4){var D=o.stateNode.containerInfo;if(D===u)break;if(b===4)for(b=o.return;b!==null;){var X=b.tag;if((X===3||X===4)&&b.stateNode.containerInfo===u)return;b=b.return}for(;D!==null;){if(b=Si(D),b===null)return;if(X=b.tag,X===5||X===6||X===26||X===27){o=f=b;continue t}D=D.parentNode}}o=o.return}sc(function(){var ft=f,Tt=Qo(a),Dt=[];t:{var dt=Dm.get(e);if(dt!==void 0){var gt=ss,ue=e;switch(e){case"keypress":if(ks(a)===0)break t;case"keydown":case"keyup":gt=Ef;break;case"focusin":ue="focus",gt=nl;break;case"focusout":ue="blur",gt=nl;break;case"beforeblur":case"afterblur":gt=nl;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":gt=cc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":gt=mf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":gt=Rf;break;case Ga:case En:case Ff:gt=vf;break;case wm:gt=wf;break;case"scroll":case"scrollend":gt=df;break;case"wheel":gt=Uf;break;case"copy":case"cut":case"paste":gt=yf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":gt=dc;break;case"toggle":case"beforetoggle":gt=Nf}var Se=(n&4)!==0,gn=!Se&&(e==="scroll"||e==="scrollend"),tt=Se?dt!==null?dt+"Capture":null:dt;Se=[];for(var K=ft,ct;K!==null;){var Rt=K;if(ct=Rt.stateNode,Rt=Rt.tag,Rt!==5&&Rt!==26&&Rt!==27||ct===null||tt===null||(Rt=Ma(K,tt),Rt!=null&&Se.push(Dl(K,Rt,ct))),gn)break;K=K.return}0<Se.length&&(dt=new gt(dt,ue,null,a,Tt),Dt.push({event:dt,listeners:Se}))}}if((n&7)===0){t:{if(dt=e==="mouseover"||e==="pointerover",gt=e==="mouseout"||e==="pointerout",dt&&a!==Ko&&(ue=a.relatedTarget||a.fromElement)&&(Si(ue)||ue[Fi]))break t;if((gt||dt)&&(dt=Tt.window===Tt?Tt:(dt=Tt.ownerDocument)?dt.defaultView||dt.parentWindow:window,gt?(ue=a.relatedTarget||a.toElement,gt=ft,ue=ue?Si(ue):null,ue!==null&&(gn=c(ue),Se=ue.tag,ue!==gn||Se!==5&&Se!==27&&Se!==6)&&(ue=null)):(gt=null,ue=ft),gt!==ue)){if(Se=cc,Rt="onMouseLeave",tt="onMouseEnter",K="mouse",(e==="pointerout"||e==="pointerover")&&(Se=dc,Rt="onPointerLeave",tt="onPointerEnter",K="pointer"),gn=gt==null?dt:Ji(gt),ct=ue==null?dt:Ji(ue),dt=new Se(Rt,K+"leave",gt,a,Tt),dt.target=gn,dt.relatedTarget=ct,Rt=null,Si(Tt)===ft&&(Se=new Se(tt,K+"enter",ue,a,Tt),Se.target=ct,Se.relatedTarget=gn,Rt=Se),gn=Rt,gt&&ue)e:{for(Se=Ty,tt=gt,K=ue,ct=0,Rt=tt;Rt;Rt=Se(Rt))ct++;Rt=0;for(var xe=K;xe;xe=Se(xe))Rt++;for(;0<ct-Rt;)tt=Se(tt),ct--;for(;0<Rt-ct;)K=Se(K),Rt--;for(;ct--;){if(tt===K||K!==null&&tt===K.alternate){Se=tt;break e}tt=Se(tt),K=Se(K)}Se=null}else Se=null;gt!==null&&$g(Dt,dt,gt,Se,!1),ue!==null&&gn!==null&&$g(Dt,gn,ue,Se,!0)}}t:{if(dt=ft?Ji(ft):window,gt=dt.nodeName&&dt.nodeName.toLowerCase(),gt==="select"||gt==="input"&&dt.type==="file")var en=vc;else if(_c(dt))if(ds)en=Mt;else{en=vt;var pe=rt}else gt=dt.nodeName,!gt||gt.toLowerCase()!=="input"||dt.type!=="checkbox"&&dt.type!=="radio"?ft&&bi(ft.elementType)&&(en=vc):en=Lt;if(en&&(en=en(e,ft))){Ti(Dt,en,a,Tt);break t}pe&&pe(e,dt,ft),e==="focusout"&&ft&&dt.type==="number"&&ft.memoizedProps.value!=null&&wn(dt,"number",dt.value)}switch(pe=ft?Ji(ft):window,e){case"focusin":(_c(pe)||pe.contentEditable==="true")&&(q=pe,ot=ft,At=null);break;case"focusout":At=ot=q=null;break;case"mousedown":Bt=!0;break;case"contextmenu":case"mouseup":case"dragend":Bt=!1,Ee(Dt,a,Tt);break;case"selectionchange":if(Bi)break;case"keydown":case"keyup":Ee(Dt,a,Tt)}var Fe;if(Ys)t:{switch(e){case"compositionstart":var Xe="onCompositionStart";break t;case"compositionend":Xe="onCompositionEnd";break t;case"compositionupdate":Xe="onCompositionUpdate";break t}Xe=void 0}else xr?gc(e,a)&&(Xe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Xe="onCompositionStart");Xe&&(pc&&a.locale!=="ko"&&(xr||Xe!=="onCompositionStart"?Xe==="onCompositionEnd"&&xr&&(Fe=oc()):(ba=Tt,tl="value"in ba?ba.value:ba.textContent,xr=!0)),pe=su(ft,Xe),0<pe.length&&(Xe=new fc(Xe,e,null,a,Tt),Dt.push({event:Xe,listeners:pe}),Fe?Xe.data=Fe:(Fe=qs(a),Fe!==null&&(Xe.data=Fe)))),(Fe=Pf?rl(e,a):us(e,a))&&(Xe=su(ft,"onBeforeInput"),0<Xe.length&&(pe=new fc("onBeforeInput","beforeinput",null,a,Tt),Dt.push({event:pe,listeners:Xe}),pe.data=Fe)),Sy(Dt,e,ft,a,Tt)}Kg(Dt,n)})}function Dl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function su(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Ma(e,a),u!=null&&o.unshift(Dl(e,u,f)),u=Ma(e,n),u!=null&&o.push(Dl(e,u,f))),e.tag===3)return o;e=e.return}return[]}function Ty(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function $g(e,n,a,o,u){for(var f=n._reactName,b=[];a!==null&&a!==o;){var D=a,X=D.alternate,ft=D.stateNode;if(D=D.tag,X!==null&&X===o)break;D!==5&&D!==26&&D!==27||ft===null||(X=ft,u?(ft=Ma(a,f),ft!=null&&b.unshift(Dl(a,ft,X))):u||(ft=Ma(a,f),ft!=null&&b.push(Dl(a,ft,X)))),a=a.return}b.length!==0&&e.push({event:n,listeners:b})}var Ay=/\r\n?/g,Ry=/\u0000|\uFFFD/g;function Jg(e){return(typeof e=="string"?e:""+e).replace(Ay,`
`).replace(Ry,"")}function t_(e,n){return n=Jg(n),Jg(e)===n}function mn(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Dn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Dn(e,""+o);break;case"className":ve(e,"class",o);break;case"tabIndex":ve(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ve(e,a,o);break;case"style":_r(e,o,f);break;case"data":if(n!=="object"){ve(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ei(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&mn(e,n,"name",u.name,u,null),mn(e,n,"formEncType",u.formEncType,u,null),mn(e,n,"formMethod",u.formMethod,u,null),mn(e,n,"formTarget",u.formTarget,u,null)):(mn(e,n,"encType",u.encType,u,null),mn(e,n,"method",u.method,u,null),mn(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ei(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Ii);break;case"onScroll":o!=null&&Ge("scroll",e);break;case"onScrollEnd":o!=null&&Ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Ei(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ge("beforetoggle",e),Ge("toggle",e),fe(e,"popover",o);break;case"xlinkActuate":oe(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":oe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":oe(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":oe(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":oe(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":oe(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":oe(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":oe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":oe(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":fe(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=hf.get(a)||a,fe(e,a,o))}}function sd(e,n,a,o,u,f){switch(a){case"style":_r(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Dn(e,o):(typeof o=="number"||typeof o=="bigint")&&Dn(e,""+o);break;case"onScroll":o!=null&&Ge("scroll",e);break;case"onScrollEnd":o!=null&&Ge("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Ii);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!mt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Rn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):fe(e,a,o)}}}function si(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ge("error",e),Ge("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var b=a[f];if(b!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:mn(e,n,f,b,a,null)}}u&&mn(e,n,"srcSet",a.srcSet,a,null),o&&mn(e,n,"src",a.src,a,null);return;case"input":Ge("invalid",e);var D=f=b=u=null,X=null,ft=null;for(o in a)if(a.hasOwnProperty(o)){var Tt=a[o];if(Tt!=null)switch(o){case"name":u=Tt;break;case"type":b=Tt;break;case"checked":X=Tt;break;case"defaultChecked":ft=Tt;break;case"value":f=Tt;break;case"defaultValue":D=Tt;break;case"children":case"dangerouslySetInnerHTML":if(Tt!=null)throw Error(r(137,n));break;default:mn(e,n,o,Tt,a,null)}}ta(e,f,D,X,ft,b,u,!1);return;case"select":Ge("invalid",e),o=b=f=null;for(u in a)if(a.hasOwnProperty(u)&&(D=a[u],D!=null))switch(u){case"value":f=D;break;case"defaultValue":b=D;break;case"multiple":o=D;default:mn(e,n,u,D,a,null)}n=f,a=b,e.multiple=!!o,n!=null?Mi(e,!!o,n,!1):a!=null&&Mi(e,!!o,a,!0);return;case"textarea":Ge("invalid",e),f=u=o=null;for(b in a)if(a.hasOwnProperty(b)&&(D=a[b],D!=null))switch(b){case"value":o=D;break;case"defaultValue":u=D;break;case"children":f=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(r(91));break;default:mn(e,n,b,D,a,null)}Hn(e,o,u,f);return;case"option":for(X in a)a.hasOwnProperty(X)&&(o=a[X],o!=null)&&(X==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":mn(e,n,X,o,a,null));return;case"dialog":Ge("beforetoggle",e),Ge("toggle",e),Ge("cancel",e),Ge("close",e);break;case"iframe":case"object":Ge("load",e);break;case"video":case"audio":for(o=0;o<wl.length;o++)Ge(wl[o],e);break;case"image":Ge("error",e),Ge("load",e);break;case"details":Ge("toggle",e);break;case"embed":case"source":case"link":Ge("error",e),Ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ft in a)if(a.hasOwnProperty(ft)&&(o=a[ft],o!=null))switch(ft){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:mn(e,n,ft,o,a,null)}return;default:if(bi(n)){for(Tt in a)a.hasOwnProperty(Tt)&&(o=a[Tt],o!==void 0&&sd(e,n,Tt,o,a,void 0));return}}for(D in a)a.hasOwnProperty(D)&&(o=a[D],o!=null&&mn(e,n,D,o,a,null))}function Cy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,b=null,D=null,X=null,ft=null,Tt=null;for(gt in a){var Dt=a[gt];if(a.hasOwnProperty(gt)&&Dt!=null)switch(gt){case"checked":break;case"value":break;case"defaultValue":X=Dt;default:o.hasOwnProperty(gt)||mn(e,n,gt,null,o,Dt)}}for(var dt in o){var gt=o[dt];if(Dt=a[dt],o.hasOwnProperty(dt)&&(gt!=null||Dt!=null))switch(dt){case"type":f=gt;break;case"name":u=gt;break;case"checked":ft=gt;break;case"defaultChecked":Tt=gt;break;case"value":b=gt;break;case"defaultValue":D=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(r(137,n));break;default:gt!==Dt&&mn(e,n,dt,gt,o,Dt)}}zn(e,b,D,X,ft,Tt,f,u);return;case"select":gt=b=D=dt=null;for(f in a)if(X=a[f],a.hasOwnProperty(f)&&X!=null)switch(f){case"value":break;case"multiple":gt=X;default:o.hasOwnProperty(f)||mn(e,n,f,null,o,X)}for(u in o)if(f=o[u],X=a[u],o.hasOwnProperty(u)&&(f!=null||X!=null))switch(u){case"value":dt=f;break;case"defaultValue":D=f;break;case"multiple":b=f;default:f!==X&&mn(e,n,u,f,o,X)}n=D,a=b,o=gt,dt!=null?Mi(e,!!a,dt,!1):!!o!=!!a&&(n!=null?Mi(e,!!a,n,!0):Mi(e,!!a,a?[]:"",!1));return;case"textarea":gt=dt=null;for(D in a)if(u=a[D],a.hasOwnProperty(D)&&u!=null&&!o.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:mn(e,n,D,null,o,u)}for(b in o)if(u=o[b],f=a[b],o.hasOwnProperty(b)&&(u!=null||f!=null))switch(b){case"value":dt=u;break;case"defaultValue":gt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&mn(e,n,b,u,o,f)}Qe(e,dt,gt);return;case"option":for(var ue in a)dt=a[ue],a.hasOwnProperty(ue)&&dt!=null&&!o.hasOwnProperty(ue)&&(ue==="selected"?e.selected=!1:mn(e,n,ue,null,o,dt));for(X in o)dt=o[X],gt=a[X],o.hasOwnProperty(X)&&dt!==gt&&(dt!=null||gt!=null)&&(X==="selected"?e.selected=dt&&typeof dt!="function"&&typeof dt!="symbol":mn(e,n,X,dt,o,gt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Se in a)dt=a[Se],a.hasOwnProperty(Se)&&dt!=null&&!o.hasOwnProperty(Se)&&mn(e,n,Se,null,o,dt);for(ft in o)if(dt=o[ft],gt=a[ft],o.hasOwnProperty(ft)&&dt!==gt&&(dt!=null||gt!=null))switch(ft){case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,n));break;default:mn(e,n,ft,dt,o,gt)}return;default:if(bi(n)){for(var gn in a)dt=a[gn],a.hasOwnProperty(gn)&&dt!==void 0&&!o.hasOwnProperty(gn)&&sd(e,n,gn,void 0,o,dt);for(Tt in o)dt=o[Tt],gt=a[Tt],!o.hasOwnProperty(Tt)||dt===gt||dt===void 0&&gt===void 0||sd(e,n,Tt,dt,o,gt);return}}for(var tt in a)dt=a[tt],a.hasOwnProperty(tt)&&dt!=null&&!o.hasOwnProperty(tt)&&mn(e,n,tt,null,o,dt);for(Dt in o)dt=o[Dt],gt=a[Dt],!o.hasOwnProperty(Dt)||dt===gt||dt==null&&gt==null||mn(e,n,Dt,dt,o,gt)}function e_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function wy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,b=u.initiatorType,D=u.duration;if(f&&D&&e_(b)){for(b=0,D=u.responseEnd,o+=1;o<a.length;o++){var X=a[o],ft=X.startTime;if(ft>D)break;var Tt=X.transferSize,Dt=X.initiatorType;Tt&&e_(Dt)&&(X=X.responseEnd,b+=Tt*(X<D?1:(D-ft)/(X-ft)))}if(--o,n+=8*(f+b)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var od=null,ld=null;function ou(e){return e.nodeType===9?e:e.ownerDocument}function n_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function i_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function cd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ud=null;function Dy(){var e=window.event;return e&&e.type==="popstate"?e===ud?!1:(ud=e,!0):(ud=null,!1)}var a_=typeof setTimeout=="function"?setTimeout:void 0,Uy=typeof clearTimeout=="function"?clearTimeout:void 0,r_=typeof Promise=="function"?Promise:void 0,Ly=typeof queueMicrotask=="function"?queueMicrotask:typeof r_<"u"?function(e){return r_.resolve(null).then(e).catch(Ny)}:a_;function Ny(e){setTimeout(function(){throw e})}function Ir(e){return e==="head"}function s_(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Mo(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Ul(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ul(a);for(var f=a.firstChild;f;){var b=f.nextSibling,D=f.nodeName;f[$i]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=b}}else a==="body"&&Ul(e.ownerDocument.body);a=u}while(a);Mo(n)}function o_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function fd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":fd(a),is(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Oy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[$i])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=oa(e.nextSibling),e===null)break}return null}function Py(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=oa(e.nextSibling),e===null))return null;return e}function l_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=oa(e.nextSibling),e===null))return null;return e}function hd(e){return e.data==="$?"||e.data==="$~"}function dd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Fy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function oa(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var pd=null;function c_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return oa(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function u_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function f_(e,n,a){switch(n=ou(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Ul(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);is(e)}var la=new Map,h_=new Set;function lu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ir=Y.d;Y.d={f:Iy,r:By,D:zy,C:Hy,L:Vy,m:Gy,X:Xy,S:ky,M:Wy};function Iy(){var e=ir.f(),n=Jc();return e||n}function By(e){var n=Sa(e);n!==null&&n.tag===5&&n.type==="form"?w0(n):ir.r(e)}var xo=typeof document>"u"?null:document;function d_(e,n,a){var o=xo;if(o&&typeof n=="string"&&n){var u=Re(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),h_.has(u)||(h_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),si(n,"link",e),w(n),o.head.appendChild(n)))}}function zy(e){ir.D(e),d_("dns-prefetch",e,null)}function Hy(e,n){ir.C(e,n),d_("preconnect",e,n)}function Vy(e,n,a){ir.L(e,n,a);var o=xo;if(o&&e&&n){var u='link[rel="preload"][as="'+Re(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Re(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Re(a.imageSizes)+'"]')):u+='[href="'+Re(e)+'"]';var f=u;switch(n){case"style":f=yo(e);break;case"script":f=So(e)}la.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),la.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Ll(f))||n==="script"&&o.querySelector(Nl(f))||(n=o.createElement("link"),si(n,"link",e),w(n),o.head.appendChild(n)))}}function Gy(e,n){ir.m(e,n);var a=xo;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Re(o)+'"][href="'+Re(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=So(e)}if(!la.has(f)&&(e=_({rel:"modulepreload",href:e},n),la.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Nl(f)))return}o=a.createElement("link"),si(o,"link",e),w(o),a.head.appendChild(o)}}}function ky(e,n,a){ir.S(e,n,a);var o=xo;if(o&&e){var u=mi(o).hoistableStyles,f=yo(e);n=n||"default";var b=u.get(f);if(!b){var D={loading:0,preload:null};if(b=o.querySelector(Ll(f)))D.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=la.get(f))&&md(e,a);var X=b=o.createElement("link");w(X),si(X,"link",e),X._p=new Promise(function(ft,Tt){X.onload=ft,X.onerror=Tt}),X.addEventListener("load",function(){D.loading|=1}),X.addEventListener("error",function(){D.loading|=2}),D.loading|=4,cu(b,n,o)}b={type:"stylesheet",instance:b,count:1,state:D},u.set(f,b)}}}function Xy(e,n){ir.X(e,n);var a=xo;if(a&&e){var o=mi(a).hoistableScripts,u=So(e),f=o.get(u);f||(f=a.querySelector(Nl(u)),f||(e=_({src:e,async:!0},n),(n=la.get(u))&&gd(e,n),f=a.createElement("script"),w(f),si(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Wy(e,n){ir.M(e,n);var a=xo;if(a&&e){var o=mi(a).hoistableScripts,u=So(e),f=o.get(u);f||(f=a.querySelector(Nl(u)),f||(e=_({src:e,async:!0,type:"module"},n),(n=la.get(u))&&gd(e,n),f=a.createElement("script"),w(f),si(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function p_(e,n,a,o){var u=(u=lt.current)?lu(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=yo(a.href),a=mi(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=yo(a.href);var f=mi(u).hoistableStyles,b=f.get(e);if(b||(u=u.ownerDocument||u,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,b),(f=u.querySelector(Ll(e)))&&!f._p&&(b.instance=f,b.state.loading=5),la.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},la.set(e,a),f||jy(u,e,a,b.state))),n&&o===null)throw Error(r(528,""));return b}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=So(a),a=mi(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function yo(e){return'href="'+Re(e)+'"'}function Ll(e){return'link[rel="stylesheet"]['+e+"]"}function m_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function jy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),si(n,"link",a),w(n),e.head.appendChild(n))}function So(e){return'[src="'+Re(e)+'"]'}function Nl(e){return"script[async]"+e}function g_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Re(a.href)+'"]');if(o)return n.instance=o,w(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),w(o),si(o,"style",u),cu(o,a.precedence,e),n.instance=o;case"stylesheet":u=yo(a.href);var f=e.querySelector(Ll(u));if(f)return n.state.loading|=4,n.instance=f,w(f),f;o=m_(a),(u=la.get(u))&&md(o,u),f=(e.ownerDocument||e).createElement("link"),w(f);var b=f;return b._p=new Promise(function(D,X){b.onload=D,b.onerror=X}),si(f,"link",o),n.state.loading|=4,cu(f,a.precedence,e),n.instance=f;case"script":return f=So(a.src),(u=e.querySelector(Nl(f)))?(n.instance=u,w(u),u):(o=a,(u=la.get(f))&&(o=_({},a),gd(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),w(u),si(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,cu(o,a.precedence,e));return n.instance}function cu(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,b=0;b<o.length;b++){var D=o[b];if(D.dataset.precedence===n)f=D;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function md(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function gd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var uu=null;function __(e,n,a){if(uu===null){var o=new Map,u=uu=new Map;u.set(a,o)}else u=uu,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[$i]||f[bn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var b=f.getAttribute(n)||"";b=e+b;var D=o.get(b);D?D.push(f):o.set(b,[f])}}return o}function v_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Yy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function x_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function qy(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=yo(o.href),f=n.querySelector(Ll(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=fu.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,w(f);return}f=n.ownerDocument||n,o=m_(o),(u=la.get(u))&&md(o,u),f=f.createElement("link"),w(f);var b=f;b._p=new Promise(function(D,X){b.onload=D,b.onerror=X}),si(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=fu.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var _d=0;function Zy(e,n){return e.stylesheets&&e.count===0&&du(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&du(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&_d===0&&(_d=62500*wy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&du(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>_d?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function fu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)du(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var hu=null;function du(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,hu=new Map,n.forEach(Ky,e),hu=null,fu.call(e))}function Ky(e,n){if(!(n.state.loading&4)){var a=hu.get(e);if(a)var o=a.get(null);else{a=new Map,hu.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var b=u[f];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(a.set(b.dataset.precedence,b),o=b)}o&&a.set(null,o)}u=n.instance,b=u.getAttribute("data-precedence"),f=a.get(b)||o,f===o&&a.set(null,u),a.set(b,u),this.count++,o=fu.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Ol={$$typeof:N,Provider:null,Consumer:null,_currentValue:st,_currentValue2:st,_threadCount:0};function Qy(e,n,a,o,u,f,b,D,X){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=We(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=We(0),this.hiddenUpdates=We(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=X,this.incompleteTransitions=new Map}function y_(e,n,a,o,u,f,b,D,X,ft,Tt,Dt){return e=new Qy(e,n,a,b,X,ft,Tt,Dt,D),n=1,f===!0&&(n|=24),f=zi(3,null,null,n),e.current=f,f.stateNode=e,n=Kf(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},th(f),e}function S_(e){return e?(e=Qs,e):Qs}function M_(e,n,a,o,u,f){u=S_(u),o.context===null?o.context=u:o.pendingContext=u,o=Ar(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Rr(e,o,n),a!==null&&(Ui(a,e,n),hl(a,e,n))}function b_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function vd(e,n){b_(e,n),(e=e.alternate)&&b_(e,n)}function E_(e){if(e.tag===13||e.tag===31){var n=ps(e,67108864);n!==null&&Ui(n,e,67108864),vd(e,67108864)}}function T_(e){if(e.tag===13||e.tag===31){var n=Xi();n=mr(n);var a=ps(e,n);a!==null&&Ui(a,e,n),vd(e,n)}}var pu=!0;function $y(e,n,a,o){var u=H.T;H.T=null;var f=Y.p;try{Y.p=2,xd(e,n,a,o)}finally{Y.p=f,H.T=u}}function Jy(e,n,a,o){var u=H.T;H.T=null;var f=Y.p;try{Y.p=8,xd(e,n,a,o)}finally{Y.p=f,H.T=u}}function xd(e,n,a,o){if(pu){var u=yd(o);if(u===null)rd(e,n,o,mu,a),R_(e,o);else if(eS(u,e,n,a,o))o.stopPropagation();else if(R_(e,o),n&4&&-1<tS.indexOf(e)){for(;u!==null;){var f=Sa(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var b=yt(f.pendingLanes);if(b!==0){var D=f;for(D.pendingLanes|=2,D.entangledLanes|=2;b;){var X=1<<31-qt(b);D.entanglements[1]|=X,b&=~X}Ca(f),(ln&6)===0&&(Qc=T()+500,Cl(0))}}break;case 31:case 13:D=ps(f,2),D!==null&&Ui(D,f,2),Jc(),vd(f,2)}if(f=yd(o),f===null&&rd(e,n,o,mu,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else rd(e,n,o,null,a)}}function yd(e){return e=Qo(e),Sd(e)}var mu=null;function Sd(e){if(mu=null,e=Si(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return mu=e,null}function A_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($()){case bt:return 2;case Ct:return 8;case _t:case ce:return 32;case Gt:return 268435456;default:return 32}default:return 32}}var Md=!1,Br=null,zr=null,Hr=null,Pl=new Map,Fl=new Map,Vr=[],tS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function R_(e,n){switch(e){case"focusin":case"focusout":Br=null;break;case"dragenter":case"dragleave":zr=null;break;case"mouseover":case"mouseout":Hr=null;break;case"pointerover":case"pointerout":Pl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fl.delete(n.pointerId)}}function Il(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Sa(n),n!==null&&E_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function eS(e,n,a,o,u){switch(n){case"focusin":return Br=Il(Br,e,n,a,o,u),!0;case"dragenter":return zr=Il(zr,e,n,a,o,u),!0;case"mouseover":return Hr=Il(Hr,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Pl.set(f,Il(Pl.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Fl.set(f,Il(Fl.get(f)||null,e,n,a,o,u)),!0}return!1}function C_(e){var n=Si(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Ki(e.priority,function(){T_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Ki(e.priority,function(){T_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=yd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Ko=o,a.target.dispatchEvent(o),Ko=null}else return n=Sa(a),n!==null&&E_(n),e.blockedOn=a,!1;n.shift()}return!0}function w_(e,n,a){gu(e)&&a.delete(n)}function nS(){Md=!1,Br!==null&&gu(Br)&&(Br=null),zr!==null&&gu(zr)&&(zr=null),Hr!==null&&gu(Hr)&&(Hr=null),Pl.forEach(w_),Fl.forEach(w_)}function _u(e,n){e.blockedOn===n&&(e.blockedOn=null,Md||(Md=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,nS)))}var vu=null;function D_(e){vu!==e&&(vu=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){vu===e&&(vu=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Sd(o||a)===null)continue;break}var f=Sa(a);f!==null&&(e.splice(n,3),n-=3,yh(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Mo(e){function n(X){return _u(X,e)}Br!==null&&_u(Br,e),zr!==null&&_u(zr,e),Hr!==null&&_u(Hr,e),Pl.forEach(n),Fl.forEach(n);for(var a=0;a<Vr.length;a++){var o=Vr[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Vr.length&&(a=Vr[0],a.blockedOn===null);)C_(a),a.blockedOn===null&&Vr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],b=u[Rn]||null;if(typeof f=="function")b||D_(a);else if(b){var D=null;if(f&&f.hasAttribute("formAction")){if(u=f,b=f[Rn]||null)D=b.formAction;else if(Sd(u)!==null)continue}else D=b.action;typeof D=="function"?a[o+1]=D:(a.splice(o,3),o-=3),D_(a)}}}function U_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(b){return u=b})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function bd(e){this._internalRoot=e}xu.prototype.render=bd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Xi();M_(a,o,e,n,null,null)},xu.prototype.unmount=bd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;M_(e.current,2,null,e,null,null),Jc(),n[Fi]=null}};function xu(e){this._internalRoot=e}xu.prototype.unstable_scheduleHydration=function(e){if(e){var n=es();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Vr.length&&n!==0&&n<Vr[a].priority;a++);Vr.splice(a,0,e),a===0&&C_(e)}};var L_=t.version;if(L_!=="19.2.4")throw Error(r(527,L_,"19.2.4"));Y.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var iS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yu.isDisabled&&yu.supportsFiber)try{Ft=yu.inject(iS),Ht=yu}catch{}}return zl.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=z0,f=H0,b=V0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError)),n=y_(e,1,!1,null,null,a,o,null,u,f,b,U_),e[Fi]=n.current,ad(e),new bd(n)},zl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",f=z0,b=H0,D=V0,X=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(b=a.onCaughtError),a.onRecoverableError!==void 0&&(D=a.onRecoverableError),a.formState!==void 0&&(X=a.formState)),n=y_(e,1,!0,n,a??null,o,u,X,f,b,D,U_),n.context=S_(null),a=n.current,o=Xi(),o=mr(o),u=Ar(o),u.callback=null,Rr(a,u,o),a=o,n.current.lanes=a,Bn(n,a),Ca(n),e[Fi]=n.current,ad(e),new xu(n)},zl.version="19.2.4",zl}var G_;function dS(){if(G_)return Ad.exports;G_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Ad.exports=hS(),Ad.exports}var pS=dS();const fm="182",zo={ROTATE:0,DOLLY:1,PAN:2},Bo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},mS=0,k_=1,gS=2,Wu=1,_S=2,ql=3,$r=0,Pi=1,qi=2,fr=0,Ho=1,X_=2,W_=3,j_=4,vS=5,Ns=100,xS=101,yS=102,SS=103,MS=104,bS=200,ES=201,TS=202,AS=203,pp=204,mp=205,RS=206,CS=207,wS=208,DS=209,US=210,LS=211,NS=212,OS=213,PS=214,gp=0,_p=1,vp=2,Go=3,xp=4,yp=5,Sp=6,Mp=7,nx=0,FS=1,IS=2,Na=0,ix=1,ax=2,rx=3,hm=4,sx=5,ox=6,lx=7,cx=300,Is=301,ko=302,bp=303,Ep=304,of=306,Tp=1e3,ur=1001,Ap=1002,oi=1003,BS=1004,Su=1005,di=1006,Dd=1007,Ps=1008,Zi=1009,ux=1010,fx=1011,Jl=1012,dm=1013,Pa=1014,Ua=1015,dr=1016,pm=1017,mm=1018,tc=1020,hx=35902,dx=35899,px=1021,mx=1022,ya=1023,pr=1026,Fs=1027,gx=1028,gm=1029,Xo=1030,_m=1031,vm=1033,ju=33776,Yu=33777,qu=33778,Zu=33779,Rp=35840,Cp=35841,wp=35842,Dp=35843,Up=36196,Lp=37492,Np=37496,Op=37488,Pp=37489,Fp=37490,Ip=37491,Bp=37808,zp=37809,Hp=37810,Vp=37811,Gp=37812,kp=37813,Xp=37814,Wp=37815,jp=37816,Yp=37817,qp=37818,Zp=37819,Kp=37820,Qp=37821,$p=36492,Jp=36494,tm=36495,em=36283,nm=36284,im=36285,am=36286,zS=3200,_x=0,HS=1,Kr="",Yi="srgb",Wo="srgb-linear",ef="linear",hn="srgb",bo=7680,Y_=519,VS=512,GS=513,kS=514,xm=515,XS=516,WS=517,ym=518,jS=519,q_=35044,Z_="300 es",La=2e3,nf=2001;function vx(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function af(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function YS(){const s=af("canvas");return s.style.display="block",s}const K_={};function Q_(...s){const t="THREE."+s.shift();console.log(t,...s)}function Ae(...s){const t="THREE."+s.shift();console.warn(t,...s)}function an(...s){const t="THREE."+s.shift();console.error(t,...s)}function ec(...s){const t=s.join(" ");t in K_||(K_[t]=!0,Ae(...s))}function qS(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class zs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const fi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ku=Math.PI/180,rm=180/Math.PI;function ic(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(fi[s&255]+fi[s>>8&255]+fi[s>>16&255]+fi[s>>24&255]+"-"+fi[t&255]+fi[t>>8&255]+"-"+fi[t>>16&15|64]+fi[t>>24&255]+"-"+fi[i&63|128]+fi[i>>8&255]+"-"+fi[i>>16&255]+fi[i>>24&255]+fi[r&255]+fi[r>>8&255]+fi[r>>16&255]+fi[r>>24&255]).toLowerCase()}function ze(s,t,i){return Math.max(t,Math.min(i,s))}function ZS(s,t){return(s%t+t)%t}function Ud(s,t,i){return(1-i)*s+i*t}function Hl(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Li(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const KS={DEG2RAD:Ku};class Le{constructor(t=0,i=0){Le.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ze(this.x,t.x,i.x),this.y=ze(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ze(this.x,t,i),this.y=ze(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ze(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(ze(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*r-h*l+t.x,this.y=c*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bs{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],_=r[l+3],x=c[h+0],M=c[h+1],A=c[h+2],R=c[h+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(d>=1){t[i+0]=x,t[i+1]=M,t[i+2]=A,t[i+3]=R;return}if(_!==R||m!==x||p!==M||g!==A){let E=m*x+p*M+g*A+_*R;E<0&&(x=-x,M=-M,A=-A,R=-R,E=-E);let y=1-d;if(E<.9995){const z=Math.acos(E),N=Math.sin(z);y=Math.sin(y*z)/N,d=Math.sin(d*z)/N,m=m*y+x*d,p=p*y+M*d,g=g*y+A*d,_=_*y+R*d}else{m=m*y+x*d,p=p*y+M*d,g=g*y+A*d,_=_*y+R*d;const z=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=z,p*=z,g*=z,_*=z}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],_=c[h],x=c[h+1],M=c[h+2],A=c[h+3];return t[i]=d*A+g*_+m*M-p*x,t[i+1]=m*A+g*x+p*_-d*M,t[i+2]=p*A+g*M+d*x-m*_,t[i+3]=g*A-d*_-m*x-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),_=d(c/2),x=m(r/2),M=m(l/2),A=m(c/2);switch(h){case"XYZ":this._x=x*g*_+p*M*A,this._y=p*M*_-x*g*A,this._z=p*g*A+x*M*_,this._w=p*g*_-x*M*A;break;case"YXZ":this._x=x*g*_+p*M*A,this._y=p*M*_-x*g*A,this._z=p*g*A-x*M*_,this._w=p*g*_+x*M*A;break;case"ZXY":this._x=x*g*_-p*M*A,this._y=p*M*_+x*g*A,this._z=p*g*A+x*M*_,this._w=p*g*_-x*M*A;break;case"ZYX":this._x=x*g*_-p*M*A,this._y=p*M*_+x*g*A,this._z=p*g*A-x*M*_,this._w=p*g*_+x*M*A;break;case"YZX":this._x=x*g*_+p*M*A,this._y=p*M*_+x*g*A,this._z=p*g*A-x*M*_,this._w=p*g*_-x*M*A;break;case"XZY":this._x=x*g*_-p*M*A,this._y=p*M*_-x*g*A,this._z=p*g*A+x*M*_,this._w=p*g*_+x*M*A;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],x=r+d+_;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-m)*M,this._y=(c-p)*M,this._z=(h-l)*M}else if(r>d&&r>_){const M=2*Math.sqrt(1+r-d-_);this._w=(g-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+p)/M}else if(d>_){const M=2*Math.sqrt(1+d-r-_);this._w=(c-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+_-r-d);this._w=(h-l)/M,this._x=(c+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-c*m,this._y=l*g+h*m+c*d-r*p,this._z=c*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let r=t._x,l=t._y,c=t._z,h=t._w,d=this.dot(t);d<0&&(r=-r,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class et{constructor(t=0,i=0,r=0){et.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion($_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion($_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),g=2*(d*i-c*l),_=2*(c*r-h*i);return this.x=i+m*p+h*_-d*g,this.y=r+m*g+d*p-c*_,this.z=l+m*_+c*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ze(this.x,t.x,i.x),this.y=ze(this.y,t.y,i.y),this.z=ze(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ze(this.x,t,i),this.y=ze(this.y,t,i),this.z=ze(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ze(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Ld.copy(this).projectOnVector(t),this.sub(Ld)}reflect(t){return this.sub(Ld.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(ze(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ld=new et,$_=new Bs;class Ie{constructor(t,i,r,l,c,h,d,m,p){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p)}set(t,i,r,l,c,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],_=r[7],x=r[2],M=r[5],A=r[8],R=l[0],E=l[3],y=l[6],z=l[1],N=l[4],O=l[7],B=l[2],P=l[5],F=l[8];return c[0]=h*R+d*z+m*B,c[3]=h*E+d*N+m*P,c[6]=h*y+d*O+m*F,c[1]=p*R+g*z+_*B,c[4]=p*E+g*N+_*P,c[7]=p*y+g*O+_*F,c[2]=x*R+M*z+A*B,c[5]=x*E+M*N+A*P,c[8]=x*y+M*O+A*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-r*c*g+r*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=g*h-d*p,x=d*m-g*c,M=p*c-h*m,A=i*_+r*x+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=_*R,t[1]=(l*p-g*r)*R,t[2]=(d*r-l*h)*R,t[3]=x*R,t[4]=(g*i-l*m)*R,t[5]=(l*c-d*i)*R,t[6]=M*R,t[7]=(r*m-p*i)*R,t[8]=(h*i-r*c)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Nd.makeScale(t,i)),this}rotate(t){return this.premultiply(Nd.makeRotation(-t)),this}translate(t,i){return this.premultiply(Nd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Nd=new Ie,J_=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tv=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function QS(){const s={enabled:!0,workingColorSpace:Wo,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===hn&&(l.r=hr(l.r),l.g=hr(l.g),l.b=hr(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===hn&&(l.r=Vo(l.r),l.g=Vo(l.g),l.b=Vo(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Kr?ef:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ec("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ec("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Wo]:{primaries:t,whitePoint:r,transfer:ef,toXYZ:J_,fromXYZ:tv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Yi},outputColorSpaceConfig:{drawingBufferColorSpace:Yi}},[Yi]:{primaries:t,whitePoint:r,transfer:hn,toXYZ:J_,fromXYZ:tv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Yi}}}),s}const $e=QS();function hr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Vo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Eo;class $S{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{Eo===void 0&&(Eo=af("canvas")),Eo.width=t.width,Eo.height=t.height;const l=Eo.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=Eo}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=af("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=hr(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(hr(i[r]/255)*255):i[r]=hr(i[r]);return{data:i,width:t.width,height:t.height}}else return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let JS=0;class Sm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=ic(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Od(l[h].image)):c.push(Od(l[h]))}else c=Od(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function Od(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?$S.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}let tM=0;const Pd=new et;class xi extends zs{constructor(t=xi.DEFAULT_IMAGE,i=xi.DEFAULT_MAPPING,r=ur,l=ur,c=di,h=Ps,d=ya,m=Zi,p=xi.DEFAULT_ANISOTROPY,g=Kr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=ic(),this.name="",this.source=new Sm(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Pd).x}get height(){return this.source.getSize(Pd).y}get depth(){return this.source.getSize(Pd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){Ae(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Ae(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Tp:t.x=t.x-Math.floor(t.x);break;case ur:t.x=t.x<0?0:1;break;case Ap:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Tp:t.y=t.y-Math.floor(t.y);break;case ur:t.y=t.y<0?0:1;break;case Ap:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}xi.DEFAULT_IMAGE=null;xi.DEFAULT_MAPPING=cx;xi.DEFAULT_ANISOTROPY=1;class Nn{constructor(t=0,i=0,r=0,l=1){Nn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],x=m[1],M=m[5],A=m[9],R=m[2],E=m[6],y=m[10];if(Math.abs(g-x)<.01&&Math.abs(_-R)<.01&&Math.abs(A-E)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+R)<.1&&Math.abs(A+E)<.1&&Math.abs(p+M+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,O=(M+1)/2,B=(y+1)/2,P=(g+x)/4,F=(_+R)/4,Z=(A+E)/4;return N>O&&N>B?N<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(N),l=P/r,c=F/r):O>B?O<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(O),r=P/l,c=Z/l):B<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),r=F/c,l=Z/c),this.set(r,l,c,i),this}let z=Math.sqrt((E-A)*(E-A)+(_-R)*(_-R)+(x-g)*(x-g));return Math.abs(z)<.001&&(z=1),this.x=(E-A)/z,this.y=(_-R)/z,this.z=(x-g)/z,this.w=Math.acos((p+M+y-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ze(this.x,t.x,i.x),this.y=ze(this.y,t.y,i.y),this.z=ze(this.z,t.z,i.z),this.w=ze(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ze(this.x,t,i),this.y=ze(this.y,t,i),this.z=ze(this.z,t,i),this.w=ze(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ze(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eM extends zs{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new Nn(0,0,t,i),this.scissorTest=!1,this.viewport=new Nn(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new xi(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:di,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Sm(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oa extends eM{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class xx extends xi{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=oi,this.minFilter=oi,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class nM extends xi{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=oi,this.minFilter=oi,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yo{constructor(t=new et(1/0,1/0,1/0),i=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(ga.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(ga.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=ga.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,ga):ga.fromBufferAttribute(c,h),ga.applyMatrix4(t.matrixWorld),this.expandByPoint(ga);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mu.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Mu.copy(r.boundingBox)),Mu.applyMatrix4(t.matrixWorld),this.union(Mu)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ga),ga.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vl),bu.subVectors(this.max,Vl),To.subVectors(t.a,Vl),Ao.subVectors(t.b,Vl),Ro.subVectors(t.c,Vl),kr.subVectors(Ao,To),Xr.subVectors(Ro,Ao),Rs.subVectors(To,Ro);let i=[0,-kr.z,kr.y,0,-Xr.z,Xr.y,0,-Rs.z,Rs.y,kr.z,0,-kr.x,Xr.z,0,-Xr.x,Rs.z,0,-Rs.x,-kr.y,kr.x,0,-Xr.y,Xr.x,0,-Rs.y,Rs.x,0];return!Fd(i,To,Ao,Ro,bu)||(i=[1,0,0,0,1,0,0,0,1],!Fd(i,To,Ao,Ro,bu))?!1:(Eu.crossVectors(kr,Xr),i=[Eu.x,Eu.y,Eu.z],Fd(i,To,Ao,Ro,bu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ga).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ga).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ar),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ar=[new et,new et,new et,new et,new et,new et,new et,new et],ga=new et,Mu=new Yo,To=new et,Ao=new et,Ro=new et,kr=new et,Xr=new et,Rs=new et,Vl=new et,bu=new et,Eu=new et,Cs=new et;function Fd(s,t,i,r,l){for(let c=0,h=s.length-3;c<=h;c+=3){Cs.fromArray(s,c);const d=l.x*Math.abs(Cs.x)+l.y*Math.abs(Cs.y)+l.z*Math.abs(Cs.z),m=t.dot(Cs),p=i.dot(Cs),g=r.dot(Cs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const iM=new Yo,Gl=new et,Id=new et;class lf{constructor(t=new et,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):iM.setFromPoints(t).getCenter(r);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gl.subVectors(t,this.center);const i=Gl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Gl,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Id.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gl.copy(t.center).add(Id)),this.expandByPoint(Gl.copy(t.center).sub(Id))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const rr=new et,Bd=new et,Tu=new et,Wr=new et,zd=new et,Au=new et,Hd=new et;class Mm{constructor(t=new et,i=new et(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,rr)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=rr.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(rr.copy(this.origin).addScaledVector(this.direction,i),rr.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Bd.copy(t).add(i).multiplyScalar(.5),Tu.copy(i).sub(t).normalize(),Wr.copy(this.origin).sub(Bd);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Tu),d=Wr.dot(this.direction),m=-Wr.dot(Tu),p=Wr.lengthSq(),g=Math.abs(1-h*h);let _,x,M,A;if(g>0)if(_=h*m-d,x=h*d-m,A=c*g,_>=0)if(x>=-A)if(x<=A){const R=1/g;_*=R,x*=R,M=_*(_+h*x+2*d)+x*(h*_+x+2*m)+p}else x=c,_=Math.max(0,-(h*x+d)),M=-_*_+x*(x+2*m)+p;else x=-c,_=Math.max(0,-(h*x+d)),M=-_*_+x*(x+2*m)+p;else x<=-A?(_=Math.max(0,-(-h*c+d)),x=_>0?-c:Math.min(Math.max(-c,-m),c),M=-_*_+x*(x+2*m)+p):x<=A?(_=0,x=Math.min(Math.max(-c,-m),c),M=x*(x+2*m)+p):(_=Math.max(0,-(h*c+d)),x=_>0?c:Math.min(Math.max(-c,-m),c),M=-_*_+x*(x+2*m)+p);else x=h>0?-c:c,_=Math.max(0,-(h*x+d)),M=-_*_+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Bd).addScaledVector(Tu,x),M}intersectSphere(t,i){rr.subVectors(t.center,this.origin);const r=rr.dot(this.direction),l=rr.dot(rr)-r*r,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(r=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(r=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(c=(t.min.y-x.y)*g,h=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,h=(t.min.y-x.y)*g),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),_>=0?(d=(t.min.z-x.z)*_,m=(t.max.z-x.z)*_):(d=(t.max.z-x.z)*_,m=(t.min.z-x.z)*_),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,rr)!==null}intersectTriangle(t,i,r,l,c){zd.subVectors(i,t),Au.subVectors(r,t),Hd.crossVectors(zd,Au);let h=this.direction.dot(Hd),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Wr.subVectors(this.origin,t);const m=d*this.direction.dot(Au.crossVectors(Wr,Au));if(m<0)return null;const p=d*this.direction.dot(zd.cross(Wr));if(p<0||m+p>h)return null;const g=-d*Wr.dot(Hd);return g<0?null:this.at(g/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class An{constructor(t,i,r,l,c,h,d,m,p,g,_,x,M,A,R,E){An.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p,g,_,x,M,A,R,E)}set(t,i,r,l,c,h,d,m,p,g,_,x,M,A,R,E){const y=this.elements;return y[0]=t,y[4]=i,y[8]=r,y[12]=l,y[1]=c,y[5]=h,y[9]=d,y[13]=m,y[2]=p,y[6]=g,y[10]=_,y[14]=x,y[3]=M,y[7]=A,y[11]=R,y[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new An().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,r=t.elements,l=1/Co.setFromMatrixColumn(t,0).length(),c=1/Co.setFromMatrixColumn(t,1).length(),h=1/Co.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const x=h*g,M=h*_,A=d*g,R=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=M+A*p,i[5]=x-R*p,i[9]=-d*m,i[2]=R-x*p,i[6]=A+M*p,i[10]=h*m}else if(t.order==="YXZ"){const x=m*g,M=m*_,A=p*g,R=p*_;i[0]=x+R*d,i[4]=A*d-M,i[8]=h*p,i[1]=h*_,i[5]=h*g,i[9]=-d,i[2]=M*d-A,i[6]=R+x*d,i[10]=h*m}else if(t.order==="ZXY"){const x=m*g,M=m*_,A=p*g,R=p*_;i[0]=x-R*d,i[4]=-h*_,i[8]=A+M*d,i[1]=M+A*d,i[5]=h*g,i[9]=R-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const x=h*g,M=h*_,A=d*g,R=d*_;i[0]=m*g,i[4]=A*p-M,i[8]=x*p+R,i[1]=m*_,i[5]=R*p+x,i[9]=M*p-A,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,M=h*p,A=d*m,R=d*p;i[0]=m*g,i[4]=R-x*_,i[8]=A*_+M,i[1]=_,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*_+A,i[10]=x-R*_}else if(t.order==="XZY"){const x=h*m,M=h*p,A=d*m,R=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=x*_+R,i[5]=h*g,i[9]=M*_-A,i[2]=A*_-M,i[6]=d*g,i[10]=R*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(aM,t,rM)}lookAt(t,i,r){const l=this.elements;return Wi.subVectors(t,i),Wi.lengthSq()===0&&(Wi.z=1),Wi.normalize(),jr.crossVectors(r,Wi),jr.lengthSq()===0&&(Math.abs(r.z)===1?Wi.x+=1e-4:Wi.z+=1e-4,Wi.normalize(),jr.crossVectors(r,Wi)),jr.normalize(),Ru.crossVectors(Wi,jr),l[0]=jr.x,l[4]=Ru.x,l[8]=Wi.x,l[1]=jr.y,l[5]=Ru.y,l[9]=Wi.y,l[2]=jr.z,l[6]=Ru.z,l[10]=Wi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],_=r[5],x=r[9],M=r[13],A=r[2],R=r[6],E=r[10],y=r[14],z=r[3],N=r[7],O=r[11],B=r[15],P=l[0],F=l[4],Z=l[8],C=l[12],U=l[1],k=l[5],j=l[9],it=l[13],pt=l[2],xt=l[6],H=l[10],Y=l[14],st=l[3],Pt=l[7],Ut=l[11],V=l[15];return c[0]=h*P+d*U+m*pt+p*st,c[4]=h*F+d*k+m*xt+p*Pt,c[8]=h*Z+d*j+m*H+p*Ut,c[12]=h*C+d*it+m*Y+p*V,c[1]=g*P+_*U+x*pt+M*st,c[5]=g*F+_*k+x*xt+M*Pt,c[9]=g*Z+_*j+x*H+M*Ut,c[13]=g*C+_*it+x*Y+M*V,c[2]=A*P+R*U+E*pt+y*st,c[6]=A*F+R*k+E*xt+y*Pt,c[10]=A*Z+R*j+E*H+y*Ut,c[14]=A*C+R*it+E*Y+y*V,c[3]=z*P+N*U+O*pt+B*st,c[7]=z*F+N*k+O*xt+B*Pt,c[11]=z*Z+N*j+O*H+B*Ut,c[15]=z*C+N*it+O*Y+B*V,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],_=t[6],x=t[10],M=t[14],A=t[3],R=t[7],E=t[11],y=t[15],z=m*M-p*x,N=d*M-p*_,O=d*x-m*_,B=h*M-p*g,P=h*x-m*g,F=h*_-d*g;return i*(R*z-E*N+y*O)-r*(A*z-E*B+y*P)+l*(A*N-R*B+y*F)-c*(A*O-R*P+E*F)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=t[9],x=t[10],M=t[11],A=t[12],R=t[13],E=t[14],y=t[15],z=_*E*p-R*x*p+R*m*M-d*E*M-_*m*y+d*x*y,N=A*x*p-g*E*p-A*m*M+h*E*M+g*m*y-h*x*y,O=g*R*p-A*_*p+A*d*M-h*R*M-g*d*y+h*_*y,B=A*_*m-g*R*m-A*d*x+h*R*x+g*d*E-h*_*E,P=i*z+r*N+l*O+c*B;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/P;return t[0]=z*F,t[1]=(R*x*c-_*E*c-R*l*M+r*E*M+_*l*y-r*x*y)*F,t[2]=(d*E*c-R*m*c+R*l*p-r*E*p-d*l*y+r*m*y)*F,t[3]=(_*m*c-d*x*c-_*l*p+r*x*p+d*l*M-r*m*M)*F,t[4]=N*F,t[5]=(g*E*c-A*x*c+A*l*M-i*E*M-g*l*y+i*x*y)*F,t[6]=(A*m*c-h*E*c-A*l*p+i*E*p+h*l*y-i*m*y)*F,t[7]=(h*x*c-g*m*c+g*l*p-i*x*p-h*l*M+i*m*M)*F,t[8]=O*F,t[9]=(A*_*c-g*R*c-A*r*M+i*R*M+g*r*y-i*_*y)*F,t[10]=(h*R*c-A*d*c+A*r*p-i*R*p-h*r*y+i*d*y)*F,t[11]=(g*d*c-h*_*c-g*r*p+i*_*p+h*r*M-i*d*M)*F,t[12]=B*F,t[13]=(g*R*l-A*_*l+A*r*x-i*R*x-g*r*E+i*_*E)*F,t[14]=(A*d*l-h*R*l-A*r*m+i*R*m+h*r*E-i*d*E)*F,t[15]=(h*_*l-g*d*l+g*r*m-i*_*m-h*r*x+i*d*x)*F,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=t.x,d=t.y,m=t.z,p=c*h,g=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,h){return this.set(1,r,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,g=h+h,_=d+d,x=c*p,M=c*g,A=c*_,R=h*g,E=h*_,y=d*_,z=m*p,N=m*g,O=m*_,B=r.x,P=r.y,F=r.z;return l[0]=(1-(R+y))*B,l[1]=(M+O)*B,l[2]=(A-N)*B,l[3]=0,l[4]=(M-O)*P,l[5]=(1-(x+y))*P,l[6]=(E+z)*P,l[7]=0,l[8]=(A+N)*F,l[9]=(E-z)*F,l[10]=(1-(x+R))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let c=Co.set(l[0],l[1],l[2]).length();const h=Co.set(l[4],l[5],l[6]).length(),d=Co.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),_a.copy(this);const p=1/c,g=1/h,_=1/d;return _a.elements[0]*=p,_a.elements[1]*=p,_a.elements[2]*=p,_a.elements[4]*=g,_a.elements[5]*=g,_a.elements[6]*=g,_a.elements[8]*=_,_a.elements[9]*=_,_a.elements[10]*=_,i.setFromRotationMatrix(_a),r.x=c,r.y=h,r.z=d,this}makePerspective(t,i,r,l,c,h,d=La,m=!1){const p=this.elements,g=2*c/(i-t),_=2*c/(r-l),x=(i+t)/(i-t),M=(r+l)/(r-l);let A,R;if(m)A=c/(h-c),R=h*c/(h-c);else if(d===La)A=-(h+c)/(h-c),R=-2*h*c/(h-c);else if(d===nf)A=-h/(h-c),R=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,h,d=La,m=!1){const p=this.elements,g=2/(i-t),_=2/(r-l),x=-(i+t)/(i-t),M=-(r+l)/(r-l);let A,R;if(m)A=1/(h-c),R=h/(h-c);else if(d===La)A=-2/(h-c),R=-(h+c)/(h-c);else if(d===nf)A=-1/(h-c),R=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=A,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const Co=new et,_a=new An,aM=new et(0,0,0),rM=new et(1,1,1),jr=new et,Ru=new et,Wi=new et,ev=new An,nv=new Bs;class Fa{constructor(t=0,i=0,r=0,l=Fa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(ze(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ze(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ze(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return ev.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ev,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return nv.setFromEuler(this),this.setFromQuaternion(nv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fa.DEFAULT_ORDER="XYZ";class yx{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let sM=0;const iv=new et,wo=new Bs,sr=new An,Cu=new et,kl=new et,oM=new et,lM=new Bs,av=new et(1,0,0),rv=new et(0,1,0),sv=new et(0,0,1),ov={type:"added"},cM={type:"removed"},Do={type:"childadded",child:null},Vd={type:"childremoved",child:null};class li extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=ic(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=li.DEFAULT_UP.clone();const t=new et,i=new Fa,r=new Bs,l=new et(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new An},normalMatrix:{value:new Ie}}),this.matrix=new An,this.matrixWorld=new An,this.matrixAutoUpdate=li.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return wo.setFromAxisAngle(t,i),this.quaternion.multiply(wo),this}rotateOnWorldAxis(t,i){return wo.setFromAxisAngle(t,i),this.quaternion.premultiply(wo),this}rotateX(t){return this.rotateOnAxis(av,t)}rotateY(t){return this.rotateOnAxis(rv,t)}rotateZ(t){return this.rotateOnAxis(sv,t)}translateOnAxis(t,i){return iv.copy(t).applyQuaternion(this.quaternion),this.position.add(iv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(av,t)}translateY(t){return this.translateOnAxis(rv,t)}translateZ(t){return this.translateOnAxis(sv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(sr.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Cu.copy(t):Cu.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),kl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sr.lookAt(kl,Cu,this.up):sr.lookAt(Cu,kl,this.up),this.quaternion.setFromRotationMatrix(sr),l&&(sr.extractRotation(l.matrixWorld),wo.setFromRotationMatrix(sr),this.quaternion.premultiply(wo.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(an("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ov),Do.child=t,this.dispatchEvent(Do),Do.child=null):an("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(cM),Vd.child=t,this.dispatchEvent(Vd),Vd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),sr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),sr.multiply(t.parent.matrixWorld)),t.applyMatrix4(sr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ov),Do.child=t,this.dispatchEvent(Do),Do.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kl,t,oM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kl,lM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),_=h(t.shapes),x=h(t.skeletons),M=h(t.animations),A=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}li.DEFAULT_UP=new et(0,1,0);li.DEFAULT_MATRIX_AUTO_UPDATE=!0;li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const va=new et,or=new et,Gd=new et,lr=new et,Uo=new et,Lo=new et,lv=new et,kd=new et,Xd=new et,Wd=new et,jd=new Nn,Yd=new Nn,qd=new Nn;class xa{constructor(t=new et,i=new et,r=new et){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),va.subVectors(t,i),l.cross(va);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){va.subVectors(l,i),or.subVectors(r,i),Gd.subVectors(t,i);const h=va.dot(va),d=va.dot(or),m=va.dot(Gd),p=or.dot(or),g=or.dot(Gd),_=h*p-d*d;if(_===0)return c.set(0,0,0),null;const x=1/_,M=(p*m-d*g)*x,A=(h*g-d*m)*x;return c.set(1-M-A,A,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,lr)===null?!1:lr.x>=0&&lr.y>=0&&lr.x+lr.y<=1}static getInterpolation(t,i,r,l,c,h,d,m){return this.getBarycoord(t,i,r,l,lr)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,lr.x),m.addScaledVector(h,lr.y),m.addScaledVector(d,lr.z),m)}static getInterpolatedAttribute(t,i,r,l,c,h){return jd.setScalar(0),Yd.setScalar(0),qd.setScalar(0),jd.fromBufferAttribute(t,i),Yd.fromBufferAttribute(t,r),qd.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(jd,c.x),h.addScaledVector(Yd,c.y),h.addScaledVector(qd,c.z),h}static isFrontFacing(t,i,r,l){return va.subVectors(r,i),or.subVectors(t,i),va.cross(or).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return va.subVectors(this.c,this.b),or.subVectors(this.a,this.b),va.cross(or).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xa.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return xa.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return xa.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return xa.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xa.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let h,d;Uo.subVectors(l,r),Lo.subVectors(c,r),kd.subVectors(t,r);const m=Uo.dot(kd),p=Lo.dot(kd);if(m<=0&&p<=0)return i.copy(r);Xd.subVectors(t,l);const g=Uo.dot(Xd),_=Lo.dot(Xd);if(g>=0&&_<=g)return i.copy(l);const x=m*_-g*p;if(x<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(Uo,h);Wd.subVectors(t,c);const M=Uo.dot(Wd),A=Lo.dot(Wd);if(A>=0&&M<=A)return i.copy(c);const R=M*p-m*A;if(R<=0&&p>=0&&A<=0)return d=p/(p-A),i.copy(r).addScaledVector(Lo,d);const E=g*A-M*_;if(E<=0&&_-g>=0&&M-A>=0)return lv.subVectors(c,l),d=(_-g)/(_-g+(M-A)),i.copy(l).addScaledVector(lv,d);const y=1/(E+R+x);return h=R*y,d=x*y,i.copy(r).addScaledVector(Uo,h).addScaledVector(Lo,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Sx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yr={h:0,s:0,l:0},wu={h:0,s:0,l:0};function Zd(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class He{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Yi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$e.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=$e.workingColorSpace){return this.r=t,this.g=i,this.b=r,$e.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=$e.workingColorSpace){if(t=ZS(t,1),i=ze(i,0,1),r=ze(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=Zd(h,c,t+1/3),this.g=Zd(h,c,t),this.b=Zd(h,c,t-1/3)}return $e.colorSpaceToWorking(this,l),this}setStyle(t,i=Yi){function r(c){c!==void 0&&parseFloat(c)<1&&Ae("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:Ae("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);Ae("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Yi){const r=Sx[t.toLowerCase()];return r!==void 0?this.setHex(r,i):Ae("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hr(t.r),this.g=hr(t.g),this.b=hr(t.b),this}copyLinearToSRGB(t){return this.r=Vo(t.r),this.g=Vo(t.g),this.b=Vo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Yi){return $e.workingToColorSpace(hi.copy(this),t),Math.round(ze(hi.r*255,0,255))*65536+Math.round(ze(hi.g*255,0,255))*256+Math.round(ze(hi.b*255,0,255))}getHexString(t=Yi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=$e.workingColorSpace){$e.workingToColorSpace(hi.copy(this),i);const r=hi.r,l=hi.g,c=hi.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=g<=.5?_/(h+d):_/(2-h-d),h){case r:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-r)/_+2;break;case c:m=(r-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=$e.workingColorSpace){return $e.workingToColorSpace(hi.copy(this),i),t.r=hi.r,t.g=hi.g,t.b=hi.b,t}getStyle(t=Yi){$e.workingToColorSpace(hi.copy(this),t);const i=hi.r,r=hi.g,l=hi.b;return t!==Yi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Yr),this.setHSL(Yr.h+t,Yr.s+i,Yr.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Yr),t.getHSL(wu);const r=Ud(Yr.h,wu.h,i),l=Ud(Yr.s,wu.s,i),c=Ud(Yr.l,wu.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hi=new He;He.NAMES=Sx;let uM=0;class Hs extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=ic(),this.name="",this.type="Material",this.blending=Ho,this.side=$r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pp,this.blendDst=mp,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Y_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bo,this.stencilZFail=bo,this.stencilZPass=bo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){Ae(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Ae(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ho&&(r.blending=this.blending),this.side!==$r&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==pp&&(r.blendSrc=this.blendSrc),this.blendDst!==mp&&(r.blendDst=this.blendDst),this.blendEquation!==Ns&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Go&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Y_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bo&&(r.stencilFail=this.stencilFail),this.stencilZFail!==bo&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==bo&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class bm extends Hs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fa,this.combine=nx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Wn=new et,Du=new Le;let fM=0;class Zn{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=q_,this.updateRanges=[],this.gpuType=Ua,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Du.fromBufferAttribute(this,i),Du.applyMatrix3(t),this.setXY(i,Du.x,Du.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Wn.fromBufferAttribute(this,i),Wn.applyMatrix3(t),this.setXYZ(i,Wn.x,Wn.y,Wn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)Wn.fromBufferAttribute(this,i),Wn.applyMatrix4(t),this.setXYZ(i,Wn.x,Wn.y,Wn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Wn.fromBufferAttribute(this,i),Wn.applyNormalMatrix(t),this.setXYZ(i,Wn.x,Wn.y,Wn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Wn.fromBufferAttribute(this,i),Wn.transformDirection(t),this.setXYZ(i,Wn.x,Wn.y,Wn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Hl(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Li(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Hl(i,this.array)),i}setX(t,i){return this.normalized&&(i=Li(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Hl(i,this.array)),i}setY(t,i){return this.normalized&&(i=Li(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Hl(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Li(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Hl(i,this.array)),i}setW(t,i){return this.normalized&&(i=Li(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Li(i,this.array),r=Li(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Li(i,this.array),r=Li(r,this.array),l=Li(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Li(i,this.array),r=Li(r,this.array),l=Li(l,this.array),c=Li(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==q_&&(t.usage=this.usage),t}}class Mx extends Zn{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class bx extends Zn{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class yi extends Zn{constructor(t,i,r){super(new Float32Array(t),i,r)}}let hM=0;const ca=new An,Kd=new li,No=new et,ji=new Yo,Xl=new Yo,ti=new et;class ei extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=ic(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vx(t)?bx:Mx)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new Ie().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ca.makeRotationFromQuaternion(t),this.applyMatrix4(ca),this}rotateX(t){return ca.makeRotationX(t),this.applyMatrix4(ca),this}rotateY(t){return ca.makeRotationY(t),this.applyMatrix4(ca),this}rotateZ(t){return ca.makeRotationZ(t),this.applyMatrix4(ca),this}translate(t,i,r){return ca.makeTranslation(t,i,r),this.applyMatrix4(ca),this}scale(t,i,r){return ca.makeScale(t,i,r),this.applyMatrix4(ca),this}lookAt(t){return Kd.lookAt(t),Kd.updateMatrix(),this.applyMatrix4(Kd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(No).negate(),this.translate(No.x,No.y,No.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new yi(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){an("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ji.setFromBufferAttribute(c),this.morphTargetsRelative?(ti.addVectors(this.boundingBox.min,ji.min),this.boundingBox.expandByPoint(ti),ti.addVectors(this.boundingBox.max,ji.max),this.boundingBox.expandByPoint(ti)):(this.boundingBox.expandByPoint(ji.min),this.boundingBox.expandByPoint(ji.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&an('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lf);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){an("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new et,1/0);return}if(t){const r=this.boundingSphere.center;if(ji.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Xl.setFromBufferAttribute(d),this.morphTargetsRelative?(ti.addVectors(ji.min,Xl.min),ji.expandByPoint(ti),ti.addVectors(ji.max,Xl.max),ji.expandByPoint(ti)):(ji.expandByPoint(Xl.min),ji.expandByPoint(Xl.max))}ji.getCenter(r);let l=0;for(let c=0,h=t.count;c<h;c++)ti.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(ti));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)ti.fromBufferAttribute(d,p),m&&(No.fromBufferAttribute(t,p),ti.add(No)),l=Math.max(l,r.distanceToSquared(ti))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&an('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){an("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let Z=0;Z<r.count;Z++)d[Z]=new et,m[Z]=new et;const p=new et,g=new et,_=new et,x=new Le,M=new Le,A=new Le,R=new et,E=new et;function y(Z,C,U){p.fromBufferAttribute(r,Z),g.fromBufferAttribute(r,C),_.fromBufferAttribute(r,U),x.fromBufferAttribute(c,Z),M.fromBufferAttribute(c,C),A.fromBufferAttribute(c,U),g.sub(p),_.sub(p),M.sub(x),A.sub(x);const k=1/(M.x*A.y-A.x*M.y);isFinite(k)&&(R.copy(g).multiplyScalar(A.y).addScaledVector(_,-M.y).multiplyScalar(k),E.copy(_).multiplyScalar(M.x).addScaledVector(g,-A.x).multiplyScalar(k),d[Z].add(R),d[C].add(R),d[U].add(R),m[Z].add(E),m[C].add(E),m[U].add(E))}let z=this.groups;z.length===0&&(z=[{start:0,count:t.count}]);for(let Z=0,C=z.length;Z<C;++Z){const U=z[Z],k=U.start,j=U.count;for(let it=k,pt=k+j;it<pt;it+=3)y(t.getX(it+0),t.getX(it+1),t.getX(it+2))}const N=new et,O=new et,B=new et,P=new et;function F(Z){B.fromBufferAttribute(l,Z),P.copy(B);const C=d[Z];N.copy(C),N.sub(B.multiplyScalar(B.dot(C))).normalize(),O.crossVectors(P,C);const k=O.dot(m[Z])<0?-1:1;h.setXYZW(Z,N.x,N.y,N.z,k)}for(let Z=0,C=z.length;Z<C;++Z){const U=z[Z],k=U.start,j=U.count;for(let it=k,pt=k+j;it<pt;it+=3)F(t.getX(it+0)),F(t.getX(it+1)),F(t.getX(it+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Zn(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new et,c=new et,h=new et,d=new et,m=new et,p=new et,g=new et,_=new et;if(t)for(let x=0,M=t.count;x<M;x+=3){const A=t.getX(x+0),R=t.getX(x+1),E=t.getX(x+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,E),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,E),d.add(g),m.add(g),p.add(g),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(E,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)ti.fromBufferAttribute(t,i),ti.normalize(),t.setXYZ(i,ti.x,ti.y,ti.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,_=d.normalized,x=new p.constructor(m.length*g);let M=0,A=0;for(let R=0,E=m.length;R<E;R++){d.isInterleavedBufferAttribute?M=m[R]*d.data.stride+d.offset:M=m[R]*g;for(let y=0;y<g;y++)x[A++]=p[M++]}return new Zn(x,g,_)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ei,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const x=p[g],M=t(x,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,x=p.length;_<x;_++){const M=p[_];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let x=0,M=_.length;x<M;x++)g.push(_[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cv=new An,ws=new Mm,Uu=new lf,uv=new et,Lu=new et,Nu=new et,Ou=new et,Qd=new et,Pu=new et,fv=new et,Fu=new et;class Oi extends li{constructor(t=new ei,i=new bm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Pu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&(Qd.fromBufferAttribute(_,t),h?Pu.addScaledVector(Qd,g):Pu.addScaledVector(Qd.sub(i),g))}i.add(Pu)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Uu.copy(r.boundingSphere),Uu.applyMatrix4(c),ws.copy(t.ray).recast(t.near),!(Uu.containsPoint(ws.origin)===!1&&(ws.intersectSphere(Uu,uv)===null||ws.origin.distanceToSquared(uv)>(t.far-t.near)**2))&&(cv.copy(c).invert(),ws.copy(t.ray).applyMatrix4(cv),!(r.boundingBox!==null&&ws.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,ws)))}_computeIntersections(t,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,R=x.length;A<R;A++){const E=x[A],y=h[E.materialIndex],z=Math.max(E.start,M.start),N=Math.min(d.count,Math.min(E.start+E.count,M.start+M.count));for(let O=z,B=N;O<B;O+=3){const P=d.getX(O),F=d.getX(O+1),Z=d.getX(O+2);l=Iu(this,y,t,r,p,g,_,P,F,Z),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=E.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let E=A,y=R;E<y;E+=3){const z=d.getX(E),N=d.getX(E+1),O=d.getX(E+2);l=Iu(this,h,t,r,p,g,_,z,N,O),l&&(l.faceIndex=Math.floor(E/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let A=0,R=x.length;A<R;A++){const E=x[A],y=h[E.materialIndex],z=Math.max(E.start,M.start),N=Math.min(m.count,Math.min(E.start+E.count,M.start+M.count));for(let O=z,B=N;O<B;O+=3){const P=O,F=O+1,Z=O+2;l=Iu(this,y,t,r,p,g,_,P,F,Z),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=E.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let E=A,y=R;E<y;E+=3){const z=E,N=E+1,O=E+2;l=Iu(this,h,t,r,p,g,_,z,N,O),l&&(l.faceIndex=Math.floor(E/3),i.push(l))}}}}function dM(s,t,i,r,l,c,h,d){let m;if(t.side===Pi?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,t.side===$r,d),m===null)return null;Fu.copy(d),Fu.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Fu);return p<i.near||p>i.far?null:{distance:p,point:Fu.clone(),object:s}}function Iu(s,t,i,r,l,c,h,d,m,p){s.getVertexPosition(d,Lu),s.getVertexPosition(m,Nu),s.getVertexPosition(p,Ou);const g=dM(s,t,i,r,Lu,Nu,Ou,fv);if(g){const _=new et;xa.getBarycoord(fv,Lu,Nu,Ou,_),l&&(g.uv=xa.getInterpolatedAttribute(l,d,m,p,_,new Le)),c&&(g.uv1=xa.getInterpolatedAttribute(c,d,m,p,_,new Le)),h&&(g.normal=xa.getInterpolatedAttribute(h,d,m,p,_,new et),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new et,materialIndex:0};xa.getNormal(Lu,Nu,Ou,x.normal),g.face=x,g.barycoord=_}return g}class ac extends ei{constructor(t=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],_=[];let x=0,M=0;A("z","y","x",-1,-1,r,i,t,h,c,0),A("z","y","x",1,-1,r,i,-t,h,c,1),A("x","z","y",1,1,t,r,i,l,h,2),A("x","z","y",1,-1,t,r,-i,l,h,3),A("x","y","z",1,-1,t,i,r,l,c,4),A("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new yi(p,3)),this.setAttribute("normal",new yi(g,3)),this.setAttribute("uv",new yi(_,2));function A(R,E,y,z,N,O,B,P,F,Z,C){const U=O/F,k=B/Z,j=O/2,it=B/2,pt=P/2,xt=F+1,H=Z+1;let Y=0,st=0;const Pt=new et;for(let Ut=0;Ut<H;Ut++){const V=Ut*k-it;for(let ut=0;ut<xt;ut++){const Et=ut*U-j;Pt[R]=Et*z,Pt[E]=V*N,Pt[y]=pt,p.push(Pt.x,Pt.y,Pt.z),Pt[R]=0,Pt[E]=0,Pt[y]=P>0?1:-1,g.push(Pt.x,Pt.y,Pt.z),_.push(ut/F),_.push(1-Ut/Z),Y+=1}}for(let Ut=0;Ut<Z;Ut++)for(let V=0;V<F;V++){const ut=x+V+xt*Ut,Et=x+V+xt*(Ut+1),Vt=x+(V+1)+xt*(Ut+1),jt=x+(V+1)+xt*Ut;m.push(ut,Et,jt),m.push(Et,Vt,jt),st+=6}d.addGroup(M,st,C),M+=st,x+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ac(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function jo(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function vi(s){const t={};for(let i=0;i<s.length;i++){const r=jo(s[i]);for(const l in r)t[l]=r[l]}return t}function pM(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function Ex(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$e.workingColorSpace}const mM={clone:jo,merge:vi};var gM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_M=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ia extends Hs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gM,this.fragmentShader=_M,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=jo(t.uniforms),this.uniformsGroups=pM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Tx extends li{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new An,this.projectionMatrix=new An,this.projectionMatrixInverse=new An,this.coordinateSystem=La,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qr=new et,hv=new Le,dv=new Le;class ua extends Tx{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=rm*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ku*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rm*2*Math.atan(Math.tan(Ku*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qr.x,qr.y).multiplyScalar(-t/qr.z),qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(qr.x,qr.y).multiplyScalar(-t/qr.z)}getViewSize(t,i){return this.getViewBounds(t,hv,dv),i.subVectors(dv,hv)}setViewOffset(t,i,r,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Ku*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Oo=-90,Po=1;class vM extends li{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ua(Oo,Po,t,i);l.layers=this.layers,this.add(l);const c=new ua(Oo,Po,t,i);c.layers=this.layers,this.add(c);const h=new ua(Oo,Po,t,i);h.layers=this.layers,this.add(h);const d=new ua(Oo,Po,t,i);d.layers=this.layers,this.add(d);const m=new ua(Oo,Po,t,i);m.layers=this.layers,this.add(m);const p=new ua(Oo,Po,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===La)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===nf)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,g]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=R,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(_,x,M),t.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class Ax extends xi{constructor(t=[],i=Is,r,l,c,h,d,m,p,g){super(t,i,r,l,c,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Rx extends Oa{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Ax(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ac(5,5,5),c=new Ia({name:"CubemapFromEquirect",uniforms:jo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Pi,blending:fr});c.uniforms.tEquirect.value=i;const h=new Oi(l,c),d=i.minFilter;return i.minFilter===Ps&&(i.minFilter=di),new vM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(c)}}class Zl extends li{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xM={type:"move"};class $d{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const R of t.hand.values()){const E=i.getJointPose(R,r),y=this._getHandJoint(p,R);E!==null&&(y.matrix.fromArray(E.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=E.radius),y.visible=E!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=g.position.distanceTo(_.position),M=.02,A=.005;p.inputState.pinching&&x>M+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=M-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(xM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Zl;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class yM extends li{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fa,this.environmentIntensity=1,this.environmentRotation=new Fa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class SM extends xi{constructor(t=null,i=1,r=1,l,c,h,d,m,p=oi,g=oi,_,x){super(null,h,d,m,p,g,l,c,_,x),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jd=new et,MM=new et,bM=new Ie;class Zr{constructor(t=new et(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Jd.subVectors(r,i).cross(MM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Jd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||bM.getNormalMatrix(t),l=this.coplanarPoint(Jd).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ds=new lf,EM=new Le(.5,.5),Bu=new et;class Em{constructor(t=new Zr,i=new Zr,r=new Zr,l=new Zr,c=new Zr,h=new Zr){this.planes=[t,i,r,l,c,h]}set(t,i,r,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=La,r=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],g=c[4],_=c[5],x=c[6],M=c[7],A=c[8],R=c[9],E=c[10],y=c[11],z=c[12],N=c[13],O=c[14],B=c[15];if(l[0].setComponents(p-h,M-g,y-A,B-z).normalize(),l[1].setComponents(p+h,M+g,y+A,B+z).normalize(),l[2].setComponents(p+d,M+_,y+R,B+N).normalize(),l[3].setComponents(p-d,M-_,y-R,B-N).normalize(),r)l[4].setComponents(m,x,E,O).normalize(),l[5].setComponents(p-m,M-x,y-E,B-O).normalize();else if(l[4].setComponents(p-m,M-x,y-E,B-O).normalize(),i===La)l[5].setComponents(p+m,M+x,y+E,B+O).normalize();else if(i===nf)l[5].setComponents(m,x,E,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ds.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(t){Ds.center.set(0,0,0);const i=EM.distanceTo(t.center);return Ds.radius=.7071067811865476+i,Ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Bu.x=l.normal.x>0?t.max.x:t.min.x,Bu.y=l.normal.y>0?t.max.y:t.min.y,Bu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Bu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cf extends Hs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const rf=new et,sf=new et,pv=new An,Wl=new Mm,zu=new lf,tp=new et,mv=new et;class Qu extends li{constructor(t=new ei,i=new cf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)rf.fromBufferAttribute(i,l-1),sf.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=rf.distanceTo(sf);t.setAttribute("lineDistance",new yi(r,1))}else Ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),zu.copy(r.boundingSphere),zu.applyMatrix4(l),zu.radius+=c,t.ray.intersectsSphere(zu)===!1)return;pv.copy(l).invert(),Wl.copy(t.ray).applyMatrix4(pv);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=r.index,x=r.attributes.position;if(g!==null){const M=Math.max(0,h.start),A=Math.min(g.count,h.start+h.count);for(let R=M,E=A-1;R<E;R+=p){const y=g.getX(R),z=g.getX(R+1),N=Hu(this,t,Wl,m,y,z,R);N&&i.push(N)}if(this.isLineLoop){const R=g.getX(A-1),E=g.getX(M),y=Hu(this,t,Wl,m,R,E,A-1);y&&i.push(y)}}else{const M=Math.max(0,h.start),A=Math.min(x.count,h.start+h.count);for(let R=M,E=A-1;R<E;R+=p){const y=Hu(this,t,Wl,m,R,R+1,R);y&&i.push(y)}if(this.isLineLoop){const R=Hu(this,t,Wl,m,A-1,M,A-1);R&&i.push(R)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Hu(s,t,i,r,l,c,h){const d=s.geometry.attributes.position;if(rf.fromBufferAttribute(d,l),sf.fromBufferAttribute(d,c),i.distanceSqToSegment(rf,sf,tp,mv)>r)return;tp.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(tp);if(!(p<t.near||p>t.far))return{distance:p,point:mv.clone().applyMatrix4(s.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:s}}const gv=new et,_v=new et;class TM extends Qu{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)gv.fromBufferAttribute(i,l),_v.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+gv.distanceTo(_v);t.setAttribute("lineDistance",new yi(r,1))}else Ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nc extends xi{constructor(t,i,r=Pa,l,c,h,d=oi,m=oi,p,g=pr,_=1){if(g!==pr&&g!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:_};super(x,l,c,h,d,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Sm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class AM extends nc{constructor(t,i=Pa,r=Is,l,c,h=oi,d=oi,m,p=pr){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,i,r,l,c,h,d,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Cx extends xi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class rc extends ei{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,_=t/d,x=i/m,M=[],A=[],R=[],E=[];for(let y=0;y<g;y++){const z=y*x-h;for(let N=0;N<p;N++){const O=N*_-c;A.push(O,-z,0),R.push(0,0,1),E.push(N/d),E.push(1-y/m)}}for(let y=0;y<m;y++)for(let z=0;z<d;z++){const N=z+p*y,O=z+p*(y+1),B=z+1+p*(y+1),P=z+1+p*y;M.push(N,O,P),M.push(O,B,P)}this.setIndex(M),this.setAttribute("position",new yi(A,3)),this.setAttribute("normal",new yi(R,3)),this.setAttribute("uv",new yi(E,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rc(t.width,t.height,t.widthSegments,t.heightSegments)}}class RM extends Ia{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class CM extends Hs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_x,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ep extends CM{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class wM extends Hs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class DM extends Hs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class UM extends cf{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}const vv={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class LM{constructor(t,i,r){const l=this;let c=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(g){d++,c===!1&&l.onStart!==void 0&&l.onStart(g,h,d),c=!0},this.itemEnd=function(g){h++,l.onProgress!==void 0&&l.onProgress(g,h,d),h===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,x=p.length;_<x;_+=2){const M=p[_],A=p[_+1];if(M.global&&(M.lastIndex=0),M.test(g))return A}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const NM=new LM;class Tm{constructor(t){this.manager=t!==void 0?t:NM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,c){r.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Tm.DEFAULT_MATERIAL_NAME="__DEFAULT";const cr={};class OM extends Error{constructor(t,i){super(t),this.response=i}}class PM extends Tm{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,i,r,l){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=vv.get(`file:${t}`);if(c!==void 0)return this.manager.itemStart(t),setTimeout(()=>{i&&i(c),this.manager.itemEnd(t)},0),c;if(cr[t]!==void 0){cr[t].push({onLoad:i,onProgress:r,onError:l});return}cr[t]=[],cr[t].push({onLoad:i,onProgress:r,onError:l});const h=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),d=this.mimeType,m=this.responseType;fetch(h).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&Ae("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const g=cr[t],_=p.body.getReader(),x=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),M=x?parseInt(x):0,A=M!==0;let R=0;const E=new ReadableStream({start(y){z();function z(){_.read().then(({done:N,value:O})=>{if(N)y.close();else{R+=O.byteLength;const B=new ProgressEvent("progress",{lengthComputable:A,loaded:R,total:M});for(let P=0,F=g.length;P<F;P++){const Z=g[P];Z.onProgress&&Z.onProgress(B)}y.enqueue(O),z()}},N=>{y.error(N)})}}});return new Response(E)}else throw new OM(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(m){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(g=>new DOMParser().parseFromString(g,d));case"json":return p.json();default:if(d==="")return p.text();{const _=/charset="?([^;"\s]*)"?/i.exec(d),x=_&&_[1]?_[1].toLowerCase():void 0,M=new TextDecoder(x);return p.arrayBuffer().then(A=>M.decode(A))}}}).then(p=>{vv.add(`file:${t}`,p);const g=cr[t];delete cr[t];for(let _=0,x=g.length;_<x;_++){const M=g[_];M.onLoad&&M.onLoad(p)}}).catch(p=>{const g=cr[t];if(g===void 0)throw this.manager.itemError(t),p;delete cr[t];for(let _=0,x=g.length;_<x;_++){const M=g[_];M.onError&&M.onError(p)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class wx extends li{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new He(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const np=new An,xv=new et,yv=new et;class FM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.mapType=Zi,this.map=null,this.mapPass=null,this.matrix=new An,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Em,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new Nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;xv.setFromMatrixPosition(t.matrixWorld),i.position.copy(xv),yv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(yv),i.updateMatrixWorld(),np.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(np,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(np)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Am extends Tx{constructor(t=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class IM extends FM{constructor(){super(new Am(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sv extends wx{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(li.DEFAULT_UP),this.updateMatrix(),this.target=new li,this.shadow=new IM}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class BM extends wx{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class zM extends ua{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Mv{constructor(t=1,i=0,r=0){this.radius=t,this.phi=i,this.theta=r}set(t,i,r){return this.radius=t,this.phi=i,this.theta=r,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,r){return this.radius=Math.sqrt(t*t+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,r),this.phi=Math.acos(ze(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class bv extends TM{constructor(t=10,i=10,r=4473924,l=8947848){r=new He(r),l=new He(l);const c=i/2,h=t/i,d=t/2,m=[],p=[];for(let x=0,M=0,A=-d;x<=i;x++,A+=h){m.push(-d,0,A,d,0,A),m.push(A,0,-d,A,0,d);const R=x===c?r:l;R.toArray(p,M),M+=3,R.toArray(p,M),M+=3,R.toArray(p,M),M+=3,R.toArray(p,M),M+=3}const g=new ei;g.setAttribute("position",new yi(m,3)),g.setAttribute("color",new yi(p,3));const _=new cf({vertexColors:!0,toneMapped:!1});super(g,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}let HM=class extends zs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Ae("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Ev(s,t,i,r){const l=VM(r);switch(i){case px:return s*t;case gx:return s*t/l.components*l.byteLength;case gm:return s*t/l.components*l.byteLength;case Xo:return s*t*2/l.components*l.byteLength;case _m:return s*t*2/l.components*l.byteLength;case mx:return s*t*3/l.components*l.byteLength;case ya:return s*t*4/l.components*l.byteLength;case vm:return s*t*4/l.components*l.byteLength;case ju:case Yu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case qu:case Zu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Cp:case Dp:return Math.max(s,16)*Math.max(t,8)/4;case Rp:case wp:return Math.max(s,8)*Math.max(t,8)/2;case Up:case Lp:case Op:case Pp:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Np:case Fp:case Ip:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Bp:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case zp:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Hp:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Vp:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Gp:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case kp:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Xp:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Wp:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case jp:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Yp:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case qp:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Zp:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Kp:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Qp:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case $p:case Jp:case tm:return Math.ceil(s/4)*Math.ceil(t/4)*16;case em:case nm:return Math.ceil(s/4)*Math.ceil(t/4)*8;case im:case am:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function VM(s){switch(s){case Zi:case ux:return{byteLength:1,components:1};case Jl:case fx:case dr:return{byteLength:2,components:1};case pm:case mm:return{byteLength:2,components:4};case Pa:case dm:case Ua:return{byteLength:4,components:1};case hx:case dx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fm}}));typeof window<"u"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fm);function Dx(){let s=null,t=!1,i=null,r=null;function l(c,h){i(c,h),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function GM(s){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,m,p){const g=m.array,_=m.updateRanges;if(s.bindBuffer(p,d),_.length===0)s.bufferSubData(p,0,g);else{_.sort((M,A)=>M.start-A.start);let x=0;for(let M=1;M<_.length;M++){const A=_[x],R=_[M];R.start<=A.start+A.count+1?A.count=Math.max(A.count,R.start+R.count-A.start):(++x,_[x]=R)}_.length=x+1;for(let M=0,A=_.length;M<A;M++){const R=_[M];s.bufferSubData(p,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(s.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var kM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,XM=`#ifdef USE_ALPHAHASH
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
#endif`,WM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZM=`#ifdef USE_AOMAP
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
#endif`,KM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,QM=`#ifdef USE_BATCHING
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
#endif`,$M=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,JM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nb=`#ifdef USE_IRIDESCENCE
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
#endif`,ib=`#ifdef USE_BUMPMAP
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
#endif`,ab=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ob=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ub=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,hb=`#define PI 3.141592653589793
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
} // validated`,db=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pb=`vec3 transformedNormal = objectNormal;
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
#endif`,mb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_b=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xb="gl_FragColor = linearToOutputTexel( gl_FragColor );",yb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sb=`#ifdef USE_ENVMAP
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
#endif`,Mb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bb=`#ifdef USE_ENVMAP
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
#endif`,Eb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tb=`#ifdef USE_ENVMAP
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
#endif`,Ab=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Db=`#ifdef USE_GRADIENTMAP
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
}`,Ub=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ob=`uniform bool receiveShadow;
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
#endif`,Pb=`#ifdef USE_ENVMAP
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
#endif`,Fb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ib=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hb=`PhysicalMaterial material;
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
#endif`,Vb=`uniform sampler2D dfgLUT;
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
}`,Gb=`
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
#endif`,kb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$b=`#if defined( USE_POINTS_UV )
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
#endif`,Jb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aE=`#ifdef USE_MORPHTARGETS
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
#endif`,rE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,oE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fE=`#ifdef USE_NORMALMAP
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
#endif`,hE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_E=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,SE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ME=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,EE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,TE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,AE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,RE=`float getShadowMask() {
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
}`,CE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wE=`#ifdef USE_SKINNING
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
#endif`,DE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,UE=`#ifdef USE_SKINNING
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
#endif`,LE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,FE=`#ifdef USE_TRANSMISSION
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
#endif`,IE=`#ifdef USE_TRANSMISSION
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
#endif`,BE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kE=`uniform sampler2D t2D;
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
}`,XE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qE=`#include <common>
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
}`,ZE=`#if DEPTH_PACKING == 3200
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
}`,KE=`#define DISTANCE
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
}`,QE=`#define DISTANCE
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
}`,$E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tT=`uniform float scale;
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
}`,eT=`uniform vec3 diffuse;
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
}`,nT=`#include <common>
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
}`,iT=`uniform vec3 diffuse;
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
}`,aT=`#define LAMBERT
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
}`,rT=`#define LAMBERT
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
}`,sT=`#define MATCAP
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
}`,oT=`#define MATCAP
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
}`,lT=`#define NORMAL
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
}`,cT=`#define NORMAL
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
}`,uT=`#define PHONG
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
}`,fT=`#define PHONG
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
}`,hT=`#define STANDARD
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
}`,dT=`#define STANDARD
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
}`,pT=`#define TOON
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
}`,mT=`#define TOON
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
}`,gT=`uniform float size;
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
}`,_T=`uniform vec3 diffuse;
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
}`,vT=`#include <common>
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
}`,xT=`uniform vec3 color;
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
}`,yT=`uniform float rotation;
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
}`,ST=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:kM,alphahash_pars_fragment:XM,alphamap_fragment:WM,alphamap_pars_fragment:jM,alphatest_fragment:YM,alphatest_pars_fragment:qM,aomap_fragment:ZM,aomap_pars_fragment:KM,batching_pars_vertex:QM,batching_vertex:$M,begin_vertex:JM,beginnormal_vertex:tb,bsdfs:eb,iridescence_fragment:nb,bumpmap_pars_fragment:ib,clipping_planes_fragment:ab,clipping_planes_pars_fragment:rb,clipping_planes_pars_vertex:sb,clipping_planes_vertex:ob,color_fragment:lb,color_pars_fragment:cb,color_pars_vertex:ub,color_vertex:fb,common:hb,cube_uv_reflection_fragment:db,defaultnormal_vertex:pb,displacementmap_pars_vertex:mb,displacementmap_vertex:gb,emissivemap_fragment:_b,emissivemap_pars_fragment:vb,colorspace_fragment:xb,colorspace_pars_fragment:yb,envmap_fragment:Sb,envmap_common_pars_fragment:Mb,envmap_pars_fragment:bb,envmap_pars_vertex:Eb,envmap_physical_pars_fragment:Pb,envmap_vertex:Tb,fog_vertex:Ab,fog_pars_vertex:Rb,fog_fragment:Cb,fog_pars_fragment:wb,gradientmap_pars_fragment:Db,lightmap_pars_fragment:Ub,lights_lambert_fragment:Lb,lights_lambert_pars_fragment:Nb,lights_pars_begin:Ob,lights_toon_fragment:Fb,lights_toon_pars_fragment:Ib,lights_phong_fragment:Bb,lights_phong_pars_fragment:zb,lights_physical_fragment:Hb,lights_physical_pars_fragment:Vb,lights_fragment_begin:Gb,lights_fragment_maps:kb,lights_fragment_end:Xb,logdepthbuf_fragment:Wb,logdepthbuf_pars_fragment:jb,logdepthbuf_pars_vertex:Yb,logdepthbuf_vertex:qb,map_fragment:Zb,map_pars_fragment:Kb,map_particle_fragment:Qb,map_particle_pars_fragment:$b,metalnessmap_fragment:Jb,metalnessmap_pars_fragment:tE,morphinstance_vertex:eE,morphcolor_vertex:nE,morphnormal_vertex:iE,morphtarget_pars_vertex:aE,morphtarget_vertex:rE,normal_fragment_begin:sE,normal_fragment_maps:oE,normal_pars_fragment:lE,normal_pars_vertex:cE,normal_vertex:uE,normalmap_pars_fragment:fE,clearcoat_normal_fragment_begin:hE,clearcoat_normal_fragment_maps:dE,clearcoat_pars_fragment:pE,iridescence_pars_fragment:mE,opaque_fragment:gE,packing:_E,premultiplied_alpha_fragment:vE,project_vertex:xE,dithering_fragment:yE,dithering_pars_fragment:SE,roughnessmap_fragment:ME,roughnessmap_pars_fragment:bE,shadowmap_pars_fragment:EE,shadowmap_pars_vertex:TE,shadowmap_vertex:AE,shadowmask_pars_fragment:RE,skinbase_vertex:CE,skinning_pars_vertex:wE,skinning_vertex:DE,skinnormal_vertex:UE,specularmap_fragment:LE,specularmap_pars_fragment:NE,tonemapping_fragment:OE,tonemapping_pars_fragment:PE,transmission_fragment:FE,transmission_pars_fragment:IE,uv_pars_fragment:BE,uv_pars_vertex:zE,uv_vertex:HE,worldpos_vertex:VE,background_vert:GE,background_frag:kE,backgroundCube_vert:XE,backgroundCube_frag:WE,cube_vert:jE,cube_frag:YE,depth_vert:qE,depth_frag:ZE,distance_vert:KE,distance_frag:QE,equirect_vert:$E,equirect_frag:JE,linedashed_vert:tT,linedashed_frag:eT,meshbasic_vert:nT,meshbasic_frag:iT,meshlambert_vert:aT,meshlambert_frag:rT,meshmatcap_vert:sT,meshmatcap_frag:oT,meshnormal_vert:lT,meshnormal_frag:cT,meshphong_vert:uT,meshphong_frag:fT,meshphysical_vert:hT,meshphysical_frag:dT,meshtoon_vert:pT,meshtoon_frag:mT,points_vert:gT,points_frag:_T,shadow_vert:vT,shadow_frag:xT,sprite_vert:yT,sprite_frag:ST},te={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},Da={basic:{uniforms:vi([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:vi([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new He(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:vi([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:vi([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:vi([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new He(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:vi([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:vi([te.points,te.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:vi([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:vi([te.common,te.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:vi([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:vi([te.sprite,te.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:vi([te.common,te.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:vi([te.lights,te.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Da.physical={uniforms:vi([Da.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Vu={r:0,b:0,g:0},Us=new Fa,MT=new An;function bT(s,t,i,r,l,c,h){const d=new He(0);let m=c===!0?0:1,p,g,_=null,x=0,M=null;function A(N){let O=N.isScene===!0?N.background:null;return O&&O.isTexture&&(O=(N.backgroundBlurriness>0?i:t).get(O)),O}function R(N){let O=!1;const B=A(N);B===null?y(d,m):B&&B.isColor&&(y(B,1),O=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?r.buffers.color.setClear(0,0,0,1,h):P==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||O)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function E(N,O){const B=A(O);B&&(B.isCubeTexture||B.mapping===of)?(g===void 0&&(g=new Oi(new ac(1,1,1),new Ia({name:"BackgroundCubeMaterial",uniforms:jo(Da.backgroundCube.uniforms),vertexShader:Da.backgroundCube.vertexShader,fragmentShader:Da.backgroundCube.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(P,F,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Us.copy(O.backgroundRotation),Us.x*=-1,Us.y*=-1,Us.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),g.material.uniforms.envMap.value=B,g.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(MT.makeRotationFromEuler(Us)),g.material.toneMapped=$e.getTransfer(B.colorSpace)!==hn,(_!==B||x!==B.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,_=B,x=B.version,M=s.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):B&&B.isTexture&&(p===void 0&&(p=new Oi(new rc(2,2),new Ia({name:"BackgroundMaterial",uniforms:jo(Da.background.uniforms),vertexShader:Da.background.vertexShader,fragmentShader:Da.background.fragmentShader,side:$r,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=B,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.toneMapped=$e.getTransfer(B.colorSpace)!==hn,B.matrixAutoUpdate===!0&&B.updateMatrix(),p.material.uniforms.uvTransform.value.copy(B.matrix),(_!==B||x!==B.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,_=B,x=B.version,M=s.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function y(N,O){N.getRGB(Vu,Ex(s)),r.buffers.color.setClear(Vu.r,Vu.g,Vu.b,O,h)}function z(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,O=1){d.set(N),m=O,y(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,y(d,m)},render:R,addToRenderList:E,dispose:z}}function ET(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,h=!1;function d(U,k,j,it,pt){let xt=!1;const H=_(it,j,k);c!==H&&(c=H,p(c.object)),xt=M(U,it,j,pt),xt&&A(U,it,j,pt),pt!==null&&t.update(pt,s.ELEMENT_ARRAY_BUFFER),(xt||h)&&(h=!1,O(U,k,j,it),pt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(pt).buffer))}function m(){return s.createVertexArray()}function p(U){return s.bindVertexArray(U)}function g(U){return s.deleteVertexArray(U)}function _(U,k,j){const it=j.wireframe===!0;let pt=r[U.id];pt===void 0&&(pt={},r[U.id]=pt);let xt=pt[k.id];xt===void 0&&(xt={},pt[k.id]=xt);let H=xt[it];return H===void 0&&(H=x(m()),xt[it]=H),H}function x(U){const k=[],j=[],it=[];for(let pt=0;pt<i;pt++)k[pt]=0,j[pt]=0,it[pt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:j,attributeDivisors:it,object:U,attributes:{},index:null}}function M(U,k,j,it){const pt=c.attributes,xt=k.attributes;let H=0;const Y=j.getAttributes();for(const st in Y)if(Y[st].location>=0){const Ut=pt[st];let V=xt[st];if(V===void 0&&(st==="instanceMatrix"&&U.instanceMatrix&&(V=U.instanceMatrix),st==="instanceColor"&&U.instanceColor&&(V=U.instanceColor)),Ut===void 0||Ut.attribute!==V||V&&Ut.data!==V.data)return!0;H++}return c.attributesNum!==H||c.index!==it}function A(U,k,j,it){const pt={},xt=k.attributes;let H=0;const Y=j.getAttributes();for(const st in Y)if(Y[st].location>=0){let Ut=xt[st];Ut===void 0&&(st==="instanceMatrix"&&U.instanceMatrix&&(Ut=U.instanceMatrix),st==="instanceColor"&&U.instanceColor&&(Ut=U.instanceColor));const V={};V.attribute=Ut,Ut&&Ut.data&&(V.data=Ut.data),pt[st]=V,H++}c.attributes=pt,c.attributesNum=H,c.index=it}function R(){const U=c.newAttributes;for(let k=0,j=U.length;k<j;k++)U[k]=0}function E(U){y(U,0)}function y(U,k){const j=c.newAttributes,it=c.enabledAttributes,pt=c.attributeDivisors;j[U]=1,it[U]===0&&(s.enableVertexAttribArray(U),it[U]=1),pt[U]!==k&&(s.vertexAttribDivisor(U,k),pt[U]=k)}function z(){const U=c.newAttributes,k=c.enabledAttributes;for(let j=0,it=k.length;j<it;j++)k[j]!==U[j]&&(s.disableVertexAttribArray(j),k[j]=0)}function N(U,k,j,it,pt,xt,H){H===!0?s.vertexAttribIPointer(U,k,j,pt,xt):s.vertexAttribPointer(U,k,j,it,pt,xt)}function O(U,k,j,it){R();const pt=it.attributes,xt=j.getAttributes(),H=k.defaultAttributeValues;for(const Y in xt){const st=xt[Y];if(st.location>=0){let Pt=pt[Y];if(Pt===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(Pt=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(Pt=U.instanceColor)),Pt!==void 0){const Ut=Pt.normalized,V=Pt.itemSize,ut=t.get(Pt);if(ut===void 0)continue;const Et=ut.buffer,Vt=ut.type,jt=ut.bytesPerElement,lt=Vt===s.INT||Vt===s.UNSIGNED_INT||Pt.gpuType===dm;if(Pt.isInterleavedBufferAttribute){const St=Pt.data,kt=St.stride,ie=Pt.offset;if(St.isInstancedInterleavedBuffer){for(let ae=0;ae<st.locationSize;ae++)y(st.location+ae,St.meshPerAttribute);U.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let ae=0;ae<st.locationSize;ae++)E(st.location+ae);s.bindBuffer(s.ARRAY_BUFFER,Et);for(let ae=0;ae<st.locationSize;ae++)N(st.location+ae,V/st.locationSize,Vt,Ut,kt*jt,(ie+V/st.locationSize*ae)*jt,lt)}else{if(Pt.isInstancedBufferAttribute){for(let St=0;St<st.locationSize;St++)y(st.location+St,Pt.meshPerAttribute);U.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=Pt.meshPerAttribute*Pt.count)}else for(let St=0;St<st.locationSize;St++)E(st.location+St);s.bindBuffer(s.ARRAY_BUFFER,Et);for(let St=0;St<st.locationSize;St++)N(st.location+St,V/st.locationSize,Vt,Ut,V*jt,V/st.locationSize*St*jt,lt)}}else if(H!==void 0){const Ut=H[Y];if(Ut!==void 0)switch(Ut.length){case 2:s.vertexAttrib2fv(st.location,Ut);break;case 3:s.vertexAttrib3fv(st.location,Ut);break;case 4:s.vertexAttrib4fv(st.location,Ut);break;default:s.vertexAttrib1fv(st.location,Ut)}}}}z()}function B(){Z();for(const U in r){const k=r[U];for(const j in k){const it=k[j];for(const pt in it)g(it[pt].object),delete it[pt];delete k[j]}delete r[U]}}function P(U){if(r[U.id]===void 0)return;const k=r[U.id];for(const j in k){const it=k[j];for(const pt in it)g(it[pt].object),delete it[pt];delete k[j]}delete r[U.id]}function F(U){for(const k in r){const j=r[k];if(j[U.id]===void 0)continue;const it=j[U.id];for(const pt in it)g(it[pt].object),delete it[pt];delete j[U.id]}}function Z(){C(),h=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:C,dispose:B,releaseStatesOfGeometry:P,releaseStatesOfProgram:F,initAttributes:R,enableAttribute:E,disableUnusedAttributes:z}}function TT(s,t,i){let r;function l(p){r=p}function c(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,_){_!==0&&(s.drawArraysInstanced(r,p,g,_),i.update(g,r,_))}function d(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,_);let M=0;for(let A=0;A<_;A++)M+=g[A];i.update(M,r,1)}function m(p,g,_,x){if(_===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<p.length;A++)h(p[A],g[A],x[A]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,_);let A=0;for(let R=0;R<_;R++)A+=g[R]*x[R];i.update(A,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function AT(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(F){return!(F!==ya&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const Z=F===dr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==Zi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ua&&!Z)}function m(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(Ae("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),E=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),z=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),O=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),B=s.getParameter(s.MAX_SAMPLES),P=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:A,maxTextureSize:R,maxCubemapSize:E,maxAttributes:y,maxVertexUniforms:z,maxVaryings:N,maxFragmentUniforms:O,maxSamples:B,samples:P}}function RT(s){const t=this;let i=null,r=0,l=!1,c=!1;const h=new Zr,d=new Ie,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const M=_.length!==0||x||r!==0||l;return l=x,r=_.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=g(_,x,0)},this.setState=function(_,x,M){const A=_.clippingPlanes,R=_.clipIntersection,E=_.clipShadows,y=s.get(_);if(!l||A===null||A.length===0||c&&!E)c?g(null):p();else{const z=c?0:r,N=z*4;let O=y.clippingState||null;m.value=O,O=g(A,x,N,M);for(let B=0;B!==N;++B)O[B]=i[B];y.clippingState=O,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=z}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(_,x,M,A){const R=_!==null?_.length:0;let E=null;if(R!==0){if(E=m.value,A!==!0||E===null){const y=M+R*4,z=x.matrixWorldInverse;d.getNormalMatrix(z),(E===null||E.length<y)&&(E=new Float32Array(y));for(let N=0,O=M;N!==R;++N,O+=4)h.copy(_[N]).applyMatrix4(z,d),h.normal.toArray(E,O),E[O+3]=h.constant}m.value=E,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,E}}function CT(s){let t=new WeakMap;function i(h,d){return d===bp?h.mapping=Is:d===Ep&&(h.mapping=ko),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===bp||d===Ep)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Rx(m.height);return p.fromEquirectangularTexture(s,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const Qr=4,Tv=[.125,.215,.35,.446,.526,.582],Os=20,wT=256,jl=new Am,Av=new He;let ip=null,ap=0,rp=0,sp=!1;const DT=new et;class Rv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=DT}=c;ip=this._renderer.getRenderTarget(),ap=this._renderer.getActiveCubeFace(),rp=this._renderer.getActiveMipmapLevel(),sp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ip,ap,rp),this._renderer.xr.enabled=sp,t.scissorTest=!1,Fo(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Is||t.mapping===ko?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ip=this._renderer.getRenderTarget(),ap=this._renderer.getActiveCubeFace(),rp=this._renderer.getActiveMipmapLevel(),sp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:di,minFilter:di,generateMipmaps:!1,type:dr,format:ya,colorSpace:Wo,depthBuffer:!1},l=Cv(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cv(t,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=UT(c)),this._blurMaterial=NT(c,t,i),this._ggxMaterial=LT(c,t,i)}return l}_compileMaterial(t){const i=new Oi(new ei,t);this._renderer.compile(i,jl)}_sceneToCubeUV(t,i,r,l,c){const m=new ua(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,M=_.toneMapping;_.getClearColor(Av),_.toneMapping=Na,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Oi(new ac,new bm({name:"PMREM.Background",side:Pi,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,E=R.material;let y=!1;const z=t.background;z?z.isColor&&(E.color.copy(z),t.background=null,y=!0):(E.color.copy(Av),y=!0);for(let N=0;N<6;N++){const O=N%3;O===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[N],c.y,c.z)):O===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[N]));const B=this._cubeSize;Fo(l,O*B,N>2?B:0,B,B),_.setRenderTarget(l),y&&_.render(R,m),_.render(t,m)}_.toneMapping=M,_.autoClear=x,t.background=z}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Is||t.mapping===ko;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wv());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Fo(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,jl)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[r];d.material=h;const m=h.uniforms,p=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),x=0+p*1.25,M=_*x,{_lodMax:A}=this,R=this._sizeLods[r],E=3*R*(r>A-Qr?r-A+Qr:0),y=4*(this._cubeSize-R);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=A-i,Fo(c,E,y,3*R,2*R),l.setRenderTarget(c),l.render(d,jl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=A-r,Fo(t,E,y,3*R,2*R),l.setRenderTarget(t),l.render(d,jl)}_blur(t,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",c),this._halfBlur(h,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&an("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=p;const x=p.uniforms,M=this._sizeLods[r]-1,A=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Os-1),R=c/A,E=isFinite(c)?1+Math.floor(g*R):Os;E>Os&&Ae(`sigmaRadians, ${c}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${Os}`);const y=[];let z=0;for(let F=0;F<Os;++F){const Z=F/R,C=Math.exp(-Z*Z/2);y.push(C),F===0?z+=C:F<E&&(z+=2*C)}for(let F=0;F<y.length;F++)y[F]=y[F]/z;x.envMap.value=t.texture,x.samples.value=E,x.weights.value=y,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:N}=this;x.dTheta.value=A,x.mipInt.value=N-r;const O=this._sizeLods[l],B=3*O*(l>N-Qr?l-N+Qr:0),P=4*(this._cubeSize-O);Fo(i,B,P,3*O,2*O),m.setRenderTarget(i),m.render(_,jl)}}function UT(s){const t=[],i=[],r=[];let l=s;const c=s-Qr+1+Tv.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>s-Qr?m=Tv[h-s+Qr-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),g=-p,_=1+p,x=[g,g,_,g,_,_,g,g,_,_,g,_],M=6,A=6,R=3,E=2,y=1,z=new Float32Array(R*A*M),N=new Float32Array(E*A*M),O=new Float32Array(y*A*M);for(let P=0;P<M;P++){const F=P%3*2/3-1,Z=P>2?0:-1,C=[F,Z,0,F+2/3,Z,0,F+2/3,Z+1,0,F,Z,0,F+2/3,Z+1,0,F,Z+1,0];z.set(C,R*A*P),N.set(x,E*A*P);const U=[P,P,P,P,P,P];O.set(U,y*A*P)}const B=new ei;B.setAttribute("position",new Zn(z,R)),B.setAttribute("uv",new Zn(N,E)),B.setAttribute("faceIndex",new Zn(O,y)),r.push(new Oi(B,null)),l>Qr&&l--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function Cv(s,t,i){const r=new Oa(s,t,i);return r.texture.mapping=of,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Fo(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function LT(s,t,i){return new Ia({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:wT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:uf(),fragmentShader:`

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
		`,blending:fr,depthTest:!1,depthWrite:!1})}function NT(s,t,i){const r=new Float32Array(Os),l=new et(0,1,0);return new Ia({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:uf(),fragmentShader:`

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
		`,blending:fr,depthTest:!1,depthWrite:!1})}function wv(){return new Ia({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uf(),fragmentShader:`

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
		`,blending:fr,depthTest:!1,depthWrite:!1})}function Dv(){return new Ia({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function uf(){return`

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
	`}function OT(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===bp||m===Ep,g=m===Is||m===ko;if(p||g){let _=t.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new Rv(s)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new Rv(s)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function PT(s){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=s.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&ec("WebGLRenderer: "+r+" extension not supported."),l}}}function FT(s,t,i,r){const l={},c=new WeakMap;function h(_){const x=_.target;x.index!==null&&t.remove(x.index);for(const A in x.attributes)t.remove(x.attributes[A]);x.removeEventListener("dispose",h),delete l[x.id];const M=c.get(x);M&&(t.remove(M),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(_,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(_){const x=_.attributes;for(const M in x)t.update(x[M],s.ARRAY_BUFFER)}function p(_){const x=[],M=_.index,A=_.attributes.position;let R=0;if(M!==null){const z=M.array;R=M.version;for(let N=0,O=z.length;N<O;N+=3){const B=z[N+0],P=z[N+1],F=z[N+2];x.push(B,P,P,F,F,B)}}else if(A!==void 0){const z=A.array;R=A.version;for(let N=0,O=z.length/3-1;N<O;N+=3){const B=N+0,P=N+1,F=N+2;x.push(B,P,P,F,F,B)}}else return;const E=new(vx(x)?bx:Mx)(x,1);E.version=R;const y=c.get(_);y&&t.remove(y),c.set(_,E)}function g(_){const x=c.get(_);if(x){const M=_.index;M!==null&&x.version<M.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function IT(s,t,i){let r;function l(x){r=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function m(x,M){s.drawElements(r,M,c,x*h),i.update(M,r,1)}function p(x,M,A){A!==0&&(s.drawElementsInstanced(r,M,c,x*h,A),i.update(M,r,A))}function g(x,M,A){if(A===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,x,0,A);let E=0;for(let y=0;y<A;y++)E+=M[y];i.update(E,r,1)}function _(x,M,A,R){if(A===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let y=0;y<x.length;y++)p(x[y]/h,M[y],R[y]);else{E.multiDrawElementsInstancedWEBGL(r,M,0,c,x,0,R,0,A);let y=0;for(let z=0;z<A;z++)y+=M[z]*R[z];i.update(y,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function BT(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=d*(c/3);break;case s.LINES:i.lines+=d*(c/2);break;case s.LINE_STRIP:i.lines+=d*(c-1);break;case s.LINE_LOOP:i.lines+=d*c;break;case s.POINTS:i.points+=d*c;break;default:an("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function zT(s,t,i){const r=new WeakMap,l=new Nn;function c(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let x=r.get(d);if(x===void 0||x.count!==_){let C=function(){F.dispose(),r.delete(d),d.removeEventListener("dispose",C)};x!==void 0&&x.texture.dispose();const M=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,R=d.morphAttributes.color!==void 0,E=d.morphAttributes.position||[],y=d.morphAttributes.normal||[],z=d.morphAttributes.color||[];let N=0;M===!0&&(N=1),A===!0&&(N=2),R===!0&&(N=3);let O=d.attributes.position.count*N,B=1;O>t.maxTextureSize&&(B=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const P=new Float32Array(O*B*4*_),F=new xx(P,O,B,_);F.type=Ua,F.needsUpdate=!0;const Z=N*4;for(let U=0;U<_;U++){const k=E[U],j=y[U],it=z[U],pt=O*B*4*U;for(let xt=0;xt<k.count;xt++){const H=xt*Z;M===!0&&(l.fromBufferAttribute(k,xt),P[pt+H+0]=l.x,P[pt+H+1]=l.y,P[pt+H+2]=l.z,P[pt+H+3]=0),A===!0&&(l.fromBufferAttribute(j,xt),P[pt+H+4]=l.x,P[pt+H+5]=l.y,P[pt+H+6]=l.z,P[pt+H+7]=0),R===!0&&(l.fromBufferAttribute(it,xt),P[pt+H+8]=l.x,P[pt+H+9]=l.y,P[pt+H+10]=l.z,P[pt+H+11]=it.itemSize===4?l.w:1)}}x={count:_,texture:F,size:new Le(O,B)},r.set(d,x),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let M=0;for(let R=0;R<p.length;R++)M+=p[R];const A=d.morphTargetsRelative?1:1-M;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function HT(s,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const VT={[ix]:"LINEAR_TONE_MAPPING",[ax]:"REINHARD_TONE_MAPPING",[rx]:"CINEON_TONE_MAPPING",[hm]:"ACES_FILMIC_TONE_MAPPING",[ox]:"AGX_TONE_MAPPING",[lx]:"NEUTRAL_TONE_MAPPING",[sx]:"CUSTOM_TONE_MAPPING"};function GT(s,t,i,r,l){const c=new Oa(t,i,{type:s,depthBuffer:r,stencilBuffer:l}),h=new Oa(t,i,{type:dr,depthBuffer:!1,stencilBuffer:!1}),d=new ei;d.setAttribute("position",new yi([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new yi([0,2,0,0,2,0],2));const m=new RM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Oi(d,m),g=new Am(-1,1,1,-1,0,1);let _=null,x=null,M=!1,A,R=null,E=[],y=!1;this.setSize=function(z,N){c.setSize(z,N),h.setSize(z,N);for(let O=0;O<E.length;O++){const B=E[O];B.setSize&&B.setSize(z,N)}},this.setEffects=function(z){E=z,y=E.length>0&&E[0].isRenderPass===!0;const N=c.width,O=c.height;for(let B=0;B<E.length;B++){const P=E[B];P.setSize&&P.setSize(N,O)}},this.begin=function(z,N){if(M||z.toneMapping===Na&&E.length===0)return!1;if(R=N,N!==null){const O=N.width,B=N.height;(c.width!==O||c.height!==B)&&this.setSize(O,B)}return y===!1&&z.setRenderTarget(c),A=z.toneMapping,z.toneMapping=Na,!0},this.hasRenderPass=function(){return y},this.end=function(z,N){z.toneMapping=A,M=!0;let O=c,B=h;for(let P=0;P<E.length;P++){const F=E[P];if(F.enabled!==!1&&(F.render(z,B,O,N),F.needsSwap!==!1)){const Z=O;O=B,B=Z}}if(_!==z.outputColorSpace||x!==z.toneMapping){_=z.outputColorSpace,x=z.toneMapping,m.defines={},$e.getTransfer(_)===hn&&(m.defines.SRGB_TRANSFER="");const P=VT[x];P&&(m.defines[P]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=O.texture,z.setRenderTarget(R),z.render(p,g),R=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const Ux=new xi,sm=new nc(1,1),Lx=new xx,Nx=new nM,Ox=new Ax,Uv=[],Lv=[],Nv=new Float32Array(16),Ov=new Float32Array(9),Pv=new Float32Array(4);function qo(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=Uv[l];if(c===void 0&&(c=new Float32Array(l),Uv[l]=c),t!==0){r.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,s[h].toArray(c,d)}return c}function Kn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function Qn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function ff(s,t){let i=Lv[t];i===void 0&&(i=new Int32Array(t),Lv[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function kT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function XT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Kn(i,t))return;s.uniform2fv(this.addr,t),Qn(i,t)}}function WT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Kn(i,t))return;s.uniform3fv(this.addr,t),Qn(i,t)}}function jT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Kn(i,t))return;s.uniform4fv(this.addr,t),Qn(i,t)}}function YT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(Kn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),Qn(i,t)}else{if(Kn(i,r))return;Pv.set(r),s.uniformMatrix2fv(this.addr,!1,Pv),Qn(i,r)}}function qT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(Kn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),Qn(i,t)}else{if(Kn(i,r))return;Ov.set(r),s.uniformMatrix3fv(this.addr,!1,Ov),Qn(i,r)}}function ZT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(Kn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),Qn(i,t)}else{if(Kn(i,r))return;Nv.set(r),s.uniformMatrix4fv(this.addr,!1,Nv),Qn(i,r)}}function KT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function QT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Kn(i,t))return;s.uniform2iv(this.addr,t),Qn(i,t)}}function $T(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Kn(i,t))return;s.uniform3iv(this.addr,t),Qn(i,t)}}function JT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Kn(i,t))return;s.uniform4iv(this.addr,t),Qn(i,t)}}function t1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function e1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Kn(i,t))return;s.uniform2uiv(this.addr,t),Qn(i,t)}}function n1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Kn(i,t))return;s.uniform3uiv(this.addr,t),Qn(i,t)}}function i1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Kn(i,t))return;s.uniform4uiv(this.addr,t),Qn(i,t)}}function a1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(sm.compareFunction=i.isReversedDepthBuffer()?ym:xm,c=sm):c=Ux,i.setTexture2D(t||c,l)}function r1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Nx,l)}function s1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Ox,l)}function o1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||Lx,l)}function l1(s){switch(s){case 5126:return kT;case 35664:return XT;case 35665:return WT;case 35666:return jT;case 35674:return YT;case 35675:return qT;case 35676:return ZT;case 5124:case 35670:return KT;case 35667:case 35671:return QT;case 35668:case 35672:return $T;case 35669:case 35673:return JT;case 5125:return t1;case 36294:return e1;case 36295:return n1;case 36296:return i1;case 35678:case 36198:case 36298:case 36306:case 35682:return a1;case 35679:case 36299:case 36307:return r1;case 35680:case 36300:case 36308:case 36293:return s1;case 36289:case 36303:case 36311:case 36292:return o1}}function c1(s,t){s.uniform1fv(this.addr,t)}function u1(s,t){const i=qo(t,this.size,2);s.uniform2fv(this.addr,i)}function f1(s,t){const i=qo(t,this.size,3);s.uniform3fv(this.addr,i)}function h1(s,t){const i=qo(t,this.size,4);s.uniform4fv(this.addr,i)}function d1(s,t){const i=qo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function p1(s,t){const i=qo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function m1(s,t){const i=qo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function g1(s,t){s.uniform1iv(this.addr,t)}function _1(s,t){s.uniform2iv(this.addr,t)}function v1(s,t){s.uniform3iv(this.addr,t)}function x1(s,t){s.uniform4iv(this.addr,t)}function y1(s,t){s.uniform1uiv(this.addr,t)}function S1(s,t){s.uniform2uiv(this.addr,t)}function M1(s,t){s.uniform3uiv(this.addr,t)}function b1(s,t){s.uniform4uiv(this.addr,t)}function E1(s,t,i){const r=this.cache,l=t.length,c=ff(i,l);Kn(r,c)||(s.uniform1iv(this.addr,c),Qn(r,c));let h;this.type===s.SAMPLER_2D_SHADOW?h=sm:h=Ux;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,c[d])}function T1(s,t,i){const r=this.cache,l=t.length,c=ff(i,l);Kn(r,c)||(s.uniform1iv(this.addr,c),Qn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Nx,c[h])}function A1(s,t,i){const r=this.cache,l=t.length,c=ff(i,l);Kn(r,c)||(s.uniform1iv(this.addr,c),Qn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Ox,c[h])}function R1(s,t,i){const r=this.cache,l=t.length,c=ff(i,l);Kn(r,c)||(s.uniform1iv(this.addr,c),Qn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Lx,c[h])}function C1(s){switch(s){case 5126:return c1;case 35664:return u1;case 35665:return f1;case 35666:return h1;case 35674:return d1;case 35675:return p1;case 35676:return m1;case 5124:case 35670:return g1;case 35667:case 35671:return _1;case 35668:case 35672:return v1;case 35669:case 35673:return x1;case 5125:return y1;case 36294:return S1;case 36295:return M1;case 36296:return b1;case 35678:case 36198:case 36298:case 36306:case 35682:return E1;case 35679:case 36299:case 36307:return T1;case 35680:case 36300:case 36308:case 36293:return A1;case 36289:case 36303:case 36311:case 36292:return R1}}class w1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=l1(i.type)}}class D1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=C1(i.type)}}class U1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],r)}}}const op=/(\w+)(\])?(\[|\.)?/g;function Fv(s,t){s.seq.push(t),s.map[t.id]=t}function L1(s,t,i){const r=s.name,l=r.length;for(op.lastIndex=0;;){const c=op.exec(r),h=op.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){Fv(i,p===void 0?new w1(d,s,t):new D1(d,s,t));break}else{let _=i.map[d];_===void 0&&(_=new U1(d),Fv(i,_)),i=_}}}class $u{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<r;++h){const d=t.getActiveUniform(i,h),m=t.getUniformLocation(i,d.name);L1(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function Iv(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const N1=37297;let O1=0;function P1(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const Bv=new Ie;function F1(s){$e._getMatrix(Bv,$e.workingColorSpace,s);const t=`mat3( ${Bv.elements.map(i=>i.toFixed(4))} )`;switch($e.getTransfer(s)){case ef:return[t,"LinearTransferOETF"];case hn:return[t,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function zv(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+P1(s.getShaderSource(t),d)}else return c}function I1(s,t){const i=F1(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const B1={[ix]:"Linear",[ax]:"Reinhard",[rx]:"Cineon",[hm]:"ACESFilmic",[ox]:"AgX",[lx]:"Neutral",[sx]:"Custom"};function z1(s,t){const i=B1[t];return i===void 0?(Ae("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Gu=new et;function H1(){$e.getLuminanceCoefficients(Gu);const s=Gu.x.toFixed(4),t=Gu.y.toFixed(4),i=Gu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kl).join(`
`)}function G1(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function k1(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),h=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:s.getAttribLocation(t,h),locationSize:d}}return i}function Kl(s){return s!==""}function Hv(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vv(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const X1=/^[ \t]*#include +<([\w\d./]+)>/gm;function om(s){return s.replace(X1,j1)}const W1=new Map;function j1(s,t){let i=Be[t];if(i===void 0){const r=W1.get(t);if(r!==void 0)i=Be[r],Ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return om(i)}const Y1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gv(s){return s.replace(Y1,q1)}function q1(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function kv(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}const Z1={[Wu]:"SHADOWMAP_TYPE_PCF",[ql]:"SHADOWMAP_TYPE_VSM"};function K1(s){return Z1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Q1={[Is]:"ENVMAP_TYPE_CUBE",[ko]:"ENVMAP_TYPE_CUBE",[of]:"ENVMAP_TYPE_CUBE_UV"};function $1(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Q1[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const J1={[ko]:"ENVMAP_MODE_REFRACTION"};function tA(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":J1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const eA={[nx]:"ENVMAP_BLENDING_MULTIPLY",[FS]:"ENVMAP_BLENDING_MIX",[IS]:"ENVMAP_BLENDING_ADD"};function nA(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":eA[s.combine]||"ENVMAP_BLENDING_NONE"}function iA(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function aA(s,t,i,r){const l=s.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=K1(i),p=$1(i),g=tA(i),_=nA(i),x=iA(i),M=V1(i),A=G1(c),R=l.createProgram();let E,y,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(E=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Kl).join(`
`),E.length>0&&(E+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Kl).join(`
`),y.length>0&&(y+=`
`)):(E=[kv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kl).join(`
`),y=[kv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Na?"#define TONE_MAPPING":"",i.toneMapping!==Na?Be.tonemapping_pars_fragment:"",i.toneMapping!==Na?z1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,I1("linearToOutputTexel",i.outputColorSpace),H1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Kl).join(`
`)),h=om(h),h=Hv(h,i),h=Vv(h,i),d=om(d),d=Hv(d,i),d=Vv(d,i),h=Gv(h),d=Gv(d),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,E=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,y=["#define varying in",i.glslVersion===Z_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Z_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const N=z+E+h,O=z+y+d,B=Iv(l,l.VERTEX_SHADER,N),P=Iv(l,l.FRAGMENT_SHADER,O);l.attachShader(R,B),l.attachShader(R,P),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function F(k){if(s.debug.checkShaderErrors){const j=l.getProgramInfoLog(R)||"",it=l.getShaderInfoLog(B)||"",pt=l.getShaderInfoLog(P)||"",xt=j.trim(),H=it.trim(),Y=pt.trim();let st=!0,Pt=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(st=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,R,B,P);else{const Ut=zv(l,B,"vertex"),V=zv(l,P,"fragment");an("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+xt+`
`+Ut+`
`+V)}else xt!==""?Ae("WebGLProgram: Program Info Log:",xt):(H===""||Y==="")&&(Pt=!1);Pt&&(k.diagnostics={runnable:st,programLog:xt,vertexShader:{log:H,prefix:E},fragmentShader:{log:Y,prefix:y}})}l.deleteShader(B),l.deleteShader(P),Z=new $u(l,R),C=k1(l,R)}let Z;this.getUniforms=function(){return Z===void 0&&F(this),Z};let C;this.getAttributes=function(){return C===void 0&&F(this),C};let U=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=l.getProgramParameter(R,N1)),U},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=O1++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=B,this.fragmentShader=P,this}let rA=0;class sA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new oA(t),i.set(t,r)),r}}class oA{constructor(t){this.id=rA++,this.code=t,this.usedTimes=0}}function lA(s,t,i,r,l,c,h){const d=new yx,m=new sA,p=new Set,g=[],_=new Map,x=l.logarithmicDepthBuffer;let M=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(C){return p.add(C),C===0?"uv":`uv${C}`}function E(C,U,k,j,it){const pt=j.fog,xt=it.geometry,H=C.isMeshStandardMaterial?j.environment:null,Y=(C.isMeshStandardMaterial?i:t).get(C.envMap||H),st=Y&&Y.mapping===of?Y.image.height:null,Pt=A[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&Ae("WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const Ut=xt.morphAttributes.position||xt.morphAttributes.normal||xt.morphAttributes.color,V=Ut!==void 0?Ut.length:0;let ut=0;xt.morphAttributes.position!==void 0&&(ut=1),xt.morphAttributes.normal!==void 0&&(ut=2),xt.morphAttributes.color!==void 0&&(ut=3);let Et,Vt,jt,lt;if(Pt){const We=Da[Pt];Et=We.vertexShader,Vt=We.fragmentShader}else Et=C.vertexShader,Vt=C.fragmentShader,m.update(C),jt=m.getVertexShaderID(C),lt=m.getFragmentShaderID(C);const St=s.getRenderTarget(),kt=s.state.buffers.depth.getReversed(),ie=it.isInstancedMesh===!0,ae=it.isBatchedMesh===!0,Ne=!!C.map,cn=!!C.matcap,de=!!Y,le=!!C.aoMap,he=!!C.lightMap,re=!!C.bumpMap,Ze=!!C.normalMap,W=!!C.displacementMap,Je=!!C.emissiveMap,Ce=!!C.metalnessMap,Oe=!!C.roughnessMap,Yt=C.anisotropy>0,I=C.clearcoat>0,T=C.dispersion>0,$=C.iridescence>0,bt=C.sheen>0,Ct=C.transmission>0,_t=Yt&&!!C.anisotropyMap,ce=I&&!!C.clearcoatMap,Gt=I&&!!C.clearcoatNormalMap,ee=I&&!!C.clearcoatRoughnessMap,ge=$&&!!C.iridescenceMap,Ft=$&&!!C.iridescenceThicknessMap,Ht=bt&&!!C.sheenColorMap,Jt=bt&&!!C.sheenRoughnessMap,qt=!!C.specularMap,Wt=!!C.specularColorMap,De=!!C.specularIntensityMap,Q=Ct&&!!C.transmissionMap,Zt=Ct&&!!C.thicknessMap,Nt=!!C.gradientMap,Kt=!!C.alphaMap,yt=C.alphaTest>0,wt=!!C.alphaHash,zt=!!C.extensions;let _e=Na;C.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(_e=s.toneMapping);const rn={shaderID:Pt,shaderType:C.type,shaderName:C.name,vertexShader:Et,fragmentShader:Vt,defines:C.defines,customVertexShaderID:jt,customFragmentShaderID:lt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:ae,batchingColor:ae&&it._colorsTexture!==null,instancing:ie,instancingColor:ie&&it.instanceColor!==null,instancingMorph:ie&&it.morphTexture!==null,outputColorSpace:St===null?s.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:Wo,alphaToCoverage:!!C.alphaToCoverage,map:Ne,matcap:cn,envMap:de,envMapMode:de&&Y.mapping,envMapCubeUVHeight:st,aoMap:le,lightMap:he,bumpMap:re,normalMap:Ze,displacementMap:W,emissiveMap:Je,normalMapObjectSpace:Ze&&C.normalMapType===HS,normalMapTangentSpace:Ze&&C.normalMapType===_x,metalnessMap:Ce,roughnessMap:Oe,anisotropy:Yt,anisotropyMap:_t,clearcoat:I,clearcoatMap:ce,clearcoatNormalMap:Gt,clearcoatRoughnessMap:ee,dispersion:T,iridescence:$,iridescenceMap:ge,iridescenceThicknessMap:Ft,sheen:bt,sheenColorMap:Ht,sheenRoughnessMap:Jt,specularMap:qt,specularColorMap:Wt,specularIntensityMap:De,transmission:Ct,transmissionMap:Q,thicknessMap:Zt,gradientMap:Nt,opaque:C.transparent===!1&&C.blending===Ho&&C.alphaToCoverage===!1,alphaMap:Kt,alphaTest:yt,alphaHash:wt,combine:C.combine,mapUv:Ne&&R(C.map.channel),aoMapUv:le&&R(C.aoMap.channel),lightMapUv:he&&R(C.lightMap.channel),bumpMapUv:re&&R(C.bumpMap.channel),normalMapUv:Ze&&R(C.normalMap.channel),displacementMapUv:W&&R(C.displacementMap.channel),emissiveMapUv:Je&&R(C.emissiveMap.channel),metalnessMapUv:Ce&&R(C.metalnessMap.channel),roughnessMapUv:Oe&&R(C.roughnessMap.channel),anisotropyMapUv:_t&&R(C.anisotropyMap.channel),clearcoatMapUv:ce&&R(C.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&R(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&R(C.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&R(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&R(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&R(C.sheenColorMap.channel),sheenRoughnessMapUv:Jt&&R(C.sheenRoughnessMap.channel),specularMapUv:qt&&R(C.specularMap.channel),specularColorMapUv:Wt&&R(C.specularColorMap.channel),specularIntensityMapUv:De&&R(C.specularIntensityMap.channel),transmissionMapUv:Q&&R(C.transmissionMap.channel),thicknessMapUv:Zt&&R(C.thicknessMap.channel),alphaMapUv:Kt&&R(C.alphaMap.channel),vertexTangents:!!xt.attributes.tangent&&(Ze||Yt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!xt.attributes.color&&xt.attributes.color.itemSize===4,pointsUvs:it.isPoints===!0&&!!xt.attributes.uv&&(Ne||Kt),fog:!!pt,useFog:C.fog===!0,fogExp2:!!pt&&pt.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:kt,skinning:it.isSkinnedMesh===!0,morphTargets:xt.morphAttributes.position!==void 0,morphNormals:xt.morphAttributes.normal!==void 0,morphColors:xt.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:ut,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:_e,decodeVideoTexture:Ne&&C.map.isVideoTexture===!0&&$e.getTransfer(C.map.colorSpace)===hn,decodeVideoTextureEmissive:Je&&C.emissiveMap.isVideoTexture===!0&&$e.getTransfer(C.emissiveMap.colorSpace)===hn,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===qi,flipSided:C.side===Pi,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:zt&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&C.extensions.multiDraw===!0||ae)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return rn.vertexUv1s=p.has(1),rn.vertexUv2s=p.has(2),rn.vertexUv3s=p.has(3),p.clear(),rn}function y(C){const U=[];if(C.shaderID?U.push(C.shaderID):(U.push(C.customVertexShaderID),U.push(C.customFragmentShaderID)),C.defines!==void 0)for(const k in C.defines)U.push(k),U.push(C.defines[k]);return C.isRawShaderMaterial===!1&&(z(U,C),N(U,C),U.push(s.outputColorSpace)),U.push(C.customProgramCacheKey),U.join()}function z(C,U){C.push(U.precision),C.push(U.outputColorSpace),C.push(U.envMapMode),C.push(U.envMapCubeUVHeight),C.push(U.mapUv),C.push(U.alphaMapUv),C.push(U.lightMapUv),C.push(U.aoMapUv),C.push(U.bumpMapUv),C.push(U.normalMapUv),C.push(U.displacementMapUv),C.push(U.emissiveMapUv),C.push(U.metalnessMapUv),C.push(U.roughnessMapUv),C.push(U.anisotropyMapUv),C.push(U.clearcoatMapUv),C.push(U.clearcoatNormalMapUv),C.push(U.clearcoatRoughnessMapUv),C.push(U.iridescenceMapUv),C.push(U.iridescenceThicknessMapUv),C.push(U.sheenColorMapUv),C.push(U.sheenRoughnessMapUv),C.push(U.specularMapUv),C.push(U.specularColorMapUv),C.push(U.specularIntensityMapUv),C.push(U.transmissionMapUv),C.push(U.thicknessMapUv),C.push(U.combine),C.push(U.fogExp2),C.push(U.sizeAttenuation),C.push(U.morphTargetsCount),C.push(U.morphAttributeCount),C.push(U.numDirLights),C.push(U.numPointLights),C.push(U.numSpotLights),C.push(U.numSpotLightMaps),C.push(U.numHemiLights),C.push(U.numRectAreaLights),C.push(U.numDirLightShadows),C.push(U.numPointLightShadows),C.push(U.numSpotLightShadows),C.push(U.numSpotLightShadowsWithMaps),C.push(U.numLightProbes),C.push(U.shadowMapType),C.push(U.toneMapping),C.push(U.numClippingPlanes),C.push(U.numClipIntersection),C.push(U.depthPacking)}function N(C,U){d.disableAll(),U.instancing&&d.enable(0),U.instancingColor&&d.enable(1),U.instancingMorph&&d.enable(2),U.matcap&&d.enable(3),U.envMap&&d.enable(4),U.normalMapObjectSpace&&d.enable(5),U.normalMapTangentSpace&&d.enable(6),U.clearcoat&&d.enable(7),U.iridescence&&d.enable(8),U.alphaTest&&d.enable(9),U.vertexColors&&d.enable(10),U.vertexAlphas&&d.enable(11),U.vertexUv1s&&d.enable(12),U.vertexUv2s&&d.enable(13),U.vertexUv3s&&d.enable(14),U.vertexTangents&&d.enable(15),U.anisotropy&&d.enable(16),U.alphaHash&&d.enable(17),U.batching&&d.enable(18),U.dispersion&&d.enable(19),U.batchingColor&&d.enable(20),U.gradientMap&&d.enable(21),C.push(d.mask),d.disableAll(),U.fog&&d.enable(0),U.useFog&&d.enable(1),U.flatShading&&d.enable(2),U.logarithmicDepthBuffer&&d.enable(3),U.reversedDepthBuffer&&d.enable(4),U.skinning&&d.enable(5),U.morphTargets&&d.enable(6),U.morphNormals&&d.enable(7),U.morphColors&&d.enable(8),U.premultipliedAlpha&&d.enable(9),U.shadowMapEnabled&&d.enable(10),U.doubleSided&&d.enable(11),U.flipSided&&d.enable(12),U.useDepthPacking&&d.enable(13),U.dithering&&d.enable(14),U.transmission&&d.enable(15),U.sheen&&d.enable(16),U.opaque&&d.enable(17),U.pointsUvs&&d.enable(18),U.decodeVideoTexture&&d.enable(19),U.decodeVideoTextureEmissive&&d.enable(20),U.alphaToCoverage&&d.enable(21),C.push(d.mask)}function O(C){const U=A[C.type];let k;if(U){const j=Da[U];k=mM.clone(j.uniforms)}else k=C.uniforms;return k}function B(C,U){let k=_.get(U);return k!==void 0?++k.usedTimes:(k=new aA(s,U,C,c),g.push(k),_.set(U,k)),k}function P(C){if(--C.usedTimes===0){const U=g.indexOf(C);g[U]=g[g.length-1],g.pop(),_.delete(C.cacheKey),C.destroy()}}function F(C){m.remove(C)}function Z(){m.dispose()}return{getParameters:E,getProgramCacheKey:y,getUniforms:O,acquireProgram:B,releaseProgram:P,releaseShaderCache:F,programs:g,dispose:Z}}function cA(){let s=new WeakMap;function t(h){return s.has(h)}function i(h){let d=s.get(h);return d===void 0&&(d={},s.set(h,d)),d}function r(h){s.delete(h)}function l(h,d,m){s.get(h)[d]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function uA(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Xv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Wv(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function h(_,x,M,A,R,E){let y=s[t];return y===void 0?(y={id:_.id,object:_,geometry:x,material:M,groupOrder:A,renderOrder:_.renderOrder,z:R,group:E},s[t]=y):(y.id=_.id,y.object=_,y.geometry=x,y.material=M,y.groupOrder=A,y.renderOrder=_.renderOrder,y.z=R,y.group=E),t++,y}function d(_,x,M,A,R,E){const y=h(_,x,M,A,R,E);M.transmission>0?r.push(y):M.transparent===!0?l.push(y):i.push(y)}function m(_,x,M,A,R,E){const y=h(_,x,M,A,R,E);M.transmission>0?r.unshift(y):M.transparent===!0?l.unshift(y):i.unshift(y)}function p(_,x){i.length>1&&i.sort(_||uA),r.length>1&&r.sort(x||Xv),l.length>1&&l.sort(x||Xv)}function g(){for(let _=t,x=s.length;_<x;_++){const M=s[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function fA(){let s=new WeakMap;function t(r,l){const c=s.get(r);let h;return c===void 0?(h=new Wv,s.set(r,[h])):l>=c.length?(h=new Wv,c.push(h)):h=c[l],h}function i(){s=new WeakMap}return{get:t,dispose:i}}function hA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new et,color:new He};break;case"SpotLight":i={position:new et,direction:new et,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new et,color:new He,distance:0,decay:0};break;case"HemisphereLight":i={direction:new et,skyColor:new He,groundColor:new He};break;case"RectAreaLight":i={color:new He,position:new et,halfWidth:new et,halfHeight:new et};break}return s[t.id]=i,i}}}function dA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let pA=0;function mA(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function gA(s){const t=new hA,i=dA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new et);const l=new et,c=new An,h=new An;function d(p){let g=0,_=0,x=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let M=0,A=0,R=0,E=0,y=0,z=0,N=0,O=0,B=0,P=0,F=0;p.sort(mA);for(let C=0,U=p.length;C<U;C++){const k=p[C],j=k.color,it=k.intensity,pt=k.distance;let xt=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Xo?xt=k.shadow.map.texture:xt=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)g+=j.r*it,_+=j.g*it,x+=j.b*it;else if(k.isLightProbe){for(let H=0;H<9;H++)r.probe[H].addScaledVector(k.sh.coefficients[H],it);F++}else if(k.isDirectionalLight){const H=t.get(k);if(H.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const Y=k.shadow,st=i.get(k);st.shadowIntensity=Y.intensity,st.shadowBias=Y.bias,st.shadowNormalBias=Y.normalBias,st.shadowRadius=Y.radius,st.shadowMapSize=Y.mapSize,r.directionalShadow[M]=st,r.directionalShadowMap[M]=xt,r.directionalShadowMatrix[M]=k.shadow.matrix,z++}r.directional[M]=H,M++}else if(k.isSpotLight){const H=t.get(k);H.position.setFromMatrixPosition(k.matrixWorld),H.color.copy(j).multiplyScalar(it),H.distance=pt,H.coneCos=Math.cos(k.angle),H.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),H.decay=k.decay,r.spot[R]=H;const Y=k.shadow;if(k.map&&(r.spotLightMap[B]=k.map,B++,Y.updateMatrices(k),k.castShadow&&P++),r.spotLightMatrix[R]=Y.matrix,k.castShadow){const st=i.get(k);st.shadowIntensity=Y.intensity,st.shadowBias=Y.bias,st.shadowNormalBias=Y.normalBias,st.shadowRadius=Y.radius,st.shadowMapSize=Y.mapSize,r.spotShadow[R]=st,r.spotShadowMap[R]=xt,O++}R++}else if(k.isRectAreaLight){const H=t.get(k);H.color.copy(j).multiplyScalar(it),H.halfWidth.set(k.width*.5,0,0),H.halfHeight.set(0,k.height*.5,0),r.rectArea[E]=H,E++}else if(k.isPointLight){const H=t.get(k);if(H.color.copy(k.color).multiplyScalar(k.intensity),H.distance=k.distance,H.decay=k.decay,k.castShadow){const Y=k.shadow,st=i.get(k);st.shadowIntensity=Y.intensity,st.shadowBias=Y.bias,st.shadowNormalBias=Y.normalBias,st.shadowRadius=Y.radius,st.shadowMapSize=Y.mapSize,st.shadowCameraNear=Y.camera.near,st.shadowCameraFar=Y.camera.far,r.pointShadow[A]=st,r.pointShadowMap[A]=xt,r.pointShadowMatrix[A]=k.shadow.matrix,N++}r.point[A]=H,A++}else if(k.isHemisphereLight){const H=t.get(k);H.skyColor.copy(k.color).multiplyScalar(it),H.groundColor.copy(k.groundColor).multiplyScalar(it),r.hemi[y]=H,y++}}E>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=te.LTC_FLOAT_1,r.rectAreaLTC2=te.LTC_FLOAT_2):(r.rectAreaLTC1=te.LTC_HALF_1,r.rectAreaLTC2=te.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=x;const Z=r.hash;(Z.directionalLength!==M||Z.pointLength!==A||Z.spotLength!==R||Z.rectAreaLength!==E||Z.hemiLength!==y||Z.numDirectionalShadows!==z||Z.numPointShadows!==N||Z.numSpotShadows!==O||Z.numSpotMaps!==B||Z.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=R,r.rectArea.length=E,r.point.length=A,r.hemi.length=y,r.directionalShadow.length=z,r.directionalShadowMap.length=z,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=O,r.spotShadowMap.length=O,r.directionalShadowMatrix.length=z,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=O+B-P,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=F,Z.directionalLength=M,Z.pointLength=A,Z.spotLength=R,Z.rectAreaLength=E,Z.hemiLength=y,Z.numDirectionalShadows=z,Z.numPointShadows=N,Z.numSpotShadows=O,Z.numSpotMaps=B,Z.numLightProbes=F,r.version=pA++)}function m(p,g){let _=0,x=0,M=0,A=0,R=0;const E=g.matrixWorldInverse;for(let y=0,z=p.length;y<z;y++){const N=p[y];if(N.isDirectionalLight){const O=r.directional[_];O.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(E),_++}else if(N.isSpotLight){const O=r.spot[M];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(E),O.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(E),M++}else if(N.isRectAreaLight){const O=r.rectArea[A];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(E),h.identity(),c.copy(N.matrixWorld),c.premultiply(E),h.extractRotation(c),O.halfWidth.set(N.width*.5,0,0),O.halfHeight.set(0,N.height*.5,0),O.halfWidth.applyMatrix4(h),O.halfHeight.applyMatrix4(h),A++}else if(N.isPointLight){const O=r.point[x];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(E),x++}else if(N.isHemisphereLight){const O=r.hemi[R];O.direction.setFromMatrixPosition(N.matrixWorld),O.direction.transformDirection(E),R++}}}return{setup:d,setupView:m,state:r}}function jv(s){const t=new gA(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function h(g){r.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function _A(s){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new jv(s),t.set(l,[d])):c>=h.length?(d=new jv(s),h.push(d)):d=h[c],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const vA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xA=`uniform sampler2D shadow_pass;
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
}`,yA=[new et(1,0,0),new et(-1,0,0),new et(0,1,0),new et(0,-1,0),new et(0,0,1),new et(0,0,-1)],SA=[new et(0,-1,0),new et(0,-1,0),new et(0,0,1),new et(0,0,-1),new et(0,-1,0),new et(0,-1,0)],Yv=new An,Yl=new et,lp=new et;function MA(s,t,i){let r=new Em;const l=new Le,c=new Le,h=new Nn,d=new wM,m=new DM,p={},g=i.maxTextureSize,_={[$r]:Pi,[Pi]:$r,[qi]:qi},x=new Ia({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:vA,fragmentShader:xA}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const A=new ei;A.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Oi(A,x),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wu;let y=this.type;this.render=function(P,F,Z){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||P.length===0)return;P.type===_S&&(Ae("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),P.type=Wu);const C=s.getRenderTarget(),U=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),j=s.state;j.setBlending(fr),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const it=y!==this.type;it&&F.traverse(function(pt){pt.material&&(Array.isArray(pt.material)?pt.material.forEach(xt=>xt.needsUpdate=!0):pt.material.needsUpdate=!0)});for(let pt=0,xt=P.length;pt<xt;pt++){const H=P[pt],Y=H.shadow;if(Y===void 0){Ae("WebGLShadowMap:",H,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const st=Y.getFrameExtents();if(l.multiply(st),c.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/st.x),l.x=c.x*st.x,Y.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/st.y),l.y=c.y*st.y,Y.mapSize.y=c.y)),Y.map===null||it===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===ql){if(H.isPointLight){Ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Oa(l.x,l.y,{format:Xo,type:dr,minFilter:di,magFilter:di,generateMipmaps:!1}),Y.map.texture.name=H.name+".shadowMap",Y.map.depthTexture=new nc(l.x,l.y,Ua),Y.map.depthTexture.name=H.name+".shadowMapDepth",Y.map.depthTexture.format=pr,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=oi,Y.map.depthTexture.magFilter=oi}else{H.isPointLight?(Y.map=new Rx(l.x),Y.map.depthTexture=new AM(l.x,Pa)):(Y.map=new Oa(l.x,l.y),Y.map.depthTexture=new nc(l.x,l.y,Pa)),Y.map.depthTexture.name=H.name+".shadowMap",Y.map.depthTexture.format=pr;const Ut=s.state.buffers.depth.getReversed();this.type===Wu?(Y.map.depthTexture.compareFunction=Ut?ym:xm,Y.map.depthTexture.minFilter=di,Y.map.depthTexture.magFilter=di):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=oi,Y.map.depthTexture.magFilter=oi)}Y.camera.updateProjectionMatrix()}const Pt=Y.map.isWebGLCubeRenderTarget?6:1;for(let Ut=0;Ut<Pt;Ut++){if(Y.map.isWebGLCubeRenderTarget)s.setRenderTarget(Y.map,Ut),s.clear();else{Ut===0&&(s.setRenderTarget(Y.map),s.clear());const V=Y.getViewport(Ut);h.set(c.x*V.x,c.y*V.y,c.x*V.z,c.y*V.w),j.viewport(h)}if(H.isPointLight){const V=Y.camera,ut=Y.matrix,Et=H.distance||V.far;Et!==V.far&&(V.far=Et,V.updateProjectionMatrix()),Yl.setFromMatrixPosition(H.matrixWorld),V.position.copy(Yl),lp.copy(V.position),lp.add(yA[Ut]),V.up.copy(SA[Ut]),V.lookAt(lp),V.updateMatrixWorld(),ut.makeTranslation(-Yl.x,-Yl.y,-Yl.z),Yv.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Yv,V.coordinateSystem,V.reversedDepth)}else Y.updateMatrices(H);r=Y.getFrustum(),O(F,Z,Y.camera,H,this.type)}Y.isPointLightShadow!==!0&&this.type===ql&&z(Y,Z),Y.needsUpdate=!1}y=this.type,E.needsUpdate=!1,s.setRenderTarget(C,U,k)};function z(P,F){const Z=t.update(R);x.defines.VSM_SAMPLES!==P.blurSamples&&(x.defines.VSM_SAMPLES=P.blurSamples,M.defines.VSM_SAMPLES=P.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Oa(l.x,l.y,{format:Xo,type:dr})),x.uniforms.shadow_pass.value=P.map.depthTexture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(F,null,Z,x,R,null),M.uniforms.shadow_pass.value=P.mapPass.texture,M.uniforms.resolution.value=P.mapSize,M.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(F,null,Z,M,R,null)}function N(P,F,Z,C){let U=null;const k=Z.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(k!==void 0)U=k;else if(U=Z.isPointLight===!0?m:d,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const j=U.uuid,it=F.uuid;let pt=p[j];pt===void 0&&(pt={},p[j]=pt);let xt=pt[it];xt===void 0&&(xt=U.clone(),pt[it]=xt,F.addEventListener("dispose",B)),U=xt}if(U.visible=F.visible,U.wireframe=F.wireframe,C===ql?U.side=F.shadowSide!==null?F.shadowSide:F.side:U.side=F.shadowSide!==null?F.shadowSide:_[F.side],U.alphaMap=F.alphaMap,U.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,U.map=F.map,U.clipShadows=F.clipShadows,U.clippingPlanes=F.clippingPlanes,U.clipIntersection=F.clipIntersection,U.displacementMap=F.displacementMap,U.displacementScale=F.displacementScale,U.displacementBias=F.displacementBias,U.wireframeLinewidth=F.wireframeLinewidth,U.linewidth=F.linewidth,Z.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const j=s.properties.get(U);j.light=Z}return U}function O(P,F,Z,C,U){if(P.visible===!1)return;if(P.layers.test(F.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&U===ql)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,P.matrixWorld);const it=t.update(P),pt=P.material;if(Array.isArray(pt)){const xt=it.groups;for(let H=0,Y=xt.length;H<Y;H++){const st=xt[H],Pt=pt[st.materialIndex];if(Pt&&Pt.visible){const Ut=N(P,Pt,C,U);P.onBeforeShadow(s,P,F,Z,it,Ut,st),s.renderBufferDirect(Z,null,it,Ut,P,st),P.onAfterShadow(s,P,F,Z,it,Ut,st)}}}else if(pt.visible){const xt=N(P,pt,C,U);P.onBeforeShadow(s,P,F,Z,it,xt,null),s.renderBufferDirect(Z,null,it,xt,P,null),P.onAfterShadow(s,P,F,Z,it,xt,null)}}const j=P.children;for(let it=0,pt=j.length;it<pt;it++)O(j[it],F,Z,C,U)}function B(P){P.target.removeEventListener("dispose",B);for(const Z in p){const C=p[Z],U=P.target.uuid;U in C&&(C[U].dispose(),delete C[U])}}}const bA={[gp]:_p,[vp]:Sp,[xp]:Mp,[Go]:yp,[_p]:gp,[Sp]:vp,[Mp]:xp,[yp]:Go};function EA(s,t){function i(){let Q=!1;const Zt=new Nn;let Nt=null;const Kt=new Nn(0,0,0,0);return{setMask:function(yt){Nt!==yt&&!Q&&(s.colorMask(yt,yt,yt,yt),Nt=yt)},setLocked:function(yt){Q=yt},setClear:function(yt,wt,zt,_e,rn){rn===!0&&(yt*=_e,wt*=_e,zt*=_e),Zt.set(yt,wt,zt,_e),Kt.equals(Zt)===!1&&(s.clearColor(yt,wt,zt,_e),Kt.copy(Zt))},reset:function(){Q=!1,Nt=null,Kt.set(-1,0,0,0)}}}function r(){let Q=!1,Zt=!1,Nt=null,Kt=null,yt=null;return{setReversed:function(wt){if(Zt!==wt){const zt=t.get("EXT_clip_control");wt?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),Zt=wt;const _e=yt;yt=null,this.setClear(_e)}},getReversed:function(){return Zt},setTest:function(wt){wt?St(s.DEPTH_TEST):kt(s.DEPTH_TEST)},setMask:function(wt){Nt!==wt&&!Q&&(s.depthMask(wt),Nt=wt)},setFunc:function(wt){if(Zt&&(wt=bA[wt]),Kt!==wt){switch(wt){case gp:s.depthFunc(s.NEVER);break;case _p:s.depthFunc(s.ALWAYS);break;case vp:s.depthFunc(s.LESS);break;case Go:s.depthFunc(s.LEQUAL);break;case xp:s.depthFunc(s.EQUAL);break;case yp:s.depthFunc(s.GEQUAL);break;case Sp:s.depthFunc(s.GREATER);break;case Mp:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Kt=wt}},setLocked:function(wt){Q=wt},setClear:function(wt){yt!==wt&&(Zt&&(wt=1-wt),s.clearDepth(wt),yt=wt)},reset:function(){Q=!1,Nt=null,Kt=null,yt=null,Zt=!1}}}function l(){let Q=!1,Zt=null,Nt=null,Kt=null,yt=null,wt=null,zt=null,_e=null,rn=null;return{setTest:function(We){Q||(We?St(s.STENCIL_TEST):kt(s.STENCIL_TEST))},setMask:function(We){Zt!==We&&!Q&&(s.stencilMask(We),Zt=We)},setFunc:function(We,Bn,pi){(Nt!==We||Kt!==Bn||yt!==pi)&&(s.stencilFunc(We,Bn,pi),Nt=We,Kt=Bn,yt=pi)},setOp:function(We,Bn,pi){(wt!==We||zt!==Bn||_e!==pi)&&(s.stencilOp(We,Bn,pi),wt=We,zt=Bn,_e=pi)},setLocked:function(We){Q=We},setClear:function(We){rn!==We&&(s.clearStencil(We),rn=We)},reset:function(){Q=!1,Zt=null,Nt=null,Kt=null,yt=null,wt=null,zt=null,_e=null,rn=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},x=new WeakMap,M=[],A=null,R=!1,E=null,y=null,z=null,N=null,O=null,B=null,P=null,F=new He(0,0,0),Z=0,C=!1,U=null,k=null,j=null,it=null,pt=null;const xt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Y=0;const st=s.getParameter(s.VERSION);st.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(st)[1]),H=Y>=1):st.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),H=Y>=2);let Pt=null,Ut={};const V=s.getParameter(s.SCISSOR_BOX),ut=s.getParameter(s.VIEWPORT),Et=new Nn().fromArray(V),Vt=new Nn().fromArray(ut);function jt(Q,Zt,Nt,Kt){const yt=new Uint8Array(4),wt=s.createTexture();s.bindTexture(Q,wt),s.texParameteri(Q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let zt=0;zt<Nt;zt++)Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?s.texImage3D(Zt,0,s.RGBA,1,1,Kt,0,s.RGBA,s.UNSIGNED_BYTE,yt):s.texImage2D(Zt+zt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,yt);return wt}const lt={};lt[s.TEXTURE_2D]=jt(s.TEXTURE_2D,s.TEXTURE_2D,1),lt[s.TEXTURE_CUBE_MAP]=jt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[s.TEXTURE_2D_ARRAY]=jt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),lt[s.TEXTURE_3D]=jt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),St(s.DEPTH_TEST),h.setFunc(Go),re(!1),Ze(k_),St(s.CULL_FACE),le(fr);function St(Q){g[Q]!==!0&&(s.enable(Q),g[Q]=!0)}function kt(Q){g[Q]!==!1&&(s.disable(Q),g[Q]=!1)}function ie(Q,Zt){return _[Q]!==Zt?(s.bindFramebuffer(Q,Zt),_[Q]=Zt,Q===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Zt),Q===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Zt),!0):!1}function ae(Q,Zt){let Nt=M,Kt=!1;if(Q){Nt=x.get(Zt),Nt===void 0&&(Nt=[],x.set(Zt,Nt));const yt=Q.textures;if(Nt.length!==yt.length||Nt[0]!==s.COLOR_ATTACHMENT0){for(let wt=0,zt=yt.length;wt<zt;wt++)Nt[wt]=s.COLOR_ATTACHMENT0+wt;Nt.length=yt.length,Kt=!0}}else Nt[0]!==s.BACK&&(Nt[0]=s.BACK,Kt=!0);Kt&&s.drawBuffers(Nt)}function Ne(Q){return A!==Q?(s.useProgram(Q),A=Q,!0):!1}const cn={[Ns]:s.FUNC_ADD,[xS]:s.FUNC_SUBTRACT,[yS]:s.FUNC_REVERSE_SUBTRACT};cn[SS]=s.MIN,cn[MS]=s.MAX;const de={[bS]:s.ZERO,[ES]:s.ONE,[TS]:s.SRC_COLOR,[pp]:s.SRC_ALPHA,[US]:s.SRC_ALPHA_SATURATE,[wS]:s.DST_COLOR,[RS]:s.DST_ALPHA,[AS]:s.ONE_MINUS_SRC_COLOR,[mp]:s.ONE_MINUS_SRC_ALPHA,[DS]:s.ONE_MINUS_DST_COLOR,[CS]:s.ONE_MINUS_DST_ALPHA,[LS]:s.CONSTANT_COLOR,[NS]:s.ONE_MINUS_CONSTANT_COLOR,[OS]:s.CONSTANT_ALPHA,[PS]:s.ONE_MINUS_CONSTANT_ALPHA};function le(Q,Zt,Nt,Kt,yt,wt,zt,_e,rn,We){if(Q===fr){R===!0&&(kt(s.BLEND),R=!1);return}if(R===!1&&(St(s.BLEND),R=!0),Q!==vS){if(Q!==E||We!==C){if((y!==Ns||O!==Ns)&&(s.blendEquation(s.FUNC_ADD),y=Ns,O=Ns),We)switch(Q){case Ho:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case X_:s.blendFunc(s.ONE,s.ONE);break;case W_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case j_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:an("WebGLState: Invalid blending: ",Q);break}else switch(Q){case Ho:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case X_:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case W_:an("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case j_:an("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:an("WebGLState: Invalid blending: ",Q);break}z=null,N=null,B=null,P=null,F.set(0,0,0),Z=0,E=Q,C=We}return}yt=yt||Zt,wt=wt||Nt,zt=zt||Kt,(Zt!==y||yt!==O)&&(s.blendEquationSeparate(cn[Zt],cn[yt]),y=Zt,O=yt),(Nt!==z||Kt!==N||wt!==B||zt!==P)&&(s.blendFuncSeparate(de[Nt],de[Kt],de[wt],de[zt]),z=Nt,N=Kt,B=wt,P=zt),(_e.equals(F)===!1||rn!==Z)&&(s.blendColor(_e.r,_e.g,_e.b,rn),F.copy(_e),Z=rn),E=Q,C=!1}function he(Q,Zt){Q.side===qi?kt(s.CULL_FACE):St(s.CULL_FACE);let Nt=Q.side===Pi;Zt&&(Nt=!Nt),re(Nt),Q.blending===Ho&&Q.transparent===!1?le(fr):le(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),h.setFunc(Q.depthFunc),h.setTest(Q.depthTest),h.setMask(Q.depthWrite),c.setMask(Q.colorWrite);const Kt=Q.stencilWrite;d.setTest(Kt),Kt&&(d.setMask(Q.stencilWriteMask),d.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),d.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),Je(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?St(s.SAMPLE_ALPHA_TO_COVERAGE):kt(s.SAMPLE_ALPHA_TO_COVERAGE)}function re(Q){U!==Q&&(Q?s.frontFace(s.CW):s.frontFace(s.CCW),U=Q)}function Ze(Q){Q!==mS?(St(s.CULL_FACE),Q!==k&&(Q===k_?s.cullFace(s.BACK):Q===gS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):kt(s.CULL_FACE),k=Q}function W(Q){Q!==j&&(H&&s.lineWidth(Q),j=Q)}function Je(Q,Zt,Nt){Q?(St(s.POLYGON_OFFSET_FILL),(it!==Zt||pt!==Nt)&&(s.polygonOffset(Zt,Nt),it=Zt,pt=Nt)):kt(s.POLYGON_OFFSET_FILL)}function Ce(Q){Q?St(s.SCISSOR_TEST):kt(s.SCISSOR_TEST)}function Oe(Q){Q===void 0&&(Q=s.TEXTURE0+xt-1),Pt!==Q&&(s.activeTexture(Q),Pt=Q)}function Yt(Q,Zt,Nt){Nt===void 0&&(Pt===null?Nt=s.TEXTURE0+xt-1:Nt=Pt);let Kt=Ut[Nt];Kt===void 0&&(Kt={type:void 0,texture:void 0},Ut[Nt]=Kt),(Kt.type!==Q||Kt.texture!==Zt)&&(Pt!==Nt&&(s.activeTexture(Nt),Pt=Nt),s.bindTexture(Q,Zt||lt[Q]),Kt.type=Q,Kt.texture=Zt)}function I(){const Q=Ut[Pt];Q!==void 0&&Q.type!==void 0&&(s.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function T(){try{s.compressedTexImage2D(...arguments)}catch(Q){an("WebGLState:",Q)}}function $(){try{s.compressedTexImage3D(...arguments)}catch(Q){an("WebGLState:",Q)}}function bt(){try{s.texSubImage2D(...arguments)}catch(Q){an("WebGLState:",Q)}}function Ct(){try{s.texSubImage3D(...arguments)}catch(Q){an("WebGLState:",Q)}}function _t(){try{s.compressedTexSubImage2D(...arguments)}catch(Q){an("WebGLState:",Q)}}function ce(){try{s.compressedTexSubImage3D(...arguments)}catch(Q){an("WebGLState:",Q)}}function Gt(){try{s.texStorage2D(...arguments)}catch(Q){an("WebGLState:",Q)}}function ee(){try{s.texStorage3D(...arguments)}catch(Q){an("WebGLState:",Q)}}function ge(){try{s.texImage2D(...arguments)}catch(Q){an("WebGLState:",Q)}}function Ft(){try{s.texImage3D(...arguments)}catch(Q){an("WebGLState:",Q)}}function Ht(Q){Et.equals(Q)===!1&&(s.scissor(Q.x,Q.y,Q.z,Q.w),Et.copy(Q))}function Jt(Q){Vt.equals(Q)===!1&&(s.viewport(Q.x,Q.y,Q.z,Q.w),Vt.copy(Q))}function qt(Q,Zt){let Nt=p.get(Zt);Nt===void 0&&(Nt=new WeakMap,p.set(Zt,Nt));let Kt=Nt.get(Q);Kt===void 0&&(Kt=s.getUniformBlockIndex(Zt,Q.name),Nt.set(Q,Kt))}function Wt(Q,Zt){const Kt=p.get(Zt).get(Q);m.get(Zt)!==Kt&&(s.uniformBlockBinding(Zt,Kt,Q.__bindingPointIndex),m.set(Zt,Kt))}function De(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},Pt=null,Ut={},_={},x=new WeakMap,M=[],A=null,R=!1,E=null,y=null,z=null,N=null,O=null,B=null,P=null,F=new He(0,0,0),Z=0,C=!1,U=null,k=null,j=null,it=null,pt=null,Et.set(0,0,s.canvas.width,s.canvas.height),Vt.set(0,0,s.canvas.width,s.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:St,disable:kt,bindFramebuffer:ie,drawBuffers:ae,useProgram:Ne,setBlending:le,setMaterial:he,setFlipSided:re,setCullFace:Ze,setLineWidth:W,setPolygonOffset:Je,setScissorTest:Ce,activeTexture:Oe,bindTexture:Yt,unbindTexture:I,compressedTexImage2D:T,compressedTexImage3D:$,texImage2D:ge,texImage3D:Ft,updateUBOMapping:qt,uniformBlockBinding:Wt,texStorage2D:Gt,texStorage3D:ee,texSubImage2D:bt,texSubImage3D:Ct,compressedTexSubImage2D:_t,compressedTexSubImage3D:ce,scissor:Ht,viewport:Jt,reset:De}}function TA(s,t,i,r,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Le,g=new WeakMap;let _;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(I,T){return M?new OffscreenCanvas(I,T):af("canvas")}function R(I,T,$){let bt=1;const Ct=Yt(I);if((Ct.width>$||Ct.height>$)&&(bt=$/Math.max(Ct.width,Ct.height)),bt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const _t=Math.floor(bt*Ct.width),ce=Math.floor(bt*Ct.height);_===void 0&&(_=A(_t,ce));const Gt=T?A(_t,ce):_;return Gt.width=_t,Gt.height=ce,Gt.getContext("2d").drawImage(I,0,0,_t,ce),Ae("WebGLRenderer: Texture has been resized from ("+Ct.width+"x"+Ct.height+") to ("+_t+"x"+ce+")."),Gt}else return"data"in I&&Ae("WebGLRenderer: Image in DataTexture is too big ("+Ct.width+"x"+Ct.height+")."),I;return I}function E(I){return I.generateMipmaps}function y(I){s.generateMipmap(I)}function z(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(I,T,$,bt,Ct=!1){if(I!==null){if(s[I]!==void 0)return s[I];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let _t=T;if(T===s.RED&&($===s.FLOAT&&(_t=s.R32F),$===s.HALF_FLOAT&&(_t=s.R16F),$===s.UNSIGNED_BYTE&&(_t=s.R8)),T===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(_t=s.R8UI),$===s.UNSIGNED_SHORT&&(_t=s.R16UI),$===s.UNSIGNED_INT&&(_t=s.R32UI),$===s.BYTE&&(_t=s.R8I),$===s.SHORT&&(_t=s.R16I),$===s.INT&&(_t=s.R32I)),T===s.RG&&($===s.FLOAT&&(_t=s.RG32F),$===s.HALF_FLOAT&&(_t=s.RG16F),$===s.UNSIGNED_BYTE&&(_t=s.RG8)),T===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(_t=s.RG8UI),$===s.UNSIGNED_SHORT&&(_t=s.RG16UI),$===s.UNSIGNED_INT&&(_t=s.RG32UI),$===s.BYTE&&(_t=s.RG8I),$===s.SHORT&&(_t=s.RG16I),$===s.INT&&(_t=s.RG32I)),T===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(_t=s.RGB8UI),$===s.UNSIGNED_SHORT&&(_t=s.RGB16UI),$===s.UNSIGNED_INT&&(_t=s.RGB32UI),$===s.BYTE&&(_t=s.RGB8I),$===s.SHORT&&(_t=s.RGB16I),$===s.INT&&(_t=s.RGB32I)),T===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(_t=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(_t=s.RGBA16UI),$===s.UNSIGNED_INT&&(_t=s.RGBA32UI),$===s.BYTE&&(_t=s.RGBA8I),$===s.SHORT&&(_t=s.RGBA16I),$===s.INT&&(_t=s.RGBA32I)),T===s.RGB&&($===s.UNSIGNED_INT_5_9_9_9_REV&&(_t=s.RGB9_E5),$===s.UNSIGNED_INT_10F_11F_11F_REV&&(_t=s.R11F_G11F_B10F)),T===s.RGBA){const ce=Ct?ef:$e.getTransfer(bt);$===s.FLOAT&&(_t=s.RGBA32F),$===s.HALF_FLOAT&&(_t=s.RGBA16F),$===s.UNSIGNED_BYTE&&(_t=ce===hn?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(_t=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(_t=s.RGB5_A1)}return(_t===s.R16F||_t===s.R32F||_t===s.RG16F||_t===s.RG32F||_t===s.RGBA16F||_t===s.RGBA32F)&&t.get("EXT_color_buffer_float"),_t}function O(I,T){let $;return I?T===null||T===Pa||T===tc?$=s.DEPTH24_STENCIL8:T===Ua?$=s.DEPTH32F_STENCIL8:T===Jl&&($=s.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Pa||T===tc?$=s.DEPTH_COMPONENT24:T===Ua?$=s.DEPTH_COMPONENT32F:T===Jl&&($=s.DEPTH_COMPONENT16),$}function B(I,T){return E(I)===!0||I.isFramebufferTexture&&I.minFilter!==oi&&I.minFilter!==di?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function P(I){const T=I.target;T.removeEventListener("dispose",P),Z(T),T.isVideoTexture&&g.delete(T)}function F(I){const T=I.target;T.removeEventListener("dispose",F),U(T)}function Z(I){const T=r.get(I);if(T.__webglInit===void 0)return;const $=I.source,bt=x.get($);if(bt){const Ct=bt[T.__cacheKey];Ct.usedTimes--,Ct.usedTimes===0&&C(I),Object.keys(bt).length===0&&x.delete($)}r.remove(I)}function C(I){const T=r.get(I);s.deleteTexture(T.__webglTexture);const $=I.source,bt=x.get($);delete bt[T.__cacheKey],h.memory.textures--}function U(I){const T=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let bt=0;bt<6;bt++){if(Array.isArray(T.__webglFramebuffer[bt]))for(let Ct=0;Ct<T.__webglFramebuffer[bt].length;Ct++)s.deleteFramebuffer(T.__webglFramebuffer[bt][Ct]);else s.deleteFramebuffer(T.__webglFramebuffer[bt]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[bt])}else{if(Array.isArray(T.__webglFramebuffer))for(let bt=0;bt<T.__webglFramebuffer.length;bt++)s.deleteFramebuffer(T.__webglFramebuffer[bt]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let bt=0;bt<T.__webglColorRenderbuffer.length;bt++)T.__webglColorRenderbuffer[bt]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[bt]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const $=I.textures;for(let bt=0,Ct=$.length;bt<Ct;bt++){const _t=r.get($[bt]);_t.__webglTexture&&(s.deleteTexture(_t.__webglTexture),h.memory.textures--),r.remove($[bt])}r.remove(I)}let k=0;function j(){k=0}function it(){const I=k;return I>=l.maxTextures&&Ae("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l.maxTextures),k+=1,I}function pt(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function xt(I,T){const $=r.get(I);if(I.isVideoTexture&&Ce(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&$.__version!==I.version){const bt=I.image;if(bt===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else if(bt.complete===!1)Ae("WebGLRenderer: Texture marked for update but image is incomplete");else{lt($,I,T);return}}else I.isExternalTexture&&($.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+T)}function H(I,T){const $=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){lt($,I,T);return}else I.isExternalTexture&&($.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+T)}function Y(I,T){const $=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){lt($,I,T);return}i.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+T)}function st(I,T){const $=r.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&$.__version!==I.version){St($,I,T);return}i.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+T)}const Pt={[Tp]:s.REPEAT,[ur]:s.CLAMP_TO_EDGE,[Ap]:s.MIRRORED_REPEAT},Ut={[oi]:s.NEAREST,[BS]:s.NEAREST_MIPMAP_NEAREST,[Su]:s.NEAREST_MIPMAP_LINEAR,[di]:s.LINEAR,[Dd]:s.LINEAR_MIPMAP_NEAREST,[Ps]:s.LINEAR_MIPMAP_LINEAR},V={[VS]:s.NEVER,[jS]:s.ALWAYS,[GS]:s.LESS,[xm]:s.LEQUAL,[kS]:s.EQUAL,[ym]:s.GEQUAL,[XS]:s.GREATER,[WS]:s.NOTEQUAL};function ut(I,T){if(T.type===Ua&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===di||T.magFilter===Dd||T.magFilter===Su||T.magFilter===Ps||T.minFilter===di||T.minFilter===Dd||T.minFilter===Su||T.minFilter===Ps)&&Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,Pt[T.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,Pt[T.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,Pt[T.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,Ut[T.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,Ut[T.minFilter]),T.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,V[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===oi||T.minFilter!==Su&&T.minFilter!==Ps||T.type===Ua&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Et(I,T){let $=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",P));const bt=T.source;let Ct=x.get(bt);Ct===void 0&&(Ct={},x.set(bt,Ct));const _t=pt(T);if(_t!==I.__cacheKey){Ct[_t]===void 0&&(Ct[_t]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,$=!0),Ct[_t].usedTimes++;const ce=Ct[I.__cacheKey];ce!==void 0&&(Ct[I.__cacheKey].usedTimes--,ce.usedTimes===0&&C(T)),I.__cacheKey=_t,I.__webglTexture=Ct[_t].texture}return $}function Vt(I,T,$){return Math.floor(Math.floor(I/$)/T)}function jt(I,T,$,bt){const _t=I.updateRanges;if(_t.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,$,bt,T.data);else{_t.sort((Ft,Ht)=>Ft.start-Ht.start);let ce=0;for(let Ft=1;Ft<_t.length;Ft++){const Ht=_t[ce],Jt=_t[Ft],qt=Ht.start+Ht.count,Wt=Vt(Jt.start,T.width,4),De=Vt(Ht.start,T.width,4);Jt.start<=qt+1&&Wt===De&&Vt(Jt.start+Jt.count-1,T.width,4)===Wt?Ht.count=Math.max(Ht.count,Jt.start+Jt.count-Ht.start):(++ce,_t[ce]=Jt)}_t.length=ce+1;const Gt=s.getParameter(s.UNPACK_ROW_LENGTH),ee=s.getParameter(s.UNPACK_SKIP_PIXELS),ge=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let Ft=0,Ht=_t.length;Ft<Ht;Ft++){const Jt=_t[Ft],qt=Math.floor(Jt.start/4),Wt=Math.ceil(Jt.count/4),De=qt%T.width,Q=Math.floor(qt/T.width),Zt=Wt,Nt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,De),s.pixelStorei(s.UNPACK_SKIP_ROWS,Q),i.texSubImage2D(s.TEXTURE_2D,0,De,Q,Zt,Nt,$,bt,T.data)}I.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Gt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ee),s.pixelStorei(s.UNPACK_SKIP_ROWS,ge)}}function lt(I,T,$){let bt=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(bt=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(bt=s.TEXTURE_3D);const Ct=Et(I,T),_t=T.source;i.bindTexture(bt,I.__webglTexture,s.TEXTURE0+$);const ce=r.get(_t);if(_t.version!==ce.__version||Ct===!0){i.activeTexture(s.TEXTURE0+$);const Gt=$e.getPrimaries($e.workingColorSpace),ee=T.colorSpace===Kr?null:$e.getPrimaries(T.colorSpace),ge=T.colorSpace===Kr||Gt===ee?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let Ft=R(T.image,!1,l.maxTextureSize);Ft=Oe(T,Ft);const Ht=c.convert(T.format,T.colorSpace),Jt=c.convert(T.type);let qt=N(T.internalFormat,Ht,Jt,T.colorSpace,T.isVideoTexture);ut(bt,T);let Wt;const De=T.mipmaps,Q=T.isVideoTexture!==!0,Zt=ce.__version===void 0||Ct===!0,Nt=_t.dataReady,Kt=B(T,Ft);if(T.isDepthTexture)qt=O(T.format===Fs,T.type),Zt&&(Q?i.texStorage2D(s.TEXTURE_2D,1,qt,Ft.width,Ft.height):i.texImage2D(s.TEXTURE_2D,0,qt,Ft.width,Ft.height,0,Ht,Jt,null));else if(T.isDataTexture)if(De.length>0){Q&&Zt&&i.texStorage2D(s.TEXTURE_2D,Kt,qt,De[0].width,De[0].height);for(let yt=0,wt=De.length;yt<wt;yt++)Wt=De[yt],Q?Nt&&i.texSubImage2D(s.TEXTURE_2D,yt,0,0,Wt.width,Wt.height,Ht,Jt,Wt.data):i.texImage2D(s.TEXTURE_2D,yt,qt,Wt.width,Wt.height,0,Ht,Jt,Wt.data);T.generateMipmaps=!1}else Q?(Zt&&i.texStorage2D(s.TEXTURE_2D,Kt,qt,Ft.width,Ft.height),Nt&&jt(T,Ft,Ht,Jt)):i.texImage2D(s.TEXTURE_2D,0,qt,Ft.width,Ft.height,0,Ht,Jt,Ft.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Q&&Zt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Kt,qt,De[0].width,De[0].height,Ft.depth);for(let yt=0,wt=De.length;yt<wt;yt++)if(Wt=De[yt],T.format!==ya)if(Ht!==null)if(Q){if(Nt)if(T.layerUpdates.size>0){const zt=Ev(Wt.width,Wt.height,T.format,T.type);for(const _e of T.layerUpdates){const rn=Wt.data.subarray(_e*zt/Wt.data.BYTES_PER_ELEMENT,(_e+1)*zt/Wt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,yt,0,0,_e,Wt.width,Wt.height,1,Ht,rn)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,yt,0,0,0,Wt.width,Wt.height,Ft.depth,Ht,Wt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,yt,qt,Wt.width,Wt.height,Ft.depth,0,Wt.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Q?Nt&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,yt,0,0,0,Wt.width,Wt.height,Ft.depth,Ht,Jt,Wt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,yt,qt,Wt.width,Wt.height,Ft.depth,0,Ht,Jt,Wt.data)}else{Q&&Zt&&i.texStorage2D(s.TEXTURE_2D,Kt,qt,De[0].width,De[0].height);for(let yt=0,wt=De.length;yt<wt;yt++)Wt=De[yt],T.format!==ya?Ht!==null?Q?Nt&&i.compressedTexSubImage2D(s.TEXTURE_2D,yt,0,0,Wt.width,Wt.height,Ht,Wt.data):i.compressedTexImage2D(s.TEXTURE_2D,yt,qt,Wt.width,Wt.height,0,Wt.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Q?Nt&&i.texSubImage2D(s.TEXTURE_2D,yt,0,0,Wt.width,Wt.height,Ht,Jt,Wt.data):i.texImage2D(s.TEXTURE_2D,yt,qt,Wt.width,Wt.height,0,Ht,Jt,Wt.data)}else if(T.isDataArrayTexture)if(Q){if(Zt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Kt,qt,Ft.width,Ft.height,Ft.depth),Nt)if(T.layerUpdates.size>0){const yt=Ev(Ft.width,Ft.height,T.format,T.type);for(const wt of T.layerUpdates){const zt=Ft.data.subarray(wt*yt/Ft.data.BYTES_PER_ELEMENT,(wt+1)*yt/Ft.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,wt,Ft.width,Ft.height,1,Ht,Jt,zt)}T.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ft.width,Ft.height,Ft.depth,Ht,Jt,Ft.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,qt,Ft.width,Ft.height,Ft.depth,0,Ht,Jt,Ft.data);else if(T.isData3DTexture)Q?(Zt&&i.texStorage3D(s.TEXTURE_3D,Kt,qt,Ft.width,Ft.height,Ft.depth),Nt&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ft.width,Ft.height,Ft.depth,Ht,Jt,Ft.data)):i.texImage3D(s.TEXTURE_3D,0,qt,Ft.width,Ft.height,Ft.depth,0,Ht,Jt,Ft.data);else if(T.isFramebufferTexture){if(Zt)if(Q)i.texStorage2D(s.TEXTURE_2D,Kt,qt,Ft.width,Ft.height);else{let yt=Ft.width,wt=Ft.height;for(let zt=0;zt<Kt;zt++)i.texImage2D(s.TEXTURE_2D,zt,qt,yt,wt,0,Ht,Jt,null),yt>>=1,wt>>=1}}else if(De.length>0){if(Q&&Zt){const yt=Yt(De[0]);i.texStorage2D(s.TEXTURE_2D,Kt,qt,yt.width,yt.height)}for(let yt=0,wt=De.length;yt<wt;yt++)Wt=De[yt],Q?Nt&&i.texSubImage2D(s.TEXTURE_2D,yt,0,0,Ht,Jt,Wt):i.texImage2D(s.TEXTURE_2D,yt,qt,Ht,Jt,Wt);T.generateMipmaps=!1}else if(Q){if(Zt){const yt=Yt(Ft);i.texStorage2D(s.TEXTURE_2D,Kt,qt,yt.width,yt.height)}Nt&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ht,Jt,Ft)}else i.texImage2D(s.TEXTURE_2D,0,qt,Ht,Jt,Ft);E(T)&&y(bt),ce.__version=_t.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function St(I,T,$){if(T.image.length!==6)return;const bt=Et(I,T),Ct=T.source;i.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+$);const _t=r.get(Ct);if(Ct.version!==_t.__version||bt===!0){i.activeTexture(s.TEXTURE0+$);const ce=$e.getPrimaries($e.workingColorSpace),Gt=T.colorSpace===Kr?null:$e.getPrimaries(T.colorSpace),ee=T.colorSpace===Kr||ce===Gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const ge=T.isCompressedTexture||T.image[0].isCompressedTexture,Ft=T.image[0]&&T.image[0].isDataTexture,Ht=[];for(let wt=0;wt<6;wt++)!ge&&!Ft?Ht[wt]=R(T.image[wt],!0,l.maxCubemapSize):Ht[wt]=Ft?T.image[wt].image:T.image[wt],Ht[wt]=Oe(T,Ht[wt]);const Jt=Ht[0],qt=c.convert(T.format,T.colorSpace),Wt=c.convert(T.type),De=N(T.internalFormat,qt,Wt,T.colorSpace),Q=T.isVideoTexture!==!0,Zt=_t.__version===void 0||bt===!0,Nt=Ct.dataReady;let Kt=B(T,Jt);ut(s.TEXTURE_CUBE_MAP,T);let yt;if(ge){Q&&Zt&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Kt,De,Jt.width,Jt.height);for(let wt=0;wt<6;wt++){yt=Ht[wt].mipmaps;for(let zt=0;zt<yt.length;zt++){const _e=yt[zt];T.format!==ya?qt!==null?Q?Nt&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,zt,0,0,_e.width,_e.height,qt,_e.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,zt,De,_e.width,_e.height,0,_e.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?Nt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,zt,0,0,_e.width,_e.height,qt,Wt,_e.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,zt,De,_e.width,_e.height,0,qt,Wt,_e.data)}}}else{if(yt=T.mipmaps,Q&&Zt){yt.length>0&&Kt++;const wt=Yt(Ht[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Kt,De,wt.width,wt.height)}for(let wt=0;wt<6;wt++)if(Ft){Q?Nt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,Ht[wt].width,Ht[wt].height,qt,Wt,Ht[wt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,De,Ht[wt].width,Ht[wt].height,0,qt,Wt,Ht[wt].data);for(let zt=0;zt<yt.length;zt++){const rn=yt[zt].image[wt].image;Q?Nt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,zt+1,0,0,rn.width,rn.height,qt,Wt,rn.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,zt+1,De,rn.width,rn.height,0,qt,Wt,rn.data)}}else{Q?Nt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,qt,Wt,Ht[wt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,De,qt,Wt,Ht[wt]);for(let zt=0;zt<yt.length;zt++){const _e=yt[zt];Q?Nt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,zt+1,0,0,qt,Wt,_e.image[wt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,zt+1,De,qt,Wt,_e.image[wt])}}}E(T)&&y(s.TEXTURE_CUBE_MAP),_t.__version=Ct.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function kt(I,T,$,bt,Ct,_t){const ce=c.convert($.format,$.colorSpace),Gt=c.convert($.type),ee=N($.internalFormat,ce,Gt,$.colorSpace),ge=r.get(T),Ft=r.get($);if(Ft.__renderTarget=T,!ge.__hasExternalTextures){const Ht=Math.max(1,T.width>>_t),Jt=Math.max(1,T.height>>_t);Ct===s.TEXTURE_3D||Ct===s.TEXTURE_2D_ARRAY?i.texImage3D(Ct,_t,ee,Ht,Jt,T.depth,0,ce,Gt,null):i.texImage2D(Ct,_t,ee,Ht,Jt,0,ce,Gt,null)}i.bindFramebuffer(s.FRAMEBUFFER,I),Je(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,bt,Ct,Ft.__webglTexture,0,W(T)):(Ct===s.TEXTURE_2D||Ct>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Ct<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,bt,Ct,Ft.__webglTexture,_t),i.bindFramebuffer(s.FRAMEBUFFER,null)}function ie(I,T,$){if(s.bindRenderbuffer(s.RENDERBUFFER,I),T.depthBuffer){const bt=T.depthTexture,Ct=bt&&bt.isDepthTexture?bt.type:null,_t=O(T.stencilBuffer,Ct),ce=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Je(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,W(T),_t,T.width,T.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,W(T),_t,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,_t,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ce,s.RENDERBUFFER,I)}else{const bt=T.textures;for(let Ct=0;Ct<bt.length;Ct++){const _t=bt[Ct],ce=c.convert(_t.format,_t.colorSpace),Gt=c.convert(_t.type),ee=N(_t.internalFormat,ce,Gt,_t.colorSpace);Je(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,W(T),ee,T.width,T.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,W(T),ee,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ee,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ae(I,T,$){const bt=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ct=r.get(T.depthTexture);if(Ct.__renderTarget=T,(!Ct.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),bt){if(Ct.__webglInit===void 0&&(Ct.__webglInit=!0,T.depthTexture.addEventListener("dispose",P)),Ct.__webglTexture===void 0){Ct.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,Ct.__webglTexture),ut(s.TEXTURE_CUBE_MAP,T.depthTexture);const ge=c.convert(T.depthTexture.format),Ft=c.convert(T.depthTexture.type);let Ht;T.depthTexture.format===pr?Ht=s.DEPTH_COMPONENT24:T.depthTexture.format===Fs&&(Ht=s.DEPTH24_STENCIL8);for(let Jt=0;Jt<6;Jt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Jt,0,Ht,T.width,T.height,0,ge,Ft,null)}}else xt(T.depthTexture,0);const _t=Ct.__webglTexture,ce=W(T),Gt=bt?s.TEXTURE_CUBE_MAP_POSITIVE_X+$:s.TEXTURE_2D,ee=T.depthTexture.format===Fs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===pr)Je(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,Gt,_t,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,ee,Gt,_t,0);else if(T.depthTexture.format===Fs)Je(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,Gt,_t,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,ee,Gt,_t,0);else throw new Error("Unknown depthTexture format")}function Ne(I){const T=r.get(I),$=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const bt=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),bt){const Ct=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,bt.removeEventListener("dispose",Ct)};bt.addEventListener("dispose",Ct),T.__depthDisposeCallback=Ct}T.__boundDepthTexture=bt}if(I.depthTexture&&!T.__autoAllocateDepthBuffer)if($)for(let bt=0;bt<6;bt++)ae(T.__webglFramebuffer[bt],I,bt);else{const bt=I.texture.mipmaps;bt&&bt.length>0?ae(T.__webglFramebuffer[0],I,0):ae(T.__webglFramebuffer,I,0)}else if($){T.__webglDepthbuffer=[];for(let bt=0;bt<6;bt++)if(i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[bt]),T.__webglDepthbuffer[bt]===void 0)T.__webglDepthbuffer[bt]=s.createRenderbuffer(),ie(T.__webglDepthbuffer[bt],I,!1);else{const Ct=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_t=T.__webglDepthbuffer[bt];s.bindRenderbuffer(s.RENDERBUFFER,_t),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ct,s.RENDERBUFFER,_t)}}else{const bt=I.texture.mipmaps;if(bt&&bt.length>0?i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),ie(T.__webglDepthbuffer,I,!1);else{const Ct=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_t=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,_t),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ct,s.RENDERBUFFER,_t)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function cn(I,T,$){const bt=r.get(I);T!==void 0&&kt(bt.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&Ne(I)}function de(I){const T=I.texture,$=r.get(I),bt=r.get(T);I.addEventListener("dispose",F);const Ct=I.textures,_t=I.isWebGLCubeRenderTarget===!0,ce=Ct.length>1;if(ce||(bt.__webglTexture===void 0&&(bt.__webglTexture=s.createTexture()),bt.__version=T.version,h.memory.textures++),_t){$.__webglFramebuffer=[];for(let Gt=0;Gt<6;Gt++)if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer[Gt]=[];for(let ee=0;ee<T.mipmaps.length;ee++)$.__webglFramebuffer[Gt][ee]=s.createFramebuffer()}else $.__webglFramebuffer[Gt]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer=[];for(let Gt=0;Gt<T.mipmaps.length;Gt++)$.__webglFramebuffer[Gt]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(ce)for(let Gt=0,ee=Ct.length;Gt<ee;Gt++){const ge=r.get(Ct[Gt]);ge.__webglTexture===void 0&&(ge.__webglTexture=s.createTexture(),h.memory.textures++)}if(I.samples>0&&Je(I)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Gt=0;Gt<Ct.length;Gt++){const ee=Ct[Gt];$.__webglColorRenderbuffer[Gt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[Gt]);const ge=c.convert(ee.format,ee.colorSpace),Ft=c.convert(ee.type),Ht=N(ee.internalFormat,ge,Ft,ee.colorSpace,I.isXRRenderTarget===!0),Jt=W(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Jt,Ht,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Gt,s.RENDERBUFFER,$.__webglColorRenderbuffer[Gt])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),ie($.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(_t){i.bindTexture(s.TEXTURE_CUBE_MAP,bt.__webglTexture),ut(s.TEXTURE_CUBE_MAP,T);for(let Gt=0;Gt<6;Gt++)if(T.mipmaps&&T.mipmaps.length>0)for(let ee=0;ee<T.mipmaps.length;ee++)kt($.__webglFramebuffer[Gt][ee],I,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,ee);else kt($.__webglFramebuffer[Gt],I,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,0);E(T)&&y(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ce){for(let Gt=0,ee=Ct.length;Gt<ee;Gt++){const ge=Ct[Gt],Ft=r.get(ge);let Ht=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ht=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ht,Ft.__webglTexture),ut(Ht,ge),kt($.__webglFramebuffer,I,ge,s.COLOR_ATTACHMENT0+Gt,Ht,0),E(ge)&&y(Ht)}i.unbindTexture()}else{let Gt=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Gt=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Gt,bt.__webglTexture),ut(Gt,T),T.mipmaps&&T.mipmaps.length>0)for(let ee=0;ee<T.mipmaps.length;ee++)kt($.__webglFramebuffer[ee],I,T,s.COLOR_ATTACHMENT0,Gt,ee);else kt($.__webglFramebuffer,I,T,s.COLOR_ATTACHMENT0,Gt,0);E(T)&&y(Gt),i.unbindTexture()}I.depthBuffer&&Ne(I)}function le(I){const T=I.textures;for(let $=0,bt=T.length;$<bt;$++){const Ct=T[$];if(E(Ct)){const _t=z(I),ce=r.get(Ct).__webglTexture;i.bindTexture(_t,ce),y(_t),i.unbindTexture()}}}const he=[],re=[];function Ze(I){if(I.samples>0){if(Je(I)===!1){const T=I.textures,$=I.width,bt=I.height;let Ct=s.COLOR_BUFFER_BIT;const _t=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=r.get(I),Gt=T.length>1;if(Gt)for(let ge=0;ge<T.length;ge++)i.bindFramebuffer(s.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const ee=I.texture.mipmaps;ee&&ee.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ge=0;ge<T.length;ge++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Ct|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Ct|=s.STENCIL_BUFFER_BIT)),Gt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ce.__webglColorRenderbuffer[ge]);const Ft=r.get(T[ge]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ft,0)}s.blitFramebuffer(0,0,$,bt,0,0,$,bt,Ct,s.NEAREST),m===!0&&(he.length=0,re.length=0,he.push(s.COLOR_ATTACHMENT0+ge),I.depthBuffer&&I.resolveDepthBuffer===!1&&(he.push(_t),re.push(_t),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,re)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,he))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Gt)for(let ge=0;ge<T.length;ge++){i.bindFramebuffer(s.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,ce.__webglColorRenderbuffer[ge]);const Ft=r.get(T[ge]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,Ft,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&m){const T=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function W(I){return Math.min(l.maxSamples,I.samples)}function Je(I){const T=r.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ce(I){const T=h.render.frame;g.get(I)!==T&&(g.set(I,T),I.update())}function Oe(I,T){const $=I.colorSpace,bt=I.format,Ct=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||$!==Wo&&$!==Kr&&($e.getTransfer($)===hn?(bt!==ya||Ct!==Zi)&&Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):an("WebGLTextures: Unsupported texture color space:",$)),T}function Yt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=it,this.resetTextureUnits=j,this.setTexture2D=xt,this.setTexture2DArray=H,this.setTexture3D=Y,this.setTextureCube=st,this.rebindTextures=cn,this.setupRenderTarget=de,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=kt,this.useMultisampledRTT=Je,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function AA(s,t){function i(r,l=Kr){let c;const h=$e.getTransfer(l);if(r===Zi)return s.UNSIGNED_BYTE;if(r===pm)return s.UNSIGNED_SHORT_4_4_4_4;if(r===mm)return s.UNSIGNED_SHORT_5_5_5_1;if(r===hx)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===dx)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===ux)return s.BYTE;if(r===fx)return s.SHORT;if(r===Jl)return s.UNSIGNED_SHORT;if(r===dm)return s.INT;if(r===Pa)return s.UNSIGNED_INT;if(r===Ua)return s.FLOAT;if(r===dr)return s.HALF_FLOAT;if(r===px)return s.ALPHA;if(r===mx)return s.RGB;if(r===ya)return s.RGBA;if(r===pr)return s.DEPTH_COMPONENT;if(r===Fs)return s.DEPTH_STENCIL;if(r===gx)return s.RED;if(r===gm)return s.RED_INTEGER;if(r===Xo)return s.RG;if(r===_m)return s.RG_INTEGER;if(r===vm)return s.RGBA_INTEGER;if(r===ju||r===Yu||r===qu||r===Zu)if(h===hn)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===ju)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Yu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===qu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Zu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===ju)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Yu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===qu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Zu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Rp||r===Cp||r===wp||r===Dp)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Rp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Cp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===wp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Dp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Up||r===Lp||r===Np||r===Op||r===Pp||r===Fp||r===Ip)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Up||r===Lp)return h===hn?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Np)return h===hn?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Op)return c.COMPRESSED_R11_EAC;if(r===Pp)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Fp)return c.COMPRESSED_RG11_EAC;if(r===Ip)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Bp||r===zp||r===Hp||r===Vp||r===Gp||r===kp||r===Xp||r===Wp||r===jp||r===Yp||r===qp||r===Zp||r===Kp||r===Qp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Bp)return h===hn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===zp)return h===hn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Hp)return h===hn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Vp)return h===hn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gp)return h===hn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===kp)return h===hn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Xp)return h===hn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Wp)return h===hn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===jp)return h===hn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Yp)return h===hn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===qp)return h===hn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Zp)return h===hn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Kp)return h===hn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Qp)return h===hn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===$p||r===Jp||r===tm)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===$p)return h===hn?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Jp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===tm)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===em||r===nm||r===im||r===am)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===em)return c.COMPRESSED_RED_RGTC1_EXT;if(r===nm)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===im)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===am)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===tc?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const RA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CA=`
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

}`;class wA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new Cx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Ia({vertexShader:RA,fragmentShader:CA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Oi(new rc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DA extends zs{constructor(t,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,g=null,_=null,x=null,M=null,A=null;const R=typeof XRWebGLBinding<"u",E=new wA,y={},z=i.getContextAttributes();let N=null,O=null;const B=[],P=[],F=new Le;let Z=null;const C=new ua;C.viewport=new Nn;const U=new ua;U.viewport=new Nn;const k=[C,U],j=new zM;let it=null,pt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(lt){let St=B[lt];return St===void 0&&(St=new $d,B[lt]=St),St.getTargetRaySpace()},this.getControllerGrip=function(lt){let St=B[lt];return St===void 0&&(St=new $d,B[lt]=St),St.getGripSpace()},this.getHand=function(lt){let St=B[lt];return St===void 0&&(St=new $d,B[lt]=St),St.getHandSpace()};function xt(lt){const St=P.indexOf(lt.inputSource);if(St===-1)return;const kt=B[St];kt!==void 0&&(kt.update(lt.inputSource,lt.frame,p||h),kt.dispatchEvent({type:lt.type,data:lt.inputSource}))}function H(){l.removeEventListener("select",xt),l.removeEventListener("selectstart",xt),l.removeEventListener("selectend",xt),l.removeEventListener("squeeze",xt),l.removeEventListener("squeezestart",xt),l.removeEventListener("squeezeend",xt),l.removeEventListener("end",H),l.removeEventListener("inputsourceschange",Y);for(let lt=0;lt<B.length;lt++){const St=P[lt];St!==null&&(P[lt]=null,B[lt].disconnect(St))}it=null,pt=null,E.reset();for(const lt in y)delete y[lt];t.setRenderTarget(N),M=null,x=null,_=null,l=null,O=null,jt.stop(),r.isPresenting=!1,t.setPixelRatio(Z),t.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(lt){c=lt,r.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(lt){d=lt,r.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(lt){p=lt},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return _===null&&R&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(lt){if(l=lt,l!==null){if(N=t.getRenderTarget(),l.addEventListener("select",xt),l.addEventListener("selectstart",xt),l.addEventListener("selectend",xt),l.addEventListener("squeeze",xt),l.addEventListener("squeezestart",xt),l.addEventListener("squeezeend",xt),l.addEventListener("end",H),l.addEventListener("inputsourceschange",Y),z.xrCompatible!==!0&&await i.makeXRCompatible(),Z=t.getPixelRatio(),t.getSize(F),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let kt=null,ie=null,ae=null;z.depth&&(ae=z.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,kt=z.stencil?Fs:pr,ie=z.stencil?tc:Pa);const Ne={colorFormat:i.RGBA8,depthFormat:ae,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer(Ne),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),O=new Oa(x.textureWidth,x.textureHeight,{format:ya,type:Zi,depthTexture:new nc(x.textureWidth,x.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,kt),stencilBuffer:z.stencil,colorSpace:t.outputColorSpace,samples:z.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const kt={antialias:z.antialias,alpha:!0,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,kt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),O=new Oa(M.framebufferWidth,M.framebufferHeight,{format:ya,type:Zi,colorSpace:t.outputColorSpace,stencilBuffer:z.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),jt.setContext(l),jt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function Y(lt){for(let St=0;St<lt.removed.length;St++){const kt=lt.removed[St],ie=P.indexOf(kt);ie>=0&&(P[ie]=null,B[ie].disconnect(kt))}for(let St=0;St<lt.added.length;St++){const kt=lt.added[St];let ie=P.indexOf(kt);if(ie===-1){for(let Ne=0;Ne<B.length;Ne++)if(Ne>=P.length){P.push(kt),ie=Ne;break}else if(P[Ne]===null){P[Ne]=kt,ie=Ne;break}if(ie===-1)break}const ae=B[ie];ae&&ae.connect(kt)}}const st=new et,Pt=new et;function Ut(lt,St,kt){st.setFromMatrixPosition(St.matrixWorld),Pt.setFromMatrixPosition(kt.matrixWorld);const ie=st.distanceTo(Pt),ae=St.projectionMatrix.elements,Ne=kt.projectionMatrix.elements,cn=ae[14]/(ae[10]-1),de=ae[14]/(ae[10]+1),le=(ae[9]+1)/ae[5],he=(ae[9]-1)/ae[5],re=(ae[8]-1)/ae[0],Ze=(Ne[8]+1)/Ne[0],W=cn*re,Je=cn*Ze,Ce=ie/(-re+Ze),Oe=Ce*-re;if(St.matrixWorld.decompose(lt.position,lt.quaternion,lt.scale),lt.translateX(Oe),lt.translateZ(Ce),lt.matrixWorld.compose(lt.position,lt.quaternion,lt.scale),lt.matrixWorldInverse.copy(lt.matrixWorld).invert(),ae[10]===-1)lt.projectionMatrix.copy(St.projectionMatrix),lt.projectionMatrixInverse.copy(St.projectionMatrixInverse);else{const Yt=cn+Ce,I=de+Ce,T=W-Oe,$=Je+(ie-Oe),bt=le*de/I*Yt,Ct=he*de/I*Yt;lt.projectionMatrix.makePerspective(T,$,bt,Ct,Yt,I),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert()}}function V(lt,St){St===null?lt.matrixWorld.copy(lt.matrix):lt.matrixWorld.multiplyMatrices(St.matrixWorld,lt.matrix),lt.matrixWorldInverse.copy(lt.matrixWorld).invert()}this.updateCamera=function(lt){if(l===null)return;let St=lt.near,kt=lt.far;E.texture!==null&&(E.depthNear>0&&(St=E.depthNear),E.depthFar>0&&(kt=E.depthFar)),j.near=U.near=C.near=St,j.far=U.far=C.far=kt,(it!==j.near||pt!==j.far)&&(l.updateRenderState({depthNear:j.near,depthFar:j.far}),it=j.near,pt=j.far),j.layers.mask=lt.layers.mask|6,C.layers.mask=j.layers.mask&3,U.layers.mask=j.layers.mask&5;const ie=lt.parent,ae=j.cameras;V(j,ie);for(let Ne=0;Ne<ae.length;Ne++)V(ae[Ne],ie);ae.length===2?Ut(j,C,U):j.projectionMatrix.copy(C.projectionMatrix),ut(lt,j,ie)};function ut(lt,St,kt){kt===null?lt.matrix.copy(St.matrixWorld):(lt.matrix.copy(kt.matrixWorld),lt.matrix.invert(),lt.matrix.multiply(St.matrixWorld)),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.updateMatrixWorld(!0),lt.projectionMatrix.copy(St.projectionMatrix),lt.projectionMatrixInverse.copy(St.projectionMatrixInverse),lt.isPerspectiveCamera&&(lt.fov=rm*2*Math.atan(1/lt.projectionMatrix.elements[5]),lt.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(lt){m=lt,x!==null&&(x.fixedFoveation=lt),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=lt)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(j)},this.getCameraTexture=function(lt){return y[lt]};let Et=null;function Vt(lt,St){if(g=St.getViewerPose(p||h),A=St,g!==null){const kt=g.views;M!==null&&(t.setRenderTargetFramebuffer(O,M.framebuffer),t.setRenderTarget(O));let ie=!1;kt.length!==j.cameras.length&&(j.cameras.length=0,ie=!0);for(let de=0;de<kt.length;de++){const le=kt[de];let he=null;if(M!==null)he=M.getViewport(le);else{const Ze=_.getViewSubImage(x,le);he=Ze.viewport,de===0&&(t.setRenderTargetTextures(O,Ze.colorTexture,Ze.depthStencilTexture),t.setRenderTarget(O))}let re=k[de];re===void 0&&(re=new ua,re.layers.enable(de),re.viewport=new Nn,k[de]=re),re.matrix.fromArray(le.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(le.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(he.x,he.y,he.width,he.height),de===0&&(j.matrix.copy(re.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),ie===!0&&j.cameras.push(re)}const ae=l.enabledFeatures;if(ae&&ae.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){_=r.getBinding();const de=_.getDepthInformation(kt[0]);de&&de.isValid&&de.texture&&E.init(de,l.renderState)}if(ae&&ae.includes("camera-access")&&R){t.state.unbindTexture(),_=r.getBinding();for(let de=0;de<kt.length;de++){const le=kt[de].camera;if(le){let he=y[le];he||(he=new Cx,y[le]=he);const re=_.getCameraImage(le);he.sourceTexture=re}}}}for(let kt=0;kt<B.length;kt++){const ie=P[kt],ae=B[kt];ie!==null&&ae!==void 0&&ae.update(ie,St,p||h)}Et&&Et(lt,St),St.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:St}),A=null}const jt=new Dx;jt.setAnimationLoop(Vt),this.setAnimationLoop=function(lt){Et=lt},this.dispose=function(){}}}const Ls=new Fa,UA=new An;function LA(s,t){function i(E,y){E.matrixAutoUpdate===!0&&E.updateMatrix(),y.value.copy(E.matrix)}function r(E,y){y.color.getRGB(E.fogColor.value,Ex(s)),y.isFog?(E.fogNear.value=y.near,E.fogFar.value=y.far):y.isFogExp2&&(E.fogDensity.value=y.density)}function l(E,y,z,N,O){y.isMeshBasicMaterial||y.isMeshLambertMaterial?c(E,y):y.isMeshToonMaterial?(c(E,y),_(E,y)):y.isMeshPhongMaterial?(c(E,y),g(E,y)):y.isMeshStandardMaterial?(c(E,y),x(E,y),y.isMeshPhysicalMaterial&&M(E,y,O)):y.isMeshMatcapMaterial?(c(E,y),A(E,y)):y.isMeshDepthMaterial?c(E,y):y.isMeshDistanceMaterial?(c(E,y),R(E,y)):y.isMeshNormalMaterial?c(E,y):y.isLineBasicMaterial?(h(E,y),y.isLineDashedMaterial&&d(E,y)):y.isPointsMaterial?m(E,y,z,N):y.isSpriteMaterial?p(E,y):y.isShadowMaterial?(E.color.value.copy(y.color),E.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(E,y){E.opacity.value=y.opacity,y.color&&E.diffuse.value.copy(y.color),y.emissive&&E.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(E.map.value=y.map,i(y.map,E.mapTransform)),y.alphaMap&&(E.alphaMap.value=y.alphaMap,i(y.alphaMap,E.alphaMapTransform)),y.bumpMap&&(E.bumpMap.value=y.bumpMap,i(y.bumpMap,E.bumpMapTransform),E.bumpScale.value=y.bumpScale,y.side===Pi&&(E.bumpScale.value*=-1)),y.normalMap&&(E.normalMap.value=y.normalMap,i(y.normalMap,E.normalMapTransform),E.normalScale.value.copy(y.normalScale),y.side===Pi&&E.normalScale.value.negate()),y.displacementMap&&(E.displacementMap.value=y.displacementMap,i(y.displacementMap,E.displacementMapTransform),E.displacementScale.value=y.displacementScale,E.displacementBias.value=y.displacementBias),y.emissiveMap&&(E.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,E.emissiveMapTransform)),y.specularMap&&(E.specularMap.value=y.specularMap,i(y.specularMap,E.specularMapTransform)),y.alphaTest>0&&(E.alphaTest.value=y.alphaTest);const z=t.get(y),N=z.envMap,O=z.envMapRotation;N&&(E.envMap.value=N,Ls.copy(O),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),E.envMapRotation.value.setFromMatrix4(UA.makeRotationFromEuler(Ls)),E.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,E.reflectivity.value=y.reflectivity,E.ior.value=y.ior,E.refractionRatio.value=y.refractionRatio),y.lightMap&&(E.lightMap.value=y.lightMap,E.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,E.lightMapTransform)),y.aoMap&&(E.aoMap.value=y.aoMap,E.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,E.aoMapTransform))}function h(E,y){E.diffuse.value.copy(y.color),E.opacity.value=y.opacity,y.map&&(E.map.value=y.map,i(y.map,E.mapTransform))}function d(E,y){E.dashSize.value=y.dashSize,E.totalSize.value=y.dashSize+y.gapSize,E.scale.value=y.scale}function m(E,y,z,N){E.diffuse.value.copy(y.color),E.opacity.value=y.opacity,E.size.value=y.size*z,E.scale.value=N*.5,y.map&&(E.map.value=y.map,i(y.map,E.uvTransform)),y.alphaMap&&(E.alphaMap.value=y.alphaMap,i(y.alphaMap,E.alphaMapTransform)),y.alphaTest>0&&(E.alphaTest.value=y.alphaTest)}function p(E,y){E.diffuse.value.copy(y.color),E.opacity.value=y.opacity,E.rotation.value=y.rotation,y.map&&(E.map.value=y.map,i(y.map,E.mapTransform)),y.alphaMap&&(E.alphaMap.value=y.alphaMap,i(y.alphaMap,E.alphaMapTransform)),y.alphaTest>0&&(E.alphaTest.value=y.alphaTest)}function g(E,y){E.specular.value.copy(y.specular),E.shininess.value=Math.max(y.shininess,1e-4)}function _(E,y){y.gradientMap&&(E.gradientMap.value=y.gradientMap)}function x(E,y){E.metalness.value=y.metalness,y.metalnessMap&&(E.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,E.metalnessMapTransform)),E.roughness.value=y.roughness,y.roughnessMap&&(E.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,E.roughnessMapTransform)),y.envMap&&(E.envMapIntensity.value=y.envMapIntensity)}function M(E,y,z){E.ior.value=y.ior,y.sheen>0&&(E.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),E.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(E.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,E.sheenColorMapTransform)),y.sheenRoughnessMap&&(E.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,E.sheenRoughnessMapTransform))),y.clearcoat>0&&(E.clearcoat.value=y.clearcoat,E.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(E.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,E.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(E.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Pi&&E.clearcoatNormalScale.value.negate())),y.dispersion>0&&(E.dispersion.value=y.dispersion),y.iridescence>0&&(E.iridescence.value=y.iridescence,E.iridescenceIOR.value=y.iridescenceIOR,E.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(E.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,E.iridescenceMapTransform)),y.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),y.transmission>0&&(E.transmission.value=y.transmission,E.transmissionSamplerMap.value=z.texture,E.transmissionSamplerSize.value.set(z.width,z.height),y.transmissionMap&&(E.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,E.transmissionMapTransform)),E.thickness.value=y.thickness,y.thicknessMap&&(E.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=y.attenuationDistance,E.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(E.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(E.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,E.anisotropyMapTransform))),E.specularIntensity.value=y.specularIntensity,E.specularColor.value.copy(y.specularColor),y.specularColorMap&&(E.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,E.specularColorMapTransform)),y.specularIntensityMap&&(E.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,E.specularIntensityMapTransform))}function A(E,y){y.matcap&&(E.matcap.value=y.matcap)}function R(E,y){const z=t.get(y).light;E.referencePosition.value.setFromMatrixPosition(z.matrixWorld),E.nearDistance.value=z.shadow.camera.near,E.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function NA(s,t,i,r){let l={},c={},h=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(z,N){const O=N.program;r.uniformBlockBinding(z,O)}function p(z,N){let O=l[z.id];O===void 0&&(A(z),O=g(z),l[z.id]=O,z.addEventListener("dispose",E));const B=N.program;r.updateUBOMapping(z,B);const P=t.render.frame;c[z.id]!==P&&(x(z),c[z.id]=P)}function g(z){const N=_();z.__bindingPointIndex=N;const O=s.createBuffer(),B=z.__size,P=z.usage;return s.bindBuffer(s.UNIFORM_BUFFER,O),s.bufferData(s.UNIFORM_BUFFER,B,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,O),O}function _(){for(let z=0;z<d;z++)if(h.indexOf(z)===-1)return h.push(z),z;return an("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(z){const N=l[z.id],O=z.uniforms,B=z.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let P=0,F=O.length;P<F;P++){const Z=Array.isArray(O[P])?O[P]:[O[P]];for(let C=0,U=Z.length;C<U;C++){const k=Z[C];if(M(k,P,C,B)===!0){const j=k.__offset,it=Array.isArray(k.value)?k.value:[k.value];let pt=0;for(let xt=0;xt<it.length;xt++){const H=it[xt],Y=R(H);typeof H=="number"||typeof H=="boolean"?(k.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,j+pt,k.__data)):H.isMatrix3?(k.__data[0]=H.elements[0],k.__data[1]=H.elements[1],k.__data[2]=H.elements[2],k.__data[3]=0,k.__data[4]=H.elements[3],k.__data[5]=H.elements[4],k.__data[6]=H.elements[5],k.__data[7]=0,k.__data[8]=H.elements[6],k.__data[9]=H.elements[7],k.__data[10]=H.elements[8],k.__data[11]=0):(H.toArray(k.__data,pt),pt+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,j,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(z,N,O,B){const P=z.value,F=N+"_"+O;if(B[F]===void 0)return typeof P=="number"||typeof P=="boolean"?B[F]=P:B[F]=P.clone(),!0;{const Z=B[F];if(typeof P=="number"||typeof P=="boolean"){if(Z!==P)return B[F]=P,!0}else if(Z.equals(P)===!1)return Z.copy(P),!0}return!1}function A(z){const N=z.uniforms;let O=0;const B=16;for(let F=0,Z=N.length;F<Z;F++){const C=Array.isArray(N[F])?N[F]:[N[F]];for(let U=0,k=C.length;U<k;U++){const j=C[U],it=Array.isArray(j.value)?j.value:[j.value];for(let pt=0,xt=it.length;pt<xt;pt++){const H=it[pt],Y=R(H),st=O%B,Pt=st%Y.boundary,Ut=st+Pt;O+=Pt,Ut!==0&&B-Ut<Y.storage&&(O+=B-Ut),j.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=O,O+=Y.storage}}}const P=O%B;return P>0&&(O+=B-P),z.__size=O,z.__cache={},this}function R(z){const N={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(N.boundary=4,N.storage=4):z.isVector2?(N.boundary=8,N.storage=8):z.isVector3||z.isColor?(N.boundary=16,N.storage=12):z.isVector4?(N.boundary=16,N.storage=16):z.isMatrix3?(N.boundary=48,N.storage=48):z.isMatrix4?(N.boundary=64,N.storage=64):z.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ae("WebGLRenderer: Unsupported uniform value type.",z),N}function E(z){const N=z.target;N.removeEventListener("dispose",E);const O=h.indexOf(N.__bindingPointIndex);h.splice(O,1),s.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function y(){for(const z in l)s.deleteBuffer(l[z]);h=[],l={},c={}}return{bind:m,update:p,dispose:y}}const OA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wa=null;function PA(){return wa===null&&(wa=new SM(OA,16,16,Xo,dr),wa.name="DFG_LUT",wa.minFilter=di,wa.magFilter=di,wa.wrapS=ur,wa.wrapT=ur,wa.generateMipmaps=!1,wa.needsUpdate=!0),wa}class FA{constructor(t={}){const{canvas:i=YS(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1,outputBufferType:M=Zi}=t;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=h;const R=M,E=new Set([vm,_m,gm]),y=new Set([Zi,Pa,Jl,tc,pm,mm]),z=new Uint32Array(4),N=new Int32Array(4);let O=null,B=null;const P=[],F=[];let Z=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Na,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let U=!1;this._outputColorSpace=Yi;let k=0,j=0,it=null,pt=-1,xt=null;const H=new Nn,Y=new Nn;let st=null;const Pt=new He(0);let Ut=0,V=i.width,ut=i.height,Et=1,Vt=null,jt=null;const lt=new Nn(0,0,V,ut),St=new Nn(0,0,V,ut);let kt=!1;const ie=new Em;let ae=!1,Ne=!1;const cn=new An,de=new et,le=new Nn,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function Ze(){return it===null?Et:1}let W=r;function Je(w,J){return i.getContext(w,J)}try{const w={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${fm}`),i.addEventListener("webglcontextlost",_e,!1),i.addEventListener("webglcontextrestored",rn,!1),i.addEventListener("webglcontextcreationerror",We,!1),W===null){const J="webgl2";if(W=Je(J,w),W===null)throw Je(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw an("WebGLRenderer: "+w.message),w}let Ce,Oe,Yt,I,T,$,bt,Ct,_t,ce,Gt,ee,ge,Ft,Ht,Jt,qt,Wt,De,Q,Zt,Nt,Kt,yt;function wt(){Ce=new PT(W),Ce.init(),Nt=new AA(W,Ce),Oe=new AT(W,Ce,t,Nt),Yt=new EA(W,Ce),Oe.reversedDepthBuffer&&x&&Yt.buffers.depth.setReversed(!0),I=new BT(W),T=new cA,$=new TA(W,Ce,Yt,T,Oe,Nt,I),bt=new CT(C),Ct=new OT(C),_t=new GM(W),Kt=new ET(W,_t),ce=new FT(W,_t,I,Kt),Gt=new HT(W,ce,_t,I),De=new zT(W,Oe,$),Jt=new RT(T),ee=new lA(C,bt,Ct,Ce,Oe,Kt,Jt),ge=new LA(C,T),Ft=new fA,Ht=new _A(Ce),Wt=new bT(C,bt,Ct,Yt,Gt,A,m),qt=new MA(C,Gt,Oe),yt=new NA(W,I,Oe,Yt),Q=new TT(W,Ce,I),Zt=new IT(W,Ce,I),I.programs=ee.programs,C.capabilities=Oe,C.extensions=Ce,C.properties=T,C.renderLists=Ft,C.shadowMap=qt,C.state=Yt,C.info=I}wt(),R!==Zi&&(Z=new GT(R,i.width,i.height,l,c));const zt=new DA(C,W);this.xr=zt,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const w=Ce.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ce.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Et},this.setPixelRatio=function(w){w!==void 0&&(Et=w,this.setSize(V,ut,!1))},this.getSize=function(w){return w.set(V,ut)},this.setSize=function(w,J,mt=!0){if(zt.isPresenting){Ae("WebGLRenderer: Can't change size while VR device is presenting.");return}V=w,ut=J,i.width=Math.floor(w*Et),i.height=Math.floor(J*Et),mt===!0&&(i.style.width=w+"px",i.style.height=J+"px"),Z!==null&&Z.setSize(i.width,i.height),this.setViewport(0,0,w,J)},this.getDrawingBufferSize=function(w){return w.set(V*Et,ut*Et).floor()},this.setDrawingBufferSize=function(w,J,mt){V=w,ut=J,Et=mt,i.width=Math.floor(w*mt),i.height=Math.floor(J*mt),this.setViewport(0,0,w,J)},this.setEffects=function(w){if(R===Zi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let J=0;J<w.length;J++)if(w[J].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Z.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(H)},this.getViewport=function(w){return w.copy(lt)},this.setViewport=function(w,J,mt,ht){w.isVector4?lt.set(w.x,w.y,w.z,w.w):lt.set(w,J,mt,ht),Yt.viewport(H.copy(lt).multiplyScalar(Et).round())},this.getScissor=function(w){return w.copy(St)},this.setScissor=function(w,J,mt,ht){w.isVector4?St.set(w.x,w.y,w.z,w.w):St.set(w,J,mt,ht),Yt.scissor(Y.copy(St).multiplyScalar(Et).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(w){Yt.setScissorTest(kt=w)},this.setOpaqueSort=function(w){Vt=w},this.setTransparentSort=function(w){jt=w},this.getClearColor=function(w){return w.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor(...arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha(...arguments)},this.clear=function(w=!0,J=!0,mt=!0){let ht=0;if(w){let at=!1;if(it!==null){const Qt=it.texture.format;at=E.has(Qt)}if(at){const Qt=it.texture.type,ne=y.has(Qt),$t=Wt.getClearColor(),se=Wt.getClearAlpha(),fe=$t.r,ve=$t.g,oe=$t.b;ne?(z[0]=fe,z[1]=ve,z[2]=oe,z[3]=se,W.clearBufferuiv(W.COLOR,0,z)):(N[0]=fe,N[1]=ve,N[2]=oe,N[3]=se,W.clearBufferiv(W.COLOR,0,N))}else ht|=W.COLOR_BUFFER_BIT}J&&(ht|=W.DEPTH_BUFFER_BIT),mt&&(ht|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(ht)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",_e,!1),i.removeEventListener("webglcontextrestored",rn,!1),i.removeEventListener("webglcontextcreationerror",We,!1),Wt.dispose(),Ft.dispose(),Ht.dispose(),T.dispose(),bt.dispose(),Ct.dispose(),Gt.dispose(),Kt.dispose(),yt.dispose(),ee.dispose(),zt.dispose(),zt.removeEventListener("sessionstart",za),zt.removeEventListener("sessionend",es),Ki.stop()};function _e(w){w.preventDefault(),Q_("WebGLRenderer: Context Lost."),U=!0}function rn(){Q_("WebGLRenderer: Context Restored."),U=!1;const w=I.autoReset,J=qt.enabled,mt=qt.autoUpdate,ht=qt.needsUpdate,at=qt.type;wt(),I.autoReset=w,qt.enabled=J,qt.autoUpdate=mt,qt.needsUpdate=ht,qt.type=at}function We(w){an("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Bn(w){const J=w.target;J.removeEventListener("dispose",Bn),pi(J)}function pi(w){Jr(w),T.remove(w)}function Jr(w){const J=T.get(w).programs;J!==void 0&&(J.forEach(function(mt){ee.releaseProgram(mt)}),w.isShaderMaterial&&ee.releaseShaderCache(w))}this.renderBufferDirect=function(w,J,mt,ht,at,Qt){J===null&&(J=he);const ne=at.isMesh&&at.matrixWorld.determinant()<0,$t=$i(w,J,mt,ht,at);Yt.setMaterial(ht,ne);let se=mt.index,fe=1;if(ht.wireframe===!0){if(se=ce.getWireframeAttribute(mt),se===void 0)return;fe=2}const ve=mt.drawRange,oe=mt.attributes.position;let ye=ve.start*fe,Ke=(ve.start+ve.count)*fe;Qt!==null&&(ye=Math.max(ye,Qt.start*fe),Ke=Math.min(Ke,(Qt.start+Qt.count)*fe)),se!==null?(ye=Math.max(ye,0),Ke=Math.min(Ke,se.count)):oe!=null&&(ye=Math.max(ye,0),Ke=Math.min(Ke,oe.count));const sn=Ke-ye;if(sn<0||sn===1/0)return;Kt.setup(at,ht,$t,mt,se);let on,tn=Q;if(se!==null&&(on=_t.get(se),tn=Zt,tn.setIndex(on)),at.isMesh)ht.wireframe===!0?(Yt.setLineWidth(ht.wireframeLinewidth*Ze()),tn.setMode(W.LINES)):tn.setMode(W.TRIANGLES);else if(at.isLine){let me=ht.linewidth;me===void 0&&(me=1),Yt.setLineWidth(me*Ze()),at.isLineSegments?tn.setMode(W.LINES):at.isLineLoop?tn.setMode(W.LINE_LOOP):tn.setMode(W.LINE_STRIP)}else at.isPoints?tn.setMode(W.POINTS):at.isSprite&&tn.setMode(W.TRIANGLES);if(at.isBatchedMesh)if(at._multiDrawInstances!==null)ec("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),tn.renderMultiDrawInstances(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount,at._multiDrawInstances);else if(Ce.get("WEBGL_multi_draw"))tn.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else{const me=at._multiDrawStarts,Ue=at._multiDrawCounts,Re=at._multiDrawCount,zn=se?_t.get(se).bytesPerElement:1,ta=T.get(ht).currentProgram.getUniforms();for(let wn=0;wn<Re;wn++)ta.setValue(W,"_gl_DrawID",wn),tn.render(me[wn]/zn,Ue[wn])}else if(at.isInstancedMesh)tn.renderInstances(ye,sn,at.count);else if(mt.isInstancedBufferGeometry){const me=mt._maxInstanceCount!==void 0?mt._maxInstanceCount:1/0,Ue=Math.min(mt.instanceCount,me);tn.renderInstances(ye,sn,Ue)}else tn.render(ye,sn)};function ts(w,J,mt){w.transparent===!0&&w.side===qi&&w.forceSinglePass===!1?(w.side=Pi,w.needsUpdate=!0,Qi(w,J,mt),w.side=$r,w.needsUpdate=!0,Qi(w,J,mt),w.side=qi):Qi(w,J,mt)}this.compile=function(w,J,mt=null){mt===null&&(mt=w),B=Ht.get(mt),B.init(J),F.push(B),mt.traverseVisible(function(at){at.isLight&&at.layers.test(J.layers)&&(B.pushLight(at),at.castShadow&&B.pushShadow(at))}),w!==mt&&w.traverseVisible(function(at){at.isLight&&at.layers.test(J.layers)&&(B.pushLight(at),at.castShadow&&B.pushShadow(at))}),B.setupLights();const ht=new Set;return w.traverse(function(at){if(!(at.isMesh||at.isPoints||at.isLine||at.isSprite))return;const Qt=at.material;if(Qt)if(Array.isArray(Qt))for(let ne=0;ne<Qt.length;ne++){const $t=Qt[ne];ts($t,mt,at),ht.add($t)}else ts(Qt,mt,at),ht.add(Qt)}),B=F.pop(),ht},this.compileAsync=function(w,J,mt=null){const ht=this.compile(w,J,mt);return new Promise(at=>{function Qt(){if(ht.forEach(function(ne){T.get(ne).currentProgram.isReady()&&ht.delete(ne)}),ht.size===0){at(w);return}setTimeout(Qt,10)}Ce.get("KHR_parallel_shader_compile")!==null?Qt():setTimeout(Qt,10)})};let Ba=null;function mr(w){Ba&&Ba(w)}function za(){Ki.stop()}function es(){Ki.start()}const Ki=new Dx;Ki.setAnimationLoop(mr),typeof self<"u"&&Ki.setContext(self),this.setAnimationLoop=function(w){Ba=w,zt.setAnimationLoop(w),w===null?Ki.stop():Ki.start()},zt.addEventListener("sessionstart",za),zt.addEventListener("sessionend",es),this.render=function(w,J){if(J!==void 0&&J.isCamera!==!0){an("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;const mt=zt.enabled===!0&&zt.isPresenting===!0,ht=Z!==null&&(it===null||mt)&&Z.begin(C,it);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),zt.enabled===!0&&zt.isPresenting===!0&&(Z===null||Z.isCompositing()===!1)&&(zt.cameraAutoUpdate===!0&&zt.updateCamera(J),J=zt.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,J,it),B=Ht.get(w,F.length),B.init(J),F.push(B),cn.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),ie.setFromProjectionMatrix(cn,La,J.reversedDepth),Ne=this.localClippingEnabled,ae=Jt.init(this.clippingPlanes,Ne),O=Ft.get(w,P.length),O.init(),P.push(O),zt.enabled===!0&&zt.isPresenting===!0){const ne=C.xr.getDepthSensingMesh();ne!==null&&$n(ne,J,-1/0,C.sortObjects)}$n(w,J,0,C.sortObjects),O.finish(),C.sortObjects===!0&&O.sort(Vt,jt),re=zt.enabled===!1||zt.isPresenting===!1||zt.hasDepthSensing()===!1,re&&Wt.addToRenderList(O,w),this.info.render.frame++,ae===!0&&Jt.beginShadows();const at=B.state.shadowsArray;if(qt.render(at,w,J),ae===!0&&Jt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ht&&Z.hasRenderPass())===!1){const ne=O.opaque,$t=O.transmissive;if(B.setupLights(),J.isArrayCamera){const se=J.cameras;if($t.length>0)for(let fe=0,ve=se.length;fe<ve;fe++){const oe=se[fe];Rn(ne,$t,w,oe)}re&&Wt.render(w);for(let fe=0,ve=se.length;fe<ve;fe++){const oe=se[fe];bn(O,w,oe,oe.viewport)}}else $t.length>0&&Rn(ne,$t,w,J),re&&Wt.render(w),bn(O,w,J)}it!==null&&j===0&&($.updateMultisampleRenderTarget(it),$.updateRenderTargetMipmap(it)),ht&&Z.end(C),w.isScene===!0&&w.onAfterRender(C,w,J),Kt.resetDefaultState(),pt=-1,xt=null,F.pop(),F.length>0?(B=F[F.length-1],ae===!0&&Jt.setGlobalState(C.clippingPlanes,B.state.camera)):B=null,P.pop(),P.length>0?O=P[P.length-1]:O=null};function $n(w,J,mt,ht){if(w.visible===!1)return;if(w.layers.test(J.layers)){if(w.isGroup)mt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(J);else if(w.isLight)B.pushLight(w),w.castShadow&&B.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ie.intersectsSprite(w)){ht&&le.setFromMatrixPosition(w.matrixWorld).applyMatrix4(cn);const ne=Gt.update(w),$t=w.material;$t.visible&&O.push(w,ne,$t,mt,le.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ie.intersectsObject(w))){const ne=Gt.update(w),$t=w.material;if(ht&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),le.copy(w.boundingSphere.center)):(ne.boundingSphere===null&&ne.computeBoundingSphere(),le.copy(ne.boundingSphere.center)),le.applyMatrix4(w.matrixWorld).applyMatrix4(cn)),Array.isArray($t)){const se=ne.groups;for(let fe=0,ve=se.length;fe<ve;fe++){const oe=se[fe],ye=$t[oe.materialIndex];ye&&ye.visible&&O.push(w,ne,ye,mt,le.z,oe)}}else $t.visible&&O.push(w,ne,$t,mt,le.z,null)}}const Qt=w.children;for(let ne=0,$t=Qt.length;ne<$t;ne++)$n(Qt[ne],J,mt,ht)}function bn(w,J,mt,ht){const{opaque:at,transmissive:Qt,transparent:ne}=w;B.setupLightsView(mt),ae===!0&&Jt.setGlobalState(C.clippingPlanes,mt),ht&&Yt.viewport(H.copy(ht)),at.length>0&&Fi(at,J,mt),Qt.length>0&&Fi(Qt,J,mt),ne.length>0&&Fi(ne,J,mt),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function Rn(w,J,mt,ht){if((mt.isScene===!0?mt.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[ht.id]===void 0){const ye=Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[ht.id]=new Oa(1,1,{generateMipmaps:!0,type:ye?dr:Zi,minFilter:Ps,samples:Oe.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace})}const Qt=B.state.transmissionRenderTarget[ht.id],ne=ht.viewport||H;Qt.setSize(ne.z*C.transmissionResolutionScale,ne.w*C.transmissionResolutionScale);const $t=C.getRenderTarget(),se=C.getActiveCubeFace(),fe=C.getActiveMipmapLevel();C.setRenderTarget(Qt),C.getClearColor(Pt),Ut=C.getClearAlpha(),Ut<1&&C.setClearColor(16777215,.5),C.clear(),re&&Wt.render(mt);const ve=C.toneMapping;C.toneMapping=Na;const oe=ht.viewport;if(ht.viewport!==void 0&&(ht.viewport=void 0),B.setupLightsView(ht),ae===!0&&Jt.setGlobalState(C.clippingPlanes,ht),Fi(w,mt,ht),$.updateMultisampleRenderTarget(Qt),$.updateRenderTargetMipmap(Qt),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let Ke=0,sn=J.length;Ke<sn;Ke++){const on=J[Ke],{object:tn,geometry:me,material:Ue,group:Re}=on;if(Ue.side===qi&&tn.layers.test(ht.layers)){const zn=Ue.side;Ue.side=Pi,Ue.needsUpdate=!0,gr(tn,mt,ht,me,Ue,Re),Ue.side=zn,Ue.needsUpdate=!0,ye=!0}}ye===!0&&($.updateMultisampleRenderTarget(Qt),$.updateRenderTargetMipmap(Qt))}C.setRenderTarget($t,se,fe),C.setClearColor(Pt,Ut),oe!==void 0&&(ht.viewport=oe),C.toneMapping=ve}function Fi(w,J,mt){const ht=J.isScene===!0?J.overrideMaterial:null;for(let at=0,Qt=w.length;at<Qt;at++){const ne=w[at],{object:$t,geometry:se,group:fe}=ne;let ve=ne.material;ve.allowOverride===!0&&ht!==null&&(ve=ht),$t.layers.test(mt.layers)&&gr($t,J,mt,se,ve,fe)}}function gr(w,J,mt,ht,at,Qt){w.onBeforeRender(C,J,mt,ht,at,Qt),w.modelViewMatrix.multiplyMatrices(mt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),at.onBeforeRender(C,J,mt,ht,w,Qt),at.transparent===!0&&at.side===qi&&at.forceSinglePass===!1?(at.side=Pi,at.needsUpdate=!0,C.renderBufferDirect(mt,J,ht,at,w,Qt),at.side=$r,at.needsUpdate=!0,C.renderBufferDirect(mt,J,ht,at,w,Qt),at.side=qi):C.renderBufferDirect(mt,J,ht,at,w,Qt),w.onAfterRender(C,J,mt,ht,at,Qt)}function Qi(w,J,mt){J.isScene!==!0&&(J=he);const ht=T.get(w),at=B.state.lights,Qt=B.state.shadowsArray,ne=at.state.version,$t=ee.getParameters(w,at.state,Qt,J,mt),se=ee.getProgramCacheKey($t);let fe=ht.programs;ht.environment=w.isMeshStandardMaterial?J.environment:null,ht.fog=J.fog,ht.envMap=(w.isMeshStandardMaterial?Ct:bt).get(w.envMap||ht.environment),ht.envMapRotation=ht.environment!==null&&w.envMap===null?J.environmentRotation:w.envMapRotation,fe===void 0&&(w.addEventListener("dispose",Bn),fe=new Map,ht.programs=fe);let ve=fe.get(se);if(ve!==void 0){if(ht.currentProgram===ve&&ht.lightsStateVersion===ne)return ns(w,$t),ve}else $t.uniforms=ee.getUniforms(w),w.onBeforeCompile($t,C),ve=ee.acquireProgram($t,se),fe.set(se,ve),ht.uniforms=$t.uniforms;const oe=ht.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(oe.clippingPlanes=Jt.uniform),ns(w,$t),ht.needsLights=Si(w),ht.lightsStateVersion=ne,ht.needsLights&&(oe.ambientLightColor.value=at.state.ambient,oe.lightProbe.value=at.state.probe,oe.directionalLights.value=at.state.directional,oe.directionalLightShadows.value=at.state.directionalShadow,oe.spotLights.value=at.state.spot,oe.spotLightShadows.value=at.state.spotShadow,oe.rectAreaLights.value=at.state.rectArea,oe.ltc_1.value=at.state.rectAreaLTC1,oe.ltc_2.value=at.state.rectAreaLTC2,oe.pointLights.value=at.state.point,oe.pointLightShadows.value=at.state.pointShadow,oe.hemisphereLights.value=at.state.hemi,oe.directionalShadowMap.value=at.state.directionalShadowMap,oe.directionalShadowMatrix.value=at.state.directionalShadowMatrix,oe.spotShadowMap.value=at.state.spotShadowMap,oe.spotLightMatrix.value=at.state.spotLightMatrix,oe.spotLightMap.value=at.state.spotLightMap,oe.pointShadowMap.value=at.state.pointShadowMap,oe.pointShadowMatrix.value=at.state.pointShadowMatrix),ht.currentProgram=ve,ht.uniformsList=null,ve}function Vs(w){if(w.uniformsList===null){const J=w.currentProgram.getUniforms();w.uniformsList=$u.seqWithValue(J.seq,w.uniforms)}return w.uniformsList}function ns(w,J){const mt=T.get(w);mt.outputColorSpace=J.outputColorSpace,mt.batching=J.batching,mt.batchingColor=J.batchingColor,mt.instancing=J.instancing,mt.instancingColor=J.instancingColor,mt.instancingMorph=J.instancingMorph,mt.skinning=J.skinning,mt.morphTargets=J.morphTargets,mt.morphNormals=J.morphNormals,mt.morphColors=J.morphColors,mt.morphTargetsCount=J.morphTargetsCount,mt.numClippingPlanes=J.numClippingPlanes,mt.numIntersection=J.numClipIntersection,mt.vertexAlphas=J.vertexAlphas,mt.vertexTangents=J.vertexTangents,mt.toneMapping=J.toneMapping}function $i(w,J,mt,ht,at){J.isScene!==!0&&(J=he),$.resetTextureUnits();const Qt=J.fog,ne=ht.isMeshStandardMaterial?J.environment:null,$t=it===null?C.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Wo,se=(ht.isMeshStandardMaterial?Ct:bt).get(ht.envMap||ne),fe=ht.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,ve=!!mt.attributes.tangent&&(!!ht.normalMap||ht.anisotropy>0),oe=!!mt.morphAttributes.position,ye=!!mt.morphAttributes.normal,Ke=!!mt.morphAttributes.color;let sn=Na;ht.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(sn=C.toneMapping);const on=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,tn=on!==void 0?on.length:0,me=T.get(ht),Ue=B.state.lights;if(ae===!0&&(Ne===!0||w!==xt)){const jn=w===xt&&ht.id===pt;Jt.setState(ht,w,jn)}let Re=!1;ht.version===me.__version?(me.needsLights&&me.lightsStateVersion!==Ue.state.version||me.outputColorSpace!==$t||at.isBatchedMesh&&me.batching===!1||!at.isBatchedMesh&&me.batching===!0||at.isBatchedMesh&&me.batchingColor===!0&&at.colorTexture===null||at.isBatchedMesh&&me.batchingColor===!1&&at.colorTexture!==null||at.isInstancedMesh&&me.instancing===!1||!at.isInstancedMesh&&me.instancing===!0||at.isSkinnedMesh&&me.skinning===!1||!at.isSkinnedMesh&&me.skinning===!0||at.isInstancedMesh&&me.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&me.instancingColor===!1&&at.instanceColor!==null||at.isInstancedMesh&&me.instancingMorph===!0&&at.morphTexture===null||at.isInstancedMesh&&me.instancingMorph===!1&&at.morphTexture!==null||me.envMap!==se||ht.fog===!0&&me.fog!==Qt||me.numClippingPlanes!==void 0&&(me.numClippingPlanes!==Jt.numPlanes||me.numIntersection!==Jt.numIntersection)||me.vertexAlphas!==fe||me.vertexTangents!==ve||me.morphTargets!==oe||me.morphNormals!==ye||me.morphColors!==Ke||me.toneMapping!==sn||me.morphTargetsCount!==tn)&&(Re=!0):(Re=!0,me.__version=ht.version);let zn=me.currentProgram;Re===!0&&(zn=Qi(ht,J,at));let ta=!1,wn=!1,Mi=!1;const Qe=zn.getUniforms(),Hn=me.uniforms;if(Yt.useProgram(zn.program)&&(ta=!0,wn=!0,Mi=!0),ht.id!==pt&&(pt=ht.id,wn=!0),ta||xt!==w){Yt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Qe.setValue(W,"projectionMatrix",w.projectionMatrix),Qe.setValue(W,"viewMatrix",w.matrixWorldInverse);const On=Qe.map.cameraPosition;On!==void 0&&On.setValue(W,de.setFromMatrixPosition(w.matrixWorld)),Oe.logarithmicDepthBuffer&&Qe.setValue(W,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ht.isMeshPhongMaterial||ht.isMeshToonMaterial||ht.isMeshLambertMaterial||ht.isMeshBasicMaterial||ht.isMeshStandardMaterial||ht.isShaderMaterial)&&Qe.setValue(W,"isOrthographic",w.isOrthographicCamera===!0),xt!==w&&(xt=w,wn=!0,Mi=!0)}if(me.needsLights&&(Ue.state.directionalShadowMap.length>0&&Qe.setValue(W,"directionalShadowMap",Ue.state.directionalShadowMap,$),Ue.state.spotShadowMap.length>0&&Qe.setValue(W,"spotShadowMap",Ue.state.spotShadowMap,$),Ue.state.pointShadowMap.length>0&&Qe.setValue(W,"pointShadowMap",Ue.state.pointShadowMap,$)),at.isSkinnedMesh){Qe.setOptional(W,at,"bindMatrix"),Qe.setOptional(W,at,"bindMatrixInverse");const jn=at.skeleton;jn&&(jn.boneTexture===null&&jn.computeBoneTexture(),Qe.setValue(W,"boneTexture",jn.boneTexture,$))}at.isBatchedMesh&&(Qe.setOptional(W,at,"batchingTexture"),Qe.setValue(W,"batchingTexture",at._matricesTexture,$),Qe.setOptional(W,at,"batchingIdTexture"),Qe.setValue(W,"batchingIdTexture",at._indirectTexture,$),Qe.setOptional(W,at,"batchingColorTexture"),at._colorsTexture!==null&&Qe.setValue(W,"batchingColorTexture",at._colorsTexture,$));const Dn=mt.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&De.update(at,mt,zn),(wn||me.receiveShadow!==at.receiveShadow)&&(me.receiveShadow=at.receiveShadow,Qe.setValue(W,"receiveShadow",at.receiveShadow)),ht.isMeshGouraudMaterial&&ht.envMap!==null&&(Hn.envMap.value=se,Hn.flipEnvMap.value=se.isCubeTexture&&se.isRenderTargetTexture===!1?-1:1),ht.isMeshStandardMaterial&&ht.envMap===null&&J.environment!==null&&(Hn.envMapIntensity.value=J.environmentIntensity),Hn.dfgLUT!==void 0&&(Hn.dfgLUT.value=PA()),wn&&(Qe.setValue(W,"toneMappingExposure",C.toneMappingExposure),me.needsLights&&is(Hn,Mi),Qt&&ht.fog===!0&&ge.refreshFogUniforms(Hn,Qt),ge.refreshMaterialUniforms(Hn,ht,Et,ut,B.state.transmissionRenderTarget[w.id]),$u.upload(W,Vs(me),Hn,$)),ht.isShaderMaterial&&ht.uniformsNeedUpdate===!0&&($u.upload(W,Vs(me),Hn,$),ht.uniformsNeedUpdate=!1),ht.isSpriteMaterial&&Qe.setValue(W,"center",at.center),Qe.setValue(W,"modelViewMatrix",at.modelViewMatrix),Qe.setValue(W,"normalMatrix",at.normalMatrix),Qe.setValue(W,"modelMatrix",at.matrixWorld),ht.isShaderMaterial||ht.isRawShaderMaterial){const jn=ht.uniformsGroups;for(let On=0,_r=jn.length;On<_r;On++){const bi=jn[On];yt.update(bi,zn),yt.bind(bi,zn)}}return zn}function is(w,J){w.ambientLightColor.needsUpdate=J,w.lightProbe.needsUpdate=J,w.directionalLights.needsUpdate=J,w.directionalLightShadows.needsUpdate=J,w.pointLights.needsUpdate=J,w.pointLightShadows.needsUpdate=J,w.spotLights.needsUpdate=J,w.spotLightShadows.needsUpdate=J,w.rectAreaLights.needsUpdate=J,w.hemisphereLights.needsUpdate=J}function Si(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(w,J,mt){const ht=T.get(w);ht.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ht.__autoAllocateDepthBuffer===!1&&(ht.__useRenderToTexture=!1),T.get(w.texture).__webglTexture=J,T.get(w.depthTexture).__webglTexture=ht.__autoAllocateDepthBuffer?void 0:mt,ht.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,J){const mt=T.get(w);mt.__webglFramebuffer=J,mt.__useDefaultFramebuffer=J===void 0};const Sa=W.createFramebuffer();this.setRenderTarget=function(w,J=0,mt=0){it=w,k=J,j=mt;let ht=null,at=!1,Qt=!1;if(w){const $t=T.get(w);if($t.__useDefaultFramebuffer!==void 0){Yt.bindFramebuffer(W.FRAMEBUFFER,$t.__webglFramebuffer),H.copy(w.viewport),Y.copy(w.scissor),st=w.scissorTest,Yt.viewport(H),Yt.scissor(Y),Yt.setScissorTest(st),pt=-1;return}else if($t.__webglFramebuffer===void 0)$.setupRenderTarget(w);else if($t.__hasExternalTextures)$.rebindTextures(w,T.get(w.texture).__webglTexture,T.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ve=w.depthTexture;if($t.__boundDepthTexture!==ve){if(ve!==null&&T.has(ve)&&(w.width!==ve.image.width||w.height!==ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(w)}}const se=w.texture;(se.isData3DTexture||se.isDataArrayTexture||se.isCompressedArrayTexture)&&(Qt=!0);const fe=T.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(fe[J])?ht=fe[J][mt]:ht=fe[J],at=!0):w.samples>0&&$.useMultisampledRTT(w)===!1?ht=T.get(w).__webglMultisampledFramebuffer:Array.isArray(fe)?ht=fe[mt]:ht=fe,H.copy(w.viewport),Y.copy(w.scissor),st=w.scissorTest}else H.copy(lt).multiplyScalar(Et).floor(),Y.copy(St).multiplyScalar(Et).floor(),st=kt;if(mt!==0&&(ht=Sa),Yt.bindFramebuffer(W.FRAMEBUFFER,ht)&&Yt.drawBuffers(w,ht),Yt.viewport(H),Yt.scissor(Y),Yt.setScissorTest(st),at){const $t=T.get(w.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+J,$t.__webglTexture,mt)}else if(Qt){const $t=J;for(let se=0;se<w.textures.length;se++){const fe=T.get(w.textures[se]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+se,fe.__webglTexture,mt,$t)}}else if(w!==null&&mt!==0){const $t=T.get(w.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,$t.__webglTexture,mt)}pt=-1},this.readRenderTargetPixels=function(w,J,mt,ht,at,Qt,ne,$t=0){if(!(w&&w.isWebGLRenderTarget)){an("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let se=T.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ne!==void 0&&(se=se[ne]),se){Yt.bindFramebuffer(W.FRAMEBUFFER,se);try{const fe=w.textures[$t],ve=fe.format,oe=fe.type;if(!Oe.textureFormatReadable(ve)){an("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(oe)){an("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=w.width-ht&&mt>=0&&mt<=w.height-at&&(w.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+$t),W.readPixels(J,mt,ht,at,Nt.convert(ve),Nt.convert(oe),Qt))}finally{const fe=it!==null?T.get(it).__webglFramebuffer:null;Yt.bindFramebuffer(W.FRAMEBUFFER,fe)}}},this.readRenderTargetPixelsAsync=async function(w,J,mt,ht,at,Qt,ne,$t=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let se=T.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ne!==void 0&&(se=se[ne]),se)if(J>=0&&J<=w.width-ht&&mt>=0&&mt<=w.height-at){Yt.bindFramebuffer(W.FRAMEBUFFER,se);const fe=w.textures[$t],ve=fe.format,oe=fe.type;if(!Oe.textureFormatReadable(ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ye=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,ye),W.bufferData(W.PIXEL_PACK_BUFFER,Qt.byteLength,W.STREAM_READ),w.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+$t),W.readPixels(J,mt,ht,at,Nt.convert(ve),Nt.convert(oe),0);const Ke=it!==null?T.get(it).__webglFramebuffer:null;Yt.bindFramebuffer(W.FRAMEBUFFER,Ke);const sn=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await qS(W,sn,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,ye),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Qt),W.deleteBuffer(ye),W.deleteSync(sn),Qt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,J=null,mt=0){const ht=Math.pow(2,-mt),at=Math.floor(w.image.width*ht),Qt=Math.floor(w.image.height*ht),ne=J!==null?J.x:0,$t=J!==null?J.y:0;$.setTexture2D(w,0),W.copyTexSubImage2D(W.TEXTURE_2D,mt,0,0,ne,$t,at,Qt),Yt.unbindTexture()};const Ji=W.createFramebuffer(),mi=W.createFramebuffer();this.copyTextureToTexture=function(w,J,mt=null,ht=null,at=0,Qt=null){Qt===null&&(at!==0?(ec("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Qt=at,at=0):Qt=0);let ne,$t,se,fe,ve,oe,ye,Ke,sn;const on=w.isCompressedTexture?w.mipmaps[Qt]:w.image;if(mt!==null)ne=mt.max.x-mt.min.x,$t=mt.max.y-mt.min.y,se=mt.isBox3?mt.max.z-mt.min.z:1,fe=mt.min.x,ve=mt.min.y,oe=mt.isBox3?mt.min.z:0;else{const Dn=Math.pow(2,-at);ne=Math.floor(on.width*Dn),$t=Math.floor(on.height*Dn),w.isDataArrayTexture?se=on.depth:w.isData3DTexture?se=Math.floor(on.depth*Dn):se=1,fe=0,ve=0,oe=0}ht!==null?(ye=ht.x,Ke=ht.y,sn=ht.z):(ye=0,Ke=0,sn=0);const tn=Nt.convert(J.format),me=Nt.convert(J.type);let Ue;J.isData3DTexture?($.setTexture3D(J,0),Ue=W.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?($.setTexture2DArray(J,0),Ue=W.TEXTURE_2D_ARRAY):($.setTexture2D(J,0),Ue=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,J.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,J.unpackAlignment);const Re=W.getParameter(W.UNPACK_ROW_LENGTH),zn=W.getParameter(W.UNPACK_IMAGE_HEIGHT),ta=W.getParameter(W.UNPACK_SKIP_PIXELS),wn=W.getParameter(W.UNPACK_SKIP_ROWS),Mi=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,on.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,on.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,fe),W.pixelStorei(W.UNPACK_SKIP_ROWS,ve),W.pixelStorei(W.UNPACK_SKIP_IMAGES,oe);const Qe=w.isDataArrayTexture||w.isData3DTexture,Hn=J.isDataArrayTexture||J.isData3DTexture;if(w.isDepthTexture){const Dn=T.get(w),jn=T.get(J),On=T.get(Dn.__renderTarget),_r=T.get(jn.__renderTarget);Yt.bindFramebuffer(W.READ_FRAMEBUFFER,On.__webglFramebuffer),Yt.bindFramebuffer(W.DRAW_FRAMEBUFFER,_r.__webglFramebuffer);for(let bi=0;bi<se;bi++)Qe&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,T.get(w).__webglTexture,at,oe+bi),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,T.get(J).__webglTexture,Qt,sn+bi)),W.blitFramebuffer(fe,ve,ne,$t,ye,Ke,ne,$t,W.DEPTH_BUFFER_BIT,W.NEAREST);Yt.bindFramebuffer(W.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(at!==0||w.isRenderTargetTexture||T.has(w)){const Dn=T.get(w),jn=T.get(J);Yt.bindFramebuffer(W.READ_FRAMEBUFFER,Ji),Yt.bindFramebuffer(W.DRAW_FRAMEBUFFER,mi);for(let On=0;On<se;On++)Qe?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Dn.__webglTexture,at,oe+On):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Dn.__webglTexture,at),Hn?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,jn.__webglTexture,Qt,sn+On):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,jn.__webglTexture,Qt),at!==0?W.blitFramebuffer(fe,ve,ne,$t,ye,Ke,ne,$t,W.COLOR_BUFFER_BIT,W.NEAREST):Hn?W.copyTexSubImage3D(Ue,Qt,ye,Ke,sn+On,fe,ve,ne,$t):W.copyTexSubImage2D(Ue,Qt,ye,Ke,fe,ve,ne,$t);Yt.bindFramebuffer(W.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Hn?w.isDataTexture||w.isData3DTexture?W.texSubImage3D(Ue,Qt,ye,Ke,sn,ne,$t,se,tn,me,on.data):J.isCompressedArrayTexture?W.compressedTexSubImage3D(Ue,Qt,ye,Ke,sn,ne,$t,se,tn,on.data):W.texSubImage3D(Ue,Qt,ye,Ke,sn,ne,$t,se,tn,me,on):w.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Qt,ye,Ke,ne,$t,tn,me,on.data):w.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Qt,ye,Ke,on.width,on.height,tn,on.data):W.texSubImage2D(W.TEXTURE_2D,Qt,ye,Ke,ne,$t,tn,me,on);W.pixelStorei(W.UNPACK_ROW_LENGTH,Re),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,zn),W.pixelStorei(W.UNPACK_SKIP_PIXELS,ta),W.pixelStorei(W.UNPACK_SKIP_ROWS,wn),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Mi),Qt===0&&J.generateMipmaps&&W.generateMipmap(Ue),Yt.unbindTexture()},this.initRenderTarget=function(w){T.get(w).__webglFramebuffer===void 0&&$.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?$.setTextureCube(w,0):w.isData3DTexture?$.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?$.setTexture2DArray(w,0):$.setTexture2D(w,0),Yt.unbindTexture()},this.resetState=function(){k=0,j=0,it=null,Yt.reset(),Kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return La}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(t),i.unpackColorSpace=$e._getUnpackColorSpace()}}const IA=10,Px=20,BA=IA*1024*1024,zA=Px*1024*1024;function HA({onFileLoaded:s,disabled:t}){const[i,r]=Me.useState(!1),l=Me.useRef(null),c=Me.useCallback(_=>{if(!_.name.toLowerCase().endsWith(".stl")){alert("Please upload an STL file.");return}if(_.size>zA){alert(`File is too large (${(_.size/1024/1024).toFixed(1)}MB). Maximum supported size is ${Px}MB.`);return}if(_.size>BA&&!window.confirm(`This STL is ${(_.size/1024/1024).toFixed(1)}MB. Large files can be slow in-browser. Continue?`))return;const x=new FileReader;x.onload=()=>{x.result instanceof ArrayBuffer&&s(x.result,_.name)},x.readAsArrayBuffer(_)},[s]),h=Me.useCallback(_=>{if(_.preventDefault(),r(!1),t)return;const x=_.dataTransfer.files[0];x&&c(x)},[c,t]),d=Me.useCallback(_=>{_.preventDefault(),t||r(!0)},[t]),m=Me.useCallback(()=>{r(!1)},[]),p=Me.useCallback(()=>{t||l.current?.click()},[t]),g=Me.useCallback(_=>{const x=_.target.files?.[0];x&&c(x),_.target.value=""},[c]);return nt.jsxs("div",{onClick:p,onDrop:h,onDragOver:d,onDragLeave:m,className:`
        border-2 border-dashed rounded-xl p-6 text-center cursor-pointer
        transition-all duration-200 select-none
        ${i?"border-blue-400 bg-blue-950/30 text-blue-300":t?"border-gray-700 bg-gray-900/30 text-gray-600 cursor-not-allowed":"border-gray-600 bg-gray-900/50 text-gray-400 hover:border-gray-500 hover:bg-gray-900/70"}
      `,children:[nt.jsx("input",{ref:l,type:"file",accept:".stl",onChange:g,className:"hidden"}),nt.jsxs("div",{className:"flex items-center justify-center gap-3",children:[nt.jsx("svg",{className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:nt.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"})}),nt.jsx("span",{className:"text-sm font-medium",children:"Drop STL file here or click to upload"})]})]})}function VA({filename:s,triangleCount:t,dimensions:i,onRemove:r}){return nt.jsxs("div",{className:"flex items-center gap-3 bg-gray-800/60 border border-gray-700/50 rounded-xl px-3 py-2.5",children:[nt.jsx("div",{className:"shrink-0 w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center",children:nt.jsx("svg",{className:"w-4 h-4 text-blue-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:nt.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"})})}),nt.jsxs("div",{className:"flex-1 min-w-0",children:[nt.jsx("div",{className:"text-sm font-medium text-gray-200 truncate",children:s}),nt.jsxs("div",{className:"text-xs text-gray-500 flex flex-wrap gap-x-3 gap-y-0.5",children:[nt.jsxs("span",{children:["▲ ",t.toLocaleString()," triangles"]}),i&&nt.jsxs("span",{children:[i.width.toFixed(1)," × ",i.depth.toFixed(1)," × ",i.height.toFixed(1)," mm"]})]})]}),nt.jsx("button",{onClick:r,className:"shrink-0 p-2 rounded-lg text-gray-500 hover:text-red-400 hover:bg-red-950/30 transition-all",title:"Remove file",children:nt.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:nt.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})})]})}const qv={type:"change"},Rm={type:"start"},Fx={type:"end"},ku=new Mm,Zv=new Zr,GA=Math.cos(70*KS.DEG2RAD),qn=new et,Ni=2*Math.PI,_n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},cp=1e-6;class kA extends HM{constructor(t,i=null){super(t,i),this.state=_n.NONE,this.target=new et,this.cursor=new et,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zo.ROTATE,MIDDLE:zo.DOLLY,RIGHT:zo.PAN},this.touches={ONE:Bo.ROTATE,TWO:Bo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new et,this._lastQuaternion=new Bs,this._lastTargetPosition=new et,this._quat=new Bs().setFromUnitVectors(t.up,new et(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Mv,this._sphericalDelta=new Mv,this._scale=1,this._panOffset=new et,this._rotateStart=new Le,this._rotateEnd=new Le,this._rotateDelta=new Le,this._panStart=new Le,this._panEnd=new Le,this._panDelta=new Le,this._dollyStart=new Le,this._dollyEnd=new Le,this._dollyDelta=new Le,this._dollyDirection=new et,this._mouse=new Le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=WA.bind(this),this._onPointerDown=XA.bind(this),this._onPointerUp=jA.bind(this),this._onContextMenu=JA.bind(this),this._onMouseWheel=ZA.bind(this),this._onKeyDown=KA.bind(this),this._onTouchStart=QA.bind(this),this._onTouchMove=$A.bind(this),this._onMouseDown=YA.bind(this),this._onMouseMove=qA.bind(this),this._interceptControlDown=t2.bind(this),this._interceptControlUp=e2.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(qv),this.update(),this.state=_n.NONE}update(t=null){const i=this.object.position;qn.copy(i).sub(this.target),qn.applyQuaternion(this._quat),this._spherical.setFromVector3(qn),this.autoRotate&&this.state===_n.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(r)&&isFinite(l)&&(r<-Math.PI?r+=Ni:r>Math.PI&&(r-=Ni),l<-Math.PI?l+=Ni:l>Math.PI&&(l-=Ni),r<=l?this._spherical.theta=Math.max(r,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+l)/2?Math.max(r,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(qn.setFromSpherical(this._spherical),qn.applyQuaternion(this._quatInverse),i.copy(this.target).add(qn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=qn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new et(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new et(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=qn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(ku.origin.copy(this.object.position),ku.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ku.direction))<GA?this.object.lookAt(this.target):(Zv.setFromNormalAndCoplanarPoint(this.object.up,this.target),ku.intersectPlane(Zv,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>cp||8*(1-this._lastQuaternion.dot(this.object.quaternion))>cp||this._lastTargetPosition.distanceToSquared(this.target)>cp?(this.dispatchEvent(qv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ni/60*this.autoRotateSpeed*t:Ni/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){qn.setFromMatrixColumn(i,0),qn.multiplyScalar(-t),this._panOffset.add(qn)}_panUp(t,i){this.screenSpacePanning===!0?qn.setFromMatrixColumn(i,1):(qn.setFromMatrixColumn(i,0),qn.crossVectors(this.object.up,qn)),qn.multiplyScalar(t),this._panOffset.add(qn)}_pan(t,i){const r=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;qn.copy(l).sub(this.target);let c=qn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/r.clientHeight,this.object.matrix),this._panUp(2*i*c/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),l=t-r.left,c=i-r.top,h=r.width,d=r.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Ni*this._rotateDelta.x/i.clientHeight),this._rotateUp(Ni*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(r,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(r,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),r=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(r*r+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const r=this._getSecondPointerPosition(t),l=.5*(t.pageX+r.x),c=.5*(t.pageY+r.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Ni*this._rotateDelta.x/i.clientHeight),this._rotateUp(Ni*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(r,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),r=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(r*r+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new Le,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,r={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function XA(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function WA(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function jA(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Fx),this.state=_n.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function YA(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case zo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=_n.DOLLY;break;case zo.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=_n.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=_n.ROTATE}break;case zo.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=_n.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=_n.PAN}break;default:this.state=_n.NONE}this.state!==_n.NONE&&this.dispatchEvent(Rm)}function qA(s){switch(this.state){case _n.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case _n.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case _n.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function ZA(s){this.enabled===!1||this.enableZoom===!1||this.state!==_n.NONE||(s.preventDefault(),this.dispatchEvent(Rm),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Fx))}function KA(s){this.enabled!==!1&&this._handleKeyDown(s)}function QA(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Bo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=_n.TOUCH_ROTATE;break;case Bo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=_n.TOUCH_PAN;break;default:this.state=_n.NONE}break;case 2:switch(this.touches.TWO){case Bo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=_n.TOUCH_DOLLY_PAN;break;case Bo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=_n.TOUCH_DOLLY_ROTATE;break;default:this.state=_n.NONE}break;default:this.state=_n.NONE}this.state!==_n.NONE&&this.dispatchEvent(Rm)}function $A(s){switch(this._trackPointer(s),this.state){case _n.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case _n.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case _n.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case _n.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=_n.NONE}}function JA(s){this.enabled!==!1&&s.preventDefault()}function t2(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function e2(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Te=42,lm=.25,up=Te-2*lm,Ql=.8,Ix=1.8,$l=2.15,Cm=Ql+Ix+$l,Bx=2.25,cm=Cm+Bx,Ju=3.75,n2=6.5,i2=2.4,a2=4.8,r2=3,s2=6,Kv=2;function Qv(s,t,i="inside"){if(i==="outside")return{gridX:Math.max(1,Math.ceil(s/Te)),gridY:Math.max(1,Math.ceil(t/Te))};const r=s/Te,l=t/Te,c=Math.floor(r),h=Math.floor(l),d=(r-c)*Te/2,m=(l-h)*Te/2,p=d>0&&d<=Kv?c+1:Math.max(1,c),g=m>0&&m<=Kv?h+1:Math.max(1,h);return{gridX:p,gridY:g}}const o2=16;function tf(s,t,i,r=o2){const l=[],c=s/2,h=t/2,d=Math.min(i,c,h);for(let m=0;m<4;m++){const p=m===0||m===3?c-d:-(c-d),g=m===0||m===1?h-d:-(h-d),_=m*Math.PI/2;for(let x=0;x<=r;x++){const M=_+x*Math.PI/(2*r);l.push([p+d*Math.cos(M),g+d*Math.sin(M)])}}return l}function l2(s){const{CrossSection:t,Manifold:i}=s,r=up-2*(Ql+$l),l=up-2*$l,c=up,h=Ql+$l,d=$l,m=Math.max(.1,Ju-h),p=Math.max(.1,Ju-d),g=Ju,_=Ql,x=Ql+Ix,M=Cm,A=.01,R=new t([tf(r,r,m)]),E=new t([tf(l,l,p)]),y=new t([tf(c,c,g)]),z=R.extrude(A),N=E.extrude(A).translate([0,0,_]),O=E.extrude(A).translate([0,0,x]),B=y.extrude(A).translate([0,0,M]),P=i.hull([z,N]),F=E.extrude(x-_).translate([0,0,_]),Z=i.hull([O,B]);R.delete(),E.delete(),y.delete(),z.delete(),N.delete(),O.delete(),B.delete();const C=i.union([P,F,Z]);return P.delete(),F.delete(),Z.delete(),C}async function c2(s,t){const{Manifold:i}=s;s.setCircularSegments(32);const r=l2(s),l=[];for(let x=0;x<t.gridX;x++)for(let M=0;M<t.gridY;M++){const A=t.offsetX+(x-(t.gridX-1)/2)*Te,R=t.offsetY+(M-(t.gridY-1)/2)*Te;let E=r.translate([A,R,0]);const y=a2,z=[[A-Te/2+y,R-Te/2+y],[A+Te/2-y,R-Te/2+y],[A-Te/2+y,R+Te/2-y],[A+Te/2-y,R+Te/2-y]];if(t.magnets){const N=n2/2,O=z.map(([P,F])=>i.cylinder(i2,N,N,24,!1).translate([P,F,0])),B=i.difference([E,...O]);E.delete(),E=B,O.forEach(P=>P.delete())}if(t.screws){const N=[],O=r2/2;for(const[P,F]of z){const Z=i.cylinder(s2,O,O,16).translate([P,F,0]);N.push(Z)}const B=i.difference([E,...N]);E.delete(),E=B;for(const P of N)P.delete()}l.push(E)}r.delete();let c;if(l.length===1)c=l[0];else{c=i.union(l);for(const x of l)x.delete()}const h=t.gridX*Te-2*lm,d=t.gridY*Te-2*lm,{CrossSection:m}=s,p=new m([tf(h,d,Ju)]),g=p.extrude(Bx).translate([t.offsetX,t.offsetY,Cm]);p.delete();const _=i.union([c,g]);return c.delete(),g.delete(),_}function u2(s,t){const{Mesh:i}=t,r=s.getAttribute("position"),l=s.getIndex();let c,h;if(l){const p=r.array;c=new Float32Array(p.length),c.set(p),h=new Uint32Array(l.array)}else{const p=r.array,g=r.count;if(g%3!==0)throw new Error("Invalid geometry: vertex count is not divisible by 3");c=new Float32Array(p.length),c.set(p),h=new Uint32Array(g);for(let _=0;_<g;_++)h[_]=_}const d=new i({numProp:3,vertProperties:c,triVerts:h}),m=d;return typeof m.merge=="function"&&m.merge(),d}function $v(s){const t=s.vertProperties,i=s.triVerts,r=s.numProp,l=t.length/r,c=new Float32Array(l*3);for(let h=0;h<l;h++)c[h*3]=t[h*r],c[h*3+1]=t[h*r+1],c[h*3+2]=t[h*r+2];return{positions:c,indices:new Uint32Array(i)}}function f2(){return nt.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center text-center p-6 pointer-events-none",children:[nt.jsxs("div",{className:"mb-6 relative",children:[nt.jsxs("svg",{width:"80",height:"80",viewBox:"0 0 80 80",fill:"none",className:"opacity-30",children:[nt.jsx("rect",{x:"4",y:"4",width:"34",height:"34",rx:"4",stroke:"currentColor",strokeWidth:"2",className:"text-gray-400"}),nt.jsx("rect",{x:"42",y:"4",width:"34",height:"34",rx:"4",stroke:"currentColor",strokeWidth:"2",className:"text-gray-400"}),nt.jsx("rect",{x:"4",y:"42",width:"34",height:"34",rx:"4",stroke:"currentColor",strokeWidth:"2",className:"text-gray-400"}),nt.jsx("rect",{x:"42",y:"42",width:"34",height:"34",rx:"4",stroke:"currentColor",strokeWidth:"2",className:"text-gray-400"}),nt.jsx("circle",{cx:"21",cy:"21",r:"5",stroke:"currentColor",strokeWidth:"1.5",className:"text-gray-500"}),nt.jsx("circle",{cx:"59",cy:"21",r:"5",stroke:"currentColor",strokeWidth:"1.5",className:"text-gray-500"}),nt.jsx("circle",{cx:"21",cy:"59",r:"5",stroke:"currentColor",strokeWidth:"1.5",className:"text-gray-500"}),nt.jsx("circle",{cx:"59",cy:"59",r:"5",stroke:"currentColor",strokeWidth:"1.5",className:"text-gray-500"})]}),nt.jsx("div",{className:"absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center",children:nt.jsx("svg",{className:"w-4 h-4 text-blue-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:nt.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})})})]}),nt.jsx("h3",{className:"text-base font-semibold text-gray-400 mb-2",children:"Upload an STL file to get started"}),nt.jsx("p",{className:"text-sm text-gray-600 max-w-xs mb-4",children:"Add a Gridfinity-compatible base to any 3D model — right in your browser."}),nt.jsx("div",{className:"flex flex-wrap gap-2 justify-center",children:["Bins","Holders","Organizers","Tool holders","Trays"].map(s=>nt.jsx("span",{className:"text-xs px-2.5 py-1 rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-500",children:s},s))})]})}function h2({originalGeometry:s,baseGeometry:t,combinedGeometry:i,gridX:r,gridY:l,offsetX:c,offsetY:h,placement:d}){const m=Me.useRef(null),p=Me.useRef(null);Me.useEffect(()=>{if(!m.current)return;const M=m.current,A=new FA({antialias:!0,alpha:!0});A.setPixelRatio(window.devicePixelRatio),A.setSize(M.clientWidth,M.clientHeight),A.setClearColor(657935,1),A.toneMapping=hm,A.toneMappingExposure=1.2,M.appendChild(A.domElement);const R=new yM,E=new ua(45,M.clientWidth/M.clientHeight,.1,1e4);E.position.set(100,100,100);const y=new kA(E,A.domElement);y.enableDamping=!0,y.dampingFactor=.1,y.target.set(0,0,0);const z=new BM(16777215,.4);R.add(z);const N=new Sv(16777215,1);N.position.set(100,200,100),R.add(N);const O=new Sv(8947967,.5);O.position.set(-100,-50,-100),R.add(O);const B=new bv(200,20,3355443,2236962);B.rotation.x=Math.PI/2,R.add(B);const P={renderer:A,scene:R,camera:E,controls:y,originalMesh:null,baseMesh:null,combinedMesh:null,gridOverlay:null,bgGrid:B,animId:0};p.current=P;const F=()=>{P.animId=requestAnimationFrame(F),y.update(),A.render(R,E)};F();const Z=()=>{if(!M)return;const U=M.clientWidth,k=M.clientHeight;E.aspect=U/k,E.updateProjectionMatrix(),A.setSize(U,k)},C=new ResizeObserver(Z);return C.observe(M),()=>{cancelAnimationFrame(P.animId),C.disconnect(),y.dispose(),A.dispose(),M.removeChild(A.domElement),p.current=null}},[]);const g=Me.useCallback(M=>{const A=p.current;if(!A)return;const R=new Yo;for(const Z of M)R.expandByObject(Z);if(R.isEmpty())return;const E=R.getCenter(new et),y=R.getSize(new et),z=Math.max(y.x,y.y,y.z),N=A.camera.fov*(Math.PI/180),O=z/2/Math.tan(N/2)*1.5;A.controls.target.copy(E),A.camera.position.set(E.x+O*.6,E.y+O*.6,E.z+O*.6),A.camera.lookAt(E),A.controls.update(),A.bgGrid&&(A.scene.remove(A.bgGrid),A.bgGrid.dispose());const B=Math.ceil(z*2/42)*42,P=Math.ceil(B/42),F=new bv(B,P,4473924,2631720);F.rotation.x=Math.PI/2,F.position.set(E.x,E.y,0),A.scene.add(F),A.bgGrid=F},[]),_=Me.useCallback((M,A,R,E)=>{const y=new Zl;for(let N=0;N<M;N++)for(let O=0;O<A;O++){const B=R+(N-(M-1)/2)*Te,P=E+(O-(A-1)/2)*Te,F=new rc(Te-1,Te-1),Z=new bm({color:2280550,transparent:!0,opacity:.12,side:qi,depthWrite:!1}),C=new Oi(F,Z);C.position.set(B,P,.05),y.add(C);const U=[new et(B-Te/2,P-Te/2,.1),new et(B+Te/2,P-Te/2,.1),new et(B+Te/2,P+Te/2,.1),new et(B-Te/2,P+Te/2,.1),new et(B-Te/2,P-Te/2,.1)],k=new ei().setFromPoints(U),j=new cf({color:2280550,transparent:!0,opacity:.5}),it=new Qu(k,j);y.add(it)}const z=1;for(let N=-z;N<M+z;N++)for(let O=-z;O<A+z;O++){if(N>=0&&N<M&&O>=0&&O<A)continue;const B=R+(N-(M-1)/2)*Te,P=E+(O-(A-1)/2)*Te,F=[new et(B-Te/2,P-Te/2,.05),new et(B+Te/2,P-Te/2,.05),new et(B+Te/2,P+Te/2,.05),new et(B-Te/2,P+Te/2,.05),new et(B-Te/2,P-Te/2,.05)],Z=new ei().setFromPoints(F),C=new UM({color:8947848,transparent:!0,opacity:.2,dashSize:3,gapSize:3}),U=new Qu(Z,C);U.computeLineDistances(),y.add(U)}return y},[]);Me.useEffect(()=>{const M=p.current;if(!M||(M.gridOverlay&&(M.scene.remove(M.gridOverlay),M.gridOverlay.traverse(R=>{(R instanceof Oi||R instanceof Qu)&&(R.geometry.dispose(),R.material instanceof Hs&&R.material.dispose())}),M.gridOverlay=null),!s&&!i))return;const A=_(r,l,c,h);M.scene.add(A),M.gridOverlay=A},[r,l,c,h,s,i,_]),Me.useEffect(()=>{const M=p.current;if(!M)return;M.originalMesh&&(M.scene.remove(M.originalMesh),M.originalMesh.geometry.dispose(),M.originalMesh.material.dispose(),M.originalMesh=null),M.baseMesh&&(M.scene.remove(M.baseMesh),M.baseMesh.geometry.dispose(),M.baseMesh.material.dispose(),M.baseMesh=null),M.combinedMesh&&(M.scene.remove(M.combinedMesh),M.combinedMesh.geometry.dispose(),M.combinedMesh.material.dispose(),M.combinedMesh=null);const A=[];if(i){const R=new ep({color:4491519,metalness:.1,roughness:.4,transparent:d==="inside",opacity:d==="inside"?.62:1,side:qi}),E=new Oi(i,R);M.scene.add(E),M.combinedMesh=E,A.push(E)}else{if(s){const R=new ep({color:8956620,metalness:.1,roughness:.4,transparent:d==="inside",opacity:d==="inside"?.45:1,side:qi}),E=new Oi(s,R);M.scene.add(E),M.originalMesh=E,A.push(E)}if(t){const R=new ep({color:4508774,metalness:.1,roughness:.4,transparent:!0,opacity:.7,side:qi}),E=new Oi(t,R);M.scene.add(E),M.baseMesh=E,A.push(E)}}A.length>0&&g(A)},[s,t,i,g,d]);const x=!s&&!t&&!i;return nt.jsxs("div",{className:"relative w-full h-full min-h-[300px] lg:min-h-[600px] rounded-xl overflow-hidden bg-gray-950",children:[nt.jsx("div",{ref:m,className:"w-full h-full"}),x&&nt.jsx(f2,{})]})}function fp({title:s,defaultOpen:t=!1,children:i,badge:r}){const[l,c]=Me.useState(t);return nt.jsxs("div",{className:"border border-gray-800 rounded-xl overflow-hidden",children:[nt.jsxs("button",{onClick:()=>c(!l),className:`w-full flex items-center justify-between px-4 py-3 text-left
          bg-gray-900/30 hover:bg-gray-800/50 transition-colors active:bg-gray-800/70`,children:[nt.jsxs("div",{className:"flex items-center gap-2",children:[nt.jsx("span",{className:"text-sm font-medium text-gray-300",children:s}),r&&nt.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400",children:r})]}),nt.jsx("svg",{className:`w-4 h-4 text-gray-500 transition-transform duration-200 ${l?"rotate-180":""}`,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:nt.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})})]}),nt.jsx("div",{className:`transition-all duration-200 overflow-hidden ${l?"max-h-[800px] opacity-100":"max-h-0 opacity-0"}`,children:nt.jsx("div",{className:"p-4 pt-2",children:i})})]})}const hp={inside:{label:"Fit Inside",desc:"Max grid units within model footprint"},outside:{label:"Fit Outside",desc:"Grid units encompass entire model"},custom:{label:"Custom",desc:"Manual grid count"}},d2=[{axis:"-z",label:"⊥",title:"Bottom (-Z) — default"},{axis:"+z",label:"⊤",title:"Top (+Z)"},{axis:"-x",label:"◀",title:"Left (-X)"},{axis:"+x",label:"▶",title:"Right (+X)"},{axis:"-y",label:"▼",title:"Front (-Y)"},{axis:"+y",label:"▲",title:"Back (+Y)"}],Xu={outside:{label:"Turn Into Box",desc:"Attach the base on the outside of the selected bottom face"},inside:{label:"Add Base Inside",desc:"Attach the base inward from the selected face (for trays/boxes)"}};function p2({gridX:s,gridY:t,offsetX:i,offsetY:r,magnets:l,screws:c,fitMode:h,orientation:d,placement:m,modelDims:p,hasModel:g,hasCombined:_,isProcessing:x,filename:M,onGridXChange:A,onGridYChange:R,onOffsetXChange:E,onOffsetYChange:y,onMagnetsChange:z,onScrewsChange:N,onFitModeChange:O,onOrientationChange:B,onPlacementChange:P,onGenerate:F,onDownload:Z}){const[C,U]=Me.useState(!1),k=()=>{const j=["Gridfinity Base Adder Settings",`File: ${M}`,`Grid: ${s}×${t} (${(s*Te).toFixed(0)}×${(t*Te).toFixed(0)}mm)`,`Fit Mode: ${hp[h].label}`,`Orientation: ${d}`,`Base Side: ${Xu[m].label}`,`Offset: X=${i.toFixed(1)}mm, Y=${r.toFixed(1)}mm`,`Magnets: ${l?"Yes":"No"}`,`Screws: ${c?"Yes":"No"}`,p?`Model: ${p.width.toFixed(1)}×${p.depth.toFixed(1)}×${p.height.toFixed(1)}mm`:"",`
https://molty-assistant.github.io/gridfinity-base-adder/`].filter(Boolean).join(`
`);navigator.clipboard.writeText(j).then(()=>{U(!0),setTimeout(()=>U(!1),2e3)})};return nt.jsxs("div",{className:"flex flex-col gap-3",children:[nt.jsx("button",{onClick:F,disabled:!g||x,className:`w-full py-3.5 px-4 rounded-xl font-semibold text-sm transition-all
          bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white shadow-lg shadow-blue-600/20
          disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed disabled:shadow-none
          flex items-center justify-center gap-2`,children:x?nt.jsxs(nt.Fragment,{children:[nt.jsxs("svg",{className:"animate-spin w-4 h-4",fill:"none",viewBox:"0 0 24 24",children:[nt.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),nt.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Generating…"]}):nt.jsxs(nt.Fragment,{children:[nt.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:nt.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"})}),"Generate Base"]})}),!_&&g&&!x&&nt.jsx("p",{className:"text-xs text-yellow-400/70 text-center",children:"Adjust settings below, then generate."}),g&&nt.jsxs("div",{className:"bg-gray-900/50 border border-gray-800 rounded-xl p-3",children:[nt.jsx("label",{className:"block text-xs font-medium text-gray-400 mb-2",children:"Workflow"}),nt.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:Object.keys(Xu).map(j=>nt.jsx("button",{onClick:()=>P(j),disabled:x,className:`
                  py-2 px-2 rounded-lg text-xs font-medium transition-all
                  ${m===j?"bg-blue-600 text-white":"bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200"}
                  disabled:opacity-50 disabled:cursor-not-allowed
                `,children:Xu[j].label},j))}),nt.jsx("p",{className:"text-[10px] text-gray-600 mt-1.5",children:Xu[m].desc})]}),_&&nt.jsxs("div",{className:"bg-emerald-950/30 border border-emerald-700/40 rounded-xl p-3 space-y-2.5",children:[nt.jsxs("button",{onClick:Z,disabled:x,className:`w-full py-3.5 px-4 rounded-xl font-semibold text-sm transition-all
              bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20
              disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed
              flex items-center justify-center gap-2`,children:[nt.jsx("svg",{className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:nt.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"})}),"Download STL"]}),nt.jsxs("div",{className:"flex items-center justify-between text-xs text-emerald-400/70",children:[nt.jsxs("span",{children:[s,"×",t," grid · ",l?"magnets":"",l&&c?" + ":"",c?"screws":"",!l&&!c?"no features":""]}),nt.jsx("button",{onClick:k,className:"flex items-center gap-1 px-2 py-1 rounded-md hover:bg-emerald-800/30 transition-colors",children:C?nt.jsxs(nt.Fragment,{children:[nt.jsx("svg",{className:"w-3 h-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:nt.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"})}),"Copied!"]}):nt.jsxs(nt.Fragment,{children:[nt.jsx("svg",{className:"w-3 h-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:nt.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"})}),"Copy settings"]})})]})]}),nt.jsx(fp,{title:"Grid Size",defaultOpen:!0,badge:g?`${s}×${t}`:void 0,children:nt.jsxs("div",{className:"space-y-3",children:[g&&nt.jsxs("div",{children:[nt.jsx("label",{className:"block text-xs font-medium text-gray-400 mb-2",children:"Fitting Mode"}),nt.jsx("div",{className:"flex gap-1",children:Object.keys(hp).map(j=>nt.jsx("button",{onClick:()=>O(j),disabled:x,className:`
                      flex-1 text-center px-2 py-2 rounded-lg text-xs transition-all
                      ${h===j?"bg-blue-600/20 border border-blue-500/50 text-blue-300":"bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:bg-gray-700/50 hover:text-gray-300"}
                      disabled:opacity-50 disabled:cursor-not-allowed
                    `,children:nt.jsx("div",{className:"font-medium",children:hp[j].label})},j))})]}),nt.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[nt.jsxs("div",{children:[nt.jsx("label",{className:"block text-xs font-medium text-gray-400 mb-1",children:"Grid X"}),nt.jsx("input",{type:"number",min:1,max:20,value:s,onChange:j=>A(Math.max(1,parseInt(j.target.value)||1)),disabled:!g||x||h!=="custom",className:`w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2.5 text-sm
                  text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  disabled:opacity-50 disabled:cursor-not-allowed`})]}),nt.jsxs("div",{children:[nt.jsx("label",{className:"block text-xs font-medium text-gray-400 mb-1",children:"Grid Y"}),nt.jsx("input",{type:"number",min:1,max:20,value:t,onChange:j=>R(Math.max(1,parseInt(j.target.value)||1)),disabled:!g||x||h!=="custom",className:`w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2.5 text-sm
                  text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  disabled:opacity-50 disabled:cursor-not-allowed`})]})]}),nt.jsxs("div",{className:"text-xs text-gray-500",children:["Base: ",(s*42).toFixed(0)," × ",(t*42).toFixed(0)," mm · Height: ",cm.toFixed(1)," mm"]})]})}),g&&nt.jsx(fp,{title:"Orientation",badge:d,children:nt.jsxs("div",{children:[nt.jsx("label",{className:"block text-xs font-medium text-gray-400 mb-2",children:"Bottom Face"}),nt.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:d2.map(j=>nt.jsx("button",{title:j.title,onClick:()=>B(j.axis),disabled:x,className:`
                    py-2.5 px-2 rounded-lg text-sm font-medium transition-all
                    ${d===j.axis?"bg-blue-600 text-white":"bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200 active:bg-gray-600"}
                    disabled:opacity-50 disabled:cursor-not-allowed
                  `,children:j.label},j.axis))}),nt.jsx("p",{className:"text-[10px] text-gray-600 mt-1.5",children:"Rotate model so a different face becomes the bottom"})]})}),nt.jsx(fp,{title:"Offset & Features",children:nt.jsxs("div",{className:"space-y-3",children:[nt.jsxs("div",{children:[nt.jsxs("label",{className:"block text-xs font-medium text-gray-400 mb-1",children:["Offset X: ",i.toFixed(1)," mm"]}),nt.jsx("input",{type:"range",min:-21,max:21,step:.5,value:i,onChange:j=>E(parseFloat(j.target.value)),disabled:!g||x,className:`w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer
                accent-blue-500 disabled:opacity-50 disabled:cursor-not-allowed`})]}),nt.jsxs("div",{children:[nt.jsxs("label",{className:"block text-xs font-medium text-gray-400 mb-1",children:["Offset Y: ",r.toFixed(1)," mm"]}),nt.jsx("input",{type:"range",min:-21,max:21,step:.5,value:r,onChange:j=>y(parseFloat(j.target.value)),disabled:!g||x,className:`w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer
                accent-blue-500 disabled:opacity-50 disabled:cursor-not-allowed`})]}),nt.jsxs("div",{className:"space-y-2 pt-1",children:[nt.jsxs("label",{className:"flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-800/50 transition-colors cursor-pointer",children:[nt.jsx("input",{type:"checkbox",checked:l,onChange:j=>z(j.target.checked),disabled:!g||x,className:`w-5 h-5 rounded bg-gray-800 border-gray-600 text-blue-500
                  focus:ring-blue-500 focus:ring-offset-gray-900
                  disabled:opacity-50 disabled:cursor-not-allowed`}),nt.jsxs("div",{children:[nt.jsx("div",{className:"text-sm text-gray-300",children:"Magnet holes"}),nt.jsx("div",{className:"text-[10px] text-gray-600",children:"6×3mm round magnets"})]})]}),nt.jsxs("label",{className:"flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-800/50 transition-colors cursor-pointer",children:[nt.jsx("input",{type:"checkbox",checked:c,onChange:j=>N(j.target.checked),disabled:!g||x,className:`w-5 h-5 rounded bg-gray-800 border-gray-600 text-blue-500
                  focus:ring-blue-500 focus:ring-offset-gray-900
                  disabled:opacity-50 disabled:cursor-not-allowed`}),nt.jsxs("div",{children:[nt.jsx("div",{className:"text-sm text-gray-300",children:"Screw holes"}),nt.jsx("div",{className:"text-[10px] text-gray-600",children:"M3 countersunk"})]})]})]})]})}),p&&nt.jsxs("div",{className:"bg-gray-900/50 rounded-xl p-3 text-xs text-gray-400 space-y-1",children:[nt.jsx("div",{className:"font-medium text-gray-300",children:"Model Dimensions"}),nt.jsxs("div",{className:"grid grid-cols-3 gap-2 text-center",children:[nt.jsxs("div",{children:[nt.jsx("div",{className:"text-gray-500 text-[10px]",children:"Width"}),nt.jsx("div",{children:p.width.toFixed(1)})]}),nt.jsxs("div",{children:[nt.jsx("div",{className:"text-gray-500 text-[10px]",children:"Depth"}),nt.jsx("div",{children:p.depth.toFixed(1)})]}),nt.jsxs("div",{children:[nt.jsx("div",{className:"text-gray-500 text-[10px]",children:"Height"}),nt.jsx("div",{children:p.height.toFixed(1)})]})]}),nt.jsxs("div",{className:"text-center text-gray-600 text-[10px] pt-1",children:["Grid unit: ",Te,"mm · All processing runs in your browser"]})]})]})}function m2({message:s,type:t="success",duration:i=4e3,onDismiss:r}){const[l,c]=Me.useState(!1);Me.useEffect(()=>{requestAnimationFrame(()=>c(!0));const d=setTimeout(()=>{c(!1),setTimeout(r,300)},i);return()=>clearTimeout(d)},[i,r]);const h=t==="success"?"bg-emerald-900/90 border-emerald-600/50 text-emerald-200":t==="error"?"bg-red-900/90 border-red-600/50 text-red-200":"bg-blue-900/90 border-blue-600/50 text-blue-200";return nt.jsx("div",{className:`
        fixed top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-3 rounded-xl border
        shadow-2xl backdrop-blur-sm text-sm font-medium
        transition-all duration-300
        ${h}
        ${l?"opacity-100 translate-y-0":"opacity-0 -translate-y-4"}
      `,children:nt.jsxs("div",{className:"flex items-center gap-2",children:[nt.jsx("span",{children:s}),nt.jsx("button",{onClick:()=>{c(!1),setTimeout(r,300)},className:"ml-2 opacity-60 hover:opacity-100 transition-opacity",children:"✕"})]})})}class g2 extends Tm{constructor(t){super(t)}load(t,i,r,l){const c=this,h=new PM(this.manager);h.setPath(this.path),h.setResponseType("arraybuffer"),h.setRequestHeader(this.requestHeader),h.setWithCredentials(this.withCredentials),h.load(t,function(d){try{i(c.parse(d))}catch(m){l?l(m):console.error(m),c.manager.itemError(t)}},r,l)}parse(t){function i(p){const g=new DataView(p),_=32/8*3+32/8*3*3+16/8,x=g.getUint32(80,!0);if(80+32/8+x*_===g.byteLength)return!0;const A=[115,111,108,105,100];for(let R=0;R<5;R++)if(r(A,g,R))return!1;return!0}function r(p,g,_){for(let x=0,M=p.length;x<M;x++)if(p[x]!==g.getUint8(_+x))return!1;return!0}function l(p){const g=new DataView(p),_=g.getUint32(80,!0);let x,M,A,R=!1,E,y,z,N,O;for(let k=0;k<70;k++)g.getUint32(k,!1)==1129270351&&g.getUint8(k+4)==82&&g.getUint8(k+5)==61&&(R=!0,E=new Float32Array(_*3*3),y=g.getUint8(k+6)/255,z=g.getUint8(k+7)/255,N=g.getUint8(k+8)/255,O=g.getUint8(k+9)/255);const B=84,P=50,F=new ei,Z=new Float32Array(_*3*3),C=new Float32Array(_*3*3),U=new He;for(let k=0;k<_;k++){const j=B+k*P,it=g.getFloat32(j,!0),pt=g.getFloat32(j+4,!0),xt=g.getFloat32(j+8,!0);if(R){const H=g.getUint16(j+48,!0);(H&32768)===0?(x=(H&31)/31,M=(H>>5&31)/31,A=(H>>10&31)/31):(x=y,M=z,A=N)}for(let H=1;H<=3;H++){const Y=j+H*12,st=k*3*3+(H-1)*3;Z[st]=g.getFloat32(Y,!0),Z[st+1]=g.getFloat32(Y+4,!0),Z[st+2]=g.getFloat32(Y+8,!0),C[st]=it,C[st+1]=pt,C[st+2]=xt,R&&(U.setRGB(x,M,A,Yi),E[st]=U.r,E[st+1]=U.g,E[st+2]=U.b)}}return F.setAttribute("position",new Zn(Z,3)),F.setAttribute("normal",new Zn(C,3)),R&&(F.setAttribute("color",new Zn(E,3)),F.hasColors=!0,F.alpha=O),F}function c(p){const g=new ei,_=/solid([\s\S]*?)endsolid/g,x=/facet([\s\S]*?)endfacet/g,M=/solid\s(.+)/;let A=0;const R=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,E=new RegExp("vertex"+R+R+R,"g"),y=new RegExp("normal"+R+R+R,"g"),z=[],N=[],O=[],B=new et;let P,F=0,Z=0,C=0;for(;(P=_.exec(p))!==null;){Z=C;const U=P[0],k=(P=M.exec(U))!==null?P[1]:"";for(O.push(k);(P=x.exec(U))!==null;){let pt=0,xt=0;const H=P[0];for(;(P=y.exec(H))!==null;)B.x=parseFloat(P[1]),B.y=parseFloat(P[2]),B.z=parseFloat(P[3]),xt++;for(;(P=E.exec(H))!==null;)z.push(parseFloat(P[1]),parseFloat(P[2]),parseFloat(P[3])),N.push(B.x,B.y,B.z),pt++,C++;xt!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+A),pt!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+A),A++}const j=Z,it=C-Z;g.userData.groupNames=O,g.addGroup(j,it,F),F++}return g.setAttribute("position",new yi(z,3)),g.setAttribute("normal",new yi(N,3)),g}function h(p){return typeof p!="string"?new TextDecoder().decode(p):p}function d(p){if(typeof p=="string"){const g=new Uint8Array(p.length);for(let _=0;_<p.length;_++)g[_]=p.charCodeAt(_)&255;return g.buffer||g}else return p}const m=d(t);return i(m)?l(m):c(h(t))}}function _2(s){const i=new g2().parse(s);return i.computeBoundingBox(),i.computeVertexNormals(),i}function Jv(s){s.boundingBox||s.computeBoundingBox();const t=s.boundingBox;return{width:t.max.x-t.min.x,height:t.max.z-t.min.z,depth:t.max.y-t.min.y,minX:t.min.x,maxX:t.max.x,minY:t.min.y,maxY:t.max.y,minZ:t.min.z,maxZ:t.max.z,centerX:(t.min.x+t.max.x)/2,centerY:(t.min.y+t.max.y)/2,centerZ:(t.min.z+t.max.z)/2}}function v2(s,t){const i=t.length/3,r=84+i*50,l=new ArrayBuffer(r),c=new DataView(l),h="Binary STL generated by Gridfinity Base Adder";for(let m=0;m<Math.min(h.length,80);m++)c.setUint8(m,h.charCodeAt(m));c.setUint32(80,i,!0);let d=84;for(let m=0;m<i;m++){const p=t[m*3],g=t[m*3+1],_=t[m*3+2],x=s[p*3],M=s[p*3+1],A=s[p*3+2],R=s[g*3],E=s[g*3+1],y=s[g*3+2],z=s[_*3],N=s[_*3+1],O=s[_*3+2],B=R-x,P=E-M,F=y-A,Z=z-x,C=N-M,U=O-A;let k=P*U-F*C,j=F*Z-B*U,it=B*C-P*Z;const pt=Math.sqrt(k*k+j*j+it*it);pt>0&&(k/=pt,j/=pt,it/=pt),c.setFloat32(d,k,!0),d+=4,c.setFloat32(d,j,!0),d+=4,c.setFloat32(d,it,!0),d+=4,c.setFloat32(d,x,!0),d+=4,c.setFloat32(d,M,!0),d+=4,c.setFloat32(d,A,!0),d+=4,c.setFloat32(d,R,!0),d+=4,c.setFloat32(d,E,!0),d+=4,c.setFloat32(d,y,!0),d+=4,c.setFloat32(d,z,!0),d+=4,c.setFloat32(d,N,!0),d+=4,c.setFloat32(d,O,!0),d+=4,c.setUint16(d,0,!0),d+=2}return l}function x2(s,t){const i=new Blob([s],{type:"application/octet-stream"}),r=URL.createObjectURL(i),l=document.createElement("a");l.href=r,l.download=t,l.click(),URL.revokeObjectURL(r)}const y2="modulepreload",S2=function(s){return"/gridfinity-base-adder/"+s},tx={},M2=function(t,i,r){let l=Promise.resolve();if(i&&i.length>0){let m=function(p){return Promise.all(p.map(g=>Promise.resolve(g).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),d=h?.nonce||h?.getAttribute("nonce");l=m(i.map(p=>{if(p=S2(p),p in tx)return;tx[p]=!0;const g=p.endsWith(".css"),_=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${_}`))return;const x=document.createElement("link");if(x.rel=g?"stylesheet":y2,g||(x.as="script"),x.crossOrigin="",x.href=p,d&&x.setAttribute("nonce",d),document.head.appendChild(x),g)return new Promise((M,A)=>{x.addEventListener("load",M),x.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${p}`)))})}))}function c(h){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=h,window.dispatchEvent(d),!d.defaultPrevented)throw h}return l.then(h=>{for(const d of h||[])d.status==="rejected"&&c(d.reason);return t().catch(c)})};var b2=(()=>{var s=import.meta.url;return(async function(t={}){var i,r=t,l,c,h=new Promise((v,S)=>{l=v,c=S}),d=typeof window=="object",m=typeof importScripts=="function",p=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string";if(p){const{createRequire:v}=await M2(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]);var g=v(import.meta.url)}var _=!1;r.setup=function(){if(_)return;_=!0,r.initTBB();function v(q,ot,At=(Bt=>Bt)){if(ot)for(let Bt of ot)q.push_back(At(Bt));return q}function S(q,ot=(At=>At)){const At=[],Bt=q.size();for(let Ee=0;Ee<Bt;Ee++)At.push(ot(q.get(Ee)));return At}function L(q,ot=(At=>At)){const At=[],Bt=q.size();for(let Ee=0;Ee<Bt;Ee++){const Ye=q.get(Ee),dn=Ye.size(),ni=[];for(let Pn=0;Pn<dn;Pn++)ni.push(ot(Ye.get(Pn)));At.push(ni)}return At}function G(q){return q[0].length<3&&(q=[q]),v(new r.Vector2_vec2,q,ot=>v(new r.Vector_vec2,ot,At=>At instanceof Array?{x:At[0],y:At[1]}:At))}function rt(q){for(let ot=0;ot<q.size();ot++)q.get(ot).delete();q.delete()}function vt(q){return q[0]instanceof Array?{x:q[0][0],y:q[0][1]}:typeof q[0]=="number"?{x:q[0]||0,y:q[1]||0}:q[0]}function Lt(q){return q[0]instanceof Array?{x:q[0][0],y:q[0][1],z:q[0][2]}:typeof q[0]=="number"?{x:q[0]||0,y:q[1]||0,z:q[2]||0}:q[0]}function Mt(q){return q=="EvenOdd"?0:q=="NonZero"?1:q=="Negative"?3:2}function It(q){return q=="Round"?1:q=="Miter"?2:0}const Ot=r.CrossSection;function Xt(q,ot="Positive"){if(q instanceof Ot)return q;{const At=G(q),Bt=new Ot(At,Mt(ot));return rt(At),Bt}}r.CrossSection.prototype.translate=function(...q){return this._Translate(vt(q))},r.CrossSection.prototype.scale=function(q){return typeof q=="number"?this._Scale({x:q,y:q}):this._Scale(vt([q]))},r.CrossSection.prototype.mirror=function(q){return this._Mirror(vt([q]))},r.CrossSection.prototype.warp=function(q){const ot=us(function(Bt){const Ee=Yt(Bt,"double"),Ye=Yt(Bt+8,"double"),dn=[Ee,Ye];q(dn),I(Bt,dn[0],"double"),I(Bt+8,dn[1],"double")},"vi"),At=this._Warp(ot);return fs(ot),At},r.CrossSection.prototype.decompose=function(){const q=this._Decompose(),ot=S(q);return q.delete(),ot},r.CrossSection.prototype.bounds=function(){const q=this._Bounds();return{min:["x","y"].map(ot=>q.min[ot]),max:["x","y"].map(ot=>q.max[ot])}},r.CrossSection.prototype.offset=function(q,ot="Round",At=2,Bt=0){return this._Offset(q,It(ot),At,Bt)},r.CrossSection.prototype.simplify=function(q=1e-6){return this._Simplify(q)},r.CrossSection.prototype.extrude=function(q,ot=0,At=0,Bt=[1,1],Ee=!1){Bt=vt([Bt]);const Ye=r._Extrude(this._ToPolygons(),q,ot,At,Bt);return Ee?Ye.translate([0,0,-q/2]):Ye},r.CrossSection.prototype.revolve=function(q=0,ot=360){return r._Revolve(this._ToPolygons(),q,ot)},r.CrossSection.prototype.add=function(q){return this._add(Xt(q))},r.CrossSection.prototype.subtract=function(q){return this._subtract(Xt(q))},r.CrossSection.prototype.intersect=function(q){return this._intersect(Xt(q))},r.CrossSection.prototype.toPolygons=function(){const q=this._ToPolygons(),ot=L(q,At=>[At.x,At.y]);return q.delete(),ot},r.Manifold.prototype.smoothOut=function(q=60,ot=0){return this._SmoothOut(q,ot)},r.Manifold.prototype.warp=function(q){const ot=us(function(Ee){const Ye=Yt(Ee,"double"),dn=Yt(Ee+8,"double"),ni=Yt(Ee+16,"double"),Pn=[Ye,dn,ni];q(Pn),I(Ee,Pn[0],"double"),I(Ee+8,Pn[1],"double"),I(Ee+16,Pn[2],"double")},"vi"),At=this._Warp(ot);fs(ot);const Bt=At.status();if(Bt!=="NoError")throw new r.ManifoldError(Bt);return At},r.Manifold.prototype.calculateNormals=function(q,ot=60){return this._CalculateNormals(q,ot)},r.Manifold.prototype.setProperties=function(q,ot){const At=this.numProp(),Bt=us(function(Ye,dn,ni){const Pn=[];for(let En=0;En<q;++En)Pn[En]=Yt(Ye+8*En,"double");const Ai=[];for(let En=0;En<3;++En)Ai[En]=Yt(dn+8*En,"double");const Ga=[];for(let En=0;En<At;++En)Ga[En]=Yt(ni+8*En,"double");ot(Pn,Ai,Ga);for(let En=0;En<q;++En)I(Ye+8*En,Pn[En],"double")},"viii"),Ee=this._SetProperties(q,Bt);return fs(Bt),Ee},r.Manifold.prototype.translate=function(...q){return this._Translate(Lt(q))},r.Manifold.prototype.rotate=function(q,ot,At){return Array.isArray(q)?this._Rotate(...q):this._Rotate(q,ot||0,At||0)},r.Manifold.prototype.scale=function(q){return typeof q=="number"?this._Scale({x:q,y:q,z:q}):this._Scale(Lt([q]))},r.Manifold.prototype.mirror=function(q){return this._Mirror(Lt([q]))},r.Manifold.prototype.trimByPlane=function(q,ot=0){return this._TrimByPlane(Lt([q]),ot)},r.Manifold.prototype.slice=function(q=0){const ot=this._Slice(q),At=new Ot(ot,Mt("Positive"));return rt(ot),At},r.Manifold.prototype.project=function(){const q=this._Project(),ot=new Ot(q,Mt("Positive"));return rt(q),ot},r.Manifold.prototype.split=function(q){const ot=this._Split(q),At=S(ot);return ot.delete(),At},r.Manifold.prototype.splitByPlane=function(q,ot=0){const At=this._SplitByPlane(Lt([q]),ot),Bt=S(At);return At.delete(),Bt},r.Manifold.prototype.decompose=function(){const q=this._Decompose(),ot=S(q);return q.delete(),ot},r.Manifold.prototype.boundingBox=function(){const q=this._boundingBox();return{min:["x","y","z"].map(ot=>q.min[ot]),max:["x","y","z"].map(ot=>q.max[ot])}};class be{constructor({numProp:ot=3,triVerts:At=new Uint32Array,vertProperties:Bt=new Float32Array,mergeFromVert:Ee,mergeToVert:Ye,runIndex:dn,runOriginalID:ni,faceID:Pn,halfedgeTangent:Ai,runTransform:Ga}={}){this.numProp=ot,this.triVerts=At,this.vertProperties=Bt,this.mergeFromVert=Ee,this.mergeToVert=Ye,this.runIndex=dn,this.runOriginalID=ni,this.faceID=Pn,this.halfedgeTangent=Ai,this.runTransform=Ga}get numTri(){return this.triVerts.length/3}get numVert(){return this.vertProperties.length/this.numProp}get numRun(){return this.runOriginalID.length}merge(){const{changed:ot,mesh:At}=r._Merge(this);return Object.assign(this,{...At}),ot}verts(ot){return this.triVerts.subarray(3*ot,3*(ot+1))}position(ot){return this.vertProperties.subarray(this.numProp*ot,this.numProp*ot+3)}extras(ot){return this.vertProperties.subarray(this.numProp*ot+3,this.numProp*(ot+1))}tangent(ot){return this.halfedgeTangent.subarray(4*ot,4*(ot+1))}transform(ot){const At=new Array(16);for(const Bt of[0,1,2,3])for(const Ee of[0,1,2])At[4*Bt+Ee]=this.runTransform[12*ot+3*Bt+Ee];return At[15]=1,At}}r.Mesh=be,r.Manifold.prototype.getMesh=function(q=-1){return new be(this._GetMeshJS(q))},r.ManifoldError=function(ot,...At){let Bt="Unknown error";switch(ot){case"NonFiniteVertex":Bt="Non-finite vertex";break;case"NotManifold":Bt="Not manifold";break;case"VertexOutOfBounds":Bt="Vertex index out of bounds";break;case"PropertiesWrongLength":Bt="Properties have wrong length";break;case"MissingPositionProperties":Bt="Less than three properties";break;case"MergeVectorsDifferentLengths":Bt="Merge vectors have different lengths";break;case"MergeIndexOutOfBounds":Bt="Merge index out of bounds";break;case"TransformWrongLength":Bt="Transform vector has wrong length";break;case"RunIndexWrongLength":Bt="Run index vector has wrong length";break;case"FaceIDWrongLength":Bt="Face ID vector has wrong length";case"InvalidConstruction":Bt="Manifold constructed with invalid parameters"}const Ee=Error.apply(this,[Bt,...At]);Ee.name=this.name="ManifoldError",this.message=Ee.message,this.stack=Ee.stack,this.code=ot},r.ManifoldError.prototype=Object.create(Error.prototype,{constructor:{value:r.ManifoldError,writable:!0,configurable:!0}}),r.CrossSection=function(q,ot="Positive"){const At=G(q),Bt=new Ot(At,Mt(ot));return rt(At),Bt},r.CrossSection.ofPolygons=function(q,ot="Positive"){return new r.CrossSection(q,ot)},r.CrossSection.square=function(...q){let ot;q.length==0?ot={x:1,y:1}:typeof q[0]=="number"?ot={x:q[0],y:q[0]}:ot=vt(q);const At=q[1]||!1;return r._Square(ot,At)},r.CrossSection.circle=function(q,ot=0){return r._Circle(q,ot)};function je(q){return function(...ot){ot.length==1&&(ot=ot[0]);const At=new r.Vector_crossSection;for(const Ee of ot)At.push_back(Xt(Ee));const Bt=r["_crossSection"+q](At);return At.delete(),Bt}}r.CrossSection.compose=je("Compose"),r.CrossSection.union=je("UnionN"),r.CrossSection.difference=je("DifferenceN"),r.CrossSection.intersection=je("IntersectionN");function Cn(q,ot){v(q,ot,At=>At instanceof Array?{x:At[0],y:At[1]}:At)}r.CrossSection.hull=function(...q){q.length==1&&(q=q[0]);let ot=new r.Vector_vec2;for(const Bt of q)if(Bt instanceof Ot)r._crossSectionCollectVertices(ot,Bt);else if(Bt instanceof Array&&Bt.length==2&&typeof Bt[0]=="number")ot.push_back({x:Bt[0],y:Bt[1]});else if(Bt.x)ot.push_back(Bt);else{const Ye=Bt[0].length==2&&typeof Bt[0][0]=="number"||Bt[0].x?[Bt]:Bt;for(const dn of Ye)Cn(ot,dn)}const At=r._crossSectionHullPoints(ot);return ot.delete(),At},r.CrossSection.prototype=Object.create(Ot.prototype),Object.defineProperty(r.CrossSection,Symbol.hasInstance,{get:()=>q=>q instanceof Ot});const yn=r.Manifold;r.Manifold=function(q){const ot=new yn(q),At=ot.status();if(At!=="NoError")throw new r.ManifoldError(At);return ot},r.Manifold.ofMesh=function(q){return new r.Manifold(q)},r.Manifold.tetrahedron=function(){return r._Tetrahedron()},r.Manifold.cube=function(...q){let ot;q.length==0?ot={x:1,y:1,z:1}:typeof q[0]=="number"?ot={x:q[0],y:q[0],z:q[0]}:ot=Lt(q);const At=q[1]||!1;return r._Cube(ot,At)},r.Manifold.cylinder=function(q,ot,At=-1,Bt=0,Ee=!1){return r._Cylinder(q,ot,At,Bt,Ee)},r.Manifold.sphere=function(q,ot=0){return r._Sphere(q,ot)},r.Manifold.smooth=function(q,ot=[]){const At=new r.Vector_smoothness;v(At,ot);const Bt=r._Smooth(q,At);return At.delete(),Bt},r.Manifold.extrude=function(q,ot,At=0,Bt=0,Ee=[1,1],Ye=!1){return(q instanceof Ot?q:r.CrossSection(q,"Positive")).extrude(ot,At,Bt,Ee,Ye)},r.Manifold.revolve=function(q,ot=0,At=360){return(q instanceof Ot?q:r.CrossSection(q,"Positive")).revolve(ot,At)},r.Manifold.reserveIDs=function(q){return r._ReserveIDs(q)},r.Manifold.compose=function(q){const ot=new r.Vector_manifold;v(ot,q);const At=r._manifoldCompose(ot);return ot.delete(),At};function gi(q){return function(...ot){ot.length==1&&(ot=ot[0]);const At=new r.Vector_manifold;for(const Ee of ot)At.push_back(Ee);const Bt=r["_manifold"+q+"N"](At);return At.delete(),Bt}}r.Manifold.union=gi("Union"),r.Manifold.difference=gi("Difference"),r.Manifold.intersection=gi("Intersection"),r.Manifold.levelSet=function(q,ot,At,Bt=0,Ee=-1){const Ye={min:{x:ot.min[0],y:ot.min[1],z:ot.min[2]},max:{x:ot.max[0],y:ot.max[1],z:ot.max[2]}},dn=us(function(Pn){const Ai=Yt(Pn,"double"),Ga=Yt(Pn+8,"double"),En=Yt(Pn+16,"double");return q([Ai,Ga,En])},"di"),ni=r._LevelSet(dn,Ye,At,Bt,Ee);return fs(dn),ni};function Bi(q,ot){v(q,ot,At=>At instanceof Array?{x:At[0],y:At[1],z:At[2]}:At)}r.Manifold.hull=function(...q){q.length==1&&(q=q[0]);let ot=new r.Vector_vec3;for(const Bt of q)Bt instanceof yn?r._manifoldCollectVertices(ot,Bt):Bt instanceof Array&&Bt.length==3&&typeof Bt[0]=="number"?ot.push_back({x:Bt[0],y:Bt[1],z:Bt[2]}):Bt.x?ot.push_back(Bt):Bi(ot,Bt);const At=r._manifoldHullPoints(ot);return ot.delete(),At},r.Manifold.prototype=Object.create(yn.prototype),Object.defineProperty(r.Manifold,Symbol.hasInstance,{get:()=>q=>q instanceof yn}),r.triangulate=function(q,ot=-1,At=!0){const Bt=G(q),Ee=S(r._Triangulate(Bt,ot,At),Ye=>[Ye[0],Ye[1],Ye[2]]);return rt(Bt),Ee}};var x=Object.assign({},r),M="";function A(v){return r.locateFile?r.locateFile(v,M):M+v}var R,E;if(p){var y=g("fs"),z=g("path");M=g("url").fileURLToPath(new URL("/gridfinity-base-adder/assets/manifold-B8h_vZ5O.js",import.meta.url)),E=v=>{v=cn(v)?new URL(v):z.normalize(v);var S=y.readFileSync(v);return S},R=(v,S=!0)=>(v=cn(v)?new URL(v):z.normalize(v),new Promise((L,G)=>{y.readFile(v,S?void 0:"utf8",(rt,vt)=>{rt?G(rt):L(S?vt.buffer:vt)})})),!r.thisProgram&&process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2)}else(d||m)&&(m?M=self.location.href:typeof document<"u"&&document.currentScript&&(M=document.currentScript.src),s&&(M=s),M.startsWith("blob:")?M="":M=M.substr(0,M.replace(/[?#].*/,"").lastIndexOf("/")+1),m&&(E=v=>{var S=new XMLHttpRequest;return S.open("GET",v,!1),S.responseType="arraybuffer",S.send(null),new Uint8Array(S.response)}),R=v=>cn(v)?new Promise((S,L)=>{var G=new XMLHttpRequest;G.open("GET",v,!0),G.responseType="arraybuffer",G.onload=()=>{(G.status==200||G.status==0&&G.response)&&L(G.response),S(G.status)},G.onerror=S,G.send(null)}):fetch(v,{credentials:"same-origin"}).then(S=>S.ok?S.arrayBuffer():Promise.reject(new Error(S.status+" : "+S.url))));r.print||console.log.bind(console);var N=r.printErr||console.error.bind(console);Object.assign(r,x),x=null,r.arguments&&r.arguments,r.thisProgram&&r.thisProgram,r.quit&&r.quit;var O;r.wasmBinary&&(O=r.wasmBinary);var B,P=!1,F,Z,C,U,k,j,it,pt;function xt(){var v=B.buffer;r.HEAP8=F=new Int8Array(v),r.HEAP16=C=new Int16Array(v),r.HEAPU8=Z=new Uint8Array(v),r.HEAPU16=U=new Uint16Array(v),r.HEAP32=k=new Int32Array(v),r.HEAPU32=j=new Uint32Array(v),r.HEAPF32=it=new Float32Array(v),r.HEAPF64=pt=new Float64Array(v)}var H=[],Y=[],st=[];function Pt(){if(r.preRun)for(typeof r.preRun=="function"&&(r.preRun=[r.preRun]);r.preRun.length;)ut(r.preRun.shift());Oe(H)}function Ut(){Oe(Y)}function V(){if(r.postRun)for(typeof r.postRun=="function"&&(r.postRun=[r.postRun]);r.postRun.length;)Vt(r.postRun.shift());Oe(st)}function ut(v){H.unshift(v)}function Et(v){Y.unshift(v)}function Vt(v){st.unshift(v)}var jt=0,lt=null;function St(v){jt++,r.monitorRunDependencies?.(jt)}function kt(v){if(jt--,r.monitorRunDependencies?.(jt),jt==0&&lt){var S=lt;lt=null,S()}}function ie(v){r.onAbort?.(v),v="Aborted("+v+")",N(v),P=!0,v+=". Build with -sASSERTIONS for more info.";var S=new WebAssembly.RuntimeError(v);throw c(S),S}var ae="data:application/octet-stream;base64,",Ne=v=>v.startsWith(ae),cn=v=>v.startsWith("file://");function de(){if(r.locateFile){var v="manifold.wasm";return Ne(v)?v:A(v)}return new URL("/gridfinity-base-adder/assets/manifold-D9yvTBHx.wasm",import.meta.url).href}var le;function he(v){if(v==le&&O)return new Uint8Array(O);if(E)return E(v);throw"both async and sync fetching of the wasm failed"}function re(v){return O?Promise.resolve().then(()=>he(v)):R(v).then(S=>new Uint8Array(S),()=>he(v))}function Ze(v,S,L){return re(v).then(G=>WebAssembly.instantiate(G,S)).then(L,G=>{N(`failed to asynchronously prepare wasm: ${G}`),ie(G)})}function W(v,S,L,G){return!v&&typeof WebAssembly.instantiateStreaming=="function"&&!Ne(S)&&!cn(S)&&!p&&typeof fetch=="function"?fetch(S,{credentials:"same-origin"}).then(rt=>{var vt=WebAssembly.instantiateStreaming(rt,L);return vt.then(G,function(Lt){return N(`wasm streaming compile failed: ${Lt}`),N("falling back to ArrayBuffer instantiation"),Ze(S,L,G)})}):Ze(S,L,G)}function Je(){return{a:_c}}function Ce(){var v=Je();function S(G,rt){return Ti=G.exports,Ti=vc(Ti),B=Ti.J,xt(),sn=Ti.M,Et(Ti.K),kt(),Ti}St();function L(G){S(G.instance)}if(r.instantiateWasm)try{return r.instantiateWasm(v,S)}catch(G){N(`Module.instantiateWasm callback failed with error: ${G}`),c(G)}return le||(le=de()),W(O,le,v,L).catch(c),{}}var Oe=v=>{for(;v.length>0;)v.shift()(r)};function Yt(v,S="i8"){switch(S.endsWith("*")&&(S="*"),S){case"i1":return F[v>>>0];case"i8":return F[v>>>0];case"i16":return C[v>>>1>>>0];case"i32":return k[v>>>2>>>0];case"i64":ie("to do getValue(i64) use WASM_BIGINT");case"float":return it[v>>>2>>>0];case"double":return pt[v>>>3>>>0];case"*":return j[v>>>2>>>0];default:ie(`invalid type for getValue: ${S}`)}}r.noExitRuntime;function I(v,S,L="i8"){switch(L.endsWith("*")&&(L="*"),L){case"i1":F[v>>>0]=S;break;case"i8":F[v>>>0]=S;break;case"i16":C[v>>>1>>>0]=S;break;case"i32":k[v>>>2>>>0]=S;break;case"i64":ie("to do setValue(i64) use WASM_BIGINT");case"float":it[v>>>2>>>0]=S;break;case"double":pt[v>>>3>>>0]=S;break;case"*":j[v>>>2>>>0]=S;break;default:ie(`invalid type for setValue: ${L}`)}}class T{constructor(S){this.excPtr=S,this.ptr=S-24}set_type(S){j[this.ptr+4>>>2>>>0]=S}get_type(){return j[this.ptr+4>>>2>>>0]}set_destructor(S){j[this.ptr+8>>>2>>>0]=S}get_destructor(){return j[this.ptr+8>>>2>>>0]}set_caught(S){S=S?1:0,F[this.ptr+12>>>0]=S}get_caught(){return F[this.ptr+12>>>0]!=0}set_rethrown(S){S=S?1:0,F[this.ptr+13>>>0]=S}get_rethrown(){return F[this.ptr+13>>>0]!=0}init(S,L){this.set_adjusted_ptr(0),this.set_type(S),this.set_destructor(L)}set_adjusted_ptr(S){j[this.ptr+16>>>2>>>0]=S}get_adjusted_ptr(){return j[this.ptr+16>>>2>>>0]}get_exception_ptr(){var S=hs(this.get_type());if(S)return j[this.excPtr>>>2>>>0];var L=this.get_adjusted_ptr();return L!==0?L:this.excPtr}}var $=0;function bt(v,S,L){v>>>=0,S>>>=0,L>>>=0;var G=new T(v);throw G.init(S,L),$=v,$}var Ct=()=>{ie("")},_t={},ce=v=>{for(;v.length;){var S=v.pop(),L=v.pop();L(S)}};function Gt(v){return this.fromWireType(j[v>>>2>>>0])}var ee={},ge={},Ft={},Ht,Jt=v=>{throw new Ht(v)},qt=(v,S,L)=>{v.forEach(function(Mt){Ft[Mt]=S});function G(Mt){var It=L(Mt);It.length!==v.length&&Jt("Mismatched type converter count");for(var Ot=0;Ot<v.length;++Ot)zt(v[Ot],It[Ot])}var rt=new Array(S.length),vt=[],Lt=0;S.forEach((Mt,It)=>{ge.hasOwnProperty(Mt)?rt[It]=ge[Mt]:(vt.push(Mt),ee.hasOwnProperty(Mt)||(ee[Mt]=[]),ee[Mt].push(()=>{rt[It]=ge[Mt],++Lt,Lt===vt.length&&G(rt)}))}),vt.length===0&&G(rt)},Wt=function(v){v>>>=0;var S=_t[v];delete _t[v];var L=S.rawConstructor,G=S.rawDestructor,rt=S.fields,vt=rt.map(Lt=>Lt.getterReturnType).concat(rt.map(Lt=>Lt.setterArgumentType));qt([v],vt,Lt=>{var Mt={};return rt.forEach((It,Ot)=>{var Xt=It.fieldName,be=Lt[Ot],je=It.getter,Cn=It.getterContext,yn=Lt[Ot+rt.length],gi=It.setter,Bi=It.setterContext;Mt[Xt]={read:q=>be.fromWireType(je(Cn,q)),write:(q,ot)=>{var At=[];gi(Bi,q,yn.toWireType(At,ot)),ce(At)}}}),[{name:S.name,fromWireType:It=>{var Ot={};for(var Xt in Mt)Ot[Xt]=Mt[Xt].read(It);return G(It),Ot},toWireType:(It,Ot)=>{for(var Xt in Mt)if(!(Xt in Ot))throw new TypeError(`Missing field: "${Xt}"`);var be=L();for(Xt in Mt)Mt[Xt].write(be,Ot[Xt]);return It!==null&&It.push(G,be),be},argPackAdvance:_e,readValueFromPointer:Gt,destructorFunction:G}]})};function De(v,S,L,G,rt){}var Q=()=>{for(var v=new Array(256),S=0;S<256;++S)v[S]=String.fromCharCode(S);Zt=v},Zt,Nt=v=>{for(var S="",L=v;Z[L>>>0];)S+=Zt[Z[L++>>>0]];return S},Kt,yt=v=>{throw new Kt(v)};function wt(v,S,L={}){var G=S.name;if(v||yt(`type "${G}" must have a positive integer typeid pointer`),ge.hasOwnProperty(v)){if(L.ignoreDuplicateRegistrations)return;yt(`Cannot register type '${G}' twice`)}if(ge[v]=S,delete Ft[v],ee.hasOwnProperty(v)){var rt=ee[v];delete ee[v],rt.forEach(vt=>vt())}}function zt(v,S,L={}){if(!("argPackAdvance"in S))throw new TypeError("registerType registeredInstance requires argPackAdvance");return wt(v,S,L)}var _e=8;function rn(v,S,L,G){v>>>=0,S>>>=0,S=Nt(S),zt(v,{name:S,fromWireType:function(rt){return!!rt},toWireType:function(rt,vt){return vt?L:G},argPackAdvance:_e,readValueFromPointer:function(rt){return this.fromWireType(Z[rt>>>0])},destructorFunction:null})}var We=v=>({count:v.count,deleteScheduled:v.deleteScheduled,preservePointerOnDelete:v.preservePointerOnDelete,ptr:v.ptr,ptrType:v.ptrType,smartPtr:v.smartPtr,smartPtrType:v.smartPtrType}),Bn=v=>{function S(L){return L.$$.ptrType.registeredClass.name}yt(S(v)+" instance already deleted")},pi=!1,Jr=v=>{},ts=v=>{v.smartPtr?v.smartPtrType.rawDestructor(v.smartPtr):v.ptrType.registeredClass.rawDestructor(v.ptr)},Ba=v=>{v.count.value-=1;var S=v.count.value===0;S&&ts(v)},mr=(v,S,L)=>{if(S===L)return v;if(L.baseClass===void 0)return null;var G=mr(v,S,L.baseClass);return G===null?null:L.downcast(G)},za={},es=()=>Object.keys(Qi).length,Ki=()=>{var v=[];for(var S in Qi)Qi.hasOwnProperty(S)&&v.push(Qi[S]);return v},$n=[],bn=()=>{for(;$n.length;){var v=$n.pop();v.$$.deleteScheduled=!1,v.delete()}},Rn,Fi=v=>{Rn=v,$n.length&&Rn&&Rn(bn)},gr=()=>{r.getInheritedInstanceCount=es,r.getLiveInheritedInstances=Ki,r.flushPendingDeletes=bn,r.setDelayFunction=Fi},Qi={},Vs=(v,S)=>{for(S===void 0&&yt("ptr should not be undefined");v.baseClass;)S=v.upcast(S),v=v.baseClass;return S},ns=(v,S)=>(S=Vs(v,S),Qi[S]),$i=(v,S)=>{(!S.ptrType||!S.ptr)&&Jt("makeClassHandle requires ptr and ptrType");var L=!!S.smartPtrType,G=!!S.smartPtr;return L!==G&&Jt("Both smartPtrType and smartPtr must be specified"),S.count={value:1},Si(Object.create(v,{$$:{value:S,writable:!0}}))};function is(v){var S=this.getPointee(v);if(!S)return this.destructor(v),null;var L=ns(this.registeredClass,S);if(L!==void 0){if(L.$$.count.value===0)return L.$$.ptr=S,L.$$.smartPtr=v,L.clone();var G=L.clone();return this.destructor(v),G}function rt(){return this.isSmartPointer?$i(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:S,smartPtrType:this,smartPtr:v}):$i(this.registeredClass.instancePrototype,{ptrType:this,ptr:v})}var vt=this.registeredClass.getActualType(S),Lt=za[vt];if(!Lt)return rt.call(this);var Mt;this.isConst?Mt=Lt.constPointerType:Mt=Lt.pointerType;var It=mr(S,this.registeredClass,Mt.registeredClass);return It===null?rt.call(this):this.isSmartPointer?$i(Mt.registeredClass.instancePrototype,{ptrType:Mt,ptr:It,smartPtrType:this,smartPtr:v}):$i(Mt.registeredClass.instancePrototype,{ptrType:Mt,ptr:It})}var Si=v=>typeof FinalizationRegistry>"u"?(Si=S=>S,v):(pi=new FinalizationRegistry(S=>{Ba(S.$$)}),Si=S=>{var L=S.$$,G=!!L.smartPtr;if(G){var rt={$$:L};pi.register(S,rt,S)}return S},Jr=S=>pi.unregister(S),Si(v)),Sa=()=>{Object.assign(Ji.prototype,{isAliasOf(v){if(!(this instanceof Ji)||!(v instanceof Ji))return!1;var S=this.$$.ptrType.registeredClass,L=this.$$.ptr;v.$$=v.$$;for(var G=v.$$.ptrType.registeredClass,rt=v.$$.ptr;S.baseClass;)L=S.upcast(L),S=S.baseClass;for(;G.baseClass;)rt=G.upcast(rt),G=G.baseClass;return S===G&&L===rt},clone(){if(this.$$.ptr||Bn(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var v=Si(Object.create(Object.getPrototypeOf(this),{$$:{value:We(this.$$)}}));return v.$$.count.value+=1,v.$$.deleteScheduled=!1,v},delete(){this.$$.ptr||Bn(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&yt("Object already scheduled for deletion"),Jr(this),Ba(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||Bn(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&yt("Object already scheduled for deletion"),$n.push(this),$n.length===1&&Rn&&Rn(bn),this.$$.deleteScheduled=!0,this}})};function Ji(){}var mi=(v,S)=>Object.defineProperty(S,"name",{value:v}),w=(v,S,L)=>{if(v[S].overloadTable===void 0){var G=v[S];v[S]=function(...rt){return v[S].overloadTable.hasOwnProperty(rt.length)||yt(`Function '${L}' called with an invalid number of arguments (${rt.length}) - expects one of (${v[S].overloadTable})!`),v[S].overloadTable[rt.length].apply(this,rt)},v[S].overloadTable=[],v[S].overloadTable[G.argCount]=G}},J=(v,S,L)=>{r.hasOwnProperty(v)?((L===void 0||r[v].overloadTable!==void 0&&r[v].overloadTable[L]!==void 0)&&yt(`Cannot register public name '${v}' twice`),w(r,v,v),r.hasOwnProperty(L)&&yt(`Cannot register multiple overloads of a function with the same number of arguments (${L})!`),r[v].overloadTable[L]=S):(r[v]=S,L!==void 0&&(r[v].numArguments=L))},mt=48,ht=57,at=v=>{if(v===void 0)return"_unknown";v=v.replace(/[^a-zA-Z0-9_]/g,"$");var S=v.charCodeAt(0);return S>=mt&&S<=ht?`_${v}`:v};function Qt(v,S,L,G,rt,vt,Lt,Mt){this.name=v,this.constructor=S,this.instancePrototype=L,this.rawDestructor=G,this.baseClass=rt,this.getActualType=vt,this.upcast=Lt,this.downcast=Mt,this.pureVirtualFunctions=[]}var ne=(v,S,L)=>{for(;S!==L;)S.upcast||yt(`Expected null or instance of ${L.name}, got an instance of ${S.name}`),v=S.upcast(v),S=S.baseClass;return v};function $t(v,S){if(S===null)return this.isReference&&yt(`null is not a valid ${this.name}`),0;S.$$||yt(`Cannot pass "${as(S)}" as a ${this.name}`),S.$$.ptr||yt(`Cannot pass deleted object as a pointer of type ${this.name}`);var L=S.$$.ptrType.registeredClass,G=ne(S.$$.ptr,L,this.registeredClass);return G}function se(v,S){var L;if(S===null)return this.isReference&&yt(`null is not a valid ${this.name}`),this.isSmartPointer?(L=this.rawConstructor(),v!==null&&v.push(this.rawDestructor,L),L):0;(!S||!S.$$)&&yt(`Cannot pass "${as(S)}" as a ${this.name}`),S.$$.ptr||yt(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&S.$$.ptrType.isConst&&yt(`Cannot convert argument of type ${S.$$.smartPtrType?S.$$.smartPtrType.name:S.$$.ptrType.name} to parameter type ${this.name}`);var G=S.$$.ptrType.registeredClass;if(L=ne(S.$$.ptr,G,this.registeredClass),this.isSmartPointer)switch(S.$$.smartPtr===void 0&&yt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:S.$$.smartPtrType===this?L=S.$$.smartPtr:yt(`Cannot convert argument of type ${S.$$.smartPtrType?S.$$.smartPtrType.name:S.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:L=S.$$.smartPtr;break;case 2:if(S.$$.smartPtrType===this)L=S.$$.smartPtr;else{var rt=S.clone();L=this.rawShare(L,xn.toHandle(()=>rt.delete())),v!==null&&v.push(this.rawDestructor,L)}break;default:yt("Unsupporting sharing policy")}return L}function fe(v,S){if(S===null)return this.isReference&&yt(`null is not a valid ${this.name}`),0;S.$$||yt(`Cannot pass "${as(S)}" as a ${this.name}`),S.$$.ptr||yt(`Cannot pass deleted object as a pointer of type ${this.name}`),S.$$.ptrType.isConst&&yt(`Cannot convert argument of type ${S.$$.ptrType.name} to parameter type ${this.name}`);var L=S.$$.ptrType.registeredClass,G=ne(S.$$.ptr,L,this.registeredClass);return G}var ve=()=>{Object.assign(oe.prototype,{getPointee(v){return this.rawGetPointee&&(v=this.rawGetPointee(v)),v},destructor(v){this.rawDestructor?.(v)},argPackAdvance:_e,readValueFromPointer:Gt,fromWireType:is})};function oe(v,S,L,G,rt,vt,Lt,Mt,It,Ot,Xt){this.name=v,this.registeredClass=S,this.isReference=L,this.isConst=G,this.isSmartPointer=rt,this.pointeeType=vt,this.sharingPolicy=Lt,this.rawGetPointee=Mt,this.rawConstructor=It,this.rawShare=Ot,this.rawDestructor=Xt,!rt&&S.baseClass===void 0?G?(this.toWireType=$t,this.destructorFunction=null):(this.toWireType=fe,this.destructorFunction=null):this.toWireType=se}var ye=(v,S,L)=>{r.hasOwnProperty(v)||Jt("Replacing nonexistent public symbol"),r[v].overloadTable!==void 0&&L!==void 0?r[v].overloadTable[L]=S:(r[v]=S,r[v].argCount=L)},Ke=(v,S,L)=>{v=v.replace(/p/g,"i");var G=r["dynCall_"+v];return G(S,...L)},sn,on=v=>sn.get(v),tn=(v,S,L=[])=>{if(v.includes("j"))return Ke(v,S,L);var G=on(S)(...L);return v[0]=="p"?G>>>0:G},me=(v,S)=>(...L)=>tn(v,S,L),Ue=(v,S)=>{v=Nt(v);function L(){return v.includes("j")||v.includes("p")?me(v,S):on(S)}var G=L();return typeof G!="function"&&yt(`unknown function pointer with signature ${v}: ${S}`),G},Re=(v,S)=>{var L=mi(S,function(G){this.name=S,this.message=G;var rt=new Error(G).stack;rt!==void 0&&(this.stack=this.toString()+`
`+rt.replace(/^Error(:[^\n]*)?\n/,""))});return L.prototype=Object.create(v.prototype),L.prototype.constructor=L,L.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},L},zn,ta=v=>{var S=yr(v),L=Nt(S);return ha(S),L},wn=(v,S)=>{var L=[],G={};function rt(vt){if(!G[vt]&&!ge[vt]){if(Ft[vt]){Ft[vt].forEach(rt);return}L.push(vt),G[vt]=!0}}throw S.forEach(rt),new zn(`${v}: `+L.map(ta).join([", "]))};function Mi(v,S,L,G,rt,vt,Lt,Mt,It,Ot,Xt,be,je){v>>>=0,S>>>=0,L>>>=0,G>>>=0,rt>>>=0,vt>>>=0,Lt>>>=0,Mt>>>=0,It>>>=0,Ot>>>=0,Xt>>>=0,be>>>=0,je>>>=0,Xt=Nt(Xt),vt=Ue(rt,vt),Mt&&=Ue(Lt,Mt),Ot&&=Ue(It,Ot),je=Ue(be,je);var Cn=at(Xt);J(Cn,function(){wn(`Cannot construct ${Xt} due to unbound types`,[G])}),qt([v,S,L],G?[G]:[],yn=>{yn=yn[0];var gi,Bi;G?(gi=yn.registeredClass,Bi=gi.instancePrototype):Bi=Ji.prototype;var q=mi(Xt,function(...dn){if(Object.getPrototypeOf(this)!==ot)throw new Kt("Use 'new' to construct "+Xt);if(At.constructor_body===void 0)throw new Kt(Xt+" has no accessible constructor");var ni=At.constructor_body[dn.length];if(ni===void 0)throw new Kt(`Tried to invoke ctor of ${Xt} with invalid number of parameters (${dn.length}) - expected (${Object.keys(At.constructor_body).toString()}) parameters instead!`);return ni.apply(this,dn)}),ot=Object.create(Bi,{constructor:{value:q}});q.prototype=ot;var At=new Qt(Xt,q,ot,je,gi,vt,Mt,Ot);At.baseClass&&(At.baseClass.__derivedClasses??=[],At.baseClass.__derivedClasses.push(At));var Bt=new oe(Xt,At,!0,!1,!1),Ee=new oe(Xt+"*",At,!1,!1,!1),Ye=new oe(Xt+" const*",At,!1,!0,!1);return za[v]={pointerType:Ee,constPointerType:Ye},ye(Cn,q),[Bt,Ee,Ye]})}var Qe=(v,S)=>{for(var L=[],G=0;G<v;G++)L.push(j[S+G*4>>>2>>>0]);return L};function Hn(v){for(var S=1;S<v.length;++S)if(v[S]!==null&&v[S].destructorFunction===void 0)return!0;return!1}function Dn(v,S){if(!(v instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof v} which is not a function`);var L=mi(v.name||"unknownFunctionName",function(){});L.prototype=v.prototype;var G=new L,rt=v.apply(G,S);return rt instanceof Object?rt:G}function jn(v,S,L,G){for(var rt=Hn(v),vt=v.length,Lt="",Mt="",It=0;It<vt-2;++It)Lt+=(It!==0?", ":"")+"arg"+It,Mt+=(It!==0?", ":"")+"arg"+It+"Wired";var Ot=`
        return function (${Lt}) {
        if (arguments.length !== ${vt-2}) {
          throwBindingError('function ' + humanName + ' called with ' + arguments.length + ' arguments, expected ${vt-2}');
        }`;rt&&(Ot+=`var destructors = [];
`);var Xt=rt?"destructors":"null",be=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];S&&(Ot+="var thisWired = classParam['toWireType']("+Xt+`, this);
`);for(var It=0;It<vt-2;++It)Ot+="var arg"+It+"Wired = argType"+It+"['toWireType']("+Xt+", arg"+It+`);
`,be.push("argType"+It);if(S&&(Mt="thisWired"+(Mt.length>0?", ":"")+Mt),Ot+=(L||G?"var rv = ":"")+"invoker(fn"+(Mt.length>0?", ":"")+Mt+`);
`,rt)Ot+=`runDestructors(destructors);
`;else for(var It=S?1:2;It<v.length;++It){var je=It===1?"thisWired":"arg"+(It-2)+"Wired";v[It].destructorFunction!==null&&(Ot+=`${je}_dtor(${je});
`,be.push(`${je}_dtor`))}return L&&(Ot+=`var ret = retType['fromWireType'](rv);
return ret;
`),Ot+=`}
`,[be,Ot]}function On(v,S,L,G,rt,vt){var Lt=S.length;Lt<2&&yt("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var Mt=S[1]!==null&&L!==null,It=Hn(S),Ot=S[0].name!=="void",Xt=[v,yt,G,rt,ce,S[0],S[1]],be=0;be<Lt-2;++be)Xt.push(S[be+2]);if(!It)for(var be=Mt?1:2;be<S.length;++be)S[be].destructorFunction!==null&&Xt.push(S[be].destructorFunction);let[je,Cn]=jn(S,Mt,Ot,vt);je.push(Cn);var yn=Dn(Function,je)(...Xt);return mi(v,yn)}var _r=function(v,S,L,G,rt,vt){v>>>=0,L>>>=0,G>>>=0,rt>>>=0,vt>>>=0;var Lt=Qe(S,L);rt=Ue(G,rt),qt([],[v],Mt=>{Mt=Mt[0];var It=`constructor ${Mt.name}`;if(Mt.registeredClass.constructor_body===void 0&&(Mt.registeredClass.constructor_body=[]),Mt.registeredClass.constructor_body[S-1]!==void 0)throw new Kt(`Cannot register multiple constructors with identical number of parameters (${S-1}) for class '${Mt.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return Mt.registeredClass.constructor_body[S-1]=()=>{wn(`Cannot construct ${Mt.name} due to unbound types`,Lt)},qt([],Lt,Ot=>(Ot.splice(1,0,null),Mt.registeredClass.constructor_body[S-1]=On(It,Ot,null,rt,vt),[])),[]})},bi=v=>{v=v.trim();const S=v.indexOf("(");return S!==-1?v.substr(0,S):v},hf=function(v,S,L,G,rt,vt,Lt,Mt,It){v>>>=0,S>>>=0,G>>>=0,rt>>>=0,vt>>>=0,Lt>>>=0;var Ot=Qe(L,G);S=Nt(S),S=bi(S),vt=Ue(rt,vt),qt([],[v],Xt=>{Xt=Xt[0];var be=`${Xt.name}.${S}`;S.startsWith("@@")&&(S=Symbol[S.substring(2)]),Mt&&Xt.registeredClass.pureVirtualFunctions.push(S);function je(){wn(`Cannot call ${be} due to unbound types`,Ot)}var Cn=Xt.registeredClass.instancePrototype,yn=Cn[S];return yn===void 0||yn.overloadTable===void 0&&yn.className!==Xt.name&&yn.argCount===L-2?(je.argCount=L-2,je.className=Xt.name,Cn[S]=je):(w(Cn,S,be),Cn[S].overloadTable[L-2]=je),qt([],Ot,gi=>{var Bi=On(be,gi,Xt,vt,Lt,It);return Cn[S].overloadTable===void 0?(Bi.argCount=L-2,Cn[S]=Bi):Cn[S].overloadTable[L-2]=Bi,[]}),[]})},Zo=[],Ei=[];function Ii(v){v>>>=0,v>9&&--Ei[v+1]===0&&(Ei[v]=void 0,Zo.push(v))}var Ko=()=>Ei.length/2-5-Zo.length,Qo=()=>{Ei.push(0,1,void 0,1,null,1,!0,1,!1,1),r.count_emval_handles=Ko},xn={toValue:v=>(v||yt("Cannot use deleted val. handle = "+v),Ei[v]),toHandle:v=>{switch(v){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const S=Zo.pop()||Ei.length;return Ei[S]=v,Ei[S+1]=1,S}}}},vr={name:"emscripten::val",fromWireType:v=>{var S=xn.toValue(v);return Ii(v),S},toWireType:(v,S)=>xn.toHandle(S),argPackAdvance:_e,readValueFromPointer:Gt,destructorFunction:null};function $o(v){return v>>>=0,zt(v,vr)}var Jo=(v,S,L)=>{switch(S){case 1:return L?function(G){return this.fromWireType(F[G>>>0])}:function(G){return this.fromWireType(Z[G>>>0])};case 2:return L?function(G){return this.fromWireType(C[G>>>1>>>0])}:function(G){return this.fromWireType(U[G>>>1>>>0])};case 4:return L?function(G){return this.fromWireType(k[G>>>2>>>0])}:function(G){return this.fromWireType(j[G>>>2>>>0])};default:throw new TypeError(`invalid integer width (${S}): ${v}`)}};function sc(v,S,L,G){v>>>=0,S>>>=0,L>>>=0,S=Nt(S);function rt(){}rt.values={},zt(v,{name:S,constructor:rt,fromWireType:function(vt){return this.constructor.values[vt]},toWireType:(vt,Lt)=>Lt.value,argPackAdvance:_e,readValueFromPointer:Jo(S,L,G),destructorFunction:null}),J(S,rt)}var Ma=(v,S)=>{var L=ge[v];return L===void 0&&yt(`${S} has unknown type ${ta(v)}`),L};function fa(v,S,L){v>>>=0,S>>>=0;var G=Ma(v,"enum");S=Nt(S);var rt=G.constructor,vt=Object.create(G.constructor.prototype,{value:{value:L},constructor:{value:mi(`${G.name}_${S}`,function(){})}});rt.values[L]=vt,rt[S]=vt}var as=v=>{if(v===null)return"null";var S=typeof v;return S==="object"||S==="array"||S==="function"?v.toString():""+v},rs=(v,S)=>{switch(S){case 4:return function(L){return this.fromWireType(it[L>>>2>>>0])};case 8:return function(L){return this.fromWireType(pt[L>>>3>>>0])};default:throw new TypeError(`invalid float width (${S}): ${v}`)}},ba=function(v,S,L){v>>>=0,S>>>=0,L>>>=0,S=Nt(S),zt(v,{name:S,fromWireType:G=>G,toWireType:(G,rt)=>rt,argPackAdvance:_e,readValueFromPointer:rs(S,L),destructorFunction:null})};function tl(v,S,L,G,rt,vt,Lt){v>>>=0,L>>>=0,G>>>=0,rt>>>=0,vt>>>=0;var Mt=Qe(S,L);v=Nt(v),v=bi(v),rt=Ue(G,rt),J(v,function(){wn(`Cannot call ${v} due to unbound types`,Mt)},S-1),qt([],Mt,It=>{var Ot=[It[0],null].concat(It.slice(1));return ye(v,On(v,Ot,null,rt,vt,Lt),S-1),[]})}var Gs=(v,S,L)=>{switch(S){case 1:return L?G=>F[G>>>0]:G=>Z[G>>>0];case 2:return L?G=>C[G>>>1>>>0]:G=>U[G>>>1>>>0];case 4:return L?G=>k[G>>>2>>>0]:G=>j[G>>>2>>>0];default:throw new TypeError(`invalid integer width (${S}): ${v}`)}};function oc(v,S,L,G,rt){v>>>=0,S>>>=0,L>>>=0,S=Nt(S);var vt=Xt=>Xt;if(G===0){var Lt=32-8*L;vt=Xt=>Xt<<Lt>>>Lt}var Mt=S.includes("unsigned"),It=(Xt,be)=>{},Ot;Mt?Ot=function(Xt,be){return It(be,this.name),be>>>0}:Ot=function(Xt,be){return It(be,this.name),be},zt(v,{name:S,fromWireType:vt,toWireType:Ot,argPackAdvance:_e,readValueFromPointer:Gs(S,L,G!==0),destructorFunction:null})}function ks(v,S,L){v>>>=0,L>>>=0;var G=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],rt=G[S];function vt(Lt){var Mt=j[Lt>>>2>>>0],It=j[Lt+4>>>2>>>0];return new rt(F.buffer,It,Mt)}L=Nt(L),zt(v,{name:L,fromWireType:vt,argPackAdvance:_e,readValueFromPointer:vt},{ignoreDuplicateRegistrations:!0})}function Xs(v,S){v>>>=0,$o(v)}var lc=(v,S,L,G)=>{if(L>>>=0,!(G>0))return 0;for(var rt=L,vt=L+G-1,Lt=0;Lt<v.length;++Lt){var Mt=v.charCodeAt(Lt);if(Mt>=55296&&Mt<=57343){var It=v.charCodeAt(++Lt);Mt=65536+((Mt&1023)<<10)|It&1023}if(Mt<=127){if(L>=vt)break;S[L++>>>0]=Mt}else if(Mt<=2047){if(L+1>=vt)break;S[L++>>>0]=192|Mt>>6,S[L++>>>0]=128|Mt&63}else if(Mt<=65535){if(L+2>=vt)break;S[L++>>>0]=224|Mt>>12,S[L++>>>0]=128|Mt>>6&63,S[L++>>>0]=128|Mt&63}else{if(L+3>=vt)break;S[L++>>>0]=240|Mt>>18,S[L++>>>0]=128|Mt>>12&63,S[L++>>>0]=128|Mt>>6&63,S[L++>>>0]=128|Mt&63}}return S[L>>>0]=0,L-rt},ci=(v,S,L)=>lc(v,Z,S,L),Ha=v=>{for(var S=0,L=0;L<v.length;++L){var G=v.charCodeAt(L);G<=127?S++:G<=2047?S+=2:G>=55296&&G<=57343?(S+=4,++L):S+=3}return S},ss=typeof TextDecoder<"u"?new TextDecoder:void 0,os=(v,S,L)=>{S>>>=0;for(var G=S+L,rt=S;v[rt]&&!(rt>=G);)++rt;if(rt-S>16&&v.buffer&&ss)return ss.decode(v.subarray(S,rt));for(var vt="";S<rt;){var Lt=v[S++];if(!(Lt&128)){vt+=String.fromCharCode(Lt);continue}var Mt=v[S++]&63;if((Lt&224)==192){vt+=String.fromCharCode((Lt&31)<<6|Mt);continue}var It=v[S++]&63;if((Lt&240)==224?Lt=(Lt&15)<<12|Mt<<6|It:Lt=(Lt&7)<<18|Mt<<12|It<<6|v[S++]&63,Lt<65536)vt+=String.fromCharCode(Lt);else{var Ot=Lt-65536;vt+=String.fromCharCode(55296|Ot>>10,56320|Ot&1023)}}return vt},df=(v,S)=>(v>>>=0,v?os(Z,v,S):"");function el(v,S){v>>>=0,S>>>=0,S=Nt(S);var L=S==="std::string";zt(v,{name:S,fromWireType(G){var rt=j[G>>>2>>>0],vt=G+4,Lt;if(L)for(var Mt=vt,It=0;It<=rt;++It){var Ot=vt+It;if(It==rt||Z[Ot>>>0]==0){var Xt=Ot-Mt,be=df(Mt,Xt);Lt===void 0?Lt=be:(Lt+="\0",Lt+=be),Mt=Ot+1}}else{for(var je=new Array(rt),It=0;It<rt;++It)je[It]=String.fromCharCode(Z[vt+It>>>0]);Lt=je.join("")}return ha(G),Lt},toWireType(G,rt){rt instanceof ArrayBuffer&&(rt=new Uint8Array(rt));var vt,Lt=typeof rt=="string";Lt||rt instanceof Uint8Array||rt instanceof Uint8ClampedArray||rt instanceof Int8Array||yt("Cannot pass non-string to std::string"),L&&Lt?vt=Ha(rt):vt=rt.length;var Mt=Va(4+vt+1),It=Mt+4;if(j[Mt>>>2>>>0]=vt,L&&Lt)ci(rt,It,vt+1);else if(Lt)for(var Ot=0;Ot<vt;++Ot){var Xt=rt.charCodeAt(Ot);Xt>255&&(ha(It),yt("String has UTF-16 code units that do not fit in 8 bits")),Z[It+Ot>>>0]=Xt}else for(var Ot=0;Ot<vt;++Ot)Z[It+Ot>>>0]=rt[Ot];return G!==null&&G.push(ha,Mt),Mt},argPackAdvance:_e,readValueFromPointer:Gt,destructorFunction(G){ha(G)}})}var Ws=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,ls=(v,S)=>{for(var L=v,G=L>>1,rt=G+S/2;!(G>=rt)&&U[G>>>0];)++G;if(L=G<<1,L-v>32&&Ws)return Ws.decode(Z.subarray(v>>>0,L>>>0));for(var vt="",Lt=0;!(Lt>=S/2);++Lt){var Mt=C[v+Lt*2>>>1>>>0];if(Mt==0)break;vt+=String.fromCharCode(Mt)}return vt},js=(v,S,L)=>{if(L??=2147483647,L<2)return 0;L-=2;for(var G=S,rt=L<v.length*2?L/2:v.length,vt=0;vt<rt;++vt){var Lt=v.charCodeAt(vt);C[S>>>1>>>0]=Lt,S+=2}return C[S>>>1>>>0]=0,S-G},cc=v=>v.length*2,pf=(v,S)=>{for(var L=0,G="";!(L>=S/4);){var rt=k[v+L*4>>>2>>>0];if(rt==0)break;if(++L,rt>=65536){var vt=rt-65536;G+=String.fromCharCode(55296|vt>>10,56320|vt&1023)}else G+=String.fromCharCode(rt)}return G},mf=(v,S,L)=>{if(S>>>=0,L??=2147483647,L<4)return 0;for(var G=S,rt=G+L-4,vt=0;vt<v.length;++vt){var Lt=v.charCodeAt(vt);if(Lt>=55296&&Lt<=57343){var Mt=v.charCodeAt(++vt);Lt=65536+((Lt&1023)<<10)|Mt&1023}if(k[S>>>2>>>0]=Lt,S+=4,S+4>rt)break}return k[S>>>2>>>0]=0,S-G},gf=v=>{for(var S=0,L=0;L<v.length;++L){var G=v.charCodeAt(L);G>=55296&&G<=57343&&++L,S+=4}return S},nl=function(v,S,L){v>>>=0,S>>>=0,L>>>=0,L=Nt(L);var G,rt,vt,Lt;S===2?(G=ls,rt=js,Lt=cc,vt=Mt=>U[Mt>>>1>>>0]):S===4&&(G=pf,rt=mf,Lt=gf,vt=Mt=>j[Mt>>>2>>>0]),zt(v,{name:L,fromWireType:Mt=>{for(var It=j[Mt>>>2>>>0],Ot,Xt=Mt+4,be=0;be<=It;++be){var je=Mt+4+be*S;if(be==It||vt(je)==0){var Cn=je-Xt,yn=G(Xt,Cn);Ot===void 0?Ot=yn:(Ot+="\0",Ot+=yn),Xt=je+S}}return ha(Mt),Ot},toWireType:(Mt,It)=>{typeof It!="string"&&yt(`Cannot pass non-string to C++ string type ${L}`);var Ot=Lt(It),Xt=Va(4+Ot+S);return j[Xt>>>2>>>0]=Ot/S,rt(It,Xt+4,Ot+S),Mt!==null&&Mt.push(ha,Xt),Xt},argPackAdvance:_e,readValueFromPointer:Gt,destructorFunction(Mt){ha(Mt)}})};function _f(v,S,L,G,rt,vt){v>>>=0,S>>>=0,L>>>=0,G>>>=0,rt>>>=0,vt>>>=0,_t[v]={name:Nt(S),rawConstructor:Ue(L,G),rawDestructor:Ue(rt,vt),fields:[]}}function vf(v,S,L,G,rt,vt,Lt,Mt,It,Ot){v>>>=0,S>>>=0,L>>>=0,G>>>=0,rt>>>=0,vt>>>=0,Lt>>>=0,Mt>>>=0,It>>>=0,Ot>>>=0,_t[v].fields.push({fieldName:Nt(S),getterReturnType:L,getter:Ue(G,rt),getterContext:vt,setterArgumentType:Lt,setter:Ue(Mt,It),setterContext:Ot})}var xf=function(v,S){v>>>=0,S>>>=0,S=Nt(S),zt(v,{isVoid:!0,name:S,argPackAdvance:0,fromWireType:()=>{},toWireType:(L,G)=>{}})};function yf(v,S,L){return v>>>=0,S>>>=0,L>>>=0,Z.copyWithin(v>>>0,S>>>0,S+L>>>0)}var uc=(v,S,L)=>{var G=[],rt=v.toWireType(G,L);return G.length&&(j[S>>>2>>>0]=xn.toHandle(G)),rt};function fc(v,S,L){return v>>>=0,S>>>=0,L>>>=0,v=xn.toValue(v),S=Ma(S,"emval::as"),uc(S,L,v)}var Sf={},hc=v=>{var S=Sf[v];return S===void 0?Nt(v):S},il=[];function Mf(v,S,L,G,rt){return v>>>=0,S>>>=0,L>>>=0,G>>>=0,rt>>>=0,v=il[v],S=xn.toValue(S),L=hc(L),v(S,S[L],G,rt)}function al(v,S){return v>>>=0,S>>>=0,v=xn.toValue(v),S=xn.toValue(S),v==S}var bf=v=>{var S=il.length;return il.push(v),S},Ef=(v,S)=>{for(var L=new Array(v),G=0;G<v;++G)L[G]=Ma(j[S+G*4>>>2>>>0],"parameter "+G);return L};function Tf(v,S,L){S>>>=0;var G=Ef(v,S),rt=G.shift();v--;var vt=`return function (obj, func, destructorsRef, args) {
`,Lt=0,Mt=[];L===0&&Mt.push("obj");for(var It=["retType"],Ot=[rt],Xt=0;Xt<v;++Xt)Mt.push("arg"+Xt),It.push("argType"+Xt),Ot.push(G[Xt]),vt+=`  var arg${Xt} = argType${Xt}.readValueFromPointer(args${Lt?"+"+Lt:""});
`,Lt+=G[Xt].argPackAdvance;var be=L===1?"new func":"func.call";vt+=`  var rv = ${be}(${Mt.join(", ")});
`,rt.isVoid||(It.push("emval_returnValue"),Ot.push(uc),vt+=`  return emval_returnValue(retType, destructorsRef, rv);
`),vt+=`};
`,It.push(vt);var je=Dn(Function,It)(...Ot),Cn=`methodCaller<(${G.map(yn=>yn.name).join(", ")}) => ${rt.name}>`;return bf(mi(Cn,je))}function dc(v,S){return v>>>=0,S>>>=0,v=xn.toValue(v),S=xn.toValue(S),xn.toHandle(v[S])}function Af(v){v>>>=0,v>9&&(Ei[v+1]+=1)}function Rf(v){return v>>>=0,xn.toHandle(hc(v))}function Cf(){return xn.toHandle({})}function wf(v){v>>>=0;var S=xn.toValue(v);ce(S),Ii(v)}function Df(v,S,L){v>>>=0,S>>>=0,L>>>=0,v=xn.toValue(v),S=xn.toValue(S),L=xn.toValue(L),v[S]=L}function Uf(v,S){v>>>=0,S>>>=0,v=Ma(v,"_emval_take_value");var L=v.readValueFromPointer(S);return xn.toHandle(L)}var Lf=()=>4294901760,Nf=v=>{var S=B.buffer,L=(v-S.byteLength+65535)/65536;try{return B.grow(L),xt(),1}catch{}};function Of(v){v>>>=0;var S=Z.length,L=Lf();if(v>L)return!1;for(var G=(It,Ot)=>It+(Ot-It%Ot)%Ot,rt=1;rt<=4;rt*=2){var vt=S*(1+.2/rt);vt=Math.min(vt,v+100663296);var Lt=Math.min(L,G(Math.max(v,vt),65536)),Mt=Nf(Lt);if(Mt)return!0}return!1}var Ys=(v,S)=>{v<128?S.push(v):S.push(v%128|128,v>>7)},cs=v=>{for(var S={i:"i32",j:"i64",f:"f32",d:"f64",e:"externref",p:"i32"},L={parameters:[],results:v[0]=="v"?[]:[S[v[0]]]},G=1;G<v.length;++G)L.parameters.push(S[v[G]]);return L},Pf=(v,S)=>{var L=v.slice(0,1),G=v.slice(1),rt={i:127,p:127,j:126,f:125,d:124,e:111};S.push(96),Ys(G.length,S);for(var vt=0;vt<G.length;++vt)S.push(rt[G[vt]]);L=="v"?S.push(0):S.push(1,rt[L])},pc=(v,S)=>{if(typeof WebAssembly.Function=="function")return new WebAssembly.Function(cs(S),v);var L=[1];Pf(S,L);var G=[0,97,115,109,1,0,0,0,1];Ys(L.length,G),G.push(...L),G.push(2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0);var rt=new WebAssembly.Module(new Uint8Array(G)),vt=new WebAssembly.Instance(rt,{e:{f:v}}),Lt=vt.exports.f;return Lt},mc=(v,S)=>{if(Ea)for(var L=v;L<v+S;L++){var G=on(L);G&&Ea.set(G,L)}},Ea,gc=v=>(Ea||(Ea=new WeakMap,mc(0,sn.length)),Ea.get(v)||0),qs=[],xr=()=>{if(qs.length)return qs.pop();try{sn.grow(1)}catch(v){throw v instanceof RangeError?"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.":v}return sn.length-1},rl=(v,S)=>sn.set(v,S),us=(v,S)=>{var L=gc(v);if(L)return L;var G=xr();try{rl(G,v)}catch(vt){if(!(vt instanceof TypeError))throw vt;var rt=pc(v,S);rl(G,rt)}return Ea.set(v,G),G},fs=v=>{Ea.delete(on(v)),rl(v,null),qs.push(v)};Ht=r.InternalError=class extends Error{constructor(S){super(S),this.name="InternalError"}},Q(),Kt=r.BindingError=class extends Error{constructor(S){super(S),this.name="BindingError"}},Sa(),gr(),ve(),zn=r.UnboundTypeError=Re(Error,"UnboundTypeError"),Qo();var _c={i:bt,D:Ct,n:Wt,C:De,H:rn,h:Mi,g:_r,a:hf,G:$o,t:sc,e:fa,x:ba,c:tl,j:oc,f:ks,k:Xs,w:el,s:nl,o:_f,l:vf,I:xf,F:yf,v:fc,z:Mf,b:Ii,m:al,y:Tf,B:dc,u:Af,q:Rf,A:Cf,p:wf,r:Df,d:Uf,E:Of},Ti=Ce(),yr=v=>(yr=Ti.L)(v),Va=v=>(Va=Ti.N)(v),ha=v=>(ha=Ti.O)(v),hs=v=>(hs=Ti.P)(v);function vc(v){v=Object.assign({},v);var S=G=>rt=>G(rt)>>>0,L=G=>()=>G()>>>0;return v.L=S(v.L),v.N=S(v.N),v._emscripten_stack_alloc=S(v._emscripten_stack_alloc),v.emscripten_stack_get_current=L(v.emscripten_stack_get_current),v}r.addFunction=us,r.removeFunction=fs;var ds;lt=function v(){ds||Zs(),ds||(lt=v)};function Zs(){if(jt>0||(Pt(),jt>0))return;function v(){ds||(ds=!0,r.calledRun=!0,!P&&(Ut(),l(r),r.onRuntimeInitialized?.(),V()))}r.setStatus?(r.setStatus("Running..."),setTimeout(function(){setTimeout(function(){r.setStatus("")},1),v()},1)):v()}if(r.preInit)for(typeof r.preInit=="function"&&(r.preInit=[r.preInit]);r.preInit.length>0;)r.preInit.pop()();return Zs(),i=h,i})})();let Io=null;async function ex(){return Io||(Io=await b2(),typeof Io.setup=="function"&&Io.setup(),Io)}function dp(s){return s instanceof Error?s.message:String(s)}function E2(s){const t=s.getAttribute("position");if(!t)throw new Error("Geometry has no position attribute");const i=new Float32Array(t.array.length);i.set(t.array);const r=s.getIndex();if(r)return{positions:i,indices:new Uint32Array(r.array)};const l=new Uint32Array(t.count);for(let c=0;c<t.count;c++)l[c]=c;return{positions:i,indices:l}}function T2(s){const t=s.reduce((m,p)=>m+p.positions.length,0),i=s.reduce((m,p)=>m+p.indices.length,0),r=new Float32Array(t),l=new Uint32Array(i);let c=0,h=0,d=0;for(const m of s){r.set(m.positions,c);for(let p=0;p<m.indices.length;p++)l[h+p]=m.indices[p]+d;c+=m.positions.length,h+=m.indices.length,d+=m.positions.length/3}return{positions:r,indices:l}}function A2(s){const t=new An;switch(s){case"-z":return t;case"+z":return t.makeRotationX(Math.PI);case"+x":return t.makeRotationY(-Math.PI/2);case"-x":return t.makeRotationY(Math.PI/2);case"+y":return t.makeRotationX(Math.PI/2);case"-y":return t.makeRotationX(-Math.PI/2);default:return t}}function R2(){const s=Me.useRef(null),[t,i]=Me.useState(null),[r,l]=Me.useState(null),[c,h]=Me.useState(null),[d,m]=Me.useState(null),[p,g]=Me.useState(""),[_,x]=Me.useState(0),[M,A]=Me.useState(1),[R,E]=Me.useState(1),[y,z]=Me.useState(0),[N,O]=Me.useState(0),[B,P]=Me.useState(!0),[F,Z]=Me.useState(!1),[C,U]=Me.useState("inside"),[k,j]=Me.useState("-z"),[it,pt]=Me.useState("outside"),[xt,H]=Me.useState(!1),[Y,st]=Me.useState(!1),[Pt,Ut]=Me.useState(null),[V,ut]=Me.useState(null),Et=Me.useRef(null);Me.useEffect(()=>{ex().then(()=>st(!0)).catch(de=>{console.error("Failed to init Manifold:",de),Ut("Failed to initialize 3D engine. Please refresh the page.")})},[]);const Vt=Me.useCallback((de,le)=>{const he=de.clone(),re=A2(le);he.applyMatrix4(re),he.computeBoundingBox();const Ze=Jv(he);he.translate(-Ze.centerX,-Ze.centerY,-Ze.minZ),he.computeBoundingBox();const W=Jv(he);return{geometry:he,dims:{width:W.width,depth:W.depth,height:W.height,minX:W.minX,maxX:W.maxX,minY:W.minY,maxY:W.maxY,minZ:W.minZ,maxZ:W.maxZ,centerX:W.centerX,centerY:W.centerY}}},[]),jt=Me.useCallback((de,le)=>{if(le==="custom")return;const he=Qv(de.width,de.depth,le);A(he.gridX),E(he.gridY)},[]),lt=Me.useCallback((de,le)=>{Ut(null);try{s.current&&s.current.dispose();const he=_2(de);s.current=he;const re=he.getAttribute("position"),Ze=he.index,W=Ze?Ze.count/3:re.count/3;x(Math.round(W));const{geometry:Je,dims:Ce}=Vt(he,k);i(Yt=>(Yt?.dispose(),Je)),m(Ce),g(le);const Oe=Qv(Ce.width,Ce.depth,C);A(Oe.gridX),E(Oe.gridY),pt("outside"),l(Yt=>(Yt?.dispose(),null)),h(Yt=>(Yt?.dispose(),null)),Et.current=null,z(0),O(0)}catch(he){console.error("Failed to parse STL:",he),Ut(`Failed to parse STL file: ${dp(he)}`)}},[Vt,k,C]),St=Me.useCallback(()=>{s.current&&(s.current.dispose(),s.current=null),t?.dispose(),r?.dispose(),c?.dispose(),i(null),l(null),h(null),m(null),g(""),x(0),Et.current=null,z(0),O(0),j("-z"),pt("outside"),Ut(null)},[t,r,c]),kt=Me.useCallback(de=>{if(!s.current)return;j(de);const{geometry:le,dims:he}=Vt(s.current,de);i(re=>(re?.dispose(),le)),m(he),jt(he,C),l(re=>(re?.dispose(),null)),h(re=>(re?.dispose(),null)),Et.current=null,z(0),O(0)},[Vt,C,jt]),ie=Me.useCallback(de=>{U(de),d&&jt(d,de),l(le=>(le?.dispose(),null)),h(le=>(le?.dispose(),null)),Et.current=null},[d,jt]),ae=Me.useCallback(de=>{pt(de),l(le=>(le?.dispose(),null)),h(le=>(le?.dispose(),null)),Et.current=null},[]),Ne=Me.useCallback(async()=>{if(!t||!Y)return;H(!0),Ut(null),h(re=>(re?.dispose(),null)),l(re=>(re?.dispose(),null)),Et.current=null;let de=null,le=null,he=null;try{const re=await ex();de=await c2(re,{gridX:M,gridY:R,offsetX:y,offsetY:N,magnets:B,screws:F});const W=de.getMesh(),Je=$v(W),Ce=new ei;Ce.setAttribute("position",new Zn(Je.positions,3)),Ce.setIndex(new Zn(Je.indices,1)),Ce.computeVertexNormals(),it==="outside"&&Ce.translate(0,0,-cm),l(Ce);const Oe=t.clone();it==="outside"&&Oe.translate(0,0,cm);const Yt=u2(Oe,re);try{le=new re.Manifold(Yt)}catch(_t){console.warn("Model is not manifold, trying to fix...",dp(_t));const ce=E2(Oe),Gt=T2([ce,Je]),ee=new ei;ee.setAttribute("position",new Zn(Gt.positions,3)),ee.setIndex(new Zn(Gt.indices,1)),ee.computeVertexNormals(),h(ee),Et.current=Gt,Ut("Boolean union failed on this STL, so compatibility mode was used (model + base exported together as overlapping solids). Most slicers merge these automatically."),ut({message:"⚠️ Used compatibility mode for this STL",type:"info"});return}finally{Oe.dispose()}const I=le.volume();he=le.add(de);const T=he.volume();it==="inside"&&Math.abs(T-I)<1&&(Ut("Inside mode added almost no new volume. This model is likely mostly solid at that face. Try Turn Into Box, or rotate Bottom Face to an interior-facing side."),ut({message:"⚠️ Inside mode had minimal effect on this STL",type:"info"}));const $=he.getMesh(),bt=$v($),Ct=new ei;Ct.setAttribute("position",new Zn(bt.positions,3)),Ct.setIndex(new Zn(bt.indices,1)),Ct.computeVertexNormals(),h(Ct),Et.current=bt,ut({message:"✅ Base generated! Preview below.",type:"success"})}catch(re){console.error("Generation failed:",re),Ut(`Generation failed: ${dp(re)}`),ut({message:"❌ Generation failed. Check error details.",type:"error"})}finally{he?.delete(),le?.delete(),de?.delete(),H(!1)}},[t,Y,M,R,y,N,B,F,it]),cn=Me.useCallback(()=>{if(!Et.current)return;const{positions:de,indices:le}=Et.current,he=v2(de,le),re=p.replace(/\.stl$/i,"");x2(he,`${re}_gridfinity_${M}x${R}.stl`)},[p,M,R]);return nt.jsxs("div",{className:"min-h-screen flex flex-col bg-gray-950",children:[V&&nt.jsx(m2,{message:V.message,type:V.type,onDismiss:()=>ut(null)}),nt.jsx("header",{className:"border-b border-gray-800 px-4 sm:px-6 py-3",children:nt.jsxs("div",{className:"flex items-center gap-3",children:[nt.jsx("div",{className:"text-xl",children:"🔲"}),nt.jsxs("div",{children:[nt.jsx("h1",{className:"text-lg font-bold text-gray-100",children:"Gridfinity Base Adder"}),nt.jsx("p",{className:"text-xs text-gray-500 hidden sm:block",children:"Add Gridfinity-compatible bases to any STL model"})]}),nt.jsxs("span",{className:"ml-auto text-[10px] font-mono text-gray-500 border border-gray-700 rounded px-2 py-0.5",children:["v","15"]}),!Y&&nt.jsx("span",{className:"text-xs text-yellow-500 animate-pulse",children:"Loading engine…"})]})}),nt.jsxs("div",{className:"flex-1 flex flex-col lg:flex-row overflow-hidden",children:[nt.jsx("div",{className:"order-2 lg:order-1 flex-1 flex flex-col min-h-0",children:nt.jsx("div",{className:"flex-1 p-3 min-h-0",children:nt.jsx("div",{className:"h-full rounded-xl border border-gray-800 overflow-hidden",children:nt.jsx(h2,{originalGeometry:t,baseGeometry:r,combinedGeometry:c,gridX:M,gridY:R,offsetX:y,offsetY:N,placement:it})})})}),nt.jsx("div",{className:"order-1 lg:order-2 w-full lg:w-80 xl:w-96 border-b lg:border-b-0 lg:border-l border-gray-800 overflow-y-auto",children:nt.jsxs("div",{className:"p-3 lg:p-4 space-y-3",children:[nt.jsx("div",{children:p?nt.jsx(VA,{filename:p,triangleCount:_,dimensions:d,onRemove:St}):nt.jsx(HA,{onFileLoaded:lt,disabled:!Y||xt})}),xt&&nt.jsxs("div",{className:"bg-blue-950/30 border border-blue-700/30 rounded-xl p-3 flex items-center gap-3",children:[nt.jsx("div",{className:"relative w-8 h-8 shrink-0",children:nt.jsxs("svg",{className:"animate-spin w-8 h-8 text-blue-500",fill:"none",viewBox:"0 0 24 24",children:[nt.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"3"}),nt.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}),nt.jsxs("div",{children:[nt.jsx("div",{className:"text-sm font-medium text-blue-300",children:"Generating base…"}),nt.jsx("div",{className:"text-xs text-blue-400/60",children:"Boolean union in progress"})]})]}),Pt&&nt.jsx("div",{className:"p-3 rounded-xl bg-red-950/50 border border-red-800 text-xs text-red-300",children:Pt}),nt.jsx(p2,{gridX:M,gridY:R,offsetX:y,offsetY:N,magnets:B,screws:F,fitMode:C,orientation:k,placement:it,modelDims:d,hasModel:!!t,hasBase:!!r,hasCombined:!!c,isProcessing:xt,filename:p,onGridXChange:A,onGridYChange:E,onOffsetXChange:z,onOffsetYChange:O,onMagnetsChange:P,onScrewsChange:Z,onFitModeChange:ie,onOrientationChange:kt,onPlacementChange:ae,onGenerate:Ne,onDownload:cn}),nt.jsxs("div",{className:"rounded-xl border border-gray-800 bg-gray-900/60 p-3",children:[nt.jsx("p",{className:"text-xs text-gray-400 mb-2",children:"Enjoying the tool?"}),nt.jsx("a",{href:"https://ko-fi.com/lightscout",target:"_blank",rel:"noopener noreferrer",className:"inline-flex w-full items-center justify-center rounded-lg bg-sky-500 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-sky-400",children:"Support Me"})]})]})})]})]})}pS.createRoot(document.getElementById("root")).render(nt.jsx(Me.StrictMode,{children:nt.jsx(R2,{})}));
