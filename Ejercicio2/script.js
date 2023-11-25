let resultadoField = document.getElementById('resultado');
let operacionActual = '';
let operadorActual = '';

function agregarNumero(numero) {
    operacionActual += numero;
    actualizarResultado();
}

function agregarOperador(operador) {
    operacionActual += ' ' + operador + ' ';
    operadorActual = operador;
    actualizarResultado();
}

function borrar() {
    operacionActual = '';
    operadorActual = '';
    actualizarResultado();
}

function calcular() {
    const operacionArray = operacionActual.split(' ');
    if (operacionArray.length === 3) {
        const num1 = parseFloat(operacionArray[0]);
        const num2 = parseFloat(operacionArray[2]);
        switch (operacionArray[1]) {
            case '+':
                operacionActual = (num1 + num2).toString();
                break;
            case '-':
                operacionActual = (num1 - num2).toString();
                break;
            case '*':
                operacionActual = (num1 * num2).toString();
                break;
            case '/':
                operacionActual = (num1 / num2).toString();
                break;
            default:
                break;
        }
        operadorActual = '';
        actualizarResultado();
    }
}

function actualizarResultado() {
    resultadoField.value = operacionActual;
}
