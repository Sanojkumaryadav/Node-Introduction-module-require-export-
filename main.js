const add = require("./add");
const subtract = require("./subtract");
const multiply = require("./multiply");
const divide = require("./divide");

function calculations(a, b){
    console.log(`addition of ${a} and ${b} is ${add(a,b)}`);
    console.log(`subtract of ${a} and ${b} is ${subtract(a,b)}`);
    console.log(`multiply of ${a} and ${b} is ${multiply(a,b)}`);
    console.log(`divide of ${a} and ${b} is ${divide(a,b)}`);
}
calculations(10, 5);