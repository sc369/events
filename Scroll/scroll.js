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
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */
 


    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */

