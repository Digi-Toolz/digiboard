# Korrekturen 11.89 → 11.89.1 (Variante A, minimalinvasiv)

Alle Änderungen sind im Quelltext mit dem Kommentar `KORREKTUR n` markiert und
lassen sich so einzeln zurücknehmen. Es wurde keine bestehende CSS-Regel und
keine Gestaltung verändert.

---

## Korrektur 1 · Speicher absichern

**Datei:** `app.js`, `fixes.css` (neu)

**Vorher**

```js
function saveState(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}
```

Bei vollem Speicher warf `setItem` einen `QuotaExceededError`, der ungefangen
nach oben flog. Die dem Aufruf folgenden `render*()`-Aufrufe liefen nicht mehr,
und die Lehrkraft bekam **keinerlei Rückmeldung**. Arbeitsspeicher und
gespeicherter Zustand liefen still auseinander.

**Nachher**

`saveState()` fängt den Fehler, gibt `true`/`false` zurück und zeigt eine
Warnleiste mit der tatsächlich belegten Speichermenge. Neu hinzugekommen sind
`storageUsageInfo()` und `showStorageWarning()` sowie das Element
`#storageWarningBar` (Stil in `fixes.css`).

**Nachgemessen** – 120 Kinder mit Foto (ca. 8 MB) in einem Durchlauf gespeichert:

| | vorher | nachher |
|---|---|---|
| erfolgreiche Speicherungen | 72, danach Absturz | 72 |
| abgelehnte Speicherungen | – | 48, sauber abgefangen |
| ungefangene Fehler | 1 pro Versuch | **0** |
| Rückmeldung an die Lehrkraft | keine | Warnleiste mit „4.94 MB belegt“ |
| App danach bedienbar | nein | ja |

> Das ist eine Absicherung, keine Lösung des Platzproblems. Die 5-MB-Grenze
> bleibt bestehen. Die Fotos gehören nach IndexedDB – das ist Variante B.

---

## Korrektur 2 · Nullsicherheit bei leerer Teamliste

**Datei:** `app.js`, 5 Stellen

**Vorher**

```js
function activeTeamPerson(){return state.teamMembers.find(x=>x.id===state.activeTeamMember)||state.teamMembers[0]}
```

Bei leerer Liste kam `undefined` zurück. Reproduzierte Abstürze:

```
Cannot read properties of undefined (reading 'profilePrefs')
Cannot read properties of undefined (reading 'name')
```

Auslöser im Alltag: Import eines fremden Backups, Schema-Drift zwischen
Versionen, Löschen des letzten Teammitglieds.

**Nachher**

`activeTeamPerson()` liefert garantiert ein Objekt (`FALLBACK_TEAM_MEMBER`).
Vier weitere Stellen, die dasselbe Muster inline dupliziert hatten
(Zeilen 1216, 1393, 1473, 1574 der Ursprungsdatei), rufen jetzt ebenfalls
`activeTeamPerson()` auf.

**Nachgemessen** – Start mit `{students:[], teamMembers:[], content:{}}`:
2 Fehler vorher → **0 Fehler** nachher.

---

## Korrektur 3 · Drei Lücken beim HTML-Escaping

**Datei:** `app.js`

| Stelle | vorher | Risiko |
|---|---|---|
| Teamkarte | `${member.name}`, `${member.role}` | frei editierbar in den Einstellungen |
| Kinder-Auswahlliste | `<option value="${s.id}">${s.name}</option>` | Name **und** Attributwert ungeschützt |
| Dienst-Auswahlliste | `<option>${s}</option>` | Dienstnamen frei editierbar |

Alle drei laufen jetzt durch `escapeHtml()`. Damit sind alle 42 interpolierten
`innerHTML`-Zuweisungen abgedeckt – vorher 36 von 42.

---

## Korrektur 4 · Manifest und Symbole

**Dateien:** `manifest.webmanifest`, `index.html`, 4 neue PNG-Dateien

