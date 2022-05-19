'use strict';

// let anmd const are something called: Block scope

// This is in global scope
let age = 10;

let myFunction = () => {
    // This variable is only in scope in this function
    let adjustment = 5;
    age+= adjustment;
    // If I want adjustment to be available outside of this function then I should return it
    // return adjustment;
}

myFunction();
console.log(age);
// The cariable adjustment is out of scope here
console.log(adjustment);

// Loop scope
for (let i = 0; i < 5; i++) {
    // This is only in scope in this loop
    let myVariable = 10;
}

console.log(myVariable);