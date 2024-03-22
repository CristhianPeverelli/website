import{c as p,h as _,e as l}from"./render.9cdedfc6.js";import{c as a,h as r,g as M,U as j}from"./index.67586dda.js";const m={xs:18,sm:24,md:32,lg:38,xl:46},k={size:String};function q(t,n=m){return a(()=>t.size!==void 0?{fontSize:t.size in n?`${n[t.size]}px`:t.size}:null)}const h="0 0 24 24",y=t=>t,d=t=>`ionicons ${t}`,x={"mdi-":t=>`mdi ${t}`,"icon-":y,"bt-":t=>`bt ${t}`,"eva-":t=>`eva ${t}`,"ion-md":d,"ion-ios":d,"ion-logo":d,"iconfont ":y,"ti-":t=>`themify-icon ${t}`,"bi-":t=>`bootstrap-icons ${t}`},S={o_:"-outlined",r_:"-round",s_:"-sharp"},w={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},C=new RegExp("^("+Object.keys(x).join("|")+")"),F=new RegExp("^("+Object.keys(S).join("|")+")"),b=new RegExp("^("+Object.keys(w).join("|")+")"),I=/^[Mm]\s?[-+]?\.?\d/,O=/^img:/,Q=/^svguse:/,P=/^ion-/,U=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var N=p({name:"QIcon",props:{...k,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(t,{slots:n}){const{proxy:{$q:u}}=M(),c=q(t),z=a(()=>"q-icon"+(t.left===!0?" on-left":"")+(t.right===!0?" on-right":"")+(t.color!==void 0?` text-${t.color}`:"")),o=a(()=>{let s,e=t.name;if(e==="none"||!e)return{none:!0};if(u.iconMapFn!==null){const i=u.iconMapFn(e);if(i!==void 0)if(i.icon!==void 0){if(e=i.icon,e==="none"||!e)return{none:!0}}else return{cls:i.cls,content:i.content!==void 0?i.content:" "}}if(I.test(e)===!0){const[i,g=h]=e.split("|");return{svg:!0,viewBox:g,nodes:i.split("&&").map($=>{const[R,E,B]=$.split("@@");return r("path",{style:E,d:R,transform:B})})}}if(O.test(e)===!0)return{img:!0,src:e.substring(4)};if(Q.test(e)===!0){const[i,g=h]=e.split("|");return{svguse:!0,src:i.substring(7),viewBox:g}}let f=" ";const v=e.match(C);if(v!==null)s=x[v[1]](e);else if(U.test(e)===!0)s=e;else if(P.test(e)===!0)s=`ionicons ion-${u.platform.is.ios===!0?"ios":"md"}${e.substring(3)}`;else if(b.test(e)===!0){s="notranslate material-symbols";const i=e.match(b);i!==null&&(e=e.substring(6),s+=w[i[1]]),f=e}else{s="notranslate material-icons";const i=e.match(F);i!==null&&(e=e.substring(2),s+=S[i[1]]),f=e}return{cls:s,content:f}});return()=>{const s={class:z.value,style:c.value,"aria-hidden":"true",role:"presentation"};return o.value.none===!0?r(t.tag,s,_(n.default)):o.value.img===!0?r(t.tag,s,l(n.default,[r("img",{src:o.value.src})])):o.value.svg===!0?r(t.tag,s,l(n.default,[r("svg",{viewBox:o.value.viewBox||"0 0 24 24"},o.value.nodes)])):o.value.svguse===!0?r(t.tag,s,l(n.default,[r("svg",{viewBox:o.value.viewBox},[r("use",{"xlink:href":o.value.src})])])):(o.value.cls!==void 0&&(s.class+=" "+o.value.cls),r(t.tag,s,l(n.default,[o.value.content])))}}});const V={size:{type:[Number,String],default:"1em"},color:String};function A(t){return{cSize:a(()=>t.size in m?`${m[t.size]}px`:t.size),classes:a(()=>"q-spinner"+(t.color?` text-${t.color}`:""))}}function G(t){if(t===window)return{top:0,left:0};const{top:n,left:u}=t.getBoundingClientRect();return{top:n,left:u}}function J(t){return t===window?window.innerHeight:t.getBoundingClientRect().height}function K(t,n){const u=t.style;for(const c in n)u[c]=n[c]}function L(t){if(t==null)return;if(typeof t=="string")try{return document.querySelector(t)||void 0}catch{return}const n=j(t);if(n)return n.$el||n}export{N as Q,A as a,k as b,K as c,q as d,L as g,J as h,G as o,V as u};
