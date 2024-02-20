
// ------Errors------------

// 1.Sintaktik error => 
// 2.Reference error => 
// 3.Type error =>
// 4.EvalError
// 5.InternalError = x
// 6.RangeError

// const obj = {
//     name:"Abdulloh",
//     age:19
// }

// console.log(x); => not defined 

// 3.Type error => 
// console.log(obj.map(item => item));



// 4.EvalError => Bu error hozirgi JavaScript versiyalarida qo’llanilmaydi. Lekin  funksiyasini noto’g’ri ishlatganda, SyntaxError yoki TypeError kabi boshqa xatolar o’tkazilishi mumkin, oldin JS eski versionlarida functionda hatolik chiqganida EvalError qaytgan
// throw new EvalError("Hello this is Error")


// 5.InternalError => soni jihatdan katta Looping holatlarida , ichma ichma case lari kop bolgan swichlarda , ishlatiadi , bu JS ning hozirgi versionda deyarli ishlatilmaydi
// function loop(x) {
//   if (x > 1000000000000) {
//     return;
//   }
//   loop(x + 1)
// }
// console.log(loop(0));

// 6.RangeError => JavaScriptda bir qiymatning belgilangan chegaralardan tashqari bo’lgan bo’lishini ko’rsatadigan xato
// function tekshir(x) {
//   if (!(x >= -500 && x <= 500)) {
//     throw new RangeError("-500 va 500 orasida emas")
//   }
// }
// tekshir(800)
// RangeError ishlatilish tartibi shunday yani oshib ketgan qiymatlar uchun ozimiz errorni elon qilib qoyishimiz kerak


// ============ try Catch ============

// try{
//     obj.forEach(item => console.log(item))
// }
// catch(err) {
//     alert("Sizda hatolik bor !")
// }
// finally{
//     console.log("Code finish");
// }




// ========== Regex ===========
// let regex = /Salom/gi;
// let text = "Salom yaxshimisiz Abdulloh , Salom  yaxshi salom"
// test, match , replace , 
// console.log(regex.test(text));
// console.log(text.match(regex));
// console.log(text.replace(regex, "Zo'r"));

// let stringText = 'O\'rikzor' 
// let stringText = "O'ri\nkzor" // new line
// let stringText = "O'ri\tkzor" // tab
// console.log(stringText);


// ========= setTimeout ======== // asinxron function 
// setTimeout(() => {
//     document.body.style = "background-color:red"
// },2000)
// setTimeout(() => {
//     document.body.style = "background-color:blue"
// },4000)
// setTimeout(() => {
//     document.body.style = "background-color:yellow"
// },6000)
// setTimeout(() => {
//     document.body.style = "background-color:teal"
// },8000)

const elCard1 = document.querySelector(".card1")
const elCard2 = document.querySelector(".card2")
const elCard3 = document.querySelector(".card3")

// const changeColoeCard1 = setTimeout(() => {
//     elCard1.classList.add("yellow")
// },4000)

// elCard1.addEventListener("click", () => {
//     console.log("code stop");
//     clearTimeout(changeColoeCard1)
// })

// ======= setInterval ==========
// let elCounterTag = document.querySelector(".couter")
// let count = 0
// // setInterval(() => {
// //     count++
// //     elCounterTag.textContent = count
// // },1000)

// function changeColors(){
//     setTimeout(() => {
//         elCard1.classList.add("red")
//         elCard2.classList.remove("yellow")
//         elCard3.classList.remove("green")
//     },1000)
//     setTimeout(() => {
//         elCard2.classList.add("yellow")
//         elCard1.classList.remove("red")
//         elCard3.classList.remove("green")
//     },4000)
//     setTimeout(() => {
//         elCard3.classList.add("green")
//         elCard1.classList.remove("red")
//         elCard2.classList.remove("yellow")
//     },6000)
// }
// changeColors()

// const stopInterval = setInterval(() => {
//     changeColors()
// },8000)

// elCard3.addEventListener("click", function(){
//     console.log("Interval stop");
//     clearInterval(stopInterval)
//     elCard1.classList.remove("red")
//     elCard2.classList.remove("yellow")
//     elCard3.classList.remove("green")
// })