**Vorher**

```json
{ "name": "DigiBoard Next 9.4", "icons": [] }
```

45 Versionen alt, ohne Symbole nicht installierbar, `theme_color` (`#5a9f48`)
im Widerspruch zum `<meta name="theme-color">` (`#0b6b45`).

**Nachher**

Aktueller Name, `scope`, `id`, `orientation: landscape-primary`, abgestimmte
Farben und drei Symbole (192, 512, maskable 512). In `index.html` ergänzt:
`apple-touch-icon` und die drei `apple-mobile-web-app-*`-Angaben, damit die App
auf dem iPhone-Homescreen ein Symbol und einen Namen bekommt.

Die Symboldateien sind schlichte Platzhalter im Waldmotiv – bitte bei
Gelegenheit durch das echte Fuchs-Logo ersetzen, Maße und Dateinamen beibehalten.

> Ein Service Worker fehlt weiterhin. Ohne ihn gibt es **keinen Offline-Betrieb**.
> Das ist Variante B.

---

## Korrektur 5 · Doppelter iPhone-Build

**Datei:** `tools/build-iphone-standalone.mjs`

Das Skript schrieb denselben Inhalt in zwei Dateien:

```js
fs.writeFileSync(path.join(root,'DigiBoard-iPhone.html'),html);
fs.writeFileSync(path.join(root,'index-iphone.html'),html);
```

Daher waren 54 der 58 MB im Paket eine byte-identische Dublette (gleiche MD5-Summe).
Jetzt wird nur noch `DigiBoard-iPhone.html` erzeugt. Das Skript bindet zusätzlich
`fixes.css` ein und wandelt das `apple-touch-icon` in eine Data-URL um, damit die
Standalone-Datei vollständig bleibt.

`DigiBoard-iPhone.html` wurde neu erzeugt und enthält damit alle Korrekturen 1–3.
**Wichtig:** Die Datei niemals von Hand bearbeiten, sondern immer neu bauen:

```bash
node tools/build-iphone-standalone.mjs
```

---

## Prüfergebnis nach den Korrekturen

Geprüft in Chromium, jeweils gegen `index.html`:

| Prüfung | Ergebnis |
|---|---|
| HTML-Struktur, doppelte IDs, `label[for]` | 0 Fehler, 313 eindeutige IDs |
| `node --check app.js` | Syntax in Ordnung |
| Start, 3,5 s Laufzeit | 0 JS-Fehler, 0 Konsolenfehler, 0 fehlgeschlagene Requests |
| Klick auf alle 159 Buttons | 0 Fehler |
| Einstellungsdialog, 94 Elemente | 0 Fehler |
| Mobil 390×844 | kein horizontaler Überlauf |
| Beschädigter `localStorage` | startet sauber |
| Leerer Zustand ohne Kinder/Team | **0 Fehler** (vorher 2) |
| Speicherüberlauf | **0 ungefangene Fehler**, App bedienbar (vorher Absturz) |
| Paketgröße | 58 MB → 33 MB |

---

## Was bewusst **nicht** angefasst wurde

Diese Punkte aus der Analyse bleiben offen und gehören in Variante B bzw. C:

1. `override.css` – 733 KB, 10.156 `!important`, 2.153 redundante Regelblöcke,
   28,8 % Abdeckung beim Start. Der größte Hebel, aber ein eigenes Projekt.
2. Kinderfotos als Data-URL im `localStorage` → nach IndexedDB verlagern.
3. Kein Service Worker → kein Offline-Betrieb.
4. 7 tote ID-Referenzen im JS (`#seasonName`, `#seasonIcon`, `#overrideRangeGrid`,
   `#activeTeamBadge`, `#viewModeButton`, `#openPointsDock`, `#openPointsFromTeam`).
