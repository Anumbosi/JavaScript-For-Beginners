class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
    }
  }
  
  const person1 = new Person('John Doe', 30);
  person1.greet(); // Hello, I'm John Doe and I'm 30 years old.
  
  const person2 = new Person('Jane Doe', 25);
  person2.greet(); // Hello, I'm Jane Doe and I'm 25 years old.