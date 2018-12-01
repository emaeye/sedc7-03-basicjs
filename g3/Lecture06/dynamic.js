let button = document.getElementById("create");

button.addEventListener("click", function() {
  makeOtherButtons();
});


function makeOtherButtons() {
  let numButtons = document.getElementById("numButtons").valueAsNumber;
  let container = document.getElementById("container");
  container.innerHTML="";
  for (let index = 0; index < numButtons; index++) {
    let button = document.createElement("button");
    button.textContent = `Button #${index+1}`;
    button.addEventListener("click", function (){
      console.log(`I'm button #${index+1}`);
    })
    container.appendChild(button);
  } 
}