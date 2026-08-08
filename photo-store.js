/* ============================================================
   DigiBoard Next – photo-store.js   (Stufe 1)

   Kinderfotos lagen bisher als Data-URL direkt im Zustandsobjekt und damit im
   localStorage. Das kostete 33 % Base64-Aufschlag und lief bei rund 70 Kindern
   gegen die 5-MB-Grenze des Browsers. Hier liegen sie stattdessen als Blob in
   einer IndexedDB-Datenbank: kein Base64-Aufschlag, Platz im Gigabyte-Bereich
   und auf iOS deutlich robuster gegen die automatische Speicherbereinigung.

   Wichtig fuer den restlichen Quelltext:
   studentPhotoMarkup() und die render*()-Funktionen bleiben SYNCHRON. Moeglich
   wird das durch einen Zwischenspeicher im Arbeitsspeicher: beim Start werden
   alle Fotos einmal gelesen und als Objekt-URL abgelegt. Die Anzeige greift
   danach nur noch auf diese Map zu.

   Im Zustandsobjekt steht nur noch ein Verweis: photo: 'idb:<kind-id>'.
   Alte Werte funktionieren unveraendert weiter:
     'portraits/class-2026/alice.png'  → Dateipfad, wie bisher
     'data:image/webp;base64,...'      → wird beim Start automatisch umgezogen
   ============================================================ */

