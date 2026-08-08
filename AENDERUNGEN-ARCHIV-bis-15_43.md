# DigiBoard Next – Änderungsarchiv 15.20 bis 15.43

Die Einzeldateien wurden zu diesem Archiv zusammengefasst.
Die jeweils aktuelle Version steht in der eigenen Datei AENDERUNGEN-<version>.md.

---

# DigiBoard Next 15.19 → 15.20

Grundlage: zwei Screenshots von Marc, 05.08.2026 (abends).

## Hochzuladen

`index.html` · `app.js` · `fixes.css` · `sw.js`

---

## 1. Wochenziel: die Leere unter der Zeile ist weg

Seit 15.19 ist das Wochenziel eine schmale Zeile – die Karte darunter
blieb aber hoch. Unter der einen Zeile stand ein leeres Feld von rund
zwei Fingerbreit.

Die Ursache lag nicht in der Zeile, sondern in `override.css`: dort
bekommt **jede** Cockpit-Karte auf schmalen Bildschirmen eine
Mindesthöhe – `min-height:180px` unter 1050px, `min-height:150px` unter
820px. Für eine Karte mit vier Kacheln ist das richtig, für eine
Ja/Nein-Zeile viel zu viel. Die Wochenziel-Karte ist jetzt von dieser
Regel ausgenommen und wächst nur noch mit ihrem Inhalt
(`align-self:start`, damit sie auch im Raster oben andockt statt sich
über die ganze Zeilenhöhe zu ziehen).

## 2. Wochenziel: ruhigere, modernere Zeile

* **Etikett** – „🎯 Wochenziel“ stand als Überschrift da und wiederholte
  nur, was daneben ohnehin steht. Übrig bleibt ein kleiner runder Chip
  „🎯 WOCHENZIEL“ in gedämpftem Grün.
* **Zieltext** – ist jetzt die Hauptsache: etwas größer (13px), dunkler,
  und darf bis zu zwei Zeilen laufen, statt am Rand abgeschnitten zu
  werden.
* **Ja/Nein** – sitzen zusammen in einer hellen Wanne wie ein
  Schiebeschalter: „Ja“ grün gefüllt, „Nein“ weiß mit rotem Text. Beim
  Antippen gibt der Knopf leicht nach.
* **Karte** – hellerer Verlauf (weiß nach zartgrün), weicherer Schatten,
  15px Radius.
* **Mehr** – bleibt hinten und ist bewusst unauffällig.
* **Handy** – der Zieltext nimmt die erste Zeile allein, Status und
  Knöpfe rücken darunter nach rechts.

## 3. Kopf-Icon oben links ohne weißen Kasten

Das Icon im grünen Balken saß in einem weißen Kästchen mit Rand und
Schatten. Auf der Waldseite stach das oben links deutlich hervor.
Hintergrund, Rahmen, Innenabstand und Schatten sind für `.brand-fox`
abgeschaltet, die runden Ecken (11px) bleiben – das Icon steht jetzt
frei auf dem grünen Balken.

> **Falls der weiße Rand bleibt:** dann steckt er nicht in der CSS,
> sondern in der Bilddatei `icon-192.png` selbst (weißer Rahmen
> mitgezeichnet). Dann müsste die PNG getauscht werden – schick sie mir,
> dann schneide ich den Rand frei.

## 4. Versionsschild

`sw.js` steht auf `digiboard-15.20`, die sechs `?v=`-Anhänge in
`index.html` auf `15200`. Das Schild im Banner liest sich daraus selbst
aus (seit 15.19).

---

# DigiBoard Next 15.21

Grundlage ist das Update 15.20.

## Wald und Baum

- natürlichere Rindenstruktur mit Licht- und Schattenseite
- stärker gegliedertes Blätterdach mit unterschiedlichen Grüntönen
- weichere Bodenschatten und Lichtflecken
- Kinderfotos bleiben die klarsten Blickpunkte
- Wachstumsanzeige fügt sich ruhiger in den Wald ein

## Waldwerkzeuge

- neue warme Werkzeugleiste im Stil einer leichten Wald-Werkbank
- jedes Werkzeug besitzt einen eigenen Farbakzent
- klarere Hover- und Tastaturzustände
- größere, eindeutigere Antippflächen
- eigene Beschriftung „Waldwerkzeuge“

## Paket

Das Paket enthält das vollständige Projekt einschließlich Bilder, Icons,
Offline-Dateien, Fotospeicher und Google-Sheets-Hilfe.

## Datenschutz

- keine Kinder-, Pass- oder Klassenfotos im Paket
- keine fest eingetragenen Foto-Adressen in den Standarddaten
- Fotos werden ausschließlich lokal auf dem jeweiligen Gerät gespeichert

---

# DigiBoard Next 15.23 – Staunender Klassenwald

## Neue Waldgrafik

