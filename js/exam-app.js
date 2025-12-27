// Finance Accounting Exam Application
(function() {
  'use strict';

  // Constants
  const EXAM_CONFIG = {
    questionsPerExam: 20,
    maxPoints: 50,
    timeLimit: 90 * 60, // 90 minutes in seconds
    chaptersRequired: 14
  };

  // Application State
  let state = {
    currentScreen: 'welcome',
    examQuestions: [],
    currentQuestionIndex: 0,
    userAnswers: [],
    examStartTime: null,
    timeRemaining: EXAM_CONFIG.timeLimit,
    timerInterval: null,
    examResults: null,
    examHistory: []
  };

  // Initialize app when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
  });

  function initializeApp() {
    loadExamHistory();
    attachEventListeners();
    showScreen('welcome');
  }

  // Event Listeners
  function attachEventListeners() {
    document.getElementById('start-exam-btn').addEventListener('click', startExam);
    document.getElementById('view-dashboard-btn').addEventListener('click', showDashboard);
    document.getElementById('submit-answer-btn').addEventListener('click', submitAnswer);
    document.getElementById('review-answers-btn').addEventListener('click', showReview);
    document.getElementById('new-exam-btn').addEventListener('click', () => showScreen('welcome'));
    document.getElementById('dashboard-btn').addEventListener('click', showDashboard);
    document.getElementById('back-to-results-btn').addEventListener('click', () => showScreen('results'));
    document.getElementById('back-to-welcome-btn').addEventListener('click', () => showScreen('welcome'));
    document.getElementById('clear-history-btn').addEventListener('click', clearHistory);
  }

  // Screen Management
  function showScreen(screenName) {
    document.querySelectorAll('.screen').forEach(screen => {
      screen.classList.remove('active');
    });
    document.getElementById(screenName + '-screen').classList.add('active');
    state.currentScreen = screenName;
  }

  // Exam Logic
  function startExam() {
    // Generate exam questions
    state.examQuestions = generateExamQuestions();
    state.currentQuestionIndex = 0;
    state.userAnswers = [];
    state.examStartTime = Date.now();
    state.timeRemaining = EXAM_CONFIG.timeLimit;

    // Start timer
    startTimer();

    // Show exam screen
    showScreen('exam');
    displayQuestion();
  }

  function generateExamQuestions() {
    // Ensure equal representation from all 14 chapters
    const questionsPerChapter = Math.floor(EXAM_CONFIG.questionsPerExam / EXAM_CONFIG.chaptersRequired);
    const remainingQuestions = EXAM_CONFIG.questionsPerExam % EXAM_CONFIG.chaptersRequired;

    let selectedQuestions = [];

    // Get questions from each chapter
    for (let chapter = 1; chapter <= EXAM_CONFIG.chaptersRequired; chapter++) {
      const chapterQuestions = QUESTION_BANK.filter(q => q.chapter === chapter);
      const numToSelect = questionsPerChapter + (chapter <= remainingQuestions ? 1 : 0);
      const shuffled = shuffleArray([...chapterQuestions]);
      selectedQuestions.push(...shuffled.slice(0, numToSelect));
    }

    // Shuffle all questions
    return shuffleArray(selectedQuestions);
  }

  function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  function displayQuestion() {
    const question = state.examQuestions[state.currentQuestionIndex];
    const container = document.getElementById('question-container');

    // Update progress
    document.getElementById('question-counter').textContent =
      `Question ${state.currentQuestionIndex + 1} of ${EXAM_CONFIG.questionsPerExam}`;

    const progress = ((state.currentQuestionIndex + 1) / EXAM_CONFIG.questionsPerExam) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';

    // Render question based on type
    let html = `
      <div class="question">
        <div class="question-header">
          <span class="chapter-tag">Chapter ${question.chapter}: ${question.chapterName}</span>
          <span class="points-tag">${question.points} points</span>
        </div>
        <h3 class="question-text">${question.question}</h3>
        <div class="question-input">
    `;

    if (question.type === 'multiple-choice') {
      html += renderMultipleChoice(question);
    } else if (question.type === 'dropdown') {
      html += renderDropdown(question);
    } else if (question.type === 'calculation') {
      html += renderCalculation(question);
    }

    html += `
        </div>
      </div>
    `;

    container.innerHTML = html;
  }

  function renderMultipleChoice(question) {
    let html = '<div class="multiple-choice">';
    question.options.forEach((option, index) => {
      html += `
        <label class="option">
          <input type="radio" name="answer" value="${index}">
          <span>${option}</span>
        </label>
      `;
    });
    html += '</div>';
    return html;
  }

  function renderDropdown(question) {
    let html = '<div class="dropdown-matching">';

    // Shuffle definitions for dropdowns
    const definitions = question.pairs.map(p => p.definition);
    const shuffledDefinitions = shuffleArray(definitions);

    question.pairs.forEach((pair, index) => {
      html += `
        <div class="matching-row">
          <span class="term">${pair.term}:</span>
          <select name="answer-${index}" class="dropdown-select">
            <option value="">Select an answer...</option>
            ${shuffledDefinitions.map((def, i) =>
              `<option value="${def}">${def}</option>`
            ).join('')}
          </select>
        </div>
      `;
    });

    html += '</div>';
    return html;
  }

  function renderCalculation(question) {
    return `
      <div class="calculation">
        <div class="calculation-input">
          <label>Your answer:</label>
          <div class="input-group">
            ${question.unit ? `<span class="unit-prefix">${question.unit}</span>` : ''}
            <input type="number" name="answer" placeholder="Enter your answer" step="0.01">
          </div>
        </div>
      </div>
    `;
  }

  function submitAnswer() {
    const question = state.examQuestions[state.currentQuestionIndex];
    let userAnswer = null;
    let isCorrect = false;

    if (question.type === 'multiple-choice') {
      const selected = document.querySelector('input[name="answer"]:checked');
      if (!selected) {
        alert('Please select an answer before continuing.');
        return;
      }
      userAnswer = parseInt(selected.value);
      isCorrect = userAnswer === question.correctAnswer;
    } else if (question.type === 'dropdown') {
      userAnswer = [];
      let allAnswered = true;

      question.pairs.forEach((pair, index) => {
        const select = document.querySelector(`select[name="answer-${index}"]`);
        const selectedValue = select.value;
        if (!selectedValue) {
          allAnswered = false;
        }
        userAnswer.push(selectedValue);
      });

      if (!allAnswered) {
        alert('Please answer all matching pairs before continuing.');
        return;
      }

      // Check if all matches are correct
      isCorrect = question.pairs.every((pair, index) => userAnswer[index] === pair.definition);
    } else if (question.type === 'calculation') {
      const input = document.querySelector('input[name="answer"]');
      if (!input.value) {
        alert('Please enter an answer before continuing.');
        return;
      }
      userAnswer = parseFloat(input.value);
      const tolerance = question.tolerance || 0;
      isCorrect = Math.abs(userAnswer - question.correctAnswer) <= tolerance;
    }

    // Store answer
    state.userAnswers.push({
      questionId: question.id,
      question: question,
      userAnswer: userAnswer,
      isCorrect: isCorrect,
      pointsEarned: isCorrect ? question.points : 0
    });

    // Move to next question or finish exam
    state.currentQuestionIndex++;
    if (state.currentQuestionIndex < state.examQuestions.length) {
      displayQuestion();
    } else {
      finishExam();
    }
  }

  function finishExam() {
    stopTimer();

    // Calculate results
    const totalPoints = state.userAnswers.reduce((sum, ans) => sum + ans.pointsEarned, 0);
    const totalQuestions = state.userAnswers.length;
    const correctAnswers = state.userAnswers.filter(ans => ans.isCorrect).length;
    const percentage = (totalPoints / EXAM_CONFIG.maxPoints) * 100;
    const timeTaken = EXAM_CONFIG.timeLimit - state.timeRemaining;

    state.examResults = {
      date: new Date().toISOString(),
      totalPoints: totalPoints,
      maxPoints: EXAM_CONFIG.maxPoints,
      percentage: percentage,
      correctAnswers: correctAnswers,
      totalQuestions: totalQuestions,
      timeTaken: timeTaken,
      answers: state.userAnswers,
      chapterBreakdown: calculateChapterBreakdown()
    };

    // Save to history
    saveExamResult(state.examResults);

    // Display results
    displayResults();
    showScreen('results');
  }

  function calculateChapterBreakdown() {
    const breakdown = {};

    state.userAnswers.forEach(answer => {
      const chapter = answer.question.chapter;
      if (!breakdown[chapter]) {
        breakdown[chapter] = {
          chapterName: answer.question.chapterName,
          total: 0,
          correct: 0,
          points: 0,
          maxPoints: 0
        };
      }
      breakdown[chapter].total++;
      breakdown[chapter].maxPoints += answer.question.points;
      if (answer.isCorrect) {
        breakdown[chapter].correct++;
        breakdown[chapter].points += answer.question.points;
      }
    });

    return breakdown;
  }

  function displayResults() {
    const results = state.examResults;
    const container = document.getElementById('results-summary');

    let grade = '';
    if (results.percentage >= 90) grade = 'A';
    else if (results.percentage >= 80) grade = 'B';
    else if (results.percentage >= 70) grade = 'C';
    else if (results.percentage >= 60) grade = 'D';
    else grade = 'F';

    let html = `
      <div class="results-card">
        <div class="grade-display ${grade.toLowerCase()}">
          <div class="grade-letter">${grade}</div>
          <div class="grade-percentage">${results.percentage.toFixed(1)}%</div>
        </div>

        <div class="results-stats">
          <div class="stat">
            <label>Score:</label>
            <value>${results.totalPoints} / ${results.maxPoints} points</value>
          </div>
          <div class="stat">
            <label>Correct Answers:</label>
            <value>${results.correctAnswers} / ${results.totalQuestions}</value>
          </div>
          <div class="stat">
            <label>Time Taken:</label>
            <value>${formatTime(results.timeTaken)}</value>
          </div>
        </div>

        <div class="chapter-results">
          <h3>Performance by Chapter</h3>
          <table class="results-table">
            <thead>
              <tr>
                <th>Chapter</th>
                <th>Correct</th>
                <th>Points</th>
                <th>Accuracy</th>
              </tr>
            </thead>
            <tbody>
    `;

    Object.keys(results.chapterBreakdown).sort((a, b) => a - b).forEach(chapter => {
      const data = results.chapterBreakdown[chapter];
      const accuracy = (data.correct / data.total) * 100;
      html += `
        <tr>
          <td>${chapter}. ${data.chapterName}</td>
          <td>${data.correct}/${data.total}</td>
          <td>${data.points}/${data.maxPoints}</td>
          <td>${accuracy.toFixed(0)}%</td>
        </tr>
      `;
    });

    html += `
            </tbody>
          </table>
        </div>
      </div>
    `;

    container.innerHTML = html;
  }

  function showReview() {
    const incorrectAnswers = state.userAnswers.filter(ans => !ans.isCorrect);
    const container = document.getElementById('review-container');

    if (incorrectAnswers.length === 0) {
      container.innerHTML = '<p class="no-errors">Congratulations! You answered all questions correctly!</p>';
    } else {
      let html = '<div class="review-list">';

      incorrectAnswers.forEach((answer, index) => {
        const question = answer.question;
        html += `
          <div class="review-item">
            <div class="review-header">
              <h4>Question ${index + 1} (Chapter ${question.chapter})</h4>
              <span class="points-lost">-${question.points} points</span>
            </div>
            <p class="review-question">${question.question}</p>
        `;

        if (question.type === 'multiple-choice') {
          html += `
            <div class="review-answer">
              <p><strong>Your answer:</strong> ${question.options[answer.userAnswer]}</p>
              <p class="correct-answer"><strong>Correct answer:</strong> ${question.options[question.correctAnswer]}</p>
            </div>
          `;
        } else if (question.type === 'dropdown') {
          html += '<div class="review-answer"><strong>Correct matches:</strong><ul>';
          question.pairs.forEach(pair => {
            html += `<li>${pair.term}: ${pair.definition}</li>`;
          });
          html += '</ul></div>';
        } else if (question.type === 'calculation') {
          html += `
            <div class="review-answer">
              <p><strong>Your answer:</strong> ${question.unit || ''}${answer.userAnswer}</p>
              <p class="correct-answer"><strong>Correct answer:</strong> ${question.unit || ''}${question.correctAnswer}</p>
            </div>
          `;
        }

        html += `
            <div class="explanation">
              <strong>Explanation:</strong> ${question.explanation}
            </div>
          </div>
        `;
      });

      html += '</div>';
      container.innerHTML = html;
    }

    showScreen('review');
  }

  function showDashboard() {
    loadExamHistory();
    const container = document.getElementById('overall-stats');
    const chapterContainer = document.getElementById('chapter-performance');

    if (state.examHistory.length === 0) {
      container.innerHTML = '<p>No exam history yet. Take your first exam to see your performance!</p>';
      chapterContainer.innerHTML = '';
    } else {
      // Calculate overall statistics
      const totalExams = state.examHistory.length;
      const avgScore = state.examHistory.reduce((sum, exam) => sum + exam.percentage, 0) / totalExams;
      const bestScore = Math.max(...state.examHistory.map(exam => exam.percentage));
      const recentScores = state.examHistory.slice(-5).reverse();

      container.innerHTML = `
        <h2>Overall Performance</h2>
        <div class="stats-grid">
          <div class="stat-box">
            <div class="stat-value">${totalExams}</div>
            <div class="stat-label">Exams Taken</div>
          </div>
          <div class="stat-box">
            <div class="stat-value">${avgScore.toFixed(1)}%</div>
            <div class="stat-label">Average Score</div>
          </div>
          <div class="stat-box">
            <div class="stat-value">${bestScore.toFixed(1)}%</div>
            <div class="stat-label">Best Score</div>
          </div>
        </div>

        <h3>Recent Exams</h3>
        <table class="history-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Score</th>
              <th>Percentage</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            ${recentScores.map(exam => `
              <tr>
                <td>${new Date(exam.date).toLocaleDateString()}</td>
                <td>${exam.totalPoints}/${exam.maxPoints}</td>
                <td>${exam.percentage.toFixed(1)}%</td>
                <td>${formatTime(exam.timeTaken)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;

      // Calculate chapter performance across all exams
      const chapterPerformance = {};
      state.examHistory.forEach(exam => {
        Object.keys(exam.chapterBreakdown).forEach(chapter => {
          if (!chapterPerformance[chapter]) {
            chapterPerformance[chapter] = {
              chapterName: exam.chapterBreakdown[chapter].chapterName,
              total: 0,
              correct: 0,
              points: 0,
              maxPoints: 0
            };
          }
          const data = exam.chapterBreakdown[chapter];
          chapterPerformance[chapter].total += data.total;
          chapterPerformance[chapter].correct += data.correct;
          chapterPerformance[chapter].points += data.points;
          chapterPerformance[chapter].maxPoints += data.maxPoints;
        });
      });

      chapterContainer.innerHTML = `
        <h3>Performance by Chapter (All Time)</h3>
        <table class="chapter-table">
          <thead>
            <tr>
              <th>Chapter</th>
              <th>Questions</th>
              <th>Accuracy</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            ${Object.keys(chapterPerformance).sort((a, b) => a - b).map(chapter => {
              const data = chapterPerformance[chapter];
              const accuracy = (data.correct / data.total) * 100;
              const scorePercentage = (data.points / data.maxPoints) * 100;
              return `
                <tr>
                  <td>${chapter}. ${data.chapterName}</td>
                  <td>${data.correct}/${data.total}</td>
                  <td>
                    <div class="accuracy-bar">
                      <div class="accuracy-fill" style="width: ${accuracy}%"></div>
                      <span>${accuracy.toFixed(0)}%</span>
                    </div>
                  </td>
                  <td>${data.points}/${data.maxPoints}</td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      `;
    }

    showScreen('dashboard');
  }

  // Timer Functions
  function startTimer() {
    state.timerInterval = setInterval(() => {
      state.timeRemaining--;
      updateTimerDisplay();

      if (state.timeRemaining <= 0) {
        alert('Time is up! The exam will now be submitted.');
        finishExam();
      }
    }, 1000);
  }

  function stopTimer() {
    if (state.timerInterval) {
      clearInterval(state.timerInterval);
      state.timerInterval = null;
    }
  }

  function updateTimerDisplay() {
    const minutes = Math.floor(state.timeRemaining / 60);
    const seconds = state.timeRemaining % 60;
    const display = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('timer').textContent = display;

    // Add warning class if time is running low
    const timerElement = document.querySelector('.exam-timer');
    if (state.timeRemaining <= 300) { // 5 minutes
      timerElement.classList.add('warning');
    }
  }

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  // LocalStorage Functions
  function saveExamResult(result) {
    state.examHistory.push(result);
    localStorage.setItem('examHistory', JSON.stringify(state.examHistory));
  }

  function loadExamHistory() {
    const history = localStorage.getItem('examHistory');
    state.examHistory = history ? JSON.parse(history) : [];
  }

  function clearHistory() {
    if (confirm('Are you sure you want to clear all exam history? This cannot be undone.')) {
      localStorage.removeItem('examHistory');
      state.examHistory = [];
      showDashboard();
    }
  }

})();
