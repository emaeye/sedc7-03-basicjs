//Write an JavaScript program to convert a 
//length given in feet to meters

var feet = 100;
var feetToMeters = feet * 0.3048;

console.log("======Exercise 1 Result======");
console.log(feet + " feet(s) are equal to " + feetToMeters + " meters.");

//Write an JavaScript program that will read the two 
//sides of a rectangle and calculate its area

var sideA = 5;
var sideB = 10;
var rectangleArea = sideA * sideB;

console.log("======Exercise 2 Result======");
console.log("Rectangle area is equal to " + rectangleArea + " m2.");

//Write an JavaScript program that will 
//calculate area of Circle

var radius = 10; 
var Pi = 3.14;
var circleArea = Pi * (radius * radius);

console.log("======Exercise 3 Result======");
console.log("The area of the circle with the radius of " + radius + " m is " + circleArea + " m2.");

//Write JavaScript that will calculate the price of 30 Phones, where 
//the price of one phone is $119.95 and the tax rate is 5%.

var numberOfPhones = 30;
var phonePrice = 119.95;
var tax = 0.05;

var totalPriceWithoutTax = numberOfPhones * phonePrice;
var total = totalPriceWithoutTax + (totalPriceWithoutTax * tax);

console.log("======Exercise 4 Result======");
console.log("The price with tax on " + numberOfPhones + " phones if the price on one phone is " + phonePrice + "$ is " + total + "$.");

//Write JS program to read two values from input, 
//determine the largest value, and print it

var num1 = 5;  //parseInt(prompt("Enter the first number here: "));
var num2 = 15; //arseInt(prompt("Enter the second number here: "));
var result1;

if (num1 === num2) {
	result1 = "Innputs are equal.";
} else if (num1 > num2) {
	result1 = "Number 1 is bigger then number 2.";
} else if (num2 > num1) {
	result1 = "Number 2 is bigger then number 1.";
} else {
	result1 = "Invalid input!";
}

console.log("======Exercise 5 Result======");
console.log(result1);

//Write a JS program to read three values from input, determine
//the largest value, and print it with an identifying message.

var num1 = 40; //parseInt(prompt("first"));
var num2 = 40; //parseInt(prompt("second"));
var num3 = 30; //parseInt(prompt("third"));
var result2;

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
	alert("One or more inputs are invalid!");
} else {
	if (num1 === num2 && num1 === num3){
		result2 = "All inputs are same.";
	} else if ((num1 > num2 && num1 > num3) || (num2 === num3 && num2 < num1)){
		result2 = "Number 1 is the biggest.";
	} else if ((num2 > num1 && num2 > num3) || (num1 === num3 && num1 < num2)){
		result2 = "Number 2 is the biggest.";
	} else if ((num3 > num2 && num3 > num1) || (num1 === num2 && num1 < num3)){
		result2 = "Number 3 is the biggest.";	
	} else if (num1 === num2 && num1 > num3){
		result2 = "Number 1 and Number 2 are same and bigger then Number 3.";
	} else if (num1 === num3 && num1 > num2){
		result2 = "Number 1 and Number 3 are same and bigger then Number 2.";	
	} else if (num2 === num3 && num2 > num1){
		result2 = "Number 2 and Number 3 are same and bigger then Number 1.";
	}
}

console.log("======Exercise 6 Result======");
console.log(result2);

//Write an algorithm to determine a student’s final grade and  
//indicate whether it is passing or failing. The final grade is 
//calculated as the average of four marks.

var grade1 = 7 //parseInt(prompt("Enter the first grade: "));
var grade2 = 9 //parseInt(prompt("Enter the second grade: "));
var grade3 = 8 //parseInt(prompt("Enter the third grade: "));
var grade4 = 6 //parseInt(prompt("Enter the fourth grade: "));
var result3;

var averageGrade = (grade1 + grade2 + grade3 + grade4) / 4;

if (averageGrade >= 6) {
	result3 = "You have passed with a average score of: " + averageGrade + ".";
} else {
	result3 = "You have failed with a average score of: " + averageGrade + ".";
}

console.log("======Exercise 7 Result======");
console.log(result3);

//Write javascript code that will calculate which Chinese Zodiac a given year is in.
//Formula for Chinese Zodiac caluclation: (year - 4) % 12
//Possible values:
//0 - Rat
//1 - Ox
//2 - Tiger
//3 - Rabbit
//4 - Dragon
//5 - Snake
//6 - Horse
//7 - Goat
//8 - Monkey
//9 - Rooster
//10 - Dog
//11 - Pig

var yearOfBirth = 1989; //parseInt(prompt("Enter your year of birth: "));
var chineseZodiacFormula = (yearOfBirth - 4) % 12;
var result;

switch(chineseZodiacFormula) {
    case 0:
        result = "Rat";
        break;
    case 1:
        result = "Ox";
        break;
    case 2:
        result = "Tiger";
        break;
    case 3:
        result = "Rabbit";
        break;        
    case 4:
        result = "Dragon";
        break;
    case 5:
        result = "Snake";
        break;    
    case 6:
        result = "Horse";
        break;
    case 7:
        result = "Goat";
        break;
    case 8:
        result = "Monkey";
        break;
    case 9:
        result = "Rooster";
        break;
    case 10:
        result = "Dog";
        break;
    case 11:
        result = "Pig";
        break;
    default:
        result = "Invalid Input!";
}

console.log("======Exercise 8 Result======");
if (!isNaN(yearOfBirth)) {
	console.log("Chinese zodiac for people born in the year " + yearOfBirth + " is " + result + ".");
} else {
	console.log(result);
}

//Write an JavaScript program that will calculate the 
//product of first 10 natural numbers

