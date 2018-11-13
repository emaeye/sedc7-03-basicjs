function add(first, second) {
  return first + second;
}

function output (message) {
  console.log(message);
  document.write(`<h2>${message}</h2>`);  
}


let twoandthree = add(2, 3);
output(twoandthree);

output(add(3, 4));

output("Wekoslav Stefanovski");