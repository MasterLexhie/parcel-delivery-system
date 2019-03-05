function viewStoredData() {
    // go into local storage
    let parcels = JSON.parse(localStorage.getItem("parcels"));
    
    for (let i = 0; i < parcels.length; i++) {
        console.log(parcels[i])
            
    }
    // using forEach to loop through arrays
    parcels.forEach(parcel => console.log(parcel) );
    
    //filter
     const user = parcels.filter(parcel => parcel.Weight === '21');
     console.log(user);

    //map
    parcels.map(parcel => console.log(parcel) );

    parcels.map(parcel => console.log(`${parcel.PlacedBy} [${parcel.Weight} - ${parcel.sentOn}]`));

    for (let i = 0; i < users.length; i++) {
        if (username === users[i].username) {
            alert("Username already exist!!");
            return false;
        }else if (email === users[i].email) {
            alert("Email already exist!!");
            return false;
        }
        
    }

}