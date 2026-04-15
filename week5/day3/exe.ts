// 🌟 Exercise 1: Class with Access Modifiers
class Employee {
  private name: string;
  private salary: number;
  public position: string;
  protected department: string;

  constructor(name: string, salary: number, position: string, department: string) {
    this.name = name;
    this.salary = salary;
    this.position = position;
    this.department = department;
  }

  public getEmployeeInfo(): string {
    return `Name: ${this.name}, Position: ${this.position}`;
  }
}

// Test Employee
const emp1 = new Employee("Alice", 50000, "Developer", "IT");
console.log(emp1.getEmployeeInfo());


// 🌟 Exercise 2: Readonly Properties
class Product {
  readonly id: number;
  public name: string;
  public price: number;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  getProductInfo(): string {
    return `Product: ${this.name}, Price: ${this.price}`;
  }
}

// Test Product
const product1 = new Product(1, "Laptop", 1000);
console.log(product1.getProductInfo());

// ❌ This will cause an error in TypeScript
// product1.id = 2;


// 🌟 Exercise 3: Class Inheritance
class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): string {
    return "Some sound";
  }
}

class Dog extends Animal {
  makeSound(): string {
    return "bark";
  }
}

// Test Dog
const dog1 = new Dog("Buddy");
console.log(dog1.makeSound());


// 🌟 Exercise 4: Static Methods
class Calculator {
  static add(a: number, b: number): number {
    return a + b;
  }

  static subtract(a: number, b: number): number {
    return a - b;
  }
}

// Test Calculator
console.log(Calculator.add(10, 5));
console.log(Calculator.subtract(10, 5));


// 🌟 Exercise 5: Interfaces
interface User {
  readonly id: number;
  name: string;
  email: string;
}

interface PremiumUser extends User {
  membershipLevel?: string;
}

function printUserDetails(user: PremiumUser): void {
  console.log(`ID: ${user.id}`);
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);
  
  if (user.membershipLevel) {
    console.log(`Membership: ${user.membershipLevel}`);
  }
}

// Test Interface
const user1: PremiumUser = {
  id: 101,
  name: "John",
  email: "john@example.com",
  membershipLevel: "Gold"
};

printUserDetails(user1);