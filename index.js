const container = document.querySelector(".container")
const btn = document.getElementById("subscribe");
const label = document.getElementById("error-msg")
const email = document.getElementById("email");
const success = document.getElementById("success")
const dismiss = document.getElementById("dismiss")

btn.addEventListener("click", showSuccess)
dismiss.addEventListener("click", dismissMessage)


function showSuccess() {
    if (email.value == "" || String(email.value).includes("@") == false ) {
        displayError(true)
    } else {
        success.style.visibility = "visible"
        container.style.visibility = "hidden"
        displayError(false)
    }
}

function dismissMessage() {
    success.style.visibility = "hidden"
    container.style.visibility = "visible"
    displayError(false)
}

function displayError(bool) {
    if (bool === true) {
        email.classList.add("red")
        label.classList.add("error")
    } else {
        email.classList.remove("red")
        label.classList.remove("error")
    }
}

