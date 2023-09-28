function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    if (username === "" || password === "") {
        errorMessage.textContent = "Username dan password harus diisi!";
        return false;
    } else {
        errorMessage.textContent = "";
        return true;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var loginButton = document.querySelector("button[type='submit']");
    loginButton.addEventListener("click", function() {
        var loginContainer = document.querySelector(".login-container");
        loginContainer.style.animation = "shake 0.5s ease-in-out";
        setTimeout(function() {
            loginContainer.style.animation = "";
        }, 500);
    });
});
