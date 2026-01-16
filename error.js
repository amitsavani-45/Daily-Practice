// Reference Errors
// Type Errors
// Range Errors
// URI Errors
// Syntax Errors
// Eval Error (deprecated)
// Silent Errors (next chapter)


try {
    let result = 10 / 0;
    console.log(unknownVariable); 
} catch (error) {
    
    console.log("Something went wrong:", error.message);

    }

    try {
    console.log("Opening file...");
   
    throw new Error("File not found!");
} catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("Closing file..."); 
}


function checkAge(age) {
    if (age < 18) {
        throw new Error("You must be 18 or older!");
    }
    console.log("Access granted!");
}

try {
    checkAge(15); 
} catch (error) {
    console.log(error.message); 
}