// Alphabetic Sort
// Array sort()
// Array reverse()
// Array toSorted()
// Array toReversed()
// Sorting Objects

// Array.sort() - Alphabetic Sort
// Sorts array elements alphabetically (modifies original array)

const fruits=['banana','apple','mango','pineapple','orange'];
fruits.sort();
console.log(fruits);


// Array.reverse()
// Reverses the order of elements (modifies original array)

const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers);  

const letters = ['a', 'b', 'c'];
letters.reverse();
console.log(letters); 


// Array.toSorted()
// Returns a new sorted array (original stays unchanged).
const fruit = ['banana', 'apple', 'orange'];
const sorted = fruit.toSorted();

console.log(sorted);  
console.log(fruit);  

// Array.toReversed()
// Returns a new reversed array (original stays unchanged).

const nu = [1, 2, 3, 4, 5];
const reversed = nu.toReversed();

console.log(reversed);  
console.log(nu);   

//  Sorting Objects
// Sort arrays of objects using a compare function.


const products = [
  { name: 'Phone', price: 500 },
  { name: 'Laptop', price: 1000 },
  { name: 'Mouse', price: 20 }
];


products.sort((a, b) => a.price - b.price);
console.log(products);

products.sort((a, b) => b.price - a.price);
console.log(products);