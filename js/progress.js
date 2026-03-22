const Progress = {
  STORAGE_KEY: 'leonie_mathe_ka3_progress',
  VERSION: 1,
  TOTAL_LESSONS: 12,

  createDefault() {
    const data = { version: this.VERSION, lessons: {}, lastLesson: 1 };
    for (let i = 1; i <= this.TOTAL_LESSONS; i++) {
      data.lessons[i] = { status: 'not_started' };
    }
    return data;
  },

  load() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (!raw) {
        const data = this.createDefault();
        this.save(data);
        return data;
      }
      const parsed = JSON.parse(raw);
      if (!parsed || parsed.version !== this.VERSION) {
        const data = this.createDefault();
        this.save(data);
        return data;
      }
      return parsed;
    } catch (e) {
      const data = this.createDefault();
      this.save(data);
      return data;
    }
  },

  save(data) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
  },

  getStatus(lessonId) {
    const data = this.load();
    const lesson = data.lessons[lessonId];
    return lesson ? lesson.status : 'not_started';
  },

  setStatus(lessonId, status) {
    const data = this.load();
    if (!data.lessons[lessonId]) {
      data.lessons[lessonId] = {};
    }
    data.lessons[lessonId].status = status;
    this.save(data);
  },

  getLastLesson() {
    const data = this.load();
    return data.lastLesson;
  },

  setLastLesson(lessonId) {
    const data = this.load();
    data.lastLesson = lessonId;
    this.save(data);
  },

  reset() {
    localStorage.removeItem(this.STORAGE_KEY);
  },

  getCompletionPercent(start, end) {
    const data = this.load();
    let completed = 0;
    const total = end - start + 1;
    for (let i = start; i <= end; i++) {
      if (data.lessons[i] && data.lessons[i].status === 'completed') {
        completed++;
      }
    }
    return Math.round((completed / total) * 100);
  }
};
