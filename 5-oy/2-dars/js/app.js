// Multiline Arrow function (Expression with arrow)
// let sum = (a, b) => {
//   let result = a + b;
//   return result
// }
// let sum = (a, b) => a + b
// let result = sum(2, 3)
// console.log(result);

//  Multiline Arrow end

// ======== this in CF arrow start ==========
// function Person() {
//   this.name = "Abdulloh",
//     this.age = 19,
//     this.interest = "game",
//     this.job = "Logist"
//   this.aboutPerson = function () {
//     let result = `${this.name}'s age ${this.age}, he playing ${this.interest} every day, his job is ${this.job}`
//     console.log(result);

//     let innerFunction = () => {
//       console.log(this);
//     }
//     innerFunction()
//   }
// }
// const newFunction = new Person()
// newFunction.aboutPerson()

// ======== this in CF arrow end ==========


// ============ Destruction start ===========
// const obj = {
//   name: "Abdulloh",
//   age: 19,
//   interest: "sleep",
//   job: "Logist"
// }
// const { age, interest, job, name } = obj;
// console.log(age);
// console.log(interest);
// console.log(job);
// console.log(name);

// const arr = [10, 20, 30, 40, 50];
// let [a, b, ...rest] = arr
// console.log(a);
// console.log(b);
// console.log(rest);

// ============ Destruction end ===========

// ===== Rest operator start =======

// const arr = [10, 20, 30, 40, 50];
// const newArr = [...arr]
// console.log(newArr);

// function findTotalNumbers(...things) {
//   const res = things.reduce((total, item) => {
//     return total += item
//   }, 0)
//   return res;
// }
// console.log(findTotalNumbers(1, 2, 2, 3));

// ===== Rest operator end ======= 
