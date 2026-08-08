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
window.confirm=()=>true;   // die Rueckfrage wird im Test bejaht

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
try{ window.eval(quelle+'\n;globalThis.__app={deleteStudent,undoDeleteStudent,studentDatenBilanz,renderPointRows,fitResponsiveStudentGrid,renderClassManagement,replaceStudentPhoto,renderTeamMembers,renderTeachingToolSettings,manageTeachingTool,activeTeachingTools,teamPhotoMarkup,state,photoStore};'); }
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

/* ============================================================
   KASKADENWÄCHTER

   Warum es ihn gibt: In 15.56 meldete der Prüfstand „Fundus-Kopf steht
   untereinander ✓" – im Browser stand er weiter nebeneinander. Zwei
   Fehler zugleich:

   1) Die Prüfung hatte einen Ausweichselektor (`|| $('.material-head-title')`)
      und maß dadurch womöglich ein anderes Element.
   2) jsdom rechnet die Spezifität nicht so wie ein Browser. Regeln mit
      VERDOPPELTER Klasse – `.material-head-title.material-head-title` –
      gewinnen im Browser gegen einfache Klassen, egal wer zuletzt lädt.
      Davon gibt es in fixes.css 166 Stück.

   Der Wächter rechnet deshalb selbst: Er sucht in ALLEN Gestaltungs-
   dateien die Regeln, die eine Eigenschaft für ein Ziel setzen, rechnet
   ihre Spezifität aus und sagt, wer wirklich gewinnt. Verlassen wird
   sich damit nicht mehr auf jsdom.
   ============================================================ */
function spezifitaet(selektor){
  const s=selektor.replace(/::[\w-]+/g,' ');
  const ids=(s.match(/#[\w-]+/g)||[]).length;
  const klassen=(s.match(/\.[\w-]+|\[[^\]]+\]|:(?!:)[\w-]+/g)||[]).length;
  const elemente=(s.match(/(^|[\s>+~])([a-z][\w-]*)/g)||[]).length;
  return ids*10000+klassen*100+elemente;
}
function stilFolgeRoh(){return [...html.matchAll(/href="([^"?]+\.css)/g)].map(m=>m[1])}
/* Kommentare RAUS, bevor irgendetwas geparst wird. In diesen Dateien
   stehen geschweifte Klammern und Doppelpunkte in den Erklärtexten –
   ohne diesen Schritt zählt der Wächter Prosa als Regel. */
const alleStile=stilFolgeRoh().map(datei=>({
  datei,
  text:fs.readFileSync(path.join(dir,datei),'utf8').replace(/\/\*[\s\S]*?\*\//g,' ')
}));

/* Ein Selektor darf über mehrere Zeilen gehen. Die erste Fassung dieses
   Wächters behielt nur die Zeile mit dem Suchwort und warf den
   `html body #teamDialog …`-Vorspann weg – dadurch rechnete er 300
   statt 20402 und erklärte die falsche Regel zum Sieger. */
function zerlege(selektorText){
  return selektorText.replace(/\s+/g,' ').trim().split(',').map(t=>t.trim()).filter(Boolean);
}
/* Nur zählen, wenn das Ziel der LETZTE Teil des Selektors ist – also das
   Element, das die Regel wirklich gestaltet. Sonst zählt
   `.material-library-panel .material-head-icon-button{width:34px}`
   fälschlich als Breite des Panels. */
/* NEXT 15.65 – Klassennamen als GANZES Wort vergleichen.

   Vorher wurde nur `includes()` benutzt. Damit galt
   `#settingsDialog .daily-messages .info-row-number` als Regel fuer
   `.info-row` – der gesuchte Name steckt ja als Teilwort darin. Der
   Waechter meldete daraufhin einen Sieger mit Spezifitaet 10200 fuer
   ein Element, das die Regel nie trifft, und ich haette meine eigene,
   richtige Regel fuer verloren gehalten. */
function enthaeltKlasse(teil,zielKlasse){
  if(!zielKlasse.startsWith('.'))return teil.includes(zielKlasse);
  const name=zielKlasse.slice(1);
  return new RegExp('\\.'+name.replace(/[-]/g,'\\-')+'(?![\\w-])').test(teil);
}
function trifftZiel(selektor,zielKlasse){
  const teile=selektor.split(/[\s>+~]+/).filter(Boolean);
  const letzter=teile[teile.length-1]||'';
  /* NEXT 15.62 – Regeln der Form `.eltern>*` waren fuer den Waechter
     unsichtbar: der letzte Teil ist `*` und enthaelt den Klassennamen
     natuerlich nicht. Genau so eine Regel liess die Knopfbeschriftung
     aus den Kinderkarten laufen (`.class-student-actions>*` ohne
     `min-width`). Bei `*` wird deshalb der Teil DAVOR geprueft. */
  if(letzter==='*'){
    const davor=teile[teile.length-2]||'';
    return enthaeltKlasse(davor,zielKlasse);
  }
  return enthaeltKlasse(letzter,zielKlasse);
}
function werGewinnt(zielKlasse,eigenschaft){
  const treffer=[];
  alleStile.forEach(({datei,text},rang)=>{
    let rest=text,pos=0;
    const bloecke=text.split('}');
    let vorspann='';
    bloecke.forEach(block=>{
      const teile=block.split('{');
      if(teile.length<2){return}
      const rohSel=teile[teile.length-2].split('{').pop();
      const dek=teile[teile.length-1];
      const re=new RegExp('(?:^|;|\\s)'+eigenschaft+'\\s*:\\s*([^;!}]+)(\\s*!important)?','i');
      const m=dek.match(re);
      if(!m)return;
      zerlege(rohSel).forEach(einzel=>{
        if(!trifftZiel(einzel,zielKlasse))return;
        treffer.push({datei,rang,sel:einzel,wert:m[1].trim(),
                      wichtig:!!m[2],spez:spezifitaet(einzel)});
      });
    });
  });
  if(!treffer.length)return null;
  treffer.sort((a,b)=> (a.wichtig?1:0)-(b.wichtig?1:0) || a.spez-b.spez || a.rang-b.rang);
  return treffer[treffer.length-1];
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
/* Nicht „ist die letzte Datei" pruefen – das bricht bei jeder neuen
   Datei. Gemeint ist die eigentliche Bedingung: sie muss NACH den
   Dateien stehen, deren Regeln sie ueberschreibt. Gleiche Spezifitaet
   plus !important entscheidet allein die Reihenfolge. */
const stilFolge=[...html.matchAll(/href="([^"?]+\.css)/g)].map(m=>m[1]);
const nachRang=(datei,vorlaeufer)=>{
  const i=stilFolge.indexOf(datei);
  return i>-1&&vorlaeufer.every(v=>stilFolge.indexOf(v)>-1&&stilFolge.indexOf(v)<i);
};
pruefe('waldfrisch liegt hinter fixes und waldbuehne',
  nachRang('waldfrisch-15-54.css',['fixes.css','override.css','waldbuehne-15-45.css']),
  stilFolge.slice(-3).join(' → '));
