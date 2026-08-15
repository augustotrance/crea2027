# Inventario y tratamiento de recursos

## Convención de nombres

`<caso>-<aplicacion>.webp`, siempre en minúsculas y con guiones. Las imágenes de marca viven en `assets/images/brand/`; las de casos, en `assets/images/portfolio/`.

## Procedencia

- `crea-symbol.webp` y las imágenes de Beauty, Fashion, Educación, Derito y Hertz fueron recuperadas del sitio público anterior de CREA y optimizadas para esta versión. El repositorio anterior no fue modificado.
- `restaurant-space.webp` y `restaurant-system.webp` se generaron específicamente para completar el caso gastronómico conceptual: una escena de interior y un sistema de mesa/editorial, ambos con atmósfera oscura y acentos magenta y lima.
- `hero-studio.mp4` es una versión breve, sin audio y optimizada del video de portada anterior. `hero-poster.webp` funciona como alternativa estática.

## Criterios técnicos

- WebP con metadatos eliminados.
- Dimensiones suficientes para el uso real, sin ampliaciones innecesarias.
- Video H.264, 1280 × 720, 24 fps, reproducción silenciosa y carga condicional.
- Todas las imágenes de contenido deben declarar texto alternativo y dimensiones.

Antes de incorporar material nuevo, verificar derechos de uso y conservar el archivo fuente fuera de `dist/` si necesita edición futura.
