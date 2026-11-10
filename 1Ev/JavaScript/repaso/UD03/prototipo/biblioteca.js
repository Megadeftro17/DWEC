/**
 * Simulacro de Examen: Gestor de Préstamos de Biblioteca
 * Contexto: Tienes que programar la lógica JavaScript para un formulario de control de biblioteca.

 * Campos del formulario HTML:
 * - Título del libro (id="titulo")
 * - Código ISBN (id="isbn")
 * - Fecha Límite de Devolución (id="fechaLimite")
 * - Precio de reposición (€) (id="precio")

 * Requisitos obligatorios que debe cumplir tu script:
 * 1. window.onload y localStorage:
 * - Al cargar la página, recupera de localStorage el número total de libros devueltos con retraso (un contador numérico) y muéstralo en el párrafo de estadísticas.
 * Si no existe, empieza en 0.
 * 2.Validación (Objeto String):
 * - El título del libro debe tener al menos 3 caracteres y convertirse automáticamente a mayúsculas para la tabla.
 * - El código ISBN debe tener exactamente 10 caracteres.
 * Si no cumple alguna de estas condiciones, muestra un error en el contenedor correspondiente y detén la ejecución.
 * 3. Control de Fechas (Objeto Date):
 * - Compara la Fecha Límite de Devolución con la fecha actual del sistema (new Date()).
 * - Si la fecha límite es anterior a hoy, el libro está fuera de plazo (retraso). 
 * Debes calcular cuántos días de retraso lleva. (Si la fecha es correcta o futura, los días de retraso son 0).
 * 4. Cálculos Financieros (Objetos Math y Number):
 * - Si hay días de retraso, se aplica una multa: 0.50 € por cada día de retraso, sumado al precio de reposición del libro.
 * Si no hay retraso, el coste total de la sanción es 0.00 €.
 * - Genera un ID de Préstamo aleatorio de 4 cifras (entre 1000 y 9999) utilizando Math.random().
 * - El importe final de la sanción debe mostrarse redondeado exactamente a 2 decimales (toFixed(2)).
 * 5. Manipulación de la Tabla (DOM Clásico):
 * Utiliza exclusivamente insertRow(-1) e insertCell() para añadir una nueva fila a la tabla con los siguientes datos: 
 * - ID de Préstamo, Título (en mayúsculas), Días de retraso y Importe Total de Sanción.
 * 6. Actualización y Limpieza:
 * Si el libro tenía retraso, incrementa en 1 el contador global, guárdalo actualizado en localStorage y actualiza el texto de estadísticas.
 * Limpia el formulario al terminar de insertar el registro correctamente.
 */

let ingresosTotales = 0;

window.onload = function(){
    const guardado = localStorage.getItem("ingresosAcumulados");
    if(guardado !== null){
        ingresosTotales = parseFloat(guardado);
    } else {
        ingresosTotales = 0.0;
    }

    document.getElementById("infoEstadisticas").innerHTML = "<p>Total de ingresos acumulados: "+(ingresosTotales.toFixed(2))+"€</p>";
}

function agregarPrestamo () {
    let msjError = document.getElementById('mensajeError');

    let titulo = document.getElementById('titulo').value;
    if(titulo.length < 3 || titulo === ""){
        msjError.innerHTML = "El campo no puede tener longitud menor que 3 ni estar vacio";
        return;
    } else{
        titulo = titulo.toUpperCase();
        console.log(titulo);
    }


    let inputFecha = document.getElementById('fechaLimite').value;
    if(inputFecha === ""){
        msjError.innerHTML = "La fecha es obligatoria";
        return;
    }

    msjError.innerHTML = "";

    let fechaLimite = new Date(inputFecha);
    let hoy = new Date();

    fechaLimite.setHours(0,0,0,0);
    hoy.setHours(0,0,0,0);

    let diasRetraso = 0;
    if(fechaLimite < hoy){
        let diferenciaMes = hoy - fechaLimite;
        diasRetraso = Math.floor(diferenciaMes / (1000 * 60 * 60 * 24));
    } else {
        diasRetraso = 0;
    }

    console.log(diasRetraso);


}