var result = 1;

for (var i = 1; i <= 10; i++) {
	result = result * i;
}

console.log("======Exercise 8 Result======");
console.log("The product of first 10 natural numbers : " + result + ".");

//Write an JavaScript program that will read number from 
//the user and alert him the count of digit 7.

var inputNumber = 27877; //parseInt(prompt("Enter number here: "));;
var digit;
var counter = 0;

while (inputNumber !== 0) {
	digit = inputNumber % 10;
	inputNumber = Math.floor(inputNumber / 10);

	if (digit === 7) {
		counter++;
	}
}

console.log("======Exercise 9 Result======");
console.log("The input number contains " + counter + " digits of number 7.");

//Write an JavaScript program that will read numbers from 
//the user and alert him if number is already entered.

//***Because of the alerts and promts are manditory, the exercise is commented***
//***uncomment the exercise or copy the code in the chrome console, in order to test it***

// var inputs = [];

// while (true) {
//     var input = parseInt(prompt('Enter value: '));

//     for (var i = 0; i < inputs.length; i++) {
        
//         if (inputs[i] === input) {
//             alert(inputs[i] + "is already entered!");
//         }
//     }

//     inputs.push(input);
//     console.log(inputs);
// }

console.log("======Exercise 10 Result======");
console.log("Because of the alerts and promts are manditory, the exercise is commented, \n uncomment the exercise or copy the code in the chrome console, in order to test it.");

//Write a program in JavaScript to read n number of 
//values in an array and display it in reverse order.

var inputs2 = [1,3,5,7,9]
var inputs2Reversed = [];

for (var i = inputs2.length - 1; i >= 0; i--) {
    inputs2Reversed.push(inputs2[i])
}

console.log("======Exercise 11 Result======");
console.log(inputs2Reversed);

//Write a JavaScript program to sort the items of an array.
//Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
//Sample Output : -4,-3,1,2,3,5,6,7,8

var array = [3, 8, 7, 6, 5, -4, 3, 2, 1];

for (var i = array.length - 1; i >= 0; i--) {
    for(var j = 1; j <= i; j++) {
        if(array[j - 1] > array[j]) {
            var temp = array[j - 1];
            array[j - 1] = array[j];
            array[j] = temp;
        }
    }
}

console.log("======Exercise 12 Result======");
console.log("Sorted array is: " + array);

//Write a JavaScript program to check whether a matrix is a diagonal matrix or not. 
//In linear algebra, a diagonal matrix is a matrix in which the entries outside 
//the main diagonal are all zero (the diagonal from the upper left to the lower right).
//Hint: Matrix == 2 dimensional array(array of arrays)

var array = [];

for (var i = 0; i < 10; i++) {
  	array[i] = new Array(10);
}

for (var x = 0; x < 10; x++) {
    for (var y = 0; y < array[x].length; y++) {
        array[x][y] = 0;
    }
}

array[1][4] = 5;

// uncomment code below to print the matrix on the display

// for (var x = 0; x < array.length; x++) {
// 	for (var y = 0; y < array[x].length; y++) {
//     	document.writeln(array[x][y]);
//  	}
// 	document.writeln("<br />")
// }

var flag = true;

for (var x = 0; x < array.length; x++) {
    for (var y = 0; y < array[x].length; y++) {
        if (x !== y) {
            if (array[x][y] !== 0) {
                flag = false;
            }
        }
    }
}
 
console.log("======Exercise 13 Result======");     
console.log("click the arrow in the console under this so u can see the matrix.");   
console.log(array);

if (flag) {
    console.log('Matrix is diagonal.')
} else {
    console.log('Matrix is not diagonal');
}

//Write a JavaScript program to remove duplicate items from an array

var array1 = [1,2,3,4,1,2,5,4,8,5,10,45,2];

for( var j=0; j < array1.length; j++){
    for(var i = j; i < array1.length; i++) {
        
        if(i === j){
            var number = array1[i];
        }
        if (i !== j && number === array1[i]) {
            var index = i;
            array1.splice(index,1);
        }
    }
}

console.log("======Exercise 14 Result======");
console.log("The array without duplacates is: " + array1);

//Write a JavaScript program which accept a number as input and insert dashes (-) between 
//each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

var array = [0,2,5,4,6,8];
var sortArray = [];

for(var j = 0; j < array.length; j++) {
    for(var i = j + 1; i <= array.length; i++){

            if (array[j] % 2 === 0 && array[i] % 2 === 0){
                
                sortArray.push(array[j], "-");
                break;
            }

            else {
                
                sortArray.push(array[j]);
                break;
            }
    }
}

var finalResult = sortArray.join('');

console.log("======Exercise 15 Result======");
console.log("Result is: " + finalResult);

//Write a JavaScript program which prints the elements of the following array. Note: Use nested for loops.
//Sample array: var a = [[1, 2], [8, 11], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

var array = [[1, 2], [8, 11], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
console.log("======Exercise 16 Result======");

for (var i = 0 ; i < array.length ; i++) { 
    console.log("Row: " + i);

    for (var j = 0; j <= array[i].length - 1; j++) {
        console.log(array[i][j])
    }
}

//Write a JavaScript that will find and log the biggest and the
//smallest number in an array

var list = [10,10,9,8,7,10,6,101,-4,6,-1,-120];

var min = Infinity;
var max = -Infinity;

for (let i = 0; i < list.length; i++) {
    if (list[i] > max) {
        max = list[i];
    }
}

for (let i = 0; i < list.length; i++) {
    if (list[i] < min) {
        min = list[i];
    }
}

console.log("======Exercise 17 Result======");
console.log('The smallest number in the array is: ' + min);
console.log('The largest number in the array is: ' + max);
