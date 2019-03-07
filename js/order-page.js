validate = ( () => {
  let fullname          = document.getElementById('fullname').value;
  fullname              = fullname.trim();
  
  let parcelWeight      = document.getElementById('parcelWeight').value;
  parcelWeight          = parcelWeight.trim();
  
  let dateSent          = document.getElementById('dateSent').value;
  dateSent              = dateSent.trim();
  
  let addressOfSender   = document.getElementById('senderAddress').value +" "+ document.getElementById('senderState').value;
  let addressOfReceiver = document.getElementById('receiverAddress').value +" "+ document.getElementById('receiverState').value;
  
  let senderAddress     = addressOfSender;
  senderAddress         = senderAddress.trim();
  
  let receiverAddress   = addressOfReceiver;
  receiverAddress       = receiverAddress.trim();
  
  let status            = `Pending`;
  let input             = fullname && parcelWeight && dateSent && senderAddress && receiverAddress;


  if(input === ""){
    alert("fill in details");
    return false;
  }else if(!Number(parcelWeight)){
    alert("Insert type a number");
    return false;
  }
  let currentUser = localStorage.getItem('currentUser');
  currentUser     = JSON.parse(currentUser);

  // console.log(currentUser.id);

  const parcel = {
    userId: currentUser.id,
    fullname,
    parcelWeight,
    dateSent,
    senderAddress,
    receiverAddress,
    dateReceived,
    status
  }
  
  let parcels = JSON.parse(localStorage.getItem("parcels"));
  
  
  if(parcels === undefined || parcels === null){
    let parcelArr = [parcel];
    alert('Your Order is Set');
    localStorage.setItem('parcels', JSON.stringify(parcelArr));
  } else{
    parcels.push(parcel);
    console.log({parcels});
    alert('Your Order is Set');
    localStorage.setItem('parcels', JSON.stringify(parcels));
  }
});
