// --------- Map -----------
// const obj = {
//     name:"Abdulloh",
//     age:19,
//     job:"Logist"
// }
// const obj = [
//     ["name","Abdulloh"],
//     ["age",19],
//     ["job","Logist"]
// ]
// console.log(Object.entries(obj));
// console.log(Object.fromEntries(obj));

// const map = new Map(obj)
// console.log(map.get("name"));
// map
//     .set("interest", "Game")
//     .set("hobby", "Sleep")
// console.log(map);
// map.delete("interest")
// console.log(map.has("job"));
// console.log(map.size);
// map.clear()
// console.log(map);

// for(let [key, value] of map){
//     console.log(`${key} - ${value}`);
// }

// for(let val of map.values()){
//     console.log(val);
// }

// for(let val of map.keys()){
//     console.log(val);
// }

// map.forEach((val , key, m) => {
//     console.log(`${val} - ${key}`);
// })



// -------------- set ------------ 
// const set = new Set([1,2,3,3, 3, 4,5,5,6]) 
// set.add(10)
// set.add(10).add(20).add(20)
// console.log(set.has(30));
// console.log(set.size);
// set.delete(1)
// set.clear()
// console.log(set);

// console.log(set.values());
// console.log(set.keys());

// for(let key of set){
//     console.log(key);
// }

// function unicValues(arr){
//     return [...new Set(arr)]
// }
// console.log(unicValues([1,2,3,5,5,1,1,2,5,4,8,6]));


// ===== WeakMap ========= 
// let obj = {name:"WeakMap"}
// let arr = [obj]
// obj = null
// console.log(arr[0]);

// const map = new WeakMap([
//     [obj,"Abdulloh"]
// ])
// obj = null
// get,set, delete, has
// console.log(map.has(obj));

// const cashe = new WeakMap()
// function cashUser(user){
//     if(!cashe.has(user)){
//         cashe.set(user,Date.now())
//     }
//     return cashe.get(user)
// }
// let lena = {name:"Yelena"}
// let alex = {name:"Alex"}


// cashUser(lena)
// cashUser(alex)

// lena = null

// console.log(cashe.get(lena));
// console.log(cashe.has(lena));
// console.log(cashe.has(alex));


// -------- Weak Set --------
let users = [
    {name:"Baurjan"},
    {name:"Dilshodbek"},
    {name:"Boburjon"},
]

const visits = new WeakSet()
visits.add(users[0]).add(users[1])
console.log(visits);
// users.splice(1, 1)

// console.log(visits.has(users[0]));
// console.log(visits.has(users[1]));





// ------- call , apply , bind ----- 
function carName(){
    console.log("Card name " + this.name);
    console.log(this);
}
const car = {
    name:"Lasetti",
    year:2022,
    sayMark:carName,
    sayMarkWindow:carName.bind(window),
    info:function(model, color){
        console.log(`Car name is: ${this.name}`);
        console.log(`Year : ${this.year}`);
        console.log(`Model : ${model}`);
        console.log(`Color : ${color}`); 
    }
}
// car.sayMark()
// car.sayMarkWindow()

// Bind => Objectni contextini ozgartirib beradi?
// yani qaysi objectga murojat qilish yolini korsatadi

// const gentra = {
//     name:"Gentra",
//     year:2023
// }
// car.info.bind(gentra)("Chevrolet", "Red")
// car.info.bind(gentra, "Chevrolet","Red")()

// car.info.call(gentra, "Ravon", "Red") 
// car.info.apply(gentra, ["Ravon", "White"])



