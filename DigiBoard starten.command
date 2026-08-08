#!/bin/bash
# ============================================================
#  DigiBoard starten – zum Doppelklicken
#
#  Startet den kleinen Webserver aus diesem Ordner und öffnet
#  DigiBoard im Browser. Dieses Fenster muss offen bleiben,
#  solange du DigiBoard benutzt.
#
#  Falls sich nichts tut: einmal Rechtsklick auf diese Datei →
#  „Öffnen" → im Hinweisfenster nochmals „Öffnen".
# ============================================================

cd "$(dirname "$0")" || exit 1
PORT=8080

echo ""
echo "  🦊  DigiBoard wird gestartet …"
echo ""

# Läuft schon etwas auf dem Port? Dann einfach nur öffnen.
if lsof -nP -iTCP:$PORT -sTCP:LISTEN >/dev/null 2>&1; then
  echo "  Es läuft bereits etwas auf Port $PORT – ich öffne nur den Browser."
  open "http://localhost:$PORT"
  echo ""
  read -n 1 -s -r -p "  Zum Schließen dieses Fensters eine Taste drücken."
  exit 0
fi

oeffneGleich() { ( sleep 1.5; open "http://localhost:$PORT" ) & }

if command -v node >/dev/null 2>&1; then
  oeffneGleich
  node serve.mjs
elif command -v python3 >/dev/null 2>&1; then
  echo "  Node.js ist nicht installiert – ich nehme Python."
  echo "  (Funktioniert genauso, zeigt nur weniger an.)"
  echo ""
  echo "     Auf diesem Rechner:  http://localhost:$PORT"
  echo "     Fotos nachsehen:     http://localhost:$PORT/foto-diagnose.html"
  echo ""
  echo "  Beenden mit  Ctrl + C"
  echo ""
  oeffneGleich
  python3 -m http.server $PORT --bind 127.0.0.1
else
  echo "  ────────────────────────────────────────────────────────"
  echo "  Auf diesem Mac fehlen sowohl Node.js als auch Python."
  echo ""
  echo "  Node.js gibt es kostenlos unter:  https://nodejs.org"
  echo "  Die Variante „LTS\" wählen, installieren, dann diese"
  echo "  Datei noch einmal doppelklicken."
  echo "  ────────────────────────────────────────────────────────"
  echo ""
  read -n 1 -s -r -p "  Zum Schließen eine Taste drücken."
  exit 1
fi
