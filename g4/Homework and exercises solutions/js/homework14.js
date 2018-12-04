var number = 122344566789;
var stringInput = number.toString();
var result = [stringInput[0]];

for (var i = 1; i < stringInput.length; i++) {
    if ((stringInput[i - 1] % 2 === 0) && (stringInput[i] % 2 === 0)) {
        result.push('-', stringInput[i]);
    } else {
        result.push(stringInput[i]);
    }
}

console.log(result.join(''));