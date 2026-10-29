console.log("############# Estructuras repeticion [for in] #############");
const persona = { nombre: "Ana", edad: 25, pais: "Chile" };
for (const clave in persona) {
console.log(clave, ":", persona[clave]);}

console.log("############# Estructuras repeticion [for each] #############");
const numeros = [10, 20, 30];
numeros.forEach((valor, indice) => {
console.log(`Índice ${indice}: ${valor}`);});