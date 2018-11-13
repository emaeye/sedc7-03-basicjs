function noArguments() {
  console.log(arguments);
}

noArguments();

noArguments(1, 2, "tri", 4);

function add (a, b, c = 0, d = 0) {
  return a + b + c + d;
}

output(add(1, 2, 3, 4));

output(add(1, 2, 3));

output(add(1, 2));