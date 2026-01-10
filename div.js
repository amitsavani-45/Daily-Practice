import promptsync from 'prompt-sync';
const prompt=promptsync()

let a =prompt("enter the first number ");
let b= prompt("enter the second number ");

let c=a/b;

console.log("The number division is ",c);

//function for the division

function div(x,y)

{
    let res=x/y;
    return res;
}
let x = prompt("Enter the value of ");
let y = prompt("Enter the value of ");
let res=div(x,y);
console.log("The division of two number",res);