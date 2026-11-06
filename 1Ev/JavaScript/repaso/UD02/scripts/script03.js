/**
 * El algoritmo del DNI (Ejercicio de Ampliación):
 * Para calcular la letra de un DNI, el truco matemático consiste en aplicar el módulo (%) del número introducido entre el total de posiciones del array de letras (que son 23).
 * El resto resultante te dará el índice exacto dentro del array ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']
 */
function comprobarDNI(){
    const letrasPosibles = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    // Pedir DNI entero
    let dniCompleto = prompt("Introduce tu DNI (12345678A)").trim();
    // Separar numero de letras
    let numerosDNi = dniCompleto.slice(0,-1);
    let letraDni = dniCompleto.slice(-1).toUpperCase();
    // Comprobación personal
    console.log(numerosDNi);
    console.log(letraDni);

    numerosDNi = parseInt(numerosDNi);
    // Comprobación personal
    console.log(numerosDNi);

    let resto = numerosDNi % 23;
    (letrasPosibles[resto] == letraDni)? alert("CORRECTO"): alert("NO ES CORRECTA LA LETRA");

}

let prueba1 = comprobarDNI();