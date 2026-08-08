# DigiBoard Next 15.55 – Punkte & Beobachtungen: eine Zeile pro Kind

## Was schief lief

Auf deinem Bildschirmfoto teilten sich Foto, Name und sechs Knöpfe eine Karte
von rund 155 Pixeln Höhe – und trotzdem war alles abgeschnitten: „An…",
„Ha…", „Luk…" bei den Namen, „Ste…", „Ver…", „M…" bei den Knöpfen.
Gleichzeitig stand unter jedem Namen eine handbreit Leerfläche.

Der Grund steckte in `fitResponsiveStudentGrid`: Die Funktion verteilte die
verfügbare **Höhe** auf die Zeilen. Bei wenigen Zeilen wuchsen die Karten
immer weiter, bis unten Luft übrig war. Der Inhalt wurde aber in der
**Breite** zusammengequetscht, bis Namen und Beschriftungen abschnitten.

Höhe verschenkt, Breite knapp – und beides gleichzeitig.

## Was jetzt da steht

```
┌────────────────────────────────────────────────┐
│ (o) André Schmidt      ● ● ● ★ ⊘ •••           │
│     0 · keine Maßnahme                         │
└────────────────────────────────────────────────┘
```

- **Foto als 28-Pixel-Kreis** statt als Kachel. Ein Kreis liest sich als
  Person, eine Kachel als Bildfläche – und braucht weniger Platz für
  dieselbe Erkennbarkeit.
- **Name ungekürzt**, links neben dem Foto, in einer Zeile mit den Knöpfen.
- **Knöpfe ausgeschrieben**: „Grün · Gelb · Rot · Stern · Verbot · Mehr".
  Die Schrift stand auf 6,5 Pixel – daher „Ste…" und „Ver…". Jetzt 8 Pixel
  bei fester Knopfbreite von 44 Pixeln, da passt „Verbot" vollständig hinein.
- **Punktestand von 7 auf 9,5 Pixel.** 7 Pixel sind für eine Lehrkraft im
  Stehen nicht lesbar.
- **Kartenhöhe fest bei 58 statt 155 Pixeln.** Die Karte bläht sich nicht
  mehr auf; was nicht auf den Schirm passt, wird gescrollt. Das ist
  ehrlicher als Leerraum.

Bei 620 Pixeln Listenhöhe und drei Spalten sind das **27 Kinder ohne
Scrollen statt vorher 12**.

**Schmale Fenster (unter 900 Pixel):** dort rutschen die Knöpfe wieder unter
den Namen und nehmen die volle Breite ein – zwei Zeilen, 86 Pixel hoch. Auf
dem Handy wäre eine 44-Pixel-Spalte sonst zu eng zum Treffen.

## Prüfergebnis

Zwölf neue Prüfungen, darunter zwei, die nicht nur das Aussehen, sondern die
**Rechnung** prüfen: Die Listenbreite wird gestellt, `fitResponsiveStudentGrid`
läuft wirklich, und danach wird nachgesehen, welche Kartenhöhe und wie viele
Spalten herauskommen.

```
node pruefstand.mjs .

Klassenteam-Karten ........................ 7 von 7
Meine Auswahl (Werkzeuge) ................. 5 von 5
Positionsschalter wirklich schalten ....... 5 von 5
Doppelter Zurück-Knopf .................... 2 von 2
Ausgeblendete Bereiche (Regression 15.48) . 2 von 2
Dateifelder antippbar (15.47) ............. 4 von 4
Kinderfotos: Feld und Meldung (15.53) .... 11 von 11
Walddesign frisch (15.54) ................ 15 von 15
Punkte & Beobachtungen (15.55) ........... 12 von 12
                                    ── 66 von 66 ──
```

## Eine Prüfung, die sich selbst im Weg stand

Die Prüfung aus 15.54 hieß „waldfrisch wird als **letzte** Gestaltungsdatei
geladen" – und schlug sofort fehl, als `punkteliste-15-55.css` dazukam.
Gemeint war nie „die letzte", sondern die eigentliche Bedingung: Sie muss
**hinter den Dateien stehen, deren Regeln sie überschreibt**. Bei gleicher
Spezifität mit `!important` entscheidet allein die Reihenfolge. Die Prüfung
sagt jetzt das, was sie meint – und gilt auch für die nächste Datei.

## Zurückdrehen

Wie immer: die Zeile

```html
<link rel="stylesheet" href="punkteliste-15-55.css?v=15550" />
```

in `index.html` auskommentieren. Für die Kartenhöhe zusätzlich in `app.js`
in `fitResponsiveStudentGrid` die Zeile `const cardHeight=schmal?86:58;`
wieder gegen die alte Rechnung tauschen (steht im Kommentar darüber).
