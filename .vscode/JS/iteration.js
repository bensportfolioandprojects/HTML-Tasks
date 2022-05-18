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
let a = 100;
while(a <= 200) {
    a++;
    console.log(`a = ${a}`);
}
// Task 2
let A = 100;
while (A <= 200) {
    if (A% 2 == 0) {
        console.log("-");
    } else {
        console.log("*");
    }
    a++;
}
// Task 3
for (let b = 0; b < 10; i++) {
    for (let c = 1; j <= 10; j++) {
        console.log(c);
    }
}
// Task 4

// Task 5