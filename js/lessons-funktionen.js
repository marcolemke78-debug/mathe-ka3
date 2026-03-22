const LessonsFunktionen = [
  // ============================================================
  // Lektion 1: Proportionale Funktionen
  // ============================================================
  {
    id: 1,
    title: 'Proportionale Funktionen',
    explanation: {
      html: `
        <div class="book-ref">
          <div class="book-title">Im Buch nachschlagen</div>
          <strong>Vorbereitungsblatt Zeile 3-5:</strong> Funktionen / Funktionswerte und Proportionale Funktionen<br>
          <strong>Buch:</strong> S. 75-76 | <strong>Aufgaben:</strong> S. 75/76 Nr. 3, A, B, 4e; S. 76 Nr. 1, 6e<br>
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
          <strong>Merke:</strong> Bei proportionalen Funktionen gibt es <strong>keinen y-Achsenabschnitt</strong> (bzw. b = 0).
          Der Graph geht immer durch (0|0)!
        </div>

        
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
        explanation: 'Nur y = 3x hat die Form y = m \u00B7 x (ohne b). Die Gerade geht durch den Ursprung. Bei y = 2x + 1 ist b = 1, also nicht proportional.'
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
  // Lektion 2: Lineare Funktionen
  // ============================================================
  {
    id: 2,
    title: 'Lineare Funktionen',
    explanation: {
      html: `
        <div class="book-ref">
          <div class="book-title">Im Buch nachschlagen</div>
          <strong>Vorbereitungsblatt Zeile 6:</strong> Lineare Funktionen<br>
          <strong>Buch:</strong> S. 72, S. 79 | <strong>Aufgaben:</strong> S. 79 Nr. 1, A, B, 4e<br>
          <strong>Tipp:</strong> Merke und Beispiele auf S. 79 aufmerksam durchlesen!
        </div>

        <h3>Was ist eine lineare Funktion?</h3>
        <div class="formula-box">
          <strong>y = m * x + b</strong><br>
          m = Steigung | b = y-Achsenabschnitt
        </div>
        <p>
          <strong>m (Steigung):</strong> Gibt an, wie steil die Gerade ist - genau wie bei proportionalen Funktionen.
        </p>
        <p>
          <strong>b (y-Achsenabschnitt):</strong> Das ist der Punkt, an dem die Gerade die <strong>y-Achse schneidet</strong>.
          Man findet ihn, indem man x = 0 einsetzt: y = m * 0 + b = b.
        </p>

        <h4>Alltagsbeispiel: Startguthaben</h4>
        <div class="info-box">
          Stell dir <strong>b</strong> wie ein <strong>Startguthaben auf deinem Konto</strong> vor.
          Wenn b = 3, startest du bei 3 Euro - und mit jeder Einheit (x) kommt m Euro dazu (oder wird abgezogen).<br><br>
          Beispiel: Du hast 3 Euro Taschengeld gespart (b = 3) und bekommst jede Woche 2 Euro dazu (m = 2).
          Nach x Wochen hast du: <strong>y = 2x + 3</strong> Euro.
        </div>

        <p>Hier siehst du y = 2x + 3 mit dem y-Achsenabschnitt (0|3) und dem Steigungsdreieck:</p>
        <div id="graph-l2-basic" class="math-graph"></div>

        <h4>Unterschied zur proportionalen Funktion</h4>
        <ul>
          <li><strong>Proportional:</strong> y = m * x -> geht durch (0|0)</li>
          <li><strong>Linear:</strong> y = m * x + b -> geht durch (0|b)</li>
        </ul>
        <p>
          Wenn b ungleich 0, wird die Gerade nach oben (b > 0) oder unten (b < 0) verschoben.
          Vergleiche y = 2x (durch den Ursprung, blau) mit y = 2x + 3 (um 3 nach oben verschoben, rot):
        </p>
        <div id="graph-l2-compare" class="math-graph"></div>

        <h4>Probier es selbst aus!</h4>
        <p>Verschiebe die Regler fuer m und b und beobachte, wie sich die Gerade veraendert:</p>
        <div id="graph-l2-slider" class="math-graph"></div>

        <div class="warning-box">
          <strong>Achtung:</strong> Jede proportionale Funktion ist auch eine lineare Funktion (mit b = 0).
          Aber nicht jede lineare Funktion ist proportional!
        </div>

        
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
            { x: 0, y: 3, color: '#EF4444', label: 'b = 3' }
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

        // Interaktiver Slider: m und b
        MathGraph.interactive('graph-l2-slider', {
          xRange: [-5, 5],
          yRange: [-10, 10],
          equation: 'm*x+b',
          sliders: [
            { param: 'm', label: 'Steigung m', min: -4, max: 4, step: 0.5, initial: 2 },
            { param: 'b', label: 'y-Achsenabschnitt b', min: -5, max: 5, step: 0.5, initial: 1 }
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
          html: 'Verbinde die Punkte mit einer geraden Linie. Die Gerade schneidet die <strong>y-Achse bei b = 3</strong> und hat die <strong>Steigung m = 2</strong>.'
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Was gibt <strong>b</strong> in der Gleichung y = m \u00B7 x + b an?',
        options: ['die Steigung', 'den y-Achsenabschnitt', 'den x-Wert', 'die L\u00E4nge der Geraden'],
        correct: 1,
        explanation: 'b ist der y-Achsenabschnitt \u2013 also der Punkt, an dem die Gerade die y-Achse schneidet. Setzt man x = 0 ein, erh\u00E4lt man y = b.'
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
        label: 'b',
        placeholder: 'y-Achsenabschnitt eingeben',
        explanation: 'In y = 3x - 7 ist b = -7. Der y-Achsenabschnitt ist die Zahl, die ohne x dasteht.',
        hint: 'Vergleiche mit y = mx + b. Was ist hier b?'
      },
      {
        type: 'matching',
        question: 'Ordne jeder Gleichung den richtigen y-Achsenabschnitt zu.',
        pairs: [
          { left: 'y = 2x + 5', right: 'b = 5' },
          { left: 'y = -3x + 1', right: 'b = 1' },
          { left: 'y = x - 4', right: 'b = -4' },
          { left: 'y = 0,5x', right: 'b = 0' }
        ]
      }
    ]
  },

  // ============================================================
  // Lektion 3: Steigung und y-Achsenabschnitt bestimmen
  // ============================================================
  {
    id: 3,
    title: 'Steigung und y-Achsenabschnitt bestimmen',
    explanation: {
      html: `
        <div class="book-ref">
          <div class="book-title">Im Buch nachschlagen</div>
          <strong>Vorbereitungsblatt Zeile 3 + 6:</strong> Funktionen / Lineare Funktionen (Steigung &amp; y-Achsenabschnitt)<br>
          <strong>Buch:</strong> S. 72, S. 75-76, S. 79 | <strong>Aufgaben:</strong> S. 76 Nr. 5, 6; S. 79 Nr. 1, 4<br>
          <strong>Tipp:</strong> Steigungsdreieck auf S. 75 und Beispiele auf S. 79 anschauen!
        </div>

        <h3>Steigung aus dem Graphen ablesen</h3>
        <p>
          Um die Steigung <strong>m</strong> zu bestimmen, brauchst du <strong>zwei Punkte</strong> auf der Geraden.
          Dann rechnest du mit der <strong>Steigungsformel</strong>:
        </p>
        <div class="formula-box">
          <strong>m = (y2 - y1) / (x2 - x1)</strong><br>
          "Wie viel steigt/faellt y, wenn x sich aendert?"
        </div>

        <h4>Beispiel: Steigung berechnen</h4>
        <p>Gegeben sind P1(1|3) und P2(3|7). Das Steigungsdreieck zeigt: Deltax = 2, Deltay = 4, also m = 4/2 = 2.</p>
        <div id="graph-l3-formula" class="math-graph"></div>

        <h4>Was bedeutet die Steigung?</h4>
        <ul>
          <li><strong>m > 0</strong> -> Gerade <strong>steigt</strong> von links nach rechts (aufwaerts)</li>
          <li><strong>m < 0</strong> -> Gerade <strong>faellt</strong> von links nach rechts (abwaerts)</li>
          <li><strong>m = 0</strong> -> <strong>waagerechte</strong> Gerade (z. B. y = 3)</li>
        </ul>

        <h4>y-Achsenabschnitt b ablesen</h4>
        <div class="info-box">
          Der y-Achsenabschnitt <strong>b</strong> ist der y-Wert dort, wo die Gerade die <strong>y-Achse schneidet</strong>
          (also bei x = 0). Schau dir im folgenden Graphen an, wo die Gerade die y-Achse trifft:
        </div>
        <p>Hier y = -1,5x + 4. Lies ab: m = -1,5 (fallend!) und b = 4.</p>
        <div id="graph-l3-read" class="math-graph"></div>

        <p>
          Wenn du m und einen Punkt kennst, kannst du b ausrechnen:<br>
          Setze den Punkt in y = mx + b ein und loese nach b auf: <strong>b = y - m * x</strong>.
        </p>

        <h4>Probier es selbst: Klicke zwei Punkte!</h4>
        <p>Klicke zwei Punkte ins Koordinatensystem. Die App berechnet automatisch m und b und zeigt die Gerade:</p>
        <div id="graph-l3-click" class="math-graph"></div>

        
      `,
      onRender: function () {
        // Gerade y=2x+1 mit Steigungsdreieck und markierten Punkten
        MathGraph.create('graph-l3-formula', {
          xRange: [-1, 5],
          yRange: [-1, 9],
          lines: [
            { m: 2, b: 1, color: '#3B82F6', label: 'y = 2x + 1' }
          ],
          slopeTriangle: {
            from: { x: 1, y: 3 },
            to: { x: 3, y: 7 }
          },
          points: [
            { x: 1, y: 3, color: '#3B82F6', label: 'P1(1|3)' },
            { x: 3, y: 7, color: '#3B82F6', label: 'P2(3|7)' }
          ]
        });

        // Gerade y=-1.5x+4 zum Ablesen
        MathGraph.create('graph-l3-read', {
          xRange: [-2, 6],
          yRange: [-6, 6],
          lines: [
            { m: -1.5, b: 4, color: '#EF4444', label: 'y = -1,5x + 4' }
          ],
          points: [
            { x: 0, y: 4, color: '#EF4444', label: 'b = 4' },
            { x: 2, y: 1, color: '#EF4444', label: '(2|1)' }
          ],
          slopeTriangle: {
            from: { x: 0, y: 4 },
            to: { x: 2, y: 1 }
          }
        });

        // Klickbarer Graph: Zwei Punkte setzen
        MathGraph.clickable('graph-l3-click', {
          xRange: [-5, 5],
          yRange: [-5, 5],
          mode: 'two-points'
        });
      }
    },
    example: {
      title: 'Geradengleichung aus zwei Punkten bestimmen',
      steps: [
        {
          label: 'Gegeben: P1(1|3) und P2(3|7)',
          html: 'Wir wollen die Gleichung y = mx + b finden.'
        },
        {
          label: 'Schritt 1: Steigung berechnen',
          html: '<div class="example-calc">m = (y2 - y1) / (x2 - x1) = (7 - 3) / (3 - 1) = 4 / 2 = <strong>2</strong></div>'
        },
        {
          label: 'Schritt 2: b bestimmen',
          html: '<div class="example-calc">Punkt P1(1|3) einsetzen:<br>3 = 2 * 1 + b<br>3 = 2 + b<br>b = <strong>1</strong></div>'
        },
        {
          label: 'Schritt 3: Gleichung aufstellen',
          html: 'Die Geradengleichung lautet: <strong>y = 2x + 1</strong>'
        }
      ]
    },
    exercises: [
      {
        type: 'number-input',
        question: 'Berechne die Steigung <strong>m</strong> der Geraden durch P(2|5) und Q(4|11).',
        correctAnswer: 3,
        tolerance: 0.01,
        label: 'm',
        placeholder: 'Steigung eingeben',
        explanation: 'm = (11 - 5) / (4 - 2) = 6 / 2 = 3',
        hint: 'm = (y\u2082 - y\u2081) / (x\u2082 - x\u2081) = (11 - 5) / (4 - 2)'
      },
      {
        type: 'number-input',
        question: 'Die Gerade <strong>y = m \u00B7 x + 2</strong> geht durch den Punkt P(3|8). Berechne m.',
        correctAnswer: 2,
        tolerance: 0.01,
        label: 'm',
        placeholder: 'Steigung eingeben',
        explanation: 'Einsetzen: 8 = m \u00B7 3 + 2 \u2192 6 = 3m \u2192 m = 2',
        hint: 'Setze P in die Gleichung ein: 8 = m \u00B7 3 + 2'
      },
      {
        type: 'multiple-choice',
        question: 'Eine Gerade <strong>f\u00E4llt</strong> von links nach rechts. Was gilt f\u00FCr die Steigung?',
        options: ['m > 0', 'm = 0', 'm < 0', 'm = 1'],
        correct: 2,
        explanation: 'Wenn eine Gerade f\u00E4llt (von links nach rechts abw\u00E4rts geht), ist die Steigung negativ, also m < 0.'
      },
      {
        type: 'number-input',
        question: 'Berechne die Steigung der Geraden durch A(-1|4) und B(2|-2).',
        correctAnswer: -2,
        tolerance: 0.01,
        label: 'm',
        placeholder: 'Steigung eingeben',
        explanation: 'm = (-2 - 4) / (2 - (-1)) = -6 / 3 = -2',
        hint: 'm = (-2 - 4) / (2 - (-1)) = -6 / 3'
      }
    ]
  },

  // ============================================================
  // Lektion 4: Parallele und senkrechte Geraden
  // ============================================================
  {
    id: 4,
    title: 'Parallele und senkrechte Geraden',
    explanation: {
      html: `
        <div class="book-ref">
          <div class="book-title">Im Buch nachschlagen</div>
          <strong>Vorbereitungsblatt Zeile 7:</strong> Parallele und senkrechte Geraden<br>
          <strong>Buch:</strong> S. 83 | <strong>Aufgaben:</strong> S. 83 Nr. 2, A, B<br>
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
          Der Abstand zwischen den Gleisen (= Unterschied in b) bleibt immer gleich.
        </p>
        <p>Hier y = 2x + 1 (blau) und y = 2x - 2 (rot) - gleiche Steigung, verschiedenes b:</p>
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

        
      `,
      onRender: function () {
        // Parallele Geraden: gleiche Steigung, verschiedenes b
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

        // Interaktiver Slider: Erste Gerade fest (m=2, b=1), zweite variabel
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
  // Lektion 5: Geradengleichung berechnen
  // ============================================================
  {
    id: 5,
    title: 'Geradengleichung berechnen',
    explanation: {
      html: `
        <div class="book-ref">
          <div class="book-title">Im Buch nachschlagen</div>
          <strong>Vorbereitungsblatt Zeile 8:</strong> Geradengleichung berechnen<br>
          <strong>Buch:</strong> S. 85 | <strong>Aufgaben:</strong> S. 85 Nr. 2, 3, A, B<br>
          <strong>Tipp:</strong> Merke und Beispiele auf S. 85 aufmerksam durchlesen!
        </div>

        <h3>Drei Methoden, um die Gleichung einer Geraden zu finden</h3>

        <div class="info-box">
          <strong>Methode 1: Ablesen aus dem Graphen</strong><br>
          Lies die Steigung m (mit Steigungsdreieck) und den y-Achsenabschnitt b (Schnittpunkt mit y-Achse) direkt ab.
          Das ist die schnellste Methode, wenn du einen Graphen hast!
        </div>

        <div class="info-box">
          <strong>Methode 2: Zwei Punkte gegeben</strong><br>
          Wenn du zwei Punkte P1(x1|y1) und P2(x2|y2) kennst:
        </div>
        <div class="formula-box">
          <strong>Schritt 1:</strong> m = (y2 - y1) / (x2 - x1)<br>
          <strong>Schritt 2:</strong> b = y1 - m * x1<br>
          <strong>Schritt 3:</strong> Gleichung aufstellen: y = mx + b
        </div>

        <div class="info-box">
          <strong>Methode 3: Steigung m und ein Punkt gegeben</strong><br>
          Setze den Punkt in y = mx + b ein und loese nach b auf:
        </div>
        <div class="formula-box">
          <strong>b = y - m * x</strong>
        </div>

        <h4>Beispiel: P(1|5) und Q(3|9)</h4>
        <p>
          m = (9-5) / (3-1) = 4/2 = 2, dann b = 5 - 2*1 = 3.
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
            { x: 0, y: 3, color: '#EF4444', label: 'b = 3' }
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
          html: 'Gesucht: Die Gleichung y = mx + b'
        },
        {
          label: 'Schritt 1: Steigung berechnen',
          html: '<div class="example-calc">m = (y\u2082 - y\u2081) / (x\u2082 - x\u2081) = (9 - 5) / (3 - 1) = 4 / 2 = <strong>2</strong></div>'
        },
        {
          label: 'Schritt 2: b berechnen',
          html: '<div class="example-calc">b = y\u2081 - m \u00B7 x\u2081 = 5 - 2 \u00B7 1 = 5 - 2 = <strong>3</strong></div>'
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
        question: 'Bestimme <strong>m</strong> und <strong>b</strong> der Geraden durch P(2|7) und Q(5|16).',
        correctX: 3,
        correctY: 1,
        tolerance: 0.01,
        xLabel: 'm',
        yLabel: 'b',
        explanation: 'm = (16 - 7) / (5 - 2) = 9 / 3 = 3. Dann b = 7 - 3 \u00B7 2 = 7 - 6 = 1. Also: y = 3x + 1.',
        hint: 'm = (16 - 7) / (5 - 2) = 3. Dann b = 7 - 3 \u00B7 2 = 1'
      },
      {
        type: 'number-input',
        question: 'Eine Gerade hat die Steigung m = -2 und geht durch P(3|1). Berechne <strong>b</strong>.',
        correctAnswer: 7,
        tolerance: 0.01,
        label: 'b',
        placeholder: 'y-Achsenabschnitt eingeben',
        explanation: 'b = y - m \u00B7 x = 1 - (-2) \u00B7 3 = 1 + 6 = 7. Die Gleichung lautet: y = -2x + 7.',
        hint: 'b = y - m \u00B7 x = 1 - (-2) \u00B7 3 = 1 + 6'
      },
      {
        type: 'multiple-choice',
        question: 'Die Gerade geht durch (0|4) und (2|10). Wie lautet die Gleichung?',
        options: ['y = 3x + 4', 'y = 4x + 3', 'y = 2x + 4', 'y = 5x + 4'],
        correct: 0,
        explanation: 'm = (10 - 4) / (2 - 0) = 6 / 2 = 3. Der Punkt (0|4) verr\u00E4t direkt: b = 4. Also y = 3x + 4.'
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
  // Lektion 6: Modellieren mit linearen Funktionen
  // ============================================================
  {
    id: 6,
    title: 'Modellieren mit linearen Funktionen',
    explanation: {
      html: `
        <div class="book-ref">
          <div class="book-title">Im Buch nachschlagen</div>
          <strong>Vorbereitungsblatt Zeile 9:</strong> Modellieren<br>
          <strong>Buch:</strong> S. 87 | <strong>Aufgaben:</strong> S. 87 Nr. 2, A<br>
          <strong>Rueckspiegel Lineare Funktionen:</strong> S. 96<br>
          <strong>Tipp:</strong> Merke und Beispiele auf S. 87 durchlesen. Zum Wiederholen den Rueckspiegel S. 96 rechnen!
        </div>

        <h3>Alltagsprobleme mit Geraden loesen</h3>
        <p>
          Viele Situationen aus dem Alltag lassen sich mit linearen Funktionen beschreiben.
          Der Trick: <strong>Uebersetze die Textaufgabe in eine Gleichung y = mx + b</strong>.
        </p>

        <div class="info-box">
          <strong>So erkennst du m und b im Text:</strong><br>
          <ul>
            <li><strong>b (y-Achsenabschnitt)</strong> = Grundgebuehr, Startwert, Anfangshoehe, Fixkosten</li>
            <li><strong>m (Steigung)</strong> = Preis pro Einheit, Verbrauch pro Stunde, Kosten pro km</li>
          </ul>
          Denk dran: <strong>b = was du am Anfang schon hast/zahlst</strong>, <strong>m = was pro Schritt dazukommt</strong>.
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
          2. Gleichung aufstellen (m und b aus dem Text ablesen)<br>
          3. Berechnen (einsetzen oder gleichsetzen)
        </div>

        <div class="warning-box">
          <strong>Tipp:</strong> Bei Tarifvergleichen zwei Gleichungen aufstellen und gleichsetzen!
          Der x-Wert des Schnittpunkts zeigt dir, ab wann sich der andere Tarif lohnt.
        </div>

        
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
        explanation: 'Die Grundgeb\u00FChr (10 \u20AC) ist der feste Startwert \u2192 b = 10. Die Kosten pro Minute (0,15 \u20AC) sind die Steigung \u2192 m = 0,15. Also: y = 0,15x + 10.'
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
        explanation: 'Bei Tarif A sind 80 \u20AC die Grundgeb\u00FChr (= b) und 0,25 \u20AC/kWh die Steigung (= m). Also: y = 0,25x + 80.'
      }
    ]
  }
];
