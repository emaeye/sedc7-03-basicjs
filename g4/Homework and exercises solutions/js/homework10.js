// Reversed array - solution 1

var array = [];
var n = 10;

for (i = 1; i <= n; i++) {
    array.push(i); // the numbers from 1 to 10 (or n) are added to the array
}

var reversedArray = [];

for (i = array.length; i > 0; i--) {
    reversedArray.push(i); // the numbers from 10 (or n) to 1 are added to the reversedArray
}

console.log(reversedArray);

// Reversed array - solution 2

var array = [];
var n = 10;

for (i = 1; i <= n; i++) {
    array.push(i);
}

var reversedArray = array.reverse(); // a built-in function in JavaScript hat reverses the elements in an array

console.log(reversedArray);