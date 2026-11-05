/**
 * Reto 3: Colecciones Modernas y Bucles (Set, Map, JSON y for...of)Objetivo teórico: Aplicar las estructuras de datos introducidas en ES6 y sus bucles específicos.
 * Declara una cadena de texto en formato JSON que represente a un objeto con las propiedades nombre, rol y departamento.
 * Convierte ese texto JSON a un objeto real de JavaScript.
 * A partir de los valores de ese objeto (puedes usar Object.values()), crea un Set para asegurar que, si hubiera valores repetidos (por ejemplo, que el nombre y el rol fueran iguales), se eliminen los duplicados.
 * Utiliza un bucle for...of para recorrer el Set e imprimir cada uno de los valores únicos en la consola.*/

const empleadoJSON = '{"nombre": "Carlos", "rol": "Desarrollador", "departamento": "Tecnología"}';

// 2. Convertir el texto JSON a un objeto real de JavaScript
const empleadoObjeto = JSON.parse(empleadoJSON);
console.log("Objeto JS convertido:", empleadoObjeto);

// 3. Obtener los valores del objeto y crear un Set para eliminar duplicados
const valoresObjeto = Object.values(empleadoObjeto);
const valoresUnicos = new Set(valoresObjeto);

// 4. Utilizar un bucle for...of para recorrer el Set e imprimir los valores únicos
console.log("--- Valores únicos del empleado ---");
for (const valor of valoresUnicos) {
    console.log(valor);
}
