'use strict';

// // Break down arrays and objects into smaller pieces
// // long form
// const myarray = ["a", "b", "c", "d"];
// console.log(myArray[0]);
// console.log(myArray[1]);

// // destructuring
// const [ele1, ele2, ele3, ele4] = myArray;
// console.log(ele1);
// console.log(ele2);
// console.log(ele3, ele4);

// const myNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [a, b, c, ...remaining] = myNumArray;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(remaining);

// // can skip values, skipped wont be in final array
// const myNumArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [g,h,,,,i,j, ...theRest] = myNumArray;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(theRest);

// // the original arrays remain intact after destructuring
// console.log(myNumArray2);

// // myNumArray2.push(10);
// myNumArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(myNumArray2);

// myNumArray2[2] = 10

// console.log(myNumArray2);

// const var1 = 1;
// const var2 = 2;
// const var3 = 3;

// const myNewConstArray = [var1, var2, var3];

// myNewConstArray[0] = 15;

// console.log(myNewConstArray);

// const person = {
//     firstName: "Ben",
//     lastName: "Phillips",
//     age: 25,
//     jobTitle: "Developer"
// }

// let [firstName, lastName, age, jobTitle] = person;
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(jobTitle);

// Task 

let user = {
    name: "John",
    years: 30
    };
  
  // your code to the left side:
  let {name, years: age, isAdmin = false} = user
  alert( name ); // John
  alert( age ); // 30
  alert( isAdmin ); // false
