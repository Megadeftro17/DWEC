/**
 * Ejercicio:
 * Crea un script con una función para identificar un número de teléfono fijo.
 * - Empezará siempre por 8 o 9
 * - Deberá contener 9 números
 * - Ninguna negativo
 * No puede coincidir que haya dos ceros en la segunda y tercera posición */

function ej2() {
    let mostrar = document.getElementById("ej2");
    let numTelefono = "";
    let numCorrecto = false;

    do {
        numTelefono = prompt("Introduce un número de teléfono fijo (9 dígitos, empieza por 8 o 9)");

        if (numTelefono === null) return;
        numCorrecto = true;

        // debe tener 9 caracteres
        if (numTelefono.length !== 9) {
            alert("Error: El número debe tener exactamente 9 dígitos.");
            numCorrecto = false;
        }

        // todos deben ser números positivos
        if (numCorrecto && (isNaN(numTelefono) || numTelefono.includes('-') || numTelefono.includes('+'))) {
            alert("Error: El teléfono solo debe contener números positivos.");
            numCorrecto = false;
        }

        // empieza por 8 o 9
        if (numCorrecto) {
            let primerNumero = numTelefono.charAt(0);
            if (primerNumero !== '8' && primerNumero !== '9') {
                alert("Error: El teléfono fijo debe empezar por 8 o 9.");
                numCorrecto = false;
            }
        }

        // no puede tener ceros en la 2ª y 3ª posición
        if (numCorrecto) {
            let segundoNumero = numTelefono.charAt(1);
            let tercerNumero = numTelefono.charAt(2);
            if (segundoNumero === '0' && tercerNumero === '0') {
                alert("Error: No puede haber dos ceros en la segunda y tercera posición.");
                numCorrecto = false;
            }
        }

    } while (!numCorrecto);

    mostrar.innerHTML = "El número de teléfono " + numTelefono + " es correcto.";
}

ej2();