//Details once body loads
    const parcels       = JSON.parse(localStorage.getItem("parcels"));
    const currentUser   = JSON.parse(localStorage.getItem("currentUser"));

    const header        = 
    `
        <tr>
            <th>Id</th>
            <th>Fullname</th>
            <th>Weight of parcel</th>
            <th>Description of parcel</th>
            <th>Date Sent</th>
            <th>Address of Sender</th>
            <th>Address of receiver</th>
            <th>Status</th>
        </tr>
    `;

    const form = 
    `
        <form>
            <input type="text" id="fullname" placeholder="Fullname" /><br/><br/>
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
            <textarea title="description" id="description" placeholder="Description of Parcel"></textarea><br/><br/>
            <select>
              <option>Pending</option>
              <option>Sent</option>
              <option>Delivered</option>
              <option>Cancelled</option>
            </select></br></br>
            <button type="button" value="submit" onclick="updateParcel()">Save</button> <button type="reset" onclick="cancelEdit()">Cancel</button>
        </form>
    `


let userParcels = parcels.filter((parcel) => currentUser.id === parcel.userId).map(parcel => {
    return `
        <tr>
            <td>${parcel.id}</td>
            <td><div>${parcel.fullname}</div></td>
            <td><div>${parcel.parcelWeight}</div></td>
            <td><div>${parcel.parcelDescription}</div></td>
            <td><div>${parcel.dateSent}</div></td>
            <td><div>${parcel.senderAddress}</div></td>
            <td><div>${parcel.receiverAddress}</div></td>
            <td><div>${parcel.status}</div></td>
            <td><input type="button" value="Edit" onclick="editParcel()"/></td>
        </tr>
    `
});

viewStoredData = (() => {
    const table = `
     <table>
      ${header}
      ${userParcels.join("")}
     </table>
    `;
    document.getElementById('previewTable').innerHTML = table;
});


// When edit button is clicked
editParcel = ( () => {
    let formOpen = document.getElementById('editPage').style.display ='block';
    let tableClosed = document.getElementById('previewTable').style.display = 'none';
    let createButton = document.querySelector('a').style.display = 'none';
    
    if(formOpen){
        document.getElementById('editPage').innerHTML = form;
    }

    // when updating details
    updateParcel = ( () => {

    });

    //when cancelling while editing
    cancelEdit = ( () => {
        if(tableClosed && createButton){
            document.getElementById('editPage').style.display ='none';
            document.getElementById('previewTable').style.display = 'block';
            document.querySelector('a').style.display = 'block';
        }
    });
});
