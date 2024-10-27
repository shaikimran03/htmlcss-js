
const myText=document.getElementById(`myText`);
const mysubmit=document.getElementById(`mysubmit`);
const resultelement=document.getElementById(`resultelement`);
let age;


mysubmit.onclick=function(){
    age=myText.Value;
    age=Number(age);
    if(age>=100){
        //console.log(`if(age>=100){
    
        resultelement.textContent=`old`;
    }
    else if(age==0){
        //console.log(`you are just born`);
        resultelement.textContent=born;
    }
    else if(age>=18){
       // console.log(`old enough to enter`);
       resultelement.textContent=`good to go`;
    }
    else if(age<0){
      //  console.log(`age cant be below zero`);
      resultelement.textContent=`cant be below 0`;
    }
    else{
       // console.log("age should be abouve 18");
       resultelement.textContent=`should be above 18`;
    }

}









