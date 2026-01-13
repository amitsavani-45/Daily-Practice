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

