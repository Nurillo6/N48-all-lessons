// ------------ login-form -----------
const logionForm = document.querySelector(".login-form")
logionForm.addEventListener("submit", function(evt){
    evt.preventDefault()
    const data = {
        username:evt.target[0].value,
        login:evt.target[1].value
    }
    const confirm = {
        username:"Abdulloh",
        login:"AU"
    }
    // if(data.username == confirm.username && data.login == confirm.login){
        window.localStorage.setItem("user", JSON.stringify(data))
            setTimeout(() => {
                window.location = "index.html"
            },1000)
    // }
    // else{
        // alert("Boshqa foydalanuvchi kirish man etiladi")
    // }
})