pruefe('punkteliste liegt hinter fixes',
  nachRang('punkteliste-15-55.css',['fixes.css','override.css']),
  stilFolge.slice(-3).join(' → '));

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

console.log('\n=== Punkte & Beobachtungen: eine Zeile pro Kind (15.55) ===');
const punkteListe=$('#teacherStudentList');
if(punkteListe&&app.renderPointRows){
  app.renderPointRows(punkteListe);
  const zeilen=$$('#teacherStudentList .compact-rating-row');
  pruefe('eine Zeile je Kind',zeilen.length>0,`${zeilen.length} Zeilen`);

  const avatar=zeilen[0]?.querySelector('.mini-avatar');
  const a=stil(avatar);
  pruefe('Foto ist auf 28 Pixel geschrumpft',a&&a.width==='28px',a?a.width:'fehlt');
  pruefe('Foto ist rund',a&&a.borderRadius==='50%',a?a.borderRadius:'-');

  /* Foto, Name UND Knoepfe muessen nebeneinander stehen. Sobald daraus
     zwei Zeilen werden, waechst die Karte wieder in die Hoehe – genau
     das war die Beschwerde. */
  const z=stil(zeilen[0]);
  pruefe('Foto/Name links, Knoepfe rechts – eine Reihe',
    /1fr\)? auto$/.test((z.gridTemplateColumns||'').trim()),z.gridTemplateColumns);

  const knoepfe=zeilen[0].querySelectorAll('.student-direct-actions button');
  pruefe('alle sechs Aktionen vorhanden',knoepfe.length===6,`${knoepfe.length}`);
  const beschriftungen=[...knoepfe].map(b=>b.querySelector('small')?.textContent||'');
  pruefe('Knoepfe sind ausgeschrieben',
    beschriftungen.join('/')==='Grün/Gelb/Rot/Stern/Verbot/Mehr',beschriftungen.join('/'));
  const kl=stil(zeilen[0].querySelector('.student-direct-actions small'));
  pruefe('Knopftext ist nicht mehr 6,5 Pixel klein',parseFloat(kl.fontSize)>=8,kl.fontSize);
  pruefe('Knopftext wird nicht mehr abgeschnitten',kl.textOverflow!=='ellipsis',kl.textOverflow);
  const nk=stil(zeilen[0].querySelector('.student-point-name small'));
  pruefe('Punktestand ist lesbar gross',parseFloat(nk.fontSize)>=9,nk.fontSize);

  /* Die Kartenhoehe kommt aus fitResponsiveStudentGrid. jsdom rechnet
     kein Layout, deshalb wird die Breite hier gestellt – geprueft wird
     die Rechnung, nicht der Browser. */
  punkteListe.getBoundingClientRect=()=>({width:1500,height:620,top:0,left:0,right:1500,bottom:620});
  app.fitResponsiveStudentGrid(punkteListe);
  await new Promise(r=>setTimeout(r,60));
  const hoehe=punkteListe.style.getPropertyValue('--student-card-height');
  const spalten=Number(punkteListe.dataset.gridColumns||0);
  pruefe('Karte ist flach statt aufgeblaeht',hoehe==='58px',hoehe||'nicht gesetzt');
  pruefe('mindestens drei Spalten auf dem Laptop',spalten>=3,`${spalten} Spalten`);
  /* 620 Pixel Hoehe, 58er Zeilen: frueher passten bei 155er Karten
     4 Reihen = 12 Kinder, jetzt sind es 10 Reihen = 30. */
  const sichtbareKinder=Math.floor(620/(58+8))*spalten;
  pruefe('mehr Kinder ohne Scrollen als vorher (12)',sichtbareKinder>=24,`${sichtbareKinder} Kinder`);
}

