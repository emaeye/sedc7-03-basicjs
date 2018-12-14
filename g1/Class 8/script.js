// Simple object ( Object literal )
let dragan = {
    first: "Dragan", // property
    last: "Gelevski", // property
    age: 26, // property
    canSing: false, // property
    saySomething: function(text){ // method
        console.log(`${this.first} says "${text}".`); // 'this' points to the object dragan
    }
}
// Another object but without 'this' in the method
let dragan1 = {
    first: "Dragan",
    last: "Gelevski",
    age: 26,
    canSing: false,
    saySomething: function(text){
        console.log(`Dragan says "${text}".`);
    }
}
// When we change the name of both objects the first object
// With method that has 'this' will still return correct message
// The second does not have 'this' and it will still show the previous messsage
dragan.first = "Trajan";
dragan1.first = "Trajan";
console.log(dragan.saySomething("Hello"));
console.log(dragan1.saySomething("Hi"));

// Simple object dog
let dog = {
    name: "Sharko",
    breed: "Dzukela",
    age: 2,
    color: "Brown",
    isLazy: true,
    favoriteFood: ["Carrot", "Chicken"],
    bark: function(){
        return "AF AF AF AF AF";
    }
}

//console.log(dog);
console.log(dog.name);
console.log(dog.bark());

// Declaring object through the Object() template
let cat = new Object();
//let cat = {};
cat.name = "Lav";
cat.isLazy = true;
cat.meow = function(){
    return "MEOW MEOW MEOW!";
};

// The same object but with object literall
// let cat = {
//     name: "Lav",
//     isLazy: true,
//     meow: function(){
//         return "MEOW MEOW MEOW!";
//     }
// }

console.log(cat);
console.log(cat.meow());

// Changing object values
cat.isLazy = false;
// Deleting a property of an object
delete cat.isLazy;
cat.isLazy = undefined; // this line will just set a property to undefined, it will not delete it

console.log(cat.isLazy)
console.log(cat);

// Creating templates
// This is a template from which we can create objects later
function Dog(name, breed, color){ // we put the values we need as parameters
    this.name = name; // Then we assign them to the object that will be created with the this keyword
    this.race = breed;
    this.color = color;
    this.myThis = this; // This property is just for showing what 'this' actually is in every object
    this.bark = function(){
        return "BARK BARK BARK BARK";
    }
}
// We create two objects from the template Dog
let sharko = new Dog("Sharko", "Dzukela", "Brown");
let pino = new Dog("Pino", "Pinch", "Black");
// Now we show the two objects in the console
console.log(sharko);
console.log(pino);
// We can change methods and properties of those objects after they are created as normal
pino.bark = function(){
    return "MEOW!";
}
// Calling the methods on both objects
console.log(sharko.bark());
console.log(pino.bark());
// Checking out what this is in both the objects and when this is in the global scope
console.log(sharko.myThis);
console.log(pino.myThis);
console.log(this);

// This is the same template but with a method that is not created with annonimous function
// Instead we give it function from outside and pass it as refference

// function bark(){
//     return "BARK BARK BARK"
// }
// function Dog(name, breed, color){
//     this.name = name;
//     this.race = breed;
//     this.color = color;
//     this.myThis = this;
//     this.bark = bark;
// }

// Here we call the function without the object and see that it works
// It does not make sense
//console.log(bark());



// Everything in JS is an object
Console.log("hello"); // Console is object and log() is a method to that object
let arr = [2,4,6];
arr.length; // arr is an object and length is a property to that object
document.getElementById("something").children; // document is object and getElementById() is a method to that object
// When getElementById returns an element that element is also an objeect and .children is a property to that object
alert(); // alert is also a metod on the window object

// Change css in JavaScript
let header = document.getElementsByTagName("h1")[0]; // the result of get ElementByTagName() is an element object
// The element object has an object as property called style
// That style object has all the CSS styles as properties
// You can hange them as a normal variable with the values in string format
header.style.color = "red";
header.style.backgroundColor = "black"; // The CSS styles that are written like background-color are changed to backgroundColor
header.style.display = "none";