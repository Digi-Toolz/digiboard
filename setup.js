/* ============================================================
   DigiBoard Next – setup.js
   Ein Willkommens-Assistent, der beim ersten Start erscheint.

   Ziel: die Verteilung an Kolleginnen so einfach machen, dass eine
   AirDrop-Datei ohne Erklaerung reicht. Der Assistent bietet drei Wege:

     1) Klassenpaket-Datei einlesen (empfohlen)
        - kommt per AirDrop, E-Mail oder iCloud Drive
        - enthaelt Klassenliste, Fotos, Stundenplan, alles
        - wird gelesen und in den lokalen Speicher uebernommen
        - danach verhaelt sich die App wie eine, die schon laenger im Einsatz ist

     2) Backup-Datei einlesen (fuer Umzug zwischen eigenen Geraeten)
        - identisches Format, gleicher Weg

     3) Selbst einrichten (Klasse manuell anlegen)
        - fuer die erste Person, die noch keine Vorlage hat

   Alle Daten bleiben lokal. Der Assistent ladet nichts hoch, versendet nichts.
   Es wird nur die Datei gelesen, die die Lehrerin selbst auswaehlt.
   ============================================================ */

const setupWizard = (() => {

  function hasExistingData(){
    try{
      const raw = localStorage.getItem(STORAGE_KEY);
      if(!raw) return false;
      const state = JSON.parse(raw);
      const hasStudents = Array.isArray(state?.students) && state.students.length > 0
                         && state.students.some(s => s.name && !/^Kind \d+$/.test(s.name));
      return hasStudents;
    }catch{ return false; }
  }

  function build(){
    const dlg = document.createElement('dialog');
    dlg.id = 'setupWizardDialog';
    dlg.setAttribute('aria-labelledby','setupWizardTitle');
    dlg.innerHTML = `
      <div class="setup-shell">
        <header class="setup-head">
          <span class="setup-mascot" aria-hidden="true">🦊</span>
          <h2 id="setupWizardTitle">Willkommen bei DigiBoard!</h2>
          <p class="setup-lede">Bevor es losgeht: Wie sollen wir starten?</p>
        </header>

        <div class="setup-options">
          <button type="button" class="setup-option" data-choice="package">
            <span class="setup-icon">📦</span>
            <span class="setup-title">Klassenpaket öffnen</span>
            <span class="setup-hint">Von einer Kollegin per AirDrop, E-Mail oder iCloud Drive bekommen. Enthält Klasse, Fotos und Stundenplan.</span>
          </button>

          <button type="button" class="setup-option" data-choice="backup">
            <span class="setup-icon">☁️</span>
            <span class="setup-title">Eigenes Backup laden</span>
            <span class="setup-hint">Bei einem Wechsel des Geräts – vom alten Gerät gesichert, hier fortsetzen.</span>
          </button>

          <button type="button" class="setup-option" data-choice="fresh">
            <span class="setup-icon">✨</span>
            <span class="setup-title">Neu einrichten</span>
            <span class="setup-hint">Klasse selbst anlegen. Namen und Fotos direkt in DigiBoard eingeben.</span>
          </button>
        </div>

        <p class="setup-privacy">
          <strong>Datenschutz:</strong> Alle Kinderdaten bleiben auf diesem Gerät.
          Sie werden nicht ins Internet hochgeladen. Beim Wechsel des Geräts
          liegt es an dir, ein Backup zu erstellen und mitzunehmen.
        </p>

        <input type="file" id="setupFileInput" accept=".digiboard-backup,.digiboard-package,application/json" hidden />
        <p class="setup-status" id="setupStatus" role="status" aria-live="polite"></p>
      </div>`;
    document.body.appendChild(dlg);

    const fileInput = dlg.querySelector('#setupFileInput');
    const status = dlg.querySelector('#setupStatus');
    let expectedKind = null;

    dlg.querySelectorAll('.setup-option').forEach(btn => {
      btn.addEventListener('click', () => {
        const choice = btn.dataset.choice;
        if(choice === 'fresh'){
          finish('Neue Klasse angelegt. Namen und Fotos kannst du in den Einstellungen ergänzen.');
          return;
        }
        expectedKind = choice;
        status.textContent = choice === 'package'
          ? 'Klassenpaket-Datei auswählen …'
          : 'Backup-Datei auswählen …';
        fileInput.click();
      });
    });

    fileInput.addEventListener('change', () => {
      const file = fileInput.files?.[0];
      if(!file) return;
      status.textContent = 'Datei wird gelesen …';
      const reader = new FileReader();
      reader.onload = async () => {
        try{
          const payload = JSON.parse(reader.result);
          const importedState = payload?.format === 'digiboard-backup' || payload?.format === 'digiboard-package'
            ? payload.state : payload;
          if(!importedState || !Array.isArray(importedState.students))
            throw new Error('Diese Datei sieht nicht wie ein DigiBoard-Paket aus.');
          // Fotos aus dem Paket in die Geraetedatenbank uebernehmen
          if(typeof photoStore !== 'undefined' && photoStore.absorbFromImport){
            status.textContent = 'Fotos werden übernommen …';
            await photoStore.absorbFromImport(importedState);
          }
          localStorage.setItem(STORAGE_KEY, JSON.stringify(importedState));
          const anzahl = importedState.students.length;
          finish(`Klasse mit ${anzahl} Kindern übernommen. DigiBoard startet …`);
        }catch(err){
          status.textContent = '⚠️ Diese Datei konnte nicht gelesen werden. Bitte prüfen, ob es sich um ein DigiBoard-Paket oder -Backup handelt.';
        }
      };
      reader.onerror = () => { status.textContent = '⚠️ Datei konnte nicht geöffnet werden.'; };
      reader.readAsText(file);
    });

    function finish(message){
      status.textContent = message;
      localStorage.setItem('digiboard-setup-done', '1');
      setTimeout(() => { dlg.close(); location.reload(); }, 900);
    }

    return dlg;
  }

  function shouldShow(){
    if(localStorage.getItem('digiboard-setup-done')) return false;
    if(hasExistingData()) return false;
    return true;
  }

  return {
    show(){ if(!shouldShow()) return; const dlg = build(); dlg.showModal(); },
    forceShow(){ const dlg = document.querySelector('#setupWizardDialog') || build(); dlg.showModal(); }
  };
})();

document.addEventListener('DOMContentLoaded', () => setupWizard.show());
