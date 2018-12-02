var input = prompt("Please enter a number.");
var inputNumber = parseInt(input);
//var inputNumber = Number(input);

var arrayOfNumbers = [];
while (inputNumber > 0) {
    var lastNum = inputNumber % 10;
    arrayOfNumbers.unshift(lastNum);
    //var newNum = inputNumber - lastNum;
    //inputNumber = newNum / 10;
    inputNumber = (inputNumber - lastNum) / 10;
}

console.log(`The digits in the number are: ${arrayOfNumbers.join(', ')}`);