if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let d={};const c=e=>i(e,o),l={module:{uri:o},exports:d,require:c};s[o]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(r(...e),d)))}}define(["./workbox-b3e22772"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.62f6b05b.css",revision:null},{url:"assets/index.92f834df.css",revision:null},{url:"assets/index.c5e699dc.js",revision:null},{url:"assets/index.c9ac61a4.js",revision:null},{url:"assets/index.cf390ada.css",revision:null},{url:"assets/index.d4e7e10b.js",revision:null},{url:"index.html",revision:"95a681ef7143e77cf3af2f1cbbdf50e3"},{url:"favicon.svg",revision:"a680d315e2a86f2265fd29642844dc93"},{url:"favicon.ico",revision:"c1b39c40b35806001116e3718c508f0d"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"apple-touch-icon.png",revision:"d3a02d27a9a9a5c4e7455deed2837cc8"},{url:"android-chrome-192x192.png",revision:"46281578144c7ab6272b3cc99791bd26"},{url:"android-chrome-512x512.png",revision:"2e34b6740be9a18b76f5ee4dd13ba3d4"},{url:"manifest.webmanifest",revision:"39df1def7ff9217e57dbce25ea005d92"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
