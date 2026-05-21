// ============================================================
//  JUDY DEVREL PORTFOLIO — script.js
//  Renders all content from content.js into the page,
//  then handles nav, scroll reveal, and counter animations.
// ============================================================

// ── helpers ─────────────────────────────────────────────────
const el   = (id) => document.getElementById(id);
const html = (id, markup) => { el(id).innerHTML = markup; };
const esc  = (s) => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

// ── NAV ─────────────────────────────────────────────────────
el('nav-links').innerHTML = `
  <li><a href="#about">About</a></li>
  <li><a href="#experience">Experience</a></li>
  <li><a href="#skills">Skills</a></li>
  <li><a href="#case-studies">Case Studies</a></li>
  <li><a href="#content">Content</a></li>
  <li><a href="#impact">Impact</a></li>
  <li><a href="#contact" class="nav-cta">Get in Touch</a></li>
`;

// ── HERO ────────────────────────────────────────────────────
const H = CONTENT.hero;
html('hero-text', `
  <div class="hero-tag">${esc(H.tag)}</div>
  <h1 class="hero-name">${esc(H.title)}</h1>
  <p class="hero-sub">${esc(H.subtitle)}</p>
  <div class="hero-ctas">
    <a href="#case-studies" class="btn btn-primary">${esc(H.cta_primary)}</a>
    <a href="#contact"      class="btn btn-ghost">${esc(H.cta_ghost)}</a>
  </div>
  <div class="hero-badges">
    ${H.badges.map(b => `<span class="badge">${esc(b)}</span>`).join('')}
  </div>
`);

// ── ABOUT ───────────────────────────────────────────────────
const A = CONTENT.about;
html('about-container', `
  <div class="section-label mono">${esc(A.label)}</div>
  <div class="about-grid">
    <div class="about-text">
      <h2 class="section-title">${esc(A.title)}</h2>
      ${A.paragraphs.map(p => `<p>${esc(p)}</p>`).join('')}
    </div>
    <div class="about-stats">
      ${A.stats.map(s => `
        <div class="stat-card">
          <span class="stat-num"
            ${s.animated ? `data-target="${s.value}" data-suffix="${s.suffix}"` : ''}>
            ${esc(s.value)}${esc(s.suffix)}
          </span>
          <span class="stat-label">${esc(s.label)}</span>
        </div>
      `).join('')}
    </div>
  </div>
`);

