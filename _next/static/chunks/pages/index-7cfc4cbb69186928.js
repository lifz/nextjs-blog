(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3678)}])},8418:function(e,n,r){"use strict";function s(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],s=!0,i=!1,t=void 0;try{for(var a,l=e[Symbol.iterator]();!(s=(a=l.next()).done)&&(r.push(a.value),!n||r.length!==n);s=!0);}catch(c){i=!0,t=c}finally{try{s||null==l.return||l.return()}finally{if(i)throw t}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var i,t=(i=r(7294))&&i.__esModule?i:{default:i},a=r(6273),l=r(387),c=r(7190);var o={};function d(e,n,r,s){if(e&&a.isLocalURL(n)){e.prefetch(n,r,s).catch((function(e){0}));var i=s&&"undefined"!==typeof s.locale?s.locale:e&&e.locale;o[n+"%"+r+(i?"%"+i:"")]=!0}}var h=function(e){var n,r=!1!==e.prefetch,i=l.useRouter(),h=t.default.useMemo((function(){var n=s(a.resolveHref(i,e.href,!0),2),r=n[0],t=n[1];return{href:r,as:e.as?a.resolveHref(i,e.as):t||r}}),[i,e.href,e.as]),u=h.href,f=h.as,j=e.children,x=e.replace,p=e.shallow,v=e.scroll,m=e.locale;"string"===typeof j&&(j=t.default.createElement("a",null,j));var y=(n=t.default.Children.only(j))&&"object"===typeof n&&n.ref,g=s(c.useIntersection({rootMargin:"200px"}),2),b=g[0],N=g[1],w=t.default.useCallback((function(e){b(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,b]);t.default.useEffect((function(){var e=N&&r&&a.isLocalURL(u),n="undefined"!==typeof m?m:i&&i.locale,s=o[u+"%"+f+(n?"%"+n:"")];e&&!s&&d(i,u,f,{locale:n})}),[f,u,N,m,r,i]);var I={ref:w,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,s,i,t,l,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(r))&&(e.preventDefault(),null==l&&s.indexOf("#")>=0&&(l=!1),n[i?"replace":"push"](r,s,{shallow:t,locale:c,scroll:l}))}(e,i,u,f,x,p,v,m)},onMouseEnter:function(e){a.isLocalURL(u)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),d(i,u,f,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var k="undefined"!==typeof m?m:i&&i.locale,E=i&&i.isLocaleDomain&&a.getDomainLocale(f,k,i&&i.locales,i&&i.domainLocales);I.href=E||a.addBasePath(a.addLocale(f,k,i&&i.defaultLocale))}return t.default.cloneElement(n,I)};n.default=h},7190:function(e,n,r){"use strict";function s(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],s=!0,i=!1,t=void 0;try{for(var a,l=e[Symbol.iterator]();!(s=(a=l.next()).done)&&(r.push(a.value),!n||r.length!==n);s=!0);}catch(c){i=!0,t=c}finally{try{s||null==l.return||l.return()}finally{if(i)throw t}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!a,c=i.useRef(),o=s(i.useState(!1),2),d=o[0],h=o[1],u=i.useCallback((function(e){c.current&&(c.current(),c.current=void 0),r||d||e&&e.tagName&&(c.current=function(e,n,r){var s=function(e){var n=e.rootMargin||"",r=l.get(n);if(r)return r;var s=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n=s.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return l.set(n,r={id:n,observer:i,elements:s}),r}(r),i=s.id,t=s.observer,a=s.elements;return a.set(e,n),t.observe(e),function(){a.delete(e),t.unobserve(e),0===a.size&&(t.disconnect(),l.delete(i))}}(e,(function(e){return e&&h(e)}),{rootMargin:n}))}),[r,n,d]);return i.useEffect((function(){if(!a&&!d){var e=t.requestIdleCallback((function(){return h(!0)}));return function(){return t.cancelIdleCallback(e)}}}),[d]),[u,d]};var i=r(7294),t=r(9311),a="undefined"!==typeof IntersectionObserver;var l=new Map},3678:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var s=r(5893),i=r(9008),t=r(1664);function a(){return(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)(i.default,{children:[(0,s.jsx)("title",{children:"Fengzhan Li"}),(0,s.jsx)("meta",{charset:"utf-8"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, user-scalable=no"})]}),(0,s.jsxs)("body",{className:"is-preload",children:[(0,s.jsxs)("div",{id:"wrapper",children:[(0,s.jsx)("div",{id:"main",children:(0,s.jsxs)("div",{className:"inner",children:[(0,s.jsx)("header",{id:"header",children:(0,s.jsx)(t.default,{href:"/",children:(0,s.jsx)("a",{className:"logo",children:(0,s.jsx)("strong",{children:"Fengzhan Li"})})})}),(0,s.jsx)("section",{id:"banner",children:(0,s.jsx)("div",{className:"content",children:(0,s.jsxs)("header",{children:[(0,s.jsx)("h1",{children:"Hi, I'm Fengzhan"}),(0,s.jsx)("p",{children:"Imagine not having a blog in 2021"})]})})}),(0,s.jsxs)("section",{children:[(0,s.jsx)("header",{className:"major",children:(0,s.jsx)("h2",{children:"Here you can find"})}),(0,s.jsxs)("div",{className:"features",children:[(0,s.jsxs)("article",{children:[(0,s.jsx)("span",{className:"icon solid fa-briefcase"}),(0,s.jsxs)("div",{className:"content",children:[(0,s.jsx)("h3",{children:(0,s.jsx)(t.default,{href:"/posts/portfolio",children:(0,s.jsx)("a",{children:"My portfolio"})})}),(0,s.jsx)("p",{children:"Case studies I have done using public datasets."})]})]}),(0,s.jsxs)("article",{children:[(0,s.jsx)("span",{className:"icon solid fa-book"}),(0,s.jsxs)("div",{className:"content",children:[(0,s.jsx)("h3",{children:(0,s.jsx)(t.default,{href:"/posts/reading",children:(0,s.jsx)("a",{children:"Books I read"})})}),(0,s.jsx)("p",{children:"I summarize the books I found useful or interesting."})]})]}),(0,s.jsxs)("article",{children:[(0,s.jsx)("span",{className:"icon solid fa-feather-alt"}),(0,s.jsxs)("div",{className:"content",children:[(0,s.jsx)("h3",{children:(0,s.jsx)(t.default,{href:"/posts/learning",children:(0,s.jsx)("a",{children:"My notes"})})}),(0,s.jsx)("p",{children:"I take notes on whatever I'm learning, be it online courses or self-study projects."})]})]}),(0,s.jsxs)("article",{children:[(0,s.jsx)("span",{className:"icon solid fa-hand-spock"}),(0,s.jsxs)("div",{className:"content",children:[(0,s.jsx)("h3",{children:"And more..."}),(0,s.jsx)("p",{children:"I also share some of my favorite songs, movies and TV shows."})]})]})]})]})]})}),(0,s.jsx)("div",{id:"sidebar",children:(0,s.jsxs)("div",{className:"inner",children:[(0,s.jsx)("section",{id:"search",className:"alt",children:(0,s.jsx)("form",{method:"post",action:"#",children:(0,s.jsx)("input",{type:"text",name:"query",id:"query",placeholder:"Search"})})}),(0,s.jsxs)("nav",{id:"menu",children:[(0,s.jsx)("header",{className:"major",children:(0,s.jsx)("h2",{children:"Menu"})}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(t.default,{href:"/",children:(0,s.jsx)("a",{children:"Home"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(t.default,{href:"/posts/portfolio",children:(0,s.jsx)("a",{children:"Portfolio"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(t.default,{href:"/posts/reading",children:(0,s.jsx)("a",{children:"Reading"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(t.default,{href:"/posts/learning",children:(0,s.jsx)("a",{children:"Learning"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(t.default,{href:"/posts/songs",children:(0,s.jsx)("a",{children:"Songs"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(t.default,{href:"/posts/movies",children:(0,s.jsx)("a",{children:"Movies"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(t.default,{href:"/posts/tv shows",children:(0,s.jsx)("a",{children:"TV shows"})})})]})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("header",{className:"major",children:(0,s.jsx)("h2",{children:"Get in touch"})}),(0,s.jsx)("p",{children:"What's on your mind?"}),(0,s.jsx)("ul",{className:"contact",children:(0,s.jsx)("li",{className:"icon solid fa-envelope",children:(0,s.jsx)("a",{href:"mailto:lifengzhan@hotmail.com",children:"lifengzhan@hotmail.com"})})})]}),(0,s.jsx)("footer",{id:"footer",children:(0,s.jsxs)("p",{className:"copyright",children:["Design: ",(0,s.jsx)("a",{href:"https://html5up.net",children:"HTML5 UP"}),"."]})})]})})]}),(0,s.jsx)("script",{src:"/js/jquery.min.js"}),(0,s.jsx)("script",{src:"/js/browser.min.js"}),(0,s.jsx)("script",{src:"/js/breakpoints.min.js"}),(0,s.jsx)("script",{src:"/js/util.js"}),(0,s.jsx)("script",{src:"/js/main.js"})]})]})}},9008:function(e,n,r){e.exports=r(5443)},1664:function(e,n,r){e.exports=r(8418)}},function(e){e.O(0,[774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);