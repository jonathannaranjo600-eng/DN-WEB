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

    const centroX1 = anchoCanvas * 0.3 + Math.sin(tiempoAnimacion * 0.004) * anchoCanvas * 0.25;
    const centroY1 = altoCanvas  * 0.4 + Math.cos(tiempoAnimacion * 0.003) * altoCanvas  * 0.3;
    const gradiente1 = contexto.createRadialGradient(centroX1, centroY1, 0, centroX1, centroY1, anchoCanvas * 0.55);
    gradiente1.addColorStop(0, 'rgba(118, 56, 24, 0.18)');
    gradiente1.addColorStop(1, 'rgba(118, 56, 24, 0)');
    contexto.fillStyle = gradiente1;
    contexto.fillRect(0, 0, anchoCanvas, altoCanvas);

    const centroX2 = anchoCanvas * 0.7 + Math.cos(tiempoAnimacion * 0.005) * anchoCanvas * 0.2;
    const centroY2 = altoCanvas  * 0.6 + Math.sin(tiempoAnimacion * 0.004) * altoCanvas  * 0.25;
    const gradiente2 = contexto.createRadialGradient(centroX2, centroY2, 0, centroX2, centroY2, anchoCanvas * 0.5);
    gradiente2.addColorStop(0, 'rgba(231, 225, 202, 0.07)');
    gradiente2.addColorStop(1, 'rgba(231, 225, 202, 0)');
    contexto.fillStyle = gradiente2;
    contexto.fillRect(0, 0, anchoCanvas, altoCanvas);

    const centroX3 = anchoCanvas * 0.5 + Math.sin(tiempoAnimacion * 0.003 + 2) * anchoCanvas * 0.3;
    const centroY3 = altoCanvas  * 0.3 + Math.cos(tiempoAnimacion * 0.006 + 1) * altoCanvas  * 0.2;
    const gradiente3 = contexto.createRadialGradient(centroX3, centroY3, 0, centroX3, centroY3, anchoCanvas * 0.4);
    gradiente3.addColorStop(0, 'rgba(118, 56, 24, 0.10)');
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

/* ---- CARRUSEL DE PROYECTOS ---- */
const datosProyectos = [
  {
    titulo:      'Stellar midnight coffee',
    anio:        '2024',
    descripcion: 'Identidad visual completa para una cafetería de especialidad con estética nocturna y sofisticada. El proyecto abarcó desde el logotipo hasta el sistema de aplicaciones en packaging, señalética y materiales de marca.',
    imagen:      'assets/proyectos/stellar.png'
  },
  {
    titulo:      'Encode',
    anio:        '2026',
    descripcion: 'Branding y desarrollo web para una startup tecnológica enfocada en soluciones de software educativo. Se definió desde cero la identidad visual, el tono de comunicación y la presencia digital.',
    imagen:      'assets/proyectos/encode.jpg'
  },
  {
    titulo:      'Smart Solution Factory',
    anio:        '2025',
    descripcion: 'Diseño de identidad corporativa para una empresa de consultoría e innovación industrial. El sistema visual transmite precisión, confianza y capacidad técnica a través de cada punto de contacto.',
    imagen:      'assets/proyectos/ssf.png'
  },
  {
    titulo:      'Helper',
    anio:        '2024',
    descripcion: 'Identidad y diseño de interfaz para una aplicación de asistencia doméstica. El proyecto incluyó el naming, la marca, el sistema de íconos y los flujos de UX para iOS y Android.',
    imagen:      'assets/proyectos/helper.jpg'
  },
  {
    titulo:      'Kuvo',
    anio:        '2025',
    descripcion: 'Branding integral para una marca de mobiliario urbano contemporáneo. Desde la identidad hasta el catálogo digital, cada pieza comunica modernidad, funcionalidad y diseño intencional.',
    imagen:      'assets/proyectos/kuvo.png'
  }
];

let indiceProyectoActivo = 0;

const tituloProyecto      = document.getElementById('titulo_proyecto');
const anioProyecto        = document.getElementById('anio_proyecto');
const descripcionProyecto = document.getElementById('descripcion_proyecto');
const imagenProyecto      = document.getElementById('imagen_proyecto');
const flechaAnterior      = document.getElementById('flecha_anterior_proyecto');
const flechaSiguienteP    = document.getElementById('flecha_siguiente_proyecto');

function cambiarProyecto(nuevoIndice) {
  if (!tituloProyecto || !descripcionProyecto || !imagenProyecto) return;

  const total = datosProyectos.length;
  indiceProyectoActivo = (nuevoIndice + total) % total;
  const proyecto = datosProyectos[indiceProyectoActivo];

  tituloProyecto.style.opacity      = '0';
  anioProyecto.style.opacity        = '0';
  descripcionProyecto.style.opacity = '0';

  setTimeout(() => {
    tituloProyecto.textContent      = proyecto.titulo;
    anioProyecto.textContent        = proyecto.anio;
    descripcionProyecto.textContent = proyecto.descripcion;
    imagenProyecto.style.backgroundImage = `url('${proyecto.imagen}')`;

    tituloProyecto.style.opacity      = '1';
    anioProyecto.style.opacity        = '1';
    descripcionProyecto.style.opacity = '1';
  }, 280);
}

if (flechaAnterior) {
  flechaAnterior.addEventListener('click', () => cambiarProyecto(indiceProyectoActivo - 1));
}
if (flechaSiguienteP) {
  flechaSiguienteP.addEventListener('click', () => cambiarProyecto(indiceProyectoActivo + 1));
}

if (imagenProyecto) cambiarProyecto(0);

/* ---- NAV ACTIVO EN BASE.HTML (single-page scroll) ---- */
const pantallas = document.querySelectorAll('.pantalla-seccion[id]');
const enlacesNavBase = document.querySelectorAll('.enlace-nav[href^="#"]');

if (pantallas.length > 0 && enlacesNavBase.length > 0) {
  const contenedorScroll = document.querySelector('.contenedor-principal--scroll');

  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        const id = entrada.target.id;
        enlacesNavBase.forEach(enlace => {
          enlace.classList.toggle('enlace-nav--activo', enlace.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, {
    root: contenedorScroll,
    threshold: 0.45
  });

  pantallas.forEach(pantalla => observador.observe(pantalla));
}