// ── EXPERIENCE ──────────────────────────────────────────────
const EX = CONTENT.experience;
html('experience-container', `
  <div class="section-label mono">${esc(EX.label)}</div>
  <h2 class="section-title">${esc(EX.title)}</h2>
  <div class="timeline">
    ${EX.roles.map(r => `
      <div class="timeline-item ${r.featured ? 'featured' : ''}">
        <div class="timeline-meta">
          <span class="timeline-period mono">${esc(r.period)}</span>
          ${r.badge ? `<span class="timeline-badge">${esc(r.badge)}</span>` : ''}
        </div>
        <div class="timeline-content">
          <h3 class="timeline-role">${esc(r.role)}</h3>
          <a href="${r.org_url}" class="timeline-org" ${r.org_url !== '#' ? 'target="_blank" rel="noopener"' : ''}>${esc(r.org)}</a>
          <p class="timeline-desc">${esc(r.desc)}</p>
          <ul class="timeline-bullets">
            ${r.bullets.map(b => `<li>${esc(b)}</li>`).join('')}
          </ul>
          <div class="timeline-tags">
            ${r.tags.map(t => `<span class="tag">${esc(t)}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('')}
  </div>
`);

// ── SKILLS ──────────────────────────────────────────────────
const SK = CONTENT.skills;
html('skills-container', `
  <div class="section-label mono">${esc(SK.label)}</div>
  <h2 class="section-title">${esc(SK.title)}</h2>
  <div class="skills-grid">
    ${SK.blocks.map(b => `
      <div class="skill-block">
        <h3>${esc(b.title)}</h3>
        <p>${esc(b.desc)}</p>
      </div>
    `).join('')}
  </div>
  <div class="skills-supplemental">
    <div class="supp-group">
      <h4 class="mono">Tools &amp; Platforms</h4>
      <div class="pill-list">${SK.tools.map(t => `<span class="pill">${esc(t)}</span>`).join('')}</div>
    </div>
    <div class="supp-group">
      <h4 class="mono">Technical Areas</h4>
      <div class="pill-list">${SK.technical.map(t => `<span class="pill">${esc(t)}</span>`).join('')}</div>
    </div>
    <div class="supp-group">
      <h4 class="mono">Soft Skills</h4>
      <div class="pill-list">${SK.soft.map(t => `<span class="pill">${esc(t)}</span>`).join('')}</div>
    </div>
  </div>
`);

// ── CASE STUDIES ────────────────────────────────────────────
const CS = CONTENT.cases;
html('cases-container', `
  <div class="section-label mono">${esc(CS.label)}</div>
  <h2 class="section-title">${esc(CS.title)}</h2>
  <div class="case-grid">
    ${CS.items.map(c => `
      <div class="case-card ${c.featured ? 'featured-case' : ''}">
        <div class="case-header">
          ${c.tags.map(t => `<span class="case-tag">${esc(t)}</span>`).join('')}
        </div>
        <h3>${esc(c.title)}</h3>
        <p><strong>Challenge:</strong> ${esc(c.challenge)}</p>
        <p><strong>What I did:</strong> ${esc(c.action)}</p>
        <p><strong>Result:</strong> ${esc(c.result)}</p>
      </div>
    `).join('')}
  </div>
`);

// ── TECHNICAL CONTENT ───────────────────────────────────────
const CT = CONTENT.content_section;
html('content-container', `
  <div class="section-label mono">${esc(CT.label)}</div>
  <h2 class="section-title">${esc(CT.title)}</h2>
  <p class="section-intro">${esc(CT.intro)}</p>
  <div class="article-grid">
    ${CT.demo_articles.map(a => `
      <div class="article-card">
        <div class="article-banner" style="background:${a.gradient}"></div>
        <div class="article-body">
          <div class="article-meta">
            <span class="article-platform">${esc(a.platform)}</span>
            <span class="article-date">${esc(a.date)}</span>
          </div>
          <h3 class="article-title">${esc(a.title)}</h3>
          <p class="article-excerpt">${esc(a.excerpt)}</p>
          <a href="${a.href}" class="article-cta">Read article →</a>
        </div>
      </div>
    `).join('')}
  </div>

  <div class="content-divider"></div>

  <div class="content-grid">
    ${CT.items.map(i => `
      <div class="content-item">
        <div class="content-type mono">${esc(i.type)}</div>
        <h3>${esc(i.title)}</h3>
        <p>${esc(i.desc)}</p>
        <div class="content-meta">${esc(i.meta)}</div>
      </div>
    `).join('')}
  </div>
`);

// ── ECOSYSTEM IMPACT ────────────────────────────────────────
const IM = CONTENT.impact;
html('impact-container', `
  <div class="section-label mono">${esc(IM.label)}</div>
  <h2 class="section-title">${esc(IM.title)}</h2>

  <div class="impact-stats-row">
    ${IM.stats.map(s => `
      <div class="impact-stat">
        <span class="impact-num"
          ${s.animated ? `data-target="${s.value}" data-suffix="${s.suffix}"` : ''}>
          ${esc(s.value)}<span class="suffix">${esc(s.suffix)}</span>
        </span>
        <div class="impact-desc">${esc(s.label)}</div>
      </div>
    `).join('')}
  </div>

  <div class="impact-narrative">
    <h3>${esc(IM.narrative_title)}</h3>
    <p>${esc(IM.narrative)}</p>
  </div>

  <div class="affiliated">
    <h3 class="mono">Ecosystems I've Worked In</h3>
    <div class="affiliated-list">
      ${IM.ecosystems.map(e => `
        <div class="affiliated-item">
          <div class="affiliated-dot dot-${esc(e.color)}"></div>
          <span><strong>${esc(e.name)}</strong> — ${esc(e.desc)}</span>
        </div>
      `).join('')}
    </div>
  </div>
`);

// ── LEARNING ────────────────────────────────────────────────
const LR = CONTENT.learning;
html('learning-container', `
  <div class="section-label mono">${esc(LR.label)}</div>
  <h2 class="section-title">${esc(LR.title)}</h2>
  <p class="section-intro">${esc(LR.intro)}</p>
  <div class="learning-grid">
    ${LR.items.map(i => `
      <div class="learning-item">
        <div class="learning-icon mono">${esc(i.num)}</div>
        <h3>${esc(i.title)}</h3>
        <p>${esc(i.desc)}</p>
      </div>
    `).join('')}
  </div>
`);

// ── CONTACT ─────────────────────────────────────────────────
const CO = CONTENT.contact;
html('contact-container', `
  <div class="contact-inner">
    <div class="section-label mono">${esc(CO.label)}</div>
    <h2 class="section-title">${esc(CO.title)}</h2>
    <p>${esc(CO.body)}</p>
    <div class="contact-links">
      ${CO.links.map(l => `
        <a href="${l.href}" class="contact-btn" ${l.href.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>
          <span class="mono">${l.icon}</span> ${esc(l.label)}
        </a>
      `).join('')}
    </div>
    <div class="contact-availability">
      <span class="avail-dot"></span>
      <span>${esc(CO.availability)}</span>
    </div>
  </div>
`);

// ── FOOTER ──────────────────────────────────────────────────
const FT = CONTENT.footer;
html('footer-inner', `
  <span class="footer-copy">judy<span class="accent">.</span> &copy; 2025</span>
  <span class="footer-tagline">${esc(FT.tagline)}</span>
  <a href="#hero" class="footer-top mono">↑ back to top</a>
`);

// ============================================================
//  NAVIGATION — toggle + active state
// ============================================================
const navToggle  = document.querySelector('.nav-toggle');
const navLinkEls = document.getElementById('nav-links');
const navWrapper = document.querySelector('.nav-wrapper');

navToggle?.addEventListener('click', () => {
  navLinkEls.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', navLinkEls.classList.contains('open'));
});
navLinkEls.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinkEls.classList.remove('open'));
});

