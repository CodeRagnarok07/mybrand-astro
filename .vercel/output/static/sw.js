if(!self.define){let e,s={};const o=(o,i)=>(o=new URL(o+".js",i).href,s[o]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=s,document.head.appendChild(e)}else e=o,importScripts(o),s()})).then((()=>{let e=s[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const l=e=>o(e,r),u={module:{uri:r},exports:t,require:l};s[r]=Promise.all(i.map((e=>u[e]||l(e)))).then((e=>(n(...e),t)))}}define(["./workbox-4de3aa5f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_astro/client.401dfeec.js",revision:null},{url:"_astro/hoisted.484fd86b.js",revision:null},{url:"_astro/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"manifest.webmanifest",revision:"239bc1076ccf7f3ed3ce481a6ea7aabd"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));