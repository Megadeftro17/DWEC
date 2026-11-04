/**
 * Identificación: Usa prompt() para pedirle al usuario su nombre completo y, en otro prompt, su edad. Guarda los datos usando let o const (prohibido usar var).
 * Conversión y Tipos: Asegúrate de convertir esa edad a un valor numérico (por ejemplo, usando Number() o parseInt()).
 * Condición VIP: Usa confirm() para preguntarle explícitamente: "¿Estás en la lista VIP de esta noche?" y guarda el resultado booleano.
 * Manipulación de Strings: Calcula cuántos caracteres tiene su nombre (usando la propiedad .length) y transforma su nombre para que esté completamente en MAYÚSCULAS (.toUpperCase()).
 *
 * Lógica de Acceso (if/else):Si el usuario tiene 18 años o más, O si el resultado del VIP es verdadero, muestra un alert() dándole la bienvenida usando su nombre en mayúsculas.
 * * Si es menor de 18 y NO es VIP, lánzale un alert() denegando el acceso.
 *
 * El castigo del bucle (for/while): Si se le deniega el acceso,
 * utiliza una estructura de repetición para imprimir por consola (console.log) la frase "Intento de acceso fallido" exactamente el mismo número de veces que la cantidad de letras que tiene su nombre.   
 */

let nombreCompleto = prompt("Introduce tu nombre con apellidos");
let edad = parseInt(prompt("Introduce tu edad"));
console.log(nombreCompleto);
console.log(edad);


let vip = confirm("¿Estás en la lista VIP de esta noche?");
console.log(vip);

let nombreSeparado = nombreCompleto.split(" ");
let letrasNombre = nombreSeparado[0].length;
let nombreMayusc = nombreSeparado[0].toUpperCase();
console.log(nombreMayusc);
console.log(letrasNombre);

if(edad >= 18 || vip){
    alert("BIENVENIDO "+nombreMayusc);
} else {
    alert("ACCESO DENEGADO "+nombreMayusc);
    for(let i = 0; i < letrasNombre; i++){
        console.log("Intento fallido");
    }
}