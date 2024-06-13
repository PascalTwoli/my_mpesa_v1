

const popUp = document.querySelector('.pop-up');
const popUpCloser = document.querySelector('.close-icon')
const markAsRead = document.querySelector('.p2')
const messageElementDiv = document.querySelector('.mpesaMessage1-div');





popUp.style.display = 'none';
messageElementDiv.style.display = 'none';
//dismissing the message pop up
popUpCloser.addEventListener('click', () => {
    popUp.style.display = 'none';
})

markAsRead.addEventListener('click', () => {
    popUp.style.display = 'none';
})


//generating unique mpesa IDs//
function uniqueId() {
    // desired length of Id
    var idStrLen = 10;
    // always start with a letter -- base 36 makes for a nice shortcut
    var idStr = (Math.floor((Math.random() * 25)) + 10).toString(36).toUpperCase();
    // add a timestamp in milliseconds (base 36 again) as the base
    idStr += (new Date()).getTime().toString(36).toUpperCase();
    // If idStr doesn't start with "s," prepend it
    if (!idStr.startsWith("S")) {
      idStr = "S" + idStr;
    }
    // similar to above, complete the Id using random, alphanumeric characters
    while (idStr.length < idStrLen) {
      idStr += (Math.floor((Math.random() * 35))).toString(36).toUpperCase();
    } 
    //reduce the idStr by 1 character
    idStr = idStr.slice(0, idStrLen);
    return (idStr);
  }      
  
      const blueBox = document.getElementById('bluebox');
      //time for the message
      let date = new Date();
      let options = { timeStyle: 'short', hour12: true };
      let dayDate = date.getDate();
      let month = date.getMonth() +1;
      let year = date.getFullYear();
         //<--alternatively--> let time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", options})
      
      let messageElement = document.querySelector('.mpesaMessage1');  
  
  
      function printMessage() { 
  
            ////mpesa details variables   
        let cost = '';
        const amount = document.querySelector('.js-input3').value;
        const name = document.querySelector('.js-input1').value.toUpperCase();
        const ID = uniqueId();
        const tel = document.querySelector('.js-input4').value;
        let currentDate = dayDate+'/'+month+"/"+ year;
        let timeString = date.toLocaleTimeString('en-US', options);
        const balance = document.querySelector('.js-input6').value
        const errorMessage = document.querySelector('.errorMessage');
        let popupMessage = document.querySelector('.blue-box .message-box .mpesaMessage');
        
        let smsTime = document.querySelector('.blue-box .header .sms-time');
        const message = document.createElement("p");
  
  
        
        
        if (amount <= 100) {
          cost = 0;
        } else if(amount <= 500){
          cost = 7;
        } else if (amount <=1000) {
          cost = 13;
        } else if (amount <= 3000) {
          cost = 25;
        } else {
          cost = 57;
        }
  
        //input fields validation control structure
        if (name == "" || amount == "" || tel == "" || balance == "") {
          errorMessage.innerHTML = `You are required to fill in all the fields!`;
          errorMessage.style.display = 'block';
          setTimeout(() => {
            errorMessage.style.display = 'none';
          }, 5000);
  
        }
         else {
  
          errorMessage.innerHTML = `Submission successful! You will receive confirmation message shortly`;
          errorMessage.style.background = 'green';
          errorMessage.style.color = 'white';
          errorMessage.style.display = 'block';
          popUp.style.display = 'block';
  
          setTimeout(() => {
            errorMessage.style.display = 'none';
          }, 4000);
  
          smsTime.innerHTML = `<p class="sms-time1">SMS &#x2022; ${timeString}</p>`;
          popupMessage.innerHTML = `${ID} Confirmed. Ksh${amount}.00 paid to  ${name} ${tel} on ${currentDate} at ${timeString}. New MPESA balance is Ksh${balance}.00. Transaction cost,Ksh${cost}.00. Amount you can transact within the day is Ksh499,140.00. To move money from bank to Mpesa dial *334#>Withdraw>From bank to MPESA.`;
  
          setTimeout(() => {
            messageElementDiv.style.display = 'block';
            message.textContent  = `${ID} Confirmed. Ksh${amount}.00 paid to  ${name} ${tel} on ${currentDate} at ${timeString}. New MPESA balance is Ksh${balance}.00. Transaction cost,Ksh${cost}.00. Amount you can transact within the day is Ksh499,140.00. To move money from bank to Mpesa dial *334#>Withdraw>From bank to MPESA.`;
            const someText=  messageElement.appendChild(message);
            // let message_serialized = JSON.stringify(someText);
            // console.log(message_serialized);
            // localStorage.setItem("message", message_serialized);
            // JSON.parse(localStorage.getItem("message"));
            
          }, 4000);
          
        }
      }
  
      function enterToSubmit() {
        if (event.key === 'Enter') {
          printMessage();
        }
      }
  
