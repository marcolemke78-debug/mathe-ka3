/**
 * MathGraph – SVG-basierte Graphen-Engine fuer die Mathe-Lern-App
 *
 * Drei APIs:
 *   MathGraph.create(containerId, config)       – Statischer Graph
 *   MathGraph.interactive(containerId, config)   – Slider-basierter Graph
 *   MathGraph.clickable(containerId, config)     – Klick-Interaktion
 */
var MathGraph = (function () {
  'use strict';

  // ──────────────────────────────────────────────
  // Konstanten
  // ──────────────────────────────────────────────
  var SVG_NS = 'http://www.w3.org/2000/svg';
  var VIEW_W = 400;
  var VIEW_H = 400;
  var PAD = 40; // Padding fuer Achsenbeschriftung

  var COLORS = {
    line1: '#3B82F6',       // Blau
    line2: '#EF4444',       // Rot
    intersection: '#10B981', // Gruen
    triangle: '#F59E0B',    // Orange
    grid: '#E5E7EB',
    axis: '#1F2937',
    label: '#6B7280',
    point: '#3B82F6'
  };

  // ──────────────────────────────────────────────
  // Interne Hilfsfunktionen
  // ──────────────────────────────────────────────

  /**
   * SVG-Element erstellen und Attribute setzen
   */
  function _svgEl(tag, attrs) {
    var el = document.createElementNS(SVG_NS, tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        el.setAttribute(k, attrs[k]);
      });
    }
    return el;
  }

  /**
   * Mathematische Koordinaten -> SVG-Pixel
   * xRange/yRange sind Arrays [min, max]
   */
  function _mathToSvg(x, y, xRange, yRange) {
    var plotW = VIEW_W - 2 * PAD;
    var plotH = VIEW_H - 2 * PAD;
    var sx = PAD + ((x - xRange[0]) / (xRange[1] - xRange[0])) * plotW;
    var sy = PAD + ((yRange[1] - y) / (yRange[1] - yRange[0])) * plotH;
    return { x: sx, y: sy };
  }

  /**
   * SVG-Pixel -> Mathematische Koordinaten
   */
  function _svgToMath(sx, sy, xRange, yRange) {
    var plotW = VIEW_W - 2 * PAD;
    var plotH = VIEW_H - 2 * PAD;
    var mx = xRange[0] + ((sx - PAD) / plotW) * (xRange[1] - xRange[0]);
    var my = yRange[1] - ((sy - PAD) / plotH) * (yRange[1] - yRange[0]);
    return { x: mx, y: my };
  }

  /**
   * Auf naechste ganze Zahl runden (Grid-Snap)
   */
  function _snapToGrid(val) {
    return Math.round(val);
  }

  /**
   * SVG-Root erstellen
   */
  function _createSvg() {
    var svg = _svgEl('svg', {
      viewBox: '0 0 ' + VIEW_W + ' ' + VIEW_H,
      class: 'mg-svg',
      preserveAspectRatio: 'xMidYMid meet'
    });
    svg.style.width = '100%';
    svg.style.maxWidth = VIEW_W + 'px';
    return svg;
  }

  /**
   * Gitternetz zeichnen
   */
  function _drawGrid(svg, xRange, yRange, gridStep) {
    var step = gridStep || 1;
    var group = _svgEl('g', { class: 'mg-grid' });

    // Vertikale Linien
    for (var x = Math.ceil(xRange[0] / step) * step; x <= xRange[1]; x += step) {
      var p = _mathToSvg(x, 0, xRange, yRange);
      group.appendChild(_svgEl('line', {
        x1: p.x, y1: PAD,
        x2: p.x, y2: VIEW_H - PAD,
        stroke: COLORS.grid, 'stroke-width': 0.5
      }));
    }

    // Horizontale Linien
    for (var y = Math.ceil(yRange[0] / step) * step; y <= yRange[1]; y += step) {
      var p2 = _mathToSvg(0, y, xRange, yRange);
      group.appendChild(_svgEl('line', {
        x1: PAD, y1: p2.y,
        x2: VIEW_W - PAD, y2: p2.y,
        stroke: COLORS.grid, 'stroke-width': 0.5
      }));
    }

    svg.appendChild(group);
  }

  /**
   * Achsen mit Pfeilen, Ticks und Beschriftung zeichnen
   */
  function _drawAxes(svg, xRange, yRange) {
    var group = _svgEl('g', { class: 'mg-axes' });

    // Ursprung in SVG-Koordinaten (geclampt auf sichtbaren Bereich)
    var ox = Math.max(xRange[0], Math.min(0, xRange[1]));
    var oy = Math.max(yRange[0], Math.min(0, yRange[1]));
    var origin = _mathToSvg(ox, oy, xRange, yRange);

    // X-Achse
    var xLeft = _mathToSvg(xRange[0], oy, xRange, yRange);
    var xRight = _mathToSvg(xRange[1], oy, xRange, yRange);
    group.appendChild(_svgEl('line', {
      x1: xLeft.x, y1: origin.y,
      x2: xRight.x, y2: origin.y,
      stroke: COLORS.axis, 'stroke-width': 1.5
    }));
    // Pfeil rechts
    group.appendChild(_svgEl('polygon', {
      points: (xRight.x) + ',' + origin.y + ' ' +
              (xRight.x - 8) + ',' + (origin.y - 4) + ' ' +
              (xRight.x - 8) + ',' + (origin.y + 4),
      fill: COLORS.axis
    }));
    // X-Label
    var xLabel = _svgEl('text', {
      x: xRight.x - 2, y: origin.y + 16,
      'font-size': '12', fill: COLORS.axis, 'text-anchor': 'end'
    });
    xLabel.textContent = 'x';
    group.appendChild(xLabel);

    // Y-Achse
    var yTop = _mathToSvg(ox, yRange[1], xRange, yRange);
    var yBot = _mathToSvg(ox, yRange[0], xRange, yRange);
    group.appendChild(_svgEl('line', {
      x1: origin.x, y1: yBot.y,
      x2: origin.x, y2: yTop.y,
      stroke: COLORS.axis, 'stroke-width': 1.5
    }));
    // Pfeil oben
    group.appendChild(_svgEl('polygon', {
      points: origin.x + ',' + yTop.y + ' ' +
              (origin.x - 4) + ',' + (yTop.y + 8) + ' ' +
              (origin.x + 4) + ',' + (yTop.y + 8),
      fill: COLORS.axis
    }));
    // Y-Label
    var yLabel = _svgEl('text', {
      x: origin.x - 12, y: yTop.y + 6,
      'font-size': '12', fill: COLORS.axis, 'text-anchor': 'middle'
    });
    yLabel.textContent = 'y';
    group.appendChild(yLabel);

    // Tick-Marks und Zahlen
    var gridStep = 1;
    // X-Ticks
    for (var tx = Math.ceil(xRange[0]); tx <= xRange[1]; tx += gridStep) {
      if (tx === 0) continue;
      var tp = _mathToSvg(tx, oy, xRange, yRange);
      group.appendChild(_svgEl('line', {
        x1: tp.x, y1: origin.y - 3,
        x2: tp.x, y2: origin.y + 3,
        stroke: COLORS.axis, 'stroke-width': 1
      }));
      var tickLabel = _svgEl('text', {
        x: tp.x, y: origin.y + 14,
        'font-size': '10', fill: COLORS.label, 'text-anchor': 'middle'
      });
      tickLabel.textContent = tx;
      group.appendChild(tickLabel);
    }
    // Y-Ticks
    for (var ty = Math.ceil(yRange[0]); ty <= yRange[1]; ty += gridStep) {
      if (ty === 0) continue;
      var tp2 = _mathToSvg(ox, ty, xRange, yRange);
      group.appendChild(_svgEl('line', {
        x1: origin.x - 3, y1: tp2.y,
        x2: origin.x + 3, y2: tp2.y,
        stroke: COLORS.axis, 'stroke-width': 1
      }));
      var tickLabel2 = _svgEl('text', {
        x: origin.x - 8, y: tp2.y + 4,
        'font-size': '10', fill: COLORS.label, 'text-anchor': 'end'
      });
      tickLabel2.textContent = ty;
      group.appendChild(tickLabel2);
    }

    svg.appendChild(group);
  }

  /**
   * Gerade y = mx + b zeichnen
   * Berechnet Schnittpunkte mit dem sichtbaren Bereich
   */
  function _drawLine(svg, m, b, xRange, yRange, color, label) {
    var group = _svgEl('g', { class: 'mg-line' });
    var lineColor = color || COLORS.line1;

    // Endpunkte der Geraden am Rand des sichtbaren Bereichs
    var x1 = xRange[0];
    var y1 = m * x1 + b;
    var x2 = xRange[1];
    var y2 = m * x2 + b;

    var p1 = _mathToSvg(x1, y1, xRange, yRange);
    var p2 = _mathToSvg(x2, y2, xRange, yRange);

    group.appendChild(_svgEl('line', {
      x1: p1.x, y1: p1.y,
      x2: p2.x, y2: p2.y,
      stroke: lineColor, 'stroke-width': 2
    }));

    // Label an der Gerade (rechtes Drittel)
    if (label) {
      var lx = xRange[0] + (xRange[1] - xRange[0]) * 0.75;
      var ly = m * lx + b;
      // Nur anzeigen, wenn im sichtbaren Bereich
      if (ly >= yRange[0] && ly <= yRange[1]) {
        var lp = _mathToSvg(lx, ly, xRange, yRange);
        var txt = _svgEl('text', {
          x: lp.x + 4, y: lp.y - 8,
          'font-size': '12', fill: lineColor, 'font-weight': 'bold'
        });
        txt.textContent = label;
        group.appendChild(txt);
      }
    }

    svg.appendChild(group);
  }

  /**
   * Punkt mit Kreis und optionalem Label zeichnen
   */
  function _drawPoint(svg, x, y, xRange, yRange, color, label) {
    var group = _svgEl('g', { class: 'mg-point' });
    var ptColor = color || COLORS.point;
    var p = _mathToSvg(x, y, xRange, yRange);

    group.appendChild(_svgEl('circle', {
      cx: p.x, cy: p.y, r: 5,
      fill: ptColor, stroke: '#fff', 'stroke-width': 1.5
    }));

    if (label) {
      var txt = _svgEl('text', {
        x: p.x + 8, y: p.y - 8,
        'font-size': '11', fill: ptColor, 'font-weight': 'bold'
      });
      txt.textContent = label;
      group.appendChild(txt);
    }

    svg.appendChild(group);
  }

  /**
   * Steigungsdreieck zwischen zwei Punkten zeichnen
   * from/to sind {x, y} in mathematischen Koordinaten
   */
  function _drawSlopeTriangle(svg, from, to, xRange, yRange, color) {
    var group = _svgEl('g', { class: 'mg-slope-triangle' });
    var triColor = color || COLORS.triangle;

    var dx = to.x - from.x;
    var dy = to.y - from.y;

    // Eckpunkt des rechten Winkels (gleiche Hoehe wie from, gleiche x wie to)
    var corner = { x: to.x, y: from.y };

    var pFrom = _mathToSvg(from.x, from.y, xRange, yRange);
    var pCorner = _mathToSvg(corner.x, corner.y, xRange, yRange);
    var pTo = _mathToSvg(to.x, to.y, xRange, yRange);

    // Horizontale Linie (Δx)
    group.appendChild(_svgEl('line', {
      x1: pFrom.x, y1: pFrom.y,
      x2: pCorner.x, y2: pCorner.y,
      stroke: triColor, 'stroke-width': 2, 'stroke-dasharray': '5,3'
    }));

    // Vertikale Linie (Δy)
    group.appendChild(_svgEl('line', {
      x1: pCorner.x, y1: pCorner.y,
      x2: pTo.x, y2: pTo.y,
      stroke: triColor, 'stroke-width': 2, 'stroke-dasharray': '5,3'
    }));

    // Δx-Label (mittig unter der horizontalen Linie)
    var midX = (pFrom.x + pCorner.x) / 2;
    var labelYOffset = dy >= 0 ? 16 : -8;
    var dxLabel = _svgEl('text', {
      x: midX, y: pFrom.y + labelYOffset,
      'font-size': '11', fill: triColor, 'text-anchor': 'middle', 'font-weight': 'bold'
    });
    dxLabel.textContent = '\u0394x = ' + _formatNum(dx);
    group.appendChild(dxLabel);

    // Δy-Label (neben der vertikalen Linie)
    var midY = (pCorner.y + pTo.y) / 2;
    var labelXOffset = 10;
    var dyLabel = _svgEl('text', {
      x: pCorner.x + labelXOffset, y: midY + 4,
      'font-size': '11', fill: triColor, 'font-weight': 'bold'
    });
    dyLabel.textContent = '\u0394y = ' + _formatNum(dy);
    group.appendChild(dyLabel);

    svg.appendChild(group);
  }

  /**
   * Schnittpunkt-Marker mit gestrichelten Linien zu den Achsen
   */
  function _drawIntersection(svg, x, y, xRange, yRange) {
    var group = _svgEl('g', { class: 'mg-intersection' });
    var p = _mathToSvg(x, y, xRange, yRange);

    // Bestimme Achsen-Position (0 geclampt)
    var ox = Math.max(xRange[0], Math.min(0, xRange[1]));
    var oy = Math.max(yRange[0], Math.min(0, yRange[1]));
    var axisX = _mathToSvg(ox, y, xRange, yRange);
    var axisY = _mathToSvg(x, oy, xRange, yRange);

    // Gestrichelte Linie zur Y-Achse
    group.appendChild(_svgEl('line', {
      x1: p.x, y1: p.y,
      x2: axisX.x, y2: axisX.y,
      stroke: COLORS.intersection, 'stroke-width': 1, 'stroke-dasharray': '4,3', opacity: 0.6
    }));

    // Gestrichelte Linie zur X-Achse
    group.appendChild(_svgEl('line', {
      x1: p.x, y1: p.y,
      x2: axisY.x, y2: axisY.y,
      stroke: COLORS.intersection, 'stroke-width': 1, 'stroke-dasharray': '4,3', opacity: 0.6
    }));

    // Schnittpunkt-Kreis (groesser und mit Ring)
    group.appendChild(_svgEl('circle', {
      cx: p.x, cy: p.y, r: 6,
      fill: COLORS.intersection, stroke: '#fff', 'stroke-width': 2
    }));

    // Koordinaten-Label
    var label = _svgEl('text', {
      x: p.x + 10, y: p.y - 10,
      'font-size': '11', fill: COLORS.intersection, 'font-weight': 'bold'
    });
    label.textContent = 'S(' + _formatNum(x) + '|' + _formatNum(y) + ')';
    group.appendChild(label);

    svg.appendChild(group);
  }

  /**
   * Zahl huebsch formatieren (ganzzahlig wenn moeglich)
   */
  function _formatNum(n) {
    if (Number.isInteger(n)) return String(n);
    // Maximal 2 Nachkommastellen
    var rounded = Math.round(n * 100) / 100;
    return String(rounded).replace('.', ',');
  }

  /**
   * Ausdruck mit Parametern auswerten
   */
  function _evalEquation(expr, x, paramValues) {
    var scope = {};
    Object.keys(paramValues).forEach(function (k) {
      scope[k] = paramValues[k];
    });
    scope.x = x;
    var keys = Object.keys(scope);
    var vals = keys.map(function (k) { return scope[k]; });
    var fn = new Function(keys.join(','), 'return ' + expr);
    return fn.apply(null, vals);
  }

  /**
   * Steigung und y-Achsenabschnitt numerisch aus einem Ausdruck bestimmen
   */
  function _extractLineParams(expr, paramValues) {
    var y0 = _evalEquation(expr, 0, paramValues);
    var y1 = _evalEquation(expr, 1, paramValues);
    return { m: y1 - y0, b: y0 };
  }

  /**
   * Schnittpunkt zweier Geraden berechnen
   * Gibt null zurueck, wenn parallel oder identisch
   */
  function _computeIntersection(m1, b1, m2, b2) {
    if (Math.abs(m1 - m2) < 1e-10) {
      // Parallel oder identisch
      return null;
    }
    var x = (b2 - b1) / (m1 - m2);
    var y = m1 * x + b1;
    return { x: x, y: y };
  }

  /**
   * Pruefen, ob zwei Geraden identisch sind
   */
  function _areLinesIdentical(m1, b1, m2, b2) {
    return Math.abs(m1 - m2) < 1e-10 && Math.abs(b1 - b2) < 1e-10;
  }

  /**
   * Komplettes Koordinatensystem zeichnen (Grid + Achsen)
   */
  function _drawCoordinateSystem(svg, xRange, yRange, gridStep) {
    _drawGrid(svg, xRange, yRange, gridStep);
    _drawAxes(svg, xRange, yRange);
  }

  /**
   * Gerade per Ausdruck zeichnen (fuer interactive)
   * Evaluiert die Funktion an vielen Punkten und zeichnet einen Polyline-Pfad
   */
  function _drawExprLine(svg, expr, paramValues, xRange, yRange, color, label) {
    var group = _svgEl('g', { class: 'mg-line' });
    var lineColor = color || COLORS.line1;
    var points = [];
    var steps = 200;
    var dx = (xRange[1] - xRange[0]) / steps;

    for (var i = 0; i <= steps; i++) {
      var mx = xRange[0] + i * dx;
      var my = _evalEquation(expr, mx, paramValues);
      var sp = _mathToSvg(mx, my, xRange, yRange);
      points.push(sp.x.toFixed(2) + ',' + sp.y.toFixed(2));
    }

    group.appendChild(_svgEl('polyline', {
      points: points.join(' '),
      fill: 'none',
      stroke: lineColor,
      'stroke-width': 2
    }));

    // Label
    if (label) {
      var lx = xRange[0] + (xRange[1] - xRange[0]) * 0.75;
      var ly = _evalEquation(expr, lx, paramValues);
      if (ly >= yRange[0] && ly <= yRange[1]) {
        var lp = _mathToSvg(lx, ly, xRange, yRange);
        var txt = _svgEl('text', {
          x: lp.x + 4, y: lp.y - 8,
          'font-size': '12', fill: lineColor, 'font-weight': 'bold'
        });
        txt.textContent = label;
        group.appendChild(txt);
      }
    }

    svg.appendChild(group);
  }

  // ──────────────────────────────────────────────
  // API 1: MathGraph.create() – Statischer Graph
  // ──────────────────────────────────────────────

  function create(containerId, config) {
    var container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    container.classList.add('math-graph');

    var xRange = config.xRange || [-5, 5];
    var yRange = config.yRange || [-5, 5];
    var gridStep = config.gridStep || 1;

    var svg = _createSvg();
    _drawCoordinateSystem(svg, xRange, yRange, gridStep);

    // Geraden zeichnen
    if (config.lines) {
      var defaultColors = [COLORS.line1, COLORS.line2, COLORS.intersection, COLORS.triangle];
      config.lines.forEach(function (line, i) {
        var c = line.color || defaultColors[i % defaultColors.length];
        _drawLine(svg, line.m, line.b, xRange, yRange, c, line.label);
      });
    }

    // Steigungsdreieck zeichnen
    if (config.slopeTriangle) {
      var tri = config.slopeTriangle;
      _drawSlopeTriangle(svg, tri.from, tri.to, xRange, yRange, tri.color);
    }

    // Schnittpunkt zeichnen
    if (config.intersection) {
      _drawIntersection(svg, config.intersection.x, config.intersection.y, xRange, yRange);
    }

    // Punkte zeichnen (zuletzt, damit sie oben liegen)
    if (config.points) {
      config.points.forEach(function (pt) {
        _drawPoint(svg, pt.x, pt.y, xRange, yRange, pt.color, pt.label);
      });
    }

    container.appendChild(svg);
    return svg;
  }

  // ──────────────────────────────────────────────
  // API 2: MathGraph.interactive() – Slider-Graph
  // ──────────────────────────────────────────────

  function interactive(containerId, config) {
    var container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    container.classList.add('math-graph', 'math-graph--interactive');

    var xRange = config.xRange || [-5, 5];
    var yRange = config.yRange || [-5, 5];
    var gridStep = config.gridStep || 1;
    var sliders = config.sliders || [];
    var showSlopeTriangle = config.showSlopeTriangle || false;
    var showEquation = config.showEquation !== false; // Default: true
    var showIntersection = config.showIntersection || false;
    var showYIntercept = config.showYIntercept || false;
    var showStatus = config.showStatus || false;
    var onStatus = config.onStatus || null;

    // Multi-Equation oder Single-Equation
    var isMulti = Array.isArray(config.equations);
    var equations = isMulti
      ? config.equations
      : [{ expr: config.equation, color: COLORS.line1, label: config.label || '' }];

    // SVG erstellen
    var svg = _createSvg();
    container.appendChild(svg);

    // Gleichungsanzeige
    var eqDisplay = null;
    if (showEquation) {
      eqDisplay = document.createElement('div');
      eqDisplay.className = 'mg-equation';
      container.appendChild(eqDisplay);
    }

    // Status-Anzeige (fuer Gleichungssysteme)
    var statusEl = null;
    if (showStatus) {
      statusEl = document.createElement('div');
      statusEl.className = 'mg-status';
      container.appendChild(statusEl);
    }

    // Slider-Container
    var sliderContainer = document.createElement('div');
    sliderContainer.className = 'mg-sliders';

    // Aktuelle Parameter-Werte
    var paramValues = {};
    var sliderInputs = {};

    sliders.forEach(function (s) {
      paramValues[s.param] = s.initial !== undefined ? s.initial : s.min;

      var row = document.createElement('div');
      row.className = 'mg-slider-row';

      var lbl = document.createElement('label');
      lbl.className = 'mg-slider-label';
      lbl.textContent = (s.label || s.param) + ' = ';

      var valSpan = document.createElement('span');
      valSpan.className = 'mg-slider-value';
      valSpan.textContent = _formatNum(paramValues[s.param]);
      lbl.appendChild(valSpan);

      var input = document.createElement('input');
      input.type = 'range';
      input.className = 'mg-slider';
      input.min = s.min;
      input.max = s.max;
      input.step = s.step || 0.5;
      input.value = paramValues[s.param];
      // Touch-Freundlichkeit
      input.style.minHeight = '44px';

      sliderInputs[s.param] = { input: input, valSpan: valSpan };

      input.addEventListener('input', function () {
        paramValues[s.param] = parseFloat(input.value);
        valSpan.textContent = _formatNum(paramValues[s.param]);
        redraw();
      });

      row.appendChild(lbl);
      row.appendChild(input);
      sliderContainer.appendChild(row);
    });

    container.appendChild(sliderContainer);

    // Zeichenfunktion
    function redraw() {
      // SVG leeren
      while (svg.firstChild) svg.removeChild(svg.firstChild);

      _drawCoordinateSystem(svg, xRange, yRange, gridStep);

      var defaultColors = [COLORS.line1, COLORS.line2, COLORS.intersection, COLORS.triangle];
      var lineParams = []; // {m, b} fuer jede Gleichung

      equations.forEach(function (eq, i) {
        var c = eq.color || defaultColors[i % defaultColors.length];
        _drawExprLine(svg, eq.expr, paramValues, xRange, yRange, c, eq.label);

        // Steigung und Achsenabschnitt numerisch berechnen
        var params = _extractLineParams(eq.expr, paramValues);
        lineParams.push(params);

        // y-Achsenabschnitt anzeigen
        if (showYIntercept) {
          _drawPoint(svg, 0, params.b, xRange, yRange, c, '(0|' + _formatNum(params.b) + ')');
        }
      });

      // Steigungsdreieck fuer erste Gleichung
      if (showSlopeTriangle && lineParams.length > 0) {
        var lp = lineParams[0];
        // Dreieck von x=0 nach x=1
        var from = { x: 0, y: lp.b };
        var to = { x: 1, y: lp.m + lp.b };
        // Nur zeichnen wenn beide Punkte im sichtbaren Bereich
        if (from.y >= yRange[0] && from.y <= yRange[1] &&
            to.y >= yRange[0] && to.y <= yRange[1]) {
          _drawSlopeTriangle(svg, from, to, xRange, yRange, COLORS.triangle);
        }
      }

      // Schnittpunkt bei Multi-Equation
      if (showIntersection && lineParams.length >= 2) {
        var lp1 = lineParams[0];
        var lp2 = lineParams[1];
        var identical = _areLinesIdentical(lp1.m, lp1.b, lp2.m, lp2.b);
        var inter = _computeIntersection(lp1.m, lp1.b, lp2.m, lp2.b);

        if (inter && inter.x >= xRange[0] && inter.x <= xRange[1] &&
            inter.y >= yRange[0] && inter.y <= yRange[1]) {
          _drawIntersection(svg, inter.x, inter.y, xRange, yRange);
        }

        // Status-Anzeige
        if (statusEl) {
          if (identical) {
            statusEl.textContent = 'Unendlich viele L\u00f6sungen (identische Geraden)';
            statusEl.className = 'mg-status mg-status--infinite';
          } else if (!inter) {
            statusEl.textContent = 'Keine L\u00f6sung (parallele Geraden)';
            statusEl.className = 'mg-status mg-status--none';
          } else {
            statusEl.textContent = '1 L\u00f6sung: S(' + _formatNum(inter.x) + '|' + _formatNum(inter.y) + ')';
            statusEl.className = 'mg-status mg-status--one';
          }
        }
      }

      // Custom onStatus callback
      if (onStatus && statusEl) {
        onStatus(paramValues, statusEl);
      }

      // Gleichungsanzeige aktualisieren
      if (eqDisplay) {
        var parts = [];
        equations.forEach(function (eq, i) {
          var lp = lineParams[i];
          var label = eq.label || ('f' + (i + 1));
          var sign = lp.b >= 0 ? ' + ' : ' − ';
          var absB = Math.abs(lp.b);
          var mStr = _formatNum(lp.m);
          var bStr = _formatNum(absB);

          if (Math.abs(lp.b) < 1e-10) {
            parts.push(label + ': y = ' + mStr + 'x');
          } else {
            parts.push(label + ': y = ' + mStr + 'x' + sign + bStr);
          }
        });
        eqDisplay.innerHTML = parts.join('<br>');
      }
    }

    // Erstes Zeichnen
    redraw();

    // Rueckgabe fuer programmatische Steuerung
    return {
      svg: svg,
      redraw: redraw,
      getParams: function () { return Object.assign({}, paramValues); },
      setParam: function (key, val) {
        paramValues[key] = val;
        if (sliderInputs[key]) {
          sliderInputs[key].input.value = val;
          sliderInputs[key].valSpan.textContent = _formatNum(val);
        }
        redraw();
      }
    };
  }

  // ──────────────────────────────────────────────
  // API 3: MathGraph.clickable() – Klick-Interaktion
  // ──────────────────────────────────────────────

  function clickable(containerId, config) {
    var container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    container.classList.add('math-graph', 'math-graph--clickable');

    var xRange = config.xRange || [-5, 5];
    var yRange = config.yRange || [-5, 5];
    var gridStep = config.gridStep || 1;
    var mode = config.mode || 'two-points';

    var svg = _createSvg();
    svg.style.cursor = 'crosshair';
    container.appendChild(svg);

    // Info/Ergebnis-Anzeige
    var infoEl = document.createElement('div');
    infoEl.className = 'mg-info';
    container.appendChild(infoEl);

    // Reset-Button
    var resetBtn = document.createElement('button');
    resetBtn.className = 'mg-reset';
    resetBtn.textContent = 'Zur\u00fccksetzen';
    container.appendChild(resetBtn);

    // Zustand
    var clickedPoints = [];
    var locked = false;

    // Initiales Zeichnen
    function drawBase() {
      while (svg.firstChild) svg.removeChild(svg.firstChild);
      _drawCoordinateSystem(svg, xRange, yRange, gridStep);

      // Im point-on-line Modus: Gerade zeichnen
      if (mode === 'point-on-line' && config.line) {
        var line = config.line;
        _drawLine(svg, line.m, line.b, xRange, yRange, line.color || COLORS.line1, line.label);
      }
    }

    drawBase();
    _updateInfo();

    // SVG-Klick-Koordinaten ermitteln
    function getSvgCoords(evt) {
      var rect = svg.getBoundingClientRect();
      // Skalierung berechnen (SVG kann durch CSS skaliert sein)
      var scaleX = VIEW_W / rect.width;
      var scaleY = VIEW_H / rect.height;
      var svgX = (evt.clientX - rect.left) * scaleX;
      var svgY = (evt.clientY - rect.top) * scaleY;
      return { x: svgX, y: svgY };
    }

    // Klick-Handler
    svg.addEventListener('click', function (evt) {
      if (locked) return;

      var svgCoords = getSvgCoords(evt);
      var mathCoords = _svgToMath(svgCoords.x, svgCoords.y, xRange, yRange);

      // Nur Klicks im Plot-Bereich akzeptieren
      if (svgCoords.x < PAD || svgCoords.x > VIEW_W - PAD ||
          svgCoords.y < PAD || svgCoords.y > VIEW_H - PAD) {
        return;
      }

      // Grid-Snap
      var snappedX = _snapToGrid(mathCoords.x);
      var snappedY = _snapToGrid(mathCoords.y);

      // Pruefen ob im Bereich
      if (snappedX < xRange[0] || snappedX > xRange[1] ||
          snappedY < yRange[0] || snappedY > yRange[1]) {
        return;
      }

      if (mode === 'two-points') {
        _handleTwoPointsClick(snappedX, snappedY);
      } else if (mode === 'point-on-line') {
        _handlePointOnLineClick(snappedX, snappedY);
      }
    });

    // Touch-Support
    svg.addEventListener('touchend', function (evt) {
      if (locked) return;
      evt.preventDefault();
      var touch = evt.changedTouches[0];
      // Synthetischen Click-Event erzeugen
      var clickEvt = new MouseEvent('click', {
        clientX: touch.clientX,
        clientY: touch.clientY
      });
      svg.dispatchEvent(clickEvt);
    });

    // ── Modus: two-points ──

    function _handleTwoPointsClick(x, y) {
      clickedPoints.push({ x: x, y: y });

      // Punkt zeichnen
      var ptLabel = 'P' + clickedPoints.length + '(' + x + '|' + y + ')';
      _drawPoint(svg, x, y, xRange, yRange, COLORS.line1, ptLabel);

      if (clickedPoints.length === 1) {
        infoEl.innerHTML = '<strong>Punkt 1 gesetzt:</strong> P\u2081(' + x + '|' + y + '). Klicke den zweiten Punkt.';
      }

      if (clickedPoints.length === 2) {
        locked = true;
        var p1 = clickedPoints[0];
        var p2 = clickedPoints[1];

        var dx = p2.x - p1.x;
        var dy = p2.y - p1.y;

        if (dx === 0) {
          // Senkrechte Gerade – Sonderfall
          infoEl.innerHTML =
            '<strong>Senkrechte Gerade:</strong> x = ' + p1.x +
            '<br>Eine senkrechte Gerade hat <strong>keine Steigung</strong> (nicht definiert) und ist keine Funktion.';
          // Vertikale Linie zeichnen
          var pTop = _mathToSvg(p1.x, yRange[1], xRange, yRange);
          var pBot = _mathToSvg(p1.x, yRange[0], xRange, yRange);
          svg.appendChild(_svgEl('line', {
            x1: pTop.x, y1: pTop.y,
            x2: pBot.x, y2: pBot.y,
            stroke: COLORS.line1, 'stroke-width': 2
          }));
          return;
        }

        var m = dy / dx;
        var b = p1.y - m * p1.x;

        // Gerade zeichnen
        _drawLine(svg, m, b, xRange, yRange, COLORS.line1, null);

        // Steigungsdreieck zeichnen
        _drawSlopeTriangle(svg, p1, p2, xRange, yRange, COLORS.triangle);

        // Punkte nochmal oben drauf zeichnen
        _drawPoint(svg, p1.x, p1.y, xRange, yRange, COLORS.line1, 'P\u2081(' + p1.x + '|' + p1.y + ')');
        _drawPoint(svg, p2.x, p2.y, xRange, yRange, COLORS.line1, 'P\u2082(' + p2.x + '|' + p2.y + ')');

        // Berechnungsschritte anzeigen
        var sign = b >= 0 ? ' + ' : ' \u2212 ';
        var absB = Math.abs(b);
        var mStr = _formatNum(m);
        var bStr = _formatNum(absB);

        var eqStr = Math.abs(b) < 1e-10
          ? 'y = ' + mStr + 'x'
          : 'y = ' + mStr + 'x' + sign + bStr;

        infoEl.innerHTML =
          '<strong>Berechnung:</strong><br>' +
          '1. Steigung: m = \u0394y / \u0394x = ' + _formatNum(dy) + ' / ' + _formatNum(dx) + ' = <strong>' + mStr + '</strong><br>' +
          '2. y-Achsenabschnitt: b = y\u2081 \u2212 m \u00b7 x\u2081 = ' + _formatNum(p1.y) + ' \u2212 ' + mStr + ' \u00b7 ' + _formatNum(p1.x) + ' = <strong>' + _formatNum(b) + '</strong><br>' +
          '3. Funktionsgleichung: <strong>' + eqStr + '</strong>';
      }
    }

    // ── Modus: point-on-line ──

    function _handlePointOnLineClick(x, y) {
      if (!config.line) return;

      var line = config.line;
      var expectedY = line.m * x + line.b;
      var isOnLine = Math.abs(y - expectedY) < 1e-10;

      if (isOnLine) {
        _drawPoint(svg, x, y, xRange, yRange, COLORS.intersection, '(' + x + '|' + y + ') \u2713');
        infoEl.innerHTML =
          '<strong style="color:' + COLORS.intersection + '">\u2713 Richtig!</strong> ' +
          'Der Punkt (' + x + '|' + y + ') liegt auf der Geraden.<br>' +
          '<em>Probe:</em> y = ' + _formatNum(line.m) + ' \u00b7 ' + x + ' + ' + _formatNum(line.b) +
          ' = <strong>' + _formatNum(expectedY) + '</strong> = ' + _formatNum(y) + ' \u2713';
      } else {
        _drawPoint(svg, x, y, xRange, yRange, COLORS.line2, '(' + x + '|' + y + ') \u2717');
        infoEl.innerHTML =
          '<strong style="color:' + COLORS.line2 + '">\u2717 Nicht auf der Geraden.</strong> ' +
          'Der Punkt (' + x + '|' + y + ') liegt <strong>nicht</strong> auf der Geraden.<br>' +
          '<em>Probe:</em> y = ' + _formatNum(line.m) + ' \u00b7 ' + x + ' + ' + _formatNum(line.b) +
          ' = <strong>' + _formatNum(expectedY) + '</strong> \u2260 ' + _formatNum(y);
      }

      // Im point-on-line Modus: nicht sperren, mehrere Versuche erlauben
    }

    function _updateInfo() {
      if (mode === 'two-points') {
        if (clickedPoints.length === 0) {
          infoEl.innerHTML = 'Klicke zwei Punkte im Koordinatensystem, um eine Gerade zu zeichnen.';
        }
      } else if (mode === 'point-on-line') {
        if (config.line) {
          var line = config.line;
          var sign = line.b >= 0 ? ' + ' : ' \u2212 ';
          var absB = Math.abs(line.b);
          var eqStr = Math.abs(line.b) < 1e-10
            ? 'y = ' + _formatNum(line.m) + 'x'
            : 'y = ' + _formatNum(line.m) + 'x' + sign + _formatNum(absB);
          infoEl.innerHTML = 'Klicke auf Punkte, die auf der Geraden <strong>' + eqStr + '</strong> liegen.';
        }
      }
    }

    // Reset
    resetBtn.addEventListener('click', function () {
      clickedPoints = [];
      locked = false;
      drawBase();
      _updateInfo();
    });

    return {
      svg: svg,
      reset: function () { resetBtn.click(); }
    };
  }

  // ──────────────────────────────────────────────
  // Public API
  // ──────────────────────────────────────────────
  return {
    create: create,
    interactive: interactive,
    clickable: clickable
  };

})();
