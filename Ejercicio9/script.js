function actualizarTemporizador() {
  const fechaFinal = new Date(document.getElementById("fecha-final").innerText).getTime();
  const ahora = new Date().getTime();
  const diferencia = fechaFinal - ahora;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById("dias").innerText = dias + "d ";
  document.getElementById("horas").innerText = horas + "h ";
  document.getElementById("minutos").innerText = minutos + "m ";
  document.getElementById("segundos").innerText = segundos + "s ";

  if (diferencia <= 0) {
    document.getElementById("temporizador").innerHTML = "¡Tiempo Finalizado!";
  }
}

// Actualizar el temporizador cada segundo
setInterval(actualizarTemporizador, 1000);
