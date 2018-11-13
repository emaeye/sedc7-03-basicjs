let add = function (x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

let dontKnow;

if (Math.random()>0.5) {
  dontKnow = add;
} else {
  dontKnow = multiply;
}

(function (){
  let nonGlobal = 3;
  console.log("Immediately invoked");
})();


let square = function (num) {
  return num**2;
}

// next class material, don't worry

[1, 2, 3, 4].map(num => num**2)


let square2 = num => num**2;




