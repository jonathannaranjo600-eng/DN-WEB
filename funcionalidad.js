/* =============================================
   FUNCIONALIDAD.JS — DN WEB
   ============================================= */

/* ---- MENÚ HAMBURGUESA ---- */
const botonMenu = document.getElementById('boton-menu');
const menuDesplegable = document.getElementById('menu-desplegable');

if (botonMenu && menuDesplegable) {
  botonMenu.addEventListener('click', () => {
    botonMenu.classList.toggle('activo');
    menuDesplegable.classList.toggle('visible');
  });

  menuDesplegable.querySelectorAll('a.enlace-menu-desplegable').forEach(enlace => {
    enlace.addEventListener('click', () => {
      botonMenu.classList.remove('activo');
      menuDesplegable.classList.remove('visible');
    });
  });
}

/* ---- CANVAS — GRADIENTE ONDULANTE ---- */
const canvasGradiente = document.getElementById('canvas-olas');

if (canvasGradiente) {
  const contexto = canvasGradiente.getContext('2d');
  let anchoCanvas, altoCanvas, tiempoAnimacion = 0;

  function ajustarTamanoCanvas() {
    anchoCanvas = canvasGradiente.width  = window.innerWidth;
    altoCanvas  = canvasGradiente.height = window.innerHeight;
  }

  function animarCanvas() {
    contexto.clearRect(0, 0, anchoCanvas, altoCanvas);

    const centroX1 = anchoCanvas * 0.3 + Math.sin(tiempoAnimacion * 0.0018) * anchoCanvas * 0.38;
    const centroY1 = altoCanvas  * 0.4 + Math.cos(tiempoAnimacion * 0.0013) * altoCanvas  * 0.42;
    const gradiente1 = contexto.createRadialGradient(centroX1, centroY1, 0, centroX1, centroY1, anchoCanvas * 0.6);
    gradiente1.addColorStop(0, 'rgba(118, 56, 24, 0.38)');
    gradiente1.addColorStop(0.5, 'rgba(118, 56, 24, 0.12)');
    gradiente1.addColorStop(1, 'rgba(118, 56, 24, 0)');
    contexto.fillStyle = gradiente1;
    contexto.fillRect(0, 0, anchoCanvas, altoCanvas);

    const centroX2 = anchoCanvas * 0.72 + Math.cos(tiempoAnimacion * 0.0015) * anchoCanvas * 0.32;
    const centroY2 = altoCanvas  * 0.6  + Math.sin(tiempoAnimacion * 0.0020) * altoCanvas  * 0.38;
    const gradiente2 = contexto.createRadialGradient(centroX2, centroY2, 0, centroX2, centroY2, anchoCanvas * 0.55);
    gradiente2.addColorStop(0, 'rgba(48, 72, 38, 0.55)');
    gradiente2.addColorStop(0.5, 'rgba(48, 72, 38, 0.18)');
    gradiente2.addColorStop(1, 'rgba(48, 72, 38, 0)');
    contexto.fillStyle = gradiente2;
    contexto.fillRect(0, 0, anchoCanvas, altoCanvas);

    const centroX3 = anchoCanvas * 0.5 + Math.sin(tiempoAnimacion * 0.0012 + 2) * anchoCanvas * 0.42;
    const centroY3 = altoCanvas  * 0.3 + Math.cos(tiempoAnimacion * 0.0022 + 1) * altoCanvas  * 0.32;
    const gradiente3 = contexto.createRadialGradient(centroX3, centroY3, 0, centroX3, centroY3, anchoCanvas * 0.45);
    gradiente3.addColorStop(0, 'rgba(118, 56, 24, 0.28)');
    gradiente3.addColorStop(0.5, 'rgba(118, 56, 24, 0.08)');
    gradiente3.addColorStop(1, 'rgba(118, 56, 24, 0)');
    contexto.fillStyle = gradiente3;
    contexto.fillRect(0, 0, anchoCanvas, altoCanvas);

    tiempoAnimacion++;
    requestAnimationFrame(animarCanvas);
  }

  ajustarTamanoCanvas();
  animarCanvas();
  window.addEventListener('resize', ajustarTamanoCanvas);
}

