# Inventario y tratamiento de recursos

## Convención de nombres

Cada caso tiene una carpeta propia en `assets/images/portfolio/<caso>/`. La portada se llama `hero.png`; la galería conserva nombres estables y numerados. Los recursos de identidad viven en `assets/images/brand/` y el video en `assets/video/`.

## Procedencia

- `logo-crea.png`, los casos Beauty, Fashion, Educación, Derito y Hertz y `crea-services-hero.mp4` son copias exactas de los recursos públicos del proyecto anterior. `estudiocrea` no fue modificado.
- Los seis JPG del caso Restaurante referenciados por el sitio anterior no existen en la publicación original. Se reconstruyeron seis imágenes de 1536 × 1024 con una misma dirección de arte: carbón, piedra, luz cálida y acentos magenta.
- `hero-poster.jpg` se extrajo del propio video completo y funciona como respaldo estático.

## Criterios técnicos

- PNG original sin reducción de resolución para el portfolio recuperado.
- Imágenes generadas del caso Restaurante en JPEG 4:4:4, calidad 96 y 1536 × 1024.
- Video original de 60,07 segundos, 1920 × 1080 y 23.997.460 bytes; reproducción silenciosa, `preload="metadata"` y control de pausa.
- Todas las imágenes de contenido deben declarar texto alternativo y dimensiones.

Antes de incorporar material nuevo, verificar derechos de uso y conservar el archivo fuente fuera de `dist/` si necesita edición futura.
