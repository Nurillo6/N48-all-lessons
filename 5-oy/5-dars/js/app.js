
let elWrapper = document.querySelector(".wrapper")
// elWrapper.innerHTML = `
//     <span>Hello</span>
// `

// elWrapper.outerHTML = `
//     <h1>Hello Abdulloh</h1>
// `



elWrapper.setAttribute("id", "ID")
elWrapper.setAttribute("value", "Hello")
elWrapper.dataset.surname = "Ubaydullaxo'jayev"

// console.log(elWrapper.hasAttribute("data-surname"));
// console.log(elWrapper.getAttribute("data-surname"));
// elWrapper.id = "ID"

// elWrapper.addEventListener("click", function(evt){
//     console.log(evt.target.dataset.surname);
// })


// let elImg = document.createElement("img")
// elImg.setAttribute("src", "https://picsum.photos/id/5/200/200")
// elImg.src = "https://picsum.photos/id/5/200/200"
// elImg.setAttribute("width", "200px")
// elImg.width = 200
// elImg.height = 200
// elImg.setAttribute("style", "border-radius:50%")
// elImg.style = "border-radius:50%"

// elWrapper.prepend(elImg)

// let list = document.createElement("ul")

// let item1 = document.createElement("li")
// let item2 = document.createElement("p")
// let item3 = document.createElement("strong")


// elWrapper.prepend(list, item1, item2, item3)


// elWrapper.classList.add("circle-divs")
// elWrapper.classList.remove("circle-divs")
// elWrapper.classList.toggle("circle-div")

// elWrapper.className = "new-wrapper-div p-5 space-x-10"
// elWrapper.setAttribute("class", "Hello-new-div p-5 space-x-10")


// ----------- Mouse evenet ----------
// elWrapper.addEventListener("click", function(evt) {
//     // console.log(evt.target.dataset.surname);
//     // console.log(evt.target.id);
// })

// elWrapper.addEventListener("dblclick", function(evt) {
//     // console.log(evt.target.dataset.surname);
//     console.log(evt.target.id);
// })

// elWrapper.addEventListener("mouseup", function(evt) {
//     elWrapper.className = "mouseup"
//     console.log("Mouse Up");
// })

// elWrapper.addEventListener("mousedown", function(evt) {
//     elWrapper.className = "mousedown"
//     console.log("Mouse Down");
// })

// elWrapper.addEventListener("mouseenter", function(){
//     elWrapper.className = "mouseup"
// })
// elWrapper.addEventListener("mouseleave", function(){
//     elWrapper.className = "mousedown"
// })

// ------ Input events --------- 
let elInput = document.querySelector(".search-input")

// elInput.addEventListener("keyup", function(evt){
//     console.log(evt.target.value);
// })

// elInput.addEventListener("keydown", function(evt){
//     console.log(evt.target.value);
// })

// elInput.addEventListener("keypress", function(evt){
//     console.log(evt.target.value);
// })

// elInput.addEventListener("keyup", function(evt){
    // if(evt.which == 13){
    //     elWrapper.className = "mouseup"
    // }
    // else if(evt.which == 8){
    //     elWrapper.className = "mousedown"
    // }
    // if(evt.keyCode == 13){
    //     elWrapper.className = "mouseup"
    // }
    // else if(evt.keyCode == 8){
    //     elWrapper.className = "mousedown"
    // }
    // if(evt.key == "h"){
    //     elWrapper.className = "mouseup"
    // }
    // else if(evt.key == "Backspace"){
    //     elWrapper.className = "mousedown"
    // }
    // console.log(evt.which);
// })


// Grabbing
// elWrapper.addEventListener("mouseenter", function(evt){
//     elWrapper.classList.add("grab")
//     elWrapper.classList.remove("grabing")
//     console.log(evt.target.id);

// })

// elWrapper.addEventListener("mousedown", function(evt){
//     elWrapper.classList.add("grabing")
//     elWrapper.classList.remove("grab")
// })

// elWrapper.addEventListener("mouseup", function(evt){
//     elWrapper.classList.add("grab")
//     elWrapper.classList.remove("grabing")
// })


//  --------------- Local storage ---------------

// let elName = "Abdulloh"
// let elBooleanData = false
// let elNumberData = 10

// let obj = {
//     name:"Abdulloh",
//     age:19
// }


// let array = [{name:"Abdulloh"},2,3,5]

// window.localStorage.setItem("newObj", JSON.stringify(array))

// const data = JSON.parse(window.localStorage.getItem("newObj"))
// console.log(data);


