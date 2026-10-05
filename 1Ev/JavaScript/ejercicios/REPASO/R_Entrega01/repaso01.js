/**
 * 1. Crea una aplicación que solicitar el nombre al usuario y lo guardará en una variable denominada nombre.
 * Solicitar el primer apellido al usuario y lo guardará n una variable denominada apellido.
 * Almacenaremos en una nueva variable denominada fullName, el nombre y primer apellido registrado separados por un espacio.
 * Solicitar la edad al usuario y lo guardas en una variable denominada edad.
 * Calcular y asignar a una nueva variable Nacimiento, el año de nacimiento del usuario (sin tener en cuenta el mes de nacimiento.
 * Mostrar en el cuadro de resultados del editor la siguiente información (una en cada línea):
 *  - Nombre completo: (valor de la variable fullName)
 *  - Año de nacimiento: (valor de la variable year) */
function ejercicio01() {
    let nombre = prompt("Introduce tu nombre");
    let apellido = prompt("Introduce tu primer apellido");
    let fullName = nombre+" "+apellido;
    let edad = prompt("Introduce tu edad");
    let year = new Date().getFullYear() - edad;

    console.log("Nombre completo: "+fullName);
    console.log("Año de nacimiento: "+year);
}

/* 2. Calcula el exponencial de cualquier número */
function ejercicio02() {
    let base = prompt("Introduce un numero para su exponencial");
    let exponente = prompt("Introduce su exponente");

    let resultadoExponencial = base**exponente;
    console.log("Resultado: "+resultadoExponencial);
}

/* 3. Crea un script para calcular números pares e impares. Los números se introducen por teclado y emplear el módulo %. */
function ejercicio03() {
    let numeroParImpar = prompt("Introduce un numero para saber si es par o impar");
    if(numeroParImpar % 2 == 0){
        console.log("El numero "+numeroParImpar+" es par");
    } else {
        console.log("El numero "+numeroParImpar+" es impar");
    }
}

/* 4. Detectar si un número es múltiplo de otro número. */
function ejercicio04() {
        let numeroMultiplo = parseInt(prompt("Introduce un numero para saber si es multiplo"));
    let numeroMultiplo1 = parseInt(prompt("Introduce el otro para comprobar"));
    if(numeroMultiplo % numeroMultiplo1 == 0){
        console.log("El numero "+numeroMultiplo1+" es multiplo de "+numeroMultiplo);
    } else {
        console.log("El numero "+numeroMultiplo1+" no es multiplo de "+numeroMultiplo);
    }
}

/* 5. Crea un Array que almacene los 12 meses del año y muestra cada mes empleando un for */
function ejercicio05() {
    let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    for(let i = 0; i < meses.length; i++){
        console.log(meses[i]);
    }
}

/* 6. Compara dos números enteros para saber cual es mayor. Además comprueba si son positivos */
function ejercicio06() {
    let numeroComparar1 = parseInt(prompt("Introduce un numero para saber si es mayor"));
    let numeroComparar2 = parseInt(prompt("Introduce otro numero"));
    if(numeroComparar1 > 0 && numeroComparar2 > 0){
        console.log("Ambos numeros son positivos");
    } else {
        console.log("NO son positivos");
    }

    if(numeroComparar1 > numeroComparar2) {
        console.log(numeroComparar1+" es mayor que "+numeroComparar2);
    } else if (numeroComparar1 < numeroComparar2) {
        console.log(numeroComparar2+" es mayor que "+numeroComparar1);
    } else {
        console.log("Ambos numeros son iguales")
    }
}

/* 7. Muestra en el documento HTML los 30 primeros números */
function ejercicio07() {
    let contenedor = document.getElementById("ej07-08");
    contenedor.innerHTML = "<h3>Ejercicio 7: Los 30 primeros números:</h3>";

    for (let i = 1; i <= 30; i++) {
        contenedor.innerHTML += i + "<br>";
    }
}

/* 8. Muestra en el documento HTML el factorial de un número que se inserta por teclado. Declara dos variables: para el número y para el resultado. Emplea un for. */
function ejercicio08(){
    let numFactorial = parseInt(prompt("Introduce un numero para su factorial"));
    let resultado = 1;
    for(let i = 1; i <= numFactorial; i++){
        resultado *= i;
    }
    let contenedor = document.getElementById("ej07-08");
    contenedor.innerHTML = "<h3>Ejercicio 8: Factorial de "+numFactorial+" --> "+resultado;
}

/* 9. Crea un script para que al accionar un botón, solicite insertar el nombre de una ciudad.
 * Muestra en una ventana, la elección múltiple de 3 ciudades con switch.
 * Tienes que declarar las siguientes ciudades (Zaragoza, Barcelona, Madrid) y que cada una tenga su propio mensaje. */
function ejercicio09(){
    let ciudad = prompt("Introduce una ciudad");
    switch (ciudad.toLowerCase()){
        case 'zaragoza':
            alert("Zaragoza, la ciudad del cierzo");
            break;
        case 'barcelona':
            alert("Barcelona, la ciudad del arte");
            break;
        case 'madrid':
            alert("Madrid, la capital de España");
            break;
        default:
            alert("Ese pais no está en la lista");
            break;
    }
}