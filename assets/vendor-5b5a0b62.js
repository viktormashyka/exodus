function p(t){if(Array.isArray(t)){for(var e=0,o=Array(t.length);e<t.length;e++)o[e]=t[e];return o}else return Array.from(t)}var c=!1;if(typeof window<"u"){var y={get passive(){c=!0}};window.addEventListener("testPassive",null,y),window.removeEventListener("testPassive",null,y)}var s=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),d=[],a=!1,w=-1,l=void 0,r=void 0,u=void 0,m=function(e){return d.some(function(o){return!!(o.options.allowTouchMove&&o.options.allowTouchMove(e))})},f=function(e){var o=e||window.event;return m(o.target)||o.touches.length>1?!0:(o.preventDefault&&o.preventDefault(),!1)},h=function(e){if(u===void 0){var o=!!e&&e.reserveScrollBarGap===!0,i=window.innerWidth-document.documentElement.clientWidth;if(o&&i>0){var n=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);u=document.body.style.paddingRight,document.body.style.paddingRight=n+i+"px"}}l===void 0&&(l=document.body.style.overflow,document.body.style.overflow="hidden")},g=function(){u!==void 0&&(document.body.style.paddingRight=u,u=void 0),l!==void 0&&(document.body.style.overflow=l,l=void 0)},b=function(){return window.requestAnimationFrame(function(){if(r===void 0){r={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,o=e.scrollY,i=e.scrollX,n=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-o,document.body.style.left=-i,setTimeout(function(){return window.requestAnimationFrame(function(){var v=n-window.innerHeight;v&&o>=n&&(document.body.style.top=-(o+v))})},300)}})},S=function(){if(r!==void 0){var e=-parseInt(document.body.style.top,10),o=-parseInt(document.body.style.left,10);document.body.style.position=r.position,document.body.style.top=r.top,document.body.style.left=r.left,window.scrollTo(o,e),r=void 0}},T=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},P=function(e,o){var i=e.targetTouches[0].clientY-w;return m(e.target)?!1:o&&o.scrollTop===0&&i>0||T(o)&&i<0?f(e):(e.stopPropagation(),!0)},B=function(e,o){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!d.some(function(n){return n.targetElement===e})){var i={targetElement:e,options:o||{}};d=[].concat(p(d),[i]),s?b():h(o),s&&(e.ontouchstart=function(n){n.targetTouches.length===1&&(w=n.targetTouches[0].clientY)},e.ontouchmove=function(n){n.targetTouches.length===1&&P(n,e)},a||(document.addEventListener("touchmove",f,c?{passive:!1}:void 0),a=!0))}},A=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}d=d.filter(function(o){return o.targetElement!==e}),s&&(e.ontouchstart=null,e.ontouchmove=null,a&&d.length===0&&(document.removeEventListener("touchmove",f,c?{passive:!1}:void 0),a=!1)),s?S():g()};export{B as d,A as e};
//# sourceMappingURL=vendor-5b5a0b62.js.map
