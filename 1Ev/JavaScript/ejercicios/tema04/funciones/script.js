/**
 * Cree un script que permita realizar el cálculo de la nomina. La función debe recibir
 * como parámetro el salario bruto anual, la retención a aplicar y el número de pagas.
 * El resultado devuelto por la función será el salario neto mensual.
 * JavaScript permite que el número de argumentos pasado a una función sea diferente al
 * que se declara en dicha función.
 * ======================================================================================
 * <body>
 *      <p id="demo1"></p>
 * </body>
 * ======================================================================================
 * let x = nomina(15000,18,14);
 * document.getElementById('demo1').innerHTML = x;
 * function nomina(salarioBruto, retencion, numeroPagas) {
 * let salarioNeto= salarioBruto * (1- (retencion/100)) / numeroPagas
 * return salarioNeto;}
 * ======================================================================================*/
let x = nomina(15000,18,14);
document.getElementById('demo1').innerHTML = x;
function nomina(salarioBruto, retencion, numeroPagas) {
let salarioNeto= salarioBruto * (1- (retencion/100)) / numeroPagas
return salarioNeto;}

/**
 * Ejercicio 2: Crea un script con una función y pásale dos argumentos a y b. Comprueba
 * que si b no es un número, lo convertimos en 0 y haremos la suma de a y b. Comprobar
 * resultados.
 *
 * console.log(funcion(2,3));console.log(funcion(2));*
 * Pero JavaScript nos da una opción más interesante para este tipo de situaciones con el
 * operador OR ( || ). Cuando hacemos (foo || bar) el operador OR evalúa si foo es true o
 * cualquier otro valor transformable en true. En ese caso se devuelve el valor de foo.*
**/

function sumaRara(a,b){
    if(isNaN(b)){
        b = 0;
    }
    return a+b;
};

let prueba1 = sumaRara(2,3);
document.getElementById("ej02").textContent = prueba1;

/**
 * Ejercicio: Aplica al enunciado anterior la siguiente solución, mucho más elegante:
 * b || (b = 0);
 * Así el parámetro no se sobrescribe de no ser necesario */
function sumaBien (a,b){
    b = Number(b) || 0;

    return a+b;
}

prueba1 = sumaBien(1,"asd");
document.getElementById("ej03").innerHTML = prueba1;

/**
 * Ejercicio: Imaginemos que queremos calcular la media de dos cadenas de números. La
 * primera con 3 y la segunda con 6 números. Para ello usa una función de JavaScript.
 * Ayuda:
 * console.log("la media es "+media(5,6,7));
 * console.log("la media es "+media(5,6,7,7,10,12));*/
function media (){
    let suma = 0;
    for (let i = 0; i < arguments.length; i++){
        suma+=arguments[i];
    }

    return suma/arguments.length;
}

prueba1 = media(1,2,3,4,5);
document.getElementById("ej04").innerHTML = prueba1;