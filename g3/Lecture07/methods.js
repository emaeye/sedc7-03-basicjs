let weko = {
  firstName: "Wekoslav",
  lastName: "Stefanovski",
  // print: function () {
  //   console.log(`${this.firstName} ${this.lastName}`);
  // }
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  }
}

// function printPerson(person) {
//   console.log(`${person.firstName} ${person.lastName}`);
// }

// printPerson(weko);

// weko.print();

console.log(weko.getFullName());
document.write(weko.getFullName());

let kristijan = {
  firstName: "Kristijan",
  lastName: "Anastasovski",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  }
}

console.log(kristijan.getFullName());
document.write(kristijan.getFullName());