const photoStore=(()=>{
  const DB_NAME='digiboard-photos';
  const DB_VERSION=1;
  const STORE='photos';
  const PREFIX='idb:';

  const cache=new Map();      // key -> Objekt-URL
  const laufendeLadevorgaenge=new Map(); // key -> genau ein gemeinsames Promise
  let db=null;
  let available=false;
  let lastExportReport=null;
  let lastImportReport=null;

  function open(){
    return new Promise(resolve=>{
      if(!('indexedDB' in window)) return resolve(null);
      let request;
      try{ request=indexedDB.open(DB_NAME,DB_VERSION); }catch{ return resolve(null); }
      request.onupgradeneeded=()=>{
        const database=request.result;
        if(!database.objectStoreNames.contains(STORE)) database.createObjectStore(STORE);
      };
      request.onsuccess=()=>resolve(request.result);
      request.onerror=()=>resolve(null);
      request.onblocked=()=>resolve(null);
    });
  }

  function tx(mode){
    if(!db) return null;
    try{ return db.transaction(STORE,mode).objectStore(STORE); }catch{ return null; }
  }

  function request(operation){
    return new Promise((resolve,reject)=>{
      if(!operation) return reject(new Error('IndexedDB nicht verfuegbar'));
      operation.onsuccess=()=>resolve(operation.result);
      operation.onerror=()=>reject(operation.error||new Error('IndexedDB-Fehler'));
    });
  }

  function remember(key,blob){
    const previous=cache.get(key);
    if(previous) URL.revokeObjectURL(previous);
    const url=URL.createObjectURL(blob);
    cache.set(key,url);
    return url;
  }

  /* --- oeffentliche Schnittstelle ------------------------------------- */

  function isReference(value){ return typeof value==='string' && value.startsWith(PREFIX); }
  function keyFor(studentId){ return PREFIX+studentId; }

  /* Aufloesung fuer die Anzeige – synchron, daher fuer innerHTML geeignet. */
  function resolve(value){
    if(!value) return '';
    if(!isReference(value)) return value;      // Dateipfad oder Data-URL
    return cache.get(value)||'';               // '' → Anzeige faellt auf Initialen zurueck
  }

  async function put(studentId,blob){
    /* Der ganze Ablauf steckt jetzt in ablegen(): Datenbank wenn moeglich,
       sonst ein klein gerechnetes Bild, das auch in den localStorage passt. */
    return await ablegen(studentId,blob);
  }

  async function remove(studentId){
    const key=keyFor(studentId);
    const previous=cache.get(key);
    if(previous) URL.revokeObjectURL(previous);
    cache.delete(key);
    if(!db) return;
    try{ await request(tx('readwrite')?.delete(key)); }catch{}
  }

  /* Alle vorhandenen Fotos einlesen und als Objekt-URL bereitstellen. */
  async function loadAll(){
    if(!db) return 0;
    try{
      const store=tx('readonly');
      const keys=await request(store.getAllKeys());
      const values=await request(tx('readonly').getAll());
      keys.forEach((key,index)=>{
        const blob=values[index];
        if(blob instanceof Blob) remember(key,blob);
      });
      return keys.length;
    }catch{ return 0; }
  }

  function dataUrlToBlob(dataUrl){
    try{
      const [head,body]=String(dataUrl).split(',');
      const type=(head.match(/data:([^;]+)/)||[,'image/png'])[1];
      const binary=atob(body);
      const bytes=new Uint8Array(binary.length);
      for(let i=0;i<binary.length;i++) bytes[i]=binary.charCodeAt(i);
      return new Blob([bytes],{type});
    }catch{ return null; }
  }

  async function blobToDataUrl(blob){
    return new Promise(resolve=>{
      const reader=new FileReader();
      reader.onload=()=>resolve(reader.result);
      reader.onerror=()=>resolve('');
      reader.readAsDataURL(blob);
    });
  }

  async function blobFor(key){
    /* Lesen ist auch dann erlaubt, wenn nur das Schreiben blockiert ist. */
    if(db){
      try{
        const stored=await request(tx('readonly')?.get(key));
        if(stored instanceof Blob)return stored;
      }catch{}
    }
    /* Wenn die Datenbank waehrend der Sitzung ausfaellt, kann das bereits im
       Arbeitsspeicher geladene Objekt-URL-Foto trotzdem noch ins Backup. */
    const cached=cache.get(key);
    if(cached){
      try{
        const response=await fetch(cached);
        if(response.ok)return await response.blob();
      }catch{}
    }
    return null;
  }

  /* NEXT 15.49 – Verkleinern.

     Ohne Datenbank muss das Foto in den localStorage, und der ist rund 5 MB
     gross. Ein Portrait mit 640 Pixeln belegt als Text etwa 80 KB; 22 Kinder
     sprengen damit die Grenze und NICHTS wird gespeichert. Ein Portrait mit
     180 Pixeln belegt etwa 10 KB – 22 Kinder passen bequem.

     Darum: liegt eine Datenbank vor, bleibt das Bild gross. Fehlt sie, wird
     es klein gerechnet, statt am Speicher zu scheitern. Ein kleines Foto ist
     immer besser als kein Foto. */
  const SPAR_KANTE=180;

  /* NEXT 15.53 – Mit Frist.

     Ohne Frist war das hier eine echte Falle: Feuert ein <img> weder `load`
     noch `error` – das kommt bei knappem Speicher und bei kaputten Dateien
     vor –, wartete dieses Versprechen FUER IMMER. Da absorbFromImport jedes
     Foto der Reihe nach durchlaeuft, blieb dann der ganze Backup-Import bei
     „Fotos werden uebernommen …" stehen, und danach wurde NICHTS gespeichert.
     Von aussen sah das aus, als tue die App nichts. */
  function bildAus(quelle,frist=12000){
    return new Promise(resolve=>{
      const bild=new Image();
      let fertig=false;
      const ende=wert=>{ if(fertig)return; fertig=true; clearTimeout(uhr);
                         bild.onload=null; bild.onerror=null; resolve(wert); };
      const uhr=setTimeout(()=>ende(null),frist);
      bild.onload=()=>ende(bild);
      bild.onerror=()=>ende(null);
      bild.decoding='sync';
      bild.src=quelle;
    });
  }

  async function verkleinereZuDataUrl(blob,kante=SPAR_KANTE){
    if(typeof document==='undefined'||!blob) return '';
    let quelle='';
    try{ quelle=URL.createObjectURL(blob); }catch{ return await blobToDataUrl(blob); }
    try{
      const bild=await bildAus(quelle);
      if(!bild||!bild.width) return await blobToDataUrl(blob);
      const flaeche=document.createElement('canvas');
      flaeche.width=kante; flaeche.height=kante;
      const stift=flaeche.getContext('2d');
      if(!stift) return await blobToDataUrl(blob);
      const faktor=Math.max(kante/bild.width,kante/bild.height);
      const breite=bild.width*faktor, hoehe=bild.height*faktor;
      stift.drawImage(bild,(kante-breite)/2,(kante-hoehe)/2,breite,hoehe);
      /* WebP ist am kleinsten. Kann der Browser es nicht, faellt er von
         selbst auf PNG zurueck – dann lieber JPEG erzwingen. */
      let klein=flaeche.toDataURL('image/webp',.82);
      if(!klein.startsWith('data:image/webp')) klein=flaeche.toDataURL('image/jpeg',.8);
      return klein||await blobToDataUrl(blob);
    }catch{
      return await blobToDataUrl(blob);
    }finally{
      try{ URL.revokeObjectURL(quelle); }catch{}
    }
  }

  /* Ein Foto ablegen – auf dem besten Weg, den dieses Geraet hergibt.
     Gibt den Wert zurueck, der in den Zustand geschrieben wird. */
  async function ablegen(studentId,blob){
    await ready;
    const key=keyFor(studentId);
    if(available){
      try{
        await request(tx('readwrite')?.put(blob,key));
        /* Die Adresse erst NACH dem erfolgreichen Schreiben austauschen.
           Sonst verweist die Anzeige bei einem spaeten Speicherfehler auf
           ein Foto, das nach dem Neuladen gar nicht in der Datenbank liegt. */
        remember(key,blob);
        return key;
      }catch{
        /* Eine Datenbank kann die Schreibprobe bestehen und spaeter wegen
           vollem Speicher doch ausfallen. Ab jetzt wird fuer neue Bilder die
           sichere, kleine Data-URL verwendet. Bereits geladene Bilder bleiben
           im Zwischenspeicher sichtbar und fuer Backups lesbar. */
        available=false;
      }
    }
    return await verkleinereZuDataUrl(blob);
  }

  /* NEXT 15.50 – Eine FRISCHE Objekt-URL direkt aus der Datenbank holen.

     Warum das noetig ist: resolve() ist synchron und liefert nur, was schon
     im Zwischenspeicher liegt. Wird eine Ansicht gezeichnet, bevor die
     Datenbank gelesen wurde – oder ist eine Objekt-URL nicht mehr gueltig –
     bleibt das Bild leer, obwohl das Foto vorhanden ist. Genau das war der
     Fall: die Pruefung meldete „22 von 22 anzeigbar", die Kacheln zeigten
     trotzdem Buchstaben. Diese Funktion holt das Bild notfalls nach. */
  async function frischeUrl(wert){
    if(!wert) return '';
    if(!isReference(wert)) return wert;      // Dateipfad oder Data-URL
    await ready;

    /* NEXT 15.52 – Eine in diesem Seitenaufruf erzeugte Objekt-URL bleibt
       gueltig, bis remember() sie beim wirklichen Ersetzen des Fotos aufhebt.
       Darum MUSS dieselbe Adresse wiederverwendet werden.

       Vorher holte jede sichtbare Kachel dasselbe Foto erneut. Zehn Kacheln
       erzeugten zehn Adressen; jede neue machte die vorherige sofort
       ungueltig. Nur die letzte Kachel gewann, alle anderen fielen auf
       Buchstaben zurueck – obwohl die Diagnose „22 von 22“ meldete. */
    const vorhanden=cache.get(wert);
    if(vorhanden) return vorhanden;

    /* Falls mehrere Ansichten im selben Moment nachfragen, liest genau ein
       Vorgang die Datenbank. Alle Kacheln bekommen anschliessend dieselbe URL. */
    if(laufendeLadevorgaenge.has(wert)) return laufendeLadevorgaenge.get(wert);
    const laden=(async()=>{
      const inzwischen=cache.get(wert);
      if(inzwischen) return inzwischen;
      const blob=await blobFor(wert);
      if(!blob) return '';
      return remember(wert,blob);
    })();
    laufendeLadevorgaenge.set(wert,laden);
    try{ return await laden; }
    finally{ laufendeLadevorgaenge.delete(wert); }
  }

  /* Auskunft ueber den Fotospeicher – fuer die Anzeige in den Einstellungen. */
  async function diagnose(students){
    await ready;
    const bilanz=photoReport(students);
    const platz=await usage();
    /* Nicht nur eine vorhandene Adresse zaehlen, sondern jedes Bild wirklich
       laden. So kann die Diagnose nie wieder „alles in Ordnung“ behaupten,
       waehrend die sichtbaren Kacheln das Bild nicht dekodieren koennen. */
    const pruefungen=await Promise.all((Array.isArray(students)?students:[]).map(async student=>{
      const wert=typeof student?.photo==='string'?student.photo:'';
      if(!wert)return false;
      try{
        const adresse=await frischeUrl(wert);
        if(!adresse)return false;
        return await new Promise(resolve=>{
          const bild=new Image();
          const ende=erfolg=>{clearTimeout(timer);bild.onload=null;bild.onerror=null;resolve(erfolg)};
          const timer=setTimeout(()=>ende(false),4000);
          bild.onload=()=>ende(true);
          bild.onerror=()=>ende(false);
          bild.src=adresse;
        });
      }catch{return false}
    }));
    const anzeigbar=pruefungen.filter(Boolean).length;
    return {
      datenbank:available?'verfügbar':'blockiert',
      imZwischenspeicher:cache.size,
      anzeigbar,
      ...bilanz,
      platz
    };
  }

  /* Einmaliger Umzug alter Data-URLs aus dem localStorage in die Datenbank. */
  async function migrate(students){
    await ready;
    if(!Array.isArray(students)) return 0;
    let moved=0;
    for(const student of students){
      if(!student||typeof student.photo!=='string') continue;
      if(!student.photo.startsWith('data:')) continue;
      const blob=dataUrlToBlob(student.photo);
      if(!blob) continue;
      student.photo=await ablegen(student.id,blob);
      moved++;
    }
    return moved;
  }

  /* Fuer das Backup: Verweise wieder zu Data-URLs aufloesen, damit die
     Sicherungsdatei vollstaendig und ohne Datenbank lesbar bleibt. */
  /* NEXT 15.46 – Zwei Fehlerquellen sind hier behoben:

     1) Frueher konnte diese Funktion laufen, BEVOR `ready` fertig war. Dann
        war `available` noch false und der Zwischenspeicher leer, `blobFor()`
        fand nichts und jedes Foto wurde zu ''. Die Sicherung enthielt dann
        still und leise null Fotos. Jetzt wird `ready` immer abgewartet.

     2) Konnte ein Foto trotzdem nicht gelesen werden, wurde der Verweis mit
        '' ueberschrieben. Damit war das Foto auch fuer das eigene Geraet
        verloren. Der Verweis bleibt nun erhalten; nur der Zaehler meldet,
        dass dieses Foto nicht mitgekommen ist. */
  async function inlineForExport(stateObject){
    await ready;
    const copy=JSON.parse(JSON.stringify(stateObject));
    let eingebettet=0,fehlend=0;
    for(const student of copy.students||[]){
      if(!isReference(student?.photo)) continue;
      const blob=await blobFor(student.photo);
      if(blob){ student.photo=await blobToDataUrl(blob); eingebettet++; }
      else { fehlend++; }
    }
    lastExportReport={eingebettet,fehlend};
    return copy;
  }

  /* Ehrliche Auskunft ueber eine Kinderliste: wie viele Fotos sind wirklich
     als Bild enthalten, wie viele sind nur ein Verweis auf eine fremde
     Datenbank und daher auf diesem Geraet nicht anzeigbar. */
  function photoReport(students){
    const liste=Array.isArray(students)?students:[];
    let bilder=0,verweise=0,pfade=0,ohne=0;
    liste.forEach(student=>{
      const wert=typeof student?.photo==='string'?student.photo:'';
      if(!wert) ohne++;
      else if(wert.startsWith('data:')) bilder++;
      else if(isReference(wert)) verweise++;
      else pfade++;
    });
    return {kinder:liste.length,bilder,verweise,pfade,ohne};
  }

  /* Fuer den Backup-Import: Data-URLs direkt in die Datenbank schreiben,
     damit sie gar nicht erst den localStorage fuellen. */
  /* NEXT 15.46 – Zusaetzlich zum Einlesen wird jetzt Bilanz gezogen. Ist die
     Datenbank nicht verfuegbar, bleiben die Data-URLs im Zustand: dann sind
     die Fotos wenigstens sichtbar. `uebernommen` und `ohneBild` sagen der
     Oberflaeche, was wirklich angekommen ist. */
  async function absorbFromImport(importedState){
    if(!Array.isArray(importedState?.students)) return importedState;
    await ready;
    let uebernommen=0,ohneBild=0,unlesbar=0;
    for(const student of importedState.students){
      const wert=typeof student?.photo==='string'?student.photo:'';
      if(!wert){ ohneBild++; continue; }
      if(isReference(wert)){
        /* Ein Verweis aus einer fremden Datenbank ist hier nichts wert. Er
           wird geleert, damit statt eines kaputten Bildes die Initialen
           erscheinen – und mitgezaehlt, damit die Meldung es benennt. */
        if(!cache.has(wert)){ student.photo=''; unlesbar++; }
        else uebernommen++;
        continue;
      }
      if(!wert.startsWith('data:')){ uebernommen++; continue; }   // Dateipfad
      const blob=dataUrlToBlob(wert);
      if(!blob){ student.photo=''; unlesbar++; continue; }
      /* Hier lag der zweite Fehler: ohne Datenbank blieb das GROSSE Bild im
         Zustand. 22 grosse Bilder sprengen den localStorage, das Speichern
         scheitert – und damit war alles weg. Jetzt wird klein gerechnet. */
      student.photo=await ablegen(student.id,blob);
      if(student.photo) uebernommen++; else unlesbar++;
    }
    lastImportReport={uebernommen,ohneBild,unlesbar};
    return importedState;
  }

  async function usage(){
    if(!navigator.storage?.estimate) return null;
    try{
      const estimate=await navigator.storage.estimate();
      return {usedMb:(estimate.usage/1048576).toFixed(1),quotaMb:(estimate.quota/1048576).toFixed(0)};
    }catch{ return null; }
  }

  /* NEXT 15.49 – Frueher galt die Datenbank als verfuegbar, sobald sie sich
     OEFFNEN liess. Im privaten Modus und bei knappem Speicher laesst sie
     sich oeffnen, verweigert aber jedes Schreiben. Die App hielt sie dann
     fuer benutzbar und legte Fotos in ein Fass ohne Boden.
     Jetzt wird einmal probeweise geschrieben, gelesen und geloescht. Nur
     wenn das durchlaeuft, gilt die Datenbank als verfuegbar. */
  async function schreibprobe(){
    if(!db) return false;
    const probeSchluessel='__digiboard-probe__';
    try{
      await request(tx('readwrite')?.put(new Blob(['probe'],{type:'text/plain'}),probeSchluessel));
      const zurueck=await request(tx('readonly')?.get(probeSchluessel));
      await request(tx('readwrite')?.delete(probeSchluessel)).catch(()=>{});
      return zurueck instanceof Blob;
    }catch{ return false; }
  }

  const ready=(async()=>{
    db=await open();
    available=await schreibprobe();
    /* Vorhandene Fotos sind auch bei einer nur lesbaren Datenbank wertvoll.
       Die Schreibprobe entscheidet lediglich, wo NEUE Fotos landen. */
    const count=db?await loadAll():0;
    return {available,count};
  })();

  return {ready,resolve,put,remove,migrate,inlineForExport,absorbFromImport,usage,
          isReference,keyFor,dataUrlToBlob,photoReport,diagnose,verkleinereZuDataUrl,frischeUrl,
          get lastExportReport(){return lastExportReport;},
          get lastImportReport(){return lastImportReport;},
          get available(){return available;},
          get count(){return cache.size;}};
})();
