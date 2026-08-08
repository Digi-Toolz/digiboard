/* ============================================================
   DigiBoard Next 15.46 – sichere Kinderdaten-Datei

   Die Datei enthaelt bewusst nur die Kinderliste (Namen, Geburtstage und
   eingebettete Fotos). Persoenliche Profile, Pins, Fundus und Einstellungen
   der empfangenden Person bleiben beim Import erhalten.
   ============================================================ */

function childrenPackageStatus(message){
  const status=document.querySelector('#shareClassPackageStatus');
  if(status)status.textContent=message;
}

function safePackageName(value){
  return String(value||'Klasse').trim().replace(/[^\p{L}\p{N}-]+/gu,'-').replace(/^-+|-+$/g,'')||'Klasse';
}

function downloadPackageFile(file,fileName){
  const url=URL.createObjectURL(file);
  const link=document.createElement('a');
  link.href=url;
  link.download=fileName;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
}

async function shareClassPackage(){
  try{
    childrenPackageStatus('Kinderdaten und Fotos werden vorbereitet …');
    if(typeof photoStore!=='undefined')await photoStore.ready;

    const childrenOnly={students:JSON.parse(JSON.stringify(state.students||[]))};
    const inlined=typeof photoStore!=='undefined'&&photoStore.inlineForExport
      ?await photoStore.inlineForExport(childrenOnly)
      :childrenOnly;
    const students=Array.isArray(inlined.students)?inlined.students:[];
    const bilanz=typeof photoStore!=='undefined'&&photoStore.photoReport
      ?photoStore.photoReport(students)
      :{bilder:0,pfade:0,verweise:0};
    const photoCount=bilanz.bilder+bilanz.pfade;
    const fehlend=bilanz.verweise;
    const payload={
      format:'digiboard-children',
      version:2,
      createdAt:new Date().toISOString(),
      appVersion:'15.52',
      className:state.classWorld?.className||'Klasse',
      rosterVersion:state.rosterVersion||1,
      reservedStudentPlaces:Number(state.reservedStudentPlaces)||0,
      students
    };
    const date=new Date().toISOString().slice(0,10);
    const fileName=`DigiBoard-Kinderdaten-${safePackageName(payload.className)}-${date}.digiboard-kinder.json`;
    const file=new File([JSON.stringify(payload,null,2)],fileName,{type:'application/json'});

    /* Auf iPhone/iPad ist „In Dateien sichern“ Teil des Teilen-Dialogs. Auf
       Desktop wird direkt heruntergeladen, damit immer eine echte Datei im
       Downloads-Ordner landet. */
    const canShareFile=!!navigator.share&&(!navigator.canShare||navigator.canShare({files:[file]}));
    if(typeof isIOSDevice==='function'&&isIOSDevice()&&canShareFile){
      try{
        await navigator.share({files:[file],title:'DigiBoard-Kinderdaten',text:'Kinderdaten sicher an das Klassenteam weitergeben'});
        childrenPackageStatus(`${students.length} Kinder und ${photoCount} Fotos zum Sichern bereitgestellt ${fehlend?`– ${fehlend} Fotos konnten nicht gelesen werden!`:'✓'}`);
        return;
      }catch(error){
        if(error?.name==='AbortError'){
          childrenPackageStatus('Sichern abgebrochen – es wurden keine Daten verändert.');
          return;
        }
        /* Ein nicht verfuegbarer Share-Dialog darf den Export nicht stoppen. */
      }
    }

    downloadPackageFile(file,fileName);
    childrenPackageStatus(`${students.length} Kinder und ${photoCount} Fotos als Datei heruntergeladen ${fehlend?`– ${fehlend} Fotos konnten nicht gelesen werden!`:'✓'}`);
  }catch(error){
    console.error('Kinderdaten-Export fehlgeschlagen',error);
    childrenPackageStatus('Die Kinderdaten-Datei konnte nicht erstellt werden. Bitte freien Speicher prüfen und erneut versuchen.');
  }
}

