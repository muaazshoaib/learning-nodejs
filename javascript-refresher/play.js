const person = {
  name: "Max",
  age: 29,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

const printName = ({ name }) => {
  console.log(name);
};

// printName(personData);

const { name, age } = person;
console.log(name, age);

const hobbies = ["Sports", "Cooking"];

const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

// // const copiedArray = hobbies.slice();
// // const copiedArray = [hobbies];
// const copiedArray = [...hobbies];

// console.log(copiedArray);

// // const toArray = (arg1, arg2, arg3) => {
// //   return [arg1, arg2, arg3];
// // };

// const toArray = (...args) => {
//   return args;
// };

// console.log(toArray(1, 2, 3));
// console.log(toArray(1, 2, 3, 4));
