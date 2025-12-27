---
layout: page
title: Finance Accounting Exam
permalink: /exam/
---

<div id="exam-app">
  <!-- Welcome Screen -->
  <div id="welcome-screen" class="screen active">
    <h1>Finance Accounting Test Exam</h1>
    <div class="exam-info">
      <h2>Exam Information</h2>
      <ul>
        <li><strong>Questions:</strong> 20 per exam</li>
        <li><strong>Total Points:</strong> 50 points maximum</li>
        <li><strong>Time Limit:</strong> 90 minutes</li>
        <li><strong>Format:</strong> One question at a time, no going back</li>
        <li><strong>Coverage:</strong> All 14 chapters</li>
        <li><strong>Question Types:</strong> Multiple Choice, Dropdown Matching, Calculations</li>
      </ul>
      <button id="start-exam-btn" class="btn btn-primary">Start Exam</button>
      <button id="view-dashboard-btn" class="btn btn-secondary">View Performance Dashboard</button>
    </div>
  </div>

  <!-- Exam Screen -->
  <div id="exam-screen" class="screen">
    <div class="exam-header">
      <div class="exam-progress">
        <span id="question-counter">Question 1 of 20</span>
        <div class="progress-bar">
          <div id="progress-fill" class="progress-fill"></div>
        </div>
      </div>
      <div class="exam-timer">
        <span id="timer">90:00</span>
      </div>
      <div class="exam-score">
        <span id="current-score">Score: 0/50</span>
      </div>
    </div>

    <div id="question-container" class="question-container">
      <!-- Question will be rendered here -->
    </div>

    <div class="exam-controls">
      <button id="submit-answer-btn" class="btn btn-primary">Submit Answer</button>
    </div>
  </div>

  <!-- Results Screen -->
  <div id="results-screen" class="screen">
    <h1>Exam Results</h1>
    <div id="results-summary" class="results-summary">
      <!-- Results will be rendered here -->
    </div>
    <div class="results-actions">
      <button id="review-answers-btn" class="btn btn-primary">Review Incorrect Answers</button>
      <button id="new-exam-btn" class="btn btn-secondary">Take New Exam</button>
      <button id="dashboard-btn" class="btn btn-secondary">View Dashboard</button>
    </div>
  </div>

  <!-- Review Screen -->
  <div id="review-screen" class="screen">
    <h1>Review Incorrect Answers</h1>
    <div id="review-container" class="review-container">
      <!-- Review content will be rendered here -->
    </div>
    <div class="review-actions">
      <button id="back-to-results-btn" class="btn btn-secondary">Back to Results</button>
    </div>
  </div>

  <!-- Dashboard Screen -->
  <div id="dashboard-screen" class="screen">
    <h1>Performance Dashboard</h1>
    <div class="dashboard-stats">
      <div id="overall-stats" class="stats-card">
        <!-- Overall stats will be rendered here -->
      </div>
    </div>
    <div id="chapter-performance" class="chapter-performance">
      <!-- Chapter performance will be rendered here -->
    </div>
    <div class="dashboard-actions">
      <button id="back-to-welcome-btn" class="btn btn-secondary">Back to Home</button>
      <button id="clear-history-btn" class="btn btn-danger">Clear History</button>
    </div>
  </div>
</div>

<link rel="stylesheet" href="{{ "/css/exam.css" | prepend: site.baseurl }}">
<script src="{{ "/js/questions.js" | prepend: site.baseurl }}"></script>
<script src="{{ "/js/exam-app.js" | prepend: site.baseurl }}"></script>
