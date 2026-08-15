import { cp, mkdir, readFile, rm, stat } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const source = resolve(root, 'src/site');
const output = resolve(root, 'dist');

await stat(source);
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(source, output, { recursive: true });

const index = await readFile(resolve(output, 'index.html'), 'utf8');
if (!index.includes('CREA Design Studio') || !index.includes('id="contacto"')) {
  throw new Error('La compilación no contiene la portada o el formulario esperados.');
}

console.log('Sitio compilado en dist/.');
