import{r as a,j as o,a as l,L as g}from"./index-be30a221.js";const f=(...r)=>r.filter(e=>!!e&&typeof e=="string").join(" "),p="_background_1m9zd_1",u="_content_1m9zd_13",z="_insetContainer_1m9zd_24",b="_insetTop_1m9zd_48",R="_insetBottom_1m9zd_53",C="_insetLeft_1m9zd_58",L="_insetRight_1m9zd_63",N="_insetCenter_1m9zd_68",D="_dimContainer_1m9zd_75",x="_line_1m9zd_83",E="_dimDigit_1m9zd_87",k="_arrow_1m9zd_92",y="_arrowUp_1m9zd_100",I="_arrowDown_1m9zd_106",T="_arrowLeft_1m9zd_112",B="_arrowRight_1m9zd_118",t={background:p,content:u,insetContainer:z,insetTop:b,insetBottom:R,insetLeft:C,insetRight:L,insetCenter:N,dimContainer:D,line:x,dimDigit:E,arrow:k,arrowUp:y,arrowDown:I,arrowLeft:T,arrowRight:B},v=2,w=8,_=({position:r,direction:e,color:i="green"})=>{const[m,d]=a.useState(0),n=a.useRef(null);a.useEffect(()=>{const c=()=>{n.current&&d(e==="horizontal"?n.current.clientWidth:n.current.clientHeight)};return window.addEventListener("resize",c),c(),()=>{window.removeEventListener("resize",c)}},[e]);const s=o("div",{className:t.line,style:{backgroundColor:i,width:e==="vertical"?v:void 0,height:e==="horizontal"?v:void 0}});return l("div",{ref:n,className:t.dimContainer,style:{...r,flexDirection:e==="horizontal"?"row":"column",minWidth:e==="vertical"?w:void 0,minHeight:e==="horizontal"?w:void 0},children:[o("div",{className:f(t.arrow,e==="vertical"?t.arrowUp:t.arrowLeft),style:e==="vertical"?{borderBottomColor:i}:{borderRightColor:i}}),s,o("div",{className:t.dimDigit,children:m}),s,o("div",{className:f(t.arrow,e==="vertical"?t.arrowDown:t.arrowRight),style:e==="vertical"?{borderTopColor:i}:{borderLeftColor:i}})]})};function H(){const[r,e]=a.useState({top:0,bottom:0,left:0,right:0}),i=a.useRef(null),m=a.useRef(null);return a.useEffect(()=>{const d=()=>{var c,h;const n=(c=i.current)==null?void 0:c.getClientRects().item(0),s=(h=m.current)==null?void 0:h.getClientRects().item(0);n&&s&&e({top:n.top-s.top,bottom:s.bottom-n.bottom,left:n.left-s.left,right:s.right-n.right})};return window.addEventListener("resize",d),d(),()=>{window.removeEventListener("resize",d)}},[]),l("div",{ref:m,className:`safe-background ${t.background}`,children:[l("div",{ref:i,className:t.content,children:[l("p",{children:["Back to ",o(g,{to:"/",children:"Home"})]}),l("div",{className:t.insetContainer,children:[o("div",{className:t.insetTop,children:r.top}),o("div",{className:t.insetLeft,children:r.left}),l("div",{className:t.insetCenter,children:[Math.round(window.devicePixelRatio*100)/100,"x"]}),o("div",{className:t.insetRight,children:r.right}),o("div",{className:t.insetBottom,children:r.bottom})]}),o(_,{direction:"horizontal",position:{left:0,right:0,top:60},color:"var(--color-blue)"}),o(_,{direction:"vertical",position:{top:0,bottom:0,left:40},color:"var(--color-blue)"})]}),o(_,{direction:"horizontal",position:{left:0,right:0,bottom:"calc(env(safe-area-inset-bottom, 0px) + 40px)"},color:"var(--color-red)"}),o(_,{direction:"vertical",position:{top:0,bottom:0,right:"calc(env(safe-area-inset-right, 0px) + 40px)"},color:"var(--color-red)"})]})}H.displayName="LayoutInspector";export{H as Component};
