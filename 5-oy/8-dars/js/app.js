// fetch('./data.json')
// .then(data => data.json())
// .then(res => console.log(res))
// .catch();

// let elList = document.querySelector('.list')
// let fragment = document.createDocumentFragment()
// let fruits = ["Apple", "Banan", "Cherry", "Orange"]

// fruits.forEach(item => {
//     let elItem = document.createElement("li")
//     elItem.textContent = item
//     fragment.appendChild(elItem)
// })

// elList.appendChild(fragment)




// console.log("1");
// setTimeout(() => {
//     console.log("1-setTimeOut");
// },2000)
// console.log("1-setTimeOut keyingi log 2");


// function sayHi(){
//     console.log("salom 1");
//     setTimeout(() => {
//     console.log("1-setTimeOut");
// },2000)
//     console.log("last log func");
// }
// sayHi()
// console.log("Func end");


// const internet  = false 
// const getData = () => {
//     return new Promise((resolve, reject) => {
//         // serverga sorov jonatish
//         if(internet){
//             resolve("Some Data 11")
//         }
//         else{
//             reject("Some Error")
//         }
//     })
// }

// getData()
// .then((res) => {
//     console.log(res );
// })
// .catch((err) => console.log(err))

// const internet = true
// const getData = () => {
//     return new Promise((resolve, reject) => {
//         if(internet){
//             resolve("Code clean")
//         }
//         else{
//             reject("Error xandle")
//         }
//     })
// }

// getData().then(res => console.log(res))
// .catch(err => console.log(err))

// let result = false
// const promise = new Promise((resolve, reject) => {
//     if(result){
//         resolve("Hello")
//     }
//     else{
//         reject("Error")
//     }
// })
// promise.then(res => console.log(res)).catch(err => console.log(err))

// let arr = []
// const promise = new Promise((resolve, reject) => {
//     const data = {
//         id:1,
//         value:"Salom"
//     }   
//     arr.push(data)
//     if(arr.length > 0){
//         resolve(data)
//     }
//     else{
//         reject("Error")
//     }
// })
// .then(res => console.log(res))
// .catch(err => console.log(err)) 

// document.cookie = "data=NewData;path=/;expires=Thu Mar 09 2024 14:32:04 UTC"
// document.cookie = "name=Nurillo;path=/;expires=Thu Mar 08 2024 14:32:04 UTC"


// function hasCookies(key){
//     const data = document.cookie.split(";").filter(item => item.includes(key)).join("").split("=")[0].trim() == key
//      return data;
// }

// function deleteCookie(name, path ,domain){
//     if(hasCookies(name)){
//         document.cookie = name + "=" + ((path) ? ";path=" + path : "") + 
//         ((domain) ? ";domain=" + domain : "") + ";expires=Thu 01 Jan 1970 00:00:01 GMT"
//     }
// }
// deleteCookie("name")
