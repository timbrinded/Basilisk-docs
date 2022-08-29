"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[814],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,f=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={id:"crowdloans",title:"Crowdloans"},i=void 0,c={unversionedId:"crowdloans",id:"crowdloans",title:"Crowdloans",description:"Crowdloans help parachain candidates raise sufficient funds for winning a slot in the parachain auctions. This article provides a general understanding of how crowdloans work.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/crowdloans.md",sourceDirName:".",slug:"/crowdloans",permalink:"/ru/crowdloans",draft:!1,editUrl:"https://github.com/galacticcouncil/Basilisk-docs/edit/main/docs/crowdloans.md",tags:[],version:"current",frontMatter:{id:"crowdloans",title:"Crowdloans"},sidebar:"sidebar",previous:{title:"Parachain Auctions",permalink:"/ru/parachain_auctions"},next:{title:"Testnet Deployment",permalink:"/ru/infra_testnet"}},s={},l=[{value:"How does a Crowdloan Work?",id:"how",level:2}],d={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Crowdloans help ",(0,a.kt)("a",{parentName:"p",href:"/parachains"},"parachain")," candidates raise sufficient funds for winning a slot in the ",(0,a.kt)("a",{parentName:"p",href:"/parachain_auctions"},"parachain auctions"),". This article provides a general understanding of how crowdloans work."),(0,a.kt)("h2",{id:"how"},"How does a Crowdloan Work?"),(0,a.kt)("p",null,"Parachain candidates can initiate a crowdloan campaign using the dedicated Kusama crowdloan module. When doing so, they set its goal (amount of KSM to be raised) as well its end date (by when). The crowdloan campaign is usually initiated before the start of the parachain auction, thereby giving the candidate sufficient time to raise funding."),(0,a.kt)("p",null,"Crowdloan backers support the parachain candidate of their choice by locking a certain amount of KSM which will be used to place a bid in the parachain auction. The KSM remains locked until one of the following unlocking events has been triggered:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Candidate wins a parachain slot: After the duration of the parachain slot has expired (48 weeks for Basilisk)"),(0,a.kt)("li",{parentName:"ul"},"Candidate does not win a parachain slot: Once the crowdloan goal has been reached or the crowdloan campaign has expired")),(0,a.kt)("p",null,"While crowdloan backers do receive back their funds in full once the unlocking event has been triggered, participating at a crowdloan still bears the so-called ",(0,a.kt)("strong",{parentName:"p"},"opportunity costs"),". These reflect the benefits that were missed by locking KSM tokens for a given period as opposed to investing them in another way. For example, instead of locking KSM tokens for 1 year, users could decide to stake their KSM which would bring them 10-15% rewards. In this example, the 10-15% rewards represent the opportunity costs of participating at a crowdloan."))}p.isMDXComponent=!0}}]);