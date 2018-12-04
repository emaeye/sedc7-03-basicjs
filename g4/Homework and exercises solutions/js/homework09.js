var numberOfRows = 5;
var row = '';

for (var i = 1; i <= numberOfRows; i++) {
    for ( var j = 1; j <= i; j++) { // nested for loop = a for loop in a for loop;
                                    // the iterator has to be a different variable: var j
        row += '* ';
    }
    console.log(`${row}\n`); // \n is a code for a new line
    row = '';
}

// The inner for loop creates one row of stars, and the outer for loop creates the rows