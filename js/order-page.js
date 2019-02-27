

function validate(){
  const fullname          = document.getElementById('fullname').value;
  const parcelWeight      = document.getElementById('parcelWeight').value;
  const dateSent          = document.getElementById('dateSent').value;
  const addressOfSender   = document.getElementById('senderAddress').value +" "+ document.getElementById('senderState').value;
  const addressOfReceiver = document.getElementById('receiverAddress').value +" "+ document.getElementById('receiverState').value;
  const senderAddress     = addressOfSender;
  const receiverAddress   = addressOfReceiver;
  const input             = fullname && parcelWeight && dateSent && senderAddress && receiverAddress;


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
  
}


 function save(){
  const fullname          = document.getElementById('fullname').value;
  const parcelWeight      = document.getElementById('parcelWeight').value;
  const dateSent          = document.getElementById('dateSent').value;
  const addressOfSender   = document.getElementById('senderAddress').value +" "+ document.getElementById('senderState').value;
  const addressOfReceiver = document.getElementById('receiverAddress').value +" "+ document.getElementById('receiverState').value;
  const senderAddress     = addressOfSender;
  const receiverAddress   = addressOfReceiver;
  const input             = fullname && parcelWeight && dateSent && senderAddress && receiverAddress;
  
   
   const parcel = {
    PlacedBy      : fullname,
    Weight        : parcelWeight,
    sentOn        : dateSent,
    From_address  : senderAddress,
    To_address    : receiverAddress,
  }
  
  let parcels = JSON.parse(localStorage.getItem("parcels"));
   if(parcels === undefined || parcels === null){
    let parcelArr = [parcel];
    localStorage.setItem('parcels', JSON.stringify(parcelArr));
  }// work on the push
   else{
     //for(let i = 0; i< parcels.length; i++){
       
     //}
    parcels.push(parcel);
    localStorage.setItem('parcels', JSON.stringify(parcels));
  }
  
 }