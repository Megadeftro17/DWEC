/**
 * 1. Crea una aplicación que solicitar el nombre al usuario y lo guardará en una variable denominada nombre.
 * Solicitar el primer apellido al usuario y lo guardará n una variable denominada apellido.
 * Almacenaremos en una nueva variable denominada fullName, el nombre y primer apellido registrado separados por un espacio.
 * Solicitar la edad al usuario y lo guardas en una variable denominada edad.
 * Calcular y asignar a una nueva variable Nacimiento, el año de nacimiento del usuario (sin tener en cuenta el mes de nacimiento.
 * Mostrar en el cuadro de resultados del editor la siguiente información (una en cada línea):
 *  - Nombre completo: (valor de la variable fullName)
 *  - Año de nacimiento: (valor de la variable year) */
function ejercicio01(){
    let nombre = prompt("Introduce tu nombre").trim();
    let apellido = prompt("Introduce tu apellido").trim();
    let fullName = nombre+" "+apellido;
    let edad = parseInt(prompt("Introduce tu edad"));
    let year = new Date().getFullYear() - edad;
    console.log("###################### 1 ################################");
    console.log("Nombre completo: "+fullName);
    console.log("Año de nacimiento: "+year);
}

/*************************************************************************************************************************************/
/* 2. Calcula el exponencial de cualquier número */
function ejercicio02(){
    let base = parseInt(prompt("Introduce la base"));
    let exponente = parseInt(prompt("Introduce su exponente"));
    let resultado = Math.pow(base,exponente);

    console.log("###################### 2 ################################");
    console.log("Resultado: "+resultado);
}

/*************************************************************************************************************************************/
/* 3. Crea un script para calcular números pares e impares. Los números se introducen por teclado y emplear el módulo %. */
function ejercicio03(){
    let intro = parseInt(prompt("Introduce un numero para saber sus pares e impares"));
    let pares = [];
    let impares = [];

    for(let i = 0; i <= intro; i++){
        (i % 2 == 0) ? pares.push(i) : impares.push(i) ;
    }

    console.log("###################### 3 ######################");
    console.log("Pares: "+pares+"\nImpares: "+impares);
}

/*************************************************************************************************************************************/
/* 4. Detectar si un número es múltiplo de otro número. */
function ejercicio04(){
    let intro = parseInt(prompt("Introduce un numero"));
    let intro2 = parseInt(prompt("Introduce otro numero para saber si es multiplo"));

    console.log("###################### 4 ######################");
    (intro%intro2 == 0) ? console.log(intro2+" es multiplo de "+intro) : console.log(intro2+" no es multiplo de "+intro);
}

/*************************************************************************************************************************************/
/* 5. Crea un Array que almacene los 12 meses del año y muestra cada mes empleando un for */
function ejercicio05(){
    let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

    console.log("###################### 5 ######################");
    for(let i = 0; i < meses.length; i++){
        console.log(meses[i]);
    }
}

/*************************************************************************************************************************************/
/* 6. Compara dos números enteros para saber cual es mayor. Además comprueba si son positivos */
function ejercicio06(){
    let num1 = parseInt(prompt("Introduce un numero"));
    let num2 = parseInt(prompt("Introduce otro numero"));

    console.log("###################### 6 ######################");
    if(num1 || num2 < 0) console.log("UN NUMERO O VARIOS SON NEGATIVOS");

    (num1 < num2) ? console.log(num1+" es menor que "+num2) : console.log(num1+" es mayor que "+num2) ;
}

/*************************************************************************************************************************************/
/* 7. Muestra en el documento HTML los 30 primeros números */
function ejercicio07(){
    let documentoHTML = document.getElementById("ej07-08");
    let numeros = []
    for(let i = 1; i <= 30; i++){
        numeros.push(i);
    }

    documentoHTML.innerHTML = numeros;
}

/*************************************************************************************************************************************/
/* 8. Muestra en el documento HTML el factorial de un número que se inserta por teclado. Declara dos variables: para el número y para el resultado. Emplea un for. */
function ejercicio08(){
    let numero = parseInt(prompt("Introduce un numero para su factorial"));
    let resultado = 1;
    let documentoHTML = document.getElementById("ej07-08");

    for(let i = 1; i <= numero; i++){
        resultado *= i;
    }

    documentoHTML.innerHTML = "Factorial de "+numero+": "+resultado;

}

/*************************************************************************************************************************************/
/* 9. Crea un script para que al accionar un botón, solicite insertar el nombre de una ciudad.
 * Muestra en una ventana, la elección múltiple de 3 ciudades con switch.
 * Tienes que declarar las siguientes ciudades (Zaragoza, Barcelona, Madrid) y que cada una tenga su propio mensaje. */
function ejercicio09(){
    let ciudad = prompt("Introduce el nombre de una ciudad (Barcelona, Zaragoza, Madrid)")
    switch(ciudad.toLowerCase()) {
        case 'madrid':
            alert("La capital de españa");
            break;
        case 'barcelona':
            alert("Hablan catalán");
            break;
        case 'zaragoza':
            alert("La capital del cierzo");
            break;
        default:
            alert("No existe");
            break;
    }
}