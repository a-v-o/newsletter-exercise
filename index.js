const container = document.querySelector(".container")
const btn = document.getElementById("subscribe");
const label = document.getElementById("error-msg")
const email = document.getElementById("email");
const success = document.getElementById("success")
const dismiss = document.getElementById("dismiss")
const successMessage = document.getElementById("success-msg"); 


btn.addEventListener("click", showSuccess)
dismiss.addEventListener("click", dismissMessage)

function showSuccess() {
    const user = String(email.value);

    if (user == "" || user.includes("@") == false || user.substring(user.indexOf("@") + 1) == "") {
        displayError(true)
    } else {
        success.style.visibility = "visible"
        container.style.visibility = "hidden"
        successMessage.innerHTML = "A confirmation email has been sent to " + user + ". Please open it and click the button inside to confirm your subscription."
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

