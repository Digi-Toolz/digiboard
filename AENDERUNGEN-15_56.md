# DigiBoard Next 15.56 – Fenster zeigen eine ganze Seite

Schritt 1 von zwei. Hier sind die kaputten Stellen repariert; der
Aufräumschritt kommt separat (siehe unten).

## Der Fundus-Kopf lief aus dem Rahmen

`.material-head-title` stand auf `display:flex` – Überschrift und Erklärung
lagen also **nebeneinander in einer Reihe**. „🗂️ Fundus & Vorbereitung" nahm
sich die Breite, für „Fächer, Ordner und vorbereitete Stunden an einem Ort"
blieb eine Handtuchspalte, in der jedes zweite Wort umbrach. Der Kopf war
zugleich auf `min-height:64px` festgenagelt – der Text lief unten heraus und
über die Kacheln.

Jetzt: Titel oben, Erklärung darunter, Kopfhöhe richtet sich nach dem Inhalt.

## Die Fenster waren auf eine feste Höhe genagelt

```css
height:min(720px,94vh); overflow:hidden
```

Die Höhe stand fest, **bevor** klar war, wie viel Inhalt es gibt. Passte es
nicht, wurde nichts größer – es wurde abgeschnitten. Um das zu kaschieren,
schrumpften Schriften auf 7, 8 und 9 Pixel, und jeder Innenbereich bekam
einen eigenen Scrollbalken. Auf deinem Bildschirmfoto sieht man drei
Scrollbalken gleichzeitig und trotzdem abgeschnittenen Text.

Jetzt umgekehrt, wie von dir gewählt: **Das Fenster ist so hoch wie sein
Inhalt, höchstens 92 % des Bildschirms. Reicht das nicht, scrollt EIN
Fenster** – nicht fünf Kästchen ineinander.

Und weil nichts mehr gequetscht werden muss, dürfen die Schriften wieder
lesbar sein: Erklärungen 11 statt 7 Pixel, Fächernamen 12 statt 10, Eingabe-
felder 12 statt 8. Die Fächerreiter standen in sechs starren Spalten auf
58 Pixel Höhe – jetzt fließen sie und brechen um. Die Materialkacheln waren
auf 2×2 festgesetzt und schnitten den Rest ab; jetzt fließen sie ebenfalls.

## Handy: der Kopf entwirrt sich

Die Kopfzeile stand auf fester Höhe (46 Pixel) mit `padding-right:66px` als
Platzhalter für Knöpfe, die absolut **darüber** schwebten. Sobald ein Titel
dazukam, lagen Zurück-Knopf, Titel, „Person wechseln" und Zahnrad
übereinander – genau das Bild vom iPhone.

Jetzt eine normale, umbrechende Zeile: kein Element schwebt mehr über einem
anderen. Zusätzlich hält der obere Rand Abstand zur iPhone-Statusleiste
(`env(safe-area-inset-top)`) – deshalb saß der Zurück-Knopf vorher auf der
Uhrzeit.

## Die Werkzeugleiste war zu weiß

In 15.54 hatte ich reines Papier genommen (255,255,252). Vor einem gemalten
Wald wirkt das wie ein aufgeklebter Zettel. Jetzt dieselbe Helligkeit, aber
mit einem Hauch Blattgrün darin – die Leiste liegt **im** Bild statt darauf.
Das gilt automatisch auch für Schild, Wochenziel und Begrüßung, weil sie sich
dieselben Farbwerte teilen.

## Prüfergebnis

```
node pruefstand.mjs .          78 von 78 bestanden
```

Zwölf neue Prüfungen, darunter drei, die eine Rückkehr des alten Verhaltens
verhindern: keine Schrift unter 10 Pixel, kein `display:flex` im Fundus-Kopf,
keine feste Kopfhöhe.

---

## Was noch offen ist

**Schritt 2 – Aufräumen.** Die eigentliche Ursache ist nicht behoben, sondern
umschifft: 20 CSS-Dateien mit rund 14.000 Zeilen überschreiben einander mit
`!important`. Allein `.material-head` wird an sechs Stellen unterschiedlich
gesetzt, `.forest-tool-belt` an vier. Jede neue Datei – auch diese – macht
das Knäuel größer, nicht kleiner.

Der Aufräumschritt wäre: **eine** Fenster-Grundlage, die Kopf, Inhalt,
Fußzeile, Höhen und Abstände an genau einer Stelle festlegt, und die
widersprechenden alten Blöcke werden stillgelegt statt überschrieben. Danach
ist „moderner und übersichtlicher" auch wirklich machbar – im jetzigen
Zustand würde jede Gestaltungsänderung an fünf Stellen gegen sich selbst
arbeiten.

**Was ich dafür brauche:** eine Runde, in der du mir sagst, welche Fenster
dir am wichtigsten sind. Dann räume ich diese zuerst auf, statt alle
gleichzeitig anzufassen – und du kannst nach jedem Fenster nachsehen, ob es
besser geworden ist.