- neue eigenständige, detailreiche Waldillustration
- offene und ruhige Mitte für Klassenbaum, Kinder und Tafel-Elemente
- Fuchsbau, Vogelhaus, Eichhörnchen, Laterne, Pilze, Eicheln, Blumen und Käfer
- wärmeres Licht, mehr Tiefe und natürlichere Materialien

## Entdeckungen

Drei kleine Lichtpunkte lassen sich anklicken:

- Fuchsbau
- Vogelhaus
- Lernlaterne

Jede Entdeckung zeigt eine kurze kindgerechte Waldnachricht.

## UI

- Klassenbaum hebt sich ruhiger von der neuen Kulisse ab
- Werkzeugleiste bleibt warm, klar und vollständig bedienbar
- reduzierte doppelte Deko-Elemente, damit der Wald lebendig, aber nicht chaotisch wirkt

## Datenschutz

- keine Kinder-, Pass- oder Klassenfotos enthalten
- Waldgrafik enthält keine Personen oder privaten Daten
- Kinderfotos bleiben ausschließlich im lokalen Fotospeicher des jeweiligen Geräts

---

# DigiBoard Next 15.24 – Tiefer Waldpfad

## Waldgrafik

- zusätzliche Tiefenstaffelung im entfernten Wald
- kleiner Bach und ferne Holzbrücke
- dezente Fuchsspuren am Waldweg
- versteckter Igel und kleine Schnecke
- feinere Moos-, Rinden-, Farn- und Blütentexturen
- Lichtstaub und Tautropfen für mehr Atmosphäre

## Abstimmung mit der Oberfläche

- ruhige, helle Mitte für Klassenbaum und Kinder
- Waldlicht und Nebel an die neue Illustration angepasst
- Baum mit etwas mehr Kontrast zur Tiefe der Landschaft
- Entdeckungslichter dezenter gestaltet

## Datenschutz

- keine Personen, Kinderfotos oder privaten Daten in der Waldgrafik
- keine Klassen- oder Passfotos im Paket
- Gerätefotos bleiben ausschließlich im lokalen Fotospeicher

---

# DigiBoard Next 15.25 – Handy-Ansicht & aufgeräumte Einstellungen

## Handy-Ansicht korrigiert

**Kopfleiste**
Die grüne Leiste hatte keinen Platz für die iOS-Statusleiste reserviert
(`black-translucent`). Dadurch lag die Uhrzeit über dem Schriftzug „DigiBoard“.
Jetzt wächst die Leiste um `env(safe-area-inset-top)` mit. Zusätzlich ist die
Pille „Offline bereit“ auf dem Handy ausgeblendet – sie hat die enge Zeile
gesprengt. Der Markenname wird bei Platzmangel sauber gekürzt.

**Kacheln „Mein Unterricht“ / „Auf der Tafel“**
Titel und Untertitel standen in einer Zeile („Mein UnterrichtFundus &
Vorbereiten“), weil `display:block` fehlte. Beide Kacheln sind jetzt
linksbündig zweizeilig.

**Reiter im Teambereich**
`.team-page-tabs` hatte in der Fundus-Ansicht eine feste Höhe von 38 px, auf
dem Handy aber nur eine Spalte – die drei Reiter lagen deshalb übereinander
(das „Geisterbild“ hinter „Füchse & Punkte“). Jetzt drei gleich breite Reiter
mit mitwachsender Höhe.

**Fach-Kacheln**
Der Stift-Knopf war nicht positioniert und rutschte unter die Kachel. Er sitzt
jetzt zusammen mit dem ×-Knopf innerhalb der Kachel.

**Suchfeld**
Doppelte Lupe entfernt (eigenes Symbol + native WebKit-Lupe), Platzhalter
gekürzt auf „Suchen – Titel oder Notiz“.

## Einstellungen neu geordnet

Die Einstellungszentrale ist jetzt in zwei klar getrennte Gruppen unterteilt:

**🦊 Meine Einstellungen** – nur für dich auf diesem Gerät
- Meine Ansicht & Werkzeuge
- Mein Unterricht (öffnet Fundus & Vorbereitung)
- Sichern & Laden

**👥 Allgemeine Einstellungen** – für die ganze Klasse und alle Kolleginnen
- Tagesinfos
- Essen & Geburtstag
- Aufgaben
- Wochenziel
- Füchse
- Stundenplan
- Klassenwelt
- **Kinderdaten aufs Handy** (neu)

## Neu: Kinderdaten aufs Handy

Der bereits vorhandene, aber nirgends eingebundene Export aus
`package-export.js` hat jetzt eine eigene Seite. Er erstellt eine Datei mit
Namen, Fotos und Geburtstagen und teilt sie über AirDrop, Mail oder iCloud
Drive. Die Kollegin öffnet die Datei einmal in DigiBoard.

