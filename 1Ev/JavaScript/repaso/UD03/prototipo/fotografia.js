/**
 * Contexto:
 * Vas a programar la lógica JavaScript para registrar votos en un concurso de fotografía.
 * El sistema arranca con datos de un juez principal ya precargados en la memoria del navegador.
 * Requisitos obligatorios que debe cumplir tu script:
 * 1. Lectura Inmediata y Precarga (window.onload y localStorage):
 * - Al cargar la página, comprueba si existen en el localStorage las claves votos_totales y suma_puntuaciones. Si no existen, inicialízalas a 0.
 * - El Reto: El sistema también tiene guardada (o deberás simular que la tiene la primera vez) una clave llamada "juez_activo" con el valor "Dra. Martínez". Al cargar la ventana, debes mostrar en el <p id="datosPrecargados"> el mensaje: "Sesión iniciada por: Dra. Martínez".
 * 2. Validación de Múltiples Checkboxes (querySelectorAll o clases):
 * - El usuario debe marcar obligatoriamente los dos checkboxes legales (id="checkBases" e id="checkDatos").
 * - Comprueba ambos. Si alguno de los dos (o los dos) no está marcado, muestra el error "Debes aceptar ambos consentimientos legales" y detén la ejecución.
 * 3. Validación de Textos y Radio Buttons:
 * - El nombre del votante no puede estar vacío y debe superar los 4 caracteres. Conviértelo a mayúsculas y quítale los espacios extra (usando .trim()).
 * - Comprueba que haya seleccionado obligatoriamente una fotografía (los radio buttons name="foto"). Si no ha elegido ninguna, lanza un error.
 * 4. Lógica Matemática y Condicionales (El "Boost" de Puntuación):
 * - Lee la puntuación (debe estar entre 1 y 10).
 * - Modificador: Si el votante se llama exactamente "JUEZ SUPREMO" (sin importar si lo escribió en minúsculas originalmente, debes comprobarlo después del .toUpperCase()), su puntuación vale el doble. (Ej: si votó un 8, se convierte en un 16).
 * - Asegúrate de que la puntuación final sea procesada matemáticamente como un número (parseFloat).
 * 5. Inserción de Imágenes en la Tabla (El Gran Reto del DOM Clásico):
 * - Crea una nueva fila al final de la tabla usando insertRow(-1).
 * - En la celda 1: Nombre del votante.
 * - En la celda 2: No debes escribir el nombre de la foto (ej: "oso.jpg"). Debes crear una etiqueta de imagen dinámica usando innerHTML (ej: <img src="oso.jpg" class="miniatura" alt="Foto Votada">) para que se muestre la imagen real en la tabla. (Usa el value del radio button seleccionado para la ruta).
 * - En la celda 3: La puntuación final (con 1 decimal usando .toFixed(1)).
 * - En la celda 4: La fecha de hoy en formato DD/MM/YYYY (debes extraer día, mes y año del objeto Date y concatenarlos manualmente, cuidado con sumar +1 al mes).
 * 6. Actualización de Estadísticas:
 * - Incrementa en 1 el contador de votos_totales.
 * - Suma la "Puntuación Final" de este voto a la suma_puntuaciones global.
 * -Calcula la Puntuación Media Global (suma_puntuaciones / votos_totales).
 * - Guarda todo actualizado en localStorage, actualiza el texto de estadísticas en pantalla y limpia el formulario.*/

let votos_totales = 0;
let suma_puntuaciones = 0

localStorage.setItem("juez_activo","Dra. Martinez");

window.onload = function(){
    const juezActivo = localStorage.getItem("juez_activo");
    let parrafoSesion = document.querySelector('.info-precargada>p');

    if(juezActivo !== null){
        parrafoSesion.innerHTML = "Sesión iniciada por: "+juezActivo;
    } else {
        parrafoSesion.innerHTML = "Cargando datos de sesión...";
    }

    let votosGuardados = localStorage.getItem("votos_totales");
    if(votosGuardados !== null){
        votos_totales = parseInt(votos_totales);
    } else {
        votos_totales = 0;
    }

    let puntuacionesGuardadas = localStorage.getItem("suma_puntuaciones");
    if(puntuacionesGuardadas !== null){
        suma_puntuaciones = parseFloat(suma_puntuaciones);
    } else {
        suma_puntuaciones = 0;
    }

    document.getElementById('infoEstadisticas').innerHTML = "Total Votos Emitidos: "+votos_totales+" | Puntuación Media Global: "+suma_puntuaciones;
}

