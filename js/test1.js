function Dog(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
  this.bark = function () {
    console.log("I'm barking");
  };
}

class Cat {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }
  meow() {
    console.log("I'm meowing");
  }
}

function testObjects() {
  //object literal
  let dog1 = { name: "Fido", age: 4, color: "red" };

  let dog2 = { name: "stimpy", age: 5 };
  console.log(dog1, dog2);

  //using an object constructor
  let dog3 = new Dog("Scooby", 5, "brown");
  let dog4 = new Dog("scrappy", 2, "brown");
  dog3.bark();
  console.log(dog3, dog4);

  // using classes
  let cat1 = new Cat("Bob", 3, "black");
  let cat2 = new Cat("Her", 2, "calico");
  console.log(cat1, cat2);
}

function runTests() {
  console.log("==TESt==");
}
