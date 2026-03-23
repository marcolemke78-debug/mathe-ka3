const Renderer = {

  renderSidebar(lessons) {
    const listM1 = document.getElementById('lesson-list-m1');
    const listM2 = document.getElementById('lesson-list-m2');

    listM1.innerHTML = '';
    listM2.innerHTML = '';

    lessons.forEach(lesson => {
      const li = document.createElement('li');
      li.dataset.lessonId = lesson.id;

      const status = Progress.getStatus(lesson.id);

      if (status === 'completed') {
        li.classList.add('completed');
        li.textContent = '\u2713 ' + lesson.title;
      } else if (status === 'in_progress') {
        li.classList.add('in-progress');
        li.textContent = lesson.title;
      } else {
        li.classList.add('not-started');
        li.textContent = lesson.title;
      }

      if (lesson.module === 'm1') {
        listM1.appendChild(li);
      } else {
        listM2.appendChild(li);
      }
    });
  },

  renderProgressBar() {
    const percent = Progress.getCompletionPercent(1, 13);
    const bar = document.getElementById('progress-bar');
    bar.style.width = percent + '%';
  },

  renderLesson(id) {
    const container = document.getElementById('lesson-container');

    const lessonData = LessonsFunktionen.find(l => l.id === id)
      || LessonsGleichungssysteme.find(l => l.id === id);

    const lessonMeta = LESSONS.find(l => l.id === id);
    const title = lessonMeta ? lessonMeta.title : 'Unbekannte Lektion';

    if (!lessonData) {
      container.innerHTML = '<h1>Lektion ' + id + ': ' + title + '</h1>'
        + '<p>Inhalt wird noch erstellt...</p>';
      return;
    }

    container.innerHTML = '<h1>Lektion ' + id + ': ' + lessonData.title + '</h1>';

    // Phase-Tabs
    const tabsDiv = document.createElement('div');
    tabsDiv.className = 'phase-tabs';

    const phases = [
      { key: 'explanation', label: 'Erklärung' },
      { key: 'example', label: 'Beispiel' },
      { key: 'exercises', label: 'Übung' }
    ];

    phases.forEach((phase, i) => {
      const btn = document.createElement('button');
      btn.className = 'phase-tab' + (i === 0 ? ' active' : '');
      btn.dataset.phase = phase.key;
      btn.textContent = phase.label;
      tabsDiv.appendChild(btn);
    });

    container.appendChild(tabsDiv);

    // Erklaerung
    const explanationSection = document.createElement('section');
    explanationSection.className = 'phase explanation active';
    explanationSection.id = 'phase-explanation';
    explanationSection.innerHTML = lessonData.explanation.html;
    container.appendChild(explanationSection);

    // Beispiel
    const exampleSection = document.createElement('section');
    exampleSection.className = 'phase example';
    exampleSection.id = 'phase-example';

    if (lessonData.example) {
      const h2 = document.createElement('h2');
      h2.textContent = lessonData.example.title;
      exampleSection.appendChild(h2);

      lessonData.example.steps.forEach((step, i) => {
        const details = document.createElement('details');
        details.className = 'example-step';
        if (i === 0) details.open = true;

        const summary = document.createElement('summary');
        summary.textContent = 'Schritt ' + (i + 1) + ': ' + step.label;
        details.appendChild(summary);

        const content = document.createElement('div');
        content.className = 'step-content';
        content.innerHTML = step.html;
        details.appendChild(content);

        exampleSection.appendChild(details);
      });
    }

    container.appendChild(exampleSection);

    // Uebungen
    const exercisesSection = document.createElement('section');
    exercisesSection.className = 'phase exercises';
    exercisesSection.id = 'phase-exercises';
    container.appendChild(exercisesSection);

    if (lessonData.exercises && lessonData.exercises.length > 0) {
      const totalExercises = lessonData.exercises.length;
      let completedCount = 0;

      lessonData.exercises.forEach(exercise => {
        Exercises.render(exercise, exercisesSection, () => {
          completedCount++;
          if (completedCount === totalExercises) {
            Progress.setStatus(id, 'completed');
            Renderer.renderSidebar(LESSONS);
            Renderer.renderProgressBar();
          }
        });
      });
    }

    // Tab-Klick-Logik
    tabsDiv.addEventListener('click', (e) => {
      const clickedTab = e.target.closest('.phase-tab');
      if (!clickedTab) return;

      const targetPhase = clickedTab.dataset.phase;

      tabsDiv.querySelectorAll('.phase-tab').forEach(t => t.classList.remove('active'));
      container.querySelectorAll('.phase').forEach(s => s.classList.remove('active'));

      clickedTab.classList.add('active');
      document.getElementById('phase-' + targetPhase).classList.add('active');

      // onRender-Hook nach Tab-Wechsel
      var renderFn = lessonData.onRender || (lessonData.explanation && lessonData.explanation.onRender);
      if (renderFn) {
        renderFn();
      }
    });

    // onRender-Hook nach initialem Rendering
    var initRenderFn = lessonData.onRender || (lessonData.explanation && lessonData.explanation.onRender);
    if (initRenderFn) {
      initRenderFn();
    }
  }
};

// Event-Delegation: Sidebar-Klicks
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('sidebar').addEventListener('click', (e) => {
    const li = e.target.closest('li[data-lesson-id]');
    if (li) {
      const lessonId = parseInt(li.dataset.lessonId, 10);
      navigateToLesson(lessonId);
    }
  });
});
