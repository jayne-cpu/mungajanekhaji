// =======================
// 🌟 Exercise 1: Intersection Types
// =======================

type Person = {
  name: string;
  age: number;
};

type Address = {
  street: string;
  city: string;
};

type PersonWithAddress = Person & Address;

const user: PersonWithAddress = {
  name: "Jane",
  age: 20,
  street: "Kenyatta Avenue",
  city: "Nairobi"
};

console.log("PersonWithAddress:", user);


// =======================
// 🌟 Exercise 2: Type Guards with Union Types
// =======================

function describeValue(value: number | string): string {
  if (typeof value === "number") {
    return "This is a number";
  } else {
    return "This is a string";
  }
}

console.log(describeValue(10));
console.log(describeValue("Hello"));


// =======================
// 🌟 Exercise 3: Type Casting
// =======================

let someValue: any = "Hello TypeScript";
let strValue: string = someValue as string;

console.log("Uppercase:", strValue.toUpperCase());


// =======================
// 🌟 Exercise 4: Type Assertions with Union Types
// =======================

function getFirstElement(arr: (number | string)[]): string {
  return arr[0] as string;
}

console.log("First element:", getFirstElement(["hello", 2, 3]));
console.log("First element:", getFirstElement([1, 2, 3]));


// =======================
// 🌟 Exercise 5: Generic Constraints
// =======================

function logLength<T extends { length: number }>(item: T): void {
  console.log("Length:", item.length);
}

logLength("Hello");
logLength([1, 2, 3, 4]);


// =======================
// 🌟 Exercise 6: Intersection Types + Type Guards
// =======================

type Job = {
  position: string;
  department: string;
};

type Employee = Person & Job;

function describeEmployee(emp: Employee): string {
  if (emp.position === "Manager") {
    return `${emp.name} is a Manager in ${emp.department}`;
  } else if (emp.position === "Developer") {
    return `${emp.name} is a Developer in ${emp.department}`;
  } else {
    return `${emp.name} works as ${emp.position}`;
  }
}

const emp1: Employee = {
  name: "John",
  age: 30,
  position: "Manager",
  department: "Sales"
};

console.log(describeEmployee(emp1));


// =======================
// 🌟 Exercise 7: Type Assertions + Generic Constraints
// =======================

function formatInput<T extends { toString(): string }>(input: T): string {
  const str = input.toString() as string;
  return `Formatted: ${str}`;
}

console.log(formatInput(123));
console.log(formatInput(true));
console.log(formatInput("Hello"));


// =======================
// ✅ Done!
// =======================