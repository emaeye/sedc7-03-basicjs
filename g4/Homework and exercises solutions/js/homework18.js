var max = -Infinity;
var arrayOfNumbers = [];

for (var i = 1; i <= 10; i++) { // the first loop will ask us 10 times to enter a number, and will save that number in the array
    var input = prompt("Enter a number:");
    var inputNumber = Number(input);
    arrayOfNumbers.push(inputNumber);
}

for (var i = 0; i < arrayOfNumbers.length; i++) { // the second for loop will iterate through the array and find the largest number in the array
    if (arrayOfNumbers[i] > max) {
        max = arrayOfNumbers[i];
    }
}


console.log(`The largest number is ${max}`);