/**
 * Defina una función para validar el número de matrícula de un alumno.
 * Para ello:
 * - El número de matrícula está compuesto por 5 números y una letra.
 * - Además el primer número tiene que ser impar
 * - La letra tiene que ser P ó S para diferenciar los estudios*/

function ej1() {
    let mostrar = document.getElementById("ej1");
    let matricula = "";
    let correcta = false;

    do {
        matricula = prompt("Introduce tu matrícula de alumno (ej: 12345P)");

        // Si es nulo sale
        if (matricula === null) return;
        correcta = true;

        // longitud == 6
        if (matricula.length !== 6) {
            alert("Error: La matrícula debe tener exactamente 6 caracteres (5 números y 1 letra).");
            correcta = false;
        }

        // los primeros 5 deben ser números
        if (correcta && isNaN(matricula.substring(0, 5))) {
            alert("Error: Los primeros 5 caracteres deben ser números.");
            correcta = false;
        }

        // el primer número tiene que ser impar
        if (correcta && parseInt(matricula.charAt(0)) % 2 === 0) {
            alert("Error: El primer número de la matrícula debe ser impar.");
            correcta = false;
        }

        // la letra tiene que ser P o S
        if (correcta) {
            let letra = matricula.charAt(5).toUpperCase();
            if (letra !== 'P' && letra !== 'S') {
                alert("Error: La letra final debe ser P o S.");
                correcta = false;
            }
        }

    } while (!correcta);

    mostrar.innerHTML = "La matrícula " + matricula + " ES CORRECTA.";
}

ej1();