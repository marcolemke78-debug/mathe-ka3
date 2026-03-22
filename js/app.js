// Alle 12 Lektionen mit ID, Titel und Modul-Zuordnung
const LESSONS = [
  { id: 1, title: 'Proportionale Funktionen', module: 'm1' },
  { id: 2, title: 'Lineare Funktionen', module: 'm1' },
  { id: 3, title: 'Steigung & y-Achsenabschnitt', module: 'm1' },
  { id: 4, title: 'Parallele & senkrechte Geraden', module: 'm1' },
  { id: 5, title: 'Geradengleichung berechnen', module: 'm1' },
  { id: 6, title: 'Modellieren', module: 'm1' },
  { id: 7, title: 'Gleichungen mit zwei Variablen', module: 'm2' },
  { id: 8, title: 'Gleichungssysteme grafisch', module: 'm2' },
  { id: 9, title: 'Gleichsetzungsverfahren', module: 'm2' },
  { id: 10, title: 'Einsetzungsverfahren', module: 'm2' },
  { id: 11, title: 'Additionsverfahren', module: 'm2' },
  { id: 12, title: 'Lösungsvielfalt', module: 'm2' }
];

function navigateToLesson(id) {
  document.getElementById('sidebar').classList.remove('open');
  Progress.setLastLesson(id);

  if (Progress.getStatus(id) === 'not_started') {
    Progress.setStatus(id, 'in_progress');
  }

  const allItems = document.querySelectorAll('#sidebar li');
  allItems.forEach(li => li.classList.remove('active'));

  const activeItem = document.querySelector(`#sidebar li[data-lesson-id="${id}"]`);
  if (activeItem) activeItem.classList.add('active');

  Renderer.renderLesson(id);
  Renderer.renderSidebar(LESSONS);
  Renderer.renderProgressBar();

  const newActiveItem = document.querySelector(`#sidebar li[data-lesson-id="${id}"]`);
  if (newActiveItem) newActiveItem.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  Renderer.renderSidebar(LESSONS);
  Renderer.renderProgressBar();

  const lastLesson = Progress.getLastLesson();
  navigateToLesson(lastLesson);

  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }

  document.getElementById('reset-progress').addEventListener('click', () => {
    if (confirm('Fortschritt wirklich zurücksetzen?')) {
      Progress.reset();
      location.reload();
    }
  });
});
