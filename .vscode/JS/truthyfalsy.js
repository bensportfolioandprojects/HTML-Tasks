'use strict';

if ("hello") {
    console.log("TRUE");
} else {
    console.log("FALSE");
}

let age = 10;

if (age >= 18 && age <= 65) {
  console.log("Age is in range");
} else if (age < 18) {
  console.log("Underage");
} else {
  console.log("Catch all else");
}

let Age = 100;
let result = Age >= 50 ? "50 or over" : "Under 50";
console.log(result);

let strictA = true;
let strictB = 1;
console.log(strictA == strictB);
console.log(strictA === strictB);