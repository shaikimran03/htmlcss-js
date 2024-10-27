/*const min=50;
const max=100;
//let randomNum=Math.floor( Math.random() * 100) +1;

let randomNum=Math.floor( Math.random() * (max-min)) +min;
console.log(randomNum);*/

const button=document.getElementById(`button`);
const mylabel=document.getElementById(`mylabel`);
const min=1;
const max=6;
let randomNum;
button.onclick=function(){
    randomNum=Math.floor(Math.random ()* max)+ min;
    mylabel.textContent=randomNum;
}
/*body{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
}
#button{
    font-size: 30px;
    color: antiquewhite;
    background-color: blueviolet;
    cursor: pointer;
    border-radius: 5px;
    padding: 5px 25px;
}
#mylabel{
    font-size: 3em;
}




<button id="button" class="button">roll</button>
<label id="mylabel"></label>
*/