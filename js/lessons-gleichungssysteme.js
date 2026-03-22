const LessonsGleichungssysteme = [
  // ============================================================
  // Lektion 7: Lineare Gleichungen mit zwei Variablen
  // ============================================================
  {
    id: 7,
    title: 'Lineare Gleichungen mit zwei Variablen',
    explanation: {
      html: `
        <div class="book-ref">
          <div class="book-title">Im Buch nachschlagen</div>
          <strong>Vorbereitungsblatt Zeile 11:</strong> Lineare Gleichungen mit zwei Variablen<br>
          <strong>Buch:</strong> S. 101 | <strong>Aufgaben:</strong> S. 101 Nr. A, B, 3h<br>
          <strong>Tipp:</strong> Merke und Beispiele auf S. 101 aufmerksam durchlesen!
        </div>

        <h3>Eine Gleichung - unendlich viele Loesungen?</h3>
        <div class="info-box">
          Eine Gleichung wie <strong>2x + y = 10</strong> hat nicht nur eine Loesung,
          sondern <strong>unendlich viele Loesungspaare (x|y)</strong>.<br>
          Jedes Loesungspaar ist ein <strong>Punkt auf einer Geraden</strong>.
        </div>

        <h4>Alltagsbeispiel: Das Menue</h4>
        <p>
          Stell dir vor, du hast <strong>10 Euro</strong> und kannst zwei Sachen kaufen:
          Sache A kostet 2 Euro pro Stueck (das ist das 2x) und Sache B kostet 1 Euro (das ist das y).
          Die Gleichung <strong>2x + y = 10</strong> beschreibt alle Moeglichkeiten, genau 10 Euro auszugeben.
          Es gibt nicht nur eine Loesung, sondern viele: 0 von A und 10 von B, 1 von A und 8 von B, usw.
        </p>

        <h4>Wie findet man Loesungspaare?</h4>
        <p>
          <strong>Schritt 1:</strong> Stelle die Gleichung nach y um.<br>
          Beispiel: 2x + y = 10 -> <strong>y = 10 - 2x</strong> (auch bekannt als y = -2x + 10)
        </p>
        <p>
          <strong>Schritt 2:</strong> Setze verschiedene x-Werte ein und berechne y.
          So entsteht eine <strong>Wertetabelle</strong>.
        </p>

        <div class="formula-box">
          <strong>Vorgehen:</strong><br>
          1. Gleichung nach y umstellen<br>
          2. x-Werte einsetzen -> y berechnen<br>
          3. Punkte ins Koordinatensystem eintragen<br>
          4. Punkte zu einer Geraden verbinden
        </div>

        <h4>Die Gerade zu 2x + y = 10</h4>
        <p>
          Hier siehst du die Gerade y = -2x + 10 mit den Loesungspunkten aus der Wertetabelle.
          Der <strong style="color:#EF4444">rote Punkt (3|5)</strong> liegt <strong>nicht</strong> auf der Geraden -
          er ist also <strong>keine Loesung</strong> der Gleichung (Probe: 2*3 + 5 = 11, nicht 10).
        </p>
        <div id="graph-l7-solutions" class="math-graph"></div>

        <h4>Probier es selbst aus!</h4>
        <p>
          Klicke auf Punkte im Koordinatensystem, um zu testen, ob sie auf der Geraden liegen.
          Die App rechnet die Probe automatisch fuer dich:
        </p>
        <div id="graph-l7-click" class="math-graph"></div>

        <div class="warning-box">
          <strong>Merke:</strong> Jeder Punkt auf der Geraden ist eine Loesung der Gleichung.
          Die Gerade hat unendlich viele Punkte -> unendlich viele Loesungen!
        </div>

        
      `,
      onRender: function () {
        // Statischer Graph: y = -2x + 10 mit Loesungspunkten und einem Nicht-Loesungspunkt
        MathGraph.create('graph-l7-solutions', {
          xRange: [-1, 7],
          yRange: [-1, 12],
          lines: [
            { m: -2, b: 10, color: '#3B82F6', label: 'y = -2x + 10' }
          ],
          points: [
            { x: 0, y: 10, color: '#3B82F6', label: '(0|10)' },
            { x: 1, y: 8, color: '#3B82F6', label: '(1|8)' },
            { x: 2, y: 6, color: '#3B82F6', label: '(2|6)' },
            { x: 3, y: 4, color: '#3B82F6', label: '(3|4)' },
            { x: 5, y: 0, color: '#3B82F6', label: '(5|0)' },
            { x: 3, y: 5, color: '#EF4444', label: '(3|5) keine Lsg!' }
          ]
        });

        // Klick-Interaktion: Teste ob Punkte auf der Geraden liegen
        MathGraph.clickable('graph-l7-click', {
          xRange: [-1, 7],
          yRange: [-1, 12],
          mode: 'point-on-line',
          line: { m: -2, b: 10, label: '2x + y = 10' }
        });
      }
    },
    example: {
      title: 'Wertetabelle fuer 2x + y = 10',
      steps: [
        {
          label: 'Schritt 1: Nach y umstellen',
          html: '<div class="example-calc">2x + y = 10<br>y = 10 - 2x</div>'
        },
        {
          label: 'Schritt 2: Wertetabelle erstellen',
          html: `
            Setze verschiedene x-Werte ein:
            <div class="example-calc">
              x = 0 -> y = 10 - 2*0 = <strong>10</strong> -> Punkt (0|10)<br>
              x = 1 -> y = 10 - 2*1 = <strong>8</strong> -> Punkt (1|8)<br>
              x = 2 -> y = 10 - 2*2 = <strong>6</strong> -> Punkt (2|6)<br>
              x = 3 -> y = 10 - 2*3 = <strong>4</strong> -> Punkt (3|4)<br>
              x = 5 -> y = 10 - 2*5 = <strong>0</strong> -> Punkt (5|0)
            </div>
          `
        },
        {
          label: 'Schritt 3: Punkte einzeichnen',
          html: 'Trage alle Punkte in ein Koordinatensystem ein.'
        },
        {
          label: 'Schritt 4: Gerade zeichnen',
          html: 'Verbinde die Punkte zu einer Geraden. <strong>Alle Punkte auf dieser Geraden</strong> sind Loesungen der Gleichung.'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Welches Zahlenpaar ist eine Lösung der Gleichung <strong>3x + y = 12</strong>?',
        options: ['(2|6)', '(3|2)', '(4|1)', '(2|5)'],
        correct: 0,
        explanation: 'Setze (2|6) ein: 3·2 + 6 = 6 + 6 = 12 ✓. Die anderen Paare ergeben nicht 12: (3|2) → 11, (4|1) → 13, (2|5) → 11.'
      },
      {
        type: 'fill-table',
        question: 'Stelle die Gleichung <strong>x + 2y = 8</strong> nach y um (y = 4 − 0,5x) und fülle die Wertetabelle aus.',
        xValues: [-2, 0, 2, 4, 6, 8],
        correctYValues: [5, 4, 3, 2, 1, 0],
        givenIndices: [1],
        explanation: 'y = 4 − 0,5x. Für x = −2: y = 4 − 0,5·(−2) = 4 + 1 = 5. Für x = 2: y = 4 − 1 = 3. Für x = 4: y = 4 − 2 = 2. Für x = 6: y = 4 − 3 = 1. Für x = 8: y = 4 − 4 = 0.',
        hint: 'Setze jeden x-Wert in y = 4 − 0,5x ein. Bei negativem x wird das Minus zu Plus!'
      },
      {
        type: 'coordinate-input',
        question: 'Finde ein Lösungspaar für <strong>5x − y = 15</strong>.<br>Setze x = 4 ein und berechne y.',
        correctX: 4,
        correctY: 5,
        tolerance: 0.01,
        xLabel: 'x',
        yLabel: 'y',
        explanation: '5·4 − y = 15 → 20 − y = 15 → y = 5. Das Lösungspaar ist (4|5).',
        hint: 'Setze x = 4 in die Gleichung ein: 5·4 − y = 15. Dann löse nach y auf.'
      },
      {
        type: 'multiple-choice',
        question: 'Wie viele Lösungen hat die Gleichung <strong>x + y = 7</strong>?',
        options: ['genau eine', 'keine', 'genau zwei', 'unendlich viele'],
        correct: 3,
        explanation: 'Eine lineare Gleichung mit zwei Variablen hat unendlich viele Lösungen. Zum Beispiel: (0|7), (1|6), (2|5), (3|4), ... Jeder Punkt auf der Geraden ist eine Lösung.'
      }
    ]
  },

  // ============================================================
  // Lektion 8: Gleichungssysteme grafisch loesen
  // ============================================================
  {
    id: 8,
    title: 'Gleichungssysteme grafisch lösen',
    explanation: {
      html: `
        <div class="book-ref">
          <div class="book-title">Im Buch nachschlagen</div>
          <strong>Vorbereitungsblatt Zeile 12:</strong> Lineare Gleichungssysteme<br>
          <strong>Buch:</strong> S. 103 | <strong>Aufgaben:</strong> S. 103 Nr. A, B<br>
          <strong>Tipp:</strong> Merke und Beispiele auf S. 103 aufmerksam durchlesen!
        </div>

        <h3>Was ist ein lineares Gleichungssystem (LGS)?</h3>
        <div class="info-box">
          Ein <strong>lineares Gleichungssystem</strong> besteht aus <strong>2 Gleichungen
          mit 2 Variablen</strong> (x und y).<br>
          Gesucht ist das Zahlenpaar (x|y), das <strong>beide</strong> Gleichungen gleichzeitig erfuellt.
        </div>

        <h4>Alltagsbeispiel: Zwei Freunde laufen aufeinander zu</h4>
        <p>
          Stell dir zwei Freunde vor, die sich bewegen. Einer startet links unten und laeuft nach rechts oben (Gerade 1),
          der andere startet rechts oben und laeuft nach links unten (Gerade 2).
          Der <strong>Treffpunkt</strong> ist die Loesung - dort sind beide gleichzeitig am selben Ort.
          Im Koordinatensystem ist das der <strong>Schnittpunkt</strong> beider Geraden.
        </p>

        <h4>Beispiel: y = x + 1 und y = -x + 5</h4>
        <p>
          Die blaue Gerade steigt (m = 1), die rote faellt (m = -1).
          Sie treffen sich im gruenen Punkt <strong>S(2|3)</strong> - das ist die Loesung des LGS:
        </p>
        <div id="graph-l8-example" class="math-graph"></div>

        <div class="formula-box">
          <strong>Vorgehen (grafische Loesung):</strong><br>
          1. Fuer jede Gleichung eine Wertetabelle erstellen<br>
          2. Beide Geraden ins Koordinatensystem zeichnen<br>
          3. Schnittpunkt ablesen<br>
          4. Probe: Schnittpunkt in <strong>beide</strong> Gleichungen einsetzen
        </div>

        <h4>Probier es selbst aus!</h4>
        <p>
          Verschiebe die Regler, um die Steigungen (m) und y-Achsenabschnitte (b) beider Geraden zu veraendern.
          Beobachte, wie sich der Schnittpunkt bewegt - und was passiert, wenn die Geraden parallel werden:
        </p>
        <div id="graph-l8-slider" class="math-graph"></div>

        <div class="warning-box">
          <strong>Wichtig:</strong> Der Schnittpunkt muss in <strong>beiden</strong> Gleichungen stimmen!
          Immer die Probe machen, um sicherzugehen.
        </div>

        
      `,
      onRender: function () {
        // Statischer Graph: y = x + 1 und y = -x + 5, Schnittpunkt (2,3)
        MathGraph.create('graph-l8-example', {
          xRange: [-1, 7],
          yRange: [-1, 7],
          lines: [
            { m: 1, b: 1, color: '#3B82F6', label: 'y = x + 1' },
            { m: -1, b: 5, color: '#EF4444', label: 'y = -x + 5' }
          ],
          intersection: { x: 2, y: 3 }
        });

        // Interaktiver Slider: 4 Parameter fuer 2 Geraden
        MathGraph.interactive('graph-l8-slider', {
          xRange: [-6, 6],
          yRange: [-6, 6],
          equations: [
            { expr: 'm1*x+b1', color: '#3B82F6', label: 'f' },
            { expr: 'm2*x+b2', color: '#EF4444', label: 'g' }
          ],
          sliders: [
            { param: 'm1', label: 'Steigung m\u2081', min: -4, max: 4, step: 0.5, initial: 1 },
            { param: 'b1', label: 'y-Achsenabschnitt b\u2081', min: -5, max: 5, step: 0.5, initial: 1 },
            { param: 'm2', label: 'Steigung m\u2082', min: -4, max: 4, step: 0.5, initial: -1 },
            { param: 'b2', label: 'y-Achsenabschnitt b\u2082', min: -5, max: 5, step: 0.5, initial: 5 }
          ],
          showIntersection: true,
          showEquation: true,
          showStatus: true
        });
      }
    },
    example: {
      title: 'Grafische Loesung: y = x + 1 und y = -x + 5',
      steps: [
        {
          label: 'Schritt 1: Wertetabellen erstellen',
          html: `
            <div class="example-calc">
              <strong>Gerade (1): y = x + 1</strong><br>
              x = 0 -> y = 1 | x = 1 -> y = 2 | x = 2 -> y = 3 | x = 4 -> y = 5<br><br>
              <strong>Gerade (2): y = -x + 5</strong><br>
              x = 0 -> y = 5 | x = 1 -> y = 4 | x = 2 -> y = 3 | x = 4 -> y = 1
            </div>
          `
        },
        {
          label: 'Schritt 2: Beide Geraden zeichnen',
          html: 'Zeichne beide Geraden in das gleiche Koordinatensystem.'
        },
        {
          label: 'Schritt 3: Schnittpunkt ablesen',
          html: '<div class="example-calc">Die Geraden schneiden sich im Punkt <strong>(2|3)</strong>.</div>'
        },
        {
          label: 'Schritt 4: Probe machen',
          html: `
            <div class="example-calc">
              In (1): y = x + 1 -> 3 = 2 + 1 = 3 <strong>stimmt!</strong><br>
              In (2): y = -x + 5 -> 3 = -2 + 5 = 3 <strong>stimmt!</strong>
            </div>
            <strong>Die Loesung (2|3) ist korrekt!</strong>
          `
        }
      ]
    },
    exercises: [
      {
        type: 'coordinate-input',
        question: 'Löse grafisch:<br>(1) y = 2x − 1<br>(2) y = −x + 5<br><br>Was ist der Schnittpunkt?',
        correctX: 2,
        correctY: 3,
        tolerance: 0.01,
        xLabel: 'x',
        yLabel: 'y',
        explanation: 'Gleichsetzen: 2x − 1 = −x + 5 → 3x = 6 → x = 2. Einsetzen: y = 2·2 − 1 = 3. Schnittpunkt: (2|3).',
        hint: 'Setze die rechten Seiten gleich: 2x − 1 = −x + 5. Löse nach x auf und berechne dann y.'
      },
      {
        type: 'multiple-choice',
        question: 'Was bedeutet der <strong>Schnittpunkt</strong> zweier Geraden bei einem LGS?',
        options: [
          'Dort sind beide Geraden parallel',
          'Das ist der y-Achsenabschnitt',
          'Das Zahlenpaar löst beide Gleichungen',
          'Dort ist die Steigung gleich'
        ],
        correct: 2,
        explanation: 'Der Schnittpunkt ist der Punkt, dessen Koordinaten (x|y) beide Gleichungen gleichzeitig erfüllen. Das ist die Lösung des LGS.'
      },
      {
        type: 'coordinate-input',
        question: 'Löse:<br>(1) y = 0,5x + 2<br>(2) y = −x + 5<br><br>Schnittpunkt?',
        correctX: 2,
        correctY: 3,
        tolerance: 0.01,
        xLabel: 'x',
        yLabel: 'y',
        explanation: 'Gleichsetzen: 0,5x + 2 = −x + 5 → 1,5x = 3 → x = 2. Einsetzen: y = 0,5·2 + 2 = 3. Schnittpunkt: (2|3).',
        hint: 'Setze gleich: 0,5x + 2 = −x + 5 → bringe alle x auf eine Seite: 1,5x = 3.'
      },
      {
        type: 'multiple-choice',
        question: 'Zwei <strong>parallele Geraden</strong> bilden ein LGS. Wie viele Lösungen hat es?',
        options: ['eine Lösung', 'keine Lösung', 'zwei Lösungen', 'unendlich viele'],
        correct: 1,
        explanation: 'Parallele Geraden schneiden sich nie → es gibt keinen gemeinsamen Punkt → keine Lösung.'
      }
    ]
  },

  // ============================================================
  // Lektion 9: Gleichsetzungsverfahren
  // ============================================================
  {
    id: 9,
    title: 'Gleichsetzungsverfahren',
    explanation: {
      html: `
        <div class="book-ref">
          <div class="book-title">Im Buch nachschlagen</div>
          <strong>Vorbereitungsblatt Zeile 13:</strong> Gleichsetzungsverfahren<br>
          <strong>Buch:</strong> S. 106 | <strong>Aufgaben:</strong> S. 106 Nr. 3, A, 3h<br>
          <strong>Tipp:</strong> Merke und Beispiele auf S. 106 aufmerksam durchlesen!
        </div>

        <h3>Beide Seiten gleichsetzen</h3>
        <div class="info-box">
          Wenn beide Gleichungen nach <strong>y</strong> (oder x) aufgeloest sind,
          kannst du die rechten Seiten einfach <strong>gleichsetzen</strong>.
          Das funktioniert, weil beide rechten Seiten gleich y sind - also muessen sie auch gleich sein!
        </div>

        <h4>Alltagsbeispiel: Wann gleich teuer?</h4>
        <p>
          Stell dir zwei Handytarife vor:<br>
          <strong>Tarif A:</strong> y = 3x - 2 (z.B. 3 Cent pro Minute, 2 Euro Startguthaben abgezogen)<br>
          <strong>Tarif B:</strong> y = -x + 6 (z.B. 1 Cent Rabatt pro Minute, 6 Euro Grundgebuehr)<br>
          Die Frage "Ab wann kosten beide gleich viel?" bedeutet: Wann ist <strong>3x - 2 = -x + 6</strong>?
        </p>

        <h4>Grafische Darstellung</h4>
        <p>
          Im Graphen siehst du die beiden Geraden. Der Schnittpunkt <strong>S(2|4)</strong> ist die Loesung,
          die wir mit dem Gleichsetzungsverfahren berechnen:
        </p>
        <div id="graph-l9-example" class="math-graph"></div>

        <h4>Das Verfahren Schritt fuer Schritt</h4>
        <p>Beispiel: (1) <span class="highlight-blue">y = 3x - 2</span> und (2) <span class="highlight-red">y = -x + 6</span></p>

        <div class="algebra-step">
          Beide sind nach y aufgeloest, also rechte Seiten gleichsetzen:
        </div>
        <div class="algebra-step">
          <span class="highlight-blue">3x - 2</span> = <span class="highlight-red">-x + 6</span>
        </div>
        <div class="algebra-arrow">+x auf beiden Seiten</div>
        <div class="algebra-step">
          4x - 2 = 6
        </div>
        <div class="algebra-arrow">+2 auf beiden Seiten</div>
        <div class="algebra-step">
          4x = 8
        </div>
        <div class="algebra-arrow">:4</div>
        <div class="algebra-step">
          <strong>x = 2</strong>
        </div>
        <div class="algebra-step" style="margin-top: 0.5em;">
          x = 2 in (1) einsetzen: y = 3*2 - 2 = <strong>4</strong>
        </div>
        <div class="algebra-step">
          <span class="highlight-green">Loesung: (2|4)</span>
        </div>

        <div class="formula-box">
          <strong>Schritte beim Gleichsetzungsverfahren:</strong><br>
          1. Beide Gleichungen nach y (oder x) umstellen<br>
          2. Die rechten Seiten gleichsetzen<br>
          3. Nach der verbleibenden Variable aufloesen<br>
          4. Den Wert in eine Gleichung einsetzen -> zweite Variable berechnen<br>
          5. <strong>Probe machen!</strong>
        </div>

        <div class="warning-box">
          <strong>Wann benutzt man dieses Verfahren?</strong><br>
          Am besten, wenn <strong>beide Gleichungen schon nach y (oder x) aufgeloest</strong> sind.
          Dann kann man direkt gleichsetzen, ohne vorher umstellen zu muessen.
        </div>

        
      `,
      onRender: function () {
        // Statischer Graph: y = 3x - 2 und y = -x + 6, Schnittpunkt (2, 4)
        MathGraph.create('graph-l9-example', {
          xRange: [-1, 5],
          yRange: [-3, 8],
          lines: [
            { m: 3, b: -2, color: '#3B82F6', label: 'y = 3x - 2' },
            { m: -1, b: 6, color: '#EF4444', label: 'y = -x + 6' }
          ],
          intersection: { x: 2, y: 4 }
        });
      }
    },
    example: {
      title: 'Gleichsetzungsverfahren: y = 3x - 2 und y = -x + 6',
      steps: [
        {
          label: 'Schritt 1: Gleichsetzen',
          html: `
            Beide Gleichungen sind nach y aufgeloest -> rechte Seiten gleichsetzen:
            <div class="example-calc">3x - 2 = -x + 6</div>
          `
        },
        {
          label: 'Schritt 2: Nach x aufloesen',
          html: `
            <div class="example-calc">
              3x - 2 = -x + 6 &nbsp;&nbsp;| +x<br>
              4x - 2 = 6 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| +2<br>
              4x = 8 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| :4<br>
              <strong>x = 2</strong>
            </div>
          `
        },
        {
          label: 'Schritt 3: y berechnen',
          html: `
            x = 2 in Gleichung (1) einsetzen:
            <div class="example-calc">y = 3*2 - 2 = 6 - 2 = <strong>4</strong></div>
          `
        },
        {
          label: 'Schritt 4: Probe in Gleichung (2)',
          html: `
            <div class="example-calc">
              y = -x + 6 -> -2 + 6 = 4 stimmt!
            </div>
            <strong>Loesung: (2|4)</strong>
          `
        }
      ]
    },
    exercises: [
      {
        type: 'coordinate-input',
        question: 'Löse mit dem Gleichsetzungsverfahren:<br>(1) y = 2x + 1<br>(2) y = −x + 7',
        correctX: 2,
        correctY: 5,
        tolerance: 0.01,
        xLabel: 'x',
        yLabel: 'y',
        explanation: 'Gleichsetzen: 2x + 1 = −x + 7 → 3x = 6 → x = 2. Einsetzen: y = 2·2 + 1 = 5. Lösung: (2|5).',
        hint: 'Setze die rechten Seiten gleich: 2x + 1 = −x + 7. Bringe alle x auf eine Seite.'
      },
      {
        type: 'coordinate-input',
        question: 'Löse:<br>(1) y = 4x − 3<br>(2) y = x + 6',
        correctX: 3,
        correctY: 9,
        tolerance: 0.01,
        xLabel: 'x',
        yLabel: 'y',
        explanation: 'Gleichsetzen: 4x − 3 = x + 6 → 3x = 9 → x = 3. Einsetzen: y = 4·3 − 3 = 9. Lösung: (3|9).',
        hint: '4x − 3 = x + 6 → Ziehe x ab: 3x − 3 = 6 → 3x = 9 → x = 3.'
      },
      {
        type: 'multiple-choice',
        question: 'Wann benutzt man das <strong>Gleichsetzungsverfahren</strong> am besten?',
        options: [
          'Wenn beide Gleichungen nach y aufgelöst sind',
          'Wenn eine Variable den Koeffizienten 1 hat',
          'Wenn die Koeffizienten einer Variable gleich sind',
          'Immer'
        ],
        correct: 0,
        explanation: 'Das Gleichsetzungsverfahren ist am einfachsten, wenn beide Gleichungen schon nach y (oder x) aufgelöst sind. Dann kann man direkt die rechten Seiten gleichsetzen.'
      },
      {
        type: 'coordinate-input',
        question: 'Löse:<br>(1) y = −2x + 10<br>(2) y = 3x',
        correctX: 2,
        correctY: 6,
        tolerance: 0.01,
        xLabel: 'x',
        yLabel: 'y',
        explanation: 'Gleichsetzen: −2x + 10 = 3x → 10 = 5x → x = 2. Einsetzen: y = 3·2 = 6. Lösung: (2|6).',
        hint: '−2x + 10 = 3x → Bringe −2x auf die andere Seite: 10 = 5x → x = 2.'
      }
    ]
  },

  // ============================================================
  // Lektion 10: Einsetzungsverfahren
  // ============================================================
  {
    id: 10,
    title: 'Einsetzungsverfahren',
    explanation: {
      html: `
        <div class="book-ref">
          <div class="book-title">Im Buch nachschlagen</div>
          <strong>Vorbereitungsblatt Zeile 14:</strong> Einsetzungsverfahren<br>
          <strong>Buch:</strong> S. 109 | <strong>Aufgaben:</strong> S. 109 Nr. 1, A, 5l<br>
          <strong>Tipp:</strong> Merke und Beispiele auf S. 109 aufmerksam durchlesen!
        </div>

        <h3>Einsetzen statt Gleichsetzen</h3>
        <div class="info-box">
          Beim Einsetzungsverfahren stellst du <strong>eine Gleichung nach x oder y um</strong>
          und setzt den Ausdruck dann in die <strong>andere Gleichung</strong> ein.
          So wird aus 2 Gleichungen mit 2 Variablen <strong>eine Gleichung mit 1 Variable</strong>!
        </div>

        <h4>Alltagsbeispiel: Das Puzzle</h4>
        <p>
          Stell dir vor, du weisst: <strong>"y ist gleich 7 minus x"</strong> (aus Gleichung 1).
          Dann kannst du ueberall, wo in Gleichung 2 ein "y" steht, einfach <strong>"7 - x"</strong> hinschreiben.
          Wie bei einem Puzzle: Du setzt ein Stueck ins andere ein.
        </p>

        <h4>Grafische Darstellung</h4>
        <p>
          Die Geraden aus x + y = 7 (also y = -x + 7) und 2x - y = 5 (also y = 2x - 5) schneiden sich
          im Punkt <strong>S(4|3)</strong>:
        </p>
        <div id="graph-l10-example" class="math-graph"></div>

        <h4>Das Verfahren Schritt fuer Schritt</h4>
        <p>Beispiel: (1) <span class="highlight-blue">x + y = 7</span> und (2) <span class="highlight-red">2x - y = 5</span></p>

        <div class="algebra-step">
          <strong>Schritt 1:</strong> Gleichung (1) nach y umstellen:
        </div>
        <div class="algebra-step">
          x + y = 7 &nbsp;&nbsp;-> &nbsp;&nbsp;<span class="highlight-blue">y = 7 - x</span>
        </div>

        <div class="algebra-step" style="margin-top: 0.5em;">
          <strong>Schritt 2:</strong> In Gleichung (2) fuer y einsetzen:
        </div>
        <div class="algebra-step">
          2x - <span class="highlight-blue">(7 - x)</span> = 5
        </div>

        <div class="algebra-step" style="margin-top: 0.5em; padding: 0.5em; background: #FEF3C7; border-radius: 6px;">
          <strong style="color: #D97706;">Achtung - Klammer aufloesen!</strong><br>
          Das Minus vor der Klammer aendert die Vorzeichen <strong>aller</strong> Terme in der Klammer:<br>
          -(7 - x) = <strong>-7 + x</strong>
        </div>

        <div class="algebra-step">
          2x - 7 + x = 5
        </div>
        <div class="algebra-arrow">Zusammenfassen: 2x + x = 3x</div>
        <div class="algebra-step">
          3x - 7 = 5
        </div>
        <div class="algebra-arrow">+7</div>
        <div class="algebra-step">
          3x = 12
        </div>
        <div class="algebra-arrow">:3</div>
        <div class="algebra-step">
          <strong>x = 4</strong>
        </div>
        <div class="algebra-step" style="margin-top: 0.5em;">
          x = 4 in <span class="highlight-blue">y = 7 - x</span> einsetzen: y = 7 - 4 = <strong>3</strong>
        </div>
        <div class="algebra-step">
          <span class="highlight-green">Loesung: (4|3)</span>
        </div>

        <div class="formula-box">
          <strong>Schritte beim Einsetzungsverfahren:</strong><br>
          1. Eine Gleichung nach einer Variable umstellen<br>
          2. Den Ausdruck in die <strong>andere</strong> Gleichung einsetzen<br>
          3. Die entstehende Gleichung aufloesen<br>
          4. Zweite Variable berechnen (Wert zurueckeinsetzen)<br>
          5. <strong>Probe machen!</strong>
        </div>

        <div class="warning-box">
          <strong>Haeufiger Fehler:</strong> Vergiss nicht, die <strong>Klammer richtig aufzuloesen</strong>,
          wenn du den Ausdruck einsetzt! Besonders bei <strong>Minus vor der Klammer</strong> aufpassen:
          -(a - b) = -a + b, nicht -a - b!
        </div>

        
      `,
      onRender: function () {
        // Statischer Graph: x + y = 7 (y = -x + 7) und 2x - y = 5 (y = 2x - 5), Schnittpunkt (4, 3)
        MathGraph.create('graph-l10-example', {
          xRange: [-1, 7],
          yRange: [-2, 8],
          lines: [
            { m: -1, b: 7, color: '#3B82F6', label: 'y = -x + 7' },
            { m: 2, b: -5, color: '#EF4444', label: 'y = 2x - 5' }
          ],
          intersection: { x: 4, y: 3 }
        });
      }
    },
    example: {
      title: 'Einsetzungsverfahren: x + y = 7 und 2x - y = 5',
      steps: [
        {
          label: 'Schritt 1: Eine Gleichung nach y umstellen',
          html: `
            Aus Gleichung (1):
            <div class="example-calc">x + y = 7 -> <strong>y = 7 - x</strong></div>
          `
        },
        {
          label: 'Schritt 2: In Gleichung (2) einsetzen',
          html: `
            Ersetze y in (2) durch (7 - x):
            <div class="example-calc">2x - (7 - x) = 5</div>
          `
        },
        {
          label: 'Schritt 3: Nach x aufloesen',
          html: `
            <div class="example-calc">
              2x - 7 + x = 5<br>
              3x - 7 = 5 &nbsp;&nbsp;| +7<br>
              3x = 12 &nbsp;&nbsp;&nbsp;&nbsp;| :3<br>
              <strong>x = 4</strong>
            </div>
          `
        },
        {
          label: 'Schritt 4: y berechnen und Probe',
          html: `
            <div class="example-calc">
              y = 7 - x = 7 - 4 = <strong>3</strong><br><br>
              Probe in (2): 2*4 - 3 = 8 - 3 = 5 stimmt!
            </div>
            <strong>Loesung: (4|3)</strong>
          `
        }
      ]
    },
    exercises: [
      {
        type: 'coordinate-input',
        question: 'Löse mit dem Einsetzungsverfahren:<br>(1) x = 3y − 1<br>(2) 2x + y = 12',
        correctX: 5,
        correctY: 2,
        tolerance: 0.01,
        xLabel: 'x',
        yLabel: 'y',
        explanation: 'Aus (1): x = 3y − 1. In (2) einsetzen: 2(3y − 1) + y = 12 → 6y − 2 + y = 12 → 7y = 14 → y = 2. Dann x = 3·2 − 1 = 5. Lösung: (5|2).',
        hint: 'Gleichung (1) ist schon nach x aufgelöst. Setze 3y − 1 für x in Gleichung (2) ein.'
      },
      {
        type: 'coordinate-input',
        question: 'Löse:<br>(1) y = 2x + 3<br>(2) 3x + y = 13',
        correctX: 2,
        correctY: 7,
        tolerance: 0.01,
        xLabel: 'x',
        yLabel: 'y',
        explanation: 'y = 2x + 3 in (2): 3x + (2x + 3) = 13 → 5x + 3 = 13 → 5x = 10 → x = 2. Dann y = 2·2 + 3 = 7. Lösung: (2|7).',
        hint: 'Gleichung (1) ist schon nach y aufgelöst. Setze (2x + 3) für y in Gleichung (2) ein.'
      },
      {
        type: 'multiple-choice',
        question: 'Welche Gleichung stellst du beim Einsetzungsverfahren zuerst um?<br>(1) 3x + 2y = 12<br>(2) y = x − 1',
        options: [
          'Gleichung (1) nach x',
          'Gleichung (2) ist schon nach y umgestellt',
          'Gleichung (1) nach y',
          'Beide müssen umgestellt werden'
        ],
        correct: 1,
        explanation: 'Gleichung (2) hat y schon allein auf einer Seite stehen: y = x − 1. Diesen Ausdruck kannst du direkt in Gleichung (1) einsetzen.'
      },
      {
        type: 'coordinate-input',
        question: 'Löse:<br>(1) x + y = 10<br>(2) 3x − 2y = 5',
        correctX: 5,
        correctY: 5,
        tolerance: 0.01,
        xLabel: 'x',
        yLabel: 'y',
        explanation: 'Aus (1): y = 10 − x. In (2): 3x − 2(10 − x) = 5 → 3x − 20 + 2x = 5 → 5x = 25 → x = 5. Dann y = 10 − 5 = 5. Lösung: (5|5).',
        hint: 'Stelle Gleichung (1) nach y um: y = 10 − x. Dann setze das in (2) ein und löse die Klammer auf.'
      }
    ]
  },

  // ============================================================
  // Lektion 11: Additionsverfahren
  // ============================================================
  {
    id: 11,
    title: 'Additionsverfahren',
    explanation: {
      html: `
        <div class="book-ref">
          <div class="book-title">Im Buch nachschlagen</div>
          <strong>Vorbereitungsblatt Zeile 15-18:</strong> Additionsverfahren<br>
          <strong>Buch:</strong> S. 110-112 | <strong>Aufgaben:</strong> S. 110 Nr. 1; S. 111 Nr. 2; S. 112 Nr. 2<br>
          <strong>Tipp:</strong> Merke und Beispiele auf S. 110 aufmerksam durchlesen!
        </div>

        <h3>Gleichungen addieren oder subtrahieren</h3>
        <div class="info-box">
          Beim Additionsverfahren werden die beiden Gleichungen so <strong>addiert oder subtrahiert</strong>,
          dass eine Variable <strong>wegfaellt</strong>.
          Das funktioniert, weil man auf beiden Seiten einer Gleichung das Gleiche machen darf.
        </div>

        <h4>Alltagsbeispiel: Die Waage</h4>
        <p>
          Stell dir eine Waage im Gleichgewicht vor. Wenn du auf <strong>beiden Seiten</strong>
          das Gleiche drauflegst, bleibt sie im Gleichgewicht. Genauso darfst du eine
          ganze Gleichung (= beide Seiten) zu einer anderen addieren - das Gleichgewicht bleibt erhalten!
        </p>

        <h4>Grafische Darstellung</h4>
        <p>
          Die Geraden aus 3x + 2y = 16 (y = -1,5x + 8) und 3x - 2y = 8 (y = 1,5x - 4) schneiden sich
          im Punkt <strong>S(4|2)</strong>:
        </p>
        <div id="graph-l11-example" class="math-graph"></div>

        <h4>Wann addieren, wann subtrahieren?</h4>
        <ul>
          <li><strong>Verschiedene Vorzeichen</strong> vor einer Variable (z. B. +2y und -2y) -> <strong>addieren</strong></li>
          <li><strong>Gleiche Vorzeichen</strong> vor einer Variable (z. B. +3x und +3x) -> <strong>subtrahieren</strong></li>
        </ul>

        <h4>Das Verfahren Schritt fuer Schritt</h4>
        <p>Beispiel: (1) <span class="highlight-blue">3x + 2y = 16</span> und (2) <span class="highlight-red">3x - 2y = 8</span></p>

        <div class="algebra-step">
          <strong>Schritt 1:</strong> Pruefen: <span class="highlight-blue">+2y</span> und <span class="highlight-red">-2y</span> haben verschiedene Vorzeichen -> <strong>addieren!</strong>
        </div>

        <div class="algebra-step" style="margin-top: 0.5em;">
          <strong>Schritt 2:</strong> Gleichungen uebereinander schreiben und addieren:
        </div>
        <div class="algebra-step" style="border-left: 3px solid #3B82F6; padding-left: 1em;">
          &nbsp;&nbsp;3x + <span class="highlight-blue">2y</span> = 16
        </div>
        <div class="algebra-step" style="border-left: 3px solid #EF4444; padding-left: 1em;">
          + 3x - <span class="highlight-red">2y</span> = &nbsp;8
        </div>
        <div class="algebra-step" style="border-left: 3px solid #6B7280; padding-left: 1em;">
          ________________________
        </div>
        <div class="algebra-step" style="border-left: 3px solid #10B981; padding-left: 1em;">
          &nbsp;&nbsp;6x + <span class="strikethrough">0</span> &nbsp;&nbsp;= 24
        </div>

        <div class="algebra-step" style="margin-top: 0.5em;">
          Das <strong>2y faellt weg</strong>, weil +2y + (-2y) = 0!
        </div>

        <div class="algebra-arrow">:6</div>
        <div class="algebra-step">
          <strong>x = 4</strong>
        </div>
        <div class="algebra-step" style="margin-top: 0.5em;">
          x = 4 in (1): 3*4 + 2y = 16 -> 12 + 2y = 16 -> 2y = 4 -> <strong>y = 2</strong>
        </div>
        <div class="algebra-step">
          <span class="highlight-green">Loesung: (4|2)</span>
        </div>

        <h4>Was wenn die Koeffizienten nicht passen?</h4>
        <p>
          Manchmal muss man erst eine oder beide Gleichungen mit einem <strong>Faktor multiplizieren</strong>,
          damit die Koeffizienten einer Variable gleich (oder entgegengesetzt) werden. Beispiel:<br>
          (1) 3x + 2y = 12 und (2) x + y = 5<br>
          -> Multipliziere (2) mit 2: 2x + 2y = 10<br>
          -> Jetzt kann man subtrahieren: (3x+2y) - (2x+2y) = 12 - 10 -> x = 2
        </p>

        <div class="formula-box">
          <strong>Schritte beim Additionsverfahren:</strong><br>
          1. Gleichungen so vorbereiten, dass eine Variable bei Addition/Subtraktion wegfaellt
             (ggf. mit einem Faktor multiplizieren)<br>
          2. Gleichungen addieren oder subtrahieren<br>
          3. Verbleibende Variable ausrechnen<br>
          4. Zweite Variable durch Einsetzen bestimmen<br>
          5. <strong>Probe machen!</strong>
        </div>

        <div class="warning-box">
          <strong>Tipp:</strong> Wenn die Koeffizienten einer Variable nicht gleich (oder entgegengesetzt) sind,
          musst du erst eine oder beide Gleichungen mit einem passenden Faktor multiplizieren!
        </div>

        
      `,
      onRender: function () {
        // Statischer Graph: 3x+2y=16 (y=-1.5x+8) und 3x-2y=8 (y=1.5x-4), Schnittpunkt (4,2)
        MathGraph.create('graph-l11-example', {
          xRange: [-1, 7],
          yRange: [-4, 9],
          lines: [
            { m: -1.5, b: 8, color: '#3B82F6', label: '3x+2y=16' },
            { m: 1.5, b: -4, color: '#EF4444', label: '3x-2y=8' }
          ],
          intersection: { x: 4, y: 2 }
        });
      }
    },
    example: {
      title: 'Additionsverfahren: 3x + 2y = 16 und 3x - 2y = 8',
      steps: [
        {
          label: 'Schritt 1: Vorbereitung pruefen',
          html: `
            Die y-Koeffizienten sind <strong>+2</strong> und <strong>-2</strong> -> verschiedene Vorzeichen -> <strong>addieren!</strong>
          `
        },
        {
          label: 'Schritt 2: Gleichungen addieren',
          html: `
            <div class="example-calc">
              &nbsp;&nbsp;3x + 2y = 16<br>
              + 3x - 2y = &nbsp;8<br>
              ________________________<br>
              &nbsp;&nbsp;6x &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 24
            </div>
            Das <strong>2y faellt weg</strong>, weil +2y + (-2y) = 0.
          `
        },
        {
          label: 'Schritt 3: Nach x aufloesen',
          html: '<div class="example-calc">6x = 24 -> <strong>x = 4</strong></div>'
        },
        {
          label: 'Schritt 4: y berechnen und Probe',
          html: `
            x = 4 in Gleichung (1) einsetzen:
            <div class="example-calc">
              3*4 + 2y = 16<br>
              12 + 2y = 16<br>
              2y = 4 -> <strong>y = 2</strong><br><br>
              Probe in (2): 3*4 - 2*2 = 12 - 4 = 8 stimmt!
            </div>
            <strong>Loesung: (4|2)</strong>
          `
        }
      ]
    },
    exercises: [
      {
        type: 'coordinate-input',
        question: 'Löse mit dem Additionsverfahren:<br>(1) x + y = 8<br>(2) x − y = 2',
        correctX: 5,
        correctY: 3,
        tolerance: 0.01,
        xLabel: 'x',
        yLabel: 'y',
        explanation: 'Addiere beide Gleichungen: (x+y) + (x−y) = 8+2 → 2x = 10 → x = 5. Dann y = 8 − 5 = 3. Lösung: (5|3).',
        hint: 'Die y-Terme haben verschiedene Vorzeichen (+y und −y) → addiere die Gleichungen, dann fällt y weg.'
      },
      {
        type: 'coordinate-input',
        question: 'Löse:<br>(1) 2x + 3y = 13<br>(2) 2x − y = 1',
        correctX: 2,
        correctY: 3,
        tolerance: 0.01,
        xLabel: 'x',
        yLabel: 'y',
        explanation: 'Subtrahiere (2) von (1): (2x+3y) − (2x−y) = 13−1 → 4y = 12 → y = 3. In (2): 2x − 3 = 1 → 2x = 4 → x = 2. Lösung: (2|3).',
        hint: 'Die x-Koeffizienten sind gleich (beide 2x) → subtrahiere die Gleichungen, dann fällt x weg.'
      },
      {
        type: 'coordinate-input',
        question: 'Löse (Tipp: erst multiplizieren!):<br>(1) 3x + 2y = 12<br>(2) x + y = 5',
        correctX: 2,
        correctY: 3,
        tolerance: 0.01,
        xLabel: 'x',
        yLabel: 'y',
        explanation: 'Multipliziere (2) mit 2: 2x + 2y = 10. Subtrahiere von (1): (3x+2y) − (2x+2y) = 12−10 → x = 2. In (2): 2 + y = 5 → y = 3. Lösung: (2|3).',
        hint: 'Multipliziere Gleichung (2) mit 2, damit die y-Koeffizienten gleich sind. Dann subtrahiere.'
      },
      {
        type: 'multiple-choice',
        question: 'Was ist der <strong>erste Schritt</strong> beim Additionsverfahren?',
        options: [
          'Beide Gleichungen nach y umstellen',
          'Die Gleichungen so vorbereiten, dass eine Variable wegfällt',
          'x = 0 setzen',
          'Die Steigungen vergleichen'
        ],
        correct: 1,
        explanation: 'Beim Additionsverfahren muss man zuerst sicherstellen, dass die Koeffizienten einer Variable gleich (oder entgegengesetzt) sind, damit sie bei Addition oder Subtraktion wegfällt.'
      }
    ]
  },

  // ============================================================
  // Lektion 12: Loesungsvielfalt
  // ============================================================
  {
    id: 12,
    title: 'Lösungsvielfalt',
    explanation: {
      html: `
        <div class="book-ref">
          <div class="book-title">Im Buch nachschlagen</div>
          <strong>Vorbereitungsblatt Zeile 18-19:</strong> Loesungsvielfalt / Rueckspiegel Gleichungssysteme<br>
          <strong>Buch:</strong> S. 112 | <strong>Aufgaben:</strong> S. 112 Nr. 3, A<br>
          <strong>Rueckspiegel Gleichungssysteme:</strong> S. 120<br>
          <strong>Tipp:</strong> Merke auf S. 112 lesen. Zum Wiederholen den Rueckspiegel S. 120 rechnen!
        </div>

        <h3>Wie viele Loesungen kann ein LGS haben?</h3>
        <div class="info-box">
          Ein lineares Gleichungssystem kann <strong>drei verschiedene Faelle</strong> haben:
          genau eine Loesung, keine Loesung, oder unendlich viele Loesungen.
          Welcher Fall vorliegt, erkennst du an den <strong>Steigungen und y-Achsenabschnitten</strong> beider Geraden.
        </div>

        <h4>Die drei Faelle im Ueberblick</h4>
        <div class="graph-triple">
          <div>
            <div id="graph-l12-one" class="math-graph"></div>
            <div class="graph-triple-label">1 Loesung</div>
          </div>
          <div>
            <div id="graph-l12-none" class="math-graph"></div>
            <div class="graph-triple-label">Keine Loesung</div>
          </div>
          <div>
            <div id="graph-l12-infinite" class="math-graph"></div>
            <div class="graph-triple-label">Unendlich viele</div>
          </div>
        </div>

        <h4>Fall 1: Genau eine Loesung</h4>
        <p>
          Die Geraden haben <strong>verschiedene Steigungen</strong> -> sie schneiden sich in <strong>genau einem Punkt</strong>.<br>
          Beim Rechnen kommt ein konkreter Wert fuer x (und y) heraus.
          Das ist der <strong>Normalfall</strong>.
        </p>

        <h4>Fall 2: Keine Loesung</h4>
        <p>
          Die Geraden sind <strong>parallel</strong> - gleiche Steigung, aber <strong>verschiedener</strong> y-Achsenabschnitt.<br>
          Beim Rechnen kommt eine <strong>falsche Aussage</strong> heraus, z. B. <strong>0 = 5</strong> - das stimmt nie!
        </p>

        <h4>Fall 3: Unendlich viele Loesungen</h4>
        <p>
          Die Geraden sind <strong>identisch</strong> - gleiche Steigung <strong>und</strong> gleicher y-Achsenabschnitt.<br>
          Beim Rechnen kommt eine <strong>wahre Aussage</strong> heraus, z. B. <strong>0 = 0</strong> - das stimmt immer!
        </p>

        <div class="formula-box">
          <strong>Erkennung auf einen Blick:</strong><br>
          <strong>Verschiedene Steigungen</strong> -> 1 Loesung (Schnittpunkt)<br>
          <strong>Gleiche Steigung, verschiedene b</strong> -> keine Loesung (parallel)<br>
          <strong>Gleiche Steigung und gleiches b</strong> -> unendlich viele (identisch)
        </div>

        <h4>Fall-Explorer: Probier es selbst aus!</h4>
        <p>
          Die blaue Gerade ist fest (y = 2x + 1). Verschiebe die Regler der roten Gerade
          und beobachte, was passiert:
        </p>
        <div id="graph-l12-slider" class="math-graph"></div>

        <div class="warning-box">
          <strong>Merke:</strong> Gleiche Steigung = parallel oder identisch. Verschiedene Steigung = genau ein Schnittpunkt.
        </div>

        
      `,
      onRender: function () {
        // Drei statische Graphen nebeneinander

        // Fall 1: Eine Loesung - y = 2x + 1 und y = -x + 4, Schnittpunkt (1, 3)
        MathGraph.create('graph-l12-one', {
          xRange: [-2, 5],
          yRange: [-2, 7],
          lines: [
            { m: 2, b: 1, color: '#3B82F6', label: 'y=2x+1' },
            { m: -1, b: 4, color: '#EF4444', label: 'y=-x+4' }
          ],
          intersection: { x: 1, y: 3 }
        });

        // Fall 2: Keine Loesung - y = 2x + 1 und y = 2x - 2 (parallel)
        MathGraph.create('graph-l12-none', {
          xRange: [-2, 5],
          yRange: [-4, 7],
          lines: [
            { m: 2, b: 1, color: '#3B82F6', label: 'y=2x+1' },
            { m: 2, b: -2, color: '#EF4444', label: 'y=2x-2' }
          ]
        });

        // Fall 3: Unendlich viele - y = 2x + 1 und y = 2x + 1 (identisch)
        MathGraph.create('graph-l12-infinite', {
          xRange: [-2, 5],
          yRange: [-2, 7],
          lines: [
            { m: 2, b: 1, color: '#3B82F6', label: 'y=2x+1' },
            { m: 2, b: 1, color: '#EF4444', label: 'y=2x+1' }
          ]
        });

        // Fall-Explorer: Erste Gerade fest (m=2, b=1), zweite Gerade mit Slidern
        MathGraph.interactive('graph-l12-slider', {
          xRange: [-5, 5],
          yRange: [-6, 8],
          equations: [
            { expr: '2*x+1', color: '#3B82F6', label: 'f (fest)' },
            { expr: 'm2*x+b2', color: '#EF4444', label: 'g' }
          ],
          sliders: [
            { param: 'm2', label: 'Steigung m\u2082', min: -4, max: 4, step: 0.5, initial: -1 },
            { param: 'b2', label: 'y-Achsenabschnitt b\u2082', min: -5, max: 5, step: 0.5, initial: 4 }
          ],
          showIntersection: true,
          showEquation: true,
          showStatus: true
        });
      }
    },
    example: {
      title: 'Die drei Faelle im Ueberblick',
      steps: [
        {
          label: 'Fall 1: Eine Loesung',
          html: `
            <div class="example-calc">
              (1) y = 2x + 1<br>
              (2) y = -x + 4<br><br>
              Verschiedene Steigungen (2 und -1) -> <strong>ein Schnittpunkt</strong>.<br>
              Gleichsetzen: 2x + 1 = -x + 4 -> 3x = 3 -> x = 1, y = 3.<br>
              Loesung: <strong>(1|3)</strong>
            </div>
          `
        },
        {
          label: 'Fall 2: Keine Loesung',
          html: `
            <div class="example-calc">
              (1) y = 2x + 1<br>
              (2) y = 2x + 3<br><br>
              Gleiche Steigung (m = 2), aber verschiedene y-Achsenabschnitte (b = 1 und b = 3).<br>
              -> Die Geraden sind <strong>parallel</strong> -> <strong>keine Loesung</strong>.<br>
              Gleichsetzen: 2x + 1 = 2x + 3 -> 1 = 3 -> <strong>falsch!</strong>
            </div>
          `
        },
        {
          label: 'Fall 3: Unendlich viele Loesungen',
          html: `
            <div class="example-calc">
              (1) y = 2x + 1<br>
              (2) 2y = 4x + 2<br><br>
              Gleichung (2) vereinfachen: y = 2x + 1 -> <strong>identisch mit (1)!</strong><br>
              -> Die Geraden liegen aufeinander -> <strong>unendlich viele Loesungen</strong>.<br>
              Gleichsetzen: 2x + 1 = 2x + 1 -> 0 = 0 -> <strong>immer wahr!</strong>
            </div>
          `
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wie viele Lösungen hat das LGS?<br>(1) y = 3x + 1<br>(2) y = 3x + 4',
        options: ['eine Lösung', 'keine Lösung', 'unendlich viele', 'zwei Lösungen'],
        correct: 1,
        explanation: 'Beide Geraden haben die gleiche Steigung (m = 3), aber verschiedene y-Achsenabschnitte (b = 1 und b = 4). Sie sind parallel und schneiden sich nie → keine Lösung.'
      },
      {
        type: 'multiple-choice',
        question: 'Wie viele Lösungen hat das LGS?<br>(1) y = 2x + 3<br>(2) y = −x + 6',
        options: ['keine Lösung', 'unendlich viele', 'eine Lösung', 'kann man nicht bestimmen'],
        correct: 2,
        explanation: 'Die Steigungen sind verschieden (m = 2 und m = −1). Verschiedene Steigungen bedeuten, dass sich die Geraden in genau einem Punkt schneiden → eine Lösung.'
      },
      {
        type: 'matching',
        question: 'Ordne jedem LGS die richtige Anzahl an Lösungen zu:',
        pairs: [
          { left: 'y = 2x + 1, y = 3x − 2', right: 'eine Lösung' },
          { left: 'y = 4x + 1, y = 4x + 5', right: 'keine Lösung' },
          { left: 'y = x + 3, 2y = 2x + 6', right: 'unendlich viele' },
          { left: 'y = −x, y = 2x − 3', right: 'eine Lösung' }
        ]
      },
      {
        type: 'multiple-choice',
        question: 'Beim Lösen eines LGS kommt <strong>0 = 0</strong> heraus. Was bedeutet das?',
        options: [
          'Das LGS hat keine Lösung',
          'Das LGS hat genau eine Lösung',
          'Man hat einen Rechenfehler gemacht',
          'Das LGS hat unendlich viele Lösungen'
        ],
        correct: 3,
        explanation: '0 = 0 ist eine wahre Aussage. Das bedeutet, die beiden Gleichungen beschreiben die gleiche Gerade → unendlich viele Lösungen. (Wäre etwas Falsches wie 0 = 5 rausgekommen, gäbe es keine Lösung.)'
      }
    ]
  }
];
