// let obj = {
//     name:"Abdulloh",
//     age:19,
//     hobby:"Sleep"
// }
// let obj = [
//     ["name", "Abdulloh"],
//     ["age", 19],
//     ["hobby", "Sleep"],
// ]


// console.log(Object.fromEntries(obj));

// ---------- Map -------------- Object
// let map = new Map(obj)
// console.log(map.get("name"));
// console.log(map.get("age"));
// console.log(map.has("name"));
// map
//     .set("interest", "Nothing")
//     .set("Food", "Hot Dog")
//     .set("Food", "Hot Dog")
// console.log(map.size);
// map.delete("age")
// map.clear()

// for(let [key, value] of map){
//     console.log(`${key} - ${value}`);
// }

// map.forEach((value, key, arr) => {
//     console.log(`${value} - ${key}`);
// })

// const obj1 = {
//     name:"Abdulloh"
// }
// console.log(Object.values(obj1));
// console.log(Object.keys(obj1));
// console.log(Object.entries(obj1));
// const newMap =  [
//     ["name", "Abdulloh"]
// ]

// for(let [key, value] of map){
//     console.log(`${key} - ${value}`);
// }



// -------------- Set --------- Object 
// let set = new Set([10,1,2,3,3,3,4,5,4,5,6,7,7,8,8,8])
// set.add(10).add(30).add(50).add(0)
// console.log(set.has(200));
// console.log(set.values());
// console.log(set.keys());
// console.log(set.size);

// function checkNumber(nums){
//     return [...new Set(nums)]
// }
// console.log(checkNumber([1,1,2,2,3,4,5,5,6,6,7,8]));


// ---------- Call, Bind, Apply ------------- 
// let obj = {
//     name:"Abdulloh",
//     age:19,
//     sayHello:function(){
//         console.log(this.name + " " + this.age);
//     },
//     sayOtherFunc:function(){
//         console.log(this);
//     }
// }
// let car = {
//     name:"Nexia",
//     year:2009,
//     sayCarName:function(model, price){
//         console.log(`${this.name}`);
//         console.log(`${this.year}`);
//         console.log(model);
//         console.log(price);
//     }
// }
// const damas = {
//     name:"Damas",
//     year:2005
// }
// car.sayCarName.bind(damas)("Chevrolet", 9000)
// car.sayCarName.bind(damas, "Chevrolet", 9000)()
// car.sayCarName.call(damas, "Audi", 9500)
// car.sayCarName.apply(damas, ["Audi", 9500])