"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[321],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=i,d=u["".concat(l,".").concat(m)]||u[m]||h[m]||r;return a?n.createElement(d,o(o({ref:t},p),{},{components:a})):n.createElement(d,o({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1595:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),i=(a(7294),a(3905)),r=a(4996);const o={id:"build_xc_integration",title:"Cross-Chain Integration"},s=void 0,l={unversionedId:"build_xc_integration",id:"build_xc_integration",title:"Cross-Chain Integration",description:"Pursuing its mission to enable permissionless liquidity for the Kusama ecosystem, Basilisk generally welcomes integrations with other parachains which would like to leverage some of the functionalities that Snek has to offer.",source:"@site/docs/build_xc_integration.md",sourceDirName:".",slug:"/build_xc_integration",permalink:"/ru/build_xc_integration",draft:!1,editUrl:"https://github.com/galacticcouncil/Basilisk-docs/edit/main/docs/build_xc_integration.md",tags:[],version:"current",frontMatter:{id:"build_xc_integration",title:"Cross-Chain Integration"},sidebar:"sidebar",previous:{title:"Testnet Deployment",permalink:"/ru/infra_testnet"},next:{title:"Writing Docs",permalink:"/ru/contributing"}},c={},p=[{value:"Establishing cross-chain (XC) communication",id:"establishing-xc",level:2},{value:"Onboarding assets to Basilisk",id:"onboarding-assets",level:2},{value:"Step 0: Spark a discussion with the community",id:"discussion",level:3},{value:"Step 1: Gather asset registry info",id:"asset-registry-info",level:3},{value:"Step 2: Test on Rococo testnet",id:"rococo",level:3},{value:"1) Parachain",id:"1-parachain",level:5},{value:"2) Basilisk",id:"2-basilisk",level:5},{value:"3) Parachain",id:"3-parachain",level:5},{value:"4) Rococo",id:"4-rococo",level:5},{value:"5) Test token transfers",id:"5-test-token-transfers",level:5},{value:"Step 3: Integrate on Kusama network",id:"live",level:3},{value:"1) Parachain",id:"1-parachain-1",level:5},{value:"2) Basilisk",id:"2-basilisk-1",level:5},{value:"3) Parachain",id:"3-parachain-1",level:5},{value:"4) Kusama",id:"4-kusama",level:5},{value:"5) Test token transfers",id:"5-test-token-transfers-1",level:5}],h={toc:p};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Pursuing its mission to ",(0,i.kt)("strong",{parentName:"p"},"enable permissionless liquidity for the Kusama ecosystem"),", Basilisk generally ",(0,i.kt)("strong",{parentName:"p"},"welcomes integrations")," with other parachains which would like to leverage some of the functionalities that Snek has to offer."),(0,i.kt)("p",null,"This page provides a ",(0,i.kt)("strong",{parentName:"p"},"step-by-step guide")," that explains how to ",(0,i.kt)("strong",{parentName:"p"},"integrate your chain and its assets")," with Basilisk."),(0,i.kt)("h2",{id:"establishing-xc"},"Establishing cross-chain (XC) communication"),(0,i.kt)("p",null,"The Kusama ecosystem was designed with multichain interoperability support in mind from day 1. The protocol that allows two chains to exchange Cross-Consensus messages (XCM) with each other is called ",(0,i.kt)("strong",{parentName:"p"},"Cross-Chain Message Passing (XCMP)"),". While full XCMP is still under development, a stop-gap protocol called ",(0,i.kt)("strong",{parentName:"p"},"Horizontally Relay-routed Message Passing (HRMP)")," is used by parachains to establish communication channels. An HRMP channel has the same capabilities as an XCMP channel but is more demanding on resources as messages are not routed directly between parachains, but need to first pass via the relay chain."),(0,i.kt)("h2",{id:"onboarding-assets"},"Onboarding assets to Basilisk"),(0,i.kt)("p",null,"As Basilisk is a permissionless and decentralized protocol, anyone can propose an XC integration with another parachain. A common case for this would be to list tokens on Snek Swap or to raise liquidity with Snek LBP, but other use cases may also come to mind."),(0,i.kt)("p",null,"The procedure for proposing to open a channel to Basilisk consists of the following steps:"),(0,i.kt)("h3",{id:"discussion"},"Step 0: Spark a discussion with the community"),(0,i.kt)("p",null,"Before deciding to open a new cross-chain channel, you should initiate a discussion with the broader Basilisk community. This step is important because it allows users to express interest in tokens that they would like to see trading on our platform and to red-flag potentially toxic assets."),(0,i.kt)("p",null,"To initiate the discussion, please ",(0,i.kt)("a",{parentName:"p",href:"https://basilisk.polkassembly.io/post/create"},"open a discussion thread on Polkassembly")," which touches upon the following points:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"introduction of your project"),(0,i.kt)("li",{parentName:"ul"},"how it plans to leverage the functionality offered by Basilisk"),(0,i.kt)("li",{parentName:"ul"},"tokenomics"),(0,i.kt)("li",{parentName:"ul"},"any other important info")),(0,i.kt)("p",null,"After creating the thread, please post a link in ",(0,i.kt)("strong",{parentName:"p"},"#gov-discussion")," on the ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/FYrDPeES"},"Basilisk Discord"),"."),(0,i.kt)("h3",{id:"asset-registry-info"},"Step 1: Gather asset registry info"),(0,i.kt)("p",null,"A chain's asset registry requires metadata about its tokens to function properly. For example, our native token BSX would be registered as follows: "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Basilisk")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"symbol"),(0,i.kt)("td",{parentName:"tr",align:"center"},"BSX")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"decimals"),(0,i.kt)("td",{parentName:"tr",align:"center"},"12")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"existential deposit"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0.1 BSX")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"multilocation (Rococo)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"{ parents: 1, interior: { X2: ","[ {Parachain: 2090}, {GeneralIndex:0} ]","}}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"multilocation (Kusama)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"{ parents: 1, interior: { X2: ","[ {Parachain: 2090}, {GeneralIndex:0} ]","}}")))),(0,i.kt)("p",null,"Prepare this table for all the currencies you want to register."),(0,i.kt)("h3",{id:"rococo"},"Step 2: Test on Rococo testnet"),(0,i.kt)("p",null,"Before any cross-chain action can happen on the live chain, a dry run has to be performed on the Rococo testnet first. Doing so prevents losing funds spent on failed proposals and ensures their smooth execution."),(0,i.kt)("admonition",{type:"important"},(0,i.kt)("p",{parentName:"admonition"},"Both parachain ",(0,i.kt)("a",{parentName:"p",href:"https://substrate.stackexchange.com/questions/1200/how-to-calculate-sovereignaccount-for-parachain/1210"},"sovereign accounts")," must have enough funds on the relay chain to make a deposit for HRMP channels and to process XCM messages."),(0,i.kt)("p",{parentName:"admonition"},"ROC tokens can be obtained from the ",(0,i.kt)("a",{parentName:"p",href:"https://matrix.to/#/#rococo-faucet:matrix.org"},"Element faucet")," by typing ",(0,i.kt)("em",{parentName:"p"},"!drip YOUR_ADDRESS"))),(0,i.kt)("p",null,"Establishing a cross-chain integration of two parachains consists of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"creating bidirectional HRMP channels;"),(0,i.kt)("li",{parentName:"ul"},"registering assets in the asset registry.")),(0,i.kt)("h5",{id:"1-parachain"},"1) Parachain"),(0,i.kt)("p",null,"To initiate a request for opening a channel to Basilisk on the relay chain, please follow these steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"prepare encoded transact call that will be executed on the relay chain:"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:(0,r.Z)("/img/build_xc_integration/rococo_hrmp_init.png")})),(0,i.kt)("p",{parentName:"li"}," ",(0,i.kt)("em",{parentName:"p"},"Encoded: 0x17002a0800000800000000040000")))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The following actions can be performed only from root origin via governance or the sudo module of the respective chain.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"send an XCM message from the parachain to the relay chain using the ",(0,i.kt)("em",{parentName:"p"},"polkadotXcm.send")," call containing the following ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-format"},"instructions"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"WithdrawAsset"),(0,i.kt)("li",{parentName:"ul"},"BuyExecution"),(0,i.kt)("li",{parentName:"ul"},"Transact (input previously prepared call here)"),(0,i.kt)("li",{parentName:"ul"},"RefundSurplus"),(0,i.kt)("li",{parentName:"ul"},"DepositAsset")))),(0,i.kt)("h5",{id:"2-basilisk"},"2) Basilisk"),(0,i.kt)("p",null,"On the Basilisk side, the following actions need to be performed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"accept the Parachain ","\u2192"," Basilisk channel request;"),(0,i.kt)("li",{parentName:"ul"},"initiate a request for opening Basilisk ","\u2192"," Parachain channel;"),(0,i.kt)("li",{parentName:"ul"},"register Parachain's native asset(s) in the Basilisk asset registry.")),(0,i.kt)("p",null,"These actions need to be performed by a member of the Basilisk team. Please contact us via a private Telegram group or, in the absence of such, reach out to us on the ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/FYrDPeES"},"Basilisk Discord"),"."),(0,i.kt)("h5",{id:"3-parachain"},"3) Parachain"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"accept Basilisk ","\u2192"," Parachain channel request on the relay chain with the following Transact call, analogically to step 1:"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:(0,r.Z)("/img/build_xc_integration/hrmp_accept.png")})),(0,i.kt)("p",{parentName:"li"}," ",(0,i.kt)("em",{parentName:"p"},"Encoded: 0x17012a080000"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"register BSX in Parachain's asset registry."))),(0,i.kt)("h5",{id:"4-rococo"},"4) Rococo"),(0,i.kt)("p",null,"Wait for one session after each acceptance for the channels to be opened."),(0,i.kt)("h5",{id:"5-test-token-transfers"},"5) Test token transfers"),(0,i.kt)("p",null,"Before proceeding, try sending each of the registered tokens back and forth from one parachain to the other, and make sure that the deposits are successful."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"BSX on Rococo can be obtained from the ",(0,i.kt)("a",{parentName:"p",href:"https://discord.com/channels/844177080005951489/963084917284155452"},"Basilisk discord faucet")," by typing ",(0,i.kt)("em",{parentName:"p"},"/drip BSX_ADDRESS"))),(0,i.kt)("h3",{id:"live"},"Step 3: Integrate on Kusama network"),(0,i.kt)("p",null,"The process is similar to step 2, however, we will be using Kusama as the relay chain."),(0,i.kt)("admonition",{type:"important"},(0,i.kt)("p",{parentName:"admonition"},"Both parachain ",(0,i.kt)("a",{parentName:"p",href:"https://substrate.stackexchange.com/questions/1200/how-to-calculate-sovereignaccount-for-parachain/1210"},"sovereign accounts")," must have enough funds (approx. 10.1 KSM) on the relay chain to reserve a deposit for HRMP channels and to process the XCM messages.")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Always test the encoded hash of the call is valid on the appropriate chain, sending transaction data to an incorrect relay chain may lead to a loss of funds. ")),(0,i.kt)("h5",{id:"1-parachain-1"},"1) Parachain"),(0,i.kt)("p",null,"To initiate a request for opening a channel to Basilisk on the relay chain, please follow these steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"prepare an encoded transact call that will be executed on the relay chain:"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:(0,r.Z)("/img/build_xc_integration/kusama_hrmp_init.png")})),(0,i.kt)("p",{parentName:"li"}," ",(0,i.kt)("em",{parentName:"p"},"Encoded: 0x3c002a080000e803000000900100")))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The following actions can be performed only from root origin via governance or the sudo module of the respective chain.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"send an XCM message from the parachain to the relay chain using the ",(0,i.kt)("em",{parentName:"p"},"polkadotXcm.send")," call containing the following ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-format"},"instructions"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"WithdrawAsset"),(0,i.kt)("li",{parentName:"ul"},"BuyExecution"),(0,i.kt)("li",{parentName:"ul"},"Transact (input previously prepared call here)"),(0,i.kt)("li",{parentName:"ul"},"RefundSurplus"),(0,i.kt)("li",{parentName:"ul"},"DepositAsset")))),(0,i.kt)("h5",{id:"2-basilisk-1"},"2) Basilisk"),(0,i.kt)("p",null,"On the Basilisk side, the following actions need to be performed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"accept the Parachain ","\u2192"," Basilisk channel request;"),(0,i.kt)("li",{parentName:"ul"},"initiate a request for opening Basilisk ","\u2192"," Parachain channel;"),(0,i.kt)("li",{parentName:"ul"},"register Parachain's native asset(s) in the Basilisk asset registry.")),(0,i.kt)("p",null,"In order to do so, the actions need to pass the ",(0,i.kt)("strong",{parentName:"p"},"governance procedure")," applicable at Basilisk. For this purpose, please reach out to ",(0,i.kt)("strong",{parentName:"p"},"#gov-discussion")," on the ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/FYrDPeES"},"Basilisk Discord"),". Please ",(0,i.kt)("strong",{parentName:"p"},"include references")," to Step 0 (governance discussion), Step 1 (Asset Registry Info for the assets which are to be registered on Basilisk), and Step 2 (testing on Rococo)."),(0,i.kt)("p",null,"Your request will be handled by the Basilisk Council. If all the necessary information is provided, a Council member will launch a motion which, after undergoing a Council vote, will proceed as a public referendum. The Technical Committee at Basilisk will consider fast-tracking the referendum."),(0,i.kt)("h5",{id:"3-parachain-1"},"3) Parachain"),(0,i.kt)("p",null,"After the Basilisk referendum has been enacted, the Parachain needs to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"accept Basilisk ","\u2192"," Parachain channel request on the relay chain with the following Transact call, analogically to step 1:"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:(0,r.Z)("/img/build_xc_integration/hrmp_accept.png")})),(0,i.kt)("p",{parentName:"li"}," ",(0,i.kt)("em",{parentName:"p"},"Encoded: 0x3c012a080000"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"register BSX to Parachain's asset registry."))),(0,i.kt)("h5",{id:"4-kusama"},"4) Kusama"),(0,i.kt)("p",null,"Wait for one session after each acceptance for the channels to be opened."),(0,i.kt)("h5",{id:"5-test-token-transfers-1"},"5) Test token transfers"),(0,i.kt)("p",null,"Try sending each of the registered tokens back and forth from one parachain to the other, and make sure that the deposits are successful."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Congratulations for registering your tokens on Basilisk, and a warm welcome from Snek!")))}u.isMDXComponent=!0}}]);