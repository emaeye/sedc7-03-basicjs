console.log("The script is working!");
// Collections
let myFirstCollection = [23, true, null, undefined, "Trajan"];
console.log(myFirstCollection);
console.log(myFirstCollection.length);
console.log(myFirstCollection[4]);
console.log(myFirstCollection[950]);
myFirstCollection[950] = 5;
console.log(myFirstCollection);
console.log(myFirstCollection.length);

// Adding and removing things from a collection
myFirstCollection.push("Zoki", 56);
myFirstCollection.unshift("Zoki", 56);
myFirstCollection.pop();
myFirstCollection.shift();
console.log(myFirstCollection);

// Loops

// Exercise 1
let i = 101;
let result = 0;
// result = 6;
// result = result + 6; // 11
// result += 6; // 17
while(i <=150){
    result += Math.pow(i,2);
    i++;
}

// For and  break/continue
console.log(result);
let numbers = [2, 5, 6, 7, 9, 10, 4, 100];
for(let i = 0; i < numbers.length; i++){
    console.log(`The counter is ${i} now!`); 
    //console.log("The coutner is " + i + " now!");
    if(numbers[i] >= 10){
        //break;
        continue;
    }
    console.log(`The number is: ${numbers[i]}`);
}

// For of and break/continue
for(let number of numbers){
    if(number >= 10){
        //break;
        continue;
    }
    console.log(`The number is: ${number}`);
}

// Exercise 2
let arrayWithNumbers = [2,3,4,5,6,2,3,4,5,1,2,3,100,4,100];

function findNumberInArray(number, array){
    let brojach = 0;
    for(let num of array){
        if(num === number){
            brojach++;
        }
    }
    return brojach;
}
let userInput = parseInt(prompt("Please enter number:"));
alert(`${userInput} was found \n ${findNumberInArray(userInput, arrayWithNumbers)} times in the array!`);

