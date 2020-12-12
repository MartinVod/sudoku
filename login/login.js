function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "abcd" && password == "1234") {
        alert("Login successfully");
        window.location = "../difficulty/difficulty.html"; // Redirecting to other page.
    } else {
        alert("Wrong password or user");
    }
}