// Function declaration
function kgToGrams1(kg) {
    return kg * 1000;
}
console.log(kgToGrams1(2)); // 2000

// Function expression
const kgToGrams2 = function(kg) {
    return kg * 1000;
};
console.log(kgToGrams2(3)); // 3000

// Difference:
// Function declaration is hoisted (can be used before definition)
// Function expression is NOT hoisted

// Arrow function (one line)
const kgToGrams3 = kg => kg * 1000;

console.log(kgToGrams3(4)); // 4000