function normaliseImportedChildren(payload){
  if(payload?.format==='digiboard-children'&&Array.isArray(payload.students)){
    return {students:payload.students,className:payload.className,rosterVersion:payload.rosterVersion,reservedStudentPlaces:payload.reservedStudentPlaces,source:'Kinderdaten-Datei'};
  }
  /* Abwaertskompatibel zu den alten Klassenpaketen aus 11.x/15.x. */
  if(payload?.format==='digiboard-package'&&Array.isArray(payload.state?.students)){
    return {students:payload.state.students,className:payload.state.classWorld?.className,rosterVersion:payload.state.rosterVersion,reservedStudentPlaces:payload.state.reservedStudentPlaces,source:'älteres Klassenpaket'};
  }
  /* NEXT 15.37 – Viele Nutzerinnen besitzen nur die bisherige allgemeine
     Gesamtsicherung. Daraus werden hier bewusst ausschliesslich die Kinder
     uebernommen; Fundus, Team, Pins und persoenliche Einstellungen des
     aktuellen Geraets bleiben unangetastet. */
  if(payload?.format==='digiboard-backup'&&Array.isArray(payload.state?.students)){
    const backupState=payload.state;
    return {students:backupState.students,className:backupState.classWorld?.className,rosterVersion:backupState.rosterVersion,reservedStudentPlaces:backupState.reservedStudentPlaces,source:'DigiBoard-Gesamtbackup'};
  }
  if(Array.isArray(payload?.state?.students)){
    const wrappedState=payload.state;
    return {students:wrappedState.students,className:wrappedState.classWorld?.className,rosterVersion:wrappedState.rosterVersion,reservedStudentPlaces:wrappedState.reservedStudentPlaces,source:'ältere vollständige Sicherung'};
  }
  /* Sehr alte Sicherungen bestanden direkt aus dem Zustand und hatten noch
     keinen format/state-Umschlag. */
  if(Array.isArray(payload?.students)){
    return {students:payload.students,className:payload.classWorld?.className,rosterVersion:payload.rosterVersion,reservedStudentPlaces:payload.reservedStudentPlaces,source:'ältere DigiBoard-Sicherung'};
  }
  return null;
}

/* NEXT 15.47 – Der Uebernahme-Teil liegt jetzt in einer eigenen Funktion.
   So verwenden Dateiauswahl UND das Einfuegen von Text genau denselben Weg;
   es kann nicht mehr passieren, dass ein Weg funktioniert und der andere
   still etwas anderes tut. */
async function applyImportedChildrenText(rohtext){
  const imported=normaliseImportedChildren(JSON.parse(rohtext));
  if(!imported||!imported.students.length)throw new Error('invalid');
  const incoming=JSON.parse(JSON.stringify(imported.students));
  const label=imported.className?` aus \u201E${imported.className}\u201C`:'';
  const sourceLabel=imported.source?`${imported.source} erkannt. `:'';
  if(!confirm(`${sourceLabel}${incoming.length} Kinder${label} laden? Die aktuelle Kinderliste wird ersetzt. Persönlicher Fundus, Team und Einstellungen bleiben erhalten.`)){
    childrenPackageStatus('Laden abgebrochen – es wurden keine Daten verändert.');
    return false;
  }

  childrenPackageStatus('Fotos werden sicher übernommen …');
  const bilanzDatei=typeof photoStore!=='undefined'
    ?photoStore.photoReport(incoming)
    :{kinder:incoming.length,bilder:0,verweise:0,pfade:0,ohne:incoming.length};
  if(typeof photoStore!=='undefined'){
    await photoStore.ready;
    await photoStore.absorbFromImport({students:incoming});
  }
  state.students=incoming;
  if(Number.isFinite(Number(imported.rosterVersion)))state.rosterVersion=Number(imported.rosterVersion);
  if(Number.isFinite(Number(imported.reservedStudentPlaces)))state.reservedStudentPlaces=Math.max(0,Number(imported.reservedStudentPlaces));
  const ids=new Set(incoming.map(student=>student?.id).filter(Boolean));
  state.publishedGreen=(state.publishedGreen||[]).filter(id=>ids.has(id));
  state.previousPublishedGreen=(state.previousPublishedGreen||[]).filter(id=>ids.has(id));
  state.points=Object.fromEntries(Object.entries(state.points||{}).filter(([id])=>ids.has(id)));
  state.votes=Object.fromEntries(Object.entries(state.votes||{}).filter(([id])=>ids.has(id)));
  if(!saveState())throw new Error('storage');
  renderDashboard();
  if(typeof renderClassManagement==='function')renderClassManagement();
  if(typeof renderTeamMembers==='function')renderTeamMembers();
  if(typeof refreshPhotoDependentViews==='function')refreshPhotoDependentViews();
  if(typeof renderMobilePoints==='function')renderMobilePoints();
  if(typeof renderServicePlanner==='function')renderServicePlanner();
  /* NEXT 15.48 – Vorher wurde gemeldet, was in der DATEI stand. Das war
     irrefuehrend: die Datei kann 22 Bilder enthalten und trotzdem koennen
     null davon ankommen, etwa wenn die Fotodatenbank sie nicht annimmt.
     Gemeldet wird jetzt, was danach WIRKLICH anzeigbar ist – nachgezaehlt
     am fertigen Zustand. */
  const sichtbar=(state.students||[]).filter(student=>{
    try{ return !!photoStore.resolve(student?.photo); }catch{ return false; }
  }).length;
  const bericht=typeof photoStore!=='undefined'?photoStore.lastImportReport:null;
  const inDatei=bilanzDatei.bilder+bilanzDatei.pfade;

  let fotoSatz;
  if(sichtbar===incoming.length&&sichtbar>0){
    fotoSatz=`${sichtbar} Fotos sind da ✓`;
  }else if(sichtbar>0){
    fotoSatz=`${sichtbar} von ${incoming.length} Fotos sind da.`;
  }else if(inDatei>0){
    /* Der haeufigste harte Fall: Bilder waren in der Datei, konnten hier aber
       nicht abgelegt werden. Das ist ein Speicherproblem des Geraets. */
    fotoSatz=`Achtung: die Datei enthält ${inDatei} Fotos, aber keines konnte auf diesem Gerät abgelegt werden`
      +(bericht?.unlesbar?` (${bericht.unlesbar} nicht lesbar)`:'')
      +`. Bitte im Browser die Website-Daten für DigiBoard freigeben und es erneut versuchen.`;
  }else if(bilanzDatei.verweise){
    fotoSatz=`Achtung: diese Datei enthält keine Bilder, sondern nur ${bilanzDatei.verweise} Verweise auf die Fotodatenbank des Ursprungsgeräts. Bitte dort ein neues Backup erzeugen.`;
  }else{
    fotoSatz='Achtung: in dieser Datei sind keine Fotos gespeichert.';
  }

  /* Fuer die Fehlersuche: der genaue Stand steht in der Konsole und im
     Werkzeugkasten des Browsers. */
  console.info('DigiBoard Fotobilanz',{inDatei:bilanzDatei,uebernommen:bericht,jetztSichtbar:sichtbar,
    fotodatenbank:photoStore?.available?'verfügbar':'NICHT verfügbar'});

  childrenPackageStatus(`${imported.source||'Datei'}: ${incoming.length} Kinder geladen, persönliche Bereiche unverändert. ${fotoSatz}`
    +(photoStore&&!photoStore.available?' Hinweis: die Fotodatenbank dieses Browsers ist blockiert.':''));
  return true;
}

