/*
Regular Expressions
A Regular Expression is a sequence of characters that forms a search pattern.

Regex is a common shorthand for a regular expression.

JavaScript RegExp is an Object for handling Regular Expressions.

RegExp are be used for:

Text searching
Text replacing
Text validation
*/

// Basic Match
const text = "Hello, my email is john@example.com";
const emailPattern = /@/;

console.log(emailPattern.test(text));

//  Finding Numbers
const sentence = "I have 3 cats and 2 dogs";
const numberPattern = /\d+/; 

console.log(sentence.match(numberPattern)); 

// Case-Insensitive Search
const text1 = "JavaScript is awesome";
const pattern = /javascript/i; 

console.log(pattern.test(text1)); 

// Find All Matches
const text2 = "cat bat rat mat";
const pattern1= /at/g; // 'g' flag = global (find all)

console.log(text2.match(pattern1)); 

//  Replace Text
const text3 = "I like cats";
const newText = text3.replace(/cats/, "dogs");

console.log(newText)