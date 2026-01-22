/*Inheritance

Definition: Inheritance allows a class (child/subclass) to acquire properties and behaviors of another class (parent/superclass).

Key points:

Promotes code reuse.

Supports a hierarchical relationship.
*/

class Person {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log("My name is " + this.name);
  }
}

class Student extends Person {
  constructor(name, rollNo) {
    super(name);
    this.rollNo = rollNo;
  }

  study() {
    console.log(this.name + " is studying");
  }
}

let s1 = new Student("Amit", 101);
s1.introduce();
s1.study();
