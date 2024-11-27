// where var is recognized and acesed (local vs global)
// global var is outside in local vvar ins individually inside the function
let x=2; 
let y=5;
function function1(){
  
    console.log(x);
}
function function2(){

    console.log(y);
}

function2();

// local

function fun3(){
    let x=5
    console.log(x);// it accesss local variable 5 than 2.
}
fun3();