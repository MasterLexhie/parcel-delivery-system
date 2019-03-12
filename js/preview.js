//Details once body loads
    let parcels       = JSON.parse(localStorage.getItem("parcels"));
    const currentUser   = JSON.parse(localStorage.getItem("currentUser"));

    const createParcel  = 
    `
        <a href="order-page.html">
            <button type="button" id="createBtn" value="submit">Create New Parcel</button>
        </a>
    ` 

    const header        = 
    `
        <tr>
            <th>Id</th>
            <th>Name of Parcel</th>
            <th>Weight of parcel</th>
            <th>Description of parcel</th>
            <th>Date Sent</th>
            <th>Address of Sender</th>
            <th>Address of receiver</th>
            <th>Status</th>
        </tr>
    `;

    const editForm = 
    `
        <form>
            <input type="text" id="parcelName" placeholder="Name of Parcel" value="" /><br/><br/>
            <input type="text" id="parcelWeight" placeholder="Weight of Parcel" /><br/><br/>
            <input type="date" id="dateSent" placeholder="Date" /><br/><br/>
            <input type="text" id="senderAddress" placeholder="Your Address" />

            <select name="senderState" id="senderState">
              <option disabled>Select State</option>
              <option value="Lagos">Lagos</option>
              <option value="Abuja">Abuja</option>
              <option value="Port-Harcourt">Port-Harcourt</option>
              <option value="Delta">Delta</option>
              <option value="Calabar">Calabar</option>
              <option value="Kano">Kano</option>
              <option value="Ebonyi">Ebonyi</option>
              <option value="Edo">Edo</option>
              <option value="Enugu">Enugu</option>
            </select><br/><br/>
            <input type="text" id="receiverAddress" placeholder="Recipient's Address" />

            <select name="receiverState" id="receiverState">
              <option disabled>Select State</option>
              <option value="Lagos">Lagos</option>
              <option value="Abuja">Abuja</option>
              <option value="Port-Harcourt">Port-Harcourt</option>
              <option value="Delta">Delta</option>
              <option value="Calabar">Calabar</option>
              <option value="Kano">Kano</option>
              <option value="Ebonyi">Ebonyi</option>
              <option value="Edo">Edo</option>
              <option value="Enugu">Enugu</option>
            </select><br/><br/>
            <textarea title="description of parcel" id="description" placeholder="Description of Parcel"></textarea><br/><br/>
            <select id ="status">
              <option id="statusOption">Pending</option>
              <option id="statusOption">Sent</option>
              <option id="statusOption">Delivered</option>
              <option id="statusOption">Cancelled</option>
            </select></br></br>
            <button type="button" value="submit" onclick="updateParcel()">Update</button> <button type="reset" onclick="cancelEdit()">Cancel</button>
        </form>
    `


let userParcels = parcels.filter((parcel) => currentUser.id === parcel.userId).map(parcel => {
    return `
        <tr>
            <td>${parcel.id}</td>
            <td><div>${parcel.parcelName}</div></td>
            <td><div>${parcel.parcelWeight}</div></td>
            <td><div>${parcel.parcelDescription}</div></td>
            <td><div>${parcel.dateSent}</div></td>
            <td><div>${parcel.senderAddress}</div></td>
            <td><div>${parcel.receiverAddress}</div></td>
            <td><div>${parcel.status}</div></td>
            <td><input type="button" value="Edit" onclick="editParcel(${parcel.id})"/></td>
            <td><input type="button" value="Delete" onclick="deleteParcel(${parcel.id})"/></td>
        </tr>
    `
});

viewStoredData = (() => {
    const table = `
     <table>
        ${createParcel}
        <br/><br/>
        ${header}
        ${userParcels.join("")}
     </table>
    `;
    document.getElementById('previewTable').innerHTML = table;
});

let formDisplay = ((show, hide)=>{
    document.getElementById('editPage').style.display = show;
    document.getElementById('previewTable').style.display = hide;
    document.querySelector('a').style.display = hide;
});




// When edit button is clicked
editParcel = ( (id) => {
    console.log(id);
    if (id) {

        formDisplay('block', 'none');
        

        //filter and get the individual ID of the parcel once button is clicked

        let currentParcel   = parcels.find(parcel => parcel.id === id );
        
        // if(formOpen){
            document.getElementById('editPage').innerHTML = editForm;
            let parcelName       = document.getElementById('parcelName').value = currentParcel.parcelName;
            let parcelWeight     = document.getElementById('parcelWeight').value = currentParcel.parcelWeight;
            let dateSent         = document.getElementById('dateSent').value = currentParcel.dateSent;
            let senderAddress    = document.getElementById('senderAddress').value = currentParcel.senderAddress;
            let receiverAddress  = document.getElementById('receiverAddress').value = currentParcel.receiverAddress;
            let description      = document.getElementById('description').value = currentParcel.parcelDescription;
            let status           = document.getElementById('status').value = currentParcel.status;
            // }
   

        // when updating details
        updateParcel = ( () => {
            // const updated = parcels.map(parcel => parcel.id === currentParcel.id);

            const index = parcels.findIndex(parcel => parcel.id === currentParcel.id);

            if (index > -1){
                let parcelName       = document.getElementById('parcelName').value;
                let parcelWeight     = document.getElementById('parcelWeight').value;
                let dateSent         = document.getElementById('dateSent').value;
                let senderAddress    = document.getElementById('senderAddress').value;
                let receiverAddress  = document.getElementById('receiverAddress').value;
                let description      = document.getElementById('description').value;
                let status           = document.getElementById('status');
                status               = status.options[status.selectedIndex].text;

                parcels[index].parcelName      = parcelName;
                parcels[index].parcelWeight    = parcelWeight;                
                parcels[index].dateSent        = dateSent;                
                parcels[index].senderAddress   = senderAddress;                
                parcels[index].receiverAddress = receiverAddress;                
                parcels[index].parcelDescription     = description;
                parcels[index].status          = status;

                localStorage.setItem('parcels', JSON.stringify(parcels));
                
                console.log(parcels);
            
                location.reload();
            }
        });

        //when cancelling while editing
        cancelEdit = ( () => {
            formDisplay('none','block');
        });

    }
});
// when delete button is clicked
deleteParcel = ((id)=>{
    if(id){
        let index   = parcels.findIndex(parcel => parcel.id === id );

        parcels.splice(index, 1);
        localStorage.setItem('parcels', JSON.stringify(parcels));
        location.reload();
    }
});

