// console.log('go\'zal');
// console.log("Bot\nir"); new line
// console.log("Shu\tkur"); tab

// ------Errors------------
// 1.Sintaktik error => console.log('salom)
// 2.Reference error => not defined
// 3.Type errpr => let a = "salom "; a.map(item => (console.log(a)))

// 4.EvalError => Bu error hozirgi JavaScript versiyalarida qo’llanilmaydi. Lekin  funksiyasini noto’g’ri ishlatganda, SyntaxError yoki TypeError kabi boshqa xatolar o’tkazilishi mumkin, oldin JS eski versionlarida functionda hatolik chiqganida EvalError qaytgan
// throw new EvalError("Hello this is Error ")

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


// ============= Try Catch ============
// function anyFunc(a) {
//   if (typeof a == "string") {
//     return "Bu string method"
//   }
//   else {
//     return []
//   }
// }
// const data = anyFunc("sa")

// try {
//   console.log(data.map(item => item));
// }
// catch (err) {
//   alert("Siz hato qildinggiz ")
// }
// finally {
//   console.log("Code finish");
// }



// ======Regex======
// [a-z] , [A-Z] , [a-zA-X] , [a-zA-z0-9]
// match, test, replace
// let regex = /salom/gi
// let text = "Salom yaxshimisiz , ishlariz yaxshimi salom"
// console.log(text.match(regex));


// ======== setTimeOut ======
// asinxron function
// setTimeout(() => {
//   document.body.style = "background-color:red"
// }, 3000)
// setTimeout(() => {
//   document.body.style = "background-color:blue"
// }, 5000)
// setTimeout(() => {
//   document.body.style = "background-color:green"
// }, 8000)
// setTimeout(() => {
//   document.body.style = "background-color:yellow"
// }, 10000)

// ========== setInterval ========
// let counter = document.querySelector(".couter")
// let count = 0
// setInterval(() => {
//   count++
//   counter.textContent = count

// }, 1000)

// let elCard1 = document.querySelector(".card1")
// let elCard2 = document.querySelector(".card2")
// let elCard3 = document.querySelector(".card3")

// const int = setTimeout(() => {
//   elCard1.classList.add("red")
// }, 1000)
// =============== clearTimeout ========
// elCard1.addEventListener("click", () => {
//   clearTimeout(int)
// })

// function changeColors() {
//   setTimeout(() => {
//     elCard1.classList.add("red")
//     elCard2.classList.remove("yellow")
//     elCard3.classList.remove("green")
//   }, 1000)
//   setTimeout(() => {
//     elCard2.classList.add("yellow")
//     elCard1.classList.remove("red")
//     elCard3.classList.remove("green")
//   }, 3000)
//   setTimeout(() => {
//     elCard3.classList.add("green")
//     elCard1.classList.remove("red")
//     elCard2.classList.remove("yellow")
//   }, 5000)
// }
// changeColors()

// setInterval(() => {
//   changeColors()
// }, 9000)

// ============= clearInterval =============
// let count = 0
// function addCount() {
//   count++
//   console.log(count);
// }

// const myInter = setInterval(() => {
//   addCount()
// }, 1000)

// elCard1.addEventListener("click", () => {
//   clearInterval(myInter)
//   console.log("Stop count");
// })

