// allows you to manipulate with text


let usesrName="         imrann            ";

//charat index 1 returns the letter 
console.log(usesrName.charAt(1));


// shows the index of gthe letter 
console.log(usesrName.indexOf("n"));

// last index of same letter 
console.log(usesrName.lastIndexOf("n"));


// shows ther length of the name 



console.log(usesrName.length);



//.trim is used to cut the white spaces 
usesrName=usesrName.trim();
console.log(usesrName);



// .touppercase
usesrName=usesrName.toUpperCase();
console.log(usesrName);



// to lower case
usesrName=usesrName.toLowerCase();
console.log(usesrName);

// to repeaat the character 
usesrName=usesrName.repeat(2);
console.log(usesrName);




//startsWith checks it the variable starts with any consition 
let result =usesrName.startsWith("i");
console.log(result);






// endswith
let resul =usesrName.endsWith("i");
console.log(resul);




// replace text with somethings
let phoneNumber="123-456-789";
phoneNumber=phoneNumber.replaceAll("-","");
console.log(phoneNumber);


// padStart 
let phoneNumbe="123-456-789";
phoneNumber=phoneNumbe.padStart(15,"0");
console.log(phoneNumbe);


//padend
let phoneNumb="123-456-7890";
phoneNumber=phoneNumb.padEnd(15,"0");
console.log(phoneNumb);





