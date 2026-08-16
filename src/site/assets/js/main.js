const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const supportsCustomCursor = window.matchMedia('(pointer: fine) and (hover: hover)').matches;
let customCursor = null;
if (supportsCustomCursor) {
  document.documentElement.classList.add('custom-cursor-enabled');
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  cursor.setAttribute('aria-hidden', 'true');
  document.body.append(cursor);
  customCursor = cursor;

  const interactiveSelector = 'a, button, .portfolio-card, .service-card, input, select, textarea';
  document.addEventListener('pointermove', (event) => {
    cursor.style.left = `${event.clientX - 10}px`;
    cursor.style.top = `${event.clientY - 10}px`;
    cursor.classList.add('is-visible');
    const hoveredElement = event.target instanceof Element ? event.target.closest(interactiveSelector) : null;
    cursor.classList.toggle('is-hovering', Boolean(hoveredElement));
  }, { passive: true });
  document.documentElement.addEventListener('mouseleave', () => cursor.classList.remove('is-visible'));
  window.addEventListener('blur', () => cursor.classList.remove('is-visible'));
}

const header = document.querySelector('[data-header]');
const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 48);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
const navToggleLabel = navToggle?.querySelector('.sr-only');
const closeNav = () => {
  if (!nav || !navToggle) return;
  nav.classList.remove('is-open');
  navToggle.setAttribute('aria-expanded', 'false');
  if (navToggleLabel) navToggleLabel.textContent = 'Abrir menú';
  document.body.classList.remove('nav-open');
};

navToggle?.addEventListener('click', () => {
  const open = nav?.classList.toggle('is-open') ?? false;
  navToggle.setAttribute('aria-expanded', String(open));
  if (navToggleLabel) navToggleLabel.textContent = open ? 'Cerrar menú' : 'Abrir menú';
  document.body.classList.toggle('nav-open', open);
});
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNav));
document.addEventListener('pointerdown', (event) => {
  if (!nav?.classList.contains('is-open') || !navToggle || !(event.target instanceof Node)) return;
  if (!nav.contains(event.target) && !navToggle.contains(event.target)) closeNav();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeNav();
});

const revealItems = document.querySelectorAll('[data-reveal]');
if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px' });
  revealItems.forEach((item) => revealObserver.observe(item));
}

const heroStats = document.querySelector('.hero-stats');
const statNumbers = heroStats ? [...heroStats.querySelectorAll('.stat-number')] : [];

const animateStat = (element, target, suffix, duration = 1500) => {
  const startedAt = performance.now();
  const update = (time) => {
    const progress = Math.min((time - startedAt) / duration, 1);
    const eased = 1 - ((1 - progress) ** 3);
    element.textContent = `${Math.floor(target * eased)}${suffix}`;
    if (progress < 1) requestAnimationFrame(update);
    else element.textContent = `${target}${suffix}`;
  };
  requestAnimationFrame(update);
};

if (heroStats && statNumbers.length && !prefersReducedMotion) {
  const values = statNumbers.map((element) => {
    const value = element.textContent.trim();
    return { element, target: Number.parseInt(value.replace(/\D/g, ''), 10), suffix: value.replace(/[0-9]/g, '') };
  });
  values.forEach(({ element, suffix }) => { element.textContent = `0${suffix}`; });

  const playStats = () => values.forEach(({ element, target, suffix }) => animateStat(element, target, suffix));
  if ('IntersectionObserver' in window) {
    const statsObserver = new IntersectionObserver((entries, observer) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      playStats();
      observer.disconnect();
    }, { threshold: 0.5 });
    statsObserver.observe(heroStats);
  } else {
    playStats();
  }
}

const video = document.querySelector('[data-hero-video]');

if (video) {
  if (prefersReducedMotion) {
    video.pause();
  } else {
    video.play().catch(() => {});
  }
}

