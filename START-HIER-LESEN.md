# Zuerst lesen: DigiBoard richtig starten

## Das war die Ursache

DigiBoard lief per Doppelklick auf `index.html`. Die Adresse lautet dann
`file:///Users/…` statt `http://…`. Das sieht aus wie eine Webseite, ist aber
keine – und drei Dinge gehen dabei kaputt:

1. **Safari gibt jeder einzelnen Datei einen eigenen Speicher.** `index.html`
   und `foto-diagnose.html` sehen einander nicht, obwohl sie nebeneinander im
   selben Ordner liegen. Genau das hat die Diagnoseseite gemeldet: null Kinder,
   null Fotos – während die App daneben ihre Daten hatte.
2. **Dieser Speicher gilt dem Browser als flüchtig.** Er wird ohne Vorwarnung
   geleert. So verschwinden Fotos „von allein".
3. **Der Service Worker verweigert unter `file://` den Dienst**, und die
   `?v=`-Anhänge an den Dateien wirken nicht. Änderungen kommen deshalb nicht
   an, egal wie oft man neu lädt. Das erklärt die Stunden, in denen sich trotz
   neuer Fassungen nichts änderte.

## Was du jetzt machst

### 1 · Richtig starten

Im Ordner liegt jetzt **`DigiBoard starten.command`**. Doppelklick genügt.

> Beim allerersten Mal meckert macOS vielleicht. Dann: Rechtsklick auf die
> Datei → **„Öffnen"** → im Hinweisfenster nochmals **„Öffnen"**. Danach reicht
> für immer der Doppelklick.

Es öffnet sich ein schwarzes Fenster und im Browser **`http://localhost:8080`**.
Das schwarze Fenster muss offen bleiben, solange du DigiBoard benutzt.

**Ab jetzt immer über diese Adresse öffnen, nie mehr per Doppelklick auf
`index.html`.** Am besten als Lesezeichen sichern.

### 2 · Fotos zurückholen

Unter der neuen Adresse ist der Speicher leer – die alten `file://`-Daten
liegen in einem abgeschotteten Bereich und kommen nicht mit. Deshalb:

1. `http://localhost:8080` öffnen.
2. Einstellungen → **Backup laden** → deine Datei
   `DigiBoard-Fuchsklasse-2026-08-02.digiboard-backup.json` wählen.
3. Warten, bis DigiBoard sich neu startet.

Ich habe genau diesen Weg mit deiner echten 14-MB-Datei durchgespielt: **22 von
22 Fotos** landen in der Fotodatenbank, der übrige Speicher bleibt bei 20 KB.

Falls doch etwas fehlt: `http://localhost:8080/foto-diagnose.html` öffnen.
Die Seite zeigt jedes Foto einzeln und kann fehlende aus der Sicherungsdatei
nachtragen, ohne Namen und Punkte anzurühren.

### 3 · Auf dem iPhone

Beim Start nennt das schwarze Fenster eine zweite Adresse, etwa
`http://192.168.1.42:8080`. Die im iPhone-Safari öffnen – gleiches WLAN,
Laptop muss laufen. Dort dasselbe Backup laden.

> Das iPhone hat einen **eigenen** Speicher. Fotos vom Laptop erscheinen dort
> nicht von selbst; das Backup muss auf jedem Gerät einmal geladen werden.
>
> Für den Dauerbetrieb ohne laufenden Laptop steht in `OFFLINE.md`, wie der
> Ordner auf einen richtigen Server kommt. Erst dann funktioniert auch
> „Zum Home-Bildschirm" mit Offline-Modus.

## Was sich sonst geändert hat (15.53)

- **Warnbalken.** Läuft DigiBoard je wieder unter `file://`, steht es künftig
  in roter Schrift oben auf dem Bildschirm, statt in einer Sprechblase zu
  verstecken.
- **`serve.mjs` liegt jetzt wirklich bei.** `OFFLINE.md`, `KORREKTUREN.md` und
  `sw.js` verwiesen seit Langem auf diese Datei – vorhanden war sie nie.
- **Der Backup-Import kann nicht mehr hängen bleiben.** In `photo-store.js`
  wartete das Laden eines Bildes ohne jede Frist. Feuerte ein Bild weder
  „fertig" noch „Fehler", stand der Import für immer bei „Fotos werden
  übernommen …" – und speicherte am Ende **gar nichts**. Jetzt gilt eine
  Frist, und die Meldung nennt Kinderzahl und übernommene Fotos.
- **Fehlermeldungen stehen an der Kinderkarte**, nicht mehr in einem Absatz
  weit unterhalb der Liste (das war der Grund für „es passiert einfach nichts").
- **HEIC wird erkannt und erklärt.** iPhone-Fotos aus iCloud kann Chrome nicht
  öffnen; Safari schon.
- **Das Foto-Dateifeld der Kinderliste ist wirklich antippbar.** Es war die
  letzte Stelle mit `pointer-events:none` – auf dem iPad hätte das als
  Nächstes zugeschlagen.
