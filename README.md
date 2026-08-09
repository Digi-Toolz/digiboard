# DigiBoard Next

Digitale Klassentafel für Grundschulen. Zeigt Stundenplan, Wall of Fame,
Wochenziel, Essensplan und Tagesinfos. Läuft im Browser, auf iPhone, iPad,
Laptop und an der digitalen Tafel im Klassenraum.

## Installation

Kolleginnen bekommen die App auf ihr Gerät, indem sie den Link öffnen und
über den Browser installieren:

- **iPhone/iPad** – in Safari öffnen, Teilen-Symbol, „Zum Home-Bildschirm"
- **Laptop (Chrome, Edge)** – Installationssymbol rechts in der Adressleiste

Eine ausführliche Anleitung liegt in `INSTALLATION-FUER-KOLLEGINNEN.md`.

## Datenschutz

**Alle Kinderdaten bleiben auf dem jeweiligen Gerät.** Die App sendet keine
Klassenlisten oder Fotos an den Server, der sie ausliefert. Diese
Trennung – Server liefert nur die App, alle Daten bleiben lokal – ist so
gewählt, damit auch bei einer öffentlichen Bereitstellung keine
personenbezogenen Daten Minderjähriger im Netz landen.

Die Verantwortung für die Daten auf dem jeweiligen Gerät liegt bei der
Nutzerin. Regelmäßige Backups über die Einstellungen sind wichtig, weil
Browser den lokalen Speicher unter bestimmten Umständen aufräumen (iOS Safari
z. B. nach mehreren Wochen ohne Nutzung).

## Für Kolleginnen einrichten

Wer DigiBoard bereits mit einer Klasse konfiguriert hat, kann in den
Einstellungen unter „Klassenpaket teilen" eine Datei erzeugen, die eine
Kollegin per AirDrop, Mail oder iCloud Drive öffnet. Beim ersten Start ihrer
Installation bietet der Einrichtungsassistent an, dieses Paket zu übernehmen.

## Technisches

Statische HTML-App, kein Backend nötig. Läuft direkt aus einem beliebigen
Webserver-Verzeichnis (z. B. GitHub Pages). Ein Service Worker macht sie
offlinefähig; Portraitfotos werden clientseitig in IndexedDB gespeichert.

### Bundles bauen

`app.js`, `photo-store.js`, `package-export.js` und die im Build-Skript
aufgeführten CSS-Dateien sind die bearbeitbaren Quellen. `index.html` lädt die
daraus erzeugten Dateien `app.bundle.js` und `app.bundle.css`.

```bash
npm run build
npm run check:bundles
npm run test:sheets
```

`check:bundles` schlägt fehl, sobald ein Bundle nicht mehr zu seinen Quellen
passt. Das verhindert, dass Änderungen nur im Bundle oder nur in einer
Einzeldatei landen.

Für den lokalen Betrieb und den Offline-Modus siehe `OFFLINE.md`.

Die Änderungen dieser Wartungsversion stehen in `AENDERUNGEN-15_86_1.md`.
Ältere technische Korrekturen sind kompakt in `KORREKTUREN.md` dokumentiert.