`package-export.js` wird jetzt in `index.html` geladen und liegt im
Offline-Cache des Service Workers.

Auf der Seite steht ein Datenschutzhinweis: Die Datei enthält
personenbezogene Daten der Kinder und gehört nicht in private Messenger.

## Technisch

- `package-export.js` in `index.html` eingebunden
- `settingsShare` in `settingsSectionIds` und der Titelliste ergänzt
- Service-Worker-Version auf `digiboard-15.25` erhöht, Cache-Busting `?v=15250`
- alle Änderungen an `fixes.css` angehängt – bestehende Regeln unverändert

---

# DigiBoard Next 15.26 – Neues Logo, ruhige Kopfleiste, Fundus geradegerückt

## Neues Logo überall

Der Fuchs-Baum ersetzt das alte Symbol an allen Stellen. Aus der
Originaldatei wurden alle Größen frisch erzeugt, damit nichts unscharf wird:

| Datei | Zweck |
|---|---|
| `icon-192.png` / `icon-512.png` | Homescreen, App-Umschalter, Manifest |
| `icon-maskable-512.png` | Android – mit 14 % Sicherheitsrand, damit beim runden Zuschnitt nichts abgeschnitten wird |
| `apple-touch-icon.png` | iPhone-Homescreen |
| `intro-logo.png` | Begrüßungsbild beim Start |
| `brand-icon-96.png` (neu) | Kopfleiste – kleine Datei, scharf bei 32–36 px |

Der Rand des Originals wurde leicht beschnitten, damit der Baum die
Symbolfläche besser ausfüllt. In der Kopfleiste sitzt es jetzt in demselben
abgerundeten Quadrat wie die übrigen Symbole daneben.

## Kopfleiste

Der Textblock hatte drei Zeilen: Name, Untertitel und noch einmal
„● Offline bereit“. Dadurch war er höher als die Pillen daneben – deshalb
wirkte „DigiBoard“ nach oben verrutscht und die Leiste nicht gerade.

- Statuszeile unter dem Namen entfernt (die Information steht weiterhin in
  der Pille rechts)
- „Die digitale Klassentafel“ deutlich kleiner und ruhiger
- alles mittig auf einer Linie, auf Laptop und Handy gleich

## Wochenziel

Die Karte war unten abgeschnitten – die Ja/Nein-Knöpfe lagen außerhalb.
Ursache: Die Cockpit-Fläche hatte eine feste zweite Zeilenhöhe von 124 px
zusammen mit `overflow:hidden`.

- Karte wächst jetzt mit ihrem Inhalt
- zwei große Knöpfe, mit einem Tipp erledigt:
  **✓ Geschafft** und **✕ Nicht geschafft**

## Fundus & Vorbereitung

- **Statusleiste**: Der Vollbild-Dialog beginnt jetzt unterhalb von Uhrzeit
  und Dynamic Island (`env(safe-area-inset-top)`).
- **Grüner Zierstrich**: auf dem Handy entfernt. Die Knöpfe, die dort
  eigentlich draufsaßen, sind in der Handy-Ansicht ohnehin ausgeblendet –
  übrig blieb nur ein Strich ohne Funktion.
- **Überschrift** „📇 Fundus & Vorbereitung“ auf dem Handy kräftiger.
- **Fächer** rücken direkt unter die Überschrift.
- **Kein versehentliches Löschen mehr**: Das kleine × saß direkt auf der
  Zählerblase und wurde beim Antippen des Fachs leicht mitgetroffen. Es ist
  weg. Ein Fach wird jetzt über den Stift-Knopf gelöscht – dort steht im
  Icon-Dialog unten „🗑 Dieses Fach löschen“ (mit Rückfrage, und nur wenn
  mehr als ein Fach vorhanden ist).
- **Neuer Ordner** hängt nicht mehr lose herum: Die Ordnerreihe hat jetzt
  eine eigene helle Fläche, und die Anlege-Kachel ist als gestrichelter
  Rahmen klar als Aktion erkennbar. Untertitel jetzt „In diesem Fach anlegen“.

## Technisch

- Service-Worker-Version `digiboard-15.26`, `brand-icon-96.png` im Cache
- Cache-Busting `?v=15260`
- alle Stiländerungen wieder nur in `fixes.css` angehängt

---

# DigiBoard Next 15.27 – Kopfleiste und Fundus feinjustiert

> **Wichtig:** Auf dem Screenshot stand noch „NEXT 15.25 · AKTUELL“.
> Das heißt, auf digi-toolz.github.io lief noch die 15.25 – die Korrekturen
> aus 15.26 (× entfernt, neues Logo, Zierstrich weg) waren dort noch gar
> nicht angekommen. Diese Version enthält 15.26 **und** die neuen Punkte.

## Kopfleiste

