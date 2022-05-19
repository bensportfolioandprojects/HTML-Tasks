'use strict';

// let result = myFuncWithReturn(7, 9, 10);
// console.log(result);

// // Function declaration
// function myFunc(num1, num2, num3) {
//     console.log(num1 + num2 + num3);
// }

// function myFuncWithReturn(num1, num2, num3) {
//     return (num1 + num2 + num3);
// }

// myFunc(7, 9, 10);

// // Function Expression
// let myFuncExpression = function(num1, num2, num3) {
//     console.log(num1 + num2 + num3);
// }

// myFuncExpression(4, 5, 6);

// // FUnction expression with arrow functions

// let myArrowFunction = (num1, num2, num3) => {
//     console.log(num1 + num2 + num3);
// }

// // If you want to return a single statement
// // You dont need curly braces or the return keyword
// let myArrowFunctionWithReturn = (num1, num2, num3) => num1 + num2 + num3;


function myFuncTask(num1, num2) {
    console.log(num1 - num2);
}

const welcome = function(name, age, gender) {
    return console.log(`My name is ${name}, I am ${age} years old and of ${gender}`);
}
welcome("Felix Cited", 20, "Male");

let powerup = (n1, n2) => Math.pow(n1,n2);

console.log(powerup(3,3));

