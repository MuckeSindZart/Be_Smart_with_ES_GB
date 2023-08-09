/* Задание 1: ""Управление библиотекой книг""
Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

Свойство title (название) - строка, название книги.
Свойство author (автор) - строка, имя автора книги.
Свойство pages (количество страниц) - число, количество страниц в книге.
Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц). */
//---------------------------------------------------------------//
console.log("Task1---------------------------------------------------------------\n");

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  displayInfo() {
    console.log(`Title: ${this.title}
      Author: ${this.author}
      Pages: ${this.pages}\n`);
  }
}

//

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 281);

book1.displayInfo();
book2.displayInfo();

//---------------------------------------------------------------//
/* Задание 2: ""Управление списком студентов""
Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

Свойство name (имя) - строка, имя студента.
Свойство age (возраст) - число, возраст студента.
Свойство grade (класс) - строка, класс, в котором учится студент.
Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).

// Пример использования класса
const student1 = new Student(""John Smith"", 16, ""10th grade"");
student1.displayInfo();
// Вывод:
// Name: John Smith
// Age: 16
// Grade: 10th grade

const student2 = new Student(""Jane Doe"", 17, ""11th grade"");
student2.displayInfo();
// Вывод:
// Name: Jane Doe
// Age: 17
// Grade: 11th grade" */
//---------------------------------------------------------------//
console.log("Task2---------------------------------------------------------------\n");

class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  displayInfo() {
    console.log(`Name: ${this.name}
      Age: ${this.age}
      Grade: ${this.grade}\n`);
  }
}

//

const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();

const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();
//---------------------------------------------------------------//

/* ****** Задача необязательная для выполнения:

Это расширенная версия задачи с банком, которую мы решали на семинаре:

Создайте класс "Банк", который будет иметь следующие свойства: название банка, список клиентов и список счетов. Класс должен иметь методы для добавления нового клиента, открытия нового счета для клиента, пополнения счета, снятия денег со счета и проверки баланса.

const bank = new Bank("Мой Банк");

const client1 = new Client("Иван", 25);
const client2 = new Client("Мария", 30);

bank.addClient(client1);
bank.addClient(client2);

bank.openAccount(client1, 1000);
bank.openAccount(client2, 500);

bank.deposit(123456789, 200);
bank.withdraw(987654321, 100);
bank.checkBalance(123456789);
bank.checkBalance(987654321);
*/
//---------------------------------------------------------------//
console.log("*Task3---------------------------------------------------------------\n");

class Client {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

//

class BankAccount {
  constructor(accountNumber, initialBalance) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited ${amount} at ${this.accountNumber}.
           New balance: ${this.balance}\n`);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log(`Insufficient funds at ${this.accountNumber}.\n`);
    } else {
      this.balance -= amount;
      console.log(`Withdrawn ${amount} to ${this.accountNumber}.
           New balance: ${this.balance}\n`);
    }
  }
}

//

class Bank {
  constructor(bankName) {
    this.bankName = bankName;
    this.clients = []; // Список клиентов
    this.accounts = []; // Список счетов
  }

  addClient(client) {
    this.clients.push(client);
    console.log(`New client ${client.name} added to ${this.bankName}.\n`);
  }

  openAccount(client, accountNumber, initialBalance) {
    if (!this.clients.includes(client)) {
      console.log(`Client ${client.name} is not registered at ${this.bankName}.\n`);
    } else {
      const newAccount = new BankAccount(accountNumber, initialBalance);
      this.accounts.push(newAccount);
      console.log(
        `New account opened for ${client.name} at ${this.bankName}. 
            Account number: ${accountNumber}
            Balance: ${initialBalance}\n`
      );
    }
  }

  deposit(accountNumber, amount) {
    const account = this.findAccount(accountNumber);
    if (account) {
      account.deposit(amount);
    }
  }

  withdraw(accountNumber, amount) {
    const account = this.findAccount(accountNumber);
    if (account) {
      account.withdraw(amount);
    }
  }

  checkBalance(accountNumber) {
    const account = this.findAccount(accountNumber);
    if (account) {
      console.log(`Account ${accountNumber} check balance: ${account.balance}\n`);
    }
  }

  findAccount(accountNumber) {
    const account = this.accounts.find((account) => account.accountNumber === accountNumber);
    if (!account) {
      console.log(`Account ${accountNumber} not found.\n`);
    }
    return account;
  }
}

//--

const bank = new Bank("Мой Банк");

const IvanClient = new Client("Иван", 25); //Ivan
const MariaClient = new Client("Мария", 30); //Maria

bank.addClient(IvanClient); //Ivan
bank.addClient(MariaClient); //Maria

bank.openAccount(IvanClient, 123456789, 1000); //Ivan
bank.openAccount(IvanClient, 999999990, 1000); //Ivan

bank.openAccount(MariaClient, 987654321, 500); //Maria

bank.deposit(123456789, 200); //Ivan
bank.withdraw(987654321, 100); //Maria

bank.checkBalance(123456789); //Ivan
bank.checkBalance(999999990); //Ivan
bank.checkBalance(987654321); //Maria

bank.withdraw(987654321, 10000); //Maria
bank.checkBalance(790); //Not found
bank.withdraw(123, 100); //Try withdraw from a non account