- „DigiBoard“ ist nicht mehr fett gesetzt (850 → 720) und etwas kleiner.
- „Die digitale Klassentafel“ war auf dem Handy komplett ausgeblendet –
  dadurch stand der Name allein und wirkte umso wuchtiger. Der Untertitel
  ist wieder da, aber sehr zurückhaltend (8,5 px, halbfett, gekürzt wenn
  der Platz knapp wird).
- Das Logo zeigt den Fuchs-Baum. Alle Symbolpfade haben jetzt einen
  Versionsanhang (`?v=15270`), damit iOS und der Browser die alte Grafik
  nicht weiter aus dem Cache holen.
- Das Versionsschild liest die Nummer aus `sw.js` – es zeigt ab jetzt
  automatisch „NEXT 15.27 · AKTUELL“, sobald die Dateien hochgeladen sind.

## Fundus & Vorbereitung

- **Kein × mehr auf den Fach-Kacheln.** Löschen läuft über den Stift →
  im Icon-Dialog unten „🗑 Dieses Fach löschen“ (mit Rückfrage).
- **Stift-Knopf** lag als schwebender Knopf auf der Kachel und überdeckte
  das Fach-Symbol. Er steht jetzt als eigene schmale Spalte rechts neben
  der Kachel – nichts überlappt mehr.
- **„＋ Fach“ wieder in Warmorange**, wie vorher.
- **Ordnerreihe**: „Neuer Ordner“ war ein flacher grauer Balken über die
  volle Breite mit blauer Schrift. Jetzt gleich hohe Kacheln (auf dem Handy
  zwei nebeneinander), gestrichelter Rahmen als Anlege-Kachel, grüne statt
  blauer Schrift – eine Aktion, kein Link.
- Der grüne Zierstrich über der Überschrift ist auf dem Handy weg.
- Der Dialog beginnt unterhalb von Uhrzeit und Dynamic Island.

## Wenn das Logo trotzdem alt bleibt

iOS merkt sich das Homescreen-Symbol sehr hartnäckig. Falls es nach dem
Hochladen noch das alte zeigt: App vom Homescreen löschen, Safari einmal
neu laden, dann wieder „Zum Home-Bildschirm“.

---

# DigiBoard Next 15.28 – Klassenwald und Waldwerkzeuge

## Neu gestaltet

- Die vorhandene Waldlichtung ist jetzt die ruhige Hauptkulisse. Doppelte
  Emoji-Dekorationen und starke Farbfilter wurden entfernt.
- Der Klassenbaum nutzt nur noch die detailreiche Vektorgrafik
  `tree-canopy-10.4.svg`. Historische CSS-Kronen, Äste und Schatten werden
  nicht länger übereinander dargestellt.
- Kinderporträts, Namen, Klassenfortschritt, Schatztruhe, Waldgast und
  Glücksblatt bleiben vollständig interaktiv.
- Stundenplan, Essen, Tagesinfos, Geburtstag und Wochenziel haben ein
  gemeinsames Kartenraster mit ruhigen Ecken und Schatten erhalten.
- Die acht Waldwerkzeuge besitzen nun eine helle, klar beschriftete Leiste,
  größere Klickflächen, eigene Farbakzente und sichtbare Tastaturfokusse.
- „Wall of Fame“ heißt in der Bedienleiste jetzt verständlicher
  „Klassenbaum“.

## Aktualisierung und Offline-Betrieb

- Alle CSS-, JavaScript-, Manifest- und Icon-Verweise tragen den neuen
  Versionsanhang `?v=15280`.
- Der Service-Worker-Cache heißt `digiboard-15.28`; alte Caches werden beim
  Aktivieren automatisch entfernt.
- `intro-logo.png` wird nun ebenfalls für den Offline-Betrieb vorgeladen.
- Die PWA-ID ist relativ (`./`) und stimmt dadurch mit dem GitHub-Pages-Pfad
  `/digiboard/` überein.

## Installation

Den kompletten Inhalt dieses Ordners in das GitHub-Repository kopieren und
vorhandene Dateien ersetzen. Danach den erfolgreichen GitHub-Pages-Lauf
abwarten und die Seite einmal neu laden.

---

# DigiBoard Next 15.29 – Klassenwald im Gleichgewicht

## Feinschliff nach der Neocities-Ansicht

- Der Klassenbaum ist etwas kleiner und zeigt wieder mehr von Lichtung, Weg
  und Waldtiefe.
- Die Fortschrittskarte bleibt vollständig innerhalb des Baumbereichs. Eine
  übernommene feste Breite und Verschiebung aus älteren CSS-Regeln wurden
  vollständig zurückgesetzt.
- Das Klassenmotto sitzt als kleine Plakette am Begrüßungsfeld und überlagert
  weder Uhr noch Essenskarte.
- Der weiße Unterrichtsbalken wird ausgeblendet, solange keine aktuelle oder
  nächste Unterrichtsstunde vorhanden ist.
