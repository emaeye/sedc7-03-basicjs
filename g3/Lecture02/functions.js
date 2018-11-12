// function logWeko() {
//   console.log("Wekoslav Stefanovski (43)");
//   console.log("Weko is awesome");
// }

// logWeko();

// console.log("--something else --");

// logWeko();

// console.log("-- something else else ---");

// logWeko();

function add(a, b, c, d) {
  console.log(`The parameter a has a value of ${a}`);
  console.log(`The parameter b has a value of ${b}`);
  console.log(`The parameter c has a value of ${c}`);
  console.log(`The parameter d has a value of ${d}`);

  if (a === undefined) {
    a = 0;
  }
  if (b === undefined) {
    b = 0;
  }
  if (c === undefined) {
    c = 0;
  }
  if (d === undefined) {
    d = 0;
  }

  let sum = a + b + c + d;
  return sum;
}

let first = 10;
let second = 20;

let result = add(first, second);
console.log(`The result of the call of the add function is ${result}`);
