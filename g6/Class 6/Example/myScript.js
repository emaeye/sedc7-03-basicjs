// // global variables
let groceries = [];

// selectors
let resultDiv = document.getElementById("result").firstElementChild;
let messageDiv = document.getElementById("message");
let addItemRow = document.getElementById("addItem");
let findItemRow = document.getElementById("findItem");
let deleteItemRow = document.getElementById("deleteItem");
let getGroceriesRow = document.getElementById("getGroceries");

function showGroceriesList(element) {
  if(groceries.length === 0){
    return "No groceries on your list yet!"
  }
  element.innerHTML = "";
  for(let listItem of groceries) {
    if (listItem !== null) {
      element.innerHTML += `<li>${listItem}</li>`;
    }
  }
  return "Your Groceries:"
}

function addToGroceriesList(item) {
  if (typeof (item) === "string" && item.length > 1) {
    groceries.push(item);
    return `You have added ${item} to the list!`;
  } else {
    return `The item ${item} was not added to the list. sorry.`;
  }
}

function checkForItemInGroceriesList(item) {
  for (let listItem of groceries) {
    if (listItem === item) {
      return `The item ${item} was found!`;
    }
  }
  return `There was no ${item} item in the list!`;
}

function deleteItemFromGroceries(item) {
  for(let i = 0; i < groceries.length; i++) {
    if (groceries[i] === item) {
      groceries[i] = null;
      return `The item ${item} was deleted!`
    }
  }
  return `No item like ${item} to delete!`;
}

// event listeners
addItemRow.querySelector("button").addEventListener("click", function(){
  let message = addToGroceriesList(addItemRow.querySelector("input").value);
  addItemRow.querySelector("input").value = "";
  messageDiv.innerText = message;
  showGroceriesList(resultDiv);
});

findItemRow.querySelector("button").addEventListener("click", function(){
  let message = checkForItemInGroceriesList(findItemRow.querySelector("input").value);
  findItemRow.querySelector("input").value = "";
  messageDiv.innerText = message;
  showGroceriesList(resultDiv);
});

deleteItemRow.querySelector("button").addEventListener("click", function(){
  let message = deleteItemFromGroceries(deleteItemRow.querySelector("input").value);
  deleteItemRow.querySelector("input").value = "";
  messageDiv.innerText = message;
  showGroceriesList(resultDiv);
});

getGroceriesRow.querySelector("button").addEventListener("click", function(){
  console.log(resultDiv);
  let message = showGroceriesList(resultDiv);
  messageDiv.innerText = message;
});