var sum = 0;

for (var i = 101; i <= 150; i++) {
    var square = Math.pow(i, 2);
    sum += square;
}

console.log(`The sum of the squares is: ${sum}`);