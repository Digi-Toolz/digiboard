# DigiBoard Next 15.57 – Warum 15.56 nicht gewirkt hat

## Mein Fehler

Ich hatte mich darauf verlassen, dass eine **später geladene** Datei
gewinnt. Das stimmt aber nur bei **gleicher Spezifität**. In diesem Projekt
stehen die entscheidenden Regeln mit **verdoppelten Klassen** da:

```css
html body #teamDialog #teamWorkspace.materials-mode
  .material-head-title.material-head-title { display:grid; … }
```

Die Klasse zweimal zu nennen ändert nichts daran, *was* getroffen wird –
aber es hebt die Spezifität um eine Stufe. Meine Regel mit einfacher Klasse
verliert dagegen, egal an welcher Stelle sie steht.

Davon gibt es **166 in `fixes.css`** und **16 in `fundus-15-33.css`** – einer
Datei, die ich bis dahin nie geöffnet hatte. Und genau eine Zeile darin,
`grid-template-columns:auto minmax(0,1fr)`, stellte Überschrift und
Erklärung nebeneinander und quetschte „Fächer, Ordner und vorbereitete
Stunden an einem Ort" in die Handtuchspalte.

## Und mein Prüfstand hat es zugedeckt

Er meldete „Fundus-Kopf steht untereinander ✓", während im Browser das
Gegenteil zu sehen war. Zwei Fehler auf einmal:

1. Die Prüfung hatte einen **Ausweichselektor**
   (`$('#teamDialog .material-head-title') || $('.material-head-title')`).
   Der zweite Teil traf notfalls irgendein Element – Hauptsache grün.
2. **jsdom rechnet die Spezifität nicht wie ein Browser.** Für die
   verdoppelten Klassen kam dort ein anderer Sieger heraus als in Safari.

Ein Prüfstand, der falsche Entwarnung gibt, ist schlimmer als keiner. Also
hat er einen **Kaskadenwächter** bekommen: Er liest alle 21 Gestaltungs-
dateien, entfernt zuerst die Kommentare, sammelt jede Regel, die eine
Eigenschaft für ein Ziel setzt, rechnet die Spezifität selbst aus und sagt,
**wer wirklich gewinnt** – Datei und Wert. Kein jsdom mehr im Spiel.

Er hat sofort einen Fehler in sich selbst gefunden: Mehrzeilige Selektoren
zerschnitt er an den Zeilenumbrüchen, warf den `html body #teamDialog …`-
Vorspann weg und rechnete 300 statt 20402. Auch das ist behoben – und
zusätzlich zählt er nur noch Regeln, bei denen das Ziel der **letzte** Teil
des Selektors ist. Sonst galt `.material-library-panel .material-head-icon-
button{width:34px}` als „Breite des Panels: 34 Pixel".

## Was das Fenster jetzt macht

Statt einer weiteren Schicht Übermalung ist das für dieses eine Fenster
schon der **Aufräumschritt**: Erst werden die widersprechenden Regeln
stillgelegt, dann wird das Fenster **einmal** beschrieben.

Der Kniff dabei ist bewusst simpel: Das Fenster wird von einem Raster
(`grid`) auf eine Spalte (`flex`) umgestellt. Damit werden sämtliche
`grid-area:`- und `grid-template-rows:`-Angaben der alten Dateien
wirkungslos – die gelten nur in einem Raster. Man muss sie nicht einzeln
jagen.

- **Kopf:** Titel oben, Erklärung darunter, Höhe nach Inhalt.
- **Panel:** volle Fensterbreite (stand vorher nur so breit wie sein Inhalt –
  daher die große leere Fläche rechts).
- **Arbeitsbereich:** wächst mit. Die Panel-Rasterzeile endete auf
  `minmax(0,1fr)` – „nimm den Rest der Höhe, und wenn der Inhalt größer ist,
  schneide ihn ab". Daher die Scrollbalken im Scrollbalken.
- **Kacheln und Reiter** fließen und brechen um.
- **Schrift** durchgehend ≥ 10 Pixel.
- **Handy:** Kopfzeile ist eine normale, umbrechende Reihe; nichts schwebt
  mehr über etwas anderem; Abstand zur iPhone-Statusleiste.

## Prüfergebnis

```
node pruefstand.mjs .          79 von 79 bestanden

Fundus-Fenster: wer gewinnt wirklich? (15.57)
  .material-head-title · display    fundus-fenster-15-57.css „block"   (20402)
  .material-head · display          fundus-fenster-15-57.css „block"   (20402)
  .material-head · min-height       fundus-fenster-15-57.css „0"       (20402)
  .material-library-panel · width   fundus-fenster-15-57.css „100%"    (20402)
  .material-workspace · height      fundus-fenster-15-57.css „auto"    (20402)
  .material-item-list · overflow    fundus-fenster-15-57.css „visible" (20402)
  .material-drawer-tabs · height    fundus-fenster-15-57.css „auto"    (20402)
  die alte Zwei-Spalten-Regel gewinnt nicht mehr
```

Diesmal steht neben jedem Haken, **welche Datei mit welchem Wert und welcher
Spezifität gewinnt**. Wenn es im Browser wieder anders aussieht, ist das eine
Aussage, die man direkt widerlegen kann – kein „müsste eigentlich".

## Was bleibt

Die dreifachen Klassen in dieser Datei sind kein guter CSS-Stil. Sie sind
die einzige Möglichkeit, ohne Eingriff in die alten Dateien zu gewinnen.
Beim endgültigen Aufräumen verschwinden sie zusammen mit den alten Blöcken.

Der Kaskadenwächter kann übrigens jedes Ziel prüfen. Sag mir das nächste
Fenster, dann sehe ich vorher nach, wer dort gewinnt – statt zu bauen und zu
hoffen.
