# DigiBoard Next 15.65 – Auf der Tafel liest man wieder

Auf deinem Bildschirmfoto lag an drei Stellen Text auf Text. Alle drei haben
denselben Charakter: nicht „hässlich", sondern **unlesbar**. Auf einer
Klassentafel ist das der schwerste Fehler – die Kinder lesen sie aus fünf
Metern.

## 1 · Die Tagesinfos lagen übereinander

„Sportsachen!" stand auf „Heute Schwimmen", „Klassenrunde" auf „nach der
4. Stunde". Der Grund steht in `styles.css`:

```css
.info-row{ grid-template-columns:36px 1fr }
```

Zwei Spalten: 36 Pixel für ein Symbol, der Rest für den Text. Nur ist die
Zeile anders aufgebaut:

```html
<span>🏊 Heute Schwimmen</span><strong>Sportsachen!</strong>
```

**Das Symbol steckt mit im ersten Text.** Der ganze linke Satz wurde also in
36 Pixel gequetscht, lief heraus und landete auf dem rechten. Die Regel
beschreibt einen Aufbau, den es hier nicht gibt.

Jetzt: links der Satz, rechts die Betonung, dazwischen echter Abstand – und
wenn es eng wird, rutscht die Betonung in die nächste Zeile, statt sich zu
überlagern.

## 2 · Der Geistertext über der Baumkrone

„NÄCHSTES ZIEL · 300 BLÄTTER / 55 fehlen bis Blühender Baum" schwebte halb
durchsichtig über dem Baum. Es war ein **eigenes Schild**, abgesetzt auf
`top:-12px; left:50%` – also genau dorthin, wo auch das Waldhelden-Schild
sitzt. Zwei Elemente, ein Platz.

Dazu stand seine Schrift auf **5 und 6,5 Pixel**. Das ist auf einer
Klassentafel keine Schrift mehr, sondern Struktur.

Die Lösung ist keine neue Position, sondern eine weniger: Die Aussage steht
jetzt **im Waldhelden-Schild** –

> Stufe 3 · Blätterdach · noch 55 Blätter bis „Blühender Baum"

– in lesbarer Größe. Das schwebende Schild entfällt.

## 3 · Das Schild schnitt seinen eigenen Text ab

„Stufe 3 · Blätterdach · 0 HE…". Jetzt darf es umbrechen, und es hat Platz
dafür, weil das zweite Schild weg ist. Nebenbei fällt „0 heute" weg – dieselbe
Zahl steht schon im Chip „0 von 22 heute im Klassenbaum" daneben.

## Der Kaskadenwächter hat sich selbst getäuscht

Als ich ihn nach `.info-row` fragte, meldete er einen Sieger mit Spezifität
**10200** aus `override.css`. Ich hätte meine eigene Regel für verloren
gehalten und angefangen, dagegen anzuschrauben.

Die gemeldete Regel war aber:

```css
#settingsDialog .daily-messages .info-row-number { … }
```

**`.info-row` steckt als Teilwort in `.info-row-number`.** Der Wächter hat
schlicht `includes()` benutzt. Er vergleicht Klassennamen jetzt als ganzes
Wort – `.info-row` trifft nicht mehr auf `.info-row-number`, `.info-row-x`
oder ähnliche.

Das ist der dritte Fehler dieser Art in ihm (nach den mehrzeiligen
Selektoren in 15.57 und den `>*`-Regeln in 15.62). Jeder davon wäre ohne die
Prüfung als „unerklärliches Verhalten im Browser" bei dir gelandet.

## Prüfergebnis

```
node pruefstand.mjs .          178 von 178 bestanden
```

Zehn neue Prüfungen, zwei davon als Grundregel für die ganze Tafel: **keine
Schrift unter 10 Pixel**, und die Tagesinfos auf mindestens 12. Die
5-Pixel-Stellen sind nicht aus Gestaltungswillen entstanden, sondern weil
über die Zeit immer kleiner gestellt wurde, um Inhalt in zu enge Kästen zu
pressen.
