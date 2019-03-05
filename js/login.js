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
        let usernameExist   = users.some((user) => username === user.username);
        let passwordExist   = users.some((user) => username === user.password);
    
        if(usernameExist && passwordExist){
            alert(`Welcome ${username}`);
            location.href = "order-page.html";
            return false;
        }else{
            alert('Invalid login details');
            location.reload();
            return false;
        } 
    }
});