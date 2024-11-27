// spread op= ... allows an iterable such as an array 
//           string to be expanded 
// into seperate elements 
//  (unpacks the elemensts)

let numbers=[1,2,3,4,5];
let maxinum = Math.max(...numbers);
let minnum=Math.min(...numbers);
console.log(maxinum);
console.log(minnum);

// seperating strings 
let name=`brocode`;
let letters =[...name].join(`-`);
console.log(letters);

// combining 2 arrays usinig spreadop
let fruits =[`apple` ,`bannna` , `orange`];
let vegetables=[`carrot`, `potato`];
let foods=[...fruits,...vegetables,`eggs`,`milk`];// can add elemensts in this list 
console.log(foods);