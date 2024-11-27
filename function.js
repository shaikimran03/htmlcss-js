// a section of reusable cpde 
// declare once use it many times 
// call to execute it 

function happtBirthday(username,age){
    console.log(`hbd ${username} ${age}`);
}
happtBirthday(`imran`,25); // to call a function add fname and ();

function add(x ,y ){
    let result=x+y;
    return result;
}
// add(2,3) in this no output would be shown 
// so we write a variable and add output statement 
 let answer=add(2,3);
 // or console.log(add(2,3))
 console.log(answer);


 function isvalid(email){
    if(email.includes(`@`)){// built in method for checking a character in a string 'includes' 
        return true;
    }else{
        return false;
    }

 }
 console.log(isvalid(`imran@gamil.com`))