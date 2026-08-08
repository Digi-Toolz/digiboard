import fs from 'fs';
import path from 'path';
import {JSDOM} from '/tmp/node_modules/jsdom/lib/api.js';

const dir=process.argv[2];
const html=fs.readFileSync(path.join(dir,'index.html'),'utf8');

const dom=new JSDOM(html,{url:'https://digiboard.test/',pretendToBeVisual:true,runScripts:'outside-only'});
const {window}=dom;

// ---- Umgebung, die jsdom nicht mitbringt ----
window.matchMedia=q=>({matches:false,media:q,addEventListener(){},removeEventListener(){},addListener(){},removeListener(){}});
window.ResizeObserver=class{observe(){}unobserve(){}disconnect(){}};
window.HTMLCanvasElement.prototype.getContext=()=>null;
window.HTMLCanvasElement.prototype.toBlob=function(cb){cb(null)};
window.HTMLCanvasElement.prototype.toDataURL=()=>'';
window.URL.createObjectURL=()=>'blob:test-'+Math.random().toString(36).slice(2);
window.URL.revokeObjectURL=()=>{};
window.scrollTo=()=>{};
Object.defineProperty(window.navigator,'userAgent',{value:'jsdom-test',configurable:true});
window.speechSynthesis={getVoices:()=>[],speak(){},cancel(){}};
window.HTMLDialogElement.prototype.showModal=function(){this.setAttribute('open','')};
window.HTMLDialogElement.prototype.close=function(){this.removeAttribute('open')};

// CSS einspeisen, damit getComputedStyle etwas zu rechnen hat
const cssProbleme=[];
const cssDateien=[...html.matchAll(/href="([^"?]+\.css)/g)].map(m=>m[1]);
for(const datei of cssDateien){
  const stil=window.document.createElement('style');
  stil.textContent=fs.readFileSync(path.join(dir,datei),'utf8');
  window.document.head.append(stil);
  if(!stil.sheet||!stil.sheet.cssRules.length) cssProbleme.push(datei);
}

// Skripte in der richtigen Reihenfolge ausführen
const fehler=[];
window.addEventListener('error',e=>fehler.push(String(e.error||e.message)));
// Alle drei Dateien in EINEM eval: nur so teilen sie sich den Gueltigkeits-
// bereich, genau wie <script>-Tags im Browser.
const quelle=['photo-store.js','app.js','package-export.js']
  .map(datei=>fs.readFileSync(path.join(dir,datei),'utf8')).join('\n;\n');
try{ window.eval(quelle+'\n;globalThis.__app={renderClassManagement,replaceStudentPhoto,renderTeamMembers,renderTeachingToolSettings,manageTeachingTool,activeTeachingTools,teamPhotoMarkup,state,photoStore};'); }
catch(e){ fehler.push('Skripte: '+e.message); }
const app=window.__app||{};
window.document.dispatchEvent(new window.Event('DOMContentLoaded',{bubbles:true}));
await new Promise(r=>setTimeout(r,300));

const $=s=>window.document.querySelector(s);
const $$=s=>[...window.document.querySelectorAll(s)];
const stil=el=>el?window.getComputedStyle(el):null;
let fehlgeschlagen=0;
function pruefe(name,bedingung,zusatz=''){
  const ok=!!bedingung;
  if(!ok)fehlgeschlagen++;
  console.log(`  ${ok?'OK    ':'FEHLER'}  ${name}${zusatz?'   ['+zusatz+']':''}`);
}

if(cssProbleme.length)console.log('Hinweis – von jsdom nicht lesbare CSS-Dateien (Browser lesen sie):',cssProbleme.join(', '));
console.log('=== Ladefehler ===');
if(fehler.length){fehler.slice(0,6).forEach(f=>console.log('  !',f));fehlgeschlagen+=fehler.length}
else console.log('  keine');

console.log('\n=== Klassenteam-Karten ===');
if(app.renderTeamMembers)app.renderTeamMembers();
const karten=$$('#teamMemberGrid .team-member-card-v1551');
pruefe('Karten werden erzeugt',karten.length>=5,`${karten.length} Karten`);
pruefe('jede Karte hat einen Auswahlknopf',karten.every(k=>k.querySelector('.team-member-choose-v1551')));
const mitFoto=karten.filter(k=>k.querySelector('.team-member-photo-pick-v1551'));
pruefe('Fotofeld auf den Personenkarten',mitFoto.length===karten.length-1,`${mitFoto.length} von ${karten.length-1}`);
pruefe('Fotofeld ist ein echtes Dateifeld',mitFoto.every(k=>k.querySelector('input[type="file"]')));
pruefe('Dateifeld ist nicht versteckt',mitFoto.every(k=>{const s=stil(k.querySelector('input[type="file"]'));return s.display!=='none'&&s.visibility!=='hidden'}));
pruefe('kein Dateifeld innerhalb eines Knopfes',!$$('#teamMemberGrid button input[type="file"]').length);
pruefe('Initialen sichtbar, solange kein Foto da ist',karten.every(k=>k.querySelector('.team-member-initialen-v1551')||k.querySelector('img')));

