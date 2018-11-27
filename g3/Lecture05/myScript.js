let element = document.getElementById("one");

while (element) {
  console.log(element.textContent);
  element = element.nextElementSibling;
}
