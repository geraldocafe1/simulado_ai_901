// ============================================================================
// SIMULADO OFICIAL MICROSOFT AI-901 - LEADERBOARD (RANKING DA TURMA)
// ============================================================================

(function () {
  let activeExamId = 'simulado1';

  const EXAM_META = {
    simulado2: { label: 'AI-901 Simulado 2', total: 30, collection: 'leaderboard_ai901_simulado2' },
    az900_1: { label: 'AZ-900 Simulado 1', total: 73, collection: 'leaderboard_az900_simulado1' },
    dp900_1: { label: 'DP-900 Simulado 1', total: 32, collection: 'leaderboard_dp900_simulado1' },
    dp900_2: { label: 'DP-900 Prova Final', total: 42, collection: 'leaderboard_dp900_simulado2' },
    dp900_3: { label: 'DP-900 Simulado 3', total: 32, collection: 'leaderboard_dp900_simulado3' },
    aws_1: { label: 'AWS CLF-C02 Simulado 1', total: 65, collection: 'leaderboard_aws_simulado1' },
    aws_2: { label: 'AWS CLF-C02 Simulado 2', total: 50, collection: 'leaderboard_aws_simulado2' },
    aws_3: { label: 'AWS CLF-C02 Simulado 3', total: 65, collection: 'leaderboard_aws_simulado3' },
    gcp_1: { label: 'Google Cloud ACE Simulado 1', total: 50, collection: 'leaderboard_gcp_simulado1' },
    gcp_3: { label: 'Google Cloud ACE Simulado 3', total: 50, collection: 'leaderboard_gcp_simulado3' },
    gcp_4: { label: 'Google Cloud ACE Simulado 4', total: 50, collection: 'leaderboard_gcp_simulado4' }
  };

  function getStorageKeys(examId) {
    if (EXAM_META[examId]) {
      const m = EXAM_META[examId];
      const nearScore = Math.max(1, m.total - 1);
      const nearPct = Math.round((nearScore / m.total) * 100);
      return {
        localStorageKey: `ms_${examId}_leaderboard_cache`,
        submittedKey: `ms_${examId}_last_submission_id`,
        collectionName: m.collection,
        seedData: [
          {
            id: `seed_${examId}_1`,
            name: `Gabarito Oficial ${m.label} (Referência)`,
            score: m.total,
            total: m.total,
            percentage: 100,
            timeSeconds: 780,
            timeFormatted: '13m 00s',
            date: '2026-10-30T10:00:00.000Z',
            isSeed: true
          },
          {
            id: `seed_${examId}_2`,
            name: 'Instrutor Café (Cloud & AI Certified)',
            score: nearScore,
            total: m.total,
            percentage: nearPct,
            timeSeconds: 915,
            timeFormatted: '15m 15s',
            date: '2026-10-30T10:15:00.000Z',
            isSeed: true
          }
        ]
      };
    }

    const baseCollection = (typeof FIREBASE_CONFIG !== 'undefined' && FIREBASE_CONFIG.collectionName)
      ? FIREBASE_CONFIG.collectionName
      : 'leaderboard_ai901';

    return {
      localStorageKey: 'ms_ai901_leaderboard_cache',
      submittedKey: 'ms_ai901_last_submission_id',
      collectionName: baseCollection,
      seedData: [
        {
          id: 'seed_1',
          name: 'Gabarito Oficial (Referência)',
          score: 50,
          total: 50,
          percentage: 100,
          timeSeconds: 780,
          timeFormatted: '13m 00s',
          date: '2026-10-24T10:00:00.000Z',
          isSeed: true
        },
        {
          id: 'seed_2',
          name: 'Instrutor Café (Microsoft Certified)',
          score: 49,
          total: 50,
          percentage: 98,
          timeSeconds: 915,
          timeFormatted: '15m 15s',
          date: '2026-10-24T10:15:00.000Z',
          isSeed: true
        }
      ]
    };
  }

  // State
  let leaderboardEntries = [];
  let currentScoreData = null; // { score, total, percentage, timeSeconds, timeFormatted }
  let lastSubmittedId = null;
  let isOnline = false;

  // Helper: Format seconds to "Xm Ys"
  function formatSeconds(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    if (mins === 0) return `${secs}s`;
    return `${mins}m ${String(secs).padStart(2, '0')}s`;
  }

  // Sort Leaderboard:
  // 1. Maior pontuação (%)
  // 2. Menor tempo (mais rápido em caso de empate)
  // 3. Data de realização
  function sortEntries(entries) {
    return [...entries].sort((a, b) => {
      if (b.percentage !== a.percentage) {
        return b.percentage - a.percentage;
      }
      if (a.timeSeconds !== b.timeSeconds) {
        return a.timeSeconds - b.timeSeconds;
      }
      return new Date(a.date) - new Date(b.date);
    });
  }

  // Helper to escape HTML
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // Fetch entries from Firebase (or LocalStorage fallback)
  async function fetchLeaderboard() {
    const cfg = getStorageKeys(activeExamId);
    try {
      lastSubmittedId = localStorage.getItem(cfg.submittedKey) || null;
    } catch (e) {}

    updateSyncStatus('Sincronizando...');
    let fetched = null;

    if (typeof FIREBASE_CONFIG !== 'undefined' && FIREBASE_CONFIG.databaseURL) {
      try {
        const url = `${FIREBASE_CONFIG.databaseURL.replace(/\/$/, '')}/${cfg.collectionName}.json`;
        const res = await fetch(url, { method: 'GET' });
        if (res.ok) {
          const data = await res.json();
          if (data && typeof data === 'object') {
            fetched = Object.keys(data).map(key => ({
              ...data[key],
              remoteKey: key
            }));
            isOnline = true;
          } else {
            fetched = [];
            isOnline = true;
          }
        }
      } catch (err) {
        console.warn('[Leaderboard] Falha ao conectar ao Firebase (usando armazenamento local):', err.message);
        isOnline = false;
      }
    }

    if (!fetched || fetched.length === 0) {
      try {
        const local = JSON.parse(localStorage.getItem(cfg.localStorageKey) || '[]');
        fetched = local.length > 0 ? local : cfg.seedData;
      } catch (e) {
        fetched = cfg.seedData;
      }
    }

    leaderboardEntries = sortEntries(fetched);
    try {
      localStorage.setItem(cfg.localStorageKey, JSON.stringify(leaderboardEntries));
    } catch (e) {}

    updateSyncStatus(isOnline ? '🟢 Conectado ao Firebase' : '💾 Modo Local / Offline');
    renderAllLeaderboardViews();
    return leaderboardEntries;
  }

  // Save new score
  async function submitScore(studentName) {
    if (!currentScoreData) {
      alert('Nenhum resultado final de prova encontrado para registrar.');
      return false;
    }

    const trimmedName = (studentName || '').trim();
    if (!trimmedName) {
      alert('Por favor, informe seu nome completo ou apelido.');
      return false;
    }

    const cfg = getStorageKeys(activeExamId);
    const newId = 'entry_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
    const newEntry = {
      id: newId,
      name: trimmedName,
      score: currentScoreData.score,
      total: currentScoreData.total,
      percentage: currentScoreData.percentage,
      timeSeconds: currentScoreData.timeSeconds,
      timeFormatted: currentScoreData.timeFormatted,
      date: new Date().toISOString()
    };

    updateSyncStatus('Enviando pontuação...');

    let postedToFirebase = false;
    if (typeof FIREBASE_CONFIG !== 'undefined' && FIREBASE_CONFIG.databaseURL) {
      try {
        const url = `${FIREBASE_CONFIG.databaseURL.replace(/\/$/, '')}/${cfg.collectionName}.json`;
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newEntry)
        });
        if (res.ok) {
          postedToFirebase = true;
          isOnline = true;
        }
      } catch (err) {
        console.warn('[Leaderboard] Não foi possível enviar para o Firebase, salvando localmente:', err.message);
      }
    }

    leaderboardEntries.push(newEntry);
    leaderboardEntries = sortEntries(leaderboardEntries);
    try {
      localStorage.setItem(cfg.localStorageKey, JSON.stringify(leaderboardEntries));
    } catch (e) {}

    lastSubmittedId = newId;
    try {
      localStorage.setItem(cfg.submittedKey, newId);
    } catch (e) {}

    updateSyncStatus(postedToFirebase ? '🟢 Pontuação publicada no Firebase!' : '💾 Pontuação salva localmente!');

    const userRank = leaderboardEntries.findIndex(e => e.id === newId) + 1;

    renderAllLeaderboardViews();
    updateSubmitCardState(userRank, trimmedName);
    return true;
  }

  // Render Podium HTML (Top 3)
  function renderPodiumHtml(entries) {
    const top1 = entries[0] || null;
    const top2 = entries[1] || null;
    const top3 = entries[2] || null;

    if (!top1) {
      return `<div style="text-align: center; color: var(--text-muted); padding: 1.5rem;">Nenhum participante registrado ainda. Seja o primeiro!</div>`;
    }

    return `
      <div class="podium-wrapper">
        <!-- 2nd Place (Silver) -->
        <div class="podium-step step-silver ${top2 && top2.id === lastSubmittedId ? 'highlight-user' : ''}">
          <div class="podium-medal">🥈 2º</div>
          <div class="podium-avatar">🥈</div>
          <div class="podium-name" title="${top2 ? escapeHtml(top2.name) : '-'}">${top2 ? escapeHtml(top2.name) : '-'}</div>
          <div class="podium-score">${top2 ? top2.percentage + '%' : '-'}</div>
          <div class="podium-time">${top2 ? top2.timeFormatted : '-'}</div>
          <div class="podium-pillar pillar-silver">2</div>
        </div>

        <!-- 1st Place (Gold) -->
        <div class="podium-step step-gold ${top1 && top1.id === lastSubmittedId ? 'highlight-user' : ''}">
          <div class="podium-crown">👑</div>
          <div class="podium-medal">🥇 1º</div>
          <div class="podium-avatar">🥇</div>
          <div class="podium-name" title="${escapeHtml(top1.name)}">${escapeHtml(top1.name)}</div>
          <div class="podium-score">${top1.percentage}% (${top1.score}/${top1.total})</div>
          <div class="podium-time">⏱️ ${top1.timeFormatted}</div>
          <div class="podium-pillar pillar-gold">1</div>
        </div>

        <!-- 3rd Place (Bronze) -->
        <div class="podium-step step-bronze ${top3 && top3.id === lastSubmittedId ? 'highlight-user' : ''}">
          <div class="podium-medal">🥉 3º</div>
          <div class="podium-avatar">🥉</div>
          <div class="podium-name" title="${top3 ? escapeHtml(top3.name) : '-'}">${top3 ? escapeHtml(top3.name) : '-'}</div>
          <div class="podium-score">${top3 ? top3.percentage + '%' : '-'}</div>
          <div class="podium-time">${top3 ? top3.timeFormatted : '-'}</div>
          <div class="podium-pillar pillar-bronze">3</div>
        </div>
      </div>
    `;
  }

  // Render Leaderboard Rows HTML
  function renderTableRowsHtml(entries, limit = 20) {
    if (!entries || entries.length === 0) {
      return `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 1.5rem;">Nenhum participante ainda. Seja o primeiro a registrar!</td></tr>`;
    }

    const slice = entries.slice(0, limit);
    return slice.map((entry, index) => {
      const rank = index + 1;
      let badge = `${rank}º`;
      if (rank === 1) badge = '🥇 1º';
      else if (rank === 2) badge = '🥈 2º';
      else if (rank === 3) badge = '🥉 3º';

      const isCurrent = entry.id === lastSubmittedId;
      const dateFormatted = entry.date ? new Date(entry.date).toLocaleDateString('pt-BR') : '-';

      return `
        <tr class="${isCurrent ? 'leaderboard-row-current' : ''}">
          <td style="text-align: center; font-weight: 700;">${badge}</td>
          <td>
            <strong>${escapeHtml(entry.name)}</strong>
            ${isCurrent ? ' <span class="leaderboard-you-badge">VOCÊ</span>' : ''}
          </td>
          <td style="text-align: center;">${entry.score}/${entry.total}</td>
          <td style="text-align: center;">
            <span class="score-pill ${entry.percentage >= 80 ? 'pass' : 'fail'}">${entry.percentage}%</span>
          </td>
          <td style="text-align: center; font-family: monospace;">⏱️ ${escapeHtml(entry.timeFormatted)}</td>
          <td style="text-align: center; font-size: 0.85rem; color: var(--text-secondary);">${dateFormatted}</td>
        </tr>
      `;
    }).join('');
  }

  // Render everywhere
  function renderAllLeaderboardViews() {
    const podiumEl = document.getElementById('leaderboardPodiumContainer');
    if (podiumEl) podiumEl.innerHTML = renderPodiumHtml(leaderboardEntries);

    const tableBodyEl = document.getElementById('leaderboardTableBody');
    if (tableBodyEl) tableBodyEl.innerHTML = renderTableRowsHtml(leaderboardEntries, 15);

    const modalPodiumEl = document.getElementById('modalPodiumContainer');
    if (modalPodiumEl) modalPodiumEl.innerHTML = renderPodiumHtml(leaderboardEntries);

    const modalTableBodyEl = document.getElementById('modalLeaderboardTableBody');
    if (modalTableBodyEl) modalTableBodyEl.innerHTML = renderTableRowsHtml(leaderboardEntries, 50);
  }

  function updateSyncStatus(text) {
    const el = document.getElementById('leaderboardSyncStatus');
    if (el) el.textContent = text;
  }

  function updateSubmitCardState(rank, name) {
    const formBox = document.getElementById('leaderboardSubmitSection');
    const resultBox = document.getElementById('leaderboardUserRankResult');
    if (formBox && resultBox) {
      formBox.style.display = 'none';
      resultBox.style.display = 'block';
      resultBox.innerHTML = `
        <div class="leaderboard-success-alert">
          <span style="font-size: 1.5rem;">🎉</span>
          <div>
            <strong>Parabéns, ${escapeHtml(name)}!</strong> Seu resultado foi registrado com sucesso.
            <div>Você está na <strong>${rank}ª posição</strong> do Ranking Geral da Turma!</div>
          </div>
        </div>
      `;
    }
  }

  // Called from app.js when exam finishes and score report is viewed
  function onScoreReportView(score, total, timeSeconds) {
    const percentage = Math.round((score / total) * 100);
    currentScoreData = {
      score,
      total,
      percentage,
      timeSeconds,
      timeFormatted: formatSeconds(timeSeconds)
    };

    const formBox = document.getElementById('leaderboardSubmitSection');
    const resultBox = document.getElementById('leaderboardUserRankResult');
    if (formBox) formBox.style.display = 'block';
    if (resultBox) resultBox.style.display = 'none';

    fetchLeaderboard();
  }

  function setActiveExam(examId) {
    if (examId === 'simulado1' || EXAM_META[examId]) {
      activeExamId = examId;
      fetchLeaderboard();
    }
  }

  // Modal open / close
  function openModal() {
    const modal = document.getElementById('leaderboardModal');
    if (modal) {
      modal.classList.add('active');
      fetchLeaderboard();
    }
  }

  function closeModal() {
    const modal = document.getElementById('leaderboardModal');
    if (modal) {
      modal.classList.remove('active');
    }
  }

  // Initialize event handlers
  function init() {
    const btnHeader = document.getElementById('btnHeaderLeaderboard');
    if (btnHeader) {
      btnHeader.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
      });
    }

    const btnCloseX = document.getElementById('btnCloseLeaderboardModal');
    const btnModalClose = document.getElementById('btnModalClose');
    const modal = document.getElementById('leaderboardModal');

    if (btnCloseX) btnCloseX.addEventListener('click', closeModal);
    if (btnModalClose) btnModalClose.addEventListener('click', closeModal);
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });
    }

    const btnRefresh = document.getElementById('btnRefreshLeaderboard');
    if (btnRefresh) {
      btnRefresh.addEventListener('click', (e) => {
        e.preventDefault();
        fetchLeaderboard();
      });
    }

    const btnSubmit = document.getElementById('btnSubmitToLeaderboard');
    const inputName = document.getElementById('inputStudentName');

    if (btnSubmit && inputName) {
      btnSubmit.addEventListener('click', async (e) => {
        e.preventDefault();
        btnSubmit.disabled = true;
        btnSubmit.innerHTML = '<span>⏳</span> Gravando...';
        await submitScore(inputName.value);
        btnSubmit.disabled = false;
        btnSubmit.innerHTML = '<span>🚀</span> Publicar meu Resultado';
      });

      inputName.addEventListener('keydown', async (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          btnSubmit.click();
        }
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });

    fetchLeaderboard();
  }

  // Expose API
  window.Leaderboard = {
    init,
    fetchLeaderboard,
    submitScore,
    openModal,
    closeModal,
    onScoreReportView,
    setActiveExam
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
