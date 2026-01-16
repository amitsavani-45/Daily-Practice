class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  drive() {
    console.log("The car is driving");
  }
}

let car1 = new Car("Toyota", "Red");
car1.drive();
