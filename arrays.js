// a var like structure that can hold multiple values 

let x=['apple',`banana`,`orange`];
// to modify
x[0]=`coco`;
//push at last
x.push(`coconut`);
// pop at last
x.pop();
// unshift adds element at first

x.unshift(`mango`);

// shift to remove element ffrom behginniing 
x.shift();

console.log(x[0]);
console.log(x);

// to find lenggth
let lenght=x.length;
let index=x.indexOf(`banana`);// to search index
console.log(length);

// using for loop to see elements 
for(let i=0;i<x.lenght;i++){
    console.log(x[i]);
}
// enhanced for loop
//for (let fruit of fruits){
 //   console.log(fruit);
//}
// sort 
x.sort();
// sort reverse
x.sort().reverse();