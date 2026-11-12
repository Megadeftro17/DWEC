/**
 * Contexto:
 * Debes programar la lógica JavaScript para un sistema de matriculación de alumnos, aplicando bonificaciones de nota según el turno elegido y validando la aceptación legal.
 * Requisitos obligatorios que debe cumplir tu script:
 * 1. Persistencia de múltiples datos (window.onload y localStorage):
 * - Al cargar la página, recupera dos valores de localStorage: el total_alumnos (contador) y la nota_maxima histórica.
 * - Si no existen, inicialízalos a 0. Muestra ambos en el párrafo de "Estadísticas Globales".
 * 2. Validación Booleana (Checkbox):
 * - Comprueba si el checkbox de "Términos y condiciones" (id="terminos") está marcado (pista: usa la propiedad .checked).
 * - Si es false, muestra un mensaje de error: "Debes aceptar los términos y condiciones para continuar" y detén la ejecución.
 * 3. Validación de Textos (Objeto String):
 * - El nombre completo debe tener al menos 3 caracteres y no estar vacío.
 * - Al guardarlo, conviértelo a MAYÚSCULAS y aplícale .trim() para limpiar espacios accidentales.
 * 4. Control de Fechas (Objeto Date):
 * - Calcula la edad exacta del alumno basándote en su fecha de nacimiento y el día de hoy (teniendo en cuenta meses y días).
 * - Si la edad es menor de 0 (fecha futura), lanza un error.
 * 5. Lógica Matemática y Condicionales (Radio Buttons y Objeto Math / Number):
 * - Lee la "Nota de Acceso". Si está vacía, no es un número (isNaN) o no está entre 0 y 10, muestra un error.
 * - Modificador por Turno: Comprueba qué Radio Button está seleccionado. Si el alumno ha elegido el turno de Tarde (id="turnoTarde" está .checked), aplícale una bonificación de +0.5 puntos a su nota. (Importante: la nota final nunca puede superar el 10.00). Si es de Mañana, la nota se queda igual.
 * - Genera un ID aleatorio de 4 cifras (entre 1000 y 9999).
 * - La nota final debe redondearse estrictamente a 2 decimales para mostrarse en la tabla.
 * 6. Manipulación de la Tabla (DOM Clásico):
 * - Usando insertRow(-1) e insertCell(), añade al final de la tabla una fila con: ID, Nombre (mayúsculas), Edad y Nota Final.
 * 7. Actualización de Estadísticas:
 * - Incrementa el total de registros en 1.
 * - Compara la "Nota Final" de este alumno con la nota_maxima global. Si es mayor, actualiza el récord.
 * - Guarda ambos datos actualizados en localStorage, actualiza el texto en pantalla y vacía el formulario (.reset()).*/



let totalAlumnos = 0;
let nota_maxima = parseFloat(0);

window.onload = function(){
    const guardadoAlumnos = localStorage.getItem("totalAlumnos");
    const guardadoNota = localStorage.getItem("notaMaxima");
    if(guardadoAlumnos !== null){
        totalAlumnos = parseInt(guardadoAlumnos);
    } else {
        totalAlumnos = 0;
    }

    if(guardadoNota !== null){
        nota_maxima = parseFloat(guardadoNota);
    } else{
        nota_maxima = 0;
    }

    document.getElementById('infoEstadisticas').innerHTML = "Total registros: "+totalAlumnos+" | Nota maxima: "+nota_maxima;
}


// ================================ FUNCION PARA ACTUALIZAR EL LOCALSTORAGE ================================
function actualizarEstadisticas(notaAlumno){
    totalAlumnos++;
    localStorage.setItem("totalAlumnos",totalAlumnos);
    if(nota_maxima < notaAlumno){
        nota_maxima = notaAlumno;
    }
    localStorage.setItem("notaMaxima",nota_maxima);

    document.getElementById('infoEstadisticas').innerHTML = "Total Registros: "+totalAlumnos+" | Nota Máxima: "+nota_maxima;
}


// ================================ FUNCION CON VALIDACIONES Y AGREGAR ================================
function agregarRegistro(){
    let inputNombre = document.getElementById('nombre').value.trim();
    let inputFechaNac = document.getElementById('fechaNac').value;
    let inputNota = document.getElementById('nota').value;
    let inputTurno = document.querySelector('input[name="turno"]:checked');
    let inputTerminos = document.querySelector('input[type="checkbox"]').checked;
    let msjError = document.querySelector('.error');

    // ================================ VALIDACION TERMINOS ================================
    if(!inputTerminos){
        msjError.innerHTML = "Debes aceptar términos y condiciones";
        return;
    }

    // ================================ VALIDACION NOMBRE ================================
    if(inputNombre === ""){
        msjError.innerHTML = "El nombre es obligatorio";
        return;
    }
    if(inputNombre.length < 3 ){
        msjError.innerHTML = "El nombre debe tener al menos 3 caracteres";
        return;
    }

    inputNombre = inputNombre.toUpperCase().trim();
    msjError.innerHTML = "";

    //================================ VALIDACION FECHAS ================================
    let fecha = new Date(inputFechaNac);
    let hoy = new Date();

    if(inputFechaNac === ""){
        msjError.innerHTML = "La fecha es obligatoria";
        return;
    }

    let edad = hoy.getFullYear() - fecha.getFullYear();

    let mes = hoy.getMonth() - fecha.getMonth();

    if(mes < 0 || (mes === 0 && hoy.getDate() < fecha.getDate())){
        edad--;
    }

    if(edad < 0){
        msjError.innerHTML = "No puedes nacer después de hoy";
        return;
    }

    msjError.innerHTML = "";

    // ================================ VALIDACION NOTA ================================
    inputNota = parseFloat(inputNota);

    if(inputNota === "" || Number.isNaN(inputNota)){
        msjError.innerHTML = "La nota es obligatoria y debe ser un numero";
        return;
    }

    if(inputNota < 0 || inputNota > 10){
        msjError.innerHTML = "La nota debe estar entre 0 y 10";
        return;
    }

    // ================================ VALIDACION TURNO ================================
    if(inputTurno === null){
        msjError.innerHTML = "Elige obligatoriamente un turno";
        return;
    }

    let turno = inputTurno.value;

    if (turno == "tarde") {
        inputNota += 0.50;
    if (inputNota > 10) {
        inputNota = 10;
    }
}


    inputNota = inputNota.toFixed(2);


    let idAleatorio = Math.floor((Math.random()*9999)+1000);


    // ================================ DOM ================================
    let tabla = document.getElementById('tablaDatos');
    let nuevaFila = tabla.insertRow(-1);
    let celdaId = nuevaFila.insertCell(0);
    let celdaNombre = nuevaFila.insertCell(1);
    let celdaEdad = nuevaFila.insertCell(2);
    let celdaNotaFinal = nuevaFila.insertCell(3);

    celdaId.innerHTML = idAleatorio;
    celdaNombre.innerHTML = inputNombre;
    celdaEdad.innerHTML = edad;
    celdaNotaFinal.innerHTML = inputNota;

    actualizarEstadisticas(parseFloat(inputNota));
}

// ================================ FUNCION PARA VACIAR TODO ================================
function vaciarTodo(){
    localStorage.clear();
    totalAlumnos = 0;
    nota_maxima = 0;
    document.getElementById('infoEstadisticas').innerHTML = "Total registros: 0 | Nota Máxima: 0.00";
    document.querySelector('tbody').innerHTML = "";
    document.querySelector('form').reset();
}