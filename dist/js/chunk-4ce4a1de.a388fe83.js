(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ce4a1de"],{"0a26":function(t){t.exports=JSON.parse('[{"title":"Section 1","content":"<p>Maecenas nec semper ante, pellentesque posuere lorem. Nullam ipsum massa, consequat eget urna ut, pulvinar dignissim lorem. Nulla facilisi. Nam mattis eleifend metus. Fusce at commodo lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus pellentesque elit sem, vel blandit posuere.</p>"},{"title":"Section 2","content":"<p>Mauris a orci sodales, scelerisque velit vitae, gravida nisl. Ut non laoreet eros, vel laoreet nisi. Praesent sed dolor dui. Proin non fringilla quam. Aliquam erat volutpat. Vestibulum vel arcu semper, lobortis turpis ac, ultricies nisi. Praesent id.</p>"},{"title":"Section 3","content":"<p>Sed elementum sapien ut sapien imperdiet, eu venenatis enim rhoncus. Praesent euismod tincidunt rhoncus. Duis cras amet:</p><ul><li>List item one</li><li>List item two</li><li>List item three</li></ul>"},{"title":"Section 4","content":"<p>Cras dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia mauris vel est.</p><p>Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>"}]')},"107c":function(t,e,n){var i=n("d039");t.exports=i((function(){var t=RegExp("(?<a>b)","string".charAt(5));return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},1276:function(t,e,n){"use strict";var i=n("d784"),r=n("44e7"),a=n("825a"),c=n("1d80"),s=n("4840"),l=n("8aa5"),o=n("50c4"),u=n("14c3"),d=n("9263"),f=n("9f7f"),p=n("d039"),g=f.UNSUPPORTED_Y,v=[].push,x=Math.min,m=4294967295,b=!p((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));i("split",(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(c(this)),a=void 0===n?m:n>>>0;if(0===a)return[];if(void 0===t)return[i];if(!r(t))return e.call(i,t,a);var s,l,o,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,g=new RegExp(t.source,f+"g");while(s=d.call(g,i)){if(l=g.lastIndex,l>p&&(u.push(i.slice(p,s.index)),s.length>1&&s.index<i.length&&v.apply(u,s.slice(1)),o=s[0].length,p=l,u.length>=a))break;g.lastIndex===s.index&&g.lastIndex++}return p===i.length?!o&&g.test("")||u.push(""):u.push(i.slice(p)),u.length>a?u.slice(0,a):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var r=c(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,r,n):i.call(String(r),e,n)},function(t,r){var c=n(i,this,t,r,i!==e);if(c.done)return c.value;var d=a(this),f=String(t),p=s(d,RegExp),v=d.unicode,b=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"g":"y"),h=new p(g?"^(?:"+d.source+")":d,b),y=void 0===r?m:r>>>0;if(0===y)return[];if(0===f.length)return null===u(h,f)?[f]:[];var _=0,E=0,I=[];while(E<f.length){h.lastIndex=g?0:E;var C,w=u(h,g?f.slice(E):f);if(null===w||(C=x(o(h.lastIndex+(g?E:0)),f.length))===_)E=l(f,E,v);else{if(I.push(f.slice(_,E)),I.length===y)return I;for(var R=1;R<=w.length-1;R++)if(I.push(w[R]),I.length===y)return I;E=_=C}}return I.push(f.slice(_)),I}]}),!b,g)},"14c3":function(t,e,n){var i=n("c6b6"),r=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==i(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},3474:function(t,e,n){"use strict";n("ec41")},"44e7":function(t,e,n){var i=n("861d"),r=n("c6b6"),a=n("b622"),c=a("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[c])?!!e:"RegExp"==r(t))}},"4ce8":function(t,e,n){"use strict";n("f758")},5443:function(t,e,n){"use strict";n("cb40")},"8aa5":function(t,e,n){"use strict";var i=n("6547").charAt;t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},9263:function(t,e,n){"use strict";var i=n("ad6d"),r=n("9f7f"),a=n("5692"),c=n("7c73"),s=n("69f3").get,l=n("fce3"),o=n("107c"),u=RegExp.prototype.exec,d=a("native-string-replace",String.prototype.replace),f=u,p=function(){var t=/a/,e=/b*/g;return u.call(t,"a"),u.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),g=r.UNSUPPORTED_Y||r.BROKEN_CARET,v=void 0!==/()??/.exec("")[1],x=p||v||g||l||o;x&&(f=function(t){var e,n,r,a,l,o,x,m=this,b=s(m),h=b.raw;if(h)return h.lastIndex=m.lastIndex,e=f.call(h,t),m.lastIndex=h.lastIndex,e;var y=b.groups,_=g&&m.sticky,E=i.call(m),I=m.source,C=0,w=t;if(_&&(E=E.replace("y",""),-1===E.indexOf("g")&&(E+="g"),w=String(t).slice(m.lastIndex),m.lastIndex>0&&(!m.multiline||m.multiline&&"\n"!==t[m.lastIndex-1])&&(I="(?: "+I+")",w=" "+w,C++),n=new RegExp("^(?:"+I+")",E)),v&&(n=new RegExp("^"+I+"$(?!\\s)",E)),p&&(r=m.lastIndex),a=u.call(_?n:m,w),_?a?(a.input=a.input.slice(C),a[0]=a[0].slice(C),a.index=m.lastIndex,m.lastIndex+=a[0].length):m.lastIndex=0:p&&a&&(m.lastIndex=m.global?a.index+a[0].length:r),v&&a&&a.length>1&&d.call(a[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(a[l]=void 0)})),a&&y)for(a.groups=o=c(null),l=0;l<y.length;l++)x=y[l],o[x[0]]=a[x[1]];return a}),t.exports=f},"9f7f":function(t,e,n){var i=n("d039"),r=function(t,e){return RegExp(t,e)};e.UNSUPPORTED_Y=i((function(){var t=r("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=i((function(){var t=r("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a15b:function(t,e,n){"use strict";var i=n("23e7"),r=n("44ad"),a=n("fc6a"),c=n("a640"),s=[].join,l=r!=Object,o=c("join",",");i({target:"Array",proto:!0,forced:l||!o},{join:function(t){return s.call(a(this),void 0===t?",":t)}})},a640:function(t,e,n){"use strict";var i=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&i((function(){n.call(null,e||function(){throw 1},1)}))}},ac1f:function(t,e,n){"use strict";var i=n("23e7"),r=n("9263");i({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(t,e,n){"use strict";var i=n("825a");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ca1a:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"content d-flex flex-column justify-content-center align-item-center mb-3",attrs:{fluid:""}},[n("b-row",[n("b-col",{staticClass:"d-flex justify-content-center align-item-center"},[n("Sections",{staticClass:"section"}),n("Accordion",{staticClass:"accordion"})],1)],1)],1)},r=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("b-container",{staticClass:"content__container mt-5",attrs:{fluid:"lg"}},[n("b-row",[n("b-col",{staticClass:"d-flex justify-content-center",attrs:{col:"",lg:"12"}},[n("b-tabs",{attrs:{"content-class":"tab mt-3",fill:""}},t._l(t.items,(function(e){return n("b-tab",{key:e.title,staticClass:"tab__link",attrs:{title:e.title}},[n("b-card-text",{staticClass:"tab__text"},[n("p",{domProps:{innerHTML:t._s(e.content)}})])],1)})),1)],1)],1)],1)],1)},c=[],s=n("0a26"),l={data:function(){return{items:s}}},o=l,u=(n("3474"),n("2877")),d=Object(u["a"])(o,a,c,!1,null,null,null),f=d.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-container",{staticClass:"mt-5",attrs:{fluid:"lg"}},[n("b-row",[n("b-col",{staticClass:"d-flex justify-content-center",attrs:{col:"",lg:"12"}},[n("div",{staticClass:"accordion",attrs:{role:"tablist"}},t._l(t.items,(function(e){return n("b-card",{key:e.title,staticClass:"accordion__card mb-1",attrs:{"no-body":""}},[n("b-card-header",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.createAccordionId(e.title),expression:"createAccordionId(item.title)"}],staticClass:"accordion__header p-3",attrs:{"header-tag":"header",role:"tab"}},[t._v(" "+t._s(e.title)+" ")]),n("b-collapse",{attrs:{id:t.createAccordionId(e.title),visible:"",accordion:"my-accordion",role:"tabpanel"}},[n("b-card-body",[n("b-card-text",{staticClass:"accordion__text"},[n("p",{domProps:{innerHTML:t._s(e.content)}})])],1)],1)],1)})),1)])],1)],1)],1)},g=[],v=(n("ac1f"),n("1276"),n("a15b"),{data:function(){return{items:s}},methods:{createAccordionId:function(t){var e=t.split(" ");return e=String(e.join("-")),e.toLowerCase()}}}),x=v,m=(n("5443"),Object(u["a"])(x,p,g,!1,null,null,null)),b=m.exports,h={name:"Exe-2",components:{Sections:f,Accordion:b}},y=h,_=(n("4ce8"),Object(u["a"])(y,i,r,!1,null,"7d000ae8",null));e["default"]=_.exports},cb40:function(t,e,n){},d784:function(t,e,n){"use strict";n("ac1f");var i=n("6eeb"),r=n("9263"),a=n("d039"),c=n("b622"),s=n("9112"),l=c("species"),o=RegExp.prototype;t.exports=function(t,e,n,u){var d=c(t),f=!a((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),p=f&&!a((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return e=!0,null},n[d](""),!e}));if(!f||!p||n){var g=/./[d],v=e(d,""[t],(function(t,e,n,i,a){var c=e.exec;return c===r||c===o.exec?f&&!a?{done:!0,value:g.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}}));i(String.prototype,t,v[0]),i(o,d,v[1])}u&&s(o[d],"sham",!0)}},ec41:function(t,e,n){},f758:function(t,e,n){},fce3:function(t,e,n){var i=n("d039");t.exports=i((function(){var t=RegExp(".","string".charAt(0));return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))}}]);
//# sourceMappingURL=chunk-4ce4a1de.a388fe83.js.map