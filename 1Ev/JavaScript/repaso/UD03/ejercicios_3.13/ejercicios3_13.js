/**
 * Ejercicio: Crea un script que mediante un botón que vaya a la pantalla anterior de
 * navegación. Emplea windows.history.back()
 */
function ej01(){
    window.history.back();
}

/**
 * Ejercicio: Crear un script que accionado mediante un enlace, abra un pop-up con una
 * página web.
 * Ayuda: window.open("url", "nombre de la ventana", “tamaño”, “true/false”)
 * No son obligatorios cada uno de los valores.
 */

/**
 * Ampliar: centrar el popup en la pantalla y abrir una nueva página web.
 * Ayuda:
 * screen.width
 * screen.heigh
 */
function ej02 () {
    let ancho = 800;
    let alto = 600;
    let centroIzquierda = (screen.width-ancho)/2;
    let centroArriba = (screen.height-alto)/2;

    let tamanyo = `width=${ancho},height=${alto},left=${centroIzquierda},top=${centroArriba}`;
    window.open("about:blank","MI_POPUP",tamanyo);
}

/**
 * Ejercicio: Crea un script que recorra un bucle desde el 1 hasta el 500.
 * Por pantalla solo mostraremos los múltiplos de 3 y el número de números que no son primos
 */
function ej03(){
    let numerosValidos = [];

    function esPrimo(numero){
        if(numero <= 1) return false;

        for (let i = 2; i < numero;i++){
            if(numero % i == 0){
                return false;
            }
        }
        return true;
    }

    for(let i = 1; i <= 500; i++){
        if(i % 3 == 0 && !esPrimo(i)){
            numerosValidos.push(i);
        }
    }

    document.getElementById('resultado').innerHTML = numerosValidos;
}

/**
 * Ejercicio: Haz un script para mostrar por pantalla el número menor y mayor. Para ello,
 * se introducirán en el código 10 números enteros dentro de un array y se comprobarán
 * cada una de las posiciones.
 * Ampliación: realizar la misma operación introduciendo por teclado 10 números.
 */
function ej04 () {
    let numeros = document.forms['formularioEj04']['numerosEntrada'].value;
    let numerosSeparados = numeros.split(",");
    let numerosLimpios = [];

    for(let numero of numerosSeparados){
        let num = parseInt(numero.trim());

        if(!isNaN(num)){
            numerosLimpios.push(num);
        }
    }

    if(numerosLimpios.length === 0){
        document.getElementById('resultado').innerHTML = "<p>ERROR</p>";
        return;
    }

    let numMayor = numerosLimpios[0];
    let numMenor = numerosLimpios[0];
    for(let i = 0; i < numerosLimpios.length; i++){
        if(numMayor < numerosLimpios[i]) numMayor = numerosLimpios[i];
        if(numMenor > numerosLimpios[i]) numMenor = numerosLimpios[i];
    }

    document.getElementById('resultado').innerHTML = "<h3>Numero Mayor: "+numMayor+"</h3><h3>Numero Menor: "+numMenor;

}

document.getElementById('ej04').onclick = ej04;

/**
 * Ejercicio: Crea un script que permita identificar la talla de una prenda de ropa, a partir
 * de las tallas europeas. Los valores de la tallas europeas son: XXL, XL,L,M,S, XS, XXS.
 * La talla esperada sería: Grande, Mediana y Pequeña.
 * Introducir valor por teclado y sacar resultado por pantalla.
 */
function ej05(){
    let msj = document.getElementById('resultado');
    let talla = prompt("Introduce tu talla (XXS,XS,S,M,L,XL,XXL");

    if(!talla) return;

    talla = talla.toUpperCase().trim();

    if(['XS','S','XXS'].includes(talla)){
        msj.innerHTML = "Talla(Pequeña): "+talla;
    } else if(['M'].includes(talla)){
        msj.innerHTML = "Talla(mediana): "+talla;
    } else if(['XXL','XL','L'].includes(talla)){
        msj.innerHTML = "Talla(grande): "+talla;
    } else {
        msj.innerHTML = "La talla "+talla+" no existe";
    }
}

/**
 * Ejercicio: Calcular la longitud (L) de la circunferencia, dado su radio empleando objetos
 * propios de Javascript.
 * Ayuda: L=2*π*radio.
 */
function ej06 () {
    let msj = document.getElementById('resultado');
    let radio = parseFloat(prompt("Introduce un radio"));
    let resultado = (2*Math.PI*radio).toFixed(2);

    msj.innerHTML = resultado;
}

/**
 * Ejercicio: La administración general de loterías europea, nos ha encomendado generar
 * un script para rellenar la puesta de EUROMILLONES de forma aleatoria.
 * Nota:
 * - Calcular de 5 números de 1 al 50
 * - Calcular 2 estrellas del 1 al 10
 * Ayuda:
 * - Math.random(). Genera un número aleatorio entre 0 y 1.
 * - Math.ceil(). Redondea al siguiente número entero.
 * - Math.round(). Redondea al número entero más próximo. Ej.: 5,4 =5 ó 5,6=6 ó 5,5=6
 * - Método array.push(). Añadir un nuevo elemento al array y devolver su nuevo tamaño.
 */
function ej07 () {
    let msj = document.getElementById('resultado');
    let numeros = [];
    let estrellas = [];

    while(numeros.length < 5){
        let randomNum = Math.ceil(Math.random()*50);
        if(!numeros.includes(randomNum)){
            numeros.push(randomNum);
        }
    }

    while(estrellas.length < 2){
        let randomEstrella = Math.round((Math.random()*9)+1);
        if(!estrellas.includes(randomEstrella)){
            estrellas.push(randomEstrella);
        }
    }

    msj.innerHTML = "Numeros: "+numeros+"<br>Estrellas: "+estrellas;
}

/**
 * Ejercicio: Introduce el tamaño de una matriz, indicando número de filas (x) y número de
 * columnas (y). Crea los bucles necesarios para poder mostrar por pantalla aquellas
 * posiciones que contengan ambas coordenadas.
 * Ejemplo: Matriz 5x3. Solución: (5,1) (5,2)…..(1,3)…(5,3)
 */
function ej08 () {
    let filas = parseInt(prompt("Introduce las filas de la matriz"));
    let columnas = parseInt(prompt("Introduce las columnas de la matriz"));
    let msj = document.getElementById('resultado');
    let contenido = "";

    if(!filas && !columnas) return;

    for(let i = 0; i <= filas; i++){
        for(let j = 0; j <= columnas; j++){
            contenido += "("+i+","+j+")";
        }
        contenido += "<br>";
    }

    msj.innerHTML = contenido;
}
