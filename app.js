const STORAGE_KEY='digiboard-next-10.0';
const PREVIOUS_STORAGE_KEY='digiboard-next-9.9';
const defaults={viewMode:'standard',motionPaused:false,rosterVersion:1,reservedStudentPlaces:3,dailyQuote:{mode:'auto',fixed:'Schön, dass ihr da seid!',custom:[]},classWorld:{theme:'forest',className:'Fuchsklasse',welcome:'Schön, dass ihr da seid!',dailyOverviewTitle:'Füchse im Blick',kidsAreaNames:{forest:'Fuchsbereich',savanna:'Löwenbereich',ocean:'Delfinbereich',meadow:'Bienenbereich',custom:'Kinderbereich'},customTheme:{mascot:'🐾',label:'Eigene Welt',rewardTitle:'Unsere Stars',rewardUnit:'Sterne',accent:'#2e7d32',deep:'#315f28',sky:'#eef8cf',ground:'#59a85b'}},
  content:{
    schoolDay:[
      {kind:'arrival',time:'08:00 – 08:05',label:'Offener Schulanfang',detail:'Eintreffen in der Klasse'},
      {kind:'lesson',lesson:1,time:'08:05 – 08:50'},{kind:'lesson',lesson:2,time:'08:50 – 09:35'},
      {kind:'break',after:2,time:'09:35 – 10:05',label:'Große Pause',detail:'anschließend Frühstück in den Klassen'},
      {kind:'lesson',lesson:3,time:'10:05 – 10:50'},{kind:'lesson',lesson:4,time:'10:50 – 11:35'},
      {kind:'break',after:4,time:'11:35 – 11:50',label:'Pause',detail:''},
      {kind:'lesson',lesson:5,time:'11:50 – 12:35'},{kind:'lesson',lesson:6,time:'12:35 – 13:20'},
      {kind:'break',after:6,time:'13:20 – 13:30',label:'Pause',detail:''},
      {kind:'lesson',lesson:7,time:'13:30 – 14:15'},{kind:'lesson',lesson:8,time:'14:15 – 15:00'},{kind:'lesson',lesson:9,time:'15:00 – 16:00'}
    ],
    weekSchedule:{
      1:[{time:'08:00',subject:'Deutsch',person:'Frau Müller'},{time:'09:00',subject:'Mathematik',person:'Herr Weber'},{time:'10:15',subject:'Sachunterricht',person:'Frau Schulz'},{time:'11:15',subject:'Sport',person:'Herr Weber'},{time:'12:00',subject:'Kunst',person:'Frau Schneider'},{time:'13:00',subject:'Musik',person:'Frau Becker'}],
      2:[{time:'08:00',subject:'Mathematik',person:'Herr Weber'},{time:'09:00',subject:'Deutsch',person:'Frau Müller'},{time:'10:15',subject:'Englisch',person:'Frau Schulz'},{time:'11:15',subject:'Sachunterricht',person:'Frau Schulz'},{time:'12:00',subject:'Kunst',person:'Frau Schneider'},{time:'13:00',subject:'Lernzeit',person:'Marc'}],
      3:[{time:'08:00',subject:'Deutsch',person:'Frau Müller'},{time:'09:00',subject:'Sport',person:'Herr Weber'},{time:'10:15',subject:'Mathematik',person:'Herr Weber'},{time:'11:15',subject:'Musik',person:'Frau Becker'},{time:'12:00',subject:'Lernzeit',person:'Marc'},{time:'13:00',subject:'Freizeit',person:'Marc'}],
      4:[{time:'08:00',subject:'Sachunterricht',person:'Frau Schulz'},{time:'09:00',subject:'Deutsch',person:'Frau Müller'},{time:'10:15',subject:'Mathematik',person:'Herr Weber'},{time:'11:15',subject:'Englisch',person:'Frau Schulz'},{time:'12:00',subject:'Sport',person:'Herr Weber'},{time:'13:00',subject:'Freizeit',person:'Marc'}],
      5:[{time:'08:00',subject:'Deutsch',person:'Frau Müller'},{time:'09:00',subject:'Mathematik',person:'Herr Weber'},{time:'10:15',subject:'Kunst',person:'Frau Schneider'},{time:'11:15',subject:'Klassenrat',person:'Klassenteam'},{time:'12:00',subject:'Lernzeit',person:'Marc'},{time:'13:00',subject:'Freizeit',person:'Marc'}]
    },
    dayOverrides:{},
    weeklyGoal:{text:'Wir lassen Erwachsene ausreden.',requiredDays:4,votes:{},childVotes:{}},
    taskNote:{title:'Mathebuch',task:'Richtig rechnen · Seite 5 · Nr. 1–3',hint:'Arbeite sauber und kontrolliere deine Ergebnisse.',color:'blue'},
    taskFavorites:[
      {id:'tf1',icon:'📘',title:'Mathebuch',task:'Richtig rechnen · Seite 5 · Nr. 1–3',hint:'Arbeite sauber und kontrolliere deine Ergebnisse.',color:'blue'},
      {id:'tf2',icon:'📕',title:'Deutschbuch',task:'Lies Seite 12 und bearbeite Nr. 2–4.',hint:'Schreibe in ganzen Sätzen.',color:'red'}
    ],
    cleanup:{duration:90,audioUrl:''},
    meal:{title:'Nudeln',detail:'mit Tomatensoße',dessert:'Vanillepudding'},
    mealCalendar:{},
    mealFavorites:[{id:'mf1',title:'Nudeln',detail:'mit Tomatensoße',dessert:'Vanillepudding'},{id:'mf2',title:'Kartoffeln',detail:'mit Gemüse und Soße',dessert:''},{id:'mf3',title:'Reis',detail:'mit Hähnchen und Gemüse',dessert:'Obst'}],
    birthday:'',
    infos:[
      {left:'🏊 Heute Schwimmen',right:'Sportsachen!'},
      {left:'👥 Klassenrat',right:'nach der 4. Stunde'},
      {left:'🌳 Ausflug',right:'am Freitag'},
      {left:'📅 Elternabend',right:'23.05.'}
    ]
  },
  publishPaused:false,lastPublishedAt:null,heroIndex:0,leafCount:245,leafAwards:{},rewardChest:{mode:'leaves',threshold:300},activeTeamMember:'t3',activePointActor:'t3',substitutes:[],pointHistory:[],
  boardPresentation:null,
  remoteSync:{enabled:false,url:'',classId:'fuchsklasse-2026',key:'',lastRemoteUpdate:'',lastPointsPushAt:'',lastPointsSeenAt:''},
  pointsResetStamp:'',
  teamMembers:[
    {id:'t1',name:'Lehrkraft 1',role:'Lehrkraft',icon:'👩‍🏫',teachingTool:{type:'prowise',label:'PROWISE',url:'https://presenter10.prowise.com/'}},
    {id:'t2',name:'Lehrkraft 2',role:'Lehrkraft',icon:'👨‍🏫',teachingTool:{type:'classroomscreen',label:'CLASSROOM',url:'https://classroomscreen.com/'}},
    {id:'t3',name:'Marc',role:'Erzieher',icon:'🧩',teachingTool:{type:'classroomscreen',label:'CLASSROOM',url:'https://classroomscreen.com/'}},
    {id:'t4',name:'Pädagogische Hilfskraft',role:'Pädagogische Hilfskraft',icon:'🤝',teachingTool:{type:'prowise',label:'PROWISE',url:'https://presenter10.prowise.com/'}}
  ],
  materials:{
    t1:{activeDrawer:'Deutsch',drawers:[{name:'Deutsch',items:[]},{name:'Mathematik',items:[]},{name:'Sachunterricht',items:[]}]},
    t2:{activeDrawer:'Deutsch',drawers:[{name:'Deutsch',items:[]},{name:'Mathematik',items:[]},{name:'Musik',items:[]}]},
    t3:{activeDrawer:'Freizeit',drawers:[{name:'Freizeit',items:[]},{name:'Wochenangebote',items:[]},{name:'Turnhalle',items:[]},{name:'Spiele',items:[]}]},
    t4:{activeDrawer:'Unterstützung',drawers:[{name:'Unterstützung',items:[]},{name:'Fördermaterial',items:[]},{name:'Beobachtungen',items:[]}]}
  },
  students:[
    {id:'alan',name:'Alan',avatar:'A',photo:''},
    {id:'alice',name:'Alice',avatar:'A',photo:''},
    {id:'alkhan',name:'Alkhan',avatar:'A',photo:''},
    {id:'anabell',name:'Anabell',avatar:'A',photo:''},
    {id:'andre',name:'André',avatar:'A',photo:''},
    {id:'chen',name:'Chen',avatar:'C',photo:''},
    {id:'daniel-r',name:'Daniel R',avatar:'DR',photo:''},
    {id:'daniel-z',name:'Daniel Z',avatar:'DZ',photo:''},
    {id:'esrom',name:'Esrom',avatar:'E',photo:''},
    {id:'fiona',name:'Fiona',avatar:'F',photo:''},
    {id:'hannah',name:'Hannah',avatar:'H',photo:''},
    {id:'jean',name:'Jean',avatar:'J',photo:''},
    {id:'jeremy',name:'Jeremy',avatar:'J',photo:''},
    {id:'lian',name:'Lian',avatar:'L',photo:''},
    {id:'liara',name:'Liara',avatar:'L',photo:''},
    {id:'lukas',name:'Lukas',avatar:'L',photo:''},
    {id:'maxi',name:'Maxi',avatar:'M',photo:''},
    {id:'phil',name:'Phil',avatar:'P',photo:''},
    {id:'rejna',name:'Rejna',avatar:'R',photo:''},
    {id:'shanya',name:'Shanya',avatar:'S',photo:''},
    {id:'yusuf',name:'Yusuf',avatar:'Y',photo:''},
    {id:'zamira',name:'Zamira',avatar:'Z',photo:''}
  ],
  services:['Mensa','Flur','Tür','Tafel','Pflanzen'],weeklyServices:{week:'',assignments:{}},points:{},votes:{},publishedGreen:['esrom','fiona','anabell','alkhan','lian','hannah'],previousPublishedGreen:[],
  widgets:[
    {id:'clock',title:'🕰️ Unsere Lernuhr',size:'small'},
    {id:'schedule',title:'📅 Stundenplan',size:'small',hidden:true},
    {id:'weeklyGoal',title:'🎯 Unser Wochenziel',size:'small'},
    {id:'notes',title:'📝 Aufgaben',size:'small',hidden:true},
    {id:'wall',title:'🏆 Wall of Fame',size:'small'},
    {id:'meal',title:'🍴 Essen heute',size:'small'},
    {id:'birthday',title:'🎂 Geburtstage',size:'small'},
    {id:'info',title:'📣 Tagesinfos',size:'small'},
    {id:'kids',title:'🦊 Kinderbereich',size:'small',hidden:true}
  ]
};
let state=loadState();
const dashboard=document.querySelector('#dashboard');
const wallMount=document.querySelector('#wallMount');
const template=document.querySelector('#widgetTemplate');
const teamDialog=document.querySelector('#teamDialog');
const pointsDialog=document.querySelector('#pointsDialog');
const widgetFocusDialog=document.querySelector('#widgetFocusDialog');
const serviceDialog=document.querySelector('#serviceDialog');
const settingsDialog=document.querySelector('#settingsDialog');
const kidsDialog=document.querySelector('#kidsDialog');
const studentDetailsDialog=document.querySelector('#studentDetailsDialog');
const quickBanDialog=document.querySelector('#quickBanDialog');
let dragId=null;
let teamWorkspaceMode='selection';
let activeTeamPage='overview';
let materialPage=0;
let activeStudentDetailsId=null;
let activeQuickBanStudentId=null;
let mealSelectedDateKey=dateKeyLocal(new Date());
/* 15.30 – merkt sich den Tag, dessen Eingabefelder gerade sichtbar sind.
   Beim Wechsel des Selects enthaelt dessen value bereits den neuen Tag; ohne
   diese getrennte Variable wurden deshalb die alten Zeilen im neuen Tag
   gespeichert. */
let scheduleEditorWeekday=null;

function clone(v){return JSON.parse(JSON.stringify(v))}
function loadState(){
  try{
    const raw=localStorage.getItem(STORAGE_KEY)||localStorage.getItem(PREVIOUS_STORAGE_KEY)||'{}';
    const saved=JSON.parse(raw);
    const merged={...clone(defaults),...saved,classWorld:{...clone(defaults.classWorld),...(saved.classWorld||{}),kidsAreaNames:{...clone(defaults.classWorld.kidsAreaNames),...((saved.classWorld||{}).kidsAreaNames||{})},customTheme:{...clone(defaults.classWorld.customTheme),...((saved.classWorld||{}).customTheme||{})}},content:{...clone(defaults.content),...(saved.content||{})},widgets:saved.widgets||clone(defaults.widgets),students:saved.students||clone(defaults.students)};
    if(!merged.content.weekSchedule)merged.content.weekSchedule=clone(defaults.content.weekSchedule);
    if(!Array.isArray(merged.content.schoolDay))merged.content.schoolDay=clone(defaults.content.schoolDay);
    Object.keys(defaults.content.weekSchedule).forEach(day=>{
      const current=Array.isArray(merged.content.weekSchedule[day])?merged.content.weekSchedule[day]:[];
      const times=(defaults.content.schoolDay||[]).filter(item=>item.kind==='lesson').map(item=>item.time);
      merged.content.weekSchedule[day]=Array.from({length:9},(_,index)=>({time:times[index]||'',subject:current[index]?.subject||'',person:current[index]?.person||''}));
    });
    if(!merged.content.dayOverrides)merged.content.dayOverrides={};
    if(!merged.content.weeklyGoal)merged.content.weeklyGoal=clone(defaults.content.weeklyGoal);
    if(!merged.content.weeklyGoal.votes)merged.content.weeklyGoal.votes={};
    if(!merged.content.weeklyGoal.childVotes)merged.content.weeklyGoal.childVotes={};
    if(!merged.content.taskNote)merged.content.taskNote=clone(defaults.content.taskNote);
    if(!merged.content.cleanup)merged.content.cleanup=clone(defaults.content.cleanup);
    if(!merged.content.mealCalendar)merged.content.mealCalendar={};
    if(!Array.isArray(merged.content.mealFavorites))merged.content.mealFavorites=clone(defaults.content.mealFavorites);
    if(!merged.widgets.some(w=>w.id==='weeklyGoal'))merged.widgets.splice(2,0,clone(defaults.widgets.find(w=>w.id==='weeklyGoal')));
    if(!merged.materials)merged.materials=clone(defaults.materials);
    const widgetDefaults=clone(defaults.widgets);
    const isFresh96=!localStorage.getItem(STORAGE_KEY);
    merged.widgets=widgetDefaults.map(def=>{const old=(merged.widgets||[]).find(w=>w.id===def.id)||{};const item={...def,...old,size:'small'};if(def.id==='kids')item.hidden=true;if(isFresh96&&def.id==='schedule')item.hidden=true;return item;});
    if(isFresh96 && merged.content.birthday==='Lina' && merged.content.meal?.title==='Nudeln') merged.content.birthday='';
    merged.ui={...(saved.ui||{}),mealExpanded:false};
    merged.weeklyServices={week:'',assignments:{},...(saved.weeklyServices||{})};
    merged.services=[...new Set([...(saved.services||[]),...defaults.services])];
    merged.rewardChest={...defaults.rewardChest,...(saved.rewardChest||{})};
    merged.dailyQuote={...defaults.dailyQuote,...(saved.dailyQuote||{})};
    merged.leafAwards=saved.leafAwards||{};
    merged.substitutes=Array.isArray(saved.substitutes)?saved.substitutes:[];
    merged.pointHistory=Array.isArray(saved.pointHistory)?saved.pointHistory:[];
    merged.boardPresentation=saved.boardPresentation||null;
    merged.remoteSync={...defaults.remoteSync,...(saved.remoteSync||{})};
    if(saved.rosterVersion!==defaults.rosterVersion){
      const oldStudents=Array.isArray(saved.students)?saved.students:[];
      const oldByName=new Map(oldStudents.map(student=>[student.name,student]));
      const oldNameById=new Map(oldStudents.map(student=>[student.id,student.name]));
      /* STUFE 1 / Altfehler – vorher stand hier photo:student.photo, wobei
         `student` das Standardkind ist. Damit gewann bei jedem Neuladen das
         Standardfoto gegen ein selbst hochgeladenes. Jetzt hat das gespeicherte
         Foto Vorrang, das Standardfoto ist nur noch der Rueckfall. */
      merged.students=defaults.students.map(student=>({...student,...(oldByName.get(student.name)||{}),id:student.id,photo:oldByName.get(student.name)?.photo||student.photo}));
      const newIdByName=new Map(merged.students.map(student=>[student.name,student.id]));
      merged.publishedGreen=(saved.publishedGreen||defaults.publishedGreen).map(id=>newIdByName.get(oldNameById.get(id))||id).filter(id=>merged.students.some(student=>student.id===id));
      merged.previousPublishedGreen=(saved.previousPublishedGreen||[]).map(id=>newIdByName.get(oldNameById.get(id))||id).filter(id=>merged.students.some(student=>student.id===id));
      merged.rosterVersion=defaults.rosterVersion;
      merged.reservedStudentPlaces=3;
    }else{
      const defaultById=new Map(defaults.students.map(student=>[student.id,student]));
      /* STUFE 1 / Altfehler – Reihenfolge umgedreht: das eigene Foto gewinnt,
         das Standardfoto fuellt nur Luecken. Vorher ging jedes selbst
         hochgeladene Foto beim naechsten Neuladen verloren. */
      merged.students=(merged.students||[]).map(student=>({...student,photo:student.photo||defaultById.get(student.id)?.photo||''}));
    }
    merged.teamIncidents=Array.isArray(merged.teamIncidents)?merged.teamIncidents:[];
    /* NEXT 12.2 – Keine Beispiel-Beobachtungen mehr einsetzen; vorhandene
       Demo-Einträge aus früheren Versionen werden entfernt, damit „Heute im
       Blick“ nur echte Bewertungen zeigt. */
    merged.teamIncidents=merged.teamIncidents.filter(item=>!item?.demo&&!String(item?.id||'').startsWith('demo-'));
    merged.cockpitExamplesVersion=1;
    /* 15.30 – alte oder unvollstaendige Backups konnten eine leere
       teamMembers-Liste enthalten. Dann blieb „Unser Klassenteam“ leer und
       alle persoenlichen Bereiche hatten kein gueltiges Ziel. Vorhandene
       Teamdaten werden respektiert; nur eine wirklich leere Liste wird mit
       den vier Grundprofilen repariert. */
    if(!Array.isArray(merged.teamMembers)||!merged.teamMembers.length){
      merged.teamMembers=clone(defaults.teamMembers);
      merged.materials={...clone(defaults.materials),...(merged.materials||{})};
    }
    if(!merged.teamMembers.some(member=>member?.id===merged.activeTeamMember)){
      merged.activeTeamMember=merged.teamMembers.find(member=>member?.id===defaults.activeTeamMember)?.id||merged.teamMembers[0].id;
    }
    if(!merged.teamMembers.some(member=>member?.id===merged.activePointActor)){
      merged.activePointActor=merged.activeTeamMember;
    }
    merged.teamMembers.forEach((member,index)=>{
      if(!merged.materials[member.id])merged.materials[member.id]={activeDrawer:'Allgemein',drawers:[{name:'Allgemein',items:[]}]};
      if(!member.teachingTool)member.teachingTool=clone(defaults.teamMembers.find(x=>x.id===member.id)?.teachingTool||defaults.teamMembers[index]?.teachingTool||defaults.teamMembers[0].teachingTool);
      if(!Array.isArray(member.teachingTools)||!member.teachingTools.length)member.teachingTools=[{id:`tool-${member.id}-1`,...clone(member.teachingTool),isDefault:true,hidden:false}];
      member.teachingTools=member.teachingTools.map((tool,i)=>({id:tool.id||`tool-${member.id}-${i+1}`,...tool,isDefault:tool.isDefault??i===0,hidden:!!tool.hidden,placement:tool.placement||'both'}));
      if(!member.teachingTools.some(tool=>tool.isDefault))member.teachingTools[0].isDefault=true;
      member.profilePrefs={displayName:member.name,icon:member.icon,accent:'#315f28',showSubject:true,showMaterials:true,showClass:true,showGoal:true,showPublication:true,...(member.profilePrefs||{})};
    });
    if(saved.personalFavoritesVersion!==1){
      merged.teamMembers.forEach(member=>{
        const existing=new Set(member.teachingTools.map(tool=>tool.type));
        [
          {type:'youtube',label:'YOUTUBE',url:'https://www.youtube.com/',mark:'▶',hint:'Videos öffnen'},
          {type:'google',label:'GOOGLE',url:'https://www.google.de/',mark:'G',hint:'Suchen'},
          {type:'safari',label:'SAFARI',url:'https://www.apple.com/de/safari/',mark:'🧭',hint:'Browser-Start'},
          {type:'chrome',label:'CHROME',url:'https://www.google.com/chrome/',mark:'🌐',hint:'Browser-Start'}
        ].forEach((tool,index)=>{if(!existing.has(tool.type))member.teachingTools.push({id:`favorite-${member.id}-${index+1}`,...tool,isDefault:false,hidden:false,placement:'favorite'})});
      });
      merged.personalFavoritesVersion=1;
    }
    return merged;
  }catch{return clone(defaults)}
}
const boardChannel=typeof BroadcastChannel!=='undefined'?new BroadcastChannel('digiboard-public-board'):null;
/* KORREKTUR 1 – Speicher absichern.
   Vorher: localStorage.setItem ohne Absicherung. Bei vollem Speicher (ca. 5 MB,
   erreicht durch Fuchsfotos als Data-URL) flog ein QuotaExceededError ungefangen
   nach oben, die folgenden render*()-Aufrufe liefen nicht mehr und die Lehrkraft
   bekam keinerlei Rückmeldung. Jetzt: Fehler wird gefangen, sichtbar gemeldet,
   Rueckgabewert true/false. */
function storageUsageInfo(){
  let bytes=0;
  try{ for(const key of Object.keys(localStorage)){ bytes+=(localStorage.getItem(key)||'').length+key.length } }catch{}
  return {bytes,mb:(bytes/1048576).toFixed(2)};
}
function showStorageWarning(message){
  let bar=document.querySelector('#storageWarningBar');
  if(!bar){
    bar=document.createElement('div');
    bar.id='storageWarningBar';
    bar.setAttribute('role','alert');
    bar.innerHTML='<span class="storage-warning-text"></span><button type="button" class="storage-warning-close" aria-label="Hinweis schließen">✕</button>';
    bar.querySelector('.storage-warning-close').onclick=()=>bar.remove();
    document.body.appendChild(bar);
  }
  bar.querySelector('.storage-warning-text').textContent=message;
}
let storageWarningShown=false;
function saveState(){
  try{
    localStorage.setItem(STORAGE_KEY,JSON.stringify(state));
    storageWarningShown=false;
    return true;
  }catch(error){
    const full=error&&(error.name==='QuotaExceededError'||error.name==='NS_ERROR_DOM_QUOTA_REACHED'||error.code===22);
    if(!storageWarningShown){
      storageWarningShown=true;
      showStorageWarning(full
        ?`⚠️ Speicher voll (${storageUsageInfo().mb} MB belegt). Die letzte Änderung wurde NICHT gespeichert. Bitte in den Einstellungen ein Backup anlegen und einige Fuchsfotos entfernen.`
        :'⚠️ Die letzte Änderung konnte nicht gespeichert werden. Bitte ein Backup anlegen und die Seite neu laden.');
    }
    return false;
  }
}
function todayKey(){return new Date().toISOString().slice(0,10)}
function pointKey(id){return `${todayKey()}:${id}`}
function activeStudents(){return (state.students||[]).filter(student=>student.active!==false)}
function studentBirthdayNames(date=new Date()){
  const month=String(date.getMonth()+1).padStart(2,'0'),day=String(date.getDate()).padStart(2,'0');
  return activeStudents().filter(student=>String(student.birthday||'').slice(5)===`${month}-${day}`).map(student=>student.name);
}
function currentBirthdayDisplay(){return (state.content.mealCalendar?.[todayKey()]?.birthday||state.content.birthday||'').trim()||studentBirthdayNames().join(' & ')}
function initials(name){return name.split(/\s+/).map(x=>x[0]).join('').slice(0,2).toUpperCase()}
function escapeHtml(value){return String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]))}
/* STUFE 1 – Foto aus dem Zwischenspeicher aufloesen.
   photoStore.resolve() ist synchron: Dateipfade und Data-URLs kommen
   unveraendert zurueck, 'idb:'-Verweise werden zur Objekt-URL. Ist ein Foto
   (noch) nicht geladen, kommt '' zurueck und die Anzeige faellt automatisch
   auf die Initialen zurueck. */
/* NEXT 15.50 – Portraits laden notfalls nach.

   Vorher: war die Objekt-URL im Moment des Zeichnens nicht da, wurden die
   Anfangsbuchstaben ausgegeben – endgueltig. Und schlug ein Bild fehl, wurde
   das <img> durch einen Textknoten ERSETZT. Danach gab es kein Element mehr,
   an dem man das Foto nachtraeglich haette einhaengen koennen. Deshalb
   meldete die Pruefung „22 von 22 anzeigbar", waehrend die Kacheln weiter
   Buchstaben zeigten: die Bilder waren da, die Anzeige war nur schon
   abgerissen.

   Jetzt entsteht immer ein <img> mit dem Fotoschluessel daran. Fehlt die
   Adresse oder schlaegt das Laden fehl, holt heilePortrait() das Bild direkt
   aus der Datenbank nach. Erst wenn auch das nichts findet, erscheinen die
   Anfangsbuchstaben. */
function studentPhotoMarkup(student,cls='student-photo'){
  const ersatz=escapeHtml(student?.avatar||initials(student?.name||'?'));
  const wert=typeof student?.photo==='string'?student.photo:'';
  if(!wert) return ersatz;
  const src=photoStore.resolve(wert);
  const adresse=src?` src="${escapeHtml(src)}"`:'';
  return `<img class="${cls}"${adresse} alt="${escapeHtml(student.name||'Porträt')}" loading="eager"`
    +` data-foto-schluessel="${escapeHtml(wert)}" data-foto-ersatz="${ersatz}"`
    +` onerror="heilePortrait(this)">`;
}

function zeigeInitialen(bild){
  if(!bild||!bild.parentNode)return;
  const ersatz=bild.dataset?.fotoErsatz||'?';
  let feld=bild.nextElementSibling;
  if(!feld?.classList.contains('portrait-initialen-v1550')){
    feld=document.createElement('span');
    feld.className='portrait-initialen-v1550';
    bild.insertAdjacentElement('afterend',feld);
  }
  feld.textContent=ersatz;
  /* NEXT 15.52 – Das Bild bleibt als unsichtbarer Ladeanker erhalten. Ein
     spaeterer Durchlauf kann es deshalb wiederbeleben, ohne dass die ganze
     Ansicht neu gezeichnet werden muss. */
  bild.hidden=true;
  bild.removeAttribute('src');
  bild.setAttribute('aria-hidden','true');
}

async function heilePortrait(bild){
  if(!bild||!bild.dataset)return;
  if(bild.dataset.fotoVersucht==='1'){zeigeInitialen(bild);return}
  bild.dataset.fotoVersucht='1';
  try{
    const frisch=await photoStore.frischeUrl(bild.dataset.fotoSchluessel||'');
    if(frisch){
      if(bild.nextElementSibling?.classList.contains('portrait-initialen-v1550'))bild.nextElementSibling.remove();
      bild.hidden=false;
      bild.removeAttribute('aria-hidden');
      bild.src=frisch;
      return;
    }
  }catch(error){console.warn('Portrait konnte nicht nachgeladen werden',error)}
  zeigeInitialen(bild);
}

/* Nach jedem Zeichnen einmal aufraeumen: alle Bilder ohne Adresse nachladen.
   Das faengt den haeufigsten Fall ab – eine Ansicht wurde gezeichnet, bevor
   die Fotodatenbank gelesen war. */
function heilePortraits(wurzel){
  const bereich=wurzel&&wurzel.querySelectorAll?wurzel:document;
  bereich.querySelectorAll('img[data-foto-schluessel]:not([src])').forEach(bild=>{
    bild.dataset.fotoVersucht='';
    heilePortrait(bild);
  });
}


const CLASS_THEMES={
  forest:{mascot:'🦊',label:'Wald',rewardTitle:'Unsere Waldhelden',rewardUnit:'Blätter'},
  savanna:{mascot:'🦁',label:'Savanne',rewardTitle:'Unsere Sonnenhelden',rewardUnit:'Sonnen'},
  ocean:{mascot:'🐬',label:'Ozean',rewardTitle:'Unsere Meeresstars',rewardUnit:'Perlen'},
  meadow:{mascot:'🐝',label:'Blumenwiese',rewardTitle:'Unsere Blütenhelden',rewardUnit:'Blüten'}
};
function customTheme(){return {...clone(defaults.classWorld.customTheme),...(state.classWorld?.customTheme||{})}}
function currentTheme(){return state.classWorld?.theme==='custom'?customTheme():(CLASS_THEMES[state.classWorld?.theme]||CLASS_THEMES.forest)}
function currentKidsAreaName(){const key=state.classWorld?.theme||'forest';return state.classWorld?.kidsAreaNames?.[key]||defaults.classWorld.kidsAreaNames[key]||'Kinderbereich'}
function greetingGroupName(){
  const name=String(state.classWorld?.className||defaults.classWorld.className||'Klasse').trim();
  return name.toLocaleLowerCase('de-DE')==='fuchsklasse'?'Füchse':name;
}
const DAILY_FOREST_QUOTES=[
  'Schlaue Füchse fragen nach.',
  'Gemeinsam wächst unser Wald.',
  'Jeder kleine Schritt zählt.',
  'Heute entdecken wir etwas Neues.',
  'Füchse lernen miteinander und voneinander.',
  'Fehler sind Spuren auf dem Weg zum Ziel.',
  'Wer neugierig bleibt, findet neue Wege.',
  'In unserem Wald gehört jeder dazu.',
  'Wir hören zu, helfen und wachsen gemeinsam.',
  'Mutige Füchse probieren es noch einmal.',
  'Ein freundliches Wort macht den Wald heller.',
  'Heute sammeln wir Wissen wie bunte Blätter.',
  'Gemeinsam sind wir ein starkes Fuchsteam.',
  'Gute Ideen dürfen heute wachsen.',
  'Leise Ohren hören die spannendsten Dinge.'
];
function dailyForestQuote(){
  const settings={...defaults.dailyQuote,...(state.dailyQuote||{})};
  if(settings.mode==='fixed')return String(settings.fixed||'').trim()||defaults.dailyQuote.fixed;
  const custom=Array.isArray(settings.custom)?settings.custom.map(item=>String(item).trim()).filter(Boolean):[];
  const pool=settings.mode==='custom'&&custom.length?custom:DAILY_FOREST_QUOTES;
  const day=Math.floor(new Date(`${todayKey()}T06:00:00`).getTime()/86400000);
  return pool[Math.abs(day)%pool.length];
}
function applyClassWorld(){
  state.classWorld=state.classWorld||clone(defaults.classWorld);
  const theme=currentTheme();
  const app=document.querySelector('#app');
  if(app){app.dataset.theme=state.classWorld.theme||'forest';const c=customTheme();app.style.setProperty('--custom-accent',c.accent);app.style.setProperty('--custom-deep',c.deep);app.style.setProperty('--custom-sky',c.sky);app.style.setProperty('--custom-ground',c.ground);}
  /* NEXT 14.1 – Das Marken-Logo oben links bleibt immer das feste
     DigiBoard-Icon (echtes Bild), unabhängig vom gewählten Klassenthema.
     Nur die kontextbezogenen Maskottchen (Begrüßung etc.) folgen weiterhin
     dem Emoji des gewählten Themas. */
  /* NEXT 14.4 – Auch die Willkommens-Animation zeigt jetzt das feste
     DigiBoard-Logo statt eines Emojis, das je Klassenthema wechselte. */
  ['heroMascot'].forEach(id=>{const el=document.querySelector('#'+id);if(el)el.textContent=theme.mascot});
  const intro=document.querySelector('#introText');if(intro)intro.textContent=`Willkommen in der ${state.classWorld.className}!`;
  renderGreetingHeadline();
  const kicker=document.querySelector('.hero-kicker');if(kicker)kicker.textContent=dailyForestQuote();
  const kidsLabel=document.querySelector('#kidsAreaLabel');if(kidsLabel)kidsLabel.textContent=currentKidsAreaName();
  const kidsButton=document.querySelector('#openKidsDock');if(kidsButton)kidsButton.setAttribute('aria-label',`${currentKidsAreaName()} öffnen`);
  document.querySelectorAll('[data-theme-choice]').forEach(b=>b.classList.toggle('active',b.dataset.themeChoice===state.classWorld.theme));
}
function renderClassWorldSettings(){
  const n=document.querySelector('#classNameInput'),w=document.querySelector('#classWelcomeInput');
  if(n)n.value=state.classWorld?.className||defaults.classWorld.className;
  if(w)w.value=state.classWorld?.welcome||defaults.classWorld.welcome;
  const quote={...defaults.dailyQuote,...(state.dailyQuote||{})},quoteMode=document.querySelector('#dailyQuoteMode'),quoteFixed=document.querySelector('#dailyQuoteFixed'),quoteCustom=document.querySelector('#dailyQuoteCustom');
  if(quoteMode)quoteMode.value=quote.mode;if(quoteFixed)quoteFixed.value=quote.fixed||'';if(quoteCustom)quoteCustom.value=(quote.custom||[]).join('\n');updateDailyQuoteSettings();
  const kidsName=document.querySelector('#kidsAreaNameInput');if(kidsName)kidsName.value=currentKidsAreaName();
  const dailyTitle=document.querySelector('#dailyOverviewTitleInput');if(dailyTitle)dailyTitle.value=state.classWorld.dailyOverviewTitle||'Füchse im Blick';
  const seasonSelect=document.querySelector('#seasonPreviewSelect');if(seasonSelect)seasonSelect.value=state.seasonPreview||'auto';
  const c=customTheme();[['customMascotInput','mascot'],['customWorldLabelInput','label'],['customRewardTitleInput','rewardTitle'],['customRewardUnitInput','rewardUnit'],['customAccentInput','accent'],['customDeepInput','deep'],['customSkyInput','sky'],['customGroundInput','ground']].forEach(([id,key])=>{const el=document.querySelector('#'+id);if(el)el.value=c[key]||''});
  const pack=document.querySelector('#themePackTextarea');if(pack)pack.value=JSON.stringify(c,null,2);
  document.querySelectorAll('[data-theme-choice]').forEach(b=>b.classList.toggle('active',b.dataset.themeChoice===state.classWorld?.theme));
}
function chooseTheme(key){state.classWorld.theme=key;renderClassWorldSettings();applyClassWorld();renderDashboard()}
function updateDailyQuoteSettings(){
  const mode=document.querySelector('#dailyQuoteMode')?.value||state.dailyQuote?.mode||'auto';
  document.querySelector('.daily-quote-fixed')?.toggleAttribute('hidden',mode!=='fixed');
  document.querySelector('.daily-quote-list')?.toggleAttribute('hidden',mode!=='custom');
  const fixed=(document.querySelector('#dailyQuoteFixed')?.value||'').trim(),custom=(document.querySelector('#dailyQuoteCustom')?.value||'').split(/\n+/).map(item=>item.trim()).filter(Boolean);
  const day=Math.floor(new Date(`${todayKey()}T06:00:00`).getTime()/86400000),pool=mode==='custom'&&custom.length?custom:DAILY_FOREST_QUOTES;
  const quote=mode==='fixed'?(fixed||defaults.dailyQuote.fixed):pool[Math.abs(day)%pool.length];
  const preview=document.querySelector('#dailyQuotePreview');if(preview)preview.textContent=`Heute: „${quote}“`;
}

function exportThemePack(){
  const c=customTheme();const text=JSON.stringify(c,null,2);const area=document.querySelector('#themePackTextarea');if(area)area.value=text;
  navigator.clipboard?.writeText(text).then(()=>{const s=document.querySelector('#themePackStatus');if(s)s.textContent='Theme-Paket kopiert ✓'}).catch(()=>{});
}
function importThemePack(){
  const area=document.querySelector('#themePackTextarea'),status=document.querySelector('#themePackStatus');
  try{const data=JSON.parse(area.value);const allowed=['mascot','label','rewardTitle','rewardUnit','accent','deep','sky','ground'];const next=customTheme();allowed.forEach(k=>{if(typeof data[k]==='string'&&data[k].trim())next[k]=data[k].trim()});state.classWorld.customTheme=next;state.classWorld.theme='custom';saveState();renderClassWorldSettings();applyClassWorld();renderDashboard();if(status)status.textContent='Eigenes Theme übernommen ✓'}catch{if(status)status.textContent='Das Theme-Paket ist kein gültiges JSON.'}
}

function fitStage(){
  const app=document.querySelector('.app-shell');
  if(!app)return;
  const baseW=1440,baseH=810;
  const viewport=window.visualViewport;
  const viewportW=viewport?.width||document.documentElement.clientWidth;
  const viewportH=viewport?.height||document.documentElement.clientHeight;
  const edge=12;
  const scale=Math.min((viewportW-edge*2)/baseW,(viewportH-edge*2)/baseH);
  document.documentElement.style.setProperty('--stage-scale',String(scale));
}
const SEASONS=[
  {key:'spring',name:'Frühling',icon:'🌸'},
  {key:'summer',name:'Sommer',icon:'☀️'},
  {key:'autumn',name:'Herbst',icon:'🍂'},
  {key:'winter',name:'Winter',icon:'❄️'}
];
function automaticSeasonKey(){
  const m=new Date().getMonth()+1;
  if([3,4,5].includes(m))return 'spring';
  if([6,7,8].includes(m))return 'summer';
  if([9,10,11].includes(m))return 'autumn';
  return 'winter';
}
function updateSeason(){
  const key=state.seasonPreview||automaticSeasonKey();
  const season=SEASONS.find(x=>x.key===key)||SEASONS[0];
  const n=document.querySelector('#seasonName'),i=document.querySelector('#seasonIcon'),app=document.querySelector('#app');
  if(n)n.textContent=season.name;if(i)i.textContent=season.icon;
  if(app){app.dataset.season=season.key;app.classList.remove(...SEASONS.map(x=>'season-'+x.key));app.classList.add('season-'+season.key)}
}
function cycleSeason(){
  const current=state.seasonPreview||automaticSeasonKey();
  const index=SEASONS.findIndex(x=>x.key===current);
  state.seasonPreview=SEASONS[(index+1)%SEASONS.length].key;
  saveState();updateSeason();
}


function greetingMoment(date=new Date()){
  const hour=date.getHours();
  if(hour<11)return {key:'morning',headline:'Guten Morgen',label:'Morgengruß'};
  if(hour<14)return {key:'midday',headline:'Guten Tag',label:'Mittagsgruß'};
  if(hour<18)return {key:'afternoon',headline:'Schönen Nachmittag',label:'Nachmittagsgruß'};
  return {key:'evening',headline:'Guten Abend',label:'Abendgruß'};
}
function greeting(){return greetingMoment().headline}
function renderGreetingHeadline(){
  const h=document.querySelector('#greetingTitle');if(!h)return;
  h.innerHTML=`<span class="greeting-desktop-v1540"><span>${escapeHtml(greeting())},</span> <strong>${escapeHtml(greetingGroupName())}</strong><b aria-hidden="true">!</b></span><span class="greeting-mobile-v1540">${escapeHtml(greeting())}, ${escapeHtml(greetingGroupName())}!</span>`;
}
const DAILY_MESSAGES=[
  'Schön, dass ihr da seid!',
  'Heute wachsen wir gemeinsam.',
  'Jeder kleine Schritt zählt.',
  'Wir machen den Tag gemeinsam stark.',
  'Heute kann jeder etwas Besonderes schaffen.',
  'Gemeinsam sind wir eine starke Fuchsklasse.',
  'Seid neugierig, mutig und freundlich.'
];
function updateFoxMood(){
  const fox=document.querySelector('.hero-fox');if(!fox)return;
  const hour=new Date().getHours();
  const birthday=currentBirthdayDisplay();
  fox.textContent=birthday?'🦊🎈':hour<11?'🦊☀️':hour<14?'🦊🌿':'🦊🍂';
  fox.title=birthday?`Der Fuchs gratuliert ${birthday}!`:'Unser Klassenfuchs';
}
function currentSeason(){
  /* Meteorologische Jahreszeiten nach Monat – automatisch, ohne Pflege. */
  const m=new Date().getMonth()+1;
  if(m===12||m<=2)return 'winter';
  if(m<=5)return 'spring';
  if(m<=8)return 'summer';
  return 'autumn';
}
function updateHero(){
  const app=document.querySelector('#app'),moment=greetingMoment();
  if(app){
    app.classList.remove('time-morning','time-midday','time-afternoon','time-evening');app.classList.add(`time-${moment.key}`);
    app.classList.remove('season-spring','season-summer','season-autumn','season-winter');app.classList.add(`season-${currentSeason()}`);
  }
  renderGreetingHeadline();
  document.querySelector('#heroDate').textContent=new Date().toLocaleDateString('de-DE',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
  const kicker=document.querySelector('.hero-kicker');
  if(kicker)kicker.textContent=dailyForestQuote();
  renderMorningGreeting();updateFoxMood();renderAutomaticLesson();updateForestToolBelt();
}

function renderDashboard(){
  refreshSeasonParticles();
  dashboard.innerHTML='';
  const boardSwap=state.ui?.boardSwap;
  const wallCfg=state.widgets.find(w=>w.id==='wall');
  if(wallMount){
    wallMount.innerHTML='';
    wallMount.hidden=!!wallCfg?.hidden;
    if(!wallMount.hidden){
      renderWall(wallMount);
      if(wallMount.classList.contains('wall-expanded')){
        const close=document.createElement('button');close.type='button';close.className='wall-expanded-close';close.setAttribute('aria-label','Wall-of-Fame-Großansicht schließen');close.innerHTML='<span>←</span> Zurück zur Tafel';close.onclick=event=>{event.stopPropagation();setWallExpanded(false)};wallMount.append(close);
      }
    }
  }
  state.widgets.forEach(cfg=>{
    if(cfg.id==='wall')return;
    if(cfg.id==='meal' && boardSwap)return;
    if(cfg.hidden && cfg.id!==boardSwap)return;
    if(cfg.id==='birthday' && !currentBirthdayDisplay())return;
    const node=template.content.firstElementChild.cloneNode(true);node.dataset.id=cfg.id;node.classList.add(`size-${cfg.size}`);if(cfg.id===boardSwap)node.classList.add('dock-board-widget');node.querySelector('h2').textContent=cfg.id==='info'&&state.ui?.forestInfoTab==='pins'?'📌 Heute vorbereitet':cfg.title;
    node.querySelector('.widget-body').append(renderWidget(cfg.id));
    node.querySelectorAll('[data-action]').forEach(b=>b.addEventListener('click',e=>{e.stopPropagation();const action=b.dataset.action;if(action==='hide')hideWidget(cfg.id);else setSize(cfg.id,action)}));
    node.addEventListener('dragstart',()=>{dragId=cfg.id;node.classList.add('dragging')});
    node.addEventListener('dragend',()=>{dragId=null;document.querySelectorAll('.widget').forEach(x=>x.classList.remove('dragging','drop-target'))});
    node.addEventListener('dragover',e=>{e.preventDefault();if(dragId&&dragId!==cfg.id)node.classList.add('drop-target')});
    node.addEventListener('dragleave',()=>node.classList.remove('drop-target'));
    node.addEventListener('drop',e=>{e.preventDefault();node.classList.remove('drop-target');swapWidgets(dragId,cfg.id)});
    dashboard.append(node);
  });
  updateDockVisibility();
  updateForestToolBelt();
  renderBoardPresentation();
}
function activeBoardPins(){
  /* NEXT 13.0 – Der 📌-Reiter auf der Tafel zeigt jetzt beides:
     (1) den freigegebenen Unterricht und (2) alle heute ANGEPINNTEN
     Stunden aus dem Fundus aller Personen dieses Geräts. */
  const pins=[];
  const presentation=publicBoardPayload();
  if(presentation)pins.push({drawer:{name:presentation.subject||'Unterricht'},item:{title:presentation.title||presentation.subject,note:presentation.note||'',link:presentation.link||'',pinnedToday:true}});
  const seen=new Set(pins.map(p=>`${p.drawer.name}|${p.item.title}`));
  Object.entries(state.materials||{}).forEach(([personId,store])=>{
    const person=(state.teamMembers||[]).find(member=>member.id===personId);
    (store.drawers||[]).forEach(drawer=>(drawer.items||[]).filter(item=>item.pinnedToday).forEach(item=>{
      const key=`${drawer.name}|${item.title}`;if(seen.has(key))return;seen.add(key);
      pins.push({drawer:{name:person?`${drawer.name} · ${person.name}`:drawer.name},item});
    }));
  });
  return pins;
}
function publicBoardPayload(){
  const presentation=state.boardPresentation;if(!presentation||presentation.active===false)return null;
  return presentation;
}
function renderBoardPresentation(){
  const stage=document.querySelector('#boardLessonStage'),presentation=publicBoardPayload();if(!stage)return;
  stage.hidden=!presentation;document.body.classList.toggle('board-lesson-live',!!presentation);if(!presentation)return;
  document.querySelector('#boardLessonTeacherIcon').textContent=presentation.teacherIcon||'👩‍🏫';
  document.querySelector('#boardLessonTeacher').textContent=presentation.teacherName||'Lehrkraft';
  document.querySelector('#boardLessonIcon').textContent=presentation.subjectIcon||'📘';
  document.querySelector('#boardLessonSubject').textContent=presentation.subject||'Unterricht';
  document.querySelector('#boardLessonTitle').textContent=presentation.title||presentation.subject||'Unterricht';
  const note=document.querySelector('#boardLessonNote');note.textContent=presentation.note||'';note.hidden=!presentation.note;
  const open=document.querySelector('#boardLessonOpen'),link=normaliseMaterialLink(presentation.link);open.hidden=!link;if(link)open.href=link;
}
async function sendBoardPresentationRemote(presentation,{silent=false}={}){
  const config=state.remoteSync||{},status=document.querySelector('#boardSyncStatus');if(!config.enabled||!config.url||!config.classId||!config.key)return false;
  try{
    const response=await fetch(config.url,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify({action:'presentation',key:config.key,classId:config.classId,actor:presentation?.teacherName||'DigiBoard',presentation})});
    const result=await response.json();if(!result.ok)throw new Error(result.error||'Speichern fehlgeschlagen');state.remoteSync.lastRemoteUpdate=result.updatedAt||new Date().toISOString();saveState();if(status&&!silent)status.textContent='Handy und Tafel sind verbunden ✓';return true;
  }catch(error){if(status&&!silent)status.textContent='Verbindung fehlgeschlagen – Adresse, Klassenkennung und Schlüssel prüfen.';return false}
}
let boardPresentationFetchInFlight=false;
async function loadBoardPresentationRemote({silent=true}={}){
  /* NEXT 15.12 – Diese Abfrage lief bisher alle 5 Sekunden ohne jede
     Absicherung, ob die VORHERIGE Anfrage überhaupt schon fertig war. Bei
     wackeligem WLAN (typisch im Klassenzimmer) kann eine Anfrage mal
     deutlich länger als 5 Sekunden brauchen – dann stapelten sich
     nach und nach immer mehr gleichzeitige Anfragen übereinander, und die
     Seite wurde spürbar langsamer/hakeliger, bis sie kaum noch reagierte.
     Jetzt: nur eine Anfrage gleichzeitig, plus ein 8-Sekunden-Limit, damit
     eine hängende Anfrage nicht dauerhaft blockiert. */
  if(boardPresentationFetchInFlight)return false;
  const config=state.remoteSync||{},status=document.querySelector('#boardSyncStatus');if(!config.enabled||!config.url||!config.classId||!config.key)return false;
  boardPresentationFetchInFlight=true;
  try{
    const controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),8000);
    const separator=config.url.includes('?')?'&':'?',url=`${config.url}${separator}mode=presentation&classId=${encodeURIComponent(config.classId)}&key=${encodeURIComponent(config.key)}`,response=await fetch(url,{cache:'no-store',signal:controller.signal});
    clearTimeout(timeout);
    const result=await response.json();if(!result.ok)throw new Error(result.error||'Laden fehlgeschlagen');
    const remote=result.record;if(remote?.updatedAt&&remote.updatedAt!==state.remoteSync.lastRemoteUpdate){state.boardPresentation=remote.presentation||null;state.remoteSync.lastRemoteUpdate=remote.updatedAt;saveState();renderBoardPresentation();renderMobileBoardController()}
    if(status&&!silent)status.textContent='Verbindung erfolgreich – Tafelstatus geladen ✓';return true;
  }catch(error){if(status&&!silent)status.textContent='Keine Verbindung. Bitte die drei Angaben kontrollieren.';return false}
  finally{boardPresentationFetchInFlight=false}
}
/* NEXT 11.99 – Punkte online abgleichen, ohne Namen/Fotos zu übertragen.
   Es wandert nur eine Zahlen-Landkarte (studentId -> {green,yellow,red,direct})
   plus eine kurze, ebenfalls anonyme Ereignisliste (id, studentId, type,
   createdAt – KEINE Notiztexte, KEINE Namen) über dasselbe Google-Skript,
   das schon für die Tafel-Freigabe genutzt wird. Jedes Gerät übersetzt die
   studentId danach ausschließlich mit seiner eigenen, lokal gespeicherten
   Fuchsliste zurück in Namen/Fotos.
   Voraussetzung: Der Google-Apps-Script-Web-App-Code muss auf die Version
   mit dem 'points'-Endpunkt aktualisiert und NEU BEREITGESTELLT werden
   (google-sheets/Code.gs) – der alte Stand kennt diese Aktion noch nicht. */
let lastPointsPushAt=0;
function anonymizedPointsPayload(){
  const today=todayKey(),points={};
  Object.entries(state.points||{}).forEach(([key,counts])=>{
    if(!key.startsWith(`${today}:`))return; // nur die heutigen Zählungen abgleichen
    const id=key.slice(today.length+1);
    points[id]={green:counts.green||0,yellow:counts.yellow||0,red:counts.red||0,direct:counts.direct||0};
  });
  /* NEXT 12.8 – Ereignisse für „Heute im Blick“: nicht nur Beobachtungen,
     sondern auch die Punktvergaben selbst (aus pointHistory) anonym
     mitschicken (id, Kürzel, Art, Uhrzeit – KEINE Namen, KEINE Notizen).
     Vorher sah jedes Gerät im Feed nur seine eigenen Punktvergaben. */
  const incidentEvents=(state.teamIncidents||[]).filter(item=>(item.createdAt||'').slice(0,10)===today&&!item.demo).map(item=>({id:item.id,studentId:item.studentId,type:item.type,createdAt:item.createdAt}));
  const pointEvents=(state.pointHistory||[]).filter(entry=>(entry.createdAt||'').slice(0,10)===today).map(entry=>({id:entry.id,studentId:entry.studentId,type:entry.type==='yellow'?'warning':entry.type==='red'?'veto':'positive',createdAt:entry.createdAt}));
  const incidents=[...incidentEvents,...pointEvents].slice(0,120);
  return {points,incidents};
}
async function sendPointsRemote(){
  const config=state.remoteSync||{};if(!config.enabled||!config.url||!config.classId||!config.key)return false;
  const now=Date.now();if(now-lastPointsPushAt<1200)return false;lastPointsPushAt=now;
  try{
    const {points,incidents}=anonymizedPointsPayload();
    const controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),8000);
    const response=await fetch(config.url,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify({action:'points',key:config.key,classId:config.classId,actor:currentPointActor().id,points,incidents,resetStamp:state.pointsResetStamp||''}),signal:controller.signal});
    clearTimeout(timeout);
    const result=await response.json();if(!result.ok)throw new Error(result.error||'Speichern fehlgeschlagen');
    state.remoteSync.lastPointsPushAt=result.updatedAt||new Date().toISOString();saveState();return true;
  }catch(error){return false}
}
let pointsFetchInFlight=false;
async function loadPointsRemote(){
  if(pointsFetchInFlight)return false;
  const config=state.remoteSync||{};if(!config.enabled||!config.url||!config.classId||!config.key)return false;
  pointsFetchInFlight=true;
  try{
    const controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),8000);
    const separator=config.url.includes('?')?'&':'?',url=`${config.url}${separator}mode=points&classId=${encodeURIComponent(config.classId)}&key=${encodeURIComponent(config.key)}`,response=await fetch(url,{cache:'no-store',signal:controller.signal});
    clearTimeout(timeout);
    const result=await response.json();
    if(!result.ok)throw new Error(result.error||'Laden fehlgeschlagen');
    const remote=result.record;if(!remote?.updatedAt||remote.updatedAt===state.remoteSync.lastPointsSeenAt)return true;
    state.remoteSync.lastPointsSeenAt=remote.updatedAt;
    /* Hat ein anderes Gerät „Alles auf Null“ ausgelöst? Dann hier ebenfalls
       den heutigen Stand leeren, statt die (leeren) Remote-Zahlen nur teilweise
       zu übernehmen. Der resetStamp verhindert eine Endlosschleife. */
    const remoteReset=remote.data?.resetStamp||'';
    if(remoteReset&&remoteReset!==state.pointsResetStamp){
      state.pointsResetStamp=remoteReset;clearTodayPointsLocal();
      state.remoteSync.lastPointsSeenAt=remote.updatedAt;saveState();
      renderMobilePersonalHome();renderTeacherList();renderQuickPointsList();renderTeamCockpit();renderDashboard();
      return true;
    }
    const remotePoints=remote.data?.points||{},remoteIncidents=remote.data?.incidents||[];
    /* Nur bekannte, lokal vorhandene Füchse übernehmen – nie unbekannte IDs anlegen. */
    const knownIds=new Set(state.students.map(student=>student.id));
    let matched=0,unmatched=0;
    Object.entries(remotePoints).forEach(([id,counts])=>{if(!knownIds.has(id)){unmatched++;return}matched++;const key=pointKey(id);state.points[key]={green:counts.green||0,yellow:counts.yellow||0,red:counts.red||0,direct:counts.direct||0}});
    const diag=document.querySelector('#boardSyncStatus');
    if(diag&&(matched||unmatched)){diag.textContent=`Punkte empfangen: ${matched} Fuchs${matched===1?'':'er'} zugeordnet${unmatched?` · ⚠️ ${unmatched} nicht zuordenbar (unterschiedliche Fuchsliste – gleiches Backup laden!)`:' ✓'}`;}
    /* Ereignisse anderer Geräte für den Aktivitäten-Feed übernehmen, ohne die
       lokal reichhaltigen teamIncidents (mit Notiztext) zu überschreiben:
       eigener, separater Zwischenspeicher nur für die Handy-Startseite. */
    state.remoteIncidentsLite=remoteIncidents.filter(item=>knownIds.has(item.studentId));
    saveState();renderMobilePersonalHome();renderTeacherList();renderQuickPointsList();renderTeamCockpit();renderDashboard();
    return true;
  }catch(error){return false}
  finally{pointsFetchInFlight=false}
}
function clearTodayPointsLocal(){
  /* Leert nur die HEUTIGEN Tageswerte + Baumfortschritt + Tages-Beobachtungen.
     Füchse, Fotos, Fundus, Wochenplan usw. bleiben unberührt. */
  const today=todayKey();
  Object.keys(state.points||{}).forEach(key=>{if(key.startsWith(`${today}:`))delete state.points[key]});
  state.pointHistory=(state.pointHistory||[]).filter(entry=>(entry.createdAt||'').slice(0,10)!==today);
  state.teamIncidents=(state.teamIncidents||[]).filter(item=>(item.createdAt||'').slice(0,10)!==today);
  state.remoteIncidentsLite=[];
  state.publishedGreen=[];
  state.leafCount=0;state.leafAwards={};
}
function resetAllPointsEverywhere(){
  if(!confirm('Alle heutigen Punkte, Blätter und Beobachtungen auf 0 setzen?\n\nFüchse, Fotos und der Fundus bleiben erhalten. Ist die Live-Verbindung aktiv, werden auch Laptop und Tafel auf 0 gesetzt.'))return;
  clearTodayPointsLocal();
  state.pointsResetStamp=`r${Date.now()}`; // neuer Reset-Stempel für die anderen Geräte
  saveState();
  renderMobilePersonalHome();renderTeacherList();renderQuickPointsList();renderTeamCockpit();renderDashboard();renderPointHistory?.();
  lastPointsPushAt=0;sendPointsRemote();
  const status=document.querySelector('#resetPointsStatus');if(status)status.textContent='Alles auf 0 gesetzt ✓ – andere Geräte ziehen automatisch nach.';
}
function publishBoardPresentation(presentation){
  state.boardPresentation=presentation?{...presentation,active:true,publishedAt:new Date().toISOString()}:null;saveState();renderBoardPresentation();renderMobileBoardController();boardChannel?.postMessage({type:'presentation',presentation:state.boardPresentation});sendBoardPresentationRemote(state.boardPresentation,{silent:true});
}
function renderMobileBoardController(){
  const subject=document.querySelector('#mobileBoardSubject'),lesson=document.querySelector('#mobileBoardLesson'),preview=document.querySelector('#mobileBoardPreview');if(!subject||!lesson||!preview)return;
  const store=activeMaterialStore(),previousSubject=subject.value,previousLesson=lesson.value;
  subject.innerHTML=(store.drawers||[]).map((drawer,index)=>`<option value="${index}">${escapeHtml(drawer.name)}</option>`).join('');subject.value=previousSubject&&store.drawers[Number(previousSubject)]?previousSubject:'0';
  const drawer=store.drawers[Number(subject.value)]||store.drawers[0],items=drawer?.items||[];lesson.innerHTML=items.length?items.map(item=>`<option value="${escapeHtml(item.id)}">${escapeHtml(item.title)}</option>`).join(''):'<option value="">Ohne gespeicherte Vorbereitung</option>';if(items.some(item=>item.id===previousLesson))lesson.value=previousLesson;
  const item=items.find(candidate=>candidate.id===lesson.value)||items[0],person=activeWorkspacePerson(),style=subjectStyle(drawer?.name||'Unterricht',Number(subject.value)||0,drawer),live=publicBoardPayload();
  preview.innerHTML=`<span>${style.icon}</span><div><small>VORSCHAU · NUR ÖFFENTLICHER INHALT</small><strong>${escapeHtml(drawer?.name||'Unterricht')}</strong><p>${escapeHtml(item?.title||'Unterricht ohne Material')}${item?.note?` · ${escapeHtml(item.note)}`:''}</p><em>${escapeHtml(person.icon)} ${escapeHtml(person.name)}</em></div>`;
  const status=document.querySelector('#mobileBoardStatus'),privacy=document.querySelector('#mobileBoardPrivacy');if(status){status.textContent=live?'Auf Tafel':'Privat';status.classList.toggle('is-live',!!live)}if(privacy)privacy.textContent=live?'🟢 Dieser Unterricht ist gerade öffentlich sichtbar.':'🔒 Fuchsinformationen und Notizen bleiben privat.';
}
function publishMobileBoard(){
  const subjectIndex=Number(document.querySelector('#mobileBoardSubject')?.value)||0,store=activeMaterialStore(),drawer=store.drawers[subjectIndex]||store.drawers[0],lessonId=document.querySelector('#mobileBoardLesson')?.value,item=(drawer?.items||[]).find(candidate=>candidate.id===lessonId)||(drawer?.items||[])[0],person=activeWorkspacePerson(),style=subjectStyle(drawer?.name||'Unterricht',subjectIndex,drawer);
  publishBoardPresentation({teacherId:person.id,teacherName:person.name,teacherIcon:person.icon,subject:drawer?.name||'Unterricht',subjectIcon:style.icon,title:item?.title||drawer?.name||'Unterricht',note:item?.note||'',link:item?.link||''});
}
function updateDockVisibility(){
  const clockButton=document.querySelector('#clockDockButton');
  const clockVisible=!!document.querySelector('.dashboard>.widget[data-id="clock"]');
  if(clockButton)clockButton.hidden=clockVisible;
  document.querySelectorAll('[data-focus-widget]').forEach(button=>{
    const active=button.dataset.focusWidget==='wall'?!!wallMount?.classList.contains('wall-expanded'):button.dataset.focusWidget===state.ui?.boardSwap;
    button.classList.toggle('is-active',active);
    button.setAttribute('aria-pressed',String(active));
  });
}
function updateForestToolBelt(){
  const now=new Date(),lesson=automaticLessonInfo(now),activeCount=activeStudents().length;
  const heroCount=[...new Set(state.publishedGreen||[])].filter(id=>state.students.some(student=>student.id===id&&student.active!==false)).length;
  const achievedDays=[1,2,3,4,5].filter(day=>goalDayResult(day)==='achieved').length;
  const requiredDays=Number(state.content.weeklyGoal?.requiredDays)||4;
  const assignments=state.weeklyServices?.week===currentWeekKey()?state.weeklyServices.assignments||{}:{};
  const assignedServices=(state.services||[]).filter(service=>Array.isArray(assignments[service])&&assignments[service].length).length;
  const pinCount=activeBoardPins().length;
  const statuses={
    kids:`${activeCount} Füchse`,
    schedule:lesson.current?.subject||lesson.label||'Wochenplan',
    wall:`${heroCount} heute`,
    clock:now.toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'}),
    weeklyGoal:`${achievedDays}/${requiredDays} Tage`,
    services:`${assignedServices}/${(state.services||[]).length} besetzt`,
    notes:pinCount?`${pinCount} vorbereitet`:(state.content.taskNote?.title||'Heute'),
    cleanup:cleanupTimer?formatCountdown(cleanupRemaining):`${Number(state.content.cleanup?.duration)||90} Sek.`
  };
  document.querySelectorAll('.forest-tool-belt-v1521>button').forEach(button=>{
    const tool=button.dataset.forestTool||button.dataset.focusWidget,status=statuses[tool]||'';
    const statusNode=button.querySelector('.dock-status-v1531');if(statusNode)statusNode.textContent=status;
    button.classList.toggle('has-status',!!status);
    if(!button.dataset.baseAriaLabel)button.dataset.baseAriaLabel=button.getAttribute('aria-label')||button.textContent.trim();
    button.setAttribute('aria-label',status?`${button.dataset.baseAriaLabel} · ${status}`:button.dataset.baseAriaLabel);
    button.title=status?`${button.dataset.baseAriaLabel.replace(/ öffnen$/,'')} · ${status}`:button.dataset.baseAriaLabel;
  });
  /* NEXT 15.38 – Sichtbare Waldwerkzeuge erhalten fortlaufende, stabile
     Schnellzugriffe. Auf dem Mac oeffnet Wahltaste/Option + Zahl das Werkzeug,
     ohne dass die Tafel erst mit der Maus bedient werden muss. */
  const allToolButtons=[...document.querySelectorAll('.forest-tool-belt-v1521>button')];
  allToolButtons.forEach(button=>{delete button.dataset.forestShortcut;button.removeAttribute('aria-keyshortcuts')});
  const visibleButtons=allToolButtons.filter(button=>!button.hidden);
  visibleButtons.forEach((button,index)=>{
    const number=index+1;
    button.dataset.forestShortcut=String(number);
    button.setAttribute('aria-keyshortcuts',`Alt+${number}`);
    let hint=button.querySelector('.forest-tool-shortcut-v1538');
    if(!hint){hint=document.createElement('span');hint.className='forest-tool-shortcut-v1538';hint.setAttribute('aria-hidden','true');button.append(hint)}
    hint.textContent=`⌥${number}`;
    const status=button.querySelector('.dock-status-v1531')?.textContent||'';
    const base=button.dataset.baseAriaLabel||button.getAttribute('aria-label')||'Waldwerkzeug';
    button.title=`${base.replace(/ öffnen$/,'')}${status?` · ${status}`:''} · ⌥${number}`;
  });
}
function setBoardSwap(id){
  state.ui=state.ui||{};
  state.ui.boardSwap=state.ui.boardSwap===id?null:id;
  saveState();renderDashboard();
}
function renderWidget(id){const w=document.createElement('div');
  if(id==='clock'){w.className='analog-wrap';w.innerHTML=`<button type="button" class="railway-clock" aria-label="Analoguhr – Klassentimer öffnen" title="Klassentimer öffnen">${clockNumbers()}<div class="hand hour-hand"></div><div class="hand minute-hand"></div><div class="hand second-hand"></div><div class="clock-center"></div></button><div class="clock-date-outside"></div>`;w.querySelector('.railway-clock')?.addEventListener('click',openClassTimer);queueMicrotask(updateClock)}
  else if(id==='schedule'){
    const scheduleDate=nextSchoolDate();
    const schedule=getScheduleForDate(scheduleDate);
    const today=dateKeyLocal(scheduleDate)===dateKeyLocal(new Date());
    const activeIndex=today?currentLessonIndex(schedule):0;
    const active=schedule[activeIndex]||schedule[0];
    const next=schedule[activeIndex+1];
    const dayLabel=scheduleDate.toLocaleDateString('de-DE',{weekday:'long'});
    const toMinutes=value=>{const match=String(value||'').match(/(\d{1,2}):(\d{2})/);return match?Number(match[1])*60+Number(match[2]):0};
    const nowMinutes=new Date().getHours()*60+new Date().getMinutes();
    const startMinutes=toMinutes(active?.time);
    const endMinutes=next?toMinutes(next.time):startMinutes+45;
    const lessonProgress=today&&endMinutes>startMinutes?Math.max(0,Math.min(100,((nowMinutes-startMinutes)/(endMinutes-startMinutes))*100)):0;
    const statusBadge=row=>row?.status==='cancelled'?'<em class="lesson-badge cancelled">Ausfall</em>':row?.status==='changed'?'<em class="lesson-badge changed">Geändert</em>':'';
    const compactRows=schedule.slice(0,4).map((row,i)=>{
      const cls=[i===activeIndex?'active':'',row.status==='cancelled'?'lesson-cancelled':'',row.status==='changed'?'lesson-changed':''].filter(Boolean).join(' ');
      return `<div class="schedule-row ${cls}"><strong>${escapeHtml(row.time)}</strong><span>${escapeHtml(row.subject)}${statusBadge(row)}</span><small>${escapeHtml(row.person)}</small></div>`;
    }).join('');
    w.innerHTML=`<div class="schedule-overview"><div class="schedule-now"><small>${today?'Jetzt':'Als Nächstes · '+dayLabel}</small><strong>${escapeHtml(active?.subject||'Noch kein Fach')}</strong><span>${escapeHtml(active?.time||'')} · ${escapeHtml(active?.person||'')}</span>${statusBadge(active)}<div class="lesson-progress" aria-label="Fortschritt der aktuellen Stunde"><span style="width:${lessonProgress}%"></span></div></div>${next?`<div class="schedule-next"><small>Danach</small><strong>${escapeHtml(next.subject)}</strong><span>${escapeHtml(next.time)}</span></div>`:''}</div><div class="schedule-list">${compactRows}</div><button class="inline-more" type="button">Ganzer Plan</button>${state.ui?.boardSwap==='schedule'?'<button class="board-return-button" type="button">↩ Essen zurückholen</button>':''}`;
    queueMicrotask(()=>w.querySelector('.board-return-button')?.addEventListener('click',()=>setBoardSwap('schedule')));
  }
  else if(id==='weeklyGoal')renderWeeklyGoal(w);
  else if(id==='notes'){
    const note={...defaults.content.taskNote,...(state.content.taskNote||{})};
    w.className='task-note-view';w.style.cssText=taskColorTheme(note.color||'blue');
    w.innerHTML=`<div class="task-note-display">
      <div class="task-note-pin" aria-hidden="true">📌</div><p>Das ist jetzt zu tun</p><h3>${escapeHtml(note.title||'Aufgabe')}</h3>
      <div class="task-note-command">${escapeHtml(note.task||'Noch keine Aufgabe eingetragen.')}</div>
      ${note.hint?`<aside><span>💡</span><div><small>Tipp</small><strong>${escapeHtml(note.hint)}</strong></div></aside>`:''}
      <div class="task-note-display-actions"><button class="task-note-edit-button" type="button">✏️ Schnell ändern</button>${state.ui?.boardSwap==='notes'?'<button class="task-note-done-button" type="button">✓ Erledigt</button>':'<button class="task-note-show-button" type="button">✓ Auf der Tafel zeigen</button>'}</div>
    </div>
    <div class="task-note-editor" hidden>
      <p>Aufgabe direkt ändern</p>
      <label>Titel<input data-task-field="title" type="text" value="${escapeHtml(note.title||'')}"></label>
      <label>Was ist zu tun?<textarea data-task-field="task" rows="4">${escapeHtml(note.task||'')}</textarea></label>
      <label>Tipp <small>(optional)</small><input data-task-field="hint" type="text" value="${escapeHtml(note.hint||'')}"></label>
      <div class="task-note-editor-actions"><button class="task-note-save-button" type="button">✓ Bestätigen & auf der Tafel zeigen</button><button class="task-note-cancel-button" type="button">Abbrechen</button></div>
    </div>`;
    queueMicrotask(()=>{
      const display=w.querySelector('.task-note-display'),editor=w.querySelector('.task-note-editor');
      const showEditor=()=>{display.hidden=true;editor.hidden=false;editor.querySelector('[data-task-field="title"]')?.focus()};
      const hideEditor=()=>{editor.hidden=true;display.hidden=false};
      w.querySelector('.task-note-edit-button')?.addEventListener('click',showEditor);
      w.querySelector('.task-note-show-button')?.addEventListener('click',()=>{state.ui=state.ui||{};state.ui.boardSwap='notes';saveState();if(widgetFocusDialog?.open)widgetFocusDialog.close();renderDashboard()});
      w.querySelector('.task-note-done-button')?.addEventListener('click',()=>setBoardSwap('notes'));
      w.querySelector('.task-note-cancel-button')?.addEventListener('click',hideEditor);
      w.querySelector('.task-note-save-button')?.addEventListener('click',()=>{
        state.content.taskNote={title:w.querySelector('[data-task-field="title"]').value.trim(),task:w.querySelector('[data-task-field="task"]').value.trim(),hint:w.querySelector('[data-task-field="hint"]').value.trim(),color:note.color||'blue'};
        state.ui=state.ui||{};state.ui.boardSwap='notes';saveState();
        if(widgetFocusDialog?.open)widgetFocusDialog.close();
        renderDashboard();
      });
    });
  }
  else if(id==='wall')renderWall(w);
  else if(id==='meal'){
    const m=mealForDate(new Date());
    const dessertDays=[2,4,5];
    const hasDessert=dessertDays.includes(new Date().getDay()) && (m.dessert||'').trim();
    const expanded=!!state.ui?.mealExpanded;
    w.innerHTML=`<button class="meal-peek ${expanded?'is-expanded':''}" type="button" aria-expanded="${expanded}">
      <span class="meal-peek-icon">🍽️</span>
      <span class="meal-peek-copy"><small>Waldcafé</small><strong>${escapeHtml(m.title||'Essen heute')}</strong><em>${escapeHtml(m.detail||'')}</em></span>
      <span class="meal-peek-action">${expanded?'−':'＋'}</span>
    </button>
    <div class="meal-daily-preview"><small>Heute auf dem Teller</small><strong>${escapeHtml(m.title||'Essen heute')}</strong><span>${escapeHtml(m.detail||'')}</span>${hasDessert?`<em>🍮 ${escapeHtml(m.dessert)}</em>`:'<em>🍓 Nachtisch an Di, Do und Fr</em>'}</div>
    ${expanded?`<div class="meal-expanded-panel"><div><small>Heute gibt es</small><strong>${escapeHtml(m.title)}</strong><span>${escapeHtml(m.detail)}</span></div>${hasDessert?`<div class="dessert-today"><span>🍮</span><p><small>Nachtisch heute</small><strong>${escapeHtml(m.dessert)}</strong></p></div>`:`<div class="dessert-days">🍓 Nachtisch gibt es dienstags, donnerstags und freitags.</div>`}</div>`:''}`;
    queueMicrotask(()=>{const b=w.querySelector('.meal-peek');if(b)b.onclick=()=>{state.ui=state.ui||{};state.ui.mealExpanded=!state.ui.mealExpanded;saveState();renderDashboard();}});
  }
  else if(id==='birthday'){const name=currentBirthdayDisplay();w.innerHTML=name?`<div class="birthday birthday-celebration"><div class="birthday-confetti" aria-hidden="true">✨ 🎉 ✨</div><p>Heute feiern wir</p><div class="avatar">${escapeHtml(initials(name))}</div><h3>${escapeHtml(name)}</h3><strong>Herzlichen Glückwunsch! 🎂</strong><div class="birthday-ribbons" aria-hidden="true"><span></span><span></span><span></span></div></div>`:`<div class="birthday-empty">Heute hat niemand Geburtstag.</div>`;}
  else if(id==='info'){
    const pins=activeBoardPins(),activeTab=state.ui?.forestInfoTab==='pins'?'pins':'info';
    w.dataset.count=String(activeTab==='pins'?pins.length:state.content.infos.length);
    const tabs=`<div class="forest-info-tabs" role="tablist" aria-label="Waldtafel wechseln"><button type="button" data-forest-info-tab="info" class="${activeTab==='info'?'active':''}" aria-pressed="${activeTab==='info'}">📣 Tagesinfos</button><button type="button" data-forest-info-tab="pins" class="${activeTab==='pins'?'active':''}" aria-pressed="${activeTab==='pins'}">📌 Unterricht${pins.length?` <b>${pins.length}</b>`:''}</button></div>`;
    const infoRows=state.content.infos.map((item,i)=>`<div class="info-row styled-info-row ${i>2?'hidden-by-size':''}" style="${infoRowStyle(item)}"><span>${escapeHtml(item.left)}</span><strong style="font-weight:${item.bold===false?'500':'900'}">${escapeHtml(item.right)}</strong></div>`).join('\n');
    const pinRows=pins.length?pins.slice(0,4).map(({drawer,item})=>{const link=normaliseMaterialLink(item.link),tag=link?'a':'div';return `<${tag} class="forest-lesson-pin${link?' has-link':''}"${link?` href="${escapeHtml(link)}" target="_blank" rel="noopener"`:''}><span class="forest-pin-leaf">🍃</span><span><small>${escapeHtml(drawer.name)}</small><strong>${escapeHtml(item.title||drawer.name)}</strong></span><b>${link?'Öffnen ↗':'Vorbereitet'}</b></${tag}>`}).join(''):'<div class="forest-pins-empty"><span>🦉</span><strong>Noch nichts vorbereitet</strong><small>Angeheftete Stunden erscheinen hier automatisch.</small></div>';
    w.innerHTML=`${tabs}<div class="forest-info-content">${activeTab==='pins'?pinRows:infoRows}</div>`;
    queueMicrotask(()=>w.querySelectorAll('[data-forest-info-tab]').forEach(button=>button.onclick=()=>{state.ui=state.ui||{};state.ui.forestInfoTab=button.dataset.forestInfoTab;saveState();renderDashboard()}));
  }
  else if(id==='kids'){w.innerHTML=`<div class="quick-actions"><button class="primary-button" data-open-kids>Kinderbereich öffnen</button></div>`;queueMicrotask(()=>{w.querySelector('[data-open-kids]').onclick=openKids})}
  return w;
}
function clockNumbers(){return Array.from({length:12},(_,i)=>`<div class="clock-number" style="--n:${i+1}"><span>${i+1}</span></div>`).join('')}
function clockMarks(){return Array.from({length:60},(_,i)=>`<i class="clock-mark ${i%5===0?'major':''}" style="--m:${i}"></i>`).join('')}
function updateClock(){const d=new Date(),sec=d.getSeconds(),min=d.getMinutes()+sec/60,hr=(d.getHours()%12)+min/60;document.querySelectorAll('.second-hand').forEach(x=>x.style.transform=`translateX(-50%) rotate(${sec*6}deg)`);document.querySelectorAll('.minute-hand').forEach(x=>x.style.transform=`translateX(-50%) rotate(${min*6}deg)`);document.querySelectorAll('.hour-hand').forEach(x=>x.style.transform=`translateX(-50%) rotate(${hr*30}deg)`);document.querySelectorAll('.clock-date-outside').forEach(dt=>dt.textContent=d.toLocaleDateString('de-DE',{weekday:'short',day:'2-digit',month:'short'}))}
function rewardChestStatus(){
  const settings={...defaults.rewardChest,...(state.rewardChest||{})};
  const activeIds=new Set(activeStudents().map(student=>student.id));
  const childrenInTree=[...new Set(state.publishedGreen||[])].filter(id=>activeIds.has(id)).length;
  const allMode=settings.mode==='all';
  const current=allMode?childrenInTree:state.leafCount;
  const target=allMode?Math.max(1,activeStudents().length):Math.max(10,Number(settings.threshold)||300);
  const open=current>=target;
  const remaining=Math.max(0,target-current);
  return {open,remaining,progress:Math.min(100,Math.round(current/target*100)),counter:allMode?`${current} / ${target} Füchse`:`${current} / ${target}`,message:open?'Geschafft – die Schatztruhe ist offen! 🎉':allMode?'Wenn alle Füchse dabei sind, öffnet sich die Truhe.':`Bei ${target} Blättern öffnet sich die Schatztruhe.`};
}
function dailyForestVisitor(){
  const visitors=[
    {emoji:'🦉',name:'Waldeule',message:'Die Eule erinnert euch: Genau hinschauen macht klug.',position:'perch-left'},
    {emoji:'🐿️',name:'Eichhörnchen',message:'Das Eichhörnchen sammelt Schritt für Schritt – genau wie ihr eure Blätter.',position:'trunk-right'},
    {emoji:'🐦',name:'Waldvogel',message:'Der Waldvogel zwitschert: Gemeinsam klingt der Unterricht am schönsten.',position:'branch-left'},
    {emoji:'🦔',name:'Igel',message:'Der Igel sagt: Auch kleine Schritte bringen euch sicher ans Ziel.',position:'ground-left'},
    {emoji:'🦋',name:'Waldschmetterling',message:'Der Schmetterling entdeckt heute etwas Neues – ihr vielleicht auch?',position:'crown-right'},
    {emoji:'🐇',name:'Waldhase',message:'Der Waldhase hört gut zu und ist bereit für den nächsten Lernsprung.',position:'ground-right'}
  ];
  /* NEXT 13.1 – Seltene goldene Gäste: Etwa an jedem siebten Tag schaut ein
     besonderer Besucher vorbei (golden schimmernd). Die Füchse entdecken das
     von selbst – kleine Überraschung ohne Einstellung. */
  const rareVisitors=[
    {emoji:'🦌',name:'Goldener Hirsch',message:'Der goldene Hirsch zeigt sich nur Klassen, die gut zusammenhalten. Heute euch!',position:'ground-right',rare:true},
    {emoji:'🦢',name:'Silberschwan',message:'Der Silberschwan bringt einen ruhigen, konzentrierten Tag mit.',position:'ground-left',rare:true},
    {emoji:'🦩',name:'Wunderflamingo',message:'Der Wunderflamingo hat sich in den Wald verirrt – was für ein seltener Gast!',position:'ground-right',rare:true},
    {emoji:'🐢',name:'Uralte Waldschildkröte',message:'Die uralte Schildkröte flüstert: Wer geduldig lernt, kommt am weitesten.',position:'ground-left',rare:true}
  ];
  const day=Math.floor(new Date().setHours(0,0,0,0)/86400000);
  if(Math.abs(day)%7===3)return rareVisitors[Math.abs(day)%rareVisitors.length];
  return visitors[Math.abs(day)%visitors.length];
}
function forestDiscoveryCount(){
  const visitor=state.ui?.forestVisitorFound===todayKey()?1:0,lucky=state.ui?.luckyLeafFound===todayKey()?1:0,secrets=(state.ui?.forestSecrets?.[todayKey()]||[]).length;
  return Math.min(5,visitor+lucky+secrets);
}
function updateForestDiscoveryCount(root=document){
  root.querySelectorAll?.('[data-forest-discovery-count]').forEach(node=>node.textContent=`${forestDiscoveryCount()} von 5`);
}
function renderWall(c){
  const chest=rewardChestStatus();
  const visitor=dailyForestVisitor();
  const activeIds=new Set(activeStudents().map(student=>student.id));
  /* 15.31 – Wiederholtes Veröffentlichen darf denselben Fuchs nicht doppelt
     in den Baum setzen. Pausierte Einträge werden ebenfalls ausgeblendet. */
  const publishedHeroes=[...new Set(state.publishedGreen||[])].filter(id=>activeIds.has(id));
  const heroCount=Math.min(25,publishedHeroes.length);
  const growthLevel=Math.min(4,Math.floor(state.leafCount/100)),growthNames=['Junger Baum','Kräftige Krone','Blätterdach','Blühender Baum','Goldener Waldbaum'];
  const nextGrowthTarget=growthLevel<4?(growthLevel+1)*100:null;
  const growthRemaining=nextGrowthTarget?Math.max(0,nextGrowthTarget-state.leafCount):0;
  const forestPhase=chest.open?'celebration':chest.progress>=75?'sunlit':chest.progress>=40?'growing':'quiet';
  const visitorFound=state.ui?.forestVisitorFound===todayKey();
  const luckyLeafFound=state.ui?.luckyLeafFound===todayKey();
  const discoveryCount=forestDiscoveryCount();
  const growthIcons=['🌱','🌿','🌳','🌸','🌟'];
  const growthTrail=growthNames.map((name,index)=>{
    const threshold=index*100,complete=state.leafCount>=threshold,current=index===growthLevel;
    return `<li class="${complete?'is-complete':''} ${current?'is-current':''}"><span>${growthIcons[index]}</span><strong>${escapeHtml(name)}</strong><small>${threshold?`${threshold} Blätter`:'Start'}</small></li>`;
  }).join('');
  const stage=document.createElement('div');
  stage.className=`wall-stage wall-tree-stage wall-v22 forest-phase-${forestPhase}`;
  stage.dataset.growthLevel=String(growthLevel);
  stage.innerHTML=`
    <div class="wall-title-v22"><span>🏆</span><div><strong>${escapeHtml(currentTheme().rewardTitle)}</strong><small>Stufe ${growthLevel+1} · ${growthNames[growthLevel]}${growthLevel>=4?' · höchste Stufe erreicht':` · noch ${growthRemaining} Blätter bis „${growthNames[growthLevel+1]}“`}</small></div><div class="tree-title-actions-v1538"><button class="tree-focus-button-v1538" type="button" aria-label="Klassenbaum groß öffnen"><span aria-hidden="true">⛶</span><b>Groß</b></button><button class="forest-map-button-v1534" type="button" aria-expanded="false"><span>🗺️</span> Waldkarte</button></div></div>
    <section class="forest-map-panel-v1534" hidden aria-label="Waldfortschritt">
      <header><div><small>UNSER GEMEINSAMER WEG</small><strong>Die Waldkarte</strong><p>Hier seht ihr Baumstufe, Tagesstand und eure Entdeckungen auf einen Blick.</p></div><button class="forest-map-close-v1534" type="button" aria-label="Waldkarte schließen">×</button></header>
      <ol class="forest-growth-trail-v1534">${growthTrail}</ol>
      <div class="forest-map-stats-v1534">
        <article><span>🍃</span><div><small>BLÄTTER</small><strong>${state.leafCount}</strong><p>${growthLevel>=4?'Höchste Baumstufe erreicht':`Noch ${growthRemaining} bis zur nächsten Stufe`}</p></div></article>
        <article><span>🦊</span><div><small>HEUTE IM BAUM</small><strong>${heroCount} von ${activeIds.size}</strong><p>${heroCount===activeIds.size&&activeIds.size?'Alle Füchse sind dabei!':'Der Baum füllt sich im Laufe des Tages.'}</p></div></article>
        <article><span>✨</span><div><small>HEUTE ENTDECKT</small><strong data-forest-discovery-count>${discoveryCount} von 5</strong><p>Waldgast, Glücksblatt und drei Geheimnisse</p></div></article>
      </div>
      <footer><span>${chest.open?'🎁':'🧰'}</span><div><strong>${chest.open?'Die Schatztruhe ist offen!':escapeHtml(chest.counter)}</strong><small>${escapeHtml(chest.message)}</small></div></footer>
    </section>
    <div class="tree-scene-v22 growth-${Math.min(4,Math.floor(state.leafCount/100))}" aria-label="Klassenbaum mit ${heroCount} Waldheldinnen und Waldhelden">
      <div class="tree-clearing-light-v1542" aria-hidden="true"><i></i><i></i><i></i></div>
      <div class="tree-depth-pines-v1542" aria-hidden="true">
        <i class="depth-pine-a-v1542"></i><i class="depth-pine-b-v1542"></i><i class="depth-pine-c-v1542"></i>
        <i class="depth-pine-d-v1542"></i><i class="depth-pine-e-v1542"></i><i class="depth-pine-f-v1542"></i>
      </div>
      <div class="tree-background-grove-v1539" aria-hidden="true">
        <i class="grove-tree-v1539 grove-left-far-v1539"></i>
        <i class="grove-tree-v1539 grove-left-v1539"></i>
        <i class="grove-tree-v1539 grove-center-v1539"></i>
        <i class="grove-tree-v1539 grove-right-v1539"></i>
        <i class="grove-tree-v1539 grove-right-far-v1539"></i>
      </div>
      <div class="tree-glow-v80"></div>
      <div class="tree-main-image-v1539" aria-hidden="true"></div>
      <div class="tree-canopy-light-v1542" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
      <div class="tree-season-details-v1539" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></div>
      <div class="tree-growth-atmosphere-v1538" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
      <div class="tree-growth-badge-v1184"><span>${growthLevel>=4?'🌟':'🌱'}</span><div><small>${growthLevel>=4?'HÖCHSTE BAUMSTUFE':`NÄCHSTES ZIEL · ${nextGrowthTarget} BLÄTTER`}</small><strong>${growthLevel>=4?'Unser Waldbaum strahlt':`${growthRemaining} fehlen bis „${growthNames[growthLevel+1]}“`}</strong></div></div>
      <div class="tree-today-badge-v1531" aria-live="polite"><span>🦊</span><div><strong>${heroCount} von ${activeIds.size}</strong><small>heute im Klassenbaum</small></div></div>
      <div class="tree-shadow-v22"></div>
      <div class="tree-roots-v80"><i></i><i></i><i></i></div>
      <div class="tree-trunk-v22"></div>
      <div class="tree-branch-v22 branch-a"></div>
      <div class="tree-branch-v22 branch-b"></div>
      <div class="tree-branch-v22 branch-c"></div>
      <div class="tree-branch-v22 branch-d"></div>
      <div class="tree-crown-v22">
        ${Array.from({length:26},(_,i)=>`<span class="leaf-blob-v22 leaf-${i+1}"></span>`).join('')}
        ${Array.from({length:Math.min(18,Math.max(4,Math.floor(state.leafCount/20)))},(_,i)=>`<span class="living-leaf-v80 living-${i+1}">🍃</span>`).join('')}
        ${state.leafCount>=300?'<span class="tree-blossom-v80 b1">🌸</span><span class="tree-blossom-v80 b2">🌼</span><span class="tree-blossom-v80 b3">🌸</span>':''}
        ${state.leafCount>=500?'<span class="golden-acorn-v80">🌰</span>':''}
        <span class="leaf-cluster-v82 cluster-a"></span><span class="leaf-cluster-v82 cluster-b"></span><span class="leaf-cluster-v82 cluster-c"></span>
        <span class="tree-acorn-v82 acorn-a">🌰</span><span class="tree-acorn-v82 acorn-b">🌰</span><span class="tree-acorn-v82 acorn-c">🌰</span>
        <span class="friendly-blossom-v93 fb1">✿</span><span class="friendly-blossom-v93 fb2">✿</span><span class="friendly-blossom-v93 fb3">✿</span><span class="friendly-blossom-v93 fb4">✿</span><span class="friendly-blossom-v93 fb5">✿</span><span class="friendly-blossom-v93 fb6">✿</span>
        <span class="friendly-sparkle-v93 fs1"></span><span class="friendly-sparkle-v93 fs2"></span><span class="friendly-sparkle-v93 fs3"></span>
      </div>
      <div class="tree-crown-fill-v100" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div class="tree-portraits-v22"></div>
      <div class="tree-nest-v82"><span>🪺</span><i></i></div>
      <div class="tree-friends-v80"><span class="branch-bird-v80">🐦</span><span class="branch-squirrel-v80">🐿️</span></div>
      <div class="tree-meadow-v1542" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><span></span><span></span></div>
      <div class="tree-floor-v1538" aria-hidden="true"><i class="floor-fern-a"></i><i class="floor-fern-b"></i><span class="floor-flower-a">✿</span><span class="floor-flower-b">✿</span><span class="floor-stone"></span></div>
      <button class="forest-visitor-v1187 ${visitor.position} ${visitor.rare?'is-rare':''} ${visitorFound?'is-found':''}" type="button" aria-label="${escapeHtml(visitor.name)} entdecken" title="${escapeHtml(visitor.name)}"><span>${visitor.emoji}</span><i>${visitor.rare?'✨':'?'}</i></button>
      ${luckyLeafFound?'':'<button class="lucky-leaf-v131" type="button" aria-label="Glücksblatt entdecken" title="Was glitzert denn da?">🍀</button>'}
      <div class="sun-dapple-v82 dapple-a"></div><div class="sun-dapple-v82 dapple-b"></div>
    </div>
    <div class="tree-footer-v22" style="--reward-progress:${chest.progress}" data-progress="${chest.progress}">
      <div class="leaf-counter-v22"><span>🍃</span><div><em>UNSERE SCHATZTRUHE</em><strong>${escapeHtml(chest.counter)}</strong><small>${escapeHtml(chest.message)}</small></div></div>
      <div class="reward-journey-v1179"><div class="progress-v22" role="progressbar" aria-label="Belohnungsfortschritt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${chest.progress}"><span style="width:${chest.progress}%"></span><i class="reward-marker marker-one" title="Erster Waldstein"></i><i class="reward-marker marker-two" title="Halber Weg"></i><i class="reward-marker marker-three" title="Fast geschafft"></i><b class="reward-progress-label-v1186">${chest.progress}%</b></div><small>${chest.open?'Ziel erreicht – Truhe antippen!':`Noch ${chest.remaining} ${state.rewardChest?.mode==='all'?'Füchse':'Blätter'} bis zur Truhe`}</small><div class="forest-milestones-v1531" aria-hidden="true"><span>Start</span><span>Halber Weg</span><span>Ziel</span></div></div>
      <button class="reward-chest ${chest.open?'is-open':''}" type="button" aria-label="${chest.open?'Geöffnete Schatztruhe – Belohnung feiern':'Geschlossene Schatztruhe – Fortschritt anzeigen'}"><i></i><b>✨</b></button>
    </div>`;

  const grid=stage.querySelector('.tree-portraits-v22');
  grid.dataset.count=heroCount;
  grid.style.setProperty('--tree-avatar-base',heroCount>20?'46px':heroCount>12?'52px':heroCount>7?'57px':heroCount>3?'62px':'68px');
  grid.classList.toggle('is-dense',heroCount>12);
  grid.classList.toggle('is-full',heroCount>20);
  const organicPresets={
    1:[[50,30]],
    2:[[36,31],[65,38]],
    3:[[50,15],[28,43],[72,45]],
    4:[[29,22],[69,20],[25,55],[72,55]],
    5:[[24,23],[51,13],[77,29],[65,59],[29,58]],
    6:[[20,20],[49,12],[78,23],[82,55],[54,64],[21,58]],
    7:[[18,18],[43,10],[69,15],[84,39],[73,64],[44,67],[16,48]]
  };
  const fullSlots=[
    [34,12],[50,9],[66,12],[20,25],[35,23],[50,22],[65,23],[80,25],
    [12,39],[27,37],[42,36],[57,36],[72,37],[87,39],[15,53],[30,52],
    [45,51],[60,51],[75,52],[88,54],[23,68],[38,67],[53,66],[68,67],[82,69]
  ];
  const slots=organicPresets[heroCount]||fullSlots;
  publishedHeroes.slice(0,25).forEach((id,i)=>{
    const student=state.students.find(x=>x.id===id);if(!student)return;
    const [left,top]=slots[i];
    const card=document.createElement('button');
    card.type='button';
    card.className='child-card-v22';
    card.style.left=left+'%';card.style.top=top+'%';
    card.style.setProperty('--tree-x',left+'%');card.style.setProperty('--tree-y',top+'%');
    card.title=student.name;
    card.setAttribute('aria-label',student.name+' – Waldheld oder Waldheldin');
    card.setAttribute('aria-expanded','false');
    if(i===state.heroIndex%Math.max(1,heroCount))card.classList.add('hero-child');
    card.innerHTML=`<span class="badge-v22">${card.classList.contains('hero-child')?'👑':'🍃'}</span><div class="avatar-v22">${studentPhotoMarkup(student,'portrait-photo')}</div><strong>${escapeHtml(student.name)}</strong><small class="tree-child-state-v1531">Heute im Baum ✓</small>`;
    card.onclick=()=>{
      grid.querySelectorAll('.child-card-v22.is-open').forEach(x=>{if(x!==card){x.classList.remove('is-open');x.setAttribute('aria-expanded','false')}});
      card.classList.toggle('is-open');
      card.setAttribute('aria-expanded',String(card.classList.contains('is-open')));
    };
    grid.append(card);
  });
  if(!heroCount){
    const empty=document.createElement('div');empty.className='empty-tree-v22';empty.innerHTML='<span>🌱</span><strong>Der Baum wartet auf seine Waldhelden.</strong><small>Nach der Veröffentlichung erscheinen die Füchse hier.</small>';stage.querySelector('.tree-scene-v22').append(empty);
  }
  const mapButton=stage.querySelector('.forest-map-button-v1534'),mapPanel=stage.querySelector('.forest-map-panel-v1534'),mapClose=stage.querySelector('.forest-map-close-v1534');
  stage.querySelector('.tree-focus-button-v1538')?.addEventListener('click',()=>setWallExpanded(true));
  const setMapOpen=open=>{if(!mapPanel||!mapButton)return;mapPanel.hidden=!open;mapButton.setAttribute('aria-expanded',String(open));stage.classList.toggle('forest-map-open-v1534',open);if(open)mapClose?.focus()};
  mapButton?.addEventListener('click',()=>setMapOpen(mapPanel?.hidden));
  mapClose?.addEventListener('click',()=>{setMapOpen(false);mapButton?.focus()});
  mapPanel?.addEventListener('keydown',event=>{if(event.key==='Escape'){event.preventDefault();setMapOpen(false);mapButton?.focus()}});
  stage.querySelector('.reward-chest')?.addEventListener('click',()=>{
    stage.querySelector('.forest-reward-toast-v1184')?.remove();
    const toast=document.createElement('div');toast.className=`forest-reward-toast-v1184 ${chest.open?'is-success':''}`;
    toast.innerHTML=chest.open?'<span>🎉</span><div><strong>Schatztruhe geschafft!</strong><small>Zeit für eure gemeinsame Klassenbelohnung.</small></div>':`<span>🍃</span><div><strong>${escapeHtml(chest.counter)} gesammelt</strong><small>Noch ${chest.remaining} ${state.rewardChest?.mode==='all'?'Füchse':'Blätter'} – ihr seid auf dem Weg!</small></div>`;
    stage.append(toast);if(chest.open){launchChestCeremony();}else{}setTimeout(()=>toast.remove(),4200);
  });
  stage.querySelector('.lucky-leaf-v131')?.addEventListener('click',event=>{
    event.stopPropagation();
    state.ui=state.ui||{};state.ui.luckyLeafFound=todayKey();saveState();
    updateForestDiscoveryCount(stage);
    launchForestCelebration?.();
    const cheer=document.createElement('div');cheer.className='lucky-leaf-cheer-v131';cheer.innerHTML='<span>🍀</span><div><strong>Glücksblatt gefunden!</strong><small>Heute wird ein guter Tag im Klassenwald.</small></div>';
    stage.append(cheer);setTimeout(()=>cheer.remove(),6000);
    event.currentTarget.remove();
  });
  stage.querySelector('.forest-visitor-v1187')?.addEventListener('click',event=>{
    event.currentTarget.classList.add('is-found');
    state.ui=state.ui||{};state.ui.forestVisitorFound=todayKey();saveState();
    updateForestDiscoveryCount(stage);
    stage.querySelector('.forest-discovery-v1187')?.remove();
    const discovery=document.createElement('div');discovery.className='forest-discovery-v1187';
    discovery.innerHTML=`<span>${visitor.emoji}</span><div><small>HEUTIGER WALDGAST</small><strong>${escapeHtml(visitor.name)}</strong><p>${escapeHtml(visitor.message)}</p></div><button type="button" aria-label="Entdeckung schließen">×</button>`;
    discovery.querySelector('button').onclick=()=>discovery.remove();stage.append(discovery);setTimeout(()=>discovery.remove(),7000);
  });
  c.append(stage);
}
function setSize(id,size){const cfg=state.widgets.find(w=>w.id===id);if(!cfg)return;cfg.size=size;saveState();renderDashboard()}
function hideWidget(id){const cfg=state.widgets.find(w=>w.id===id);if(!cfg)return;cfg.hidden=true;saveState();renderDashboard();renderWidgetVisibilitySettings()}
function showWidget(id){const cfg=state.widgets.find(w=>w.id===id);if(!cfg)return;cfg.hidden=false;saveState();renderDashboard();renderWidgetVisibilitySettings()}
function renderWidgetVisibilitySettings(){const host=document.querySelector('#widgetVisibilitySettings');if(!host)return;host.innerHTML=state.widgets.map(w=>`<label class="visibility-item"><input type="checkbox" data-widget-visible="${w.id}" ${w.hidden?'':'checked'}><span>${escapeHtml(w.title)}</span></label>`).join('');host.querySelectorAll('[data-widget-visible]').forEach(input=>input.onchange=()=>{const cfg=state.widgets.find(w=>w.id===input.dataset.widgetVisible);if(cfg){cfg.hidden=!input.checked;saveState();renderDashboard()}})}
function swapWidgets(a,b){if(!a||a===b)return;const ai=state.widgets.findIndex(x=>x.id===a),bi=state.widgets.findIndex(x=>x.id===b);if(ai<0||bi<0)return;[state.widgets[ai],state.widgets[bi]]=[state.widgets[bi],state.widgets[ai]];saveState();renderDashboard()}
function setWallExpanded(expanded){
  if(!wallMount)return;
  wallMount.classList.toggle('wall-expanded',!!expanded);
  document.body.classList.toggle('wall-focus-open',!!expanded);
  const backdrop=document.querySelector('#wallFocusBackdrop');if(backdrop)backdrop.hidden=!expanded;
  renderDashboard();
}
function focusWidget(id){
  if(id==='wall'){setWallExpanded(!wallMount?.classList.contains('wall-expanded'));return}
  if(id==='schedule'){setBoardSwap('schedule');return}
  const cfg=state.widgets.find(w=>w.id===id);if(!cfg)return;
  if(widgetFocusDialog){
    const title=document.querySelector('#widgetFocusTitle'),body=document.querySelector('#widgetFocusBody');
    if(title)title.textContent=cfg.title;
    if(body){body.dataset.widget=id;body.innerHTML='';body.append(renderWidget(id));}
    widgetFocusDialog.showModal();
    return;
  }
  cfg.hidden=false;cfg.size=cfg.size==='large'?'small':'large';saveState();renderDashboard();
}
function resetLayout(){if(confirm('Das Standard-Layout wiederherstellen?')){state.widgets=clone(defaults.widgets);saveState();renderDashboard()}}
function toggleLayoutEditing(){
  document.body.classList.toggle('layout-editing');
  const active=document.body.classList.contains('layout-editing');
  const button=document.querySelector('#layoutReset');
  if(button)button.textContent=active?'✓ Layout fertig':'✥ Layout';
}

function openTeam(){
  /* NEXT 14.3 – Kein erneutes „Wer bist du?“ bei jedem Tipp auf den
     Teambereich-Knopf: Ist bereits eine Person aktiv (auf diesem Gerät
     gemerkt), öffnet sich direkt deren Bereich. Auf dem Handy wird dabei
     die „Meine Übersicht“-Seite übersprungen, da sie dieselben Inhalte
     wie die eigentliche Startseite zeigt (Fächer, Fundus, Favoriten) –
     stattdessen geht es direkt zu „Fundus & Vorbereitung“. Auf dem Laptop
     bleibt „Meine Übersicht“ die gewohnte Startseite des Arbeitsbereichs. */
  const remembered=state.activeTeamMember&&(state.teamMembers||[]).some(member=>member.id===state.activeTeamMember);
  if(remembered){
    teamDialog.showModal();enterTeamWorkspace(state.activeTeamMember);
    if(window.matchMedia('(max-width:700px)').matches)selectTeamPage('materials');
    return;
  }
  teamWorkspaceMode='selection';renderTeamMembers();showTeamSelection();teamDialog.showModal();
}
function openPoints(){renderPointsTeamSelect();renderQuickPointsList();renderPointHistory();pointsDialog.showModal()}
function openMobilePersonalPage(page){
  const memberId=state.activeTeamMember||state.teamMembers?.[0]?.id;
  if(page==='points'){state.activePointActor=memberId;saveState();openMobilePoints();return}
  if(!memberId){openTeam();return}
  if(!teamDialog.open)teamDialog.showModal();
  enterTeamWorkspace(memberId);
  if(page==='goal')selectTeamPage('goal');
  else if(page==='materials')selectTeamPage('materials');
  else if(page==='settings')selectTeamPage('settings');
  else selectTeamPage('overview');
  if(page==='notes')setTimeout(()=>document.querySelector('#cockpitIncidentNote')?.focus(),120);
  if(page==='today')setTimeout(()=>document.querySelector('.cockpit-children')?.scrollIntoView({block:'start',behavior:'smooth'}),120);
}
function buildDailyFeed(){
  /* NEXT 12.5 – Ein gemeinsamer Tages-Feed für Handy-Startseite UND Cockpit.
     Enthält Beobachtungen (teamIncidents), vergebene Punkte (pointHistory)
     und anonyme Ereignisse anderer Geräte. Wichtig: pro Fuchs nur EINE Zeile –
     der wichtigste Status des Tages (Verbot › Veto/Rot › Ermahnung › Notiz ›
     Lob/Grün), bei Gleichstand der neueste. Verhindert Doppel-Einträge. */
  const today=todayKey();
  const realIncidents=(state.teamIncidents||[]).filter(item=>(item.createdAt||'').slice(0,10)===today&&!item.demo);
  const pointEvents=(state.pointHistory||[]).filter(entry=>(entry.createdAt||'').slice(0,10)===today).map(entry=>({id:entry.id,studentId:entry.studentId,studentName:entry.studentName,type:entry.type==='yellow'?'warning':entry.type==='red'?'veto':'positive',note:entry.type==='direct'?'Direkt auf Grün gesetzt':'',createdAt:entry.createdAt,fromPoint:true}));
  const localIds=new Set([...realIncidents.map(i=>i.id),...pointEvents.map(i=>i.id)]);
  const remoteEvents=(state.remoteIncidentsLite||[]).filter(item=>(item.createdAt||'').slice(0,10)===today&&!localIds.has(item.id)).map(item=>{const student=state.students.find(c=>c.id===item.studentId);return {id:item.id,studentId:item.studentId,studentName:student?.name||'Fuchs',type:item.type,note:'',createdAt:item.createdAt,fromRemote:true}});
  const all=[...realIncidents,...pointEvents,...remoteEvents];
  /* pro Fuchs den wichtigsten Eintrag wählen */
  const bestByChild=new Map();
  all.forEach(item=>{
    const key=item.studentId||item.studentName;
    const current=bestByChild.get(key);
    if(!current)return void bestByChild.set(key,item);
    const better=incidentPriority(item.type)<incidentPriority(current.type)
      || (incidentPriority(item.type)===incidentPriority(current.type)&&new Date(item.createdAt)>new Date(current.createdAt));
    if(better)bestByChild.set(key,item);
  });
  return [...bestByChild.values()].sort((a,b)=>{const rank=incidentPriority(a.type)-incidentPriority(b.type);return rank!==0?rank:new Date(b.createdAt)-new Date(a.createdAt)});
}
/* NEXT 15.13 – Name der angemeldeten Person oben im grünen Header, damit
   auf einen Blick klar ist, wessen persönlicher Bereich gerade offen ist. */
function renderTopbarPerson(){
  const nameEl=document.querySelector('#topbarPersonName'),iconEl=document.querySelector('#topbarPersonIcon');
  if(!nameEl)return;
  const person=(typeof teamWorkspaceMode!=='undefined'&&teamDialog?.classList.contains('team-workspace-open'))?activeWorkspacePerson():activeTeamPerson();
  nameEl.textContent=person.name;
  if(iconEl)iconEl.textContent=person.icon||'🦊';
}
function renderMobilePersonalHome(){
  const title=document.querySelector('#mobileTodayTitle');if(!title)return;
  renderTopbarPerson();
  renderMobileBoardController();renderAutomaticLesson();renderMobileInlinePoints();
  const now=new Date(),date=document.querySelector('#mobileTodayDate'),mascot=document.querySelector('#mobileTodayMascot');
  /* NEXT 15.17 – der Titel lag als Text im gespeicherten Zustand. Wer die
     App schon benutzt hat, haette sonst weiter „Heute im Blick“ gesehen. */
  if(state.classWorld&&state.classWorld.dailyOverviewTitle==='Heute im Blick'){
    state.classWorld.dailyOverviewTitle='Füchse im Blick';saveState();
  }
  title.textContent=state.classWorld?.dailyOverviewTitle||'Füchse im Blick';
  if(date){
    /* NEXT 15.17 – kurzes Datum, damit daneben noch die Tagesbilanz passt */
    date.dateTime=dateKeyLocal(now);
    const heute=buildDailyFeed().length;
    date.textContent=now.toLocaleDateString('de-DE',{weekday:'short',day:'2-digit',month:'2-digit'})
      +(heute?` · ${heute} heute`:' · alles ruhig');
  }
  if(mascot)mascot.textContent=currentTheme().mascot;
  const incidentList=document.querySelector('#mobileIncidentList');
  if(incidentList){
    /* NEXT 12.5 – gemeinsamer, pro Fuchs deduplizierter Tages-Feed */
    const combined=buildDailyFeed();
    /* NEXT 12.2 – Keine Demo-/Beispiel-Einträge mehr. Sie wurden pro Gerät
       einzeln erzeugt, nie synchronisiert und zeigten Platzhalter-Fotos –
       das wirkte „nicht synchron“. „Heute im Blick“ zeigt jetzt nur echte
       Bewertungen; bei vielen Einträgen ein „+ N weitere“-Knopf. */
    const incidents=combined;incidentList.innerHTML='';
    if(!incidents.length){
      incidentList.innerHTML='<div class="mobile-all-good"><span>✓</span><div><strong>Heute keine Auffälligkeiten</strong><small>Alles ruhig in der Klasse.</small></div></div>';
    } else {
      const shown=incidents.slice(0,5),extra=incidents.length-shown.length;
      shown.forEach(item=>{const meta=item.type==='ban'?banMeta(item):incidentMeta(item.type),student=state.students.find(candidate=>candidate.id===item.studentId),row=document.createElement('button');row.type='button';row.className=`mobile-incident ${item.type} ${item.fromPoint?'is-point':''}`;row.innerHTML=`<span class="mobile-incident-photo">${studentPhotoMarkup(student||{name:item.studentName},'mobile-incident-img')}</span><div><strong>${escapeHtml(item.studentName)}</strong><small>${meta.icon} ${meta.label}${item.note?` · ${escapeHtml(item.note)}`:''}</small></div><time>${new Date(item.createdAt).toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'})}</time>`;row.onclick=()=>openStudentDetails(item.studentId);incidentList.append(row)});
      if(extra>0){const more=document.createElement('button');more.type='button';more.className='mobile-incident-more';more.innerHTML=`<span>+ ${extra} weitere${extra===1?'':''} anzeigen</span><b>›</b>`;more.onclick=()=>openMobilePersonalPage('points');incidentList.append(more)}
    }
  }
  /* Das Wochenziel steht seit 14.1 nur noch in „Alle Füchse & Punkte“ –
     auf der Startseite war es doppelt vorhanden. */
  const pinnedList=document.querySelector('#mobilePinnedList'),pins=allTodayLessons(activeMaterialStore()).slice(0,3);
  if(pinnedList){
    pinnedList.innerHTML='';
    pins.forEach(({drawer,item})=>{const link=normaliseMaterialLink(item.link),control=document.createElement(link?'a':'button');if(link){control.href=link;control.target='_blank';control.rel='noopener'}else{control.type='button';control.onclick=()=>openMobilePersonalPage('materials')}control.className='mobile-pin-note';control.innerHTML=`<span>📌</span><div><strong>${escapeHtml(item.title||drawer.name)}</strong><small>${escapeHtml(drawer.name)}</small></div><b>${link?'Öffnen ↗':'Bearbeiten ›'}</b>`;pinnedList.append(control)});
    if(!pins.length){pinnedList.innerHTML='<button type="button" class="mobile-pin-empty"><span>📌</span><strong>Noch nichts angeheftet</strong><small>Vorbereitung öffnen und für heute anpinnen</small></button>';pinnedList.querySelector('.mobile-pin-empty').onclick=()=>openMobilePersonalPage('materials')}
  }
}

/* NEXT 11.90 – Füchse & Punkte direkt oben auf der Handy-Übersicht.
   Punktart wählen (🟢 🟡 🔴 ⭐ ⊘), dann Fuchs antippen. Gedrückt halten
   öffnet wie bisher Notizen und das Fuchsprofil. */
let mobilePointMode='green';
function mobilePointModeLabel(mode){
  return {green:'🟢 Grüner Punkt – Fuchs antippen',yellow:'🟡 Gelbe Karte – Fuchs antippen (bleibt intern)',red:'🔴 Veto / Rot – Fuchs antippen (bleibt intern)',direct:'⭐ Direkt Grün – Fuchs antippen',ban:'⊘ Verbot – Fuchs antippen, dann Art und Dauer wählen'}[mode]||'';
}
function setMobilePointMode(mode){
  mobilePointMode=mode;
  document.querySelectorAll('#mobilePointModes [data-point-mode]').forEach(button=>button.classList.toggle('is-active',button.dataset.pointMode===mode));
  const status=document.querySelector('#mobileInlinePointsStatus');if(status)status.textContent=mobilePointModeLabel(mode);
}
function refreshMobileInlineCard(card,studentId){
  const counts=state.points[pointKey(studentId)]||{},greens=(counts.green||0)+(counts.direct||0);
  const small=card.querySelector('.mobile-point-copy small');
  if(small)small.textContent=`🟢 ${greens} · 🟡 ${counts.yellow||0} · 🔴 ${counts.red||0}`;
  card.classList.toggle('has-green',greens>0);
  card.classList.toggle('has-yellow',(counts.yellow||0)>0);
  card.classList.toggle('has-red',(counts.red||0)>0);
}
function renderMobileInlinePoints(){
  const grid=document.querySelector('#mobileInlinePointsGrid');if(!grid)return;grid.innerHTML='';
  const status=document.querySelector('#mobileInlinePointsStatus');if(status&&!status.textContent)status.textContent=mobilePointModeLabel(mobilePointMode);
  activeStudents().forEach(student=>{
    const counts=state.points[pointKey(student.id)]||{green:0,yellow:0,red:0,direct:0},greens=(counts.green||0)+(counts.direct||0),card=document.createElement('button');
    card.type='button';card.className='mobile-point-child';
    if(greens>0)card.classList.add('has-green');
    if((counts.yellow||0)>0)card.classList.add('has-yellow');
    if((counts.red||0)>0)card.classList.add('has-red');
    card.innerHTML=`<span class="mobile-point-photo">${studentPhotoMarkup(student,'mobile-point-img')}</span><span class="mobile-point-copy"><strong>${escapeHtml(student.name)}</strong><small>🟢 ${greens} · 🟡 ${counts.yellow||0} · 🔴 ${counts.red||0}</small></span><span class="mobile-point-check">✓</span>`;
    let holdTimer=null,longPress=false;
    const startHold=()=>{longPress=false;holdTimer=setTimeout(()=>{longPress=true;card.dataset.suppress='true';openMobileChildActions(student.id);navigator.vibrate?.(35)},520)};
    const cancelHold=()=>{clearTimeout(holdTimer);holdTimer=null};
    card.addEventListener('pointerdown',startHold);card.addEventListener('pointerup',cancelHold);card.addEventListener('pointercancel',cancelHold);card.addEventListener('pointerleave',cancelHold);
    card.onclick=()=>{
      if(longPress||card.dataset.suppress==='true'){delete card.dataset.suppress;return}
      if(mobilePointMode==='ban'){openQuickBan(student.id);return}
      addPoint(student.id,mobilePointMode);
      refreshMobileInlineCard(card,student.id);
      card.classList.add('just-awarded');setTimeout(()=>card.classList.remove('just-awarded'),650);
    };
    grid.append(card);
  });
}

let mobileSelectedStudentId=null;
function openMobilePoints(){
  renderMobilePoints();renderMobilePointsGoal();
  const dialog=document.querySelector('#mobilePointsDialog');
  if(dialog&&!dialog.open)dialog.showModal();
}
function mobileStudentStatus(counts,studentId){
  /* Wichtigster heutiger Status bestimmt die Kachelfarbe:
     Verbot(rot) › Veto/Rot › Gelb › Grün › neutral. */
  const activeBan=studentIncidents(studentId).filter(incidentIsActive).length>0;
  if(activeBan||(counts.red||0)>0)return 'status-red';
  if((counts.yellow||0)>0)return 'status-yellow';
  if((counts.green||0)+(counts.direct||0)>0)return 'status-green';
  return 'status-neutral';
}
function renderMobilePointsGoal(){
  const text=document.querySelector('#mobilePointsGoalText'),yes=document.querySelector('#mobilePointsGoalYes'),no=document.querySelector('#mobilePointsGoalNo');
  if(!text)return;
  const goal=state.content.weeklyGoal,vote=goalVotesForDay()[currentPointActor().id]||null;
  text.textContent=goal.text||'Noch kein Wochenziel eingetragen';
  if(yes){yes.classList.toggle('is-active',vote==='green');yes.onclick=()=>{setWeeklyGoalVote('green');renderMobilePointsGoal();renderMobilePersonalHome();mobilePointsFeedback('✓ Wochenziel: Ja gespeichert')}}
  if(no){no.classList.toggle('is-active',vote==='red');no.onclick=()=>{setWeeklyGoalVote('red');renderMobilePointsGoal();renderMobilePersonalHome();mobilePointsFeedback('✕ Wochenziel: Nein gespeichert')}}
}
function mobilePointsFeedback(text){
  const target=document.querySelector('#mobilePointsFeedback');if(!target)return;
  target.textContent=text;target.classList.add('is-flash');
  clearTimeout(mobilePointsFeedback._t);
  mobilePointsFeedback._t=setTimeout(()=>{target.classList.remove('is-flash');target.textContent='🟢🟡🔴 tippen · Name antippen für Notizen, Verlauf & Zurücknehmen'},2600);
}
function renderMobilePoints(){
  const grid=document.querySelector('#mobilePointsGrid');if(!grid)return;grid.innerHTML='';
  const layout=state.ui?.mobilePointsLayout==='rows'?'rows':'cards';
  grid.classList.toggle('layout-rows',layout==='rows');
  const query=(document.querySelector('#mobileChildSearch')?.value||'').trim().toLocaleLowerCase('de-DE');
  const statusRank=s=>({'status-red':0,'status-yellow':1,'status-green':2,'status-neutral':3}[s]);
  const sorted=[...activeStudents()]
    .filter(student=>!query||student.name.toLocaleLowerCase('de-DE').startsWith(query)||student.name.toLocaleLowerCase('de-DE').includes(query))
    .map(student=>{
      const counts=state.points[pointKey(student.id)]||{green:0,yellow:0,red:0,direct:0};
      return {student,counts,status:mobileStudentStatus(counts,student.id)};
    }).sort((a,b)=>{const r=statusRank(a.status)-statusRank(b.status);return r!==0?r:a.student.name.localeCompare(b.student.name,'de')});
  if(!sorted.length){grid.innerHTML='<div class="mobile-search-empty">Kein Fuchs gefunden. Anders schreiben oder Suche leeren.</div>';return}
  sorted.forEach(({student,counts,status})=>{
    const card=document.createElement('div');card.className=`mobile-rate-card ${status}`;
    const latestNote=studentIncidents(student.id).find(item=>item.type==='note');
    const bans=studentIncidents(student.id).filter(item=>incidentIsActive(item)).slice(0,2).map(item=>banMeta(item).label);
    card.innerHTML=`
      <button type="button" class="mobile-rate-head" aria-label="Profil von ${escapeHtml(student.name)} öffnen">
        <span class="mobile-rate-photo">${studentPhotoMarkup(student,'mobile-rate-img')}</span>
        <span class="mobile-rate-copy">
          <strong>${escapeHtml(student.name)}</strong>
          <span class="mobile-rate-counts">🟢 ${counts.green||0} · 🟡 ${counts.yellow||0} · 🔴 ${counts.red||0}</span>
          ${bans.length?`<em class="mobile-rate-ban">⛔ ${escapeHtml(bans.join(' · '))}</em>`:latestNote?`<em class="mobile-rate-note">📝 ${escapeHtml(latestNote.note||'Notiz')}</em>`:''}
        </span>
        <span class="mobile-rate-chevron">›</span>
      </button>
      <div class="mobile-rate-actions">
        <button type="button" class="rate-btn rate-green" aria-label="Grün für ${escapeHtml(student.name)}"><span></span></button>
        <button type="button" class="rate-btn rate-yellow" aria-label="Gelbe Karte für ${escapeHtml(student.name)}"><span></span></button>
        <button type="button" class="rate-btn rate-red" aria-label="Veto/Rot für ${escapeHtml(student.name)}"><span></span></button>
        <button type="button" class="rate-btn rate-more" aria-label="Weitere Optionen für ${escapeHtml(student.name)}"><span aria-hidden="true">•••</span></button>
      </div>`;
    const flash=cls=>{card.classList.add(cls);setTimeout(()=>card.classList.remove(cls),500)};
    const refresh=()=>{
      const c=state.points[pointKey(student.id)]||{};
      card.className=`mobile-rate-card ${mobileStudentStatus(c,student.id)}`;
      const el=card.querySelector('.mobile-rate-counts');if(el)el.textContent=`🟢 ${c.green||0} · 🟡 ${c.yellow||0} · 🔴 ${c.red||0}`;
    };
    card.querySelector('.mobile-rate-head').onclick=()=>openMobileChildActions(student.id);
    const [g,y,r,more]=card.querySelectorAll('.rate-btn');
    const give=(type,cls,label)=>{addPoint(student.id,type);flash(cls);refresh();renderMobilePersonalHome();mobilePointsFeedback(`✓ ${label} für ${student.name} gespeichert`)};
    g.onclick=()=>give('green','just-green','Grüner Punkt');
    y.onclick=()=>give('yellow','just-yellow','Gelbe Karte');
    r.onclick=()=>give('red','just-red','Rot/Veto');
    more.onclick=()=>openMobileChildActions(student.id);
    grid.append(card);
  });
}
function undoLastPoint(studentId){
  /* NEXT 13.3 – Versehentliche Punkte zurücknehmen. Nimmt den zuletzt heute
     vergebenen Punkt dieses Fuchses zurück: Zähler runter, Verlaufseintrag
     entfernt, Baum-Blatt zurückgesetzt falls dadurch keine Grünen mehr da
     sind. Rückgängig wird auch mitsynchronisiert. */
  const today=todayKey(),key=pointKey(studentId);
  const index=(state.pointHistory||[]).findIndex(entry=>entry.studentId===studentId&&(entry.createdAt||'').slice(0,10)===today);
  if(index<0){updatePublishStatus('Für dieses Fuchs gibt es heute nichts zurückzunehmen.');return false}
  const entry=state.pointHistory[index];
  state.pointHistory.splice(index,1);
  const counts=state.points[key]||{green:0,yellow:0,red:0,direct:0};
  counts[entry.type]=Math.max(0,(counts[entry.type]||0)-1);
  /* Automatisches Rot bei 3x Gelb wieder auflösen, wenn nun weniger als 3 */
  if((counts.yellow||0)<3&&!(state.pointHistory||[]).some(e=>e.studentId===studentId&&e.type==='red'&&(e.createdAt||'').slice(0,10)===today))counts.red=0;
  state.points[key]=counts;
  if((counts.green||0)+(counts.direct||0)===0){
    state.publishedGreen=(state.publishedGreen||[]).filter(id=>id!==studentId);
    if(state.leafAwards&&state.leafAwards[`${today}:${studentId}`]){delete state.leafAwards[`${today}:${studentId}`];state.leafCount=Math.max(0,(state.leafCount||0)-1)}
  }
  saveState();renderPointHistory();renderDashboard();renderTeacherList();renderQuickPointsList();renderMobilePoints();renderMobilePersonalHome();renderTeamCockpit();
  const labels={green:'Grüner Punkt',yellow:'Gelbe Karte',red:'Rot/Veto',direct:'Direkt Grün'};
  updatePublishStatus(`↩︎ ${labels[entry.type]||'Eintrag'} für ${entry.studentName} zurückgenommen`);
  sendPointsRemote();
  return true;
}
function resetChildToday(studentId){
  const student=state.students.find(item=>item.id===studentId);if(!student)return;
  if(!confirm(`Alle heutigen Einträge für ${student.name} auf 0 setzen?\n\nPunkte, Ermahnungen und Verbote von heute werden entfernt. Notizen bleiben erhalten.`))return;
  const today=todayKey();
  delete state.points[pointKey(studentId)];
  state.pointHistory=(state.pointHistory||[]).filter(entry=>!(entry.studentId===studentId&&(entry.createdAt||'').slice(0,10)===today));
  state.teamIncidents=(state.teamIncidents||[]).filter(item=>!(item.studentId===studentId&&(item.createdAt||'').slice(0,10)===today&&item.type!=='note'));
  state.publishedGreen=(state.publishedGreen||[]).filter(id=>id!==studentId);
  if(state.leafAwards&&state.leafAwards[`${today}:${studentId}`]){delete state.leafAwards[`${today}:${studentId}`];state.leafCount=Math.max(0,(state.leafCount||0)-1)}
  saveState();renderPointHistory();renderDashboard();renderTeacherList();renderQuickPointsList();renderMobilePoints();renderMobilePersonalHome();renderTeamCockpit();
  updatePublishStatus(`${student.name} steht wieder bei 0 ✓`);
  sendPointsRemote();
}
function openMobileChildActions(studentId){
  mobileSelectedStudentId=studentId;const student=state.students.find(item=>item.id===studentId);if(!student)return;
  const counts=state.points[pointKey(student.id)]||{},photo=document.querySelector('#mobileActionPhoto'),name=document.querySelector('#mobileActionName'),summary=document.querySelector('#mobileActionSummary');
  if(photo)photo.innerHTML=studentPhotoMarkup(student,'mobile-action-photo');if(name)name.textContent=student.name;if(summary)summary.textContent=`🟢 ${counts.green||0} · 🟡 ${counts.yellow||0} · 🔴 ${counts.red||0}`;
  const notes=document.querySelector('#mobileChildNotes'),entries=studentIncidents(student.id).filter(item=>item.type==='note').slice(0,4);
  if(notes)notes.innerHTML=entries.length?`<h3>Letzte Notizen</h3>${entries.map(item=>`<article><p>${escapeHtml(item.note||'Ohne Text')}</p><small>${new Date(item.createdAt).toLocaleDateString('de-DE',{day:'2-digit',month:'2-digit'})} · ${escapeHtml(item.actorName||'Klassenteam')}</small></article>`).join('')}`:'<p class="mobile-no-notes">Noch keine Notiz vorhanden.</p>';
  const textarea=document.querySelector('#mobileChildNote');if(textarea)textarea.value='';
  const dialog=document.querySelector('#mobileChildActionsDialog');if(dialog&&!dialog.open)dialog.showModal();
}
function mobileChildPoint(type){
  if(!mobileSelectedStudentId)return;addPoint(mobileSelectedStudentId,type);renderMobilePoints();renderMobileInlinePoints();openMobileChildActions(mobileSelectedStudentId);
}
function saveMobileChildNote(){
  const student=state.students.find(item=>item.id===mobileSelectedStudentId),textarea=document.querySelector('#mobileChildNote'),note=(textarea?.value||'').trim();if(!student||!note)return;
  const actor=currentPointActor();state.teamIncidents=state.teamIncidents||[];state.teamIncidents.unshift({id:`i${Date.now()}`,studentId:student.id,studentName:student.name,type:'note',note,actorName:actor.name,createdAt:new Date().toISOString()});state.teamIncidents=state.teamIncidents.slice(0,500);saveState();renderMobilePersonalHome();renderMobilePoints();openMobileChildActions(student.id);
}
function renderClassManagement(){
  const grid=document.querySelector('#classStudentGrid'),summary=document.querySelector('#classRosterSummary'),status=document.querySelector('#classManagementStatus');if(!grid)return;
  const active=activeStudents(),reserved=Math.max(0,Number(state.reservedStudentPlaces)||0);
  if(summary)summary.textContent=`${active.length} aktive Füchse · ${reserved} ${reserved===1?'freier Platz':'freie Plätze'}`;
  grid.innerHTML='';
  state.students.forEach(student=>{
    const card=document.createElement('article');card.className='class-student-card';if(student.active===false)card.classList.add('is-inactive');
    card.innerHTML=`<div class="class-student-photo">${studentPhotoMarkup(student,'class-roster-photo')}</div><div class="class-student-copy"><label>Name<input type="text" maxlength="32" value="${escapeHtml(student.name)}" data-student-name="${escapeHtml(student.id)}"></label><label>Geburtstag<input type="date" value="${escapeHtml(student.birthday||'')}" data-student-birthday="${escapeHtml(student.id)}"></label><small>${student.active===false?'Pausiert – Daten bleiben erhalten':'Aktiv im DigiBoard'}</small></div><div class="class-student-actions"><label class="photo-upload-button" title="Foto für ${escapeHtml(student.name)} austauschen"><span class="photo-upload-label-v1553">📷 Foto</span><input type="file" accept="image/jpeg,image/png,image/webp,image/gif,image/bmp,image/heic,image/heif,.jpg,.jpeg,.png,.webp,.gif,.bmp,.heic,.heif" data-student-photo="${escapeHtml(student.id)}" aria-label="Foto für ${escapeHtml(student.name)} wählen"></label><button type="button" data-student-toggle="${escapeHtml(student.id)}" title="Pausierte Füchse verschwinden vorübergehend aus Wald, Punkten und Diensten. Fotos, Notizen und Verläufe bleiben erhalten.">${student.active===false?'Aktivieren':'Pausieren'}</button><button type="button" class="kind-loeschen-v1558" data-student-delete="${escapeHtml(student.id)}" title="Entfernt ${escapeHtml(student.name)} endgültig aus der Klasse – mit Foto, Punkten und Notizen. Vorher wird gefragt, danach gibt es ein „Rückgängig“.">🗑️ Entfernen</button></div><p class="foto-meldung-v1553" data-foto-meldung="${escapeHtml(student.id)}" aria-live="polite"></p>`;
    const nameInput=card.querySelector('[data-student-name]');nameInput.onchange=()=>renameStudent(student.id,nameInput.value);
    const birthdayInput=card.querySelector('[data-student-birthday]');birthdayInput.onchange=()=>saveStudentBirthday(student.id,birthdayInput.value);
    const fotofeld=card.querySelector('[data-student-photo]');
    fotofeld.onchange=async event=>{
      const datei=event.target.files?.[0];
      await replaceStudentPhoto(student.id,datei);
      /* NEXT 15.53 – Ohne das Zuruecksetzen loest DIESELBE Datei beim zweiten
         Versuch kein `change` mehr aus: der Wert hat sich ja nicht geaendert.
         Wer nach einer Fehlermeldung dasselbe Bild noch einmal waehlt, sass
         danach vor einem Knopf, der gar nichts mehr tat. */
      try{ event.target.value=''; }catch{}
    };
    card.querySelector('[data-student-toggle]').onclick=()=>toggleStudentActive(student.id);
    card.querySelector('[data-student-delete]').onclick=()=>deleteStudent(student.id);
    grid.append(card);
  });
  if(status)status.textContent='';
}
function saveStudentBirthday(id,value){
  const student=state.students.find(item=>item.id===id),status=document.querySelector('#classManagementStatus');if(!student)return;
  student.birthday=value||'';saveState();renderDashboard();
  if(status)status.textContent=student.birthday?`Geburtstag für ${student.name} gespeichert ✓`:`Geburtstag für ${student.name} entfernt ✓`;
}
function renameStudent(id,value){
  const student=state.students.find(item=>item.id===id),name=(value||'').trim(),status=document.querySelector('#classManagementStatus');if(!student)return;
  if(!name){if(status)status.textContent='Der Name darf nicht leer sein.';renderClassManagement();return}
  student.name=name;student.avatar=initials(name);saveState();renderClassManagement();renderTeacherList();renderQuickPointsList();renderDashboard();const message=document.querySelector('#classManagementStatus');if(message)message.textContent=`${name} wurde gespeichert ✓`;
}
function toggleStudentActive(id){
  const student=state.students.find(item=>item.id===id);if(!student)return;student.active=student.active===false;
  if(student.active===false){state.publishedGreen=(state.publishedGreen||[]).filter(studentId=>studentId!==id);state.previousPublishedGreen=(state.previousPublishedGreen||[]).filter(studentId=>studentId!==id)}
  saveState();renderClassManagement();renderTeacherList();renderQuickPointsList();renderDashboard();renderServicePlanner();
}
/* ============================================================
   NEXT 15.58 – Ein Kind wirklich entfernen

   „Pausieren" gab es schon, aber nichts, um ein Kind endgültig aus der
   Klasse zu nehmen. Wechselt ein Kind die Schule, blieben Name, Fotos,
   Punkte und Notizen für immer im Gerät stehen – nicht nur unordentlich,
   sondern bei Kinderdaten auch datenschutzrechtlich unschön.

   Loeschen heisst hier wirklich loeschen. Ein Kind steht an ZEHN Stellen
   im Zustand, nicht nur in der Liste; bleibt eine davon zurueck, tauchen
   spaeter Geisternamen in Verlaeufen und Diensten auf. Deshalb wird jede
   Stelle einzeln geraeumt – und vorher fuer den Rueckweg gesichert.

   Der Rueckweg ist wichtig: `confirm()` ist schnell weggeklickt. Nach dem
   Loeschen steht deshalb bis zum naechsten Seitenaufruf ein
   „Rueckgaengig" auf der Karte, inklusive des Fotos, das dafuer vorher
   aus der Datenbank gelesen wird. */
let letzteKindLoeschung=null;

function studentDatenBilanz(id){
  const punkte=Object.keys(state.points||{}).filter(k=>k.endsWith(':'+id)).length;
  const verlauf=(state.pointHistory||[]).filter(e=>e.studentId===id).length;
  const notizen=(state.teamIncidents||[]).filter(e=>e.studentId===id).length;
  return {punkte,verlauf,notizen};
}

async function deleteStudent(id){
  const student=state.students.find(item=>item.id===id);
  if(!student)return;
  const bilanz=studentDatenBilanz(id);
  const teile=[
    bilanz.punkte?`${bilanz.punkte} Tage mit Punkten`:'',
    bilanz.verlauf?`${bilanz.verlauf} Einträge im Verlauf`:'',
    bilanz.notizen?`${bilanz.notizen} Notizen und Maßnahmen`:'',
    student.photo?'das Foto':''
  ].filter(Boolean);
  const frage=`„${student.name}" endgültig aus der Klasse entfernen?\n\n`
    +(teile.length?`Mit gelöscht werden: ${teile.join(', ')}.\n\n`:'Zu diesem Kind sind keine weiteren Daten gespeichert.\n\n')
    +'Die gesammelten Blätter der Klasse bleiben erhalten.\n'
    +'Direkt danach steht auf der Karte ein „Rückgängig".';
  if(!confirm(frage))return;

  /* Erst sichern, dann raeumen – sonst gibt es kein Zurueck mehr. */
  const sicherung={
    student:JSON.parse(JSON.stringify(student)),
    platz:state.students.findIndex(item=>item.id===id),
    punkte:{}, verlauf:[], notizen:[], fern:[],
    veroeffentlicht:(state.publishedGreen||[]).includes(id),
    vorherVeroeffentlicht:(state.previousPublishedGreen||[]).includes(id),
    blattTage:[], stimmen:{}, dienste:{}, foto:null
  };
  try{ if(photoStore.isReference(student.photo)) sicherung.foto=await photoStore.blobFor?.(student.photo)||null; }catch{}

  /* 1 · Punkte (Schluessel: „JJJJ-MM-TT:kind-id") */
  Object.keys(state.points||{}).forEach(k=>{
    if(k.endsWith(':'+id)){ sicherung.punkte[k]=state.points[k]; delete state.points[k]; }
  });
  /* 2 · Verlauf, Notizen, uebertragene Vorfaelle */
  sicherung.verlauf=(state.pointHistory||[]).filter(e=>e.studentId===id);
  state.pointHistory=(state.pointHistory||[]).filter(e=>e.studentId!==id);
  sicherung.notizen=(state.teamIncidents||[]).filter(e=>e.studentId===id);
  state.teamIncidents=(state.teamIncidents||[]).filter(e=>e.studentId!==id);
  sicherung.fern=(state.remoteIncidentsLite||[]).filter(e=>e.studentId===id);
  state.remoteIncidentsLite=(state.remoteIncidentsLite||[]).filter(e=>e.studentId!==id);
  /* 3 · Klassenbaum */
  state.publishedGreen=(state.publishedGreen||[]).filter(x=>x!==id);
  state.previousPublishedGreen=(state.previousPublishedGreen||[]).filter(x=>x!==id);
  /* 4 · Blatt-Vermerke. Der ZAEHLER bleibt bewusst stehen: die Blätter hat
         die ganze Klasse gesammelt, sie gehören nicht einem Kind allein.
         Nur die persönlichen Tagesvermerke verschwinden. */
  Object.keys(state.leafAwards||{}).forEach(k=>{
    if(k.endsWith(':'+id)){ sicherung.blattTage.push(k); delete state.leafAwards[k]; }
  });
  /* 5 · Stimmen der Kinder und Wochendienste */
  Object.entries(state.votes||{}).forEach(([k,liste])=>{
    if(Array.isArray(liste)&&liste.includes(id)){
      sicherung.stimmen[k]=[...liste];
      state.votes[k]=liste.filter(x=>x!==id);
    }
  });
  const dienste=state.weeklyServices?.assignments||{};
  Object.entries(dienste).forEach(([k,liste])=>{
    if(Array.isArray(liste)&&liste.includes(id)){
      sicherung.dienste[k]=[...liste];
      dienste[k]=liste.filter(x=>x!==id);
    }
  });
  /* 6 · Foto aus der Gerätedatenbank */
  try{ await photoStore.remove(id); }catch{}
  /* 7 · Und zuletzt aus der Klassenliste */
  state.students=state.students.filter(item=>item.id!==id);
  state.reservedStudentPlaces=Math.max(0,(Number(state.reservedStudentPlaces)||0)+1);

  letzteKindLoeschung=sicherung;
  const dauerhaft=saveState();
  renderClassManagement();renderTeacherList();renderQuickPointsList();renderDashboard();renderServicePlanner();
  zeigeLoeschmeldung(student.name,dauerhaft);
}

function zeigeLoeschmeldung(name,dauerhaft){
  const leiste=document.querySelector('#classManagementStatus');
  if(!leiste)return;
  leiste.innerHTML=`<span>${escapeHtml(name)} wurde aus der Klasse entfernt`
    +`${dauerhaft?' ✓':' – konnte aber nicht dauerhaft gespeichert werden'}</span> `
    +`<button type="button" class="kind-zurueck-v1558">↩︎ Rückgängig</button>`;
  leiste.querySelector('.kind-zurueck-v1558').onclick=undoDeleteStudent;
}

async function undoDeleteStudent(){
  const s=letzteKindLoeschung;
  if(!s){ const l=document.querySelector('#classManagementStatus'); if(l)l.textContent='Es gibt nichts zurückzuholen.'; return; }
  letzteKindLoeschung=null;

  const platz=Math.max(0,Math.min(s.platz,state.students.length));
  state.students.splice(platz,0,s.student);
  Object.assign(state.points,s.punkte);
  state.pointHistory=[...s.verlauf,...(state.pointHistory||[])];
  state.teamIncidents=[...s.notizen,...(state.teamIncidents||[])];
  state.remoteIncidentsLite=[...s.fern,...(state.remoteIncidentsLite||[])];
  if(s.veroeffentlicht)state.publishedGreen=[...(state.publishedGreen||[]),s.student.id];
  if(s.vorherVeroeffentlicht)state.previousPublishedGreen=[...(state.previousPublishedGreen||[]),s.student.id];
  state.leafAwards=state.leafAwards||{};
  s.blattTage.forEach(k=>{state.leafAwards[k]=true});
  Object.entries(s.stimmen).forEach(([k,liste])=>{state.votes[k]=liste});
  state.weeklyServices=state.weeklyServices||{week:currentWeekKey(),assignments:{}};
  state.weeklyServices.assignments=state.weeklyServices.assignments||{};
  Object.entries(s.dienste).forEach(([k,liste])=>{state.weeklyServices.assignments[k]=liste});
  state.reservedStudentPlaces=Math.max(0,(Number(state.reservedStudentPlaces)||0)-1);

  /* Das Foto lag als Blob im Arbeitsspeicher – zurueck in die Datenbank. */
  if(s.foto){
    try{ s.student.photo=await photoStore.put(s.student.id,s.foto); }
    catch{ s.student.photo=''; }
  }

  saveState();
  renderClassManagement();renderTeacherList();renderQuickPointsList();renderDashboard();renderServicePlanner();
  const l=document.querySelector('#classManagementStatus');
  if(l)l.textContent=`${s.student.name} ist wieder in der Klasse ✓`;
}

function addStudent(){
  const used=new Set(state.students.map(student=>student.id));let index=state.students.length+1,id=`kind-${index}`;while(used.has(id)){index++;id=`kind-${index}`}
  state.students.push({id,name:`Neues Fuchs ${index}`,avatar:'+',photo:'',birthday:'',active:true});state.reservedStudentPlaces=Math.max(0,(Number(state.reservedStudentPlaces)||0)-1);saveState();renderClassManagement();renderTeacherList();renderQuickPointsList();renderDashboard();
  const input=document.querySelector(`[data-student-name="${id}"]`);input?.focus();input?.select();
}
function canvasAlsFotoBlob(canvas){
  /* Aeltere Safari-Versionen kennen WebP zwar beim Anzeigen, liefern bei
     canvas.toBlob('image/webp') aber gelegentlich null. JPEG ist der sichere
     Rueckfall und fuer Portraits voellig ausreichend. */
  return new Promise(resolve=>{
    canvas.toBlob(webp=>{
      if(webp){resolve(webp);return}
      canvas.toBlob(jpeg=>resolve(jpeg),'image/jpeg',.86);
    },'image/webp',.86);
  });
}

/* NEXT 15.53 – Die Meldung muss dort erscheinen, wo geklickt wurde.

   Bis 15.52 ging JEDE Rueckmeldung in den Absatz #classManagementStatus
   unterhalb der Liste. Bei 22 Kindern steht der weit ausserhalb des
   Bildschirms. Wer oben auf „Foto austauschen" klickte, sah deshalb
   „einfach nichts passieren" – obwohl die App sehr wohl etwas meldete,
   nur eben unsichtbar. Ab jetzt schreibt jede Meldung zusaetzlich in die
   eigene Zeile der betroffenen Karte. */
function fotoMeldung(id,text,art='arbeit'){
  const zeile=[...document.querySelectorAll('[data-foto-meldung]')]
    .find(el=>el.getAttribute('data-foto-meldung')===String(id));
  if(zeile){
    zeile.className='foto-meldung-v1553 ist-sichtbar art-'+art;
    zeile.innerHTML=text;
  }
  const sammel=document.querySelector('#classManagementStatus');
  if(sammel)sammel.textContent=String(text).replace(/<[^>]+>/g,'');
}

/* Ein Wachhund gegen stilles Haengenbleiben.

   Faellt IndexedDB waehrend des Schreibens in einen Zustand, aus dem sie
   weder Erfolg noch Fehler meldet, wartete die Funktion vorher ewig – und
   der Nutzer sass wieder vor „es passiert nichts". */
function mitFrist(versprechen,millisekunden,kennung){
  return Promise.race([
    versprechen,
    new Promise((_,ablehnen)=>setTimeout(()=>ablehnen(new Error(kennung)),millisekunden))
  ]);
}

async function replaceStudentPhoto(id,file){
  /* STUFE 1 – das Foto wird nicht mehr als Data-URL in den Zustand geschrieben,
     sondern als Blob in die IndexedDB gelegt. Im Zustand steht nur der Verweis
     'idb:<id>'. canvas.toBlob statt canvas.toDataURL spart die Base64-Kodierung. */
  if(!file){ fotoMeldung(id,'Es wurde keine Datei übergeben. Bitte noch einmal auswählen.','fehler'); return; }

  const name=file.name||'Bilddatei';
  const endung=(name.match(/\.([a-z0-9]+)$/i)||[,''])[1].toLowerCase();
  const bildEndung=/^(?:avif|bmp|gif|heic|heif|jpe?g|png|tif{1,2}|webp)$/.test(endung);

  if(file.type&&!file.type.startsWith('image/')&&!bildEndung){
    fotoMeldung(id,`<b>${escapeHtml(name)}</b> ist keine Bilddatei (${escapeHtml(file.type||'unbekannt')}). Bitte ein JPEG oder PNG wählen.`,'fehler');
    return;
  }
  if(!file.size){
    fotoMeldung(id,`<b>${escapeHtml(name)}</b> ist 0 Byte gross. Liegt die Datei nur in iCloud und ist noch nicht auf dieses Gerät geladen? Im Finder einmal darauf klicken, bis das Wolkensymbol verschwindet.`,'fehler');
    return;
  }

  /* NEXT 15.53 – HEIC ehrlich benennen statt still scheitern.

     iPhone-Fotos liegen in iCloud als HEIC. Safari kann das Format,
     Chrome, Firefox und Edge koennen es NICHT – dort schlaegt schon das
     Dekodieren fehl. Bisher lief das in denselben allgemeinen Fehlertext
     wie ein voller Speicher, und der stand ausserhalb des Bildschirms.
     Deshalb wirkte es, als sei der Knopf kaputt. */
  const heic=endung==='heic'||endung==='heif'||/hei[cf]/i.test(file.type||'');
  const kannHeic=(()=>{
    try{ return document.createElement('canvas').toDataURL('image/heic').startsWith('data:image/heic'); }catch{ return false; }
  })();
  const safari=/^((?!chrome|android|crios|fxios|edg).)*safari/i.test(navigator.userAgent||'');
  if(heic&&!safari&&!kannHeic){
    fotoMeldung(id,
      `<b>${escapeHtml(name)}</b> ist ein iPhone-Foto im HEIC-Format. Dieser Browser kann HEIC nicht öffnen – das ist eine Einschränkung des Browsers, nicht des DigiBoards.<br>Zwei Wege: DigiBoard <b>in Safari</b> öffnen und das Foto dort wählen – oder das Bild einmal als JPEG sichern (in <i>Fotos</i>: Bild markieren → Ablage → Exportieren → „1 Foto exportieren" → Format <b>JPEG</b>).`,
      'fehler');
    return;
  }

  fotoMeldung(id,`Foto <b>${escapeHtml(name)}</b> wird vorbereitet …`,'arbeit');

  let quelle='';
  try{
    quelle=URL.createObjectURL(file);
    const image=await mitFrist(new Promise((resolve,reject)=>{
      const kandidat=new Image();
      kandidat.onload=()=>resolve(kandidat);
      kandidat.onerror=()=>reject(new Error('decode'));
      kandidat.src=quelle;
    }),20000,'decode-frist');
    if(!image.width||!image.height)throw new Error('decode');
    const size=640,canvas=document.createElement('canvas');
    canvas.width=size;canvas.height=size;
    const ctx=canvas.getContext('2d');
    if(!ctx)throw new Error('canvas');
    const scale=Math.max(size/image.width,size/image.height),width=image.width*scale,height=image.height*scale;
    ctx.drawImage(image,(size-width)/2,(size-height)/2,width,height);
    const blob=await mitFrist(canvasAlsFotoBlob(canvas),20000,'canvas-frist');
    if(!blob)throw new Error('canvas');
    const student=state.students.find(item=>item.id===id);
    if(!student){ fotoMeldung(id,'Dieses Kind steht nicht mehr in der Liste. Bitte die Einstellungen einmal schliessen und neu öffnen.','fehler'); return; }
    const gespeichert=await mitFrist(photoStore.put(student.id,blob),25000,'speicher-frist');
    if(!gespeichert)throw new Error('storage');
    student.photo=gespeichert;
    const dauerhaft=saveState();
    refreshPhotoDependentViews();
    fotoMeldung(id,dauerhaft
      ?`Foto für <b>${escapeHtml(student.name)}</b> gespeichert und sichtbar ✓ (${Math.round(blob.size/1024)} KB)`
      :`Foto für <b>${escapeHtml(student.name)}</b> ist sichtbar, konnte aber nicht dauerhaft gespeichert werden. Bitte freien Speicher prüfen.`,
      dauerhaft?'gut':'fehler');
  }catch(error){
    console.error('Kinderfoto konnte nicht verarbeitet werden',error);
    const grund=error?.message||'';
    const text=
      grund==='decode'||grund==='decode-frist'
        ? `<b>${escapeHtml(name)}</b> konnte der Browser nicht öffnen (Format: ${escapeHtml(file.type||endung||'unbekannt')}). Bitte das Bild als <b>JPEG</b> oder <b>PNG</b> sichern und noch einmal wählen.`
      : grund==='canvas'||grund==='canvas-frist'
        ? `Das Bild <b>${escapeHtml(name)}</b> liess sich nicht verkleinern. Bitte ein anderes Bild versuchen.`
      : grund==='speicher-frist'
        ? `Der Fotospeicher antwortet nicht. Bitte die Seite einmal neu laden – und falls DigiBoard in mehreren Fenstern offen ist, die übrigen schliessen.`
      : `<b>${escapeHtml(name)}</b> konnte nicht gespeichert werden (${escapeHtml(grund||'unbekannter Fehler')}). Bitte freien Speicher prüfen und erneut versuchen.`;
    fotoMeldung(id,text,'fehler');
  }finally{
    if(quelle)try{URL.revokeObjectURL(quelle)}catch{}
  }
}
function currentWeekKey(){
  const date=new Date();const day=(date.getDay()+6)%7;date.setHours(12,0,0,0);date.setDate(date.getDate()-day);
  return dateKeyLocal(date);
}
function ensureWeeklyServices(){
  state.weeklyServices=state.weeklyServices||{week:'',assignments:{}};
  if(state.weeklyServices.week!==currentWeekKey())state.weeklyServices={week:currentWeekKey(),assignments:{}};
}
function renderServicePlanner(){
  ensureWeeklyServices();
  const selects=[document.querySelector('#weeklyServiceSelect'),document.querySelector('#kidsWeeklyServiceSelect')].filter(Boolean);
  selects.forEach(select=>{const selected=select.value||state.services[0];select.innerHTML=state.services.map(service=>`<option ${service===selected?'selected':''}>${escapeHtml(service)}</option>`).join('')});
  const entries=state.services.map(service=>[service,state.weeklyServices.assignments?.[service]||[]]);
  const serviceIcon=service=>({'Mensa':'🍽️','Flur':'🚪','Tür':'🔑','Tafel':'🧽','Pflanzen':'🌱'})[service]||'🤝';
  const serviceDetail=service=>({
    'Mensa':'Tische vorbereiten, beim Austeilen helfen und anschließend auf Ordnung achten.',
    'Flur':'Auf Ruhe und Ordnung im Flur achten und Wege freihalten.',
    'Tür':'Die Klassentür im Blick behalten und alle freundlich unterstützen.',
    'Tafel':'Tafel und Arbeitsbereich für die nächste Stunde sauber vorbereiten.',
    'Pflanzen':'Pflanzen prüfen und bei Bedarf vorsichtig gießen.'
  })[service]||'Gemeinsam Verantwortung für unsere Klasse übernehmen.';
  const cards=entries.map(([service,ids])=>{
    const children=ids.map(id=>state.students.find(student=>student.id===id)).filter(Boolean);
    const people=children.length
      ? children.map(child=>`<span class="service-child" title="${escapeHtml(child.name)}"><span class="service-child-picture">${studentPhotoMarkup(child,'service-child-photo')}</span><b>${escapeHtml(child.name)}</b></span>`).join('')
      : '<span class="service-unassigned"><i>+</i><b>Noch nicht eingeteilt</b></span>';
    return `<button type="button" class="service-result-card ${children.length?'is-assigned':'is-empty'}" aria-expanded="false"><span class="service-card-icon">${serviceIcon(service)}</span><div class="service-card-main"><small>${children.length?'DIENST-TEAM':'NOCH FREI'}</small><strong>${escapeHtml(service)}</strong><div class="service-child-pictures">${people}</div><div class="service-detail-copy"><p>${escapeHtml(serviceDetail(service))}</p><small>Gilt von Montag bis Freitag.</small></div></div><span class="service-more" aria-hidden="true">›</span></button>`;
  }).join('');
  [document.querySelector('#weeklyServiceResult'),document.querySelector('#kidsWeeklyServiceResult')].filter(Boolean).forEach(result=>{
    result.innerHTML=cards;
    result.querySelectorAll('.service-result-card').forEach(card=>card.onclick=()=>{
      const willOpen=!card.classList.contains('is-open');
      result.querySelectorAll('.service-result-card.is-open').forEach(openCard=>{openCard.classList.remove('is-open');openCard.setAttribute('aria-expanded','false')});
      card.classList.toggle('is-open',willOpen);card.setAttribute('aria-expanded',String(willOpen));
    });
  });
  const monday=new Date(`${state.weeklyServices.week}T12:00:00`),friday=new Date(monday);friday.setDate(monday.getDate()+4);
  const weekLabel=document.querySelector('#serviceWeekLabel');
  if(weekLabel)weekLabel.textContent=`📅 ${monday.toLocaleDateString('de-DE',{day:'2-digit',month:'2-digit'})} – ${friday.toLocaleDateString('de-DE',{day:'2-digit',month:'2-digit',year:'numeric'})}`;
  updateForestToolBelt();
}
function openServicePlanner(){renderServicePlanner();serviceDialog?.showModal()}
function drawWeeklyServiceFor(service){
  ensureWeeklyServices();
  if(!service||activeStudents().length<2)return;
  const used=new Set(Object.entries(state.weeklyServices.assignments).filter(([name])=>name!==service).flatMap(([,ids])=>ids));
  let pool=activeStudents().filter(student=>!used.has(student.id));if(pool.length<2)pool=[...activeStudents()];
  pool=[...pool];for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]]}
  state.weeklyServices.assignments[service]=pool.slice(0,2).map(student=>student.id);saveState();renderServicePlanner();
}
function drawWeeklyService(){drawWeeklyServiceFor(document.querySelector('#weeklyServiceSelect')?.value)}
function drawKidsWeeklyService(){drawWeeklyServiceFor(document.querySelector('#kidsWeeklyServiceSelect')?.value)}
function clearWeeklyServices(){state.weeklyServices={week:currentWeekKey(),assignments:{}};saveState();renderServicePlanner()}

function dateKeyLocal(date){
  const y=date.getFullYear(),m=String(date.getMonth()+1).padStart(2,'0'),d=String(date.getDate()).padStart(2,'0');
  return `${y}-${m}-${d}`;
}
function currentLessonIndex(rows){
  const now=new Date(); const mins=now.getHours()*60+now.getMinutes();
  let active=0;
  rows.forEach((r,i)=>{const match=String(r.time||'').match(/(\d{1,2}):(\d{2})/);const start=match?Number(match[1])*60+Number(match[2]):0;if(start<=mins)active=i});
  return active;
}
function lessonVisual(subject=''){
  const value=subject.toLowerCase();
  if(value.includes('pause'))return {icon:'🍎',tone:'gold'};
  if(value.includes('deutsch'))return {icon:'📕',tone:'red'};
  if(value.includes('mathe'))return {icon:'🔢',tone:'blue'};
  if(value.includes('sach'))return {icon:'🌍',tone:'green'};
  if(value.includes('sport'))return {icon:'🏃',tone:'orange'};
  if(value.includes('kunst'))return {icon:'🎨',tone:'purple'};
  if(value.includes('musik'))return {icon:'🎵',tone:'pink'};
  if(value.includes('engl'))return {icon:'💬',tone:'sky'};
  if(value.includes('lern'))return {icon:'📚',tone:'gold'};
  return {icon:'📝',tone:'forest'};
}
function automaticLessonInfo(now=new Date()){
  const day=now.getDay(),isWeekend=day===0||day===6,target=isWeekend?nextSchoolDate():now;
  const rows=getScheduleForDate(target).filter(row=>row.status!=='cancelled');
  if(!rows.length)return {mode:'empty',label:'Kein Unterricht eingetragen',current:null,next:null};
  if(isWeekend)return {mode:'next-day',label:`Als Nächstes · ${target.toLocaleDateString('de-DE',{weekday:'long'})}`,current:rows[0],next:rows[1]||null};
  const minutes=now.getHours()*60+now.getMinutes();
  const timed=rows.map(row=>{
    const matches=[...String(row.time||'').matchAll(/(\d{1,2}):(\d{2})/g)];
    const toMinutes=match=>match?Number(match[1])*60+Number(match[2]):0;
    return {row,start:toMinutes(matches[0]),end:toMinutes(matches[1])||toMinutes(matches[0])+45};
  });
  if(minutes<timed[0].start)return {mode:'before',label:'Erste Stunde',current:rows[0],next:rows[1]||null};
  const active=timed.findIndex(slot=>slot.start<=minutes&&minutes<slot.end);
  if(active>=0)return {mode:'live',label:'Jetzt im Waldunterricht',current:rows[active],next:rows[active+1]||null};
  const upcoming=timed.findIndex(slot=>minutes<slot.start);
  if(upcoming>=0)return {mode:'break',label:'Pause im Klassenwald',current:{subject:'Pause',time:`bis ${String(rows[upcoming].time||'').match(/\d{1,2}:\d{2}/)?.[0]||''}`,person:'Zeit zum Durchatmen'},next:rows[upcoming]};
  return {mode:'finished',label:'Unterrichtstag beendet',current:null,next:null};
}
function renderAutomaticLesson(){
  const info=automaticLessonInfo(),current=info.current,visual=lessonVisual(current?.subject||''),nextVisual=lessonVisual(info.next?.subject||''),desktop=document.querySelector('#forestLessonNow'),mobile=document.querySelector('#mobileLiveLesson');
  /* NEXT 13.0 – Auf der Tafel entfällt der „Als Nächstes …“-Streifen unter
     der Begrüßung. Stattdessen zeigt das Holzschild unten rechts das Fach,
     das gerade läuft – sonst wie bisher „Klassenwald“. Auf dem Handy bleibt
     die Unterrichts-Karte erhalten. */
  if(desktop){desktop.hidden=true;desktop.innerHTML='';}
  const running=current&&/^jetzt/i.test(info.label||'');
  document.documentElement.style.setProperty('--forest-sign-text',JSON.stringify(running?(current.subject||'Klassenwald'):'Klassenwald'));
  if(mobile)mobile.innerHTML=current?`<header><span class="lesson-icon ${visual.tone}">${visual.icon}</span><div><small>${escapeHtml(info.label)}</small><strong>${escapeHtml(current.subject||'Noch frei')}</strong><p>${escapeHtml(current.time||'')}${current.person?` · ${escapeHtml(current.person)}`:''}</p></div></header>${info.next?`<footer><span>Danach</span><strong>${nextVisual.icon} ${escapeHtml(info.next.subject||'Noch frei')}</strong><small>${escapeHtml(info.next.person||'')}</small></footer>`:'<footer><span>Danach</span><strong>🌿 Unterrichtstag beendet</strong></footer>'}`:`<header><span class="lesson-icon forest">🌿</span><div><small>STUNDENPLAN</small><strong>${escapeHtml(info.label)}</strong></div></header>`;
}
function getScheduleForDate(date){
  const weekday=date.getDay();
  const base=clone(state.content.weekSchedule[weekday]||[]);
  const overrides=state.content.dayOverrides[dateKeyLocal(date)]||{};
  return base.map((row,i)=>{
    const ov=overrides[i];
    if(!ov||ov.status==='normal')return {...row,status:'normal'};
    if(ov.status==='cancelled')return {...row,subject:ov.subject||row.subject,person:ov.person||'',status:'cancelled'};
    return {...row,subject:ov.subject||row.subject,person:ov.person||row.person,status:'changed'};
  }).filter(row=>row.subject||row.person||row.status!=='normal');
}
function nextSchoolDate(){
  const d=new Date(); while(d.getDay()===0||d.getDay()===6)d.setDate(d.getDate()+1); return d;
}
function openSettings(){renderWidgetVisibilitySettings();
  const date=nextSchoolDate();
  document.querySelector('#weekdaySelect').value=String(date.getDay()||1);
  document.querySelector('#overrideDate').value=dateKeyLocal(date);
  renderWeekScheduleEditor(); renderOverrideEditor(); renderOverrideRange(); renderSharedSettings(); renderClassWorldSettings(); renderClassManagement();
  showSettingsHome();
  settingsDialog.showModal();
}
const settingsSectionIds=['settingsDaily','settingsChanges','settingsWeekly','settingsClass','settingsPlan','settingsWorld','settingsTools','settingsBackup','settingsShare'];
function showSettingsHome(){
  document.querySelector('#settingsHome')?.removeAttribute('hidden');document.querySelector('#settingsDetailBar')?.setAttribute('hidden','');
  settingsSectionIds.forEach(id=>document.querySelector(`#${id}`)?.setAttribute('hidden',''));
  document.querySelector('#settingsDialog .sticky-actions')?.setAttribute('hidden','');
  document.querySelector('#settingsDialog .settings-card')?.classList.add('settings-home-mode');
}
function showSettingsSection(targetId,dailyCard=''){
  document.querySelector('#settingsHome')?.setAttribute('hidden','');document.querySelector('#settingsDetailBar')?.removeAttribute('hidden');
  settingsSectionIds.forEach(id=>{const section=document.querySelector(`#${id}`);if(!section)return;section.toggleAttribute('hidden',id!==targetId);if(id===targetId&&section.tagName==='DETAILS')section.open=true});
  document.querySelector('#settingsDialog .sticky-actions')?.removeAttribute('hidden');
  document.querySelector('#settingsDialog .settings-card')?.classList.remove('settings-home-mode');
  if(targetId==='settingsDaily')document.querySelectorAll('[data-daily-settings-card]').forEach(card=>card.toggleAttribute('hidden',card.dataset.dailySettingsCard!==dailyCard));
  const titles={settingsDaily:dailyCard==='food'?'Essen & Geburtstag':dailyCard==='task'?'Aufgaben & Arbeitsauftrag':'Nachrichten & Tagesinfos',settingsChanges:'Stundenplan',settingsWeekly:'Wochenziel & Aufräumen',settingsClass:'Füchse verwalten',settingsPlan:'Stundenplan',settingsWorld:'Klassenwelt',settingsTools:'Wald & Werkzeuge',settingsBackup:'Sichern & Laden',settingsShare:'Kinderdaten aufs Handy'};
  const title=document.querySelector('#settingsDetailTitle');if(title)title.textContent=titles[targetId]||'Einstellungen';
  const card=document.querySelector('#settingsDialog .settings-card');if(card)card.scrollTop=0;
}
function openSettingsSection(event){
  event.preventDefault();
  const target=document.querySelector(event.currentTarget.getAttribute('href'));if(!target)return;
  if(target.tagName==='DETAILS')target.open=true;
  target.scrollIntoView({behavior:'auto',block:'start'});
  document.querySelectorAll('.settings-jump-nav a').forEach(link=>link.classList.toggle('active',link===event.currentTarget));
}
function renderWeekScheduleEditor(){
  const weekday=document.querySelector('#weekdaySelect').value;
  scheduleEditorWeekday=weekday;
  const holder=document.querySelector('#weekScheduleEditor'); holder.innerHTML='';
  const rows=state.content.weekSchedule[weekday]||[];
  const arrival=(state.content.schoolDay||[]).find(item=>item.kind==='arrival');
  if(arrival){const start=document.createElement('div');start.className='schedule-arrival-row';start.innerHTML=`<span>🌤️</span><strong>${escapeHtml(arrival.time)}</strong><div><b>${escapeHtml(arrival.label)}</b><small>${escapeHtml(arrival.detail)}</small></div>`;holder.append(start)}
  rows.forEach((row,i)=>{
    const pause=(state.content.schoolDay||[]).find(item=>item.kind==='break'&&Number(item.after)===i+1);
    const div=document.createElement('div'); div.className='schedule-edit-row';
    div.innerHTML=`<span class="lesson-number">${i+1}</span><span class="schedule-time">${escapeHtml(row.time)}</span><label><small>Fach / Angebot</small><input data-field="subject" value="${escapeHtml(row.subject)}" placeholder="Noch frei" aria-label="Fach"></label><label><small>Lehrkraft / Raum</small><input data-field="person" value="${escapeHtml(row.person)}" placeholder="–" aria-label="Person"></label>${pause?`<span class="schedule-break-chip">🍎 danach ${escapeHtml(pause.label)} · ${escapeHtml(pause.time)}</span>`:''}`;
    holder.append(div);
  });
}
function collectWeekdayEditor(){
  const weekday=scheduleEditorWeekday||document.querySelector('#weekdaySelect').value;
  const times=(state.content.schoolDay||[]).filter(item=>item.kind==='lesson').map(item=>item.time);
  state.content.weekSchedule[weekday]=[...document.querySelectorAll('#weekScheduleEditor .schedule-edit-row')].map((row,index)=>({time:times[index]||'',subject:row.querySelector('[data-field="subject"]').value.trim(),person:row.querySelector('[data-field="person"]').value.trim()}));
}
function renderOverrideEditor(){
  const dateValue=document.querySelector('#overrideDate').value; const date=new Date(`${dateValue}T12:00:00`);
  const rows=clone(state.content.weekSchedule[date.getDay()]||[]); const ovs=state.content.dayOverrides[dateValue]||{};
  const holder=document.querySelector('#overrideEditor'); holder.innerHTML='';
  rows.forEach((row,i)=>{const ov=ovs[i]||{status:'normal'},pause=(state.content.schoolDay||[]).find(item=>item.kind==='break'&&Number(item.after)===i+1);const div=document.createElement('div');div.className=`override-row status-${ov.status||'normal'}`;div.innerHTML=`<span class="override-base"><b>${i+1}</b><strong>${escapeHtml(row.time)}</strong><span>${escapeHtml(row.subject||'Noch frei')}</span><small>${escapeHtml(row.person||'')}</small></span><select data-override-status data-index="${i}" aria-label="Art der Änderung"><option value="normal">Unverändert</option><option value="changed">Für diesen Tag ändern</option><option value="cancelled">Fällt aus</option></select><input data-override-subject data-index="${i}" value="${escapeHtml(ov.subject||'')}" placeholder="${escapeHtml(row.subject||'Neues Fach')}"><input data-override-person data-index="${i}" value="${escapeHtml(ov.person||'')}" placeholder="${escapeHtml(row.person||'Person / Raum')}">${pause?`<span class="schedule-break-chip">🍎 danach ${escapeHtml(pause.label)} · ${escapeHtml(pause.time)}</span>`:''}`;const select=div.querySelector('select');select.value=ov.status||'normal';const setChanged=()=>{if(select.value==='normal')select.value='changed';div.className=`override-row status-${select.value}`};select.onchange=()=>div.className=`override-row status-${select.value}`;div.querySelectorAll('input').forEach(input=>input.addEventListener('input',setChanged));holder.append(div)});
}
function setScheduleSettingsMode(mode='base'){
  document.querySelector('#scheduleBasePanel')?.toggleAttribute('hidden',mode!=='base');document.querySelector('#scheduleDayPanel')?.toggleAttribute('hidden',mode!=='day');
  document.querySelectorAll('[data-schedule-mode]').forEach(button=>button.classList.toggle('active',button.dataset.scheduleMode===mode));
  if(mode==='day')renderOverrideEditor();
}
function renderOverrideRange(){
  const holder=document.querySelector('#overrideRangeGrid'),dateInput=document.querySelector('#overrideDate');if(!holder||!dateInput)return;holder.innerHTML='';
  const selected=dateInput.value;let date=new Date();date.setHours(12,0,0,0);let count=0;
  while(count<15){if(date.getDay()!==0&&date.getDay()!==6){const key=dateKeyLocal(date),changes=Object.keys(state.content.dayOverrides?.[key]||{}).length,button=document.createElement('button');button.type='button';button.className='override-range-day';if(key===selected)button.classList.add('selected');if(changes)button.classList.add('has-changes');button.innerHTML=`<strong>${date.toLocaleDateString('de-DE',{weekday:'short'})}</strong><span>${date.toLocaleDateString('de-DE',{day:'2-digit',month:'2-digit'})}</span><small>${changes?`${changes} Änderung${changes===1?'':'en'}`:'Grundplan'}</small>`;button.onclick=()=>{dateInput.value=key;renderOverrideEditor();renderOverrideRange()};holder.append(button);count++}date.setDate(date.getDate()+1)}
}
function mealForDate(date){
  const key=dateKeyLocal(date),scheduled=state.content.mealCalendar?.[key];
  return scheduled||{...(state.content.meal||defaults.content.meal),birthday:key===todayKey()?(state.content.birthday||''):''};
}
function renderMealPlanner(){
  const monthInput=document.querySelector('#mealMonthInput');if(!monthInput)return;
  const selectedDate=new Date(`${mealSelectedDateKey}T12:00:00`),monthKey=`${selectedDate.getFullYear()}-${String(selectedDate.getMonth()+1).padStart(2,'0')}`;
  if(!monthInput.value)monthInput.value=monthKey;
  const [year,month]=monthInput.value.split('-').map(Number),monthDate=new Date(year,month-1,1),title=document.querySelector('#mealMonthTitle');
  if(title)title.textContent=monthDate.toLocaleDateString('de-DE',{month:'long',year:'numeric'});
  const grid=document.querySelector('#mealMonthGrid');if(grid){grid.innerHTML='';const weekdays=[];for(let day=1;day<=new Date(year,month,0).getDate();day++){const date=new Date(year,month-1,day);if(date.getDay()!==0&&date.getDay()!==6)weekdays.push(date)}
    const firstOffset=weekdays.length?Math.min(4,(weekdays[0].getDay()+6)%7):0;for(let i=0;i<firstOffset;i++){const blank=document.createElement('span');blank.className='meal-day-blank';grid.append(blank)}
    weekdays.forEach(date=>{const key=dateKeyLocal(date),meal=state.content.mealCalendar?.[key],button=document.createElement('button');button.type='button';button.className='meal-calendar-day';if(key===mealSelectedDateKey)button.classList.add('selected');if(meal?.title)button.classList.add('has-meal');button.innerHTML=`<span>${date.getDate()}</span><strong>${escapeHtml(meal?.title||'＋')}</strong>`;button.onclick=()=>{mealSelectedDateKey=key;renderMealPlanner()};grid.append(button)})}
  const meal=state.content.mealCalendar?.[mealSelectedDateKey]||{title:'',detail:'',dessert:'',birthday:''};
  document.querySelector('#mealTitleInput').value=meal.title||'';document.querySelector('#mealDetailInput').value=meal.detail||'';document.querySelector('#dessertInput').value=meal.dessert||'';document.querySelector('#birthdayNameInput').value=meal.birthday||'';
  const selectedLabel=document.querySelector('#mealSelectedDate');if(selectedLabel)selectedLabel.textContent=new Date(`${mealSelectedDateKey}T12:00:00`).toLocaleDateString('de-DE',{weekday:'long',day:'2-digit',month:'long'});
  renderMealFavorites();renderBirthdayOverview();
}
function saveSelectedMealDay(showMessage=true){
  const meal={title:document.querySelector('#mealTitleInput').value.trim(),detail:document.querySelector('#mealDetailInput').value.trim(),dessert:document.querySelector('#dessertInput').value.trim(),birthday:document.querySelector('#birthdayNameInput').value.trim()};
  state.content.mealCalendar=state.content.mealCalendar||{};if(meal.title||meal.detail||meal.dessert||meal.birthday)state.content.mealCalendar[mealSelectedDateKey]=meal;else delete state.content.mealCalendar[mealSelectedDateKey];
  if(mealSelectedDateKey===todayKey()){state.content.meal={title:meal.title,detail:meal.detail,dessert:meal.dessert};state.content.birthday=meal.birthday}
  saveState();renderDashboard();renderMealPlanner();const status=document.querySelector('#mealPlannerStatus');if(status&&showMessage)status.textContent='Essen für diesen Tag gespeichert ✓';
}
function renderBirthdayOverview(){
  const holder=document.querySelector('#birthdayOverviewList');if(!holder)return;
  const withDates=activeStudents().filter(student=>/^\d{4}-\d{2}-\d{2}$/.test(String(student.birthday||'')));
  if(!withDates.length){holder.innerHTML='<div class="birthday-overview-empty">Noch keine Geburtsdaten eingetragen.</div>';return}
  const now=new Date(),thisMonth=String(now.getMonth()+1).padStart(2,'0');
  const nextOccurrence=student=>{
    const [,month,day]=student.birthday.split('-');
    let date=new Date(now.getFullYear(),Number(month)-1,Number(day));
    if(date<new Date(now.getFullYear(),now.getMonth(),now.getDate()))date=new Date(now.getFullYear()+1,Number(month)-1,Number(day));
    return date;
  };
  const monthKids=withDates.filter(student=>student.birthday.slice(5,7)===thisMonth)
    .sort((a,b)=>a.birthday.slice(8)-b.birthday.slice(8));
  const upcoming=[...withDates].sort((a,b)=>nextOccurrence(a)-nextOccurrence(b)).slice(0,3);
  const fmt=student=>{const [,month,day]=student.birthday.split('-');return `${Number(day)}.${Number(month)}.`};
  const isToday=student=>student.birthday.slice(5)===`${thisMonth}-${String(now.getDate()).padStart(2,'0')}`;
  const monthRows=monthKids.length
    ? monthKids.map(student=>`<div class="birthday-row${isToday(student)?' is-today':''}"><span>${isToday(student)?'🎉':'🎂'}</span><strong>${escapeHtml(student.name)}</strong><b>${fmt(student)}</b></div>`).join('')
    : '<div class="birthday-overview-empty">Diesen Monat hat niemand Geburtstag.</div>';
  const nextRows=upcoming.map(student=>`<div class="birthday-row"><span>🗓️</span><strong>${escapeHtml(student.name)}</strong><b>${fmt(student)}</b></div>`).join('');
  holder.innerHTML=`<div class="birthday-col"><small>${now.toLocaleDateString('de-DE',{month:'long'})}</small>${monthRows}</div><div class="birthday-col"><small>Als Nächstes</small>${nextRows}</div>`;
}
function renderMealFavorites(){
  const holder=document.querySelector('#mealFavorites');if(!holder)return;holder.innerHTML='';
  (state.content.mealFavorites||[]).forEach(favorite=>{const wrap=document.createElement('div');wrap.className='meal-favorite-wrap';wrap.innerHTML=`<button type="button" class="meal-favorite-button"><span>🍴</span><div><strong>${escapeHtml(favorite.title)}</strong><small>${escapeHtml(favorite.detail||favorite.dessert||'Schnell einfügen')}</small></div></button><button type="button" class="meal-favorite-remove" aria-label="${escapeHtml(favorite.title)} entfernen">×</button>`;wrap.querySelector('.meal-favorite-button').onclick=()=>{document.querySelector('#mealTitleInput').value=favorite.title||'';document.querySelector('#mealDetailInput').value=favorite.detail||'';document.querySelector('#dessertInput').value=favorite.dessert||'';document.querySelector('#mealPlannerStatus').textContent='Favorit übernommen – jetzt den Tag speichern.'};wrap.querySelector('.meal-favorite-remove').onclick=()=>{state.content.mealFavorites=state.content.mealFavorites.filter(item=>item.id!==favorite.id);saveState();renderMealFavorites()};holder.append(wrap)});
}
function saveMealFavorite(){
  const favorite={id:`mf${Date.now()}`,title:document.querySelector('#mealTitleInput').value.trim(),detail:document.querySelector('#mealDetailInput').value.trim(),dessert:document.querySelector('#dessertInput').value.trim()};if(!favorite.title)return;
  state.content.mealFavorites=state.content.mealFavorites||[];const duplicate=state.content.mealFavorites.find(item=>String(item.title||'').toLowerCase()===favorite.title.toLowerCase()&&String(item.detail||'').toLowerCase()===favorite.detail.toLowerCase());if(!duplicate)state.content.mealFavorites.unshift(favorite);saveState();renderMealFavorites();document.querySelector('#mealPlannerStatus').textContent=duplicate?'Dieser Favorit ist schon vorhanden.':'Als Favorit gespeichert ★';
}
function renderSharedSettings(){
  mealSelectedDateKey=todayKey();const mealMonthInput=document.querySelector('#mealMonthInput');if(mealMonthInput)mealMonthInput.value=mealSelectedDateKey.slice(0,7);renderMealPlanner();
  document.querySelector('#infoInput').value=state.content.infos.map(x=>`${x.left} | ${x.right}`).join('\n');
  renderInfoLineEditor(state.content.infos);
  document.querySelector('#weeklyGoalInput').value=state.content.weeklyGoal.text||'';
  document.querySelector('#taskNoteTitleInput').value=state.content.taskNote?.title||'';
  document.querySelector('#taskNoteTaskInput').value=state.content.taskNote?.task||'';
  document.querySelector('#taskNoteHintInput').value=state.content.taskNote?.hint||'';
  document.querySelector('#taskNoteColorInput').value=state.content.taskNote?.color||'blue';
  renderTaskFavorites();renderTaskPreview();
  document.querySelector('#weeklyGoalRequiredDays').value=String(state.content.weeklyGoal.requiredDays||4);
  document.querySelector('#cleanupDurationInput').value=state.content.cleanup.duration||90;
  document.querySelector('#cleanupAudioUrlInput').value=state.content.cleanup.audioUrl||'';
  document.querySelector('#rewardChestMode').value=state.rewardChest?.mode||'leaves';
  document.querySelector('#rewardChestThreshold').value=state.rewardChest?.threshold||300;
  updateRewardChestSettingsVisibility();
  const sync=state.remoteSync||{};const syncUrl=document.querySelector('#boardSyncUrl'),syncClass=document.querySelector('#boardSyncClassId'),syncKey=document.querySelector('#boardSyncKey'),syncEnabled=document.querySelector('#boardSyncEnabled');
  if(syncUrl)syncUrl.value=sync.url||'';if(syncClass)syncClass.value=sync.classId||'fuchsklasse-2026';if(syncKey)syncKey.value=sync.key||'';if(syncEnabled)syncEnabled.checked=!!sync.enabled;
  document.querySelector('#settingsSaveStatus').textContent='';
}
function normaliseInfoStyle(item={}){
  return {...item,font:['system','rounded'].includes(item.font)?item.font:'system',size:['small','medium','large'].includes(item.size)?item.size:'medium',color:['forest','red','blue'].includes(item.color)?item.color:'forest',marker:['none','yellow','green','pink'].includes(item.marker)?item.marker:'none',bold:item.bold!==false};
}
function infoRowStyle(item={}){
  const style=normaliseInfoStyle(item),sizes={small:'12px',medium:'14px',large:'17px'},colors={forest:'#eef8e8',red:'#ffb1aa',blue:'#b9ddff'},markers={none:'transparent',yellow:'rgba(255,218,82,.36)',green:'rgba(157,218,102,.32)',pink:'rgba(255,139,174,.28)'},fonts={system:'system-ui,-apple-system,sans-serif',rounded:'Trebuchet MS,ui-rounded,sans-serif'};
  return `--info-font:${fonts[style.font]};--info-size:${sizes[style.size]};--info-color:${colors[style.color]};--info-bg:${markers[style.marker]}`;
}
function collectInfoLineEditor(){
  return [...document.querySelectorAll('#infoLineEditor .info-editor-row')].map(row=>{const icon=row.querySelector('[data-info-icon]').value,text=row.querySelector('[data-info-left]').value.trim();return {icon,left:`${icon} ${text}`.trim(),right:row.querySelector('[data-info-right]').value.trim(),bold:row.querySelector('[data-info-bold]').checked,font:row.querySelector('[data-info-font]').value,size:row.querySelector('[data-info-size]').value,color:row.querySelector('[data-info-color]').value,marker:row.querySelector('[data-info-marker]').value}}).filter(item=>item.left||item.right);
}
function renderInfoLineEditor(items=state.content.infos){
  const editor=document.querySelector('#infoLineEditor');if(!editor)return;const rows=items.length?items:[{left:'',right:'',bold:true,font:'system',size:'medium',color:'forest',marker:'none'}];editor.innerHTML='';
  rows.forEach((raw,index)=>{
    const iconGroups=[
      ['Hinweise',[['📣','Hinweis'],['ℹ️','Information'],['❗','Wichtig'],['✅','Erledigt'],['🔔','Erinnerung'],['⭐','Besonders']]],
      ['Schule',[['📚','Bücher'],['🎒','Schulsachen'],['✏️','Schreiben'],['🧮','Mathematik'],['🎨','Kunst'],['🎵','Musik'],['👥','Klassenrat']]],
      ['Tag',[['📅','Termin'],['⏰','Uhrzeit'],['🎂','Geburtstag'],['🍽️','Essen'],['🏠','Zuhause'],['🚌','Ausflug']]],
      ['Aktiv',[['🏊','Schwimmen'],['⚽','Sport'],['🌳','Natur'],['🌱','Pflanzen'],['☔','Wetter'],['📱','iPad'],['❤️','Gemeinsam']]]
    ];
    const known=iconGroups.flatMap(([,icons])=>icons.map(([value])=>value));
    const iconOptions=iconGroups.map(([group,icons])=>`<optgroup label="${group}">${icons.map(([value,label])=>`<option value="${value}">${value} ${label}</option>`).join('')}</optgroup>`).join('');
    const item=normaliseInfoStyle(raw),row=document.createElement('article');row.className='info-editor-row',parts=String(item.left||'').trim().split(/\s+/),inferredIcon=known.includes(parts[0])?parts.shift():'',icon=item.icon||inferredIcon||'📣',text=parts.join(' ');
    row.innerHTML=`<div class="info-row-number">${index+1}</div><div class="info-text-fields"><label class="info-icon-field"><span>Icon</span><select data-info-icon aria-label="Icon auswählen" title="Icon auswählen">${iconOptions}</select></label><input data-info-left value="${escapeHtml(text)}" placeholder="Überschrift"><input data-info-right value="${escapeHtml(item.right||'')}" placeholder="Zusatzinformation"></div><button type="button" class="info-style-toggle" data-toggle-info-style aria-expanded="false">Gestaltung <span>⌄</span></button><div class="info-format-tools"><label class="info-bold-toggle" title="Fett"><input data-info-bold type="checkbox" ${item.bold?'checked':''}><b>B</b></label><label>Schrift<select data-info-font><option value="system">Klar</option><option value="rounded">Rund</option></select></label><label>Größe<select data-info-size><option value="small">Klein</option><option value="medium">Mittel</option><option value="large">Groß</option></select></label><label>Farbe<select data-info-color><option value="forest">Hell</option><option value="red">Rot</option><option value="blue">Blau</option></select></label><label>Marker<select data-info-marker><option value="none">Ohne</option><option value="yellow">Gelb</option><option value="green">Grün</option><option value="pink">Rosa</option></select></label><button type="button" data-remove-info aria-label="Infozeile löschen">×</button></div>`;
    row.querySelector('[data-info-icon]').value=icon;
    row.querySelector('[data-info-font]').value=item.font;row.querySelector('[data-info-size]').value=item.size;row.querySelector('[data-info-color]').value=item.color;row.querySelector('[data-info-marker]').value=item.marker;
    row.querySelectorAll('input,select').forEach(control=>control.addEventListener('input',renderInfoPreview));
    row.querySelector('[data-toggle-info-style]').onclick=event=>{const open=row.classList.toggle('style-open');event.currentTarget.setAttribute('aria-expanded',open?'true':'false');event.currentTarget.querySelector('span').textContent=open?'⌃':'⌄'};
    row.querySelector('[data-remove-info]').onclick=()=>{const current=collectInfoLineEditor();current.splice(index,1);renderInfoLineEditor(current)};
    editor.append(row);
  });
  renderInfoPreview();
}
function renderInfoPreview(){
  const preview=document.querySelector('#infoLivePreview');if(!preview)return;const items=collectInfoLineEditor();
  preview.innerHTML=items.length?items.map(item=>`<div class="info-preview-row" style="${infoRowStyle(item)}"><span>${escapeHtml(item.left||'Info')}</span><strong style="font-weight:${item.bold?'900':'500'}">${escapeHtml(item.right||'')}</strong></div>`).join(''):'<div class="info-preview-empty">Hier erscheint deine Tagesinfo.</div>';
}
function addInfoLine(){const items=collectInfoLineEditor();items.push({left:'',right:'',bold:true,font:'system',size:'medium',color:'forest',marker:'none'});renderInfoLineEditor(items);document.querySelector('#infoLineEditor .info-editor-row:last-child [data-info-left]')?.focus()}
function taskColorTheme(color='blue'){
  const themes={blue:['#2476c9','#15569e','#eaf4ff'],red:['#d7463f','#9d2928','#fff0ed'],green:['#2c9a57','#17683c','#edf9e8'],yellow:['#e7aa24','#9a6814','#fff8dc'],purple:['#8b5bc6','#60359a','#f5efff'],orange:['#e8792e','#a84a18','#fff1e7']};
  const [accent,deep,paper]=themes[color]||themes.blue;return `--task-accent:${accent};--task-deep:${deep};--task-paper:${paper}`;
}
function renderTaskPreview(){
  const title=document.querySelector('#taskNoteTitleInput')?.value.trim()||'Aufgabe',text=document.querySelector('#taskNoteTaskInput')?.value.trim()||'Hier erscheint der Arbeitsauftrag.',hint=document.querySelector('#taskNoteHintInput')?.value.trim()||'';
  const color=document.querySelector('#taskNoteColorInput')?.value||'blue',preview=document.querySelector('.task-live-preview');if(preview)preview.style.cssText=taskColorTheme(color);
  const titleNode=document.querySelector('#taskPreviewTitle'),textNode=document.querySelector('#taskPreviewText'),hintNode=document.querySelector('#taskPreviewHint');if(titleNode)titleNode.textContent=title;if(textNode)textNode.textContent=text;if(hintNode){hintNode.textContent=hint;hintNode.hidden=!hint}
}
function renderTaskFavorites(){
  const holder=document.querySelector('#taskFavorites');if(!holder)return;holder.innerHTML='';
  (state.content.taskFavorites||defaults.content.taskFavorites).forEach(favorite=>{const button=document.createElement('button');button.type='button';button.style.cssText=taskColorTheme(favorite.color||'blue');button.innerHTML=`<span>${escapeHtml(favorite.icon||'📘')}</span><div><strong>${escapeHtml(favorite.title)}</strong><small>${escapeHtml(favorite.task)}</small></div>`;button.onclick=()=>{document.querySelector('#taskNoteTitleInput').value=favorite.title||'';document.querySelector('#taskNoteTaskInput').value=favorite.task||'';document.querySelector('#taskNoteHintInput').value=favorite.hint||'';document.querySelector('#taskNoteColorInput').value=favorite.color||'blue';renderTaskPreview()};holder.append(button)});
}
function saveTaskFavorite(){
  const favorite={id:`tf${Date.now()}`,icon:'📘',title:document.querySelector('#taskNoteTitleInput').value.trim(),task:document.querySelector('#taskNoteTaskInput').value.trim(),hint:document.querySelector('#taskNoteHintInput').value.trim(),color:document.querySelector('#taskNoteColorInput').value||'blue'};if(!favorite.title)return;
  state.content.taskFavorites=state.content.taskFavorites||clone(defaults.content.taskFavorites);state.content.taskFavorites.unshift(favorite);state.content.taskFavorites=state.content.taskFavorites.slice(0,6);saveState();renderTaskFavorites();
}
function updateRewardChestSettingsVisibility(){const label=document.querySelector('#rewardChestThresholdLabel');if(label)label.hidden=document.querySelector('#rewardChestMode')?.value==='all'}
function saveSettings(){
  collectWeekdayEditor();
  state.classWorld.className=(document.querySelector('#classNameInput')?.value||'').trim()||defaults.classWorld.className;
  state.classWorld.welcome=(document.querySelector('#classWelcomeInput')?.value||'').trim()||defaults.classWorld.welcome;
  state.dailyQuote={mode:document.querySelector('#dailyQuoteMode')?.value||'auto',fixed:(document.querySelector('#dailyQuoteFixed')?.value||'').trim(),custom:(document.querySelector('#dailyQuoteCustom')?.value||'').split(/\n+/).map(item=>item.trim()).filter(Boolean)};
  state.classWorld.dailyOverviewTitle=(document.querySelector('#dailyOverviewTitleInput')?.value||'').trim()||'Füchse im Blick';
  state.classWorld.kidsAreaNames=state.classWorld.kidsAreaNames||clone(defaults.classWorld.kidsAreaNames);state.classWorld.kidsAreaNames[state.classWorld.theme||'forest']=(document.querySelector('#kidsAreaNameInput')?.value||'').trim()||defaults.classWorld.kidsAreaNames[state.classWorld.theme||'forest']||'Kinderbereich';
  const seasonValue=document.querySelector('#seasonPreviewSelect')?.value||'auto';state.seasonPreview=seasonValue==='auto'?null:seasonValue;
  state.classWorld.customTheme={mascot:(document.querySelector('#customMascotInput')?.value||'🐾').trim()||'🐾',label:(document.querySelector('#customWorldLabelInput')?.value||'Eigene Welt').trim()||'Eigene Welt',rewardTitle:(document.querySelector('#customRewardTitleInput')?.value||'Unsere Stars').trim()||'Unsere Stars',rewardUnit:(document.querySelector('#customRewardUnitInput')?.value||'Sterne').trim()||'Sterne',accent:document.querySelector('#customAccentInput')?.value||'#2e7d32',deep:document.querySelector('#customDeepInput')?.value||'#315f28',sky:document.querySelector('#customSkyInput')?.value||'#eef8cf',ground:document.querySelector('#customGroundInput')?.value||'#59a85b'};
  const dateValue=document.querySelector('#overrideDate').value; const ovs={};
  document.querySelectorAll('#overrideEditor .override-row').forEach((row,i)=>{const status=row.querySelector('[data-override-status]').value;const subject=row.querySelector('[data-override-subject]').value.trim();const person=row.querySelector('[data-override-person]').value.trim();if(status!=='normal'||subject||person)ovs[i]={status,subject,person}});
  if(Object.keys(ovs).length)state.content.dayOverrides[dateValue]=ovs;else delete state.content.dayOverrides[dateValue];
  saveSelectedMealDay(false);
  state.content.infos=collectInfoLineEditor();
  state.content.weeklyGoal.text=document.querySelector('#weeklyGoalInput').value.trim();
  state.content.weeklyGoal.requiredDays=Number(document.querySelector('#weeklyGoalRequiredDays').value)||4;
  state.content.taskNote={title:document.querySelector('#taskNoteTitleInput').value.trim(),task:document.querySelector('#taskNoteTaskInput').value.trim(),hint:document.querySelector('#taskNoteHintInput').value.trim(),color:document.querySelector('#taskNoteColorInput').value||'blue'};
  state.content.cleanup.duration=Math.max(15,Number(document.querySelector('#cleanupDurationInput').value)||90);
  state.content.cleanup.audioUrl=document.querySelector('#cleanupAudioUrlInput').value.trim();
  state.rewardChest={mode:document.querySelector('#rewardChestMode').value,threshold:Math.max(10,Number(document.querySelector('#rewardChestThreshold').value)||300)};
  state.remoteSync={...state.remoteSync,enabled:!!document.querySelector('#boardSyncEnabled')?.checked,url:(document.querySelector('#boardSyncUrl')?.value||'').trim(),classId:(document.querySelector('#boardSyncClassId')?.value||'').trim()||'fuchsklasse-2026',key:document.querySelector('#boardSyncKey')?.value||''};
  saveState();applyClassWorld();updateSeason();renderDashboard();renderOverrideRange();document.querySelector('#settingsSaveStatus').textContent='Alles gespeichert ✓';
}
function resetSettings(){state.content=clone(defaults.content);saveState();renderWeekScheduleEditor();renderOverrideEditor();renderSharedSettings();renderDashboard();document.querySelector('#settingsSaveStatus').textContent='Beispieldaten eingesetzt ✓'}
function isIOSDevice(){return /iPad|iPhone|iPod/.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1)}
async function exportDigiBoardBackupFile(){
  /* STUFE 1 – Die Fotos liegen jetzt in der IndexedDB und waeren im Backup
     sonst nicht enthalten. Sie werden hier wieder als Data-URL eingebettet,
     damit die Sicherungsdatei fuer sich allein vollstaendig bleibt. */
  const status=document.querySelector('#digiBoardBackupStatus'),date=dateKeyLocal(new Date());
  if(status)status.textContent='Backup wird vorbereitet …';
  /* NEXT 15.46 – Vorher wurde hier sofort eingebettet. Lief die Fotodatenbank
     noch hoch, war der Zwischenspeicher leer und die Sicherung enthielt null
     Fotos, ohne dass es jemand merkte. Erst warten, dann einbetten. */
  await photoStore.ready;
  const exportState=await photoStore.inlineForExport(state);
  const fotoBilanz=photoStore.photoReport(exportState.students);
  const payload={format:'digiboard-backup',version:2,createdAt:new Date().toISOString(),appVersion:'15.71',state:exportState},json=JSON.stringify(payload,null,2),fileName=`DigiBoard-${state.classWorld?.className||'Klasse'}-${date}.digiboard-backup.json`,file=new File([json],fileName,{type:'application/json'});
  try{
    /* NEXT 11.97 – Der macOS-Share-Dialog hat kein „In Finder sichern“ und
       verwirrt dort nur (AirDrop, Mail, Notizen …). Auf dem Mac deshalb
       immer der normale Download-Link – landet direkt in „Downloads“.
       Auf iPhone/iPad bleibt der Share-Dialog sinnvoll, dort öffnet
       „In Dateien sichern“ direkt iCloud Drive. */
    const canShareFile=!!navigator.share&&(!navigator.canShare||navigator.canShare({files:[file]}));
    if(isIOSDevice()&&canShareFile){await navigator.share({files:[file],title:'DigiBoard-Backup',text:'In iCloud Drive sichern'});if(status)status.textContent=`Backup bereitgestellt: ${fotoBilanz.kinder} Kinder, ${fotoBilanz.bilder} Fotos ${fotoBilanz.bilder?'✓':'– Achtung, ohne Fotos!'}`;return}
    const url=URL.createObjectURL(file),link=document.createElement('a');link.href=url;link.download=fileName;document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);if(status)status.textContent=`Backup heruntergeladen: ${fotoBilanz.kinder} Kinder, ${fotoBilanz.bilder} Fotos ${fotoBilanz.bilder?'✓':'– Achtung, ohne Fotos!'}`;
  }catch(error){if(error?.name!=='AbortError'&&status)status.textContent='Backup konnte nicht erstellt werden.'}
}
function importDigiBoardBackupFile(file){
  const status=document.querySelector('#digiBoardBackupStatus');if(!file)return;const reader=new FileReader();
  reader.onload=async()=>{try{const payload=JSON.parse(reader.result),next=payload?.format==='digiboard-backup'?payload.state:payload;if(!next||!Array.isArray(next.students)||!next.classWorld)throw new Error('invalid');if(!confirm(`Backup für „${next.classWorld.className||'Klasse'}“ laden? Die aktuell gespeicherten Daten werden ersetzt.`))return;
    /* STUFE 1 – Fotos aus dem Backup wandern direkt in die IndexedDB. Frueher
       landeten sie als Data-URL im localStorage und konnten allein beim Import
       schon die 5-MB-Grenze sprengen. */
    if(status)status.textContent=`Fotos werden übernommen … (${next.students.length} Kinder, das kann eine Minute dauern)`;
    /* NEXT 15.53 – Bleibt die Fotouebernahme haengen, wurde bis hierher NICHTS
       gespeichert und die Meldung stand fuer immer auf „wird uebernommen".
       Jetzt gilt eine Frist; danach wird wenigstens der Rest des Backups
       gerettet und ehrlich gesagt, dass die Fotos fehlen. */
    let fotosOk=true;
    try{
      await Promise.race([
        photoStore.absorbFromImport(next),
        new Promise((_,ab)=>setTimeout(()=>ab(new Error('fotofrist')),90000))
      ]);
    }catch(fotoFehler){ fotosOk=false; console.error('Fotoübernahme abgebrochen',fotoFehler); }
    try{
      localStorage.setItem(STORAGE_KEY,JSON.stringify(next));
    }catch(speicherFehler){
      if(status)status.textContent=`Der Browserspeicher ist voll (${speicherFehler.name}). Das Backup wurde NICHT geladen. Bitte „foto-diagnose.html" öffnen – dort steht, woran es liegt.`;
      return;
    }
    const bericht=photoStore.lastImportReport;
    if(status)status.textContent=fotosOk
      ? `Backup geladen: ${next.students.length} Kinder, ${bericht?.uebernommen??'?'} Fotos übernommen${bericht?.unlesbar?`, ${bericht.unlesbar} unlesbar`:''} – DigiBoard wird neu gestartet …`
      : 'Backup geladen, aber die Fotoübernahme hat zu lange gedauert. Namen und Punkte sind da, Fotos fehlen noch. Bitte „foto-diagnose.html" öffnen und dort die Fotos nachtragen.';
    setTimeout(()=>location.reload(),fotosOk?350:6000)}catch{if(status)status.textContent='Diese Datei ist kein gültiges DigiBoard-Backup.'}};
  reader.readAsText(file);
}

async function exportPersonalProfileFile(){
  const member=activeTeamPerson(),status=document.querySelector('#personalProfileStatus'),date=dateKeyLocal(new Date());
  const payload={format:'digiboard-personal-profile',version:1,createdAt:new Date().toISOString(),appVersion:'15.71',person:{sourceId:member.id,name:member.profilePrefs?.displayName||member.name,role:member.role,profilePrefs:clone(member.profilePrefs||{}),teachingTools:clone(member.teachingTools||[])},materials:clone(state.materials?.[member.id]||{activeDrawer:'Allgemein',drawers:[]})};
  const safeName=(payload.person.name||'Profil').replace(/[^\p{L}\p{N}-]+/gu,'-'),fileName=`DigiBoard-Profil-${safeName}-${date}.digiboard-profil.json`,file=new File([JSON.stringify(payload,null,2)],fileName,{type:'application/json'});
  try{
    if(isIOSDevice()&&navigator.canShare?.({files:[file]})){await navigator.share({files:[file],title:`DigiBoard-Profil ${payload.person.name}`,text:'Persönliches Profil in iCloud Drive sichern'});if(status)status.textContent='Wähle „In Dateien sichern“ und anschließend deinen Ordner in iCloud Drive ✓';return}
    const url=URL.createObjectURL(file),link=document.createElement('a');link.href=url;link.download=fileName;document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);if(status)status.textContent='Profildatei wurde im Safari-Ordner „Downloads“ gespeichert. Von dort kannst du sie in iCloud Drive verschieben ✓';
  }catch(error){if(error?.name!=='AbortError'&&status)status.textContent='Das persönliche Profil konnte nicht erstellt werden.'}
}
function importPersonalProfileFile(file){
  const member=activeTeamPerson(),status=document.querySelector('#personalProfileStatus');if(!file)return;const reader=new FileReader();
  reader.onload=()=>{try{const payload=JSON.parse(reader.result);if(payload?.format!=='digiboard-personal-profile'||!payload.person||!payload.materials)throw new Error('invalid');if(!confirm(`Profil „${payload.person.name||'Unbekannt'}“ in den Zugang „${member.profilePrefs?.displayName||member.name}“ laden? Dessen persönliche Einstellungen und Fundus werden ersetzt.`))return;member.profilePrefs=clone(payload.person.profilePrefs||{});member.teachingTools=clone(payload.person.teachingTools||[]);state.materials[member.id]=clone(payload.materials);saveState();renderActiveTeamWorkspace();selectTeamPage('settings');if(status)status.textContent='Persönliches Profil aus iCloud geladen ✓'}catch{if(status)status.textContent='Diese Datei ist kein gültiges DigiBoard-Profil.'}};
  reader.readAsText(file);
}

/* NEXT 15.51 – Fotos fuer das Klassenteam.

   Dieselbe Ablage wie bei den Kindern: liegt eine Fotodatenbank vor, wandert
   das Bild dorthin; sonst wird es klein gerechnet und passt in den
   Browserspeicher. Der Schluessel bekommt das Vorsatzwort „team-", damit er
   sich nie mit einer Kinder-Kennung ueberschneidet. */
function teamFotoSchluessel(memberId){return 'team-'+memberId}

function teamPhotoMarkup(member){
  const ersatz=escapeHtml(member?.icon||initials(member?.name||'?'));
  const wert=typeof member?.photo==='string'?member.photo:'';
  if(!wert) return `<span class="team-member-initialen-v1551">${ersatz}</span>`;
  const src=photoStore.resolve(wert);
  const adresse=src?` src="${escapeHtml(src)}"`:'';
  return `<img class="team-member-photo-v1551"${adresse} alt="${escapeHtml(member.name||'Porträt')}" loading="eager"`
    +` data-foto-schluessel="${escapeHtml(wert)}" data-foto-ersatz="${ersatz}"`
    +` onerror="heilePortrait(this)">`;
}

async function speichereTeamFoto(memberId,datei){
  const mitglied=(state.teamMembers||[]).find(item=>item.id===memberId);
  if(!mitglied||!datei) return;
  const bildEndung=/\.(?:avif|bmp|gif|hei[cf]|jpe?g|png|webp)$/i.test(datei.name||'');
  if(datei.type&&!datei.type.startsWith('image/')&&!bildEndung){alert('Bitte eine Bilddatei auswählen.');return}
  try{
    const blob=await zuQuadratischemBild(datei,320);
    if(!blob) throw new Error('bild');
    mitglied.photo=await photoStore.put(teamFotoSchluessel(memberId),blob);
    saveState();
    renderTeamMembers();
    heilePortraits();
  }catch(error){
    console.error('Teamfoto konnte nicht gespeichert werden',error);
    alert('Das Foto konnte nicht gespeichert werden.');
  }
}

async function entferneTeamFoto(memberId){
  const mitglied=(state.teamMembers||[]).find(item=>item.id===memberId);
  if(!mitglied) return;
  mitglied.photo='';
  try{ await photoStore.remove(teamFotoSchluessel(memberId)); }catch{}
  saveState();
  renderTeamMembers();
}

/* Bild quadratisch zuschneiden und verkleinern. Wird fuer Teamfotos benutzt
   und liefert einen Blob, damit die Ablage denselben Weg gehen kann wie bei
   den Kinderfotos. */
function zuQuadratischemBild(datei,kante=320){
  return new Promise(resolve=>{
    const leser=new FileReader();
    leser.onerror=()=>resolve(null);
    leser.onload=()=>{
      const bild=new Image();
      bild.onerror=()=>resolve(null);
      bild.onload=()=>{
        const flaeche=document.createElement('canvas');
        flaeche.width=kante; flaeche.height=kante;
        const stift=flaeche.getContext('2d');
        if(!stift){resolve(null);return}
        const faktor=Math.max(kante/bild.width,kante/bild.height);
        const breite=bild.width*faktor, hoehe=bild.height*faktor;
        stift.drawImage(bild,(kante-breite)/2,(kante-hoehe)/2,breite,hoehe);
        canvasAlsFotoBlob(flaeche).then(resolve);
      };
      bild.src=leser.result;
    };
    leser.readAsDataURL(datei);
  });
}

function ensureTeamMembersAvailable(){
  if(Array.isArray(state.teamMembers)&&state.teamMembers.length)return false;
  state.teamMembers=clone(defaults.teamMembers);
  state.materials={...clone(defaults.materials),...(state.materials||{})};
  state.activeTeamMember=defaults.activeTeamMember;
  state.activePointActor=state.activeTeamMember;
  saveState();
  return true;
}
function renderTeamMembers(){
  ensureTeamMembersAvailable();
  const grid=document.querySelector('#teamMemberGrid');
  if(!grid)return;
  grid.innerHTML='';
  /* NEXT 15.51 – Die Karte ist jetzt ein Behaelter statt eines einzigen
     Knopfes. Nur so laesst sich ein Foto-Feld darin unterbringen: ein
     <input type="file"> darf nicht in einem <button> stehen, und ein Klick
     darauf haette immer auch die Person gewechselt. */
  state.teamMembers.forEach(member=>{
    const karte=document.createElement('div');
    karte.className='team-member-card team-member-card-v1551';
    if(member.id===state.activeTeamMember&&teamWorkspaceMode==='workspace')karte.classList.add('active');
    if(member.accent)karte.style.setProperty('--mitglied-farbe',member.accent);

    const waehlen=document.createElement('button');
    waehlen.type='button';
    waehlen.className='team-member-choose-v1551';
    waehlen.setAttribute('aria-label',`${member.name} – persönlichen Bereich öffnen`);
    /* Name und Rolle sind frei editierbar und werden darum maskiert. */
    waehlen.innerHTML=`<span class="team-member-face-v1551">${teamPhotoMarkup(member)}</span>`
      +`<span class="team-member-copy-v1551"><strong>${escapeHtml(member.name)}</strong>`
      +`<small>${escapeHtml(member.role)}</small></span>`;
    waehlen.onclick=()=>enterTeamWorkspace(member.id);
    karte.append(waehlen);

    const fotofeld=document.createElement('label');
    fotofeld.className='team-member-photo-pick-v1551';
    fotofeld.title=member.photo?'Foto austauschen':'Eigenes Foto wählen';
    fotofeld.innerHTML=`<span aria-hidden="true">📷</span>`
      +`<input type="file" accept="image/*" aria-label="Foto für ${escapeHtml(member.name)} wählen">`;
    fotofeld.querySelector('input').onchange=event=>{
      const datei=event.target.files?.[0];
      event.target.value='';
      if(datei)speichereTeamFoto(member.id,datei);
    };
    karte.append(fotofeld);

    if(member.photo){
      const weg=document.createElement('button');
      weg.type='button';
      weg.className='team-member-photo-clear-v1551';
      weg.title='Foto entfernen';
      weg.setAttribute('aria-label',`Foto von ${member.name} entfernen`);
      weg.textContent='×';
      weg.onclick=()=>entferneTeamFoto(member.id);
      karte.append(weg);
    }

    grid.append(karte);
  });

  const vertretung=document.createElement('div');
  vertretung.className='team-member-card team-member-card-v1551 substitute-team-card';
  const vertretungKnopf=document.createElement('button');
  vertretungKnopf.type='button';
  vertretungKnopf.className='team-member-choose-v1551';
  vertretungKnopf.innerHTML='<span class="team-member-face-v1551"><span class="team-member-initialen-v1551">🔄</span></span>'
    +'<span class="team-member-copy-v1551"><strong>Vertretung</strong><small>Füchse bewerten und Notizen lesen</small></span>';
  vertretungKnopf.onclick=showSubstituteSetup;
  vertretung.append(vertretungKnopf);
  grid.append(vertretung);
  /* KORREKTUR 2b – identisches Muster wie in activeTeamPerson(), hier inline dupliziert. */
  const active=activeTeamPerson();
  const badge=document.querySelector('#activeTeamBadge');
  const selectionTitle=document.querySelector('#teamSelectionTitle');if(selectionTitle)selectionTitle.textContent=`Unser Klassenteam der ${state.classWorld?.className||'Klasse'}`;
  const selectionMascot=document.querySelector('#teamSelectionMascot');if(selectionMascot)selectionMascot.textContent=currentTheme().mascot;
  const title=document.querySelector('#teamPanelTitle');
  if(badge)badge.textContent=teamWorkspaceMode==='selection'?'Bitte Person auswählen':`${active.icon} ${active.name} · ${active.role}`;
  if(title)title.textContent=`Punkte & Beobachtungen – ${active.name}`;
}

function showTeamSelection(){
  teamWorkspaceMode='selection';activeTeamPage='overview';teamDialog?.classList.add('team-selection-open');teamDialog?.classList.remove('team-workspace-open');document.querySelector('#teamSelectionView').hidden=false;document.querySelector('#substituteSetupView').hidden=true;const workspace=document.querySelector('#teamWorkspace');workspace.hidden=true;workspace.classList.remove('overview-mode','materials-mode');document.querySelector('#teamScrollTopButton').hidden=true;renderTeamMembers();
}
function showSubstituteSetup(){
  teamWorkspaceMode='substitute-setup';teamDialog?.classList.remove('team-selection-open');teamDialog?.classList.add('team-workspace-open');document.querySelector('#teamSelectionView').hidden=true;document.querySelector('#teamWorkspace').hidden=true;document.querySelector('#substituteSetupView').hidden=false;renderSubstituteList();document.querySelector('#substituteNameInput')?.focus();
}
function enterTeamWorkspace(memberId){
  ensureTeamMembersAvailable();
  const member=state.teamMembers.find(item=>item.id===memberId);if(!member)return;state.activeTeamMember=memberId;state.activePointActor=memberId;activeTeamPage='overview';teamWorkspaceMode='workspace';materialsUnlockedThisSession=false;teamDialog?.classList.remove('team-selection-open');teamDialog?.classList.add('team-workspace-open');saveState();document.querySelector('#teamSelectionView').hidden=true;document.querySelector('#substituteSetupView').hidden=true;document.querySelector('#teamWorkspace').hidden=false;document.querySelector('#teamScrollTopButton').hidden=false;renderActiveTeamWorkspace();
}
function enterSubstituteWorkspace(substituteId){
  const substitute=state.substitutes.find(item=>item.id===substituteId);if(!substitute)return;state.activePointActor=`sub:${substituteId}`;activeTeamPage='points';teamWorkspaceMode='substitute';teamDialog?.classList.remove('team-selection-open');teamDialog?.classList.add('team-workspace-open');saveState();document.querySelector('#teamSelectionView').hidden=true;document.querySelector('#substituteSetupView').hidden=true;document.querySelector('#teamWorkspace').hidden=false;document.querySelector('#teamScrollTopButton').hidden=false;renderActiveTeamWorkspace();
}
function activeWorkspacePerson(){
  if(teamWorkspaceMode==='substitute'){const substitute=state.substitutes.find(item=>`sub:${item.id}`===state.activePointActor);return {id:state.activePointActor,name:substitute?.name||'Vertretung',role:'Vertretung',icon:'🔄',restricted:true}}
  const member=activeTeamPerson(),prefs=member.profilePrefs||{};return {...member,name:prefs.displayName||member.name,icon:prefs.icon||member.icon,restricted:false};
}
function renderActiveTeamWorkspace(){
  const person=activeWorkspacePerson(),workspace=document.querySelector('#teamWorkspace');if(workspace){workspace.style.setProperty('--personal-accent',person.restricted?'#b66a28':person.profilePrefs?.accent||'#315f28');workspace.classList.toggle('substitute-mode',person.restricted)}
  renderTeacherList();renderWeeklyGoalTeamPanel();renderTeamCockpit();if(!person.restricted){renderMaterialLibrary();renderSubjectLaunchpad();renderTeachingToolSettings();renderTeachingToolButton();renderPersonalWorkspaceSettings()}else{const tools=document.querySelector('#teamTeachingToolList');if(tools)tools.innerHTML='<span class="substitute-privacy-note">Keine persönlichen Materialien sichtbar</span>'}updatePublishStatus();applyTeamWorkspaceVisibility();selectTeamPage(activeTeamPage);
  const name=document.querySelector('#personalWorkspaceName'),role=document.querySelector('#personalWorkspaceRole'),icon=document.querySelector('#personalWorkspaceIcon'),workspaceTitle=document.querySelector('#workspacePersonTitle'),title=document.querySelector('#teamPanelTitle');if(name)name.textContent=person.name;if(role)role.textContent=person.role;if(icon)icon.textContent=person.icon;if(workspaceTitle)workspaceTitle.textContent=`${person.icon} ${person.name}`;if(title)title.textContent=`Punkte & Beobachtungen – ${person.name}`;
  renderTopbarPerson();
}
function applyTeamWorkspaceVisibility(){
  const person=activeWorkspacePerson(),prefs=person.profilePrefs||{};const visibility=person.restricted?{subject:false,materials:false,goal:false,publication:false}:{subject:prefs.showSubject!==false,materials:prefs.showMaterials!==false,goal:prefs.showGoal!==false,publication:prefs.showPublication!==false};
  Object.entries(visibility).forEach(([panel,visible])=>document.querySelectorAll(`[data-team-panel="${panel}"]`).forEach(element=>element.hidden=!visible));document.querySelector('#personalWorkspaceSettings').hidden=person.restricted;
  document.querySelectorAll('[data-team-page]').forEach(button=>{const page=button.dataset.teamPage;button.hidden=(person.restricted&&page!=='points')||(page==='subject'&&visibility.subject===false)||(page==='materials'&&visibility.materials===false)||(page==='goal'&&visibility.goal===false)||(page==='settings'&&person.restricted)});
  const settingsButton=document.querySelector('#openPersonalSettingsButton');if(settingsButton)settingsButton.hidden=person.restricted;
}
/* =========================================================
   NEXT 15.8 · CODE-SCHUTZ FÜR „FUNDUS & VORBEREITUNG“
   Kein echter Sicherheitsschutz (der Code liegt im Browser),
   sondern ein Sichtschutz gegen neugierige Finger. Der Code
   gehört zum Profil der Person (und reist so mit dem Backup
   mit); ob EIN Gerät ihn sich merkt, ist eine reine
   Geräte-Einstellung (localStorage) und wird nie mitkopiert –
   genau das macht "Handy merkt sich's, Tafel fragt jedes Mal"
   möglich, ohne dass ein Backup das Vertrauen mitüberträgt.
   ========================================================= */
function materialsPinFor(person){return (person.profilePrefs?.materialsPin||'').trim()}
function deviceTrustedKey(personId){return `digiboard-materials-trust:${personId}`}
function isDeviceTrustedForMaterials(personId){return localStorage.getItem(deviceTrustedKey(personId))==='1'}
function forgetThisDeviceForMaterials(personId){localStorage.removeItem(deviceTrustedKey(personId))}
let materialsPinEntry='',materialsPinSuccessCallback=null,materialsPinMode='verify';
function renderMaterialsPinDots(){
  const dots=document.querySelectorAll('#materialsPinDots span');
  dots.forEach((dot,i)=>dot.classList.toggle('filled',i<materialsPinEntry.length));
}
function renderMaterialsPinKeypad(){
  const pad=document.querySelector('#materialsPinKeypad');if(!pad||pad.children.length)return;
  pad.innerHTML='';
  ['1','2','3','4','5','6','7','8','9','','0','⌫'].forEach(key=>{
    const button=document.createElement('button');button.type='button';
    if(key===''){button.className='materials-pin-key is-empty';button.disabled=true;button.tabIndex=-1;pad.append(button);return}
    button.className='materials-pin-key';button.textContent=key;
    button.onclick=()=>{
      const errorEl=document.querySelector('#materialsPinError');if(errorEl)errorEl.textContent='';
      if(key==='⌫'){materialsPinEntry=materialsPinEntry.slice(0,-1);renderMaterialsPinDots();return}
      if(materialsPinEntry.length>=4)return;
      materialsPinEntry+=key;renderMaterialsPinDots();
      if(materialsPinEntry.length===4)checkMaterialsPinEntry();
    };
    pad.append(button);
  });
}
function checkMaterialsPinEntry(){
  /* WICHTIGE KORREKTUR (15.10) – activeWorkspacePerson() liefert eine
     KOPIE der Person zurück (wegen der Anzeigename-Überschreibung), keine
     echte Referenz. Änderungen an .profilePrefs auf dieser Kopie gingen
     bislang ins Leere, obwohl saveState() lief – deshalb kam die Ja/Nein-
     Frage IMMER WIEDER, egal was man antwortete. activeTeamPerson() liefert
     das echte, veränderbare Objekt aus state.teamMembers. */
  const person=activeTeamPerson();
  if(materialsPinMode==='setup'){
    /* Neuen Code festlegen statt einen bestehenden zu prüfen */
    person.profilePrefs={...person.profilePrefs,materialsPin:materialsPinEntry,materialsPinAsked:true};saveState();
    renderPersonalWorkspaceSettings?.();
    localStorage.setItem(deviceTrustedKey(person.id),'1'); // Gerät, auf dem eingerichtet wird, gilt direkt als vertraut
    const dialog=document.querySelector('#materialsPinDialog');materialsPinEntry='';
    const callback=materialsPinSuccessCallback;materialsPinSuccessCallback=null;
    dialog?.close();callback&&callback();
    return;
  }
  const expected=materialsPinFor(person);
  if(materialsPinEntry===expected){
    if(document.querySelector('#materialsPinRemember')?.checked)localStorage.setItem(deviceTrustedKey(person.id),'1');
    const dialog=document.querySelector('#materialsPinDialog');materialsPinEntry='';
    const callback=materialsPinSuccessCallback;materialsPinSuccessCallback=null;
    dialog?.close();callback&&callback();
  } else {
    const errorEl=document.querySelector('#materialsPinError');if(errorEl)errorEl.textContent='Falscher Code – bitte nochmal.';
    materialsPinEntry='';renderMaterialsPinDots();
  }
}
function openMaterialsPinDialog(mode,onSuccess){
  materialsPinMode=mode;materialsPinEntry='';materialsPinSuccessCallback=onSuccess;
  renderMaterialsPinKeypad();renderMaterialsPinDots();
  const title=document.querySelector('#materialsPinTitle'),subtitle=document.querySelector('#materialsPinSubtitle'),remember=document.querySelector('#materialsPinRemember')?.closest('label');
  if(mode==='setup'){
    if(title)title.textContent='🔒 Neuen Code festlegen';
    if(subtitle)subtitle.textContent='Tippe einen 4-stelligen Code ein – damit ist „Fundus & Vorbereitung“ ab sofort geschützt.';
    if(remember)remember.hidden=true;
  } else {
    if(title)title.textContent='🔒 Code eingeben';
    if(subtitle)subtitle.textContent='„Fundus & Vorbereitung“ ist mit einem Code geschützt.';
    if(remember){remember.hidden=false;const box=document.querySelector('#materialsPinRemember');if(box)box.checked=false}
  }
  const errorEl=document.querySelector('#materialsPinError');if(errorEl)errorEl.textContent='';
  document.querySelector('#materialsPinDialog')?.showModal();
}
function ensureMaterialsAccess(onSuccess){
  /* NEXT 15.9 – Beim allerersten Öffnen von „Fundus & Vorbereitung“ wird
     einmalig gefragt, ob der Bereich per Code geschützt werden soll.
     „Nein“ → nie wieder gefragt, Bereich bleibt offen (wie bisher Standard).
     „Ja“ → sofort einen Code festlegen, danach direkt hinein. Wurde die
     Frage schon einmal beantwortet, greift ab dann nur noch die normale
     Code-Abfrage (falls ein Code gesetzt ist und das Gerät nicht vertraut). */
  const person=activeTeamPerson(),prefs=person.profilePrefs||{};
  if(!prefs.materialsPinAsked){
    document.querySelector('#materialsPinAskYes').onclick=()=>{
      document.querySelector('#materialsPinAskDialog')?.close();
      openMaterialsPinDialog('setup',onSuccess);
    };
    document.querySelector('#materialsPinAskNo').onclick=()=>{
      person.profilePrefs={...person.profilePrefs,materialsPinAsked:true};saveState();
      document.querySelector('#materialsPinAskDialog')?.close();
      onSuccess();
    };
    document.querySelector('#materialsPinAskDialog')?.showModal();
    return;
  }
  const pin=materialsPinFor(person);
  if(pin&&!isDeviceTrustedForMaterials(person.id)){openMaterialsPinDialog('verify',onSuccess);return}
  onSuccess();
}
let materialsUnlockedThisSession=false;
function selectTeamPage(page){
  if(page==='materials'&&!materialsUnlockedThisSession){
    ensureMaterialsAccess(()=>{materialsUnlockedThisSession=true;selectTeamPage('materials')});
    return;
  }
  const person=activeWorkspacePerson(),prefs=person.profilePrefs||{},allowed=person.restricted?['points']:['overview','points','goal','materials','settings'];if(!allowed.includes(page))page=person.restricted?'points':'overview';activeTeamPage=page;
  const personalSettings=document.querySelector('#personalWorkspaceSettings');if(page==='settings'&&personalSettings)personalSettings.open=true;
  const pageSections=page==='overview'?['cockpit']:page==='points'?['points']:page==='materials'?['materials']:page==='goal'?['goal']:[page];
  document.querySelectorAll('[data-team-page-section]').forEach(section=>section.hidden=!pageSections.includes(section.dataset.teamPageSection));
  document.querySelectorAll('[data-team-page]').forEach(button=>{button.classList.toggle('active',button.dataset.teamPage===page);button.setAttribute('aria-pressed',button.dataset.teamPage===page?'true':'false')});
  document.querySelector('#teamWorkspace')?.classList.toggle('overview-mode',page==='overview');
  document.querySelector('#teamWorkspace')?.classList.toggle('materials-mode',page==='materials');
  document.querySelector('#teamWorkspace')?.classList.toggle('settings-mode',page==='settings');
  document.querySelector('#teamWorkspace')?.classList.toggle('points-mode',page==='points');
  const card=document.querySelector('#teamDialog .dialog-card');if(card)card.scrollTo({top:0,behavior:'smooth'});
  enforceMobileFundusLayout();
  /* NEXT 15.16 – zweiter Durchlauf, nachdem der Browser die Seite fertig
     aufgebaut hat. Ohne diesen Nachschlag konnte eine spaeter nachgeladene
     Teilansicht die Anordnung noch einmal durcheinanderbringen. */
  requestAnimationFrame(()=>{
    enforceMobileFundusLayout();
    if(page==='points')fitResponsiveStudentGrid(document.querySelector('#teacherStudentList'));
  });
}
function incidentMeta(type){return ({warning:{icon:'🟡',label:'Ermahnung'},note:{icon:'📝',label:'Notiz'},ban:{icon:'🔴',label:'Verbot'},praise:{icon:'🟢',label:'Lob'},veto:{icon:'🔴',label:'Veto'},positive:{icon:'🟢',label:'Grüner Punkt'}})[type]||{icon:'📝',label:'Notiz'}}
function incidentPriority(type){return ({ban:0,veto:1,warning:2,note:3,praise:4,positive:5})[type]??3}
function banMeta(item){const text=(item?.note||'').toLowerCase(),kind=item?.banKind||(text.includes('ipad')?'ipad':text.includes('fußball')?'football':'break');return ({break:{icon:'🚫🛝',label:'Pausenverbot'},football:{icon:'🚫⚽',label:'Fußballverbot'},ipad:{icon:'🚫📱',label:'iPad-Verbot'},other:{icon:'⛔',label:'Verbot'}})[kind]||{icon:'⛔',label:'Verbot'}}
function studentIncidents(studentId){return (state.teamIncidents||[]).filter(item=>item.studentId===studentId).sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt))}
function incidentIsActive(item){return item.type==='ban'&&!item.resolvedAt&&(item.openEnded||!item.validUntil||new Date(item.validUntil)>=new Date())}
function incidentDurationText(item){
  if(item.resolvedAt)return `Beendet am ${new Date(item.resolvedAt).toLocaleDateString('de-DE')}`;
  if(item.openEnded)return 'Gilt bis zur manuellen Beendigung';
  if(item.validUntil)return `Gilt bis ${new Date(item.validUntil).toLocaleString('de-DE',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'})}`;
  return item.type==='ban'?'Keine Laufzeit eingetragen':'';
}
function printableStudentPhoto(student,className='print-photo'){
  /* STUFE 1 – auch hier ueber den Zwischenspeicher. Objekt-URLs sind im
     Druckfenster gueltig, weil es dieselbe Herkunft hat. */
  const raw=photoStore.resolve(student?.photo);
  if(!raw)return `<span class="${className} print-photo-placeholder">${escapeHtml(initials(student?.name||'?'))}</span>`;
  let src=raw;
  if(!src.startsWith('blob:')&&!src.startsWith('data:')){try{src=new URL(src,document.baseURI).href}catch{}}
  return `<img class="${className}" src="${escapeHtml(src)}" alt="Foto von ${escapeHtml(student.name)}">`;
}
function openPrintView(title,body,pageCss='A4 portrait'){
  const printWindow=window.open('','_blank','width=980,height=900');
  if(!printWindow){alert('Bitte Pop-ups erlauben, damit die Druckansicht geöffnet werden kann.');return}
  printWindow.document.open();
  printWindow.document.write(`<!doctype html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(title)}</title><style>
    @page{size:${pageCss};margin:13mm}*{box-sizing:border-box}body{margin:0;color:#173e2c;background:#fff;font:12px/1.42 -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}h1,h2,h3,p{margin:0}.print-toolbar{position:sticky;top:0;z-index:3;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:12px 18px;background:linear-gradient(110deg,#075f3e,#45ae46);color:#fff}.print-toolbar button{border:1px solid rgba(255,255,255,.7);border-radius:10px;padding:9px 14px;background:#fff;color:#145c3b;font-weight:800;cursor:pointer}.print-page{max-width:190mm;margin:12mm auto}.report-head{display:grid;grid-template-columns:27mm 1fr auto;align-items:center;gap:7mm;padding:7mm;border-radius:6mm;background:linear-gradient(120deg,#075f3e,#49ae48);color:#fff}.report-head .print-photo{width:25mm;height:25mm;border:2px solid #ffd15b;border-radius:50%;object-fit:cover;background:#eef6e7}.print-photo-placeholder{display:grid;place-items:center;font-size:22px;font-weight:900}.eyebrow{font-size:9px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;opacity:.8}.report-head h1{font-size:25px}.report-head time{text-align:right;font-size:10px}.report-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:3mm;margin:5mm 0}.report-stat{padding:4mm;border:1px solid #d4e2d1;border-radius:4mm;background:#f4f8ee}.report-stat strong{display:block;font-size:19px;color:#137044}.report-section{margin-top:5mm}.report-section h2{margin-bottom:2.5mm;font-size:15px}.measure-list{display:grid;gap:2mm}.measure{padding:3mm 4mm;border-left:4px solid #dc694d;border-radius:2mm;background:#fff4ec}.empty{padding:4mm;border-radius:3mm;background:#f1f7ec;color:#58705d}table{width:100%;border-collapse:collapse;font-size:10px}th,td{padding:2.5mm 2mm;border-bottom:1px solid #dbe4d7;text-align:left;vertical-align:top}th{background:#edf5e7;color:#416249}.privacy{margin-top:6mm;padding-top:3mm;border-top:1px solid #dbe4d7;color:#718071;font-size:9px}.photo-sheet{display:grid;gap:4mm;break-after:page;page-break-after:always}.photo-sheet:last-child{break-after:auto;page-break-after:auto}.photo-card{min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2mm;border:1px dashed #aabd9d;border-radius:3mm;background:#fbfcf7;overflow:hidden}.photo-card .sheet-photo{object-fit:cover;border:1px solid #d7dfcf;background:#edf4e6}.photo-card strong{font-size:12px}.sheet-a4-3x5{height:271mm;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(5,1fr)}.sheet-a4-3x5 .sheet-photo{width:35mm;height:45mm}.sheet-a4-2x3{height:271mm;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(3,1fr)}.sheet-a4-2x3 .sheet-photo{width:55mm;height:70mm}.sheet-a5-3x4{height:184mm;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(4,1fr);gap:2mm}.sheet-a5-3x4 .sheet-photo{width:25mm;height:32mm}.sheet-a5-2x3{height:184mm;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(3,1fr)}.sheet-a5-2x3 .sheet-photo{width:38mm;height:49mm}@media print{.print-toolbar{display:none}.print-page{margin:0;max-width:none}} </style></head><body><div class="print-toolbar"><strong>${escapeHtml(title)}</strong><button onclick="window.print()">🖨 Drucken / als PDF sichern</button></div>${body}</body></html>`);
  printWindow.document.close();
  printWindow.focus();
}
function printActiveStudentReport(){
  const student=state.students.find(item=>item.id===activeStudentDetailsId);if(!student)return;
  const incidents=studentIncidents(student.id).filter(item=>!item.demo),active=incidents.filter(incidentIsActive),points=state.points[pointKey(student.id)]||{green:0,yellow:0,red:0,direct:0};
  const created=new Date(),rows=incidents.map(item=>{const meta=item.type==='ban'?banMeta(item):incidentMeta(item.type);return `<tr><td>${escapeHtml(new Date(item.createdAt).toLocaleDateString('de-DE'))}<br>${escapeHtml(new Date(item.createdAt).toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'}))}</td><td>${meta.icon} ${escapeHtml(meta.label)}</td><td>${escapeHtml(item.note||'Ohne Notiz')}</td><td>${escapeHtml(item.actorName||'Klassenteam')}</td><td>${escapeHtml(incidentDurationText(item)||'–')}</td></tr>`}).join('');
  const measures=active.length?active.map(item=>{const meta=banMeta(item);return `<div class="measure"><strong>${meta.icon} ${escapeHtml(meta.label)}</strong><br>${escapeHtml(item.note||'Ohne Notiz')} · ${escapeHtml(incidentDurationText(item))}</div>`}).join(''):'<div class="empty">✓ Keine laufende Maßnahme</div>';
  const body=`<main class="print-page"><header class="report-head">${printableStudentPhoto(student)}<div><p class="eyebrow">DigiBoard · Fuchsbericht</p><h1>${escapeHtml(student.name)}</h1><p>${student.birthday?`Geburtstag: ${escapeHtml(new Date(`${student.birthday}T12:00:00`).toLocaleDateString('de-DE'))}`:'Strukturierte Beobachtungsübersicht'}</p></div><time>Erstellt am<br><strong>${escapeHtml(created.toLocaleString('de-DE',{dateStyle:'medium',timeStyle:'short'}))}</strong></time></header><section class="report-stats"><div class="report-stat"><strong>${points.green||0}</strong>Grün heute</div><div class="report-stat"><strong>${points.yellow||0}</strong>Gelb heute</div><div class="report-stat"><strong>${points.red||0}</strong>Rot heute</div><div class="report-stat"><strong>${incidents.length}</strong>Einträge gesamt</div></section><section class="report-section"><h2>Aktuelle Maßnahmen</h2><div class="measure-list">${measures}</div></section><section class="report-section"><h2>Beobachtungen und Verlauf</h2>${rows?`<table><thead><tr><th>Datum</th><th>Art</th><th>Eintrag</th><th>Eingetragen von</th><th>Status / Dauer</th></tr></thead><tbody>${rows}</tbody></table>`:'<div class="empty">Noch keine Einträge vorhanden.</div>'}</section><p class="privacy">Vertrauliche pädagogische Dokumentation · Nur für den vorgesehenen schulischen Gebrauch.</p></main>`;
  openPrintView(`Fuchsbericht – ${student.name}`,body,'A4 portrait');
}
function printClassPhotoSheet(){
  const setting=document.querySelector('#photoSheetLayout')?.value||'a4-3x5',config=({ 'a4-3x5':{paper:'A4',cols:3,rows:5},'a4-2x3':{paper:'A4',cols:2,rows:3},'a5-3x4':{paper:'A5',cols:3,rows:4},'a5-2x3':{paper:'A5',cols:2,rows:3}})[setting],students=activeStudents(),perPage=config.cols*config.rows,pages=[];
  for(let index=0;index<students.length;index+=perPage)pages.push(students.slice(index,index+perPage));
  const body=`<main>${pages.map((page,pageIndex)=>`<section class="photo-sheet sheet-${setting}" aria-label="Fotobogen Seite ${pageIndex+1}">${page.map(student=>`<article class="photo-card">${printableStudentPhoto(student,'sheet-photo')}<strong>${escapeHtml(student.name)}</strong></article>`).join('')}</section>`).join('')}</main>`;
  openPrintView(`Klassen-Fotobogen · ${config.paper}`,body,`${config.paper} portrait`);
}
function renderStudentDetails(){
  const student=state.students.find(item=>item.id===activeStudentDetailsId);if(!student)return;
  const incidents=studentIncidents(student.id),weekAgo=Date.now()-7*86400000,recent=incidents.filter(item=>new Date(item.createdAt).getTime()>=weekAgo),active=incidents.filter(incidentIsActive);
  const photo=document.querySelector('#studentDetailsPhoto'),name=document.querySelector('#studentDetailsName'),summary=document.querySelector('#studentDetailsSummary');
  if(photo)photo.innerHTML=studentPhotoMarkup(student,'student-details-photo-img');if(name)name.textContent=student.name;if(summary)summary.textContent=active.length?`${active.length} laufende Maßnahme${active.length===1?'':'n'}`:`${recent.length} Einträge in den letzten 7 Tagen`;
  const stats=document.querySelector('#studentDetailsStats');if(stats)stats.innerHTML=`<div><strong>${recent.length}</strong><small>letzte 7 Tage</small></div><div><strong>${incidents.filter(item=>item.type==='warning').length}</strong><small>Ermahnungen</small></div><div><strong>${incidents.filter(item=>item.type==='note').length}</strong><small>Notizen</small></div><div class="positive"><strong>${incidents.filter(item=>item.type==='praise').length}</strong><small>Lob & Verbesserung</small></div>`;
  const current=document.querySelector('#studentCurrentMeasures');if(current){current.innerHTML=active.length?'':'<div class="student-detail-empty">✓ Keine laufende Maßnahme</div>';active.forEach(item=>{const ban=banMeta(item),row=document.createElement('article');row.className='student-current-measure';row.innerHTML=`<span>${ban.icon}</span><div><strong>${escapeHtml(ban.label)}${item.note?` · ${escapeHtml(item.note)}`:''}</strong><small>${escapeHtml(incidentDurationText(item))}</small></div><button type="button" data-resolve-incident="${escapeHtml(item.id)}">Beenden</button>`;row.querySelector('[data-resolve-incident]').onclick=()=>{item.resolvedAt=new Date().toISOString();saveState();renderStudentDetails();renderTeamCockpit();renderTeacherList()};current.append(row)})}
  const history=document.querySelector('#studentIncidentHistory');if(history){history.innerHTML=incidents.length?'':'<div class="student-detail-empty">Noch keine Einträge vorhanden.</div>';incidents.slice(0,12).forEach(item=>{const meta=item.type==='ban'?banMeta(item):incidentMeta(item.type),row=document.createElement('article');row.className=`student-history-item ${item.type}`;row.innerHTML=`<span>${meta.icon}</span><div><strong>${meta.label}${item.demo?' · Beispiel':''}</strong><p>${escapeHtml(item.note||'Ohne zusätzliche Notiz')}</p><small>${new Date(item.createdAt).toLocaleString('de-DE',{weekday:'short',day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'})} · ${escapeHtml(item.actorName||'Klassenteam')}${incidentDurationText(item)?` · ${escapeHtml(incidentDurationText(item))}`:''}</small></div>`;history.append(row)})}
  const type=document.querySelector('#studentDetailType'),duration=document.querySelector('#studentDetailDuration'),banKind=document.querySelector('#studentDetailBanKind');if(type&&duration&&banKind){const update=()=>{const isBan=type.value==='ban';duration.disabled=!isBan;banKind.disabled=!isBan;banKind.hidden=!isBan;if(!isBan)duration.value='0'};type.onchange=update;update()}
}
function openStudentDetails(studentId){activeStudentDetailsId=studentId;const note=document.querySelector('#studentDetailNote'),status=document.querySelector('#studentDetailStatus');if(note)note.value='';if(status)status.textContent='';renderStudentDetails();studentDetailsDialog?.showModal()}
function openQuickBan(studentId){
  const student=state.students.find(item=>item.id===studentId);if(!student)return;activeQuickBanStudentId=studentId;
  const name=document.querySelector('#quickBanStudentName'),note=document.querySelector('#quickBanNote'),status=document.querySelector('#quickBanStatus'),duration=document.querySelector('#quickBanDuration');
  if(name)name.textContent=student.name;if(note)note.value='';if(status)status.textContent='';if(duration)duration.value='today';
  document.querySelectorAll('[name="quickBanKind"]').forEach(input=>input.checked=false);quickBanDialog?.showModal();
}
function saveQuickBans(){
  const student=state.students.find(item=>item.id===activeQuickBanStudentId),kinds=[...document.querySelectorAll('[name="quickBanKind"]:checked')].map(input=>input.value),duration=document.querySelector('#quickBanDuration')?.value||'today',note=(document.querySelector('#quickBanNote')?.value||'').trim(),status=document.querySelector('#quickBanStatus');if(!student||!kinds.length){if(status)status.textContent='Bitte mindestens ein Verbot auswählen.';return}
  let validUntil=null,openEnded=false;if(duration==='today'){const end=new Date();end.setHours(23,59,59,999);validUntil=end.toISOString()}else if(duration==='open')openEnded=true;else validUntil=new Date(Date.now()+Number(duration)*86400000).toISOString();
  const actor=activeWorkspacePerson(),stamp=Date.now();state.teamIncidents=(state.teamIncidents||[]).filter(item=>!item.demo);kinds.forEach((banKind,index)=>{const meta=banMeta({banKind});state.teamIncidents.unshift({id:`i${stamp}-${index}`,studentId:student.id,studentName:student.name,type:'ban',banKind,note:note||meta.label,actorName:actor.name,createdAt:new Date(stamp+index).toISOString(),validUntil,openEnded})});
  saveState();renderTeacherList();renderQuickPointsList();renderTeamCockpit();renderMobilePersonalHome();renderMobilePoints();sendPointsRemote();if(status)status.textContent=`${kinds.length} Verbot${kinds.length===1?'':'e'} für ${student.name} eingetragen ✓`;setTimeout(()=>quickBanDialog?.close(),500);
}
function saveStudentDetailIncident(){
  const student=state.students.find(item=>item.id===activeStudentDetailsId),type=document.querySelector('#studentDetailType')?.value||'note',banKind=document.querySelector('#studentDetailBanKind')?.value||'break',note=(document.querySelector('#studentDetailNote')?.value||'').trim(),duration=document.querySelector('#studentDetailDuration')?.value||'0',status=document.querySelector('#studentDetailStatus');if(!student||!note){if(status)status.textContent='Bitte eine kurze Notiz eintragen.';return}
  let validUntil=null,openEnded=false;if(type==='ban'){if(duration==='today'){const end=new Date();end.setHours(23,59,59,999);validUntil=end.toISOString()}else if(duration==='open')openEnded=true;else if(Number(duration)>0)validUntil=new Date(Date.now()+Number(duration)*86400000).toISOString()}
  const actor=activeWorkspacePerson();state.teamIncidents=(state.teamIncidents||[]).filter(item=>!item.demo);state.teamIncidents.unshift({id:`i${Date.now()}`,studentId:student.id,studentName:student.name,type,banKind:type==='ban'?banKind:null,note,actorName:actor.name,createdAt:new Date().toISOString(),validUntil,openEnded});saveState();if(status)status.textContent='Eintrag gespeichert ✓';document.querySelector('#studentDetailNote').value='';renderStudentDetails();renderTeamCockpit();renderTeacherList();renderQuickPointsList();sendPointsRemote();
}
function renderTeamCockpit(){
  const cockpit=document.querySelector('#teamCockpit');if(!cockpit)return;
  const person=activeWorkspacePerson(),store=person.restricted?{drawers:[]}:activeMaterialStore();
  const normal=value=>(value||'').toLowerCase().replace(/[^a-zäöüß]/g,'');
  const openDrawer=drawer=>{store.activeDrawer=drawer.name;saveState();renderMaterialLibrary();selectTeamPage('materials')};
  const personIcon=document.querySelector('#cockpitPersonIcon'),personName=document.querySelector('#cockpitPersonName'),personRole=document.querySelector('#cockpitPersonRole');
  if(personIcon)personIcon.textContent=person.icon;if(personName)personName.textContent=person.name;if(personRole)personRole.textContent=person.role;
  const cockpitMascot=document.querySelector('#cockpitTodayMascot'),cockpitTitle=document.querySelector('#cockpitTodayTitle');if(cockpitMascot)cockpitMascot.textContent=currentTheme().mascot;if(cockpitTitle)cockpitTitle.textContent=state.classWorld.dailyOverviewTitle||'Füchse im Blick';const cockpitDate=document.querySelector('#cockpitTodayDate');if(cockpitDate){const now=new Date();cockpitDate.dateTime=dateKeyLocal(now);cockpitDate.textContent=now.toLocaleDateString('de-DE',{weekday:'long',day:'2-digit',month:'long'})}
  const makeToolLink=tool=>{const preset=TEACHING_TOOL_PRESETS[tool.type]||TEACHING_TOOL_PRESETS.custom,safeLink=normaliseMaterialLink(tool.url),link=document.createElement('a');link.className=`cockpit-tool-link tool-${tool.type||'custom'}`;link.href=safeLink||'#';link.target='_blank';link.rel='noopener';link.innerHTML=`<span>${escapeHtml(tool.mark||preset.mark||(tool.label||'U').slice(0,1))}</span><div><strong>${escapeHtml(tool.label||'Werkzeug')}</strong><small>${escapeHtml(tool.hint||preset.hint||'Öffnen')}</small></div>${tool.isDefault?'<b>★</b>':''}`;if(!safeLink)link.onclick=event=>{event.preventDefault();selectTeamPage('settings')};return link};
  const tools=person.restricted?[]:activeTeachingTools().filter(tool=>!tool.hidden),startTools=tools.filter(tool=>tool.placement!=='favorite').slice(0,2),favoriteLinks=tools.filter(tool=>tool.placement!=='start').slice(0,5);
  const favoriteTools=document.querySelector('#cockpitFavoriteTools');if(favoriteTools){favoriteTools.innerHTML='';startTools.forEach(tool=>favoriteTools.append(makeToolLink(tool)));if(!startTools.length)favoriteTools.innerHTML='<button type="button" class="cockpit-tool-empty">＋ Startwerkzeug</button>';favoriteTools.querySelector('.cockpit-tool-empty')?.addEventListener('click',()=>selectTeamPage('settings'))}
  const favorites=document.querySelector('#cockpitFavorites');if(favorites){favorites.innerHTML='';favoriteLinks.forEach(tool=>favorites.append(makeToolLink(tool)));if(!favoriteLinks.length)favorites.innerHTML='<button type="button" class="cockpit-tool-empty">Favoriten einrichten</button>';favorites.querySelector('.cockpit-tool-empty')?.addEventListener('click',()=>selectTeamPage('settings'))}
  const pins=document.querySelector('#cockpitPinnedList');
  if(pins){
    pins.innerHTML='';
    const pinned=(store.drawers||[]).flatMap((drawer,index)=>(drawer.items||[]).filter(item=>item.pinnedToday).map(item=>({drawer,item,index}))).slice(0,8);
    pinned.forEach(({drawer,item,index})=>{
      const style=subjectStyle(drawer.name,index,drawer),link=normaliseMaterialLink(item.link),control=document.createElement(link?'a':'button');
      if(link){control.href=link;control.target='_blank';control.rel='noopener'}else control.type='button';
      control.className='cockpit-pin-button cockpit-material-pin';
      control.style.setProperty('--pin-color',style.color);
      control.innerHTML=`<span>📌</span><strong>${escapeHtml(item.title||drawer.name)}</strong><small>${escapeHtml(drawer.name)}</small><b class="cockpit-pin-open">${link?'Unterricht öffnen ↗':'Vorbereitung öffnen ›'}</b>`;
      if(!link)control.onclick=()=>openDrawer(drawer);
      pins.append(control);
    });
    if(!pinned.length)pins.innerHTML='<button type="button" class="cockpit-empty cockpit-empty-action">Noch nichts angeheftet · Vorbereitung öffnen</button>';
    pins.querySelector('.cockpit-empty-action')?.addEventListener('click',()=>selectTeamPage('materials'));
  }
  const todayHost=document.querySelector('#cockpitTodaySubjects');
  if(todayHost){
    todayHost.innerHTML='';
    const rows=getScheduleForDate(new Date()).filter(row=>row.status!=='cancelled').slice(0,5);
    if(rows.length){
      const title=document.createElement('span');title.className='cockpit-auto-label';title.textContent='Heute: ';todayHost.append(title);
      rows.forEach(row=>{
        const drawer=(store.drawers||[]).find(item=>normal(row.subject).includes(normal(item.name))||normal(item.name).includes(normal(row.subject)));
        const lesson=document.createElement('span');lesson.className='cockpit-today-label';lesson.textContent=row.subject;todayHost.append(lesson);
      });
    }else todayHost.innerHTML='<div class="cockpit-no-lessons">Heute ist kein Unterricht eingetragen.</div>';
  }
  const subjectGrid=document.querySelector('#cockpitSubjectGrid');if(subjectGrid){subjectGrid.innerHTML='';(store.drawers||[]).slice(0,6).forEach((drawer,index)=>{const style=subjectStyle(drawer.name,index,drawer),button=document.createElement('button');button.type='button';button.className='cockpit-subject-button';button.style.setProperty('--subject-color',style.color);button.innerHTML=`<span class="cockpit-subject-icon">${style.icon}</span><strong>${escapeHtml(drawer.name)}</strong><b>${drawer.items?.length||0}</b>`;button.onclick=()=>openDrawer(drawer);button.oncontextmenu=event=>{event.preventDefault();openIconPicker(drawer)};subjectGrid.append(button)});if(!subjectGrid.children.length)subjectGrid.innerHTML='<button type="button" class="cockpit-empty-action">Fächer einrichten</button>';subjectGrid.querySelector('.cockpit-empty-action')?.addEventListener('click',()=>selectTeamPage('materials'))}
  const materialQuick=document.querySelector('#cockpitMaterialQuick');if(materialQuick){materialQuick.innerHTML='';(store.drawers||[]).slice(0,6).forEach(drawer=>{const button=document.createElement('button');button.type='button';button.innerHTML=`<span>${escapeHtml(drawer.name)}</span><b>${drawer.items?.length||0}</b>`;button.onclick=()=>openDrawer(drawer);materialQuick.append(button)});if(!materialQuick.children.length)materialQuick.innerHTML='<small>Noch keine Materialien</small>'}
  const studentSelect=document.querySelector('#cockpitStudentSelect');if(studentSelect){const current=studentSelect.value;studentSelect.innerHTML='<option value="">Fuchs auswählen …</option>'+activeStudents().map(s=>`<option value="${escapeHtml(s.id)}">${escapeHtml(s.name)}</option>`).join('');studentSelect.value=current}
  const list=document.querySelector('#cockpitIncidentList');if(list){const today=buildDailyFeed().slice(0,6);list.innerHTML=today.length?'':`<div class="cockpit-all-good"><span>✓</span><strong>Heute keine Auffälligkeiten</strong></div>`;today.forEach(item=>{const meta=item.type==='ban'?banMeta(item):incidentMeta(item.type),student=state.students.find(candidate=>candidate.id===item.studentId),row=document.createElement('button');row.type='button';row.className=`cockpit-incident ${item.type}`;row.setAttribute('aria-label',`Fuchsprofil von ${item.studentName} öffnen`);row.innerHTML=`<span class="cockpit-child-avatar">${studentPhotoMarkup(student||{name:item.studentName},'cockpit-child-photo')}</span><div><strong>${escapeHtml(item.studentName)}</strong><small>${meta.icon} ${meta.label}${item.note?` · ${escapeHtml(item.note)}`:''}</small></div><time>${new Date(item.createdAt).toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'})}</time>`;row.onclick=()=>openStudentDetails(item.studentId);list.append(row)})}
  const goal=document.querySelector('#cockpitGoalText'),status=document.querySelector('#cockpitGoalStatus'),confirm=document.querySelector('#cockpitGoalConfirm');if(goal)goal.textContent=state.content?.weeklyGoal?.text||'Wochenziel';const vote=goalVotesForDay()[currentPointActor().id]||null;if(status){status.textContent=vote==='green'?'Heute bestätigt ✓':vote==='red'?'Heute nicht bestätigt':'Noch offen';status.classList.toggle('done',vote==='green')}if(confirm){confirm.disabled=vote==='green';confirm.textContent=vote==='green'?'✓ Ja bestätigt':'✓ Ja'}const reject=document.querySelector('#cockpitGoalReject');if(reject){reject.disabled=vote==='red';reject.textContent=vote==='red'?'✕ Nein bestätigt':'✕ Nein'}
}
function addCockpitIncident(){const studentId=document.querySelector('#cockpitStudentSelect')?.value,type=document.querySelector('#cockpitIncidentType')?.value||'note',note=(document.querySelector('#cockpitIncidentNote')?.value||'').trim(),status=document.querySelector('#cockpitIncidentStatus'),student=state.students.find(s=>s.id===studentId);if(!student){if(status)status.textContent='Bitte zuerst ein Fuchs auswählen.';return}const actor=activeWorkspacePerson();state.teamIncidents=(state.teamIncidents||[]).filter(item=>!item.demo);state.teamIncidents.unshift({id:`i${Date.now()}`,studentId,studentName:student.name,type,note,actorName:actor.name,createdAt:new Date().toISOString()});state.teamIncidents=state.teamIncidents.slice(0,500);saveState();document.querySelector('#cockpitIncidentNote').value='';if(status)status.textContent=`${incidentMeta(type).label} für ${student.name} gespeichert ✓`;renderTeamCockpit();renderMobilePersonalHome();sendPointsRemote()}
function renderPersonalWorkspaceSettings(){
  const member=activeTeamPerson(),prefs=member.profilePrefs||{};const values=[['personalDisplayNameInput',prefs.displayName||member.name],['personalIconInput',prefs.icon||member.icon],['personalAccentInput',prefs.accent||'#315f28'],['materialsPinInput',prefs.materialsPin||'']];values.forEach(([id,value])=>{const input=document.querySelector('#'+id);if(input)input.value=value});[['showMaterialsPanel','showMaterials'],['showGoalPanel','showGoal'],['showPublicationPanel','showPublication']].forEach(([id,key])=>{const input=document.querySelector('#'+id);if(input)input.checked=prefs[key]!==false});
  const pinStatus=document.querySelector('#materialsPinStatus');if(pinStatus)pinStatus.textContent=prefs.materialsPin?'Code aktiv ✓':'Kein Code – Fundus & Vorbereitung ist frei zugänglich.';
}
function savePersonalWorkspace(){
  const member=activeTeamPerson();member.profilePrefs={...member.profilePrefs,displayName:(document.querySelector('#personalDisplayNameInput').value||member.name).trim()||member.name,icon:(document.querySelector('#personalIconInput').value||member.icon).trim()||member.icon,accent:document.querySelector('#personalAccentInput').value||'#315f28',showMaterials:document.querySelector('#showMaterialsPanel').checked,showGoal:document.querySelector('#showGoalPanel').checked,showPublication:document.querySelector('#showPublicationPanel').checked,materialsPin:(document.querySelector('#materialsPinInput')?.value||'').replace(/\D/g,'').slice(0,4)};saveState();renderActiveTeamWorkspace();selectTeamPage('settings');const status=document.querySelector('#personalWorkspaceStatus');if(status)status.textContent='Meine Startseite wurde gespeichert ✓';
}
function addSubstitute(){
  const input=document.querySelector('#substituteNameInput'),name=(input?.value||'').trim(),status=document.querySelector('#substituteStatus');if(!name){if(status)status.textContent='Bitte einen Namen eintragen.';return}const substitute={id:`v${Date.now()}`,name,createdAt:new Date().toISOString()};state.substitutes.push(substitute);state.activePointActor=`sub:${substitute.id}`;saveState();if(input)input.value='';enterSubstituteWorkspace(substitute.id);
}
function renderSubstituteList(){
  const list=document.querySelector('#substitutePersonList');if(!list)return;const today=state.substitutes.filter(item=>(item.createdAt||'').slice(0,10)===todayKey());list.innerHTML=today.length?'<h4>Heutige Vertretungen</h4>':'';today.forEach(substitute=>{const button=document.createElement('button');button.type='button';button.className='substitute-person-button';button.innerHTML=`<span>🔄</span><span><strong>${escapeHtml(substitute.name)}</strong><small>Füchse, Bewertungen und Notizen</small></span><b>Öffnen ›</b>`;button.onclick=()=>enterSubstituteWorkspace(substitute.id);list.append(button)});
}

function activeMaterialStore(){
  /* KORREKTUR 2c */
  const id=state.activeTeamMember||activeTeamPerson().id;
  if(!state.materials[id])state.materials[id]={activeDrawer:'Allgemein',drawers:[{name:'Allgemein',items:[]}]};
  const store=state.materials[id];
  if(!store.drawers.length)store.drawers=[{name:'Allgemein',items:[]}];
  if(!store.drawers.some(d=>d.name===store.activeDrawer))store.activeDrawer=store.drawers[0].name;
  return store;
}
const TEACHING_TOOL_PRESETS={
  prowise:{type:'prowise',label:'PROWISE',url:'https://presenter10.prowise.com/',mark:'P',hint:'Presenter öffnen'},
  classroomscreen:{type:'classroomscreen',label:'CLASSROOM',url:'https://classroomscreen.com/',mark:'C',hint:'Screen öffnen'},
  youtube:{type:'youtube',label:'YOUTUBE',url:'https://www.youtube.com/',mark:'▶',hint:'Videos öffnen'},
  google:{type:'google',label:'GOOGLE',url:'https://www.google.de/',mark:'G',hint:'Suchen'},
  safari:{type:'safari',label:'SAFARI',url:'https://www.apple.com/de/safari/',mark:'🧭',hint:'Browser-Start'},
  chrome:{type:'chrome',label:'CHROME',url:'https://www.google.com/chrome/',mark:'🌐',hint:'Browser-Start'},
  custom:{type:'custom',label:'UNTERRICHT',url:'',mark:'↗',hint:'Werkzeug öffnen'}
};
/* KORREKTUR 2 – Nullsicherheit.
   Vorher: bei leerer teamMembers-Liste kam undefined zurueck; jeder Aufrufer
   stuerzte mit "Cannot read properties of undefined (reading 'profilePrefs')"
   bzw. "(reading 'name')" ab. Das trat beim Import fremder Backups, bei
   Schema-Drift zwischen Versionen und beim Loeschen des letzten Teammitglieds auf. */
const FALLBACK_TEAM_MEMBER={id:'fallback',name:'Lehrkraft',role:'Klassenteam',icon:'🦊',profilePrefs:{},teachingTools:[]};
function activeTeamPerson(){
  const list=Array.isArray(state.teamMembers)?state.teamMembers:[];
  return list.find(x=>x&&x.id===state.activeTeamMember)||list[0]||FALLBACK_TEAM_MEMBER;
}
function activeTeachingTools(){
  const member=activeTeamPerson();if(!Array.isArray(member.teachingTools)||!member.teachingTools.length){const original=member.teachingTool||TEACHING_TOOL_PRESETS.custom;member.teachingTools=[{id:`tool-${member.id}-${Date.now()}`,...original,isDefault:true,hidden:false}]}
  return member.teachingTools;
}
function renderTeachingToolButton(){
  const host=document.querySelector('#teamTeachingToolList');if(!host)return;host.innerHTML='';const member=activeTeamPerson(),visible=activeTeachingTools().filter(tool=>!tool.hidden&&tool.placement!=='favorite');
  visible.forEach(tool=>{const preset=TEACHING_TOOL_PRESETS[tool.type]||TEACHING_TOOL_PRESETS.custom,safeLink=normaliseMaterialLink(tool.url),link=document.createElement('a');link.className=`team-teaching-tool-button tool-${tool.type||'custom'}`;link.href=safeLink||'#';link.target='_blank';link.rel='noopener';link.setAttribute('aria-label',`${tool.label||'Unterrichtswerkzeug'} für ${member.name} öffnen`);link.innerHTML=`<span class="teaching-tool-mark">${escapeHtml(tool.mark||preset.mark||(tool.label||'U').slice(0,1))}</span><span><strong>${escapeHtml(tool.label||'UNTERRICHT')}</strong><small>${escapeHtml(tool.hint||preset.hint||'Werkzeug öffnen')}</small></span>${tool.isDefault?'<b title="Standardwerkzeug">★</b>':'<b>↗</b>'}`;link.onclick=event=>{if(!safeLink){event.preventDefault();selectTeamPage('settings');const status=document.querySelector('#teachingToolStatus');if(status)status.textContent='Bitte für dieses Werkzeug eine Startadresse eintragen.'}};host.append(link)});
  if(!visible.length)host.innerHTML='<button type="button" class="tool-empty-button">＋ Werkzeug einrichten</button>';
  host.querySelector('.tool-empty-button')?.addEventListener('click',()=>selectTeamPage('settings'));
}
function renderTeachingToolSettings(){
  const select=document.querySelector('#teachingToolSelect'),placement=document.querySelector('#teachingToolPlacement'),label=document.querySelector('#teachingToolLabelInput'),url=document.querySelector('#teachingToolUrlInput'),status=document.querySelector('#teachingToolStatus'),list=document.querySelector('#teachingToolManageList');if(!select||!placement||!label||!url||!list)return;
  const preset=TEACHING_TOOL_PRESETS.prowise;select.value='prowise';placement.value='start';label.value=preset.label;url.value=preset.url;if(status)status.textContent=`Diese Auswahl gehört nur zu ${activeTeamPerson().name}.`;list.innerHTML='';
  /* NEXT 15.51 – Sechs namenlose Symbolknoepfe pro Zeile (★ ↔ ↑ ↓ ◉ ×) waren
     nicht zu deuten. Jede Zeile ist jetzt eine Karte mit beschrifteten
     Bedienelementen. Statt eines Knopfes, der die Anzeigeposition im Kreis
     durchschaltet, gibt es drei klar benannte Schalter. */
  const werkzeuge=activeTeachingTools();
  werkzeuge.forEach((tool,index)=>{
    const platz=tool.placement||'both';
    const karte=document.createElement('div');
    karte.className=`teaching-tool-manage-row werkzeug-karte-v1551 ${tool.hidden?'is-hidden':''} ${tool.isDefault?'ist-start':''}`;
    const kennung=escapeHtml(tool.id);
    karte.innerHTML=`
      <span class="manage-tool-icon">${escapeHtml(tool.mark||(tool.label||'U').slice(0,1))}</span>
      <span class="manage-tool-copy">
        <strong>${escapeHtml(tool.label||'Werkzeug')}</strong>
        <small>${escapeHtml(tool.url||'Keine Adresse')}</small>
      </span>
      <span class="werkzeug-marken-v1551">
        ${tool.isDefault?'<em class="marke-start-v1551">★ Startwerkzeug</em>':''}
        ${tool.hidden?'<em class="marke-aus-v1551">Ausgeblendet</em>':''}
      </span>
      <span class="werkzeug-wo-v1551" role="group" aria-label="Anzeigeort für ${escapeHtml(tool.label||'Werkzeug')}">
        <b>Wo?</b>
        <button type="button" class="${platz==='start'?'ist-an':''}" data-tool-action="wo-start" data-tool-id="${kennung}">Oben</button>
        <button type="button" class="${platz==='favorite'?'ist-an':''}" data-tool-action="wo-favorit" data-tool-id="${kennung}">Favorit</button>
        <button type="button" class="${platz==='both'?'ist-an':''}" data-tool-action="wo-beides" data-tool-id="${kennung}">Beides</button>
      </span>
      <span class="werkzeug-aktionen-v1551">
        <button type="button" class="werkzeug-stern-v1551" data-tool-action="default" data-tool-id="${kennung}" aria-pressed="${tool.isDefault?'true':'false'}">${tool.isDefault?'★':'☆'} Start</button>
        <button type="button" data-tool-action="hide" data-tool-id="${kennung}">${tool.hidden?'Einblenden':'Ausblenden'}</button>
        <span class="werkzeug-reihenfolge-v1551">
          <button type="button" data-tool-action="up" data-tool-id="${kennung}" aria-label="Nach oben" ${index===0?'disabled':''}>↑</button>
          <button type="button" data-tool-action="down" data-tool-id="${kennung}" aria-label="Nach unten" ${index===werkzeuge.length-1?'disabled':''}>↓</button>
        </span>
        <button type="button" class="werkzeug-weg-v1551" data-tool-action="delete" data-tool-id="${kennung}">Entfernen</button>
      </span>`;
    list.append(karte);
  });
  if(!werkzeuge.length){
    list.innerHTML='<p class="werkzeug-leer-v1551">Noch kein Werkzeug ausgewählt. Unten eine Vorlage wählen und hinzufügen.</p>';
  }
  list.querySelectorAll('[data-tool-action]').forEach(button=>button.onclick=()=>manageTeachingTool(button.dataset.toolId,button.dataset.toolAction));
  select.onchange=()=>{const preset=TEACHING_TOOL_PRESETS[select.value]||TEACHING_TOOL_PRESETS.custom;label.value=preset.label;url.value=preset.url;placement.value=['youtube','google','safari','chrome'].includes(select.value)?'favorite':'start'};
}
function saveTeachingTool(){
  const select=document.querySelector('#teachingToolSelect'),placement=document.querySelector('#teachingToolPlacement'),labelInput=document.querySelector('#teachingToolLabelInput'),urlInput=document.querySelector('#teachingToolUrlInput'),status=document.querySelector('#teachingToolStatus');if(!select||!placement||!labelInput||!urlInput)return;
  const label=(labelInput.value||'Unterricht').trim(),url=normaliseMaterialLink(urlInput.value);if(!url){if(status)status.textContent='Bitte eine gültige Startadresse eintragen.';return}
  const preset=TEACHING_TOOL_PRESETS[select.value]||TEACHING_TOOL_PRESETS.custom,tools=activeTeachingTools();tools.push({id:`tool-${Date.now()}`,type:select.value,label,url,mark:preset.mark,hint:preset.hint,isDefault:tools.length===0,hidden:false,placement:placement.value});saveState();renderTeachingToolButton();renderTeachingToolSettings();renderTeamCockpit();if(status)status.textContent=`${label} wurde für ${activeTeamPerson().name} hinzugefügt ✓`;
}
function manageTeachingTool(id,action){
  const tools=activeTeachingTools(),index=tools.findIndex(tool=>tool.id===id);if(index<0)return;const tool=tools[index];
  if(action==='default'){if(tool.placement==='favorite')tool.placement='both';tools.forEach(item=>item.isDefault=item.id===id)}
  if(action==='up'&&index>0)[tools[index-1],tools[index]]=[tools[index],tools[index-1]];
  if(action==='down'&&index<tools.length-1)[tools[index+1],tools[index]]=[tools[index],tools[index+1]];
  if(action==='placement')tool.placement=tool.placement==='start'?(tool.isDefault?'both':'favorite'):tool.placement==='favorite'?'both':'start';
  /* NEXT 15.51 – direkt gesetzte Anzeigeposition statt Durchschalten. */
  if(action==='wo-start'){tool.placement='start'}
  if(action==='wo-favorit')tool.placement='favorite';
  if(action==='wo-beides'){tool.placement='both'}
  if(action==='hide')tool.hidden=!tool.hidden;
  if(action==='delete'){if(!confirm(`Werkzeug „${tool.label}“ löschen?`))return;tools.splice(index,1)}
  normalisiereStartwerkzeug(tools);
  saveState();renderTeachingToolButton();renderTeachingToolSettings();renderTeamCockpit();
}

/* NEXT 15.51 – Eine Regel, die immer gilt: unter den Werkzeugen, die OBEN
   erscheinen, ist genau eines das Startwerkzeug. Ein reiner Favorit kann es
   nie sein.

   Vorher war diese Regel an mehreren Stellen einzeln nachgebaut – beim
   Loeschen, beim Umschalten, beim Hinzufuegen. Beim Umschalten auf „Favorit"
   fiel dadurch das letzte Startwerkzeug weg und es blieb KEINES uebrig.
   Der Pruefstand hat genau das gefunden. Jetzt steht die Regel an einer
   Stelle und wird nach jeder Aenderung angewandt. */
function normalisiereStartwerkzeug(tools){
  if(!Array.isArray(tools))return;
  const oben=tools.filter(item=>item.placement!=='favorite');
  tools.forEach(item=>{if(item.placement==='favorite')item.isDefault=false});
  if(!oben.length)return;                       // nur Favoriten: kein Startwerkzeug
  const gesetzt=oben.filter(item=>item.isDefault);
  if(gesetzt.length===1)return;                 // alles in Ordnung
  oben.forEach(item=>item.isDefault=false);
  (gesetzt[0]||oben[0]).isDefault=true;
}
const SUBJECT_STYLES=[
  {icon:'🔢',color:'#2878bd'},{icon:'📖',color:'#d9513a'},{icon:'🌍',color:'#3f8e4d'},
  {icon:'🎨',color:'#a65ab0'},{icon:'🎵',color:'#e28a25'},{icon:'🏃',color:'#258d87'},
  {icon:'💬',color:'#6753ad'},{icon:'🧩',color:'#b36d32'}
];
const SUBJECT_ICON_CHOICES=['🔢','📖','🌍','🎨','🎵','🏃','💬','🧩','🔬','🧮','🖥️','🕹️','🧘','🧑‍🍳','🌳','⚽','🎭','🧵','📐','🗺️','🎲','🧸','🦊','⭐'];
function subjectStyle(name,index,drawer){
  if(drawer?.icon)return {icon:drawer.icon,color:drawer.color||SUBJECT_STYLES[index%SUBJECT_STYLES.length].color};
  const key=(name||'').toLowerCase();
  if(key.includes('mathe'))return {icon:'🔢',color:'#2878bd'};
  if(key.includes('deutsch')||key.includes('lesen'))return {icon:'📖',color:'#d9513a'};
  if(key.includes('sach'))return {icon:'🌍',color:'#3f8e4d'};
  if(key.includes('musik'))return {icon:'🎵',color:'#e28a25'};
  if(key.includes('kunst'))return {icon:'🎨',color:'#a65ab0'};
  if(key.includes('sport')||key.includes('turn'))return {icon:'🏃',color:'#258d87'};
  if(key.includes('englisch')||key.includes('sprache'))return {icon:'💬',color:'#6753ad'};
  return SUBJECT_STYLES[index%SUBJECT_STYLES.length];
}
function allTodayLessons(store){
  return store.drawers.flatMap(drawer=>(drawer.items||[]).filter(item=>item.pinnedToday).map(item=>({item,drawer})));
}
function renderSubjectLaunchpad(){
  const todayHost=document.querySelector('#todayLessonLaunch'),grid=document.querySelector('#subjectLaunchGrid');
  if(!todayHost||!grid)return;
  /* KORREKTUR 2d */
  const store=activeMaterialStore(),active=activeTeamPerson();
  const today=allTodayLessons(store);
  todayHost.innerHTML=today.length
    ?`<div class="today-launch-copy"><span>⭐</span><div><small>HEUTE BEREIT</small><strong>${escapeHtml(today[0].item.title)}</strong><p>${escapeHtml(today[0].drawer.name)}${today[0].item.note?` · ${escapeHtml(today[0].item.note)}`:''}</p></div></div>${normaliseMaterialLink(today[0].item.link)?`<a class="lesson-open-button" href="${escapeHtml(normaliseMaterialLink(today[0].item.link))}" target="_blank" rel="noopener">Unterricht öffnen ↗</a>`:'<button class="lesson-open-button is-disabled" type="button" disabled>Link fehlt</button>'}`
    :`<div class="today-launch-empty"><span>☀️</span><div><strong>Was steht heute an?</strong><p>Markiere unten eine vorbereitete Stunde mit „Für heute anheften“.</p></div></div>`;
  grid.innerHTML='';
  const todayRows=getScheduleForDate(new Date()).filter(row=>row.status!=='cancelled');
  const normal=value=>(value||'').toLowerCase().replace(/[^a-zäöüß]/g,'');
  let visibleDrawers=store.drawers.map(drawer=>({drawer,row:todayRows.find(row=>normal(row.subject)===normal(drawer.name)||normal(row.subject).includes(normal(drawer.name))||normal(drawer.name).includes(normal(row.subject)))})).filter(entry=>entry.row);
  if(!visibleDrawers.length)visibleDrawers=store.drawers.map(drawer=>({drawer,row:null}));
  visibleDrawers.forEach(({drawer,row},index)=>{
    const style=subjectStyle(drawer.name,index,drawer),items=drawer.items||[],lesson=items.find(item=>item.pinnedToday)||items[0],safeLink=normaliseMaterialLink(lesson?.link),pinned=items.filter(item=>item.pinnedToday).length;
    const control=document.createElement(safeLink?'a':'button');if(!safeLink)control.type='button';else{control.href=safeLink;control.target='_blank';control.rel='noopener'}control.className='subject-launch-card';control.style.setProperty('--subject-color',style.color);
    const subtitle=lesson?(pinned?'Für heute: ':'')+lesson.title:row?`${row.time} · Link noch hinterlegen`:'Noch keine Stunde gespeichert';
    control.innerHTML=`<span class="subject-launch-icon">${style.icon}</span><span class="subject-launch-copy"><strong>${escapeHtml(drawer.name)}</strong><small>${escapeHtml(subtitle)}</small></span><span class="subject-launch-arrow">${safeLink?'↗':'›'}</span>`;
    if(!safeLink)control.onclick=()=>{store.activeDrawer=drawer.name;saveState();renderMaterialLibrary();document.querySelector('.material-library-panel')?.scrollIntoView({behavior:'smooth',block:'start'});const status=document.querySelector('#subjectLaunchStatus');if(status)status.textContent=`${drawer.name}: Unten den Unterrichtslink eintragen oder eine gespeicherte Stunde auswählen.`};
    grid.append(control);
  });
  const title=document.querySelector('#subjectLaunchpadTitle');if(title)title.textContent=`🚀 Heutige Fächer für ${active.name}`;
  const pName=document.querySelector('#personalWorkspaceName'),pRole=document.querySelector('#personalWorkspaceRole'),pIcon=document.querySelector('#personalWorkspaceIcon');if(pName)pName.textContent=active.name;if(pRole)pRole.textContent=active.role;if(pIcon)pIcon.textContent=active.icon;
  renderTeachingToolButton();
}
/* NEXT 11.91 – Fundus-Ordner. Jede Schublade (Kategorie) kann beliebig tief
   verschachtelte Ordner enthalten. Datenmodell rückwärtskompatibel:
   drawer.folders = [{id,name,parentId}], jedes Material bekommt optional
   item.folderId (fehlend = Hauptebene). Anheften, Tafel-Freigabe und
   Backups arbeiten weiter auf der flachen items-Liste und bleiben unberührt. */
function drawerFolders(drawer){if(!Array.isArray(drawer.folders))drawer.folders=[];return drawer.folders}
function folderById(drawer,id){return drawerFolders(drawer).find(folder=>folder.id===id)||null}
function folderChildren(drawer,parentId){return drawerFolders(drawer).filter(folder=>(folder.parentId||null)===(parentId||null))}
function folderPath(drawer,id){const path=[];let current=folderById(drawer,id),guard=0;while(current&&guard++<30){path.unshift(current);current=folderById(drawer,current.parentId)}return path}
function folderDescendantIds(drawer,id){const out=[];const walk=parentId=>{folderChildren(drawer,parentId).forEach(folder=>{out.push(folder.id);walk(folder.id)})};walk(id);return out}
function folderItemCount(drawer,id){const ids=new Set([id,...folderDescendantIds(drawer,id)]);return (drawer.items||[]).filter(item=>ids.has(item.folderId||null)).length}
function currentFolderId(drawer){const id=drawer.activeFolder||null;return id&&folderById(drawer,id)?id:null}
function folderTreeOptions(drawer,excludeId){
  const excluded=excludeId?new Set([excludeId,...folderDescendantIds(drawer,excludeId)]):new Set();
  const rows=[{id:'',label:'🗂️ Hauptebene'}];
  const walk=(parentId,depth)=>{folderChildren(drawer,parentId).forEach(folder=>{if(excluded.has(folder.id))return;rows.push({id:folder.id,label:`${'\u00a0\u00a0\u00a0'.repeat(depth)}📁 ${folder.name}`});walk(folder.id,depth+1)})};
  walk(null,1);return rows;
}
function enforceMobileFundusLayout(){
  /* 15.33 – Alte Versionen haben Fundus-Knöpfe über Inline-Stile verschoben.
     Diese Sonderlogik ist entfallen: CSS steuert nun alle Größen einheitlich.
     Beim Wechsel von älteren Ständen werden eventuell verbliebene Inline-
     Angaben einmalig entfernt, ohne neue Bedienelemente einzublenden. */
  ['.material-head','.material-head-title','.material-search-row','.material-search-field',
   '#materialSearchInput','#addDrawerButton','#editActiveDrawerButton',
   '.personal-workspace-banner','.team-workspace-nav','.team-page-tabs']
    .forEach(selector=>document.querySelectorAll(selector).forEach(element=>element.removeAttribute('style')));
}
function renderMaterialLibrary(){
  const tabs=document.querySelector('#materialDrawerTabs'), list=document.querySelector('#materialItemList');
  if(!tabs||!list)return;
  const store=activeMaterialStore(); tabs.innerHTML='';
  store.drawers.forEach((drawer,index)=>{
    const wrap=document.createElement('div');wrap.className='drawer-tab-wrap';
    const style=subjectStyle(drawer.name,index,drawer);
    const b=document.createElement('button');b.type='button';b.className='drawer-tab';if(drawer.name===store.activeDrawer)b.classList.add('active');
    b.innerHTML=`<span>${style.icon}</span><strong>${escapeHtml(drawer.name)}</strong><small>${drawer.items.length}</small>`;
    b.onclick=()=>{store.activeDrawer=drawer.name;materialPage=0;saveState();renderMaterialLibrary()};wrap.append(b);
    tabs.append(wrap);
  });
  const drawer=store.drawers.find(d=>d.name===store.activeDrawer);
  const editDrawerButton=document.querySelector('#editActiveDrawerButton');
  if(editDrawerButton){editDrawerButton.textContent=`✏️ ${drawer?.name||'Aktives Fach'} bearbeiten`;editDrawerButton.disabled=!drawer}
  const searchField=document.querySelector('#materialSearchInput'),searchClear=document.querySelector('#materialSearchClear');
  const query=(searchField?.value||'').trim().toLocaleLowerCase('de-DE');
  if(searchClear)searchClear.hidden=!query;
  if(query){
    /* Suchmodus: das ganze Fach inklusive aller Unterordner durchsuchen,
       Treffer flach anzeigen und den Fundort (Ordnerpfad) dazuschreiben. */
    const hits=(drawer.items||[]).filter(item=>[item.title,item.note,item.type].some(value=>(value||'').toLocaleLowerCase('de-DE').includes(query)));
    const pageSize=6,maxPage=Math.max(0,Math.ceil(hits.length/pageSize)-1);materialPage=Math.min(materialPage,maxPage);
    const visibleHits=hits.slice(materialPage*pageSize,(materialPage+1)*pageSize);
    list.innerHTML=`<div class="material-list-head"><div><h4>🔍 Suche in ${escapeHtml(drawer.name)}</h4><p>${hits.length?`${hits.length} Treffer – aus allen Ordnern`:'Keine Treffer. Anders schreiben oder Suche leeren.'}</p></div></div><div class="material-page-grid"></div>`;
    const pageGrid=list.querySelector('.material-page-grid');
    visibleHits.forEach(item=>{
      const card=document.createElement('article');card.className='material-item';
      const safeLink=normaliseMaterialLink(item.link);
      const where=[drawer.name,...folderPath(drawer,item.folderId||null).map(folder=>folder.name)].join(' › ');
      card.innerHTML=`<div class="material-type-icon">${materialIcon(item.type)}</div><div class="material-item-copy"><div class="material-item-title"><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.type)}</span></div>${item.note?`<p>${escapeHtml(item.note)}</p>`:''}<small class="material-item-where">📁 ${escapeHtml(where)}</small></div><div class="material-item-actions">${safeLink?`<a href="${escapeHtml(safeLink)}" target="_blank" rel="noopener">Öffnen ↗</a>`:''}<button class="today-pin-button ${item.pinnedToday?'is-pinned':''}" type="button" data-pin-material="${escapeHtml(item.id)}">${item.pinnedToday?'✓ Auf der Tafel':'📌 Für heute'}</button><button type="button" data-goto-material="${escapeHtml(item.id)}">📂 Dorthin</button></div>`;
      card.querySelector('[data-pin-material]').onclick=()=>toggleMaterialToday(item.id);
      card.querySelector('[data-goto-material]').onclick=()=>{if(searchField)searchField.value='';drawer.activeFolder=item.folderId&&folderById(drawer,item.folderId)?item.folderId:null;materialPage=0;saveState();renderMaterialLibrary()};
      pageGrid.append(card);
    });
    if(hits.length>pageSize){const pager=document.createElement('div');pager.className='material-pager';pager.innerHTML=`<button type="button" data-material-page="prev" ${materialPage===0?'disabled':''}>← Zurück</button><span>${materialPage+1} / ${maxPage+1}</span><button type="button" data-material-page="next" ${materialPage===maxPage?'disabled':''}>Weiter →</button>`;pager.querySelector('[data-material-page="prev"]').onclick=()=>{if(materialPage>0){materialPage--;renderMaterialLibrary()}};pager.querySelector('[data-material-page="next"]').onclick=()=>{if(materialPage<maxPage){materialPage++;renderMaterialLibrary()}};list.append(pager)}
    const location=document.querySelector('#materialSaveLocation');
    if(location)location.textContent=`Wird gespeichert in: ${[drawer.name,...folderPath(drawer,currentFolderId(drawer)).map(folder=>folder.name)].join(' › ')}`;
    document.querySelector('#materialStatus').textContent='';
    return;
  }
  const activeFolder=currentFolderId(drawer);drawer.activeFolder=activeFolder;
  const path=folderPath(drawer,activeFolder),subfolders=folderChildren(drawer,activeFolder).sort((a,b)=>a.name.localeCompare(b.name,'de'));
  const folderItems=(drawer.items||[]).filter(item=>(item.folderId||null)===activeFolder);
  const pageSize=6,maxPage=Math.max(0,Math.ceil(folderItems.length/pageSize)-1);materialPage=Math.min(materialPage,maxPage);
  const visibleItems=folderItems.slice(materialPage*pageSize,(materialPage+1)*pageSize);
  const hereName=activeFolder?folderById(drawer,activeFolder).name:drawer.name;
  const crumbs=[`<button type="button" class="material-crumb${activeFolder?'':' is-current'}" data-folder-go="">🗂️ ${escapeHtml(drawer.name)}</button>`]
    .concat(path.map((folder,index)=>`<b>›</b><button type="button" class="material-crumb${index===path.length-1?' is-current':''}" data-folder-go="${escapeHtml(folder.id)}">📁 ${escapeHtml(folder.name)}</button>`)).join('');
  list.innerHTML=`<div class="material-list-head"><div><h4>${escapeHtml(hereName)}</h4><p>${folderItems.length||subfolders.length?`${subfolders.length?`${subfolders.length} Ordner · `:''}${folderItems.length} Inhalte hier · ${drawer.items.length} in ${escapeHtml(drawer.name)} gesamt`:'Hier ist noch nichts – lege rechts Inhalte oder unten einen Ordner an.'}</p></div></div><nav class="material-folder-crumbs" aria-label="Ordnerpfad">${crumbs}</nav><div class="material-folder-grid"></div><div class="material-page-grid"></div>`;
  list.querySelectorAll('[data-folder-go]').forEach(button=>button.onclick=()=>{drawer.activeFolder=button.dataset.folderGo||null;materialPage=0;saveState();renderMaterialLibrary()});
  const folderGrid=list.querySelector('.material-folder-grid');
  if(activeFolder){
    const parent=folderById(drawer,activeFolder)?.parentId||null;
    const up=document.createElement('button');up.type='button';up.className='material-folder-card material-folder-up';up.innerHTML='<span class="material-folder-icon">↩️</span><span class="material-folder-copy"><strong>Zurück</strong><small>Eine Ebene nach oben</small></span>';
    up.onclick=()=>{drawer.activeFolder=parent;materialPage=0;saveState();renderMaterialLibrary()};folderGrid.append(up);
  }
  subfolders.forEach(folder=>{
    const count=folderItemCount(drawer,folder.id),childFolders=folderChildren(drawer,folder.id).length,card=document.createElement('div');
    card.className='material-folder-card';
    card.innerHTML=`<span class="material-folder-icon">📁</span><span class="material-folder-copy"><strong>${escapeHtml(folder.name)}</strong><small>${childFolders?`${childFolders} Ordner · `:''}${count} Inhalte</small></span><span class="material-folder-actions"><button type="button" data-folder-rename="${escapeHtml(folder.id)}" title="Ordner umbenennen">✏️</button><button type="button" data-folder-delete="${escapeHtml(folder.id)}" title="Ordner auflösen">×</button></span>`;
    card.addEventListener('click',event=>{if(event.target.closest('[data-folder-rename],[data-folder-delete]'))return;drawer.activeFolder=folder.id;materialPage=0;saveState();renderMaterialLibrary()});
    card.querySelector('[data-folder-rename]').onclick=()=>renameMaterialFolder(folder.id);
    card.querySelector('[data-folder-delete]').onclick=()=>deleteMaterialFolder(folder.id);
    folderGrid.append(card);
  });
  const newFolder=document.createElement('button');newFolder.type='button';newFolder.className='material-folder-card material-folder-new';newFolder.innerHTML='<span class="material-folder-icon">＋</span><span class="material-folder-copy"><strong>Neuer Ordner</strong><small>In diesem Fach anlegen</small></span>';newFolder.onclick=addMaterialFolder;folderGrid.append(newFolder);
  const pageGrid=list.querySelector('.material-page-grid');
  if(!folderItems.length&&!subfolders.length){const empty=document.createElement('div');empty.className='material-empty';empty.innerHTML='<span>✨</span><strong>Noch leer</strong><small>Füge rechts einen Inhalt hinzu oder lege oben einen Ordner an.</small>';pageGrid.append(empty)}
  visibleItems.forEach(item=>{
    const card=document.createElement('article');card.className='material-item';
    const safeLink=normaliseMaterialLink(item.link);
    card.innerHTML=`<div class="material-type-icon">${materialIcon(item.type)}</div><div class="material-item-copy"><div class="material-item-title"><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.type)}</span></div>${item.note?`<p>${escapeHtml(item.note)}</p>`:''}<small>${new Date(item.createdAt).toLocaleDateString('de-DE')}</small></div><div class="material-item-actions">${safeLink?`<a href="${escapeHtml(safeLink)}" target="_blank" rel="noopener">Öffnen ↗</a>`:''}<button class="today-pin-button ${item.pinnedToday?'is-pinned':''}" type="button" data-pin-material="${escapeHtml(item.id)}">${item.pinnedToday?'✓ Auf der Tafel':'📌 Für heute'}</button><button type="button" data-move-material="${escapeHtml(item.id)}">📁 Verschieben</button><button type="button" data-delete-material="${escapeHtml(item.id)}">Löschen</button></div>`;
    card.querySelector('[data-pin-material]').onclick=()=>toggleMaterialToday(item.id);
    card.querySelector('[data-move-material]').onclick=()=>openMaterialMove(item.id);
    card.querySelector('[data-delete-material]').onclick=()=>deleteMaterial(item.id);pageGrid.append(card)
  });
  if(folderItems.length>pageSize){const pager=document.createElement('div');pager.className='material-pager';pager.innerHTML=`<button type="button" data-material-page="prev" ${materialPage===0?'disabled':''}>← Zurück</button><span>${materialPage+1} / ${maxPage+1}</span><button type="button" data-material-page="next" ${materialPage===maxPage?'disabled':''}>Weiter →</button>`;pager.querySelector('[data-material-page="prev"]').onclick=()=>{if(materialPage>0){materialPage--;renderMaterialLibrary()}};pager.querySelector('[data-material-page="next"]').onclick=()=>{if(materialPage<maxPage){materialPage++;renderMaterialLibrary()}};list.append(pager)}
  const location=document.querySelector('#materialSaveLocation');
  if(location)location.textContent=`Wird gespeichert in: ${[drawer.name,...path.map(folder=>folder.name)].join(' › ')}`;
  document.querySelector('#materialStatus').textContent='';
  enforceMobileFundusLayout();
}
function addMaterialFolder(){
  const store=activeMaterialStore(),drawer=store.drawers.find(d=>d.name===store.activeDrawer);if(!drawer)return;
  const name=prompt('Wie soll der neue Ordner heißen?','');if(!name||!name.trim())return;
  const clean=name.trim(),parentId=currentFolderId(drawer);
  if(folderChildren(drawer,parentId).some(folder=>folder.name.toLowerCase()===clean.toLowerCase())){alert('Einen Ordner mit diesem Namen gibt es hier bereits.');return}
  drawerFolders(drawer).push({id:`f${Date.now()}`,name:clean,parentId});saveState();renderMaterialLibrary();
}
function renameMaterialFolder(id){
  const store=activeMaterialStore(),drawer=store.drawers.find(d=>d.name===store.activeDrawer),folder=folderById(drawer,id);if(!folder)return;
  const name=prompt('Neuer Name für den Ordner:',folder.name);if(!name||!name.trim())return;
  folder.name=name.trim();saveState();renderMaterialLibrary();
}
function deleteMaterialFolder(id){
  const store=activeMaterialStore(),drawer=store.drawers.find(d=>d.name===store.activeDrawer),folder=folderById(drawer,id);if(!folder)return;
  const count=folderItemCount(drawer,id);
  if(!confirm(`Ordner „${folder.name}“ auflösen? ${count?`${count} Inhalte und alle Unterordner wandern eine Ebene nach oben – nichts wird gelöscht.`:'Der Ordner ist leer.'}`))return;
  const parentId=folder.parentId||null;
  (drawer.items||[]).forEach(item=>{if((item.folderId||null)===id)item.folderId=parentId});
  drawerFolders(drawer).forEach(child=>{if((child.parentId||null)===id)child.parentId=parentId});
  drawer.folders=drawerFolders(drawer).filter(candidate=>candidate.id!==id);
  if((drawer.activeFolder||null)===id)drawer.activeFolder=parentId;
  saveState();renderMaterialLibrary();
}
let materialMoveItemId=null;
function openMaterialMove(id){
  const store=activeMaterialStore(),drawer=store.drawers.find(d=>d.name===store.activeDrawer),item=(drawer.items||[]).find(candidate=>candidate.id===id);if(!item)return;
  materialMoveItemId=id;
  const dialog=document.querySelector('#materialMoveDialog'),select=document.querySelector('#materialMoveSelect'),title=document.querySelector('#materialMoveTitle');if(!dialog||!select)return;
  select.innerHTML=folderTreeOptions(drawer).map(row=>`<option value="${escapeHtml(row.id)}">${row.label}</option>`).join('');
  select.value=item.folderId&&folderById(drawer,item.folderId)?item.folderId:'';
  if(title)title.textContent=`„${item.title}“ innerhalb von ${drawer.name} einsortieren`;
  dialog.showModal();
}
function confirmMaterialMove(){
  const store=activeMaterialStore(),drawer=store.drawers.find(d=>d.name===store.activeDrawer),item=(drawer.items||[]).find(candidate=>candidate.id===materialMoveItemId);
  const dialog=document.querySelector('#materialMoveDialog'),select=document.querySelector('#materialMoveSelect');if(!item||!select){dialog?.close();return}
  item.folderId=select.value||null;saveState();dialog?.close();renderMaterialLibrary();
  document.querySelector('#materialStatus').textContent='In den Ordner verschoben ✓';
}
function materialIcon(type){return ({'Prowise Presenter':'🖥️','Prowise Teach':'🧑‍🏫','Link':'🔗','Arbeitsblatt':'📄','Spiel':'🎲','Unterrichtsreihe':'📚','Angebot':'🎨','Video':'🎬','Sonstiges':'📦'})[type]||'📦'}
function normaliseMaterialLink(link){const v=(link||'').trim();if(!v)return '';if(/^https?:\/\//i.test(v))return v;return `https://${v}`}
let drawerEditorTarget=null,drawerEditorSelectedIcon='';
function openIconPicker(drawer){
  const dialog=document.querySelector('#iconPickerDialog'),grid=document.querySelector('#iconPickerGrid'),title=document.querySelector('#iconPickerTitle');
  if(!dialog||!grid)return;
  drawerEditorTarget=drawer;drawerEditorSelectedIcon=drawer.icon||subjectStyle(drawer.name,0,drawer).icon;
  if(title)title.textContent=`„${drawer.name}“ ruhig an einer Stelle anpassen`;
  const nameInput=document.querySelector('#iconPickerDrawerName'),status=document.querySelector('#iconPickerStatus');
  if(nameInput)nameInput.value=drawer.name;if(status)status.textContent='';
  grid.innerHTML='';
  SUBJECT_ICON_CHOICES.forEach(icon=>{
    const button=document.createElement('button');button.type='button';button.className='icon-picker-choice';if(drawerEditorSelectedIcon===icon)button.classList.add('is-active');button.textContent=icon;
    button.onclick=()=>{drawerEditorSelectedIcon=icon;grid.querySelectorAll('.icon-picker-choice').forEach(choice=>choice.classList.toggle('is-active',choice===button))};
    grid.append(button);
  });
  const delBtn=document.querySelector('#iconPickerDeleteDrawer');
  if(delBtn){
    const store=activeMaterialStore();
    const onlyOne=store.drawers.length<2;
    delBtn.hidden=onlyOne;
    delBtn.onclick=()=>{dialog.close();deleteDrawer(drawer.name)};
  }
  const saveBtn=document.querySelector('#iconPickerSaveDrawer');
  if(saveBtn)saveBtn.onclick=()=>saveActiveDrawerEditor();
  dialog.showModal();
}
function saveActiveDrawerEditor(){
  const drawer=drawerEditorTarget,store=activeMaterialStore(),input=document.querySelector('#iconPickerDrawerName'),status=document.querySelector('#iconPickerStatus');
  if(!drawer)return;
  const name=(input?.value||'').trim();
  if(!name){if(status)status.textContent='Bitte einen Fachnamen eintragen.';input?.focus();return}
  if(store.drawers.some(candidate=>candidate!==drawer&&candidate.name.toLocaleLowerCase('de-DE')===name.toLocaleLowerCase('de-DE'))){if(status)status.textContent='Dieses Fach gibt es bereits.';input?.focus();return}
  const oldName=drawer.name;drawer.name=name;drawer.icon=drawerEditorSelectedIcon||drawer.icon;
  if(store.activeDrawer===oldName)store.activeDrawer=name;
  saveState();renderMaterialLibrary();renderTeamCockpit();renderMobileBoardController();renderSubjectLaunchpad();
  document.querySelector('#iconPickerDialog')?.close();
}
function addDrawer(){
  const name=prompt('Wie soll das neue Fach heißen?','');if(!name||!name.trim())return;
  const store=activeMaterialStore(),clean=name.trim();if(store.drawers.some(d=>d.name.toLowerCase()===clean.toLowerCase())){alert('Dieses Fach gibt es bereits.');return}
  store.drawers.push({name:clean,items:[]});store.activeDrawer=clean;saveState();renderMaterialLibrary();renderSubjectLaunchpad();
}
function deleteDrawer(name){
  const store=activeMaterialStore(),drawer=store.drawers.find(d=>d.name===name);if(!drawer)return;
  if(!confirm(`Schublade „${name}“ mit ${drawer.items.length} Einträgen löschen?`))return;
  store.drawers=store.drawers.filter(d=>d.name!==name);store.activeDrawer=store.drawers[0].name;saveState();renderDashboard();renderMaterialLibrary();renderSubjectLaunchpad();
}
function addMaterial(){
  const title=document.querySelector('#materialTitleInput').value.trim();const link=document.querySelector('#materialLinkInput').value.trim();const type=document.querySelector('#materialTypeInput').value;const note=document.querySelector('#materialNoteInput').value.trim();const pinnedToday=document.querySelector('#materialTodayInput')?.checked||false;
  if(!title){document.querySelector('#materialStatus').textContent='Bitte einen Titel eintragen.';return}
  const store=activeMaterialStore(),drawer=store.drawers.find(d=>d.name===store.activeDrawer);
  drawer.items.unshift({id:`m${Date.now()}`,title,link,type,note,pinnedToday,folderId:currentFolderId(drawer),createdAt:new Date().toISOString()});saveState();renderDashboard();renderMobilePersonalHome();
  document.querySelector('#materialTitleInput').value='';document.querySelector('#materialLinkInput').value='';document.querySelector('#materialNoteInput').value='';if(document.querySelector('#materialTodayInput'))document.querySelector('#materialTodayInput').checked=false;materialPage=0;renderMaterialLibrary();renderSubjectLaunchpad();document.querySelector('#materialStatus').textContent=pinnedToday?'Für heute vorbereitet – noch privat ✓':'Im Fundus gespeichert ✓';
}
function toggleMaterialToday(id){
  const store=activeMaterialStore(),drawer=store.drawers.find(d=>d.name===store.activeDrawer),item=drawer?.items.find(i=>i.id===id);if(!item)return;
  item.pinnedToday=!item.pinnedToday;saveState();renderDashboard();renderMobilePersonalHome();renderMaterialLibrary();renderSubjectLaunchpad();document.querySelector('#materialStatus').textContent=item.pinnedToday?'Für heute vorbereitet – auf dem Handy bewusst freigeben ✓':'Von „Heute“ gelöst.';
}
function deleteMaterial(id){
  const store=activeMaterialStore(),drawer=store.drawers.find(d=>d.name===store.activeDrawer);drawer.items=drawer.items.filter(i=>i.id!==id);saveState();renderDashboard();renderMaterialLibrary();renderSubjectLaunchpad();
}

/* NEXT 15.36 – Die Punkteansicht nutzt die tatsaechlich verfuegbare Flaeche.
   Breite bestimmt die Spaltenzahl, Hoehe die Kartenhoehe. So bleiben alle
   sechs Aktionen auf Laptop und iPad sichtbar, ohne starre Leerflaeche. */
function fitResponsiveStudentGrid(list=document.querySelector('#teacherStudentList')){
  if(!list||list.id!=='teacherStudentList')return;
  requestAnimationFrame(()=>{
    const cards=list.querySelectorAll('.compact-rating-row'),count=cards.length;
    if(!count){
      ['--student-grid-columns','--student-grid-rows','--student-card-height','--student-grid-gap'].forEach(name=>list.style.removeProperty(name));
      delete list.dataset.gridColumns;
      return;
    }
    const rect=list.getBoundingClientRect();
    if(rect.width<1)return;
    const viewportWidth=window.visualViewport?.width||window.innerWidth||rect.width;
    const gap=viewportWidth<900?7:8;
    /* NEXT 15.55 – Eine Zeile pro Kind statt einer Kachel.

       Vorher wurde die verfuegbare HOEHE auf die Zeilen verteilt: bei
       wenigen Zeilen wuchsen die Karten auf 112 Pixel und darueber, und
       unter jedem Namen stand eine handbreit Leerflaeche. Gleichzeitig
       wurde der Inhalt in der BREITE zusammengequetscht, bis Namen und
       Knopfbeschriftungen abschnitten – „An…", „Ste…", „Ver…".

       Hoehe verschenkt, Breite knapp. Deshalb jetzt umgekehrt: die
       Kartenhoehe ist fest und flach, die Breite reicht fuer Foto,
       vollen Namen und alle sechs Knoepfe. Was nicht auf den Schirm
       passt, wird gescrollt. */
    const schmal=viewportWidth<=900;
    const minCardWidth=schmal?280:viewportWidth<=1500?430:450;
    const maxColumns=viewportWidth<=700?1:4;
    const columns=Math.max(1,Math.min(maxColumns,Math.floor((rect.width+gap)/(minCardWidth+gap))));
    const rows=Math.max(1,Math.ceil(count/columns));
    const cardHeight=schmal?86:58;
    list.style.setProperty('--student-grid-columns',String(columns));
    list.style.setProperty('--student-grid-rows',String(rows));
    list.style.setProperty('--student-card-height',`${cardHeight}px`);
    list.style.setProperty('--student-grid-gap',`${gap}px`);
    list.dataset.gridColumns=String(columns);
  });
}

function renderPointRows(list,statusTarget){
  if(!list)return;list.innerHTML='';
  const search=list.id==='teacherStudentList'?(document.querySelector('#teacherStudentSearch')?.value||'').trim().toLocaleLowerCase('de-DE'):'';
  const students=activeStudents().filter(student=>!search||student.name.toLocaleLowerCase('de-DE').includes(search));
  if(!students.length){list.innerHTML='<p class="student-search-empty">Kein Fuchs mit diesem Namen gefunden.</p>';fitResponsiveStudentGrid(list);return}
  students.forEach(s=>{
    const row=document.createElement('div');row.className='student-row';
    const p=state.points[pointKey(s.id)]||{green:0,yellow:0,red:0,direct:0};
    const activeBans=studentIncidents(s.id).filter(incidentIsActive),measures=activeBans.slice(0,3).map(item=>banMeta(item));
    const compact=list.id==='teacherStudentList';
    row.classList.toggle('compact-rating-row',compact);
    const actions=`<button class="point-btn point-green" title="Positiv" aria-label="Positiv für ${escapeHtml(s.name)}">🟢 <span>Positiv</span></button><button class="point-btn point-yellow" title="Ermahnung" aria-label="Ermahnung für ${escapeHtml(s.name)}">🟡 <span>Ermahnung</span></button><button class="point-btn point-red" title="Veto" aria-label="Veto für ${escapeHtml(s.name)}">🔴 <span>Veto</span></button><button class="point-btn point-direct" title="Direkt auf Grün" aria-label="Direkt Grün für ${escapeHtml(s.name)}">⭐ <span>Direkt Grün</span></button><button class="point-btn point-ban" title="Verbot auswählen" aria-label="Verbot für ${escapeHtml(s.name)} auswählen"><span class="ban-glyph" aria-hidden="true">⊘</span><span>Verbot</span></button>`;
    const compactActions=`<div class="student-direct-actions" aria-label="Schnellaktionen für ${escapeHtml(s.name)}"><button class="point-btn point-green" title="Grün" aria-label="Grün für ${escapeHtml(s.name)}"><span class="point-symbol" aria-hidden="true">●</span><small>Grün</small></button><button class="point-btn point-yellow" title="Gelb" aria-label="Gelb für ${escapeHtml(s.name)}"><span class="point-symbol" aria-hidden="true">●</span><small>Gelb</small></button><button class="point-btn point-red" title="Rot" aria-label="Rot für ${escapeHtml(s.name)}"><span class="point-symbol" aria-hidden="true">●</span><small>Rot</small></button><button class="point-btn point-direct" title="Direkt Grün" aria-label="Direkt Grün für ${escapeHtml(s.name)}"><span class="point-symbol" aria-hidden="true">★</span><small>Stern</small></button><button class="point-btn point-ban" title="Verbot" aria-label="Verbot für ${escapeHtml(s.name)}"><span class="ban-glyph" aria-hidden="true">⊘</span><small>Verbot</small></button><button class="student-profile-shortcut" type="button" aria-label="Notiz, Verlauf und weitere Optionen für ${escapeHtml(s.name)}"><span aria-hidden="true">•••</span><small>Mehr</small></button></div>`;
    row.innerHTML=`<button class="student-point-name student-profile-button" type="button" data-open-student="${escapeHtml(s.id)}" aria-label="Fuchsprofil von ${escapeHtml(s.name)} öffnen"><span class="mini-avatar">${studentPhotoMarkup(s,'mini-photo')}</span><span><strong>${escapeHtml(s.name)}</strong><small>🟢 ${p.green||0} · 🟡 ${p.yellow||0} · 🔴 ${p.red||0}</small><span class="student-measure-list">${measures.length?measures.map(measure=>`<em class="student-measure-slot active">${measure.icon} ${escapeHtml(measure.label)}</em>`).join(''):'<em class="student-measure-slot">✓ keine Maßnahme</em>'}</span></span></button>${compact?compactActions:actions}`;
    row.querySelector('[data-open-student]').onclick=()=>openStudentDetails(s.id);
    const [g,y,r,d,ban]=row.querySelectorAll('.point-btn');
    const act=(type,label)=>{addPoint(s.id,type);renderTeacherList();renderQuickPointsList();renderMobilePersonalHome();if(statusTarget){const el=document.querySelector(statusTarget);if(el)el.textContent=`${label} für ${s.name} gespeichert ✓`;}};
    g.onclick=()=>act('green','Grün');y.onclick=()=>act('yellow','Gelb');r.onclick=()=>act('red','Rot');d.onclick=()=>act('direct','Direkt Grün');if(ban)ban.onclick=()=>openQuickBan(s.id);
    if(compact)row.querySelector('.student-profile-shortcut').onclick=()=>openStudentDetails(s.id);
    list.append(row)
  });
  fitResponsiveStudentGrid(list);
}
function renderTeacherList(){renderPointRows(document.querySelector('#teacherStudentList'))}
function renderQuickPointsList(){renderPointRows(document.querySelector('#quickPointsStudentList'),'#quickPointStatus')}
function renderPointsTeamSelect(){
  const select=document.querySelector('#pointsTeamSelect');if(!select)return;
  const regular=state.teamMembers.map(m=>`<option value="${m.id}">${m.icon} ${escapeHtml(m.profilePrefs?.displayName||m.name)} – ${m.role}</option>`),substitutes=state.substitutes.filter(item=>(item.createdAt||'').slice(0,10)===todayKey()).map(item=>`<option value="sub:${item.id}">🔄 ${escapeHtml(item.name)} – Vertretung</option>`);select.innerHTML=[...regular,...substitutes].join('');
  /* KORREKTUR 2e */
  const fallbackActorId=activeTeamPerson().id;const desired=state.activePointActor||state.activeTeamMember||fallbackActorId;select.value=[...select.options].some(option=>option.value===desired)?desired:fallbackActorId;state.activePointActor=select.value;
  select.onchange=()=>{state.activePointActor=select.value;if(!select.value.startsWith('sub:'))state.activeTeamMember=select.value;saveState();renderTeacherList();const actor=currentPointActor();document.querySelector('#quickPointStatus').textContent=`Aktiv: ${actor.name}`}
}
function currentPointActor(){
  const actorId=state.activePointActor||state.activeTeamMember;if(actorId?.startsWith('sub:')){const substitute=state.substitutes.find(item=>`sub:${item.id}`===actorId);return {id:actorId,name:substitute?.name||'Vertretung',role:'Vertretung'}}const member=state.teamMembers.find(item=>item.id===actorId)||activeTeamPerson();return {id:member.id,name:member.profilePrefs?.displayName||member.name,role:member.role};
}
function recordTreeAchievement(id){
  const student=state.students.find(item=>item.id===id);if(!student||student.active===false)return false;
  if(!state.publishedGreen.includes(id))state.publishedGreen.push(id);
  const awardKey=`${todayKey()}:${id}`;state.leafAwards=state.leafAwards||{};
  if(state.leafAwards[awardKey])return false;
  state.leafAwards[awardKey]=true;state.leafCount+=1;return true;
}
function addPoint(id,type){
  const k=pointKey(id);state.points[k]=state.points[k]||{green:0,yellow:0,red:0,direct:0};state.points[k][type]++;if(type==='yellow'&&state.points[k].yellow>=3)state.points[k].red=1;
  const actor=currentPointActor(),student=state.students.find(item=>item.id===id);state.pointHistory=state.pointHistory||[];state.pointHistory.unshift({id:`p${Date.now()}-${Math.random().toString(36).slice(2,6)}`,studentId:id,studentName:student?.name||'Fuchs',type,actorId:actor.id,actorName:actor.name,actorRole:actor.role,createdAt:new Date().toISOString()});state.pointHistory=state.pointHistory.slice(0,1000);
  const chestWasOpen=rewardChestStatus().open,newLeaf=(type==='green'||type==='direct')?recordTreeAchievement(id):false;saveState();renderPointHistory();
  if(type==='green'||type==='direct'){renderDashboard();launchForestCelebration();const student=state.students.find(item=>item.id===id),chestNow=rewardChestStatus();
    if(chestNow.open&&!chestWasOpen&&state.chestCeremonyStamp!==dayKeyForChest()){state.chestCeremonyStamp=dayKeyForChest();saveState();launchChestCeremony();}
    updatePublishStatus(chestNow.open&&!chestWasOpen?'🎁 Die Schatztruhe ist jetzt geöffnet!':`${student?.name||'Das Fuchs'} ist jetzt im Baum${newLeaf?' · 1 Blatt gesammelt':''} ✓`)}else updatePublishStatus('Gespeichert ✓');
  sendPointsRemote();
}
function renderPointHistory(){
  const list=document.querySelector('#pointHistoryList');if(!list)return;const labels={green:'🟢 Positiv',yellow:'🟡 Ermahnung',red:'🔴 Veto',direct:'⭐ Direkt Grün'},today=(state.pointHistory||[]).filter(entry=>(entry.createdAt||'').slice(0,10)===todayKey());list.innerHTML=today.length?today.map(entry=>`<article><span>${labels[entry.type]||entry.type}</span><div><strong>${escapeHtml(entry.studentName)}</strong><small>${escapeHtml(entry.actorName)} · ${new Date(entry.createdAt).toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'})} Uhr</small></div></article>`).join(''):'<p class="panel-help">Heute wurden noch keine Punkte eingetragen.</p>';
}
function updatePublishStatus(msg){const el=document.querySelector('#publishStatus');if(!el)return;el.textContent=msg|| (state.lastPublishedAt?`Zuletzt veröffentlicht: ${new Date(state.lastPublishedAt).toLocaleString('de-DE')}`:'Noch nicht veröffentlicht.')}

function openKids(){
  const voter=document.querySelector('#voterSelect'),service=document.querySelector('#serviceSelect');
  /* KORREKTUR 3b/3c – Fuchsname, Fuchs-ID und Dienstname sind frei editierbar.
     Der Attributwert value="${s.id}" war zusaetzlich nicht escaped, ein
     Anfuehrungszeichen im Wert hat die Auswahlliste zerlegt. */
  voter.innerHTML=activeStudents().map(s=>`<option value="${escapeHtml(s.id)}">${escapeHtml(s.name)}</option>`).join('\n');service.innerHTML=state.services.map(s=>`<option>${escapeHtml(s)}</option>`).join('\n');
  const task=state.content.taskNote||defaults.content.taskNote,meal=mealForDate(new Date());
  document.querySelector('#kidsTaskTitle').textContent=task.title||'Aufgabe';document.querySelector('#kidsTaskText').textContent=task.task||'Heute ist keine Aufgabe eingetragen.';document.querySelector('#kidsGoalText').textContent=state.content.weeklyGoal.text||'Unser Wochenziel';
  document.querySelector('#kidsMealTitle').textContent=meal.title||'Waldcafé';document.querySelector('#kidsMealText').textContent=meal.detail||'Schaut später noch einmal vorbei.';
  renderServicePlanner();renderKids();renderKidsGoalStatus();voter.onchange=()=>{renderKids();renderKidsGoalStatus()};document.querySelector('#voteFeedback').textContent='';kidsDialog.showModal();
}
function renderKids(){const voter=document.querySelector('#voterSelect').value,grid=document.querySelector('#kidsStudentGrid');grid.innerHTML='';activeStudents().forEach(s=>{const b=document.createElement('button');b.type='button';b.className='kid-select';b.dataset.id=s.id;if(s.id===voter)b.classList.add('disabled');b.innerHTML=`<div class="avatar">${studentPhotoMarkup(s,'kid-photo')}</div><strong>${s.name}</strong>`;b.onclick=()=>b.classList.toggle('selected');grid.append(b)})}
function childGoalVotesForDay(day=weekdayIndex()){const votes=state.content.weeklyGoal.childVotes||{};return votes[`${weekKey()}:${day}`]||{}}
function renderKidsGoalStatus(){const voter=document.querySelector('#voterSelect')?.value,student=state.students.find(item=>item.id===voter),vote=childGoalVotesForDay()[voter],feedback=document.querySelector('#kidsGoalFeedback');if(!feedback)return;feedback.textContent=vote==='green'?`${student?.name||'Deine'} Stimme: Ja, heute geschafft ✓`:vote==='yellow'?`${student?.name||'Deine'} Stimme: Noch nicht ganz ✓`:'Noch keine Stimme abgegeben.'}
function setKidsGoalVote(value){const voter=document.querySelector('#voterSelect')?.value;if(!voter)return;const key=`${weekKey()}:${weekdayIndex()}`;state.content.weeklyGoal.childVotes=state.content.weeklyGoal.childVotes||{};state.content.weeklyGoal.childVotes[key]=state.content.weeklyGoal.childVotes[key]||{};state.content.weeklyGoal.childVotes[key][voter]=value;saveState();renderKidsGoalStatus();renderDashboard();renderWeeklyGoalTeamPanel()}
function calculateGreen(){const result=new Set();for(const student of activeStudents()){const p=state.points[pointKey(student.id)]||{};if(p.red>0)continue;if(p.direct>0||p.green>0){result.add(student.id);continue}let matches=0;for(const service of state.services){const votes=Object.entries(state.votes).filter(([k])=>k.startsWith(`${todayKey()}:${service}:`)).map(([,v])=>v);if(votes.length>=2&&votes.slice(0,2).every(v=>v.includes(student.id)))matches++}if(matches>=2)result.add(student.id)}return [...result]}
function launchForestCelebration(){
  document.body.classList.add('reward-celebration','forest-wow-v80');
  const burst=document.createElement('div');burst.className='reward-burst-v80';
  burst.innerHTML=Array.from({length:24},(_,i)=>`<span style="--i:${i}">${i%4===0?'⭐':i%3===0?'✨':'🍃'}</span>`).join('');
  document.body.append(burst);
  setTimeout(()=>burst.remove(),4200);
  setTimeout(()=>document.body.classList.remove('reward-celebration','forest-wow-v80'),4200);
}
function launchChestCeremony(){
  /* NEXT 13.2 – Große Zeremonie, wenn die Schatztruhe zum ERSTEN Mal aufgeht.
     Nur einmal pro Erreichen (Merker chestCeremonyDone), damit sie nicht bei
     jedem Neuladen wieder losgeht. */
  if(document.querySelector('.chest-ceremony-v132'))return;
  const veil=document.createElement('div');veil.className='chest-ceremony-v132';
  veil.innerHTML=`
    <div class="chest-ceremony-rays"></div>
    <div class="chest-ceremony-core">
      <div class="chest-ceremony-chest">🎁</div>
      <h2>Die Schatztruhe ist offen!</h2>
      <p>Ihr habt es gemeinsam geschafft, Füchse.<br>Zeit für eure Klassenbelohnung! 🎉</p>
      <button type="button" class="chest-ceremony-close">Juhu! 🌟</button>
    </div>
    <div class="chest-ceremony-confetti">${Array.from({length:60},(_,i)=>`<span style="--i:${i};--x:${Math.round(Math.random()*100)};--d:${(2+Math.random()*3).toFixed(2)};--r:${Math.round(Math.random()*360)}">${['🍃','⭐','✨','🎉','🍀','🌟'][i%6]}</span>`).join('')}</div>`;
  document.body.append(veil);
  const close=()=>{veil.classList.add('is-leaving');setTimeout(()=>veil.remove(),500)};
  veil.querySelector('.chest-ceremony-close').onclick=close;
  veil.addEventListener('click',event=>{if(event.target===veil)close()});
  setTimeout(()=>{if(document.body.contains(veil))close()},12000);
  launchForestCelebration();
}
function dayKeyForChest(){return `${todayKey()}|${state.leafCount}`}
function refreshSeasonParticles(){
  const layer=document.querySelector('.season-layer');if(!layer)return;
  const season=currentSeason();
  if(layer.dataset.season===season)return; // nur neu aufbauen, wenn sich die Jahreszeit ändert
  layer.dataset.season=season;
  const config={
    autumn:{glyphs:['🍂','🍁','🍃'],count:14},
    winter:{glyphs:['❄️','❄','•'],count:20},
    spring:{glyphs:['🌸','🌼','🍃'],count:12},
    summer:{glyphs:['✨','🌿','☀️'],count:8}
  }[season];
  layer.innerHTML=Array.from({length:config.count},(_,i)=>{
    const glyph=config.glyphs[i%config.glyphs.length];
    const left=Math.round(Math.random()*100),dur=(7+Math.random()*9).toFixed(1),delay=(Math.random()*10).toFixed(1),drift=(Math.random()*60-30).toFixed(0),scale=(0.7+Math.random()*0.8).toFixed(2);
    return `<span class="season-particle" style="left:${left}%;--dur:${dur}s;--delay:-${delay}s;--drift:${drift}px;--scale:${scale}">${glyph}</span>`;
  }).join('');
}
function publishWall(){state.previousPublishedGreen=[...state.publishedGreen];const result=calculateGreen();state.publishedGreen=result;const newLeaves=result.reduce((count,id)=>count+(recordTreeAchievement(id)?1:0),0);state.lastPublishedAt=new Date().toISOString();state.heroIndex=0;saveState();renderDashboard();launchForestCelebration();updatePublishStatus(`Wall of Fame veröffentlicht${newLeaves?` · ${newLeaves} neue Blätter`:''} ✓`)}
function scheduler(){const d=new Date(),hhmm=d.toTimeString().slice(0,5);if(!state.publishPaused&&hhmm==='14:59'&&d.getSeconds()<3)publishWall();if(['09:30','11:30','13:30'].includes(hhmm)&&d.getSeconds()<3&&state.publishedGreen.length){state.heroIndex=(state.heroIndex+1)%state.publishedGreen.length;saveState();renderDashboard()}}


function applyViewMode(){
  const mode=state.viewMode||'compact';
  document.body.classList.remove('view-compact','view-standard','view-large');
  document.body.classList.add(`view-${mode}`);
  const b=document.querySelector('#viewModeButton');
  if(b)b.textContent=mode==='compact'?'🖥️ Kompakt':mode==='standard'?'🖥️ Standard':'🖥️ Groß';
}
function cycleViewMode(){
  const modes=['compact','standard','large'];
  state.viewMode=modes[(modes.indexOf(state.viewMode||'compact')+1)%modes.length];
  saveState();applyViewMode();
}
function applyMotionPreference(){
  const paused=Boolean(state.motionPaused),button=document.querySelector('#motionToggleButton');
  document.body.classList.toggle('motion-paused',paused);
  if(!button)return;
  button.classList.toggle('is-paused',paused);
  button.setAttribute('aria-pressed',String(paused));
  button.setAttribute('title',paused?'Animationen wieder starten':'Animationen anhalten');
  button.setAttribute('aria-label',paused?'Animationen wieder starten':'Animationen anhalten');
  button.innerHTML=paused?'<span aria-hidden="true">▶</span>':'<span aria-hidden="true">Ⅱ</span>';
}
function toggleMotionPreference(){
  state.motionPaused=!state.motionPaused;
  if(state.motionPaused){
    document.body.classList.remove('reward-celebration','forest-wow-v80');
    document.querySelectorAll('.reward-burst-v80').forEach(element=>element.remove());
  }
  saveState();applyMotionPreference();
}
document.querySelector('#addDrawerButton').onclick=addDrawer;
document.querySelector('#addMaterialButton').onclick=addMaterial;
document.querySelector('#addStudentButton').onclick=addStudent;
document.querySelector('#changeTeamPersonButton').onclick=showTeamSelection;
document.querySelector('#backToTeamSelectionFromSubstitute').onclick=showTeamSelection;
document.querySelector('#addSubstituteButton').onclick=addSubstitute;
document.querySelector('#substituteNameInput').onkeydown=event=>{if(event.key==='Enter'){event.preventDefault();addSubstitute()}};
document.querySelector('#savePersonalWorkspaceButton').onclick=savePersonalWorkspace;
/* NEXT 13.7 – Anzeigename, Symbol, Farbe und die Anzeige-Haken speichern sich
   jetzt SOFORT bei jeder Änderung. Vorher galt alles erst nach Druck auf
   „Meine Startseite speichern“ ganz unten – wer das übersah, verlor die
   Einstellung wieder. Der Speichern-Knopf bleibt zusätzlich bestehen. */
['#personalDisplayNameInput','#personalIconInput','#personalAccentInput','#showMaterialsPanel','#showGoalPanel','#showPublicationPanel','#materialsPinInput'].forEach(selector=>{
  const field=document.querySelector(selector);if(!field)return;
  const commit=()=>{
    const member=activeTeamPerson();if(!member)return;
    const pinRaw=(document.querySelector('#materialsPinInput')?.value||'').replace(/\D/g,'').slice(0,4);
    if(document.querySelector('#materialsPinInput')&&document.querySelector('#materialsPinInput').value!==pinRaw)document.querySelector('#materialsPinInput').value=pinRaw;
    member.profilePrefs={...member.profilePrefs,
      displayName:(document.querySelector('#personalDisplayNameInput')?.value||member.name).trim()||member.name,
      icon:(document.querySelector('#personalIconInput')?.value||member.icon).trim()||member.icon,
      accent:document.querySelector('#personalAccentInput')?.value||'#315f28',
      showMaterials:!!document.querySelector('#showMaterialsPanel')?.checked,
      showGoal:!!document.querySelector('#showGoalPanel')?.checked,
      showPublication:!!document.querySelector('#showPublicationPanel')?.checked,
      materialsPin:pinRaw};
    saveState();renderActiveTeamWorkspace();
    const status=document.querySelector('#personalWorkspaceStatus');if(status)status.textContent='Gespeichert ✓';
    const pinStatus=document.querySelector('#materialsPinStatus');
    if(pinStatus)pinStatus.textContent=pinRaw?(pinRaw.length===4?'Code aktiv ✓':'Code braucht 4 Ziffern'):'Kein Code – Fundus & Vorbereitung ist frei zugänglich.';
  };
  field.addEventListener('change',commit);
  if(field.type==='text'||field.type==='color')field.addEventListener('input',commit);
});
document.querySelector('#materialsPinForgetDevice')?.addEventListener('click',()=>{
  const person=activeWorkspacePerson();forgetThisDeviceForMaterials(person.id);
  const pinStatus=document.querySelector('#materialsPinStatus');if(pinStatus)pinStatus.textContent='Dieses Gerät fragt beim nächsten Mal wieder nach dem Code ✓';
});
document.querySelector('#materialsPinDialog')?.addEventListener('keydown',event=>{
  if(/^[0-9]$/.test(event.key)){
    event.preventDefault();
    if(materialsPinEntry.length<4){materialsPinEntry+=event.key;renderMaterialsPinDots();if(materialsPinEntry.length===4)checkMaterialsPinEntry()}
  } else if(event.key==='Backspace'){
    event.preventDefault();materialsPinEntry=materialsPinEntry.slice(0,-1);renderMaterialsPinDots();
  }
});
document.querySelector('#materialsPinDialog')?.addEventListener('close',()=>{materialsPinEntry='';materialsPinSuccessCallback=null});
document.querySelector('#saveTeachingToolButton').onclick=saveTeachingTool;
document.querySelector('#settingsButton').onclick=openSettings;
document.querySelector('#motionToggleButton')?.addEventListener('click',toggleMotionPreference);
document.querySelector('#addInfoLine')?.addEventListener('click',addInfoLine);
document.querySelector('#saveMealDay')?.addEventListener('click',()=>saveSelectedMealDay(true));
document.querySelector('#saveMealFavorite')?.addEventListener('click',saveMealFavorite);
document.querySelector('#saveTaskFavorite')?.addEventListener('click',saveTaskFavorite);
['taskNoteTitleInput','taskNoteTaskInput','taskNoteHintInput','taskNoteColorInput'].forEach(id=>document.querySelector(`#${id}`)?.addEventListener('input',renderTaskPreview));
document.querySelector('#mealMonthInput')?.addEventListener('change',event=>{const date=new Date(`${event.target.value}-01T12:00:00`);while(date.getDay()===0||date.getDay()===6)date.setDate(date.getDate()+1);mealSelectedDateKey=dateKeyLocal(date);renderMealPlanner()});
document.querySelectorAll('[data-settings-target]').forEach(button=>button.onclick=()=>showSettingsSection(button.dataset.settingsTarget,button.dataset.dailyCard||''));
document.querySelector('#settingsHomeBack')?.addEventListener('click',showSettingsHome);
/* 15.25 – Kachel „Mein Unterricht“ in den persoenlichen Einstellungen:
   schliesst den Einstellungsdialog und oeffnet Fundus & Vorbereitung. */
document.querySelector('#settingsOpenMaterials')?.addEventListener('click',()=>{
  try{settingsDialog.close()}catch(err){}
  const memberId=state.activeTeamMember||state.teamMembers?.[0]?.id,dlg=document.querySelector('#teamDialog');
  if(!memberId){document.querySelector('#modeButton')?.click();return}
  if(dlg&&!dlg.open){try{dlg.showModal()}catch(err){}}
  enterTeamWorkspace(memberId);selectTeamPage('materials');
});
document.querySelectorAll('.settings-jump-nav a').forEach(link=>link.onclick=openSettingsSection);
document.querySelector('#weekdaySelect').onchange=()=>{collectWeekdayEditor();renderWeekScheduleEditor()};
document.querySelector('#overrideDate').onchange=()=>{renderOverrideEditor();renderOverrideRange()};
document.querySelectorAll('[data-schedule-mode]').forEach(button=>button.addEventListener('click',()=>setScheduleSettingsMode(button.dataset.scheduleMode)));
document.querySelector('#saveSettings').onclick=saveSettings;document.querySelector('#saveTodayQuick').onclick=saveSettings;document.querySelector('#resetSettings').onclick=resetSettings;
document.querySelector('#mobileBoardSubject')?.addEventListener('change',renderMobileBoardController);
document.querySelector('#mobileBoardLesson')?.addEventListener('change',renderMobileBoardController);
document.querySelector('#mobilePublishBoard')?.addEventListener('click',publishMobileBoard);
document.querySelector('#mobileClearBoard')?.addEventListener('click',()=>publishBoardPresentation(null));
document.querySelector('#resetPointsButton')?.addEventListener('click',resetAllPointsEverywhere);
document.querySelector('#testBoardSync')?.addEventListener('click',()=>{state.remoteSync={...state.remoteSync,enabled:!!document.querySelector('#boardSyncEnabled')?.checked,url:(document.querySelector('#boardSyncUrl')?.value||'').trim(),classId:(document.querySelector('#boardSyncClassId')?.value||'').trim()||'fuchsklasse-2026',key:document.querySelector('#boardSyncKey')?.value||''};saveState();loadBoardPresentationRemote({silent:false});loadPointsRemote();sendPointsRemote()});
/* NEXT 15.49 – Auskunft ueber den Fotospeicher. Beantwortet die Frage
   „warum sehe ich keine Gesichter" ohne Ratespiel. */
document.querySelector('#photoDiagnoseButton')?.addEventListener('click',async()=>{
  const ziel=document.querySelector('#photoDiagnoseResult');
  if(!ziel)return;
  ziel.textContent='Fotospeicher wird geprüft …';
  try{
    const d=await photoStore.diagnose(state.students);
    const zeilen=[
      `Fotodatenbank des Browsers: ${d.datenbank}`,
      `Kinder in der Liste: ${d.kinder}`,
      `Fotos anzeigbar: ${d.anzeigbar} von ${d.kinder}`,
      `davon in der Datenbank: ${d.verweise} · als Bild im Speicher: ${d.bilder} · als Dateipfad: ${d.pfade} · ohne Foto: ${d.ohne}`,
      d.platz?`Belegter Platz: ${d.platz.usedMb} MB von ${d.platz.quotaMb} MB`:'Belegter Platz: nicht abfragbar'
    ];
    if(d.anzeigbar<d.kinder-d.ohne){
      zeilen.push(d.datenbank==='blockiert'
        ?'→ Die Fotodatenbank ist blockiert. Bitte im Browser für DigiBoard „Website-Daten erlauben" einschalten und den privaten Modus verlassen.'
        :'→ Einige Fotos verweisen auf ein anderes Gerät. Dort ein neues Backup erzeugen und hier laden.');
    }else if(d.anzeigbar){
      zeilen.push('→ Alles in Ordnung.');
    }
    ziel.textContent=zeilen.join('\n');
    console.info('DigiBoard Fotospeicher',d);
  }catch(error){
    console.error('Fotoprüfung fehlgeschlagen',error);
    ziel.textContent='Der Fotospeicher konnte nicht geprüft werden.';
  }
});

const exportDigiBoardBackup=document.querySelector('#exportDigiBoardBackup'),importDigiBoardBackup=document.querySelector('#importDigiBoardBackup'),digiBoardBackupFile=document.querySelector('#digiBoardBackupFile');if(exportDigiBoardBackup)exportDigiBoardBackup.onclick=exportDigiBoardBackupFile;if(importDigiBoardBackup)importDigiBoardBackup.onclick=()=>digiBoardBackupFile?.click();if(digiBoardBackupFile)digiBoardBackupFile.onchange=()=>{importDigiBoardBackupFile(digiBoardBackupFile.files?.[0]);digiBoardBackupFile.value=''};
const exportPersonalProfile=document.querySelector('#exportPersonalProfile'),importPersonalProfile=document.querySelector('#importPersonalProfile'),personalProfileFile=document.querySelector('#personalProfileFile');if(exportPersonalProfile)exportPersonalProfile.onclick=exportPersonalProfileFile;if(importPersonalProfile)importPersonalProfile.onclick=()=>personalProfileFile?.click();if(personalProfileFile)personalProfileFile.onchange=()=>{importPersonalProfileFile(personalProfileFile.files?.[0]);personalProfileFile.value=''};
const personalSettingsBack=document.querySelector('#personalSettingsBack');if(personalSettingsBack)personalSettingsBack.onclick=()=>{
  /* NEXT 15.3 – Auf dem Handy gibt es „Meine Übersicht“ als eigenständiges
     Ziel nicht mehr (siehe openTeam) – „Zurück“ schließt dort direkt den
     Dialog, statt zur (nicht mehr vorhandenen) Übersicht zu springen. */
  if(window.matchMedia('(max-width:700px)').matches){teamDialog.close();return}
  selectTeamPage('overview');
};
document.querySelector('#layoutReset').onclick=()=>{settingsDialog.close();toggleLayoutEditing()};document.querySelector('#layoutReset').ondblclick=resetLayout;document.querySelector('#modeButton').onclick=openTeam;document.querySelector('#openKidsDock').onclick=openKids;
document.querySelector('#drawWeeklyService').onclick=drawWeeklyService;document.querySelector('#clearWeeklyServices').onclick=clearWeeklyServices;document.querySelector('#weeklyServiceSelect').onchange=renderServicePlanner;
document.querySelector('#kidsDrawWeeklyService').onclick=drawKidsWeeklyService;document.querySelector('#kidsWeeklyServiceSelect').onchange=renderServicePlanner;document.querySelector('#rewardChestMode').onchange=updateRewardChestSettingsVisibility;
document.querySelectorAll('[data-focus-widget]').forEach(b=>b.onclick=()=>focusWidget(b.dataset.focusWidget));
document.querySelectorAll('.forest-tool-belt-v1521>button').forEach(button=>button.addEventListener('click',()=>{
  button.classList.remove('is-forest-pressed');
  requestAnimationFrame(()=>button.classList.add('is-forest-pressed'));
  setTimeout(()=>button.classList.remove('is-forest-pressed'),500);
}));
document.querySelector('#forestToolBelt')?.addEventListener('keydown',event=>{
  if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
  const buttons=[...event.currentTarget.querySelectorAll(':scope>button')].filter(button=>!button.hidden);
  const current=event.target.closest('button'),index=buttons.indexOf(current);if(index<0||!buttons.length)return;
  event.preventDefault();
  const nextIndex=event.key==='Home'?0:event.key==='End'?buttons.length-1:event.key==='ArrowRight'?(index+1)%buttons.length:(index-1+buttons.length)%buttons.length;
  buttons[nextIndex].focus();
});
document.addEventListener('keydown',event=>{
  const number=event.code?.match(/^Digit([1-8])$/)?.[1]||(/^[1-8]$/.test(event.key)?event.key:'');
  if(!event.altKey||event.ctrlKey||event.metaKey||event.shiftKey||!number)return;
  if(event.target instanceof HTMLElement&&(event.target.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(event.target.tagName)))return;
  const button=document.querySelector(`.forest-tool-belt-v1521>button[data-forest-shortcut="${number}"]`);
  if(!button||button.hidden)return;
  event.preventDefault();button.focus();button.click();
});
document.querySelectorAll('[data-forest-secret]').forEach(button=>{
  const foundToday=state.ui?.forestSecrets?.[todayKey()]||[];
  button.classList.toggle('is-found',foundToday.includes(button.dataset.forestSecret));
  button.addEventListener('click',()=>{
    const secrets={
      den:['🦊','Ein geheimer Fuchsbau!','Vielleicht schläft hier unser schlauster Waldfuchs.'],
      house:['🐦','Besuch im Vogelhaus','Ein kleiner Waldvogel sammelt heute neue Ideen.'],
      lantern:['🏮','Die Lernlaterne leuchtet','Sie erinnert uns: Jeder neue Gedanke macht den Weg heller.']
    };
    const [icon,title,text]=secrets[button.dataset.forestSecret]||['✨','Waldgeheimnis','Gut entdeckt!'];
    document.querySelector('.forest-secret-toast-v1523')?.remove();
    const toast=document.createElement('div');toast.className='forest-secret-toast-v1523';
    toast.innerHTML=`<span>${icon}</span><div><strong>${title}</strong><small>${text}</small></div>`;
    document.querySelector('#app')?.append(toast);button.classList.add('is-found');
    state.ui=state.ui||{};
    state.ui.forestSecrets=state.ui.forestSecrets||{};
    const key=todayKey(),found=state.ui.forestSecrets[key]||[];
    if(!found.includes(button.dataset.forestSecret))found.push(button.dataset.forestSecret);
    state.ui.forestSecrets[key]=found;saveState();
    updateForestDiscoveryCount();
    setTimeout(()=>toast.remove(),4200);
  });
});
document.querySelector('#wallFocusBackdrop')?.addEventListener('click',()=>setWallExpanded(false));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&wallMount?.classList.contains('wall-expanded')){event.preventDefault();setWallExpanded(false)}});
document.querySelector('#submitVote').onclick=()=>{const voter=document.querySelector('#voterSelect').value,service=document.querySelector('#serviceSelect').value,selected=[...document.querySelectorAll('.kid-select.selected')].map(x=>x.dataset.id);state.votes[`${todayKey()}:${service}:${voter}`]=selected;saveState();document.querySelector('#voteFeedback').textContent='Danke, deine Auswahl wurde gespeichert.';setTimeout(()=>kidsDialog.close(),1000)};
document.querySelector('#publishNow').onclick=publishWall;document.querySelector('#pausePublish').onclick=()=>{state.publishPaused=!state.publishPaused;saveState();updatePublishStatus(state.publishPaused?'Veröffentlichung heute angehalten.':'Automatische Veröffentlichung wieder aktiv.')};document.querySelector('#restorePublish').onclick=()=>{state.publishedGreen=[...state.previousPublishedGreen];saveState();renderDashboard();updatePublishStatus('Letzte Veröffentlichung wiederhergestellt.')};


// DigiBoard 1.3 – Wochenziel, mehrsprachige Begrüßung und Aufräummusik
const MORNING_GREETINGS=[
  {lang:'Deutsch',code:'de',voice:'de-DE',phrases:{morning:'Guten Morgen',midday:'Guten Tag',afternoon:'Schönen Nachmittag',evening:'Guten Abend'}},
  {lang:'Englisch',code:'en',voice:'en-GB',phrases:{morning:'Good morning',midday:'Hello everyone',afternoon:'Good afternoon',evening:'Good evening'}},
  {lang:'Französisch',code:'fr',voice:'fr-FR',phrases:{morning:'Bonjour',midday:'Bonjour à tous',afternoon:'Bon après-midi',evening:'Bonsoir'}},
  {lang:'Spanisch',code:'es',voice:'es-ES',phrases:{morning:'Buenos días',midday:'Buenas tardes',afternoon:'Buenas tardes',evening:'Buenas noches'}},
  {lang:'Italienisch',code:'it',voice:'it-IT',phrases:{morning:'Buongiorno',midday:'Buongiorno a tutti',afternoon:'Buon pomeriggio',evening:'Buonasera'}},
  {lang:'Türkisch',code:'tr',voice:'tr-TR',phrases:{morning:'Günaydın',midday:'İyi günler',afternoon:'İyi günler',evening:'İyi akşamlar'}},
  {lang:'Arabisch',code:'ar',voice:'ar-SA',phrases:{morning:'صباح الخير',midday:'مرحبًا بالجميع',afternoon:'مساء الخير',evening:'مساء الخير'}},
  {lang:'Niederländisch',code:'nl',voice:'nl-NL',phrases:{morning:'Goedemorgen',midday:'Goedendag',afternoon:'Goedemiddag',evening:'Goedenavond'}},
  {lang:'Polnisch',code:'pl',voice:'pl-PL',phrases:{morning:'Dzień dobry',midday:'Dzień dobry wszystkim',afternoon:'Miłego popołudnia',evening:'Dobry wieczór'}},
  {lang:'Ukrainisch',code:'uk',voice:'uk-UA',phrases:{morning:'Добрий ранок',midday:'Добрий день',afternoon:'Добрий день',evening:'Добрий вечір'}},
  {lang:'Griechisch',code:'el',voice:'el-GR',phrases:{morning:'Καλημέρα',midday:'Καλημέρα σε όλους',afternoon:'Καλό απόγευμα',evening:'Καλησπέρα'}},
  {lang:'Portugiesisch',code:'pt',voice:'pt-PT',phrases:{morning:'Bom dia',midday:'Boa tarde',afternoon:'Boa tarde',evening:'Boa noite'}}
];
function weekKey(date=new Date()){
  const d=new Date(date);d.setHours(12,0,0,0);const day=(d.getDay()+6)%7;d.setDate(d.getDate()-day);return dateKeyLocal(d);
}
function weekdayIndex(date=new Date()){const d=date.getDay();return d>=1&&d<=5?d:1}
function goalVotesForDay(day=weekdayIndex()){
  const wk=weekKey(),votes=state.content.weeklyGoal.votes||{};return votes[`${wk}:${day}`]||{};
}
function goalDayResult(day){
  const values=Object.values(goalVotesForDay(day)),childValues=Object.values(childGoalVotesForDay(day));const green=values.filter(v=>v==='green').length,childGreen=childValues.filter(v=>v==='green').length;
  if(green>0&&childGreen>0)return 'achieved';
  if(values.length===0&&childValues.length===0)return 'open';
  return 'pending';
}
function renderWeeklyGoal(host){
  const goal=state.content.weeklyGoal;const labels=['Mo','Di','Mi','Do','Fr'];let achieved=0;
  const days=labels.map((label,i)=>{const result=goalDayResult(i+1);if(result==='achieved')achieved++;const icon=result==='achieved'?'✓':result==='failed'?'✕':result==='pending'?'…':'○';return `<div class="goal-day ${result}"><strong>${label}</strong><span>${icon}</span></div>`}).join('');
  const required=goal.requiredDays||4;const weekStatus=achieved>=required?'Wochenziel geschafft!':'Wir arbeiten gemeinsam daran.';
  host.innerHTML=`<div class="weekly-goal-widget"><p class="goal-label">Diese Woche:</p><h3>${escapeHtml(goal.text||'Noch kein Wochenziel eingetragen')}</h3><div class="goal-days">${days}</div><p class="goal-summary"><strong>${achieved} von 5 Tagen</strong> · ${weekStatus}</p></div>`;
}
function renderWeeklyGoalTeamPanel(){
  const text=document.querySelector('#weeklyGoalTeamText'),badge=document.querySelector('#weeklyGoalTodayBadge');if(!text||!badge)return;
  text.textContent=state.content.weeklyGoal.text||'Noch kein Wochenziel eingetragen.';
  const active=currentPointActor().id,votes=goalVotesForDay(),vote=votes[active],children=Object.values(childGoalVotesForDay()),childGreen=children.filter(value=>value==='green').length;
  badge.textContent=vote==='green'?'✓ Bestätigt':'Noch offen';
  badge.className='editor-badge '+(vote==='green'?'goal-good':'');
  const button=document.querySelector('#weeklyGoalGreen');if(button)button.textContent=vote==='green'?'✓ Von mir bestätigt':'✓ Als Erwachsener bestätigen';
  const help=document.querySelector('#weeklyGoalDecisionHelp');if(help)help.textContent=childGreen>0?(vote==='green'?'✓ Fuchsstimme und Erwachsenenbestätigung liegen vor. Der Tag ist erreicht.':`🟢 ${childGreen} grüne Fuchsstimme${childGreen===1?'':'n'} – jetzt noch als Erwachsener bestätigen.`):'Noch keine grüne Fuchsstimme. Ohne Fuchsstimme zählt der Tag nicht als erreicht.';
}
function setWeeklyGoalVote(value){
  const day=weekdayIndex();const wk=weekKey();const key=`${wk}:${day}`;state.content.weeklyGoal.votes[key]=state.content.weeklyGoal.votes[key]||{};
  state.content.weeklyGoal.votes[key][currentPointActor().id]=value;saveState();renderWeeklyGoalTeamPanel();renderDashboard();
}
function weeklyGreetingIndex(){
  /* Das Montagsdatum wird in fortlaufende Wochen umgerechnet. So folgt auf
     jede Kalenderwoche zuverlässig die nächste Sprache. */
  const [year,month,day]=weekKey().split('-').map(Number),mondayUtc=Date.UTC(year,month-1,day);
  return Math.abs(Math.floor(mondayUtc/604800000))%MORNING_GREETINGS.length;
}
let greetingIndex=weeklyGreetingIndex();
let greetingManuallyChanged=false;
let greetingWeekStamp=weekKey();
function calendarWeekNumber(date=new Date()){
  const d=new Date(Date.UTC(date.getFullYear(),date.getMonth(),date.getDate()));
  d.setUTCDate(d.getUTCDate()+4-(d.getUTCDay()||7));
  const yearStart=new Date(Date.UTC(d.getUTCFullYear(),0,1));
  return Math.ceil((((d-yearStart)/86400000)+1)/7);
}
function renderMorningGreeting(){
  if(!greetingManuallyChanged&&greetingWeekStamp!==weekKey()){greetingWeekStamp=weekKey();greetingIndex=weeklyGreetingIndex()}
  const item=MORNING_GREETINGS[greetingIndex%MORNING_GREETINGS.length],moment=greetingMoment(),text=item.phrases[moment.key]||item.phrases.midday;const label=document.querySelector('#morningLanguageLabel');
  if(label){label.lang=item.code;label.dir=item.code==='ar'?'rtl':'ltr';label.innerHTML=`<small>${greetingManuallyChanged?'AUSGEWÄHLTE SPRACHE':`WOCHENSPRACHE · KW ${calendarWeekNumber()}`}</small><strong>${escapeHtml(text)}</strong><em>${escapeHtml(item.lang)} · ${escapeHtml(moment.label)}</em>`}
}
function speakMorningGreeting(){
  const item=MORNING_GREETINGS[greetingIndex%MORNING_GREETINGS.length],moment=greetingMoment(),text=item.phrases[moment.key]||item.phrases.midday;if(!('speechSynthesis'in window)){alert('Die Sprachausgabe wird auf diesem Gerät nicht unterstützt.');return}
  speechSynthesis.cancel();const utter=new SpeechSynthesisUtterance(text);utter.lang=item.voice;utter.rate=.82;speechSynthesis.speak(utter);
}
function nextMorningGreeting(){greetingIndex=(greetingIndex+1)%MORNING_GREETINGS.length;greetingManuallyChanged=true;renderMorningGreeting()}

let cleanupTimer=null,cleanupRemaining=0,cleanupTotal=0,cleanupAudioCtx=null,cleanupBeatTimer=null;
function formatCountdown(sec){const m=Math.floor(sec/60),s=sec%60;return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`}
function openCleanup(){cleanupRemaining=state.content.cleanup.duration||90;cleanupTotal=cleanupRemaining;updateCleanupUI();document.querySelector('#cleanupDialog').showModal()}
function updateCleanupUI(){
  const c=document.querySelector('#cleanupCountdown'),bar=document.querySelector('#cleanupProgressBar');if(c)c.textContent=formatCountdown(cleanupRemaining);if(bar)bar.style.width=`${cleanupTotal?((cleanupTotal-cleanupRemaining)/cleanupTotal)*100:0}%`;
  updateForestToolBelt();
}
function syntheticBeat(){
  try{cleanupAudioCtx=cleanupAudioCtx||new (window.AudioContext||window.webkitAudioContext)();const o=cleanupAudioCtx.createOscillator(),g=cleanupAudioCtx.createGain();o.frequency.value=660;g.gain.setValueAtTime(.06,cleanupAudioCtx.currentTime);g.gain.exponentialRampToValueAtTime(.001,cleanupAudioCtx.currentTime+.12);o.connect(g).connect(cleanupAudioCtx.destination);o.start();o.stop(cleanupAudioCtx.currentTime+.13)}catch{}
}
function stopCleanup(){
  clearInterval(cleanupTimer);clearInterval(cleanupBeatTimer);cleanupTimer=null;cleanupBeatTimer=null;const audio=document.querySelector('#cleanupAudio');if(audio){audio.pause();audio.currentTime=0}const message=document.querySelector('#cleanupMessage');if(message)message.textContent='Gestoppt.';updateCleanupDock();
}
function startCleanup(){
  stopCleanup();cleanupRemaining=state.content.cleanup.duration||90;cleanupTotal=cleanupRemaining;const audio=document.querySelector('#cleanupAudio');const url=state.content.cleanup.audioUrl||'';
  if(url){audio.src=url;audio.play().catch(()=>{});}else{syntheticBeat();cleanupBeatTimer=setInterval(syntheticBeat,1000)}
  const message=document.querySelector('#cleanupMessage');if(message)message.textContent='Aufräumen – wenn die Musik endet, ist der Tisch leer!';updateCleanupUI();updateCleanupDock();
  cleanupTimer=setInterval(()=>{cleanupRemaining--;updateCleanupUI();if(cleanupRemaining<=0){stopCleanup();const done=document.querySelector('#cleanupMessage'),countdown=document.querySelector('#cleanupCountdown');if(done)done.textContent='Fertig! Jetzt sind alle Tische leer. ✓';if(countdown)countdown.textContent='FERTIG';}},1000)
}
function updateCleanupDock(){
  const button=document.querySelector('#cleanupMusicDock');if(!button)return;const running=!!cleanupTimer;
  button.classList.toggle('is-playing',running);button.setAttribute('aria-pressed',String(running));
  const icon=button.querySelector('.dock-icon'),label=button.querySelector('.dock-label');
  if(icon)icon.textContent=running?'⏹️':'🎵';
  if(label)label.textContent=running?'Musik stoppen':'Aufräumen';
  updateForestToolBelt();
}
function toggleCleanupMusic(){
  const dialog=document.querySelector('#cleanupDialog');if(dialog?.open)dialog.close();
  if(cleanupTimer)stopCleanup();else startCleanup();
}

let classTimerInterval=null,classTimerDuration=300,classTimerRemaining=300,classTimerDeadline=0,classTimerRunning=false;
function classTimerElements(){
  return {
    dialog:document.querySelector('#classTimerDialog'),display:document.querySelector('#classTimerDisplay'),
    countdown:document.querySelector('#classTimerCountdown'),state:document.querySelector('#classTimerState'),
    message:document.querySelector('#classTimerMessage'),minutes:document.querySelector('#classTimerMinutes'),
    start:document.querySelector('#classTimerStart'),pause:document.querySelector('#classTimerPause')
  };
}
function updateClassTimerUI(){
  const el=classTimerElements(),finished=classTimerRemaining<=0,paused=!classTimerRunning&&classTimerRemaining<classTimerDuration&&!finished;
  if(el.countdown)el.countdown.textContent=formatCountdown(Math.max(0,classTimerRemaining));
  if(el.state)el.state.textContent=finished?'ZEIT VORBEI':classTimerRunning?'LÄUFT':paused?'PAUSE':'BEREIT';
  if(el.message)el.message.textContent=finished?'Die Arbeitszeit ist beendet.':classTimerRunning?'Konzentriert weiterarbeiten …':paused?'Der Timer wartet auf euch.':'Wie viel Zeit braucht ihr?';
  if(el.display){
    const elapsed=classTimerDuration?classTimerDuration-classTimerRemaining:0;
    el.display.style.setProperty('--timer-progress',`${Math.max(0,Math.min(360,elapsed/classTimerDuration*360))}deg`);
    el.display.classList.toggle('is-running',classTimerRunning);
    el.display.classList.toggle('is-paused',paused);
    el.display.classList.toggle('is-finished',finished);
  }
  if(el.start){el.start.disabled=classTimerRunning;el.start.textContent=paused?'▶ Weiter':'▶ Start'}
  if(el.pause){el.pause.disabled=finished||(!classTimerRunning&&!paused);el.pause.textContent=classTimerRunning?'Ⅱ Pause':'▶ Weiter'}
}
function setClassTimerMinutes(value){
  clearInterval(classTimerInterval);classTimerInterval=null;classTimerRunning=false;
  const minutes=Math.max(1,Math.min(120,Number.parseInt(value,10)||5));
  classTimerDuration=minutes*60;classTimerRemaining=classTimerDuration;
  const el=classTimerElements();if(el.minutes)el.minutes.value=minutes;
  document.querySelectorAll('[data-timer-minutes]').forEach(button=>button.classList.toggle('active',Number(button.dataset.timerMinutes)===minutes));
  updateClassTimerUI();
}
function openClassTimer(){
  const el=classTimerElements();updateClassTimerUI();
  if(el.dialog&&!el.dialog.open)el.dialog.showModal();
}
function tickClassTimer(){
  classTimerRemaining=Math.max(0,Math.ceil((classTimerDeadline-Date.now())/1000));
  if(classTimerRemaining<=0){
    clearInterval(classTimerInterval);classTimerInterval=null;classTimerRunning=false;
    syntheticBeat();setTimeout(syntheticBeat,230);setTimeout(syntheticBeat,460);
  }
  updateClassTimerUI();
}
function startClassTimer(){
  if(classTimerRunning)return;
  if(classTimerRemaining<=0)setClassTimerMinutes(classTimerElements().minutes?.value||5);
  classTimerRunning=true;classTimerDeadline=Date.now()+classTimerRemaining*1000;
  clearInterval(classTimerInterval);classTimerInterval=setInterval(tickClassTimer,200);updateClassTimerUI();
}
function pauseClassTimer(){
  if(!classTimerRunning){if(classTimerRemaining>0&&classTimerRemaining<classTimerDuration)startClassTimer();return}
  classTimerRemaining=Math.max(0,Math.ceil((classTimerDeadline-Date.now())/1000));
  clearInterval(classTimerInterval);classTimerInterval=null;classTimerRunning=false;updateClassTimerUI();
}
function resetClassTimer(){setClassTimerMinutes(classTimerElements().minutes?.value||5)}

setInterval(updateClock,1000);setInterval(scheduler,1000);setInterval(updateHero,60000);applyViewMode();applyMotionPreference();updateHero();renderDashboard();renderMobilePersonalHome();renderTeachingToolButton();
boardChannel?.addEventListener('message',event=>{if(event.data?.type!=='presentation')return;state.boardPresentation=event.data.presentation||null;saveState();renderBoardPresentation();renderMobileBoardController()});
window.addEventListener('storage',event=>{if(event.key!==STORAGE_KEY||!event.newValue)return;try{const incoming=JSON.parse(event.newValue);if(JSON.stringify(incoming.boardPresentation||null)===JSON.stringify(state.boardPresentation||null))return;state.boardPresentation=incoming.boardPresentation||null;renderBoardPresentation();renderMobileBoardController()}catch{}});
setInterval(()=>loadBoardPresentationRemote({silent:true}),5000);
setInterval(()=>loadPointsRemote(),4000);



const seasonPreviewSelect=document.querySelector('#seasonPreviewSelect');if(seasonPreviewSelect)seasonPreviewSelect.onchange=()=>{const v=seasonPreviewSelect.value;state.seasonPreview=v==='auto'?null:v;saveState();updateSeason()};
['dailyQuoteMode','dailyQuoteFixed','dailyQuoteCustom'].forEach(id=>document.querySelector(`#${id}`)?.addEventListener('input',updateDailyQuoteSettings));

// DigiBoard 1.1 – schneller Punktzugriff
const openPointsDock=document.querySelector('#openPointsDock');if(openPointsDock)openPointsDock.onclick=openPoints;
const openPointsFromTeam=document.querySelector('#openPointsFromTeam');if(openPointsFromTeam)openPointsFromTeam.onclick=()=>{teamDialog.close();openPoints()};
const teacherStudentSearch=document.querySelector('#teacherStudentSearch');if(teacherStudentSearch)teacherStudentSearch.oninput=renderTeacherList;
document.querySelectorAll('[data-team-page]').forEach(button=>button.onclick=()=>selectTeamPage(button.dataset.teamPage));
document.querySelectorAll('[data-cockpit-more]').forEach(button=>button.onclick=()=>selectTeamPage(button.dataset.cockpitMore));
document.querySelectorAll('[data-mobile-personal]').forEach(button=>button.onclick=()=>openMobilePersonalPage(button.dataset.mobilePersonal));
document.querySelector('#materialAddToggle')?.addEventListener('click',()=>{
  const card=document.querySelector('.material-add-card');if(!card)return;
  const open=card.classList.toggle('is-open');
  document.querySelector('#materialAddToggle')?.setAttribute('aria-expanded',String(open));
  if(open)setTimeout(()=>document.querySelector('#materialTitleInput')?.focus(),120);
});
document.querySelector('#mobilePointsClose')?.addEventListener('click',()=>document.querySelector('#mobilePointsDialog')?.close());
document.querySelector('#mobileChildSearch')?.addEventListener('input',()=>renderMobilePoints());
document.querySelector('#mobilePointsLayout')?.addEventListener('click',()=>{state.ui=state.ui||{};state.ui.mobilePointsLayout=state.ui.mobilePointsLayout==='rows'?'cards':'rows';saveState();renderMobilePoints();mobilePointsFeedback(state.ui.mobilePointsLayout==='rows'?'Darstellung: Zeilen':'Darstellung: Kacheln')});
document.querySelector('#mobileUndoPoint')?.addEventListener('click',()=>{
  if(!mobileSelectedStudentId)return;
  const student=state.students.find(item=>item.id===mobileSelectedStudentId);
  const feedback=document.querySelector('#mobileChildFeedback');
  if(undoLastPoint(mobileSelectedStudentId)){openMobileChildActions(mobileSelectedStudentId);const f=document.querySelector('#mobileChildFeedback');if(f)f.textContent=`↩︎ Letzter Eintrag zurückgenommen ✓`}
  else if(feedback)feedback.textContent=`Heute gibt es für ${student?.name||'dieses Fuchs'} nichts zurückzunehmen.`;
});
document.querySelector('#mobileResetChild')?.addEventListener('click',()=>{
  if(!mobileSelectedStudentId)return;
  resetChildToday(mobileSelectedStudentId);openMobileChildActions(mobileSelectedStudentId);
  const f=document.querySelector('#mobileChildFeedback');if(f)f.textContent='↺ Heute wieder bei 0 ✓';
});
document.querySelector('#mobileActionClose')?.addEventListener('click',()=>document.querySelector('#mobileChildActionsDialog')?.close());
document.querySelectorAll('[data-mobile-point]').forEach(button=>button.onclick=()=>mobileChildPoint(button.dataset.mobilePoint));
document.querySelector('#mobileOpenBan')?.addEventListener('click',()=>{
  const id=mobileSelectedStudentId;
  document.querySelector('#mobileChildActionsDialog')?.close();
  if(id)openQuickBan(id);
});
document.querySelector('#mobileNavBoard')?.addEventListener('click',()=>{const details=document.querySelector('.mobile-more-tools');if(details){details.open=true;setTimeout(()=>document.querySelector('.mobile-board-control')?.scrollIntoView({behavior:'smooth',block:'center'}),80)}});
document.querySelectorAll('#mobilePointModes [data-point-mode]').forEach(button=>button.onclick=()=>setMobilePointMode(button.dataset.pointMode));
document.querySelector('#materialMoveConfirm')?.addEventListener('click',confirmMaterialMove);
document.querySelector('#materialSearchInput')?.addEventListener('input',()=>{materialPage=0;renderMaterialLibrary()});
document.querySelector('#materialSearchClear')?.addEventListener('click',()=>{const field=document.querySelector('#materialSearchInput');if(field)field.value='';materialPage=0;renderMaterialLibrary()});
document.querySelector('#editActiveDrawerButton')?.addEventListener('click',()=>{const store=activeMaterialStore(),drawer=store.drawers.find(item=>item.name===store.activeDrawer);if(drawer)openIconPicker(drawer)});
document.querySelector('#mobileChildNoteSave')?.addEventListener('click',saveMobileChildNote);
document.querySelector('#mobileOpenFullProfile')?.addEventListener('click',()=>{const id=mobileSelectedStudentId;document.querySelector('#mobileChildActionsDialog')?.close();document.querySelector('#mobilePointsDialog')?.close();if(id)openStudentDetails(id)});
const cockpitAddIncident=document.querySelector('#cockpitAddIncident');if(cockpitAddIncident)cockpitAddIncident.onclick=addCockpitIncident;
const cockpitBackToBoard=document.querySelector('#cockpitBackToBoard');if(cockpitBackToBoard)cockpitBackToBoard.onclick=()=>{renderDashboard();teamDialog.close()};
const cockpitChangePerson=document.querySelector('#cockpitChangePerson');if(cockpitChangePerson)cockpitChangePerson.onclick=showTeamSelection;
const cockpitOpenSettings=document.querySelector('#cockpitOpenSettings');if(cockpitOpenSettings)cockpitOpenSettings.onclick=()=>selectTeamPage('settings');
const studentDetailSave=document.querySelector('#studentDetailSave');if(studentDetailSave)studentDetailSave.onclick=saveStudentDetailIncident;
const printStudentReport=document.querySelector('#printStudentReport');if(printStudentReport)printStudentReport.onclick=printActiveStudentReport;
const printPhotoSheet=document.querySelector('#printPhotoSheet');if(printPhotoSheet)printPhotoSheet.onclick=printClassPhotoSheet;
const saveQuickBanButton=document.querySelector('#saveQuickBanButton');if(saveQuickBanButton)saveQuickBanButton.onclick=saveQuickBans;
const cockpitGoalConfirm=document.querySelector('#cockpitGoalConfirm');if(cockpitGoalConfirm)cockpitGoalConfirm.onclick=()=>{setWeeklyGoalVote('green');renderTeamCockpit()};const cockpitGoalReject=document.querySelector('#cockpitGoalReject');if(cockpitGoalReject)cockpitGoalReject.onclick=()=>{setWeeklyGoalVote('red');renderTeamCockpit()};

document.querySelector('#mobileSwitchPerson')?.addEventListener('click',()=>{teamWorkspaceMode='selection';renderTeamMembers();showTeamSelection();teamDialog.showModal()});
document.querySelector('#openPersonalSettingsButton').onclick=()=>selectTeamPage('settings');

const wg=document.querySelector('#weeklyGoalGreen');if(wg)wg.onclick=()=>setWeeklyGoalVote('green');
const kgy=document.querySelector('#kidsGoalYes');if(kgy)kgy.onclick=()=>setKidsGoalVote('green');
const kgn=document.querySelector('#kidsGoalNotYet');if(kgn)kgn.onclick=()=>setKidsGoalVote('yellow');
const backToBoardButton=document.querySelector('#backToBoardButton');if(backToBoardButton)backToBoardButton.onclick=()=>teamDialog.close();
const teamScrollTopButton=document.querySelector('#teamScrollTopButton');if(teamScrollTopButton)teamScrollTopButton.onclick=()=>document.querySelector('#teamDialog .dialog-card')?.scrollTo({top:0,behavior:'smooth'});
const sp=document.querySelector('#speakGreetingButton');if(sp)sp.onclick=speakMorningGreeting;
const ng=document.querySelector('#nextGreetingButton');if(ng)ng.onclick=nextMorningGreeting;
const cm=document.querySelector('#cleanupMusicDock');if(cm)cm.onclick=toggleCleanupMusic;
const sdb=document.querySelector('#servicesDockButton');if(sdb)sdb.onclick=openServicePlanner;
const cs=document.querySelector('#cleanupStartButton');if(cs)cs.onclick=startCleanup;
document.querySelectorAll('[data-timer-minutes]').forEach(button=>button.onclick=()=>setClassTimerMinutes(button.dataset.timerMinutes));
const classTimerMinutesInput=document.querySelector('#classTimerMinutes');if(classTimerMinutesInput)classTimerMinutesInput.onchange=()=>setClassTimerMinutes(classTimerMinutesInput.value);
const classTimerStartButton=document.querySelector('#classTimerStart');if(classTimerStartButton)classTimerStartButton.onclick=startClassTimer;
const classTimerPauseButton=document.querySelector('#classTimerPause');if(classTimerPauseButton)classTimerPauseButton.onclick=pauseClassTimer;
const classTimerResetButton=document.querySelector('#classTimerReset');if(classTimerResetButton)classTimerResetButton.onclick=resetClassTimer;
const cstop=document.querySelector('#cleanupStopButton');if(cstop)cstop.onclick=stopCleanup;

document.querySelectorAll('[data-theme-choice]').forEach(b=>b.onclick=()=>chooseTheme(b.dataset.themeChoice));
const exportThemeButton=document.querySelector('#exportThemeButton');if(exportThemeButton)exportThemeButton.onclick=exportThemePack;
const importThemeButton=document.querySelector('#importThemeButton');if(importThemeButton)importThemeButton.onclick=importThemePack;
window.addEventListener('resize',fitStage);fitStage();updateSeason();applyClassWorld();

// NEXT 8.3 – ruhige Blätter vor der Waldlichtung
(function addAmbientLeaves83(){
  const ambient=document.querySelector('.forest-ambient');
  if(!ambient || ambient.querySelector('.ambient-leaf-v83')) return;
  ['🍃','🍂','🌿','🍃'].forEach((symbol,i)=>{
    const leaf=document.createElement('span');
    leaf.className='ambient-leaf-v83';
    leaf.textContent=symbol;
    leaf.setAttribute('aria-hidden','true');
    ambient.appendChild(leaf);
  });
})();

/* ============================================================
   STUFE 1 – Start: Fotospeicher und Offline-Betrieb
   ============================================================ */

function refreshPhotoDependentViews(){
  /* Alles neu zeichnen, was Fuchsfotos anzeigt. Wird einmal aufgerufen,
     sobald die Fotos aus der IndexedDB im Zwischenspeicher liegen. */
  [renderDashboard,renderTeacherList,renderQuickPointsList,renderClassManagement,
   renderMobilePersonalHome,renderMobilePoints,renderServicePlanner,renderKids]
   .forEach(fn=>{ try{ fn&&fn(); }catch{} });
  heilePortraits();
}

/* Sicherheitsnetz: kommt eine Ansicht auf einem anderen Weg neu ins Bild
   (Dialog geoeffnet, Liste gefiltert), werden die Portraits kurz danach
   ebenfalls geheilt. Ein Durchlauf kostet nichts, wenn nichts fehlt. */
document.addEventListener('DOMContentLoaded',()=>{
  photoStore.ready.then(()=>heilePortraits());
  const beobachter=new MutationObserver(eintraege=>{
    for(const eintrag of eintraege){
      for(const knoten of eintrag.addedNodes){
        if(knoten.nodeType!==1) continue;
        if(knoten.matches?.('img[data-foto-schluessel]:not([src])')){ heilePortrait(knoten); continue }
        if(knoten.querySelector?.('img[data-foto-schluessel]:not([src])')) heilePortraits(knoten);
      }
    }
  });
  beobachter.observe(document.body,{childList:true,subtree:true});
});

function updateStorageStatusPill(text,title){
  /* #cloudStatus stand bisher unbenutzt im HTML und zeigte einen festen Text.
     Jetzt meldet es den tatsaechlichen Zustand von Speicher und Offline-Modus.
     NEXT 14.9 – Auf dem Handy erscheint derselbe Text zusätzlich dezent
     unter dem Markennamen (kein Rahmen, passend zur Schrift), statt der
     separaten Pille oben rechts, die dort als überflüssiger Knopf wirkte. */
  const pill=document.querySelector('#cloudStatus');
  if(pill){pill.textContent=text;if(title)pill.title=title}
  const brandLine=document.querySelector('#brandStatusLine');
  if(brandLine){brandLine.textContent=text;if(title)brandLine.title=title}
}

(async()=>{
  const info=await photoStore.ready;

  /* NEXT 15.49 – Der Umzug lief bisher NUR mit verfuegbarer Datenbank. Genau
     auf den Geraeten ohne Datenbank ist er aber am wichtigsten: dort werden
     die grossen Bilder klein gerechnet und passen damit ueberhaupt erst in
     den Browserspeicher. Auch neu gezeichnet wird jetzt immer. */
  const moved=await photoStore.migrate(state.students);
  if(moved>0){
    saveState();
    updateStorageStatusPill(`● ${moved} Fotos aufbereitet`,info.available
      ?'Die Fotos liegen jetzt in der Gerätedatenbank statt im begrenzten Browserspeicher.'
      :'Die Gerätedatenbank ist blockiert – die Fotos wurden verkleinert, damit sie in den Browserspeicher passen.');
  }
  refreshPhotoDependentViews();

  const usage=await photoStore.usage();
  const stateKb=Math.round((localStorage.getItem(STORAGE_KEY)||'').length/1024);
  const detail=usage
    ? `Einstellungen: ${stateKb} KB im Browserspeicher · Fotos und Offline-Daten: ${usage.usedMb} MB von ${usage.quotaMb} MB verfügbar`
    : `Einstellungen: ${stateKb} KB im Browserspeicher`;

  if(!info.available){
    updateStorageStatusPill('● Lokal gespeichert','Die Gerätedatenbank ist nicht verfügbar – Fotos werden wie bisher im Browserspeicher abgelegt.');
  }else if(!navigator.serviceWorker||location.protocol==='file:'){
    updateStorageStatusPill('● Lokal gespeichert',detail+' · Offline-Modus benötigt einen Webserver (siehe OFFLINE.md).');
  }else{
    updateStorageStatusPill('● Lokal gespeichert',detail);
  }
})();

/* NEXT 15.18 – Das Versionsschild oben im gruenen Banner stand frueher als
   fester Text in index.html. Beim Ausliefern von 15.18 wurde es vergessen und
   zeigte weiter "15.15" – die App sah dadurch aus, als sei das Update nicht
   angekommen. Jetzt liest das Schild die Version selbst aus.

   Einzige Wahrheitsquelle ist `const VERSION` in sw.js. Faellt das Lesen aus
   (file://, ganz alter Cache), wird ersatzweise der ?v=-Anhang der eigenen
   Skriptadresse benutzt: 15180 -> 15.18. */
(async function zeigeVersionImSchild(){
  const schild=document.getElementById('buildBadge');
  if(!schild) return;

  const ausSkriptAdresse=()=>{
    const script=document.querySelector('script[src*="app.js"]');
    const roh=script&&new URL(script.src,location.href).searchParams.get('v');
    if(!roh||roh.length<4) return '';
    // 15180 -> 15.18 (die letzte Stelle ist die Unterversion)
    return `${roh.slice(0,2)}.${roh.slice(2,4)}`;
  };

  let version='';
  try{
    const antwort=await fetch('sw.js',{cache:'no-store'});
    if(antwort.ok){
      const treffer=(await antwort.text()).match(/VERSION\s*=\s*['"]digiboard-([\d.]+)['"]/);
      if(treffer) version=treffer[1];
    }
  }catch{ /* offline oder file:// – unten greift der Ersatzweg */ }

  if(!version) version=ausSkriptAdresse();
  schild.textContent=version?`NEXT ${version} · AKTUELL`:'NEXT · AKTUELL';
})();

/* NEXT 15.53 – Der Warnbalken, der lange gefehlt hat.

   Bis hierher stand der Hinweis auf file:// nur im Sprechblasentext eines
   kleinen Schildchens. Das liest niemand – und die Folgen sind gravierend:

   - Safari gibt JEDER Datei unter file:// einen EIGENEN Speicher. index.html
     und foto-diagnose.html sehen einander nicht, obwohl sie nebeneinander
     im selben Ordner liegen.
   - Dieser Speicher gilt als fluechtig und wird ohne Vorwarnung geleert.
     Genau so verschwinden Fotos „von allein".
   - Der Service Worker verweigert den Dienst, die ?v=-Anhaenge wirken nicht.
     Aenderungen kommen nicht an, egal wie oft man neu laedt.

   Das darf nicht mehr stillschweigend passieren. */
if(location.protocol==='file:'){
  window.addEventListener('DOMContentLoaded',()=>{
    if(document.querySelector('#dateiWarnung1553'))return;
    const balken=document.createElement('div');
    balken.id='dateiWarnung1553';
    balken.setAttribute('role','alert');
    balken.style.cssText='position:fixed;left:0;right:0;top:0;z-index:2147483647;'
      +'background:#7d2c20;color:#fff;padding:11px 46px 11px 16px;'
      +'font:13px/1.5 -apple-system,BlinkMacSystemFont,system-ui,sans-serif;'
      +'box-shadow:0 3px 12px rgba(0,0,0,.3)';
    balken.innerHTML='<b>DigiBoard läuft gerade als lose Datei (file://) – so gehen Fotos und Punkte verloren.</b><br>'
      +'Dieser Browser gibt jeder Datei einen eigenen, flüchtigen Speicher und löscht ihn ohne Vorwarnung. '
      +'Bitte den Ordner schließen und stattdessen <b>„DigiBoard starten.command"</b> doppelklicken – '
      +'DigiBoard öffnet sich dann unter <b>http://localhost:8080</b> und behält seine Daten.'
      +'<button type="button" aria-label="Hinweis schließen" style="position:absolute;right:9px;top:9px;'
      +'background:rgba(255,255,255,.16);color:#fff;border:0;border-radius:8px;width:28px;height:28px;'
      +'font-size:17px;font-weight:900;cursor:pointer;line-height:1">×</button>';
    balken.querySelector('button').onclick=()=>balken.remove();
    document.body.prepend(balken);
    document.body.style.paddingTop=(balken.offsetHeight||70)+'px';
  });
}

/* Service Worker – nur ueber http/https moeglich, bei file:// wird still
   uebersprungen. Die App funktioniert dann wie bisher, nur ohne Offline-Modus. */
if('serviceWorker' in navigator && location.protocol!=='file:'){
  window.addEventListener('load',()=>{
    navigator.serviceWorker.register('sw.js').then(registration=>{
      const ready=()=>updateStorageStatusPill('● Offline bereit','DigiBoard ist vollständig gespeichert und läuft auch ohne Internet.');
      if(navigator.serviceWorker.controller) ready();
      registration.addEventListener('updatefound',()=>{
        const installing=registration.installing;
        if(!installing) return;
        installing.addEventListener('statechange',()=>{ if(installing.state==='activated') ready(); });
      });
    }).catch(()=>{ /* Offline-Modus bleibt aus, die App laeuft normal weiter */ });
  });
}
window.addEventListener('resize',()=>{
  if(document.querySelector('.material-search-row'))enforceMobileFundusLayout();
  fitResponsiveStudentGrid(document.querySelector('#teacherStudentList'));
});
