(self.webpackChunkrental_website=self.webpackChunkrental_website||[]).push([[678],{9670:function(e,t,n){var r=n(111);e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},1318:function(e,t,n){var r=n(5656),a=n(7466),o=n(1400),i=function(e){return function(t,n,i){var c,s=r(t),u=a(s.length),l=o(i,u);if(e&&n!=n){for(;u>l;)if((c=s[l++])!=c)return!0}else for(;u>l;l++)if((e||l in s)&&s[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:i(!0),indexOf:i(!1)}},4326:function(e){var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},9920:function(e,t,n){var r=n(6656),a=n(3887),o=n(1236),i=n(3070);e.exports=function(e,t){for(var n=a(t),c=i.f,s=o.f,u=0;u<n.length;u++){var l=n[u];r(e,l)||c(e,l,s(t,l))}}},8880:function(e,t,n){var r=n(9781),a=n(3070),o=n(9114);e.exports=r?function(e,t,n){return a.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(e,t,n){var r=n(7854),a=n(111),o=r.document,i=a(o)&&a(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(e,t,n){var r=n(7854),a=n(1236).f,o=n(8880),i=n(1320),c=n(3505),s=n(9920),u=n(4705);e.exports=function(e,t){var n,l,f,m,p,d=e.target,h=e.global,v=e.stat;if(n=h?r:v?r[d]||c(d,{}):(r[d]||{}).prototype)for(l in t){if(m=t[l],f=e.noTargetGet?(p=a(n,l))&&p.value:n[l],!u(h?l:d+(v?".":"#")+l,e.forced)&&void 0!==f){if(typeof m==typeof f)continue;s(m,f)}(e.sham||f&&f.sham)&&o(m,"sham",!0),i(n,l,m,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},5005:function(e,t,n){var r=n(857),a=n(7854),o=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e])||o(a[e]):r[e]&&r[e][t]||a[e]&&a[e][t]}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},6656:function(e){var t={}.hasOwnProperty;e.exports=function(e,n){return t.call(e,n)}},3501:function(e){e.exports={}},4664:function(e,t,n){var r=n(9781),a=n(7293),o=n(317);e.exports=!r&&!a((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(7293),a=n(4326),o="".split;e.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==a(e)?o.call(e,""):Object(e)}:Object},2788:function(e,t,n){var r=n(5465),a=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(e){return a.call(e)}),e.exports=r.inspectSource},9909:function(e,t,n){var r,a,o,i=n(8536),c=n(7854),s=n(111),u=n(8880),l=n(6656),f=n(5465),m=n(6200),p=n(3501),d="Object already initialized",h=c.WeakMap;if(i){var v=f.state||(f.state=new h),g=v.get,E=v.has,b=v.set;r=function(e,t){if(E.call(v,e))throw new TypeError(d);return t.facade=e,b.call(v,e,t),t},a=function(e){return g.call(v,e)||{}},o=function(e){return E.call(v,e)}}else{var y=m("state");p[y]=!0,r=function(e,t){if(l(e,y))throw new TypeError(d);return t.facade=e,u(e,y,t),t},a=function(e){return l(e,y)?e[y]:{}},o=function(e){return l(e,y)}}e.exports={set:r,get:a,has:o,enforce:function(e){return o(e)?a(e):r(e,{})},getterFor:function(e){return function(t){var n;if(!s(t)||(n=a(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}}},4705:function(e,t,n){var r=n(7293),a=/#|\.prototype\./,o=function(e,t){var n=c[i(e)];return n==u||n!=s&&("function"==typeof t?r(t):!!t)},i=o.normalize=function(e){return String(e).replace(a,".").toLowerCase()},c=o.data={},s=o.NATIVE="N",u=o.POLYFILL="P";e.exports=o},111:function(e){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},1913:function(e){e.exports=!1},8536:function(e,t,n){var r=n(7854),a=n(2788),o=r.WeakMap;e.exports="function"==typeof o&&/native code/.test(a(o))},3070:function(e,t,n){var r=n(9781),a=n(4664),o=n(9670),i=n(7593),c=Object.defineProperty;t.f=r?c:function(e,t,n){if(o(e),t=i(t,!0),o(n),a)try{return c(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),a=n(5296),o=n(9114),i=n(5656),c=n(7593),s=n(6656),u=n(4664),l=Object.getOwnPropertyDescriptor;t.f=r?l:function(e,t){if(e=i(e),t=c(t,!0),u)try{return l(e,t)}catch(n){}if(s(e,t))return o(!a.f.call(e,t),e[t])}},8006:function(e,t,n){var r=n(6324),a=n(748).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,a)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},6324:function(e,t,n){var r=n(6656),a=n(5656),o=n(1318).indexOf,i=n(3501);e.exports=function(e,t){var n,c=a(e),s=0,u=[];for(n in c)!r(i,n)&&r(c,n)&&u.push(n);for(;t.length>s;)r(c,n=t[s++])&&(~o(u,n)||u.push(n));return u}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,a=r&&!n.call({1:2},1);t.f=a?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},3887:function(e,t,n){var r=n(5005),a=n(8006),o=n(5181),i=n(9670);e.exports=r("Reflect","ownKeys")||function(e){var t=a.f(i(e)),n=o.f;return n?t.concat(n(e)):t}},857:function(e,t,n){var r=n(7854);e.exports=r},1320:function(e,t,n){var r=n(7854),a=n(8880),o=n(6656),i=n(3505),c=n(2788),s=n(9909),u=s.get,l=s.enforce,f=String(String).split("String");(e.exports=function(e,t,n,c){var s,u=!!c&&!!c.unsafe,m=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof n&&("string"!=typeof t||o(n,"name")||a(n,"name",t),(s=l(n)).source||(s.source=f.join("string"==typeof t?t:""))),e!==r?(u?!p&&e[t]&&(m=!0):delete e[t],m?e[t]=n:a(e,t,n)):m?e[t]=n:i(t,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||c(this)}))},4488:function(e){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},3505:function(e,t,n){var r=n(7854),a=n(8880);e.exports=function(e,t){try{a(r,e,t)}catch(n){r[e]=t}return t}},6200:function(e,t,n){var r=n(2309),a=n(9711),o=r("keys");e.exports=function(e){return o[e]||(o[e]=a(e))}},5465:function(e,t,n){var r=n(7854),a=n(3505),o="__core-js_shared__",i=r[o]||a(o,{});e.exports=i},2309:function(e,t,n){var r=n(1913),a=n(5465);(e.exports=function(e,t){return a[e]||(a[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.10.2",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1400:function(e,t,n){var r=n(9958),a=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?a(n+t,0):o(n,t)}},5656:function(e,t,n){var r=n(8361),a=n(4488);e.exports=function(e){return r(a(e))}},9958:function(e){var t=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:t)(e)}},7466:function(e,t,n){var r=n(9958),a=Math.min;e.exports=function(e){return e>0?a(r(e),9007199254740991):0}},7593:function(e,t,n){var r=n(111);e.exports=function(e,t){if(!r(e))return e;var n,a;if(t&&"function"==typeof(n=e.toString)&&!r(a=n.call(e)))return a;if("function"==typeof(n=e.valueOf)&&!r(a=n.call(e)))return a;if(!t&&"function"==typeof(n=e.toString)&&!r(a=n.call(e)))return a;throw TypeError("Can't convert object to primitive value")}},9711:function(e){var t=0,n=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++t+n).toString(36)}},5438:function(e,t,n){var r=n(2109),a=Math.hypot,o=Math.abs,i=Math.sqrt;r({target:"Math",stat:!0,forced:!!a&&a(1/0,NaN)!==1/0},{hypot:function(e,t){for(var n,r,a=0,c=0,s=arguments.length,u=0;c<s;)u<(n=o(arguments[c++]))?(a=a*(r=u/n)*r+1,u=n):a+=n>0?(r=n/u)*r:n;return u===1/0?1/0:u*i(a)}})},2110:function(e,t,n){"use strict";var r=n(7294),a=n(5444),o=n(9947),i=n(5702);t.Z=function(e){return r.createElement("div",{className:"card"},e.icon?r.createElement(i.ZP,{className:"card__icon",iconSet:o,icon:e.icon}):null,"hostel"===e.image?r.createElement("div",{className:"card__img card__img--hostel"}):"single"===e.image?r.createElement("div",{className:"card__img card__img--single"}):"double"===e.image?r.createElement("div",{className:"card__img card__img--double"}):null,r.createElement("div",{className:"card__text-content"},r.createElement("div",null,r.createElement("h3",{className:"card__heading"},e.heading),r.createElement("p",{className:"card__description"},e.description)),e.url?r.createElement(a.Link,{className:"card__button",to:e.url},"View room"):null))}},2057:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){return r.createElement("div",{className:"card-container"},e.children)}},4650:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(7294),a=n(5414),o=n(2110),i=n(2057),c=n(9947),s=n(5702),u=function(e){return r.createElement("div",{className:"contact-detail"},r.createElement(s.ZP,{className:"contact-detail__icon",iconSet:c,icon:e.icon}),r.createElement("span",{className:"contact-detail__information"},e.information))},l=n(3375),f=function(){return r.createElement("header",{className:"header"},r.createElement("div",{className:"header__container"},r.createElement("h1",{className:"header__heading"},"Hotel Name"),r.createElement("hr",null),r.createElement("p",{className:"header__description"},"Insert description here"),r.createElement("div",{className:"header__socials"},r.createElement("a",{href:"https://twitter.com",target:"_blank",rel:"noreferrer"},r.createElement(s.ZP,{className:"header__socials-icon",iconSet:c,icon:"twitter"})),r.createElement("a",{href:"https://facebook.com",target:"_blank",rel:"noreferrer"},r.createElement(s.ZP,{className:"header__socials-icon",iconSet:c,icon:"facebook2"})),r.createElement("a",{href:"https://instagram.com",target:"_blank",rel:"noreferrer"},r.createElement(s.ZP,{className:"header__socials-icon",iconSet:c,icon:"instagram"})))))},m=n(2974),p=n.n(m),d=function(){var e=(0,r.useRef)(null),t=(0,r.useState)(null)[1];return(0,r.useEffect)((function(){var n=new(p().Map)({container:e.current,accessToken:"pk.eyJ1Ijoiam9obmF0YW5mIiwiYSI6ImNrbnIza2wxNjBwYjkycG56NHVzODc0YnUifQ.Hk4PvqiIaMXCDhB0eep5cw",style:"mapbox://styles/mapbox/streets-v11",center:[115.26,-8.51],zoom:15});return(new(p().Marker)).setLngLat([115.26,-8.51]).addTo(n),n.addControl(new(p().NavigationControl),"top-right"),t(n),function(){return n.remove()}}),[]),r.createElement("div",{ref:e,className:"map"})},h=n(6601),v=n.p+"static/who-we-are-side-94de6679e188b035b82952292404a2c1.jpg",g=function(e){var t=e.data;return r.createElement(r.Fragment,null,r.createElement(a.q,null,r.createElement("meta",{charSet:"utf-8"}),r.createElement("title",null,t.site.siteMetadata.title)),r.createElement(h.Z,null),r.createElement(f,null),r.createElement("main",{className:"main"},r.createElement("section",{className:"section section--dark section-who-we-are"},r.createElement("h2",{className:"heading-secondary u-margin-bottom-small"},"Who we are"),r.createElement("div",{className:"section-who-we-are__content-container"},r.createElement("div",{className:"section-who-we-are__paragraph-container"},r.createElement("p",{className:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum, massa nec pharetra bibendum, arcu nisl condimentum nibh, tincidunt lobortis velit turpis et odio. Integer tincidunt ligula tellus, eu laoreet enim hendrerit sit amet. Aenean elementum massa non cursus posuere. Aliquam et pellentesque magna. Nunc et nulla eget eros lobortis faucibus. Etiam elementum nisi sed nunc venenatis dictum. Nulla facilisi. Sed et dui at leo laoreet feugiat sed ac justo."),r.createElement("p",{className:"paragraph"},"Aenean a tellus ultrices, accumsan libero sit amet, elementum odio. Fusce dignissim diam mi, nec faucibus diam eleifend vitae. Aliquam vitae sagittis nunc. Maecenas id est vel neque convallis vehicula.")),r.createElement("img",{className:"section-who-we-are__image",src:v,alt:""}))),r.createElement("section",{className:"section section--dark section-available-rooms"},r.createElement("h2",{className:"heading-secondary u-margin-bottom-small"},"Available rooms"),r.createElement(i.Z,null,r.createElement(o.Z,{image:"hostel",url:"/hostel",heading:"hostel",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet."}),r.createElement(o.Z,{image:"single",url:"/single",heading:"single room",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),r.createElement(o.Z,{image:"double",url:"/double",heading:"double room",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}))),r.createElement("section",{className:"section section--dark section-find-us"},r.createElement("h2",{className:"heading-secondary u-margin-bottom-small"},"Find us"),r.createElement("div",{className:"section-find-us__content"},r.createElement(d,null),r.createElement("div",{className:"section-find-us__details"},r.createElement(u,{icon:"location",information:"Ubud, Bali"}),r.createElement(u,{icon:"phone",information:"(555) 5555 555"}),r.createElement(u,{icon:"mail4",information:"fakeemail@fakehotel.com"}))))),r.createElement(l.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-4da9c3c8637877909172.js.map