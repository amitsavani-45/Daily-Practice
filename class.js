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


class player{
    constructor(player,team)
    {
        this.player=player;
        this.team=team;
    }


play() 
  {console.log(this.player +" "+"is playing for " +" " +this.team);
        }
}
let player1=new player("virat Kohli","RCB");
let player2=new player("Rohit Sharma","MI");


player1.play();
player2.play();
    