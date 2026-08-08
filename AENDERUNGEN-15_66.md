# DigiBoard Next 15.66 – Ich kann die Tafel jetzt sehen

## Das Wichtigste zuerst

Bis 15.65 habe ich Gestaltung geändert, **ohne das Ergebnis je gesehen zu
haben**. Der Prüfstand konnte sagen, welche Regel gewinnt – aber nicht, ob es
danach gut aussieht. Daraus wurde die Schleife, die dich zu Recht genervt
hat: probiert, verschlimmert, nachgebessert.

Das ist jetzt zu. Im Ordner liegt **`tafel-foto.mjs`**: Es startet den
kleinen Webserver, lädt DigiBoard in einem echten Browser ohne Fenster,
räumt den Begrüßungsschirm weg und legt ein PNG ab.

```
npm install playwright          # einmalig
npx playwright install chromium # einmalig

node tafel-foto.mjs                     → tafel.png, 1600×1000
node tafel-foto.mjs handy.png 430 930   → Handyformat
```

Es meldet außerdem Skriptfehler der Seite mit. Die drei Korrekturen unten
habe ich damit gefunden **und nachgeprüft** – jede einzeln, mit Foto davor
und danach.

## 1 · „Groß" lag auf „Waldkarte"

Das Waldhelden-Schild hat drei Spalten, die dritte (`auto`) ist für die
Knöpfe. Der Knopfbereich war aber selbst ein Raster mit zu engen Spuren – und
ein Rasterfeld schrumpft seinen Inhalt nicht, es lässt ihn überlaufen. Also
lag „Waldkarte" auf „Groß".

Zwei Knöpfe nebeneinander brauchen kein Raster, sondern eine Reihe mit
Abstand.

## 2 · Das Schild war zu schmal für seinen Text

Mein erster Versuch war `width:min(720px,88%)`. Die 88 % beziehen sich aber
auf die Bühne, und die ist an dieser Stelle nur gut 440 Pixel breit – das
Schild blieb schmal, der Titel brach dreifach um. Am Foto sofort zu sehen,
in der Zahl nicht.

Jetzt `width:max-content` mit einer Obergrenze: so breit wie sein Inhalt,
höchstens 94 % der Bühne. Titel und Untertitel stehen wieder je auf einer
Zeile.

## 3 · Weiße Schrift auf hellem Grund

Zweimal dieselbe Geschichte: Der Wochenziel-Zettel und die Tagesinfos hatten
früher einen dunkelgrünen Hintergrund. Der ist inzwischen hell – die
Schriftfarbe ist mitgewandert, nur eben nicht. Ergebnis: cremeweiß auf creme.

Diesmal habe ich nicht geraten, sondern **den Browser gefragt**, welche Regel
gewinnt:

```
html body .app-shell .weekly-goal-widget.weekly-goal-widget h3
  → #22432c !important     Spezifität 303
html body .app-shell .dashboard>.widget[data-id="weeklyGoal"] …
  → #fff8ea !important     Spezifität 403   ← gewann
```

Ein Attributselektor `[data-id="weeklyGoal"]` zählt wie eine Klasse – das
hatte ich beim Zählen übersehen. Bei den Tagesinfos kam dazu, dass die Zeilen
auf `color:inherit` stehen: dort musste die Farbe an der Kachel selbst
gesetzt werden, sonst erben sie weiter das Weiß.

## Prüfergebnis

```
node pruefstand.mjs .          178 von 178 bestanden
node tafel-foto.mjs            Keine Skriptfehler auf der Seite
```

## Was das Foto sonst noch zeigt

Im Prüf-Browser fehlt die Emoji-Schrift, deshalb stehen dort Kästchen statt
🦊 und 🏆. Das ist eine Eigenheit der Prüfumgebung, kein Fehler in DigiBoard –
auf deinem Mac und dem iPhone sind die Symbole da.
