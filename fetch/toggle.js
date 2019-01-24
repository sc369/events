const container = document.querySelector("#container")
const p = document.querySelector("#text")
console.log(p)

container.addEventListener("click", function(event) {
    console.log(event)
if (event.target.id === "font") {
p.classList.toggle("large")
console.log(p.classList)
}

console.log
if (event.target.id === "color") {
p.classList.toggle("blue")
}
})