- Der Fuchs ist jetzt als runde Begleitfigur direkt mit der Begrüßung verbunden.
- Baumabschluss und Waldwerkzeuge haben mehr Abstand zueinander.

## Aktualisierung

- Alle Programmdateien und Icons tragen den Versionsanhang `?v=15290`.
- Der Offline-Cache heißt `digiboard-15.29`; ältere Programmstände werden beim
  nächsten erfolgreichen Laden automatisch entfernt.

---

# DigiBoard Next 15.30

## Repariert

- Kinderdaten lassen sich als eigene Datei sichern und wieder laden.
- Der Export fällt auf einen normalen Download zurück, wenn Teilen nicht verfügbar ist.
- Beim Laden von Kinderdaten bleiben Team, Fundus, Pins und persönliche Einstellungen erhalten.
- Ein leer gespeichertes Klassenteam wird automatisch mit den Grundprofilen repariert.
- Beim Wechsel des Wochentags überschreibt der Stundenplan nicht mehr versehentlich den neu gewählten Tag.

## Neu gestaltet

- Einheitliche, lesbare Sicherungsansicht für Kinderdaten und vollständige Backups.
- Stundenplanzeilen mit klar getrennten Feldern und Pausenhinweisen ohne Überlagerungen.
- Klassenteam-Auswahl als stabiles Kartenraster mit verständlichem Leerzustandsschutz.
- Im persönlichen Bereich gibt es auf großen Bildschirmen nur noch eine Kopfzeile und eine Navigation.
- Suche, Fach-Schaltfläche und Vorbereitungsformular im Fundus sind sauber ausgerichtet.

## Datenschutz

Kinderdaten-Dateien enthalten personenbezogene Daten und sollten ausschließlich dienstlich an berechtigte Kolleginnen und Kollegen weitergegeben werden.

---

# DigiBoard Next 15.31 – Der Wald lebt

Version 15.31 entwickelt den Klassenwald aus Version 15.30 weiter. Kinder-,
Stundenplan-, Team- und Backupdaten bleiben unverändert kompatibel.

## Klassenbaum

- Im Baum erscheint jetzt ein klarer Tagesstand: wie viele aktive Füchse heute
  bereits veröffentlicht wurden.
- Ein Fuchs kann nicht mehr mehrfach im Baum auftauchen. Pausierte Kinder werden
  im Klassenbaum nicht angezeigt.
- Der Baum reagiert sichtbar auf den Belohnungsfortschritt: ruhig, wachsend,
  sonnig oder in Feier-Stimmung.
- Fuchskarten lassen sich antippen und zeigen dann eindeutig „Heute im Baum ✓“.
- Ohne Veröffentlichung erklärt ein ruhiger Hinweis, wie die ersten Füchse in
  den Baum kommen.
- Tagesgast und Waldgeheimnisse bleiben für den aktuellen Tag als entdeckt
  markiert, auch wenn die Seite neu geladen wird.
- Der Fortschrittsweg zur Schatztruhe hat eine verständliche Beschriftung und
  ist für Hilfstechnik als Fortschrittsanzeige ausgezeichnet.

## Waldwerkzeuge

Die Werkzeugleiste zeigt nun unter jedem Werkzeug einen kurzen Live-Status:

- Anzahl der aktiven Füchse
- aktuelles Fach oder nächste Unterrichtsphase
- heutige Füchse im Klassenbaum
- aktuelle Uhrzeit
- Stand des Wochenziels
- besetzte Klassendienste
- Anzahl heutiger Vorbereitungen
- Dauer beziehungsweise Restzeit beim Aufräumen

Beim Antippen gibt jedes Werkzeug eine kurze, einheitliche Rückmeldung. Während
die Aufräummusik läuft, bleibt die neue Werkzeugstruktur erhalten und zeigt die
Restzeit direkt in der Leiste.

## Technik

- App-Version und Backupkennung: `15.31`
- Browser- und Icon-Version: `15310`
- Offline-Cache: `digiboard-15.31`

---

# DigiBoard Next 15.32 – Füchse schnell im Blick

Version 15.32 räumt die mobile Punkteansicht und die Navigation im persönlichen
Bereich auf. Die Daten aus Version 15.31 bleiben vollständig kompatibel.

## Füchse & Punkte

- Jede Fuchskarte hat jetzt sechs feste, gut erreichbare Aktionen: Grün, Gelb,
  Rot, Direkt-Grün, Verbot und Mehr.
- Die Farben sind eindeutig und können nicht mehr aus der Karte herausrutschen.
- „Verbot“ ist als eigener roter Knopf sichtbar und öffnet die schnelle Auswahl
  für Fußball-, Pausen-, iPad- oder andere Verbote.
- „Mehr“ öffnet das vollständige Fuchsprofil mit Notizfeld, Verlauf, laufenden
  Maßnahmen und weiteren Eintragsarten.
