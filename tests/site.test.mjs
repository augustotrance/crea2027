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
