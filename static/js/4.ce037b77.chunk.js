"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[4],{6004:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ne}});var a=n(9439),c=n(9529),o=n(292),r=n(1752),i=n(7462),s=n(2791),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},u=n(4291),m=function(e,t){return s.createElement(u.Z,(0,i.Z)({},e,{ref:t,icon:l}))};var d=s.forwardRef(m),f=n(4210),p=n(43),v=n(7947),h=n(187),x=n(1418),_=n.n(x),C=n(5179),g=n(1818),Z=n(1929),j=n(9228),y=n(1783),b=n(7924),N=n(5428),O=n(4e3),z=n(8915),w=n(9152),E=n(4942),P=n(9867),I=(0,P.I$)("Popconfirm",(function(e){return function(e){var t,n,a=e.componentCls,c=e.iconCls,o=e.antCls,r=e.zIndexPopup,i=e.colorText,s=e.colorWarning,l=e.marginXXS,u=e.marginXS,m=e.fontSize,d=e.fontWeightStrong,f=e.colorTextHeading;return(0,E.Z)({},a,(n={zIndex:r},(0,E.Z)(n,"&".concat(o,"-popover"),{fontSize:m}),(0,E.Z)(n,"".concat(a,"-message"),(t={marginBottom:u,display:"flex",flexWrap:"nowrap",alignItems:"start"},(0,E.Z)(t,"> ".concat(a,"-message-icon ").concat(c),{color:s,fontSize:m,lineHeight:1,marginInlineEnd:u}),(0,E.Z)(t,"".concat(a,"-title"),{fontWeight:d,color:f,"&:only-child":{fontWeight:"normal"}}),(0,E.Z)(t,"".concat(a,"-description"),{marginTop:l,color:i}),t)),(0,E.Z)(n,"".concat(a,"-buttons"),{textAlign:"end",whiteSpace:"nowrap",button:{marginInlineStart:u}}),n))}(e)}),(function(e){return{zIndexPopup:e.zIndexPopupBase+60}}),{resetStyle:!1}),k=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n},L=function(e){var t=e.prefixCls,n=e.okButtonProps,c=e.cancelButtonProps,o=e.title,r=e.description,i=e.cancelText,l=e.okText,u=e.okType,m=void 0===u?"primary":u,d=e.icon,f=void 0===d?s.createElement(h.Z,null):d,p=e.showCancel,x=void 0===p||p,C=e.close,g=e.onConfirm,j=e.onCancel,w=e.onPopupClick,E=s.useContext(Z.E_).getPrefixCls,P=(0,O.Z)("Popconfirm",z.Z.Popconfirm),I=(0,a.Z)(P,1)[0],k=(0,b.Z)(o),L=(0,b.Z)(r);return s.createElement("div",{className:"".concat(t,"-inner-content"),onClick:w},s.createElement("div",{className:"".concat(t,"-message")},f&&s.createElement("span",{className:"".concat(t,"-message-icon")},f),s.createElement("div",{className:"".concat(t,"-message-text")},k&&s.createElement("div",{className:_()("".concat(t,"-title"))},k),L&&s.createElement("div",{className:"".concat(t,"-description")},L))),s.createElement("div",{className:"".concat(t,"-buttons")},x&&s.createElement(v.ZP,Object.assign({onClick:j,size:"small"},c),i||(null===I||void 0===I?void 0:I.cancelText)),s.createElement(y.Z,{buttonProps:Object.assign(Object.assign({size:"small"},(0,N.nx)(m)),n),actionFn:g,close:C,prefixCls:E("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},l||(null===I||void 0===I?void 0:I.okText))))},F=function(e){var t=e.prefixCls,n=e.placement,c=e.className,o=e.style,r=k(e,["prefixCls","placement","className","style"]),i=(0,s.useContext(Z.E_).getPrefixCls)("popconfirm",t),l=I(i);return(0,(0,a.Z)(l,1)[0])(s.createElement(w.ZP,{placement:n,className:_()(i,c),style:o,content:s.createElement(L,Object.assign({prefixCls:i},r))}))},S=void 0,M=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n},T=s.forwardRef((function(e,t){var n,c,o=e.prefixCls,r=e.placement,i=void 0===r?"top":r,l=e.trigger,u=void 0===l?"click":l,m=e.okType,d=void 0===m?"primary":m,f=e.icon,p=void 0===f?s.createElement(h.Z,null):f,v=e.children,x=e.overlayClassName,y=e.onOpenChange,b=e.onVisibleChange,N=M(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),O=s.useContext(Z.E_).getPrefixCls,z=(0,C.Z)(!1,{value:null!==(n=e.open)&&void 0!==n?n:e.visible,defaultValue:null!==(c=e.defaultOpen)&&void 0!==c?c:e.defaultVisible}),w=(0,a.Z)(z,2),E=w[0],P=w[1],k=function(e,t){P(e,!0),null===b||void 0===b||b(e),null===y||void 0===y||y(e,t)},F=O("popconfirm",o),T=_()(F,x),A=I(F);return(0,(0,a.Z)(A,1)[0])(s.createElement(j.Z,Object.assign({},(0,g.Z)(N,["title"]),{trigger:u,placement:i,onOpenChange:function(t,n){var a=e.disabled;void 0!==a&&a||k(t,n)},open:E,ref:t,overlayClassName:T,content:s.createElement(L,Object.assign({okType:d,icon:p},e,{prefixCls:F,close:function(e){k(!1,e)},onConfirm:function(t){var n;return null===(n=e.onConfirm)||void 0===n?void 0:n.call(S,t)},onCancel:function(t){var n;k(!1,t),null===(n=e.onCancel)||void 0===n||n.call(S,t)}})),"data-popover-inject":!0}),v))}));T._InternalPanelDoNotUseOrYouWillBeFired=F;var A=T,B=n(9069),V=n(1967),W={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},H=function(e,t){return s.createElement(u.Z,(0,i.Z)({},e,{ref:t,icon:W}))};var R=s.forwardRef(H),D={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M678.3 642.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 00-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 505 759.6 431.7 759.6 349c0-137-110.8-248-247.5-248S264.7 212 264.7 349c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 00-80.4 119.5A373.6 373.6 0 00137 888.8a8 8 0 008 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 628.2 432.2 597 512.2 597c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 008.1.3zM512.2 521c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 01340.5 349c0-45.9 17.9-89.1 50.3-121.6S466.3 177 512.2 177s88.9 17.9 121.4 50.4A171.2 171.2 0 01683.9 349c0 45.9-17.9 89.1-50.3 121.6C601.1 503.1 558 521 512.2 521zM880 759h-84v-84c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v84h-84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h84v84c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-84h84c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},name:"user-add",theme:"outlined"},K=function(e,t){return s.createElement(u.Z,(0,i.Z)({},e,{ref:t,icon:D}))};var q=s.forwardRef(K),U=n(5569),X=n(4420),Y=n(4382),G="ContactForm_formWrap__LBMtj",J="ContactForm_addModalBtn__VNazz",Q="ContactForm_userIcon__bVOWB",$="ContactForm_phoneIcon__IkW9o",ee="ContactForm_inputForm__4bzZs",te="ContactForm_addModal__97oxo",ne="ContactForm_openAddModal__Qe79G",ae=n(184),ce=function(){var e=(0,s.useState)(!1),t=(0,a.Z)(e,2),n=t[0],c=t[1],r=U.Z.useForm(),i=(0,a.Z)(r,1)[0],l=(0,X.v9)((function(e){return e.contacts.items})),u=(0,X.v9)((function(e){return e.contacts.isLoading})),m=(0,X.I0)();return(0,ae.jsxs)(ae.Fragment,{children:[(0,ae.jsxs)(v.ZP,{className:ne,type:"primary",onClick:function(){i.resetFields(),c(!0)},title:"add new contact",size:"large",children:[(0,ae.jsx)(R,{}),"Add contact"]}),(0,ae.jsx)(B.Z,{className:te,footer:null,title:"Add new contact",open:n,onCancel:function(){return c(!1)},children:(0,ae.jsxs)(U.Z,{form:i,name:"normal_login",initialValues:{remember:!0},onFinish:function(e){var t={name:e.name,number:function(){var t=e.number;return t.length<7?"(".concat(t.slice(0,3),") ").concat(t.slice(3)):"(".concat(t.slice(0,3),") ").concat(t.slice(3,6),"-").concat(t.slice(6,10))}()},n=t.name.toLowerCase();l.find((function(e){return e.name.toLowerCase()===n}))?alert("".concat(t.name," is already in contact")):(m((0,Y.uK)(t)),u||(i.resetFields(),c(!1)))},className:G,children:[(0,ae.jsx)(U.Z.Item,{name:"name",rules:[{required:!0,message:"Please input Name!",type:"text"}],children:(0,ae.jsx)(V.Z,{className:ee,prefix:(0,ae.jsx)(q,{className:Q}),placeholder:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"})}),(0,ae.jsx)(U.Z.Item,{name:"number",rules:[{required:!0,message:"Please input Number!",type:"phone"}],children:(0,ae.jsx)(V.Z,{className:ee,prefix:(0,ae.jsx)(o.Z,{className:$}),type:"",placeholder:"Number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}"})}),(0,ae.jsx)(U.Z.Item,{children:(0,ae.jsx)(v.ZP,{type:"primary",htmlType:"submit",className:J,children:"Create contact"})})]})})]})},oe=n(1730),re=n(5054),ie="Filter_wrapperFilter__RUcfr",se="Filter_filterInputContainer__b9klK",le="Filter_filterInput__1Cysk",ue="Filter_filterP__iJM-E",me="Filter_filterIcon__QWr7x",de=function(){var e=(0,X.I0)(),t=(0,X.v9)((function(e){return e.filter}));return(0,ae.jsxs)("div",{className:ie,children:[(0,ae.jsx)("p",{className:ue,children:"Find contacts by name"}),(0,ae.jsxs)("div",{className:se,children:[(0,ae.jsx)(oe.Z,{className:me}),(0,ae.jsx)("input",{className:le,type:"text",value:t,onChange:function(t){return e((0,re.ut)(t.target.value))},placeholder:"Search..."})]})]})},fe="ContactList_container__JhlgT",pe="ContactList_title__21SrP",ve="ContactList_spinner__evIy9",he="ContactList_list__zzIDB",xe="ContactList_item__9zCKy",_e="ContactList_divName__pMwmY",Ce="ContactList_userIconList__bUu27",ge="ContactList_phoneIconList__zl75f",Ze="ContactList_buttonRedact__O4vk4",je="ContactList_modalRedact__ml6Af",ye="ContactList_inputForm__tDAfP",be="ContactList_section__66-OO";function Ne(){var e=(0,s.useState)(""),t=(0,a.Z)(e,2),n=t[0],i=t[1],l=(0,s.useState)(""),u=(0,a.Z)(l,2),m=u[0],h=u[1],x=(0,s.useState)(null),_=(0,a.Z)(x,2),C=_[0],g=_[1],Z=(0,s.useState)(!1),j=(0,a.Z)(Z,2),y=j[0],b=j[1],N=(0,X.I0)();(0,s.useEffect)((function(){N((0,Y.yF)())}),[N]);var O=(0,X.v9)((function(e){return e.contacts})).isLoading,z=(0,X.v9)((function(e){return e.contacts.items})),w=(0,X.v9)((function(e){return e.filter})).toLowerCase(),E=z.filter((function(e){return e.name.toLowerCase().includes(w)}));return(0,ae.jsx)("section",{className:be,children:(0,ae.jsxs)("div",{className:fe,children:[(0,ae.jsxs)("div",{children:[z.length<1?(0,ae.jsx)("h2",{className:pe,children:"Add your first contact"}):(0,ae.jsx)(de,{}),(0,ae.jsx)(ce,{}),O&&(0,ae.jsx)(p.Z,{className:ve})]}),(0,ae.jsxs)("ul",{className:he,children:[E.map((function(e){var t=e.id,n=e.name,a=e.number;return(0,ae.jsxs)("li",{className:xe,children:[(0,ae.jsxs)("div",{className:_e,children:[(0,ae.jsx)(c.Z,{className:Ce}),n,":"]}),(0,ae.jsx)(o.Z,{className:ge})," ",a,(0,ae.jsxs)(v.ZP,{onClick:function(){return function(e,t,n){h(t),i(e),g(n),b(!0)}(n,a,t)},className:Ze,title:"Edit contact",children:[(0,ae.jsx)(r.Z,{}),"Edit"]}),(0,ae.jsx)(A,{title:"Are you sure delete this task?",okText:"Yes",cancelText:"No",onConfirm:function(){return N((0,Y.GK)(t))},children:(0,ae.jsxs)(v.ZP,{title:"delete contact",type:"primary",children:[(0,ae.jsx)(d,{})," Delete"]})})]},t)})),(0,ae.jsxs)(B.Z,{title:"Edit a contact",open:y,onOk:function(){b(!1),N((0,Y.Im)({id:C,name:n,number:m}))},onCancel:function(){b(!1)},className:je,children:[(0,ae.jsx)(V.Z,{prefix:(0,ae.jsx)(f.Z,{}),value:n,onChange:function(e){i(e.target.value)},className:ye}),(0,ae.jsx)(V.Z,{prefix:(0,ae.jsx)(o.Z,{}),value:m,onChange:function(e){h(e.target.value)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",className:ye})]})]})]})})}},1752:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7462),c=n(2791),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},r=n(4291),i=function(e,t){return c.createElement(r.Z,(0,a.Z)({},e,{ref:t,icon:o}))};var s=c.forwardRef(i)}}]);
//# sourceMappingURL=4.ce037b77.chunk.js.map