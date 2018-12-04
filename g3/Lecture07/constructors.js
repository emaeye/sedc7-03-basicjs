function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  };
}

function person(firstName, lastname) {
  let result = {
    firstName: firstName,
    lastName: lastname,
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`;
    }
  };
  return result;
}

let weko = new Person("Wekoslav", "Stefanovski");
let kristijan = person("Kristijan", "Anastasovski");

console.log(weko.getFullName());
console.log(kristijan.getFullName());

let dejan = new Person("Dejan", "Jovanov");
document.write(dejan.getFullName());

let getFullName = dejan.getFullName;
console.log(getFullName);

let d2 = {
  firstName: "Dejan",
  lastName: "Monev"
}

d2.getName = getFullName;
console.log(d2.getName());


let shape = {
	width: 600,
	height: 400,
	getArea: function(){
    let self = this;
		function multiply() {
			console.log(self); //window wtf?
			return self.width * self.height; // this.width, this.height are undefined, because 'this' is the window object
		}
		console.log(this); //shape
		return multiply(); //NaN
	}
}; 


let obj = {
  num: 10,
  fNum : function () { return this.num},
  aNum: () => this.num
}