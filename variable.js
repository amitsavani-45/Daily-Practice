//var varible given same name variable see in example

var a=19;
var a=20;
console.log(a)


//in const one time we asign value after this can not change the value
const c=20;
c=20;

console.log(c)

//in the let the asign the value to the variable

let d=12;
console.log(d);

const PI = 3.14;
let radius = 5;

let area = PI * radius * radius;
console.log("Area of circle =", area);


let a = 10;
let b = 20;

let temp = a;
a = b;
b = temp;

console.log("a =", a);
console.log("b =", b);


let x = 10;

if (true) {
  let x = 20;
  console.log("Inside block:", x);
}

console.log("Outside block:", x);
