document.getElementById("loginForm").addEventListener("submit", function(event){

    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if(email==="" || password===""){
        alert("Please enter Email and Password");
    }
    else{
        alert("Login Successful!");

        // Open Dashboard
        window.location.href="dashboard.html";
    }

});