const sections = document.querySelectorAll('section[id]');
const navItems = () => navLinkEls.querySelectorAll('a[href^="#"]');

function updateNav() {
  const y = window.scrollY + 80;
  sections.forEach(sec => {
    if (y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight) {
      navItems().forEach(a => {
        a.classList.toggle('active-nav', a.getAttribute('href') === `#${sec.id}`);
      });
    }
  });
  navWrapper.classList.toggle('nav-scrolled', window.scrollY > 20);
}
window.addEventListener('scroll', updateNav, { passive: true });

// ============================================================
//  SCROLL REVEAL
// ============================================================
function addReveal() {
  document.querySelectorAll(
    '.timeline-item, .skill-block, .case-card, .content-item, ' +
    '.learning-item, .impact-stat, .stat-card'
  ).forEach(el => el.classList.add('reveal'));

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 55);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ============================================================
//  NUMBER COUNTER ANIMATION
// ============================================================
function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

function animateCounter(el) {
  const raw      = el.dataset.target;
  const target   = parseFloat(raw);
  const isFloat  = raw.includes('.');
  const suffix   = el.dataset.suffix || '';
  const duration = 1400;
  const start    = performance.now();

  // Rebuild element so suffix stays styled
  function render(val) {
    if (isFloat) {
      el.innerHTML = val.toFixed(1) + `<span class="suffix">${suffix}</span>`;
    } else {
      el.innerHTML = Math.round(val) + `<span class="suffix">${suffix}</span>`;
    }
  }

  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    render(target * easeOut(p));
    if (p < 1) requestAnimationFrame(tick);
    else render(target);
  }
  requestAnimationFrame(tick);
}

function initCounters() {
  const counterEls = document.querySelectorAll(
    '.stat-num[data-target], .impact-num[data-target]'
  );
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counterEls.forEach(el => obs.observe(el));
}

// ── Run after DOM is built by the renderers above ───────────
addReveal();
initCounters();
