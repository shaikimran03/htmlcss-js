// (...rest) allows a function work with a variable 
// numbers of arguments by bundling into a array 

//spread = expands a arrray into seperate elements
// rest  = bundles seperate elements into an array 

function openfridge(...foods){
    console.log(...foods);//spreadop  
}


const food1=`pizza`;
const food2=`pi`;
const food3=`pa`;
const food4=`iza`;
openfridge(food1,food2,food3,food4);


// tofind sum
function sum(...numbers){
    let result=0;
    for (let number of numbers){
        result +=number;
    }
    return result;
}
const total =sum(1,2,3);
console.log(total);

// to find average 
function getAverage(...numbers){
    let result=0;
    for (let number of numbers){
        result +=number;
    }
    return result/numbers.length;
}
const tota =getAverage(3,3,3,3,3);
console.log(tota);

// to combine strs
function combinestrings(...strings){
    return strings.join(` `);
}
const fullNma= combinestrings(`m`,`r`,`e`);
console.log(fullNma);