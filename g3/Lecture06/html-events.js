// let counter = 0;

// function showClicked() {
//   counter += 1;
//   document.getElementById("result").textContent = counter;
// }

// let button = document.getElementById("clicker");
// button.onclick = showClicked;

// let otherButton = document.getElementById("other-clicker");
// otherButton.onclick = showClicked;

let counter = 0;

function showClicked(increment) {
  counter += increment;
  document.getElementById("result").textContent = counter;
}

function goUp () {
  // console.log("Button clicked");
  showClicked(1);
}

let buttonUp = document.getElementById("click-up");
buttonUp.onclick = goUp;


let buttonDown = document.getElementById("click-down");
buttonDown.onclick = function () {
  // console.log("Button clicked");
  showClicked(-1);
};