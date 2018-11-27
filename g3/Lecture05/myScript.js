let element = document.getElementById("one");

while (element) {
  console.log(element.textContent);
  element = element.nextElementSibling;
}

function liToFrench() {
  let french = ["Une", "Deux", "Trois", "Quatre", "Cinq"];
  let list = document.getElementById("numbers");

  for (let index = 0; index < list.children.length; index++) {
    let listItem = list.children[index];
    listItem.innerText = french[index];
  }

  let nextNumbers = ["Six", "Sept", "Huit", "Neuf", "Dix"];

  for (const number of nextNumbers) {
    let listItem = document.createElement("li");
    listItem.id = number;
    listItem.className = "list-item";
    listItem.textContent = number;
    list.appendChild(listItem);
  }
}

liToFrench();