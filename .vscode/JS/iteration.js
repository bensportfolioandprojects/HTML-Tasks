'use strict';

// For loop
// Initialise a variable; Set a conditional; Choose an iterator;

for (let i = 0; i < 5; i++) {
    console.log(i);
}

let puppies = 0;
let notEnoughPups = true;

while (notEnoughPups) {
    console.log("Another pup");
    puppies++;

    if (puppies > 238) {
        notEnoughPups = false;
    }
}
console.log("Oh so many puppies!");

// Do while loops
// Do while loops definitely run at least once

let x = 0;
let canIRun = false;
do {
    x++;
    console.log(x);
} while (canIRun);

// Task 1
for (let a = 100; a <= 200; a++) {
    console.log(`a = ${a}`);
}
// Task 2
for (let A = 100; A <= 200; A++) {
    if (A% 2 == 0) {
        console.log("-");
    } else {
        console.log("*");
    }
}
// Task 3
for (let b = 0; b < 10; i++) {
    for (let c = 1; j <= 10; j++) {
        console.log(c);
    }
}
// Task 4
Above
// Task 5
let today = new Date(); 
let day = today.getDay();
switch (day) {
    case 0:
    console.log(`Monday`);
    break;
    case 6:
    console.log(`Sunday`);
    break;
    case 1:
    console.log(`Tuesday`);
    break;
    case 5:
    console.log(`Saturday`);
    break;
    case 2:
        console.log(`Wednesday`);
    break;
    case 3:
        console.log(`Thursday`);
    break;
    case 4:
        console.log(`Friday`);
    break;
    case 5:
        console.log(`Saturday`);
    break;
  default:
    console.log(`What?`);
    break;
}