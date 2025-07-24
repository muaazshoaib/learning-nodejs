const person = {
  name: "Max",
  age: 29,
  // greet: function () {
  //   console.log("Hi, I am " + this.name);
  // },
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

console.log(person);
person.greet();
