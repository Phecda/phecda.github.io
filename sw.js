if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const d=e=>i(e,l),u={module:{uri:l},exports:o,require:d};s[l]=Promise.all(n.map((e=>u[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-3eb9b3c7.css",revision:null},{url:"assets/index-45c9ea2c.js",revision:null},{url:"assets/index-672a49f9.js",revision:null},{url:"assets/index-7c9b3bf2.js",revision:null},{url:"assets/index-9786e49c.js",revision:null},{url:"assets/index-9a877692.js",revision:null},{url:"assets/index-a7b97ef5.css",revision:null},{url:"assets/index-e82089d2.css",revision:null},{url:"assets/index-fb4924ee.css",revision:null},{url:"assets/index-fbd017a4.js",revision:null},{url:"assets/index-fe61004b.css",revision:null},{url:"assets/workbox-window.prod.es5-dc90f814.js",revision:null},{url:"index.html",revision:"5a11b363c2136062a2aac0517d8253a2"},{url:"favicon.svg",revision:"a680d315e2a86f2265fd29642844dc93"},{url:"favicon.ico",revision:"c1b39c40b35806001116e3718c508f0d"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"apple-touch-icon.png",revision:"c822cda73ff479db9ae6df0f7910cf94"},{url:"android-chrome-192x192.png",revision:"74eb437818174b9275eed3edd6da6bd0"},{url:"android-chrome-512x512.png",revision:"f401fd965231bd6c8205357a09057549"},{url:"manifest.webmanifest",revision:"39df1def7ff9217e57dbce25ea005d92"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