const projects = {
  'beauty-premium': {
    category: 'Branding · Social · Web', title: 'Marca Premium · Beauty', subtitle: 'Reposicionamiento de marca de belleza como opción premium en su sector', client: 'Beauty Studio Premium', sector: 'Beauty & Wellness', services: 'Branding, Social Media, Web Design', year: '2025',
    challenge: 'El cliente necesitaba diferenciarse de la competencia local y justificar precios premium sin perder clientes actuales. La percepción de marca era genérica y no transmitía el nivel de servicio que ofrecían.',
    solution: 'Desarrollamos un sistema de identidad visual sofisticado con paleta neutra y acentos dorados, fotografía editorial de alta calidad y una experiencia web tipo revista de lujo. Rediseñamos la comunicación en redes sociales con templates de marca y una estrategia de contenidos premium.',
    results: ['+40% engagement en 90 días', '0 → 12k seguidores orgánicos', 'Aumento de ticket promedio 35%', 'Retención de 90% de clientes existentes'],
    hero: { src: 'assets/images/portfolio/beauty/hero.png', width: 1024, height: 892 },
    gallery: [
      { src: 'assets/images/portfolio/beauty/beauty_1.png', width: 600, height: 371 }, { src: 'assets/images/portfolio/beauty/beauty_2.png', width: 371, height: 371 }, { src: 'assets/images/portfolio/beauty/beauty_3.png', width: 600, height: 371 }, { src: 'assets/images/portfolio/beauty/beauty_4.png', width: 371, height: 371 }
    ]
  },
  'restaurant-fb': {
    category: 'Branding · Art Direction', title: 'Restaurant Group · F&B', subtitle: 'Dirección de arte y sistema visual para grupo gastronómico', client: 'Grupo Gastronómico del Sur', sector: 'Food & Beverage', services: 'Art Direction, Menu Design, Food Photography', year: '2024',
    challenge: 'Grupo con tres locales sin identidad unificada, menús físicos desactualizados y fotografía amateur de platos. Necesitaban modernizar sin perder esencia.',
    solution: 'Construimos una dirección de arte coherente, un sistema de menú contemporáneo y una narrativa fotográfica de alto contraste capaz de unificar los puntos de contacto sin borrar la personalidad de cada local.',
    results: ['Menú fotográfico tipo revista', '+50% reservas vía web', 'Cobertura en medios gastronómicos', 'Incremento 25% ticket promedio'],
    hero: { src: 'assets/images/portfolio/restaurant/hero.jpg', width: 1536, height: 1024 },
    gallery: [1, 2, 3, 4, 5].map((number) => ({ src: `assets/images/portfolio/restaurant/gallery-0${number}.jpg`, width: 1536, height: 1024 }))
  },
  'fashion-lifestyle': {
    category: 'Social Media Ecosystem', title: 'Fashion Brand · Lifestyle', subtitle: 'Ecosistema de contenido para marca de moda sustentable', client: 'Verde Moda Consciente', sector: 'Fashion & Lifestyle', services: 'Social Media Strategy, Content Design, Photography Direction', year: '2024',
    challenge: 'Marca con producto diferenciado pero sin una presencia digital fuerte, con un feed genérico que no reflejaba sus valores de sustentabilidad.',
    solution: 'Creamos un feed editorial de lujo, fotografía lifestyle cuidada, templates para narrar cada prenda y una guía completa para sostener la dirección de arte.',
    results: ['Feed tipo editorial de lujo', '+28% CTR en Instagram', '3.5% engagement rate sostenido', '+40% ventas por Instagram en 3 meses'],
    hero: { src: 'assets/images/portfolio/fashion/hero.png', width: 1184, height: 864 },
    gallery: [1, 2, 3, 4, 5].map((number) => ({ src: `assets/images/portfolio/fashion/fashion_${number}.png`, width: 508, height: 371 }))
  },
  'educacion-elearning': {
    category: 'Branding · Social · Web', title: 'Educación · E-learning', subtitle: 'Rebranding completo de plataforma educativa online', client: 'Academia Digital Pro', sector: 'Educación Online', services: 'Branding Systems, Web Design, Social Media', year: '2024',
    challenge: 'Plataforma educativa con una marca amateur que no justificaba precios altos. Competía en un mercado saturado sin una diferenciación clara.',
    solution: 'Desarrollamos una identidad premium, rediseñamos la experiencia de la plataforma y construimos una estrategia de contenidos orientada a posicionarla como referente.',
    results: ['Posicionamiento premium en el sector', '+200% inscripciones orgánicas', 'Precio del curso aumentado 60%', 'Tasa de finalización +25%'],
    hero: { src: 'assets/images/portfolio/education/hero.png', width: 1054, height: 1024 },
    gallery: [{ src: 'assets/images/portfolio/education/edu_1.png', width: 1205, height: 880 }, { src: 'assets/images/portfolio/education/edu_2.png', width: 938, height: 912 }, { src: 'assets/images/portfolio/education/edu_3.png', width: 938, height: 912 }, { src: 'assets/images/portfolio/education/edu_4.png', width: 1136, height: 899 }, { src: 'assets/images/portfolio/education/edu_5.png', width: 938, height: 912 }, { src: 'assets/images/portfolio/education/edu_6.png', width: 938, height: 912 }]
  },
  'derito-legal': {
    category: 'Branding · Web Experience', title: 'Derito Legal · Estudio jurídico', subtitle: 'Identidad y web para estudio jurídico', client: 'Derito Legal', sector: 'Estudio jurídico', services: 'Branding, UI/UX, Web Development', year: '2023',
    challenge: 'El estudio no tenía una identidad visual clara y necesitaba transmitir confiabilidad y modernidad para captar clientes.',
    solution: 'Diseñamos un sistema de marca minimalista, una experiencia web con microinteracciones y una narrativa orientada a beneficios de negocio.',
    results: ['+120% conversión en landing', 'Reducción 45% bounce rate', 'Sistema visual unificado', 'Cierre con clientes Serie A'],
    hero: { src: 'assets/images/portfolio/derito/hero.png', width: 1200, height: 896 },
    gallery: [{ src: 'assets/images/portfolio/derito/derito_1.png', width: 600, height: 371 }, { src: 'assets/images/portfolio/derito/derito_2.png', width: 600, height: 371 }, { src: 'assets/images/portfolio/derito/derito_3.png', width: 508, height: 371 }, { src: 'assets/images/portfolio/derito/derito_4.png', width: 508, height: 371 }, { src: 'assets/images/portfolio/derito/derito_5.png', width: 508, height: 371 }]
  },
  'alquilerdeautos-hertz': {
    category: 'Web · Social · Content', title: 'Alquiler de autos · Hertz', subtitle: 'Ecosistema digital para empresa de alquiler de autos', client: 'Hertz', sector: 'Alquiler de autos', services: 'Web Development, Social Content, Piezas gráficas', year: '2019',
    challenge: 'El proyecto requería una presencia web clara y una base visual consistente para posicionar la empresa en buscadores y ordenar su comunicación.',
    solution: 'Desarrollamos la experiencia web y un sistema de piezas para folletería, videos publicitarios y contenidos en redes sociales.',
    results: ['Modernización de la marca', '+85% tiempo en sitio', '15% leads cualificados adicionales', 'Reducción 60% tiempo de cierre'],
    hero: { src: 'assets/images/portfolio/hertz/hero.png', width: 1255, height: 848 },
    gallery: [1, 2, 3, 4, 5].map((number) => ({ src: `assets/images/portfolio/hertz/hertz_${number}.png`, width: 600, height: 371 }))
  }
};

