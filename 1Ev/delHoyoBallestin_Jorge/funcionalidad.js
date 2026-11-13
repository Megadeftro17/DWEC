// ---------- Constantes ----------
let LETRAS_DNI = "TRWAGMYFPDXBNJZSQVHLCKE";

let CAMPOS_PERSONALES = ["nombre", "apellidos", "email", "dni"];
let CAMPOS_SOLICITUD = ["nss", "codigo", "carta"];
let CAMPOS = CAMPOS_PERSONALES.concat(CAMPOS_SOLICITUD);



/**placeholders
  nombre: "Nombre",
  apellidos: "Apellidos",
  email: "correo@dominio.es",
  dni: "12345678Z",
  nss: "12 dígitos",
  codigo: "OF2024",
  carta: "Mínimo 20 caracteres"
*/

// Dos filas de ejemplo con datos válidos
function datosEjemplo() {
  let datos = [
    {
      id: 1, nombre: "Lucía", apellidos: "Fernández Gómez", email: "lucia.fernandez@correo.es", dni: "12345678Z",
      nss: "281234567890", codigo: "OF2024",
      carta: "Me interesa la oferta porque encaja con mi formación en desarrollo web.",
      activada: true, caracteres: 0,
      fechaEnvio: new Date(2026, 10, 5, 9, 15).getTime()
    },
    {
      id: 2, nombre: "Marcos", apellidos: "Ibáñez Ruiz",
      email: "marcos.ibanez@correo.es", dni: "87654321X",
      nss: "301234567891", codigo: "OF2025",
      carta: "Cuento con experiencia en JavaScript y quiero seguir creciendo en el equipo.",
      activada: false, caracteres: 0, fechaEnvio: 0
    }
  ];
  const tbody = document.getElementById('cuerpoTabla');
  let filas = "";

  datos.forEach((dato) => {
    let hoy = new Date();
    let fechaEnvioDia = hoy.getDate();
    let fechaEnvioMes = hoy.getMonth();
    let fechaEnvioAnio = hoy.getFullYear();

    dato.fechaEnvio = fechaEnvioDia + "/" + fechaEnvioMes + "/" + fechaEnvioAnio;

    if (validadores(dato.nombre, dato.apellidos, dato.email, dato.dni)) {
      dato.activada = true;
    } else {
      dato.activada = false;
    }
    filas += `
      <tr>
        <td>${dato.id}</td>
        <td>${dato.nombre}</td>
        <td>${dato.apellidos}</td>
        <td>${dato.email}</td>
        <td>${dato.dni}</td>
        <td>${dato.nss}</td>
        <td>${dato.codigo}</td>
        <td>${dato.carta}</td>
        <td class="celda-caracteres">${calcularCaracteresCarta(dato.carta)}</td>
        <td class="celda-activada">${dato.activada ? "Sí" : "No"}</td>
        <td>${dato.fechaEnvio}</td>
        <td>
          <button type="button" onclick="activarCandidatura()">Activar Candidatura</button>
          <hr/>
          <button type="button" onclick="enviarSolicitudes()">Enviar Solicitudes</button>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = filas;
}

function filaInputs() {
  let contador = 3;
  let tbody = document.getElementById('cuerpoTabla');
  tbody.innerHTML += `
        <tr>
          <td>
            ${contador}
          </td>
          <td>
            <input type="text" id="nombre" placeholder="nombre">
          </td>
          <td>
            <input type="text" id="apellidos" placeholder="apellidos">
          </td>
          <td>
            <input type="text" id="email" placeholder="email">
          </td>
          <td>
            <input type="text" id="dni" placeholder="dni">
          </td>
          <td>
            <input type="text" id="nss" placeholder="nss">
          </td>
          <td>
            <input type="text" id="codigo" placeholder="codigo">
          </td>
          <td>
            <input type="text" id="carta" placeholder="carta">
          </td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>
              <button type="button" onclick="activarCandidatura()">Activar Candidatura</button>
              <hr/>
              <button type="button" onclick="enviarSolicitudes()">Enviar Solicitudes</button>
            </td>
        </tr>
      `;
    contador += 1;
}

// Funcion para añadir filas
function anadirFila() {
  document.getElementById('btnAnadir').innerHTML += filaInputs();
}

// Funcion para activar la candidatura
function activarCandidatura() {
  let dato = datosEjemplo();
  dato.forEach(dato => {
    if (validadores(dato.nombre, dato.apellidos, dato.email, dato.dni));
    dato.carta = calcularCaracteresCarta(dato.carta);
    dato.activada = true;
  });
}

datosEjemplo();


// Funcion para restaurar todo
function restaurarEjemplo() {
  datosEjemplo();
}

// Funcion para validar los validadores originales
function validadores(nombre, apellidos, email, dni) {
  if (String(nombre == "") || String(apellidos == "") || String(email == "") || String(dni == "")) {
    console.log("Todos los campos son obligatorios");
    return false;
  }
  if (nombre.length < 2 || !Number.isNaN(nombre)) {
    console.log("El nombre debe contener 2 caracteres no numericos");
    return false;
  }

  if (String(apellidos.length) < 2 || !Number.isNaN(apellidos)) {
    console.log("Los apellidos deben tener 2 caracteres no numericos");
    return false;
  }

  if (!String(email.includes("@")) || !String(email.includes("."))) {
    console.log("El email debe contener @ y .");
    return false;
  }

  // Funcion para el dni
  function dniValido(dni) {
    const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    let letraDNI = dni.at(-1).toUpperCase();
    let indiceCalculado = dni.slice(0, 8) % 23;

    return (letrasDNI[indiceCalculado] == letraDNI);
  }

  if (!dniValido(dni) || dni.length < 9) {
    console.log("El dni debe tener 9 caracteres (8 digitos y 1 letra)");
    return false;
  }
}


// Funcion para calcular caracteres de la carta
function calcularCaracteresCarta(carta) {
  carta.split(" ");
  let contadorCaracteres = 0;
  for (palabra of carta) {
    contadorCaracteres += palabra.length;
  }
  return contadorCaracteres;
}


// funcion para validar el envio
function validarEnvio(nss, codigo, carta) {
  if (Number(nss.length !== 12)) {
    console.log("El numero de la Seguridad social debe tener 12 digitos");
    return;
  }
  if ((codigo.at(0) == "O" && codigo.at(1) == "F") || codigo.length !== 6 || !Number.isNaN(codigo.slice(2, 6))) {
    console.log("El codigo debe empezar por <<OF>> y seguido de 4 numeros");
    return;
  }
  if (carta == "" || carta.length < 20) {
    console.log("La carta no puede estar vacía ni tener menos de 20 caracteres");
    return;
  }

  let hoy = new Date();
  let dia = hoy.getDate();
  let mes = hoy.getMonth();
  let anio = hoy.getFullYear();

  let horas = hoy.getUTCHours();

  return dia + "/" + mes + "/" + anio + " | " + horas;
}