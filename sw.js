if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let d={};const o=e=>i(e,l),t={module:{uri:l},exports:d,require:o};s[l]=Promise.all(n.map((e=>t[e]||o(e)))).then((e=>(r(...e),d)))}}define(["./workbox-b3e22772"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.2e25111a.css",revision:null},{url:"assets/index.40d65a5f.css",revision:null},{url:"assets/index.4300b5c9.js",revision:null},{url:"assets/index.78024e77.css",revision:null},{url:"assets/index.7f65a2ba.js",revision:null},{url:"assets/index.b411810e.js",revision:null},{url:"assets/index.bc0652c9.js",revision:null},{url:"assets/index.cf390ada.css",revision:null},{url:"assets/index.e3649df9.js",revision:null},{url:"assets/index.f9f9e564.css",revision:null},{url:"index.html",revision:"54333dcbd4e3dfcb9a19f4eea41a2a05"},{url:"favicon.svg",revision:"a680d315e2a86f2265fd29642844dc93"},{url:"favicon.ico",revision:"c1b39c40b35806001116e3718c508f0d"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"apple-touch-icon.png",revision:"c822cda73ff479db9ae6df0f7910cf94"},{url:"android-chrome-192x192.png",revision:"74eb437818174b9275eed3edd6da6bd0"},{url:"android-chrome-512x512.png",revision:"f401fd965231bd6c8205357a09057549"},{url:"manifest.webmanifest",revision:"39df1def7ff9217e57dbce25ea005d92"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
