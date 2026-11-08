/**
 * Ejercicio Práctico: Gestión de Alta Bancaria (UD3) - 3 puntos
 * Crea una aplicación Web que gestione el registro de nuevos usuarios bancarios.
 * La funcionalidad se implementará con JavaScript, utilizando los objetos predefinidos (String, Math, Date, Array, Number) y gestionando los clics mediante el atributo onclick en el HTML.

 * El formulario HTML deberá contener tres campos de entrada (Nombre, Año de Nacimiento, DNI), un botón "Habilitar banco" y un botón "Enviar" (que por defecto estará deshabilitado).
 * Fase 1: Para Habilitar el banco
 * El botón "Habilitar banco" validará los datos. Si algún campo falla, se mostrará un aviso de error debajo de ese campo específico (no en un alert global).

 * Campo Nombre (Objeto String): Debe tener al menos 3 caracteres. (Internamente, tu código debe usar métodos de String para guardar este nombre con la primera letra en mayúscula y el resto en minúsculas).

 * Campo Año de Nacimiento (Objetos Number y Date): El usuario introducirá su año de nacimiento. Tu código debe instanciar la fecha actual, calcular la edad del usuario y validar que sea mayor o igual a 18 años.

 * Campo DNI (Objetos String y Array): El usuario debe introducirlo obligatoriamente con un guion (ejemplo: 12345678-Z).
 * Debes usar el método correspondiente de los Strings para separar los números de la letra.
 * Después, apóyate en un Array tradicional con las letras del DNI para validar matemáticamente que la letra introducida es la correcta.

 * Si y solo si todos los campos superan estas validaciones, se limpiarán los mensajes de error visuales y el botón "Habilitar banco" activará el botón "Enviar".

 * Fase 2: Para Enviar los datos
 * El botón "Enviar" simulará el registro final del cliente en el sistema.

 * Generación de Código (Objeto Math): Se generará de forma automática un código de cliente aleatorio, que debe ser un número entero comprendido entre 1000 y 9999.

 * Marca de tiempo (Objeto Date): Se capturará el momento exacto del clic empleando Date.now().

 * Salida de datos: Se bloquearán de nuevo los botones y se mostrará por pantalla un resumen que incluya: el nombre ya formateado correctamente, la edad calculada, el DNI unido sin el guion, el código de cliente generado y el timestamp del registro.

 * Se tendrá en cuenta para su valoración:

 * Experiencia de usuario: inyección de los avisos de error correspondientes y bloqueo/desbloqueo correcto de los botones. (0,75 puntos)

 * Uso correcto de los métodos del objeto String y Array para la manipulación y validación del nombre y DNI. (1 punto)

 * Uso correcto de los objetos Date y Math para el cálculo de la edad, generación del código aleatorio y timestamp. (1,25 puntos)*/


let nombreFormateado = "";
let dniFormateado = "";
let edad = 0;

function habilitarEnviar() {

    let formularioCorrecto = true;

    // NOMBRE
    let nombre = document.getElementById('nombre').value;
    let errorNombre = document.getElementById('errorNombre');

    if (nombre == "" || nombre.length < 3) {
        formularioCorrecto = false;
        errorNombre.innerHTML = "<p>El nombre es obligatorio y tiene que tener más de 3 caracteres</p>";
    } else {
        errorNombre.innerHTML = "";
        let primeraLetra = nombre.charAt(0).toUpperCase();
        let resto = nombre.slice(1).toLowerCase();
        nombreFormateado = primeraLetra + resto;
        console.log(nombreFormateado);

        formularioCorrecto = true;
    }

    // AÑO NACIMIENTO
    let anyoNacimiento = document.getElementById('anyoNacimiento').value;
    let errorAnyo = document.getElementById('errorAnyo');
    let anyoActual = new Date().getFullYear();

    if(anyoNacimiento == "" || anyoNacimiento > anyoActual){
        formularioCorrecto = false;
        errorAnyo.innerHTML = "<p>El año es obligatorio y no puede ser posterior al actual</p>";
    } else {
        errorAnyo.innerHTML = "";
        let edad = anyoActual-anyoNacimiento;
        (edad >= 18) ? formularioCorrecto = true : formularioCorrecto = false ;
        console.log(edad);
    }


    // DNI
    let dni = document.getElementById('dni').value;
    let errorDni = document.getElementById('errorDni');

    let dniPartes = dni.split("-");
    let numerosDni = dniPartes[0];
    let letraDni = dniPartes[1] ? dniPartes[1].toUpperCase() : "";
    const letrasPosibles = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    let letraValidaDni = numerosDni % 23;
    
    letraCorrecta = false;
    if(letraDni == letrasPosibles[letraValidaDni]){
        letraCorrecta = true;
    }

    if(dni == "" || dni.length !== 10){
        errorDni.innerHTML = "<p>El dni es obligatorio y no puede ser de esa longitud</p>";
    } else if(!letraCorrecta){
        errorDni.innerHTML = "<p>La letra del DNI es incorrecta</p>";
    }else {
        errorDni.innerHTML = "";
        dniFormateado = numerosDni+"-"+letraDni;
        formularioCorrecto = true;
    }


    // BOTON
    let botonEnviar = document.getElementById('enviar');
    if(formularioCorrecto){
        botonEnviar.disabled = false;
    } else {
        botonEnviar.disabled = true;
    }
}