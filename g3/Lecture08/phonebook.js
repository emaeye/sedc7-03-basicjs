let discard = document.getElementById("discard");

discard.addEventListener("click", () => {
  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let email = document.getElementById("email");

  firstName.value = "";
  lastName.value = "";
  email.value = "";
});

let save = document.getElementById("save");

save.addEventListener("click", () => {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;

  console.log(firstName, lastName, email);
});

let contacts = [
  {
    id: 1,
    firstName: "Wekoslav",
    lastName: "Stefanovski",
    email: "swekster@gmail.com"
  },
  {
    id: 2,
    firstName: "Scarlett",
    lastName: "Johansen",
    email: "widow@avengers.net"
  }
];

let renderContacts = function(contacts) {
  let table = document.getElementById("result");
  for (const contact of contacts) {
    renderContact(contact, table);
  }
};

let renderContact = function(contact, table) {
  let row = table.insertRow();

  let idCell = row.insertCell();
  idCell.innerHTML = contact.id;

  let fnameCell = row.insertCell();
  fnameCell.innerHTML = contact.firstName;

  let lnameCell = row.insertCell();
  lnameCell.innerHTML = contact.lastName;

  let emailCell = row.insertCell();
  emailCell.innerHTML = contact.email;

  let actionCell = row.insertCell();
  let editBtn = document.createElement("button");
  editBtn.textContent = "edit";
  editBtn.addEventListener("click", () => {
    console.log(`editing contact ${contact.id}`);
  });

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "delete";
  deleteBtn.addEventListener("click", () => {
    console.log(`deleting contact ${contact.id}`);
  });

  actionCell.appendChild(editBtn);
  actionCell.appendChild(deleteBtn);
};

renderContacts(contacts);
