//1.Evaluate these (ie True or False)

//[2] === [2] 
//{} === {}
  //correct answer is false because they are different objects in memory, even though they have the same content.


//2.What is, for each object below, the value of the property number and why?

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number)
console.log(object3.number)
console.log(object4.number)
  //correct answer is 4 for object2 and object3 because they reference the same object in memory as object1, while object4 remains unchanged at 5 because it is a different object in memory.

  //Animal & Mammal Classes
//Solution:
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mammal extends Animal {
  sound(noise) {
    return `${noise} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}

// instance
const farmerCow = new Mammal("Lily", "cow", "brown and white");

console.log(farmerCow.sound("Moooo"));