5. `onclick=`-Zuweisungen statt `addEventListener`; 283 globale Namen ohne Modul-Scope.
6. `alert`/`confirm`/`prompt` als blockierende Browserdialoge.
7. Sync-Schlüssel per GET-Query; Dauer-Polling alle 5 s ohne `visibilitychange`-Pause.
8. Datenschutzkonzept für Fotos, Namen und Verhaltensbewertungen Minderjähriger.
9. 9 verwaiste Assets (~1 MB): `portraits/s1–s6.jpg`, `contact-sheet.jpg`,
   `forest-bg.svg`.

---

# Stufe 1 · 11.89.1 → 11.89.2 (Offline-Betrieb und Fotospeicher)

## Neue Dateien

| Datei | Zweck |
|---|---|
| `photo-store.js` | Kinderfotos als Blob in IndexedDB statt als Data-URL im localStorage |
| `sw.js` | Service Worker – macht die App offlinefähig |
| `serve.mjs` | kleiner lokaler Webserver zum Testen (Service Worker braucht http) |
| `OFFLINE.md` | Anleitung: Offline-Betrieb, Installation, Speicherorte |

## Fotos wandern in die Gerätedatenbank

Im Zustandsobjekt steht statt einer Data-URL nur noch ein Verweis:
`photo: 'idb:alan'`. Alte Werte funktionieren unverändert weiter – Dateipfade
bleiben Dateipfade, vorhandene Data-URLs werden beim ersten Start automatisch
umgezogen.

Damit die Oberfläche unverändert bleiben konnte, liegt zwischen Datenbank und
Anzeige ein Zwischenspeicher im Arbeitsspeicher: Beim Start werden alle Fotos
einmal gelesen und als Objekt-URL abgelegt. `studentPhotoMarkup()` und alle
`render*()`-Funktionen bleiben dadurch **synchron** – es musste keine einzige
Render-Funktion umgeschrieben werden.

Angepasst wurden: `studentPhotoMarkup()`, `printableStudentPhoto()`,
`replaceStudentPhoto()` (jetzt `canvas.toBlob` statt `canvas.toDataURL`),
`exportDigiBoardBackupFile()` und `importDigiBoardBackupFile()`.

**Nachgemessen** – 10 Fotos als Data-URL im Altzustand:

| | vorher | nachher |
|---|---|---|
| localStorage | 36 KB | **14 KB** |
| Data-URLs im localStorage | 10 | **0** |
| Verweise auf die Datenbank | – | 10 |
| Foto übersteht Neustart | ja | ja |
| Obergrenze | ~70 Kinder | Gigabyte-Bereich |

## Backup enthält weiterhin die Fotos

Beim Export werden die Verweise wieder zu Data-URLs aufgelöst, damit die
Sicherungsdatei für sich allein vollständig bleibt. Beim Import wandern die Fotos
direkt in die Datenbank, ohne den localStorage zu durchlaufen – vorher konnte
allein der Import schon die 5-MB-Grenze sprengen. Backup-Format ist jetzt
`version: 2`; ältere Backups werden weiterhin gelesen.

## Offline-Betrieb

`sw.js` lädt 20 Kerndateien bei der Installation vollständig vor und legt alles
Weitere – vor allem die Portraits – beim ersten Aufruf nach. Der Google-Sheets-Sync
wird bewusst nie abgefangen.

**Nachgemessen** – Netzwerk vollständig abgeschaltet, Seite neu geladen:
Seite lädt, 1.271 Zeichen sichtbarer Text, **12 von 12 Bildern geladen**,
0 Fehler.

> **Wichtig:** Ein Service Worker läuft nur über `http://` oder `https://`.
> Per Doppelklick geöffnet (`file://`) wird er still übersprungen – die App
> funktioniert dann wie bisher, nur ohne Offline-Modus. Details in `OFFLINE.md`.

## Statusanzeige wird endlich benutzt

