# DigiBoard Next 15.52 – Fotos wirklich sichtbar

## Ursache

Dasselbe Kinderfoto erscheint gleichzeitig an mehreren Stellen: in der
Klassenliste, bei den Punkten, in Diensten und in der Kinderansicht. Beim
Nachladen erzeugte bisher jede Kachel eine neue interne Bildadresse. Jede neue
Adresse machte die vorherige sofort ungültig. Dadurch konnte die Prüfung
„22 von 22 anzeigbar“ melden, während sichtbare Kacheln trotzdem nur
Anfangsbuchstaben zeigten.

## Behoben

- Alle Kacheln eines Kindes teilen sich jetzt genau eine Bildadresse.
- Gleichzeitige Ladevorgänge werden zusammengefasst; keine Kachel nimmt einer
  anderen mehr das Bild weg.
- Ein fehlgeschlagenes Bild bleibt unsichtbar als Ladeanker erhalten und kann
  später wiederhergestellt werden.
- Die Prüfung lädt jedes Bild nun wirklich. „Anzeigbar“ bedeutet damit auch
  tatsächlich vom Browser dekodierbar.
- Bereits gespeicherte Bilder werden auch dann gelesen, wenn die Datenbank nur
  das Schreiben neuer Bilder blockiert.
- Der Foto-Upload meldet unbekannte iPhone-Formate verständlich und fällt beim
  Speichern auf JPEG zurück, falls Safari kein WebP erzeugen kann.
- Die Versionsnummer des Offline-Speichers wurde erhöht, damit iPhone und iPad
  sicher den neuen Code übernehmen.
