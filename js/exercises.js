const Exercises = {
  render(exercise, container, onComplete) {
    switch (exercise.type) {
      case 'multiple-choice':
        return Exercises.renderMultipleChoice(exercise, container, onComplete);
      case 'matching':
        return Exercises.renderMatching(exercise, container, onComplete);
      case 'number-input':
        return Exercises.renderNumberInput(exercise, container, onComplete);
      case 'coordinate-input':
        return Exercises.renderCoordinateInput(exercise, container, onComplete);
      case 'fill-table':
        return Exercises.renderFillTable(exercise, container, onComplete);
      default:
        var div = document.createElement('div');
        div.textContent = 'Übungstyp "' + exercise.type + '" nicht implementiert.';
        container.appendChild(div);
    }
  },

  // === Multiple Choice ===
  renderMultipleChoice(exercise, container, onComplete) {
    var wrapper = document.createElement('div');
    wrapper.className = 'exercise-mc';

    var questionEl = document.createElement('p');
    questionEl.className = 'exercise-question';
    questionEl.innerHTML = exercise.question;
    wrapper.appendChild(questionEl);

    var optionsContainer = document.createElement('div');
    optionsContainer.className = 'mc-options';

    var feedbackEl = document.createElement('div');
    feedbackEl.className = 'exercise-feedback';
    feedbackEl.style.display = 'none';

    exercise.options.forEach(function(optionText, index) {
      var button = document.createElement('button');
      button.className = 'mc-option';
      button.innerHTML = optionText;

      button.addEventListener('click', function() {
        if (index === exercise.correct) {
          button.classList.add('correct');
          feedbackEl.innerHTML = exercise.explanation;
          feedbackEl.className = 'exercise-feedback correct';
          feedbackEl.style.display = 'block';
          optionsContainer.querySelectorAll('.mc-option').forEach(function(btn) {
            btn.disabled = true;
          });
          onComplete();
        } else {
          button.classList.add('incorrect');
          button.disabled = true;
          feedbackEl.textContent = 'Leider falsch. Versuch es nochmal!';
          feedbackEl.className = 'exercise-feedback incorrect';
          feedbackEl.style.display = 'block';
        }
      });

      optionsContainer.appendChild(button);
    });

    wrapper.appendChild(optionsContainer);
    wrapper.appendChild(feedbackEl);
    container.appendChild(wrapper);
  },

  // === Zahleneingabe ===
  renderNumberInput(exercise, container, onComplete) {
    var wrapper = document.createElement('div');
    wrapper.className = 'exercise-number-input';

    var questionEl = document.createElement('p');
    questionEl.className = 'exercise-question';
    questionEl.innerHTML = exercise.question;
    wrapper.appendChild(questionEl);

    var inputArea = document.createElement('div');
    inputArea.className = 'number-input-area';

    if (exercise.label) {
      var label = document.createElement('span');
      label.className = 'input-label';
      label.textContent = exercise.label + ' ';
      inputArea.appendChild(label);
    }

    var inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.className = 'number-field';
    inputField.placeholder = exercise.placeholder || 'Zahl eingeben';
    inputField.inputMode = 'decimal';
    inputArea.appendChild(inputField);

    if (exercise.unit) {
      var unit = document.createElement('span');
      unit.className = 'input-unit';
      unit.textContent = ' ' + exercise.unit;
      inputArea.appendChild(unit);
    }

    wrapper.appendChild(inputArea);

    var feedbackEl = document.createElement('div');
    feedbackEl.className = 'exercise-feedback';
    feedbackEl.style.display = 'none';

    var checkBtn = document.createElement('button');
    checkBtn.className = 'exercise-check-btn';
    checkBtn.textContent = 'Prüfen';

    checkBtn.addEventListener('click', function() {
      var userVal = inputField.value.trim().replace(',', '.');
      var num = parseFloat(userVal);

      if (isNaN(num)) {
        feedbackEl.textContent = 'Bitte gib eine Zahl ein.';
        feedbackEl.className = 'exercise-feedback incorrect';
        feedbackEl.style.display = 'block';
        return;
      }

      var tolerance = exercise.tolerance !== undefined ? exercise.tolerance : 0.01;
      // Auch Brueche akzeptieren: z.B. "1/2" oder "-3/4"
      if (userVal.includes('/')) {
        var parts = userVal.split('/');
        if (parts.length === 2) {
          var numerator = parseFloat(parts[0]);
          var denominator = parseFloat(parts[1]);
          if (!isNaN(numerator) && !isNaN(denominator) && denominator !== 0) {
            num = numerator / denominator;
          }
        }
      }

      if (Math.abs(num - exercise.correctAnswer) <= tolerance) {
        inputField.classList.add('correct');
        feedbackEl.innerHTML = exercise.explanation;
        feedbackEl.className = 'exercise-feedback correct';
        feedbackEl.style.display = 'block';
        checkBtn.disabled = true;
        inputField.disabled = true;
        onComplete();
      } else {
        inputField.classList.add('incorrect');
        feedbackEl.textContent = exercise.hint || 'Das ist leider nicht richtig. Versuch es nochmal!';
        feedbackEl.className = 'exercise-feedback incorrect';
        feedbackEl.style.display = 'block';
        setTimeout(function() { inputField.classList.remove('incorrect'); }, 1000);
      }
    });

    // Enter-Taste zum Pruefen
    inputField.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') checkBtn.click();
    });

    wrapper.appendChild(checkBtn);
    wrapper.appendChild(feedbackEl);
    container.appendChild(wrapper);
  },

  // === Koordinateneingabe (x und y) ===
  renderCoordinateInput(exercise, container, onComplete) {
    var wrapper = document.createElement('div');
    wrapper.className = 'exercise-coordinate-input';

    var questionEl = document.createElement('p');
    questionEl.className = 'exercise-question';
    questionEl.innerHTML = exercise.question;
    wrapper.appendChild(questionEl);

    var inputArea = document.createElement('div');
    inputArea.className = 'coordinate-input-area';

    var xLabel = document.createElement('span');
    xLabel.className = 'input-label';
    xLabel.textContent = (exercise.xLabel || 'x') + ' = ';
    inputArea.appendChild(xLabel);

    var xInput = document.createElement('input');
    xInput.type = 'text';
    xInput.className = 'number-field';
    xInput.inputMode = 'decimal';
    xInput.placeholder = '?';
    inputArea.appendChild(xInput);

    var spacer = document.createElement('span');
    spacer.className = 'coord-spacer';
    spacer.innerHTML = '&nbsp;&nbsp;&nbsp;';
    inputArea.appendChild(spacer);

    var yLabel = document.createElement('span');
    yLabel.className = 'input-label';
    yLabel.textContent = (exercise.yLabel || 'y') + ' = ';
    inputArea.appendChild(yLabel);

    var yInput = document.createElement('input');
    yInput.type = 'text';
    yInput.className = 'number-field';
    yInput.inputMode = 'decimal';
    yInput.placeholder = '?';
    inputArea.appendChild(yInput);

    wrapper.appendChild(inputArea);

    var feedbackEl = document.createElement('div');
    feedbackEl.className = 'exercise-feedback';
    feedbackEl.style.display = 'none';

    var checkBtn = document.createElement('button');
    checkBtn.className = 'exercise-check-btn';
    checkBtn.textContent = 'Prüfen';

    function parseNumber(str) {
      str = str.trim().replace(',', '.');
      if (str.includes('/')) {
        var parts = str.split('/');
        if (parts.length === 2) {
          var n = parseFloat(parts[0]);
          var d = parseFloat(parts[1]);
          if (!isNaN(n) && !isNaN(d) && d !== 0) return n / d;
        }
      }
      return parseFloat(str);
    }

    checkBtn.addEventListener('click', function() {
      var xVal = parseNumber(xInput.value);
      var yVal = parseNumber(yInput.value);

      if (isNaN(xVal) || isNaN(yVal)) {
        feedbackEl.textContent = 'Bitte gib für x und y jeweils eine Zahl ein.';
        feedbackEl.className = 'exercise-feedback incorrect';
        feedbackEl.style.display = 'block';
        return;
      }

      var tolerance = exercise.tolerance !== undefined ? exercise.tolerance : 0.01;
      var xCorrect = Math.abs(xVal - exercise.correctX) <= tolerance;
      var yCorrect = Math.abs(yVal - exercise.correctY) <= tolerance;

      xInput.classList.remove('correct', 'incorrect');
      yInput.classList.remove('correct', 'incorrect');
      xInput.classList.add(xCorrect ? 'correct' : 'incorrect');
      yInput.classList.add(yCorrect ? 'correct' : 'incorrect');

      if (xCorrect && yCorrect) {
        feedbackEl.innerHTML = exercise.explanation;
        feedbackEl.className = 'exercise-feedback correct';
        feedbackEl.style.display = 'block';
        checkBtn.disabled = true;
        xInput.disabled = true;
        yInput.disabled = true;
        onComplete();
      } else {
        feedbackEl.textContent = exercise.hint || 'Noch nicht ganz richtig. Überprüfe deine Rechnung!';
        feedbackEl.className = 'exercise-feedback incorrect';
        feedbackEl.style.display = 'block';
      }
    });

    // Enter zum Pruefen
    xInput.addEventListener('keydown', function(e) { if (e.key === 'Enter') checkBtn.click(); });
    yInput.addEventListener('keydown', function(e) { if (e.key === 'Enter') checkBtn.click(); });

    wrapper.appendChild(checkBtn);
    wrapper.appendChild(feedbackEl);
    container.appendChild(wrapper);
  },

  // === Wertetabelle ausfuellen ===
  renderFillTable(exercise, container, onComplete) {
    var wrapper = document.createElement('div');
    wrapper.className = 'exercise-fill-table';

    var questionEl = document.createElement('p');
    questionEl.className = 'exercise-question';
    questionEl.innerHTML = exercise.question;
    wrapper.appendChild(questionEl);

    var table = document.createElement('table');
    table.className = 'fill-table';

    // Kopfzeile
    var thead = document.createElement('thead');
    var headerRow = document.createElement('tr');
    var thX = document.createElement('th');
    thX.textContent = 'x';
    headerRow.appendChild(thX);
    var thY = document.createElement('th');
    thY.textContent = 'y';
    headerRow.appendChild(thY);
    thead.appendChild(headerRow);
    table.appendChild(thead);

    var tbody = document.createElement('tbody');
    var inputs = [];

    for (var i = 0; i < exercise.xValues.length; i++) {
      var tr = document.createElement('tr');

      // x-Spalte (immer gegeben)
      var tdX = document.createElement('td');
      tdX.className = 'input-col';
      tdX.textContent = exercise.xValues[i];
      tr.appendChild(tdX);

      // y-Spalte
      var tdY = document.createElement('td');

      if (exercise.givenIndices && exercise.givenIndices.indexOf(i) !== -1) {
        // Wert ist vorgegeben
        tdY.className = 'input-col';
        tdY.textContent = exercise.correctYValues[i];
        inputs.push(null); // Platzhalter
      } else {
        // Eingabefeld
        var input = document.createElement('input');
        input.type = 'text';
        input.className = 'table-input';
        input.inputMode = 'decimal';
        input.placeholder = '?';
        input.setAttribute('data-index', i);
        tdY.appendChild(input);
        inputs.push(input);
      }

      tr.appendChild(tdY);
      tbody.appendChild(tr);
    }

    table.appendChild(tbody);
    wrapper.appendChild(table);

    var feedbackEl = document.createElement('div');
    feedbackEl.className = 'exercise-feedback';
    feedbackEl.style.display = 'none';

    var checkBtn = document.createElement('button');
    checkBtn.className = 'exercise-check-btn';
    checkBtn.textContent = 'Prüfen';

    checkBtn.addEventListener('click', function() {
      var allCorrect = true;
      var anyEmpty = false;

      for (var j = 0; j < inputs.length; j++) {
        if (inputs[j] === null) continue; // Vorgegebener Wert

        var val = inputs[j].value.trim().replace(',', '.');
        inputs[j].classList.remove('correct', 'incorrect');

        if (val === '') {
          anyEmpty = true;
          inputs[j].classList.add('incorrect');
          allCorrect = false;
          continue;
        }

        var num = parseFloat(val);
        var expected = exercise.correctYValues[j];
        var tolerance = exercise.tolerance !== undefined ? exercise.tolerance : 0.01;

        if (!isNaN(num) && Math.abs(num - expected) <= tolerance) {
          inputs[j].classList.add('correct');
        } else {
          inputs[j].classList.add('incorrect');
          allCorrect = false;
        }
      }

      if (anyEmpty) {
        feedbackEl.textContent = 'Bitte fülle alle Felder aus.';
        feedbackEl.className = 'exercise-feedback incorrect';
        feedbackEl.style.display = 'block';
      } else if (allCorrect) {
        feedbackEl.innerHTML = exercise.explanation;
        feedbackEl.className = 'exercise-feedback correct';
        feedbackEl.style.display = 'block';
        checkBtn.disabled = true;
        inputs.forEach(function(inp) { if (inp) inp.disabled = true; });
        onComplete();
      } else {
        feedbackEl.textContent = exercise.hint || 'Einige Werte stimmen noch nicht. Setze x in die Gleichung ein!';
        feedbackEl.className = 'exercise-feedback incorrect';
        feedbackEl.style.display = 'block';
      }
    });

    wrapper.appendChild(checkBtn);
    wrapper.appendChild(feedbackEl);
    container.appendChild(wrapper);
  },

  // === Zuordnung ===
  renderMatching(exercise, container, onComplete) {
    var pairColors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'];

    var wrapper = document.createElement('div');
    wrapper.className = 'exercise-matching';

    var questionEl = document.createElement('p');
    questionEl.className = 'exercise-question';
    questionEl.innerHTML = exercise.question;
    wrapper.appendChild(questionEl);

    var matchingArea = document.createElement('div');
    matchingArea.className = 'matching-area';

    var leftCol = document.createElement('div');
    leftCol.className = 'matching-left';
    var rightCol = document.createElement('div');
    rightCol.className = 'matching-right';

    // Rechte Items mischen
    var rightIndices = [];
    for (var i = 0; i < exercise.pairs.length; i++) rightIndices.push(i);
    for (var j = rightIndices.length - 1; j > 0; j--) {
      var rand = Math.floor(Math.random() * (j + 1));
      var temp = rightIndices[j];
      rightIndices[j] = rightIndices[rand];
      rightIndices[rand] = temp;
    }

    var selectedLeft = null;
    var connections = {};
    var reverseConnections = {};
    var nextColorIndex = 0;
    var connectionColors = {};
    var leftItems = [];
    var rightItems = {};

    exercise.pairs.forEach(function(pair, idx) {
      var item = document.createElement('div');
      item.className = 'match-item match-left';
      item.innerHTML = pair.left;

      item.addEventListener('click', function() {
        if (connections[idx] !== undefined) {
          var connRight = connections[idx];
          item.classList.remove('matched');
          item.style.backgroundColor = '';
          item.style.borderColor = '';
          item.style.color = '';
          var rEl = rightItems[connRight];
          rEl.classList.remove('matched');
          rEl.style.backgroundColor = '';
          rEl.style.borderColor = '';
          rEl.style.color = '';
          delete reverseConnections[connRight];
          delete connectionColors[idx];
          delete connections[idx];
          if (selectedLeft !== null) leftItems[selectedLeft].classList.remove('selected');
          selectedLeft = null;
          return;
        }
        if (selectedLeft !== null) leftItems[selectedLeft].classList.remove('selected');
        selectedLeft = idx;
        item.classList.add('selected');
      });

      leftItems.push(item);
      leftCol.appendChild(item);
    });

    rightIndices.forEach(function(origIdx) {
      var pair = exercise.pairs[origIdx];
      var item = document.createElement('div');
      item.className = 'match-item match-right';
      item.innerHTML = pair.right;

      item.addEventListener('click', function() {
        if (reverseConnections[origIdx] !== undefined) {
          var connLeft = reverseConnections[origIdx];
          item.classList.remove('matched');
          item.style.backgroundColor = '';
          item.style.borderColor = '';
          item.style.color = '';
          var lEl = leftItems[connLeft];
          lEl.classList.remove('matched');
          lEl.style.backgroundColor = '';
          lEl.style.borderColor = '';
          lEl.style.color = '';
          delete connections[connLeft];
          delete connectionColors[connLeft];
          delete reverseConnections[origIdx];
          if (selectedLeft !== null) { leftItems[selectedLeft].classList.remove('selected'); selectedLeft = null; }
          return;
        }
        if (selectedLeft === null) return;
        var lIdx = selectedLeft;
        var color = pairColors[nextColorIndex % pairColors.length];
        nextColorIndex++;
        connections[lIdx] = origIdx;
        reverseConnections[origIdx] = lIdx;
        connectionColors[lIdx] = color;
        leftItems[lIdx].classList.remove('selected');
        leftItems[lIdx].classList.add('matched');
        leftItems[lIdx].style.backgroundColor = color;
        leftItems[lIdx].style.borderColor = color;
        leftItems[lIdx].style.color = 'white';
        item.classList.add('matched');
        item.style.backgroundColor = color;
        item.style.borderColor = color;
        item.style.color = 'white';
        selectedLeft = null;
      });

      rightItems[origIdx] = item;
      rightCol.appendChild(item);
    });

    matchingArea.appendChild(leftCol);
    matchingArea.appendChild(rightCol);
    wrapper.appendChild(matchingArea);

    var feedbackEl = document.createElement('div');
    feedbackEl.className = 'exercise-feedback';
    feedbackEl.style.display = 'none';

    var checkBtn = document.createElement('button');
    checkBtn.className = 'exercise-check-btn';
    checkBtn.textContent = 'Prüfen';

    checkBtn.addEventListener('click', function() {
      var total = exercise.pairs.length;
      if (Object.keys(connections).length < total) {
        feedbackEl.textContent = 'Bitte ordne zuerst alle Begriffe zu.';
        feedbackEl.className = 'exercise-feedback incorrect';
        feedbackEl.style.display = 'block';
        return;
      }
      var allCorrect = true;
      for (var k = 0; k < total; k++) {
        if (connections[k] !== k) { allCorrect = false; break; }
      }
      if (allCorrect) {
        feedbackEl.textContent = 'Alle Zuordnungen korrekt!';
        feedbackEl.className = 'exercise-feedback correct';
        feedbackEl.style.display = 'block';
        checkBtn.disabled = true;
        onComplete();
      } else {
        feedbackEl.textContent = 'Nicht alle Zuordnungen stimmen. Versuch es nochmal!';
        feedbackEl.className = 'exercise-feedback incorrect';
        feedbackEl.style.display = 'block';
      }
    });

    wrapper.appendChild(checkBtn);
    wrapper.appendChild(feedbackEl);
    container.appendChild(wrapper);
  }
};
