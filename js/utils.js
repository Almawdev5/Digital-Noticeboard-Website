// ─── Time formatter ───────────────────────────────────────
// Converts a date into "2h ago", "3d ago" etc.
function timeAgo(dateStr) {
  const diff = Math.floor((Date.now() - new Date(dateStr)) / 1000);
  if (diff < 60) return 'just now';
  if (diff < 3600) return Math.floor(diff / 60) + 'm ago';
  if (diff < 86400) return Math.floor(diff / 3600) + 'h ago';
  return Math.floor(diff / 86400) + 'd ago';
}

// ─── Initials generator ───────────────────────────────────
// Turns "Abebe Kebede" into "AK" for avatar circles
function initials(name = '') {
  return name.trim().split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
}

// ─── Toast notification ───────────────────────────────────
// Shows a small popup message at the bottom of the screen
function showToast(msg, type = 'info') {
  const t = document.createElement('div');
  t.className = `toast toast--${type}`;
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.classList.add('toast--show'), 10);
  setTimeout(() => {
    t.classList.remove('toast--show');
    setTimeout(() => t.remove(), 300);
  }, 3000);
}

// ─── Auth guards ──────────────────────────────────────────
// Sends user to login if they are not signed in
function redirectIfNotAuthed() {
  sb.auth.getSession().then(({ data }) => {
    if (!data.session) window.location.href = '../pages/login.html';
  });
}

// Sends user to dashboard if they are already signed in
function redirectIfAuthed() {
  sb.auth.getSession().then(({ data }) => {
    if (data.session) window.location.href = '../pages/dashboard.html';
  });
}
// ─── Theme toggle ──────────────────────────────────────
function initTheme() {
  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcon(saved);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next    = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}