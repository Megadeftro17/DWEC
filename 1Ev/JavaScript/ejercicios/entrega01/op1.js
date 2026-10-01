/**
 * 1. Crea una aplicación que solicitar el nombre al usuario y lo guardará en una variable denominada nombre. 
 * Solicitar el primer apellido al usuario y lo guardará n una variable denominada apellido.
 * Almacenaremos en una nueva variable denominada fullName, el nombre y primer apellido registrado separados por un espacio.
 * Solicitar la edad al usuario y lo guardas en una variable denominada edad.
 * Calcular y asignar a una nueva variable Nacimiento, el año de nacimiento del usuario (sin tener en cuenta el mes de nacimiento.
 * Mostrar en el cuadro de resultados del editor la siguiente información (una en cada línea):
 *  - Nombre completo: (valor de la variable fullName)
 *  - Año de nacimiento: (valor de la variable year) */
console.log("##################### Ejercicio 1 #####################")
let nombre = prompt("1. Introduce tu nombre");
let apellido = prompt("1. Introduce tu apellido");
let fullName = nombre+" "+apellido;

let edad = parseInt(prompt("1. Introduce tu edad"));
let yearActual = new Date().getFullYear();
let year = yearActual - edad;

console.log("Nombre comleto: "+fullName)
console.log("Año de nacimiento: "+year);


/*************************************************************************************************************************************/
/* 2. Calcula el exponencial de cualquier número */
console.log("##################### Ejercicio 2 #####################");
let base = prompt("2. Introduce un numero para calcular su exponencial");
let exp = prompt("2. Introduce un exponente");
let resultadoExponencial = base**exp;
console.log("Resultado: "+resultadoExponencial);


/*************************************************************************************************************************************/
/* 3. Crea un script para calcular números pares e impares. Los números se introducen por teclado y emplear el módulo %. */
console.log("##################### Ejercicio 3 #####################");
let numero = parseInt(prompt("3. Introduce un numero para saber si es par o impar"));
if(numero % 2 == 0){
    console.log("El numero "+numero+" es par");
} else {
    console.log("El numero "+numero+" es impar");
}

/*************************************************************************************************************************************/
/* 4. Detectar si un número es múltiplo de otro número. */
console.log("##################### Ejercicio 4 #####################");
let numMultiplo1 = parseInt(prompt("4. Dame un numero para conocer si el siguiente es multiplo"));
let numMultiplo2 = parseInt(prompt("4. Dame otro numero para saber si es multiplo del anterior"));
if(numMultiplo1 % numMultiplo2 == 0){
    console.log(numMultiplo1+" es multiplo de "+numMultiplo2);
} else {
    console.log(numMultiplo1+" NO es multiplo de "+numMultiplo2);
}

/*************************************************************************************************************************************/
/* 5. Crea un Array que almacene los 12 meses del año y muestra cada mes empleando un for */
console.log("##################### Ejercicio 5 #####################");
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
for (let i = 0; i < meses.length; i++){
    console.log(meses[i]);
}

/*************************************************************************************************************************************/
/* 6. Compara dos números enteros para saber cual es mayor. Además comprueba si son positivos */
console.log("##################### Ejercicio 6 #####################");
let n1 = parseInt(prompt("6. Dame un numero para comparar"));
let n2 = parseInt(prompt("6. Dame otro numero para comparar"));

if (n1 > 0 && n2 > 0) {
    console.log("Ambos números son positivos.");
} else {
    consolelog("NO son positivos");
}

if (n1 > n2) {
    console.log(n1 + " es mayor que " + n2);
} else if (n2 > n1) {
    console.log(n2 + " es mayor que " + n1);
} else {
    console.log("Ambos números son iguales.");
}

/*************************************************************************************************************************************/
/* 7. Muestra en el documento HTML los 30 primeros números */
document.write("##################### Ejercicio 7 #####################");
for(let i = 0; i <= 30; i++){
    document.write(i+"<br>");
}

/*************************************************************************************************************************************/
/* 8. Muestra en el documento HTML el factorial de un número que se inserta por teclado. Declara dos variables: para el número y para el resultado. Emplea un for. */
document.write("##################### Ejercicio 8 #####################");
let numFactorial = parseInt(prompt("Dame un numero para hacer su factorial"))
let resultadoFactorial = 1;
for(let i = 1; i <= numFactorial; i++){
    resultadoFactorial*= i;
}
document.write("Resultado: "+resultadoFactorial);

/*************************************************************************************************************************************/
/* 9. Crea un script para que al accionar un botón, solicite insertar el nombre de una ciudad.
 * Muestra en una ventana, la elección múltiple de 3 ciudades con switch.
 * Tienes que declarar las siguientes ciudades (Zaragoza, Barcelona, Madrid) y que cada una tenga su propio mensaje. */
console.log("##################### Ejercicio 9 #####################");
function elegirCiudad(){
    let ciudad = prompt("Introduce el nombre de una ciudad (Zaragoza, Barcelona, Madrid)");
    if(ciudad != null){
        switch(ciudad.toLowerCase()){
            case "zaragoza":
                document.write("La capital del cierzo");
                break;
            case "barcelona":
                document.write("La ciudad del arte");
                break;
            case "madrid":
                document.write("La capital de España");
                break;
            default:
                document.write("No conozco esa ciudad");
                break;
        }
    }
}