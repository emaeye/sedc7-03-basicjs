let numbers = [3, 7, 4, 9];

function fillNumbersInList() {
  let list = document.getElementById("list");
  for (const number of numbers) {
    let listItem = document.createElement("li");
    listItem.textContent = number;
    list.appendChild(listItem);
  }
}

function getSum(numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }  
  return sum;
}

function displaySum() {
  let sum = getSum(numbers);
  let list = document.getElementById("list");
  let sumDiv = document.createElement("div");
  sumDiv.textContent = `The sum of ${getNumberExpression(numbers)} is ${sum}`;
  list.parentElement.appendChild(sumDiv);
}

function getNumberExpression(numbers) {
  return numbers.join("+");
}

function displayNumbers() {
  fillNumbersInList();
  displaySum();
}

displayNumbers();

function fillNumbersInListText() {
  let list = document.getElementById("list-2");
  let result = "";
  for (const number of numbers) {
    result += `<li>${number}</li>`
  }
  list.innerHTML = result;
}

