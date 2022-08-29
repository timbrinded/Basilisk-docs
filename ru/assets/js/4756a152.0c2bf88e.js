"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[615],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),g=o,k=d["".concat(s,".").concat(g)]||d[g]||p[g]||a;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5582:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905)),a=r(4996);const i={id:"howto_bridge",title:"Bridge Tokens"},l=void 0,s={unversionedId:"howto_bridge",id:"howto_bridge",title:"Bridge Tokens",description:"If you want to trade BSX, or provide liquidity for some of the Basilisk XYK pools, you may want to bridge tokens into the Basilisk chain, or out of it. You can do so using XCM - Kusama\u2019s cross-messaging protocol.",source:"@site/docs/howto_bridge.md",sourceDirName:".",slug:"/howto_bridge",permalink:"/ru/howto_bridge",draft:!1,editUrl:"https://github.com/galacticcouncil/Basilisk-docs/edit/main/docs/howto_bridge.md",tags:[],version:"current",frontMatter:{id:"howto_bridge",title:"Bridge Tokens"},sidebar:"sidebar",previous:{title:"Provide Liquidity",permalink:"/ru/howto_snek_swap_provide_liquidity"},next:{title:"Create a new BSX Account",permalink:"/ru/create_account"}},u={},c=[{value:"Using Karura Bridge",id:"karura",level:2},{value:"Step 1: Navigate to the Karura Bridge Page",id:"step-1-navigate-to-the-karura-bridge-page",level:3},{value:"Step 2: Connect to Your Account",id:"step-2-connect-to-your-account",level:3},{value:"Step 3: Bridge Tokens",id:"step-3-bridge-tokens",level:3}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you want to ",(0,o.kt)("strong",{parentName:"p"},"trade BSX"),", or ",(0,o.kt)("strong",{parentName:"p"},"provide liquidity")," for some of the Basilisk XYK pools, you may want to bridge tokens into the Basilisk chain, or out of it. You can do so using XCM - Kusama\u2019s cross-messaging protocol."),(0,o.kt)("p",null,"Currently, the following tokens are supported by Basilisk for XCM transfers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"BSX"),(0,o.kt)("li",{parentName:"ul"},"aUSD"),(0,o.kt)("li",{parentName:"ul"},"KSM")),(0,o.kt)("p",null,"To perform XCM transfers for one of the assets listed above, you can use ",(0,o.kt)("a",{parentName:"p",href:"#karura"},"Karura\u2019s Bridge"),"."),(0,o.kt)("h2",{id:"karura"},"Using Karura Bridge"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:(0,a.Z)("/img/howto_bridge/ausd.jpg")})),(0,o.kt)("h3",{id:"step-1-navigate-to-the-karura-bridge-page"},"Step 1: Navigate to the Karura Bridge Page"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://apps.karura.network/bridge"},"https://apps.karura.network/bridge")),(0,o.kt)("h3",{id:"step-2-connect-to-your-account"},"Step 2: Connect to Your Account"),(0,o.kt)("p",null,"Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Connect Account")," ",(0,o.kt)("strong",{parentName:"p"},"(1 in image above)")," and connect to your Dotsama wallet. "),(0,o.kt)("p",null,"If you still do not have a BSX account, please ",(0,o.kt)("a",{parentName:"p",href:"https://docs.bsx.fi/create_account"},"follow this guide")," to create one."),(0,o.kt)("h3",{id:"step-3-bridge-tokens"},"Step 3: Bridge Tokens"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select the ",(0,o.kt)("inlineCode",{parentName:"li"},"Origin Chain")," ",(0,o.kt)("strong",{parentName:"li"},"(2)")," you want to bridge tokens from, as well as the ",(0,o.kt)("inlineCode",{parentName:"li"},"Destination Chain")," ",(0,o.kt)("strong",{parentName:"li"},"(2)")," which will be receiving the tokens."),(0,o.kt)("li",{parentName:"ul"},"Select the token you would like to bridge ",(0,o.kt)("strong",{parentName:"li"},"(3)"),", and enter the amount."),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Transfer")," ",(0,o.kt)("strong",{parentName:"li"},"(4)")," and sign the transaction using your Kusama wallet app.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Examples:\n\nAlice wants to bridge KSM from Kusama to the Basilisk chain. To do so, Alice will select:\n* Origin Chain: Kusama\n* Destination Chain: Basilisk\n* Token: KSM\n\nBob wants to bridge BSX from Basilisk to Karura. To do so, Bob will select:\n* Origin Chain: Basilisk\n* Destination Chain: Karura\n* Token: BSX\n")),(0,o.kt)("p",null,"Congratulations! You have just used the Karura Bridge to bridge tokens to Basilisk."))}d.isMDXComponent=!0}}]);