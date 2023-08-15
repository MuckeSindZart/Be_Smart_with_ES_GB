//---------------------------------------------------------------//
/* Задание 1: ""Управление персоналом компании""

Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:

Свойство name (имя) - строка, имя сотрудника.
Метод displayInfo() - выводит информацию о сотруднике (имя).
Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:

Свойство department (отдел) - строка, отдел, в котором работает менеджер.
Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).
// Пример использования классов
const employee = new Employee(""John Smith"");
employee.displayInfo();
// Вывод:
// Name: John Smith

const manager = new Manager(""Jane Doe"", ""Sales"");
manager.displayInfo();
// Вывод:
// Name: Jane Doe
// Department: Sales */
//---------------------------------------------------------------//
console.log("Task1---------------------------------------------------------------\n");

class Employee {
  constructor(name) {
    this.name = name;
  }

  displayInfo() {
    console.log(`Name: ${this.name}`);
  }
}

class Manager extends Employee {
  constructor(name, department) {
    super(name);
    this.department = department;
  }

  displayInfo() {
    super.displayInfo();
    console.log(`Department: ${this.department}`);
  }
}

//

const employee = new Employee("John Smith");
employee.displayInfo();
console.log();

const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();
console.log();

//---------------------------------------------------------------//
/* ""Управление списком заказов""

Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
Свойство products (продукты) - массив, содержащий список продуктов в заказе.
Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

// Пример использования класса
class Product {
constructor(name, price) {
this.name = name;
this.price = price;
}
}

const order = new Order(12345);

const product1 = new Product(""Phone"", 500);
order.addProduct(product1);

const product2 = new Product(""Headphones"", 100);
order.addProduct(product2);

console.log(order.getTotalPrice()); // Вывод: 600 */
//---------------------------------------------------------------//
console.log("Task2---------------------------------------------------------------\n");

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Order {
  constructor(orderNumber) {
    this.orderNumber = orderNumber;
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  getTotalPrice() {
    let totalPrice = 0;
    for (const product of this.products) {
      totalPrice += product.price;
    }
    return totalPrice;
  }
}

//

const order = new Order(12345);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);

console.log(`Общая стоимость заказа: ${order.getTotalPrice()}`);

//---------------------------------------------------------------//
/* Задача необязательная для выполнения

Задача: Создать класс "Студент", который имеет приватные свойства "имя", "возраст" и "средний балл". Класс должен иметь методы для установки и получения значений свойств, а также метод для вывода информации о студенте.
Про приватные свойства и методы - https://learn.javascript.ru/private-protected-properties-methods

const student = new Student();
student.setName('Питер Паркер);
student.setAge(20);
student.setAverageGrade(85);
student.displayInfo(); */

//---------------------------------------------------------------//
console.log("Task3---------------------------------------------------------------\n");

class Student {
  #name;
  #age;
  #averageGrade;

  setName(name) {
    this.#name = name;
  }

  setAge(age) {
    this.#age = age;
  }

  setAverageGrade(averageGrade) {
    this.#averageGrade = averageGrade;
  }

  displayInfo() {
    console.log(`Name: ${this.#name}`);
    console.log(`Age: ${this.#age}`);
    console.log(`Average Grade: ${this.#averageGrade}`);
  }
}

//

const student = new Student();
student.setName("Питер Паркер");
student.setAge(20);
student.setAverageGrade(85);
student.displayInfo();

//---------------------------------------------------------------//

const dogImagesContainer = document.getElementById("dogImages");
const apiUrl = "https://dog.ceo/api/breeds/image/random/10";

async function fetchDogImages() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error("Error fetching dog images:", error);
    return [];
  }
}

async function displayDogImages() {
  const dogImages = await fetchDogImages();

  for (const imageUrl of dogImages) {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = "Dog Image";
    dogImagesContainer.appendChild(img);
  }
}

function clearDogImages() {
  dogImagesContainer.innerHTML = "";
}

async function startDisplayingImages() {
  for (let i = 0; i < 3; i++) {
    await displayDogImages();
    await new Promise((resolve) => setTimeout(resolve, 3000));
    clearDogImages();
  }
}

startDisplayingImages();
