// var name = "Max";
// var age = 29;
// var hasHobbies = true;

// function summarizeUser(userName, userAge, userHasHobby) {
//   return (
//     "Name is " +
//     userName +
//     ", age is " +
//     userAge +
//     " and the has hobbies: " +
//     userHasHobby
//   );
// }

// console.log(name);
// console.log(summarizeUser(name, age, hasHobbies));

// const name = "Max";
// let age = 29;
// const hasHobbies = true;

// name = "Maximilian";

// function summarizeUser(userName, userAge, userHasHobby) {
//   return (
//     "Name is " +
//     userName +
//     ", age is " +
//     userAge +
//     " and the has hobbies: " +
//     userHasHobby
//   );
// }

// console.log(name);
// console.log(summarizeUser(name, age, hasHobbies));

const name = "Max";
let age = 29;
const hasHobbies = true;

// name = "Maximilian";

// const summarizeUser = function summarizeUser(userName, userAge, userHasHobby) {
//   return (
//     "Name is " +
//     userName +
//     ", age is " +
//     userAge +
//     " and the has hobbies: " +
//     userHasHobby
//   );
// };

const summarizeUser = (userName, userAge, userHasHobby) => {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the has hobbies: " +
    userHasHobby
  );
};

// const add = (a, b) => {
//   return a + b;
// };

// const add = (a, b) => a + b;

const addOne = (a) => a + 1;

const addRandom = () => 1 + 2;

console.log(name);
// console.log(add(1, 2));
// console.log(addOne(1, 2));
console.log(addRandom());
console.log(summarizeUser(name, age, hasHobbies));
