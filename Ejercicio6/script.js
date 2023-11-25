function agregarTarea() {
  var nuevaTareaInput = document.getElementById("nuevaTarea");
  var nuevaTarea = nuevaTareaInput.value;

  if (nuevaTarea.trim() !== "") {
    var listaTareas = document.getElementById("listaTareas");
    var nuevaLi = document.createElement("li");

    nuevaLi.innerHTML = `${nuevaTarea} <button onclick="eliminarTarea(this)">Eliminar</button>`;
    nuevaLi.classList.add("tarea-guardada"); 
    listaTareas.appendChild(nuevaLi);

    nuevaTareaInput.value = "";
  }
}

function eliminarTarea(elemento) {
  var tareaEliminar = elemento.parentNode;
  tareaEliminar.parentNode.removeChild(tareaEliminar);
}
