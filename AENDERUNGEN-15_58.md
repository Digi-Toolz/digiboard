# DigiBoard Next 15.58 – Ein Kind aus der Klasse entfernen

## Was gefehlt hat

Es gab „Pausieren" – das behält alle Daten – aber keinen Weg, ein Kind
endgültig aus der Klasse zu nehmen. Wechselt ein Kind die Schule, blieben
Name, Foto, Punkte und Notizen für immer im Gerät. Bei Kinderdaten ist das
nicht nur unordentlich.

Auf jeder Kinderkarte in **Einstellungen → Füchse, Namen & Fotos** steht
jetzt ein dritter Knopf: **🗑️ Entfernen**.

## Löschen heißt hier wirklich löschen

Ein Kind steht an **zehn Stellen** im Zustand, nicht nur in der Namensliste.
Bleibt eine davon zurück, tauchen später Geisternamen in Verläufen und
Diensten auf. Geräumt werden:

| Was | Wo |
|---|---|
| Name, Geburtstag, Foto-Verweis | `students` |
| Punkte aller Tage | `points` (Schlüssel `Datum:kind-id`) |
| Punkteverlauf | `pointHistory` |
| Notizen und Maßnahmen | `teamIncidents` |
| übertragene Vorfälle | `remoteIncidentsLite` |
| Platz im Klassenbaum | `publishedGreen`, `previousPublishedGreen` |
| persönliche Blatt-Vermerke | `leafAwards` |
| Stimmen der Kinder | `votes` |
| Wochendienste | `weeklyServices.assignments` |
| das Foto selbst | Gerätedatenbank (IndexedDB) |

**Der Blätterzähler der Klasse bleibt stehen.** Die Blätter hat die ganze
Klasse gesammelt, sie gehören nicht einem Kind allein – die Schatztruhe
fällt beim Weggang eines Kindes nicht von 245 zurück. Nur die persönlichen
Tagesvermerke verschwinden.

Der frei gewordene Platz wird wieder zu einem freien Platz in der Liste.

## Zwei Sicherungen statt einer

**Vorher die Rückfrage.** Sie nennt das Kind beim Namen und zählt auf, was
mit gelöscht wird – „3 Tage mit Punkten, 12 Einträge im Verlauf, 2 Notizen
und Maßnahmen, das Foto". Nicht „Sind Sie sicher?", sondern was tatsächlich
verloren geht.

**Danach das Rückgängig.** `confirm()` ist schnell weggeklickt. Nach dem
Löschen steht deshalb bis zum nächsten Seitenaufruf ein **„↩︎ Rückgängig"**
in der Statuszeile – und es holt wirklich alles zurück, inklusive des Fotos.
Dafür wird das Bild **vor** dem Löschen aus der Datenbank gelesen und im
Arbeitsspeicher gehalten; sonst gäbe es hinterher nichts mehr zurückzuholen.
Das Kind landet wieder an seiner alten Stelle in der Liste, nicht am Ende.

## Der Kaskadenwächter hat vorgearbeitet

Die Karte hatte zwei Knöpfe in zwei Spalten, jetzt sind es drei. Wer die
Spaltenzahl setzt, habe ich **vorher** ausrechnen lassen statt zu hoffen:

```
  100     override.css   →  1fr 1fr
  10100   styles.css     →  1.35fr .9fr        ← bisheriger Sieger
  10202   kind-loeschen-15-58.css → 1.15fr .85fr .85fr   ← neu
```

Ohne diese Vorabrechnung hätte die Regel wieder stillschweigend verloren –
genau der Fehler aus 15.56.

Der Knopf ist bewusst **nicht knallrot**. Rot schreit auf einer Karte mit
Kinderfoto unangemessen laut, und er löscht ja nicht sofort. Beim Berühren
wird er dann deutlich warnend. Unter 620 Pixeln Breite stehen die drei
Knöpfe untereinander – nebeneinander wären sie zu schmal zum sicheren
Treffen.

## Prüfergebnis

25 neue Prüfungen, und zwar keine Aussehensprüfungen: Der Prüfstand legt für
ein Testkind an **jeder** der zehn Stellen Daten an, löscht es wirklich,
sieht an jeder Stelle einzeln nach – und holt es dann zurück.

```
node pruefstand.mjs .          104 von 104 bestanden

  Bilanz zaehlt die Daten des Kindes     {"punkte":1,"verlauf":1,"notizen":1}
  Kind ist aus der Liste                 21 statt 22
  Punkte / Verlauf / Notizen weg         ✓
  aus Kinderstimmen und Diensten weg     ✓
  gesammelte Blaetter der Klasse bleiben 245
  ein Platz wird wieder frei             4 statt 3
  Kind ist zurueck · an der alten Stelle ✓
  zweimal Rueckgaengig tut nichts        1x vorhanden
```

Die letzte Prüfung gibt es, weil ein zweiter Klick auf „Rückgängig" das Kind
sonst doppelt einfügen könnte.
