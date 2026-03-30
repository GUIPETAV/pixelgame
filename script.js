// ============================================
// TRILHA DEV - JavaScript
// ============================================

// === DATA ===
const quests = [
  {
    id: 1,
    icon: '⏱️',
    title: 'Cronômetro',
    desc: 'Um cronômetro que conta tempo. Aprenda setInterval, DOM e formatação.',
    skills: ['DOM', 'eventos', 'setInterval'],
    week: 'Semana 1',
    videoId: '', // Cole o ID do YouTube aqui (ex: 'dQw4w9WgXcQ')
    repoPath: 'projetos/tier-1/01-cronometro.md',
    checklist: [
      'HTML com botões e display',
      'CSS básico',
      'setInterval funcionando',
      'Pausar e retomar',
      'Resetar',
      'Formato hh:mm:ss'
    ]
  },
  {
    id: 2,
    icon: '🍅',
    title: 'Pomodoro',
    desc: 'Timer de foco/pausa. Pratique lógica de estados.',
    skills: ['Timers', 'estados'],
    week: 'Semana 2',
    videoId: '',
    repoPath: 'projetos/tier-1/02-relogio-pomodoro.md',
    checklist: [
      'Contagem regressiva',
      'Alterna modos',
      'Visual diferente por modo',
      'Alerta ao zerar'
    ]
  },
  {
    id: 3,
    icon: '🔐',
    title: 'Gerador de Senha',
    desc: 'Gera senhas aleatórias com opções customizáveis.',
    skills: ['Strings', 'Math.random'],
    week: 'Semana 3',
    videoId: '',
    repoPath: 'projetos/tier-1/03-gerador-de-senha.md',
    checklist: [
      'Checkboxes',
      'Slider de comprimento',
      'Geração aleatória',
      'Copiar'
    ]
  },
  {
    id: 4,
    icon: '⚖️',
    title: 'Calculadora IMC',
    desc: 'Calcula IMC e mostra classificação. Formulários e condicionais.',
    skills: ['Formulários', 'if/else'],
    week: 'Semana 4',
    videoId: '',
    repoPath: 'projetos/tier-1/04-calculadora-imc.md',
    checklist: [
      'Inputs peso/altura',
      'Fórmula IMC',
      'Classificação',
      'Validação'
    ]
  },
  {
    id: 5,
    icon: '🧠',
    title: 'Quiz',
    desc: 'Perguntas de múltipla escolha com pontuação.',
    skills: ['Arrays', 'objetos'],
    week: 'Semana 5',
    videoId: '',
    repoPath: 'projetos/tier-1/05-app-de-quiz.md',
    checklist: [
      'Array de perguntas',
      'Navegação',
      'Feedback visual',
      'Pontuação'
    ]
  },
  {
    id: 6,
    icon: '📝',
    title: 'Bloco de Notas',
    desc: 'CRUD com localStorage. Notas que persistem.',
    skills: ['localStorage', 'CRUD'],
    week: 'Semana 6',
    videoId: '',
    repoPath: 'projetos/tier-1/06-bloco-de-notas.md',
    checklist: [
      'Criar nota',
      'Listar',
      'Editar',
      'Excluir',
      'Persistir'
    ]
  },
  {
    id: 7,
    icon: '📊',
    title: 'Freq. Palavras',
    desc: 'Conta palavras em um texto e ordena por frequência.',
    skills: ['Strings', 'sort'],
    week: 'Semana 7',
    videoId: '',
    repoPath: 'projetos/tier-1/07-frequencia-de-palavras.md',
    checklist: [
      'Dividir texto',
      'Normalizar',
      'Contar',
      'Ordenar'
    ]
  },
  {
    id: 8,
    icon: '💱',
    title: 'Conversor Moedas',
    desc: 'Converte valores entre moedas. Taxas fixas ou API.',
    skills: ['Fetch', 'formulários'],
    week: 'Semana 8',
    videoId: '',
    repoPath: 'projetos/tier-1/08-conversor-de-moedas.md',
    checklist: [
      'Selects de moedas',
      'Conversão',
      'Exibir taxa',
      'API (bônus)'
    ]
  },
  {
    id: 9,
    icon: '✓',
    title: 'Validação Form',
    desc: 'Formulário com validação em tempo real. RegEx.',
    skills: ['RegEx', 'eventos'],
    week: 'Semana 9',
    videoId: '',
    repoPath: 'projetos/tier-1/09-validacao-formulario.md',
    checklist: [
      'Validar nome',
      'Validar email',
      'Validar senha',
      'Confirmar senha',
      'Botão condicional'
    ]
  },
  {
    id: 10,
    icon: '📄',
    title: 'Lorem Ipsum',
    desc: 'Gera texto placeholder. Parágrafos aleatórios.',
    skills: ['Arrays', 'aleatoriedade'],
    week: 'Semana 10',
    videoId: '',
    repoPath: 'projetos/tier-1/10-gerador-lorem-ipsum.md',
    checklist: [
      'Banco de palavras',
      'Gerar frases',
      'Gerar parágrafos',
      'Copiar'
    ]
  },
  {
    id: 11,
    icon: '🏛️',
    title: 'Romano/Decimal',
    desc: 'Converte números romanos ↔ decimais. Algoritmos.',
    skills: ['Algoritmos', 'lógica'],
    week: 'Semana 11',
    videoId: '',
    repoPath: 'projetos/tier-1/11-conversor-romano-decimal.md',
    checklist: [
      'Decimal → romano',
      'Romano → decimal',
      'Casos especiais',
      'Validação'
    ]
  },
  {
    id: 12,
    icon: '🔄',
    title: 'Virar Imagem',
    desc: 'Carrega imagem e vira horizontal/vertical.',
    skills: ['FileReader', 'CSS transforms'],
    week: 'Semana 12',
    videoId: '',
    repoPath: 'projetos/tier-1/12-virar-imagem.md',
    checklist: [
      'Carregar imagem',
      'Virar H',
      'Virar V',
      'Reset',
      'Download (bônus)'
    ]
  }
];

