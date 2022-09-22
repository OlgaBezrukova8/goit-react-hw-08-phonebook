"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[410],{7648:function(e,n,t){t.d(n,{k:function(){return s}});var a=t(1413),r=t(5987),i=t(3360),o={},l=t(184),c=["children"],s=function(e){var n=e.children,t=(0,r.Z)(e,c);return(0,l.jsx)(i.Z,(0,a.Z)((0,a.Z)({size:"sm",className:o.button},t),{},{children:n}))}},6410:function(e,n,t){t.r(n),t.d(n,{default:function(){return he}});var a=t(9434),r=t(6871),i=function(e){return e.filter},o=function(e,n){if(n){var t=n.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)}))}return e},l=t(5577),c=t(8786),s=t(3855),u=t(184),d=function(e){var n=e.value,t=e.onChange;return(0,u.jsx)(s.Z,{children:(0,u.jsxs)(s.Z.Group,{className:"mb-3",controlId:"formBasicFilter",children:[(0,u.jsx)(s.Z.Label,{children:" Find contacts by name"}),(0,u.jsx)(s.Z.Control,{type:"text",placeholder:"...",value:n,onChange:t})]})})},v=t(885),f=t(2791),m=t(5036),h=function(e){return e.contacts.contacts},x=function(e){return e.contacts.isLoading},p=function(){return(0,a.v9)(x)},b=t(4164);function j(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var y,Z,g,C=t(6444),k=C.ZP.div(y||(y=j(["\npadding: 20px;\n"]))),w=C.ZP.label(Z||(Z=j(["\ndisplay: block;\nmargin-bottom: 20px;\n\nfont-size: 14px;\nfont-weight: 600;\n"]))),N=C.ZP.input(g||(g=j(["\ndisplay: flex;\nmargin-top: 6px;\npadding: 6px;\nwidth: 200px;\n\nborder: 1px solid var(--accent-color);\nborder-radius: 4px;\n\noutline: none;\n\n&:focus {\n    border: 1px solid var(--hover-border-color);\n}\n"]))),I=t(7648),P=function(e){var n=e.contact,t=e.hideModal,r=(0,f.useState)(n.name),i=(0,v.Z)(r,2),o=i[0],l=i[1],c=(0,f.useState)(n.number),s=(0,v.Z)(c,2),d=s[0],h=s[1],x=(0,a.I0)(),p=function(e){var n=e.target,t=n.name,a=n.value;"name"===t?l(a):h(a)},b=function(e){x((0,m.Tk)({id:e,name:o,number:d}))};return(0,u.jsx)(k,{children:(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),b(n.id),t()},children:[(0,u.jsxs)(w,{children:["Name",(0,u.jsx)(N,{value:o,onChange:p,type:"text",name:"name",placeholder:"Update user email",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,u.jsxs)(w,{children:["Number",(0,u.jsx)(N,{value:d,onChange:p,type:"text",name:"number",placeholder:"Update user password",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,u.jsx)(I.k,{variant:"outline-success",type:"submit",onClick:function(){return b},children:"Update"}),(0,u.jsx)(I.k,{variant:"outline-warning",type:"submit",onClick:function(){return t()},children:"Cancel"})]})})},A="contactModal_modal__WUwky",z=document.querySelector("#modal-root"),K=function(e){var n=e.showModal,t=e.contact,a=e.hideModal;return n?(0,b.createPortal)((0,u.jsx)("div",{className:A,children:(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:"Update your contact"}),(0,u.jsx)(P,{contact:t,hideModal:a})]})}),z):null},O=t(1413),S=t(5987),D=t(1694),_=t.n(D),E=(t(2391),t(239)),L=t(3808);var M=t(3201),B=f.createContext(null);B.displayName="NavContext";var F=B,R=t(8633),q=f.createContext(null),U=t(1306),G=t(2134),$=t(5341),J=["as","active","eventKey"];function T(e){var n=e.key,t=e.onClick,a=e.active,r=e.id,i=e.role,o=e.disabled,l=(0,f.useContext)(R.Z),c=(0,f.useContext)(F),s=(0,f.useContext)(q),u=a,d={role:i};if(c){i||"tablist"!==c.role||(d.role="tab");var v=c.getControllerId(null!=n?n:null),m=c.getControlledId(null!=n?n:null);d[(0,U.PB)("event-key")]=n,d.id=v||r,!(u=null==a&&null!=n?c.activeKey===n:a)&&(null!=s&&s.unmountOnExit||null!=s&&s.mountOnEnter)||(d["aria-controls"]=m)}return"tab"===d.role&&(d["aria-selected"]=u,u||(d.tabIndex=-1),o&&(d.tabIndex=-1,d["aria-disabled"]=!0)),d.onClick=(0,G.Z)((function(e){o||(null==t||t(e),null!=n&&l&&!e.isPropagationStopped()&&l(n,e))})),[d,{isActive:u}]}var W=f.forwardRef((function(e,n){var t=e.as,a=void 0===t?$.ZP:t,r=e.active,i=e.eventKey,o=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,J),l=T(Object.assign({key:(0,R.h)(i,o.href),active:r},o)),c=(0,v.Z)(l,2),s=c[0],d=c[1];return s[(0,U.PB)("active")]=d.isActive,(0,u.jsx)(a,Object.assign({},o,s,{ref:n}))}));W.displayName="NavItem";var H=W,Q=["as","onSelect","activeKey","role","onKeyDown"];var V=function(){},X=(0,U.PB)("event-key"),Y=f.forwardRef((function(e,n){var t,a,r=e.as,i=void 0===r?"div":r,o=e.onSelect,l=e.activeKey,c=e.role,s=e.onKeyDown,d=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,Q),v=(0,f.useReducer)((function(e){return!e}),!1)[1],m=(0,f.useRef)(!1),h=(0,f.useContext)(R.Z),x=(0,f.useContext)(q);x&&(c=c||"tablist",l=x.activeKey,t=x.getControlledId,a=x.getControllerId);var p=(0,f.useRef)(null),b=function(e){var n=p.current;if(!n)return null;var t=(0,L.Z)(n,"[".concat(X,"]:not([aria-disabled=true])")),a=n.querySelector("[aria-selected=true]");if(!a||a!==document.activeElement)return null;var r=t.indexOf(a);if(-1===r)return null;var i=r+e;return i>=t.length&&(i=0),i<0&&(i=t.length-1),t[i]},j=function(e,n){null!=e&&(null==o||o(e,n),null==h||h(e,n))};(0,f.useEffect)((function(){if(p.current&&m.current){var e=p.current.querySelector("[".concat(X,"][aria-selected=true]"));null==e||e.focus()}m.current=!1}));var y=(0,M.Z)(n,p);return(0,u.jsx)(R.Z.Provider,{value:j,children:(0,u.jsx)(F.Provider,{value:{role:c,activeKey:(0,R.h)(l),getControlledId:t||V,getControllerId:a||V},children:(0,u.jsx)(i,Object.assign({},d,{onKeyDown:function(e){if(null==s||s(e),x){var n;switch(e.key){case"ArrowLeft":case"ArrowUp":n=b(-1);break;case"ArrowRight":case"ArrowDown":n=b(1);break;default:return}n&&(e.preventDefault(),j(n.dataset[(0,U.$F)("EventKey")]||null,e),m.current=!0,v())}},ref:y,role:c}))})})}));Y.displayName="Nav";var ee=Object.assign(Y,{Item:H}),ne=t(162),te=["bsPrefix","active","disabled","eventKey","className","variant","action","as"],ae=f.forwardRef((function(e,n){var t=e.bsPrefix,a=e.active,r=e.disabled,i=e.eventKey,o=e.className,l=e.variant,c=e.action,s=e.as,d=(0,S.Z)(e,te);t=(0,ne.vE)(t,"list-group-item");var f=T((0,O.Z)({key:(0,R.h)(i,d.href),active:a},d)),m=(0,v.Z)(f,2),h=m[0],x=m[1],p=(0,G.Z)((function(e){if(r)return e.preventDefault(),void e.stopPropagation();h.onClick(e)}));r&&void 0===d.tabIndex&&(d.tabIndex=-1,d["aria-disabled"]=!0);var b=s||(c?d.href?"a":"button":"div");return(0,u.jsx)(b,(0,O.Z)((0,O.Z)((0,O.Z)({ref:n},d),h),{},{onClick:p,className:_()(o,t,x.isActive&&"active",r&&"disabled",l&&"".concat(t,"-").concat(l),c&&"".concat(t,"-action"))}))}));ae.displayName="ListGroupItem";var re=ae,ie=["className","bsPrefix","variant","horizontal","numbered","as"],oe=f.forwardRef((function(e,n){var t,a=(0,E.Ch)(e,{activeKey:"onSelect"}),r=a.className,i=a.bsPrefix,o=a.variant,l=a.horizontal,c=a.numbered,s=a.as,d=void 0===s?"div":s,v=(0,S.Z)(a,ie),f=(0,ne.vE)(i,"list-group");return l&&(t=!0===l?"horizontal":"horizontal-".concat(l)),(0,u.jsx)(ee,(0,O.Z)((0,O.Z)({ref:n},v),{},{as:d,className:_()(r,f,o&&"".concat(f,"-").concat(o),t&&"".concat(f,"-").concat(t),c&&"".concat(f,"-numbered"))}))}));oe.displayName="ListGroup";var le=Object.assign(oe,{Item:re}),ce=function(e){var n=e.data,t=(0,f.useState)(null),r=(0,v.Z)(t,2),i=r[0],l=r[1],c=(0,f.useState)(!1),s=(0,v.Z)(c,2),d=s[0],h=s[1],x=(0,a.I0)(),b=p();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(K,{showModal:d,contact:i,hideModal:function(){return h(!1)}}),o(n).map((function(e){var n=e.id,t=e.name,a=e.number;return(0,u.jsxs)(le.Item,{className:"d-flex p-2 align-items-center",children:[(0,u.jsxs)("p",{children:[t,": ",a]}),(0,u.jsx)(I.k,{onClick:function(){l({id:n,name:t,number:a}),h(!0)},disabled:b,children:"Update"}),(0,u.jsx)(I.k,{onClick:function(){return x((0,m.GK)(n))},disabled:b,children:"Delete"})]},n)}))]})},se=function(){var e=(0,a.v9)(i),n=(0,a.v9)(h);return(0,u.jsx)(le,{variant:"flush",children:(0,u.jsx)(ce,{data:o(n,e)})})},ue=t(5562),de=t(7022),ve=function(){var e=(0,f.useState)(""),n=(0,v.Z)(e,2),t=n[0],r=n[1],i=(0,f.useState)(""),o=(0,v.Z)(i,2),l=o[0],c=o[1],d=(0,a.I0)(),x=(0,a.v9)(h),b=p(),j=function(e){var n=e.target,t=n.name,a=n.value;"name"===t?r(a):c(a)},y=function(e){return e.preventDefault(),n=t,0!==x.filter((function(e){return e.name===n})).length?(ue.Notify.warning("".concat(t," is already in contacts")),!1):(d((0,m.uK)({name:t,number:l})),!0);var n};return(0,u.jsx)(de.Z,{children:(0,u.jsxs)(s.Z,{onSubmit:function(e){y(e)&&(r(""),c(""))},children:[(0,u.jsxs)(s.Z.Group,{className:"mb-3",controlId:"formBasicName",children:[(0,u.jsx)(s.Z.Label,{children:"Name"}),(0,u.jsx)(s.Z.Control,{type:"text",name:"name",placeholder:"Enter name",onChange:j,value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,u.jsxs)(s.Z.Group,{className:"mb-3",controlId:"formBasicNumber",children:[(0,u.jsx)(s.Z.Label,{children:"Number"}),(0,u.jsx)(s.Z.Control,{type:"number",name:"tel",placeholder:"Enter number",onChange:j,value:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,u.jsx)(I.k,{type:"submit",disabled:b,children:"Add contact"})]})})},fe=t(1291),me="phonebookPage_container__Pzk9D",he=function(){var e=(0,a.v9)(i),n=(0,fe.a)(),t=p(),o=(0,a.I0)();return(0,u.jsxs)("div",{className:me,children:[t&&(0,u.jsx)(c.a,{}),n?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{children:[(0,u.jsx)(d,{value:e,onChange:function(e){var n=e.target;o((0,l.T)(n.value))}}),(0,u.jsx)(se,{})]}),(0,u.jsx)("div",{children:(0,u.jsx)(ve,{})})]}):(0,u.jsx)(r.Fg,{to:"/"})]})}}}]);
//# sourceMappingURL=410.f66dca97.chunk.js.map