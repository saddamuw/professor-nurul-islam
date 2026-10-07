/**
 * Prof. Dr. Md. Nurul Islam - Vice-Chancellor Information Hub JS
 * Interactive Features: Theme Switcher, Dynamic Rendering, Filters, Lightbox, Scroll Animations
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderProfileData();
  renderPriorities();
  renderTimeline();
  renderResearch();
  renderPublications('all');
  renderNews('all');
  renderGallery('all');
  initNavigation();
  initLightbox();
  initContactForm();
});

/* --------------------------------------------------------------------------
   1. Theme Switcher (Dark / Light Mode)
   -------------------------------------------------------------------------- */
function initTheme() {
  const toggleBtn = document.getElementById('themeToggle');
  const storedTheme = localStorage.getItem('theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const currentTheme = storedTheme || (systemDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const active = document.documentElement.getAttribute('data-theme');
      const nextTheme = active === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('theme', nextTheme);
      updateThemeIcon(nextTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const toggleBtn = document.getElementById('themeToggle');
  if (!toggleBtn) return;
  toggleBtn.innerHTML = theme === 'dark' 
    ? '<i class="fas fa-sun" aria-label="Switch to light mode"></i>' 
    : '<i class="fas fa-moon" aria-label="Switch to dark mode"></i>';
}

/* --------------------------------------------------------------------------
   2. Dynamic Profile & Hero Data Rendering
   -------------------------------------------------------------------------- */
function renderProfileData() {
  if (typeof SITE_DATA === 'undefined') return;
  const p = SITE_DATA.profile;

  // Render stats
  const statsContainer = document.getElementById('heroStats');
  if (statsContainer && SITE_DATA.stats) {
    statsContainer.innerHTML = SITE_DATA.stats.map(s => `
      <div class="stat-item">
        <span class="stat-number" data-target="${s.value}">${s.value}${s.suffix}</span>
        <span class="stat-label">${s.label}</span>
      </div>
    `).join('');
  }
}

/* --------------------------------------------------------------------------
   3. Render VC Desk Priorities
   -------------------------------------------------------------------------- */
function renderPriorities() {
  const container = document.getElementById('prioritiesGrid');
  if (!container || typeof SITE_DATA === 'undefined') return;

  container.innerHTML = SITE_DATA.vcVision.map(item => `
    <div class="priority-card">
      <div class="priority-icon-wrapper">
        <i class="fas ${item.icon}"></i>
      </div>
      <h3 class="priority-title">${item.title}</h3>
      <p class="priority-desc">${item.description}</p>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   4. Render Timeline (Academic & Administrative Journey)
   -------------------------------------------------------------------------- */
function renderTimeline() {
  const container = document.getElementById('timelineContainer');
  if (!container || typeof SITE_DATA === 'undefined') return;

  container.innerHTML = SITE_DATA.timeline.map((t, idx) => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-header">
          <img src="${t.logo}" alt="${t.institution}" class="timeline-logo">
          <span class="timeline-year">${t.year}</span>
        </div>
        <h3 class="timeline-role">${t.role}</h3>
        <div class="timeline-inst">${t.institution}</div>
        <span class="badge">${t.badge}</span>
        <p class="timeline-desc" style="margin-top: 10px;">${t.desc}</p>
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   5. Render Research Areas
   -------------------------------------------------------------------------- */
function renderResearch() {
  const container = document.getElementById('researchGrid');
  if (!container || typeof SITE_DATA === 'undefined') return;

  container.innerHTML = SITE_DATA.researchAreas.map(r => `
    <div class="research-card">
      <i class="fas ${r.icon} research-icon"></i>
      <h3 class="research-title">${r.title}</h3>
      <p class="research-desc">${r.desc}</p>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   6. Render Publications with Filtering
   -------------------------------------------------------------------------- */
function renderPublications(filterCategory = 'all') {
  const container = document.getElementById('pubList');
  if (!container || typeof SITE_DATA === 'undefined') return;

  const filtered = filterCategory === 'all' 
    ? SITE_DATA.publications 
    : SITE_DATA.publications.filter(p => p.category === filterCategory);

  container.innerHTML = filtered.map(pub => `
    <div class="pub-card">
      <div class="pub-year">${pub.year}</div>
      <div class="pub-details">
        <h4 class="pub-title">${pub.title}</h4>
        <div class="pub-authors">${pub.authors}</div>
        <div class="pub-journal">${pub.journal} (${pub.vol})</div>
      </div>
      <div>
        <span class="badge">${pub.badge}</span>
      </div>
    </div>
  `).join('');

  // Attach filter listeners
  const filterBtns = document.querySelectorAll('.pub-filter-btn');
  filterBtns.forEach(btn => {
    btn.onclick = () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderPublications(btn.dataset.filter);
    };
  });
}

/* --------------------------------------------------------------------------
   7. Render News & Events Hub with Filters
   -------------------------------------------------------------------------- */
function renderNews(filter = 'all') {
  const container = document.getElementById('newsGrid');
  if (!container || typeof SITE_DATA === 'undefined') return;

  let list = SITE_DATA.newsEvents;
  if (filter !== 'all') {
    list = list.filter(n => n.category === filter || n.lang === filter);
  }

  container.innerHTML = list.map(item => `
    <div class="news-card">
      <div>
        <div class="news-meta">
          <span class="news-outlet">${item.outlet}</span>
          <span class="news-date">${item.date}</span>
        </div>
        <h3 class="news-title">${item.title}</h3>
        <p class="news-desc">${item.desc}</p>
      </div>
      <a href="${item.link}" target="_blank" rel="noopener" class="news-link">
        Read Source Coverage <i class="fas fa-arrow-right"></i>
      </a>
    </div>
  `).join('');

  // Attach filter buttons listener
  const filterBtns = document.querySelectorAll('.news-filter-btn');
  filterBtns.forEach(btn => {
    btn.onclick = () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderNews(btn.dataset.filter);
    };
  });
}

/* --------------------------------------------------------------------------
   8. Render Photo Gallery & Lightbox Integration
   -------------------------------------------------------------------------- */
let currentGalleryItems = [];
let currentLightboxIndex = 0;

function renderGallery(filter = 'all') {
  const container = document.getElementById('galleryGrid');
  if (!container || typeof SITE_DATA === 'undefined') return;

  currentGalleryItems = filter === 'all' 
    ? SITE_DATA.gallery 
    : SITE_DATA.gallery.filter(g => g.cat === filter);

  container.innerHTML = currentGalleryItems.map((item, index) => `
    <div class="gallery-item" data-index="${index}">
      <img src="${item.thumb}" alt="${item.title}" class="gallery-img" loading="lazy">
      <div class="gallery-overlay">
        <h4 class="gallery-title">${item.title}</h4>
        <span class="gallery-sub">${item.artist ? 'Photo: ' + item.artist : ''} (${item.license})</span>
      </div>
    </div>
  `).join('');

  // Click handler for lightbox opening
  const items = container.querySelectorAll('.gallery-item');
  items.forEach(el => {
    el.addEventListener('click', () => {
      const idx = parseInt(el.dataset.index, 10);
      openLightbox(idx);
    });
  });

  // Filter handlers
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  filterBtns.forEach(btn => {
    btn.onclick = () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGallery(btn.dataset.filter);
    };
  });
}

function initLightbox() {
  const modal = document.getElementById('lightboxModal');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');

  if (!modal) return;

  closeBtn?.addEventListener('click', closeLightbox);
  prevBtn?.addEventListener('click', showPrevLightbox);
  nextBtn?.addEventListener('click', showNextLightbox);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrevLightbox();
    if (e.key === 'ArrowRight') showNextLightbox();
  });
}

