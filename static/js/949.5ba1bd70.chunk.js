(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[949],{5341:function(e,n,t){"use strict";t.d(n,{FT:function(){return s}});var r=t(885),o=t(2791),a=t(184),i=["as","disabled"];function s(e){var n=e.tagName,t=e.disabled,r=e.href,o=e.target,a=e.rel,i=e.role,s=e.onClick,c=e.tabIndex,u=void 0===c?0:c,l=e.type;n||(n=null!=r||null!=o||null!=a?"a":"button");var f={tagName:n};if("button"===n)return[{type:l||"button",disabled:t},f];var d=function(e){(t||"a"===n&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),t?e.stopPropagation():null==s||s(e)};return"a"===n&&(r||(r="#"),t&&(r=void 0)),[{role:null!=i?i:"button",disabled:void 0,tabIndex:t?void 0:u,href:r,target:"a"===n?o:void 0,"aria-disabled":t||void 0,rel:"a"===n?a:void 0,onClick:d,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),d(e))}},f]}var c=o.forwardRef((function(e,n){var t=e.as,o=e.disabled,c=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,i),u=s(Object.assign({tagName:t,disabled:o},c)),l=(0,r.Z)(u,2),f=l[0],d=l[1].tagName;return(0,a.jsx)(d,Object.assign({},c,f,{ref:n}))}));c.displayName="Button",n.ZP=c},888:function(e,n,t){"use strict";var r=t(9047);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,n,t,o,a,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:a,resetWarningCache:o};return t.PropTypes=t,t}},2007:function(e,n,t){e.exports=t(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3360:function(e,n,t){"use strict";var r=t(1413),o=t(885),a=t(5987),i=t(1694),s=t.n(i),c=t(2791),u=t(5341),l=t(162),f=t(184),d=["as","bsPrefix","variant","size","active","className"],p=c.forwardRef((function(e,n){var t=e.as,i=e.bsPrefix,c=e.variant,p=e.size,v=e.active,m=e.className,h=(0,a.Z)(e,d),g=(0,l.vE)(i,"btn"),y=(0,u.FT)((0,r.Z)({tagName:t},h)),b=(0,o.Z)(y,2),E=b[0],x=b[1].tagName;return(0,f.jsx)(x,(0,r.Z)((0,r.Z)((0,r.Z)({},E),h),{},{ref:n,className:s()(m,g,v&&"active",c&&"".concat(g,"-").concat(c),p&&"".concat(g,"-").concat(p),h.href&&h.disabled&&"disabled")}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1},n.Z=p},5407:function(e,n,t){"use strict";t.d(n,{Z:function(){return An}});var r=t(1413),o=t(5987),a=t(1694),i=t.n(a),s=t(2791),c=t(8633),u=t(239),l=t(6543),f=t(162),d=t(184),p=["bsPrefix","className","as"],v=s.forwardRef((function(e,n){var t=e.bsPrefix,a=e.className,s=e.as,c=(0,o.Z)(e,p);t=(0,f.vE)(t,"navbar-brand");var u=s||(c.href?"a":"span");return(0,d.jsx)(u,(0,r.Z)((0,r.Z)({},c),{},{ref:n,className:i()(a,t)}))}));v.displayName="NavbarBrand";var m=v,h=t(4942);function g(e){return e&&e.ownerDocument||document}function y(e,n){return function(e){var n=g(e);return n&&n.defaultView||window}(e).getComputedStyle(e,n)}var b=/([A-Z])/g;var E=/^ms-/;function x(e){return function(e){return e.replace(b,"-$1").toLowerCase()}(e).replace(E,"-ms-")}var w=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var N=function(e,n){var t="",r="";if("string"===typeof n)return e.style.getPropertyValue(x(n))||y(e).getPropertyValue(x(n));Object.keys(n).forEach((function(o){var a=n[o];a||0===a?!function(e){return!(!e||!w.test(e))}(o)?t+=x(o)+": "+a+";":r+=o+"("+a+") ":e.style.removeProperty(x(o))})),r&&(t+="transform: "+r+";"),e.style.cssText+=";"+t},k=t(3366);function O(e,n){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},O(e,n)}var C=t(4164),Z=!1,R=s.createContext(null),j="unmounted",S="exited",P="entering",T="entered",L="exiting",D=function(e){var n,t;function r(n,t){var r;r=e.call(this,n,t)||this;var o,a=t&&!t.isMounting?n.enter:n.appear;return r.appearStatus=null,n.in?a?(o=S,r.appearStatus=P):o=T:o=n.unmountOnExit||n.mountOnEnter?j:S,r.state={status:o},r.nextCallback=null,r}t=e,(n=r).prototype=Object.create(t.prototype),n.prototype.constructor=n,O(n,t),r.getDerivedStateFromProps=function(e,n){return e.in&&n.status===j?{status:S}:null};var o=r.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(e){var n=null;if(e!==this.props){var t=this.state.status;this.props.in?t!==P&&t!==T&&(n=P):t!==P&&t!==T||(n=L)}this.updateStatus(!1,n)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var e,n,t,r=this.props.timeout;return e=n=t=r,null!=r&&"number"!==typeof r&&(e=r.exit,n=r.enter,t=void 0!==r.appear?r.appear:n),{exit:e,enter:n,appear:t}},o.updateStatus=function(e,n){if(void 0===e&&(e=!1),null!==n)if(this.cancelNextCallback(),n===P){if(this.props.unmountOnExit||this.props.mountOnEnter){var t=this.props.nodeRef?this.props.nodeRef.current:C.findDOMNode(this);t&&function(e){e.scrollTop}(t)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===S&&this.setState({status:j})},o.performEnter=function(e){var n=this,t=this.props.enter,r=this.context?this.context.isMounting:e,o=this.props.nodeRef?[r]:[C.findDOMNode(this),r],a=o[0],i=o[1],s=this.getTimeouts(),c=r?s.appear:s.enter;!e&&!t||Z?this.safeSetState({status:T},(function(){n.props.onEntered(a)})):(this.props.onEnter(a,i),this.safeSetState({status:P},(function(){n.props.onEntering(a,i),n.onTransitionEnd(c,(function(){n.safeSetState({status:T},(function(){n.props.onEntered(a,i)}))}))})))},o.performExit=function(){var e=this,n=this.props.exit,t=this.getTimeouts(),r=this.props.nodeRef?void 0:C.findDOMNode(this);n&&!Z?(this.props.onExit(r),this.safeSetState({status:L},(function(){e.props.onExiting(r),e.onTransitionEnd(t.exit,(function(){e.safeSetState({status:S},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:S},(function(){e.props.onExited(r)}))},o.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(e,n){n=this.setNextCallback(n),this.setState(e,n)},o.setNextCallback=function(e){var n=this,t=!0;return this.nextCallback=function(r){t&&(t=!1,n.nextCallback=null,e(r))},this.nextCallback.cancel=function(){t=!1},this.nextCallback},o.onTransitionEnd=function(e,n){this.setNextCallback(n);var t=this.props.nodeRef?this.props.nodeRef.current:C.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(t&&!r){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[t,this.nextCallback],a=o[0],i=o[1];this.props.addEndListener(a,i)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},o.render=function(){var e=this.state.status;if(e===j)return null;var n=this.props,t=n.children,r=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,(0,k.Z)(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return s.createElement(R.Provider,{value:null},"function"===typeof t?t(e,r):s.cloneElement(s.Children.only(t),r))},r}(s.Component);function M(){}D.contextType=R,D.propTypes={},D.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:M,onEntering:M,onEntered:M,onExit:M,onExiting:M,onExited:M},D.UNMOUNTED=j,D.EXITED=S,D.ENTERING=P,D.ENTERED=T,D.EXITING=L;var F=D,B=!("undefined"===typeof window||!window.document||!window.document.createElement),_=!1,A=!1;try{var I={get passive(){return _=!0},get once(){return A=_=!0}};B&&(window.addEventListener("test",I,I),window.removeEventListener("test",I,!0))}catch(In){}var W=function(e,n,t,r){if(r&&"boolean"!==typeof r&&!A){var o=r.once,a=r.capture,i=t;!A&&o&&(i=t.__once||function e(r){this.removeEventListener(n,e,a),t.call(this,r)},t.__once=i),e.addEventListener(n,i,_?r:a)}e.addEventListener(n,t,r)};var H=function(e,n,t,r){var o=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(n,t,o),t.__once&&e.removeEventListener(n,t.__once,o)};var V=function(e,n,t,r){return W(e,n,t,r),function(){H(e,n,t,r)}};function U(e,n,t){void 0===t&&(t=5);var r=!1,o=setTimeout((function(){r||function(e,n,t,r){if(void 0===t&&(t=!1),void 0===r&&(r=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent(n,t,r),e.dispatchEvent(o)}}(e,"transitionend",!0)}),n+t),a=V(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(o),a()}}function z(e,n,t,r){null==t&&(t=function(e){var n=N(e,"transitionDuration")||"",t=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*t}(e)||0);var o=U(e,t,r),a=V(e,"transitionend",n);return function(){o(),a()}}function K(e,n){var t=N(e,n)||"",r=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*r}function $(e,n){var t=K(e,"transitionDuration"),r=K(e,"transitionDelay"),o=z(e,(function(t){t.target===e&&(o(),n(t))}),t+r)}var X=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter((function(e){return null!=e})).reduce((function(e,n){if("function"!==typeof n)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?n:function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];e.apply(this,r),n.apply(this,r)}}),null)};function Y(e){e.offsetHeight}var G=t(3201);var q,J=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children","childRef"],Q=s.forwardRef((function(e,n){var t=e.onEnter,a=e.onEntering,i=e.onEntered,c=e.onExit,u=e.onExiting,l=e.onExited,f=e.addEndListener,p=e.children,v=e.childRef,m=(0,o.Z)(e,J),h=(0,s.useRef)(null),g=(0,G.Z)(h,v),y=function(e){var n;g((n=e)&&"setState"in n?C.findDOMNode(n):null!=n?n:null)},b=function(e){return function(n){e&&h.current&&e(h.current,n)}},E=(0,s.useCallback)(b(t),[t]),x=(0,s.useCallback)(b(a),[a]),w=(0,s.useCallback)(b(i),[i]),N=(0,s.useCallback)(b(c),[c]),k=(0,s.useCallback)(b(u),[u]),O=(0,s.useCallback)(b(l),[l]),Z=(0,s.useCallback)(b(f),[f]);return(0,d.jsx)(F,(0,r.Z)((0,r.Z)({ref:n},m),{},{onEnter:E,onEntered:w,onEntering:x,onExit:N,onExited:O,onExiting:k,addEndListener:Z,nodeRef:h,children:"function"===typeof p?function(e,n){return p(e,(0,r.Z)((0,r.Z)({},n),{},{ref:y}))}:s.cloneElement(p,{ref:y})}))})),ee=["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"],ne={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function te(e,n){var t=n["offset".concat(e[0].toUpperCase()).concat(e.slice(1))],r=ne[e];return t+parseInt(N(n,r[0]),10)+parseInt(N(n,r[1]),10)}var re=(q={},(0,h.Z)(q,S,"collapse"),(0,h.Z)(q,L,"collapsing"),(0,h.Z)(q,P,"collapsing"),(0,h.Z)(q,T,"collapse show"),q),oe={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:te},ae=s.forwardRef((function(e,n){var t=e.onEnter,a=e.onEntering,c=e.onEntered,u=e.onExit,l=e.onExiting,f=e.className,p=e.children,v=e.dimension,m=void 0===v?"height":v,h=e.getDimensionValue,g=void 0===h?te:h,y=(0,o.Z)(e,ee),b="function"===typeof m?m():m,E=(0,s.useMemo)((function(){return X((function(e){e.style[b]="0"}),t)}),[b,t]),x=(0,s.useMemo)((function(){return X((function(e){var n="scroll".concat(b[0].toUpperCase()).concat(b.slice(1));e.style[b]="".concat(e[n],"px")}),a)}),[b,a]),w=(0,s.useMemo)((function(){return X((function(e){e.style[b]=null}),c)}),[b,c]),N=(0,s.useMemo)((function(){return X((function(e){e.style[b]="".concat(g(b,e),"px"),Y(e)}),u)}),[u,g,b]),k=(0,s.useMemo)((function(){return X((function(e){e.style[b]=null}),l)}),[b,l]);return(0,d.jsx)(Q,(0,r.Z)((0,r.Z)({ref:n,addEndListener:$},y),{},{"aria-expanded":y.role?y.in:null,onEnter:E,onEntering:x,onEntered:w,onExit:N,onExiting:k,childRef:p.ref,children:function(e,n){return s.cloneElement(p,(0,r.Z)((0,r.Z)({},n),{},{className:i()(f,p.props.className,re[e],"width"===b&&"collapse-horizontal")}))}}))}));ae.defaultProps=oe;var ie=ae,se=s.createContext(null);se.displayName="NavbarContext";var ce=se,ue=["children","bsPrefix"],le=s.forwardRef((function(e,n){var t=e.children,a=e.bsPrefix,i=(0,o.Z)(e,ue);a=(0,f.vE)(a,"navbar-collapse");var c=(0,s.useContext)(ce);return(0,d.jsx)(ie,(0,r.Z)((0,r.Z)({in:!(!c||!c.expanded)},i),{},{children:(0,d.jsx)("div",{ref:n,className:a,children:t})}))}));le.displayName="NavbarCollapse";var fe=le,de=t(2134),pe=["bsPrefix","className","children","label","as","onClick"],ve=s.forwardRef((function(e,n){var t=e.bsPrefix,a=e.className,c=e.children,u=e.label,l=e.as,p=void 0===l?"button":l,v=e.onClick,m=(0,o.Z)(e,pe);t=(0,f.vE)(t,"navbar-toggler");var h=(0,s.useContext)(ce)||{},g=h.onToggle,y=h.expanded,b=(0,de.Z)((function(e){v&&v(e),g&&g()}));return"button"===p&&(m.type="button"),(0,d.jsx)(p,(0,r.Z)((0,r.Z)({},m),{},{ref:n,onClick:b,"aria-label":u,className:i()(a,t,!y&&"collapsed"),children:c||(0,d.jsx)("span",{className:"".concat(t,"-icon")})}))}));ve.displayName="NavbarToggle",ve.defaultProps={label:"Toggle navigation"};var me=ve,he=t(885),ge="undefined"!==typeof t.g&&t.g.navigator&&"ReactNative"===t.g.navigator.product,ye="undefined"!==typeof document||ge?s.useLayoutEffect:s.useEffect,be=new WeakMap,Ee=function(e,n){if(e&&n){var t=be.get(n)||new Map;be.set(n,t);var r=t.get(e);return r||((r=n.matchMedia(e)).refCount=0,t.set(r.media,r)),r}};function xe(e,n){void 0===n&&(n="undefined"===typeof window?void 0:window);var t=Ee(e,n),r=(0,s.useState)((function(){return!!t&&t.matches})),o=r[0],a=r[1];return ye((function(){var t=Ee(e,n);if(!t)return a(!1);var r=be.get(n),o=function(){a(t.matches)};return t.refCount++,t.addListener(o),o(),function(){t.removeListener(o),t.refCount--,t.refCount<=0&&(null==r||r.delete(t.media)),t=void 0}}),[e]),o}var we=function(e){var n=Object.keys(e);function t(e,n){return e===n?n:e?e+" and "+n:n}function r(t){var r=function(e){return n[Math.min(n.indexOf(e)+1,n.length-1)]}(t),o=e[r];return"(max-width: "+(o="number"===typeof o?o-.2+"px":"calc("+o+" - 0.2px)")+")"}return function(n,o,a){var i,c;"object"===typeof n?(i=n,a=o,o=!0):((c={})[n]=o=o||!0,i=c);var u=(0,s.useMemo)((function(){return Object.entries(i).reduce((function(n,o){var a=o[0],i=o[1];return"up"!==i&&!0!==i||(n=t(n,function(n){var t=e[n];return"number"===typeof t&&(t+="px"),"(min-width: "+t+")"}(a))),"down"!==i&&!0!==i||(n=t(n,r(a))),n}),"")}),[JSON.stringify(i)]);return xe(u,a)}}({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});function Ne(e){void 0===e&&(e=g());try{var n=e.activeElement;return n&&n.nodeName?n:null}catch(In){return e.body}}function ke(e,n){return e.contains?e.contains(n):e.compareDocumentPosition?e===n||!!(16&e.compareDocumentPosition(n)):void 0}function Oe(e){var n=function(e){var n=(0,s.useRef)(e);return n.current=e,n}(e);(0,s.useEffect)((function(){return function(){return n.current()}}),[])}var Ce=t(2982);function Ze(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function Re(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function je(e,n,t){return n&&Re(e.prototype,n),t&&Re(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}var Se=(0,t(1306).PB)("modal-open"),Pe=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.ownerDocument,r=n.handleContainerOverflow,o=void 0===r||r,a=n.isRTL,i=void 0!==a&&a;Ze(this,e),this.handleContainerOverflow=o,this.isRTL=i,this.modals=[],this.ownerDocument=t}return je(e,[{key:"getScrollbarWidth",value:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,n=e.defaultView;return Math.abs(n.innerWidth-e.documentElement.clientWidth)}(this.ownerDocument)}},{key:"getElement",value:function(){return(this.ownerDocument||document).body}},{key:"setModalAttributes",value:function(e){}},{key:"removeModalAttributes",value:function(e){}},{key:"setContainerStyle",value:function(e){var n={overflow:"hidden"},t=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();e.style=(0,h.Z)({overflow:r.style.overflow},t,r.style[t]),e.scrollBarWidth&&(n[t]="".concat(parseInt(N(r,t)||"0",10)+e.scrollBarWidth,"px")),r.setAttribute(Se,""),N(r,n)}},{key:"reset",value:function(){var e=this;(0,Ce.Z)(this.modals).forEach((function(n){return e.remove(n)}))}},{key:"removeContainerStyle",value:function(e){var n=this.getElement();n.removeAttribute(Se),Object.assign(n.style,e.style)}},{key:"add",value:function(e){var n=this.modals.indexOf(e);return-1!==n?n:(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),0!==n||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n)}},{key:"remove",value:function(e){var n=this.modals.indexOf(e);-1!==n&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}},{key:"isTopModal",value:function(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}]),e}(),Te=Pe,Le=(0,s.createContext)(B?window:void 0);Le.Provider;function De(){return(0,s.useContext)(Le)}var Me=function(e,n){return B?null==e?(n||g()).body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null};var Fe,Be=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function _e(e){var n=De(),t=e||function(e){return Fe||(Fe=new Te({ownerDocument:null==e?void 0:e.document})),Fe}(n),r=(0,s.useRef)({dialog:null,backdrop:null});return Object.assign(r.current,{add:function(){return t.add(r.current)},remove:function(){return t.remove(r.current)},isTopModal:function(){return t.isTopModal(r.current)},setDialogRef:(0,s.useCallback)((function(e){r.current.dialog=e}),[]),setBackdropRef:(0,s.useCallback)((function(e){r.current.backdrop=e}),[])})}var Ae=(0,s.forwardRef)((function(e,n){var t=e.show,r=void 0!==t&&t,o=e.role,a=void 0===o?"dialog":o,i=e.className,c=e.style,u=e.children,l=e.backdrop,f=void 0===l||l,p=e.keyboard,v=void 0===p||p,m=e.onBackdropClick,h=e.onEscapeKeyDown,g=e.transition,y=e.backdropTransition,b=e.autoFocus,E=void 0===b||b,x=e.enforceFocus,w=void 0===x||x,N=e.restoreFocus,k=void 0===N||N,O=e.restoreFocusOptions,Z=e.renderDialog,R=e.renderBackdrop,j=void 0===R?function(e){return(0,d.jsx)("div",Object.assign({},e))}:R,S=e.manager,P=e.container,T=e.onShow,L=e.onHide,D=void 0===L?function(){}:L,M=e.onExit,F=e.onExited,_=e.onExiting,A=e.onEnter,I=e.onEntering,W=e.onEntered,H=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,Be),U=function(e,n){var t=De(),r=(0,s.useState)((function(){return Me(e,null==t?void 0:t.document)})),o=(0,he.Z)(r,2),a=o[0],i=o[1];if(!a){var c=Me(e);c&&i(c)}return(0,s.useEffect)((function(){n&&a&&n(a)}),[n,a]),(0,s.useEffect)((function(){var n=Me(e);n!==a&&i(n)}),[e,a]),a}(P),z=_e(S),K=function(){var e=(0,s.useRef)(!0),n=(0,s.useRef)((function(){return e.current}));return(0,s.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),n.current}(),$=function(e){var n=(0,s.useRef)(null);return(0,s.useEffect)((function(){n.current=e})),n.current}(r),X=(0,s.useState)(!r),Y=(0,he.Z)(X,2),G=Y[0],q=Y[1],J=(0,s.useRef)(null);(0,s.useImperativeHandle)(n,(function(){return z}),[z]),B&&!$&&r&&(J.current=Ne()),g||r||G?r&&G&&q(!1):q(!0);var Q=(0,de.Z)((function(){if(z.add(),ae.current=V(document,"keydown",re),oe.current=V(document,"focus",(function(){return setTimeout(ne)}),!0),T&&T(),E){var e=Ne(document);z.dialog&&e&&!ke(z.dialog,e)&&(J.current=e,z.dialog.focus())}})),ee=(0,de.Z)((function(){var e;(z.remove(),null==ae.current||ae.current(),null==oe.current||oe.current(),k)&&(null==(e=J.current)||null==e.focus||e.focus(O),J.current=null)}));(0,s.useEffect)((function(){r&&U&&Q()}),[r,U,Q]),(0,s.useEffect)((function(){G&&ee()}),[G,ee]),Oe((function(){ee()}));var ne=(0,de.Z)((function(){if(w&&K()&&z.isTopModal()){var e=Ne();z.dialog&&e&&!ke(z.dialog,e)&&z.dialog.focus()}})),te=(0,de.Z)((function(e){e.target===e.currentTarget&&(null==m||m(e),!0===f&&D())})),re=(0,de.Z)((function(e){v&&27===e.keyCode&&z.isTopModal()&&(null==h||h(e),e.defaultPrevented||D())})),oe=(0,s.useRef)(),ae=(0,s.useRef)(),ie=g;if(!U||!(r||ie&&!G))return null;var se=Object.assign({role:a,ref:z.setDialogRef,"aria-modal":"dialog"===a||void 0},H,{style:c,className:i,tabIndex:-1}),ce=Z?Z(se):(0,d.jsx)("div",Object.assign({},se,{children:s.cloneElement(u,{role:"document"})}));ie&&(ce=(0,d.jsx)(ie,{appear:!0,unmountOnExit:!0,in:!!r,onExit:M,onExiting:_,onExited:function(){q(!0),null==F||F.apply(void 0,arguments)},onEnter:A,onEntering:I,onEntered:W,children:ce}));var ue=null;if(f){var le=y;ue=j({ref:z.setBackdropRef,onClick:te}),le&&(ue=(0,d.jsx)(le,{appear:!0,in:!!r,children:ue}))}return(0,d.jsx)(d.Fragment,{children:C.createPortal((0,d.jsxs)(d.Fragment,{children:[ue,ce]}),U)})}));Ae.displayName="Modal";var Ie,We=Object.assign(Ae,{Manager:Te}),He=["className","children","transitionClasses"],Ve=(Ie={},(0,h.Z)(Ie,P,"show"),(0,h.Z)(Ie,T,"show"),Ie),Ue=s.forwardRef((function(e,n){var t=e.className,a=e.children,c=e.transitionClasses,u=void 0===c?{}:c,l=(0,o.Z)(e,He),f=(0,s.useCallback)((function(e,n){Y(e),null==l.onEnter||l.onEnter(e,n)}),[l]);return(0,d.jsx)(Q,(0,r.Z)((0,r.Z)({ref:n,addEndListener:$},l),{},{onEnter:f,childRef:a.ref,children:function(e,n){return s.cloneElement(a,(0,r.Z)((0,r.Z)({},n),{},{className:i()("fade",t,a.props.className,Ve[e],u[e])}))}}))}));Ue.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},Ue.displayName="Fade";var ze,Ke=Ue,$e=(0,l.Z)("offcanvas-body"),Xe=["bsPrefix","className","children"],Ye=(ze={},(0,h.Z)(ze,P,"show"),(0,h.Z)(ze,T,"show"),ze),Ge=s.forwardRef((function(e,n){var t=e.bsPrefix,a=e.className,c=e.children,u=(0,o.Z)(e,Xe);return t=(0,f.vE)(t,"offcanvas"),(0,d.jsx)(Q,(0,r.Z)((0,r.Z)({ref:n,addEndListener:$},u),{},{childRef:c.ref,children:function(e,n){return s.cloneElement(c,(0,r.Z)((0,r.Z)({},n),{},{className:i()(a,c.props.className,(e===P||e===L)&&"".concat(t,"-toggling"),Ye[e])}))}}))}));Ge.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1},Ge.displayName="OffcanvasToggling";var qe=Ge,Je=s.createContext({onHide:function(){}}),Qe=t(2007),en=t.n(Qe),nn=["className","variant"],tn={"aria-label":en().string,onClick:en().func,variant:en().oneOf(["white"])},rn=s.forwardRef((function(e,n){var t=e.className,a=e.variant,s=(0,o.Z)(e,nn);return(0,d.jsx)("button",(0,r.Z)({ref:n,type:"button",className:i()("btn-close",a&&"btn-close-".concat(a),t)},s))}));rn.displayName="CloseButton",rn.propTypes=tn,rn.defaultProps={"aria-label":"Close"};var on=rn,an=["closeLabel","closeVariant","closeButton","onHide","children"],sn=s.forwardRef((function(e,n){var t=e.closeLabel,a=e.closeVariant,i=e.closeButton,c=e.onHide,u=e.children,l=(0,o.Z)(e,an),f=(0,s.useContext)(Je),p=(0,de.Z)((function(){null==f||f.onHide(),null==c||c()}));return(0,d.jsxs)("div",(0,r.Z)((0,r.Z)({ref:n},l),{},{children:[u,i&&(0,d.jsx)(on,{"aria-label":t,variant:a,onClick:p})]}))}));sn.defaultProps={closeLabel:"Close",closeButton:!1};var cn=sn,un=["bsPrefix","className"],ln=s.forwardRef((function(e,n){var t=e.bsPrefix,a=e.className,s=(0,o.Z)(e,un);return t=(0,f.vE)(t,"offcanvas-header"),(0,d.jsx)(cn,(0,r.Z)((0,r.Z)({ref:n},s),{},{className:i()(a,t)}))}));ln.displayName="OffcanvasHeader",ln.defaultProps={closeLabel:"Close",closeButton:!1};var fn,dn=ln,pn=(fn="h5",s.forwardRef((function(e,n){return(0,d.jsx)("div",(0,r.Z)((0,r.Z)({},e),{},{ref:n,className:i()(e.className,fn)}))}))),vn=(0,l.Z)("offcanvas-title",{Component:pn});function mn(e){return mn=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},mn(e)}function hn(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=mn(e)););return e}function gn(){return gn="undefined"!==typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,n,t){var r=hn(e,n);if(r){var o=Object.getOwnPropertyDescriptor(r,n);return o.get?o.get.call(arguments.length<3?e:t):o.value}},gn.apply(this,arguments)}function yn(e){return yn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},yn(e)}function bn(e,n){if(n&&("object"===yn(n)||"function"===typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function En(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(In){return!1}}();return function(){var t,r=mn(e);if(n){var o=mn(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return bn(this,t)}}var xn=t(3808);function wn(e,n){return e.replace(new RegExp("(^|\\s)"+n+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var Nn,kn=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",On=".sticky-top",Cn=".navbar-toggler",Zn=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&O(e,n)}(t,e);var n=En(t);function t(){return Ze(this,t),n.apply(this,arguments)}return je(t,[{key:"adjustAndStore",value:function(e,n,t){var r=n.style[e];n.dataset[e]=r,N(n,(0,h.Z)({},e,"".concat(parseFloat(N(n,e))+t,"px")))}},{key:"restore",value:function(e,n){var t=n.dataset[e];void 0!==t&&(delete n.dataset[e],N(n,(0,h.Z)({},e,t)))}},{key:"setContainerStyle",value:function(e){var n=this;gn(mn(t.prototype),"setContainerStyle",this).call(this,e);var r=this.getElement();if(function(e,n){e.classList?e.classList.add(n):function(e,n){return e.classList?!!n&&e.classList.contains(n):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+n+" ")}(e,n)||("string"===typeof e.className?e.className=e.className+" "+n:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+n))}(r,"modal-open"),e.scrollBarWidth){var o=this.isRTL?"paddingLeft":"paddingRight",a=this.isRTL?"marginLeft":"marginRight";(0,xn.Z)(r,kn).forEach((function(t){return n.adjustAndStore(o,t,e.scrollBarWidth)})),(0,xn.Z)(r,On).forEach((function(t){return n.adjustAndStore(a,t,-e.scrollBarWidth)})),(0,xn.Z)(r,Cn).forEach((function(t){return n.adjustAndStore(a,t,e.scrollBarWidth)}))}}},{key:"removeContainerStyle",value:function(e){var n=this;gn(mn(t.prototype),"removeContainerStyle",this).call(this,e);var r=this.getElement();!function(e,n){e.classList?e.classList.remove(n):"string"===typeof e.className?e.className=wn(e.className,n):e.setAttribute("class",wn(e.className&&e.className.baseVal||"",n))}(r,"modal-open");var o=this.isRTL?"paddingLeft":"paddingRight",a=this.isRTL?"marginLeft":"marginRight";(0,xn.Z)(r,kn).forEach((function(e){return n.restore(o,e)})),(0,xn.Z)(r,On).forEach((function(e){return n.restore(a,e)})),(0,xn.Z)(r,Cn).forEach((function(e){return n.restore(a,e)}))}}]),t}(Te);var Rn=Zn,jn=["bsPrefix","className","children","aria-labelledby","placement","responsive","show","backdrop","keyboard","scroll","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager","renderStaticNode"];function Sn(e){return(0,d.jsx)(qe,(0,r.Z)({},e))}function Pn(e){return(0,d.jsx)(Ke,(0,r.Z)({},e))}var Tn=s.forwardRef((function(e,n){var t=e.bsPrefix,a=e.className,c=e.children,u=e["aria-labelledby"],l=e.placement,p=e.responsive,v=e.show,m=e.backdrop,h=e.keyboard,g=e.scroll,y=e.onEscapeKeyDown,b=e.onShow,E=e.onHide,x=e.container,w=e.autoFocus,N=e.enforceFocus,k=e.restoreFocus,O=e.restoreFocusOptions,C=e.onEntered,Z=e.onExit,R=e.onExiting,j=e.onEnter,S=e.onEntering,P=e.onExited,T=e.backdropClassName,L=e.manager,D=e.renderStaticNode,M=(0,o.Z)(e,jn),F=(0,s.useRef)();t=(0,f.vE)(t,"offcanvas");var B=((0,s.useContext)(ce)||{}).onToggle,_=(0,s.useState)(!1),A=(0,he.Z)(_,2),I=A[0],W=A[1],H=we(p||"xs","up");(0,s.useEffect)((function(){W(p?v&&!H:v)}),[v,p,H]);var V=(0,de.Z)((function(){null==B||B(),null==E||E()})),U=(0,s.useMemo)((function(){return{onHide:V}}),[V]);var z=(0,s.useCallback)((function(e){return(0,d.jsx)("div",(0,r.Z)((0,r.Z)({},e),{},{className:i()("".concat(t,"-backdrop"),T)}))}),[T,t]),K=function(e){return(0,d.jsx)("div",(0,r.Z)((0,r.Z)((0,r.Z)({},e),M),{},{className:i()(a,p?"".concat(t,"-").concat(p):t,"".concat(t,"-").concat(l)),"aria-labelledby":u,children:c}))};return(0,d.jsxs)(d.Fragment,{children:[!I&&(p||D)&&K({}),(0,d.jsx)(Je.Provider,{value:U,children:(0,d.jsx)(We,{show:I,ref:n,backdrop:m,container:x,keyboard:h,autoFocus:w,enforceFocus:N&&!g,restoreFocus:k,restoreFocusOptions:O,onEscapeKeyDown:y,onShow:b,onHide:V,onEnter:function(e){e&&(e.style.visibility="visible");for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];null==j||j.apply(void 0,[e].concat(t))},onEntering:S,onEntered:C,onExit:Z,onExiting:R,onExited:function(e){e&&(e.style.visibility="");for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];null==P||P.apply(void 0,t)},manager:L||(g?(F.current||(F.current=new Rn({handleContainerOverflow:!1})),F.current):function(e){return Nn||(Nn=new Zn(e)),Nn}()),transition:Sn,backdropTransition:Pn,renderBackdrop:z,renderDialog:K})})]})}));Tn.displayName="Offcanvas",Tn.defaultProps={show:!1,backdrop:!0,keyboard:!0,scroll:!1,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,placement:"start",renderStaticNode:!1};var Ln=Object.assign(Tn,{Body:$e,Header:dn,Title:vn}),Dn=s.forwardRef((function(e,n){var t=(0,s.useContext)(ce);return(0,d.jsx)(Ln,(0,r.Z)((0,r.Z)({ref:n,show:!(null==t||!t.expanded)},e),{},{renderStaticNode:!0}))}));Dn.displayName="NavbarOffcanvas";var Mn=Dn,Fn=["bsPrefix","expand","variant","bg","fixed","sticky","className","as","expanded","onToggle","onSelect","collapseOnSelect"],Bn=(0,l.Z)("navbar-text",{Component:"span"}),_n=s.forwardRef((function(e,n){var t=(0,u.Ch)(e,{expanded:"onToggle"}),a=t.bsPrefix,l=t.expand,p=t.variant,v=t.bg,m=t.fixed,h=t.sticky,g=t.className,y=t.as,b=void 0===y?"nav":y,E=t.expanded,x=t.onToggle,w=t.onSelect,N=t.collapseOnSelect,k=(0,o.Z)(t,Fn),O=(0,f.vE)(a,"navbar"),C=(0,s.useCallback)((function(){null==w||w.apply(void 0,arguments),N&&E&&(null==x||x(!1))}),[w,N,E,x]);void 0===k.role&&"nav"!==b&&(k.role="navigation");var Z="".concat(O,"-expand");"string"===typeof l&&(Z="".concat(Z,"-").concat(l));var R=(0,s.useMemo)((function(){return{onToggle:function(){return null==x?void 0:x(!E)},bsPrefix:O,expanded:!!E,expand:l}}),[O,E,l,x]);return(0,d.jsx)(ce.Provider,{value:R,children:(0,d.jsx)(c.Z.Provider,{value:C,children:(0,d.jsx)(b,(0,r.Z)((0,r.Z)({ref:n},k),{},{className:i()(g,O,l&&Z,p&&"".concat(O,"-").concat(p),v&&"bg-".concat(v),h&&"sticky-".concat(h),m&&"fixed-".concat(m))}))})})}));_n.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},_n.displayName="Navbar";var An=Object.assign(_n,{Brand:m,Collapse:fe,Offcanvas:Mn,Text:Bn,Toggle:me})},6543:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var r=t(1413),o=t(5987),a=t(1694),i=t.n(a),s=/-(.)/g;var c=t(2791),u=t(162),l=t(184),f=["className","bsPrefix","as"],d=function(e){return e[0].toUpperCase()+(n=e,n.replace(s,(function(e,n){return n.toUpperCase()}))).slice(1);var n};function p(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.displayName,a=void 0===t?d(e):t,s=n.Component,p=n.defaultProps,v=c.forwardRef((function(n,t){var a=n.className,c=n.bsPrefix,d=n.as,p=void 0===d?s||"div":d,v=(0,o.Z)(n,f),m=(0,u.vE)(c,e);return(0,l.jsx)(p,(0,r.Z)({ref:t,className:i()(a,m)},v))}));return v.defaultProps=p,v.displayName=a,v}},2081:function(e,n,t){"use strict";t.d(n,{Ctf:function(){return f}});var r=t(2791),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(o),i=function(){return i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},i.apply(this,arguments)},s=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t};function c(e){return e&&e.map((function(e,n){return r.createElement(e.tag,i({key:n},e.attr),c(e.child))}))}function u(e){return function(n){return r.createElement(l,i({attr:i({},e.attr)},n),c(e.child))}}function l(e){var n=function(n){var t,o=e.attr,a=e.size,c=e.title,u=s(e,["attr","size","title"]),l=a||n.size||"1em";return n.className&&(t=n.className),e.className&&(t=(t?t+" ":"")+e.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,u,{className:t,style:i(i({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==a?r.createElement(a.Consumer,null,(function(e){return n(e)})):n(o)}function f(e){return u({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z"}}]})(e)}}}]);
//# sourceMappingURL=949.5ba1bd70.chunk.js.map