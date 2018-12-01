function createField(name, target) {
  let container = document.createElement("div");
  target.appendChild(container);
  let label = document.createElement("label");
  let input = document.createElement("input");
  input.type = (name !== "password") ? "text" : "password";
  // if (name !=="password") {
  //   input.type = "text";
  // } else {
  //   input.type = "password";
  // }
  input.name = name;
  input.id = name;
  label.for=name;
  label.innerText = name;

  container.appendChild(label);
  container.appendChild(input);
}

function createFields() {
  let body = document.getElementsByTagName("body")[0];
  let fieldNames = ["firstName", "lastName", "email", "password", "address"]
  for (const name of fieldNames) {
    createField(name, body);
  }

  let button = document.createElement("button");
  body.appendChild(button);
  button.textContent = "Register";

  let result = document.createElement("div");
  body.appendChild(result);

  button.addEventListener("click", function(){
    result.innerHTML = "";
    for (const name of fieldNames) {
      result.innerHTML += `${name}: ${document.getElementById(name).value}<br>`
    }
  })
}

createFields();

