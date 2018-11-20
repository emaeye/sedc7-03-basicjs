let numbers = [1, 2, 3, 4, 5, 6, 7];

numbers.push(8);
numbers.push(20, 30, 40);

numbers.unshift(0);

numbers.unshift(-3, -2, -1); // you don't have to use this form

let tail = numbers.pop();

let head = numbers.shift();
