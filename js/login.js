function getFromStorage() {
    return localStorage.getItem('user');
}


function login() {
    
    let username = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    username = username.trim();
    password = password.trim();

    let user = JSON.parse(getFromStorage());
    if (username === "" || password === "") {
        alert('Fill up fields');
        location.reload();
        return false;
    } else if (getFromStorage() === null || getFromStorage() === undefined) {
        alert("Please Register to login");
        location.href = "login-page.html";
        return false;
    }else if (username === user.username && password === user.password) {
        alert('Welcome');
        location.href = "order-page.html";
    } else {
        alert('Invalid login details');
        location.reload();
        return false;
    }
}