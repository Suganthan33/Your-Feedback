function editProfile() {

    let newName = prompt("Enter your Name:");
    let newEmail = prompt("Enter your Email:");
    let newUsername = prompt("Enter your Username:");

    if(newName != null && newName != ""){
        document.getElementById("name").innerHTML = newName;
    }

    if(newEmail != null && newEmail != ""){
        document.getElementById("email").innerHTML = newEmail;
    }

    if(newUsername != null && newUsername != ""){
        document.getElementById("username").innerHTML = newUsername;
    }

}