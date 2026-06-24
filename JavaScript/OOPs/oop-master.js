let car = {
  make: "Toyota",
  model: "Hilux",
  year: 2020,
  start: function () {
    return `This ${this.make} car is Purchased in ${this.year}`;
  },
};

// console.log(car.start());

function Person(name, age) {
  this.name = name;
  this.age = age;
}
let john = new Person("John Doe", 20);
// console.log(john.name);

function Animal(type) {
  this.type = type;
}
Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};

Array.prototype.adarsh = function () {
  return `Custom method ${this}`;
};
let myArray = [1, 2, 3];
console.log(myArray.adarsh());
let myNewArray = [1, 2, 3, 4, 5, 6];
console.log(myNewArray.adarsh());
