import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { resolve } from 'node:path';
import test from 'node:test';

const root = resolve(import.meta.dirname, '..', 'src/site');
const routes = [
  'index.html',
  'casos/beauty-premium/index.html',
  'casos/restaurant-editorial/index.html',
  'casos/fashion-lifestyle/index.html',
  'casos/educacion-elearning/index.html',
  'casos/derito-legal/index.html',
  'casos/hertz-mobility/index.html',
  'privacidad/index.html',
  'terminos/index.html',
  '404.html'
];

test('todas las rutas públicas existen', async () => {
  for (const route of routes) assert.equal((await stat(resolve(root, route))).isFile(), true, route);
});

test('el formulario tiene destino, consentimiento y alternativa de correo', async () => {
  const html = await readFile(resolve(root, 'index.html'), 'utf8');
  assert.match(html, /action="https:\/\/formspree\.io\/f\/xeeeazkq"/);
  assert.match(html, /name="privacy"/);
  assert.match(html, /mailto:estudiodcrea@gmail\.com/);
});

test('la experiencia respeta movimiento reducido', async () => {
  const css = await readFile(resolve(root, 'assets/css/styles.css'), 'utf8');
  const js = await readFile(resolve(root, 'assets/js/main.js'), 'utf8');
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(js, /prefers-reduced-motion/);
});

test('la identidad visual original es la fuente vinculante', async () => {
  const html = await readFile(resolve(root, 'index.html'), 'utf8');
  const css = await readFile(resolve(root, 'assets/css/styles.css'), 'utf8');
  assert.match(html, /No solo diseñamos,<br>creamos legados visuales\./);
  assert.match(html, /Space\+Grotesk/);
  assert.match(html, /assets\/images\/brand\/logo-crea\.png/);
  assert.doesNotMatch(html, /Ideas claras/);
  assert.match(css, /--color-bg:\s*#0a0a0f/);
  assert.match(css, /--color-pink:\s*#ff2e8b/);
  assert.match(css, /--color-green:\s*#a4ff3a/);
});

test('el video original completo y los recursos de máxima calidad están presentes', async () => {
  const html = await readFile(resolve(root, 'index.html'), 'utf8');
  const video = await stat(resolve(root, 'assets/video/crea-services-hero.mp4'));
  const logo = await stat(resolve(root, 'assets/images/brand/logo-crea.png'));
  assert.match(html, /assets\/video\/crea-services-hero\.mp4/);
  assert.ok(video.size > 20_000_000, `video inesperadamente pequeño: ${video.size}`);
  assert.ok(logo.size > 100_000, `logo inesperadamente pequeño: ${logo.size}`);
});

test('las galerías preservan las proporciones naturales', async () => {
  const css = await readFile(resolve(root, 'assets/css/styles.css'), 'utf8');
  assert.match(css, /\.gallery-item img[^}]*height:\s*auto/s);
  assert.match(css, /\.case-gallery img[^}]*height:\s*auto/s);
  assert.match(css, /\.project-hero img[^}]*width:\s*100%[^}]*height:\s*auto/s);
  assert.match(css, /\.case-cover img[^}]*width:\s*100%[^}]*height:\s*auto/s);
  assert.doesNotMatch(css, /\.(?:project-hero|case-cover) img[^}]*max-height/s);
});