console.log('\n=== Fundus-Fenster: wer gewinnt wirklich? (15.57) ===');
const erwarte=(ziel,eigenschaft,datei,wert)=>{
  const sieger=werGewinnt(ziel,eigenschaft);
  const ok=sieger&&sieger.datei===datei&&(!wert||sieger.wert.startsWith(wert));
  pruefe(`${ziel} · ${eigenschaft}`,ok,
    sieger?`${sieger.datei} setzt „${sieger.wert}" (Spezifität ${sieger.spez})`:'niemand');
};
/* Genau die Regel, die 15.56 verloren hat. */
erwarte('.material-head-title','display','fundus-fenster-15-57.css','block');
erwarte('.material-head','display','fundus-fenster-15-57.css','block');
erwarte('.material-head','min-height','fundus-fenster-15-57.css','0');
erwarte('.material-library-panel','width','fundus-fenster-15-57.css','100%');
erwarte('.material-workspace','height','fundus-fenster-15-57.css','auto');
erwarte('.material-item-list','overflow','fundus-fenster-15-57.css','visible');
erwarte('.material-drawer-tabs','height','fundus-fenster-15-57.css','auto');

/* Und der Gegenbeweis: die alte Zwei-Spalten-Regel darf nicht mehr gewinnen. */
const kopfSieger=werGewinnt('.material-head-title','grid-template-columns');
pruefe('die alte Zwei-Spalten-Regel gewinnt nicht mehr',
  !kopfSieger||kopfSieger.datei==='fundus-fenster-15-57.css',
  kopfSieger?`${kopfSieger.datei}: ${kopfSieger.wert}`:'keine');

/* Keine Winzschrift mehr in den neuen Dateien. */
['fenster-15-56.css','fundus-fenster-15-57.css'].forEach(datei=>{
  const t=fs.readFileSync(path.join(dir,datei),'utf8');
  const winzig=[...t.matchAll(/font-size:([0-9.]+)px/g)].map(m=>parseFloat(m[1])).filter(v=>v<10);
  pruefe(`${datei}: keine Schrift unter 10 Pixel`,winzig.length===0,winzig.join(', ')||'keine');
});

/* Handy: nichts schwebt mehr uebereinander. */
const t57=fs.readFileSync(path.join(dir,'fundus-fenster-15-57.css'),'utf8');
const handy57=t57.slice(t57.indexOf('@media (max-width:760px)'));
pruefe('Handy-Kopf ist eine normale Zeile',/position:static!important/.test(handy57));
pruefe('Handy haelt Abstand zur iPhone-Statusleiste',/safe-area-inset-top/.test(handy57));
pruefe('fundus-fenster liegt hinter fundus-15-33 und fixes',
  nachRang('fundus-fenster-15-57.css',['fixes.css','fundus-15-33.css','override.css']),
  stilFolge.slice(-2).join(' → '));

