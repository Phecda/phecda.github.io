import{h as g,_,p as f,o as t,E as p}from"./index-639e94b7.js";const h=(...n)=>n.filter(o=>!!o&&typeof o=="string").join(" "),u="_background_9i73q_1",b="_content_9i73q_13",C="_insetContainer_9i73q_24",R="_insetTop_9i73q_48",N="_insetBottom_9i73q_53",L="_insetLeft_9i73q_58",q="_insetRight_9i73q_63",D="_insetCenter_9i73q_68",z="_dimContainer_9i73q_75",x="_line_9i73q_83",I="_dimDigit_9i73q_87",T="_arrow_9i73q_92",k="_arrowUp_9i73q_100",y="_arrowDown_9i73q_106",E="_arrowLeft_9i73q_112",B="_arrowRight_9i73q_118",e={background:u,content:b,insetContainer:C,insetTop:R,insetBottom:N,insetLeft:L,insetRight:q,insetCenter:D,dimContainer:z,line:x,dimDigit:I,arrow:T,arrowUp:k,arrowDown:y,arrowLeft:E,arrowRight:B},v=2,w=8,d=({position:n,direction:o,color:r="green"})=>{const[l,c]=g(0),i=_(null);f(()=>{const a=()=>{i.current&&c(o==="horizontal"?i.current.clientWidth:i.current.clientHeight)};return window.addEventListener("resize",a),a(),()=>{window.removeEventListener("resize",a)}},[o]);const s=t("div",{className:e.line,style:{backgroundColor:r,width:o==="vertical"?v:void 0,height:o==="horizontal"?v:void 0}});return t("div",{ref:i,className:e.dimContainer,style:{...n,flexDirection:o==="horizontal"?"row":"column",minWidth:o==="vertical"?w:void 0,minHeight:o==="horizontal"?w:void 0},children:[t("div",{className:h(e.arrow,o==="vertical"?e.arrowUp:e.arrowLeft),style:o==="vertical"?{borderBottomColor:r}:{borderRightColor:r}}),s,t("div",{className:e.dimDigit,children:l}),s,t("div",{className:h(e.arrow,o==="vertical"?e.arrowDown:e.arrowRight),style:o==="vertical"?{borderTopColor:r}:{borderLeftColor:r}})]})};function W(){const[n,o]=g({top:0,bottom:0,left:0,right:0}),r=_(null),l=_(null);return f(()=>{const c=()=>{var a,m;const i=(a=r.current)==null?void 0:a.getClientRects().item(0),s=(m=l.current)==null?void 0:m.getClientRects().item(0);i&&s&&o({top:i.top-s.top,bottom:s.bottom-i.bottom,left:i.left-s.left,right:s.right-i.right})};return window.addEventListener("resize",c),c(),()=>{window.removeEventListener("resize",c)}},[]),t("div",{ref:l,className:`safe-background ${e.background}`,children:[t("div",{ref:r,className:e.content,children:[t("p",{children:["Back to ",t(p,{href:"/",children:"Home"})]}),t("div",{className:e.insetContainer,children:[t("div",{className:e.insetTop,children:n.top}),t("div",{className:e.insetLeft,children:n.left}),t("div",{className:e.insetCenter,children:[Math.round(window.devicePixelRatio*100)/100,"x"]}),t("div",{className:e.insetRight,children:n.right}),t("div",{className:e.insetBottom,children:n.bottom})]}),t(d,{direction:"horizontal",position:{left:0,right:0,top:60},color:"var(--color-blue)"}),t(d,{direction:"vertical",position:{top:0,bottom:0,left:40},color:"var(--color-blue)"})]}),t(d,{direction:"horizontal",position:{left:0,right:0,bottom:"calc(env(safe-area-inset-bottom, 0px) + 40px)"},color:"var(--color-red)"}),t(d,{direction:"vertical",position:{top:0,bottom:0,right:"calc(env(safe-area-inset-right, 0px) + 40px)"},color:"var(--color-red)"})]})}export{W as default};
