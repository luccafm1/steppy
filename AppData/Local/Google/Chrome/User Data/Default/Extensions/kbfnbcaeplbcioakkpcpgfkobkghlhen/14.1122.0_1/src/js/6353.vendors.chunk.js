/*! For license information please see 6353.vendors.chunk.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[6353],{15073:(t,n,e)=>{e.d(n,{u:()=>r});var r,o=e(27378),i=e(40327),u=e(98403),a=e(19751),c=e(2844),f=e(85089),p=e(2834),l=e(9223),s=e(5114),d=e(83078),m=e(90845);!function(t){t.Manager=function(n){var e=n.children,r=n.remSize,i=u.Dx(r).pipe(a.shareReplay({refCount:!0,bufferSize:1}));return m.P.useSingleton("RemSize.Manager"),m.P.useSubscriptionTo(i),o.createElement(t.Context.Provider,{value:i},e)},t.DefaultManager=function(n){var e=n.children;return m.P.useSingleton("RemSize.DefaultManager"),o.createElement(t.Manager,{remSize:t.withRemSizeEffect(t.defaultSizeObserver)},e)},t.defaultSizeObserver=c.aj(f.Lw("(max-width: 1359px)"),f.Lw("(min-width: 1600px)"),(function(t,n){return t?14:n?18:16})),t.withRemSizeEffect=function(n,e){return void 0===e&&(e=t.defaultFontSizeSetter),n.pipe(p.b((function(t){return e(s.some(t))})),l.x(e.bind(null,s.none)),a.shareReplay({refCount:!0,bufferSize:1}))},t.defaultFontSizeSetter=function(n){t.setRootCssVar(document.documentElement,n),t.setRootFontSize(n)},t.Context=o.createContext(t.defaultSizeObserver),t.setRootCssVar=function(t,n){t.style.setProperty("--rem",(0,i.pipe)(n,s.map(String),d.orNull))},t.setRootFontSize=function(t){document.documentElement.style.fontSize=(0,i.pipe)(t,s.map((function(t){return t+"px"})),d.orNull)}}(r||(r={}))},101:(t,n,e)=>{e.d(n,{l:()=>r});var r,o=e(59312),i=e(27378),u=e(95300),a=e(60797),c=e(66310),f=e(24209),p=e(85089),l=e(49708),s=e(85985),d=e(76974),m=e(98403),h=e(17343),g=e(93508),y=e(77176),b=e(2844),v=e(41398),x=e(19751),R=e(18625),w=e(5114),S=e(19962),_=e(18208),k=e(81531);!function(t){var n;!function(t){t.nextLevel=function(t,n){return{rect:t,level:n+1}}}(t.State||(t.State={})),function(t){t.empty={top:0,bottom:0}}(t.Padding||(t.Padding={})),function(t){t.root="root",t.inherit="inherit"}(n=t.ContainerType||(t.ContainerType={})),t.withViewportContainer=function(e,r){return function(b){function v(){var t=null!==b&&b.apply(this,arguments)||this;return t._viewportEl=new u.X(w.none),t._onMount=function(n){t._viewportEl.next(w.fromNullable(n)),t.props.onMount&&n&&t.props.onMount(n)},t}return(0,o.__extends)(v,b),v.prototype.render=function(){var u=this.props,b=u.name,v=u.children,x=this._viewportEl.pipe(a.oA,c.w((function(t){return f.T(p.Qr,l.R(t,"transitionend").pipe(s.h((function(n){return n.target===t}))),d.of(!0).pipe(c.w(m.b2.rafScheduler))).pipe(h.h(t),g.O(t),y.U(S.Rect.fromEl))}))),R=r.type===n.root?t.RootVirtualContainer:t.InheritVirtualContainer;return i.createElement(e,(0,o.__assign)({},this.props,{onMount:this._onMount,name:b}),i.createElement(R,{viewport:x,name:b},v))},v}(i.Component)},t.RootVirtualContainer=function(n){var e=n.viewport,r=n.viewportPadding,o=void 0===r?d.of(t.Padding.empty):r,u=n.name,a=n.children,c=i.useContext(t.Context);return i.createElement(t.Context.Provider,{key:U(u),value:b.aj(e,o,C).pipe(v.M(c.pipe(y.U((function(t){return t.level}))),t.State.nextLevel),x.shareReplay({bufferSize:1,refCount:!0}))},a)},t.InheritVirtualContainer=function(n){var e=n.viewport,r=n.viewportPadding,o=void 0===r?d.of(S.Rect.empty):r,u=n.name,a=n.children,c=i.useContext(t.Context);return i.createElement(t.Context.Provider,{key:U(u),value:b.aj(c.pipe(y.U((function(t){return t.rect}))),b.aj(e||c.pipe(y.U((function(t){return t.rect}))),o,C),S.Rect.intersection).pipe(y.U(w.getOrElse((function(){return k.C8.Logging.getLogger("InheritVirtualContainer").warn("Got an empty rect for inherit viewport",{name:u}),S.Rect.empty}))),v.M(c.pipe(y.U((function(t){return t.level}))),t.State.nextLevel),x.shareReplay({bufferSize:1,refCount:!0}))},a)};var e=R.P((function(){return p.Qr.pipe(h.h(document.body),g.O(document.body),y.U(S.Rect.fromEl),y.U((function(t){return{rect:t,level:0}})))})).pipe(x.shareReplay({bufferSize:1,refCount:!0}));t.Context=i.createContext(e)}(r||(r={}));var C=function(t,n){return{top:t.top+n.top,bottom:t.bottom-n.bottom,height:t.height-n.top-n.bottom,left:t.left,right:t.right,width:t.width}},U=function(t){return"viewportProvider".concat(_.camelize(t))}},11413:(t,n,e)=>{e.d(n,{t:()=>w});var r,o=e(59312),i=e(27378),u=e(57050),a=e(40327),c=e(5739),f=e(12187),p=e(77176),l=e(98403),s=e(2844),d=e(28043),m=e(71249),h=e(45614),g=e(32426),y=e(19962),b=e(22232),v=e(5114),x=e(95195),R=e(95574);!function(t){var n,e,r;function i(t,e){var r=e.position,i=e.point,u={width:Math.trunc(t.width),height:Math.trunc(t.height)};return y.Rect.validate(n.match((function(){return(0,o.__assign)({top:i.y,right:i.x,bottom:i.y+u.height,left:i.x-u.width},u)}),(function(){return(0,o.__assign)({top:i.y-u.height,right:i.x,bottom:i.y,left:i.x-u.width},u)}),(function(){return(0,o.__assign)({top:i.y-u.height,right:i.x+u.width,bottom:i.y,left:i.x},u)}),(function(){return(0,o.__assign)({top:i.y,right:i.x+u.width,bottom:i.y+u.height,left:i.x},u)}))(r))}function u(n){return t.topLeft(y.Rect.Point.normalize({x:n.left,y:n.top}))}!function(t){t.topLeft="topLeft",t.topRight="topRight",t.bottomRight="bottomRight",t.bottomLeft="bottomLeft"}(n=t.Position||(t.Position={})),function(t){t.match=function(n,e,r,o){return function(i){switch(i){case t.topRight:return n();case t.bottomRight:return e();case t.bottomLeft:return r();case t.topLeft:return o();default:return(0,b.vE)(i)}}}}(n=t.Position||(t.Position={})),t.topLeft=function(t){return{position:n.topLeft,point:y.Rect.Point.normalize(t)}},t.topRight=function(t){return{position:n.topRight,point:y.Rect.Point.normalize(t)}},t.bottomRight=function(t){return{position:n.bottomRight,point:y.Rect.Point.normalize(t)}},t.bottomLeft=function(t){return{position:n.bottomLeft,point:y.Rect.Point.normalize(t)}},t.relativeTo=function(t,n){return{position:t.position,point:y.Rect.Point.relativeTo(t.point,n)}},t.empty=t.topLeft(y.Rect.Point.empty),t.toRect=i,t.fromRect=u,t.inRect=function(t,n){var e=n.point;return y.Rect.hasPoint(t,e)},t.toCss=function(t){var e=t.position,r=t.point;return n.match((function(){return{top:r.y,right:r.x}}),(function(){return{right:r.x,bottom:r.y}}),(function(){return{bottom:r.y,left:r.x}}),(function(){return{top:r.y,left:r.x}}))(e)},function(n){n.create=function(t,n){return(0,b.kG)(t.point.x===n.point.x||t.point.y===n.point.y,"can not form Zone without a common dimension",(function(){return JSON.stringify({a:t,b:n})})),[t,n]},n.bySide=function(e,r){return y.Rect.Side.match((function(){return n.create(t.bottomLeft({x:Math.ceil(r.left),y:Math.ceil(r.top)}),t.bottomRight({x:Math.floor(r.right),y:Math.ceil(r.top)}))}),(function(){return n.create(t.topLeft({x:Math.floor(r.right),y:Math.ceil(r.top)}),t.bottomLeft({x:Math.floor(r.right),y:Math.floor(r.bottom)}))}),(function(){return n.create(t.topLeft({x:Math.ceil(r.left),y:Math.floor(r.bottom)}),t.topRight({x:Math.floor(r.right),y:Math.floor(r.bottom)}))}),(function(){return n.create(t.topRight({x:Math.ceil(r.left),y:Math.ceil(r.top)}),t.bottomRight({x:Math.ceil(r.left),y:Math.floor(r.bottom)}))}))(e)}}(e=t.Zone||(t.Zone={})),function(t){t.byAxis=function(t,n){return h.fromFoldable((0,g.getFirstSemigroup)(),m.IX)(y.Rect.Axis.toSides(t).map((function(t){return[t,e.bySide(t,n)]})))}}(t.Variants||(t.Variants={})),function(n){function e(t,n){return(0,a.pipe)(y.Rect.intersection(t,n),v.map((function(t){var e=t.width/n.width,r=t.height/n.height,o=(Number.isNaN(e)?0:e/2)+(Number.isNaN(r)?0:r/2);return(0,b.kG)(o>=0,"quality can not be negavite: ".concat(o)),(0,b.kG)(o<=1,"quality can be higher than 1: ".concat(o)),o})))}n.empty={quality:0,point:t.empty},n.qualityOfIntersection=e,n.byViewport=function(t,n){return{quality:(0,a.pipe)(e(t,n),v.getOrElse((function(){return 0})))+(0,a.pipe)(y.Rect.scale(2,n),x.chain(y.Rect.normalize),v.fromEither,v.chain((function(n){return e(t,n)})),v.getOrElse((function(){return 0}))),point:u(n)}},n.fromZone=function(t,e,r){return(0,a.pipe)(m.IX.traverse(x.either)(r,(function(t){return i(e,t)})),x.chain((function(t){var n=t[0],e=t[1];return y.Rect.join(n,e)})),x.chain((function(t){return y.Box.placeIntoRect(e,t)})),x.map((function(e){return e.map((function(e){return n.byViewport(t,e)}))})))}}(r=t.Qualified||(t.Qualified={})),function(t){t.build=function(t,n,e){return(0,a.pipe)(e,h.map((function(e){return r.fromZone(t,n,e)})))}}(t.QualifiedVariants||(t.QualifiedVariants={})),function(t){var n;!function(t){t[t.left=0]="left",t[t.middle=1]="middle",t[t.right=2]="right",t[t.edges=20]="edges",t[t.any=210]="any"}(n=t.Placement||(t.Placement={})),t.takeBy=function(t,n){return function(e){return(0,a.pipe)(e,h.reduceWithIndex({point:r.empty,side:t},(function(e,r,o){return(0,a.pipe)(o,x.map((function(o){return o.filter((function(r,o){return n.toString().includes(o.toString())&&t===e})).reduce((function(t,n){return n.quality>t.point.quality?{point:n,side:e}:t}),r)})),R.unsafeGet)}))).point}},t.preferBy=function(t,n){return function(e){return(0,a.pipe)(e,h.reduceWithIndex({point:r.empty,side:t},(function(e,r,o){return(0,a.pipe)(o,x.map((function(o){return o.reduce((function(r,o,i){return o.quality>r.point.quality||o.quality===r.point.quality&&n.toString().includes(i.toString())&&t===e?{point:o,side:e}:r}),r)})),R.unsafeGet)}))).point}},t.preferTopMiddle=t.preferBy("top",n.middle),t.preferTopEdges=t.preferBy("top",n.edges)}(t.Selector||(t.Selector={}))}(r||(r={}));var w,S=e(83078),_=e(8125),k=e(44060),C=e(101),U=e(89894),E=e(90845);!function(t){!function(t){t.toSelector=function(t){switch(t){case"top":case"topCenter":return{align:"top",selector:r.Selector.preferBy("top",r.Selector.Placement.middle)};case"topRight":return{align:"top",selector:r.Selector.preferBy("top",r.Selector.Placement.right)};case"topLeft":return{align:"top",selector:r.Selector.preferBy("top",r.Selector.Placement.left)};case"bottom":case"bottomCenter":return{align:"bottom",selector:r.Selector.preferBy("bottom",r.Selector.Placement.middle)};case"bottomRight":return{align:"bottom",selector:r.Selector.preferBy("bottom",r.Selector.Placement.right)};case"bottomLeft":return{align:"bottom",selector:r.Selector.preferBy("bottom",r.Selector.Placement.left)};case"left":return{align:"left",selector:r.Selector.preferBy("left",r.Selector.Placement.middle)};case"right":return{align:"right",selector:r.Selector.preferBy("right",r.Selector.Placement.middle)};case"auto":case"center":return{align:y.Rect.Axis.vertical,selector:r.Selector.preferBy("top",r.Selector.Placement.middle)};default:return(0,b.vE)(t)}}}(t.Alignment||(t.Alignment={})),t.ByPoint=function(t){var n=t.point,e=t.className,u=(0,o.__rest)(t,["point","className"]);return i.createElement(c.F.div,(0,o.__assign)({"data-role":"positioned-container",style:n.pipe(p.U(S.mapOrDefault(r.toCss,{})))},(0,f.Sh)(A.wrapper,e,n.pipe(p.U((function(t){return v.isNone(t)?A.hidden:""})))),u))};var n=function(n){var o,a=E.P.useRectWatcher(),c=a.rect,f=a.onMount,s=l.Dx(n.rect),d=l.Dx(n.pinTargetRect),h=m(n.align),g=e(s,c,h,null!==(o=n.selector)&&void 0!==o?o:r.Selector.preferTopMiddle,d,"relative"===n.position);return i.createElement(t.ByPoint,{mount:f,className:n.className,point:g.pipe(p.U(v.map((function(t){return t.tangentialPoint}))))},!0===n.withPin&&g.pipe(p.U((0,u.ls)(v.chain((function(t){return t.median})),v.map((function(n){return i.createElement(t.Pin,{point:n,key:"pin"})})),v.toNullable))),n.children)};t.ByAbsoluteRect=function(t){return i.createElement(n,(0,o.__assign)({},t,{position:"absolute"}))},t.ByRelativeRect=function(t){return i.createElement(n,(0,o.__assign)({},t,{position:"relative"}))},t.Pin=function(t){var n=l.Dx(t.point).pipe(p.U((function(t){return t.side})),p.U((function(t){return G[t]}))),e=l.Dx(t.point).pipe(p.U((function(t){return t.point})),p.U((function(t){var n=t.x;return{top:t.y,left:n}})));return i.createElement(c.F.i,(0,o.__assign)({"data-role":"pin",style:e},(0,f.Sh)(n,G.wrapper)))};var e=function(t,n,e,o,u,c){return s.aj(t,i.useContext(C.l.Context).pipe(p.U((function(t){return t.rect}))),n.pipe(d.x(v.getEq(y.Box.eq).equals)),u).pipe(p.U((function(t){var n=t[0],i=t[1],u=t[2],f=t[3];return(0,a.pipe)(u,v.map((function(t){var u=r.QualifiedVariants.build(i,t,e(n)),p=o(u).point,l=(0,a.pipe)(r.toRect(t,p),v.fromEither,v.chain((function(t){return(0,a.pipe)(y.Rect.getMedian(n,t),v.map((function(n){return{anchorMedian:n,bodyRect:t}})))})),v.chain((function(t){var n=t.anchorMedian,e=t.bodyRect;if(void 0!==f){var o=y.Rect.stickToSide(y.Rect.Side.invert(n.side),f)(e);return p=r.fromRect(o),(0,a.pipe)(y.Rect.getMedian(f,o),v.map((function(t){var n=t.side,e=t.point;return{side:n,point:y.Rect.Point.relativeTo(e,o)}})))}return(0,a.pipe)(v.some(n),v.map((function(t){var n=t.side,r=t.point;return{side:n,point:y.Rect.Point.relativeTo(r,e)}})))})));return{tangentialPoint:r.relativeTo(p,c?n:i),median:l}})))})))},m=function(t){return void 0===t&&(t=y.Rect.Axis.both),(0,_.CI)(y.Rect.Axis,t)?function(n){return r.Variants.byAxis(t,n)}:function(n){var e;return(e={})[t]=r.Zone.bySide(t,n),e}}}(w||(w={}));var P={position:"absolute",border:"".concat(U.ux.px(7)," solid ").concat(k.Il.BackgroundTooltip),transform:"translate(".concat(U.ux.px(-7),", ").concat(U.ux.px(-7),")")},z={borderTopColor:"transparent",borderRightColor:"transparent",borderLeftColor:"transparent",$nest:{"& + *":{transform:"translateY(".concat(U.ux.px(7),")")}}},M={borderTopColor:"transparent",borderRightColor:"transparent",borderBottomColor:"transparent",$nest:{"& + *":{transform:"translateX(".concat(U.ux.px(-7),")")}}},T={borderRightColor:"transparent",borderBottomColor:"transparent",borderLeftColor:"transparent",$nest:{"& + *":{transform:"translateY(".concat(U.ux.px(-7),")")}}},L={borderTopColor:"transparent",borderBottomColor:"transparent",borderLeftColor:"transparent",$nest:{"& + *":{transform:"translateX(".concat(U.ux.px(7),")")}}},G=U.ux.stylesheet({wrapper:[P],top:[z],right:[M],bottom:[T],left:[L]}),A=U.ux.stylesheet({hidden:[{visibility:"hidden",opacity:0}],wrapper:[{position:"absolute",transition:"opacity .2s"}]})},34217:(t,n,e)=>{e.d(n,{Z:()=>M,UI:()=>Cn});var r={};e.r(r),e.d(r,{audit:()=>I.U,auditTime:()=>V.e,buffer:()=>O.f,bufferCount:()=>q.j,bufferTime:()=>j.e,bufferToggle:()=>F.P,bufferWhen:()=>W.R,catchError:()=>Q.K,combineAll:()=>D.c,combineLatest:()=>Z.a,concat:()=>K.z,concatAll:()=>X.u,concatMap:()=>$.b,concatMapTo:()=>J.w,count:()=>Y.Q,debounce:()=>H.D,debounceTime:()=>_.b,defaultIfEmpty:()=>tt.d,delay:()=>C.g,delayWhen:()=>nt.j,dematerialize:()=>et.D,distinct:()=>rt.E,distinctUntilChanged:()=>ot.x,distinctUntilKeyChanged:()=>it.g,elementAt:()=>ut.T,endWith:()=>at.l,every:()=>ct.y,exhaust:()=>ft.b,exhaustMap:()=>pt.z,expand:()=>lt.jn,filter:()=>v.h,finalize:()=>st.x,find:()=>dt.sE,findIndex:()=>mt.c,first:()=>U.P,flatMap:()=>St.VS,groupBy:()=>ht.v,ignoreElements:()=>gt.l,isEmpty:()=>yt.x,last:()=>bt.Z,map:()=>x.U,mapTo:()=>S.h,materialize:()=>vt.i,max:()=>xt.F,merge:()=>Rt.T,mergeAll:()=>wt.J,mergeMap:()=>St.zg,mergeMapTo:()=>_t.j,mergeScan:()=>kt.fU,min:()=>Ct.V,multicast:()=>Ut.O,observeOn:()=>Et.QV,onErrorResumeNext:()=>Pt.h,pairwise:()=>zt.G,partition:()=>Mt.u,pluck:()=>R.j,publish:()=>A.n,publishBehavior:()=>Tt.n,publishLast:()=>Lt.C,publishReplay:()=>P._,race:()=>Gt.S,reduce:()=>At.u,refCount:()=>z.x,repeat:()=>Bt.r,repeatWhen:()=>Nt.a,retry:()=>It.X,retryWhen:()=>Vt.a,sample:()=>Ot.U,sampleTime:()=>qt.b,scan:()=>w.R,sequenceEqual:()=>jt.NF,share:()=>Ft.B,shareReplay:()=>Wt.d,single:()=>Qt.Z,skip:()=>Dt.T,skipLast:()=>Zt.W,skipUntil:()=>Kt.u,skipWhile:()=>Xt.n,startWith:()=>k.O,subscribeOn:()=>$t.R,switchAll:()=>Jt.B,switchMap:()=>b.w,switchMapTo:()=>Yt.c,take:()=>Ht.q,takeLast:()=>tn.h,takeUntil:()=>nn.R,takeWhile:()=>en.o,tap:()=>y.b,throttle:()=>rn.P,throttleTime:()=>on.p,throwIfEmpty:()=>un.T,timeInterval:()=>an.J,timeout:()=>cn.V,timeoutWith:()=>fn.L,timestamp:()=>pn.A,toArray:()=>ln.q,window:()=>sn.u,windowCount:()=>dn.r,windowTime:()=>mn.I,windowToggle:()=>hn.j,windowWhen:()=>gn.Q,withLatestFrom:()=>yn.M,zip:()=>bn.$,zipAll:()=>vn.h});var o,i=e(59312),u=e(5114),a=e(19429),c=e(45614),f=e(93756),p=e(57050),l=e(24209),s=e(83401),d=e(2844),m=e(76974),h=e(40151),g=e(44586),y=e(2834),b=e(66310),v=e(85985),x=e(77176),R=e(24713),w=e(67434),S=e(17343),_=e(78674),k=e(93508),C=e(13444),U=e(50628),E=e(40327),P=e(48403),z=e(95343);!function(t){t.split=function(t){var n=(0,E.pipe)(t,P._(1),z.x());return{animation:(0,E.pipe)(n,v.h((function(t){return"root"===t.action.key})),x.U((function(t){return{key:t.key,action:t.action.action}}))),action:(0,E.pipe)(n,v.h((function(t){return"children"===t.action.key})),x.U((function(t){return{key:t.key,action:t.action.action}})))}}}(o||(o={}));var M,T={URI:"Observable",map:function(t,n){return t.pipe((0,x.U)(n))},ap:function(t,n){return(0,d.aj)([t,n]).pipe((0,x.U)((function(t){return(0,t[0])(t[1])})))},of:function(t){return(0,m.of)(t)}},L=e(14601),G=e(32952),A=e(62962);function B(t){return function(n){return new g.y((function(e){for(var r=(0,A.n)()(n),o=[],i=new L.w,u=0;u<t.length;++u){var a=new G.xQ;o.push(a),i.add(r.subscribe(a))}return i.add(t.apply(void 0,o).subscribe(e)),i.add(r.connect()),i}))}}!function(t){function n(t){return a.UI(t)}function e(t){return a.I_(t)}function r(t,n){return a.VF((function(e){return(0,p.zG)(e,B((function(e,r){return(0,p.zG)(n(r),b.w((function(n){var r=Object.entries(n)[0],o=r[0],u=r[1];return(0,p.zG)(e,v.h((function(t){return t.key===u})),x.U((function(t){return t.action})),t[u],x.U((function(t){var n;return(0,i.__assign)((0,i.__assign)({},t),((n={})[o]=u,n))})))})))})))}))}function E(t,n){return function(e){return(0,p.zG)(t,v.h((function(t){return t.key===n&&t.action.animationType===e})),x.U((function(t){return t.action})),k.O({kind:"init"}),b.w((function(t){return"end"===t.kind?(0,m.of)(t):(0,p.zG)((0,m.of)({kind:"end",animationType:e}),C.g("start"===t.kind?M:z))})),U.P())}}t.fromSideEffect=function(t,n){return function(e){return(0,l.T)(e.pipe(y.b(t),b.w((function(){return s.C}))),(r=n)instanceof g.y?r:(0,m.of)(r));var r}},t.patchState=n,t.extendActions=e,t.patch=function(t,r){return(0,p.ls)(e(t),n(r))},t.replaceActions=function(t){return a.I_((0,p.ls)(t,b.w((function(){return s.C}))))},t.composeKnot=function(t){return a.VF((function(n){return(0,d.aj)(Object.keys(t).map((function(e){return t[e](n.pipe(v.h((function(t){return t.key===e})),x.U((function(t){return t.action})))).pipe(x.U((function(t){var n;return(n={})[e]=t,n})))}))).pipe(x.U((function(t){return t.reduce((function(t,n){return(0,i.__assign)((0,i.__assign)({},t),n)}))})))}))},t.composeUnion=r,t.composeOption=function(n,e){return r({None:function(){return(0,m.of)(null)},Some:t.composeKnot({value:n})},a.VF((function(t){return(0,p.zG)(t,v.h((function(t){return"Some"===t.key})),x.U((function(t){return t.action.action})),e)})))},t.composeList=function(t,n,e){return a.VF((function(r){return(0,p.zG)(r,B((function(r,o){return(0,p.zG)(n(o),b.w((function(n){return t.traverseWithIndex(T)(n,(function(t,n){return e(n)((0,p.zG)(r,v.h((function(n){return n.key===t})),x.U((function(t){return t.action}))))}))})))})))}))},t.animatingFlow=function(t,n){return function(e){var r=o.split(e),a=r.action,s=r.animation,d=0;return(0,p.zG)(a,v.h((function(t){return t.key===String(d)})),R.j("action"),t,w.R(function(t,n){return function(e,r){var o,i,a=n(),c=u.fromNullable(e[a]),l=(0,p.zG)(c,u.map((function(t){return t.children}))),s=t(l,r);if(u.isNone(s))return(o={})[a]={root:u.none,children:r},o;var d=((i={})[a+1]={root:f.EK(s.value),children:r},i),m=f.IS(s.value);return u.isSome(m)&&u.isSome(l)&&(d[a]={root:m,children:l.value}),d}}(n,(function(){return d})),{}),y.b((function(t){return d=Number(Object.keys(t).pop())})),b.w(function(t,n){return function(e){var r=String(n()-1),o=String(n()),a=(0,p.zG)(u.fromNullable(e[r]),u.chain((function(t){return t.root})),u.map(E(t,r)),u.fold((function(){return h.E}),p.yR),S.h(c.deleteAt(r))),f=(0,p.zG)(e[o].root,u.map(E(t,o)),u.fold((function(){return h.E}),p.yR),S.h((function(t){var n=(0,i.__assign)({},t);return n[o]=(0,i.__assign)((0,i.__assign)({},n[o]),{root:u.none}),n})));return(0,p.zG)((0,l.T)(a,f),w.R((function(t,n){return n(t)}),e),_.b(P),k.O(e))}}(s,(function(){return d}))))}};var P=100,z=500,M=10*z}(M||(M={}));var N=e(27378),I=e(50133),V=e(66081),O=e(36919),q=e(76257),j=e(17160),F=e(41608),W=e(77150),Q=e(91224),D=e(91023),Z=e(57091),K=e(94123),X=e(44212),$=e(71032),J=e(58),Y=e(22815),H=e(87847),tt=e(31524),nt=e(87938),et=e(15789),rt=e(94607),ot=e(28043),it=e(40649),ut=e(87830),at=e(39719),ct=e(50481),ft=e(87451),pt=e(97884),lt=e(58524),st=e(9223),dt=e(22447),mt=e(43918),ht=e(78146),gt=e(49143),yt=e(98606),bt=e(68706),vt=e(83840),xt=e(80018),Rt=e(95093),wt=e(68425),St=e(85321),_t=e(93781),kt=e(40184),Ct=e(24371),Ut=e(24755),Et=e(80544),Pt=e(80334),zt=e(16118),Mt=e(53804),Tt=e(71193),Lt=e(92449),Gt=e(55875),At=e(38934),Bt=e(36303),Nt=e(11838),It=e(75458),Vt=e(62365),Ot=e(13718),qt=e(13685),jt=e(33241),Ft=e(38194),Wt=e(34891),Qt=e(17174),Dt=e(55935),Zt=e(65943),Kt=e(42833),Xt=e(93497),$t=e(65304),Jt=e(69935),Yt=e(598),Ht=e(23063),tn=e(51639),nn=e(2768),en=e(8473),rn=e(25031),on=e(55721),un=e(4750),an=e(23095),cn=e(89068),fn=e(97425),pn=e(91969),ln=e(35052),sn=e(50337),dn=e(6643),mn=e(83782),hn=e(99597),gn=e(45586),yn=e(41398),bn=e(53441),vn=e(9229),xn=e(5739),Rn="root",wn=e(73975),Sn=e(95300);function _n(t){return(0,p.ls)(ot.x(),w.R((function(n,e){return t.reduceWithIndex(e,new Map,(function(t,e,r){var o=n.get(t);return void 0!==o?(e.set(t,o),o.next(r)):e.set(t,new Sn.X(r)),e}))}),new Map),ot.x((n=wn.f7((function(){return!0})),{equals:function(t,e){var r;if(t===e)return!0;if(t.size===e.size){for(var o=t.keys(),i=void 0;null===(r=(i=o.next()).done)||void 0===r||!r;)if(!e.has(i.value)||!n.equals(t.get(i.value),e.get(i.value)))return!1;return!0}return!1}}).equals));var n}var kn=e(98036);var Cn,Un=function(){function t(t){this._keySelector=t}return t.prototype.call=function(t,n){return n.subscribe(new En(t,this._keySelector))},t}(),En=function(t){function n(n,e){var r=t.call(this,n)||this;return r.destination=n,r._keySelector=e,r.attemptedToUnsubscribe=!1,r.count=0,r._currentGroup=u.none,r}return(0,i.__extends)(n,t),n.prototype._next=function(t){var n=this,e=this._keySelector(t);(0,E.pipe)(this._currentGroup,u.fold((function(){return n._createGroup(e,t)}),(function(r){var o=r.key,i=r.group;o!==e?(i.complete(),n._currentGroup=u.none,n._createGroup(e,t)):i.closed||i.next(t)})))},n.prototype._createGroup=function(t,n){var e=new Sn.X(n);this._currentGroup=u.some({key:t,group:e}),this.destination.next(new ht.T(t,e,this))},n.prototype._error=function(t){(0,E.pipe)(this._currentGroup,u.map((function(n){return n.group.error(t)}))),this._currentGroup=u.none,this.destination.error(t)},n.prototype._complete=function(){(0,E.pipe)(this._currentGroup,u.map((function(t){return t.group.complete()}))),this._currentGroup=u.none,this.destination.complete()},n.prototype.unsubscribe=function(){this.closed||(this.attemptedToUnsubscribe=!0,0===this.count&&t.prototype.unsubscribe.call(this))},n}(kn.L);function Pn(t,n){return(0,E.pipe)(n,Cn.mapAction((function(n){return{key:t,action:n}})),a.UI((function(n){return null===n?n:N.cloneElement(n,{key:t})})))}function zn(t,n,e){var r,o;if(Tn(t)&&n.length>0)return{grid:t.grid,child:zn(t.child,n,e)};if(Mn(t)&&n.length>0){var u=n[0],a=n.slice(1);return{grid:t.grid,children:(0,i.__assign)((0,i.__assign)({},t.children),(r={},r[u]=zn(t.children[u],a,e),r))}}if(Ln(t)&&n.length>0)return{foldable:t.foldable,of:zn(t.of,n,e)};if(Gn(t)&&n.length>0){u=n[0],a=n.slice(1);return{tag:t.tag,members:(0,i.__assign)((0,i.__assign)({},t.members),(o={},o[u]=zn(t.members[u],a,e),o))}}return e(t)}function Mn(t){return"children"in t}function Tn(t){return"child"in t}function Ln(t){return"foldable"in t}function Gn(t){return"members"in t}function An(t){return N.createElement(xn.F.Fragment,{children:t})}!function(t){function n(t){return Tn(t)?function(e){var r=new Proxy({},{get:function(){var r;return n(t.child)({children:null,notify:e.notify,state:null!==(r=e.state)&&void 0!==r?r:h.E})}});return t.grid({children:r,state:h.E,notify:p.Q1})}:Mn(t)?function(e){return(0,E.pipe)(e.state,_n(c.record),x.U((function(r){var o=(0,E.pipe)(t.children,c.mapWithIndex((function(t,o){return Pn(t,n(o))({children:null,notify:e.notify,state:r.get(t)||h.E})})));return t.grid({children:o,state:r.get(Rn)||h.E,notify:function(t){return e.notify({key:Rn,action:t})}})})),An)}:Ln(t)?function(e){return(0,E.pipe)(e.state,_n(t.foldable),w.R((function(r,o){var i=new Map;return o.forEach((function(o,u){var a=r.get(u);if(void 0!==a)i.set(u,a);else{var c=Pn(u,n(t.of));i.set(u,c({children:null,notify:e.notify,state:o}))}})),i}),new Map),x.U((function(t){var n=new Array;return t.forEach((function(t){return n.push(t)})),n})),An)}:Gn(t)?function(e){return(0,E.pipe)(e.state,(r=t.tag,function(t){return t.pipe((function(t){return t.lift(new Un((function(t){return t[r]})))}))}),x.U((function(r){return Pn(r.key,n(t.members[r.key]))({children:null,notify:e.notify,state:r})})),An);var r}:t}function e(t,n,r){return Mn(t)?{grid:e(t.grid,n,r),children:t.children}:Ln(t)?{foldable:t.foldable,of:e(t.of,n,r)}:function(e){return t({children:e.children,notify:(0,E.pipe)(e.notify,a.I_(r)),state:(0,E.pipe)(e.state,x.U(n))})}}!function(n){n.empty=function(){return null},n.make=function(n){return t.Grid.make(n)}}(t.Node||(t.Node={})),function(t){t.make=function(t){return function(n){var e=n.children,o=n.state,i=n.notify;return N.createElement(t,{slots:e,state:o,notify:function(t){return function(){return i(t)}},view:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return(0,E.pipe)(o,R.j.apply(r,t),ot.x())}})}}}(t.Grid||(t.Grid={})),function(t){t.make=function(t,n){return{grid:t,child:n}}}(t.Composite||(t.Composite={})),function(t){t.make=function(t,n){return{grid:t,children:n}}}(t.Knot||(t.Knot={})),function(t){t.make=function(t){return{grid:function(t){return An((0,E.pipe)(t.children,c.collect((function(t,n){return n}))))},children:t}}}(t.Group||(t.Group={})),function(t){t.make=function(t,n){return{foldable:t,of:n}}}(t.List||(t.List={})),function(n){n.make=function(t,n){return{tag:t,members:n}},n.asOption=function(n){return{tag:"_tag",members:{Some:t.Group.make({value:n}),None:t.Node.empty}}}}(t.Union||(t.Union={})),function(t){t.make=function(t,n){return function(e){var r;return N.createElement(xn.F.div,((r={})["data-purpose"]="animation-wrapper",r.children=e.children.children,r.className=(0,E.pipe)(e.state,x.U((0,p.ls)(u.map((function(e){return Boolean(t[e])?t[e]:n[e]})),u.toUndefined)),ot.x()),r.onAnimationStart=(0,E.pipe)(e.state,x.U(u.fold((function(){return p.Q1}),(function(t){return function(){return e.notify({kind:"start",animationType:t})}})))),r.onAnimationEnd=(0,E.pipe)(e.state,x.U(u.fold((function(){return p.Q1}),(function(t){return function(){return e.notify({kind:"end",animationType:t})}})))),r))}}}(t.Transition||(t.Transition={})),function(n){n.make=function(n,e){return t.List.make(c.record,t.Knot.make(n,{children:e}))}}(t.Animated||(t.Animated={})),t.mount=function(t,e){var r=new G.xQ;return n(t)({children:null,notify:function(t){return r.next(t)},state:(0,E.pipe)(e(r),P._(1),z.x())})},t.patch=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return function(n){return function(e){return zn(e,t,n)}}},t.mapAction=function(t){return function(n){return e(n,p.yR,t)}},t.contramapState=function(t){return function(n){return e(n,t,p.yR)}},t.squash=n,t.promap=e}(Cn||(Cn={}))}}]);