console.log('\n=== Ein Kind entfernen und zurueckholen (15.58) ===');
{
  const st=app.state;
  const opfer=st.students[1];
  const id=opfer?.id;
  pruefe('Testkind vorhanden',!!id,id||'keins');

  /* An JEDER Stelle etwas hinterlegen. Genau darum geht es: ein Kind
     steht an zehn Stellen im Zustand, nicht nur in der Liste. */
  st.points['2026-08-08:'+id]={green:2,yellow:1,red:0,direct:0};
  st.pointHistory=[{id:'p1',studentId:id,type:'green',createdAt:'2026-08-08T09:00:00Z'}];
  st.teamIncidents=[{id:'i1',studentId:id,type:'note',note:'Test'}];
  st.remoteIncidentsLite=[{id:'r1',studentId:id}];
  st.publishedGreen=[...(st.publishedGreen||[]),id];
  st.leafAwards={['2026-08-08:'+id]:true};
  st.leafCount=245;
  st.votes={'2026-08-08:Mensa:kind1':[id,'kind3']};
  st.weeklyServices={week:'x',assignments:{Mensa:[id,'kind3']}};
  const platzVorher=Number(st.reservedStudentPlaces)||0;
  const anzahlVorher=st.students.length;

  const bilanz=app.studentDatenBilanz(id);
  pruefe('Bilanz zaehlt die Daten des Kindes',
    bilanz.punkte===1&&bilanz.verlauf===1&&bilanz.notizen===1,JSON.stringify(bilanz));

  const knopf=$(`[data-student-delete="${id}"]`);
  pruefe('Entfernen-Knopf ist auf der Karte',!!knopf);
  pruefe('Knopf erklaert sich',!!knopf?.getAttribute('title'));

  await app.deleteStudent(id);

  pruefe('Kind ist aus der Liste',!st.students.some(x=>x.id===id),`${st.students.length} statt ${anzahlVorher}`);
  pruefe('Punkte sind weg',!Object.keys(st.points).some(k=>k.endsWith(':'+id)));
  pruefe('Verlauf ist weg',!st.pointHistory.some(e=>e.studentId===id));
  pruefe('Notizen sind weg',!st.teamIncidents.some(e=>e.studentId===id));
  pruefe('uebertragene Vorfaelle sind weg',!st.remoteIncidentsLite.some(e=>e.studentId===id));
  pruefe('nicht mehr im Klassenbaum',!(st.publishedGreen||[]).includes(id));
  pruefe('kein Blatt-Vermerk mehr',!Object.keys(st.leafAwards||{}).some(k=>k.endsWith(':'+id)));
  pruefe('aus den Kinderstimmen entfernt',
    !Object.values(st.votes).some(l=>Array.isArray(l)&&l.includes(id)));
  pruefe('aus den Wochendiensten entfernt',
    !Object.values(st.weeklyServices.assignments).some(l=>Array.isArray(l)&&l.includes(id)));
  /* Die Blätter hat die ganze Klasse gesammelt – der Zaehler darf beim
     Weggang eines Kindes NICHT einbrechen. */
  pruefe('gesammelte Blaetter der Klasse bleiben',st.leafCount===245,String(st.leafCount));
  pruefe('ein Platz wird wieder frei',(Number(st.reservedStudentPlaces)||0)===platzVorher+1,
    `${st.reservedStudentPlaces} statt ${platzVorher}`);

  const meldung=$('#classManagementStatus');
  pruefe('Rueckgaengig-Knopf erscheint',!!meldung?.querySelector('.kind-zurueck-v1558'),
    (meldung?.textContent||'').trim().slice(0,50));

  await app.undoDeleteStudent();

  pruefe('Kind ist zurueck',st.students.some(x=>x.id===id));
  pruefe('an der alten Stelle',st.students[1]?.id===id,st.students[1]?.id);
  pruefe('Punkte sind zurueck',!!st.points['2026-08-08:'+id]);
  pruefe('Verlauf ist zurueck',st.pointHistory.some(e=>e.studentId===id));
  pruefe('Notizen sind zurueck',st.teamIncidents.some(e=>e.studentId===id));
  pruefe('wieder im Klassenbaum',(st.publishedGreen||[]).includes(id));
  pruefe('Dienste sind zurueck',st.weeklyServices.assignments.Mensa.includes(id));
  pruefe('Platzzahl wieder wie vorher',(Number(st.reservedStudentPlaces)||0)===platzVorher,
    String(st.reservedStudentPlaces));
  pruefe('zweimal Rueckgaengig tut nichts Schlimmes',
    (await app.undoDeleteStudent(),st.students.filter(x=>x.id===id).length===1),
    `${st.students.filter(x=>x.id===id).length}x vorhanden`);
}

