console.log("Hello world")

myNumber = 5;

console.log(myNumber);

console.log("Ben");

console.info("Phillips");

console.warn("UK");

console.error("Libra");

let myCar = "RangeRover";
let myModel = "Velum";
console.log("my fav car is: " + myCar + " and the model is: " + myModel);

let myDog = "Medium";
let myBreed = "Cocker Spaniel";
console.log(`my fav dog is ${myDog} and the breed is ${myBreed}`);

console.log("Scrubadub %c dubdubdubdub.","color: orange;font-family:fantasy; font-style: Bold; background-color: black;padding: 10px");

let myNullValue = null;
console.log(myNullValue);
console.log(typeof myNullValue);

// This is currently undefined
let myUndefinedValue;
console.log(typeof myUndefinedValue);
console.log(myUndefinedValue);

// In JS == only checks value
console.log(myNullValue == undefined);
// comes back true

// === checks type AND value
console.log(myNullValue === undefined);
// comes back false

let person ="John";