`#cloudStatus` stand bisher unbenutzt im HTML und zeigte einen festen Text.
Jetzt meldet es den tatsächlichen Zustand: „● Offline bereit" wenn der Service
Worker aktiv ist, sonst „● Lokal gespeichert". Der Tooltip nennt die belegte
Speichermenge.

## Altfehler, den erst der Test sichtbar gemacht hat

Beim Prüfen des Fotospeichers fiel auf, dass ein selbst hochgeladenes Foto den
nächsten Neustart nicht überlebte. Ursache in `loadState()`:

```js
merged.students=(merged.students||[]).map(student=>
  ({...student, photo: defaultById.get(student.id)?.photo || student.photo || ''}));
```

Das Standardfoto gewann gegen das gespeicherte – gedacht war offensichtlich das
Gegenteil, nämlich Lücken zu füllen. Für alle 22 Kinder der aktuellen Klasse
bedeutete das: **jedes ausgetauschte Foto war nach dem nächsten Neuladen wieder
weg**, ohne Meldung. Dieselbe Verwechslung stand ein zweites Mal im
Migrationszweig darüber. Beide Reihenfolgen sind jetzt umgedreht.

Dieser Fehler war unabhängig von Stufe 1 vorhanden und hätte auch ohne den
Umbau bestanden.

## Prüfergebnis Stufe 1

Alle Prüfungen über `http://localhost:8080`, zusätzlich die bisherige Suite über `file://`:

| Prüfung | Ergebnis |
|---|---|
| Service Worker registriert und aktiv | ja, 20 Dateien im Cache |
| Vollständiger Neustart ohne Netz | funktioniert, 12/12 Bilder |
| Foto → Datenbank, Verweis im Zustand | `idb:alan`, 0 Data-URLs im localStorage |
| Foto übersteht Neustart | ja |
| Automatischer Umzug alter Fotos | 10 Fotos, 36 KB → 14 KB |
| Backup enthält Fotos | ja, als Data-URL eingebettet |
| Klick auf alle 159 Buttons | 0 Fehler |
| Leerer Zustand, beschädigter Speicher, mobil | 0 Fehler |
| Betrieb über `file://` ohne Service Worker | funktioniert, degradiert sauber |

## Was Stufe 1 **nicht** löst

- `override.css` bleibt unverändert (733 KB, 10.156 `!important`) – das ist Stufe 2.
- Mehrbenutzerbetrieb: unverändert nicht möglich, der Zustand ist weiterhin ein
  einzelner JSON-Klumpen pro Gerät.
- Die Daten liegen weiterhin ausschließlich lokal. Am Datenschutzbild ändert
  sich dadurch nichts – was gut ist, aber auch bedeutet, dass die Klärung für
  Stufe 4 noch aussteht.
- Objekt-URLs im Druckfenster funktionieren im Test, sollten aber einmal an
  einem echten Drucker geprüft werden.

---

# Stufe 2 · 11.89.2 → 11.89.3 (Konsolidierung von override.css)

## Ausgangslage

`override.css` war kein Stylesheet, sondern ein angehängtes Änderungsprotokoll:
Jede Version hängte ihre Korrekturen hinten an, statt die bestehende Regel zu
ändern. Ergebnis: 733 KB, 5.116 Regelblöcke bei nur 2.963 verschiedenen
Selektoren, 10.156 `!important`, 332 Versionskommentare.

## Vorgehen: nur beweisbar verlustfreie Umformungen

Das Werkzeug `tools/consolidate-css.py` führt ausschließlich Umformungen aus,
bei denen sich das Ergebnis der Kaskade nicht ändern **kann** – nicht
„wahrscheinlich nicht ändert".

| Regel | Was | Anzahl |
|---|---|---|
| A | Kommentarblöcke entfernt (reine Notizen ohne Wirkung) | 332 |
| C1 | Eigenschaft wird später für denselben Selektor im selben `@media`-Kontext mit gleichem Rang erneut gesetzt → frühere Angabe unerreichbar | 2.765 |
| C2 | Eigenschaft wird für denselben Selektor irgendwo mit `!important` gesetzt → jede normale Angabe derselben Eigenschaft kann nie gewinnen | 371 |
| D | dadurch leer gewordene Blöcke entfernt | 557 |

