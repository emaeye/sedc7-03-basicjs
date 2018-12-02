// Sort the array - solution 1

var array = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

for (var i = array.length; i > 0; i--) {
    for (var j = 1; j <= i; j++) {
        if (array[j - 1] > array[j]) {
            var temp = array[j - 1];
            array[j - 1] = array[j];
            array[j] = temp;
        }
    }
}

console.log(array);


// Sort the array - solution 2

var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
var arr2 = [];
var min = arr1[0];
var pos;
var max = arr1[0];

for (i = 0; i < arr1.length; i++) {
    if (max < arr1[i]) { // with each iteration of the for loop we check if max is less than the current element (arr1[i])
        max = arr1[i]; // if it is, its value is assigned to max
    }
}

for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr1.length; j++) {
        if (arr1[j] != "x") { // we check if the current element is not "x", see below why we have "x" elements
            if (min > arr1[j]) { // with each iteration of the inner loop we check if min is greater than the current element
                min = arr1[j]; // if it is, its value is assigned to min
                pos = j; // and its position is saved in pos
            }
        }
    }

    arr2[i] = min; // we add the min value to the second array, arr2
    arr1[pos] = "x"; // we change the element with the min value in the first array to "x"
    // so that it is no longer a numerical value
    min = max; // we assign the max value to min so that we can get the next lowest value in arr1 in the next iteration of the outer for loop
}

console.log(arr2);