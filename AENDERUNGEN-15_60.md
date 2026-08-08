# DigiBoard Next 15.60 – Drei Fächer, und das Handy sitzt mittig

## Warum das Fenster auf dem iPhone nach links rutschte

In 15.56 hatte ich geschrieben:

```css
.dialog-card{ width:100vw }
```

Das sieht richtig aus, ist es aber nicht. `100vw` ist die Breite des
Anzeigebereichs – **ohne Rücksicht darauf, wo das Element sitzt**. Das
`<dialog>` hat einen eigenen Rand und eine eigene Mitte; die Karte darin war
dadurch breiter als der Platz, den sie hatte, lief nach rechts hinaus und
schob den Inhalt nach links. Was du als „Rahmen" rechts gesehen hast, war
der Hintergrund hinter dem überstehenden Fenster.

`width:100%` fragt den Elternteil – und der weiß, wie breit er ist.

Dazu kam ein zweiter Punkt, den ich diesmal **vorher** nachgerechnet habe:

```
  20402 !  fundus-fenster-15-57.css   →  width:min(1320px,96vw)
```

Eine Breitenabfrage (`@media`) hebt die Spezifität **nicht**. Meine
Handy-Regel musste also aus eigener Kraft darüber liegen – sonst wäre es bei
96 vw geblieben, und 96 vw linksbündig ist genau der Streifen rechts. Sie
steht jetzt auf 20502 und gewinnt nachweislich:

```
  width   20502 !  handy-mitte-15-60.css  →  100%
  margin  20502 !  handy-mitte-15-60.css  →  0 auto
```

Zusätzlich: Sicherheitsabstände auf **allen vier** Seiten (vorher nur oben
und unten), `overflow-x:hidden`, und nichts im Fenster darf breiter als das
Fenster sein – ein einziges zu breites Kind erzeugt sonst wieder denselben
Versatz.

## Drei Fächer statt zwei

Die Kinder standen zwischen Stundenplan und Klassenwelt, als wären Namen und
Fotos von 22 Kindern eine Einstellung wie jede andere. Sie sind die einzigen
personenbezogenen Daten in DigiBoard und haben jetzt ein eigenes Fach.

| Fach | Farbe | Inhalt |
|---|---|---|
| 🦊 Meine Einstellungen | grün `#f2f8ed` | Ansicht & Werkzeuge · Mein Unterricht · Sichern & Laden |
| 👧 Die Kinder | rosa `#fdf3f4` | Füchse · Kinderdaten aufs Handy |
| 👥 Allgemeine Einstellungen | blau `#f1f5fc` | Tagesinfos · Essen · Aufgaben · Wochenziel · Stundenplan · Klassenwelt |

Wie besprochen bleiben Anzeigename, Symbol, Farbe und Startwerkzeuge dort,
wo sie sind – im Teambereich unter „Person wechseln".

Auf dem Handy waren „Meine Ansicht & Werkzeuge" und „Mein Unterricht" in
fünf Zeilen umgebrochen, weil Symbol und Pfeil zu viel Breite nahmen. Symbol
jetzt 34 statt 38 Pixel, Pfeil schmaler, und unter 400 Pixeln Fensterbreite
steht nur noch eine Kachel pro Zeile – zwei nebeneinander sind dort keine
zwei Kacheln mehr, sondern zwei Wortsalate.

## Prüfergebnis

```
node pruefstand.mjs .          134 von 134 bestanden
```

Zwei der neuen Prüfungen sind Fangfragen an mich selbst: dass die beiden
Kinder-Kacheln **nicht doppelt** dastehen (einmal im neuen Fach und einmal
weiter unten) und dass das allgemeine Fach noch genau seine sechs Kacheln
hat. Beim Verschieben von Markup ist das Verdoppeln der häufigste Fehler.

### Zwei Prüfungen mussten korrigiert werden

- „**zwei** Fächer in der Einstellungszentrale" schlug an, sobald es drei
  wurden. Sie nennt jetzt eine Mindestzahl – sonst meldet sie bei jedem
  neuen Fach einen Fehler, obwohl nichts kaputt ist.
- „`.settings-home-grid` gewinnt aus schubladen-15-59.css" schlug an, weil
  15.60 dieselbe Eigenschaft für schmale Schirme erneut setzt und dort zu
  Recht gewinnt. Gemeint war nie eine bestimmte Datei, sondern: der Sieger
  darf nicht mehr aus `fixes.css` kommen.
- Und eine dritte, die schlicht falsch war: „kein Ziel doppelt" sah nur
  `data-settings-target` – drei Kacheln zeigen aber legitim auf
  `settingsDaily` und unterscheiden sich erst durch `data-daily-card`.

---

# 15.61 – Nachtrag: der gestapelte Handy-Kopf

Auf deinem Bildschirmfoto standen die Knöpfe **untereinander**, jeder mittig
auf eigener Zeile: grüner Zurück-Knopf, darunter 👥, darunter die Reiter,
darunter das Zahnrad.

Der Grund war eine einzige Zeile in `override.css`:

```css
.team-workspace-nav{ flex-direction:column }
```

Spezifität **100**, ganz ohne `!important` – und sie hat trotzdem gewonnen.
Nicht weil sie stark war, sondern weil ich `flex-direction` **nie gesetzt
habe**. Ich hatte `display`, `flex-wrap` und `align-items` bestimmt und mich
darauf verlassen, dass mir damit das Layout gehört. Tat es nicht.

> Eine Regel muss nicht stark sein, um zu gewinnen.
> Sie muss nur die einzige sein, die etwas zu der Eigenschaft sagt.

Jetzt steht die Kopfzeile in einer Reihe: Zurück-Knopf, Person, Zahnrad
nebeneinander; die beiden Reiter „Meine Übersicht / Alle Füchse" bekommen
die zweite Zeile für sich, weil sie dafür zu breit sind.

## Der Prüfstand prüft jetzt vollständig

Bisher habe ich nur die Eigenschaften geprüft, an die ich **gedacht** hatte –
genau die also, die schon in Ordnung waren. Ab jetzt wird ein Bauteil
komplett durchgegangen: `display`, `flex-direction`, `flex-wrap`,
`justify-content`, `align-items`, `position`, `width`, `height`. Für jede
davon muss der Sieger aus den neuen Dateien kommen.

Diese Prüfung fand sofort eine zweite Lücke: `width` auf der Kopfzeile hing
noch an `fixes.css`. Der Wert war zufällig richtig (`100%`) – aber „zufällig
richtig" ist genau die Sorte Zustand, aus der beim nächsten Eingriff wieder
ein Fehler wird. Steht jetzt ebenfalls in der neuen Datei.

```
node pruefstand.mjs .          135 von 135 bestanden

  Handy-Kopf: keine Layout-Eigenschaft haengt noch an einer Altdatei
    → alle in neuer Hand
```

## Zum Bildschirmfoto selbst

Das war noch die Fassung **vor** 15.60 – der Streifen rechts und die
Stapelung stammen beide daher. Nach dem Hochladen von 15.61 bitte einmal die
Seite auf dem iPhone schließen und neu öffnen; Safari hält den alten
Service Worker sonst hartnäckig fest.
