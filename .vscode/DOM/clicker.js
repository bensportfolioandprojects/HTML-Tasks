'use strict';

let counter = 0;

// Selectors
let mainDiv = document.querySelector("#addToMe");
let savDiv = document.querySelector("#saveToMe");
let addBtn = document.querySelector("#addBtn");
let savBtn = document.querySelector("#saveBtn");

// Functionality
let addToPage = () => {
    counter++;

    let newDiv = document.createElement("div");
    let newText = document.createTextNode(counter);

    newDiv.appendChild(newText);
    mainDiv.appendChild(newDiv);
}

let saveToPage = () => {
    let entry = document.createElement("div");
    let newText = document.createTextNode(counter);
    
    entry.appendChild(newText);
    savDiv.appendChild(newText);
}

// Event listeners
addBtn.addEventListener("click", addToPage);
savBtn.addEventListener("click", saveToPage);