test('las galerías conservan proporciones y e-learning usa una grilla uniforme propia', async () => {
  const css = await readFile(resolve(root, 'assets/css/styles.css'), 'utf8');
  const js = await readFile(resolve(root, 'assets/js/main.js'), 'utf8');
  assert.match(css, /\.gallery-grid[^}]*columns:\s*2/s);
  assert.match(css, /\.gallery-item[^}]*break-inside:\s*avoid/s);
  assert.match(css, /\.case-gallery[^}]*columns:\s*2/s);
  assert.match(css, /\.case-gallery figure[^}]*break-inside:\s*avoid/s);
  assert.match(css, /\.gallery-grid--aligned[^}]*display:\s*grid[^}]*grid-template-columns:\s*repeat\(2,/s);
  assert.match(css, /\.case-gallery--aligned[^}]*display:\s*grid[^}]*grid-template-columns:\s*repeat\(2,/s);
  assert.match(css, /\.gallery-grid--education[^}]*display:\s*grid[^}]*grid-template-columns:\s*repeat\(2,/s);
  assert.match(css, /\.gallery-grid--education \.gallery-item[^}]*aspect-ratio:\s*5\s*\/\s*4/s);
  assert.match(css, /\.gallery-grid--education \.gallery-item img[^}]*object-fit:\s*cover/s);
  assert.match(css, /\.case-gallery--education[^}]*display:\s*grid[^}]*grid-template-columns:\s*repeat\(2,/s);
  assert.match(css, /\.case-gallery--education figure[^}]*aspect-ratio:\s*5\s*\/\s*4/s);
  assert.match(css, /\.case-gallery--education img[^}]*object-fit:\s*cover/s);
  assert.match(css, /@media \(max-width: 768px\)[\s\S]*?\.gallery-grid[^}]*columns:\s*1/);
  assert.match(css, /@media \(max-width: 768px\)[\s\S]*?\.case-gallery[^}]*columns:\s*1/);
  assert.match(js, /gallery-grid--aligned', projectId === 'derito-legal'/);
  assert.match(js, /gallery-grid--education', projectId === 'educacion-elearning'/);

  for (const route of routes.filter((route) => route.startsWith('casos/'))) {
    const html = await readFile(resolve(root, route), 'utf8');
    const aligned = route.includes('derito-legal');
    const education = route.includes('educacion-elearning');
    assert.equal((html.match(/class="case-gallery(?: case-gallery--(?:aligned|education))?"/g) ?? []).length, 1, route);
    assert.equal(html.includes('case-gallery--aligned'), aligned, route);
    assert.equal(html.includes('case-gallery--education'), education, route);
    assert.ok((html.match(/<figure>/g) ?? []).length >= 4, route);
  }
});

test('el selector ESP–ENG traduce el sitio completo y conserva español por defecto', async () => {
  const main = await readFile(resolve(root, 'assets/js/main.js'), 'utf8');
  const i18n = await readFile(resolve(root, 'assets/js/i18n.js'), 'utf8');
  assert.match(main, /from '\.\/i18n\.js'/);
  assert.match(main, /initializeLanguage\(\)/);
  assert.match(i18n, /const storageKey = "crea-language"/);
  assert.match(i18n, /document\.documentElement\.lang = currentLanguage/);
  assert.match(i18n, /savedLanguage = "es"/);
  assert.match(i18n, /\["No solo diseñamos,", "We don't just design,"\]/);
  assert.match(i18n, /\["Política de privacidad", "Privacy Policy"\]/);
  assert.match(i18n, /\["Acompañamiento estratégico para empresas", "Strategic Business Support"\]/);
  assert.match(i18n, /\["¿Listo para dar el próximo salto\?", "Ready to take the next leap\?"\]/);

  for (const route of routes) {
    const html = await readFile(resolve(root, route), 'utf8');
    assert.equal((html.match(/data-language-toggle/g) ?? []).length, 1, route);
    assert.match(html, /<html lang="es">/, route);
    assert.match(html, /type="module" src="(?:\.\.\/\.\.\/|\.\.\/)?assets\/js\/main\.js"/, route);
  }
});

test('las correcciones solicitadas permanecen activas en escritorio y móvil', async () => {
  const html = await readFile(resolve(root, 'index.html'), 'utf8');
  const css = await readFile(resolve(root, 'assets/css/styles.css'), 'utf8');
  const js = await readFile(resolve(root, 'assets/js/main.js'), 'utf8');
  const manifest = await readFile(resolve(root, 'site.webmanifest'), 'utf8');
  assert.match(css, /\.portfolio-grid[^}]*repeat\(3,/s);
  assert.match(css, /@media \(max-width: 1024px\)[\s\S]*?\.portfolio-grid[^}]*repeat\(2,/);
  assert.match(css, /@media \(max-width: 768px\)[\s\S]*?\.portfolio-grid[^}]*1fr/);
  assert.match(css, /\.portfolio-image img[^}]*object-fit:\s*cover/s);
  assert.doesNotMatch(html, /portfolio-image--contain/);
  assert.match(css, /select option[^}]*background:\s*#0a0a0f[^}]*color:\s*#fafafa/s);
  assert.match(js, /custom-cursor-enabled/);
  assert.match(js, /animateStat/);
  assert.match(manifest, /"sizes": "1024x1024"/);
});