**Beweis zu C1:** Für jedes Element, das den Selektor trifft, haben beide Regeln
identische Spezifität, also gewinnt die spätere. Eine dazwischenliegende Regel
mit anderem Selektor ändert daran nichts: schlägt sie beide, bleibt sie Sieger;
unterliegt sie beiden, bleibt sie Verlierer; bei Gleichstand gewinnt weiterhin
die spätere. In allen Fällen ist die frühere Angabe ohne Wirkung.

**Bewusst nicht gemacht:** `!important` entfernen, Selektoren vereinfachen,
Blöcke über Distanz verschieben, Kurzschreibweisen zusammenfassen. Nichts davon
wäre beweisbar verlustfrei.

## Nachweis: optisch identisch

`tools/visual-diff.mjs` vergleicht alte und neue Datei nicht nach Augenmaß,
sondern nach **43 berechneten Stileigenschaften plus Geometrie jedes einzelnen
Elements**, dazu einen Pixelvergleich der Bildschirmfotos. Geprüft in vier
Bildschirmgrößen (1920 Tafel, 1440 Laptop, 1024 Tablet, 390 Handy) und fünf
Zuständen (Start, große Ansicht, kleine Ansicht, Einstellungen, Teambereich).

Damit der Vergleich aussagekräftig ist, läuft er deterministisch: feste Uhrzeit,
festes `Math.random`, alle Animationen angehalten. Ohne das rauschen laufende
Uhr und die zufällig platzierten Waldtiere in den Vergleich hinein.

| | Ergebnis |
|---|---|
| geprüfte Elementzustände | **33.956** |
| Abweichungen im berechneten Stil | **0** |
| Bildschirmfotos mit sichtbarem Unterschied | **0 von 20** |
| größte Helligkeitsabweichung überhaupt | 5 von 255, kein Pixel über Schwelle |

Die verbliebenen Abweichungen von 1–5 Helligkeitsstufen sind Rasterungsrauschen
der Grafikausgabe auf Farbverläufen und liegen weit unter der Sichtbarkeitsgrenze.

## Messwerte

| | vorher | nachher |
|---|---|---|
| Dateigröße | 716 KB | **541 KB** (−24,4 %) |
| Regelblöcke im Browser | 4.348 | **3.799** |
| tote Eigenschaften | 3.136 | **0** |
| `!important` | 10.156 | 7.646 |
| Kommentarblöcke | 332 | 1 |

Der Ladevorgang ist damit rund 175 KB leichter – spürbar vor allem beim ersten
Aufruf auf dem Handy und im Schul-WLAN.

## Rückfallprüfung

| Prüfung | Ergebnis |
|---|---|
| Klick auf alle Buttons (jetzt 225) | 0 Fehler |
| Service Worker | aktiv |
| Offline-Betrieb, IndexedDB, Backup | unverändert funktionsfähig |

## Was weiterhin offen bleibt

Die 7.646 verbliebenen `!important` sind der eigentliche Grund, warum Änderungen
an der Optik aufwendig sind. Sie lassen sich **nicht** automatisch entfernen:
ob ein `!important` nötig ist, hängt davon ab, welche Regel es schlagen soll –
und das ist statisch nicht beweisbar. Das ist Handarbeit pro Bereich (Tafel,
Einstellungen, Teambereich …), jeweils mit dem Bildvergleich als Netz.

Die Originaldatei liegt als `tools/override.original.css` bei. Der Vergleich
lässt sich jederzeit wiederholen:

```bash
node serve.mjs                       # in einem Fenster
node tools/visual-diff.mjs           # in einem zweiten
```
