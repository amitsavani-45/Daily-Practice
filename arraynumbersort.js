// Numeric Sort
// Random Sort
// Math.min()
// Math.max()
// Home made Min()
// Home made Max()

//  Numeric Sort
// By default, sort() converts numbers to strings. Use a compare function for proper numeric sorting.


const number=[30,18,25,50,10,4,18];
number.sort((a,b) => a - b );
console.log(number);

const numbers=[30,18,25,50,10,4,18];
number.sort((a,b) => b- a );
console.log(number);

// Random Sort
// Shuffle array elements randomly.
const numb = [1, 2, 3, 4, 5];

numb.sort(() => Math.random() - 0.5);
console.log(numb);  


// Math.min()
// Finds the smallest number.
console.log(Math.min(5, 10, 2, 8));  
console.log(Math.min(45, 12, 100)); 
console.log(Math.min(-5, 0, 5));     


const n = [40, 100, 1, 5, 25];
console.log(Math.min(...n));
console.log(Math.min.apply(null, n));  


//  Math.max()
// Finds the largest number.

console.log(Math.max(5, 10, 2, 8));  
console.log(Math.max(45, 12, 100)); 
console.log(Math.max(-5, 0, 5)); 

const num = [40, 100, 1, 5, 25];
console.log(Math.max(...num));
console.log(Math.max.apply(null, num));  