test('el cursor, el menú móvil y la navegación secundaria son consistentes', async () => {
  const css = await readFile(resolve(root, 'assets/css/styles.css'), 'utf8');
  const js = await readFile(resolve(root, 'assets/js/main.js'), 'utf8');
  assert.match(js, /modal\.append\(customCursor\)/);
  assert.match(js, /document\.body\.append\(customCursor\)/);
  assert.match(css, /@media \(max-width: 768px\)[\s\S]*?\.main-nav[^}]*linear-gradient[^}]*backdrop-filter/s);
  for (const route of ['privacidad/index.html', 'terminos/index.html']) {
    const html = await readFile(resolve(root, route), 'utf8');
    assert.match(html, /data-nav-toggle/);
    assert.match(html, /data-nav/);
    for (const section of ['services', 'laboratorio', 'about', 'portfolio', 'contacto']) {
      assert.ok(html.includes(`href="../#${section}"`), `${route}: ${section}`);
    }
    assert.doesNotMatch(html, /href="\.\.\/#(?:hero|sponsors)"/);
    assert.match(html, /href="\.\.\/#portfolio">Proyectos<\/a><button class="nav-faq"[^>]*data-faq-open[^>]*>FAQ<\/button><a class="nav-cta" href="\.\.\/#contacto">Contacto/);
    assert.match(html, /href="\.\.\/#contacto">Contacto</);
  }
});

test('la portada y la navegación respetan el nuevo orden institucional', async () => {
  const html = await readFile(resolve(root, 'index.html'), 'utf8');
  const order = ['hero', 'services', 'laboratorio', 'about', 'portfolio', 'sponsors', 'acompanamiento', 'contacto'];
  const sectionPositions = order.map((id) => html.indexOf(`id="${id}"`));
  assert.ok(sectionPositions.every((position) => position >= 0));
  assert.deepEqual([...sectionPositions].sort((a, b) => a - b), sectionPositions);

  const navigation = html.match(/<nav class="main-nav"[\s\S]*?<\/nav>/)?.[0] ?? '';
  const navigationOrder = ['services', 'laboratorio', 'about', 'portfolio', 'contacto'];
  const navigationPositions = navigationOrder.map((id) => navigation.indexOf(`href="#${id}"`));
  assert.ok(navigationPositions.every((position) => position >= 0));
  assert.deepEqual([...navigationPositions].sort((a, b) => a - b), navigationPositions);
  assert.match(navigation, />Servicios<.*>Proceso<.*>Filosofía<.*>Proyectos<.*>FAQ<.*>Contacto</s);
  assert.doesNotMatch(navigation, />Estudio boutique<|>Sponsors<|>Formulario</);
});

test('preguntas frecuentes está disponible desde el header y el footer con diez respuestas bilingües', async () => {
  const html = await readFile(resolve(root, 'index.html'), 'utf8');
  const css = await readFile(resolve(root, 'assets/css/styles.css'), 'utf8');
  const js = await readFile(resolve(root, 'assets/js/main.js'), 'utf8');
  const i18n = await readFile(resolve(root, 'assets/js/i18n.js'), 'utf8');
  assert.equal((html.match(/data-faq-open/g) ?? []).length, 2);
  assert.match(html, /<a href="#portfolio">Proyectos<\/a><button class="nav-faq"[^>]*data-faq-open[^>]*>FAQ<\/button><a class="nav-cta" href="#contacto">Contacto/);
  assert.match(html, /href="#contacto">Formulario<\/a><button class="footer-faq-link"[^>]*data-faq-open[^>]*>Preguntas frecuentes<\/button>/);
  const faqSource = js.match(/const faqItems = \[([\s\S]*?)\n\];/)?.[1] ?? '';
  assert.equal((faqSource.match(/^\s*\[/gm) ?? []).length, 10);
  assert.match(js, /faqDialog\.showModal\(\)/);
  assert.match(js, /data-faq-close/);
  assert.match(css, /\.faq-dialog\[open\][^}]*place-items:\s*center/s);
  assert.match(css, /\.footer-faq-link[^}]*font-weight:\s*700/s);
  assert.match(i18n, /\["Preguntas frecuentes", "Frequently Asked Questions"\]/);
  assert.match(i18n, /\["¿Ofrecen acompañamiento después de la entrega\?", "Do you offer support after delivery\?"\]/);

  for (const route of routes.filter((route) => route !== '404.html')) {
    const routeHtml = await readFile(resolve(root, route), 'utf8');
    assert.ok(routeHtml.includes('class="nav-faq"'), route);
    assert.ok(routeHtml.includes('aria-controls="faq-dialog"'), route);
  }
});

