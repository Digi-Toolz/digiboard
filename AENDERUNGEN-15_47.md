# DigiBoard Next 15.47

## Die Dateiauswahl ging nicht auf – behoben

Das war der eigentliche Grund, warum die Kinder nicht ankamen. Nicht die
Datei war falsch, sondern der Knopf tat nichts.

Das Dateifeld war mit `hidden` versteckt und wurde per JavaScript
angeklickt. In einem Vollbild-Fenster – und die Einstellungen sind auf dem
iPhone ein Vollbild-Fenster – verweigert Safari das zuverlässig. Es passierte
schlicht nichts, ohne Fehlermeldung.

- Das echte Dateifeld liegt jetzt **unsichtbar über dem Knopf**. Der Finger
  trifft das Feld selbst, kein JavaScript ist beteiligt. Das funktioniert auf
  iPhone, iPad, Android und Laptop gleich.
- Betrifft alle drei Ladeknöpfe: Kinderdaten, Gesamtbackup und persönliches
  Profil.
- `accept` nennt jetzt ausdrücklich JSON, damit die Dateien-App die Datei
  nicht ausgraut.

## Rettungsweg, falls es trotzdem klemmt

Unter dem Ladeknopf sitzt neu **„Datei lässt sich nicht auswählen? Inhalt
einfügen"**. Dort den Text der `.json`-Datei einfügen und übernehmen.

So kommst Du an Deine Kinder heran:

1. Dateien-App öffnen, die `.json`-Datei antippen – sie öffnet als Text.
2. Text markieren und kopieren.
3. In DigiBoard: Einstellungen → Kinderdaten → den neuen Bereich aufklappen,
   einfügen, grünen Knopf antippen.

Dateiauswahl und Einfügen benutzen ab jetzt **denselben Programmweg**. Es
kann nicht mehr passieren, dass ein Weg etwas anderes tut als der andere.

## Einstellungen auf dem Laptop wieder erreichbar

Die Karte hatte eine feste Höhe und schnitt allen Überstand ab. Die
Kachelfläche war auf fünf Spalten und zwei Zeilen festgelegt. Alles darunter
war nicht zu klein, sondern **gar nicht vorhanden** – deshalb kam man auch
nicht durch Scrollen dran.

- Die Karte scrollt jetzt, mit sichtbarem Ende und Platz unter dem letzten
  Knopf.
- Die Kopfzeile bleibt beim Scrollen oben stehen, damit Zurück und Schließen
  immer erreichbar sind. Die Speicherleiste bleibt unten stehen.
- Die Kacheln fließen wie auf dem Handy: gleiche Breite, beliebig viele
  Zeilen. Ob acht oder zwanzig Bereiche – nichts wird mehr gekappt.
- Die Kacheln sehen jetzt aus wie die auf dem Handy: Symbol in einem
  farbigen Feld, Titel, Erklärzeile, Pfeil rechts in einer eigenen Fläche.
  Der Pfeil saß vorher frei im Text und schob die Beschriftung.
- Die Erklärzeilen werden vollständig gezeigt statt abgeschnitten.

## Geprüft

Der Ladeweg wurde diesmal wirklich ausgeführt, nicht nur gelesen. Getestet
mit allen fünf Dateiformaten, die DigiBoard kennt:

| Datei | erkannt |
|---|---|
| Kinderdaten-Datei | ✓ 2 Kinder |
| DigiBoard-Gesamtbackup | ✓ 2 Kinder |
| älteres Klassenpaket | ✓ 2 Kinder |
| ältere vollständige Sicherung | ✓ 2 Kinder |
| sehr alte Sicherung ohne Umschlag | ✓ 2 Kinder |
| beschädigte Datei | ✓ klare Fehlermeldung |

Die Fotobilanz stimmt in allen Fällen: Bilder, Verweise, Dateipfade und
fehlende Fotos werden getrennt gezählt und im Klartext gemeldet.
