// Max of three numbers - solution 1

function maxOfThree1(num1, num2, num3) {
    var max = -Infinity;

    if (num1 >= max) {
        max = num1;
    }

    if (num2 >= max) {
        max = num2;
    }

    if (num3 >= max) {
        max = num3;
    }

    return max;
}

console.log(maxOfThree1(1, 1, 1));
console.log(maxOfThree1(11, 11, 10));
console.log(maxOfThree1(11, 12, 13));
console.log(maxOfThree1(12, 11, 10));
console.log(maxOfThree1(11, 13, 12));
console.log(maxOfThree1(10, 11, 11));


// Max of three numbers - solution 2

function maxOfThree2(num1, num2, num3) {
    var result;

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        result = 'One or more inputs are invalid!';
    } else {
        if (num1 >= num2 && num1 >= num3) {
            result = num1;
        } else if (num2 >= num1 && num2 >= num3) {
            result = num2;
        } else if (num3 >= num1 && num3 >= num2) {
            result = num3;
        }
    }

    return result;
}

console.log(maxOfThree2(1, 1, 1));
console.log(maxOfThree2(11, 11, 10));
console.log(maxOfThree2(11, 12, 13));
console.log(maxOfThree2(12, 11, 10));
console.log(maxOfThree2(11, 13, 12));
console.log(maxOfThree2(10, 11, 11));


// Max of three numbers - solution 3

function maxOfThree3(num1, num2, num3) {
    var result;

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        result = 'One or more inputs are invalid!';
    } else {
        if (num1 === num2 && num1 === num3) {
            result = 'The numbers are the same.';
        } else if ((num1 > num2 && num1 > num3) || (num2 === num3 && num2 < num1)) {
            result = `${num1} is the largest of the three numbers.`;
        } else if ((num2 > num1 && num2 > num3) || (num1 === num3 && num1 < num2)) {
            result = `${num2} is the largest of the three numbers.`;
        } else if ((num3 > num1 && num3 > num2) || (num1 === num2 && num1 < num3)) {
            result = `${num3} is the largest of the three numbers.`;
        } else if (num1 === num2 && num1 > num3) {
            result = `${num1} and ${num2} are equal and greater than ${num3}.`;
        } else if (num1 === num3 && num1 > num2) {
            result = `${num1} and ${num3} are equal and greater than ${num2}.`;
        } else if (num2 === num3 && num2 > num1) {
            result = `${num2} and ${num3} are equal and greater than ${num1}.`;
        }
    }

    return result;
}

console.log(maxOfThree3(1, 1, 1));
console.log(maxOfThree3(11, 11, 10));
console.log(maxOfThree3(11, 12, 13));
console.log(maxOfThree3(12, 11, 10));
console.log(maxOfThree3(11, 13, 12));
console.log(maxOfThree3(10, 11, 11));


// Max of three numbers - solution 4

function maxOfThree4(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

console.log(maxOfThree4(1, 1, 1));
console.log(maxOfThree4(11, 11, 10));
console.log(maxOfThree4(11, 12, 13));
console.log(maxOfThree4(12, 11, 10));
console.log(maxOfThree4(11, 13, 12));
console.log(maxOfThree4(10, 11, 11));