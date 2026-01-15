


const fruits = new Map([
  ['apple', 5],
  ['banana', 3],
  ['orange', 7]
]);
fruits.set("mangos", 100);
console.log(fruits); 
console.log(fruits.get("orange"));



//  new Map() - Creating a MapMethod 1: Create with initial values
const fruit = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

console.log(fruit);

// Map.set() - Add or Update Elements

const fruits1 = new Map();

fruits1.set("apples", 500);
fruits1.set("bananas", 300);
fruits1.set("oranges", 200);

console.log(fruits1)

// Map.get() - Retrieve Values
// get(key) returns the value for that key
// If key doesn't exist, returns undefined

const fruits2 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(fruits2.get("apples"));   
console.log(fruits2.get("bananas"));  
console.log(fruits2.get("grapes")); 

// Map.size - Count Elements
const fruits3 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

console.log(fruits3.size);

//  Map.delete() - Remove One Element

const fruits4 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

console.log(fruits4.size); 

fruits4.delete("apples");

console.log(fruits4.size); 
console.log(fruits4.get("apples"));


//  Map.has() - Check if Key Exists

const fruits5 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

console.log(fruits5.has("apples")); 
console.log(fruits5.has("bananas")); 
console.log(fruits5.has("grapes"));

// Map.clear() - Remove All Elements
fruits5.clear();

console.log(fruits5.size); 
console.log(fruits5); 

// forEach() - Loop Through Each Entry
// The forEach() method runs a function for each key-value pair.
/*
const fruits = new Map([
  ['apple', 5],
  ['banana', 3],
  ['orange', 7]
]);
fruits.set("mangos", 100);
*/

fruits.forEach(function(value, key) {
  console.log(key + ' = ' + value);
});

// entries() - Get [key, value] Pairs
// Returns an iterator with arrays of [key, value].

for (const entry of fruits.entries()) {
  console.log(entry);
}


// keys() - Get Only the Keys
// Returns an iterator with just the keys.

for (const key of fruits.keys()) {
  console.log(key);
}

//  values() - Get Only the Values
// Returns an iterator with just the values.

for (const value of fruits.values()) {
  console.log(value);
}