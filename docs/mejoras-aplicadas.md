# Mejoras aplicadas en la versión 2.0

Este documento registra cómo el nuevo proyecto resuelve los problemas detectados en `estudiocrea`. La versión anterior permanece intacta.

| Área | Situación anterior | Resolución en `crea2027` |
|---|---|---|
| Identidad | La primera versión de `crea2027` se apartó de la estética de CREA | Se restauraron el logo original, Inter, Space Grotesk, Space Mono, fondo `#0a0a0f`, rosa `#ff2e8b`, verde `#a4ff3a`, composición y voz visual |
| Portfolio | Casos abiertos en modal, contenido difícil de enlazar y un caso gastronómico con seis archivos inexistentes | Se conserva el modal con teclado y foco correctos, se suman seis páginas enlazables y se reconstruye únicamente la serie gastronómica faltante |
| Contenido legal | Documentos ajenos a la actividad y al formulario real | Privacidad y términos reescritos para CREA, Formspree y GitHub Pages; pendientes jurídicos documentados sin inventar datos |
| Accesibilidad | Tarjetas y modal con interacción limitada, foco y teclado incompletos | HTML semántico, enlaces reales, salto al contenido, foco visible, estados ARIA, menú con Escape, filtros anunciados y movimiento reducido |
| Móvil | Componentes rígidos y experiencia dependiente del modal | Diseño fluido a 1024, 768 y 480 px, navegación táctil, formularios y galerías de una columna |
| Video | La primera versión 2.0 redujo la portada a 14 segundos y dejó fuera parte de la narrativa de servicios | Se restituye el archivo original completo: 60,07 s, 1920 × 1080 y 23.997.460 bytes, sin recorte temporal |
| Imágenes | La primera versión 2.0 utilizó copias WebP muy comprimidas y encuadres inconsistentes | Se recuperan los PNG originales en máxima calidad; `object-fit: contain` y altura automática preservan proporciones en casos y galerías |
| CSS | Alta cantidad de sobrescrituras con `!important` | Capas CSS, variables, componentes y páginas sin `!important` |
| SEO | Metadatos y páginas de caso insuficientes | Canonical, Open Graph, JSON-LD, sitemap, robots, títulos y descripciones por ruta |
| Privacidad | Dependencias externas y textos incoherentes | Fuentes de sistema, sin analítica ni iframes; tratamiento de datos explicado y consentimiento explícito |
| Mantenimiento | Raíz poco clara y publicación directa | Fuente en `src/site`, salida reproducible en `dist`, nombres normalizados, documentación, pruebas y CI |
| Publicación | Rama principal sin controles automáticos | Verificación y despliegue de Pages separados mediante GitHub Actions |
| Recuperación | Cambios difíciles de reproducir | Repositorio independiente, historial Git, build determinista y paquete descargable completo |

## Controles incorporados

`scripts/check.mjs` detiene la publicación si encuentra rutas internas rotas, metadatos básicos ausentes, imágenes sin texto alternativo o dimensiones, IDs repetidos, archivos accidentales de tamaño extremo o un video de portada sospechosamente reducido. Las pruebas validan las diez rutas públicas, la identidad original, el circuito de contacto, las proporciones y el soporte para movimiento reducido.

## Límites conscientes

- El envío real del formulario no se ejecuta durante pruebas automáticas para evitar mensajes externos no deseados.
- La revisión legal profesional y los permisos formales de cada marca o caso dependen del titular del sitio.
- Las comprobaciones visuales definitivas deben repetirse después de cada despliegue en navegadores y dispositivos reales.
