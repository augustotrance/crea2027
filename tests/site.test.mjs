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
  assert.match(css, /\.project-hero img[^}]*object-fit:\s*contain/s);
});
