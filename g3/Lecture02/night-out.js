let ammountEntered = prompt("How much money do you have");

/* We can do an explicit comparisson to the null value returned from the user pressing cancel */
// if (ammountEntered === null) {
/* Or we can use null's falsy behaviour */
if (!ammountEntered) {
  console.log("User pressed Cancel or did not enter ammount");
} else {
  console.log(`You entered ${ammountEntered}`);
  let ammount = Number(ammountEntered);

  // todo: ensure that ammount is a valid number
  // Don't forget that 0.000001 and -10 are also valid numbers, but invalid ammounts
  if (Number.isNaN(ammount)) {
    console.log("You entered an invalid number");
  } else {
    console.log(`Have fun spending ${ammount} denars`);
  }
}