const req = new XMLHttpRequest()

// req.open("GET", "./pokemon.json")
// req.onload = () => {
//     console.log(JSON.parse(req.response));
// }
// req.send()


// API Request
// req.open("GET", "https://jsonplaceholder.typicode.com/todos");

// onload => Backenddan ma'lumotlar kelsa 
// req.onload = () => {
//     const data = JSON.parse(req.response);
//     console.log(data);
// }

// Frontdan hatolik bo'lsa
// req.onerror = (err) => {
//     console.log("Xatoliklar bor ");
// }

// Backenddan xatolik bolsa 500
// req.onabort = () => {
//     console.log("Xatolik backenddan");
// }

// Requst jo'natilsa
// req.send()

// -------------------------------------
// const elModalWrapper = document.querySelector(".modal-wrapper")
// const elModal = document.querySelector(".modal")
// const request = new XMLHttpRequest()

// function renderFunction(list) {
//     request.open("GET", "https://reqres.in/api/users?page=1")
    
//     request.onload = () => {
//         const data = JSON.parse(request.response).data;
//         data.map(item => {
//             let elDiv = document.createElement("div")
//             elDiv.classList.add("avatar-wrapper")
//             elDiv.innerHTML = `
//                 <span>${item.id}</span>
//                 <p>${item.email}</p>
//                 <p>${item.first_name}</p>
//                 <p>${item.last_name}</p>
//                 <img src=${item.avatar} width="70" height="40"/>
//                 <div>
//                     <button onclick="moreClick(${item.id})">More</button>
//                     <button onclick="deleteClick(${item.id})">Delete</button>
//                 </div>
//             `
//             list.appendChild(elDiv)
//         })
//     }
    
//     request.send()
// }
// renderFunction(document.body)

// function moreClick(id){
//     request.open("GET", `https://reqres.in/api/users/${id}`)
//     request.onload = () => {
//         const updateData = JSON.parse(request.response).data;
//         elModalWrapper.classList.add("open-modal")
//         elModal.innerHTML = `
//             <div class="">
//                 <img src=${updateData.avatar} width="40" height="40"/>
//                 <p>${updateData.email}</p>
//                 <p>${updateData.first_name}</p>
//                 <p>${updateData.last_name}</p>
//             </div>
//         `
//     }
//     request.send()
// }

// function deleteClick(id){
//    request.open("DELETE", `https://reqres.in/api/users/${id}`)
//    request.send()
//    request.onload = () => {
//        request.open("GET", `https://reqres.in/api/users`)
//         request.send()
//         request.onload = () => {
//             console.log(JSON.parse(request.response));
//         }
//     }
// }


// elModalWrapper.addEventListener("click", function(evt){
//     if(evt.target.id == "modal-wrapper"){
//         elModalWrapper.classList.remove("open-modal")
//     }
// })


// async function a(){
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Done")
//         },2000)
//     })
//     let result = await promise.then(res => res);
//     alert(result)
// }
// a()

// const promise = new Promise((resolve,reject) => {
//     req.open("GET", "https://jsonplaceholder.typicode.com/todos")
//     req.send()
//     req.onload = () => {
//         resolve(JSON.parse(req.response))
//     }
//     req.onerror = () => {
//         reject("Frontda Xatolik bor!")
//     }
// })
// promise.then(res => {
//     console.log(res);
// })


// const promise1 = new Promise((resolve , reject) => {
//     const data = true
//     if(data){
//         resolve("Ishladi ")
//     }
//     else{
//         reject("Ishlamadi")
//     }
// })

// const promise2 = new Promise((resolve , reject) => {
//     const data = true
//     if(data){
//         resolve("Ishladi 2 ")
//     }
//     else{
//         reject("Ishlamadi 2")
//     }
// })
// Barcha true bolishi kerak keyin ishlaydi 
// Promise.all([promise1, promise2]).then(res => {
//     console.log(res);
// })



// Binchi true ishlagan promise ni qaytaradi
// const promise1 = new Promise((resolve , reject) => {
//    setTimeout(() => {
//     resolve("Start 3000");
//    },3000)
// })

// const promise2 = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         resolve("start 1000");
//     },1000)
// })

// Promise.race([promise1, promise2]).then(res => {
//     console.log(res);
// })


// const promise1 = new Promise((resolve , reject) => {
//     const data = true
//     if(data){
//         resolve("Ishladi ")
//     }
//     else{
//         reject("Ishlamadi")
//     }
// })

// const promise2 = new Promise((resolve , reject) => {
//     const data = false
//     if(data){
//         resolve("Ishladi 2 ")
//     }
//     else{
//         reject("Ishlamadi 2")
//     }
// })

// Ixtiyoriy true bolganni birinchisini olib beradi 
// Promise.any([promise1, promise2]).then(res => {
//     console.log(res);
// })

// Barcha true false larni qaytaradi 
// Promise.allSettled([promise1, promise2]).then(res => {
//     console.log(res);
// })

function getReq(method, URL){
    const promise = new Promise ((resolve, reject) => {
        req.open(method, URL)
        req.send()
        req.onload = () => {
            resolve(JSON.parse(req.response))
        }
        req.onerror = () => {
            reject("Xatolik bor")
        }

    })
    return promise
}

getReq("GET", "https://jsonplaceholder.typicode.com/todos").then(res => {
    console.log(res);
})