'use strict';

// let obj = {property: "value"};
// let ben = {firstName: "Ben", lastName: "Phillips", age: 25, jobTitle: "Developer"};

// let richard = new Object();
// richard["firstName"] = "Richard";
// richard["lastName"] = "de Young";
// richard["age"] = ""

// let jehad = new Object();
// jehad.firstName ="Jehad";
// jehad.lastName ="AbdelBaqi";

// console.log(`${ben.firstName}'s job is: ${ben["jobTitle"]}`);
// console.log(`${richard.firstName}'s job is: ${ben["jobTitle"]}`);
// console.log(`${jehad.firstName}'s job is: ${ben["jobTitle"]}`);

// // for in loop
// // this will loop through the propertise of an object
// for (let key in jehad) {
//     console.log(`${key}: ${jehad[key]}`);
// }

// // for of loop
// // this will loop through the values of an object
// for (let value of Objectjehad) {
//     console.log(value);
// }


// // // Javascript arrays
// // let myArray = ["ben", "richard", "Jehad"];

// // Creates an empty array
// let myEmptyArray = Array();

// // create an array with a specific size
// let mySpecificSizeArray = Array(10);


// for(let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }

// for (let value of myArray) {
//     console.log(value);
// }

let darthVader = {allegiance: "Empire", 
weapon: "Lightsaber",
sith: "true"};
console.log(darthVader);


console.log(`Darth Vader's allegiance is to the ${darthVader.allegiance}`);
console.log(`Darth Vader's weapon of choice is the ${darthVader.weapon}`);
console.log(`Darth Vader is a sith? ${darthVader.sith}`);
console.log(`Darth Vader is a jedi? ${darthVader.sith ? "false" : "true"}`);

let myArray = ["hello", "everyone"];
console.log(myArray.length);
console.log(myArray.push("Obi Wan"));
console.log(myArray.push("is"));
console.log(myArray.push("the greatest"));
console.log(myArray.length);
console.log(myArray.shift);

for(let eachElement of myArray) {
    console.log(eachElement);
}

