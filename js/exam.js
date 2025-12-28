const EXAM_CONFIG = {
  totalQuestions: 20,
  totalChapters: 14,
  maxPoints: 50,
  durationMs: 90 * 60 * 1000
};

const state = {
  mode: null,
  questions: [],
  currentIndex: 0,
  answers: {},
  timerId: null,
  remainingMs: EXAM_CONFIG.durationMs,
  startTime: null
};

const dom = {};

const chapterOrder = Array.from({ length: EXAM_CONFIG.totalChapters }, (_, i) => String(i + 1));

const byId = (id) => document.getElementById(id);

const shuffle = (array) => {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

const parseNumber = (value) => {
  if (value === null || value === undefined) {
    return null;
  }
  const normalized = String(value).replace(/\s/g, '').replace(',', '.');
  if (!normalized) {
    return null;
  }
  const numberValue = Number(normalized);
  return Number.isFinite(numberValue) ? numberValue : null;
};

const formatTime = (ms) => {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

const groupByChapter = (questions) => {
  return questions.reduce((acc, question) => {
    const chapterKey = String(question.chapter);
    if (!acc[chapterKey]) {
      acc[chapterKey] = [];
    }
    acc[chapterKey].push(question);
    return acc;
  }, {});
};

const buildExamQuestions = () => {
  const grouped = groupByChapter(ALL_QUESTIONS);
  const selected = [];

  chapterOrder.forEach((chapter) => {
    const chapterQuestions = grouped[chapter] || [];
    if (chapterQuestions.length > 0) {
      selected.push(chapterQuestions[Math.floor(Math.random() * chapterQuestions.length)]);
    }
  });

  const selectedIds = new Set(selected.map((question) => question.id));
  const remainingPool = ALL_QUESTIONS.filter((question) => !selectedIds.has(question.id));

  const extraNeeded = EXAM_CONFIG.totalQuestions - selected.length;
  if (extraNeeded > 0) {
    const extras = shuffle(remainingPool).slice(0, extraNeeded);
    selected.push(...extras);
  }

  const chapterOne = selected.find((question) => String(question.chapter) === '1');
  const chapterFourteen = selected.find((question) => String(question.chapter) === '14');

  const middleQuestions = selected.filter(
    (question) => question !== chapterOne && question !== chapterFourteen
  );

  return [chapterOne, ...shuffle(middleQuestions), chapterFourteen].filter(Boolean);
};

const resetState = () => {
  state.questions = [];
  state.currentIndex = 0;
  state.answers = {};
  state.remainingMs = EXAM_CONFIG.durationMs;
  state.startTime = null;
  if (state.timerId) {
    clearInterval(state.timerId);
    state.timerId = null;
  }
};

const renderTable = (container, tableData) => {
  container.innerHTML = '';
  if (!tableData) {
    return;
  }

  const table = document.createElement('table');
  if (tableData.title) {
    const caption = document.createElement('caption');
    caption.textContent = tableData.title;
    table.appendChild(caption);
  }

  if (tableData.headers) {
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    tableData.headers.forEach((header) => {
      const th = document.createElement('th');
      th.textContent = header;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    if (tableData.subheaders) {
      const subRow = document.createElement('tr');
      tableData.subheaders.forEach((header) => {
        const th = document.createElement('th');
        th.textContent = header;
        subRow.appendChild(th);
      });
      thead.appendChild(subRow);
    }
    table.appendChild(thead);
  }

  if (tableData.rows) {
    const tbody = document.createElement('tbody');
    tableData.rows.forEach((row) => {
      const tr = document.createElement('tr');
      row.forEach((cell) => {
        const td = document.createElement('td');
        td.textContent = cell;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
  }

  if (tableData.subtitle) {
    const subtitle = document.createElement('p');
    subtitle.textContent = tableData.subtitle;
    container.appendChild(subtitle);
  }

  container.appendChild(table);
};

const renderTimeline = (container, timeline) => {
  container.innerHTML = '';
  if (!timeline) {
    return;
  }

  const grid = document.createElement('div');
  grid.className = 'timeline-grid';

  timeline.events.forEach((event) => {
    const card = document.createElement('div');
    card.className = `timeline-card ${event.type || ''}`.trim();
    const date = document.createElement('p');
    date.textContent = event.date;
    const amount = document.createElement('p');
    amount.textContent = event.amount || '—';
    card.appendChild(date);
    card.appendChild(amount);
    grid.appendChild(card);
  });

  container.appendChild(grid);
};

const renderInputs = (question) => {
  dom.questionInputs.innerHTML = '';

  if (question.matches) {
    question.matches.forEach((match) => {
      const row = document.createElement('div');
      row.className = 'question-input-row';
      const label = document.createElement('label');
      label.textContent = match.item;
      const select = document.createElement('select');
      select.innerHTML = '<option value="">Vali vastus</option>';
      match.options.forEach((option) => {
        const optionEl = document.createElement('option');
        optionEl.value = option;
        optionEl.textContent = option;
        select.appendChild(optionEl);
      });
      const currentAnswer = state.answers[question.id] || {};
      select.value = currentAnswer[match.item] || '';
      select.addEventListener('change', (event) => {
        if (!state.answers[question.id]) {
          state.answers[question.id] = {};
        }
        state.answers[question.id][match.item] = event.target.value;
      });
      row.appendChild(label);
      row.appendChild(select);
      dom.questionInputs.appendChild(row);
    });
    return;
  }

  if (question.type === 'dropdown') {
    const select = document.createElement('select');
    select.innerHTML = '<option value="">Vali vastus</option>';
    question.options.forEach((option) => {
      const optionEl = document.createElement('option');
      optionEl.value = option;
      optionEl.textContent = option;
      select.appendChild(optionEl);
    });
    select.value = state.answers[question.id] || '';
    select.addEventListener('change', (event) => {
      state.answers[question.id] = event.target.value;
    });
    dom.questionInputs.appendChild(select);
    return;
  }

  if (question.type === 'multiple-choice') {
    question.options.forEach((option) => {
      const row = document.createElement('label');
      row.className = 'question-input-row';
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `question-${question.id}`;
      input.value = option;
      input.checked = String(state.answers[question.id]) === String(option);
      input.addEventListener('change', (event) => {
        state.answers[question.id] = event.target.value;
      });
      row.appendChild(input);
      row.appendChild(document.createTextNode(` ${option}`));
      dom.questionInputs.appendChild(row);
    });
    return;
  }

  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Sisesta vastus';
  input.value = state.answers[question.id] || '';
  input.addEventListener('input', (event) => {
    state.answers[question.id] = event.target.value;
  });
  dom.questionInputs.appendChild(input);
};

const renderQuestion = () => {
  const question = state.questions[state.currentIndex];
  if (!question) {
    return;
  }

  dom.chapterLabel.textContent = `Peatükk ${question.chapter}`;
  dom.pointsLabel.textContent = `${question.points} p`;
  dom.questionTitle.innerHTML = question.question || 'Küsimus';
  dom.questionText.innerHTML = question.questionText || '';
  dom.questionSubtext.innerHTML = question.subQuestion || '';
  dom.questionNote.innerHTML = question.note || '';

  renderTable(dom.questionTable, question.tableData);
  renderTimeline(dom.questionTimeline, question.timeline);
  renderInputs(question);

  dom.progress.textContent = `${state.currentIndex + 1} / ${state.questions.length}`;

  const isLast = state.currentIndex === state.questions.length - 1;
  dom.prevButton.hidden = state.mode === 'exam';
  dom.prevButton.disabled = state.currentIndex === 0;
  dom.nextButton.hidden = isLast;
  dom.finishButton.hidden = !isLast;
};

const startTimer = () => {
  dom.timer.textContent = formatTime(state.remainingMs);
  state.timerId = setInterval(() => {
    state.remainingMs -= 1000;
    dom.timer.textContent = formatTime(state.remainingMs);
    if (state.remainingMs <= 0) {
      clearInterval(state.timerId);
      state.timerId = null;
      finishExam();
    }
  }, 1000);
};

const startSession = (mode) => {
  resetState();
  state.mode = mode;
  state.questions = buildExamQuestions();
  state.startTime = new Date();

  dom.modeLabel.textContent = mode === 'exam' ? 'Eksam' : 'Harjutamine';
  dom.examStatus.hidden = false;
  dom.questionArea.hidden = false;
  dom.results.hidden = true;

  if (mode === 'exam') {
    dom.timer.textContent = formatTime(state.remainingMs);
    startTimer();
  } else {
    dom.timer.textContent = '—';
  }

  renderQuestion();
};

const scoreQuestion = (question, answer) => {
  if (question.matches) {
    const perPart = question.points / question.matches.length;
    let earned = 0;
    const details = question.matches.map((match) => {
      const userAnswer = answer ? answer[match.item] : '';
      const correct = userAnswer === match.correctAnswer;
      if (correct) {
        earned += perPart;
      }
      return {
        item: match.item,
        userAnswer,
        correctAnswer: match.correctAnswer,
        correct
      };
    });
    return { earned, max: question.points, details };
  }

  if (answer === undefined || answer === null || answer === '') {
    return { earned: 0, max: question.points, details: [] };
  }

  if (question.type === 'dropdown' || question.type === 'multiple-choice') {
    const correct = String(answer) === String(question.correctAnswer);
    return { earned: correct ? question.points : 0, max: question.points, details: [] };
  }

  const numericAnswer = parseNumber(answer);
  const numericCorrect = parseNumber(question.correctAnswer);
  if (numericAnswer !== null && numericCorrect !== null) {
    const tolerance = question.tolerance !== undefined ? Number(question.tolerance) : 0;
    const correct = Math.abs(numericAnswer - numericCorrect) <= tolerance;
    return { earned: correct ? question.points : 0, max: question.points, details: [] };
  }

  const correct = String(answer).trim() === String(question.correctAnswer).trim();
  return { earned: correct ? question.points : 0, max: question.points, details: [] };
};

const buildResults = () => {
  let totalEarned = 0;
  let totalCorrect = 0;
  const chapterStats = {};
  const reviewItems = [];

  state.questions.forEach((question) => {
    const answer = state.answers[question.id];
    const result = scoreQuestion(question, answer);
    totalEarned += result.earned;

    const isCorrect = result.earned === question.points;
    if (isCorrect) {
      totalCorrect += 1;
    } else {
      reviewItems.push({ question, answer, result });
    }

    const chapterKey = String(question.chapter);
    if (!chapterStats[chapterKey]) {
      chapterStats[chapterKey] = { earned: 0, max: 0 };
    }
    chapterStats[chapterKey].earned += result.earned;
    chapterStats[chapterKey].max += question.points;
  });

  return { totalEarned, totalCorrect, chapterStats, reviewItems };
};

const renderChapterPerformance = (chapterStats) => {
  const table = document.createElement('table');
  table.className = 'chapter-table';
  const thead = document.createElement('thead');
  thead.innerHTML = '<tr><th>Peatükk</th><th>Punktid</th><th>Tulemuse %</th></tr>';
  table.appendChild(thead);
  const tbody = document.createElement('tbody');

  chapterOrder.forEach((chapter) => {
    const stats = chapterStats[chapter] || { earned: 0, max: 0 };
    const tr = document.createElement('tr');
    const percent = stats.max ? Math.round((stats.earned / stats.max) * 100) : 0;
    tr.innerHTML = `<td>${chapter}</td><td>${stats.earned.toFixed(2)} / ${stats.max.toFixed(2)}</td><td>${percent}%</td>`;
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  dom.chapterPerformance.innerHTML = '';
  dom.chapterPerformance.appendChild(table);
};

const renderReview = (reviewItems) => {
  dom.reviewList.innerHTML = '';
  if (reviewItems.length === 0) {
    dom.reviewList.textContent = 'Kõik vastused olid õiged. Suurepärane!';
    return;
  }

  reviewItems.forEach(({ question, answer, result }) => {
    const card = document.createElement('div');
    card.className = 'review-card';
    const title = document.createElement('h4');
    title.textContent = `${question.question}`;
    card.appendChild(title);

    if (question.subQuestion) {
      const sub = document.createElement('p');
      sub.textContent = question.subQuestion;
      card.appendChild(sub);
    }

    if (question.matches) {
      result.details.forEach((detail) => {
        const line = document.createElement('p');
        line.className = 'answer-line';
        line.textContent = `${detail.item}: ${detail.userAnswer || '—'} (õige: ${detail.correctAnswer})`;
        card.appendChild(line);
      });
    } else {
      const userLine = document.createElement('p');
      userLine.className = 'answer-line';
      userLine.textContent = `Sinu vastus: ${answer || '—'}`;
      const correctLine = document.createElement('p');
      correctLine.className = 'answer-line';
      correctLine.textContent = `Õige vastus: ${question.correctAnswer}`;
      card.appendChild(userLine);
      card.appendChild(correctLine);
    }

    dom.reviewList.appendChild(card);
  });
};

const storeResult = (result) => {
  const history = JSON.parse(localStorage.getItem('financeExamResults') || '[]');
  history.unshift(result);
  localStorage.setItem('financeExamResults', JSON.stringify(history.slice(0, 20)));
};

const renderHistory = () => {
  const history = JSON.parse(localStorage.getItem('financeExamResults') || '[]');
  if (history.length === 0) {
    dom.historyList.textContent = 'Varasemaid tulemusi ei ole.';
    return;
  }

  const table = document.createElement('table');
  table.className = 'history-table';
  const thead = document.createElement('thead');
  thead.innerHTML = '<tr><th>Aeg</th><th>Režiim</th><th>Skoor</th><th>Tulemuse %</th></tr>';
  table.appendChild(thead);
  const tbody = document.createElement('tbody');

  history.forEach((entry) => {
    const tr = document.createElement('tr');
    const percent = entry.maxPoints ? Math.round((entry.score / entry.maxPoints) * 100) : 0;
    tr.innerHTML = `<td>${new Date(entry.date).toLocaleString()}</td><td>${entry.mode}</td><td>${entry.score.toFixed(2)} / ${entry.maxPoints.toFixed(2)}</td><td>${percent}%</td>`;
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  dom.historyList.innerHTML = '';
  dom.historyList.appendChild(table);
};

const finishExam = () => {
  if (state.timerId) {
    clearInterval(state.timerId);
    state.timerId = null;
  }

  dom.questionArea.hidden = true;
  dom.results.hidden = false;

  const result = buildResults();

  dom.finalScore.textContent = `${result.totalEarned.toFixed(2)} / ${EXAM_CONFIG.maxPoints.toFixed(2)} p`;
  dom.finalCorrect.textContent = `${result.totalCorrect} / ${state.questions.length}`;
  dom.finalIncorrect.textContent = `${state.questions.length - result.totalCorrect}`;

  renderChapterPerformance(result.chapterStats);
  renderReview(result.reviewItems);

  storeResult({
    date: new Date().toISOString(),
    mode: state.mode === 'exam' ? 'Eksam' : 'Harjutamine',
    score: result.totalEarned,
    maxPoints: EXAM_CONFIG.maxPoints,
    chapterStats: result.chapterStats
  });

  renderHistory();
};

const nextQuestion = () => {
  if (state.currentIndex < state.questions.length - 1) {
    state.currentIndex += 1;
    renderQuestion();
  }
};

const prevQuestion = () => {
  if (state.currentIndex > 0) {
    state.currentIndex -= 1;
    renderQuestion();
  }
};

const initDom = () => {
  dom.startExam = byId('start-exam');
  dom.startPractice = byId('start-practice');
  dom.examStatus = byId('exam-status');
  dom.timer = byId('timer');
  dom.progress = byId('progress');
  dom.modeLabel = byId('mode-label');
  dom.questionArea = byId('question-area');
  dom.chapterLabel = byId('chapter-label');
  dom.pointsLabel = byId('points-label');
  dom.questionTitle = byId('question-title');
  dom.questionText = byId('question-text');
  dom.questionSubtext = byId('question-subtext');
  dom.questionNote = byId('question-note');
  dom.questionTable = byId('question-table');
  dom.questionTimeline = byId('question-timeline');
  dom.questionInputs = byId('question-inputs');
  dom.prevButton = byId('prev-question');
  dom.nextButton = byId('next-question');
  dom.finishButton = byId('finish-exam');
  dom.results = byId('results');
  dom.finalScore = byId('final-score');
  dom.finalCorrect = byId('final-correct');
  dom.finalIncorrect = byId('final-incorrect');
  dom.chapterPerformance = byId('chapter-performance');
  dom.reviewList = byId('review-list');
  dom.restartExam = byId('restart-exam');
  dom.historyList = byId('history-list');
  dom.dataWarning = byId('data-warning');
};

const initEvents = () => {
  dom.startExam.addEventListener('click', () => startSession('exam'));
  dom.startPractice.addEventListener('click', () => startSession('practice'));
  dom.nextButton.addEventListener('click', nextQuestion);
  dom.prevButton.addEventListener('click', prevQuestion);
  dom.finishButton.addEventListener('click', finishExam);
  dom.restartExam.addEventListener('click', () => startSession(state.mode || 'exam'));
};

const init = () => {
  initDom();
  const hasQuestions =
    typeof ALL_QUESTIONS !== 'undefined' && Array.isArray(ALL_QUESTIONS) && ALL_QUESTIONS.length > 0;
  if (!hasQuestions) {
    dom.dataWarning.textContent =
      'Küsimuste andmefaili ei leitud. Kontrolli, et finantsarvestus-copy.js on õigesti üles laaditud.';
    dom.dataWarning.hidden = false;
    dom.startExam.disabled = true;
    dom.startPractice.disabled = true;
    return;
  }

  initEvents();
  renderHistory();
};

document.addEventListener('DOMContentLoaded', init);
