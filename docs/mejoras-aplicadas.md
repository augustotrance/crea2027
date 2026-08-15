# Mejoras aplicadas en la versión 2.0

Este documento registra cómo el nuevo proyecto resuelve los problemas detectados en `estudiocrea`. La versión anterior permanece intacta.

| Área | Situación anterior | Resolución en `crea2027` |
|---|---|---|
| Portfolio | Casos abiertos en modal, contenido difícil de enlazar y un caso gastronómico sin seis imágenes | Seis páginas independientes, navegación circular y dos recursos nuevos específicos para el caso gastronómico |
| Contenido legal | Documentos ajenos a la actividad y al formulario real | Privacidad y términos reescritos para CREA, Formspree y GitHub Pages; pendientes jurídicos documentados sin inventar datos |
| Accesibilidad | Tarjetas y modal con interacción limitada, foco y teclado incompletos | HTML semántico, enlaces reales, salto al contenido, foco visible, estados ARIA, menú con Escape, filtros anunciados y movimiento reducido |
| Móvil | Componentes rígidos y experiencia dependiente del modal | Diseño fluido con puntos de quiebre en 832 px y 576 px, navegación táctil, formularios y galerías de una columna |
| Rendimiento | Sitio superior a 30 MB y video de unos 24 MB | Sitio fuente cercano a 1,9 MB; video de 14 s y unos 0,77 MB; WebP, carga diferida y video condicional |
| CSS | Alta cantidad de sobrescrituras con `!important` | Capas CSS, variables, componentes y páginas sin `!important` |
| SEO | Metadatos y páginas de caso insuficientes | Canonical, Open Graph, JSON-LD, sitemap, robots, títulos y descripciones por ruta |
| Privacidad | Dependencias externas y textos incoherentes | Fuentes de sistema, sin analítica ni iframes; tratamiento de datos explicado y consentimiento explícito |
| Mantenimiento | Raíz poco clara y publicación directa | Fuente en `src/site`, salida reproducible en `dist`, nombres normalizados, documentación, pruebas y CI |
| Publicación | Rama principal sin controles automáticos | Verificación y despliegue de Pages separados mediante GitHub Actions |
| Recuperación | Cambios difíciles de reproducir | Repositorio independiente, historial Git, build determinista y paquete descargable completo |

## Controles incorporados

`scripts/check.mjs` detiene la publicación si encuentra rutas internas rotas, metadatos básicos ausentes, imágenes sin texto alternativo o dimensiones, IDs repetidos o recursos que superen los límites definidos. Las pruebas validan las diez rutas públicas, el circuito de contacto y el soporte para movimiento reducido.

## Límites conscientes

- El envío real del formulario no se ejecuta durante pruebas automáticas para evitar mensajes externos no deseados.
- La revisión legal profesional y los permisos formales de cada marca o caso dependen del titular del sitio.
- Las comprobaciones visuales definitivas deben repetirse después de cada despliegue en navegadores y dispositivos reales.
