let numbers = [1, 7, 5, 2, 3, 4, 6, 8, 0];

let index = 0;

while (index < numbers.length) {
  let element = numbers[index];
  let square = element * element;
  // console.log(`The square of ${element} is ${square}`);

  index += 1;
}

// let max = numbers[0];
// index = 1;

// do {
//   let element = numbers[index];
//   if (max < element) {
//     console.log(`Setting ${element} as max instead of ${max}`);
//     max = element;
//   }
//   index +=1;
// } while (index < numbers.length)

let max = Number.NEGATIVE_INFINITY;
index = 0;

while (index < numbers.length) {
  let element = numbers[index];
  if (max < element) {
    // console.log(`Setting ${element} as max instead of ${max}`);
    max = element;
  }
  index += 1;
}
// let numbers = [1, 7, 5, 2, 3, 4, 6, 8, 0];

let sum = 0;
index = 0;

while (index < numbers.length) {
  // 0+1=1
  // 1+7=8
  // 8+5=13
  // 13+2=15
  let element = numbers[index];
  sum += element;
  index += 1;
}

// console.log(`The sum total of [${numbers.join()}] is ${sum}`);

let digitis = 1055045753;

function splitDigits(number) {
  let result = [];
  while (number !== 0) {
    let units = number % 10;
    result.unshift(units);
    number = Math.floor(number / 10);
  }
  return result;
}

let digits = splitDigits(digitis);
console.log(digitis);
console.log(digits.join("-"));