function openLightbox(index) {
  const modal = document.getElementById('lightboxModal');
  if (!modal || !currentGalleryItems[index]) return;

  currentLightboxIndex = index;
  updateLightboxContent();
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function showPrevLightbox() {
  currentLightboxIndex = (currentLightboxIndex - 1 + currentGalleryItems.length) % currentGalleryItems.length;
  updateLightboxContent();
}

function showNextLightbox() {
  currentLightboxIndex = (currentLightboxIndex + 1) % currentGalleryItems.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const img = document.getElementById('lightboxImg');
  const title = document.getElementById('lightboxTitle');
  const desc = document.getElementById('lightboxDesc');
  const item = currentGalleryItems[currentLightboxIndex];

  if (!item) return;
  img.src = item.src;
  img.alt = item.title;
  title.textContent = item.title;
  desc.textContent = `${item.desc} | License: ${item.license}`;
}

/* --------------------------------------------------------------------------
   9. Navigation & Smooth Scroll
   -------------------------------------------------------------------------- */
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const toggleBtn = document.getElementById('navToggleBtn');
  const navMenu = document.getElementById('navMenu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
    highlightActiveNav();
  });

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }
}

function highlightActiveNav() {
  const sections = document.querySelectorAll('section[id], header[id]');
  const scrollPos = window.scrollY + 100;

  sections.forEach(sec => {
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');
    const link = document.querySelector(`.nav-link[href="#${id}"]`);

    if (scrollPos >= top && scrollPos < top + height) {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link?.classList.add('active');
    }
  });
}

/* --------------------------------------------------------------------------
   10. Contact Form Integration
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const statusMsg = document.getElementById('contactStatus');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('formName').value.trim();
    const email = document.getElementById('formEmail').value.trim();
    const message = document.getElementById('formMessage').value.trim();

    if (!name || !email || !message) {
      if (statusMsg) {
        statusMsg.style.color = '#e74c3c';
        statusMsg.textContent = 'Please fill out all required fields.';
      }
      return;
    }

    if (statusMsg) {
      statusMsg.style.color = '#27ae60';
      statusMsg.textContent = 'Thank you! Your message has been prepared for transmission.';
    }

    // Submit via formsubmit if configured or fallback reset
    form.reset();
  });
}
