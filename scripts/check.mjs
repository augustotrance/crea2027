import { readdir, readFile, stat } from 'node:fs/promises';
import { dirname, extname, join, relative, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const site = resolve(root, 'src/site');
const errors = [];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path));
    else files.push(path);
  }
  return files;
}

function cleanReference(value) {
  return value.split('#')[0].split('?')[0];
}

const files = await walk(site);
const htmlFiles = files.filter((file) => extname(file) === '.html');

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const label = relative(site, file);
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicates.length) errors.push(`${label}: IDs repetidos: ${[...new Set(duplicates)].join(', ')}`);
  if (!/<html\s+lang="es"/.test(html)) errors.push(`${label}: falta lang="es".`);
  if (!/<meta\s+name="viewport"/.test(html)) errors.push(`${label}: falta viewport.`);
  if (!/<title>[^<]+<\/title>/.test(html)) errors.push(`${label}: falta title.`);
  if (!/<meta\s+name="description"\s+content="[^"]+"/.test(html)) errors.push(`${label}: falta description.`);
  const headingCount = (html.match(/<h1(?:\s|>)/g) || []).length;
  if (headingCount !== 1) errors.push(`${label}: debe contener exactamente un h1; se encontraron ${headingCount}.`);

  for (const image of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\salt="[^"]*"/.test(image[0])) errors.push(`${label}: imagen sin alt.`);
    if (!/\s(width|height)="/.test(image[0])) errors.push(`${label}: imagen sin dimensiones.`);
  }

  for (const reference of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const raw = reference[1];
    if (/^(?:https?:|mailto:|tel:|data:|#)/.test(raw)) continue;
    const clean = cleanReference(raw);
    if (!clean) continue;
    const target = resolve(dirname(file), clean);
    try {
      const info = await stat(target);
      if (clean.endsWith('/') && info.isDirectory()) await stat(join(target, 'index.html'));
    } catch {
      errors.push(`${label}: referencia inexistente: ${raw}`);
    }
  }
}

for (const file of files) {
  const size = (await stat(file)).size;
  const label = relative(site, file);
  if (/\.(?:png|jpe?g|webp|avif)$/i.test(file) && size > 500_000) errors.push(`${label}: imagen mayor a 500 KB.`);
  if (/\.mp4$/i.test(file) && size > 3_000_000) errors.push(`${label}: video mayor a 3 MB.`);
}

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Control superado: ${htmlFiles.length} páginas y ${files.length} archivos.`);
}
