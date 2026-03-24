const LessonsFunktionen = [
  // ============================================================
  // Lektion 1: Funktionen
  // ============================================================
  {
    id: 1,
    title: 'Funktionen',
    explanation: {
      html: `
        <div class="book-ref">
          <div class="book-title">Im Buch nachschlagen</div>
          <strong>Vorbereitungsblatt Nr. 1:</strong> Funktionen<br>
          <strong>Buch:</strong> S. 67 | <strong>Aufgaben:</strong> S. 67 Nr. A, B, 4 li.<br>
          <strong>Tipp:</strong> Merke und Beispiele auf S. 67 aufmerksam durchlesen!
        </div>

        <h3>Was ist eine Funktion?</h3>
        <div class="info-box">
          Eine <strong>Funktion</strong> ist eine <strong>eindeutige Zuordnung</strong>:
          Jedem x-Wert wird <strong>genau ein</strong> y-Wert zugeordnet.
        </div>

        <h4>Alltagsbeispiel: Temperatur im Tagesverlauf</h4>
        <p>
          Um 8 Uhr sind es 12 Grad, um 12 Uhr 18 Grad, um 16 Uhr 21 Grad.
          Zu <strong>jeder Uhrzeit</strong> gibt es <strong>genau eine Temperatur</strong> - das ist eine Funktion!
          Aber umgekehrt? 18 Grad koennte es um 12 Uhr UND um 20 Uhr haben - das ist OK,
          denn die Zuordnung geht von x (Uhrzeit) zu y (Temperatur), nicht umgekehrt.
        </p>

        <h4>Drei Darstellungsformen</h4>
        <p>Eine Funktion kann man auf verschiedene Arten darstellen:</p>
        <ul>
          <li><strong>Wertetabelle:</strong> Eine Tabelle mit x- und y-Werten</li>
          <li><strong>Graph (Schaubild):</strong> Eine Kurve oder Gerade im Koordinatensystem</li>
          <li><strong>Gleichung:</strong> z. B. y = 2x + 1</li>
        </ul>

        <h4>Funktionswerte ablesen</h4>
        <p>
          Wenn du den <strong>x-Wert</strong> kennst, kannst du den zugehoerigen <strong>y-Wert</strong>
          (= Funktionswert) am Graphen ablesen. Gehe dazu vom x-Wert senkrecht nach oben (oder unten)
          bis zur Kurve und lies den y-Wert ab.
        </p>
        <p>Hier siehst du eine einfache Funktion mit markierten Punkten:</p>
        <div id="graph-fn-read" class="math-graph"></div>

        <h4>Wann ist etwas KEINE Funktion?</h4>
        <div class="warning-box">
          <strong>Keine Funktion:</strong> Wenn einem x-Wert <strong>zwei verschiedene y-Werte</strong>
          zugeordnet werden. Zum Beispiel: Ein Kreis ist keine Funktion, weil es zu manchen x-Werten
          zwei y-Werte gibt (einen oben und einen unten).
        </div>
      `,
      onRender: function () {
        MathGraph.create('graph-fn-read', {
          xRange: [-1, 6],
          yRange: [-1, 8],
          lines: [
            { m: 1.5, b: 0.5, color: '#3B82F6', label: 'f(x)' }
          ],
          points: [
            { x: 1, y: 2, color: '#3B82F6', label: '(1|2)' },
            { x: 3, y: 5, color: '#3B82F6', label: '(3|5)' }
          ]
        });
      }
    },
    example: {
      title: 'Funktionswerte aus einem Graphen ablesen',
      steps: [
        {
          label: 'Schritt 1: x-Wert finden',
          html: 'Suche den x-Wert auf der waagerechten Achse, z. B. <strong>x = 2</strong>.'
        },
        {
          label: 'Schritt 2: Senkrecht zur Kurve gehen',
          html: 'Gehe vom Punkt x = 2 <strong>senkrecht nach oben</strong> bis du die Kurve triffst.'
        },
        {
          label: 'Schritt 3: y-Wert ablesen',
          html: 'Lies an der y-Achse ab, auf welcher Hoehe du die Kurve getroffen hast. Hier: <strong>y = 3,5</strong>.'
        },
        {
          label: 'Schritt 4: Ergebnis notieren',
          html: '<div class="example-calc">Der Funktionswert an der Stelle x = 2 ist <strong>f(2) = 3,5</strong>.</div>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Was bedeutet es, wenn eine Zuordnung eine <strong>Funktion</strong> ist?',
        options: [
          'Jedem x-Wert werden zwei y-Werte zugeordnet',
          'Jedem x-Wert wird genau ein y-Wert zugeordnet',
          'Jedem y-Wert wird genau ein x-Wert zugeordnet',
          'Es gibt nur positive Werte'
        ],
        correct: 1,
        explanation: 'Bei einer Funktion wird jedem x-Wert genau ein y-Wert zugeordnet. Es darf also nicht passieren, dass ein x-Wert zwei verschiedene y-Werte hat.'
      },
      {
        type: 'fill-table',
        question: 'Die Funktion ordnet jedem x-Wert das <strong>Doppelte plus 1</strong> zu (also y = 2x + 1). F\u00FClle die Wertetabelle aus.',
        xValues: [0, 1, 2, 3, 4],
        correctYValues: [1, 3, 5, 7, 9],
        givenIndices: [0],
        explanation: 'Setze jeden x-Wert ein: x = 1 \u2192 y = 2\u00B71 + 1 = 3. x = 2 \u2192 y = 2\u00B72 + 1 = 5. x = 3 \u2192 y = 2\u00B73 + 1 = 7. x = 4 \u2192 y = 2\u00B74 + 1 = 9.',
        hint: 'Rechne f\u00FCr jeden x-Wert: y = 2 \u00B7 x + 1'
      },
      {
        type: 'multiple-choice',
        question: 'Auf welche Arten kann man eine Funktion darstellen?',
        options: [
          'Nur als Gleichung',
          'Als Wertetabelle, Graph oder Gleichung',
          'Nur als Graph',
          'Nur als Wertetabelle'
        ],
        correct: 1,
        explanation: 'Funktionen k\u00F6nnen auf drei Arten dargestellt werden: als Wertetabelle (Tabelle mit x- und y-Werten), als Graph (Schaubild im Koordinatensystem) oder als Gleichung (z. B. y = 2x + 1).'
      },
      {
        type: 'number-input',
        question: 'Eine Funktion ist durch die Gleichung <strong>y = 3x - 2</strong> gegeben. Berechne den Funktionswert f\u00FCr <strong>x = 4</strong>.',
        correctAnswer: 10,
        tolerance: 0.01,
        label: 'y',
        placeholder: 'Funktionswert eingeben',
        explanation: 'Setze x = 4 ein: y = 3 \u00B7 4 - 2 = 12 - 2 = 10.',
        hint: 'Setze x = 4 in die Gleichung ein: y = 3 \u00B7 4 - 2'
      }
    ]
  },

  // ============================================================
  // Lektion 2: Funktionsgleichungen
  // ============================================================
  {
    id: 2,
    title: 'Funktionsgleichungen',
    explanation: {
      html: `
        <div class="book-ref">
          <div class="book-title">Im Buch nachschlagen</div>
          <strong>Vorbereitungsblatt Nr. 2:</strong> Funktionsgleichungen<br>
          <strong>Buch:</strong> S. 72 | <strong>Aufgaben:</strong> S. 72 Nr. 4, A, 5 li., 5 re., 6 li.<br>
          <strong>Tipp:</strong> Merke und Beispiele auf S. 72 aufmerksam durchlesen!
        </div>

        <h3>Was ist eine Funktionsgleichung?</h3>
        <div class="info-box">
          Eine <strong>Funktionsgleichung</strong> beschreibt den Zusammenhang zwischen x und y
          als <strong>mathematische Formel</strong>, z. B. <strong>y = 2x + 3</strong>.<br>
          Mit der Gleichung kannst du fuer <strong>jeden x-Wert</strong> den zugehoerigen y-Wert berechnen.
        </div>

        <h4>Alltagsbeispiel: Aepfel auf dem Markt</h4>
        <p>
          1 kg Aepfel kostet 2,50 Euro. Wie viel kosten 3 kg? Oder 5 kg?<br>
          Die Funktionsgleichung lautet: <strong>y = 2,5 \u00B7 x</strong> (Preis = 2,50 \u00B7 Menge).<br>
          Fuer x = 3: y = 2,5 \u00B7 3 = <strong>7,50 Euro</strong>.<br>
          Fuer x = 5: y = 2,5 \u00B7 5 = <strong>12,50 Euro</strong>.
        </p>

        <h4>Von der Gleichung zur Wertetabelle</h4>
        <p>
          <strong>Schritt 1:</strong> Waehle verschiedene x-Werte (z. B. -2, -1, 0, 1, 2, 3).<br>
          <strong>Schritt 2:</strong> Setze jeden x-Wert in die Gleichung ein und berechne y.<br>
          <strong>Schritt 3:</strong> Schreibe die Ergebnisse in eine Tabelle.
        </p>

        <h4>Von der Wertetabelle zum Graphen</h4>
        <p>
          Trage die Punkte aus der Wertetabelle ins Koordinatensystem ein und verbinde sie.
          Bei einer linearen Funktion (y = mx + c) entsteht immer eine <strong>Gerade</strong>.
        </p>
        <p>Hier siehst du die Funktion y = 2x + 1 mit Punkten aus der Wertetabelle:</p>
        <div id="graph-fgl-table" class="math-graph"></div>

        <div class="warning-box">
          <strong>Tipp:</strong> Pruefe deine Wertetabelle, indem du einen Punkt im Graphen kontrollierst.
          Liegt er auf der Geraden? Dann hast du richtig gerechnet!
        </div>

        <details class="book-pages">
          <summary>Original-Buchseite anzeigen</summary>
          <img src="../Inhalt_Mathebuch/IMG_1993.JPG" alt="Buch S. 72 - Funktionsgleichungen" style="max-width:100%; margin-top:0.5em;">
        </details>
      `,
      onRender: function () {
        MathGraph.create('graph-fgl-table', {
          xRange: [-3, 4],
          yRange: [-4, 10],
          lines: [
            { m: 2, b: 1, color: '#3B82F6', label: 'y = 2x + 1' }
          ],
          points: [
            { x: -2, y: -3, color: '#3B82F6', label: '(-2|-3)' },
            { x: -1, y: -1, color: '#3B82F6', label: '(-1|-1)' },
            { x: 0, y: 1, color: '#3B82F6', label: '(0|1)' },
            { x: 1, y: 3, color: '#3B82F6', label: '(1|3)' },
            { x: 2, y: 5, color: '#3B82F6', label: '(2|5)' },
            { x: 3, y: 7, color: '#3B82F6', label: '(3|7)' }
          ]
        });
      }
    },
    example: {
      title: 'Wertetabelle fuer y = 2x + 1 erstellen',
      steps: [
        {
          label: 'Schritt 1: x-Werte waehlen',
          html: 'Waehle z. B. x = -1, 0, 1, 2, 3.'
        },
        {
          label: 'Schritt 2: y-Werte berechnen',
          html: `
            <div class="example-calc">
              x = -1 -> y = 2 * (-1) + 1 = -2 + 1 = <strong>-1</strong><br>
              x = 0 -> y = 2 * 0 + 1 = 0 + 1 = <strong>1</strong><br>
              x = 1 -> y = 2 * 1 + 1 = 2 + 1 = <strong>3</strong><br>
              x = 2 -> y = 2 * 2 + 1 = 4 + 1 = <strong>5</strong><br>
              x = 3 -> y = 2 * 3 + 1 = 6 + 1 = <strong>7</strong>
            </div>
          `
        },
        {
          label: 'Schritt 3: Punkte eintragen',
          html: 'Trage die Punkte (-1|-1), (0|1), (1|3), (2|5), (3|7) ins Koordinatensystem ein und verbinde sie zu einer Geraden.'
        }
      ]
    },
    exercises: [
      {
        type: 'fill-table',
        question: 'F\u00FClle die Wertetabelle f\u00FCr <strong>y = 3x - 1</strong> aus.',
        xValues: [-1, 0, 1, 2, 3],
        correctYValues: [-4, -1, 2, 5, 8],
        givenIndices: [1],
        explanation: 'Setze jeden x-Wert ein: x = -1 \u2192 y = 3\u00B7(-1) - 1 = -4. x = 1 \u2192 y = 3\u00B71 - 1 = 2. x = 2 \u2192 y = 3\u00B72 - 1 = 5. x = 3 \u2192 y = 3\u00B73 - 1 = 8.',
        hint: 'Rechne f\u00FCr jeden x-Wert: y = 3 \u00B7 x - 1. Achte auf das Minus!'
      },
      {
        type: 'number-input',
        question: 'Berechne den Funktionswert von <strong>y = 4x + 2</strong> f\u00FCr <strong>x = 3</strong>.',
        correctAnswer: 14,
        tolerance: 0.01,
        label: 'y',
        placeholder: 'Funktionswert eingeben',
        explanation: 'y = 4 \u00B7 3 + 2 = 12 + 2 = 14.',
        hint: 'Setze x = 3 ein: y = 4 \u00B7 3 + 2'
      },
      {
        type: 'multiple-choice',
        question: 'Welche Gleichung passt zur Wertetabelle?<br><br>x: 0, 1, 2, 3<br>y: 2, 5, 8, 11',
        options: ['y = 2x + 3', 'y = 3x + 2', 'y = x + 2', 'y = 5x'],
        correct: 1,
        explanation: 'Pr\u00FCfe y = 3x + 2: x = 0 \u2192 y = 2 \u2713, x = 1 \u2192 y = 5 \u2713, x = 2 \u2192 y = 8 \u2713, x = 3 \u2192 y = 11 \u2713. Die Steigung ist 3 (y steigt immer um 3) und der Startwert bei x = 0 ist 2.'
      },
      {
        type: 'matching',
        question: 'Ordne jeder Gleichung den richtigen Funktionswert f\u00FCr <strong>x = 2</strong> zu.',
        pairs: [
          { left: 'y = x + 3', right: 'y = 5' },
          { left: 'y = 2x', right: 'y = 4' },
          { left: 'y = 5x', right: 'y = 10' },
          { left: 'y = 4x + 1', right: 'y = 9' }
        ]
      }
    ]
  },

  // ============================================================
  // Lektion 3: Proportionale Funktionen
  // ============================================================
  {
    id: 3,
    title: 'Proportionale Funktionen',
    explanation: {
      html: `
        <div class="book-ref">
          <div class="book-title">Im Buch nachschlagen</div>
          <strong>Vorbereitungsblatt Nr. 3:</strong> Steigung. Proportionale Funktion<br>
          <strong>Buch:</strong> S. 75-76 | <strong>Aufgaben:</strong> S. 75 Nr. 3, A, B, 4re.; S. 76 Nr. 5re., 6re.<br>
          <strong>Tipp:</strong> Merke und Beispiele auf S. 75-76 aufmerksam durchlesen!
        </div>

        <h3>Was ist eine proportionale Funktion?</h3>
        <div class="info-box">
          Eine proportionale Funktion hat die Form <strong>y = m * x</strong>.<br>
          Der Graph geht <strong>immer durch den Ursprung (0|0)</strong>.
        </div>

        <h4>Alltagsbeispiel: Preis pro kg Aepfel</h4>
        <p>
          Stell dir vor, 1 kg Aepfel kostet 2 Euro. Dann kosten 2 kg genau 4 Euro, 3 kg genau 6 Euro usw.
          Die Funktion dafuer lautet <strong>y = 2x</strong> (Preis = 2 * Menge).
          Egal wie viel du kaufst: der Preis verdoppelt, verdreifacht, vervierfacht sich proportional zur Menge.
          Und bei 0 kg zahlst du 0 Euro - deshalb geht der Graph durch den Ursprung.
        </p>

        <h4>Das Steigungsdreieck</h4>
        <p>
          <strong>m</strong> heisst <strong>Steigung</strong>. Sie gibt an, wie steil die Gerade ist.
          Um die Steigung abzulesen, zeichnest du ein <strong>Steigungsdreieck</strong> zwischen zwei Punkten auf der Geraden:
        </p>
        <div class="formula-box">
          <strong>m = Deltay / Deltax</strong> = "wie viel nach oben" / "wie viel nach rechts"
        </div>
        <p>Hier siehst du die Gerade y = 2x mit einem Steigungsdreieck:</p>
        <div id="graph-l1-basic" class="math-graph"></div>

        <h4>Verschiedene Steigungen vergleichen</h4>
        <p>
          Je groesser der Betrag von m (also |m|), desto <strong>steiler</strong> ist die Gerade.
          Vergleiche: y = 0,5x (flach), y = 2x (mittel) und y = 5x (steil):
        </p>
        <div id="graph-l1-compare" class="math-graph"></div>

        <h4>Positive und negative Steigung</h4>
        <ul>
          <li><strong>m > 0</strong> -> Gerade steigt von links nach rechts (aufwaerts)</li>
          <li><strong>m < 0</strong> -> Gerade faellt von links nach rechts (abwaerts)</li>
        </ul>
        <p>Hier y = 2x (steigend, blau) und y = -2x (fallend, rot):</p>
        <div id="graph-l1-negative" class="math-graph"></div>

        <h4>Probier es selbst aus!</h4>
        <p>Verschiebe den Regler, um die Steigung m zu veraendern. Beobachte, wie sich die Gerade dreht:</p>
        <div id="graph-l1-slider" class="math-graph"></div>

        <div class="warning-box">
          <strong>Merke:</strong> Bei proportionalen Funktionen gibt es <strong>keinen y-Achsenabschnitt</strong> (bzw. c = 0).
          Der Graph geht immer durch (0|0)!
        </div>

        <details class="book-pages">
          <summary>Original-Buchseiten anzeigen</summary>
          <img src="../Inhalt_Mathebuch/IMG_1994.JPG" alt="Buch S. 75 - Proportionale Funktionen" style="max-width:100%; margin-top:0.5em;">
          <img src="../Inhalt_Mathebuch/IMG_1995.JPG" alt="Buch S. 76 - Proportionale Funktionen" style="max-width:100%; margin-top:0.5em;">
        </details>
      `,
      onRender: function () {
        // Statischer Graph: y=2x mit Steigungsdreieck
        MathGraph.create('graph-l1-basic', {
          xRange: [-1, 5],
          yRange: [-1, 9],
          lines: [
            { m: 2, b: 0, color: '#3B82F6', label: 'y = 2x' }
          ],
          slopeTriangle: {
            from: { x: 0, y: 0 },
            to: { x: 2, y: 4 }
          },
          points: [
            { x: 0, y: 0, label: '(0|0)' },
            { x: 2, y: 4, label: '(2|4)' }
          ]
        });

        // Vergleich: flach, mittel, steil
        MathGraph.create('graph-l1-compare', {
          xRange: [-1, 5],
          yRange: [-1, 11],
          lines: [
            { m: 0.5, b: 0, color: '#10B981', label: 'y = 0,5x' },
            { m: 2, b: 0, color: '#3B82F6', label: 'y = 2x' },
            { m: 5, b: 0, color: '#EF4444', label: 'y = 5x' }
          ]
        });

        // Positive vs. negative Steigung
        MathGraph.create('graph-l1-negative', {
          xRange: [-4, 4],
          yRange: [-8, 8],
          lines: [
            { m: 2, b: 0, color: '#3B82F6', label: 'y = 2x' },
            { m: -2, b: 0, color: '#EF4444', label: 'y = -2x' }
          ]
        });

        // Interaktiver Slider: Steigung m
        MathGraph.interactive('graph-l1-slider', {
          xRange: [-5, 5],
          yRange: [-10, 10],
          equation: 'm*x',
          sliders: [
            { param: 'm', label: 'Steigung m', min: -4, max: 4, step: 0.5, initial: 1 }
          ],
          showSlopeTriangle: true,
          showEquation: true
        });
      }
    },
    example: {
      title: 'Steigung aus einem Graphen ablesen (y = 1,5x)',
      steps: [
        {
          label: 'Schritt 1: Zwei Punkte waehlen',
          html: 'Waehle zwei Punkte auf der Geraden, z. B. <strong>P1(0|0)</strong> und <strong>P2(2|3)</strong>.'
        },
        {
          label: 'Schritt 2: Steigungsdreieck einzeichnen',
          html: 'Von P1 nach P2: Du gehst <strong>2 Einheiten nach rechts</strong> (Deltax = 2) und <strong>3 Einheiten nach oben</strong> (Deltay = 3).'
        },
        {
          label: 'Schritt 3: Steigung berechnen',
          html: '<div class="example-calc">m = Deltay / Deltax = 3 / 2 = <strong>1,5</strong></div>'
        },
        {
          label: 'Schritt 4: Funktionsgleichung aufstellen',
          html: 'Die Funktionsgleichung lautet: <strong>y = 1,5x</strong>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Welche Gleichung beschreibt eine <strong>proportionale</strong> Funktion?',
        options: ['y = 3x', 'y = 2x + 1', 'y = x\u00B2 + 3', 'y = 5'],
        correct: 0,
        explanation: 'Nur y = 3x hat die Form y = m \u00B7 x (ohne c). Die Gerade geht durch den Ursprung. Bei y = 2x + 1 ist c = 1, also nicht proportional.'
      },
      {
        type: 'number-input',
        question: 'Die Gerade einer proportionalen Funktion geht durch den Punkt P(4|12). Wie gro\u00DF ist die Steigung m?',
        correctAnswer: 3,
        tolerance: 0.01,
        label: 'm',
        placeholder: 'Steigung eingeben',
        explanation: 'Bei proportionalen Funktionen gilt y = m \u00B7 x. Einsetzen: 12 = m \u00B7 4, also m = 12 / 4 = 3.',
        hint: 'Setze den Punkt in y = m \u00B7 x ein: 12 = m \u00B7 4'
      },
      {
        type: 'fill-table',
        question: 'F\u00FClle die Wertetabelle f\u00FCr <strong>y = -2x</strong> aus.',
        xValues: [-3, -2, -1, 0, 1, 2, 3],
        correctYValues: [6, 4, 2, 0, -2, -4, -6],
        givenIndices: [3],
        explanation: 'Setze jeden x-Wert in y = -2x ein. Beispiel: x = -3 \u2192 y = -2 \u00B7 (-3) = 6. Minus mal Minus ergibt Plus!',
        hint: 'Rechne f\u00FCr jeden x-Wert: y = -2 \u00B7 x. Achte auf die Vorzeichenregeln!'
      },
      {
        type: 'matching',
        question: 'Ordne jeder Funktionsgleichung die richtige Steigung zu.',
        pairs: [
          { left: 'y = 3x', right: 'm = 3' },
          { left: 'y = -x', right: 'm = -1' },
          { left: 'y = 0,5x', right: 'm = 0,5' },
          { left: 'y = -4x', right: 'm = -4' }
        ]
      }
    ]
  },

  // ============================================================
  // Lektion 4: Lineare Funktionen
  // ============================================================
  {
    id: 4,
    title: 'Lineare Funktionen',
    explanation: {
      html: `
        <div class="book-ref">
          <div class="book-title">Im Buch nachschlagen</div>
          <strong>Vorbereitungsblatt Nr. 4:</strong> Lineare Funktionen<br>
          <strong>Buch:</strong> S. 79 | <strong>Aufgaben:</strong> S. 79 Nr. 1, A, B, 4li.<br>
          <strong>Tipp:</strong> Merke und Beispiele auf S. 79 aufmerksam durchlesen!
        </div>

        <h3>Was ist eine lineare Funktion?</h3>
        <div class="formula-box">
          <strong>y = m * x + c</strong><br>
          m = Steigung | c = y-Achsenabschnitt
        </div>
        <p>
          <strong>m (Steigung):</strong> Gibt an, wie steil die Gerade ist - genau wie bei proportionalen Funktionen.
        </p>
        <p>
          <strong>c (y-Achsenabschnitt):</strong> Das ist der Punkt, an dem die Gerade die <strong>y-Achse schneidet</strong>.
          Man findet ihn, indem man x = 0 einsetzt: y = m * 0 + c = c.
        </p>

        <h4>Alltagsbeispiel: Startguthaben</h4>
        <div class="info-box">
          Stell dir <strong>c</strong> wie ein <strong>Startguthaben auf deinem Konto</strong> vor.
          Wenn c = 3, startest du bei 3 Euro - und mit jeder Einheit (x) kommt m Euro dazu (oder wird abgezogen).<br><br>
          Beispiel: Du hast 3 Euro Taschengeld gespart (c = 3) und bekommst jede Woche 2 Euro dazu (m = 2).
          Nach x Wochen hast du: <strong>y = 2x + 3</strong> Euro.
        </div>

        <p>Hier siehst du y = 2x + 3 mit dem y-Achsenabschnitt (0|3) und dem Steigungsdreieck:</p>
        <div id="graph-l2-basic" class="math-graph"></div>

        <h4>Unterschied zur proportionalen Funktion</h4>
        <ul>
          <li><strong>Proportional:</strong> y = m * x -> geht durch (0|0)</li>
          <li><strong>Linear:</strong> y = m * x + c -> geht durch (0|c)</li>
        </ul>
        <p>
          Wenn c ungleich 0, wird die Gerade nach oben (c > 0) oder unten (c < 0) verschoben.
          Vergleiche y = 2x (durch den Ursprung, blau) mit y = 2x + 3 (um 3 nach oben verschoben, rot):
        </p>
        <div id="graph-l2-compare" class="math-graph"></div>

        <h4>Probier es selbst aus!</h4>
        <p>Verschiebe die Regler fuer m und c und beobachte, wie sich die Gerade veraendert:</p>
        <div id="graph-l2-slider" class="math-graph"></div>

        <div class="warning-box">
          <strong>Achtung:</strong> Jede proportionale Funktion ist auch eine lineare Funktion (mit c = 0).
          Aber nicht jede lineare Funktion ist proportional!
        </div>

        <details class="book-pages">
          <summary>Original-Buchseite anzeigen</summary>
          <img src="../Inhalt_Mathebuch/IMG_1996.JPG" alt="Buch S. 79 - Lineare Funktionen" style="max-width:100%; margin-top:0.5em;">
        </details>
      `,
      onRender: function () {
        // y=2x+3 mit y-Achsenabschnitt und Steigungsdreieck
        MathGraph.create('graph-l2-basic', {
          xRange: [-2, 5],
          yRange: [-2, 12],
          lines: [
            { m: 2, b: 3, color: '#3B82F6', label: 'y = 2x + 3' }
          ],
          slopeTriangle: {
            from: { x: 0, y: 3 },
            to: { x: 1, y: 5 }
          },
          points: [
            { x: 0, y: 3, color: '#EF4444', label: 'c = 3' }
          ]
        });

        // Vergleich: y=2x und y=2x+3
        MathGraph.create('graph-l2-compare', {
          xRange: [-2, 5],
          yRange: [-4, 12],
          lines: [
            { m: 2, b: 0, color: '#3B82F6', label: 'y = 2x' },
            { m: 2, b: 3, color: '#EF4444', label: 'y = 2x + 3' }
          ],
          points: [
            { x: 0, y: 0, color: '#3B82F6', label: '(0|0)' },
            { x: 0, y: 3, color: '#EF4444', label: '(0|3)' }
          ]
        });

        // Interaktiver Slider: m und c
        MathGraph.interactive('graph-l2-slider', {
          xRange: [-5, 5],
          yRange: [-10, 10],
          equation: 'm*x+c',
          sliders: [
            { param: 'm', label: 'Steigung m', min: -4, max: 4, step: 0.5, initial: 2 },
            { param: 'c', label: 'y-Achsenabschnitt c', min: -5, max: 5, step: 0.5, initial: 1 }
          ],
          showSlopeTriangle: true,
          showEquation: true,
          showYIntercept: true
        });
      }
    },
    example: {
      title: 'y = 2x + 3 Schritt fuer Schritt',
      steps: [
        {
          label: 'Schritt 1: Wertetabelle erstellen',
          html: `
            <div class="example-calc">
              x = -1 -> y = 2 * (-1) + 3 = 1<br>
              x = 0 -> y = 2 * 0 + 3 = 3<br>
              x = 1 -> y = 2 * 1 + 3 = 5<br>
              x = 2 -> y = 2 * 2 + 3 = 7
            </div>
          `
        },
        {
          label: 'Schritt 2: Punkte einzeichnen',
          html: 'Trage die Punkte (-1|1), (0|3), (1|5) und (2|7) ins Koordinatensystem ein.'
        },
        {
          label: 'Schritt 3: Gerade zeichnen',
          html: 'Verbinde die Punkte mit einer geraden Linie. Die Gerade schneidet die <strong>y-Achse bei c = 3</strong> und hat die <strong>Steigung m = 2</strong>.'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Was gibt <strong>c</strong> in der Gleichung y = m \u00B7 x + c an?',
        options: ['die Steigung', 'den y-Achsenabschnitt', 'den x-Wert', 'die L\u00E4nge der Geraden'],
        correct: 1,
        explanation: 'c ist der y-Achsenabschnitt \u2013 also der Punkt, an dem die Gerade die y-Achse schneidet. Setzt man x = 0 ein, erh\u00E4lt man y = c.'
      },
      {
        type: 'fill-table',
        question: 'F\u00FClle die Wertetabelle f\u00FCr <strong>y = -x + 4</strong> aus.',
        xValues: [-2, -1, 0, 1, 2, 3],
        correctYValues: [6, 5, 4, 3, 2, 1],
        givenIndices: [2],
        explanation: 'Setze jeden x-Wert ein: z. B. x = -2 \u2192 y = -(-2) + 4 = 2 + 4 = 6. Bei x = 3 \u2192 y = -3 + 4 = 1.',
        hint: 'Rechne: y = -(x) + 4. Achte auf das Minus vor dem x!'
      },
      {
        type: 'number-input',
        question: 'Bestimme den y-Achsenabschnitt der Funktion <strong>y = 3x - 7</strong>.',
        correctAnswer: -7,
        tolerance: 0.01,
        label: 'c',
        placeholder: 'y-Achsenabschnitt eingeben',
        explanation: 'In y = 3x - 7 ist c = -7. Der y-Achsenabschnitt ist die Zahl, die ohne x dasteht.',
        hint: 'Vergleiche mit y = mx + c. Was ist hier c?'
      },
      {
        type: 'matching',
        question: 'Ordne jeder Gleichung den richtigen y-Achsenabschnitt zu.',
        pairs: [
          { left: 'y = 2x + 5', right: 'c = 5' },
          { left: 'y = -3x + 1', right: 'c = 1' },
          { left: 'y = x - 4', right: 'c = -4' },
          { left: 'y = 0,5x', right: 'c = 0' }
        ]
      }
    ]
  },

  // ============================================================
  // Lektion 5: Parallele und senkrechte Geraden
  // ============================================================
  {
    id: 5,
    title: 'Parallele und senkrechte Geraden',
    explanation: {
      html: `
        <div class="book-ref">
          <div class="book-title">Im Buch nachschlagen</div>
          <strong>Vorbereitungsblatt Nr. 5:</strong> Parallele und senkrechte Geraden<br>
          <strong>Buch:</strong> S. 82-83 | <strong>Aufgaben:</strong> S. 82 Nr. 1; S. 83 Nr. 2, A, B<br>
          <strong>Tipp:</strong> Merke und Beispiele auf S. 83 aufmerksam durchlesen!
        </div>

        <h3>Wann sind Geraden parallel?</h3>
        <div class="info-box">
          <strong>Parallele Geraden</strong> haben die <strong>gleiche Steigung</strong> (m1 = m2),
          aber einen <strong>verschiedenen y-Achsenabschnitt</strong>.<br>
          Sie laufen nebeneinander und schneiden sich nie.
        </div>

        <h4>Analogie: Eisenbahngleise</h4>
        <p>
          Parallele Geraden sind wie <strong>Gleise einer Eisenbahn</strong>:
          Sie laufen immer im gleichen Abstand nebeneinander her und treffen sich nie.
          Der Abstand zwischen den Gleisen (= Unterschied in c) bleibt immer gleich.
        </p>
        <p>Hier y = 2x + 1 (blau) und y = 2x - 2 (rot) - gleiche Steigung, verschiedenes c:</p>
        <div id="graph-l4-parallel" class="math-graph"></div>

        <h3>Wann sind Geraden senkrecht (orthogonal)?</h3>
        <div class="formula-box">
          Zwei Geraden stehen <strong>senkrecht</strong> aufeinander, wenn gilt:<br>
          <strong>m1 * m2 = -1</strong><br><br>
          Die Steigungen sind <strong>negative Kehrwerte</strong> voneinander.
        </div>
        <p>
          <strong>Trick:</strong> Um den negativen Kehrwert zu finden: Drehe den Bruch um und aendere das Vorzeichen!<br>
          Beispiel: m = 2 -> Kehrwert = 1/2 -> negativ = <strong>-1/2 = -0,5</strong>
        </p>
        <p>Hier y = 2x (blau) und y = -0,5x (rot) - sie stehen senkrecht aufeinander (90-Grad-Winkel):</p>
        <div id="graph-l4-perp" class="math-graph"></div>

        <h4>Beispiele fuer senkrechte Steigungen:</h4>
        <ul>
          <li>m = 2 -> senkrecht: m = <strong>-1/2 = -0,5</strong></li>
          <li>m = -3 -> senkrecht: m = <strong>1/3</strong></li>
          <li>m = 1 -> senkrecht: m = <strong>-1</strong></li>
        </ul>

        <h4>Probier es selbst aus!</h4>
        <p>
          Die blaue Gerade hat m = 2. Verschiebe den Regler fuer die zweite Gerade (rot).
          Die Anzeige sagt dir, ob die Geraden parallel, senkrecht oder sich einfach schneiden:
        </p>
        <div id="graph-l4-slider" class="math-graph"></div>

        <div class="warning-box">
          <strong>Tipp:</strong> Um den negativen Kehrwert zu finden: Drehe den Bruch um und aendere das Vorzeichen!<br>
          Beispiel: m = 3/4 -> Kehrwert: 4/3 -> negativ: <strong>-4/3</strong>
        </div>

        <details class="book-pages">
          <summary>Original-Buchseiten anzeigen</summary>
          <img src="../Inhalt_Mathebuch/IMG_1997.JPG" alt="Buch S. 83 - Parallele und senkrechte Geraden" style="max-width:100%; margin-top:0.5em;">
          <img src="../Inhalt_Mathebuch/IMG_1998.JPG" alt="Buch S. 83 - Beispiele" style="max-width:100%; margin-top:0.5em;">
        </details>
      `,
      onRender: function () {
        // Parallele Geraden: gleiche Steigung, verschiedenes c
        MathGraph.create('graph-l4-parallel', {
          xRange: [-3, 5],
          yRange: [-5, 8],
          lines: [
            { m: 2, b: 1, color: '#3B82F6', label: 'y = 2x + 1' },
            { m: 2, b: -2, color: '#EF4444', label: 'y = 2x - 2' }
          ]
        });

        // Senkrechte Geraden: m1 * m2 = -1
        MathGraph.create('graph-l4-perp', {
          xRange: [-5, 5],
          yRange: [-5, 5],
          lines: [
            { m: 2, b: 0, color: '#3B82F6', label: 'y = 2x' },
            { m: -0.5, b: 0, color: '#EF4444', label: 'y = -0,5x' }
          ]
        });

        // Interaktiver Slider: Erste Gerade fest (m=2, c=1), zweite variabel
        MathGraph.interactive('graph-l4-slider', {
          xRange: [-5, 5],
          yRange: [-10, 10],
          equations: [
            { expr: '2*x+1', color: '#3B82F6', label: 'g' },
            { expr: 'm2*x', color: '#EF4444', label: 'h' }
          ],
          sliders: [
            { param: 'm2', label: 'Steigung m2', min: -4, max: 4, step: 0.5, initial: 1 }
          ],
          showEquation: true,
          showIntersection: true,
          showStatus: true,
          onStatus: function (params, statusEl) {
            var m1 = 2;
            var m2 = params.m2;
            var product = m1 * m2;
            if (Math.abs(m1 - m2) < 0.01) {
              statusEl.textContent = 'PARALLEL! (m1 = m2 = ' + m1 + ')';
              statusEl.className = 'mg-status mg-status--none';
            } else if (Math.abs(product + 1) < 0.01) {
              statusEl.textContent = 'SENKRECHT! (m1 * m2 = ' + m1 + ' * ' + m2 + ' = -1)';
              statusEl.className = 'mg-status mg-status--infinite';
            } else {
              statusEl.textContent = 'schneiden sich (m1 * m2 = ' + (product >= 0 ? '' : '') + product.toFixed(1) + ' ist nicht -1)';
              statusEl.className = 'mg-status mg-status--one';
            }
          }
        });
      }
    },
    example: {
      title: 'Parallel oder senkrecht?',
      steps: [
        {
          label: 'Beispiel 1: Parallel',
          html: '<div class="example-calc">g: y = 2x + 3<br>h: y = 2x - 1<br><br>Beide haben <strong>m = 2</strong> \u2192 die Geraden sind <strong>parallel</strong>.</div>'
        },
        {
          label: 'Beispiel 2: Senkrecht',
          html: '<div class="example-calc">g: y = 3x + 1<br>h: y = -\u2153x + 2<br><br>Probe: m\u2081 \u00B7 m\u2082 = 3 \u00B7 (-\u2153) = <strong>-1</strong> \u2713 \u2192 die Geraden sind <strong>senkrecht</strong>.</div>'
        },
        {
          label: 'Beispiel 3: Weder noch',
          html: '<div class="example-calc">g: y = 2x + 1<br>h: y = 3x - 2<br><br>m\u2081 \u2260 m\u2082 (nicht parallel) und 2 \u00B7 3 = 6 \u2260 -1 (nicht senkrecht).<br>\u2192 Die Geraden <strong>schneiden sich</strong> in einem Punkt.</div>'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'g: y = 4x + 2 und h: y = 4x - 5. Wie liegen die Geraden zueinander?',
        options: ['senkrecht', 'parallel', 'sie schneiden sich', 'kann man nicht sagen'],
        correct: 1,
        explanation: 'Beide Geraden haben die Steigung m = 4. Gleiche Steigung bedeutet: Die Geraden sind parallel.'
      },
      {
        type: 'number-input',
        question: 'Die Gerade g hat die Steigung m = 3. Welche Steigung hat eine Gerade h, die <strong>senkrecht</strong> zu g verl\u00E4uft? <em>(als Dezimalzahl)</em>',
        correctAnswer: -0.333,
        tolerance: 0.01,
        label: 'm\u2082',
        placeholder: 'z. B. -0,33',
        explanation: 'F\u00FCr senkrechte Geraden gilt: m\u2081 \u00B7 m\u2082 = -1. Also: m\u2082 = -1/3 \u2248 -0,333.',
        hint: 'F\u00FCr senkrechte Geraden gilt: m\u2081 \u00B7 m\u2082 = -1, also m\u2082 = -1/m\u2081 = -1/3'
      },
      {
        type: 'multiple-choice',
        question: 'Welche Gerade verl\u00E4uft <strong>senkrecht</strong> zu y = -2x + 5?',
        options: ['y = -2x + 3', 'y = 2x + 1', 'y = 0,5x - 1', 'y = -0,5x + 2'],
        correct: 2,
        explanation: 'Die Steigung von y = -2x + 5 ist m\u2081 = -2. Senkrecht bedeutet: m\u2082 = -1/(-2) = 0,5. Die Gerade y = 0,5x - 1 hat m = 0,5. \u2713'
      },
      {
        type: 'matching',
        question: 'Ordne die Steigungspaare richtig zu: senkrecht oder parallel?',
        pairs: [
          { left: 'm\u2081 = 2, m\u2082 = -0,5', right: 'senkrecht' },
          { left: 'm\u2081 = -1, m\u2082 = 1', right: 'senkrecht' },
          { left: 'm\u2081 = 4, m\u2082 = 4', right: 'parallel' },
          { left: 'm\u2081 = -3, m\u2082 = -3', right: 'parallel' }
        ]
      }
    ]
  },

  // ============================================================
  // Lektion 6: Geradengleichung berechnen
  // ============================================================
  {
    id: 6,
    title: 'Geradengleichung berechnen',
    explanation: {
      html: `
        <div class="book-ref">
          <div class="book-title">Im Buch nachschlagen</div>
          <strong>Vorbereitungsblatt Nr. 6:</strong> Geradengleichung berechnen<br>
          <strong>Buch:</strong> S. 85 | <strong>Aufgaben:</strong> S. 85 Nr. 2, 3, A, B, 4a) re.<br>
          <strong>Tipp:</strong> Merke und Beispiele auf S. 85 aufmerksam durchlesen!
        </div>

        <h3>Drei Methoden, um die Gleichung einer Geraden zu finden</h3>

        <div class="info-box">
          <strong>Methode 1: Ablesen aus dem Graphen</strong><br>
          Lies die Steigung m (mit Steigungsdreieck) und den y-Achsenabschnitt c (Schnittpunkt mit y-Achse) direkt ab.
          Das ist die schnellste Methode, wenn du einen Graphen hast!
        </div>

        <div class="info-box">
          <strong>Methode 2: Zwei Punkte gegeben</strong><br>
          Wenn du zwei Punkte P1(x1|y1) und P2(x2|y2) kennst:
        </div>
        <div class="formula-box">
          <strong>Schritt 1:</strong> m = (y2 - y1) / (x2 - x1)<br>
          <strong>Schritt 2:</strong> c = y1 - m * x1<br>
          <strong>Schritt 3:</strong> Gleichung aufstellen: y = mx + c
        </div>

        <div class="info-box">
          <strong>Methode 3: Steigung m und ein Punkt gegeben</strong><br>
          Setze den Punkt in y = mx + c ein und loese nach c auf:
        </div>
        <div class="formula-box">
          <strong>c = y - m * x</strong>
        </div>

        <h4>Beispiel: P(1|5) und Q(3|9)</h4>
        <p>
          m = (9-5) / (3-1) = 4/2 = 2, dann c = 5 - 2*1 = 3.
          Ergebnis: y = 2x + 3. Im Graphen sieht das so aus:
        </p>
        <div id="graph-l5-example" class="math-graph"></div>

        <h4>Probier es selbst: Klicke zwei Punkte!</h4>
        <p>Klicke zwei beliebige Punkte und lass dir die Gleichung berechnen:</p>
        <div id="graph-l5-click" class="math-graph"></div>

        <div class="warning-box">
          <strong>Tipp:</strong> Mache immer eine <strong>Probe</strong>! Setze einen bekannten Punkt in deine
          Gleichung ein und pruefe, ob die Gleichung stimmt.
        </div>

        <details class="book-pages">
          <summary>Original-Buchseite anzeigen</summary>
          <img src="../Inhalt_Mathebuch/IMG_1999.JPG" alt="Buch S. 85 - Geradengleichung berechnen" style="max-width:100%; margin-top:0.5em;">
        </details>
      `,
      onRender: function () {
        // Beispiel: P(1|5) und Q(3|9) mit y=2x+3
        MathGraph.create('graph-l5-example', {
          xRange: [-1, 5],
          yRange: [-1, 12],
          lines: [
            { m: 2, b: 3, color: '#3B82F6', label: 'y = 2x + 3' }
          ],
          slopeTriangle: {
            from: { x: 1, y: 5 },
            to: { x: 3, y: 9 }
          },
          points: [
            { x: 1, y: 5, color: '#3B82F6', label: 'P(1|5)' },
            { x: 3, y: 9, color: '#3B82F6', label: 'Q(3|9)' },
            { x: 0, y: 3, color: '#EF4444', label: 'c = 3' }
          ]
        });

        // Klickbarer Graph: Zwei Punkte setzen
        MathGraph.clickable('graph-l5-click', {
          xRange: [-5, 5],
          yRange: [-5, 5],
          mode: 'two-points'
        });
      }
    },
    example: {
      title: 'Gleichung aus zwei Punkten berechnen',
      steps: [
        {
          label: 'Gegeben: P(1|5) und Q(3|9)',
          html: 'Gesucht: Die Gleichung y = mx + c'
        },
        {
          label: 'Schritt 1: Steigung berechnen',
          html: '<div class="example-calc">m = (y\u2082 - y\u2081) / (x\u2082 - x\u2081) = (9 - 5) / (3 - 1) = 4 / 2 = <strong>2</strong></div>'
        },
        {
          label: 'Schritt 2: c berechnen',
          html: '<div class="example-calc">c = y\u2081 - m \u00B7 x\u2081 = 5 - 2 \u00B7 1 = 5 - 2 = <strong>3</strong></div>'
        },
        {
          label: 'Schritt 3: Gleichung aufstellen',
          html: '<strong>y = 2x + 3</strong>'
        },
        {
          label: 'Schritt 4: Probe mit Q(3|9)',
          html: '<div class="example-calc">y = 2 \u00B7 3 + 3 = 6 + 3 = 9 \u2713 Stimmt!</div>'
        }
      ]
    },
    exercises: [
      {
        type: 'coordinate-input',
        question: 'Bestimme <strong>m</strong> und <strong>c</strong> der Geraden durch P(2|7) und Q(5|16).',
        correctX: 3,
        correctY: 1,
        tolerance: 0.01,
        xLabel: 'm',
        yLabel: 'c',
        explanation: 'm = (16 - 7) / (5 - 2) = 9 / 3 = 3. Dann c = 7 - 3 \u00B7 2 = 7 - 6 = 1. Also: y = 3x + 1.',
        hint: 'm = (16 - 7) / (5 - 2) = 3. Dann c = 7 - 3 \u00B7 2 = 1'
      },
      {
        type: 'number-input',
        question: 'Eine Gerade hat die Steigung m = -2 und geht durch P(3|1). Berechne <strong>c</strong>.',
        correctAnswer: 7,
        tolerance: 0.01,
        label: 'c',
        placeholder: 'y-Achsenabschnitt eingeben',
        explanation: 'c = y - m \u00B7 x = 1 - (-2) \u00B7 3 = 1 + 6 = 7. Die Gleichung lautet: y = -2x + 7.',
        hint: 'c = y - m \u00B7 x = 1 - (-2) \u00B7 3 = 1 + 6'
      },
      {
        type: 'multiple-choice',
        question: 'Die Gerade geht durch (0|4) und (2|10). Wie lautet die Gleichung?',
        options: ['y = 3x + 4', 'y = 4x + 3', 'y = 2x + 4', 'y = 5x + 4'],
        correct: 0,
        explanation: 'm = (10 - 4) / (2 - 0) = 6 / 2 = 3. Der Punkt (0|4) verr\u00E4t direkt: c = 4. Also y = 3x + 4.'
      },
      {
        type: 'number-input',
        question: 'Berechne die Steigung der Geraden durch A(-1|8) und B(3|0).',
        correctAnswer: -2,
        tolerance: 0.01,
        label: 'm',
        placeholder: 'Steigung eingeben',
        explanation: 'm = (0 - 8) / (3 - (-1)) = -8 / 4 = -2',
        hint: 'm = (0 - 8) / (3 - (-1)) = -8 / 4'
      }
    ]
  },

  // ============================================================
  // Lektion 7: Modellieren
  // ============================================================
  {
    id: 7,
    title: 'Modellieren mit linearen Funktionen',
    explanation: {
      html: `
        <div class="book-ref">
          <div class="book-title">Im Buch nachschlagen</div>
          <strong>Vorbereitungsblatt Nr. 7:</strong> Modellieren<br>
          <strong>Buch:</strong> S. 87 | <strong>Aufgaben:</strong> S. 87 Nr. 2, A<br>
          <strong>Rueckspiegel Lineare Funktionen:</strong> S. 96<br>
          <strong>Tipp:</strong> Merke und Beispiele auf S. 87 durchlesen. Zum Wiederholen den Rueckspiegel S. 96 rechnen!
        </div>

        <h3>Alltagsprobleme mit Geraden loesen</h3>
        <p>
          Viele Situationen aus dem Alltag lassen sich mit linearen Funktionen beschreiben.
          Der Trick: <strong>Uebersetze die Textaufgabe in eine Gleichung y = mx + c</strong>.
        </p>

        <div class="info-box">
          <strong>So erkennst du m und c im Text:</strong><br>
          <ul>
            <li><strong>c (y-Achsenabschnitt)</strong> = Grundgebuehr, Startwert, Anfangshoehe, Fixkosten</li>
            <li><strong>m (Steigung)</strong> = Preis pro Einheit, Verbrauch pro Stunde, Kosten pro km</li>
          </ul>
          Denk dran: <strong>c = was du am Anfang schon hast/zahlst</strong>, <strong>m = was pro Schritt dazukommt</strong>.
        </div>

        <h4>Beispiel 1: Taxi-Vergleich</h4>
        <p>
          Taxi A: 3,50 Euro Grundgebuehr + 2 Euro/km -> <strong>y = 2x + 3,5</strong><br>
          Taxi B: 5 Euro Grundgebuehr + 1,50 Euro/km -> <strong>y = 1,5x + 5</strong><br>
          Der Schnittpunkt zeigt, ab wann Taxi B guenstiger ist:
        </p>
        <div id="graph-l6-taxi" class="math-graph"></div>

        <h4>Beispiel 2: Brennende Kerze</h4>
        <p>
          Eine Kerze ist 15 cm lang und brennt 1,5 cm pro Stunde ab -> <strong>y = -1,5x + 15</strong><br>
          Hier ist m negativ, weil die Kerze kuerzer wird! Bei y = 0 ist sie abgebrannt:
        </p>
        <div id="graph-l6-candle" class="math-graph"></div>

        <h4>Typische Aufgabentypen</h4>
        <ul>
          <li><strong>Tarifvergleich:</strong> "Ab wann lohnt sich Tarif B?" -> Gleichungen gleichsetzen, Schnittpunkt = Break-even</li>
          <li><strong>Verbrauch:</strong> "Wann ist der Tank/die Kerze leer?" -> y = 0 setzen</li>
          <li><strong>Kosten:</strong> "Wie viel kostet es bei x Einheiten?" -> x einsetzen</li>
        </ul>

        <div class="formula-box">
          <strong>Vorgehen bei Textaufgaben:</strong><br>
          1. Variable festlegen (Was ist x? Was ist y?)<br>
          2. Gleichung aufstellen (m und c aus dem Text ablesen)<br>
          3. Berechnen (einsetzen oder gleichsetzen)
        </div>

        <div class="warning-box">
          <strong>Tipp:</strong> Bei Tarifvergleichen zwei Gleichungen aufstellen und gleichsetzen!
          Der x-Wert des Schnittpunkts zeigt dir, ab wann sich der andere Tarif lohnt.
        </div>

        <details class="book-pages">
          <summary>Original-Buchseiten anzeigen</summary>
          <img src="../Inhalt_Mathebuch/IMG_2001.JPG" alt="Buch S. 87 - Modellieren" style="max-width:100%; margin-top:0.5em;">
          <img src="../Inhalt_Mathebuch/IMG_2002.JPG" alt="Buch S. 96 - Rueckspiegel" style="max-width:100%; margin-top:0.5em;">
        </details>
      `,
      onRender: function () {
        // Taxi-Vergleich: y=2x+3.5 und y=1.5x+5, Schnittpunkt bei x=3, y=9.5
        MathGraph.create('graph-l6-taxi', {
          xRange: [-1, 10],
          yRange: [-1, 22],
          lines: [
            { m: 2, b: 3.5, color: '#3B82F6', label: 'Taxi A' },
            { m: 1.5, b: 5, color: '#EF4444', label: 'Taxi B' }
          ],
          intersection: { x: 3, y: 9.5 },
          points: [
            { x: 0, y: 3.5, color: '#3B82F6', label: '3,50 Euro' },
            { x: 0, y: 5, color: '#EF4444', label: '5 Euro' }
          ]
        });

        // Brennende Kerze: y=-1.5x+15
        MathGraph.create('graph-l6-candle', {
          xRange: [-1, 12],
          yRange: [-2, 18],
          lines: [
            { m: -1.5, b: 15, color: '#F59E0B', label: 'Kerze' }
          ],
          points: [
            { x: 0, y: 15, color: '#F59E0B', label: 'Start: 15 cm' },
            { x: 10, y: 0, color: '#EF4444', label: 'abgebrannt (10h)' }
          ]
        });
      }
    },
    example: {
      title: 'Taxi-Vergleich: Ab wann ist Taxi B guenstiger?',
      steps: [
        {
          label: 'Schritt 1: Variablen festlegen',
          html: '<strong>x</strong> = gefahrene Kilometer, <strong>y</strong> = Gesamtpreis in Euro'
        },
        {
          label: 'Schritt 2: Gleichungen aufstellen',
          html: '<div class="example-calc">Taxi A: 3 Euro Grundgebuehr + 2 Euro/km \u2192 <strong>y = 2x + 3</strong><br>Taxi B: 5 Euro Grundgebuehr + 1,50 Euro/km \u2192 <strong>y = 1,5x + 5</strong></div>'
        },
        {
          label: 'Schritt 3: Gleichsetzen',
          html: '<div class="example-calc">2x + 3 = 1,5x + 5<br>2x - 1,5x = 5 - 3<br>0,5x = 2<br><strong>x = 4</strong></div>'
        },
        {
          label: 'Schritt 4: Antwort formulieren',
          html: 'Ab <strong>4 km</strong> ist Taxi B g\u00FCnstiger. Bei genau 4 km kosten beide gleich viel (jeweils 11 Euro).'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Ein Handyvertrag kostet <strong>10 \u20AC Grundgeb\u00FChr</strong> plus <strong>0,15 \u20AC pro Minute</strong>. Wie lautet die Kostenfunktion?',
        options: ['y = 10x + 0,15', 'y = 0,15x + 10', 'y = 10,15x', 'y = 0,15x - 10'],
        correct: 1,
        explanation: 'Die Grundgeb\u00FChr (10 \u20AC) ist der feste Startwert \u2192 c = 10. Die Kosten pro Minute (0,15 \u20AC) sind die Steigung \u2192 m = 0,15. Also: y = 0,15x + 10.'
      },
      {
        type: 'number-input',
        question: '<strong>Fitnessstudio A:</strong> 20 \u20AC/Monat + 5 \u20AC pro Besuch.<br><strong>Fitnessstudio B:</strong> 50 \u20AC/Monat, Besuche kostenlos.<br>Ab wie vielen Besuchen pro Monat lohnt sich Studio B?',
        correctAnswer: 6,
        tolerance: 0.01,
        label: 'Besuche',
        placeholder: 'Anzahl Besuche',
        unit: 'Besuche',
        explanation: 'Studio A: y = 5x + 20. Studio B: y = 50. Gleichsetzen: 5x + 20 = 50 \u2192 5x = 30 \u2192 x = 6. Ab 6 Besuchen lohnt sich Studio B.',
        hint: '5x + 20 = 50 \u2192 5x = 30 \u2192 x = ?'
      },
      {
        type: 'number-input',
        question: 'Eine Kerze ist <strong>24 cm</strong> lang und brennt pro Stunde <strong>3 cm</strong> ab. Nach wie vielen Stunden ist sie komplett abgebrannt? (y = 0)',
        correctAnswer: 8,
        tolerance: 0.01,
        label: 'Stunden',
        placeholder: 'Anzahl Stunden',
        unit: 'Stunden',
        explanation: 'Gleichung: y = 24 - 3x (Startl\u00E4nge minus Abbrand). Setze y = 0: 0 = 24 - 3x \u2192 3x = 24 \u2192 x = 8 Stunden.',
        hint: 'y = 24 - 3x. Setze y = 0: 0 = 24 - 3x \u2192 x = ?'
      },
      {
        type: 'multiple-choice',
        question: '<strong>Stromtarif A:</strong> 80 \u20AC Grundgeb\u00FChr + 0,25 \u20AC/kWh.<br><strong>Tarif B:</strong> 0,35 \u20AC/kWh ohne Grundgeb\u00FChr.<br>Was ist die Gleichung f\u00FCr <strong>Tarif A</strong>?',
        options: ['y = 80x + 0,25', 'y = 0,35x', 'y = 0,25x + 80', 'y = 80 - 0,25x'],
        correct: 2,
        explanation: 'Bei Tarif A sind 80 \u20AC die Grundgeb\u00FChr (= c) und 0,25 \u20AC/kWh die Steigung (= m). Also: y = 0,25x + 80.'
      }
    ]
  }
];
