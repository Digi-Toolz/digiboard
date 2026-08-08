# DigiBoard Next 15.45

## Der Baum steht jetzt vorn

- Die Baumbühne ist deutlich größer geworden: rund 42 Prozent mehr Fläche
  gegenüber 15.44. Der Klassenbaum ist damit das erste, was im Raum
  auffällt.
- Der Hintergrundwald tritt sichtbar zurück. Ferne Nadelbäume, Hain und
  Tiefenebenen sind leicht weichgezeichnet und etwas blasser, dazu kommt
  eine ruhige Randabdunklung. Dieser Schärfeunterschied lässt den Baum
  nach vorn treten, ohne dass etwas lauter wird.
- Ein warmer Lichtkegel liegt auf dem Waldboden. Ein enger Kontaktschatten
  am Stammfuß verhindert, dass der Baum zu schweben scheint.
- Die Kinderfotos sitzen jetzt eindeutig vor der Krone und haben einen
  eigenen weichen Schatten.

## Das Belohnungssystem als Blickfang

- Das Schild „Unsere Waldhelden" hängt an zwei Seilen über der Lichtung
  und ist aus Holz geschnitzt. Der Pokal sitzt als eingelassene Goldmünze
  darin.
- Baumstufe und Tagesstand sind zwei kleine Holzplaketten in derselben
  Sprache.
- Die Fortschrittsleiste liest sich als Waldweg mit drei Wegsteinen. Der
  Prozentwert steht auf einem grünen Blattschild.
- Die Schatztruhe ist größer, plastisch aus Holz mit Goldbeschlag und
  Schloss. Geschlossen atmet sie ruhig, geöffnet leuchtet sie golden und
  die ganze Leiste bekommt einen Goldsaum.

## Werkzeuge modelliert

- Die Werkzeugleiste ist eine Werkbank aus Holz mit sichtbarer Maserung,
  Lichtkante und Fuß.
- Jedes Werkzeug ist ein eigener Klotz: er hebt sich beim Zeigen an, geht
  beim Antippen spürbar nach unten und kommt wieder hoch. Das Symbol sitzt
  auf einer eingelassenen Farbscheibe und dreht sich leicht mit.
- Der Fuchsbereich bleibt der Haupteingang und ist als einziges Werkzeug
  orange durchgefärbt.
- Tastaturbedienung: jedes Werkzeug bekommt einen gut sichtbaren goldenen
  Fokusrahmen.

## Wochenziel und Tagesinfos

- Beide Karten sprechen dieselbe Holzsprache wie Baumschild und Werkbank.
  Das Wochenziel hängt an zwei Nägeln, die Tagesinfos haben eine kräftige
  Holzfassung mit Kopfkante.

## Aufgeräumt

- Doppelte und nicht mehr benutzte Dateien entfernt: `intro-logo.png` war
  Byte für Byte identisch mit `icon-512.png`, die alten Waldbilder
  `forest-clearing-10.5.3.png` und `forest-clearing-15.23.png` wurden
  längst von `forest-clearing-15.24.png` überdeckt, `tree-natural.svg` und
  `forest-friendly.svg` wurden nirgends mehr verwendet.
- Alle Verweise darauf in CSS, index.html und Offline-Cache sind
  mitgezogen. Das Paket ist von 9,5 auf 4,7 MB geschrumpft – wichtig für
  AirDrop an Kolleginnen und für den ersten Offline-Start.
- Die 24 Einzeldateien AENDERUNGEN-15_20 bis 15_43 liegen jetzt gesammelt
  in `AENDERUNGEN-ARCHIV-bis-15_43.md`.

## Technik

- Versions- und Offline-Cache auf 15.45 angehoben, die neue
  Gestaltungsdatei `waldbuehne-15-45.css` wird offline mitgespeichert.
- Die Großansicht des Baumes (Knopf „Groß") behält ausdrücklich ihre
  eigenen Maße; die neuen Bühnenmaße gelten nur für die Tafelansicht.
- Keine Regel greift in Klassendaten, Fotos oder Bedienlogik ein.
