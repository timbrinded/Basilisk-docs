(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[814],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return h}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(t),h=a,f=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8689:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),i={id:"crowdloans",title:"Crowdloans"},c={unversionedId:"crowdloans",id:"crowdloans",isDocsHomePage:!1,title:"Crowdloans",description:"Crowdloans help parachain candidates raise sufficient funds for winning a slot in the parachain auctions. This article provides a general understanding of how crowdloans work.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/crowdloans.md",sourceDirName:".",slug:"/crowdloans",permalink:"/ru/crowdloans",editUrl:"https://github.com/galacticcouncil/Basilisk-docs/edit/main/docs/crowdloans.md",version:"current",frontMatter:{id:"crowdloans",title:"Crowdloans"},sidebar:"sidebar",previous:{title:"Parachain Auctions",permalink:"/ru/parachain_auctions"},next:{title:"Testnet Deployment",permalink:"/ru/infra_testnet"}},s=[{value:"How does a Crowdloan Work?",id:"how",children:[]}],l={toc:s};function d(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Crowdloans help ",(0,o.kt)("a",{parentName:"p",href:"/parachains"},"parachain")," candidates raise sufficient funds for winning a slot in the ",(0,o.kt)("a",{parentName:"p",href:"/parachain_auctions"},"parachain auctions"),". This article provides a general understanding of how crowdloans work."),(0,o.kt)("h2",{id:"how"},"How does a Crowdloan Work?"),(0,o.kt)("p",null,"Parachain candidates can initiate a crowdloan campaign using the dedicated Kusama crowdloan module. When doing so, they set its goal (amount of KSM to be raised) as well its end date (by when). The crowdloan campaign is usually initiated before the start of the parachain auction, thereby giving the candidate sufficient time to raise funding."),(0,o.kt)("p",null,"Crowdloan backers support the parachain candidate of their choice by locking a certain amount of KSM which will be used to place a bid in the parachain auction. The KSM remains locked until one of the following unlocking events has been triggered:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Candidate wins a parachain slot: After the duration of the parachain slot has expired (48 weeks for Basilisk)"),(0,o.kt)("li",{parentName:"ul"},"Candidate does not win a parachain slot: Once the crowdloan goal has been reached or the crowdloan campaign has expired")),(0,o.kt)("p",null,"While crowdloan backers do receive back their funds in full once the unlocking event has been triggered, participating at a crowdloan still bears the so-called ",(0,o.kt)("strong",{parentName:"p"},"opportunity costs"),". These reflect the benefits that were missed by locking KSM tokens for a given period as opposed to investing them in another way. For example, instead of locking KSM tokens for 1 year, users could decide to stake their KSM which would bring them 10-15% rewards. In this example, the 10-15% rewards represent the opportunity costs of participating at a crowdloan."))}d.isMDXComponent=!0}}]);