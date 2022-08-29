"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[358],{3905:(a,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var r=n(7294);function i(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function s(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,r)}return n}function t(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){i(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function o(a,e){if(null==a)return{};var n,r,i=function(a,e){if(null==a)return{};var n,r,i={},s=Object.keys(a);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||(i[n]=a[n]);return i}(a,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(i[n]=a[n])}return i}var c=r.createContext({}),l=function(a){var e=r.useContext(c),n=e;return a&&(n="function"==typeof a?a(e):t(t({},e),a)),n},d=function(a){var e=l(a.components);return r.createElement(c.Provider,{value:e},a.children)},u={inlineCode:"code",wrapper:function(a){var e=a.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(a,e){var n=a.components,i=a.mdxType,s=a.originalType,c=a.parentName,d=o(a,["components","mdxType","originalType","parentName"]),p=l(n),m=i,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||s;return n?r.createElement(h,t(t({ref:e},d),{},{components:n})):r.createElement(h,t({ref:e},d))}));function m(a,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof a||i){var s=n.length,t=new Array(s);t[0]=p;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=a,o.mdxType="string"==typeof a?a:i,t[1]=o;for(var l=2;l<s;l++)t[l]=n[l];return r.createElement.apply(null,t)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},763:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const s={id:"parachains",title:"Parachains"},t=void 0,o={unversionedId:"parachains",id:"parachains",title:"Parachains",description:"Una de las caracter\xedsticas m\xe1s distintivas de Polkadot y Kusama es el soporte de parachains. Las parachains  son blockchains individuales creadas en Substrate, que est\xe1n dise\xf1adas para manejar casos de uso espec\xedficos y que est\xe1n conectadas a la llamada relay chain (es decir, Kusama o Polkadot).",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/parachains.md",sourceDirName:".",slug:"/parachains",permalink:"/es/parachains",draft:!1,editUrl:"https://github.com/galacticcouncil/Basilisk-docs/edit/main/docs/parachains.md",tags:[],version:"current",frontMatter:{id:"parachains",title:"Parachains"},sidebar:"sidebar",previous:{title:"Technical Committee",permalink:"/es/learn_democracy_technical_committee"},next:{title:"Parachain Auctions",permalink:"/es/parachain_auctions"}},c={},l=[{value:"Especializaci\xf3n",id:"specialization",level:2},{value:"Seguridad compartida",id:"shared-security",level:2},{value:"Escalabilidad",id:"scalability",level:2},{value:"Interoperabilidad",id:"interoperability",level:2}],d={toc:l};function u(a){let{components:e,...n}=a;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Una de las caracter\xedsticas m\xe1s distintivas de Polkadot y Kusama es el soporte de parachains. Las parachains  son blockchains individuales creadas en Substrate, que est\xe1n dise\xf1adas para manejar casos de uso espec\xedficos y que est\xe1n conectadas a la llamada relay chain (es decir, Kusama o Polkadot)."),(0,i.kt)("p",null,"Para una mejor comprensi\xf3n de las parachains y su lugar dentro de la red, este art\xedculo examina algunas de sus caracter\xedsticas definitorias: ",(0,i.kt)("a",{parentName:"p",href:"#specialization"},"especializaci\xf3n"),", ",(0,i.kt)("a",{parentName:"p",href:"#shared-security"},"seguridad compartida"),", ",(0,i.kt)("a",{parentName:"p",href:"#scalability"},"escalabilidad")," e ",(0,i.kt)("a",{parentName:"p",href:"#interoperability"},"interoperabilidad"),"."),(0,i.kt)("h2",{id:"specialization"},"Especializaci\xf3n"),(0,i.kt)("p",null,"El mundo tal como lo conocemos se basa en el concepto de especializaci\xf3n: el proceso de convertirse en expertos en un \xe1rea o habilidad en particular. Las parachains traen la especializaci\xf3n al mundo de blockchain. El dise\xf1o de Kusama permite a los desarrolladores de parachains centrarse en las caracter\xedsticas que hacen que su cadena sea \xfanica mientras aprovechan la seguridad compartida y la interoperabilidad."),(0,i.kt)("p",null,"La especializaci\xf3n de Basilisk es el bootstrapping de liquidez para nuevos criptoactivos: con su dise\xf1o modular, Basilisk habilita a los long tail de los criptoactivos a hacer un bootstrap de liquidez utilizando un modelo AMM de su elecci\xf3n. Desde los tradicionales grupos XYK, pasando por los Liquidity Bootstrapping Pools y curves, hasta las auctions (subastas) y un mercado NFT: Basilisk lo tiene cubierto."),(0,i.kt)("h2",{id:"shared-security"},"Seguridad compartida"),(0,i.kt)("p",null,"SLa seguridad es uno de los desaf\xedos que ha estado frenando la adopci\xf3n de soluciones especializadas de Blockchains Layer-1(Capa 1). Obtener un conjunto grande y descentralizado de validadores es clave para la seguridad de la red, sin embargo, este objetivo puede resultar demasiado ambicioso para algunos proyectos de nicho."),(0,i.kt)("p",null,"Todos las parachains de Kusama disfrutan de una seguridad de grado industrial que sale de la caja.  Est\xe1n conectados a la relay chain (Kusama) y asegurados por su conjunto de validadores. Las parachains tienen sus propios conjuntos de collators que son responsables de mantener un full-node de la parachain y de producir nuevos candidatos a bloque. Los candidatos de bloque producidos se pasan a los validadores de la relay chain que verifican los bloques y los incluyen en el estado compartido de Kusama. Como resultado, las parachains comparten el mismo alto nivel de seguridad que el propio Kusama."),(0,i.kt)("h2",{id:"scalability"},"Escalabilidad"),(0,i.kt)("p",null,"A pesar de estar conectados a la relay chain, las parachains siguen siendo blockchains Layer-1 independientes que producen sus propios bloques. Esta caracter\xedstica de dise\xf1o tiene grandes implicaciones en el rendimiento porque permite que las transacciones sean procesadas por diferentes cadenas en paralelo. La capacidad de procesamiento paralelo sustenta la infame escalabilidad y el alto rendimiento de la red Kusama"),(0,i.kt)("h2",{id:"interoperability"},"Interoperabilidad"),(0,i.kt)("p",null,"Todas las parachains que est\xe1n conectadas a la Kusama relay chain pueden comunicarse entre s\xed mediante una funci\xf3n llamada Transferencia de mensajes entre cadenas (XCMP). XCMP permite a las parachains individuales no solo intercambiar tokens, sino tambi\xe9n informaci\xf3n m\xe1s rica, como contratos inteligentes, allanando as\xed el camino para la expansi\xf3n DeFi. La interoperabilidad de Kusama es un trampol\xedn hacia el futuro de m\xfaltiples cadenas donde las transferencias entre cadenas se convierten en parte de nuestra vida diaria."))}u.isMDXComponent=!0}}]);