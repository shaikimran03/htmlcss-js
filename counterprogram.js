const decrease=document.getElementById(`decrease`);
const reset=document.getElementById(`reset`);
const increase=document.getElementById(`increase`);
const countlabel=document.getElementById(`countlabel`);


let count=0;
increase.onclick=function(){
    count++;
    countlabel.textContent=count;
}
decrease.onclick=function(){
    count--;
    countlabel.textContent=count;
}
reset.onclick=function(){
    count=0;
    countlabel.textContent=count;
}


//html
/*
<label id="countlabel">0</label><br>
<div id="buttoncontainer">
<button id="decrease" class="buttons">decrease</button>
<button id="reset" class="buttons">reset</button>
<button id="increase" class="buttons">increase</button>
</div>*/







//css


/*#countlabel{
    display: block;
    font-size: 10em;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
}
#buttoncontainer{
    text-align: center;

}
.buttons{
    padding: 10px 20px;
    font-size: 1.5em;
    color: antiquewhite;
    background-color: rgb(51, 26, 26);
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.25s;

}
.buttons:hover{
    background-color: brown;
}*/
