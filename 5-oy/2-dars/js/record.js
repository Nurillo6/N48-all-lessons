let elBtn = document.querySelector(".click")
let record = new webkitSpeechRecognition()

record.lang = "uz-UZ"

record.onresult = (evt) => {
  const result = evt.results[0][0].transcript
  console.log(result);
  if(result == "salom"){
    document.body.style = "background-color:teal"
  }
  else if(result == ""){
    
  }
}

elBtn.addEventListener("click", () => {
  record.start()
})