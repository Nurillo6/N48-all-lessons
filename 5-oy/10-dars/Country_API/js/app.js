
let elList = document.querySelector(".country-list")

let elModalWrapper = document.querySelector(".modal-wrapper")
let elModal = document.querySelector(".modal")

let elSearchName = document.querySelector(".search-name")
let elSearchCapital = document.querySelector(".search-capital")
let elSelectRegion = document.querySelector(".select-region")

let selectOptinList = []

const getData = async (URL) => {
    const res = await fetch(URL)
    const data = await res.json()
    return data
}

getData("https://restcountries.com/v3.1/all").then(res =>{
    renderCountry(res, elList)
    res.map(item => {
        if(!selectOptinList.includes(item.region)){
            selectOptinList.push(item.region)
        }
    })
    selectOptinList.map(item => {
       let elOption = document.createElement("option")
       elOption.textContent = item
       elOption.value = item
       elSelectRegion.appendChild(elOption)
    })

})


function renderCountry(arr, list){
    list.innerHTML = ""
    arr.map(item => {
        let elItem = document.createElement("li")
        elItem.innerHTML = `
        <img class="w-[350px] h-[200px]" src=${item.flags.png} width="350" height="200"/>
        <div class="flex flex-col">
            <strong>${item.altSpellings[1]}</strong>
            <strong>${item.capital ? item.capital[0] : "-"}</strong>
        </div>
        <button id="${item.capital ? item.capital[0] : "-"}" class="bg-teal-500 more-btn">More</button>
        `
        list.appendChild(elItem)
    })
}

elSearchName.addEventListener("keyup", function(evt){
    let value = evt.target.value
    if(value){
        getData(`https://restcountries.com/v3.1/name/${value}`).then(res => {
            renderCountry(res, elList)
        })
    }
    else{
        getData(`https://restcountries.com/v3.1/all`).then(res => {
            renderCountry(res, elList)
        })
    }
})

elSelectRegion.addEventListener("change", function(evt){
    let value = evt.target.value
    if(value != "All"){
        getData(`https://restcountries.com/v3.1/region/${value}`).then(res => {
            renderCountry(res, elList)
        })
    }
    else{
        getData(`https://restcountries.com/v3.1/all`).then(res => {
            renderCountry(res, elList)
        })
    }
})

elList.addEventListener("click", function(evt){
    if(evt.target.matches(".more-btn")){
        let capital = evt.target.id
        elModalWrapper.classList.add("open-modal")
        elModal.innerHTML = `
        <img src="./images/loading.png" width="100" height="100"/>
        `
        getData(`https://restcountries.com/v3.1/capital/${capital}`).then(res => {
            elModal.innerHTML = `
            <img class="w-[350px] h-[200px]" src=${res[0].flags.png} width="350" height="200"/>
            <div class="flex text-white flex-col">
                <strong>${res[0].altSpellings[1]}</strong>
                <strong>${res[0].capital ? res[0].capital[0] : "-"}</strong>
            </div>
            `
        })
    }
})

elModalWrapper.addEventListener("click", function(evt){
    if(evt.target.id == "modal-wrapper"){
        elModalWrapper.classList.remove("open-modal")    }
})