- Die Karten sind auf dem Handy deutlich kompakter; Namen und Punktestand
  bleiben trotzdem lesbar.
- Im grünen Kopf steht „Wall of Fame steuern“ jetzt vor dem Suchfeld.

## Persönliche Navigation

- Die obere Leiste mit „Zurück zur Tafel“, „Person wechseln“ und Einstellungen
  bleibt beim Scrollen am oberen Rand.
- Direkt darunter bleibt eine zweite Leiste mit nur noch zwei Hauptzielen:
  „Meine Übersicht“ und „Füchse & Punkte“.
- Der doppelte Navigationsknopf „Fundus & Vorbereitung“ wurde entfernt. Der
  Fundus bleibt aus der Übersicht und über die Unterrichtsbereiche erreichbar.
- Die Fundus-Überschrift wurde als ruhige Inhaltskarte mit kurzer Erklärung
  gestaltet; doppelte Bedienelemente erscheinen dort nicht mehr.

## Technik

- App-Version und Backupkennung: `15.32`
- Browser- und Icon-Version: `15320`
- Offline-Cache: `digiboard-15.32`

---

# DigiBoard Next 15.33 – Ruhiger Fundus

## Navigation aufgeräumt

- „Zurück zur Tafel“, „Person wechseln“ und Einstellungen erscheinen nur noch einmal in der festen oberen Leiste.
- Die zusätzliche Fundus-Zurück-Schaltfläche sowie die schwebenden Zahnrad-/Zurück-Knöpfe wurden entfernt.
- Im persönlichen Bereich bleiben oben nur „Meine Übersicht“ und „Füchse & Punkte“. Der Fundus wird weiterhin über „Fundus & Vorbereitung“ in der Übersicht geöffnet.

## Fächer ruhiger bearbeiten

- Die einzelnen Bleistiftkästchen zwischen den Fachkarten wurden entfernt.
- Neben der Suche gibt es jetzt genau einen Knopf für das aktive Fach.
- Dort lassen sich Fachname und Symbol gemeinsam ändern oder das Fach löschen.
- „+ Fach“ bleibt als eigener, gut erreichbarer Knopf daneben.

## Einheitliches Layout

- Fachkarten stehen in einem gleichmäßigen Raster ohne dazwischenliegende Bearbeitungskästchen.
- Kopfzeile, Suche und Aktionen sind auf Desktop und Handy klar geordnet.
- Alte JavaScript-Sonderregeln, die Knöpfe später wieder verschoben oder doppelt eingeblendet haben, wurden entfernt.

---

# DigiBoard Next 15.34 – Die Waldkarte

## Neue Waldkarte am Klassenbaum

- Der Baum besitzt jetzt einen ruhigen Knopf „Waldkarte“.
- Die Karte zeigt alle fünf Baumstufen vom jungen Baum bis zum goldenen Waldbaum.
- Aktuelle Stufe und bereits erreichte Stufen sind sofort erkennbar.
- Blätterstand, Füchse im Baum und der Weg zur nächsten Baumstufe stehen gemeinsam an einer Stelle.

## Entdeckungen des Tages

- Die Waldkarte zählt den täglichen Waldgast, das Glücksblatt und die drei Waldgeheimnisse.
- Neue Funde aktualisieren den Zähler direkt.
- Der Schatztruhenstand wird auch in der Waldkarte angezeigt.

## Waldwerkzeuge verbessert

- Die Werkzeugleiste zeigt weiterhin ihre Live-Werte und markiert Werkzeuge mit aktuellem Status dezent.
- Mit Pfeiltasten kann jetzt von Werkzeug zu Werkzeug gewechselt werden.
- Pos1 und Ende springen zum ersten beziehungsweise letzten sichtbaren Waldwerkzeug.
- Die vorhandenen Touch-, Maus- und Tastaturfunktionen bleiben erhalten.

---

# DigiBoard Next 15.35 – Begrüßung der Woche

## Neue Headline

- Die deutsche Hauptbegrüßung ist klar, freundlich und weniger dominant gestaltet.
- Der Klassenname beziehungsweise „Füchse“ bleibt optisch hervorgehoben.
- Die Begrüßung passt sich automatisch an die Tageszeit an.

## Tageszeiten

- Morgens: „Guten Morgen“
- Mittags: „Guten Tag“
- Nachmittags: „Schönen Nachmittag“
- Abends: „Guten Abend“
- Die Anzeige aktualisiert sich auch bei einer geöffneten Tafel automatisch.

## Wochensprache

