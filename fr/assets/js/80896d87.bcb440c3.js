"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[335],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(f,c(c({ref:t},p),{},{components:n})):o.createElement(f,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var s=2;s<i;s++)c[s]=n[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var o=n(7462),r=(n(7294),n(3905)),i=n(4996);const c={id:"howto_democracy_council_elections",title:"Participate in Council Elections"},a=void 0,l={unversionedId:"howto_democracy_council_elections",id:"howto_democracy_council_elections",title:"Participate in Council Elections",description:"This article provides step-by-step guidance on how to participate in Council elections - voting for Council members and becoming a Council candidate.",source:"@site/docs/howto_democracy_council_elections.md",sourceDirName:".",slug:"/howto_democracy_council_elections",permalink:"/fr/howto_democracy_council_elections",draft:!1,editUrl:"https://github.com/galacticcouncil/Basilisk-docs/edit/main/docs/howto_democracy_council_elections.md",tags:[],version:"current",frontMatter:{id:"howto_democracy_council_elections",title:"Participate in Council Elections"},sidebar:"sidebar",previous:{title:"Participate in Referenda",permalink:"/fr/howto_democracy_referenda"},next:{title:"Introduction",permalink:"/fr/learn_democracy_intro"}},s={},p=[{value:"Vote in Council member elections",id:"polkajs-vote",level:2},{value:"Apply as a Council candidate",id:"polkajs-become_candidate",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This article provides step-by-step guidance on how to participate in Council elections - voting for Council members and becoming a Council candidate."),(0,r.kt)("p",null,"If you are interested in how the election mechanism works, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/learn_democracy_council#elections"},"this post"),"."),(0,r.kt)("h2",{id:"polkajs-vote"},"Vote in Council member elections"),(0,r.kt)("p",null,"You can see the current Council members as well as the runners-up on the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc-01.basilisk.hydradx.io#/council"},(0,r.kt)("em",{parentName:"a"},"Governance > Council")," page")," in Polkadot/apps."),(0,r.kt)("p",null,"To bring out your vote for Council members, click on ",(0,r.kt)("em",{parentName:"p"},"Vote"),"."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:(0,i.Z)("/img/howto_democracy_council_elections/polkajs-vote.jpg")})),(0,r.kt)("p",null,"Enter the amount of tokens you are willing to lock in support of your candidates."),(0,r.kt)("p",null,"After that, select your candidates in order of preference by moving them from the left list to the right one. Remeber to select multiple candidates - this will help the algorithm select the optimal distribution of candidates to the Council."),(0,r.kt)("p",null,"To bring out your vote, click on ",(0,r.kt)("em",{parentName:"p"},"Vote")," and sign the transaction."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Locked tokens cannot be transferred, however they can still be used for staking and voting in referenda. Your tokens will remain locked and used for subsequent elections until you have decided to unlock them.")),(0,r.kt)("h2",{id:"polkajs-become_candidate"},"Apply as a Council candidate"),(0,r.kt)("p",null,"You can submit your application for Council membership by navigating to ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc-01.basilisk.hydradx.io#/council"},(0,r.kt)("em",{parentName:"a"},"Governance > Council"))," in Polkadot/apps."),(0,r.kt)("p",null,"Click on ",(0,r.kt)("em",{parentName:"p"},"Submit candidacy")," which will trigger a popup."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:(0,i.Z)("/img/howto_democracy_council_elections/polkajs-run-for-council.jpg")})),(0,r.kt)("p",null,"Select the account which is running for Council membership, click on ",(0,r.kt)("em",{parentName:"p"},"Submit"),", and sign the transaction."))}d.isMDXComponent=!0}}]);