/* ---- CARRUSEL DE SERVICIOS ---- */
const datosServicios = [
  {
    titulo:      "Diseño de<br/>Identidades",
    descripcion: "Creamos identidades visuales únicas que comunican la esencia de tu marca. Desde el concepto hasta la aplicación final, cada elemento está diseñado con propósito y precisión para destacar en cualquier medio.",
    imagen:      "assets/servicios/identidad-visual.jpg"
  },
  {
    titulo:      "Branding",
    descripcion: "Construimos marcas memorables desde cero. Definimos la personalidad, los valores y la voz de tu marca para crear una conexión auténtica y duradera con tu audiencia.",
    imagen:      "assets/servicios/branding.jpg"
  },
  {
    titulo:      "Desarrollo<br/>Web",
    descripcion: "Diseñamos y desarrollamos sitios web modernos, rápidos y con identidad propia. Cada proyecto combina diseño gráfico profesional con código limpio y funcional.",
    imagen:      "assets/servicios/desarrollo-web.jpg"
  },
  {
    titulo:      "Diseño<br/>Publicitario",
    descripcion: "Creamos piezas publicitarias que capturan la atención y comunican el mensaje correcto en el momento indicado, adaptadas a cada canal y formato.",
    imagen:      "assets/servicios/diseno-publicitario.jpg"
  },
  {
    titulo:      "Contenido<br/>para RRSS",
    descripcion: "Diseñamos contenido visual estratégico para redes sociales que refuerza tu identidad de marca, aumenta tu presencia digital y conecta con tu comunidad.",
    imagen:      "assets/servicios/contenido-rrss.jpg"
  },
  {
    titulo:      "Investigación<br/>y Análisis",
    descripcion: "Estudiamos tu mercado, competencia y audiencia para tomar decisiones de diseño basadas en datos reales. El diseño efectivo comienza con investigación sólida.",
    imagen:      "assets/servicios/investigacion.jpg"
  }
];

let indiceServicioActivo = 0;

const tituloServicio      = document.getElementById('titulo_servicios');
const descripcionServicio = document.getElementById('descripcion_servicios');
const fondoImagen         = document.getElementById('fondo_imagen_servicios');
const flechaSiguiente     = document.getElementById('flecha_siguiente_servicios');
const itemsBarra          = document.querySelectorAll('.item_servicio_barra');

function cambiarServicio(nuevoIndice) {
  if (!tituloServicio || !descripcionServicio || !fondoImagen) return;

  indiceServicioActivo = nuevoIndice;
  const servicio = datosServicios[indiceServicioActivo];

  tituloServicio.style.opacity      = '0';
  descripcionServicio.style.opacity = '0';

  setTimeout(() => {
    tituloServicio.innerHTML         = servicio.titulo;
    descripcionServicio.textContent  = servicio.descripcion;
    fondoImagen.style.backgroundImage = `url('${servicio.imagen}')`;

    tituloServicio.style.opacity      = '1';
    descripcionServicio.style.opacity = '1';
  }, 300);

  itemsBarra.forEach((item, i) => {
    item.classList.toggle('activo_barra_servicios', i === nuevoIndice);
  });
}

if (itemsBarra.length > 0) {
  itemsBarra.forEach((item) => {
    item.addEventListener('click', () => {
      cambiarServicio(parseInt(item.dataset.indice));
    });
  });
}

if (flechaSiguiente) {
  flechaSiguiente.addEventListener('click', () => {
    cambiarServicio((indiceServicioActivo + 1) % datosServicios.length);
  });
}

if (fondoImagen) cambiarServicio(0);

/* ---- SCROLL HORIZONTAL EN PROYECTOS ---- */
const proyectosSeccion = document.getElementById('proyectos');
const proyectosScrollH  = document.querySelector('.proyectos_scroll_h');
const navBarra          = document.querySelector('.barra-navegacion');

let proyectosEnVista = false;

if (proyectosSeccion) {
  const contenedorV = document.querySelector('.contenedor-principal--scroll');
  const observadorP = new IntersectionObserver((entries) => {
    proyectosEnVista = entries[0].intersectionRatio >= 0.98;
  }, { root: contenedorV, threshold: [0, 0.98, 1] });
  observadorP.observe(proyectosSeccion);
}

if (proyectosScrollH) {
  let bloqueado = false;

  proyectosScrollH.addEventListener('wheel', (e) => {
    if (!proyectosEnVista) return;

    const alFinal  = proyectosScrollH.scrollLeft + proyectosScrollH.clientWidth >= proyectosScrollH.scrollWidth - 2;
    const alInicio = proyectosScrollH.scrollLeft <= 2;

    if ((alFinal && e.deltaY > 0) || (alInicio && e.deltaY < 0)) return;

    e.preventDefault();
    if (bloqueado) return;
    bloqueado = true;

    const ancho = proyectosScrollH.clientWidth;
    proyectosScrollH.scrollBy({ left: e.deltaY > 0 ? ancho : -ancho, behavior: 'smooth' });

    setTimeout(() => { bloqueado = false; }, 650);
  }, { passive: false });
}

