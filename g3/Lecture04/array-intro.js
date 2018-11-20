let monday = "Понеделник";
let tuesday = "Вторник";


let days = ["Понеделник", "Вторник", "Среда", "Четврток", "Петок"]

// console.log(days); // prints the whole array

// console.log(days.length);
// console.log(days[0]); // Понеделник
// console.log(days[1]); // Вторник

let empty = [];
let single = ["only-element"];

let mixed = [
  1, // number 
  "Понеделник",  // string
  false,  // boolean
  null,  // null
  [1, 3, "пет", 7]  // array
];

// console.log(mixed.length)
// console.log(mixed[4])
// console.log(mixed[4].length)
// console.log(mixed[4].length[2])
// console.log(mixed[4][2])
// console.log(mixed[4][3])


let one = 1;
let three = 3;
let five = 5;

let odds = [one, three, five, one + three + five];

let subarray = mixed[4];
// console.log(subarray);
// console.log(subarray[3]);

let matrix = [
  [1, 2, 3, 4],
  [5, 6, ["a", "b", "c"], 8]
]

// console.log(matrix[1][2][1]);

let row = matrix[1];
let item = row[2];
let value = item[1];
// console.log(value);

let index = 0;
// console.log(odds[index]);
// console.log(odds[index+1]);

let odder = [1, 3, "pet", 8];

odder[2] = 5;
odder[3] = 7;
odder[odder.length] = 9