console.log('\n=== Meine Auswahl (Werkzeuge) ===');
if(app.renderTeachingToolSettings)app.renderTeachingToolSettings();
const wk=$$('#teachingToolManageList .werkzeug-karte-v1551');
pruefe('Werkzeugkarten werden erzeugt',wk.length>0,`${wk.length} Karten`);
if(wk.length){
  const erste=wk[0];
  const woKnoepfe=[...erste.querySelectorAll('.werkzeug-wo-v1551 button')].map(b=>b.textContent.trim());
  pruefe('drei benannte Positionsschalter',woKnoepfe.join('/')==='Oben/Favorit/Beides',woKnoepfe.join('/'));
  const anzahlAn=erste.querySelectorAll('.werkzeug-wo-v1551 button.ist-an').length;
  pruefe('genau ein Schalter ist aktiv',anzahlAn===1,`${anzahlAn} aktiv`);
  const aktionen=[...erste.querySelectorAll('.werkzeug-aktionen-v1551 button')].map(b=>b.textContent.trim());
  pruefe('Aktionen sind beschriftet',aktionen.every(t=>t.length>1||['↑','↓'].includes(t)),aktionen.join(' | '));
  pruefe('kein namenloser Symbolknopf mehr',!aktionen.some(t=>['↔','◉','×','☆','★'].includes(t)));
}

console.log('\n=== Positionsschalter wirklich schalten ===');
const werkzeuge=app.activeTeachingTools?app.activeTeachingTools():[];
if(werkzeuge.length){
  const id=werkzeuge[0].id;
  app.manageTeachingTool(id,'wo-favorit');
  const t1=app.activeTeachingTools().find(t=>t.id===id);
  pruefe('„Favorit" wird gesetzt',t1.placement==='favorite',t1.placement);
  pruefe('Startrolle wandert weg von einem reinen Favoriten',!t1.isDefault);
  app.manageTeachingTool(id,'wo-beides');
  pruefe('„Beides" wird gesetzt',app.activeTeachingTools().find(t=>t.id===id).placement==='both');
  app.manageTeachingTool(id,'wo-start');
  pruefe('„Oben" wird gesetzt',app.activeTeachingTools().find(t=>t.id===id).placement==='start');
  const nachher=app.activeTeachingTools();
  pruefe('genau ein Startwerkzeug insgesamt',nachher.filter(t=>t.isDefault).length===1,
    `${nachher.filter(t=>t.isDefault).length}`);
}

console.log('\n=== Doppelter Zurück-Knopf ===');
const innererZurueck=$('#personalSettingsBack');
pruefe('innerer Zurück-Knopf ist ausgeblendet',innererZurueck&&stil(innererZurueck).display==='none',
  innererZurueck?stil(innererZurueck).display:'nicht vorhanden');
pruefe('oben gibt es genau einen Zurück-Knopf',$$('#teamWorkspace .team-unified-nav-v1541 #backToBoardButton').length===1);

console.log('\n=== Ausgeblendete Bereiche bleiben ausgeblendet (Regression 15.48) ===');
const share=$('#settingsShare');
if(share){
  share.setAttribute('hidden','');
  pruefe('#settingsShare mit hidden ist unsichtbar',stil(share).display==='none',stil(share).display);
  share.removeAttribute('hidden');
  pruefe('#settingsShare ohne hidden ist sichtbar',stil(share).display!=='none',stil(share).display);
}

console.log('\n=== Dateifelder sind antippbar (15.47) ===');
['#classPackageFileInput','#digiBoardBackupFile'].forEach(sel=>{
  const el=$(sel);
  pruefe(`${sel} nicht per hidden versteckt`,el&&!el.hasAttribute('hidden'));
  if(el)pruefe(`${sel} liegt über dem Knopf`,stil(el).position==='absolute'&&stil(el).opacity==='0');
});

