# DigiBoard Next 15.62 – Die Knopfbeschriftung bleibt im Knopf

## Warum der Text aus den Knöpfen lief

In `styles.css` steht:

```css
#settingsDialog .class-student-actions>*{
  height:32px!important; font-size:10px!important;
  padding:5px 8px!important; justify-content:flex-start;
}
```

Was dort **nicht** steht, ist `min-width`. Und genau das ist der Punkt:

> Ein Element in einem Raster hat von sich aus `min-width:auto`. Es
> schrumpft **niemals** unter die Breite seines Inhalts.

Passt der Text nicht in die Spalte, wird also nicht der Text gekürzt –
der Knopf wird breiter als seine Spalte und schiebt sich über den nächsten.
Auf deinem Bildschirmfoto: „📷 Foto austau…" angeschnitten, „Pausieren" über
dem Mülleimer, „Entfernen" über dem Kartenrand.

## Was jetzt gilt

- **`min-width:0`** – der Knopf darf schmaler werden als sein Text.
- **Text mittig, mit Auslassungspunkten** statt Überlauf.
- **Kürzere Beschriftungen**: „📷 Foto austauschen" → **„📷 Foto"**,
  „Wieder aktivieren" → **„Aktivieren"**. Der volle Wortlaut bleibt als
  Sprechblase und für Vorlesegeräte erhalten – gekürzt wird die Anzeige,
  nicht die Bedeutung.
- **Die Reihe bricht selbst um**: `repeat(auto-fit,minmax(92px,1fr))` geht
  von drei auf zwei auf eine Spalte, sobald die **Karte** schmal wird. Eine
  Bildschirmbreiten-Abfrage könnte das nicht – die weiß nichts davon, wie
  breit eine einzelne Karte gerade ist.
- Die Meldezeile darunter bleibt ausdrücklich **mehrzeilig**. Sie trägt
  ganze Sätze; mit Auslassungspunkten wäre sie wertlos.

## Der Kaskadenwächter hatte einen blinden Fleck

Als ich ihn nach dieser Regel gefragt habe, meldete er: **niemand setzt hier
etwas.** Falsch – er prüft, ob das Ziel der *letzte* Teil des Selektors ist,
und bei `.class-student-actions>*` ist der letzte Teil `*`. Der enthält den
Klassennamen natürlich nicht.

Ausgerechnet die Regel, die den Fehler verursacht hat, war für ihn also
unsichtbar. Behoben: Bei `*` prüft er jetzt den Teil davor. Danach fand er
sie sofort – und bestätigt nun, dass `min-width` aus der neuen Datei kommt:

```
  min-width   10202 !  kinderkarte-15-62.css  →  0
```

## Prüfergebnis

```
node pruefstand.mjs .          145 von 145 bestanden
```

Zehn neue Prüfungen. Drei davon achten darauf, dass die Kürzung nicht zu
weit geht: Foto-, Pausieren- und Entfernen-Knopf müssen **weiterhin eine
Erklärung tragen**. Ein Knopf, der nur noch „Foto" heißt und nichts weiter
verrät, wäre kürzer, aber schlechter.
