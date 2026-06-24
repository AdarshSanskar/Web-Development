function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Car(make, model) {
  this.model = model;
  this.make = make;
}

let myCar = new Car("Tata", "Safari");
// console.log(myCar);

let myNewCar = new Car("Tata", "Harrier");
// console.log(myNewCar);

function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `This is a cup of ${this.type}`;
  };
}
let milkTea = new Tea("Milk Tea");
// console.log(milkTea.describe());


function Animal(species) {
  this.species = species;
}

Animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};

let dog = new Animal("Dog");
console.log(dog.sound());

let Cat = new Animal("Cat");
console.log(Cat.sound());