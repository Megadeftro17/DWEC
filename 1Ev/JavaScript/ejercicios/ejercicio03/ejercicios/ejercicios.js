/**
 * 1. Crea un script que mediante un botón que vaya a la pantalla anterior de navegación.
 */
function ejercicio1(){
    window.history.back();
}

/**
 * 2. Crear un script que accionado mediante un enlace, abra un pop-up con una página web
 */
function ejercicio2() {
    let ancho = 400;
    let alto = 300;
    // Ampliación: centrar el popup empleando screen.width y screen.height[cite: 22]
    let left = (screen.width / 2) - (ancho / 2);
    let top = (screen.height / 2) - (alto / 2);
    let miPopup = window.open("about:blank", "Popup",`width=${ancho},height=${alto},top=${top},left=${left}`);
    miPopup.document.write("<h2>Pop up abierto</h2>");
}

/**
 * 3. Crea un script que recorra un bucle desde el 1 hasta el 500.
 * Por pantalla solo mostraremos los múltiplos de 3 y el número de números que no son primos
 */
function ejercicio3(){
    let multiplos = [];
    let noPrimos = 0;
    let contenedor = document.getElementById("resultado");

    for (let i = 1; i <= 500; i++){
        if(i % 3 == 0 ) multiplos.push(i);

        let esPrimo = true;
        if(i < 2 ) esPrimo = false;

        for(let j = 2; j <i; j++){
            if(i % j == 0) {
                esPrimo = false;
            }
        }
        if(!esPrimo) noPrimos++;
    }

    contenedor.innerHTML = "Multiplos de 3: "+multiplos+"<br/>"+"Total numeros no primos: "+noPrimos;
}

/**
 * 4. Haz un script para mostrar por pantalla el número menor y mayor. Para ello,
 * se introducirán en el código 10 números enteros dentro de un array y se comprobarán cada una de las posiciones.
 * Ampliación: realizar la misma operación introduciendo por teclado 10 números.
 */
function ejercicio4() {
    let entrada = prompt("Introduce una cadena de numeros (1 2 32 56...)");
    let arraySinEspacios = entrada.split(" ");
    let numeros = [];

    // Pasar de caracteres a numeros
    for (let i = 0; i < arraySinEspacios.length; i++) {
        numeros.push(parseInt(arraySinEspacios[i]));
    }

    let mayor = numeros[0];
    let menor = numeros[0];

    // Comprobar si es mayor o menor
    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] > mayor){
            mayor = numeros[i];
        } else if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }

    let contenedor = document.getElementById("resultado");
    contenedor.innerHTML = "Numeros: " + numeros.join(", ") + "<br/>" + "Numero mayor: " + mayor + "<br/>" + "Numero menor: " + menor;
}

/**
 * 5. Crea un script que permita identificar la talla de una prenda de ropa, a partir de las tallas europeas.
 * Los valores de la tallas europeas son: XXL, XL,L,M,S, XS, XXS.
 * La talla esperada sería: Grande, Mediana y Pequeña.
 * Introducir valor por teclado y sacar resultado por pantalla.
 * Ayuda:
 * Grande: {XXL,XL,L}; Mediana:{M}; Pequeña: {S, XS, XXS}
 */
function ejercicio5() {
    let talla = prompt("Introduce la talla europea (XXL, XL, L, M, S, XS, XXS):").toUpperCase();
    let resultado = "";
    if (["XXL", "XL", "L"].includes(talla)) resultado = "Grande";
    else if (talla === "M") resultado = "Mediana";
    else if (["S", "XS", "XXS"].includes(talla)) resultado = "Pequeña";
    else resultado = "TALLA NO ENCONTRADA";

    document.getElementById("resultado").innerHTML = "La talla introducida es: " + talla + " --> Talla esperada: " + resultado;
}

/**
 * 6. Calcular la longitud (L) de la circunferencia, dado su radio empleando objetos propios de Javascript.
 * Ayuda: L=2*π*radio
 */
function ejercicio6(){
    let r = parseFloat(prompt("Introduce el radio de la circunferencia"));
    let L = 2*Math.PI*r;

    document.getElementById("resultado").innerHTML = "Radio: "+r+"<br>Longitud: "+L;
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
function ejercicio7(){
    let numeros= [];
    let estrellas = [];

    while(numeros.length < 5){
        let num1 = Math.ceil(Math.random()*50);
        if(!numeros.includes(num1)) numeros.push(num1);
    }

    while(estrellas < 2){
        let num2 = Math.ceil(Math.random()*10);
        if(!estrellas.includes(num2)) estrellas.push(num2);
    }

    document.getElementById("resultado").innerHTML = `Números: ${numeros.join(", ")} <br>Estrellas: ${estrellas.join(", ")}`;
}

/**
 *  Introduce el tamaño de una matriz, indicando número de filas (x) y número de columnas  (y).
 * Crea  los  bucles  necesarios  para  poder  mostrar  por  pantalla  aquellas posiciones que contengan ambas coordenadas.
 * Ejemplo: Matriz 5x3. Solución: (5,1) (5,2).....(1,3)...(5,3)
 */
function ejercicio8(){
    let filas = parseInt(prompt("Introduce el numero de filas x"));
    let columnas = parseInt(prompt("Introduce el numero de columnas y"));
    let coordenadas = [];

    for(let x = 1; x <= filas; x++){
        for(let y = 1; y <= columnas; y++){
            coordenadas.push("("+x+","+y+")");
        }
    }

    document.getElementById("resultado").innerHTML = "Filas: "+filas+"<br>Columnas: "+columnas+"<br>Coordenadas"+coordenadas.join(",");
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