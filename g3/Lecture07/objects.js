// using arrays to group data
// let firstName = "Wekoslav";
// let lastName = "Stefanovski";
// let className = "Basic JS";
// let lecture = "JavaScript Objects";
// let lectureIndex = 7;
// let age = 0x29;

// let weko = [firstName, lastName, age];


// function printPerson(person) {
//   document.write(`${person[1]}, ${person[0]} (${person[2]})`);
// }

// printPerson(weko);

// let kristijan = ["Kristijan","Anastasovski", 23];
// printPerson(kristijan);

let age = 0x29
let weko = {
  firstName: "Wekoslav",
  lastName: "Stefanovski",
  age: age,
  firstName: "Weko"
}

let kristijan = {
  firstName: "Kristijan",
  lastName: "Anastasovski",
  age: 23
}

function printPerson(person) {
  document.write(`${person.lastName}, ${person.firstName} (${person.age})<br/>`);
}

printPerson(weko);
printPerson(kristijan);
