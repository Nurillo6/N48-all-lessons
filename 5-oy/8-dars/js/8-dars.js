// document.cookie = "name=Abdulloh;path=/;expires=Thu Mar 08 2024 18:52:59 GMT"
// document.cookie = "surname=Ubaydullaxo'jayev;path=/;expires=Thu Mar 10 2024 18:52:59 GMT"

// function getCookie(name){
//     return document.cookie.split(";").filter(item => item.includes(name)).join("").split("=")[1];
// }
// getCookie("surname")

// function hasCookie(name){
//     return document.cookie.split(";").filter(item => item.includes(name)).join("").split("=")[0].trim() == name;
// }
// hasCookie("surname");

// function deleteCookie(name, path, domain){
//     if(hasCookie(name)){
//         document.cookie = name + "=" + ((path) ? ";path=" + path : "") + 
//         ((domain) ? ";domain=" + domain : "") + ";expires=Thu 01 Jan 1970 00:00:01 GMT"
//     }
// }
// deleteCookie("surname")



// ------------ fragment start ---------
// let elList = document.querySelector(".list")
// const fruits = ["apple", "Banan", "Cherry", "Orange"]
// let fragment = document.createDocumentFragment()

// fruits.forEach(item => {
//     let elItem = document.createElement("li")
//     elItem.textContent = item
//     fragment.appendChild(elItem)
// })

// elList.appendChild(fragment)
// ------------ fragment end ---------



// ----------- Synchronous vs asynchronous start -------------

// console.log("salom 1");
// console.log("salom 2");
// alert("Hello")
// console.log("Finish");

// console.log("Code start");

// setTimeout(() => {
//     console.log("Code Time Out");
// },2000)

// console.log("Code running");

// setTimeout(() => {
//     console.log("After 5s");
// },5000)

// console.log("Code Finish");


// ----------- Synchronous vs asynchronous end -------------



// Promise start

// let internet = true

// const getDate = () => {
//     return new Promise((resolve, reject) => {
//         // sorov yoziladi HTTP requst
//         if(internet){
//             const data = {name:"Abdulloh"}
//             resolve(data)
//         }
//         else{
//             reject(new SyntaxError("Xatolik bor"))
//         }
//     }) 
// }
// getDate()
// .then(res => console.log(res))
// .catch(err => console.log(err))
// // Promise end

// const promise = new Promise((resolve, reject) => internet ? resolve("New Data") : reject("Error handle"))
// promise.then(res => console.log(res)).catch(err => console.log(err))