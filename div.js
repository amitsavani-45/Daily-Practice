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

//function for division of 3 numbers
function divThreeNumbers(p,q,r)
{
    return p/q/r;
} 
let divOfThree=divThreeNumbers(10,20,30);
console.log("Division of three numbers is",divOfThree);