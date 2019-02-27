function login() {
    
    let username = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    username = username.trim();
    password = password.trim();

    let users = JSON.parse(localStorage.getItem('users'));
    if (username === "" || password === "") {
        alert('Fill up fields');
        location.reload();
        return false;
    } else if ( users === null || users === undefined) {
        alert("Please Register to login");
        location.href = "login-page.html";
        return false;
    }else {
        for (let i = 0; i < users.length; i++) {
            if (username === users[i].username && password === users[i].password) {
                alert('Welcome');
                location.href = "order-page.html";
                return false
            }else {
                alert('Invalid login details');
                location.reload();
                return false;
            }
            
        }
        
    }
}
