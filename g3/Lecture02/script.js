let number = 2;
let string = "2";

// strict comparisson between an number and a string containing a number
console.log(`number === string => ${number === string}`);

// non-strict comparisson between an number and a string containing a number
console.log(`number == string => ${number == string}`);

// strict comparisson between an number and a string containing a number, converted to a number
// Now there are numbers on both sides of the ===
console.log(`number === Number(string) => ${number === Number(string)}`);

// non-strict comparisson between an number's string and a string containing a number
console.log(`number.toString() == string => ${number.toString() == string}`);

// strict comparisson between an number's string and a string containing a number
// Now there are strings on both sides of the ===
console.log(`number.toString() === string => ${number.toString() === string}`);