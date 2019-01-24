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
body.addEventListener("click", () => {
    let powerType = event.target.id.split("-")[1]
    console.log(document.querySelector(`#${powerType}`))
    if (event.target.id === `activate-${powerType}`) {
        document.querySelector(`#${powerType}`).className = ("power_enabled")
    }

    if (event.target.id === "activate-all") {
        activateAll()
    }

    if (event.target.id === "deactivate-all") {
        deactivateAll()
    }

})
