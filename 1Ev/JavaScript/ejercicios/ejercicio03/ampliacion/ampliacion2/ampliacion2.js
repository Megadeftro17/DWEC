function pulsar() {
    // ---------------------------------------------------------
    // PARTE 1: DIV PALABRAS (Procesamiento del Textarea)
    // ---------------------------------------------------------
    const texto = document.forms["formulario"]["mitexto"].value.trim();
    const divPalabras = document.getElementById("palabras");

    if (texto === "") {
        divPalabras.innerHTML = "<p>Por favor, escribe algo en el textarea.</p>";
    } else {
        // Dividimos el texto por espacios en blanco (usando expresión regular para múltiples espacios)
        const palabrasArr = texto.split(" ");
        const numPalabras = palabrasArr.length;
        const primeraPalabra = palabrasArr[0];
        const ultimaPalabra = palabrasArr[numPalabras - 1];

        divPalabras.innerHTML = `
            <h3>Análisis del texto:</h3>
            <ul>
                <li>Número total de palabras: <b>${numPalabras}</b></li>
                <li>Primera palabra: <b>${primeraPalabra}</b></li>
                <li>Última palabra: <b>${ultimaPalabra}</b></li>
            </ul>
        `;
    }

    // ---------------------------------------------------------
    // PARTE 2: DIV CALIFICACIONES (Procesamiento del Array)
    // ---------------------------------------------------------
    let notas = new Array(4.5, 4, 6, 1, 7.5, 10, 5.25, 4.5, 2, 1, 8, 7.5, 1, 7.5, 8);
    const divCalificaciones = document.getElementById("calificaciones");
    let html = "<h3>Análisis de Calificaciones:</h3><ul>";

    // 1. Sacar el número de alumnos aprobados (Uso de filter)
    const aprobados = notas.filter(nota => nota >= 5);
    html += `<li>Número de alumnos aprobados: <b>${aprobados.length}</b></li>`;

    // 2. Sacar las notas que no están repetidas (aparecen exactamente una vez)
    let noRepetidas = [];
    // Uso de bucle for-of y métodos de array (indexOf y lastIndexOf)
    for (let nota of notas) {
        if (notas.indexOf(nota) === notas.lastIndexOf(nota)) {
            noRepetidas.push(nota);
        }
    }
    html += `<li>Notas que no se repiten: <b>${noRepetidas.join(", ")}</b></li>`;

    // 3. Función para comprobar notas por debajo de 5 y sacar pares
    function esSuspenso(nota) {
        return nota < 5;
    }

    let suspensosPares = [];
    // Uso de bucle for tradicional
    for (let i = 0; i < notas.length; i++) {
        // Paridad aplica a números enteros, comprobamos que el resto sea 0
        if (esSuspenso(notas[i]) && notas[i] % 2 === 0) {
            suspensosPares.push(notas[i]);
        }
    }
    html += `<li>Notas pares de alumnos suspendidos: <b>${suspensosPares.join(", ")}</b></li>`;

    // 4. Notas impares de alumnos con al menos un 7
    let notasAltasImpares = [];
    let contador = 0;
    // Uso de bucle while
    while (contador < notas.length) {
        // Comprobamos si es >= 7, si es entero y si es impar (% 2 === 1)
        if (notas[contador] >= 7 && Number.isInteger(notas[contador]) && notas[contador] % 2 !== 0) {
            notasAltasImpares.push(notas[contador]);
        }
        contador++;
    }
    // Nota: Con tu array no hay enteros impares mayores de 7, por lo que saldrá vacío.
    html += `<li>Notas impares de alumnos con >= 7: <b>${notasAltasImpares.length > 0 ? notasAltasImpares.join(", ") : "Ninguna"}</b></li>`;

    // 5. Elimina del array las notas por debajo de 5
    const longitudOriginal = notas.length;
    // Bucle inverso para usar splice sin que se salten índices al re-indexar el array
    for (let i = notas.length - 1; i >= 0; i--) {
        if (notas[i] < 5) {
            notas.splice(i, 1);
        }
    }

    // 6. Crea una función aleatoria entre 5 y 10 sin decimales
    function notaAleatoriaAprobada() {
        return Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    }

    // 7. Rellenar el array (respetando las no eliminadas) hasta su longitud original
    // Uso de bucle do-while
    if (notas.length < longitudOriginal) {
        do {
            notas.push(notaAleatoriaAprobada());
        } while (notas.length < longitudOriginal);
    }

    // 8. Muestra el array final ordenado de mayor a menor
    // Uso de método sort
    notas.sort(function(a, b) {
        return b - a;
    });

    html += `<li>Array final ordenado (con rellenos aleatorios): <b>${notas.join(" | ")}</b></li></ul>`;

    divCalificaciones.innerHTML = html;
}