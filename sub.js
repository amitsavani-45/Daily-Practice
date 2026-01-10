import promptSync from 'prompt-sync';
const prompt = promptSync();

let a =prompt("enter the first number ");
let b= prompt("enter the second number ");

let c=a-b;

console.log("The number substraction is ",c);


//function for the substraction

function sub(x,y)

{
    let res=x-y;
    return res;
}
let x = prompt("Enter the value of ");
let y = prompt("Enter the value of ");
let res=sub(x,y);
console.log("The subtraction of two number",res);