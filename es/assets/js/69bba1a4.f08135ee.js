(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[623],{3905:function(e,n,a){"use strict";a.d(n,{Zo:function(){return u},kt:function(){return m}});var r=a(7294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var l=r.createContext({}),s=function(e){var n=r.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(a),m=t,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return a?r.createElement(f,o(o({ref:n},u),{},{components:a})):r.createElement(f,o({ref:n},u))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,o=new Array(i);o[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3919:function(e,n,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function t(e){return void 0!==e&&!r(e)}a.d(n,{b:function(){return r},Z:function(){return t}})},4996:function(e,n,a){"use strict";a.d(n,{C:function(){return i},Z:function(){return o}});var r=a(2263),t=a(3919);function i(){var e=(0,r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,a=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,a,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,c=void 0!==o&&o,l=i.absolute,s=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if((0,t.b)(a))return a;if(c)return n+a;var u=a.startsWith(n)?a:n+a.replace(/^\//,"");return s?e+u:u}(i,a,e,n)}}}function o(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},3072:function(e,n,a){"use strict";a.r(n),a.d(n,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var r=a(2122),t=a(9756),i=(a(7294),a(3905)),o=a(4996),c={id:"crowdloan_guide",title:"Participar en el Crowdloan"},l={unversionedId:"crowdloan_guide",id:"crowdloan_guide",isDocsHomePage:!1,title:"Participar en el Crowdloan",description:"Este art\xedculo lo gu\xeda a trav\xe9s del proceso para participar en el Basilisk crowdloan utilizando la p\xe1gina crowdloan UI//loan.bsx.fi",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/crowdloan_guide.md",sourceDirName:".",slug:"/crowdloan_guide",permalink:"/es/crowdloan_guide",editUrl:"https://github.com/galacticcouncil/Basilisk-docs/edit/main/docs/crowdloan_guide.md",version:"current",frontMatter:{id:"crowdloan_guide",title:"Participar en el Crowdloan"},sidebar:"sidebar",previous:{title:"Basilisk Crowdloan",permalink:"/es/basilisk_crowdloan"},next:{title:"Parachains",permalink:"/es/parachains"}},s=[{value:"Requisitos",id:"requirements",children:[]},{value:"00 Crowdloan UI",id:"00-crowdloan-ui",children:[]},{value:"01 Seleccione su direcci\xf3n",id:"01-select-address",children:[]},{value:"02 Ingrese su contribuci\xf3n de KSM",id:"02-enter-ksm-contribution",children:[]},{value:"03 Env\xede su contribuci\xf3n",id:"03-submit",children:[]}],u={toc:s};function d(e){var n=e.components,a=(0,t.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Este art\xedculo lo gu\xeda a trav\xe9s del proceso para participar en el ",(0,i.kt)("a",{parentName:"p",href:"/basilisk_crowdloan"},"Basilisk crowdloan")," utilizando la p\xe1gina crowdloan UI : ",(0,i.kt)("a",{parentName:"p",href:"https://loan.bsx.fi"},"https://loan.bsx.fi")),(0,i.kt)("h2",{id:"requirements"},"Requisitos"),(0,i.kt)("p",null,"Para participar utilizando la p\xe1gina para el crowdloan, y debe tener una ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/extension/"},"Polkadot.js wallet")," que contenga los tokens KSM que desea bloquear."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"No es posible participar en el crowdloan utilizando una billetera de hardware. Actualmente, las billeteras de hardware no son compatibles con el m\xf3dulo crwodloan de Kusama."))),(0,i.kt)("h2",{id:"00-crowdloan-ui"},"00 Crowdloan UI"),(0,i.kt)("p",null,"Para acceder al Basilisk Crowdloan UI, navegue a ",(0,i.kt)("a",{parentName:"p",href:"https://loan.bsx.fi"},"https://loan.bsx.fi"),"."),(0,i.kt)("div",{style:{textAlign:"center",marginBottom:"2rem"}},(0,i.kt)("img",{alt:"create-account",src:(0,o.Z)("/img/crowdloan-guide/chart.png")})),(0,i.kt)("p",null,"El gr\xe1fico en el medio proporciona informaci\xf3n sobre la subasta en curso para el slot parachain. La l\xednea verde muestra la cantidad de tokens KSM que ha recaudado Basilisk, mientras que la l\xednea amarilla corresponde al KSM recaudado por el principal competidor de Basilisk. La l\xednea roja horizontal marca el comienzo del per\xedodo de cierre de la subasta  del slot objetivo. Toda esta informaci\xf3n es relevante para determinar la cantidad de ",(0,i.kt)("a",{parentName:"p",href:"/basilisk_crowdloan"},"recompensas en BSX y el HDX bonus")," que recibir\xe1 por su contribuci\xf3n."),(0,i.kt)("h2",{id:"01-select-address"},"01 Seleccione su direcci\xf3n"),(0,i.kt)("p",null,"Para comenzar, haga clic en cambiar su cuenta y seleccione la direcci\xf3n que contiene sus tokens KSM."),(0,i.kt)("div",{style:{textAlign:"center",marginBottom:"2rem"}},(0,i.kt)("img",{alt:"create-account",src:(0,o.Z)("/img/crowdloan-guide/select-account.png")})),(0,i.kt)("h2",{id:"02-enter-ksm-contribution"},"02 Ingrese su contribuci\xf3n de KSM"),(0,i.kt)("p",null,"Como siguiente paso, puede ingresar la cantidad de KSM que le gustar\xeda contribuir. Despu\xe9s de hacerlo, ver\xe1 una predicci\xf3n de las recompensas que recibir\xe1:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"BSX m\xednimo recibido")," : la cantidad m\xednima de tokens BSX que puede esperar recibir por su contribuci\xf3n. La cantidad exacta solo se puede determinar despu\xe9s de que el Crowdloan se haya cerrado, en caso de que la subasta sea exitosa.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"BSX actual recibido")," : una estimaci\xf3n ",(0,i.kt)("strong",{parentName:"p"},"salvaje")," de cu\xe1nto recibir\xeda en las condiciones actuales de la subasta. Esta estimaci\xf3n puede no ser confiable.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"HDX actual recibido")," : la cantidad de bonificaci\xf3n HDX que se recibir\xe1 por la contribuci\xf3n."))),(0,i.kt)("p",null,"Si desea saber m\xe1s sobre la mec\xe1nica detr\xe1s del c\xe1lculo de recompensas, consulte el post ",(0,i.kt)("a",{parentName:"p",href:"/basilisk_crowdloan"},"Basilisk crowdloan"),"."),(0,i.kt)("h2",{id:"03-submit"},"03 Env\xede su contribuci\xf3n"),(0,i.kt)("p",null,"Para finalizar el proceso, haga clic en Contribuir y firme la transacci\xf3n usando la cuenta que tiene sus tokens KSM."),(0,i.kt)("div",{style:{textAlign:"center",marginBottom:"2rem"}},(0,i.kt)("img",{alt:"create-account",src:(0,o.Z)("/img/crowdloan-guide/sign-submit.png")})))}d.isMDXComponent=!0}}]);