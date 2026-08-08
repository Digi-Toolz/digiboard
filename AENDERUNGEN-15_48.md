# DigiBoard Next 15.48

## Scrollen auf dem Laptop – Fehler gefunden

Der Fehler saß nicht im Einstellungsfenster, sondern in **„Meine Ansicht"**
im persönlichen Bereich.

Dort steckt der Inhalt in einem Raster mit `overflow:hidden`. Eine Rettung
dafür war vorhanden – aber nur in `@media(max-width:900px)`. Auf einem Laptop
greift die nie. Genau deshalb ließ sich auf dem Handy alles erreichen und auf
dem Laptop nicht, und es gab auch keinen Scrollbalken: **es war gar kein
Scrollbereich vorhanden.** Der Inhalt lag außerhalb der Fläche.

Dazu kam eine feste Höhe von `calc(100vh - 255px)` mit `min-height:520px` –
auf einem 13-Zoll-Bildschirm höher als das Fenster selbst.

- Jede Inhaltsfläche des persönlichen Bereichs ist jetzt ein echter
  Scrollbereich: Meine Ansicht, Fundus, Alle Füchse, Wochenziel.
- **Ein sichtbarer, schmaler Scrollbalken** in Grün. Ohne ihn weiß niemand,
  dass es weitergeht.
- Der Speichern-Knopf klebt am unteren Rand und bleibt beim Scrollen
  sichtbar.
- Luft unter dem letzten Bedienelement, damit nichts an der Kante klebt.
- Sicherheitsnetz: für diese Flächen ist die Kombination „feste Höhe **und**
  Inhalt abschneiden" jetzt grundsätzlich ausgeschlossen. Genau diese
  Kombination macht eine Fläche unbedienbar.

## Der Einfüge-Bereich sprengte die Karte

Aufgeklappt lag das Textfeld über dem Datenschutzhinweis, und die
Aufklappzeile verschwand dahinter. Die Fläche darüber hatte eine feste Höhe
und schnitt den Zuwachs ab.

- Der Bereich ist jetzt ein normaler Block im Fluss und schiebt den
  Datenschutzhinweis nach unten, statt ihn zu überlagern.
- Der Hinweistext darin hatte den gelben Rahmen des Datenschutzhinweises
  geerbt und sah dadurch aus wie dieser. Jetzt eigene, ruhige Gestaltung.

## Die Fotomeldung sagte nicht die Wahrheit

Sie meldete, was in der **Datei** stand – nicht, was **angekommen** ist. Eine
Datei kann 22 Bilder enthalten und trotzdem können null davon anzeigbar sein.
Die Meldung „22 Fotos wurden übernommen ✓" war deshalb wertlos für die
Fehlersuche.

Gemeldet wird jetzt der **nachgezählte Zustand**: nach dem Laden wird für
jedes Kind geprüft, ob sein Foto tatsächlich auflösbar ist.

| Lage | Meldung |
|---|---|
| alle Fotos da | „22 Fotos sind da ✓" |
| teilweise | „14 von 22 Fotos sind da." |
| Bilder in der Datei, keines abgelegt | „die Datei enthält 22 Fotos, aber keines konnte auf diesem Gerät abgelegt werden … bitte Website-Daten freigeben" |
| nur Verweise auf ein fremdes Gerät | „keine Bilder, sondern nur 22 Verweise … dort ein neues Backup erzeugen" |
| gar keine Fotos | „in dieser Datei sind keine Fotos gespeichert" |

Ist die Fotodatenbank des Browsers blockiert, wird das ausdrücklich gesagt.
Für die genaue Fehlersuche steht die vollständige Bilanz zusätzlich in der
Browser-Konsole unter „DigiBoard Fotobilanz".

## Geprüft

Alle fünf Fotolagen wurden ausgeführt, nicht nur gelesen: echte Bilder,
reine Verweise, gar keine Fotos, gemischt, und alte Dateipfade. In jedem Fall
stimmt die Meldung mit dem tatsächlichen Zustand überein.
