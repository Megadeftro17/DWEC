/**
 * 1. Realiza una aplicación Web, que mediante JavaScript muestre el siguiente aviso.
 * Para ello, debes crear una variable de tipo String llamada mensaje. */
console.log("##################### Ejercicio 1 #####################");
let mensaje = "Hola a todo el Mundo!\nQue fácil es incluir 'comillas simples'\ny \"comillas dobles\"";
alert(mensaje);

/*************************************************************************************************************************************/
/* 2. Realiza una aplicación Web, que mediante JavaScript haga divisiones en binario con desplazamiento a la derecha.
 * Ejemplo Decimal: 40 / 16 vs Ejemplo binario: 40 >> 4. */
console.log("##################### Ejercicio 2 #####################");
let resultadoDiv = 40 >> 4; 
console.log("40 >> 4 =", resultadoDiv); // Resultado: 2

/*************************************************************************************************************************************/
/* 3. Realiza una aplicación Web, que mediante JavaScript haga multiplicaciones en binario con desplazamiento a la izquierda. 
 * Ejemplo Decimal: 26 x 4 vs Ejemplo binario: 26 << 2. */
console.log("##################### Ejercicio 3 #####################");
let resultadoMult = 26 << 2;
console.log("26 << 2 =", resultadoMult); // Resultado: 104

/*************************************************************************************************************************************/
/* 4. Realiza una aplicación Web, que mediante JavaScript muestre por consola, el máximo y el valor mas cercano a cero posible con Javascript. 
 * Ayuda: emplea Number.MaxValue y Number.MinValue. Basándote en lo anterior, muestra un valor infinito. */
console.log("##################### Ejercicio 4 #####################");
console.log("Valor máximo:", Number.MAX_VALUE);
console.log("Valor más cercano a cero:", Number.MIN_VALUE);

let infinito = Number.MAX_VALUE * 2;
console.log("Valor infinito:", infinito); // Infinity

/*************************************************************************************************************************************/
/* 5. Dadas las dos siguientes cadenas:
 * OVNI = “OBJETO VOLADOR NO IDENTIFICADO"
 * Info = “En un lugar de la mancha”
 * Realiza una aplicación Web, que mediante JavaScript compruebe si las cadenas están escritas en minúsculas, mayúsculas ó ambas.
 * Emplea: toUpperCase() y toLowerCase() 
 * De manera adicional, mejora la aplicación anterior, para poder evaluar cualquier 
 * cadena de texto que introduce el usuario. */
console.log("##################### Ejercicio 5 #####################");
function evaluarCadena(texto) {
    if (texto === texto.toUpperCase()) {
        console.log("La cadena está en MAYÚSCULAS");
    } else if (texto === texto.toLowerCase()) {
        console.log("La cadena está en MINÚSCULAS");
    } else {
        console.log("La cadena combina MAYÚSCULAS y MINÚSCULAS");
    }
}

let OVNI = "OBJETO VOLADOR NO IDENTIFICADO";
let Info = "En un lugar de la mancha";

evaluarCadena(OVNI);
evaluarCadena(Info);

// Para cualquier texto introducido por el usuario:
let textoUsuario = prompt("Introduce un texto para analizar:");
evaluarCadena(textoUsuario);