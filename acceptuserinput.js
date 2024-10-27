//1. easy way = window prompt 
//2. profesional way = html textbox 

/*

1. easy way

let username;
username=window.prompt(`whts your user name`);
console.log(username);


*/
// 2.
let username;
document.getElementById(`submit`).onclick=function(){
    username=document.getElementById(`mytext`).value;
    console.log(username);
}

