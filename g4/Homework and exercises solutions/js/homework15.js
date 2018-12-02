var array = [
    [1, 2],
    [8, 11],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];

for (var i = 0; i < array.length; i++) {
    console.log("Row " + i);

    for (var j = 0; j < array[i].length; j++) {
        console.log(" " + array[i][j]);
    }
}