import promptSync from 'prompt-sync';
const prompt = promptSync();

let a =prompt("enter the first name ");
let b= prompt("enter the second name ");

let c=a+ " " +b;

console.log("The full name is ",c);



//function for the addtion of string

function sum(x,y)

{
    let res=x+ " " +y;
    return res;
}
let x = prompt("Enter the value of ");
let y = prompt("Enter the value of ");
let res=sum(x,y);
console.log("the value is ",res);
