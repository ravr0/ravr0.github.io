"use strict";(self.webpackChunkmega_zagadki_priv_policy=self.webpackChunkmega_zagadki_priv_policy||[]).push([[61],{3204:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,r=!1;for(let n=0;n<e.length;n++){const s=e[n];t&&/[a-zA-Z]/.test(s)&&s.toUpperCase()===s?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(s)&&s.toLowerCase()===s?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=s.toLowerCase()===s&&s.toUpperCase()!==s,r=a,a=s.toUpperCase()===s&&s.toLowerCase()!==s)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},3723:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return E},P:function(){return b},S:function(){return R},_:function(){return l},a:function(){return i},b:function(){return o},g:function(){return d},h:function(){return c}});var r=a(7294),n=(a(3204),a(5697)),s=a.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const c=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function o(e,t,a,r,n){return void 0===n&&(n={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,s,l,c){const o={};s&&(o.backgroundColor=s,"fixed"===a?(o.width=r,o.height=n,o.backgroundColor=s,o.position="relative"):("constrained"===a||"fullWidth"===a)&&(o.position="absolute",o.top=0,o.left=0,o.bottom=0,o.right=0)),l&&(o.objectFit=l),c&&(o.objectPosition=c);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},o)});return d}const u=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=l(e,u);return r.createElement(r.Fragment,null,r.createElement(p,i({},a)),t,null)},m=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:c}=e,o=l(e,m);return r.createElement("img",i({},o,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:s}))},y=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=l(e,h);const c=s.sizes||(null==t?void 0:t.sizes),o=r.createElement(f,i({},s,t,{sizes:c,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:c})})),o):o};var v;f.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],b=function(e){let{fallback:t}=e,a=l(e,w);return t?r.createElement(y,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};b.displayName="Placeholder",b.propTypes={fallback:n.string,sources:null==(v=y.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const E=function(e){return r.createElement(r.Fragment,null,r.createElement(y,i({},e)),r.createElement("noscript",null,r.createElement(y,i({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=y.propTypes;const C=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),i=3;i<r;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},L={image:s().object.isRequired,alt:C},k=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],x=["style","className"],S=new Set;let T,_;const O=function(e){let{as:t="div",image:n,style:s,backgroundColor:o,className:d,class:u,onStartLoad:p,onLoad:g,onError:m}=e,h=l(e,k);const{width:f,height:y,layout:v}=n,w=function(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(f,y,v),{style:b,className:E}=w,C=l(w,x),L=(0,r.useRef)(),O=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);u&&(d=u);const I=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(v,f,y);return(0,r.useEffect)((()=>{T||(T=Promise.all([a.e(774),a.e(223)]).then(a.bind(a,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return _=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=L.current.querySelector("[data-gatsby-image-ssr]");if(e&&c())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void S.add(O);if(_&&S.has(O))return;let t,r;return T.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;L.current&&(L.current.innerHTML=a(i({isLoading:!0,isLoaded:S.has(O),image:n},h)),S.has(O)||(t=requestAnimationFrame((()=>{L.current&&(r=l(L.current,O,S,s,p,g,m))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{S.has(O)&&_&&(L.current.innerHTML=_(i({isLoading:S.has(O),isLoaded:S.has(O),image:n},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,i({},C,{style:i({},b,s,{backgroundColor:o}),className:E+(d?" "+d:""),ref:L,dangerouslySetInnerHTML:{__html:I},suppressHydrationWarning:!0}))},I=(0,r.memo)((function(e){return e.image?(0,r.createElement)(O,e):null}));I.propTypes=L,I.displayName="GatsbyImage";const z=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],q=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},A=new Set(["fixed","fullWidth","constrained"]),N={src:s().string.isRequired,alt:C,width:q,height:q,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!A.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},R=(M=I,function(e){let{src:t,__imageData:a,__error:n}=e,s=l(e,z);return n&&console.warn(n),a?r.createElement(M,i({image:a},s)):(console.warn("Image not loaded",t),null)});var M;R.displayName="StaticImage",R.propTypes=N},8733:function(e,t,a){a.d(t,{tZ:function(){return r}});var r=a(2396).tZ},2548:function(e){e.exports=JSON.parse('{"layout":"fullWidth","placeholder":{"fallback":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'432\'%20height=\'384\'%20viewBox=\'0%200%20432%20384\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M157%2014c-10%204-17%2010-19%2019-1%206-1%208%202%208l4%201h11c3%200%203%200%203-3%200-4%201-5%206-5%204%200%209%202%2010%205l-4%203c-8%204-12%209-13%2016-1%203-1%203%202%203l5%201h5l6-1%203-2%204-4c14-9%2019-17%2015-27-4-11-25-18-40-14m118%2023c-7%202-11%205-13%2011l-2%204%208%203c7%203%209%203%209%200%200-2%208-1%2010%201%203%203%202%204-4%205s-12%206-12%2010c0%203%2013%207%2017%205l10-5c8-3%2011-7%2011-14%200-13-20-24-34-20M49%2066c-15%205-24%2018-21%2029%201%204%201%204%205%205l7-2%207-1c3%200%203%200%202-4%200-6%201-7%207-7%203%200%205%200%207%202l2%203-5%205c-6%207-8%2011-8%2016l1%205%204-1c8%200%2015-3%2016-6l8-10c9-9%2011-15%207-24-5-11-23-15-39-10m108%202-1%208v7h21V68l-10-1-10%201m111%2010c-4%2011-4%2011%206%2014l5%202c1%200%202-1%203-5%202-4%202-8%201-8l-7-2c-5-1-7-2-8-1m-74%2032c-3%200-6%202-8%204l-4%203-3-2c-8-6-21-2-40%2016l-8%204c-11%200-24%205-29%2011-4%204-9%2014-9%2016s-2%204-7%204c-13%203-24%209-31%2018-4%204-6%206-10%207-12%205-15%2012-15%2028v7l-4%202c-5%202-11%206-13%2010-2%205-1%2018%204%2026l2%203-2%205c-2%205-4%2016-4%2027%200%204-1%209-4%2015-5%2015-3%2023%208%2027%204%202%205%203%205%205%204%2014%2017%2020%2030%2014l5-3%204%204c7%208%2016%2010%2033%208%2012-2%2022-5%2029-8l4-2v3c2%207%206%208%2020%208%2010-1%2019-3%2028-7%203-2%209-3%2013-3%2016-2%2028-5%2039-12l6-4%203%204c4%203%205%204%2010%204%206%200%2022-7%2028-13l3-3%204%202c12%205%2025%202%2051-13%206-4%2017-10%2025-13%2013-7%2019-12%2020-17%200-2%201-3%205-4%2017-4%2030-19%2036-42%203-13%202-23-2-31-1-4-12-9-20-10-6-2-6-2-8-6%200-3-3-7-5-9l-3-8c1-10-5-24-16-36-4-4-16-5-19-2h-8l-13-1-8%201%202-3c3-3%202-7-1-12-4-6-12-14-16-15a345%20345%200%200%200-45%201c-5-2-14-4-24-5l-18-3c-10-2-16-2-20%200m-6%207c-3%204-3%204-2%209v7c1%203%201%203%2011-1%2014-5%2025-6%2041-2%202%200%204-3%202-5a2065%202065%200%200%201-41-10c-6-1-7-1-11%202m-30%203-10%209c-5%205-5%205-3%205h3c0%202-5%203-16%204-14%201-19%203-23%208-4%204-8%2013-8%2016s9%203%2013%201c3-2%204-2%201%201l-2%202%205-1c18-2%2033-7%2039-13%205-4%206-3%201%202-2%202-6%206-11%208-8%204-12%205-31%208-14%203-27%2010-33%2020-4%205-3%206%202%204l9-1%209-4c9-7%2020-11%2030-13l8-1h2l8%202c36%205%2049%2046%2022%2073-7%207-7%207-4%207l-4%202-10%204-13%204-18%207c-10%206-12%205-4%200l5-5-6-2c-31-6-46-38-29-64l2-4c-1-2-11-1-16%201-10%205-17%203-18-3-1-4-1-4-6-4-9%200-15%208-15%2020-1%2010%200%2011%208%206l10-3c3%201-5%205-17%2011-17%207-21%2016-12%2025%205%205%208%206%2013%204%206-4%2018-6%2021-5%206%202%201%205-9%205-17%200-26%2011-27%2032%200%2012-2%2020-8%2030-6%209-5%2017%201%2017%204%200%205-2%206-8l7-16c5-10%206-13%206-18%201-6%201-7%205-5l5%202c2%200%202%200%200%204l-3%207-4%2011c-8%2016-7%2031%200%2040%204%203%2017%202%2015-2v-15l12-53c1-5%207-11%2011-12%203%200%205%201%202%202s-6%209-8%2020c-6%2027-7%2037-7%2047v10l5%205c9%2010%2019%2011%2040%207%2013-2%2017-6%2031-30%2010-15%209-14%2010-12%201%200-1%206-7%2017-9%2019-10%2024-5%2027%205%204%2026%202%2040-4%206-3%2011-4%2018-5%2017-2%2019-3%2029-11l7-5-8-1c-19-2-41-12-60-29-6-5-6-6%200-3%209%205%2026%208%2038%208%2016%201%2020-1%2030-10%2016-16%2033-18%2038-6%208%2017-8%2037-31%2040-3%200-3%200%201%203l5%204c4%205%2013%203%2022-5%203-3%206-11%206-16%200-2%202-4%205-8l6-5-1%207c0%208%200%208%203%2011%208%208%2019%207%2039-4l22-11c11-6%2021-13%2022-17v-18c-2-3%203-2%206%201%207%208%2011%209%2017%203%204-4%2012-16%2014-21%205-13%206-30%202-38-3-5-20-12-23-9-5%204-13%2026-11%2030l7%202c6%201%2013%207%2013%2010%200%205-9%206-11%202-4-5-8-7-15-7h-6l-6%207-5%2010c0%2013-8%2028-19%2037-8%206-21%2013-23%2013l4-3c17-9%2028-23%2030-39%200-6%201-8%203-11l3-4c0-2%208-11%2011-12%202-1%203-2%203-7%201-9%206-21%2012-27%205-5%205-9%201-15-3-5-6-7-11-8-12-4-19-2-23%208l-5%206c-2%201-2%201-3-3%200-3%200-4%204-8%206-7%2014-9%2026-10h10c1-2-5-15-9-20l-6-8c-3-4-6-6-8-6l3%203c4%205%205%208%205%2014%200%207-3%2011-11%2016-7%204-9%203-4-1%209-10%207-21-6-28-6-3-24-5-31-3-3%201-5%201-8-1-3-1-3-1-1-2l5-1c3%200%206-3%206-6s-4-9-10-14l-4-4-20-1c-24-1-26-1-27%207%200%204%200%206%202%207%202%202%201%203-4%206h-7c-10-7-25-10-36-8-6%201-20%208-21%2010s-4%203-7%203l-6%202c-3%201%201-4%207-8%203-2%204-4%204-5l-2-6c-1-5-9-14-13-14l-7%203m-96%201-7%202c-1%201%202%2016%203%2016l19-5-1-8c-1-8-1-8-14-5m177%2030c1%203%2012%2010%2019%2012l17%203c19%202%2033%209%2043%2021%206%208%206%206%201-2-11-15-23-21-45-24-15-1-23-3-28-7l-7-3M84%20169c-7%201-13%205-18%209-3%203-4%207-2%206l13-4-4%203c-4%202-4%203-4%208%200%204%200%205%202%206%204%202%206%201%209-5%203-7%208-13%2015-18%206-4%206-4%204-5H84m173%205c-47%207-51%2063-7%2085l6%204c0%201%203%202%2010%202%208%200%2024%203%2035%207l9%202-17-8c-4-1-3-2%202-4%2011-3%2020-11%2026-22%204-9%204-24-1-34a61%2061%200%200%200-63-32m2%203c-20%205-34%2024-31%2042%205%2026%2034%2045%2061%2038%2012-2%2021-9%2027-19%204-8%204-23-1-32a53%2053%200%200%200-56-29m-134%205c-31%209-46%2040-31%2063%2020%2030%2076%2017%2085-21%206-28-23-51-54-42m178%2037c-3%203-3%207%200%2010%205%204%2011%201%2011-5%200-7-7-11-11-5m-156%2057c-7%203-19%2014-30%2028-13%2017-17%2020-30%2020h-4l3%204c7%206%2010%207%2017%204s13-11%2020-22c10-20%2016-26%2027-32l3-3c-1-1-1-1-6%201m99%2019c-5%202-15%2013-15%2016%200%206%204%209%2010%208%2011-3%2016-14%2010-22-2-3-3-3-5-2m13%2017c-3%204-4%2011%200%2012%201%200%207-6%208-9%202-5-3-7-8-3m-37%201-7%203c-7%200-7%201-7%205%201%206%204%208%209%208l5%201c3%201%207-4%207-9%200-8-2-10-7-8m20%2013c-7%201-9%202-9%205%201%204%2013%203%2019-2%205-4%204-5-10-3\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e"},"images":{"fallback":{"src":"/static/16ea066b2e60a55844e05a2f9626d351/634a6/splash_icon2.png","srcSet":"/static/16ea066b2e60a55844e05a2f9626d351/634a6/splash_icon2.png 432w","sizes":"100vw"},"sources":[{"srcSet":"/static/16ea066b2e60a55844e05a2f9626d351/55995/splash_icon2.webp 432w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.8888888888888888}')}}]);
//# sourceMappingURL=e50e9c162871c1d91fba5ce567a5656e16dc6783-793b74f2037b3516cf35.js.map