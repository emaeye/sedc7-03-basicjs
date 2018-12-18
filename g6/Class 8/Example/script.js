// Global array that keeps the groceries objects
let groceries = [];

// A template for one Grocery
function Grocery(name, quantity, price) {
  this.name = name;
  this.quantity = quantity;
  this.price = price;
  this.getFullPrice = function () {
    return price * quantity;
  }
}

// An object that holds all our functions ( now methods ) for manipulating groceries
// We use this so we can have one place where we keep all functions
let groceriesService = {
  addGrocery: function(name, quantity, price) {
    if (name.length < 2 || quantity == 0) {
      return "Failed to add grocery!";
    }
    let newGrocery = new Grocery(name, quantity, price);
    groceries.push(newGrocery);
    return "Grocery is added!";
  },
  printGroceries: function(element) {
    element.innerHTML = "";
    for (const grocery of groceries) {
      if(grocery === null){ continue; }
      element.innerHTML += `<li>${grocery.name}: 
        ${grocery.quantity} x ${grocery.price}$ = 
        ${grocery.getFullPrice()}$</li>`;
    }
  },
  deleteGrocery: function(groceryName){
    for (let i = 0; i < groceries.length; i++) {
      if(groceries[i] !== null && groceryName === groceries[i].name){
        groceries[i] = null;
        return `The item ${groceryName} was deleted!`;
      }
    }
    return `There was no item like ${groceryName}!`;
  }
}

// Selectors that we need
let radioButtons = document.getElementById("options").getElementsByTagName("input");
let groceryForm = document.getElementById("groceryForm");
let deleteDiv = document.getElementById("delete");
let resultDiv = document.getElementById("result");

// Event listeners
// Listeners for radio buttons that hide and show the divs
radioButtons[0].addEventListener("click", function(){
  // This event listener shows the form and hide the delete
  groceryForm.style.display = "block";
  deleteDiv.style.display = "none";
});

radioButtons[1].addEventListener("click", function(){
  // This event listener hides the form and shows the delete
  groceryForm.style.display = "none";
  deleteDiv.style.display = "block";
});

// This event listener takes the values from the inputs
// Creates the object and adds in the array
// Shows all groceries on the screen
groceryForm.getElementsByTagName("button")[0].addEventListener("click", function(){
  // Here we get the values from the inputs
  let inputs = groceryForm.getElementsByTagName("input");
  let name = inputs[0].value;
  let quantity = inputs[1].value;
  let price = inputs[2].value;
  // Here we add the values to the addGrocery function
  // And show the message that is returned from the function in a result header
  resultDiv.children[0].innerText = groceriesService.addGrocery(name, quantity, price);
  // Here we print the groceries from the array on the screen
  groceriesService.printGroceries(resultDiv.children[1]);
  // Here we empty the inputs so we can add new values
  inputs[0].value = "";
  inputs[1].value = ""; 
  inputs[2].value = "";
});

// This is the delete button event listener
// It takes an input value, finds it and delete it
// Then it shows the groceries
deleteDiv.getElementsByTagName("button")[0].addEventListener("click", function(){
  // Here we get the name value from the input
  let name =  deleteDiv.getElementsByTagName("input")[0].value;
  // Here we try to delete an item with that name
  // And show the return message in the result header
  resultDiv.children[0].innerText = groceriesService.deleteGrocery(name);
  // Here we show all the groceries from the array
  groceriesService.printGroceries(resultDiv.children[1]);
  // Here we clear the delete input
  deleteDiv.getElementsByTagName("input")[0].value = "";
});