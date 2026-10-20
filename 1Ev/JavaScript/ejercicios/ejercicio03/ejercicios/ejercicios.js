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
 * Grande: {XXL,XL,L}; Mediana:{S}; Pequeña: {S, XS, XXS}
 */
function ejercicio5(){
    let talla = prompt("Introduce tu talla europea (XXL, XL, L, M, S, XS, XXS)");
    let resultado = "";
    if(talla.includes["XXL","XL","L"]) resultado = "Grande";


    z
}