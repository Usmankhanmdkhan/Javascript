//to access the varibles and function from other files to needed one file
//exporting the values to other files or components
//=========================================================
//we have different module system available
//this are more poopular
//1.Common module system             => exports , require()
//2.ESMS Ecma script module system   => export  , import 
//========================================================= 
//Bellow are less popular
//3.AMD
//4.UMD

var obj = require(`./demo.js`);    
obj.f1();                      //this is f1 
console.log(obj.x);            //20
console.log(obj.y);            //undefined
console.log(obj.yy);           //30

//here both the files are js files no html file is there 
//if you dont have any html file 
//open terminal
// PS C:\Users\PATHAN\OneDrive\Desktop\Javascript> cd .\Module
// PS C:\Users\PATHAN\OneDrive\Desktop\Javascript\Module> cd .\module1
// PS C:\Users\PATHAN\OneDrive\Desktop\Javascript\Module\module1> node .\app.js