//Si especificas cualquier objeto, incluido un objeto Boolean cuyo valor es false, como valor
// inicial de un objeto Boolean,
//el nuevo objeto Boolean tiene un valor de true.

console.log("############# Objeto Nativo Boolean #############");
let myFalse = new Boolean(false); // valor inicial de false
console.log("Valor inicial de false --> "+myFalse);
let g = Boolean(myFalse); // valor inicial de true
console.log("Valor inicial de true --> "+g);
let myString = new String('Hola'); // objeto string
console.log("Objeto string --> "+myString);
let s = Boolean(myString); // valor inicial de true
console.log("Valor inicial de true -->"+s);