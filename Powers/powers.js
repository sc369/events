const flight = document.querySelector("#flight")
const mindReading = document.querySelector("#mindreading")
const xRay = document.querySelector("#xray")
const body = document.querySelector("body")

const activateAll = () => {
    flight.classList.replace("power_disabled", "power_enabled")
    xRay.classList.replace("power_disabled", "power_enabled")
    mindReading.classList.replace("power_disabled", "power_enabled")
}

const deactivateAll = () => {
    flight.classList.replace("power_enabled", "power_disabled")
    xRay.classList.replace("power_enabled", "power_disabled")
    mindReading.classList.replace("power_enabled", "power_disabled")
}

const mindReadingHandlerFunction = () => {
    mindReading.classList.replace("power_disabled", "power_enabled")
}

const flightHandlerFunction = () => {
    flight.classList.replace("power_disabled", "power_enabled")
}

const xRayHandlerFunction = () => {
    xRay.classList.replace("power_disabled", "power_enabled")
}

body.addEventListener("click", () => {
    console.log(event)
    if (event.target.id === "activate-flight") {
        flightHandlerFunction()
        console.log(flight)
    }

    if (event.target.id === "activate-mindreading") {
        mindReadingHandlerFunction()
        console.log(mindReading)
    }

    if (event.target.id === "activate-xray") {
        xRayHandlerFunction()
        console.log(xRay)
    }

    if (event.target.id === "activate-all") {
        activateAll()
        console.log(document.querySelector("#mindreading"))
        console.log(document.querySelector("#xray"))
        console.log(document.querySelector("#flight"))
    }

    if (event.target.id === "deactivate-all") {
        deactivateAll()
        console.log(document.querySelector("#mindreading"))
        console.log(document.querySelector("#xray"))
        console.log(document.querySelector("#flight"))

    }
})