const projectOrder = Object.keys(projects);
const modal = document.querySelector('#project-modal');
let activeProjectIndex = 0;

const setText = (selector, value) => {
  const element = modal?.querySelector(selector);
  if (element) element.textContent = value;
};

const renderProject = (projectId) => {
  if (!modal || !projects[projectId]) return;
  const project = projects[projectId];
  activeProjectIndex = projectOrder.indexOf(projectId);
  setText('#modal-category', project.category);
  setText('#modal-title', project.title);
  setText('#modal-subtitle', project.subtitle);
  setText('#modal-client', project.client);
  setText('#modal-sector', project.sector);
  setText('#modal-services', project.services);
  setText('#modal-year', project.year);
  setText('#modal-challenge', project.challenge);
  setText('#modal-solution', project.solution);

  const hero = modal.querySelector('#modal-hero');
  hero.src = project.hero.src;
  hero.width = project.hero.width;
  hero.height = project.hero.height;
  hero.alt = project.title;

  const results = modal.querySelector('#modal-results');
  results.replaceChildren(...project.results.map((result) => {
    const item = document.createElement('li');
    item.textContent = result;
    return item;
  }));

  const gallery = modal.querySelector('#modal-gallery');
  gallery.replaceChildren(...project.gallery.map((image, index) => {
    const figure = document.createElement('figure');
    figure.className = 'gallery-item';
    const img = document.createElement('img');
    img.src = image.src;
    img.width = image.width;
    img.height = image.height;
    img.loading = 'lazy';
    img.alt = `${project.title}, imagen ${index + 1}`;
    figure.append(img);
    return figure;
  }));

  const previous = modal.querySelector('[data-project-prev]');
  const next = modal.querySelector('[data-project-next]');
  previous.disabled = activeProjectIndex === 0;
  next.disabled = activeProjectIndex === projectOrder.length - 1;
  modal.scrollTop = 0;
};

