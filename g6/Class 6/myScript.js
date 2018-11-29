console.log("This script works great!");

// HTML HANDLER 
function funcOne(){
    console.log("HTML handler!");
}

// TRADITIONAL HANDLER
function funcTwo(){
    console.log("Traditional handler!");
}
let myBtn = document.getElementById("myBtn");
myBtn.onclick = funcTwo;
//myBtn.onmouseover = funcTwo;

function funcThree(){
    console.log("The input!");
}
let myInput = document.getElementById("myInput");

function funcFour(){
    console.log(myInput.value)
}

let myOtherBtn = document.getElementById("myOtherBtn");
myOtherBtn.onclick = funcFour;
// myInput.onkeydown = funcThree;
// myInput.onkeyup = funcThree;

document.onclick = funcOne;
// Exercise 1
function exercise1function(){
    alert("Hello Dragan!");
}
let exercise1btn = document.getElementById("exercise1btn");
exercise1btn.onclick = exercise1function;

// Event listeners, input values and event propagation
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let containerDiv = document.getElementById("container");
let header = document.getElementsByTagName("h1")[0];
btn1.addEventListener("click", function(e){
    console.log(e.target);
    header.innerText = "We changed this!";
    //console.log("Hey! Button 1 here!");
}, true);
btn2.addEventListener("click", function(){
    console.log("Hey! Button 2 here!");
}, true);

containerDiv.addEventListener("click", function(){
    console.log("Hey! Container Div here!");
}, true);
document.addEventListener("click", function(){
    console.log("Hey! DOCUMENT KING here!");
}, true);

// Exercise 2
let button = document.getElementById("myButton");
let input = document.getElementById("myInput2");
let header = document.getElementById("myHeader");

button.addEventListener("click", function(){
    //let name = input.value;
    if(input.value === ""){
        header.innerText = "NO NAME ENTERED!";
    } else{
        header.innerText = `Hello there ${input.value}`;
        input.value = ""; // clear the input
    }
});