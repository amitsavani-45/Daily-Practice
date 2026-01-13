// Array.forEach()
// Executes a function for each array element (doesn't return anything).

const fruits=["banana","apple","mango","orange"];
fruits.forEach(fruits => {
  console.log(fruits);
});


// Array.map()
// Creates a new array by transforming each element.
const numbers = [1, 2, 3, 4, 5];


const doubled = numbers.map(num => num * 2);
console.log(doubled); 


const squared = numbers.map(num => num ** 2);
console.log(squared);  

// Array.flatMap()
// Maps each element, then flattens the result by one level.

const sentences = ['Hello world', 'How are you','sir'];

const words = sentences.flatMap(sentence => sentence.split(' '));
console.log(words);

// Array.filter()
// Creates a new array with elements that pass a test.
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const evens = number.filter(num => num % 2 === 0);
console.log(evens); 

// Array.reduce()
// Reduces array to a single value (left to right).
const num = [1, 2, 3, 4, 5];


const sum = num.reduce((total, num) => total + num, 0);
console.log(sum);  

// .Array.reduceRight()
// Same as reduce() but goes right to left.
const num1 = [1, 2, 3, 4, 5];


const result = num1.reduceRight((acc, num) => acc + num, '');
console.log(result);  

//  Array.every()
// Checks if ALL elements pass a test (returns true or false).
const num2 = [2, 4, 6, 8, 10];

const allEven = num2.every(num => num % 2 === 0);
console.log(allEven);

//  Array.some()
// Checks if AT LEAST ONE element passes a test (returns true or false).

const num3 = [1, 3, 6, 9, 11];

const anyEven = num3.some(num => num % 2 === 0);
console.log(anyEven);

// Array.from()
// Creates an array from an array-like or iterable object.

const str = 'hello';
const letters = Array.from(str);
console.log(letters);  


const set = new Set([1, 2, 3, 3, 4]);
const arr = Array.from(set);
console.log(arr);  


//  Array.keys()
// Returns an iterator with the keys (indices) of the array

const fruits1 = ['apple', 'banana', 'orange'];
const keys = Array.from(fruits1.keys());
console.log(keys); 

// . Array.entries()
// Returns an iterator with [key, value] pairs.

const fruits2 = ['apple', 'banana', 'orange'];
const entries = Array.from(fruits2.entries());
console.log(entries);

// Array.with()
// Creates a new array with one element changed (immutable).
const numbers12 = [1, 2, 3, 4, 5];

const newNumbers = numbers12.with(2, 99);

console.log(newNumbers); 
console.log(numbers12);

// Array Spread (...)
// Expands an array into individual elements.

  const original = [1, 2, 3];
const copy = [...original];
console.log(copy); 


// Array Rest (...)
// Collects remaining elements into an array (in function parameters or destructuring).

function sum1(...numbers3) {
  return numbers3.reduce((total, num) => total + num, 0);
}

console.log(sum1(1, 2, 3, 4));  
console.log(sum1(5, 10));       


const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);  
console.log(second); 
console.log(rest);   