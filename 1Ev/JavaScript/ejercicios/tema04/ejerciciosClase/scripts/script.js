/**
 * Defina una función para validar el número de matrícula de un alumno.
 * Para ello:
 * - El número de matrícula está compuesto por 5 números y una letra.
 * - Además el primer número tiene que ser impar
 * - La letra tiene que ser P ó S para diferenciar los estudios*/

function ej1 (){
    let mostrar = document.getElementById("ej1");
    let matricula = "";
    let correcta = false;
    do{

        // PEDIR DATOS
        let matricula = prompt("Introduce tu matrícula de alumno (12345A)");

        // NO INTRODUCE NADA
        if(matricula === null) return;
        correcta = true;

        // LONGITUD == 6
        if(matricula.length != 6){
            alert("Error la matricula no tiene la longitud acertada");
            correcta = false;
        }

        // REVISAR
        if(correcta && isNaN(matricula.substring(0,5))){
            alert("Error: Los primeros 5 caracteres deben ser números.");
            correcta = false;
        }


        // comprobar que es impar el primer valor (CAMBIAR TIPO DE DATO!!!)
        if(correcta && parseInt(matricula.charAt(0) % 2 == 0)){
            correcta = false;
        }

        // CONVERTIR LETRA A MAYUSCULA
        let letra = matricula.charAt(matricula.length-1).toUpperCase();
        if (letra !== 'P' && letra !== 'S'){
            alert("ERROR: La letra debe ser P o S");
            correcta = false;
        }

    } while(!correcta);

    mostrar.innerHTML = "La matricula "+matricula+" ES CORRECTA";
}

let prueba = ej1();