# Arquitectura

## Principios

- **Estática y progresiva:** el contenido, los enlaces y el formulario siguen siendo comprensibles sin JavaScript.
- **Sin dependencias de ejecución:** reduce superficie de fallo, mantenimiento y peso de descarga.
- **Doble acceso a los casos:** el modal conserva la experiencia original y cada caso tiene además una URL enlazable e indexable.
- **Fidelidad de marca:** la paleta, el logo y las familias Inter, Space Grotesk y Space Mono son decisiones vinculantes.
- **Fuente separada del resultado:** `src/site/` es editable; `dist/` es reproducible.
- **Rutas relativas:** el proyecto funciona en GitHub Pages bajo `/crea2027/` y en el servidor local incluido.

## Flujo

1. Se editan fuentes y recursos en `src/site/`.
2. `npm run check` verifica referencias, metadatos, imágenes, límites de seguridad y presencia del video completo.
3. `npm test` valida rutas y funciones críticas.
4. `npm run build` reconstruye `dist/` desde cero.
5. GitHub Actions publica exclusivamente `dist/`.

## Límites de rendimiento

- Imágenes individuales: hasta 4 MB para conservar los originales sin recompresión destructiva.
- Video: hasta 30 MB; la verificación exige más de 20 MB para detectar una versión recortada.
- Se cargan las fuentes de marca desde Google Fonts; no se cargan analítica ni bibliotecas JavaScript externas.
- El video usa `preload="metadata"`, imagen de respaldo y reproducción automática silenciosa. Con movimiento reducido se muestra solo el poster.

## JavaScript

`assets/js/main.js` contiene módulos funcionales pequeños: cabecera y menú, reproducción del video, revelado progresivo, modal de proyectos, formulario y año. Las páginas individuales permiten leer cada caso aun si JavaScript no está disponible.
