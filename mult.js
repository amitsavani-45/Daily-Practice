import promptsync from 'prompt-sync';
const prompt=promptsync()
/*
let a =prompt("enter the first number ");
let b= prompt("enter the second number ");

let c=a*b;

console.log("The number multiply is ",c);


//function for the multiply

function mul(x,y)

{
    let res=x*y;
    return res;
}
let x = prompt("Enter the value of ");
let y = prompt("Enter the value of ");
let res=mul(x,y);
console.log("The  multiply of two number",res);
*/

/*Practical Problems:
16. Calculate total salary for 12 months: Monthly=₹30000
17. Find total pages read in a week: 25 pages/day for 7 days
18. Calculate distance traveled: Speed=60km/h, Time=3 hours
19. Find total cost: 15 shirts at ₹500 each
20. Calculate calories burned: 50 calories/minute for 30 minutes
*/

function total_salary(monthlysalary,totalmonth){
    return  monthlysalary*totalmonth;
}
let salary=total_salary(30000,12);
console.log("the total salary is",salary);

function page_read(pages,day){
    return pages*day;
}
let pages=page_read(25,7);
console.log("the total page read in week",pages);

function distance(speed,hour){
return speed*hour;
}
let traveled=distance(60,3);
console.log("the total distancd traveled",traveled);

function cost(shirt,rs)
{
    return shirt*rs
}
let totalcost=cost(15,500);
console.log("the cost of shirt",totalcost);

function calories_burned(calories,minute){
    return calories*minute;
}
let calories=calories_burned(50,30);
console.log("total calories burned",calories);

