// Array.indexOf()
// Finds the first index of an element. Returns -1 if not found.

const fruits = ['apple', 'banana', 'orange', 'banana'];

console.log(fruits.indexOf('banana'));     
console.log(fruits.indexOf('grape'));      
console.log(fruits.indexOf('orange'));  

// Array.lastIndexOf()
// Finds the last index of an element (searches backwards). Returns -1 if not found.

const fruit = ['apple', 'banana', 'orange', 'banana'];

console.log(fruit.lastIndexOf('banana'));   
console.log(fruit.lastIndexOf('apple'));    
console.log(fruit.lastIndexOf('grape'));   

// Array.includes()
// Checks if an array contains a specific element. Returns true or false

const colors = ['red', 'green', 'blue'];

console.log(colors.includes('green'));    
console.log(colors.includes('yellow'));   
console.log(colors.includes('Red'));      


// Array.find()
// Finds the first element that matches a condition. Returns undefined if not found.

const ages = [12, 18, 25, 30, 15];


const adult = ages.find(age => age > 18);
console.log(adult);  

// Array.findIndex()
// Finds the index of the first element that matches a condition. Returns -1 if not found.

const numbers = [5, 12, 8, 130, 44];


const index = numbers.findIndex(num => num > 10);
console.log(index);  

// Array.findLast()
// Finds the last element that matches a condition (searches backwards). Returns undefined if not found.

const number = [5, 12, 8, 130, 44];


const lastBig = number.findLast(num => num > 10);
console.log(lastBig);  

//  Array.findLastIndex()
// Finds the index of the last element that matches a condition (searches backwards). Returns -1 if not found

const numb = [5, 12, 8, 130, 44];


const lastIndex = numb.findLastIndex(num => num > 10);
console.log(lastIndex); 