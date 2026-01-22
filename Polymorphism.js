/*Polymorphism

Definition: Polymorphism means “many forms”—the ability of an object to take multiple forms.

Key points:

Can be achieved through method overloading (same method name, different parameters) and method overriding (child class changes parent’s method behavior).

Makes code more flexible and extensible.
*/

class Animal {
  sound() {
    console.log("Animal makes sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  sound() {
    console.log("Cat meows");
  }
}

let animals = [new Dog(), new Cat()];

animals.forEach(animal => animal.sound());
