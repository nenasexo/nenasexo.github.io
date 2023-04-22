let loader = document.getElementById("loading")
let circle = document.getElementById("circle")

setTimeout(()=>{
    document.getElementsByTagName("body")[0].style.overflow = "auto"
    document.getElementsByTagName("body")[0].style.overflowY = "auto"
    loader.style.display = "none" 
    circle.style.display = "none"
}, 2500)
