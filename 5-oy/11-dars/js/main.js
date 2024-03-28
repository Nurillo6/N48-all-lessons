let usersList = document.querySelector(".users-list")
let postList = document.querySelector(".post-list")
let commentList = document.querySelector(".comment-list")

let elModalWrapper = document.querySelector(".modal-wrapper")
let elModal = document.querySelector(".modal")

const getData = async(URL) => {
    const res = await fetch(URL)
    const data = await res.json()
    return data
}
// ------------ user start --------

usersList.innerHTML = "Loading..."

getData("https://jsonplaceholder.typicode.com/users").then(res => {
    getUsers(res, usersList)
})  

function getUsers(arr, list){
    list.innerHTML = ``
    arr.map(item => {
        let elItem = document.createElement("li")
        elItem.className = `bg-orange-300 p-3 rounded-[20px]`
        elItem.innerHTML = `
            <p>
                <span class="font-bold">ID</span>: ${item.id}
            </p>
            <p>
                <span class="font-bold">Name</span>: ${item.name}
            </p>
            <p>
                <span class="font-bold">Username</span>: ${item.username}
            </p>
            <p>
                <span class="font-bold">Phone</span>: ${item.phone.split(" ")[0]}
            </p>
            <p>
                <span class="font-bold">Email</span>: ${item.email}
            </p>
            <div class="mt-3">
                <button onclick="userBtnClick(${item.id})" class="w-[100px] p-2 rounded-[10px] bg-teal-500 text-white">Show Post</button>
                <button onclick="submitUser(${item.id})" class="w-[100px] p-2 rounded-[10px] bg-red-500 text-white">Submit</button>
                <button onclick="submitDocUser()" class="w-[100px] p-2 rounded-[10px] bg-green-500 text-white">Send Doc</button>
            </div>
        `
        list.appendChild(elItem)
    })
}


// ------- telegram API ----------
const CHAT_ID = "-1002049747299"
const TOKEN = "6963177840:AAFyRKmqzN-1XoGIYIOnHdg9PbJIxSN4JNE"
const URL = `https://api.telegram.org/bot${ TOKEN }/sendMessage`
const URL2 = `https://api.telegram.org/bot${ TOKEN }/sendDocument`


function submitUser(id){
    elModalWrapper.classList.add("open-modal")

    getData(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => {
        elModal.innerHTML = `
            <form class="flex flex-col gap-5 submit-form">
                <label class="flex flex-col w-[60%] mx-auto">
                    <span>User Name</span>
                    <input value=${res.name} class="p-2 rounded-[10px]" autocomplete="off" name="userName" type="text" required placeholder="User Name"/>
                </label>
                <label class="flex flex-col w-[60%] mx-auto">
                    <span>User Phone</span>
                    <input value=${res.phone.split(" ")[0]} class="p-2 rounded-[10px]" name="userPhone" autocomplete="off" type="tel" required placeholder="User Phone"/>
                </label>
                <button type="submit" class="bg-teal-500 text-white font-bold mt-4 p-3 rounded-[10px] mx-auto w-[50%]">Submit</button>
            </form>
        `
        let elForm = document.querySelector(".submit-form")
        elForm.addEventListener("submit", function(e){
            e.preventDefault()
            let message = `<b>Order Site</b>\n`
            message += `<b>ID : ${id}</b>\n`
            message += `<b>Name : ${e.target.userName.value}</b>\n`
            message += `<b>Phone : ${e.target.userPhone.value}</b>\n`
           
            axios.post(URL , {
                chat_id:CHAT_ID,
                parse_mode:"html",
                text:message
            })
            .then(res => {
                console.log(res);
                elModalWrapper.classList.remove("open-modal")
            })

        })
    })

}

function submitDocUser(){
    elModalWrapper.classList.add("open-modal")
    elModal.innerHTML = `
        <form class="flex flex-col doc-form">
            <input name="fileInput" type="file"/>
            <button class="bg-teal-500 text-white font-bold mt-4 p-3 rounded-[10px] mx-auto w-[50%]">Submit</button>
        </form>
    `
    let elDocForm = document.querySelector(".doc-form")
    
    elDocForm.addEventListener("submit", function(evt){
        evt.preventDefault()

        let formdata = new FormData()
        formdata.append("chat_id", CHAT_ID)
        formdata.append("document", evt.target.fileInput.files[0])

        axios.post(URL2, formdata , {
            headers:{"Content-type":"multipart/formdata"}
        }).then(res =>{
            console.log(res);
        })
        
    })
}

// ------------ user end --------


// ------------ Post start --------

function userBtnClick(id){
    postList.innerHTML = `Loading...`

    getData(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then(res => {
        getPosts(res, postList)
    })

}

function getPosts(arr, list){
    list.innerHTML = ``
    arr.map(item => {
        let elItem = document.createElement("li")
        elItem.className = `bg-orange-300 p-3 rounded-[20px]`
        elItem.innerHTML = `
            <p>
                <span class="font-bold">ID</span>: ${item.id}
            </p>
            <p>
                <span class="font-bold">User ID</span>: ${item.userId}
            </p>
            <p>
                <span class="font-bold">Title</span>: ${item.title}
            </p>
            <p>
                <span class="font-bold">Body</span>: ${item.body}
            </p>
         
            <div class="mt-3">
                <button onclick="postBtnClick(${item.id})" class="w-[100px] p-2 rounded-[10px] bg-teal-500 text-white">Show Comment</button>
            </div>
        `
        list.appendChild(elItem)
    })
}
// ------------ Post end --------


// ------ Commnet start ------
function postBtnClick(id){
    commentList.innerHTML = "Loading..."
    getData(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).then(res => {
        getComment(res,commentList )
    })
}
function getComment(arr, list){
    list.innerHTML = ``
    arr.map(item => {
        let elItem = document.createElement("li")
        elItem.className = `bg-orange-300 p-3 rounded-[20px]`
        elItem.innerHTML = `
            <p>
                <span class="font-bold">ID</span>: ${item.id}
            </p>
            <p>
                <span class="font-bold">Post ID</span>: ${item.postId}
            </p>
            <p>
                <span class="font-bold">Name</span>: ${item.name}
            </p>
            <p>
                <span class="font-bold">Email</span>: ${item.email}
            </p>
            <p>
                <span class="font-bold">Body</span>: ${item.body}
            </p>
        `
        list.appendChild(elItem)
    })
}
// ------ Commnet end ------


elModalWrapper.addEventListener("click", function(evt){
    if(evt.target.id == "modal-wrapper"){
        elModalWrapper.classList.remove("open-modal")
    }
})






