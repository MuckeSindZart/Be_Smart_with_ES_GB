//---------------------------------------------------------------//
const Person = {
  name: this.name,
  age: this.age,
  gender: this.gender,
  introduce() {
    console.log(
      `My name is ${this.name} I'm ${this.age} years old and I identify as ${this.gender}.`
    );
  },
  changeName(newName) {
    this.name = newName;
  },
};
Person.name = "John";
Person.age = 25;
Person.gender = "male";
Person.introduce();
Person.changeName("Mike");
Person.introduce();

//---------------------------------------------------------------//
const Animal = {
  name: this.name,
  eat() {
    console.log(`${this.name} eat`);
  },
};
const Dog = {
  name: this.name,
  bark() {
    console.log(`${this.name} bark`);
  },
};

Dog.name = "rex";

Dog.eat = Animal.eat;

Dog.eat();

//---------------------------------------------------------------//

const Calculator = {
  arg1: 1,
  arg2: 2,

  add(num1, num2) {
    return num1 + num2;
  },
  subtract(num1, num2) {
    return num1 - num2;
  },
  multiply() {
    return this.arg1 * this.arg2;
  },
};

const contextNumbers = {
  arg1: 20,
  arg2: 50,
};

console.log(Calculator.add.call(null, 5, 3)); // Вывод: 8
console.log(Calculator.subtract.apply(null, [5, 3])); // Вывод: 2
console.log(Calculator.multiply.apply(contextNumbers));
//---------------------------------------------------------------//

class Persons {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(`My name is ${this.name} I'm ${this.age} years old.`);
  }
}

const Johnny = new Persons("Johnny", 25);
Johnny.introduce();

//---------------------------------------------------------------//
class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
    console.log(
      `Deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance}`
    );
  }
  withdraw(amount) {
    if (amount > this.balance) {
      console.log(`Insufficient funds in account${this.accountNumber}`);
    } else {
      this.balance -= amount;
      console.log(
        `Withdrawn ${amount} from account ${this.accountNumber}. New balance: ${this.balance}`
      );
    }
  }
}

const account1 = new BankAccount("1234567890", 1000);

account1.deposit(500); // Вывод: Deposited 500 into account 1234567890. New balance: 1500
account1.withdraw(200); // Вывод: Withdrawn 200 from account 1234567890. New balance: 1300
account1.withdraw(1500); // Вывод: Insufficient funds in account 1234567890
//---------------------------------------------------------------//
const sumDigits = (numb) => {
  console.log(numb % 10, "+");
  if (numb < 10) {
    return numb;
  } else {
    return (numb % 10) + sumDigits(Math.floor(numb / 10));
  }
};

console.log("=", sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
console.log("=", sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6+ 7 + 8 + 9)

//---------------------------------------------------------------//
//---------------------------------------------------------------//
//---------------------------------------------------------------//
//---------------------------------------------------------------//
//---------------------------------------------------------------//
//---------------------------------------------------------------//
