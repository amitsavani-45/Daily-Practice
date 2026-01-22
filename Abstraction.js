/*Abstraction

Definition: Abstraction is the concept of showing only essential features of an object while hiding the unnecessary details.

Key points:

Focuses on what an object does, not how it does it.

Achieved using abstract classes or interfaces in some languages.
*/

class Vehicle {
  start() {
    console.log("Vehicle started");
  }
}

class Car extends Vehicle {
  start() {
    console.log("Car starts with key");
  }
}

let car = new Car();
car.start();
