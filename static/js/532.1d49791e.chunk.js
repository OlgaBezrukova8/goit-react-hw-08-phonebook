"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[532],{2134:function(t,n,r){r.d(n,{Z:function(){return o}});var e=r(2791);var i=function(t){var n=(0,e.useRef)(t);return(0,e.useEffect)((function(){n.current=t}),[t]),n};function o(t){var n=i(t);return(0,e.useCallback)((function(){return n.current&&n.current.apply(n,arguments)}),[n])}},3201:function(t,n,r){var e=r(2791),i=function(t){return t&&"function"!==typeof t?function(n){t.current=n}:t};n.Z=function(t,n){return(0,e.useMemo)((function(){return function(t,n){var r=i(t),e=i(n);return function(t){r&&r(t),e&&e(t)}}(t,n)}),[t,n])}},1306:function(t,n,r){r.d(n,{$F:function(){return i},PB:function(){return e}});function e(t){return"".concat("data-rr-ui-").concat(t)}function i(t){return"".concat("rrUi").concat(t)}},8633:function(t,n,r){r.d(n,{h:function(){return i}});var e=r(2791).createContext(null),i=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!=t?String(t):n||null};n.Z=e},3808:function(t,n,r){r.d(n,{Z:function(){return i}});var e=Function.prototype.bind.call(Function.prototype.call,[].slice);function i(t,n){return e(t.querySelectorAll(n))}},2176:function(t){t.exports=function(t,n,r,e,i,o,u,c){if(!t){var a;if(void 0===n)a=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[r,e,i,o,u,c],f=0;(a=new Error(n.replace(/%s/g,(function(){return s[f++]})))).name="Invariant Violation"}throw a.framesToPop=1,a}}},239:function(t,n,r){r.d(n,{Ch:function(){return a}});var e=r(7462),i=r(3366),o=r(2791);r(2176);function u(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function c(t){var n=function(t,n){if("object"!==typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var e=r.call(t,n||"default");if("object"!==typeof e)return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===typeof n?n:String(n)}function a(t,n){return Object.keys(n).reduce((function(r,a){var s,f=r,l=f[u(a)],p=f[a],v=(0,i.Z)(f,[u(a),a].map(c)),h=n[a],d=function(t,n,r){var e=(0,o.useRef)(void 0!==t),i=(0,o.useState)(n),u=i[0],c=i[1],a=void 0!==t,s=e.current;return e.current=a,!a&&s&&u!==n&&c(n),[a?t:u,(0,o.useCallback)((function(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),i=1;i<n;i++)e[i-1]=arguments[i];r&&r.apply(void 0,[t].concat(e)),c(t)}),[r])]}(p,l,t[h]),m=d[0],g=d[1];return(0,e.Z)({},v,((s={})[a]=m,s[h]=g,s))}),t)}function s(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==t&&void 0!==t&&this.setState(t)}function f(t){this.setState(function(n){var r=this.constructor.getDerivedStateFromProps(t,n);return null!==r&&void 0!==r?r:null}.bind(this))}function l(t,n){try{var r=this.props,e=this.state;this.props=t,this.state=n,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(r,e)}finally{this.props=r,this.state=e}}s.__suppressDeprecationWarning=!0,f.__suppressDeprecationWarning=!0,l.__suppressDeprecationWarning=!0}}]);
//# sourceMappingURL=532.1d49791e.chunk.js.map