document.querySelectorAll('[data-project]').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    renderProject(trigger.dataset.project);
    if (!modal?.open) modal?.showModal();
    if (customCursor && modal) modal.append(customCursor);
    document.body.classList.add('modal-open');
  });
});

const closeModal = () => {
  modal?.close();
  if (customCursor) document.body.append(customCursor);
  document.body.classList.remove('modal-open');
};
modal?.querySelector('[data-modal-close]')?.addEventListener('click', closeModal);
modal?.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});
modal?.addEventListener('close', () => {
  if (customCursor) document.body.append(customCursor);
  document.body.classList.remove('modal-open');
});
modal?.querySelector('[data-project-prev]')?.addEventListener('click', () => renderProject(projectOrder[activeProjectIndex - 1]));
modal?.querySelector('[data-project-next]')?.addEventListener('click', () => renderProject(projectOrder[activeProjectIndex + 1]));
document.addEventListener('keydown', (event) => {
  if (!modal?.open) return;
  if (event.key === 'ArrowLeft' && activeProjectIndex > 0) renderProject(projectOrder[activeProjectIndex - 1]);
  if (event.key === 'ArrowRight' && activeProjectIndex < projectOrder.length - 1) renderProject(projectOrder[activeProjectIndex + 1]);
});

const contactForm = document.querySelector('[data-contact-form]');
contactForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const button = contactForm.querySelector('button[type="submit"]');
  const status = contactForm.querySelector('[data-form-status]');
  const defaultLabel = button.textContent;
  button.disabled = true;
  button.textContent = 'Enviando…';
  status.textContent = '';
  status.className = 'form-status';
  try {
    const response = await fetch(contactForm.action, { method: 'POST', body: new FormData(contactForm), headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error('No se pudo enviar');
    contactForm.reset();
    status.textContent = 'Proyecto enviado. Gracias por escribirnos.';
    status.classList.add('is-success');
    button.textContent = 'Proyecto enviado';
  } catch {
    status.textContent = 'No pudimos enviarlo. Podés escribir a estudiodcrea@gmail.com.';
    status.classList.add('is-error');
    button.textContent = 'Reintentar';
  } finally {
    button.disabled = false;
    window.setTimeout(() => { button.textContent = defaultLabel; }, 3500);
  }
});

document.querySelectorAll('[data-year]').forEach((year) => { year.textContent = new Date().getFullYear(); });
