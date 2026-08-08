# DigiBoard Next 15.50

## Das Durcheinander in den Einstellungen war mein Fehler

In 15.48 habe ich geschrieben:

```css
html body #settingsDialog #settingsShare{ display:block!important; }
```

Ohne `:not([hidden])` überstimmt das die Regel „ausgeblendet heißt
unsichtbar". Der Kinderdaten-Bereich war dadurch **immer** sichtbar und lag
über den Kacheln der Einstellungszentrale. Genau das ist auf Deinem Bild zu
sehen. Behoben.

Dazu eine Schutzregel für die Bereiche des Einstellungsfensters und des
persönlichen Bereichs: ausgeblendet bleibt ausgeblendet. Bewusst **nicht**
pauschal für alles – es gibt ältere Stellen, die einzelne ausgeblendete
Elemente absichtlich zeigen, und die dürfen nicht kaputtgehen.

## Warum „22 von 22 anzeigbar" und trotzdem Buchstaben

Deine Prüfung war die entscheidende Auskunft:

```
Fotodatenbank: verfügbar · Fotos anzeigbar: 22 von 22
davon in der Datenbank: 22 · Belegter Platz: 10.8 MB
```

Die Fotos **sind** also da. Es lag nicht am Speichern, sondern am Zeichnen.

Zwei Ursachen, die zusammenwirkten:

1. Eine Kachel wurde gezeichnet, bevor die Fotodatenbank fertig gelesen war.
   Dann gab es keine Bildadresse – und es wurden gleich die
   Anfangsbuchstaben ausgegeben.
2. Schlug ein Bild fehl, wurde das `<img>` durch einen **Textknoten ersetzt**.
   Danach existierte kein Element mehr, an dem ein später eintreffendes Foto
   hätte eingehängt werden können. Die Anzeige war endgültig abgerissen,
   während die Fotos unverändert in der Datenbank lagen.

Jetzt:

- Es entsteht immer ein `<img>` mit dem Fotoschlüssel daran.
- Fehlt die Adresse oder schlägt das Laden fehl, wird das Bild **direkt aus
  der Datenbank nachgeholt** und eine frische Adresse erzeugt.
- Erst wenn auch das nichts findet, erscheinen die Anfangsbuchstaben – und
  zwar als Element, nicht als Textknoten. Ein Foto kann später immer noch
  dazukommen.
- Nach jedem Neuzeichnen läuft ein Aufräumdurchgang. Zusätzlich beobachtet
  DigiBoard neu eingefügte Kacheln und heilt sie sofort. Damit ist es
  gleichgültig, in welcher Reihenfolge Ansicht und Datenbank fertig werden.

## Geprüft

Fotoablage, alle drei Speicherlagen ausgeführt:

| Lage | Ablage | anzeigbar |
|---|---|---|
| Datenbank vorhanden und beschreibbar | Datenbank | 2 von 2 ✓ |
| Datenbank verweigert das Schreiben | verkleinertes Bild | 2 von 2 ✓ |
| gar keine Datenbank | verkleinertes Bild | 2 von 2 ✓ |

Nachladen: eine Ansicht ohne warmen Zwischenspeicher holt die Adresse
erfolgreich nach. Dateipfade und eingebettete Bilder gehen unverändert durch.
Der Prüfschlüssel der Schreibprobe wird zuverlässig wieder gelöscht und
landet nicht in der Fotoliste.
