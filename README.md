# Wist'upiku — Identidad visual actualizada 🥟

Versión actualizada del proyecto React + Vite + JSX. Incluye la identidad visual proporcionada por el equipo, mejora de formularios, corrección del fallo de pantalla blanca del QR y rutas compatibles con GitHub Pages.

## Cambios de esta versión

- Logo suministrado por la diseñadora: `src/assets/brand/wistupiku-logo.png`. Se utiliza en header, footer y pantalla de pago. Incluye icono de pestaña (favicon).
- Paleta final: marrón `#4A3329`, azul profundo `#263746`, coral `#D96B50`, durazno `#E8A77F`, crema `#F9F5EE`.
- Campos, selects, textarea y controles de formulario redondeados, con enfoque visible y mejor contraste. Radios de pago conservan tamaño correcto.
- Pago QR: importación del icono faltante corregida, tarjeta rediseñada, enlaces que admiten `HashRouter` para GitHub Pages, botón de simulación local y renovación del QR vencido.
- Se conservan catálogo, carrito, delivery, las siete páginas y la navegación flotante.
- `vite.config.js` preparado para `/wistupiku1939/`, `main.jsx` utiliza `HashRouter` y `.github/workflows/deploy.yml` publica `dist` en GitHub Pages.

## ¡IMPORTANTE! Cómo actualizar TU repositorio existente

Ya tenés una carpeta `Wistupiku-Endgame` conectada a GitHub con su directorio **oculto** `.git` y un `package-lock.json` generado en tu PC. **No borres esa carpeta para reemplazarla por el ZIP.**

1. Descomprimí este ZIP en una carpeta temporal (por ejemplo `Descargas/actualizacion-wistu`).
2. Abrí la carpeta `Wistupiku-Endgame` extraída del ZIP, copiá su contenido y pegalo **dentro de la carpeta original** `Wistupiku-Endgame` donde trabajás con VS Code.
3. Aceptá **Reemplazar los archivos existentes** cuando Windows te pregunte. Así mantenés tu directorio `.git` y `package-lock.json` locales. Copiar contenido *encima*, no reemplazar la carpeta original entera.
4. En VS Code, abrí la terminal y probá:

   ```bash
   npm run dev
   npm run build
   ```

5. Cuando esté todo bien, subí los cambios:

   ```bash
   git add .
   git commit -m "Actualizar identidad, formularios y QR"
   git push origin main
   ```

6. GitHub Actions publicará la web en `https://danny-blu.github.io/wistupiku1939/` al finalizar el proceso.

## Sobre el QR de prueba

El código QR contiene un **enlace escaneable** a una página con el monto y referencia. El botón `SIMULAR PAGO` confirma la operación **solamente en el navegador donde está guardado el pedido**. Escanear desde otro dispositivo permite ver información, pero no marca un pago como realizado ni transfiere dinero: esa sincronización requeriría un backend. En localhost, un móvil no puede abrir direcciones `localhost` pertenecientes a otro equipo; para escanear desde el móvil, primero publicá el sitio y generá el pedido en el sitio publicado.

## Estado de validación

Se revisó la sintaxis de los componentes JSX/JS con `typescript.transpileModule` y no se encontraron errores. **No se pudo ejecutar un build de Vite en este entorno** porque `registry.npmjs.org` no es accesible y las dependencias no están instaladas aquí. Ejecutá `npm run build` en tu VS Code antes de publicar; si aparece un error, compartí el mensaje literal para corregirlo.

## Notas sobre contenido

Los precios, envíos y sucursales del sitio son datos referenciales del ejercicio. Las fotografías son ilustrativas y pueden requerir sustitución. El pago QR es de prueba, no un cobro bancario.


## Actualización de navegación y merchandising (19 oct 2026)

- Navbar y footer: **Inicio → Nuestra Historia → Servicios → Menú → Pedidos → Merchandising → Contacto**.
- La antigua sección **Sucursales** sigue disponible en `/#/sucursales`, en los enlaces internos del Inicio y en la selección de sucursal del pedido.
- `/#/merchandising` muestra deliberadamente una página **404 de marca**, aunque la ruta existe a propósito para que pueda visitarse desde el menú.
- Fotografías editoriales, mosaicos, recuadros de productos y formularios tienen esquinas más orgánicas y redondeadas; el hero de pantalla completa conserva su encuadre.
- Se mantiene `HashRouter`, la base `/wistupiku1939/`, y `.github/workflows/deploy.yml` para GitHub Pages.
