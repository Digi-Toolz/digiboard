/* DigiBoard Next 15.80 – kompakter Offline-Cache für die Upload-Version. */
const VERSION='digiboard-15.80-kompakt';
const CACHE=`${VERSION}-core`;

const CORE=[
  './',
  './index.html',
  './app.bundle.css',
  './app.bundle.js',
  './manifest.webmanifest',
  './brand-icon-96.png',
  './apple-touch-icon.png',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './forest-calm-15.78.png',
  './tree-reward-15.78.png'
];

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});

self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{
    if(response&&response.ok){
      const copy=response.clone();
      caches.open(CACHE).then(cache=>cache.put(event.request,copy));
    }
    return response;
  })));
});
