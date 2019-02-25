

function validate(){
  let fullname          = document.getElementById('fullname').value;
  let parcelWeight      = document.getElementById('parcelWeight').value;
  let dateSent          = document.getElementById('dateSent').value;
  let addressOfSender   = document.getElementById('senderAddress').value +" "+ document.getElementById('senderState').value;
  let addressOfReceiver = document.getElementById('receiverAddress').value +" "+ document.getElementById('receiverState').value;
  let senderAddress     = addressOfSender;
  let receiverAddress   = addressOfReceiver;
  let input = fullname && parcelWeight && dateSent && senderAddress && receiverAddress;


  //validate data as it is being inputed

  if(input === ""){
    alert("fill in details");
    return false;
  }else if(!Number(parcelWeight)){
    alert("Insert type a number");
    return false;
  }else{
    const name               = document.getElementById('name').innerHTML = fullname;
    const weight             = document.getElementById('weight').innerHTML = parcelWeight;
    const date               = document.getElementById('date').innerHTML = dateSent;
    const sender_Address     = document.getElementById('senderOfAddress').innerHTML = senderAddress;
    const recipient_Address  = document.getElementById('recipientAddress').innerHTML = receiverAddress;
    return;
  }
  
 

  
  //alert(senderAddress);
  //alert(receiverAddress);
  
}

  
  
  

 function save(){
   let fullname         = document.getElementById('fullname').value;
  let parcelWeight      = document.getElementById('parcelWeight').value;
  let dateSent          = document.getElementById('dateSent').value;
  let addressOfSender   = document.getElementById('senderAddress').value +" "+ document.getElementById('senderState').value;
  let addressOfReceiver = document.getElementById('receiverAddress').value +" "+ document.getElementById('receiverState').value;
  let senderAddress     = addressOfSender;
  let receiverAddress   = addressOfReceiver;
  let input = fullname && parcelWeight && dateSent && senderAddress && receiverAddress;
    
   
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
    localStorage.setItem('parcels', JSON.stringify(parcelArr));
  }// work on the push
   //else{
    //parcels.push(parcel);
    //localStorage.setItem('parcels', JSON.stringify());
  //}
  
 }