/*
  ALORIA - Lista de productos de la web
  ======================================
  Este es el único archivo que hay que tocar para cambiar precios,
  agregar o sacar productos.

  - Los precios van sin puntos ni signo $:  21000  (no "$21.000")
  - Para sacar una presentación, borrá su renglón { ... },
  - Para sacar un producto entero, borrá su bloque { nombre: ... },
  - "foto" (opcional): la foto del producto, dentro de la carpeta img.
    "elegido: true" lo muestra en grande en "Los más elegidos" (necesita foto).
  - "sello" (opcional): datos cortos que aparecen arriba del nombre.
  - La fecha de los precios se pone sola con el día de hoy.
*/

window.ALORIA = {

  // WhatsApp con código de país, sin +, sin espacios ni guiones.
  whatsapp: "5491127310621",

  // Cómo se muestra el número en la web
  whatsappVisible: "11 2731-0621",

  categorias: [
    {
      nombre: "Aceite de oliva",
      productos: [
        {
          nombre: "Aceite de oliva virgen extra",
          foto: "img/aceite-mesa.jpg",
          elegido: true,
          sello: "Virgen extra · Prensado en frío",
          detalle: "Desde el corazón de La Rioja. Para terminar un plato, para la ensalada, para el pan.",
          presentaciones: [
            { peso: "500 ml", precio: 14000 }
          ]
        }
      ]
    },
    {
      nombre: "Aceitunas",
      productos: [
        {
          nombre: "Aceitunas verdes",
          foto: "img/aceitunas-verdes.jpg",
          elegido: true,
          sello: "Enteras en salmuera · Aimogasta",
          detalle: "Elaboración artesanal, de La Rioja.",
          presentaciones: [
            { peso: "1 kg", precio: 15000 },
            { peso: "500 g", precio: 8500 }
          ]
        },
        {
          nombre: "Aceitunas negras",
          foto: "img/aceitunas-negras.jpg",
          sello: "Enteras en salmuera · Aimogasta",
          detalle: "Elaboración artesanal, de La Rioja.",
          presentaciones: [
            { peso: "1 kg", precio: 19000 },
            { peso: "500 g", precio: 11500 }
          ]
        }
      ]
    },
    {
      nombre: "Frutos secos",
      productos: [
        {
          nombre: "Nueces mariposa",
          foto: "img/nueces-tabla.jpg",
          elegido: true,
          sello: "Extra light",
          detalle: "Mitades claras, para comer solas o sumar a lo que estés cocinando.",
          presentaciones: [
            { peso: "1 kg", precio: 21000 },
            { peso: "500 g", precio: 11500 }
          ]
        },
        {
          nombre: "Almendra guara",
          detalle: "Calibre mediano.",
          presentaciones: [
            { peso: "1 kg", precio: 30000 },
            { peso: "500 g", precio: 16000 }
          ]
        },
        {
          nombre: "Mix de frutos secos",
          detalle: "Para picar, para la granola, para el viaje.",
          presentaciones: [
            { peso: "1 kg", precio: 14500 },
            { peso: "500 g", precio: 7500 }
          ]
        },
        {
          nombre: "Maní tostado",
          detalle: "Sin sal.",
          presentaciones: [
            { peso: "1 kg", precio: 6000 }
          ]
        },
        {
          nombre: "Pasas de uva",
          detalle: "Para la granola, la ensalada o la torta.",
          presentaciones: [
            { peso: "1 kg", precio: 7500 }
          ]
        }
      ]
    },
    {
      nombre: "Semillas",
      productos: [
        {
          nombre: "Chía premium",
          detalle: "Para el yogur, el pan o el agua de la mañana.",
          presentaciones: [
            { peso: "1 kg", precio: 9500 },
            { peso: "500 g", precio: 5000 }
          ]
        }
      ]
    }
  ]
};
