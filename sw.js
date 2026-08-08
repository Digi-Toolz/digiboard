/* ============================================================
   DigiBoard Next – sw.js   (Stufe 1)

   Macht die Klassentafel offlinefaehig. Ohne diese Datei war die App bei
   ausgefallenem oder ueberlastetem Schul-WLAN nicht benutzbar.

   Strategie:
   - Kerndateien werden bei der Installation vollstaendig vorgeladen.
   - Alles Weitere (vor allem die Portraits) wird beim ersten Aufruf
     nachtraeglich in den Cache gelegt: cache-first, danach Netz.
   - Beim Versionswechsel werden alte Caches vollstaendig entfernt.

   WICHTIG: Ein Service Worker laeuft nur ueber http:// oder https://,
   niemals ueber file://. Zum Testen liegt `serve.mjs` bei.
   ============================================================ */

const VERSION='digiboard-15.68';
const CORE_CACHE=`${VERSION}-core`;
const ASSET_CACHE=`${VERSION}-assets`;

const CORE=[
  './',
  './index.html',
  './styles.css',
  './override.css',
  './fixes.css',
  './fundus-15-33.css',
  './wald-15-34.css',
  './begrussung-15-35.css',
  './kinderansicht-15-36.css',
  './wald-tools-15-38.css',
  './wald-hintergrund-15-39.css',
  './oberflaeche-15-40.css',
  './persoenlicher-kopf-15-41.css',
  './waldtiefe-15-42.css',
  './handy-und-daten-15-43.css',
  './wald-und-gruss-15-44.css',
  './waldbuehne-15-45.css',
  './handy-15-46.css',
  './dateien-und-einstellungen-15-47.css',
  './scrollen-15-48.css',
  './team-und-werkzeuge-15-51.css',
  './kinderfotos-15-53.css',
  './waldfrisch-15-54.css',
  './punkteliste-15-55.css',
  './fenster-15-56.css',
  './fundus-fenster-15-57.css',
  './kind-loeschen-15-58.css',
  './schubladen-15-59.css',
  './handy-mitte-15-60.css',
  './kinderkarte-15-62.css',
  './kopfleiste-15-64.css',
  './tafel-lesbar-15-65.css',
  './tafel-schild-15-66.css',
  './wald-look-15-67.css',
  './wald-feinschliff-15-68.css',
  './foto-diagnose.html',
  './photo-store.js',
  './app.js',
  './package-export.js',
  './brand-icon-96.png',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png',
  './forest-clearing-15.24.png',
  './forest-clearing-15.67.png',
  './tree.png',
  './tree-canopy-10.4.svg',
  './tree-bloom.svg',
  './forest-scene.svg',
  './forest-depth.svg'
];

self.addEventListener('install',event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(CORE_CACHE);
    // einzeln statt addAll: eine fehlende Datei soll nicht die ganze
    // Installation scheitern lassen
    await Promise.all(CORE.map(async url=>{
      try{ await cache.add(new Request(url,{cache:'reload'})); }catch{}
    }));
    self.skipWaiting();
  })());
});

self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const names=await caches.keys();
    await Promise.all(names
      .filter(name=>name!==CORE_CACHE&&name!==ASSET_CACHE)
      .map(name=>caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('message',event=>{
  if(event.data==='skipWaiting') self.skipWaiting();
});

self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET') return;

  const url=new URL(request.url);
  if(url.origin!==self.location.origin) return;   // Google-Sheets-Sync nie abfangen

  // Navigationen: erst Netz, bei Ausfall die zwischengespeicherte Seite
  if(request.mode==='navigate'){
    event.respondWith((async()=>{
      try{
        const fresh=await fetch(request);
        const cache=await caches.open(CORE_CACHE);
        cache.put('./index.html',fresh.clone());
        return fresh;
      }catch{
        return (await caches.match('./index.html'))
            || (await caches.match('./'))
            || new Response('<!doctype html><meta charset="utf-8"><p>DigiBoard ist offline und noch nicht vollständig gespeichert.</p>',
                            {headers:{'Content-Type':'text/html; charset=utf-8'}});
      }
    })());
    return;
  }

  /* Code und Styles (HTML/CSS/JS/Manifest): NETZ ZUERST.
     Frueher wurde hier cache-first mit ignoreSearch:true bedient – dadurch
     matchte override.css?v=NEU gegen die alte gecachte override.css und die
     veraltete Datei wurde ausgeliefert. Updates kamen so nie auf dem Geraet
     an. Jetzt: immer frisch laden, Cache nur als Offline-Rueckfall. */
  const isCode=/\.(?:css|js|webmanifest)$/i.test(url.pathname);
  if(isCode){
    event.respondWith((async()=>{
      try{
        const fresh=await fetch(request);
        if(fresh&&fresh.ok&&fresh.type==='basic'){
          const cache=await caches.open(CORE_CACHE);
          cache.put(request,fresh.clone());
          // ohne Versionsanhang zusaetzlich ablegen, damit der Offline-Fall
          // auch ohne exakt passende ?v=-Query eine Datei findet
          try{cache.put(new Request(url.origin+url.pathname),fresh.clone())}catch{}
        }
        return fresh;
      }catch{
        return (await caches.match(request))
            || (await caches.match(url.origin+url.pathname))
            || new Response('',{status:504,statusText:'offline'});
      }
    })());
    return;
  }

  // Bilder & Uebriges: Cache zuerst (aendert sich nicht), sonst Netz und ablegen
  event.respondWith((async()=>{
    const hit=await caches.match(request,{ignoreSearch:true});
    if(hit) return hit;
    try{
      const fresh=await fetch(request);
      if(fresh.ok&&fresh.type==='basic'){
        const cache=await caches.open(ASSET_CACHE);
        cache.put(request,fresh.clone());
      }
      return fresh;
    }catch{
      return new Response('',{status:504,statusText:'offline'});
    }
  })());
});
