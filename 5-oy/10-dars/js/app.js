const API = "https://jsonplaceholder.typicode.com/comments"

// const getData = (URL) => {
//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest()

//         request.addEventListener("readystatechange", function() {
//             if(request.readyState == 4 && request.status == 200){
//                 resolve(JSON.parse(request.responseText))
//             }
//             else if(request.readyState == 4){
//                 reject("Xatolik bor !")
//             }
//         })

//         request.open("GET", URL)
//         request.send()

//     })
// } 
// getData(API)
//     .then(res => {
//         console.log(res);
//     })


// // ----- Fetch -------
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => {
//         return res.json();
//     })
//     .then(d => {
//         console.log(d);
//     })

// const postData = {
//     userId: 1,
//     title: "Abdulloh darsda bormi ?",
//     body: "Darsga qarang !"
// }

// fetch("https://jsonplaceholder.typicode.com/posts" , {
//     method:"POST",
//     body: JSON.stringify(postData),
//     headers:{
//         "content-type":"application/json"
//     }
// })
//     .then(res => {
//         return res.json();
//     })
//     .then(d => {
//         console.log(d);
//     })

// ----------- async await -----------------

// async function f(){
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("Code waiting 2000"), 2000)
//     })
//     let result = await promise
//     alert(result)
// }
// f()


// const getData = async (URL) => {
//    const res = await fetch(URL)
//    const data = await res.json()
//    return data
// }
// getData(API).then(res => console.log(res))

