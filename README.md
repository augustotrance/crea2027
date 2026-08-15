# CREA Design Studio — sitio 2.0

Nueva versión del sitio institucional y portfolio de CREA Design Studio. Este repositorio es independiente de `estudiocrea`: no reemplaza ni modifica el proyecto anterior.

## Qué incluye

- Portada editorial responsiva, optimizada para escritorio y smartphone.
- Seis casos con URL propia, contenido semántico e imágenes optimizadas.
- Filtros de portfolio, navegación móvil y animaciones progresivas.
- Formulario accesible conectado a Formspree, con consentimiento y alternativa por correo.
- Páginas de privacidad, términos, error 404, sitemap, robots y datos estructurados.
- Compilación, controles automáticos, pruebas y publicación mediante GitHub Actions.
- Cero dependencias de ejecución: HTML, CSS y JavaScript nativos.

## Estructura

```text
crea2027/
├── .github/               # Automatización e incidencias
├── docs/                  # Arquitectura, contenidos y operación
├── scripts/               # Compilación, control y servidor local
├── src/site/              # Fuente completa del sitio publicado
│   ├── assets/
│   │   ├── css/
│   │   ├── images/
│   │   │   ├── brand/
│   │   │   └── portfolio/
│   │   ├── js/
│   │   └── video/
│   ├── casos/             # Una carpeta por caso
│   ├── privacidad/
│   └── terminos/
├── tests/                 # Pruebas de integridad
└── package.json
```

## Uso local

Requiere Node.js 22 o posterior.

```bash
npm install
npm run check
npm test
npm run build
npm run dev
```

Abrir `http://localhost:4173/crea2027/`. La carpeta `dist/` se vuelve a generar en cada compilación y no debe editarse a mano.

## Ediciones frecuentes

- Textos de portada: `src/site/index.html`.
- Colores, tipografía y composición: `src/site/assets/css/styles.css`.
- Interacciones: `src/site/assets/js/main.js`.
- Casos: `src/site/casos/<nombre>/index.html`.
- Imágenes: `src/site/assets/images/`.
- Dirección pública, SEO y sitemap: buscar `augustotrance.github.io/crea2027` dentro de `src/site/`.

Antes de publicar cambios, ejecutar `npm run check && npm test && npm run build`.

## Publicación

El flujo `.github/workflows/pages.yml` compila y publica `dist/` cuando se actualiza `main`. En GitHub, Pages debe tener como origen **GitHub Actions**. La URL prevista es:

<https://augustotrance.github.io/crea2027/>

Más detalles en [docs/despliegue.md](docs/despliegue.md).

## Decisiones de contenido

No se incorporaron métricas, testimonios, identidades jurídicas, domicilios completos ni perfiles sociales no verificados. Las páginas legales describen únicamente el funcionamiento actual del sitio. Antes de una explotación comercial definitiva, conviene que la información legal sea revisada por un profesional y completada con los datos del responsable que correspondan.

El formulario conserva el endpoint público que ya utilizaba CREA: `https://formspree.io/f/xeeeazkq`. Su entrega debe validarse desde la cuenta propietaria de Formspree.

## Derechos

El código y los contenidos no se publican bajo una licencia de software libre. Consultar [LICENSE](LICENSE).
