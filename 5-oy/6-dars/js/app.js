
let elImg = document.querySelector(".car-img")

// let x = 0
// let y = 0
// document.body.addEventListener("keypress", function(evt){
//     if(evt.key == "s"){
//         elImg.className = `translate-y-[${y+=10}px] translate-x-[${x}px]`
//     }
//     else if(evt.key == "w"){
//         elImg.className = `translate-y-[${y-=10}px] translate-x-[${x}px]`
//     }
//     else if(evt.key == "d"){
//         elImg.className = `translate-y-[${y}px] translate-x-[${x+=10}px]`
//     }
//     else if(evt.key == "a"){
//         elImg.className = `translate-y-[${y}px] translate-x-[${x-=10}px]`
//     }
//     else if(evt.key == "b"){
//         document.body.style = "background-color:black"
//     }
//     else if(evt.key == "l"){
//         document.body.style = "background-color:white"
//     }

// })


// ------------ location start -------------
// console.log(location);
// elImg.addEventListener("dblclick", function(){
    // console.log(location.pathname);
    // location.pathname = "/about.html"
    // location.reload()
    // location.replace("/about.html")
// })
// ------------ location end -------------


// --------------- navigator start ----------
// navigator.geolocation.watchPosition((evt => {
//         const lat = evt.coords.latitude;
//         const long = evt.coords.longitude;
//         console.log(lat, long);
//         let elIframe = document.createElement("div")
//         elIframe.innerHTML = `
//         <iframe src="https://maps.google.com/maps?q=${lat},${long}&hl=es;z=14&amp;output=embed" width="450" height="450"></iframe>
//         `
//         document.body.appendChild(elIframe)
//     }))

// navigator.getBattery().then(res => {
//     console.log(res.level);
//     console.log(res.charging);
// })

// --------------- navigator end ----------


// ------------ Browser Storage ----------
// 1.LocalStorage -> 5MB - 10MB
// setItem("key", "value"), getItem("key") , removeItem("key"), clear()
// localStorage.setItem("data", "Salom1")
// console.log(localStorage.getItem("data"));
// localStorage.removeItem("data")
// localStorage.clear()

// 2.Session storage -> 5MB
// setItem("key", "value"), getItem("key") , removeItem("key"), clear()
// sessionStorage.setItem("data2","session2") 


// 3.Cookie storage -> 4KB , 0.0004MB 

// function getCookie(key){
    //     const data = document.cookie.split(";").filter(item => item.includes(key)).join("").split("=")[1]
    //     return data;
    // }
    
    // console.log(getCookie("name"));


// function hasCookies(key){
//     const data = document.cookie.split(";").filter(item => item.includes(key)).join("").split("=")[0] == key
//     return data;
// }


// const deleteCookie = (name, path, domain) => {
//     if (hasCookies(name)) {
//         document.cookie = name + "=" +
//         ((path) ? ";path=" + path : "") +
//         ((domain) ? ";domain=" + domain : "") +
//         ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
//     }
// }  => delete chala qolib ketdi 

// deleteCookie("name")


// document.cookie = "name=Abdulloh;expires=Sat, 03 Mar 2024 19:50:17 GMT"
// document.cookie = "data=Salom;path=/;expires=Sat, 03 Mar 2024 19:50:17 GMT"




// Img URL start
// let elInput = document.querySelector(".file-input")
// let elRenderImg = document.querySelector(".render-img")
// let imgsWrapper = document.querySelector(".img-wrapper")

// let imgArr = []
// elInput.addEventListener("change", function(evt){
//     imgArr.push(URL.createObjectURL(evt.target.files[0]))
//     renderImgs(imgArr)
// })

// function renderImgs(arr){
//     imgsWrapper.innerHTML = ""
//     arr.map(item => {
//         let elImg = document.createElement("img")
//         elImg.classList.add("render-img")
//         elImg.src = item
//         imgsWrapper.appendChild(elImg)
//     })
// }




// Img URL end