- Unter der deutschen Headline steht die passende Begrüßung in der Wochensprache.
- Die Sprache wechselt jeden Montag automatisch weiter.
- Kalenderwoche, Sprache und Tageszeit werden dezent angezeigt.
- Zwölf Sprachen enthalten passende Formen für Morgen, Mittag, Nachmittag und Abend.
- „Anhören“ spricht immer die aktuell sichtbare Übersetzung.
- „Sprache“ zeigt bei Bedarf sofort die nächste Sprache; beim nächsten Laden gilt wieder die automatische Wochensprache.

---

# DigiBoard Next 15.36 – Flexible Füchse

## Korrigiert

- Die braune Zierleiste über den Favoriten wurde vollständig entfernt.
- Alle sechs Aktionen einer Fuchskarte bleiben sichtbar: Grün, Gelb, Rot,
  Stern, Verbot und Mehr.

## Neu

- Die Kinderansicht berechnet Spaltenzahl, Zeilenanzahl und Kartenhöhe aus
  dem tatsächlich verfügbaren Platz.
- Auf großen Laptops werden bis zu fünf Spalten genutzt.
- Auf iPads passt sich das Raster automatisch an Hoch- und Querformat an.
- Die Karten verteilen sich über die verfügbare Höhe, statt nur oben in
  festen 56-Pixel-Zeilen zu stehen.
- Auf dem Telefon bleibt die bewährte einspaltige, touchfreundliche Ansicht.

## Installation auf Neocities

Den Inhalt dieses Ordners beziehungsweise der ZIP-Datei vollständig in das
Neocities-Dateiverzeichnis hochladen und vorhandene Dateien ersetzen.

---

# DigiBoard Next 15.37 – Backup-Rettung

## Korrigiert

- „Kinderdaten oder Backup laden“ erkennt jetzt auch die bisherige allgemeine
  DigiBoard-Gesamtsicherung.
- Ebenfalls unterstützt werden ältere Klassenpakete und sehr alte Sicherungen
  ohne Format-Kennung.
- Aus einer Gesamtsicherung werden in diesem Bereich bewusst nur Namen, Fotos,
  Geburtstage und die Kinderlisten-Verwaltung übernommen.
- Fundus, Team, Pins und persönliche Einstellungen des aktuellen Geräts
  bleiben beim Kinderimport unverändert.

## Wichtig

Die vorhandene allgemeine Backupdatei muss nicht umgewandelt werden. Sie kann
direkt über „Kinderdaten oder Backup laden“ ausgewählt werden.

---

# DigiBoard Next 15.38 – Lebendiger Klassenwald

## Klassenbaum

- Am Baumschild öffnet „Baum groß“ direkt eine ruhige Großansicht.
- Die automatisch berechneten Kinderpositionen gewinnen jetzt zuverlässig
  gegen alte Layoutregeln. Auch ein voller Baum mit bis zu 25 Füchsen bleibt
  gleichmäßig verteilt.
- Die Fotogröße passt sich an die Anzahl der Füchse an.
- Die fünf Baumstufen unterscheiden sich nun sichtbar durch Lichtpunkte,
  Farbstimmung, Pflanzen und Blüten am Waldboden.
- Die vorhandene Waldkarte, Schatztruhe und Entdeckungen bleiben erhalten.

## Waldwerkzeuge

- Die Werkzeugleiste verteilt nur die tatsächlich sichtbaren Werkzeuge und
  lässt dadurch keine leeren Plätze zurück.
- Live-Status, Farbakzent und aktiver Zustand sind klarer lesbar.
- Auf iPads werden Symbole und Beschriftungen kompakt, aber weiterhin als
  große Touch-Ziele angezeigt.
- Auf dem Mac lassen sich die sichtbaren Werkzeuge mit `⌥1` bis `⌥8` öffnen.
  Die jeweilige Tastenkombination steht dezent oben am Werkzeug.

## Beibehalten

- Der kompatible Backup- und Kinderdatenimport aus Version 15.37.
- Die flexible Kinderansicht aus Version 15.36.

---

# DigiBoard Next 15.39 – Waldtiefe & Hintergrundbaum

- Der große Klassenbaum ist nun eine eigene Bildebene. Farb- und Jahreszeitfilter verändern dadurch keine Kinderfotos mehr.
- Hinter dem Klassenbaum steht eine gestaffelte, ruhige Baumgruppe mit Waldboden und Lichtnebel.
- Morgen, Mittag, Nachmittag und Abend bekommen eigenes, dezentes Licht im Hintergrundwald.
- Frühling, Herbst und Winter ergänzen Blüten, fallende Blätter beziehungsweise Schnee; der Unterrichtsinhalt bleibt gut lesbar.
- Baumstufen verändern weiterhin die Wirkung des Baums, aber nicht die Portraitkarten.
- Die bestehende Kinderdaten- und Vollbackup-Kompatibilität aus 15.37 bleibt erhalten.

---

# DigiBoard Next 15.40 – ruhige Übersicht & kompakter Gruß

