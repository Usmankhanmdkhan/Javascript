import addition, { sub, f1 } from "./math.mjs";                   //default export we can change name in import

let addResult = addition(2, 3);
console.log(`Addition is ${addResult}`);

let subResult = sub(5, 3);
console.log(`Subtraction is ${subResult}`);

f1();

//ES - module System
//if it is default, the name can be diff
//cant write multiple default export in one file if u try the dublicate export of default error shows
//writing filename .mjs because node js takes js file in common js module system by default  
//default word can be only used for classes and function not for variables
//named exports fucntions must have same name in both import nad export inside {}......