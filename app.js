// ==========================================================================
// SIMULADO OFICIAL MICROSOFT AI-901 - APP.JS (SUPORTE A SIMULADO 1 E SIMULADO 2)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Exams Registry
  const EXAMS_CONFIG = {
    simulado1: {
      id: 'simulado1',
      title: 'Microsoft Practice Assessment',
      badge: 'OFICIAL (50Q)',
      subtitle: 'Exame AI-901: Microsoft Azure AI Fundamentals (50 Questões Oficiais)',
      reportSubtitle: 'Microsoft Practice Assessment for Exam AI-901: Microsoft Azure AI Fundamentals (50 Questões)',
      leaderboardTitle: 'Ranking Geral da Turma - Simulado 1 (50Q)',
      modalLeaderboardTitle: 'Ranking da Turma - AI-901 (Simulado 1 - 50Q)',
      questions: typeof SIMULADO_QUESTIONS !== 'undefined' ? SIMULADO_QUESTIONS : []
    },
    simulado2: {
      id: 'simulado2',
      title: 'Simulado ExamTopics AI-901',
      badge: 'SIMULADO 2 (30Q)',
      subtitle: 'Exame AI-901: 30 Questões Extraídas ExamTopics Traduzidas e Comentadas (PT-BR)',
      reportSubtitle: 'Simulado 2 (ExamTopics) for Exam AI-901: Microsoft Azure AI Fundamentals (30 Questões)',
      leaderboardTitle: 'Ranking Geral da Turma - Simulado 2 (30Q ExamTopics)',
      modalLeaderboardTitle: 'Ranking da Turma - AI-901 (Simulado 2 - 30Q)',
      questions: typeof SIMULADO_2_QUESTIONS !== 'undefined' ? SIMULADO_2_QUESTIONS : []
    }
  };

  // Detect initial exam from URL or window.DEFAULT_EXAM_ID
  function detectInitialExamId() {
    if (window.DEFAULT_EXAM_ID === 'simulado2') return 'simulado2';
    const params = new URLSearchParams(window.location.search);
    const simParam = params.get('simulado') || params.get('exam');
    if (simParam === '2' || simParam === 'simulado2') return 'simulado2';
    if (window.location.pathname.toLowerCase().includes('/simulado2')) return 'simulado2';
    return 'simulado1';
  }

  let currentExamId = detectInitialExamId();
  let activeQuestions = EXAMS_CONFIG[currentExamId].questions;
  let totalQuestions = activeQuestions.length;

  // Per-exam state storage so switching exams preserves progress
  const examStates = {
    simulado1: {
      currentQuestionIndex: 0,
      userAnswers: {},
      flaggedQuestions: new Set(),
      solutionRevealed: {},
      timerSeconds: 0,
      attemptCount: 1,
      failedInPreviousAttempt: new Set()
    },
    simulado2: {
      currentQuestionIndex: 0,
      userAnswers: {},
      flaggedQuestions: new Set(),
      solutionRevealed: {},
      timerSeconds: 0,
      attemptCount: 1,
      failedInPreviousAttempt: new Set()
    }
  };

  // Load attempt history from sessionStorage
  ['simulado1', 'simulado2'].forEach(examKey => {
    try {
      const prefix = examKey === 'simulado1' ? 'ai901' : 'ai901_sim2';
      examStates[examKey].attemptCount = parseInt(sessionStorage.getItem(`${prefix}_attempt_count`) || '1', 10);
      const savedFailed = JSON.parse(sessionStorage.getItem(`${prefix}_failed_questions`) || '[]');
      savedFailed.forEach(id => examStates[examKey].failedInPreviousAttempt.add(id));
    } catch (e) {}
  });

  // Active pointers
  let currentQuestionIndex = 0;
  let userAnswers = examStates[currentExamId].userAnswers;
  let flaggedQuestions = examStates[currentExamId].flaggedQuestions;
  let solutionRevealed = examStates[currentExamId].solutionRevealed;
  let attemptCount = examStates[currentExamId].attemptCount;
  let failedInPreviousAttempt = examStates[currentExamId].failedInPreviousAttempt;
  let timerSeconds = examStates[currentExamId].timerSeconds;
  let timerInterval = null;

  // Selected chip state for click-to-assign in drag_drop questions
  let selectedDragChipValue = null;

  // Modes: 'study' (default with instant solutions) or 'exam' (strict exam)
  let appMode = 'study';

  // Active Screen: 'question', 'review', or 'score'
  let currentView = 'question';

  // DOM Elements
  const questionView = document.getElementById('questionView');
  const reviewView = document.getElementById('reviewView');
  const scoreReportView = document.getElementById('scoreReportView');
  const questionCard = document.getElementById('questionCard');
  const progressFill = document.getElementById('progressFill');
  const progressText = document.getElementById('progressText');
  const progressStrip = document.getElementById('progressStrip');

  const headerMainTitle = document.getElementById('headerMainTitle');
  const headerBadge = document.getElementById('headerBadge');
  const headerSubTitle = document.getElementById('headerSubTitle');
  const btnSelectSimulado1 = document.getElementById('btnSelectSimulado1');
  const btnSelectSimulado2 = document.getElementById('btnSelectSimulado2');
  const btnCopyShareLink = document.getElementById('btnCopyShareLink');

  const modeToggleBtn = document.getElementById('modeToggleBtn');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const timerDisplay = document.getElementById('timerDisplay');
  const btnOpenReview = document.getElementById('btnOpenReview');

  const finishModal = document.getElementById('finishModal');
  const btnCancelModal = document.getElementById('btnCancelModal');
  const btnConfirmFinish = document.getElementById('btnConfirmFinish');
  const btnFinishExamFromReview = document.getElementById('btnFinishExamFromReview');
  const btnRestartExam = document.getElementById('btnRestartExam');

  // Review Table Elements
  const reviewTableBody = document.getElementById('reviewTableBody');
  const reviewTotalQuestionsText = document.getElementById('reviewTotalQuestionsText');
  const countAllReview = document.getElementById('countAllReview');
  const countAnswered = document.getElementById('countAnswered');
  const countUnanswered = document.getElementById('countUnanswered');
  const countFlagged = document.getElementById('countFlagged');
  const filterPills = document.querySelectorAll('.review-filters-bar .filter-pill');

  // Score Report Elements
  const scoreReportSubtitle = document.getElementById('scoreReportSubtitle');
  const finalScorePercent = document.getElementById('finalScorePercent');
  const finalScoreCount = document.getElementById('finalScoreCount');
  const targetCorrectText = document.getElementById('targetCorrectText');
  const scoreBadgeContainer = document.getElementById('scoreBadgeContainer');
  const sec1Percent = document.getElementById('sec1Percent');
  const sec1Fill = document.getElementById('sec1Fill');
  const sec2Percent = document.getElementById('sec2Percent');
  const sec2Fill = document.getElementById('sec2Fill');
  const scoreReportQuestionsList = document.getElementById('scoreReportQuestionsList');
  const reportAllCount = document.getElementById('reportAllCount');
  const reportWrongCount = document.getElementById('reportWrongCount');
  const reportRightCount = document.getElementById('reportRightCount');
  const leaderboardTitle = document.getElementById('leaderboardTitle');
  const modalLeaderboardTitle = document.getElementById('modalLeaderboardTitle');

  // Markdown Formatter Helper
  function formatMarkdown(text) {
    if (!text) return '';
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code style="background: rgba(0,0,0,0.06); padding: 2px 4px; border-radius: 3px; font-family: monospace;">$1</code>')
      .replace(/\n/g, '<br>');
  }

  // Escape HTML helper
  function escapeHtml(text) {
    if (!text) return '';
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // ========================================================================
  // EXAM SWITCHING (SIMULADO 1 <-> SIMULADO 2)
  // ========================================================================
  function updateExamMetadataUI() {
    const cfg = EXAMS_CONFIG[currentExamId];
    totalQuestions = activeQuestions.length;
    const targetPass = Math.ceil(totalQuestions * 0.8);

    if (headerMainTitle) headerMainTitle.textContent = cfg.title;
    if (headerBadge) headerBadge.textContent = cfg.badge;
    if (headerSubTitle) headerSubTitle.textContent = cfg.subtitle;
    if (scoreReportSubtitle) scoreReportSubtitle.textContent = cfg.reportSubtitle;
    if (leaderboardTitle) leaderboardTitle.textContent = cfg.leaderboardTitle;
    if (modalLeaderboardTitle) modalLeaderboardTitle.textContent = cfg.modalLeaderboardTitle;

    if (reviewTotalQuestionsText) reviewTotalQuestionsText.textContent = String(totalQuestions);
    if (countAllReview) countAllReview.textContent = String(totalQuestions);
    if (reportAllCount) reportAllCount.textContent = String(totalQuestions);
    if (targetCorrectText) targetCorrectText.textContent = `${targetPass} acertos de ${totalQuestions}`;

    if (btnSelectSimulado1 && btnSelectSimulado2) {
      btnSelectSimulado1.classList.toggle('active', currentExamId === 'simulado1');
      btnSelectSimulado2.classList.toggle('active', currentExamId === 'simulado2');
    }

    if (window.Leaderboard && typeof window.Leaderboard.setActiveExam === 'function') {
      window.Leaderboard.setActiveExam(currentExamId);
    }
  }

  function switchExam(targetExamId) {
    if (!EXAMS_CONFIG[targetExamId] || targetExamId === currentExamId) return;

    // Save current state
    examStates[currentExamId].currentQuestionIndex = currentQuestionIndex;
    examStates[currentExamId].timerSeconds = timerSeconds;

    // Switch pointer
    currentExamId = targetExamId;
    activeQuestions = EXAMS_CONFIG[currentExamId].questions;
    currentQuestionIndex = examStates[currentExamId].currentQuestionIndex;
    userAnswers = examStates[currentExamId].userAnswers;
    flaggedQuestions = examStates[currentExamId].flaggedQuestions;
    solutionRevealed = examStates[currentExamId].solutionRevealed;
    attemptCount = examStates[currentExamId].attemptCount;
    failedInPreviousAttempt = examStates[currentExamId].failedInPreviousAttempt;
    timerSeconds = examStates[currentExamId].timerSeconds;
    selectedDragChipValue = null;

    // Update URL query param cleanly without reloading page
    try {
      const url = new URL(window.location.href);
      if ( !window.location.pathname.toLowerCase().includes('/simulado2') ) {
        if (currentExamId === 'simulado2') {
          url.searchParams.set('simulado', '2');
        } else {
          url.searchParams.delete('simulado');
          url.searchParams.delete('exam');
        }
        window.history.replaceState({}, '', url.toString());
      }
    } catch (e) {}

    updateExamMetadataUI();
    updateTimerDisplay();
    startTimer();
    switchView('question');
  }

  if (btnSelectSimulado1) {
    btnSelectSimulado1.addEventListener('click', () => {
      if (window.location.pathname.toLowerCase().includes('/simulado2')) {
        window.location.href = '../';
        return;
      }
      switchExam('simulado1');
    });
  }

  if (btnSelectSimulado2) {
    btnSelectSimulado2.addEventListener('click', () => {
      switchExam('simulado2');
    });
  }

  // Share Link Button
  if (btnCopyShareLink) {
    btnCopyShareLink.addEventListener('click', async () => {
      let shareUrl = window.location.href;
      try {
        const u = new URL(window.location.href);
        u.search = '';
        u.hash = '';
        let basePath = u.pathname.replace(/\/simulado2\/?(index\.html)?$/i, '/').replace(/\/index\.html$/i, '/');
        if (!basePath.endsWith('/')) basePath += '/';
        if (currentExamId === 'simulado2') {
          u.pathname = basePath + 'simulado2/';
        } else {
          u.pathname = basePath;
        }
        shareUrl = u.toString();
      } catch (e) {}

      try {
        await navigator.clipboard.writeText(shareUrl);
      } catch (err) {
        const tempInput = document.createElement('input');
        tempInput.value = shareUrl;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
      }

      const iconEl = document.getElementById('copyLinkIcon');
      const textEl = document.getElementById('copyLinkText');
      if (iconEl) iconEl.textContent = '✅';
      if (textEl) textEl.textContent = 'Link Copiado!';
      setTimeout(() => {
        if (iconEl) iconEl.textContent = '🔗';
        if (textEl) textEl.textContent = 'Copiar Link';
      }, 2200);
    });
  }

  // ========================================================================
  // TIMER FUNCTIONS
  // ========================================================================
  function updateTimerDisplay() {
    if (!timerDisplay) return;
    const mins = String(Math.floor(timerSeconds / 60)).padStart(2, '0');
    const secs = String(timerSeconds % 60).padStart(2, '0');
    timerDisplay.textContent = `${mins}:${secs}`;
  }

  function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      timerSeconds++;
      examStates[currentExamId].timerSeconds = timerSeconds;
      updateTimerDisplay();
    }, 1000);
  }

  // ========================================================================
  // THEME (DARK / LIGHT) TOGGLE
  // ========================================================================
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ms_ai901_theme', theme);
    const themeIcon = document.getElementById('themeIcon');
    const themeText = document.getElementById('themeText');
    if (theme === 'dark') {
      if (themeIcon) themeIcon.textContent = '🌙';
      if (themeText) themeText.textContent = 'Modo Noite';
      themeToggleBtn.classList.add('dark-active');
      themeToggleBtn.setAttribute('title', 'Clique para mudar para Modo Dia (Claro)');
    } else {
      if (themeIcon) themeIcon.textContent = '☀️';
      if (themeText) themeText.textContent = 'Modo Dia';
      themeToggleBtn.classList.remove('dark-active');
      themeToggleBtn.setAttribute('title', 'Clique para mudar para Modo Noite (Escuro)');
    }
  }

  function initTheme() {
    const savedTheme = localStorage.getItem('ms_ai901_theme') || 'light';
    applyTheme(savedTheme);
  }

  themeToggleBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const nextTheme = current === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  });

  // ========================================================================
  // MODE TOGGLE (STUDY VS EXAM)
  // ========================================================================
  modeToggleBtn.addEventListener('click', () => {
    if (appMode === 'study') {
      appMode = 'exam';
      modeToggleBtn.className = 'mode-badge mode-exam';
      modeToggleBtn.innerHTML = '<span>📝</span> Modo Simulado (Exame)';
    } else {
      appMode = 'study';
      modeToggleBtn.className = 'mode-badge mode-study';
      modeToggleBtn.innerHTML = '<span>💡</span> Modo Estudo';
    }
    renderCurrentQuestion();
  });

  // ========================================================================
  // VIEW SWITCHING
  // ========================================================================
  function switchView(viewName) {
    currentView = viewName;
    questionView.style.display = viewName === 'question' ? 'block' : 'none';
    reviewView.className = `review-screen-view ${viewName === 'review' ? 'active' : ''}`;
    scoreReportView.className = `score-report-view ${viewName === 'score' ? 'active' : ''}`;

    if (viewName === 'question') {
      progressStrip.style.display = 'flex';
      renderCurrentQuestion();
    } else if (viewName === 'review') {
      progressStrip.style.display = 'flex';
      renderReviewScreen();
    } else if (viewName === 'score') {
      progressStrip.style.display = 'none';
      renderScoreReport();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  btnOpenReview.addEventListener('click', () => {
    if (currentView === 'review') {
      switchView('question');
    } else {
      switchView('review');
    }
  });

  // ========================================================================
  // QUESTION ANSWERING LOGIC
  // ========================================================================
  function isQuestionAnswered(q) {
    const ans = userAnswers[q.id];
    if (ans === undefined || ans === null) return false;
    if (q.type === 'single' || q.type === 'dropdown') {
      return ans !== '';
    }
    if (q.type === 'multi') {
      return Array.isArray(ans) && ans.length > 0;
    }
    if (q.type === 'yes_no') {
      return typeof ans === 'object' && Object.keys(ans).length === q.statements.length;
    }
    if (q.type === 'drag_drop') {
      return typeof ans === 'object' && q.targets.every(t => ans[t.id] && ans[t.id] !== '');
    }
    return false;
  }

  function isQuestionCorrect(q) {
    const ans = userAnswers[q.id];
    if (!ans) return false;

    if (q.type === 'single' || q.type === 'dropdown') {
      return ans === q.correct_answer;
    }
    if (q.type === 'multi') {
      if (!Array.isArray(ans) || ans.length !== q.correct_answer.length) return false;
      const sortedAns = [...ans].sort();
      const sortedCorrect = [...q.correct_answer].sort();
      return sortedAns.every((val, idx) => val === sortedCorrect[idx]);
    }
    if (q.type === 'yes_no') {
      if (typeof ans !== 'object') return false;
      for (const st of q.statements) {
        if (ans[st.id] !== q.correct_answer[st.id]) return false;
      }
      return true;
    }
    if (q.type === 'drag_drop') {
      if (typeof ans !== 'object') return false;
      return q.targets.every(t => ans[t.id] === q.correct_answer[t.id]);
    }
    return false;
  }

  // ========================================================================
  // RENDER CURRENT QUESTION
  // ========================================================================
  function renderCurrentQuestion() {
    const q = activeQuestions[currentQuestionIndex];
    if (!q) return;
    const isFlagged = flaggedQuestions.has(q.id);
    const isSolutionShown = solutionRevealed[q.id] || false;

    // Update Progress Bar
    const progressPercent = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    progressFill.style.width = `${progressPercent}%`;
    progressText.textContent = `Question Progress (${currentQuestionIndex + 1}/${totalQuestions})`;

    // Header HTML
    let html = `
      <div class="question-header">
        <div class="question-title-area">
          <span class="question-number">Questão ${q.id}</span>
          <span class="question-category-tag">${escapeHtml(q.category)}</span>
        </div>
        <button id="btnFlagReview" class="review-flag-btn ${isFlagged ? 'flagged' : ''}">
          <span>${isFlagged ? '🚩' : '🏳️'}</span>
          <span>${isFlagged ? 'Marcada para Revisão' : 'Marcar para Revisão'}</span>
        </button>
      </div>
    `;

    // Alert banner: ONLY shown if this is a repeat attempt (attemptCount > 1) AND the student failed this question previously
    if (attemptCount > 1 && failedInPreviousAttempt.has(q.id)) {
      html += `
        <div class="user-attempt-banner original-wrong">
          <div>
            <strong>⚠️ Atenção (${attemptCount}ª tentativa):</strong> Você errou esta questão na tentativa anterior. Preste atenção redobrada para acertar desta vez!
          </div>
        </div>
      `;
    }

    // Question Body
    html += `<div class="question-body">${formatMarkdown(escapeHtml(q.question))}</div>`;

    // Render by Question Type
    if (q.type === 'single') {
      html += renderSingleChoice(q, isSolutionShown);
    } else if (q.type === 'multi') {
      html += renderMultiChoice(q, isSolutionShown);
    } else if (q.type === 'yes_no') {
      html += renderYesNoTable(q, isSolutionShown);
    } else if (q.type === 'dropdown') {
      html += renderDropdownQuestion(q, isSolutionShown);
    } else if (q.type === 'drag_drop') {
      html += renderDragDropQuestion(q, isSolutionShown);
    }

    // Action Buttons Bar
    html += `
      <div class="question-actions-bar">
        <div class="action-group-left">
          ${appMode === 'study' ? `
            <button id="btnToggleSolution" class="btn-ms btn-ms-solution">
              <span>${isSolutionShown ? '👁️ Ocultar Solução' : '💡 Mostrar Solução'}</span>
            </button>
          ` : ''}
          <button id="btnResetAnswer" class="btn-ms btn-ms-secondary" title="Limpar resposta desta questão">
            <span>🔄</span> Redefinir Resposta
          </button>
        </div>

        <div class="action-group-right">
          <button id="btnPrevQuestion" class="btn-ms btn-ms-secondary" ${currentQuestionIndex === 0 ? 'disabled' : ''}>
            <span>‹</span> Anterior
          </button>
          <button id="btnNextQuestion" class="btn-ms btn-ms-primary">
            ${currentQuestionIndex === totalQuestions - 1 ? 'Revisar Exame 🏁' : 'Próxima ›'}
          </button>
        </div>
      </div>
    `;

    // Solution Panel (if revealed)
    html += renderSolutionPanel(q, isSolutionShown);

    questionCard.innerHTML = html;

    // Attach Event Handlers for current question
    attachQuestionEvents(q);
  }

  // ========================================================================
  // RENDER QUESTION TYPES
  // ========================================================================
  function renderSingleChoice(q, isSolutionShown) {
    const selectedAns = userAnswers[q.id] || null;
    let html = `<div class="options-list">`;

    q.options.forEach(opt => {
      const isSelected = selectedAns === opt.id;
      let optionClass = 'option-item';
      let feedbackHtml = '';

      if (isSelected) optionClass += ' selected';

      if (isSolutionShown) {
        if (opt.id === q.correct_answer) {
          optionClass += ' is-correct';
          feedbackHtml = `<span class="feedback-tag correct">✓ Esta resposta está correta</span>`;
        } else if (isSelected && opt.id !== q.correct_answer) {
          optionClass += ' is-incorrect';
          feedbackHtml = `<span class="feedback-tag incorrect">✕ Esta resposta está incorreta</span>`;
        } else {
          feedbackHtml = `<span class="feedback-tag incorrect" style="opacity: 0.65;">✕ Esta resposta está incorreta</span>`;
        }
      }

      html += `
        <div class="${optionClass}" data-opt-id="${opt.id}">
          <div class="custom-radio"></div>
          <div class="option-content">
            <div><strong class="option-letter">${opt.id}.</strong> ${escapeHtml(opt.text)}</div>
            ${feedbackHtml}
          </div>
        </div>
      `;
    });

    html += `</div>`;
    return html;
  }

  function renderMultiChoice(q, isSolutionShown) {
    const selectedAns = userAnswers[q.id] || [];
    let html = `
      <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.75rem;">
        <em>(Selecione exatamente ${q.correct_answer.length} opções)</em>
      </div>
      <div class="options-list">
    `;

    q.options.forEach(opt => {
      const isSelected = selectedAns.includes(opt.id);
      let optionClass = 'option-item';
      let feedbackHtml = '';

      if (isSelected) optionClass += ' selected';

      if (isSolutionShown) {
        if (q.correct_answer.includes(opt.id)) {
          optionClass += ' is-correct';
          feedbackHtml = `<span class="feedback-tag correct">✓ Esta resposta está correta</span>`;
        } else if (isSelected) {
          optionClass += ' is-incorrect';
          feedbackHtml = `<span class="feedback-tag incorrect">✕ Esta resposta está incorreta</span>`;
        } else {
          feedbackHtml = `<span class="feedback-tag incorrect" style="opacity: 0.65;">✕ Esta resposta está incorreta</span>`;
        }
      }

      html += `
        <div class="${optionClass}" data-multi-id="${opt.id}">
          <div class="custom-checkbox"></div>
          <div class="option-content">
            <div><strong class="option-letter">${opt.id}.</strong> ${escapeHtml(opt.text)}</div>
            ${feedbackHtml}
          </div>
        </div>
      `;
    });

    html += `</div>`;
    return html;
  }

  function renderYesNoTable(q, isSolutionShown) {
    const currentAns = userAnswers[q.id] || {};
    let html = `
      <table class="statements-table">
        <thead>
          <tr>
            <th>Afirmações (Statements)</th>
            <th class="col-choice">Sim (Yes)</th>
            <th class="col-choice">Não (No)</th>
          </tr>
        </thead>
        <tbody>
    `;

    q.statements.forEach(st => {
      const userChoice = currentAns[st.id] || null;
      const correctChoice = q.correct_answer[st.id];

      let yesCircleClass = 'table-radio-circle';
      let noCircleClass = 'table-radio-circle';

      if (isSolutionShown) {
        if (correctChoice === 'Yes') {
          yesCircleClass += ' correct-ans';
          if (userChoice === 'No') noCircleClass += ' wrong-ans';
        } else if (correctChoice === 'No') {
          noCircleClass += ' correct-ans';
          if (userChoice === 'Yes') yesCircleClass += ' wrong-ans';
        }
      }

      html += `
        <tr>
          <td>${escapeHtml(st.text)}</td>
          <td class="col-choice">
            <label class="table-radio-label">
              <input type="radio" name="statement_${st.id}" value="Yes" ${userChoice === 'Yes' ? 'checked' : ''}>
              <span class="${yesCircleClass}"></span>
            </label>
          </td>
          <td class="col-choice">
            <label class="table-radio-label">
              <input type="radio" name="statement_${st.id}" value="No" ${userChoice === 'No' ? 'checked' : ''}>
              <span class="${noCircleClass}"></span>
            </label>
          </td>
        </tr>
      `;
    });

    html += `</tbody></table>`;
    return html;
  }

  function renderDropdownQuestion(q, isSolutionShown) {
    const selectedAns = userAnswers[q.id] || '';
    const isCodeArea = q.answer_area && q.answer_area.type === 'code';
    let selectClass = isCodeArea ? 'ms-inline-select code-inline-select' : 'ms-inline-select';

    if (isSolutionShown) {
      selectClass += selectedAns === q.correct_answer ? ' correct' : ' incorrect';
    }

    let selectHtml = `
      <select id="inlineSelect_${q.id}" class="${selectClass}">
        <option value="">-- Selecione uma opção --</option>
    `;

    q.options.forEach(opt => {
      const isSel = selectedAns === opt.id;
      selectHtml += `<option value="${opt.id}" ${isSel ? 'selected' : ''}>${escapeHtml(opt.text)}</option>`;
    });

    selectHtml += `</select>`;

    let feedbackBanner = '';
    if (isSolutionShown) {
      const correctOpt = q.options.find(o => o.id === q.correct_answer);
      const isRight = selectedAns === q.correct_answer;
      feedbackBanner = `
        <div style="margin-top: 10px;">
          <span class="feedback-tag ${isRight ? 'correct' : 'incorrect'}">
            ${isRight
              ? `✓ Correto! (${escapeHtml(correctOpt ? correctOpt.text : q.correct_answer)})`
              : `✕ Resposta correta: ${escapeHtml(correctOpt ? correctOpt.text : q.correct_answer)}`}
          </span>
        </div>
      `;
    }

    if (q.answer_area && q.answer_area.type === 'sentence') {
      return `
        <div class="dropdown-sentence-box">
          <div class="answer-area-header"><span>🎯</span> Área de Resposta (Answer Area)</div>
          <div class="sentence-answer-block">
            ${escapeHtml(q.answer_area.prefix)}${selectHtml}${escapeHtml(q.answer_area.suffix)}
          </div>
          ${feedbackBanner}
        </div>
      `;
    }

    if (q.answer_area && q.answer_area.type === 'code') {
      return `
        <div class="dropdown-sentence-box">
          <div class="answer-area-header"><span>💻</span> Área de Resposta - Código Python (Answer Area)</div>
          <div class="code-answer-block">${escapeHtml(q.answer_area.prefix)}${selectHtml}${escapeHtml(q.answer_area.suffix)}</div>
          ${feedbackBanner}
        </div>
      `;
    }

    return `
      <div class="dropdown-sentence-box">
        <strong>Área de Resposta:</strong>
        <p style="margin-top: 8px;">
          Selecione a opção para preenchimento:
          ${selectHtml}
        </p>
        ${feedbackBanner}
      </div>
    `;
  }

  function renderDragDropQuestion(q, isSolutionShown) {
    const currentAns = userAnswers[q.id] || {};

    // Left column: Values / Principles
    const valuesHtml = q.values.map(val => {
      const isChipSelected = selectedDragChipValue === val.id;
      return `
        <div class="draggable-value-chip ${isChipSelected ? 'chip-selected' : ''}" draggable="true" data-chip-id="${escapeHtml(val.id)}" title="Arraste para um destino à direita ou clique para selecionar">
          <span class="grip-dots">⋮⋮</span>
          <span>${escapeHtml(val.text)}</span>
        </div>
      `;
    }).join('');

    // Helper to build select dropdown for a target
    function buildTargetSelect(target, isCodeStyle) {
      const userVal = currentAns[target.id] || '';
      const correctVal = q.correct_answer[target.id];
      let cls = isCodeStyle ? 'ms-inline-select code-inline-select' : 'ms-inline-select drag-drop-select';

      if (isSolutionShown) {
        cls += userVal === correctVal ? ' correct' : ' incorrect';
      }

      let optionsHtml = `<option value="">-- Selecione ou solte aqui --</option>`;
      q.values.forEach(v => {
        const sel = userVal === v.id ? 'selected' : '';
        optionsHtml += `<option value="${escapeHtml(v.id)}" ${sel}>${escapeHtml(v.text)}</option>`;
      });

      let feedbackHtml = '';
      if (isSolutionShown) {
        const correctObj = q.values.find(v => v.id === correctVal);
        const isRight = userVal === correctVal;
        feedbackHtml = `
          <div style="margin-top: 4px;">
            <span class="feedback-tag ${isRight ? 'correct' : 'incorrect'}">
              ${isRight
                ? `✓ Correto (${escapeHtml(correctObj ? correctObj.text : correctVal)})`
                : `✕ Correto: ${escapeHtml(correctObj ? correctObj.text : correctVal)}`}
            </span>
          </div>
        `;
      }

      return `
        <span class="drag-drop-target-zone" data-drop-target="${escapeHtml(target.id)}" style="display: ${isCodeStyle ? 'inline-block' : 'flex'}; vertical-align: middle;">
          <select class="${cls}" data-target-select="${escapeHtml(target.id)}">
            ${optionsHtml}
          </select>
          ${feedbackHtml}
        </span>
      `;
    }

    let rightPanelBodyHtml = '';
    if (q.drag_drop_mode === 'code') {
      let codeCombined = '';
      q.targets.forEach(t => {
        codeCombined += `${escapeHtml(t.code_prefix)}${buildTargetSelect(t, true)}${escapeHtml(t.code_suffix)}`;
      });
      rightPanelBodyHtml = `<div class="code-answer-block">${codeCombined}</div>`;
    } else {
      const rowsHtml = q.targets.map(t => `
        <div class="drag-drop-match-row">
          <div class="drag-drop-match-prompt">${escapeHtml(t.prompt)}</div>
          <div>${buildTargetSelect(t, false)}</div>
        </div>
      `).join('');
      rightPanelBodyHtml = `<div class="drag-drop-match-list">${rowsHtml}</div>`;
    }

    return `
      <div class="drag-drop-container">
        <div class="drag-drop-values-panel">
          <div class="drag-drop-panel-title">
            <span>📦 Valores / Princípios</span>
            <span style="font-size: 0.75rem; font-weight: 400; color: var(--text-secondary);">Arraste ou clique</span>
          </div>
          <div class="draggable-values-list">
            ${valuesHtml}
          </div>
        </div>
        <div class="drag-drop-targets-panel">
          <div class="drag-drop-panel-title">
            <span>🎯 Área de Resposta (Answer Area)</span>
          </div>
          ${rightPanelBodyHtml}
        </div>
      </div>
    `;
  }

  // ========================================================================
  // RENDER SOLUTION PANEL
  // ========================================================================
  function renderSolutionPanel(q, isVisible) {
    const readingLinksHtml = (q.additional_reading || []).map(r => `
      <li>
        <a href="${r.url}" target="_blank" rel="noopener noreferrer">
          <span>📖</span> ${escapeHtml(r.title)}
        </a>
      </li>
    `).join('');

    return `
      <div class="solution-panel ${isVisible ? 'visible' : ''}" id="solutionPanel">
        <div class="solution-panel-header">
          <span style="font-size: 1.3rem;">💡</span>
          <span class="solution-title">Gabarito e Comentários Oficiais Microsoft</span>
        </div>

        <div class="solution-section-block">
          <div class="solution-section-title">Objetivo do Exame</div>
          <div class="solution-content"><strong>${escapeHtml(q.objective)}</strong></div>
        </div>

        <div class="solution-section-block">
          <div class="solution-section-title">O Que Este Item Testa</div>
          <div class="solution-content">${escapeHtml(q.what_it_tests)}</div>
        </div>

        <div class="solution-section-block">
          <div class="solution-section-title">Por Que a Resposta Correta Está Certa?</div>
          <div class="solution-content correct-highlight">${formatMarkdown(q.explanation_why_correct)}</div>
        </div>

        <div class="solution-section-block">
          <div class="solution-section-title">Por Que as Outras Alternativas Estão Incorretas?</div>
          <div class="solution-content incorrect-highlight">${formatMarkdown(q.explanation_why_incorrect)}</div>
        </div>

        <div class="solution-section-block">
          <div class="solution-section-title">Racional Oficial da Microsoft</div>
          <div class="solution-content" style="font-style: italic;">"${escapeHtml(q.official_rationale)}"</div>
        </div>

        <div class="solution-section-block">
          <div class="solution-section-title">Leituras Adicionais Recomendadas (Microsoft Learn)</div>
          <ul class="reading-links">${readingLinksHtml}</ul>
        </div>
      </div>
    `;
  }

  // ========================================================================
  // ATTACH QUESTION EVENTS
  // ========================================================================
  function attachQuestionEvents(q) {
    // Flag for review button
    const btnFlag = document.getElementById('btnFlagReview');
    btnFlag.addEventListener('click', () => {
      if (flaggedQuestions.has(q.id)) {
        flaggedQuestions.delete(q.id);
      } else {
        flaggedQuestions.add(q.id);
      }
      renderCurrentQuestion();
    });

    // Single choice selection
    const optionItems = document.querySelectorAll('.option-item[data-opt-id]');
    optionItems.forEach(item => {
      item.addEventListener('click', () => {
        const optId = item.getAttribute('data-opt-id');
        userAnswers[q.id] = optId;
        renderCurrentQuestion();
      });
    });

    // Multi choice selection
    const multiItems = document.querySelectorAll('.option-item[data-multi-id]');
    multiItems.forEach(item => {
      item.addEventListener('click', () => {
        const optId = item.getAttribute('data-multi-id');
        const maxSelect = q.correct_answer.length || 2;
        let current = userAnswers[q.id] || [];
        if (current.includes(optId)) {
          current = current.filter(id => id !== optId);
        } else {
          if (current.length < maxSelect) {
            current.push(optId);
          } else {
            current = [...current.slice(1), optId];
          }
        }
        userAnswers[q.id] = current;
        renderCurrentQuestion();
      });
    });

    // Yes/No radio selection
    const radios = document.querySelectorAll('input[type="radio"][name^="statement_"]');
    radios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        const stId = e.target.name.replace('statement_', '');
        const val = e.target.value;
        if (!userAnswers[q.id]) userAnswers[q.id] = {};
        userAnswers[q.id][stId] = val;
        if (solutionRevealed[q.id]) {
          renderCurrentQuestion();
        }
      });
    });

    // Dropdown selection
    const inlineSelect = document.getElementById(`inlineSelect_${q.id}`);
    if (inlineSelect) {
      inlineSelect.addEventListener('change', (e) => {
        userAnswers[q.id] = e.target.value;
        renderCurrentQuestion();
      });
    }

    // Drag & Drop events (HTML5 Drag + Click-to-Assign + Direct Select)
    if (q.type === 'drag_drop') {
      const chips = document.querySelectorAll('.draggable-value-chip[data-chip-id]');
      chips.forEach(chip => {
        const chipId = chip.getAttribute('data-chip-id');
        chip.addEventListener('dragstart', (e) => {
          e.dataTransfer.setData('text/plain', chipId);
          selectedDragChipValue = chipId;
        });
        chip.addEventListener('click', () => {
          selectedDragChipValue = selectedDragChipValue === chipId ? null : chipId;
          renderCurrentQuestion();
        });
      });

      const dropZones = document.querySelectorAll('.drag-drop-target-zone[data-drop-target]');
      dropZones.forEach(zone => {
        const targetId = zone.getAttribute('data-drop-target');
        zone.addEventListener('dragover', (e) => {
          e.preventDefault();
          zone.classList.add('drag-over');
        });
        zone.addEventListener('dragleave', () => {
          zone.classList.remove('drag-over');
        });
        zone.addEventListener('drop', (e) => {
          e.preventDefault();
          zone.classList.remove('drag-over');
          const droppedVal = e.dataTransfer.getData('text/plain') || selectedDragChipValue;
          if (droppedVal) {
            if (!userAnswers[q.id]) userAnswers[q.id] = {};
            userAnswers[q.id][targetId] = droppedVal;
            selectedDragChipValue = null;
            renderCurrentQuestion();
          }
        });
      });

      const targetSelects = document.querySelectorAll('select[data-target-select]');
      targetSelects.forEach(sel => {
        const targetId = sel.getAttribute('data-target-select');
        sel.addEventListener('mousedown', (e) => {
          // If a chip was clicked first, assign it directly on click!
          if (selectedDragChipValue) {
            e.preventDefault();
            if (!userAnswers[q.id]) userAnswers[q.id] = {};
            userAnswers[q.id][targetId] = selectedDragChipValue;
            selectedDragChipValue = null;
            renderCurrentQuestion();
          }
        });
        sel.addEventListener('change', (e) => {
          if (!userAnswers[q.id]) userAnswers[q.id] = {};
          userAnswers[q.id][targetId] = e.target.value;
          selectedDragChipValue = null;
          renderCurrentQuestion();
        });
      });
    }

    // Toggle solution button
    const btnToggleSol = document.getElementById('btnToggleSolution');
    if (btnToggleSol) {
      btnToggleSol.addEventListener('click', () => {
        solutionRevealed[q.id] = !solutionRevealed[q.id];
        renderCurrentQuestion();
      });
    }

    // Reset answer button
    const btnReset = document.getElementById('btnResetAnswer');
    btnReset.addEventListener('click', () => {
      delete userAnswers[q.id];
      solutionRevealed[q.id] = false;
      selectedDragChipValue = null;
      renderCurrentQuestion();
    });

    // Prev / Next Question buttons
    const btnPrev = document.getElementById('btnPrevQuestion');
    btnPrev.addEventListener('click', () => {
      if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        selectedDragChipValue = null;
        renderCurrentQuestion();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });

    const btnNext = document.getElementById('btnNextQuestion');
    btnNext.addEventListener('click', () => {
      selectedDragChipValue = null;
      if (currentQuestionIndex < totalQuestions - 1) {
        currentQuestionIndex++;
        renderCurrentQuestion();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        switchView('review');
      }
    });
  }

  // ========================================================================
  // REVIEW SCREEN
  // ========================================================================
  function renderReviewScreen(filter = 'all') {
    let answeredNum = 0;
    let unansweredNum = 0;
    let flaggedNum = flaggedQuestions.size;

    activeQuestions.forEach(q => {
      if (isQuestionAnswered(q)) answeredNum++;
      else unansweredNum++;
    });

    if (countAllReview) countAllReview.textContent = totalQuestions;
    countAnswered.textContent = answeredNum;
    countUnanswered.textContent = unansweredNum;
    countFlagged.textContent = flaggedNum;

    const filteredQuestions = activeQuestions.filter(q => {
      const answered = isQuestionAnswered(q);
      const flagged = flaggedQuestions.has(q.id);

      if (filter === 'answered') return answered;
      if (filter === 'unanswered') return !answered;
      if (filter === 'flagged') return flagged;
      return true;
    });

    let tbodyHtml = '';
    filteredQuestions.forEach(q => {
      const answered = isQuestionAnswered(q);
      const flagged = flaggedQuestions.has(q.id);

      let statusBadge = answered
        ? `<span class="status-badge answered">Respondida</span>`
        : `<span class="status-badge unanswered">Não Respondida</span>`;

      let flagBadge = flagged ? `🚩 Sim` : `-`;
      const lines = q.question.split('\n').filter(l => l.trim() && !l.includes('PONTO DE INTERESSE') && !l.includes('ARRASTAR E SOLTAR'));
      const firstLine = lines[0] || q.question.split('\n')[0];
      const snippet = firstLine.substring(0, 95) + (firstLine.length > 95 ? '...' : '');

      tbodyHtml += `
        <tr data-jump-to="${q.id - 1}">
          <td><strong>Questão ${q.id}</strong></td>
          <td>${statusBadge}</td>
          <td>${escapeHtml(snippet)}</td>
          <td style="text-align: center;">${flagBadge}</td>
        </tr>
      `;
    });

    if (filteredQuestions.length === 0) {
      tbodyHtml = `<tr><td colspan="4" style="text-align: center; color: var(--text-muted); padding: 2rem;">Nenhuma questão corresponde a este filtro.</td></tr>`;
    }

    reviewTableBody.innerHTML = tbodyHtml;

    const rows = reviewTableBody.querySelectorAll('tr[data-jump-to]');
    rows.forEach(row => {
      row.addEventListener('click', () => {
        const idx = parseInt(row.getAttribute('data-jump-to'), 10);
        currentQuestionIndex = idx;
        switchView('question');
      });
    });
  }

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const filter = pill.getAttribute('data-filter');
      renderReviewScreen(filter);
    });
  });

  btnFinishExamFromReview.addEventListener('click', () => {
    finishModal.classList.add('active');
  });

  btnCancelModal.addEventListener('click', () => {
    finishModal.classList.remove('active');
  });

  btnConfirmFinish.addEventListener('click', () => {
    finishModal.classList.remove('active');
    if (timerInterval) clearInterval(timerInterval);
    switchView('score');
  });

  // ========================================================================
  // SCORE REPORT SCREEN
  // ========================================================================
  function renderScoreReport(reportFilter = 'all') {
    let correctCount = 0;
    let sec1Correct = 0;
    let sec1Total = 0;
    let sec2Correct = 0;
    let sec2Total = 0;

    activeQuestions.forEach(q => {
      const correct = isQuestionCorrect(q);
      if (correct) correctCount++;

      if (q.category.includes('Identificar conceitos')) {
        sec1Total++;
        if (correct) sec1Correct++;
      } else {
        sec2Total++;
        if (correct) sec2Correct++;
      }
    });

    const percent = Math.round((correctCount / totalQuestions) * 100);
    const passed = percent >= 80;

    finalScorePercent.textContent = `${percent}%`;
    finalScorePercent.className = `score-number ${passed ? 'pass' : 'fail'}`;
    finalScoreCount.textContent = `${correctCount} / ${totalQuestions}`;

    scoreBadgeContainer.innerHTML = `
      <div class="pass-fail-badge ${passed ? 'passed' : 'failed'}">
        ${passed ? 'APROVADO (PASSED) 🎉' : 'NÃO APROVADO (FAILED) - CONTINUE ESTUDANDO!'}
      </div>
    `;

    // Section 1: Conceitos de IA
    const sec1Pct = sec1Total > 0 ? Math.round((sec1Correct / sec1Total) * 100) : 0;
    sec1Percent.textContent = `${sec1Pct}% (${sec1Correct}/${sec1Total})`;
    sec1Fill.style.width = `${sec1Pct}%`;

    // Section 2: Microsoft Foundry
    const sec2Pct = sec2Total > 0 ? Math.round((sec2Correct / sec2Total) * 100) : 0;
    sec2Percent.textContent = `${sec2Pct}% (${sec2Correct}/${sec2Total})`;
    sec2Fill.style.width = `${sec2Pct}%`;

    const wrongCount = totalQuestions - correctCount;
    if (reportAllCount) reportAllCount.textContent = totalQuestions;
    reportWrongCount.textContent = wrongCount;
    reportRightCount.textContent = correctCount;

    const filteredQuestions = activeQuestions.filter(q => {
      const correct = isQuestionCorrect(q);
      if (reportFilter === 'wrong') return !correct;
      if (reportFilter === 'right') return correct;
      return true;
    });

    let listHtml = '';
    filteredQuestions.forEach(q => {
      const correct = isQuestionCorrect(q);
      const lines = q.question.split('\n').filter(l => l.trim() && !l.includes('PONTO DE INTERESSE') && !l.includes('ARRASTAR E SOLTAR'));
      const summaryLine = lines[0] || q.question.split('\n')[0];

      listHtml += `
        <div style="border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.25rem; background: var(--bg-surface);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <strong>Questão ${q.id}</strong>
              <span class="status-badge ${correct ? 'answered' : 'flagged'}" style="${correct ? '' : 'background-color: var(--ms-red-bg); color: var(--ms-red-incorrect);'}">
                ${correct ? '✓ Acerto' : '✕ Erro'}
              </span>
            </div>
            <button class="btn-ms btn-ms-secondary" style="font-size: 0.8rem; padding: 4px 10px;" onclick="window.jumpToQuestion(${q.id - 1})">
              Ver Questão
            </button>
          </div>

          <p style="font-size: 0.95rem; margin-bottom: 0.75rem;">${escapeHtml(summaryLine)}</p>
          
          <div style="font-size: 0.9rem; margin-bottom: 0.5rem;">
            <strong style="color: var(--ms-green-correct);">Resposta Correta:</strong>
            ${formatCorrectAnswerDisplay(q)}
          </div>

          <div style="font-size: 0.88rem; background: var(--bg-surface-secondary); padding: 10px; border-radius: var(--radius-sm); border-left: 3px solid var(--ms-blue-primary);">
            <strong>Explicação:</strong> ${formatMarkdown(q.explanation_why_correct)}
          </div>
        </div>
      `;
    });

    scoreReportQuestionsList.innerHTML = listHtml;

    if (window.Leaderboard && typeof window.Leaderboard.onScoreReportView === 'function') {
      window.Leaderboard.onScoreReportView(correctCount, totalQuestions, timerSeconds);
    }
  }

  function formatCorrectAnswerDisplay(q) {
    if (q.type === 'single') {
      const opt = q.options.find(o => o.id === q.correct_answer);
      return `<strong>${q.correct_answer}.</strong> ${opt ? escapeHtml(opt.text) : ''}`;
    }
    if (q.type === 'multi') {
      const texts = q.correct_answer.map(id => {
        const opt = q.options.find(o => o.id === id);
        return `<strong>${id}.</strong> ${opt ? escapeHtml(opt.text) : ''}`;
      });
      return texts.join(' | ');
    }
    if (q.type === 'yes_no') {
      const list = q.statements.map(st => `[Afirmação ${st.id}: <strong>${q.correct_answer[st.id] === 'Yes' ? 'Sim' : 'Não'}</strong>]`);
      return list.join(' ');
    }
    if (q.type === 'dropdown') {
      const opt = q.options.find(o => o.id === q.correct_answer);
      return `<strong>${opt ? escapeHtml(opt.text) : q.correct_answer}</strong>`;
    }
    if (q.type === 'drag_drop') {
      const parts = q.targets.map((t, idx) => {
        const valId = q.correct_answer[t.id];
        const valObj = q.values.find(v => v.id === valId);
        const label = t.label || `Tarefa ${idx + 1}`;
        return `[${escapeHtml(label)}: <strong>${escapeHtml(valObj ? valObj.text : valId)}</strong>]`;
      });
      return parts.join(' ');
    }
    return '';
  }

  window.jumpToQuestion = function(idx) {
    currentQuestionIndex = idx;
    solutionRevealed[activeQuestions[idx].id] = true;
    switchView('question');
  };

  document.getElementById('btnFilterReportAll').addEventListener('click', (e) => {
    setActiveReportFilter(e.currentTarget);
    renderScoreReport('all');
  });
  document.getElementById('btnFilterReportWrong').addEventListener('click', (e) => {
    setActiveReportFilter(e.currentTarget);
    renderScoreReport('wrong');
  });
  document.getElementById('btnFilterReportRight').addEventListener('click', (e) => {
    setActiveReportFilter(e.currentTarget);
    renderScoreReport('right');
  });

  function setActiveReportFilter(activeBtn) {
    document.querySelectorAll('#scoreReportView .filter-pill').forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
  }

  // ========================================================================
  // RESTART EXAM (CUSTOM MODAL & DIRECT HANDLERS)
  // ========================================================================
  const restartModal = document.getElementById('restartModal');
  const btnCancelRestartModal = document.getElementById('btnCancelRestartModal');
  const btnConfirmRestartModal = document.getElementById('btnConfirmRestartModal');

  function openRestartModal() {
    if (restartModal) {
      restartModal.classList.add('active');
    } else {
      executeRestart();
    }
  }

  function closeRestartModal() {
    if (restartModal) {
      restartModal.classList.remove('active');
    }
  }

  function executeRestart() {
    closeRestartModal();
    failedInPreviousAttempt.clear();
    activeQuestions.forEach(q => {
      if (!isQuestionCorrect(q)) {
        failedInPreviousAttempt.add(q.id);
      }
    });
    attemptCount++;
    examStates[currentExamId].attemptCount = attemptCount;
    try {
      const prefix = currentExamId === 'simulado1' ? 'ai901' : 'ai901_sim2';
      sessionStorage.setItem(`${prefix}_attempt_count`, String(attemptCount));
      sessionStorage.setItem(`${prefix}_failed_questions`, JSON.stringify([...failedInPreviousAttempt]));
    } catch (e) {}

    for (const key of Object.keys(userAnswers)) delete userAnswers[key];
    flaggedQuestions.clear();
    for (const key of Object.keys(solutionRevealed)) delete solutionRevealed[key];
    timerSeconds = 0;
    examStates[currentExamId].timerSeconds = 0;
    updateTimerDisplay();
    startTimer();
    currentQuestionIndex = 0;
    examStates[currentExamId].currentQuestionIndex = 0;

    filterPills.forEach((p, idx) => {
      if (idx === 0) p.classList.add('active');
      else p.classList.remove('active');
    });

    switchView('question');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  window.restartExamDirect = openRestartModal;
  window.executeRestartDirect = executeRestart;

  if (btnRestartExam) {
    btnRestartExam.addEventListener('click', (e) => {
      e.preventDefault();
      openRestartModal();
    });
  }

  if (btnCancelRestartModal) {
    btnCancelRestartModal.addEventListener('click', (e) => {
      e.preventDefault();
      closeRestartModal();
    });
  }

  if (btnConfirmRestartModal) {
    btnConfirmRestartModal.addEventListener('click', (e) => {
      e.preventDefault();
      executeRestart();
    });
  }

  if (restartModal) {
    restartModal.addEventListener('click', (e) => {
      if (e.target === restartModal) closeRestartModal();
    });
  }
  if (finishModal) {
    finishModal.addEventListener('click', (e) => {
      if (e.target === finishModal) finishModal.classList.remove('active');
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeRestartModal();
      if (finishModal) finishModal.classList.remove('active');
    }
  });

  // ========================================================================
  // INITIALIZATION
  // ========================================================================
  initTheme();
  updateExamMetadataUI();
  updateTimerDisplay();
  startTimer();
  renderCurrentQuestion();
});
