import{b as d,d as u,Q as f,c,g as w}from"./dom.f62dd3db.js";import{c as v,f as m}from"./render.5aa1a819.js";import{c as s,h as i}from"./index.11add811.js";var x=v({name:"QAvatar",props:{...d,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(t,{slots:o}){const e=u(t),n=s(()=>"q-avatar"+(t.color?` bg-${t.color}`:"")+(t.textColor?` text-${t.textColor} q-chip--colored`:"")+(t.square===!0?" q-avatar--square":t.rounded===!0?" rounded-borders":"")),r=s(()=>t.fontSize?{fontSize:t.fontSize}:null);return()=>{const a=t.icon!==void 0?[i(f,{name:t.icon})]:void 0;return i("div",{class:n.value,style:e.value},[i("div",{class:"q-avatar__content row flex-center overflow-hidden",style:r.value},m(o.default,a))])}}});const g=[null,document,document.body,document.scrollingElement,document.documentElement];function b(t,o){let e=w(o);if(e===void 0){if(t==null)return window;e=t.closest(".scroll,.scroll-y,.overflow-auto")}return g.includes(e)?window:e}function p(t){return t===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:t.scrollTop}function z(t){return t===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:t.scrollLeft}let l;function E(){if(l!==void 0)return l;const t=document.createElement("p"),o=document.createElement("div");c(t,{width:"100%",height:"200px"}),c(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(t),document.body.appendChild(o);const e=t.offsetWidth;o.style.overflow="scroll";let n=t.offsetWidth;return e===n&&(n=o.clientWidth),o.remove(),l=e-n,l}function C(t,o=!0){return!t||t.nodeType!==Node.ELEMENT_NODE?!1:o?t.scrollHeight>t.clientHeight&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-y"])):t.scrollWidth>t.clientWidth&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-x"]))}var _=(t,o)=>{const e=t.__vccOpts||t;for(const[n,r]of o)e[n]=r;return e};export{x as Q,_,p as a,b,E as c,z as g,C as h};
