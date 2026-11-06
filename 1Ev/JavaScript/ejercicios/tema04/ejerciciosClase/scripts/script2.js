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

    do{
        let numTelefono = prompt("Introduce un numero de telefono (812345679)");
        if(numTelefono === null) return;
        numCorrecto = true;

        if(numTelefono.length !== 9){
            alert("ERROR: El numero tiene más de 9 numeros");
            numCorrecto = false;
        }

        let primerNumero = numTelefono.charAt(0);
        if(primerNumero !== '8' && primerNumero !== '9'){
            alert("ERROR: El primer numero no empieza ni por 8 ni por 9");
            numCorrecto = false;
        }

        let segundoNumero = numTelefono.charAt(1);
        let tercerNumero = numTelefono.charAt(2);
        if(segundoNumero === '0' && tercerNumero === '0'){
            alert("ERROR: No puede haber dos 0's seguidos en la segunda posición");
            numCorrecto = false;
        }

        for(let i = 0; i < numTelefono.length; i++){
            if(numTelefono[i] < 0){
                numCorrecto = false;
            }
        }

    }while(!numCorrecto);

    mostrar.innerHTML = "El numero de telefono "+numTelefono+" es correcto";
}

let prueba = ej2();