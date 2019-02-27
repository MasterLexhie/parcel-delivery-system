function validateInput() {

    let fullname        = document.getElementById("fullname").value;
    fullname            = fullname.trim();
    let email           = document.getElementById("email").value;
    email               = email.trim();
    let phoneNumber     = document.getElementById("phoneNumber").value;
    phoneNumber         = phoneNumber.trim();
    let username        = document.getElementById("username").value;
    username            = username.trim();
    let password        = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let input           = fullname && email && phoneNumber && username && password && confirmPassword;
    
    if (input === "") {
        alert("Please fill up details");
        location.reload();
        return false;
    } else if (!(/^\w+([\.\-]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,3})+$/.test(email))) {
	    alert("You have entered an invalid email address!");
        return false;
    }else if(!Number(phoneNumber)){
        alert("Please input number");
        return false;
    }else if(confirmPassword !== password){
        alert("Invalid Password!!");
        return false;
    }

    const user = {
        fullname    : fullname,
        email       : email,
        phoneNumber : phoneNumber,
        username    : username,
        password    : password
    };

    let users = JSON.parse(localStorage.getItem("users"));

    if (users === undefined || users === null) {
        let userArr = [user];
        localStorage.setItem("users", JSON.stringify(userArr));
    }else {
        for (let i = 0; i < users.length; i++) {
            if(username == users[i].username){
                alert("Username already exist!");
                return false;
            } else if(email === users[i].email){
                 alert("Email already exist!");
                 return false;
             }else if(phoneNumber === users[i].phoneNumber){
                 alert("phoneNumber already exist!");
                 return false;
             }
            
        }

        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
    }
}