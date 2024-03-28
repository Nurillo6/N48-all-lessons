let html = document.documentElement
let body = document.body
let head = document.head

// console.log(html.children);
// console.log(html.firstChild);
// console.log(html.lastChild);

// // console.log(head.childNodes.length);
// for(let child of head.childNodes){
//     console.log(child);
// }

// console.log();

// body.children.forEeach(item => console.log(item))

// for(let i = 0 ; i< body.children.length;i++){
//     console.log(body.children[i]);
// }

// let elTitle = document.querySelector(".title")
// console.log(elTitle.childNodes);
// console.log(elTitle.children[0].textContent);

let elList = document.querySelector(".list")
// let elCode = document.querySelector("blockquote")
// let elItem = document.querySelector("li")
// console.log(elList.children);
// console.log(elList.firstChild);
// console.log(elList.lastElementChild);

// console.log(elList.hasChildNodes());

// elList.nextElementSibling.textContent = "Next Element"
// elCode.previousElementSibling.classList.add("Hello")
// elItem.parentElement.className = "hero-list-wrapper"


// let elItems = document.querySelectorAll(".item")
// for(let item of elItems){
//     item.textContent = "Hello textContent";
// }

// -- Event delegation ------
// let elWrapper = document.querySelector(".wrapper")
// elWrapper.addEventListener("click", function(evt){
//     // if(evt.target.textContent == "Bold text"){
//         // }

//     if(evt.target.matches(".bold-text")){
//         alert("Siz strong ni bosdinggiz ")
//     }
//     if(evt.target.className == "bold-text"){
//         alert("Siz strong ni bosdinggiz ")
//     }
// })

// elList.innerHTML = `
//     Salom
// `