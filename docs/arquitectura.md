# Arquitectura

## Principios

- **Estática y progresiva:** el contenido, los enlaces y el formulario siguen siendo comprensibles sin JavaScript.
- **Sin dependencias de ejecución:** reduce superficie de fallo, mantenimiento y peso de descarga.
- **Una URL por caso:** mejora navegación, accesibilidad, compartir enlaces e indexación.
- **Fuente separada del resultado:** `src/site/` es editable; `dist/` es reproducible.
- **Rutas relativas:** el proyecto funciona en GitHub Pages bajo `/crea2027/` y en el servidor local incluido.

## Flujo

1. Se editan fuentes y recursos en `src/site/`.
2. `npm run check` verifica referencias, metadatos, imágenes y límites de peso.
3. `npm test` valida rutas y funciones críticas.
4. `npm run build` reconstruye `dist/` desde cero.
5. GitHub Actions publica exclusivamente `dist/`.

## Límites de rendimiento

- Imágenes individuales: hasta 500 KB.
- Video: hasta 3 MB.
- No se cargan fuentes, analítica ni bibliotecas externas.
- El video se omite con ahorro de datos, en pantallas pequeñas o con movimiento reducido.

## JavaScript

`assets/js/main.js` contiene módulos funcionales pequeños: cabecera y menú, video condicional, revelado progresivo, filtros, formulario y año. Ninguno es necesario para leer el contenido principal.