/* ---- NAV ACTIVO EN BASE.HTML ---- */
const pantallas = document.querySelectorAll('.pantalla-seccion[id]');
const enlacesNavBase = document.querySelectorAll('.enlace-nav[href^="#"]');

if (pantallas.length > 0 && enlacesNavBase.length > 0) {
  const contenedorScroll = document.querySelector('.contenedor-principal--scroll');

  /* Marca el enlace activo — respeta data-nav para slides agrupadas */
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        const navHref = entrada.target.dataset.nav || `#${entrada.target.id}`;
        enlacesNavBase.forEach(enlace => {
          enlace.classList.toggle('enlace-nav--activo', enlace.getAttribute('href') === navHref);
        });
      }
    });
  }, {
    root: contenedorScroll,
    threshold: 0.45
  });

  pantallas.forEach(pantalla => observador.observe(pantalla));
}

/* ---- FAQ ACORDEÓN ---- */
const faqItems = document.querySelectorAll('.faq_item');

faqItems.forEach(item => {
  item.querySelector('.faq_pregunta').addEventListener('click', () => {
    const estaAbierto = item.classList.contains('abierto');
    faqItems.forEach(i => i.classList.remove('abierto'));
    if (!estaAbierto) item.classList.add('abierto');
  });
});

/* ---- HERO — REVEAL POR PALABRAS ---- */
(function () {
  const h1 = document.querySelector('.titulo-inicio');
  if (!h1) return;
  let idx = 0;

  function procesarNodo(nodo) {
    if (nodo.nodeType === Node.TEXT_NODE) {
      const frag = document.createDocumentFragment();
      nodo.textContent.split(/(\s+)/).forEach(parte => {
        if (/^\s+$/.test(parte)) {
          frag.appendChild(document.createTextNode(parte));
        } else if (parte.length > 0) {
          const s = document.createElement('span');
          s.className = 'hero-palabra';
          s.style.animationDelay = (idx++ * 0.09) + 's';
          s.textContent = parte;
          frag.appendChild(s);
        }
      });
      nodo.replaceWith(frag);
    } else if (nodo.nodeType === Node.ELEMENT_NODE && nodo.tagName !== 'BR') {
      nodo.classList.add('hero-palabra');
      nodo.style.animationDelay = (idx++ * 0.09) + 's';
    }
  }

  Array.from(h1.childNodes).forEach(procesarNodo);
})();

/* ---- ANIMACIONES DE ENTRADA ---- */
document.body.classList.add('reveal-ready');

const contenedorReveal = document.querySelector('.contenedor-principal--scroll');
const elementosReveal  = document.querySelectorAll('.reveal');

if (elementosReveal.length > 0) {
  const observadorReveal = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('reveal--visible');
        observadorReveal.unobserve(entrada.target);
      }
    });
  }, { root: contenedorReveal, threshold: 0.05 });

  elementosReveal.forEach(el => observadorReveal.observe(el));
}

/* ---- CURSOR PERSONALIZADO ---- */
if (window.matchMedia('(pointer: fine)').matches) {
  document.body.classList.add('cursor-personalizado');

  const cursorDot = document.getElementById('cursor-dot');
  if (cursorDot) {
    let mouseX = -100, mouseY = -100;
    let dotX   = -100, dotY   = -100;
    const LERP = 0.14;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('a, button, label, [role="button"]')) {
        cursorDot.classList.add('cursor-dot--hover');
      }
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest('a, button, label, [role="button"]')) {
        cursorDot.classList.remove('cursor-dot--hover');
      }
    });

    (function animarDot() {
      dotX += (mouseX - dotX) * LERP;
      dotY += (mouseY - dotY) * LERP;
      cursorDot.style.transform = `translate(${dotX - 9}px, ${dotY - 9}px)`;
      requestAnimationFrame(animarDot);
    })();

    ['.tarjeta_perfil_revista', '.footer_crema'].forEach(selector => {
      const zona = document.querySelector(selector);
      if (zona) {
        zona.addEventListener('mouseenter', () => cursorDot.classList.add('cursor-dot--oscuro'));
        zona.addEventListener('mouseleave', () => cursorDot.classList.remove('cursor-dot--oscuro'));
      }
    });
  }
}

/* ---- PROYECTOS — CONTADOR DE POSICIÓN ---- */
const numActualEl = document.getElementById('proyectos_num_actual');

if (proyectosScrollH && numActualEl) {
  proyectosScrollH.addEventListener('scroll', () => {
    const indice = Math.round(proyectosScrollH.scrollLeft / proyectosScrollH.clientWidth);
    numActualEl.textContent = String(indice + 1).padStart(2, '0');
  }, { passive: true });
}
