import{p as G,i as j,c,r as x,a as T,g as W,o as Y,b as ie,d as re,e as ce,f as ve,h as L,j as J,k as pe,l as M,m as de,n as me,u as fe,q as y,s as ye,t as ge,v as F,w as Q,x as be,y as he,z as Ie,A as Se,B as P,C as xe}from"./index.d3dd69d0.js";import{u as Ve,a as k,m as we,V as Be}from"./VIcon.41efdd17.js";import{m as Re,f as _e,V as Ae,a as Te,b as $e}from"./VToolbar.02703409.js";const C=Symbol.for("vuetify:layout"),ee=Symbol.for("vuetify:layout-item"),X=1e3,ze=G({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Le=G({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Pe(){const e=j(C);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Ce(e){var v;const n=j(C);if(!n)throw new Error("[Vuetify] Could not find injected layout");const t=(v=e.id)!=null?v:`layout-item-${ie()}`,a=W("useLayoutItem");J(ee,{id:t});const s=x(!1);re(()=>s.value=!0),ce(()=>s.value=!1);const{layoutItemStyles:u,layoutItemScrimStyles:r}=n.register(a,{...e,active:c(()=>s.value?!1:e.active.value),id:t});return ve(()=>n.unregister(t)),{layoutItemStyles:u,layoutRect:n.layoutRect,layoutItemScrimStyles:r}}const Me=(e,n,t,a)=>{let s={top:0,left:0,right:0,bottom:0};const u=[{id:"",layer:{...s}}];for(const r of e){const v=n.get(r),p=t.get(r),h=a.get(r);if(!v||!p||!h)continue;const m={...s,[v.value]:parseInt(s[v.value],10)+(h.value?parseInt(p.value,10):0)};u.push({id:r,layer:m}),s=m}return u};function ke(e){const n=j(C,null),t=c(()=>n?n.rootZIndex.value-100:X),a=x([]),s=T(new Map),u=T(new Map),r=T(new Map),v=T(new Map),p=T(new Map),{resizeRef:h,contentRect:m}=Ve(),$=c(()=>{var o;const l=new Map,d=(o=e.overlaps)!=null?o:[];for(const b of d.filter(i=>i.includes(":"))){const[i,f]=b.split(":");if(!a.value.includes(i)||!a.value.includes(f))continue;const S=s.get(i),R=s.get(f),_=u.get(i),z=u.get(f);!S||!R||!_||!z||(l.set(f,{position:S.value,amount:parseInt(_.value,10)}),l.set(i,{position:R.value,amount:-parseInt(z.value,10)}))}return l}),I=c(()=>{const l=[...new Set([...r.values()].map(o=>o.value))].sort((o,b)=>o-b),d=[];for(const o of l){const b=a.value.filter(i=>{var f;return((f=r.get(i))==null?void 0:f.value)===o});d.push(...b)}return Me(d,s,u,v)}),V=c(()=>!Array.from(p.values()).some(l=>l.value)),w=c(()=>I.value[I.value.length-1].layer),oe=c(()=>({"--v-layout-left":L(w.value.left),"--v-layout-right":L(w.value.right),"--v-layout-top":L(w.value.top),"--v-layout-bottom":L(w.value.bottom),...V.value?void 0:{transition:"none"}})),B=c(()=>I.value.slice(1).map((l,d)=>{let{id:o}=l;const{layer:b}=I.value[d],i=u.get(o),f=s.get(o);return{id:o,...b,size:Number(i.value),position:f.value}})),q=l=>B.value.find(d=>d.id===l),H=W("createLayout"),D=x(!1);Y(()=>{D.value=!0}),J(C,{register:(l,d)=>{let{id:o,order:b,position:i,layoutSize:f,elementSize:S,active:R,disableTransitions:_,absolute:z}=d;r.set(o,b),s.set(o,i),u.set(o,f),v.set(o,R),_&&p.set(o,_);const K=pe(ee,H==null?void 0:H.vnode).indexOf(l);K>-1?a.value.splice(K,0,o):a.value.push(o);const U=c(()=>B.value.findIndex(A=>A.id===o)),O=c(()=>t.value+I.value.length*2-U.value*2),se=c(()=>{const A=i.value==="left"||i.value==="right",N=i.value==="right",ue=i.value==="bottom",Z={[i.value]:0,zIndex:O.value,transform:`translate${A?"X":"Y"}(${(R.value?0:-110)*(N||ue?-1:1)}%)`,position:z.value||t.value!==X?"absolute":"fixed",...V.value?void 0:{transition:"none"}};if(!D.value)return Z;const g=B.value[U.value];if(!g)throw new Error(`[Vuetify] Could not find layout item "${o}"`);const E=$.value.get(o);return E&&(g[E.position]+=E.amount),{...Z,height:A?`calc(100% - ${g.top}px - ${g.bottom}px)`:S.value?`${S.value}px`:void 0,left:N?void 0:`${g.left}px`,right:N?`${g.right}px`:void 0,top:i.value!=="bottom"?`${g.top}px`:void 0,bottom:i.value!=="top"?`${g.bottom}px`:void 0,width:A?S.value?`${S.value}px`:void 0:`calc(100% - ${g.left}px - ${g.right}px)`}}),le=c(()=>({zIndex:O.value-1}));return{layoutItemStyles:se,layoutItemScrimStyles:le,zIndex:O}},unregister:l=>{r.delete(l),s.delete(l),u.delete(l),v.delete(l),p.delete(l),a.value=a.value.filter(d=>d!==l)},mainRect:w,mainStyles:oe,getLayoutItem:q,items:B,layoutRect:m,rootZIndex:t});const ae=c(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),ne=c(()=>({zIndex:t.value,position:n?"relative":void 0,overflow:n?"hidden":void 0}));return{layoutClasses:ae,layoutStyles:ne,getLayoutItem:q,items:B,layoutRect:m,layoutRef:h}}const He=M()({name:"VApp",props:{...ze({fullHeight:!0}),...de()},setup(e,n){let{slots:t}=n;const a=me(e),{layoutClasses:s,layoutStyles:u,getLayoutItem:r,items:v,layoutRef:p}=ke(e),{rtlClasses:h}=fe();return k(()=>{var m;return y("div",{ref:p,class:["v-application",a.themeClasses.value,s.value,h.value],style:u.value},[y("div",{class:"v-application__wrap"},[(m=t.default)==null?void 0:m.call(t)])])}),{getLayoutItem:r,items:v,theme:a}}});function te(){const e=x(!1);return Y(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:c(()=>e.value?void 0:{transition:"none !important"}),isBooted:ye(e)}}const Oe=M()({name:"VAppBar",props:{modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Re(),...Le(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const a=x(),s=ge(e,"modelValue"),u=c(()=>{var m,$,I,V;const p=($=(m=a.value)==null?void 0:m.contentHeight)!=null?$:0,h=(V=(I=a.value)==null?void 0:I.extensionHeight)!=null?V:0;return p+h}),{ssrBootStyles:r}=te(),{layoutItemStyles:v}=Ce({id:e.name,order:c(()=>parseInt(e.order,10)),position:F(e,"location"),layoutSize:u,elementSize:u,active:s,absolute:F(e,"absolute")});return k(()=>{const[p]=_e(e);return y(Ae,Q({ref:a,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"}],style:{...v.value,height:void 0,...r.value}},p),t)}),{}}}),Ne=M()({name:"VAppBarTitle",props:Te(),setup(e,n){let{slots:t}=n;return k(()=>y($e,Q(e,{class:"v-app-bar-title"}),t)),{}}});const Ee=M()({name:"VMain",props:{scrollable:Boolean,...we({tag:"main"})},setup(e,n){let{slots:t}=n;const{mainStyles:a}=Pe(),{ssrBootStyles:s}=te();return k(()=>y(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable}],style:[a.value,s.value]},{default:()=>{var u,r;return[e.scrollable?y("div",{class:"v-main__scroller"},[(u=t.default)==null?void 0:u.call(t)]):(r=t.default)==null?void 0:r.call(t)]}})),{}}}),Ue={__name:"Default",setup(e){return be(),x([{title:"Home",route:"Home"},{title:"Reading",route:"Reading"},{title:"About",route:"About"}]),(n,t)=>{const a=he("router-view");return Ie(),Se(He,null,{default:P(()=>[y(Oe,{color:"primary"},{default:P(()=>[y(Ne,null,{default:P(()=>[y(Be,{icon:"mdi-book-open-page-variant"}),xe(" ResearchGPT ")]),_:1})]),_:1}),y(Ee,null,{default:P(()=>[y(a)]),_:1})]),_:1})}}};export{Ue as default};
