# Guía de contenidos

## Voz

CREA habla en primera persona plural, con frases directas, criterio profesional y cercanía. Se prioriza explicar decisiones y capacidades; se evitan superlativos vacíos y promesas que no puedan demostrarse.

## Casos

Cada caso debe incluir:

- título y descripción únicos;
- categoría y áreas de trabajo verificables;
- un resumen breve;
- problema o idea y resultados que ya estén documentados o expresamente validados;
- imagen de portada y galería con texto alternativo;
- enlace al siguiente caso.

Para agregar uno, copiar la estructura de una carpeta existente, cambiar el contenido, registrar la URL en `sitemap.xml` y agregar una tarjeta a la portada.

## Sponsors

Los cinco recursos provisionales están en `src/site/assets/images/sponsors/` y siguen la nomenclatura `sponsor-placeholder-01.svg` a `sponsor-placeholder-05.svg`.

Para reemplazarlos sin modificar la estructura de la página:

- conservar esos nombres y sustituir cada SVG por el logo definitivo; o
- actualizar el atributo `src` correspondiente dentro de la sección `#sponsors` de `src/site/index.html`;
- mantener una proporción horizontal cercana a `220 × 96` y completar un texto alternativo identificable;
- usar archivos SVG optimizados siempre que sea posible.

## Datos sensibles o inciertos

Las cifras y nombres conservados actualmente proceden del sitio original de CREA y deben considerarse contenido heredado, no evidencia independiente. No agregar nuevas cifras, nombres de responsables, direcciones, clientes, premios, testimonios o vínculos sociales sin validación expresa. Si un dato nuevo no está confirmado, dejarlo fuera del sitio y registrarlo como pendiente.
