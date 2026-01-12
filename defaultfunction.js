function number(x,y=10)
{
    return x+y;
}

console.log(number(5));
console.log(number(5,20));


//by user input default parameter function

import promptsync from 'prompt-sync';
const prompt=promptsync()

function num(a,b)

{   let res=Number(a)+Number(b);
    return res;
}

let a=prompt("Enter the value");
let b=prompt("Enter the value");
let res=num(a,b);
console.log("the value is",res);