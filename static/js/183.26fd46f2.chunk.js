"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[183],{183:function(e,n,t){t.r(n),t.d(n,{default:function(){return Te}});var c=t(9439),a=t(9529),o=t(292),r=t(1752),i=t(7462),s=t(2791),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},u=t(4291),d=function(e,n){return s.createElement(u.Z,(0,i.Z)({},e,{ref:n,icon:l}))};var m=s.forwardRef(d),f=t(4210),p=t(43),v=t(7947),h=t(187),x=t(1418),g=t.n(x),Z=t(5179),C=t(1818),b=t(1929),j=t(9228),y=t(1783),_=t(7924),P=t(5428),w=t(4e3),z=t(8915),N=t(9152),O=t(4942),E=t(9867),L=(0,E.I$)("Popconfirm",(function(e){return function(e){var n,t,c=e.componentCls,a=e.iconCls,o=e.antCls,r=e.zIndexPopup,i=e.colorText,s=e.colorWarning,l=e.marginXXS,u=e.marginXS,d=e.fontSize,m=e.fontWeightStrong,f=e.colorTextHeading;return(0,O.Z)({},c,(t={zIndex:r},(0,O.Z)(t,"&".concat(o,"-popover"),{fontSize:d}),(0,O.Z)(t,"".concat(c,"-message"),(n={marginBottom:u,display:"flex",flexWrap:"nowrap",alignItems:"start"},(0,O.Z)(n,"> ".concat(c,"-message-icon ").concat(a),{color:s,fontSize:d,lineHeight:1,marginInlineEnd:u}),(0,O.Z)(n,"".concat(c,"-title"),{fontWeight:m,color:f,"&:only-child":{fontWeight:"normal"}}),(0,O.Z)(n,"".concat(c,"-description"),{marginTop:l,color:i}),n)),(0,O.Z)(t,"".concat(c,"-buttons"),{textAlign:"end",whiteSpace:"nowrap",button:{marginInlineStart:u}}),t))}(e)}),(function(e){return{zIndexPopup:e.zIndexPopupBase+60}}),{resetStyle:!1}),k=function(e,n){var t={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&n.indexOf(c)<0&&(t[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(c=Object.getOwnPropertySymbols(e);a<c.length;a++)n.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(e,c[a])&&(t[c[a]]=e[c[a]])}return t},I=function(e){var n=e.prefixCls,t=e.okButtonProps,a=e.cancelButtonProps,o=e.title,r=e.description,i=e.cancelText,l=e.okText,u=e.okType,d=void 0===u?"primary":u,m=e.icon,f=void 0===m?s.createElement(h.Z,null):m,p=e.showCancel,x=void 0===p||p,Z=e.close,C=e.onConfirm,j=e.onCancel,N=e.onPopupClick,O=s.useContext(b.E_).getPrefixCls,E=(0,w.Z)("Popconfirm",z.Z.Popconfirm),L=(0,c.Z)(E,1)[0],k=(0,_.Z)(o),I=(0,_.Z)(r);return s.createElement("div",{className:"".concat(n,"-inner-content"),onClick:N},s.createElement("div",{className:"".concat(n,"-message")},f&&s.createElement("span",{className:"".concat(n,"-message-icon")},f),s.createElement("div",{className:"".concat(n,"-message-text")},k&&s.createElement("div",{className:g()("".concat(n,"-title"))},k),I&&s.createElement("div",{className:"".concat(n,"-description")},I))),s.createElement("div",{className:"".concat(n,"-buttons")},x&&s.createElement(v.ZP,Object.assign({onClick:j,size:"small"},a),i||(null===L||void 0===L?void 0:L.cancelText)),s.createElement(y.Z,{buttonProps:Object.assign(Object.assign({size:"small"},(0,P.nx)(d)),t),actionFn:C,close:Z,prefixCls:O("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},l||(null===L||void 0===L?void 0:L.okText))))},S=function(e){var n=e.prefixCls,t=e.placement,a=e.className,o=e.style,r=k(e,["prefixCls","placement","className","style"]),i=(0,s.useContext(b.E_).getPrefixCls)("popconfirm",n),l=L(i);return(0,(0,c.Z)(l,1)[0])(s.createElement(N.ZP,{placement:t,className:g()(i,a),style:o,content:s.createElement(I,Object.assign({prefixCls:i},r))}))},T=void 0,A=function(e,n){var t={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&n.indexOf(c)<0&&(t[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(c=Object.getOwnPropertySymbols(e);a<c.length;a++)n.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(e,c[a])&&(t[c[a]]=e[c[a]])}return t},B=s.forwardRef((function(e,n){var t,a,o=e.prefixCls,r=e.placement,i=void 0===r?"top":r,l=e.trigger,u=void 0===l?"click":l,d=e.okType,m=void 0===d?"primary":d,f=e.icon,p=void 0===f?s.createElement(h.Z,null):f,v=e.children,x=e.overlayClassName,y=e.onOpenChange,_=e.onVisibleChange,P=A(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),w=s.useContext(b.E_).getPrefixCls,z=(0,Z.Z)(!1,{value:null!==(t=e.open)&&void 0!==t?t:e.visible,defaultValue:null!==(a=e.defaultOpen)&&void 0!==a?a:e.defaultVisible}),N=(0,c.Z)(z,2),O=N[0],E=N[1],k=function(e,n){E(e,!0),null===_||void 0===_||_(e),null===y||void 0===y||y(e,n)},S=w("popconfirm",o),B=g()(S,x),F=L(S);return(0,(0,c.Z)(F,1)[0])(s.createElement(j.Z,Object.assign({},(0,C.Z)(P,["title"]),{trigger:u,placement:i,onOpenChange:function(n,t){var c=e.disabled;void 0!==c&&c||k(n,t)},open:O,ref:n,overlayClassName:B,content:s.createElement(I,Object.assign({okType:m,icon:p},e,{prefixCls:S,close:function(e){k(!1,e)},onConfirm:function(n){var t;return null===(t=e.onConfirm)||void 0===t?void 0:t.call(T,n)},onCancel:function(n){var t;k(!1,n),null===(t=e.onCancel)||void 0===t||t.call(T,n)}})),"data-popover-inject":!0}),v))}));B._InternalPanelDoNotUseOrYouWillBeFired=S;var F=B,M=t(9069),H=t(1967),R={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},V=function(e,n){return s.createElement(u.Z,(0,i.Z)({},e,{ref:n,icon:R}))};var W=s.forwardRef(V),D=t(4420),q=t(4382),K=t(168),X=t(4034),Y=t(5569),U={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M678.3 642.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 00-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 505 759.6 431.7 759.6 349c0-137-110.8-248-247.5-248S264.7 212 264.7 349c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 00-80.4 119.5A373.6 373.6 0 00137 888.8a8 8 0 008 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 628.2 432.2 597 512.2 597c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 008.1.3zM512.2 521c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 01340.5 349c0-45.9 17.9-89.1 50.3-121.6S466.3 177 512.2 177s88.9 17.9 121.4 50.4A171.2 171.2 0 01683.9 349c0 45.9-17.9 89.1-50.3 121.6C601.1 503.1 558 521 512.2 521zM880 759h-84v-84c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v84h-84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h84v84c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-84h84c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},name:"user-add",theme:"outlined"},$=function(e,n){return s.createElement(u.Z,(0,i.Z)({},e,{ref:n,icon:U}))};var G,J,Q,ee,ne,te,ce,ae,oe,re,ie=s.forwardRef($),se=(0,X.ZP)(Y.Z)(G||(G=(0,K.Z)(["\n  margin: 0 auto;\n"]))),le=(0,X.ZP)(v.ZP)(J||(J=(0,K.Z)(["\n  width: 100%;\n  height: 35px;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),ue=(0,X.ZP)(ie)(Q||(Q=(0,K.Z)(["\n  color: #c7c6c6;\n"]))),de=(0,X.ZP)(o.Z)(ee||(ee=(0,K.Z)(["\n  color: #c7c6c6;\n"]))),me=(0,X.ZP)(H.Z)(ne||(ne=(0,K.Z)(["\n  height: 35px;\n  font-size: 18px;\n  width: 100%;\n"]))),fe=(0,X.ZP)(M.Z)(te||(te=(0,K.Z)(["\n  text-align: center;\n  .ant-modal-content {\n    width: 340px;\n    height: 225px;\n    position: absolute;\n    top: 50%;\n    left: 20%;\n  }\n"]))),pe=(0,X.ZP)(v.ZP)(ce||(ce=(0,K.Z)(["\n  margin: 15px 0;\n"]))),ve=t(184),he=function(){var e=(0,s.useState)(!1),n=(0,c.Z)(e,2),t=n[0],a=n[1],o=se.useForm(),r=(0,c.Z)(o,1)[0],i=(0,D.v9)((function(e){return e.contacts.items})),l=(0,D.v9)((function(e){return e.contacts.isLoading})),u=(0,D.I0)();return(0,ve.jsxs)(ve.Fragment,{children:[(0,ve.jsxs)(pe,{type:"primary",onClick:function(){r.resetFields(),a(!0)},title:"add new contact",size:"large",children:[(0,ve.jsx)(W,{}),"Add contact"]}),(0,ve.jsx)(fe,{footer:null,title:"Add new contact",open:t,onCancel:function(){return a(!1)},children:(0,ve.jsxs)(se,{form:r,name:"normal_login",initialValues:{remember:!0},onFinish:function(e){var n={name:e.name,number:function(){var n=e.number;return n.length<7?"(".concat(n.slice(0,3),") ").concat(n.slice(3)):"(".concat(n.slice(0,3),") ").concat(n.slice(3,6),"-").concat(n.slice(6,10))}()},t=n.name.toLowerCase();i.find((function(e){return e.name.toLowerCase()===t}))?alert("".concat(n.name," is already in contact")):(u((0,q.uK)(n)),l||(r.resetFields(),a(!1)))},children:[(0,ve.jsx)(se.Item,{name:"name",rules:[{required:!0,message:"Please input Name!",type:"text"}],children:(0,ve.jsx)(me,{prefix:(0,ve.jsx)(ue,{}),placeholder:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"})}),(0,ve.jsx)(se.Item,{name:"number",rules:[{required:!0,message:"Please input Number!",type:"phone"}],children:(0,ve.jsx)(me,{prefix:(0,ve.jsx)(de,{}),type:"",placeholder:"Number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}"})}),(0,ve.jsx)(se.Item,{children:(0,ve.jsx)(le,{type:"primary",htmlType:"submit",children:"Create contact"})})]})})]})},xe=t(1730),ge=t(5054),Ze=X.ZP.div(ae||(ae=(0,K.Z)(["\n  font-size: 20px;\n"]))),Ce=(0,X.ZP)(H.Z)(oe||(oe=(0,K.Z)(["\n  height: 40px;\n  width: 230px;\n  padding: 0 10px;\n  font-size: 20px;\n  border: 1px solid #000000;\n  border-radius: 7px;\n  transition: box-shadow cubic-bezier(0.17, 0.67, 0.86, 0.57) 300ms;\n"]))),be=X.ZP.p(re||(re=(0,K.Z)(["\n  font-weight: 500;\n  margin-bottom: 20px;\n  color: #2e2d2dbc;\n"]))),je=function(){var e=(0,D.I0)(),n=(0,D.v9)((function(e){return e.filter}));return(0,ve.jsxs)(Ze,{children:[(0,ve.jsx)(be,{children:"Find contacts by name"})," ",(0,ve.jsx)(Ce,{prefix:(0,ve.jsx)(xe.Z,{}),type:"text",value:n,onChange:function(n){return e((0,ge.ut)(n.target.value))}})]})},ye="ContactList_container__JhlgT",_e="ContactList_title__21SrP",Pe="ContactList_spinner__evIy9",we="ContactList_list__zzIDB",ze="ContactList_item__9zCKy",Ne="ContactList_divName__pMwmY",Oe="ContactList_userIconList__bUu27",Ee="ContactList_phoneIconList__zl75f",Le="ContactList_buttonRedact__O4vk4",ke="ContactList_modalRedact__ml6Af",Ie="ContactList_inputForm__tDAfP",Se="ContactList_section__66-OO";function Te(){var e=(0,s.useState)(""),n=(0,c.Z)(e,2),t=n[0],i=n[1],l=(0,s.useState)(""),u=(0,c.Z)(l,2),d=u[0],h=u[1],x=(0,s.useState)(null),g=(0,c.Z)(x,2),Z=g[0],C=g[1],b=(0,s.useState)(!1),j=(0,c.Z)(b,2),y=j[0],_=j[1],P=(0,D.I0)();(0,s.useEffect)((function(){P((0,q.yF)())}),[P]);var w=(0,D.v9)((function(e){return e.contacts})).isLoading,z=(0,D.v9)((function(e){return e.contacts.items})),N=(0,D.v9)((function(e){return e.filter})).toLowerCase(),O=z.filter((function(e){return e.name.toLowerCase().includes(N)}));return(0,ve.jsx)("section",{className:Se,children:(0,ve.jsxs)("div",{className:ye,children:[(0,ve.jsxs)("div",{children:[z.length<1?(0,ve.jsx)("h2",{className:_e,children:"Add your first contact"}):(0,ve.jsx)(je,{}),(0,ve.jsx)(he,{}),w&&(0,ve.jsx)(p.Z,{className:Pe})]}),(0,ve.jsxs)("ul",{className:we,children:[O.map((function(e){var n=e.id,t=e.name,c=e.number;return(0,ve.jsxs)("li",{className:ze,children:[(0,ve.jsxs)("div",{className:Ne,children:[(0,ve.jsx)(a.Z,{className:Oe}),t,":"]}),(0,ve.jsx)(o.Z,{className:Ee})," ",c,(0,ve.jsxs)(v.ZP,{onClick:function(){return function(e,n,t){h(n),i(e),C(t),_(!0)}(t,c,n)},className:Le,title:"Edit contact",children:[(0,ve.jsx)(r.Z,{}),"Edit"]}),(0,ve.jsx)(F,{title:"Are you sure delete this task?",okText:"Yes",cancelText:"No",onConfirm:function(){return P((0,q.GK)(n))},children:(0,ve.jsxs)(v.ZP,{title:"delete contact",type:"primary",children:[(0,ve.jsx)(m,{})," Delete"]})})]},n)})),(0,ve.jsxs)(M.Z,{title:"Edit a contact",open:y,onOk:function(){_(!1),P((0,q.Im)({id:Z,name:t,number:d}))},onCancel:function(){_(!1)},className:ke,children:[(0,ve.jsx)(H.Z,{prefix:(0,ve.jsx)(f.Z,{}),value:t,onChange:function(e){i(e.target.value)},className:Ie}),(0,ve.jsx)(H.Z,{prefix:(0,ve.jsx)(o.Z,{}),value:d,onChange:function(e){h(e.target.value)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",className:Ie})]})]})]})})}},1752:function(e,n,t){t.d(n,{Z:function(){return s}});var c=t(7462),a=t(2791),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},r=t(4291),i=function(e,n){return a.createElement(r.Z,(0,c.Z)({},e,{ref:n,icon:o}))};var s=a.forwardRef(i)}}]);
//# sourceMappingURL=183.26fd46f2.chunk.js.map