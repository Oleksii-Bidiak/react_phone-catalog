"use strict";(self.webpackChunkreact_phone_catalog=self.webpackChunkreact_phone_catalog||[]).push([[740],{5488:(e,s,t)=>{t.d(s,{u:()=>g});var r=t(5043),c=t(2640),o=t(1516);const a="pagePartTop_breadcrumbs__opQQr",i="pagePartTop_breadcrumbs__link__N2v4g",l="pagePartTop_title__m6MOt",n="pagePartTop_label__AHrb1",d="pagePartTop_currentBreadcrumb__ZkMpa",_="pagePartTop_backButton__qC98z";var p=t(3216),u=t(5475),m=t(3594),h=t(3762),x=t(8139),j=t.n(x),v=t(1596),N=t(579);const g=(0,r.memo)((e=>{let{title:s,isLoadingTitle:t=!1,isLoading:x=!1,productsCount:g=0,tag:w="h1",productName:S}=e;const{itemId:b}=(0,p.g)(),f=(0,p.zy)(),C=(0,p.Zp)(),[P,y]=(0,r.useState)(!1);(0,r.useEffect)((()=>{var e;const s=void 0!==(null===(e=f.state)||void 0===e?void 0:e.fromLocation);y(!!s)}),[f]);const A=(0,r.useMemo)((()=>{const e=f.pathname.split("/");return e.map(((s,t)=>{const r=t===e.length-1,c="".concat(e.slice(0,t+1).join("/"));return 0===t?(0,N.jsx)(u.N_,{to:m.AY.home,className:j()(i,h.A["_icon-home"])},t):"products"===s?null:r?(0,N.jsx)("span",{className:d,children:b?S||"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f...":(0,v.Z)(s)},t):(0,N.jsx)(u.N_,{to:c,className:i,children:(0,v.Z)(s)},t)}))}),[b,f.pathname,S]);return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("nav",{className:a,children:A.filter(Boolean)}),P&&(0,N.jsx)("button",{className:j()(_,h.A["_icon-arrow"]),onClick:()=>{var e,s;null!==(e=f.state)&&void 0!==e&&e.fromLocation&&(console.log("location",null===(s=f.state)||void 0===s?void 0:s.fromLocation),C(f.state.fromLocation))},children:"Back"}),t?(0,N.jsx)(o.m,{height:"h1"===w?56:41,width:"100%",className:l}):(0,N.jsx)(c.v,{Tag:w,title:s,className:l}),x&&(0,N.jsx)(o.m,{height:21,width:"100%"}),!x&&0!==g&&(0,N.jsx)("p",{className:n,children:"".concat(g," models")})]})}))},8073:(e,s,t)=>{t.d(s,{K:()=>h});var r=t(5043),c=t(50),o=t(6685),a=t(8598),i=t(8139),l=t.n(i);const n={sceletons:"productsSlider_sceletons__qOZj6","products-slider":"productsSlider_products-slider__ZVFLI","products-slider__wrapper":"productsSlider_products-slider__wrapper__s7CRs","products-slider__slide":"productsSlider_products-slider__slide__iX8wG","products-slider__top":"productsSlider_products-slider__top__SqFNg","products-slider__title":"productsSlider_products-slider__title__ElH3u","products-slider__controls":"productsSlider_products-slider__controls__Lhwdi","products-slider__button_prev":"productsSlider_products-slider__button_prev__86Ev1","products-slider__button_next":"productsSlider_products-slider__button_next__2JbTw"};var d=t(8115),_=t(3762),p=t(5600),u=t(4763),m=t(579);const h=(0,r.memo)((e=>{const{className:s,title:t,products:i,lastSection:h,isLoading:x}=e,[j,v]=(0,d.NC)(),N=(0,r.useMemo)((()=>({navigation:{prevEl:".".concat(n["products-slider__button_prev"]),nextEl:".".concat(n["products-slider__button_next"])},wrapperClass:"".concat(n["products-slider__wrapper"]),slidesPerView:1.29,spaceBetween:16,watchOverflow:!0,observer:!0,observeSlideChildren:!0,breakpoints:{400:{slidesPerView:1.5},500:{slidesPerView:2},639.98:{slidesPerView:2.5},767.98:{slidesPerView:3},991.98:{slidesPerView:4}}})),[]),g=(0,r.useMemo)((()=>(0,m.jsxs)("div",{className:n["products-slider__controls"],children:[(0,m.jsx)(p.$n,{className:l()(n["products-slider__button"],n["products-slider__button_prev"],_.A["_icon-arrow"]),theme:p.Ox.SQUARE}),(0,m.jsx)(p.$n,{className:l()(n["products-slider__button"],n["products-slider__button_next"],_.A["_icon-arrow"]),theme:p.Ox.SQUARE})]})),[]),w=i.map((e=>({id:e.id,content:(0,m.jsx)(d.AA,{product:e,toggleCart:v,toggleFavorite:j})})));return(0,m.jsx)(u.w,{lastSection:h,children:(0,m.jsxs)("div",{className:l()(s,n["products-slider"]),children:[(0,m.jsx)(o.J,{title:t,className:"".concat(n["products-slider__top"]),classNameTitle:"".concat(n["products-slider__title"]),children:g}),x?(0,m.jsx)("div",{className:n.sceletons,children:Array.from({length:4},((e,s)=>s)).map((e=>(0,m.jsx)(d.w7,{},e)))}):(0,m.jsx)(a.A,{modules:[c.Vx,c.AV],options:N,slidesContent:w,className:"".concat(n["products-slider"]),classNameSlide:"".concat(n["products-slider__slide"])})]})})}))},1419:(e,s,t)=>{t.r(s),t.d(s,{default:()=>Z});var r=t(3216),c=t(5043),o=t(8115);var a=t(4763);const i={productSlider:"productSlider_productSlider__IYDzE",slider:"productSlider_slider__fo-79","products-slider__wrapper":"productSlider_products-slider__wrapper__3luiC","swiper-slide":"productSlider_swiper-slide__M1ToT","swiper-slide__content":"productSlider_swiper-slide__content__qyLWS","thumb-slider":"productSlider_thumb-slider__Rpywu","thumb-slider-wrapper":"productSlider_thumb-slider-wrapper__FG-yF","thumb-slider__slide-content":"productSlider_thumb-slider__slide-content__jrVqx","thumb-slider__slide":"productSlider_thumb-slider__slide__uRpbJ"};var l=t(8598),n=t(50),d=t(8139),_=t.n(d),p=t(579);const u=(0,c.memo)((e=>{let{product:s,className:t}=e;const[r,o]=(0,c.useState)(null),a=(0,c.useMemo)((()=>({wrapperClass:"".concat(i["products-slider__wrapper"]),slidesPerView:1,spaceBetween:0,observer:!0,thumbs:{swiper:r},breakpoints:{}})),[r]),d=(0,c.useMemo)((()=>({wrapperClass:"".concat(i["thumb-slider-wrapper"]),slideActiveClass:"".concat(i["thumb-slider__slide-active"]),slidesPerView:5,spaceBetween:8,observer:!0,slideToClickedSlide:!0,breakpoints:{639.98:{direction:"vertical"}}})),[]),u=null===s||void 0===s?void 0:s.images.map(((e,s)=>({id:s,content:(0,p.jsx)("div",{className:i["swiper-slide__content"],children:(0,p.jsx)("img",{src:"".concat(e)})})}))),m=null===s||void 0===s?void 0:s.images.map(((e,s)=>({id:s,content:(0,p.jsx)("div",{className:i["thumb-slider__slide-content"],children:(0,p.jsx)("img",{src:"".concat(e)})})})));return(0,p.jsxs)("div",{className:_()(i.productSlider,t),children:[(0,p.jsx)(l.A,{className:i.slider,classNameSlide:i.slider__slide,options:a,slidesContent:u,modules:[n.WO]}),(0,p.jsx)(l.A,{className:i["thumb-slider"],classNameSlide:_()(i["thumb-slider__slide"]),options:d,slidesContent:m,onSwiper:e=>{o(e)}})]})})),m="productPageForm_productPageForm__UfoJX",h="productPageForm_formItem__CsER6",x="productPageForm_pricePrimary__tsVIf",j="productPageForm_priceSecondary__ho+BM";var v=t(5600),N=t(3762),g=t(5167);const w=(0,c.memo)((e=>{let{className:s,product:t}=e;const{itemId:a}=(0,r.g)(),i=(0,r.zy)(),l=(0,r.Zp)(),{namespaceId:n,colorsAvailable:d,capacityAvailable:u,color:w,capacity:S,priceRegular:b,priceDiscount:f,screen:C,resolution:P,processor:y,ram:A,cartItem:T,favorite:k}=t,[L,F]=(0,c.useState)(k),[I,M]=(0,c.useState)(T),[E,V]=(0,o.NC)(),B=e=>"$"+e,z=(0,c.useCallback)((e=>{const s=i.pathname.split("/"),t=s.findIndex((e=>e===a));-1!==t&&(s[t]=e);const r=s.join("/");l(r)}),[a,i.pathname,l]),O=(0,c.useCallback)((e=>{const s="".concat(n,"-").concat(S.toLocaleLowerCase(),"-").concat(e);z(s)}),[S,n,z]),R=(0,c.useCallback)((e=>{const s="".concat(n,"-").concat(e.toLocaleLowerCase(),"-").concat(w);z(s)}),[w,n,z]),U=(0,c.useMemo)((()=>d.map((e=>(0,p.jsx)(v.a,{value:e,color:e,checked:w===e,onChange:O,name:"colors"},e)))),[O,w,d]),Z=(0,c.useMemo)((()=>u.map((e=>{return(0,p.jsx)(v.a,{value:e,text:(s=e,s.replace(/(\d+)([a-zA-Z]+)/,"$1 $2")),checked:e===S,onChange:R,name:"capacity",theme:v.ue.SQUARE},e);var s}))),[S,u,R]),J={screen:C,resolution:P,processor:y,ram:A};return(0,p.jsx)("div",{className:s,children:(0,p.jsxs)("form",{className:_()(m,s),children:[(0,p.jsx)(v.eI,{label:"Available colors",className:h,children:(0,p.jsx)(v.bT,{wrap:!0,children:U})}),(0,p.jsx)(v.eI,{label:"Select capacity",className:h,children:(0,p.jsx)(v.bT,{wrap:!0,children:Z})}),(0,p.jsxs)(v.eI,{children:[(0,p.jsx)(v.bT,{children:f?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("span",{className:x,children:B(f)}),(0,p.jsx)("span",{className:j,children:B(b)})]}):(0,p.jsx)("span",{className:x,children:B(b)})}),(0,p.jsxs)(v.bT,{children:[(0,p.jsx)(v.$n,{onClick:()=>{M((e=>!e)),V(a)},selected:I,size:v.Mp.FULL,children:I?"Added to cart":"Add to cart"}),(0,p.jsx)(v.$n,{onClick:()=>{F((e=>!e)),E(a)},size:v.Mp.L,className:_()({[N.A["_icon-heart"]]:!L,[N.A["_icon-heart_like"]]:L}),theme:v.Ox.SQUARE_FAV,selected:L})]})]}),(0,p.jsx)(v.eI,{children:(0,p.jsx)(g.F,{techSpecs:J})})]})})})),S="mainProductSection_main__body__2HBn+",b="mainProductSection_slider__oNn0+",f="mainProductSection_form__4WstX";var C=t(5488),P=t(1516);const y=(0,c.memo)((e=>{let{product:s,isLoadind:t}=e;return(0,p.jsxs)(a.w,{firstSection:!0,children:[s&&!t&&(0,p.jsx)(C.u,{isLoading:t,title:null===s||void 0===s?void 0:s.name,tag:"h2",productName:s.name}),(0,p.jsxs)("div",{className:S,children:[t&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(P.m,{className:b,width:"100%",height:560}),(0,p.jsx)(P.m,{className:f,width:"100%",height:560})]}),s&&!t&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(u,{product:s,className:b}),(0,p.jsx)(w,{product:s,className:f})]})]})]})})),A="aboutProductSection_wrapper__ULIOJ",T="aboutProductSection_about__rxy8M",k="aboutProductSection_techSpecks__XLCK2",L="aboutProductSection_descriptionList__CQ4Yh",F="aboutProductSection_title__nHxU4";var I=t(2640);const M={title:"descriptionBlock_title__gb3Sp",text:"descriptionBlock_text__kI8mu"};var E=t(3555);const V=(0,c.memo)((e=>{let{className:s,description:t}=e;const{text:r,title:c}=t;return(0,p.jsxs)("div",{className:_()(M.descriptionBlock,[s]),children:[(0,p.jsx)(I.v,{Tag:"h4",title:c,className:M.title}),r.map((e=>(0,p.jsx)(E.V,{text:e,className:M.text},e)))]})})),B=(0,c.memo)((e=>{let{product:s,isLoadind:t}=e;const{screen:r,resolution:o,processor:i,ram:l,capacity:n,camera:d,zoom:_,cell:u,description:m}=s,h={screen:r,resolution:o,processor:i,ram:l,capacity:n,camera:d,zoom:_,cell:u.join(", ")},x=(0,c.useMemo)((()=>m.map((e=>(0,p.jsx)(V,{description:e},e.title)))),[m]);return(0,p.jsx)(a.w,{children:t?(0,p.jsx)(P.m,{width:"100%",height:200}):(0,p.jsxs)("div",{className:A,children:[(0,p.jsxs)("div",{className:T,children:[(0,p.jsx)(I.v,{Tag:"h3",title:"About",className:F}),(0,p.jsx)("div",{className:L,children:x})]}),(0,p.jsxs)("div",{className:k,children:[(0,p.jsx)(I.v,{Tag:"h3",title:"Tech specs",className:F}),(0,p.jsx)(g.F,{techSpecs:h,size:g.G.M})]})]})})}));var z=t(8073);const O=(0,c.memo)((()=>{const[e,s]=(0,c.useState)([]);return(0,c.useEffect)((()=>{(async e=>{try{return(await fetch("api/products.json").then((e=>e.json())).then((s=>s.filter((s=>s.category===e))))).slice(0,10)}catch(s){throw new Error("error")}})("accessories").then((e=>s(e))),window.scrollTo({top:0,behavior:"smooth"})}),[]),(0,p.jsx)(a.w,{lastSection:!0,children:0!==e.length&&(0,p.jsx)(z.K,{title:"You may also like",products:e})})}));var R=t(2272);const U="productPage_notFoundTitle__XjvY5";const Z=function(){const{category:e,itemId:s}=(0,r.g)(),[t,a]=(0,c.useState)(!1),[i,l]=(0,c.useState)(null);return(0,c.useEffect)((()=>{a(!0),(async(e,s)=>{try{const t=await fetch("api/".concat(e,".json")).then((e=>e.json())).then((e=>e.find((e=>e.id===s))));if(!t)return null;const r=localStorage.getItem(o.E7),c=r?JSON.parse(r):[],a=localStorage.getItem(o.Uy),i=a?JSON.parse(a):[];return{...t,cartItem:!!i.find((e=>e.itemId===t.id)),favorite:!!c.includes(t.id)}}catch(t){throw new Error("error")}})(e,s).then((e=>l(e))).finally((()=>a(!1)))}),[e,s]),(0,p.jsx)(p.Fragment,{children:i?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(y,{isLoadind:t,product:i}),i&&!t&&(0,p.jsx)(B,{product:i,isLoadind:t}),!t&&(0,p.jsx)(O,{})]}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(I.v,{Tag:"h2",title:"Product was not found",className:U}),(0,p.jsx)(R.M,{src:"img/cart-is-empty.png",alt:"Cart is empty"})]})})}},2272:(e,s,t)=>{t.d(s,{M:()=>o});const r="notFound_wrapper__Ky7Jb";var c=t(579);const o=e=>{let{alt:s,src:t}=e;return(0,c.jsx)("div",{className:r,children:(0,c.jsx)("img",{src:t,alt:s})})}},6685:(e,s,t)=>{t.d(s,{J:()=>n});var r=t(8139),c=t.n(r),o=t(5043);const a="sectionTop_sectionTop__wyyYE";var i=t(2640),l=t(579);const n=(0,o.memo)((e=>{let{className:s,title:t,classNameTitle:r,children:o}=e;return(0,l.jsxs)("div",{className:c()(s,a),children:[(0,l.jsx)(i.v,{title:t,Tag:"h2",className:r}),o]})}))},4763:(e,s,t)=>{t.d(s,{w:()=>d});const r="section_standartSection__QZBN0",c="section_firstSection__fmPZ6",o="section_padding-bottom__s7C6U";var a=t(8139),i=t.n(a),l=t(3774),n=t(579);const d=e=>{let{children:s,className:t,firstSection:a,lastSection:d=!1}=e;return(0,n.jsx)("section",{className:i()(t,r,{[c]:a,[o]:d}),children:(0,n.jsx)(l.m,{children:s})})}},8598:(e,s,t)=>{t.d(s,{A:()=>i});var r=t(4975),c=t(8139),o=t.n(c),a=(t(5084),t(3874),t(2939),t(579));const i=e=>{const{slidesContent:s,options:t,className:c,classNameSlide:i,modules:l,onSwiper:n}=e;return(0,a.jsx)(r.RC,{className:o()(c),modules:l,...t,onSwiper:n,children:null===s||void 0===s?void 0:s.map((e=>(0,a.jsx)(r.qr,{className:i,children:null===e||void 0===e?void 0:e.content},null===e||void 0===e?void 0:e.id)))})}}}]);
//# sourceMappingURL=740.e9d161f1.chunk.js.map