(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[573],{27163:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var n=r(49501),i=r(67294);var o=i.forwardRef((function(e,t){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"}))})),s=r(52758),a=r(62097),c=r(70918),l=r(29630),x=r(75084),d=r(81645),u=r(61953),h=r(68346),p=r(15446),m=r(74815),f=r(98988),j=r(2031),g=r(85893);function b(){var e=(0,a.Z)(),t=(0,j.Yh)((function(e){return e.trackEvent}));return(0,i.useEffect)((function(){t("Page Viewed",{"Page Name":"500 Error"})}),[t]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(m.f,{}),(0,g.jsx)(p.O,{children:(0,g.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",p:4,flex:1,backgroundColor:"dark"===e.palette.mode?"transparent":""},children:[(0,g.jsx)(l.Z,{variant:"display1",sx:{mt:8,mb:3},children:(0,g.jsx)(n.cC,{id:"Something went wrong"})}),(0,g.jsx)(l.Z,{sx:{mt:2,mb:5,maxWidth:480},children:(0,g.jsx)(n.cC,{id:"Sorry, an unexpected error happened. In the meantime you may try reloading the page, or come back later."})}),(0,g.jsx)(x.Z,{variant:"outlined",color:"primary",startIcon:(0,g.jsx)(d.Z,{children:(0,g.jsx)(o,{})}),onClick:function(){return window.location.reload()},sx:{mb:10},children:(0,g.jsx)(n.cC,{id:"Reload the page"})}),(0,g.jsxs)(u.Z,{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",mt:10,children:[(0,g.jsxs)(l.Z,{sx:{mb:4},children:[(0,g.jsx)(n.cC,{id:"If the error continues to happen,<0/> you may report it to this",components:{0:(0,g.jsx)("br",{})}})," ",(0,g.jsx)(h.Z,{href:"https://discord.gg/zerolend",color:"inherit",target:"_blank",children:(0,g.jsx)(n.cC,{id:"Discord channel"})}),"."]}),(0,g.jsx)(x.Z,{color:"primary",startIcon:(0,g.jsx)(d.Z,{children:(0,g.jsx)(s.Z,{})}),onClick:function(){console.log("copying error to clipboard")},children:(0,g.jsx)(n.cC,{id:"Copy error message"})})]})]})})]})}b.getLayout=function(e){return(0,g.jsx)(f.Z,{children:e})}},15446:function(e,t,r){"use strict";r.d(t,{O:function(){return s}});var n=r(61953),i=r(36336),o=r(85893),s=function(e){var t=e.children;return(0,o.jsx)(n.Z,{sx:{display:"flex",flexDirection:"column",flex:1,mt:{xs:"-32px",lg:"-46px",xl:"-44px",xxl:"-48px"}},children:(0,o.jsx)(i.Z,{children:t})})}},25563:function(e,t,r){"use strict";r.d(t,{hu:function(){return k},St:function(){return O},gO:function(){return C},tF:function(){return P}});var n=r(59499),i=r(49501),o=r(61782),s=r(61953),a=r(72389),c=r(62097),l=r(61225),x=r(82334),d=r(81645),u=r(29630),h=r(31538),p=r(61702),m=r(67294),f=r(2031),j=r(57609),g=r(46930),b=r(25298),v=r(85893);function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Z,k=function(e){var t=b.ei[e];return{market:t,network:b.m5[t.chainId]}},O=function(e){var t=["G\xf6rli","Ropsten","Mumbai","Sepolia","Fuji","Testnet","Kovan","Rinkeby"],r=e.split(" "),n=r.filter((function(e){return t.indexOf(e)>-1}));return{name:r.filter((function(e){return!n.includes(e)})).join(" "),testChainName:n[0]}},C=function(e){var t=e.size,r=e.logo,n=e.testChainName;return(0,v.jsxs)(s.Z,{sx:{mr:2,width:t,height:t,position:"relative"},children:[(0,v.jsx)("img",{src:r,alt:"",width:"100%",height:"100%"}),n&&(0,v.jsx)(a.Z,{title:n,arrow:!0,children:(0,v.jsx)(s.Z,{sx:{bgcolor:"#29B6F6",width:"16px",height:"16px",borderRadius:"50%",color:"common.white",fontSize:"12px",lineHeight:"16px",display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",right:"-2px",bottom:"-2px"},children:n.split("")[0]})})]})};!function(e){e[e.V2=0]="V2",e[e.V3=1]="V3"}(Z||(Z={}));var P=function(){var e=(0,g.f)(),t=e.currentMarket,r=e.setCurrentMarket,n=(0,m.useState)(Z.V3)[0],a=(0,c.Z)(),w=(0,l.Z)(a.breakpoints.up("lg")),P=(0,l.Z)(a.breakpoints.down("xsm")),S=(0,f.Yh)((function(e){return e.trackEvent}));return(0,v.jsxs)(x.Z,{select:!0,"aria-label":"select market","data-cy":"marketSelector",value:t,onChange:function(e){S(j.h1.CHANGE_MARKET,{market:e.target.value}),r(e.target.value)},sx:{mr:2,"& .MuiOutlinedInput-notchedOutline":{border:"none"}},SelectProps:{native:!1,className:"MarketSwitcher__select",IconComponent:function(e){return(0,v.jsx)(d.Z,y(y({fontSize:"medium"},e),{},{children:(0,v.jsx)(o.Z,{})}))},renderValue:function(e){var t=k(e),r=t.market,n=t.network;return(0,v.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,v.jsx)(C,{size:w?32:28,logo:n.networkLogoPath,testChainName:O(r.marketTitle).testChainName}),(0,v.jsx)(s.Z,{sx:{mr:1,display:"inline-flex",alignItems:"flex-start"},children:(0,v.jsxs)(u.Z,{variant:w?"display1":"h1",sx:{fontSize:P?"1.55rem":void 0,color:"common.white",mr:1},children:[O(r.marketTitle).name," ",r.isFork?"Fork":"",w&&" Market"]})})]})},sx:{"&.MarketSwitcher__select .MuiSelect-outlined":{pl:0,py:0,backgroundColor:"transparent !important"},".MuiSelect-icon":{color:"#F1F1F3"}},MenuProps:{anchorOrigin:{vertical:"bottom",horizontal:"right"},PaperProps:{style:{minWidth:240},variant:"outlined",elevation:0}}},children:[(0,v.jsx)(s.Z,{children:(0,v.jsx)(u.Z,{variant:"subheader2",color:"text.secondary",sx:{px:4,pt:2},children:(0,v.jsx)(i.cC,{id:"{0}",values:{0:b.p8||b.aV?"Select ZeroLend Testnet Market":"Select ZeroLend Market"}})})}),b.z2.map((function(e){var t=k(e),r=t.market,i=t.network,o=O(r.marketTitle);return(0,v.jsxs)(h.Z,{"data-cy":"marketSelector_".concat(e),value:e,sx:{".MuiListItemIcon-root":{minWidth:"unset"},display:r.v3&&n===Z.V2||!r.v3&&n===Z.V3?"none":"flex"},children:[(0,v.jsx)(C,{size:32,logo:i.networkLogoPath,testChainName:o.testChainName}),(0,v.jsxs)(p.Z,{sx:{mr:0},children:[o.name," ",r.isFork?"Fork":""]}),(0,v.jsx)(p.Z,{sx:{textAlign:"right"},children:(0,v.jsx)(u.Z,{color:"text.muted",variant:"description",children:o.testChainName})})]},e)}))]})}},40535:function(e,t,r){"use strict";r.d(t,{V:function(){return p}});var n=r(49501),i=r(62097),o=r(61225),s=r(61953),a=r(29630),c=r(75084),l=r(2031),x=r(67728),d=r(25563),u=r(68861),h=r(85893),p=function(e){var t=e.pageTitle,r=e.withMarketSwitcher,p=e.withMigrateButton,m=(0,l.Yh)((function(e){return(0,x.lY)(e)})),f=(0,i.Z)(),j=(0,o.Z)(f.breakpoints.up("lg")),g=(0,o.Z)(f.breakpoints.down("xsm"));return(0,h.jsxs)(s.Z,{sx:{display:"flex",alignItems:{xs:"flex-start",xsm:"center"},mb:t?4:0,flexDirection:{xs:"column",xsm:"row"}},children:[t&&(g||!r)&&(0,h.jsx)(s.Z,{sx:{display:"flex",alignItems:"flex-start"},children:(0,h.jsx)(a.Z,{variant:g?"h2":j?"display1":"h1",sx:{color:r?"text.muted":"text.white",mr:{xs:5,xsm:3},mb:{xs:0,xsm:0}},children:t})}),(0,h.jsxs)(s.Z,{sx:{display:"flex",alignItems:"flex-start",flexWrap:"wrap",mb:t?0:4},children:[r&&(0,h.jsx)(d.tF,{}),m&&p&&(0,h.jsx)(u.rU,{href:u.Z6.migrationTool,sx:{mt:{xs:2,xsm:0}},children:(0,h.jsx)(c.Z,{variant:"gradient",size:"small",children:(0,h.jsx)(n.cC,{id:"Migrate to V3"})})})]})]})}},74815:function(e,t,r){"use strict";r.d(t,{f:function(){return j}});var n=r(59499),i=r(49501),o=r(62097),s=r(61225),a=r(61953),c=r(29630),l=r(36336),x=r(67294),d=r(19952),u=r(40535),h=r(46930),p=r(85893);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=function(e){var t=e.pageTitle,r=e.pageDesc,n=e.titleComponent,m=e.withMarketSwitcher,j=e.withMigrateButton,g=e.bridge,b=e.children,v=e.containerProps,w=void 0===v?{}:v,y=(0,o.Z)(),Z=(0,s.Z)(y.breakpoints.down("xsm")),k=(0,h.f)().currentChainId;return(0,x.useEffect)((function(){(new window.Gradient).initGradient("#gradient-canvas")}),[]),(0,p.jsxs)(a.Z,{id:"top-info-panel",sx:{color:"#F1F1F3"},children:[(0,p.jsx)("canvas",{id:"gradient-canvas"}),(0,p.jsxs)(d.v,{severity:"info",icon:!1,sx:{px:{xs:6,md:8,borderRadius:0,color:"#eee",background:"rgba(255, 255, 255, 0.1)"}},children:[(0,p.jsx)(c.Z,{variant:"subheader1",children:(0,p.jsx)(i.cC,{id:"$ZERO pre-mining is now live!"})}),(0,p.jsx)(i.cC,{id:"The ZeroLend protocol is now live and is currently in bootstrap mode. Users who deposit assets can pre-mine $ZERO (as earlyZERO) which can be redeemed on token launch. Read about <0>Phase 1 Launch</0> to learn more.",components:{0:(0,p.jsx)("a",{href:"https://docs.zerolend.xyz/roadmap/phase-1-launch",target:"_blank",rel:"noreferrer",style:{color:"#fff"}})}})]}),(0,p.jsx)(a.Z,{sx:{pt:{xs:6,md:8},pb:{xs:18,md:20,lg:"94px",xl:"92px",xxl:"96px"},color:"#F1F1F3"},children:(0,p.jsxs)(l.Z,f(f({},w),{},{sx:f(f({},w.sx),{},{pb:0}),children:[81457===k&&(0,p.jsx)(a.Z,{m:0,sx:{px:5,py:0,m:0},children:(0,p.jsxs)(d.v,{severity:"info",icon:!1,sx:{px:{m:0,borderRadius:0,color:"#eee",background:"rgba(252,252,5, 0.3)"}},children:["Users who borrow liquidity from the Blast markets get 100% of all Blast Developer Points (Blast Gold). Supply liquidity and farm both ZERO and BLAST airdops. ",(0,p.jsx)("a",{href:"https://twitter.com/zerolendxyz/status/1763284713027039428",target:"_blank",rel:"noreferrer",style:{color:"#fff"},children:"Learn More"})," "]})}),(0,p.jsxs)(a.Z,{sx:{px:{xs:4,xsm:6}},children:[!n&&(0,p.jsx)(u.V,{pageTitle:t,withMarketSwitcher:m,withMigrateButton:j,bridge:g}),n&&n,r&&(0,p.jsx)(c.Z,{variant:"main14",sx:{color:"text.muted",mt:2,mr:{xs:5,xsm:3},maxWidth:750,mb:r?4:0},style:Z?{marginTop:"0px"}:{marginTop:"-12px"},children:r}),(0,p.jsx)(a.Z,{sx:{display:"flex",alignItems:"flex-start",gap:{xs:3,xsm:8},flexWrap:"wrap",width:"100%"},children:b})]})]}))})]})}},52298:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/500",function(){return r(27163)}])}},function(e){e.O(0,[249,774,888,179],(function(){return t=52298,e(e.s=t);var t}));var t=e.O();_N_E=t}]);