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

// keys() - Get all the keys
// For Sets, this is exactly the same as values() because Sets don't have separate keys and values like objects do.

for (const fruit1 of fruits.keys()) {
  console.log(fruit1);
}

// entries() - Get key-value pairs
// This gives you pairs of [value, value]. Yes, the same value twice! This exists to match the Map structure.

for (const entry of fruits.entries()) 
{
  console.log(entry);
}


//weak set 
// Why Use WeakSet?
// Main reason: To track objects without preventing them from being deleted from memory when no longer needed.


const weakSet = new WeakSet();

let obj1 = { name: 'Alice' };
let obj2 = { name: 'Bob' };


weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1));

weakSet.delete(obj1);
console.log(weakSet.has(obj1)); 