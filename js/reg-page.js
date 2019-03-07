validateInput = ( () => {

    const fullname            = document.getElementById("fullname").value;
    const email               = document.getElementById("email").value;
    const phoneNumber         = document.getElementById("phoneNumber").value;
    const username            = document.getElementById("username").value;
    const password            = document.getElementById("password").value;
    const confirmPassword     = document.getElementById("confirmPassword").value;
    const input               = fullname && email && phoneNumber && username && password && confirmPassword;

    //VALIDATING INPUT BEFORE STORING
    
    if (input === "") {
        alert(`Please fill up details`);
        location.reload();
        return false;
    } else if (!(/^\w+([\.\-]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,3})+$/.test(email))){
	    alert(`You have entered an invalid email address!`);
        return false;
    }else if(!Number(phoneNumber)){
        alert(`Please input Phone Number`);
        return false;
    }else if(confirmPassword !== password){
        alert(`Wrong Password Input`);
        return false;
    }

    const user = {
        fullname,
        email,
        phoneNumber,
        username,
        password
    };


    let users = JSON.parse(localStorage.getItem('users'));
    

    if (users === undefined || users === null) {
        let newUser     = {...user, id:1};
        let users       = [newUser];
        
        localStorage.setItem('users', JSON.stringify(users));
        alert(`Registration Successful, Please login to continue`);
        location.href = "index.html";
        return false;
    }else{
        const usernameExist           = users.some((user) => username === user.username);
        const emailExist              = users.some((user) => email === user.email);
        
        
        if(usernameExist){
            alert(`Username already exist`);
            return false;
        }else if(emailExist){
            alert(`Email already exist`);
            return false;
        }

        let newId       = users.map( user => user.id );            
        let id          = ( Math.max(...newId)+1 );
        let newUserId   = {...user, id};
        let newUser     = [...users, newUserId];
        
        localStorage.setItem('users', JSON.stringify(newUser));
        alert(`Registration Successful, Please login to continue`);
        return false;
        
    }

    

});