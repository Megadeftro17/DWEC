function imprimir(mensaje){
    let documento = document.getElementById("resultado").innerHTML = mensaje;
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
    let width = 400;
    let height = 400;

    let myPopup = window.open("about:blank","Popup",`width=${width},height=${height}`);
}


/**
 * 3. Crea un script que recorra un bucle desde el 1 hasta el 500.
 * Por pantalla solo mostraremos los múltiplos de 3 y el número de números que no son primos
 */
function ejercicio03(){
    let notPrime = 0;
    let mults3 = [];
    for(let i = 1; i <= 500; i++){
        if(i % 3 == 0) mults3.push(i);

        let prime = true;
        if(i < 2) prime = false;

        for(let j = 2; j < i; j++){
            if(i % j == 0) prime = false;
        }
        if(!prime) notPrime++;
    }
    imprimir("Multiplos de 3: "+mults3+"<br>No primos: "+notPrime);

}


/**
 * 4. Haz un script para mostrar por pantalla el número menor y mayor. Para ello,
 * se introducirán en el código 10 números enteros dentro de un array y se comprobarán cada una de las posiciones.
 * Ampliación: realizar la misma operación introduciendo por teclado 10 números.
 */
function ejercicio04(){
    let intro = prompt("Introduce una cadena de numeros (1 32 65 21 2)");
    let arraySinEspacios = intro.split(" ");
    let arrayToInt = [];

    for(let i = 0; i < arraySinEspacios.length; i++){
        arrayToInt.push(parseInt(arraySinEspacios[i]));
    }

    let mayor = arrayToInt[0];
    let menor = arrayToInt[0];

    for(let i = 0; i < arrayToInt.length; i++){
        if(arrayToInt[i] > mayor) mayor = arrayToInt[i];
        if(arrayToInt[i] < menor) menor = arrayToInt[i];
    }

    imprimir("Mayor: "+mayor+"<br>Menor: "+menor);
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
    let talla = prompt("Escribe tu taya (XXS,XS,S,M,L,XL,XXL)").toUpperCase().trim();
    let resultado = "";
    if(["S","XS","XXS"].includes(talla)) resultado="Pequeña" ;
    if(["M"].includes(talla)) resultado="Mediana" ;
    if(["XXL","XL","L"].includes(talla)) resultado="Grande" ;

    imprimir("Talla: "+talla+": "+resultado);
}



/**
 * 6. Calcular la longitud (L) de la circunferencia, dado su radio empleando objetos propios de Javascript.
 * Ayuda: L=2*π*radio
 */
function ejercicio06(){
    let radio = parseFloat(prompt("Introduce el radio"));
    let resultado = 2*Math.PI*radio;

    imprimir("L = 2 * PI * r: "+resultado);
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
    let numeros = [];
    let estrellas = [];

    while(numeros.length < 5){
        let num1 = Math.ceil(Math.random()*50);
        if(!numeros.includes(num1)) numeros.push(num1);
    }

    while(estrellas.length < 2){
        let estrella = Math.ceil(Math.random()*10);
        if(!estrellas.includes(estrella)) estrellas.push(estrella);
    }

    imprimir("Numeros: "+numeros+"<br>Estrellas: "+estrellas);
}


/**
 * 8. Introduce el tamaño de una matriz, indicando número de filas (x) y número de columnas  (y).
 * Crea  los  bucles  necesarios  para  poder  mostrar  por  pantalla  aquellas posiciones que contengan ambas coordenadas.
 * Ejemplo: Matriz 5x3. Solución: (5,1) (5,2).....(1,3)...(5,3)
 */
function ejercicio08(){
    let x = parseInt(prompt("Introduce el numero de filas"));
    let y = parseInt(prompt("Introduce el numero de columnas"));

    let resultado = "";

    for(let i = 0; i <= x; i++){
        for(let j = 0; j<= y; j++){
            resultado +=" ("+i+","+j+") ";
        }
        resultado += "<br><br>";
    }

    imprimir(resultado);
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