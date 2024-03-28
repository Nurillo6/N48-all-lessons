let elForm = document.querySelector(".form")
let elInput = document.querySelector(".form-input")
let elList = document.querySelector(".list")

let elModalWrapper = document.querySelector(".modal-wrapper")
let elModal = document.querySelector(".modal")

let allCount = document.querySelector(".all-count")
let complateCount = document.querySelector(".complated-count")
let uncomplateCount = document.querySelector(".uncomplated-count")


let todos = JSON.parse(window.localStorage.getItem("todos")) || []

elForm.addEventListener("submit", function(evt){
    evt.preventDefault()
    if(evt.target[0].value.trim()){
        let data = {
            id:todos.length + 1,
            value:evt.target[0].value,
            isComplate:false
        }
        todos.push(data)
        renderTodo(todos, elList)
        evt.target.reset()

        window.localStorage.setItem("todos", JSON.stringify(todos))
    }
    else{
        alert("Inputni bosh qoldirmang")
    }
})

function renderTodo(arr, list){
    list.innerHTML = ""
    arr.map((item, index) => {
        let elItem = document.createElement("li")
        elItem.classList.add("todo-item")
        elItem.innerHTML = `
        <div class="value-wrapper ${item.isComplate ? "complate" : ""}">
            <span>${index + 1}.</span>
            <strong>${item.value}</strong>
        </div>
        <div class="btn-wrapper">
            <label>
                <input class="checkbox-todo visually-hidden" type="checkbox" id="${item.id}" />
                <div class="check-wrapper">
                    <span class=${item.isComplate ? "check-open" : "check-inner"}></span>
                </div>
            </label>
            <button onclick="updateClick(${item.id})">Update</button>
            <button onclick="deleteBtnClick(${item.id})">Delete</button>
        </div>
        `
        list.appendChild(elItem)
    })

    allCount.textContent = todos.length
    complateCount.textContent = todos.filter(item => item.isComplate == true).length
    uncomplateCount.textContent = todos.filter(item => item.isComplate == false).length
}

renderTodo(todos, elList)

allCount.parentElement.addEventListener("click", function(){
    renderTodo(todos, elList)
})
complateCount.parentElement.addEventListener("click", function(){
    const data = todos.filter(item => item.isComplate == true)
    renderTodo(data, elList)
})

uncomplateCount.parentElement.addEventListener("click", function(){
    const data = todos.filter(item => item.isComplate == false)
    renderTodo(data, elList)
})



//  -------------- Update part start -----------
function updateClick(id){
    elModalWrapper.classList.add("open-modal")
    const data = todos.find(item => item.id === id)
    
    elModal.innerHTML = `
    <div class="update-wrapper">
    <strong>Update your todo</strong>
    <input value=${data.value} class="update-input" placeholder="Enter your todo"/>
    <button onclick="updateBtnClick(${id})">Update</button>
    </div>
    `
}

function updateBtnClick(id){
    let elUpdatedValue = document.querySelector(".update-input").value
    const data = todos.find(item => item.id === id)
    data.value = elUpdatedValue
    elModalWrapper.classList.remove("open-modal")
    renderTodo(todos, elList)
    window.localStorage.setItem("todos", JSON.stringify(todos))
}
//  -------------- Update part end -----------


//  --------------- Delete start --------
function deleteBtnClick(id){
    elModalWrapper.classList.add("open-modal")
    elModal.innerHTML = `
        <div class="delete-wrapper">
            <h2>Are you sure delete</h2>
            <div>
                <button onclick="cencelModal()">Cencel</button>
                <button onclick="deleteSureBtn(${id})">Delete</button>
            </div>
        </div>
    `
}
function cencelModal(){
    elModalWrapper.classList.remove("open-modal")
}
function deleteSureBtn(id){
    const data = todos.findIndex(item => item.id == id)
    todos.splice(data, 1)
    elModalWrapper.classList.remove("open-modal")
    renderTodo(todos, elList)
    window.localStorage.setItem("todos", JSON.stringify(todos))
}
//  --------------- Delete end --------


// ------------ Modal start ----------
elModalWrapper.addEventListener("click", function(evt){
    if(evt.target.id == "modal-wrapper"){
        elModalWrapper.classList.remove("open-modal")
    }
})
// ------------ Modal end ----------


// ------ Checkbox start --------
elList.addEventListener("click", function(evt){
    if(evt.target.matches(".checkbox-todo")){
        const data = todos.find(item => item.id == evt.target.id)
        data.isComplate = !data.isComplate
        renderTodo(todos, elList)
        window.localStorage.setItem("todos", JSON.stringify(todos))
    }
})
// ------ Checkbox end --------

// window.localStorage.setItem("next-todo", JSON.stringify([{name:"Abdulloh"}]))
// window.localStorage.setItem("next-todo2", JSON.stringify([{name:"Abdulloh"}]))

// // window.localStorage.removeItem("next-todo")
// // window.localStorage.removeItem("next-todo2")

// window.localStorage.clear()