- „Meine Fächer“ und die heutigen Fächer stehen auf Laptop und Tablet sauber in einer gemeinsamen Zeile.
- Die Fächerchips können nicht mehr unter Überschrift oder Fachkarten rutschen.
- Die rechte persönliche Übersicht teilt den verfügbaren Platz flexibel zwischen „Füchse im Blick“ und Wochenziel auf.
- Das Wochenziel wird nicht mehr nach oben verschoben oder am unteren Rand abgeschnitten; Ja und Nein bleiben erreichbar.
- Auf dem Handy erscheint nur noch ein kompakter Gruß wie „Guten Morgen, Füchse!“ mit kleinem Datum.
- Übersetzung, Sprachknöpfe und Tagesmotto nehmen auf dem Handy keinen zusätzlichen Platz mehr ein; auf Tablet und Laptop bleiben sie erhalten.
- Wald, Hintergrundbaum, Kinderdaten-Import und Gesamtbackup-Kompatibilität aus 15.39 bleiben vollständig erhalten.

---

# DigiBoard Next 15.41 – eine gemeinsame persönliche Leiste

- „Zurück zur Tafel“, „Person wechseln“, „Meine Übersicht“, „Alle Füchse“ und Einstellungen stehen jetzt in einer einzigen ruhigen Leiste.
- Der Personenname wird nicht mehr doppelt gezeigt.
- Die zweite Reiterzeile und die Favoriten im oberen grünen Kopf wurden entfernt; die gut erreichbaren Favoriten unten bleiben erhalten.
- Die Leiste bleibt beim Scrollen oben und wird auf dem Handy platzsparend mit eindeutigen Symbolknöpfen dargestellt.
- Das Wochenziel hat mehr Höhe und Abstand zur unteren Kante.
- Der vollständige Zieltext wird ohne Zwei-Zeilen-Begrenzung angezeigt.
- Wald, Hintergrundbaum, Werkzeuge, Kinderansicht und die Import-Kompatibilität älterer Gesamtbackups bleiben vollständig erhalten.

---

# DigiBoard Next 15.42 – mehr Tiefe im Klassenwald

- Die reichere Waldlichtung mit Weg, Bach, Laterne, Pilzen und kleinen Waldtieren ist wieder der feste Hintergrund.
- Der Klassenbaum steht jetzt sichtbar in einer Lichtung und wirkt nicht mehr wie eine einzelne aufgesetzte Grafik.
- Hinter dem Baum liegen zwei ruhige Tiefenebenen aus Nadelwald und Laubbaumgruppe.
- Lichtflecken in der Krone lassen Blätter und Kinderfotos freundlicher hervortreten, ohne die Namen zu überdecken.
- Farne, Gräser und Steine verbinden Stamm und Waldboden natürlicher.
- Morgen, Mittag, Nachmittag und Abend verändern Licht und Tiefe dezent.
- Herbst und Winter färben nur Baum- und Waldebenen; Kinderfotos bleiben unverändert.
- Große Baumansicht, Baumstufen, Waldkarte, Schatztruhe und alle Werkzeuge bleiben vollständig funktionsfähig.
- Der einheitliche persönliche Kopf aus 15.41 und die Backup-Kompatibilität älterer Versionen bleiben erhalten.

---

# DigiBoard Next 15.43 – sicher auf Handy und Laptop

- iPhone-Kopfzeilen halten nun einen festen Sicherheitsabstand zu Uhrzeit,
  Dynamic Island und Statussymbolen ein.
- Zurück, Person wechseln, „Meine Übersicht“, „Alle Füchse“ und Einstellungen
  bleiben im persönlichen Bereich in einer einzigen festen Zeile. Das alte,
  darüberliegende Schließen-X wird dort ausgeblendet.
- Der Pauseknopf verschwindet aus der Handy-Kopfzeile.
- Einstellungs-, Kinderdaten- und Backupseiten lassen sich auf Telefon, iPad
  und Laptop wieder bis zum letzten Knopf scrollen.
- Die mobile Punktegalerie zeigt pro Fuchs eine ruhige Karte mit Foto, Status
  und drei eindeutigen Farbknöpfen. Notizen, Direkt-Grün, Verbote und
  Korrekturen liegen gesammelt unter „Weitere Optionen“.
- Fotos werden bei blockierter iPhone-Datenbank nicht mehr als unbrauchbarer
  Verweis gespeichert. In diesem Fall bleibt das vollständige Bild direkt im
  DigiBoard-Zustand erhalten.
- Kinderdaten- und Gesamtbackups verwenden auf iPhone und iPad zuverlässiger
  den Teilen-Dialog und zeichnen nach dem Import alle Fotoansichten neu.
- Klassenwald, Baum, Lichtung und Tiefenwirkung aus 15.42 bleiben vollständig
  erhalten; weiche Lichtpunkte verbinden Lichtung und Baumkrone noch etwas
  natürlicher.

