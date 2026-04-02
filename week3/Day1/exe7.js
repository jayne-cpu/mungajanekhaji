const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let society = names
  .sort()
  .map(name => name[0])
  .join("");

console.log(society); // ABJKPS