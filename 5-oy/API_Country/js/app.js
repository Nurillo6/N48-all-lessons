
const API = "https://restcountries.com/v3.1/all"

// const getData = (resource) => {
//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest()

//         request.addEventListener("readystatechange", function(){
//             if(request.readyState == 4 && request.status == 200){
//                 const data = JSON.parse(request.responseText)
//                 resolve(data)
//             } 
//             else if(request.readyState == 4){
//                 reject("Error !")
//             }
//         })

//         request.open("GET", resource)
//         request.send()
//     })
// }

// getData(API)
// .then(res => {
//     console.log(res);
// })
// .catch(err => {
//     alert(err)
// })



// ---------------- Fetch ------------------

// fetch(API)
//     .then(res => {
//        return res.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     })



// ------ async await --------
// async function f(){
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("Code waiting 2000"), 2000)
//     })
//     let result = await promise
//     alert(result)
// }
// f()


// async -> ushbu functionni promisega aylantiradi 
// const getData = async (resource) => {
//     // console.log("Loading...");
//     const request = await fetch(resource)
//     const data = await request.json()
//     return data;
//     // console.log("Done !");
// }
// getData(API)
// .then(res => {
//     console.log(res);
// })
// const test = getData()
// console.log(test);


// const data = {
//     title:"Hello 1",
//     body:"This is body Nurillo",
//     userId:3    
// }
// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method:"POST",
//     body:JSON.stringify(data),
//     headers:{
//         "Content-type":"application/json"
//     }
// }).then(res => {
//     return res.json()
// }).then(data => {
//     console.log(data);
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => res.json())
//     .then(datas => console.log(datas))

// })