test('sponsors y acceso a sumarse al equipo quedan listos para reemplazo local', async () => {
  const html = await readFile(resolve(root, 'index.html'), 'utf8');
  const css = await readFile(resolve(root, 'assets/css/styles.css'), 'utf8');
  assert.match(html, /id="sponsors"/);
  assert.match(html, /Ellos nos acompañan/);
  assert.equal((html.match(/assets\/images\/sponsors\/sponsor-placeholder-\d{2}\.svg/g) ?? []).length, 5);
  assert.equal((html.match(/class="sponsors-group"/g) ?? []).length, 1);
  assert.doesNotMatch(html, /class="sponsors-group" aria-hidden="true"/);
  assert.equal((html.match(/loading="eager" decoding="sync"/g) ?? []).length, 5);
  for (let number = 1; number <= 5; number += 1) {
    const suffix = String(number).padStart(2, '0');
    assert.equal((await stat(resolve(root, `assets/images/sponsors/sponsor-placeholder-${suffix}.svg`))).isFile(), true);
  }
  assert.match(html, /class="btn btn-ghost" href="#sumate">Sumate al equipo<\/a>/);
  assert.match(html, /id="sumate"/);
  assert.match(html, /data-sponsors-strip/);
  assert.match(css, /@media \(max-width: 768px\)[\s\S]*?\.sponsors-marquee[^}]*--sponsor-width:\s*180px[^}]*--sponsor-reset-left:\s*-181px[^}]*--sponsor-reset-right:\s*784px/s);
  assert.match(css, /@media \(max-width: 768px\)[\s\S]*?\.sponsors-strip, \.sponsors-group[^}]*position:\s*relative[^}]*width:\s*100%[^}]*height:\s*100%/s);
  assert.match(css, /@media \(max-width: 768px\)[\s\S]*?\.sponsor-logo[^}]*position:\s*absolute[^}]*animation:\s*sponsor-flow 22s linear infinite both[^}]*backface-visibility:\s*hidden/s);
  assert.match(css, /@keyframes sponsor-flow[\s\S]*?var\(--sponsor-reset-right\)[\s\S]*?var\(--sponsor-reset-left\)/s);
  assert.doesNotMatch(css, /@keyframes sponsors-loop|\.sponsors-strip[^}]*animation:/s);
  for (const delay of ['0s', '-4.4s', '-8.8s', '-13.2s', '-17.6s']) {
    assert.match(css, new RegExp(`animation-delay: ${delay.replace('.', '\\.')}`));
  }
  const sponsorWidth = 180;
  const sponsorResetLeft = -181;
  const sponsorResetRight = 784;
  const sponsorCycle = sponsorResetRight - sponsorResetLeft;
  const mobileViewportMax = 768;
  assert.ok(sponsorResetLeft + sponsorWidth < 0, 'el reinicio izquierdo debe ocurrir fuera del viewport');
  assert.ok(sponsorResetRight > mobileViewportMax, 'el reinicio derecho debe ocurrir fuera del viewport');
  assert.equal(sponsorCycle / 5, 193, 'la separación debe ser constante durante todo el ciclo');
  const js = await readFile(resolve(root, 'assets/js/main.js'), 'utf8');
  assert.doesNotMatch(js, /data-sponsor-clone|syncSponsorLoop|sponsorsStrip\.querySelectorAll/);
  assert.match(css, /@media \(max-width: 768px\)[\s\S]*?\.sponsor-logo[^}]*border:\s*0[^}]*background:\s*transparent/s);
});

