function getPerson(name) {
  let contents = document.querySelectorAll("span.field-content");

  for (const item of contents) {
    if (item.innerText.includes(name)) {
      item.style.color = "lime";
      item.style.backgroundColor = "blue";
      console.log(item.innerText);
    }
  }
}

//We will learn this later on the course, this is only for class example purposes
Array.from(document.querySelectorAll("#block-views-naslovna-na-dnoto .views-field.views-field-title .field-content a")).map(item => console.log(item.textContent))