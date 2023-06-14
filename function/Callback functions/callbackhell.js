var fs = require("fs");

//callback hell
//callback inside callback to much callbacks function is called callback hell

fs.readFile("./file1.txt", function readDataFromFile1(err, data1) {
    if (err) {
        return console.error(err);
    }

    fs.readFile("./file2.txt", function readDataFromFile2(err, data2) {
        if (err) {
            return console.error(err);
        }

        fs.writeFile("./file3.txt", `${data1} & ${data2}`, function (err, data) {  //creating file3 
            if (err) {
                return console.log(err);
            }
            console.log(`write operation successful`);
        });
    });
});

console.log("I am content from line number 25");


//PS C:\Users\PATHAN\OneDrive\Desktop\Javascript> cmd
// Microsoft Windows [Version 10.0.22621.1702]
// (c) Microsoft Corporation. All rights reserved.
// C:\Users\PATHAN\OneDrive\Desktop\Javascript>cd ./function
// C:\Users\PATHAN\OneDrive\Desktop\Javascript\function> cd ./Callback functions
// C:\Users\PATHAN\OneDrive\Desktop\Javascript\function\Callback functions> node ./callbackhell.js
// write operation successful
// C:\Users\PATHAN\OneDrive\Desktop\Javascript\function\Callback functions>
