const myCheckbox =document.getElementById(`myCheckbox`);

const visaBtn =document.getElementById(`visaBtn`);



const mastercardBtn =document.getElementById(`mastercardBtn`);


const paypalBtn =document.getElementById(`paypalBtn`);


const submit= document.getElementById(`submit`);

const subResult= document.getElementById(`subResult`);

const paymentResult= document.getElementById(`paymentResult`);

submit.onclick= function(){


    if(myCheckbox.checked){
        subResult.textContent=`you are subscribed`;
    }
    else {
            subResult.textContent=`you are  not subscribed`;
        }


    if(visaBtn.checked){
        paymentResult.textContent=`you are paing with visa`;
    }
    else if(mastercardBtn.checked){
        paymentResult.textContent=`paying with mastercard`;
    }
    else if(paypalBtn.checked){
        paymentResult.textContent=`paying with paypal`;
    }
    else{
        paymentResult.textContent=`choose something`;

    }

    }





/*

<input type="checkbox" id="myCheckbox" name="card">
    <label for="myCheckbox">subscribe</label><br>
    <br>

    <input type="radio" id="visaBtn" name="card">
    <label for="myCheckbox">Visa</label><br>

    <input type="radio" id="mastercardBtn" name="card">
    <label for="myCheckbox">Mastercard</label><br>

    <input type="radio" id="paypalBtn" name="card">
    
     <label for="myCheckbox">paypal</label><br>
     <br>

<button type="submit" id="submit">submit</button>


<p id="subResult"></p>
<p id="paymentResult"></p>





#submit{
    font-size: 1em;
}
body{
    background-color: aqua;
    font-family: 'Times New Roman', Times, serif;
    text-align: left;
}











*/


    