test('el acompañamiento estratégico aparece antes del contacto con sus tres servicios', async () => {
  const html = await readFile(resolve(root, 'index.html'), 'utf8');
  const css = await readFile(resolve(root, 'assets/css/styles.css'), 'utf8');
  assert.ok(html.indexOf('id="acompanamiento"') < html.indexOf('id="contacto"'));
  assert.match(html, /Acompañamiento estratégico para empresas/);
  assert.match(html, /Consultoría integral/);
  assert.match(html, /Gestión de equipos/);
  assert.match(html, /Planificación estratégica/);
  assert.match(html, /Todo lo necesario para sacar el máximo potencial al proyecto\./);
  assert.match(css, /\.strategic-support::before[^}]*hero-poster\.jpg[^}]*cover/s);
  assert.match(css, /\.strategic-support::after[^}]*linear-gradient/s);
  assert.match(css, /\.strategic-support-card:hover[^}]*translateY\(-6px\)/s);
  assert.match(css, /@media \(max-width: 768px\)[\s\S]*?\.strategic-support[^}]*hero-poster\.jpg[^}]*cover/s);
  assert.match(css, /@media \(max-width: 768px\)[\s\S]*?\.strategic-support::before, \.strategic-support::after[^}]*display:\s*none/s);
});

test('servicios conserva las tarjetas web y usa selector de tres columnas solo en móvil', async () => {
  const html = await readFile(resolve(root, 'index.html'), 'utf8');
  const css = await readFile(resolve(root, 'assets/css/styles.css'), 'utf8');
  const js = await readFile(resolve(root, 'assets/js/main.js'), 'utf8');
  assert.equal((html.match(/class="service-card service-card--/g) ?? []).length, 6);
  assert.equal((html.match(/data-service-open="service-/g) ?? []).length, 6);
  assert.match(html, /class="service-dialog"[^>]*data-service-dialog/);
  assert.match(css, /\.services-grid[^}]*repeat\(3,/s);
  assert.match(css, /\.services-mobile\s*\{\s*display:\s*none/s);
  assert.match(css, /@media \(max-width: 768px\)[\s\S]*?\.services-grid[^}]*display:\s*none/s);
  assert.match(css, /@media \(max-width: 768px\)[\s\S]*?\.services-mobile[^}]*repeat\(3,/s);
  assert.match(css, /@media \(max-width: 768px\)[\s\S]*?\.service-tile \.service-icon[^}]*width:\s*52px[^}]*height:\s*52px/s);
  assert.match(css, /@media \(max-width: 768px\)[\s\S]*?\.logo-text[^}]*display:\s*block/s);
  assert.match(js, /serviceDialog\.showModal\(\)/);
  assert.match(js, /data-service-close/);
  assert.match(js, /serviceDialog\.close\(\)/);
  assert.match(js, /className\.startsWith\('service-card--'\)/);
  assert.match(js, /serviceDialogIcon\.className = \['service-icon', 'service-dialog-icon', accentClass\]/);
  assert.match(css, /\.service-dialog\[open\][^}]*place-items:\s*center/s);
});

test('los ajustes finales de casos, portada y contacto permanecen activos', async () => {
  const html = await readFile(resolve(root, 'index.html'), 'utf8');
  const css = await readFile(resolve(root, 'assets/css/styles.css'), 'utf8');
  const js = await readFile(resolve(root, 'assets/js/main.js'), 'utf8');
  assert.doesNotMatch(html, /Ver caso completo|modal-case-link/);
  assert.doesNotMatch(html, /video-toggle|data-video-(?:toggle|label|icon)/);
  assert.doesNotMatch(css, /\.video-toggle|\.modal-case-link/);
  assert.doesNotMatch(js, /videoToggle|modal-case-link|\.route/);
  assert.match(html, /href="https:\/\/wa\.me\/5491127666507"/);
  assert.match(html, /<h2 id="contact-title">¿Listo para dar el próximo salto\?<\/h2>/);
  assert.doesNotMatch(html, /5491151553302/);
});
