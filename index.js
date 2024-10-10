const myInput = document.getElementById("myInput");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const cardResult = document.getElementById("cardResult");

mySubmit.onclick = function(){
    if(myInput.checked) {
        subResult.textContent = `You are Subscribed!`;
    }
    else {
        subResult.textContent = `You are not Subscribed!`;
    if(visaBtn.checked){
        cardResult.textContent = `You are paying with Visa!`; 
    }
    else if(masterCardBtn.checked){
        cardResult.textContent = `You are paying with MasterCard!`; 
    }
    else if(paypalBtn.checked){
        cardResult.textContent = `You are paying with PayPal!`; 
    }
    else{
        cardResult.textContent = `You must select a payment method`;
    }
    }
}

