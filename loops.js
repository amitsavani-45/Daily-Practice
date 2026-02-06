import promptsync from 'prompt-sync';
const prompt=promptsync()
/*
// print value to 0 to 10 
let n=prompt("Enter the value ");
let i;
for(i=0; i<=n; i++)


{
    console.log(i)
}


// print value to 10 to 0

let a=prompt("Enter the value ");
let j;
for(j=a; j>=0; j--)
{
    console.log(j)
}


//print value 0 to -10 

let b=prompt("Enter the value ");
let c;
for(c=b; c>=-10; c--)
{
    console.log(c)
}


//print the odd number 

for(let i=1; i<=20; i+=2)
    {
        console.log(i);
    } 

    //print the even number 
for(let i=2; i<=20; i+=2)
    {
        console.log(i);
    } 

//
*/

const p1={
    name:'Rahul',
    age:22,
    city:'bhopal',
    f1:function(){
        console.log('hello')
    }
};

for(let prop in p1){
    console.log(prop,p1[prop]);
}