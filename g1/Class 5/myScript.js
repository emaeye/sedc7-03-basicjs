// Code before class

// for - Struktura sto broi
let arrNumbers = [2,4,5,-5,7,3,0,-8];
let length = arrNumbers.length;
let maximum = -Infinity;
let minimum = Infinity;
for(let brojac = 0; brojac < arrNumbers.length; brojac++){
    //console.log(`broj na red: ${arrNumbers[brojac]}`);
    console.log(`${brojac+1}. Dragan Gelevski`)
    if(arrNumbers[brojac] > maximum){
        maximum = arrNumbers[brojac];
        //console.log(`Check Max: ${maximum}`);
    }
    if(arrNumbers[brojac] < minimum){
        minimum = arrNumbers[brojac];
        //console.log(`Check Min: ${minimum}`);
    }
}

// Selectors and traversing through DOM
//console.log("The script works!");
let divWithId = document.getElementById("prv");
//console.log(divWithId);
let divsWithClass = document.getElementsByClassName("someDiv");
//console.log(divsWithClass);
let divWithClassFirst = divsWithClass[0];
//console.log(divWithClassFirst);
let paragraphs = document.getElementsByTagName("p");
//console.log(paragraphs);
let nextDiv = divWithId.nextElementSibling.nextElementSibling.previousElementSibling;
// console.log(nextDiv);
let parent = divWithId.parentElement.parentElement;
// console.log(parent);
let body = document.getElementsByTagName("body")[0];
let childrenOfBody = body.children;
let firstChild = body.firstElementChild;
let lastChild = body.lastElementChild;
// console.log(lastChild);
let specialSelect = divWithId.getElementsByClassName("someDiv");
console.log(specialSelect);

// Editing content and text
// let myDiv2 = document.getElementsByTagName("h1")[0];
// let title2 = document.getElementById("prv").firstElementChild;
let myDiv = document.getElementById("prv");
let title = myDiv.firstElementChild;
console.log(title.textContent);
console.log(title.innerText);
// setTimeout(function(){
//     title.innerText = "This is a new text!";
// }, 2000);
// setTimeout(function(){
//     title.innerText += " And we are learning JS as well!";
// }, 4000);
let input = prompt("Enter a name:");
myDiv.innerHTML += `<h1> Hello ${input}</h1>`;