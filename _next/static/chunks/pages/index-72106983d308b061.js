(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{62705:function(e,t,r){var n=r(55639).Symbol;e.exports=n},44239:function(e,t,r){var n=r(62705),i=r(89607),o=r(2333),s=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":s&&s in Object(e)?i(e):o(e)}},27561:function(e,t,r){var n=r(67990),i=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(i,""):e}},31957:function(e,t,r){var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=n},89607:function(e,t,r){var n=r(62705),i=Object.prototype,o=i.hasOwnProperty,s=i.toString,a=n?n.toStringTag:void 0;e.exports=function(e){var t=o.call(e,a),r=e[a];try{e[a]=void 0;var n=!0}catch(l){}var i=s.call(e);return n&&(t?e[a]=r:delete e[a]),i}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},55639:function(e,t,r){var n=r(31957),i="object"==typeof self&&self&&self.Object===Object&&self,o=n||i||Function("return this")();e.exports=o},67990:function(e){var t=/\s/;e.exports=function(e){for(var r=e.length;r--&&t.test(e.charAt(r)););return r}},23279:function(e,t,r){var n=r(13218),i=r(7771),o=r(14841),s=Math.max,a=Math.min;e.exports=function(e,t,r){var l,c,u,d,p,x,h=0,f=!1,b=!1,j=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var r=l,n=c;return l=c=void 0,h=t,d=e.apply(n,r)}function m(e){return h=e,p=setTimeout(g,t),f?y(e):d}function v(e){var r=e-x;return void 0===x||r>=t||r<0||b&&e-h>=u}function g(){var e=i();if(v(e))return O(e);p=setTimeout(g,function(e){var r=t-(e-x);return b?a(r,u-(e-h)):r}(e))}function O(e){return p=void 0,j&&l?y(e):(l=c=void 0,d)}function w(){var e=i(),r=v(e);if(l=arguments,c=this,x=e,r){if(void 0===p)return m(x);if(b)return clearTimeout(p),p=setTimeout(g,t),y(x)}return void 0===p&&(p=setTimeout(g,t)),d}return t=o(t)||0,n(r)&&(f=!!r.leading,u=(b="maxWait"in r)?s(o(r.maxWait)||0,t):u,j="trailing"in r?!!r.trailing:j),w.cancel=function(){void 0!==p&&clearTimeout(p),h=0,l=x=c=p=void 0},w.flush=function(){return void 0===p?d:O(i())},w}},13218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},37005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},33448:function(e,t,r){var n=r(44239),i=r(37005);e.exports=function(e){return"symbol"==typeof e||i(e)&&"[object Symbol]"==n(e)}},7771:function(e,t,r){var n=r(55639);e.exports=function(){return n.Date.now()}},14841:function(e,t,r){var n=r(27561),i=r(13218),o=r(33448),s=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return NaN;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var r=a.test(e);return r||l.test(e)?c(e.slice(2),r?2:8):s.test(e)?NaN:+e}},56951:function(e,t,r){"use strict";r.r(t),r.d(t,{MarketContainer:function(){return Ne},default:function(){return _e},marketContainerProps:function(){return Ie}});var n=r(59499),i=r(36336),o=r(61953),s=r(67294),a=r(98988),l=r(49501),c=r(80854),u=r(62097),d=r(61225),p=r(29630),x=r(45556),h=r(6022),f=r(85893),b=function(e){var t=e.searchTerm,r=e.subtitle,n=(0,u.Z)().breakpoints,i=(0,d.Z)(n.down("sm"));return(0,f.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",gap:1,pt:15,pb:32,px:4},children:[i?(0,f.jsxs)(o.Z,{sx:{textAlign:"center",maxWidth:"300px"},children:[(0,f.jsx)(p.Z,{variant:"h2",children:h.ag._("No search results{0}",{0:t&&" for"})}),t&&(0,f.jsxs)(p.Z,{sx:{overflowWrap:"anywhere"},variant:"h2",children:["'",t,"'"]})]}):(0,f.jsx)(p.Z,{sx:{textAlign:"center",maxWidth:"480px",overflowWrap:"anywhere"},variant:"h2",children:h.ag._("No search results{0}",{0:t&&" for '".concat(t,"'")})}),r&&(0,f.jsx)(p.Z,{sx:{width:"280px",textAlign:"center"},variant:"description",color:"text.secondary",children:r})]})},j=r(19952);var y=s.forwardRef((function(e,t){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),s.createElement("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"}))})),m=r(80562),v=r(81645),g=r(75084),O=r(8403);function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var D=function(e){var t=e.onSearchTermChange,r=e.searchPlaceholder,n=e.titleProps,i=e.title,a=(0,s.useState)(!1),c=a[0],x=a[1],h=(0,u.Z)().breakpoints,b=(0,d.Z)(h.down("sm")),j=b&&!c,w=!b||!c;return(0,f.jsxs)(o.Z,{sx:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[w&&(0,f.jsx)(p.Z,P(P({component:"div",variant:"h2",sx:{mr:4}},n),{},{children:i})),(0,f.jsxs)(o.Z,{sx:{height:"40px",width:c&&b?"100%":"unset",position:"relative",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[j&&(0,f.jsx)(m.Z,{onClick:function(){return x(!0)},children:(0,f.jsx)(v.Z,{children:(0,f.jsx)(y,{})})}),(c||!b)&&(0,f.jsxs)(o.Z,{sx:{width:"100%",display:"flex",justifyContent:"space-between"},children:[(0,f.jsx)(O.M,{wrapperSx:{width:{xs:"100%",sm:"340px"}},placeholder:r,onSearchTermChange:t}),b&&(0,f.jsx)(g.Z,{sx:{ml:2},onClick:function(){return x(!1),void t("")},children:(0,f.jsx)(p.Z,{variant:"buttonM",children:(0,f.jsx)(l.cC,{id:"Cancel"})})})]})]})]})},Z=r(14795),S=r(34220),C=r(46930),A=r(7775),k=r(14379),T=r(45884),E=r(99435),L=r(1475),B=r(36864),I=r(11163),N=r(14463),_=r(19547),z=r(2031),V=r(72095),U=r(32383),M=r(41024),W=r(68861),F=r(2180),Y=r(57609),R=function(e){var t=(0,B.Z)({},e),r=(0,I.useRouter)(),n=(0,C.f)().currentMarket,i=(0,z.Yh)((function(e){return e.trackEvent}));return(0,f.jsxs)(U.H,{px:6,minHeight:76,onClick:function(){i(Y.uZ.DETAILS_NAVIGATION,{type:"Row",assetName:t.name,asset:t.underlyingAsset,market:n}),r.push(W.Z6.reserveOverview(t.underlyingAsset,n))},sx:{cursor:"pointer"},button:!0,"data-cy":"marketListItemListItem_".concat(t.symbol.toUpperCase()),children:[(0,f.jsxs)(T.h,{isRow:!0,maxWidth:280,children:[(0,f.jsx)(F.T1,{symbol:t.iconSymbol,fontSize:"large"}),(0,f.jsxs)(o.Z,{sx:{pl:3.5,overflow:"hidden"},children:[(0,f.jsx)(p.Z,{variant:"h4",noWrap:!0,children:t.name}),(0,f.jsx)(o.Z,{sx:{p:{xs:"0",xsm:"3.625px 0px"}},children:(0,f.jsx)(p.Z,{variant:"subheader2",color:"text.muted",noWrap:!0,children:t.symbol})})]})]}),(0,f.jsxs)(T.h,{children:[(0,f.jsx)(M.B,{compact:!0,value:t.totalLiquidity,variant:"main16"}),(0,f.jsx)(_.i,{value:t.totalLiquidityUSD})]}),(0,f.jsx)(T.h,{children:(0,f.jsx)(V.J,{value:t.supplyAPY,incentives:t.aIncentivesData||[],symbol:t.symbol,variant:"main16",symbolsVariant:"secondary16",isSupplyApy:!0})}),(0,f.jsx)(T.h,{children:t.borrowingEnabled||Number(t.totalDebt)>0?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(M.B,{compact:!0,value:t.totalDebt,variant:"main16"})," ",(0,f.jsx)(_.i,{value:t.totalDebtUSD})]}):(0,f.jsx)(N.J,{variant:"secondary14",color:"text.secondary"})}),(0,f.jsxs)(T.h,{children:[(0,f.jsx)(V.J,{value:Number(t.totalVariableDebtUSD)>0?t.variableBorrowAPY:"-1",incentives:t.vIncentivesData||[],symbol:t.symbol,variant:"main16",symbolsVariant:"secondary16"}),!t.borrowingEnabled&&Number(t.totalVariableDebt)>0&&!t.isFrozen&&(0,f.jsx)(_.i,{value:"Disabled"})]}),(0,f.jsxs)(T.h,{children:[(0,f.jsx)(V.J,{value:Number(t.totalStableDebtUSD)>0?t.stableBorrowAPY:"-1",incentives:t.sIncentivesData||[],symbol:t.symbol,variant:"main16",symbolsVariant:"secondary16"}),!t.borrowingEnabled&&Number(t.totalStableDebt)>0&&!t.isFrozen&&(0,f.jsx)(_.i,{value:"Disabled"})]}),(0,f.jsx)(T.h,{minWidth:95,maxWidth:95,align:"right",children:(0,f.jsx)(g.Z,{variant:"outlined",component:W.rU,href:W.Z6.reserveOverview(t.underlyingAsset,n),onClick:function(){return i(Y.uZ.DETAILS_NAVIGATION,{type:"Button",assetName:t.name,asset:t.underlyingAsset,market:n})},children:(0,f.jsx)(l.cC,{id:"Details"})})})]})},X=r(91655),G=function(){return(0,f.jsxs)(U.H,{px:6,minHeight:76,children:[(0,f.jsxs)(T.h,{isRow:!0,maxWidth:280,children:[(0,f.jsx)(X.Z,{variant:"circular",width:32,height:32}),(0,f.jsx)(o.Z,{sx:{pl:3.5,overflow:"hidden"},children:(0,f.jsx)(X.Z,{width:75,height:24})})]}),(0,f.jsx)(T.h,{children:(0,f.jsx)(X.Z,{width:70,height:24})}),(0,f.jsx)(T.h,{children:(0,f.jsx)(X.Z,{width:70,height:24})}),(0,f.jsx)(T.h,{children:(0,f.jsx)(X.Z,{width:70,height:24})}),(0,f.jsx)(T.h,{children:(0,f.jsx)(X.Z,{width:70,height:24})}),(0,f.jsx)(T.h,{children:(0,f.jsx)(X.Z,{width:70,height:24})}),(0,f.jsx)(T.h,{maxWidth:95,minWidth:95,align:"right",children:(0,f.jsx)(X.Z,{width:74,height:38})})]})},q=r(44373),K=r(92391),J=r(15880),H=function(e){var t=(0,B.Z)({},e),r=(0,C.f)().currentMarket,n=(0,z.Yh)((function(e){return e.trackEvent}));return(0,f.jsxs)(J.o,{symbol:t.symbol,iconSymbol:t.iconSymbol,name:t.name,underlyingAsset:t.underlyingAsset,currentMarket:r,children:[(0,f.jsx)(K.X,{caption:(0,f.jsx)(l.cC,{id:"Total supplied"}),captionVariant:"description",mb:3,children:(0,f.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",alignItems:{xs:"flex-end"},justifyContent:"center",textAlign:"center"},children:[(0,f.jsx)(M.B,{compact:!0,value:t.totalLiquidity,variant:"secondary14"}),(0,f.jsx)(_.i,{value:t.totalLiquidityUSD,rightAlign:!0})]})}),(0,f.jsx)(K.X,{caption:(0,f.jsx)(l.cC,{id:"Supply APY"}),captionVariant:"description",mb:3,align:"flex-start",children:(0,f.jsx)(V.J,{align:"flex-end",value:t.supplyAPY,incentives:t.aIncentivesData||[],symbol:t.symbol,variant:"secondary14",isSupplyApy:!0})}),(0,f.jsx)(q.Z,{sx:{mb:3}}),(0,f.jsx)(K.X,{caption:(0,f.jsx)(l.cC,{id:"Total borrowed"}),captionVariant:"description",mb:3,children:(0,f.jsx)(o.Z,{sx:{display:"flex",flexDirection:"column",alignItems:{xs:"flex-end"},justifyContent:"center",textAlign:"center"},children:Number(t.totalDebt)>0?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(M.B,{compact:!0,value:t.totalDebt,variant:"secondary14"}),(0,f.jsx)(_.i,{value:t.totalDebtUSD,rightAlign:!0})]}):(0,f.jsx)(N.J,{variant:"secondary14",color:"text.secondary"})})}),(0,f.jsx)(K.X,{caption:(0,f.jsx)(k.B,{text:(0,f.jsx)(l.cC,{id:"Borrow APY, variable"}),variant:"description"},"APY_list_mob_variable_type"),captionVariant:"description",mb:3,align:"flex-start",children:(0,f.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,f.jsx)(V.J,{align:"flex-end",value:Number(t.totalVariableDebtUSD)>0?t.variableBorrowAPY:"-1",incentives:t.vIncentivesData||[],symbol:t.symbol,variant:"secondary14"}),!t.borrowingEnabled&&Number(t.totalVariableDebt)>0&&!t.isFrozen&&(0,f.jsx)(_.i,{value:"Disabled"})]})}),(0,f.jsx)(K.X,{caption:(0,f.jsx)(A.s,{text:(0,f.jsx)(l.cC,{id:"Borrow APY, stable"}),variant:"description"},"APY_list_mob_stable_type"),captionVariant:"description",mb:4,align:"flex-start",children:(0,f.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,f.jsx)(V.J,{align:"flex-end",value:Number(t.totalStableDebtUSD)>0?t.stableBorrowAPY:"-1",incentives:t.sIncentivesData||[],symbol:t.symbol,variant:"secondary14"}),!t.borrowingEnabled&&Number(t.totalStableDebt)>0&&!t.isFrozen&&(0,f.jsx)(_.i,{value:"Disabled"})]})}),(0,f.jsx)(g.Z,{variant:"outlined",component:W.rU,href:W.Z6.reserveOverview(t.underlyingAsset,r),fullWidth:!0,onClick:function(){n(Y.uZ.DETAILS_NAVIGATION,{type:"button",asset:t.underlyingAsset,market:r,assetName:t.name})},children:(0,f.jsx)(l.cC,{id:"View details"})})]})},$=function(){return(0,f.jsxs)(J.o,{loading:!0,children:[(0,f.jsx)(K.X,{caption:(0,f.jsx)(X.Z,{width:100,height:20}),captionVariant:"description",mb:3,children:(0,f.jsx)(X.Z,{width:45,height:20})}),(0,f.jsx)(K.X,{caption:(0,f.jsx)(X.Z,{width:100,height:20}),captionVariant:"description",mb:3,align:"flex-start",children:(0,f.jsx)(X.Z,{width:45,height:20})}),(0,f.jsx)(q.Z,{sx:{mb:3}}),(0,f.jsx)(K.X,{caption:(0,f.jsx)(X.Z,{width:100,height:20}),captionVariant:"description",mb:3,children:(0,f.jsx)(X.Z,{width:45,height:20})}),(0,f.jsx)(K.X,{caption:(0,f.jsx)(X.Z,{width:100,height:20}),captionVariant:"description",mb:3,align:"flex-start",children:(0,f.jsx)(X.Z,{width:45,height:20})}),(0,f.jsx)(K.X,{caption:(0,f.jsx)(X.Z,{width:100,height:20}),captionVariant:"description",mb:4,align:"flex-start",children:(0,f.jsx)(X.Z,{width:45,height:20})}),(0,f.jsx)(X.Z,{width:"100%",height:38})]})};function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var te=[{title:(0,f.jsx)(l.cC,{id:"Asset"}),sortKey:"symbol"},{title:(0,f.jsx)(l.cC,{id:"Total supplied"}),sortKey:"totalLiquidityUSD"},{title:(0,f.jsx)(l.cC,{id:"Supply APY"}),sortKey:"supplyAPY"},{title:(0,f.jsx)(l.cC,{id:"Total borrowed"}),sortKey:"totalDebtUSD"},{title:(0,f.jsx)(k.B,{text:(0,f.jsx)(l.cC,{id:"Borrow APY, variable"}),variant:"subheader2"},"APY_list_variable_type"),sortKey:"variableBorrowAPY"},{title:(0,f.jsx)(A.s,{text:(0,f.jsx)(l.cC,{id:"Borrow APY, stable"}),variant:"subheader2"},"APY_list_stable_type"),sortKey:"stableBorrowAPY"}];function re(e){var t=e.reserves,r=e.loading,n=(0,d.Z)("(max-width:1125px)"),i=(0,s.useState)(""),o=i[0],a=i[1],l=(0,s.useState)(!1),c=l[0],u=l[1];return c?"symbol"===o?t.sort((function(e,t){return e.symbol.toUpperCase()<t.symbol.toUpperCase()?-1:1})):t.sort((function(e,t){return e[o]-t[o]})):"symbol"===o?t.sort((function(e,t){return t.symbol.toUpperCase()<e.symbol.toUpperCase()?-1:1})):t.sort((function(e,t){return t[o]-e[o]})),r?n?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)($,{}),(0,f.jsx)($,{}),(0,f.jsx)($,{})]}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(G,{}),(0,f.jsx)(G,{}),(0,f.jsx)(G,{}),(0,f.jsx)(G,{}),(0,f.jsx)(G,{})]}):0===t.length?null:(0,f.jsxs)(f.Fragment,{children:[!n&&(0,f.jsxs)(L.u,{px:6,children:[te.map((function(e){return(0,f.jsx)(T.h,{isRow:"symbol"===e.sortKey,maxWidth:"symbol"===e.sortKey?280:void 0,children:(0,f.jsx)(E.M,{sortName:o,sortDesc:c,setSortName:a,setSortDesc:u,sortKey:e.sortKey,source:"Markets Page",children:e.title})},e.sortKey)})),(0,f.jsx)(T.h,{maxWidth:95,minWidth:95})]}),t.map((function(e){return"KS-LP USDC-USDT"===e.symbol||"PEPE"===e.symbol?null:n?(0,s.createElement)(H,ee(ee({},e),{},{key:e.id})):(0,s.createElement)(R,ee(ee({},e),{},{key:e.id}))}))]})}var ne=r(41551),ie=r(69125),oe=function(){var e=(0,d.Z)("(min-width:1125px)");return(0,f.jsx)(o.Z,{sx:{pt:5,mb:10,px:{md:6},overflow:"hidden",display:"flex",flexDirection:"column",justifyContent:"flex-end"},children:(0,f.jsxs)(o.Z,{component:W.rU,href:"https://airdrop.zerolend.xyz",sx:function(e){var t;return t={borderRadius:{md:4},display:"flex",backgroundColor:"dark"===e.palette.mode?"#39375A80":"#C9B3F94D",position:"relative",alignItems:{xs:"none",xsm:"center"},justifyContent:{xs:"space-around",xsm:"none"},flexDirection:{xs:"column",xsm:"row"}},(0,n.Z)(t,e.breakpoints.up(1125),{padding:{xs:"24px 24px 24px 240x",lg:"24px 32px 24px 240x"}}),(0,n.Z)(t,"padding",{xs:"16px"}),(0,n.Z)(t,"gap",{xs:6}),t},children:[(0,f.jsx)(o.Z,{sx:{display:"flex",justifyContent:"space-between",width:"100%",mr:{lg:"5%"},alignItems:{xs:"none",md:"middle"},flexDirection:{xs:"column",md:"row"},gap:{xs:3},height:"100%"},children:(0,f.jsxs)(o.Z,{sx:{pr:{xs:"140px",xsm:0},cursor:"pointer",zIndex:100,minWidth:{md:232}},children:[(0,f.jsx)(p.Z,{sx:function(e){var t;return t={},(0,n.Z)(t,e.breakpoints.up(1125),{typography:"h3"}),(0,n.Z)(t,"typography",{xs:"subheader1",md:"h4"}),t},children:(0,f.jsx)(l.cC,{id:"Join the ZERO Gravity Campaign \ud83c\udf89"})}),(0,f.jsx)(p.Z,{sx:function(e){var t;return t={},(0,n.Z)(t,e.breakpoints.up(1125),{typography:"description"}),(0,n.Z)(t,"typography",{xs:"caption"}),t},color:"text.secondary",children:"Borrow/Supply liquidity into the protocol and start farming points to get a share of the potential ZERO airdrop (alongside your earlyZERO rewards)."})]})}),(0,f.jsx)(g.Z,{variant:"contained",component:W.rU,size:e?"medium":"large",href:"https://airdrop.zerolend.xyz",sx:{marginLeft:{xs:"none",xsm:"auto"},whiteSpace:"no-wrap",minWidth:"max-content"},children:(0,f.jsx)(l.cC,{id:"View your Points"})})]})})};function se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ae(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?se(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):se(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var le=function(){var e=(0,S.HT)(),t=e.reserves,r=e.loading,n=(0,C.f)(),i=n.currentMarket,a=n.currentMarketData,h=n.currentNetworkConfig,y=(0,s.useState)(""),m=y[0],v=y[1],g=(0,u.Z)().breakpoints,O=(0,d.Z)(g.down("sm")),w=(0,ie.hN)(t),P=t.filter((function(e){return e.isActive})).filter((function(e){return e!==w})).filter((function(e){if(!m)return!0;var t=m.toLowerCase().trim();return e.symbol.toLowerCase().includes(t)||e.name.toLowerCase().includes(t)||e.underlyingAsset.toLowerCase().includes(t)})).map((function(e){return ae(ae({},e),e.isWrappedBaseAsset?(0,ne.QD)({symbol:h.baseAssetSymbol,underlyingAsset:c.hP.toLowerCase()}):{})})),A=!t.some((function(e){return!e.isFrozen}))&&["Harmony","Fantom","Ethereum AMM"].includes(a.marketTitle),k=P.filter((function(e){return!e.isFrozen&&!e.isPaused})),T=P.filter((function(e){return e.isFrozen||e.isPaused})),E=function(e,t){if(!ie.uF.includes(e))return!1;if(!t)return!0;var r=t.toLowerCase().trim();return r.length<=3&&ie.JP.toLowerCase().includes(r)}(i,m);return(0,f.jsxs)(x.l,{titleComponent:(0,f.jsx)(D,{onSearchTermChange:v,title:(0,f.jsxs)(f.Fragment,{children:[a.marketTitle," ",(0,f.jsx)(l.cC,{id:"assets"})]}),searchPlaceholder:O?"Search asset":"Search asset name, symbol, or address"}),children:[A&&(0,f.jsx)(o.Z,{mx:6,children:(0,f.jsx)(Z.C,{marketName:a.marketTitle,forum:!0})}),(0,f.jsx)(o.Z,{mb:4,children:(0,f.jsx)(oe,{})}),(0,f.jsx)(re,{reserves:k,loading:r}),T.length>0&&(0,f.jsxs)(o.Z,{sx:{mt:10,px:{xs:4,xsm:6}},children:[(0,f.jsx)(p.Z,{variant:"h4",mb:4,children:(0,f.jsx)(l.cC,{id:"Frozen or paused assets"})}),(0,f.jsx)(j.v,{severity:"info",children:(0,f.jsx)(l.cC,{id:"These assets are temporarily frozen or paused by ZeroLend community decisions, meaning that further supply / borrow, or rate swap of these assets are unavailable. Withdrawals and debt repayments are allowed."})})]}),(0,f.jsx)(re,{reserves:T,loading:r}),!r&&0===P.length&&!E&&(0,f.jsx)(b,{searchTerm:m,subtitle:(0,f.jsx)(l.cC,{id:"We couldn't find any assets related to your search. Try again with a different asset name, symbol, or address."})})]})},ce=r(1279),ue=r(74815),de=r(87369),pe=r(58527);function xe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function he(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?xe(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):xe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var fe=function(e){var t=(0,B.Z)({},e);return(0,f.jsx)(pe.G,he(he({},t),{},{children:(0,f.jsx)(l.cC,{id:"Blast Gold Points are points that the protocol receives from BLAST for holding liquidity. 100% of all Blast Points will be distributed back to liquidity providers."})}))};function be(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function je(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?be(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):be(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ye=function(e){var t=(0,B.Z)({},e);return(0,f.jsx)(pe.G,je(je({},t),{},{children:(0,f.jsx)(l.cC,{id:"Blast Gold Points that protocol received from BLAST to developers. 100% of all Blast Gold will be distributed back to borrowers."})}))},me=r(50029),ve=r(87794),ge=r.n(ve);function Oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function we(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Oe(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Oe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Pe={totalBlastPoints:0,totalBlastGoldPoints:0,totalEigenLayerPoints:0,totalXPLineaPoints:0,totalRenzoPoints:0,totalKelpMilesPoints:0},De=function(){var e=(0,s.useState)({isLoading:!0,value:Pe}),t=e[0],r=e[1],n=(0,s.useCallback)((0,me.Z)(ge().mark((function e(){return ge().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"https://api.zerolend.xyz/protocol/points",fetch("https://api.zerolend.xyz/protocol/points",{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,POST,OPTIONS","Access-Control-Allow-Headers":"access-control-allow-headers,access-control-allow-methods,access-control-allow-origin,content-type"}}).then((function(e){return e.json()})).then((function(e){var t=Pe;e&&(t.totalBlastPoints=e.blastPoints||0,t.totalEigenLayerPoints=e.elPoints||0,t.totalRenzoPoints=e.renzoPoints||0,t.totalKelpMilesPoints=e.kelpMiles||0),r({isLoading:!1,value:we({},t)})})).catch((function(e){console.log("useGetProtocolPoints error",e)}));case 3:case"end":return e.stop()}}),e)}))),[]);return(0,s.useEffect)((function(){r({isLoading:!0,value:Pe}),n().catch((function(e){r({isLoading:!1,value:Pe}),console.error("Failed to fetch useGetProtocolPoints Values: ".concat(e.stack))}))}),[n]),t};function Ze(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Se(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ze(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ze(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ce=function(e){var t=(0,B.Z)({},e);return(0,f.jsx)(pe.G,Se(Se({},t),{},{children:(0,f.jsx)(l.cC,{id:"These are total EigenLayer points that has been accumulated by the protocol. All EigenLayer points will be distributed back to liquidity providers. EigenLayer points allow users to become eligible for the potential EigenLayer airdrop."})}))};function Ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ke(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ae(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ae(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Te=function(e){var t=(0,B.Z)({},e);return(0,f.jsx)(pe.G,ke(ke({},t),{},{children:(0,f.jsx)(l.cC,{id:"These are total Linea XP points that protocol has accumulated. Linea XP points allows users to become eligible for a potential Linea airdrop."})}))},Ee=function(){var e=(0,S.HT)(),t=e.reserves,r=e.loading,n=(0,C.f)().currentMarketData,i=(0,u.Z)(),s=(0,d.Z)(i.breakpoints.down("sm")),a=De(),c=t.reduce((function(e,t){return{totalLiquidity:e.totalLiquidity.plus(t.totalLiquidityUSD),totalDebt:e.totalDebt.plus(t.totalDebtUSD)}}),{totalLiquidity:(0,ce.hE)(0),totalDebt:(0,ce.hE)(0)}),p=s?"main16":"main21",x=s?"secondary16":"secondary21";return(0,f.jsxs)(ue.f,{containerProps:Ie,pageTitle:(0,f.jsxs)(o.Z,{display:"flex",alignItems:"center",children:[(0,f.jsx)(F.T1,{symbol:"zero",fontSize:"large",sx:{mr:2}}),(0,f.jsx)(l.cC,{id:"Welcome to ZeroLend \ud83d\ude80"})]}),pageDesc:(0,f.jsx)(l.cC,{id:"A powerful decentralized lending protocol. Lend/Borrow with high capital efficiency and low interest fees"}),withMarketSwitcher:!0,children:[(0,f.jsx)(de.d,{hideIcon:!0,title:(0,f.jsx)(l.cC,{id:"Total market size"}),loading:r,children:(0,f.jsx)(M.B,{value:c.totalLiquidity.toString(),symbol:"USD",variant:p,visibleDecimals:2,compact:!0,symbolsColor:"#A5A8B6",symbolsVariant:x})}),(0,f.jsx)(de.d,{hideIcon:!0,title:(0,f.jsx)(l.cC,{id:"Total available"}),loading:r,children:(0,f.jsx)(M.B,{value:c.totalLiquidity.minus(c.totalDebt).toString(),symbol:"USD",variant:p,visibleDecimals:2,compact:!0,symbolsColor:"#A5A8B6",symbolsVariant:x})}),(0,f.jsx)(de.d,{hideIcon:!0,title:(0,f.jsx)(l.cC,{id:"Total borrows"}),loading:r,children:(0,f.jsx)(M.B,{value:c.totalDebt.toString(),symbol:"USD",variant:p,visibleDecimals:2,compact:!0,symbolsColor:"#A5A8B6",symbolsVariant:x})}),81457===n.chainId&&(0,f.jsx)(de.d,{hideIcon:!0,title:(0,f.jsxs)("div",{style:{display:"flex"},children:[(0,f.jsx)(l.cC,{id:"Total BLAST Points"}),(0,f.jsx)(fe,{event:{eventName:Y.vh.TOOL_TIP}})]}),loading:r,children:(0,f.jsxs)(o.Z,{display:"flex",alignItems:"center",children:[(0,f.jsx)(F.T1,{symbol:"blast",fontSize:"small",sx:{mr:1}}),(0,f.jsx)(M.B,{value:a.value.totalBlastPoints.toString(),sx:{color:"#FCFC03"},variant:p,visibleDecimals:2,symbol:"Pts",compact:!0,symbolsColor:"#A5A8B6",symbolsVariant:x})]})}),81457===n.chainId&&(0,f.jsx)(de.d,{hideIcon:!0,title:(0,f.jsxs)("div",{style:{display:"flex"},children:[(0,f.jsx)(l.cC,{id:"Total BLAST GOLD Points"}),(0,f.jsx)(ye,{event:{eventName:Y.vh.TOOL_TIP}})]}),loading:r,children:(0,f.jsxs)(o.Z,{display:"flex",alignItems:"center",children:[(0,f.jsx)(F.T1,{symbol:"blast",fontSize:"small",sx:{mr:1}}),(0,f.jsx)(M.B,{value:a.value.totalBlastGoldPoints.toString(),sx:{color:"#FCFC03"},variant:p,visibleDecimals:2,symbol:"Pts",compact:!0,symbolsColor:"#A5A8B6",symbolsVariant:x})]})}),59144===n.chainId&&(0,f.jsx)(de.d,{hideIcon:!0,title:(0,f.jsxs)("div",{style:{display:"flex"},children:[(0,f.jsx)(l.cC,{id:"Total Linea XP"}),(0,f.jsx)(Te,{event:{eventName:Y.vh.TOOL_TIP}})]}),loading:r,children:(0,f.jsxs)(o.Z,{display:"flex",alignItems:"center",children:[(0,f.jsx)(F.T1,{symbol:"linea",fontSize:"small",sx:{mr:1}}),(0,f.jsx)(M.B,{value:a.value.totalXPLineaPoints.toString(),variant:p,visibleDecimals:2,symbol:"XP",compact:!0,symbolsColor:"#A5A8B6",symbolsVariant:x})]})}),1===n.chainId&&(0,f.jsx)(de.d,{hideIcon:!0,title:(0,f.jsxs)("div",{style:{display:"flex"},children:[(0,f.jsx)(l.cC,{id:"Total EigenLayer Points"}),(0,f.jsx)(Ce,{event:{eventName:Y.vh.TOOL_TIP}})]}),loading:r,children:(0,f.jsxs)(o.Z,{display:"flex",alignItems:"center",children:[(0,f.jsx)(F.T1,{symbol:"eigenlayer",fontSize:"small",sx:{mr:1}}),(0,f.jsx)(M.B,{value:a.value.totalEigenLayerPoints.toString(),variant:p,symbol:"Pts",visibleDecimals:2,compact:!0,symbolsColor:"#A5A8B6",symbolsVariant:x})]})})]})};function Le(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Be(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Le(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Le(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ie={sx:{display:"flex",flexDirection:"column",flex:1,pb:"39px",px:{xs:2,xsm:5,sm:12,md:5,lg:0,xl:"96px",xxl:0},maxWidth:{xs:"unset",lg:"1240px",xl:"unset",xxl:"1440px"}}},Ne=function(e){var t=e.children;return(0,f.jsx)(i.Z,Be(Be({},Ie),{},{children:t}))};function _e(){var e=(0,z.Yh)((function(e){return e.trackEvent}));return(0,s.useEffect)((function(){e("Page Viewed",{"Page Name":"Markets"})}),[e]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(Ee,{}),(0,f.jsx)(o.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",flex:1,mt:{xs:"-32px",lg:"-46px",xl:"-44px",xxl:"-48px"}},children:(0,f.jsx)(Ne,{children:(0,f.jsx)(le,{})})})]})}_e.getLayout=function(e){return(0,f.jsx)(a.Z,{children:e})}},19547:function(e,t,r){"use strict";r.d(t,{i:function(){return l}});var n=r(49501),i=r(29630),o=r(61953),s=(r(67294),r(41024)),a=r(85893);function l(e){var t=e.value,r=e.rightAlign;return(0,a.jsx)(o.Z,{sx:{p:r?{xs:"0",xsm:"2px 0"}:{xs:"0",xsm:"3.625px 0px"},display:"inline-flex",alignItems:"center",justifyContent:"center"},children:"Disabled"===t?(0,a.jsxs)(i.Z,{component:"span",sx:{mr:.5},variant:"secondary12",color:"text.muted",children:["(",(0,a.jsx)(n.cC,{id:"Disabled"}),")"]}):(0,a.jsx)(s.B,{compact:!0,value:t,variant:"secondary12",color:"text.secondary",symbolsVariant:"secondary12",symbolsColor:"text.secondary",symbol:"USD"})})}},8403:function(e,t,r){"use strict";r.d(t,{M:function(){return b}});var n=r(59499),i=r(53737),o=r(33740),s=r(62097),a=r(61225),l=r(61953),c=r(81011),u=r(80562),d=r(23279),p=r.n(d),x=r(67294),h=r(85893);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var b=function(e){var t=e.onSearchTermChange,r=e.wrapperSx,d=e.placeholder,b=(0,x.useRef)(null),j=(0,x.useState)(""),y=j[0],m=j[1],v=(0,s.Z)().breakpoints,g=(0,a.Z)(v.down("sm")),O=(0,x.useMemo)((function(){return p()((function(e){t(e)}),300)}),[t]);return(0,h.jsxs)(l.Z,{sx:function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({display:"flex",alignItems:"center",gap:2,border:"1px solid ".concat(e.palette.divider),borderRadius:"6px",height:"36px"},r)},children:[(0,h.jsx)(l.Z,{sx:{ml:2,mt:1},children:(0,h.jsx)(i.Z,{height:16})}),(0,h.jsx)(c.ZP,{autoFocus:g,inputRef:b,sx:{width:"100%",fontSize:{xs:16,sm:14}},placeholder:d,value:y,onChange:function(e){m(e.target.value),O(e.target.value)}}),(0,h.jsx)(u.Z,{sx:{p:0,mr:2,visibility:y?"visible":"hidden"},onClick:function(){return function(){var e;m(""),t(""),null===(e=b.current)||void 0===e||e.focus()}()},children:(0,h.jsx)(o.Z,{height:16})})]})}},86057:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(56951)}])},53737:function(e,t,r){"use strict";var n=r(67294);const i=n.forwardRef((function(e,t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}))}));t.Z=i}},function(e){e.O(0,[249,980,725,774,888,179],(function(){return t=86057,e(e.s=t);var t}));var t=e.O();_N_E=t}]);