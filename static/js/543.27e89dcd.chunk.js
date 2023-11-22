"use strict";(self.webpackChunkott_app=self.webpackChunkott_app||[]).push([[543],{58:(e,t,o)=>{o.r(t),o.d(t,{default:()=>X});var n=o(867);const r=n.ZP.h2((e=>({color:e.theme.colors.textColor,fontSize:e.theme.fontSizes.header3,margin:0,fontWeight:300,opacity:.8})));var s=o(184);const i=e=>{let{text:t}=e;return(0,s.jsx)(r,{children:t})},l=n.ZP.div((e=>({position:"fixed",top:0,width:"100%"}))),a=n.ZP.div((e=>({justifyContent:"space-between",display:"flex",alignItems:"center",top:0,position:"absolute",left:0,width:"calc(100% - ".concat(e.theme.spacings.lg,")"),paddingLeft:e.theme.spacings.md,paddingRight:e.theme.spacings.md,paddingTop:e.theme.spacings.lg,paddingBottom:e.theme.spacings.lg}))),c=n.ZP.div((e=>({justifyContent:"start",display:"flex",alignItems:"center",minWidth:"90%"}))),h=n.ZP.img((e=>({alt:"Back Icon",height:e.theme.spacings.xxmd,paddingRight:e.theme.spacings.xmd}))),p=n.ZP.img((e=>({alt:"Search Icon",height:e.theme.spacings.lg}))),d=n.ZP.img((()=>({minHeight:"10vh",height:"100%",width:"100%"}))),u=n.ZP.input((e=>({border:"3px solid transparent",color:e.theme.colors.primary,borderRadius:e.theme.spacings.xs,minHeight:e.theme.spacings.md,width:"100%",fontSize:e.theme.fontSizes.body1,paddingTop:e.theme.spacings.sm,paddingBottom:e.theme.spacings.sm,paddingLeft:e.theme.spacings.sm,":focus":{borderColor:e.theme.colors.secondary,background:"#000"}})));var g=o(434);const m=()=>(0,g.I0)();var f=o(443);const v=g.v9;var y=o(791);const w=(e,t)=>{const[o,n]=(0,y.useState)(e),r=(0,y.useRef)(!0);return(0,y.useEffect)((()=>{if(!r.current){const o=setTimeout((()=>{n(e)}),t);return()=>{clearTimeout(o)}}r.current=!1}),[e,t]),o},x=e=>{let{text:t}=e;const o=m(),[n,r]=(0,y.useState)(""),{isSearchMode:g}=v((e=>e.search)),x=w(n,300);(0,y.useEffect)((()=>{o((0,f.yC)({searchTerm:x}))}),[x,o]);return(0,s.jsxs)(l,{children:[(0,s.jsx)(d,{alt:"Header Background",src:"https://test.create.diagnal.com/images/nav_bar.png"}),(0,s.jsxs)(a,{children:[(0,s.jsxs)(c,{children:[(0,s.jsx)(h,{onClick:function(){r(""),o((0,f.IX)({isSearchMode:!1})),o((0,f.ru)())},src:"https://test.create.diagnal.com/images/Back.png"}),!g&&(0,s.jsx)(i,{text:t}),g&&(0,s.jsx)(u,{value:n,onChange:e=>{r(e.target.value)},type:"text"})]}),!g&&(0,s.jsx)(p,{src:"https://test.create.diagnal.com/images/search.png",onClick:()=>{o((0,f.IX)({isSearchMode:!0}))}})]})]})},T=n.ZP.div((e=>({color:e.theme.colors.textColor,fontSize:e.theme.fontSizes.body1,margin:0,fontWeight:"200",marginTop:e.theme.spacings.sm,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}))),S=e=>{let{text:t}=e;return(0,s.jsx)(T,{children:t})},b=n.ZP.div((e=>({display:"flex",flexDirection:"column",width:"100%",marginBottom:e.theme.spacings.lg}))),E=n.ZP.img((e=>({aspectRatio:2/3,width:"100%",borderRadius:e.theme.spacings.xxs}))),L=e=>{let{url:t}=e;const o="https://test.create.diagnal.com/images/placeholder_for_missing_posters.png";return(0,s.jsx)(E,{src:null!==t&&void 0!==t?t:o,alt:"Content Image",onError:e=>{let{currentTarget:t}=e;t.onerror=null,t.src=o}})},j=e=>{let{content:t}=e;const o="https://test.create.diagnal.com/images/"+t.posterImage;return(0,s.jsxs)(b,{children:[(0,s.jsx)(L,{url:o}),(0,s.jsx)(S,{text:t.name})]})},_=n.ZP.div((e=>({minHeight:"100vh",backgroundColor:e.theme.colors.primary}))),C=n.ZP.div((e=>({height:"100%",justifyContent:"space-between",display:"grid",gridTemplateColumns:"30.5% 30.5% 30.5%",paddingLeft:e.theme.spacings.md,paddingRight:e.theme.spacings.md,paddingTop:"calc(".concat(e.theme.spacings.lg," + ").concat(e.theme.spacings.lg," + ").concat(e.theme.spacings.xl,")")}))),D=n.ZP.div((e=>({display:"flex",minHeight:"60vh",maxWidth:"80%",margin:"auto",flexDirection:"column",width:"100%",alignItems:"center",justifySelf:"center",justifyContent:"center"}))),P=n.ZP.img((()=>({width:"45%"}))),R=n.ZP.h3((e=>({color:e.theme.colors.textColor,fontSize:e.theme.fontSizes.header3,fontWeight:400,margin:0,opacity:.8}))),Y=n.ZP.div((e=>({color:e.theme.colors.textColor,fontSize:e.theme.fontSizes.body1,textAlign:"center",fontWeight:300,opacity:.6}))),M=o.p+"static/media/no-result.20129ebe4cd6f574c78f.png",Z=()=>{const{searchTerm:e}=v((e=>e.search));return(0,s.jsxs)(D,{children:[(0,s.jsx)(P,{src:M}),(0,s.jsxs)(R,{children:["Couldn't find ",e]}),(0,s.jsx)(Y,{children:"Try searching for somthing else pr try with a different spelling"})]})},k=e=>{let{contentList:t,searchResult:o,setSearchResult:n}=e;const{searchTerm:r}=v((e=>e.search));return(0,y.useEffect)((()=>{if(r.length<3)return;const e=t.filter((e=>e.name.toLowerCase().includes(r.toLowerCase())));n(e)}),[r]),(0,s.jsxs)(_,{children:[(0,s.jsxs)(C,{children:[r.length<3&&t.length>0&&t.map(((e,t)=>(0,s.jsx)(j,{content:e},"".concat(t,"-").concat(e.name)))),r.length>2&&o.length>0&&o.map(((e,t)=>(0,s.jsx)(j,{content:e},"".concat(t,"-").concat(e.name))))]}),r.length>0&&0===o.length&&(0,s.jsx)(Z,{})]})};var H=o(824),B=function(e,t){return B=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])},B(e,t)};var I=function(){return I=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},I.apply(this,arguments)};var O="Pixel",z="Percent",A={unit:z,value:.8};function F(e){return"number"===typeof e?{unit:z,value:100*e}:"string"===typeof e?e.match(/^(\d*(\.\d+)?)px$/)?{unit:O,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:z,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),A):(console.warn("scrollThreshold should be string or number"),A)}const W=function(e){function t(t){var o=e.call(this,t)||this;return o.lastScrollTop=0,o.actionTriggered=!1,o.startY=0,o.currentY=0,o.dragging=!1,o.maxPullDownDistance=0,o.getScrollableTarget=function(){return o.props.scrollableTarget instanceof HTMLElement?o.props.scrollableTarget:"string"===typeof o.props.scrollableTarget?document.getElementById(o.props.scrollableTarget):(null===o.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},o.onStart=function(e){o.lastScrollTop||(o.dragging=!0,e instanceof MouseEvent?o.startY=e.pageY:e instanceof TouchEvent&&(o.startY=e.touches[0].pageY),o.currentY=o.startY,o._infScroll&&(o._infScroll.style.willChange="transform",o._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},o.onMove=function(e){o.dragging&&(e instanceof MouseEvent?o.currentY=e.pageY:e instanceof TouchEvent&&(o.currentY=e.touches[0].pageY),o.currentY<o.startY||(o.currentY-o.startY>=Number(o.props.pullDownToRefreshThreshold)&&o.setState({pullToRefreshThresholdBreached:!0}),o.currentY-o.startY>1.5*o.maxPullDownDistance||o._infScroll&&(o._infScroll.style.overflow="visible",o._infScroll.style.transform="translate3d(0px, "+(o.currentY-o.startY)+"px, 0px)")))},o.onEnd=function(){o.startY=0,o.currentY=0,o.dragging=!1,o.state.pullToRefreshThresholdBreached&&(o.props.refreshFunction&&o.props.refreshFunction(),o.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame((function(){o._infScroll&&(o._infScroll.style.overflow="auto",o._infScroll.style.transform="none",o._infScroll.style.willChange="unset")}))},o.onScrollListener=function(e){"function"===typeof o.props.onScroll&&setTimeout((function(){return o.props.onScroll&&o.props.onScroll(e)}),0);var t=o.props.height||o._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;o.actionTriggered||((o.props.inverse?o.isElementAtTop(t,o.props.scrollThreshold):o.isElementAtBottom(t,o.props.scrollThreshold))&&o.props.hasMore&&(o.actionTriggered=!0,o.setState({showLoader:!0}),o.props.next&&o.props.next()),o.lastScrollTop=t.scrollTop)},o.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},o.throttledOnScrollListener=function(e,t,o,n){var r,s=!1,i=0;function l(){r&&clearTimeout(r)}function a(){var a=this,c=Date.now()-i,h=arguments;function p(){i=Date.now(),o.apply(a,h)}s||(n&&!r&&p(),l(),void 0===n&&c>e?p():!0!==t&&(r=setTimeout(n?function(){r=void 0}:p,void 0===n?e-c:e)))}return"boolean"!==typeof t&&(n=o,o=t,t=void 0),a.cancel=function(){l(),s=!0},a}(150,o.onScrollListener).bind(o),o.onStart=o.onStart.bind(o),o.onMove=o.onMove.bind(o),o.onEnd=o.onEnd.bind(o),o}return function(e,t){function o(){this.constructor=e}B(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}(t,e),t.prototype.componentDidMount=function(){if("undefined"===typeof this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"===typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!==typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},t.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},t.prototype.componentDidUpdate=function(e){this.props.dataLength!==e.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},t.getDerivedStateFromProps=function(e,t){return e.dataLength!==t.prevDataLength?I(I({},t),{prevDataLength:e.dataLength}):null},t.prototype.isElementAtTop=function(e,t){void 0===t&&(t=.8);var o=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,n=F(t);return n.unit===O?e.scrollTop<=n.value+o-e.scrollHeight+1:e.scrollTop<=n.value/100+o-e.scrollHeight+1},t.prototype.isElementAtBottom=function(e,t){void 0===t&&(t=.8);var o=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,n=F(t);return n.unit===O?e.scrollTop+o>=e.scrollHeight-n.value:e.scrollTop+o>=n.value/100*e.scrollHeight},t.prototype.render=function(){var e=this,t=I({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),o=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),n=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return y.createElement("div",{style:n,className:"infinite-scroll-component__outerdiv"},y.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(t){return e._infScroll=t},style:t},this.props.pullDownToRefresh&&y.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},y.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!o&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},t}(y.Component),N=n.ZP.div((e=>({background:e.theme.colors.primary,overflowY:"scroll",overflowX:"hidden"}))),U=()=>{var e,t,o;const[n,r]=(0,y.useState)(1),[i,l]=(0,y.useState)([]),a=m(),{pageResponse:c,contentItems:h}=v((e=>e.content));return(0,y.useEffect)((()=>{a((0,H.T)("/data/page".concat(n,".json")))}),[]),(0,y.useEffect)((()=>{n>1&&a((0,H.T)("/data/page".concat(n,".json")))}),[a,n]),(0,s.jsxs)(W,{style:N.inlineStyle,dataLength:h.length,next:function(){parseInt(c.page.totalContentItems)>=h.length&&r(n+1)},hasMore:(null===c||void 0===c||null===(e=c.page)||void 0===e?void 0:e.totalContentItems)!==h.length.toString(),loader:(0,s.jsx)("p",{children:"Loading..."}),children:[(0,s.jsx)(x,{text:null!==(t=null===c||void 0===c||null===(o=c.page)||void 0===o?void 0:o.title)&&void 0!==t?t:""}),(0,s.jsx)(k,{contentList:h,searchResult:i,setSearchResult:e=>{l(e)}})]})},X=y.memo(U)}}]);
//# sourceMappingURL=543.27e89dcd.chunk.js.map