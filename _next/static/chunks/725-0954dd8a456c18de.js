"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[725],{87369:function(e,t,r){r.d(t,{d:function(){return a}});var n=r(62097),o=r(61225),i=r(61953),s=r(29630),c=r(91655),l=r(85893),a=function(e){var t=e.icon,r=e.title,a=e.titleIcon,p=e.children,d=e.hideIcon,u=e.variant,x=void 0===u?"dark":u,f=e.withLine,h=e.loading,b=e.withoutIconWrapper,y=(0,n.Z)(),j=(0,o.Z)(y.breakpoints.up("sm"));return(0,l.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center",width:{xs:"calc(50% - 12px)",xsm:"unset"}},children:[f&&(0,l.jsx)(i.Z,{sx:{mr:8,my:"auto",width:"1px",bgcolor:"#F2F3F729",height:"37px"}}),!d&&(b?t&&t:(0,l.jsx)(i.Z,{sx:{display:{xs:"none",md:"flex"},alignItems:"center",justifyContent:"center",border:"1px solid #EBEBED1F",borderRadius:"12px",bgcolor:"#27264C",boxShadow:"0px 2px 1px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.25)",width:42,height:42,mr:3},children:t&&t})),(0,l.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,l.jsxs)(i.Z,{sx:{display:"inline-flex",alignItems:"center"},children:[(0,l.jsx)(s.Z,{sx:{color:"dark"===x?"#A5A8B6":"#27264C"},variant:j?"description":"caption",component:"div",children:r}),a&&a]}),h?(0,l.jsx)(c.Z,{width:60,height:j?28:24,sx:{background:"#27264C"}}):p]})]})}},25002:function(e,t,r){r.d(t,{l:function(){return c}});var n=r(49501),o=r(25169),i=r(68861),s=r(85893),c=function(e){var t=e.symbol,r=e.currentMarket;return(0,s.jsx)(n.cC,{id:"Borrowing is disabled due to an ZeroLend community decision. <0>More details</0>",components:{0:(0,s.jsx)(i.rU,{href:(0,o.E)(t,r),sx:{textDecoration:"underline"}})}})}},72095:function(e,t,r){r.d(t,{J:function(){return y}});var n=r(59499),o=r(61953),i=r(41024),s=r(14463),c=r(17218),l=r(29630),a=r(67294),p=r(97563),d=r(85893),u=function(e){var t=(0,a.useState)(!1),r=t[0],n=t[1];return(0,d.jsx)(p.a,{placement:"bottom",tooltipContent:(0,d.jsx)(l.Z,{children:e.tooltip}),withoutHover:!0,setOpen:n,open:r,children:(0,d.jsx)(o.Z,{sx:function(t){return{p:{xs:"4px",xsm:"2px 4px"},mb:1,border:"1px solid ".concat(r?t.palette.action.disabled:t.palette.divider),borderRadius:"4px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"opacity 0.2s ease",bgcolor:r?"".concat(e.color,"80"):e.color,"&:hover":{bgcolor:"".concat(e.color,"80"),borderColor:"action.disabled"}}},onClick:function(){return n(!r)},children:(0,d.jsx)(l.Z,{variant:"main12",color:"text.secondary",children:e.text})})})},x={"rsETH-1":[{color:"#D8F0F0",text:"1x Kelp Miles",tooltip:"Supplying rtETH will give you 1x Kelp miles on KelpDAO"},{color:"#e5f293",text:"1x EigenLayer Points",tooltip:"Supplying rtETH will give you 1x EL points on KelpDAO"}],"ezETH-1":[{color:"#ACE731",text:"1x ezPoints",tooltip:"Supplying ezETH will give you 1x ezPoints on Renzo"},{color:"#e5f293",text:"1x EigenLayer Points",tooltip:"Supplying ezETH will give you 1x EL points on Renzo"}],"weETH-1":[{color:"#ACE731",text:"1x Loyalty Points",tooltip:"Supplying weETH will give you 1x loyalty points on ether.fi"},{color:"#e5f293",text:"1x EigenLayer Points",tooltip:"Supplying weETH will give you 1x EL points on ether.fi"}]},f=r(46930);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=function(e){var t=e.symbol,r=e.value,n=e.incentives,l=e.variant,p=void 0===l?"secondary14":l,h=e.symbolsVariant,y=e.align,j=e.color,m=e.tooltip,v=e.isSupplyApy,g=(0,f.f)().currentMarketData,w=x["".concat(t,"-").concat(g.chainId)],O=w&&w.length>0;return(0,d.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",alignItems:y||{xs:"flex-end",xsm:"center"},justifyContent:"center",textAlign:"center"},children:["-1"!==r.toString()?"0"===r.toString()&&O?(0,d.jsx)("div",{}):(0,d.jsxs)(o.Z,{sx:{display:"flex"},children:[(0,d.jsx)(i.B,{"data-cy":"apy",value:r,percent:!0,variant:p,symbolsVariant:h,color:j,symbolsColor:j}),m]}):(0,d.jsx)(s.J,{variant:p,color:j||"text.secondary"}),(0,d.jsx)(c.M,{incentives:n,symbol:t}),O&&v&&(0,d.jsx)(o.Z,{mt:1,children:w.map((function(e){return(0,a.createElement)(u,b(b({},e),{},{key:e.color}))}))})]})}},35161:function(e,t,r){r.d(t,{$:function(){return a}});var n=r(58771),o=r(61953),i=r(81645),s=r(97563),c=r(84734),l=r(85893),a=function(){return(0,l.jsx)(s.a,{tooltipContent:(0,l.jsx)(o.Z,{children:(0,l.jsx)(c.v,{})}),children:(0,l.jsx)(i.Z,{sx:{fontSize:"20px",color:"warning.main",ml:2},children:(0,l.jsx)(n.Z,{})})})}},69507:function(e,t,r){r.d(t,{w:function(){return a}});var n=r(58771),o=r(61953),i=r(81645),s=r(97563),c=r(25002),l=r(85893),a=function(e){var t=e.symbol,r=e.currentMarket;return(0,l.jsx)(s.a,{tooltipContent:(0,l.jsx)(o.Z,{children:(0,l.jsx)(c.l,{symbol:t,currentMarket:r})}),children:(0,l.jsx)(i.Z,{sx:{fontSize:"20px",color:"error.main",ml:2},children:(0,l.jsx)(n.Z,{})})})}},25169:function(e,t,r){r.d(t,{E:function(){return d},Q:function(){return u}});var n=r(49501),o=r(58771),i=r(61953),s=r(81645),c=r(25298),l=r(97563),a=r(68861),p=r(85893),d=function(e,t){return t&&"proto_harmony_v3"===t||t&&"proto_fantom_v3"===t?"https://discord.gg/zerolend":e&&c.$e[e.toUpperCase()+t]?c.$e[e.toUpperCase()+t]:"https://discord.gg/zerolend"},u=function(e){var t=e.symbol,r=e.currentMarket;return(0,p.jsx)(l.a,{tooltipContent:(0,p.jsx)(i.Z,{children:(0,p.jsx)(n.cC,{id:"This asset is frozen due to an ZeroLend Protocol Governance decision.<0>More details</0>",components:{0:(0,p.jsx)(a.rU,{href:d(t,r),sx:{textDecoration:"underline"}})}})}),children:(0,p.jsx)(s.Z,{sx:{fontSize:"20px",color:"error.main",ml:2},children:(0,p.jsx)(o.Z,{})})})}},42115:function(e,t,r){r.d(t,{F:function(){return p}});var n=r(49501),o=r(58771),i=r(61953),s=r(81645),c=r(97563),l=r(68861),a=r(85893),p=function(){return(0,a.jsx)(c.a,{tooltipContent:(0,a.jsx)(i.Z,{children:(0,a.jsx)(n.cC,{id:"This asset is frozen due to an ZeroLend Protocol Governance decision. On the 20th of December 2022, renFIL will no longer be supported and cannot be bridged back to its native network. It is recommended to withdraw supply positions and repay borrow positions so that renFIL can be bridged back to FIL before the deadline. After this date, it will no longer be possible to convert renFIL to FIL. <0>More details</0>",components:{0:(0,a.jsx)(l.rU,{href:"https://medium.com/renproject/moving-on-from-alameda-da62a823ce93",sx:{textDecoration:"underline"}})}})}),children:(0,a.jsx)(s.Z,{sx:{fontSize:"20px",color:"error.main",ml:2},children:(0,a.jsx)(o.Z,{})})})}},83793:function(e,t,r){r.d(t,{n:function(){return c}});var n=r(58771),o=r(58527),i=r(1252),s=r(85893),c=function(){return(0,s.jsx)(o.G,{wrapperProps:{ml:2},color:"warning.main",iconSize:20,icon:(0,s.jsx)(n.Z,{}),children:(0,s.jsx)(i.O,{})})}},7775:function(e,t,r){r.d(t,{s:function(){return p}});var n=r(59499),o=r(36864),i=r(49501),s=r(58527),c=r(85893);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=function(e){var t=(0,o.Z)({},e);return(0,c.jsx)(s.G,a(a({},t),{},{children:(0,c.jsx)(i.cC,{id:"Stable interest rate will <0>stay the same</0> for the duration of your loan. Recommended for long-term loan periods and for users who prefer predictability.",components:{0:(0,c.jsx)("b",{})}})}))}},14379:function(e,t,r){r.d(t,{B:function(){return p}});var n=r(59499),o=r(36864),i=r(49501),s=r(58527),c=r(85893);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=function(e){var t=(0,o.Z)({},e);return(0,c.jsx)(s.G,a(a({},t),{},{children:(0,c.jsx)(i.cC,{id:"Variable interest rate will <0>fluctuate</0> based on the market conditions. Recommended for short-term positions.",components:{0:(0,c.jsx)("b",{})}})}))}},45884:function(e,t,r){r.d(t,{h:function(){return i}});var n=r(61953),o=r(85893),i=function(e){var t=e.isRow,r=e.children,i=e.minWidth,s=e.maxWidth,c=e.align,l=void 0===c?"center":c,a=e.overFlow,p=void 0===a?"visible":a,d=e.flex,u=void 0===d?1:d,x=e.p,f=void 0===x?1:x;return(0,o.jsx)(n.Z,{sx:{display:"flex",flexDirection:t?"row":"column",alignItems:t?"center":"left"===l?"flex-start":"right"===l?"flex-end":l,justifyContent:t?"flex-start":"flex-end",flex:u,minWidth:i||"70px",maxWidth:s,overflow:p,padding:f},children:r})}},99435:function(e,t,r){r.d(t,{M:function(){return l}});var n=r(29630),o=r(61953),i=r(84829),s=r(57609),c=r(85893),l=function(e){var t=e.sortName,r=e.sortDesc,l=e.sortKey,a=e.source,p=e.setSortName,d=e.setSortDesc,u=e.onClick,x=e.children,f=(0,i.Yh)((function(e){return e.trackEvent}));return(0,c.jsxs)(n.Z,{component:"div",variant:"subheader2",color:"text.secondary",noWrap:!0,onClick:function(){return u?u():!!l&&(e=l,f(s.uZ.SORT,{sort_by:e,tile:a}),d&&d(!1),p&&p(e),void(t===e&&d&&d(!r)));var e},sx:{cursor:u||l?"pointer":"default",display:"inline-flex",alignItems:"center"},children:[x,!!l&&(0,c.jsxs)(o.Z,{sx:{display:"inline-flex",flexDirection:"column",ml:1},children:[(0,c.jsx)(o.Z,{component:"span",sx:function(e){return{width:0,height:0,borderStyle:"solid",borderWidth:"0 4px 4px 4px",borderColor:"transparent transparent ".concat(t===l&&r?e.palette.text.secondary:e.palette.divider," transparent"),mb:.5}}}),(0,c.jsx)(o.Z,{component:"span",sx:function(e){return{width:0,height:0,borderStyle:"solid",borderWidth:"4px 4px 0 4px",borderColor:"".concat(t!==l||r?e.palette.divider:e.palette.text.secondary," transparent transparent transparent")}}})]})]})}},1475:function(e,t,r){r.d(t,{u:function(){return p}});var n=r(59499),o=r(4730),i=r(61953),s=r(85893),c=["px","children"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=function(e){var t=e.px,r=void 0===t?4:t,n=e.children,l=(0,o.Z)(e,c);return(0,s.jsx)(i.Z,a(a({},l),{},{sx:a({display:"flex",alignItems:"flex-end",px:r,pt:4,pb:1,position:"sticky",top:0,zIndex:100,bgcolor:"background.paper",borderBottom:"1px solid",borderColor:"divider"},l.sx),children:n}))}},32383:function(e,t,r){r.d(t,{H:function(){return p}});var n=r(59499),o=r(4730),i=r(61953),s=r(85893),c=["children","minHeight","px","button"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=function(e){var t=e.children,r=e.minHeight,n=void 0===r?71:r,l=e.px,p=void 0===l?4:l,d=e.button,u=(0,o.Z)(e,c);return(0,s.jsx)(i.Z,a(a({},u),{},{sx:a(a({display:"flex",alignItems:"center",minHeight:n,px:p,"&:not(:last-child)":{borderBottom:"1px solid",borderColor:"divider"}},d?{"&:hover":{bgcolor:"action.hover"}}:{}),u.sx),children:t}))}},14795:function(e,t,r){r.d(t,{C:function(){return a}});var n=r(49501),o=r(29630),i=r(68346),s=r(19952),c=r(85893),l=function(e){var t=e.market;return"Harmony"===t?(0,c.jsx)(n.cC,{id:"Due to the Horizon bridge exploit, certain assets on the Harmony network are not at parity with Ethereum, which affects the ZeroLend V3 Harmony market."}):"Fantom"===t?(0,c.jsx)(n.cC,{id:"Per the community, the Fantom market has been frozen."}):"Ethereum AMM"===t?(0,c.jsx)(n.cC,{id:"Per the community, the V2 AMM market has been deprecated."}):null},a=function(e){var t=e.marketName;return(0,c.jsx)(s.v,{severity:"error",children:(0,c.jsxs)(o.Z,{variant:"caption",children:[(0,c.jsx)(l,{market:t})," ",(0,c.jsx)(i.Z,{href:"https://discord.gg/zerolend",underline:"always",children:(0,c.jsx)(n.cC,{id:"Learn more"})})]})})}},15880:function(e,t,r){r.d(t,{o:function(){return y}});var n=r(69507),o=r(83793),i=r(35161),s=r(25169),c=r(42115),l=r(61953),a=r(44373),p=r(91655),d=r(29630),u=r(43629),x=r(68861),f=r(2180),h=r(85893),b=function(e){var t=e.children,r=e.warningComponent,n=e.symbol,o=e.iconSymbol,i=e.name,s=e.underlyingAsset,c=e.loading,b=e.currentMarket,y=e.showSupplyCapTooltips,j=void 0!==y&&y,m=e.showBorrowCapTooltips,v=void 0!==m&&m,g=e.showDebtCeilingTooltips,w=void 0!==g&&g,O=(0,u.ov)(),Z=O.supplyCap,C=O.borrowCap,P=O.debtCeiling;return(0,h.jsxs)(l.Z,{children:[(0,h.jsx)(a.Z,{}),(0,h.jsxs)(l.Z,{sx:{px:4,pt:4,pb:6},children:[(0,h.jsxs)(l.Z,{sx:{mb:4,display:"flex",alignItems:"center"},children:[c?(0,h.jsxs)(l.Z,{sx:{display:"inline-flex",alignItems:"center"},children:[(0,h.jsx)(p.Z,{variant:"circular",width:40,height:40}),(0,h.jsx)(l.Z,{sx:{ml:2},children:(0,h.jsx)(p.Z,{width:100,height:24})})]}):n&&s&&i&&b&&o&&(0,h.jsxs)(x.rU,{href:x.Z6.reserveOverview(s,b),sx:{display:"inline-flex",alignItems:"center"},children:[(0,h.jsx)(f.T1,{symbol:o,sx:{fontSize:"40px"}}),(0,h.jsxs)(l.Z,{sx:{ml:2},children:[(0,h.jsx)(d.Z,{variant:"h4",children:i}),(0,h.jsx)(d.Z,{variant:"subheader2",color:"text.muted",children:n})]}),j&&Z.displayMaxedTooltip({supplyCap:Z}),v&&C.displayMaxedTooltip({borrowCap:C}),w&&P.displayMaxedTooltip({debtCeiling:P})]}),r]}),t]})]})},y=function(e){var t=e.symbol,r=e.iconSymbol,l=e.name,a=e.children,p=e.underlyingAsset,d=e.loading,u=e.currentMarket,x=e.frozen,f=e.borrowEnabled,y=void 0===f||f,j=e.showSupplyCapTooltips,m=void 0!==j&&j,v=e.showBorrowCapTooltips,g=void 0!==v&&v,w=e.showDebtCeilingTooltips,O=void 0!==w&&w,Z=function(){var e=x&&"renFIL"!==t,r=x&&"renFIL"===t,l=!x&&"AMPL"===t,a="stETH"==t,p=!x&&!y;return(0,h.jsxs)(h.Fragment,{children:[e&&(0,h.jsx)(s.Q,{symbol:t,currentMarket:u}),r&&(0,h.jsx)(c.F,{}),l&&(0,h.jsx)(i.$,{}),a&&(0,h.jsx)(o.n,{}),p&&t&&u&&(0,h.jsx)(n.w,{symbol:t,currentMarket:u})]})};return(0,h.jsx)(b,{symbol:t,iconSymbol:r,name:l,underlyingAsset:p,warningComponent:(0,h.jsx)(Z,{}),loading:d,currentMarket:u,showSupplyCapTooltips:m,showBorrowCapTooltips:g,showDebtCeilingTooltips:O,children:a})}}}]);