function isDiagonalMatrix(matrix) {
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (i !== j && matrix[i][j] !== 0)
                return false;
        }
    }
    return true;
}

console.log(isDiagonalMatrix([
    [1, 0, 0],
    [0, 2, 0],
    [0, 0, 3]
]));
console.log(isDiagonalMatrix([
    [1, 0, 0],
    [0, 2, 3],
    [0, 0, 3]
]));