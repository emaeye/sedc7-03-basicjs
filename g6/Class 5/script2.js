// Selectors
let myFirstSelectedElement = document.getElementById("main");
console.log(myFirstSelectedElement);
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);
console.log(paragraphs[0]);
let paragraphWithClass = document.getElementsByClassName("second")[0];
console.log(paragraphWithClass);
console.log(paragraphWithClass[0]);
let myParagraphs = document.querySelectorAll(".myParagraph");
let myFirstParagraph = document.querySelector(".myParagraph")
console.log(myParagraphs);
console.log(myFirstParagraph);

// Traversing through the DOM
let myHeader = myFirstSelectedElement.firstElementChild;
console.log(myHeader);
console.log(myFirstSelectedElement.children);
console.log(myHeader.parentElement.parentElement.parentElement);
let myHeaderSibling = myHeader.nextElementSibling;
console.log(myHeaderSibling);

// Getting and changing text
let myHeaderSiblingText = myHeaderSibling.textContent;
console.log(myHeaderSiblingText);
console.log(myHeaderSibling.innerText);
// Function we use to call this 2 seconds later
setTimeout(function(){
    myHeaderSibling.innerText = "Something NEW inside here!";
},2000);
let input = prompt("What is your name?");
setTimeout(function(){
    for(let i = 0; i < 5; i++){
        myFirstSelectedElement.innerHTML += `
        <h3> Hello ${input}</h3>
        <p> This is a new paragraph </p>
        `
    }
},4000);

// Exercise 1
let firstDiv = document.getElementById("first");
let firstDiv2 = document.getElementsByTagName("div")[0];
console.log(firstDiv);
console.log(firstDiv2);
let paragraphs = document.getElementsByTagName("p");
let paragraphs2 = document.querySelectorAll("p");
console.log(paragraphs);
console.log(paragraphs2);
let lastDiv = document.getElementsByTagName("div")[2];
let lastDiv2 = firstDiv.nextElementSibling.nextElementSibling;
let allDivs = document.getElementsByTagName("div");
let lastDiv3 = allDivs[allDivs.length - 1];
console.log(lastDiv);
console.log(lastDiv2);
console.log(lastDiv3);
let h3InLast = lastDiv.getElementsByTagName("h3")[0];
let h1InLast = lastDiv.querySelector("h1");
console.log(h3InLast);
console.log(h1InLast);
let secondDiv = firstDiv.nextElementSibling;
let secondDivText = secondDiv.innerText;
console.log(secondDivText);
let textElement = secondDiv.getElementsByTagName("text")[0];
textElement.innerText += " text!";
h3InLast.innerText = "This is some new text!";
h1InLast.innerText = "This is some other new text!";



























