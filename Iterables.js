/*terating means looping over a sequence of elements.

Here are some examples:

Iterating over a String
Iterating over an Array
Iterating over a Set
Iterating over a Map
*/


//  Iterating Over a String
// A string is a sequence of characters, so you can loop through each character.

const word = "Hello";

for (const letter of word) {
  console.log(letter);
}

//  Iterating Over an Array
// Arrays are the most common iterable. Loop through each element.

const fruits = ['apple', 'banana', 'orange'];

for (const fruit of fruits) {
  console.log(fruit);
}


// Iterating Over a Set
// Sets store unique values. Loop through each unique item.

const numbers = new Set([1, 2, 3, 4, 5]);

for (const num of numbers) {
  console.log(num);
}


// Iterating Over a Map
// Maps store key-value pairs. Loop through entries, keys, or values.

const scores = new Map([
  ['Alice', 95],
  ['Bob', 87],
  ['Charlie', 92]
]);

for (const [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

