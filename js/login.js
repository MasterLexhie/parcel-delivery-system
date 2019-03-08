login = ( () => {
    
    let username = document.getElementById("user").value;
    username     = username.trim();

    let password = document.getElementById("password").value;
    password     = password.trim();

    if (username === "" || password === "") {
        alert('Fill up fields');
        location.reload();
        return false;
    }

    let users = JSON.parse(localStorage.getItem('users'));
    
    if ( users === null || users === undefined) {
        alert("Please Register to login");
        location.href = "registration-page.html";
        return false;
    }else {
        let userExist   = users.find((user) => username === user.username && password === user.password);
        if(userExist === undefined) {
            alert('Invalid login details');
            return false;
        }
        else{
            localStorage.setItem('currentUser', JSON.stringify(userExist));
            alert(`Welcome ${username}`);
            location.href = "order-page.html";
            return false;
        }
    }
});