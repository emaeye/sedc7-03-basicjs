// Remove duplicates from array = solution 1

var array = [1, 2, 3, 4, 1, 2, 5, 4, 8, 5, 10, 45, 2];

for (var i = 0; i < array.length; i++) {
    for (var j = i; j < array.length; j++) {
        if (j === i) {
            var number = array[j];
        }

        if (j !== i && number === array[j]) {
            var index = j;
            array.splice(index, 1);
        }
    }
}

console.log(array);


// Remove duplicates from array - solution 2

var numbers = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];

var filteredArray = [];

for (var i = 0; i < numbers.length; i++) {
    if (!filteredArray.includes(numbers[i], 0)) {
        filteredArray.push(numbers[i]);
    }
}

console.log(filteredArray);


// Remove duplicates from array - solution 3

function removeDuplicates(numbers) {
    var x;
    var filteredArray = [];
    var helperObject = {};

    for (x = 0; x < numbers.length; x++) {
        helperObject[numbers[x]] = 0;
    }

    for (x in helperObject) {
        filteredArray.push(x);
    }

    return filteredArray;
}

var numbers = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
result = removeDuplicates(numbers);
console.log(numbers);
console.log(result);