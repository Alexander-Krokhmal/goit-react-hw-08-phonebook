/*! For license information please see 981.5ec18075.chunk.js.LICENSE.txt */
(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[981],{3044:function(e,t,r){"use strict";r.d(t,{Z:function(){return w}});var n=r(9439),o=r(1048),i=r(2793),a=r(2791),c=r(8182),u=r(4419),s=r(6934),f=r(1402),l=r(9201),p=r(184),d=(0,l.Z)((0,p.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),y=r(5878),h=r(1217);function b(e){return(0,h.Z)("MuiAvatar",e)}(0,y.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var m=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],v=(0,s.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})((function(e){var t=e.theme,r=e.ownerState;return(0,i.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===r.variant&&{borderRadius:(t.vars||t).shape.borderRadius},"square"===r.variant&&{borderRadius:0},r.colorDefault&&(0,i.Z)({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[600]}))})),g=(0,s.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,t){return t.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),T=(0,s.ZP)(d,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,t){return t.fallback}})({width:"75%",height:"75%"});var w=a.forwardRef((function(e,t){var r=(0,f.Z)({props:e,name:"MuiAvatar"}),s=r.alt,l=r.children,d=r.className,y=r.component,h=void 0===y?"div":y,w=r.imgProps,O=r.sizes,A=r.src,S=r.srcSet,C=r.variant,E=void 0===C?"circular":C,j=(0,o.Z)(r,m),k=null,P=function(e){var t=e.crossOrigin,r=e.referrerPolicy,o=e.src,i=e.srcSet,c=a.useState(!1),u=(0,n.Z)(c,2),s=u[0],f=u[1];return a.useEffect((function(){if(o||i){f(!1);var e=!0,n=new Image;return n.onload=function(){e&&f("loaded")},n.onerror=function(){e&&f("error")},n.crossOrigin=t,n.referrerPolicy=r,n.src=o,i&&(n.srcset=i),function(){e=!1}}}),[t,r,o,i]),s}((0,i.Z)({},w,{src:A,srcSet:S})),x=A||S,I=x&&"error"!==P,L=(0,i.Z)({},r,{colorDefault:!I,component:h,variant:E}),R=function(e){var t=e.classes,r={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,u.Z)(r,b,t)}(L);return k=I?(0,p.jsx)(g,(0,i.Z)({alt:s,src:A,srcSet:S,sizes:O,ownerState:L,className:R.img},w)):null!=l?l:x&&s?s[0]:(0,p.jsx)(T,{className:R.fallback}),(0,p.jsx)(v,(0,i.Z)({as:h,ownerState:L,className:(0,c.Z)(R.root,d),ref:t},j,{children:k}))}))},1725:function(e){"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var a,c,u=o(e),s=1;s<arguments.length;s++){for(var f in a=Object(arguments[s]))r.call(a,f)&&(u[f]=a[f]);if(t){c=t(a);for(var l=0;l<c.length;l++)n.call(a,c[l])&&(u[c[l]]=a[c[l]])}}return u}},888:function(e,t,r){"use strict";var n=r(9047);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},2007:function(e,t,r){e.exports=r(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},77:function(e){var t="undefined"!==typeof Element,r="function"===typeof Map,n="function"===typeof Set,o="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,s,f;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!==u--;)if(!i(e[u],a[u]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(f=e.entries();!(u=f.next()).done;)if(!a.has(u.value[0]))return!1;for(f=e.entries();!(u=f.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(f=e.entries();!(u=f.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!==u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!==u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!==u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!i(e[s[u]],a[s[u]]))return!1;return!0}return e!==e&&a!==a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4270:function(e,t,r){"use strict";r.d(t,{q:function(){return fe}});var n=r(2007),o=r.n(n),i=r(9475),a=r.n(i),c=r(77),u=r.n(c),s=r(2791),f=r(1725),l=r.n(f),p="bodyAttributes",d="htmlAttributes",y="titleAttributes",h={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},b=(Object.keys(h).map((function(e){return h[e]})),"charset"),m="cssText",v="href",g="http-equiv",T="innerHTML",w="itemprop",O="name",A="property",S="rel",C="src",E="target",j={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},k="defaultTitle",P="defer",x="encodeSpecialCharacters",I="onChangeClientState",L="titleTemplate",R=Object.keys(j).reduce((function(e,t){return e[j[t]]=t,e}),{}),_=[h.NOSCRIPT,h.SCRIPT,h.STYLE],M="data-react-helmet",N="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},q=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},B=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},F=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},H=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},z=function(e){var t=V(e,h.TITLE),r=V(e,L);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=V(e,k);return t||n||void 0},Y=function(e){return V(e,I)||function(){}},U=function(e,t){return t.filter((function(t){return"undefined"!==typeof t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Z({},e,t)}),{})},K=function(e,t){return t.filter((function(e){return"undefined"!==typeof e[h.BASE]})).map((function(e){return e[h.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},W=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||("undefined"!==typeof t[e]&&X("Helmet: "+e+' should be of type "Array". Instead found type "'+N(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||r===S&&"canonical"===e[r].toLowerCase()||u===S&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(c)||c!==T&&c!==m&&c!==w||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=l()({},n[c],o[c]);n[c]=u}return e}),[]).reverse()},V=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},$=function(){var e=Date.now();return function(t){var r=Date.now();r-e>16?(e=r,t(r)):setTimeout((function(){$(t)}),0)}}(),G=function(e){return clearTimeout(e)},J="undefined"!==typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:r.g.requestAnimationFrame||$,Q="undefined"!==typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||G:r.g.cancelAnimationFrame||G,X=function(e){return console&&"function"===typeof console.warn&&console.warn(e)},ee=null,te=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,l=e.title,p=e.titleAttributes;oe(h.BODY,n),oe(h.HTML,o),ne(l,p);var d={baseTag:ie(h.BASE,r),linkTags:ie(h.LINK,i),metaTags:ie(h.META,a),noscriptTags:ie(h.NOSCRIPT,c),scriptTags:ie(h.SCRIPT,s),styleTags:ie(h.STYLE,f)},y={},b={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(y[e]=r),n.length&&(b[e]=d[e].oldTags)})),t&&t(),u(e,y,b)},re=function(e){return Array.isArray(e)?e.join(""):e},ne=function(e,t){"undefined"!==typeof e&&document.title!==e&&(document.title=re(e)),oe(h.TITLE,t)},oe=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(M),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";r.getAttribute(u)!==s&&r.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var f=i.indexOf(u);-1!==f&&i.splice(f,1)}for(var l=i.length-1;l>=0;l--)r.removeAttribute(i[l]);o.length===i.length?r.removeAttribute(M):r.getAttribute(M)!==a.join(",")&&r.setAttribute(M,a.join(","))}},ie=function(e,t){var r=document.head||document.querySelector(h.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===T)r.innerHTML=t.innerHTML;else if(n===m)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c="undefined"===typeof t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(M,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},ae=function(e){return Object.keys(e).reduce((function(t,r){var n="undefined"!==typeof e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},ce=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[j[r]||r]=e[r],t}),t)},ue=function(e,t,r){switch(e){case h.TITLE:return{toComponent:function(){return function(e,t,r){var n,o=((n={key:t})[M]=!0,n),i=ce(r,o);return[s.createElement(h.TITLE,i,t)]}(0,t.title,t.titleAttributes)},toString:function(){return function(e,t,r,n){var o=ae(r),i=re(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+H(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+H(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case p:case d:return{toComponent:function(){return ce(t)},toString:function(){return ae(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[M]=!0,n);return Object.keys(t).forEach((function(e){var r=j[e]||e;if(r===T||r===m){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),s.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===T||e===m)})).reduce((function(e,t){var o="undefined"===typeof n[t]?t:t+'="'+H(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===_.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},se=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,f=e.title,l=void 0===f?"":f,y=e.titleAttributes;return{base:ue(h.BASE,t,n),bodyAttributes:ue(p,r,n),htmlAttributes:ue(d,o,n),link:ue(h.LINK,i,n),meta:ue(h.META,a,n),noscript:ue(h.NOSCRIPT,c,n),script:ue(h.SCRIPT,u,n),style:ue(h.STYLE,s,n),title:ue(h.TITLE,{title:l,titleAttributes:y},n)}},fe=function(e){var t,r;return r=t=function(t){function r(){return D(this,r),F(this,t.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,t),r.prototype.shouldComponentUpdate=function(e){return!u()(this.props,e)},r.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case h.SCRIPT:case h.NOSCRIPT:return{innerHTML:t};case h.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},r.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return Z({},n,((t={})[r.type]=[].concat(n[r.type]||[],[Z({},o,this.mapNestedChildrenToProps(r,i))]),t))},r.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case h.TITLE:return Z({},o,((t={})[n.type]=a,t.titleAttributes=Z({},i),t));case h.BODY:return Z({},o,{bodyAttributes:Z({},i)});case h.HTML:return Z({},o,{htmlAttributes:Z({},i)})}return Z({},o,((r={})[n.type]=Z({},i),r))},r.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=Z({},t);return Object.keys(e).forEach((function(t){var n;r=Z({},r,((n={})[t]=e[t],n))})),r},r.prototype.warnOnInvalidChildren=function(e,t){return!0},r.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return s.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[R[r]||r]=e[r],t}),t)}(B(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case h.LINK:case h.META:case h.NOSCRIPT:case h.SCRIPT:case h.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},r.prototype.render=function(){var t=this.props,r=t.children,n=B(t,["children"]),o=Z({},n);return r&&(o=this.mapChildrenToProps(r,o)),s.createElement(e,o)},q(r,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),r}(s.Component),t.propTypes={base:o().object,bodyAttributes:o().object,children:o().oneOfType([o().arrayOf(o().node),o().node]),defaultTitle:o().string,defer:o().bool,encodeSpecialCharacters:o().bool,htmlAttributes:o().object,link:o().arrayOf(o().object),meta:o().arrayOf(o().object),noscript:o().arrayOf(o().object),onChangeClientState:o().func,script:o().arrayOf(o().object),style:o().arrayOf(o().object),title:o().string,titleAttributes:o().object,titleTemplate:o().string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=se({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},r}(a()((function(e){return{baseTag:K([v,E],e),bodyAttributes:U(p,e),defer:V(e,P),encode:V(e,x),htmlAttributes:U(d,e),linkTags:W(h.LINK,[S,v],e),metaTags:W(h.META,[O,b,g,A,w],e),noscriptTags:W(h.NOSCRIPT,[T],e),onChangeClientState:Y(e),scriptTags:W(h.SCRIPT,[C,T],e),styleTags:W(h.STYLE,[m],e),title:z(e),titleAttributes:U(y,e)}}),(function(e){ee&&Q(ee),e.defer?ee=J((function(){te(e,(function(){ee=null}))})):(te(e),ee=null)}),se)((function(){return null})));fe.renderStatic=fe.rewind},9475:function(e,t,r){"use strict";var n,o=r(2791),i=(n=o)&&"object"===typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"===typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!==typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!==typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!==typeof r&&"function"!==typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!==typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function f(){u=e(s.map((function(e){return e.props}))),l.canUseDOM?t(u):r&&(u=r(u))}var l=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),f()},a.componentDidUpdate=function(){f()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),f()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(l,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(l,"canUseDOM",c),l}}}}]);
//# sourceMappingURL=981.5ec18075.chunk.js.map