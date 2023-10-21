const obj = {
    name : "Onkar Adate",
    age : 25,
    City : "Pune"
};

const jsonData=JSON.stringify(obj); // for converting data Obj to JSON
//console.log(jsonData);

// const objData=JSON.parse(jsonData);  // for converting data JSON to Data
// console.log(objData);

/* Tasl:--  1. Create obj.
            2. connvert to json
            3. Write that converted data intu ne file
            4. Read that that
            5. agin convrt it into obj..
   1 & 2 already done above         */    

const  fs = require('fs');

fs.writeFile("jsonData.json", jsonData, (err) => { console.log(" File created...");} ); // Task 3 done.


fs.readFile("jsonData.json", 'utf-8', (err, data) => { console.log("Data from JSON file is==", data)} ); // Task 4 done.

const orgData = JSON.parse(jsonData);
console.log("JSON to Original date ==", orgData); // Task 5 done.

