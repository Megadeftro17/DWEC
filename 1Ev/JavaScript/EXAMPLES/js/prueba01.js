console.log(z); // ReferenceError: x is not defined
var i; // Variable declarada pero valor no inicializada
console.log(i); // undefined
console.log(x); //undefined
var x = 1;
i = 1;
console.log(i); // 1
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 1;