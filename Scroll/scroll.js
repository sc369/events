const audrey = document.getElementById("audrey")

window.addEventListener("scroll", function () {
console.log("scrolled")    
if (window.scrollY > 150) {
let dynamicWidth = (window.scrollY)/3
audrey.style.width = `${dynamicWidth}px`
}

if (window.scrollY > 400) {
let dynamicHeight = (window.scrollY)/4
audrey.style.height = `${dynamicHeight}px`
}
})

