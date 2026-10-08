document.getElementById("registerForm").addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if(name === "" || email === "" || password === "" || confirmPassword === ""){

        alert("Please fill all fields.");

        return;

    }

    if(password !== confirmPassword){

        alert("Passwords do not match!");

        return;

    }

    alert("Registration Successful!");

    window.location.href = "login.html";

});