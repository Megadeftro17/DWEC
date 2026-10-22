const pantallaPrincipal = document.getElementById('pantalla-actual');
const pantallaAnterior = document.getElementById('pantalla-anterior');

let operandoActual = '';
let operandoAnterior = '';
let operacion = undefined;
let resultadoMostrado = false;

// Añade números a la pantalla
function agregarNumero(numero) {
    if (resultadoMostrado) {
        operandoActual = numero;
        resultadoMostrado = false;
    } else {
        if (operandoActual === '0' && numero !== '0') {
            operandoActual = numero;
        } else if (operandoActual !== '0' || numero === '0') {
            operandoActual += numero;
        }
    }
    actualizarPantalla();
}

// Permite añadir decimales evitando múltiples puntos
function agregarDecimal() {
    if (resultadoMostrado) {
        operandoActual = '0.';
        resultadoMostrado = false;
    } else if (!operandoActual.includes('.')) {
        operandoActual += operandoActual === '' ? '0.' : '.';
    }
    actualizarPantalla();
}

// Limpia todos los datos
function borrar() {
    operandoActual = '';
    operandoAnterior = '';
    operacion = undefined;
    pantallaAnterior.innerText = '';
    actualizarPantalla();
}

// Almacena el número y la operación seleccionada
function elegirOperacion(op) {
    if (operandoActual === '') return;
    if (operandoAnterior !== '') {
        calcular();
    }
    operacion = op;
    operandoAnterior = operandoActual;
    operandoActual = '';
    actualizarPantalla();
}

// Calcula el resultado de las operaciones básicas
function calcular() {
    let calculo;
    const anterior = parseFloat(operandoAnterior);
    const actual = parseFloat(operandoActual);

    if (isNaN(anterior) || isNaN(actual)) return;

    switch (operacion) {
        case '+': calculo = anterior + actual; break;
        case '-': calculo = anterior - actual; break;
        case '*': calculo = anterior * actual; break;
        case '/':
            calculo = actual === 0 ? 'Error' : anterior / actual;
            break;
        default: return;
    }

    // El resultado anterior pasa al cuadro secundario
    pantallaAnterior.innerText = `${anterior} ${operacion} ${actual} =`;
    operandoActual = calculo.toString();
    operacion = undefined;
    operandoAnterior = '';
    resultadoMostrado = true;

    // Solo actualizamos la principal
    pantallaPrincipal.innerText = operandoActual || '0';
}

// Ampliación: Calcula la raíz cuadrada del número en pantalla usando Math.sqrt
function calcularRaiz() {
    if (operandoActual === '') return;

    const actual = parseFloat(operandoActual);
    if (actual < 0) {
        operandoActual = 'Error';
    } else {
        const calculo = Math.sqrt(actual);
        pantallaAnterior.innerText = `√(${actual}) =`;
        operandoActual = calculo.toString();
    }

    resultadoMostrado = true;
    pantallaPrincipal.innerText = operandoActual;
}

// Sincroniza las variables con los elementos visuales del HTML
function actualizarPantalla() {
    pantallaPrincipal.innerText = operandoActual || '0';
    if (operacion != null) {
        pantallaAnterior.innerText = `${operandoAnterior} ${operacion}`;
    } else if (!resultadoMostrado) {
        pantallaAnterior.innerText = '';
    }
}