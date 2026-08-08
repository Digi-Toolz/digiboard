# DigiBoard Next 15.64 – Die Navigationsleiste, einheitlich

Du hattest recht, 15.63 war schlechter, nicht besser. Auf deinen
Bildschirmfotos konnte ich es zum ersten Mal selbst sehen – hier ist, was
falsch war.

## 1 · Die Leiste passte zu nichts

Ich hatte ihr eine **eigene, sandfarbene Farbwelt** gegeben: Creme, Gold,
Rinde. Der Rest der App ist aber grün und weiß – dunkelgrüner Kopf, weiße
Karten, hellgrüne Einstellungsfächer. Ein warmer Sandstreifen mittendrin
sieht aus, als sei er aus einer anderen App eingeklebt.

Genau das war der Denkfehler: Ich habe „mehr Farbe" als „**neue** Farben"
verstanden. Gemeint war „mehr Kontrast **in** der vorhandenen Farbwelt".

Jetzt benutzt die Leiste exakt die Werte der Einstellungsfächer –
hellgrüner Verlauf `#f4faee → #e8f2df`, Rand `#c3d9b6`, weiße Knöpfe.
**Orange kommt genau einmal vor**: auf dem Zurück-Knopf. Ein Akzent wirkt
nur, solange er allein steht.

## 2 · Die Reiter liefen auseinander

`flex:1 1 auto` liess sie den ganzen Restplatz nehmen. Auf dem Laptop wurde
„Meine Übersicht" dadurch ein **600 Pixel breiter Balken**, und „Alle
Füchse" trieb irgendwo rechts daneben.

Reiter sind Schalter, keine Flächen. Sie sitzen jetzt als **kompakte
Gruppe** in einem gemeinsamen hellen Rahmen – nur so breit wie ihre Wörter.
`flex:0 0 auto` statt `1 1 auto`, das ist der ganze Unterschied zwischen
„Schalter" und „Balken". Auf dem Handy dürfen sie die Zeile füllen, dort
ist der Platz knapp.

## 3 · „Meine" stand dunkelgrün auf grün

Auf dem aktiven Reiter hatte ich `color:#fff` gesetzt – **auf den Knopf,
nicht auf die Wörter darin**. Ein `<span>` erbt die Farbe nur, solange ihm
niemand anders etwas sagt; irgendeine ältere Regel sagte etwas.

Das ist derselbe Fehler wie beim `flex-direction` in 15.61, nur eine Ebene
tiefer. Deshalb steht jetzt überall `… *{color:…}` dabei – und zwei
Prüfungen achten darauf.

## 4 · Ruhige Maße

Alle vier Bedienelemente sind exakt gleich hoch (38 Pixel, auf dem Handy
36). Unterschiedliche Höhen in einer Reihe sind der häufigste Grund, warum
eine Leiste „unruhig" aussieht – auf dem Foto war der Zurück-Knopf höher als
das Zahnrad, und die Reiter wieder anders.

Auf dem Handy stehen Symbol und Wort jetzt **nebeneinander** statt
übereinander (`flex-wrap:nowrap` auf jedem Knopf), und die Emoji sind 14–15
statt 24 Pixel groß.

## Prüfergebnis

```
node pruefstand.mjs .          168 von 168 bestanden

  die Leiste benutzt hellgruene Flaeche wie die Karten     ✓
  Person und Zahnrad sind weiss wie alle anderen Knoepfe   ✓
  Orange bleibt dem Zurueck-Knopf vorbehalten              1 Verwendung
  alle Bedienelemente haben dieselbe Hoehe                 ✓
  die Schrift IM Knopf ist mitgefaerbt                     ✓
  am Laptop dehnt sich die Reitergruppe NICHT              ✓
  auf dem Handy fuellt sie die Zeile                       ✓
```

Eine Prüfung musste ich korrigieren: Der Kaskadenwächter nennt immer den
**letzten** Sieger – und das war hier die Handy-Regel, die zu Recht später
steht. Gemeint war aber der Laptop. Jetzt werden beide Bereiche getrennt
geprüft.

## Aufräumen

`kopfleiste-15-63.css` wird nicht mehr geladen und enthält nur noch einen
Hinweis. Die Datei kann gelöscht werden – ich habe hier keine Rechte dazu.
