let numbers = [1, 7, 5, 2, 3, 4, 6, 8, 0];

let sum = 0;

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  sum += element;
}

console.log(`The sum using regular for is ${sum}`);

sum = 0;

for (const element of numbers) {
  sum += element;
}

console.log(`The sum using for-of is ${sum}`);

function getEvens(numbers) {
  let result = [];
  for (const element of numbers) {
    if (element % 2 === 0) {
      result.push(element);
    }
  }
  return result;
}

function getSquares(numbers) {
  let result = [];
  for (const element of numbers) {
    let square = element * element;
    result.push(square);
  }

  return result;
}

function printArray(array) {
  console.log(`[${array.join(",")}]`);
}

printArray(numbers);
printArray(getEvens(numbers));

// "Minimized function"
// function sq(n) {
//   let r = [];
//   for (let e of n)r.push(e*e);
//   return r;
// }