let scoreMath = 20;
let scoreBiology = 50;
let scoreEnglish = 40;

let mathTotal = 40;
let biologyTotal = 60;
let englishTotal = 100;

let limit = 0.5;

// We can combine operators as much as we need
// In any place where we have a value, we can put in an expression using an operator
// And the process can go on as long as we want to

// let hasPassed = (scoreMath+scoreBiology+scoreEnglish) > (limit * (mathTotal + biologyTotal + englishTotal));
//-----------------

// But, just because we can doesn't mean we should
// This code is much more clear and readable
let totalScore = scoreMath + scoreBiology + scoreEnglish;
let totalPoints = mathTotal + biologyTotal + englishTotal;
let passingScore = limit * totalPoints;

let hasPassed = totalScore > passingScore;

console.log(`Has the student passed the test: ${hasPassed}`);