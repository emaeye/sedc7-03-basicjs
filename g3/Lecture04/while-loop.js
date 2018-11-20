// while (true) {
//   console.log("something");
//   console.log("something else");
// }


let index = 0;
while (index < 5) {
  // code-that-changes-condition
  //console.log(`Hello ${index+1}`);
  index +=1;
}

do {
  console.log("something");
} while (false);


//console.log("After the loop");

let question = "How old are you";

let correctAnswer = 0x29;

let answer;

do {
  answer = Number(prompt(question));
  console.log(`You answered ${answer}`);
} while (answer !== correctAnswer);



