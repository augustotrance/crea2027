document.documentElement.classList.add('js');

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function initHeader() {
  const header = document.querySelector('[data-header]');
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  if (!header) return;

  const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  if (!toggle || !nav) return;
  const closeNavigation = () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.querySelector('.sr-only').textContent = 'Abrir menú';
    nav.classList.remove('is-open');
    document.body.classList.remove('nav-open');
  };

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.querySelector('.sr-only').textContent = open ? 'Cerrar menú' : 'Abrir menú';
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeNavigation();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeNavigation();
  });
}

function initHeroVideo() {
  const video = document.querySelector('[data-hero-video]');
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const canLoad = video
    && window.matchMedia('(min-width: 48rem)').matches
    && !reducedMotion.matches
    && !connection?.saveData;

  if (!canLoad) return;
  for (const source of video.querySelectorAll('source[data-src]')) {
    source.src = source.dataset.src;
  }
  video.load();
  video.play().catch(() => {
    // El póster conserva una portada completa si el navegador bloquea la reproducción.
  });
}

function initReveals() {
  const elements = [...document.querySelectorAll('[data-reveal]')];
  if (!elements.length || reducedMotion.matches || !('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }, { rootMargin: '0px 0px -8% 0px', threshold: .12 });
  elements.forEach((element) => observer.observe(element));
}

function initFilters() {
  const filterRoot = document.querySelector('[data-filters]');
  const grid = document.querySelector('[data-project-grid]');
  const status = document.querySelector('[data-filter-status]');
  if (!filterRoot || !grid) return;

  const cards = [...grid.querySelectorAll('[data-category]')];
  filterRoot.addEventListener('click', (event) => {
    const button = event.target.closest('[data-filter]');
    if (!button) return;
    const selected = button.dataset.filter;
    for (const option of filterRoot.querySelectorAll('[data-filter]')) {
      const active = option === button;
      option.classList.toggle('is-active', active);
      option.setAttribute('aria-pressed', String(active));
    }

    let visible = 0;
    cards.forEach((card) => {
      const categories = card.dataset.category.split(' ');
      const matches = selected === 'all' || categories.includes(selected);
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    if (status) status.textContent = `${visible} ${visible === 1 ? 'proyecto visible' : 'proyectos visibles'}.`;
  });
}

function initContactForm() {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;
  const message = form.querySelector('#message');
  const count = form.querySelector('[data-message-count]');
  const status = form.querySelector('[data-form-status]');
  const button = form.querySelector('button[type="submit"]');

  message?.addEventListener('input', () => {
    if (count) count.textContent = String(message.value.length);
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    button.disabled = true;
    button.setAttribute('aria-busy', 'true');
    status.textContent = 'Enviando…';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (!response.ok) throw new Error('Respuesta no válida');
      form.reset();
      if (count) count.textContent = '0';
      status.textContent = 'Gracias. La consulta fue enviada correctamente.';
    } catch {
      status.innerHTML = 'No pudimos enviar el formulario. Escribinos a <a href="mailto:estudiodcrea@gmail.com">estudiodcrea@gmail.com</a>.';
    } finally {
      button.disabled = false;
      button.removeAttribute('aria-busy');
    }
  });
}

function setCurrentYear() {
  document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
}

initHeader();
initHeroVideo();
initReveals();
initFilters();
initContactForm();
setCurrentYear();
