(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{347:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return a})),n.d(e,"i",(function(){return s})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return c})),n.d(e,"b",(function(){return h})),n.d(e,"e",(function(){return f})),n.d(e,"k",(function(){return p})),n.d(e,"l",(function(){return d})),n.d(e,"c",(function(){return v})),n.d(e,"j",(function(){return m}));n(34),n(89),n(348),n(116),n(349),n(197),n(88),n(119),n(8),n(120),n(41),n(121),n(190);var i=/#.*$/,r=/\.(md|html)$/,a=/\/$/,s=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(i,"").replace(r,"")}function u(t){return s.test(t)}function l(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function h(t){if(u(t))return t;var e=t.match(i),n=e?e[0]:"",r=o(t);return a.test(r)?t:r+".html"+n}function f(t,e){var n=decodeURIComponent(t.hash),r=function(t){var e=t.match(i);if(e)return e[0]}(e);return(!r||n===r)&&o(t.path)===o(e)}function p(t,e,n){if(u(e))return{type:"external",path:e};n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var r=e.split("/");n&&r[r.length-1]||r.pop();for(var a=t.replace(/^\//,"").split("/"),s=0;s<a.length;s++){var o=a[s];".."===o?r.pop():"."!==o&&r.push(o)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));for(var i=o(e),r=0;r<t.length;r++)if(o(t[r].regularPath)===i)return Object.assign({},t[r],{type:"page",path:h(t[r].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function d(t,e,n,i){var r=n.pages,a=n.themeConfig,s=i&&a.locales&&a.locales[i]||a;if("auto"===(t.frontmatter.sidebar||s.sidebar||a.sidebar))return g(t);var o=s.sidebar||a.sidebar;if(o){var u=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var i;return{}}(e,o),l=u.base,c=u.config;return"auto"===c?g(t):c?c.map((function(t){return function t(e,n,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return p(n,e,i);if(Array.isArray(e))return Object.assign(p(n,e[0],i),{title:e[1]});var a=e.children||[];return 0===a.length&&e.path?Object.assign(p(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:a.map((function(e){return t(e,n,i,r+1)})),collapsable:!1!==e.collapsable}}(t,r,l)})):[]}return[]}function g(t){var e=v(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}function v(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function m(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},348:function(t,e,n){"use strict";var i=n(13),r=n(194),a=n(10),s=n(90),o=n(21),u=n(26),l=n(62),c=n(195),h=n(196);r("match",(function(t,e,n){return[function(e){var n=u(this),r=null==e?void 0:l(e,t);return r?i(r,e,n):new RegExp(e)[t](o(n))},function(t){var i=a(this),r=o(t),u=n(e,i,r);if(u.done)return u.value;if(!i.global)return h(i,r);var l=i.unicode;i.lastIndex=0;for(var f,p=[],d=0;null!==(f=h(i,r));){var g=o(f[0]);p[d]=g,""===g&&(i.lastIndex=c(r,s(i.lastIndex),l)),d++}return 0===d?null:p}]}))},349:function(t,e,n){"use strict";var i=n(37),r=n(13),a=n(3),s=n(194),o=n(191),u=n(10),l=n(26),c=n(124),h=n(195),f=n(90),p=n(21),d=n(62),g=n(203),v=n(196),m=n(93),b=n(189),k=n(4),_=b.UNSUPPORTED_Y,x=Math.min,y=[].push,C=a(/./.exec),$=a(y),L=a("".slice);s("split",(function(t,e,n){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var a=p(l(this)),s=void 0===n?4294967295:n>>>0;if(0===s)return[];if(void 0===t)return[a];if(!o(t))return r(e,a,t,s);for(var u,c,h,f=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,b=new RegExp(t.source,d+"g");(u=r(m,b,a))&&!((c=b.lastIndex)>v&&($(f,L(a,v,u.index)),u.length>1&&u.index<a.length&&i(y,f,g(u,1)),h=u[0].length,v=c,f.length>=s));)b.lastIndex===u.index&&b.lastIndex++;return v===a.length?!h&&C(b,"")||$(f,""):$(f,L(a,v)),f.length>s?g(f,0,s):f}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:r(e,this,t,n)}:e,[function(e,n){var i=l(this),s=null==e?void 0:d(e,t);return s?r(s,e,i,n):r(a,p(i),e,n)},function(t,i){var r=u(this),s=p(t),o=n(a,r,s,i,a!==e);if(o.done)return o.value;var l=c(r,RegExp),d=r.unicode,g=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.unicode?"u":"")+(_?"g":"y"),m=new l(_?"^(?:"+r.source+")":r,g),b=void 0===i?4294967295:i>>>0;if(0===b)return[];if(0===s.length)return null===v(m,s)?[s]:[];for(var k=0,y=0,C=[];y<s.length;){m.lastIndex=_?0:y;var w,O=v(m,_?L(s,y):s);if(null===O||(w=x(f(m.lastIndex+(_?y:0)),s.length))===k)y=h(s,y,d);else{if($(C,L(s,k,y)),C.length===b)return C;for(var S=1;S<=O.length-1;S++)if($(C,O[S]),C.length===b)return C;y=k=w}}return $(C,L(s,k)),C}]}),!!k((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),_)},350:function(t,e,n){},351:function(t,e,n){"use strict";var i=n(2),r=n(198).trim;i({target:"String",proto:!0,forced:n(381)("trim")},{trim:function(){return r(this)}})},352:function(t,e,n){var i=n(12),r=n(0),a=n(3),s=n(92),o=n(211),u=n(29),l=n(14).f,c=n(42).f,h=n(36),f=n(191),p=n(21),d=n(192),g=n(189),v=n(18),m=n(4),b=n(11),k=n(35).enforce,_=n(201),x=n(7),y=n(193),C=n(204),$=x("match"),L=r.RegExp,w=L.prototype,O=r.SyntaxError,S=a(d),I=a(w.exec),E=a("".charAt),j=a("".replace),R=a("".indexOf),T=a("".slice),P=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,N=/a/g,A=/a/g,D=new L(N)!==N,U=g.MISSED_STICKY,H=g.UNSUPPORTED_Y,W=i&&(!D||U||y||C||m((function(){return A[$]=!1,L(N)!=N||L(A)==A||"/a/i"!=L(N,"i")})));if(s("RegExp",W)){for(var G=function(t,e){var n,i,r,a,s,l,c=h(w,this),d=f(t),g=void 0===e,v=[],m=t;if(!c&&d&&g&&t.constructor===G)return t;if((d||h(w,t))&&(t=t.source,g&&(e="flags"in m?m.flags:S(m))),t=void 0===t?"":p(t),e=void 0===e?"":p(e),m=t,y&&"dotAll"in N&&(i=!!e&&R(e,"s")>-1)&&(e=j(e,/s/g,"")),n=e,U&&"sticky"in N&&(r=!!e&&R(e,"y")>-1)&&H&&(e=j(e,/y/g,"")),C&&(t=(a=function(t){for(var e,n=t.length,i=0,r="",a=[],s={},o=!1,u=!1,l=0,c="";i<=n;i++){if("\\"===(e=E(t,i)))e+=E(t,++i);else if("]"===e)o=!1;else if(!o)switch(!0){case"["===e:o=!0;break;case"("===e:I(P,T(t,i+1))&&(i+=2,u=!0),r+=e,l++;continue;case">"===e&&u:if(""===c||b(s,c))throw new O("Invalid capture group name");s[c]=!0,a[a.length]=[c,l],u=!1,c="";continue}u?c+=e:r+=e}return[r,a]}(t))[0],v=a[1]),s=o(L(t,e),c?this:w,G),(i||r||v.length)&&(l=k(s),i&&(l.dotAll=!0,l.raw=G(function(t){for(var e,n=t.length,i=0,r="",a=!1;i<=n;i++)"\\"!==(e=E(t,i))?a||"."!==e?("["===e?a=!0:"]"===e&&(a=!1),r+=e):r+="[\\s\\S]":r+=e+E(t,++i);return r}(t),n)),r&&(l.sticky=!0),v.length&&(l.groups=v)),t!==m)try{u(s,"source",""===m?"(?:)":m)}catch(t){}return s},B=function(t){t in G||l(G,t,{configurable:!0,get:function(){return L[t]},set:function(e){L[t]=e}})},M=c(L),q=0;M.length>q;)B(M[q++]);w.constructor=G,G.prototype=w,v(r,"RegExp",G)}_("RegExp")},353:function(t,e,n){var i=n(0),r=n(12),a=n(193),s=n(24),o=n(14).f,u=n(35).get,l=RegExp.prototype,c=i.TypeError;r&&a&&o(l,"dotAll",{configurable:!0,get:function(){if(this!==l){if("RegExp"===s(this))return!!u(this).dotAll;throw c("Incompatible receiver, RegExp required")}}})},354:function(t,e,n){var i=n(0),r=n(12),a=n(189).MISSED_STICKY,s=n(24),o=n(14).f,u=n(35).get,l=RegExp.prototype,c=i.TypeError;r&&a&&o(l,"sticky",{configurable:!0,get:function(){if(this!==l){if("RegExp"===s(this))return!!u(this).sticky;throw c("Incompatible receiver, RegExp required")}}})},355:function(t,e,n){"use strict";var i=n(3),r=n(91).PROPER,a=n(18),s=n(10),o=n(36),u=n(21),l=n(4),c=n(192),h=RegExp.prototype,f=h.toString,p=i(c),d=l((function(){return"/a/b"!=f.call({source:"a",flags:"b"})})),g=r&&"toString"!=f.name;(d||g)&&a(RegExp.prototype,"toString",(function(){var t=s(this),e=u(t.source),n=t.flags;return"/"+e+"/"+u(void 0===n&&o(h,t)&&!("flags"in h)?p(t):n)}),{unsafe:!0})},356:function(t,e,n){},357:function(t,e,n){},358:function(t,e,n){},359:function(t,e,n){},360:function(t,e,n){},361:function(t,e,n){},362:function(t,e){t.exports=function(t){return null==t}},363:function(t,e,n){},364:function(t,e,n){},365:function(t,e,n){},366:function(t,e,n){},367:function(t,e,n){},368:function(t,e,n){},373:function(t,e,n){"use strict";n.r(e);n(117),n(8);var i=n(347),r={name:"SidebarGroup",components:{DropdownTransition:n(374).a},props:["item","open","collapsable","depth"],beforeCreate:function(){this.$options.components.SidebarLinks=n(373).default},methods:{isActive:i.e}},a=(n(393),n(33)),s=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,"initial-open-group-index":t.item.initialOpenGroupIndex,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;n(394),n(34),n(116),n(88);function o(t,e,n,i,r){var a={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}};return r>2&&(a.style={"padding-left":r+"rem"}),t("RouterLink",a,n)}function u(t,e,n,r,a){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||s>a?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var l=Object(i.e)(r,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,l,e.level-1),u(t,e.children,n,r,a,s+1)])})))}var l={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,r=n.$page,a=(n.$site,n.$route),s=n.$themeConfig,l=n.$themeLocaleConfig,c=e.props,h=c.item,f=c.sidebarDepth,p=Object(i.e)(a,h.path),d="auto"===h.type?p||h.children.some((function(t){return Object(i.e)(a,h.basePath+"#"+t.slug)})):p,g="external"===h.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,h.path,h.title||h.path):o(t,h.path,h.title||h.path,d),v=[r.frontmatter.sidebarDepth,f,l.sidebarDepth,s.sidebarDepth,1].find((function(t){return void 0!==t})),m=l.displayAllHeaders||s.displayAllHeaders;return"auto"===h.type?[g,u(t,h.children,h.basePath,a,v)]:(d||m)&&h.headers&&!i.d.test(h.path)?[g,u(t,Object(i.c)(h.headers),h.path,a,v)]:g}};n(395);function c(t,e){if("group"===e.type){var n=e.path&&Object(i.e)(t,e.path),r=e.children.some((function(e){return"group"===e.type?c(t,e):"page"===e.type&&Object(i.e)(t,e.path)}));return n||r}return!1}var h={name:"SidebarLinks",components:{SidebarGroup:s,SidebarLink:Object(a.a)(l,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data:function(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route:function(){this.refreshIndex()}},created:function(){this.refreshIndex()},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if(c(t,i))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.e)(this.$route,t.regularPath)}}},f=Object(a.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=f.exports},374:function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},r=(n(385),n(33)),a=Object(r.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},375:function(t,e,n){"use strict";var i=n(2),r=n(376);i({target:"String",proto:!0,forced:n(377)("link")},{link:function(t){return r(this,"a","href",t)}})},376:function(t,e,n){var i=n(3),r=n(26),a=n(21),s=/"/g,o=i("".replace);t.exports=function(t,e,n,i){var u=a(r(t)),l="<"+e;return""!==n&&(l+=" "+n+'="'+o(a(i),s,"&quot;")+'"'),l+">"+u+"</"+e+">"}},377:function(t,e,n){var i=n(4);t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},378:function(t,e,n){"use strict";n(350)},379:function(t,e,n){var i=n(2),r=n(380);i({global:!0,forced:parseInt!=r},{parseInt:r})},380:function(t,e,n){var i=n(0),r=n(4),a=n(3),s=n(21),o=n(198).trim,u=n(199),l=i.parseInt,c=i.Symbol,h=c&&c.iterator,f=/^[+-]?0x/i,p=a(f.exec),d=8!==l(u+"08")||22!==l(u+"0x16")||h&&!r((function(){l(Object(h))}));t.exports=d?function(t,e){var n=o(s(t));return l(n,e>>>0||(p(f,n)?16:10))}:l},381:function(t,e,n){var i=n(91).PROPER,r=n(4),a=n(199);t.exports=function(t){return r((function(){return!!a[t]()||"​᠎"!=="​᠎"[t]()||i&&a[t].name!==t}))}},382:function(t,e,n){"use strict";var i,r=n(2),a=n(3),s=n(27).f,o=n(90),u=n(21),l=n(125),c=n(26),h=n(126),f=n(28),p=a("".endsWith),d=a("".slice),g=Math.min,v=h("endsWith");r({target:"String",proto:!0,forced:!!(f||v||(i=s(String.prototype,"endsWith"),!i||i.writable))&&!v},{endsWith:function(t){var e=u(c(this));l(t);var n=arguments.length>1?arguments[1]:void 0,i=e.length,r=void 0===n?i:g(o(n),i),a=u(t);return p?p(e,a,r):d(e,r-a.length,r)===a}})},383:function(t,e,n){"use strict";n(356)},384:function(t,e,n){"use strict";n(357)},385:function(t,e,n){"use strict";n(358)},386:function(t,e,n){"use strict";n(359)},387:function(t,e,n){"use strict";n(360)},388:function(t,e,n){"use strict";n(361)},389:function(t,e,n){"use strict";n(363)},390:function(t,e,n){var i=n(45),r=n(22),a=n(38);t.exports=function(t){return"string"==typeof t||!r(t)&&a(t)&&"[object String]"==i(t)}},391:function(t,e,n){"use strict";n(364)},392:function(t,e,n){"use strict";n(365)},393:function(t,e,n){"use strict";n(366)},394:function(t,e,n){"use strict";var i=n(2),r=n(43).find,a=n(123),s=!0;"find"in[]&&Array(1).find((function(){s=!1})),i({target:"Array",proto:!0,forced:s},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),a("find")},395:function(t,e,n){"use strict";n(367)},396:function(t,e,n){"use strict";n(368)},404:function(t,e,n){"use strict";n.r(e);n(375),n(117),n(8),n(118);var i=n(347),r={name:"NavLink",props:{item:{required:!0}},computed:{link:function(){return Object(i.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link},isNonHttpURI:function(){return Object(i.g)(this.link)||Object(i.h)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(i.f)(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(i.f)(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction:function(){this.$emit("focusout")}}},a=n(33),s=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isInternal?n("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?n("OutboundLink"):t._e()],1)}),[],!1,null,null,null).exports,o={name:"Home",components:{NavLink:s},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},u=(n(378),Object(a.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,(function(e,i){return n("div",{key:i,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),l=(n(379),n(351),n(190),n(121),n(41),n(34),n(348),n(205),n(206),n(197),n(89),n(352),n(353),n(354),n(355),n(88),n(349),n(116),n(382),n(208)),c=n.n(l),h=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=c()(e,"title","");return c()(e,"frontmatter.tags")&&(i+=" ".concat(e.frontmatter.tags.join(" "))),n&&(i+=" ".concat(n)),f(t,i)},f=function(t,e){var n=function(t){return t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},i=new RegExp("[^\0-]"),r=t.split(/\s+/g).map((function(t){return t.trim()})).filter((function(t){return!!t}));if(i.test(t))return r.some((function(t){return e.toLowerCase().indexOf(t)>-1}));var a=t.endsWith(" ");return new RegExp(r.map((function(t,e){return r.length!==e+1||a?"(?=.*\\b".concat(n(t),"\\b)"):"(?=.*\\b".concat(n(t),")")})).join("")+".+","gi").test(e)},p={name:"SearchBox",data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$site.themeConfig.searchMaxSuggestions||5,i=this.$localePath,r=[],a=0;a<e.length&&!(r.length>=n);a++){var s=e[a];if(this.getPageLocalePath(s)===i&&this.isSearchable(s))if(h(t,s))r.push(s);else if(s.headers)for(var o=0;o<s.headers.length&&!(r.length>=n);o++){var u=s.headers[o];u.title&&h(t,s,u.title)&&r.push(Object.assign({},s,{path:s.path+"#"+u.slug,header:u}))}}return r}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter((function(e){return t.path.match(e)})).length>0},onHotkey:function(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}},d=(n(383),Object(a.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown.apply(null,arguments)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,i){return n("li",{key:i,staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null).exports),g=(n(384),Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports),v=n(60),m=(n(207),n(374)),b=n(209),k=n.n(b),_={name:"DropdownLink",components:{NavLink:s,DropdownTransition:m.a},props:{item:{required:!0}},data:function(){return{open:!1}},computed:{dropdownAriaLabel:function(){return this.item.ariaLabel||this.item.text}},watch:{$route:function(){this.open=!1}},methods:{setOpen:function(t){this.open=t},isLastItemOfArray:function(t,e){return k()(e)===t},handleDropdown:function(){0===event.detail&&this.setOpen(!this.open)}}},x=(n(386),{name:"NavLinks",components:{NavLink:s,DropdownLink:Object(a.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.handleDropdown}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow down"})]),t._v(" "),n("button",{staticClass:"mobile-dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v("\n          "+t._s(e.text)+"\n        ")]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(i){return n("li",{key:i.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:i},on:{focusout:function(n){t.isLastItemOfArray(i,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0):n("NavLink",{attrs:{item:e},on:{focusout:function(n){t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,i=this.$router.options.routes,r=this.$site.themeConfig.locales||{},a={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(a){var s,o=e[a],u=r[a]&&r[a].label||o.lang;return o.lang===t.$lang?s=n:(s=n.replace(t.$localeConfig.path,a),i.some((function(t){return t.path===s}))||(s=a)),{text:u,link:s}}))};return[].concat(Object(v.a)(this.userNav),[a])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(i.j)(t),{items:(t.items||[]).map(i.j)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}}),y=(n(387),Object(a.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null).exports);function C(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var $={name:"Navbar",components:{SidebarButton:g,NavLinks:y,SearchBox:d,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var t=this,e=parseInt(C(this.$el,"paddingLeft"))+parseInt(C(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)}},L=(n(388),Object(a.a)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports),w=n(362),O=n.n(w),S={name:"PageEdit",computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){var t=O()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,e=this.$site.themeConfig,n=e.repo,i=e.docsDir,r=void 0===i?"":i,a=e.docsBranch,s=void 0===a?"master":a,o=e.docsRepo,u=void 0===o?n:o;return t&&u&&this.$page.relativePath?this.createEditLink(n,u,r,s,this.$page.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,r,a){if(/bitbucket.org/.test(e))return e.replace(i.a,"")+"/src"+"/".concat(r,"/")+(n?n.replace(i.a,"")+"/":"")+a+"?mode=edit&spa=0&at=".concat(r,"&fileviewer=file-view-default");return/gitlab.com/.test(e)?e.replace(i.a,"")+"/-/edit"+"/".concat(r,"/")+(n?n.replace(i.a,"")+"/":"")+a:(i.i.test(e)?e:"https://github.com/".concat(e)).replace(i.a,"")+"/edit"+"/".concat(r,"/")+(n?n.replace(i.a,"")+"/":"")+a}}},I=(n(389),Object(a.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null).exports),E=n(390),j=n.n(E),R={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return P(T.PREV,this)},next:function(){return P(T.NEXT,this)}}};var T={NEXT:{resolveLink:function(t,e){return N(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return N(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function P(t,e){var n=e.$themeConfig,r=e.$page,a=e.$route,s=e.$site,o=e.sidebarItems,u=t.resolveLink,l=t.getThemeLinkConfig,c=t.getPageLinkConfig,h=l(n),f=c(r),p=O()(f)?h:f;return!1===p?void 0:j()(p)?Object(i.k)(s.pages,p,a.path):u(r,o)}function N(t,e,n){var i=[];!function t(e,n){for(var i=0,r=e.length;i<r;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(var r=0;r<i.length;r++){var a=i[r];if("page"===a.type&&a.path===decodeURIComponent(t.path))return i[r+n]}}var A=R,D=(n(391),{components:{PageEdit:I,PageNav:Object(a.a)(A,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?n("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},["external"===t.next.type?n("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null).exports},props:["sidebarItems"]}),U=(n(392),Object(a.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{staticClass:"theme-default-content"}),t._v(" "),n("PageEdit"),t._v(" "),n("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),H={name:"Sidebar",components:{SidebarLinks:n(373).default,NavLinks:y},props:["items"]},W=(n(396),{name:"Layout",components:{Home:u,Page:U,Sidebar:Object(a.a)(H,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports,Navbar:L},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(i.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),G=Object(a.a)(W,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=G.exports}}]);