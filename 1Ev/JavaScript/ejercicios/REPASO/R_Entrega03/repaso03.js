function printMsg(mensaje){
    document.getElementById("resultado").innerHTML = mensaje;
}


/**
 * 1. Crea un script que mediante un botón que vaya a la pantalla anterior de navegación.
 */
function ejercicio01(){
    window.history.back();
}


/**
 * 2. Crear un script que accionado mediante un enlace, abra un pop-up con una página web
 */
function ejercicio02(){
    // WINDOW SIZE
    let width = 300;
    let height = 400;
    //let left = (screen.width / 2) - (width / 2);
    //let top = (screen.width / 2) - (height / 2);

    let myPopUp = window.open("about:blank","Popup",`width=${width},height=${height}`);
    myPopUp.document.writeln("<h2>Pop up newwww</h2>");
}


/**
 * 3. Crea un script que recorra un bucle desde el 1 hasta el 500.
 * Por pantalla solo mostraremos los múltiplos de 3 y el número de números que no son primos
 */
function ejercicio03(){
    let mults3 = [];
    let notPrime = 0;

    for(let i = 1; i <= 500; i++){
        if(i % 3 == 0) mults3.push(i);

        let prime = true;
        if(i < 2) prime = false;

        for(let j = 2; j < i; j++){
            if(i % j == 0) prime = false;
        }
        if(!prime) notPrime++;
    }
    printMsg("Multiples of 3: "+mults3+"<br>Not prime's numbers: "+notPrime);
}


/**
 * 4. Haz un script para mostrar por pantalla el número menor y mayor. Para ello,
 * se introducirán en el código 10 números enteros dentro de un array y se comprobarán cada una de las posiciones.
 * Ampliación: realizar la misma operación introduciendo por teclado 10 números.
 */
function ejercicio04(){
    let numbers = prompt("Type 10 numbers separated by blanks (1 41 90...)"); // String
    let arrayBlanks = numbers.split(" "); // Array(string)
    let arrayToNumbers = []; // Array(int)

    for(let i = 0; i < arrayBlanks.length; i++){
        arrayToNumbers.push(parseInt(arrayBlanks[i])); // Array(int)
    }

    let min = arrayToNumbers[0];
    let max = arrayToNumbers[0];
    for(let i = 0; i < arrayToNumbers.length; i++){

        if(arrayToNumbers[i] <= min) min = arrayToNumbers[i];
        if(arrayToNumbers[i] >= max) max = arrayToNumbers[i];
    }

    printMsg(numbers+"<br>Max number: "+max+"<br>Min number: "+min);
}


/**
 * 5. Crea un script que permita identificar la talla de una prenda de ropa, a partir de las tallas europeas.
 * Los valores de la tallas europeas son: XXL, XL,L,M,S, XS, XXS.
 * La talla esperada sería: Grande, Mediana y Pequeña.
 * Introducir valor por teclado y sacar resultado por pantalla.
 * Ayuda:
 * Grande: {XXL,XL,L}; Mediana:{M}; Pequeña: {S, XS, XXS}
 */
function ejercicio05(){
    let userSize = prompt("Type ur european clothe's size (XXS,XS,S,M,L,XL,XXL)").trim().toUpperCase();
    let result = "";
    if(["S","XXS","XS"].includes(userSize)) result = "Small";
    if(["M"].includes(userSize)) result = "Medium";
    if(["L","XL","XXL"].includes(userSize)) result = "Big";
    else result = "Error size";

    printMsg("Your typed size was: "+userSize+", result: "+result);
}


/**
 * 6. Calcular la longitud (L) de la circunferencia, dado su radio empleando objetos propios de Javascript.
 * Ayuda: L=2*π*radio
 */
function ejercicio06(){
    let r = parseFloat(prompt("Type the radius"));
    let l = 2*Math.PI*r;

    printMsg("R: "+r+"<br>L: "+l.toFixed(3));
}


/**
 * La  administración  general  de  loterías  europea,  nos  ha  encomendado  generar
 * un script para rellenar la puesta de EUROMILLONES de forma aleatoria.
 * Nota:
 * * Calcular de 5 números de 1 al 50
 * * Calcular 2 estrellas del 1 al 10
 * Ayuda:
 * * Math.random(). Genera un número aleatorio entre 0 y 1.
 * Math.ceil(). Redondea al siguiente número entero.
 * Math.round(). Redondea al número entero más próximo. Ej.: 5,4 =5 ó 5,6=6 ó 5,5=6
 * Método array.push(). Añadir un nuevo elemento al array y devolver su nuevo tamaño.
 */
function ejercicio07(){
    let numbers = [];
    let stars = [];

    while(numbers.length < 5){
        let num1 = Math.ceil(Math.random()*50);
        if(!numbers.includes(num1)) numbers.push(num1);
    }

    while(stars.length < 2){
        let num2 = Math.ceil(Math.random()*10);
        if(!stars.includes(num2)) stars.push(num2);
    }

    printMsg("Numbers: "+numbers+"<br>Stars: "+stars);
}


/**
 *  Introduce el tamaño de una matriz, indicando número de filas (x) y número de columnas  (y).
 * Crea  los  bucles  necesarios  para  poder  mostrar  por  pantalla  aquellas posiciones que contengan ambas coordenadas.
 * Ejemplo: Matriz 5x3. Solución: (5,1) (5,2).....(1,3)...(5,3)
 */
function ejercicio08(){
    let row = parseInt(prompt("Type the numbers of rows"));
    let col = parseInt(prompt("Type the numbers of columns"));
    let positions = [];

    for(let i = 0 ; i <= row; i++){
        for(let j = 0; j <= col; j++){
            positions.push("("+i+","+j+")")
        }
    }

    printMsg("ROWS: "+row+"<br>COLS: "+col+"<br>"+positions);
}


/**
 * 10. Crea un script para insertar texto y poder seguir leyendo una noticia.
 */
function ejercicio10(){
    document.getElementById("demo1").innerHTML = "...centro, para que a  cualquier perso na de nuestra comunidad educativa le resulte mas accesible realizar su donacion de sangre." + 
        "<br>La siguiente donacion sera:" +
        "<br>Fecha: Martes 3 de octubre." +
        "<br>Lugar: Biblioteca del IES" +
        "<br>Horario: de 9:30 a 13:00 horas" +
        "<br>Recordad que TODOS EN CUALQUIER MOMENTO PODEMOS NECESITAR SANGRE";
}