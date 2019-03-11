createParcel = ( () => {
  let fullname          = document.getElementById('fullname').value;
  fullname              = fullname.trim();
  
  let parcelWeight      = document.getElementById('parcelWeight').value + ' kg';
  parcelWeight          = parcelWeight.trim();
  
  let dateSent          = document.getElementById('dateSent').value;
  dateSent              = dateSent.trim();
  
  let addressOfSender   = document.getElementById('senderAddress').value +" "+ document.getElementById('senderState').value;
  let addressOfReceiver = document.getElementById('receiverAddress').value +" "+ document.getElementById('receiverState').value;
  
  let senderAddress     = addressOfSender;
  senderAddress         = senderAddress.trim();
  
  let receiverAddress   = addressOfReceiver;
  receiverAddress       = receiverAddress.trim();

  let parcelDescription = document.querySelector('#description').value;
  parcelDescription     = parcelDescription.trim();
  
  let status            = `Pending`;
  let input             = fullname && parcelWeight && dateSent && senderAddress && receiverAddress && parcelDescription;


  if(input === ""){
    alert("fill in details");
    return false;
  }else if(!Number(parcelWeight)){
    alert("Insert type a number");
    return false;
  }else if(parcelDescription === undefined || parcelDescription === ''){
    alert(`Please set description of parcel`);
    return false;
  }

  let currentUser = localStorage.getItem('currentUser');
  currentUser     = JSON.parse(currentUser);

 

  let parcel = {
    userId: currentUser.id,
    fullname,
    parcelWeight,
    dateSent,
    senderAddress,
    receiverAddress,
    parcelDescription,
    status
  }
  
  let parcels = JSON.parse(localStorage.getItem("parcels"));
  
  
  if(parcels === undefined || parcels === null){
    let newParcel = {...parcel, id:1};
    let parcelArr = [newParcel];
    
    alert('Your Order is Set');
    localStorage.setItem('parcels', JSON.stringify(parcelArr));
    location.href ='preview.html';
  
  } else{
    let newParcelId = parcels.map( parcel => parcel.id);

    let id = (Math.max(...newParcelId)+1);
    
    parcel = {...parcel, id};
    
    parcels  = [...parcels,parcel];

    alert('Your Order is Set');
    localStorage.setItem('parcels', JSON.stringify(parcels));
    location.href ='preview.html';
  }
});
