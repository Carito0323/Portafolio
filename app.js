// Lista de proyectos con datos base
const proyectos = [
  {
    titulo: "Proyecto Tienda de mascotas",
    imagen: "proyectos/LogoLilool.jpg",
    descripcion: "Página web moderna con autenticación y base de datos.",
    link: "https://github.com/Carito0323/TiendaLilool.git"
  },
  {
    titulo: "Proyecto fundación Peluditos con Futuro",
    imagen: "proyectos/Logopeluditos.jpg",
    descripcion: "Repositorio página web para una fundación de mascotas.",
    link: "https://github.com/Carito0323/Fundacion.github.io.git"
  }
];

const contenedorProyectos = document.getElementById("proyectos");

proyectos.forEach(p => {
  const card = document.createElement("div");
  card.className = "bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 flex flex-col";
  card.innerHTML = `
    <img src="${p.imagen}" alt="${p.titulo}" class="rounded-md mb-4 h-40 object-cover w-full">
    <h3 class="text-lg font-semibold">${p.titulo}</h3>
    <p class="text-sm text-gray-600 mt-2 flex-grow">${p.descripcion}</p>
    <a href="${p.link}" target="_blank"
       class="mt-4 inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors duration-300 text-sm text-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.3c-3.2.7-3.9-1.6-3.9-1.6-.6-1.5-1.5-1.9-1.5-1.9-1.2-.8.1-.8.1-.8 1.3.1 2 .9 2 .9 1.1 2 2.9 1.5 3.6 1.2.1-.8.4-1.5.7-1.8-2.5-.3-5.1-1.2-5.1-5.3 0-1.2.4-2.1 1-2.9-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 2.9 1.1.9-.2 1.9-.4 2.8-.4s1.9.1 2.8.4c2-1.4 2.9-1.1 2.9-1.1.6 1.4.2 2.5.1 2.8.6.8 1 1.7 1 2.9 0 4.1-2.6 5-5.1 5.3.4.4.7 1 .7 2v3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5z"/>
      </svg>
      Ver en GitHub
    </a>
  `;
  contenedorProyectos.appendChild(card);
});


// Lista de archivos para previsualizar
const archivos = [
  
  {
    titulo: "Póster de proyecto de mascotas",
    imagen: "archivos/PosterIA.png",
    ruta: "archivos/POSTERAnimalAI.pdf"
  },
  {
    titulo: "Póster de proyecto con IA",
    imagen: "archivos/PosterFA.png",
    ruta: "archivos/PosterFuerzaAerea.pdf"
  },
  {
    titulo: "Póster de proyecto de Automatización",
    imagen: "archivos/Posterredis.png",
    ruta: "archivos/PosterREDIS.pdf"
  },
  {
    titulo: "Mockup aplicación web proyecto de mascotas",
    imagen: "archivos/MockupPC.png",
    ruta: "archivos/MockupComputador.pdf"
  },
  {
    titulo: "Mockup aplicación Tienda virtual",
    imagen: "archivos/MockupTiendaVirtual.jpg",
    ruta: "archivos/MockupTiendaVirtual.jpg"
  },
  {
    titulo: "Mockup aplicación Votaciones",
    imagen: "archivos/MockupVotaciones.jpg",
    ruta: "archivos/MockupVotaciones.jpg"
  },
  {
    titulo: "Mockup aplicación proyecto de mascotas",
    imagen: "archivos/MockupAplicacionIA.jpg",
    ruta: "archivos/MockupAplicacionIA.jpg"
  }
];

const contenedorArchivos = document.getElementById("archivos");
const modal = document.getElementById("modal");
const visor = document.getElementById("visorArchivo");
const cerrarModal = document.getElementById("cerrarModal");

archivos.forEach(a => {
  const card = document.createElement("div");
  card.className = "bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 flex flex-col cursor-pointer";
  card.innerHTML = `
    <img src="${a.imagen}" alt="${a.titulo}" class="rounded-md mb-4 h-40 object-cover w-full">
    <h3 class="text-lg font-semibold text-center">${a.titulo}</h3>
  `;
  card.addEventListener("click", () => {
    visor.innerHTML = "";
    if (a.ruta.endsWith(".pdf")) {
      visor.innerHTML = `<embed src="${a.ruta}" type="application/pdf" class="w-full h-full" />`;
    } else {
      visor.innerHTML = `<img src="${a.ruta}" alt="${a.titulo}" class="w-full h-auto rounded" />`;
    }
    modal.classList.remove("hidden");
  });
  contenedorArchivos.appendChild(card);
});

cerrarModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});
