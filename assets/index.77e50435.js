var y=Object.defineProperty;var p=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var u=(e,o,t)=>o in e?y(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,c=(e,o)=>{for(var t in o||(o={}))i.call(o,t)&&u(e,t,o[t]);if(p)for(var t of p(o))d.call(o,t)&&u(e,t,o[t]);return e};var s=(e,o)=>{var t={};for(var a in e)i.call(e,a)&&o.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&p)for(var a of p(e))o.indexOf(a)<0&&d.call(e,a)&&(t[a]=e[a]);return t};import{j as l,a as n,F as b}from"./index.7f4fa186.js";const f="_typeTable_puogh_1",x="_inputField_puogh_5";var C={typeTable:f,inputField:x};const g=["button","checkbox","color","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week","datetime"],w=[{autoComplete:"name",children:[{autoComplete:"honorific-prefix"},{autoComplete:"given-name"},{autoComplete:"additional-name"},{autoComplete:"family-name"},{autoComplete:"honorific-suffix"}]},{autoComplete:"nickname"},{autoComplete:"email"},{autoComplete:"username"},{autoComplete:"new-password",type:"password"},{autoComplete:"current-password",type:"password"},{autoComplete:"one-time-code",type:"password"},{autoComplete:"organization-title"},{autoComplete:"organization"},{autoComplete:"street-address",type:"multiline",children:[{autoComplete:"address-line1"},{autoComplete:"address-line2"},{autoComplete:"address-line3"}]},{autoComplete:"address-level4"},{autoComplete:"address-level3"},{autoComplete:"address-level2"},{autoComplete:"address-level1"},{autoComplete:"country"},{autoComplete:"country-name"},{autoComplete:"postal-code"},{autoComplete:"cc-name",children:[{autoComplete:"cc-given-name"},{autoComplete:"cc-additional-name"},{autoComplete:"cc-family-name"}]},{autoComplete:"cc-number"},{autoComplete:"cc-exp",type:"month",children:[{autoComplete:"cc-exp-month",type:"number"},{autoComplete:"cc-exp-year",type:"number"}]},{autoComplete:"cc-csc"},{autoComplete:"cc-type"},{autoComplete:"transaction-currency"},{autoComplete:"transaction-amount",type:"number"},{autoComplete:"language"},{autoComplete:"bday",type:"date",children:[{autoComplete:"bday-day",type:"number"},{autoComplete:"bday-month",type:"number"},{autoComplete:"bday-year",type:"number"}]},{autoComplete:"sex"},{autoComplete:"tel",type:"tel",children:[{autoComplete:"tel-country-code"},{autoComplete:"tel-national",children:[{autoComplete:"tel-area-code"},{autoComplete:"tel-local",children:[{autoComplete:"tel-local-prefix"},{autoComplete:"tel-local-suffix"}]}]}]},{autoComplete:"tel-extension"},{autoComplete:"impp",type:"url"},{autoComplete:"url",type:"url"},{autoComplete:"photo",type:"url"}];function h(e){return e.map(v=>{var r=v,{children:o,autoComplete:t}=r,a=s(r,["children","autoComplete"]);const m=n("div",{className:C.inputField,children:[l("label",{htmlFor:t,children:t}),a.type==="multiline"?l("textarea",{rows:5,id:t,autoComplete:t}):l("input",c({id:t,autoComplete:t},a))]});return o?n(b,{children:[m,n("fieldset",{children:[l("legend",{children:t}),h(o)]})]}):m})}function _(){return l("div",{className:"safe-background bg-below-top-bar",children:n("main",{className:"st-content wide-content",children:[l("h1",{children:"Input"}),n("details",{children:[l("summary",{children:"input types"}),n("table",{className:C.typeTable,children:[l("thead",{children:n("tr",{children:[l("th",{children:"Type"}),l("th",{children:"Example"})]})}),l("tbody",{children:g.map(e=>n("tr",{children:[l("td",{children:e}),l("td",{children:l("input",{type:e,name:e})})]},e))})]})]}),l("h2",{children:"AutoComplete"}),l("form",{children:h(w)})]})})}export{_ as default};
