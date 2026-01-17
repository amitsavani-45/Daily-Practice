import promptSync from 'prompt-sync';
const prompt = promptSync();
/*
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
*/


/*Practical Problems:
 Calculate savings: Income=50000, Expenses=35000
 Find marks needed: Total=100, Current=65 (how many more needed?)
 Calculate remaining budget: Budget=5000, Spent: Mon=500, Tue=800, Wed=600
 Find weight loss: Starting weight=75kg, Current weight=68kg
 Calculate time remaining: Total time=120 minutes, Time used=45 minutes
*/


function find_saving(income,expenses){
    return income-expenses;
}
let totalsaving=find_saving(50000,35000);
console.log("the total saving of month is",totalsaving);


function find_mark(total,current){
    return total-current;
}
let marks=find_mark(100,65);
console.log("mark needed ",marks);



function remain_budget(budget,mon,tue,wed)
{
    let spent=mon+tue+wed;
    let remaining=budget-spent;
    return remaining ;
}

let findbudget=remain_budget(5000,500,800,600);
console.log("remaining budget is",findbudget);




function find_wightloss(Startingweight,currentweight){
   return Startingweight-currentweight;
}
let weight=find_wightloss(75,68);
console.log("weight loss is",weight);

function find_time(total,used){
    return total-used;
}
let time=find_time(120,45);
console.log("remaining time is",time);