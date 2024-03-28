
let userList = document.querySelector(".user")
let postList = document.querySelector(".post")
let commentList = document.querySelector(".comment")

let elModalWrapper = document.querySelector(".modal-wrapper")
let elModal = document.querySelector(".modal")

const getData = async (URL) => {
    const res = await fetch(URL)
    const data = await res.json()
    return data
}


getData("https://jsonplaceholder.typicode.com/users").then(res => {
    getUsers(res, userList)
})
function getUsers(arr, list){
    list.innerHTML = ``
    arr.map(item => {
        let elItem = document.createElement("li")
        elItem.className = `w-full p-5 rounded-[10px] bg-teal-700`
        elItem.innerHTML = `
            <span class="text-white font-bold"><span class="font-normal">ID:</span> ${item.id}</span>
            <p class="text-white font-bold"><span class="font-normal">Name:</span> ${item.name}</p>
            <p class="text-white font-bold"><span class="font-normal">Username:</span> ${item.username}</p>
            <p class="text-white font-bold"><span class="font-normal">Email:</span> ${item.email}</p>
            <p class="text-white font-bold"><span class="font-normal">Phone:</span> ${item.phone.split(" ")[0]}</p>
            <p class="text-white font-bold"><span class="font-normal">Company:</span> ${item.company.name}</p>
            <p class="text-white font-bold"><span class="font-normal">Addess:</span> ${item.address.city}</p>
            <div class="flex items-center space-x-5">
                <button onclick="userBtnClick(${item.id})" class="bg-red-500 text-white font-semibold p-2 rounded-[10px] mt-2">Show Post</button>
                <button onclick="submitBtnClick(${item.id})" class="bg-green-500 text-white font-semibold p-2 rounded-[10px] mt-2">Submit</button>
                <button onclick="sendFileBtnClick(${item.id})" class="bg-blue-500 text-white font-semibold p-2 rounded-[10px] mt-2">Send File</button>
            </div>
        `
        list.appendChild(elItem)
    })
}

function userBtnClick(id){
    postList.innerHTML = "Loading..."
    commentList.innerHTML = ``
    getData(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then(res => {
        getPost(res, postList)
    })

}

// ----------- Posts start ------------

function getPost(arr, list){
    list.innerHTML = ``
    arr.map(item => {
        let elItem = document.createElement("li")
        elItem.className = `w-full p-5 rounded-[10px] bg-teal-700`
        elItem.innerHTML = `
            <span class="text-white font-bold"><span class="font-normal">ID:</span> ${item.id}</span> <br/>
            <span class="text-white font-bold"><span class="font-normal">User ID:</span> ${item.userId}</span>
            <p class="text-white font-bold"><span class="font-normal">Title:</span> ${item.title}</p>
            <p class="text-white font-bold"><span class="font-normal">Body:</span> ${item.body}</p>
            <button onclick="postBtnClick(${item.id})" class="bg-red-500 text-white font-semibold p-2 rounded-[10px] mt-2">Show Comment</button>
        `
        list.appendChild(elItem)
    })
}
function postBtnClick(id){
    commentList.innerHTML = "Loading..."
    getData(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).then(res => {
        getComment(res, commentList)
    })
}
// -------------- Posts end ----------

// ----------- Comment start -----------

function getComment(arr, list){
    list.innerHTML = ``
    arr.map(item => {
        let elItem = document.createElement("li")
        elItem.className = `w-full p-5 rounded-[10px] bg-teal-700`
        elItem.innerHTML = `
            <span class="text-white font-bold"><span class="font-normal">ID:</span> ${item.id}</span> <br/>
            <span class="text-white font-bold"><span class="font-normal">Post ID:</span> ${item.postId}</span>
            <p class="text-white font-bold"><span class="font-normal">Name:</span> ${item.name}</p>
            <p class="text-white font-bold"><span class="font-normal">Email:</span> ${item.email}</p>
            <p class="text-white font-bold"><span class="font-normal">Body:</span> ${item.body}</p>
        `
        list.appendChild(elItem)
    })
}
// ----------- Comment end -----------

elModalWrapper.addEventListener("click", function(e){
    if(e.target.id == "modal-wrapper"){
        elModalWrapper.classList.remove("open-modal")
    }
})


// Telegram Canel start
const CHAT_ID = "-1002044246744"
const TOKEN = "6794306192:AAFctxwGRhYIMkK536C1hHq3bdDvr9qawtI"
// const URL = `https://api.telegram.org/bot${ TOKEN }/sendMessage`
const URL = `https://api.telegram.org/bot${ TOKEN }/sendDocument`

function submitBtnClick(id){
    elModalWrapper.classList.add("open-modal")
    elModal.innerHTML = `
        Loading...
    `
    
    getData(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => {
        elModal.innerHTML = `
            <form class="flex flex-col gap-5 items-center tg-submit">
                <label class="flex flex-col">
                    <span>Enter your name</span>
                    <input value=${res.name} class="w-[250px] p-2 rounded-[10px]" type="text" placeholder="Enter your name"/>
                </label>
                <label class="flex flex-col">
                    <span>Enter your number</span>
                    <input value=${res.phone.split(" ")[0]} class="w-[250px] p-2 rounded-[10px]" type="text" placeholder="Enter your number"/>
                </label>
                <button class="bg-green-500 w-[50%] mx-auto text-white p-2 rounded-[10px]">Submit</button>
            </form>
    `
        let elForm = document.querySelector(".tg-submit")
        elForm.addEventListener("submit", function(e){
            e.preventDefault()
            let message = `<b>Order Site</b>\n`
            message += `<b>Name : ${e.target[0].value}</b>\n`
            message += `<b>Phone : ${e.target[1].value}</b>\n`
            
            axios.post(URL, {
                chat_id:CHAT_ID,
                parse_mode:"html",
                text:message
            })
            .then(res => {
                elModal.innerHTML = "Thank you"
                setTimeout(() => {
                    elModalWrapper.classList.remove("open-modal")
                },1500)
            })
        })
        
    })
}


function sendFileBtnClick(id) {
    elModalWrapper.classList.add("open-modal")
    elModal.innerHTML = `
        <form class="file-submit">
        <input type="file"/>
        <button class="bg-green-500 w-[50%] mx-auto text-white p-2 rounded-[10px]">Submit</button>
        </form>
    `

        let elForm = document.querySelector(".file-submit")
        elForm.addEventListener("submit", function(e){
            e.preventDefault()
            const formdata = new FormData()
            formdata.append('chat_id',CHAT_ID)
            formdata.append('document',e.target[0].files[0])

            axios.post(URL, formdata , {
                headers:{
                    "Content-Type":"multipart/formdata"
                }
            })
            .then(res => {
                elModal.innerHTML = "Thank you"
                setTimeout(() => {
                    elModalWrapper.classList.remove("open-modal")
                },1500)
            })
        })
    }
