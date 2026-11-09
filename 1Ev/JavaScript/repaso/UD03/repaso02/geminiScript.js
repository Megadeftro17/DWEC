/**
 * Formato: ID_Transaccion:Importe:Fecha(YYYY-MM-DD). Las transacciones están separadas por |.
 * 
 * Requisitos de procesamiento:
 * 
 * Limpieza Inicial (Objeto String):
 * - Elimina los espacios en blanco al principio y al final de la cadena loteTransacciones.
 * - Convierte toda la cadena a mayúsculas para unificar los IDs (para que tx103 pase a TX103).
 * - Divide la cadena en un array de transacciones individuales usando el separador |.

 * Procesamiento y Validación (Bucles, Arrays, String, Number):
 * - Itera sobre el array de transacciones utilizando un bucle for...of.
 * - Para cada transacción, sepárala en sus componentes: ID, Importe y Fecha.
 * - Validación del Importe:
 * - - Intenta convertir el importe a un número decimal (parseFloat o coerción).
 * - - Si el importe no es un número válido (ej. "ERROR"), descarta la transacción y continúa con la siguiente (usa la instrucción adecuada del bucle para saltar).
 * - Clasificación (Arrays):
 * - - Si el importe es positivo, añade el ID al array ingresos.
 * - - Si el importe es negativo, añade el ID al array gastos.

* Cálculos Financieros (Objeto Math y Number):
 * - Mantén un contador del saldo total sumando los importes válidos.
 * - Redondea el saldo total final a exactamente 2 decimales.
 * - Encuentra el importe más alto registrado (ya sea ingreso o gasto, es decir, el valor absoluto máximo).
 * Para ello, guarda los importes válidos en un array y utiliza Math.max() junto con el operador spread (...) o un bucle.

 * Generación de Informe (Objeto Date y String):
 * - Obtén la fecha y hora actual en el momento de generar el informe usando el objeto Date.
 * Muestra por consola (o usando document.write) un informe final utilizando Template Literals (comillas invertidas) con la siguiente estructura:
 */
const loteTransacciones = "  TX101:50.25:2026-10-15 | TX102:-15.50:2026-10-16 | tx103:200.00:2026-10-17 | TX104:ERROR:2026-10-18 | TX105:-30.75:2026-10-19  ";

let loteSeparado = loteTransacciones.trim().toUpperCase().split(" | ");

let ingresos = [];
let gastos = [];
let importesValidos = [];
let importesExitosos = 0;
let saldoTotal = 0;


for(let lote of loteSeparado) {
    let datosLote = lote.split(":");
    let id = datosLote[0];
    let importe = datosLote[1];

    // Si es error se continua, sino se pasa a float
    if((importe.toUpperCase()) == "ERROR"){
        continue;
    }

    importesExitosos++;
    importe = parseFloat(importe);
    saldoTotal += importe;

    importesValidos.push(Math.abs(importe));

    // Si es positivo importe sino gasto
    if(importe > 0){
        ingresos.push(id);
    } else {
        gastos.push(id);
    }
}

saldoTotal = saldoTotal.toFixed(2);

let maxImporte = 0;
for(let i = 0; i < importesValidos.length; i++){
    if(importesValidos[i] > maxImporte){
        maxImporte = importesValidos[i];
    }
}

let fecha = new Date();
let diaActual = fecha.getDate();
let mesActual = fecha.getMonth()+1;
let anyoActual = fecha.getFullYear();
let horaActual = fecha.getHours();
let minutosActual = fecha.getMinutes();

console.log("== INFORME DE TRANSACCIONES == ");
console.log("Fecha de proceso: "+diaActual+"/"+mesActual+"/"+anyoActual+" a las "+horaActual+":"+minutosActual);
console.log("Total transacciones válidas: "+importesExitosos);
console.log("Ids de Ingresos: "+ingresos);
console.log("Ids de Gastos: "+gastos);
console.log("Saldo final: "+saldoTotal);
console.log("Transacción de mayor volumen (valor absoluto): "+maxImporte);
