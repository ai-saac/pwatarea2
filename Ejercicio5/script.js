function validarFormulario() {
  var nombre = document.getElementById("nombre").value;
  var correo = document.getElementById("correo").value;
  var contrasena = document.getElementById("contrasena").value;

  if (nombre === "" || correo === "" || contrasena === "") {
    alert("Por favor, complete todos los campos del formulario.");
    return false;
  }

  // Aquí puedes agregar más lógica de validación si es necesario

  return true; // Envía el formulario si todo está validado
}
