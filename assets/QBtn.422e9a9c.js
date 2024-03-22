import{h,F as D,q as J,y as ee,v as X,x as te,c as s,g as Y,r as z,a as ne,Z as ae,z as re,s as T,u as ue,l as le}from"./index.67586dda.js";import{u as ie,a as se,c as oe,b as ce,d as de,Q as N}from"./dom.217c4b8b.js";import{c as Z,b as fe,e as ve}from"./render.9cdedfc6.js";var me=Z({name:"QSpinner",props:{...ie,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:r}=se(e);return()=>h("svg",{class:r.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[h("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function ge(e,t=250){let r=!1,n;return function(){return r===!1&&(r=!0,setTimeout(()=>{r=!1},t),n=e.apply(this,arguments)),n}}function Q(e,t,r,n){r.modifiers.stop===!0&&X(e);const l=r.modifiers.color;let g=r.modifiers.center;g=g===!0||n===!0;const f=document.createElement("span"),d=document.createElement("span"),S=te(e),{left:y,top:v,width:C,height:u}=t.getBoundingClientRect(),k=Math.sqrt(C*C+u*u),m=k/2,p=`${(C-k)/2}px`,i=g?p:`${S.left-y-m}px`,b=`${(u-k)/2}px`,R=g?b:`${S.top-v-m}px`;d.className="q-ripple__inner",oe(d,{height:`${k}px`,width:`${k}px`,transform:`translate3d(${i},${R},0) scale3d(.2,.2,1)`,opacity:0}),f.className=`q-ripple${l?" text-"+l:""}`,f.setAttribute("dir","ltr"),f.appendChild(d),t.appendChild(f);const P=()=>{f.remove(),clearTimeout(B)};r.abort.push(P);let B=setTimeout(()=>{d.classList.add("q-ripple__inner--enter"),d.style.transform=`translate3d(${p},${b},0) scale3d(1,1,1)`,d.style.opacity=.2,B=setTimeout(()=>{d.classList.remove("q-ripple__inner--enter"),d.classList.add("q-ripple__inner--leave"),d.style.opacity=0,B=setTimeout(()=>{f.remove(),r.abort.splice(r.abort.indexOf(P),1)},275)},250)},50)}function V(e,{modifiers:t,value:r,arg:n}){const l=Object.assign({},e.cfg.ripple,t,r);e.modifiers={early:l.early===!0,stop:l.stop===!0,center:l.center===!0,color:l.color||n,keyCodes:[].concat(l.keyCodes||13)}}var be=fe({name:"ripple",beforeMount(e,t){const r=t.instance.$.appContext.config.globalProperties.$q.config||{};if(r.ripple===!1)return;const n={cfg:r,enabled:t.value!==!1,modifiers:{},abort:[],start(l){n.enabled===!0&&l.qSkipRipple!==!0&&l.type===(n.modifiers.early===!0?"pointerdown":"click")&&Q(l,e,n,l.qKeyEvent===!0)},keystart:ge(l=>{n.enabled===!0&&l.qSkipRipple!==!0&&D(l,n.modifiers.keyCodes)===!0&&l.type===`key${n.modifiers.early===!0?"down":"up"}`&&Q(l,e,n,!0)},300)};V(n,t),e.__qripple=n,J(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const r=e.__qripple;r!==void 0&&(r.enabled=t.value!==!1,r.enabled===!0&&Object(t.value)===t.value&&V(r,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(r=>{r()}),ee(t,"main"),delete e._qripple)}});const G={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},he=Object.keys(G),ye={align:{type:String,validator:e=>he.includes(e)}};function ke(e){return s(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${G[t]}`})}function pe(e){return e.appContext.config.globalProperties.$router!==void 0}function Me(e){return e.isUnmounted===!0||e.isDeactivated===!0}function H(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function U(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function qe(e,t){for(const r in t){const n=t[r],l=e[r];if(typeof n=="string"){if(n!==l)return!1}else if(Array.isArray(l)===!1||l.length!==n.length||n.some((g,f)=>g!==l[f]))return!1}return!0}function W(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((r,n)=>r===t[n]):e.length===1&&e[0]===t}function xe(e,t){return Array.isArray(e)===!0?W(e,t):Array.isArray(t)===!0?W(t,e):e===t}function Ce(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e)if(xe(e[r],t[r])===!1)return!1;return!0}const Le={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Ee({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const r=Y(),{props:n,proxy:l,emit:g}=r,f=pe(r),d=s(()=>n.disable!==!0&&n.href!==void 0),S=t===!0?s(()=>f===!0&&n.disable!==!0&&d.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):s(()=>f===!0&&d.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),y=s(()=>S.value===!0?R(n.to):null),v=s(()=>y.value!==null),C=s(()=>d.value===!0||v.value===!0),u=s(()=>n.type==="a"||C.value===!0?"a":n.tag||e||"div"),k=s(()=>d.value===!0?{href:n.href,target:n.target}:v.value===!0?{href:y.value.href,target:n.target}:{}),m=s(()=>{if(v.value===!1)return-1;const{matched:o}=y.value,{length:q}=o,L=o[q-1];if(L===void 0)return-1;const $=l.$route.matched;if($.length===0)return-1;const w=$.findIndex(U.bind(null,L));if(w!==-1)return w;const K=H(o[q-2]);return q>1&&H(L)===K&&$[$.length-1].path!==K?$.findIndex(U.bind(null,o[q-2])):w}),p=s(()=>v.value===!0&&m.value!==-1&&qe(l.$route.params,y.value.params)),i=s(()=>p.value===!0&&m.value===l.$route.matched.length-1&&Ce(l.$route.params,y.value.params)),b=s(()=>v.value===!0?i.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":p.value===!0?` ${n.activeClass}`:"":"");function R(o){try{return l.$router.resolve(o)}catch{}return null}function P(o,{returnRouterError:q,to:L=n.to,replace:$=n.replace}={}){if(n.disable===!0)return o.preventDefault(),Promise.resolve(!1);if(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey||o.button!==void 0&&o.button!==0||n.target==="_blank")return Promise.resolve(!1);o.preventDefault();const w=l.$router[$===!0?"replace":"push"](L);return q===!0?w:w.then(()=>{}).catch(()=>{})}function B(o){if(v.value===!0){const q=L=>P(o,L);g("click",o,q),o.defaultPrevented!==!0&&q()}else g("click",o)}return{hasRouterLink:v,hasHrefLink:d,hasLink:C,linkTag:u,resolvedLink:y,linkIsActive:p,linkIsExactActive:i,linkClass:b,linkAttrs:k,getLink:R,navigateToRouterLink:P,navigateOnClick:B}}const F={none:0,xs:4,sm:8,md:16,lg:24,xl:32},$e={xs:8,sm:10,md:14,lg:20,xl:24},Se=["button","submit","reset"],we=/[^\s]\/[^\s]/,Pe=["flat","outline","push","unelevated"],Be=(e,t)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t,Re={...ce,...Le,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Pe.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...ye.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Te(e){const t=de(e,$e),r=ke(e),{hasRouterLink:n,hasLink:l,linkTag:g,linkAttrs:f,navigateOnClick:d}=Ee({fallbackTag:"button"}),S=s(()=>{const i=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},i,{padding:e.padding.split(/\s+/).map(b=>b in F?F[b]+"px":b).join(" "),minWidth:"0",minHeight:"0"}):i}),y=s(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),v=s(()=>e.disable!==!0&&e.loading!==!0),C=s(()=>v.value===!0?e.tabindex||0:-1),u=s(()=>Be(e,"standard")),k=s(()=>{const i={tabindex:C.value};return l.value===!0?Object.assign(i,f.value):Se.includes(e.type)===!0&&(i.type=e.type),g.value==="a"?(e.disable===!0?i["aria-disabled"]="true":i.href===void 0&&(i.role="button"),n.value!==!0&&we.test(e.type)===!0&&(i.type=e.type)):e.disable===!0&&(i.disabled="",i["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(i,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),i}),m=s(()=>{let i;e.color!==void 0?e.flat===!0||e.outline===!0?i=`text-${e.textColor||e.color}`:i=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(i=`text-${e.textColor}`);const b=e.round===!0?"round":`rectangle${y.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${u.value} q-btn--${b}`+(i!==void 0?" "+i:"")+(v.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),p=s(()=>r.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:m,style:S,innerClasses:p,attributes:k,hasLink:l,linkTag:g,navigateOnClick:d,isActionable:v}}const{passiveCapture:x}=le;let _=null,A=null,O=null;var je=Z({name:"QBtn",props:{...Re,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:r}){const{proxy:n}=Y(),{classes:l,style:g,innerClasses:f,attributes:d,hasLink:S,linkTag:y,navigateOnClick:v,isActionable:C}=Te(e),u=z(null),k=z(null);let m=null,p,i=null;const b=s(()=>e.label!==void 0&&e.label!==null&&e.label!==""),R=s(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:S.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),P=s(()=>({center:e.round})),B=s(()=>{const a=Math.max(0,Math.min(100,e.percentage));return a>0?{transition:"transform 0.6s",transform:`translateX(${a-100}%)`}:{}}),o=s(()=>{if(e.loading===!0)return{onMousedown:j,onTouchstart:j,onClick:j,onKeydown:j,onKeyup:j};if(C.value===!0){const a={onClick:L,onKeydown:$,onMousedown:K};if(n.$q.platform.has.touch===!0){const c=e.onTouchstart!==void 0?"":"Passive";a[`onTouchstart${c}`]=w}return a}return{onClick:T}}),q=s(()=>({ref:u,class:"q-btn q-btn-item non-selectable no-outline "+l.value,style:g.value,...d.value,...o.value}));function L(a){if(u.value!==null){if(a!==void 0){if(a.defaultPrevented===!0)return;const c=document.activeElement;if(e.type==="submit"&&c!==document.body&&u.value.contains(c)===!1&&c.contains(u.value)===!1){u.value.focus();const I=()=>{document.removeEventListener("keydown",T,!0),document.removeEventListener("keyup",I,x),u.value!==null&&u.value.removeEventListener("blur",I,x)};document.addEventListener("keydown",T,!0),document.addEventListener("keyup",I,x),u.value.addEventListener("blur",I,x)}}v(a)}}function $(a){u.value!==null&&(r("keydown",a),D(a,[13,32])===!0&&A!==u.value&&(A!==null&&M(),a.defaultPrevented!==!0&&(u.value.focus(),A=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("keyup",E,!0),u.value.addEventListener("blur",E,x)),T(a)))}function w(a){u.value!==null&&(r("touchstart",a),a.defaultPrevented!==!0&&(_!==u.value&&(_!==null&&M(),_=u.value,m=a.target,m.addEventListener("touchcancel",E,x),m.addEventListener("touchend",E,x)),p=!0,i!==null&&clearTimeout(i),i=setTimeout(()=>{i=null,p=!1},200)))}function K(a){u.value!==null&&(a.qSkipRipple=p===!0,r("mousedown",a),a.defaultPrevented!==!0&&O!==u.value&&(O!==null&&M(),O=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("mouseup",E,x)))}function E(a){if(u.value!==null&&!(a!==void 0&&a.type==="blur"&&document.activeElement===u.value)){if(a!==void 0&&a.type==="keyup"){if(A===u.value&&D(a,[13,32])===!0){const c=new MouseEvent("click",a);c.qKeyEvent=!0,a.defaultPrevented===!0&&ue(c),a.cancelBubble===!0&&X(c),u.value.dispatchEvent(c),T(a),a.qKeyEvent=!0}r("keyup",a)}M()}}function M(a){const c=k.value;a!==!0&&(_===u.value||O===u.value)&&c!==null&&c!==document.activeElement&&(c.setAttribute("tabindex",-1),c.focus()),_===u.value&&(m!==null&&(m.removeEventListener("touchcancel",E,x),m.removeEventListener("touchend",E,x)),_=m=null),O===u.value&&(document.removeEventListener("mouseup",E,x),O=null),A===u.value&&(document.removeEventListener("keyup",E,!0),u.value!==null&&u.value.removeEventListener("blur",E,x),A=null),u.value!==null&&u.value.classList.remove("q-btn--active")}function j(a){T(a),a.qSkipRipple=!0}return ne(()=>{M(!0)}),Object.assign(n,{click:L}),()=>{let a=[];e.icon!==void 0&&a.push(h(N,{name:e.icon,left:e.stack!==!0&&b.value===!0,role:"img","aria-hidden":"true"})),b.value===!0&&a.push(h("span",{class:"block"},[e.label])),a=ve(t.default,a),e.iconRight!==void 0&&e.round===!1&&a.push(h(N,{name:e.iconRight,right:e.stack!==!0&&b.value===!0,role:"img","aria-hidden":"true"}));const c=[h("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&c.push(h("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[h("span",{class:"q-btn__progress-indicator fit block",style:B.value})])),c.push(h("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+f.value},a)),e.loading!==null&&c.push(h(ae,{name:"q-transition--fade"},()=>e.loading===!0?[h("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[h(me)])]:null)),re(h(y.value,q.value,c),[[be,R.value,void 0,P.value]])}}});export{je as Q,Me as a,Ee as b,Le as u,pe as v};