console.log('\n=== Schubladen und kurze Balken (15.59) ===');
{
  const q59=fs.readFileSync(path.join(dir,'schubladen-15-59.css'),'utf8');
  const gruppen=$$('#settingsDialog .settings-group');
  /* Waren zwei, sind seit 15.60 drei. Die Pruefung nennt jetzt die
     Mindestzahl statt einer festen – sonst schlaegt sie bei jedem
     neuen Fach an, obwohl nichts kaputt ist. */
  pruefe('mindestens zwei Faecher in der Einstellungszentrale',gruppen.length>=2,`${gruppen.length}`);
  pruefe('privates Fach vorhanden',!!$('.settings-group-personal'));
  pruefe('gemeinsames Fach vorhanden',!!$('.settings-group-shared'));
  pruefe('jedes Fach hat Griffleiste und Boden',
    gruppen.every(g=>g.querySelector('.settings-group-head')&&g.querySelector('.settings-home-grid')));

  /* Die Farben muessen sich WIRKLICH unterscheiden – sonst ist die
     Kennzeichnung nur behauptet. */
  const privat=(q59.match(/--fach-privat-koerper:\s*([^;]+)/)||[])[1];
  const gemein=(q59.match(/--fach-gemein-koerper:\s*([^;]+)/)||[])[1];
  pruefe('privat und gemeinsam haben verschiedene Farben',
    privat&&gemein&&privat.trim()!==gemein.trim(),`${privat} vs ${gemein}`);
  pruefe('das private Fach zieht die private Farbe',
    /settings-group-personal[\s\S]{0,220}--fach-koerper:var\(--fach-privat-koerper\)/.test(q59));
  pruefe('das gemeinsame Fach zieht die gemeinsame Farbe',
    /settings-group-shared[\s\S]{0,220}--fach-koerper:var\(--fach-gemein-koerper\)/.test(q59));
  pruefe('der Griff faengt keine Klicks ab',/settings-group-head::after[\s\S]{0,600}pointer-events:none/.test(q59));

  /* Wer gewinnt wirklich – vom Wächter ausgerechnet, nicht von jsdom. */
  /* Nicht auf EINE Datei festnageln: 15.60 setzt dieselbe Eigenschaft
     fuer schmale Schirme erneut und gewinnt dort zu Recht. Gemeint ist:
     der Sieger muss aus den neuen Dateien kommen, nicht aus fixes.css. */
  const neueDateien=['schubladen-15-59.css','handy-mitte-15-60.css'];
  const erw=(ziel,eig)=>{
    const w=werGewinnt(ziel,eig);
    pruefe(`${ziel} · ${eig}`,w&&neueDateien.includes(w.datei),
      w?`${w.datei} (${w.spez})`:'niemand');
  };
  erw('.settings-home-grid','grid-template-columns');
  erw('.settings-group-head','background');
  erw('#teachingToolManageList','display');
  erw('.werkzeug-karte-v1551','padding');

  /* Aus Balken werden Karten: die Liste muss ein mitwachsendes Raster sein. */
  pruefe('Werkzeugliste ist ein mitwachsendes Raster',
    /#teachingToolManageList\{[\s\S]{0,240}repeat\(auto-fill,minmax\(310px/.test(q59));
  pruefe('Kachelraster waechst mit der Fensterbreite',
    /settings-home-grid[\s\S]{0,300}repeat\(auto-fill,minmax\(268px/.test(q59));

  const winzig=[...q59.matchAll(/font-size:([0-9.]+)px/g)].map(m=>parseFloat(m[1])).filter(v=>v<10);
  pruefe('keine Schrift unter 10 Pixel',winzig.length===0,winzig.join(', ')||'keine');
  pruefe('schubladen liegt hinter fixes und team-und-werkzeuge',
    nachRang('schubladen-15-59.css',['fixes.css','team-und-werkzeuge-15-51.css','dateien-und-einstellungen-15-47.css']),
    stilFolge.slice(-2).join(' → '));
}

console.log('\n=== Drei Faecher und Handy-Mitte (15.60) ===');
{
  const q60=fs.readFileSync(path.join(dir,'handy-mitte-15-60.css'),'utf8');
  const gruppen=$$('#settingsDialog .settings-group');
  pruefe('drei Faecher',gruppen.length===3,`${gruppen.length}`);
  const kinderfach=$('.settings-group-children');
  pruefe('eigenes Fach fuer die Kinder',!!kinderfach);
  const kinderKacheln=[...(kinderfach?.querySelectorAll('.settings-home-grid>button')||[])]
    .map(b=>b.querySelector('strong')?.textContent||'');
  pruefe('die richtigen zwei Kacheln liegen darin',
    kinderKacheln.join(' · ')==='Füchse · Kinderdaten aufs Handy',kinderKacheln.join(' · '));

  /* Sie duerfen nicht DOPPELT dastehen – einmal im Kinderfach und
     einmal weiter unten bei den allgemeinen Einstellungen. */
  const gemein=[...($('.settings-home-grid-shared')?.querySelectorAll('button')||[])]
    .map(b=>b.querySelector('strong')?.textContent||'');
  pruefe('Kinder stehen NICHT mehr im allgemeinen Fach',
    !gemein.includes('Füchse')&&!gemein.some(t=>t.startsWith('Kinderdaten')),gemein.join(' · '));
  pruefe('das allgemeine Fach hat noch seine sechs Kacheln',gemein.length===6,`${gemein.length}`);
  /* Drei Kacheln zeigen legitim auf denselben Bereich (settingsDaily)
     und unterscheiden sich erst durch `data-daily-card`. Die erste
     Fassung dieser Pruefung sah nur das Ziel und schlug deshalb an,
     obwohl gar nichts doppelt war. */
  pruefe('keine Kachel steht zweimal in der Zentrale',
    (()=>{const alle=$$('#settingsHome .settings-home-grid>button')
       .map(b=>[b.getAttribute('data-settings-target')||b.id,
                b.getAttribute('data-daily-card')||''].join('|'));
      return new Set(alle).size===alle.length})(),
    `${$$('#settingsHome .settings-home-grid>button').length} Kacheln`);

  /* Drei Faecher heisst drei unterscheidbare Farben. */
  const q59=fs.readFileSync(path.join(dir,'schubladen-15-59.css'),'utf8');
  const farben=[
    (q59.match(/--fach-privat-koerper:\s*([^;]+)/)||[])[1],
    (q59.match(/--fach-gemein-koerper:\s*([^;]+)/)||[])[1],
    (q60.match(/--fach-kinder-koerper:\s*([^;]+)/)||[])[1]
  ].map(x=>(x||'').trim());
  pruefe('drei verschiedene Fachfarben',new Set(farben).size===3,farben.join(' · '));
  pruefe('das Kinderfach zieht seine eigene Farbe',
    /settings-group-children[\s\S]{0,220}--fach-koerper:var\(--fach-kinder-koerper\)/.test(q60));

  /* Der Versatz auf dem iPhone: 100vw war die Ursache. */
  const breite=werGewinnt('.dialog-card','width');
  pruefe('Fensterbreite kommt aus der Handy-Regel',
    breite&&breite.datei==='handy-mitte-15-60.css',
    breite?`${breite.datei} → ${breite.wert} (${breite.spez})`:'niemand');
  pruefe('die Breite ist nicht mehr 100vw',breite&&!/100vw/.test(breite.wert),breite?.wert);
  const rand=werGewinnt('.dialog-card','margin');
  pruefe('das Fenster wird mittig gestellt',
    rand&&/auto/.test(rand.wert),rand?`${rand.datei} → ${rand.wert}`:'niemand');
  pruefe('waagerechtes Verrutschen ist ausgeschlossen',/overflow-x:hidden/.test(q60));
  pruefe('Sicherheitsabstaende links UND rechts',
    /safe-area-inset-left/.test(q60)&&/safe-area-inset-right/.test(q60));

  const winzig=[...q60.matchAll(/font-size:([0-9.]+)px/g)].map(m=>parseFloat(m[1])).filter(v=>v<10);
  pruefe('keine Schrift unter 10 Pixel',winzig.length===0,winzig.join(', ')||'keine');

  /* ------------------------------------------------------------
     NEXT 15.61 – die Lehre aus dem gestapelten Handy-Kopf

     Die Knöpfe standen untereinander, weil in override.css eine
     einzige Zeile stand:

         .team-workspace-nav{ flex-direction:column }

     Spezifität 100, ohne `!important` – und sie hat trotzdem gewonnen,
     weil ich `flex-direction` schlicht NIE gesetzt habe. Ich hatte
     `display`, `flex-wrap` und `align-items` bestimmt und mich darauf
     verlassen, dass damit das Layout mir gehört. Tat es nicht.

     Eine Regel muss nicht stark sein, um zu gewinnen. Sie muss nur die
     einzige sein, die etwas zu der Eigenschaft sagt.

     Deshalb wird ein Bauteil ab jetzt VOLLSTÄNDIG geprüft: für jede
     Eigenschaft, die sein Layout bestimmt, muss der Sieger aus den
     neuen Dateien kommen – nicht nur für die, an die ich gedacht habe.
     ------------------------------------------------------------ */
  const altlasten=['override.css','fixes.css','styles.css'];
  const layoutEigenschaften=['display','flex-direction','flex-wrap','justify-content',
                             'align-items','position','width','height'];
  const luecken=[];
  layoutEigenschaften.forEach(eig=>{
    const w=werGewinnt('.team-workspace-nav',eig);
    if(w&&altlasten.includes(w.datei))luecken.push(`${eig}←${w.datei}:${w.wert}`);
  });
  pruefe('Handy-Kopf: keine Layout-Eigenschaft haengt noch an einer Altdatei',
    luecken.length===0,luecken.join('  ')||'alle in neuer Hand');
}

console.log('\n=== Knopfbeschriftung auf der Kinderkarte (15.62) ===');
{
  const q62=fs.readFileSync(path.join(dir,'kinderkarte-15-62.css'),'utf8');
  if(app.renderClassManagement)app.renderClassManagement();
  const karte=$('#classStudentGrid .class-student-card');
  const knoepfe=[...(karte?.querySelectorAll('.class-student-actions>*')||[])];
  pruefe('drei Bedienelemente je Karte',knoepfe.length===3,`${knoepfe.length}`);

  /* Der eigentliche Fehler: ohne min-width:0 schrumpft ein Rasterfeld
     nie unter seinen Text – es waechst stattdessen ueber seine Spalte. */
  const mw=werGewinnt('.class-student-actions','min-width');
  pruefe('Knoepfe duerfen schmaler werden als ihr Text',
    mw&&mw.datei==='kinderkarte-15-62.css'&&/^0/.test(mw.wert),
    mw?`${mw.datei} → ${mw.wert} (${mw.spez})`:'niemand');
  pruefe('Text wird gekuerzt statt uebergelaufen',
    /text-overflow:ellipsis/.test(q62)&&/white-space:nowrap/.test(q62));
  pruefe('Knopfreihe bricht selbst um, ohne Bildschirmabfrage',
    /repeat\(auto-fit,minmax\(92px/.test(q62));

  /* Kuerzere Beschriftung – der volle Wortlaut muss aber erhalten
     bleiben, sonst weiss niemand mehr, was der Knopf tut. */
  const quelleApp=fs.readFileSync(path.join(dir,'app.js'),'utf8');
  pruefe('Fotoknopf heisst nur noch „Foto"',/>📷 Foto</.test(quelleApp));
  pruefe('der volle Wortlaut bleibt als Sprechblase',
    /title="Foto für \$\{escapeHtml\(student\.name\)\} austauschen"/.test(quelleApp));
  const fotofeld=karte?.querySelector('.photo-upload-button');
  pruefe('Fotofeld hat eine Erklaerung',!!fotofeld?.getAttribute('title'),
    fotofeld?.getAttribute('title')||'fehlt');
  const pause=karte?.querySelector('[data-student-toggle]');
  pruefe('Pausieren-Knopf hat eine Erklaerung',!!pause?.getAttribute('title'));
  const weg=karte?.querySelector('[data-student-delete]');
  pruefe('Entfernen-Knopf hat eine Erklaerung',!!weg?.getAttribute('title'));

  /* Die Meldezeile darf NICHT gekuerzt werden – sie traegt ganze Saetze. */
  pruefe('Meldezeile bleibt mehrzeilig',/foto-meldung-v1553[\s\S]{0,200}white-space:normal/.test(q62));
}

console.log('\n=== Kopfleiste: eine Reihe, einheitlich (15.64) ===');
{
  const q63=fs.readFileSync(path.join(dir,'kopfleiste-15-64.css'),'utf8');
  const nav=$('#teamWorkspace .team-workspace-nav');
  pruefe('Kopfleiste vorhanden',!!nav);

  /* Alles in EINER Reihe, und das Zahnrad am rechten Rand. */
  const richtung=werGewinnt('.team-workspace-nav','flex-direction');
  pruefe('die Leiste laeuft in einer Reihe',
    richtung&&richtung.wert==='row'&&richtung.datei==='kopfleiste-15-64.css',
    richtung?`${richtung.datei} → ${richtung.wert}`:'niemand');
  const umbruch=werGewinnt('.team-workspace-nav','flex-wrap');
  pruefe('kein Umbruch in eine zweite Zeile',umbruch&&umbruch.wert==='nowrap',umbruch?.wert);
  const anker=werGewinnt('#openPersonalSettingsButton','margin-left');
  pruefe('das Zahnrad hat einen festen Anker rechts',
    anker&&anker.wert==='auto'&&anker.datei==='kopfleiste-15-64.css',
    anker?`${anker.datei} → ${anker.wert}`:'niemand');
  pruefe('die Reihenfolge ist festgelegt, nicht dem Zufall ueberlassen',
    /#backToBoardButton\{order:1/.test(q63.replace(/\s+/g,''))||/order:1!important/.test(q63));

  /* Der Pfeil war gruen auf gruen. Jetzt weiss auf orange. */
  const zurueckGrund=werGewinnt('#backToBoardButton','background');
  pruefe('Zurueck-Knopf kommt aus der neuen Datei',
    zurueckGrund&&zurueckGrund.datei==='kopfleiste-15-64.css',
    zurueckGrund?`${zurueckGrund.datei} (${zurueckGrund.spez})`:'niemand');
  pruefe('Zurueck ist orange, nicht gruen',
    /#backToBoardButton[\s\S]{0,900}--navi-orange/.test(q63));
  /* 15.64 – nicht nur der Knopf, auch die Woerter darin. Genau das
     fehlte in 15.63: „Meine" stand dunkelgruen auf gruenem Reiter. */
  pruefe('die Schrift IM Knopf ist mitgefaerbt',
    /#backToBoardButton \*\{[\s\S]{0,90}color:#fff/.test(q63));
  pruefe('auch der aktive Reiter faerbt seine Woerter',
    /team-page-tabs button\.active \*\{[\s\S]{0,60}color:#fff/.test(q63));

  /* 15.64 – Reiter sind Schalter, keine Balken. `flex:1 1 auto` liess
     sie auf dem Laptop 600 Pixel breit werden; jetzt nehmen sie nur die
     Breite ihrer Woerter. */
/* Der Waechter nennt den letzten Sieger – und das ist hier die
     HANDY-Regel (`flex:1 1 auto`), die zu Recht spaeter steht. Gemeint
     ist aber der Laptop. Deshalb wird der Teil VOR der ersten
     Breitenabfrage geprueft. Die erste Fassung dieser Pruefung sah den
     Unterschied nicht und schlug an, obwohl beide Werte richtig sind. */
  const laptopTeil=q63.slice(0,q63.indexOf('@media'));
  pruefe('am Laptop dehnt sich die Reitergruppe NICHT',
    /team-page-tabs[\s\S]{0,260}flex:0 0 auto/.test(laptopTeil));
  const handyTeil=q63.slice(q63.indexOf('@media'));
  pruefe('auf dem Handy fuellt sie die Zeile',
    /team-page-tabs[\s\S]{0,200}flex:1 1 auto/.test(handyTeil));
  const reiter=$$('#teamWorkspace .team-page-tabs button');
  pruefe('es sind wirklich zwei Reiter',reiter.length===2,`${reiter.length}`);
  pruefe('der aktive Reiter hebt sich ab',
    /team-page-tabs button\.active[\s\S]{0,260}color:#fff/.test(q63));

  /* Handy: kuerzere Beschriftung, aber der Sinn bleibt im Quelltext. */
  pruefe('auf dem Handy verkuerzen sich die Reiter',
    /tab-lang-v1563\{[\s\S]{0,80}display:none/.test(q63));
  /* Der Abstand zwischen Symbol und Wort kommt aus dem Layout (`gap`),
     nicht aus einem Leerzeichen im Text – die erste Fassung dieser
     Pruefung verglich stur Zeichen fuer Zeichen und schlug deshalb an,
     obwohl alles stimmte. Geprueft wird jetzt, was zaehlt: dass das
     lange Wort ueberhaupt noch dasteht und nur per CSS verborgen wird. */
  const langeWorte=reiter.map(b=>b.querySelector('.tab-lang-v1563')?.textContent.trim());
  pruefe('der lange Text steht weiter im Quelltext',
    langeWorte.join('|')==='Meine|Alle',langeWorte.join(' | '));
  pruefe('die Reiter sagen weiterhin, worum es geht',
    reiter.every(b=>/Übersicht|Füchse/.test(b.textContent)),
    reiter.map(b=>b.textContent.trim()).join(' | '));

  /* Das Personensymbol: einer statt zwei, und groesser. */
  const symbol=$('#changeTeamPersonButton .person-symbol-v1563');
  pruefe('Personensymbol ist eine einzelne Person',symbol?.textContent==='👤',symbol?.textContent);
  pruefe('Personenknopf erklaert sich',
    !!$('#changeTeamPersonButton')?.getAttribute('title'));

  /* 15.64 – EINHEITLICH heisst: dieselbe Flaeche wie die Faecher, und
     Orange genau einmal. Eine eigene Farbwelt fuer die Leiste war der
     Fehler von 15.63. */
  pruefe('die Leiste benutzt hellgruene Flaeche wie die Karten',
    /--navi-flaeche:linear-gradient\(180deg,#f4faee/.test(q63));
  pruefe('Person und Zahnrad sind weiss wie alle anderen Knoepfe',
    (q63.match(/background:#fff!important/g)||[]).length>=2);
  const orangeStellen=(q63.match(/--navi-orange\)/g)||[]).length;
  pruefe('Orange bleibt dem Zurueck-Knopf vorbehalten',orangeStellen<=2,
    `${orangeStellen} Verwendungen`);
  pruefe('alle Bedienelemente haben dieselbe Hoehe',
    /height:38px!important;[\s\S]{0,40}min-height:38px/.test(q63));

  const winzig=[...q63.matchAll(/font-size:([0-9.]+)px/g)].map(m=>parseFloat(m[1])).filter(v=>v<10);
  pruefe('keine Schrift unter 10 Pixel',winzig.length===0,winzig.join(', ')||'keine');
}

console.log('\n=== Auf der Tafel liest man wieder (15.65) ===');
{
  const q65=fs.readFileSync(path.join(dir,'tafel-lesbar-15-65.css'),'utf8');

  /* Die Tagesinfo-Zeile: links Satz, rechts Betonung – nicht uebereinander. */
  const anzeige=werGewinnt('.info-row','display');
  pruefe('Tagesinfo-Zeile ist kein 36-Pixel-Raster mehr',
    anzeige&&anzeige.datei==='tafel-lesbar-15-65.css'&&anzeige.wert==='flex',
    anzeige?`${anzeige.datei} → ${anzeige.wert} (${anzeige.spez})`:'niemand');
  const spalten=werGewinnt('.info-row','grid-template-columns');
  pruefe('die 36-Pixel-Spalte ist abgeraeumt',
    spalten&&spalten.wert==='none',spalten?`${spalten.wert}`:'niemand');
  pruefe('der linke Satz darf umbrechen statt zu ueberlaufen',
    /info-row[\s\S]{0,400}overflow-wrap:anywhere/.test(q65));
  pruefe('die Betonung rutscht notfalls in die naechste Zeile',
    /flex-wrap:wrap/.test(q65));

  /* Das schwebende Wachstumsschild lag auf der Baumkrone. */
  const geist=werGewinnt('.tree-growth-badge-v1184','display');
  pruefe('das schwebende Wachstumsschild ist weg',
    geist&&geist.wert==='none'&&geist.datei==='tafel-lesbar-15-65.css',
    geist?`${geist.datei} → ${geist.wert}`:'niemand');

  /* … und seine Aussage steht jetzt IM Waldhelden-Schild. */
  const quelleApp=fs.readFileSync(path.join(dir,'app.js'),'utf8');
  pruefe('die Wachstumsaussage steht jetzt im Schild',
    /noch \$\{growthRemaining\} Blätter bis/.test(quelleApp));
  pruefe('bei hoechster Stufe steht dort etwas Sinnvolles',
    /höchste Stufe erreicht/.test(quelleApp));
  pruefe('das Schild schneidet seinen Text nicht mehr ab',
    /wall-title-v22[\s\S]{0,400}white-space:normal/.test(q65));

  /* Und die Grundregel fuer eine Tafel, die aus fuenf Metern gelesen wird. */
  const winzig=[...q65.matchAll(/font-size:([0-9.]+)px/g)].map(m=>parseFloat(m[1])).filter(v=>v<10);
  pruefe('keine Schrift unter 10 Pixel',winzig.length===0,winzig.join(', ')||'keine');
  pruefe('die Tagesinfos stehen auf mindestens 12 Pixel',
    /widget\[data-id="info"\] \.info-row\{[\s\S]{0,60}font-size:12px/.test(q65));
}

console.log(`\n=== Ergebnis: ${fehlgeschlagen?fehlgeschlagen+' Fehler':'alles bestanden'} ===`);
process.exit(fehlgeschlagen?1:0);
