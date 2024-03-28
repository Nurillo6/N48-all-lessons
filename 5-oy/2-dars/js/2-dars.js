// Multiline Arrow function (Expression function)
// const myFunc = (a, b) => {
//     return a + b;
// }   
// const myFunc = (a, b) => a + b;   
// console.log(myFunc(5, 2));


// Constructor function
// function Person(){
//     this.name = "Abdulloh",
//     this.age = 19,
//     this.interest = "nothing",
//     this.sayHello = () => {
//         // console.log(`My name is ${this.name}, my age ${this.age}. Interests are ${this.interest}`);

//         const innerFunction = () => {
//             console.log(this);
//         }
//         innerFunction()
//     }
// }
// const obj = new Person()
// obj.sayHello() 


// function Person(user_name, user_age, user_interest){
//     this.name = user_name,
//     this.age = user_age,
//     this.interest = user_interest,
//     this.sayHello = () => {
//         console.log(`My name is ${this.name}, my age ${this.age}. Interests are ${this.interest}`);

//         const innerFunction = () => {
//             // console.log(this);
//         }
//         innerFunction()
//     }
// }
// const obj1 = new Person("Abdulloh", 19, "sleep")
// const obj2 = new Person("Dilshodbek", 20, "Football")
// obj2.sayHello() 
// Object qiymatini chaqirish yoki qiymat qoshish => 2 xil
// 1.Dot notation
// 2.Break notation

// console.log(obj1.name);
// console.log(obj2["age"]);

// function greeting(){
//     console.log(this);
// }
// greeting()
// console.log(this);

// ========== Destruction ===========
// const obj = {   // Object Destruction
//     name:"Abdulloh",
//     age:19,
//     job:"Logist"
// }
// const {age, job, name} = obj
// console.log(age);
// console.log(job);
// console.log(name);

// let arr = [10, 20, 30, 40, 50] // Array Destruction
// const [a,b, c, d,e,f] = arr
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);

// const {role, roleId, token} = Object()
// const newObj = Object()
// console.log(newObj.role);
// console.log(newObj.roleId);
// console.log(newObj.token);


// ===== Rest Operator =========
// const obj = { 
//     name:"Abdulloh",
//     age:19,
//     job:"Logist"
// }
// const obj2 = {
//     name:"Dilshodbek",
//     age:20,
//     job:"Developer"
// }
// 1.Object cloneing
// const newObj = obj // Shellow copy 
// const newObj = {...obj} // Deap copy
// obj.name = "Dilshodbek"
// console.log(newObj);

// let arr = [10, 20, 30, 40, 50]
// const [a,b, ...rest] = arr
// console.log(a);
// console.log(b);
// console.log(rest);

// function myFunc(...things){
//     const totalPrice = things.reduce((prev, value) => {
//         return prev += value
//     },0)
//     console.log(totalPrice);
// }
// myFunc(1,2,3,4,5)

// const obj = {
//     name:"Dilshodbek",
//     age:20,
//     job:"Developer"
// }
// obj.interest = "Football" // D
// obj["hobby"] = "Travel" // B
// // delete obj.name 
// console.log(obj);