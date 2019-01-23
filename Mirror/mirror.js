const firstOutputBox = document.getElementById("one")
const secondOutputBox = document.getElementById("two")


const inputBox = document.querySelector("input")
const handleTextInput = () => {
    let keyPressed = inputBox.value
    firstOutputBox.innerHTML = keyPressed;
    secondOutputBox.innerHTML = keyPressed;
    }

inputBox.addEventListener("keyup", handleTextInput)