// === CONFIGURAÇÃO ===
// Troque 'SEU_USUARIO' pelo seu usuário do GitHub
const GITHUB_USER = 'SEU_USUARIO';
const REPO_NAME = 'app-ideas-ptbr';

// === STATE ===
const STORAGE_KEY = 'trilha-pixel-v1';
let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
let currentId = null;

// === ELEMENTS ===
const $grid = document.getElementById('quests-grid');
const $overlay = document.getElementById('modal-overlay');
const $video = document.getElementById('modal-video');
const $title = document.getElementById('modal-title');
const $desc = document.getElementById('modal-desc');
const $checklist = document.getElementById('modal-checklist');
const $github = document.getElementById('modal-github');
const $complete = document.getElementById('modal-complete');
const $xpFill = document.getElementById('xp-fill');
const $xpText = document.getElementById('xp-text');
const $commentInput = document.getElementById('comment-input');
const $commentSend = document.getElementById('comment-send');
const $commentsList = document.getElementById('comments-list');

// === FUNCTIONS ===

/**
 * Salva o progresso no localStorage
 */
function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

/**
 * Retorna o status de uma quest
 * @param {number} id - ID da quest
 * @returns {string|null} - 'completed', 'in-progress' ou null
 */
function getStatus(id) {
  const p = data[id];
  if (!p) return null;
  if (p.done) return 'completed';
  if (p.checks && Object.values(p.checks).some(Boolean)) return 'in-progress';
  return null;
}

/**
 * Atualiza a barra de XP
 */
function updateXP() {
  const done = Object.values(data).filter(p => p.done).length;
  const pct = (done / quests.length) * 100;
  $xpFill.style.width = `${pct}%`;
  $xpText.textContent = `${done}/12 QUESTS`;
}

/**
 * Renderiza o grid de quests
 */
function renderGrid() {
  $grid.innerHTML = quests.map(q => {
    const status = getStatus(q.id);
    const statusClass = status || '';
    return `
      <div class="quest-card pixel-border ${statusClass}" data-id="${q.id}">
        <div class="quest-header">
          <div class="quest-icon pixel-border">${q.icon}</div>
          <div>
            <div class="quest-number">#${String(q.id).padStart(2, '0')}</div>
            <div class="quest-week">${q.week}</div>
          </div>
        </div>
        <h3 class="quest-title">${q.title}</h3>
        <p class="quest-desc">${q.desc}</p>
        <div class="quest-skills">
          ${q.skills.map(s => `<span class="skill-tag pixel-border">${s}</span>`).join('')}
        </div>
      </div>
    `;
  }).join('');

  // Adiciona event listeners
  $grid.querySelectorAll('.quest-card').forEach(card => {
    card.addEventListener('click', () => openModal(+card.dataset.id));
  });
}

/**
 * Abre o modal de uma quest
 * @param {number} id - ID da quest
 */
function openModal(id) {
  const q = quests.find(x => x.id === id);
  if (!q) return;
  currentId = id;

  // Video
  if (q.videoId) {
    $video.innerHTML = `
      <iframe 
        src="https://www.youtube.com/embed/${q.videoId}" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    `;
  } else {
    $video.innerHTML = `
      <div class="video-placeholder">
        <div class="video-placeholder-icon">🎬</div>
        <span>EM BREVE</span>
      </div>
    `;
  }

  // Content
  $title.innerHTML = `<span>${q.icon}</span> ${q.title}`;
  $desc.textContent = q.desc;
  $github.href = `https://github.com/${GITHUB_USER}/${REPO_NAME}/blob/main/${q.repoPath}`;

  // Checklist
  const qData = data[id] || { checks: {}, done: false, comments: [] };
  $checklist.innerHTML = q.checklist.map((item, i) => `
    <li>
      <input 
        type="checkbox" 
        class="pixel-border" 
        id="c${i}" 
        data-i="${i}" 
        ${qData.checks?.[i] ? 'checked' : ''}
      >
      <label for="c${i}">${item}</label>
    </li>
  `).join('');

  // Complete button
  updateCompleteBtn(qData.done);

  // Comments
  renderComments(qData.comments || []);

  // Show modal
  $overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/**
 * Fecha o modal
 */
function closeModal() {
  $overlay.classList.remove('open');
  document.body.style.overflow = '';
  $video.innerHTML = '';
  currentId = null;
}

/**
 * Atualiza o botão de completar
 * @param {boolean} isDone - Se a quest está completa
 */
function updateCompleteBtn(isDone) {
  const $text = $complete.querySelector('.btn-text');
  if (isDone) {
    $text.textContent = 'COMPLETO!';
    $complete.classList.add('is-done');
  } else {
    $text.textContent = 'COMPLETAR';
    $complete.classList.remove('is-done');
  }
}

/**
 * Renderiza a lista de comentários
 * @param {Array} comments - Lista de comentários
 */
function renderComments(comments) {
  if (!comments.length) {
    $commentsList.innerHTML = '<p class="no-comments">Nenhuma dúvida ainda...</p>';
    return;
  }
  $commentsList.innerHTML = comments.map(c => `
    <div class="comment pixel-border">
      <div class="comment-meta">
        <span class="comment-author">${c.author}</span>
        <span class="comment-date">· ${c.date}</span>
      </div>
      <p class="comment-text">${c.text}</p>
    </div>
  `).join('');
}

// === EVENT LISTENERS ===

// Fechar modal
document.getElementById('modal-close').addEventListener('click', closeModal);

$overlay.addEventListener('click', e => {
  if (e.target === $overlay) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// Checklist
$checklist.addEventListener('change', e => {
  if (e.target.type !== 'checkbox') return;
  
  if (!data[currentId]) {
    data[currentId] = { checks: {}, done: false, comments: [] };
  }
  
  data[currentId].checks[e.target.dataset.i] = e.target.checked;
  save();
  renderGrid();
  updateXP();
});

// Botão completar
$complete.addEventListener('click', () => {
  if (!data[currentId]) {
    data[currentId] = { checks: {}, done: false, comments: [] };
  }
  
  data[currentId].done = !data[currentId].done;
  updateCompleteBtn(data[currentId].done);
  save();
  renderGrid();
  updateXP();
});

// Enviar comentário
$commentSend.addEventListener('click', () => {
  const text = $commentInput.value.trim();
  if (!text) return;
  
  if (!data[currentId]) {
    data[currentId] = { checks: {}, done: false, comments: [] };
  }
  
  if (!data[currentId].comments) {
    data[currentId].comments = [];
  }
  
  data[currentId].comments.push({
    author: 'Player',
    date: new Date().toLocaleDateString('pt-BR'),
    text
  });
  
  save();
  renderComments(data[currentId].comments);
  $commentInput.value = '';
});

// === INIT ===
renderGrid();
updateXP();
