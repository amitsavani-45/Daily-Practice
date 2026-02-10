/*
import promptsync from 'prompt-sync';
const prompt=promptsync()



const greet= () => "hello javascript";
console.log(greet());

//double to number 

const double= num => num*2;
console.log(double(5));

//square of number 

const sq= a=> a*a;
console.log(sq(15));

//Cube of number

const cube= (num)=>num**3;
console.log(cube(3));


// Arrow function to add two numbers
const add = (c, b) => c + b;

console.log(add(10, 5)); 


// arrow function for voting eligible or not

const checkage= age =>{

    if(age >= 18) {
       console.log("You are eligible for the vote");
    }
    else {
        console.log("You are not eligble for the vote");
}



    }

    checkage(20);

*/


function sayHi(fun){
    console.log(fun('Amit'));
}

//default parameter

function f5(username='unknown'){
    console.log("hello,"+username);
}
f5();