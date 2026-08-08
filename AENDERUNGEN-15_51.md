# DigiBoard Next 15.51

## Erstmals wirklich gegengeprüft

Ich habe für dieses Projekt einen Prüfstand gebaut (`pruefstand.mjs`). Er lädt
DigiBoard vollständig, einschließlich aller Gestaltungsdateien, und prüft
danach echte Fragen: *Ist der Knopf beschriftet? Ist der ausgeblendete
Bereich wirklich unsichtbar? Bleibt genau ein Startwerkzeug übrig?*

Das ist der Grund, warum ich vorher mehrfach danebengegriffen habe – ich
konnte nur lesen, nicht sehen. Beim ersten Durchlauf hat der Prüfstand
prompt einen Fehler von mir gefunden, siehe unten.

Ausführen mit: `node pruefstand.mjs .`

## Der doppelte Zurück-Knopf

Es gab zwei: „Zurück zur Tafel" oben in der Leiste und „Zurück zu meiner
Übersicht" im Bereich selbst. Der innere ist überflüssig – „Meine Übersicht"
steht oben schon als Reiter. Er ist jetzt ausgeblendet.

Dazu ist der Kopf des Bereichs aufgeräumt: der Zugangscode-Block war eine
Textwand, in der Titel, Erklärung und Ankreuzfeld ohne Abstand ineinander
liefen. Jetzt drei getrennte Zeilen mit richtigen Ankreuzfeldern.

## „Meine Auswahl" war nicht zu deuten

Pro Zeile standen sechs namenlose Symbolknöpfe: **★ ↔ ↑ ↓ ◉ ×**. Selbst wer
sie einmal erklärt bekommt, vergisst es wieder. Besonders der Knopf `↔`
schaltete die Anzeigeposition **im Kreis** durch – man musste dreimal tippen
und raten, was gerade gilt.

Jetzt eine Karte pro Werkzeug:

- Symbol, Name und Adresse links, klar getrennt.
- Marken zeigen den Zustand: „★ Startwerkzeug", „Ausgeblendet".
- **Wo? [Oben] [Favorit] [Beides]** – drei benannte Schalter, der gültige ist
  grün. Kein Durchschalten mehr, kein Raten.
- Darunter beschriftete Aktionen: „★ Start", „Ausblenden", ↑ ↓ und
  „Entfernen". Entfernen sitzt rechts abgesetzt und ist rot.
- Auf schmalen Fenstern stapeln sich die Reihen, statt sich zu quetschen.

**Der Fehler, den der Prüfstand fand:** Beim Umschalten auf „Favorit" fiel
das letzte Startwerkzeug weg und es blieb **keines** übrig. Die Regel „genau
ein Startwerkzeug" war an drei Stellen einzeln nachgebaut – beim Löschen, beim
Umschalten, beim Hinzufügen. Sie steht jetzt an einer Stelle und wird nach
jeder Änderung angewandt.

## Klassenteam: Karten mit eigenem Foto

Aus den blassen Kästchen sind richtige Karten geworden: Bild in einem Ring in
der Farbe der Person, Name, Rolle, farbige Kante oben. Die Kachelbreite
fließt – fünf Personen sehen genauso ruhig aus wie zehn.

**Jede Person kann ein eigenes Foto bekommen.** Oben rechts auf der Karte
sitzt ein Kamerakreis; darunter erscheint ein Kreuz zum Entfernen.

- Das Bild wird quadratisch zugeschnitten und auf 320 Pixel verkleinert.
- Abgelegt wird es auf demselben Weg wie die Kinderfotos: in die Fotodatenbank
  wenn möglich, sonst klein gerechnet in den Browserspeicher. Es geht also
  auch dann nicht verloren, wenn die Datenbank blockiert ist.
- Ist kein Foto gesetzt, bleibt das gewählte Symbol oder die Anfangsbuchstaben.
- Das Fotofeld ist ein **echtes Dateifeld auf der Karte**, kein per
  JavaScript ausgelöster Umweg – das war beim Laden der Kinderdaten der
  entscheidende Unterschied.

Technisch nötig war dafür ein Umbau: die Karte war ein einziger `<button>`.
Ein Dateifeld darf nicht in einem Knopf stehen, und ein Klick darauf hätte
immer auch die Person gewechselt. Die Karte ist jetzt ein Behälter mit einem
Auswahlknopf und dem Fotofeld daneben.

## Prüfergebnis

```
Klassenteam-Karten ........................ 7 von 7 bestanden
Meine Auswahl (Werkzeuge) ................. 5 von 5 bestanden
Positionsschalter wirklich schalten ....... 5 von 5 bestanden
Doppelter Zurück-Knopf .................... 2 von 2 bestanden
Ausgeblendete Bereiche (Regression 15.48) . 2 von 2 bestanden
Dateifelder antippbar (15.47) ............. 4 von 4 bestanden
```
