/**
 * Prof. Dr. Md. Nurul Islam - Vice-Chancellor Information Hub Controller
 * Bootstrap 5.3 Integrated Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderPriorities();
  renderTimeline();
  renderResearch();
  renderPublications('all');
  renderNews('all');
  renderGallery('all');
  initLightboxModal();
  initContactForm();
});

/* --------------------------------------------------------------------------
   1. Dark / Light Theme Controller
   -------------------------------------------------------------------------- */
function initTheme() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  const savedTheme = localStorage.getItem('theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const currentTheme = savedTheme || (systemDark ? 'dark' : 'light');

  document.documentElement.setAttribute('data-bs-theme', currentTheme);
  updateToggleIcon(currentTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const active = document.documentElement.getAttribute('data-bs-theme');
      const nextTheme = active === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-bs-theme', nextTheme);
      localStorage.setItem('theme', nextTheme);
      updateToggleIcon(nextTheme);
    });
  }
}

function updateToggleIcon(theme) {
  const toggleBtn = document.getElementById('themeToggleBtn');
  if (!toggleBtn) return;
  toggleBtn.innerHTML = theme === 'dark' 
    ? '<i class="fas fa-sun text-warning"></i>' 
    : '<i class="fas fa-moon"></i>';
}

/* --------------------------------------------------------------------------
   2. Render VC Priorities Grid
   -------------------------------------------------------------------------- */
