let list = document.getElementById("list");

list.addEventListener("click", function(event) {
  if (event.altKey) {
    console.log(event.target.textContent.toLowerCase());
  } else if (event.shiftKey) {
    console.log(event.target.textContent.toUpperCase());
  } else {
    console.log(event.target.textContent);
  }
});

let one = document.getElementById("one");

one.addEventListener("click", function(event) {
  console.log("one clicked");
  event.stopPropagation();
});
