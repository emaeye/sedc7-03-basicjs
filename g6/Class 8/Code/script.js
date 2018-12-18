
// Code from Class 8 - Objects 

console.log("We are live!");

// an object literal
let dog = {
    name: "Spark",
    color: "Red",
    favoriteFood: ["carots", "chicken"],
    isLazy: true,
    bark: function () {
        console.log("BARK BARK BARK!");
    },
    eat: function (food) {
        console.log(`My dog is eating ${food}`);
    }
}

console.log(dog);
console.log(`My dog's name is ${dog.name}!`);
dog.bark();

// Changing a property value
dog.name = "Rex";
console.log(dog);

dog.bark = function () {
    console.log("WOOF WOOF WOOF");
}

// Calling object method
dog.bark();

// Creating a new property and adding value
dog.eyeColor = "green";

// What is "this" in the global scope
let test = this;
console.log(test);

console.log(test.innerHeight);

// Creating new object with the Object()
let human = new Object();

// Exercise 4
function Car(model, color, year, fuel, consumption) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.fuel = fuel;
    this.fuelConsumption = consumption;
    this.calculateFuelFromDistance = function (distance) {
        return distance * (this.fuelConsumption / 100);
    }
}

let myCar = new Car("Lada", "White", "1900", 80, 15);
console.log(myCar);
console.log(myCar.calculateFuelFromDistance(250));


document.getElementById("something"); // document is object, getElementById() its a method to that object
document.getElementsByClassName("someClass")[0].children; // children is a property to the object that we get as a result from the getElementByClassName method
let arr = [1, 2, 6, 8];
arr.length; // arr is an object, length is a property of that object
console.log(arr);

// Changing CSS of elements with javascript
let header = document.getElementsByTagName("h1")[0];
header.style.color = "red";
header.style.backgroundColor = "black";
header.style.display = "none";