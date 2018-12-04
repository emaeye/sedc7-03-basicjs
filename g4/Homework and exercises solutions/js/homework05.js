function typeOfVariable(variable) {
    return typeof variable;
}

var typeOfString = typeOfVariable("This is a string.");
console.log(typeOfString);

console.log(typeOfVariable(5));

console.log(typeOfVariable(null));

var bool = true;
console.log(typeOfVariable(bool));

var undefinedVariable;
console.log(typeOfVariable(undefinedVariable));