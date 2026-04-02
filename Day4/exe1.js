// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3; // same variable is reassigned
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1
funcOne();
// Prediction: "inside the funcOne function 3"
// Explanation: a is changed from 5 → 3 inside the if block (same scope)

// #1.2
// If declared with const:
// ERROR → because const cannot be reassigned (a = 3 would fail)



//#2
let a = 0;

function funcTwo() {
    a = 5; // modifies global variable
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1
funcThree(); // 0
funcTwo();   // changes a → 5
funcThree(); // 5

// Explanation:
// First call → a = 0
// funcTwo modifies global a
// Second call → a = 5

// #2.2
// If declared with const:
// ERROR → cannot reassign a inside funcTwo()



//#3
function funcFour() {
    window.a = "hello"; // creates global variable
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1
funcFour();
funcFive();

// Prediction: "hello"
// Explanation: window.a makes a global variable accessible everywhere



//#4
let a = 1;

function funcSix() {
    let a = "test"; // local variable shadows global
    alert(`inside the funcSix function ${a}`);
}

// #4.1
funcSix();

// Prediction: "test"
// Explanation: local variable overrides global inside function

// #4.2
// If const instead of let:
// SAME RESULT → "test"
// (no reassignment, so const works fine)



//#5
let a = 2;

if (true) {
    let a = 5; // block-scoped variable
    alert(`in the if block ${a}`);
}

alert(`outside of the if block ${a}`);

// #5.1
// Output:
// "in the if block 5"
// "outside of the if block 2"

// Explanation:
// let is block-scoped → inner a is different from outer a

// #5.2
// If const instead of let:
// SAME RESULT → works fine (no reassignment)
