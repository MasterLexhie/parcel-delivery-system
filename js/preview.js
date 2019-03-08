viewStoredData = (() => {
    // go into local storage
    const parcels       = JSON.parse(localStorage.getItem("parcels"));
    const currentUser   = JSON.parse(localStorage.getItem("currentUser"));

    const header        = 
    `
        <tr>
        <th>Id</th>
        <th>Fullname</th>
        <th>Weight of parcel</th>
        <th>Date Sent</th>
        <th>Address of Sender</th>
        <th>Address of receiver</th>
        <th>Status</th>
        </tr>
    `;

    let userParcels = parcels.filter((parcel) => currentUser.id === parcel.userId).map(parcel => {
        return `
         <tr>
          <td>${parcel.userId}</td>
          <td>${parcel.fullname}</td>
          <td>${parcel.parcelWeight}</td>
          <td>${parcel.dateSent}</td>
          <td>${parcel.senderAddress}</td>
          <td>${parcel.receiverAddress}</td>
          <td>
                <select>
                    <option>${parcel.status}</option>
                    <option>Sent</option>
                    <option>Delivered</option>
                    <option>Cancel</option>
                </select>
            </td>
          <td><input type="button" value="Save" onclick="saveParcel()"/> <input type="button" value="Edit" onclick="editParcel()"/></td>
         </tr>
        `
    })

    
    const table = `
     <table>
      ${header}
      ${userParcels.join("")}
     </table>
    `;

    document.getElementById('previewTable').innerHTML = table;

    editParcel = (() => {

        location.href = "edit-preview.html";
    });
});