console.log('\n=== Kinderfotos: Feld und Meldung (15.53) ===');
if(app.renderClassManagement)app.renderClassManagement();
const kinderkarten=$$('#classStudentGrid .class-student-card');
pruefe('Kinderkarten werden erzeugt',kinderkarten.length>0,`${kinderkarten.length} Karten`);
const fotofelder=kinderkarten.map(k=>k.querySelector('input[type="file"][data-student-photo]'));
pruefe('jede Karte hat ein echtes Dateifeld',fotofelder.every(Boolean));
if(fotofelder[0]){
  const fs=stil(fotofelder[0]);
  pruefe('Dateifeld ist wirklich antippbar',fs.pointerEvents!=='none',fs.pointerEvents);
  pruefe('Dateifeld deckt den Knopf ab',fs.width==='100%'&&fs.height==='100%',`${fs.width} x ${fs.height}`);
  pruefe('kein iOS-Zoom beim Fokus',parseInt(fs.fontSize,10)>=16,fs.fontSize);
  pruefe('Dateifeld ist nicht display:none',fs.display!=='none'&&fs.visibility!=='hidden');
  const knopf=fotofelder[0].closest('label');
  pruefe('Knopf ist der Bezugspunkt des Feldes',knopf&&stil(knopf).position==='relative',knopf?stil(knopf).position:'-');
  pruefe('kein Dateifeld innerhalb eines Knopfes',!$$('#classStudentGrid button input[type="file"]').length);
}
pruefe('jede Karte hat eine eigene Meldezeile',
  kinderkarten.every(k=>k.querySelector('.foto-meldung-v1553')),
  `${kinderkarten.filter(k=>k.querySelector('.foto-meldung-v1553')).length} von ${kinderkarten.length}`);

// Die Meldung muss wirklich ankommen – nicht nur unten im Sammelabsatz.
const ersterSchueler=app.state?.students?.[0];
if(ersterSchueler){
  await window.__app.replaceStudentPhoto(ersterSchueler.id,null);
  const zeile=kinderkarten[0].querySelector('.foto-meldung-v1553');
  pruefe('Fehlschlag erzeugt eine sichtbare Meldung auf der Karte',
    zeile&&zeile.classList.contains('ist-sichtbar')&&zeile.textContent.trim().length>5,
    zeile?zeile.textContent.trim().slice(0,60):'keine Zeile');
  // HEIC in einem Nicht-Safari-Browser muss beim Namen genannt werden
  const heicDatei={name:'IMG_4711.HEIC',type:'image/heic',size:2400000};
  await window.__app.replaceStudentPhoto(ersterSchueler.id,heicDatei);
  const heicText=kinderkarten[0].querySelector('.foto-meldung-v1553')?.textContent||'';
  pruefe('HEIC wird erkannt und erklaert',/HEIC/.test(heicText)&&/Safari|JPEG/.test(heicText),
    heicText.slice(0,70));
}

console.log('\n=== Walddesign frisch (15.54) ===');
const weg=['.forest-squirrel','.forest-owl','.forest-deer','.forest-rabbit','.forest-bee',
           '.forest-lantern','.forest-birdhouse','.forest-mushroom','.forest-flower','.forest-grass'];
const nochDa=weg.filter(k=>{const el=$('.forest-ambient>'+k);return el&&stil(el).display!=='none'});
pruefe('Emoji-Aufkleber bleiben ausgeblendet',nochDa.length===0,nochDa.join(' ')||'alle weg');

/* Genau drei Elemente duerfen die Sammelregel `.forest-ambient>span
   {display:none}` durchbrechen – nicht mehr. */
const fuchs=$('.forest-ambient>.forest-fox-stage');
pruefe('der Fuchs ist zurueck',fuchs&&stil(fuchs).display!=='none',fuchs?stil(fuchs).display:'fehlt');
const falter=$$('.forest-ambient>.forest-butterfly').filter(b=>stil(b).display!=='none');
pruefe('genau zwei Schmetterlinge',falter.length===2,`${falter.length}`);
/* Gluehwuermchen sind Licht, keine Aufkleber – sie zaehlen nicht mit. */
const sichtbar=$$('.forest-ambient>span')
  .filter(s=>stil(s).display!=='none'&&!/firefly/.test(s.className));
pruefe('nicht mehr als drei Deko-Elemente',sichtbar.length<=3,
  sichtbar.map(s=>s.className.split(' ')[0]).join(', ')||'keine');

