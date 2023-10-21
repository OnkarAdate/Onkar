const fs = require("fs");

fs.writeFile('Asyns.txt', "This is A-Syncronas modul program..", (err) => { console.log("File Created...");
console.log(err)}); //file create and write data

//fs.readFile('Asyns.txt', 'utf-8', (err, data) => { console.log("Data is =",  data);});  // Read data without binary using UTF-8


