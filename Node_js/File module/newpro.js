const fs = require("fs"); // Import the FS Liabrary 
//fs.writeFileSync('read.txt', "Welcome to file creating program");   // Create file and write data.
//fs.writeFileSync('read.txt', "Welcome to my file creating program");  // Data has overrided not rewrite
//fs.appendFileSync('read.txt',  "     new data has been apended..."); // Hence we appended it.

// Reading data frin the file.
const A = fs.readFileSync('read.txt');
const B = A.toString();
console.log(B);

//fs.renameSync('read.txt', 'first_File_program.txt'); //Renaming the file
