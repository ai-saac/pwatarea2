const preguntas = [
    {
        pregunta: "¿Cuál es la capital de Francia?",
        opciones: ["Berlín", "París", "Londres", "Madrid"],
        respuestaCorrecta: "París"
    },
    {
        pregunta: "¿En qué año comenzó la Segunda Guerra Mundial?",
        opciones: ["1939", "1941", "1945", "1942"],
        respuestaCorrecta: "1939"
    },
    {
        pregunta: "¿Cuál es el río más largo del mundo?",
        opciones: ["Amazonas", "Nilo", "Yangtsé", "Misisipi"],
        respuestaCorrecta: "Amazonas"
    },
    {
        pregunta: "¿Cuántos continentes hay en el mundo?",
        opciones: ["5", "6", "7", "8"],
        respuestaCorrecta: "7"
    },
    {
        pregunta: "¿Quién escribió 'Cien años de soledad'?",
        opciones: ["Gabriel García Márquez", "Mario Vargas Llosa", "Julio Cortázar", "Isabel Allende"],
        respuestaCorrecta: "Gabriel García Márquez"
    }
];

let indicePreguntaActual = 0;
let puntuacion = 0;

const preguntaElemento = document.getElementById("pregunta");
const opcionesContainer = document.getElementById("opciones-container");
const botonReiniciar = document.getElementById("botonReiniciar");

function mostrarPregunta() {
    const preguntaActual = preguntas[indicePreguntaActual];
    preguntaElemento.textContent = preguntaActual.pregunta;

    opcionesContainer.innerHTML = "";

    preguntaActual.opciones.forEach((opcion, index) => {
        const opcionElemento = document.createElement("button");
        opcionElemento.textContent = opcion;
        opcionElemento.onclick = () => seleccionarRespuesta(opcion, preguntaActual.respuestaCorrecta);
        opcionesContainer.appendChild(opcionElemento);
    });
}

function seleccionarRespuesta(respuestaSeleccionada, respuestaCorrecta) {
    if (respuestaSeleccionada === respuestaCorrecta) {
        puntuacion++;
    }

    indicePreguntaActual++;

    if (indicePreguntaActual < preguntas.length) {
        mostrarPregunta();
    } else {
        mostrarResultadoFinal();
    }
}

function mostrarResultadoFinal() {
    preguntaElemento.textContent = `Puntuación final: ${puntuacion} de ${preguntas.length}`;
    opcionesContainer.innerHTML = "";
}

function reiniciarJuego() {
    indicePreguntaActual = 0;
    puntuacion = 0;
    mostrarPregunta();
}

mostrarPregunta();
