// Real life examples
// Function for adding items to a grocerie list
let groceries = ["Bread", "Milk", "Butter"];
function addToGroceriesList(item){
    if(typeof(item) === "string"){ // Checking if item is string
        groceries.push(item);
        console.log(`You have added ${item} to the list!`);
    } else {
        console.log(`The item ${item} was not added to the list. Sorry.`);
    }
}
// Calling the adding function
addToGroceriesList("Salad");

// Function that reads all groceries from the list
function showGroceriesList(){
    let i = 0;
    let listNum = 1; // Counter for the list item numeration
    console.log("My groceries list:");
    while(i < groceries.length){
        if(groceries[i] !== null){ // a check to not show deleted items
            console.log(`${listNum}. ${groceries[i]}`); // numbering and writing
            listNum++; // We only add one when the grocerie is not deleted (null)
        }
        i++;
    }
}
// Calling the showing function
showGroceriesList();

// Function that checks for item in the groceries list
function checkForItemInGroceriesList(item){
    for(let listItem of groceries) {
        if(listItem === item){ // We check if the item is the inputted item
            console.log(`The item ${item} was found!`);
            return listItem; // return always goes out of the function
        }
    }
    console.log(`There was no ${item} item in the list!`);
    return null; // This will not execute if the previous return is executed
}
// Calling the check item function
let searchedItem = checkForItemInGroceriesList("Butter"); // "Butter"
let searchedItem2 = checkForItemInGroceriesList("Sugar"); // null

// Function that deletes an item from groceries
function deleteItemFromGroceries(item){
    for(let i = 0; i < groceries.length; i++){
        if(groceries[i] === item){
            console.log("Item has been deleted!");
            groceries[i] = null; // we set the deleted item to null
            return true;
        }
    }
    return false;
}
// Calling the delete function
deleteItemFromGroceries("Salad"); // true
deleteItemFromGroceries("oil"); // false
