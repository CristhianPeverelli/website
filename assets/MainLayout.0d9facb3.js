import{v as Rt,a as It,Q as Oe,u as Ft,b as Dt}from"./QBtn.26774a99.js";import{g as mt,a as ht,h as Wt,b as jt,c as we,_ as Nt,Q as Ut}from"./plugin-vue_export-helper.8928cb99.js";import{c as P,h as F,a as bt,b as Xt,d as Ye,e as Ve}from"./render.8f99f849.js";import{c as f,h as _,r as k,i as Ae,o as N,a as U,n as ce,b as G,g as H,l as V,d as de,e as Q,f as fe,w as C,H as Ke,j as O,s as Qe,k as Yt,m as Kt,P as Gt,p as Jt,q as ne,t as _e,u as Ge,v as qe,x as Ee,y as Ce,z as Zt,A as Re,B as el,C as yt,D as ae,E as tl,F as ll,G as se,I as Pe,J as $,K as L,L as il,M as K,N as Je,O as nl,Q as al,R as ol,S as rl,T as gt,U as ul,V as sl,W as cl,X as dl,Y as fl}from"./index.f2ca353e.js";import{u as Ie,a as Fe}from"./use-dark.e1703985.js";import{Q as De}from"./dom.de440e35.js";var Ze=P({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:l}){const i=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>_("div",{class:i.value},F(l.default))}}),et=P({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:l}){const i=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>_("div",{class:i.value,role:"toolbar"},F(l.default))}});function vl(){const e=k(!Ae.value);return e.value===!1&&N(()=>{e.value=!0}),{isHydrated:e}}const pt=typeof ResizeObserver!="undefined",tt=pt===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var ze=P({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:l}){let i=null,a,t={width:-1,height:-1};function n(c){c===!0||e.debounce===0||e.debounce==="0"?r():i===null&&(i=setTimeout(r,e.debounce))}function r(){if(i!==null&&(clearTimeout(i),i=null),a){const{offsetWidth:c,offsetHeight:d}=a;(c!==t.width||d!==t.height)&&(t={width:c,height:d},l("resize",t))}}const{proxy:v}=H();if(v.trigger=n,pt===!0){let c;const d=o=>{a=v.$el.parentNode,a?(c=new ResizeObserver(n),c.observe(a),r()):o!==!0&&G(()=>{d(!0)})};return N(()=>{d()}),U(()=>{i!==null&&clearTimeout(i),c!==void 0&&(c.disconnect!==void 0?c.disconnect():a&&c.unobserve(a))}),ce}else{let o=function(){i!==null&&(clearTimeout(i),i=null),d!==void 0&&(d.removeEventListener!==void 0&&d.removeEventListener("resize",n,V.passive),d=void 0)},h=function(){o(),a&&a.contentDocument&&(d=a.contentDocument.defaultView,d.addEventListener("resize",n,V.passive),r())};const{isHydrated:c}=vl();let d;return N(()=>{G(()=>{a=v.$el,a&&h()})}),U(o),()=>{if(c.value===!0)return _("object",{class:"q--avoid-card-border",style:tt.style,tabindex:-1,type:"text/html",data:tt.url,"aria-hidden":"true",onLoad:h})}}}}),ml=P({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:l,emit:i}){const{proxy:{$q:a}}=H(),t=de(fe,Q);if(t===Q)return console.error("QHeader needs to be child of QLayout"),Q;const n=k(parseInt(e.heightHint,10)),r=k(!0),v=f(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||a.platform.is.ios&&t.isContainer.value===!0),c=f(()=>{if(e.modelValue!==!0)return 0;if(v.value===!0)return r.value===!0?n.value:0;const u=n.value-t.scroll.value.position;return u>0?u:0}),d=f(()=>e.modelValue!==!0||v.value===!0&&r.value!==!0),o=f(()=>e.modelValue===!0&&d.value===!0&&e.reveal===!0),h=f(()=>"q-header q-layout__section--marginal "+(v.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(d.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),q=f(()=>{const u=t.rows.value.top,b={};return u[0]==="l"&&t.left.space===!0&&(b[a.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),u[2]==="r"&&t.right.space===!0&&(b[a.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),b});function m(u,b){t.update("header",u,b)}function y(u,b){u.value!==b&&(u.value=b)}function B({height:u}){y(n,u),m("size",u)}function S(u){o.value===!0&&y(r,!0),i("focusin",u)}C(()=>e.modelValue,u=>{m("space",u),y(r,!0),t.animate()}),C(c,u=>{m("offset",u)}),C(()=>e.reveal,u=>{u===!1&&y(r,e.modelValue)}),C(r,u=>{t.animate(),i("reveal",u)}),C(t.scroll,u=>{e.reveal===!0&&y(r,u.direction==="up"||u.position<=e.revealOffset||u.position-u.inflectionPoint<100)});const p={};return t.instances.header=p,e.modelValue===!0&&m("size",n.value),m("space",e.modelValue),m("offset",c.value),U(()=>{t.instances.header===p&&(t.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const u=bt(l.default,[]);return e.elevated===!0&&u.push(_("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(_(ze,{debounce:0,onResize:B})),_("header",{class:h.value,style:q.value,onFocusin:S},u)}}}),Me=P({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:l}){const i=f(()=>parseInt(e.lines,10)),a=f(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(i.value===1?" ellipsis":"")),t=f(()=>e.lines!==void 0&&i.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":i.value}:null);return()=>_("div",{style:t.value,class:a.value},F(l.default))}}),hl=P({name:"QList",props:{...Ie,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:l}){const i=H(),a=Fe(e,i.proxy.$q),t=f(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(a.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>_(e.tag,{class:t.value},F(l.default))}});function bl(e,l,i){let a;function t(){a!==void 0&&(Ke.remove(a),a=void 0)}return U(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){a={condition:()=>i.value===!0,handler:l},Ke.add(a)}}}const wt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},_t=["beforeShow","show","beforeHide","hide"];function qt({showing:e,canShow:l,hideOnRouteChange:i,handleShow:a,handleHide:t,processOnMount:n}){const r=H(),{props:v,emit:c,proxy:d}=r;let o;function h(u){e.value===!0?y(u):q(u)}function q(u){if(v.disable===!0||u!==void 0&&u.qAnchorHandled===!0||l!==void 0&&l(u)!==!0)return;const b=v["onUpdate:modelValue"]!==void 0;b===!0&&(c("update:modelValue",!0),o=u,G(()=>{o===u&&(o=void 0)})),(v.modelValue===null||b===!1)&&m(u)}function m(u){e.value!==!0&&(e.value=!0,c("beforeShow",u),a!==void 0?a(u):c("show",u))}function y(u){if(v.disable===!0)return;const b=v["onUpdate:modelValue"]!==void 0;b===!0&&(c("update:modelValue",!1),o=u,G(()=>{o===u&&(o=void 0)})),(v.modelValue===null||b===!1)&&B(u)}function B(u){e.value!==!1&&(e.value=!1,c("beforeHide",u),t!==void 0?t(u):c("hide",u))}function S(u){v.disable===!0&&u===!0?v["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):u===!0!==e.value&&(u===!0?m:B)(o)}C(()=>v.modelValue,S),i!==void 0&&Rt(r)===!0&&C(()=>d.$route.fullPath,()=>{i.value===!0&&e.value===!0&&y()}),n===!0&&N(()=>{S(v.modelValue)});const p={show:q,hide:y,toggle:h};return Object.assign(d,p),p}let ee=0,ke,Se,te,xe=!1,lt,it,nt,j=null;function yl(e){gl(e)&&Qe(e)}function gl(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const l=Yt(e),i=e.shiftKey&&!e.deltaX,a=!i&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=i||a?e.deltaY:e.deltaX;for(let n=0;n<l.length;n++){const r=l[n];if(Wt(r,a))return a?t<0&&r.scrollTop===0?!0:t>0&&r.scrollTop+r.clientHeight===r.scrollHeight:t<0&&r.scrollLeft===0?!0:t>0&&r.scrollLeft+r.clientWidth===r.scrollWidth}return!0}function at(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function oe(e){xe!==!0&&(xe=!0,requestAnimationFrame(()=>{xe=!1;const{height:l}=e.target,{clientHeight:i,scrollTop:a}=document.scrollingElement;(te===void 0||l!==window.innerHeight)&&(te=i-l,document.scrollingElement.scrollTop=a),a>te&&(document.scrollingElement.scrollTop-=Math.ceil((a-te)/8))}))}function ot(e){const l=document.body,i=window.visualViewport!==void 0;if(e==="add"){const{overflowY:a,overflowX:t}=window.getComputedStyle(l);ke=mt(window),Se=ht(window),lt=l.style.left,it=l.style.top,nt=window.location.href,l.style.left=`-${ke}px`,l.style.top=`-${Se}px`,t!=="hidden"&&(t==="scroll"||l.scrollWidth>window.innerWidth)&&l.classList.add("q-body--force-scrollbar-x"),a!=="hidden"&&(a==="scroll"||l.scrollHeight>window.innerHeight)&&l.classList.add("q-body--force-scrollbar-y"),l.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,O.is.ios===!0&&(i===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",oe,V.passiveCapture),window.visualViewport.addEventListener("scroll",oe,V.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",at,V.passiveCapture))}O.is.desktop===!0&&O.is.mac===!0&&window[`${e}EventListener`]("wheel",yl,V.notPassive),e==="remove"&&(O.is.ios===!0&&(i===!0?(window.visualViewport.removeEventListener("resize",oe,V.passiveCapture),window.visualViewport.removeEventListener("scroll",oe,V.passiveCapture)):window.removeEventListener("scroll",at,V.passiveCapture)),l.classList.remove("q-body--prevent-scroll"),l.classList.remove("q-body--force-scrollbar-x"),l.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,l.style.left=lt,l.style.top=it,window.location.href===nt&&window.scrollTo(ke,Se),te=void 0)}function pl(e){let l="add";if(e===!0){if(ee++,j!==null){clearTimeout(j),j=null;return}if(ee>1)return}else{if(ee===0||(ee--,ee>0))return;if(l="remove",O.is.ios===!0&&O.is.nativeMobile===!0){j!==null&&clearTimeout(j),j=setTimeout(()=>{ot(l),j=null},100);return}}ot(l)}function wl(){let e;return{preventBodyScroll(l){l!==e&&(e!==void 0||l===!0)&&(e=l,pl(l))}}}function _l(){let e=null;const l=H();function i(){e!==null&&(clearTimeout(e),e=null)}return Kt(i),U(i),{removeTimeout:i,registerTimeout(a,t){i(),It(l)===!1&&(e=setTimeout(()=>{e=null,a()},t))}}}const We={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},ql=Object.keys(We);We.all=!0;function rt(e){const l={};for(const i of ql)e[i]===!0&&(l[i]=!0);return Object.keys(l).length===0?We:(l.horizontal===!0?l.left=l.right=!0:l.left===!0&&l.right===!0&&(l.horizontal=!0),l.vertical===!0?l.up=l.down=!0:l.up===!0&&l.down===!0&&(l.vertical=!0),l.horizontal===!0&&l.vertical===!0&&(l.all=!0),l)}const Cl=["INPUT","TEXTAREA"];function ut(e,l){return l.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof l.handler=="function"&&Cl.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(l.uid)===-1)}function kl(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Gt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Le(e,l,i){const a=Ee(e);let t,n=a.left-l.event.x,r=a.top-l.event.y,v=Math.abs(n),c=Math.abs(r);const d=l.direction;d.horizontal===!0&&d.vertical!==!0?t=n<0?"left":"right":d.horizontal!==!0&&d.vertical===!0?t=r<0?"up":"down":d.up===!0&&r<0?(t="up",v>c&&(d.left===!0&&n<0?t="left":d.right===!0&&n>0&&(t="right"))):d.down===!0&&r>0?(t="down",v>c&&(d.left===!0&&n<0?t="left":d.right===!0&&n>0&&(t="right"))):d.left===!0&&n<0?(t="left",v<c&&(d.up===!0&&r<0?t="up":d.down===!0&&r>0&&(t="down"))):d.right===!0&&n>0&&(t="right",v<c&&(d.up===!0&&r<0?t="up":d.down===!0&&r>0&&(t="down")));let o=!1;if(t===void 0&&i===!1){if(l.event.isFirst===!0||l.event.lastDir===void 0)return{};t=l.event.lastDir,o=!0,t==="left"||t==="right"?(a.left-=n,v=0,n=0):(a.top-=r,c=0,r=0)}return{synthetic:o,payload:{evt:e,touch:l.event.mouse!==!0,mouse:l.event.mouse===!0,position:a,direction:t,isFirst:l.event.isFirst,isFinal:i===!0,duration:Date.now()-l.event.time,distance:{x:v,y:c},offset:{x:n,y:r},delta:{x:a.left-l.event.lastX,y:a.top-l.event.lastY}}}}let Sl=0;var Be=Xt({name:"touch-pan",beforeMount(e,{value:l,modifiers:i}){if(i.mouse!==!0&&O.has.touch!==!0)return;function a(n,r){i.mouse===!0&&r===!0?Qe(n):(i.stop===!0&&qe(n),i.prevent===!0&&Ge(n))}const t={uid:"qvtp_"+Sl++,handler:l,modifiers:i,direction:rt(i),noop:ce,mouseStart(n){ut(n,t)&&Jt(n)&&(ne(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(n,!0))},touchStart(n){if(ut(n,t)){const r=n.target;ne(t,"temp",[[r,"touchmove","move","notPassiveCapture"],[r,"touchcancel","end","passiveCapture"],[r,"touchend","end","passiveCapture"]]),t.start(n)}},start(n,r){if(O.is.firefox===!0&&_e(e,!0),t.lastEvt=n,r===!0||i.stop===!0){if(t.direction.all!==!0&&(r!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const d=n.type.indexOf("mouse")!==-1?new MouseEvent(n.type,n):new TouchEvent(n.type,n);n.defaultPrevented===!0&&Ge(d),n.cancelBubble===!0&&qe(d),Object.assign(d,{qKeyEvent:n.qKeyEvent,qClickOutside:n.qClickOutside,qAnchorHandled:n.qAnchorHandled,qClonedBy:n.qClonedBy===void 0?[t.uid]:n.qClonedBy.concat(t.uid)}),t.initialEvent={target:n.target,event:d}}qe(n)}const{left:v,top:c}=Ee(n);t.event={x:v,y:c,time:Date.now(),mouse:r===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:v,lastY:c}},move(n){if(t.event===void 0)return;const r=Ee(n),v=r.left-t.event.x,c=r.top-t.event.y;if(v===0&&c===0)return;t.lastEvt=n;const d=t.event.mouse===!0,o=()=>{a(n,d);let m;i.preserveCursor!==!0&&i.preservecursor!==!0&&(m=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),d===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),kl(),t.styleCleanup=y=>{if(t.styleCleanup=void 0,m!==void 0&&(document.documentElement.style.cursor=m),document.body.classList.remove("non-selectable"),d===!0){const B=()=>{document.body.classList.remove("no-pointer-events--children")};y!==void 0?setTimeout(()=>{B(),y()},50):B()}else y!==void 0&&y()}};if(t.event.detected===!0){t.event.isFirst!==!0&&a(n,t.event.mouse);const{payload:m,synthetic:y}=Le(n,t,!1);m!==void 0&&(t.handler(m)===!1?t.end(n):(t.styleCleanup===void 0&&t.event.isFirst===!0&&o(),t.event.lastX=m.position.left,t.event.lastY=m.position.top,t.event.lastDir=y===!0?void 0:m.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||d===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){o(),t.event.detected=!0,t.move(n);return}const h=Math.abs(v),q=Math.abs(c);h!==q&&(t.direction.horizontal===!0&&h>q||t.direction.vertical===!0&&h<q||t.direction.up===!0&&h<q&&c<0||t.direction.down===!0&&h<q&&c>0||t.direction.left===!0&&h>q&&v<0||t.direction.right===!0&&h>q&&v>0?(t.event.detected=!0,t.move(n)):t.end(n,!0))},end(n,r){if(t.event!==void 0){if(Ce(t,"temp"),O.is.firefox===!0&&_e(e,!1),r===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Le(n===void 0?t.lastEvt:n,t).payload);const{payload:v}=Le(n===void 0?t.lastEvt:n,t,!0),c=()=>{t.handler(v)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,i.mouse===!0){const n=i.mouseCapture===!0||i.mousecapture===!0?"Capture":"";ne(t,"main",[[e,"mousedown","mouseStart",`passive${n}`]])}O.has.touch===!0&&ne(t,"main",[[e,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,l){const i=e.__qtouchpan;i!==void 0&&(l.oldValue!==l.value&&(typeof value!="function"&&i.end(),i.handler=l.value),i.direction=rt(l.modifiers))},beforeUnmount(e){const l=e.__qtouchpan;l!==void 0&&(l.event!==void 0&&l.end(),Ce(l,"main"),Ce(l,"temp"),O.is.firefox===!0&&_e(e,!1),l.styleCleanup!==void 0&&l.styleCleanup(),delete e.__qtouchpan)}});function re(e,l,i){return i<=l?l:Math.min(i,Math.max(l,e))}const st=150;var xl=P({name:"QDrawer",inheritAttrs:!1,props:{...wt,...Ie,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[..._t,"onLayout","miniState"],setup(e,{slots:l,emit:i,attrs:a}){const t=H(),{proxy:{$q:n}}=t,r=Fe(e,n),{preventBodyScroll:v}=wl(),{registerTimeout:c,removeTimeout:d}=_l(),o=de(fe,Q);if(o===Q)return console.error("QDrawer needs to be child of QLayout"),Q;let h,q=null,m;const y=k(e.behavior==="mobile"||e.behavior!=="desktop"&&o.totalWidth.value<=e.breakpoint),B=f(()=>e.mini===!0&&y.value!==!0),S=f(()=>B.value===!0?e.miniWidth:e.width),p=k(e.showIfAbove===!0&&y.value===!1?!0:e.modelValue===!0),u=f(()=>e.persistent!==!0&&(y.value===!0||xt.value===!0));function b(s,w){if(D(),s!==!1&&o.animate(),M(0),y.value===!0){const E=o.instances[le.value];E!==void 0&&E.belowBreakpoint===!0&&E.hide(!1),R(1),o.isContainer.value!==!0&&v(!0)}else R(0),s!==!1&&ye(!1);c(()=>{s!==!1&&ye(!0),w!==!0&&i("show",s)},st)}function g(s,w){J(),s!==!1&&o.animate(),R(0),M(X.value*S.value),ge(),w!==!0?c(()=>{i("hide",s)},st):d()}const{show:x,hide:z}=qt({showing:p,hideOnRouteChange:u,handleShow:b,handleHide:g}),{addToHistory:D,removeFromHistory:J}=bl(p,z,u),W={belowBreakpoint:y,hide:z},A=f(()=>e.side==="right"),X=f(()=>(n.lang.rtl===!0?-1:1)*(A.value===!0?1:-1)),je=k(0),Y=k(!1),ve=k(!1),Ne=k(S.value*X.value),le=f(()=>A.value===!0?"left":"right"),me=f(()=>p.value===!0&&y.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:S.value:0),he=f(()=>e.overlay===!0||e.miniToOverlay===!0||o.view.value.indexOf(A.value?"R":"L")!==-1||n.platform.is.ios===!0&&o.isContainer.value===!0),Z=f(()=>e.overlay===!1&&p.value===!0&&y.value===!1),xt=f(()=>e.overlay===!0&&p.value===!0&&y.value===!1),Lt=f(()=>"fullscreen q-drawer__backdrop"+(p.value===!1&&Y.value===!1?" hidden":"")),Bt=f(()=>({backgroundColor:`rgba(0,0,0,${je.value*.4})`})),Ue=f(()=>A.value===!0?o.rows.value.top[2]==="r":o.rows.value.top[0]==="l"),Tt=f(()=>A.value===!0?o.rows.value.bottom[2]==="r":o.rows.value.bottom[0]==="l"),$t=f(()=>{const s={};return o.header.space===!0&&Ue.value===!1&&(he.value===!0?s.top=`${o.header.offset}px`:o.header.space===!0&&(s.top=`${o.header.size}px`)),o.footer.space===!0&&Tt.value===!1&&(he.value===!0?s.bottom=`${o.footer.offset}px`:o.footer.space===!0&&(s.bottom=`${o.footer.size}px`)),s}),Et=f(()=>{const s={width:`${S.value}px`,transform:`translateX(${Ne.value}px)`};return y.value===!0?s:Object.assign(s,$t.value)}),Pt=f(()=>"q-drawer__content fit "+(o.isContainer.value!==!0?"scroll":"overflow-auto")),zt=f(()=>`q-drawer q-drawer--${e.side}`+(ve.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(r.value===!0?" q-drawer--dark q-dark":"")+(Y.value===!0?" no-transition":p.value===!0?"":" q-layout--prevent-focus")+(y.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${B.value===!0?"mini":"standard"}`+(he.value===!0||Z.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Ue.value===!0?" q-drawer--top-padding":""))),Mt=f(()=>{const s=n.lang.rtl===!0?e.side:le.value;return[[Be,At,void 0,{[s]:!0,mouse:!0}]]}),Ht=f(()=>{const s=n.lang.rtl===!0?le.value:e.side;return[[Be,Xe,void 0,{[s]:!0,mouse:!0}]]}),Ot=f(()=>{const s=n.lang.rtl===!0?le.value:e.side;return[[Be,Xe,void 0,{[s]:!0,mouse:!0,mouseAllDir:!0}]]});function be(){Qt(y,e.behavior==="mobile"||e.behavior!=="desktop"&&o.totalWidth.value<=e.breakpoint)}C(y,s=>{s===!0?(h=p.value,p.value===!0&&z(!1)):e.overlay===!1&&e.behavior!=="mobile"&&h!==!1&&(p.value===!0?(M(0),R(0),ge()):x(!1))}),C(()=>e.side,(s,w)=>{o.instances[w]===W&&(o.instances[w]=void 0,o[w].space=!1,o[w].offset=0),o.instances[s]=W,o[s].size=S.value,o[s].space=Z.value,o[s].offset=me.value}),C(o.totalWidth,()=>{(o.isContainer.value===!0||document.qScrollPrevented!==!0)&&be()}),C(()=>e.behavior+e.breakpoint,be),C(o.isContainer,s=>{p.value===!0&&v(s!==!0),s===!0&&be()}),C(o.scrollbarWidth,()=>{M(p.value===!0?0:void 0)}),C(me,s=>{I("offset",s)}),C(Z,s=>{i("onLayout",s),I("space",s)}),C(A,()=>{M()}),C(S,s=>{M(),pe(e.miniToOverlay,s)}),C(()=>e.miniToOverlay,s=>{pe(s,S.value)}),C(()=>n.lang.rtl,()=>{M()}),C(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(Vt(),o.animate())}),C(B,s=>{i("miniState",s)});function M(s){s===void 0?G(()=>{s=p.value===!0?0:S.value,M(X.value*s)}):(o.isContainer.value===!0&&A.value===!0&&(y.value===!0||Math.abs(s)===S.value)&&(s+=X.value*o.scrollbarWidth.value),Ne.value=s)}function R(s){je.value=s}function ye(s){const w=s===!0?"remove":o.isContainer.value!==!0?"add":"";w!==""&&document.body.classList[w]("q-body--drawer-toggle")}function Vt(){q!==null&&clearTimeout(q),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ve.value=!0,q=setTimeout(()=>{q=null,ve.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function At(s){if(p.value!==!1)return;const w=S.value,E=re(s.distance.x,0,w);if(s.isFinal===!0){E>=Math.min(75,w)===!0?x():(o.animate(),R(0),M(X.value*w)),Y.value=!1;return}M((n.lang.rtl===!0?A.value!==!0:A.value)?Math.max(w-E,0):Math.min(0,E-w)),R(re(E/w,0,1)),s.isFirst===!0&&(Y.value=!0)}function Xe(s){if(p.value!==!0)return;const w=S.value,E=s.direction===e.side,ie=(n.lang.rtl===!0?E!==!0:E)?re(s.distance.x,0,w):0;if(s.isFinal===!0){Math.abs(ie)<Math.min(75,w)===!0?(o.animate(),R(1),M(0)):z(),Y.value=!1;return}M(X.value*ie),R(re(1-ie/w,0,1)),s.isFirst===!0&&(Y.value=!0)}function ge(){v(!1),ye(!0)}function I(s,w){o.update(e.side,s,w)}function Qt(s,w){s.value!==w&&(s.value=w)}function pe(s,w){I("size",s===!0?e.miniWidth:w)}return o.instances[e.side]=W,pe(e.miniToOverlay,S.value),I("space",Z.value),I("offset",me.value),e.showIfAbove===!0&&e.modelValue!==!0&&p.value===!0&&e["onUpdate:modelValue"]!==void 0&&i("update:modelValue",!0),N(()=>{i("onLayout",Z.value),i("miniState",B.value),h=e.showIfAbove===!0;const s=()=>{(p.value===!0?b:g)(!1,!0)};if(o.totalWidth.value!==0){G(s);return}m=C(o.totalWidth,()=>{m(),m=void 0,p.value===!1&&e.showIfAbove===!0&&y.value===!1?x(!1):s()})}),U(()=>{m!==void 0&&m(),q!==null&&(clearTimeout(q),q=null),p.value===!0&&ge(),o.instances[e.side]===W&&(o.instances[e.side]=void 0,I("size",0),I("offset",0),I("space",!1))}),()=>{const s=[];y.value===!0&&(e.noSwipeOpen===!1&&s.push(Zt(_("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Mt.value)),s.push(Ye("div",{ref:"backdrop",class:Lt.value,style:Bt.value,"aria-hidden":"true",onClick:z},void 0,"backdrop",e.noSwipeBackdrop!==!0&&p.value===!0,()=>Ot.value)));const w=B.value===!0&&l.mini!==void 0,E=[_("div",{...a,key:""+w,class:[Pt.value,a.class]},w===!0?l.mini():F(l.default))];return e.elevated===!0&&p.value===!0&&E.push(_("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),s.push(Ye("aside",{ref:"content",class:zt.value,style:Et.value},E,"contentclose",e.noSwipeClose!==!0&&y.value===!0,()=>Ht.value)),_("div",{class:"q-drawer-container"},s)}}}),Ll=P({name:"QPageContainer",setup(e,{slots:l}){const{proxy:{$q:i}}=H(),a=de(fe,Q);if(a===Q)return console.error("QPageContainer needs to be child of QLayout"),Q;Re(el,!0);const t=f(()=>{const n={};return a.header.space===!0&&(n.paddingTop=`${a.header.size}px`),a.right.space===!0&&(n[`padding${i.lang.rtl===!0?"Left":"Right"}`]=`${a.right.size}px`),a.footer.space===!0&&(n.paddingBottom=`${a.footer.size}px`),a.left.space===!0&&(n[`padding${i.lang.rtl===!0?"Right":"Left"}`]=`${a.left.size}px`),n});return()=>_("div",{class:"q-page-container",style:t.value},F(l.default))}});const Bl=["top","right","bottom","left"],Ct={type:{type:String,default:"a"},outline:Boolean,push:Boolean,flat:Boolean,unelevated:Boolean,color:String,textColor:String,glossy:Boolean,square:Boolean,padding:String,label:{type:[String,Number],default:""},labelPosition:{type:String,default:"right",validator:e=>Bl.includes(e)},externalLabel:Boolean,hideLabel:{type:Boolean},labelClass:[Array,String,Object],labelStyle:[Array,String,Object],disable:Boolean,tabindex:[Number,String]};function kt(e,l){return{formClass:f(()=>`q-fab--form-${e.square===!0?"square":"rounded"}`),stacked:f(()=>e.externalLabel===!1&&["top","bottom"].includes(e.labelPosition)),labelProps:f(()=>{if(e.externalLabel===!0){const i=e.hideLabel===null?l.value===!1:e.hideLabel;return{action:"push",data:{class:[e.labelClass,`q-fab__label q-tooltip--style q-fab__label--external q-fab__label--external-${e.labelPosition}`+(i===!0?" q-fab__label--external-hidden":"")],style:e.labelStyle}}}return{action:["left","top"].includes(e.labelPosition)?"unshift":"push",data:{class:[e.labelClass,`q-fab__label q-fab__label--internal q-fab__label--internal-${e.labelPosition}`+(e.hideLabel===!0?" q-fab__label--internal-hidden":"")],style:e.labelStyle}}})}}const St={start:"self-end",center:"self-center",end:"self-start"},Tl=Object.keys(St);var Te=P({name:"QFabAction",props:{...Ct,icon:{type:String,default:""},anchor:{type:String,validator:e=>Tl.includes(e)},to:[String,Object],replace:Boolean},emits:["click"],setup(e,{slots:l,emit:i}){const a=de(yt,()=>({showing:{value:!0},onChildClick:ce})),{formClass:t,labelProps:n}=kt(e,a.showing),r=f(()=>{const h=St[e.anchor];return t.value+(h!==void 0?` ${h}`:"")}),v=f(()=>e.disable===!0||a.showing.value!==!0);function c(h){a.onChildClick(h),i("click",h)}function d(){const h=[];return l.icon!==void 0?h.push(l.icon()):e.icon!==""&&h.push(_(De,{name:e.icon})),(e.label!==""||l.label!==void 0)&&h[n.value.action](_("div",n.value.data,l.label!==void 0?l.label():[e.label])),Ve(l.default,h)}const o=H();return Object.assign(o.proxy,{click:c}),()=>_(Oe,{class:r.value,...e,noWrap:!0,stack:e.stacked,icon:void 0,label:void 0,noCaps:!0,fabMini:!0,disable:v.value,onClick:c},d)}});let $e,ue=0;const T=new Array(256);for(let e=0;e<256;e++)T[e]=(e+256).toString(16).substring(1);const $l=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return l=>{const i=new Uint8Array(l);return e.getRandomValues(i),i}}return l=>{const i=[];for(let a=l;a>0;a--)i.push(Math.floor(Math.random()*256));return i}})(),ct=4096;function He(){($e===void 0||ue+16>ct)&&(ue=0,$e=$l(ct));const e=Array.prototype.slice.call($e,ue,ue+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,T[e[0]]+T[e[1]]+T[e[2]]+T[e[3]]+"-"+T[e[4]]+T[e[5]]+"-"+T[e[6]]+T[e[7]]+"-"+T[e[8]]+T[e[9]]+"-"+T[e[10]]+T[e[11]]+T[e[12]]+T[e[13]]+T[e[14]]+T[e[15]]}function El(e){return e==null?null:e}function dt(e,l){return e==null?l===!0?`f_${He()}`:null:e}function Pl({getValue:e,required:l=!0}={}){if(Ae.value===!0){const i=e!==void 0?k(El(e())):k(null);return l===!0&&i.value===null&&N(()=>{i.value=`f_${He()}`}),e!==void 0&&C(e,a=>{i.value=dt(a,l)}),i}return e!==void 0?f(()=>dt(e(),l)):k(`f_${He()}`)}const zl=["up","right","down","left"],Ml=["left","center","right"];var Hl=P({name:"QFab",props:{...Ct,...wt,icon:String,activeIcon:String,hideIcon:Boolean,hideLabel:{default:null},direction:{type:String,default:"right",validator:e=>zl.includes(e)},persistent:Boolean,verticalActionsAlign:{type:String,default:"center",validator:e=>Ml.includes(e)}},emits:_t,setup(e,{slots:l}){const i=k(null),a=k(e.modelValue===!0),t=Pl(),{proxy:{$q:n}}=H(),{formClass:r,labelProps:v}=kt(e,a),c=f(()=>e.persistent!==!0),{hide:d,toggle:o}=qt({showing:a,hideOnRouteChange:c}),h=f(()=>({opened:a.value})),q=f(()=>`q-fab z-fab row inline justify-center q-fab--align-${e.verticalActionsAlign} ${r.value}`+(a.value===!0?" q-fab--opened":" q-fab--closed")),m=f(()=>`q-fab__actions flex no-wrap inline q-fab__actions--${e.direction} q-fab__actions--${a.value===!0?"opened":"closed"}`),y=f(()=>{const u={id:t.value,role:"menu"};return a.value!==!0&&(u["aria-hidden"]="true"),u}),B=f(()=>`q-fab__icon-holder  q-fab__icon-holder--${a.value===!0?"opened":"closed"}`);function S(u,b){const g=l[u],x=`q-fab__${u} absolute-full`;return g===void 0?_(De,{class:x,name:e[b]||n.iconSet.fab[b]}):_("div",{class:x},g(h.value))}function p(){const u=[];return e.hideIcon!==!0&&u.push(_("div",{class:B.value},[S("icon","icon"),S("active-icon","activeIcon")])),(e.label!==""||l.label!==void 0)&&u[v.value.action](_("div",v.value.data,l.label!==void 0?l.label(h.value):[e.label])),Ve(l.tooltip,u)}return Re(yt,{showing:a,onChildClick(u){d(u),i.value!==null&&i.value.$el.focus()}}),()=>_("div",{class:q.value},[_(Oe,{ref:i,class:r.value,...e,noWrap:!0,stack:e.stacked,align:void 0,icon:void 0,label:void 0,noCaps:!0,fab:!0,"aria-expanded":a.value===!0?"true":"false","aria-haspopup":"true","aria-controls":t.value,onClick:o},p),_("div",{class:m.value,...y.value},F(l.default))])}});const{passive:ft}=V,Ol=["both","horizontal","vertical"];var Vl=P({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Ol.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:l}){const i={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let a=null,t,n;C(()=>e.scrollTarget,()=>{c(),v()});function r(){a!==null&&a();const h=Math.max(0,ht(t)),q=mt(t),m={top:h-i.position.top,left:q-i.position.left};if(e.axis==="vertical"&&m.top===0||e.axis==="horizontal"&&m.left===0)return;const y=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";i.position={top:h,left:q},i.directionChanged=i.direction!==y,i.delta=m,i.directionChanged===!0&&(i.direction=y,i.inflectionPoint=i.position),l("scroll",{...i})}function v(){t=jt(n,e.scrollTarget),t.addEventListener("scroll",d,ft),d(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",d,ft),t=void 0)}function d(h){if(h===!0||e.debounce===0||e.debounce==="0")r();else if(a===null){const[q,m]=e.debounce?[setTimeout(r,e.debounce),clearTimeout]:[requestAnimationFrame(r),cancelAnimationFrame];a=()=>{m(q),a=null}}}const{proxy:o}=H();return C(()=>o.$q.lang.rtl,r),N(()=>{n=o.$el.parentNode,v()}),U(()=>{a!==null&&a(),c()}),Object.assign(o,{trigger:d,getPosition:()=>i}),ce}}),Al=P({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:l,emit:i}){const{proxy:{$q:a}}=H(),t=k(null),n=k(a.screen.height),r=k(e.container===!0?0:a.screen.width),v=k({position:0,direction:"down",inflectionPoint:0}),c=k(0),d=k(Ae.value===!0?0:we()),o=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),h=f(()=>e.container===!1?{minHeight:a.screen.height+"px"}:null),q=f(()=>d.value!==0?{[a.lang.rtl===!0?"left":"right"]:`${d.value}px`}:null),m=f(()=>d.value!==0?{[a.lang.rtl===!0?"right":"left"]:0,[a.lang.rtl===!0?"left":"right"]:`-${d.value}px`,width:`calc(100% + ${d.value}px)`}:null);function y(g){if(e.container===!0||document.qScrollPrevented!==!0){const x={position:g.position.top,direction:g.direction,directionChanged:g.directionChanged,inflectionPoint:g.inflectionPoint.top,delta:g.delta.top};v.value=x,e.onScroll!==void 0&&i("scroll",x)}}function B(g){const{height:x,width:z}=g;let D=!1;n.value!==x&&(D=!0,n.value=x,e.onScrollHeight!==void 0&&i("scrollHeight",x),p()),r.value!==z&&(D=!0,r.value=z),D===!0&&e.onResize!==void 0&&i("resize",g)}function S({height:g}){c.value!==g&&(c.value=g,p())}function p(){if(e.container===!0){const g=n.value>c.value?we():0;d.value!==g&&(d.value=g)}}let u=null;const b={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:t,height:n,containerHeight:c,scrollbarWidth:d,totalWidth:f(()=>r.value+d.value),rows:f(()=>{const g=e.view.toLowerCase().split(" ");return{top:g[0].split(""),middle:g[1].split(""),bottom:g[2].split("")}}),header:ae({size:0,offset:0,space:!1}),right:ae({size:300,offset:0,space:!1}),footer:ae({size:0,offset:0,space:!1}),left:ae({size:300,offset:0,space:!1}),scroll:v,animate(){u!==null?clearTimeout(u):document.body.classList.add("q-body--layout-animate"),u=setTimeout(()=>{u=null,document.body.classList.remove("q-body--layout-animate")},155)},update(g,x,z){b[g][x]=z}};if(Re(fe,b),we()>0){let z=function(){g=null,x.classList.remove("hide-scrollbar")},D=function(){if(g===null){if(x.scrollHeight>a.screen.height)return;x.classList.add("hide-scrollbar")}else clearTimeout(g);g=setTimeout(z,300)},J=function(W){g!==null&&W==="remove"&&(clearTimeout(g),z()),window[`${W}EventListener`]("resize",D)},g=null;const x=document.body;C(()=>e.container!==!0?"add":"remove",J),e.container!==!0&&J("add"),tl(()=>{J("remove")})}return()=>{const g=Ve(l.default,[_(Vl,{onScroll:y}),_(ze,{onResize:B})]),x=_("div",{class:o.value,style:h.value,ref:e.container===!0?void 0:t,tabindex:-1},g);return e.container===!0?_("div",{class:"q-layout-container overflow-hidden",ref:t},[_(ze,{onResize:S}),_("div",{class:"absolute-full",style:q.value},[_("div",{class:"scroll",style:m.value},[x])])]):x}}}),vt=P({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:l}){const i=f(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>_("div",{class:i.value},F(l.default))}}),Ql=P({name:"QItem",props:{...Ie,...Ft,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:l,emit:i}){const{proxy:{$q:a}}=H(),t=Fe(e,a),{hasLink:n,linkAttrs:r,linkClass:v,linkTag:c,navigateOnClick:d}=Dt(),o=k(null),h=k(null),q=f(()=>e.clickable===!0||n.value===!0||e.tag==="label"),m=f(()=>e.disable!==!0&&q.value===!0),y=f(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(n.value===!0&&e.active===null?v.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(m.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),B=f(()=>{if(e.insetLevel===void 0)return null;const b=a.lang.rtl===!0?"Right":"Left";return{["padding"+b]:16+e.insetLevel*56+"px"}});function S(b){m.value===!0&&(h.value!==null&&(b.qKeyEvent!==!0&&document.activeElement===o.value?h.value.focus():document.activeElement===h.value&&o.value.focus()),d(b))}function p(b){if(m.value===!0&&ll(b,[13,32])===!0){Qe(b),b.qKeyEvent=!0;const g=new MouseEvent("click",b);g.qKeyEvent=!0,o.value.dispatchEvent(g)}i("keyup",b)}function u(){const b=bt(l.default,[]);return m.value===!0&&b.unshift(_("div",{class:"q-focus-helper",tabindex:-1,ref:h})),b}return()=>{const b={ref:o,class:y.value,style:B.value,role:"listitem",onClick:S,onKeyup:p};return m.value===!0?(b.tabindex=e.tabindex||"0",Object.assign(b,r.value)):q.value===!0&&(b["aria-disabled"]="true"),_(c.value,b,u())}}});const Rl=Object.assign({name:"EssentialLink"},{__name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""},route:{type:String,default:""}},setup(e){const l=e;return(i,a)=>(se(),Pe(Ql,{clickable:"",label:"a",target:"_blank"},{default:$(()=>[l.icon?(se(),Pe(vt,{key:0,avatar:""},{default:$(()=>[L(De,{name:l.icon},null,8,["name"])]),_:1})):il("",!0),L(vt,null,{default:$(()=>[L(Me,null,{default:$(()=>[K(Je(l.title),1)]),_:1}),L(Me,{caption:""},{default:$(()=>[K(Je(l.caption),1)]),_:1})]),_:1})]),_:1}))}});const Il=e=>(dl("data-v-1931e808"),e=e(),fl(),e),Fl={class:"row justify-between fab"},Dl=Il(()=>gt("a",{href:"https://quasar.dev/",style:{color:"wheat"}},"Quasar",-1)),Wl={methods:{onClick(e){switch(e){case"Email":window.location.href="mailto:cristhian.peverelli@gmail.com?subject=Super%20Professional%20Business%20Mail%20:)&body=Hi%20Cristhian,";break;case"LinkedIn":window.location.href="https://www.linkedin.com/in/cristhian-peverelli/";break;case"GitHub":window.location.href="https://github.com/CristhianPeverelli";break;default:console.log("Error on fab: ",e);break}}},setup(){return{fabLeft:k(!0),fabCenter:k(!0),fabRight:k(!0)}}},jl=Object.assign(Wl,{name:"MainLayout"},{__name:"MainLayout",setup(e){const l=[{title:"Home",caption:"My biography",icon:"account_circle",route:"/",link:""},{title:"Education",caption:"My educational history",icon:"school",route:"/",link:""},{title:"Work Experience",caption:"My work experience",icon:"badge",route:"/#/work",link:""},{title:"Projects",caption:"Personal projects I have been working to",icon:"build",route:"/#/projects",link:""},{title:"GitHub Profile",caption:"My GitHub page",icon:"code",link:"https://github.com/CristhianPeverelli"},{title:"Codewars Profile",caption:"Where I solve some code puzzles",icon:"data_object",link:"https://www.codewars.com/users/CristhianPeverelli"},{title:"LeetCode Profile",caption:"Other puzzles :)",icon:"terminal",link:"https://leetcode.com/CristhianPeverelli/"},{title:"Contact me",caption:"via Email",icon:"favorite",link:"mailto:cristhian.peverelli@gmail.com?subject=Super%20Professional%20Business%20Mail%20:)&body=Hi%20Cristhian,"}],i=k(!0);function a(){i.value=!i.value}function t(n){n.link!=""?window.open(n.link,"_blank").focus():window.location.href=n.route}return(n,r)=>{const v=nl("router-view");return se(),Pe(Al,{view:"lHh Lpr lFf"},{default:$(()=>[L(ml,{elevated:""},{default:$(()=>[L(et,{class:"custom-bar"},{default:$(()=>[L(Oe,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:a}),L(Ut,{size:"60px",icon:"terminal"}),L(Ze,{style:{"font-size":"35px","font-family":"'system-ui'"}},{default:$(()=>[K(" Cristhian Peverelli ")]),_:1})]),_:1})]),_:1}),L(xl,{class:"custom-drawer",modelValue:i.value,"onUpdate:modelValue":r[0]||(r[0]=c=>i.value=c),"show-if-above":"",bordered:""},{default:$(()=>[L(hl,{padding:""},{default:$(()=>[L(Me,{header:""},{default:$(()=>[K(" Everything you need to know ")]),_:1}),(se(),al(rl,null,ol(l,c=>L(Rl,cl({key:c.title},c,{onClick:d=>t(c)}),null,16,["onClick"])),64))]),_:1})]),_:1},8,["modelValue"]),L(Ll,null,{default:$(()=>[L(v)]),_:1}),gt("div",Fl,[L(Hl,{modelValue:ul(fabRight),"onUpdate:modelValue":r[4]||(r[4]=c=>sl(fabRight)?fabRight.value=c:null),"vertical-actions-align":"right",color:"secondary",glossy:"",icon:"keyboard_arrow_up",direction:"up",label:"Contacts"},{default:$(()=>[L(Te,{"label-position":"left",color:"primary",onClick:r[1]||(r[1]=c=>n.onClick("Email")),icon:"mail",label:"Email"}),L(Te,{"label-position":"left",color:"light-blue",onClick:r[2]||(r[2]=c=>n.onClick("LinkedIn")),icon:"verified",label:"LinkedIn"}),L(Te,{"label-position":"left",color:"grey",onClick:r[3]||(r[3]=c=>n.onClick("GitHub")),icon:"code",label:"GitHub"})]),_:1},8,["modelValue"])]),L(et,{class:"custom-bar text-center"},{default:$(()=>[L(Ze,{style:{"font-size":"12px",color:"white"}},{default:$(()=>[K(" Built in "),Dl,K(" with \u2764\uFE0E ")]),_:1})]),_:1})]),_:1})}}});var Zl=Nt(jl,[["__scopeId","data-v-1931e808"]]);export{Zl as default};
