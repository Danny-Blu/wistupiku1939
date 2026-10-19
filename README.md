# Wist'upiku — Tradición viva 🥟

**Primera versión unificada de los ZIP de Lovable, v0 y Google AI.** Proyecto React + Vite + JavaScript/JSX, con CSS editorial y soporte de Tailwind.

## Para abrir en VS Code (Windows)

1. Descomprimí el ZIP, abrí la carpeta `Wistupiku-Endgame` en VS Code.
2. Instalá **Node.js LTS** si todavía no lo tenés.
3. En una terminal, ejecutá:

```bash
npm install
npm run dev
```

4. Abrí la dirección local que Vite muestre (normalmente `http://localhost:5173`).

Para verificar y generar versión de distribución:

```bash
npm run test
npm run build
```

El build genera la carpeta `dist/`, que se puede publicar en Vercel. Configurá redirección SPA para que las rutas internas se abran directamente.

## Qué hay dentro

- **Siete páginas:** Inicio, Menú, Servicios, Arma tu Pedido, Nuestra Historia, Sucursales y Contacto.
- **Diseño**: imágenes locales tomadas de la versión Lovable; header flotante con cápsula centrada inspirado en v0; footer fotográfico monumental reimplementado.
- **Menú**: categorías, búsqueda, ordenamiento, vista de producto y agregar al carrito.
- **Carrito**: cantidades, eliminar, persistencia mediante Zustand/localStorage, resumen.
- **Envío**: tarifas ilustrativas configurables por ciudad/zona, retiro sin recargo.
- **Checkout**: datos, retiro o delivery, efectivo pendiente o QR de prueba.
- **QR**: QR válido y escaneable generado por código, con confirmación de pago **local al mismo navegador**. No es un QR bancario y **no sincroniza pagos entre dos dispositivos**. Para eso hace falta una base de datos compartida y autenticación.
- **Pedidos**: resumen e historial local y progreso editable en `/admin`.
- **Servicios y contacto**: solicitudes y mensajes guardados localmente en el mismo navegador.

## Límites importantes

Esta es una **versión académica funcional de interfaz**, no un ecommerce listo para cobrar o recibir pedidos verdaderos. Los precios, tarifas, sucursales y direcciones referenciales **no son datos oficiales**. Las fotos de las versiones generadas son ilustrativas y deben verificarse antes de uso público. La clave de `/admin` (`1939`) es **solo una barrera visual de práctica**, NO seguridad; no usar para información real.

No hay backend, verificación de transferencias bancarias, autenticación fuerte, geocodificación ni asignación real de repartidores. Para implementar pedidos reales se necesita API segura, base de datos, gestión de privacidad e integración autorizada de pagos.

**Validación de este entregable:** revisión sintáctica de JSX/JS mediante TypeScript transpileModule (sin errores). La instalación de dependencias y compilación de Vite **no se pudieron ejecutar en el entorno de creación** porque no tiene acceso a npmjs.org. Ejecutá `npm install && npm run build` antes de publicar y compartime cualquier error que te salga para corregirlo.

## Carpetas

```
src/
  assets/       Fotos ilustrativas locales
  components/   Header, footer, productos y carrito
  data/         Catálogo, ciudades, tarifas
  lib/          Cálculos y tests
  pages/        Siete páginas y flujos de compra
  store/        Estado persistente
  styles.css    Sistema visual completo
```

## Notas para futuras mejoras

- Sustituir sucursales ficticias por direcciones y horarios autorizados/verificados.
- Reemplazar fotografías de categoría por imágenes propias de cada producto.
- Agregar API segura y verificación real de pago si se transforma en tienda pública.
- Validar responsive en navegador y dispositivos reales.
