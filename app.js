// ==========================================================================
// PORTAL DE SIMULADOS POR CURSO (MICROSOFT, AWS, GOOGLE CLOUD) - APP.JS
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // ========================================================================
  // 1. CATÁLOGO DE CURSOS E SIMULADOS
  // ========================================================================
  const EXAMS_CONFIG = {
    simulado1: {
      id: 'simulado1',
      courseId: 'ai-901',
      courseCode: 'AI-901',
      shortName: 'Simulado 1 (50Q)',
      title: 'Simulado 1: Microsoft Practice Assessment Oficial',
      badge: 'OFICIAL (50Q)',
      subtitle: 'Exame AI-901: Microsoft Azure AI Fundamentals (50 Questões Oficiais)',
      description: 'Avaliação prática oficial do Microsoft Learn cobrindo todos os conceitos fundamentais de IA, IA Responsável e implementação com o Microsoft Foundry.',
      suggestedTime: '45 min',
      reportSubtitle: 'Microsoft Practice Assessment for Exam AI-901: Microsoft Azure AI Fundamentals (50 Questões)',
      leaderboardTitle: 'Ranking Geral da Turma - AI-901 Simulado 1 (50Q)',
      modalLeaderboardTitle: 'Ranking da Turma - AI-901 (Simulado 1 - 50Q)',
      questions: typeof SIMULADO_QUESTIONS !== 'undefined' ? SIMULADO_QUESTIONS : []
    },
    simulado2: {
      id: 'simulado2',
      courseId: 'ai-901',
      courseCode: 'AI-901',
      shortName: 'Simulado 2 (30Q)',
      title: 'Simulado 2: Questões de Exame ExamTopics (PT-BR)',
      badge: 'SIMULADO 2 (30Q)',
      subtitle: 'Exame AI-901: 30 Questões Extraídas ExamTopics Traduzidas e Comentadas (PT-BR)',
      description: 'Bateria de 30 questões reais extraídas do ExamTopics, incluindo questões de código Python (Azure Speech SDK, OpenAI Responses API, Content Understanding), Hotspot e Arrastar e Soltar.',
      suggestedTime: '35 min',
      reportSubtitle: 'Simulado 2 (ExamTopics) for Exam AI-901: Microsoft Azure AI Fundamentals (30 Questões)',
      leaderboardTitle: 'Ranking Geral da Turma - AI-901 Simulado 2 (30Q ExamTopics)',
      modalLeaderboardTitle: 'Ranking da Turma - AI-901 (Simulado 2 - 30Q)',
      questions: typeof SIMULADO_2_QUESTIONS !== 'undefined' ? SIMULADO_2_QUESTIONS : []
    },
    az900_1: {
      id: 'az900_1',
      courseId: 'az-900',
      courseCode: 'AZ-900',
      shortName: 'Simulado 1 AZ-900 (73Q)',
      title: 'Simulado 1: Microsoft AZ-900 (Quizizz 2024 - 73 Questões)',
      badge: 'AZ-900 (73Q)',
      subtitle: 'Exame AZ-900: Microsoft Azure Fundamentals (73 Questões Comentadas PT-BR)',
      description: 'Bateria completa de 73 questões cobrindo Conceitos da Nuvem (IaaS, PaaS, SaaS, CapEx/OpEx), Arquitetura e Serviços do Azure (VMs, Redes, Armazenamento, Entra ID) e Governança e Gerenciamento (RBAC, Locks, Policy, TCO, Advisor).',
      suggestedTime: '60 min',
      reportSubtitle: 'Simulado 1 (Quizizz 2024 - 02) for Exam AZ-900: Microsoft Azure Fundamentals (73 Questões)',
      leaderboardTitle: 'Ranking Geral da Turma - AZ-900 Simulado 1 (73Q)',
      modalLeaderboardTitle: 'Ranking da Turma - AZ-900 (Simulado 1 - 73Q)',
      questions: typeof AZ900_SIMULADO_1_QUESTIONS !== 'undefined' ? AZ900_SIMULADO_1_QUESTIONS : []
    },
    dp900_1: {
      id: 'dp900_1',
      courseId: 'dp-900',
      courseCode: 'DP-900',
      shortName: 'Simulado 1 (32Q)',
      title: 'Simulado 1: Microsoft DP-900 (Simulado 02 - 32 Questões)',
      badge: 'DP-900 SIM 1 (32Q)',
      subtitle: 'Exame DP-900: Microsoft Azure Data Fundamentals (32 Questões + Drag & Drop)',
      description: 'Avaliação prática do DP-900 incluindo questões interativas de Arrastar e Soltar, Azure SQL, Cosmos DB, Armazenamento do Azure, Data Factory e análise de dados.',
      suggestedTime: '35 min',
      reportSubtitle: 'Simulado 1 for Exam DP-900: Microsoft Azure Data Fundamentals (32 Questões)',
      leaderboardTitle: 'Ranking Geral da Turma - DP-900 Simulado 1 (32Q)',
      modalLeaderboardTitle: 'Ranking da Turma - DP-900 (Simulado 1 - 32Q)',
      questions: typeof DP900_SIMULADO_1_QUESTIONS !== 'undefined' ? DP900_SIMULADO_1_QUESTIONS : []
    },
    dp900_2: {
      id: 'dp900_2',
      courseId: 'dp-900',
      courseCode: 'DP-900',
      shortName: 'Prova Final (42Q)',
      title: 'Simulado 2: Prova Final Microsoft DP-900 (42 Questões)',
      badge: 'PROVA FINAL (42Q)',
      subtitle: 'Exame DP-900: Prova Final Microsoft Azure Data Fundamentals (42 Questões)',
      description: 'Prova final completa de 42 questões cobrindo bancos de dados relacionais (SQL Database, Managed Instance, SQL VM), NoSQL (Cosmos DB, Tabelas, Blobs), replicação (GRS, RA-GRS) e processamento em tempo real.',
      suggestedTime: '45 min',
      reportSubtitle: 'Prova Final for Exam DP-900: Microsoft Azure Data Fundamentals (42 Questões)',
      leaderboardTitle: 'Ranking Geral da Turma - DP-900 Prova Final (42Q)',
      modalLeaderboardTitle: 'Ranking da Turma - DP-900 (Prova Final - 42Q)',
      questions: typeof DP900_SIMULADO_2_QUESTIONS !== 'undefined' ? DP900_SIMULADO_2_QUESTIONS : []
    },
    dp900_3: {
      id: 'dp900_3',
      courseId: 'dp-900',
      courseCode: 'DP-900',
      shortName: 'Simulado 3 (32Q)',
      title: 'Simulado 3: Microsoft DP-900 (Simulado 03 - 32 Questões)',
      badge: 'DP-900 SIM 3 (32Q)',
      subtitle: 'Exame DP-900: Microsoft Azure Data Fundamentals (32 Questões + Drag & Drop)',
      description: 'Bateria avançada do DP-900 com questões de consultas SQL (GROUP BY, AVG), segurança de banco de dados (Firewall, Autenticação, Criptografia), ELT no Data Warehouse e visualizações do Power BI.',
      suggestedTime: '35 min',
      reportSubtitle: 'Simulado 3 for Exam DP-900: Microsoft Azure Data Fundamentals (32 Questões)',
      leaderboardTitle: 'Ranking Geral da Turma - DP-900 Simulado 3 (32Q)',
      modalLeaderboardTitle: 'Ranking da Turma - DP-900 (Simulado 3 - 32Q)',
      questions: typeof DP900_SIMULADO_3_QUESTIONS !== 'undefined' ? DP900_SIMULADO_3_QUESTIONS : []
    },
    aws_1: {
      id: 'aws_1',
      courseId: 'aws-clf-c02',
      courseCode: 'CLF-C02',
      shortName: 'Simulado 1 (65Q)',
      title: 'Simulado 1: AWS Certified Cloud Practitioner - Simulado 01 (65Q)',
      badge: 'AWS SIM 1 (65Q)',
      subtitle: 'Exame AWS CLF-C02: AWS Certified Cloud Practitioner (65 Questões Comentadas)',
      description: 'Simulado completo de 65 questões no padrão oficial da prova AWS Cloud Practitioner (CLF-C02), cobrindo EC2, S3, VPC, IAM, RDS, CloudFront, Well-Architected Framework, faturamento e suporte.',
      suggestedTime: '60 min',
      reportSubtitle: 'Simulado 01 for Exam AWS CLF-C02: AWS Certified Cloud Practitioner (65 Questões)',
      leaderboardTitle: 'Ranking Geral da Turma - AWS CLF-C02 Simulado 1 (65Q)',
      modalLeaderboardTitle: 'Ranking da Turma - AWS CLF-C02 (Simulado 1 - 65Q)',
      questions: typeof AWS_SIMULADO_1_QUESTIONS !== 'undefined' ? AWS_SIMULADO_1_QUESTIONS : []
    },
    aws_2: {
      id: 'aws_2',
      courseId: 'aws-clf-c02',
      courseCode: 'CLF-C02',
      shortName: 'Simulado 2 (50Q)',
      title: 'Simulado 2: AWS Cloud Practitioner 1.1 (50 Questões)',
      badge: 'AWS SIM 2 (50Q)',
      subtitle: 'Exame AWS CLF-C02: AWS Cloud Practitioner 1.1 (50 Questões Comentadas)',
      description: 'Bateria de 50 questões focada no Modelo de Responsabilidade Compartilhada da AWS, segurança, arquiteturas resilientes, elasticidade, serviços gerenciados e otimização de custos.',
      suggestedTime: '45 min',
      reportSubtitle: 'Simulado 2 (1.1) for Exam AWS CLF-C02: AWS Certified Cloud Practitioner (50 Questões)',
      leaderboardTitle: 'Ranking Geral da Turma - AWS CLF-C02 Simulado 2 (50Q)',
      modalLeaderboardTitle: 'Ranking da Turma - AWS CLF-C02 (Simulado 2 - 50Q)',
      questions: typeof AWS_SIMULADO_2_QUESTIONS !== 'undefined' ? AWS_SIMULADO_2_QUESTIONS : []
    },
    aws_3: {
      id: 'aws_3',
      courseId: 'aws-clf-c02',
      courseCode: 'CLF-C02',
      shortName: 'Simulado 3 (65Q)',
      title: 'Simulado 3: AWS Certified Cloud Practitioner - Simulado 02 (65Q)',
      badge: 'AWS SIM 3 (65Q)',
      subtitle: 'Exame AWS CLF-C02: AWS Certified Cloud Practitioner - Simulado 02 (65 Questões)',
      description: 'Segunda bateria completa de 65 questões para a certificação AWS Cloud Practitioner, cobrindo cenários práticos de S3, Route 53, Auto Scaling, CloudTrail, CloudWatch, Trusted Advisor e AWS Organizations.',
      suggestedTime: '60 min',
      reportSubtitle: 'Simulado 02 for Exam AWS CLF-C02: AWS Certified Cloud Practitioner (65 Questões)',
      leaderboardTitle: 'Ranking Geral da Turma - AWS CLF-C02 Simulado 3 (65Q)',
      modalLeaderboardTitle: 'Ranking da Turma - AWS CLF-C02 (Simulado 3 - 65Q)',
      questions: typeof AWS_SIMULADO_3_QUESTIONS !== 'undefined' ? AWS_SIMULADO_3_QUESTIONS : []
    },
    gcp_1: {
      id: 'gcp_1',
      courseId: 'gcp-ace',
      courseCode: 'GCP-ACE',
      shortName: 'Simulado 1 (50Q)',
      title: 'Simulado 1: Google Cloud Associate Cloud Engineer (50 Questões)',
      badge: 'GCP SIM 1 (50Q)',
      subtitle: 'Exame GCP-ACE: Google Cloud Associate Cloud Engineer — Simulado 1 (50Q PT-BR)',
      description: 'Primeiro simulado completo de 50 questões traduzidas e comentadas em PT-BR para a certificação Google Cloud Associate Cloud Engineer, cobrindo Compute Engine, GKE, IAM, gcloud CLI, VPC e Cloud Storage.',
      suggestedTime: '50 min',
      reportSubtitle: 'Simulado 1 for Google Cloud Associate Cloud Engineer (50 Questões)',
      leaderboardTitle: 'Ranking Geral da Turma - Google Cloud ACE Simulado 1 (50Q)',
      modalLeaderboardTitle: 'Ranking da Turma - Google Cloud ACE (Simulado 1 - 50Q)',
      questions: typeof GCP_SIMULADO_1_QUESTIONS !== 'undefined' ? GCP_SIMULADO_1_QUESTIONS : []
    },
    gcp_3: {
      id: 'gcp_3',
      courseId: 'gcp-ace',
      courseCode: 'GCP-ACE',
      shortName: 'Simulado 3 (50Q)',
      title: 'Simulado 3: Google Cloud Associate Cloud Engineer (50 Questões)',
      badge: 'GCP SIM 3 (50Q)',
      subtitle: 'Exame GCP-ACE: Google Cloud Associate Cloud Engineer — Simulado 3 (50Q PT-BR)',
      description: 'Bateria de 50 questões de cenários técnicos do Google Cloud (Shielded VMs, Preemptible VMs, Cloud Run, App Engine, BigQuery, Cloud SQL, Cloud Pub/Sub, Cloud Monitoring e Kubernetes Engine).',
      suggestedTime: '50 min',
      reportSubtitle: 'Simulado 3 for Google Cloud Associate Cloud Engineer (50 Questões)',
      leaderboardTitle: 'Ranking Geral da Turma - Google Cloud ACE Simulado 3 (50Q)',
      modalLeaderboardTitle: 'Ranking da Turma - Google Cloud ACE (Simulado 3 - 50Q)',
      questions: typeof GCP_SIMULADO_3_QUESTIONS !== 'undefined' ? GCP_SIMULADO_3_QUESTIONS : []
    },
    gcp_4: {
      id: 'gcp_4',
      courseId: 'gcp-ace',
      courseCode: 'GCP-ACE',
      shortName: 'Simulado 4 (50Q)',
      title: 'Simulado 4: Google Cloud Associate Cloud Engineer (50 Questões)',
      badge: 'GCP SIM 4 (50Q)',
      subtitle: 'Exame GCP-ACE: Google Cloud Associate Cloud Engineer — Simulado 4 (50Q PT-BR)',
      description: 'Quarto simulado completo de 50 questões traduzidas e comentadas para o exame Associate Cloud Engineer, abordando regras de firewall VPC, Cloud Billing, Service Accounts, Cloud Spanner, Bigtable e Deployment Manager.',
      suggestedTime: '50 min',
      reportSubtitle: 'Simulado 4 for Google Cloud Associate Cloud Engineer (50 Questões)',
      leaderboardTitle: 'Ranking Geral da Turma - Google Cloud ACE Simulado 4 (50Q)',
      modalLeaderboardTitle: 'Ranking da Turma - Google Cloud ACE (Simulado 4 - 50Q)',
      questions: typeof GCP_SIMULADO_4_QUESTIONS !== 'undefined' ? GCP_SIMULADO_4_QUESTIONS : []
    }
  };

  const COURSES_CATALOG = [
    {
      id: 'ai-901',
      code: 'AI-901',
      title: 'Microsoft Azure AI Fundamentals',
      provider: 'microsoft',
      providerName: '🟦 Microsoft Azure',
      accent: '#0078d4',
      status: 'available',
      description: 'Fundamentos de Inteligência Artificial, IA Generativa, Agentes de IA, Visão Computacional, Fala e Microsoft Foundry.',
      exams: ['simulado1', 'simulado2']
    },
    {
      id: 'az-900',
      code: 'AZ-900',
      title: 'Microsoft Azure Fundamentals',
      provider: 'microsoft',
      providerName: '🟦 Microsoft Azure',
      accent: '#0078d4',
      status: 'available',
      description: 'Conceitos de nuvem, arquitetura e serviços principais do Azure (Computação, Rede, Armazenamento), segurança e governança.',
      exams: ['az900_1']
    },
    {
      id: 'dp-900',
      code: 'DP-900',
      title: 'Microsoft Azure Data Fundamentals',
      provider: 'microsoft',
      providerName: '🟦 Microsoft Azure',
      accent: '#005a9e',
      status: 'available',
      description: 'Conceitos fundamentais de bancos de dados relacionais e não relacionais, workloads transacionais e análises no Microsoft Azure.',
      exams: ['dp900_1', 'dp900_2', 'dp900_3']
    },
    {
      id: 'aws-clf-c02',
      code: 'CLF-C02',
      title: 'AWS Certified Cloud Practitioner',
      provider: 'aws',
      providerName: '🟧 Amazon Web Services',
      accent: '#ff9900',
      status: 'available',
      description: 'Fundamentos da nuvem AWS, infraestrutura global, responsabilidade compartilhada, segurança, EC2, S3, RDS e faturamento.',
      exams: ['aws_1', 'aws_2', 'aws_3']
    },
    {
      id: 'gcp-ace',
      code: 'GCP-ACE',
      title: 'Google Cloud Associate Engineer',
      provider: 'google',
      providerName: '🟨 Google Cloud Platform',
      accent: '#4285f4',
      status: 'available',
      description: 'Implantação de aplicativos, monitoramento de operações e gerenciamento de soluções corporativas no Google Cloud Engine & GKE.',
      exams: ['gcp_1', 'gcp_3', 'gcp_4']
    }
  ];

  // ========================================================================
  // 2. ESTADO GLOBAL E DETECÇÃO DE ROTA INICIAL
  // ========================================================================
  let selectedProviderFilter = 'all';
  let selectedCourseId = 'ai-901';

  function detectInitialRoute() {
    if (window.DEFAULT_EXAM_ID === 'simulado2') {
      return { view: 'lobby', examId: 'simulado2' };
    }
    const params = new URLSearchParams(window.location.search);
    const simParam = (params.get('simulado') || params.get('exam') || '').toLowerCase();
    if (simParam === '2' || simParam === 'simulado2') {
      return { view: 'lobby', examId: 'simulado2' };
    }
    if (simParam === '1' || simParam === 'simulado1') {
      return { view: 'lobby', examId: 'simulado1' };
    }
    if (simParam === 'az900' || simParam === 'az-900' || simParam === 'az900_1') {
      return { view: 'lobby', examId: 'az900_1' };
    }
    if (EXAMS_CONFIG[simParam]) {
      return { view: 'lobby', examId: simParam };
    }
    if (window.location.pathname.toLowerCase().includes('/simulado2')) {
      return { view: 'lobby', examId: 'simulado2' };
    }
    return { view: 'hub', examId: 'simulado1' };
  }

  const initialRoute = detectInitialRoute();
  let currentExamId = initialRoute.examId;
  if (EXAMS_CONFIG[currentExamId]) {
    selectedCourseId = EXAMS_CONFIG[currentExamId].courseId;
  }
  let activeQuestions = EXAMS_CONFIG[currentExamId].questions;
  let totalQuestions = activeQuestions.length;

  // Per-exam state storage
  const examStates = {};
  Object.keys(EXAMS_CONFIG).forEach(examKey => {
    examStates[examKey] = {
      currentQuestionIndex: 0,
      userAnswers: {},
      flaggedQuestions: new Set(),
      solutionRevealed: {},
      timerSeconds: 0,
      attemptCount: 1,
      failedInPreviousAttempt: new Set()
    };
    try {
      const prefix = examKey === 'simulado1' ? 'ai901' : (examKey === 'simulado2' ? 'ai901_sim2' : examKey);
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

  let selectedDragChipValue = null;

  // Modes: 'study' (no timer, instant solutions) or 'exam' (timer active, solutions hidden until finish)
  let appMode = 'study';

  // Active Screen: 'hub', 'lobby', 'question', 'review', or 'score'
  let currentView = initialRoute.view;

  // DOM Elements
  const hubView = document.getElementById('hubView');
  const coursesGridContainer = document.getElementById('coursesGridContainer');
  const courseQuizzesSection = document.getElementById('courseQuizzesSection');
  const lobbyView = document.getElementById('lobbyView');
  const lobbyCard = document.getElementById('lobbyCard');
  const questionView = document.getElementById('questionView');
  const reviewView = document.getElementById('reviewView');
  const scoreReportView = document.getElementById('scoreReportView');
  const questionCard = document.getElementById('questionCard');
  const progressFill = document.getElementById('progressFill');
  const progressText = document.getElementById('progressText');
  const progressStrip = document.getElementById('progressStrip');

  const brandHomeLink = document.getElementById('brandHomeLink');
  const btnGoHub = document.getElementById('btnGoHub');
  const examActiveControls = document.getElementById('examActiveControls');
  const headerMainTitle = document.getElementById('headerMainTitle');
  const headerBadge = document.getElementById('headerBadge');
  const headerSubTitle = document.getElementById('headerSubTitle');
  const btnSelectSimulado1 = document.getElementById('btnSelectSimulado1');
  const btnSelectSimulado2 = document.getElementById('btnSelectSimulado2');
  const btnCopyShareLink = document.getElementById('btnCopyShareLink');

  const modeToggleBtn = document.getElementById('modeToggleBtn');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const timerBox = document.getElementById('timerBox');
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

  // Helpers
  function formatMarkdown(text) {
    if (!text) return '';
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code style="background: rgba(0,0,0,0.06); padding: 2px 4px; border-radius: 3px; font-family: monospace;">$1</code>')
      .replace(/\n/g, '<br>');
  }

  function escapeHtml(text) {
    if (!text) return '';
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // ========================================================================
  // 3. CRONÔMETRO (ATIVO SOMENTE NO MODO SIMULADO DE EXAME)
  // ========================================================================
  function updateTimerDisplay() {
    if (!timerDisplay) return;
    const mins = String(Math.floor(timerSeconds / 60)).padStart(2, '0');
    const secs = String(timerSeconds % 60).padStart(2, '0');
    timerDisplay.textContent = `${mins}:${secs}`;
  }

  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  function syncTimerStateWithModeAndView() {
    const isDuringExam = (currentView === 'question' || currentView === 'review');
    if (appMode === 'exam' && isDuringExam) {
      if (timerBox) timerBox.style.display = 'flex';
      if (!timerInterval) {
        timerInterval = setInterval(() => {
          timerSeconds++;
          examStates[currentExamId].timerSeconds = timerSeconds;
          updateTimerDisplay();
        }, 1000);
      }
    } else {
      stopTimer();
      if (timerBox) timerBox.style.display = 'none';
    }
  }

  function setAppMode(newMode) {
    appMode = newMode;
    if (modeToggleBtn) {
      if (appMode === 'exam') {
        modeToggleBtn.className = 'mode-badge mode-exam';
        modeToggleBtn.innerHTML = '<span>📝</span> Modo Simulado (Exame)';
      } else {
        modeToggleBtn.className = 'mode-badge mode-study';
        modeToggleBtn.innerHTML = '<span>💡</span> Modo Estudo';
      }
    }
    syncTimerStateWithModeAndView();
  }

  // ========================================================================
  // 4. GERENCIAMENTO DE SIMULADO ATIVO E CABEÇALHO
  // ========================================================================
  function loadExamPointers(targetExamId) {
    if (!EXAMS_CONFIG[targetExamId]) return;
    examStates[currentExamId].currentQuestionIndex = currentQuestionIndex;
    examStates[currentExamId].timerSeconds = timerSeconds;

    currentExamId = targetExamId;
    activeQuestions = EXAMS_CONFIG[currentExamId].questions;
    totalQuestions = activeQuestions.length;
    currentQuestionIndex = examStates[currentExamId].currentQuestionIndex;
    userAnswers = examStates[currentExamId].userAnswers;
    flaggedQuestions = examStates[currentExamId].flaggedQuestions;
    solutionRevealed = examStates[currentExamId].solutionRevealed;
    attemptCount = examStates[currentExamId].attemptCount;
    failedInPreviousAttempt = examStates[currentExamId].failedInPreviousAttempt;
    timerSeconds = examStates[currentExamId].timerSeconds;
    selectedDragChipValue = null;
  }

  function updateHeaderAndExamMetadata() {
    const cfg = EXAMS_CONFIG[currentExamId];
    totalQuestions = activeQuestions.length;
    const targetPass = Math.ceil(totalQuestions * 0.8);

    if (currentView === 'hub') {
      if (headerMainTitle) headerMainTitle.textContent = 'Portal de Simulados Cloud & IA';
      if (headerBadge) headerBadge.textContent = 'HUB OFICIAL';
      if (headerSubTitle) headerSubTitle.textContent = 'Preparatório Oficial para Certificações Microsoft, AWS e Google Cloud';
      if (examActiveControls) examActiveControls.style.display = 'none';
    } else {
      if (headerMainTitle) headerMainTitle.textContent = cfg.title;
      if (headerBadge) headerBadge.textContent = cfg.badge;
      if (headerSubTitle) headerSubTitle.textContent = cfg.subtitle;
      if (examActiveControls) {
        examActiveControls.style.display = (currentView === 'question' || currentView === 'review') ? 'inline-flex' : 'none';
      }
    }

    if (scoreReportSubtitle) scoreReportSubtitle.textContent = cfg.reportSubtitle;
    if (leaderboardTitle) leaderboardTitle.textContent = cfg.leaderboardTitle;
    if (modalLeaderboardTitle) modalLeaderboardTitle.textContent = cfg.modalLeaderboardTitle;

    if (reviewTotalQuestionsText) reviewTotalQuestionsText.textContent = String(totalQuestions);
    if (countAllReview) countAllReview.textContent = String(totalQuestions);
    if (reportAllCount) reportAllCount.textContent = String(totalQuestions);
    if (targetCorrectText) targetCorrectText.textContent = `${targetPass} acertos de ${totalQuestions}`;

    const switcherGroup = document.querySelector('.exam-switcher-group');
    if (switcherGroup) {
      const currentCourse = COURSES_CATALOG.find(c => c.id === cfg.courseId);
      const courseExamIds = currentCourse ? currentCourse.exams : [currentExamId];
      switcherGroup.innerHTML = courseExamIds.map((exId, idx) => {
        const exObj = EXAMS_CONFIG[exId];
        const isActive = exId === currentExamId;
        const icon = idx === 0 ? '📘' : '📙';
        return `
          <button class="exam-switch-btn ${isActive ? 'active' : ''}" data-switch-exam="${exObj.id}" title="${escapeHtml(exObj.title)}">
            <span>${icon}</span> ${escapeHtml(exObj.shortName)}
          </button>
        `;
      }).join('');

      switcherGroup.querySelectorAll('button[data-switch-exam]').forEach(btn => {
        btn.addEventListener('click', () => {
          const targetId = btn.getAttribute('data-switch-exam');
          if (targetId && targetId !== currentExamId) {
            openExamLobby(targetId);
          }
        });
      });
    }

    if (window.Leaderboard && typeof window.Leaderboard.setActiveExam === 'function') {
      window.Leaderboard.setActiveExam(currentExamId);
    }

    updateTimerDisplay();
    syncTimerStateWithModeAndView();
  }

  function buildShareUrlForExam(examId) {
    try {
      const u = new URL(window.location.href);
      u.search = '';
      u.hash = '';
      let basePath = u.pathname.replace(/\/simulado2\/?(index\.html)?$/i, '/').replace(/\/index\.html$/i, '/');
      if (!basePath.endsWith('/')) basePath += '/';
      if (examId === 'simulado2') {
        u.pathname = basePath + 'simulado2/';
      } else if (examId === 'simulado1') {
        u.pathname = basePath;
        u.searchParams.set('simulado', '1');
      } else if (examId && EXAMS_CONFIG[examId]) {
        u.pathname = basePath;
        u.searchParams.set('simulado', examId);
      } else {
        u.pathname = basePath;
      }
      return u.toString();
    } catch (e) {
      return window.location.href;
    }
  }

  async function copyUrlToClipboard(url, buttonEl) {
    try {
      await navigator.clipboard.writeText(url);
    } catch (err) {
      const tempInput = document.createElement('input');
      tempInput.value = url;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
    }

    if (buttonEl) {
      const originalHtml = buttonEl.innerHTML;
      buttonEl.innerHTML = '<span>✅</span> <span>Link Copiado!</span>';
      setTimeout(() => {
        buttonEl.innerHTML = originalHtml;
      }, 2000);
    }
  }

  if (btnCopyShareLink) {
    btnCopyShareLink.addEventListener('click', () => {
      const targetUrl = currentView === 'hub' ? buildShareUrlForExam(null) : buildShareUrlForExam(currentExamId);
      copyUrlToClipboard(targetUrl, btnCopyShareLink);
    });
  }

  // ========================================================================
  // 5. PÁGINA INICIAL POR CURSO (HUB VIEW) & LOBBY PRÉ-EXAME
  // ========================================================================
  function renderHubView() {
    // 1. Render Course Cards Grid
    const filteredCourses = COURSES_CATALOG.filter(c => {
      if (selectedProviderFilter === 'all') return true;
      return c.provider === selectedProviderFilter;
    });

    if (!filteredCourses.some(c => c.id === selectedCourseId) && filteredCourses.length > 0) {
      selectedCourseId = filteredCourses[0].id;
    }

    let coursesHtml = '';
    filteredCourses.forEach(course => {
      const isSelected = course.id === selectedCourseId;
      const isAvailable = course.status === 'available';
      const quizCount = course.exams.length;

      coursesHtml += `
        <div class="course-card ${isSelected ? 'selected' : ''} ${!isAvailable ? 'coming-soon' : ''}"
             style="--course-accent: ${course.accent};"
             data-course-id="${course.id}">
          <div>
            <div class="course-card-top">
              <span class="course-code-badge">${escapeHtml(course.code)}</span>
              <span class="course-status-pill ${isAvailable ? 'available' : 'soon'}">
                ${isAvailable ? `🟢 ${quizCount} ${quizCount === 1 ? 'Simulado' : 'Simulados'}` : '⏳ Em Breve'}
              </span>
            </div>
            <div class="course-provider-label">${escapeHtml(course.providerName)}</div>
            <h3 class="course-title">${escapeHtml(course.title)}</h3>
            <p class="course-desc">${escapeHtml(course.description)}</p>
          </div>
          <div class="course-card-footer">
            <span>${isAvailable ? 'Ver Simulados do Curso' : 'Estrutura Preparada'}</span>
            <span>→</span>
          </div>
        </div>
      `;
    });

    if (coursesGridContainer) {
      coursesGridContainer.innerHTML = coursesHtml;
      coursesGridContainer.querySelectorAll('.course-card[data-course-id]').forEach(card => {
        card.addEventListener('click', () => {
          selectedCourseId = card.getAttribute('data-course-id');
          renderHubView();
          if (courseQuizzesSection) {
            courseQuizzesSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        });
      });
    }

    // 2. Render Selected Course's Quizzes List
    const selectedCourse = COURSES_CATALOG.find(c => c.id === selectedCourseId) || COURSES_CATALOG[0];
    if (!courseQuizzesSection || !selectedCourse) return;

    if (selectedCourse.exams.length === 0) {
      courseQuizzesSection.innerHTML = `
        <div class="course-quizzes-header">
          <div>
            <span class="course-code-badge" style="margin-bottom: 6px; display: inline-block;">${escapeHtml(selectedCourse.code)}</span>
            <h2 style="font-size: 1.4rem; margin: 4px 0;">${escapeHtml(selectedCourse.title)}</h2>
            <p style="font-size: 0.9rem; color: var(--text-secondary);">${escapeHtml(selectedCourse.description)}</p>
          </div>
        </div>
        <div style="text-align: center; padding: 2.5rem 1rem; color: var(--text-secondary);">
          <div style="font-size: 2.5rem; margin-bottom: 0.75rem;">🚧</div>
          <h3 style="color: var(--text-primary); margin-bottom: 0.5rem;">Simulados deste curso em preparação!</h3>
          <p style="max-width: 520px; margin: 0 auto 1.25rem; font-size: 0.92rem;">
            A estrutura para o curso <strong>${escapeHtml(selectedCourse.code)} - ${escapeHtml(selectedCourse.title)}</strong> já está pronta no portal. Assim que você enviar o arquivo de questões deste exame, os simulados aparecerão listados aqui!
          </p>
          <button class="btn-ms btn-ms-primary" id="btnBackToAI901">
            <span>📘</span> Ver Simulados Disponíveis (AI-901)
          </button>
        </div>
      `;
      const btnBackAI = document.getElementById('btnBackToAI901');
      if (btnBackAI) {
        btnBackAI.addEventListener('click', () => {
          selectedProviderFilter = 'all';
          selectedCourseId = 'ai-901';
          document.querySelectorAll('.provider-tab').forEach(t => {
            t.classList.toggle('active', t.getAttribute('data-provider') === 'all');
          });
          renderHubView();
        });
      }
      return;
    }

    const quizzesCardsHtml = selectedCourse.exams.map(examId => {
      const ex = EXAMS_CONFIG[examId];
      const qCount = ex.questions.length;
      const passCount = Math.ceil(qCount * 0.8);

      return `
        <div class="quiz-item-card">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem; gap: 8px;">
              <span class="ms-badge-beta">${escapeHtml(ex.badge)}</span>
              <span style="font-size: 0.8rem; color: var(--text-secondary); font-weight: 600;">Código: ${escapeHtml(ex.courseCode)}</span>
            </div>
            <h3 style="font-size: 1.18rem; margin-bottom: 0.45rem; color: var(--text-primary);">${escapeHtml(ex.title)}</h3>
            <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.45;">${escapeHtml(ex.description)}</p>

            <div class="quiz-meta-tags">
              <span class="quiz-meta-tag">📋 <strong>${qCount} Questões</strong></span>
              <span class="quiz-meta-tag">🎯 Meta: <strong>80% (${passCount}/${qCount})</strong></span>
              <span class="quiz-meta-tag">⏱️ Tempo sugerido: <strong>${escapeHtml(ex.suggestedTime)}</strong></span>
              <span class="quiz-meta-tag">🇵🇹 <strong>Português (PT-BR)</strong></span>
            </div>
          </div>

          <div class="quiz-card-actions">
            <button class="btn-ms btn-ms-primary" data-open-lobby="${ex.id}" style="flex: 1; justify-content: center;">
              <span>🚀</span> Selecionar Simulado
            </button>
            <button class="btn-ms btn-ms-secondary" data-open-ranking="${ex.id}" title="Ver Ranking da Turma deste Simulado">
              <span>🏆</span> Ranking
            </button>
            <button class="btn-ms btn-ms-secondary" data-share-exam="${ex.id}" title="Copiar link direto deste simulado">
              <span>🔗</span> Link
            </button>
          </div>
        </div>
      `;
    }).join('');

    courseQuizzesSection.innerHTML = `
      <div class="course-quizzes-header">
        <div>
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
            <span class="course-code-badge">${escapeHtml(selectedCourse.code)}</span>
            <span style="font-size: 0.85rem; color: var(--text-secondary); font-weight: 600;">${escapeHtml(selectedCourse.providerName)}</span>
          </div>
          <h2 style="font-size: 1.4rem; margin: 2px 0;">Simulados Disponíveis — ${escapeHtml(selectedCourse.title)}</h2>
          <p style="font-size: 0.9rem; color: var(--text-secondary);">Escolha um dos simulados abaixo. O cronômetro só será iniciado se você optar pelo <strong>Modo Simulado (Exame)</strong>.</p>
        </div>
      </div>
      <div class="quizzes-list-grid">
        ${quizzesCardsHtml}
      </div>
    `;

    // Attach quiz card buttons
    courseQuizzesSection.querySelectorAll('button[data-open-lobby]').forEach(btn => {
      btn.addEventListener('click', () => {
        const exId = btn.getAttribute('data-open-lobby');
        openExamLobby(exId);
      });
    });

    courseQuizzesSection.querySelectorAll('button[data-open-ranking]').forEach(btn => {
      btn.addEventListener('click', () => {
        const exId = btn.getAttribute('data-open-ranking');
        loadExamPointers(exId);
        updateHeaderAndExamMetadata();
        if (window.Leaderboard && typeof window.Leaderboard.openModal === 'function') {
          window.Leaderboard.openModal();
        }
      });
    });

    courseQuizzesSection.querySelectorAll('button[data-share-exam]').forEach(btn => {
      btn.addEventListener('click', () => {
        const exId = btn.getAttribute('data-share-exam');
        const url = buildShareUrlForExam(exId);
        copyUrlToClipboard(url, btn);
      });
    });
  }

  // Provider Filter Tabs in Hub
  document.querySelectorAll('.provider-tab[data-provider]').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.provider-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      selectedProviderFilter = tab.getAttribute('data-provider');
      renderHubView();
    });
  });

  // Open Lobby for a specific exam (before starting timer!)
  function openExamLobby(examId) {
    loadExamPointers(examId);
    stopTimer();
    switchView('lobby');
  }

  function renderLobbyView() {
    if (!lobbyCard) return;
    const cfg = EXAMS_CONFIG[currentExamId];
    const qCount = activeQuestions.length;
    const passCount = Math.ceil(qCount * 0.8);
    const answeredSoFar = activeQuestions.filter(q => isQuestionAnswered(q)).length;

    lobbyCard.innerHTML = `
      <div class="lobby-top-bar">
        <button class="btn-ms btn-ms-secondary" id="btnBackToHubFromLobby">
          <span>‹</span> Voltar aos Cursos e Simulados
        </button>
        <div style="display: flex; gap: 8px; align-items: center;">
          <span class="course-code-badge">${escapeHtml(cfg.courseCode)}</span>
          <span class="ms-badge-beta">${escapeHtml(cfg.badge)}</span>
        </div>
      </div>

      <h1 class="lobby-exam-title">${escapeHtml(cfg.title)}</h1>
      <p class="lobby-exam-subtitle">${escapeHtml(cfg.description)}</p>

      <div class="lobby-stats-row">
        <div class="lobby-stat-box">
          <div class="lobby-stat-value">${qCount}</div>
          <div class="lobby-stat-label">Total de Questões</div>
        </div>
        <div class="lobby-stat-box">
          <div class="lobby-stat-value">80% (${passCount}/${qCount})</div>
          <div class="lobby-stat-label">Nota de Aprovação</div>
        </div>
        <div class="lobby-stat-box">
          <div class="lobby-stat-value">${escapeHtml(cfg.suggestedTime)}</div>
          <div class="lobby-stat-label">Tempo Sugerido</div>
        </div>
        <div class="lobby-stat-box">
          <div class="lobby-stat-value">⏸️ Parado</div>
          <div class="lobby-stat-label">Status do Relógio</div>
        </div>
      </div>

      ${answeredSoFar > 0 ? `
        <div class="score-comparison-banner" style="margin-bottom: 1.25rem;">
          <span>📌</span>
          <span>Você possui uma sessão em andamento com <strong>${answeredSoFar} de ${qCount}</strong> questões respondidas. Ao iniciar abaixo, você continuará de onde parou (ou clique em Redefinir para zerar).</span>
        </div>
      ` : ''}

      <h3 style="font-size: 1.1rem; margin-bottom: 0.5rem;">Como você deseja realizar este simulado?</h3>
      <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1rem;">
        Escolha o modo abaixo. <strong>O cronômetro somente será ativado se você escolher o Modo Simulado (Exame).</strong>
      </p>

      <div class="lobby-mode-grid">
        <!-- Modo Estudo (Sem Relógio) -->
        <div class="lobby-mode-card">
          <div>
            <div class="lobby-mode-title" style="color: var(--ms-blue-primary);">
              <span>💡</span> Modo Estudo (Sem Relógio)
            </div>
            <p style="font-size: 0.88rem; color: var(--text-secondary);">
              Ideal para aprender e revisar cada conceito com calma, sem pressão de tempo.
            </p>
            <ul class="lobby-mode-list">
              <li>✅ <strong>Relógio desativado</strong> (sem contagem de tempo)</li>
              <li>✅ Botão <strong>"Mostrar Solução"</strong> liberado em cada questão</li>
              <li>✅ Explicações detalhadas e links para o Microsoft Learn</li>
            </ul>
          </div>
          <button class="btn-ms btn-ms-secondary" id="btnStartStudyMode" style="width: 100%; justify-content: center; padding: 10px 16px; font-size: 0.95rem;">
            <span>💡</span> Iniciar no Modo Estudo
          </button>
        </div>

        <!-- Modo Simulado Exame (Com Relógio) -->
        <div class="lobby-mode-card exam-mode-highlight">
          <div>
            <div class="lobby-mode-title" style="color: #7b1fa2;">
              <span>📝</span> Modo Simulado Exame (Com Relógio)
            </div>
            <p style="font-size: 0.88rem; color: var(--text-secondary);">
              Simulação real da prova de certificação oficial e disputa no Ranking da Turma.
            </p>
            <ul class="lobby-mode-list">
              <li>⏱️ <strong>Inicia o cronômetro oficial</strong> imediatamente</li>
              <li>🔒 Gabarito oculto durante a realização da prova</li>
              <li>🏆 Permite publicar sua nota e tempo no <strong>Ranking da Turma</strong></li>
            </ul>
          </div>
          <button class="btn-ms btn-ms-primary" id="btnStartExamMode" style="width: 100%; justify-content: center; padding: 10px 16px; font-size: 0.95rem; background-color: #7b1fa2; border-color: #7b1fa2;">
            <span>⏱️</span> Iniciar Modo Simulado (Ativar Relógio)
          </button>
        </div>
      </div>
    `;

    const btnBackHub = document.getElementById('btnBackToHubFromLobby');
    if (btnBackHub) {
      btnBackHub.addEventListener('click', () => {
        goToCourseHub();
      });
    }

    const btnStudy = document.getElementById('btnStartStudyMode');
    if (btnStudy) {
      btnStudy.addEventListener('click', () => {
        setAppMode('study');
        switchView('question');
      });
    }

    const btnExam = document.getElementById('btnStartExamMode');
    if (btnExam) {
      btnExam.addEventListener('click', () => {
        if (answeredSoFar === 0) {
          timerSeconds = 0;
          examStates[currentExamId].timerSeconds = 0;
          updateTimerDisplay();
        }
        setAppMode('exam');
        switchView('question');
      });
    }
  }

  function goToCourseHub() {
    stopTimer();
    try {
      if (window.location.pathname.toLowerCase().includes('/simulado2')) {
        window.location.href = '../';
        return;
      }
      const url = new URL(window.location.href);
      url.searchParams.delete('simulado');
      url.searchParams.delete('exam');
      window.history.replaceState({}, '', url.toString());
    } catch (e) {}
    switchView('hub');
  }

  window.goToCourseHub = goToCourseHub;

  if (btnGoHub) {
    btnGoHub.addEventListener('click', () => goToCourseHub());
  }
  if (brandHomeLink) {
    brandHomeLink.addEventListener('click', () => goToCourseHub());
  }

  // Header Quick Exam Switcher
  if (btnSelectSimulado1) {
    btnSelectSimulado1.addEventListener('click', () => {
      if (currentExamId === 'simulado1') return;
      openExamLobby('simulado1');
    });
  }

  if (btnSelectSimulado2) {
    btnSelectSimulado2.addEventListener('click', () => {
      if (currentExamId === 'simulado2') return;
      openExamLobby('simulado2');
    });
  }

  // ========================================================================
  // 6. TEMA (MODO DIA / MODO NOITE) & ALTERNADOR DE MODO
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

  modeToggleBtn.addEventListener('click', () => {
    setAppMode(appMode === 'study' ? 'exam' : 'study');
    if (currentView === 'question') {
      renderCurrentQuestion();
    }
  });

  // ========================================================================
  // 7. NAVEGAÇÃO ENTRE TELAS (SWITCH VIEW)
  // ========================================================================
  function switchView(viewName) {
    currentView = viewName;
    if (hubView) hubView.style.display = viewName === 'hub' ? 'block' : 'none';
    if (lobbyView) lobbyView.style.display = viewName === 'lobby' ? 'block' : 'none';
    if (questionView) questionView.style.display = viewName === 'question' ? 'block' : 'none';
    if (reviewView) reviewView.className = `review-screen-view ${viewName === 'review' ? 'active' : ''}`;
    if (scoreReportView) scoreReportView.className = `score-report-view ${viewName === 'score' ? 'active' : ''}`;

    updateHeaderAndExamMetadata();

    if (viewName === 'hub') {
      progressStrip.style.display = 'none';
      renderHubView();
    } else if (viewName === 'lobby') {
      progressStrip.style.display = 'none';
      renderLobbyView();
    } else if (viewName === 'question') {
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
  // 8. LÓGICA DE RESPOSTAS E RENDERIZAÇÃO DAS QUESTÕES
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

  function renderCurrentQuestion() {
    const q = activeQuestions[currentQuestionIndex];
    if (!q) return;
    const isFlagged = flaggedQuestions.has(q.id);
    const isSolutionShown = (appMode === 'study') && (solutionRevealed[q.id] || false);

    // Update Progress Bar
    const progressPercent = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    progressFill.style.width = `${progressPercent}%`;
    progressText.textContent = `Question Progress (${currentQuestionIndex + 1}/${totalQuestions})`;

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

    if (attemptCount > 1 && failedInPreviousAttempt.has(q.id)) {
      html += `
        <div class="user-attempt-banner original-wrong">
          <div>
            <strong>⚠️ Atenção (${attemptCount}ª tentativa):</strong> Você errou esta questão na tentativa anterior. Preste atenção redobrada para acertar desta vez!
          </div>
        </div>
      `;
    }

    html += `<div class="question-body">${formatMarkdown(escapeHtml(q.question))}</div>`;

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

    html += renderSolutionPanel(q, isSolutionShown);

    questionCard.innerHTML = html;
    attachQuestionEvents(q);
  }

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

    const valuesHtml = q.values.map(val => {
      const isChipSelected = selectedDragChipValue === val.id;
      return `
        <div class="draggable-value-chip ${isChipSelected ? 'chip-selected' : ''}" draggable="true" data-chip-id="${escapeHtml(val.id)}" title="Arraste para um destino à direita ou clique para selecionar">
          <span class="grip-dots">⋮⋮</span>
          <span>${escapeHtml(val.text)}</span>
        </div>
      `;
    }).join('');

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
          <span class="solution-title">Gabarito e Comentários Técnicos Oficiais</span>
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
          <div class="solution-section-title">Resumo Técnico / Racional Oficial</div>
          <div class="solution-content" style="font-style: italic;">"${escapeHtml(q.official_rationale)}"</div>
        </div>

        <div class="solution-section-block">
          <div class="solution-section-title">Documentação Oficial Recomendada</div>
          <ul class="reading-links">${readingLinksHtml}</ul>
        </div>
      </div>
    `;
  }

  function attachQuestionEvents(q) {
    const btnFlag = document.getElementById('btnFlagReview');
    btnFlag.addEventListener('click', () => {
      if (flaggedQuestions.has(q.id)) {
        flaggedQuestions.delete(q.id);
      } else {
        flaggedQuestions.add(q.id);
      }
      renderCurrentQuestion();
    });

    const optionItems = document.querySelectorAll('.option-item[data-opt-id]');
    optionItems.forEach(item => {
      item.addEventListener('click', () => {
        const optId = item.getAttribute('data-opt-id');
        userAnswers[q.id] = optId;
        renderCurrentQuestion();
      });
    });

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

    const inlineSelect = document.getElementById(`inlineSelect_${q.id}`);
    if (inlineSelect) {
      inlineSelect.addEventListener('change', (e) => {
        userAnswers[q.id] = e.target.value;
        renderCurrentQuestion();
      });
    }

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

    const btnToggleSol = document.getElementById('btnToggleSolution');
    if (btnToggleSol) {
      btnToggleSol.addEventListener('click', () => {
        solutionRevealed[q.id] = !solutionRevealed[q.id];
        renderCurrentQuestion();
      });
    }

    const btnReset = document.getElementById('btnResetAnswer');
    btnReset.addEventListener('click', () => {
      delete userAnswers[q.id];
      solutionRevealed[q.id] = false;
      selectedDragChipValue = null;
      renderCurrentQuestion();
    });

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
  // 9. TELA DE REVISÃO E RELATÓRIO DE PONTUAÇÃO (SCORE REPORT)
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
    stopTimer();
    switchView('score');
  });

  function renderScoreReport(reportFilter = 'all') {
    let correctCount = 0;
    const categoryStats = new Map();

    activeQuestions.forEach(q => {
      const correct = isQuestionCorrect(q);
      if (correct) correctCount++;

      const cat = q.category || 'Domínio Geral do Exame';
      if (!categoryStats.has(cat)) {
        categoryStats.set(cat, { correct: 0, total: 0 });
      }
      const st = categoryStats.get(cat);
      st.total++;
      if (correct) st.correct++;
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

    const sectionBarsContainer = document.getElementById('sectionBarsContainer');
    if (sectionBarsContainer) {
      const barColors = ['var(--ms-blue-primary)', '#2b88d8', '#005a9e', '#7b1fa2'];
      let idx = 0;
      let barsHtml = '';
      for (const [catName, st] of categoryStats.entries()) {
        const pct = st.total > 0 ? Math.round((st.correct / st.total) * 100) : 0;
        const color = barColors[idx % barColors.length];
        idx++;
        barsHtml += `
          <div class="section-bar-item">
            <div class="section-bar-header">
              <span>${escapeHtml(catName)}</span>
              <span>${pct}% (${st.correct}/${st.total})</span>
            </div>
            <div class="section-bar-track">
              <div class="section-bar-fill" style="width: ${pct}%; background-color: ${color};"></div>
            </div>
          </div>
        `;
      }
      sectionBarsContainer.innerHTML = barsHtml;
    } else if (sec1Percent && sec2Percent) {
      const entries = [...categoryStats.values()];
      const s1 = entries[0] || { correct: 0, total: 0 };
      const s2 = entries[1] || { correct: 0, total: 0 };
      const sec1Pct = s1.total > 0 ? Math.round((s1.correct / s1.total) * 100) : 0;
      sec1Percent.textContent = `${sec1Pct}% (${s1.correct}/${s1.total})`;
      sec1Fill.style.width = `${sec1Pct}%`;

      const sec2Pct = s2.total > 0 ? Math.round((s2.correct / s2.total) * 100) : 0;
      sec2Percent.textContent = `${sec2Pct}% (${s2.correct}/${s2.total})`;
      sec2Fill.style.width = `${sec2Pct}%`;
    }

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
    setAppMode('study');
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
  // 10. REINICIAR SIMULADO (RETORNA AO LOBBY COM RELÓGIO ZERADO E PARADO)
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
    stopTimer();

    failedInPreviousAttempt.clear();
    activeQuestions.forEach(q => {
      if (!isQuestionCorrect(q)) {
        failedInPreviousAttempt.add(q.id);
      }
    });
    attemptCount++;
    examStates[currentExamId].attemptCount = attemptCount;
    try {
      const prefix = currentExamId === 'simulado1' ? 'ai901' : (currentExamId === 'simulado2' ? 'ai901_sim2' : currentExamId);
      sessionStorage.setItem(`${prefix}_attempt_count`, String(attemptCount));
      sessionStorage.setItem(`${prefix}_failed_questions`, JSON.stringify([...failedInPreviousAttempt]));
    } catch (e) {}

    for (const key of Object.keys(userAnswers)) delete userAnswers[key];
    flaggedQuestions.clear();
    for (const key of Object.keys(solutionRevealed)) delete solutionRevealed[key];
    timerSeconds = 0;
    examStates[currentExamId].timerSeconds = 0;
    updateTimerDisplay();
    currentQuestionIndex = 0;
    examStates[currentExamId].currentQuestionIndex = 0;

    filterPills.forEach((p, idx) => {
      if (idx === 0) p.classList.add('active');
      else p.classList.remove('active');
    });

    // Return to Lobby so the clock stays stopped until the student picks Study or Exam Mode!
    switchView('lobby');
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
  // 11. INICIALIZAÇÃO
  // ========================================================================
  initTheme();
  switchView(currentView);
});
