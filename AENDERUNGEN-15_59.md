# DigiBoard Next 15.59 – Schubladen und kurze Balken

Zwei Beschwerden, eine Ursache: volle Fensterbreite für Inhalt, der ein
Drittel davon braucht.

## Die Werkzeugbalken werden Karten

Jede Zeile in „Meine Auswahl" lief über die ganze Fensterbreite – rund 1800
Pixel für einen Namen, eine Adresse und ein paar Schalter. Rechts daneben:
nichts. Bei acht Werkzeugen musste man dafür scrollen.

Der Grund war schlicht: **Die Liste hatte gar keine eigene Regel.** Die
Karten standen als Blöcke untereinander, weil ihnen nie jemand etwas
anderes gesagt hat. Jetzt ist `#teachingToolManageList` ein Raster, das
sich nach der Fensterbreite richtet (`auto-fill`, mindestens 310 Pixel) –
aus vier langen Balken werden acht handliche Karten nebeneinander. Dazu
kleinere Schalter (30 statt 36 Pixel hoch), engere Abstände, und die
Pfeilknöpfe ↑ ↓ sind quadratisch statt wortbreit.

## Die Einstellungszentrale bekommt zwei Fächer

Vorher standen zwei Überschriften im Nichts und darunter neun gleich
aussehende Kacheln. Ob eine Einstellung nur das eigene Gerät betrifft oder
die ganze Klasse, **stand** zwar da – aber man musste es lesen.

Jetzt ist es zu **sehen**: zwei geschlossene Fächer mit eigener Farbe,
eigener Griffleiste und einem Rahmen, der zeigt, wo sie anfangen und
aufhören.

| | Farbe | Bedeutung |
|---|---|---|
| 🦊 Meine Einstellungen | grün (`#f2f8ed`) | nur dieses Gerät |
| 👥 Allgemeine Einstellungen | blau (`#f1f5fc`) | ganze Klasse |

Der Kopf jedes Fachs ist die Griffleiste – farbig abgesetzt, mit einem
angedeuteten Griff rechts. Der Griff ist reine Zierde und steht deshalb als
`::after` mit `pointer-events:none` da; er darf keinen Klick abfangen. Auf
dem Handy verschwindet er, dort zählt der Platz mehr als die Anspielung.

Die Kacheln sitzen jetzt **im** Fach statt daneben, richten sich nach der
Fensterbreite (statt starrer drei Spalten) und tragen die Farbe ihres Fachs
im Symbolfeld und im Pfeil. Man sieht auf einen Blick, in welcher Schublade
man gerade greift.

## Diesmal vorher gerechnet

Der Kaskadenwächter hat gesagt, wer heute gewinnt, **bevor** ich geschrieben
habe:

```
  .settings-home-grid     10202 !  fixes.css                     repeat(3,…)
  .werkzeug-karte-v1551   10102 !  team-und-werkzeuge-15-51.css  38px …
```

Deshalb stehen in der neuen Datei dreifache bzw. doppelte Klassen. Danach
nachgerechnet:

```
  .settings-home-grid · grid-template-columns   schubladen-15-59.css (10302)
  .settings-group-head · background             schubladen-15-59.css (10302)
  #teachingToolManageList · display             schubladen-15-59.css (20002)
  .werkzeug-karte-v1551 · padding               schubladen-15-59.css (10202)
```

## Prüfergebnis

```
node pruefstand.mjs .          120 von 120 bestanden
```

16 neue Prüfungen. Zwei davon prüfen nicht das Aussehen, sondern die
**Aussage**: dass privat und gemeinsam wirklich verschiedene Farben haben
(`#f2f8ed` vs `#f1f5fc`) und dass das jeweilige Fach die richtige davon
zieht. Eine farbliche Kennzeichnung, die beide Fächer gleich einfärbt, wäre
sonst still durchgegangen.
