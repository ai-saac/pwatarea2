function actualizarReloj() {
    const horaManecilla = document.getElementById('horaManecilla');
    const minutoManecilla = document.getElementById('minutoManecilla');
    const segundoManecilla = document.getElementById('segundoManecilla');

    const ahora = new Date();
    const horas = ahora.getHours() % 12;
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();

    const gradoHora = (horas * 30) + (minutos * 0.5); // 30 grados por hora, 0.5 grados por minuto
    const gradoMinuto = minutos * 6; // 6 grados por minuto
    const gradoSegundo = segundos * 6; // 6 grados por segundo

    horaManecilla.style.transform = `translate(-50%, -50%) rotate(${gradoHora}deg)`;
    minutoManecilla.style.transform = `translate(-50%, -50%) rotate(${gradoMinuto}deg)`;
    segundoManecilla.style.transform = `translate(-50%, -50%) rotate(${gradoSegundo}deg)`;
}

// Actualizar el reloj cada segundo
setInterval(actualizarReloj, 1000);

// Llamar a la función para asegurar que el reloj esté actualizado al cargar la página
actualizarReloj();
