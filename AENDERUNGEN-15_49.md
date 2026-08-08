# DigiBoard Next 15.49 – Fotos, zu Ende gebracht

Ich habe die Fotoablage so gebaut, dass sie in **jedem** Fall hält. Damit ist
es gleich, welche der drei möglichen Ursachen bei Dir zutrifft.

## Der Fehler, den ich vorher nicht gesehen habe

Die Fotodatenbank galt als benutzbar, sobald sie sich **öffnen** ließ. Im
privaten Modus und bei knappem Speicher lässt sie sich öffnen – **verweigert
aber jedes Schreiben.** DigiBoard hielt sie trotzdem für in Ordnung und legte
Fotos in ein Fass ohne Boden. Im Zustand stand danach ein Verweis auf ein
Bild, das es nie gab. Ergebnis: Anfangsbuchstaben statt Gesichter, ohne jede
Fehlermeldung.

Jetzt wird beim Start einmal **probeweise geschrieben, gelesen und wieder
gelöscht.** Nur wenn das durchläuft, gilt die Datenbank als verfügbar.

## Rückfallebene: kleines Foto statt kein Foto

Fehlt die Datenbank, muss das Bild in den Browserspeicher – und der ist rund
5 MB groß. Ein Portrait mit 640 Pixeln belegt dort als Text etwa 80 KB. 22
Kinder sprengen damit die Grenze, das Speichern scheitert, und **alles** ist
weg. Genau das ist bei Dir wahrscheinlich passiert.

- Ein Portrait mit 180 Pixeln belegt etwa 10 KB. 22 Kinder passen bequem.
- Liegt eine Datenbank vor, bleibt das Bild in voller Größe.
- Fehlt sie, wird es klein gerechnet, statt am Speicher zu scheitern. Auf
  einer Kinderkachel ist der Unterschied nicht zu sehen.
- Das gilt für alle Wege gleich: Backup laden, Text einfügen und Foto pro
  Kind austauschen.

## Vorhandene Fotos werden aufbereitet

Der Umzug alter Fotos lief bisher **nur mit** verfügbarer Datenbank. Gerade
auf Geräten ohne Datenbank ist er aber am wichtigsten. Er läuft jetzt immer
und rechnet zu große Bilder klein, damit sie überhaupt Platz finden. Danach
werden alle Ansichten neu gezeichnet – das passierte vorher auch nur im
Erfolgsfall.

## „Fotospeicher prüfen"

Neuer Knopf unter Einstellungen → Kinderdaten. Er sagt in Klartext:

```
Fotodatenbank des Browsers: blockiert
Kinder in der Liste: 22
Fotos anzeigbar: 22 von 22
davon in der Datenbank: 0 · als Bild im Speicher: 22 · ohne Foto: 0
Belegter Platz: 0.4 MB von 1024 MB
→ Alles in Ordnung.
```

Stimmt etwas nicht, steht dort auch, was zu tun ist – zum Beispiel im Browser
für DigiBoard „Website-Daten erlauben" einschalten oder den privaten Modus
verlassen.

## Geprüft

Alle drei Speicherlagen wurden ausgeführt, nicht nur gelesen:

| Lage | Ablage | Fotos anzeigbar |
|---|---|---|
| Datenbank vorhanden und beschreibbar | Datenbank | 2 von 2 ✓ |
| Datenbank öffnet, verweigert Schreiben | verkleinertes Bild im Speicher | 2 von 2 ✓ |
| gar keine Datenbank | verkleinertes Bild im Speicher | 2 von 2 ✓ |

Die mittlere Lage war vorher der stille Totalverlust.
