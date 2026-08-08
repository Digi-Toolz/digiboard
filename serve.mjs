/* ============================================================
   DigiBoard Next – serve.mjs

   Ein winziger Webserver, nur für diesen Ordner. Ohne Zusatzpakete,
   nur mit dem, was Node.js selbst mitbringt.

   WOZU DAS NÖTIG IST – der Punkt, an dem sehr viel Zeit verloren ging:

   Wird `index.html` per Doppelklick geöffnet, läuft DigiBoard unter
   `file://`. Das sieht aus wie eine Webseite, ist aber keine:

   - Safari gibt JEDER einzelnen Datei unter file:// einen EIGENEN,
     abgeschotteten Speicher. index.html und foto-diagnose.html sehen
     einander deshalb nicht – obwohl sie im selben Ordner liegen.
   - Dieser Speicher gilt dem Browser als flüchtig. Er wird ohne
     Vorwarnung geleert. Fotos und Punkte sind dann weg.
   - Der Service Worker verweigert unter file:// den Dienst. Kein
     Offline-Betrieb, keine Installation auf dem Home-Bildschirm.
   - `?v=`-Anhänge an den Dateien wirken nicht. Änderungen kommen
     nicht an, egal wie oft man neu lädt.

   Über `http://localhost:8080` fällt all das weg: ein stabiler,
   dauerhafter Speicher, ein funktionierender Service Worker,
   Installierbarkeit – und die Diagnoseseite sieht dieselben Daten
   wie die App.

   Starten:  node serve.mjs
   Oder einfach „DigiBoard starten.command" doppelklicken.
   ============================================================ */

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import {fileURLToPath} from 'node:url';

const WURZEL = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT) || 8080;

const TYPEN = {
  '.html':'text/html; charset=utf-8',
  '.js'  :'text/javascript; charset=utf-8',
  '.mjs' :'text/javascript; charset=utf-8',
  '.css' :'text/css; charset=utf-8',
  '.json':'application/json; charset=utf-8',
  '.webmanifest':'application/manifest+json; charset=utf-8',
  '.svg' :'image/svg+xml',
  '.png' :'image/png',
  '.jpg' :'image/jpeg', '.jpeg':'image/jpeg',
  '.webp':'image/webp',
  '.gif' :'image/gif',
  '.ico' :'image/x-icon',
  '.woff':'font/woff', '.woff2':'font/woff2',
  '.mp3' :'audio/mpeg', '.wav':'audio/wav',
  '.txt' :'text/plain; charset=utf-8',
  '.md'  :'text/markdown; charset=utf-8'
};

function sicherPfad(anfrage){
  /* Kein Ausbrechen aus dem Ordner – auch nicht über ../ oder %2e%2e */
  let p;
  try{ p = decodeURIComponent(new URL(anfrage, 'http://x').pathname); }
  catch{ return null; }
  if(p.endsWith('/')) p += 'index.html';
  const ziel = path.normalize(path.join(WURZEL, p));
  if(!ziel.startsWith(WURZEL)) return null;
  return ziel;
}

const server = http.createServer((anfrage, antwort) => {
  const ziel = sicherPfad(anfrage.url || '/');
  if(!ziel){ antwort.writeHead(403); return antwort.end('Verboten'); }

  fs.stat(ziel, (fehler, info) => {
    if(fehler || !info.isFile()){
      antwort.writeHead(404, {'Content-Type':'text/html; charset=utf-8'});
      return antwort.end('<!doctype html><meta charset="utf-8">'
        +'<p style="font:16px system-ui;padding:24px">Nicht gefunden. '
        +'<a href="/">Zurück zu DigiBoard</a></p>');
    }
    /* Der Service Worker MUSS immer frisch geholt werden, sonst bleibt eine
       alte Fassung stehen und liefert weiter alte Dateien aus. */
    const kopf = {
      'Content-Type': TYPEN[path.extname(ziel).toLowerCase()] || 'application/octet-stream',
      'Content-Length': info.size,
      'Cache-Control': /sw\.js$|\.webmanifest$|\.html$/i.test(ziel)
        ? 'no-cache, no-store, must-revalidate'
        : 'no-cache'
    };
    antwort.writeHead(200, kopf);
    if(anfrage.method === 'HEAD') return antwort.end();
    fs.createReadStream(ziel).pipe(antwort);
  });
});

function wlanAdresse(){
  for(const geraete of Object.values(os.networkInterfaces())){
    for(const g of geraete || []){
      if(g.family === 'IPv4' && !g.internal) return g.address;
    }
  }
  return null;
}

server.on('error', fehler => {
  if(fehler.code === 'EADDRINUSE'){
    console.error(`\n  Der Port ${PORT} ist schon belegt.`);
    console.error(`  Läuft DigiBoard vielleicht bereits in einem anderen Fenster?`);
    console.error(`  Sonst mit einem anderen Port starten:  PORT=8081 node serve.mjs\n`);
  }else{
    console.error('\n  Start fehlgeschlagen:', fehler.message, '\n');
  }
  process.exit(1);
});

server.listen(PORT, () => {
  const wlan = wlanAdresse();
  console.log(`
  ┌─────────────────────────────────────────────────────────┐
  │  🦊  DigiBoard läuft                                    │
  └─────────────────────────────────────────────────────────┘

     Auf diesem Rechner:   http://localhost:${PORT}
${wlan ? `     iPad / iPhone:        http://${wlan}:${PORT}
                           (gleiches WLAN, Laptop muss laufen)` : ''}

     Fotos nachsehen:      http://localhost:${PORT}/foto-diagnose.html

  Wichtig: DigiBoard ab jetzt IMMER über diese Adresse öffnen,
  nie mehr per Doppelklick auf index.html. Nur so bleiben Fotos
  und Punkte dauerhaft gespeichert.

  Beenden mit  Ctrl + C
`);
});