function renderPriorities() {
  const container = document.getElementById('prioritiesGrid');
  if (!container || typeof SITE_DATA === 'undefined') return;

  container.innerHTML = SITE_DATA.vcVision.map(item => `
    <div class="col-md-6 col-lg-3">
      <div class="custom-card">
        <div class="icon-badge">
          <i class="fas ${item.icon}"></i>
        </div>
        <h5 class="fw-bold mb-2">${item.title}</h5>
        <p class="text-muted small mb-0">${item.description}</p>
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   3. Render Academic Timeline
   -------------------------------------------------------------------------- */
function renderTimeline() {
  const container = document.getElementById('timelineContainer');
  if (!container || typeof SITE_DATA === 'undefined') return;

  container.innerHTML = SITE_DATA.timeline.map(t => `
    <div class="timeline-card">
      <div class="d-flex justify-content-between align-items-center mb-2 flex-wrap gap-2">
        <span class="timeline-year"><i class="far fa-calendar-alt me-1"></i> ${t.year}</span>
        <span class="badge bg-success-subtle text-success border border-success-subtle rounded-pill px-3 py-1">${t.badge}</span>
      </div>
      <h5 class="fw-bold mb-1 fs-5">${t.role}</h5>
      <h6 class="text-secondary fw-semibold mb-2 fs-6">${t.institution}</h6>
      <p class="text-muted small mb-0">${t.desc}</p>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   4. Render Research Focus Areas
   -------------------------------------------------------------------------- */
function renderResearch() {
  const container = document.getElementById('researchGrid');
  if (!container || typeof SITE_DATA === 'undefined') return;

  container.innerHTML = SITE_DATA.researchAreas.map(r => `
    <div class="col-md-6 col-lg-3">
      <div class="custom-card">
        <div class="icon-badge">
          <i class="fas ${r.icon}"></i>
        </div>
        <h5 class="fw-bold mb-2">${r.title}</h5>
        <p class="text-muted small mb-0">${r.desc}</p>
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   5. Render Publications
   -------------------------------------------------------------------------- */
function renderPublications(filter = 'all') {
  const container = document.getElementById('pubList');
  if (!container || typeof SITE_DATA === 'undefined') return;

  const filtered = filter === 'all' 
    ? SITE_DATA.publications 
    : SITE_DATA.publications.filter(p => p.category === filter);

  container.innerHTML = filtered.map(pub => `
    <div class="custom-card mb-3 p-3">
      <div class="row align-items-center g-3">
        <div class="col-auto">
          <span class="badge bg-dark-subtle text-dark fs-6 fw-bold px-3 py-2 rounded-3">${pub.year}</span>
        </div>
        <div class="col">
          <h5 class="fw-bold mb-1 fs-6">${pub.title}</h5>
          <div class="text-muted small mb-1"><i class="fas fa-user-edit me-1"></i> ${pub.authors}</div>
          <div class="text-secondary fst-italic small"><i class="fas fa-book-open me-1"></i> ${pub.journal} (${pub.vol})</div>
        </div>
        <div class="col-auto">
          <span class="badge bg-success-subtle text-success rounded-pill px-3 py-2">${pub.badge}</span>
        </div>
      </div>
    </div>
  `).join('');

  // Attach publication filter buttons listener
  const btns = document.querySelectorAll('#pubFilterBtns button');
  btns.forEach(b => {
    b.onclick = () => {
      btns.forEach(btn => btn.classList.remove('active'));
      b.classList.add('active');
      renderPublications(b.dataset.filter);
    };
  });
}

/* --------------------------------------------------------------------------
   6. Render News & Activities Hub
   -------------------------------------------------------------------------- */
function renderNews(filter = 'all') {
  const container = document.getElementById('newsGrid');
  if (!container || typeof SITE_DATA === 'undefined') return;

  let list = SITE_DATA.newsEvents;
  if (filter !== 'all') {
    list = list.filter(n => n.category === filter || n.lang === filter);
  }

  container.innerHTML = list.map(item => `
    <div class="col-md-6 col-lg-4">
      <div class="custom-card news-card-body">
        <div>
          <div class="d-flex justify-content-between align-items-center mb-2">
            <span class="news-source-badge"><i class="fas fa-newspaper me-1"></i> ${item.outlet}</span>
            <span class="badge bg-secondary-subtle text-secondary small">${item.date}</span>
          </div>
          <h5 class="fw-bold mb-2 fs-6" style="line-height:1.4;">${item.title}</h5>
          <p class="text-muted small mb-3">${item.desc}</p>
        </div>
        <a href="${item.link}" target="_blank" rel="noopener" class="btn btn-sm btn-outline-success rounded-pill align-self-start mt-2">
          Read Coverage <i class="fas fa-arrow-right ms-1"></i>
        </a>
      </div>
    </div>
  `).join('');

  // Attach filter buttons listener
  const btns = document.querySelectorAll('#newsFilterBtns button');
  btns.forEach(b => {
    b.onclick = () => {
      btns.forEach(btn => btn.classList.remove('active'));
      b.classList.add('active');
      renderNews(b.dataset.filter);
    };
  });
}

/* --------------------------------------------------------------------------
   7. Render Gallery & Lightbox Modal
   -------------------------------------------------------------------------- */
let activeGalleryItems = [];

function renderGallery(filter = 'all') {
  const container = document.getElementById('galleryGrid');
  if (!container || typeof SITE_DATA === 'undefined') return;

  activeGalleryItems = filter === 'all' 
    ? SITE_DATA.gallery 
    : SITE_DATA.gallery.filter(g => g.cat === filter);

  container.innerHTML = activeGalleryItems.map((item, idx) => `
    <div class="col-6 col-md-4 col-lg-3">
      <div class="gallery-card-item" data-index="${idx}">
        <img src="${item.thumb}" alt="${item.title}" loading="lazy">
        <div class="gallery-caption-overlay">
          <p class="gallery-caption-title">${item.title}</p>
          <span class="gallery-caption-meta">${item.license}</span>
        </div>
      </div>
    </div>
  `).join('');

  // Attach click listener for Lightbox
  container.querySelectorAll('.gallery-card-item').forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.dataset.index, 10);
      openLightboxModal(idx);
    });
  });

  // Attach filter listener
  const btns = document.querySelectorAll('#galleryFilterBtns button');
  btns.forEach(b => {
    b.onclick = () => {
      btns.forEach(btn => btn.classList.remove('active'));
      b.classList.add('active');
      renderGallery(b.dataset.filter);
    };
  });
}

function initLightboxModal() {
  // Bootstrap modal initialized dynamically on click
}

function openLightboxModal(index) {
  const item = activeGalleryItems[index];
  if (!item) return;

  const modalImg = document.getElementById('lightboxModalImg');
  const modalTitle = document.getElementById('lightboxModalTitle');
  const modalDesc = document.getElementById('lightboxModalDesc');

  if (modalImg) modalImg.src = item.src;
  if (modalTitle) modalTitle.textContent = item.title;
  if (modalDesc) modalDesc.textContent = `${item.desc} | Photo: ${item.artist || 'Archive'} (${item.license})`;

  const modalEl = document.getElementById('lightboxModal');
  if (modalEl && typeof bootstrap !== 'undefined') {
    const bsModal = new bootstrap.Modal(modalEl);
    bsModal.show();
  }
}

/* --------------------------------------------------------------------------
   8. Contact Form Logic
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('contactStatus');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    const name = document.getElementById('formName').value.trim();
    const email = document.getElementById('formEmail').value.trim();
    const message = document.getElementById('formMessage').value.trim();

    if (!name || !email || !message) {
      e.preventDefault();
      if (status) {
        status.className = 'mt-2 small text-center text-danger';
        status.textContent = 'Please complete all required fields.';
      }
      return;
    }

    if (status) {
      status.className = 'mt-2 small text-center text-success';
      status.textContent = 'Preparing submission...';
    }
  });
}
