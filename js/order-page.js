

function validate(){
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
  
  let input             = fullname && parcelWeight && dateSent && senderAddress && receiverAddress;


  //validate data as it is being inputed

  if(input === ""){
    alert("fill in details");
    return false;
  }else if(!Number(parcelWeight)){
    alert("Insert type a number");
    return false;
  }else{
    document.getElementById('name').innerHTML               = fullname;
    document.getElementById('weight').innerHTML             = parcelWeight;
    document.getElementById('date').innerHTML               = dateSent;
    document.getElementById('senderOfAddress').innerHTML    = senderAddress;
    document.getElementById('recipientAddress').innerHTML   = receiverAddress;
    return;
  }
}

  
  
  

function save(){

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
    
   
  const parcel = {
    PlacedBy: fullname,
    Weight: parcelWeight,
    sentOn: dateSent,
    From_address: senderAddress,
    To_address: receiverAddress,
  }
  
  let parcels = JSON.parse(localStorage.getItem("parcels"));
   if(parcels === undefined || parcels === null){
    let parcelArr = [parcel];
    alert('Your Order is Set');
    localStorage.setItem('parcels', JSON.stringify(parcelArr));
  } else{
    parcels.push(parcel);
    alert('Your Order is Set');
    localStorage.setItem('parcels', JSON.stringify(parcels));
  }
  
}