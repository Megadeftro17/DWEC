/**
 * Reto 2: Auditoría del Navegador (BOM y Storage)Objetivo teórico: Interactuar con la ventana, leer propiedades del cliente web y persistir información.
 * Imagina que estás programando el script de inicio de una aplicación web segura.
 * Utiliza el objeto navigator para comprobar si las cookies están habilitadas (cookieEnabled).
 * Si no lo están, lanza una alerta usando el método de window correspondiente y detén el proceso.
 * Si están habilitadas, accede a la URL completa en la que se encuentra el usuario utilizando las propiedades del objeto location.
 * Comprueba si existe un dato guardado en localStorage bajo la clave "ultimaVisita".
 * - Si existe, muestra por pantalla la fecha guardada.
 * - Si no existe, guarda la fecha y hora actuales en esa clave.
 */

if(!navigator.cookieEnabled){
    window.alert("LAS COOKIES NO ESTÁN ACTIVADAS!!");
} else {
    let urlCompleta = window.location.href;
    console.log("Accediendo de forma segura desde: "+urlCompleta);

    let ultimaVisita = localStorage.getItem("ultimaVisita");

    if(ultimaVisita){
        console.log("Bienvenido de nuevo tu ultima visita fue: "+ultimaVisita);
        window.alert("Ultima visita registrada: "+ultimaVisita);
    } else {
        let fechaActual = new Date().toLocaleDateString();

        localStorage.setItem("ultimaVisita", fechaActual);
        console.log("Esta es tu primera visita. Fecha de acceso registrada "+fechaActual);
    }
}