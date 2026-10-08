/**
 * 1. Realiza una aplicación Web, que mediante JavaScript muestre el siguiente aviso.
 * Para ello, debes crear una variable de tipo String llamada mensaje. */
function ejercicio21() {
    let mensaje = "Esta página dice\nHola a todo el Mundo!\nQué facil es incluir \'comillas simples\'\ny \"comillas dobles\"";
    alert(mensaje);
}

/*************************************************************************************************************************************/
/* 2. Realiza una aplicación Web, que mediante JavaScript haga divisiones en binario con desplazamiento a la derecha.
 * Ejemplo Decimal: 40 / 16 vs Ejemplo binario: 40 >> 4.*/
function ejercicio22() {
    console.log("##################### Ejercicio 2 #####################");
    let dividendo = parseInt(prompt("Introduce un numero para el dividendo"));
    let divisor = parseInt(prompt("Introduce un numero para el divisor (multiplo de 2)"));

    // Desplazamientos binario
    let desplazamientos = Math.log2(divisor);
    // Resultado binario con desplazamiento
    let resultadoBinario = dividendo >> desplazamientos;
    console.log("El resultado de " + dividendo + " >> " + desplazamientos + " es: " + resultadoBinario);
}

/*************************************************************************************************************************************/
/* 3. Realiza una aplicación Web, que mediante JavaScript haga multiplicaciones en binario con desplazamiento a la izquierda.
 * Ejemplo Decimal: 26 x 4 vs Ejemplo binario: 26 << 2. */
function ejercicio23() {
    console.log("##################### Ejercicio 3 #####################");
    let multiplicando = parseInt(prompt("Introduce un numero para el multiplicando"));
    let multiplicador = parseInt(prompt("Introduce un numero para el multiplicador"));

    let desplazamientos = Math.log2(multiplicador);
    let resultadoBinario = multiplicando << desplazamientos;
    console.log("El resultado de "+multiplicando+" << "+desplazamientos+" es: "+resultadoBinario);
}

/*************************************************************************************************************************************/
/* 4. Realiza una aplicación Web, que mediante JavaScript muestre por consola, el máximo y el valor mas cercano a cero posible con Javascript. Ayuda: emplea 
 * Number.MaxValue y Number.MinValue. Basándote en lo anterior, muestra un valor infinito. */
function ejercicio24() {
    console.log("##################### Ejercicio 4 #####################");
    let valorMaximo = Number.MAX_VALUE;
    console.log("El valor maximo en JavaScript es: "+valorMaximo);

    let valorCercanoCero = Number.MIN_VALUE;
    console.log("El valor más cercano a cero en JavaScript es: "+valorCercanoCero);

    let infinito = valorMaximo*2;
    console.log("Valor infinito: "+infinito);
}

/*************************************************************************************************************************************/
/* 5. Dadas las dos siguientes cadenas:
* OVNI = “OBJETO VOLADOR NO IDENTIFICADO"
* Info = “En un lugar de la mancha”
* Realiza una aplicación Web, que mediante JavaScript compruebe si las cadenas
* están escritas en minúsculas, mayúsculas ó ambas. Emplea: toUpperCase() y toLowerCase()
* De manera adicional, mejora la aplicación anterior, para poder evaluar cualquier
* cadena de texto que introduce el usuario */
function ejercicio25(){
    console.log("##################### Ejercicio 5 #####################");
    function comprobarCadena(texto){
        if (texto === texto.toUpperCase()) {
            console.log(texto+" - Está todo en mayusculas");
        } else if (texto === texto.toLowerCase()) {
            console.log(texto+" - Está todo en minúsculas");
        } else {
            console.log(texto+" - Está en mayúscula y minúscula");
        }
    }

    let OVNI = "OBJETO VOLADOR NO IDENTIFICADO";
    let Info = "En un lugar de la mancha";

    comprobarCadena(OVNI);
    comprobarCadena(Info);

    // Para que el usuario evalue cualquier cadena
    let mensaje = prompt("Introduce aqui tu cadena para evaluar");
    comprobarCadena(mensaje);
}