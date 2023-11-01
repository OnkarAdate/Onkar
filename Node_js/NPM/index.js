//const chalk = require("chalk");
const validator = require("validator");
const color = require('colors');

// ******** Color Attribute *****************
console.log("Welcome".inverse.green);
console.log("Onkar Adate".underline.red.inverse); 
console.log("Kajal..!!".rainbow.inverse); 
console.log("This is trap".trap); 

//console.log(chalk.blue('Hello world!'));


// ******** Validator Attribute *****************
const res = validator.isEmail("onkar@adate.com"); 
console.log(res ? color.green.inverse(res) : color.red.inverse(res));
const mob = validator.isMobilePhone("123456789");
console.log(mob ? color.yellow.inverse(mob) : color.red.inverse(mob));


// const spinner = ora('Loading Unicorn').start();

// setTimeout(() => { spinner.color = "Yellow";
//                    spinner.text = "Rainbow" ; }, 1000 );