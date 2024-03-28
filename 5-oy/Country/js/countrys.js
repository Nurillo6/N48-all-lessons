const countries = JSON.parse(window.sessionStorage.getItem("countries")) || [
  {
    id: 1,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
    name: "Germany",
    population: "81,770,900",
    region: "Europe",
    capital: "Berlin",
    isLike:false,
    isBasket:false
  },
  {
    id: 2,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png",
    name: "Spain",
    population: "323,947,000",
    region: "Europe",
    capital: "Madrid",
    isLike:false,
    isBasket:false
  },
  {
    id: 3,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/640px-Flag_of_Brazil.svg.png",
    name: "Brazil",
    population: "206,135,893",
    region: "Americas",
    capital: "Brasília",
    isLike:false,
    isBasket:false
  },
  {
    id: 4,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/1024px-Flag_of_Iceland.svg.png",
    name: "Iceland",
    population: "334,300",
    region: "Europe",
    capital: "Reykjavík",
    isLike:false,
    isBasket:false
  },
  {
    id: 5,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Flag_of_Afghanistan_%282013%E2%80%932021%29.svg/1024px-Flag_of_Afghanistan_%282013%E2%80%932021%29.svg.png",
    name: "Afghanistan",
    population: "27,657,145",
    region: "Asia",
    capital: "Kabul",
    isLike:false,
    isBasket:false
  },
  {
    id: 6,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1280px-Flag_of_Uzbekistan.svg.png",
    name: "Uzbekistan",
    population: "35,482,369",
    region: "Asia",
    capital: "Tashkent",
    isLike:false,
    isBasket:false
  },
  {
    id: 7,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/2560px-Flag_of_Albania.svg.png",
    name: "Albania",
    population: "2,886,026",
    region: "Europe",
    capital: "Tirana",
    isLike:false,
    isBasket:false
  },
  {
    id: 8,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/1280px-Flag_of_Algeria.svg.png",
    name: "Algeria",
    population: "40,400,000",
    region: "Africa",
    capital: "Algiers",
    isLike:false,
    isBasket:false
  },
]
window.sessionStorage.setItem("countries", JSON.stringify(countries))

let elCounrieList = document.querySelector(".hero__countries")
let elSelect = document.querySelector(".hero__select")
let elInput = document.querySelector(".hero__input")
let elModalWrapper = document.querySelector(".modal-wrapper")
let elModal = document.querySelector(".modal")

function renderCountry(arr){
  elCounrieList.innerHTML = ""
  const sortedArr = arr.sort((a, b) => a.name < b.name ? -1 : 1)
  sortedArr.map(item => {
    let elItem = document.createElement("li")
  
    elItem.classList.add("hero__item")
    elItem.innerHTML = `
    <img class="hero__img" src=${item.img} alt="Country img" width="100%" height="200"/>
    <b>${item.id}</b>
    <h2 class="hero__name">Country : ${item.name}</h2>
    <p class="hero__population">Population : ${item.population}</p>
    <p class="hero__region">Region : ${item.region}</p>
    <p class="hero__capital">Capital :${item.capital}</p>
    <div class="hero__basic-content">
      <div>
        <button class=${item.isLike ? "like" : "dislike"} onclick="likeBtnClick(${item.id})">Like</button>
        <button class=${item.isBasket ? "like" : "dislike"} onclick="basketBtnClick(${item.id})">Basket</button>
        <button onclick="moreBtnClicked(${item.id})" id=${item.id}>More</button>
      </div>
      <div>
        <button>Update</button>
        <button>Delete</button>
      </div>
    </div>
    `
    elCounrieList.appendChild(elItem)

    
    
  })
}

// ------- Modal Click start ---------
function moreBtnClicked(clickedId){
  elModalWrapper.classList.add("open-modal")
  const data = countries.find(item => item.id == clickedId)
  elModal.innerHTML = `
  <div class="modal__img-wrapper">
    <img class="hero__img modal__img" src=${data.img} alt="Country img" width="100%" height="200"/>
  </div>
  <div class="modal__content-wrapper">
    <b>${data.id}</b>
    <h2 class="hero__name">Country : ${data.name}</h2>
    <p class="hero__population">Population : ${data.population}</p>
    <p class="hero__region">Region : ${data.region}</p>
    <p class="hero__capital">Capital :${data.capital}</p>
  </div>
  `
}
elModalWrapper.addEventListener("click", function(evt){
  if(evt.target.id == "modal-wrapper"){
    elModalWrapper.classList.remove("open-modal")
  }
})
// ------- Modal Click end ---------

// ---------- Select Options created ------------
function renderSelectOptions(arr, innerTag){
  arr.map(item => {
    let elOption = document.createElement("option")
    elOption.textContent = item.name
    elOption.setAttribute("value", item.id)
    innerTag.appendChild(elOption)
  })
}
renderSelectOptions(countries,elSelect)
// ---------- Select Options end ------------


renderCountry(countries)

elSelect.addEventListener("change", function(evt) {
  const clickId = evt.target.value
  if(clickId == 0){
    renderCountry(countries)
  }
  else{
    const filteredArr = countries.filter(item => item.id == clickId)
    renderCountry(filteredArr)

    // const findedArr = countries.find(item => item.id == clickId)
    // renderCountry([findedArr])
  }
})

// ------ Modal start ------------

// ---------- Mode start ----------
let elModeBtn = document.querySelector(".header__mode-btn")
elModeBtn.addEventListener("click" ,function(){
  document.body.classList.toggle("mode")
})
// ---------- Mode end ----------


// ----------- input search start ---------------
let elSearchingText = document.querySelector(".searching-text")
elInput.addEventListener("keyup", function(evt) {
  const inputVal = evt.target.value.trim();
  elSearchingText.textContent = inputVal
  const data = countries.filter(item => item.name.toLowerCase().includes(inputVal.toLowerCase()) || item.population.split(",").join("").includes(inputVal))
  renderCountry(data)
})
// ------------input search end -----------------


//  --------------- like start ---------------
let elLikeCount = document.querySelector(".like-count")
elLikeCount.textContent = countries.filter(item => item.isLike == true).length


let elCountWrapperBtn = document.querySelector(".header__like-btn")
function likeBtnClick(id){
  countries.filter(item => item.id == id ? item.isLike = !item.isLike : "")
  elLikeCount.textContent = countries.filter(item => item.isLike == true).length
  renderCountry(countries)
  window.sessionStorage.setItem("countries", JSON.stringify(countries))
}

elCountWrapperBtn.addEventListener("click", function(){
  const countFilter = countries.filter(item => item.isLike == true)
  renderCountry(countFilter)
  window.sessionStorage.setItem("countries", JSON.stringify(countries))
  })
//  --------------- like end ---------------

// ------- basket count start ------------
let elBasketCountBtn = document.querySelector(".header__basket-btn")
let countBasket = document.querySelector(".basket-count")

countBasket.textContent = countries.filter(item => item.isBasket == true).length

function basketBtnClick(id){
  countries.filter(item => item.id == id ? item.isBasket = !item.isBasket : "")
  countBasket.textContent = countries.filter(item => item.isBasket == true).length
  renderCountry(countries)
  window.sessionStorage.setItem("countries", JSON.stringify(countries))
}
elBasketCountBtn.addEventListener("click", function(){
  const countFilter = countries.filter(item => item.isBasket == true)
  renderCountry(countFilter)
  window.sessionStorage.setItem("countries", JSON.stringify(countries))
})
// ------- basket count end ------------