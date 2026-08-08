# Offline-Betrieb und Installation

## Warum ein Webserver nötig ist

Ein Service Worker – die Technik hinter dem Offline-Modus – läuft aus
Sicherheitsgründen ausschließlich über `http://` oder `https://`. Wird
`index.html` per Doppelklick geöffnet, läuft die Adresse auf `file://` und der
Browser lehnt den Service Worker ab.

DigiBoard funktioniert in diesem Fall trotzdem vollständig – nur eben ohne
Offline-Modus und ohne Installierbarkeit. Die Statusanzeige oben rechts zeigt
dann „Lokal gespeichert" statt „Offline bereit".

## Der schnelle Weg zum Ausprobieren

Node.js muss installiert sein, sonst nichts:

```bash
node serve.mjs
```

Dann im Browser `http://localhost:8080` öffnen. Beim Start zeigt das Skript auch
eine WLAN-Adresse an (z. B. `http://192.168.1.42:8080`) – über die erreichen das
iPad an der Tafel und dein iPhone dieselbe Installation, solange der Laptop läuft
und im selben Netz ist.

Wenn oben rechts „● Offline bereit" steht, ist alles gespeichert. Ab da kannst du
das WLAN abschalten und weiterarbeiten.

## Der Weg für den Dauerbetrieb

Für den echten Schulalltag willst du keinen laufenden Laptop. Drei Möglichkeiten,
von einfach nach aufwendig:

**GitHub Pages** – kostenlos, HTTPS inklusive, in etwa einer halben Stunde
eingerichtet. Der Ordner wird in ein Repository geladen, Pages aktiviert, fertig.
Wichtig: das Repository **privat** halten, sonst liegen die Portraits öffentlich
im Netz. Bei privaten Repositories ist Pages allerdings kostenpflichtig – prüfen,
bevor du anfängst.

**Ein Ordner auf dem Schulserver** – wenn eure IT einen Webserver betreibt, ist
das der sauberste Weg. Es reicht, den Ordner abzulegen; es wird nichts
installiert und nichts ausgeführt, die App ist reines HTML/CSS/JS.

**Ein kleines Gerät in der Klasse** – ein Raspberry Pi mit dem beiliegenden
`serve.mjs` als Autostart. Braucht etwas Einrichtung, läuft dann aber
unabhängig von WLAN und Schulnetz.

> Achtung, alle drei Wege ändern nichts an der Datenlage: Die Kinderdaten bleiben
> im Browser des jeweiligen Geräts. Der Server liefert nur die App aus, er
> speichert keine Daten. Erst ein echter Mehrbenutzerbetrieb (Stufe 4) würde das
> ändern – und der bräuchte vorher die Klärung mit Schulleitung und Datenschutz.

## Auf dem Homescreen installieren

Sobald die App über `http://` oder `https://` läuft:

**iPhone / iPad** – In Safari öffnen, Teilen-Symbol, „Zum Home-Bildschirm".
Die App startet danach ohne Browserleiste im Vollbild und hat ein eigenes Symbol.
Wichtig: Das funktioniert nur in Safari, nicht in Chrome auf iOS.

**Laptop (Chrome / Edge)** – Rechts in der Adressleiste erscheint ein
Installationssymbol.

## Wenn eine Änderung nicht ankommt

Der Service Worker liefert absichtlich zuerst aus dem Cache. Nach einer Änderung
an der App:

1. In `sw.js` die Zeile `const VERSION='digiboard-11.89.2'` hochzählen.
2. Seite einmal neu laden, kurz warten, noch einmal laden.

Beim Versionswechsel werden alle alten Caches automatisch gelöscht.

## Wo liegen die Daten jetzt?

| Was | Wo | Grenze |
|---|---|---|
| Einstellungen, Punkte, Stundenplan, Notizen | `localStorage` | 5 MB – aktuell etwa 14 KB belegt |
| Kinderfotos | IndexedDB (Gerätedatenbank) | im Gigabyte-Bereich |
| App-Dateien für den Offline-Modus | Cache Storage | vom Browser verwaltet |

Der Punkt, der vorher gedrückt hat, ist damit weg: Die Fotos machten den größten
Teil des Speicherbedarfs aus und liegen jetzt nicht mehr im engen `localStorage`.

**Trotzdem weiter regelmäßig ein Backup machen.** Alle drei Speicher hängen am
Browserprofil des Geräts. Sie verschwinden, wenn jemand „Browserdaten löschen"
wählt, und iOS räumt sie bei sehr langer Nichtnutzung selbständig auf. Das
Backup unter Einstellungen enthält jetzt auch die Fotos.
