/* ============================================================
   DigiBoard – tafel-foto.mjs

   Macht ein Bildschirmfoto der Tafel, ohne dass jemand hinsieht.

   WOZU:
   Bis 15.65 habe ich Gestaltung geändert, ohne das Ergebnis je gesehen
   zu haben. Der Prüfstand konnte sagen, WELCHE Regel gewinnt – aber
   nicht, ob es danach gut aussieht. Daraus entstand eine Schleife aus
   „probiert, verschlimmert, nachgebessert".

   Dieses Skript schließt die Lücke: Es startet den kleinen Webserver,
   lädt DigiBoard in einem echten Browser ohne Fenster, klickt den
   Begrüßungsschirm weg und legt ein PNG ab.

   EINMALIG EINRICHTEN (nur beim ersten Mal):

       npm install playwright
       npx playwright install chromium

   BENUTZEN:

       node tafel-foto.mjs                     → tafel.png, 1600×1000
       node tafel-foto.mjs handy.png 430 930   → Handyformat

   Das Foto liegt danach neben dieser Datei.
   ============================================================ */

import {chromium} from 'playwright';
import {spawn} from 'node:child_process';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const HIER = path.dirname(fileURLToPath(import.meta.url));
const [, , ziel = 'tafel.png', breite = '1600', hoehe = '1000'] = process.argv;
const PORT = 8177;

const server = spawn(process.execPath, ['serve.mjs'], {
  cwd: HIER, env: {...process.env, PORT: String(PORT)}, stdio: 'ignore'
});
const aufraeumen = () => { try { server.kill(); } catch {} };
process.on('exit', aufraeumen);

await new Promise(r => setTimeout(r, 1200));

const browser = await chromium.launch();
const seite = await browser.newPage({viewport: {width: +breite, height: +hoehe}});

const fehler = [];
seite.on('console', m => { if (m.type() === 'error') fehler.push(m.text().slice(0, 160)); });
seite.on('pageerror', e => fehler.push('Skriptfehler: ' + String(e).slice(0, 160)));

await seite.goto(`http://localhost:${PORT}/`, {waitUntil: 'load'});
await seite.waitForTimeout(4500);

/* Begrüßungsschirm und Hinweisbalken wegräumen – sie verdecken sonst
   genau das, was man ansehen will. */
await seite.evaluate(() => {
  document.querySelectorAll('.morning-intro,#morningIntro,#dateiWarnung1553')
    .forEach(el => el.remove());
});
await seite.waitForTimeout(800);

await seite.screenshot({path: path.join(HIER, ziel)});
console.log(`\n  Bildschirmfoto gespeichert: ${ziel}  (${breite}×${hoehe})`);

if (fehler.length) {
  console.log('\n  Skriptfehler auf der Seite:');
  [...new Set(fehler)].slice(0, 6).forEach(f => console.log('   ·', f));
} else {
  console.log('  Keine Skriptfehler auf der Seite.\n');
}

await browser.close();
aufraeumen();
process.exit(0);
