'use strict';

// Selectors
let mainDiv = document.querySelector("#addToMe");
let addBtn = document.querySelector("#addBtn");
let addCountBtn = document.querySelector("#addCountBtn");

// Functionality
let addToPage = () => {
    let newDiv = document.createElement("div"); //<div></div>
    let newHeading = document.createElement("h1");
    let newText = document.createTextNode("We love JS but not that much!");

    newHeading.appendChild(newText); //appends the text to the heading
    newDiv.appendChild(newHeading); //appends the heading to the div <div><h1>We love JS but not that much!</h1></div>
    mainDiv.appendChild(newDiv); //appends newDiv to the mainDiv on the html - adds new elements to the page
    addBtn.ariaDisabled = true;
}

let Counter = () => {
    let newDiv = document.createElement("div"); //<div></div>
    let newHeading = document.createElement("h1");
    let newText = document.createTextNode("");

    newHeading.appendChild(newText);
    newDiv.appendChild(newHeading); 
    mainDiv.appendChild(newDiv);
    addBtn.ariaDisabled = true;
}


// Event listeners
addBtn.addEventListener("Click", addToPage);
addCountBtn.addEventListener("Click", Counter);