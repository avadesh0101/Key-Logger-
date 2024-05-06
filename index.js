let start = document.getElementById("start")
let stop = document.getElementById("stop")
let logdown = document.getElementById("logdown")
let logup = document.getElementById("logup")


start.addEventListener("click" , ()=>{
    document.addEventListener("keydown" , pressDown)
    document.addEventListener("keyup" , releaseKey)
    start.disabled = true
    stop.disabled = false
})

stop.addEventListener("click" , ()=>{
    document.removeEventListener("keydown" , pressDown)
    document.removeEventListener("keyup" , releaseKey)
    logdown.textContent = " "
    logup.textContent = " "
    start.disabled = false
    stop.disabled = true
})



function pressDown(e){
   logdown.textContent = `Key ${e.key} is pressed down`
   logup.textContent = "Key is pressed"
}


function releaseKey(e){
    logdown.textContent = `Key ${e.key} was pressed`
    logup.textContent = `Key is up`
}