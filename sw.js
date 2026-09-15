const C='rashad-fitness-v18';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png','./apple-touch-icon.png','./avatar.jpg'])))});
self.addEventListener('activate',e=>{e.waitUntil(Promise.all([caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))),self.clients.claim()]))});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(cached=>{const fp=fetch(e.request).then(res=>{if(res&&res.status===200&&/\.(jpg|jpeg|png|json)$/.test(e.request.url)){caches.open(C).then(c=>c.put(e.request,res.clone()))}return res}).catch(()=>cached);return cached||fp}))});
