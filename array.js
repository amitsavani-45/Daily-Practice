/*let color=["red","blue","green","yellow","black"];

console.log(color [2]);
console.log(color.length);
color.pop();
console.log(color);

//changung value of array 
const marks = [85, 92, 78, 95, 88];


marks[2] = 82; 


marks.push(99); 

console.log(marks); 


//array as a object

const student=[{id :1,name:"amit",grade:"a"},{id :2,name:"rohit",grade:"b"},
    {id :3,name:"virat",grade:"c"}
    
];

console.log(student[2].name);



// Array.length
//Returns the number of elements in an array

const fruit=["banana","apple","mango","orange"];
console.log(fruit.length);


// Array.toString()
// Converts an array to a comma-separated string.

const col=["red","yellow","green","black"];
console.log(col.toString());

// Array.at()
// Gets an element at a specific index (supports negative indexing).

const animal=["dog","cat","lion"];
console.log(animal.at(0));
console.log(animal.at(-1));

// Array.join()
// Joins all elements into a string with a custom separator.

const word=["hello","world"];
console.log(word.join(' '));

// Array.pop()
// Removes and returns the last element.

const num=[1,2,3];
num.pop();
console.log(num);

const numbers = [1, 2, 3, 4];
const last = numbers.pop();
console.log(last);     
console.log(numbers);

// Array.push()
// Adds one or more elements to the end of an array.

const team=["mi","csk","rcb"];
team.push("gt");
console.log(team);

// Array.shift()
// Removes and returns the first element.

const item=["first","second","third"];
console.log(item);
console.log(item.shift());
console.log(item);

// Array.unshift()
// Adds one or more elements to the beginning of an array.

const list = [2, 3, 4];
console.log(list);
console.log(list.unshift(1));
console.log(list);

// Array.isArray()
// Checks if a value is an array.
console.log(Array.isArray([1, 2, 3]));  
console.log(Array.isArray('hello')); 

// Array delete
// Deletes an element but leaves an empty slot (not recommended).

const arr=[1,2,3,4]
delete arr[1];
console.log(arr);

// Array.concat()
// Merges two or more arrays into a new array.

const a1=[10,20,30];
const a2=[40,50,60,70];
const join=a1.concat(a2);
console.log(join);

// Array.copyWithin()
// Copies part of an array to another location in the same array.

const letters = ['a', 'b', 'c', 'd', 'e'];
letters.copyWithin(0,4); 
console.log(letters);

// Array.flat()
// Flattens nested arrays into a single array.

const nested = [1, [2, 3], [4, [5]]];
console.log(nested.flat());    
console.log(nested.flat(2));   

// Array.slice()
// Returns a shallow copy of a portion of an array 

const ar1=[1,2,3,4];
console.log(ar1.slice(0,2));

const ar2=[1,2,3,4];
console.log(ar2.slice(2));
console.log(ar2.slice(-2));

// Array.splice()
// Adds/removes elements from an array 

const month=["january","march","april"];
month.splice(1, 0, 'Feb');  
console.log(month);

month.splice(2, 1);  
console.log(month);

// Array.toSpliced()
// Like splice() but returns a new array (doesn't modify original)

const original = [1, 2, 3, 4, 5];

const modified = original.toSpliced(2, 1, 99);

console.log(modified);  

console.log(original);  


//array for a prime numbers
let primes=[2,3,5,7,11,13,17,19,23,29];
for(let i=0;i<primes.length;i++)
{
    console.log(primes[i]);
}   
    

const a=[10,20,30,40]
console.log(a[4]);

// const p1={
//     name:'Rahul',
//     age:23
// };
// console.log(p1.name,p1.age)

a[5]=50;
console.log(a);
console.log(a.length);

const c=[45,4.6,true,'mysirg'];
console.log(c)
*/

// const b=new Array();
// console.log(b);

// let a=[23,24,54,34,65,13,16,40];
// let i=0;
// while(i<a.length){
//     console.log(a[i]);
// i++;
// }

// for(let i=0;i<a.length;i++){
//     console.log(a[i]);
// }

// for(let k in a){
//     console.log(k);
// }

// for (let v of a){
//     console.log(v);
// }

//modify array elements
// let a=[23,34,65,78,11,14,27,30];
// console.log(a);
// a[2]=78;
// console.log(a);


// const a=[11,23,5];
// // console.log(a)
// // a.push(50);
// // a.unshift(40);
// // console.log(a);
// // a.pop();


// a.splice(1,0,60);
// console.log(a);
// a.splice(1,2);
// console.log(a);
// a.splice(0,2,30,40,50);
// console.log(a);

// const a=[25,50,12,46];
// a.forEach((element,index,a)=>{
//     a[index]=element+2;
//     console.log(a);
// });

//map,filter,reduce

// const a=[11,2,7,4,6,15,9];
// // let b=a.map((e)=>e+1);
// // console.log(a);
// // console.log(b);

// // let b=a.filter((e)=>e>7);
// // console.log(a);
// // console.log(b);

// let result=a.reduce((s,e)=>s+e,0);
// console.log(result);

// const a=[23,56,11,23,10,5,7];
// // console.log(a.indexOf(23));
// // console.log(a.lastIndexOf(23));
// // console.log(a.includes(11));
// // console.log(a.join('-'));

// let b=a.slice(2,6);
// console.log(b);

let a=[1,2,3];
let b=[4,5,6];