const geheim=$$('.forest-secret-v1523');
pruefe('Entdeckerpunkte sind noch da',geheim.length===3,`${geheim.length} Stück`);
if(geheim[0]){
  const g=stil(geheim[0]);
  pruefe('Entdeckerpunkt ist antippbar gross',parseInt(g.width,10)>=28,g.width);
  pruefe('Entdeckerpunkt ist ein Knopf',geheim[0].tagName==='BUTTON');
  pruefe('Entdeckerpunkt hat eine Beschriftung fuer Vorlesegeraete',
    !!geheim[0].getAttribute('aria-label'),geheim[0].getAttribute('aria-label')||'fehlt');
}

/* ACHTUNG, Grenze des Pruefstands: jsdom loest `var(--…)` NICHT auf und
   verwirft jede Deklaration, die eine Variable enthaelt. Ueber
   getComputedStyle sind solche Regeln deshalb nicht pruefbar – sie sahen
   hier faelschlich so aus, als greife weiter die alte Holzoptik.
   Fuer diese Faelle wird der Quelltext der Regel geprueft und zusaetzlich,
   dass die Datei wirklich zuletzt geladen wird. Nur dann gewinnt sie im
   Browser gegen fixes.css, das denselben Selektor mit !important belegt. */
const waldfrischQuelle=fs.readFileSync(path.join(dir,'waldfrisch-15-54.css'),'utf8');
const regelVon=selektor=>{
  const i=waldfrischQuelle.indexOf(selektor+'{');
  return i<0?'':waldfrischQuelle.slice(i,waldfrischQuelle.indexOf('}',i));
};
const letzteDatei=[...html.matchAll(/href="([^"?]+\.css)/g)].map(m=>m[1]).pop();
pruefe('waldfrisch wird als letzte Gestaltungsdatei geladen',
  letzteDatei==='waldfrisch-15-54.css',letzteDatei);

const dockRegel=regelVon('html body .app-shell .forest-tool-belt-v1521.dock');
pruefe('Werkzeugleiste wird ueberhaupt neu gesetzt',!!dockRegel,dockRegel?'Regel vorhanden':'FEHLT');
/* Gemeint ist NUR der aussen liegende Sockelschatten. Eine innere
   Lichtkante (`inset 0 1px 0 …`) ist genau das Gegenteil: sie macht die
   Flaeche zart, nicht klotzig. Die erste Fassung dieser Pruefung warf
   beides in einen Topf und schlug am eigenen Lichtsaum fehl. */
const aussenSchatten=(dockRegel.match(/box-shadow:[^;]*/)||[''])[0]
  .split(',').filter(t=>!/inset/.test(t));
pruefe('Werkzeugleiste ohne harte Sockelkante',
  !!dockRegel&&!aussenSchatten.some(t=>/\b0 \d+px 0\b/.test(t)),
  aussenSchatten.join(',').trim().slice(0,40)||'nur Lichtkante');
pruefe('Werkzeugleiste auf hellem Papier',/--frisch-papier/.test(dockRegel));
pruefe('kein Gold mehr in der Leiste',!/#ffd979|--gold/.test(dockRegel));

const knopfRegel=regelVon('html body .app-shell .forest-tool-belt-v1521.dock>button');
pruefe('Werkzeugknoepfe ohne Sockel und ohne Textschatten',
  /box-shadow:none/.test(knopfRegel)&&/text-shadow:none/.test(knopfRegel));

/* Die Aussehen-Regeln duerfen NICHT in einer Breitenabfrage stehen, sonst
   bleibt auf dem Handy die alte Holzoptik stehen. */
const vorErsterAbfrage=waldfrischQuelle.slice(0,waldfrischQuelle.indexOf('@media'));
pruefe('Leisten-Optik gilt auf allen Bildschirmbreiten',
  vorErsterAbfrage.includes('.forest-tool-belt-v1521.dock{'));
const schild=$('.wall-fixed .wall-title-v22');
/* jsdom schreibt „keinen Schatten" als rgba(0,0,0,0) statt als none. */
if(schild)pruefe('Waldhelden-Schild ohne Textschatten',
  /^(none|rgba\(0, 0, 0, 0\))?$/.test((stil(schild).textShadow||'').trim()),
  stil(schild).textShadow||'leer');

/* Ein Filter auf der ganzen Szene wuerde auch die Kinderfotos einfaerben –
   dieser Fehler steckte bis 15.39 drin und darf nicht wiederkommen. */
const schale=$('.app-shell');
pruefe('kein Farbfilter auf der ganzen Szene',(stil(schale).filter||'none')==='none',stil(schale).filter);

console.log(`\n=== Ergebnis: ${fehlgeschlagen?fehlgeschlagen+' Fehler':'alles bestanden'} ===`);
process.exit(fehlgeschlagen?1:0);
