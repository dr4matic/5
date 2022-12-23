this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["price-filter"]=function(e){function t(t){for(var r,i,a=t[0],l=t[1],s=t[2],b=0,p=[];b<a.length;b++)i=a[b],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&p.push(c[i][0]),c[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(t);p.length;)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var l=n[a];0!==c[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={18:0,1:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var u=l;return o.push([403,0]),n()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){e.exports=window.wp.blocks},102:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);const c=Object(r.createContext)({}),o=()=>{const{wrapper:e}=Object(r.useContext)(c);return t=>{e&&e.current&&(e.current.hidden=!t)}}},103:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(12);function c(e,t){const n=Object(r.useRef)();return Object(r.useEffect)(()=>{n.current===e||t&&!t(e,n.current)||(n.current=e)},[e,t]),n.current}},107:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(9),c=n(7),o=n(0),i=n(40),a=n(142);const l=e=>{const{namespace:t,resourceName:n,resourceValues:l=[],query:s={},shouldSelect:u=!0}=e;if(!t||!n)throw new Error("The options object must have valid values for the namespace and the resource properties.");const b=Object(o.useRef)({results:[],isLoading:!0}),p=Object(i.a)(s),d=Object(i.a)(l),m=Object(a.a)(),f=Object(c.useSelect)(e=>{if(!u)return null;const c=e(r.COLLECTIONS_STORE_KEY),o=[t,n,p,d],i=c.getCollectionError(...o);if(i){if(!(i instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");m(i)}return{results:c.getCollection(...o),isLoading:!c.hasFinishedResolution("getCollection",o)}},[t,n,d,p,u]);return null!==f&&(b.current=f),b.current}},11:function(e,t){e.exports=window.wp.compose},12:function(e,t){e.exports=window.React},122:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),c=n(1),o=n(10),i=n(7),a=n(3),l=n(5);const s=e=>{let{clientId:t,setAttributes:n,filterType:s,attributes:u}=e;const{replaceBlock:b}=Object(i.useDispatch)("core/block-editor"),{heading:p,headingLevel:d}=u;if(Object(i.useSelect)(e=>{const{getBlockParentsByBlockName:n}=e("core/block-editor");return n(t,"woocommerce/filter-wrapper").length>0},[t])||!s)return null;const m=[Object(r.createElement)(a.Button,{key:"convert",onClick:()=>{const e=[Object(o.createBlock)("woocommerce/"+s,{...u,heading:""})];p&&""!==p&&e.unshift(Object(o.createBlock)("core/heading",{content:p,level:null!=d?d:2})),b(t,Object(o.createBlock)("woocommerce/filter-wrapper",{heading:p,filterType:s},[...e])),n({heading:"",lock:{remove:!0}})},variant:"primary"},Object(c.__)("Upgrade block","woocommerce"))];return Object(r.createElement)(l.Warning,{actions:m},Object(c.__)("Filter block: We have improved this block to make styling easier. Upgrade it using the button below.","woocommerce"))}},123:function(e,t,n){"use strict";var r=n(0),c=n(5),o=n(11),i=n(1);n(168),t.a=Object(o.withInstanceId)(e=>{let{className:t,headingLevel:n,onChange:o,heading:a,instanceId:l}=e;const s="h"+n;return Object(r.createElement)(s,{className:t},Object(r.createElement)("label",{className:"screen-reader-text",htmlFor:"block-title-"+l},Object(i.__)("Block title","woocommerce")),Object(r.createElement)(c.PlainText,{id:"block-title-"+l,className:"wc-block-editor-components-title",value:a,onChange:o}))})},124:function(e,t,n){"use strict";var r=n(0);n(169),t.a=e=>{let{children:t}=e;return Object(r.createElement)("div",{className:"wc-block-filter-title-placeholder"},t)}},125:function(e,t,n){"use strict";var r=n(0),c=n(1),o=n(4),i=n.n(o),a=n(28);n(170),t.a=e=>{let{className:t,label:
/* translators: Reset button text for filters. */
n=Object(c.__)("Reset","woocommerce"),onClick:o,screenReaderLabel:l=Object(c.__)("Reset filter","woocommerce")}=e;return Object(r.createElement)("button",{className:i()("wc-block-components-filter-reset-button",t),onClick:o},Object(r.createElement)(a.a,{label:n,screenReaderLabel:l}))}},126:function(e,t,n){"use strict";var r=n(0),c=n(1),o=n(4),i=n.n(o),a=n(28);n(171),t.a=e=>{let{className:t,isLoading:n,disabled:o,label:
/* translators: Submit button text for filters. */
l=Object(c.__)("Apply","woocommerce"),onClick:s,screenReaderLabel:u=Object(c.__)("Apply filter","woocommerce")}=e;return Object(r.createElement)("button",{type:"submit",className:i()("wp-block-button__link","wc-block-filter-submit-button","wc-block-components-filter-submit-button",{"is-loading":n},t),disabled:o,onClick:s},Object(r.createElement)(a.a,{label:l,screenReaderLabel:u}))}},127:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>"boolean"==typeof e},13:function(e,t){e.exports=window.wp.primitives},139:function(e,t){},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0);const c=()=>{const[,e]=Object(r.useState)();return Object(r.useCallback)(t=>{e(()=>{throw t})},[])}},16:function(e,t){e.exports=window.wp.url},168:function(e,t){},169:function(e,t){},170:function(e,t){},171:function(e,t){},2:function(e,t){e.exports=window.wc.wcSettings},22:function(e,t,n){"use strict";n.d(t,"o",(function(){return o})),n.d(t,"m",(function(){return i})),n.d(t,"l",(function(){return a})),n.d(t,"n",(function(){return l})),n.d(t,"j",(function(){return s})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return b})),n.d(t,"g",(function(){return p})),n.d(t,"k",(function(){return d})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return f})),n.d(t,"h",(function(){return g})),n.d(t,"a",(function(){return O})),n.d(t,"i",(function(){return j})),n.d(t,"b",(function(){return _}));var r,c=n(2);const o=Object(c.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),i=o.pluginUrl+"images/",a=o.pluginUrl+"build/",l=o.buildPhase,s=null===(r=c.STORE_PAGES.shop)||void 0===r?void 0:r.permalink,u=c.STORE_PAGES.checkout.id,b=c.STORE_PAGES.checkout.permalink,p=c.STORE_PAGES.privacy.permalink,d=(c.STORE_PAGES.privacy.title,c.STORE_PAGES.terms.permalink),m=(c.STORE_PAGES.terms.title,c.STORE_PAGES.cart.id),f=c.STORE_PAGES.cart.permalink,g=(c.STORE_PAGES.myaccount.permalink?c.STORE_PAGES.myaccount.permalink:Object(c.getSetting)("wpLoginUrl","/wp-login.php"),Object(c.getSetting)("shippingCountries",{})),O=Object(c.getSetting)("allowedCountries",{}),j=Object(c.getSetting)("shippingStates",{}),_=Object(c.getSetting)("allowedStates",{})},241:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return u}));var r=n(16),c=n(2),o=n(127);const i=Object(c.getSettingWithCoercion)("is_rendering_php_template",!1,o.a),a="query_type_",l="filter_";function s(e){return window?Object(r.getQueryArg)(window.location.href,e):null}function u(e){i?window.location.href=e:window.history.replaceState({},"",e)}},25:function(e,t){e.exports=window.wp.isShallowEqual},26:function(e,t){e.exports=window.wc.priceFormat},279:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(0),c=n(259),o=n(8),i=n(40),a=n(35),l=n(52),s=n(107),u=n(46);const b=e=>{let{queryAttribute:t,queryPrices:n,queryStock:b,queryRating:p,queryState:d,productIds:m}=e,f=Object(u.a)();f+="-collection-data";const[g]=Object(l.a)(f),[O,j]=Object(l.b)("calculate_attribute_counts",[],f),[_,w]=Object(l.b)("calculate_price_range",null,f),[h,k]=Object(l.b)("calculate_stock_status_counts",null,f),[y,E]=Object(l.b)("calculate_rating_counts",null,f),v=Object(i.a)(t||{}),x=Object(i.a)(n),S=Object(i.a)(b),C=Object(i.a)(p);Object(r.useEffect)(()=>{"object"==typeof v&&Object.keys(v).length&&(O.find(e=>Object(a.b)(v,"taxonomy")&&e.taxonomy===v.taxonomy)||j([...O,v]))},[v,O,j]),Object(r.useEffect)(()=>{_!==x&&void 0!==x&&w(x)},[x,w,_]),Object(r.useEffect)(()=>{h!==S&&void 0!==S&&k(S)},[S,k,h]),Object(r.useEffect)(()=>{y!==C&&void 0!==C&&E(C)},[C,E,y]);const[N,F]=Object(r.useState)(!1),[T]=Object(c.a)(N,200);N||F(!0);const R=Object(r.useMemo)(()=>(e=>{const t=e;return Array.isArray(e.calculate_attribute_counts)&&(t.calculate_attribute_counts=Object(o.sortBy)(e.calculate_attribute_counts.map(e=>{let{taxonomy:t,queryType:n}=e;return{taxonomy:t,query_type:n}}),["taxonomy","query_type"])),t})(g),[g]);return Object(s.a)({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...d,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...!Object(o.isEmpty)(m)&&{include:m},...R},shouldSelect:T})}},28:function(e,t,n){"use strict";var r=n(0),c=n(4),o=n.n(c);t.a=e=>{let t,{label:n,screenReaderLabel:c,wrapperElement:i,wrapperProps:a={}}=e;const l=null!=n,s=null!=c;return!l&&s?(t=i||"span",a={...a,className:o()(a.className,"screen-reader-text")},Object(r.createElement)(t,a,c)):(t=i||r.Fragment,l&&s&&n!==c?Object(r.createElement)(t,a,Object(r.createElement)("span",{"aria-hidden":"true"},n),Object(r.createElement)("span",{className:"screen-reader-text"},c)):Object(r.createElement)(t,a,n))}},3:function(e,t){e.exports=window.wp.components},309:function(e){e.exports=JSON.parse('{"name":"woocommerce/price-filter","version":"1.0.0","title":"Filter by Price Controls","description":"Enable customers to filter the product grid by choosing a price range.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false,"color":{"text":true,"background":false},"inserter":false,"lock":false},"example":{"attributes":{"isPreview":true}},"attributes":{"className":{"type":"string","default":""},"showInputFields":{"type":"boolean","default":true},"inlineInput":{"type":"boolean","default":false},"showFilterButton":{"type":"boolean","default":false},"headingLevel":{"type":"number","default":3}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},35:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));const r=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function c(e,t){return r(e)&&t in e}},38:function(e,t,n){"use strict";var r=n(6),c=n.n(r),o=n(0),i=n(133),a=n(4),l=n.n(a);n(139);const s=e=>({thousandSeparator:e.thousandSeparator,decimalSeparator:e.decimalSeparator,decimalScale:e.minorUnit,fixedDecimalScale:!0,prefix:e.prefix,suffix:e.suffix,isNumericString:!0});t.a=e=>{let{className:t,value:n,currency:r,onValueChange:a,displayType:u="text",...b}=e;const p="string"==typeof n?parseInt(n,10):n;if(!Number.isFinite(p))return null;const d=p/10**r.minorUnit;if(!Number.isFinite(d))return null;const m=l()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",t),f={...b,...s(r),value:void 0,currency:void 0,onValueChange:void 0},g=a?e=>{const t=+e.value*10**r.minorUnit;a(t)}:()=>{};return Object(o.createElement)(i.a,c()({className:m,displayType:u},f,{value:d,onValueChange:g}))}},40:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),c=n(25),o=n.n(c);function i(e){const t=Object(r.useRef)(e);return o()(e,t.current)||(t.current=e),t.current}},403:function(e,t,n){e.exports=n(483)},404:function(e,t){},405:function(e,t){},406:function(e,t){},46:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);const c=Object(r.createContext)("page"),o=()=>Object(r.useContext)(c);c.Provider},483:function(e,t,n){"use strict";n.r(t);var r=n(6),c=n.n(r),o=n(0),i=n(10),a=n(4),l=n.n(a),s=n(117),u=n(537),b=n(5),p=n(1),d=n(2),m=n(22),f=n(123),g=n(258),O=n(3),j=n(103),_=n(52),w=n(279),h=n(38),k=n(35),y=n(116);n(406);const E=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,c=arguments.length>4&&void 0!==arguments[4]&&arguments[4],[o,i]=e;const a=e=>Number.isFinite(e);return a(o)||(o=t||0),a(i)||(i=n||r),a(t)&&t>o&&(o=t),a(n)&&n<=o&&(o=n-r),a(t)&&t>=i&&(i=t+r),a(n)&&n<i&&(i=n),!c&&o>=i&&(o=i-r),c&&i<=o&&(i=o+r),[o,i]};var v=n(126);const x=e=>{let{maxConstraint:t,minorUnit:n}=e;return e=>{let{floatValue:r}=e;return void 0!==r&&r<=t/10**n&&r>0}},S=e=>{let{minConstraint:t,currentMaxValue:n,minorUnit:r}=e;return e=>{let{floatValue:c}=e;return void 0!==c&&c>=t/10**r&&c<n/10**r}};var C=n(125),N=e=>{let{minPrice:t,maxPrice:n,minConstraint:r,maxConstraint:c,onChange:i,step:a,currency:s,showInputFields:u=!0,showFilterButton:b=!1,inlineInput:d=!0,isLoading:m=!1,isUpdating:f=!1,onSubmit:g=(()=>{})}=e;const O=Object(o.useRef)(null),j=Object(o.useRef)(null),_=a||10**s.minorUnit,[w,N]=Object(o.useState)(t),[F,T]=Object(o.useState)(n),R=Object(o.useRef)(null),[P,U]=Object(o.useState)(0);Object(o.useEffect)(()=>{N(t)},[t]),Object(o.useEffect)(()=>{T(n)},[n]),Object(o.useLayoutEffect)(()=>{var e;d&&R.current&&U(null===(e=R.current)||void 0===e?void 0:e.offsetWidth)},[d,U]);const A=Object(o.useMemo)(()=>isFinite(r)&&isFinite(c),[r,c]),B=Object(o.useMemo)(()=>isFinite(t)&&isFinite(n)&&A?{"--low":Math.round((t-r)/(c-r)*100)-.5+"%","--high":Math.round((n-r)/(c-r)*100)+.5+"%"}:{"--low":"0%","--high":"100%"},[t,n,r,c,A]),I=Object(o.useCallback)(e=>{if(m||!A||!O.current||!j.current)return;const t=e.target.getBoundingClientRect(),n=e.clientX-t.left,r=O.current.offsetWidth,o=+O.current.value,i=j.current.offsetWidth,a=+j.current.value,l=r*(o/c),s=i*(a/c);Math.abs(n-l)>Math.abs(n-s)?(O.current.style.zIndex="20",j.current.style.zIndex="21"):(O.current.style.zIndex="21",j.current.style.zIndex="20")},[m,c,A]),L=Object(o.useCallback)(e=>{const o=e.target.classList.contains("wc-block-price-filter__range-input--min"),a=+e.target.value,l=o?[Math.round(a/_)*_,n]:[t,Math.round(a/_)*_],s=E(l,r,c,_,o);i(s)},[i,t,n,r,c,_]),M=Object(o.useCallback)(e=>{if(e.relatedTarget&&e.relatedTarget.classList&&e.relatedTarget.classList.contains("wc-block-price-filter__amount"))return;const t=e.target.classList.contains("wc-block-price-filter__amount--min");if(w>=F){const e=E([0,F],null,null,_,t);return i([parseInt(e[0],10),parseInt(e[1],10)])}const n=E([w,F],null,null,_,t);i(n)},[i,_,w,F]),V=Object(y.a)(g,600),q=l()("wc-block-price-filter","wc-block-components-price-slider",u&&"wc-block-price-filter--has-input-fields",u&&"wc-block-components-price-slider--has-input-fields",b&&"wc-block-price-filter--has-filter-button",b&&"wc-block-components-price-slider--has-filter-button",!A&&"is-disabled",(d||P<=300)&&"wc-block-components-price-slider--is-input-inline"),D=Object(k.a)(O.current)?O.current.ownerDocument.activeElement:void 0,G=D&&D===O.current?_:1,W=D&&D===j.current?_:1,Q=String(w/10**s.minorUnit),Y=String(F/10**s.minorUnit),K=d&&P>300,z=Object(o.createElement)("div",{className:l()("wc-block-price-filter__range-input-wrapper","wc-block-components-price-slider__range-input-wrapper",{"is-loading":m&&f}),onMouseMove:I,onFocus:I},A&&Object(o.createElement)("div",{"aria-hidden":u},Object(o.createElement)("div",{className:"wc-block-price-filter__range-input-progress wc-block-components-price-slider__range-input-progress",style:B}),Object(o.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--min wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--min","aria-label":Object(p.__)("Filter products by minimum price","woocommerce"),"aria-valuetext":Q,value:Number.isFinite(t)?t:r,onChange:L,step:G,min:r,max:c,ref:O,disabled:m&&!A,tabIndex:u?-1:0}),Object(o.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--max wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--max","aria-label":Object(p.__)("Filter products by maximum price","woocommerce"),"aria-valuetext":Y,value:Number.isFinite(n)?n:c,onChange:L,step:W,min:r,max:c,ref:j,disabled:m,tabIndex:u?-1:0})));return Object(o.createElement)("div",{className:q,ref:R},(!K||!u)&&z,u&&Object(o.createElement)("div",{className:"wc-block-price-filter__controls wc-block-components-price-slider__controls"},f?Object(o.createElement)("div",{className:"input-loading"}):Object(o.createElement)(h.a,{currency:s,displayType:"input",className:"wc-block-price-filter__amount wc-block-price-filter__amount--min wc-block-form-text-input wc-block-components-price-slider__amount wc-block-components-price-slider__amount--min","aria-label":Object(p.__)("Filter products by minimum price","woocommerce"),allowNegative:!1,isLoading:m,isAllowed:S({minConstraint:r,minorUnit:s.minorUnit,currentMaxValue:F}),onValueChange:e=>{e!==w&&N(e)},onBlur:M,disabled:m||!A,value:w}),K&&z,f?Object(o.createElement)("div",{className:"input-loading"}):Object(o.createElement)(h.a,{currency:s,displayType:"input",className:"wc-block-price-filter__amount wc-block-price-filter__amount--max wc-block-form-text-input wc-block-components-price-slider__amount wc-block-components-price-slider__amount--max","aria-label":Object(p.__)("Filter products by maximum price","woocommerce"),isLoading:m,isAllowed:x({maxConstraint:c,minorUnit:s.minorUnit}),onValueChange:e=>{e!==F&&T(e)},onBlur:M,disabled:m||!A,value:F})),!u&&!f&&Number.isFinite(t)&&Number.isFinite(n)&&Object(o.createElement)("div",{className:"wc-block-price-filter__range-text wc-block-components-price-slider__range-text"},Object(o.createElement)(h.a,{currency:s,value:t}),Object(o.createElement)(h.a,{currency:s,value:n})),Object(o.createElement)("div",{className:"wc-block-components-price-slider__actions"},!f&&(t!==r||n!==c)&&Object(o.createElement)(C.a,{onClick:()=>{i([r,c]),V()},screenReaderLabel:Object(p.__)("Reset price filter","woocommerce")}),b&&Object(o.createElement)(v.a,{className:"wc-block-price-filter__button wc-block-components-price-slider__button",isLoading:f,disabled:m||!A,onClick:g,screenReaderLabel:Object(p.__)("Apply price filter","woocommerce")})))},F=n(124),T=n(26),R=n(16),P=n(241),U=n(127),A=n(96);const B=(e,t,n)=>{const r=10*10**t;let c=null;const o=parseFloat(e);isNaN(o)||("ROUND_UP"===n?c=Math.ceil(o/r)*r:"ROUND_DOWN"===n&&(c=Math.floor(o/r)*r));const i=Object(j.a)(c,Number.isFinite);return Number.isFinite(c)?c:i};n(405);var I=n(102);function L(e,t){return Number(e)*10**t}var M=e=>{let{attributes:t,isEditor:n=!1}=e;const r=Object(I.a)(),c=Object(d.getSettingWithCoercion)("has_filterable_products",!1,U.a),i=Object(d.getSettingWithCoercion)("is_rendering_php_template",!1,U.a),a=n?[]:Object(d.getSettingWithCoercion)("product_ids",[],Array.isArray),[l,s]=Object(o.useState)(!1),u=Object(P.d)("min_price"),b=Object(P.d)("max_price"),[p]=Object(_.a)(),{results:m,isLoading:f}=Object(w.a)({queryPrices:!0,queryState:p,productIds:a}),g=Object(T.getCurrencyFromPriceResponse)(Object(k.b)(m,"price_range")?m.price_range:void 0),[O,h]=Object(_.b)("min_price"),[E,v]=Object(_.b)("max_price"),[x,S]=Object(o.useState)(L(u,g.minorUnit)||null),[C,M]=Object(o.useState)(L(b,g.minorUnit)||null),{minConstraint:V,maxConstraint:q}=(e=>{let{minPrice:t,maxPrice:n,minorUnit:r}=e;return{minConstraint:B(t||"",r,"ROUND_DOWN"),maxConstraint:B(n||"",r,"ROUND_UP")}})({minPrice:Object(k.b)(m,"price_range")&&Object(k.b)(m.price_range,"min_price")&&Object(A.a)(m.price_range.min_price)?m.price_range.min_price:void 0,maxPrice:Object(k.b)(m,"price_range")&&Object(k.b)(m.price_range,"max_price")&&Object(A.a)(m.price_range.max_price)?m.price_range.max_price:void 0,minorUnit:g.minorUnit});Object(o.useEffect)(()=>{l||(h(L(u,g.minorUnit)),v(L(b,g.minorUnit)),s(!0))},[g.minorUnit,l,b,u,v,h]);const[D,G]=Object(o.useState)(f),W=Object(o.useCallback)((e,t)=>{const n=t>=Number(q)?void 0:t,r=e<=Number(V)?void 0:e;if(window){const e=function(e,t){const n={};for(const[e,r]of Object.entries(t))r?n[e]=r.toString():delete n[e];const r=Object(R.removeQueryArgs)(e,...Object.keys(t));return Object(R.addQueryArgs)(r,n)}(window.location.href,{min_price:r/10**g.minorUnit,max_price:n/10**g.minorUnit});window.location.href!==e&&Object(P.c)(e)}h(r),v(n)},[V,q,h,v,g.minorUnit]),Q=Object(y.a)(W,500),Y=Object(o.useCallback)(e=>{G(!0),e[0]!==x&&S(e[0]),e[1]!==C&&M(e[1]),i&&l&&!t.showFilterButton&&Q(e[0],e[1])},[x,C,S,M,i,l,Q,t.showFilterButton]);Object(o.useEffect)(()=>{t.showFilterButton||i||Q(x,C)},[x,C,t.showFilterButton,Q,i]);const K=Object(j.a)(O),z=Object(j.a)(E),J=Object(j.a)(V),X=Object(j.a)(q);if(Object(o.useEffect)(()=>{(!Number.isFinite(x)||O!==K&&O!==x||V!==J&&V!==x)&&S(Number.isFinite(O)?O:V),(!Number.isFinite(C)||E!==z&&E!==C||q!==X&&q!==C)&&M(Number.isFinite(E)?E:q)},[x,C,O,E,V,q,J,X,K,z]),!c)return r(!1),null;if(!f&&(null===V||null===q||V===q))return r(!1),null;const $="h"+t.headingLevel;r(!0),!f&&D&&G(!1);const H=Object(o.createElement)($,{className:"wc-block-price-filter__title"},t.heading),Z=f&&D?Object(o.createElement)(F.a,null,H):H;return Object(o.createElement)(o.Fragment,null,!n&&t.heading&&Z,Object(o.createElement)("div",{className:"wc-block-price-slider"},Object(o.createElement)(N,{minConstraint:V,maxConstraint:q,minPrice:x,maxPrice:C,currency:g,showInputFields:t.showInputFields,inlineInput:t.inlineInput,showFilterButton:t.showFilterButton,onChange:Y,onSubmit:()=>W(x,C),isLoading:f,isUpdating:D})))},V=(n(404),n(122)),q=n(309);const D={heading:{type:"string",default:Object(p.__)("Filter by price","woocommerce")}};Object(i.registerBlockType)(q,{icon:{src:Object(o.createElement)(s.a,{icon:u.a,className:"wc-block-editor-components-block-icon"})},attributes:{...q.attributes,...D},edit:function(e){let{attributes:t,setAttributes:n,clientId:r}=e;const{heading:c,headingLevel:i,showInputFields:a,inlineInput:l,showFilterButton:j}=t,_=Object(b.useBlockProps)();return Object(o.createElement)("div",_,0===m.o.productCount?Object(o.createElement)(O.Placeholder,{className:"wc-block-price-slider",icon:Object(o.createElement)(s.a,{icon:u.a}),label:Object(p.__)("Filter by Price","woocommerce"),instructions:Object(p.__)("Display a slider to filter products in your store by price.","woocommerce")},Object(o.createElement)("p",null,Object(p.__)("To filter your products by price you first need to assign prices to your products.","woocommerce")),Object(o.createElement)(O.Button,{className:"wc-block-price-slider__add-product-button",isSecondary:!0,href:Object(d.getAdminLink)("post-new.php?post_type=product")},Object(p.__)("Add new product","woocommerce")+" ",Object(o.createElement)(s.a,{icon:g.a})),Object(o.createElement)(O.Button,{className:"wc-block-price-slider__read_more_button",isTertiary:!0,href:"https://docs.woocommerce.com/document/managing-products/"},Object(p.__)("Learn more","woocommerce"))):Object(o.createElement)(o.Fragment,null,Object(o.createElement)(b.InspectorControls,{key:"inspector"},Object(o.createElement)(O.PanelBody,{title:Object(p.__)("Settings","woocommerce")},Object(o.createElement)(O.__experimentalToggleGroupControl,{label:Object(p.__)("Price Range Selector","woocommerce"),value:a?"editable":"text",onChange:e=>n({showInputFields:"editable"===e}),className:"wc-block-price-filter__price-range-toggle"},Object(o.createElement)(O.__experimentalToggleGroupControlOption,{value:"editable",label:Object(p.__)("Editable","woocommerce")}),Object(o.createElement)(O.__experimentalToggleGroupControlOption,{value:"text",label:Object(p.__)("Text","woocommerce")})),a&&Object(o.createElement)(O.ToggleControl,{label:Object(p.__)("Inline input fields","woocommerce"),checked:l,onChange:()=>n({inlineInput:!l}),help:Object(p.__)("Show input fields inline with the slider.","woocommerce")}),Object(o.createElement)(O.ToggleControl,{label:Object(p.__)("Show 'Apply filters' button","woocommerce"),help:j?Object(p.__)("Products will only update when the button is clicked.","woocommerce"):Object(p.__)("Products will update when the slider is moved.","woocommerce"),checked:j,onChange:()=>n({showFilterButton:!j})}))),Object(o.createElement)(V.a,{attributes:t,clientId:r,setAttributes:n,filterType:"price-filter"}),c&&Object(o.createElement)(f.a,{className:"wc-block-price-filter__title",headingLevel:i,heading:c,onChange:e=>n({heading:e})}),Object(o.createElement)(O.Disabled,null,Object(o.createElement)(M,{attributes:t,isEditor:!0}))))},save(e){let{attributes:t}=e;const{className:n,showInputFields:r,showFilterButton:i,heading:a,headingLevel:s}=t,u={"data-showinputfields":r,"data-showfilterbutton":i,"data-heading":a,"data-heading-level":s};return Object(o.createElement)("div",c()({},b.useBlockProps.save({className:l()("is-loading",n)}),u),Object(o.createElement)("span",{"aria-hidden":!0,className:"wc-block-product-categories__placeholder"}))}})},5:function(e,t){e.exports=window.wp.blockEditor},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return d}));var r=n(9),c=n(7),o=n(0),i=n(25),a=n.n(i),l=n(40),s=n(103),u=n(46);const b=e=>{const t=Object(u.a)();e=e||t;const n=Object(c.useSelect)(t=>t(r.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0),[e]),{setValueForQueryContext:i}=Object(c.useDispatch)(r.QUERY_STATE_STORE_KEY);return[n,Object(o.useCallback)(t=>{i(e,t)},[e,i])]},p=(e,t,n)=>{const i=Object(u.a)();n=n||i;const a=Object(c.useSelect)(c=>c(r.QUERY_STATE_STORE_KEY).getValueForQueryKey(n,e,t),[n,e]),{setQueryValue:l}=Object(c.useDispatch)(r.QUERY_STATE_STORE_KEY);return[a,Object(o.useCallback)(t=>{l(n,e,t)},[n,e,l])]},d=(e,t)=>{const n=Object(u.a)();t=t||n;const[r,c]=b(t),i=Object(l.a)(r),p=Object(l.a)(e),d=Object(s.a)(p),m=Object(o.useRef)(!1);return Object(o.useEffect)(()=>{a()(d,p)||(c(Object.assign({},i,p)),m.current=!0)},[i,p,d,c]),m.current?[r,c]:[e,c]}},7:function(e,t){e.exports=window.wp.data},8:function(e,t){e.exports=window.lodash},9:function(e,t){e.exports=window.wc.wcBlocksData},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>"string"==typeof e}});