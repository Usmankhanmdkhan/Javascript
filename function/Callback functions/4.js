var fs = require("fs");

//  this code is only executed in node js
//  browser dont understand this code
//  this is node js code not js code so we cant include it into html 

fs.readFile("./file1.txt", function (err, data) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data.toString());
});

console.log("I am statement from line-11")       //this line will executed not wait for above code to execute

//PS C:\Users\PATHAN\OneDrive\Desktop\Javascript> cmd 
//C:\Users\PATHAN\OneDrive\Desktop\Javascript> cd ./function
// C:\Users\PATHAN\OneDrive\Desktop\Javascript\function> cd./callback
// The system cannot find the path specified.
// C:\Users\PATHAN\OneDrive\Desktop\Javascript\function> cd ./Callback functions
// C:\Users\PATHAN\OneDrive\Desktop\Javascript\function\Callback functions> node ./4.js
// I am statement from line-11
// I am content from file-1
// C:\Users\PATHAN\OneDrive\Desktop\Javascript\function\Callback functions>
