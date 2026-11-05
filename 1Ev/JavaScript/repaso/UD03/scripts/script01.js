/** Reto 1: Procesamiento de Identidad (String, Math y Date)Objetivo teórico: Dominar la manipulación de cadenas de texto y las conversiones de objetos nativos. */

// * Crea un script que solicite al usuario una cadena con el formato "Nombre-AñoDeNacimiento" (por ejemplo, "Carlos-1995").
let cadena = prompt("Introduce una cadena (Nombre-AñoNacimiento =>  Carlos-1995)");

//  * Utiliza un método del objeto String para separar el nombre del año.
let cadenaModificada = cadena.split("-");
console.log(cadenaModificada);
let nombre = cadenaModificada[0];
let edad = parseInt(cadenaModificada[1]);

//  * Convierte el texto del nombre para que la primera letra sea mayúscula y el resto minúsculas.
cadenaModificada = cadenaModificada[0][0].toUpperCase() + cadenaModificada[0].slice(1).toLowerCase();
console.log(cadenaModificada);

//  * Instancia un objeto Date para obtener el año actual y calcula la edad aproximada del usuario restando el año de nacimiento.
let fecha = new Date().getFullYear();
let edadAprox = fecha - edad;
console.log(edadAprox);

// * Genera un "Código de Usuario" aleatorio utilizando Math.random(), multiplicándolo por 10000, y asegúrate de redondearlo hacia abajo utilizando Math.floor().
let codigoUsuario = Math.floor(Math.random()*1000);

//  * Imprime un mensaje en consola que muestre el nombre formateado, la edad calculada y el código generado.
console.log("Nombre: "+cadenaModificada+"\nEdad: "+edadAprox+"\nCodigo generado: \'"+codigoUsuario+"\'");