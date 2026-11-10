/**
 * Captura el valor escrito en el <input> usando document.getElementById('listaNombres').value.
 * Utiliza un método del objeto String para convertir ese texto separado por comas en un Array real.
 * Crea una variable html = "<ul>";.
 * Utiliza un bucle for...of para recorrer el array.En cada vuelta, concatena a la variable html el nombre rodeado por etiquetas <li>.
 * Cierra la lista añadiendo "</ul>" a tu variable html.
 * Inyecta todo ese código HTML resultante dentro del <div> usando .innerHTML.*/

function generarLista(){
    let nombresArray = document.getElementById('listaNombres').value;
    let nombresSeparados = nombresArray.split(",");
    let html = "<ul>";

    for(let n of nombresSeparados){
        html += "<li>"+n+"</li>";
    }

    html += "</ul>";

    document.getElementById('resultado').innerHTML = html;
}

/**
 * La barrera (while o do-while): Nada más pulsar el botón, lanza un prompt() pidiendo la clave del sistema.
 * El código debe atrapar al usuario en un bucle continuo hasta que escriba exactamente la palabra "admin". Si acierta, el código sigue.
 *
 * Captura y Array: Extrae el texto del <input> y conviértelo en un array separándolo por comas.
 *
 * El imparable (forEach): Declara dos arrays vacíos (textos y numeros).
 * Recorre el array extraído utilizando únicamente .forEach().
 * En cada iteración, usa isNaN() para decidir si el elemento va al array de textos o al de numeros.
 *
 * El moderno (for...of): Crea una variable htmlFinal = "<h3>Nombres Registrados</h3><ul>";.
 * Recorre el array de textos utilizando exclusivamente for...of.
 * En cada vuelta, pasa el nombre a MAYÚSCULAS y añádelo como un <li> a tu variable HTML. Cierra el </ul> al terminar.
 * Inyección DOM: Finalmente, mete todo ese htmlFinal dentro del div con id*/

function ejecutarAuditoria(){

    let codigo = "";

    do{
        codigo = prompt("Introduce el codigo secreto").toLowerCase();
    } while(codigo !== 'admin');

    let datosArray = document.getElementById('registroDatos').value;
    let datosSeparados = datosArray.split(',');
    let textos = [];
    let numeros = [];

    datosSeparados.forEach(dato => {
        let datoLimpio = dato.trim();
        (isNaN(datoLimpio)) ? textos.push(datoLimpio) : numeros.push(datoLimpio);
    });

    let hmtlFinal = "<h3>Nombres Registrados</h3><ul>";
    for(let dato of textos){
        hmtlFinal += `<li>${dato.toUpperCase()}</li>`;
    }

    hmtlFinal += "</ul>";


    document.getElementById('panelResultado').innerHTML = hmtlFinal;
}