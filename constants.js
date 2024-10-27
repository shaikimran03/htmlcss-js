// const = a variable that cant be changed

const PI=3.14159;
let radius;
let circumference;

radius=Number(radius);
 

document.getElementById(`submit`).onclick=function(){
   radius= document.getElementById(`mytext`).value;
   radius=Number(radius);
   circumference= 2 * PI * radius; 
   radius= document.getElementById(`myh3`).textContent=circumference +cm ;
}
/*h1 id="myh1">enter radius of the circle</h1>
   <label>radius</label>
   <input type="text" id="mytext">
   <button id="submit">submit</button>
    <script src="constants.js"></script>
    <h3 id="myh3"></h3>*/