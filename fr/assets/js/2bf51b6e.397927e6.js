(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[722],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return a}});var r=n(2263),i=n(3919);function o(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,s=void 0!==a&&a,u=o.absolute,l=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(s)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+c:c}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},8362:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=n(4996),s={id:"tokenomics",title:"Tokenomics"},u={unversionedId:"tokenomics",id:"tokenomics",isDocsHomePage:!1,title:"Tokenomics",description:"Le token natif BSX a un approvisionnement maximal de 100,000,000,000 de BSX",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tokenomics.md",sourceDirName:".",slug:"/tokenomics",permalink:"/fr/tokenomics",editUrl:"https://github.com/galacticcouncil/Basilisk-docs/edit/main/docs/tokenomics.md",version:"current",frontMatter:{id:"tokenomics",title:"Tokenomics"},sidebar:"sidebar",previous:{title:"Basilisk Crowdloan",permalink:"/fr/basilisk_crowdloan"},next:{title:"Create a new BSX Account",permalink:"/fr/create_account"}},l=[],c={toc:l};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Le token natif BSX a un approvisionnement maximal de ",(0,o.kt)("strong",{parentName:"p"},"100,000,000,000 de BSX")),(0,o.kt)("p",null,"Les tokens seront distribu\xe9s comme suit (% cumulatifs de l'approvisionnement total):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"15%")," - Pr\xeat participatif (crowdloan) de Basilisk"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"5.63%")," - Participants au LBP BSX"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"4.37%")," - Participants au LBP HDX"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"15%")," - Intergalactic (\xe9quipe fondatrice)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"9%")," - tr\xe9sorerie"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"38%")," - Minage de Liquidit\xe9s"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"12%")," - Assembleurs (Collators)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"1%")," - Airdrop aux portefeuilles contenant des KSM")),(0,o.kt)("p",null,"Les BSX allou\xe9s sont sujet \xe0 des p\xe9riodes d'acquisition comme illustr\xe9 dans le graphique de distribution suivant:"),(0,o.kt)("div",{style:{textAlign:"center",marginBottom:"2rem"}},(0,o.kt)("img",{alt:"create-account",src:(0,a.Z)("/img/tokenomics/bsx_distribution.jpg")})),(0,o.kt)("p",null,"Notes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"La distribution de tous les tokens va ",(0,o.kt)("strong",{parentName:"li"},"commencer apr\xe8s que l'\xe9v\xe8nement de LBP BSX soit termin\xe9"),". L'\xe9v\xe8nement LBP BSX va prendre place approximativement de 2 \xe0 4 semaines apr\xe8s que Basilisk ait assur\xe9 sa place de paracha\xeene."),(0,o.kt)("li",{parentName:"ul"},"La date exacte de d\xe9but des r\xe9compenses pour les assembleurs (collators) and des mineurs de liquidit\xe9 est actuellement inconnue. Cela devrait prendre place plusieurs semaines apr\xe8s la conclusion de l'\xe9v\xe8nement LBP BSX.")))}p.isMDXComponent=!0}}]);