/*
 * Crea una aplicación Web que mediante JavaScript calcule la nota de la primera evaluación de la asignatura de Desarrollo Web Entorno Cliente.
 * Crea dos variables: NotaProyecto y NotaExamen que se introducirán por teclado.
 * Sacar por pantalla la media resultante y su calificación. Contemplar cada uno de los siguientes casos:
 * - NotaProyecto o NotaExamen es menor de 4,5. Calificación: Suspenso.
 * - NotaProyecto y NotaExamen es mayor o igual de 4,5, pero la media resultante inferior a 5. Calificación: Suspenso.
 * - NotaProyecto y NotaExamen es mayor o igual de 4,5 y la media resultante entre 5 y menor de 7. Calificacion: Aprobado.
 * - NotaProyecto y NotaExamen es mayor o igual de 4,5 y la media entre 7 y menor de 9. Calificacion: Notable.
 * - NotaProyecto y NotaExamen es mayor o igual de 4,5 y la media mayor o igual que 9. Calificación: Sobresaliente.
 * Recordar que las notas de proyecto y de examen van desde 0 a 10 (ambos incluidos)*/
function ejercicio01() {
    console.log("##################### Ejercicio 1 #####################");
    // Variables
    let notaProyecto = parseFloat(prompt("Introduce la nota del proyecto"));
    let notaExamen = parseFloat(prompt("Introduce la nota del examen"));

    if (notaExamen < 0 || notaProyecto < 0) {
        alert("No puede haber una nota negativa");
    } else if (notaExamen > 10 || notaProyecto > 10) {
        alert("No puede haber una nota mayor que 10");
    } else {
        let notaMedia = (notaExamen + notaProyecto) / 2;

        if (notaExamen < 4.5 || notaProyecto < 4.5) {
            console.log("Suspenso");
        } else if (notaMedia < 5) {
            console.log("Suspenso");
        } else if (notaMedia < 7) {
            console.log("Aprobado");
        } else if (notaMedia < 9) {
            console.log("Notable");
        } else {
            console.log("Sobresaliente");
        }
    }
}

/*************************************************************************************************************************************/
/* Realiza una aplicación Web, que mediante JavaScript verifique el DNI. Se solicitará dos entradas al usuario.
 * - Número de DNI
 * - Letra de DNI
 * Se mostrará por pantalla si el DNI es correcto o incorrecto (Numero y letra).
 * Se contemplarán las siguientes excepciones:
 * - Longitud del número incorrecta.
 * - Letra no introducida
 * - Carácter de la letra incorrecto.
 * Condiciones:
 * - El archivo de JavaScript se llamará dni.js y la aplicación Web se llamará CalculoDNI
 * - Tendrás que crearte un array llamado “abcedario” con las siguiente información:
 * ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']
 * - Número de DNI negativos y superiores a 99.999.999 no existen.
 * - Para el cálculo de la letra, emplea el módulo del total de posiciones del array.*/
function ejercicio02() {
    console.log("##################### Ejercicio 2 #####################");

    // Variables
    let numeroDNI = parseInt(prompt("Introduce tu numero del DNI"));
    let letraDNI = prompt("Introduce tu letra del DNI").toUpperCase();
    let abecedario = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];

    if(numeroDNI.length > 8 || numeroDNI.length < 0 || numeroDNI.length > 99999999){
        alert('Cantidad de numeros errónea');
    } else if (letraDNI.length == 0) {
        alert('Debes introducir una letra');
    } else if (!abecedario.includes(letraDNI)){
        alert('La letra introducida no existe');
    } else {
        // Posicion de la letra segun los numeros del DNI
        let posLetra = numeroDNI % abecedario.length;
        // Letra calculada a partir de la posicion de la letra calculada
        let letraCalculada = abecedario[posLetra];
        if(letraCalculada == letraDNI){
            console.log("Tu DNI \""+numeroDNI+letraDNI+"\" es correcto");
        } else {
            console.log("Tu DNI \""+numeroDNI+letraDNI+"\" NO es correcto");
        }
    }
}

/*************************************************************************************************************************************/
/* Empleando el fichero operaciones.js, realiza una aplicación Web que contenga la siguiente información:
 * Emplea los siguientes archivos para su resolución:
 * - La aplicación Web se llama “OperacionesBits”
 * - El fichero de Javascript se llama “Operaciones”
 * Condiciones:
 * - Utilizar los tres tipos de bucles que hay en JavaScript (un bucle diferente para cada número).
 * - No se puede borrar ninguna línea de código de los archivos.
 * - No se puede modificar los nombres de los archivos.
 * - Se escribe el código que se necesite debajo de cada comentario.*/
function ejercicio03() {
    console.log("##################### Ejercicio 3 #####################");
}