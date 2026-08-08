# DigiBoard Next 15.46

## Kopfzeile auf dem Handy

Die Bedienleiste klebte beim Scrollen an der Oberkante des Fensters und lag
damit unter Uhrzeit, 5G-Anzeige und Akku. Man kam an die Knöpfe nicht heran.

- Die Leiste hält jetzt in jeder Ansicht einen echten Sicherheitsabstand zur
  Statusleiste ein – auch dort, wo Safari für die Dynamic Island 0 Pixel
  meldet. Dafür sorgt ein Mindestwert von 44 Pixeln.
- Die Leiste ist überall dieselbe eine Zeile: **Zurück, Person wechseln,
  Meine Übersicht | Alle Füchse, Einstellungsrad.** Vorher brach sie im
  Fundus und bei „Alle Füchse" in drei Zeilen um, weil die linken Knöpfe in
  einem eigenen Kasten lagen. Sie sind jetzt echte Rasterzellen und können
  nicht mehr umbrechen.
- Zurück sitzt links oben, wie in „Meine Übersicht".
- **Zurück und Schließen-X sind überall orange** – in allen Fenstern und auf
  allen Bildschirmgrößen.
- Jede Tippfläche ist mindestens 44 Pixel groß, wie es iPhone und Android
  beide verlangen.

## Fundus: Ordner und Inhalte in Ordnung

Bei Film-AG lagen Ordnerkarten und Inhalte übereinander. Die Ursache: die
Liste war ein Raster mit genau drei festen Zeilen und abgeschnittenem
Überstand – im Aufbau liegen dort aber vier Blöcke (Kopf, Pfad, Ordner,
Inhalte). Der vierte wurde in dieselbe Zelle gedrängt.

- Die Liste ist jetzt ein normaler Fluss ohne feste Zeilenzahl und ohne
  Abschneiden. Damit ist die Zahl der Einträge beliebig.
- Ordner stehen in einem umbrechenden Raster: **bei 5 AGs sind es zwei
  Zeilen, bei 20 AGs zehn – das Bild bleibt ruhig, die Liste scrollt.**
- Umbenennen und Auflösen sitzen als schmale Spalte im Ordner statt frei
  über dem Namen.
- Inhalte sind eine Karte pro Zeile. Titel, Notiz und die Knöpfe „Öffnen",
  „Für heute", „Verschieben" und „Löschen" stehen in einer eigenen Reihe
  darunter und liegen nie mehr übereinander.
- Der Ordnerpfad und die Fächerreiter dürfen umbrechen.

## Kinderfotos: Fehler gefunden

Die Meldung sagte „22 Kinder wurden geladen", aber es kamen keine Fotos an.
Der Fehler lag nicht beim Laden, sondern beim **Sichern**:

- Die Sicherung bettete die Fotos ein, ohne abzuwarten, bis die Fotodatenbank
  hochgelaufen war. War sie noch nicht bereit, fand die Funktion nichts und
  setzte jedes Foto auf leer – stillschweigend. Die Datei enthielt dann null
  Fotos. Jetzt wird immer gewartet.
- Konnte ein Foto trotzdem nicht gelesen werden, wurde der Verweis darauf
  gelöscht. Damit war das Bild auch auf dem eigenen Gerät verloren. Der
  Verweis bleibt jetzt erhalten.
- **Alle Meldungen nennen ab jetzt die Fotozahl im Klartext**, beim Sichern
  und beim Laden: „22 Kinder geladen, 22 Fotos wurden übernommen ✓" oder
  eben „Achtung: in dieser Datei sind keine Fotos gespeichert. Bitte auf dem
  Ursprungsgerät ein neues Backup erzeugen."
- Enthält eine Datei nur Verweise auf die Datenbank eines fremden Geräts,
  wird genau das gesagt – statt kaputte Bilder anzuzeigen.

**Bitte einmal prüfen:** auf dem Gerät mit den Fotos ein neues Backup
erzeugen. Die Meldung nennt jetzt die Fotozahl. Steht dort 0, liegt es an der
Fotodatenbank dieses Geräts und nicht an der Datei.

## Alle Füchse

- Die fünf Farbknöpfe und „Mehr" waren verschwunden: die Zeile verlangte eine
  feste 202-Pixel-Spalte, die auf dem Telefon umbrach. Jetzt steht der Name
  oben über die ganze Breite und darunter **sechs gleich breite Knöpfe in
  einer Reihe**, mindestens 46 Pixel hoch.
- Die Beschriftung der Farbknöpfe ist zurück. Ein reiner Farbpunkt ist für
  eine Vertretung nicht zu deuten.
- Fotos füllen die Kachel jetzt formatfüllend; wo keins da ist, bleiben die
  Anfangsbuchstaben.

## Meine Übersicht

Die Pinnwand bleibt, wie sie ist. Der untere Teil war kaputt:

- Das Holzschild „Füchse im Blick" lag halb über dem Datum, weil das
  Fuchsbild absolut positioniert war und die Zeile keine eigene Höhe hatte.
  Titel, Datum und Hinweiszeile stehen jetzt sauber untereinander.
- Der Hinweis „Ermahnungen · Notizen · Pausenverbote" war grau in grün und
  nicht lesbar. Er sitzt jetzt auf einer hellen Fläche.
- „Heute keine Auffälligkeiten" war ein grauer Kasten. Jetzt eine klare
  Entlastungsmeldung mit Häkchen.
- Der grüne Knopf war nicht als Knopf zu erkennen: ein Rahmen mit einem
  Pfeilkästchen daneben. Jetzt eine durchgehend grüne Fläche mit
  Beschriftung „🦊 Alle Füchse & Punkte öffnen" und dem Pfeil darin.
- Der Schnelleintrag stapelt sich, damit die Auswahlfelder lesbar bleiben.

## iPhone und Android gleich

- `env(safe-area-inset-*)` hat überall einen Ersatzwert, damit Android
  dieselben Abstände rechnet.
- Vollbildhöhe über `100dvh`, mit `100vh` als Rückfall für ältere Ausgaben.
  Android-Browser schoben sonst Inhalt hinter die Systemleisten.
- `touch-action: manipulation` auf allen Bedienelementen – ohne das reagiert
  der erste Tipp auf Android träge.

## Technik

- Versions- und Offline-Cache auf 15.46, `handy-15-46.css` wird offline
  mitgespeichert.
- Die Waldbühne aus 15.45 bleibt unverändert.