function importClassPackage(file){
  if(!file)return;
  childrenPackageStatus('Kinderdaten oder Backup werden geprüft …');
  const reader=new FileReader();
  reader.onload=async()=>{
    try{
      await applyImportedChildrenText(reader.result);
    }catch(error){
      console.error('Kinderdaten-Import fehlgeschlagen',error);
      childrenPackageStatus(error?.message==='storage'
        ?'Die Kinder konnten nicht gespeichert werden – der Speicher des Browsers ist voll.'
        :'Diese Datei enthält weder gültige DigiBoard-Kinderdaten noch ein lesbares Gesamtbackup.');
    }
  };
  reader.onerror=()=>childrenPackageStatus('Die ausgewählte Datei konnte nicht gelesen werden.');
  reader.readAsText(file);
}

document.addEventListener('DOMContentLoaded',()=>{
  const exportButton=document.querySelector('#shareClassPackageBtn');
  const importButton=document.querySelector('#importClassPackageBtn');
  const fileInput=document.querySelector('#classPackageFileInput');
  exportButton?.addEventListener('click',shareClassPackage);
  importButton?.addEventListener('click',()=>fileInput?.click());
  fileInput?.addEventListener('change',()=>{
    importClassPackage(fileInput.files?.[0]);
    fileInput.value='';
  });

  /* Rettungsweg: eingefuegter Dateiinhalt. */
  const pasteField=document.querySelector('#childrenPasteInput');
  const pasteButton=document.querySelector('#childrenPasteButton');
  pasteButton?.addEventListener('click',async()=>{
    const rohtext=(pasteField?.value||'').trim();
    if(!rohtext){childrenPackageStatus('Bitte zuerst den Inhalt der Datei einfügen.');return}
    childrenPackageStatus('Eingefügter Text wird geprüft …');
    try{
      const fertig=await applyImportedChildrenText(rohtext);
      if(fertig&&pasteField)pasteField.value='';
    }catch(error){
      console.error('Einfügen fehlgeschlagen',error);
      childrenPackageStatus(error?.message==='storage'
        ?'Die Kinder konnten nicht gespeichert werden – der Speicher des Browsers ist voll.'
        :'Der eingefügte Text ist keine gültige DigiBoard-Datei. Bitte den vollständigen Inhalt der .json-Datei einfügen – von der ersten { bis zur letzten }.');
    }
  });
});
