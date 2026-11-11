/**
 * Contexto:
 * Debes programar la lógica JavaScript para gestionar un formulario de inscripción a un torneo deportivo.
 * Campos del formulario HTML:
 * - Nombre del Jugador (id="jugador")
 * - DNI del Jugador (id="dni")
 * - Fecha de Nacimiento (id="fechaNac")
 * - Fecha del Torneo (id="fechaTorneo")
 * 
 * Requisitos obligatorios que debe cumplir tu script:
 * 1. Persistencia al cargar (window.onload y localStorage):
 * - Al cargar la página, debes recuperar de localStorage el número total de jugadores menores de edad inscritos históricamente.
 * - Muestra este contador en el párrafo de estadísticas. Si no hay registros previos, el contador debe ser 0.
 * 2. Validación de Textos (Objeto String):
 * - El DNI debe tener exactamente 9 caracteres de longitud. Si no es así, lanza un mensaje de error y detén la ejecución.
 * - Si el DNI es válido, conviértelo automáticamente a mayúsculas antes de insertarlo en la tabla.
 * 3. Control de Fechas y Edades (Objeto Date):
 * - Compara la Fecha del Torneo con la fecha actual. No se puede inscribir a un torneo que ya ha pasado (la fecha del torneo debe ser igual o posterior al día de hoy).
 * - Calcula la edad exacta del jugador en el momento de la inscripción.
 * (Recuerda la trampa de calcular la edad: no basta con restar años, debes comprobar si el jugador ya ha cumplido años este año o no).
 * 4. Lógica Matemática y de Cuotas (Objeto Math y Number):
 * - La cuota base del torneo es de 50.00 €.
 * - Si el jugador es menor de edad (menos de 18 años), se le aplica un descuento del 15%.
 * - El importe final a pagar debe guardarse en una variable y mostrarse en la tabla redondeado exactamente a 2 decimales.
 * - Genera un Código de Inscripción aleatorio entre 1 y 500 (usando Math.random()).
 * 5. Manipulación de la Tabla (DOM Clásico):
 * - Utilizando exclusivamente los métodos nativos insertRow(-1) e insertCell(), añade una nueva fila al final de la tabla con los siguientes datos en orden: Código, Jugador, DNI (en mayúsculas), Edad y Cuota a Pagar.
 * 6. Actualización de Estadísticas:
 * - Si el jugador inscrito tiene menos de 18 años, incrementa el contador global, guárdalo en localStorage y actualiza el texto de estadísticas en pantalla.
 * Finalmente, vacía los campos del formulario.*/

let jugadoresMenores = 0
window.onload = function (){
    const guardado = localStorage.getItem("jugadoresMenores");
    if(guardado !== null){
        jugadoresMenores = parseInt(guardado);
    } else {
        jugadoresMenores = 0;
    }

    document.getElementById('infoEstadisticas').innerHTML="Menores de edad inscritos: "+jugadoresMenores;
}


function inscribirJugador(){
    let inputDNI = document.getElementById('dni').value.trim();
    let inputNombre = document.getElementById('jugador').value.trim();
    let inputFechaNacimiento = document.getElementById('fechaNac').value;
    let inputFechaTorneo = document.getElementById('fechaTorneo').value;
    let msjError = document.getElementById('mensajeError');

    function dniValido (dni){
        const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
        let letraDNI = dni.at(-1).toUpperCase();
        let indiceCalculado = dni.slice(0,8) % 23;

        return(letrasDNI[indiceCalculado] == letraDNI);
    }

    if(inputDNI.length !== 9 || inputDNI == ""){
        msjError.innerHTML = "El dni tiene que tener 9 caracteres";
        return;
    } else if(!dniValido(inputDNI)){
        msjError.innerHTML = "La letra del DNI es incorrecta";
        return;
    }else {
        msjError.innerHTML = "";
    }

    inputDNI = inputDNI.toUpperCase();


    if(inputFechaNacimiento == "" || inputFechaTorneo == ""){
        msjError.innerHTML = "Ambas fechas son obligatorias";
        return;
    }

    let fechaNacimiento = new Date(inputFechaNacimiento);
    let fechaTorneo = new Date(inputFechaTorneo);
    let hoy = new Date();

    fechaTorneo.setHours(0,0,0,0);
    hoy.setHours(0,0,0,0);
    fechaNacimiento.setHours(0,0,0,0);

    if(fechaTorneo < hoy){
        msjError.innerHTML = "No puede haber un torneo pasado";
        return;
    }

    let edad = hoy.getFullYear()-fechaNacimiento.getFullYear();
    let mes = hoy.getMonth()-fechaNacimiento.getMonth();

    // Si el mes actual es menor al de nacimiento, o es el mismo mes pero no ha llegado el día del cumpleaños:
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--; // Aún no ha cumplido años este año
    }

    // Validación extra por seguridad
    if(edad < 0){
        msjError.innerHTML = "La fecha de nacimiento no puede ser posterior a hoy.";
        return;
    }

    console.log("Edad exacta calculada: " + edad);
    console.log("Fecha torneo "+fechaTorneo);


    const cuotaBase = 50.00;
    let descuento = 1;
    let importeFinal = 0;
    if(edad < 18){
        jugadoresMenores++;
        localStorage.setItem("jugadoresMenores",jugadoresMenores);
        document.getElementById('infoEstadisticas').innerHTML = "Menores de edad inscritos: "+jugadoresMenores;
        descuento = 0.85;
    }

    importeFinal = cuotaBase*descuento;

    let codigoInscripcion = Math.floor((Math.random()*500)+1);


    let tabla = document.getElementById('cuerpoTabla');
    let nuevaFila = tabla.insertRow();
    let celdaCodigo = nuevaFila.insertCell(0);
    let celdaJugador = nuevaFila.insertCell(1);
    let celdaDNI = nuevaFila.insertCell(2);
    let celdaEdad = nuevaFila.insertCell(3);
    let celdaCuota = nuevaFila.insertCell(4);

    celdaCodigo.innerHTML = codigoInscripcion;
    celdaJugador.innerHTML = inputNombre;
    celdaDNI.innerHTML = inputDNI;
    celdaEdad.innerHTML = edad;
    celdaCuota.innerHTML = importeFinal.toFixed(2);

}

function borrarHistorial () {
    document.getElementById('cuerpoTabla').innerHTML = "";
    jugadoresMenores = 0;
    document.getElementById('infoEstadisticas').innerHTML = "Menores de edad inscritos 0";
    localStorage.removeItem("jugadoresMenores");
    document.getElementById('formTorneo').reset();
}