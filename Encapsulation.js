/*
OOP has four main concepts that make programming easier, more organized, and reusable.

1️ Encapsulation (Data Hiding)

What it is:
Keeping data (properties) safe inside an object and only allowing access through methods.

Why it’s used:

Protects data from unwanted changes

Makes objects more secure and reliable

Example in JavaScript:

class BankAccount {
  #balance = 0;  // private property

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

let account = new BankAccount();
account.deposit(500);
console.log(account.getBalance()); // 500


#balance cannot be accessed directly → safe from external changes

*/