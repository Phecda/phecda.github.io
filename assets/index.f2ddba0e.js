const Ft=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}};Ft();var X,v,it,at,G,st,je,ct,_e={},ut=[],Bt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function R(e,t){for(var n in t)e[n]=t[n];return e}function lt(e){var t=e.parentNode;t&&t.removeChild(e)}function O(e,t,n){var r,o,i,s={};for(i in t)i=="key"?r=t[i]:i=="ref"?o=t[i]:s[i]=t[i];if(arguments.length>2&&(s.children=arguments.length>3?X.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)s[i]===void 0&&(s[i]=e.defaultProps[i]);return J(e,s,r,o,null)}function J(e,t,n,r,o){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o==null?++it:o};return o==null&&v.vnode!=null&&v.vnode(i),i}function zt(){return{current:null}}function Y(e){return e.children}function I(e,t){this.props=e,this.context=t}function F(e,t){if(t==null)return e.__?F(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?F(e):null}function ft(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return ft(e)}}function Se(e){(!e.__d&&(e.__d=!0)&&G.push(e)&&!he.__r++||je!==v.debounceRendering)&&((je=v.debounceRendering)||st)(he)}function he(){for(var e;he.__r=G.length;)e=G.sort(function(t,n){return t.__v.__b-n.__v.__b}),G=[],e.some(function(t){var n,r,o,i,s,u;t.__d&&(s=(i=(n=t).__v).__e,(u=n.__P)&&(r=[],(o=R({},i)).__v=i.__v+1,Te(u,i,o,n.__n,u.ownerSVGElement!==void 0,i.__h!=null?[s]:null,r,s==null?F(i):s,i.__h),pt(r,i),i.__e!=s&&ft(i)))})}function _t(e,t,n,r,o,i,s,u,l,c){var a,d,h,f,p,b,y,w=r&&r.__k||ut,C=w.length;for(n.__k=[],a=0;a<t.length;a++)if((f=n.__k[a]=(f=t[a])==null||typeof f=="boolean"?null:typeof f=="string"||typeof f=="number"||typeof f=="bigint"?J(null,f,null,null,f):Array.isArray(f)?J(Y,{children:f},null,null,null):f.__b>0?J(f.type,f.props,f.key,null,f.__v):f)!=null){if(f.__=n,f.__b=n.__b+1,(h=w[a])===null||h&&f.key==h.key&&f.type===h.type)w[a]=void 0;else for(d=0;d<C;d++){if((h=w[d])&&f.key==h.key&&f.type===h.type){w[d]=void 0;break}h=null}Te(e,f,h=h||_e,o,i,s,u,l,c),p=f.__e,(d=f.ref)&&h.ref!=d&&(y||(y=[]),h.ref&&y.push(h.ref,null,f),y.push(d,f.__c||p,f)),p!=null?(b==null&&(b=p),typeof f.type=="function"&&f.__k===h.__k?f.__d=l=ht(f,l,e):l=dt(e,f,h,w,p,l),typeof n.type=="function"&&(n.__d=l)):l&&h.__e==l&&l.parentNode!=e&&(l=F(h))}for(n.__e=b,a=C;a--;)w[a]!=null&&(typeof n.type=="function"&&w[a].__e!=null&&w[a].__e==n.__d&&(n.__d=F(r,a+1)),mt(w[a],w[a]));if(y)for(a=0;a<y.length;a++)vt(y[a],y[++a],y[++a])}function ht(e,t,n){for(var r,o=e.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=e,t=typeof r.type=="function"?ht(r,t,n):dt(n,r,r,o,r.__e,t));return t}function de(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){de(n,t)}):t.push(e)),t}function dt(e,t,n,r,o,i){var s,u,l;if(t.__d!==void 0)s=t.__d,t.__d=void 0;else if(n==null||o!=i||o.parentNode==null)e:if(i==null||i.parentNode!==e)e.appendChild(o),s=null;else{for(u=i,l=0;(u=u.nextSibling)&&l<r.length;l+=2)if(u==o)break e;e.insertBefore(o,i),s=i}return s!==void 0?s:o.nextSibling}function qt(e,t,n,r,o){var i;for(i in n)i==="children"||i==="key"||i in t||pe(e,i,null,n[i],r);for(i in t)o&&typeof t[i]!="function"||i==="children"||i==="key"||i==="value"||i==="checked"||n[i]===t[i]||pe(e,i,t[i],n[i],r)}function De(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Bt.test(t)?n:n+"px"}function pe(e,t,n,r,o){var i;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||De(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||De(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r||e.addEventListener(t,i?Fe:Me,i):e.removeEventListener(t,i?Fe:Me,i);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n==null?"":n;break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function Me(e){this.l[e.type+!1](v.event?v.event(e):e)}function Fe(e){this.l[e.type+!0](v.event?v.event(e):e)}function Te(e,t,n,r,o,i,s,u,l){var c,a,d,h,f,p,b,y,w,C,j,E=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(l=n.__h,u=t.__e=n.__e,t.__h=null,i=[u]),(c=v.__b)&&c(t);try{e:if(typeof E=="function"){if(y=t.props,w=(c=E.contextType)&&r[c.__c],C=c?w?w.props.value:c.__:r,n.__c?b=(a=t.__c=n.__c).__=a.__E:("prototype"in E&&E.prototype.render?t.__c=a=new E(y,C):(t.__c=a=new I(y,C),a.constructor=E,a.render=Vt),w&&w.sub(a),a.props=y,a.state||(a.state={}),a.context=C,a.__n=r,d=a.__d=!0,a.__h=[]),a.__s==null&&(a.__s=a.state),E.getDerivedStateFromProps!=null&&(a.__s==a.state&&(a.__s=R({},a.__s)),R(a.__s,E.getDerivedStateFromProps(y,a.__s))),h=a.props,f=a.state,d)E.getDerivedStateFromProps==null&&a.componentWillMount!=null&&a.componentWillMount(),a.componentDidMount!=null&&a.__h.push(a.componentDidMount);else{if(E.getDerivedStateFromProps==null&&y!==h&&a.componentWillReceiveProps!=null&&a.componentWillReceiveProps(y,C),!a.__e&&a.shouldComponentUpdate!=null&&a.shouldComponentUpdate(y,a.__s,C)===!1||t.__v===n.__v){a.props=y,a.state=a.__s,t.__v!==n.__v&&(a.__d=!1),a.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(N){N&&(N.__=t)}),a.__h.length&&s.push(a);break e}a.componentWillUpdate!=null&&a.componentWillUpdate(y,a.__s,C),a.componentDidUpdate!=null&&a.__h.push(function(){a.componentDidUpdate(h,f,p)})}a.context=C,a.props=y,a.state=a.__s,(c=v.__r)&&c(t),a.__d=!1,a.__v=t,a.__P=e,c=a.render(a.props,a.state,a.context),a.state=a.__s,a.getChildContext!=null&&(r=R(R({},r),a.getChildContext())),d||a.getSnapshotBeforeUpdate==null||(p=a.getSnapshotBeforeUpdate(h,f)),j=c!=null&&c.type===Y&&c.key==null?c.props.children:c,_t(e,Array.isArray(j)?j:[j],t,n,r,o,i,s,u,l),a.base=t.__e,t.__h=null,a.__h.length&&s.push(a),b&&(a.__E=a.__=null),a.__e=!1}else i==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Kt(n.__e,t,n,r,o,i,s,l);(c=v.diffed)&&c(t)}catch(N){t.__v=null,(l||i!=null)&&(t.__e=u,t.__h=!!l,i[i.indexOf(u)]=null),v.__e(N,t,n)}}function pt(e,t){v.__c&&v.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){v.__e(r,n.__v)}})}function Kt(e,t,n,r,o,i,s,u){var l,c,a,d=n.props,h=t.props,f=t.type,p=0;if(f==="svg"&&(o=!0),i!=null){for(;p<i.length;p++)if((l=i[p])&&"setAttribute"in l==!!f&&(f?l.localName===f:l.nodeType===3)){e=l,i[p]=null;break}}if(e==null){if(f===null)return document.createTextNode(h);e=o?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f,h.is&&h),i=null,u=!1}if(f===null)d===h||u&&e.data===h||(e.data=h);else{if(i=i&&X.call(e.childNodes),c=(d=n.props||_e).dangerouslySetInnerHTML,a=h.dangerouslySetInnerHTML,!u){if(i!=null)for(d={},p=0;p<e.attributes.length;p++)d[e.attributes[p].name]=e.attributes[p].value;(a||c)&&(a&&(c&&a.__html==c.__html||a.__html===e.innerHTML)||(e.innerHTML=a&&a.__html||""))}if(qt(e,h,d,o,u),a)t.__k=[];else if(p=t.props.children,_t(e,Array.isArray(p)?p:[p],t,n,r,o&&f!=="foreignObject",i,s,i?i[0]:n.__k&&F(n,0),u),i!=null)for(p=i.length;p--;)i[p]!=null&&lt(i[p]);u||("value"in h&&(p=h.value)!==void 0&&(p!==e.value||f==="progress"&&!p||f==="option"&&p!==d.value)&&pe(e,"value",p,d.value,!1),"checked"in h&&(p=h.checked)!==void 0&&p!==e.checked&&pe(e,"checked",p,d.checked,!1))}return e}function vt(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){v.__e(r,n)}}function mt(e,t,n){var r,o;if(v.unmount&&v.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||vt(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){v.__e(i,t)}r.base=r.__P=null}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&mt(r[o],t,typeof e.type!="function");n||e.__e==null||lt(e.__e),e.__e=e.__d=void 0}function Vt(e,t,n){return this.constructor(e,n)}function Ne(e,t,n){var r,o,i;v.__&&v.__(e,t),o=(r=typeof n=="function")?null:n&&n.__k||t.__k,i=[],Te(t,e=(!r&&n||t).__k=O(Y,null,[e]),o||_e,_e,t.ownerSVGElement!==void 0,!r&&n?[n]:o?null:t.firstChild?X.call(t.childNodes):null,i,!r&&n?n:o?o.__e:t.firstChild,r),pt(i,e)}function gt(e,t){Ne(e,t,gt)}function yt(e,t,n){var r,o,i,s=R({},e.props);for(i in t)i=="key"?r=t[i]:i=="ref"?o=t[i]:s[i]=t[i];return arguments.length>2&&(s.children=arguments.length>3?X.call(arguments,2):n),J(e.type,s,r||e.key,o||e.ref,null)}function bt(e,t){var n={__c:t="__cC"+ct++,__:e,Consumer:function(r,o){return r.children(o)},Provider:function(r){var o,i;return this.getChildContext||(o=[],(i={})[t]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(s){this.props.value!==s.value&&o.some(Se)},this.sub=function(s){o.push(s);var u=s.componentWillUnmount;s.componentWillUnmount=function(){o.splice(o.indexOf(s),1),u&&u.call(s)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}X=ut.slice,v={__e:function(e,t,n,r){for(var o,i,s;t=t.__;)if((o=t.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(e)),s=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,r||{}),s=o.__d),s)return o.__E=o}catch(u){e=u}throw e}},it=0,at=function(e){return e!=null&&e.constructor===void 0},I.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=R({},this.state),typeof e=="function"&&(e=e(R({},n),this.props)),e&&R(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),Se(this))},I.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Se(this))},I.prototype.render=Y,G=[],st=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,he.__r=0,ct=0;var Gt=Object.freeze(Object.defineProperty({__proto__:null,render:Ne,hydrate:gt,createElement:O,h:O,Fragment:Y,createRef:zt,get isValidElement(){return at},Component:I,cloneElement:yt,createContext:bt,toChildArray:de,get options(){return v}},Symbol.toStringTag,{value:"Module"}));var Z,$,Be,ve=0,wt=[],ze=v.__b,qe=v.__r,Ke=v.diffed,Ve=v.__c,Ge=v.unmount;function ge(e,t){v.__h&&v.__h($,e,ve||t),ve=0;var n=$.__H||($.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function ue(e){return ve=1,Jt(kt,e)}function Jt(e,t,n){var r=ge(Z++,2);return r.t=e,r.__c||(r.__=[n?n(t):kt(void 0,t),function(o){var i=r.t(r.__[0],o);r.__[0]!==i&&(r.__=[i,r.__[1]],r.__c.setState({}))}],r.__c=$),r.__}function Qt(e,t){var n=ge(Z++,3);!v.__s&&Pt(n.__H,t)&&(n.__=e,n.__H=t,$.__H.__h.push(n))}function er(e){return ve=5,Xt(function(){return{current:e}},[])}function Xt(e,t){var n=ge(Z++,7);return Pt(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Yt(e){var t=$.context[e.__c],n=ge(Z++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub($)),t.props.value):e.__}function Zt(){for(var e;e=wt.shift();)if(e.__P)try{e.__H.__h.forEach(le),e.__H.__h.forEach(xe),e.__H.__h=[]}catch(t){e.__H.__h=[],v.__e(t,e.__v)}}v.__b=function(e){$=null,ze&&ze(e)},v.__r=function(e){qe&&qe(e),Z=0;var t=($=e.__c).__H;t&&(t.__h.forEach(le),t.__h.forEach(xe),t.__h=[])},v.diffed=function(e){Ke&&Ke(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(wt.push(t)!==1&&Be===v.requestAnimationFrame||((Be=v.requestAnimationFrame)||function(n){var r,o=function(){clearTimeout(i),Je&&cancelAnimationFrame(r),setTimeout(n)},i=setTimeout(o,100);Je&&(r=requestAnimationFrame(o))})(Zt)),$=null},v.__c=function(e,t){t.some(function(n){try{n.__h.forEach(le),n.__h=n.__h.filter(function(r){return!r.__||xe(r)})}catch(r){t.some(function(o){o.__h&&(o.__h=[])}),t=[],v.__e(r,n.__v)}}),Ve&&Ve(e,t)},v.unmount=function(e){Ge&&Ge(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{le(r)}catch(o){t=o}}),t&&v.__e(t,n.__v))};var Je=typeof requestAnimationFrame=="function";function le(e){var t=$,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),$=t}function xe(e){var t=$;e.__c=e.__(),$=t}function Pt(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function kt(e,t){return typeof t=="function"?t(e):t}var en={};function V(e,t){for(var n in t)e[n]=t[n];return e}function Ae(e,t,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=e.match(o),s={};if(i&&i[1])for(var u=i[1].split("&"),l=0;l<u.length;l++){var c=u[l].split("=");s[decodeURIComponent(c[0])]=decodeURIComponent(c.slice(1).join("="))}e=Le(e.replace(o,"")),t=Le(t||"");for(var a=Math.max(e.length,t.length),d=0;d<a;d++)if(t[d]&&t[d].charAt(0)===":"){var h=t[d].replace(/(^:|[+*?]+$)/g,""),f=(t[d].match(/[+*?]+$/)||en)[0]||"",p=~f.indexOf("+"),b=~f.indexOf("*"),y=e[d]||"";if(!y&&!b&&(f.indexOf("?")<0||p)){r=!1;break}if(s[h]=decodeURIComponent(y),p||b){s[h]=e.slice(d).map(decodeURIComponent).join("/");break}}else if(t[d]!==e[d]){r=!1;break}return(n.default===!0||r!==!1)&&s}function tn(e,t){return e.rank<t.rank?1:e.rank>t.rank?-1:e.index-t.index}function nn(e,t){return e.index=t,e.rank=function(n){return n.props.default?0:Le(n.props.path).map(rn).join("")}(e),e.props}function Le(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function rn(e){return e.charAt(0)==":"?1+"*+?".indexOf(e.charAt(e.length-1))||4:5}var on={},U=[],Q=[],x=null,We={url:He()},$t=bt(We);function an(){var e=Yt($t);if(e===We){var t=ue()[1];Qt(function(){return Q.push(t),function(){return Q.splice(Q.indexOf(t),1)}},[])}return[e,Ct]}function He(){var e;return""+((e=x&&x.location?x.location:x&&x.getCurrentLocation?x.getCurrentLocation():typeof location!="undefined"?location:on).pathname||"")+(e.search||"")}function Ct(e,t){return t===void 0&&(t=!1),typeof e!="string"&&e.url&&(t=e.replace,e=e.url),function(n){for(var r=U.length;r--;)if(U[r].canRoute(n))return!0;return!1}(e)&&function(n,r){r===void 0&&(r="push"),x&&x[r]?x[r](n):typeof history!="undefined"&&history[r+"State"]&&history[r+"State"](null,null,n)}(e,t?"replace":"push"),Et(e)}function Et(e){for(var t=!1,n=0;n<U.length;n++)U[n].routeTo(e)&&(t=!0);return t}function sn(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),n=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return Ct(t)}}function cn(e){return e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault(),!1}function St(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||e.button)){var t=e.target;do if(t.localName==="a"&&t.getAttribute("href")){if(t.hasAttribute("data-native")||t.hasAttribute("native"))return;if(sn(t))return cn(e)}while(t=t.parentNode)}}var Qe=!1;function xt(e){e.history&&(x=e.history),this.state={url:e.url||He()}}V(xt.prototype=new I,{shouldComponentUpdate:function(e){return e.static!==!0||e.url!==this.props.url||e.onChange!==this.props.onChange},canRoute:function(e){var t=de(this.props.children);return this.g(t,e)!==void 0},routeTo:function(e){this.setState({url:e});var t=this.canRoute(e);return this.p||this.forceUpdate(),t},componentWillMount:function(){this.p=!0},componentDidMount:function(){var e=this;Qe||(Qe=!0,x||addEventListener("popstate",function(){Et(He())}),addEventListener("click",St)),U.push(this),x&&(this.u=x.listen(function(t){var n=t.location||t;e.routeTo(""+(n.pathname||"")+(n.search||""))})),this.p=!1},componentWillUnmount:function(){typeof this.u=="function"&&this.u(),U.splice(U.indexOf(this),1)},componentWillUpdate:function(){this.p=!0},componentDidUpdate:function(){this.p=!1},g:function(e,t){e=e.filter(nn).sort(tn);for(var n=0;n<e.length;n++){var r=e[n],o=Ae(t,r.props.path,r.props);if(o)return[r,o]}},render:function(e,t){var n,r,o=e.onChange,i=t.url,s=this.c,u=this.g(de(e.children),i);if(u&&(r=yt(u[0],V(V({url:i,matches:n=u[1]},n),{key:void 0,ref:void 0}))),i!==(s&&s.url)){V(We,s=this.c={url:i,previous:s&&s.url,current:r,path:r?r.props.path:null,matches:n}),s.router=this,s.active=r?[r]:[];for(var l=Q.length;l--;)Q[l]({});typeof o=="function"&&o(s)}return O($t.Provider,{value:s},r)}});var At=function(e){return O("a",V({onClick:St},e))},Xe=function(e){return O(e.component,e)},un=["className","activeClass","activeClassName","path"];function Ye(e){var t=e.className,n=e.activeClass,r=e.activeClassName,o=e.path,i=function(a,d){if(a==null)return{};var h,f,p={},b=Object.keys(a);for(f=0;f<b.length;f++)d.indexOf(h=b[f])>=0||(p[h]=a[h]);return p}(e,un),s=an()[0],u=o&&s.path&&Ae(s.path,o,{})||Ae(s.url,i.href,{}),l=i.class||t||"",c=u&&(n||r)||"";return i.class=l+(l&&c&&" ")+c,O(At,i)}const ln="_navbarContainer_gzb9t_1",fn="_navbar_gzb9t_1",_n="_brand_gzb9t_27",hn="_menu_gzb9t_37",dn="_link_gzb9t_44",pn="_matchedLink_gzb9t_51";var M={navbarContainer:ln,navbar:fn,brand:_n,menu:hn,link:dn,matchedLink:pn},tr=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function vn(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}),t}var mn=vn(Gt),Lt,Rt,Ot,Re=mn,gn=0;function Ze(e,t,n,r,o){var i,s,u={};for(s in t)s=="ref"?i=t[s]:u[s]=t[s];var l={type:e,props:u,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--gn,__source:o,__self:r};if(typeof e=="function"&&(i=e.defaultProps))for(s in i)u[s]===void 0&&(u[s]=i[s]);return Re.options.vnode&&Re.options.vnode(l),l}Ot=Re.Fragment,Rt=Ze,Lt=Ze;const g=Rt,T=Lt,Tt=Ot,yn=[{name:"Device",path:"/device"},{name:"Layout",path:"/layout"},{name:"Style",path:"/style"},{name:"Inputs",path:"/inputs"}];function bn(){return g("div",{children:g("div",{className:M.navbarContainer,children:T("nav",{className:`wide-content ${M.navbar}`,children:[g(Ye,{className:M.brand,href:"/",children:g("img",{src:"/favicon.svg"})}),g("div",{className:M.menu,children:yn.map(({name:e,path:t})=>g(Ye,{className:M.link,activeClassName:M.matchedLink,href:t,children:e},t))})]})})})}try{self["workbox:window:6.5.2"]&&_()}catch{}function Oe(e,t){return new Promise(function(n){var r=new MessageChannel;r.port1.onmessage=function(o){n(o.data)},e.postMessage(t,[r.port2])})}function wn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function et(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Pn(e,t){var n;if(typeof Symbol=="undefined"||e[Symbol.iterator]==null){if(Array.isArray(e)||(n=function(o,i){if(o){if(typeof o=="string")return et(o,i);var s=Object.prototype.toString.call(o).slice(8,-1);return s==="Object"&&o.constructor&&(s=o.constructor.name),s==="Map"||s==="Set"?Array.from(o):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?et(o,i):void 0}}(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(n=e[Symbol.iterator]()).next.bind(n)}try{self["workbox:core:6.5.2"]&&_()}catch{}var we=function(){var e=this;this.promise=new Promise(function(t,n){e.resolve=t,e.reject=n})};function Pe(e,t){var n=location.href;return new URL(e,n).href===new URL(t,n).href}var z=function(e,t){this.type=e,Object.assign(this,t)};function oe(e,t,n){return n?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function kn(){}var $n={type:"SKIP_WAITING"};function tt(e,t){if(!t)return e&&e.then?e.then(kn):Promise.resolve()}var Cn=function(e){var t,n;function r(u,l){var c,a;return l===void 0&&(l={}),(c=e.call(this)||this).nn={},c.tn=0,c.rn=new we,c.en=new we,c.on=new we,c.un=0,c.an=new Set,c.cn=function(){var d=c.fn,h=d.installing;c.tn>0||!Pe(h.scriptURL,c.sn.toString())||performance.now()>c.un+6e4?(c.vn=h,d.removeEventListener("updatefound",c.cn)):(c.hn=h,c.an.add(h),c.rn.resolve(h)),++c.tn,h.addEventListener("statechange",c.ln)},c.ln=function(d){var h=c.fn,f=d.target,p=f.state,b=f===c.vn,y={sw:f,isExternal:b,originalEvent:d};!b&&c.mn&&(y.isUpdate=!0),c.dispatchEvent(new z(p,y)),p==="installed"?c.wn=self.setTimeout(function(){p==="installed"&&h.waiting===f&&c.dispatchEvent(new z("waiting",y))},200):p==="activating"&&(clearTimeout(c.wn),b||c.en.resolve(f))},c.dn=function(d){var h=c.hn,f=h!==navigator.serviceWorker.controller;c.dispatchEvent(new z("controlling",{isExternal:f,originalEvent:d,sw:h,isUpdate:c.mn})),f||c.on.resolve(h)},c.gn=(a=function(d){var h=d.data,f=d.ports,p=d.source;return oe(c.getSW(),function(){c.an.has(p)&&c.dispatchEvent(new z("message",{data:h,originalEvent:d,ports:f,sw:p}))})},function(){for(var d=[],h=0;h<arguments.length;h++)d[h]=arguments[h];try{return Promise.resolve(a.apply(this,d))}catch(f){return Promise.reject(f)}}),c.sn=u,c.nn=l,navigator.serviceWorker.addEventListener("message",c.gn),c}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o,i,s=r.prototype;return s.register=function(u){var l=(u===void 0?{}:u).immediate,c=l!==void 0&&l;try{var a=this;return function(d,h){var f=d();return f&&f.then?f.then(h):h(f)}(function(){if(!c&&document.readyState!=="complete")return tt(new Promise(function(d){return window.addEventListener("load",d)}))},function(){return a.mn=Boolean(navigator.serviceWorker.controller),a.yn=a.pn(),oe(a.bn(),function(d){a.fn=d,a.yn&&(a.hn=a.yn,a.en.resolve(a.yn),a.on.resolve(a.yn),a.yn.addEventListener("statechange",a.ln,{once:!0}));var h=a.fn.waiting;return h&&Pe(h.scriptURL,a.sn.toString())&&(a.hn=h,Promise.resolve().then(function(){a.dispatchEvent(new z("waiting",{sw:h,wasWaitingBeforeRegister:!0}))}).then(function(){})),a.hn&&(a.rn.resolve(a.hn),a.an.add(a.hn)),a.fn.addEventListener("updatefound",a.cn),navigator.serviceWorker.addEventListener("controllerchange",a.dn),a.fn})})}catch(d){return Promise.reject(d)}},s.update=function(){try{return this.fn?tt(this.fn.update()):void 0}catch(u){return Promise.reject(u)}},s.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},s.messageSW=function(u){try{return oe(this.getSW(),function(l){return Oe(l,u)})}catch(l){return Promise.reject(l)}},s.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&Oe(this.fn.waiting,$n)},s.pn=function(){var u=navigator.serviceWorker.controller;return u&&Pe(u.scriptURL,this.sn.toString())?u:void 0},s.bn=function(){try{var u=this;return function(l,c){try{var a=l()}catch(d){return c(d)}return a&&a.then?a.then(void 0,c):a}(function(){return oe(navigator.serviceWorker.register(u.sn,u.nn),function(l){return u.un=performance.now(),l})},function(l){throw l})}catch(l){return Promise.reject(l)}},o=r,(i=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&wn(o.prototype,i),r}(function(){function e(){this.Pn=new Map}var t=e.prototype;return t.addEventListener=function(n,r){this.Sn(n).add(r)},t.removeEventListener=function(n,r){this.Sn(n).delete(r)},t.dispatchEvent=function(n){n.target=this;for(var r,o=Pn(this.Sn(n.type));!(r=o()).done;)(0,r.value)(n)},t.Sn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},e}());function En(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:o,onRegisterError:i}=e;let s,u;const l=async(c=!0)=>{c&&(s==null||s.addEventListener("controlling",a=>{a.isUpdate&&window.location.reload()})),u&&u.waiting&&await Oe(u.waiting,{type:"SKIP_WAITING"})};if("serviceWorker"in navigator){s=new Cn("/sw.js",{scope:"/",type:"classic"}),s.addEventListener("activated",c=>{c.isUpdate||r==null||r()});{const c=()=>{n==null||n()};s.addEventListener("waiting",c),s.addEventListener("externalwaiting",c)}s.register({immediate:t}).then(c=>{u=c,o==null||o(c)}).catch(c=>{i==null||i(c)})}return l}function Sn(e={}){const{immediate:t=!0,onNeedRefresh:n,onOfflineReady:r,onRegistered:o,onRegisterError:i}=e,[s,u]=ue(!1),[l,c]=ue(!1),[a]=ue(()=>En({immediate:t,onOfflineReady(){c(!0),r==null||r()},onNeedRefresh(){u(!0),n==null||n()},onRegistered:o,onRegisterError:i}));return{needRefresh:[s,u],offlineReady:[l,c],updateServiceWorker:a}}const xn="_container_c4zsa_1",An="_toast_c4zsa_7",Ln="_toastMessage_c4zsa_20",Rn="_toastButton_c4zsa_23";var q={container:xn,toast:An,toastMessage:Ln,toastButton:Rn};function On(){const{offlineReady:[e,t],needRefresh:[n,r],updateServiceWorker:o}=Sn({onRegistered(s){console.log(`SW Registered: ${s}`)},onRegisterError(s){console.log("SW registration error",s)}}),i=()=>{t(!1),r(!1)};return g("div",{className:q.container,children:(e||n)&&T("div",{className:q.toast,children:[g("div",{className:q.message,children:e?g("span",{children:"App ready to work offline"}):g("span",{children:"New content available, click on reload button to update."})}),n&&g("button",{className:q.toastButton,onClick:()=>o(!0),children:"Reload"}),g("button",{className:q.toastButton,onClick:()=>i(),children:"Close"})]})})}const Tn="modulepreload",nt={},Nn="/",ie=function(t,n){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=`${Nn}${r}`,r in nt)return;nt[r]=!0;const o=r.endsWith(".css"),i=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const s=document.createElement("link");if(s.rel=o?"stylesheet":Tn,o||(s.as="script",s.crossOrigin=""),s.href=r,document.head.appendChild(s),o)return new Promise((u,l)=>{s.addEventListener("load",u),s.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};class ae extends I{constructor(){super(),this.state={componentData:null}}loadComponent(){if(this.props.component)return this.setState({componentData:this.props.component});const t=this.props.getComponent(this.props.url,({component:n})=>{n&&this.setState({componentData:n})},Object.assign({},this.props,this.props.matches));t&&t.then&&(n=>{t.then(r=>{if(n!==this.props.url){this.setState({componentData:null},()=>{this.loadComponent()});return}this.setState({componentData:r})})})(this.props.url)}componentWillReceiveProps(t){this.props.path&&this.props.path!==t.path&&this.setState({componentData:null},()=>{this.loadComponent()})}componentWillMount(){this.loadComponent()}render(){return this.state.componentData?O(this.state.componentData,this.props):this.props.loading?this.props.loading():null}}function me(){return me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},me.apply(this,arguments)}function se(e){return e.charAt(0)==="/"}function ke(e,t){for(var n=t,r=n+1,o=e.length;r<o;n+=1,r+=1)e[n]=e[r];e.pop()}function Wn(e,t){t===void 0&&(t="");var n=e&&e.split("/")||[],r=t&&t.split("/")||[],o=e&&se(e),i=t&&se(t),s=o||i;if(e&&se(e)?r=n:n.length&&(r.pop(),r=r.concat(n)),!r.length)return"/";var u;if(r.length){var l=r[r.length-1];u=l==="."||l===".."||l===""}else u=!1;for(var c=0,a=r.length;a>=0;a--){var d=r[a];d==="."?ke(r,a):d===".."?(ke(r,a),c++):c&&(ke(r,a),c--)}if(!s)for(;c--;c)r.unshift("..");s&&r[0]!==""&&(!r[0]||!se(r[0]))&&r.unshift("");var h=r.join("/");return u&&h.substr(-1)!=="/"&&(h+="/"),h}var Hn=!0,$e="Invariant failed";function In(e,t){if(!e){if(Hn)throw new Error($e);var n=typeof t=="function"?t():t,r=n?$e+": "+n:$e;throw new Error(r)}}function fe(e){return e.charAt(0)==="/"?e:"/"+e}function rt(e){return e.charAt(0)==="/"?e.substr(1):e}function Un(e,t){return e.toLowerCase().indexOf(t.toLowerCase())===0&&"/?#".indexOf(e.charAt(t.length))!==-1}function jn(e,t){return Un(e,t)?e.substr(t.length):e}function Dn(e){return e.charAt(e.length-1)==="/"?e.slice(0,-1):e}function Mn(e){var t=e||"/",n="",r="",o=t.indexOf("#");o!==-1&&(r=t.substr(o),t=t.substr(0,o));var i=t.indexOf("?");return i!==-1&&(n=t.substr(i),t=t.substr(0,i)),{pathname:t,search:n==="?"?"":n,hash:r==="#"?"":r}}function L(e){var t=e.pathname,n=e.search,r=e.hash,o=t||"/";return n&&n!=="?"&&(o+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(o+=r.charAt(0)==="#"?r:"#"+r),o}function Ce(e,t,n,r){var o;typeof e=="string"?(o=Mn(e),o.state=t):(o=me({},e),o.pathname===void 0&&(o.pathname=""),o.search?o.search.charAt(0)!=="?"&&(o.search="?"+o.search):o.search="",o.hash?o.hash.charAt(0)!=="#"&&(o.hash="#"+o.hash):o.hash="",t!==void 0&&o.state===void 0&&(o.state=t));try{o.pathname=decodeURI(o.pathname)}catch(i){throw i instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):i}return n&&(o.key=n),r?o.pathname?o.pathname.charAt(0)!=="/"&&(o.pathname=Wn(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}function Fn(){var e=null;function t(s){return e=s,function(){e===s&&(e=null)}}function n(s,u,l,c){if(e!=null){var a=typeof e=="function"?e(s,u):e;typeof a=="string"?typeof l=="function"?l(a,c):c(!0):c(a!==!1)}else c(!0)}var r=[];function o(s){var u=!0;function l(){u&&s.apply(void 0,arguments)}return r.push(l),function(){u=!1,r=r.filter(function(c){return c!==l})}}function i(){for(var s=arguments.length,u=new Array(s),l=0;l<s;l++)u[l]=arguments[l];r.forEach(function(c){return c.apply(void 0,u)})}return{setPrompt:t,confirmTransitionTo:n,appendListener:o,notifyListeners:i}}var Bn=!!(typeof window!="undefined"&&window.document&&window.document.createElement);function zn(e,t){t(window.confirm(e))}function qn(){return window.navigator.userAgent.indexOf("Firefox")===-1}var ot="hashchange",Kn={hashbang:{encodePath:function(t){return t.charAt(0)==="!"?t:"!/"+rt(t)},decodePath:function(t){return t.charAt(0)==="!"?t.substr(1):t}},noslash:{encodePath:rt,decodePath:fe},slash:{encodePath:fe,decodePath:fe}};function Nt(e){var t=e.indexOf("#");return t===-1?e:e.slice(0,t)}function K(){var e=window.location.href,t=e.indexOf("#");return t===-1?"":e.substring(t+1)}function Vn(e){window.location.hash=e}function Ee(e){window.location.replace(Nt(window.location.href)+"#"+e)}function Gn(e){e===void 0&&(e={}),Bn||In(!1);var t=window.history;qn();var n=e,r=n.getUserConfirmation,o=r===void 0?zn:r,i=n.hashType,s=i===void 0?"slash":i,u=e.basename?Dn(fe(e.basename)):"",l=Kn[s],c=l.encodePath,a=l.decodePath;function d(){var m=a(K());return u&&(m=jn(m,u)),Ce(m)}var h=Fn();function f(m){me(A,m),A.length=t.length,h.notifyListeners(A.location,A.action)}var p=!1,b=null;function y(m,P){return m.pathname===P.pathname&&m.search===P.search&&m.hash===P.hash}function w(){var m=K(),P=c(m);if(m!==P)Ee(P);else{var k=d(),S=A.location;if(!p&&y(S,k)||b===L(k))return;b=null,C(k)}}function C(m){if(p)p=!1,f();else{var P="POP";h.confirmTransitionTo(m,P,o,function(k){k?f({action:P,location:m}):j(m)})}}function j(m){var P=A.location,k=W.lastIndexOf(L(P));k===-1&&(k=0);var S=W.lastIndexOf(L(m));S===-1&&(S=0);var D=k-S;D&&(p=!0,ee(D))}var E=K(),N=c(E);E!==N&&Ee(N);var Ie=d(),W=[L(Ie)];function Wt(m){var P=document.querySelector("base"),k="";return P&&P.getAttribute("href")&&(k=Nt(window.location.href)),k+"#"+c(u+L(m))}function Ht(m,P){var k="PUSH",S=Ce(m,void 0,void 0,A.location);h.confirmTransitionTo(S,k,o,function(D){if(!!D){var H=L(S),B=c(u+H),be=K()!==B;if(be){b=H,Vn(B);var re=W.lastIndexOf(L(A.location)),Ue=W.slice(0,re+1);Ue.push(H),W=Ue,f({action:k,location:S})}else f()}})}function It(m,P){var k="REPLACE",S=Ce(m,void 0,void 0,A.location);h.confirmTransitionTo(S,k,o,function(D){if(!!D){var H=L(S),B=c(u+H),be=K()!==B;be&&(b=H,Ee(B));var re=W.indexOf(L(A.location));re!==-1&&(W[re]=H),f({action:k,location:S})}})}function ee(m){t.go(m)}function Ut(){ee(-1)}function jt(){ee(1)}var ye=0;function te(m){ye+=m,ye===1&&m===1?window.addEventListener(ot,w):ye===0&&window.removeEventListener(ot,w)}var ne=!1;function Dt(m){m===void 0&&(m=!1);var P=h.setPrompt(m);return ne||(te(1),ne=!0),function(){return ne&&(ne=!1,te(-1)),P()}}function Mt(m){var P=h.appendListener(m);return te(1),function(){te(-1),P()}}var A={length:t.length,action:"POP",location:Ie,createHref:Wt,push:Ht,replace:It,go:ee,goBack:Ut,goForward:jt,block:Dt,listen:Mt};return A}const Jn=Gn();function Qn(){return g("div",{className:"safe-background bg-below-top-bar",children:T("main",{className:"st-content wide-content",children:[g("h1",{className:"khaenriah-text",children:"Welcome, Traveler!"}),g("p",{className:"khaenriah-text",children:"Ad astra abyssosque"})]})})}function Xn(){return g("div",{className:"safe-background bg-below-top-bar",children:T("main",{className:"st-content wide-content",children:[g("h1",{children:"Emm... Why are you here?"}),T("p",{children:["Let`s go back to ",g(At,{href:"/",children:"Home"})]})]})})}function ce(){return g("div",{className:"safe-padding bg-below-top-bar",children:T("div",{className:"st-content wide-content",children:[g("h1",{children:"Just a moment..."}),g("p",{children:"Wait for too long? Check your browser!"})]})})}function Yn(){return g(Tt,{children:T(xt,{history:Jn,children:[g(Xe,{path:"/",component:Qn}),g(ae,{path:"/device",loading:ce,getComponent:()=>ie(()=>import("./index.c509ebd2.js"),["assets/index.c509ebd2.js","assets/index.cf390ada.css"]).then(e=>e.default)}),g(ae,{path:"/layout",loading:ce,getComponent:()=>ie(()=>import("./index.29bc208d.js"),["assets/index.29bc208d.js","assets/index.f9f9e564.css"]).then(e=>e.default)}),g(ae,{path:"/style",loading:ce,getComponent:()=>ie(()=>import("./index.80311f70.js"),["assets/index.80311f70.js","assets/index.40d65a5f.css"]).then(e=>e.default)}),g(ae,{path:"/inputs",loading:ce,getComponent:()=>ie(()=>import("./index.7f77b27d.js"),["assets/index.7f77b27d.js","assets/index.e0fc9944.css"]).then(e=>e.default)}),g(Xe,{default:!0,component:Xn})]})})}function Zn(){return T(Tt,{children:[g(bn,{}),g(On,{}),g(Yn,{})]})}Ne(g(Zn,{}),document.getElementById("app"));export{At as E,Xt as _,T as a,tr as c,er as h,g as j,ue as m,Qt as y};
