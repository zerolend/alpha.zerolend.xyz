(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[562],{96471:function(e,t,i){"use strict";var n=i(64836);t.Z=void 0;var r=n(i(64938)),s=i(85893),l=(0,r.default)((0,s.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBackOutlined");t.Z=l},21386:function(e,t,i){"use strict";var n=i(64836);t.Z=void 0;var r=n(i(64938)),s=i(85893),l=(0,r.default)((0,s.jsx)("path",{d:"M9 16.17 5.53 12.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0L9 16.17z"}),"CheckRounded");t.Z=l},24756:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return Ie}});var n,r=i(49501),s=i(62097),l=i(61225),a=i(61953),o=i(44373),c=i(67294),d=i(45745),x=i(15446),h=i(99528),u=i(34220),p=i(43478),m=i(90452),v=i(98988),j=i(77537),g=i(26079),b=i(1279),f=i(58771),y=i(70918),Z=i(22841),w=i(75158),C=i(29630),k=i(75084),S=i(81645),A=i(25563),I=i(92391),O=i(19952),T=i(18384),B=i(8195),D=i(46930),M=i(80227),P=i(91655),N=i(96875),_=i(85893),E=function(e){var t=e.caption,i=e.hfCurrent,n=e.hfAfter,s=e.loading;return(0,_.jsx)(I.X,{caption:t,sx:{mb:{xs:3,lg:4},"&:last-of-type":{mb:0}},captionVariant:"description",children:(0,_.jsxs)(a.Z,{sx:{textAlign:"right"},children:[(0,_.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end"},children:[s?(0,_.jsx)(P.Z,{width:50}):(0,_.jsx)(N.o,{value:i}),(0,_.jsx)(S.Z,{sx:{fontSize:"16px",color:"text.primary",mx:1},children:(0,_.jsx)(M.Z,{})}),s?(0,_.jsx)(P.Z,{width:50}):(0,_.jsx)(N.o,{value:n})]}),(0,_.jsxs)(C.Z,{variant:"helperText",color:"text.secondary",children:[(0,_.jsx)(r.cC,{id:"Liquidation at"})," <1.0"]})]})})};!function(e){e[e.NO_SELECTION=0]="NO_SELECTION",e[e.V2_HF_TOO_LOW=1]="V2_HF_TOO_LOW",e[e.V3_HF_TOO_LOW=2]="V3_HF_TOO_LOW",e[e.INSUFFICIENT_LTV=3]="INSUFFICIENT_LTV"}(n||(n={}));var R=function(e){var t=e.hfV2Current,i=e.hfV2AfterChange,o=e.hfV3Current,d=e.v3SummaryAfterMigration,x=e.disableButton,h=e.enteringIsolationMode,u=e.loading,p=(0,s.Z)().breakpoints,m=(0,l.Z)(p.down("sm")),v=(0,D.f)().currentMarket,j=(0,A.hu)(v).market,g=(0,B.vR)().openV3Migration,M=(0,c.useState)(!1),P=M[0],N=M[1],R=d.healthFactor,V=d.totalCollateralMarketReferenceCurrency,L=d.totalBorrowsMarketReferenceCurrency,F=d.currentLoanToValue,z=(0,b.hE)(V).multipliedBy(F),W=(0,b.hE)(L).isGreaterThan(z),U=void 0;x&&P?U=n.NO_SELECTION:Number(i)<1.005&&"-1"!==i?U=n.V2_HF_TOO_LOW:Number(R)<1.005&&"-1"!==R?U=n.V3_HF_TOO_LOW:W&&(U=n.INSUFFICIENT_LTV);var Y=function(){switch(U){case n.NO_SELECTION:return(0,_.jsx)(r.cC,{id:"No assets selected to migrate."});case n.V2_HF_TOO_LOW:return(0,_.jsx)(r.cC,{id:"This action will reduce V2 health factor below liquidation threshold. retain collateral or migrate borrow position to continue."});case n.V3_HF_TOO_LOW:return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(r.cC,{id:"This action will reduce health factor of V3 below liquidation threshold. Increase migrated collateral or reduce migrated borrow to continue."})});case n.INSUFFICIENT_LTV:return(0,_.jsx)(r.cC,{id:"The loan to value of the migrated positions would cause liquidation. Increase migrated collateral or reduce migrated borrow to continue."});default:return(0,_.jsx)(_.Fragment,{})}};return(0,_.jsxs)(a.Z,{sx:{display:"flex",flexDirection:{xs:"column-reverse",md:"row"},alignItems:"flex-start",justifyContent:"space-between"},children:[(0,_.jsxs)(y.Z,{sx:{p:m?"20px 16px":"20px 30px",mb:{xs:6,md:0},width:{xs:"100%",md:"45%",lg:"35%"}},children:[(0,_.jsx)(I.X,{caption:(0,_.jsx)(r.cC,{id:"Review changes to continue"}),captionVariant:"h3",sx:{mb:6}}),(0,_.jsx)(E,{caption:(0,_.jsx)(r.cC,{id:"Health Factor ({0} v2)",values:{0:j.marketTitle}}),hfCurrent:t,hfAfter:i,loading:u}),(0,_.jsx)(E,{caption:(0,_.jsx)(r.cC,{id:"Health Factor ({0} v3)",values:{0:"Ethereum AMM"===j.marketTitle?"Ethereum":j.marketTitle}}),hfCurrent:o,hfAfter:R,loading:u}),void 0!==U&&(0,_.jsx)(O.v,{severity:"warning",children:(0,_.jsx)(Y,{})}),h&&(0,_.jsx)(T.i,{severity:"warning"}),void 0===U&&(0,_.jsx)(a.Z,{sx:{height:"44px",backgroundColor:"background.surface",borderRadius:"4px",display:"flex",justifyContent:"center",mb:4},"data-cy":"migration-risk-checkbox",children:(0,_.jsx)(Z.Z,{sx:{margin:0},control:(0,_.jsx)(w.Z,{checked:P,onChange:function(){return N(!P)},size:"small"}),label:(0,_.jsx)(C.Z,{variant:"description",sx:{position:"relative",top:1},children:(0,_.jsx)(r.cC,{id:"I fully understand the risks of migrating."})})})}),(0,_.jsx)(a.Z,{children:(0,_.jsx)(k.Z,{onClick:g,disabled:!P||void 0!==U,sx:{width:"100%",height:"44px"},variant:P&&void 0===U?"gradient":"contained",size:"medium","data-cy":"migration-button",children:(0,_.jsx)(r.cC,{id:"Preview tx and migrate"})})})]}),(0,_.jsxs)(a.Z,{sx:{width:{xs:"100%",md:"50%",lg:"60%"},p:m?"20px 16px":"20px 30px",mt:m?4:0},children:[(0,_.jsxs)(C.Z,{variant:"h3",sx:{fontWeight:700,mb:{xs:4,lg:6},display:"flex",alignItems:"center"},children:[(0,_.jsx)(S.Z,{sx:{fontSize:"24px",color:"warning.main",mr:2},children:(0,_.jsx)(f.Z,{})}),(0,_.jsx)(r.cC,{id:"Migration risks"})]}),(0,_.jsx)(C.Z,{sx:{mb:{xs:3,lg:4}},children:(0,_.jsx)(r.cC,{id:"Please always be aware of your <0>Health Factor (HF)</0> when partially migrating a position and that your rates will be updated to V3 rates.",components:{0:(0,_.jsx)("b",{})}})}),(0,_.jsx)(C.Z,{sx:{mb:{xs:3,lg:4}},children:(0,_.jsx)(r.cC,{id:"Migrating multiple collaterals and borrowed assets at the same time can be an expensive operation and might fail in certain situations.<0>Therefore it\u2019s not recommended to migrate positions with more than 5 assets (deposited + borrowed) at the same time.</0>",components:{0:(0,_.jsx)("b",{})}})}),(0,_.jsx)(C.Z,{sx:{mb:{xs:4,lg:6}},children:(0,_.jsx)(r.cC,{id:"Be mindful of the network congestion and gas prices."})})]})]})},V=i(75331),L=i(13902),F=i(58057),z=i(21386),W=i(52906),U=i(59499),Y=i(67728),H=i(68861),q=i(58527),J=function(e){var t,i=e.dashboardLink,n=e.marketName,s=e.warningType,l=e.isolatedV3,a=(t={},(0,U.Z)(t,Y.b_.EModeBorrowDisabled,(0,_.jsx)(r.cC,{id:"Asset cannot be migrated to {marketName} V3 Market due to E-mode restrictions. You can disable or manage E-mode categories in your <0>V3 Dashboard</0>",values:{marketName:n},components:{0:(0,_.jsx)(H.rU,{href:i||"",target:"_blank",underline:"always"})}})),(0,U.Z)(t,Y.b_.AssetNotFlashloanable,(0,_.jsx)(r.cC,{id:"Flashloan is disabled for this asset, hence this position cannot be migrated."})),(0,U.Z)(t,Y.b_.InsufficientLiquidity,(0,_.jsx)(r.cC,{id:"Asset cannot be migrated due to insufficient liquidity or borrow cap limitation in {marketName} v3 market.",values:{marketName:n}})),(0,U.Z)(t,Y.b_.NotEnoughtSupplies,(0,_.jsx)(r.cC,{id:"Asset cannot be migrated due to supply cap restriction in {marketName} v3 market.",values:{marketName:n}})),(0,U.Z)(t,Y.b_.ReserveFrozen,(0,_.jsx)(r.cC,{id:"Asset is frozen in {marketName} v3 market, hence this position cannot be migrated.",values:{marketName:n}})),(0,U.Z)(t,Y.b_.IsolationModeBorrowDisabled,l?(0,_.jsx)(r.cC,{id:"Asset cannot be migrated because you have isolated collateral in {marketName} v3 Market which limits borrowable assets. You can manage your collateral in <0>{marketName} V3 Dashboard</0>",values:{marketName:n},components:{0:(0,_.jsx)(H.rU,{href:i||"",target:"_blank",underline:"always"})}}):(0,_.jsx)(r.cC,{id:"Asset cannot be migrated to {marketName} v3 Market since collateral asset will enable isolation mode.",values:{marketName:n}})),(0,U.Z)(t,Y.b_.V3AssetMissing,(0,_.jsx)(r.cC,{id:"Underlying asset does not exist in {marketName} v3 Market, hence this position cannot be migrated.",values:{marketName:n}})),t);return(0,_.jsx)(q.G,{iconSize:16,color:"error.main",icon:(0,_.jsx)(f.Z,{}),children:(0,_.jsx)(C.Z,{variant:"caption",color:"text.secondary",children:a[s]})})},X=i(44749),K=i(45884),G=i(32383),$=i(41024),Q=i(14463),ee=i(2180),te=i(2031),ie=i(54181),ne=function(e){var t=e.enableAsCollateral,i=e.enabledAsCollateral;return(0,_.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[(0,_.jsx)(ie.Z,{onClick:t,disableRipple:!0,checked:i,sx:{mb:-1.5}}),(0,_.jsx)(X.Ch,{})]})},re=function(e){var t=e.v2Amount,i=e.v2Price,n=e.v3Price,s=(0,c.useMemo)((function(){return function(e,t,i){if(!i)return{v3Amount:void 0,v3TotalPrice:void 0};var n=(0,b.hE)(t).div(i).multipliedBy(e),r=n.multipliedBy(i);return{v3Amount:n.toString(),v3TotalPrice:r.toString()}}(t,i,n)}),[t,i,n]),l=s.v3Amount,a=s.v3TotalPrice;return(0,_.jsx)(O.v,{icon:!1,sx:{mb:4},severity:"error",children:(0,_.jsxs)(C.Z,{variant:"caption",component:"span",children:[(0,_.jsx)(r.cC,{id:"stETH tokens will be migrated to Wrapped stETH using Lido Protocol wrapper which leads to supply balance change after migration: {0}",values:{0:l?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)($.B,{variant:"caption",value:l})," (",(0,_.jsx)($.B,{variant:"caption",value:a,symbol:"USD",symbolsColor:"error.100"}),")."]}):(0,_.jsx)(Q.J,{variant:"caption",component:"span"})}})," "]})})},se=function(e){var t=e.checked,i=e.amount,n=e.amountInUSD,l=e.onCheckboxClick,o=e.enabledAsCollateral,c=e.disabled,d=e.enableAsCollateral,x=e.isIsolated,h=e.enteringIsolation,u=e.borrowApyType,p=e.userReserve,m=e.v3Rates,v=e.showCollateralToggle,j=e.isSupplyList,g=u?u===V.tk.Stable?p.stableBorrowAPY:p.reserve.variableBorrowAPY:p.reserve.supplyAPY,b=u?u===V.tk.Stable?p.reserve.sIncentivesData:p.reserve.vIncentivesData:p.reserve.aIncentivesData,f=u?(null===m||void 0===m?void 0:m.variableBorrowAPY)||"-1":(null===m||void 0===m?void 0:m.supplyAPY)||"-1",y=u?(null===m||void 0===m?void 0:m.vIncentivesData)||[]:(null===m||void 0===m?void 0:m.aIncentivesData)||[],Z=(0,te.Yh)(),w=Z.currentMarket,A=Z.currentMarketData,O=(0,s.Z)(),T=void 0===c?"text.secondary":"text.muted",B=void 0===c?"text.primary":"text.muted",D=void 0===(null===m||void 0===m?void 0:m.ltv)&&void 0===(null===m||void 0===m?void 0:m.liquidationThreshold);return(0,_.jsxs)(G.H,{sx:{display:"flex",flexDirection:"column",pl:0},children:[(0,_.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center",width:"100%",pb:2,pt:2.5},children:[(0,_.jsx)(K.h,{align:"center",maxWidth:48,minWidth:48,children:(0,_.jsx)(a.Z,{sx:function(e){return{border:"2px solid ".concat(void 0!==c?e.palette.action.disabled:e.palette.text.secondary),background:void 0!==c?e.palette.background.disabled:t?e.palette.text.secondary:e.palette.background.paper,width:16,height:16,borderRadius:"2px","&:hover":{cursor:void 0!==c?"not-allowed":"pointer"},display:"flex",alignItems:"center",justifyContent:"center"}},onClick:void 0!==c?void 0:l,children:void 0===c&&(0,_.jsx)(S.Z,{sx:{fontSize:"14px",color:"background.paper"},children:(0,_.jsx)(F.Z,{})})})}),(0,_.jsx)(K.h,{align:"left",children:(0,_.jsxs)(I.X,{children:[(0,_.jsx)(ee.T1,{symbol:p.reserve.iconSymbol,fontSize:"large"}),(0,_.jsxs)(a.Z,{sx:{pl:"12px",overflow:"hidden",display:"flex"},children:[(0,_.jsx)(C.Z,{variant:"subheader1",color:B,noWrap:!0,sx:{pr:1},children:p.reserve.symbol}),void 0!==c&&(0,_.jsx)(J,{dashboardLink:H.Z6.dashboard+"/?marketName="+w+"_v3",marketName:A.marketTitle,warningType:c,isolatedV3:h})]})]})})]}),(0,_.jsxs)(a.Z,{sx:{width:"100%",display:"flex",flexDirection:"column",gap:2,pb:4,pl:12},children:[(0,_.jsxs)(a.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,_.jsx)(C.Z,{variant:"description",color:T,children:(0,_.jsx)(r.cC,{id:"Current v2 Balance"})}),(0,_.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-end"},children:[(0,_.jsx)(a.Z,{sx:{display:"flex",alignItems:"flex-end",mb:.5},children:(0,_.jsx)($.B,{value:i,variant:"secondary14",color:B})}),(0,_.jsx)($.B,{value:n,variant:"secondary12",color:T,symbolsColor:T,symbol:"USD"})]})]}),(0,_.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,_.jsx)(C.Z,{variant:"description",color:T,children:(0,_.jsx)(r.cC,{id:"APY change"})}),(0,_.jsxs)(a.Z,{sx:{display:"flex"},children:[(0,_.jsx)(W.J,{value:g,symbol:p.reserve.symbol,incentives:b,variant:"main14",color:B}),(0,_.jsx)(S.Z,{sx:{px:1.5},children:(0,_.jsx)(M.Z,{fontSize:"14px",color:void 0===c?O.palette.text.secondary:O.palette.text.muted})}),(0,_.jsx)(W.J,{value:f,symbol:p.reserve.symbol,incentives:y,variant:"main14",color:B})]})]}),!!d&&(0,_.jsxs)(a.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,_.jsx)(C.Z,{variant:"description",color:T,children:(0,_.jsx)(r.cC,{id:"Collateral change"})}),(0,_.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center"},children:[p.usageAsCollateralEnabledOnUser&&"0"!==p.reserve.reserveLiquidationThreshold?(0,_.jsx)(z.Z,{fontSize:"small",color:"success"}):(0,_.jsx)(Q.J,{variant:"main14",color:T}),(0,_.jsx)(S.Z,{sx:{px:1.5},children:(0,_.jsx)(M.Z,{fontSize:"14px",color:void 0===c?O.palette.text.secondary:O.palette.text.muted})}),v?(0,_.jsx)(ne,{enableAsCollateral:d,enabledAsCollateral:o}):o?x?(0,_.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[(0,_.jsx)(S.Z,{sx:{color:"warning.main",fontSize:"20px"},children:(0,_.jsx)(L.Z,{})}),(0,_.jsx)(X.Ch,{})]}):(0,_.jsx)(z.Z,{fontSize:"small",color:"success"}):(0,_.jsx)(Q.J,{variant:"main14",color:T})]})]}),!!u&&(0,_.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,_.jsx)(C.Z,{variant:"description",color:T,children:(0,_.jsx)(r.cC,{id:"APY type change"})}),(0,_.jsxs)(a.Z,{sx:{display:"flex"},children:[(0,_.jsx)(k.Z,{variant:"outlined",size:"small",sx:{width:"50px",background:"white"},disabled:!0,children:(0,_.jsx)(C.Z,{variant:"buttonS",color:B,children:u})}),(0,_.jsx)(S.Z,{sx:{px:1.5},children:(0,_.jsx)(M.Z,{fontSize:"14px",color:void 0===c?O.palette.text.secondary:O.palette.text.muted})}),(0,_.jsx)(k.Z,{variant:"outlined",size:"small",sx:{width:"50px",background:"white"},disabled:!0,children:(0,_.jsx)(C.Z,{variant:"buttonS",color:B,children:"Variable"})})]})]}),j&&(0,_.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,_.jsx)(C.Z,{variant:"description",color:T,children:(0,_.jsx)(r.cC,{id:"Max LTV"})}),(0,_.jsx)(a.Z,{sx:{display:"flex"},children:D?(0,_.jsx)(Q.J,{variant:"main14",color:"text.secondary"}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)($.B,{value:p.reserve.formattedBaseLTVasCollateral,percent:!0,variant:"main14",color:B}),(0,_.jsx)(S.Z,{sx:{px:1.5},children:(0,_.jsx)(M.Z,{fontSize:"14px",color:void 0===c?O.palette.text.secondary:O.palette.text.muted})}),(0,_.jsx)($.B,{value:(null===m||void 0===m?void 0:m.ltv)||0,percent:!0,variant:"main14",color:B})]})})]}),!j&&(0,_.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,_.jsx)(C.Z,{variant:"description",color:T,children:(0,_.jsx)(r.cC,{id:"Liquidation threshold"})}),(0,_.jsx)(a.Z,{sx:{display:"flex"},children:D?(0,_.jsx)(Q.J,{variant:"main14",color:"text.secondary"}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)($.B,{value:p.reserve.formattedReserveLiquidationThreshold,percent:!0,variant:"main14",color:B}),(0,_.jsx)(S.Z,{sx:{px:1.5},children:(0,_.jsx)(M.Z,{fontSize:"14px",color:void 0===c?O.palette.text.secondary:O.palette.text.muted})}),(0,_.jsx)($.B,{value:(null===m||void 0===m?void 0:m.liquidationThreshold)||0,percent:!0,variant:"main14",color:B})]})})]})]}),"stETH"===p.reserve.symbol&&(0,_.jsx)(a.Z,{sx:{pl:"16px",width:"100%"},children:(0,_.jsx)(re,{v2Price:p.reserve.priceInUSD,v2Amount:i,v3Price:null===m||void 0===m?void 0:m.priceInUSD})})]})},le=function(e){var t,i=e.checked,n=e.amount,r=e.amountInUSD,o=e.onCheckboxClick,c=e.enabledAsCollateral,d=e.disabled,x=e.enableAsCollateral,h=e.isIsolated,u=e.enteringIsolation,p=e.borrowApyType,m=e.userReserve,v=e.v3Rates,j=e.userControlledCollateral,g=e.canBeEnforced,b=e.isSupplyList,f=(0,s.Z)(),y=(0,te.Yh)(),Z=y.currentMarket,w=y.currentMarketData,A=(0,l.Z)(f.breakpoints.down(1125)),I=void 0===d?"text.primary":"text.muted",O=void 0===d?"text.secondary":"text.muted",T=void 0===(null===v||void 0===v?void 0:v.ltv)&&void 0===(null===v||void 0===v?void 0:v.liquidationThreshold),B=p?p===V.tk.Stable?m.stableBorrowAPY:m.reserve.variableBorrowAPY:m.reserve.supplyAPY,D=p?p===V.tk.Stable?m.reserve.sIncentivesData:m.reserve.vIncentivesData:m.reserve.aIncentivesData,P=p?(null===v||void 0===v?void 0:v.variableBorrowAPY)||"-1":(null===v||void 0===v?void 0:v.supplyAPY)||"-1",N=p?(null===v||void 0===v?void 0:v.vIncentivesData)||[]:(null===v||void 0===v?void 0:v.aIncentivesData)||[],E=j&&h&&g;return A?(0,_.jsx)(se,{checked:i,amount:n,amountInUSD:r,onCheckboxClick:o,enabledAsCollateral:c,disabled:d,enableAsCollateral:x,isIsolated:h,enteringIsolation:u,borrowApyType:p,userReserve:m,v3Rates:v,showCollateralToggle:E,isSupplyList:b}):(0,_.jsxs)(G.H,{sx:{flexDirection:"column",pl:0},"data-cy":"migration-".concat(void 0!==p?"borrow-"+p:"supply","-").concat(m.reserve.symbol),children:[(0,_.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"row",width:"100%",alignItems:"center",my:4},children:[(0,_.jsx)(K.h,{align:"center",maxWidth:64,minWidth:64,children:(0,_.jsx)(a.Z,{sx:function(e){return{border:"2px solid ".concat(void 0!==d?e.palette.action.disabled:e.palette.text.secondary),background:void 0!==d?e.palette.background.disabled:i?e.palette.text.secondary:e.palette.background.paper,width:16,height:16,borderRadius:"2px","&:hover":{cursor:void 0!==d?"not-allowed":"pointer"},display:"flex",alignItems:"center",justifyContent:"center"}},onClick:void 0!==d?void 0:o,"data-cy":"migration-checkbox",children:void 0===d&&(0,_.jsx)(S.Z,{sx:{fontSize:"14px",color:"background.paper"},children:(0,_.jsx)(F.Z,{})})})}),(0,_.jsxs)(K.h,{isRow:!0,maxWidth:250,minWidth:170,children:[(0,_.jsx)(ee.T1,{symbol:m.reserve.iconSymbol,fontSize:"large"}),(0,_.jsxs)(a.Z,{sx:{pl:"12px",overflow:"hidden",display:"flex"},children:[(0,_.jsx)(C.Z,{variant:"subheader1",color:I,noWrap:!0,sx:{pr:1},children:m.reserve.symbol}),void 0!==d&&(0,_.jsx)(J,{dashboardLink:H.Z6.dashboard+"/?marketName="+Z+"_v3",marketName:w.marketTitle,warningType:d,isolatedV3:!u})]})]}),(0,_.jsx)(K.h,{children:(0,_.jsxs)(a.Z,{sx:{display:"flex"},children:[(0,_.jsx)(W.J,{value:B,symbol:m.reserve.symbol,incentives:D,variant:"main14",color:I}),(0,_.jsx)(S.Z,{sx:{px:1.5},children:(0,_.jsx)(M.Z,{fontSize:"14px",color:void 0===d?f.palette.text.primary:f.palette.text.muted})}),(0,_.jsx)(W.J,{value:P,symbol:m.reserve.symbol,incentives:N,variant:"main14",color:I})]})}),!!x&&(0,_.jsx)(K.h,{children:(0,_.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center"},children:[m.usageAsCollateralEnabledOnUser&&"0"!==m.reserve.reserveLiquidationThreshold?(0,_.jsx)(z.Z,{fontSize:"small",color:"success"}):(0,_.jsx)(Q.J,{variant:"main14",color:O}),(0,_.jsx)(S.Z,{sx:{px:1.5},children:(0,_.jsx)(M.Z,{fontSize:"14px",color:void 0===d?f.palette.text.primary:f.palette.text.muted})}),E?(0,_.jsx)(ne,{enableAsCollateral:x,enabledAsCollateral:c}):c?h?(0,_.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[(0,_.jsx)(S.Z,{sx:{color:"warning.main",fontSize:"20px"},children:(0,_.jsx)(L.Z,{})}),(0,_.jsx)(X.Ch,{})]}):(0,_.jsx)(z.Z,{fontSize:"small",color:"success"}):(0,_.jsx)(Q.J,{variant:"main14",color:O})]})}),b&&(T?(0,_.jsx)(K.h,{children:(0,_.jsx)(Q.J,{variant:"main14",color:"text.secondary"})}):(0,_.jsx)(K.h,{children:(0,_.jsxs)(a.Z,{sx:{display:"flex"},children:[(0,_.jsx)($.B,{value:m.reserve.formattedBaseLTVasCollateral,percent:!0,variant:"secondary14",color:I}),(0,_.jsx)(S.Z,{sx:{px:1.5},children:(0,_.jsx)(M.Z,{fontSize:"14px",color:void 0===d?f.palette.text.primary:f.palette.text.muted})}),(0,_.jsx)($.B,{value:(null===v||void 0===v?void 0:v.ltv)||0,percent:!0,variant:"secondary14",color:I})]})})),!!p&&(0,_.jsx)(K.h,{children:(0,_.jsxs)(a.Z,{sx:{display:"flex"},children:[(0,_.jsx)(k.Z,{variant:"outlined",size:"small",sx:{width:"50px",background:"white"},disabled:!0,children:(0,_.jsx)(C.Z,{variant:"buttonS",color:I,children:p})}),(0,_.jsx)(S.Z,{sx:{px:1.5},children:(0,_.jsx)(M.Z,{fontSize:"14px",color:void 0===d?f.palette.text.primary:f.palette.text.muted})}),(0,_.jsx)(k.Z,{variant:"outlined",size:"small",sx:{width:"50px",background:"white"},disabled:!0,children:(0,_.jsx)(C.Z,{variant:"buttonS",color:I,children:"Variable"})})]})}),!b&&(T?(0,_.jsx)(K.h,{children:(0,_.jsx)(Q.J,{variant:"main14",color:"text.secondary"})}):(0,_.jsx)(K.h,{children:(0,_.jsxs)(a.Z,{sx:{display:"flex"},children:[(0,_.jsx)($.B,{value:m.reserve.formattedReserveLiquidationThreshold,percent:!0,variant:"secondary14",color:I}),(0,_.jsx)(S.Z,{sx:{px:1.5},children:(0,_.jsx)(M.Z,{fontSize:"14px",color:void 0===d?f.palette.text.primary:f.palette.text.muted})}),(0,_.jsx)($.B,{value:null!==(t=null===v||void 0===v?void 0:v.liquidationThreshold)&&void 0!==t?t:-1,percent:!0,variant:"secondary14",color:I})]})})),(0,_.jsxs)(K.h,{children:[(0,_.jsx)($.B,{value:n,variant:"secondary14",color:I}),(0,_.jsx)($.B,{value:r,variant:"secondary12",color:I,symbol:"USD",symbolsColor:I})]})]}),"stETH"===m.reserve.symbol&&(0,_.jsx)(a.Z,{sx:{pl:"16px",width:"100%"},children:(0,_.jsx)(re,{v2Price:m.reserve.priceInUSD,v2Amount:n,v3Price:null===v||void 0===v?void 0:v.priceInUSD})})]})},ae=function(e){var t=e.selectedBorrowAssets,i=e.userReserve,n=e.toggleSelectedBorrowPosition,r=e.v3Rates,s=e.enteringIsolation,l=(0,c.useMemo)((function(){return!i.migrationDisabled&&t.findIndex((function(e){return i.interestRate==V.tk.Stable?e.debtKey==i.reserve.stableDebtTokenAddress:e.debtKey==i.reserve.variableDebtTokenAddress}))>=0}),[t]),a=i.interestRate==V.tk.Stable?i.stableBorrows:i.variableBorrows,o=i.interestRate==V.tk.Stable?i.stableBorrowsUSD:i.variableBorrowsUSD;return(0,_.jsx)(le,{checked:l,userReserve:i,amount:a,amountInUSD:o,onCheckboxClick:function(){n(i)},disabled:i.migrationDisabled,enabledAsCollateral:i.usageAsCollateralEnabledOnUser,borrowApyType:i.interestRate,v3Rates:r,enteringIsolation:s,isSupplyList:!1},i.debtKey)},oe=function(){var e=(0,s.Z)();return(0,l.Z)(e.breakpoints.down(1125))?(0,_.jsx)(ce,{}):(0,_.jsxs)(G.H,{sx:{pl:0},children:[(0,_.jsx)(K.h,{align:"center",maxWidth:64,minWidth:64,children:(0,_.jsx)(P.Z,{width:16,height:16})}),(0,_.jsx)(K.h,{align:"left",isRow:!0,maxWidth:250,minWidth:170,children:(0,_.jsxs)(a.Z,{sx:{display:"inline-flex",alignItems:"center"},children:[(0,_.jsx)(P.Z,{variant:"circular",width:32,height:32}),(0,_.jsx)(P.Z,{sx:{ml:3},width:39,height:20})]})}),(0,_.jsx)(K.h,{children:(0,_.jsx)(P.Z,{width:120,height:25})}),(0,_.jsx)(K.h,{children:(0,_.jsx)(P.Z,{width:120,height:25})}),(0,_.jsx)(K.h,{children:(0,_.jsx)(P.Z,{width:120,height:25})}),(0,_.jsxs)(K.h,{children:[(0,_.jsx)(P.Z,{width:70,height:16,sx:{mb:1}}),(0,_.jsx)(P.Z,{width:50,height:14})]})]})},ce=function(){return(0,_.jsxs)(G.H,{sx:{display:"flex",flexDirection:"column",pl:0},children:[(0,_.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center",width:"100%",pb:2,pt:2.5},children:[(0,_.jsx)(K.h,{align:"center",maxWidth:48,minWidth:48,children:(0,_.jsx)(P.Z,{width:16,height:16})}),(0,_.jsx)(K.h,{align:"left",children:(0,_.jsxs)(a.Z,{sx:{display:"inline-flex",alignItems:"center"},children:[(0,_.jsx)(P.Z,{variant:"circular",width:32,height:32}),(0,_.jsx)(P.Z,{sx:{ml:3},width:39,height:20})]})})]}),(0,_.jsxs)(a.Z,{sx:{width:"100%",display:"flex",flexDirection:"column",gap:2,pb:4,pl:12},children:[(0,_.jsxs)(a.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,_.jsx)(P.Z,{width:130,height:16}),(0,_.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:1},children:[(0,_.jsx)(P.Z,{width:50,height:16}),(0,_.jsx)(P.Z,{width:30,height:14})]})]}),(0,_.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,_.jsx)(P.Z,{width:80,height:16}),(0,_.jsx)(P.Z,{width:115,height:16})]}),(0,_.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,_.jsx)(P.Z,{width:115,height:16}),(0,_.jsx)(P.Z,{width:150,height:16})]}),(0,_.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,_.jsx)(P.Z,{width:140,height:16}),(0,_.jsx)(P.Z,{width:115,height:16})]})]})]})},de=i(99435),xe=i(1475),he=i(45556);var ue=c.forwardRef((function(e,t){return c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),c.createElement("path",{fillRule:"evenodd",d:"M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z",clipRule:"evenodd"}))}));function pe(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function me(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(i),!0).forEach((function(t){(0,U.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):pe(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var ve=function(e){var t=e.numSelected,i=e.allSelected,n=e.onSelectAllClick,r=e.disabled,l=(0,s.Z)(),o={border:"2px solid ".concat(l.palette.text.secondary),background:l.palette.text.secondary,width:16,height:16,borderRadius:"2px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"};return r?(0,_.jsx)(de.M,{children:(0,_.jsx)(C.Z,{variant:"main12",sx:{fontWeight:700},children:(0,_.jsx)(a.Z,{sx:me(me({},o),{},{background:l.palette.action.disabledBackground,border:"2px solid ".concat(l.palette.action.disabled),"&:hover":{cursor:"not-allowed"}})})})}):(0,_.jsx)(de.M,{onClick:n,children:(0,_.jsx)(C.Z,{variant:"main12",sx:{fontWeight:700},children:i?(0,_.jsx)(a.Z,{sx:o,"data-cy":"migration-checkbox-all",children:(0,_.jsx)(S.Z,{sx:{fontSize:"14px",color:"background.paper"},children:(0,_.jsx)(F.Z,{})})}):0!==t?(0,_.jsx)(a.Z,{sx:o,"data-cy":"migration-checkbox-all",children:(0,_.jsx)(S.Z,{sx:{fontSize:"16px",color:"background.paper"},children:(0,_.jsx)(ue,{})})}):(0,_.jsx)(a.Z,{sx:me(me({},o),{},{background:"white"}),"data-cy":"migration-checkbox-all"})})})},je=function(e){var t=e.titleComponent,i=e.children,n=e.onSelectAllClick,s=e.loading,l=e.isAvailable,o=e.allSelected,c=e.numSelected,d=e.numAvailable,x=e.disabled;return(0,_.jsx)(a.Z,{sx:{width:"100%"},children:(0,_.jsxs)(he.l,{titleComponent:(0,_.jsx)(C.Z,{component:"div",variant:"h3",sx:{mr:4},children:t}),children:[(l||s)&&(0,_.jsxs)(xe.u,{sx:{pl:0},children:[(0,_.jsx)(K.h,{align:"center",maxWidth:48,minWidth:48,children:(0,_.jsx)(ve,{allSelected:o,numSelected:c,onSelectAllClick:n,disabled:x})}),(0,_.jsx)(a.Z,{sx:{height:22,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,_.jsx)(C.Z,{variant:"subheader2",color:"text.secondary",children:(0,_.jsx)(r.cC,{id:"{numSelected}/{numAvailable} assets selected",values:{numSelected:c,numAvailable:d}})})})]}),i]})})},ge=[{title:(0,_.jsx)(r.cC,{id:"APY change"})},{title:(0,_.jsx)(r.cC,{id:"Collateral change"})},{title:(0,_.jsx)(r.cC,{id:"Max LTV"})},{title:(0,_.jsx)(r.cC,{id:"Current v2 balance"})}],be=[{title:(0,_.jsx)(r.cC,{id:"APY change"})},{title:(0,_.jsx)(r.cC,{id:"APY type change"})},{title:(0,_.jsx)(r.cC,{id:"Liquidation Threshold"})},{title:(0,_.jsx)(r.cC,{id:"Current v2 balance"})}],fe=function(e){var t=e.titleComponent,i=e.children,n=e.onSelectAllClick,o=e.loading,c=e.isAvailable,d=e.withCollateral,x=e.withBorrow,h=e.allSelected,u=e.numSelected,p=e.numAvailable,m=e.disabled,v=e.isolatedReserveV3,j=(0,s.Z)(),g=(0,te.Yh)(),b=g.currentMarket,f=g.currentMarketData.marketTitle,y=H.Z6.dashboard+"/?marketName="+b+"_v3";return(0,l.Z)(j.breakpoints.down(1125))?(0,_.jsx)(je,{titleComponent:t,onSelectAllClick:n,loading:o,isAvailable:c,allSelected:h,numSelected:u,disabled:m,numAvailable:p,children:i}):(0,_.jsx)(a.Z,{sx:{width:"100%"},children:(0,_.jsxs)(he.l,{titleComponent:(0,_.jsxs)(a.Z,{display:"block",children:[(0,_.jsx)(C.Z,{component:"div",variant:"h3",sx:{mr:4},children:t}),v&&!v.enteringIsolationMode&&(0,_.jsx)(a.Z,{sx:{pt:"16px"},children:(0,_.jsx)(O.v,{severity:"warning",icon:!1,sx:{mb:0},children:(0,_.jsx)(C.Z,{variant:"caption",color:j.palette.warning[100],children:(0,_.jsx)(r.cC,{id:"Some migrated assets will not be used as collateral due to enabled isolation mode in {marketName} V3 Market. Visit <0>{marketName} V3 Dashboard</0> to manage isolation mode.",values:{marketName:f},components:{0:(0,_.jsx)(H.rU,{href:y})}})})})})]}),children:[(c||o)&&(0,_.jsxs)(xe.u,{sx:{pl:0},children:[(0,_.jsx)(K.h,{align:"center",maxWidth:64,minWidth:64,children:(0,_.jsx)(ve,{allSelected:h,numSelected:u,onSelectAllClick:n,disabled:m})}),(0,_.jsx)(K.h,{isRow:!0,maxWidth:250,minWidth:170,children:(0,_.jsx)(de.M,{children:(0,_.jsx)(r.cC,{id:"Assets"})})}),d&&ge.map((function(e,t){return(0,_.jsx)(K.h,{children:(0,_.jsx)(de.M,{children:e.title})},t)})),x&&be.map((function(e,t){return(0,_.jsx)(K.h,{children:(0,_.jsx)(de.M,{children:e.title})},t)}))]}),i]})})},ye=function(e){var t=e.onSelectAllSupplies,i=e.onSelectAllBorrows,n=e.suppliesPositions,s=e.borrowsPositions,l=e.loading,o=e.isolatedReserveV3,d=e.isSupplyPositionsAvailable,x=e.isBorrowPositionsAvailable,h=e.emodeCategoryId,u=(0,te.Yh)(),p=u.selectedMigrationSupplyAssets,m=u.selectedMigrationBorrowAssets,v=(0,te.Yh)((0,c.useCallback)((function(e){return(0,Y.xk)(e,0)}),[])),j=v.supplyReserves,g=v.borrowReserves,b=void 0===j.find((function(e){return void 0===e.migrationDisabled})),f=void 0===g.find((function(e){return void 0===e.migrationDisabled})),y=(0,Y.FW)(j,p),Z=y.activeSelections,w=y.activeUnselected,C=(0,Y.FW)(g,m),k=C.activeSelections,S=C.activeUnselected;return(0,_.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,_.jsx)(fe,{isolatedReserveV3:o,loading:l,onSelectAllClick:t,allSelected:0===w.length,isAvailable:d,titleComponent:(0,_.jsx)(r.cC,{id:"Select v2 supplies to migrate"}),emodeCategoryId:h,withCollateral:!0,disabled:b,numSelected:Z.length||0,numAvailable:j.length||0,children:n}),(0,_.jsx)(fe,{loading:l,onSelectAllClick:i,allSelected:0===S.length,isAvailable:x,withBorrow:!0,disabled:f,titleComponent:(0,_.jsx)(r.cC,{id:"Select v2 borrows to migrate"}),numSelected:k.length||0,numAvailable:g.length||0,children:s})]})},Ze=i(96471),we=i(11163),Ce=i(40535),ke=i(74815),Se=function(){var e=(0,we.useRouter)(),t=(0,D.f)().currentMarket,i=(0,A.hu)(t),n=i.market,o=i.network,c=(0,A.St)(n.marketTitle),d=(0,s.Z)(),x=(0,l.Z)(d.breakpoints.down("sm"));return(0,_.jsx)(ke.f,{titleComponent:(0,_.jsxs)(a.Z,{children:[(0,_.jsx)(a.Z,{sx:{display:"flex",alignItems:x?"flex-start":"center",alignSelf:x?"flex-start":"center",mb:4,minHeight:"40px",flexDirection:x?"column":"row"},children:(0,_.jsx)(k.Z,{variant:"surface",size:"medium",color:"primary",startIcon:(0,_.jsx)(S.Z,{sx:{fontSize:"20px"},children:(0,_.jsx)(Ze.Z,{})}),onClick:function(){e.push(H.Z6.dashboard)},sx:{mr:3,mb:x?"24px":"0"},"data-cy":"goBack-btn",children:(0,_.jsx)(r.cC,{id:"Go Back"})})}),(0,_.jsx)(Ce.V,{pageTitle:(0,_.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,_.jsx)(A.gO,{size:32,logo:o.networkLogoPath,testChainName:c.testChainName}),(0,_.jsx)(r.cC,{id:"Migrate to {0} v3 Market",values:{0:"Ethereum AMM"===n.marketTitle?"Ethereum":n.marketTitle}})]})})]})})},Ae=i(83601);function Ie(){var e=(0,u.HT)().loading,t=(0,j.Z)(),i=t.currentAccount,n=t.loading,h=(0,m.T)().isPermissionsLoading,v=(0,s.Z)(),b=(0,l.Z)(v.breakpoints.down("sm")),f=(0,p.p)(10),y=(0,te.Yh)((0,c.useCallback)((function(e){return(0,Y.xk)(e,f)}),[f])),Z=y.supplyReserves,w=y.borrowReserves,C=y.healthFactor,k=y.isolatedReserveV3,S=(0,te.Yh)((function(e){return{v2UserSummaryAfterMigration:(0,Y.Zs)(e,f),v3UserSummaryBeforeMigration:(0,Y.ee)(e,f),poolReserveV3:(0,Ae.$)(e)}})),A=S.v3UserSummaryBeforeMigration,I=S.v2UserSummaryAfterMigration,O=S.poolReserveV3,T=(0,te.Yh)((0,c.useCallback)((function(e){return(0,Y.Cs)(e,f)}),[f])),B=(0,te.Yh)(),D=B.selectAllSupply,M=B.selectAllBorrow,P=B.toggleMigrationSelectedSupplyAsset,N=B.selectedMigrationSupplyAssets,E=B.toggleMigrationSelectedBorrowAsset,V=B.selectedMigrationBorrowAssets,L=B.resetMigrationSelectedAssets,F=B.enforceAsCollateral,z=B.getMigrationExceptionSupplyBalances;(0,c.useEffect)((function(){z&&Z.length>0&&z(Z)}),[z,Z]),(0,c.useEffect)((function(){L&&L()}),[L]),(0,te.Xh)();var W=Object.keys(N).length>1&&"0"==A.totalCollateralMarketReferenceCurrency;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(Se,{}),i&&!h?(0,_.jsxs)(x.O,{children:[(0,_.jsx)(ye,{loading:e,isSupplyPositionsAvailable:Z.length>0,isBorrowPositionsAvailable:w.length>0,onSelectAllSupplies:function(){D(f)},onSelectAllBorrows:function(){M(f)},emodeCategoryId:null===O||void 0===O?void 0:O.userEmodeCategoryId,isolatedReserveV3:k,suppliesPositions:(0,_.jsx)(_.Fragment,{children:e?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(oe,{}),(0,_.jsx)(oe,{})]}):Z.length>0?Z.map((function(e){return(0,_.jsx)(le,{checked:N.findIndex((function(t){return t.underlyingAsset==e.underlyingAsset}))>=0,enableAsCollateral:function(){return t=e.canBeEnforced,i=e.underlyingAsset,void(t&&F(i));var t,i},userControlledCollateral:W,canBeEnforced:"0"==A.totalCollateralMarketReferenceCurrency&&e.canBeEnforced,userReserve:e,amount:e.underlyingBalance,amountInUSD:e.underlyingBalanceUSD,onCheckboxClick:function(){P(e.underlyingAsset)},enabledAsCollateral:e.usageAsCollateralEnabledOnUserV3,isIsolated:e.isolatedOnV3,enteringIsolation:(null===k||void 0===k?void 0:k.enteringIsolationMode)||!1,v3Rates:e.v3Rates,disabled:e.migrationDisabled,isSupplyList:!0},e.underlyingAsset)})):(0,_.jsx)(a.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,_.jsx)(g.N,{text:(0,_.jsx)(r.cC,{id:"Nothing supplied yet"})})})}),borrowsPositions:(0,_.jsx)(_.Fragment,{children:e?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(oe,{}),(0,_.jsx)(oe,{})]}):w.length>0?w.map((function(e){return(0,_.jsx)(ae,{userReserve:e,selectedBorrowAssets:V,toggleSelectedBorrowPosition:E,v3Rates:e.v3Rates,enteringIsolation:(null===k||void 0===k?void 0:k.enteringIsolationMode)||!1},e.debtKey)})):(0,_.jsx)(a.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,_.jsx)(g.N,{text:(0,_.jsx)(r.cC,{id:"Nothing borrowed yet"})})})})}),!b&&(0,_.jsx)(o.Z,{sx:{my:10}}),(0,_.jsx)(R,{hfV2Current:C,hfV2AfterChange:I.healthFactor,hfV3Current:A.healthFactor,v3SummaryAfterMigration:T,disableButton:!Object.keys(N).length&&!Object.keys(V).length,enteringIsolationMode:(null===k||void 0===k?void 0:k.enteringIsolationMode)||!1,loading:e})]}):(0,_.jsx)(d.w,{loading:n,description:(0,_.jsx)(r.cC,{id:"Please connect your wallet to see migration tool."})})]})}Ie.getLayout=function(e){return(0,_.jsxs)(v.Z,{children:[e,(0,_.jsx)(h.P,{})]})}},45745:function(e,t,i){"use strict";i.d(t,{w:function(){return p}});var n=i(59499),r=i(4730),s=i(49501),l=i(70918),a=i(90149),o=i(29630),c=i(3765),d=i(85893),x=["loading","description","sx"];function h(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function u(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?h(Object(i),!0).forEach((function(t){(0,n.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):h(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var p=function(e){var t=e.loading,i=e.description,n=e.sx,h=(0,r.Z)(e,x);return(0,d.jsx)(l.Z,u(u({},h),{},{sx:u({display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",p:4,flex:1},n),children:(0,d.jsx)(d.Fragment,{children:t?(0,d.jsx)(a.Z,{}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.Z,{variant:"h2",sx:{mb:2},children:(0,d.jsx)(s.cC,{id:"Please, connect your wallet"})}),(0,d.jsx)(o.Z,{sx:{mb:6},color:"text.secondary",children:i||(0,d.jsx)(s.cC,{id:"Please connect your wallet to see your supplies, borrowings, and open positions."})}),(0,d.jsx)(c.p,{})]})})}))}},15446:function(e,t,i){"use strict";i.d(t,{O:function(){return l}});var n=i(61953),r=i(36336),s=i(85893),l=function(e){var t=e.children;return(0,s.jsx)(n.Z,{sx:{display:"flex",flexDirection:"column",flex:1,mt:{xs:"-32px",lg:"-46px",xl:"-44px",xxl:"-48px"}},children:(0,s.jsx)(r.Z,{children:t})})}},3765:function(e,t,i){"use strict";i.d(t,{p:function(){return d}});var n=i(49501),r=i(75084),s=i(26074),l=i(2031),a=i(57609),o=i(58294),c=i(85893),d=function(e){var t=e.funnel,i=(0,s.q)().setWalletModalOpen,d=(0,l.Yh)((function(e){return e.trackEvent}));return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.Z,{variant:"gradient",onClick:function(){d(a.Bp.CONNECT_WALLET,{funnel:t}),i(!0)},children:(0,c.jsx)(n.cC,{id:"Connect wallet"})}),(0,c.jsx)(o.x,{})]})}},26079:function(e,t,i){"use strict";i.d(t,{N:function(){return l}});var n=i(61953),r=i(29630),s=i(85893),l=function(e){var t=e.text;return(0,s.jsx)(n.Z,{sx:{px:{xs:4,xsm:6},pt:{xs:3.5,xsm:5.5},pb:{xs:6,sxm:7}},children:(0,s.jsx)(r.Z,{color:"text.secondary",children:t})})}},79340:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/v3-migration",function(){return i(24756)}])}},function(e){e.O(0,[249,980,101,774,888,179],(function(){return t=79340,e(e.s=t);var t}));var t=e.O();_N_E=t}]);