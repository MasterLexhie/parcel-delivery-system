function viewStoredData() {
    // go into local storage
    const parcels = JSON.parse(localStorage.getItem("parcels"));
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    let userParcels = parcels.filter((parcel) => currentUser.id === parcel.userId);
    
    let table = document.getElementById('previewTable');
    let row   = document.createElement("tr");
    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");
    let cell3 = document.createElement("td");
    let cell4 = document.createElement("td");
    let cell5 = document.createElement("td");
    let cell6 = document.createElement("td");
    let cell7 = document.createElement("td");
    let cell8 = document.createElement("td");

    let list = userParcels.map(parcel => {
        cell1.innerHTML = parcel.userId;
        cell2.innerHTML = parcel.fullname;
        cell3.innerHTML = parcel.parcelWeight;
        cell4.innerHTML = parcel.dateSent;
        cell5.innerHTML = parcel.senderAddress;
        cell6.innerHTML = parcel.receiverAddress;
        cell7.innerHTML = parcel.dateReceived;
        cell8.innerHTML = parcel.status;

    });
    console.log(list);
    

    table.appendChild(row);
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);
    row.appendChild(cell6);
    row.appendChild(cell7);
    row.appendChild(cell8);
    

}