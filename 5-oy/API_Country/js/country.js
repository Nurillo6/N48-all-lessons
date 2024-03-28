const getAllAPI = "https://restcountries.com/v3.1/all"

let countryList = document.querySelector(".country-list")
let searchingInput = document.querySelector(".searching-input")
let searchingInputCapital = document.querySelector(".searching-input-capital")
let selectRegion = document.querySelector(".select-region")

let elModalWrapper = document.querySelector(".modal-wrapper")
let elModal = document.querySelector(".modal")

let optionList = []

const getALLCountry = async (URL) => {
    const response = await fetch(URL)
    const data = await response.json()
    return data
}
getALLCountry(getAllAPI).then(res => {
    renderCountry(res,countryList)
    res.map(region => {
        if(!optionList.includes(region.region)){
            optionList.push(region.region)
        }
    })
    optionList.map(item => {
        let elOption = document.createElement("option")
        elOption.textContent = item
        elOption.value = item
        selectRegion.appendChild(elOption)
    })
})

function renderCountry(arr, list, isLoading){
    list.innerHTML = ""
    arr.map(item => {
        let elItem = document.createElement("li")
        elItem.className = `w-[350px] bg-slate-300 p-2 rounded-[10px]`
        elItem.innerHTML = `
            <img class="h-[200px]" src=${item?.flags.png} width="350" height="200" alt="Render Img"/>
            <div class="p-3">
                <div>
                    <span class="font-semibold">Country:</span>
                    <span>${item.altSpellings[1]}</span>
                </div>
                <div>
                    <span class="font-semibold">Capital:</span>
                    <span>${item.capital ? item.capital[0] : "-" }</span>
                </div>
                <div>
                    <span class="font-semibold">Area:</span>
                    <span>${item.area}</span>
                </div>
                <div>
                    <span class="font-semibold">Region:</span>
                    <span>${item.region}</span>
                </div>
                <div>
                    <span class="font-semibold">Population:</span>
                    <span>${item.population}</span>
                </div>
                <div>
                    <span class="font-semibold">Language:</span>
                    <span>${item.languages ? Object.values(item.languages)[0] : "-"}</span>
                </div>
                <div class="mt-2">
                    <button id=${item.capital ? item.capital.join(""): 0} class="more-btn border-transparent border-[2px] bg-teal-500 hover:bg-transparent hover:border-teal-500 hover:text-teal-500  p-2 rounded-[10px] font-bold text-white">More</button>    
                </div>
            </div>
        `
        list.appendChild(elItem)
    })
}

searchingInput.addEventListener("keyup", function(evt){
    let value = evt.target.value;

    if(value){
        getALLCountry(`https://restcountries.com/v3.1/name/${value}`).then(res => {
            renderCountry(res, countryList)
        })
    }
    else{
        getALLCountry(getAllAPI).then(res => {
            renderCountry(res,countryList)
        })
    }
})

searchingInputCapital.addEventListener("keyup", function(evt){
    let value = evt.target.value;

    if(value){
        getALLCountry(`https://restcountries.com/v3.1/capital/${value}`).then(res => {
            renderCountry(res, countryList)
        })
    }
    else{
        getALLCountry(getAllAPI).then(res => {
            renderCountry(res,countryList)
        })
    }
})

countryList.addEventListener("click", function(evt){
    if(evt.target.matches(".more-btn")){
        const capital = evt.target.id;
        elModalWrapper.classList.add("open-modal")
        elModal.innerHTML = `
        <img src="./images/loading.svg" width="100" height="100"/>
        `
        getALLCountry(`https://restcountries.com/v3.1/capital/${capital}`)
        .then(res => {
            elModal.innerHTML = `'
            <div class="flex justify-between">
                <img class="h-[200px]" src=${res[0]?.flags.png} width="350" height="200" alt="Render Img"/> 
                <div class="p-3">
                    <div>
                        <span class="font-semibold">Country:</span>
                        <span>${res[0].altSpellings[1]}</span>
                    </div>
                    <div>
                        <span class="font-semibold">Capital:</span>
                        <span>${res[0].capital ? res[0].capital[0] : "-" }</span>
                    </div>
                    <div>
                        <span class="font-semibold">Area:</span>
                        <span>${res[0].area}</span>
                    </div>
                    <div>
                        <span class="font-semibold">Population:</span>
                        <span>${res[0].population}</span>
                    </div>
                    <div>
                        <span class="font-semibold">Language:</span>
                        <span>${res[0].languages ? Object.values(res[0].languages)[0] : "-"}</span>
                    </div>
                </div>
            </div>
            `
        })
    }
})


elModalWrapper.addEventListener("click", function(evt){
    if(evt.target.id == "modal-wrapper"){
        elModalWrapper.classList.remove("open-modal")
    }
})

selectRegion.addEventListener("change", function(evt){
    const value = evt.target.value;
    if(value == "All"){
        getALLCountry(`https://restcountries.com/v3.1/all`)
        .then(res => {
            renderCountry(res, countryList)
        })
    }
    else{
        getALLCountry(`https://restcountries.com/v3.1/region/${value}`)
        .then(res => {
            renderCountry(res, countryList)
        })
    }
})



let elLogOutBtn = document.querySelector(".log-out-btn")
elLogOutBtn.textContent = JSON.parse(window.localStorage.getItem("user")).username
elLogOutBtn.addEventListener("click", function(){
    const elConfirm = confirm("Log out sistem")
    if(elConfirm){
        localStorage.clear()
        window.location = "/login.html"
    }
})