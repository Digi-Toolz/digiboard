# DigiBoard Next 15.86.1 – Build und Geräteabgleich

- `app.bundle.js` und `app.bundle.css` werden reproduzierbar aus den Einzelquellen gebaut.
- Die zuvor nur im Bundle vorhandenen Änderungen aus 15.86 liegen wieder als bearbeitbare Quellen vor.
- `npm run check:bundles` erkennt Unterschiede zwischen Quellen und ausgelieferten Bundles.
- Der Google-Apps-Script-Endpunkt unterstützt jetzt `action: "points"` und `mode=points`.
- Präsentation, reduzierter Punktestand und ältere vollständige Zustände werden getrennt gespeichert.
- Ein automatischer Vertragstest prüft Schreiben, Lesen, Aktualisieren und Zugriffsschutz des Sheets-Endpunkts.
