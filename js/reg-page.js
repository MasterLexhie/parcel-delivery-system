function validateInput() {

    let fullname = document.getElementById("fullname").value;
    let email    = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    const user = {
        id: 1,
        fullname: fullname,
        email: email,
        username: username,
        password: password
    };
    localStorage.setItem("user", JSON.stringify(user));
    if (fullname === "" || email === "" || username === "" || password === "") {
        alert("Please fill up details");
        location.reload();
        return false;
    } else if (!(/^\w+([\.\-]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,3})+$/.test(email))) {
	alert("You have entered an invalid email address!");
        return false;
    } else {
        alert("Registration successful");
        location.href = "index.html";
    }

}