function actualizarEstadisticas(puntuacion){
    votos_totales++;
    localStorage.setItem("votos_totales",votos_totales);
    suma_puntuaciones += puntuacion;
    localStorage.setItem("suma_puntuaciones",suma_puntuaciones);
    let puntuacionMedia = suma_puntuaciones/votos_totales;
    localStorage.setItem("puntuacion_media",puntuacionMedia);

    document.getElementById('infoEstadisticas').innerHTML = "Total Votos Emitidos: "+votos_totales+" | Puntuacion Media Global: "+puntuacionMedia;
}


function registrarVoto(){
    let inputNombreVotante = document.getElementById('nombreVotante').value.trim();
    let inputVotoFoto = document.querySelector('input[type="radio"]:checked');
    let inputPuntuacion = document.getElementById('puntuacion').value;

    let inputCheck = document.querySelectorAll('.legal-check');
    let inputBases = inputCheck[0].checked;
    let inputDatos = inputCheck[1].checked;

    let msjError = document.querySelector('.error');

    // ########################### CHECKBOXES ###########################
    if(!inputBases || !inputDatos){
        msjError.innerHTML = "Debes acpetar ambos consentimientos legales";
        return;
    }

    // ########################### NOMBRE ###########################
    if(inputNombreVotante === ""){
        msjError.innerHTML = "El nombre no puede estar vacio";
        return;
    }
    if(inputNombreVotante.length < 4){
        msjError.innerHTML = "Debe contener al menos 4 caracteres";
        return;
    }

    let primeraLetra = inputNombreVotante.at(0).toUpperCase();
    let restoNombre = inputNombreVotante.slice(1,inputNombreVotante.length);
    inputNombreVotante = primeraLetra+restoNombre;

    // ########################### RADIO ###########################
    if(inputVotoFoto === null){
        msjError.innerHTML = "Debes elegir una foto";
        return;
    }

    let fotoElegida = inputVotoFoto.value;
    let seleccionVoto = "";
    switch(fotoElegida){
        case "fotoOso":
            seleccionVoto = "Oso Pardo Pirineos";
            break;
        case "fotoQuebrantahuesos":
            seleccionVoto = "Quebrantahuesos";
            break;
        case "fotoMarmota":
            seleccionVoto = "Marmota";
            break;
        default:
            msjError.innerHTML = "Error selector";
    }


    // ########################### PUNTUACION ###########################
    if(inputPuntuacion === ""){
        msjError.innerHTML = "La puntuación es obligatoria";
        return;
    }
    if(inputPuntuacion < 1 || inputPuntuacion > 10){
        msjError.innerHTML = "La puntuación debe estar entre 1 y 10";
        return;
    }

    let puntuacion = parseFloat(inputPuntuacion);
    if((inputNombreVotante.toUpperCase()) == "JUEZ SUPREMO" ){
        puntuacion *= 2;
    }

    // ########################### TABLA ###########################
    let tabla = document.getElementById('tablaVotos');
    let nuevaFila = tabla.insertRow();
    let celdaNombre = nuevaFila.insertCell(0);
    let celdaImagen = nuevaFila.insertCell(1);
    let celdaPuntuacion = nuevaFila.insertCell(2);
    let celdaFechaHoy = nuevaFila.insertCell(3);

    let hoy = new Date();
    let dia = hoy.getDate();
    let mes = hoy.getMonth();
    let anio = hoy.getFullYear();

    celdaNombre.innerHTML = inputNombreVotante;
    celdaImagen.innerHTML = `<span><img src='${fotoElegida}' alt='imagen'></span>`;
    celdaPuntuacion.innerHTML = puntuacion;
    celdaFechaHoy.innerHTML = dia+"/"+mes+"/"+anio;

    actualizarEstadisticas(puntuacion);
}

function reiniciarConcurso(){
    localStorage.clear();
    votos_totales = 0;
    suma_puntuaciones = 0;
    document.getElementById('infoEstadisticas').innerHTML = "Total Votos Emitidos: "+votos_totales+" | Puntuación Media Global: "+suma_puntuaciones;
    document.querySelector('tbody').innerHTML = "";
    document.querySelector('form').reset();
}