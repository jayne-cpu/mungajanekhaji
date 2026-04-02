const people = ["Greg", "Mary", "Devon", "James"];
people.shift(); // removes first element
people[people.indexOf("James")] = "Jason";
people.push("Jane"); // replace with your name
console.log(people.indexOf("Mary"));
["Mary", "Devon", "Jason", "Jane"]
const copy = people.slice(1, 3);
console.log(copy); // ["Devon", "Jason"]
console.log(people.indexOf("Foo")); // -1
let last = people[people.length - 1];
console.log(last);
for (let person of people) {
  console.log(person);
}
for (let person of people) {
  console.log(person);
  if (person === "Devon") {
    break;
  }
}
