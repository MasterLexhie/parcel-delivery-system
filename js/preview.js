//Details once body loads
    

const createParcel  = 
`
    <a href="order-page.html">
        <button type="button" id="createBtn" value="submit">Create New Parcel</button>
    </a>
` 

const header        = 
`
    <thead>
        <tr>
            <th>Id</th>
            <th>Name of Parcel</th>
            <th>Weight of parcel</th>
            <th>Description of parcel</th>
            <th>Date Sent</th>
            <th>Address of Sender</th>
            <th>Address of receiver</th>
            <th>Status</th>
            <th>Actions</th>
        </tr>
    </thead>
`;

const editForm      = 
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
            <option value= "pending">Pending</option>
            <option value= "sent">Sent</option>
            <option  value= "delivered">Delivered</option>
            <option value= "cancelled">Cancelled</option>
        </select></br></br>
        <button type="button" value="submit" onclick="updateParcel()">Update</button> <button type="reset" onclick="cancelEdit()">Cancel</button>
    </form>
`


let parcels       = JSON.parse(localStorage.getItem("parcels"));
const currentUser   = JSON.parse(localStorage.getItem("currentUser"));

// FUNCTION THAT SHOWS AND HIDES ELEMENT ON COMMAND
let formDisplay = ((show, hide) => {
    document.getElementById('editPage').style.display = show;
    document.getElementById('previewTable').style.display = hide;
    document.querySelector('a').style.display = hide;
});

let currentParcels = (()=>{
    document.getElementById('parcelName').value = currentParcel.parcelName;
    document.getElementById('parcelWeight').value = currentParcel.parcelWeight;
    document.getElementById('dateSent').value = currentParcel.dateSent;
    document.getElementById('senderAddress').value = currentParcel.senderAddress;
    document.getElementById('receiverAddress').value = currentParcel.receiverAddress;
    document.getElementById('description').value = currentParcel.parcelDescription;
    document.getElementById('status').value = currentParcel.status;
});




//FUNCTION THAT LOADS PAGE
viewStoredData = (() => {
    if(parcels === null || parcels === undefined){
        alert(`Click button to create new button`);

        const table = `
        <table>
            ${createParcel}
            <br/><br/>
            ${header}
        </table>
        `;

        document.getElementById('previewTable').innerHTML = table;
    } else{
        let userParcels = parcels.filter((parcel) => currentUser.id === parcel.userId).map(parcel => {
            if(parcel.status === 'Cancelled' || parcel.status === 'Delivered' ){
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
                    </tr>
                `
            }else{
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
                    <td >
                        <input class="hide"  type="button" id= "edit" value="Edit" onclick="editParcel(${parcel.id})"/>
                        <input class="hide" type="button" id= "delete" value="Delete" onclick="deleteParcel(${parcel.id})"/>
                    </td>
                </tr>
            `
            }
            
        });

        const table = `
            <table>
                ${createParcel}
                <br/><br/>
                ${header}
                ${userParcels.join("")}
            </table>
        `;
            
        document.getElementById('previewTable').innerHTML = table;
       
        // FUNCTION THAT EDITS PAGE
        editParcel = ( (id) => {
        
            if (id) {
                // function that shows editpage on command
                formDisplay('block', 'none');

                //filter and get the individual ID of the parcel once button is clicked
                let currentParcel   = parcels.find(parcel => parcel.id === id );

                //prints editpage on the page
                document.getElementById('editPage').innerHTML = editForm;

                currentParcels();
               
                // when updating details
                updateParcel = ( () => {
                    // const updated = parcels.map(parcel => parcel.id === currentParcel.id);
        
                    const i = parcels.findIndex(parcel => parcel.id === currentParcel.id);
        
                    if (i > -1){
                        let parcelName       = document.getElementById('parcelName').value;
                        let parcelWeight     = document.getElementById('parcelWeight').value;
                        let dateSent         = document.getElementById('dateSent').value;
                        let senderAddress    = document.getElementById('senderAddress').value;
                        let receiverAddress  = document.getElementById('receiverAddress').value;
                        let description      = document.getElementById('description').value;
                        let status           = document.getElementById('status');
                        status               = status.options[status.selectedIndex].text;
                        
                        parcels[i].parcelName            = parcelName;
                        parcels[i].parcelWeight          = parcelWeight;                
                        parcels[i].dateSent              = dateSent;                
                        parcels[i].senderAddress         = senderAddress;                
                        parcels[i].receiverAddress       = receiverAddress;                
                        parcels[i].parcelDescription     = description;
                        parcels[i].status                = status;

                        // if(parcels[i].status == "Pending"){
                        //    document.querySelector(".hide").style.display = "none";
                        // }

                    
                        localStorage.setItem('parcels', JSON.stringify(parcels));
                    
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
        
    }

});

