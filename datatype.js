/*
Type	Description
Number	A number representing a mathematical value
Bigint	A number representing a large integer
String	A text of characters enclosed in quotes
Boolean	A data type representing true or false
Undefined	A primitive variable with no assigned value
Null	A primitive value representing object absence
Symbol	A unique and primitive identifier
Object	A collection of key-value pairs of data
*/

// Number
// A number representing a mathematical value
let age = 25;
let price = 19.99;
let temperature = -5;

console.log(age); 
console.log(price + 10);
//A number representing a large integer (beyond Number's safe limit)
let bigNumber = 9007199254740991n;
let hugeValue = BigInt(123456789012345678901234567890);

console.log(bigNumber); 
console.log(hugeValue + 10n);

// 3. String
// A text of characters enclosed in quotes
let name = "John";
let greeting = 'Hello World';
let message = `Welcome ${name}`;

console.log(name); 
console.log(greeting); 
console.log(message); 

// 4. Boolean
// A data type representing true or false
let isStudent = true;
let hasLicense = false;
let canDrive = age >= 18;

console.log(isStudent); 
console.log(hasLicense); 
console.log(canDrive); 

// 5. Undefined
// A primitive variable with no assigned value
let x;
let result;

console.log(x); 
console.log(result); 

function greet() {
  
}
console.log(greet()); 

// 6. Null
// A primitive value representing object absence (intentionally empty)
let selectedUser = null;
let data = null;

console.log(selectedUser); 
console.log(data); 


let person1 = {name: "Alice"};
person1 = null; 

// 7. Symbol
// A unique and primitive identifier

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1); 
console.log(id1 === id2); 


let user = {
  name: "Bob",
  [id1]: 12345
};
// 8. Object
// A collection of key-value pairs of data

let person = {
  name: "Sarah",
  age: 30,
  city: "New York"
};

console.log(person); 
console.log(person.name); 
console.log(person.age); 


let colors = ["red", "blue", "green"];
console.log(colors[0]); 

function sayHello() {
  return "Hello!";
}



// Check types using typeof
console.log(typeof num);       // "number"
console.log(typeof big);       // "bigint"
console.log(typeof text);      // "string"
console.log(typeof isTrue);    // "boolean"
console.log(typeof notDefined);// "undefined"
console.log(typeof empty);     // "object" (known quirk in JS)
console.log(typeof unique);    // "symbol"
console.log(typeof obj);       // "object"