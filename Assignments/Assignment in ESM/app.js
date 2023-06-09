//create a file calculator.js and export few functions using CJS
//import those functions in app.js and use


import addition, { sub, name } from "./calculator.js"

let adding = addition(2,5);
console.log(adding);

let substract = sub(5,2);
console.log(substract);

console.log(name);