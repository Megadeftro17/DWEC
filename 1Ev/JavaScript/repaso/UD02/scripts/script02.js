/**
 * Paso 1: Identificación y validación estricta: Solicita al usuario un "Código de Agente" numérico mediante prompt().
 * - Conviértelo usando Number().
 * - Escribe un condicional if que compruebe si el usuario ha introducido texto inválido usando isNaN().
 * - - Si es NaN, detén la ejecución (puedes usar un alert y no hacer nada más).
 * - - Si es un número válido, verifica con un if que no sea superior a Number.MAX_VALUE.*/

let codigoAgente = prompt("Introduce un Código de Agente numérico:");
codigoAgente = Number(codigoAgente);

if (isNaN(codigoAgente)) {
    alert("Error: El código introducido no es un número válido. Ejecución detenida.");
} else if (codigoAgente > Number.MAX_VALUE) {
    alert("Error: El código supera el valor numérico máximo permitido.");
}else {
    alert("Código de Agente validado correctamente.");
}

/**
 * Paso 2: Evaluación de Strings: Pide al usuario que introduzca una "Clave de acceso".
 * Debes comprobar si el usuario la ha escrito completamente en mayúsculas.
 * Pista teórica: Crea una variable con la clave original convertida a mayúsculas (toUpperCase()) y compárala con la clave original de forma estricta (===).
 */

let claveAcceso = prompt("Introduce la clave de Acceso");
const claveMayusc = claveAcceso.toUpperCase();

(claveAcceso === claveMayusc) ? console.log("La clave es correcta") : console.log("La clave no está en mayusculas") ;

/**
 * Paso 3: Operaciones a nivel de bits: Solicita un "Nivel de amenaza" (un número del 1 al 10).
 * Calcula un "Multiplicador de daño" multiplicando ese nivel de amenaza por 8, pero NO puedes usar el símbolo *.
 * Debes utilizar obligatoriamente el desplazamiento de bits a la izquierda (<<).
 */
let nivelAmenaza = parseInt(prompt("Introduce el nivel de amenza (1 al 10)"));
function multiplicadorDaño(nivel) {
    return nivel << 3;
}

(nivelAmenaza >= 1 && nivelAmenaza <= 10) ? console.log(multiplicadorDaño(nivelAmenaza)) : console.log("Nivel de amenaza erroneo");

/**
 * Paso 4: Cadenas de escape: Construye una única variable de texto (String) llamada informeFinal que concatene los resultados.
 * Esta variable debe incluir saltos de línea (\n), tabulaciones (\t) y comillas simples de escape (\').
 */
let informeFinal = "Codigo agente: \'"+codigoAgente+"\'\nClave acceso: \'"+claveAcceso+"\'\t Nivel de amenaza: \'"+nivelAmenaza;
alert(informeFinal);

/**
 * Paso 5: Estructura Switch: Muestra el informeFinal en un alert().
 * A continuación, emplea un switch evaluando el "Nivel de amenaza" original: si es 1 o 2, muestra por consola "Riesgo bajo"; si es 3 o 4, "Riesgo medio"; si es 5 o superior, "Riesgo crítico".
 */
switch(nivelAmenaza){
    case 1:
    case 2:
        console.log("Riesgo bajo");
        break;
    case 3:
    case 4:
        console.log("Riesgo medio");
        break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        console.log("Riesgo crítico")
        break;
    default:
        console.log("Error riesgo");
        break;
}