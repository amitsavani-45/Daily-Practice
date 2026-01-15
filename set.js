const letter= new Set(["a","b","c"]);
console.log(letter);


// add() - Add a new element

letter.add("d");
console.log(letter);

//has() - Element check existing or not

console.log(letter.has("c"));
console.log(letter.has("e"));

//clear() - Remove all elements
 letter.clear()
 console.log(letter);

//delete() - Remove an element
 const fruits= new Set(["banana","apple","mango","orange"]
 );
fruits.delete("mango");
console.log(fruits);

//forEach() - Execute function for each element 

fruits.forEach(value =>
{
    console.log(value.toUpperCase())
});

// size - Get number of elements

console.log(fruits.size);
console.log(letter.size);

// values() - Get all the values
// This gives you each item in the Set, one by one.

for (const fruit of fruits.values()) {
  console.log(fruit);
}