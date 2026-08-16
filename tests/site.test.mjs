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

test('las seis galerías usan un mosaico fluido sin filas desiguales', async () => {
  const css = await readFile(resolve(root, 'assets/css/styles.css'), 'utf8');
  assert.match(css, /\.gallery-grid[^}]*columns:\s*2/s);
  assert.match(css, /\.gallery-item[^}]*break-inside:\s*avoid/s);
  assert.match(css, /\.case-gallery[^}]*columns:\s*2/s);
  assert.match(css, /\.case-gallery figure[^}]*break-inside:\s*avoid/s);
  assert.match(css, /@media \(max-width: 768px\)[\s\S]*?\.gallery-grid[^}]*columns:\s*1/);
  assert.match(css, /@media \(max-width: 768px\)[\s\S]*?\.case-gallery[^}]*columns:\s*1/);
  assert.doesNotMatch(css, /\.(?:gallery-grid|case-gallery)[^{]*\{[^}]*grid-template-columns/s);

  for (const route of routes.filter((route) => route.startsWith('casos/'))) {
    const html = await readFile(resolve(root, route), 'utf8');
    assert.equal((html.match(/class="case-gallery"/g) ?? []).length, 1, route);
    assert.ok((html.match(/<figure>/g) ?? []).length >= 4, route);
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
    for (const section of ['hero', 'services', 'laboratorio', 'about', 'portfolio', 'sponsors', 'contacto']) {
      assert.ok(html.includes(`href="../#${section}"`), `${route}: ${section}`);
    }
  }
});

test('la portada y la navegación respetan el nuevo orden institucional', async () => {
  const html = await readFile(resolve(root, 'index.html'), 'utf8');
  const order = ['hero', 'services', 'laboratorio', 'about', 'portfolio', 'sponsors', 'contacto'];
  const sectionPositions = order.map((id) => html.indexOf(`id="${id}"`));
  assert.ok(sectionPositions.every((position) => position >= 0));
  assert.deepEqual([...sectionPositions].sort((a, b) => a - b), sectionPositions);

  const navigation = html.match(/<nav class="main-nav"[\s\S]*?<\/nav>/)?.[0] ?? '';
  const navigationPositions = order.map((id) => navigation.indexOf(`href="#${id}"`));
  assert.ok(navigationPositions.every((position) => position >= 0));
  assert.deepEqual([...navigationPositions].sort((a, b) => a - b), navigationPositions);
  assert.match(navigation, />Estudio boutique<.*>Servicios<.*>Proceso<.*>Filosofía<.*>Casos<.*>Sponsors<.*>Formulario</s);
});

test('sponsors y acceso a sumarse al equipo quedan listos para reemplazo local', async () => {
  const html = await readFile(resolve(root, 'index.html'), 'utf8');
  assert.match(html, /id="sponsors"/);
  assert.match(html, /Ellos nos acompañan/);
  assert.equal((html.match(/assets\/images\/sponsors\/sponsor-placeholder-\d{2}\.svg/g) ?? []).length, 5);
  for (let number = 1; number <= 5; number += 1) {
    const suffix = String(number).padStart(2, '0');
    assert.equal((await stat(resolve(root, `assets/images/sponsors/sponsor-placeholder-${suffix}.svg`))).isFile(), true);
  }
  assert.match(html, /class="btn btn-ghost" href="#sumate">Sumate al equipo<\/a>/);
  assert.match(html, /id="sumate"/);
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
  assert.match(js, /serviceDialog\.showModal\(\)/);
  assert.match(js, /data-service-close/);
  assert.match(js, /serviceDialog\.close\(\)/);
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
  assert.doesNotMatch(html, /5491151553302/);
});
