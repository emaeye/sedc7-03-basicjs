console.log("It WORKS! Wohoo!");
let myBtn = document.getElementById("myDiv").lastElementChild;
let myBtn1 = document.getElementsByTagName("button")[0];
let myBtn2 = document.querySelector("button");
let myInput = myBtn.previousElementSibling;

function saySomething(){
    console.log("Hello SEDC!");
}

myInput.onclick = saySomething;
myBtn.onclick = saySomething;

// exercise 1
let exercise1Btn = document
.getElementsByTagName("button")[0];

function fullName(){
    alert("Hello Trajan");
}

exercise1Btn.onclick = fullName;
function saySomething(text){
    console.log(text);
}
let myButton = document.getElementsByTagName("button")[0];
let myInputExample = document.getElementsByTagName("input")[0];

myButton
.addEventListener("click", function(e){
    let text = myInputExample.value;
    console.log(text);

    console.log("The BUTTON is clicked");
    e.target.innerText = "Changed name";
    console.log(e);
    console.log("This is inside the listener!");
    saySomething("Say Something Function is called!");
    saySomething("Calling the function again!");
}, true);

let myDiv = document.getElementById("myDiv");
myDiv
.addEventListener("click", function(){
    console.log("The DIV is clicked");
}, true);
document.addEventListener("click", function(){
    console.log("The DOCUMENT is clicked");
}, true);

// Exercise 2
let heder = document.getElementById("heder");
let input = document.getElementById("input");
let batn = document.getElementById("batn");

batn.addEventListener("click", function(){
    let text = input.value;
    if(input.value===""){
        heder.innerText = "Error";
    } else {    
        input.value = "";
        heder.innerText = `Zdravo ${text}`;
    }
    
})


// Exercise 3
let phoneInputName = document.getElementById("phoneName");
let phoneInputNumber = document.getElementById("phoneNumber");
let phoneButton = document.getElementById("phoneButton");
let phoneList = document.getElementById("phoneList");

phoneButton.addEventListener("click", function(){
    let name = phoneInputName.value;
    let number = phoneInputNumber.value;
    phoneList.innerHTML += `
    <li>${name}: ${number}</li>
    `
    phoneInputName.value = "";
    phoneInputNumber.value = "";
});



