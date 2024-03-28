let elKarkasniyList = document.querySelector(".karkasniy-list")
let elNaduvniyList = document.querySelector(".naduvniy-list")
let products = JSON.parse(window.localStorage.getItem("products"))

let elModalWrapper = document.querySelector(".modal-wrapper")
let elModal = document.querySelector(".modal")
let datas = new Date()

let orderProductList = JSON.parse(window.localStorage.getItem("orderList")) || []

function renderProduct(arr, list, id){
    list.innerHTML = ""
    
    arr.map(item => {
        if(item.type == id){
            let elItem = document.createElement("li")
            elItem.classList.add("list-item")
            elItem.innerHTML = `
            <img src=${item.img} width="200" height="100" alt="render img"/>
            <span class="
            ${item.status == 1 ? "bg-green-500 text-white" : ""}
            ${item.status == 2 ? "bg-yellow-500 text-white" : ""}
            ${item.status == 3 ? "bg-red-500 text-white" : ""}
            ">
            ${item.status == 0 ? "" : ""}
            ${item.status == 1 ? "Рекомендуем" : ""}
            ${item.status == 2 ? "Cкидка" : ""}
            ${item.status == 3 ? "Нет в наличии" : ""}
            </span>
            <div>
                <h2>${item.name}</h2>
                <small>${item.oldPrise}</small>
                <p>${item.newPrise}</p>
                <button onclick="orderProduct(${item.id})">Заказать</button>
            </div>
            `
            list.appendChild(elItem)
        }
    })
}

renderProduct(products, elKarkasniyList, "0")
renderProduct(products, elNaduvniyList, "1")

//Order product start
function orderProduct(id){
    const data = products.find(item => item.id == id)
    elModalWrapper.classList.add("open-modal")
    elModal.innerHTML = `
        <div>

            <img src=${data.img} width="250" height="100"/>
            <p>${data.newPrise}</p>
        </div>
        <form class="order-form">
            <input required placeholder="Your name"/>  
            <input required placeholder="Phone number"/>  
            <input required placeholder="Address"/>
            <button>Заказать</button>  
        </form>
    
    `
    let elOrderForm = document.querySelector(".order-form")

    elOrderForm.addEventListener("submit", function(evt){
        evt.preventDefault()

        let newTime = (`${datas.getDate().toString().padStart(2, "0")}.${(datas.getMonth() + 1).toString().padStart(2, 0)}.${datas.getFullYear()} ${datas.getHours().toString().padStart(2, "0")}:${datas.getMinutes().toString().padStart(2, "0")}`);

        const orderData = {
            name:evt.target[0].value,
            phoneNumber:evt.target[1].value,
            address:evt.target[2].value,
            time:newTime,
            id:orderProductList.length ? orderProductList[orderProductList.length - 1].id + 1  : 1,
            img:data.img,
            price:data.newPrise,

        }
        orderProductList.push(orderData)
        elModal.innerHTML = `
         <h2>Thanks for your ordering </h2>
        `
        setTimeout(() => {
            elModalWrapper.classList.remove("open-modal")
        },2000)
        window.localStorage.setItem("orderList", JSON.stringify(orderProductList))
    })  
}

//Order product end


elModalWrapper.addEventListener("click", function(evt){
    if(evt.target.id == "modal-wrapper"){
        elModalWrapper.classList.remove("open-modal")
    }
})
window.localStorage.setItem("orderList", JSON.stringify(orderProductList))