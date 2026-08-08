# DigiBoard Next 15.53 – Warum das Hochladen von Kinderfotos „nichts tat"

## Kurz gesagt

Es waren zwei Fehler, und der zweite hat den ersten unsichtbar gemacht.

1. **Die App hat gemeldet, was schiefging – nur an einer Stelle, die niemand
   sieht.** Jede Rückmeldung landete in einem einzigen Absatz *unterhalb*
   der Kinderliste. Bei 22 Kindern steht der weit außerhalb des Bildschirms.
   Wer oben auf „📷 Foto austauschen" klickte, sah deshalb: nichts.
2. **iPhone-Fotos im HEIC-Format kann Chrome nicht öffnen.** Bilder aus dem
   iCloud-Ordner sind fast immer HEIC. Das Dekodieren scheitert dort
   zwangsläufig – und die Fehlermeldung dazu war eben die unsichtbare.

Dass es „vorher funktioniert hat", passt dazu: mit JPEG- oder PNG-Dateien
läuft derselbe Weg durch.

## Was jetzt anders ist

### Die Meldung steht dort, wo geklickt wurde

Jede Kinderkarte hat eine eigene Meldezeile – blau während der Arbeit, grün
bei Erfolg, rot bei einem Fehler. Die Meldung nennt den **Dateinamen** und
den **Grund**. Kein stummer Knopf mehr.

### HEIC wird beim Namen genannt

Statt eines allgemeinen Fehlers steht jetzt da, was zu tun ist:

> *IMG_4711.HEIC ist ein iPhone-Foto im HEIC-Format. Dieser Browser kann HEIC
> nicht öffnen – das ist eine Einschränkung des Browsers, nicht des
> DigiBoards. Zwei Wege: DigiBoard **in Safari** öffnen und das Foto dort
> wählen – oder das Bild einmal als JPEG sichern (in Fotos: Bild markieren →
> Ablage → Exportieren → „1 Foto exportieren" → Format **JPEG**).*

Erkannt wird das an Endung **und** Dateityp, bevor überhaupt versucht wird zu
dekodieren. In Safari passiert das nicht – dort wird HEIC ganz normal geladen.

### Zwei weitere stille Fallen, die dabei aufgefallen sind

- **0-Byte-Dateien.** Liegt ein Bild nur in iCloud und ist noch nicht auf das
  Gerät geladen, kommt eine leere Datei an. Wird jetzt erkannt und erklärt.
- **Dieselbe Datei zweimal wählen ging nicht.** Ein Dateifeld löst kein
  `change` aus, wenn sich der Wert nicht ändert. Nach einer Fehlermeldung war
  der Knopf also tatsächlich tot, wenn man dasselbe Bild erneut probierte.
  Das Feld wird jetzt nach jedem Versuch zurückgesetzt.
- **Wachhund gegen Hängenbleiben.** Antwortet der Fotospeicher nicht, bricht
  der Vorgang nach 20–25 Sekunden mit einer klaren Meldung ab, statt für
  immer bei „wird vorbereitet …" zu stehen.

## Das Dateifeld selbst – der dritte Fund

Die Kinderliste war die **letzte Stelle im Projekt**, die noch das alte
Versteck-Muster benutzte:

```css
.photo-upload-button input{
  position:absolute; width:1px; height:1px;
  opacity:0; pointer-events:none;
}
```

Genau dieses Muster war schon zweimal Ursache eines Fehlers – in 15.47 bei
den Sicherungsdateien, in 15.51 bei den Teamfotos. Die Kinderliste wurde
beide Male übersehen.

- `pointer-events:none` heißt: das Feld ist **nie** direkt antippbar. Am Mac
  rettet der Umweg über die Beschriftung die Lage, auf iPad und iPhone
  verlangt Safari die Geste aber auf dem Feld selbst.
- `position:absolute` in einer Beschriftung ohne eigenen Bezugspunkt lässt
  das Feld aus dem Knopf heraus an eine ganz andere Stelle der Seite rutschen.
- 1 × 1 Pixel und Schriftgröße unter 16 px – iOS zoomt beim Fokus hinein.

Jetzt gilt dasselbe Rezept wie bei den Teamkarten: der Knopf ist der
Bezugspunkt, das Feld deckt ihn vollständig ab, ist unsichtbar, aber wirklich
vorhanden und wirklich antippbar. Auf dem iPad hätte das sonst als Nächstes
zugeschlagen.

## Prüfergebnis

Der Prüfstand hat elf neue Prüfungen bekommen – darunter zwei, die den
Upload **wirklich auslösen** und nachsehen, ob eine sichtbare Meldung
erscheint.

```
node pruefstand.mjs .

Klassenteam-Karten ........................ 7 von 7 bestanden
Meine Auswahl (Werkzeuge) ................. 5 von 5 bestanden
Positionsschalter wirklich schalten ....... 5 von 5 bestanden
Doppelter Zurück-Knopf .................... 2 von 2 bestanden
Ausgeblendete Bereiche (Regression 15.48) . 2 von 2 bestanden
Dateifelder antippbar (15.47) ............. 4 von 4 bestanden
Kinderfotos: Feld und Meldung (15.53) .... 11 von 11 bestanden
```

## Wichtig beim Einspielen

Die Versionsnummer des Offline-Speichers steht jetzt auf `digiboard-15.53`,
alle Datei-Anhänge auf `?v=15530`. Falls die Seite trotzdem alt aussieht:
einmal mit **⌘⇧R** neu laden.
