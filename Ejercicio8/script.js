let indiceImagenActual = 0;

function mostrarImagen(indice) {
  const imagenes = document.querySelectorAll("#carrusel img");
  
  // Ocultar todas las imágenes
  imagenes.forEach((imagen) => {
    imagen.classList.remove("visible");
  });

  // Mostrar la imagen actual
  imagenes[indice].classList.add("visible");
}

function siguienteImagen() {
  const imagenes = document.querySelectorAll("#carrusel img");
  indiceImagenActual = (indiceImagenActual + 1) % imagenes.length;
  mostrarImagen(indiceImagenActual);
}

function anteriorImagen() {
  const imagenes = document.querySelectorAll("#carrusel img");
  indiceImagenActual = (indiceImagenActual - 1 + imagenes.length) % imagenes.length;
  mostrarImagen(indiceImagenActual);
}

// Mostrar la primera imagen al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  mostrarImagen(indiceImagenActual);

  // Cambiar de imagen automáticamente cada 3 segundos
  setInterval(siguienteImagen, 3000);
});
