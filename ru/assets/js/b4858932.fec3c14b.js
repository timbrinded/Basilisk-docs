"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[238],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={id:"product_intro",title:"Intro",slug:"/"},i=void 0,s={unversionedId:"product_intro",id:"product_intro",title:"Intro",description:"Welcome to the Basilisk Documentation page! Here you can find a collection of useful resources which will help you navigate your Basilisk journey. The available content will grow as the project unfolds, and we promise to do our best to provide translations in a timely manner to ensure that everyone can participate.",source:"@site/docs/product_intro.md",sourceDirName:".",slug:"/",permalink:"/ru/",draft:!1,editUrl:"https://github.com/galacticcouncil/Basilisk-docs/edit/main/docs/product_intro.md",tags:[],version:"current",frontMatter:{id:"product_intro",title:"Intro",slug:"/"},sidebar:"sidebar",next:{title:"Snek Swap",permalink:"/ru/product_snek_swap"}},l={},p=[{value:"What is Basilisk?",id:"what-is-basilisk",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Welcome to the Basilisk Documentation page! Here you can find a collection of useful resources which will help you navigate your Basilisk journey. The available content will grow as the project unfolds, and we promise to do our best to provide translations in a timely manner to ensure that everyone can participate."),(0,o.kt)("p",null,"Before you continue, don't forget to subscribe to the ",(0,o.kt)("a",{parentName:"p",href:"https://basiliskfi.substack.com"},"Basilisk newsletter")," to not miss any important updates."),(0,o.kt)("h2",{id:"what-is-basilisk"},"What is Basilisk?"),(0,o.kt)("p",null,"Basilisk is a ",(0,o.kt)("strong",{parentName:"p"},"liquidity protocol built for the Kusama ecosystem"),". Its mission is to ",(0,o.kt)("strong",{parentName:"p"},"enable frictionless liquidity")," that caters to the evolving needs of crypto assets - ",(0,o.kt)("strong",{parentName:"p"},"both fungible, and non-fungible (NFTs)"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"modular design")," of Basilisk enables fungible assets to bootstrap liquidity by choosing the Automated Market Maker (AMM) model which they find the most convenient. The first version comes with an implementation of ",(0,o.kt)("a",{parentName:"p",href:"/product_snek_swap"},"Snek Swap (XYK) pools")," which allow users to ",(0,o.kt)("strong",{parentName:"p"},"buy and sell tokens"),", or to ",(0,o.kt)("strong",{parentName:"p"},"become a liquidity provider and earn rewards generated from trades"),"."),(0,o.kt)("p",null,"For the ",(0,o.kt)("strong",{parentName:"p"},"non-fungibles"),", we are soon about to release the ",(0,o.kt)("strong",{parentName:"p"},"Basilisk NFT Marketplace")," which has spicy features under the hood. Besides ",(0,o.kt)("strong",{parentName:"p"},"minting and listing NFTs"),", the Marketplace also brings the ability to ",(0,o.kt)("strong",{parentName:"p"},"set a royalty fee")," (a percentage of every trade goes to the owner of the fee), and to ",(0,o.kt)("strong",{parentName:"p"},"place an offer for non-listed NFTs"),". The Basilisk NFT Marketplace is made available with the kind support of our frens at KodaDot who have integrated our pallet into their UI."),(0,o.kt)("p",null,"In the following version, Basilisk is preparing to release an array of new features. ",(0,o.kt)("strong",{parentName:"p"},"Liquidity Mining (LM)")," will allow the Basilisk Protocol to incentivize liquidity provisioning to selected pools with BSX tokens from the Basilisk Treasury. Furthermore, ",(0,o.kt)("strong",{parentName:"p"},"Liquidity Bootstrapping Pools (LBP)")," will allow young crypto assets to bootstrap liquidity in a fair and economically efficient manner. And for the NFTs, we have been developing a mechanism which will allow you to ",(0,o.kt)("strong",{parentName:"p"},"flip your NFTs using auctions")," - English, Top up and Candle auctions."))}u.isMDXComponent=!0}}]);