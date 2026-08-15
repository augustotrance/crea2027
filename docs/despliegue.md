# Despliegue y operación

## GitHub Pages

1. En **Settings → Pages**, elegir **GitHub Actions** como fuente.
2. Confirmar que la rama predeterminada sea `main`.
3. Cada actualización de `main` ejecutará control, pruebas, compilación y publicación.
4. Revisar el entorno `github-pages` y la URL informada por la acción.

## Verificación posterior

- Abrir portada, los seis casos, privacidad, términos y una ruta inexistente.
- Probar navegación con teclado y menú móvil.
- Revisar consola y pestaña de red.
- Confirmar que el video no cargue con ahorro de datos o movimiento reducido.
- Enviar una consulta de prueba solamente con autorización del responsable del formulario.
- Validar `sitemap.xml` y `robots.txt`.

## Recuperación

Los despliegues no editan el proyecto anterior. Para volver a una versión estable, revertir el commit problemático mediante una nueva solicitud de cambios; no reescribir el historial de `main`.

## Dominio futuro

Si se incorpora un dominio propio, actualizar en una misma modificación: enlaces canónicos, Open Graph, JSON-LD, sitemap, robots, manifiesto y la configuración de Pages.
