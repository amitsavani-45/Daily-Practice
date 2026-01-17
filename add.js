import promptsync from 'prompt-sync';
const prompt=promptsync()

/*
//normal programe for sum of two numbers 

let x =prompt("enter the first number ");
let y= prompt("enter the second number ");

let z=Number(x)+Number(y);

console.log("The number sum is ",z);
                                                                                                                              



//Normal function for the sum of two numbers 
function addtion(a,b)

{
    return a+b;
}

let result=(addtion(10,20));
console.log("Addition of two number",result);


// function for  the sum of two numbers enter by the user 
function sum(c,d)

{
let res=Number(c)+Number(d);
return res;
}
let c=prompt("enter the number");
let d=prompt("enter the number");
let res=sum(c,d);//call the function 
console.log("Sum of two number is",res);


//add 3 numbers
function addThreeNumbers(p,q,r)
{
    return p+q+r;
}
let sumOfThree=addThreeNumbers(10,20,30);
console.log("Sum of three numbers is",sumOfThree);


//ADD 3 number

let a=20;
let b=30;
let e=40;
let f=a+b+e;
console.log("addition of three number is",f);


// Write a program to add decimal numbers: 5.5 and 3.2


let A=5.5;
let B=3.2;
let D=A+B;
console.log("the addition of decimal number is",D);

*/
// 
// Find total marks: Math=85, Science=90, English=78
// Calculate weekly expenses: Mon=200, Tue=150, Wed=300, Thu=100, Fri=250
// Add monthly salary: Basic=30000, HRA=5000, DA=3000
//  Calculate total distance: Day1=50km, Day2=75km, Day3=60km


function find_the_totalmarks(maths,science,english){
  return maths+science+english;

 }

let sumofmark=find_the_totalmarks(85,90,78);
console.log("the total mark",sumofmark); 

//
let sum_of_all;
function weekly_expenses (mon , tues , wed , thurs ,fri , sat , sun){
  
  return sum_of_all=mon+tues+wed+thurs+fri+sat+sun;
}
  let sumofall=weekly_expenses(200,150,300,100,250,230,100);
  console.log("the total entense of week is",sumofall); 

function monthly_salary(basic,hra,da){
    return basic+hra+da;
}
let totalsalary= monthly_salary(30000,5000,3000);
 console.log("the total salary of month is ",totalsalary);

 function total_distance(day1,day2,day3){
    return day1+day2+day3;
 }
 let sumofdistance=total_distance(50,75,60);
 console.log("the total distance is",sumofdistance);