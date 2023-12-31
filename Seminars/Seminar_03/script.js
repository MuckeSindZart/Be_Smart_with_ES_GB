//---------------------------------------------------------------//

getPrototypeChain = (obj) => {
  let protos = [];
  while (obj !== null) {
    protos.push(obj);
    obj = Object.getPrototypeOf(obj);
  }

  return protos;
};

console.log(getPrototypeChain({arg1: 100500}));

//---------------------------------------------------------------//

class Persons {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(`Меня зовут ${this.name} и ${this.age} лет.`);
  }
}
// Пример:
const person1 = new Persons("John", 25);
person1.introduce(); // Вывод: Меня зовут John и мне 25 лет

//---------------------------------------------------------------//
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`This Animal ${this.name} - say hi`);
  }
}

class Dog extends Animal {
  constructor(name, bread) {
    super(name);
    this.bread = bread;
  }
  speak() {
    console.log(`This Dog ${this.name} - say hi`);
  }

  fetch() {
    console.log(`This Dog ${this.name}, Cath a ball`);
  }
}

const puk = new Animal("jp");
puk.speak();

const Pup = new Dog("Snup", "multDog");
Pup.speak();
console.log(Pup.bread);
Pup.fetch();
//---------------------------------------------------------------//

//---------------------------------------------------------------//

//---------------------------------------------------------------//

//---------------------------------------------------------------//

//---------------------------------------------------------------//

//---------------------------------------------------------------//

//---------------------------------------------------------------//

//---------------------------------------------------------------//

//---------------------------------------------------------------//

//---------------------------------------------------------------//

//---------------------------------------------------------------//

//---------------------------------------------------------------//

//---------------------------------------------------------------//

//---------------------------------------------------------------//

//---------------------------------------------------------------//

//---------------------------------------------------------------//
