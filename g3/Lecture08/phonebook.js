/* DATA */

let idCounter = 3;

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

let activeContact = null;

/* EVENT HANDLERS */

let discard = document.getElementById("discard");

discard.addEventListener("click", () => {
  // just remove the active contact
  activeContact = null;
  displayActiveContact();
});

let save = document.getElementById("save");

save.addEventListener("click", () => {
  // get the values from the inputs
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;

  if (activeContact) {
    // we are updating a contact
    activeContact.firstName = firstName;
    activeContact.lastName = lastName;
    activeContact.email = email;
  } else {
    // we are creating a new contact
    let contact = {
      id: idCounter,
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    idCounter +=1;
    contacts.push(contact);
    // set it as active
    activeContact = contact;
  }
  displayContacts(contacts);
});


/* FUNCTIONS */

/**
 * Renders all given contacts
 */
let displayContacts = function(contacts) {
  let table = document.getElementById("result");
  // clear previous rows, don't worry about performance
  table.innerText = "";

  // render each contact in the table
  for (const contact of contacts) {
    renderContact(contact, table);
  }
};

/**
 * Creates a table row for a single contact
 */
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
    // just sets the active contact to the current contact
    activeContact = contact;
    displayActiveContact();
  });

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "delete";
  deleteBtn.addEventListener("click", () => {
    // find the index of the current contact and remove it
    let index = contacts.indexOf(contact);
    contacts.splice(index, 1);
    displayContacts(contacts);
  });

  actionCell.appendChild(editBtn);
  actionCell.appendChild(deleteBtn);
};

/**
 * Shows the active contact, or empty if there is no active contact
 */
let displayActiveContact = function (){
  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let email = document.getElementById("email");

  if (activeContact) {
    firstName.value = activeContact.firstName;
    lastName.value = activeContact.lastName;
    email.value = activeContact.email;
  } else {
    firstName.value = "";
    lastName.value = "";
    email.value = "";
  }
}

displayContacts(contacts);
