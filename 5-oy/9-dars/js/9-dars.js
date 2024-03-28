// Promise - Vada -> 

// ----- Promise.all()  start -----
// const promise1 = new Promise((resolve, reject) => {
//     let data = true
//     if(data){
//         resolve("Natija qaytdi 1")
//     }
//     else{
//         reject("Xatoli bor 1")
//     }
// })
// const promise2 = new Promise((resolve, reject) => {
//     let data = true
//     if(data){
//         resolve("Natija qaytdi 2")
//     }
//     else{
//         reject("Xatoli bor 2")
//     }
// })
// Promise.all([promise1, promise2])
// .then(res => {
//     console.log(res);
// })
// .catch(err => {
//     console.log(err);
// })
// ----- Promise.all()  end -----


// ----- Promise.race() start  -----
// const promise1 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//     resolve("Start 1")
//    }, 5000)
//     // resolve("Hello 1")
// })

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Start 2")
//     }, 2000)
//     // resolve("Hello 2")
// })

// Promise.race([promise1, promise2]).then(res => {
//     console.log(res);
// })

// ----- Promise.race() end -----


// ----- Promise.any(), Promise.allSettled start -----
// const promise1 = new Promise((resolve, reject) => {
//     let data = false
//     if(data){
//         resolve("Natija qaytdi 1")
//     }
//     else{
//         reject("Xatoli bor 1")
//     }
// })
// const promise2 = new Promise((resolve, reject) => {
//     let data = true
//     if(data){
//         resolve("Natija qaytdi 2")
//     }
//     else{
//         reject("Xatoli bor 2")
//     }
// })

// Promise.any([promise1, promise2])
// .then(res => {
//     console.log(res);
// })
// .catch(err => {
//     console.log(err);
// })

// Promise.allSettled([promise1, promise2])
// .then(res => {
//     console.log(res);
// })
// ----- Promise.any(), Promise.allSettled end -----



// -------- Request -----

// let request = new XMLHttpRequest()

// Requset yoli
// request.open("GET", "./pokemon.json")

// // Jonatish 
// request.send()

// // Ma'lumotni qabul qilish 
// request.onload = () => {
//     const data = JSON.parse(request.response);
//     data.map(item => {
//         let elItem = document.createElement("li")
//         elItem.textContent = item.name
//         document.body.appendChild(elItem)
//     })
// }

// // Front dan hatolik ketsa 
// request.onerror = (err) => {
//     console.log(err);
// }

// // Backenda hatolik bor - 500
// request.onabort = () => {
//     console.log("Xatolik backenddan");
// }



// JSON.placeholder 
// request.open("GET", "https://jsonplaceholder.typicode.com/comments")
// request.send()

// request.onload = () => {
//     console.log(JSON.parse(request.response));
// }

// const promise = new Promise((resolve, reject) => {
//     request.open("GET", "https://jsonplaceholder.typicode.com/comments")
//     request.send()
//     request.onload = () => {
//         resolve(JSON.parse(request.response))
//     }
//     request.onerror = () => {
//         reject("Xatolik bor Frontni tekshiring")
//     }
//     request.onabort = () => {
//         reject("Backendda maummo bor!")
//     }

// })
// promise
// .then(res => {
//     let postList = res.splice(0, 20);
//     postList.length ? postList.map(item =>{
//         let elItem = document.createElement("li")

//         elItem.className = `w-[350px] p-[10px] flex flex-col space-y-[10px] rounded-[10px] bg-teal-500 `
//         elItem.innerHTML = `
//             <span>ID: ${item.id}</span>
//             <strong>Name: ${item.title}</strong>
//             <strong>Email: ${item.email}</strong>
//             <p>Body: ${item.body}</p>
//             <div>
//                 <button class="bg-white p-[8px] rounded-[10px]">More</button>
//             </div>
//         `
//         elList.appendChild(elItem)
//     })
//      : "Ma'lumot yoq"
// })
// .catch(err => {
//     console.log(err);
// })




let request = new XMLHttpRequest()
let request2 = new XMLHttpRequest()

let elList = document.querySelector(".list")
let elList2 = document.querySelector(".list2")

let elModalWrapper = document.querySelector(".modal-wrapper")
let elModal = document.querySelector(".modal")

function getRequst(req,path, URL){
    const promise = new Promise((resolve, reject) => {
        req.open(path, URL)
        req.send()
        req.onload = () => {
            resolve(JSON.parse(req.response))
        }
        req.onerror = () => {
            reject("Xatolik bor Frontni tekshiring")
        }
        req.onabort = () => {
            reject("Backendda maummo bor!")
        }
    
    })
    return promise;
}

getRequst(request,"GET", "https://jsonplaceholder.typicode.com/posts")
.then(res => {
    let postList = res.splice(0, 20)
    postList.length && postList.map(item =>{
            let elItem = document.createElement("li")
    
            elItem.className = `w-[350px] p-[10px] flex flex-col space-y-[10px] rounded-[10px] bg-teal-500 `
            elItem.innerHTML = `
                <span>ID: POST</span>
                <span>ID: ${item.id}</span>
                <img src="https://picsum.photos/id/${item.id}/200/200" width="100%" height="40"/>
                <strong>Name: ${item.title}</strong>
                <strong>Email: ${item.email}</strong>
                <p>Body: ${item.body}</p>
                <div>
                    <button onclick="morePostClick(${item.id})" class="bg-white p-[8px] rounded-[10px]">More</button>
                </div>
            `
                elList.appendChild(elItem)
    })
})

function morePostClick(id){
    getRequst(request,"GET", `https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => {
        elModalWrapper.classList.add("open-modal")
        elModal.innerHTML = `
            <span> POST</span>
            <span>ID: ${res.id}</span>
            <img src="https://picsum.photos/id/${res.id}/200/200" width="100%" height="40"/>
            <strong>Name: ${res.title}</strong>
            <strong>Email: ${res.email}</strong>
            <p>Body: ${res.body}</p>
        `
    })
}


getRequst(request2,"GET", "https://jsonplaceholder.typicode.com/comments")
.then(res => {
    let commentList = res.splice(0, 20)
    commentList.length && commentList.map(item =>{
            let elItem = document.createElement("li")
    
            elItem.className = `w-[350px] p-[10px] flex flex-col space-y-[10px] rounded-[10px] bg-teal-500 `
            elItem.innerHTML = `
             <span> Comment</span>
                <span>ID: ${item.id}</span>
                <strong>Name: ${item.name}</strong>
                <strong>Email: ${item.email}</strong>
                <p>Body: ${item.body}</p>
                <div>
                    <button class="bg-white p-[8px] rounded-[10px]">More</button>
                </div>
            `
            elList2.appendChild(elItem)
    })
})


elModalWrapper.addEventListener("click", function(evt) {
    if(evt.target.id == "modal-wrapper"){
        elModalWrapper.classList.remove("open-modal")
    }
})