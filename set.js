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

