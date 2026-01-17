import promptsync from 'prompt-sync';
const prompt=promptsync()
/*
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
*/

// Practical Problems:
//  Calculate monthly salary: Annual salary=₹360000
//  Find per day expense: Weekly expense=₹700
//  Calculate per kilometer cost: Total fuel cost=₹2000, Distance=50km
//  Find average speed: Total distance=300km, Time=5 hours
//  Calculate per person cost: Trip cost=₹15000, 5 friends

function salary(annual){
    return annual/12;
}

let monthly_salary=salary(360000);
console.log("the monthly salary",monthly_salary);

function weekly_expense(expense){
    return expense/7;
}
let weeklyexpense= weekly_expense(700);
console.log("the weekly expense ",weeklyexpense);


function calculatePerKmCost(totalCost, distance) {
  let perKmCost = totalCost / distance;
  return perKmCost;
}

let kmCost = calculatePerKmCost(2000, 50);
console.log("Per Kilometer Cost: ₹" + kmCost);



function calculateAverageSpeed(totalDistance, time) {
  let averageSpeed = totalDistance / time;
  return averageSpeed;
}

let speed = calculateAverageSpeed(300, 5);
console.log(" Average Speed: " + speed + " km/h");


function calculatePerPersonCost(tripCost, numberOfPeople) {
  let perPersonCost = tripCost / numberOfPeople;
  return perPersonCost;
}

let personCost = calculatePerPersonCost(15000, 5);
console.log("Per Person Cost: ₹", personCost);