let counter = 0;

function showClicked(increment) {
  counter += increment;
  document.getElementById("result").textContent = counter;
}

function goUp () {
  showClicked(1);
}

let buttonUp = document.getElementById("click-up");
buttonUp.addEventListener("click", goUp)


let buttonDown = document.getElementById("click-down");
buttonDown.addEventListener("click", function () {
  showClicked(-1);
});