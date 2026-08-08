# DigiBoard Next 15.54 – Walddesign: frisch statt süß

## Der Kitsch saß nicht da, wo ich ihn vermutet habe

Mein erster Griff war, die Emoji-Aufkleber über dem gemalten Wald
auszublenden: Eichhörnchen, Pilze, Laterne, Vogelhaus, Reh, Hase, Biene,
Blumen – rund 25 Stück. Der Prüfstand meldete zurück: **alle längst
unsichtbar.** In `waldtiefe-15-42.css` steht seit Langem eine einzige Zeile,
die den ganzen Stapel abräumt:

```css
html body .app-shell .forest-ambient>span{display:none!important}
```

Ich hatte also Unsichtbares gestaltet. Der Kitsch saß woanders: in der
**Bedienung**. Geschnitztes Holz, Gold, dunkelbraune Ränder und harte
Sockelkanten (`0 8px 0 …`) – jede Fläche ein Klotz, alles lauter als das
Gemälde dahinter.

## Was jetzt anders aussieht

**Licht.** Der Hintergrund war sehr warm und sehr gelb (`#dfe9a4` plus drei
gelbe Verläufe) und wirkte dadurch sirupartig. Jetzt liegt ein heller Dunst
über dem Himmel, ein Hauch Morgenkühle darunter und eine sanfte Abdunklung am
Boden – dieselbe Malerei, klarere Luft. Bewusst **ohne `filter`** auf der
Szene: ein Filter dort würde auch die Kinderfotos einfärben. Dieser Fehler
steckte schon einmal drin und wurde in 15.39 mühsam ausgebaut.

**Bedienung.** Helles, leicht mattiertes Papier statt Holz. Ein einziger
weicher Schatten trägt die Leiste; die Knöpfe heben sich nur noch um ein Grad
ab, statt als Klötzchen mit Sockel dazustehen. Kein Gold, keine Textschatten,
dünne Ränder. Farbe hat genau **ein** Element: der Fuchseingang. Ein Akzent
wirkt nur, solange er allein steht. Dieselbe Sprache bekommen Waldhelden-
Schild, Wochenziel, Tagesinfos und die Begrüßung.

**Leben.** Weil die Szene durch die alte Sammelregel vollkommen bewegungslos
war, kommen genau drei Dinge zurück: der Fuchs – es ist die Fuchsklasse – und
zwei Schmetterlinge, kleiner, blasser und deutlich langsamer als früher. So
viel, dass die Lichtung lebt; so wenig, dass sie nicht zappelt. Auf dem Handy
verschwinden auch die wieder, dort zählt jeder Quadratzentimeter.

**Entdeckerpunkte.** Bleiben, wie gewünscht. Statt eines grellen gelben
Punktes, der hüpft, jetzt ein ruhig atmender Lichtring. Beim Berühren wird er
klar und warm – die Belohnung fürs Entdecken. Er bleibt 30 Pixel groß und
behält seine Beschriftung für Vorlesegeräte.

## Zwei Dinge, die der Prüfstand über sich selbst gelernt hat

**1 · Er brach beim ersten `@keyframes` ab.** Der einfache Parser hörte dort
auf zu lesen – alles danach blieb ungeprüft, in diesem Fall die halbe Datei.
Der Block steht jetzt ganz am Schluss, und der Rest ist wirklich geprüft.

**2 · Er kann `var(--…)` nicht auflösen.** Jede Deklaration mit einer Variablen
wird verworfen. Über `getComputedStyle` sah es deshalb so aus, als greife
weiterhin die alte Holzoptik – die Prüfung „Leiste ist hell" bestand aus dem
falschen Grund. Für solche Regeln wird jetzt der Quelltext geprüft, dazu
ausdrücklich, dass `waldfrisch-15-54.css` wirklich **zuletzt** geladen wird.
Nur dann gewinnt sie im Browser gegen `fixes.css`, das denselben Selektor mit
`!important` belegt.

Und noch eine eigene Panne: Die erste Fassung der Prüfung „ohne harte
Sockelkante" schlug am eigenen Lichtsaum fehl, weil sie `inset 0 1px 0` mit
`0 8px 0` in einen Topf warf. Eine innere Lichtkante ist das Gegenteil eines
Sockels. Jetzt werden nur die außen liegenden Schatten geprüft.

## Prüfergebnis

```
node pruefstand.mjs .

Klassenteam-Karten ........................ 7 von 7 bestanden
Meine Auswahl (Werkzeuge) ................. 5 von 5 bestanden
Positionsschalter wirklich schalten ....... 5 von 5 bestanden
Doppelter Zurück-Knopf .................... 2 von 2 bestanden
Ausgeblendete Bereiche (Regression 15.48) . 2 von 2 bestanden
Dateifelder antippbar (15.47) ............. 4 von 4 bestanden
Kinderfotos: Feld und Meldung (15.53) .... 11 von 11 bestanden
Walddesign frisch (15.54) ................ 14 von 14 bestanden
```

## Zurückdrehen

Alles steckt in einer einzigen Datei. Wenn dir etwas davon nicht gefällt:
die Zeile

```html
<link rel="stylesheet" href="waldfrisch-15-54.css?v=15540" />
```

in `index.html` auskommentieren – dann ist der alte Zustand zurück. Einzelne
Abschnitte sind in der Datei nummeriert (1 Licht, 2 Leben, 3 Entdeckerpunkte,
4 Werkzeugleiste, 5 Schild, 6 Wochenziel, 7 Begrüßung, 8 Handy) und lassen
sich einzeln herausnehmen.
