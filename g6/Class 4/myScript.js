console.log("Script is added!");
// ARRAYS
let myFirstArray = [2, 3, "Bob", true, null];
console.log(myFirstArray); // Our array
console.log(myFirstArray[2]); // Get element
console.log(myFirstArray[9]); // undefined
myFirstArray[9] = "Jill"; // all empty places are undefined
console.log(myFirstArray);
let arrayWithEmpty = [2, 3, "", 3, 5];
console.log(arrayWithEmpty);
console.log(typeof(arrayWithEmpty[2]));
let pets = ["dog", "cat"];
console.log(pets);
pets.push("parrot");
console.log(pets);
pets.pop();
pets.pop();
console.log(pets);
pets.unshift("turtle");
pets.unshift("snake");
console.log(pets);
pets.shift();
console.log(pets);
let howManyPets = pets.length;
console.log(howManyPets);

// LOOPS
// WHILE LOOP
let evenNumbers = [2, 4, 3, 10, 12, 96, 99];
let i = 0;
while(i < evenNumbers.length){
    if(evenNumbers[i] % 2 === 0){
        console.log(evenNumbers[i]);
    }
    i++;
}
// Exercise 1 answer
function sumPow(startNum, endNum){
    let i = startNum;
    let result = 0;
    while(i <= endNum){
        result += Math.pow(i, 2);
        i++;
    }
    return result;
}

console.log(sumPow(101, 150));
console.log(sumPow(1, 5));
// FOR LOOP
evenNumbers = [2, 4, 3, 10, 12, 96, 99];

for(let i = 0; i < evenNumbers.length; i++){
    if(evenNumbers[i] % 2 === 0){
        console.log(evenNumbers[i]);
    } else {
        break;
    }
}

// FOR OF LOOP
for(let number of evenNumbers){
    if(number % 2 === 0){
        console.log(number);
    } else {
        break;
    }
}

// Exercise 2
function numberCount(number, array) {
    let occurences = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] === number){
            occurences++;
        }
    }
    return occurences;
}
let input = parseInt(prompt("Enter a number:"));
let testArray = [2, 5, 6, 3, 5, 5, 2, 5, 7, 8, 2];
console.log(`There are ${numberCount(input, testArray)} occurences of ${input} in the array!`);

// Exercise 3
function calculateTime(numEntered) {
    if (typeof (numEntered) !== "number") {
        return "Please enter a valid number.";
    }
    let hours = Math.floor((numEntered / 60) / 60);
    let minutes = Math.floor((numEntered - ((hours * 60) * 60)) / 60);
    let seconds = Math.floor((numEntered - (((hours * 60) * 60) + (minutes * 60))));
    return `In ${numEntered} there are ${hours}h,${minutes}m,${seconds}s.`;
  }
  let input = parseInt(prompt("Enter a number:"));
  console.log(calculateTime(input));