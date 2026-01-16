/*
What is an Object?

In JavaScript (and most programming languages):

An object is a collection of related data and functions.





Data is called properties (or attributes)



Functions are called methods (or behaviors)

Think of an object as a real-world thing with characteristics and actions.

🔹 Real-life analogy





Object: A car



Properties: color, brand, speed



Methods: drive(), stop(), honk()

*/

let car = {
  brand: "Toyota",
  color: "Red",
  speed: 120,
  drive: function() {
    console.log("The car is driving");
  }
};

console.log(car.brand);
car.drive();            
